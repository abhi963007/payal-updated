var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  c = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n,
    )
  );
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    ((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    var x = (b.prototype = new y());
    ((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0));
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      T = Object.prototype.hasOwnProperty;
    function E(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function D(e, t) {
      return E(e.type, t, e.props);
    }
    function O(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function k(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var A = /\/+/g;
    function j(e, t) {
      return typeof e == `object` && e && e.key != null
        ? k(`` + e.key)
        : t.toString(36);
    }
    function M(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function ee(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), ee(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + j(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(A, `$&/`) + `/`),
              ee(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (O(o) &&
                (o = D(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(A, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + j(a, u)), (c += ee(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          ((a = a.value), (s = l + j(a, u++)), (c += ee(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return ee(M(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function N(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        ee(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function te(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var P =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      F = {
        map: N,
        forEach: function (e, t, n) {
          N(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            N(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            N(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!O(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = F),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !T.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return E(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            T.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return E(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = O),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: te,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          (i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, P));
        } catch (e) {
          P(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (w.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.6`));
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), S || ((S = !0), O()));
        else {
          var t = n(l);
          t !== null && j(x, t.startTime - e);
        }
    }
    var S = !1,
      C = -1,
      w = 5,
      T = -1;
    function E() {
      return g ? !0 : !(e.unstable_now() - T < w);
    }
    function D() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        T = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && E());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && j(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? O() : (S = !1);
        }
      }
    }
    var O;
    if (typeof y == `function`)
      O = function () {
        y(D);
      };
    else if (typeof MessageChannel < `u`) {
      var k = new MessageChannel(),
        A = k.port2;
      ((k.port1.onmessage = D),
        (O = function () {
          A.postMessage(null);
        }));
    } else
      O = function () {
        _(D, 0);
      };
    function j(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), j(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), O()))),
          r
        );
      }),
      (e.unstable_shouldYield = E),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = o((e) => {
    var t = u();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          ((s.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.6`));
  }),
  m = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = p()));
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s; ) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u; ) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u; ) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      T = Symbol.for(`react.suspense`),
      E = Symbol.for(`react.suspense_list`),
      D = Symbol.for(`react.memo`),
      O = Symbol.for(`react.lazy`),
      k = Symbol.for(`react.activity`),
      A = Symbol.for(`react.memo_cache_sentinel`),
      j = Symbol.iterator;
    function M(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (j && e[j]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var ee = Symbol.for(`react.client.reference`);
    function N(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case T:
          return `Suspense`;
        case E:
          return `SuspenseList`;
        case k:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case w:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case D:
            return (
              (t = e.displayName || null),
              t === null ? N(e.type) || `Memo` : t
            );
          case O:
            ((t = e._payload), (e = e._init));
            try {
              return N(e(t));
            } catch {}
        }
      return null;
    }
    var te = Array.isArray,
      P = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      F = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      I = { pending: !1, data: null, method: null, action: null },
      ne = [],
      re = -1;
    function L(e) {
      return { current: e };
    }
    function R(e) {
      0 > re || ((e.current = ne[re]), (ne[re] = null), re--);
    }
    function z(e, t) {
      (re++, (ne[re] = e.current), (e.current = t));
    }
    var ie = L(null),
      ae = L(null),
      oe = L(null),
      se = L(null);
    function ce(e, t) {
      switch ((z(oe, t), z(ae, e), z(ie, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Vd(t)), (e = Hd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (R(ie), z(ie, e));
    }
    function le() {
      (R(ie), R(ae), R(oe));
    }
    function B(e) {
      e.memoizedState !== null && z(se, e);
      var t = ie.current,
        n = Hd(t, e.type);
      t !== n && (z(ae, e), z(ie, n));
    }
    function ue(e) {
      (ae.current === e && (R(ie), R(ae)),
        se.current === e && (R(se), (Qf._currentValue = I)));
    }
    var de, fe;
    function pe(e) {
      if (de === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((de = (t && t[1]) || ``),
            (fe =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        de +
        e +
        fe
      );
    }
    var me = !1;
    function he(e, t) {
      if (!e || me) return ``;
      me = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (
            ;
            i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);
          )
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((me = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? pe(n) : ``;
    }
    function ge(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return pe(e.type);
        case 16:
          return pe(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? pe(`Suspense Fallback`)
            : pe(`Suspense`);
        case 19:
          return pe(`SuspenseList`);
        case 0:
        case 15:
          return he(e.type, !1);
        case 11:
          return he(e.type.render, !1);
        case 1:
          return he(e.type, !0);
        case 31:
          return pe(`Activity`);
        default:
          return ``;
      }
    }
    function _e(e) {
      try {
        var t = ``,
          n = null;
        do ((t += ge(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var ve = Object.prototype.hasOwnProperty,
      V = t.unstable_scheduleCallback,
      ye = t.unstable_cancelCallback,
      be = t.unstable_shouldYield,
      xe = t.unstable_requestPaint,
      Se = t.unstable_now,
      Ce = t.unstable_getCurrentPriorityLevel,
      we = t.unstable_ImmediatePriority,
      Te = t.unstable_UserBlockingPriority,
      Ee = t.unstable_NormalPriority,
      De = t.unstable_LowPriority,
      Oe = t.unstable_IdlePriority,
      ke = t.log,
      Ae = t.unstable_setDisableYieldValue,
      H = null,
      je = null;
    function Me(e) {
      if (
        (typeof ke == `function` && Ae(e),
        je && typeof je.setStrictMode == `function`)
      )
        try {
          je.setStrictMode(H, e);
        } catch {}
    }
    var Ne = Math.clz32 ? Math.clz32 : Ie,
      Pe = Math.log,
      Fe = Math.LN2;
    function Ie(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Pe(e) / Fe) | 0)) | 0);
    }
    var Le = 256,
      Re = 262144,
      ze = 4194304;
    function Be(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Ve(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Be(n)))
                : (i = Be(o))
              : (i = Be(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = Be(n)))
                  : (i = Be(o)))
              : (i = Be(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function He(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ue(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function We() {
      var e = ze;
      return ((ze <<= 1), !(ze & 62914560) && (ze = 4194304), e);
    }
    function Ge(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Ke(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function qe(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Ne(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && Je(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function Je(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Ne(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function Ye(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Ne(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function Xe(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : Ze(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function Ze(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Qe(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function $e() {
      var e = F.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function et(e, t) {
      var n = F.p;
      try {
        return ((F.p = e), t());
      } finally {
        F.p = n;
      }
    }
    var tt = Math.random().toString(36).slice(2),
      nt = `__reactFiber$` + tt,
      rt = `__reactProps$` + tt,
      it = `__reactContainer$` + tt,
      at = `__reactEvents$` + tt,
      ot = `__reactListeners$` + tt,
      st = `__reactHandles$` + tt,
      ct = `__reactResources$` + tt,
      lt = `__reactMarker$` + tt;
    function ut(e) {
      (delete e[nt], delete e[rt], delete e[at], delete e[ot], delete e[st]);
    }
    function dt(e) {
      var t = e[nt];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[it] || n[nt])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = df(e); e !== null; ) {
              if ((n = e[nt])) return n;
              e = df(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function ft(e) {
      if ((e = e[nt] || e[it])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function pt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function mt(e) {
      var t = e[ct];
      return (
        (t ||= e[ct] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function ht(e) {
      e[lt] = !0;
    }
    var gt = new Set(),
      _t = {};
    function vt(e, t) {
      (yt(e, t), yt(e + `Capture`, t));
    }
    function yt(e, t) {
      for (_t[e] = t, e = 0; e < t.length; e++) gt.add(t[e]);
    }
    var bt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      xt = {},
      St = {};
    function Ct(e) {
      return ve.call(St, e)
        ? !0
        : ve.call(xt, e)
          ? !1
          : bt.test(e)
            ? (St[e] = !0)
            : ((xt[e] = !0), !1);
    }
    function wt(e, t, n) {
      if (Ct(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Tt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Et(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Dt(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Ot(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function kt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function At(e) {
      if (!e._valueTracker) {
        var t = Ot(e) ? `checked` : `value`;
        e._valueTracker = kt(e, t, `` + e[t]);
      }
    }
    function jt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Ot(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function Mt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Nt = /[\n"\\]/g;
    function Pt(e) {
      return e.replace(Nt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Ft(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + Dt(t))
            : e.value !== `` + Dt(t) && (e.value = `` + Dt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Lt(e, o, Dt(n))
          : Lt(e, o, Dt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + Dt(s))
          : e.removeAttribute(`name`));
    }
    function It(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          At(e);
          return;
        }
        ((n = n == null ? `` : `` + Dt(n)),
          (t = t == null ? n : `` + Dt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        At(e));
    }
    function Lt(e, t, n) {
      (t === `number` && Mt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Rt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + Dt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function zt(e, t, n) {
      if (
        t != null &&
        ((t = `` + Dt(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Dt(n);
    }
    function Bt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (te(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = Dt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        At(e));
    }
    function Vt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Ht = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function Ut(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Ht.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function Wt(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t)
          ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Ut(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && Ut(e, o, t[o]);
    }
    function Gt(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var Kt = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      qt =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Jt(e) {
      return qt.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function Yt() {}
    var Xt = null;
    function Zt(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Qt = null,
      $t = null;
    function en(e) {
      var t = ft(e);
      if (t && (e = t.stateNode)) {
        var n = e[rt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Ft(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Pt(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[rt] || null;
                  if (!a) throw Error(i(90));
                  Ft(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && jt(r));
            }
            break a;
          case `textarea`:
            zt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Rt(e, !!n.multiple, t, !1));
        }
      }
    }
    var tn = !1;
    function nn(e, t, n) {
      if (tn) return e(t, n);
      tn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((tn = !1),
          (Qt !== null || $t !== null) &&
            (_u(), Qt && ((t = Qt), (e = $t), ($t = Qt = null), en(t), e)))
        )
          for (t = 0; t < e.length; t++) en(e[t]);
      }
    }
    function rn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[rt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var an = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      on = !1;
    if (an)
      try {
        var sn = {};
        (Object.defineProperty(sn, "passive", {
          get: function () {
            on = !0;
          },
        }),
          window.addEventListener(`test`, sn, sn),
          window.removeEventListener(`test`, sn, sn));
      } catch {
        on = !1;
      }
    var cn = null,
      ln = null,
      un = null;
    function dn() {
      if (un) return un;
      var e,
        t = ln,
        n = t.length,
        r,
        i = `value` in cn ? cn.value : cn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (un = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function fn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function pn() {
      return !0;
    }
    function mn() {
      return !1;
    }
    function hn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? pn
            : mn),
          (this.isPropagationStopped = mn),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = pn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = pn));
          },
          persist: function () {},
          isPersistent: pn,
        }),
        t
      );
    }
    var U = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      gn = hn(U),
      _n = h({}, U, { view: 0, detail: 0 }),
      vn = hn(_n),
      yn,
      bn,
      xn,
      Sn = h({}, _n, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Nn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== xn &&
                (xn && e.type === `mousemove`
                  ? ((yn = e.screenX - xn.screenX),
                    (bn = e.screenY - xn.screenY))
                  : (bn = yn = 0),
                (xn = e)),
              yn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : bn;
        },
      }),
      Cn = hn(Sn),
      wn = hn(h({}, Sn, { dataTransfer: 0 })),
      Tn = hn(h({}, _n, { relatedTarget: 0 })),
      En = hn(h({}, U, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Dn = hn(
        h({}, U, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      On = hn(h({}, U, { data: 0 })),
      kn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      An = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      jn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Mn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = jn[e])
          ? !!t[e]
          : !1;
    }
    function Nn() {
      return Mn;
    }
    var Pn = hn(
        h({}, _n, {
          key: function (e) {
            if (e.key) {
              var t = kn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = fn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? An[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Nn,
          charCode: function (e) {
            return e.type === `keypress` ? fn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? fn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Fn = hn(
        h({}, Sn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      In = hn(
        h({}, _n, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Nn,
        }),
      ),
      Ln = hn(h({}, U, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Rn = hn(
        h({}, Sn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      zn = hn(h({}, U, { newState: 0, oldState: 0 })),
      Bn = [9, 13, 27, 32],
      Vn = an && `CompositionEvent` in window,
      Hn = null;
    an && `documentMode` in document && (Hn = document.documentMode);
    var Un = an && `TextEvent` in window && !Hn,
      Wn = an && (!Vn || (Hn && 8 < Hn && 11 >= Hn)),
      Gn = ` `,
      Kn = !1;
    function qn(e, t) {
      switch (e) {
        case `keyup`:
          return Bn.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function Jn(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var Yn = !1;
    function Xn(e, t) {
      switch (e) {
        case `compositionend`:
          return Jn(t);
        case `keypress`:
          return t.which === 32 ? ((Kn = !0), Gn) : null;
        case `textInput`:
          return ((e = t.data), e === Gn && Kn ? null : e);
        default:
          return null;
      }
    }
    function Zn(e, t) {
      if (Yn)
        return e === `compositionend` || (!Vn && qn(e, t))
          ? ((e = dn()), (un = ln = cn = null), (Yn = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return Wn && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var Qn = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function $n(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!Qn[e.type] : t === `textarea`;
    }
    function er(e, t, n, r) {
      (Qt ? ($t ? $t.push(r) : ($t = [r])) : (Qt = r),
        (t = Td(t, `onChange`)),
        0 < t.length &&
          ((n = new gn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var tr = null,
      nr = null;
    function rr(e) {
      _d(e, 0);
    }
    function ir(e) {
      if (jt(pt(e))) return e;
    }
    function ar(e, t) {
      if (e === `change`) return t;
    }
    var or = !1;
    if (an) {
      var sr;
      if (an) {
        var cr = `oninput` in document;
        if (!cr) {
          var lr = document.createElement(`div`);
          (lr.setAttribute(`oninput`, `return;`),
            (cr = typeof lr.oninput == `function`));
        }
        sr = cr;
      } else sr = !1;
      or = sr && (!document.documentMode || 9 < document.documentMode);
    }
    function ur() {
      tr && (tr.detachEvent(`onpropertychange`, dr), (nr = tr = null));
    }
    function dr(e) {
      if (e.propertyName === `value` && ir(nr)) {
        var t = [];
        (er(t, nr, e, Zt(e)), nn(rr, t));
      }
    }
    function fr(e, t, n) {
      e === `focusin`
        ? (ur(), (tr = t), (nr = n), tr.attachEvent(`onpropertychange`, dr))
        : e === `focusout` && ur();
    }
    function pr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return ir(nr);
    }
    function mr(e, t) {
      if (e === `click`) return ir(t);
    }
    function hr(e, t) {
      if (e === `input` || e === `change`) return ir(t);
    }
    function gr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var _r = typeof Object.is == `function` ? Object.is : gr;
    function vr(e, t) {
      if (_r(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ve.call(t, i) || !_r(e[i], t[i])) return !1;
      }
      return !0;
    }
    function yr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function br(e, t) {
      var n = yr(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = yr(n);
      }
    }
    function xr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? xr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Sr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Mt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Mt(e.document);
      }
      return t;
    }
    function Cr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var wr = an && `documentMode` in document && 11 >= document.documentMode,
      Tr = null,
      Er = null,
      Dr = null,
      Or = !1;
    function kr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Or ||
        Tr == null ||
        Tr !== Mt(r) ||
        ((r = Tr),
        `selectionStart` in r && Cr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Dr && vr(Dr, r)) ||
          ((Dr = r),
          (r = Td(Er, `onSelect`)),
          0 < r.length &&
            ((t = new gn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Tr))));
    }
    function Ar(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var jr = {
        animationend: Ar(`Animation`, `AnimationEnd`),
        animationiteration: Ar(`Animation`, `AnimationIteration`),
        animationstart: Ar(`Animation`, `AnimationStart`),
        transitionrun: Ar(`Transition`, `TransitionRun`),
        transitionstart: Ar(`Transition`, `TransitionStart`),
        transitioncancel: Ar(`Transition`, `TransitionCancel`),
        transitionend: Ar(`Transition`, `TransitionEnd`),
      },
      Mr = {},
      Nr = {};
    an &&
      ((Nr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete jr.animationend.animation,
        delete jr.animationiteration.animation,
        delete jr.animationstart.animation),
      `TransitionEvent` in window || delete jr.transitionend.transition);
    function Pr(e) {
      if (Mr[e]) return Mr[e];
      if (!jr[e]) return e;
      var t = jr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Nr) return (Mr[e] = t[n]);
      return e;
    }
    var Fr = Pr(`animationend`),
      Ir = Pr(`animationiteration`),
      Lr = Pr(`animationstart`),
      Rr = Pr(`transitionrun`),
      zr = Pr(`transitionstart`),
      Br = Pr(`transitioncancel`),
      Vr = Pr(`transitionend`),
      Hr = new Map(),
      Ur =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    Ur.push(`scrollEnd`);
    function Wr(e, t) {
      (Hr.set(e, t), vt(t, [e]));
    }
    var Gr =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      Kr = [],
      qr = 0,
      Jr = 0;
    function Yr() {
      for (var e = qr, t = (Jr = qr = 0); t < e; ) {
        var n = Kr[t];
        Kr[t++] = null;
        var r = Kr[t];
        Kr[t++] = null;
        var i = Kr[t];
        Kr[t++] = null;
        var a = Kr[t];
        if (((Kr[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && $r(n, i, a);
      }
    }
    function Xr(e, t, n, r) {
      ((Kr[qr++] = e),
        (Kr[qr++] = t),
        (Kr[qr++] = n),
        (Kr[qr++] = r),
        (Jr |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function Zr(e, t, n, r) {
      return (Xr(e, t, n, r), ei(e));
    }
    function Qr(e, t) {
      return (Xr(e, null, null, t), ei(e));
    }
    function $r(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ne(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ei(e) {
      if (50 < cu) throw ((cu = 0), (lu = null), Error(i(185)));
      for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var ti = {};
    function ni(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function ri(e, t, n, r) {
      return new ni(e, t, n, r);
    }
    function ii(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function ai(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = ri(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function oi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function si(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) ii(e) && (s = 1);
      else if (typeof e == `string`)
        s = Uf(e, n, ie.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case k:
            return (
              (e = ri(31, n, t, a)),
              (e.elementType = k),
              (e.lanes = o),
              e
            );
          case y:
            return ci(n.children, a, o, t);
          case b:
            ((s = 8), (a |= 24));
            break;
          case x:
            return (
              (e = ri(12, n, t, a | 2)),
              (e.elementType = x),
              (e.lanes = o),
              e
            );
          case T:
            return (
              (e = ri(13, n, t, a)),
              (e.elementType = T),
              (e.lanes = o),
              e
            );
          case E:
            return (
              (e = ri(19, n, t, a)),
              (e.elementType = E),
              (e.lanes = o),
              e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  s = 10;
                  break a;
                case S:
                  s = 9;
                  break a;
                case w:
                  s = 11;
                  break a;
                case D:
                  s = 14;
                  break a;
                case O:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = ri(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function ci(e, t, n, r) {
      return ((e = ri(7, e, r, t)), (e.lanes = n), e);
    }
    function li(e, t, n) {
      return ((e = ri(6, e, null, t)), (e.lanes = n), e);
    }
    function ui(e) {
      var t = ri(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function di(e, t, n) {
      return (
        (t = ri(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var fi = new WeakMap();
    function pi(e, t) {
      if (typeof e == `object` && e) {
        var n = fi.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: _e(t) }), fi.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: _e(t) };
    }
    var mi = [],
      hi = 0,
      gi = null,
      _i = 0,
      vi = [],
      yi = 0,
      bi = null,
      xi = 1,
      Si = ``;
    function Ci(e, t) {
      ((mi[hi++] = _i), (mi[hi++] = gi), (gi = e), (_i = t));
    }
    function wi(e, t, n) {
      ((vi[yi++] = xi), (vi[yi++] = Si), (vi[yi++] = bi), (bi = e));
      var r = xi;
      e = Si;
      var i = 32 - Ne(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ne(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (xi = (1 << (32 - Ne(t) + i)) | (n << i) | r),
          (Si = a + e));
      } else ((xi = (1 << a) | (n << i) | r), (Si = e));
    }
    function Ti(e) {
      e.return !== null && (Ci(e, 1), wi(e, 1, 0));
    }
    function Ei(e) {
      for (; e === gi; )
        ((gi = mi[--hi]), (mi[hi] = null), (_i = mi[--hi]), (mi[hi] = null));
      for (; e === bi; )
        ((bi = vi[--yi]),
          (vi[yi] = null),
          (Si = vi[--yi]),
          (vi[yi] = null),
          (xi = vi[--yi]),
          (vi[yi] = null));
    }
    function Di(e, t) {
      ((vi[yi++] = xi),
        (vi[yi++] = Si),
        (vi[yi++] = bi),
        (xi = t.id),
        (Si = t.overflow),
        (bi = e));
    }
    var Oi = null,
      ki = null,
      Ai = !1,
      ji = null,
      Mi = !1,
      Ni = Error(i(519));
    function Pi(e) {
      throw (
        W(
          pi(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Ni
      );
    }
    function Fi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[nt] = e), (t[rt] = r), n)) {
        case `dialog`:
          (vd(`cancel`, t), vd(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          vd(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < hd.length; n++) vd(hd[n], t);
          break;
        case `source`:
          vd(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (vd(`error`, t), vd(`load`, t));
          break;
        case `details`:
          vd(`toggle`, t);
          break;
        case `input`:
          (vd(`invalid`, t),
            It(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          vd(`invalid`, t);
          break;
        case `textarea`:
          (vd(`invalid`, t), Bt(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        jd(t.textContent, n)
          ? (r.popover != null && (vd(`beforetoggle`, t), vd(`toggle`, t)),
            r.onScroll != null && vd(`scroll`, t),
            r.onScrollEnd != null && vd(`scrollend`, t),
            r.onClick != null && (t.onclick = Yt),
            (t = !0))
          : (t = !1),
        t || Pi(e, !0));
    }
    function Ii(e) {
      for (Oi = e.return; Oi; )
        switch (Oi.tag) {
          case 5:
          case 31:
          case 13:
            Mi = !1;
            return;
          case 27:
          case 3:
            Mi = !0;
            return;
          default:
            Oi = Oi.return;
        }
    }
    function Li(e) {
      if (e !== Oi) return !1;
      if (!Ai) return (Ii(e), (Ai = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && ki && Pi(e),
        Ii(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        ki = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        ki = uf(e);
      } else
        t === 27
          ? ((t = ki),
            Zd(e.type) ? ((e = lf), (lf = null), (ki = e)) : (ki = t))
          : (ki = Oi ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Ri() {
      ((ki = Oi = null), (Ai = !1));
    }
    function zi() {
      var e = ji;
      return (
        e !== null &&
          (Jl === null ? (Jl = e) : Jl.push.apply(Jl, e), (ji = null)),
        e
      );
    }
    function W(e) {
      ji === null ? (ji = [e]) : ji.push(e);
    }
    var Bi = L(null),
      Vi = null,
      Hi = null;
    function Ui(e, t, n) {
      (z(Bi, t._currentValue), (t._currentValue = n));
    }
    function Wi(e) {
      ((e._currentValue = Bi.current), R(Bi));
    }
    function Gi(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Ki(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null; ) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  Gi(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            Gi(s, n, e),
            (s = null));
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function qi(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null; ) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            _r(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === se.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        a = a.return;
      }
      (e !== null && Ki(t, e, n, r), (t.flags |= 262144));
    }
    function Ji(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!_r(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function Yi(e) {
      ((Vi = e),
        (Hi = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function Xi(e) {
      return Qi(Vi, e);
    }
    function Zi(e, t) {
      return (Vi === null && Yi(e), Qi(e, t));
    }
    function Qi(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Hi === null)) {
        if (e === null) throw Error(i(308));
        ((Hi = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else Hi = Hi.next = t;
      return n;
    }
    var $i =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      ea = t.unstable_scheduleCallback,
      ta = t.unstable_NormalPriority,
      na = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function ra() {
      return { controller: new $i(), data: new Map(), refCount: 0 };
    }
    function G(e) {
      (e.refCount--,
        e.refCount === 0 &&
          ea(ta, function () {
            e.controller.abort();
          }));
    }
    var ia = null,
      aa = 0,
      oa = 0,
      sa = null;
    function ca(e, t) {
      if (ia === null) {
        var n = (ia = []);
        ((aa = 0),
          (oa = ld()),
          (sa = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (aa++, t.then(la, la), t);
    }
    function la() {
      if (--aa === 0 && ia !== null) {
        sa !== null && (sa.status = `fulfilled`);
        var e = ia;
        ((ia = null), (oa = 0), (sa = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ua(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var da = P.S;
    P.S = function (e, t) {
      ((Zl = Se()),
        typeof t == `object` && t && typeof t.then == `function` && ca(e, t),
        da !== null && da(e, t));
    };
    var fa = L(null);
    function pa() {
      var e = fa.current;
      return e === null ? Nl.pooledCache : e;
    }
    function ma(e, t) {
      t === null ? z(fa, fa.current) : z(fa, t.pool);
    }
    function ha() {
      var e = pa();
      return e === null ? null : { parent: na._currentValue, pool: e };
    }
    var ga = Error(i(460)),
      _a = Error(i(474)),
      va = Error(i(542)),
      ya = { then: function () {} };
    function ba(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function xa(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(Yt, Yt), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Ta(e), e);
        default:
          if (typeof t.status == `string`) t.then(Yt, Yt);
          else {
            if (((e = Nl), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Ta(e), e);
          }
          throw ((Ca = t), ga);
      }
    }
    function Sa(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Ca = e), ga)
          : e;
      }
    }
    var Ca = null;
    function wa() {
      if (Ca === null) throw Error(i(459));
      var e = Ca;
      return ((Ca = null), e);
    }
    function Ta(e) {
      if (e === ga || e === va) throw Error(i(483));
    }
    var Ea = null,
      K = 0;
    function Da(e) {
      var t = K;
      return ((K += 1), Ea === null && (Ea = []), xa(Ea, e, t));
    }
    function q(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Oa(e, t) {
      throw t.$$typeof === g
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function ka(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = ai(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = li(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === O &&
                  Sa(i) === t.type))
            ? ((t = a(t, n.props)), q(t, n), (t.return = e), t)
            : ((t = si(n.type, n.key, n.props, null, e.mode, r)),
              q(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = di(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = ci(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = li(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = si(t.type, t.key, t.props, null, e.mode, n)),
                q(n, t),
                (n.return = e),
                n
              );
            case v:
              return ((t = di(t, e.mode, n)), (t.return = e), t);
            case O:
              return ((t = Sa(t)), f(e, t, n));
          }
          if (te(t) || M(t))
            return ((t = ci(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, Da(t), n);
          if (t.$$typeof === C) return f(e, Zi(e, t), n);
          Oa(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case O:
              return ((n = Sa(n)), p(e, t, n, r));
          }
          if (te(n) || M(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Da(n), r);
          if (n.$$typeof === C) return p(e, t, Zi(e, n), r);
          Oa(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case O:
              return ((r = Sa(r)), m(e, t, n, r, i));
          }
          if (te(r) || M(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, Da(r), i);
          if (r.$$typeof === C) return m(e, t, n, Zi(t, r), i);
          Oa(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), Ai && Ci(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (Ai && Ci(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          Ai && Ci(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), Ai && Ci(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (Ai && Ci(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          Ai && Ci(a, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === O &&
                        Sa(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        q(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === y
                  ? ((c = ci(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = si(o.type, o.key, o.props, null, e.mode, c)),
                    q(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                ((c = di(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case O:
              return ((o = Sa(o)), b(e, r, o, c));
          }
          if (te(o)) return h(e, r, o, c);
          if (M(o)) {
            if (((l = M(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, Da(o), c);
          if (o.$$typeof === C) return b(e, r, Zi(e, o), c);
          Oa(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = li(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          K = 0;
          var i = b(e, t, n, r);
          return ((Ea = null), i);
        } catch (t) {
          if (t === ga || t === va) throw t;
          var a = ri(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var J = ka(!0),
      Aa = ka(!1),
      ja = !1;
    function Ma(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Na(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Pa(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Fa(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), Ml & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ei(e)),
          $r(e, null, n),
          t
        );
      }
      return (Xr(e, r, t, n), ei(e));
    }
    function Ia(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ye(e, n));
      }
    }
    function La(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Ra = !1;
    function za() {
      if (Ra) {
        var e = sa;
        if (e !== null) throw e;
      }
    }
    function Ba(e, t, n, r) {
      Ra = !1;
      var i = e.updateQueue;
      ja = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (Pl & f) === f : (r & f) === f) {
            (f !== 0 && f === oa && (Ra = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload),
                    (f = typeof m == `function` ? m.call(_, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  ja = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Hl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function Va(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function Ha(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) Va(n[e], t);
    }
    var Ua = L(null),
      Wa = L(0);
    function Ga(e, t) {
      ((e = Bl), z(Wa, e), z(Ua, t), (Bl = e | t.baseLanes));
    }
    function Ka() {
      (z(Wa, Bl), z(Ua, Ua.current));
    }
    function qa() {
      ((Bl = Wa.current), R(Ua), R(Wa));
    }
    var Ja = L(null),
      Ya = null;
    function Xa(e) {
      var t = e.alternate;
      (z(to, to.current & 1),
        z(Ja, e),
        Ya === null &&
          (t === null || Ua.current !== null || t.memoizedState !== null) &&
          (Ya = e));
    }
    function Za(e) {
      (z(to, to.current), z(Ja, e), Ya === null && (Ya = e));
    }
    function Qa(e) {
      e.tag === 22
        ? (z(to, to.current), z(Ja, e), Ya === null && (Ya = e))
        : $a(e);
    }
    function $a() {
      (z(to, to.current), z(Ja, Ja.current));
    }
    function eo(e) {
      (R(Ja), Ya === e && (Ya = null), R(to));
    }
    var to = L(0);
    function no(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var ro = 0,
      Y = null,
      X = null,
      io = null,
      ao = !1,
      oo = !1,
      so = !1,
      co = 0,
      lo = 0,
      uo = null,
      fo = 0;
    function po() {
      throw Error(i(321));
    }
    function mo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!_r(e[n], t[n])) return !1;
      return !0;
    }
    function ho(e, t, n, r, i, a) {
      return (
        (ro = a),
        (Y = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (P.H = e === null || e.memoizedState === null ? js : Ms),
        (so = !1),
        (a = n(r, i)),
        (so = !1),
        oo && (a = _o(t, n, r, i)),
        go(e),
        a
      );
    }
    function go(e) {
      P.H = As;
      var t = X !== null && X.next !== null;
      if (((ro = 0), (io = X = Y = null), (ao = !1), (lo = 0), (uo = null), t))
        throw Error(i(300));
      e === null ||
        Ys ||
        ((e = e.dependencies), e !== null && Ji(e) && (Ys = !0));
    }
    function _o(e, t, n, r) {
      Y = e;
      var a = 0;
      do {
        if ((oo && (uo = null), (lo = 0), (oo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (io = X = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((P.H = Ns), (o = t(n, r)));
      } while (oo);
      return o;
    }
    function vo() {
      var e = P.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? To(t) : t),
        (e = e.useState()[0]),
        (X === null ? null : X.memoizedState) !== e && (Y.flags |= 1024),
        t
      );
    }
    function yo() {
      var e = co !== 0;
      return ((co = 0), e);
    }
    function bo(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function xo(e) {
      if (ao) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        ao = !1;
      }
      ((ro = 0), (io = X = Y = null), (oo = !1), (lo = co = 0), (uo = null));
    }
    function So() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        io === null ? (Y.memoizedState = io = e) : (io = io.next = e),
        io
      );
    }
    function Co() {
      if (X === null) {
        var e = Y.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = X.next;
      var t = io === null ? Y.memoizedState : io.next;
      if (t !== null) ((io = t), (X = e));
      else {
        if (e === null)
          throw Y.alternate === null ? Error(i(467)) : Error(i(310));
        ((X = e),
          (e = {
            memoizedState: X.memoizedState,
            baseState: X.baseState,
            baseQueue: X.baseQueue,
            queue: X.queue,
            next: null,
          }),
          io === null ? (Y.memoizedState = io = e) : (io = io.next = e));
      }
      return io;
    }
    function wo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function To(e) {
      var t = lo;
      return (
        (lo += 1),
        uo === null && (uo = []),
        (e = xa(uo, e, t)),
        (t = Y),
        (io === null ? t.memoizedState : io.next) === null &&
          ((t = t.alternate),
          (P.H = t === null || t.memoizedState === null ? js : Ms)),
        e
      );
    }
    function Eo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return To(e);
        if (e.$$typeof === C) return Xi(e);
      }
      throw Error(i(438, String(e)));
    }
    function Do(e) {
      var t = null,
        n = Y.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = Y.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = wo()), (Y.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = A;
      return (t.index++, n);
    }
    function Oo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function ko(e) {
      return Ao(Co(), X, e);
    }
    function Ao(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (ro & f) === f : (Pl & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === oa && (d = !0));
            else if ((ro & p) === p) {
              ((u = u.next), p === oa && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (Y.lanes |= p),
                (Hl |= p));
            ((f = u.action),
              so && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (Y.lanes |= f),
              (Hl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !_r(o, e.memoizedState) && ((Ys = !0), d && ((n = sa), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function jo(e) {
      var t = Co(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (_r(o, t.memoizedState) || (Ys = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Mo(e, t, n) {
      var r = Y,
        a = Co(),
        o = Ai;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !_r((X || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (Ys = !0)),
        (a = a.queue),
        rs(Fo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (io !== null && io.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          Qo(9, { destroy: void 0 }, Po.bind(null, r, a, n, t), null),
          Nl === null)
        )
          throw Error(i(349));
        o || ro & 127 || No(r, t, n);
      }
      return n;
    }
    function No(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = Y.updateQueue),
        t === null
          ? ((t = wo()), (Y.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Po(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Io(t) && Lo(e));
    }
    function Fo(e, t, n) {
      return n(function () {
        Io(t) && Lo(e);
      });
    }
    function Io(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !_r(e, n);
      } catch {
        return !0;
      }
    }
    function Lo(e) {
      var t = Qr(e, 2);
      t !== null && fu(t, e, 2);
    }
    function Ro(e) {
      var t = So();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), so)) {
          Me(!0);
          try {
            n();
          } finally {
            Me(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Oo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function zo(e, t, n, r) {
      return ((e.baseState = n), Ao(e, X, typeof r == `function` ? r : Oo));
    }
    function Bo(e, t, n, r, a) {
      if (Ds(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (P.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Vo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Vo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = P.T,
          o = {};
        P.T = o;
        try {
          var s = n(i, r),
            c = P.S;
          (c !== null && c(o, s), Ho(e, t, s));
        } catch (n) {
          Wo(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (P.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Ho(e, t, a));
        } catch (n) {
          Wo(e, t, n);
        }
    }
    function Ho(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              Uo(e, t, n);
            },
            function (n) {
              return Wo(e, t, n);
            },
          )
        : Uo(e, t, n);
    }
    function Uo(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        Go(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Vo(e, n))));
    }
    function Wo(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), Go(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function Go(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Ko(e, t) {
      return t;
    }
    function qo(e, t) {
      if (Ai) {
        var n = Nl.formState;
        if (n !== null) {
          a: {
            var r = Y;
            if (Ai) {
              if (ki) {
                b: {
                  for (var i = ki, a = Mi; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((ki = cf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Pi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = So()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ko,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = ws.bind(null, Y, r)),
        (r.dispatch = n),
        (r = Ro(!1)),
        (a = Es.bind(null, Y, !1, r.queue)),
        (r = So()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Bo.bind(null, Y, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function Jo(e) {
      return Yo(Co(), X, e);
    }
    function Yo(e, t, n) {
      if (
        ((t = Ao(e, t, Ko)[0]),
        (e = ko(Oo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = To(t);
        } catch (e) {
          throw e === ga ? va : e;
        }
      else r = t;
      t = Co();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((Y.flags |= 2048),
          Qo(9, { destroy: void 0 }, Xo.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function Xo(e, t) {
      e.action = t;
    }
    function Zo(e) {
      var t = Co(),
        n = X;
      if (n !== null) return Yo(t, n, e);
      (Co(), (t = t.memoizedState), (n = Co()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function Qo(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = Y.updateQueue),
        t === null && ((t = wo()), (Y.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function $o() {
      return Co().memoizedState;
    }
    function es(e, t, n, r) {
      var i = So();
      ((Y.flags |= e),
        (i.memoizedState = Qo(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function ts(e, t, n, r) {
      var i = Co();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      X !== null && r !== null && mo(r, X.memoizedState.deps)
        ? (i.memoizedState = Qo(t, a, n, r))
        : ((Y.flags |= e), (i.memoizedState = Qo(1 | t, a, n, r)));
    }
    function ns(e, t) {
      es(8390656, 8, e, t);
    }
    function rs(e, t) {
      ts(2048, 8, e, t);
    }
    function is(e) {
      Y.flags |= 4;
      var t = Y.updateQueue;
      if (t === null) ((t = wo()), (Y.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function as(e) {
      var t = Co().memoizedState;
      return (
        is({ ref: t, nextImpl: e }),
        function () {
          if (Ml & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function os(e, t) {
      return ts(4, 2, e, t);
    }
    function ss(e, t) {
      return ts(4, 4, e, t);
    }
    function cs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function ls(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        ts(4, 4, cs.bind(null, t, e), n));
    }
    function us() {}
    function Z(e, t) {
      var n = Co();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && mo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function ds(e, t) {
      var n = Co();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && mo(t, r[1])) return r[0];
      if (((r = e()), so)) {
        Me(!0);
        try {
          e();
        } finally {
          Me(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function fs(e, t, n) {
      return n === void 0 || (ro & 1073741824 && !(Pl & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = du()), (Y.lanes |= e), (Hl |= e), n);
    }
    function ps(e, t, n, r) {
      return _r(n, t)
        ? n
        : Ua.current === null
          ? !(ro & 42) || (ro & 1073741824 && !(Pl & 261930))
            ? ((Ys = !0), (e.memoizedState = n))
            : ((e = du()), (Y.lanes |= e), (Hl |= e), t)
          : ((e = fs(e, n, r)), _r(e, t) || (Ys = !0), e);
    }
    function ms(e, t, n, r, i) {
      var a = F.p;
      F.p = a !== 0 && 8 > a ? a : 8;
      var o = P.T,
        s = {};
      ((P.T = s), Es(e, !1, t, n));
      try {
        var c = i(),
          l = P.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ts(e, t, ua(c, r), uu(e))
            : Ts(e, t, r, uu(e)));
      } catch (n) {
        Ts(e, t, { then: function () {}, status: `rejected`, reason: n }, uu());
      } finally {
        ((F.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (P.T = o));
      }
    }
    function hs() {}
    function gs(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = _s(e).queue;
      ms(
        e,
        a,
        t,
        I,
        n === null
          ? hs
          : function () {
              return (vs(e), n(r));
            },
      );
    }
    function _s(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: I,
        baseState: I,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Oo,
          lastRenderedState: I,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Oo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function vs(e) {
      var t = _s(e);
      (t.next === null && (t = e.alternate.memoizedState),
        Ts(e, t.next.queue, {}, uu()));
    }
    function ys() {
      return Xi(Qf);
    }
    function bs() {
      return Co().memoizedState;
    }
    function xs() {
      return Co().memoizedState;
    }
    function Ss(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = uu();
            e = Pa(n);
            var r = Fa(t, e, n);
            (r !== null && (fu(r, t, n), Ia(r, t, n)),
              (t = { cache: ra() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Cs(e, t, n) {
      var r = uu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Ds(e)
          ? Os(t, n)
          : ((n = Zr(e, t, n, r)), n !== null && (fu(n, e, r), ks(n, t, r))));
    }
    function ws(e, t, n) {
      Ts(e, t, n, uu());
    }
    function Ts(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Ds(e)) Os(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), _r(s, o)))
              return (Xr(e, t, i, 0), Nl === null && Yr(), !1);
          } catch {}
        if (((n = Zr(e, t, i, r)), n !== null))
          return (fu(n, e, r), ks(n, t, r), !0);
      }
      return !1;
    }
    function Es(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: ld(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Ds(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = Zr(e, n, r, 2)), t !== null && fu(t, e, 2));
    }
    function Ds(e) {
      var t = e.alternate;
      return e === Y || (t !== null && t === Y);
    }
    function Os(e, t) {
      oo = ao = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function ks(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ye(e, n));
      }
    }
    var As = {
      readContext: Xi,
      use: Eo,
      useCallback: po,
      useContext: po,
      useEffect: po,
      useImperativeHandle: po,
      useLayoutEffect: po,
      useInsertionEffect: po,
      useMemo: po,
      useReducer: po,
      useRef: po,
      useState: po,
      useDebugValue: po,
      useDeferredValue: po,
      useTransition: po,
      useSyncExternalStore: po,
      useId: po,
      useHostTransitionStatus: po,
      useFormState: po,
      useActionState: po,
      useOptimistic: po,
      useMemoCache: po,
      useCacheRefresh: po,
    };
    As.useEffectEvent = po;
    var js = {
        readContext: Xi,
        use: Eo,
        useCallback: function (e, t) {
          return ((So().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: Xi,
        useEffect: ns,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            es(4194308, 4, cs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return es(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          es(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = So();
          t = t === void 0 ? null : t;
          var r = e();
          if (so) {
            Me(!0);
            try {
              e();
            } finally {
              Me(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = So();
          if (n !== void 0) {
            var i = n(t);
            if (so) {
              Me(!0);
              try {
                n(t);
              } finally {
                Me(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Cs.bind(null, Y, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = So();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Ro(e);
          var t = e.queue,
            n = ws.bind(null, Y, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: us,
        useDeferredValue: function (e, t) {
          return fs(So(), e, t);
        },
        useTransition: function () {
          var e = Ro(!1);
          return (
            (e = ms.bind(null, Y, e.queue, !0, !1)),
            (So().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = Y,
            a = So();
          if (Ai) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), Nl === null)) throw Error(i(349));
            Pl & 127 || No(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            ns(Fo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            Qo(9, { destroy: void 0 }, Po.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = So(),
            t = Nl.identifierPrefix;
          if (Ai) {
            var n = Si,
              r = xi;
            ((n = (r & ~(1 << (32 - Ne(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = co++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = fo++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: ys,
        useFormState: qo,
        useActionState: qo,
        useOptimistic: function (e) {
          var t = So();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Es.bind(null, Y, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Do,
        useCacheRefresh: function () {
          return (So().memoizedState = Ss.bind(null, Y));
        },
        useEffectEvent: function (e) {
          var t = So(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (Ml & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Ms = {
        readContext: Xi,
        use: Eo,
        useCallback: Z,
        useContext: Xi,
        useEffect: rs,
        useImperativeHandle: ls,
        useInsertionEffect: os,
        useLayoutEffect: ss,
        useMemo: ds,
        useReducer: ko,
        useRef: $o,
        useState: function () {
          return ko(Oo);
        },
        useDebugValue: us,
        useDeferredValue: function (e, t) {
          return ps(Co(), X.memoizedState, e, t);
        },
        useTransition: function () {
          var e = ko(Oo)[0],
            t = Co().memoizedState;
          return [typeof e == `boolean` ? e : To(e), t];
        },
        useSyncExternalStore: Mo,
        useId: bs,
        useHostTransitionStatus: ys,
        useFormState: Jo,
        useActionState: Jo,
        useOptimistic: function (e, t) {
          return zo(Co(), X, e, t);
        },
        useMemoCache: Do,
        useCacheRefresh: xs,
      };
    Ms.useEffectEvent = as;
    var Ns = {
      readContext: Xi,
      use: Eo,
      useCallback: Z,
      useContext: Xi,
      useEffect: rs,
      useImperativeHandle: ls,
      useInsertionEffect: os,
      useLayoutEffect: ss,
      useMemo: ds,
      useReducer: jo,
      useRef: $o,
      useState: function () {
        return jo(Oo);
      },
      useDebugValue: us,
      useDeferredValue: function (e, t) {
        var n = Co();
        return X === null ? fs(n, e, t) : ps(n, X.memoizedState, e, t);
      },
      useTransition: function () {
        var e = jo(Oo)[0],
          t = Co().memoizedState;
        return [typeof e == `boolean` ? e : To(e), t];
      },
      useSyncExternalStore: Mo,
      useId: bs,
      useHostTransitionStatus: ys,
      useFormState: Zo,
      useActionState: Zo,
      useOptimistic: function (e, t) {
        var n = Co();
        return X === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : zo(n, X, e, t);
      },
      useMemoCache: Do,
      useCacheRefresh: xs,
    };
    Ns.useEffectEvent = as;
    function Ps(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Fs = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = uu(),
          i = Pa(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Fa(e, i, r)),
          t !== null && (fu(t, e, r), Ia(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = uu(),
          i = Pa(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Fa(e, i, r)),
          t !== null && (fu(t, e, r), Ia(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = uu(),
          r = Pa(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Fa(e, r, n)),
          t !== null && (fu(t, e, n), Ia(t, e, n)));
      },
    };
    function Is(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !vr(n, r) || !vr(i, a)
            : !0
      );
    }
    function Ls(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Fs.enqueueReplaceState(t, t.state, null));
    }
    function Rs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function zs(e) {
      Gr(e);
    }
    function Bs(e) {
      console.error(e);
    }
    function Vs(e) {
      Gr(e);
    }
    function Hs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Us(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Ws(e, t, n) {
      return (
        (n = Pa(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Hs(e, t);
        }),
        n
      );
    }
    function Gs(e) {
      return ((e = Pa(e)), (e.tag = 3), e);
    }
    function Ks(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Us(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Us(t, n, r),
            typeof i != `function` &&
              (eu === null ? (eu = new Set([this])) : eu.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function qs(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && qi(t, n, a, !0),
          (n = Ja.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                Ya === null
                  ? wu()
                  : n.alternate === null && Vl === 0 && (Vl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === ya
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Uu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === ya
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Uu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (Uu(e, r, a), wu(), !1);
      }
      if (Ai)
        return (
          (t = Ja.current),
          t === null
            ? (r !== Ni && ((t = Error(i(423), { cause: r })), W(pi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = pi(r, n)),
              (a = Ws(e.stateNode, r, a)),
              La(e, a),
              Vl !== 4 && (Vl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Ni && ((e = Error(i(422), { cause: r })), W(pi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = pi(o, n)),
        ql === null ? (ql = [o]) : ql.push(o),
        Vl !== 4 && (Vl = 2),
        t === null)
      )
        return !0;
      ((r = pi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = Ws(n.stateNode, r, e)),
              La(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (eu === null || !eu.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = Gs(a)),
                Ks(a, e, n, r),
                La(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var Js = Error(i(461)),
      Ys = !1;
    function Xs(e, t, n, r) {
      t.child = e === null ? Aa(t, null, n, r) : J(t, e.child, n, r);
    }
    function Zs(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        Yi(t),
        (r = ho(e, t, n, o, a, i)),
        (s = yo()),
        e !== null && !Ys
          ? (bo(e, t, i), bc(e, t, i))
          : (Ai && s && Ti(t), (t.flags |= 1), Xs(e, t, r, i), t.child)
      );
    }
    function Q(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !ii(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), Qs(e, t, a, r, i))
          : ((e = si(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !xc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? vr : n),
          n(o, r) && e.ref === t.ref)
        )
          return bc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = ai(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function Qs(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (vr(a, r) && e.ref === t.ref)
          if (((Ys = !1), (t.pendingProps = r = a), xc(e, i)))
            e.flags & 131072 && (Ys = !0);
          else return ((t.lanes = e.lanes), bc(e, t, i));
      }
      return oc(e, t, n, r, i);
    }
    function $s(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return tc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && ma(t, a === null ? null : a.cachePool),
            a === null ? Ka() : Ga(t, a),
            Qa(t));
        else
          return (
            (r = t.lanes = 536870912),
            tc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && ma(t, null), Ka(), $a(t))
          : (ma(t, a.cachePool), Ga(t, a), $a(t), (t.memoizedState = null));
      return (Xs(e, t, i, n), t.child);
    }
    function ec(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function tc(e, t, n, r, i) {
      var a = pa();
      return (
        (a = a === null ? null : { parent: na._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && ma(t, null),
        Ka(),
        Qa(t),
        e !== null && qi(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function nc(e, t) {
      return (
        (t = hc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function rc(e, t, n) {
      return (
        J(t, e.child, null, n),
        (e = nc(t, t.pendingProps)),
        (e.flags |= 2),
        eo(t),
        (t.memoizedState = null),
        e
      );
    }
    function ic(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (Ai) {
          if (r.mode === `hidden`)
            return ((e = nc(t, r)), (t.lanes = 536870912), ec(null, e));
          if (
            (Za(t),
            (e = ki)
              ? ((e = rf(e, Mi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: bi === null ? null : { id: xi, overflow: Si },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = ui(e)),
                  (n.return = t),
                  (t.child = n),
                  (Oi = t),
                  (ki = null)))
              : (e = null),
            e === null)
          )
            throw Pi(t);
          return ((t.lanes = 536870912), null);
        }
        return nc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((Za(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = rc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        else if (
          (Ys || qi(e, t, n, !1), (a = (n & e.childLanes) !== 0), Ys || a)
        ) {
          if (
            ((r = Nl),
            r !== null && ((s = Xe(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), Qr(e, s), fu(r, e, s), Js);
          (wu(), (t = rc(e, t, n)));
        } else
          ((e = o.treeContext),
            (ki = cf(s.nextSibling)),
            (Oi = t),
            (Ai = !0),
            (ji = null),
            (Mi = !1),
            e !== null && Di(t, e),
            (t = nc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = ai(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function ac(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function oc(e, t, n, r, i) {
      return (
        Yi(t),
        (n = ho(e, t, n, r, void 0, i)),
        (r = yo()),
        e !== null && !Ys
          ? (bo(e, t, i), bc(e, t, i))
          : (Ai && r && Ti(t), (t.flags |= 1), Xs(e, t, n, i), t.child)
      );
    }
    function sc(e, t, n, r, i, a) {
      return (
        Yi(t),
        (t.updateQueue = null),
        (n = _o(t, r, n, i)),
        go(e),
        (r = yo()),
        e !== null && !Ys
          ? (bo(e, t, a), bc(e, t, a))
          : (Ai && r && Ti(t), (t.flags |= 1), Xs(e, t, n, a), t.child)
      );
    }
    function cc(e, t, n, r, i) {
      if ((Yi(t), t.stateNode === null)) {
        var a = ti,
          o = n.contextType;
        (typeof o == `object` && o && (a = Xi(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Fs),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ma(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? Xi(o) : ti),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Ps(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Fs.enqueueReplaceState(a, a.state, null),
            Ba(t, r, a, i),
            za(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Rs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = ti), typeof u == `object` && u && (o = Xi(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Ls(t, a, r, o)),
          (ja = !1));
        var f = t.memoizedState;
        ((a.state = f),
          Ba(t, r, a, i),
          za(),
          (l = t.memoizedState),
          s || f !== l || ja
            ? (typeof d == `function` &&
                (Ps(t, n, d, r), (l = t.memoizedState)),
              (c = ja || Is(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          Na(e, t),
          (o = t.memoizedProps),
          (u = Rs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = ti),
          typeof l == `object` && l && (c = Xi(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Ls(t, a, r, c)),
          (ja = !1),
          (f = t.memoizedState),
          (a.state = f),
          Ba(t, r, a, i),
          za());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        ja ||
        (e !== null && e.dependencies !== null && Ji(e.dependencies))
          ? (typeof s == `function` && (Ps(t, n, s, r), (p = t.memoizedState)),
            (u =
              ja ||
              Is(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && Ji(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        ac(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = J(t, e.child, null, i)),
                (t.child = J(t, null, n, i)))
              : Xs(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = bc(e, t, i)),
        e
      );
    }
    function lc(e, t, n, r) {
      return (Ri(), (t.flags |= 256), Xs(e, t, n, r), t.child);
    }
    var uc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function dc(e) {
      return { baseLanes: e, cachePool: ha() };
    }
    function fc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Gl), e);
    }
    function pc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null
              ? !1
              : (to.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (Ai) {
          if (
            (a ? Xa(t) : $a(t),
            (e = ki)
              ? ((e = rf(e, Mi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: bi === null ? null : { id: xi, overflow: Si },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = ui(e)),
                  (n.return = t),
                  (t.child = n),
                  (Oi = t),
                  (ki = null)))
              : (e = null),
            e === null)
          )
            throw Pi(t);
          return (of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? ($a(t),
              (a = t.mode),
              (c = hc({ mode: `hidden`, children: c }, a)),
              (r = ci(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = dc(n)),
              (r.childLanes = fc(e, s, n)),
              (t.memoizedState = uc),
              ec(null, r))
            : (Xa(t), mc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (Xa(t), (t.flags &= -257), (t = gc(e, t, n)))
            : t.memoizedState === null
              ? ($a(t),
                (c = r.fallback),
                (a = t.mode),
                (r = hc({ mode: `visible`, children: r.children }, a)),
                (c = ci(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                J(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = dc(n)),
                (r.childLanes = fc(e, s, n)),
                (t.memoizedState = uc),
                (t = ec(null, r)))
              : ($a(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((Xa(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            W({ value: r, source: null, stack: null }),
            (t = gc(e, t, n)));
        } else if (
          (Ys || qi(e, t, n, !1), (s = (n & e.childLanes) !== 0), Ys || s)
        ) {
          if (
            ((s = Nl),
            s !== null && ((r = Xe(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), Qr(e, r), fu(s, e, r), Js);
          (af(c) || wu(), (t = gc(e, t, n)));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (ki = cf(c.nextSibling)),
              (Oi = t),
              (Ai = !0),
              (ji = null),
              (Mi = !1),
              e !== null && Di(t, e),
              (t = mc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? ($a(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = ai(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = ci(c, a, n, null)), (c.flags |= 2))
            : (c = ai(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          ec(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = dc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = ha())
                : ((l = na._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = fc(e, s, n)),
          (t.memoizedState = uc),
          ec(e.child, r))
        : (Xa(t),
          (n = e.child),
          (e = n.sibling),
          (n = ai(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function mc(e, t) {
      return (
        (t = hc({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function hc(e, t) {
      return ((e = ri(22, e, null, t)), (e.lanes = 0), e);
    }
    function gc(e, t, n) {
      return (
        J(t, e.child, null, n),
        (e = mc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function _c(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Gi(e.return, t, n));
    }
    function vc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function yc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = to.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        z(to, o),
        Xs(e, t, r, n),
        (r = Ai ? _i : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && _c(e, n, t);
          else if (e.tag === 19) _c(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            ((e = n.alternate),
              e !== null && no(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            vc(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && no(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          vc(t, !0, n, null, a, r);
          break;
        case `together`:
          vc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function bc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Hl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((qi(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = ai(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = ai(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function xc(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && Ji(e)))
        : !0;
    }
    function Sc(e, t, n) {
      switch (t.tag) {
        case 3:
          (ce(t, t.stateNode.containerInfo),
            Ui(t, na, e.memoizedState.cache),
            Ri());
          break;
        case 27:
        case 5:
          B(t);
          break;
        case 4:
          ce(t, t.stateNode.containerInfo);
          break;
        case 10:
          Ui(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), Za(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (Xa(t), (e = bc(e, t, n)), e === null ? null : e.sibling)
                : pc(e, t, n)
              : (Xa(t), (t.flags |= 128), null);
          Xa(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (qi(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return yc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            z(to, to.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), $s(e, t, n, t.pendingProps));
        case 24:
          Ui(t, na, e.memoizedState.cache);
      }
      return bc(e, t, n);
    }
    function Cc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) Ys = !0;
        else {
          if (!xc(e, n) && !(t.flags & 128)) return ((Ys = !1), Sc(e, t, n));
          Ys = !!(e.flags & 131072);
        }
      else ((Ys = !1), Ai && t.flags & 1048576 && wi(t, _i, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Sa(t.elementType)), (t.type = e), typeof e == `function`))
              ii(e)
                ? ((r = Rs(e, r)), (t.tag = 1), (t = cc(null, t, e, r, n)))
                : ((t.tag = 0), (t = oc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === w) {
                  ((t.tag = 11), (t = Zs(null, t, e, r, n)));
                  break a;
                } else if (a === D) {
                  ((t.tag = 14), (t = Q(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = N(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return oc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Rs(r, t.pendingProps)), cc(e, t, r, a, n));
        case 3:
          a: {
            if ((ce(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), Na(e, t), Ba(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Ui(t, na, r),
              r !== o.cache && Ki(t, [na], n, !0),
              za(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = lc(e, t, r, n);
                break a;
              } else if (r !== a) {
                ((a = pi(Error(i(424)), t)), W(a), (t = lc(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  ki = cf(e.firstChild),
                    Oi = t,
                    Ai = !0,
                    ji = null,
                    Mi = !0,
                    n = Aa(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((Ri(), r === a)) {
                t = bc(e, t, n);
                break a;
              }
              Xs(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            ac(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : Ai ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(oe.current).createElement(n)),
                  (r[nt] = t),
                  (r[rt] = e),
                  Pd(r, n, e),
                  ht(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            B(t),
            e === null &&
              Ai &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, oe.current)),
              (Oi = t),
              (Mi = !0),
              (a = ki),
              Zd(t.type) ? ((lf = a), (ki = cf(r.firstChild))) : (ki = a)),
            Xs(e, t, t.pendingProps.children, n),
            ac(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              Ai &&
              ((a = r = ki) &&
                ((r = tf(r, t.type, t.pendingProps, Mi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (Oi = t),
                    (ki = cf(r.firstChild)),
                    (Mi = !1),
                    (a = !0))),
              a || Pi(t)),
            B(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Ud(a, o) ? (r = null) : s !== null && Ud(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = ho(e, t, vo, null, null, n)), (Qf._currentValue = a)),
            ac(e, t),
            Xs(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              Ai &&
              ((e = n = ki) &&
                ((n = nf(n, t.pendingProps, Mi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Oi = t), (ki = null), (e = !0))),
              e || Pi(t)),
            null
          );
        case 13:
          return pc(e, t, n);
        case 4:
          return (
            ce(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = J(t, null, r, n)) : Xs(e, t, r, n),
            t.child
          );
        case 11:
          return Zs(e, t, t.type, t.pendingProps, n);
        case 7:
          return (Xs(e, t, t.pendingProps, n), t.child);
        case 8:
          return (Xs(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (Xs(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (r = t.pendingProps),
            Ui(t, t.type, r.value),
            Xs(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            Yi(t),
            (a = Xi(a)),
            (r = r(a)),
            (t.flags |= 1),
            Xs(e, t, r, n),
            t.child
          );
        case 14:
          return Q(e, t, t.type, t.pendingProps, n);
        case 15:
          return Qs(e, t, t.type, t.pendingProps, n);
        case 19:
          return yc(e, t, n);
        case 31:
          return ic(e, t, n);
        case 22:
          return $s(e, t, n, t.pendingProps);
        case 24:
          return (
            Yi(t),
            (r = Xi(na)),
            e === null
              ? ((a = pa()),
                a === null &&
                  ((a = Nl),
                  (o = ra()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ma(t),
                Ui(t, na, a))
              : ((e.lanes & n) !== 0 && (Na(e, t), Ba(t, null, null, n), za()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    Ui(t, na, r),
                    r !== a.cache && Ki(t, [na], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    Ui(t, na, r))),
            Xs(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function wc(e) {
      e.flags |= 4;
    }
    function Tc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (xu()) e.flags |= 8192;
          else throw ((Ca = ya), _a);
      } else e.flags &= -16777217;
    }
    function Ec(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t)))
        if (xu()) e.flags |= 8192;
        else throw ((Ca = ya), _a);
    }
    function Dc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : We()), (e.lanes |= t), (Kl |= t)));
    }
    function Oc(e, t) {
      if (!Ai)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; )
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function kc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Ac(e, t, n) {
      var r = t.pendingProps;
      switch ((Ei(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (kc(t), null);
        case 1:
          return (kc(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Wi(na),
            le(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Li(t)
                ? wc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), zi())),
            kc(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (wc(t),
                o === null ? (kc(t), Tc(t, a, null, r, n)) : (kc(t), Ec(t, o)))
              : o
                ? o === e.memoizedState
                  ? (kc(t), (t.flags &= -16777217))
                  : (wc(t), kc(t), Ec(t, o))
                : ((e = e.memoizedProps),
                  e !== r && wc(t),
                  kc(t),
                  Tc(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (ue(t),
            (n = oe.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && wc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (kc(t), null);
            }
            ((e = ie.current),
              Li(t) ? Fi(t, e) : ((e = ff(a, r, n)), (t.stateNode = e), wc(t)));
          }
          return (kc(t), null);
        case 5:
          if ((ue(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && wc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (kc(t), null);
            }
            if (((o = ie.current), Li(t))) Fi(t, o);
            else {
              var s = Bd(oe.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[nt] = t), (o[rt] = r));
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Pd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && wc(t);
            }
          }
          return (
            kc(t),
            Tc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && wc(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = oe.current), Li(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = Oi),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[nt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  jd(e.nodeValue, n)
                )),
                e || Pi(t, !0));
            } else
              ((e = Bd(e).createTextNode(r)), (e[nt] = t), (t.stateNode = e));
          }
          return (kc(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Li(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[nt] = t;
              } else
                (Ri(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (kc(t), (e = !1));
            } else
              ((n = zi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (eo(t), t) : (eo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (kc(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Li(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[nt] = t;
              } else
                (Ri(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (kc(t), (a = !1));
            } else
              ((a = zi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (eo(t), t) : (eo(t), null);
          }
          return (
            eo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Dc(t, t.updateQueue),
                kc(t),
                null)
          );
        case 4:
          return (
            le(),
            e === null && xd(t.stateNode.containerInfo),
            kc(t),
            null
          );
        case 10:
          return (Wi(t.type), kc(t), null);
        case 19:
          if ((R(to), (r = t.memoizedState), r === null)) return (kc(t), null);
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) Oc(r, !1);
            else {
              if (Vl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = no(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Oc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Dc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (oi(n, e), (n = n.sibling));
                    return (
                      z(to, (to.current & 1) | 2),
                      Ai && Ci(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Se() > Ql &&
                ((t.flags |= 128), (a = !0), Oc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = no(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Dc(t, e),
                  Oc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !Ai)
                )
                  return (kc(t), null);
              } else
                2 * Se() - r.renderingStartTime > Ql &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Oc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (kc(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Se()),
              (e.sibling = null),
              (n = to.current),
              z(to, a ? (n & 1) | 2 : n & 1),
              Ai && Ci(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            eo(t),
            qa(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (kc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : kc(t),
            (n = t.updateQueue),
            n !== null && Dc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && R(fa),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Wi(na),
            kc(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function jc(e, t) {
      switch ((Ei(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Wi(na),
            le(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (ue(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((eo(t), t.alternate === null)) throw Error(i(340));
            Ri();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (eo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            Ri();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (R(to), null);
        case 4:
          return (le(), null);
        case 10:
          return (Wi(t.type), null);
        case 22:
        case 23:
          return (
            eo(t),
            qa(),
            e !== null && R(fa),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (Wi(na), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Mc(e, t) {
      switch ((Ei(t), t.tag)) {
        case 3:
          (Wi(na), le());
          break;
        case 26:
        case 27:
        case 5:
          ue(t);
          break;
        case 4:
          le();
          break;
        case 31:
          t.memoizedState !== null && eo(t);
          break;
        case 13:
          eo(t);
          break;
        case 19:
          R(to);
          break;
        case 10:
          Wi(t.type);
          break;
        case 22:
        case 23:
          (eo(t), qa(), e !== null && R(fa));
          break;
        case 24:
          Wi(na);
      }
    }
    function Nc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Hu(t, t.return, e);
      }
    }
    function Pc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Hu(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Hu(t, t.return, e);
      }
    }
    function Fc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Ha(t, n);
        } catch (t) {
          Hu(e, e.return, t);
        }
      }
    }
    function Ic(e, t, n) {
      ((n.props = Rs(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Hu(e, t, n);
      }
    }
    function Lc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Hu(e, t, n);
      }
    }
    function Rc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Hu(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Hu(e, t, n);
          }
        else n.current = null;
    }
    function zc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Hu(e, e.return, t);
      }
    }
    function Bc(e, t, n) {
      try {
        var r = e.stateNode;
        (Fd(r, e.type, n, t), (r[rt] = t));
      } catch (t) {
        Hu(e, e.return, t);
      }
    }
    function Vc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Zd(e.type)) ||
        e.tag === 4
      );
    }
    function Hc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Vc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Zd(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Uc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = Yt)));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (Uc(e, t, n), e = e.sibling; e !== null; )
          (Uc(e, t, n), (e = e.sibling));
    }
    function Wc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (Wc(e, t, n), e = e.sibling; e !== null; )
          (Wc(e, t, n), (e = e.sibling));
    }
    function Gc(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        (Pd(t, r, n), (t[nt] = e), (t[rt] = n));
      } catch (t) {
        Hu(e, e.return, t);
      }
    }
    var Kc = !1,
      qc = !1,
      Jc = !1,
      Yc = typeof WeakSet == `function` ? WeakSet : Set,
      Xc = null;
    function Zc(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Sr(e)), Cr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        zd = { focusedElem: e, selectionRange: n }, sp = !1, Xc = t;
        Xc !== null;
      )
        if (((t = Xc), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (Xc = e));
        else
          for (; Xc !== null; ) {
            switch (((t = Xc), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((a = e[n]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Rs(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Hu(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (Xc = e));
              break;
            }
            Xc = t.return;
          }
    }
    function Qc(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (pl(e, n), r & 4 && Nc(5, n));
          break;
        case 1:
          if ((pl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Hu(n, n.return, e);
              }
            else {
              var i = Rs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Hu(n, n.return, e);
              }
            }
          (r & 64 && Fc(n), r & 512 && Lc(n, n.return));
          break;
        case 3:
          if ((pl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              Ha(e, t);
            } catch (e) {
              Hu(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && Gc(n);
        case 26:
        case 5:
          (pl(e, n), t === null && r & 4 && zc(n), r & 512 && Lc(n, n.return));
          break;
        case 12:
          pl(e, n);
          break;
        case 31:
          (pl(e, n), r & 4 && il(e, n));
          break;
        case 13:
          (pl(e, n),
            r & 4 && al(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Ku.bind(null, n)), sf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || Kc), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || qc), (i = Kc));
            var a = qc;
            ((Kc = r),
              (qc = t) && !a
                ? hl(e, n, (n.subtreeFlags & 8772) != 0)
                : pl(e, n),
              (Kc = i),
              (qc = a));
          }
          break;
        case 30:
          break;
        default:
          pl(e, n);
      }
    }
    function $c(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), $c(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && ut(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var el = null,
      tl = !1;
    function nl(e, t, n) {
      for (n = n.child; n !== null; ) (rl(e, t, n), (n = n.sibling));
    }
    function rl(e, t, n) {
      if (je && typeof je.onCommitFiberUnmount == `function`)
        try {
          je.onCommitFiberUnmount(H, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (qc || Rc(n, t),
            nl(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          qc || Rc(n, t);
          var r = el,
            i = tl;
          (Zd(n.type) && ((el = n.stateNode), (tl = !1)),
            nl(e, t, n),
            pf(n.stateNode),
            (el = r),
            (tl = i));
          break;
        case 5:
          qc || Rc(n, t);
        case 6:
          if (
            ((r = el),
            (i = tl),
            (el = null),
            nl(e, t, n),
            (el = r),
            (tl = i),
            el !== null)
          )
            if (tl)
              try {
                (el.nodeType === 9
                  ? el.body
                  : el.nodeName === `HTML`
                    ? el.ownerDocument.body
                    : el
                ).removeChild(n.stateNode);
              } catch (e) {
                Hu(n, t, e);
              }
            else
              try {
                el.removeChild(n.stateNode);
              } catch (e) {
                Hu(n, t, e);
              }
          break;
        case 18:
          el !== null &&
            (tl
              ? ((e = el),
                Qd(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(el, n.stateNode));
          break;
        case 4:
          ((r = el),
            (i = tl),
            (el = n.stateNode.containerInfo),
            (tl = !0),
            nl(e, t, n),
            (el = r),
            (tl = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Pc(2, n, t), qc || Pc(4, n, t), nl(e, t, n));
          break;
        case 1:
          (qc ||
            (Rc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Ic(n, t, r)),
            nl(e, t, n));
          break;
        case 21:
          nl(e, t, n);
          break;
        case 22:
          ((qc = (r = qc) || n.memoizedState !== null), nl(e, t, n), (qc = r));
          break;
        default:
          nl(e, t, n);
      }
    }
    function il(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Hu(t, t.return, e);
        }
      }
    }
    function al(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Hu(t, t.return, e);
        }
    }
    function ol(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new Yc()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new Yc()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function sl(e, t) {
      var n = ol(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = qu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function cl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  ((el = c.stateNode), (tl = !1));
                  break a;
                }
                break;
              case 5:
                ((el = c.stateNode), (tl = !1));
                break a;
              case 3:
              case 4:
                ((el = c.stateNode.containerInfo), (tl = !0));
                break a;
            }
            c = c.return;
          }
          if (el === null) throw Error(i(160));
          (rl(o, s, a),
            (el = null),
            (tl = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) (ul(t, e), (t = t.sibling));
    }
    var ll = null;
    function ul(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (cl(t, e),
            dl(e),
            r & 4 && (Pc(3, e, e.return), Nc(3, e), Pc(5, e, e.return)));
          break;
        case 1:
          (cl(t, e),
            dl(e),
            r & 512 && (qc || n === null || Rc(n, n.return)),
            r & 64 &&
              Kc &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = ll;
          if (
            (cl(t, e),
            dl(e),
            r & 512 && (qc || n === null || Rc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a));
                    b: switch (r) {
                      case `title`:
                        ((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[lt] ||
                            o[nt] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`),
                            )),
                          Pd(o, r, n),
                          (o[nt] = e),
                          ht(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Vf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      case `meta`:
                        if (
                          (s = Vf(`meta`, `content`, a).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[nt] = e), ht(o), (r = o));
                  }
                  e.stateNode = r;
                } else Hf(a, e.type, e.stateNode);
              else e.stateNode = If(a, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  Bc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Hf(a, e.type, e.stateNode)
                    : If(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (cl(t, e),
            dl(e),
            r & 512 && (qc || n === null || Rc(n, n.return)),
            n !== null && r & 4 && Bc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (cl(t, e),
            dl(e),
            r & 512 && (qc || n === null || Rc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode;
            try {
              Vt(a, ``);
            } catch (t) {
              Hu(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Bc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (Jc = !0));
          break;
        case 6:
          if ((cl(t, e), dl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Hu(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (a = ll),
            (ll = gf(t.containerInfo)),
            cl(t, e),
            (ll = a),
            dl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Hu(e, e.return, t);
            }
          Jc && ((Jc = !1), fl(e));
          break;
        case 4:
          ((r = ll),
            (ll = gf(e.stateNode.containerInfo)),
            cl(t, e),
            dl(e),
            (ll = r));
          break;
        case 12:
          (cl(t, e), dl(e));
          break;
        case 31:
          (cl(t, e),
            dl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), sl(e, r))));
          break;
        case 13:
          (cl(t, e),
            dl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (Xl = Se()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), sl(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = Kc,
            d = qc;
          if (
            ((Kc = u || a),
            (qc = d || l),
            cl(t, e),
            (qc = d),
            (Kc = u),
            dl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || Kc || qc || ml(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    Hu(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    Hu(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Hu(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), sl(e, n))));
          break;
        case 19:
          (cl(t, e),
            dl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), sl(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (cl(t, e), dl(e));
      }
    }
    function dl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (Vc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              Wc(e, Hc(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (Vt(o, ``), (n.flags &= -33)), Wc(e, Hc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Uc(e, Hc(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Hu(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function fl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          (fl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function pl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          (Qc(e, t.alternate, t), (t = t.sibling));
    }
    function ml(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Pc(4, t, t.return), ml(t));
            break;
          case 1:
            Rc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Ic(t, t.return, n),
              ml(t));
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            (Rc(t, t.return), ml(t));
            break;
          case 22:
            t.memoizedState === null && ml(t);
            break;
          case 30:
            ml(t);
            break;
          default:
            ml(t);
        }
        e = e.sibling;
      }
    }
    function hl(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (hl(i, a, n), Nc(4, a));
            break;
          case 1:
            if (
              (hl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Hu(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    Va(c[i], s);
              } catch (e) {
                Hu(r, r.return, e);
              }
            }
            (n && o & 64 && Fc(a), Lc(a, a.return));
            break;
          case 27:
            Gc(a);
          case 26:
          case 5:
            (hl(i, a, n), n && r === null && o & 4 && zc(a), Lc(a, a.return));
            break;
          case 12:
            hl(i, a, n);
            break;
          case 31:
            (hl(i, a, n), n && o & 4 && il(i, a));
            break;
          case 13:
            (hl(i, a, n), n && o & 4 && al(i, a));
            break;
          case 22:
            (a.memoizedState === null && hl(i, a, n), Lc(a, a.return));
            break;
          case 30:
            break;
          default:
            hl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function gl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && G(n)));
    }
    function _l(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && G(e)));
    }
    function vl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) (yl(e, t, n, r), (t = t.sibling));
    }
    function yl(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (vl(e, t, n, r), i & 2048 && Nc(9, t));
          break;
        case 1:
          vl(e, t, n, r);
          break;
        case 3:
          (vl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && G(e))));
          break;
        case 12:
          if (i & 2048) {
            (vl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Hu(t, t.return, e);
            }
          } else vl(e, t, n, r);
          break;
        case 31:
          vl(e, t, n, r);
          break;
        case 13:
          vl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? vl(e, t, n, r)
                : ((a._visibility |= 2),
                  bl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? vl(e, t, n, r)
                : xl(e, t),
            i & 2048 && gl(o, t));
          break;
        case 24:
          (vl(e, t, n, r), i & 2048 && _l(t.alternate, t));
          break;
        default:
          vl(e, t, n, r);
      }
    }
    function bl(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;
      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (bl(a, o, s, c, i), Nc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), bl(a, o, s, c, i))
              : u._visibility & 2
                ? bl(a, o, s, c, i)
                : xl(a, o),
              i && l & 2048 && gl(o.alternate, o));
            break;
          case 24:
            (bl(a, o, s, c, i), i && l & 2048 && _l(o.alternate, o));
            break;
          default:
            bl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function xl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (xl(n, r), i & 2048 && gl(r.alternate, r));
              break;
            case 24:
              (xl(n, r), i & 2048 && _l(r.alternate, r));
              break;
            default:
              xl(n, r);
          }
          t = t.sibling;
        }
    }
    var Sl = 8192;
    function Cl(e, t, n) {
      if (e.subtreeFlags & Sl)
        for (e = e.child; e !== null; ) (wl(e, t, n), (e = e.sibling));
    }
    function wl(e, t, n) {
      switch (e.tag) {
        case 26:
          (Cl(e, t, n),
            e.flags & Sl &&
              e.memoizedState !== null &&
              Gf(n, ll, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Cl(e, t, n);
          break;
        case 3:
        case 4:
          var r = ll;
          ((ll = gf(e.stateNode.containerInfo)), Cl(e, t, n), (ll = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Sl), (Sl = 16777216), Cl(e, t, n), (Sl = r))
              : Cl(e, t, n));
          break;
        default:
          Cl(e, t, n);
      }
    }
    function Tl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function El(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((Xc = r), kl(r, e));
          }
        Tl(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) (Dl(e), (e = e.sibling));
    }
    function Dl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (El(e), e.flags & 2048 && Pc(9, e, e.return));
          break;
        case 3:
          El(e);
          break;
        case 12:
          El(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Ol(e))
            : El(e);
          break;
        default:
          El(e);
      }
    }
    function Ol(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((Xc = r), kl(r, e));
          }
        Tl(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Pc(8, t, t.return), Ol(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Ol(t)));
            break;
          default:
            Ol(t);
        }
        e = e.sibling;
      }
    }
    function kl(e, t) {
      for (; Xc !== null; ) {
        var n = Xc;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Pc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            G(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (Xc = r));
        else
          a: for (n = e; Xc !== null; ) {
            r = Xc;
            var i = r.sibling,
              a = r.return;
            if (($c(r), r === n)) {
              Xc = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (Xc = i));
              break a;
            }
            Xc = a;
          }
      }
    }
    var Al = {
        getCacheForType: function (e) {
          var t = Xi(na),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return Xi(na).controller.signal;
        },
      },
      jl = typeof WeakMap == `function` ? WeakMap : Map,
      Ml = 0,
      Nl = null,
      $ = null,
      Pl = 0,
      Fl = 0,
      Il = null,
      Ll = !1,
      Rl = !1,
      zl = !1,
      Bl = 0,
      Vl = 0,
      Hl = 0,
      Ul = 0,
      Wl = 0,
      Gl = 0,
      Kl = 0,
      ql = null,
      Jl = null,
      Yl = !1,
      Xl = 0,
      Zl = 0,
      Ql = 1 / 0,
      $l = null,
      eu = null,
      tu = 0,
      nu = null,
      ru = null,
      iu = 0,
      au = 0,
      ou = null,
      su = null,
      cu = 0,
      lu = null;
    function uu() {
      return Ml & 2 && Pl !== 0 ? Pl & -Pl : P.T === null ? $e() : ld();
    }
    function du() {
      if (Gl === 0)
        if (!(Pl & 536870912) || Ai) {
          var e = Re;
          ((Re <<= 1), !(Re & 3932160) && (Re = 262144), (Gl = e));
        } else Gl = 536870912;
      return ((e = Ja.current), e !== null && (e.flags |= 32), Gl);
    }
    function fu(e, t, n) {
      (((e === Nl && (Fl === 2 || Fl === 9)) ||
        e.cancelPendingCommit !== null) &&
        (yu(e, 0), gu(e, Pl, Gl, !1)),
        Ke(e, n),
        (!(Ml & 2) || e !== Nl) &&
          (e === Nl && (!(Ml & 2) && (Ul |= n), Vl === 4 && gu(e, Pl, Gl, !1)),
          td(e)));
    }
    function pu(e, t, n) {
      if (Ml & 6) throw Error(i(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || He(e, t),
        a = r ? Du(e, t) : Tu(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Rl && !r && gu(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !hu(n))) {
            ((a = Tu(e, t, !1)), (o = !1));
            continue;
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = ql;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (yu(c, s).flags |= 256), (s = Tu(c, s, !1)), s !== 2)
                ) {
                  if (zl && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (Ul |= o), (a = 4));
                    break a;
                  }
                  ((o = Jl),
                    (Jl = a),
                    o !== null &&
                      (Jl === null ? (Jl = o) : Jl.push.apply(Jl, o)));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (yu(e, 0), gu(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                gu(r, t, Gl, !Ll);
                break a;
              case 2:
                Jl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = Xl + 300 - Se()), 10 < a)) {
              if ((gu(r, t, Gl, !Ll), Ve(r, 0, !0) !== 0)) break a;
              ((iu = t),
                (r.timeoutHandle = Kd(
                  mu.bind(
                    null,
                    r,
                    n,
                    Jl,
                    $l,
                    Yl,
                    t,
                    Gl,
                    Ul,
                    Kl,
                    Ll,
                    o,
                    `Throttled`,
                    -0,
                    0,
                  ),
                  a,
                )));
              break a;
            }
            mu(r, n, Jl, $l, Yl, t, Gl, Ul, Kl, Ll, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      td(e);
    }
    function mu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: Yt,
        }),
          wl(t, a, d));
        var m =
          (a & 62914560) === a
            ? Xl - Se()
            : (a & 4194048) === a
              ? Zl - Se()
              : 0;
        if (((m = qf(d, m)), m !== null)) {
          ((iu = a),
            (e.cancelPendingCommit = m(
              Pu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p),
            )),
            gu(e, a, o, !l));
          return;
        }
      }
      Pu(e, t, a, n, r, i, o, s, c);
    }
    function hu(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!_r(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function gu(e, t, n, r) {
      ((t &= ~Wl),
        (t &= ~Ul),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i; ) {
        var a = 31 - Ne(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && Je(e, n, t);
    }
    function _u() {
      return Ml & 6 ? !0 : (nd(0, !1), !1);
    }
    function vu() {
      if ($ !== null) {
        if (Fl === 0) var e = $.return;
        else ((e = $), (Hi = Vi = null), xo(e), (Ea = null), (K = 0), (e = $));
        for (; e !== null; ) (Mc(e.alternate, e), (e = e.return));
        $ = null;
      }
    }
    function yu(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (iu = 0),
        vu(),
        (Nl = e),
        ($ = n = ai(e.current, null)),
        (Pl = t),
        (Fl = 0),
        (Il = null),
        (Ll = !1),
        (Rl = He(e, t)),
        (zl = !1),
        (Kl = Gl = Wl = Ul = Hl = Vl = 0),
        (Jl = ql = null),
        (Yl = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Ne(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Bl = t), Yr(), n);
    }
    function bu(e, t) {
      ((Y = null),
        (P.H = As),
        t === ga || t === va
          ? ((t = wa()), (Fl = 3))
          : t === _a
            ? ((t = wa()), (Fl = 4))
            : (Fl =
                t === Js
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (Il = t),
        $ === null && ((Vl = 1), Hs(e, pi(t, e.current))));
    }
    function xu() {
      var e = Ja.current;
      return e === null
        ? !0
        : (Pl & 4194048) === Pl
          ? Ya === null
          : (Pl & 62914560) === Pl || Pl & 536870912
            ? e === Ya
            : !1;
    }
    function Su() {
      var e = P.H;
      return ((P.H = As), e === null ? As : e);
    }
    function Cu() {
      var e = P.A;
      return ((P.A = Al), e);
    }
    function wu() {
      ((Vl = 4),
        Ll || ((Pl & 4194048) !== Pl && Ja.current !== null) || (Rl = !0),
        (!(Hl & 134217727) && !(Ul & 134217727)) ||
          Nl === null ||
          gu(Nl, Pl, Gl, !1));
    }
    function Tu(e, t, n) {
      var r = Ml;
      Ml |= 2;
      var i = Su(),
        a = Cu();
      ((Nl !== e || Pl !== t) && (($l = null), yu(e, t)), (t = !1));
      var o = Vl;
      a: do
        try {
          if (Fl !== 0 && $ !== null) {
            var s = $,
              c = Il;
            switch (Fl) {
              case 8:
                (vu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                Ja.current === null && (t = !0);
                var l = Fl;
                if (((Fl = 0), (Il = null), ju(e, s, c, l), n && Rl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = Fl), (Fl = 0), (Il = null), ju(e, s, c, l));
            }
          }
          (Eu(), (o = Vl));
          break;
        } catch (t) {
          bu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Hi = Vi = null),
        (Ml = r),
        (P.H = i),
        (P.A = a),
        $ === null && ((Nl = null), (Pl = 0), Yr()),
        o
      );
    }
    function Eu() {
      for (; $ !== null; ) ku($);
    }
    function Du(e, t) {
      var n = Ml;
      Ml |= 2;
      var r = Su(),
        a = Cu();
      Nl !== e || Pl !== t
        ? (($l = null), (Ql = Se() + 500), yu(e, t))
        : (Rl = He(e, t));
      a: do
        try {
          if (Fl !== 0 && $ !== null) {
            t = $;
            var o = Il;
            b: switch (Fl) {
              case 1:
                ((Fl = 0), (Il = null), ju(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (ba(o)) {
                  ((Fl = 0), (Il = null), Au(t));
                  break;
                }
                ((t = function () {
                  ((Fl !== 2 && Fl !== 9) || Nl !== e || (Fl = 7), td(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                Fl = 7;
                break a;
              case 4:
                Fl = 5;
                break a;
              case 7:
                ba(o)
                  ? ((Fl = 0), (Il = null), Au(t))
                  : ((Fl = 0), (Il = null), ju(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch ($.tag) {
                  case 26:
                    s = $.memoizedState;
                  case 5:
                  case 27:
                    var c = $;
                    if (s ? Wf(s) : c.stateNode.complete) {
                      ((Fl = 0), (Il = null));
                      var l = c.sibling;
                      if (l !== null) $ = l;
                      else {
                        var u = c.return;
                        u === null ? ($ = null) : (($ = u), Mu(u));
                      }
                      break b;
                    }
                }
                ((Fl = 0), (Il = null), ju(e, t, o, 5));
                break;
              case 6:
                ((Fl = 0), (Il = null), ju(e, t, o, 6));
                break;
              case 8:
                (vu(), (Vl = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Ou();
          break;
        } catch (t) {
          bu(e, t);
        }
      while (1);
      return (
        (Hi = Vi = null),
        (P.H = r),
        (P.A = a),
        (Ml = n),
        $ === null ? ((Nl = null), (Pl = 0), Yr(), Vl) : 0
      );
    }
    function Ou() {
      for (; $ !== null && !be(); ) ku($);
    }
    function ku(e) {
      var t = Cc(e.alternate, e, Bl);
      ((e.memoizedProps = e.pendingProps), t === null ? Mu(e) : ($ = t));
    }
    function Au(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = sc(n, t, t.pendingProps, t.type, void 0, Pl);
          break;
        case 11:
          t = sc(n, t, t.pendingProps, t.type.render, t.ref, Pl);
          break;
        case 5:
          xo(t);
        default:
          (Mc(n, t), (t = $ = oi(t, Bl)), (t = Cc(n, t, Bl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Mu(e) : ($ = t));
    }
    function ju(e, t, n, r) {
      ((Hi = Vi = null), xo(t), (Ea = null), (K = 0));
      var i = t.return;
      try {
        if (qs(e, i, t, n, Pl)) {
          ((Vl = 1), Hs(e, pi(n, e.current)), ($ = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw (($ = i), t);
        ((Vl = 1), Hs(e, pi(n, e.current)), ($ = null));
        return;
      }
      t.flags & 32768
        ? (Ai || r === 1
            ? (e = !0)
            : Rl || Pl & 536870912
              ? (e = !1)
              : ((Ll = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = Ja.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Nu(t, e))
        : Mu(t);
    }
    function Mu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Nu(t, Ll);
          return;
        }
        e = t.return;
        var n = Ac(t.alternate, t, Bl);
        if (n !== null) {
          $ = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          $ = t;
          return;
        }
        $ = t = e;
      } while (t !== null);
      Vl === 0 && (Vl = 5);
    }
    function Nu(e, t) {
      do {
        var n = jc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), ($ = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          $ = e;
          return;
        }
        $ = e = n;
      } while (e !== null);
      ((Vl = 6), ($ = null));
    }
    function Pu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do zu();
      while (tu !== 0);
      if (Ml & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= Jr),
          qe(e, n, o, s, c, l),
          e === Nl && (($ = Nl = null), (Pl = 0)),
          (ru = t),
          (nu = e),
          (iu = n),
          (au = o),
          (ou = a),
          (su = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Ju(Ee, function () {
                return (Bu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = P.T), (P.T = null), (a = F.p), (F.p = 2), (s = Ml), (Ml |= 4));
          try {
            Zc(e, t, n);
          } finally {
            ((Ml = s), (F.p = a), (P.T = r));
          }
        }
        ((tu = 1), Fu(), Iu(), Lu());
      }
    }
    function Fu() {
      if (tu === 1) {
        tu = 0;
        var e = nu,
          t = ru,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          ((n = P.T), (P.T = null));
          var r = F.p;
          F.p = 2;
          var i = Ml;
          Ml |= 4;
          try {
            ul(t, e);
            var a = zd,
              o = Sr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              xr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Cr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = br(s, h),
                      v = br(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((sp = !!Rd), (zd = Rd = null));
          } finally {
            ((Ml = i), (F.p = r), (P.T = n));
          }
        }
        ((e.current = t), (tu = 2));
      }
    }
    function Iu() {
      if (tu === 2) {
        tu = 0;
        var e = nu,
          t = ru,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          ((n = P.T), (P.T = null));
          var r = F.p;
          F.p = 2;
          var i = Ml;
          Ml |= 4;
          try {
            Qc(e, t.alternate, t);
          } finally {
            ((Ml = i), (F.p = r), (P.T = n));
          }
        }
        tu = 3;
      }
    }
    function Lu() {
      if (tu === 4 || tu === 3) {
        ((tu = 0), xe());
        var e = nu,
          t = ru,
          n = iu,
          r = su;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (tu = 5)
          : ((tu = 0), (ru = nu = null), Ru(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (eu = null),
          Qe(n),
          (t = t.stateNode),
          je && typeof je.onCommitFiberRoot == `function`)
        )
          try {
            je.onCommitFiberRoot(H, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = P.T), (i = F.p), (F.p = 2), (P.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((P.T = t), (F.p = i));
          }
        }
        (iu & 3 && zu(),
          td(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === lu
              ? cu++
              : ((cu = 0), (lu = e))
            : (cu = 0),
          nd(0, !1));
      }
    }
    function Ru(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), G(t)));
    }
    function zu() {
      return (Fu(), Iu(), Lu(), Bu());
    }
    function Bu() {
      if (tu !== 5) return !1;
      var e = nu,
        t = au;
      au = 0;
      var n = Qe(iu),
        r = P.T,
        a = F.p;
      try {
        ((F.p = 32 > n ? 32 : n), (P.T = null), (n = ou), (ou = null));
        var o = nu,
          s = iu;
        if (((tu = 0), (ru = nu = null), (iu = 0), Ml & 6)) throw Error(i(331));
        var c = Ml;
        if (
          ((Ml |= 4),
          Dl(o.current),
          yl(o, o.current, s, n),
          (Ml = c),
          nd(0, !1),
          je && typeof je.onPostCommitFiberRoot == `function`)
        )
          try {
            je.onPostCommitFiberRoot(H, o);
          } catch {}
        return !0;
      } finally {
        ((F.p = a), (P.T = r), Ru(e, t));
      }
    }
    function Vu(e, t, n) {
      ((t = pi(n, t)),
        (t = Ws(e.stateNode, t, 2)),
        (e = Fa(e, t, 2)),
        e !== null && (Ke(e, 2), td(e)));
    }
    function Hu(e, t, n) {
      if (e.tag === 3) Vu(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Vu(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (eu === null || !eu.has(r)))
            ) {
              ((e = pi(n, e)),
                (n = Gs(2)),
                (r = Fa(t, n, 2)),
                r !== null && (Ks(n, r, t, e), Ke(r, 2), td(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Uu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new jl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((zl = !0), i.add(n), (e = Wu.bind(null, e, t, n)), t.then(e, e));
    }
    function Wu(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        Nl === e &&
          (Pl & n) === n &&
          (Vl === 4 || (Vl === 3 && (Pl & 62914560) === Pl && 300 > Se() - Xl)
            ? !(Ml & 2) && yu(e, 0)
            : (Wl |= n),
          Kl === Pl && (Kl = 0)),
        td(e));
    }
    function Gu(e, t) {
      (t === 0 && (t = We()), (e = Qr(e, t)), e !== null && (Ke(e, t), td(e)));
    }
    function Ku(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Gu(e, n));
    }
    function qu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), Gu(e, n));
    }
    function Ju(e, t) {
      return V(e, t);
    }
    var Yu = null,
      Xu = null,
      Zu = !1,
      Qu = !1,
      $u = !1,
      ed = 0;
    function td(e) {
      (e !== Xu &&
        e.next === null &&
        (Xu === null ? (Yu = Xu = e) : (Xu = Xu.next = e)),
        (Qu = !0),
        Zu || ((Zu = !0), cd()));
    }
    function nd(e, t) {
      if (!$u && Qu) {
        $u = !0;
        do
          for (var n = !1, r = Yu; r !== null; ) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Ne(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), sd(r, a));
              } else
                ((a = Pl),
                  (a = Ve(
                    r,
                    r === Nl ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || He(r, a) || ((n = !0), sd(r, a)));
            r = r.next;
          }
        while (n);
        $u = !1;
      }
    }
    function rd() {
      id();
    }
    function id() {
      Qu = Zu = !1;
      var e = 0;
      ed !== 0 && Gd() && (e = ed);
      for (var t = Se(), n = null, r = Yu; r !== null; ) {
        var i = r.next,
          a = ad(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (Yu = i) : (n.next = i),
            i === null && (Xu = n))
          : ((n = r), (e !== 0 || a & 3) && (Qu = !0)),
          (r = i));
      }
      ((tu !== 0 && tu !== 5) || nd(e, !1), ed !== 0 && (ed = 0));
    }
    function ad(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ne(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ue(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = Nl),
        (n = Pl),
        (n = Ve(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (Fl === 2 || Fl === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && ye(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || He(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && ye(r), Qe(n))) {
          case 2:
          case 8:
            n = Te;
            break;
          case 32:
            n = Ee;
            break;
          case 268435456:
            n = Oe;
            break;
          default:
            n = Ee;
        }
        return (
          (r = od.bind(null, e)),
          (n = V(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && ye(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function od(e, t) {
      if (tu !== 0 && tu !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (zu() && e.callbackNode !== n) return null;
      var r = Pl;
      return (
        (r = Ve(
          e,
          e === Nl ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (pu(e, r, t),
            ad(e, Se()),
            e.callbackNode != null && e.callbackNode === n
              ? od.bind(null, e)
              : null)
      );
    }
    function sd(e, t) {
      if (zu()) return null;
      pu(e, t, !0);
    }
    function cd() {
      Yd(function () {
        Ml & 6 ? V(we, rd) : id();
      });
    }
    function ld() {
      if (ed === 0) {
        var e = oa;
        (e === 0 && ((e = Le), (Le <<= 1), !(Le & 261888) && (Le = 256)),
          (ed = e));
      }
      return ed;
    }
    function ud(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : Jt(`` + e);
    }
    function dd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function fd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = ud((i[rt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[rt] || null)
            ? ud(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new gn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (ed !== 0) {
                    var e = o ? dd(i, o) : new FormData(i);
                    gs(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? dd(i, o) : new FormData(i)),
                    gs(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var pd = 0; pd < Ur.length; pd++) {
      var md = Ur[pd];
      Wr(md.toLowerCase(), `on` + (md[0].toUpperCase() + md.slice(1)));
    }
    (Wr(Fr, `onAnimationEnd`),
      Wr(Ir, `onAnimationIteration`),
      Wr(Lr, `onAnimationStart`),
      Wr(`dblclick`, `onDoubleClick`),
      Wr(`focusin`, `onFocus`),
      Wr(`focusout`, `onBlur`),
      Wr(Rr, `onTransitionRun`),
      Wr(zr, `onTransitionStart`),
      Wr(Br, `onTransitionCancel`),
      Wr(Vr, `onTransitionEnd`),
      yt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      yt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      yt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      yt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      vt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      vt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      vt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      vt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      vt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      vt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var hd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      gd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(hd),
      );
    function _d(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Gr(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Gr(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function vd(e, t) {
      var n = t[at];
      n === void 0 && (n = t[at] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Sd(t, e, 2, !1), n.add(r));
    }
    function yd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Sd(n, e, r, t));
    }
    var bd = `_reactListening` + Math.random().toString(36).slice(2);
    function xd(e) {
      if (!e[bd]) {
        ((e[bd] = !0),
          gt.forEach(function (t) {
            t !== `selectionchange` &&
              (gd.has(t) || yd(t, !1, e), yd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[bd] || ((t[bd] = !0), yd(`selectionchange`, !1, t));
      }
    }
    function Sd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !on ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Cd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null; ) {
              if (((s = dt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      nn(function () {
        var r = a,
          i = Zt(n),
          s = [];
        a: {
          var c = Hr.get(e);
          if (c !== void 0) {
            var l = gn,
              u = e;
            switch (e) {
              case `keypress`:
                if (fn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Pn;
                break;
              case `focusin`:
                ((u = `focus`), (l = Tn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Tn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Tn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Cn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = wn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = In;
                break;
              case Fr:
              case Ir:
              case Lr:
                l = En;
                break;
              case Vr:
                l = Ln;
                break;
              case `scroll`:
              case `scrollend`:
                l = vn;
                break;
              case `wheel`:
                l = Rn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Dn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Fn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = zn;
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = rn(m, p)), g != null && d.push(wd(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== Xt &&
                (u = n.relatedTarget || n.fromElement) &&
                (dt(u) || u[it]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? dt(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Cn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Fn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : pt(l)),
                (h = u == null ? c : pt(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                dt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Ed, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) ((p = d(p)), h--);
                  for (; 0 < g - h; ) ((m = d(m)), g--);
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Dd(s, c, l, d, !1),
                u !== null && f !== null && Dd(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? pt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = ar;
            else if ($n(c))
              if (or) v = hr;
              else {
                v = pr;
                var y = fr;
              }
            else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && Gt(r.elementType) && (v = ar)
                  : (v = mr));
            if ((v &&= v(e, r))) {
              er(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Lt(c, `number`, c.value));
          }
          switch (((y = r ? pt(r) : window), e)) {
            case `focusin`:
              ($n(y) || y.contentEditable === `true`) &&
                ((Tr = y), (Er = r), (Dr = null));
              break;
            case `focusout`:
              Dr = Er = Tr = null;
              break;
            case `mousedown`:
              Or = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Or = !1), kr(s, n, i));
              break;
            case `selectionchange`:
              if (wr) break;
            case `keydown`:
            case `keyup`:
              kr(s, n, i);
          }
          var b;
          if (Vn)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            Yn
              ? qn(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          (x &&
            (Wn &&
              n.locale !== `ko` &&
              (Yn || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && Yn && (b = dn())
                : ((cn = i),
                  (ln = `value` in cn ? cn.value : cn.textContent),
                  (Yn = !0))),
            (y = Td(r, x)),
            0 < y.length &&
              ((x = new On(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = Jn(n)), b !== null && (x.data = b)))),
            (b = Un ? Xn(e, n) : Zn(e, n)) &&
              ((x = Td(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new On(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            fd(s, e, r, n, i));
        }
        _d(s, t);
      });
    }
    function wd(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Td(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = rn(e, n)),
            i != null && r.unshift(wd(e, i, a)),
            (i = rn(e, t)),
            i != null && r.push(wd(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Ed(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Dd(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = rn(n, a)), l != null && o.unshift(wd(n, l, c)))
            : i || ((l = rn(n, a)), l != null && o.push(wd(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Od = /\r\n?/g,
      kd = /\u0000|\uFFFD/g;
    function Ad(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Od,
          `
`,
        )
        .replace(kd, ``);
    }
    function jd(e, t) {
      return ((t = Ad(t)), Ad(e) === t);
    }
    function Md(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Vt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              Vt(e, `` + r);
          break;
        case `className`:
          Tt(e, `class`, r);
          break;
        case `tabIndex`:
          Tt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Tt(e, n, r);
          break;
        case `style`:
          Wt(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Tt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = Jt(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && Md(e, t, `name`, a.name, a, null),
                  Md(e, t, `formEncType`, a.formEncType, a, null),
                  Md(e, t, `formMethod`, a.formMethod, a, null),
                  Md(e, t, `formTarget`, a.formTarget, a, null))
                : (Md(e, t, `encType`, a.encType, a, null),
                  Md(e, t, `method`, a.method, a, null),
                  Md(e, t, `target`, a.target, a, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          ((r = Jt(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = Yt);
          break;
        case `onScroll`:
          r != null && vd(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && vd(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = Jt(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (vd(`beforetoggle`, e), vd(`toggle`, e), wt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Et(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Et(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Et(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Et(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Et(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Et(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Et(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Et(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Et(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          wt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = Kt.get(n) || n), wt(e, n, r));
      }
    }
    function Nd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          Wt(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? Vt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Vt(e, `` + r);
          break;
        case `onScroll`:
          r != null && vd(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && vd(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = Yt);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!_t.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[rt] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a));
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : wt(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (vd(`error`, e), vd(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    Md(e, t, o, s, n, null);
                }
            }
          (a && Md(e, t, `srcSet`, n.srcSet, n, null),
            r && Md(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          vd(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    Md(e, t, r, d, n, null);
                }
            }
          It(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (vd(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  Md(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Rt(e, !!r, n, !0) : Rt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (vd(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  Md(e, t, s, c, n, null);
              }
          Bt(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  Md(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (vd(`beforetoggle`, e),
            vd(`toggle`, e),
            vd(`cancel`, e),
            vd(`close`, e));
          break;
        case `iframe`:
        case `object`:
          vd(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < hd.length; r++) vd(hd[r], e);
          break;
        case `image`:
          (vd(`error`, e), vd(`load`, e));
          break;
        case `details`:
          vd(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (vd(`error`, e), vd(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  Md(e, t, u, r, n, null);
              }
          return;
        default:
          if (Gt(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && Md(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || Md(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && Md(e, t, p, m, r, f);
              }
          }
          Ft(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || Md(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && Md(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? Rt(e, !!n, n ? [] : ``, !1) : Rt(e, !!n, t, !0))
              : Rt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  Md(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && Md(e, t, s, a, r, o);
              }
          zt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  Md(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  Md(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                Md(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  Md(e, t, u, p, r, m);
              }
          return;
        default:
          if (Gt(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            Md(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            Md(e, t, f, p, r, m));
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Id(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e === Wd
          ? !1
          : ((Wd = e), !0)
        : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd);
              };
    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Np(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), pf(n));
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[lt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && pf(e.ownerDocument.body);
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (ef(n), ut(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[lt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      ut(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = F.d;
    F.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = _u();
      return e || t;
    }
    function yf(e) {
      var t = ft(e);
      t !== null && t.tag === 5 && t.type === `form` ? vs(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = Pt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Pd(t, `link`, e),
              ht(t),
              r.head.appendChild(t))));
      }
    }
    function Sf(e) {
      (_f.D(e), xf(`dns-prefetch`, e, null));
    }
    function Cf(e, t) {
      (_f.C(e, t), xf(`preconnect`, e, t));
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Pt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Pt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Pt(n.imageSizes) + `"]`))
          : (i += `[href="` + Pt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = h(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)),
            Pd(t, `link`, e),
            ht(t),
            r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Pt(r) +
            `"][href="` +
            Pt(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)),
          mf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          ((r = n.createElement(`link`)),
            Pd(r, `link`, e),
            ht(r),
            n.head.appendChild(r));
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = mt(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            ((e = h({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n));
            var c = (o = r.createElement(`link`));
            (ht(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = mt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            ht(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = mt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            ht(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var a = (a = oe.current) ? gf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = mt(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var o = mt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(jf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  o || Nf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = mt(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Af(e) {
      return `href="` + Pt(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return h({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          ht(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + Pt(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Pt(n.href) + `"]`);
            if (r) return ((t.instance = r), ht(r), r);
            var a = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              ht(r),
              Pd(r, `style`, a),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Af(n.href);
            var o = e.querySelector(jf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), ht(o), o);
            ((r = Mf(n)),
              (a = mf.get(a)) && Rf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              ht(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Pd(o, `link`, r),
              (t.state.loading |= 4),
              Lf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Pf(n.src)),
              (a = e.querySelector(Ff(o)))
                ? ((t.instance = a), ht(a), a)
                : ((r = n),
                  (a = mf.get(o)) && ((r = h({}, n)), zf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  ht(a),
                  Pd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function zf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else ((i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[lt] ||
            a[nt] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              ht(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            ht(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Pd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Yf = new Map()),
          t.forEach(Zf, e),
          (Yf = null),
          Jf.call(e)));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Yf.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Qf = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: I,
      _currentValue2: I,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Ge(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Ge(0)),
        (this.hiddenUpdates = Ge(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = ri(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ra()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ma(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = ti), e) : ti;
    }
    function np(e, t, n, r, i, a) {
      ((i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Pa(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Fa(e, r, t)),
        n !== null && (fu(n, e, t), Ia(n, e, t)));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      (rp(e, t), (e = e.alternate) && rp(e, t));
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Qr(e, 67108864);
        (t !== null && fu(t, e, 67108864), ip(e, 67108864));
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = uu();
        t = Ze(t);
        var n = Qr(e, t);
        (n !== null && fu(n, e, t), ip(e, t));
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = P.T;
      P.T = null;
      var a = F.p;
      try {
        ((F.p = 2), up(e, t, n, r));
      } finally {
        ((F.p = a), (P.T = i));
      }
    }
    function lp(e, t, n, r) {
      var i = P.T;
      P.T = null;
      var a = F.p;
      try {
        ((F.p = 8), up(e, t, n, r));
      } finally {
        ((F.p = a), (P.T = i));
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) (Cd(e, t, r, fp, n), Cp(e, r));
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null; ) {
            var a = ft(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = Be(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Ne(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (td(a), !(Ml & 6) && ((Ql = Se() + 500), nd(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = Qr(a, 2)), s !== null && fu(s, a, 2), _u(), ip(a, 2));
              }
            if (((a = dp(r)), a === null && Cd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Cd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return ((e = Zt(e)), pp(e));
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = dt(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((fp = e), null);
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Ce()) {
            case we:
              return 2;
            case Te:
              return 8;
            case Ee:
            case De:
              return 32;
            case Oe:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = ft(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((gp = wp(gp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((_p = wp(_p, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((vp = wp(vp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Ep(e) {
      var t = dt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                et(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                et(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((Xt = r), n.target.dispatchEvent(r), (Xt = null));
        } else return ((t = ft(n)), t !== null && ap(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      ((hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op));
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp ||
          ((hp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = ft(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              gs(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      (gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t));
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null); )
        (Ep(n), n.blockedOn === null && xp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[rt] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[rt] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Mp(n));
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    ((Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        np(n, uu(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (np(e.current, 2, null, e, null, null), _u(), (t[it] = null));
          }
        }));
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = $e();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        (xp.splice(n, 0, e), n === 0 && Ep(e));
      }
    };
    var Lp = n.version;
    if (Lp !== `19.2.6`) throw Error(i(527, Lp, `19.2.6`));
    F.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = d(t)),
        (e = e === null ? null : p(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.6`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: P,
      reconcilerVersion: `19.2.6`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          ((H = zp.inject(Rp)), (je = zp));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = zs,
        s = Bs,
        c = Vs;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ep(e, 1, !1, null, null, n, r, null, o, s, c, Pp)),
        (e[it] = t.current),
        xd(e),
        new Fp(t)
      );
    };
  }),
  g = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = h()));
  }),
  _ = c(u(), 1),
  v = g(),
  y = o((e) => {
    var t = Symbol.for(`react.transitional.element`);
    function n(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.jsx = n), (e.jsxs = n));
  }),
  b = o((e, t) => {
    t.exports = y();
  })();
function x({ navLinks: e, activeSection: t }) {
  let [n, r] = (0, _.useState)(!1),
    [i, a] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      let e = () => {
        window.scrollY > 20 ? a(!0) : a(!1);
      };
      return (
        window.addEventListener(`scroll`, e),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, b.jsxs)(`header`, {
      className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${i ? `backdrop-blur-xl bg-[#05070a]/80 border-[#C8A46B]/15 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)]` : `backdrop-blur-sm bg-transparent border-transparent py-6`}`,
      children: [
        (0, b.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between`,
          children: [
            (0, b.jsxs)(`a`, {
              href: `#home`,
              className: `flex flex-col items-center leading-none group`,
              children: [
                (0, b.jsx)(`span`, {
                  className: `font-serif-luxury text-2xl md:text-3xl tracking-[0.22em] text-white font-light transition-colors group-hover:text-[#C8A46B]`,
                  children: `PAYAL`,
                }),
                (0, b.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 w-full mt-1.5`,
                  children: [
                    (0, b.jsx)(`span`, {
                      className: `h-[0.5px] bg-[#C8A46B]/40 flex-grow transition-all group-hover:bg-[#C8A46B]/80`,
                    }),
                    (0, b.jsx)(`span`, {
                      className: `text-[9px] tracking-[0.3em] text-[#C8A46B] font-semibold uppercase whitespace-nowrap`,
                      children: `KAR DUTTA`,
                    }),
                    (0, b.jsx)(`span`, {
                      className: `h-[0.5px] bg-[#C8A46B]/40 flex-grow transition-all group-hover:bg-[#C8A46B]/80`,
                    }),
                  ],
                }),
              ],
            }),
            (0, b.jsx)(`nav`, {
              className: `hidden lg:flex items-center gap-8`,
              children: e.map((e) =>
                (0, b.jsxs)(
                  `a`,
                  {
                    href: e.href,
                    className: `relative group text-[11px] tracking-[0.25em] uppercase transition-all duration-300 py-1 ${t === e.href.slice(1) ? `text-[#C8A46B] font-semibold` : `text-slate-300 hover:text-white`}`,
                    children: [
                      e.name,
                      (0, b.jsx)(`span`, {
                        className: `absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-[#C8A46B] transition-all duration-300 ${t === e.href.slice(1) ? `w-full` : `w-0 group-hover:w-full`}`,
                      }),
                    ],
                  },
                  e.name,
                ),
              ),
            }),
            (0, b.jsx)(`div`, {
              className: `hidden lg:block`,
              children: (0, b.jsx)(`a`, {
                href: `#contact`,
                className: `px-6 py-2.5 bg-[#C8A46B] hover:bg-[#B18D55] text-white text-xs font-semibold uppercase tracking-widest rounded-sm shadow-[0_4px_15px_rgba(200,164,107,0.15)] animate-gold-glow transition-all duration-300 hover:scale-[1.03] cursor-pointer`,
                children: `Schedule a Meeting`,
              }),
            }),
            (0, b.jsx)(`button`, {
              onClick: () => r(!n),
              className: `lg:hidden text-white hover:text-gold-luxury transition-colors focus:outline-none`,
              "aria-label": `Toggle menu`,
              children: n
                ? (0, b.jsx)(`svg`, {
                    className: `w-6 h-6`,
                    fill: `none`,
                    stroke: `currentColor`,
                    viewBox: `0 0 24 24`,
                    children: (0, b.jsx)(`path`, {
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      strokeWidth: `2`,
                      d: `M6 18L18 6M6 6l12 12`,
                    }),
                  })
                : (0, b.jsx)(`svg`, {
                    className: `w-6 h-6`,
                    fill: `none`,
                    stroke: `currentColor`,
                    viewBox: `0 0 24 24`,
                    children: (0, b.jsx)(`path`, {
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      strokeWidth: `2`,
                      d: `M4 6h16M4 12h16M4 18h16`,
                    }),
                  }),
            }),
          ],
        }),
        (0, b.jsx)(`div`, {
          onClick: () => r(!1),
          className: `lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ease-in-out ${n ? `opacity-100 pointer-events-auto` : `opacity-0 pointer-events-none`}`,
        }),
        (0, b.jsx)(`div`, {
          className: `lg:hidden fixed top-0 right-0 h-screen w-[280px] bg-[#05070a] border-l border-[#C8A46B]/15 shadow-2xl z-50 transition-transform duration-500 ease-in-out py-8 px-6 ${n ? `translate-x-0` : `translate-x-full`}`,
          children: (0, b.jsxs)(`div`, {
            className: `flex flex-col h-full justify-between`,
            children: [
              (0, b.jsxs)(`div`, {
                className: `flex flex-col gap-8`,
                children: [
                  (0, b.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, b.jsxs)(`div`, {
                        className: `flex flex-col leading-none`,
                        children: [
                          (0, b.jsx)(`span`, {
                            className: `font-serif-luxury text-lg tracking-[0.2em] text-white font-light`,
                            children: `PAYAL`,
                          }),
                          (0, b.jsx)(`span`, {
                            className: `text-[8px] tracking-[0.3em] text-[#C8A46B] font-semibold uppercase mt-1`,
                            children: `KAR DUTTA`,
                          }),
                        ],
                      }),
                      (0, b.jsx)(`button`, {
                        onClick: () => r(!1),
                        className: `text-slate-400 hover:text-white transition-colors focus:outline-none`,
                        "aria-label": `Close menu`,
                        children: (0, b.jsx)(`svg`, {
                          className: `w-5 h-5`,
                          fill: `none`,
                          stroke: `currentColor`,
                          viewBox: `0 0 24 24`,
                          children: (0, b.jsx)(`path`, {
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`,
                            strokeWidth: `2`,
                            d: `M6 18L18 6M6 6l12 12`,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, b.jsx)(`nav`, {
                    className: `flex flex-col gap-6 mt-4`,
                    children: e.map((e) =>
                      (0, b.jsx)(
                        `a`,
                        {
                          href: e.href,
                          onClick: () => r(!1),
                          className: `text-[13px] tracking-[0.22em] uppercase font-light transition-colors py-1 ${t === e.href.slice(1) ? `text-[#C8A46B] font-semibold` : `text-slate-300 hover:text-white`}`,
                          children: e.name,
                        },
                        e.name,
                      ),
                    ),
                  }),
                ],
              }),
              (0, b.jsx)(`div`, {
                className: `pb-8`,
                children: (0, b.jsx)(`a`, {
                  href: `#contact`,
                  onClick: () => r(!1),
                  className: `w-full py-3 bg-[#C8A46B] hover:bg-[#B18D55] text-white text-xs font-semibold uppercase tracking-widest rounded-sm shadow-[0_4px_15px_rgba(200,164,107,0.15)] flex items-center justify-center transition-all duration-300`,
                  children: `Schedule a Meeting`,
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function S(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function C(e, t) {
  ((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t));
}
var w = {
    autoSleep: 120,
    force3D: `auto`,
    nullTargetWarn: 1,
    units: { lineHeight: `` },
  },
  T = { duration: 0.5, overwrite: !1, delay: 0 },
  E,
  D,
  O,
  k = 1e8,
  A = 1 / k,
  j = Math.PI * 2,
  M = j / 4,
  ee = 0,
  N = Math.sqrt,
  te = Math.cos,
  P = Math.sin,
  F = function (e) {
    return typeof e == `string`;
  },
  I = function (e) {
    return typeof e == `function`;
  },
  ne = function (e) {
    return typeof e == `number`;
  },
  re = function (e) {
    return e === void 0;
  },
  L = function (e) {
    return typeof e == `object`;
  },
  R = function (e) {
    return e !== !1;
  },
  z = function () {
    return typeof window < `u`;
  },
  ie = function (e) {
    return I(e) || F(e);
  },
  ae =
    (typeof ArrayBuffer == `function` && ArrayBuffer.isView) || function () {},
  oe = Array.isArray,
  se = /random\([^)]+\)/g,
  ce = /,\s*/g,
  le = /(?:-?\.?\d|\.)+/gi,
  B = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  ue = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  de = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  fe = /[+-]=-?[.\d]+/,
  pe = /[^,'"\[\]\s]+/gi,
  me = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  he,
  ge,
  _e,
  ve,
  V = {},
  ye = {},
  be,
  xe = function (e) {
    return (ye = Qe(e, V)) && _r;
  },
  Se = function (e, t) {
    return console.warn(
      `Invalid property`,
      e,
      `set to`,
      t,
      `Missing plugin? gsap.registerPlugin()`,
    );
  },
  Ce = function (e, t) {
    return !t && console.warn(e);
  },
  we = function (e, t) {
    return (e && (V[e] = t) && ye && (ye[e] = t)) || V;
  },
  Te = function () {
    return 0;
  },
  Ee = { suppressEvents: !0, isStart: !0, kill: !1 },
  De = { suppressEvents: !0, kill: !1 },
  Oe = { suppressEvents: !0 },
  ke = {},
  Ae = [],
  H = {},
  je,
  Me = {},
  Ne = {},
  Pe = 30,
  Fe = [],
  Ie = ``,
  Le = function (e) {
    var t = e[0],
      n,
      r;
    if ((L(t) || I(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (r = Fe.length; r-- && !Fe[r].targetTest(t); );
      n = Fe[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new Dn(e[r], n)))) ||
        e.splice(r, 1);
    return e;
  },
  Re = function (e) {
    return e._gsap || Le(Ft(e))[0]._gsap;
  },
  ze = function (e, t, n) {
    return (n = e[t]) && I(n)
      ? e[t]()
      : (re(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  Be = function (e, t) {
    return (e = e.split(`,`)).forEach(t) || e;
  },
  Ve = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  He = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Ue = function (e, t) {
    var n = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
    );
  },
  We = function (e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
    return r < n;
  },
  Ge = function () {
    var e = Ae.length,
      t = Ae.slice(0),
      n,
      r;
    for (H = {}, Ae.length = 0, n = 0; n < e; n++)
      ((r = t[n]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  Ke = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  qe = function (e, t, n, r) {
    (Ae.length && !D && Ge(),
      e.render(t, n, r || !!(D && t < 0 && Ke(e))),
      Ae.length && !D && Ge());
  },
  Je = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + ``).match(pe).length < 2
      ? t
      : F(e)
        ? e.trim()
        : e;
  },
  Ye = function (e) {
    return e;
  },
  Xe = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  Ze = function (e) {
    return function (t, n) {
      for (var r in n)
        r in t || (r === `duration` && e) || r === `ease` || (t[r] = n[r]);
    };
  },
  Qe = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  $e = function e(t, n) {
    for (var r in n)
      r !== `__proto__` &&
        r !== `constructor` &&
        r !== `prototype` &&
        (t[r] = L(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t;
  },
  et = function (e, t) {
    var n = {},
      r;
    for (r in e) r in t || (n[r] = e[r]);
    return n;
  },
  tt = function (e) {
    var t = e.parent || he,
      n = e.keyframes ? Ze(oe(e.keyframes)) : Xe;
    if (R(e.inherit))
      for (; t; ) (n(e, t.vars.defaults), (t = t.parent || t._dp));
    return e;
  },
  nt = function (e, t) {
    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n]; );
    return n < 0;
  },
  rt = function (e, t, n, r, i) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var a = e[r],
      o;
    if (i) for (o = t[i]; a && a[i] > o; ) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  it = function (e, t, n, r) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var i = t._prev,
      a = t._next;
    (i ? (i._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = i) : e[r] === t && (e[r] = i),
      (t._next = t._prev = t.parent = null));
  },
  at = function (e, t) {
    (e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0));
  },
  ot = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n; ) ((n._dirty = 1), (n = n.parent));
    return e;
  },
  st = function (e) {
    for (var t = e.parent; t && t.parent; )
      ((t._dirty = 1), t.totalDuration(), (t = t.parent));
    return e;
  },
  ct = function (e, t, n, r) {
    return (
      e._startAt &&
      (D
        ? e._startAt.revert(De)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  },
  lt = function e(t) {
    return !t || (t._ts && e(t.parent));
  },
  ut = function (e) {
    return e._repeat ? dt(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  dt = function (e, t) {
    var n = Math.floor((e = He(e / t)));
    return e && n === e ? n - 1 : n;
  },
  ft = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  pt = function (e) {
    return (e._end = He(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || A) || 0),
    ));
  },
  mt = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = He(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts),
        )),
        pt(e),
        n._dirty || ot(n, e)),
      e
    );
  },
  ht = function (e, t) {
    var n;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((n = ft(e.rawTime(), t)),
        (!t._dur || kt(0, t.totalDuration(), n) - t._tTime > A) &&
          t.render(n, !0)),
      ot(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp; )
          (n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp));
      e._zTime = -A;
    }
  },
  gt = function (e, t, n, r) {
    return (
      t.parent && at(t),
      (t._start = He(
        (ne(n) ? n : n || e !== he ? Et(e, n, t) : e._time) + t._delay,
      )),
      (t._end = He(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0),
      )),
      rt(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
      bt(t) || (e._recent = t),
      r || ht(e, t),
      e._ts < 0 && mt(e, e._tTime),
      e
    );
  },
  _t = function (e, t) {
    return (
      (V.ScrollTrigger || Se(`scrollTrigger`, t)) &&
      V.ScrollTrigger.create(t, e)
    );
  },
  vt = function (e, t, n, r, i) {
    if ((In(e, t, i), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !D &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      je !== mn.frame
    )
      return (Ae.push(e), (e._lazy = [i, r]), 1);
  },
  yt = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
  },
  bt = function (e) {
    var t = e.data;
    return t === `isFromStart` || t === `isStart`;
  },
  xt = function (e, t, n, r) {
    var i = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && yt(e) && !(!e._initted && bt(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !bt(e))))
          ? 0
          : 1,
      o = e._rDelay,
      s = 0,
      c,
      l,
      u;
    if (
      (o &&
        e._repeat &&
        ((s = kt(0, e._tDur, t)),
        (l = dt(s, o)),
        e._yoyo && l & 1 && (a = 1 - a),
        l !== dt(e._tTime, o) &&
          ((i = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== i || D || r || e._zTime === A || (!t && e._zTime))
    ) {
      if (!e._initted && vt(e, t, r, n, s)) return;
      for (
        u = e._zTime,
          e._zTime = t || (n ? A : 0),
          n ||= t && !u,
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = s,
          c = e._pt;
        c;
      )
        (c.r(a, c.d), (c = c._next));
      (t < 0 && ct(e, t, n, !0),
        e._onUpdate && !n && Qt(e, `onUpdate`),
        s && e._repeat && !n && e.parent && Qt(e, `onRepeat`),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && at(e, 1),
          !n &&
            !D &&
            (Qt(e, a ? `onComplete` : `onReverseComplete`, !0),
            e._prom && e._prom())));
    } else e._zTime ||= t;
  },
  St = function (e, t, n) {
    var r;
    if (n > t)
      for (r = e._first; r && r._start <= n; ) {
        if (r.data === `isPause` && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= n; ) {
        if (r.data === `isPause` && r._start < t) return r;
        r = r._prev;
      }
  },
  Ct = function (e, t, n, r) {
    var i = e._repeat,
      a = He(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !r && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = i ? (i < 0 ? 1e10 : He(a * (i + 1) + e._rDelay * i)) : a),
      o > 0 && !r && mt(e, (e._tTime = e._tDur * o)),
      e.parent && pt(e),
      n || ot(e.parent, e),
      e
    );
  },
  wt = function (e) {
    return e instanceof kn ? ot(e) : Ct(e, e._dur);
  },
  Tt = { _start: 0, endTime: Te, totalDuration: Te },
  Et = function e(t, n, r) {
    var i = t.labels,
      a = t._recent || Tt,
      o = t.duration() >= k ? a.endTime(!1) : t._dur,
      s,
      c,
      l;
    return F(n) && (isNaN(n) || n in i)
      ? ((c = n.charAt(0)),
        (l = n.substr(-1) === `%`),
        (s = n.indexOf(`=`)),
        c === `<` || c === `>`
          ? (s >= 0 && (n = n.replace(/=/, ``)),
            (c === `<` ? a._start : a.endTime(a._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (l ? (s < 0 ? a : r).totalDuration() / 100 : 1))
          : s < 0
            ? (n in i || (i[n] = o), i[n])
            : ((c = parseFloat(n.charAt(s - 1) + n.substr(s + 1))),
              l && r && (c = (c / 100) * (oe(r) ? r[0] : r).totalDuration()),
              s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c))
      : n == null
        ? o
        : +n;
  },
  Dt = function (e, t, n) {
    var r = ne(t[1]),
      i = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[i],
      o,
      s;
    if ((r && (a.duration = t[1]), (a.parent = n), e)) {
      for (o = a, s = n; s && !(`immediateRender` in o); )
        ((o = s.vars.defaults || {}), (s = R(s.vars.inherit) && s.parent));
      ((a.immediateRender = R(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[i - 1]));
    }
    return new Un(t[0], a, t[i + 1]);
  },
  Ot = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  kt = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  At = function (e, t) {
    return !F(e) || !(t = me.exec(e)) ? `` : t[1];
  },
  jt = function (e, t, n) {
    return Ot(n, function (n) {
      return kt(e, t, n);
    });
  },
  Mt = [].slice,
  Nt = function (e, t) {
    return (
      e &&
      L(e) &&
      `length` in e &&
      ((!t && !e.length) || (e.length - 1 in e && L(e[0]))) &&
      !e.nodeType &&
      e !== ge
    );
  },
  Pt = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (e) {
        var r;
        return (F(e) && !t) || Nt(e, 1)
          ? (r = n).push.apply(r, Ft(e))
          : n.push(e);
      }) || n
    );
  },
  Ft = function (e, t, n) {
    return O && !t && O.selector
      ? O.selector(e)
      : F(e) && !n && (_e || !hn())
        ? Mt.call((t || ve).querySelectorAll(e), 0)
        : oe(e)
          ? Pt(e, n)
          : Nt(e)
            ? Mt.call(e, 0)
            : e
              ? [e]
              : [];
  },
  It = function (e) {
    return (
      (e = Ft(e)[0] || Ce(`Invalid scope`) || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return Ft(
          t,
          n.querySelectorAll
            ? n
            : n === e
              ? Ce(`Invalid scope`) || ve.createElement(`div`)
              : e,
        );
      }
    );
  },
  Lt = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Rt = function (e) {
    if (I(e)) return e;
    var t = L(e) ? e : { each: e },
      n = Sn(t.ease),
      r = t.from || 0,
      i = parseFloat(t.base) || 0,
      a = {},
      o = r > 0 && r < 1,
      s = isNaN(r) || o,
      c = t.axis,
      l = r,
      u = r;
    return (
      F(r)
        ? (l = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !o && s && ((l = r[0]), (u = r[1])),
      function (e, o, d) {
        var f = (d || t).length,
          p = a[f],
          m,
          h,
          g,
          _,
          v,
          y,
          b,
          x,
          S;
        if (!p) {
          if (((S = t.grid === `auto` ? 0 : (t.grid || [1, k])[1]), !S)) {
            for (
              b = -k;
              b < (b = d[S++].getBoundingClientRect().left) && S < f;
            );
            S < f && S--;
          }
          for (
            p = a[f] = [],
              m = s ? Math.min(S, f) * l - 0.5 : r % S,
              h = S === k ? 0 : s ? (f * u) / S - 0.5 : (r / S) | 0,
              b = 0,
              x = k,
              y = 0;
            y < f;
            y++
          )
            ((g = (y % S) - m),
              (_ = h - ((y / S) | 0)),
              (p[y] = v = c ? Math.abs(c === `y` ? _ : g) : N(g * g + _ * _)),
              v > b && (b = v),
              v < x && (x = v));
          (r === `random` && Lt(p),
            (p.max = b - x),
            (p.min = x),
            (p.v = f =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (S > f
                    ? f - 1
                    : c
                      ? c === `y`
                        ? f / S
                        : S
                      : Math.max(S, f / S)) ||
                0) * (r === `edges` ? -1 : 1)),
            (p.b = f < 0 ? i - f : i),
            (p.u = At(t.amount || t.each) || 0),
            (n = n && f < 0 ? xn(n) : n));
        }
        return (
          (f = (p[e] - p.min) / p.max || 0),
          He(p.b + (n ? n(f) : f) * p.v) + p.u
        );
      }
    );
  },
  zt = function (e) {
    var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
    return function (n) {
      var r = He(Math.round(parseFloat(n) / e) * e * t);
      return (r - (r % 1)) / t + (ne(n) ? 0 : At(n));
    };
  },
  Bt = function (e, t) {
    var n = oe(e),
      r,
      i;
    return (
      !n &&
        L(e) &&
        ((r = n = e.radius || k),
        e.values
          ? ((e = Ft(e.values)), (i = !ne(e[0])) && (r *= r))
          : (e = zt(e.increment))),
      Ot(
        t,
        n
          ? I(e)
            ? function (t) {
                return ((i = e(t)), Math.abs(i - t) <= r ? i : t);
              }
            : function (t) {
                for (
                  var n = parseFloat(i ? t.x : t),
                    a = parseFloat(i ? t.y : 0),
                    o = k,
                    s = 0,
                    c = e.length,
                    l,
                    u;
                  c--;
                )
                  (i
                    ? ((l = e[c].x - n), (u = e[c].y - a), (l = l * l + u * u))
                    : (l = Math.abs(e[c] - n)),
                    l < o && ((o = l), (s = c)));
                return (
                  (s = !r || o <= r ? e[s] : t),
                  i || s === t || ne(t) ? s : s + At(t)
                );
              }
          : zt(e),
      )
    );
  },
  Vt = function (e, t, n, r) {
    return Ot(oe(e) ? !t : n === !0 ? !!(n = 0) : !r, function () {
      return oe(e)
        ? e[~~(Math.random() * e.length)]
        : (n ||= 1e-5) &&
            (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
                n *
                r,
            ) / r;
    });
  },
  Ht = function () {
    var e = [...arguments];
    return function (t) {
      return e.reduce(function (e, t) {
        return t(e);
      }, t);
    };
  },
  Ut = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || At(n));
    };
  },
  Wt = function (e, t, n) {
    return Yt(e, t, 0, 1, n);
  },
  Gt = function (e, t, n) {
    return Ot(n, function (n) {
      return e[~~t(n)];
    });
  },
  Kt = function e(t, n, r) {
    var i = n - t;
    return oe(t)
      ? Gt(t, e(0, t.length), n)
      : Ot(r, function (e) {
          return ((i + ((e - t) % i)) % i) + t;
        });
  },
  qt = function e(t, n, r) {
    var i = n - t,
      a = i * 2;
    return oe(t)
      ? Gt(t, e(0, t.length - 1), n)
      : Ot(r, function (e) {
          return ((e = (a + ((e - t) % a)) % a || 0), t + (e > i ? a - e : e));
        });
  },
  Jt = function (e) {
    return e.replace(se, function (e) {
      var t = e.indexOf(`[`) + 1,
        n = e.substring(t || 7, t ? e.indexOf(`]`) : e.length - 1).split(ce);
      return Vt(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
    });
  },
  Yt = function (e, t, n, r, i) {
    var a = t - e,
      o = r - n;
    return Ot(i, function (t) {
      return n + (((t - e) / a) * o || 0);
    });
  },
  Xt = function e(t, n, r, i) {
    var a = isNaN(t + n)
      ? 0
      : function (e) {
          return (1 - e) * t + e * n;
        };
    if (!a) {
      var o = F(t),
        s = {},
        c,
        l,
        u,
        d,
        f;
      if ((r === !0 && (i = 1) && (r = null), o))
        ((t = { p: t }), (n = { p: n }));
      else if (oe(t) && !oe(n)) {
        for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++)
          u.push(e(t[l - 1], t[l]));
        (d--,
          (a = function (e) {
            e *= d;
            var t = Math.min(f, ~~e);
            return u[t](e - t);
          }),
          (r = n));
      } else i || (t = Qe(oe(t) ? [] : {}, t));
      if (!u) {
        for (c in n) jn.call(s, t, c, `get`, n[c]);
        a = function (e) {
          return Qn(e, s) || (o ? t.p : t);
        };
      }
    }
    return Ot(r, a);
  },
  Zt = function (e, t, n) {
    var r = e.labels,
      i = k,
      a,
      o,
      s;
    for (a in r)
      ((o = r[a] - t),
        o < 0 == !!n && o && i > (o = Math.abs(o)) && ((s = a), (i = o)));
    return s;
  },
  Qt = function (e, t, n) {
    var r = e.vars,
      i = r[t],
      a = O,
      o = e._ctx,
      s,
      c,
      l;
    if (i)
      return (
        (s = r[t + `Params`]),
        (c = r.callbackScope || e),
        n && Ae.length && Ge(),
        o && (O = o),
        (l = s ? i.apply(c, s) : i.call(c)),
        (O = a),
        l
      );
  },
  $t = function (e) {
    return (
      at(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!D),
      e.progress() < 1 && Qt(e, `onInterrupt`),
      e
    );
  },
  en,
  tn = [],
  nn = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), z() || e.headless)) {
        var t = e.name,
          n = I(e),
          r =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          i = {
            init: Te,
            render: Qn,
            add: jn,
            kill: er,
            modifier: $n,
            rawVars: 0,
          },
          a = {
            targetTest: 0,
            get: 0,
            getSetter: Jn,
            aliases: {},
            register: 0,
          };
        if ((hn(), e !== r)) {
          if (Me[t]) return;
          (Xe(r, Xe(et(e, i), a)),
            Qe(r.prototype, Qe(i, et(e, a))),
            (Me[(r.prop = t)] = r),
            e.targetTest && (Fe.push(r), (ke[t] = 1)),
            (t =
              (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) +
              `Plugin`));
        }
        (we(t, r), e.register && e.register(_r, r, rr));
      } else tn.push(e);
  },
  rn = 255,
  an = {
    aqua: [0, rn, rn],
    lime: [0, rn, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, rn],
    navy: [0, 0, 128],
    white: [rn, rn, rn],
    olive: [128, 128, 0],
    yellow: [rn, rn, 0],
    orange: [rn, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [rn, 0, 0],
    pink: [rn, 192, 203],
    cyan: [0, rn, rn],
    transparent: [rn, rn, rn, 0],
  },
  on = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
          ? n
          : e * 3 < 2
            ? t + (n - t) * (2 / 3 - e) * 6
            : t) *
        rn +
        0.5) |
        0
    );
  },
  sn = function (e, t, n) {
    var r = e ? (ne(e) ? [e >> 16, (e >> 8) & rn, e & rn] : 0) : an.black,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    if (!r) {
      if ((e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)), an[e]))
        r = an[e];
      else if (e.charAt(0) === `#`) {
        if (
          (e.length < 6 &&
            ((i = e.charAt(1)),
            (a = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              `#` +
              i +
              i +
              a +
              a +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & rn, r & rn, parseInt(e.substr(7), 16) / 255]
          );
        ((e = parseInt(e.substr(1), 16)),
          (r = [e >> 16, (e >> 8) & rn, e & rn]));
      } else if (e.substr(0, 3) === `hsl`) {
        if (((r = p = e.match(le)), !t))
          ((s = (r[0] % 360) / 360),
            (c = r[1] / 100),
            (l = r[2] / 100),
            (a = l <= 0.5 ? l * (c + 1) : l + c - l * c),
            (i = l * 2 - a),
            r.length > 3 && (r[3] *= 1),
            (r[0] = on(s + 1 / 3, i, a)),
            (r[1] = on(s, i, a)),
            (r[2] = on(s - 1 / 3, i, a)));
        else if (~e.indexOf(`=`))
          return ((r = e.match(B)), n && r.length < 4 && (r[3] = 1), r);
      } else r = e.match(le) || an.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !p &&
        ((i = r[0] / rn),
        (a = r[1] / rn),
        (o = r[2] / rn),
        (u = Math.max(i, a, o)),
        (d = Math.min(i, a, o)),
        (l = (u + d) / 2),
        u === d
          ? (s = c = 0)
          : ((f = u - d),
            (c = l > 0.5 ? f / (2 - u - d) : f / (u + d)),
            (s =
              u === i
                ? (a - o) / f + (a < o ? 6 : 0)
                : u === a
                  ? (o - i) / f + 2
                  : (i - a) / f + 4),
            (s *= 60)),
        (r[0] = ~~(s + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(l * 100 + 0.5))),
      n && r.length < 4 && (r[3] = 1),
      r
    );
  },
  cn = function (e) {
    var t = [],
      n = [],
      r = -1;
    return (
      e.split(un).forEach(function (e) {
        var i = e.match(ue) || [];
        (t.push.apply(t, i), n.push((r += i.length + 1)));
      }),
      (t.c = n),
      t
    );
  },
  ln = function (e, t, n) {
    var r = ``,
      i = (e + r).match(un),
      a = t ? `hsla(` : `rgba(`,
      o = 0,
      s,
      c,
      l,
      u;
    if (!i) return e;
    if (
      ((i = i.map(function (e) {
        return (
          (e = sn(e, t, 1)) &&
          a +
            (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) +
            `)`
        );
      })),
      n && ((l = cn(e)), (s = n.c), s.join(r) !== l.c.join(r)))
    )
      for (c = e.replace(un, `1`).split(ue), u = c.length - 1; o < u; o++)
        r +=
          c[o] +
          (~s.indexOf(o)
            ? i.shift() || a + `0,0,0,0)`
            : (l.length ? l : i.length ? i : n).shift());
    if (!c)
      for (c = e.split(un), u = c.length - 1; o < u; o++) r += c[o] + i[o];
    return r + c[u];
  },
  un = (function () {
    var e = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,
      t;
    for (t in an) e += `|` + t + `\\b`;
    return RegExp(e + `)`, `gi`);
  })(),
  dn = /hsl[a]?\(/,
  fn = function (e) {
    var t = e.join(` `),
      n;
    if (((un.lastIndex = 0), un.test(t)))
      return (
        (n = dn.test(t)),
        (e[1] = ln(e[1], n)),
        (e[0] = ln(e[0], n, cn(e[1]))),
        !0
      );
  },
  pn,
  mn = (function () {
    var e = Date.now,
      t = 500,
      n = 33,
      r = e(),
      i = r,
      a = 1e3 / 240,
      o = a,
      s = [],
      c,
      l,
      u,
      d,
      f,
      p,
      m = function u(m) {
        var h = e() - i,
          g = m === !0,
          _,
          v,
          y,
          b;
        if (
          ((h > t || h < 0) && (r += h - n),
          (i += h),
          (y = i - r),
          (_ = y - o),
          (_ > 0 || g) &&
            ((b = ++d.frame),
            (f = y - d.time * 1e3),
            (d.time = y /= 1e3),
            (o += _ + (_ >= a ? 4 : a - _)),
            (v = 1)),
          g || (c = l(u)),
          v)
        )
          for (p = 0; p < s.length; p++) s[p](y, f, b, m);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (e) {
          return f / (1e3 / (e || 60));
        },
        wake: function () {
          be &&
            (!_e &&
              z() &&
              ((ge = _e = window),
              (ve = ge.document || {}),
              (V.gsap = _r),
              (ge.gsapVersions ||= []).push(_r.version),
              xe(ye || ge.GreenSockGlobals || (!ge.gsap && ge) || {}),
              tn.forEach(nn)),
            (u = typeof requestAnimationFrame < `u` && requestAnimationFrame),
            c && d.sleep(),
            (l =
              u ||
              function (e) {
                return setTimeout(e, (o - d.time * 1e3 + 1) | 0);
              }),
            (pn = 1),
            m(2));
        },
        sleep: function () {
          ((u ? cancelAnimationFrame : clearTimeout)(c), (pn = 0), (l = Te));
        },
        lagSmoothing: function (e, r) {
          ((t = e || 1 / 0), (n = Math.min(r || 33, t)));
        },
        fps: function (e) {
          ((a = 1e3 / (e || 240)), (o = d.time * 1e3 + a));
        },
        add: function (e, t, n) {
          var r = t
            ? function (t, n, i, a) {
                (e(t, n, i, a), d.remove(r));
              }
            : e;
          return (d.remove(e), s[n ? `unshift` : `push`](r), hn(), r);
        },
        remove: function (e, t) {
          ~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
        },
        _listeners: s,
      }),
      d
    );
  })(),
  hn = function () {
    return !pn && mn.wake();
  },
  U = {},
  gn = /^[\d.\-M][\d.\-,\s]/,
  _n = /["']/g,
  vn = function (e) {
    for (
      var t = {},
        n = e.substr(1, e.length - 3).split(`:`),
        r = n[0],
        i = 1,
        a = n.length,
        o,
        s,
        c;
      i < a;
      i++
    )
      ((s = n[i]),
        (o = i === a - 1 ? s.length : s.lastIndexOf(`,`)),
        (c = s.substr(0, o)),
        (t[r] = isNaN(c) ? c.replace(_n, ``).trim() : +c),
        (r = s.substr(o + 1).trim()));
    return t;
  },
  yn = function (e) {
    var t = e.indexOf(`(`) + 1,
      n = e.indexOf(`)`),
      r = e.indexOf(`(`, t);
    return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n);
  },
  bn = function (e) {
    var t = (e + ``).split(`(`),
      n = U[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf(`{`) ? [vn(t[1])] : yn(e).split(`,`).map(Je),
        )
      : U._CE && gn.test(e)
        ? U._CE(``, e)
        : n;
  },
  xn = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Sn = function (e, t) {
    return (e && (I(e) ? e : U[e] || bn(e))) || t;
  },
  Cn = function (e, t, n, r) {
    (n === void 0 &&
      (n = function (e) {
        return 1 - t(1 - e);
      }),
      r === void 0 &&
        (r = function (e) {
          return e < 0.5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
        }));
    var i = { easeIn: t, easeOut: n, easeInOut: r },
      a;
    return (
      Be(e, function (e) {
        for (var t in ((U[e] = V[e] = i), (U[(a = e.toLowerCase())] = n), i))
          U[
            a + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)
          ] = U[e + `.` + t] = i[t];
      }),
      i
    );
  },
  wn = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  Tn = function e(t, n, r) {
    var i = n >= 1 ? n : 1,
      a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (a / j) * (Math.asin(1 / i) || 0),
      s = function (e) {
        return e === 1 ? 1 : i * 2 ** (-10 * e) * P((e - o) * a) + 1;
      },
      c =
        t === `out`
          ? s
          : t === `in`
            ? function (e) {
                return 1 - s(1 - e);
              }
            : wn(s);
    return (
      (a = j / a),
      (c.config = function (n, r) {
        return e(t, n, r);
      }),
      c
    );
  },
  En = function e(t, n) {
    n === void 0 && (n = 1.70158);
    var r = function (e) {
        return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
      },
      i =
        t === `out`
          ? r
          : t === `in`
            ? function (e) {
                return 1 - r(1 - e);
              }
            : wn(r);
    return (
      (i.config = function (n) {
        return e(t, n);
      }),
      i
    );
  };
(Be(`Linear,Quad,Cubic,Quart,Quint,Strong`, function (e, t) {
  var n = t < 5 ? t + 1 : t;
  Cn(
    e + `,Power` + (n - 1),
    t
      ? function (e) {
          return e ** +n;
        }
      : function (e) {
          return e;
        },
    function (e) {
      return 1 - (1 - e) ** n;
    },
    function (e) {
      return e < 0.5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
    },
  );
}),
  (U.Linear.easeNone = U.none = U.Linear.easeIn),
  Cn(`Elastic`, Tn(`in`), Tn(`out`), Tn()),
  (function (e, t) {
    var n = 1 / t,
      r = 2 * n,
      i = 2.5 * n,
      a = function (a) {
        return a < n
          ? e * a * a
          : a < r
            ? e * (a - 1.5 / t) ** 2 + 0.75
            : a < i
              ? e * (a -= 2.25 / t) * a + 0.9375
              : e * (a - 2.625 / t) ** 2 + 0.984375;
      };
    Cn(
      `Bounce`,
      function (e) {
        return 1 - a(1 - e);
      },
      a,
    );
  })(7.5625, 2.75),
  Cn(`Expo`, function (e) {
    return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
  }),
  Cn(`Circ`, function (e) {
    return -(N(1 - e * e) - 1);
  }),
  Cn(`Sine`, function (e) {
    return e === 1 ? 1 : -te(e * M) + 1;
  }),
  Cn(`Back`, En(`in`), En(`out`), En()),
  (U.SteppedEase =
    U.steps =
    V.SteppedEase =
      {
        config: function (e, t) {
          e === void 0 && (e = 1);
          var n = 1 / e,
            r = e + +!t,
            i = +!!t,
            a = 1 - A;
          return function (e) {
            return (((r * kt(0, a, e)) | 0) + i) * n;
          };
        },
      }),
  (T.ease = U[`quad.out`]),
  Be(
    `onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,
    function (e) {
      return (Ie += e + `,` + e + `Params,`);
    },
  ));
var Dn = function (e, t) {
    ((this.id = ee++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : ze),
      (this.set = t ? t.getSetter : Jn));
  },
  On = (function () {
    function e(e) {
      ((this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        Ct(this, +e.duration, 1, 1),
        (this.data = e.data),
        O && ((this._ctx = O), O.data.push(this)),
        pn || mn.wake());
    }
    var t = e.prototype;
    return (
      (t.delay = function (e) {
        return e || e === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (t.duration = function (e) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e,
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            Ct(
              this,
              this._repeat < 0
                ? e
                : (e - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (t.totalTime = function (e, t) {
        if ((hn(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (mt(this, e), !n._dp || n.parent || ht(n, this); n && n.parent; )
            (n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && e < this._tDur) ||
              (this._ts < 0 && e > 0) ||
              (!this._tDur && !e)) &&
            gt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !t) ||
            (this._initted && Math.abs(this._zTime) === A) ||
            (!this._initted && this._dur && e) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = e), qe(this, e, t)),
          this
        );
      }),
      (t.time = function (e, t) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), e + ut(this)) %
                (this._dur + this._rDelay) || (e ? this._dur : 0),
              t,
            )
          : this._time;
      }),
      (t.totalProgress = function (e, t) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, t)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (t.progress = function (e, t) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
                ut(this),
              t,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : +(this.rawTime() > 0);
      }),
      (t.iteration = function (e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * n, t)
          : this._repeat
            ? dt(this._tTime, n) + 1
            : 1;
      }),
      (t.timeScale = function (e, t) {
        if (!arguments.length) return this._rts === -A ? 0 : this._rts;
        if (this._rts === e) return this;
        var n =
          this.parent && this._ts ? ft(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || e === -A ? 0 : this._rts),
          this.totalTime(
            kt(-Math.abs(this._delay), this.totalDuration(), n),
            t !== !1,
          ),
          pt(this),
          st(this)
        );
      }),
      (t.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
              ((this._ps = e),
              e
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (hn(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== A &&
                      (this._tTime -= A),
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (e) {
        if (arguments.length) {
          this._start = He(e);
          var t = this.parent || this._dp;
          return (
            t &&
              (t._sort || !this.parent) &&
              gt(t, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (t.endTime = function (e) {
        return (
          this._start +
          (R(e) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (e) {
        var t = this.parent || this._dp;
        return t
          ? e &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? ft(t.rawTime(e), this)
              : this._tTime
          : this._tTime;
      }),
      (t.revert = function (e) {
        e === void 0 && (e = Oe);
        var t = D;
        return (
          (D = e),
          Ke(this) &&
            (this.timeline && this.timeline.revert(e),
            this.totalTime(-0.01, e.suppressEvents)),
          this.data !== `nested` && e.kill !== !1 && this.kill(),
          (D = t),
          this
        );
      }),
      (t.globalTime = function (e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
          ((n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp));
        return !this.parent && this._sat ? this._sat.globalTime(e) : n;
      }),
      (t.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), wt(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (t.repeatDelay = function (e) {
        if (arguments.length) {
          var t = this._time;
          return ((this._rDelay = e), wt(this), t ? this.time(t) : this);
        }
        return this._rDelay;
      }),
      (t.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (t.seek = function (e, t) {
        return this.totalTime(Et(this, e), R(t));
      }),
      (t.restart = function (e, t) {
        return (
          this.play().totalTime(e ? -this._delay : 0, R(t)),
          this._dur || (this._zTime = -A),
          this
        );
      }),
      (t.play = function (e, t) {
        return (e != null && this.seek(e, t), this.reversed(!1).paused(!1));
      }),
      (t.reverse = function (e, t) {
        return (
          e != null && this.seek(e || this.totalDuration(), t),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (e, t) {
        return (e != null && this.seek(e, t), this.paused(!0));
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() &&
              this.timeScale(-this._rts || (e ? -A : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -A), this);
      }),
      (t.isActive = function () {
        var e = this.parent || this._dp,
          t = this._start,
          n;
        return !!(
          !e ||
          (this._ts &&
            this._initted &&
            e.isActive() &&
            (n = e.rawTime(!0)) >= t &&
            n < this.endTime(!0) - A)
        );
      }),
      (t.eventCallback = function (e, t, n) {
        var r = this.vars;
        return arguments.length > 1
          ? (t
              ? ((r[e] = t),
                n && (r[e + `Params`] = n),
                e === `onUpdate` && (this._onUpdate = t))
              : delete r[e],
            this)
          : r[e];
      }),
      (t.then = function (e) {
        var t = this,
          n = t._prom;
        return new Promise(function (r) {
          var i = I(e) ? e : Ye,
            a = function () {
              var e = t.then;
              ((t.then = null),
                n && n(),
                I(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                r(i),
                (t.then = e));
            };
          (t._initted && t.totalProgress() === 1 && t._ts >= 0) ||
          (!t._tTime && t._ts < 0)
            ? a()
            : (t._prom = a);
        });
      }),
      (t.kill = function () {
        $t(this);
      }),
      e
    );
  })();
Xe(On.prototype, {
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
  _zTime: -A,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var kn = (function (e) {
  C(t, e);
  function t(t, n) {
    var r;
    return (
      t === void 0 && (t = {}),
      (r = e.call(this, t) || this),
      (r.labels = {}),
      (r.smoothChildTiming = !!t.smoothChildTiming),
      (r.autoRemoveChildren = !!t.autoRemoveChildren),
      (r._sort = R(t.sortChildren)),
      he && gt(t.parent || he, S(r), n),
      t.reversed && r.reverse(),
      t.paused && r.paused(!0),
      t.scrollTrigger && _t(S(r), t.scrollTrigger),
      r
    );
  }
  var n = t.prototype;
  return (
    (n.to = function (e, t, n) {
      return (Dt(0, arguments, this), this);
    }),
    (n.from = function (e, t, n) {
      return (Dt(1, arguments, this), this);
    }),
    (n.fromTo = function (e, t, n, r) {
      return (Dt(2, arguments, this), this);
    }),
    (n.set = function (e, t, n) {
      return (
        (t.duration = 0),
        (t.parent = this),
        tt(t).repeatDelay || (t.repeat = 0),
        (t.immediateRender = !!t.immediateRender),
        new Un(e, t, Et(this, n), 1),
        this
      );
    }),
    (n.call = function (e, t, n) {
      return gt(this, Un.delayedCall(0, e, t), n);
    }),
    (n.staggerTo = function (e, t, n, r, i, a, o) {
      return (
        (n.duration = t),
        (n.stagger = n.stagger || r),
        (n.onComplete = a),
        (n.onCompleteParams = o),
        (n.parent = this),
        new Un(e, n, Et(this, i)),
        this
      );
    }),
    (n.staggerFrom = function (e, t, n, r, i, a, o) {
      return (
        (n.runBackwards = 1),
        (tt(n).immediateRender = R(n.immediateRender)),
        this.staggerTo(e, t, n, r, i, a, o)
      );
    }),
    (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
      return (
        (r.startAt = n),
        (tt(r).immediateRender = R(r.immediateRender)),
        this.staggerTo(e, t, r, i, a, o, s)
      );
    }),
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._dirty ? this.totalDuration() : this._tDur,
        a = this._dur,
        o = e <= 0 ? 0 : He(e),
        s = this._zTime < 0 != e < 0 && (this._initted || !a),
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y;
      if (
        (this !== he && o > i && e >= 0 && (o = i), o !== this._tTime || n || s)
      ) {
        if (
          (r !== this._time &&
            a &&
            ((o += this._time - r), (e += this._time - r)),
          (c = o),
          (g = this._start),
          (h = this._ts),
          (p = !h),
          s && (a || (r = this._zTime), (e || !t) && (this._zTime = e)),
          this._repeat)
        ) {
          if (
            ((v = this._yoyo),
            (f = a + this._rDelay),
            this._repeat < -1 && e < 0)
          )
            return this.totalTime(f * 100 + e, t, n);
          if (
            ((c = He(o % f)),
            o === i
              ? ((d = this._repeat), (c = a))
              : ((_ = He(o / f)),
                (d = ~~_),
                d && d === _ && ((c = a), d--),
                c > a && (c = a)),
            (_ = dt(this._tTime, f)),
            !r &&
              this._tTime &&
              _ !== d &&
              this._tTime - _ * f - this._dur <= 0 &&
              (_ = d),
            v && d & 1 && ((c = a - c), (y = 1)),
            d !== _ && !this._lock)
          ) {
            var b = v && _ & 1,
              x = b === (v && d & 1);
            if (
              (d < _ && (b = !b),
              (r = b ? 0 : o % a ? a : o),
              (this._lock = 1),
              (this.render(r || (y ? 0 : He(d * f)), t, !a)._lock = 0),
              (this._tTime = o),
              !t && this.parent && Qt(this, `onRepeat`),
              this.vars.repeatRefresh &&
                !y &&
                ((this.invalidate()._lock = 1), (_ = d)),
              (r && r !== this._time) ||
                p !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act) ||
                ((a = this._dur),
                (i = this._tDur),
                x &&
                  ((this._lock = 2),
                  (r = b ? a : -1e-4),
                  this.render(r, !0),
                  this.vars.repeatRefresh && !y && this.invalidate()),
                (this._lock = 0),
                !this._ts && !p))
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((m = St(this, He(r), He(c))), m && (o -= c - (c = m._start))),
          (this._tTime = o),
          (this._time = c),
          (this._act = !!h),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = e),
            (r = 0)),
          !r && o && a && !t && !_ && (Qt(this, `onStart`), this._tTime !== o))
        )
          return this;
        if (c >= r && e >= 0)
          for (l = this._first; l; ) {
            if (
              ((u = l._next), (l._act || c >= l._start) && l._ts && m !== l)
            ) {
              if (l.parent !== this) return this.render(e, t, n);
              if (
                (l.render(
                  l._ts > 0
                    ? (c - l._start) * l._ts
                    : (l._dirty ? l.totalDuration() : l._tDur) +
                        (c - l._start) * l._ts,
                  t,
                  n,
                ),
                c !== this._time || (!this._ts && !p))
              ) {
                ((m = 0), u && (o += this._zTime = -A));
                break;
              }
            }
            l = u;
          }
        else {
          l = this._last;
          for (var S = e < 0 ? e : c; l; ) {
            if (((u = l._prev), (l._act || S <= l._end) && l._ts && m !== l)) {
              if (l.parent !== this) return this.render(e, t, n);
              if (
                (l.render(
                  l._ts > 0
                    ? (S - l._start) * l._ts
                    : (l._dirty ? l.totalDuration() : l._tDur) +
                        (S - l._start) * l._ts,
                  t,
                  n || (D && Ke(l)),
                ),
                c !== this._time || (!this._ts && !p))
              ) {
                ((m = 0), u && (o += this._zTime = S ? -A : A));
                break;
              }
            }
            l = u;
          }
        }
        if (
          m &&
          !t &&
          (this.pause(),
          (m.render(c >= r ? 0 : -A)._zTime = c >= r ? 1 : -1),
          this._ts)
        )
          return ((this._start = g), pt(this), this.render(e, t, n));
        (this._onUpdate && !t && Qt(this, `onUpdate`, !0),
          ((o === i && this._tTime >= this.totalDuration()) || (!o && r)) &&
            (g === this._start || Math.abs(h) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((e || !a) &&
                ((o === i && this._ts > 0) || (!o && this._ts < 0)) &&
                at(this, 1),
              !t &&
                !(e < 0 && !r) &&
                (o || r || !i) &&
                (Qt(
                  this,
                  o === i && e >= 0 ? `onComplete` : `onReverseComplete`,
                  !0,
                ),
                this._prom &&
                  !(o < i && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (n.add = function (e, t) {
      var n = this;
      if ((ne(t) || (t = Et(this, t, e)), !(e instanceof On))) {
        if (oe(e))
          return (
            e.forEach(function (e) {
              return n.add(e, t);
            }),
            this
          );
        if (F(e)) return this.addLabel(e, t);
        if (I(e)) e = Un.delayedCall(0, e);
        else return this;
      }
      return this === e ? this : gt(this, e, t);
    }),
    (n.getChildren = function (e, t, n, r) {
      (e === void 0 && (e = !0),
        t === void 0 && (t = !0),
        n === void 0 && (n = !0),
        r === void 0 && (r = -k));
      for (var i = [], a = this._first; a; )
        (a._start >= r &&
          (a instanceof Un
            ? t && i.push(a)
            : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))),
          (a = a._next));
      return i;
    }),
    (n.getById = function (e) {
      for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
        if (t[n].vars.id === e) return t[n];
    }),
    (n.remove = function (e) {
      return F(e)
        ? this.removeLabel(e)
        : I(e)
          ? this.killTweensOf(e)
          : (e.parent === this && it(this, e),
            e === this._recent && (this._recent = this._last),
            ot(this));
    }),
    (n.totalTime = function (t, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = He(
              mn.time -
                (this._ts > 0
                  ? t / this._ts
                  : (this.totalDuration() - t) / -this._ts),
            )),
          e.prototype.totalTime.call(this, t, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (e, t) {
      return ((this.labels[e] = Et(this, t)), this);
    }),
    (n.removeLabel = function (e) {
      return (delete this.labels[e], this);
    }),
    (n.addPause = function (e, t, n) {
      var r = Un.delayedCall(0, t || Te, n);
      return (
        (r.data = `isPause`),
        (this._hasPause = 1),
        gt(this, r, Et(this, e))
      );
    }),
    (n.removePause = function (e) {
      var t = this._first;
      for (e = Et(this, e); t; )
        (t._start === e && t.data === `isPause` && at(t), (t = t._next));
    }),
    (n.killTweensOf = function (e, t, n) {
      for (var r = this.getTweensOf(e, n), i = r.length; i--; )
        Pn !== r[i] && r[i].kill(e, t);
      return this;
    }),
    (n.getTweensOf = function (e, t) {
      for (var n = [], r = Ft(e), i = this._first, a = ne(t), o; i; )
        (i instanceof Un
          ? We(i._targets, r) &&
            (a
              ? (!Pn || (i._initted && i._ts)) &&
                i.globalTime(0) <= t &&
                i.globalTime(i.totalDuration()) > t
              : !t || i.isActive()) &&
            n.push(i)
          : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o),
          (i = i._next));
      return n;
    }),
    (n.tweenTo = function (e, t) {
      t ||= {};
      var n = this,
        r = Et(n, e),
        i = t,
        a = i.startAt,
        o = i.onStart,
        s = i.onStartParams,
        c = i.immediateRender,
        l,
        u = Un.to(
          n,
          Xe(
            {
              ease: t.ease || `none`,
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: `auto`,
              duration:
                t.duration ||
                Math.abs(
                  (r - (a && `time` in a ? a.time : n._time)) / n.timeScale(),
                ) ||
                A,
              onStart: function () {
                if ((n.pause(), !l)) {
                  var e =
                    t.duration ||
                    Math.abs(
                      (r - (a && `time` in a ? a.time : n._time)) /
                        n.timeScale(),
                    );
                  (u._dur !== e && Ct(u, e, 0, 1).render(u._time, !0, !0),
                    (l = 1));
                }
                o && o.apply(u, s || []);
              },
            },
            t,
          ),
        );
      return c ? u.render(0) : u;
    }),
    (n.tweenFromTo = function (e, t, n) {
      return this.tweenTo(t, Xe({ startAt: { time: Et(this, e) } }, n));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (e) {
      return (e === void 0 && (e = this._time), Zt(this, Et(this, e)));
    }),
    (n.previousLabel = function (e) {
      return (e === void 0 && (e = this._time), Zt(this, Et(this, e), 1));
    }),
    (n.currentLabel = function (e) {
      return arguments.length
        ? this.seek(e, !0)
        : this.previousLabel(this._time + A);
    }),
    (n.shiftChildren = function (e, t, n) {
      n === void 0 && (n = 0);
      var r = this._first,
        i = this.labels,
        a;
      for (e = He(e); r; )
        (r._start >= n && ((r._start += e), (r._end += e)), (r = r._next));
      if (t) for (a in i) i[a] >= n && (i[a] += e);
      return ot(this);
    }),
    (n.invalidate = function (t) {
      var n = this._first;
      for (this._lock = 0; n; ) (n.invalidate(t), (n = n._next));
      return e.prototype.invalidate.call(this, t);
    }),
    (n.clear = function (e) {
      e === void 0 && (e = !0);
      for (var t = this._first, n; t; )
        ((n = t._next), this.remove(t), (t = n));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        e && (this.labels = {}),
        ot(this)
      );
    }),
    (n.totalDuration = function (e) {
      var t = 0,
        n = this,
        r = n._last,
        i = k,
        a,
        o,
        s;
      if (arguments.length)
        return n.timeScale(
          (n._repeat < 0 ? n.duration() : n.totalDuration()) /
            (n.reversed() ? -e : e),
        );
      if (n._dirty) {
        for (s = n.parent; r; )
          ((a = r._prev),
            r._dirty && r.totalDuration(),
            (o = r._start),
            o > i && n._sort && r._ts && !n._lock
              ? ((n._lock = 1), (gt(n, r, o - r._delay, 1)._lock = 0))
              : (i = o),
            o < 0 &&
              r._ts &&
              ((t -= o),
              ((!s && !n._dp) || (s && s.smoothChildTiming)) &&
                ((n._start += He(o / n._ts)), (n._time -= o), (n._tTime -= o)),
              n.shiftChildren(-o, !1, -1 / 0),
              (i = 0)),
            r._end > t && r._ts && (t = r._end),
            (r = a));
        (Ct(n, n === he && n._time > t ? n._time : t, 1, 1), (n._dirty = 0));
      }
      return n._tDur;
    }),
    (t.updateRoot = function (e) {
      if ((he._ts && (qe(he, ft(e, he)), (je = mn.frame)), mn.frame >= Pe)) {
        Pe += w.autoSleep || 120;
        var t = he._first;
        if ((!t || !t._ts) && w.autoSleep && mn._listeners.length < 2) {
          for (; t && !t._ts; ) t = t._next;
          t || mn.sleep();
        }
      }
    }),
    t
  );
})(On);
Xe(kn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var An = function (e, t, n, r, i, a, o) {
    var s = new rr(this._pt, e, t, 0, 1, Zn, null, i),
      c = 0,
      l = 0,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _;
    for (
      s.b = n,
        s.e = r,
        n += ``,
        r += ``,
        (g = ~r.indexOf(`random(`)) && (r = Jt(r)),
        a && ((_ = [n, r]), a(_, e, t), (n = _[0]), (r = _[1])),
        d = n.match(de) || [];
      (u = de.exec(r));
    )
      ((p = u[0]),
        (m = r.substring(c, u.index)),
        f ? (f = (f + 1) % 5) : m.substr(-5) === `rgba(` && (f = 1),
        p !== d[l++] &&
          ((h = parseFloat(d[l - 1]) || 0),
          (s._pt = {
            _next: s._pt,
            p: m || l === 1 ? m : `,`,
            s: h,
            c: p.charAt(1) === `=` ? Ue(h, p) - h : parseFloat(p) - h,
            m: f && f < 4 ? Math.round : 0,
          }),
          (c = de.lastIndex)));
    return (
      (s.c = c < r.length ? r.substring(c, r.length) : ``),
      (s.fp = o),
      (fe.test(r) || g) && (s.e = 0),
      (this._pt = s),
      s
    );
  },
  jn = function (e, t, n, r, i, a, o, s, c, l) {
    I(r) && (r = r(i || 0, e, a));
    var u = e[t],
      d =
        n === `get`
          ? I(u)
            ? c
              ? e[
                  t.indexOf(`set`) || !I(e[`get` + t.substr(3)])
                    ? t
                    : `get` + t.substr(3)
                ](c)
              : e[t]()
            : u
          : n,
      f = I(u) ? (c ? Kn : Gn) : Wn,
      p;
    if (
      (F(r) &&
        (~r.indexOf(`random(`) && (r = Jt(r)),
        r.charAt(1) === `=` &&
          ((p = Ue(d, r) + (At(d) || 0)), (p || p === 0) && (r = p))),
      !l || d !== r || Fn)
    )
      return !isNaN(d * r) && r !== ``
        ? ((p = new rr(
            this._pt,
            e,
            t,
            +d || 0,
            r - (d || 0),
            typeof u == `boolean` ? Xn : Yn,
            0,
            f,
          )),
          c && (p.fp = c),
          o && p.modifier(o, this, e),
          (this._pt = p))
        : (!u && !(t in e) && Se(t, r),
          An.call(this, e, t, d, r, f, s || w.stringFilter, c));
  },
  Mn = function (e, t, n, r, i) {
    if (
      (I(e) && (e = Bn(e, i, t, n, r)),
      !L(e) || (e.style && e.nodeType) || oe(e) || ae(e))
    )
      return F(e) ? Bn(e, i, t, n, r) : e;
    var a = {},
      o;
    for (o in e) a[o] = Bn(e[o], i, t, n, r);
    return a;
  },
  Nn = function (e, t, n, r, i, a) {
    var o, s, c, l;
    if (
      Me[e] &&
      (o = new Me[e]()).init(
        i,
        o.rawVars ? t[e] : Mn(t[e], r, i, a, n),
        n,
        r,
        a,
      ) !== !1 &&
      ((n._pt = s = new rr(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)),
      n !== en)
    )
      for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--; )
        c[o._props[l]] = s;
    return o;
  },
  Pn,
  Fn,
  In = function e(t, n, r) {
    var i = t.vars,
      a = i.ease,
      o = i.startAt,
      s = i.immediateRender,
      c = i.lazy,
      l = i.onUpdate,
      u = i.runBackwards,
      d = i.yoyoEase,
      f = i.keyframes,
      p = i.autoRevert,
      m = t._dur,
      h = t._startAt,
      g = t._targets,
      _ = t.parent,
      v = _ && _.data === `nested` ? _.vars.targets : g,
      y = t._overwrite === `auto` && !E,
      b = t.timeline,
      x = i.easeReverse || d,
      S,
      C,
      w,
      O,
      j,
      M,
      ee,
      N,
      te,
      P,
      F,
      I,
      ne;
    if (
      (b && (!f || !a) && (a = `none`),
      (t._ease = Sn(a, T.ease)),
      (t._rEase = x && (Sn(x) || t._ease)),
      (t._from = !b && !!i.runBackwards),
      t._from && (t.ratio = 1),
      !b || (f && !i.stagger))
    ) {
      if (
        ((N = g[0] ? Re(g[0]).harness : 0),
        (I = N && i[N.prop]),
        (S = et(i, ke)),
        h &&
          (h._zTime < 0 && h.progress(1),
          n < 0 && u && s && !p ? h.render(-1, !0) : h.revert(u && m ? De : Ee),
          (h._lazy = 0)),
        o)
      ) {
        if (
          (at(
            (t._startAt = Un.set(
              g,
              Xe(
                {
                  data: `isStart`,
                  overwrite: !1,
                  parent: _,
                  immediateRender: !0,
                  lazy: !h && R(c),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    l &&
                    function () {
                      return Qt(t, `onUpdate`);
                    },
                  stagger: 0,
                },
                o,
              ),
            )),
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (D || (!s && !p)) && t._startAt.revert(De),
          s && m && n <= 0 && r <= 0)
        ) {
          n && (t._zTime = n);
          return;
        }
      } else if (u && m && !h) {
        if (
          (n && (s = !1),
          (w = Xe(
            {
              overwrite: !1,
              data: `isFromStart`,
              lazy: s && !h && R(c),
              immediateRender: s,
              stagger: 0,
              parent: _,
            },
            S,
          )),
          I && (w[N.prop] = I),
          at((t._startAt = Un.set(g, w))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (D ? t._startAt.revert(De) : t._startAt.render(-1, !0)),
          (t._zTime = n),
          !s)
        )
          e(t._startAt, A, A);
        else if (!n) return;
      }
      for (
        t._pt = t._ptCache = 0, c = (m && R(c)) || (c && !m), C = 0;
        C < g.length;
        C++
      ) {
        if (
          ((j = g[C]),
          (ee = j._gsap || Le(g)[C]._gsap),
          (t._ptLookup[C] = P = {}),
          H[ee.id] && Ae.length && Ge(),
          (F = v === g ? C : v.indexOf(j)),
          N &&
            (te = new N()).init(j, I || S, t, F, v) !== !1 &&
            ((t._pt = O =
              new rr(t._pt, j, te.name, 0, 1, te.render, te, 0, te.priority)),
            te._props.forEach(function (e) {
              P[e] = O;
            }),
            te.priority && (M = 1)),
          !N || I)
        )
          for (w in S)
            Me[w] && (te = Nn(w, S, t, F, j, v))
              ? te.priority && (M = 1)
              : (P[w] = O =
                  jn.call(t, j, w, `get`, S[w], F, v, 0, i.stringFilter));
        (t._op && t._op[C] && t.kill(j, t._op[C]),
          y &&
            t._pt &&
            ((Pn = t),
            he.killTweensOf(j, P, t.globalTime(n)),
            (ne = !t.parent),
            (Pn = 0)),
          t._pt && c && (H[ee.id] = 1));
      }
      (M && nr(t), t._onInit && t._onInit(t));
    }
    ((t._onUpdate = l),
      (t._initted = (!t._op || t._pt) && !ne),
      f && n <= 0 && b.render(k, !0, !0));
  },
  Ln = function (e, t, n, r, i, a, o, s) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      l,
      u,
      d,
      f;
    if (!c)
      for (
        c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length;
        f--;
      ) {
        if (((l = d[f][t]), l && l.d && l.d._pt))
          for (l = l.d._pt; l && l.p !== t && l.fp !== t; ) l = l._next;
        if (!l)
          return (
            (Fn = 1),
            (e.vars[t] = `+=0`),
            In(e, o),
            (Fn = 0),
            s
              ? Ce(
                  t +
                    ` not eligible for reset. Try splitting into individual properties`,
                )
              : 1
          );
        c.push(l);
      }
    for (f = c.length; f--; )
      ((u = c[f]),
        (l = u._pt || u),
        (l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c),
        (l.c = n - l.s),
        (u.e &&= Ve(n) + At(u.e)),
        (u.b &&= l.s + At(u.b)));
  },
  Rn = function (e, t) {
    var n = e[0] ? Re(e[0]).harness : 0,
      r = n && n.aliases,
      i,
      a,
      o,
      s;
    if (!r) return t;
    for (a in ((i = Qe({}, t)), r))
      if (a in i) for (s = r[a].split(`,`), o = s.length; o--; ) i[s[o]] = i[a];
    return i;
  },
  zn = function (e, t, n, r) {
    var i = t.ease || r || `power1.inOut`,
      a,
      o;
    if (oe(t))
      ((o = n[e] || (n[e] = [])),
        t.forEach(function (e, n) {
          return o.push({ t: (n / (t.length - 1)) * 100, v: e, e: i });
        }));
    else
      for (a in t)
        ((o = n[a] || (n[a] = [])),
          a === `ease` || o.push({ t: parseFloat(e), v: t[a], e: i }));
  },
  Bn = function (e, t, n, r, i) {
    return I(e)
      ? e.call(t, n, r, i)
      : F(e) && ~e.indexOf(`random(`)
        ? Jt(e)
        : e;
  },
  Vn =
    Ie +
    `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,
  Hn = {};
Be(Vn + `,id,stagger,delay,duration,paused,scrollTrigger`, function (e) {
  return (Hn[e] = 1);
});
var Un = (function (e) {
  C(t, e);
  function t(t, n, r, i) {
    var a;
    (typeof n == `number` && ((r.duration = n), (n = r), (r = null)),
      (a = e.call(this, i ? n : tt(n)) || this));
    var o = a.vars,
      s = o.duration,
      c = o.delay,
      l = o.immediateRender,
      u = o.stagger,
      d = o.overwrite,
      f = o.keyframes,
      p = o.defaults,
      m = o.scrollTrigger,
      h = n.parent || he,
      g = (oe(t) || ae(t) ? ne(t[0]) : `length` in n) ? [t] : Ft(t),
      _,
      v,
      y,
      b,
      x,
      C,
      T,
      D;
    if (
      ((a._targets = g.length
        ? Le(g)
        : Ce(
            `GSAP target ` + t + ` not found. https://gsap.com`,
            !w.nullTargetWarn,
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = d),
      f || u || ie(s) || ie(c))
    ) {
      n = a.vars;
      var O = n.easeReverse || n.yoyoEase;
      if (
        ((_ = a.timeline =
          new kn({
            data: `nested`,
            defaults: p || {},
            targets: h && h.data === `nested` ? h.vars.targets : g,
          })),
        _.kill(),
        (_.parent = _._dp = S(a)),
        (_._start = 0),
        u || ie(s) || ie(c))
      ) {
        if (((b = g.length), (T = u && Rt(u)), L(u)))
          for (x in u) ~Vn.indexOf(x) && ((D ||= {}), (D[x] = u[x]));
        for (v = 0; v < b; v++)
          ((y = et(n, Hn)),
            (y.stagger = 0),
            O && (y.easeReverse = O),
            D && Qe(y, D),
            (C = g[v]),
            (y.duration = +Bn(s, S(a), v, C, g)),
            (y.delay = (+Bn(c, S(a), v, C, g) || 0) - a._delay),
            !u &&
              b === 1 &&
              y.delay &&
              ((a._delay = c = y.delay), (a._start += c), (y.delay = 0)),
            _.to(C, y, T ? T(v, C, g) : 0),
            (_._ease = U.none));
        _.duration() ? (s = c = 0) : (a.timeline = 0);
      } else if (f) {
        (tt(Xe(_.vars.defaults, { ease: `none` })),
          (_._ease = Sn(f.ease || n.ease || `none`)));
        var k = 0,
          j,
          M,
          ee;
        if (oe(f))
          (f.forEach(function (e) {
            return _.to(g, e, `>`);
          }),
            _.duration());
        else {
          for (x in ((y = {}), f))
            x === `ease` || x === `easeEach` || zn(x, f[x], y, f.easeEach);
          for (x in y)
            for (
              j = y[x].sort(function (e, t) {
                return e.t - t.t;
              }),
                k = 0,
                v = 0;
              v < j.length;
              v++
            )
              ((M = j[v]),
                (ee = {
                  ease: M.e,
                  duration: ((M.t - (v ? j[v - 1].t : 0)) / 100) * s,
                }),
                (ee[x] = M.v),
                _.to(g, ee, k),
                (k += ee.duration));
          _.duration() < s && _.to({}, { duration: s - _.duration() });
        }
      }
      s || a.duration((s = _.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !E && ((Pn = S(a)), he.killTweensOf(g), (Pn = 0)),
      gt(h, S(a), r),
      n.reversed && a.reverse(),
      n.paused && a.paused(!0),
      (l ||
        (!s &&
          !f &&
          a._start === He(h._time) &&
          R(l) &&
          lt(S(a)) &&
          h.data !== `nested`)) &&
        ((a._tTime = -A), a.render(Math.max(0, -c) || 0)),
      m && _t(S(a), m),
      a
    );
  }
  var n = t.prototype;
  return (
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._tDur,
        a = this._dur,
        o = e < 0,
        s = e > i - A && !o ? i : e < A ? 0 : e,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h;
      if (!a) xt(this, e, t, n);
      else if (
        s !== this._tTime ||
        !e ||
        n ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== o) ||
        this._lazy
      ) {
        if (((c = s), (h = this.timeline), this._repeat)) {
          if (((d = a + this._rDelay), this._repeat < -1 && o))
            return this.totalTime(d * 100 + e, t, n);
          if (
            ((c = He(s % d)),
            s === i
              ? ((u = this._repeat), (c = a))
              : ((f = He(s / d)),
                (u = ~~f),
                u && u === f ? ((c = a), u--) : c > a && (c = a)),
            (p = this._yoyo && u & 1),
            p && (c = a - c),
            (f = dt(this._tTime, d)),
            c === r && !n && this._initted && u === f)
          )
            return ((this._tTime = s), this);
          u !== f &&
            this.vars.repeatRefresh &&
            !p &&
            !this._lock &&
            c !== d &&
            this._initted &&
            ((this._lock = n = 1),
            (this.render(He(d * u), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (vt(this, o ? e : c, n, t, s)) return ((this._tTime = 0), this);
          if (r !== this._time && !(n && this.vars.repeatRefresh && u !== f))
            return this;
          if (a !== this._dur) return this.render(e, t, n);
        }
        if (this._rEase) {
          var g = c < r;
          if (g !== this._inv) {
            var _ = g ? r : a - r;
            ((this._inv = g),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = r),
              (this._invRecip = _ ? (g ? -1 : 1) / _ : 0),
              (this._invScale = g ? -this.ratio : 1 - this.ratio),
              (this._invEase = g ? this._rEase : this._ease));
          }
          this.ratio = m =
            this._invRatio +
            this._invScale *
              this._invEase((c - this._invTime) * this._invRecip);
        } else this.ratio = m = this._ease(c / a);
        if (
          (this._from && (this.ratio = m = 1 - m),
          (this._tTime = s),
          (this._time = c),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !r && s && !t && !f && (Qt(this, `onStart`), this._tTime !== s))
        )
          return this;
        for (l = this._pt; l; ) (l.r(m, l.d), (l = l._next));
        ((h && h.render(e < 0 ? e : h._dur * h._ease(c / this._dur), t, n)) ||
          (this._startAt && (this._zTime = e)),
          this._onUpdate &&
            !t &&
            (o && ct(this, e, t, n), Qt(this, `onUpdate`)),
          this._repeat &&
            u !== f &&
            this.vars.onRepeat &&
            !t &&
            this.parent &&
            Qt(this, `onRepeat`),
          (s === this._tDur || !s) &&
            this._tTime === s &&
            (o && !this._onUpdate && ct(this, e, !0, !0),
            (e || !a) &&
              ((s === this._tDur && this._ts > 0) || (!s && this._ts < 0)) &&
              at(this, 1),
            !t &&
              !(o && !r) &&
              (s || r || p) &&
              (Qt(this, s === i ? `onComplete` : `onReverseComplete`, !0),
              this._prom && !(s < i && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (t) {
      return (
        (!t || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(t),
        e.prototype.invalidate.call(this, t)
      );
    }),
    (n.resetTo = function (e, t, n, r, i) {
      (pn || mn.wake(), this._ts || this.play());
      var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        o;
      return (
        this._initted || In(this, a),
        (o = this._ease(a / this._dur)),
        Ln(this, e, t, n, r, o, a, i)
          ? this.resetTo(e, t, n, r, 1)
          : (mt(this, 0),
            this.parent ||
              rt(
                this._dp,
                this,
                `_first`,
                `_last`,
                this._dp._sort ? `_start` : 0,
              ),
            this.render(0))
      );
    }),
    (n.kill = function (e, t) {
      if ((t === void 0 && (t = `all`), !e && (!t || t === `all`)))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? $t(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!D),
          this
        );
      if (this.timeline) {
        var n = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(e, t, Pn && Pn.vars.overwrite !== !0)
            ._first || $t(this),
          this.parent &&
            n !== this.timeline.totalDuration() &&
            Ct(this, (this._dur * this.timeline._tDur) / n, 0, 1),
          this
        );
      }
      var r = this._targets,
        i = e ? Ft(e) : r,
        a = this._ptLookup,
        o = this._pt,
        s,
        c,
        l,
        u,
        d,
        f,
        p;
      if ((!t || t === `all`) && nt(r, i))
        return (t === `all` && (this._pt = 0), $t(this));
      for (
        s = this._op = this._op || [],
          t !== `all` &&
            (F(t) &&
              ((d = {}),
              Be(t, function (e) {
                return (d[e] = 1);
              }),
              (t = d)),
            (t = Rn(r, t))),
          p = r.length;
        p--;
      )
        if (~i.indexOf(r[p]))
          for (d in ((c = a[p]),
          t === `all`
            ? ((s[p] = t), (u = c), (l = {}))
            : ((l = s[p] = s[p] || {}), (u = t)),
          u))
            ((f = c && c[d]),
              f &&
                ((!(`kill` in f.d) || f.d.kill(d) === !0) && it(this, f, `_pt`),
                delete c[d]),
              l !== `all` && (l[d] = 1));
      return (this._initted && !this._pt && o && $t(this), this);
    }),
    (t.to = function (e, n) {
      return new t(e, n, arguments[2]);
    }),
    (t.from = function (e, t) {
      return Dt(1, arguments);
    }),
    (t.delayedCall = function (e, n, r, i) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: e,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i,
      });
    }),
    (t.fromTo = function (e, t, n) {
      return Dt(2, arguments);
    }),
    (t.set = function (e, n) {
      return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n));
    }),
    (t.killTweensOf = function (e, t, n) {
      return he.killTweensOf(e, t, n);
    }),
    t
  );
})(On);
(Xe(Un.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  Be(`staggerTo,staggerFrom,staggerFromTo`, function (e) {
    Un[e] = function () {
      var t = new kn(),
        n = Mt.call(arguments, 0);
      return (n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0), t[e].apply(t, n));
    };
  }));
var Wn = function (e, t, n) {
    return (e[t] = n);
  },
  Gn = function (e, t, n) {
    return e[t](n);
  },
  Kn = function (e, t, n, r) {
    return e[t](r.fp, n);
  },
  qn = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  Jn = function (e, t) {
    return I(e[t]) ? Gn : re(e[t]) && e.setAttribute ? qn : Wn;
  },
  Yn = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  Xn = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Zn = function (e, t) {
    var n = t._pt,
      r = ``;
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; n; )
        ((r =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          r),
          (n = n._next));
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  Qn = function (e, t) {
    for (var n = t._pt; n; ) (n.r(e, n.d), (n = n._next));
  },
  $n = function (e, t, n, r) {
    for (var i = this._pt, a; i; )
      ((a = i._next), i.p === r && i.modifier(e, t, n), (i = a));
  },
  er = function (e) {
    for (var t = this._pt, n, r; t; )
      ((r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? it(this, t, `_pt`)
          : t.dep || (n = 1),
        (t = r));
    return !n;
  },
  tr = function (e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
  },
  nr = function (e) {
    for (var t = e._pt, n, r, i, a; t; ) {
      for (n = t._next, r = i; r && r.pr > t.pr; ) r = r._next;
      ((t._prev = r ? r._prev : a) ? (t._prev._next = t) : (i = t),
        (t._next = r) ? (r._prev = t) : (a = t),
        (t = n));
    }
    e._pt = i;
  },
  rr = (function () {
    function e(e, t, n, r, i, a, o, s, c) {
      ((this.t = t),
        (this.s = r),
        (this.c = i),
        (this.p = n),
        (this.r = a || Yn),
        (this.d = o || this),
        (this.set = s || Wn),
        (this.pr = c || 0),
        (this._next = e),
        e && (e._prev = this));
    }
    var t = e.prototype;
    return (
      (t.modifier = function (e, t, n) {
        ((this.mSet = this.mSet || this.set),
          (this.set = tr),
          (this.m = e),
          (this.mt = n),
          (this.tween = t));
      }),
      e
    );
  })();
(Be(
  Ie +
    `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,
  function (e) {
    return (ke[e] = 1);
  },
),
  (V.TweenMax = V.TweenLite = Un),
  (V.TimelineLite = V.TimelineMax = kn),
  (he = new kn({
    sortChildren: !1,
    defaults: T,
    autoRemoveChildren: !0,
    id: `root`,
    smoothChildTiming: !0,
  })),
  (w.stringFilter = fn));
var ir = [],
  ar = {},
  or = [],
  sr = 0,
  cr = 0,
  lr = function (e) {
    return (ar[e] || or).map(function (e) {
      return e();
    });
  },
  ur = function () {
    var e = Date.now(),
      t = [];
    e - sr > 2 &&
      (lr(`matchMediaInit`),
      ir.forEach(function (e) {
        var n = e.queries,
          r = e.conditions,
          i,
          a,
          o,
          s;
        for (a in n)
          ((i = ge.matchMedia(n[a]).matches),
            i && (o = 1),
            i !== r[a] && ((r[a] = i), (s = 1)));
        s && (e.revert(), o && t.push(e));
      }),
      lr(`matchMediaRevert`),
      t.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }),
      (sr = e),
      lr(`matchMedia`));
  },
  dr = (function () {
    function e(e, t) {
      ((this.selector = t && It(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = cr++),
        e && this.add(e));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        I(e) && ((n = t), (t = e), (e = I));
        var r = this,
          i = function () {
            var e = O,
              i = r.selector,
              a;
            return (
              e && e !== r && e.data.push(r),
              n && (r.selector = It(n)),
              (O = r),
              (a = t.apply(r, arguments)),
              I(a) && r._r.push(a),
              (O = e),
              (r.selector = i),
              (r.isReverted = !1),
              a
            );
          };
        return (
          (r.last = i),
          e === I
            ? i(r, function (e) {
                return r.add(null, e);
              })
            : e
              ? (r[e] = i)
              : i
        );
      }),
      (t.ignore = function (e) {
        var t = O;
        ((O = null), e(this), (O = t));
      }),
      (t.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof e
              ? t.push.apply(t, n.getTweens())
              : n instanceof Un &&
                  !(n.parent && n.parent.data === `nested`) &&
                  t.push(n);
          }),
          t
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, t) {
        var n = this;
        if (
          (e
            ? (function () {
                for (var t = n.getTweens(), r = n.data.length, i; r--; )
                  ((i = n.data[r]),
                    i.data === `isFlip` &&
                      (i.revert(),
                      i.getChildren(!0, !0, !1).forEach(function (e) {
                        return t.splice(t.indexOf(e), 1);
                      })));
                for (
                  t
                    .map(function (e) {
                      return {
                        g:
                          e._dur ||
                          e._delay ||
                          (e._sat && !e._sat.vars.immediateRender)
                            ? e.globalTime(0)
                            : -1 / 0,
                        t: e,
                      };
                    })
                    .sort(function (e, t) {
                      return t.g - e.g || -1 / 0;
                    })
                    .forEach(function (t) {
                      return t.t.revert(e);
                    }),
                    r = n.data.length;
                  r--;
                )
                  ((i = n.data[r]),
                    i instanceof kn
                      ? i.data !== `nested` &&
                        (i.scrollTrigger && i.scrollTrigger.revert(), i.kill())
                      : !(i instanceof Un) && i.revert && i.revert(e));
                (n._r.forEach(function (t) {
                  return t(e, n);
                }),
                  (n.isReverted = !0));
              })()
            : this.data.forEach(function (e) {
                return e.kill && e.kill();
              }),
          this.clear(),
          t)
        )
          for (var r = ir.length; r--; )
            ir[r].id === this.id && ir.splice(r, 1);
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      e
    );
  })(),
  fr = (function () {
    function e(e) {
      ((this.contexts = []), (this.scope = e), O && O.data.push(this));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        L(e) || (e = { matches: e });
        var r = new dr(0, n || this.scope),
          i = (r.conditions = {}),
          a,
          o,
          s;
        for (o in (O && !r.selector && (r.selector = O.selector),
        this.contexts.push(r),
        (t = r.add(`onMatch`, t)),
        (r.queries = e),
        e))
          o === `all`
            ? (s = 1)
            : ((a = ge.matchMedia(e[o])),
              a &&
                (ir.indexOf(r) < 0 && ir.push(r),
                (i[o] = a.matches) && (s = 1),
                a.addListener
                  ? a.addListener(ur)
                  : a.addEventListener(`change`, ur)));
        return (
          s &&
            t(r, function (e) {
              return r.add(null, e);
            }),
          this
        );
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      e
    );
  })(),
  pr = {
    registerPlugin: function () {
      [...arguments].forEach(function (e) {
        return nn(e);
      });
    },
    timeline: function (e) {
      return new kn(e);
    },
    getTweensOf: function (e, t) {
      return he.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, r) {
      F(e) && (e = Ft(e)[0]);
      var i = Re(e || {}).get,
        a = n ? Ye : Je;
      return (
        n === `native` && (n = ``),
        e &&
          (t
            ? a(((Me[t] && Me[t].get) || i)(e, t, n, r))
            : function (t, n, r) {
                return a(((Me[t] && Me[t].get) || i)(e, t, n, r));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = Ft(e)), e.length > 1)) {
        var r = e.map(function (e) {
            return _r.quickSetter(e, t, n);
          }),
          i = r.length;
        return function (e) {
          for (var t = i; t--; ) r[t](e);
        };
      }
      e = e[0] || {};
      var a = Me[t],
        o = Re(e),
        s = (o.harness && (o.harness.aliases || {})[t]) || t,
        c = a
          ? function (t) {
              var r = new a();
              ((en._pt = 0),
                r.init(e, n ? t + n : t, en, 0, [e]),
                r.render(1, r),
                en._pt && Qn(1, en));
            }
          : o.set(e, s);
      return a
        ? c
        : function (t) {
            return c(e, s, n ? t + n : t, o, 1);
          };
    },
    quickTo: function (e, t, n) {
      var r,
        i = _r.to(
          e,
          Xe(
            ((r = {}), (r[t] = `+=0.1`), (r.paused = !0), (r.stagger = 0), r),
            n || {},
          ),
        ),
        a = function (e, n, r) {
          return i.resetTo(t, e, n, r);
        };
      return ((a.tween = i), a);
    },
    isTweening: function (e) {
      return he.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return (e && e.ease && (e.ease = Sn(e.ease, T.ease)), $e(T, e || {}));
    },
    config: function (e) {
      return $e(w, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        r = e.plugins,
        i = e.defaults,
        a = e.extendTimeline;
      ((r || ``).split(`,`).forEach(function (e) {
        return (
          e && !Me[e] && !V[e] && Ce(t + ` effect requires ` + e + ` plugin.`)
        );
      }),
        (Ne[t] = function (e, t, r) {
          return n(Ft(e), Xe(t || {}, i), r);
        }),
        a &&
          (kn.prototype[t] = function (e, n, r) {
            return this.add(Ne[t](e, L(n) ? n : (r = n) && {}, this), r);
          }));
    },
    registerEase: function (e, t) {
      U[e] = Sn(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Sn(e, t) : U;
    },
    getById: function (e) {
      return he.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new kn(e),
        r,
        i;
      for (
        n.smoothChildTiming = R(e.smoothChildTiming),
          he.remove(n),
          n._dp = 0,
          n._time = n._tTime = he._time,
          r = he._first;
        r;
      )
        ((i = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof Un &&
              r.vars.onComplete === r._targets[0]
            )) &&
            gt(n, r, r._start - r._delay),
          (r = i));
      return (gt(he, n, 0), n);
    },
    context: function (e, t) {
      return e ? new dr(e, t) : O;
    },
    matchMedia: function (e) {
      return new fr(e);
    },
    matchMediaRefresh: function () {
      return (
        ir.forEach(function (e) {
          var t = e.conditions,
            n,
            r;
          for (r in t) t[r] && ((t[r] = !1), (n = 1));
          n && e.revert();
        }) || ur()
      );
    },
    addEventListener: function (e, t) {
      var n = ar[e] || (ar[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = ar[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    },
    utils: {
      wrap: Kt,
      wrapYoyo: qt,
      distribute: Rt,
      random: Vt,
      snap: Bt,
      normalize: Wt,
      getUnit: At,
      clamp: jt,
      splitColor: sn,
      toArray: Ft,
      selector: It,
      mapRange: Yt,
      pipe: Ht,
      unitize: Ut,
      interpolate: Xt,
      shuffle: Lt,
    },
    install: xe,
    effects: Ne,
    ticker: mn,
    updateRoot: kn.updateRoot,
    plugins: Me,
    globalTimeline: he,
    core: {
      PropTween: rr,
      globals: we,
      Tween: Un,
      Timeline: kn,
      Animation: On,
      getCache: Re,
      _removeLinkedListItem: it,
      reverting: function () {
        return D;
      },
      context: function (e) {
        return (e && O && (O.data.push(e), (e._ctx = O)), O);
      },
      suppressOverwrites: function (e) {
        return (E = e);
      },
    },
  };
(Be(`to,from,fromTo,delayedCall,set,killTweensOf`, function (e) {
  return (pr[e] = Un[e]);
}),
  mn.add(kn.updateRoot),
  (en = pr.to({}, { duration: 0 })));
var mr = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
      n = n._next;
    return n;
  },
  hr = function (e, t) {
    var n = e._targets,
      r,
      i,
      a;
    for (r in t)
      for (i = n.length; i--; )
        ((a = e._ptLookup[i][r]),
          (a &&= a.d) &&
            (a._pt && (a = mr(a, r)),
            a && a.modifier && a.modifier(t[r], e, n[i], r)));
  },
  gr = function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (e, n, r) {
        r._onInit = function (e) {
          var r, i;
          if (
            (F(n) &&
              ((r = {}),
              Be(n, function (e) {
                return (r[e] = 1);
              }),
              (n = r)),
            t)
          ) {
            for (i in ((r = {}), n)) r[i] = t(n[i]);
            n = r;
          }
          hr(e, n);
        };
      },
    };
  },
  _r =
    pr.registerPlugin(
      {
        name: `attr`,
        init: function (e, t, n, r, i) {
          var a, o, s;
          for (a in ((this.tween = n), t))
            ((s = e.getAttribute(a) || ``),
              (o = this.add(
                e,
                `setAttribute`,
                (s || 0) + ``,
                t[a],
                r,
                i,
                0,
                0,
                a,
              )),
              (o.op = a),
              (o.b = s),
              this._props.push(a));
        },
        render: function (e, t) {
          for (var n = t._pt; n; )
            (D ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next));
        },
      },
      {
        name: `endArray`,
        headless: 1,
        init: function (e, t) {
          for (var n = t.length; n--; )
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      gr(`roundProps`, zt),
      gr(`modifiers`),
      gr(`snap`, Bt),
    ) || pr;
((Un.version = kn.version = _r.version = `3.15.0`),
  (be = 1),
  z() && hn(),
  U.Power0,
  U.Power1,
  U.Power2,
  U.Power3,
  U.Power4,
  U.Linear,
  U.Quad,
  U.Cubic,
  U.Quart,
  U.Quint,
  U.Strong,
  U.Elastic,
  U.Back,
  U.SteppedEase,
  U.Bounce,
  U.Sine,
  U.Expo,
  U.Circ);
var vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr = function () {
    return typeof window < `u`;
  },
  Er = {},
  Dr = 180 / Math.PI,
  Or = Math.PI / 180,
  kr = Math.atan2,
  Ar = 1e8,
  jr = /([A-Z])/g,
  Mr = /(left|right|width|margin|padding|x)/i,
  Nr = /[\s,\(]\S/,
  Pr = {
    autoAlpha: `opacity,visibility`,
    scale: `scaleX,scaleY`,
    alpha: `opacity`,
  },
  Fr = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  Ir = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t,
    );
  },
  Lr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  Rr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  zr = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Br = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  Vr = function (e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
  },
  Hr = function (e, t, n) {
    return (e.style[t] = n);
  },
  Ur = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  Wr = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  Gr = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  Kr = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a.scaleX = a.scaleY = n), a.renderTransform(i, a));
  },
  qr = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a[t] = n), a.renderTransform(i, a));
  },
  Jr = `transform`,
  Yr = Jr + `Origin`,
  Xr = function e(t, n) {
    var r = this,
      i = this.target,
      a = i.style,
      o = i._gsap;
    if (t in Er && a) {
      if (((this.tfm = this.tfm || {}), t !== `transform`))
        ((t = Pr[t] || t),
          ~t.indexOf(`,`)
            ? t.split(`,`).forEach(function (e) {
                return (r.tfm[e] = hi(i, e));
              })
            : (this.tfm[t] = o.x ? o[t] : hi(i, t)),
          t === Yr && (this.tfm.zOrigin = o.zOrigin));
      else
        return Pr.transform.split(`,`).forEach(function (t) {
          return e.call(r, t, n);
        });
      if (this.props.indexOf(Jr) >= 0) return;
      (o.svg &&
        ((this.svgo = i.getAttribute(`data-svg-origin`)),
        this.props.push(Yr, n, ``)),
        (t = Jr));
    }
    (a || n) && this.props.push(t, n, a[t]);
  },
  Zr = function (e) {
    e.translate &&
      (e.removeProperty(`translate`),
      e.removeProperty(`scale`),
      e.removeProperty(`rotate`));
  },
  Qr = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      r = t._gsap,
      i,
      a;
    for (i = 0; i < e.length; i += 3)
      e[i + 1]
        ? e[i + 1] === 2
          ? t[e[i]](e[i + 2])
          : (t[e[i]] = e[i + 2])
        : e[i + 2]
          ? (n[e[i]] = e[i + 2])
          : n.removeProperty(
              e[i].substr(0, 2) === `--`
                ? e[i]
                : e[i].replace(jr, `-$1`).toLowerCase(),
            );
    if (this.tfm) {
      for (a in this.tfm) r[a] = this.tfm[a];
      (r.svg &&
        (r.renderTransform(),
        t.setAttribute(`data-svg-origin`, this.svgo || ``)),
        (i = wr()),
        (!i || !i.isStart) &&
          !n[Jr] &&
          (Zr(n),
          r.zOrigin &&
            n[Yr] &&
            ((n[Yr] += ` ` + r.zOrigin + `px`),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  $r = function (e, t) {
    var n = { target: e, props: [], revert: Qr, save: Xr };
    return (
      e._gsap || _r.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(`,`).forEach(function (e) {
          return n.save(e);
        }),
      n
    );
  },
  ei,
  ti = function (e, t) {
    var n = yr.createElementNS
      ? yr.createElementNS(
          (t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`),
          e,
        )
      : yr.createElement(e);
    return n && n.style ? n : yr.createElement(e);
  },
  ni = function e(t, n, r) {
    var i = getComputedStyle(t);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(jr, `-$1`).toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && e(t, ii(n) || n, 1)) ||
      ``
    );
  },
  ri = `O,Moz,ms,Ms,Webkit`.split(`,`),
  ii = function (e, t, n) {
    var r = (t || Sr).style,
      i = 5;
    if (e in r && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      i-- && !(ri[i] + e in r);
    );
    return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? ri[i] : ``) + e;
  },
  ai = function () {
    Tr() &&
      window.document &&
      ((vr = window),
      (yr = vr.document),
      (br = yr.documentElement),
      (Sr = ti(`div`) || { style: {} }),
      ti(`div`),
      (Jr = ii(Jr)),
      (Yr = Jr + `Origin`),
      (Sr.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`),
      (ei = !!ii(`perspective`)),
      (wr = _r.core.reverting),
      (xr = 1));
  },
  oi = function (e) {
    var t = e.ownerSVGElement,
      n = ti(
        `svg`,
        (t && t.getAttribute(`xmlns`)) || `http://www.w3.org/2000/svg`,
      ),
      r = e.cloneNode(!0),
      i;
    ((r.style.display = `block`), n.appendChild(r), br.appendChild(n));
    try {
      i = r.getBBox();
    } catch {}
    return (n.removeChild(r), br.removeChild(n), i);
  },
  si = function (e, t) {
    for (var n = t.length; n--; )
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  ci = function (e) {
    var t, n;
    try {
      t = e.getBBox();
    } catch {
      ((t = oi(e)), (n = 1));
    }
    return (
      (t && (t.width || t.height)) || n || (t = oi(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +si(e, [`x`, `cx`, `x1`]) || 0,
            y: +si(e, [`y`, `cy`, `y1`]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  li = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ci(e));
  },
  ui = function (e, t) {
    if (t) {
      var n = e.style,
        r;
      (t in Er && t !== Yr && (t = Jr),
        n.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === `ms` || t.substr(0, 6) === `webkit`) && (t = `-` + t),
            n.removeProperty(
              r === `--` ? t : t.replace(jr, `-$1`).toLowerCase(),
            ))
          : n.removeAttribute(t));
    }
  },
  di = function (e, t, n, r, i, a) {
    var o = new rr(e._pt, t, n, 0, 1, a ? Vr : Br);
    return ((e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o);
  },
  fi = { deg: 1, rad: 1, turn: 1 },
  pi = { grid: 1, flex: 1 },
  mi = function e(t, n, r, i) {
    var a = parseFloat(r) || 0,
      o = (r + ``).trim().substr((a + ``).length) || `px`,
      s = Sr.style,
      c = Mr.test(n),
      l = t.tagName.toLowerCase() === `svg`,
      u = (l ? `client` : `offset`) + (c ? `Width` : `Height`),
      d = 100,
      f = i === `px`,
      p = i === `%`,
      m,
      h,
      g,
      _;
    if (i === o || !a || fi[i] || fi[o]) return a;
    if (
      (o !== `px` && !f && (a = e(t, n, r, `px`)),
      (_ = t.getCTM && li(t)),
      (p || o === `%`) && (Er[n] || ~n.indexOf(`adius`)))
    )
      return (
        (m = _ ? t.getBBox()[c ? `width` : `height`] : t[u]),
        Ve(p ? (a / m) * d : (a / 100) * m)
      );
    if (
      ((s[c ? `width` : `height`] = d + (f ? o : i)),
      (h =
        (i !== `rem` && ~n.indexOf(`adius`)) ||
        (i === `em` && t.appendChild && !l)
          ? t
          : t.parentNode),
      _ && (h = (t.ownerSVGElement || {}).parentNode),
      (!h || h === yr || !h.appendChild) && (h = yr.body),
      (g = h._gsap),
      g && p && g.width && c && g.time === mn.time && !g.uncache)
    )
      return Ve((a / g.width) * d);
    if (p && (n === `height` || n === `width`)) {
      var v = t.style[n];
      ((t.style[n] = d + i), (m = t[u]), v ? (t.style[n] = v) : ui(t, n));
    } else
      ((p || o === `%`) &&
        !pi[ni(h, `display`)] &&
        (s.position = ni(t, `position`)),
        h === t && (s.position = `static`),
        h.appendChild(Sr),
        (m = Sr[u]),
        h.removeChild(Sr),
        (s.position = `absolute`));
    return (
      c && p && ((g = Re(h)), (g.time = mn.time), (g.width = h[u])),
      Ve(f ? (m * a) / d : m && a ? (d / m) * a : 0)
    );
  },
  hi = function (e, t, n, r) {
    var i;
    return (
      xr || ai(),
      t in Pr &&
        t !== `transform` &&
        ((t = Pr[t]), ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
      Er[t] && t !== `transform`
        ? ((i = Di(e, r)),
          (i =
            t === `transformOrigin`
              ? i.svg
                ? i.origin
                : Oi(ni(e, Yr)) + ` ` + i.zOrigin + `px`
              : i[t]))
        : ((i = e.style[t]),
          (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) &&
            (i =
              (bi[t] && bi[t](e, t, n)) ||
              ni(e, t) ||
              ze(e, t) ||
              +(t === `opacity`))),
      n && !~(i + ``).trim().indexOf(` `) ? mi(e, t, i, n) + n : i
    );
  },
  gi = function (e, t, n, r) {
    if (!n || n === `none`) {
      var i = ii(t, e, 1),
        a = i && ni(e, i, 1);
      a && a !== n
        ? ((t = i), (n = a))
        : t === `borderColor` && (n = ni(e, `borderTopColor`));
    }
    var o = new rr(this._pt, e.style, t, 0, 1, Zn),
      s = 0,
      c = 0,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b;
    if (
      ((o.b = n),
      (o.e = r),
      (n += ``),
      (r += ``),
      r.substring(0, 6) === `var(--` &&
        (r = ni(e, r.substring(4, r.indexOf(`)`)))),
      r === `auto` &&
        ((m = e.style[t]),
        (e.style[t] = r),
        (r = ni(e, t) || r),
        m ? (e.style[t] = m) : ui(e, t)),
      (l = [n, r]),
      fn(l),
      (n = l[0]),
      (r = l[1]),
      (d = n.match(ue) || []),
      (b = r.match(ue) || []),
      b.length)
    ) {
      for (; (u = ue.exec(r)); )
        ((h = u[0]),
          (_ = r.substring(s, u.index)),
          p
            ? (p = (p + 1) % 5)
            : (_.substr(-5) === `rgba(` || _.substr(-5) === `hsla(`) && (p = 1),
          h !== (m = d[c++] || ``) &&
            ((f = parseFloat(m) || 0),
            (y = m.substr((f + ``).length)),
            h.charAt(1) === `=` && (h = Ue(f, h) + y),
            (g = parseFloat(h)),
            (v = h.substr((g + ``).length)),
            (s = ue.lastIndex - v.length),
            v ||
              ((v = v || w.units[t] || y),
              s === r.length && ((r += v), (o.e += v))),
            y !== v && (f = mi(e, t, m, v) || 0),
            (o._pt = {
              _next: o._pt,
              p: _ || c === 1 ? _ : `,`,
              s: f,
              c: g - f,
              m: (p && p < 4) || t === `zIndex` ? Math.round : 0,
            })));
      o.c = s < r.length ? r.substring(s, r.length) : ``;
    } else o.r = t === `display` && r === `none` ? Vr : Br;
    return (fe.test(r) && (o.e = 0), (this._pt = o), o);
  },
  _i = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` },
  vi = function (e) {
    var t = e.split(` `),
      n = t[0],
      r = t[1] || `50%`;
    return (
      (n === `top` || n === `bottom` || r === `left` || r === `right`) &&
        ((e = n), (n = r), (r = e)),
      (t[0] = _i[n] || n),
      (t[1] = _i[r] || r),
      t.join(` `)
    );
  },
  yi = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        r = n.style,
        i = t.u,
        a = n._gsap,
        o,
        s,
        c;
      if (i === `all` || i === !0) ((r.cssText = ``), (s = 1));
      else
        for (i = i.split(`,`), c = i.length; --c > -1; )
          ((o = i[c]),
            Er[o] && ((s = 1), (o = o === `transformOrigin` ? Yr : Jr)),
            ui(n, o));
      s &&
        (ui(n, Jr),
        a &&
          (a.svg && n.removeAttribute(`transform`),
          (r.scale = r.rotate = r.translate = `none`),
          Di(n, 1),
          (a.uncache = 1),
          Zr(r)));
    }
  },
  bi = {
    clearProps: function (e, t, n, r, i) {
      if (i.data !== `isFromStart`) {
        var a = (e._pt = new rr(e._pt, t, n, 0, 0, yi));
        return ((a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1);
      }
    },
  },
  xi = [1, 0, 0, 1, 0, 0],
  Si = {},
  Ci = function (e) {
    return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e;
  },
  wi = function (e) {
    var t = ni(e, Jr);
    return Ci(t) ? xi : t.substr(7).match(B).map(Ve);
  },
  Ti = function (e, t) {
    var n = e._gsap || Re(e),
      r = e.style,
      i = wi(e),
      a,
      o,
      s,
      c;
    return n.svg && e.getAttribute(`transform`)
      ? ((s = e.transform.baseVal.consolidate().matrix),
        (i = [s.a, s.b, s.c, s.d, s.e, s.f]),
        i.join(`,`) === `1,0,0,1,0,0` ? xi : i)
      : (i === xi &&
          !e.offsetParent &&
          e !== br &&
          !n.svg &&
          ((s = r.display),
          (r.display = `block`),
          (a = e.parentNode),
          (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((c = 1), (o = e.nextElementSibling), br.appendChild(e)),
          (i = wi(e)),
          s ? (r.display = s) : ui(e, `display`),
          c &&
            (o
              ? a.insertBefore(e, o)
              : a
                ? a.appendChild(e)
                : br.removeChild(e))),
        t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
  },
  Ei = function (e, t, n, r, i, a) {
    var o = e._gsap,
      s = i || Ti(e, !0),
      c = o.xOrigin || 0,
      l = o.yOrigin || 0,
      u = o.xOffset || 0,
      d = o.yOffset || 0,
      f = s[0],
      p = s[1],
      m = s[2],
      h = s[3],
      g = s[4],
      _ = s[5],
      v = t.split(` `),
      y = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      x,
      S,
      C,
      w;
    (n
      ? s !== xi &&
        (S = f * h - p * m) &&
        ((C = (h / S) * y + b * (-m / S) + (m * _ - h * g) / S),
        (w = y * (-p / S) + (f / S) * b - (f * _ - p * g) / S),
        (y = C),
        (b = w))
      : ((x = ci(e)),
        (y = x.x + (~v[0].indexOf(`%`) ? (y / 100) * x.width : y)),
        (b = x.y + (~(v[1] || v[0]).indexOf(`%`) ? (b / 100) * x.height : b))),
      r || (r !== !1 && o.smooth)
        ? ((g = y - c),
          (_ = b - l),
          (o.xOffset = u + (g * f + _ * m) - g),
          (o.yOffset = d + (g * p + _ * h) - _))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = y),
      (o.yOrigin = b),
      (o.smooth = !!r),
      (o.origin = t),
      (o.originIsAbsolute = !!n),
      (e.style[Yr] = `0px 0px`),
      a &&
        (di(a, o, `xOrigin`, c, y),
        di(a, o, `yOrigin`, l, b),
        di(a, o, `xOffset`, u, o.xOffset),
        di(a, o, `yOffset`, d, o.yOffset)),
      e.setAttribute(`data-svg-origin`, y + ` ` + b));
  },
  Di = function (e, t) {
    var n = e._gsap || new Dn(e);
    if (`x` in n && !t && !n.uncache) return n;
    var r = e.style,
      i = n.scaleX < 0,
      a = `px`,
      o = `deg`,
      s = getComputedStyle(e),
      c = ni(e, Yr) || `0`,
      l = (u = d = m = h = g = _ = v = y = 0),
      u,
      d,
      f = (p = 1),
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      T,
      E,
      D,
      O,
      k,
      A,
      j,
      M,
      ee,
      N,
      te,
      P,
      F,
      I,
      ne,
      re,
      L;
    return (
      (n.svg = !!(e.getCTM && li(e))),
      s.translate &&
        ((s.translate !== `none` ||
          s.scale !== `none` ||
          s.rotate !== `none`) &&
          (r[Jr] =
            (s.translate === `none`
              ? ``
              : `translate3d(` +
                (s.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) +
                `) `) +
            (s.rotate === `none` ? `` : `rotate(` + s.rotate + `) `) +
            (s.scale === `none`
              ? ``
              : `scale(` + s.scale.split(` `).join(`,`) + `) `) +
            (s[Jr] === `none` ? `` : s[Jr])),
        (r.scale = r.rotate = r.translate = `none`)),
      (S = Ti(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((N = e.getBBox()),
            (c = n.xOrigin - N.x + `px ` + (n.yOrigin - N.y) + `px`),
            (ee = ``))
          : (ee = !t && e.getAttribute(`data-svg-origin`)),
        Ei(e, ee || c, !!ee || n.originIsAbsolute, n.smooth !== !1, S)),
      (b = n.xOrigin || 0),
      (x = n.yOrigin || 0),
      S !== xi &&
        ((D = S[0]),
        (O = S[1]),
        (k = S[2]),
        (A = S[3]),
        (l = j = S[4]),
        (u = M = S[5]),
        S.length === 6
          ? ((f = Math.sqrt(D * D + O * O)),
            (p = Math.sqrt(A * A + k * k)),
            (m = D || O ? kr(O, D) * Dr : 0),
            (_ = k || A ? kr(k, A) * Dr + m : 0),
            _ && (p *= Math.abs(Math.cos(_ * Or))),
            n.svg && ((l -= b - (b * D + x * k)), (u -= x - (b * O + x * A))))
          : ((L = S[6]),
            (ne = S[7]),
            (P = S[8]),
            (F = S[9]),
            (I = S[10]),
            (re = S[11]),
            (l = S[12]),
            (u = S[13]),
            (d = S[14]),
            (C = kr(L, I)),
            (h = C * Dr),
            C &&
              ((T = Math.cos(-C)),
              (E = Math.sin(-C)),
              (ee = j * T + P * E),
              (N = M * T + F * E),
              (te = L * T + I * E),
              (P = j * -E + P * T),
              (F = M * -E + F * T),
              (I = L * -E + I * T),
              (re = ne * -E + re * T),
              (j = ee),
              (M = N),
              (L = te)),
            (C = kr(-k, I)),
            (g = C * Dr),
            C &&
              ((T = Math.cos(-C)),
              (E = Math.sin(-C)),
              (ee = D * T - P * E),
              (N = O * T - F * E),
              (te = k * T - I * E),
              (re = A * E + re * T),
              (D = ee),
              (O = N),
              (k = te)),
            (C = kr(O, D)),
            (m = C * Dr),
            C &&
              ((T = Math.cos(C)),
              (E = Math.sin(C)),
              (ee = D * T + O * E),
              (N = j * T + M * E),
              (O = O * T - D * E),
              (M = M * T - j * E),
              (D = ee),
              (j = N)),
            h &&
              Math.abs(h) + Math.abs(m) > 359.9 &&
              ((h = m = 0), (g = 180 - g)),
            (f = Ve(Math.sqrt(D * D + O * O + k * k))),
            (p = Ve(Math.sqrt(M * M + L * L))),
            (C = kr(j, M)),
            (_ = Math.abs(C) > 2e-4 ? C * Dr : 0),
            (y = re ? 1 / (re < 0 ? -re : re) : 0)),
        n.svg &&
          ((ee = e.getAttribute(`transform`)),
          (n.forceCSS = e.setAttribute(`transform`, ``) || !Ci(ni(e, Jr))),
          ee && e.setAttribute(`transform`, ee))),
      Math.abs(_) > 90 &&
        Math.abs(_) < 270 &&
        (i
          ? ((f *= -1), (_ += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
          : ((p *= -1), (_ += _ <= 0 ? 180 : -180))),
      (t ||= n.uncache),
      (n.x =
        l -
        ((n.xPercent =
          l &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        a),
      (n.y =
        u -
        ((n.yPercent =
          u &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        a),
      (n.z = d + a),
      (n.scaleX = Ve(f)),
      (n.scaleY = Ve(p)),
      (n.rotation = Ve(m) + o),
      (n.rotationX = Ve(h) + o),
      (n.rotationY = Ve(g) + o),
      (n.skewX = _ + o),
      (n.skewY = v + o),
      (n.transformPerspective = y + a),
      (n.zOrigin = parseFloat(c.split(` `)[2]) || (!t && n.zOrigin) || 0) &&
        (r[Yr] = Oi(c)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = w.force3D),
      (n.renderTransform = n.svg ? Fi : ei ? Pi : Ai),
      (n.uncache = 0),
      n
    );
  },
  Oi = function (e) {
    return (e = e.split(` `))[0] + ` ` + e[1];
  },
  ki = function (e, t, n) {
    var r = At(t);
    return Ve(parseFloat(t) + parseFloat(mi(e, `x`, n + `px`, r))) + r;
  },
  Ai = function (e, t) {
    ((t.z = `0px`),
      (t.rotationY = t.rotationX = `0deg`),
      (t.force3D = 0),
      Pi(e, t));
  },
  ji = `0deg`,
  Mi = `0px`,
  Ni = `) `,
  Pi = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.z,
      c = n.rotation,
      l = n.rotationY,
      u = n.rotationX,
      d = n.skewX,
      f = n.skewY,
      p = n.scaleX,
      m = n.scaleY,
      h = n.transformPerspective,
      g = n.force3D,
      _ = n.target,
      v = n.zOrigin,
      y = ``,
      b = (g === `auto` && e && e !== 1) || g === !0;
    if (v && (u !== ji || l !== ji)) {
      var x = parseFloat(l) * Or,
        S = Math.sin(x),
        C = Math.cos(x),
        w;
      ((x = parseFloat(u) * Or),
        (w = Math.cos(x)),
        (a = ki(_, a, S * w * -v)),
        (o = ki(_, o, -Math.sin(x) * -v)),
        (s = ki(_, s, C * w * -v + v)));
    }
    (h !== Mi && (y += `perspective(` + h + Ni),
      (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
      (b || a !== Mi || o !== Mi || s !== Mi) &&
        (y +=
          s !== Mi || b
            ? `translate3d(` + a + `, ` + o + `, ` + s + `) `
            : `translate(` + a + `, ` + o + Ni),
      c !== ji && (y += `rotate(` + c + Ni),
      l !== ji && (y += `rotateY(` + l + Ni),
      u !== ji && (y += `rotateX(` + u + Ni),
      (d !== ji || f !== ji) && (y += `skew(` + d + `, ` + f + Ni),
      (p !== 1 || m !== 1) && (y += `scale(` + p + `, ` + m + Ni),
      (_.style[Jr] = y || `translate(0, 0)`));
  },
  Fi = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.rotation,
      c = n.skewX,
      l = n.skewY,
      u = n.scaleX,
      d = n.scaleY,
      f = n.target,
      p = n.xOrigin,
      m = n.yOrigin,
      h = n.xOffset,
      g = n.yOffset,
      _ = n.forceCSS,
      v = parseFloat(a),
      y = parseFloat(o),
      b,
      x,
      S,
      C,
      w;
    ((s = parseFloat(s)),
      (c = parseFloat(c)),
      (l = parseFloat(l)),
      l && ((l = parseFloat(l)), (c += l), (s += l)),
      s || c
        ? ((s *= Or),
          (c *= Or),
          (b = Math.cos(s) * u),
          (x = Math.sin(s) * u),
          (S = Math.sin(s - c) * -d),
          (C = Math.cos(s - c) * d),
          c &&
            ((l *= Or),
            (w = Math.tan(c - l)),
            (w = Math.sqrt(1 + w * w)),
            (S *= w),
            (C *= w),
            l &&
              ((w = Math.tan(l)),
              (w = Math.sqrt(1 + w * w)),
              (b *= w),
              (x *= w))),
          (b = Ve(b)),
          (x = Ve(x)),
          (S = Ve(S)),
          (C = Ve(C)))
        : ((b = u), (C = d), (x = S = 0)),
      ((v && !~(a + ``).indexOf(`px`)) || (y && !~(o + ``).indexOf(`px`))) &&
        ((v = mi(f, `x`, a, `px`)), (y = mi(f, `y`, o, `px`))),
      (p || m || h || g) &&
        ((v = Ve(v + p - (p * b + m * S) + h)),
        (y = Ve(y + m - (p * x + m * C) + g))),
      (r || i) &&
        ((w = f.getBBox()),
        (v = Ve(v + (r / 100) * w.width)),
        (y = Ve(y + (i / 100) * w.height))),
      (w =
        `matrix(` + b + `,` + x + `,` + S + `,` + C + `,` + v + `,` + y + `)`),
      f.setAttribute(`transform`, w),
      _ && (f.style[Jr] = w));
  },
  Ii = function (e, t, n, r, i) {
    var a = 360,
      o = F(i),
      s = parseFloat(i) * (o && ~i.indexOf(`rad`) ? Dr : 1) - r,
      c = r + s + `deg`,
      l,
      u;
    return (
      o &&
        ((l = i.split(`_`)[1]),
        l === `short` && ((s %= a), s !== s % (a / 2) && (s += s < 0 ? a : -a)),
        l === `cw` && s < 0
          ? (s = ((s + a * Ar) % a) - ~~(s / a) * a)
          : l === `ccw` && s > 0 && (s = ((s - a * Ar) % a) - ~~(s / a) * a)),
      (e._pt = u = new rr(e._pt, t, n, r, s, Ir)),
      (u.e = c),
      (u.u = `deg`),
      e._props.push(n),
      u
    );
  },
  Li = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Ri = function (e, t, n) {
    var r = Li({}, n._gsap),
      i = `perspective,force3D,transformOrigin,svgOrigin`,
      a = n.style,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    for (s in (r.svg
      ? ((c = n.getAttribute(`transform`)),
        n.setAttribute(`transform`, ``),
        (a[Jr] = t),
        (o = Di(n, 1)),
        ui(n, Jr),
        n.setAttribute(`transform`, c))
      : ((c = getComputedStyle(n)[Jr]),
        (a[Jr] = t),
        (o = Di(n, 1)),
        (a[Jr] = c)),
    Er))
      ((c = r[s]),
        (l = o[s]),
        c !== l &&
          i.indexOf(s) < 0 &&
          ((f = At(c)),
          (p = At(l)),
          (u = f === p ? parseFloat(c) : mi(n, s, c, p)),
          (d = parseFloat(l)),
          (e._pt = new rr(e._pt, o, s, u, d - u, Fr)),
          (e._pt.u = p || 0),
          e._props.push(s)));
    Li(o, r);
  };
Be(`padding,margin,Width,Radius`, function (e, t) {
  var n = `Top`,
    r = `Right`,
    i = `Bottom`,
    a = `Left`,
    o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
      return t < 2 ? e + n : `border` + n + e;
    });
  bi[t > 1 ? `border` + e : e] = function (e, t, n, r, i) {
    var a, s;
    if (arguments.length < 4)
      return (
        (a = o.map(function (t) {
          return hi(e, t, n);
        })),
        (s = a.join(` `)),
        s.split(a[0]).length === 5 ? a[0] : s
      );
    ((a = (r + ``).split(` `)),
      (s = {}),
      o.forEach(function (e, t) {
        return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
      }),
      e.init(t, s, i));
  };
});
var zi = {
  name: `css`,
  register: ai,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, r, i) {
    var a = this._props,
      o = e.style,
      s = n.vars.startAt,
      c,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      T;
    for (m in (xr || ai(),
    (this.styles = this.styles || $r(e)),
    (C = this.styles.props),
    (this.tween = n),
    t))
      if (m !== `autoRound` && ((l = t[m]), !(Me[m] && Nn(m, t, n, r, e, i)))) {
        if (
          ((f = typeof l),
          (p = bi[m]),
          f === `function` && ((l = l.call(n, r, e, i)), (f = typeof l)),
          f === `string` && ~l.indexOf(`random(`) && (l = Jt(l)),
          p)
        )
          p(this, e, m, l, n) && (S = 1);
        else if (m.substr(0, 2) === `--`)
          ((c = (getComputedStyle(e).getPropertyValue(m) + ``).trim()),
            (l += ``),
            (un.lastIndex = 0),
            un.test(c) ||
              ((h = At(c)),
              (g = At(l)),
              g ? h !== g && (c = mi(e, m, c, g) + g) : h && (l += h)),
            this.add(o, `setProperty`, c, l, r, i, 0, 0, m),
            a.push(m),
            C.push(m, 0, o[m]));
        else if (f !== `undefined`) {
          if (
            (s && m in s
              ? ((c = typeof s[m] == `function` ? s[m].call(n, r, e, i) : s[m]),
                F(c) && ~c.indexOf(`random(`) && (c = Jt(c)),
                At(c + ``) ||
                  c === `auto` ||
                  (c += w.units[m] || At(hi(e, m)) || ``),
                (c + ``).charAt(1) === `=` && (c = hi(e, m)))
              : (c = hi(e, m)),
            (d = parseFloat(c)),
            (_ = f === `string` && l.charAt(1) === `=` && l.substr(0, 2)),
            _ && (l = l.substr(2)),
            (u = parseFloat(l)),
            m in Pr &&
              (m === `autoAlpha` &&
                (d === 1 && hi(e, `visibility`) === `hidden` && u && (d = 0),
                C.push(`visibility`, 0, o.visibility),
                di(
                  this,
                  o,
                  `visibility`,
                  d ? `inherit` : `hidden`,
                  u ? `inherit` : `hidden`,
                  !u,
                )),
              m !== `scale` &&
                m !== `transform` &&
                ((m = Pr[m]), ~m.indexOf(`,`) && (m = m.split(`,`)[0]))),
            (v = m in Er),
            v)
          ) {
            if (
              (this.styles.save(m),
              (T = l),
              f === `string` && l.substring(0, 6) === `var(--`)
            ) {
              if (
                ((l = ni(e, l.substring(4, l.indexOf(`)`)))),
                l.substring(0, 5) === `calc(`)
              ) {
                var E = e.style.perspective;
                ((e.style.perspective = l),
                  (l = ni(e, `perspective`)),
                  E ? (e.style.perspective = E) : ui(e, `perspective`));
              }
              u = parseFloat(l);
            }
            if (
              (y ||
                ((b = e._gsap),
                (b.renderTransform && !t.parseTransform) ||
                  Di(e, t.parseTransform),
                (x = t.smoothOrigin !== !1 && b.smooth),
                (y = this._pt =
                  new rr(this._pt, o, Jr, 0, 1, b.renderTransform, b, 0, -1)),
                (y.dep = 1)),
              m === `scale`)
            )
              ((this._pt = new rr(
                this._pt,
                b,
                `scaleY`,
                b.scaleY,
                (_ ? Ue(b.scaleY, _ + u) : u) - b.scaleY || 0,
                Fr,
              )),
                (this._pt.u = 0),
                a.push(`scaleY`, m),
                (m += `X`));
            else if (m === `transformOrigin`) {
              (C.push(Yr, 0, o[Yr]),
                (l = vi(l)),
                b.svg
                  ? Ei(e, l, 0, x, 0, this)
                  : ((g = parseFloat(l.split(` `)[2]) || 0),
                    g !== b.zOrigin && di(this, b, `zOrigin`, b.zOrigin, g),
                    di(this, o, m, Oi(c), Oi(l))));
              continue;
            } else if (m === `svgOrigin`) {
              Ei(e, l, 1, x, 0, this);
              continue;
            } else if (m in Si) {
              Ii(this, b, m, d, _ ? Ue(d, _ + l) : l);
              continue;
            } else if (m === `smoothOrigin`) {
              di(this, b, `smooth`, b.smooth, l);
              continue;
            } else if (m === `force3D`) {
              b[m] = l;
              continue;
            } else if (m === `transform`) {
              Ri(this, l, e);
              continue;
            }
          } else m in o || (m = ii(m) || m);
          if (v || ((u || u === 0) && (d || d === 0) && !Nr.test(l) && m in o))
            ((h = (c + ``).substr((d + ``).length)),
              (u ||= 0),
              (g = At(l) || (m in w.units ? w.units[m] : h)),
              h !== g && (d = mi(e, m, c, g)),
              (this._pt = new rr(
                this._pt,
                v ? b : o,
                m,
                d,
                (_ ? Ue(d, _ + u) : u) - d,
                !v && (g === `px` || m === `zIndex`) && t.autoRound !== !1
                  ? zr
                  : Fr,
              )),
              (this._pt.u = g || 0),
              v && T !== l
                ? ((this._pt.b = c), (this._pt.e = T), (this._pt.r = Rr))
                : h !== g &&
                  g !== `%` &&
                  ((this._pt.b = c), (this._pt.r = Lr)));
          else if (m in o) gi.call(this, e, m, c, _ ? _ + l : l);
          else if (m in e) this.add(e, m, c || e[m], _ ? _ + l : l, r, i);
          else if (m !== `parseTransform`) {
            Se(m, l);
            continue;
          }
          (v ||
            (m in o
              ? C.push(m, 0, o[m])
              : typeof e[m] == `function`
                ? C.push(m, 2, e[m]())
                : C.push(m, 1, c || e[m])),
            a.push(m));
        }
      }
    S && nr(this);
  },
  render: function (e, t) {
    if (t.tween._time || !wr())
      for (var n = t._pt; n; ) (n.r(e, n.d), (n = n._next));
    else t.styles.revert();
  },
  get: hi,
  aliases: Pr,
  getSetter: function (e, t, n) {
    var r = Pr[t];
    return (
      r && r.indexOf(`,`) < 0 && (t = r),
      t in Er && t !== Yr && (e._gsap.x || hi(e, `x`))
        ? n && Cr === n
          ? t === `scale`
            ? Gr
            : Wr
          : (Cr = n || {}) && (t === `scale` ? Kr : qr)
        : e.style && !re(e.style[t])
          ? Hr
          : ~t.indexOf(`-`)
            ? Ur
            : Jn(e, t)
    );
  },
  core: { _removeProperty: ui, _getMatrix: Ti },
};
((_r.utils.checkPrefix = ii),
  (_r.core.getStyleSaver = $r),
  (function (e, t, n, r) {
    var i = Be(e + `,` + t + `,` + n, function (e) {
      Er[e] = 1;
    });
    (Be(t, function (e) {
      ((w.units[e] = `deg`), (Si[e] = 1));
    }),
      (Pr[i[13]] = e + `,` + t),
      Be(r, function (e) {
        var t = e.split(`:`);
        Pr[t[1]] = i[t[0]];
      }));
  })(
    `x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,
    `rotation,rotationX,rotationY,skewX,skewY`,
    `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
    `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`,
  ),
  Be(
    `x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,
    function (e) {
      w.units[e] = `px`;
    },
  ),
  _r.registerPlugin(zi));
var W = _r.registerPlugin(zi) || _r;
W.core.Tween;
function Bi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function Vi(e, t, n) {
  return (t && Bi(e.prototype, t), n && Bi(e, n), e);
}
var Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta = function () {
    return (
      Hi ||
      (typeof window < `u` && (Hi = window.gsap) && Hi.registerPlugin && Hi)
    );
  },
  na = 1,
  ra = [],
  G = [],
  ia = [],
  aa = Date.now,
  oa = function (e, t) {
    return t;
  },
  sa = function () {
    var e = Xi.core,
      t = e.bridge || {},
      n = e._scrollers,
      r = e._proxies;
    (n.push.apply(n, G),
      r.push.apply(r, ia),
      (G = n),
      (ia = r),
      (oa = function (e, n) {
        return t[e](n);
      }));
  },
  ca = function (e, t) {
    return ~ia.indexOf(e) && ia[ia.indexOf(e) + 1][t];
  },
  la = function (e) {
    return !!~Zi.indexOf(e);
  },
  ua = function (e, t, n, r, i) {
    return e.addEventListener(t, n, { passive: r !== !1, capture: !!i });
  },
  da = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  fa = `scrollLeft`,
  pa = `scrollTop`,
  ma = function () {
    return (Qi && Qi.isPressed) || G.cache++;
  },
  ha = function (e, t) {
    var n = function n(r) {
      if (r || r === 0) {
        na && (Wi.history.scrollRestoration = `manual`);
        var i = Qi && Qi.isPressed;
        ((r = n.v = Math.round(r) || (Qi && Qi.iOS ? 1 : 0)),
          e(r),
          (n.cacheID = G.cache),
          i && oa(`ss`, r));
      } else
        (t || G.cache !== n.cacheID || oa(`ref`)) &&
          ((n.cacheID = G.cache), (n.v = e()));
      return n.v + n.offset;
    };
    return ((n.offset = 0), e && n);
  },
  ga = {
    s: fa,
    p: `left`,
    p2: `Left`,
    os: `right`,
    os2: `Right`,
    d: `width`,
    d2: `Width`,
    a: `x`,
    sc: ha(function (e) {
      return arguments.length
        ? Wi.scrollTo(e, _a.sc())
        : Wi.pageXOffset || Gi[fa] || Ki[fa] || qi[fa] || 0;
    }),
  },
  _a = {
    s: pa,
    p: `top`,
    p2: `Top`,
    os: `bottom`,
    os2: `Bottom`,
    d: `height`,
    d2: `Height`,
    a: `y`,
    op: ga,
    sc: ha(function (e) {
      return arguments.length
        ? Wi.scrollTo(ga.sc(), e)
        : Wi.pageYOffset || Gi[pa] || Ki[pa] || qi[pa] || 0;
    }),
  },
  va = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Hi.utils.toArray)(e)[0] ||
      (typeof e == `string` && Hi.config().nullTargetWarn !== !1
        ? console.warn(`Element not found:`, e)
        : null)
    );
  },
  ya = function (e, t) {
    for (var n = t.length; n--; ) if (t[n] === e || t[n].contains(e)) return !0;
    return !1;
  },
  ba = function (e, t) {
    var n = t.s,
      r = t.sc;
    la(e) && (e = Gi.scrollingElement || Ki);
    var i = G.indexOf(e),
      a = r === _a.sc ? 1 : 2;
    (!~i && (i = G.push(e) - 1), G[i + a] || ua(e, `scroll`, ma));
    var o = G[i + a],
      s =
        o ||
        (G[i + a] =
          ha(ca(e, n), !0) ||
          (la(e)
            ? r
            : ha(function (t) {
                return arguments.length ? (e[n] = t) : e[n];
              })));
    return (
      (s.target = e),
      o || (s.smooth = Hi.getProperty(e, `scrollBehavior`) === `smooth`),
      s
    );
  },
  xa = function (e, t, n) {
    var r = e,
      i = e,
      a = aa(),
      o = a,
      s = t || 50,
      c = Math.max(500, s * 3),
      l = function (e, t) {
        var c = aa();
        t || c - a > s
          ? ((i = r), (r = e), (o = a), (a = c))
          : n
            ? (r += e)
            : (r = i + ((e - i) / (c - o)) * (a - o));
      };
    return {
      update: l,
      reset: function () {
        ((i = r = n ? 0 : r), (o = a = 0));
      },
      getVelocity: function (e) {
        var t = o,
          s = i,
          u = aa();
        return (
          (e || e === 0) && e !== r && l(e),
          a === o || u - o > c
            ? 0
            : ((r + (n ? s : -s)) / ((n ? u : a) - t)) * 1e3
        );
      },
    };
  },
  Sa = function (e, t) {
    return (
      t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Ca = function (e) {
    var t = Math.max.apply(Math, e),
      n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n;
  },
  wa = function () {
    ((Xi = Hi.core.globals().ScrollTrigger), Xi && Xi.core && sa());
  },
  Ta = function (e) {
    return (
      (Hi = e || ta()),
      !Ui &&
        Hi &&
        typeof document < `u` &&
        document.body &&
        ((Wi = window),
        (Gi = document),
        (Ki = Gi.documentElement),
        (qi = Gi.body),
        (Zi = [Wi, Gi, Ki, qi]),
        Hi.utils.clamp,
        (ea = Hi.core.context || function () {}),
        (Yi = `onpointerenter` in qi ? `pointer` : `mouse`),
        (Ji = Ea.isTouch =
          Wi.matchMedia &&
          Wi.matchMedia(`(hover: none), (pointer: coarse)`).matches
            ? 1
            : `ontouchstart` in Wi ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        ($i = Ea.eventTypes =
          (
            `ontouchstart` in Ki
              ? `touchstart,touchmove,touchcancel,touchend`
              : `onpointerdown` in Ki
                ? `pointerdown,pointermove,pointercancel,pointerup`
                : `mousedown,mousemove,mouseup,mouseup`
          ).split(`,`)),
        setTimeout(function () {
          return (na = 0);
        }, 500),
        (Ui = 1)),
      Xi || wa(),
      Ui
    );
  };
((ga.op = _a), (G.cache = 0));
var Ea = (function () {
  function e(e) {
    this.init(e);
  }
  var t = e.prototype;
  return (
    (t.init = function (e) {
      (Ui || Ta(Hi) || console.warn(`Please gsap.registerPlugin(Observer)`),
        Xi || wa());
      var t = e.tolerance,
        n = e.dragMinimum,
        r = e.type,
        i = e.target,
        a = e.lineHeight,
        o = e.debounce,
        s = e.preventDefault,
        c = e.onStop,
        l = e.onStopDelay,
        u = e.ignore,
        d = e.wheelSpeed,
        f = e.event,
        p = e.onDragStart,
        m = e.onDragEnd,
        h = e.onDrag,
        g = e.onPress,
        _ = e.onRelease,
        v = e.onRight,
        y = e.onLeft,
        b = e.onUp,
        x = e.onDown,
        S = e.onChangeX,
        C = e.onChangeY,
        w = e.onChange,
        T = e.onToggleX,
        E = e.onToggleY,
        D = e.onHover,
        O = e.onHoverEnd,
        k = e.onMove,
        A = e.ignoreCheck,
        j = e.isNormalizer,
        M = e.onGestureStart,
        ee = e.onGestureEnd,
        N = e.onWheel,
        te = e.onEnable,
        P = e.onDisable,
        F = e.onClick,
        I = e.scrollSpeed,
        ne = e.capture,
        re = e.allowClicks,
        L = e.lockAxis,
        R = e.onLockAxis;
      ((this.target = i = va(i) || Ki),
        (this.vars = e),
        (u &&= Hi.utils.toArray(u)),
        (t ||= 1e-9),
        (n ||= 0),
        (d ||= 1),
        (I ||= 1),
        (r ||= `wheel,touch,pointer`),
        (o = o !== !1),
        (a ||= parseFloat(Wi.getComputedStyle(qi).lineHeight) || 22));
      var z,
        ie,
        ae,
        oe,
        se,
        ce,
        le,
        B = this,
        ue = 0,
        de = 0,
        fe = e.passive || (!s && e.passive !== !1),
        pe = ba(i, ga),
        me = ba(i, _a),
        he = pe(),
        ge = me(),
        _e =
          ~r.indexOf(`touch`) &&
          !~r.indexOf(`pointer`) &&
          $i[0] === `pointerdown`,
        ve = la(i),
        V = i.ownerDocument || Gi,
        ye = [0, 0, 0],
        be = [0, 0, 0],
        xe = 0,
        Se = function () {
          return (xe = aa());
        },
        Ce = function (e, t) {
          return (
            ((B.event = e) && u && ya(e.target, u)) ||
            (t && _e && e.pointerType !== `touch`) ||
            (A && A(e, t))
          );
        },
        we = function () {
          (B._vx.reset(), B._vy.reset(), ie.pause(), c && c(B));
        },
        Te = function () {
          var e = (B.deltaX = Ca(ye)),
            n = (B.deltaY = Ca(be)),
            r = Math.abs(e) >= t,
            i = Math.abs(n) >= t;
          (w && (r || i) && w(B, e, n, ye, be),
            r &&
              (v && B.deltaX > 0 && v(B),
              y && B.deltaX < 0 && y(B),
              S && S(B),
              T && B.deltaX < 0 != ue < 0 && T(B),
              (ue = B.deltaX),
              (ye[0] = ye[1] = ye[2] = 0)),
            i &&
              (x && B.deltaY > 0 && x(B),
              b && B.deltaY < 0 && b(B),
              C && C(B),
              E && B.deltaY < 0 != de < 0 && E(B),
              (de = B.deltaY),
              (be[0] = be[1] = be[2] = 0)),
            (oe || ae) &&
              (k && k(B),
              (ae &&= (p && ae === 1 && p(B), h && h(B), 0)),
              (oe = !1)),
            ce && !(ce = !1) && R && R(B),
            (se &&= (N(B), !1)),
            (z = 0));
        },
        Ee = function (e, t, n) {
          ((ye[n] += e),
            (be[n] += t),
            B._vx.update(e),
            B._vy.update(t),
            o ? (z ||= requestAnimationFrame(Te)) : Te());
        },
        De = function (e, t) {
          (L &&
            !le &&
            ((B.axis = le = Math.abs(e) > Math.abs(t) ? `x` : `y`), (ce = !0)),
            le !== `y` && ((ye[2] += e), B._vx.update(e, !0)),
            le !== `x` && ((be[2] += t), B._vy.update(t, !0)),
            o ? (z ||= requestAnimationFrame(Te)) : Te());
        },
        Oe = function (e) {
          if (!Ce(e, 1)) {
            e = Sa(e, s);
            var t = e.clientX,
              r = e.clientY,
              i = t - B.x,
              a = r - B.y,
              o = B.isDragging;
            ((B.x = t),
              (B.y = r),
              (o ||
                ((i || a) &&
                  (Math.abs(B.startX - t) >= n ||
                    Math.abs(B.startY - r) >= n))) &&
                ((ae ||= o ? 2 : 1), o || (B.isDragging = !0), De(i, a)));
          }
        },
        ke = (B.onPress = function (e) {
          Ce(e, 1) ||
            (e && e.button) ||
            ((B.axis = le = null),
            ie.pause(),
            (B.isPressed = !0),
            (e = Sa(e)),
            (ue = de = 0),
            (B.startX = B.x = e.clientX),
            (B.startY = B.y = e.clientY),
            B._vx.reset(),
            B._vy.reset(),
            ua(j ? i : V, $i[1], Oe, fe, !0),
            (B.deltaX = B.deltaY = 0),
            g && g(B));
        }),
        Ae = (B.onRelease = function (e) {
          if (!Ce(e, 1)) {
            da(j ? i : V, $i[1], Oe, !0);
            var t = !isNaN(B.y - B.startY),
              n = B.isDragging,
              r =
                n &&
                (Math.abs(B.x - B.startX) > 3 || Math.abs(B.y - B.startY) > 3),
              a = Sa(e);
            (!r &&
              t &&
              (B._vx.reset(),
              B._vy.reset(),
              s &&
                re &&
                Hi.delayedCall(0.08, function () {
                  if (aa() - xe > 300 && !e.defaultPrevented) {
                    if (e.target.click) e.target.click();
                    else if (V.createEvent) {
                      var t = V.createEvent(`MouseEvents`);
                      (t.initMouseEvent(
                        `click`,
                        !0,
                        !0,
                        Wi,
                        1,
                        a.screenX,
                        a.screenY,
                        a.clientX,
                        a.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        e.target.dispatchEvent(t));
                    }
                  }
                })),
              (B.isDragging = B.isGesturing = B.isPressed = !1),
              c && n && !j && ie.restart(!0),
              ae && Te(),
              m && n && m(B),
              _ && _(B, r));
          }
        }),
        H = function (e) {
          return (
            e.touches &&
            e.touches.length > 1 &&
            (B.isGesturing = !0) &&
            M(e, B.isDragging)
          );
        },
        je = function () {
          return (B.isGesturing = !1) || ee(B);
        },
        Me = function (e) {
          if (!Ce(e)) {
            var t = pe(),
              n = me();
            (Ee((t - he) * I, (n - ge) * I, 1),
              (he = t),
              (ge = n),
              c && ie.restart(!0));
          }
        },
        Ne = function (e) {
          if (!Ce(e)) {
            ((e = Sa(e, s)), N && (se = !0));
            var t =
              (e.deltaMode === 1 ? a : e.deltaMode === 2 ? Wi.innerHeight : 1) *
              d;
            (Ee(e.deltaX * t, e.deltaY * t, 0), c && !j && ie.restart(!0));
          }
        },
        Pe = function (e) {
          if (!Ce(e)) {
            var t = e.clientX,
              n = e.clientY,
              r = t - B.x,
              i = n - B.y;
            ((B.x = t),
              (B.y = n),
              (oe = !0),
              c && ie.restart(!0),
              (r || i) && De(r, i));
          }
        },
        Fe = function (e) {
          ((B.event = e), D(B));
        },
        Ie = function (e) {
          ((B.event = e), O(B));
        },
        Le = function (e) {
          return Ce(e) || (Sa(e, s) && F(B));
        };
      ((ie = B._dc = Hi.delayedCall(l || 0.25, we).pause()),
        (B.deltaX = B.deltaY = 0),
        (B._vx = xa(0, 50, !0)),
        (B._vy = xa(0, 50, !0)),
        (B.scrollX = pe),
        (B.scrollY = me),
        (B.isDragging = B.isGesturing = B.isPressed = !1),
        ea(this),
        (B.enable = function (e) {
          return (
            B.isEnabled ||
              (ua(ve ? V : i, `scroll`, ma),
              r.indexOf(`scroll`) >= 0 && ua(ve ? V : i, `scroll`, Me, fe, ne),
              r.indexOf(`wheel`) >= 0 && ua(i, `wheel`, Ne, fe, ne),
              ((r.indexOf(`touch`) >= 0 && Ji) || r.indexOf(`pointer`) >= 0) &&
                (ua(i, $i[0], ke, fe, ne),
                ua(V, $i[2], Ae),
                ua(V, $i[3], Ae),
                re && ua(i, `click`, Se, !0, !0),
                F && ua(i, `click`, Le),
                M && ua(V, `gesturestart`, H),
                ee && ua(V, `gestureend`, je),
                D && ua(i, Yi + `enter`, Fe),
                O && ua(i, Yi + `leave`, Ie),
                k && ua(i, Yi + `move`, Pe)),
              (B.isEnabled = !0),
              (B.isDragging = B.isGesturing = B.isPressed = oe = ae = !1),
              B._vx.reset(),
              B._vy.reset(),
              (he = pe()),
              (ge = me()),
              e && e.type && ke(e),
              te && te(B)),
            B
          );
        }),
        (B.disable = function () {
          B.isEnabled &&
            (ra.filter(function (e) {
              return e !== B && la(e.target);
            }).length || da(ve ? V : i, `scroll`, ma),
            B.isPressed &&
              (B._vx.reset(), B._vy.reset(), da(j ? i : V, $i[1], Oe, !0)),
            da(ve ? V : i, `scroll`, Me, ne),
            da(i, `wheel`, Ne, ne),
            da(i, $i[0], ke, ne),
            da(V, $i[2], Ae),
            da(V, $i[3], Ae),
            da(i, `click`, Se, !0),
            da(i, `click`, Le),
            da(V, `gesturestart`, H),
            da(V, `gestureend`, je),
            da(i, Yi + `enter`, Fe),
            da(i, Yi + `leave`, Ie),
            da(i, Yi + `move`, Pe),
            (B.isEnabled = B.isPressed = B.isDragging = !1),
            P && P(B));
        }),
        (B.kill = B.revert =
          function () {
            B.disable();
            var e = ra.indexOf(B);
            (e >= 0 && ra.splice(e, 1), Qi === B && (Qi = 0));
          }),
        ra.push(B),
        j && la(i) && (Qi = B),
        B.enable(f));
    }),
    Vi(e, [
      {
        key: `velocityX`,
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: `velocityY`,
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    e
  );
})();
((Ea.version = `3.15.0`),
  (Ea.create = function (e) {
    return new Ea(e);
  }),
  (Ea.register = Ta),
  (Ea.getAll = function () {
    return ra.slice();
  }),
  (Ea.getById = function (e) {
    return ra.filter(function (t) {
      return t.vars.id === e;
    })[0];
  }),
  ta() && Hi.registerPlugin(Ea));
var K,
  Da,
  q,
  Oa,
  ka,
  J,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  Y = 1,
  X = Date.now,
  io = X(),
  ao = 0,
  oo = 0,
  so = function (e, t, n) {
    var r = wo(e) && (e.substr(0, 6) === `clamp(` || e.indexOf(`max`) > -1);
    return ((n[`_` + t + `Clamp`] = r), r ? e.substr(6, e.length - 7) : e);
  },
  co = function (e, t) {
    return t && (!wo(e) || e.substr(0, 6) !== `clamp(`)
      ? `clamp(` + e + `)`
      : e;
  },
  lo = function e() {
    return oo && requestAnimationFrame(e);
  },
  uo = function () {
    return (La = 1);
  },
  fo = function () {
    return (La = 0);
  },
  po = function (e) {
    return e;
  },
  mo = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  ho = function () {
    return typeof window < `u`;
  },
  go = function () {
    return K || (ho() && (K = window.gsap) && K.registerPlugin && K);
  },
  _o = function (e) {
    return !!~Aa.indexOf(e);
  },
  vo = function (e) {
    return (
      (e === `Height` ? eo : q[`inner` + e]) ||
      ka[`client` + e] ||
      J[`client` + e]
    );
  },
  yo = function (e) {
    return (
      ca(e, `getBoundingClientRect`) ||
      (_o(e)
        ? function () {
            return ((Gs.width = q.innerWidth), (Gs.height = eo), Gs);
          }
        : function () {
            return Yo(e);
          })
    );
  },
  bo = function (e, t, n) {
    var r = n.d,
      i = n.d2,
      a = n.a;
    return (a = ca(e, `getBoundingClientRect`))
      ? function () {
          return a()[r];
        }
      : function () {
          return (t ? vo(i) : e[`client` + i]) || 0;
        };
  },
  xo = function (e, t) {
    return !t || ~ia.indexOf(e)
      ? yo(e)
      : function () {
          return Gs;
        };
  },
  So = function (e, t) {
    var n = t.s,
      r = t.d2,
      i = t.d,
      a = t.a;
    return Math.max(
      0,
      (n = `scroll` + r) && (a = ca(e, n))
        ? a() - yo(e)()[i]
        : _o(e)
          ? (ka[n] || J[n]) - vo(r)
          : e[n] - e[`offset` + r],
    );
  },
  Co = function (e, t) {
    for (var n = 0; n < Ha.length; n += 3)
      (!t || ~t.indexOf(Ha[n + 1])) && e(Ha[n], Ha[n + 1], Ha[n + 2]);
  },
  wo = function (e) {
    return typeof e == `string`;
  },
  To = function (e) {
    return typeof e == `function`;
  },
  Eo = function (e) {
    return typeof e == `number`;
  },
  Do = function (e) {
    return typeof e == `object`;
  },
  Oo = function (e, t, n) {
    return e && e.progress(+!t) && n && e.pause();
  },
  ko = function (e, t, n) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return t(e, n);
          })
        : t(e, n);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  Ao = Math.abs,
  jo = `left`,
  Mo = `top`,
  No = `right`,
  Po = `bottom`,
  Fo = `width`,
  Io = `height`,
  Lo = `Right`,
  Ro = `Left`,
  zo = `Top`,
  Bo = `Bottom`,
  Vo = `padding`,
  Ho = `margin`,
  Uo = `Width`,
  Wo = `Height`,
  Go = `px`,
  Ko = function (e) {
    return q.getComputedStyle(
      e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e,
    );
  },
  qo = function (e) {
    var t = Ko(e).position;
    e.style.position = t === `absolute` || t === `fixed` ? t : `relative`;
  },
  Jo = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  Yo = function (e, t) {
    var n =
        t &&
        Ko(e)[Ra] !== `matrix(1, 0, 0, 1, 0, 0)` &&
        K.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      r = e.getBoundingClientRect
        ? e.getBoundingClientRect()
        : e.scrollingElement.getBoundingClientRect();
    return (n && n.progress(0).kill(), r);
  },
  Xo = function (e, t) {
    var n = t.d2;
    return e[`offset` + n] || e[`client` + n] || 0;
  },
  Zo = function (e) {
    var t = [],
      n = e.labels,
      r = e.duration(),
      i;
    for (i in n) t.push(n[i] / r);
    return t;
  },
  Qo = function (e) {
    return function (t) {
      return K.utils.snap(Zo(e), t);
    };
  },
  $o = function (e) {
    var t = K.utils.snap(e),
      n =
        Array.isArray(e) &&
        e.slice(0).sort(function (e, t) {
          return e - t;
        });
    return n
      ? function (e, r, i) {
          i === void 0 && (i = 0.001);
          var a;
          if (!r) return t(e);
          if (r > 0) {
            for (e -= i, a = 0; a < n.length; a++) if (n[a] >= e) return n[a];
            return n[a - 1];
          } else for (a = n.length, e += i; a--; ) if (n[a] <= e) return n[a];
          return n[0];
        }
      : function (n, r, i) {
          i === void 0 && (i = 0.001);
          var a = t(n);
          return !r || Math.abs(a - n) < i || a - n < 0 == r < 0
            ? a
            : t(r < 0 ? n - e : n + e);
        };
  },
  es = function (e) {
    return function (t, n) {
      return $o(Zo(e))(t, n.direction);
    };
  },
  ts = function (e, t, n, r) {
    return n.split(`,`).forEach(function (n) {
      return e(t, n, r);
    });
  },
  ns = function (e, t, n, r, i) {
    return e.addEventListener(t, n, { passive: !r, capture: !!i });
  },
  rs = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  is = function (e, t, n) {
    ((n &&= n.wheelHandler), n && (e(t, `wheel`, n), e(t, `touchmove`, n)));
  },
  as = {
    startColor: `green`,
    endColor: `red`,
    indent: 0,
    fontSize: `16px`,
    fontWeight: `normal`,
  },
  os = { toggleActions: `play`, anticipatePin: 0 },
  ss = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  cs = function (e, t) {
    if (wo(e)) {
      var n = e.indexOf(`=`),
        r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
      (~n && (e.indexOf(`%`) > n && (r *= t / 100), (e = e.substr(0, n - 1))),
        (e =
          r +
          (e in ss
            ? ss[e] * t
            : ~e.indexOf(`%`)
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0)));
    }
    return e;
  },
  ls = function (e, t, n, r, i, a, o, s) {
    var c = i.startColor,
      l = i.endColor,
      u = i.fontSize,
      d = i.indent,
      f = i.fontWeight,
      p = Oa.createElement(`div`),
      m = _o(n) || ca(n, `pinType`) === `fixed`,
      h = e.indexOf(`scroller`) !== -1,
      g = m ? J : n.tagName === `IFRAME` ? n.contentDocument.body : n,
      _ = e.indexOf(`start`) !== -1,
      v = _ ? c : l,
      y =
        `border-color:` +
        v +
        `;font-size:` +
        u +
        `;color:` +
        v +
        `;font-weight:` +
        f +
        `;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;
    return (
      (y += `position:` + ((h || s) && m ? `fixed;` : `absolute;`)),
      (h || s || !m) &&
        (y += (r === _a ? No : Po) + `:` + (a + parseFloat(d)) + `px;`),
      o &&
        (y +=
          `box-sizing:border-box;text-align:left;width:` +
          o.offsetWidth +
          `px;`),
      (p._isStart = _),
      p.setAttribute(`class`, `gsap-marker-` + e + (t ? ` marker-` + t : ``)),
      (p.style.cssText = y),
      (p.innerText = t || t === 0 ? e + `-` + t : e),
      g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
      (p._offset = p[`offset` + r.op.d2]),
      us(p, 0, r, _),
      p
    );
  },
  us = function (e, t, n, r) {
    var i = { display: `block` },
      a = n[r ? `os2` : `p2`],
      o = n[r ? `p2` : `os2`];
    ((e._isFlipped = r),
      (i[n.a + `Percent`] = r ? -100 : 0),
      (i[n.a] = r ? `1px` : 0),
      (i[`border` + a + Uo] = 1),
      (i[`border` + o + Uo] = 0),
      (i[n.p] = t + `px`),
      K.set(e, i));
  },
  Z = [],
  ds = {},
  fs,
  ps = function () {
    return X() - ao > 34 && (fs ||= requestAnimationFrame(Is));
  },
  ms = function () {
    (!Ka || !Ka.isPressed || Ka.startX > J.clientWidth) &&
      (G.cache++,
      Ka ? (fs ||= requestAnimationFrame(Is)) : Is(),
      ao || bs(`scrollStart`),
      (ao = X()));
  },
  hs = function () {
    ((Ya = q.innerWidth), (Ja = q.innerHeight));
  },
  gs = function (e) {
    (G.cache++,
      (e === !0 ||
        (!Ia &&
          !Ga &&
          !Oa.fullscreenElement &&
          !Oa.webkitFullscreenElement &&
          (!qa ||
            Ya !== q.innerWidth ||
            Math.abs(q.innerHeight - Ja) > q.innerHeight * 0.25))) &&
        ja.restart(!0));
  },
  _s = {},
  vs = [],
  ys = function e() {
    return rs(Q, `scrollEnd`, e) || Ms(!0);
  },
  bs = function (e) {
    return (
      (_s[e] &&
        _s[e].map(function (e) {
          return e();
        })) ||
      vs
    );
  },
  xs = [],
  Ss = function (e) {
    for (var t = 0; t < xs.length; t += 5)
      (!e || (xs[t + 4] && xs[t + 4].query === e)) &&
        ((xs[t].style.cssText = xs[t + 1]),
        xs[t].getBBox && xs[t].setAttribute(`transform`, xs[t + 2] || ``),
        (xs[t + 3].uncache = 1));
  },
  Cs = function () {
    return G.forEach(function (e) {
      return To(e) && ++e.cacheID && (e.rec = e());
    });
  },
  ws = function (e, t) {
    var n;
    for (za = 0; za < Z.length; za++)
      ((n = Z[za]),
        n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0)));
    ((to = !0), t && Ss(t), t || bs(`revert`));
  },
  Ts = function (e, t) {
    (G.cache++,
      (t || !Es) &&
        G.forEach(function (e) {
          return To(e) && e.cacheID++ && (e.rec = 0);
        }),
      wo(e) && (q.history.scrollRestoration = Qa = e));
  },
  Es,
  Ds = 0,
  Os,
  ks = function () {
    if (Os !== Ds) {
      var e = (Os = Ds);
      requestAnimationFrame(function () {
        return e === Ds && Ms(!0);
      });
    }
  },
  As = function () {
    (J.appendChild($a),
      (eo = (!Ka && $a.offsetHeight) || q.innerHeight),
      J.removeChild($a));
  },
  js = function (e) {
    return Ma(
      `.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`,
    ).forEach(function (t) {
      return (t.style.display = e ? `none` : `block`);
    });
  },
  Ms = function (e, t) {
    if (
      ((ka = Oa.documentElement),
      (J = Oa.body),
      (Aa = [q, Oa, ka, J]),
      ao && !e && !to)
    ) {
      ns(Q, `scrollEnd`, ys);
      return;
    }
    (As(), (Es = Q.isRefreshing = !0), to || Cs());
    var n = bs(`refreshInit`);
    (Ua && Q.sort(),
      t || ws(),
      G.forEach(function (e) {
        To(e) && (e.smooth && (e.target.style.scrollBehavior = `auto`), e(0));
      }),
      Z.slice(0).forEach(function (e) {
        return e.refresh();
      }),
      (to = !1),
      Z.forEach(function (e) {
        if (e._subPinOffset && e.pin) {
          var t = e.vars.horizontal ? `offsetWidth` : `offsetHeight`,
            n = e.pin[t];
          (e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh());
        }
      }),
      (no = 1),
      js(!0),
      Z.forEach(function (e) {
        var t = So(e.scroller, e._dir),
          n = e.vars.end === `max` || (e._endClamp && e.end > t),
          r = e._startClamp && e.start >= t;
        (n || r) &&
          e.setPositions(
            r ? t - 1 : e.start,
            n ? Math.max(r ? t : e.start + 1, t) : e.end,
            !0,
          );
      }),
      js(!1),
      (no = 0),
      n.forEach(function (e) {
        return e && e.render && e.render(-1);
      }),
      G.forEach(function (e) {
        To(e) &&
          (e.smooth &&
            requestAnimationFrame(function () {
              return (e.target.style.scrollBehavior = `smooth`);
            }),
          e.rec && e(e.rec));
      }),
      Ts(Qa, 1),
      ja.pause(),
      Ds++,
      (Es = 2),
      Is(2),
      Z.forEach(function (e) {
        return To(e.vars.onRefresh) && e.vars.onRefresh(e);
      }),
      (Es = Q.isRefreshing = !1),
      bs(`refresh`));
  },
  Ns = 0,
  Ps = 1,
  Fs,
  Is = function (e) {
    if (e === 2 || (!Es && !to)) {
      ((Q.isUpdating = !0), Fs && Fs.update(0));
      var t = Z.length,
        n = X(),
        r = n - io >= 50,
        i = t && Z[0].scroll();
      if (
        ((Ps = Ns > i ? -1 : 1),
        Es || (Ns = i),
        r &&
          (ao && !La && n - ao > 200 && ((ao = 0), bs(`scrollEnd`)),
          (Pa = io),
          (io = n)),
        Ps < 0)
      ) {
        for (za = t; za-- > 0; ) Z[za] && Z[za].update(0, r);
        Ps = 1;
      } else for (za = 0; za < t; za++) Z[za] && Z[za].update(0, r);
      Q.isUpdating = !1;
    }
    fs = 0;
  },
  Ls = [
    jo,
    Mo,
    Po,
    No,
    Ho + Bo,
    Ho + Lo,
    Ho + zo,
    Ho + Ro,
    `display`,
    `flexShrink`,
    `float`,
    `zIndex`,
    `gridColumnStart`,
    `gridColumnEnd`,
    `gridRowStart`,
    `gridRowEnd`,
    `gridArea`,
    `justifySelf`,
    `alignSelf`,
    `placeSelf`,
    `order`,
  ],
  Rs = Ls.concat([
    Fo,
    Io,
    `boxSizing`,
    `max` + Uo,
    `max` + Wo,
    `position`,
    Ho,
    Vo,
    Vo + zo,
    Vo + Lo,
    Vo + Bo,
    Vo + Ro,
  ]),
  zs = function (e, t, n) {
    Hs(n);
    var r = e._gsap;
    if (r.spacerIsNative) Hs(r.spacerState);
    else if (e._gsap.swappedIn) {
      var i = t.parentNode;
      i && (i.insertBefore(e, t), i.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  Bs = function (e, t, n, r) {
    if (!e._gsap.swappedIn) {
      for (var i = Ls.length, a = t.style, o = e.style, s; i--; )
        ((s = Ls[i]), (a[s] = n[s]));
      ((a.position = n.position === `absolute` ? `absolute` : `relative`),
        n.display === `inline` && (a.display = `inline-block`),
        (o[Po] = o[No] = `auto`),
        (a.flexBasis = n.flexBasis || `auto`),
        (a.overflow = `visible`),
        (a.boxSizing = `border-box`),
        (a[Fo] = Xo(e, ga) + Go),
        (a[Io] = Xo(e, _a) + Go),
        (a[Vo] = o[Ho] = o[Mo] = o[jo] = `0`),
        Hs(r),
        (o[Fo] = o[`max` + Uo] = n[Fo]),
        (o[Io] = o[`max` + Wo] = n[Io]),
        (o[Vo] = n[Vo]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0));
    }
  },
  Vs = /([A-Z])/g,
  Hs = function (e) {
    if (e) {
      var t = e.t.style,
        n = e.length,
        r = 0,
        i,
        a;
      for ((e.t._gsap || K.core.getCache(e.t)).uncache = 1; r < n; r += 2)
        ((a = e[r + 1]),
          (i = e[r]),
          a
            ? (t[i] = a)
            : t[i] && t.removeProperty(i.replace(Vs, `-$1`).toLowerCase()));
    }
  },
  Us = function (e) {
    for (var t = Rs.length, n = e.style, r = [], i = 0; i < t; i++)
      r.push(Rs[i], n[Rs[i]]);
    return ((r.t = e), r);
  },
  Ws = function (e, t, n) {
    for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2)
      ((o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]));
    return ((r.t = e.t), r);
  },
  Gs = { left: 0, top: 0 },
  Ks = function (e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
    (To(e) && (e = e(s)),
      wo(e) &&
        e.substr(0, 3) === `max` &&
        (e = d + (e.charAt(4) === `=` ? cs(`0` + e.substr(3), n) : 0)));
    var m = f ? f.time() : 0,
      h,
      g,
      _;
    if ((f && f.seek(0), isNaN(e) || (e = +e), Eo(e)))
      (f &&
        (e = K.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          d,
          e,
        )),
        o && us(o, n, r, !0));
    else {
      To(t) && (t = t(s));
      var v = (e || `0`).split(` `),
        y,
        b,
        x,
        S;
      ((_ = va(t, s) || J),
        (y = Yo(_) || {}),
        (!y || (!y.left && !y.top)) &&
          Ko(_).display === `none` &&
          ((S = _.style.display),
          (_.style.display = `block`),
          (y = Yo(_)),
          S ? (_.style.display = S) : _.style.removeProperty(`display`)),
        (b = cs(v[0], y[r.d])),
        (x = cs(v[1] || `0`, n)),
        (e = y[r.p] - c[r.p] - l + b + i - x),
        o && us(o, x, r, n - x < 20 || (o._isStart && x > 20)),
        (n -= n - x));
    }
    if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), a)) {
      var C = e + n,
        w = a._isStart;
      ((h = `scroll` + r.d2),
        us(
          a,
          C,
          r,
          (w && C > 20) ||
            (!w && (u ? Math.max(J[h], ka[h]) : a.parentNode[h]) <= C + 1),
        ),
        u &&
          ((c = Yo(o)),
          u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Go)));
    }
    return (
      f &&
        _ &&
        ((h = Yo(_)),
        f.seek(d),
        (g = Yo(_)),
        (f._caScrollDist = h[r.p] - g[r.p]),
        (e = (e / f._caScrollDist) * d)),
      f && f.seek(m),
      f ? e : Math.round(e)
    );
  },
  qs = /(webkit|moz|length|cssText|inset)/i,
  Js = function (e, t, n, r) {
    if (e.parentNode !== t) {
      var i = e.style,
        a,
        o;
      if (t === J) {
        for (a in ((e._stOrig = i.cssText), (o = Ko(e)), o))
          !+a &&
            !qs.test(a) &&
            o[a] &&
            typeof i[a] == `string` &&
            a !== `0` &&
            (i[a] = o[a]);
        ((i.top = n), (i.left = r));
      } else i.cssText = e._stOrig;
      ((K.core.getCache(e).uncache = 1), t.appendChild(e));
    }
  },
  Ys = function (e, t, n) {
    var r = t,
      i = r;
    return function (t) {
      var a = Math.round(e());
      return (
        a !== r &&
          a !== i &&
          Math.abs(a - r) > 3 &&
          Math.abs(a - i) > 3 &&
          ((t = a), n && n()),
        (i = r),
        (r = Math.round(t)),
        r
      );
    };
  },
  Xs = function (e, t, n) {
    var r = {};
    ((r[t.p] = `+=` + n), K.set(e, r));
  },
  Zs = function (e, t) {
    var n = ba(e, t),
      r = `_scroll` + t.p2,
      i = function t(i, a, o, s, c) {
        var l = t.tween,
          u = a.onComplete,
          d = {};
        o ||= n();
        var f = Ys(n, o, function () {
          (l.kill(), (t.tween = 0));
        });
        return (
          (c = (s && c) || 0),
          (s ||= i - o),
          l && l.kill(),
          (a[r] = i),
          (a.inherit = !1),
          (a.modifiers = d),
          (d[r] = function () {
            return f(o + s * l.ratio + c * l.ratio * l.ratio);
          }),
          (a.onUpdate = function () {
            (G.cache++, t.tween && Is());
          }),
          (a.onComplete = function () {
            ((t.tween = 0), u && u.call(l));
          }),
          (l = t.tween = K.to(e, a)),
          l
        );
      };
    return (
      (e[r] = n),
      (n.wheelHandler = function () {
        return i.tween && i.tween.kill() && (i.tween = 0);
      }),
      ns(e, `wheel`, n.wheelHandler),
      Q.isTouch && ns(e, `touchmove`, n.wheelHandler),
      i
    );
  },
  Q = (function () {
    function e(t, n) {
      (Da ||
        e.register(K) ||
        console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),
        Za(this),
        this.init(t, n));
    }
    var t = e.prototype;
    return (
      (t.init = function (t, n) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !oo)
        ) {
          this.update = this.refresh = this.kill = po;
          return;
        }
        t = Jo(wo(t) || Eo(t) || t.nodeType ? { trigger: t } : t, os);
        var r = t,
          i = r.onUpdate,
          a = r.toggleClass,
          o = r.id,
          s = r.onToggle,
          c = r.onRefresh,
          l = r.scrub,
          u = r.trigger,
          d = r.pin,
          f = r.pinSpacing,
          p = r.invalidateOnRefresh,
          m = r.anticipatePin,
          h = r.onScrubComplete,
          g = r.onSnapComplete,
          _ = r.once,
          v = r.snap,
          y = r.pinReparent,
          b = r.pinSpacer,
          x = r.containerAnimation,
          S = r.fastScrollEnd,
          C = r.preventOverlaps,
          w =
            t.horizontal || (t.containerAnimation && t.horizontal !== !1)
              ? ga
              : _a,
          T = !l && l !== 0,
          E = va(t.scroller || q),
          D = K.core.getCache(E),
          O = _o(E),
          k =
            (`pinType` in t
              ? t.pinType
              : ca(E, `pinType`) || (O && `fixed`)) === `fixed`,
          A = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          j = T && t.toggleActions.split(` `),
          M = `markers` in t ? t.markers : os.markers,
          ee = O ? 0 : parseFloat(Ko(E)[`border` + w.p2 + Uo]) || 0,
          N = this,
          te =
            t.onRefreshInit &&
            function () {
              return t.onRefreshInit(N);
            },
          P = bo(E, O, w),
          F = xo(E, O),
          I = 0,
          ne = 0,
          re = 0,
          L = ba(E, w),
          R,
          z,
          ie,
          ae,
          oe,
          se,
          ce,
          le,
          B,
          ue,
          de,
          fe,
          pe,
          me,
          he,
          ge,
          _e,
          ve,
          V,
          ye,
          be,
          xe,
          Se,
          Ce,
          we,
          Te,
          Ee,
          De,
          Oe,
          ke,
          Ae,
          H,
          je,
          Me,
          Ne,
          Pe,
          Fe,
          Ie,
          Le;
        if (
          ((N._startClamp = N._endClamp = !1),
          (N._dir = w),
          (m *= 45),
          (N.scroller = E),
          (N.scroll = x ? x.time.bind(x) : L),
          (ae = L()),
          (N.vars = t),
          (n ||= t.animation),
          `refreshPriority` in t &&
            ((Ua = 1), t.refreshPriority === -9999 && (Fs = N)),
          (D.tweenScroll = D.tweenScroll || {
            top: Zs(E, _a),
            left: Zs(E, ga),
          }),
          (N.tweenTo = R = D.tweenScroll[w.p]),
          (N.scrubDuration = function (e) {
            ((je = Eo(e) && e),
              je
                ? H
                  ? H.duration(e)
                  : (H = K.to(n, {
                      ease: `expo`,
                      totalProgress: `+=0`,
                      inherit: !1,
                      duration: je,
                      paused: !0,
                      onComplete: function () {
                        return h && h(N);
                      },
                    }))
                : (H && H.progress(1).kill(), (H = 0)));
          }),
          n &&
            ((n.vars.lazy = !1),
            (n._initted && !N.isReverted) ||
              (n.vars.immediateRender !== !1 &&
                t.immediateRender !== !1 &&
                n.duration() &&
                n.render(0, !0, !0)),
            (N.animation = n.pause()),
            (n.scrollTrigger = N),
            N.scrubDuration(l),
            (ke = 0),
            (o ||= n.vars.id)),
          v &&
            ((!Do(v) || v.push) && (v = { snapTo: v }),
            `scrollBehavior` in J.style &&
              K.set(O ? [J, ka] : E, { scrollBehavior: `auto` }),
            G.forEach(function (e) {
              return (
                To(e) &&
                e.target === (O ? Oa.scrollingElement || ka : E) &&
                (e.smooth = !1)
              );
            }),
            (ie = To(v.snapTo)
              ? v.snapTo
              : v.snapTo === `labels`
                ? Qo(n)
                : v.snapTo === `labelsDirectional`
                  ? es(n)
                  : v.directional === !1
                    ? K.utils.snap(v.snapTo)
                    : function (e, t) {
                        return $o(v.snapTo)(
                          e,
                          X() - ne < 500 ? 0 : t.direction,
                        );
                      }),
            (Me = v.duration || { min: 0.1, max: 2 }),
            (Me = Do(Me) ? Na(Me.min, Me.max) : Na(Me, Me)),
            (Ne = K.delayedCall(v.delay || je / 2 || 0.1, function () {
              var e = L(),
                t = X() - ne < 500,
                r = R.tween;
              if (
                (t || Math.abs(N.getVelocity()) < 10) &&
                !r &&
                !La &&
                I !== e
              ) {
                var i = (e - se) / me,
                  a = n && !T ? n.totalProgress() : i,
                  o = t ? 0 : ((a - Ae) / (X() - Pa)) * 1e3 || 0,
                  s = K.utils.clamp(-i, 1 - i, (Ao(o / 2) * o) / 0.185),
                  c = i + (v.inertia === !1 ? 0 : s),
                  l,
                  u,
                  d = v,
                  f = d.onStart,
                  p = d.onInterrupt,
                  m = d.onComplete;
                if (
                  ((l = ie(c, N)),
                  Eo(l) || (l = c),
                  (u = Math.max(0, Math.round(se + l * me))),
                  e <= ce && e >= se && u !== e)
                ) {
                  if (r && !r._initted && r.data <= Ao(u - e)) return;
                  (v.inertia === !1 && (s = l - i),
                    R(
                      u,
                      {
                        duration: Me(
                          Ao(
                            (Math.max(Ao(c - a), Ao(l - a)) * 0.185) /
                              o /
                              0.05 || 0,
                          ),
                        ),
                        ease: v.ease || `power3`,
                        data: Ao(u - e),
                        onInterrupt: function () {
                          return Ne.restart(!0) && p && ko(N, p);
                        },
                        onComplete: function () {
                          (N.update(),
                            (I = L()),
                            n &&
                              !T &&
                              (H
                                ? H.resetTo(
                                    `totalProgress`,
                                    l,
                                    n._tTime / n._tDur,
                                  )
                                : n.progress(l)),
                            (ke = Ae =
                              n && !T ? n.totalProgress() : N.progress),
                            g && g(N),
                            m && ko(N, m));
                        },
                      },
                      e,
                      s * me,
                      u - e - s * me,
                    ),
                    f && ko(N, f, R.tween));
                }
              } else N.isActive && I !== e && Ne.restart(!0);
            }).pause())),
          o && (ds[o] = N),
          (u = N.trigger = va(u || (d !== !0 && d))),
          (Le = u && u._gsap && u._gsap.stRevert),
          (Le &&= Le(N)),
          (d = d === !0 ? u : va(d)),
          wo(a) && (a = { targets: u, className: a }),
          d &&
            (f === !1 ||
              f === Ho ||
              (f =
                !f &&
                d.parentNode &&
                d.parentNode.style &&
                Ko(d.parentNode).display === `flex`
                  ? !1
                  : Vo),
            (N.pin = d),
            (z = K.core.getCache(d)),
            z.spacer
              ? (he = z.pinState)
              : (b &&
                  ((b = va(b)),
                  b && !b.nodeType && (b = b.current || b.nativeElement),
                  (z.spacerIsNative = !!b),
                  b && (z.spacerState = Us(b))),
                (z.spacer = ve = b || Oa.createElement(`div`)),
                ve.classList.add(`pin-spacer`),
                o && ve.classList.add(`pin-spacer-` + o),
                (z.pinState = he = Us(d))),
            t.force3D !== !1 && K.set(d, { force3D: !0 }),
            (N.spacer = ve = z.spacer),
            (Oe = Ko(d)),
            (Ce = Oe[f + w.os2]),
            (ye = K.getProperty(d)),
            (be = K.quickSetter(d, w.a, Go)),
            Bs(d, ve, Oe),
            (_e = Us(d))),
          M)
        ) {
          ((fe = Do(M) ? Jo(M, as) : as),
            (ue = ls(`scroller-start`, o, E, w, fe, 0)),
            (de = ls(`scroller-end`, o, E, w, fe, 0, ue)),
            (V = ue[`offset` + w.op.d2]));
          var Re = va(ca(E, `content`) || E);
          ((le = this.markerStart = ls(`start`, o, Re, w, fe, V, 0, x)),
            (B = this.markerEnd = ls(`end`, o, Re, w, fe, V, 0, x)),
            x && (Ie = K.quickSetter([le, B], w.a, Go)),
            !k &&
              !(ia.length && ca(E, `fixedMarkers`) === !0) &&
              (qo(O ? J : E),
              K.set([ue, de], { force3D: !0 }),
              (Te = K.quickSetter(ue, w.a, Go)),
              (De = K.quickSetter(de, w.a, Go))));
        }
        if (x) {
          var ze = x.vars.onUpdate,
            Be = x.vars.onUpdateParams;
          x.eventCallback(`onUpdate`, function () {
            (N.update(0, 0, 1), ze && ze.apply(x, Be || []));
          });
        }
        if (
          ((N.previous = function () {
            return Z[Z.indexOf(N) - 1];
          }),
          (N.next = function () {
            return Z[Z.indexOf(N) + 1];
          }),
          (N.revert = function (e, t) {
            if (!t) return N.kill(!0);
            var r = e !== !1 || !N.enabled,
              i = Ia;
            r !== N.isReverted &&
              (r &&
                ((Pe = Math.max(L(), N.scroll.rec || 0)),
                (re = N.progress),
                (Fe = n && n.progress())),
              le &&
                [le, B, ue, de].forEach(function (e) {
                  return (e.style.display = r ? `none` : `block`);
                }),
              r && ((Ia = N), N.update(r)),
              d &&
                (!y || !N.isActive) &&
                (r ? zs(d, ve, he) : Bs(d, ve, Ko(d), we)),
              r || N.update(r),
              (Ia = i),
              (N.isReverted = r));
          }),
          (N.refresh = function (r, i, a, o) {
            if (!((Ia || !N.enabled) && !i)) {
              if (d && r && ao) {
                ns(e, `scrollEnd`, ys);
                return;
              }
              (!Es && te && te(N),
                (Ia = N),
                R.tween && !a && (R.tween.kill(), (R.tween = 0)),
                H && H.pause(),
                p &&
                  n &&
                  (n.revert({ kill: !1 }).invalidate(),
                  n.getChildren
                    ? n.getChildren(!0, !0, !1).forEach(function (e) {
                        return e.vars.immediateRender && e.render(0, !0, !0);
                      })
                    : n.vars.immediateRender && n.render(0, !0, !0)),
                N.isReverted || N.revert(!0, !0),
                (N._subPinOffset = !1));
              var s = P(),
                l = F(),
                m = x ? x.duration() : So(E, w),
                h = me <= 0.01 || !me,
                g = 0,
                _ = o || 0,
                v = Do(a) ? a.end : t.end,
                b = t.endTrigger || u,
                S = Do(a)
                  ? a.start
                  : t.start || (t.start === 0 || !u ? 0 : d ? `0 0` : `0 100%`),
                C = (N.pinnedContainer =
                  t.pinnedContainer && va(t.pinnedContainer, N)),
                D = (u && Math.max(0, Z.indexOf(N))) || 0,
                A = D,
                j,
                z,
                ie,
                fe,
                V,
                be,
                Ce,
                Te,
                De,
                Oe,
                ke,
                Ae,
                je;
              for (
                M &&
                Do(a) &&
                ((Ae = K.getProperty(ue, w.p)), (je = K.getProperty(de, w.p)));
                A-- > 0;
              )
                ((be = Z[A]),
                  be.end || be.refresh(0, 1) || (Ia = N),
                  (Ce = be.pin),
                  Ce &&
                    (Ce === u || Ce === d || Ce === C) &&
                    !be.isReverted &&
                    ((Oe ||= []), Oe.unshift(be), be.revert(!0, !0)),
                  be !== Z[A] && (D--, A--));
              for (
                To(S) && (S = S(N)),
                  S = so(S, `start`, N),
                  se =
                    Ks(
                      S,
                      u,
                      s,
                      w,
                      L(),
                      le,
                      ue,
                      N,
                      l,
                      ee,
                      k,
                      m,
                      x,
                      N._startClamp && `_startClamp`,
                    ) || (d ? -0.001 : 0),
                  To(v) && (v = v(N)),
                  wo(v) &&
                    !v.indexOf(`+=`) &&
                    (~v.indexOf(` `)
                      ? (v = (wo(S) ? S.split(` `)[0] : ``) + v)
                      : ((g = cs(v.substr(2), s)),
                        (v = wo(S)
                          ? S
                          : (x
                              ? K.utils.mapRange(
                                  0,
                                  x.duration(),
                                  x.scrollTrigger.start,
                                  x.scrollTrigger.end,
                                  se,
                                )
                              : se) + g),
                        (b = u))),
                  v = so(v, `end`, N),
                  ce =
                    Math.max(
                      se,
                      Ks(
                        v || (b ? `100% 0` : m),
                        b,
                        s,
                        w,
                        L() + g,
                        B,
                        de,
                        N,
                        l,
                        ee,
                        k,
                        m,
                        x,
                        N._endClamp && `_endClamp`,
                      ),
                    ) || -0.001,
                  g = 0,
                  A = D;
                A--;
              )
                ((be = Z[A] || {}),
                  (Ce = be.pin),
                  Ce &&
                    be.start - be._pinPush <= se &&
                    !x &&
                    be.end > 0 &&
                    ((j =
                      be.end -
                      (N._startClamp ? Math.max(0, be.start) : be.start)),
                    ((Ce === u && be.start - be._pinPush < se) || Ce === C) &&
                      isNaN(S) &&
                      (g += j * (1 - be.progress)),
                    Ce === d && (_ += j)));
              if (
                ((se += g),
                (ce += g),
                N._startClamp && (N._startClamp += g),
                N._endClamp &&
                  !Es &&
                  ((N._endClamp = ce || -0.001), (ce = Math.min(ce, So(E, w)))),
                (me = ce - se || ((se -= 0.01) && 0.001)),
                h && (re = K.utils.clamp(0, 1, K.utils.normalize(se, ce, Pe))),
                (N._pinPush = _),
                le &&
                  g &&
                  ((j = {}),
                  (j[w.a] = `+=` + g),
                  C && (j[w.p] = `-=` + L()),
                  K.set([le, B], j)),
                d && !(no && N.end >= So(E, w)))
              )
                ((j = Ko(d)),
                  (fe = w === _a),
                  (ie = L()),
                  (xe = parseFloat(ye(w.a)) + _),
                  !m &&
                    ce > 1 &&
                    ((ke = (O ? Oa.scrollingElement || ka : E).style),
                    (ke = {
                      style: ke,
                      value: ke[`overflow` + w.a.toUpperCase()],
                    }),
                    O &&
                      Ko(J)[`overflow` + w.a.toUpperCase()] !== `scroll` &&
                      (ke.style[`overflow` + w.a.toUpperCase()] = `scroll`)),
                  Bs(d, ve, j),
                  (_e = Us(d)),
                  (z = Yo(d, !0)),
                  (Te = k && ba(E, fe ? ga : _a)()),
                  f
                    ? ((we = [f + w.os2, me + _ + Go]),
                      (we.t = ve),
                      (A = f === Vo ? Xo(d, w) + me + _ : 0),
                      A &&
                        (we.push(w.d, A + Go),
                        ve.style.flexBasis !== `auto` &&
                          (ve.style.flexBasis = A + Go)),
                      Hs(we),
                      C &&
                        Z.forEach(function (e) {
                          e.pin === C &&
                            e.vars.pinSpacing !== !1 &&
                            (e._subPinOffset = !0);
                        }),
                      k && L(Pe))
                    : ((A = Xo(d, w)),
                      A &&
                        ve.style.flexBasis !== `auto` &&
                        (ve.style.flexBasis = A + Go)),
                  k &&
                    ((V = {
                      top: z.top + (fe ? ie - se : Te) + Go,
                      left: z.left + (fe ? Te : ie - se) + Go,
                      boxSizing: `border-box`,
                      position: `fixed`,
                    }),
                    (V[Fo] = V[`max` + Uo] = Math.ceil(z.width) + Go),
                    (V[Io] = V[`max` + Wo] = Math.ceil(z.height) + Go),
                    (V[Ho] =
                      V[Ho + zo] =
                      V[Ho + Lo] =
                      V[Ho + Bo] =
                      V[Ho + Ro] =
                        `0`),
                    (V[Vo] = j[Vo]),
                    (V[Vo + zo] = j[Vo + zo]),
                    (V[Vo + Lo] = j[Vo + Lo]),
                    (V[Vo + Bo] = j[Vo + Bo]),
                    (V[Vo + Ro] = j[Vo + Ro]),
                    (ge = Ws(he, V, y)),
                    Es && L(0)),
                  n
                    ? ((De = n._initted),
                      Wa(1),
                      n.render(n.duration(), !0, !0),
                      (Se = ye(w.a) - xe + me + _),
                      (Ee = Math.abs(me - Se) > 1),
                      k && Ee && ge.splice(ge.length - 2, 2),
                      n.render(0, !0, !0),
                      De || n.invalidate(!0),
                      n.parent || n.totalTime(n.totalTime()),
                      Wa(0))
                    : (Se = me),
                  ke &&
                    (ke.value
                      ? (ke.style[`overflow` + w.a.toUpperCase()] = ke.value)
                      : ke.style.removeProperty(`overflow-` + w.a)));
              else if (u && L() && !x)
                for (z = u.parentNode; z && z !== J; )
                  (z._pinOffset && ((se -= z._pinOffset), (ce -= z._pinOffset)),
                    (z = z.parentNode));
              (Oe &&
                Oe.forEach(function (e) {
                  return e.revert(!1, !0);
                }),
                (N.start = se),
                (N.end = ce),
                (ae = oe = Es ? Pe : L()),
                !x && !Es && (ae < Pe && L(Pe), (N.scroll.rec = 0)),
                N.revert(!1, !0),
                (ne = X()),
                Ne && ((I = -1), Ne.restart(!0)),
                (Ia = 0),
                n &&
                  T &&
                  (n._initted || Fe) &&
                  n.progress() !== Fe &&
                  n.progress(Fe || 0, !0).render(n.time(), !0, !0),
                (h || re !== N.progress || x || p || (n && !n._initted)) &&
                  (n &&
                    !T &&
                    (n._initted || re || n.vars.immediateRender !== !1) &&
                    n.totalProgress(
                      x && se < -0.001 && !re
                        ? K.utils.normalize(se, ce, 0)
                        : re,
                      !0,
                    ),
                  (N.progress = h || (ae - se) / me === re ? 0 : re)),
                d && f && (ve._pinOffset = Math.round(N.progress * Se)),
                H && H.invalidate(),
                isNaN(Ae) ||
                  ((Ae -= K.getProperty(ue, w.p)),
                  (je -= K.getProperty(de, w.p)),
                  Xs(ue, w, Ae),
                  Xs(le, w, Ae - (o || 0)),
                  Xs(de, w, je),
                  Xs(B, w, je - (o || 0))),
                h && !Es && N.update(),
                c && !Es && !pe && ((pe = !0), c(N), (pe = !1)));
            }
          }),
          (N.getVelocity = function () {
            return ((L() - oe) / (X() - Pa)) * 1e3 || 0;
          }),
          (N.endAnimation = function () {
            (Oo(N.callbackAnimation),
              n &&
                (H
                  ? H.progress(1)
                  : n.paused()
                    ? T || Oo(n, N.direction < 0, 1)
                    : Oo(n, n.reversed())));
          }),
          (N.labelToScroll = function (e) {
            return (
              (n &&
                n.labels &&
                (se || N.refresh() || se) +
                  (n.labels[e] / n.duration()) * me) ||
              0
            );
          }),
          (N.getTrailing = function (e) {
            var t = Z.indexOf(N),
              n = N.direction > 0 ? Z.slice(0, t).reverse() : Z.slice(t + 1);
            return (
              wo(e)
                ? n.filter(function (t) {
                    return t.vars.preventOverlaps === e;
                  })
                : n
            ).filter(function (e) {
              return N.direction > 0 ? e.end <= se : e.start >= ce;
            });
          }),
          (N.update = function (e, t, r) {
            if (!(x && !r && !e)) {
              var o = Es === !0 ? Pe : N.scroll(),
                c = e ? 0 : (o - se) / me,
                u = c < 0 ? 0 : c > 1 ? 1 : c || 0,
                p = N.progress,
                h,
                g,
                b,
                D,
                O,
                M,
                ee,
                te;
              if (
                (t &&
                  ((oe = ae),
                  (ae = x ? L() : o),
                  v && ((Ae = ke), (ke = n && !T ? n.totalProgress() : u))),
                m &&
                  d &&
                  !Ia &&
                  !Y &&
                  ao &&
                  (!u && se < o + ((o - oe) / (X() - Pa)) * m
                    ? (u = 1e-4)
                    : u === 1 &&
                      ce > o + ((o - oe) / (X() - Pa)) * m &&
                      (u = 0.9999)),
                u !== p && N.enabled)
              ) {
                if (
                  ((h = N.isActive = !!u && u < 1),
                  (g = !!p && p < 1),
                  (M = h !== g),
                  (O = M || !!u != !!p),
                  (N.direction = u > p ? 1 : -1),
                  (N.progress = u),
                  O &&
                    !Ia &&
                    ((b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3),
                    T &&
                      ((D = (!M && j[b + 1] !== `none` && j[b + 1]) || j[b]),
                      (te =
                        n && (D === `complete` || D === `reset` || D in n)))),
                  C &&
                    (M || te) &&
                    (te || l || !n) &&
                    (To(C)
                      ? C(N)
                      : N.getTrailing(C).forEach(function (e) {
                          return e.endAnimation();
                        })),
                  T ||
                    (H && !Ia && !Y
                      ? (H._dp._time - H._start !== H._time &&
                          H.render(H._dp._time - H._start),
                        H.resetTo
                          ? H.resetTo(`totalProgress`, u, n._tTime / n._tDur)
                          : ((H.vars.totalProgress = u),
                            H.invalidate().restart()))
                      : n && n.totalProgress(u, !!(Ia && (ne || e)))),
                  d)
                ) {
                  if ((e && f && (ve.style[f + w.os2] = Ce), !k))
                    be(mo(xe + Se * u));
                  else if (O) {
                    if (
                      ((ee = !e && u > p && ce + 1 > o && o + 1 >= So(E, w)), y)
                    )
                      if (!e && (h || ee)) {
                        var P = Yo(d, !0),
                          F = o - se;
                        Js(
                          d,
                          J,
                          P.top + (w === _a ? F : 0) + Go,
                          P.left + (w === _a ? 0 : F) + Go,
                        );
                      } else Js(d, ve);
                    (Hs(h || ee ? ge : _e),
                      (Ee && u < 1 && h) || be(xe + (u === 1 && !ee ? Se : 0)));
                  }
                }
                (v && !R.tween && !Ia && !Y && Ne.restart(!0),
                  a &&
                    (M || (_ && u && (u < 1 || !ro))) &&
                    Ma(a.targets).forEach(function (e) {
                      return e.classList[h || _ ? `add` : `remove`](
                        a.className,
                      );
                    }),
                  i && !T && !e && i(N),
                  O && !Ia
                    ? (T &&
                        (te &&
                          (D === `complete`
                            ? n.pause().totalProgress(1)
                            : D === `reset`
                              ? n.restart(!0).pause()
                              : D === `restart`
                                ? n.restart(!0)
                                : n[D]()),
                        i && i(N)),
                      (M || !ro) &&
                        (s && M && ko(N, s),
                        A[b] && ko(N, A[b]),
                        _ && (u === 1 ? N.kill(!1, 1) : (A[b] = 0)),
                        M || ((b = u === 1 ? 1 : 3), A[b] && ko(N, A[b]))),
                      S &&
                        !h &&
                        Math.abs(N.getVelocity()) > (Eo(S) ? S : 2500) &&
                        (Oo(N.callbackAnimation),
                        H ? H.progress(1) : Oo(n, D === `reverse` ? 1 : !u, 1)))
                    : T && i && !Ia && i(N));
              }
              if (De) {
                var I = x ? (o / x.duration()) * (x._caScrollDist || 0) : o;
                (Te(I + +!!ue._isFlipped), De(I));
              }
              Ie && Ie((-o / x.duration()) * (x._caScrollDist || 0));
            }
          }),
          (N.enable = function (t, n) {
            N.enabled ||
              ((N.enabled = !0),
              ns(E, `resize`, gs),
              O || ns(E, `scroll`, ms),
              te && ns(e, `refreshInit`, te),
              t !== !1 && ((N.progress = re = 0), (ae = oe = I = L())),
              n !== !1 && N.refresh());
          }),
          (N.getTween = function (e) {
            return e && R ? R.tween : H;
          }),
          (N.setPositions = function (e, t, n, r) {
            if (x) {
              var i = x.scrollTrigger,
                a = x.duration(),
                o = i.end - i.start;
              ((e = i.start + (o * e) / a), (t = i.start + (o * t) / a));
            }
            (N.refresh(
              !1,
              !1,
              {
                start: co(e, n && !!N._startClamp),
                end: co(t, n && !!N._endClamp),
              },
              r,
            ),
              N.update());
          }),
          (N.adjustPinSpacing = function (e) {
            if (we && e) {
              var t = we.indexOf(w.d) + 1;
              ((we[t] = parseFloat(we[t]) + e + Go),
                (we[1] = parseFloat(we[1]) + e + Go),
                Hs(we));
            }
          }),
          (N.disable = function (t, n) {
            if (
              (t !== !1 && N.revert(!0, !0),
              N.enabled &&
                ((N.enabled = N.isActive = !1),
                n || (H && H.pause()),
                (Pe = 0),
                z && (z.uncache = 1),
                te && rs(e, `refreshInit`, te),
                Ne && (Ne.pause(), R.tween && R.tween.kill() && (R.tween = 0)),
                !O))
            ) {
              for (var r = Z.length; r--; )
                if (Z[r].scroller === E && Z[r] !== N) return;
              (rs(E, `resize`, gs), O || rs(E, `scroll`, ms));
            }
          }),
          (N.kill = function (e, r) {
            (N.disable(e, r), H && !r && H.kill(), o && delete ds[o]);
            var i = Z.indexOf(N);
            (i >= 0 && Z.splice(i, 1),
              i === za && Ps > 0 && za--,
              (i = 0),
              Z.forEach(function (e) {
                return e.scroller === N.scroller && (i = 1);
              }),
              i || Es || (N.scroll.rec = 0),
              n &&
                ((n.scrollTrigger = null),
                e && n.revert({ kill: !1 }),
                r || n.kill()),
              le &&
                [le, B, ue, de].forEach(function (e) {
                  return e.parentNode && e.parentNode.removeChild(e);
                }),
              Fs === N && (Fs = 0),
              d &&
                (z && (z.uncache = 1),
                (i = 0),
                Z.forEach(function (e) {
                  return e.pin === d && i++;
                }),
                i || (z.spacer = 0)),
              t.onKill && t.onKill(N));
          }),
          Z.push(N),
          N.enable(!1, !1),
          Le && Le(N),
          n && n.add && !me)
        ) {
          var Ve = N.update;
          ((N.update = function () {
            ((N.update = Ve), G.cache++, se || ce || N.refresh());
          }),
            K.delayedCall(0.01, N.update),
            (me = 0.01),
            (se = ce = 0));
        } else N.refresh();
        d && ks();
      }),
      (e.register = function (t) {
        return (
          (Da ||= ((K = t || go()), ho() && window.document && e.enable(), oo)),
          Da
        );
      }),
      (e.defaults = function (e) {
        if (e) for (var t in e) os[t] = e[t];
        return os;
      }),
      (e.disable = function (e, t) {
        ((oo = 0),
          Z.forEach(function (n) {
            return n[t ? `kill` : `disable`](e);
          }),
          rs(q, `wheel`, ms),
          rs(Oa, `scroll`, ms),
          clearInterval(Fa),
          rs(Oa, `touchcancel`, po),
          rs(J, `touchstart`, po),
          ts(rs, Oa, `pointerdown,touchstart,mousedown`, uo),
          ts(rs, Oa, `pointerup,touchend,mouseup`, fo),
          ja.kill(),
          Co(rs));
        for (var n = 0; n < G.length; n += 3)
          (is(rs, G[n], G[n + 1]), is(rs, G[n], G[n + 2]));
      }),
      (e.enable = function () {
        if (
          ((q = window),
          (Oa = document),
          (ka = Oa.documentElement),
          (J = Oa.body),
          K)
        )
          if (
            ((Ma = K.utils.toArray),
            (Na = K.utils.clamp),
            (Za = K.core.context || po),
            (Wa = K.core.suppressOverwrites || po),
            (Qa = q.history.scrollRestoration || `auto`),
            (Ns = q.pageYOffset || 0),
            K.core.globals(`ScrollTrigger`, e),
            J)
          ) {
            ((oo = 1),
              ($a = document.createElement(`div`)),
              ($a.style.height = `100vh`),
              ($a.style.position = `absolute`),
              As(),
              lo(),
              Ea.register(K),
              (e.isTouch = Ea.isTouch),
              (Xa =
                Ea.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (qa = Ea.isTouch === 1),
              ns(q, `wheel`, ms),
              (Aa = [q, Oa, ka, J]),
              K.matchMedia
                ? ((e.matchMedia = function (e) {
                    var t = K.matchMedia(),
                      n;
                    for (n in e) t.add(n, e[n]);
                    return t;
                  }),
                  K.addEventListener(`matchMediaInit`, function () {
                    (Cs(), ws());
                  }),
                  K.addEventListener(`matchMediaRevert`, function () {
                    return Ss();
                  }),
                  K.addEventListener(`matchMedia`, function () {
                    (Ms(0, 1), bs(`matchMedia`));
                  }),
                  K.matchMedia().add(`(orientation: portrait)`, function () {
                    return (hs(), hs);
                  }))
                : console.warn(`Requires GSAP 3.11.0 or later`),
              hs(),
              ns(Oa, `scroll`, ms));
            var t = J.hasAttribute(`style`),
              n = J.style,
              r = n.borderTopStyle,
              i = K.core.Animation.prototype,
              a,
              o;
            for (
              i.revert ||
                Object.defineProperty(i, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                n.borderTopStyle = `solid`,
                a = Yo(J),
                _a.m = Math.round(a.top + _a.sc()) || 0,
                ga.m = Math.round(a.left + ga.sc()) || 0,
                r
                  ? (n.borderTopStyle = r)
                  : n.removeProperty(`border-top-style`),
                t || (J.setAttribute(`style`, ``), J.removeAttribute(`style`)),
                Fa = setInterval(ps, 250),
                K.delayedCall(0.5, function () {
                  return (Y = 0);
                }),
                ns(Oa, `touchcancel`, po),
                ns(J, `touchstart`, po),
                ts(ns, Oa, `pointerdown,touchstart,mousedown`, uo),
                ts(ns, Oa, `pointerup,touchend,mouseup`, fo),
                Ra = K.utils.checkPrefix(`transform`),
                Rs.push(Ra),
                Da = X(),
                ja = K.delayedCall(0.2, Ms).pause(),
                Ha = [
                  Oa,
                  `visibilitychange`,
                  function () {
                    var e = q.innerWidth,
                      t = q.innerHeight;
                    Oa.hidden
                      ? ((Ba = e), (Va = t))
                      : (Ba !== e || Va !== t) && gs();
                  },
                  Oa,
                  `DOMContentLoaded`,
                  Ms,
                  q,
                  `load`,
                  Ms,
                  q,
                  `resize`,
                  gs,
                ],
                Co(ns),
                Z.forEach(function (e) {
                  return e.enable(0, 1);
                }),
                o = 0;
              o < G.length;
              o += 3
            )
              (is(rs, G[o], G[o + 1]), is(rs, G[o], G[o + 2]));
          } else
            Oa &&
              Oa.addEventListener(`DOMContentLoaded`, function t() {
                (e.enable(), Oa.removeEventListener(`DOMContentLoaded`, t));
              });
      }),
      (e.config = function (t) {
        `limitCallbacks` in t && (ro = !!t.limitCallbacks);
        var n = t.syncInterval;
        ((n && clearInterval(Fa)) || ((Fa = n) && setInterval(ps, n)),
          `ignoreMobileResize` in t &&
            (qa = e.isTouch === 1 && t.ignoreMobileResize),
          `autoRefreshEvents` in t &&
            (Co(rs) || Co(ns, t.autoRefreshEvents || `none`),
            (Ga = (t.autoRefreshEvents + ``).indexOf(`resize`) === -1)));
      }),
      (e.scrollerProxy = function (e, t) {
        var n = va(e),
          r = G.indexOf(n),
          i = _o(n);
        (~r && G.splice(r, i ? 6 : 2),
          t && (i ? ia.unshift(q, t, J, t, ka, t) : ia.unshift(n, t)));
      }),
      (e.clearMatchMedia = function (e) {
        Z.forEach(function (t) {
          return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
        });
      }),
      (e.isInViewport = function (e, t, n) {
        var r = (wo(e) ? va(e) : e).getBoundingClientRect(),
          i = r[n ? Fo : Io] * t || 0;
        return n
          ? r.right - i > 0 && r.left + i < q.innerWidth
          : r.bottom - i > 0 && r.top + i < q.innerHeight;
      }),
      (e.positionInViewport = function (e, t, n) {
        wo(e) && (e = va(e));
        var r = e.getBoundingClientRect(),
          i = r[n ? Fo : Io],
          a =
            t == null
              ? i / 2
              : t in ss
                ? ss[t] * i
                : ~t.indexOf(`%`)
                  ? (parseFloat(t) * i) / 100
                  : parseFloat(t) || 0;
        return n ? (r.left + a) / q.innerWidth : (r.top + a) / q.innerHeight;
      }),
      (e.killAll = function (e) {
        if (
          (Z.slice(0).forEach(function (e) {
            return e.vars.id !== `ScrollSmoother` && e.kill();
          }),
          e !== !0)
        ) {
          var t = _s.killAll || [];
          ((_s = {}),
            t.forEach(function (e) {
              return e();
            }));
        }
      }),
      e
    );
  })();
((Q.version = `3.15.0`),
  (Q.saveStyles = function (e) {
    return e
      ? Ma(e).forEach(function (e) {
          if (e && e.style) {
            var t = xs.indexOf(e);
            (t >= 0 && xs.splice(t, 5),
              xs.push(
                e,
                e.style.cssText,
                e.getBBox && e.getAttribute(`transform`),
                K.core.getCache(e),
                Za(),
              ));
          }
        })
      : xs;
  }),
  (Q.revert = function (e, t) {
    return ws(!e, t);
  }),
  (Q.create = function (e, t) {
    return new Q(e, t);
  }),
  (Q.refresh = function (e) {
    return e ? gs(!0) : (Da || Q.register()) && Ms(!0);
  }),
  (Q.update = function (e) {
    return ++G.cache && Is(e === !0 ? 2 : 0);
  }),
  (Q.clearScrollMemory = Ts),
  (Q.maxScroll = function (e, t) {
    return So(e, t ? ga : _a);
  }),
  (Q.getScrollFunc = function (e, t) {
    return ba(va(e), t ? ga : _a);
  }),
  (Q.getById = function (e) {
    return ds[e];
  }),
  (Q.getAll = function () {
    return Z.filter(function (e) {
      return e.vars.id !== `ScrollSmoother`;
    });
  }),
  (Q.isScrolling = function () {
    return !!ao;
  }),
  (Q.snapDirectional = $o),
  (Q.addEventListener = function (e, t) {
    var n = _s[e] || (_s[e] = []);
    ~n.indexOf(t) || n.push(t);
  }),
  (Q.removeEventListener = function (e, t) {
    var n = _s[e],
      r = n && n.indexOf(t);
    r >= 0 && n.splice(r, 1);
  }),
  (Q.batch = function (e, t) {
    var n = [],
      r = {},
      i = t.interval || 0.016,
      a = t.batchMax || 1e9,
      o = function (e, t) {
        var n = [],
          r = [],
          o = K.delayedCall(i, function () {
            (t(n, r), (n = []), (r = []));
          }).pause();
        return function (e) {
          (n.length || o.restart(!0),
            n.push(e.trigger),
            r.push(e),
            a <= n.length && o.progress(1));
        };
      },
      s;
    for (s in t)
      r[s] =
        s.substr(0, 2) === `on` && To(t[s]) && s !== `onRefreshInit`
          ? o(s, t[s])
          : t[s];
    return (
      To(a) &&
        ((a = a()),
        ns(Q, `refresh`, function () {
          return (a = t.batchMax());
        })),
      Ma(e).forEach(function (e) {
        var t = {};
        for (s in r) t[s] = r[s];
        ((t.trigger = e), n.push(Q.create(t)));
      }),
      n
    );
  }));
var Qs = function (e, t, n, r) {
    return (
      t > r ? e(r) : t < 0 && e(0),
      n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
    );
  },
  $s = function e(t, n) {
    (n === !0
      ? t.style.removeProperty(`touch-action`)
      : (t.style.touchAction =
          n === !0
            ? `auto`
            : n
              ? `pan-` + n + (Ea.isTouch ? ` pinch-zoom` : ``)
              : `none`),
      t === ka && e(J, n));
  },
  ec = { auto: 1, scroll: 1 },
  tc = function (e) {
    var t = e.event,
      n = e.target,
      r = e.axis,
      i = (t.changedTouches ? t.changedTouches[0] : t).target,
      a = i._gsap || K.core.getCache(i),
      o = X(),
      s;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
      for (
        ;
        i &&
        i !== J &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          !(ec[(s = Ko(i)).overflowY] || ec[s.overflowX]));
      )
        i = i.parentNode;
      ((a._isScroll =
        i &&
        i !== n &&
        !_o(i) &&
        (ec[(s = Ko(i)).overflowY] || ec[s.overflowX])),
        (a._isScrollT = o));
    }
    (a._isScroll || r === `x`) && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  nc = function (e, t, n, r) {
    return Ea.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r &&= tc),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return n && ns(Oa, Ea.eventTypes[0], ac, !1, !0);
      },
      onDisable: function () {
        return rs(Oa, Ea.eventTypes[0], ac, !0);
      },
    });
  },
  rc = /(input|label|select|textarea)/i,
  ic,
  ac = function (e) {
    var t = rc.test(e.target.tagName);
    (t || ic) && ((e._gsapAllow = !0), (ic = t));
  },
  oc = function (e) {
    (Do(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      (e.type ||= `wheel,touch`),
      (e.debounce = !!e.debounce),
      (e.id = e.id || `normalizer`));
    var t = e,
      n = t.normalizeScrollX,
      r = t.momentum,
      i = t.allowNestedScroll,
      a = t.onRelease,
      o,
      s,
      c = va(e.target) || ka,
      l = K.core.globals().ScrollSmoother,
      u = l && l.get(),
      d =
        Xa &&
        ((e.content && va(e.content)) ||
          (u && e.content !== !1 && !u.smooth() && u.content())),
      f = ba(c, _a),
      p = ba(c, ga),
      m = 1,
      h =
        (Ea.isTouch && q.visualViewport
          ? q.visualViewport.scale * q.visualViewport.width
          : q.outerWidth) / q.innerWidth,
      g = 0,
      _ = To(r)
        ? function () {
            return r(o);
          }
        : function () {
            return r || 2.8;
          },
      v,
      y,
      b = nc(c, e.type, !0, i),
      x = function () {
        return (y = !1);
      },
      S = po,
      C = po,
      w = function () {
        ((s = So(c, _a)),
          (C = Na(+!!Xa, s)),
          n && (S = Na(0, So(c, ga))),
          (v = Ds));
      },
      T = function () {
        ((d._gsap.y = mo(parseFloat(d._gsap.y) + f.offset) + `px`),
          (d.style.transform =
            `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` +
            parseFloat(d._gsap.y) +
            `, 0, 1)`),
          (f.offset = f.cacheID = 0));
      },
      E = function () {
        if (y) {
          requestAnimationFrame(x);
          var e = mo(o.deltaY / 2),
            t = C(f.v - e);
          if (d && t !== f.v + f.offset) {
            f.offset = t - f.v;
            var n = mo((parseFloat(d && d._gsap.y) || 0) - f.offset);
            ((d.style.transform =
              `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` +
              n +
              `, 0, 1)`),
              (d._gsap.y = n + `px`),
              (f.cacheID = G.cache),
              Is());
          }
          return !0;
        }
        (f.offset && T(), (y = !0));
      },
      D,
      O,
      k,
      A,
      j = function () {
        (w(),
          D.isActive() &&
            D.vars.scrollY > s &&
            (f() > s ? D.progress(1) && f(s) : D.resetTo(`scrollY`, s)));
      };
    return (
      d && K.set(d, { y: `+=0` }),
      (e.ignoreCheck = function (e) {
        return (
          (Xa && e.type === `touchmove` && E(e)) ||
          (m > 1.05 && e.type !== `touchstart`) ||
          o.isGesturing ||
          (e.touches && e.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        y = !1;
        var e = m;
        ((m = mo(((q.visualViewport && q.visualViewport.scale) || 1) / h)),
          D.pause(),
          e !== m && $s(c, m > 1.01 ? !0 : n ? !1 : `x`),
          (O = p()),
          (k = f()),
          w(),
          (v = Ds));
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((f.offset && T(), !t)) A.restart(!0);
          else {
            G.cache++;
            var r = _(),
              i,
              o;
            (n &&
              ((i = p()),
              (o = i + (r * 0.05 * -e.velocityX) / 0.227),
              (r *= Qs(p, i, o, So(c, ga))),
              (D.vars.scrollX = S(o))),
              (i = f()),
              (o = i + (r * 0.05 * -e.velocityY) / 0.227),
              (r *= Qs(f, i, o, So(c, _a))),
              (D.vars.scrollY = C(o)),
              D.invalidate().duration(r).play(0.01),
              ((Xa && D.vars.scrollY >= s) || i >= s - 1) &&
                K.to({}, { onUpdate: j, duration: r }));
          }
          a && a(e);
        }),
      (e.onWheel = function () {
        (D._ts && D.pause(), X() - g > 1e3 && ((v = 0), (g = X())));
      }),
      (e.onChange = function (e, t, r, i, a) {
        if (
          (Ds !== v && w(),
          t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])),
          r)
        ) {
          f.offset && T();
          var o = a[2] === r,
            s = o ? k + e.startY - e.y : f() + r - a[1],
            c = C(s);
          (o && s !== c && (k += c - s), f(c));
        }
        (r || t) && Is();
      }),
      (e.onEnable = function () {
        ($s(c, n ? !1 : `x`),
          Q.addEventListener(`refresh`, j),
          ns(q, `resize`, j),
          (f.smooth &&=
            ((f.target.style.scrollBehavior = `auto`), (p.smooth = !1))),
          b.enable());
      }),
      (e.onDisable = function () {
        ($s(c, !0),
          rs(q, `resize`, j),
          Q.removeEventListener(`refresh`, j),
          b.kill());
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (o = new Ea(e)),
      (o.iOS = Xa),
      Xa && !f() && f(1),
      Xa && K.ticker.add(po),
      (A = o._dc),
      (D = K.to(o, {
        ease: `power4`,
        paused: !0,
        inherit: !1,
        scrollX: n ? `+=0.1` : `+=0`,
        scrollY: `+=0.1`,
        modifiers: {
          scrollY: Ys(f, f(), function () {
            return D.pause();
          }),
        },
        onUpdate: Is,
        onComplete: A.vars.onComplete,
      })),
      o
    );
  };
((Q.sort = function (e) {
  if (To(e)) return Z.sort(e);
  var t = q.pageYOffset || 0;
  return (
    Q.getAll().forEach(function (e) {
      return (e._sortY = e.trigger
        ? t + e.trigger.getBoundingClientRect().top
        : e.start + q.innerHeight);
    }),
    Z.sort(
      e ||
        function (e, t) {
          return (
            (e.vars.refreshPriority || 0) * -1e6 +
            (e.vars.containerAnimation ? 1e6 : e._sortY) -
            ((t.vars.containerAnimation ? 1e6 : t._sortY) +
              (t.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
}),
  (Q.observe = function (e) {
    return new Ea(e);
  }),
  (Q.normalizeScroll = function (e) {
    if (e === void 0) return Ka;
    if (e === !0 && Ka) return Ka.enable();
    if (e === !1) {
      (Ka && Ka.kill(), (Ka = e));
      return;
    }
    var t = e instanceof Ea ? e : oc(e);
    return (
      Ka && Ka.target === t.target && Ka.kill(),
      _o(t.target) && (Ka = t),
      t
    );
  }),
  (Q.core = {
    _getVelocityProp: xa,
    _inputObserver: nc,
    _scrollers: G,
    _proxies: ia,
    bridge: {
      ss: function () {
        (ao || bs(`scrollStart`), (ao = X()));
      },
      ref: function () {
        return Ia;
      },
    },
  }),
  go() && K.registerPlugin(Q),
  W.registerPlugin(Q));
function sc() {
  let e = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      let t = W.context(() => {
        (W.timeline({ defaults: { ease: `power4.out` } })
          .fromTo(
            `.hero-portrait-container`,
            { clipPath: `inset(0 0 100% 0)`, scale: 1.1 },
            {
              clipPath: `inset(0 0 0% 0)`,
              scale: 1,
              duration: 2,
              ease: `power4.inOut`,
            },
          )
          .fromTo(
            `.hero-portrait`,
            { scale: 1.2 },
            { scale: 1, duration: 2.2, ease: `power3.out` },
            `-=2`,
          )
          .fromTo(
            `.hero-title-text`,
            { yPercent: 100 },
            { yPercent: 0, duration: 1.2 },
            `-=1.4`,
          )
          .fromTo(
            `.hero-subtitle`,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            `-=0.9`,
          )
          .fromTo(
            `.hero-desc`,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            `-=0.8`,
          )
          .fromTo(
            `.hero-ctas`,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            `-=0.7`,
          )
          .fromTo(
            `.hero-featured`,
            { opacity: 0, y: 15 },
            { opacity: 0.55, y: 0, duration: 0.8 },
            `-=0.6`,
          )
          .fromTo(
            `.hero-stats-bar`,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2 },
            `-=0.8`,
          ),
          [
            { selector: `.stat-num-1`, target: 10 },
            { selector: `.stat-num-2`, target: 500 },
            { selector: `.stat-num-3`, target: 2500 },
            { selector: `.stat-num-4`, target: 25 },
            { selector: `.stat-num-5`, target: 2 },
            { selector: `.stat-num-6`, target: 1 },
          ].forEach((e) => {
            W.fromTo(
              e.selector,
              { textContent: 0 },
              {
                textContent: e.target,
                duration: 2.5,
                ease: `power3.out`,
                snap: { textContent: 1 },
              },
            );
          }));
      }, e);
      return () => t.revert();
    }, []),
    (0, b.jsxs)(`section`, {
      ref: e,
      id: `home`,
      className: `relative min-h-screen overflow-hidden bg-[#05070a]`,
      children: [
        (0, b.jsx)(`div`, {
          className: `hidden md:block absolute inset-0 z-0`,
          children: (0, b.jsxs)(`div`, {
            className: `hero-portrait-container w-full h-full overflow-hidden`,
            style: { clipPath: `inset(0 0 100% 0)` },
            children: [
              (0, b.jsx)(`img`, {
                src: `images/payal.png`,
                alt: `Payal Kar Dutta`,
                className: `hero-portrait w-full h-full object-cover object-center md:object-right-top opacity-75`,
              }),
              (0, b.jsx)(`div`, { className: `absolute inset-0 bg-black/45` }),
              (0, b.jsx)(`div`, {
                className: `absolute inset-y-0 left-0 w-full md:w-[55%] bg-gradient-to-r from-[#05070a] via-[#05070a]/95 to-transparent`,
              }),
              (0, b.jsx)(`div`, {
                className: `absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070a] to-transparent`,
              }),
            ],
          }),
        }),
        (0, b.jsx)(`div`, {
          className: `absolute top-[20%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#C8A46B]/10 blur-[120px] rounded-full z-0`,
        }),
        (0, b.jsxs)(`div`, {
          className: `relative z-20 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-12 min-h-screen flex flex-col justify-center pt-28 md:pt-36 pb-10`,
          children: [
            (0, b.jsxs)(`div`, {
              className: `w-full md:max-w-[60%] lg:max-w-[55%]`,
              children: [
                (0, b.jsx)(`p`, {
                  className: `text-[#C8A46B] uppercase tracking-[0.35em] text-[10px] sm:text-xs font-semibold mb-5`,
                  children: `Founder • Leader • Strategist`,
                }),
                (0, b.jsx)(`div`, {
                  className: `overflow-hidden`,
                  children: (0, b.jsx)(`h1`, {
                    className: `hero-title-text font-serif-luxury text-[44px] sm:text-[60px] md:text-[72px] lg:text-[92px] leading-[0.95] text-white font-light`,
                    children: `Payal Kar Dutta`,
                  }),
                }),
                (0, b.jsx)(`h2`, {
                  className: `hero-subtitle text-[#C8A46B] text-lg sm:text-xl md:text-2xl lg:text-[30px] font-medium mt-5`,
                  children: `Founder & CEO of Veva Realty`,
                }),
                (0, b.jsx)(`p`, {
                  className: `hero-desc text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mt-6`,
                  children: `Building trust-driven real estate experiences through leadership, strategy, and visionary thinking.`,
                }),
                (0, b.jsxs)(`div`, {
                  className: `hero-ctas flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto`,
                  children: [
                    (0, b.jsxs)(`a`, {
                      href: `#contact`,
                      className: `px-7 py-4 bg-[#C8A46B] hover:bg-[#B18D55] text-white text-[11px] tracking-[0.18em] uppercase font-bold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]`,
                      children: [
                        `Schedule Consultation`,
                        (0, b.jsx)(`svg`, {
                          className: `w-4 h-4`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `2`,
                          viewBox: `0 0 24 24`,
                          children: (0, b.jsx)(`path`, {
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`,
                            d: `M14 5l7 7m0 0l-7 7m7-7H3`,
                          }),
                        }),
                      ],
                    }),
                    (0, b.jsx)(`a`, {
                      href: `#about`,
                      className: `px-7 py-4 border border-white/20 hover:border-[#C8A46B] text-white hover:text-[#C8A46B] text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all duration-300 flex items-center justify-center`,
                      children: `Explore My Journey`,
                    }),
                  ],
                }),
                (0, b.jsxs)(`div`, {
                  className: `hero-featured mt-10 w-full overflow-hidden`,
                  children: [
                    (0, b.jsx)(`p`, {
                      className: `text-[10px] tracking-[0.35em] text-slate-500 uppercase mb-4`,
                      children: `Featured In`,
                    }),
                    (0, b.jsxs)(`div`, {
                      className: `hidden md:flex flex-wrap items-center gap-x-6 gap-y-4`,
                      children: [
                        (0, b.jsx)(`span`, {
                          className: `text-white font-serif text-sm md:text-base font-bold opacity-70`,
                          children: `THE TIMES OF INDIA`,
                        }),
                        (0, b.jsx)(`span`, {
                          className: `text-white text-base md:text-lg font-black opacity-70`,
                          children: `REALTY+`,
                        }),
                        (0, b.jsx)(`span`, {
                          className: `text-white font-serif italic opacity-70`,
                          children: `BusinessLine`,
                        }),
                        (0, b.jsx)(`span`, {
                          className: `text-white font-serif text-base md:text-lg font-bold opacity-70`,
                          children: `Entrepreneur`,
                        }),
                      ],
                    }),
                    (0, b.jsx)(`div`, {
                      className: `md:hidden overflow-hidden marquee-mask relative w-full py-2`,
                      children: (0, b.jsxs)(`div`, {
                        className: `flex w-max gap-12 animate-marquee items-center`,
                        children: [
                          (0, b.jsx)(`span`, {
                            className: `text-white font-serif text-sm font-bold opacity-70 shrink-0 select-none`,
                            children: `THE TIMES OF INDIA`,
                          }),
                          (0, b.jsx)(`span`, {
                            className: `text-white text-base font-black opacity-70 shrink-0 select-none`,
                            children: `REALTY+`,
                          }),
                          (0, b.jsx)(`span`, {
                            className: `text-white font-serif italic opacity-70 shrink-0 select-none`,
                            children: `BusinessLine`,
                          }),
                          (0, b.jsx)(`span`, {
                            className: `text-white font-serif text-base font-bold opacity-70 shrink-0 select-none`,
                            children: `Entrepreneur`,
                          }),
                          (0, b.jsx)(`span`, {
                            className: `text-white font-serif text-sm font-bold opacity-70 shrink-0 select-none`,
                            children: `THE TIMES OF INDIA`,
                          }),
                          (0, b.jsx)(`span`, {
                            className: `text-white text-base font-black opacity-70 shrink-0 select-none`,
                            children: `REALTY+`,
                          }),
                          (0, b.jsx)(`span`, {
                            className: `text-white font-serif italic opacity-70 shrink-0 select-none`,
                            children: `BusinessLine`,
                          }),
                          (0, b.jsx)(`span`, {
                            className: `text-white font-serif text-base font-bold opacity-70 shrink-0 select-none`,
                            children: `Entrepreneur`,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, b.jsx)(`div`, {
              className: `block md:hidden mt-12 rounded-[28px] overflow-hidden border border-white/10`,
              children: (0, b.jsx)(`img`, {
                src: `images/payal.png`,
                alt: `Portrait`,
                className: `w-full h-[500px] object-cover object-top`,
              }),
            }),
            (0, b.jsx)(`div`, {
              className: `hero-stats-bar mt-12 md:mt-20 w-[calc(100%+40px)] sm:w-[calc(100%+48px)] md:w-full mx-[-20px] sm:mx-[-24px] md:mx-0 bg-[#08090c]/85 backdrop-blur-xl border-y md:border border-[#C8A46B]/20 rounded-none md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden`,
              children: (0, b.jsx)(`div`, {
                className: `flex flex-row overflow-x-auto scrollbar-hide w-full md:grid md:grid-cols-3 lg:grid-cols-6 px-5 sm:px-6 md:px-0`,
                children: [
                  {
                    number: `10`,
                    suffix: `+`,
                    label: (0, b.jsx)(`span`, {
                      className: `text-[9px] sm:text-[10px] lg:text-[9px] xl:text-[10px] text-slate-400 font-light tracking-wide leading-tight mt-1`,
                      children: `Years of Experience`,
                    }),
                    className: `stat-num-1`,
                    isGold: !1,
                    icon: (0, b.jsxs)(`svg`, {
                      className: `w-6 h-6 lg:w-5 lg:h-5 xl:w-7 xl:h-7`,
                      viewBox: `0 0 64 64`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.2`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      children: [
                        (0, b.jsx)(`path`, {
                          d: `M32 10c-3-3-8-4-11-2c-3 2-4 6-2 9c2 3 5 3 7 1-4 3-5 8-3 12c2 3 6 4 9 2-3 3-3 8-1 11c2 3 6 3 9 0`,
                        }),
                        (0, b.jsx)(`path`, {
                          d: `M32 10c3-3 8-4 11-2c3 2 4 6 2 9-2 3-5 3-7 1 4 3 5 8 3 12-2 3-6 4-9 2 3 3 3 8 1 11-2 3-6 3-9 0`,
                        }),
                        (0, b.jsx)(`path`, { d: `M32 6v4M32 54v4` }),
                        (0, b.jsx)(`path`, {
                          d: `M32 18c-5 0-8 3-8 9 0 8 8 13 8 15 0-2 8-7 8-15 0-6-3-9-8-9z`,
                          strokeWidth: `1.5`,
                        }),
                        (0, b.jsx)(`path`, {
                          d: `M30 24h3.5c1.2 0 2.2.4 2.2 1.5s-.8 1.5-2.2 1.5H30v4M33.5 27.2l2.5 3.8`,
                          strokeWidth: `1.1`,
                        }),
                      ],
                    }),
                  },
                  {
                    number: `500`,
                    suffix: `+`,
                    label: (0, b.jsx)(`span`, {
                      className: `text-[9px] sm:text-[10px] lg:text-[9px] xl:text-[10px] text-slate-400 font-light tracking-wide leading-tight mt-1`,
                      children: `Clients Served`,
                    }),
                    className: `stat-num-2`,
                    isGold: !1,
                    icon: (0, b.jsxs)(`svg`, {
                      className: `w-6 h-6 lg:w-5 lg:h-5 xl:w-7 xl:h-7`,
                      viewBox: `0 0 64 64`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.2`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      children: [
                        (0, b.jsx)(`circle`, { cx: `32`, cy: `20`, r: `7` }),
                        (0, b.jsx)(`path`, {
                          d: `M16 48c0-6.5 5.5-12 12-12h8c6.5 0 12 5.5 12 12`,
                          strokeWidth: `1.5`,
                        }),
                        (0, b.jsx)(`path`, { d: `M26 36l6 8 6-8` }),
                        (0, b.jsx)(`path`, {
                          d: `M32 32v16`,
                          strokeWidth: `1`,
                          strokeDasharray: `2 2`,
                        }),
                      ],
                    }),
                  },
                  {
                    number: `2500`,
                    suffix: `Cr+`,
                    label: (0, b.jsx)(`span`, {
                      className: `text-[9px] sm:text-[10px] lg:text-[9px] xl:text-[10px] text-slate-400 font-light tracking-wide leading-tight mt-1`,
                      children: `Worth of Transactions`,
                    }),
                    className: `stat-num-3`,
                    isGold: !0,
                    rupee: !0,
                    icon: (0, b.jsxs)(`svg`, {
                      className: `w-6 h-6 lg:w-5 lg:h-5 xl:w-7 xl:h-7`,
                      viewBox: `0 0 64 64`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.2`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      children: [
                        (0, b.jsx)(`circle`, { cx: `32`, cy: `18`, r: `4.5` }),
                        (0, b.jsx)(`path`, { d: `M32 13.5v-1` }),
                        (0, b.jsx)(`path`, {
                          d: `M22 36c0-7 4-11 10-11s10 4 10 11`,
                          strokeWidth: `1.5`,
                        }),
                        (0, b.jsx)(`path`, {
                          d: `M17 44c1-2.5 4.5-4 8.5-4h13c4 0 7.5 1.5 8.5 4c1 2.5-1 5.5-5 6.5C38 51.5 35 52 32 52s-6-.5-10-1.5c-4-1-6-4-5-6.5z`,
                        }),
                        (0, b.jsx)(`path`, { d: `M27 38c2 1 8 1 10 0` }),
                        (0, b.jsx)(`path`, { d: `M20 50c4 2 20 2 24 0` }),
                      ],
                    }),
                  },
                  {
                    number: `25`,
                    suffix: `+`,
                    label: (0, b.jsx)(`span`, {
                      className: `text-[9px] sm:text-[10px] lg:text-[9px] xl:text-[10px] text-slate-400 font-light tracking-wide leading-tight mt-1`,
                      children: `Premium Projects`,
                    }),
                    className: `stat-num-4`,
                    isGold: !1,
                    icon: (0, b.jsxs)(`svg`, {
                      className: `w-6 h-6 lg:w-5 lg:h-5 xl:w-7 xl:h-7`,
                      viewBox: `0 0 64 64`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.2`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      children: [
                        (0, b.jsx)(`path`, {
                          d: `M32 14c1.5-2 3-3 4.5-3a2.5 2.5 0 012.5 2.5c0 1.5-1.5 2.5-3 3.5l-4 2`,
                        }),
                        (0, b.jsx)(`path`, {
                          d: `M20 20l4-4h16l4 4v30c0 1.5-1 2.5-2.5 2.5h-19C21 52.5 20 51.5 20 50V20z`,
                          strokeWidth: `1.5`,
                        }),
                        (0, b.jsx)(`path`, { d: `M24 16l8 14 8-14` }),
                        (0, b.jsx)(`path`, { d: `M32 20v6` }),
                        (0, b.jsx)(`circle`, {
                          cx: `32`,
                          cy: `36`,
                          r: `1.2`,
                          fill: `currentColor`,
                        }),
                        (0, b.jsx)(`circle`, {
                          cx: `32`,
                          cy: `42`,
                          r: `1.2`,
                          fill: `currentColor`,
                        }),
                      ],
                    }),
                  },
                  {
                    number: `2`,
                    suffix: ``,
                    label: (0, b.jsx)(`span`, {
                      className: `text-[9px] sm:text-[10px] lg:text-[9px] xl:text-[10px] text-slate-400 font-light tracking-wide leading-tight mt-1`,
                      children: `Brands Founded`,
                    }),
                    className: `stat-num-5`,
                    isGold: !1,
                    icon: (0, b.jsxs)(`svg`, {
                      className: `w-6 h-6 lg:w-5 lg:h-5 xl:w-7 xl:h-7`,
                      viewBox: `0 0 64 64`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.2`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      children: [
                        (0, b.jsx)(`rect`, {
                          x: `16`,
                          y: `14`,
                          width: `32`,
                          height: `36`,
                          rx: `1`,
                          strokeWidth: `1.5`,
                        }),
                        (0, b.jsx)(`line`, {
                          x1: `32`,
                          y1: `14`,
                          x2: `32`,
                          y2: `50`,
                        }),
                        (0, b.jsx)(`path`, {
                          d: `M25 24c1 2 2 5 2 8s-1 6-2 8`,
                        }),
                        (0, b.jsx)(`path`, {
                          d: `M39 24c-1 2-2 5-2 8s1 6 2 8`,
                        }),
                      ],
                    }),
                  },
                  {
                    number: `1`,
                    suffix: ``,
                    label: (0, b.jsxs)(`span`, {
                      className: `text-[9px] sm:text-[10px] lg:text-[9px] xl:text-[10px] text-slate-400 font-light tracking-wide leading-tight mt-1`,
                      children: [
                        `Vision`,
                        (0, b.jsx)(`span`, {
                          className: `block text-[8px] sm:text-[9px] lg:text-[8px] xl:text-[9px] text-slate-500 font-normal mt-0.5`,
                          children: `Building Trust`,
                        }),
                      ],
                    }),
                    className: `stat-num-6`,
                    isGold: !1,
                    icon: (0, b.jsxs)(`svg`, {
                      className: `w-6 h-6 lg:w-5 lg:h-5 xl:w-7 xl:h-7`,
                      viewBox: `0 0 64 64`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.25`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      children: [
                        (0, b.jsx)(`path`, {
                          d: `M32 12c9 0 16 3 16 16c0 10-10 16-16 22c-6-6-16-12-16-22c0-13 7-16 16-16z`,
                          strokeWidth: `1.5`,
                        }),
                        (0, b.jsx)(`path`, {
                          d: `M32 42V20`,
                          strokeWidth: `1.5`,
                        }),
                        (0, b.jsx)(`path`, { d: `M32 34c3-2 5-5 5-8` }),
                        (0, b.jsx)(`path`, { d: `M32 30c-3-2-5-5-5-8` }),
                        (0, b.jsx)(`path`, { d: `M32 26c2-2 3.5-4.5 3.5-6.5` }),
                        (0, b.jsx)(`path`, {
                          d: `M32 24c-2-2-3.5-4.5-3.5-6.5`,
                        }),
                      ],
                    }),
                  },
                ].map((e, t) =>
                  (0, b.jsxs)(
                    `div`,
                    {
                      className: `flex items-center gap-3 px-5 py-4 md:py-6 lg:py-5 xl:py-6 shrink-0 w-[205px] sm:w-[220px] md:w-auto h-full group border-white/10
                  ${t === 5 ? `border-r-0` : `border-r`} 
                  ${t % 3 == 2 ? `md:border-r-0` : `md:border-r`} 
                  ${t === 5 ? `lg:border-r-0` : `lg:border-r`} 
                  border-b-0 
                  ${t < 3 ? `md:border-b` : `md:border-b-0`} 
                  lg:border-b-0`,
                      children: [
                        (0, b.jsx)(`div`, {
                          className: `text-[#C8A46B] flex-shrink-0 transition-transform duration-300 group-hover:scale-105`,
                          children: e.icon,
                        }),
                        (0, b.jsxs)(`div`, {
                          className: `flex flex-col text-left`,
                          children: [
                            (0, b.jsxs)(`h3`, {
                              className: `font-serif-luxury text-lg sm:text-xl lg:text-base xl:text-xl 2xl:text-2xl font-semibold leading-none ${e.isGold ? `text-[#C8A46B]` : `text-white`}`,
                              children: [
                                e.rupee && `₹`,
                                (0, b.jsx)(`span`, {
                                  className: e.className,
                                  children: e.number,
                                }),
                                e.suffix,
                              ],
                            }),
                            e.label,
                          ],
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
W.registerPlugin(Q);
function cc() {
  let e = (0, _.useRef)(null),
    t = (0, _.useRef)(null),
    n = (0, _.useRef)(null),
    r = (0, _.useRef)(null),
    i = (0, _.useRef)([]);
  return (
    (0, _.useEffect)(() => {
      if (window.innerWidth < 768) return;
      let a = W.context(() => {
        (W.fromTo(
          t.current,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: `power4.out`,
            scrollTrigger: {
              trigger: t.current,
              start: `top 85%`,
              toggleActions: `play none none reverse`,
            },
          },
        ),
          n.current &&
            W.fromTo(
              n.current.children,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: `power3.out`,
                scrollTrigger: {
                  trigger: n.current,
                  start: `top 85%`,
                  toggleActions: `play none none reverse`,
                },
              },
            ),
          W.fromTo(
            r.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: `none`,
              scrollTrigger: {
                trigger: r.current,
                start: `top 75%`,
                end: `bottom 65%`,
                scrub: 1.2,
              },
            },
          ),
          i.current.forEach((e, t) => {
            if (!e) return;
            let n = e.querySelector(`.timeline-badge`),
              r = e.querySelector(`.timeline-text`);
            W.fromTo(
              [n, r],
              { opacity: 0, x: 25 },
              {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: `power2.out`,
                scrollTrigger: {
                  trigger: e,
                  start: `top 85%`,
                  toggleActions: `play none none reverse`,
                },
              },
            );
          }));
      }, e);
      return () => a.revert();
    }, []),
    (0, b.jsxs)(`section`, {
      ref: e,
      id: `about`,
      className: `pt-12 pb-24 md:py-36 bg-[#FAF7F2] relative overflow-hidden`,
      children: [
        (0, b.jsxs)(`svg`, {
          className: `absolute right-0 bottom-0 w-[45%] h-[80%] opacity-15 pointer-events-none z-0`,
          viewBox: `0 0 400 500`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          children: [
            (0, b.jsx)(`path`, {
              d: `M40 500V250H110V500`,
              stroke: `#C8A46B`,
              strokeWidth: `0.75`,
            }),
            (0, b.jsx)(`path`, {
              d: `M110 500V130H190V500`,
              stroke: `#C8A46B`,
              strokeWidth: `0.75`,
            }),
            (0, b.jsx)(`path`, {
              d: `M190 500V280H250V500`,
              stroke: `#C8A46B`,
              strokeWidth: `0.75`,
            }),
            (0, b.jsx)(`path`, {
              d: `M250 500V80H340V500`,
              stroke: `#C8A46B`,
              strokeWidth: `0.75`,
            }),
            (0, b.jsx)(`line`, {
              x1: `40`,
              y1: `280`,
              x2: `110`,
              y2: `280`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
              strokeDasharray: `3 3`,
            }),
            (0, b.jsx)(`line`, {
              x1: `110`,
              y1: `180`,
              x2: `190`,
              y2: `180`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
              strokeDasharray: `3 3`,
            }),
            (0, b.jsx)(`line`, {
              x1: `250`,
              y1: `130`,
              x2: `340`,
              y2: `130`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
              strokeDasharray: `3 3`,
            }),
            (0, b.jsx)(`line`, {
              x1: `250`,
              y1: `200`,
              x2: `340`,
              y2: `200`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
              strokeDasharray: `3 3`,
            }),
            (0, b.jsx)(`path`, {
              d: `M110 130L190 210`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
            }),
            (0, b.jsx)(`path`, {
              d: `M250 80L340 170`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
            }),
          ],
        }),
        (0, b.jsxs)(`svg`, {
          className: `absolute -top-10 -left-10 w-96 h-96 opacity-[0.08] pointer-events-none z-0`,
          viewBox: `0 0 400 400`,
          fill: `none`,
          children: [
            (0, b.jsx)(`circle`, {
              cx: `200`,
              cy: `200`,
              r: `180`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
            }),
            (0, b.jsx)(`circle`, {
              cx: `200`,
              cy: `200`,
              r: `140`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
              strokeDasharray: `3 3`,
            }),
            (0, b.jsx)(`path`, {
              d: `M20 200C20 100 100 20 200 20`,
              stroke: `#C8A46B`,
              strokeWidth: `1.5`,
            }),
          ],
        }),
        (0, b.jsx)(`div`, {
          className: `absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C8A46B]/3 rounded-full blur-[120px] pointer-events-none`,
        }),
        (0, b.jsx)(`div`, {
          className: `absolute -bottom-6 -left-6 text-[80px] md:text-[120px] text-[#C8A46B]/[0.05] font-signature z-0 pointer-events-none select-none`,
          children: `Payal`,
        }),
        (0, b.jsx)(`div`, {
          className: `max-w-7xl mx-auto px-6 md:px-12 relative z-10`,
          children: (0, b.jsxs)(`div`, {
            className: `grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center`,
            children: [
              (0, b.jsx)(`div`, {
                className: `hidden lg:col-span-5 lg:flex justify-center lg:justify-start`,
                children: (0, b.jsxs)(`div`, {
                  ref: t,
                  className: `relative group w-full max-w-[380px] sm:max-w-[420px] aspect-[3/4] rounded-[20px] bg-white p-2 border border-[#C8A46B]/20 shadow-[0_25px_60px_rgba(28,25,23,0.08)]`,
                  children: [
                    (0, b.jsx)(`div`, {
                      className: `absolute inset-0 border border-[#C8A46B]/30 -translate-x-4 translate-y-4 rounded-[20px] pointer-events-none -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2`,
                    }),
                    (0, b.jsxs)(`div`, {
                      className: `w-full h-full overflow-hidden rounded-[14px] relative`,
                      children: [
                        (0, b.jsx)(`img`, {
                          src: `images/payal.png`,
                          alt: `Payal Kar Dutta`,
                          className: `w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.03]`,
                        }),
                        (0, b.jsx)(`div`, {
                          className: `absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/35 to-transparent pointer-events-none`,
                        }),
                        (0, b.jsx)(`div`, {
                          className: `absolute bottom-5 left-5 z-20 text-[#C8A46B] text-4xl sm:text-5xl font-signature select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]`,
                          children: `Payal Kar Dutta`,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, b.jsxs)(`div`, {
                ref: n,
                className: `lg:col-span-4 flex flex-col items-start text-left gap-6 lg:pr-2 z-10`,
                children: [
                  (0, b.jsx)(`span`, {
                    className: `text-[#C8A46B] text-[11px] font-semibold uppercase tracking-[0.3em]`,
                    children: `ABOUT ME`,
                  }),
                  (0, b.jsx)(`h2`, {
                    className: `font-serif-luxury text-3xl sm:text-[36px] lg:text-[40px] text-[#1E1C1A] font-light leading-[1.2] tracking-wide`,
                    children: `A Journey Built on Vision, Integrity & Leadership`,
                  }),
                  (0, b.jsx)(`div`, {
                    className: `w-16 h-[3px] bg-[#C8A46B] my-1`,
                  }),
                  (0, b.jsx)(`p`, {
                    className: `text-[#4A4744] font-light text-[16px] sm:text-base leading-relaxed`,
                    children: `With over a decade of rich experience in real estate, I founded Veva Realty with a mission to create trust-driven real estate experiences built on transparency, professionalism, and long-term relationships.`,
                  }),
                  (0, b.jsx)(`p`, {
                    className: `text-[#4A4744] font-light text-[16px] sm:text-base leading-relaxed`,
                    children: `My expertise spans residential, commercial, and investment advisory, helping individuals and businesses make confident real estate decisions.`,
                  }),
                  (0, b.jsx)(`div`, {
                    className: `text-[#C8A46B] text-4xl sm:text-[46px] font-signature mt-4 select-none tracking-wide`,
                    children: `Payal Kar Dutta`,
                  }),
                ],
              }),
              (0, b.jsxs)(`div`, {
                className: `lg:col-span-3 flex flex-col gap-0 relative pl-0 mt-6 lg:mt-0 z-10`,
                children: [
                  (0, b.jsx)(`div`, {
                    ref: r,
                    className: `absolute left-[20px] top-4 bottom-8 w-[2px] bg-[#C8A46B]/40 pointer-events-none`,
                    style: { transformOrigin: `top center` },
                    children: (0, b.jsx)(`div`, {
                      className: `absolute left-1/2 bottom-0 w-2 h-2 rounded-full border border-[#C8A46B] bg-[#FAF7F2] -translate-x-1/2 translate-y-1`,
                    }),
                  }),
                  [
                    {
                      year: `2012`,
                      text: `Started my journey in real estate`,
                      icon: (0, b.jsx)(`svg`, {
                        className: `w-5 h-5 text-[#C8A46B] group-hover:text-white transition-colors duration-300`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2`,
                        viewBox: `0 0 24 24`,
                        children: (0, b.jsx)(`path`, {
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          d: `M13 7h8m0 0v8m0-8l-8 8-4-4-6 6`,
                        }),
                      }),
                    },
                    {
                      year: `2016`,
                      text: `Established Veva Realty`,
                      icon: (0, b.jsx)(`svg`, {
                        className: `w-5 h-5 text-[#C8A46B] group-hover:text-white transition-colors duration-300`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2`,
                        viewBox: `0 0 24 24`,
                        children: (0, b.jsx)(`path`, {
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          d: `M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4`,
                        }),
                      }),
                    },
                    {
                      year: `2018`,
                      text: `Expanded into investment advisory & commercial real estate`,
                      icon: (0, b.jsx)(`svg`, {
                        className: `w-5 h-5 text-[#C8A46B] group-hover:text-white transition-colors duration-300`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2`,
                        viewBox: `0 0 24 24`,
                        children: (0, b.jsx)(`path`, {
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          d: `M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16v1m-4-6h8`,
                        }),
                      }),
                    },
                    {
                      year: `2022`,
                      text: `Launched VSpaces by Veva`,
                      icon: (0, b.jsx)(`svg`, {
                        className: `w-5 h-5 text-[#C8A46B] group-hover:text-white transition-colors duration-300`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2`,
                        viewBox: `0 0 24 24`,
                        children: (0, b.jsx)(`path`, {
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          d: `M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10`,
                        }),
                      }),
                    },
                    {
                      year: `2024 & Beyond`,
                      text: `Building ecosystems. Creating impact.`,
                      icon: (0, b.jsx)(`svg`, {
                        className: `w-5 h-5 text-[#C8A46B] group-hover:text-white transition-colors duration-300`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2`,
                        viewBox: `0 0 24 24`,
                        children: (0, b.jsx)(`path`, {
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          d: `M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9`,
                        }),
                      }),
                    },
                  ].map((e, t) =>
                    (0, b.jsxs)(
                      `div`,
                      {
                        ref: (e) => (i.current[t] = e),
                        className: `relative pl-12 pb-10 last:pb-4 group flex flex-col items-start`,
                        children: [
                          (0, b.jsx)(`div`, {
                            className: `timeline-badge absolute left-0 top-0.5 w-10 h-10 rounded-full border-2 border-[#C8A46B] bg-[#FAF7F2] flex items-center justify-center z-10 shadow-[0_2px_8px_rgba(200,164,107,0.15)] transition-all duration-300 group-hover:bg-[#C8A46B] group-hover:border-[#C8A46B] group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(200,164,107,0.4)]`,
                            children: e.icon,
                          }),
                          (0, b.jsxs)(`div`, {
                            className: `timeline-text text-left pt-1.5`,
                            children: [
                              (0, b.jsx)(`h4`, {
                                className: `font-sans text-sm font-semibold text-[#1E1C1A] tracking-wider leading-none`,
                                children: e.year,
                              }),
                              (0, b.jsx)(`p`, {
                                className: `text-[#4A4744] text-[13.5px] lg:text-[12px] font-light mt-1.5 leading-relaxed max-w-[260px] lg:max-w-none`,
                                children: e.text,
                              }),
                            ],
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
W.registerPlugin(Q);
function lc() {
  let e = (0, _.useRef)(null),
    t = (0, _.useRef)(null),
    n = (0, _.useRef)(null),
    [r, i] = (0, _.useState)(0),
    a = (0, _.useRef)(null),
    o = [
      {
        title: `Founder & CEO`,
        description: `Leading Veva Realty with a clear vision to deliver exceptional real estate experiences.`,
        icon: (0, b.jsxs)(`svg`, {
          className: `w-6 h-6 text-[#C8A46B] group-hover:scale-110 transition-transform duration-500`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          viewBox: `0 0 24 24`,
          children: [
            (0, b.jsx)(`path`, {
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              d: `M2 18l3-11 5 4 2-6 2 6 5-4 3 11H2z`,
            }),
            (0, b.jsx)(`circle`, {
              cx: `12`,
              cy: `4`,
              r: `1`,
              fill: `currentColor`,
            }),
            (0, b.jsx)(`circle`, {
              cx: `5`,
              cy: `7`,
              r: `1`,
              fill: `currentColor`,
            }),
            (0, b.jsx)(`circle`, {
              cx: `19`,
              cy: `7`,
              r: `1`,
              fill: `currentColor`,
            }),
          ],
        }),
      },
      {
        title: `Real Estate Strategist`,
        description: `Providing data-driven strategies for residential, commercial & investment opportunities.`,
        icon: (0, b.jsxs)(`svg`, {
          className: `w-6 h-6 text-[#C8A46B] group-hover:scale-110 transition-transform duration-500`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          viewBox: `0 0 24 24`,
          children: [
            (0, b.jsx)(`circle`, { cx: `12`, cy: `12`, r: `9` }),
            (0, b.jsx)(`circle`, { cx: `12`, cy: `12`, r: `5` }),
            (0, b.jsx)(`path`, {
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              d: `M12 12l8-8m0 0h-4m4 0v4`,
            }),
          ],
        }),
      },
      {
        title: `Entrepreneur & Mentor`,
        description: `Mentoring aspiring entrepreneurs and guiding them to build sustainable businesses.`,
        icon: (0, b.jsx)(`svg`, {
          className: `w-6 h-6 text-[#C8A46B] group-hover:scale-110 transition-transform duration-500`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          viewBox: `0 0 24 24`,
          children: (0, b.jsx)(`path`, {
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            d: `M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z`,
          }),
        }),
      },
      {
        title: `Industry Thought Leader`,
        description: `Sharing insights, contributing to industry dialogues and shaping the future of real estate.`,
        icon: (0, b.jsx)(`svg`, {
          className: `w-6 h-6 text-[#C8A46B] group-hover:scale-110 transition-transform duration-500`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          viewBox: `0 0 24 24`,
          children: (0, b.jsx)(`path`, {
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            d: `M12 2a7 7 0 00-7 7c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-7a7 7 0 00-7-7zm-3 19a1 1 0 001 1h4a1 1 0 001-1v-1H9v1z`,
          }),
        }),
      },
    ];
  ((0, _.useEffect)(() => {
    if (window.innerWidth < 768) return;
    let r = W.context(() => {
      (t.current &&
        W.fromTo(
          t.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: `power3.out`,
            scrollTrigger: {
              trigger: t.current,
              start: `top 85%`,
              toggleActions: `play none none reverse`,
            },
          },
        ),
        n.current &&
          W.fromTo(
            n.current.children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              stagger: 0.15,
              ease: `power3.out`,
              scrollTrigger: {
                trigger: n.current,
                start: `top 80%`,
                toggleActions: `play none none reverse`,
              },
            },
          ));
    }, e);
    return () => r.revert();
  }, []),
    (0, _.useEffect)(
      () => (
        (a.current = setInterval(() => {
          i((e) => (e + 1) % o.length);
        }, 4500)),
        () => {
          a.current && clearInterval(a.current);
        }
      ),
      [o.length],
    ));
  let s = (e) => {
    (i(e),
      a.current && clearInterval(a.current),
      (a.current = setInterval(() => {
        i((e) => (e + 1) % o.length);
      }, 4500)));
  };
  return (0, b.jsxs)(`section`, {
    ref: e,
    id: `expertise`,
    className: `py-20 md:py-32 bg-[#05060A] relative overflow-hidden`,
    children: [
      (0, b.jsxs)(`div`, {
        className: `absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none z-0 overflow-hidden`,
        children: [
          (0, b.jsx)(`div`, {
            className: `absolute top-0 right-0 w-[400px] h-[80px] bg-gradient-to-l from-[#C8A46B] via-[#E2C799] to-transparent opacity-20 rotate-[35deg] translate-x-32 -translate-y-12`,
          }),
          (0, b.jsx)(`div`, {
            className: `absolute top-0 right-0 w-[400px] h-[1px] bg-gradient-to-l from-[#C8A46B] to-transparent opacity-30 rotate-[35deg] translate-x-32 -translate-y-6`,
          }),
        ],
      }),
      (0, b.jsxs)(`div`, {
        className: `absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none z-0 overflow-hidden`,
        children: [
          (0, b.jsx)(`div`, {
            className: `absolute bottom-0 left-0 w-[400px] h-[80px] bg-gradient-to-r from-[#C8A46B] via-[#E2C799] to-transparent opacity-20 rotate-[35deg] -translate-x-32 translate-y-12`,
          }),
          (0, b.jsx)(`div`, {
            className: `absolute bottom-0 left-0 w-[400px] h-[1px] bg-gradient-to-r from-[#C8A46B] to-transparent opacity-30 rotate-[35deg] -translate-x-32 translate-y-6`,
          }),
        ],
      }),
      (0, b.jsxs)(`svg`, {
        className: `absolute left-0 top-0 h-full w-[35%] opacity-15 pointer-events-none z-0 hidden md:block`,
        viewBox: `0 0 300 600`,
        fill: `none`,
        children: [
          (0, b.jsx)(`path`, {
            d: `M-50 100 C 150 150, 50 350, -50 450`,
            stroke: `#C8A46B`,
            strokeWidth: `0.75`,
          }),
          (0, b.jsx)(`path`, {
            d: `M-50 130 C 180 190, 80 390, -50 490`,
            stroke: `#C8A46B`,
            strokeWidth: `0.75`,
            strokeDasharray: `3 3`,
          }),
          (0, b.jsx)(`path`, {
            d: `M-50 160 C 210 230, 110 430, -50 530`,
            stroke: `#C8A46B`,
            strokeWidth: `0.5`,
          }),
          (0, b.jsx)(`path`, {
            d: `M-50 190 C 240 270, 140 470, -50 570`,
            stroke: `#C8A46B`,
            strokeWidth: `0.5`,
          }),
        ],
      }),
      (0, b.jsxs)(`svg`, {
        className: `absolute right-0 top-0 h-full w-[35%] opacity-15 pointer-events-none z-0 hidden md:block`,
        viewBox: `0 0 300 600`,
        fill: `none`,
        children: [
          (0, b.jsx)(`path`, {
            d: `M350 100 C 150 150, 250 350, 350 450`,
            stroke: `#C8A46B`,
            strokeWidth: `0.75`,
          }),
          (0, b.jsx)(`path`, {
            d: `M350 130 C 120 190, 220 390, 350 490`,
            stroke: `#C8A46B`,
            strokeWidth: `0.75`,
            strokeDasharray: `3 3`,
          }),
          (0, b.jsx)(`path`, {
            d: `M350 160 C 90 230, 190 430, 350 530`,
            stroke: `#C8A46B`,
            strokeWidth: `0.5`,
          }),
          (0, b.jsx)(`path`, {
            d: `M350 190 C 60 270, 160 470, 350 570`,
            stroke: `#C8A46B`,
            strokeWidth: `0.5`,
          }),
        ],
      }),
      (0, b.jsx)(`div`, {
        className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C8A46B]/2 rounded-full blur-[160px] pointer-events-none z-0`,
      }),
      (0, b.jsxs)(`div`, {
        className: `max-w-7xl mx-auto px-6 md:px-12 relative z-10`,
        children: [
          (0, b.jsxs)(`div`, {
            ref: t,
            className: `flex items-center justify-center gap-4 sm:gap-6 mb-16 md:mb-24`,
            children: [
              (0, b.jsx)(`span`, {
                className: `w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C8A46B]`,
              }),
              (0, b.jsx)(`h2`, {
                className: `font-serif-luxury text-base sm:text-lg md:text-2xl lg:text-3xl tracking-[0.3em] text-[#C8A46B] font-light uppercase whitespace-nowrap`,
                children: `WHAT I DO BEST`,
              }),
              (0, b.jsx)(`span`, {
                className: `w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C8A46B]`,
              }),
            ],
          }),
          (0, b.jsx)(`div`, {
            ref: n,
            className: `hidden md:grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16`,
            children: o.map((e, t) =>
              (0, b.jsxs)(
                `div`,
                {
                  className: `relative group p-8 pt-16 rounded-[16px] bg-[#0A0D14]/75 border border-[#C8A46B]/15 hover:border-[#C8A46B]/40 hover:bg-[#0E1119] hover:shadow-[0_15px_40px_rgba(200,164,107,0.08)] transition-all duration-500 flex flex-col items-center text-center gap-4`,
                  children: [
                    (0, b.jsx)(`div`, {
                      className: `absolute -inset-px bg-gradient-to-b from-[#C8A46B]/15 to-transparent rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`,
                    }),
                    (0, b.jsx)(`div`, {
                      className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#C8A46B]/2 rounded-full blur-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`,
                    }),
                    (0, b.jsx)(`div`, {
                      className: `absolute right-6 top-8 w-1 h-1 bg-[#C8A46B] rounded-full animate-sparkle`,
                      style: { animationDelay: `${t * 0.8}s` },
                    }),
                    (0, b.jsx)(`div`, {
                      className: `absolute left-6 bottom-12 w-[3px] h-[3px] bg-[#C8A46B] rounded-full animate-sparkle`,
                      style: { animationDelay: `${t * 1.2 + 0.4}s` },
                    }),
                    (0, b.jsx)(`div`, {
                      className: `absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-[#C8A46B]/25 bg-[#080B10] flex items-center justify-center shadow-[0_4px_15px_rgba(200,164,107,0.12)] group-hover:border-[#C8A46B] group-hover:shadow-[0_0_20px_rgba(200,164,107,0.35)] transition-all duration-500 z-20`,
                      children: e.icon,
                    }),
                    (0, b.jsx)(`h3`, {
                      className: `font-serif-luxury text-xl text-white font-light tracking-wide group-hover:text-[#C8A46B] transition-colors duration-300 mt-2 z-10`,
                      children: e.title,
                    }),
                    (0, b.jsx)(`p`, {
                      className: `text-xs md:text-sm text-slate-400 font-light leading-relaxed max-w-[240px] md:max-w-none z-10`,
                      children: e.description,
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
          (0, b.jsxs)(`div`, {
            className: `md:hidden flex flex-col items-center`,
            children: [
              (0, b.jsx)(`div`, {
                className: `w-full overflow-hidden relative px-2 py-4`,
                children: (0, b.jsx)(`div`, {
                  className: `flex transition-transform duration-500 ease-in-out`,
                  style: { transform: `translateX(-${r * 100}%)` },
                  children: o.map((e, t) =>
                    (0, b.jsx)(
                      `div`,
                      {
                        className: `w-full shrink-0 px-4`,
                        children: (0, b.jsxs)(`div`, {
                          className: `relative group p-8 pt-16 rounded-[16px] bg-[#0A0D14]/75 border border-[#C8A46B]/15 hover:border-[#C8A46B]/40 hover:bg-[#0E1119] flex flex-col items-center text-center gap-4 min-h-[220px]`,
                          children: [
                            (0, b.jsx)(`div`, {
                              className: `absolute -inset-px bg-gradient-to-b from-[#C8A46B]/15 to-transparent rounded-[16px] pointer-events-none`,
                            }),
                            (0, b.jsx)(`div`, {
                              className: `absolute right-6 top-8 w-1 h-1 bg-[#C8A46B] rounded-full animate-sparkle`,
                              style: { animationDelay: `${t * 0.8}s` },
                            }),
                            (0, b.jsx)(`div`, {
                              className: `absolute left-6 bottom-12 w-[3px] h-[3px] bg-[#C8A46B] rounded-full animate-sparkle`,
                              style: { animationDelay: `${t * 1.2 + 0.4}s` },
                            }),
                            (0, b.jsx)(`div`, {
                              className: `absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-[#C8A46B]/25 bg-[#080B10] flex items-center justify-center shadow-[0_4px_15px_rgba(200,164,107,0.12)] transition-all duration-500 z-20`,
                              children: e.icon,
                            }),
                            (0, b.jsx)(`h3`, {
                              className: `font-serif-luxury text-xl text-white font-light tracking-wide mt-2 z-10`,
                              children: e.title,
                            }),
                            (0, b.jsx)(`p`, {
                              className: `text-xs text-slate-400 font-light leading-relaxed max-w-[240px] z-10`,
                              children: e.description,
                            }),
                          ],
                        }),
                      },
                      t,
                    ),
                  ),
                }),
              }),
              (0, b.jsx)(`div`, {
                className: `flex gap-2.5 mt-6`,
                children: o.map((e, t) =>
                  (0, b.jsx)(
                    `button`,
                    {
                      onClick: () => s(t),
                      className: `w-2 h-2 rounded-full transition-all duration-300 ${r === t ? `bg-[#C8A46B] scale-125 shadow-[0_0_8px_rgba(200,164,107,0.8)]` : `bg-[#C8A46B]/30`}`,
                      "aria-label": `Go to slide ${t + 1}`,
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function uc(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `constructor` in e &&
    e.constructor === Object
  );
}
function dc(e = {}, t = {}) {
  let n = [`__proto__`, `constructor`, `prototype`];
  Object.keys(t)
    .filter((e) => n.indexOf(e) < 0)
    .forEach((n) => {
      e[n] === void 0
        ? (e[n] = t[n])
        : uc(t[n]) &&
          uc(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          dc(e[n], t[n]);
    });
}
var fc = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: `` },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: ``,
    host: ``,
    hostname: ``,
    href: ``,
    origin: ``,
    pathname: ``,
    protocol: ``,
    search: ``,
  },
};
function pc() {
  let e = typeof document < `u` ? document : {};
  return (dc(e, fc), e);
}
var mc = {
  document: fc,
  navigator: { userAgent: `` },
  location: {
    hash: ``,
    host: ``,
    hostname: ``,
    href: ``,
    origin: ``,
    pathname: ``,
    protocol: ``,
    search: ``,
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ``;
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > `u` ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > `u` || clearTimeout(e);
  },
};
function hc() {
  let e = typeof window < `u` ? window : {};
  return (dc(e, mc), e);
}
function gc(e = ``) {
  return e
    .trim()
    .split(` `)
    .filter((e) => !!e.trim());
}
function _c(e) {
  let t = e;
  Object.keys(t).forEach((e) => {
    try {
      t[e] = null;
    } catch {}
    try {
      delete t[e];
    } catch {}
  });
}
function vc(e, t = 0) {
  return setTimeout(e, t);
}
function yc() {
  return Date.now();
}
function bc(e) {
  let t = hc(),
    n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    (n ||= e.style),
    n
  );
}
function xc(e, t = `x`) {
  let n = hc(),
    r,
    i,
    a,
    o = bc(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(`,`).length > 6 &&
          (i = i
            .split(`, `)
            .map((e) => e.replace(`,`, `.`))
            .join(`, `)),
        (a = new n.WebKitCSSMatrix(i === `none` ? `` : i)))
      : ((a =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue(`transform`)
            .replace(`translate(`, `matrix(1, 0, 0, 1,`)),
        (r = a.toString().split(`,`))),
    t === `x` &&
      (i = n.WebKitCSSMatrix
        ? a.m41
        : r.length === 16
          ? parseFloat(r[12])
          : parseFloat(r[4])),
    t === `y` &&
      (i = n.WebKitCSSMatrix
        ? a.m42
        : r.length === 16
          ? parseFloat(r[13])
          : parseFloat(r[5])),
    i || 0
  );
}
function Sc(e) {
  return (
    typeof e == `object` &&
    !!e &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === `Object`
  );
}
function Cc(e) {
  return typeof window < `u` && window.HTMLElement !== void 0
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function wc(...e) {
  let t = Object(e[0]);
  for (let n = 1; n < e.length; n += 1) {
    let r = e[n];
    if (r != null && !Cc(r)) {
      let e = Object.keys(Object(r)).filter(
        (e) => e !== `__proto__` && e !== `constructor` && e !== `prototype`,
      );
      for (let n = 0, i = e.length; n < i; n += 1) {
        let i = e[n],
          a = Object.getOwnPropertyDescriptor(r, i);
        a !== void 0 &&
          a.enumerable &&
          (Sc(t[i]) && Sc(r[i])
            ? r[i].__swiper__
              ? (t[i] = r[i])
              : wc(t[i], r[i])
            : !Sc(t[i]) && Sc(r[i])
              ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : wc(t[i], r[i]))
              : (t[i] = r[i]));
      }
    }
  }
  return t;
}
function Tc(e, t, n) {
  e.style.setProperty(t, n);
}
function Ec({ swiper: e, targetPosition: t, side: n }) {
  let r = hc(),
    i = -e.translate,
    a = null,
    o,
    s = e.params.speed;
  ((e.wrapperEl.style.scrollSnapType = `none`),
    r.cancelAnimationFrame(e.cssModeFrameID));
  let c = t > i ? `next` : `prev`,
    l = (e, t) => (c === `next` && e >= t) || (c === `prev` && e <= t),
    u = () => {
      ((o = new Date().getTime()), a === null && (a = o));
      let c = Math.max(Math.min((o - a) / s, 1), 0),
        d = i + (0.5 - Math.cos(c * Math.PI) / 2) * (t - i);
      if ((l(d, t) && (d = t), e.wrapperEl.scrollTo({ [n]: d }), l(d, t))) {
        ((e.wrapperEl.style.overflow = `hidden`),
          (e.wrapperEl.style.scrollSnapType = ``),
          setTimeout(() => {
            ((e.wrapperEl.style.overflow = ``),
              e.wrapperEl.scrollTo({ [n]: d }));
          }),
          r.cancelAnimationFrame(e.cssModeFrameID));
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(u);
    };
  u();
}
function Dc(e, t = ``) {
  let n = hc(),
    r = [...e.children];
  return (
    n.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      r.push(...e.assignedElements()),
    t ? r.filter((e) => e.matches(t)) : r
  );
}
function Oc(e, t) {
  let n = [t];
  for (; n.length > 0; ) {
    let t = n.shift();
    if (e === t) return !0;
    n.push(
      ...t.children,
      ...(t.shadowRoot ? t.shadowRoot.children : []),
      ...(t.assignedElements ? t.assignedElements() : []),
    );
  }
}
function kc(e, t) {
  let n = hc(),
    r = t.contains(e);
  return (
    !r &&
      n.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      ((r = [...t.assignedElements()].includes(e)), (r ||= Oc(e, t))),
    r
  );
}
function Ac(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function jc(e, t = []) {
  let n = document.createElement(e);
  return (n.classList.add(...(Array.isArray(t) ? t : gc(t))), n);
}
function Mc(e, t) {
  let n = [];
  for (; e.previousElementSibling; ) {
    let r = e.previousElementSibling;
    (t ? r.matches(t) && n.push(r) : n.push(r), (e = r));
  }
  return n;
}
function Nc(e, t) {
  let n = [];
  for (; e.nextElementSibling; ) {
    let r = e.nextElementSibling;
    (t ? r.matches(t) && n.push(r) : n.push(r), (e = r));
  }
  return n;
}
function Pc(e, t) {
  return hc().getComputedStyle(e, null).getPropertyValue(t);
}
function Fc(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Ic(e, t) {
  let n = [],
    r = e.parentElement;
  for (; r; )
    (t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement));
  return n;
}
function Lc(e, t, n) {
  let r = hc();
  return n
    ? e[t === `width` ? `offsetWidth` : `offsetHeight`] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === `width` ? `margin-right` : `margin-top`),
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === `width` ? `margin-left` : `margin-bottom`),
        )
    : e.offsetWidth;
}
function Rc(e, t = ``) {
  typeof trustedTypes < `u`
    ? (e.innerHTML = trustedTypes
        .createPolicy(`html`, { createHTML: (e) => e })
        .createHTML(t))
    : (e.innerHTML = t);
}
var zc;
function Bc() {
  let e = hc(),
    t = pc();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      `scrollBehavior` in t.documentElement.style,
    touch: !!(
      `ontouchstart` in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Vc() {
  return ((zc ||= Bc()), zc);
}
var Hc;
function Uc({ userAgent: e } = {}) {
  let t = Vc(),
    n = hc(),
    r = n.navigator.platform,
    i = e || n.navigator.userAgent,
    a = { ios: !1, android: !1 },
    o = n.screen.width,
    s = n.screen.height,
    c = i.match(/(Android);?[\s\/]+([\d.]+)?/),
    l = i.match(/(iPad)(?!\1).*OS\s([\d_]+)/),
    u = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !l && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = r === `Win32`,
    p = r === `MacIntel`;
  return (
    !l &&
      p &&
      t.touch &&
      [
        `1024x1366`,
        `1366x1024`,
        `834x1194`,
        `1194x834`,
        `834x1112`,
        `1112x834`,
        `768x1024`,
        `1024x768`,
        `820x1180`,
        `1180x820`,
        `810x1080`,
        `1080x810`,
      ].indexOf(`${o}x${s}`) >= 0 &&
      ((l = i.match(/(Version)\/([\d.]+)/)),
      (l ||= [0, 1, `13_0_0`]),
      (p = !1)),
    c && !f && ((a.os = `android`), (a.android = !0)),
    (l || d || u) && ((a.os = `ios`), (a.ios = !0)),
    a
  );
}
function Wc(e = {}) {
  return ((Hc ||= Uc(e)), Hc);
}
var Gc;
function Kc() {
  let e = hc(),
    t = Wc(),
    n = !1;
  function r() {
    let t = e.navigator.userAgent.toLowerCase();
    return (
      t.indexOf(`safari`) >= 0 &&
      t.indexOf(`chrome`) < 0 &&
      t.indexOf(`android`) < 0
    );
  }
  if (r()) {
    let t = String(e.navigator.userAgent);
    if (t.includes(`Version/`)) {
      let [e, r] = t
        .split(`Version/`)[1]
        .split(` `)[0]
        .split(`.`)
        .map((e) => Number(e));
      n = e < 16 || (e === 16 && r < 2);
    }
  }
  let i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
    a = r(),
    o = a || (i && t.ios);
  return {
    isSafari: n || a,
    needPerspectiveFix: n,
    need3dFix: o,
    isWebView: i,
  };
}
function qc() {
  return ((Gc ||= Kc()), Gc);
}
function Jc({ swiper: e, on: t, emit: n }) {
  let r = hc(),
    i = null,
    a = null,
    o = () => {
      !e || e.destroyed || !e.initialized || (n(`beforeResize`), n(`resize`));
    },
    s = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((i = new ResizeObserver((t) => {
          a = r.requestAnimationFrame(() => {
            let { width: n, height: r } = e,
              i = n,
              a = r;
            (t.forEach(({ contentBoxSize: t, contentRect: n, target: r }) => {
              (r && r !== e.el) ||
                ((i = n ? n.width : (t[0] || t).inlineSize),
                (a = n ? n.height : (t[0] || t).blockSize));
            }),
              (i !== n || a !== r) && o());
          });
        })),
        i.observe(e.el));
    },
    c = () => {
      (a && r.cancelAnimationFrame(a),
        i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)));
    },
    l = () => {
      !e || e.destroyed || !e.initialized || n(`orientationchange`);
    };
  (t(`init`, () => {
    if (e.params.resizeObserver && r.ResizeObserver !== void 0) {
      s();
      return;
    }
    (r.addEventListener(`resize`, o),
      r.addEventListener(`orientationchange`, l));
  }),
    t(`destroy`, () => {
      (c(),
        r.removeEventListener(`resize`, o),
        r.removeEventListener(`orientationchange`, l));
    }));
}
function Yc({ swiper: e, extendParams: t, on: n, emit: r }) {
  let i = [],
    a = hc(),
    o = (t, n = {}) => {
      let o = new (a.MutationObserver || a.WebkitMutationObserver)((t) => {
        if (e.__preventObserver__) return;
        if (t.length === 1) {
          r(`observerUpdate`, t[0]);
          return;
        }
        let n = function () {
          r(`observerUpdate`, t[0]);
        };
        a.requestAnimationFrame
          ? a.requestAnimationFrame(n)
          : a.setTimeout(n, 0);
      });
      (o.observe(t, {
        attributes: n.attributes === void 0 ? !0 : n.attributes,
        childList: e.isElement || (n.childList === void 0 ? !0 : n).childList,
        characterData: n.characterData === void 0 ? !0 : n.characterData,
      }),
        i.push(o));
    };
  (t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    n(`init`, () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          let t = Ic(e.hostEl);
          for (let e = 0; e < t.length; e += 1) o(t[e]);
        }
        (o(e.hostEl, { childList: e.params.observeSlideChildren }),
          o(e.wrapperEl, { attributes: !1 }));
      }
    }),
    n(`destroy`, () => {
      (i.forEach((e) => {
        e.disconnect();
      }),
        i.splice(0, i.length));
    }));
}
var Xc = {
  on(e, t, n) {
    let r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != `function`) return r;
    let i = n ? `unshift` : `push`;
    return (
      e.split(` `).forEach((e) => {
        (r.eventsListeners[e] || (r.eventsListeners[e] = []),
          r.eventsListeners[e][i](t));
      }),
      r
    );
  },
  once(e, t, n) {
    let r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != `function`) return r;
    function i(...n) {
      (r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, n));
    }
    return ((i.__emitterProxy = t), r.on(e, i, n));
  },
  onAny(e, t) {
    let n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != `function`) return n;
    let r = t ? `unshift` : `push`;
    return (
      n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e),
      n
    );
  },
  offAny(e) {
    let t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    let n = t.eventsAnyListeners.indexOf(e);
    return (n >= 0 && t.eventsAnyListeners.splice(n, 1), t);
  },
  off(e, t) {
    let n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(` `).forEach((e) => {
          t === void 0
            ? (n.eventsListeners[e] = [])
            : n.eventsListeners[e] &&
              n.eventsListeners[e].forEach((r, i) => {
                (r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                  n.eventsListeners[e].splice(i, 1);
              });
        }),
      n
    );
  },
  emit(...e) {
    let t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let n, r, i;
    return (
      typeof e[0] == `string` || Array.isArray(e[0])
        ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
        : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
      r.unshift(i),
      (Array.isArray(n) ? n : n.split(` `)).forEach((e) => {
        (t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((t) => {
            t.apply(i, [e, ...r]);
          }),
          t.eventsListeners &&
            t.eventsListeners[e] &&
            t.eventsListeners[e].forEach((e) => {
              e.apply(i, r);
            }));
      }),
      t
    );
  },
};
function Zc() {
  let e = this,
    t,
    n,
    r = e.el;
  ((t =
    e.params.width !== void 0 && e.params.width !== null
      ? e.params.width
      : r.clientWidth),
    (n =
      e.params.height !== void 0 && e.params.height !== null
        ? e.params.height
        : r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Pc(r, `padding-left`) || 0, 10) -
        parseInt(Pc(r, `padding-right`) || 0, 10)),
      (n =
        n -
        parseInt(Pc(r, `padding-top`) || 0, 10) -
        parseInt(Pc(r, `padding-bottom`) || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      })));
}
function Qc() {
  let e = this;
  function t(t, n) {
    return parseFloat(t.getPropertyValue(e.getDirectionLabel(n)) || 0);
  }
  let n = e.params,
    { wrapperEl: r, slidesEl: i, rtlTranslate: a, wrongRTL: o } = e,
    s = e.virtual && n.virtual.enabled,
    c = s ? e.virtual.slides.length : e.slides.length,
    l = Dc(i, `.${e.params.slideClass}, swiper-slide`),
    u = s ? e.virtual.slides.length : l.length,
    d = [],
    f = [],
    p = [],
    m = n.slidesOffsetBefore;
  typeof m == `function` && (m = n.slidesOffsetBefore.call(e));
  let h = n.slidesOffsetAfter;
  typeof h == `function` && (h = n.slidesOffsetAfter.call(e));
  let g = e.snapGrid.length,
    _ = e.slidesGrid.length,
    v = e.size - m - h,
    y = n.spaceBetween,
    b = -m,
    x = 0,
    S = 0;
  if (v === void 0) return;
  (typeof y == `string` && y.indexOf(`%`) >= 0
    ? (y = (parseFloat(y.replace(`%`, ``)) / 100) * v)
    : typeof y == `string` && (y = parseFloat(y)),
    (e.virtualSize = -y - m - h),
    l.forEach((e) => {
      (a ? (e.style.marginLeft = ``) : (e.style.marginRight = ``),
        (e.style.marginBottom = ``),
        (e.style.marginTop = ``));
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Tc(r, `--swiper-centered-offset-before`, ``),
      Tc(r, `--swiper-centered-offset-after`, ``)),
    n.cssMode &&
      (Tc(r, `--swiper-slides-offset-before`, `${m}px`),
      Tc(r, `--swiper-slides-offset-after`, `${h}px`)));
  let C = n.grid && n.grid.rows > 1 && e.grid;
  C ? e.grid.initSlides(l) : e.grid && e.grid.unsetSlides();
  let w,
    T =
      n.slidesPerView === `auto` &&
      n.breakpoints &&
      Object.keys(n.breakpoints).filter(
        (e) => n.breakpoints[e].slidesPerView !== void 0,
      ).length > 0;
  for (let r = 0; r < u; r += 1) {
    w = 0;
    let i = l[r];
    if (
      !(i && (C && e.grid.updateSlide(r, i, l), Pc(i, `display`) === `none`))
    ) {
      if (s && n.slidesPerView === `auto`)
        (n.virtual.slidesPerViewAutoSlideSize &&
          (w = n.virtual.slidesPerViewAutoSlideSize),
          w &&
            i &&
            (n.roundLengths && (w = Math.floor(w)),
            (i.style[e.getDirectionLabel(`width`)] = `${w}px`)));
      else if (n.slidesPerView === `auto`) {
        T && (i.style[e.getDirectionLabel(`width`)] = ``);
        let r = getComputedStyle(i),
          a = i.style.transform,
          o = i.style.webkitTransform;
        if (
          (a && (i.style.transform = `none`),
          o && (i.style.webkitTransform = `none`),
          n.roundLengths)
        )
          w = e.isHorizontal() ? Lc(i, `width`, !0) : Lc(i, `height`, !0);
        else {
          let e = t(r, `width`),
            n = t(r, `padding-left`),
            a = t(r, `padding-right`),
            o = t(r, `margin-left`),
            s = t(r, `margin-right`),
            c = r.getPropertyValue(`box-sizing`);
          if (c && c === `border-box`) w = e + o + s;
          else {
            let { clientWidth: t, offsetWidth: r } = i;
            w = e + n + a + o + s + (r - t);
          }
        }
        (a && (i.style.transform = a),
          o && (i.style.webkitTransform = o),
          n.roundLengths && (w = Math.floor(w)));
      } else
        ((w = (v - (n.slidesPerView - 1) * y) / n.slidesPerView),
          n.roundLengths && (w = Math.floor(w)),
          i && (i.style[e.getDirectionLabel(`width`)] = `${w}px`));
      (i && (i.swiperSlideSize = w),
        p.push(w),
        n.centeredSlides
          ? ((b = b + w / 2 + x / 2 + y),
            x === 0 && r !== 0 && (b = b - v / 2 - y),
            r === 0 && (b = b - v / 2 - y),
            Math.abs(b) < 1 / 1e3 && (b = 0),
            n.roundLengths && (b = Math.floor(b)),
            S % n.slidesPerGroup === 0 && d.push(b),
            f.push(b))
          : (n.roundLengths && (b = Math.floor(b)),
            (S - Math.min(e.params.slidesPerGroupSkip, S)) %
              e.params.slidesPerGroup ===
              0 && d.push(b),
            f.push(b),
            (b = b + w + y)),
        (e.virtualSize += w + y),
        (x = w),
        (S += 1));
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, v) + h),
    a &&
      o &&
      (n.effect === `slide` || n.effect === `coverflow`) &&
      (r.style.width = `${e.virtualSize + y}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel(`width`)] = `${e.virtualSize + y}px`),
    C && e.grid.updateWrapperSize(w, d),
    !n.centeredSlides)
  ) {
    let t = n.slidesPerView !== `auto` && n.slidesPerView % 1 != 0,
      r = n.snapToSlideEdge && !n.loop && (n.slidesPerView === `auto` || t),
      i = d.length;
    if (r) {
      let e;
      if (n.slidesPerView === `auto`) {
        e = 1;
        let t = 0;
        for (
          let n = p.length - 1;
          n >= 0 && ((t += p[n] + (n < p.length - 1 ? y : 0)), t <= v);
          --n
        )
          e = p.length - n;
      } else e = Math.floor(n.slidesPerView);
      i = Math.max(u - e, 0);
    }
    let a = [];
    for (let t = 0; t < d.length; t += 1) {
      let o = d[t];
      (n.roundLengths && (o = Math.floor(o)),
        r ? t <= i && a.push(o) : d[t] <= e.virtualSize - v && a.push(o));
    }
    ((d = a),
      Math.floor(e.virtualSize - v) - Math.floor(d[d.length - 1]) > 1 &&
        (r || d.push(e.virtualSize - v)));
  }
  if (s && n.loop) {
    let t = p[0] + y;
    if (n.slidesPerGroup > 1) {
      let r = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        i = t * n.slidesPerGroup;
      for (let e = 0; e < r; e += 1) d.push(d[d.length - 1] + i);
    }
    for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1)
      (n.slidesPerGroup === 1 && d.push(d[d.length - 1] + t),
        f.push(f[f.length - 1] + t),
        (e.virtualSize += t));
  }
  if ((d.length === 0 && (d = [0]), y !== 0)) {
    let t =
      e.isHorizontal() && a ? `marginLeft` : e.getDirectionLabel(`marginRight`);
    l.filter((e, t) =>
      !n.cssMode || n.loop ? !0 : t !== l.length - 1,
    ).forEach((e) => {
      e.style[t] = `${y}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let e = 0;
    (p.forEach((t) => {
      e += t + (y || 0);
    }),
      (e -= y));
    let t = e > v ? e - v : 0;
    d = d.map((e) => (e <= 0 ? -m : e > t ? t + h : e));
  }
  if (n.centerInsufficientSlides) {
    let e = 0;
    if (
      (p.forEach((t) => {
        e += t + (y || 0);
      }),
      (e -= y),
      e < v)
    ) {
      let t = (v - e) / 2;
      (d.forEach((e, n) => {
        d[n] = e - t;
      }),
        f.forEach((e, n) => {
          f[n] = e + t;
        }));
    }
  }
  if (
    (Object.assign(e, {
      slides: l,
      snapGrid: d,
      slidesGrid: f,
      slidesSizesGrid: p,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    (Tc(r, `--swiper-centered-offset-before`, `${-d[0]}px`),
      Tc(
        r,
        `--swiper-centered-offset-after`,
        `${e.size / 2 - p[p.length - 1] / 2}px`,
      ));
    let t = -e.snapGrid[0],
      n = -e.slidesGrid[0];
    ((e.snapGrid = e.snapGrid.map((e) => e + t)),
      (e.slidesGrid = e.slidesGrid.map((e) => e + n)));
  }
  if (
    (u !== c && e.emit(`slidesLengthChange`),
    d.length !== g &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit(`snapGridLengthChange`)),
    f.length !== _ && e.emit(`slidesGridLengthChange`),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit(`slidesUpdated`),
    !s && !n.cssMode && (n.effect === `slide` || n.effect === `fade`))
  ) {
    let t = `${n.containerModifierClass}backface-hidden`,
      r = e.el.classList.contains(t);
    u <= n.maxBackfaceHiddenSlides
      ? r || e.el.classList.add(t)
      : r && e.el.classList.remove(t);
  }
}
function $c(e) {
  let t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled,
    i = 0,
    a;
  typeof e == `number`
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  let o = (e) => (r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
  if (t.params.slidesPerView !== `auto` && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((e) => {
        n.push(e);
      });
    else
      for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
        let e = t.activeIndex + a;
        if (e > t.slides.length && !r) break;
        n.push(o(e));
      }
  else n.push(o(t.activeIndex));
  for (a = 0; a < n.length; a += 1)
    if (n[a] !== void 0) {
      let e = n[a].offsetHeight;
      i = e > i ? e : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function el() {
  let e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
var tl = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function nl(e = (this && this.translate) || 0) {
  let t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: a } = t;
  if (r.length === 0) return;
  r[0].swiperSlideOffset === void 0 && t.updateSlidesOffset();
  let o = -e;
  (i && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []));
  let s = n.spaceBetween;
  typeof s == `string` && s.indexOf(`%`) >= 0
    ? (s = (parseFloat(s.replace(`%`, ``)) / 100) * t.size)
    : typeof s == `string` && (s = parseFloat(s));
  for (let e = 0; e < r.length; e += 1) {
    let c = r[e],
      l = c.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
    let u =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
        (c.swiperSlideSize + s),
      d =
        (o - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
        (c.swiperSlideSize + s),
      f = -(o - l),
      p = f + t.slidesSizesGrid[e],
      m = f >= 0 && f <= t.size - t.slidesSizesGrid[e],
      h =
        (f >= 0 && f < t.size - 1) ||
        (p > 1 && p <= t.size) ||
        (f <= 0 && p >= t.size);
    (h && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(e)),
      tl(c, h, n.slideVisibleClass),
      tl(c, m, n.slideFullyVisibleClass),
      (c.progress = i ? -u : u),
      (c.originalProgress = i ? -d : d));
  }
}
function rl(e) {
  let t = this;
  if (e === void 0) {
    let n = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * n) || 0;
  }
  let n = t.params,
    r = t.maxTranslate() - t.minTranslate(),
    { progress: i, isBeginning: a, isEnd: o, progressLoop: s } = t,
    c = a,
    l = o;
  if (r === 0) ((i = 0), (a = !0), (o = !0));
  else {
    i = (e - t.minTranslate()) / r;
    let n = Math.abs(e - t.minTranslate()) < 1,
      s = Math.abs(e - t.maxTranslate()) < 1;
    ((a = n || i <= 0), (o = s || i >= 1), n && (i = 0), s && (i = 1));
  }
  if (n.loop) {
    let n = t.getSlideIndexByData(0),
      r = t.getSlideIndexByData(t.slides.length - 1),
      i = t.slidesGrid[n],
      a = t.slidesGrid[r],
      o = t.slidesGrid[t.slidesGrid.length - 1],
      c = Math.abs(e);
    ((s = c >= i ? (c - i) / o : (c + o - a) / o), s > 1 && --s);
  }
  (Object.assign(t, { progress: i, progressLoop: s, isBeginning: a, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    a && !c && t.emit(`reachBeginning toEdge`),
    o && !l && t.emit(`reachEnd toEdge`),
    ((c && !a) || (l && !o)) && t.emit(`fromEdge`),
    t.emit(`progress`, i));
}
var il = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function al() {
  let e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    a = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    s = (e) => Dc(r, `.${n.slideClass}${e}, swiper-slide${e}`)[0],
    c,
    l,
    u;
  if (a)
    if (n.loop) {
      let t = i - e.virtual.slidesBefore;
      (t < 0 && (t = e.virtual.slides.length + t),
        t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
        (c = s(`[data-swiper-slide-index="${t}"]`)));
    } else c = s(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((c = t.find((e) => e.column === i)),
        (u = t.find((e) => e.column === i + 1)),
        (l = t.find((e) => e.column === i - 1)))
      : (c = t[i]);
  (c &&
    (o ||
      ((u = Nc(c, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u && (u = t[0]),
      (l = Mc(c, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop)),
    t.forEach((e) => {
      (il(e, e === c, n.slideActiveClass),
        il(e, e === u, n.slideNextClass),
        il(e, e === l, n.slidePrevClass));
    }),
    e.emitSlidesClasses());
}
var ol = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    let n = t.closest(e.isElement ? `swiper-slide` : `.${e.params.slideClass}`);
    if (n) {
      let t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
      (!t &&
        e.isElement &&
        (n.shadowRoot
          ? (t = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              n.shadowRoot &&
                ((t = n.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                t && !t.lazyPreloaderManaged && t.remove());
            })),
        t && !t.lazyPreloaderManaged && t.remove());
    }
  },
  sl = (e, t) => {
    if (!e.slides[t]) return;
    let n = e.slides[t].querySelector(`[loading="lazy"]`);
    n && n.removeAttribute(`loading`);
  },
  cl = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext,
      n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    let r =
        e.params.slidesPerView === `auto`
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      let n = i,
        a = [n - t];
      (a.push(...Array.from({ length: t }).map((e, t) => n + r + t)),
        e.slides.forEach((t, n) => {
          a.includes(t.column) && sl(e, n);
        }));
      return;
    }
    let a = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let r = i - t; r <= a + t; r += 1) {
        let t = ((r % n) + n) % n;
        (t < i || t > a) && sl(e, t);
      }
    else
      for (let r = Math.max(i - t, 0); r <= Math.min(a + t, n - 1); r += 1)
        r !== i && (r > a || r < i) && sl(e, r);
  };
function ll(e) {
  let { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate,
    i;
  for (let e = 0; e < t.length; e += 1)
    t[e + 1] === void 0
      ? r >= t[e] && (i = e)
      : r >= t[e] && r < t[e + 1] - (t[e + 1] - t[e]) / 2
        ? (i = e)
        : r >= t[e] && r < t[e + 1] && (i = e + 1);
  return (n.normalizeSlideIndex && (i < 0 || i === void 0) && (i = 0), i);
}
function ul(e) {
  let t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: a, realIndex: o, snapIndex: s } = t,
    c = e,
    l,
    u = (e) => {
      let n = e - t.virtual.slidesBefore;
      return (
        n < 0 && (n = t.virtual.slides.length + n),
        n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
        n
      );
    };
  if ((c === void 0 && (c = ll(t)), r.indexOf(n) >= 0)) l = r.indexOf(n);
  else {
    let e = Math.min(i.slidesPerGroupSkip, c);
    l = e + Math.floor((c - e) / i.slidesPerGroup);
  }
  if ((l >= r.length && (l = r.length - 1), c === a && !t.params.loop)) {
    l !== s && ((t.snapIndex = l), t.emit(`snapIndexChange`));
    return;
  }
  if (c === a && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = u(c);
    return;
  }
  let d = t.grid && i.grid && i.grid.rows > 1,
    f;
  if (t.virtual && i.virtual.enabled) f = i.loop ? u(c) : c;
  else if (d) {
    let e = t.slides.find((e) => e.column === c),
      n = parseInt(e.getAttribute(`data-swiper-slide-index`), 10);
    (Number.isNaN(n) && (n = Math.max(t.slides.indexOf(e), 0)),
      (f = Math.floor(n / i.grid.rows)));
  } else if (t.slides[c]) {
    let e = t.slides[c].getAttribute(`data-swiper-slide-index`);
    f = e ? parseInt(e, 10) : c;
  } else f = c;
  (Object.assign(t, {
    previousSnapIndex: s,
    snapIndex: l,
    previousRealIndex: o,
    realIndex: f,
    previousIndex: a,
    activeIndex: c,
  }),
    t.initialized && cl(t),
    t.emit(`activeIndexChange`),
    t.emit(`snapIndexChange`),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== f && t.emit(`realIndexChange`), t.emit(`slideChange`)));
}
function dl(e, t) {
  let n = this,
    r = n.params,
    i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
      !i && e.matches && e.matches(`.${r.slideClass}, swiper-slide`) && (i = e);
    });
  let a = !1,
    o;
  if (i) {
    for (let e = 0; e < n.slides.length; e += 1)
      if (n.slides[e] === i) {
        ((a = !0), (o = e));
        break;
      }
  }
  if (i && a)
    ((n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute(`data-swiper-slide-index`),
            10,
          ))
        : (n.clickedIndex = o));
  else {
    ((n.clickedSlide = void 0), (n.clickedIndex = void 0));
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var fl = {
  updateSize: Zc,
  updateSlides: Qc,
  updateAutoHeight: $c,
  updateSlidesOffset: el,
  updateSlidesProgress: nl,
  updateProgress: rl,
  updateSlidesClasses: al,
  updateActiveIndex: ul,
  updateClickedSlide: dl,
};
function pl(e = this.isHorizontal() ? `x` : `y`) {
  let t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: a } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = xc(a, e);
  return ((o += t.cssOverflowAdjustment()), r && (o = -o), o || 0);
}
function ml(e, t) {
  let n = this,
    { rtlTranslate: r, params: i, wrapperEl: a, progress: o } = n,
    s = 0,
    c = 0;
  (n.isHorizontal() ? (s = r ? -e : e) : (c = e),
    i.roundLengths && ((s = Math.floor(s)), (c = Math.floor(c))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? s : c),
    i.cssMode
      ? (a[n.isHorizontal() ? `scrollLeft` : `scrollTop`] = n.isHorizontal()
          ? -s
          : -c)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (s -= n.cssOverflowAdjustment())
          : (c -= n.cssOverflowAdjustment()),
        (a.style.transform = `translate3d(${s}px, ${c}px, 0px)`)));
  let l,
    u = n.maxTranslate() - n.minTranslate();
  ((l = u === 0 ? 0 : (e - n.minTranslate()) / u),
    l !== o && n.updateProgress(e),
    n.emit(`setTranslate`, n.translate, t));
}
function hl() {
  return -this.snapGrid[0];
}
function gl() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function _l(e = 0, t = this.params.speed, n = !0, r = !0, i) {
  let a = this,
    { params: o, wrapperEl: s } = a;
  if (a.animating && o.preventInteractionOnTransition) return !1;
  let c = a.minTranslate(),
    l = a.maxTranslate(),
    u;
  if (
    ((u = r && e > c ? c : r && e < l ? l : e), a.updateProgress(u), o.cssMode)
  ) {
    let e = a.isHorizontal();
    if (t === 0) s[e ? `scrollLeft` : `scrollTop`] = -u;
    else {
      if (!a.support.smoothScroll)
        return (
          Ec({ swiper: a, targetPosition: -u, side: e ? `left` : `top` }),
          !0
        );
      s.scrollTo({ [e ? `left` : `top`]: -u, behavior: `smooth` });
    }
    return !0;
  }
  return (
    t === 0
      ? (a.setTransition(0),
        a.setTranslate(u),
        n && (a.emit(`beforeTransitionStart`, t, i), a.emit(`transitionEnd`)))
      : (a.setTransition(t),
        a.setTranslate(u),
        n && (a.emit(`beforeTransitionStart`, t, i), a.emit(`transitionStart`)),
        a.animating ||
          ((a.animating = !0),
          (a.onTranslateToWrapperTransitionEnd ||= function (e) {
            !a ||
              a.destroyed ||
              (e.target === this &&
                (a.wrapperEl.removeEventListener(
                  `transitionend`,
                  a.onTranslateToWrapperTransitionEnd,
                ),
                (a.onTranslateToWrapperTransitionEnd = null),
                delete a.onTranslateToWrapperTransitionEnd,
                (a.animating = !1),
                n && a.emit(`transitionEnd`)));
          }),
          a.wrapperEl.addEventListener(
            `transitionend`,
            a.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var vl = {
  getTranslate: pl,
  setTranslate: ml,
  minTranslate: hl,
  maxTranslate: gl,
  translateTo: _l,
};
function yl(e, t) {
  let n = this;
  (n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? `0ms` : ``)),
    n.emit(`setTransition`, e, t));
}
function bl({ swiper: e, runCallbacks: t, direction: n, step: r }) {
  let { activeIndex: i, previousIndex: a } = e,
    o = n;
  ((o ||= i > a ? `next` : i < a ? `prev` : `reset`),
    e.emit(`transition${r}`),
    t && o === `reset`
      ? e.emit(`slideResetTransition${r}`)
      : t &&
        i !== a &&
        (e.emit(`slideChangeTransition${r}`),
        o === `next`
          ? e.emit(`slideNextTransition${r}`)
          : e.emit(`slidePrevTransition${r}`)));
}
function xl(e = !0, t) {
  let n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    bl({ swiper: n, runCallbacks: e, direction: t, step: `Start` }));
}
function Sl(e = !0, t) {
  let n = this,
    { params: r } = n;
  ((n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      bl({ swiper: n, runCallbacks: e, direction: t, step: `End` })));
}
var Cl = { setTransition: yl, transitionStart: xl, transitionEnd: Sl };
function wl(e = 0, t, n = !0, r, i) {
  typeof e == `string` && (e = parseInt(e, 10));
  let a = this,
    o = e;
  o < 0 && (o = 0);
  let {
    params: s,
    snapGrid: c,
    slidesGrid: l,
    previousIndex: u,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: p,
    enabled: m,
  } = a;
  if (
    (!m && !r && !i) ||
    a.destroyed ||
    (a.animating && s.preventInteractionOnTransition)
  )
    return !1;
  t === void 0 && (t = a.params.speed);
  let h = Math.min(a.params.slidesPerGroupSkip, o),
    g = h + Math.floor((o - h) / a.params.slidesPerGroup);
  g >= c.length && (g = c.length - 1);
  let _ = -c[g];
  if (s.normalizeSlideIndex)
    for (let e = 0; e < l.length; e += 1) {
      let t = -Math.floor(_ * 100),
        n = Math.floor(l[e] * 100),
        r = Math.floor(l[e + 1] * 100);
      l[e + 1] === void 0
        ? t >= n && (o = e)
        : t >= n && t < r - (r - n) / 2
          ? (o = e)
          : t >= n && t < r && (o = e + 1);
    }
  if (
    a.initialized &&
    o !== d &&
    ((!a.allowSlideNext &&
      (f
        ? _ > a.translate && _ > a.minTranslate()
        : _ < a.translate && _ < a.minTranslate())) ||
      (!a.allowSlidePrev &&
        _ > a.translate &&
        _ > a.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  (o !== (u || 0) && n && a.emit(`beforeSlideChangeStart`),
    a.updateProgress(_));
  let v;
  v = o > d ? `next` : o < d ? `prev` : `reset`;
  let y = a.virtual && a.params.virtual.enabled;
  if (!(y && i) && ((f && -_ === a.translate) || (!f && _ === a.translate)))
    return (
      a.updateActiveIndex(o),
      s.autoHeight && a.updateAutoHeight(),
      a.updateSlidesClasses(),
      s.effect !== `slide` && a.setTranslate(_),
      v !== `reset` && (a.transitionStart(n, v), a.transitionEnd(n, v)),
      !1
    );
  if (s.cssMode) {
    let e = a.isHorizontal(),
      n = f ? _ : -_;
    if (t === 0)
      (y &&
        ((a.wrapperEl.style.scrollSnapType = `none`),
        (a._immediateVirtual = !0)),
        y && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
          ? ((a._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              p[e ? `scrollLeft` : `scrollTop`] = n;
            }))
          : (p[e ? `scrollLeft` : `scrollTop`] = n),
        y &&
          requestAnimationFrame(() => {
            ((a.wrapperEl.style.scrollSnapType = ``),
              (a._immediateVirtual = !1));
          }));
    else {
      if (!a.support.smoothScroll)
        return (
          Ec({ swiper: a, targetPosition: n, side: e ? `left` : `top` }),
          !0
        );
      p.scrollTo({ [e ? `left` : `top`]: n, behavior: `smooth` });
    }
    return !0;
  }
  let b = qc().isSafari;
  return (
    y && !i && b && a.isElement && a.virtual.update(!1, !1, o),
    a.setTransition(t),
    a.setTranslate(_),
    a.updateActiveIndex(o),
    a.updateSlidesClasses(),
    a.emit(`beforeTransitionStart`, t, r),
    a.transitionStart(n, v),
    t === 0
      ? a.transitionEnd(n, v)
      : a.animating ||
        ((a.animating = !0),
        (a.onSlideToWrapperTransitionEnd ||= function (e) {
          !a ||
            a.destroyed ||
            (e.target === this &&
              (a.wrapperEl.removeEventListener(
                `transitionend`,
                a.onSlideToWrapperTransitionEnd,
              ),
              (a.onSlideToWrapperTransitionEnd = null),
              delete a.onSlideToWrapperTransitionEnd,
              a.transitionEnd(n, v)));
        }),
        a.wrapperEl.addEventListener(
          `transitionend`,
          a.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function Tl(e = 0, t, n = !0, r) {
  typeof e == `string` && (e = parseInt(e, 10));
  let i = this;
  if (i.destroyed) return;
  t === void 0 && (t = i.params.speed);
  let a = i.grid && i.params.grid && i.params.grid.rows > 1,
    o = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o += i.virtual.slidesBefore;
    else {
      let e;
      if (a) {
        let t = o * i.params.grid.rows;
        e = i.slides.find(
          (e) => e.getAttribute(`data-swiper-slide-index`) * 1 === t,
        ).column;
      } else e = i.getSlideIndexByData(o);
      let t = a
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        {
          centeredSlides: n,
          slidesOffsetBefore: s,
          slidesOffsetAfter: c,
        } = i.params,
        l = n || !!s || !!c,
        u = i.params.slidesPerView;
      u === `auto`
        ? (u = i.slidesPerViewDynamic())
        : ((u = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          l && u % 2 == 0 && (u += 1));
      let d = t - e < u;
      if (
        (l && (d ||= e < Math.ceil(u / 2)),
        r && l && i.params.slidesPerView !== `auto` && !a && (d = !1),
        d)
      ) {
        let n = l
          ? e < i.activeIndex
            ? `prev`
            : `next`
          : e - i.activeIndex - 1 < i.params.slidesPerView
            ? `next`
            : `prev`;
        i.loopFix({
          direction: n,
          slideTo: !0,
          activeSlideIndex: n === `next` ? e + 1 : e - t + 1,
          slideRealIndex: n === `next` ? i.realIndex : void 0,
        });
      }
      if (a) {
        let e = o * i.params.grid.rows;
        o = i.slides.find(
          (t) => t.getAttribute(`data-swiper-slide-index`) * 1 === e,
        ).column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, t, n, r);
    }),
    i
  );
}
function El(e, t = !0, n) {
  let r = this,
    { enabled: i, params: a, animating: o } = r;
  if (!i || r.destroyed) return r;
  e === void 0 && (e = r.params.speed);
  let s = a.slidesPerGroup;
  a.slidesPerView === `auto` &&
    a.slidesPerGroup === 1 &&
    a.slidesPerGroupAuto &&
    (s = Math.max(r.slidesPerViewDynamic(`current`, !0), 1));
  let c = r.activeIndex < a.slidesPerGroupSkip ? 1 : s,
    l = r.virtual && a.virtual.enabled;
  if (a.loop) {
    if (o && !l && a.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: `next` }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && a.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + c, e, t, n);
        }),
        !0
      );
  }
  return a.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + c, e, t, n);
}
function Dl(e, t = !0, n) {
  let r = this,
    {
      params: i,
      snapGrid: a,
      slidesGrid: o,
      rtlTranslate: s,
      enabled: c,
      animating: l,
    } = r;
  if (!c || r.destroyed) return r;
  e === void 0 && (e = r.params.speed);
  let u = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (l && !u && i.loopPreventsSliding) return !1;
    (r.loopFix({ direction: `prev` }),
      (r._clientLeft = r.wrapperEl.clientLeft));
  }
  let d = s ? r.translate : -r.translate;
  function f(e) {
    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
  }
  let p = f(d),
    m = a.map((e) => f(e)),
    h = i.freeMode && i.freeMode.enabled,
    g = a[m.indexOf(p) - 1];
  if (g === void 0 && (i.cssMode || h)) {
    let e;
    (a.forEach((t, n) => {
      p >= t && (e = n);
    }),
      e !== void 0 && (g = h ? a[e] : a[e > 0 ? e - 1 : e]));
  }
  let _ = 0;
  if (
    (g !== void 0 &&
      ((_ = o.indexOf(g)),
      _ < 0 && (_ = r.activeIndex - 1),
      i.slidesPerView === `auto` &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((_ = _ - r.slidesPerViewDynamic(`previous`, !0) + 1),
        (_ = Math.max(_, 0)))),
    i.rewind && r.isBeginning)
  ) {
    let i =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(i, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(_, e, t, n);
      }),
      !0
    );
  return r.slideTo(_, e, t, n);
}
function Ol(e, t = !0, n) {
  let r = this;
  if (!r.destroyed)
    return (
      e === void 0 && (e = r.params.speed),
      r.slideTo(r.activeIndex, e, t, n)
    );
}
function kl(e, t = !0, n, r = 0.5) {
  let i = this;
  if (i.destroyed) return;
  e === void 0 && (e = i.params.speed);
  let a = i.activeIndex,
    o = Math.min(i.params.slidesPerGroupSkip, a),
    s = o + Math.floor((a - o) / i.params.slidesPerGroup),
    c = i.rtlTranslate ? i.translate : -i.translate;
  if (c >= i.snapGrid[s]) {
    let e = i.snapGrid[s],
      t = i.snapGrid[s + 1];
    c - e > (t - e) * r && (a += i.params.slidesPerGroup);
  } else {
    let e = i.snapGrid[s - 1],
      t = i.snapGrid[s];
    c - e <= (t - e) * r && (a -= i.params.slidesPerGroup);
  }
  return (
    (a = Math.max(a, 0)),
    (a = Math.min(a, i.slidesGrid.length - 1)),
    i.slideTo(a, e, t, n)
  );
}
function Al() {
  let e = this;
  if (e.destroyed) return;
  let { params: t, slidesEl: n } = e,
    r = t.slidesPerView === `auto` ? e.slidesPerViewDynamic() : t.slidesPerView,
    i = e.getSlideIndexWhenGrid(e.clickedIndex),
    a,
    o = e.isElement ? `swiper-slide` : `.${t.slideClass}`,
    s = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (t.loop) {
    if (e.animating) return;
    ((a = parseInt(e.clickedSlide.getAttribute(`data-swiper-slide-index`), 10)),
      t.centeredSlides
        ? e.slideToLoop(a)
        : i >
            (s
              ? (e.slides.length - r) / 2 - (e.params.grid.rows - 1)
              : e.slides.length - r)
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Dc(n, `${o}[data-swiper-slide-index="${a}"]`)[0],
            )),
            vc(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i));
  } else e.slideTo(i);
}
var jl = {
  slideTo: wl,
  slideToLoop: Tl,
  slideNext: El,
  slidePrev: Dl,
  slideReset: Ol,
  slideToClosest: kl,
  slideToClickedSlide: Al,
};
function Ml(e, t) {
  let n = this,
    { params: r, slidesEl: i } = n;
  if (!r.loop || (n.virtual && n.params.virtual.enabled)) return;
  let a = () => {
      Dc(i, `.${r.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute(`data-swiper-slide-index`, t);
      });
    },
    o = () => {
      let e = Dc(i, `.${r.slideBlankClass}`);
      (e.forEach((e) => {
        e.remove();
      }),
        e.length > 0 && (n.recalcSlides(), n.updateSlides()));
    },
    s = n.grid && r.grid && r.grid.rows > 1;
  r.loopAddBlankSlides && (r.slidesPerGroup > 1 || s) && o();
  let c = r.slidesPerGroup * (s ? r.grid.rows : 1),
    l = n.slides.length % c !== 0,
    u = s && n.slides.length % r.grid.rows !== 0,
    d = (e) => {
      for (let t = 0; t < e; t += 1) {
        let e = n.isElement
          ? jc(`swiper-slide`, [r.slideBlankClass])
          : jc(`div`, [r.slideClass, r.slideBlankClass]);
        n.slidesEl.append(e);
      }
    };
  l
    ? (r.loopAddBlankSlides
        ? (d(c - (n.slides.length % c)), n.recalcSlides(), n.updateSlides())
        : Ac(
            `Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`,
          ),
      a())
    : (u &&
        (r.loopAddBlankSlides
          ? (d(r.grid.rows - (n.slides.length % r.grid.rows)),
            n.recalcSlides(),
            n.updateSlides())
          : Ac(
              `Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`,
            )),
      a());
  let f = r.centeredSlides || !!r.slidesOffsetBefore || !!r.slidesOffsetAfter;
  n.loopFix({ slideRealIndex: e, direction: f ? void 0 : `next`, initial: t });
}
function Nl({
  slideRealIndex: e,
  slideTo: t = !0,
  direction: n,
  setTranslate: r,
  activeSlideIndex: i,
  initial: a,
  byController: o,
  byMousewheel: s,
} = {}) {
  let c = this;
  if (!c.params.loop) return;
  c.emit(`beforeLoopFix`);
  let {
      slides: l,
      allowSlidePrev: u,
      allowSlideNext: d,
      slidesEl: f,
      params: p,
    } = c,
    {
      centeredSlides: m,
      slidesOffsetBefore: h,
      slidesOffsetAfter: g,
      initialSlide: _,
    } = p,
    v = m || !!h || !!g;
  if (
    ((c.allowSlidePrev = !0),
    (c.allowSlideNext = !0),
    c.virtual && p.virtual.enabled)
  ) {
    (t &&
      (!v && c.snapIndex === 0
        ? c.slideTo(c.virtual.slides.length, 0, !1, !0)
        : v && c.snapIndex < p.slidesPerView
          ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
          : c.snapIndex === c.snapGrid.length - 1 &&
            c.slideTo(c.virtual.slidesBefore, 0, !1, !0)),
      (c.allowSlidePrev = u),
      (c.allowSlideNext = d),
      c.emit(`loopFix`));
    return;
  }
  let y = p.slidesPerView;
  y === `auto`
    ? (y = c.slidesPerViewDynamic())
    : ((y = Math.ceil(parseFloat(p.slidesPerView, 10))),
      v && y % 2 == 0 && (y += 1));
  let b = p.slidesPerGroupAuto ? y : p.slidesPerGroup,
    x = v ? Math.max(b, Math.ceil(y / 2)) : b;
  (x % b !== 0 && (x += b - (x % b)),
    (x += p.loopAdditionalSlides),
    (c.loopedSlides = x));
  let S = c.grid && p.grid && p.grid.rows > 1;
  l.length < y + x || (c.params.effect === `cards` && l.length < y + x * 2)
    ? Ac(
        `Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters`,
      )
    : S &&
      p.grid.fill === `row` &&
      Ac(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      );
  let C = [],
    w = [],
    T = S ? Math.ceil(l.length / p.grid.rows) : l.length,
    E = a && T - _ < y && !v,
    D = E ? _ : c.activeIndex;
  i === void 0
    ? (i = c.getSlideIndex(
        l.find((e) => e.classList.contains(p.slideActiveClass)),
      ))
    : (D = i);
  let O = n === `next` || !n,
    k = n === `prev` || !n,
    A = 0,
    j = 0,
    M = (S ? l[i].column : i) + (v && r === void 0 ? -y / 2 + 0.5 : 0);
  if (M < x) {
    A = Math.max(x - M, b);
    for (let e = 0; e < x - M; e += 1) {
      let t = e - Math.floor(e / T) * T;
      if (S) {
        let e = T - t - 1;
        for (let t = l.length - 1; t >= 0; --t) l[t].column === e && C.push(t);
      } else C.push(T - t - 1);
    }
  } else if (M + y > T - x) {
    ((j = Math.max(M - (T - x * 2), b)), E && (j = Math.max(j, y - T + _ + 1)));
    for (let e = 0; e < j; e += 1) {
      let t = e - Math.floor(e / T) * T;
      S
        ? l.forEach((e, n) => {
            e.column === t && w.push(n);
          })
        : w.push(t);
    }
  }
  if (
    ((c.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      c.__preventObserver__ = !1;
    }),
    c.params.effect === `cards` &&
      l.length < y + x * 2 &&
      (w.includes(i) && w.splice(w.indexOf(i), 1),
      C.includes(i) && C.splice(C.indexOf(i), 1)),
    k &&
      C.forEach((e) => {
        ((l[e].swiperLoopMoveDOM = !0),
          f.prepend(l[e]),
          (l[e].swiperLoopMoveDOM = !1));
      }),
    O &&
      w.forEach((e) => {
        ((l[e].swiperLoopMoveDOM = !0),
          f.append(l[e]),
          (l[e].swiperLoopMoveDOM = !1));
      }),
    c.recalcSlides(),
    p.slidesPerView === `auto`
      ? c.updateSlides()
      : S &&
        ((C.length > 0 && k) || (w.length > 0 && O)) &&
        c.slides.forEach((e, t) => {
          c.grid.updateSlide(t, e, c.slides);
        }),
    p.watchSlidesProgress && c.updateSlidesOffset(),
    t)
  ) {
    if (C.length > 0 && k) {
      if (e === void 0) {
        let e = c.slidesGrid[D],
          t = c.slidesGrid[D + A] - e;
        s
          ? c.setTranslate(c.translate - t)
          : (c.slideTo(D + Math.ceil(A), 0, !1, !0),
            r &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - t),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - t)));
      } else if (r) {
        let e = S ? C.length / p.grid.rows : C.length;
        (c.slideTo(c.activeIndex + e, 0, !1, !0),
          (c.touchEventsData.currentTranslate = c.translate));
      }
    } else if (w.length > 0 && O)
      if (e === void 0) {
        let e = c.slidesGrid[D],
          t = c.slidesGrid[D - j] - e;
        s
          ? c.setTranslate(c.translate - t)
          : (c.slideTo(D - j, 0, !1, !0),
            r &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - t),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - t)));
      } else {
        let e = S ? w.length / p.grid.rows : w.length;
        c.slideTo(c.activeIndex - e, 0, !1, !0);
      }
  }
  if (
    ((c.allowSlidePrev = u),
    (c.allowSlideNext = d),
    c.controller && c.controller.control && !o)
  ) {
    let a = {
      slideRealIndex: e,
      direction: n,
      setTranslate: r,
      activeSlideIndex: i,
      byController: !0,
    };
    Array.isArray(c.controller.control)
      ? c.controller.control.forEach((e) => {
          !e.destroyed &&
            e.params.loop &&
            e.loopFix({
              ...a,
              slideTo: e.params.slidesPerView === p.slidesPerView ? t : !1,
            });
        })
      : c.controller.control instanceof c.constructor &&
        c.controller.control.params.loop &&
        c.controller.control.loopFix({
          ...a,
          slideTo:
            c.controller.control.params.slidesPerView === p.slidesPerView
              ? t
              : !1,
        });
  }
  c.emit(`loopFix`);
}
function $() {
  let e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || !n || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  let r = [];
  (e.slides.forEach((e) => {
    let t =
      e.swiperSlideIndex === void 0
        ? e.getAttribute(`data-swiper-slide-index`) * 1
        : e.swiperSlideIndex;
    r[t] = e;
  }),
    e.slides.forEach((e) => {
      e.removeAttribute(`data-swiper-slide-index`);
    }),
    r.forEach((e) => {
      n.append(e);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0));
}
var Pl = { loopCreate: Ml, loopFix: Nl, loopDestroy: $ };
function Fl(e) {
  let t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  let n = t.params.touchEventsTarget === `container` ? t.el : t.wrapperEl;
  (t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = `move`),
    (n.style.cursor = e ? `grabbing` : `grab`),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      }));
}
function Il() {
  let e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === `container` ? `el` : `wrapperEl`
    ].style.cursor = ``),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Ll = { setGrabCursor: Fl, unsetGrabCursor: Il };
function Rl(e, t = this) {
  function n(t) {
    if (!t || t === pc() || t === hc()) return null;
    t.assignedSlot && (t = t.assignedSlot);
    let r = t.closest(e);
    return !r && !t.getRootNode ? null : r || n(t.getRootNode().host);
  }
  return n(t);
}
function zl(e, t, n) {
  let r = hc(),
    { params: i } = e,
    a = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return a && (n <= o || n >= r.innerWidth - o)
    ? a === `prevent`
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function Bl(e) {
  let t = this,
    n = pc(),
    r = e;
  r.originalEvent && (r = r.originalEvent);
  let i = t.touchEventsData;
  if (r.type === `pointerdown`) {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === `touchstart` &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === `touchstart`) {
    zl(t, r, r.targetTouches[0].pageX);
    return;
  }
  let { params: a, touches: o, enabled: s } = t;
  if (
    !s ||
    (!a.simulateTouch && r.pointerType === `mouse`) ||
    (t.animating && a.preventInteractionOnTransition)
  )
    return;
  !t.animating && a.cssMode && a.loop && t.loopFix();
  let c = r.target;
  if (
    (a.touchEventsTarget === `wrapper` && !kc(c, t.wrapperEl)) ||
    (`which` in r && r.which === 3) ||
    (`button` in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  let l = !!a.noSwipingClass && a.noSwipingClass !== ``,
    u = r.composedPath ? r.composedPath() : r.path;
  l && r.target && r.target.shadowRoot && u && (c = u[0]);
  let d = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
    f = !!(r.target && r.target.shadowRoot);
  if (a.noSwiping && (f ? Rl(d, c) : c.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (a.swipeHandler && !c.closest(a.swipeHandler)) return;
  ((o.currentX = r.pageX), (o.currentY = r.pageY));
  let p = o.currentX,
    m = o.currentY;
  if (!zl(t, r, p)) return;
  (Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = p),
    (o.startY = m),
    (i.touchStartTime = yc()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    a.threshold > 0 && (i.allowThresholdMove = !1));
  let h = !0;
  (c.matches(i.focusableElements) &&
    ((h = !1), c.nodeName === `SELECT` && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== c &&
      (r.pointerType === `mouse` ||
        (r.pointerType !== `mouse` && !c.matches(i.focusableElements))) &&
      n.activeElement.blur());
  let g = h && t.allowTouchMove && a.touchStartPreventDefault;
  ((a.touchStartForcePreventDefault || g) &&
    !c.isContentEditable &&
    r.preventDefault(),
    a.freeMode &&
      a.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !a.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit(`touchStart`, r));
}
function Vl(e) {
  let t = pc(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: a, rtlTranslate: o, enabled: s } = n;
  if (!s || (!i.simulateTouch && e.pointerType === `mouse`)) return;
  let c = e;
  if (
    (c.originalEvent && (c = c.originalEvent),
    c.type === `pointermove` &&
      (r.touchId !== null || c.pointerId !== r.pointerId))
  )
    return;
  let l;
  if (c.type === `touchmove`) {
    if (
      ((l = [...c.changedTouches].find((e) => e.identifier === r.touchId)),
      !l || l.identifier !== r.touchId)
    )
      return;
  } else l = c;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit(`touchMoveOpposite`, c);
    return;
  }
  let u = l.pageX,
    d = l.pageY;
  if (c.preventedByNestedSwiper) {
    ((a.startX = u), (a.startY = d));
    return;
  }
  if (!n.allowTouchMove) {
    (c.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(a, { startX: u, startY: d, currentX: u, currentY: d }),
        (r.touchStartTime = yc())));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < a.startY && n.translate <= n.maxTranslate()) ||
        (d > a.startY && n.translate >= n.minTranslate())
      ) {
        ((r.isTouched = !1), (r.isMoved = !1));
        return;
      }
    } else if (
      o &&
      ((u > a.startX && -n.translate <= n.maxTranslate()) ||
        (u < a.startX && -n.translate >= n.minTranslate()))
    )
      return;
    else if (
      !o &&
      ((u < a.startX && n.translate <= n.maxTranslate()) ||
        (u > a.startX && n.translate >= n.minTranslate()))
    )
      return;
  }
  if (
    (t.activeElement &&
      t.activeElement.matches(r.focusableElements) &&
      t.activeElement !== c.target &&
      c.pointerType !== `mouse` &&
      t.activeElement.blur(),
    t.activeElement &&
      c.target === t.activeElement &&
      c.target.matches(r.focusableElements))
  ) {
    ((r.isMoved = !0), (n.allowClick = !1));
    return;
  }
  (r.allowTouchCallbacks && n.emit(`touchMove`, c),
    (a.previousX = a.currentX),
    (a.previousY = a.currentY),
    (a.currentX = u),
    (a.currentY = d));
  let f = a.currentX - a.startX,
    p = a.currentY - a.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + p ** 2) < n.params.threshold)
    return;
  if (r.isScrolling === void 0) {
    let e;
    (n.isHorizontal() && a.currentY === a.startY) ||
    (n.isVertical() && a.currentX === a.startX)
      ? (r.isScrolling = !1)
      : f * f + p * p >= 25 &&
        ((e = (Math.atan2(Math.abs(p), Math.abs(f)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? e > i.touchAngle
          : 90 - e > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit(`touchMoveOpposite`, c),
    r.startMoving === void 0 &&
      (a.currentX !== a.startX || a.currentY !== a.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (c.type === `touchmove` && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  ((n.allowClick = !1),
    !i.cssMode && c.cancelable && c.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && c.stopPropagation());
  let m = n.isHorizontal() ? f : p,
    h = n.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
  (i.oneWayMovement &&
    ((m = Math.abs(m) * (o ? 1 : -1)), (h = Math.abs(h) * (o ? 1 : -1))),
    (a.diff = m),
    (m *= i.touchRatio),
    o && ((m = -m), (h = -h)));
  let g = n.touchesDirection;
  ((n.swipeDirection = m > 0 ? `prev` : `next`),
    (n.touchesDirection = h > 0 ? `prev` : `next`));
  let _ = n.params.loop && !i.cssMode,
    v =
      (n.touchesDirection === `next` && n.allowSlideNext) ||
      (n.touchesDirection === `prev` && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (_ && v && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      let e = new window.CustomEvent(`transitionend`, {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(e);
    }
    ((r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit(`sliderFirstMove`, c));
  }
  if (
    (new Date().getTime(),
    i._loopSwapReset !== !1 &&
      r.isMoved &&
      r.allowThresholdMove &&
      g !== n.touchesDirection &&
      _ &&
      v &&
      Math.abs(m) >= 1)
  ) {
    (Object.assign(a, {
      startX: u,
      startY: d,
      currentX: u,
      currentY: d,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate));
    return;
  }
  (n.emit(`sliderMove`, c),
    (r.isMoved = !0),
    (r.currentTranslate = m + r.startTranslate));
  let y = !0,
    b = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (b = 0),
    m > 0
      ? (_ &&
          v &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (i.slidesPerView !== `auto` &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: `prev`,
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((y = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + m) ** b)))
      : m < 0 &&
        (_ &&
          v &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (i.slidesPerView !== `auto` &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: `next`,
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === `auto`
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((y = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - m) ** b))),
    y && (c.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === `next` &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === `prev` &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(m) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        ((r.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (r.currentTranslate = r.startTranslate),
          (a.diff = n.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY));
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function Hl(e) {
  let t = this,
    n = t.touchEventsData,
    r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (!(r.type === `touchend` || r.type === `touchcancel`)) {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  } else if (
    ((i = [...r.changedTouches].find((e) => e.identifier === n.touchId)),
    !i || i.identifier !== n.touchId)
  )
    return;
  if (
    [`pointercancel`, `pointerout`, `pointerleave`, `contextmenu`].includes(
      r.type,
    ) &&
    !(
      [`pointercancel`, `contextmenu`].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  ((n.pointerId = null), (n.touchId = null));
  let { params: a, touches: o, rtlTranslate: s, slidesGrid: c, enabled: l } = t;
  if (!l || (!a.simulateTouch && r.pointerType === `mouse`)) return;
  if (
    (n.allowTouchCallbacks && t.emit(`touchEnd`, r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    (n.isMoved && a.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1));
    return;
  }
  a.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  let u = yc(),
    d = u - n.touchStartTime;
  if (t.allowClick) {
    let e = r.path || (r.composedPath && r.composedPath());
    (t.updateClickedSlide((e && e[0]) || r.target, e),
      t.emit(`tap click`, r),
      d < 300 &&
        u - n.lastClickTime < 300 &&
        t.emit(`doubleTap doubleClick`, r));
  }
  if (
    ((n.lastClickTime = yc()),
    vc(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (o.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    ((n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1));
    return;
  }
  ((n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1));
  let f;
  if (
    ((f = a.followFinger
      ? s
        ? t.translate
        : -t.translate
      : -n.currentTranslate),
    a.cssMode)
  )
    return;
  if (a.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: f });
    return;
  }
  let p = f >= -t.maxTranslate() && !t.params.loop,
    m = 0,
    h = t.slidesSizesGrid[0];
  for (
    let e = 0;
    e < c.length;
    e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
  ) {
    let t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    c[e + t] === void 0
      ? (p || f >= c[e]) && ((m = e), (h = c[c.length - 1] - c[c.length - 2]))
      : (p || (f >= c[e] && f < c[e + t])) && ((m = e), (h = c[e + t] - c[e]));
  }
  let g = null,
    _ = null;
  a.rewind &&
    (t.isBeginning
      ? (_ =
          a.virtual && a.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (g = 0));
  let v = (f - c[m]) / h,
    y = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (d > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    (t.swipeDirection === `next` &&
      (v >= a.longSwipesRatio
        ? t.slideTo(a.rewind && t.isEnd ? g : m + y)
        : t.slideTo(m)),
      t.swipeDirection === `prev` &&
        (v > 1 - a.longSwipesRatio
          ? t.slideTo(m + y)
          : _ !== null && v < 0 && Math.abs(v) > a.longSwipesRatio
            ? t.slideTo(_)
            : t.slideTo(m)));
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(m + y)
        : t.slideTo(m)
      : (t.swipeDirection === `next` && t.slideTo(g === null ? m + y : g),
        t.swipeDirection === `prev` && t.slideTo(_ === null ? m : _));
  }
}
function Ul() {
  let e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  let { allowSlideNext: r, allowSlidePrev: i, snapGrid: a } = e,
    o = e.virtual && e.params.virtual.enabled;
  ((e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses());
  let s = o && t.loop;
  if (
    (t.slidesPerView === `auto` || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides &&
    !s
  ) {
    let t = o ? e.virtual.slides : e.slides;
    e.slideTo(t.length - 1, 0, !1, !0);
  } else
    e.params.loop && !o
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0);
  (e.autoplay &&
    e.autoplay.running &&
    e.autoplay.paused &&
    (clearTimeout(e.autoplay.resizeTimeout),
    (e.autoplay.resizeTimeout = setTimeout(() => {
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        e.autoplay.resume();
    }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow());
}
function Wl(e) {
  let t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Gl() {
  let e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  ((e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses());
  let i,
    a = e.maxTranslate() - e.minTranslate();
  ((i = a === 0 ? 0 : (e.translate - e.minTranslate()) / a),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit(`setTranslate`, e.translate, !1));
}
function Kl(e) {
  let t = this;
  (ol(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== `auto` && !t.params.autoHeight)
    ) && t.update());
}
function ql() {
  let e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = `auto`));
}
var Jl = (e, t) => {
  let n = pc(),
    { params: r, el: i, wrapperEl: a, device: o } = e,
    s = !!r.nested,
    c = t === `on` ? `addEventListener` : `removeEventListener`,
    l = t;
  !i ||
    typeof i == `string` ||
    (n[c](`touchstart`, e.onDocumentTouchStart, { passive: !1, capture: s }),
    i[c](`touchstart`, e.onTouchStart, { passive: !1 }),
    i[c](`pointerdown`, e.onTouchStart, { passive: !1 }),
    n[c](`touchmove`, e.onTouchMove, { passive: !1, capture: s }),
    n[c](`pointermove`, e.onTouchMove, { passive: !1, capture: s }),
    n[c](`touchend`, e.onTouchEnd, { passive: !0 }),
    n[c](`pointerup`, e.onTouchEnd, { passive: !0 }),
    n[c](`pointercancel`, e.onTouchEnd, { passive: !0 }),
    n[c](`touchcancel`, e.onTouchEnd, { passive: !0 }),
    n[c](`pointerout`, e.onTouchEnd, { passive: !0 }),
    n[c](`pointerleave`, e.onTouchEnd, { passive: !0 }),
    n[c](`contextmenu`, e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[c](`click`, e.onClick, !0),
    r.cssMode && a[c](`scroll`, e.onScroll),
    r.updateOnWindowResize
      ? e[l](
          o.ios || o.android
            ? `resize orientationchange observerUpdate`
            : `resize observerUpdate`,
          Ul,
          !0,
        )
      : e[l](`observerUpdate`, Ul, !0),
    i[c](`load`, e.onLoad, { capture: !0 }));
};
function Yl() {
  let e = this,
    { params: t } = e;
  ((e.onTouchStart = Bl.bind(e)),
    (e.onTouchMove = Vl.bind(e)),
    (e.onTouchEnd = Hl.bind(e)),
    (e.onDocumentTouchStart = ql.bind(e)),
    t.cssMode && (e.onScroll = Gl.bind(e)),
    (e.onClick = Wl.bind(e)),
    (e.onLoad = Kl.bind(e)),
    Jl(e, `on`));
}
function Xl() {
  Jl(this, `off`);
}
var Zl = { attachEvents: Yl, detachEvents: Xl },
  Ql = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function $l() {
  let e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    a = r.breakpoints;
  if (!a || (a && Object.keys(a).length === 0)) return;
  let o = pc(),
    s =
      r.breakpointsBase === `window` || !r.breakpointsBase
        ? r.breakpointsBase
        : `container`,
    c =
      [`window`, `container`].includes(r.breakpointsBase) || !r.breakpointsBase
        ? e.el
        : o.querySelector(r.breakpointsBase),
    l = e.getBreakpoint(a, s, c);
  if (!l || e.currentBreakpoint === l) return;
  let u = (l in a ? a[l] : void 0) || e.originalParams,
    d = Ql(e, r),
    f = Ql(e, u),
    p = e.params.grabCursor,
    m = u.grabCursor,
    h = r.enabled;
  (d && !f
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !d &&
      f &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((u.grid.fill && u.grid.fill === `column`) ||
        (!u.grid.fill && r.grid.fill === `column`)) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    p && !m ? e.unsetGrabCursor() : !p && m && e.setGrabCursor(),
    [`navigation`, `pagination`, `scrollbar`].forEach((t) => {
      if (u[t] === void 0) return;
      let n = r[t] && r[t].enabled,
        i = u[t] && u[t].enabled;
      (n && !i && e[t].disable(), !n && i && e[t].enable());
    }));
  let g = u.direction && u.direction !== r.direction,
    _ = r.loop && (u.slidesPerView !== r.slidesPerView || g),
    v = r.loop;
  (g && n && e.changeDirection(), wc(e.params, u));
  let y = e.params.enabled,
    b = e.params.loop;
  (Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    h && !y ? e.disable() : !h && y && e.enable(),
    (e.currentBreakpoint = l),
    e.emit(`_beforeBreakpoint`, u),
    n &&
      (_
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !v && b
          ? (e.loopCreate(t), e.updateSlides())
          : v && !b && e.loopDestroy()),
    e.emit(`breakpoint`, u));
}
function eu(e, t = `window`, n) {
  if (!e || (t === `container` && !n)) return;
  let r = !1,
    i = hc(),
    a = t === `window` ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((e) =>
      typeof e == `string` && e.indexOf(`@`) === 0
        ? { value: a * parseFloat(e.substr(1)), point: e }
        : { value: e, point: e },
    );
  o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
  for (let e = 0; e < o.length; e += 1) {
    let { point: a, value: s } = o[e];
    t === `window`
      ? i.matchMedia(`(min-width: ${s}px)`).matches && (r = a)
      : s <= n.clientWidth && (r = a);
  }
  return r || `max`;
}
var tu = { setBreakpoint: $l, getBreakpoint: eu };
function nu(e, t) {
  let n = [];
  return (
    e.forEach((e) => {
      typeof e == `object`
        ? Object.keys(e).forEach((r) => {
            e[r] && n.push(t + r);
          })
        : typeof e == `string` && n.push(t + e);
    }),
    n
  );
}
function ru() {
  let e = this,
    { classNames: t, params: n, rtl: r, el: i, device: a } = e,
    o = nu(
      [
        `initialized`,
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === `column`,
        },
        { android: a.android },
        { ios: a.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    );
  (t.push(...o), i.classList.add(...t), e.emitContainerClasses());
}
function iu() {
  let e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == `string` ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var au = { addClasses: ru, removeClasses: iu };
function ou() {
  let e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    let t = e.slides.length - 1,
      n = e.slidesGrid[t] + e.slidesSizesGrid[t] + r * 2;
    e.isLocked = e.size > n;
  } else e.isLocked = e.snapGrid.length === 1;
  (n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? `lock` : `unlock`));
}
var su = { checkOverflow: ou },
  cu = {
    init: !0,
    direction: `horizontal`,
    oneWayMovement: !1,
    swiperElementNodeName: `SWIPER-CONTAINER`,
    touchEventsTarget: `wrapper`,
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: `swiper`,
    enabled: !0,
    focusableElements: `input, select, option, textarea, button, video, label`,
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: `slide`,
    breakpoints: void 0,
    breakpointsBase: `window`,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    snapToSlideEdge: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: `swiper-no-swiping`,
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: `swiper-`,
    slideClass: `swiper-slide`,
    slideBlankClass: `swiper-slide-blank`,
    slideActiveClass: `swiper-slide-active`,
    slideVisibleClass: `swiper-slide-visible`,
    slideFullyVisibleClass: `swiper-slide-fully-visible`,
    slideNextClass: `swiper-slide-next`,
    slidePrevClass: `swiper-slide-prev`,
    wrapperClass: `swiper-wrapper`,
    lazyPreloaderClass: `swiper-lazy-preloader`,
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function lu(e, t) {
  return function (n = {}) {
    let r = Object.keys(n)[0],
      i = n[r];
    if (typeof i != `object` || !i) {
      wc(t, n);
      return;
    }
    if (
      (e[r] === !0 && (e[r] = { enabled: !0 }),
      r === `navigation` &&
        e[r] &&
        e[r].enabled &&
        !e[r].prevEl &&
        !e[r].nextEl &&
        (e[r].auto = !0),
      [`pagination`, `scrollbar`].indexOf(r) >= 0 &&
        e[r] &&
        e[r].enabled &&
        !e[r].el &&
        (e[r].auto = !0),
      !(r in e && `enabled` in i))
    ) {
      wc(t, n);
      return;
    }
    (typeof e[r] == `object` && !(`enabled` in e[r]) && (e[r].enabled = !0),
      e[r] || (e[r] = { enabled: !1 }),
      wc(t, n));
  };
}
var uu = {
    eventsEmitter: Xc,
    update: fl,
    translate: vl,
    transition: Cl,
    slide: jl,
    loop: Pl,
    grabCursor: Ll,
    events: Zl,
    breakpoints: tu,
    checkOverflow: su,
    classes: au,
  },
  du = {},
  fu = class e {
    constructor(...t) {
      let n, r;
      (t.length === 1 &&
      t[0].constructor &&
      Object.prototype.toString.call(t[0]).slice(8, -1) === `Object`
        ? (r = t[0])
        : ([n, r] = t),
        (r ||= {}),
        (r = wc({}, r)),
        n && !r.el && (r.el = n));
      let i = pc();
      if (
        r.el &&
        typeof r.el == `string` &&
        i.querySelectorAll(r.el).length > 1
      ) {
        let t = [];
        return (
          i.querySelectorAll(r.el).forEach((n) => {
            let i = wc({}, r, { el: n });
            t.push(new e(i));
          }),
          t
        );
      }
      let a = this;
      ((a.__swiper__ = !0),
        (a.support = Vc()),
        (a.device = Wc({ userAgent: r.userAgent })),
        (a.browser = qc()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        r.modules &&
          Array.isArray(r.modules) &&
          r.modules.forEach((e) => {
            typeof e == `function` &&
              a.modules.indexOf(e) < 0 &&
              a.modules.push(e);
          }));
      let o = {};
      return (
        a.modules.forEach((e) => {
          e({
            params: r,
            swiper: a,
            extendParams: lu(r, o),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a),
          });
        }),
        (a.params = wc({}, wc({}, cu, o), du, r)),
        (a.originalParams = wc({}, a.params)),
        (a.passedParams = wc({}, r)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((e) => {
            a.on(e, a.params.on[e]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: n,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return a.params.direction === `horizontal`;
          },
          isVertical() {
            return a.params.direction === `vertical`;
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit(`_swiper`),
        a.params.init && a.init(),
        a
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: `height`,
            "margin-top": `margin-left`,
            "margin-bottom ": `margin-right`,
            "margin-left": `margin-top`,
            "margin-right": `margin-bottom`,
            "padding-left": `padding-top`,
            "padding-right": `padding-bottom`,
            marginRight: `marginBottom`,
          }[e];
    }
    getSlideIndex(e) {
      let { slidesEl: t, params: n } = this,
        r = Fc(Dc(t, `.${n.slideClass}, swiper-slide`)[0]);
      return Fc(e) - r;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.find(
          (t) => t.getAttribute(`data-swiper-slide-index`) * 1 === e,
        ),
      );
    }
    getSlideIndexWhenGrid(e) {
      return (
        this.grid &&
          this.params.grid &&
          this.params.grid.rows > 1 &&
          (this.params.grid.fill === `column`
            ? (e = Math.floor(e / this.params.grid.rows))
            : this.params.grid.fill === `row` &&
              (e %= Math.ceil(this.slides.length / this.params.grid.rows))),
        e
      );
    }
    recalcSlides() {
      let e = this,
        { slidesEl: t, params: n } = e;
      e.slides = Dc(t, `.${n.slideClass}, swiper-slide`);
    }
    enable() {
      let e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit(`enable`));
    }
    disable() {
      let e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit(`disable`));
    }
    setProgress(e, t) {
      let n = this;
      e = Math.min(Math.max(e, 0), 1);
      let r = n.minTranslate(),
        i = (n.maxTranslate() - r) * e + r;
      (n.translateTo(i, t === void 0 ? 0 : t),
        n.updateActiveIndex(),
        n.updateSlidesClasses());
    }
    emitContainerClasses() {
      let e = this;
      if (!e.params._emitClasses || !e.el) return;
      let t = e.el.className
        .split(` `)
        .filter(
          (t) =>
            t.indexOf(`swiper`) === 0 ||
            t.indexOf(e.params.containerModifierClass) === 0,
        );
      e.emit(`_containerClasses`, t.join(` `));
    }
    getSlideClasses(e) {
      let t = this;
      return t.destroyed
        ? ``
        : e.className
            .split(` `)
            .filter(
              (e) =>
                e.indexOf(`swiper-slide`) === 0 ||
                e.indexOf(t.params.slideClass) === 0,
            )
            .join(` `);
    }
    emitSlidesClasses() {
      let e = this;
      if (!e.params._emitClasses || !e.el) return;
      let t = [];
      (e.slides.forEach((n) => {
        let r = e.getSlideClasses(n);
        (t.push({ slideEl: n, classNames: r }), e.emit(`_slideClass`, n, r));
      }),
        e.emit(`_slideClasses`, t));
    }
    slidesPerViewDynamic(e = `current`, t = !1) {
      let {
          params: n,
          slides: r,
          slidesGrid: i,
          slidesSizesGrid: a,
          size: o,
          activeIndex: s,
        } = this,
        c = 1;
      if (typeof n.slidesPerView == `number`) return n.slidesPerView;
      if (n.centeredSlides) {
        let e = r[s] ? Math.ceil(r[s].swiperSlideSize) : 0,
          t;
        for (let n = s + 1; n < r.length; n += 1)
          r[n] &&
            !t &&
            ((e += Math.ceil(r[n].swiperSlideSize)),
            (c += 1),
            e > o && (t = !0));
        for (let n = s - 1; n >= 0; --n)
          r[n] &&
            !t &&
            ((e += r[n].swiperSlideSize), (c += 1), e > o && (t = !0));
      } else if (e === `current`)
        for (let e = s + 1; e < r.length; e += 1)
          (t ? i[e] + a[e] - i[s] < o : i[e] - i[s] < o) && (c += 1);
      else for (let e = s - 1; e >= 0; --e) i[s] - i[e] < o && (c += 1);
      return c;
    }
    update() {
      let e = this;
      if (!e || e.destroyed) return;
      let { snapGrid: t, params: n } = e;
      (n.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll(`[loading="lazy"]`)].forEach((t) => {
          t.complete && ol(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses());
      function r() {
        let t = e.rtlTranslate ? e.translate * -1 : e.translate,
          n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        (e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses());
      }
      let i;
      if (n.freeMode && n.freeMode.enabled && !n.cssMode)
        (r(), n.autoHeight && e.updateAutoHeight());
      else {
        if (
          (n.slidesPerView === `auto` || n.slidesPerView > 1) &&
          e.isEnd &&
          !n.centeredSlides
        ) {
          let t = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
          i = e.slideTo(t.length - 1, 0, !1, !0);
        } else i = e.slideTo(e.activeIndex, 0, !1, !0);
        i || r();
      }
      (n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit(`update`));
    }
    changeDirection(e, t = !0) {
      let n = this,
        r = n.params.direction;
      return (
        (e ||= r === `horizontal` ? `vertical` : `horizontal`),
        e === r || (e !== `horizontal` && e !== `vertical`)
          ? n
          : (n.el.classList.remove(`${n.params.containerModifierClass}${r}`),
            n.el.classList.add(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.forEach((t) => {
              e === `vertical` ? (t.style.width = ``) : (t.style.height = ``);
            }),
            n.emit(`changeDirection`),
            t && n.update(),
            n)
      );
    }
    changeLanguageDirection(e) {
      let t = this;
      (t.rtl && e === `rtl`) ||
        (!t.rtl && e === `ltr`) ||
        ((t.rtl = e === `rtl`),
        (t.rtlTranslate = t.params.direction === `horizontal` && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = `rtl`))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = `ltr`)),
        t.update());
    }
    mount(e) {
      let t = this;
      if (t.mounted) return !0;
      let n = e || t.params.el;
      if ((typeof n == `string` && (n = document.querySelector(n)), !n))
        return !1;
      ((n.swiper = t),
        n.parentNode &&
          n.parentNode.host &&
          n.parentNode.host.nodeName ===
            t.params.swiperElementNodeName.toUpperCase() &&
          (t.isElement = !0));
      let r = () =>
          `.${(t.params.wrapperClass || ``).trim().split(` `).join(`.`)}`,
        i =
          n && n.shadowRoot && n.shadowRoot.querySelector
            ? n.shadowRoot.querySelector(r())
            : Dc(n, r())[0];
      return (
        !i &&
          t.params.createElements &&
          ((i = jc(`div`, t.params.wrapperClass)),
          n.append(i),
          Dc(n, `.${t.params.slideClass}`).forEach((e) => {
            i.append(e);
          })),
        Object.assign(t, {
          el: n,
          wrapperEl: i,
          slidesEl:
            t.isElement && !n.parentNode.host.slideSlots
              ? n.parentNode.host
              : i,
          hostEl: t.isElement ? n.parentNode.host : n,
          mounted: !0,
          rtl: n.dir.toLowerCase() === `rtl` || Pc(n, `direction`) === `rtl`,
          rtlTranslate:
            t.params.direction === `horizontal` &&
            (n.dir.toLowerCase() === `rtl` || Pc(n, `direction`) === `rtl`),
          wrongRTL: Pc(i, `display`) === `-webkit-box`,
        }),
        !0
      );
    }
    init(e) {
      let t = this;
      if (t.initialized || t.mount(e) === !1) return t;
      (t.emit(`beforeInit`),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0,
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0,
            ),
        t.params.loop && t.loopCreate(void 0, !0),
        t.attachEvents());
      let n = [...t.el.querySelectorAll(`[loading="lazy"]`)];
      return (
        t.isElement && n.push(...t.hostEl.querySelectorAll(`[loading="lazy"]`)),
        n.forEach((e) => {
          e.complete
            ? ol(t, e)
            : e.addEventListener(`load`, (e) => {
                ol(t, e.target);
              });
        }),
        cl(t),
        (t.initialized = !0),
        cl(t),
        t.emit(`init`),
        t.emit(`afterInit`),
        t
      );
    }
    destroy(e = !0, t = !0) {
      let n = this,
        { params: r, el: i, wrapperEl: a, slides: o } = n;
      return n.params === void 0 || n.destroyed
        ? null
        : (n.emit(`beforeDestroy`),
          (n.initialized = !1),
          n.detachEvents(),
          r.loop && n.loopDestroy(),
          t &&
            (n.removeClasses(),
            i && typeof i != `string` && i.removeAttribute(`style`),
            a && a.removeAttribute(`style`),
            o &&
              o.length &&
              o.forEach((e) => {
                (e.classList.remove(
                  r.slideVisibleClass,
                  r.slideFullyVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass,
                ),
                  e.removeAttribute(`style`),
                  e.removeAttribute(`data-swiper-slide-index`));
              })),
          n.emit(`destroy`),
          Object.keys(n.eventsListeners).forEach((e) => {
            n.off(e);
          }),
          e !== !1 &&
            (n.el && typeof n.el != `string` && (n.el.swiper = null), _c(n)),
          (n.destroyed = !0),
          null);
    }
    static extendDefaults(e) {
      wc(du, e);
    }
    static get extendedDefaults() {
      return du;
    }
    static get defaults() {
      return cu;
    }
    static installModule(t) {
      e.prototype.__modules__ || (e.prototype.__modules__ = []);
      let n = e.prototype.__modules__;
      typeof t == `function` && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
      return Array.isArray(t)
        ? (t.forEach((t) => e.installModule(t)), e)
        : (e.installModule(t), e);
    }
  };
(Object.keys(uu).forEach((e) => {
  Object.keys(uu[e]).forEach((t) => {
    fu.prototype[t] = uu[e][t];
  });
}),
  fu.use([Jc, Yc]));
var pu =
  `eventsPrefix.injectStyles.injectStylesUrls.modules.init._direction.oneWayMovement.swiperElementNodeName.touchEventsTarget.initialSlide._speed.cssMode.updateOnWindowResize.resizeObserver.nested.focusableElements._enabled._width._height.preventInteractionOnTransition.userAgent.url._edgeSwipeDetection._edgeSwipeThreshold._freeMode._autoHeight.setWrapperSize.virtualTranslate._effect.breakpoints.breakpointsBase._spaceBetween._slidesPerView.maxBackfaceHiddenSlides._grid._slidesPerGroup._slidesPerGroupSkip._slidesPerGroupAuto._centeredSlides._centeredSlidesBounds._slidesOffsetBefore._slidesOffsetAfter.normalizeSlideIndex._centerInsufficientSlides._snapToSlideEdge._watchOverflow.roundLengths.touchRatio.touchAngle.simulateTouch._shortSwipes._longSwipes.longSwipesRatio.longSwipesMs._followFinger.allowTouchMove._threshold.touchMoveStopPropagation.touchStartPreventDefault.touchStartForcePreventDefault.touchReleaseOnEdges.uniqueNavElements._resistance._resistanceRatio._watchSlidesProgress._grabCursor.preventClicks.preventClicksPropagation._slideToClickedSlide._loop.loopAdditionalSlides.loopAddBlankSlides.loopPreventsSliding._rewind._allowSlidePrev._allowSlideNext._swipeHandler._noSwiping.noSwipingClass.noSwipingSelector.passiveListeners.containerModifierClass.slideClass.slideActiveClass.slideVisibleClass.slideFullyVisibleClass.slideNextClass.slidePrevClass.slideBlankClass.wrapperClass.lazyPreloaderClass.lazyPreloadPrevNext.runCallbacksOnInit.observer.observeParents.observeSlideChildren.a11y._autoplay._controller.coverflowEffect.cubeEffect.fadeEffect.flipEffect.creativeEffect.cardsEffect.hashNavigation.history.keyboard.mousewheel._navigation._pagination.parallax._scrollbar._thumbs.virtual.zoom.control`.split(
    `.`,
  );
function mu(e) {
  return (
    typeof e == `object` &&
    !!e &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === `Object` &&
    !e.__swiper__
  );
}
function hu(e, t) {
  let n = [`__proto__`, `constructor`, `prototype`];
  Object.keys(t)
    .filter((e) => n.indexOf(e) < 0)
    .forEach((n) => {
      e[n] === void 0
        ? (e[n] = t[n])
        : mu(t[n]) && mu(e[n]) && Object.keys(t[n]).length > 0
          ? t[n].__swiper__
            ? (e[n] = t[n])
            : hu(e[n], t[n])
          : (e[n] = t[n]);
    });
}
function gu(e = {}) {
  return (
    e.navigation &&
    e.navigation.nextEl === void 0 &&
    e.navigation.prevEl === void 0
  );
}
function _u(e = {}) {
  return e.pagination && e.pagination.el === void 0;
}
function vu(e = {}) {
  return e.scrollbar && e.scrollbar.el === void 0;
}
function yu(e = ``) {
  let t = e
      .split(` `)
      .map((e) => e.trim())
      .filter((e) => !!e),
    n = [];
  return (
    t.forEach((e) => {
      n.indexOf(e) < 0 && n.push(e);
    }),
    n.join(` `)
  );
}
function bu(e = ``) {
  return e
    ? e.includes(`swiper-wrapper`)
      ? e
      : `swiper-wrapper ${e}`
    : `swiper-wrapper`;
}
function xu({
  swiper: e,
  slides: t,
  passedParams: n,
  changedParams: r,
  nextEl: i,
  prevEl: a,
  scrollbarEl: o,
  paginationEl: s,
}) {
  let c = r.filter(
      (e) => e !== `children` && e !== `direction` && e !== `wrapperClass`,
    ),
    {
      params: l,
      pagination: u,
      navigation: d,
      scrollbar: f,
      virtual: p,
      thumbs: m,
    } = e,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S;
  (r.includes(`thumbs`) &&
    n.thumbs &&
    n.thumbs.swiper &&
    !n.thumbs.swiper.destroyed &&
    l.thumbs &&
    (!l.thumbs.swiper || l.thumbs.swiper.destroyed) &&
    (h = !0),
    r.includes(`controller`) &&
      n.controller &&
      n.controller.control &&
      l.controller &&
      !l.controller.control &&
      (g = !0),
    r.includes(`pagination`) &&
      n.pagination &&
      (n.pagination.el || s) &&
      (l.pagination || l.pagination === !1) &&
      u &&
      !u.el &&
      (_ = !0),
    r.includes(`scrollbar`) &&
      n.scrollbar &&
      (n.scrollbar.el || o) &&
      (l.scrollbar || l.scrollbar === !1) &&
      f &&
      !f.el &&
      (v = !0),
    r.includes(`navigation`) &&
      n.navigation &&
      (n.navigation.prevEl || a) &&
      (n.navigation.nextEl || i) &&
      (l.navigation || l.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (y = !0));
  let C = (t) => {
    e[t] &&
      (e[t].destroy(),
      t === `navigation`
        ? (e.isElement && (e[t].prevEl.remove(), e[t].nextEl.remove()),
          (l[t].prevEl = void 0),
          (l[t].nextEl = void 0),
          (e[t].prevEl = void 0),
          (e[t].nextEl = void 0))
        : (e.isElement && e[t].el.remove(),
          (l[t].el = void 0),
          (e[t].el = void 0)));
  };
  (r.includes(`loop`) &&
    e.isElement &&
    (l.loop && !n.loop ? (b = !0) : !l.loop && n.loop ? (x = !0) : (S = !0)),
    c.forEach((e) => {
      if (mu(l[e]) && mu(n[e]))
        (Object.assign(l[e], n[e]),
          (e === `navigation` || e === `pagination` || e === `scrollbar`) &&
            `enabled` in n[e] &&
            !n[e].enabled &&
            C(e));
      else {
        let t = n[e];
        (t === !0 || t === !1) &&
        (e === `navigation` || e === `pagination` || e === `scrollbar`)
          ? t === !1 && C(e)
          : (l[e] = n[e]);
      }
    }),
    c.includes(`controller`) &&
      !g &&
      e.controller &&
      e.controller.control &&
      l.controller &&
      l.controller.control &&
      (e.controller.control = l.controller.control),
    r.includes(`children`) && t && p && l.virtual.enabled
      ? ((p.slides = t), p.update(!0))
      : r.includes(`virtual`) &&
        p &&
        l.virtual.enabled &&
        (t && (p.slides = t), p.update(!0)),
    r.includes(`children`) && t && l.loop && (S = !0),
    h && m.init() && m.update(!0),
    g && (e.controller.control = l.controller.control),
    _ &&
      (e.isElement &&
        (!s || typeof s == `string`) &&
        ((s = document.createElement(`div`)),
        s.classList.add(`swiper-pagination`),
        s.part.add(`pagination`),
        e.el.appendChild(s)),
      s && (l.pagination.el = s),
      u.init(),
      u.render(),
      u.update()),
    v &&
      (e.isElement &&
        (!o || typeof o == `string`) &&
        ((o = document.createElement(`div`)),
        o.classList.add(`swiper-scrollbar`),
        o.part.add(`scrollbar`),
        e.el.appendChild(o)),
      o && (l.scrollbar.el = o),
      f.init(),
      f.updateSize(),
      f.setTranslate()),
    y &&
      (e.isElement &&
        ((!i || typeof i == `string`) &&
          ((i = document.createElement(`div`)),
          i.classList.add(`swiper-button-next`),
          Rc(i, e.navigation.arrowSvg),
          i.part.add(`button-next`),
          e.el.appendChild(i)),
        (!a || typeof a == `string`) &&
          ((a = document.createElement(`div`)),
          a.classList.add(`swiper-button-prev`),
          Rc(a, e.navigation.arrowSvg),
          a.part.add(`button-prev`),
          e.el.appendChild(a))),
      i && (l.navigation.nextEl = i),
      a && (l.navigation.prevEl = a),
      d.init(),
      d.update()),
    r.includes(`allowSlideNext`) && (e.allowSlideNext = n.allowSlideNext),
    r.includes(`allowSlidePrev`) && (e.allowSlidePrev = n.allowSlidePrev),
    r.includes(`direction`) && e.changeDirection(n.direction, !1),
    (b || S) && e.loopDestroy(),
    (x || S) && e.loopCreate(),
    e.update());
}
function Su(e = {}, t = !0) {
  let n = { on: {} },
    r = {},
    i = {};
  (hu(n, cu), (n._emitClasses = !0), (n.init = !1));
  let a = {},
    o = pu.map((e) => e.replace(/_/, ``)),
    s = Object.assign({}, e);
  return (
    Object.keys(s).forEach((s) => {
      e[s] !== void 0 &&
        (o.indexOf(s) >= 0
          ? mu(e[s])
            ? ((n[s] = {}), (i[s] = {}), hu(n[s], e[s]), hu(i[s], e[s]))
            : ((n[s] = e[s]), (i[s] = e[s]))
          : s.search(/on[A-Z]/) === 0 && typeof e[s] == `function`
            ? t
              ? (r[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
              : (n.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
            : (a[s] = e[s]));
    }),
    [`navigation`, `pagination`, `scrollbar`].forEach((e) => {
      (n[e] === !0 && (n[e] = {}), n[e] === !1 && delete n[e]);
    }),
    { params: n, passedParams: i, rest: a, events: r }
  );
}
function Cu(
  { el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: i, swiper: a },
  o,
) {
  (gu(o) &&
    t &&
    n &&
    ((a.params.navigation.nextEl = t),
    (a.originalParams.navigation.nextEl = t),
    (a.params.navigation.prevEl = n),
    (a.originalParams.navigation.prevEl = n)),
    _u(o) &&
      r &&
      ((a.params.pagination.el = r), (a.originalParams.pagination.el = r)),
    vu(o) &&
      i &&
      ((a.params.scrollbar.el = i), (a.originalParams.scrollbar.el = i)),
    a.init(e));
}
function wu(e, t, n, r, i) {
  let a = [];
  if (!t) return a;
  let o = (e) => {
    a.indexOf(e) < 0 && a.push(e);
  };
  if (n && r) {
    let e = r.map(i),
      t = n.map(i);
    (e.join(``) !== t.join(``) && o(`children`),
      r.length !== n.length && o(`children`));
  }
  return (
    pu
      .filter((e) => e[0] === `_`)
      .map((e) => e.replace(/_/, ``))
      .forEach((n) => {
        if (n in e && n in t)
          if (mu(e[n]) && mu(t[n])) {
            let r = Object.keys(e[n]),
              i = Object.keys(t[n]);
            r.length === i.length
              ? (r.forEach((r) => {
                  e[n][r] !== t[n][r] && o(n);
                }),
                i.forEach((r) => {
                  e[n][r] !== t[n][r] && o(n);
                }))
              : o(n);
          } else e[n] !== t[n] && o(n);
      }),
    a
  );
}
var Tu = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.emit(`_virtualUpdated`),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Eu() {
  return (
    (Eu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Eu.apply(this, arguments)
  );
}
function Du(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes(`SwiperSlide`)
  );
}
function Ou(e) {
  let t = [];
  return (
    _.Children.toArray(e).forEach((e) => {
      Du(e)
        ? t.push(e)
        : e.props &&
          e.props.children &&
          Ou(e.props.children).forEach((e) => t.push(e));
    }),
    t
  );
}
function ku(e) {
  let t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    _.Children.toArray(e).forEach((e) => {
      if (Du(e)) t.push(e);
      else if (e.props && e.props.slot && n[e.props.slot])
        n[e.props.slot].push(e);
      else if (e.props && e.props.children) {
        let r = Ou(e.props.children);
        r.length > 0 ? r.forEach((e) => t.push(e)) : n[`container-end`].push(e);
      } else n[`container-end`].push(e);
    }),
    { slides: t, slots: n }
  );
}
function Au(e, t, n) {
  if (!n) return null;
  let r = (e) => {
      let n = e;
      return (e < 0 ? (n = t.length + e) : n >= t.length && (n -= t.length), n);
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? `right` : `left`]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: a, to: o } = n,
    s = e.params.loop ? -t.length : 0,
    c = e.params.loop ? t.length * 2 : t.length,
    l = [];
  for (let e = s; e < c; e += 1) e >= a && e <= o && l.push(t[r(e)]);
  return l.map((t, n) =>
    _.cloneElement(t, {
      swiper: e,
      style: i,
      key: t.props.virtualIndex || t.key || `slide-${n}`,
    }),
  );
}
function ju(e, t) {
  return typeof window > `u`
    ? (0, _.useEffect)(e, t)
    : (0, _.useLayoutEffect)(e, t);
}
var Mu = (0, _.createContext)(null),
  Nu = (0, _.createContext)(null),
  Pu = (0, _.forwardRef)(
    (
      {
        className: e,
        tag: t = `div`,
        wrapperTag: n = `div`,
        children: r,
        onSwiper: i,
        ...a
      } = {},
      o,
    ) => {
      let s = !1,
        [c, l] = (0, _.useState)(`swiper`),
        [u, d] = (0, _.useState)(null),
        [f, p] = (0, _.useState)(!1),
        m = (0, _.useRef)(!1),
        h = (0, _.useRef)(null),
        g = (0, _.useRef)(null),
        v = (0, _.useRef)(null),
        y = (0, _.useRef)(null),
        b = (0, _.useRef)(null),
        x = (0, _.useRef)(null),
        S = (0, _.useRef)(null),
        C = (0, _.useRef)(null),
        { params: w, passedParams: T, rest: E, events: D } = Su(a),
        { slides: O, slots: k } = ku(r),
        A = () => {
          p(!f);
        };
      Object.assign(w.on, {
        _containerClasses(e, t) {
          l(t);
        },
      });
      let j = () => {
        (Object.assign(w.on, D), (s = !0));
        let e = { ...w };
        if (
          (delete e.wrapperClass,
          (g.current = new fu(e)),
          g.current.virtual && g.current.params.virtual.enabled)
        ) {
          g.current.virtual.slides = O;
          let e = {
            cache: !1,
            slides: O,
            renderExternal: d,
            renderExternalUpdate: !1,
          };
          (hu(g.current.params.virtual, e),
            hu(g.current.originalParams.virtual, e));
        }
      };
      (h.current || j(), g.current && g.current.on(`_beforeBreakpoint`, A));
      let M = () => {
          s ||
            !D ||
            !g.current ||
            Object.keys(D).forEach((e) => {
              g.current.on(e, D[e]);
            });
        },
        ee = () => {
          !D ||
            !g.current ||
            Object.keys(D).forEach((e) => {
              g.current.off(e, D[e]);
            });
        };
      ((0, _.useEffect)(() => () => {
        g.current && g.current.off(`_beforeBreakpoint`, A);
      }),
        (0, _.useEffect)(() => {
          !m.current &&
            g.current &&
            (g.current.emitSlidesClasses(), (m.current = !0));
        }),
        ju(() => {
          if ((o && (o.current = h.current), h.current))
            return (
              g.current.destroyed && j(),
              Cu(
                {
                  el: h.current,
                  nextEl: b.current,
                  prevEl: x.current,
                  paginationEl: S.current,
                  scrollbarEl: C.current,
                  swiper: g.current,
                },
                w,
              ),
              i && !g.current.destroyed && i(g.current),
              () => {
                g.current && !g.current.destroyed && g.current.destroy(!0, !1);
              }
            );
        }, []),
        ju(() => {
          M();
          let e = wu(T, v.current, O, y.current, (e) => e.key);
          return (
            (v.current = T),
            (y.current = O),
            e.length &&
              g.current &&
              !g.current.destroyed &&
              xu({
                swiper: g.current,
                slides: O,
                passedParams: T,
                changedParams: e,
                nextEl: b.current,
                prevEl: x.current,
                scrollbarEl: C.current,
                paginationEl: S.current,
              }),
            () => {
              ee();
            }
          );
        }),
        ju(() => {
          Tu(g.current);
        }, [u]));
      function N() {
        return w.virtual
          ? Au(g.current, O, u)
          : O.map((e, t) =>
              _.cloneElement(e, { swiper: g.current, swiperSlideIndex: t }),
            );
      }
      return _.createElement(
        t,
        Eu({ ref: h, className: yu(`${c}${e ? ` ${e}` : ``}`) }, E),
        _.createElement(
          Nu.Provider,
          { value: g.current },
          k[`container-start`],
          _.createElement(
            n,
            { className: bu(w.wrapperClass) },
            k[`wrapper-start`],
            N(),
            k[`wrapper-end`],
          ),
          gu(w) &&
            _.createElement(
              _.Fragment,
              null,
              _.createElement(`div`, {
                ref: x,
                className: `swiper-button-prev`,
              }),
              _.createElement(`div`, {
                ref: b,
                className: `swiper-button-next`,
              }),
            ),
          vu(w) &&
            _.createElement(`div`, { ref: C, className: `swiper-scrollbar` }),
          _u(w) &&
            _.createElement(`div`, { ref: S, className: `swiper-pagination` }),
          k[`container-end`],
        ),
      );
    },
  );
Pu.displayName = `Swiper`;
var Fu = (0, _.forwardRef)(
  (
    {
      tag: e = `div`,
      children: t,
      className: n = ``,
      swiper: r,
      zoom: i,
      lazy: a,
      virtualIndex: o,
      swiperSlideIndex: s,
      ...c
    } = {},
    l,
  ) => {
    let u = (0, _.useRef)(null),
      [d, f] = (0, _.useState)(`swiper-slide`),
      [p, m] = (0, _.useState)(!1);
    function h(e, t, n) {
      t === u.current && f(n);
    }
    (ju(() => {
      if (
        (s !== void 0 && (u.current.swiperSlideIndex = s),
        l && (l.current = u.current),
        !(!u.current || !r))
      ) {
        if (r.destroyed) {
          d !== `swiper-slide` && f(`swiper-slide`);
          return;
        }
        return (
          r.on(`_slideClass`, h),
          () => {
            r && r.off(`_slideClass`, h);
          }
        );
      }
    }),
      ju(() => {
        r && u.current && !r.destroyed && f(r.getSlideClasses(u.current));
      }, [r]));
    let g = {
        isActive: d.indexOf(`swiper-slide-active`) >= 0,
        isVisible: d.indexOf(`swiper-slide-visible`) >= 0,
        isFullyVisible: d.indexOf(`swiper-slide-fully-visible`) >= 0,
        isPrev: d.indexOf(`swiper-slide-prev`) >= 0,
        isNext: d.indexOf(`swiper-slide-next`) >= 0,
      },
      v = () => (typeof t == `function` ? t(g) : t);
    return _.createElement(
      e,
      Eu(
        {
          ref: u,
          className: yu(`${d}${n ? ` ${n}` : ``}`),
          "data-swiper-slide-index": o,
          onLoad: () => {
            m(!0);
          },
        },
        c,
      ),
      i &&
        _.createElement(
          Mu.Provider,
          { value: g },
          _.createElement(
            `div`,
            {
              className: `swiper-zoom-container`,
              "data-swiper-zoom": typeof i == `number` ? i : void 0,
            },
            v(),
            a &&
              !p &&
              _.createElement(`div`, {
                className: `swiper-lazy-preloader`,
                ref: (e) => {
                  e && (e.lazyPreloaderManaged = !0);
                },
              }),
          ),
        ),
      !i &&
        _.createElement(
          Mu.Provider,
          { value: g },
          v(),
          a &&
            !p &&
            _.createElement(`div`, {
              className: `swiper-lazy-preloader`,
              ref: (e) => {
                e && (e.lazyPreloaderManaged = !0);
              },
            }),
        ),
    );
  },
);
Fu.displayName = `SwiperSlide`;
function Iu({ swiper: e, extendParams: t, on: n, emit: r, params: i }) {
  ((e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    }));
  let a,
    o,
    s = i && i.autoplay ? i.autoplay.delay : 3e3,
    c = i && i.autoplay ? i.autoplay.delay : 3e3,
    l,
    u = new Date().getTime(),
    d,
    f,
    p,
    m,
    h,
    g;
  function _(t) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (t.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener(`transitionend`, _),
        !(g || (t.detail && t.detail.bySwiperTouchMove)) && T()));
  }
  let v = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (d = !0) : (d &&= ((c = l), !1));
      let t = e.autoplay.paused ? l : u + c - new Date().getTime();
      ((e.autoplay.timeLeft = t),
        r(`autoplayTimeLeft`, t, t / s),
        (o = requestAnimationFrame(() => {
          v();
        })));
    },
    y = () => {
      let t;
      if (
        ((t =
          e.virtual && e.params.virtual.enabled
            ? e.slides.find((e) => e.classList.contains(`swiper-slide-active`))
            : e.slides[e.activeIndex]),
        t)
      )
        return parseInt(t.getAttribute(`data-swiper-autoplay`), 10);
    },
    b = () => {
      let t = e.params.autoplay.delay,
        n = y();
      return (!Number.isNaN(n) && n > 0 && (t = n), t);
    },
    x = (t) => {
      if (e.destroyed || !e.autoplay.running) return;
      (cancelAnimationFrame(o), v());
      let n = t;
      (n === void 0 && ((n = b()), (s = n), (c = n)), (l = n));
      let i = e.params.speed,
        d = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(i, !0, !0), r(`autoplay`))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, i, !0, !0), r(`autoplay`))
              : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(i, !0, !0), r(`autoplay`))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, i, !0, !0), r(`autoplay`)),
            e.params.cssMode &&
              ((u = new Date().getTime()),
              requestAnimationFrame(() => {
                x();
              })));
        };
      return (
        n > 0
          ? (clearTimeout(a),
            (a = setTimeout(() => {
              d();
            }, n)))
          : requestAnimationFrame(() => {
              d();
            }),
        n
      );
    },
    S = () => {
      ((u = new Date().getTime()),
        (e.autoplay.running = !0),
        x(),
        r(`autoplayStart`));
    },
    C = () => {
      ((e.autoplay.running = !1),
        clearTimeout(a),
        cancelAnimationFrame(o),
        r(`autoplayStop`));
    },
    w = (t, n) => {
      if (e.destroyed || !e.autoplay.running) return;
      (clearTimeout(a), t || (h = !0));
      let i = () => {
        (r(`autoplayPause`),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener(`transitionend`, _)
            : T());
      };
      if (((e.autoplay.paused = !0), n)) {
        i();
        return;
      }
      ((l = (l || e.params.autoplay.delay) - (new Date().getTime() - u)),
        !(e.isEnd && l < 0 && !e.params.loop) && (l < 0 && (l = 0), i()));
    },
    T = () => {
      (e.isEnd && l < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((u = new Date().getTime()),
        h ? ((h = !1), x(l)) : x(),
        (e.autoplay.paused = !1),
        r(`autoplayResume`));
    },
    E = () => {
      if (e.destroyed || !e.autoplay.running) return;
      let t = pc();
      (t.visibilityState === `hidden` && ((h = !0), w(!0)),
        t.visibilityState === `visible` && T());
    },
    D = (t) => {
      t.pointerType === `mouse` &&
        ((h = !0), (g = !0), !(e.animating || e.autoplay.paused) && w(!0));
    },
    O = (t) => {
      t.pointerType === `mouse` && ((g = !1), e.autoplay.paused && T());
    },
    k = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener(`pointerenter`, D),
        e.el.addEventListener(`pointerleave`, O));
    },
    A = () => {
      e.el &&
        typeof e.el != `string` &&
        (e.el.removeEventListener(`pointerenter`, D),
        e.el.removeEventListener(`pointerleave`, O));
    },
    j = () => {
      pc().addEventListener(`visibilitychange`, E);
    },
    M = () => {
      pc().removeEventListener(`visibilitychange`, E);
    };
  (n(`init`, () => {
    e.params.autoplay.enabled && (k(), j(), S());
  }),
    n(`destroy`, () => {
      (A(), M(), e.autoplay.running && C());
    }),
    n(`_freeModeStaticRelease`, () => {
      (p || h) && T();
    }),
    n(`_freeModeNoMomentumRelease`, () => {
      e.params.autoplay.disableOnInteraction ? C() : w(!0, !0);
    }),
    n(`beforeTransitionStart`, (t, n, r) => {
      e.destroyed ||
        !e.autoplay.running ||
        (r || !e.params.autoplay.disableOnInteraction ? w(!0, !0) : C());
    }),
    n(`sliderFirstMove`, () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          C();
          return;
        }
        ((f = !0),
          (p = !1),
          (h = !1),
          (m = setTimeout(() => {
            ((h = !0), (p = !0), w(!0));
          }, 200)));
      }
    }),
    n(`touchEnd`, () => {
      if (!(e.destroyed || !e.autoplay.running || !f)) {
        if (
          (clearTimeout(m),
          clearTimeout(a),
          e.params.autoplay.disableOnInteraction)
        ) {
          ((p = !1), (f = !1));
          return;
        }
        (p && e.params.cssMode && T(), (p = !1), (f = !1));
      }
    }),
    n(`slideChange`, () => {
      e.destroyed ||
        !e.autoplay.running ||
        (e.autoplay.paused && ((l = b()), (s = b())));
    }),
    Object.assign(e.autoplay, { start: S, stop: C, pause: w, resume: T }));
}
W.registerPlugin(Q);
function Lu() {
  let e = (0, _.useRef)(null),
    t = (0, _.useRef)(null),
    n = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      let r = W.context(() => {
        (t.current &&
          W.fromTo(
            t.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.15,
              ease: `power3.out`,
              scrollTrigger: {
                trigger: t.current,
                start: `top 85%`,
                toggleActions: `play none none reverse`,
              },
            },
          ),
          n.current &&
            W.fromTo(
              n.current.children,
              { opacity: 0, y: 50, scale: 0.97 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: `power3.out`,
                scrollTrigger: {
                  trigger: n.current,
                  start: `top 80%`,
                  toggleActions: `play none none reverse`,
                },
              },
            ));
      }, e);
      return () => r.revert();
    }, []),
    (0, b.jsxs)(`section`, {
      ref: e,
      id: `ventures`,
      className: `py-12 bg-[#FAF7F2] relative overflow-hidden`,
      children: [
        (0, b.jsxs)(`svg`, {
          className: `absolute left-0 top-0 h-full w-[35%] opacity-[0.12] pointer-events-none z-0 hidden md:block`,
          viewBox: `0 0 300 600`,
          fill: `none`,
          children: [
            (0, b.jsx)(`path`, {
              d: `M-50 100 C 150 150, 50 350, -50 450`,
              stroke: `#C8A46B`,
              strokeWidth: `0.75`,
            }),
            (0, b.jsx)(`path`, {
              d: `M-50 130 C 180 190, 80 390, -50 490`,
              stroke: `#C8A46B`,
              strokeWidth: `0.75`,
              strokeDasharray: `3 3`,
            }),
            (0, b.jsx)(`path`, {
              d: `M-50 160 C 210 230, 110 430, -50 530`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
            }),
            (0, b.jsx)(`path`, {
              d: `M-50 190 C 240 270, 140 470, -50 570`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
            }),
          ],
        }),
        (0, b.jsxs)(`svg`, {
          className: `absolute right-0 bottom-0 h-full w-[30%] opacity-[0.08] pointer-events-none z-0 hidden md:block`,
          viewBox: `0 0 300 600`,
          fill: `none`,
          children: [
            (0, b.jsx)(`circle`, {
              cx: `300`,
              cy: `300`,
              r: `250`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
            }),
            (0, b.jsx)(`circle`, {
              cx: `300`,
              cy: `300`,
              r: `200`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
              strokeDasharray: `3 3`,
            }),
          ],
        }),
        (0, b.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-6 md:px-12 relative z-10`,
          children: [
            (0, b.jsxs)(`div`, {
              ref: t,
              className: `flex items-center justify-center gap-5 mb-20`,
              children: [
                (0, b.jsx)(`span`, {
                  className: `w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C8A46B]`,
                }),
                (0, b.jsx)(`h2`, {
                  className: `font-serif-luxury text-base md:text-xl lg:text-2xl tracking-[0.5em] text-[#C8A46B] font-medium uppercase whitespace-nowrap`,
                  children: `MY VENTURES`,
                }),
                (0, b.jsx)(`span`, {
                  className: `w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C8A46B]`,
                }),
              ],
            }),
            (0, b.jsx)(Pu, {
              modules: [Iu],
              spaceBetween: 24,
              slidesPerView: 1,
              slidesPerGroup: 1,
              loop: !0,
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              grabCursor: !0,
              breakpoints: {
                768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
              },
              className: `my-8`,
              children: [
                {
                  logoText: `EVA`,
                  logoSub: `REALTY`,
                  description: `Hyderabad-based real estate consultancy offering end-to-end solutions in residential, commercial, and investment advisory.`,
                  image: `images/veva_realty_interior.png`,
                  link: `#contact`,
                },
                {
                  logoText: `SPACES`,
                  logoSub: `BY VEVA`,
                  description: `Premium co-working & flexible workspace solutions designed for modern businesses.`,
                  image: `images/vspaces_interior.png`,
                  link: `#contact`,
                },
                {
                  logoText: `EVA`,
                  logoSub: `REALTY`,
                  description: `Hyderabad-based real estate consultancy offering end-to-end solutions in residential, commercial, and investment advisory.`,
                  image: `images/veva_realty_interior.png`,
                  link: `#contact`,
                },
                {
                  logoText: `SPACES`,
                  logoSub: `BY VEVA`,
                  description: `Premium co-working & flexible workspace solutions designed for modern businesses.`,
                  image: `images/vspaces_interior.png`,
                  link: `#contact`,
                },
              ].map((e, t) =>
                (0, b.jsx)(
                  Fu,
                  {
                    children: (0, b.jsxs)(`div`, {
                      className: `group cursor-pointer overflow-hidden rounded-[20px] bg-[#FCFAF7] border border-[#C8A46B]/15 hover:border-[#C8A46B]/35 hover:shadow-[0_20px_50px_rgba(200,164,107,0.08)] transition-all duration-500 flex flex-col md:flex-row items-stretch`,
                      children: [
                        (0, b.jsxs)(`div`, {
                          className: `w-full md:w-[58%] p-6 md:p-8 flex flex-col justify-between items-start text-left gap-4 lg:gap-6`,
                          children: [
                            (0, b.jsxs)(`div`, {
                              className: `flex flex-col items-start gap-3 w-full`,
                              children: [
                                (0, b.jsxs)(`div`, {
                                  className: `flex items-center gap-1 shrink-0 select-none`,
                                  children: [
                                    (0, b.jsx)(`span`, {
                                      className: `font-serif-luxury text-5xl lg:text-6xl font-medium text-[#C8A46B] leading-none`,
                                      children: `V`,
                                    }),
                                    (0, b.jsxs)(`div`, {
                                      className: `flex flex-col justify-center leading-none`,
                                      children: [
                                        (0, b.jsx)(`span`, {
                                          className: `font-serif-luxury text-2xl lg:text-3xl font-light tracking-[0.12em] text-[#1E1C1A] mt-0.5`,
                                          children: e.logoText,
                                        }),
                                        (0, b.jsx)(`span`, {
                                          className: `text-[9px] lg:text-[10px] tracking-[0.3em] text-[#C8A46B] font-bold uppercase mt-1`,
                                          children: e.logoSub,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, b.jsx)(`p`, {
                                  className: `text-[14px] sm:text-base text-[#4A4744] font-light leading-relaxed mt-2`,
                                  children: e.description,
                                }),
                              ],
                            }),
                            (0, b.jsxs)(`a`, {
                              href: e.link,
                              className: `px-6 py-2.5 rounded-full border border-[#C8A46B]/25 bg-white hover:bg-[#C8A46B] hover:text-white hover:border-[#C8A46B] text-xs font-semibold text-[#4A4744] tracking-wider transition-all duration-300 shadow-[0_2px_8px_rgba(200,164,107,0.04)] hover:shadow-[0_4px_12px_rgba(200,164,107,0.2)] flex items-center gap-2 group-hover:scale-102`,
                              children: [
                                `Visit Website`,
                                (0, b.jsx)(`svg`, {
                                  className: `w-3.5 h-3.5`,
                                  fill: `none`,
                                  stroke: `currentColor`,
                                  strokeWidth: `2.5`,
                                  viewBox: `0 0 24 24`,
                                  children: (0, b.jsx)(`path`, {
                                    strokeLinecap: `round`,
                                    strokeLinejoin: `round`,
                                    d: `M14 5l7 7m0 0l-7 7m7-7H3`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsxs)(`div`, {
                          className: `relative w-full md:w-[42%] min-h-[240px] md:min-h-0 overflow-hidden`,
                          children: [
                            (0, b.jsx)(`img`, {
                              src: e.image,
                              alt: e.logoSub,
                              className: `w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]`,
                            }),
                            (0, b.jsx)(`div`, {
                              className: `hidden md:block absolute -left-6 top-0 bottom-0 w-12 bg-[#FCFAF7] border-r border-[#C8A46B]/20 transform skew-x-[12deg] origin-top z-10`,
                            }),
                            (0, b.jsx)(`div`, {
                              className: `absolute inset-0 bg-gradient-to-t from-[#0A0D14]/20 to-transparent pointer-events-none`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      ],
    })
  );
}
W.registerPlugin(Q);
function Ru() {
  let e = (0, _.useRef)(null),
    t = (0, _.useRef)(null),
    n = (0, _.useRef)(null),
    [r, i] = (0, _.useState)(0),
    [a, o] = (0, _.useState)(!1);
  (0, _.useEffect)(() => {
    let e = () => o(window.innerWidth < 768);
    return (
      e(),
      window.addEventListener(`resize`, e),
      () => window.removeEventListener(`resize`, e)
    );
  }, []);
  let s = a ? 1 : 2,
    c = a ? 4 : 3;
  ((0, _.useEffect)(() => {
    i((e) => Math.min(e, c - 1));
  }, [c]),
    (0, _.useEffect)(() => {
      let e = setInterval(() => {
        i((e) => (e + 1) % c);
      }, 4500);
      return () => clearInterval(e);
    }, [c]),
    (0, _.useEffect)(() => {
      if (window.innerWidth < 768) return;
      let r = W.context(() => {
        (W.fromTo(
          t.current,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: `none`,
            scrollTrigger: {
              trigger: e.current,
              start: `top bottom`,
              end: `bottom top`,
              scrub: !0,
            },
          },
        ),
          n.current &&
            W.fromTo(
              n.current,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 1.4,
                ease: `power3.out`,
                scrollTrigger: {
                  trigger: n.current,
                  start: `top 85%`,
                  toggleActions: `play none none reverse`,
                },
              },
            ));
      }, e);
      return () => r.revert();
    }, []));
  let l = [
    {
      title: `Trust`,
      description: `We build lasting relationships built on mutual respect and transparency.`,
      icon: (0, b.jsxs)(`svg`, {
        className: `w-7 h-7 text-[#C8A46B]`,
        viewBox: `0 0 48 48`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
        children: [
          (0, b.jsx)(`path`, {
            d: `M24 6L8 12V24C8 34 16 40 24 42C32 40 40 34 40 24V12L24 6Z`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }),
          (0, b.jsx)(`path`, {
            d: `M18 22L22 26L30 18`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            strokeWidth: `2.5`,
          }),
        ],
      }),
    },
    {
      title: `Transparency`,
      description: `Clear communication every single step of your real estate transaction.`,
      icon: (0, b.jsxs)(`svg`, {
        className: `w-7 h-7 text-[#C8A46B]`,
        viewBox: `0 0 48 48`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
        children: [
          (0, b.jsx)(`path`, {
            d: `M24 6L8 12V24C8 34 16 40 24 42C32 40 40 34 40 24V12L24 6Z`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }),
          (0, b.jsx)(`circle`, {
            cx: `24`,
            cy: `23`,
            r: `5`,
            strokeWidth: `1.5`,
          }),
          (0, b.jsx)(`circle`, {
            cx: `24`,
            cy: `23`,
            r: `1.5`,
            fill: `currentColor`,
          }),
          (0, b.jsx)(`path`, {
            d: `M17 23C17 23 20 18 24 18C28 18 31 23 31 23`,
            strokeLinecap: `round`,
          }),
        ],
      }),
    },
    {
      title: `Value Creation`,
      description: `Crafting modern spaces and portfolios that grow along with you.`,
      icon: (0, b.jsxs)(`svg`, {
        className: `w-7 h-7 text-[#C8A46B]`,
        viewBox: `0 0 48 48`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
        children: [
          (0, b.jsx)(`path`, {
            d: `M24 6L8 12V24C8 34 16 40 24 42C32 40 40 34 40 24V12L24 6Z`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }),
          (0, b.jsx)(`path`, {
            d: `M17 17L31 31`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }),
          (0, b.jsx)(`path`, {
            d: `M31 17L17 31`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }),
        ],
      }),
    },
    {
      title: `Excellence`,
      description: `Committed to delivering only the absolute highest luxury standards.`,
      icon: (0, b.jsxs)(`svg`, {
        className: `w-7 h-7 text-[#C8A46B]`,
        viewBox: `0 0 48 48`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
        children: [
          (0, b.jsx)(`path`, {
            d: `M24 6L8 12V24C8 34 16 40 24 42C32 40 40 34 40 24V12L24 6Z`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }),
          (0, b.jsx)(`path`, {
            d: `M18 30V22H22V26H26V22H30V30H18Z`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }),
          (0, b.jsx)(`path`, {
            d: `M22 22L24 17L26 22`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }),
        ],
      }),
    },
  ];
  return (0, b.jsxs)(`section`, {
    ref: e,
    className: `relative py-24 md:py-32 overflow-hidden`,
    children: [
      (0, b.jsx)(`div`, {
        className: `absolute inset-0 z-0 overflow-hidden`,
        children: (0, b.jsx)(`img`, {
          ref: t,
          src: `images/veva_realty_interior.png`,
          alt: `Luxury Office Interior`,
          className: `absolute inset-0 w-full h-[150%] object-cover scale-105 pointer-events-none`,
        }),
      }),
      (0, b.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-6 md:px-12 relative z-10`,
        children: (0, b.jsxs)(`div`, {
          ref: n,
          className: `w-[calc(100%+48px)] mx-[-24px] md:w-full md:mx-0 bg-[#0b0f17]/90 border-y md:border border-[#C8A46B]/20 rounded-none md:rounded-[24px] p-8 md:p-12 lg:p-16 shadow-[0_30px_70px_rgba(5,7,10,0.8)] backdrop-blur-md relative overflow-hidden`,
          children: [
            (0, b.jsx)(`div`, {
              className: `absolute -top-24 -right-24 w-48 h-48 bg-[#C8A46B]/10 rounded-full blur-[80px] pointer-events-none`,
            }),
            (0, b.jsx)(`div`, {
              className: `absolute -bottom-24 -left-24 w-48 h-48 bg-[#C8A46B]/5 rounded-full blur-[80px] pointer-events-none`,
            }),
            (0, b.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10`,
              children: [
                (0, b.jsxs)(`div`, {
                  className: `lg:col-span-5 flex flex-col items-start text-left`,
                  children: [
                    (0, b.jsx)(`span`, {
                      className: `text-[#C8A46B] text-[11px] font-semibold uppercase tracking-[0.25em] mb-4`,
                      children: `Our Core Values`,
                    }),
                    (0, b.jsxs)(`div`, {
                      className: `space-y-3`,
                      children: [
                        (0, b.jsxs)(`div`, {
                          className: `flex items-start gap-2.5`,
                          children: [
                            (0, b.jsx)(`span`, {
                              className: `text-[#C8A46B] text-2xl font-serif leading-none mt-1 select-none`,
                              children: `❝`,
                            }),
                            (0, b.jsx)(`h3`, {
                              className: `font-serif-luxury text-xl sm:text-2xl lg:text-[28px] leading-tight text-white font-light tracking-wide`,
                              children: `Real Estate Is Not Just Property,`,
                            }),
                          ],
                        }),
                        (0, b.jsxs)(`div`, {
                          className: `flex items-start gap-2.5`,
                          children: [
                            (0, b.jsx)(`span`, {
                              className: `text-[#C8A46B] text-2xl font-serif leading-none mt-1 select-none`,
                              children: `❝`,
                            }),
                            (0, b.jsx)(`h3`, {
                              className: `font-serif-luxury text-xl sm:text-2xl lg:text-[28px] leading-tight text-white font-light tracking-wide`,
                              children: `It's Long-Term Trust.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, b.jsxs)(`div`, {
                  className: `lg:col-span-7 flex flex-col gap-8 relative w-full overflow-hidden`,
                  children: [
                    (0, b.jsx)(`div`, {
                      className: `overflow-hidden w-full px-1 py-4`,
                      children: (0, b.jsx)(`div`, {
                        className: `flex transition-transform duration-700 ease-in-out`,
                        style: { transform: `translateX(-${(100 / s) * r}%)` },
                        children: l.map((e, t) =>
                          (0, b.jsx)(
                            `div`,
                            {
                              className: `w-full md:w-1/2 flex-shrink-0 px-3`,
                              children: (0, b.jsxs)(`div`, {
                                className: `flex flex-col items-center text-center p-8 rounded-2xl border transition-all duration-500 h-full ${(a ? t === r : t === r || t === r + 1) ? `bg-[#05070a]/60 border-[#C8A46B]/25 shadow-[0_15px_30px_rgba(5,7,10,0.4)] scale-100 opacity-100` : `bg-[#05070a]/30 border-transparent scale-95 opacity-40 pointer-events-none`} hover:border-[#C8A46B]/50 hover:bg-[#05070a]/85 group`,
                                children: [
                                  (0, b.jsx)(`div`, {
                                    className: `w-14 h-14 rounded-xl border border-[#C8A46B]/30 bg-[#05070a]/50 flex items-center justify-center text-[#C8A46B] shadow-[0_4px_12px_rgba(200,164,107,0.05)] group-hover:border-[#C8A46B] group-hover:shadow-[0_0_15px_rgba(200,164,107,0.25)] transition-all duration-500`,
                                    children: e.icon,
                                  }),
                                  (0, b.jsx)(`h4`, {
                                    className: `font-sans text-xs sm:text-sm font-semibold text-white tracking-wider uppercase mt-6 transition-colors duration-300 group-hover:text-[#C8A46B]`,
                                    children: e.title,
                                  }),
                                  (0, b.jsx)(`p`, {
                                    className: `text-[13px] sm:text-[14px] text-slate-400 font-light mt-3 leading-relaxed max-w-[240px] mx-auto`,
                                    children: e.description,
                                  }),
                                ],
                              }),
                            },
                            t,
                          ),
                        ),
                      }),
                    }),
                    (0, b.jsx)(`div`, {
                      className: `flex items-center justify-center gap-3 mt-2`,
                      children: Array.from({ length: c }).map((e, t) =>
                        (0, b.jsx)(
                          `button`,
                          {
                            onClick: () => i(t),
                            className: `h-[3px] transition-all duration-500 cursor-pointer ${r === t ? `w-8 bg-[#C8A46B]` : `w-4 bg-[#C8A46B]/20 hover:bg-[#C8A46B]/40`}`,
                            "aria-label": `Go to slide ${t + 1}`,
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
W.registerPlugin(Q);
function zu(e, t = 2e3, n = !1) {
  let [r, i] = (0, _.useState)(0);
  return (
    (0, _.useEffect)(() => {
      if (!n) return;
      let r = null,
        a = (n) => {
          r ||= n;
          let o = Math.min((n - r) / t, 1);
          (i(Math.floor(o * e)), o < 1 && requestAnimationFrame(a));
        };
      requestAnimationFrame(a);
    }, [n, e, t]),
    r
  );
}
var Bu = [
  { value: 500, suffix: `+`, label: `Happy Clients` },
  { value: 2500, prefix: `₹`, suffix: `Cr+`, label: `Total Transaction Value` },
  { value: 25, suffix: `+`, label: `Premium Projects` },
  { value: 10, suffix: `+`, label: `Years of Experience` },
  { value: 2, suffix: ``, label: `Successful Brands` },
  { value: 1, suffix: ``, label: `Purpose Building Trust` },
];
function Vu({ stat: e, animate: t, index: n }) {
  let r = zu(e.value, 1800, t);
  return (0, b.jsxs)(`div`, {
    className: `flex flex-col items-center text-center group w-full px-2 sm:px-4 ${`border-[#C8A46B]/15 ` + (n % 2 == 0 ? `border-r ` : `border-r-0 `) + (n % 3 == 2 ? `sm:border-r-0 ` : `sm:border-r `) + (n === 5 ? `lg:border-r-0` : `lg:border-r`)}`,
    children: [
      (0, b.jsxs)(`span`, {
        className: `font-serif-luxury text-[36px] sm:text-4xl lg:text-[42px] font-light text-[#C8A46B] leading-none tracking-tight`,
        children: [e.prefix || ``, r.toLocaleString(), e.suffix],
      }),
      (0, b.jsx)(`span`, {
        className: `text-[12px] sm:text-[13px] text-[#6B6560] font-medium mt-2 tracking-[0.1em] leading-normal uppercase`,
        children: e.label,
      }),
    ],
  });
}
function Hu() {
  let e = (0, _.useRef)(null),
    t = (0, _.useRef)(null),
    [n, r] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      if (window.innerWidth < 768) {
        r(!0);
        return;
      }
      let n = W.context(() => {
        W.fromTo(
          t.current?.children ?? [],
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: `power3.out`,
            scrollTrigger: {
              trigger: t.current,
              start: `top 82%`,
              toggleActions: `play none none reverse`,
              onEnter: () => r(!0),
            },
          },
        );
      }, e);
      return () => n.revert();
    }, []),
    (0, b.jsx)(`section`, {
      ref: e,
      id: `achievements`,
      className: `pt-16 md:pt-20 pb-4 bg-[#FAF7F2] relative overflow-hidden`,
      children: (0, b.jsxs)(`div`, {
        className: `max-w-screen-xl mx-auto px-8 md:px-16 relative z-10`,
        children: [
          (0, b.jsxs)(`div`, {
            className: `flex items-center justify-center gap-5 mb-16`,
            children: [
              (0, b.jsx)(`span`, {
                className: `w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C8A46B]`,
              }),
              (0, b.jsx)(`h2`, {
                className: `font-serif-luxury text-base md:text-xl lg:text-2xl tracking-[0.5em] text-[#C8A46B] font-medium uppercase whitespace-nowrap`,
                children: `ACHIEVEMENTS`,
              }),
              (0, b.jsx)(`span`, {
                className: `w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C8A46B]`,
              }),
            ],
          }),
          (0, b.jsx)(`div`, {
            ref: t,
            className: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-0 lg:gap-x-0`,
            children: Bu.map((e, t) =>
              (0, b.jsx)(Vu, { stat: e, animate: n, index: t }, t),
            ),
          }),
        ],
      }),
    })
  );
}
W.registerPlugin(Q);
var Uu = [
  {
    date: `MAY 12, 2024`,
    title: `Hyderabad Real Estate: A Future-Ready Market`,
    image: `images/insight_hyderabad.png`,
  },
  {
    date: `APR 25, 2024`,
    title: `Investment vs End-Use: Making the Right Choice`,
    image: `images/insight_handshake.png`,
  },
  {
    date: `APR 12, 2024`,
    title: `Why Location Will Always Be the Key`,
    image: `images/insight_location.png`,
  },
  {
    date: `APR 01, 2024`,
    title: `The Rise of Flexible Workspaces in India`,
    image: `images/insight_workspace.png`,
  },
];
function Wu() {
  let e = (0, _.useRef)(null),
    t = (0, _.useRef)(null),
    n = (0, _.useRef)(null),
    [r, i] = (0, _.useState)(0),
    [a, o] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      let e = () => o(window.innerWidth < 768);
      return (
        e(),
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      );
    }, []),
    (0, _.useEffect)(() => {
      if (!a) return;
      let e = setInterval(() => {
        i((e) => (e + 1) % Uu.length);
      }, 4500);
      return () => clearInterval(e);
    }, [a]),
    (0, _.useEffect)(() => {
      if (window.innerWidth < 768) return;
      let r = W.context(() => {
        (W.fromTo(
          n.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: `power3.out`,
            scrollTrigger: {
              trigger: n.current,
              start: `top 85%`,
              toggleActions: `play none none reverse`,
            },
          },
        ),
          t.current &&
            W.fromTo(
              t.current.children,
              { opacity: 0, y: 36 },
              {
                opacity: 1,
                y: 0,
                duration: 0.95,
                stagger: 0.13,
                ease: `power3.out`,
                scrollTrigger: {
                  trigger: t.current,
                  start: `top 82%`,
                  toggleActions: `play none none reverse`,
                },
              },
            ));
      }, e);
      return () => r.revert();
    }, []),
    (0, b.jsxs)(`section`, {
      ref: e,
      id: `insights`,
      className: `pt-4 pb-16 md:pb-20 md:pt-15 bg-[#FAF7F2] relative overflow-hidden`,
      children: [
        (0, b.jsxs)(`svg`, {
          className: `absolute left-0 top-0 h-full w-[38%] opacity-[0.50] pointer-events-none z-0`,
          viewBox: `0 0 400 800`,
          preserveAspectRatio: `none`,
          fill: `none`,
          children: [
            (0, b.jsx)(`line`, {
              x1: `0`,
              y1: `0`,
              x2: `400`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `1.8`,
            }),
            (0, b.jsx)(`line`, {
              x1: `-30`,
              y1: `0`,
              x2: `370`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `1.5`,
            }),
            (0, b.jsx)(`line`, {
              x1: `-60`,
              y1: `0`,
              x2: `340`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `1.3`,
            }),
            (0, b.jsx)(`line`, {
              x1: `-90`,
              y1: `0`,
              x2: `310`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `1.1`,
            }),
            (0, b.jsx)(`line`, {
              x1: `-120`,
              y1: `0`,
              x2: `280`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `0.9`,
            }),
            (0, b.jsx)(`line`, {
              x1: `-150`,
              y1: `0`,
              x2: `250`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `0.7`,
            }),
            (0, b.jsx)(`line`, {
              x1: `-180`,
              y1: `0`,
              x2: `220`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `0.6`,
            }),
            (0, b.jsx)(`line`, {
              x1: `-210`,
              y1: `0`,
              x2: `190`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
            }),
          ],
        }),
        (0, b.jsxs)(`svg`, {
          className: `absolute right-0 top-0 h-full w-[38%] opacity-[0.50] pointer-events-none z-0`,
          viewBox: `0 0 400 800`,
          preserveAspectRatio: `none`,
          fill: `none`,
          children: [
            (0, b.jsx)(`line`, {
              x1: `400`,
              y1: `0`,
              x2: `0`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `1.8`,
            }),
            (0, b.jsx)(`line`, {
              x1: `430`,
              y1: `0`,
              x2: `30`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `1.5`,
            }),
            (0, b.jsx)(`line`, {
              x1: `460`,
              y1: `0`,
              x2: `60`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `1.3`,
            }),
            (0, b.jsx)(`line`, {
              x1: `490`,
              y1: `0`,
              x2: `90`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `1.1`,
            }),
            (0, b.jsx)(`line`, {
              x1: `520`,
              y1: `0`,
              x2: `120`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `0.9`,
            }),
            (0, b.jsx)(`line`, {
              x1: `550`,
              y1: `0`,
              x2: `150`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `0.7`,
            }),
            (0, b.jsx)(`line`, {
              x1: `580`,
              y1: `0`,
              x2: `180`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `0.6`,
            }),
            (0, b.jsx)(`line`, {
              x1: `610`,
              y1: `0`,
              x2: `210`,
              y2: `800`,
              stroke: `#C8A46B`,
              strokeWidth: `0.5`,
            }),
          ],
        }),
        (0, b.jsx)(`div`, {
          className: `max-w-8xl mx-auto px-6 md:px-12 relative z-10`,
          children: (0, b.jsxs)(`div`, {
            className: `relative z-10 w-[calc(100%+48px)] mx-[-24px] md:w-full md:mx-0 bg-[#0d1120] rounded-none md:rounded-3xl overflow-hidden px-6 md:px-10 pt-8 pb-10 border-y md:border border-x-0 md:border-x border-[#C8A46B]/25 shadow-[0_0_50px_rgba(200,164,107,0.12),0_24px_64px_rgba(5,7,10,0.55)]`,
            children: [
              (0, b.jsx)(`div`, {
                className: `absolute inset-0 bg-luxury-grid pointer-events-none z-0`,
              }),
              (0, b.jsx)(`div`, {
                className: `absolute inset-0 bg-luxury-glow pointer-events-none z-0`,
              }),
              (0, b.jsxs)(`div`, {
                ref: n,
                className: `relative z-10 flex items-center justify-between mb-8`,
                children: [
                  (0, b.jsx)(`span`, {
                    className: `text-[#C8A46B] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em]`,
                    children: `Insights & Perspectives`,
                  }),
                  (0, b.jsxs)(`button`, {
                    className: `text-white/60 hover:text-[#C8A46B] text-[11px] font-light tracking-wide transition-colors duration-300 flex items-center gap-1.5 group`,
                    children: [
                      `View all insights`,
                      (0, b.jsx)(`svg`, {
                        className: `w-4 h-4 group-hover:translate-x-1 transition-transform duration-300`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `1.5`,
                        viewBox: `0 0 24 24`,
                        children: (0, b.jsx)(`path`, {
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          d: `M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)(`div`, {
                ref: t,
                className: `relative z-10 hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`,
                children: Uu.map((e, t) =>
                  (0, b.jsxs)(
                    `div`,
                    {
                      className: `group relative flex flex-col justify-end aspect-[16/11] rounded-2xl overflow-hidden border border-[#C8A46B]/25 bg-[#05070a] shadow-[0_4px_20px_rgba(200,164,107,0.08)] hover:border-[#C8A46B]/60 hover:shadow-[0_0_25px_rgba(200,164,107,0.22)] transition-all duration-500 ease-out cursor-pointer`,
                      children: [
                        (0, b.jsx)(`img`, {
                          src: e.image,
                          alt: e.title,
                          className: `absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]`,
                        }),
                        (0, b.jsx)(`div`, {
                          className: `absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10`,
                        }),
                        (0, b.jsxs)(`div`, {
                          className: `relative z-20 p-4 sm:p-5 flex flex-col justify-between h-full`,
                          children: [
                            (0, b.jsx)(`div`, {}),
                            (0, b.jsxs)(`div`, {
                              className: `flex flex-col gap-2.5`,
                              children: [
                                (0, b.jsx)(`span`, {
                                  className: `self-start px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[#C8A46B] text-[9px] font-semibold tracking-[0.2em] uppercase`,
                                  children: e.date,
                                }),
                                (0, b.jsxs)(`div`, {
                                  className: `flex items-end justify-between gap-3`,
                                  children: [
                                    (0, b.jsx)(`h3`, {
                                      className: `font-serif-luxury text-white text-xs sm:text-[13px] md:text-[14px] leading-snug font-light tracking-wide group-hover:text-[#C8A46B] transition-colors duration-300`,
                                      children: e.title,
                                    }),
                                    (0, b.jsx)(`div`, {
                                      className: `flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C8A46B]/80 flex items-center justify-center bg-black/50 text-[#C8A46B] group-hover:bg-[#C8A46B] group-hover:text-white transition-all duration-300`,
                                      children: (0, b.jsx)(`svg`, {
                                        className: `w-3 h-3 sm:w-3.5 sm:h-3.5`,
                                        fill: `none`,
                                        stroke: `currentColor`,
                                        strokeWidth: `2`,
                                        viewBox: `0 0 24 24`,
                                        children: (0, b.jsx)(`path`, {
                                          strokeLinecap: `round`,
                                          strokeLinejoin: `round`,
                                          d: `M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
              (0, b.jsxs)(`div`, {
                className: `md:hidden flex flex-col items-center relative z-10 w-full`,
                children: [
                  (0, b.jsx)(`div`, {
                    className: `w-full overflow-hidden relative px-1 py-2`,
                    children: (0, b.jsx)(`div`, {
                      className: `flex transition-transform duration-500 ease-in-out`,
                      style: { transform: `translateX(-${r * 100}%)` },
                      children: Uu.map((e, t) =>
                        (0, b.jsx)(
                          `div`,
                          {
                            className: `w-full shrink-0 px-2`,
                            children: (0, b.jsxs)(`div`, {
                              className: `group relative flex flex-col justify-end aspect-[16/11] rounded-2xl overflow-hidden border border-[#C8A46B]/25 bg-[#05070a] shadow-[0_4px_20px_rgba(200,164,107,0.08)] cursor-pointer`,
                              children: [
                                (0, b.jsx)(`img`, {
                                  src: e.image,
                                  alt: e.title,
                                  className: `absolute inset-0 w-full h-full object-cover`,
                                }),
                                (0, b.jsx)(`div`, {
                                  className: `absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10`,
                                }),
                                (0, b.jsxs)(`div`, {
                                  className: `relative z-20 p-5 flex flex-col justify-between h-full`,
                                  children: [
                                    (0, b.jsx)(`div`, {}),
                                    (0, b.jsxs)(`div`, {
                                      className: `flex flex-col gap-2.5`,
                                      children: [
                                        (0, b.jsx)(`span`, {
                                          className: `self-start px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[#C8A46B] text-[9px] font-semibold tracking-[0.2em] uppercase`,
                                          children: e.date,
                                        }),
                                        (0, b.jsxs)(`div`, {
                                          className: `flex items-end justify-between gap-3`,
                                          children: [
                                            (0, b.jsx)(`h3`, {
                                              className: `font-serif-luxury text-white text-sm sm:text-base leading-snug font-light tracking-wide`,
                                              children: e.title,
                                            }),
                                            (0, b.jsx)(`div`, {
                                              className: `flex-shrink-0 w-8 h-8 rounded-full border border-[#C8A46B]/80 flex items-center justify-center bg-black/50 text-[#C8A46B]`,
                                              children: (0, b.jsx)(`svg`, {
                                                className: `w-3.5 h-3.5`,
                                                fill: `none`,
                                                stroke: `currentColor`,
                                                strokeWidth: `2`,
                                                viewBox: `0 0 24 24`,
                                                children: (0, b.jsx)(`path`, {
                                                  strokeLinecap: `round`,
                                                  strokeLinejoin: `round`,
                                                  d: `M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3`,
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  }),
                  (0, b.jsx)(`div`, {
                    className: `flex gap-2.5 mt-6`,
                    children: Uu.map((e, t) =>
                      (0, b.jsx)(
                        `button`,
                        {
                          onClick: () => i(t),
                          className: `h-[3px] transition-all duration-500 cursor-pointer ${r === t ? `w-8 bg-[#C8A46B]` : `w-4 bg-[#C8A46B]/20 hover:bg-[#C8A46B]/40`}`,
                          "aria-label": `Go to slide ${t + 1}`,
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
W.registerPlugin(Q);
var Gu = [
  {
    name: `Rohan Verma`,
    role: `Entrepreneur, Hyderabad`,
    rating: 5,
    image: `images/vspaces_interior.png`,
    quote: `V Spaces made our search for the perfect co-working space seamless. Payal and her team offered professional, supportive guidance throughout the journey. They understood our business needs and exceeded expectations. I strongly recommend V Spaces to anyone seeking flexible and reliable workspace solutions. Thank you for your exceptional service.`,
  },
  {
    name: `Priya Nair`,
    role: `Director, Bluewave Ventures`,
    rating: 5,
    image: `images/veva_realty_interior.png`,
    quote: `Working with Veva Realty was an absolute pleasure. Payal’s insight into the Hyderabad market is unmatched. She guided us through our commercial investment with complete transparency and helped us secure a property that far exceeded our initial brief. A truly trust-driven real estate experience.`,
  },
  {
    name: `Arjun Mehta`,
    role: `Co-Founder, Apex Capital`,
    rating: 5,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXoLS0kH4TGRTOp9fY8T1Kv7d-phfxOxRbA&s`,
    quote: `Payal Kar Dutta is not just a real estate advisor — she is a strategic partner. Her meticulous approach to understanding our portfolio goals and her vast network made the entire acquisition process effortless. Veva Realty sets the gold standard for luxury real estate in South India.`,
  },
];
function Ku({ count: e }) {
  return (0, b.jsx)(`div`, {
    className: `flex items-center gap-1`,
    children: Array.from({ length: e }).map((e, t) =>
      (0, b.jsx)(
        `svg`,
        {
          className: `w-4 h-4 text-[#C8A46B]`,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          children: (0, b.jsx)(`path`, {
            d: `M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.95 2.678c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z`,
          }),
        },
        t,
      ),
    ),
  });
}
function qu() {
  let e = (0, _.useRef)(null),
    t = (0, _.useRef)(null),
    n = (0, _.useRef)(null),
    [r, i] = (0, _.useState)(0),
    [a, o] = (0, _.useState)(!1),
    s = (e) => {
      e !== r &&
        (o(!0),
        setTimeout(() => {
          (i(e), o(!1));
        }, 350));
    };
  ((0, _.useEffect)(() => {
    let e = setInterval(() => {
      s((r + 1) % Gu.length);
    }, 4500);
    return () => clearInterval(e);
  }, [r]),
    (0, _.useEffect)(() => {
      if (window.innerWidth < 768) return;
      let r = W.context(() => {
        (W.fromTo(
          t.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: `power3.out`,
            scrollTrigger: {
              trigger: e.current,
              start: `top 82%`,
              toggleActions: `play none none reverse`,
            },
          },
        ),
          W.fromTo(
            n.current,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 1.1,
              ease: `power3.out`,
              scrollTrigger: {
                trigger: e.current,
                start: `top 82%`,
                toggleActions: `play none none reverse`,
              },
            },
          ));
      }, e);
      return () => r.revert();
    }, []));
  let c = Gu[r];
  return (0, b.jsxs)(`section`, {
    ref: e,
    id: `testimonials`,
    className: `py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden`,
    children: [
      (0, b.jsx)(`div`, {
        className: `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A46B]/4 rounded-full blur-[120px] pointer-events-none`,
      }),
      (0, b.jsx)(`div`, {
        className: `max-w-screen-xl mx-auto px-8 md:px-16 relative z-10`,
        children: (0, b.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`,
          children: [
            (0, b.jsx)(`div`, {
              ref: t,
              className: `hidden lg:flex lg:col-span-4 justify-center lg:justify-start`,
              children: (0, b.jsxs)(`div`, {
                className: `relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(28,25,23,0.14)] border border-[#C8A46B]/15`,
                children: [
                  (0, b.jsx)(
                    `img`,
                    {
                      src: c.image,
                      alt: c.name,
                      className: `w-full h-full object-cover transition-opacity duration-500 ${a ? `opacity-0` : `opacity-100`}`,
                    },
                    c.image,
                  ),
                  (0, b.jsx)(`div`, {
                    className: `absolute inset-0 bg-gradient-to-t from-[#1E1C1A]/50 via-transparent to-transparent pointer-events-none`,
                  }),
                ],
              }),
            }),
            (0, b.jsxs)(`div`, {
              ref: n,
              className: `lg:col-span-8 flex flex-col gap-6`,
              children: [
                (0, b.jsx)(`span`, {
                  className: `text-[#C8A46B] text-[11px] font-semibold uppercase tracking-[0.3em]`,
                  children: `Testimonials`,
                }),
                (0, b.jsx)(`h2`, {
                  className: `font-serif-luxury text-3xl sm:text-4xl lg:text-[48px] text-[#1E1C1A] font-light leading-tight tracking-wide`,
                  children: `Voices of Satisfied Clients`,
                }),
                (0, b.jsx)(
                  `p`,
                  {
                    className: `text-[#4A4744] font-light text-base sm:text-[16px] lg:text-[17px] leading-relaxed transition-opacity duration-500 ${a ? `opacity-0` : `opacity-100`}`,
                    children: c.quote,
                  },
                  r,
                ),
                (0, b.jsx)(`div`, {
                  className: `w-full h-[1px] bg-[#1E1C1A]/10`,
                }),
                (0, b.jsxs)(
                  `div`,
                  {
                    className: `flex items-center justify-between transition-opacity duration-500 ${a ? `opacity-0` : `opacity-100`}`,
                    children: [
                      (0, b.jsxs)(`div`, {
                        children: [
                          (0, b.jsx)(`span`, {
                            className: `text-[#1E1C1A] text-sm font-semibold`,
                            children: c.name,
                          }),
                          (0, b.jsx)(`p`, {
                            className: `text-[#6B6560] text-[11px] font-light mt-0.5`,
                            children: c.role,
                          }),
                        ],
                      }),
                      (0, b.jsx)(Ku, { count: c.rating }),
                    ],
                  },
                  `meta-${r}`,
                ),
                (0, b.jsx)(`div`, {
                  className: `flex items-center gap-2.5 mt-2`,
                  children: Gu.map((e, t) =>
                    (0, b.jsx)(
                      `button`,
                      {
                        onClick: () => s(t),
                        className: `h-[3px] rounded-full transition-all duration-500 cursor-pointer ${r === t ? `w-8 bg-[#C8A46B]` : `w-5 bg-[#C8A46B]/25 hover:bg-[#C8A46B]/50`}`,
                        "aria-label": `Testimonial ${t + 1}`,
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
W.registerPlugin(Q);
var Ju = [
  `Confidential Discussions`,
  `Professional Guidance`,
  `Collaboration Opportunities`,
];
function Yu() {
  let e = (0, _.useRef)(null),
    t = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      if (window.innerWidth < 768) return;
      let n = W.context(() => {
        W.fromTo(
          t.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: `power3.out`,
            scrollTrigger: {
              trigger: t.current,
              start: `top 82%`,
              toggleActions: `play none none reverse`,
            },
          },
        );
      }, e);
      return () => n.revert();
    }, []),
    (0, b.jsx)(`section`, {
      ref: e,
      id: `contact`,
      className: `py-12 bg-[#FAF7F2] relative overflow-hidden`,
      children: (0, b.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-6 md:px-12 relative z-10`,
        children: (0, b.jsxs)(`div`, {
          ref: t,
          className: `relative overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[220px] w-[calc(100%+48px)] mx-[-24px] md:w-full md:mx-0 rounded-none md:rounded-3xl`,
          style: {
            background: `linear-gradient(135deg, #1a1208 0%, #2a1f0e 40%, #1e1810 70%, #0f0b07 100%)`,
          },
          children: [
            (0, b.jsxs)(`svg`, {
              className: `absolute inset-0 w-full h-full pointer-events-none opacity-25`,
              viewBox: `0 0 900 260`,
              preserveAspectRatio: `xMidYMid slice`,
              fill: `none`,
              children: [
                (0, b.jsx)(`path`, {
                  d: `M600 -40 Q750 80 900 20`,
                  stroke: `#C8A46B`,
                  strokeWidth: `1.2`,
                }),
                (0, b.jsx)(`path`, {
                  d: `M580 -20 Q740 100 900 50`,
                  stroke: `#C8A46B`,
                  strokeWidth: `0.7`,
                  strokeDasharray: `4 4`,
                }),
                (0, b.jsx)(`path`, {
                  d: `M640 0 Q800 120 920 60`,
                  stroke: `#C8A46B`,
                  strokeWidth: `0.5`,
                }),
                (0, b.jsx)(`path`, {
                  d: `M450 200 Q600 140 750 220`,
                  stroke: `#C8A46B`,
                  strokeWidth: `0.8`,
                  strokeDasharray: `3 3`,
                }),
                (0, b.jsx)(`path`, {
                  d: `M0 180 Q120 120 200 200`,
                  stroke: `#C8A46B`,
                  strokeWidth: `0.6`,
                  strokeDasharray: `4 4`,
                }),
              ],
            }),
            (0, b.jsx)(`div`, {
              className: `absolute inset-0 rounded-none md:rounded-3xl border-y md:border border-x-0 md:border-x border-[#C8A46B]/20 pointer-events-none`,
            }),
            (0, b.jsx)(`div`, {
              className: `relative lg:w-[220px] xl:w-[260px] flex-shrink-0 flex items-end justify-center overflow-hidden`,
              children: (0, b.jsx)(`img`, {
                src: `images/about_portrait.png`,
                alt: `Payal Kar Dutta`,
                className: `relative z-10 h-[220px] lg:h-[260px] w-auto object-cover object-top`,
                style: { filter: `brightness(0.92) contrast(1.05)` },
              }),
            }),
            (0, b.jsxs)(`div`, {
              className: `flex-1 flex flex-col justify-center px-8 md:px-10 py-10 lg:py-0 gap-5`,
              children: [
                (0, b.jsxs)(`div`, {
                  children: [
                    (0, b.jsx)(`h2`, {
                      className: `font-serif-luxury text-white text-2xl sm:text-3xl lg:text-[32px] font-light leading-snug tracking-wide`,
                      children: `Book a Strategic Consultation`,
                    }),
                    (0, b.jsxs)(`p`, {
                      className: `text-[#C8A46B]/70 text-sm font-light mt-2 leading-relaxed max-w-[340px]`,
                      children: [
                        `Let's discuss your real estate goals`,
                        (0, b.jsx)(`br`, { className: `hidden sm:block` }),
                        ` and explore opportunities.`,
                      ],
                    }),
                  ],
                }),
                (0, b.jsx)(`ul`, {
                  className: `flex flex-col gap-2.5`,
                  children: Ju.map((e, t) =>
                    (0, b.jsxs)(
                      `li`,
                      {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, b.jsx)(`span`, {
                            className: `w-5 h-5 flex-shrink-0 rounded-full border border-[#C8A46B]/50 flex items-center justify-center`,
                            children: (0, b.jsx)(`svg`, {
                              className: `w-2.5 h-2.5 text-[#C8A46B]`,
                              viewBox: `0 0 12 12`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `2`,
                              children: (0, b.jsx)(`path`, {
                                d: `M2 6l3 3 5-5`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                              }),
                            }),
                          }),
                          (0, b.jsx)(`span`, {
                            className: `text-white/80 text-[13px] font-light`,
                            children: e,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            (0, b.jsx)(`div`, {
              className: `flex-shrink-0 flex items-center justify-center px-6 lg:px-10 py-8 lg:py-0 w-full lg:w-auto`,
              children: (0, b.jsxs)(`div`, {
                className: `w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[240px] rounded-xl px-7 py-8 flex flex-col items-center text-center gap-4 border border-[#C8A46B]/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)]`,
                style: {
                  background: `linear-gradient(145deg, #1c1507 0%, #241a09 60%, #0f0b06 100%)`,
                },
                children: [
                  (0, b.jsx)(`div`, {
                    className: `w-12 h-12 rounded-xl border border-[#C8A46B]/30 bg-[#C8A46B]/10 flex items-center justify-center`,
                    children: (0, b.jsxs)(`svg`, {
                      className: `w-6 h-6 text-[#C8A46B]`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.5`,
                      viewBox: `0 0 24 24`,
                      children: [
                        (0, b.jsx)(`rect`, {
                          x: `3`,
                          y: `4`,
                          width: `18`,
                          height: `18`,
                          rx: `2`,
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                        }),
                        (0, b.jsx)(`path`, {
                          d: `M16 2v4M8 2v4M3 10h18`,
                          strokeLinecap: `round`,
                        }),
                        (0, b.jsx)(`path`, {
                          d: `M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01`,
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          strokeWidth: `2`,
                        }),
                      ],
                    }),
                  }),
                  (0, b.jsxs)(`div`, {
                    children: [
                      (0, b.jsx)(`h3`, {
                        className: `text-white font-semibold text-[15px] leading-snug`,
                        children: `Schedule a Meeting`,
                      }),
                      (0, b.jsx)(`p`, {
                        className: `text-[#C8A46B]/60 text-[11px] font-light mt-1`,
                        children: `30 min \xA0•\xA0 Google Meet / Zoom`,
                      }),
                    ],
                  }),
                  (0, b.jsxs)(`a`, {
                    href: `mailto:payal@vevarealty.com`,
                    className: `mt-1 w-full py-3 bg-gradient-to-r from-[#B18D55] via-[#C8A46B] to-[#B18D55] text-[#0f0b06] font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_18px_rgba(200,164,107,0.4)] hover:scale-[1.02] transition-all duration-300`,
                    children: [
                      `Book Now`,
                      (0, b.jsx)(`svg`, {
                        className: `w-3.5 h-3.5`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2.5`,
                        viewBox: `0 0 24 24`,
                        children: (0, b.jsx)(`path`, {
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          d: `M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    })
  );
}
var Xu = [
    { label: `About`, href: `#about` },
    { label: `Expertise`, href: `#expertise` },
    { label: `Ventures`, href: `#ventures` },
    { label: `Achievements`, href: `#achievements` },
    { label: `Insights`, href: `#insights` },
    { label: `Contact`, href: `#contact` },
  ],
  Zu = [
    { label: `Veva Realty`, href: `#ventures` },
    { label: `VSpaces by Veva`, href: `#ventures` },
  ],
  Qu = [
    {
      icon: (0, b.jsx)(`svg`, {
        className: `w-3.5 h-3.5 text-[#C8A46B] flex-shrink-0 mt-0.5`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.8`,
        viewBox: `0 0 24 24`,
        children: (0, b.jsx)(`path`, {
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          d: `M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z`,
        }),
      }),
      text: `000`,
    },
    {
      icon: (0, b.jsx)(`svg`, {
        className: `w-3.5 h-3.5 text-[#C8A46B] flex-shrink-0 mt-0.5`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.8`,
        viewBox: `0 0 24 24`,
        children: (0, b.jsx)(`path`, {
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          d: `M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75`,
        }),
      }),
      text: `hello@vevarealty.com`,
    },
    {
      icon: (0, b.jsxs)(`svg`, {
        className: `w-3.5 h-3.5 text-[#C8A46B] flex-shrink-0 mt-0.5`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.8`,
        viewBox: `0 0 24 24`,
        children: [
          (0, b.jsx)(`path`, {
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            d: `M15 10.5a3 3 0 11-6 0 3 3 0 016 0z`,
          }),
          (0, b.jsx)(`path`, {
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            d: `M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z`,
          }),
        ],
      }),
      text: `Hyderabad, India`,
    },
  ],
  $u = [
    {
      label: `LinkedIn`,
      href: `#`,
      icon: (0, b.jsx)(`svg`, {
        className: `w-4 h-4`,
        fill: `currentColor`,
        viewBox: `0 0 24 24`,
        children: (0, b.jsx)(`path`, {
          d: `M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`,
        }),
      }),
    },
    {
      label: `Instagram`,
      href: `https://www.instagram.com/payalkdutta/`,
      icon: (0, b.jsx)(`svg`, {
        className: `w-4 h-4`,
        fill: `currentColor`,
        viewBox: `0 0 24 24`,
        children: (0, b.jsx)(`path`, {
          d: `M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z`,
        }),
      }),
    },
    {
      label: `YouTube`,
      href: `https://youtu.be/tg1I0x12IwM?si=gaW3hIdJOmQ5B_OG`,
      icon: (0, b.jsx)(`svg`, {
        className: `w-4 h-4`,
        fill: `currentColor`,
        viewBox: `0 0 24 24`,
        children: (0, b.jsx)(`path`, {
          d: `M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z`,
        }),
      }),
    },
    {
      label: `X`,
      href: `#`,
      icon: (0, b.jsx)(`svg`, {
        className: `w-4 h-4`,
        fill: `currentColor`,
        viewBox: `0 0 24 24`,
        children: (0, b.jsx)(`path`, {
          d: `M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z`,
        }),
      }),
    },
    {
      label: `Facebook`,
      href: `#`,
      icon: (0, b.jsx)(`svg`, {
        className: `w-4 h-4`,
        fill: `currentColor`,
        viewBox: `0 0 24 24`,
        children: (0, b.jsx)(`path`, {
          d: `M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z`,
        }),
      }),
    },
  ];
function ed() {
  let [e, t] = (0, _.useState)(``);
  return (0, b.jsxs)(`footer`, {
    className: `bg-[#080603] border-t border-[#C8A46B]/10 relative overflow-hidden`,
    children: [
      (0, b.jsx)(`div`, {
        className: `absolute top-0 right-0 w-[400px] h-[200px] bg-[#C8A46B]/4 rounded-full blur-[100px] pointer-events-none`,
      }),
      (0, b.jsxs)(`div`, {
        className: `max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10`,
        children: [
          (0, b.jsxs)(`div`, {
            className: `col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col gap-4`,
            children: [
              (0, b.jsxs)(`div`, {
                children: [
                  (0, b.jsx)(`div`, {
                    className: `font-serif-luxury text-white text-xl leading-none tracking-widest font-semibold`,
                    children: `PAYAL`,
                  }),
                  (0, b.jsx)(`div`, {
                    className: `font-serif-luxury text-white text-xl leading-none tracking-widest font-semibold`,
                    children: `KAR DUTTA`,
                  }),
                ],
              }),
              (0, b.jsxs)(`p`, {
                className: `text-slate-500 text-[11px] font-light leading-relaxed max-w-[180px]`,
                children: [
                  `Founder & CEO of Veva Realty.`,
                  (0, b.jsx)(`br`, {}),
                  `Building trust-driven real estate experiences.`,
                ],
              }),
              (0, b.jsx)(`div`, {
                className: `flex items-center gap-3 mt-1`,
                children: $u.map((e) =>
                  (0, b.jsx)(
                    `a`,
                    {
                      href: e.href,
                      "aria-label": e.label,
                      className: `w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#C8A46B] hover:border-[#C8A46B]/40 transition-all duration-300`,
                      children: e.icon,
                    },
                    e.label,
                  ),
                ),
              }),
            ],
          }),
          (0, b.jsxs)(`div`, {
            className: `col-span-1 flex flex-col gap-4`,
            children: [
              (0, b.jsx)(`span`, {
                className: `text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8A46B]`,
                children: `Quick Links`,
              }),
              (0, b.jsx)(`ul`, {
                className: `flex flex-col gap-2.5`,
                children: Xu.map((e) =>
                  (0, b.jsx)(
                    `li`,
                    {
                      children: (0, b.jsx)(`a`, {
                        href: e.href,
                        className: `text-slate-400 text-[12px] font-light hover:text-[#C8A46B] transition-colors duration-200`,
                        children: e.label,
                      }),
                    },
                    e.label,
                  ),
                ),
              }),
            ],
          }),
          (0, b.jsxs)(`div`, {
            className: `col-span-1 flex flex-col gap-8`,
            children: [
              (0, b.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [
                  (0, b.jsx)(`span`, {
                    className: `text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8A46B]`,
                    children: `Ventures`,
                  }),
                  (0, b.jsx)(`ul`, {
                    className: `flex flex-col gap-2.5`,
                    children: Zu.map((e) =>
                      (0, b.jsx)(
                        `li`,
                        {
                          children: (0, b.jsx)(`a`, {
                            href: e.href,
                            className: `text-slate-400 text-[12px] font-light hover:text-[#C8A46B] transition-colors duration-200`,
                            children: e.label,
                          }),
                        },
                        e.label,
                      ),
                    ),
                  }),
                ],
              }),
              (0, b.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [
                  (0, b.jsx)(`span`, {
                    className: `text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8A46B]`,
                    children: `Contact`,
                  }),
                  (0, b.jsx)(`ul`, {
                    className: `flex flex-col gap-3`,
                    children: Qu.map((e, t) =>
                      (0, b.jsxs)(
                        `li`,
                        {
                          className: `flex items-start gap-2.5`,
                          children: [
                            e.icon,
                            (0, b.jsx)(`span`, {
                              className: `text-slate-400 text-[12px] font-light leading-snug`,
                              children: e.text,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          (0, b.jsxs)(`div`, {
            className: `col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col gap-4`,
            children: [
              (0, b.jsx)(`span`, {
                className: `text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8A46B]`,
                children: `Stay Connected`,
              }),
              (0, b.jsx)(`p`, {
                className: `text-slate-500 text-[11px] font-light leading-relaxed max-w-[200px]`,
                children: `Get insights on real estate, leadership & opportunities.`,
              }),
              (0, b.jsxs)(`form`, {
                onSubmit: (e) => {
                  (e.preventDefault(), t(``));
                },
                className: `flex items-center mt-1 rounded-lg overflow-hidden border border-white/10 focus-within:border-[#C8A46B]/40 transition-colors duration-300`,
                children: [
                  (0, b.jsx)(`input`, {
                    type: `email`,
                    value: e,
                    onChange: (e) => t(e.target.value),
                    placeholder: `Enter your email`,
                    required: !0,
                    className: `flex-1 bg-[#0f0d09] text-white text-[11px] px-3 py-2.5 placeholder-slate-600 focus:outline-none`,
                  }),
                  (0, b.jsx)(`button`, {
                    type: `submit`,
                    className: `bg-[#C8A46B] hover:bg-[#B18D55] text-[#080603] px-3 py-2.5 transition-colors duration-200 flex items-center justify-center`,
                    children: (0, b.jsx)(`svg`, {
                      className: `w-3.5 h-3.5`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `2.5`,
                      viewBox: `0 0 24 24`,
                      children: (0, b.jsx)(`path`, {
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        d: `M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3`,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, b.jsx)(`div`, {
        className: `border-t border-white/5 relative z-10`,
        children: (0, b.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3`,
          children: [
            (0, b.jsx)(`p`, {
              className: `text-slate-600 text-[11px] font-light`,
              children: `© 2024 Payal Kar Dutta. All Rights Reserved.`,
            }),
            (0, b.jsxs)(`div`, {
              className: `flex items-center gap-5`,
              children: [
                (0, b.jsx)(`a`, {
                  href: `#`,
                  className: `text-slate-600 text-[11px] hover:text-[#C8A46B] transition-colors duration-200`,
                  children: `Privacy Policy`,
                }),
                (0, b.jsx)(`span`, {
                  className: `text-slate-700 text-[11px]`,
                  children: `|`,
                }),
                (0, b.jsx)(`a`, {
                  href: `#`,
                  className: `text-slate-600 text-[11px] hover:text-[#C8A46B] transition-colors duration-200`,
                  children: `Terms & Conditions`,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function td() {
  let [e, t] = (0, _.useState)(`home`);
  return (
    (0, _.useEffect)(() => {
      let e = () => {
        let e = window.scrollY + 120;
        for (let n of [
          `home`,
          `about`,
          `expertise`,
          `ventures`,
          `achievements`,
          `insights`,
          `contact`,
        ]) {
          let r = document.getElementById(n);
          if (r) {
            let i = r.offsetTop,
              a = r.offsetHeight;
            e >= i && e < i + a && t(n);
          }
        }
      };
      return (
        window.addEventListener(`scroll`, e),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, b.jsxs)(`div`, {
      className: `relative overflow-x-hidden min-h-screen bg-[#05070a] flex flex-col justify-between`,
      children: [
        (0, b.jsx)(x, {
          navLinks: [
            { name: `Home`, href: `#home` },
            { name: `About`, href: `#about` },
            { name: `Expertise`, href: `#expertise` },
            { name: `Ventures`, href: `#ventures` },
            { name: `Achievements`, href: `#achievements` },
            { name: `Insights`, href: `#insights` },
            { name: `Contact`, href: `#contact` },
          ],
          activeSection: e,
        }),
        (0, b.jsx)(sc, {}),
        (0, b.jsx)(cc, {}),
        (0, b.jsx)(lc, {}),
        (0, b.jsx)(Lu, {}),
        (0, b.jsx)(Ru, {}),
        (0, b.jsx)(Hu, {}),
        (0, b.jsx)(Wu, {}),
        (0, b.jsx)(qu, {}),
        (0, b.jsx)(Yu, {}),
        (0, b.jsx)(ed, {}),
      ],
    })
  );
}
function nd() {
  return (0, b.jsx)(td, {});
}
(0, v.createRoot)(document.getElementById(`root`)).render(
  (0, b.jsx)(_.StrictMode, { children: (0, b.jsx)(nd, {}) }),
);
