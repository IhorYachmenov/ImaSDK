! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.VASTPlayer = t() : e.VASTPlayer = t()
}(window, function() {
    return r = {}, i.m = n = [function(e, t) {
        e.exports = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    }, function(e, t) {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        e.exports = function(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }
    }, function(e, t, n) {
        var r = n(61);
        e.exports = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && r(e, t)
        }
    }, function(e, t, n) {
        var r = n(10),
            i = n(19);
        e.exports = function(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? i(e) : t
        }
    }, function(t, e) {
        function n(e) {
            return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, n(e)
        }
        t.exports = n
    }, function(e, t, n) {
        "use strict";
        var i = n(39),
            r = Object.prototype.toString;

        function o(e) {
            return "[object Array]" === r.call(e)
        }

        function a(e) {
            return void 0 === e
        }

        function s(e) {
            return null !== e && "object" == typeof e
        }

        function u(e) {
            return "[object Function]" === r.call(e)
        }

        function c(e, t) {
            if (null != e)
                if ("object" != typeof e && (e = [e]), o(e))
                    for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                else
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
        }
        e.exports = {
            isArray: o,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === r.call(e)
            },
            isBuffer: function(e) {
                return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            },
            isFormData: function(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function(e) {
                var t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
                return t
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumber: function(e) {
                return "number" == typeof e
            },
            isObject: s,
            isUndefined: a,
            isDate: function(e) {
                return "[object Date]" === r.call(e)
            },
            isFile: function(e) {
                return "[object File]" === r.call(e)
            },
            isBlob: function(e) {
                return "[object Blob]" === r.call(e)
            },
            isFunction: u,
            isStream: function(e) {
                return s(e) && u(e.pipe)
            },
            isURLSearchParams: function(e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
            },
            forEach: c,
            merge: function n() {
                var r = {};

                function e(e, t) {
                    "object" == typeof r[t] && "object" == typeof e ? r[t] = n(r[t], e) : r[t] = e
                }
                for (var t = 0, i = arguments.length; t < i; t++) c(arguments[t], e);
                return r
            },
            deepMerge: function n() {
                var r = {};

                function e(e, t) {
                    "object" == typeof r[t] && "object" == typeof e ? r[t] = n(r[t], e) : r[t] = "object" == typeof e ? n({}, e) : e
                }
                for (var t = 0, i = arguments.length; t < i; t++) c(arguments[t], e);
                return r
            },
            extend: function(n, e, r) {
                return c(e, function(e, t) {
                    n[t] = r && "function" == typeof e ? i(e, r) : e
                }), n
            },
            trim: function(e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = ["AdLoaded", "AdStarted", "AdStopped", "AdSkipped", "AdSkippableStateChange", "AdSizeChange", "AdLinearChange", "AdDurationChange", "AdExpandedChange", "AdRemainingTimeChange", "AdVolumeChange", "AdImpression", "AdVideoStart", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete", "AdClickThru", "AdInteraction", "AdUserAcceptInvitation", "AdUserMinimize", "AdUserClose", "AdPaused", "AdPlaying", "AdLog", "AdError", "MRC_UNMEASUREABLE", "MRC_VIEW"];
        r.forEach(function(e) {
            return r[e] = e
        }), Object.freeze(r), e.exports = r
    }, function(e, t, n) {
        e.exports = n(60)
    }, function(e, t) {
        function u(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    u = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(u) : Promise.resolve(u).then(r, i)
        }
        e.exports = function(s) {
            return function() {
                var e = this,
                    a = arguments;
                return new Promise(function(t, n) {
                    var r = s.apply(e, a);

                    function i(e) {
                        u(r, t, n, i, o, "next", e)
                    }

                    function o(e) {
                        u(r, t, n, i, o, "throw", e)
                    }
                    i(void 0)
                })
            }
        }
    }, function(t, e) {
        function n(e) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(e) {
                return typeof e
            } : t.exports = n = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, n(e)
        }
        t.exports = n
    }, function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "ancestorCheck", {
            enumerable: !0,
            get: function() {
                return o.ancestorCheck
            }
        }), Object.defineProperty(t, "on", {
            enumerable: !0,
            get: function() {
                return o.on
            }
        }), Object.defineProperty(t, "off", {
            enumerable: !0,
            get: function() {
                return o.off
            }
        }), Object.defineProperty(t, "once", {
            enumerable: !0,
            get: function() {
                return o.once
            }
        }), Object.defineProperty(t, "isNative", {
            enumerable: !0,
            get: function() {
                return o.isNative
            }
        }), Object.defineProperty(t, "cssHelper", {
            enumerable: !0,
            get: function() {
                return o.cssHelper
            }
        }), Object.defineProperty(t, "waitForReady", {
            enumerable: !0,
            get: function() {
                return o.waitForReady
            }
        }), Object.defineProperty(t, "createTag", {
            enumerable: !0,
            get: function() {
                return o.createTag
            }
        }), Object.defineProperty(t, "processURI", {
            enumerable: !0,
            get: function() {
                return o.processURI
            }
        }), Object.defineProperty(t, "getRndInteger", {
            enumerable: !0,
            get: function() {
                return a.getRndInteger
            }
        }), Object.defineProperty(t, "random", {
            enumerable: !0,
            get: function() {
                return a.random
            }
        }), Object.defineProperty(t, "ViewabilityObserver", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }), Object.defineProperty(t, "sleep", {
            enumerable: !0,
            get: function() {
                return u.sleep
            }
        }), Object.defineProperty(t, "get", {
            enumerable: !0,
            get: function() {
                return c.get
            }
        }), Object.defineProperty(t, "map", {
            enumerable: !0,
            get: function() {
                return c.map
            }
        }), Object.defineProperty(t, "filter", {
            enumerable: !0,
            get: function() {
                return c.filter
            }
        }), Object.defineProperty(t, "find", {
            enumerable: !0,
            get: function() {
                return c.find
            }
        }), Object.defineProperty(t, "defaults", {
            enumerable: !0,
            get: function() {
                return c.defaults
            }
        }), Object.defineProperty(t, "anyEmitted", {
            enumerable: !0,
            get: function() {
                return l.anyEmitted
            }
        }), Object.defineProperty(t, "allEmitted", {
            enumerable: !0,
            get: function() {
                return l.allEmitted
            }
        }), Object.defineProperty(t, "EventProxy", {
            enumerable: !0,
            get: function() {
                return l.EventProxy
            }
        }), Object.defineProperty(t, "wrapAsyncPromiseExecutor", {
            enumerable: !0,
            get: function() {
                return d.wrapAsyncPromiseExecutor
            }
        }), Object.defineProperty(t, "hidePromiseError", {
            enumerable: !0,
            get: function() {
                return f.hidePromiseError
            }
        }), Object.defineProperty(t, "autoplayCheck", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }), Object.defineProperty(t, "VIDEO_BAIT_DATA", {
            enumerable: !0,
            get: function() {
                return p.VIDEO_BAIT_DATA
            }
        }), t.processMacros = t.trim = void 0;
        var o = n(15),
            a = n(66),
            s = i(n(67)),
            u = n(23),
            c = n(16),
            l = n(72),
            d = n(73),
            f = n(74),
            p = r(n(75));
        t.trim = function(e) {
            return (e || "").trim()
        };
        var h = (0, o.ancestorCheck)();
        t.processMacros = function(e, t) {
            var n, r, i, o = e.replace(/\[CACHEBUSTING]/g, (0, a.getRndInteger)(1e7, 99999999).toString()).replace(/\[RANDOM]/g, Math.random().toString().slice(2, 10) + Date.now()).replace(/\[TIMESTAMP]/g, (new Date).toISOString()).replace(/\[PAGEURL]/g, encodeURIComponent(h.url)).replace(/\[PAGEHOST]/g, encodeURIComponent(h.host)).replace(/\[PAGEREFERER]/g, encodeURIComponent(h.referrer)).replace(/\[ANCESTOR]/g, encodeURIComponent(h.rr)).replace(/\[ANCESTOR_OR_PAGEHOST]/g, encodeURIComponent(h.rr || h.host));
            return t && (r = (n = t.container.getBoundingClientRect()).width, i = n.height, o = o.replace(/\[WIDTH]/g, r.toString()).replace(/\[HEIGHT]/g, i.toString())), o
        }
    }, function(e, t, n) {
        "use strict";
        var r, i = "object" == typeof Reflect ? Reflect : null,
            l = i && "function" == typeof i.apply ? i.apply : function(e, t, n) {
                return Function.prototype.apply.call(e, t, n)
            };
        r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function(e) {
            return Object.getOwnPropertyNames(e)
        };
        var o = Number.isNaN || function(e) {
            return e != e
        };

        function a() {
            a.init.call(this)
        }((e.exports = a).EventEmitter = a).prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
        var s = 10;

        function c(e) {
            if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }

        function d(e) {
            return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
        }

        function u(e, t, n, r) {
            var i, o, a, s, u;
            return c(n), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), a = o[t]), void 0 === a ? (a = o[t] = n, ++e._eventsCount) : ("function" == typeof a ? a = o[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), 0 < (i = d(e)) && a.length > i && !a.warned && (a.warned = !0, (s = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit")).name = "MaxListenersExceededWarning", s.emitter = e, s.type = t, s.count = a.length, u = s, console && console.warn && console.warn(u))), e
        }

        function f(e, t, n) {
            var r = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: n
                },
                i = function() {
                    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                }.bind(r);
            return i.listener = n, r.wrapFn = i
        }

        function p(e, t, n) {
            var r = e._events;
            if (void 0 === r) return [];
            var i = r[t];
            return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                return t
            }(i) : A(i, i.length)
        }

        function h(e) {
            var t = this._events;
            if (void 0 !== t) {
                var n = t[e];
                if ("function" == typeof n) return 1;
                if (void 0 !== n) return n.length
            }
            return 0
        }

        function A(e, t) {
            for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
            return n
        }
        Object.defineProperty(a, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return s
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                s = e
            }
        }), a.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, a.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this
        }, a.prototype.getMaxListeners = function() {
            return d(this)
        }, a.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
            var r, i = "error" === e,
                o = this._events;
            if (void 0 !== o) i = i && void 0 === o.error;
            else if (!i) return !1;
            if (i) {
                if (0 < t.length && (r = t[0]), r instanceof Error) throw r;
                var a = new Error("Unhandled error." + (r ? " (" + r.message + ")" : ""));
                throw a.context = r, a
            }
            var s = o[e];
            if (void 0 === s) return !1;
            if ("function" == typeof s) l(s, this, t);
            else
                for (var u = s.length, c = A(s, u), n = 0; n < u; ++n) l(c[n], this, t);
            return !0
        }, a.prototype.addListener = function(e, t) {
            return u(this, e, t, !1)
        }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(e, t) {
            return u(this, e, t, !0)
        }, a.prototype.once = function(e, t) {
            return c(t), this.on(e, f(this, e, t)), this
        }, a.prototype.prependOnceListener = function(e, t) {
            return c(t), this.prependListener(e, f(this, e, t)), this
        }, a.prototype.removeListener = function(e, t) {
            var n, r, i, o, a;
            if (c(t), void 0 === (r = this._events)) return this;
            if (void 0 === (n = r[e])) return this;
            if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
                for (i = -1, o = n.length - 1; 0 <= o; o--)
                    if (n[o] === t || n[o].listener === t) {
                        a = n[o].listener, i = o;
                        break
                    } if (i < 0) return this;
                0 === i ? n.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop()
                }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
            }
            return this
        }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(e) {
            var t, n = this._events;
            if (void 0 === n) return this;
            if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
            if (0 === arguments.length) {
                for (var r, i = Object.keys(n), o = 0; o < i.length; ++o) "removeListener" !== (r = i[o]) && this.removeAllListeners(r);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if ("function" == typeof(t = n[e])) this.removeListener(e, t);
            else if (void 0 !== t)
                for (o = t.length - 1; 0 <= o; o--) this.removeListener(e, t[o]);
            return this
        }, a.prototype.listeners = function(e) {
            return p(this, e, !0)
        }, a.prototype.rawListeners = function(e) {
            return p(this, e, !1)
        }, a.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
        }, a.prototype.listenerCount = h, a.prototype.eventNames = function() {
            return 0 < this._eventsCount ? r(this._events) : []
        }
    }, function(i, r, e) {
        "use strict";
        (function(t) {
            var n = e(0)(e(10));
            r.log = function() {
                var e;
                return "object" === ("undefined" == typeof console ? "undefined" : (0, n.default)(console)) && console.log && (e = console).log.apply(e, arguments)
            }, r.formatArgs = function(e) {
                if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + i.exports.humanize(this.diff), !this.useColors) return;
                var t = "color: " + this.color;
                e.splice(1, 0, t, "color: inherit");
                var n = 0,
                    r = 0;
                e[0].replace(/%[a-zA-Z%]/g, function(e) {
                    "%%" !== e && (n++, "%c" === e && (r = n))
                }), e.splice(r, 0, t)
            }, r.save = function(e) {
                try {
                    e ? r.storage.setItem("debug", e) : r.storage.removeItem("debug")
                } catch (e) {}
            }, r.load = function() {
                var e;
                try {
                    e = r.storage.getItem("debug")
                } catch (e) {}!e && void 0 !== t && "env" in t && (e = t.env.DEBUG);
                return e
            }, r.useColors = function() {
                if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, r.storage = function() {
                try {
                    return localStorage
                } catch (e) {}
            }(), r.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], i.exports = e(50)(r), i.exports.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }
        }).call(this, e(17))
    }, function(e, t, n) {
        var a = n(10);

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }
        e.exports = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== a(e) && "function" != typeof e) return {
                default: e
            };
            var t = s();
            if (t && t.has(e)) return t.get(e);
            var n, r = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e) {
                Object.prototype.hasOwnProperty.call(e, o) && ((n = i ? Object.getOwnPropertyDescriptor(e, o) : null) && (n.get || n.set) ? Object.defineProperty(r, o, n) : r[o] = e[o])
            }
            return r.default = e, t && t.set(e, r), r
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.on = l, t.off = d, t.once = function(t, n, r) {
            l(t, n, r), l(t, n, function e() {
                d(t, n, r), d(t, n, e)
            })
        }, t.cssHelper = f, t.appendScript = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "UTF-8",
                n = document.createElement("script");
            n.async = !0, n.charset = t, n.src = e, document.head.appendChild(n)
        }, t.createTag = function(e) {
            var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},
                a = document.createElement(e);
            return (t = a.classList).add.apply(t, (0, s.default)(n)), f(a, r), Object.keys(i).forEach(function(e) {
                return a.setAttribute(e, i[e])
            }), Object.keys(o).forEach(function(e) {
                return a[e] = o[e]
            }), a
        }, t.appendHTML = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                r = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                i = (new DOMParser).parseFromString(t, "text/html"),
                o = function(e) {
                    var r = [];
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    return {
                        NODES: n.map(function t(n) {
                            switch (n.nodeName) {
                                case "SCRIPT":
                                    return r.push(n), null;
                                case "#text":
                                    return e && !n.textContent.trim() ? null : n;
                                default:
                                    return n.childNodes.forEach(function(e) {
                                        return !t(e) && n.removeChild(e)
                                    }), n
                            }
                        }).filter(function(e) {
                            return null !== e
                        }),
                        SCRIPTS: r
                    }
                }.apply(void 0, [r].concat((0, s.default)(i.head.childNodes), (0, s.default)(i.body.childNodes)));
            e.append.apply(e, (0, s.default)(o.NODES)), n && (o.SCRIPTS = o.SCRIPTS.map(function(e) {
                var t = document.createElement("script");
                t.innerHTML = e.innerHTML;
                var n, r = function(e) {
                    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (e = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return c(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === n && e.constructor && (n = e.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                            }(e))) {
                            var t = 0,
                                n = function() {};
                            return {
                                s: n,
                                n: function() {
                                    return t >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[t++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: n
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var r, i, o = !0,
                        a = !1;
                    return {
                        s: function() {
                            r = e[Symbol.iterator]()
                        },
                        n: function() {
                            var e = r.next();
                            return o = e.done, e
                        },
                        e: function(e) {
                            a = !0, i = e
                        },
                        f: function() {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                    }
                }(e.getAttributeNames());
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var i = n.value;
                        t.setAttribute(i, e.getAttribute(i))
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return t
            }), e.append.apply(e, (0, s.default)(o.SCRIPTS)));
            return o.NODES
        }, t.waitForReady = p, t.isNative = function(e) {
            return "function" == typeof e && /\[native code]/.test(e.toString())
        }, t.ancestorCheck = h, t.iFrameContext = m, t.isInFocus = g, t.getElementDetails = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                viewportWidth: Math.max(document.body.clientWidth, window.innerWidth) || -1,
                viewportHeight: Math.max(document.body.clientHeight, window.innerHeight) || -1,
                elementWidth: e.clientWidth || -1,
                elementHeight: e.clientHeight || -1,
                iframeContext: m(),
                focus: g()
            }
        }, t.processURI = function(e) {
            if (!e || "string" != typeof e) return "";
            e = e.trim();
            var t = ["https:", "about:"].includes(location.protocol) ? "https:" : "http:";
            if ("https:" == t && e.startsWith("http:")) return e = "https:" + e.substring(5), a("Protocol was force updated for url: %s", e), e;
            if (e.startsWith("//")) return t + e;
            return e
        }, t.iFrameServingScenarios = void 0;
        var s = r(n(18)),
            u = r(n(29));

        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var i, o = (0, r(n(13)).default)("lib:environment"),
            a = o.extend("url");

        function l(e, t, n) {
            window.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, n)
        }

        function d(e, t, n) {
            window.removeEventListener ? e.removeEventListener(t, n) : e.detachEvent("on" + t, n)
        }

        function f(e, t) {
            for (var n = 0, r = Object.entries(t); n < r.length; n++) {
                var i = (0, u.default)(r[n], 2),
                    o = i[0],
                    a = i[1];
                e.style[o] = a
            }
        }

        function p() {
            function t() {
                return ["complete", "interactive"].includes(document.readyState)
            }
            var n = void 0 !== document.attachEvent;
            return t() ? Promise.resolve() : new Promise(function(e) {
                n ? document.attachEvent("onreadystatechange", function() {
                    return t() && e()
                }) : document.addEventListener("DOMContentLoaded", e)
            })
        }

        function h() {
            if (i) return i;
            var e = window.location.ancestorOrigins ? Array.from(window.location.ancestorOrigins) : null,
                t = null,
                n = [];
            return e && (t = e.length ? e[e.length - 1].split("//")[1] : window.location.host, e.forEach(function(e) {
                return n.push(e.replace("http://", "").replace("https://", ""))
            })), i = {
                referrer: document.referrer,
                host: window.location.host,
                url: window.location.href,
                rr: t,
                chain: n
            }
        }
        var A, v = {
            ON_PAGE: "on page",
            SAME_DOMAIN_IFRAME: "same domain iframe",
            CROSS_DOMAIN_IFRAME: "cross domain iframe"
        };

        function m() {
            if (A) return A;
            try {
                if (window.top === window) return A = v.ON_PAGE;
                for (var e = window, t = 0; e.parent !== e && t < 1e3;) {
                    if (e.parent.document.domain !== e.document.domain) return A = v.CROSS_DOMAIN_IFRAME;
                    e = e.parent, t++
                }
                return A = v.SAME_DOMAIN_IFRAME
            } catch (e) {
                return A = v.CROSS_DOMAIN_IFRAME
            }
        }

        function g() {
            return !0 !== document.hidden && (m() === v.CROSS_DOMAIN_IFRAME || (!window.document.hasFocus || window.top.document.hasFocus()))
        }
        t.iFrameServingScenarios = v, o("iFrame context: %s", m()), o("In focus: %s", g()), o("ancestor: %o", h()), o("waitForReady: checking..."), p().then(function() {
            return o("waitForReady: document is ready for interaction now")
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.set = function(e, r, t) {
            var n = function() {
                    for (var e = /[^[\].]+/g, t = [], n = e.exec(r); n; n = e.exec(r)) t.push({
                        token: n[0],
                        type: function e(t, n) {
                            switch (t.input.charAt(n)) {
                                case ".":
                                    return Object;
                                case "[":
                                    return Array;
                                case "]":
                                    return e(t, n + 1);
                                default:
                                    return null
                            }
                        }(n, n.index + n[0].length)
                    });
                    return t
                }(),
                i = n.pop(),
                o = n.reduce(function(e, t) {
                    return e[t.token] || (e[t.token] = new t.type)
                }, e);
            if (r) return o[i.token] = t;
            throw new Error("prop must be specified.")
        }, t.get = s, t.map = function(e, t, n) {
            var r = s(e, t) || [],
                i = r.length,
                o = [];
            if (!(r instanceof Array)) return o;
            for (var a = 0; a < i; a++) o.push(n.call(e, r[a], a, r));
            return o
        }, t.filter = function(e, t, n) {
            var r = s(e, t) || [],
                i = r.length,
                o = [];
            if (!(r instanceof Array)) return o;
            for (var a = 0; a < i; a++) n.call(e, r[a], a, r) && o.push(r[a]);
            return o
        }, t.find = function(e, t, n) {
            var r = s(e, t) || [],
                i = r.length;
            if (!(r instanceof Array)) return;
            for (var o = 0; o < i; o++)
                if (n.call(e, r[o], o, r)) return r[o];
            return
        }, t.defaults = function r(i, t) {
            if ([i, t].every(a)) return l.apply(t, i.filter(function(e) {
                return t.indexOf(e) < 0
            })), t;
            return Object.keys(i).reduce(function(e, t) {
                var n = [i[t], e[t]];
                return n.every(o) && r(i[t], e[t]), t in e || (e[t] = i[t]), e
            }, t || {})
        }, t.copy = d, t.extend = function() {
            return Array.prototype.slice.call(arguments).reduce(function(e, n) {
                return Object.keys(n || {}).reduce(function(e, t) {
                    return e[t] = n[t], e
                }, e)
            }, {})
        }, t.trimObject = function n(r, i) {
            if (Object(r) !== r) return r;
            return Object.keys(r).reduce(function(e, t) {
                return i && r[t] instanceof Array ? e[t] = r[t].filter(function(e) {
                    return void 0 !== e
                }).map(function(e) {
                    return n(e, !0)
                }) : i && r[t] instanceof Object ? e[t] = n(r[t], !0) : void 0 !== r[t] && (e[t] = r[t]), e
            }, {})
        };
        var c = r(n(10));

        function s(e, t) {
            return ((t || "").match(/[^[\].]+/g) || []).reduce(function(e, t) {
                return e ? e[t] : void 0
            }, e)
        }
        var l = Array.prototype.push,
            o = function(e) {
                return Object(e) === e
            },
            a = function(e) {
                return e instanceof Array
            };

        function d(e) {
            var n, t, r, i, o, a, s = "object" === (0, c.default)(arguments[1]) ? arguments[1] : null,
                u = "boolean" == typeof arguments[1] ? arguments[1] : arguments[2];
            return Object(e) !== e ? e : e instanceof Array ? (i = e, o = u, a = s || [], l.apply(a, o ? i.map(function(e) {
                return d(e, null, !0)
            }) : i), a) : (n = e, t = s, r = u, Object.keys(n).reduce(function(e, t) {
                return e[t] = r ? d(n[t], null, !0) : n[t], e
            }, t || {}))
        }
    }, function(e, t) {
        var n, r, i = e.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                n = o
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                r = a
            }
        }();
        var u, c = [],
            l = !1,
            d = -1;

        function f() {
            l && u && (l = !1, u.length ? c = u.concat(c) : d = -1, c.length && p())
        }

        function p() {
            if (!l) {
                var e = s(f);
                l = !0;
                for (var t = c.length; t;) {
                    for (u = c, c = []; ++d < t;) u && u[d].run();
                    d = -1, t = c.length
                }
                u = null, l = !1,
                    function(t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(e)
            }
        }

        function h(e, t) {
            this.fun = e, this.array = t
        }

        function A() {}
        i.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new h(e, t)), 1 !== c.length || l || s(p)
        }, h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = A, i.addListener = A, i.once = A, i.off = A, i.removeListener = A, i.removeAllListeners = A, i.emit = A, i.prependListener = A, i.prependOnceListener = A, i.listeners = function(e) {
            return []
        }, i.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    }, function(e, t, n) {
        var r = n(51),
            i = n(52),
            o = n(28),
            a = n(53);
        e.exports = function(e) {
            return r(e) || i(e) || o(e) || a()
        }
    }, function(e, t) {
        e.exports = function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(14);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.StrategyFactory = t.DEFAULT_STRATEGY = void 0;
        var o = r(n(21)),
            i = r(n(32)),
            a = r(n(35)),
            s = {
                autostart: !0,
                techniques: [i.IntersectionObserver, i.IntersectionObserverPolyfill],
                criteria: a.MRC_VIDEO
            };
        t.DEFAULT_STRATEGY = s;
        t.StrategyFactory = function(e, t, n) {
            var r = {
                    autostart: 0 < arguments.length && void 0 !== e ? e : s.autostart,
                    techniques: 1 < arguments.length && void 0 !== t ? t : s.techniques,
                    criteria: 2 < arguments.length && void 0 !== n ? n : s.criteria
                },
                i = o.validateStrategy(r);
            if (i.invalid) throw i.reasons;
            return r
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.validateStrategy = t.validateCriteria = t.validElement = t.validTechnique = void 0;
        var i = r(n(10)),
            o = r(n(22));
        t.validTechnique = function(n) {
            return "function" == typeof n && Object.getOwnPropertyNames(o.default).reduce(function(e, t) {
                return t && (0, i.default)(n[e]) === (0, i.default)(o.default[e])
            }, !0)
        };
        t.validElement = function(e) {
            return e && -1 < e.toString().indexOf("Element")
        };

        function s(e) {
            var t = e.inViewThreshold,
                n = e.timeInView,
                r = !1,
                i = [];
            return ("number" != typeof t || 1 < t) && (r = !0, i.push("inViewThreshold must be a number equal to or less than 1")), ("number" != typeof n || n < 0) && (r = !0, i.push("timeInView must be a number greater to or equal 0")), {
                invalid: r,
                reasons: i.join(" | ")
            }
        }
        t.validateCriteria = s;
        t.validateStrategy = function(e) {
            var t = e.autostart,
                n = e.techniques,
                r = e.criteria,
                i = !1,
                o = [];
            "boolean" != typeof t && (i = !0, o.push("autostart must be boolean")), Array.isArray(n) && 0 !== n.length || (i = !0, o.push("techniques must be an array containing atleast on measurement techniques"));
            var a = s(r);
            return a.invalid && (i = !0, o.push(a.reasons)), {
                invalid: i,
                reasons: o.join(" | ")
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = r(n(1)),
            o = r(n(2)),
            a = function() {
                function e() {
                    (0, i.default)(this, e), this.listeners = {
                        inView: [],
                        outView: [],
                        changeView: []
                    }, this.percentViewable = 0
                }
                return (0, o.default)(e, [{
                    key: "onInView",
                    value: function(e) {
                        return this.addCallback(e, "inView")
                    }
                }, {
                    key: "onChangeView",
                    value: function(e) {
                        return this.addCallback(e, "changeView")
                    }
                }, {
                    key: "onOutView",
                    value: function(e) {
                        return this.addCallback(e, "outView")
                    }
                }, {
                    key: "addCallback",
                    value: function(e, t) {
                        if ("function" == typeof e && this.listeners[t]) this.listeners[t].push(e);
                        else if ("function" != typeof e) throw "callback must be function";
                        return this
                    }
                }, {
                    key: "start",
                    value: function() {}
                }, {
                    key: "dispose",
                    value: function() {}
                }, {
                    key: "unmeasureable",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "viewable",
                    get: function() {
                        return !1
                    }
                }, {
                    key: "techniqueName",
                    get: function() {
                        return "BaseTechnique"
                    }
                }]), e
            }();
        t.default = a
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sleep = function(e) {
            return a.apply(this, arguments)
        }, t.timestampToSeconds = function(e) {
            var t = (e || "").match(/(\d\d):(\d\d):(\d\d)/);
            return t && t.slice(1, 4).map(parseFloat).reduce(function(e, t, n) {
                return e + t * Math.pow(60, Math.abs(n - 2))
            }, 0)
        }, t.secondsToTimestamp = function(e) {
            return Number(e) !== e ? null : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60 % 60)].map(s).join(":")
        };
        var i = r(n(8)),
            o = r(n(9));

        function a() {
            return (a = (0, o.default)(i.default.mark(function e(t) {
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new Promise(function(e) {
                                return setTimeout(e, t)
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }))).apply(this, arguments)
        }

        function s(e) {
            return (9 < e ? "" : "0") + e.toString()
        }
    }, function(e, t, n) {
        "use strict";
        var r = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "interruptbegin", "interruptend", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"];
        r.forEach(function(e) {
            return r[e.toUpperCase()] = e
        }), Object.freeze(r), e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = r(n(1)),
            i = r(n(2)),
            s = r(n(3)),
            o = r(n(4)),
            u = r(n(5)),
            c = r(n(12)),
            l = r(n(7));

        function d(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, u.default)(r);
                return t = i ? (e = (0, u.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, o.default)(this, t)
            }
        }
        var f = function(e) {
            (0, s.default)(o, e);
            var r = d(o);

            function o(e, t) {
                var n, i = t.logger;
                return (0, a.default)(this, o), (n = r.call(this)).container = e, n.logger = i, n.__private__ = {
                    ready: !1,
                    stopped: !1
                }, [l.default.AdLoaded, l.default.AdStarted, l.default.AdImpression, l.default.AdError, l.default.AdStopped].forEach(function(r) {
                    return n.on(r, function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return i("player emitted %s with args: %o", r, t)
                    })
                }), i("new instance"), n
            }
            return (0, i.default)(o, [{
                key: "pauseAd",
                value: function() {
                    return Promise.resolve()
                }
            }, {
                key: "resumeAd",
                value: function() {
                    return Promise.resolve()
                }
            }, {
                key: "_createClickArea",
                value: function() {
                    var e = this,
                        t = document.createElement("div");
                    t.style.cssText = "width:100%;height:100%;opacity:0;z-index:1;position:absolute;top:0;left:0", t.onclick = function() {
                        return e.emit(l.default.AdClickThru, null, null, !0)
                    }, this.container.appendChild(t)
                }
            }, {
                key: "adRemainingTime",
                get: function() {
                    return -1
                }
            }, {
                key: "adDuration",
                get: function() {
                    return -1
                }
            }, {
                key: "adVolume",
                get: function() {
                    return -1
                },
                set: function() {
                    return -1
                }
            }]), o
        }(c.default);
        t.default = f
    }, function(e, t) {
        var n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t) {
        e.exports = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
    }, function(e, t, n) {
        var r = n(27);
        e.exports = function(e, t) {
            if (e) {
                if ("string" == typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
            }
        }
    }, function(e, t, n) {
        var r = n(57),
            i = n(58),
            o = n(28),
            a = n(59);
        e.exports = function(e, t) {
            return r(e) || i(e, t) || o(e, t) || a()
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.OUTVIEW = t.INVIEW = t.UNMEASUREABLE = t.COMPLETE = t.CHANGE = t.STOP = t.START = void 0;
        t.START = "start";
        t.STOP = "stop";
        t.CHANGE = "change";
        t.COMPLETE = "complete";
        t.UNMEASUREABLE = "unmeasureable";
        t.INVIEW = "inview";
        t.OUTVIEW = "outview"
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = r(n(1)),
            o = r(n(2)),
            a = function() {
                function t(e) {
                    (0, i.default)(this, t), this.duration = e, this.listeners = [], this.completed = !1
                }
                return (0, o.default)(t, [{
                    key: "timerComplete",
                    value: function() {
                        this.completed = !0, this.listeners.forEach(function(e) {
                            return e()
                        })
                    }
                }, {
                    key: "elapsed",
                    value: function(e) {
                        "function" == typeof e && this.listeners.push(e)
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.endTimer(), this.timer = setTimeout(this.timerComplete.bind(this), this.duration)
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.endTimer()
                    }
                }, {
                    key: "endTimer",
                    value: function() {
                        this.timer && (clearTimeout(this.timer), this.listeners.length = 0)
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.endTimer()
                    }
                }]), t
            }();
        t.default = a
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "IntersectionObserver", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }), Object.defineProperty(t, "IntersectionObserverPolyfill", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(t, "BaseTechnique", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        });
        var i = r(n(33)),
            o = r(n(69)),
            a = r(n(22))
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = r(n(1)),
            a = r(n(2)),
            s = r(n(3)),
            u = r(n(4)),
            c = r(n(5)),
            i = r(n(22)),
            l = n(21),
            d = n(20);

        function f(e) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return p(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                    }(e))) {
                    var t = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return t >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[t++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, i, o = !0,
                a = !1;
            return {
                s: function() {
                    r = e[Symbol.iterator]()
                },
                n: function() {
                    var e = r.next();
                    return o = e.done, e
                },
                e: function(e) {
                    a = !0, i = e
                },
                f: function() {
                    try {
                        o || null == r.return || r.return()
                    } finally {
                        if (a) throw i
                    }
                }
            }
        }

        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function h(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, c.default)(r);
                return t = i ? (e = (0, c.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, u.default)(this, t)
            }
        }
        var A = function(e) {
            (0, s.default)(i, e);
            var r = h(i);

            function i(e) {
                var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : d.DEFAULT_STRATEGY.criteria;
                if ((0, o.default)(this, i), t = r.call(this, e, n), void 0 !== n && e) t.element = e, t.criteria = n, t.inView = !1, t.started = !1, t.notificationLevels = Array.from({
                    length: 101
                }, function(e, t) {
                    return t / 100
                }), -1 === t.notificationLevels.indexOf(t.criteria.inViewThreshold) && t.notificationLevels.push(t.criteria.inViewThreshold);
                else if (!e) throw "element not provided";
                return t
            }
            return (0, a.default)(i, [{
                key: "start",
                value: function() {
                    this.observer = new window.IntersectionObserver(this.viewableChange.bind(this), {
                        threshold: this.notificationLevels
                    }), this.observer.observe(this.element)
                }
            }, {
                key: "dispose",
                value: function() {
                    this.observer && (this.observer.unobserve(this.element), this.observer.disconnect(this.element))
                }
            }, {
                key: "viewableChange",
                value: function(e) {
                    var t, n = f(e);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var r = t.value;
                            void 0 !== r.intersectionRatio && (this.percentViewable = r.intersectionRatio, r.intersectionRatio < this.criteria.inViewThreshold && this.started && (this.inView = !1, this.listeners.outView.forEach(function(e) {
                                return e()
                            })), r.intersectionRatio >= this.criteria.inViewThreshold && !this.inView && (this.started = !0, this.inView = !0, this.listeners.inView.forEach(function(e) {
                                return e()
                            })), this.listeners.changeView.forEach(function(e) {
                                return e()
                            }))
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                }
            }, {
                key: "unmeasureable",
                get: function() {
                    return !window.IntersectionObserver || this.usesPolyfill || !(0, l.validElement)(this.element)
                }
            }, {
                key: "viewable",
                get: function() {
                    return this.inView
                }
            }, {
                key: "techniqueName",
                get: function() {
                    return "IntersectionObserver"
                }
            }, {
                key: "usesPolyfill",
                get: function() {
                    return "number" == typeof window.IntersectionObserver.prototype.THROTTLE_TIMEOUT
                }
            }]), i
        }(i.default);
        t.default = A
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "getDetails", {
            enumerable: !0,
            get: function() {
                return r.getElementDetails
            }
        }), Object.defineProperty(t, "isInFocus", {
            enumerable: !0,
            get: function() {
                return r.isInFocus
            }
        }), Object.defineProperty(t, "iFrameContext", {
            enumerable: !0,
            get: function() {
                return r.iFrameContext
            }
        }), Object.defineProperty(t, "iFrameServingScenarios", {
            enumerable: !0,
            get: function() {
                return r.iFrameServingScenarios
            }
        });
        var r = n(15)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.customCriteria = t.MRC_DISPLAY = t.MRC_VIDEO = void 0;
        t.MRC_VIDEO = {
            inViewThreshold: .5,
            timeInView: 2e3
        };
        t.MRC_DISPLAY = {
            inViewThreshold: .5,
            timeInView: 1e3
        };
        t.customCriteria = function(e, t) {
            return {
                inViewThreshold: 0 < arguments.length && void 0 !== e ? e : .5,
                timeInView: 1 < arguments.length && void 0 !== t ? t : 2e3
            }
        }
    }, function(e, t) {
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
        };
        e.exports = n
    }, function(e, t, o) {
        "use strict";
        var n, r, i = function() {
                return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n
            },
            a = (r = {}, function(e) {
                if (void 0 === r[e]) {
                    var t = document.querySelector(e);
                    if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head
                    } catch (e) {
                        t = null
                    }
                    r[e] = t
                }
                return r[e]
            }),
            d = [];

        function f(e) {
            for (var t = -1, n = 0; n < d.length; n++)
                if (d[n].identifier === e) {
                    t = n;
                    break
                } return t
        }

        function u(e, t) {
            for (var n = {}, r = [], i = 0; i < e.length; i++) {
                var o = e[i],
                    a = t.base ? o[0] + t.base : o[0],
                    s = n[a] || 0,
                    u = "".concat(a, " ").concat(s);
                n[a] = s + 1;
                var c = f(u),
                    l = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    }; - 1 !== c ? (d[c].references++, d[c].updater(l)) : d.push({
                    identifier: u,
                    updater: function(t, e) {
                        var n, r, i; {
                            var o;
                            i = e.singleton ? (o = v++, n = A = A || p(e), r = h.bind(null, n, o, !1), h.bind(null, n, o, !0)) : (n = p(e), r = function(e, t, n) {
                                var r = n.css,
                                    i = n.media,
                                    o = n.sourceMap;
                                i ? e.setAttribute("media", i) : e.removeAttribute("media");
                                o && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */"));
                                if (e.styleSheet) e.styleSheet.cssText = r;
                                else {
                                    for (; e.firstChild;) e.removeChild(e.firstChild);
                                    e.appendChild(document.createTextNode(r))
                                }
                            }.bind(null, n, e), function() {
                                ! function(e) {
                                    if (null === e.parentNode) return;
                                    e.parentNode.removeChild(e)
                                }(n)
                            })
                        }
                        return r(t),
                            function(e) {
                                if (e) {
                                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                                    r(t = e)
                                } else i()
                            }
                    }(l, t),
                    references: 1
                }), r.push(u)
            }
            return r
        }

        function p(e) {
            var t, n = document.createElement("style"),
                r = e.attributes || {};
            if (void 0 !== r.nonce || (t = o.nc) && (r.nonce = t), Object.keys(r).forEach(function(e) {
                    n.setAttribute(e, r[e])
                }), "function" == typeof e.insert) e.insert(n);
            else {
                var i = a(e.insert || "head");
                if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                i.appendChild(n)
            }
            return n
        }
        var s, c = (s = [], function(e, t) {
            return s[e] = t, s.filter(Boolean).join("\n")
        });

        function h(e, t, n, r) {
            var i, o, a = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
            e.styleSheet ? e.styleSheet.cssText = c(t, a) : (i = document.createTextNode(a), (o = e.childNodes)[t] && e.removeChild(o[t]), o.length ? e.insertBefore(i, o[t]) : e.appendChild(i))
        }
        var A = null,
            v = 0;
        e.exports = function(e, a) {
            (a = a || {}).singleton || "boolean" == typeof a.singleton || (a.singleton = i());
            var s = u(e = e || [], a);
            return function(e) {
                if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                    for (var t = 0; t < s.length; t++) {
                        var n = f(s[t]);
                        d[n].references--
                    }
                    for (var r = u(e, a), i = 0; i < s.length; i++) {
                        var o = f(s[i]);
                        0 === d[o].references && (d[o].updater(), d.splice(o, 1))
                    }
                    s = r
                }
            }
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(n) {
            var u = [];
            return u.toString = function() {
                return this.map(function(e) {
                    var t = function(e, t) {
                        var n = e[1] || "",
                            r = e[3];
                        if (!r) return n;
                        if (t && "function" == typeof btoa) {
                            var i = function(e) {
                                    var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
                                        n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);
                                    return "/*# ".concat(n, " */")
                                }(r),
                                o = r.sources.map(function(e) {
                                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
                                });
                            return [n].concat(o).concat([i]).join("\n")
                        }
                        return [n].join("\n")
                    }(e, n);
                    return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t
                }).join("")
            }, u.i = function(e, t, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                var r = {};
                if (n)
                    for (var i = 0; i < this.length; i++) {
                        var o = this[i][0];
                        null != o && (r[o] = !0)
                    }
                for (var a = 0; a < e.length; a++) {
                    var s = [].concat(e[a]);
                    n && r[s[0]] || (t && (s[2] ? s[2] = "".concat(t, " and ").concat(s[2]) : s[2] = t), u.push(s))
                }
            }, u
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(n, r) {
            return function() {
                for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
                return n.apply(r, e)
            }
        }
    }, function(e, t, n) {
        "use strict";
        var a = n(6);

        function s(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        e.exports = function(e, t, n) {
            if (!t) return e;
            var r, i, o = n ? n(t) : a.isURLSearchParams(t) ? t.toString() : (r = [], a.forEach(t, function(e, t) {
                null != e && (a.isArray(e) ? t += "[]" : e = [e], a.forEach(e, function(e) {
                    a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = JSON.stringify(e)), r.push(s(t) + "=" + s(e))
                }))
            }), r.join("&"));
            return o && (-1 !== (i = e.indexOf("#")) && (e = e.slice(0, i)), e += (-1 === e.indexOf("?") ? "?" : "&") + o), e
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    }, function(s, e, u) {
        "use strict";
        (function(e) {
            var n = u(6),
                r = u(91),
                t = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function i(e, t) {
                !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var o, a = {
                adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e)) && (o = u(43)), o),
                transformRequest: [function(e, t) {
                    return r(t, "Accept"), r(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) {
                    return 200 <= e && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            n.forEach(["delete", "get", "head"], function(e) {
                a.headers[e] = {}
            }), n.forEach(["post", "put", "patch"], function(e) {
                a.headers[e] = n.merge(t)
            }), s.exports = a
        }).call(this, u(17))
    }, function(e, t, d) {
        "use strict";
        var f = d(6),
            p = d(92),
            h = d(40),
            A = d(94),
            v = d(97),
            m = d(98),
            g = d(44);
        e.exports = function(l) {
            return new Promise(function(n, r) {
                var i = l.data,
                    o = l.headers;
                f.isFormData(i) && delete o["Content-Type"];
                var e, t, a = new XMLHttpRequest;
                l.auth && (e = l.auth.username || "", t = l.auth.password || "", o.Authorization = "Basic " + btoa(e + ":" + t));
                var s, u, c = A(l.baseURL, l.url);
                if (a.open(l.method.toUpperCase(), h(c, l.params, l.paramsSerializer), !0), a.timeout = l.timeout, a.onreadystatechange = function() {
                        var e, t;
                        a && 4 === a.readyState && (0 !== a.status || a.responseURL && 0 === a.responseURL.indexOf("file:")) && (e = "getAllResponseHeaders" in a ? v(a.getAllResponseHeaders()) : null, t = {
                            data: l.responseType && "text" !== l.responseType ? a.response : a.responseText,
                            status: a.status,
                            statusText: a.statusText,
                            headers: e,
                            config: l,
                            request: a
                        }, p(n, r, t), a = null)
                    }, a.onabort = function() {
                        a && (r(g("Request aborted", l, "ECONNABORTED", a)), a = null)
                    }, a.onerror = function() {
                        r(g("Network Error", l, null, a)), a = null
                    }, a.ontimeout = function() {
                        var e = "timeout of " + l.timeout + "ms exceeded";
                        l.timeoutErrorMessage && (e = l.timeoutErrorMessage), r(g(e, l, "ECONNABORTED", a)), a = null
                    }, f.isStandardBrowserEnv() && (s = d(99), (u = (l.withCredentials || m(c)) && l.xsrfCookieName ? s.read(l.xsrfCookieName) : void 0) && (o[l.xsrfHeaderName] = u)), "setRequestHeader" in a && f.forEach(o, function(e, t) {
                        void 0 === i && "content-type" === t.toLowerCase() ? delete o[t] : a.setRequestHeader(t, e)
                    }), f.isUndefined(l.withCredentials) || (a.withCredentials = !!l.withCredentials), l.responseType) try {
                    a.responseType = l.responseType
                } catch (e) {
                    if ("json" !== l.responseType) throw e
                }
                "function" == typeof l.onDownloadProgress && a.addEventListener("progress", l.onDownloadProgress), "function" == typeof l.onUploadProgress && a.upload && a.upload.addEventListener("progress", l.onUploadProgress), l.cancelToken && l.cancelToken.promise.then(function(e) {
                    a && (a.abort(), r(e), a = null)
                }), void 0 === i && (i = null), a.send(i)
            })
        }
    }, function(e, t, n) {
        "use strict";
        var a = n(93);
        e.exports = function(e, t, n, r, i) {
            var o = new Error(e);
            return a(o, t, n, r, i)
        }
    }, function(e, t, n) {
        "use strict";
        var u = n(6);
        e.exports = function(t, n) {
            n = n || {};
            var r = {},
                e = ["url", "method", "params", "data"],
                i = ["headers", "auth", "proxy"],
                o = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
            u.forEach(e, function(e) {
                void 0 !== n[e] && (r[e] = n[e])
            }), u.forEach(i, function(e) {
                u.isObject(n[e]) ? r[e] = u.deepMerge(t[e], n[e]) : void 0 !== n[e] ? r[e] = n[e] : u.isObject(t[e]) ? r[e] = u.deepMerge(t[e]) : void 0 !== t[e] && (r[e] = t[e])
            }), u.forEach(o, function(e) {
                void 0 !== n[e] ? r[e] = n[e] : void 0 !== t[e] && (r[e] = t[e])
            });
            var a = e.concat(i).concat(o),
                s = Object.keys(n).filter(function(e) {
                    return -1 === a.indexOf(e)
                });
            return u.forEach(s, function(e) {
                void 0 !== n[e] ? r[e] = n[e] : void 0 !== t[e] && (r[e] = t[e])
            }), r
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            this.message = e
        }
        r.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, r.prototype.__CANCEL__ = !0, e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = Array.prototype.map,
            i = Array.prototype.filter,
            o = Array.prototype.reduce,
            a = new DOMParser;

        function s(t) {
            var e = 0 < t.childElementCount;
            return {
                tag: t.tagName,
                value: e ? null : t.textContent,
                attributes: o.call(t.attributes, function(e, t) {
                    return e[t.name] = t.value, e
                }, {}),
                find: function(e) {
                    return u(t.querySelectorAll(e))
                },
                children: function() {
                    return i.call(t.childNodes, function(e) {
                        return e instanceof Element
                    }).map(s)
                }
            }
        }

        function u(e) {
            return r.call(e, s)
        }
        e.exports = function(e) {
            var t = a.parseFromString(e, "application/xml");
            return function(e) {
                return u(t.querySelectorAll(e))
            }
        }
    }, function(e, t, n) {
        n(49), e.exports = n(55)
    }, function(e, t, n) {
        "use strict";
        n(0)(n(13)).default.disable()
    }, function(e, t, a) {
        "use strict";
        var s = a(0)(a(18));
        e.exports = function(t) {
            function n(e) {
                for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                return c.colors[Math.abs(t) % c.colors.length]
            }

            function c(e) {
                var s;

                function u() {
                    for (var i, e, t, o, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    u.enabled && (i = u, t = (e = Number(new Date)) - (s || e), i.diff = t, i.prev = s, i.curr = e, s = e, a[0] = c.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O"), a[o = 0] = a[0].replace(/%([a-zA-Z%])/g, function(e, t) {
                        if ("%%" === e) return e;
                        o++;
                        var n, r = c.formatters[t];
                        return "function" == typeof r && (n = a[o], e = r.call(i, n), a.splice(o, 1), o--), e
                    }), c.formatArgs.call(i, a), (i.log || c.log).apply(i, a))
                }
                return u.namespace = e, u.enabled = c.enabled(e), u.useColors = c.useColors(), u.color = n(e), u.destroy = r, u.extend = i, "function" == typeof c.init && c.init(u), c.instances.push(u), u
            }

            function r() {
                var e = c.instances.indexOf(this);
                return -1 !== e && (c.instances.splice(e, 1), !0)
            }

            function i(e, t) {
                var n = c(this.namespace + (void 0 === t ? ":" : t) + e);
                return n.log = this.log, n
            }

            function o(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
            }
            return ((c.debug = c).default = c).coerce = function(e) {
                if (e instanceof Error) return e.stack || e.message;
                return e
            }, c.disable = function() {
                var e = [].concat((0, s.default)(c.names.map(o)), (0, s.default)(c.skips.map(o).map(function(e) {
                    return "-" + e
                }))).join(",");
                return c.enable(""), e
            }, c.enable = function(e) {
                var t;
                c.save(e), c.names = [], c.skips = [];
                var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    r = n.length;
                for (t = 0; t < r; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? c.skips.push(new RegExp("^" + e.substr(1) + "$")) : c.names.push(new RegExp("^" + e + "$")));
                for (t = 0; t < c.instances.length; t++) {
                    var i = c.instances[t];
                    i.enabled = c.enabled(i.namespace)
                }
            }, c.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                var t, n;
                for (t = 0, n = c.skips.length; t < n; t++)
                    if (c.skips[t].test(e)) return !1;
                for (t = 0, n = c.names.length; t < n; t++)
                    if (c.names[t].test(e)) return !0;
                return !1
            }, c.humanize = a(54), Object.keys(t).forEach(function(e) {
                c[e] = t[e]
            }), c.instances = [], c.names = [], c.skips = [], c.formatters = {}, c.selectColor = n, c.enable(c.load()), c
        }
    }, function(e, t, n) {
        var r = n(27);
        e.exports = function(e) {
            if (Array.isArray(e)) return r(e)
        }
    }, function(e, t) {
        e.exports = function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }
    }, function(e, t) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0)(n(10)),
            i = 36e5,
            o = 864e5;

        function a(e, t, n, r) {
            var i = 1.5 * n <= t;
            return Math.round(e / n) + " " + r + (i ? "s" : "")
        }
        e.exports = function(e, t) {
            t = t || {};
            var n = (0, r.default)(e);
            if ("string" === n && 0 < e.length) return function(e) {
                if (100 < (e = String(e)).length) return;
                var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (!t) return;
                var n = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return 315576e5 * n;
                    case "weeks":
                    case "week":
                    case "w":
                        return 6048e5 * n;
                    case "days":
                    case "day":
                    case "d":
                        return n * o;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * i;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return 6e4 * n;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return 1e3 * n;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n;
                    default:
                        return
                }
            }(e);
            if ("number" === n && isFinite(e)) return (t.long ? function(e) {
                var t = Math.abs(e);
                if (o <= t) return a(e, t, o, "day");
                if (i <= t) return a(e, t, i, "hour");
                if (6e4 <= t) return a(e, t, 6e4, "minute");
                if (1e3 <= t) return a(e, t, 1e3, "second");
                return e + " ms"
            } : function(e) {
                var t = Math.abs(e);
                if (o <= t) return Math.round(e / o) + "d";
                if (i <= t) return Math.round(e / i) + "h";
                if (6e4 <= t) return Math.round(e / 6e4) + "m";
                if (1e3 <= t) return Math.round(e / 1e3) + "s";
                return e + "ms"
            })(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }), Object.defineProperty(t, "EVENTS", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        });
        var i = r(n(56)),
            o = r(n(7))
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var l = r(n(29)),
            A = r(n(8)),
            d = r(n(9)),
            f = r(n(1)),
            p = r(n(2)),
            h = r(n(19)),
            v = r(n(3)),
            o = r(n(4)),
            a = r(n(5)),
            i = r(n(12)),
            m = n(62),
            g = n(11),
            y = n(83),
            b = r(n(7)),
            w = r(n(107)),
            _ = r(n(108)),
            x = r(n(111)),
            k = r(n(114)),
            E = r(n(115)),
            C = r(n(116)),
            T = r(n(117)),
            S = r(n(119)),
            O = r(n(13)),
            I = n(120);

        function R(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, a.default)(r);
                return t = i ? (e = (0, a.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, o.default)(this, t)
            }
        }
        var s = function(e) {
            (0, v.default)(c, e);
            var t, n, r, i, o, a, s, u = R(c);

            function c(t) {
                var n, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                (0, f.default)(this, c), (n = u.call(this)).setMaxListeners(1e3), n.__private__ = {
                    container: (0, g.createTag)("div", [T.default.aspect], {}),
                    mainContainer: t,
                    config: (0, g.defaults)({
                        vast: {
                            maxRedirects: 10,
                            removeCredentials: !1
                        },
                        skipHandler: m.defaultSkipHandler,
                        timeouts: {
                            loading: 8e3,
                            starting: 5e3,
                            global: 65e3
                        },
                        disableVolumeCheck: !1,
                        logger: (0, O.default)("lib:vast-player")
                    }, e),
                    mapperURL: function(e) {
                        return (0, g.processMacros)((0, g.processURI)(e), (0, h.default)(n))
                    },
                    html5vast: null,
                    vast: null,
                    ready: !1,
                    loaded: !1,
                    stopped: !1,
                    player: null,
                    linear: !0,
                    pods: !1,
                    adSkippableState: !1,
                    currentVolume: 1,
                    volumeMutex: new I.Mutex
                }, t.appendChild(n.__private__.container), n.on("AdImpression", function() {
                    var e = new g.ViewabilityObserver(t);
                    (0, g.anyEmitted)((0, h.default)(n), ["AdImpression", "AdStopped", "AdEnded"]).then(function() {
                        return e.dispose()
                    }), e.once("unmeasureable", function() {
                        return n.emit(b.default.MRC_UNMEASUREABLE)
                    }), e.once("complete", function() {
                        return n.emit(b.default.MRC_VIEW)
                    }), e.start()
                });
                var r = n.__private__.config.timeouts.global;
                r && (0, g.sleep)(r).then(function() {
                    n.__private__.stopped || (n.emit("AdError", "Global timeout exceeded after " + r + "ms"), n.stopAd())
                });
                var i = n.__private__.config.logger;
                return b.default.forEach(function(r) {
                    return n.on(r, function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return i("player emitted %s with args: %o", r, t)
                    })
                }), i("new instance"), n
            }
            return (0, p.default)(c, [{
                key: "_emitError",
                value: function(e) {
                    var t = this,
                        n = e ? e instanceof Error ? e.message : "string" == typeof e ? e : JSON.stringify(e) : void 0;
                    return this.emit(b.default.AdError, n), setTimeout(function() {
                        return t.stopAd()
                    }, 0), Promise.reject(new Error(n))
                }
            }, {
                key: "load",
                value: (s = (0, d.default)(A.default.mark(function e(t) {
                    var n, r, i;
                    return A.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return this.emit("AdRequest", t), e.next = 3, y.VAST.fetch(this.__private__.mapperURL(t), this.config.vast).catch(this._emitError.bind(this));
                            case 3:
                                if (n = e.sent) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", this._emitError());
                            case 6:
                                if ((n = (0, m.formatAds)(this.container, n)).ads.length) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", this._emitError());
                            case 9:
                                if (this.__private__.vast = n, (r = n.ads.filter(function(e) {
                                        return "linear" === e.creatives[0].type
                                    })).length || (this.__private__.linear = !1, r = n.ads.filter(function(e) {
                                        return "nonLinear" === e.creatives[0].type
                                    })), r.length) {
                                    e.next = 14;
                                    break
                                }
                                return e.abrupt("return", this._emitError("ad list is empty"));
                            case 14:
                                return n.ads = r, this.emit("AdParsed"), i = (0, g.sleep)(this.__private__.config.timeouts.loading).then(function() {
                                    return Promise.reject("timeout")
                                }), (0, g.hidePromiseError)(i), e.prev = 18, e.next = 21, Promise.race([this.loadNextAd(), i]);
                            case 21:
                                this.emit("ready"), this.emit(b.default.AdLoaded), e.next = 30;
                                break;
                            case 25:
                                if (e.prev = 25, e.t0 = e.catch(18), "timeout" === e.t0) return e.abrupt("return", this._emitError("Loading timeout exceeded"));
                                e.next = 29;
                                break;
                            case 29:
                                return e.abrupt("return", this._emitError("Ad not loaded"));
                            case 30:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [18, 25]
                    ])
                })), function(e) {
                    return s.apply(this, arguments)
                })
            }, {
                key: "loadNextAd",
                value: (a = (0, d.default)(A.default.mark(function e() {
                    var t, n;
                    return A.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                t = this.__private__.vast.ads;
                            case 1:
                                if (t.length && !this.__private__.stopped) return n = t.shift(), e.prev = 3, e.next = 6, this._loadAd(n);
                                e.next = 13;
                                break;
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 9:
                                e.prev = 9, e.t0 = e.catch(3);
                            case 11:
                                e.next = 1;
                                break;
                            case 13:
                                if (t.length) {
                                    e.next = 15;
                                    break
                                }
                                return e.abrupt("return", Promise.reject("ad list is empty"));
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [3, 9]
                    ])
                })), function() {
                    return a.apply(this, arguments)
                })
            }, {
                key: "_loadAd",
                value: (o = (0, d.default)(A.default.mark(function e(t) {
                    var n, r, i, o, a, s, u, c, l, d, f, p, h = this;
                    return A.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this._cleanup(), n = this.__private__.config.logger, this.__private__.adSkippableState && (this.__private__.adSkippableState = !1, this.emit(b.default.AdSkippableStateChange)), i = function() {
                                        return null
                                    }, !this.adLinear) {
                                    e.next = 19;
                                    break
                                }
                                o = t.creatives[0].mediaFiles[0], a = (0, g.get)(t, "creatives[0].parameters"), e.t0 = (0, m.getMediaFileType)(o), e.next = "html5video" === e.t0 ? 10 : "jsvpaid" === e.t0 ? 13 : 16;
                                break;
                            case 10:
                                return this.__private__.html5vast = !0, r = new x.default(this.container, {
                                    logger: n.extend("HTMLVideoPlayer"),
                                    skipHandler: this.config.skipHandler,
                                    skipOffset: (0, g.get)(t, "creatives[0].skipOffset")
                                }), e.abrupt("break", 16);
                            case 13:
                                return this.__private__.html5vast = !1, r = new _.default(this.container, {
                                    logger: n.extend("JavaScriptVPAIDPlayer")
                                }), e.abrupt("break", 16);
                            case 16:
                                r && (i = function() {
                                    return r.load(o, a)
                                }), e.next = 39;
                                break;
                            case 19:
                                s = t.creatives[0].ads[0], u = (0, g.trim)(s.parameters), c = (0, g.trim)(s.clickThrough), l = (0, g.trim)(s.resources[0].data), e.t1 = (0, m.getNonLinearAdType)(s), e.next = "iframe" === e.t1 ? 26 : "html" === e.t1 ? 29 : "static/image" === e.t1 ? 32 : "static/jsvpaid" === e.t1 ? 35 : 38;
                                break;
                            case 26:
                                return this._createSandboxContainer(s), r = new E.default(this.sandbox.contentWindow.document.body, {
                                    logger: n.extend("IFrameResource")
                                }), e.abrupt("break", 38);
                            case 29:
                                return this._createSandboxContainer(s), r = new k.default(this.sandbox.contentWindow.document.body, {
                                    logger: n.extend("HTMLResource")
                                }), e.abrupt("break", 38);
                            case 32:
                                return this._createSandboxContainer(s), r = new C.default(this.sandbox.contentWindow.document.body, {
                                    logger: n.extend("ImageResource")
                                }), e.abrupt("break", 38);
                            case 35:
                                return l = {
                                    uri: (0, g.processURI)(l),
                                    bitrate: null
                                }, r = new _.default(this.container, {
                                    logger: n.extend("JavaScriptVPAIDPlayer")
                                }), e.abrupt("break", 38);
                            case 38:
                                r && (i = function() {
                                    return r.load(l, u, c)
                                });
                            case 39:
                                if (r) {
                                    e.next = 41;
                                    break
                                }
                                return e.abrupt("return", Promise.reject("Creative type is not supported"));
                            case 41:
                                return this.__private__.player = r, d = [].concat((0, g.map)(t, "impressions", function(e) {
                                    return {
                                        event: "impression",
                                        uri: e.uri
                                    }
                                }), (0, g.map)(t, "errors", function(e) {
                                    return {
                                        event: "error",
                                        uri: e
                                    }
                                }), (0, g.get)(t, "creatives[0].trackingEvents"), this.adLinear ? (0, g.map)(t, "creatives[0].videoClicks.clickTrackings", function(e) {
                                    return {
                                        event: "clickThrough",
                                        uri: e
                                    }
                                }) : (0, g.map)(t, "creatives[0].ads[0].clickTracking", function(e) {
                                    return {
                                        event: "clickThrough",
                                        uri: e
                                    }
                                })), f = ["AdLoaded", "AdStarted", "AdError", "AdStopped"], p = b.default.filter(function(e) {
                                    return !f.includes(e)
                                }), ["force-muted", "JSLoaded"].forEach(function(e) {
                                    return r.on(e, function() {
                                        return h.emit(e)
                                    })
                                }), e.prev = 46, e.next = 49, i();
                            case 49:
                                return this._setClickThruListener(t), new g.EventProxy(p).from(r).to(this), new w.default(d, this.__private__.mapperURL).track(r), this._bindSkipBtn(t), this.__private__.ready = !0, this.adVolume = this.__private__.currentVolume, e.abrupt("return", r);
                            case 58:
                                return e.prev = 58, e.t2 = e.catch(46), e.abrupt("return", Promise.reject(e.t2));
                            case 61:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [46, 58]
                    ])
                })), function(e) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "_bindSkipBtn",
                value: function(e) {
                    var t, n = this,
                        r = this.__private__.player;
                    this.adLinear || r instanceof _.default || (t = e.creatives[0].ads[0].minSuggestedDuration) && r.once("AdImpression", (0, d.default)(A.default.mark(function e() {
                        return A.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n.__private__.vast.ads = [], e.next = 3, (0, g.sleep)(1e3 * t);
                                case 3:
                                    if (n.sandbox && r === n.__private__.player) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    return e.next = 7, (0, m.nonLinearCloseBtn)(n.sandbox.contentWindow.document.body);
                                case 7:
                                    n.emit(b.default.AdUserClose), n.stopAd();
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })))
                }
            }, {
                key: "_detachAfterStart",
                value: (i = (0, d.default)(A.default.mark(function e() {
                    return A.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.anyEmitted)(this.__private__.player, ["AdUserClose", "AdSkipped", "AdStopped", "AdError"]);
                            case 2:
                                if (this.__private__.vast.ads.length) return e.next = 5, this.loadNextAd().catch(function() {
                                    return null
                                });
                                e.next = 19;
                                break;
                            case 5:
                                if (!e.sent || this.__private__.stopped) return e.abrupt("return");
                                e.next = 8;
                                break;
                            case 8:
                                return e.prev = 8, e.next = 11, this._proxyMethod("startAd");
                            case 11:
                                return e.next = 13, (0, g.anyEmitted)(this.__private__.player, ["AdUserClose", "AdSkipped", "AdStopped", "AdError"]);
                            case 13:
                                e.next = 17;
                                break;
                            case 15:
                                e.prev = 15, e.t0 = e.catch(8);
                            case 17:
                                e.next = 2;
                                break;
                            case 19:
                                this.stopAd();
                            case 20:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [8, 15]
                    ])
                })), function() {
                    return i.apply(this, arguments)
                })
            }, {
                key: "startAd",
                value: (r = (0, d.default)(A.default.mark(function e() {
                    var t;
                    return A.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                this.emit("startingAd"), t = (0, g.sleep)(this.__private__.config.timeouts.starting).then(function() {
                                    return Promise.reject("timeout")
                                }), (0, g.hidePromiseError)(t);
                            case 3:
                                if (this.__private__.stopped) {
                                    e.next = 28;
                                    break
                                }
                                return e.prev = 4, e.next = 7, Promise.race([this._proxyMethod("startAd"), t]);
                            case 7:
                                return this.emit(b.default.AdStarted), (0, g.hidePromiseError)(this._detachAfterStart()), e.abrupt("return");
                            case 12:
                                if (e.prev = 12, e.t0 = e.catch(4), "timeout" === e.t0) return e.abrupt("return", this._emitError("Starting timeout exceeded"));
                                e.next = 16;
                                break;
                            case 16:
                                return e.prev = 16, e.next = 19, Promise.race([this.loadNextAd(), t]);
                            case 19:
                                e.next = 26;
                                break;
                            case 21:
                                if (e.prev = 21, e.t1 = e.catch(16), "timeout" === e.t1) return e.abrupt("return", this._emitError("Starting timeout exceeded"));
                                e.next = 25;
                                break;
                            case 25:
                                return e.abrupt("return", this._emitError("Ad not started"));
                            case 26:
                                e.next = 3;
                                break;
                            case 28:
                                return e.abrupt("return", Promise.reject());
                            case 29:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [4, 12],
                        [16, 21]
                    ])
                })), function() {
                    return r.apply(this, arguments)
                })
            }, {
                key: "stopAd",
                value: (n = (0, d.default)(A.default.mark(function e() {
                    var t, n, r, i = arguments;
                    return A.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.__private__.stopped) return e.abrupt("return");
                                e.next = 2;
                                break;
                            case 2:
                                for (this.__private__.stopped = !0, t = i.length, n = new Array(t), r = 0; r < t; r++) n[r] = i[r];
                                if (this.ready) return e.next = 7, this._proxyMethod.apply(this, ["stopAd"].concat(n));
                                e.next = 7;
                                break;
                            case 7:
                                return this.emit(b.default.AdStopped), this.removeAllListeners(), this._cleanup(), this.__private__.container.remove(), e.abrupt("return", Promise.resolve());
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "pauseAd",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this._proxyMethod.apply(this, ["pauseAd"].concat(t))
                }
            }, {
                key: "resumeAd",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this._proxyMethod.apply(this, ["resumeAd"].concat(t))
                }
            }, {
                key: "_cleanup",
                value: function() {
                    this.__private__.ready = !1, this._sandboxRO && (this._sandboxRO.unobserve(this.container), this._sandboxRO = null), this.sandbox && this.sandbox.remove(), this.container.innerHTML = ""
                }
            }, {
                key: "_proxyMethod",
                value: (t = (0, d.default)(A.default.mark(function e(t) {
                    var n, r, i, o, a = arguments;
                    return A.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.ready) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("VASTPlayer not ready.");
                            case 2:
                                for (n = this.__private__.player, r = a.length, i = new Array(1 < r ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = a[o];
                                return e.next = 6, n[t].apply(n, i);
                            case 6:
                                return e.abrupt("return", this);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function(e) {
                    return t.apply(this, arguments)
                })
            }, {
                key: "_setClickThruListener",
                value: function(o) {
                    var a = this;
                    this.on(b.default.AdClickThru, function(e, t, n) {
                        var r;
                        Array.isArray(e) && 3 === e.length && (e = (r = (0, l.default)(e, 3))[0], r[1], n = r[2]);
                        var i = ("string" == typeof e || e instanceof String) && (0, g.trim)(e) || a.adLinear && (0, g.trim)((0, g.get)(o, "creatives[0].videoClicks.clickThrough")) || !a.adLinear && (0, g.trim)((0, g.get)(o, "creatives[0].ads[0].clickThrough"));
                        n && i && window.open((0, g.processMacros)((i || "").trim()))
                    })
                }
            }, {
                key: "_createSandboxContainer",
                value: function(e) {
                    var t = this;
                    this.sandbox = (0, g.createTag)("iframe", [T.default.overlay], {
                        width: 0,
                        height: 0,
                        pointerEvents: "all",
                        visibility: "visible",
                        position: "absolute",
                        left: "50%",
                        bottom: 0,
                        webkitTransform: "translateX(-50%)",
                        msTransform: "translateX(-50%)",
                        transform: "translateX(-50%)",
                        boxShadow: "0 -2px 7px 0 rgba(0,0,0,0.7)"
                    }, {
                        frameborder: 0,
                        width: 0,
                        height: 0,
                        allow: "encrypted-media *;",
                        referrerpolicy: "unsafe-url"
                    }, {
                        src: "about:blank",
                        border: "none"
                    }), this.container.appendChild(this.sandbox), this.sandbox.contentWindow.document.open(), this.sandbox.contentWindow.document.close(), (0, g.cssHelper)(this.sandbox.contentWindow.document.body, {
                        margin: 0
                    }), this._scaleSandbox(e), this._sandboxRO = new S.default(function() {
                        return t._scaleSandbox(e)
                    }), this._sandboxRO.observe(this.container)
                }
            }, {
                key: "_scaleSandbox",
                value: function(e) {
                    var t, n, r = this.container.getBoundingClientRect(),
                        i = r.width,
                        o = r.height,
                        a = {
                            width: e.width,
                            height: e.height
                        };
                    i < a.width && (t = a.width / i, a.height /= t, a.width /= t), o < a.height && (n = a.height / o, a.width /= n, a.height /= n), (0, g.cssHelper)(this.sandbox, {
                        width: a.width + "px",
                        height: a.height + "px"
                    })
                }
            }, {
                key: "container",
                get: function() {
                    return this.__private__.container
                }
            }, {
                key: "config",
                get: function() {
                    return this.__private__.config
                }
            }, {
                key: "vast",
                get: function() {
                    return this.__private__.vast
                }
            }, {
                key: "ready",
                get: function() {
                    return this.__private__.ready
                }
            }, {
                key: "adLinear",
                get: function() {
                    return this.__private__.linear
                }
            }, {
                key: "adSkippableState",
                get: function() {
                    var e = this.__private__;
                    return (0, g.get)(e, "player.adSkippableState") || (0, g.get)(e, "adSkippableState") || !1
                }
            }, {
                key: "adExpanded",
                get: function() {
                    var e = this.__private__;
                    return (0, g.get)(e, "player.adExpanded") || !1
                }
            }, {
                key: "adRemainingTime",
                get: function() {
                    return this.ready ? this.__private__.player.adRemainingTime : -2
                }
            }, {
                key: "adDuration",
                get: function() {
                    return this.ready ? this.__private__.player.adDuration : -2
                }
            }, {
                key: "adVolume",
                get: function() {
                    return this.ready ? this.__private__.player.adVolume : this.__private__.currentVolume
                },
                set: function(n) {
                    var r = this;
                    this.__private__.volumeMutex.use((0, d.default)(A.default.mark(function e() {
                        var t;
                        return A.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((t = r.__private__.config.logger.extend("volume"))("try to set adVolume to %s", n), r.__private__.currentVolume = n, r.ready) {
                                        e.next = 6;
                                        break
                                    }
                                    return t("player not ready, but current volume state has been changed"), e.abrupt("return");
                                case 6:
                                    if (r.__private__.config.disableVolumeCheck) return t("Dont`t check volume permissions. Hard set to ", n), r.__private__.player.adVolume = n, e.abrupt("return");
                                    e.next = 10;
                                    break;
                                case 10:
                                    if (r.__private__.player instanceof _.default && n) return e.prev = 11, e.next = 14, (0, g.autoplayCheck)();
                                    e.next = 24;
                                    break;
                                case 14:
                                    t("autoplay has been allowed. Set volume to %s", n), r.__private__.player.adVolume = n, e.next = 22;
                                    break;
                                case 18:
                                    e.prev = 18, e.t0 = e.catch(11), t("autoplay doesn`t allowed. Mute..."), r.__private__.player.adVolume = 0;
                                case 22:
                                    e.next = 26;
                                    break;
                                case 24:
                                    t("set to %s", n), r.__private__.player.adVolume = n;
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [11, 18]
                        ])
                    })))
                }
            }]), c
        }(i.default);
        t.default = s
    }, function(e, t) {
        e.exports = function(e) {
            if (Array.isArray(e)) return e
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }
        }
    }, function(e, t) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }, function(e, t, n) {
        var r = function(a) {
            "use strict";
            var d, e = Object.prototype,
                l = e.hasOwnProperty,
                t = "function" == typeof Symbol ? Symbol : {},
                i = t.iterator || "@@iterator",
                n = t.asyncIterator || "@@asyncIterator",
                r = t.toStringTag || "@@toStringTag";

            function s(e, t, n, r) {
                var o, a, s, u, i = t && t.prototype instanceof g ? t : g,
                    c = Object.create(i.prototype),
                    l = new C(r || []);
                return c._invoke = (o = e, a = n, s = l, u = p, function(e, t) {
                    if (u === A) throw new Error("Generator is already running");
                    if (u === v) {
                        if ("throw" === e) throw t;
                        return S()
                    }
                    for (s.method = e, s.arg = t;;) {
                        var n = s.delegate;
                        if (n) {
                            var r = function e(t, n) {
                                var r = t.iterator[n.method];
                                if (r === d) {
                                    if (n.delegate = null, "throw" === n.method) {
                                        if (t.iterator.return && (n.method = "return", n.arg = d, e(t, n), "throw" === n.method)) return m;
                                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return m
                                }
                                var i = f(r, t.iterator, n.arg);
                                if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, m;
                                var o = i.arg;
                                return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = d), n.delegate = null, m) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
                            }(n, s);
                            if (r) {
                                if (r === m) continue;
                                return r
                            }
                        }
                        if ("next" === s.method) s.sent = s._sent = s.arg;
                        else if ("throw" === s.method) {
                            if (u === p) throw u = v, s.arg;
                            s.dispatchException(s.arg)
                        } else "return" === s.method && s.abrupt("return", s.arg);
                        u = A;
                        var i = f(o, a, s);
                        if ("normal" === i.type) {
                            if (u = s.done ? v : h, i.arg === m) continue;
                            return {
                                value: i.arg,
                                done: s.done
                            }
                        }
                        "throw" === i.type && (u = v, s.method = "throw", s.arg = i.arg)
                    }
                }), c
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            a.wrap = s;
            var p = "suspendedStart",
                h = "suspendedYield",
                A = "executing",
                v = "completed",
                m = {};

            function g() {}

            function o() {}

            function u() {}
            var c = {};
            c[i] = function() {
                return this
            };
            var y = Object.getPrototypeOf,
                b = y && y(y(T([])));
            b && b !== e && l.call(b, i) && (c = b);
            var w = u.prototype = g.prototype = Object.create(c);

            function _(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function x(u, c) {
                var t;
                this._invoke = function(n, r) {
                    function e() {
                        return new c(function(e, t) {
                            ! function t(e, n, r, i) {
                                var o = f(u[e], u, n);
                                if ("throw" !== o.type) {
                                    var a = o.arg,
                                        s = a.value;
                                    return s && "object" == typeof s && l.call(s, "__await") ? c.resolve(s.__await).then(function(e) {
                                        t("next", e, r, i)
                                    }, function(e) {
                                        t("throw", e, r, i)
                                    }) : c.resolve(s).then(function(e) {
                                        a.value = e, r(a)
                                    }, function(e) {
                                        return t("throw", e, r, i)
                                    })
                                }
                                i(o.arg)
                            }(n, r, e, t)
                        })
                    }
                    return t = t ? t.then(e, e) : e()
                }
            }

            function k(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function E(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function C(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(k, this), this.reset(!0)
            }

            function T(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            r = function e() {
                                for (; ++n < t.length;)
                                    if (l.call(t, n)) return e.value = t[n], e.done = !1, e;
                                return e.value = d, e.done = !0, e
                            };
                        return r.next = r
                    }
                }
                return {
                    next: S
                }
            }

            function S() {
                return {
                    value: d,
                    done: !0
                }
            }
            return o.prototype = w.constructor = u, u.constructor = o, u[r] = o.displayName = "GeneratorFunction", a.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name))
            }, a.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, r in e || (e[r] = "GeneratorFunction")), e.prototype = Object.create(w), e
            }, a.awrap = function(e) {
                return {
                    __await: e
                }
            }, _(x.prototype), x.prototype[n] = function() {
                return this
            }, a.AsyncIterator = x, a.async = function(e, t, n, r, i) {
                void 0 === i && (i = Promise);
                var o = new x(s(e, t, n, r), i);
                return a.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }, _(w), w[r] = "Generator", w[i] = function() {
                return this
            }, w.toString = function() {
                return "[object Generator]"
            }, a.keys = function(n) {
                var r = [];
                for (var e in n) r.push(e);
                return r.reverse(),
                    function e() {
                        for (; r.length;) {
                            var t = r.pop();
                            if (t in n) return e.value = t, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, a.values = T, C.prototype = {
                constructor: C,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = d, this.done = !1, this.delegate = null, this.method = "next", this.arg = d, this.tryEntries.forEach(E), !e)
                        for (var t in this) "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = d)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(n) {
                    if (this.done) throw n;
                    var r = this;

                    function e(e, t) {
                        return o.type = "throw", o.arg = n, r.next = e, t && (r.method = "next", r.arg = d), !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var i = this.tryEntries[t],
                            o = i.completion;
                        if ("root" === i.tryLoc) return e("end");
                        if (i.tryLoc <= this.prev) {
                            var a = l.call(i, "catchLoc"),
                                s = l.call(i, "finallyLoc");
                            if (a && s) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            } else if (a) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && l.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var o = i ? i.completion : {};
                    return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, m) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), m
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r, i = n.completion;
                            return "throw" === i.type && (r = i.arg, E(n)), r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: T(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = d), m
                }
            }, a
        }(e.exports);
        try {
            regeneratorRuntime = r
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(r)
        }
    }, function(n, e) {
        function r(e, t) {
            return n.exports = r = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, r(e, t)
        }
        n.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formatAds = function(e, t) {
            var u = e.getBoundingClientRect();
            return t.ads = t.filter("ads", function(e) {
                return e.creatives = (e.creatives || []).filter(function(e) {
                    return ["nonLinear", "linear"].includes(e.type)
                }).map(function(e) {
                    var t, n, r, i, o, a, s = null;
                    switch (e.type) {
                        case "linear":
                            t = e.mediaFiles, r = (n = u) ? n.width : 640, i = t.map(function(e) {
                                return {
                                    mediaFile: e,
                                    playability: function() {
                                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                                        return e = e.trim(), [d.default.JAVASCRIPT, "application/x-javascript", "video/mp4"].includes(e) || f.canPlayType(e).length ? 2 : 0
                                    }(e.type)
                                }
                            }).filter(function(e) {
                                return (e.mediaFile.uri || "").trim().length && e.playability
                            }).sort((0, l.default)("-playability", "-mediaFile.bitrate")), o = i.map(function(e) {
                                return Math.abs(r - (e.mediaFile.width || 0))
                            }), s = (a = i[o.indexOf(Math.min.apply(Math, (0, c.default)(o)))]) ? Object.assign(a.mediaFile, {
                                playability: a.playability
                            }) : null, e.mediaFiles = [s];
                            break;
                        case "nonLinear":
                            s = function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                                    t = 1 < arguments.length ? arguments[1] : void 0;
                                return (e = e.filter(function(e) {
                                    return !(!e.scalable && (t.width < e.width || t.height < e.height)) && (e.resources = (e.resources || []).filter(function(e) {
                                        return e.playability = function(e) {
                                            switch ((e.type || "").trim()) {
                                                case "static":
                                                    switch ((e.creativeType || "").trim()) {
                                                        case "image/jpeg":
                                                        case "image/gif":
                                                        case "image/png":
                                                        case "video/mp4":
                                                            return 3;
                                                        case d.default.JAVASCRIPT:
                                                        case "application/x-javascript":
                                                            return 1;
                                                        default:
                                                            return 0
                                                    }
                                                    case "iframe":
                                                    case "html":
                                                        return 2
                                            }
                                            return 0
                                        }(e), e.data = (e.data || "").trim(), e.playability && e.data
                                    }).sort((0, l.default)("-playability")), e.resources.length && (e.playability = e.resources[0].playability), e.resources.length)
                                }).sort((0, l.default)("-playability"))).length ? e[0] : null
                            }(e.ads, u), e.ads = [s]
                    }
                    return e.playability = s ? s.playability : 0, e
                }).filter(function(e) {
                    return e.playability
                }).sort((0, l.default)("-playability")), e.playability = e.creatives.length ? e.creatives[0].playability : 0, e.playability
            }), t
        }, t.getMediaFileType = function(e) {
            var t = (0, i.trim)(e.type);
            if ("VPAID" === (0, i.trim)(e.apiFramework)) switch (t) {
                case d.default.JAVASCRIPT:
                case "application/x-javascript":
                    return "jsvpaid";
                case d.default.FLASH:
                    return "flashvpaid"
            } else {
                if ("video/x-flv" === t || "video/flv" === t) return "flv";
                if (t.startsWith("video/")) return "html5video";
                if (t.startsWith("audio")) return "html5audio"
            }
        }, t.getNonLinearAdType = function(e) {
            var t = (0, i.trim)(e.resources[0].type),
                n = (0, i.trim)(e.resources[0].creativeType);
            switch (t) {
                case "iframe":
                case "html":
                    return t;
                case "static":
                    switch (n) {
                        case "image/jpeg":
                        case "image/gif":
                        case "image/png":
                            return "static/image";
                        case "application/javascript":
                        case "application/x-javascript":
                            return "static/jsvpaid";
                        case "application/x-shockwave-flash":
                            return "static/flashvpaid"
                    }
            }
            return null
        }, t.defaultSkipHandler = function(e, t, n, r, i) {
            var o = document.createElement("button");
            o.classList.add(u.default.btn, u.default["btn-skip"], u.default.reset);
            var a = !1,
                s = setInterval(function() {
                    a && (t -= .5, o.innerText = "Пропустить рекламу через: ".concat(Math.round(t))), t <= 0 && (clearInterval(s), o.classList.add(u.default.active), o.innerText = "Пропустить рекламу", n(), o.onclick = function() {
                        o.parentNode.removeChild(o), r()
                    })
                }, 500);
            i.once("AdStarted", function() {
                e.appendChild(o), a = !0
            }), i.on("AdPaused", function() {
                return a = !1
            }), i.on("AdPlaying", function() {
                return a = !0
            })
        }, t.nonLinearCloseBtn = function(t) {
            var n = document.createElement("button");
            return n.innerHTML = "&#10005;", n.style.cssText = "z-index:1;direction:ltr;display:inline-block;width:15px;height:15px;position:absolute;top:1px;right:1px;padding:0;margin:0;font-size:13px;line-height:1;text-align:center;border:0;vertical-align:middle;color:#000;background-color:#fff;cursor:pointer;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.8);box-sizing:border-box", new Promise(function(e) {
                n.onclick = e, t.appendChild(n)
            })
        }, t.global = void 0;
        var c = r(n(18)),
            l = r(n(63)),
            d = r(n(65)),
            i = n(11),
            u = r(n(81)),
            o = window;
        t.global = o;
        var f = document.createElement("video")
    }, function(e, t, n) {
        function r(t) {
            return function(e) {
                return typeof e === t
            }
        }

        function s(o, e) {
            var a = 1,
                s = e || function(e, t) {
                    return t
                };
            return "-" === o[0] && (a = -1, o = o.substr(1)),
                function(e, t) {
                    var n, r = s(o, u.get(e, o)),
                        i = s(o, u.get(t, o));
                    return r < i && (n = -1), i < r && (n = 1), r === i && (n = 0), n * a
                }
        }

        function i() {
            var e = Array.prototype.slice.call(arguments),
                o = e.filter(r("string")),
                a = e.filter(r("function"))[0];
            return function(e, t) {
                for (var n = o.length, r = 0, i = 0; 0 === r && i < n;) r = s(o[i], a)(e, t), i++;
                return r
            }
        }
        var u = n(64);
        e.exports = i
    }, function(t, n, e) {
        var r, i, o;
        ! function(e) {
            "use strict";
            "object" == typeof t.exports ? t.exports = e() : (i = [], void 0 === (o = "function" == typeof(r = e) ? r.apply(n, i) : r) || (t.exports = o))
        }(function() {
            "use strict";
            var t = Object.prototype.toString,
                a = Object.prototype.hasOwnProperty;

            function s(e) {
                if (!e) return 1;
                if (d(e) && 0 === e.length) return 1;
                for (var t in e)
                    if (a.call(e, t)) return;
                return 1
            }

            function u(e) {
                return t.call(e)
            }

            function c(e) {
                return "number" == typeof e || "[object Number]" === u(e)
            }

            function l(e) {
                return "string" == typeof e || "[object String]" === u(e)
            }

            function d(e) {
                return "object" == typeof e && "number" == typeof e.length && "[object Array]" === u(e)
            }

            function f(e) {
                var t = parseInt(e);
                return t.toString() === e ? t : e
            }

            function p(e, t, n, r) {
                if (c(t) && (t = [t]), s(t)) return e;
                if (l(t)) return p(e, t.split("."), n, r);
                var i = f(t[0]);
                if (1 !== t.length) return void 0 === e[i] && (c(i) ? e[i] = [] : e[i] = {}), p(e[i], t.slice(1), n, r);
                var o = e[i];
                return void 0 !== o && r || (e[i] = n), o
            }
            var h = {
                ensureExists: function(e, t, n) {
                    return p(e, t, n, !0)
                }
            };
            return h.set = p, h.insert = function(e, t, n, r) {
                var i = h.get(e, t);
                r = ~~r, d(i) || (i = [], h.set(e, t, i)), i.splice(r, 0, n)
            }, h.empty = function(e, t) {
                if (s(t)) return e;
                if (!s(e)) {
                    var n, r, i, o;
                    if (!(n = h.get(e, t))) return e;
                    if (l(n)) return h.set(e, t, "");
                    if ("boolean" == typeof(o = n) || "[object Boolean]" === u(o)) return h.set(e, t, !1);
                    if (c(n)) return h.set(e, t, 0);
                    if (d(n)) n.length = 0;
                    else {
                        if ("object" != typeof(i = n) || "[object Object]" !== u(i)) return h.set(e, t, null);
                        for (r in n) a.call(n, r) && delete n[r]
                    }
                }
            }, h.push = function(e, t) {
                var n = h.get(e, t);
                d(n) || (n = [], h.set(e, t, n)), n.push.apply(n, Array.prototype.slice.call(arguments, 2))
            }, h.coalesce = function(e, t, n) {
                for (var r, i = 0, o = t.length; i < o; i++)
                    if (void 0 !== (r = h.get(e, t[i]))) return r;
                return n
            }, h.get = function(e, t, n) {
                if (c(t) && (t = [t]), s(t)) return e;
                if (s(e)) return n;
                if (l(t)) return h.get(e, t.split("."), n);
                var r = f(t[0]);
                return 1 === t.length ? void 0 === e[r] ? n : e[r] : h.get(e[r], t.slice(1), n)
            }, h.del = function e(t, n) {
                if (c(n) && (n = [n]), !s(t)) {
                    if (s(n)) return t;
                    if (l(n)) return e(t, n.split("."));
                    var r = f(n[0]),
                        i = t[r];
                    if (1 === n.length) void 0 !== i && (d(t) ? t.splice(r, 1) : delete t[r]);
                    else if (void 0 !== t[r]) return e(t[r], n.slice(1));
                    return t
                }
            }, h
        })
    }, function(e, t, n) {
        "use strict";
        var r = {
            JAVASCRIPT: "application/javascript",
            FLASH: "application/x-shockwave-flash"
        };
        Object.freeze(r), e.exports = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getRndInteger = function(e, t) {
            return e = Math.ceil(e), t = Math.floor(t) + 1, Math.floor(Math.random() * (t - e)) + e
        }, t.random = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Number.MAX_SAFE_INTEGER;
            return Math.floor(Math.random() * e)
        }, t.percent = function(e) {
            return Math.random() < e / 100
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = r(n(8)),
            a = r(n(9)),
            s = r(n(1)),
            u = r(n(2)),
            c = r(n(3)),
            l = r(n(4)),
            d = r(n(5)),
            i = r(n(12)),
            f = r(n(13)),
            p = r(n(68)),
            h = n(16);

        function A(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, d.default)(r);
                return t = i ? (e = (0, d.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, l.default)(this, t)
            }
        }
        var v = (0, f.default)("lib:observers:viewability"),
            m = {
                native: p.default.MeasurementTechniques.IntersectionObserver,
                polyfill: p.default.MeasurementTechniques.IntersectionObserverPolyfill
            },
            g = p.default.ViewabilityCriteria,
            y = function(e) {
                (0, c.default)(i, e);
                var t, n, r = A(i);

                function i(e) {
                    var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, s.default)(this, i), (t = r.call(this))._container = e, t._config = (0, h.defaults)({
                        autostart: !1,
                        techniques: [m.native],
                        viewabilityCriteria: g.MRC_VIDEO
                    }, n), t._vars = {
                        unmeasurable: null,
                        vblt: null,
                        viewport: null,
                        wasViewableCompleted: !1
                    }, t._vars.ready = new Promise(function(e) {
                        return t._vars.readyResolver = e
                    }), t._measureElement(), t._logger(), t
                }
                return (0, u.default)(i, [{
                    key: "_logger",
                    value: function() {
                        var t = this;
                        v("created new viewability observer for %o with strategy: ", this._container, this.strategy), this.once("unmeasureable", function() {
                            return v("unmeasureable container %o", t._container)
                        }), this.once("complete", function() {
                            return v("Viewable complete for container %o", t._container)
                        }), this.on("change", function(e) {
                            return v("Viewable changed for container %o. Metrics: %o", t._container, e)
                        })
                    }
                }, {
                    key: "_measureElement",
                    value: function() {
                        var u = this,
                            e = this._config,
                            t = e.autostart,
                            n = e.techniques,
                            r = e.viewabilityCriteria;
                        this.strategy = p.default.Strategies.StrategyFactory(t, n, r), this.vv = (new p.default).measureElement(this._container, this.strategy).onViewableChange(function(e) {
                            var t = e.percentViewable,
                                n = e.elementWidth,
                                r = e.elementHeight,
                                i = e.viewportWidth,
                                o = e.viewportHeight,
                                a = Math.min(Math.round(100 * t), 100),
                                s = [Math.min(n, i), Math.min(r, o)];
                            u._vars.vblt = a, u._vars.viewport = s, u._vars.readyResolver(), u.emit("change", {
                                viewability: a,
                                viewport: s
                            })
                        }).onViewableComplete(function() {
                            u._vars.wasViewableCompleted = !0, u._vars.readyResolver(), u.emit("complete")
                        }).onUnmeasureable(function() {
                            u._vars.unmeasurable = !0, u._vars.readyResolver(), u.emit("unmeasureable")
                        })
                    }
                }, {
                    key: "start",
                    value: function() {
                        if (!this._vars.unmeasurable) try {
                            this.vv.start()
                        } catch (e) {}
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.removeAllListeners(), this.vv.dispose()
                    }
                }, {
                    key: "bindMRC",
                    value: (n = (0, a.default)(o.default.mark(function e() {
                        var t = this;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.ready;
                                case 2:
                                    if (this.unmeasurable) throw "unmeasurable";
                                    e.next = 4;
                                    break;
                                case 4:
                                    if (this._vars.wasViewableCompleted) return e.abrupt("return");
                                    e.next = 6;
                                    break;
                                case 6:
                                    return e.abrupt("return", new Promise(function(e) {
                                        return t.once("complete", e)
                                    }));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "awaitForVisibleIfPossible",
                    value: (t = (0, a.default)(o.default.mark(function e(t) {
                        var r, i = this,
                            n = arguments;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = 1 < n.length && void 0 !== n[1] ? n[1] : 1, e.next = 3, this.ready;
                                case 3:
                                    if (this.unmeasurable) return e.abrupt("return", !1);
                                    e.next = 5;
                                    break;
                                case 5:
                                    if (this.viewability > r) return e.abrupt("return", this.viewability);
                                    e.next = 7;
                                    break;
                                case 7:
                                    return e.abrupt("return", new Promise(function(n, e) {
                                        t && setTimeout(e, t), i.on("change", function(e) {
                                            var t = e.viewability;
                                            return r < t && n(t)
                                        })
                                    }));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function(e) {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "unmeasurable",
                    get: function() {
                        return this._vars.unmeasurable
                    }
                }, {
                    key: "viewability",
                    get: function() {
                        return this.unmeasurable ? null : this._vars.vblt
                    }
                }, {
                    key: "viewport",
                    get: function() {
                        return this.unmeasurable ? null : this._vars.viewport
                    }
                }, {
                    key: "ready",
                    get: function() {
                        return this._vars.ready
                    }
                }]), i
            }(i.default);
        (t.default = y).MeasurementTechniques = m, y.ViewabilityCriteria = g
    }, function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = i(n(1)),
            a = i(n(2)),
            s = r(n(30)),
            u = i(n(31)),
            c = r(n(20)),
            l = i(n(71)),
            d = r(n(35)),
            f = r(n(32)),
            p = function() {
                function e() {
                    (0, o.default)(this, e), this.executors = []
                }
                return (0, a.default)(e, [{
                    key: "measureElement",
                    value: function(e, t) {
                        var n = new l.default(e, t);
                        return this.executors.push(n), n
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.executors.forEach(function(e) {
                            return e.dispose()
                        })
                    }
                }]), e
            }();
        (t.default = p).ViewabilityCriteria = d, p.MeasurementExecutor = l.default, p.MeasurementTechniques = f, p.InViewTimer = u.default, p.Strategies = c, p.Events = s
    }, function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = i(n(1)),
            a = i(n(2)),
            s = i(n(3)),
            u = i(n(4)),
            c = i(n(5)),
            l = i(n(33));
        n(70);
        var d = r(n(34));

        function f(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, c.default)(r);
                return t = i ? (e = (0, c.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, u.default)(this, t)
            }
        }
        var p = function(e) {
            (0, s.default)(n, e);
            var t = f(n);

            function n() {
                return (0, o.default)(this, n), t.apply(this, arguments)
            }
            return (0, a.default)(n, [{
                key: "unmeasureable",
                get: function() {
                    return d.iFrameContext() === d.iFrameServingScenarios.CROSS_DOMAIN_IFRAME
                }
            }, {
                key: "techniqueName",
                get: function() {
                    return "IntersectionObserverPolyFill"
                }
            }]), n
        }(l.default);
        t.default = p
    }, function(e, t) {
        ! function(A, v) {
            "use strict";
            var t;

            function c(e) {
                this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || o(), this.isIntersecting = !!e.intersectionRect;
                var t = this.boundingClientRect,
                    n = t.width * t.height,
                    r = this.intersectionRect,
                    i = r.width * r.height;
                this.intersectionRatio = n ? i / n : this.isIntersecting ? 1 : 0
            }

            function e(e, t) {
                var n, r, i, o = t || {};
                if ("function" != typeof e) throw new Error("callback must be a function");
                if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
                this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function() {
                    i = i || setTimeout(function() {
                        n(), i = null
                    }, r)
                }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
                    return e.value + e.unit
                }).join(" ")
            }

            function n(e, t, n, r) {
                "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
            }

            function r(e, t, n, r) {
                "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
            }

            function m(e) {
                var t;
                try {
                    t = e.getBoundingClientRect()
                } catch (e) {}
                return t ? (t.width && t.height || (t = {
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }), t) : o()
            }

            function o() {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }

            function i(e, t) {
                for (var n = t; n;) {
                    if (n == e) return !0;
                    n = g(n)
                }
                return !1
            }

            function g(e) {
                var t = e.parentNode;
                return t && 11 == t.nodeType && t.host ? t.host : t
            }
            "IntersectionObserver" in A && "IntersectionObserverEntry" in A && "intersectionRatio" in A.IntersectionObserverEntry.prototype || (t = [], e.prototype.THROTTLE_TIMEOUT = 100, e.prototype.POLL_INTERVAL = null, e.prototype.observe = function(t) {
                if (!this._observationTargets.some(function(e) {
                        return e.element == t
                    })) {
                    if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                    this._registerInstance(), this._observationTargets.push({
                        element: t,
                        entry: null
                    }), this._monitorIntersections()
                }
            }, e.prototype.unobserve = function(t) {
                this._observationTargets = this._observationTargets.filter(function(e) {
                    return e.element != t
                }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
            }, e.prototype.disconnect = function() {
                this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
            }, e.prototype.takeRecords = function() {
                var e = this._queuedEntries.slice();
                return this._queuedEntries = [], e
            }, e.prototype._initThresholds = function(e) {
                var t = e || [0];
                return Array.isArray(t) || (t = [t]), t.sort().filter(function(e, t, n) {
                    if ("number" != typeof e || isNaN(e) || e < 0 || 1 < e) throw new Error("threshold must be a number between 0 and 1 inclusively");
                    return e !== n[t - 1]
                })
            }, e.prototype._parseRootMargin = function(e) {
                var t = (e || "0px").split(/\s+/).map(function(e) {
                    var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                    if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                    return {
                        value: parseFloat(t[1]),
                        unit: t[2]
                    }
                });
                return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
            }, e.prototype._monitorIntersections = function() {
                this._monitoringIntersections || (this._monitoringIntersections = !0, this._checkForIntersections(), this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (n(A, "resize", this._checkForIntersections, !0), n(v, "scroll", this._checkForIntersections, !0), "MutationObserver" in A && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(v, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }))))
            }, e.prototype._unmonitorIntersections = function() {
                this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, r(A, "resize", this._checkForIntersections, !0), r(v, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
            }, e.prototype._checkForIntersections = function() {
                var s = this._rootIsInDom(),
                    u = s ? this._getRootRect() : o();
                this._observationTargets.forEach(function(e) {
                    var t = e.element,
                        n = m(t),
                        r = this._rootContainsTarget(t),
                        i = e.entry,
                        o = s && r && this._computeTargetAndRootIntersection(t, u),
                        a = e.entry = new c({
                            time: A.performance && performance.now && performance.now(),
                            target: t,
                            boundingClientRect: n,
                            rootBounds: u,
                            intersectionRect: o
                        });
                    i ? s && r ? this._hasCrossedThreshold(i, a) && this._queuedEntries.push(a) : i && i.isIntersecting && this._queuedEntries.push(a) : this._queuedEntries.push(a)
                }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
            }, e.prototype._computeTargetAndRootIntersection = function(e, t) {
                if ("none" != A.getComputedStyle(e).display) {
                    for (var n, r, i, o, a, s, u, c, l = m(e), d = g(e), f = !1; !f;) {
                        var p = null,
                            h = 1 == d.nodeType ? A.getComputedStyle(d) : {};
                        if ("none" == h.display) return;
                        if (d == this.root || d == v ? (f = !0, p = t) : d != v.body && d != v.documentElement && "visible" != h.overflow && (p = m(d)), p && (n = p, r = l, 0, i = Math.max(n.top, r.top), o = Math.min(n.bottom, r.bottom), a = Math.max(n.left, r.left), s = Math.min(n.right, r.right), c = o - i, !(l = 0 <= (u = s - a) && 0 <= c && {
                                top: i,
                                bottom: o,
                                left: a,
                                right: s,
                                width: u,
                                height: c
                            }))) break;
                        d = g(d)
                    }
                    return l
                }
            }, e.prototype._getRootRect = function() {
                var e, t, n;
                return n = this.root ? m(this.root) : (e = v.documentElement, t = v.body, {
                    top: 0,
                    left: 0,
                    right: e.clientWidth || t.clientWidth,
                    width: e.clientWidth || t.clientWidth,
                    bottom: e.clientHeight || t.clientHeight,
                    height: e.clientHeight || t.clientHeight
                }), this._expandRectByRootMargin(n)
            }, e.prototype._expandRectByRootMargin = function(n) {
                var e = this._rootMarginValues.map(function(e, t) {
                        return "px" == e.unit ? e.value : e.value * (t % 2 ? n.width : n.height) / 100
                    }),
                    t = {
                        top: n.top - e[0],
                        right: n.right + e[1],
                        bottom: n.bottom + e[2],
                        left: n.left - e[3]
                    };
                return t.width = t.right - t.left, t.height = t.bottom - t.top, t
            }, e.prototype._hasCrossedThreshold = function(e, t) {
                var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                    r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                if (n !== r)
                    for (var i = 0; i < this.thresholds.length; i++) {
                        var o = this.thresholds[i];
                        if (o == n || o == r || o < n != o < r) return !0
                    }
            }, e.prototype._rootIsInDom = function() {
                return !this.root || i(v, this.root)
            }, e.prototype._rootContainsTarget = function(e) {
                return i(this.root || v, e)
            }, e.prototype._registerInstance = function() {
                t.indexOf(this) < 0 && t.push(this)
            }, e.prototype._unregisterInstance = function() {
                var e = t.indexOf(this); - 1 != e && t.splice(e, 1)
            }, A.IntersectionObserver = e, A.IntersectionObserverEntry = c)
        }(window, document)
    }, function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = i(n(1)),
            a = i(n(2)),
            s = i(n(31)),
            u = n(20),
            c = n(21),
            l = r(n(34)),
            d = r(n(30)),
            f = function() {
                function i(e) {
                    var t = this,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, o.default)(this, i), this._listeners = {
                        start: [],
                        stop: [],
                        change: [],
                        complete: [],
                        unmeasureable: []
                    }, this._element = e, this._strategy = Object.assign({}, u.DEFAULT_STRATEGY, n);
                    var r = (this._criteriaMet = !1, c.validateStrategy)(this._strategy);
                    if (r.invalid) throw r.reasons;
                    this._technique = this._selectTechnique(this._strategy.techniques), this._technique && this._addSubscriptions(this._technique), this.unmeasureable ? setTimeout(function() {
                        return t._publish(d.UNMEASUREABLE, l.getDetails(t._element))
                    }, 0) : this._strategy.autostart && this._technique.start()
                }
                return (0, a.default)(i, [{
                    key: "start",
                    value: function() {
                        this._technique.start()
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this._technique && this._technique.dispose(), this.timer && this.timer.dispose()
                    }
                }, {
                    key: "onViewableStart",
                    value: function(e) {
                        return this._addCallback(e, d.START)
                    }
                }, {
                    key: "onViewableStop",
                    value: function(e) {
                        return this._addCallback(e, d.STOP)
                    }
                }, {
                    key: "onViewableChange",
                    value: function(e) {
                        return this._addCallback(e, d.CHANGE)
                    }
                }, {
                    key: "onViewableComplete",
                    value: function(e) {
                        return this._addCallback(e, d.COMPLETE), this.criteriaMet && this._techniqueChange(d.COMPLETE, this._technique), this
                    }
                }, {
                    key: "onUnmeasureable",
                    value: function(e) {
                        return this._addCallback(e, d.UNMEASUREABLE), this.unmeasureable && this._techniqueChange(d.UNMEASUREABLE), this
                    }
                }, {
                    key: "_selectTechnique",
                    value: function(e) {
                        return e.filter(c.validTechnique).map(this._instantiateTechnique.bind(this)).find(function(e) {
                            return !e.unmeasureable
                        })
                    }
                }, {
                    key: "_instantiateTechnique",
                    value: function(e) {
                        return new e(this._element, this._strategy.criteria)
                    }
                }, {
                    key: "_addSubscriptions",
                    value: function(e) {
                        e && (e.onInView(this._techniqueChange.bind(this, d.INVIEW, e)), e.onChangeView(this._techniqueChange.bind(this, d.CHANGE, e)), e.onOutView(this._techniqueChange.bind(this, d.OUTVIEW, e)))
                    }
                }, {
                    key: "_techniqueChange",
                    value: function(e, t) {
                        var n, r = 1 < arguments.length && void 0 !== t ? t : {},
                            i = this._appendEnvironment(r);
                        switch (e) {
                            case d.INVIEW:
                                this._criteriaMet || (this.timer = new s.default(this._strategy.criteria.timeInView), this.timer.elapsed(this._timerElapsed.bind(this, r)), this.timer.start(), n = d.START);
                                break;
                            case d.CHANGE:
                                n = e;
                                break;
                            case d.COMPLETE:
                                this._criteriaMet || (this._criteriaMet = !0, n = e);
                                break;
                            case d.OUTVIEW:
                                this._criteriaMet || (this.timer && (this.timer.stop(), delete this.timer), n = d.STOP);
                                break;
                            case d.UNMEASUREABLE:
                                n = d.UNMEASUREABLE
                        }
                        n && this._publish(n, i)
                    }
                }, {
                    key: "_publish",
                    value: function(e, t) {
                        Array.isArray(this._listeners[e]) && this._listeners[e].forEach(function(e) {
                            return e(t)
                        })
                    }
                }, {
                    key: "_timerElapsed",
                    value: function(e) {
                        this._techniqueChange(d.COMPLETE, e)
                    }
                }, {
                    key: "_addCallback",
                    value: function(e, t) {
                        if (this._listeners[t] && "function" == typeof e) this._listeners[t].push(e);
                        else if ("function" != typeof e) throw "Callback must be a function";
                        return this
                    }
                }, {
                    key: "_appendEnvironment",
                    value: function(e) {
                        return Object.assign({}, {
                            percentViewable: void 0 === e.percentViewable ? -1 : e.percentViewable,
                            technique: e.techniqueName || -1,
                            viewable: void 0 === e.viewable ? -1 : e.viewable
                        }, l.getDetails(this._element))
                    }
                }, {
                    key: "unmeasureable",
                    get: function() {
                        return !this._technique || this._technique.unmeasureable
                    }
                }]), i
            }();
        t.default = f
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.anyEmitted = function(n) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
            return new Promise(function(t) {
                return e.forEach(function(e) {
                    return n.once(e, t)
                })
            })
        }, t.allEmitted = function(n) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
            return Promise.all(e.map(function(t) {
                return new Promise(function(e) {
                    return n.once(t, e)
                })
            }))
        }, t.EventProxy = void 0;
        var o = r(n(1)),
            a = r(n(2));
        var i = function() {
            function i(e) {
                (0, o.default)(this, i), this.events = e.slice(), this.__private__ = {
                    target: null,
                    source: null
                }
            }
            return (0, a.default)(i, [{
                key: "from",
                value: function(e) {
                    return this.__private__.source = e, this.__private__.target && i._init(e, this.__private__.target, this.events), this
                }
            }, {
                key: "to",
                value: function(e) {
                    return this.__private__.target = e, this.__private__.source && i._init(this.__private__.source, e, this.events), this
                }
            }], [{
                key: "_init",
                value: function(t, n, r) {
                    r.forEach(function(e) {
                        0 < n.listeners(e).length && i._proxy(e, t, n)
                    }), n.on("newListener", function(e) {
                        -1 < r.indexOf(e) && n.listeners(e).length < 1 && i._proxy(e, t, n)
                    })
                }
            }, {
                key: "_proxy",
                value: function(r, e, i) {
                    e.on(r, function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        i.emit.apply(i, [r].concat(t))
                    })
                }
            }]), i
        }();
        t.EventProxy = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.wrapAsyncPromiseExecutor = function(n) {
            return function(e, t) {
                n(e, t).catch(t)
            }
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getErrorMessage = function(e) {
            if ("string" == typeof e) return e;
            if (400 <= (0, r.get)(e, "response.status")) return (0, r.get)(e, "response.status");
            if (e.message) return e.message;

            function t(e) {
                return null != e && ("number" == typeof e ? e.toString() : !("string" != typeof e || !e.length) && e)
            }
            return t(t(e.code)) || t((0, r.get)(e, "request.status")) || t((0, r.get)(e, "request.status_code")) || JSON.stringify(e)
        }, t.hidePromiseError = function(e) {
            return e.catch(function() {}), e
        };
        var r = n(16)
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.VIDEO_BAIT_DATA = void 0;
        var a = r(n(8)),
            i = r(n(9)),
            o = r(n(76)),
            s = r(n(79)),
            u = n(15),
            c = (0, r(n(13)).default)("lib:checker:autoplay"),
            l = s.default.browser.name,
            d = parseInt(s.default.browser.major),
            f = s.default.os.name,
            p = s.default.device.type,
            h = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAyFtZGF03gIATGF2YzU4LjExLjEwMQBCQY2QGNkBjgAAAqAGBf//nNxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNTUgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDE4IC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MSByZWY9MyBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgzOjB4MTEzIG1lPWhleCBzdWJtZT03IHBzeT0xIHBzeV9yZD0xLjAwOjAuMDAgbWl4ZWRfcmVmPTEgbWVfcmFuZ2U9MTYgY2hyb21hX21lPTEgdHJlbGxpcz0xIDh4OGRjdD0xIGNxbT0wIGRlYWR6b25lPTIxLDExIGZhc3RfcHNraXA9MSBjaHJvbWFfcXBfb2Zmc2V0PS0yIHRocmVhZHM9MSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MiBrZXlpbnQ9MjUwIGtleWludF9taW49MjMgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIzLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAATZYiEAN/UwLmKbUOy/HPe7/dRHyFBbGyBAgQI2QIECBHAIUHabIECBGyBAgRwAAAAC0GaIWNg+FEV/7OAIUHYbIECBAjZAgQIEcAhQdo8iQIELEEJAgQscAAABW1tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAaAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAACS3RyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAVAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAABMtEAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAFQAAAAAAAEAAAAAAcNtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAF3AAAAH0lXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAFubWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABLnN0YmwAAACqc3RzZAAAAAAAAAABAAAAmmF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAABAACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAA0YXZjQwFkAAr/4QAbZ2QACqzZX54j/wFAAQsQAAA+kAALuADxIllgAQAGaOvjyyLAAAAAEHBhc3AAAAFAAAABCwAAABhzdHRzAAAAAAAAAAEAAAACAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABxzdHN6AAAAAAAAAAAAAAACAAACuwAAAA8AAAAYc3RjbwAAAAAAAAACAAAASQAAAx4AAAJNdHJhawAAAFx0a2hkAAAAAwAAAAAAAAAAAAAAAgAAAAAAAABoAAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAJGVkdHMAAAAcZWxzdAAAAAAAAAABAAAAUAAABAAAAQAAAAABxW1kaWEAAAAgbWRoZAAAAAAAAAAAAAAAAAAArEQAABHISrMAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAXBtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAATRzdGJsAAAAanN0c2QAAAAAAAAAAQAAAFptcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADZlc2RzAAAAAAOAgIAlAAIABICAgBdAFQAAAAAAF+oAABfqBYCAgAUSEFblAAaAgIABAgAAACBzdHRzAAAAAAAAAAIAAAAEAAAEAAAAAAEAAAHIAAAAKHN0c2MAAAAAAAAAAgAAAAEAAAABAAAAAQAAAAIAAAACAAAAAQAAAChzdHN6AAAAAAAAAAAAAAAFAAAAGQAAAA4AAAAMAAAADgAAAA4AAAAcc3RjbwAAAAAAAAADAAAAMAAAAwQAAAMtAAAAGnNncGQBAAAAcm9sbAAAAAIAAAAB//8AAAAcc2JncAAAAAByb2xsAAAAAQAAAAUAAAABAAAAYXVkdGEAAABZbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAsaWxzdAAAACSpdG9vAAAAHGRhdGEAAAABAAAAAExhdmY1OC45LjEwMA==";
        t.VIDEO_BAIT_DATA = h;
        var A, v = !1,
            m = (0, o.default)("autoplay_" + window.location.host),
            g = function() {
                return window[m]
            },
            y = function() {
                return window[m] = !0
            };

        function b() {
            return (b = (0, i.default)(a.default.mark(function e() {
                var t, n, r, i, o;
                return a.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (c("start checking..."), t = function() {
                                    return c("autoplay is not allowed now"), new Error("autoplay is not allowed now")
                                }, n = function() {
                                    return y(), c("autoplay is allowed"), Promise.resolve("autoplay is allowed")
                                }, g()) return e.abrupt("return", n());
                            e.next = 5;
                            break;
                        case 5:
                            if (v) throw t();
                            e.next = 7;
                            break;
                        case 7:
                            if ("smarttv" === p) return e.abrupt("return", n());
                            e.next = 9;
                            break;
                        case 9:
                            if ("mobile" === p || "iOS" === f) throw t();
                            e.next = 11;
                            break;
                        case 11:
                            if ("Safari" === l && 11 === d) throw t();
                            e.next = 13;
                            break;
                        case 13:
                            if ("Chrome" === l && d < 66) return e.abrupt("return", n());
                            e.next = 15;
                            break;
                        case 15:
                            if ("Opera" === l && d < 54) return e.abrupt("return", n());
                            e.next = 17;
                            break;
                        case 17:
                            return c("await for document ready"), e.next = 20, (0, u.waitForReady)();
                        case 20:
                            if (c("document is ready for interaction now"), c("creating video bait"), (r = document.createElement("video")).src = h, r.style.display = "none", r.style.opacity = 0, r.style.position = "absolute", r.setAttribute("webkit-playsinline", !0), r.setAttribute("playsinline", !0), r.setAttribute("x-webkit-playsinline", !0), document.body.appendChild(r), (0, u.isNative)(HTMLVideoElement.prototype.play) || (c("Warning! HTMLVideoElement.prototype.play has been override"), c("try to restore..."), (i = document.createElement("iframe")).style.display = "none", document.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), r.play = i.contentWindow.HTMLVideoElement.prototype.play, (0, u.isNative)(r.play) ? c("restored") : c("restore was failed"), i.parentNode.removeChild(i)), (o = r.play()) && o instanceof Promise) return e.prev = 34, e.next = 37, o;
                            e.next = 46;
                            break;
                        case 37:
                            e.next = 43;
                            break;
                        case 39:
                            throw e.prev = 39, e.t0 = e.catch(34), "Safari" === l && 12 === d && (v = !0), t();
                        case 43:
                            return e.prev = 43, document.body.removeChild(r), e.finish(43);
                        case 46:
                            return e.abrupt("return", n());
                        case 47:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [34, 39, 43, 46]
                ])
            }))).apply(this, arguments)
        }
        t.default = function() {
            return A || ((A = function() {
                return b.apply(this, arguments)
            }()).finally(function() {
                return A = null
            }), A)
        }
    }, function(e, t, n) {
        var m, g, y, b, w;
        m = n(77), g = n(36).utf8, y = n(78), b = n(36).bin, (w = function(e, t) {
            e.constructor == String ? e = t && "binary" === t.encoding ? b.stringToBytes(e) : g.stringToBytes(e) : y(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
            for (var n = m.bytesToWords(e), r = 8 * e.length, i = 1732584193, o = -271733879, a = -1732584194, s = 271733878, u = 0; u < n.length; u++) n[u] = 16711935 & (n[u] << 8 | n[u] >>> 24) | 4278255360 & (n[u] << 24 | n[u] >>> 8);
            n[r >>> 5] |= 128 << r % 32, n[14 + (64 + r >>> 9 << 4)] = r;
            for (var c = w._ff, l = w._gg, d = w._hh, f = w._ii, u = 0; u < n.length; u += 16) {
                var p = i,
                    h = o,
                    A = a,
                    v = s,
                    i = c(i, o, a, s, n[u + 0], 7, -680876936),
                    s = c(s, i, o, a, n[u + 1], 12, -389564586),
                    a = c(a, s, i, o, n[u + 2], 17, 606105819),
                    o = c(o, a, s, i, n[u + 3], 22, -1044525330);
                i = c(i, o, a, s, n[u + 4], 7, -176418897), s = c(s, i, o, a, n[u + 5], 12, 1200080426), a = c(a, s, i, o, n[u + 6], 17, -1473231341), o = c(o, a, s, i, n[u + 7], 22, -45705983), i = c(i, o, a, s, n[u + 8], 7, 1770035416), s = c(s, i, o, a, n[u + 9], 12, -1958414417), a = c(a, s, i, o, n[u + 10], 17, -42063), o = c(o, a, s, i, n[u + 11], 22, -1990404162), i = c(i, o, a, s, n[u + 12], 7, 1804603682), s = c(s, i, o, a, n[u + 13], 12, -40341101), a = c(a, s, i, o, n[u + 14], 17, -1502002290), i = l(i, o = c(o, a, s, i, n[u + 15], 22, 1236535329), a, s, n[u + 1], 5, -165796510), s = l(s, i, o, a, n[u + 6], 9, -1069501632), a = l(a, s, i, o, n[u + 11], 14, 643717713), o = l(o, a, s, i, n[u + 0], 20, -373897302), i = l(i, o, a, s, n[u + 5], 5, -701558691), s = l(s, i, o, a, n[u + 10], 9, 38016083), a = l(a, s, i, o, n[u + 15], 14, -660478335), o = l(o, a, s, i, n[u + 4], 20, -405537848), i = l(i, o, a, s, n[u + 9], 5, 568446438), s = l(s, i, o, a, n[u + 14], 9, -1019803690), a = l(a, s, i, o, n[u + 3], 14, -187363961), o = l(o, a, s, i, n[u + 8], 20, 1163531501), i = l(i, o, a, s, n[u + 13], 5, -1444681467), s = l(s, i, o, a, n[u + 2], 9, -51403784), a = l(a, s, i, o, n[u + 7], 14, 1735328473), i = d(i, o = l(o, a, s, i, n[u + 12], 20, -1926607734), a, s, n[u + 5], 4, -378558), s = d(s, i, o, a, n[u + 8], 11, -2022574463), a = d(a, s, i, o, n[u + 11], 16, 1839030562), o = d(o, a, s, i, n[u + 14], 23, -35309556), i = d(i, o, a, s, n[u + 1], 4, -1530992060), s = d(s, i, o, a, n[u + 4], 11, 1272893353), a = d(a, s, i, o, n[u + 7], 16, -155497632), o = d(o, a, s, i, n[u + 10], 23, -1094730640), i = d(i, o, a, s, n[u + 13], 4, 681279174), s = d(s, i, o, a, n[u + 0], 11, -358537222), a = d(a, s, i, o, n[u + 3], 16, -722521979), o = d(o, a, s, i, n[u + 6], 23, 76029189), i = d(i, o, a, s, n[u + 9], 4, -640364487), s = d(s, i, o, a, n[u + 12], 11, -421815835), a = d(a, s, i, o, n[u + 15], 16, 530742520), i = f(i, o = d(o, a, s, i, n[u + 2], 23, -995338651), a, s, n[u + 0], 6, -198630844), s = f(s, i, o, a, n[u + 7], 10, 1126891415), a = f(a, s, i, o, n[u + 14], 15, -1416354905), o = f(o, a, s, i, n[u + 5], 21, -57434055), i = f(i, o, a, s, n[u + 12], 6, 1700485571), s = f(s, i, o, a, n[u + 3], 10, -1894986606), a = f(a, s, i, o, n[u + 10], 15, -1051523), o = f(o, a, s, i, n[u + 1], 21, -2054922799), i = f(i, o, a, s, n[u + 8], 6, 1873313359), s = f(s, i, o, a, n[u + 15], 10, -30611744), a = f(a, s, i, o, n[u + 6], 15, -1560198380), o = f(o, a, s, i, n[u + 13], 21, 1309151649), i = f(i, o, a, s, n[u + 4], 6, -145523070), s = f(s, i, o, a, n[u + 11], 10, -1120210379), a = f(a, s, i, o, n[u + 2], 15, 718787259), o = f(o, a, s, i, n[u + 9], 21, -343485551), i = i + p >>> 0, o = o + h >>> 0, a = a + A >>> 0, s = s + v >>> 0
            }
            return m.endian([i, o, a, s])
        })._ff = function(e, t, n, r, i, o, a) {
            var s = e + (t & n | ~t & r) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, w._gg = function(e, t, n, r, i, o, a) {
            var s = e + (t & r | n & ~r) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, w._hh = function(e, t, n, r, i, o, a) {
            var s = e + (t ^ n ^ r) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, w._ii = function(e, t, n, r, i, o, a) {
            var s = e + (n ^ (t | ~r)) + (i >>> 0) + a;
            return (s << o | s >>> 32 - o) + t
        }, w._blocksize = 16, w._digestsize = 16, e.exports = function(e, t) {
            if (null == e) throw new Error("Illegal argument " + e);
            var n = m.wordsToBytes(w(e, t));
            return t && t.asBytes ? n : t && t.asString ? b.bytesToString(n) : m.bytesToHex(n)
        }
    }, function(e, t) {
        var o, n;
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
            rotl: function(e, t) {
                return e << t | e >>> 32 - t
            },
            rotr: function(e, t) {
                return e << 32 - t | e >>> t
            },
            endian: function(e) {
                if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                return e
            },
            randomBytes: function(e) {
                for (var t = []; 0 < e; e--) t.push(Math.floor(256 * Math.random()));
                return t
            },
            bytesToWords: function(e) {
                for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                return t
            },
            wordsToBytes: function(e) {
                for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                return t
            },
            bytesToHex: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                return t.join("")
            },
            hexToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                return t
            },
            bytesToBase64: function(e) {
                for (var t = [], n = 0; n < e.length; n += 3)
                    for (var r = e[n] << 16 | e[n + 1] << 8 | e[n + 2], i = 0; i < 4; i++) 8 * n + 6 * i <= 8 * e.length ? t.push(o.charAt(r >>> 6 * (3 - i) & 63)) : t.push("=");
                return t.join("")
            },
            base64ToBytes: function(e) {
                e = e.replace(/[^A-Z0-9+\/]/gi, "");
                for (var t = [], n = 0, r = 0; n < e.length; r = ++n % 4) 0 != r && t.push((o.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | o.indexOf(e.charAt(n)) >>> 6 - 2 * r);
                return t
            }
        }, e.exports = n
    }, function(e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        e.exports = function(e) {
            return null != e && (n(e) || "function" == typeof(t = e).readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0)) || !!e._isBuffer);
            var t
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = r(n(80)),
            o = (0, r(n(13)).default)("lib:useragent"),
            a = (new i.default).getResult(); - 1 !== a.ua.toLowerCase().indexOf("smarttv") && (a.device.type = "smarttv"), a.device.type || (a.device.type = "desktop"), o("parsed: %o", a), t.default = a
    }, function(_, x, k) {
        var E;
        ! function(i, d) {
            "use strict";
            var f = "function",
                e = "undefined",
                t = "model",
                n = "name",
                r = "type",
                o = "vendor",
                a = "version",
                s = "architecture",
                u = "console",
                c = "mobile",
                l = "tablet",
                p = "smarttv",
                h = "wearable",
                A = {
                    extend: function(e, t) {
                        var n = {};
                        for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                        return n
                    },
                    has: function(e, t) {
                        return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                    },
                    lowerize: function(e) {
                        return e.toLowerCase()
                    },
                    major: function(e) {
                        return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : d
                    },
                    trim: function(e) {
                        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                v = {
                    rgx: function(e, t) {
                        for (var n, r, i, o, a, s = 0; s < t.length && !o;) {
                            for (var u = t[s], c = t[s + 1], l = n = 0; l < u.length && !o;)
                                if (o = u[l++].exec(e))
                                    for (r = 0; r < c.length; r++) a = o[++n], "object" == typeof(i = c[r]) && 0 < i.length ? 2 == i.length ? typeof i[1] == f ? this[i[0]] = i[1].call(this, a) : this[i[0]] = i[1] : 3 == i.length ? typeof i[1] != f || i[1].exec && i[1].test ? this[i[0]] = a ? a.replace(i[1], i[2]) : d : this[i[0]] = a ? i[1].call(this, a, i[2]) : d : 4 == i.length && (this[i[0]] = a ? i[3].call(this, a.replace(i[1], i[2])) : d) : this[i] = a || d;
                            s += 2
                        }
                    },
                    str: function(e, t) {
                        for (var n in t)
                            if ("object" == typeof t[n] && 0 < t[n].length) {
                                for (var r = 0; r < t[n].length; r++)
                                    if (A.has(t[n][r], e)) return "?" === n ? d : n
                            } else if (A.has(t[n], e)) return "?" === n ? d : n;
                        return e
                    }
                },
                m = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                },
                g = {
                    browser: [
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                        [n, a],
                        [/(opios)[\/\s]+([\w\.]+)/i],
                        [
                            [n, "Opera Mini"], a
                        ],
                        [/\s(opr)\/([\w\.]+)/i],
                        [
                            [n, "Opera"], a
                        ],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                        [n, a],
                        [/(konqueror)\/([\w\.]+)/i],
                        [
                            [n, "Konqueror"], a
                        ],
                        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                        [
                            [n, "IE"], a
                        ],
                        [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                        [
                            [n, "Edge"], a
                        ],
                        [/(yabrowser)\/([\w\.]+)/i],
                        [
                            [n, "Yandex"], a
                        ],
                        [/(Avast)\/([\w\.]+)/i],
                        [
                            [n, "Avast Secure Browser"], a
                        ],
                        [/(AVG)\/([\w\.]+)/i],
                        [
                            [n, "AVG Secure Browser"], a
                        ],
                        [/(puffin)\/([\w\.]+)/i],
                        [
                            [n, "Puffin"], a
                        ],
                        [/(focus)\/([\w\.]+)/i],
                        [
                            [n, "Firefox Focus"], a
                        ],
                        [/(opt)\/([\w\.]+)/i],
                        [
                            [n, "Opera Touch"], a
                        ],
                        [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                        [
                            [n, "UCBrowser"], a
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [n, /_/g, " "], a
                        ],
                        [/(windowswechat qbcore)\/([\w\.]+)/i],
                        [
                            [n, "WeChat(Win) Desktop"], a
                        ],
                        [/(micromessenger)\/([\w\.]+)/i],
                        [
                            [n, "WeChat"], a
                        ],
                        [/(brave)\/([\w\.]+)/i],
                        [
                            [n, "Brave"], a
                        ],
                        [/(qqbrowserlite)\/([\w\.]+)/i],
                        [n, a],
                        [/(QQ)\/([\d\.]+)/i],
                        [n, a],
                        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                        [n, a],
                        [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                        [n, a],
                        [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                        [n, a],
                        [/(MetaSr)[\/\s]?([\w\.]+)/i],
                        [n],
                        [/(LBBROWSER)/i],
                        [n],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [a, [n, "MIUI Browser"]],
                        [/;fbav\/([\w\.]+);/i],
                        [a, [n, "Facebook"]],
                        [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                        [n, a],
                        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        [a, [n, "Chrome Headless"]],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [n, /(.+)/, "$1 WebView"], a
                        ],
                        [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                        [
                            [n, /(.+(?:g|us))(.+)/, "$1 $2"], a
                        ],
                        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                        [a, [n, "Android Browser"]],
                        [/(sailfishbrowser)\/([\w\.]+)/i],
                        [
                            [n, "Sailfish Browser"], a
                        ],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        [n, a],
                        [/(dolfin)\/([\w\.]+)/i],
                        [
                            [n, "Dolphin"], a
                        ],
                        [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                        [
                            [n, "360 Browser"]
                        ],
                        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                        [
                            [n, "Chrome"], a
                        ],
                        [/(coast)\/([\w\.]+)/i],
                        [
                            [n, "Opera Coast"], a
                        ],
                        [/fxios\/([\w\.-]+)/i],
                        [a, [n, "Firefox"]],
                        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                        [a, [n, "Mobile Safari"]],
                        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                        [a, n],
                        [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [
                            [n, "GSA"], a
                        ],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [n, [a, v.str, m.browser.oldsafari.version]],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [n, a],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [n, "Netscape"], a
                        ],
                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [n, a]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            [s, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [s, A.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [s, "ia32"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            [s, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            [s, /ower/, "", A.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [s, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                        [
                            [s, A.lowerize]
                        ]
                    ],
                    device: [
                        [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                        [t, o, [r, l]],
                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                        [t, [o, "Apple"],
                            [r, l]
                        ],
                        [/(apple\s{0,1}tv)/i],
                        [
                            [t, "Apple TV"],
                            [o, "Apple"],
                            [r, p]
                        ],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                        [o, t, [r, l]],
                        [/(kf[A-z]+)\sbuild\/.+silk\//i],
                        [t, [o, "Amazon"],
                            [r, l]
                        ],
                        [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                        [
                            [t, v.str, m.device.amazon.model],
                            [o, "Amazon"],
                            [r, c]
                        ],
                        [/android.+aft([bms])\sbuild/i],
                        [t, [o, "Amazon"],
                            [r, p]
                        ],
                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                        [t, o, [r, c]],
                        [/\((ip[honed|\s\w*]+);/i],
                        [t, [o, "Apple"],
                            [r, c]
                        ],
                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                        [o, t, [r, c]],
                        [/\(bb10;\s(\w+)/i],
                        [t, [o, "BlackBerry"],
                            [r, c]
                        ],
                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                        [t, [o, "Asus"],
                            [r, l]
                        ],
                        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                        [
                            [o, "Sony"],
                            [t, "Xperia Tablet"],
                            [r, l]
                        ],
                        [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [t, [o, "Sony"],
                            [r, c]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                        [o, t, [r, u]],
                        [/android.+;\s(shield)\sbuild/i],
                        [t, [o, "Nvidia"],
                            [r, u]
                        ],
                        [/(playstation\s[34portablevi]+)/i],
                        [t, [o, "Sony"],
                            [r, u]
                        ],
                        [/(sprint\s(\w+))/i],
                        [
                            [o, v.str, m.device.sprint.vendor],
                            [t, v.str, m.device.sprint.model],
                            [r, c]
                        ],
                        [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                        [o, [t, /_/g, " "],
                            [r, c]
                        ],
                        [/(nexus\s9)/i],
                        [t, [o, "HTC"],
                            [r, l]
                        ],
                        [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                        [t, [o, "Huawei"],
                            [r, c]
                        ],
                        [/android.+(bah2?-a?[lw]\d{2})/i],
                        [t, [o, "Huawei"],
                            [r, l]
                        ],
                        [/(microsoft);\s(lumia[\s\w]+)/i],
                        [o, t, [r, c]],
                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                        [t, [o, "Microsoft"],
                            [r, u]
                        ],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [t, /\./g, " "],
                            [o, "Microsoft"],
                            [r, c]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                        [t, [o, "Motorola"],
                            [r, c]
                        ],
                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [t, [o, "Motorola"],
                            [r, l]
                        ],
                        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        [
                            [o, A.trim],
                            [t, A.trim],
                            [r, p]
                        ],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [t, /^/, "SmartTV"],
                            [o, "Samsung"],
                            [r, p]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [t, [o, "Sharp"],
                            [r, p]
                        ],
                        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                        [
                            [o, "Samsung"], t, [r, l]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [o, [r, p], t],
                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                        [
                            [o, "Samsung"], t, [r, c]
                        ],
                        [/sie-(\w*)/i],
                        [t, [o, "Siemens"],
                            [r, c]
                        ],
                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                        [
                            [o, "Nokia"], t, [r, c]
                        ],
                        [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                        [t, [o, "Acer"],
                            [r, l]
                        ],
                        [/android.+([vl]k\-?\d{3})\s+build/i],
                        [t, [o, "LG"],
                            [r, l]
                        ],
                        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                        [
                            [o, "LG"], t, [r, l]
                        ],
                        [/(lg) netcast\.tv/i],
                        [o, t, [r, p]],
                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                        [t, [o, "LG"],
                            [r, c]
                        ],
                        [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                        [o, t, [r, l]],
                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                        [t, [o, "Lenovo"],
                            [r, l]
                        ],
                        [/(lenovo)[_\s-]?([\w-]+)/i],
                        [o, t, [r, c]],
                        [/linux;.+((jolla));/i],
                        [o, t, [r, c]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [o, t, [r, h]],
                        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                        [o, t, [r, c]],
                        [/crkey/i],
                        [
                            [t, "Chromecast"],
                            [o, "Google"],
                            [r, p]
                        ],
                        [/android.+;\s(glass)\s\d/i],
                        [t, [o, "Google"],
                            [r, h]
                        ],
                        [/android.+;\s(pixel c)[\s)]/i],
                        [t, [o, "Google"],
                            [r, l]
                        ],
                        [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                        [t, [o, "Google"],
                            [r, c]
                        ],
                        [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [t, /_/g, " "],
                            [o, "Xiaomi"],
                            [r, c]
                        ],
                        [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [t, /_/g, " "],
                            [o, "Xiaomi"],
                            [r, l]
                        ],
                        [/android.+;\s(m[1-5]\snote)\sbuild/i],
                        [t, [o, "Meizu"],
                            [r, c]
                        ],
                        [/(mz)-([\w-]{2,})/i],
                        [
                            [o, "Meizu"], t, [r, c]
                        ],
                        [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                        [t, [o, "OnePlus"],
                            [r, c]
                        ],
                        [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                        [t, [o, "RCA"],
                            [r, l]
                        ],
                        [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                        [t, [o, "Dell"],
                            [r, l]
                        ],
                        [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                        [t, [o, "Verizon"],
                            [r, l]
                        ],
                        [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                        [
                            [o, "Barnes & Noble"], t, [r, l]
                        ],
                        [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                        [t, [o, "NuVision"],
                            [r, l]
                        ],
                        [/android.+;\s(k88)\sbuild/i],
                        [t, [o, "ZTE"],
                            [r, l]
                        ],
                        [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                        [t, [o, "Swiss"],
                            [r, c]
                        ],
                        [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                        [t, [o, "Swiss"],
                            [r, l]
                        ],
                        [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                        [t, [o, "Zeki"],
                            [r, l]
                        ],
                        [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                        [
                            [o, "Dragon Touch"], t, [r, l]
                        ],
                        [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                        [t, [o, "Insignia"],
                            [r, l]
                        ],
                        [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                        [t, [o, "NextBook"],
                            [r, l]
                        ],
                        [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                        [
                            [o, "Voice"], t, [r, c]
                        ],
                        [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                        [
                            [o, "LvTel"], t, [r, c]
                        ],
                        [/android.+;\s(PH-1)\s/i],
                        [t, [o, "Essential"],
                            [r, c]
                        ],
                        [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                        [t, [o, "Envizen"],
                            [r, l]
                        ],
                        [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                        [o, t, [r, l]],
                        [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                        [t, [o, "MachSpeed"],
                            [r, l]
                        ],
                        [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                        [o, t, [r, l]],
                        [/android.+[;\/]\s*TU_(1491)\s+build/i],
                        [t, [o, "Rotor"],
                            [r, l]
                        ],
                        [/android.+(KS(.+))\s+build/i],
                        [t, [o, "Amazon"],
                            [r, l]
                        ],
                        [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                        [o, t, [r, l]],
                        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        [
                            [r, A.lowerize], o, t
                        ],
                        [/[\s\/\(](smart-?tv)[;\)]/i],
                        [
                            [r, p]
                        ],
                        [/(android[\w\.\s\-]{0,9});.+build/i],
                        [t, [o, "Generic"]]
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [a, [n, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [a, [n, "Blink"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [n, a],
                        [/rv\:([\w\.]{1,9}).+(gecko)/i],
                        [a, n]
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [n, a],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                        [n, [a, v.str, m.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [n, "Windows"],
                            [a, v.str, m.os.windows.version]
                        ],
                        [/\((bb)(10);/i],
                        [
                            [n, "BlackBerry"], a
                        ],
                        [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                        [n, a],
                        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                        [
                            [n, "Symbian"], a
                        ],
                        [/\((series40);/i],
                        [n],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [n, "Firefox OS"], a
                        ],
                        [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                        [n, a],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [n, "Chromium OS"], a
                        ],
                        [/(sunos)\s?([\w\.\d]*)/i],
                        [
                            [n, "Solaris"], a
                        ],
                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                        [n, a],
                        [/(haiku)\s(\w+)/i],
                        [n, a],
                        [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                        [
                            [a, /_/g, "."],
                            [n, "iOS"]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                        [
                            [n, "Mac OS"],
                            [a, /_/g, "."]
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                        [n, a]
                    ]
                },
                y = function(e, t) {
                    if ("object" == typeof e && (t = e, e = d), !(this instanceof y)) return new y(e, t).getResult();
                    var n = e || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                        r = t ? A.extend(g, t) : g;
                    return this.getBrowser = function() {
                        var e = {
                            name: d,
                            version: d
                        };
                        return v.rgx.call(e, n, r.browser), e.major = A.major(e.version), e
                    }, this.getCPU = function() {
                        var e = {
                            architecture: d
                        };
                        return v.rgx.call(e, n, r.cpu), e
                    }, this.getDevice = function() {
                        var e = {
                            vendor: d,
                            model: d,
                            type: d
                        };
                        return v.rgx.call(e, n, r.device), e
                    }, this.getEngine = function() {
                        var e = {
                            name: d,
                            version: d
                        };
                        return v.rgx.call(e, n, r.engine), e
                    }, this.getOS = function() {
                        var e = {
                            name: d,
                            version: d
                        };
                        return v.rgx.call(e, n, r.os), e
                    }, this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function() {
                        return n
                    }, this.setUA = function(e) {
                        return n = e, this
                    }, this
                };
            y.VERSION = "0.7.21", y.BROWSER = {
                NAME: n,
                MAJOR: "major",
                VERSION: a
            }, y.CPU = {
                ARCHITECTURE: s
            }, y.DEVICE = {
                MODEL: t,
                VENDOR: o,
                TYPE: r,
                CONSOLE: u,
                MOBILE: c,
                SMARTTV: p,
                TABLET: l,
                WEARABLE: h,
                EMBEDDED: "embedded"
            }, y.ENGINE = {
                NAME: n,
                VERSION: a
            }, y.OS = {
                NAME: n,
                VERSION: a
            }, typeof x != e ? (typeof _ != e && _.exports && (x = _.exports = y), x.UAParser = y) : (E = function() {
                return y
            }.call(x, k, x, _)) === d || (_.exports = E);
            var b, w = i && (i.jQuery || i.Zepto);
            w && !w.ua && (b = new y, w.ua = b.getResult(), w.ua.get = function() {
                return b.getUA()
            }, w.ua.set = function(e) {
                b.setUA(e);
                var t = b.getResult();
                for (var n in t) w.ua[n] = t[n]
            })
        }("object" == typeof window ? window : this)
    }, function(e, t, n) {
        var r = n(37),
            i = n(82);
        "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
            [e.i, i, ""]
        ]);
        var o = {
            insert: "head",
            singleton: !1
        };
        r(i, o);
        e.exports = i.locals || {}
    }, function(e, t, n) {
        (t = n(38)(!0)).push([e.i, ".skipBtn__reset {\n    color: inherit;\n    background-color: transparent;\n    padding: 0;\n    margin: 0;\n    float: none;\n    font-family: Arial, Tahoma, sans-serif;\n    font-size: 1em;\n    line-height: 1em;\n    list-style: none;\n    text-align: left;\n    text-transform: none;\n    vertical-align: baseline;\n    border: 0;\n    direction: ltr;\n    font-variant: inherit;\n    font-stretch: inherit;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.skipBtn__btn {\n    display: inline-block;\n    padding: 10px;\n    font-size: 12px;\n    outline: none;\n}\n\n.skipBtn__btn-skip {\n    cursor: default;\n    background-color: rgba(33, 33, 33, 0.6);\n    color: #ffffff;\n    pointer-events: none;\n\n    position: absolute;\n    bottom: 18%;\n    float: left;\n}\n\n.skipBtn__btn-skip.skipBtn__active {\n    color: #000000;\n    background: #ffffff 0 !important;\n    -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.8);\n    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.8);\n    cursor: pointer;\n    pointer-events: all;\n}\n\n.skipBtn__btn-skip.skipBtn__active:hover {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}", "", {
            version: 3,
            sources: ["skipBtn.css"],
            names: [],
            mappings: "AAAA;IACI,cAAc;IACd,6BAA6B;IAC7B,UAAU;IACV,SAAS;IACT,WAAW;IACX,sCAAsC;IACtC,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;IACpB,wBAAwB;IACxB,SAAS;IACT,cAAc;IACd,qBAAqB;IACrB,qBAAqB;IACrB,mDAAmD;IACnD,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,uCAAuC;IACvC,cAAc;IACd,oBAAoB;;IAEpB,kBAAkB;IAClB,WAAW;IACX,WAAW;AACf;;AAEA;IACI,cAAc;IACd,gCAAgC;IAChC,kDAAkD;IAClD,0CAA0C;IAC1C,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;AACpB",
            file: "skipBtn.css",
            sourcesContent: [".reset {\n    color: inherit;\n    background-color: transparent;\n    padding: 0;\n    margin: 0;\n    float: none;\n    font-family: Arial, Tahoma, sans-serif;\n    font-size: 1em;\n    line-height: 1em;\n    list-style: none;\n    text-align: left;\n    text-transform: none;\n    vertical-align: baseline;\n    border: 0;\n    direction: ltr;\n    font-variant: inherit;\n    font-stretch: inherit;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.btn {\n    display: inline-block;\n    padding: 10px;\n    font-size: 12px;\n    outline: none;\n}\n\n.btn-skip {\n    cursor: default;\n    background-color: rgba(33, 33, 33, 0.6);\n    color: #ffffff;\n    pointer-events: none;\n\n    position: absolute;\n    bottom: 18%;\n    float: left;\n}\n\n.btn-skip.active {\n    color: #000000;\n    background: #ffffff 0 !important;\n    -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.8);\n    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.8);\n    cursor: pointer;\n    pointer-events: all;\n}\n\n.btn-skip.active:hover {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}"]
        }]), t.locals = {
            reset: "skipBtn__reset",
            btn: "skipBtn__btn",
            "btn-skip": "skipBtn__btn-skip",
            active: "skipBtn__active"
        }, e.exports = t
    }, function(e, t, n) {
        "use strict";
        t.VAST = n(84)
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            l = r(n(8)),
            d = r(n(18)),
            o = r(n(10)),
            a = r(n(9));

        function u(e) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                    }(e))) {
                    var t = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return t >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[t++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, i, o = !0,
                a = !1;
            return {
                s: function() {
                    r = e[Symbol.iterator]()
                },
                n: function() {
                    var e = r.next();
                    return o = e.done, e
                },
                e: function(e) {
                    a = !0, i = e
                },
                f: function() {
                    try {
                        o || null == r.return || r.return()
                    } finally {
                        if (a) throw i
                    }
                }
            }
        }

        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var i = n(85).create({
                timeout: 5e3
            }),
            c = n(16),
            f = c.copy,
            p = c.defaults,
            h = c.get,
            A = c.set,
            v = c.map,
            m = c.find,
            g = c.filter,
            y = n(15).processURI,
            b = n(102),
            w = Array.prototype.push,
            _ = n(103),
            x = n(47),
            k = {
                inline: function(e) {
                    p({
                        description: null,
                        survey: null
                    }, e)
                },
                wrapper: function() {}
            },
            E = {
                linear: function(e) {
                    p({
                        trackingEvents: [],
                        parameters: null,
                        videoClicks: null
                    }, e), (e.mediaFiles || []).forEach(function(e) {
                        return p({
                            id: null,
                            bitrate: null,
                            scalable: null,
                            maintainAspectRatio: null,
                            apiFramework: null
                        }, e)
                    })
                },
                companions: function(e) {
                    e.companions.forEach(function(e) {
                        return p({
                            expandedWidth: null,
                            expandedHeight: null,
                            apiFramework: null,
                            trackingEvents: [],
                            clickThrough: null,
                            altText: null,
                            parameters: null
                        }, e)
                    })
                },
                nonLinear: function(e) {
                    p({
                        trackingEvents: []
                    }, e), e.ads.forEach(function(e) {
                        return p({
                            id: null,
                            expandedWidth: null,
                            expandedHeight: null,
                            scalable: null,
                            maintainAspectRatio: null,
                            minSuggestedDuration: null,
                            apiFramework: null,
                            clickThrough: null,
                            clickTracking: [],
                            parameters: null
                        }, e)
                    })
                }
            };

        function C() {}

        function T(e) {
            return !e.response && Boolean(e.code) && "ECONNABORTED" !== e.code
        }

        function S(e) {
            return !T(e) && "Network Error" === e.message
        }
        var O = function(t) {
            return i.get(t, {
                withCredentials: !0
            }).catch(function(e) {
                return T(e) ? i.get(t, {
                    withCredentials: !0
                }).catch(function(e) {
                    return S(e) ? i.get(t, {
                        withCredentials: !1
                    }) : Promise.reject(e)
                }) : S(e) ? i.get(t, {
                    withCredentials: !1
                }) : Promise.reject(e)
            })
        };

        function I(e) {
            f(e, this, !0), this.ads.forEach(function(e) {
                p({
                    system: {
                        version: null
                    },
                    errors: []
                }, e), e.creatives.forEach(function(e) {
                    p({
                        id: null,
                        sequence: null,
                        adID: null
                    }, e), E[e.type](e)
                }), k[e.type](e)
            }), this.__private__ = {
                wrappers: [],
                inlines: []
            }
        }

        function R() {
            return M.apply(this, arguments)
        }

        function M() {
            return (M = (0, a.default)(l.default.mark(function e() {
                var t, n, r, i, o, a, s = arguments;
                return l.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            t = 1 < s.length ? s[1] : void 0, n = [], r = u(0 < s.length && void 0 !== s[0] ? s[0] : []), e.prev = 4, r.s();
                        case 6:
                            if ((i = r.n()).done) {
                                e.next = 19;
                                break
                            }
                            if (o = i.value, V(o)) return n.push(o), e.abrupt("continue", 17);
                            e.next = 11;
                            break;
                        case 11:
                            return e.next = 13, L(o, t, !1);
                        case 13:
                            if (!(a = e.sent).length && o.fallbackOnNoAd) return e.abrupt("return");
                            e.next = 16;
                            break;
                        case 16:
                            n.push.apply(n, (0, d.default)(a));
                        case 17:
                            e.next = 6;
                            break;
                        case 19:
                            e.next = 24;
                            break;
                        case 21:
                            e.prev = 21, e.t0 = e.catch(4), r.e(e.t0);
                        case 24:
                            return e.prev = 24, r.f(), e.finish(24);
                        case 27:
                            return e.abrupt("return", n.length && n);
                        case 28:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [4, 21, 24, 27]
                ])
            }))).apply(this, arguments)
        }

        function P() {
            return j.apply(this, arguments)
        }

        function j() {
            return (j = (0, a.default)(l.default.mark(function e() {
                var t, n, r, i, o, a, s = arguments;
                return l.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            t = 1 < s.length ? s[1] : void 0, n = !(2 < s.length && void 0 !== s[2]) || s[2], r = u(0 < s.length && void 0 !== s[0] ? s[0] : []), e.prev = 4, r.s();
                        case 6:
                            if ((i = r.n()).done) {
                                e.next = 17;
                                break
                            }
                            if (o = i.value, V(o)) return e.abrupt("return", [o]);
                            e.next = 10;
                            break;
                        case 10:
                            return e.next = 12, L(o, t, n);
                        case 12:
                            if ((a = e.sent).length) return e.abrupt("return", a);
                            e.next = 15;
                            break;
                        case 15:
                            e.next = 6;
                            break;
                        case 17:
                            e.next = 22;
                            break;
                        case 19:
                            e.prev = 19, e.t0 = e.catch(4), r.e(e.t0);
                        case 22:
                            return e.prev = 22, r.f(), e.finish(22);
                        case 25:
                            return e.abrupt("return", null);
                        case 26:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [4, 19, 22, 25]
                ])
            }))).apply(this, arguments)
        }

        function L() {
            return B.apply(this, arguments)
        }

        function B() {
            return (B = (0, a.default)(l.default.mark(function e(a) {
                var t, n, r, i, o, s = arguments;
                return l.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = !(2 < s.length && void 0 !== s[2]) || s[2], t = 1 < s.length && void 0 !== s[1] ? s[1] : 15) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return", []);
                        case 4:
                            return e.next = 6, O(a.vastAdTagURI).then(function(e) {
                                return function(e) {
                                    if (!x(e)("VAST").length) return [];
                                    var t = I.pojoFromXML(e);
                                    return t.ads.map(function(e) {
                                        return e._version = t.version, e
                                    }), t.ads
                                }(e.data)
                            }, function() {
                                return null
                            });
                        case 6:
                            if (e.t0 = e.sent, e.t0) {
                                e.next = 9;
                                break
                            }
                            e.t0 = [];
                        case 9:
                            return (r = e.t0).forEach(function(e) {
                                return r = e, o = {
                                    linear: (i = (n = a).creatives).filter(t("linear")),
                                    companions: i.filter(t("companions")),
                                    nonLinear: i.filter(t("nonLinear"))
                                }, n.vastAdTagURI = y(n.vastAdTagURI), r._removeCredentials = !!n._removeCredentials, p(n.impressions, r.impressions), p(n.errors, r.errors), p(n.extensions, r.extensions), r.creatives.forEach(function(e) {
                                    return p(o[e.type].shift() || {}, e)
                                }), w.apply(r.creatives, "wrapper" !== r.type ? [] : ["linear", "companions", "nonLinear"].reduce(function(e, t) {
                                    return e.concat(o[t])
                                }, [])), r;

                                function t(t) {
                                    return function(e) {
                                        return e.type === t
                                    }
                                }
                                var n, r, i, o
                            }), i = D(r), o = N(r), 1 === i.length && (o = [i.pop()].concat((0, d.default)(o))), a.followAdditonalWrappers || (o = o.filter(V), i = i.find(function(e) {
                                return !V(e) && e.fallbackOnNoAd
                            }) ? [] : i.filter(V)), n && a.allowMultipleAds || (i = []), e.next = 18, R(i, t - 1);
                        case 18:
                            if (e.t2 = e.sent, e.t2) {
                                e.next = 23;
                                break
                            }
                            return e.next = 22, P(o, t - 1, n && a.allowMultipleAds);
                        case 22:
                            e.t2 = e.sent;
                        case 23:
                            if (e.t1 = e.t2, e.t1) {
                                e.next = 26;
                                break
                            }
                            e.t1 = [];
                        case 26:
                            return e.abrupt("return", e.t1);
                        case 27:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }))).apply(this, arguments)
        }
        Object.defineProperties(I.prototype, {
            wrappers: {
                get: function() {
                    var e = this.__private__.wrappers;
                    return e.length = 0, w.apply(e, this.filter("ads", function(e) {
                        return "wrapper" === e.type
                    })), e
                }
            },
            inlines: {
                get: function() {
                    var e = this.__private__.inlines;
                    return e.length = 0, w.apply(e, this.filter("ads", function(e) {
                        return "inline" === e.type
                    })), e
                }
            }
        }), I.prototype.get = function(e) {
            return h(this, e)
        }, I.prototype.set = function(e, t) {
            return A(this, e, t)
        }, I.prototype.map = function(e, t) {
            return v(this, e, t)
        }, I.prototype.filter = function(e, t) {
            return g(this, e, t)
        }, I.prototype.find = function(e, t) {
            return m(this, e, t)
        }, I.prototype.toPOJO = function() {
            return {
                ads: f(this.ads, !0),
                version: this.version
            }
        }, I.prototype.copy = function() {
            return new this.constructor(this.toPOJO())
        }, I.prototype.toXML = function() {
            var e = this.validate();
            if (!e.valid) throw new Error("VAST is invalid: " + e.reasons.join(", "));
            return _(this)
        }, I.prototype.validate = function() {
            var t = this,
                n = [],
                r = {
                    inline: function(r) {
                        var i = {
                            linear: function(e) {
                                s(e, {
                                    exists: ["duration"],
                                    atLeastOne: ["mediaFiles"]
                                })
                            },
                            companions: function(n) {
                                t.get(n("companions")).forEach(function(e, t) {
                                    s(function(e) {
                                        return n("companions[" + t + "]." + e)
                                    }, {
                                        exists: [],
                                        atLeastOne: ["resources"]
                                    })
                                })
                            },
                            nonLinear: function(n) {
                                t.get(n("ads")).forEach(function(e, t) {
                                    s(function(e) {
                                        return n("ads[" + t + "]." + e)
                                    }, {
                                        exists: [],
                                        atLeastOne: ["resources"]
                                    })
                                })
                            }
                        };
                        s(r, {
                            exists: ["title"],
                            atLeastOne: ["creatives"]
                        }), t.get(r("creatives")).forEach(function(e, t) {
                            function n(e) {
                                return r("creatives[" + t + "]." + e)
                            }
                            s(n, {
                                exists: ["type"],
                                atLeastOne: []
                            }), (i[e.type] || C)(n)
                        })
                    },
                    wrapper: function(e) {
                        s(e, {
                            exists: ["vastAdTagURI"],
                            atLeastOne: []
                        })
                    }
                };

            function i(e, t) {
                e || n.push(t)
            }

            function o(e) {
                i(t.get(e), e + " is required")
            }

            function a(e) {
                i(0 < t.get(e + ".length"), e + " must contain at least one value")
            }

            function s(e, t) {
                t.exists.map(e).forEach(o), t.atLeastOne.map(e).forEach(a)
            }
            return s(function(e) {
                return e
            }, {
                exists: [],
                atLeastOne: ["ads"]
            }), this.get("ads").forEach(function(e, t) {
                function n(e) {
                    return "ads[" + t + "]." + e
                }
                s(n, {
                    exists: ["type", "system.name"],
                    atLeastOne: ["impressions"]
                }), (r[e.type] || C)(n)
            }), {
                valid: 0 === n.length,
                reasons: 0 === n.length ? null : n
            }
        }, I.pojoFromXML = n(105);

        function F(e) {
            return !e.sequence || "0" === e.sequence
        }
        var V = function(e) {
                return "inline" === e.type
            },
            N = function(e) {
                return (e || []).filter(F)
            },
            D = function(e) {
                return (e || []).filter(function(e) {
                    return !F(e)
                }).sort(function(e, t) {
                    return e.sequence < t.sequence ? -1 : e.sequence > t.sequence ? 1 : 0
                })
            };
        I.fetch = function(e, t, n) {
            var u = "object" === (0, o.default)(t) && t || {},
                r = "function" == typeof n ? n : t,
                c = this;

            function i() {
                return (i = (0, a.default)(l.default.mark(function e(t) {
                    var n, r, i, o, a, s;
                    return l.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = c.pojoFromXML(t.data), r = n.ads, i = n.version, o = D(r || []), a = 1 === o.length ? [o.pop()].concat((0, d.default)(N(r))) : N(r), e.next = 5, R(o, u.maxRedirects);
                            case 5:
                                if (e.t1 = e.sent, e.t1) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 9, P(a, u.maxRedirects);
                            case 9:
                                e.t1 = e.sent;
                            case 10:
                                if (e.t0 = e.t1, e.t0) {
                                    e.next = 13;
                                    break
                                }
                                e.t0 = [];
                            case 13:
                                return s = e.t0, e.abrupt("return", new c({
                                    version: i,
                                    ads: s
                                }));
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            return b(O(y(e)).then(function(e) {
                return i.apply(this, arguments)
            }), r)
        }, e.exports = I
    }, function(e, t, n) {
        e.exports = n(86)
    }, function(e, t, n) {
        "use strict";
        var r = n(6),
            i = n(39),
            o = n(87),
            a = n(45);

        function s(e) {
            var t = new o(e),
                n = i(o.prototype.request, t);
            return r.extend(n, o.prototype, t), r.extend(n, t), n
        }
        var u = s(n(42));
        u.Axios = o, u.create = function(e) {
            return s(a(u.defaults, e))
        }, u.Cancel = n(46), u.CancelToken = n(100), u.isCancel = n(41), u.all = function(e) {
            return Promise.all(e)
        }, u.spread = n(101), e.exports = u, e.exports.default = u
    }, function(e, t, n) {
        "use strict";
        var i = n(6),
            r = n(40),
            o = n(88),
            a = n(89),
            s = n(45);

        function u(e) {
            this.defaults = e, this.interceptors = {
                request: new o,
                response: new o
            }
        }
        u.prototype.request = function(e, t) {
            "string" == typeof e ? (e = t || {}).url = arguments[0] : e = e || {}, (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var n = [a, void 0],
                r = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) {
                    n.unshift(e.fulfilled, e.rejected)
                }), this.interceptors.response.forEach(function(e) {
                    n.push(e.fulfilled, e.rejected)
                }); n.length;) r = r.then(n.shift(), n.shift());
            return r
        }, u.prototype.getUri = function(e) {
            return e = s(this.defaults, e), r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }, i.forEach(["delete", "get", "head", "options"], function(n) {
            u.prototype[n] = function(e, t) {
                return this.request(i.merge(t || {}, {
                    method: n,
                    url: e
                }))
            }
        }), i.forEach(["post", "put", "patch"], function(r) {
            u.prototype[r] = function(e, t, n) {
                return this.request(i.merge(n || {}, {
                    method: r,
                    url: e,
                    data: t
                }))
            }
        }), e.exports = u
    }, function(e, t, n) {
        "use strict";
        var r = n(6);

        function i() {
            this.handlers = []
        }
        i.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1
        }, i.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, i.prototype.forEach = function(t) {
            r.forEach(this.handlers, function(e) {
                null !== e && t(e)
            })
        }, e.exports = i
    }, function(e, t, n) {
        "use strict";
        var r = n(6),
            i = n(90),
            o = n(41),
            a = n(42);

        function s(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        e.exports = function(t) {
            return s(t), t.headers = t.headers || {}, t.data = i(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
                delete t.headers[e]
            }), (t.adapter || a.adapter)(t).then(function(e) {
                return s(t), e.data = i(e.data, e.headers, t.transformResponse), e
            }, function(e) {
                return o(e) || (s(t), e && e.response && (e.response.data = i(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(6);
        e.exports = function(t, n, e) {
            return r.forEach(e, function(e) {
                t = e(t, n)
            }), t
        }
    }, function(e, t, n) {
        "use strict";
        var i = n(6);
        e.exports = function(n, r) {
            i.forEach(n, function(e, t) {
                t !== r && t.toUpperCase() === r.toUpperCase() && (n[r] = e, delete n[t])
            })
        }
    }, function(e, t, n) {
        "use strict";
        var i = n(44);
        e.exports = function(e, t, n) {
            var r = n.config.validateStatus;
            !r || r(n.status) ? e(n) : t(i("Request failed with status code " + n.status, n.config, null, n.request, n))
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n, r, i) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }, e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(95),
            i = n(96);
        e.exports = function(e, t) {
            return e && !r(t) ? i(e, t) : t
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }, function(e, t, n) {
        "use strict";
        var o = n(6),
            a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, r, i = {};
            return e && o.forEach(e.split("\n"), function(e) {
                if (r = e.indexOf(":"), t = o.trim(e.substr(0, r)).toLowerCase(), n = o.trim(e.substr(r + 1)), t) {
                    if (i[t] && 0 <= a.indexOf(t)) return;
                    i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
                }
            }), i
        }
    }, function(e, t, n) {
        "use strict";
        var r, i, o, a = n(6);

        function s(e) {
            var t = e;
            return i && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), {
                href: o.href,
                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                host: o.host,
                search: o.search ? o.search.replace(/^\?/, "") : "",
                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                hostname: o.hostname,
                port: o.port,
                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
            }
        }
        e.exports = a.isStandardBrowserEnv() ? (i = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a"), r = s(window.location.href), function(e) {
            var t = a.isString(e) ? s(e) : e;
            return t.protocol === r.protocol && t.host === r.host
        }) : function() {
            return !0
        }
    }, function(e, t, n) {
        "use strict";
        var s = n(6);
        e.exports = s.isStandardBrowserEnv() ? {
            write: function(e, t, n, r, i, o) {
                var a = [];
                a.push(e + "=" + encodeURIComponent(t)), s.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), s.isString(r) && a.push("path=" + r), s.isString(i) && a.push("domain=" + i), !0 === o && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(46);

        function i(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function(e) {
                t = e
            });
            var n = this;
            e(function(e) {
                n.reason || (n.reason = new r(e), t(n.reason))
            })
        }
        i.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason
        }, i.source = function() {
            var t;
            return {
                token: new i(function(e) {
                    t = e
                }),
                cancel: t
            }
        }, e.exports = i
    }, function(e, t, n) {
        "use strict";
        e.exports = function(t) {
            return function(e) {
                return t.apply(null, e)
            }
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return "function" != typeof t || e.then(function(e) {
                return t(null, e)
            }, function(e) {
                return t(e)
            }), e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(23).secondsToTimestamp,
            i = n(104),
            o = {
                linear: function(e) {
                    return {
                        tag: "Linear",
                        children: [{
                            tag: "Duration",
                            value: r(e.duration)
                        }, a(e.trackingEvents), u(e)].concat(e.videoClicks ? [{
                            tag: "VideoClicks",
                            children: [{
                                tag: "ClickThrough",
                                value: e.videoClicks.clickThrough,
                                cdata: !0
                            }].concat(e.videoClicks.clickTrackings.map(function(e) {
                                return {
                                    tag: "ClickTracking",
                                    value: e,
                                    cdata: !0
                                }
                            }), e.videoClicks.customClicks.map(function(e) {
                                return {
                                    tag: "CustomClick",
                                    attributes: {
                                        id: e.id
                                    },
                                    value: e.uri,
                                    cdata: !0
                                }
                            }))
                        }] : [], [{
                            tag: "MediaFiles",
                            children: e.mediaFiles.map(function(e) {
                                return {
                                    tag: "MediaFile",
                                    attributes: {
                                        id: e.id,
                                        width: e.width,
                                        height: e.height,
                                        bitrate: e.bitrate,
                                        type: e.type,
                                        delivery: e.delivery,
                                        scalable: e.scalable,
                                        maintainAspectRatio: e.maintainAspectRatio,
                                        apiFramework: e.apiFramework
                                    },
                                    value: e.uri,
                                    cdata: !0
                                }
                            })
                        }])
                    }
                },
                companions: function(e) {
                    return {
                        tag: "CompanionAds",
                        children: e.companions.map(function(e) {
                            return {
                                tag: "Companion",
                                attributes: {
                                    id: e.id,
                                    width: e.width,
                                    height: e.height,
                                    expandedWidth: e.expandedWidth,
                                    expandedHeight: e.expandedHeight,
                                    apiFramework: e.apiFramework
                                },
                                children: s(e.resources).concat([a(e.trackingEvents), {
                                    tag: "CompanionClickThrough",
                                    value: e.clickThrough,
                                    cdata: !0
                                }, {
                                    tag: "AltText",
                                    value: e.altText
                                }, u(e)])
                            }
                        })
                    }
                },
                nonLinear: function(e) {
                    return {
                        tag: "NonLinearAds",
                        children: e.ads.map(function(e) {
                            return {
                                tag: "NonLinear",
                                attributes: {
                                    id: e.id,
                                    width: e.width,
                                    height: e.height,
                                    expandedWidth: e.expandedWidth,
                                    expandedHeight: e.expandedHeight,
                                    scalable: e.scalable,
                                    maintainAspectRatio: e.maintainAspectRatio,
                                    minSuggestedDuration: r(e.minSuggestedDuration),
                                    apiFramework: e.apiFramework
                                },
                                children: s(e.resources).concat([{
                                    tag: "NonLinearClickThrough",
                                    value: e.clickThrough,
                                    cdata: !0
                                }, u(e)])
                            }
                        }).concat([a(e.trackingEvents)])
                    }
                }
            };

        function a(e) {
            return {
                tag: "TrackingEvents",
                children: e.map(function(e) {
                    return {
                        tag: "Tracking",
                        attributes: {
                            event: e.event
                        },
                        value: e.uri,
                        cdata: !0
                    }
                })
            }
        }

        function s(e) {
            return e.map(function(e) {
                return {
                    tag: function() {
                        switch (e.type) {
                            case "static":
                                return "StaticResource";
                            case "iframe":
                                return "IFrameResource";
                            case "html":
                                return "HTMLResource"
                        }
                    }(),
                    attributes: {
                        creativeType: e.creativeType
                    },
                    value: e.data,
                    cdata: !0
                }
            })
        }

        function u(e) {
            return {
                tag: "AdParameters",
                value: e.parameters
            }
        }
        e.exports = function(e) {
            return i({
                tag: "VAST",
                attributes: {
                    version: e.get("version")
                },
                children: e.map("ads", function(e) {
                    return {
                        tag: "Ad",
                        attributes: {
                            id: e.id
                        },
                        children: [{
                            tag: function() {
                                switch (e.type) {
                                    case "inline":
                                        return "InLine";
                                    case "wrapper":
                                        return "Wrapper"
                                }
                            }(),
                            children: [{
                                tag: "AdSystem",
                                attributes: {
                                    version: e.system.version
                                },
                                value: e.system.name
                            }, {
                                tag: "AdTitle",
                                value: e.title
                            }, {
                                tag: "Description",
                                value: e.description
                            }, {
                                tag: "Survey",
                                value: e.survey,
                                cdata: !0
                            }, {
                                tag: "VASTAdTagURI",
                                value: e.vastAdTagURI,
                                cdata: !0
                            }].concat(e.errors.map(function(e) {
                                return {
                                    tag: "Error",
                                    value: e,
                                    cdata: !0
                                }
                            }), e.impressions.map(function(e) {
                                return {
                                    tag: "Impression",
                                    value: e.uri,
                                    cdata: !0,
                                    attributes: {
                                        id: e.id
                                    }
                                }
                            }), [{
                                tag: "Creatives",
                                children: e.creatives.map(function(e) {
                                    return {
                                        tag: "Creative",
                                        attributes: {
                                            id: e.id,
                                            sequence: e.sequence,
                                            AdID: e.adID
                                        },
                                        children: [(t = e.type, o[t](e))]
                                    };
                                    var t
                                }),
                                required: !0
                            }])
                        }]
                    }
                })
            }, !0)
        }
    }, function(e, t, n) {
        "use strict";
        var h = function(e) {
                return null != e
            },
            A = function(e) {
                return void 0 !== e ? String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : ""
            };
        var v = function(e) {
            return e.cdata ? (void 0 !== (t = e.value) ? function(e) {
                for (var t, n, r = [], i = /]]>/g, o = 0; t = i.exec(e);) n = t.index + 2, r.push(t.input.substring(o, n)), o = n;
                return r.push(e.substring(o, e.length)), r
            }(String(t)) : [""]).reduce(function(e, t) {
                return e + "<![CDATA[" + t + "]]>"
            }, "") : A(e.value);
            var t
        };

        function m(e, n, r) {
            var t = e.tag,
                i = e.attributes || {},
                o = Object.keys(i),
                a = e.children || [],
                s = e.value,
                u = 0 < a.length,
                c = o.every(function(e) {
                    return h(i[e])
                }) && 0 < o.length,
                l = h(s) || u || c,
                d = function(e) {
                    for (var t = ""; e--;) t += " ";
                    return t
                }(n),
                f = "<" + t + Object.keys(i).reduce(function(e, t) {
                    return r && !h(i[t]) ? e : e + " " + t + '="' + A(i[t]) + '"'
                }, "") + ">",
                p = "</" + t + ">";
            return !r || l || e.required ? u ? [d + f].concat(e.children.reduce(function(e, t) {
                return e.concat(m(t, n + 4, r))
            }, []), [d + p]) : [d + f + v(e) + p] : []
        }
        e.exports = function(e, t) {
            return ['<?xml version="1.0" encoding="UTF-8"?>'].concat(m(e, 0, t)).join("\n")
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(47),
            s = n(23).timestampToSeconds,
            i = n(106),
            u = i.stringToBoolean,
            c = i.numberify,
            o = n(16),
            l = o.extend,
            a = o.trimObject,
            d = n(15).processURI,
            f = {
                linear: function(e) {
                    var t = s(A(e.find("Duration")).value) || void 0,
                        n = e.find("Tracking"),
                        r = A(e.find("AdParameters")),
                        i = e.find("VideoClicks")[0],
                        o = e.find("MediaFile"),
                        a = A(e.find("Linear")).attributes.skipoffset;
                    a = a ? (a = a.trim()).endsWith("%") && t ? t * (parseFloat(a.split("%")[0]) / 100) : s(a) : void 0;
                    "string" == typeof r.value && (r.value = r.value.trim());
                    return {
                        type: "linear",
                        duration: t,
                        skipOffset: a,
                        trackingEvents: n.map(function(e) {
                            return {
                                event: e.attributes.event,
                                uri: e.value
                            }
                        }),
                        parameters: r.value,
                        videoClicks: i && function() {
                            var e = A(i.find("ClickThrough")),
                                t = i.find("ClickTracking"),
                                n = i.find("CustomClick");
                            return {
                                clickThrough: h(e.value),
                                clickTrackings: t.map(function(e) {
                                    return d(e.value)
                                }),
                                customClicks: n.map(function(e) {
                                    return {
                                        id: e.attributes.id,
                                        uri: d(e.value)
                                    }
                                })
                            }
                        }(),
                        mediaFiles: o.map(function(e) {
                            var t = e.attributes;
                            return {
                                id: t.id,
                                delivery: t.delivery,
                                type: t.type,
                                uri: d(e.value),
                                bitrate: c(t.bitrate),
                                width: c(t.width),
                                height: c(t.height),
                                scalable: u(t.scalable),
                                maintainAspectRatio: u(t.maintainAspectRatio),
                                apiFramework: t.apiFramework
                            }
                        })
                    }
                },
                companions: function(e) {
                    return {
                        type: "companions",
                        companions: e.find("Companion").map(function(e) {
                            var t = e.find("Tracking"),
                                n = h(A(e.find("CompanionClickThrough"))),
                                r = A(e.find("AltText")),
                                i = A(e.find("AdParameters"));
                            return {
                                id: e.attributes.id,
                                width: c(e.attributes.width),
                                height: c(e.attributes.height),
                                expandedWidth: c(e.attributes.expandedWidth),
                                expandedHeight: c(e.attributes.expandedHeight),
                                apiFramework: e.attributes.apiFramework,
                                resources: v(e),
                                trackingEvents: t.map(function(e) {
                                    return {
                                        event: e.attributes.event,
                                        uri: d(e.value)
                                    }
                                }),
                                clickThrough: h(n.value),
                                altText: r.value,
                                parameters: i.value
                            }
                        })
                    }
                },
                nonLinear: function(e) {
                    var t = e.find("NonLinear"),
                        n = e.find("Tracking");
                    return {
                        type: "nonLinear",
                        ads: t.map(function(e) {
                            var t = A(e.find("NonLinearClickThrough")),
                                n = e.find("NonLinearClickTracking"),
                                r = A(e.find("AdParameters"));
                            return {
                                id: e.attributes.id,
                                width: c(e.attributes.width),
                                height: c(e.attributes.height),
                                expandedWidth: c(e.attributes.expandedWidth),
                                expandedHeight: c(e.attributes.expandedHeight),
                                scalable: u(e.attributes.scalable),
                                maintainAspectRatio: u(e.attributes.maintainAspectRatio),
                                minSuggestedDuration: s(e.attributes.minSuggestedDuration) || void 0,
                                apiFramework: e.attributes.apiFramework,
                                resources: v(e),
                                clickThrough: h(t.value),
                                clickTracking: n.map(function(e) {
                                    return d(e.value)
                                }),
                                parameters: r.value
                            }
                        }),
                        trackingEvents: n.map(function(e) {
                            return {
                                event: e.attributes.event,
                                uri: d(e.value)
                            }
                        })
                    }
                }
            },
            p = {
                inline: function(e) {
                    var t = A(e.find("AdTitle")),
                        n = A(e.find("Description")),
                        r = A(e.find("Survey"));
                    return {
                        type: "inline",
                        title: h(t.value),
                        description: h(n.value),
                        survey: r.value
                    }
                },
                wrapper: function(e) {
                    return {
                        type: "wrapper",
                        vastAdTagURI: A(e.find("VASTAdTagURI")).value.trim()
                    }
                }
            },
            h = function(e) {
                return "string" != typeof e ? "" : e.trim()
            },
            A = function(e) {
                return e[0] || {
                    attributes: {}
                }
            };

        function v(e) {
            return e.find("StaticResource,IFrameResource,HTMLResource").map(function(e) {
                return {
                    type: e.tag.replace(/Resource$/, "").toLowerCase(),
                    creativeType: e.attributes.creativeType,
                    data: h(e.value)
                }
            })
        }

        function m(e, t) {
            var n = 0 < arguments.length && void 0 !== e ? e : "",
                r = 1 < arguments.length ? t : void 0;
            return (n = (n || "").trim()).length ? u(n) : r
        }
        e.exports = function(e) {
            var t = r(e);
            if (!t("VAST")[0]) throw new Error("VAST tag not found");
            return a({
                version: A(t("VAST")).attributes.version,
                ads: t("Ad").map(function(e) {
                    var t = A(e.find("Wrapper,InLine")).tag.toLowerCase(),
                        n = A(e.find("AdSystem")),
                        r = e.find("Error"),
                        i = e.find("Impression"),
                        o = e.find("Creative"),
                        a = (e.find("Extension") || []).map(function e(t) {
                            return t.children = t.children().map(e), t
                        }),
                        s = "wrapper" === t ? A(e.find("Wrapper")).attributes : {};
                    return l({
                        id: e.attributes.id,
                        sequence: c(e.attributes.sequence),
                        fallbackOnNoAd: m(s.fallbackOnNoAd, !1),
                        allowMultipleAds: m(s.allowMultipleAds, !0),
                        followAdditonalWrappers: m(s.followAdditonalWrappers, !0),
                        system: {
                            name: n.value,
                            version: n.attributes.version
                        },
                        errors: r.map(function(e) {
                            return d(e.value)
                        }),
                        impressions: i.map(function(e) {
                            return {
                                uri: d(e.value),
                                id: e.attributes.id
                            }
                        }),
                        extensions: a,
                        creatives: o.map(function(e) {
                            var t = function() {
                                switch (A(e.find("Linear,CompanionAds,NonLinearAds")).tag) {
                                    case "Linear":
                                        return "linear";
                                    case "CompanionAds":
                                        return "companions";
                                    case "NonLinearAds":
                                        return "nonLinear"
                                }
                            }();
                            return t ? l({
                                id: e.attributes.id,
                                sequence: c(e.attributes.sequence),
                                adID: e.attributes.AdID
                            }, f[t](e)) : null
                        }).filter(function(e) {
                            return !!e
                        })
                    }, p[t](e))
                })
            }, !0)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0)(n(10));
        e.exports = {
            stringToBoolean: function(e) {
                switch ((e || "").toLowerCase()) {
                    case "true":
                    case "1":
                        return !0;
                    case "false":
                    case "0":
                        return !1
                }
            },
            numberify: function(e) {
                if (/string|number|boolean/.test((0, r.default)(e))) return isNaN(e) ? void 0 : Number(e)
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = r(n(1)),
            o = r(n(2)),
            u = r(n(7)),
            c = n(11),
            a = function() {
                function r(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
                    (0, i.default)(this, r), this.pixels = e.reduce(function(e, t) {
                        return t && (e[t.event] || (e[t.event] = [])).push(t.uri), e
                    }, {}), this.__private__ = {
                        mapper: t || function(e) {
                            return e
                        },
                        mockedEvents: n
                    }
                }
                return (0, o.default)(r, [{
                    key: "track",
                    value: function(e) {
                        var o = this.pixels,
                            a = this.__private__.mapper,
                            s = this.__private__.mockedEvents;

                        function t(e, t, n) {
                            var r = 1 < arguments.length && void 0 !== t ? t : function(e) {
                                    return e
                                },
                                i = 2 < arguments.length && void 0 !== n ? n : null;
                            return s.includes(e) || i && !i() ? function() {} : function() {
                                return (o[e] || []).forEach(function(e) {
                                    return (new Image).src = (0, c.processURI)(a(r(e)))
                                })
                            }
                        }
                        var n = e.adVolume;
                        e.on(u.default.AdVolumeChange, t("unmute", null, function() {
                            return 0 === n && 0 < e.adVolume
                        })), e.on(u.default.AdVolumeChange, t("mute", null, function() {
                            return 0 < n && 0 === e.adVolume
                        })), e.on(u.default.AdVolumeChange, function() {
                            return n = e.adVolume
                        }), e.on(u.default.AdSkipped, t("skip")), e.on(u.default.AdStarted, t("creativeView")), e.on(u.default.AdImpression, t("impression")), e.on(u.default.AdVideoStart, t("start")), e.on(u.default.AdVideoFirstQuartile, t("firstQuartile")), e.on(u.default.AdVideoMidpoint, t("midpoint")), e.on(u.default.AdVideoThirdQuartile, t("thirdQuartile")), e.on(u.default.AdVideoComplete, t("complete")), e.on(u.default.AdClickThru, t("clickThrough")), e.on(u.default.AdUserAcceptInvitation, t("acceptInvitationLinear")), e.on(u.default.AdUserMinimize, t("collapse")), e.on(u.default.AdUserClose, t("closeLinear")), e.on(u.default.AdPaused, t("pause")), e.on(u.default.AdPlaying, t("resume")), e.on(u.default.AdError, t("error", function(e) {
                            return e.replace(/\[ERRORCODE]/g, 901)
                        }))
                    }
                }]), r
            }();
        t.default = a
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = r(n(8)),
            i = r(n(9)),
            u = r(n(1)),
            c = r(n(2)),
            l = r(n(19)),
            d = r(n(3)),
            o = r(n(4)),
            a = r(n(5)),
            f = r(n(12)),
            p = r(n(109)),
            h = r(n(110)),
            A = r(n(24)),
            v = n(11),
            m = r(n(7));

        function g(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, a.default)(r);
                return t = i ? (e = (0, a.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, o.default)(this, t)
            }
        }
        var y = function(e) {
            (0, d.default)(a, e);
            var t, n, o = g(a);

            function a(e, t) {
                var i, n = t.logger;
                (0, u.default)(this, a), (i = o.call(this, e)).logger = n, i.iframe = null, i.slot_ = null, i.videoSlot_ = null, i.eventProxy = new f.default, i.resizeInterval = null, i.isClean = !1, i.isStopped = !1, i._videoSlotCanAutoPlay = void 0, i.eventProxy.once(m.default.AdError, function(e) {
                    i.logger("received AdError from advertiser"), i.emit(m.default.AdError, e), i.stopAd(!1)
                }), i.eventProxy.once(m.default.AdStopped, function() {
                    return i.stopAd(!1)
                });
                var r = [m.default.AdLoaded, m.default.AdStarted, m.default.AdError, m.default.AdStopped, m.default.MRC_VIEW, m.default.MRC_UNMEASUREABLE];
                return new v.EventProxy(m.default.filter(function(e) {
                    return !r.includes(e)
                })).from(i.eventProxy).to((0, l.default)(i)), m.default.forEach(function(r) {
                    return i.on(r, function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return i.logger("player emitted %s with args: %o", r, t)
                    })
                }), i.logger("new instance"), i
            }
            return (0, c.default)(a, [{
                key: "load",
                value: (n = (0, i.default)(s.default.mark(function e(t, u) {
                    var n, c, r, i, l, d, o, f, a, p = this;
                    return s.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("string" == typeof u && (u = u.trim()), this.logger(".load(%o, %o)", t, u), n = (0, v.processURI)(t.uri), c = t.bitrate, r = (0, v.createTag)("script", [], {}, {}, {
                                        src: n,
                                        type: "application/javascript",
                                        async: !0
                                    }), i = (0, v.createTag)("video", [], {
                                        backgroundColor: "rgb(0, 0, 0)",
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        top: 0,
                                        left: 0
                                    }, {
                                        playsinline: "",
                                        "webkit-playsinline": "",
                                        "x-webkit-playsinline": ""
                                    }), l = (0, v.createTag)("iframe", [], {
                                        border: "0px",
                                        opacity: 1,
                                        margin: "0px",
                                        padding: "0px",
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        overflow: "hidden"
                                    }, {
                                        allow: "autoplay",
                                        referrerpolicy: "unsafe-url"
                                    }, {
                                        src: "about:blank"
                                    }), (d = (0, v.createTag)("div", [], {
                                        display: "none"
                                    })).appendChild(i), this.container.appendChild(d), this.container.appendChild(l), void 0 !== this._videoSlotCanAutoPlay) {
                                    e.next = 26;
                                    break
                                }
                                if (this._videoSlotCanAutoPlay = !0, i.src = v.VIDEO_BAIT_DATA, o = i.play()) return e.prev = 16, e.next = 19, o;
                                e.next = 25;
                                break;
                            case 19:
                                e.next = 25;
                                break;
                            case 21:
                                e.prev = 21, e.t0 = e.catch(16), i.muted = !0, this._videoSlotCanAutoPlay = !1;
                            case 25:
                                i.src = "";
                            case 26:
                                if (this.logger("videoSlotCanAutoPlay = %s", this._videoSlotCanAutoPlay), f = function(e) {
                                        return p.emit(m.default.AdError, e), (0, v.sleep)(1).then(function() {
                                            return p.stopAd(!1)
                                        }), new Error(e)
                                    }, l.contentWindow) {
                                    e.next = 30;
                                    break
                                }
                                throw f("iframe.contentWindow is not defined");
                            case 30:
                                return (a = l.contentWindow.document).open(), a.close(), a.documentElement.style.cssText = "height:100%", a.body.style.cssText = "background:transparent;height:100%;margin:0;overflow:hidden", this.iframe = l, this.videoSlotWrapper = d, this.videoSlot_ = i, this.slot_ = l.contentWindow.document.body, this.logger("\nvideoSlot: %o;\n slot: %o;\n iframe: %o;\n videoSlotWrapper:%o;\n script: %o", this.videoSlot_, this.slot_, this.iframe, this.videoSlotWrapper, r), e.abrupt("return", new Promise(function(o, a) {
                                    (0, v.once)(i, A.default.PLAYING, function() {
                                        return d.style.cssText = "display:block"
                                    });
                                    var s = Date.now();
                                    r.onload = function() {
                                        var e = Date.now() - s;
                                        if (p.logger("js loaded after %sms", e), p.emit("JSLoaded", e), "function" != typeof l.contentWindow.getVPAIDAd) return a(f("getVPAIDAd() not found"));
                                        var t = l.contentWindow.getVPAIDAd(),
                                            n = p.vpaidVersion = new h.default(t.handshakeVersion("2.0"));
                                        if (2 < n.major) return a(f("VPAID version " + n + " is not supported."));
                                        p.vpaid = t;

                                        function r() {
                                            var e;
                                            p.api && (e = l.getBoundingClientRect(), i.width === e.width && i.height === e.height || (i = e, p.resizeAd(i.width, i.height, "normal")))
                                        }
                                        var i = l.getBoundingClientRect();
                                        l.contentWindow.addEventListener("resize", r, !1), window.addEventListener("scroll", r, !1), window.addEventListener("resize", r, !1), p.resizeInterval = setInterval(r, 250), m.default.forEach(function(i) {
                                            return t.subscribe(function() {
                                                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                                return (e = p.eventProxy).emit.apply(e, [i].concat(n))
                                            }, i)
                                        }), p.once(m.default.AdError, a), (0, v.anyEmitted)(p.eventProxy, ["AdLoaded", "AdImpression", "AdStarted", "AdVideoStart"]).then(function() {
                                            l.style.opacity = "1", p.api = t, o(p), p.emit(m.default.AdLoaded)
                                        }), (0, v.anyEmitted)(p.eventProxy, ["AdStarted", "AdImpression", "AdVideoStart", "AdVideoFirstQuartile"]).then(function() {
                                            return p.emit(m.default.AdStarted)
                                        }), p.eventProxy.on(m.default.AdVideoComplete, function() {
                                            function e() {
                                                var e;
                                                (0, v.anyEmitted)(p.eventProxy, ["AdImpression", "AdVideoStart"]).then(function() {
                                                    return e = !0
                                                }), (0, v.sleep)(1500).then(function() {
                                                    return !e && p.stopAd()
                                                })
                                            }
                                            p.eventProxy.once("AdPaused", e), (0, v.anyEmitted)(p.eventProxy, ["AdImpression", "AdVideoStart", "AdError", "AdStopped"]).then(function() {
                                                return p.eventProxy.removeListener("AdPaused", e)
                                            })
                                        }), t.initAd(i.width, i.height, "normal", c, {
                                            AdParameters: "string" == typeof u ? u.trim() : u
                                        }, {
                                            slot: p.slot_,
                                            videoSlot: p.videoSlot_,
                                            videoSlotCanAutoPlay: p._videoSlotCanAutoPlay
                                        })
                                    }, r.onerror = function() {
                                        return a(f("Failed to load MediaFile [" + n + "]."))
                                    }, l.contentWindow.document.head.appendChild(r)
                                }));
                            case 41:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [16, 21]
                    ])
                })), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "startAd",
                value: function() {
                    for (var n = this, e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                    return new Promise(function(e, t) {
                        n.eventProxy.once(m.default.AdError, t), n.proxy.apply(n, ["startAd", m.default.AdStarted].concat(r)).then(e)
                    })
                }
            }, {
                key: "_cleanup",
                value: function() {
                    this.isClean || (this.isClean = !0, this.logger("._cleanup()"), clearInterval(this.resizeInterval), this.iframe.remove(), this.videoSlotWrapper.remove(), this.iframe = null, this.api = null)
                }
            }, {
                key: "stopAd",
                value: (t = (0, i.default)(s.default.mark(function e() {
                    var t, n = this,
                        r = arguments;
                    return s.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t = !(0 < r.length && void 0 !== r[0]) || r[0], this.isStopped) return e.abrupt("return");
                                e.next = 3;
                                break;
                            case 3:
                                if (this.isStopped = !0, this.logger(".stopAd()"), this.vpaid && t) return e.next = 8, new Promise(function(e) {
                                    n.eventProxy.once("AdStopped", e);
                                    try {
                                        n.vpaid.stopAd()
                                    } catch (e) {}(0, v.sleep)(500).then(e)
                                });
                                e.next = 8;
                                break;
                            case 8:
                                this._cleanup(), this.emit(m.default.AdStopped);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return t.apply(this, arguments)
                })
            }, {
                key: "adVolume",
                get: function() {
                    return this.proxy("getAdVolume")
                },
                set: function(e) {
                    return this.logger("set adVolume to %s", e), this.videoSlot_ && (this.videoSlot_.volume = e), this.proxy("setAdVolume", null, e)
                }
            }]), a
        }(p.default);
        t.default = y
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = r(n(1)),
            o = r(n(2)),
            a = r(n(3)),
            s = r(n(4)),
            u = r(n(5)),
            c = r(n(12)),
            l = r(n(7));

        function d(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, u.default)(r);
                return t = i ? (e = (0, u.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, s.default)(this, t)
            }
        }
        var f = function(e) {
            (0, a.default)(r, e);
            var n = d(r);

            function r(e) {
                var t;
                return (0, i.default)(this, r), (t = n.call(this)).container = e, t.api = null, t.vpaidVersion = null, t.setMaxListeners(1e3), t
            }
            return (0, o.default)(r, [{
                key: "load",
                value: function() {
                    throw new Error("VPAID subclass must implement load() method.")
                }
            }, {
                key: "resizeAd",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.proxy.apply(this, ["resizeAd", l.default.AdSizeChange].concat(t))
                }
            }, {
                key: "startAd",
                value: function() {
                    throw new Error("VPAID subclass must implement startAd() method.")
                }
            }, {
                key: "stopAd",
                value: function() {
                    throw new Error("VPAID subclass must implement stopAd() method.")
                }
            }, {
                key: "pauseAd",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.proxy.apply(this, ["pauseAd", l.default.AdPaused].concat(t))
                }
            }, {
                key: "resumeAd",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.proxy.apply(this, ["resumeAd", l.default.AdPlaying].concat(t))
                }
            }, {
                key: "expandAd",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.proxy.apply(this, ["expandAd", l.default.AdExpandedChange].concat(t))
                }
            }, {
                key: "collapseAd",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.proxy.apply(this, ["collapseAd", l.default.AdExpandedChange].concat(t))
                }
            }, {
                key: "skipAd",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.proxy.apply(this, ["skipAd", l.default.AdSkipped].concat(t))
                }
            }, {
                key: "proxy",
                value: function(t, e) {
                    for (var n = this, r = 1 < arguments.length && void 0 !== e ? e : null, i = arguments.length, o = new Array(2 < i ? i - 2 : 0), a = 2; a < i; a++) o[a - 2] = arguments[a];
                    this.logger(".".concat(t, "()"));

                    function s() {
                        var e;
                        return (e = n.api)[t].apply(e, o)
                    }

                    function u() {
                        return n.logger(".".concat(t, "() failed. Ad has not been loaded.")), new Error("Ad has not been loaded.")
                    }
                    if (r) return new Promise(function(e, t) {
                        return n.api ? (n.once(r, function() {
                            return e(n)
                        }), s()) : t(u())
                    });
                    if (!this.api) throw u();
                    return s()
                }
            }, {
                key: "adLinear",
                get: function() {
                    return this.proxy("getAdLinear")
                }
            }, {
                key: "adWidth",
                get: function() {
                    return this.proxy("getAdWidth")
                }
            }, {
                key: "adHeight",
                get: function() {
                    return this.proxy("getAdHeight")
                }
            }, {
                key: "adExpanded",
                get: function() {
                    return this.proxy("getAdExpanded")
                }
            }, {
                key: "adSkippableState",
                get: function() {
                    return this.proxy("getAdSkippableState")
                }
            }, {
                key: "adRemainingTime",
                get: function() {
                    return this.proxy("getAdRemainingTime")
                }
            }, {
                key: "adDuration",
                get: function() {
                    return this.proxy("getAdDuration")
                }
            }, {
                key: "adVolume",
                get: function() {
                    return this.proxy("getAdVolume")
                },
                set: function(e) {
                    return this.proxy("setAdVolume", null, e)
                }
            }, {
                key: "adCompanions",
                get: function() {
                    return this.proxy("getAdCompanions")
                }
            }, {
                key: "adIcons",
                get: function() {
                    return this.proxy("getAdIcons")
                }
            }]), r
        }(c.default);
        t.default = f
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = r(n(1)),
            o = r(n(2)),
            a = function() {
                function n(e) {
                    (0, i.default)(this, n);
                    var t = e.split(".").map(parseFloat);
                    this.string = e, this.major = t[0], this.minor = t[1], this.patch = t[2]
                }
                return (0, o.default)(n, [{
                    key: "toString",
                    value: function() {
                        return this.string
                    }
                }]), n
            }();
        t.default = a
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = r(n(1)),
            i = r(n(2)),
            o = r(n(3)),
            a = r(n(4)),
            s = r(n(5)),
            c = r(n(12)),
            l = r(n(7)),
            d = r(n(24)),
            f = r(n(112)),
            p = n(11);

        function h(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, s.default)(r);
                return t = i ? (e = (0, s.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, a.default)(this, t)
            }
        }
        var A = function(e) {
            (0, o.default)(s, e);
            var a = h(s);

            function s(e, t) {
                var i, n = t.logger,
                    r = t.skipHandler,
                    o = t.skipOffset;
                return (0, u.default)(this, s), (i = a.call(this)).logger = n, i.container = e, i.video = null, i.adSkippableState = !1, i.__private__ = {
                    skipHandler: r,
                    skipOffset: o,
                    hasPlayed: !1,
                    hasStopped: !1
                }, l.default.forEach(function(r) {
                    return i.on(r, function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return i.logger("player emitted %s with args: %o", r, t)
                    })
                }), i.logger("new instance"), i
            }
            return (0, i.default)(s, [{
                key: "_notLoadedError",
                value: function() {
                    var e = "The <video> has not been loaded.";
                    return this.logger(e), new Error(e)
                }
            }, {
                key: "_forcePlaying",
                value: function() {
                    var e = this,
                        t = this.video,
                        n = this.logger;
                    n("try to play video");
                    var r = t.play();
                    return void 0 === r ? (n("video is playing with volume"), Promise.resolve()) : r.then(function() {
                        return n("video is playing with volume")
                    }, function() {
                        return t.volume = 0, t.muted = !0, t.play().then(function() {
                            return e.emit("force-muted"), n("video is playing, but has been muted"), !0
                        }, function(e) {
                            return n(e), Promise.reject(e)
                        })
                    })
                }
            }, {
                key: "load",
                value: function(e) {
                    var o = this;
                    return this.logger(".load(%o)", e), e ? new Promise(function(t, n) {
                        var r = (0, p.createTag)("video", [], {
                                display: "block",
                                width: "100%",
                                height: "100%",
                                objectFit: "contain"
                            }, {
                                "webkit-playsinline": !0,
                                playsinline: !0,
                                "x-webkit-playsinline": !0
                            }, {
                                src: e.uri,
                                preload: "metadata",
                                muted: !0,
                                volume: 0
                            }),
                            i = Date.now();
                        (0, p.once)(r, d.default.LOADEDMETADATA, function() {
                            o.logger("video loaded after %sms.", Date.now() - i);
                            var e = new f.default(r);
                            new p.EventProxy(l.default).from(e).to(o), o.video = r, t(o), o.emit(l.default.AdLoaded)
                        }), (0, p.once)(r, d.default.ERROR, function() {
                            var e = r.error;
                            o.logger("video load error %o", e), o.emit(l.default.AdError, e.message), n(e), o.stopAd()
                        }), (0, p.on)(r, d.default.DURATIONCHANGE, function() {
                            return o.emit(l.default.AdDurationChange)
                        }), (0, p.once)(r, d.default.ENDED, function() {
                            return o.stopAd()
                        }), (0, p.on)(r, "click", function() {
                            return o.emit(l.default.AdClickThru, null, null, !0)
                        }), o.container.appendChild(r)
                    }) : new Promise(function(e, t) {
                        var n = "There are no playable <MediaFile>s.";
                        o.emit(l.default.AdError, n), t(new Error(n)), o.stopAd()
                    })
                }
            }, {
                key: "startAd",
                value: function() {
                    var n = this;
                    return this.logger(".startAd()"), this.__private__.hasPlayed ? Promise.reject(new Error("The ad has already been started.")) : new Promise(function(e, t) {
                        (0, p.once)(n.video, d.default.PLAYING, function() {
                            n.__private__.hasPlayed = !0, e(n), setTimeout(function() {
                                n.emit(l.default.AdStarted), n.emit(l.default.AdImpression)
                            }, 0), n._createSkipBtn()
                        }), n._forcePlaying().then(function(e) {
                            e && n.emit(l.default.AdVolumeChange)
                        }, function(e) {
                            n.emit(l.default.AdError, e.message), t(e), n.stopAd()
                        })
                    })
                }
            }, {
                key: "stopAd",
                value: function() {
                    return this.logger(".stopAd()"), this.__private__.hasStopped || (this.__private__.hasStopped = !0, this.container.innerHTML = "", this.emit(l.default.AdStopped)), Promise.resolve(this)
                }
            }, {
                key: "pauseAd",
                value: function() {
                    var t = this;
                    return this.logger(".pauseAd()"), this.video.paused ? Promise.resolve(this) : new Promise(function(e) {
                        (0, p.once)(t.video, d.default.PAUSE, function() {
                            e(t), t.emit(l.default.AdPaused)
                        }), t.video.pause()
                    })
                }
            }, {
                key: "resumeAd",
                value: function() {
                    var t = this;
                    return this.logger(".resumeAd()"), this.__private__.hasPlayed ? this.video.paused ? new Promise(function(e) {
                        return (0, p.once)(t.video, d.default.PLAY, function() {
                            e(t), t.emit(l.default.AdPlaying)
                        }), t._forcePlaying().then(function(e) {
                            return e && t.emit(l.default.AdVolumeChange)
                        })
                    }) : Promise.resolve(this) : Promise.reject(new Error("The ad has not been started yet."))
                }
            }, {
                key: "_createSkipBtn",
                value: function() {
                    var e = this,
                        t = this.__private__,
                        n = t.skipOffset,
                        r = t.skipHandler;
                    n && r(this.container, n, function() {
                        e.adSkippableState = !0, e.emit(l.default.AdSkippableStateChange)
                    }, function() {
                        return e.emit(l.default.AdSkipped)
                    }, this)
                }
            }, {
                key: "adRemainingTime",
                get: function() {
                    if (!this.video) throw this._notLoadedError();
                    return this.video.duration - this.video.currentTime
                }
            }, {
                key: "adDuration",
                get: function() {
                    if (!this.video) throw this._notLoadedError();
                    return this.video.duration
                }
            }, {
                key: "adVolume",
                get: function() {
                    if (!this.video) throw this._notLoadedError();
                    return this.video.volume
                },
                set: function(e) {
                    if (this.logger("set adVolume to %s", e), !this.video) throw this._notLoadedError();
                    if (this.video.volume === e) return e;
                    var t = this.video.paused;
                    return this.video.volume = e, this.video.muted = !e, !t && this.video.paused && (this.logger("rollback ad volume"), this.video.volume = 0, this.video.muted = !0, this.video.play()), this.emit(l.default.AdVolumeChange), e
                }
            }]), s
        }(c.default);
        t.default = A
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = r(n(1)),
            a = r(n(2)),
            s = r(n(3)),
            u = r(n(4)),
            c = r(n(5)),
            i = r(n(113)),
            l = r(n(24));

        function d(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, c.default)(r);
                return t = i ? (e = (0, c.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, u.default)(this, t)
            }
        }
        var f = function(e) {
            (0, s.default)(i, e);
            var r = d(i);

            function i(t) {
                var n;
                return (0, o.default)(this, i), (n = r.call(this, Math.floor(t.duration || 0))).video = t, [l.default.PLAYING, l.default.PAUSE, l.default.TIMEUPDATE].forEach(function(e) {
                    return t.addEventListener(e, function() {
                        return n.tick()
                    }, !1)
                }), n
            }
            return (0, a.default)(i, [{
                key: "_getState",
                value: function() {
                    return {
                        playing: !this.video.paused,
                        currentTime: this.video.currentTime
                    }
                }
            }]), i
        }(i.default);
        t.default = f
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = r(n(1)),
            o = r(n(2)),
            a = r(n(3)),
            s = r(n(4)),
            u = r(n(5)),
            c = r(n(12)),
            l = r(n(7));

        function d(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, u.default)(r);
                return t = i ? (e = (0, u.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, s.default)(this, t)
            }
        }

        function f(e, t) {
            t.fired[e] || (t.emit(e), t.fired[e] = !0)
        }
        var p = function(e) {
            (0, a.default)(r, e);
            var n = d(r);

            function r(e) {
                var t;
                return (0, i.default)(this, r), (t = n.call(this)).duration = e, t.seconds = Array.apply([], new Array(e)).map(function() {
                    return !1
                }), t.fired = [l.default.AdVideoStart, l.default.AdVideoFirstQuartile, l.default.AdVideoMidpoint, l.default.AdVideoThirdQuartile, l.default.AdVideoComplete].reduce(function(e, t) {
                    return e[t] = !1, e
                }, {}), t
            }
            return (0, o.default)(r, [{
                key: "tick",
                value: function() {
                    function e(e) {
                        return n.slice(0, o[e - 1]).every(function(e) {
                            return !0 === e
                        })
                    }
                    var t = this,
                        n = this.seconds,
                        r = this._getState(),
                        i = Math.round(r.currentTime) - 1,
                        o = [1, 2, 3, 4].map(function(e) {
                            return Math.floor(t.duration / 4 * e)
                        }, this);
                    r.playing && (setTimeout(function() {
                        return f(l.default.AdVideoStart, t)
                    }, 5), -1 < i && (this.seconds[i] = !0)), e(1) && f(l.default.AdVideoFirstQuartile, this), e(2) && f(l.default.AdVideoMidpoint, this), e(3) && f(l.default.AdVideoThirdQuartile, this), e(4) && f(l.default.AdVideoComplete, this)
                }
            }]), r
        }(c.default);
        t.default = p
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = r(n(8)),
            s = r(n(9)),
            u = r(n(1)),
            c = r(n(2)),
            l = r(n(3)),
            o = r(n(4)),
            d = r(n(5)),
            i = r(n(25)),
            f = n(11),
            p = r(n(7));

        function h(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, d.default)(r);
                return t = i ? (e = (0, d.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, o.default)(this, t)
            }
        }
        var A = function(e) {
            (0, l.default)(o, e);
            var t, n, r, i = h(o);

            function o() {
                return (0, u.default)(this, o), i.apply(this, arguments)
            }
            return (0, c.default)(o, [{
                key: "load",
                value: (r = (0, s.default)(a.default.mark(function e(t, n, r) {
                    var i;
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.logger(".load(%o, %o, %o)", t, n, r), (0, f.trim)(t)) {
                                    e.next = 5;
                                    break
                                }
                                throw i = "invalid mediaFile link", this.logger(i), new Error(i);
                            case 5:
                                this.__private__.ready = !0, Object.assign(this.__private__, {
                                    mediaFile: t,
                                    parameters: n,
                                    forceClickable: r
                                }), this.emit(p.default.AdLoaded);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function(e, t, n) {
                    return r.apply(this, arguments)
                })
            }, {
                key: "startAd",
                value: (n = (0, s.default)(a.default.mark(function e() {
                    var t, n, r, i, o;
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.logger(".startAd()"), t = this.__private__, n = t.ready, r = t.mediaFile, i = t.forceClickable, n) {
                                    e.next = 6;
                                    break
                                }
                                throw o = "Ad has not been loaded", this.logger(o), new Error(o);
                            case 6:
                                this.container.innerHTML = r, i && (this.logger("creating click area"), this._createClickArea()), this.emit(p.default.AdStarted), this.emit(p.default.AdImpression);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "stopAd",
                value: (t = (0, s.default)(a.default.mark(function e() {
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.__private__.stopped) return e.abrupt("return");
                                e.next = 2;
                                break;
                            case 2:
                                this.__private__.stopped = !0, this.logger(".stopAd()"), this.container.innerHTML = "", this.emit(p.default.AdStopped);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return t.apply(this, arguments)
                })
            }]), o
        }(i.default);
        t.default = A
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = r(n(8)),
            a = r(n(9)),
            s = r(n(1)),
            c = r(n(2)),
            l = r(n(3)),
            o = r(n(4)),
            d = r(n(5)),
            i = r(n(25)),
            f = n(11),
            p = r(n(7));

        function h(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, d.default)(r);
                return t = i ? (e = (0, d.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, o.default)(this, t)
            }
        }
        var A = function(e) {
            (0, l.default)(o, e);
            var t, n, r, i = h(o);

            function o() {
                return (0, s.default)(this, o), i.apply(this, arguments)
            }
            return (0, c.default)(o, [{
                key: "load",
                value: (r = (0, a.default)(u.default.mark(function e(t, n, r) {
                    var i;
                    return u.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.logger(".load(%o, %o, %o)", t, n, r), (0, f.trim)(t)) {
                                    e.next = 5;
                                    break
                                }
                                throw i = "invalid src", this.logger(i), new Error(i);
                            case 5:
                                Object.assign(this.__private__, {
                                    src: t,
                                    parameters: n,
                                    forceClickable: r,
                                    ready: !0,
                                    adElement: (0, f.createTag)("iframe", [], {
                                        width: "100%",
                                        height: "100%",
                                        border: "none"
                                    }, {
                                        frameborder: 0
                                    }, {
                                        src: t
                                    })
                                }), this.emit(p.default.AdLoaded);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function(e, t, n) {
                    return r.apply(this, arguments)
                })
            }, {
                key: "startAd",
                value: (n = (0, a.default)(u.default.mark(function e() {
                    var t, n, r, i, o, a, s = this;
                    return u.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.logger(".startAd()"), t = this.__private__, n = t.ready, r = t.adElement, i = t.forceClickable, n) {
                                    e.next = 6;
                                    break
                                }
                                throw o = "Ad has not been loaded", this.logger(o), new Error(o);
                            case 6:
                                return a = function() {
                                    return new Promise(function(e, t) {
                                        r.onload = e, r.onerror = t, setTimeout(t, 3e3), s.container.appendChild(r)
                                    })
                                }, e.abrupt("return", new Promise(function(e, t) {
                                    a().then(function() {
                                        e(), s.emit(p.default.AdStarted), s.emit(p.default.AdImpression), i && (s.logger("creating click area"), s._createClickArea())
                                    }, function() {
                                        s.emit(p.default.AdError), t(), s.stopAd()
                                    })
                                }));
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "stopAd",
                value: (t = (0, a.default)(u.default.mark(function e() {
                    var t;
                    return u.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.__private__.stopped) return e.abrupt("return");
                                e.next = 2;
                                break;
                            case 2:
                                this.__private__.stopped = !0, this.logger(".stopAd()"), (t = this.__private__.adElement) && t.parentNode && t.parentNode.removeChild(t), this.emit(p.default.AdStopped);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return t.apply(this, arguments)
                })
            }]), o
        }(i.default);
        t.default = A
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = r(n(8)),
            a = r(n(9)),
            s = r(n(1)),
            c = r(n(2)),
            l = r(n(3)),
            o = r(n(4)),
            d = r(n(5)),
            i = r(n(25)),
            f = n(11),
            p = r(n(7));

        function h(r) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t, n = (0, d.default)(r);
                return t = i ? (e = (0, d.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, o.default)(this, t)
            }
        }
        var A = function(e) {
            (0, l.default)(o, e);
            var t, n, r, i = h(o);

            function o() {
                return (0, s.default)(this, o), i.apply(this, arguments)
            }
            return (0, c.default)(o, [{
                key: "load",
                value: (r = (0, a.default)(u.default.mark(function e(t, n, r) {
                    var i, o, a, s = this;
                    return u.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.logger(".load(%o, %o, %o)", t, n, r), (0, f.trim)(t)) {
                                    e.next = 5;
                                    break
                                }
                                throw i = "invalid src", this.logger(i), new Error(i);
                            case 5:
                                return o = (0, f.createTag)("img", [], {
                                    width: "100%",
                                    height: "100%",
                                    display: "none"
                                }, {}, {
                                    src: t
                                }), Object.assign(this.__private__, {
                                    src: t,
                                    parameters: n,
                                    forceClickable: r,
                                    adElement: o
                                }), a = function() {
                                    return new Promise(function(e, t) {
                                        o.onload = e, o.onerror = t, setTimeout(e, 1e3), s.container.appendChild(o)
                                    })
                                }, e.abrupt("return", new Promise(function(e, t) {
                                    a().then(function() {
                                        s.__private__.ready = !0, s.emit(p.default.AdLoaded), e()
                                    }, function() {
                                        s.emit(p.default.AdError), t(), s.stopAd()
                                    })
                                }));
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function(e, t, n) {
                    return r.apply(this, arguments)
                })
            }, {
                key: "startAd",
                value: (n = (0, a.default)(u.default.mark(function e() {
                    var t, n, r, i, o, a = this;
                    return u.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.logger(".startAd()"), t = this.__private__, n = t.ready, r = t.adElement, i = t.forceClickable, n) {
                                    e.next = 6;
                                    break
                                }
                                throw o = "Ad has not been loaded", this.logger(o), new Error(o);
                            case 6:
                                r.style.display = "block", this.emit(p.default.AdStarted), this.emit(p.default.AdImpression), i && (this.logger("bind click listener"), r.onclick = function() {
                                    return a.emit(p.default.AdClickThru, null, null, !0)
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "stopAd",
                value: (t = (0, a.default)(u.default.mark(function e() {
                    var t;
                    return u.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.__private__.stopped) return e.abrupt("return");
                                e.next = 2;
                                break;
                            case 2:
                                this.__private__.stopped = !0, this.logger(".stopAd()"), (t = this.__private__.adElement) && t.parentNode && t.parentNode.removeChild(t), this.emit(p.default.AdStopped);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return t.apply(this, arguments)
                })
            }]), o
        }(i.default);
        t.default = A
    }, function(e, t, n) {
        var r = n(37),
            i = n(118);
        "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
            [e.i, i, ""]
        ]);
        var o = {
            insert: "head",
            singleton: !1
        };
        r(i, o);
        e.exports = i.locals || {}
    }, function(e, t, n) {
        (t = n(38)(!0)).push([e.i, '.index__aspect {\n    position: relative;\n    width: 100%;\n    max-height: 100%;\n    overflow: hidden;\n}\n\n.index__aspect::before {\n    content: "";\n    display: block;\n    padding-bottom: 56.25%;\n}\n\n.index__aspect video,\n.index__aspect iframe:not(.index__overlay) {\n    /*pointer-events: all;*/\n    position: absolute !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 100% !important;\n    height: 100% !important;\n}\n\n.index__overlay{}\n', "", {
            version: 3,
            sources: ["index.css"],
            names: [],
            mappings: "AAAA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,sBAAsB;AAC1B;;AAEA;;IAEI,uBAAuB;IACvB,6BAA6B;IAC7B,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA,gBAAS",
            file: "index.css",
            sourcesContent: ['.aspect {\n    position: relative;\n    width: 100%;\n    max-height: 100%;\n    overflow: hidden;\n}\n\n.aspect::before {\n    content: "";\n    display: block;\n    padding-bottom: 56.25%;\n}\n\n.aspect video,\n.aspect iframe:not(.overlay) {\n    /*pointer-events: all;*/\n    position: absolute !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 100% !important;\n    height: 100% !important;\n}\n\n.overlay{}\n']
        }]), t.locals = {
            aspect: "index__aspect",
            overlay: "index__overlay"
        }, e.exports = t
    }, function(e, T, t) {
        "use strict";
        t.r(T),
            function(e) {
                var r = function() {
                        if ("undefined" != typeof Map) return Map;

                        function r(e, n) {
                            var r = -1;
                            return e.some(function(e, t) {
                                return e[0] === n && (r = t, !0)
                            }), r
                        }
                        return Object.defineProperty(e.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.get = function(e) {
                            var t = r(this.__entries__, e),
                                n = this.__entries__[t];
                            return n && n[1]
                        }, e.prototype.set = function(e, t) {
                            var n = r(this.__entries__, e);
                            ~n ? this.__entries__[n][1] = t : this.__entries__.push([e, t])
                        }, e.prototype.delete = function(e) {
                            var t = this.__entries__,
                                n = r(t, e);
                            ~n && t.splice(n, 1)
                        }, e.prototype.has = function(e) {
                            return !!~r(this.__entries__, e)
                        }, e.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, e.prototype.forEach = function(e, t) {
                            void 0 === t && (t = null);
                            for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                var i = r[n];
                                e.call(t, i[1], i[0])
                            }
                        }, e;

                        function e() {
                            this.__entries__ = []
                        }
                    }(),
                    n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                    t = void 0 !== e && e.Math === Math ? e : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                    u = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(t) : function(e) {
                        return setTimeout(function() {
                            return e(Date.now())
                        }, 1e3 / 60)
                    },
                    c = 2;
                var i = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                    o = "undefined" != typeof MutationObserver,
                    a = (s.prototype.addObserver = function(e) {
                        ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                    }, s.prototype.removeObserver = function(e) {
                        var t = this.observers_,
                            n = t.indexOf(e);
                        ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                    }, s.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, s.prototype.updateObservers_ = function() {
                        var e = this.observers_.filter(function(e) {
                            return e.gatherActive(), e.hasActive()
                        });
                        return e.forEach(function(e) {
                            return e.broadcastActive()
                        }), 0 < e.length
                    }, s.prototype.connect_ = function() {
                        n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), o ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, s.prototype.disconnect_ = function() {
                        n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, s.prototype.onTransitionEnd_ = function(e) {
                        var t = e.propertyName,
                            n = void 0 === t ? "" : t;
                        i.some(function(e) {
                            return !!~n.indexOf(e)
                        }) && this.refresh()
                    }, s.getInstance = function() {
                        return this.instance_ || (this.instance_ = new s), this.instance_
                    }, s.instance_ = null, s);

                function s() {
                    function e() {
                        o && (o = !1, r()), a && n()
                    }

                    function t() {
                        u(e)
                    }

                    function n() {
                        var e = Date.now();
                        if (o) {
                            if (e - s < c) return;
                            a = !0
                        } else a = !(o = !0), setTimeout(t, i);
                        s = e
                    }
                    var r, i, o, a, s;
                    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = (r = this.refresh.bind(this), a = o = !(i = 20), s = 0, n)
                }
                var l = function(e, t) {
                        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                            var i = r[n];
                            Object.defineProperty(e, i, {
                                value: t[i],
                                enumerable: !1,
                                writable: !1,
                                configurable: !0
                            })
                        }
                        return e
                    },
                    f = function(e) {
                        return e && e.ownerDocument && e.ownerDocument.defaultView || t
                    },
                    p = g(0, 0, 0, 0);

                function h(e) {
                    return parseFloat(e) || 0
                }

                function A(n) {
                    for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
                    return e.reduce(function(e, t) {
                        return e + h(n["border-" + t + "-width"])
                    }, 0)
                }

                function d(e) {
                    var t = e.clientWidth,
                        n = e.clientHeight;
                    if (!t && !n) return p;
                    var r, i, o, a = f(e).getComputedStyle(e),
                        s = function(e) {
                            for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                                var i = r[n],
                                    o = e["padding-" + i];
                                t[i] = h(o)
                            }
                            return t
                        }(a),
                        u = s.left + s.right,
                        c = s.top + s.bottom,
                        l = h(a.width),
                        d = h(a.height);
                    return "border-box" === a.boxSizing && (Math.round(l + u) !== t && (l -= A(a, "left", "right") + u), Math.round(d + c) !== n && (d -= A(a, "top", "bottom") + c)), (o = e) !== f(o).document.documentElement && (r = Math.round(l + u) - t, i = Math.round(d + c) - n, 1 !== Math.abs(r) && (l -= r), 1 !== Math.abs(i) && (d -= i)), g(s.left, s.top, l, d)
                }
                var v = "undefined" != typeof SVGGraphicsElement ? function(e) {
                    return e instanceof f(e).SVGGraphicsElement
                } : function(e) {
                    return e instanceof f(e).SVGElement && "function" == typeof e.getBBox
                };

                function m(e) {
                    return n ? v(e) ? g(0, 0, (t = e.getBBox()).width, t.height) : d(e) : p;
                    var t
                }

                function g(e, t, n, r) {
                    return {
                        x: e,
                        y: t,
                        width: n,
                        height: r
                    }
                }
                var y = (b.prototype.isActive = function() {
                    var e = m(this.target);
                    return (this.contentRect_ = e).width !== this.broadcastWidth || e.height !== this.broadcastHeight
                }, b.prototype.broadcastRect = function() {
                    var e = this.contentRect_;
                    return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                }, b);

                function b(e) {
                    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = g(0, 0, 0, 0), this.target = e
                }
                var w = function(e, t) {
                        var n, r, i, o, a, s, u, c = (r = (n = t).x, i = n.y, o = n.width, a = n.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, u = Object.create(s.prototype), l(u, {
                            x: r,
                            y: i,
                            width: o,
                            height: a,
                            top: i,
                            right: r + o,
                            bottom: a + i,
                            left: r
                        }), u);
                        l(this, {
                            target: e,
                            contentRect: c
                        })
                    },
                    _ = (x.prototype.observe = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(e instanceof f(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) || (t.set(e, new y(e)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, x.prototype.unobserve = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(e instanceof f(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                        }
                    }, x.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, x.prototype.gatherActive = function() {
                        var t = this;
                        this.clearActive(), this.observations_.forEach(function(e) {
                            e.isActive() && t.activeObservations_.push(e)
                        })
                    }, x.prototype.broadcastActive = function() {
                        var e, t;
                        this.hasActive() && (e = this.callbackCtx_, t = this.activeObservations_.map(function(e) {
                            return new w(e.target, e.broadcastRect())
                        }), this.callback_.call(e, t, e), this.clearActive())
                    }, x.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, x.prototype.hasActive = function() {
                        return 0 < this.activeObservations_.length
                    }, x);

                function x(e, t, n) {
                    if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                    this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                }
                var k = new("undefined" != typeof WeakMap ? WeakMap : r),
                    E = function e(t) {
                        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        var n = a.getInstance(),
                            r = new _(t, n, this);
                        k.set(this, r)
                    };
                ["observe", "unobserve", "disconnect"].forEach(function(t) {
                    E.prototype[t] = function() {
                        var e;
                        return (e = k.get(this))[t].apply(e, arguments)
                    }
                });
                var C = void 0 !== t.ResizeObserver ? t.ResizeObserver : E;
                T.default = C
            }.call(this, t(26))
    }, function(e, d, f) {
        "use strict";
        (function(e, r) {
            var t = f(0);
            Object.defineProperty(d, "__esModule", {
                value: !0
            }), d.Mutex = d.Semaphore = void 0;
            var n = t(f(3)),
                o = t(f(4)),
                a = t(f(5)),
                i = t(f(1)),
                s = t(f(2));

            function u(r) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var e, t, n = (0, a.default)(r);
                    return t = i ? (e = (0, a.default)(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, o.default)(this, t)
                }
            }
            var c = function() {
                function t(e) {
                    (0, i.default)(this, t), this.tasks = [], this.count = e, this.initCount = e
                }
                return (0, s.default)(t, [{
                    key: "updateCount",
                    value: function(e) {
                        var t = e - this.initCount;
                        this.count += t, this.initCount = e, this.sched()
                    }
                }, {
                    key: "sched",
                    value: function() {
                        for (; 0 < this.count && 0 < this.tasks.length;) {
                            this.count--;
                            var e = this.tasks.shift();
                            if (void 0 === e) throw "Unexpected undefined value in tasks list";
                            e()
                        }
                    }
                }, {
                    key: "acquire",
                    value: function() {
                        var n = this;
                        return new Promise(function(t) {
                            n.tasks.push(function() {
                                var e = !1;
                                t(function() {
                                    e || (e = !0, n.count++, n.sched())
                                })
                            }), e && e.nextTick ? e.nextTick(n.sched.bind(n)) : r ? r(n.sched.bind(n)) : setTimeout(n.sched.bind(n), 0)
                        })
                    }
                }, {
                    key: "use",
                    value: function(e) {
                        return this.acquire().then(function(t) {
                            return e().then(function(e) {
                                return t(), e
                            }).catch(function(e) {
                                throw t(), e
                            })
                        })
                    }
                }]), t
            }();
            d.Semaphore = c;
            var l = function() {
                (0, n.default)(t, c);
                var e = u(t);

                function t() {
                    return (0, i.default)(this, t), e.call(this, 1)
                }
                return t
            }();
            d.Mutex = l
        }).call(this, f(17), f(121).setImmediate)
    }, function(e, i, o) {
        (function(e) {
            var t = void 0 !== e && e || "undefined" != typeof self && self || window,
                n = Function.prototype.apply;

            function r(e, t) {
                this._id = e, this._clearFn = t
            }
            i.setTimeout = function() {
                return new r(n.call(setTimeout, t, arguments), clearTimeout)
            }, i.setInterval = function() {
                return new r(n.call(setInterval, t, arguments), clearInterval)
            }, i.clearTimeout = i.clearInterval = function(e) {
                e && e.close()
            }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
                this._clearFn.call(t, this._id)
            }, i.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, i.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, i._unrefActive = i.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                0 <= t && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, o(122), i.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, i.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }).call(this, o(26))
    }, function(e, t, n) {
        (function(e, h) {
            ! function(n, r) {
                "use strict";
                var i, o, a, s, u, c, t, l, e;

                function d(e) {
                    delete o[e]
                }

                function f(e) {
                    if (a) setTimeout(f, 0, e);
                    else {
                        var t = o[e];
                        if (t) {
                            a = !0;
                            try {
                                ! function(e) {
                                    var t = e.callback,
                                        n = e.args;
                                    switch (n.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(n[0]);
                                            break;
                                        case 2:
                                            t(n[0], n[1]);
                                            break;
                                        case 3:
                                            t(n[0], n[1], n[2]);
                                            break;
                                        default:
                                            t.apply(r, n)
                                    }
                                }(t)
                            } finally {
                                d(e), a = !1
                            }
                        }
                    }
                }

                function p(e) {
                    e.source === n && "string" == typeof e.data && 0 === e.data.indexOf(l) && f(+e.data.slice(l.length))
                }
                n.setImmediate || (i = 1, a = !(o = {}), s = n.document, e = (e = Object.getPrototypeOf && Object.getPrototypeOf(n)) && e.setTimeout ? e : n, u = "[object process]" === {}.toString.call(n.process) ? function(e) {
                    h.nextTick(function() {
                        f(e)
                    })
                } : function() {
                    if (n.postMessage && !n.importScripts) {
                        var e = !0,
                            t = n.onmessage;
                        return n.onmessage = function() {
                            e = !1
                        }, n.postMessage("", "*"), n.onmessage = t, e
                    }
                }() ? (l = "setImmediate$" + Math.random() + "$", n.addEventListener ? n.addEventListener("message", p, !1) : n.attachEvent("onmessage", p), function(e) {
                    n.postMessage(l + e, "*")
                }) : n.MessageChannel ? ((t = new MessageChannel).port1.onmessage = function(e) {
                    f(e.data)
                }, function(e) {
                    t.port2.postMessage(e)
                }) : s && "onreadystatechange" in s.createElement("script") ? (c = s.documentElement, function(e) {
                    var t = s.createElement("script");
                    t.onreadystatechange = function() {
                        f(e), t.onreadystatechange = null, c.removeChild(t), t = null
                    }, c.appendChild(t)
                }) : function(e) {
                    setTimeout(f, 0, e)
                }, e.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var r = {
                        callback: e,
                        args: t
                    };
                    return o[i] = r, u(i), i++
                }, e.clearImmediate = d)
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(this, n(26), n(17))
    }], i.c = r, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 48);

    function i(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    var n, r
});
