//!Portions of this code are licensed under the following license:
//!  * @overview es6-promise - a tiny implementation of Promises/A+.
//!  * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
//!  * @license   Licensed under MIT license
//!  *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
//!  * @version   4.1.0+f9a5575b
!function(e) {
	var t = {};
	function n(r) {
		if (t[r])
			return t[r].exports;
		var i = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(i.exports, i, i.exports, n),
			i.l = !0,
			i.exports
	}
	n.m = e,
		n.c = t,
		n.d = function(e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: r
			})
		}
		,
		n.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}),
				Object.defineProperty(e, "__esModule", {
					value: !0
				})
		}
		,
		n.t = function(e, t) {
			if (1 & t && (e = n(e)),
			8 & t)
				return e;
			if (4 & t && "object" == typeof e && e && e.__esModule)
				return e;
			var r = Object.create(null);
			if (n.r(r),
				Object.defineProperty(r, "default", {
					enumerable: !0,
					value: e
				}),
			2 & t && "string" != typeof e)
				for (var i in e)
					n.d(r, i, function(t) {
						return e[t]
					}
						.bind(null, i));
			return r
		}
		,
		n.n = function(e) {
			var t = e && e.__esModule ? function() {
					return e["default"]
				}
				: function() {
					return e
				}
			;
			return n.d(t, "a", t),
				t
		}
		,
		n.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}
		,
		n.p = "",
		n(n.s = 33)
}([function(e, t, n) {
	"use strict";
	var r, i = this && this.__assign || function() {
			return (i = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var i in t = arguments[n])
							Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e
				}
			).apply(this, arguments)
		}
		, o = this && this.__awaiter || function(e, t, n, r) {
			return new (n || (n = Promise))(function(i, o) {
					function s(e) {
						try {
							u(r.next(e))
						} catch (e) {
							o(e)
						}
					}
					function a(e) {
						try {
							u(r["throw"](e))
						} catch (e) {
							o(e)
						}
					}
					function u(e) {
						e.done ? i(e.value) : new n(function(t) {
								t(e.value)
							}
						).then(s, a)
					}
					u((r = r.apply(e, t || [])).next())
				}
			)
		}
		, s = this && this.__generator || function(e, t) {
			var n, r, i, o, s = {
				label: 0,
				sent: function() {
					if (1 & i[0])
						throw i[1];
					return i[1]
				},
				trys: [],
				ops: []
			};
			return o = {
				next: a(0),
				"throw": a(1),
				"return": a(2)
			},
			"function" == typeof Symbol && (o[Symbol.iterator] = function() {
					return this
				}
			),
				o;
			function a(o) {
				return function(a) {
					return function(o) {
						if (n)
							throw new TypeError("Generator is already executing.");
						for (; s; )
							try {
								if (n = 1,
								r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r),
									0) : r.next) && !(i = i.call(r, o[1])).done)
									return i;
								switch (r = 0,
								i && (o = [2 & o[0], i.value]),
									o[0]) {
									case 0:
									case 1:
										i = o;
										break;
									case 4:
										return s.label++,
											{
												value: o[1],
												done: !1
											};
									case 5:
										s.label++,
											r = o[1],
											o = [0];
										continue;
									case 7:
										o = s.ops.pop(),
											s.trys.pop();
										continue;
									default:
										if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
											s = 0;
											continue
										}
										if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
											s.label = o[1];
											break
										}
										if (6 === o[0] && s.label < i[1]) {
											s.label = i[1],
												i = o;
											break
										}
										if (i && s.label < i[2]) {
											s.label = i[2],
												s.ops.push(o);
											break
										}
										i[2] && s.ops.pop(),
											s.trys.pop();
										continue;
								}
								o = t.call(e, s)
							} catch (e) {
								o = [6, e],
									r = 0
							} finally {
								n = i = 0
							}
						if (5 & o[0])
							throw o[1];
						return {
							value: o[0] ? o[1] : void 0,
							done: !0
						}
					}([o, a])
				}
			}
		}
	;
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = n(11)
		, u = n(6)
		, c = n(4)
		, h = n(1)
		, d = n(15);
	t._native_bind = function(e, t) {
		for (var n = [], r = 2; r < arguments.length; r++)
			n[r - 2] = arguments[r];
		return e.bind.apply(e, [t].concat(n))
	}
		,
		t._js_bind = function(e, t) {
			for (var n = [], r = 2; r < arguments.length; r++)
				n[r - 2] = arguments[r];
			return function() {
				var r = Array.prototype.slice.call(arguments);
				e.call.apply(e, [t].concat(n, r))
			}
		}
		,
		t.bind = Function.prototype.bind ? t._native_bind : t._js_bind,
		t._native_map = function(e, t, n) {
			return e.map(t, n)
		}
		,
		t._js_map = function(e, t, n) {
			for (var r = Array(e.length), i = 0; i < e.length; i++)
				r[i] = t.call(n, e[i], i, e);
			return r
		}
		,
		t.map = Array.prototype.map ? t._native_map : t._js_map,
		t._native_trim = function(e) {
			return e.trim()
		}
		,
		t._js_trim = function(e) {
			return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
		}
		,
		t.trim = String.prototype.trim ? t._native_trim : t._js_trim,
		t._native_filter = function(e, t, n) {
			return e.filter(t, n)
		}
		,
		t._js_filter = function(e, t, n) {
			for (var r = Array(e.length), i = 0; i < e.length; i++)
				r[i] = t.call(n, e[i], i, e);
			return r
		}
		,
		t.filter = Array.prototype.filter ? t._native_filter : t._js_filter;
	function l() {
		var e = function(e) {
			return e.matches || e.msMatchesSelector || e.webkitMatchesSelector
		}
			, t = e(window.Element.prototype)
			, n = window.document ? window.document.documentElement : void 0;
		return !n || t && n instanceof window.Element || (t = e(n)),
			[t, function(e, n) {
				return t.call(e, n)
			}
			]
	}
	t.isArray = c.windex.arrayIsArray ? function(e) {
			return c.windex.arrayIsArray(e)
		}
		: function(e) {
			return "[object Array]" == c.windex.objectToString.call(e)
		}
		,
		t._native_keys = function(e) {
			return c.windex.objectKeys(e)
		}
		,
		t._js_keys = function(e) {
			var t = [];
			for (var n in e)
				c.windex.objectHasOwnProp(e, n) && t.push(n);
			return t
		}
		,
		t.keys = "function" == typeof c.windex.objectKeys ? t._native_keys : t._js_keys,
		t.setMatchesSelector = function(e) {
			t.matchesSelector = e
		}
		,
		t.setUpMatchesSelector = l,
		r = l(),
		t._native_matchesSelector = r[0],
		t.matchesSelector = r[1],
		t.hasPrefix = function(e, t) {
			return 0 == e.lastIndexOf(t, 0)
		}
		,
		t.hasSuffix = function(e, t) {
			return !(t.length > e.length) && e.substring(e.length - t.length) == t
		}
		,
		t.forIn = function(e, t) {
			for (var n in e)
				c.windex.objectHasOwnProp(e, n) && t(e[n], n, e)
		}
		,
		t.forInAsync = function(e, t) {
			return o(this, void 0, u.FSPromise, function() {
				var n, r, i, o;
				return s(this, function(s) {
					switch (s.label) {
						case 0:
							for (r in n = [],
								e)
								n.push(r);
							i = 0,
								s.label = 1;
						case 1:
							return i < n.length ? (o = n[i],
								c.windex.objectHasOwnProp(e, o) ? [4, t(e[o], o, e)] : [3, 3]) : [3, 4];
						case 2:
							s.sent(),
								s.label = 3;
						case 3:
							return i++,
								[3, 1];
						case 4:
							return [2];
					}
				})
			})
		}
		,
		t.firstKey = function(e) {
			for (var t in e)
				if (Object.prototype.hasOwnProperty.call(e, t))
					return t
		}
		,
		t.firstValue = function(e) {
			for (var t in e)
				if (Object.prototype.hasOwnProperty.call(e, t))
					return e[t]
		}
		,
		t.hasNKeys = function(e, t) {
			var n = 0;
			for (var r in e)
				if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t)
					return !1;
			return n == t
		}
		,
		t.hasMoreThanNKeys = function(e, t) {
			var n = 0;
			for (var r in e)
				if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t)
					return !0;
			return !1
		}
	;
	t.nextSibling = a.uaIsIE ? function(e) {
			var t = e.nextSibling;
			return t && e.parentNode && t === e.parentNode.firstChild ? null : t
		}
		: function(e) {
			return e.nextSibling
		}
	;
	t.forEachNextSibling = a.uaIsIE ? function(e, t) {
			if (e) {
				var n = e.parentNode ? e.parentNode.firstChild : null;
				do {
					t(e),
						e = e.nextSibling
				} while (e && e != n)
			}
		}
		: function(e, t) {
			for (; e; e = e.nextSibling)
				t(e)
		}
	;
	function f(e, t) {
		if (!e)
			return d.doNothing;
		var n = function(e) {
			try {
				var t = window;
				return t.Zone && t.Zone.root && "function" == typeof t.Zone.root.wrap ? t.Zone.root.wrap(e) : e
			} catch (t) {
				return e
			}
		}(e);
		return t && (n = n.bind(t)),
			d.guard(n, function(e) {
				h.logIfDebug("Unexpected error: " + e)
			})
	}
	function p(e) {
		var t = "Internal error: unable to determine what JSON error was";
		try {
			t = (t = "" + e).replace(/[^a-zA-Z0-9\.\:\!\, ]/g, "_")
		} catch (e) {}
		return "\"" + t + "\""
	}
	t.previousSibling = a.uaIsIE ? function(e) {
			var t = e.previousSibling;
			return t && e.parentNode && t === e.parentNode.lastChild ? null : t
		}
		: function(e) {
			return e.previousSibling
		}
		,
		t.values = function(e) {
			if (c.windex.objectValues)
				return c.windex.objectValues(e || {});
			var t = [];
			for (var n in e)
				e.hasOwnProperty(n) && t.push(e[n]);
			return t
		}
		,
		t.$entry = f,
		t.stringify = function(e) {
			var t, n = Array.prototype.toJSON, r = String.prototype.toJSON;
			n && (Array.prototype.toJSON = void 0),
			r && (String.prototype.toJSON = void 0);
			try {
				t = c.windex.jsonStringify(e)
			} catch (e) {
				t = p(e)
			} finally {
				n && (Array.prototype.toJSON = n),
				r && (String.prototype.toJSON = r)
			}
			return t
		}
		,
		t.jsonErrorString = p,
		t.doctypeString = function(e) {
			var t = e.doctype;
			if (!t)
				return "";
			var n = "<!DOCTYPE ";
			return n += t.name,
			t.publicId && (n += " PUBLIC \"" + t.publicId + "\""),
			t.systemId && (n += " \"" + t.systemId + "\""),
			n + ">"
		}
		,
		t.parseJson = function(e) {
			return c.windex.jsonParse(e)
		}
		,
		t.tryGetScreenDims = function(e) {
			var t = 0
				, n = 0;
			return null == e.screen ? [t, n] : (t = parseInt(String(e.screen.width)),
				n = parseInt(String(e.screen.height)),
				[t = isNaN(t) ? 0 : t, n = isNaN(n) ? 0 : n])
		}
	;
	var _ = function() {
		function e(e, t) {
			this.target = e,
				this.propertyName = t,
				this._before = d.doNothing,
				this._afterSync = d.doNothing,
				this._afterAsync = d.doNothing,
				this.on = !1,
				this.attached = !1,
				this["native"] = e[t]
		}
		return e.prototype.before = function(e) {
			return this._before = f(e),
				this
		}
			,
			e.prototype.afterSync = function(e) {
				return this._afterSync = f(e),
					this
			}
			,
			e.prototype.afterAsync = function(e) {
				var t = this;
				return this._afterAsync = f(function(e) {
					c.windex.setWindowTimeout(window, d.guard(function() {
						t._afterAsync(e)
					}), 0)
				}),
					this
			}
			,
			e.prototype.disable = function() {
				this.on = !1,
				this.target[this.propertyName] == this.shim && (this.target[this.propertyName] = this["native"],
					this.attached = !1)
			}
			,
			e.prototype.enable = function() {
				if (this.on = !0,
					this.attached)
					return !0;
				this.shim || (this.shim = this.makeShim());
				try {
					this.target[this.propertyName] = this.shim
				} catch (e) {
					return !1
				}
				return this.attached = !0,
					!0
			}
			,
			e.prototype.makeShim = function() {
				var e = this;
				return function() {
					var t = {
						that: this,
						args: arguments
					};
					e.on && e._before(t);
					var n = e["native"].apply(this, arguments);
					return e.on && (e._afterSync(t),
						e._afterAsync(t)),
						n
				}
			}
			,
			e
	}()
		, g = {};
	t.activateHook = function(e, t) {
		if (!e || "function" != typeof e[t])
			return null;
		var n;
		g[t] = g[t] || [];
		for (var r = 0; r < g[t].length; r++)
			g[t][r].obj == e && (n = g[t][r].hook);
		return n || (n = new _(e,t),
			g[t].push({
				obj: e,
				hook: n
			})),
			n.enable() ? n : null
	}
		,
		t.shimProp = function(e, t, n) {
			var r = Object.getOwnPropertyDescriptor(e.prototype, t);
			if (!r || !r.set)
				return function() {}
					;
			var o = r.set
				, s = f(n)
				, a = !0;
			function u(e) {
				o.apply(this, arguments),
				a && s(this, e)
			}
			return Object.defineProperty(e.prototype, t, i({}, r, {
				set: u
			})),
				function() {
					a = !1;
					var n = Object.getOwnPropertyDescriptor(e.prototype, t);
					n && u === n.set && Object.defineProperty(e.prototype, t, i({}, n, {
						set: o
					}))
				}
		}
}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = !1;
		function i() {
			return r
		}
		t.initDebug = function(e) {
			r = e
		}
			,
			t.isDebug = i,
			t.logIfDebug = function(e) {
				i() && window.console && console.log(e)
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(19)
			, i = n(1)
			, o = n(9)
			, s = n(20)
			, a = n(15)
			, u = 10
			, c = "[anonymous]"
			, h = /function\s*([\w\-$]+)?\s*\(/i;
		function d(e) {
			return e.stack || e.backtrace || e.stacktrace
		}
		var l = function() {
			function e() {}
			return e.wrap = function(t, n) {
				return void 0 === n && (n = "error"),
					a.guard(t, function(t) {
						return e.sendToBugsnag(t, n)
					})
			}
				,
				e.errorLimit = 15,
				e.sendToBugsnag = function(t, n, a) {
					if (!(e.errorLimit <= 0)) {
						e.errorLimit--,
						"string" == typeof t && (t = new Error(t));
						var l = r.getCookies(document).fs_uid
							, f = l ? r.parseIdentityCookie(l) : void 0;
						f && f.OrgId != o._fs_org(window) && (f = void 0);
						var p = Date.now()
							, _ = new Date(1e3 * s.CompiledTimestamp).toISOString()
							, g = {
							projectRoot: window.location.origin,
							deviceTime: p,
							inIframe: function() {
								try {
									return window.self !== window.top
								} catch (e) {
									return !0
								}
							}(),
							CompiledTimestamp: s.CompiledTimestamp,
							CompiledTime: _,
							orgId: o._fs_org(window),
							"userId:sessionId": f ? f.UserId + ":" + f.SessionId : "NA",
							context: document.location && document.location.pathname,
							message: t.message,
							name: "Recording Error",
							releaseStage: "production " + _,
							severity: n,
							language: navigator.language || navigator.userLanguage || "en-GB",
							stacktrace: d(t) || function() {
								var e, t;
								try {
									throw new Error("")
								} catch (n) {
									e = "<generated>\n",
										t = d(n)
								}
								if (!t) {
									e = "<generated-ie>\n";
									var n = [];
									try {
										for (var r = arguments.callee.caller.caller; r && n.length < u; ) {
											var o = h.test(r.toString()) && RegExp.$1 || c;
											n.push(o),
												r = r.caller
										}
									} catch (e) {
										i.logIfDebug(e)
									}
									t = n.join("\n")
								}
								return e + t
							}()
						};
						if (a)
							for (var v in a)
								g["aux_" + v] = a[v];
						var y = [];
						for (var v in g)
							y.push(encodeURIComponent(v) + "=" + encodeURIComponent(g[v]));
						new Image().src = "https://" + o._fs_rec_host(window) + "/rec/except?" + y.join("&")
					}
				}
				,
				e
		}();
		t.FsBugSnag = l;
		var f = {};
		t.assert = function(e, t, n) {
			if (void 0 === n && (n = 1),
				e)
				return !0;
			if (f[t] = f[t] || 0,
				f[t]++,
			f[t] > n)
				return !1;
			var r = new Error("Assertion failed: " + t);
			return l.sendToBugsnag(r, "error"),
				e
		}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.EVENT_MUT_INSERT = 2,
			t.EVENT_MUT_REMOVE = 3,
			t.EVENT_MUT_ATTR = 4,
			t.EVENT_MUT_ATTR_CURVE = 5,
			t.EVENT_MUT_TEXT = 6,
			t.EVENT_MUT_SKIPIDS = 7,
			t.EVENT_MOUSEMOVE = 8,
			t.EVENT_MOUSEMOVE_CURVE = 9,
			t.EVENT_SCROLL_LAYOUT = 10,
			t.EVENT_SCROLL_LAYOUT_CURVE = 11,
			t.EVENT_MOUSEDOWN = 12,
			t.EVENT_MOUSEUP = 13,
			t.EVENT_KEYDOWN = 14,
			t.EVENT_KEYUP = 15,
			t.EVENT_CLICK = 16,
			t.EVENT_FOCUS = 17,
			t.EVENT_VALUECHANGE = 18,
			t.EVENT_RESIZE_LAYOUT = 19,
			t.EVENT_DOMLOADED = 20,
			t.EVENT_LOAD = 21,
			t.EVENT_PLACEHOLDER_SIZE = 22,
			t.EVENT_UNLOAD = 23,
			t.EVENT_BLUR = 24,
			t.EVENT_SET_FRAME_BASE = 25,
			t.EVENT_TOUCHSTART = 32,
			t.EVENT_TOUCHEND = 33,
			t.EVENT_TOUCHCANCEL = 34,
			t.EVENT_TOUCHMOVE = 35,
			t.EVENT_TOUCHMOVE_CURVE = 36,
			t.EVENT_NAVIGATE = 37,
			t.EVENT_PLAY = 38,
			t.EVENT_PAUSE = 39,
			t.EVENT_RESIZE_VISUAL = 40,
			t.EVENT_RESIZE_VISUAL_CURVE = 41,
			t.EVENT_LOG = 48,
			t.EVENT_ERROR = 49,
			t.EVENT_DBL_CLICK = 50,
			t.EVENT_FORM_SUBMIT = 51,
			t.EVENT_WINDOW_FOCUS = 52,
			t.EVENT_WINDOW_BLUR = 53,
			t.EVENT_HEARTBEAT = 54,
			t.EVENT_WATCHED_ELEM = 56,
			t.PerfEntryTiming = 0,
			t.PerfEntryNavigation = 1,
			t.PerfEntryResource = 2,
			t.PerfEntryPaint = 3,
			t.PerfEntryMark = 4,
			t.PerfEntryMeasure = 5,
			t.PerfEntryMemory = 6,
			t.EVENT_PERF_ENTRY = 57,
			t.RecFeaturePerformance = 0,
			t.RecFeaturePerformanceEntries = 1,
			t.RecFeaturePerformanceMemory = 2,
			t.RecFeatureConsole = 3,
			t.RecFeatureAjax = 4,
			t.RecFeaturePerformanceObserver = 5,
			t.EVENT_REC_FEAT_SUPPORTED = 58,
			t.EVENT_SELECT = 59,
			t.RecStylesheetOwnerTypeNode = 0,
			t.RecStylesheetOwnerTypeRule = 1,
			t.EVENT_CSSRULE_INSERT = 60,
			t.EVENT_CSSRULE_DELETE = 61,
			t.ThrottledStyleSheetHooks = 0,
			t.ThrottledSetPropertyHooks = 1,
			t.EVENT_FAIL_THROTTLED = 62,
			t.EVENT_AJAX_REQUEST = 63,
			t.EVENT_SCROLL_VISUAL_OFFSET = 64,
			t.EVENT_SCROLL_VISUAL_OFFSET_CURVE = 65,
			t.EVENT_MEDIA_QUERY_CHANGE = 66,
			t.EVENT_RESOURCE_TIMING_BUFFER_FULL = 67,
			t.EVENT_MUT_SHADOW = 68,
			t.EVENT_DISABLE_STYLESHEET = 69,
			t.EVENT_FULLSCREEN = 70,
			t.EVENT_FULLSCREEN_ERROR = 71,
			t.EVENT_SYS_SETMETA = 8192,
			t.EVENT_SYS_SETVAR = 8193,
			t.EVENT_SYS_HIGHLIGHT = 8194,
			t.EVENT_SYS_RESOURCEHASH = 8195,
			t.EVENT_SYS_SETCONSENT = 8196,
			t.EVENT_SYS_CUSTOM = 8197,
			t.EVENT_COOKED_LOAD_MELTED = "load-melted",
			t.EVENT_COOKED_LOAD = "load",
			t.EVENT_COOKED_UNLOAD = "unload",
			t.EVENT_COOKED_NAVIGATE = "navigate",
			t.EVENT_COOKED_CLICK = "click",
			t.EVENT_COOKED_TAP = "tap",
			t.EVENT_COOKED_FOCUS = "focus",
			t.EVENT_COOKED_CHANGE = "change",
			t.EVENT_COOKED_MOUSE_THRASH = "thrash",
			t.EVENT_FORM_ABANDONED = "abandon",
			t.EVENT_COOKED_ELEM_SEEN = "seen",
			t.EVENT_COOKED_REQUEST = "request",
			t.EVENT_COOKED_LONG_CLICK = "long_click",
			t.EVENT_COOKED_UNHANDLED_CLICK = "unhandled_click",
			t.EVENT_COOKED_UNHANDLED_LONG_CLICK = "unhandled_long_click",
			t.EVENT_COOKED_BACKGROUNDED = "backgrounded",
			t.EVENT_COOKED_CRASHED = "crashed",
			t.EVENT_COOKED_CUSTOM = "custom",
			t.EVENT_COOKED_USERVAR = "uservar",
			t.EVENT_COOKED_CUSTOM_ERROR = "custom_error",
		t.EVENT_COOKED_USERVAR_ERROR = "uservar_error",
		t.isUserActionEvent = function(e) {
			switch (e) {
				case t.EVENT_MOUSEDOWN:
				case t.EVENT_MOUSEMOVE:
				case t.EVENT_MOUSEMOVE_CURVE:
				case t.EVENT_MOUSEUP:
				case t.EVENT_KEYDOWN:
				case t.EVENT_KEYUP:
				case t.EVENT_TOUCHSTART:
				case t.EVENT_TOUCHEND:
				case t.EVENT_TOUCHMOVE:
				case t.EVENT_TOUCHMOVE_CURVE:
				case t.EVENT_TOUCHCANCEL:
				case t.EVENT_CLICK:
				case t.EVENT_SCROLL_LAYOUT:
				case t.EVENT_SCROLL_LAYOUT_CURVE:
				case t.EVENT_SCROLL_VISUAL_OFFSET:
				case t.EVENT_SCROLL_VISUAL_OFFSET_CURVE:
				case t.EVENT_NAVIGATE:
					return !0;
			}
			return !1
		}
		,
		t.MAX_LOGS_PER_PAGE = 1024,
		t.AjaxBodyElide = 0,
		t.AjaxBodyRecord = 1,
		t.AjaxBodyWhitelist = 2,
		t.BlockUnset = 0,
		t.BlockExclude = 1,
		t.BlockBlock = 2,
		t.BlockRecord = 3
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			n(24);
		var r = n(11)
			, i = n(1)
			, o = n(2)
			, s = n(6);
		function a(e, t) {
			try {
				return {
					done: t,
					jsonParse: e.JSON.parse,
					jsonStringify: e.JSON.stringify,
					arrayShift: u(e.Array.prototype.shift),
					arrayIsArray: e.Array.isArray,
					objectToString: u(e.Object.prototype.toString),
					objectKeys: e.Object.keys,
					objectValues: e.Object.values || null,
					objectHasOwnProp: u(e.Object.prototype.hasOwnProperty),
					matchMedia: c(e.matchMedia),
					setWindowTimeout: u(e.setTimeout),
					setWindowInterval: u(e.setInterval),
					clearWindowTimeout: u(e.clearTimeout),
					clearWindowInterval: u(e.clearInterval),
					requestWindowAnimationFrame: c(e.requestAnimationFrame),
					requestWindowIdleCallback: c(e.requestIdleCallback)
				}
			} catch (e) {
				return
			}
		}
		function u(e) {
			return function(t) {
				for (var n = [], r = 1; r < arguments.length; r++)
					n[r - 1] = arguments[r];
				return e.apply(t, n)
			}
		}
		function c(e) {
			return e ? u(e) : null
		}
		t.initWindex = function(e) {
			try {
				if (r.uaIsIE || r.uaIsEdge || function(e) {
					var t = [function() {
						throw new Error("")
					}
						, Function.prototype.toString].map(function(e) {
						try {
							return void e.call(null)
						} catch (e) {
							return e.stack || ""
						}
					})
						, n = t[0]
						, r = t[1];
					if (!n || !r)
						return !1;
					for (var i = "\n".charCodeAt(0), o = Math.min(n.length, r.length), s = 1, a = s; a < o; a++) {
						var u = n.charCodeAt(n.length - a)
							, c = r.charCodeAt(r.length - a);
						if (u != c)
							break;
						c != i && a != o - 1 || (s = a)
					}
					if (r.slice(0, r.length - s + 1).match(/\.js:\d+([:)]|$)/m))
						return !1;
					var h = function(e) {
						return "function" == typeof e && Function.prototype.toString.call(e).indexOf("[native code]") < 0
					};
					return !(h(e.JSON.parse) || h(e.JSON.stringify) || h(e.Array) || h(e.Array.prototype.shift) || h(e.Array.isArray) || h(e.Object.prototype.toString) || h(e.Object.keys) || h(e.Object.values) || h(e.Object.prototype.hasOwnProperty) || h(e.setTimeout) || h(e.setInterval) || h(e.clearTimeout) || h(e.clearInterval) || h(e.requestIdleCallback))
				}(e))
					return t.windex.done = !0,
						s.FSPromise.resolve();
				if (!e.document || t.windex.done)
					return s.FSPromise.resolve();
				i.logIfDebug("Window object doesn't look clean; creating windex.");
				var n = e.document.createElement("iframe");
				n.id = "FullStory-iframe",
					n.className = "fs-hide",
					n.style.display = "none";
				var u = e.document.body || e.document.head || e.document.documentElement || e.document;
				try {
					u.appendChild(n)
				} catch (e) {
					return s.FSPromise.resolve()
				}
				if (n.src = "about:blank",
					!n.contentWindow)
					return s.FSPromise.resolve();
				var c, h = a(n.contentWindow, !0);
				if (n.parentNode && n.parentNode.removeChild(n),
					!h)
					return s.FSPromise.resolve();
				var d = new s.FSPromise(function(e) {
						return c = e
					}
				);
				return setTimeout(function() {
					try {
						if (!h)
							throw "";
						h.jsonParse("[]").push(0),
							t._setWindex(h)
					} catch (e) {
						t.windex.done = !0
					}
					c()
				}),
					d
			} catch (e) {
				return o.FsBugSnag.sendToBugsnag(e, "error"),
					s.FSPromise.resolve()
			}
		}
			,
			t._makeWindex = a,
			t.windex = a(window, !1),
			t._setWindex = function(e) {
				for (var n in t.windex)
					t.windex[n] = e[n]
			}
	}
	, function(e, t, n) {
		"use strict";
		var r, i = this && this.__extends || (r = function(e, t) {
				return (r = Object.setPrototypeOf || {
							__proto__: []
						}instanceof Array && function(e, t) {
							e.__proto__ = t
						}
						|| function(e, t) {
							for (var n in t)
								t.hasOwnProperty(n) && (e[n] = t[n])
						}
				)(e, t)
			}
				,
				function(e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
							new n)
				}
		);
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = n(0)
			, s = n(2)
			, a = n(6)
			, u = n(4)
			, c = function() {
			function e() {
				var t = this;
				this._wrappedTick = s.FsBugSnag.wrap(function() {
					t.unregister(),
						t._tick()
				}),
					this._due = 0,
					this._id = e.nextId++
			}
			return e._rearm = function() {
				e.checkedAlready = !1,
					e.lastCheck = 0
			}
				,
				e.checkForBrokenSchedulers = function() {
					if (u.windex.requestWindowAnimationFrame && !e.checkedAlready) {
						var t = Date.now();
						if (!(t - e.lastCheck < 100)) {
							e.lastCheck = t,
								e.checkedAlready = !0;
							var n = [];
							return o.forIn(e.registry, function(e) {
								var r = e.maybeForceTick(t);
								r && n.push(r)
							}),
								a.FSPromise.all(n).then(function() {
									u.windex.requestWindowAnimationFrame(window, s.FsBugSnag.wrap(function() {
										e.checkedAlready = !1
									}))
								})
						}
					}
				}
				,
				e.stopAll = function() {
					o.forIn(this.registry, function(e) {
						return e.stop()
					})
				}
				,
				e.prototype.setTick = function(e) {
					this._tick = e
				}
				,
				e.prototype.stop = function() {
					this.cancel(),
						delete e.registry[this._id]
				}
				,
				e.prototype.register = function(t) {
					this._due = Date.now() + 100 + 1.5 * t,
						e.registry[this._id] = this
				}
				,
				e.prototype.unregister = function() {
					delete e.registry[this._id]
				}
				,
				e.prototype.maybeForceTick = function(e) {
					if (e > this._due)
						return a.FSPromise.resolve().then(this._wrappedTick)["catch"](function() {})
				}
				,
				e.registry = {},
				e.nextId = 0,
				e.checkedAlready = !1,
				e.lastCheck = 0,
				e
		}();
		t.Scheduler = c;
		var h = function(e) {
			function t(t) {
				var n = e.call(this) || this;
				return n._interval = t,
					n._handle = -1,
					n
			}
			return i(t, e),
				t.prototype.start = function(e) {
					var t = this;
					-1 == this._handle && (this.setTick(function() {
						e(),
							t.register(t._interval)
					}),
						this._handle = u.windex.setWindowInterval(window, this._wrappedTick, this._interval),
						this.register(this._interval))
				}
				,
				t.prototype.cancel = function() {
					-1 != this._handle && (u.windex.clearWindowInterval(window, this._handle),
						this._handle = -1,
						this.setTick(function() {}))
				}
				,
				t
		}(c);
		t.RealTicker = h;
		var d = function(e) {
			function t(t, n, r) {
				void 0 === n && (n = 0);
				for (var i = [], o = 3; o < arguments.length; o++)
					i[o - 3] = arguments[o];
				var s = e.call(this) || this;
				return s.delay = n,
					s.timer = -1,
					s.setTick(function() {
						t.apply(void 0 === r ? window : r, i),
							s.stop()
					}),
					s
			}
			return i(t, e),
				t.prototype.start = function(e) {
					return void 0 === e && (e = this.delay),
						this.delay = e,
						u.windex.clearWindowTimeout(window, this.timer),
						this.timer = u.windex.setWindowTimeout(window, this._wrappedTick, this.delay),
						this.register(e),
						this
				}
				,
				t.prototype.cancel = function() {
					-1 != this.timer && (u.windex.clearWindowTimeout(window, this.timer),
						this.timer = -1)
				}
				,
				t
		}(c);
		t.RealTimeout = d,
			t.idleMoment = function(e) {
				return new a.FSPromise(function(t) {
						u.windex.requestWindowIdleCallback ? u.windex.requestWindowIdleCallback(window, s.FsBugSnag.wrap(t), e) : u.windex.setWindowTimeout(window, s.FsBugSnag.wrap(function() {
							return t(new l(f() + 25))
						}), e && e.timeout || 50)
					}
				)
			}
		;
		var l = function() {
			function e(e) {
				this.deadlineTime = e
			}
			return e.prototype.timeRemaining = function() {
				return this.deadlineTime - f()
			}
				,
				Object.defineProperty(e.prototype, "didTimeout", {
					get: function() {
						return this.deadlineTime <= f()
					},
					enumerable: !0,
					configurable: !0
				}),
				e
		}();
		function f() {
			return window.performance && window.performance.now ? window.performance.now() : window.Date.now()
		}
		var p = function() {
			function e(e, t, n) {
				this.limit = e,
					this.breaker = n,
					this.remaining = 0,
					this.ticker = new h(t),
					this.open()
			}
			return e.prototype.guard = function(e) {
				var t = this;
				return function() {
					return 0 == t.remaining ? (t.breaker(),
						void t.remaining--) : t.remaining < 0 ? void 0 : (t.remaining--,
						e.apply(this, arguments))
				}
			}
				,
				e.prototype.close = function() {
					return this.ticker.stop(),
						this
				}
				,
				e.prototype.open = function() {
					var e = this;
					return this.remaining = this.limit,
						this.ticker.start(function() {
							e.remaining = e.limit
						}),
						this
				}
				,
				e
		}();
		t.Throttle = p;
		var _ = function() {
			function e() {
				this._startTime = this.wallTime()
			}
			return e.prototype.wallTime = function() {
				return Date.now()
			}
				,
				e.prototype.now = function() {
					return this.wallTime() - this._startTime
				}
				,
				e.prototype.startTime = function() {
					return this._startTime
				}
				,
				e.prototype.setStartTime = function(e) {
					this._startTime = e
				}
				,
				e
		}();
		t.Timekeeper = _
	}
	, function(e, t, n) {
		"use strict";
		function r(e) {
			return "function" == typeof e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = Array.isArray ? Array.isArray : function(e) {
			return "[object Array]" === Object.prototype.toString.call(e)
		}
			, o = 0
			, s = function(e, t) {
			_[o] = e,
				_[o + 1] = t,
			2 === (o += 2) && c()
		};
		var a = window.MutationObserver || window.WebKitMutationObserver
			, u = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof self && void 0 !== self.importScripts && "undefined" != typeof MessageChannel;
		var c, h, d, l, f, p, _ = new Array(1e3);
		function g() {
			for (var e = 0; e < o; e += 2) {
				(0,
					_[e])(_[e + 1]),
					_[e] = void 0,
					_[e + 1] = void 0
			}
			o = 0
		}
		function v(e, t) {
			var n = arguments
				, r = this
				, i = new this.constructor(m);
			void 0 === i[E] && L(i);
			var o, a = r._state;
			return a ? (o = n[a - 1],
				s(function() {
					return D(a, i, o, r._result)
				})) : A(r, i, e, t),
				i
		}
		function y(e) {
			if (e && "object" == typeof e && e.constructor === this)
				return e;
			var t = new this(m);
			return O(t, e),
				t
		}
		a ? (l = 0,
				f = new a(g),
				p = document.createTextNode(""),
				f.observe(p, {
					characterData: !0
				}),
				c = function() {
					var e = l = ++l % 2;
					p.data = e + ""
				}
		) : u ? ((d = new MessageChannel).port1.onmessage = g,
				c = function() {
					return d.port2.postMessage(0)
				}
		) : (h = setTimeout,
				c = function() {
					return h(g, 1)
				}
		);
		var E = Math.random().toString(36).substring(16);
		function m() {}
		var w = void 0
			, S = 1
			, b = 2
			, T = new x;
		function I(e) {
			try {
				return e.then
			} catch (e) {
				return T.error = e,
					T
			}
		}
		function N(e, t, n) {
			t.constructor === e.constructor && n === v && t.constructor.resolve === y ? function(e, t) {
				t._state === S ? C(e, t._result) : t._state === b ? k(e, t._result) : A(t, void 0, function(t) {
					return O(e, t)
				}, function(t) {
					return k(e, t)
				})
			}(e, t) : n === T ? (k(e, T.error),
				T.error = null) : void 0 === n ? C(e, t) : r(n) ? function(e, t, n) {
				s(function(e) {
					var r = !1
						, i = function(e, t, n, r, i) {
						try {
							e.call(t, n, r)
						} catch (e) {
							return e
						}
					}(n, t, function(n) {
						r || (r = !0,
							t !== n ? O(e, n) : C(e, n))
					}, function(t) {
						r || (r = !0,
							k(e, t))
					}, e._label);
					!r && i && (r = !0,
						k(e, i))
				}, e)
			}(e, t, n) : C(e, t)
		}
		function O(e, t) {
			var n;
			e === t ? k(e, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof (n = t) || "object" == typeof n && null !== n ? N(e, t, I(t)) : C(e, t)
		}
		function R(e) {
			e._onerror && e._onerror(e._result),
				P(e)
		}
		function C(e, t) {
			e._state === w && (e._result = t,
				e._state = S,
			0 !== e._subscribers.length && s(P, e))
		}
		function k(e, t) {
			e._state === w && (e._state = b,
				e._result = t,
				s(R, e))
		}
		function A(e, t, n, r) {
			var i = e._subscribers
				, o = i.length;
			e._onerror = null,
				i[o] = t,
				i[o + S] = n,
				i[o + b] = r,
			0 === o && e._state && s(P, e)
		}
		function P(e) {
			var t = e._subscribers
				, n = e._state;
			if (0 !== t.length) {
				for (var r, i, o = e._result, s = 0; s < t.length; s += 3)
					r = t[s],
						i = t[s + n],
						r ? D(n, r, i, o) : i(o);
				e._subscribers.length = 0
			}
		}
		function x() {
			this.error = null
		}
		var F = new x;
		function D(e, t, n, i) {
			var o, s, a, u, c = r(n);
			if (c) {
				if ((o = function(e, t) {
					try {
						return e(t)
					} catch (e) {
						return F.error = e,
							F
					}
				}(n, i)) === F ? (u = !0,
					s = o.error,
					o.error = null) : a = !0,
				t === o)
					return void k(t, new TypeError("A promises callback cannot return that same promise."))
			} else
				o = i,
					a = !0;
			t._state !== w || (c && a ? O(t, o) : u ? k(t, s) : e === S ? C(t, o) : e === b && k(t, o))
		}
		var M = 0;
		function L(e) {
			e[E] = M++,
				e._state = void 0,
				e._result = void 0,
				e._subscribers = []
		}
		function U(e, t) {
			this._instanceConstructor = e,
				this.promise = new e(m),
			this.promise[E] || L(this.promise),
				i(t) ? (this._input = t,
					this.length = t.length,
					this._remaining = t.length,
					this._result = new Array(this.length),
					0 === this.length ? C(this.promise, this._result) : (this.length = this.length || 0,
						this._enumerate(),
					0 === this._remaining && C(this.promise, this._result))) : k(this.promise, new Error("Array Methods must be provided an Array"))
		}
		U.prototype._enumerate = function() {
			for (var e = this.length, t = this._input, n = 0; this._state === w && n < e; n++)
				this._eachEntry(t[n], n)
		}
			,
			U.prototype._eachEntry = function(e, t) {
				var n = this._instanceConstructor
					, r = n.resolve;
				if (r === y) {
					var i = I(e);
					if (i === v && e._state !== w)
						this._settledAt(e._state, t, e._result);
					else if ("function" != typeof i)
						this._remaining--,
							this._result[t] = e;
					else if (n === V) {
						var o = new n(m);
						N(o, e, i),
							this._willSettleAt(o, t)
					} else
						this._willSettleAt(new n(function(t) {
								return t(e)
							}
						), t)
				} else
					this._willSettleAt(r(e), t)
			}
			,
			U.prototype._settledAt = function(e, t, n) {
				var r = this.promise;
				r._state === w && (this._remaining--,
					e === b ? k(r, n) : this._result[t] = n),
				0 === this._remaining && C(r, this._result)
			}
			,
			U.prototype._willSettleAt = function(e, t) {
				var n = this;
				A(e, void 0, function(e) {
					return n._settledAt(S, t, e)
				}, function(e) {
					return n._settledAt(b, t, e)
				})
			}
		;
		var V = function(e) {
			this[E] = M++,
				this._result = this._state = void 0,
				this._subscribers = [],
			m !== e && ("function" != typeof e && function() {
				throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
			}(),
				this instanceof V ? function(e, t) {
					try {
						t(function(t) {
							O(e, t)
						}, function(t) {
							k(e, t)
						})
					} catch (t) {
						k(e, t)
					}
				}(this, e) : function() {
					throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
				}())
		};
		V.all = function(e) {
			return new U(this,e).promise
		}
			,
			V.race = function(e) {
				var t = this;
				return i(e) ? new t(function(n, r) {
						for (var i = e.length, o = 0; o < i; o++)
							t.resolve(e[o]).then(n, r)
					}
				) : new t(function(e, t) {
						return t(new TypeError("You must pass an array to race."))
					}
				)
			}
			,
			V.resolve = y,
			V.reject = function(e) {
				var t = new this(m);
				return k(t, e),
					t
			}
			,
			V._setAsap = function(e) {
				s = e
			}
			,
			V._asap = s,
			V.prototype = {
				constructor: V,
				then: v,
				"catch": function(e) {
					return this.then(null, e)
				}
			},
			t.FSPromise = "function" == typeof window.Promise ? window.Promise : V
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.MutationProcessingInterval = 250,
			t.CurveSamplingInterval = 142,
			t.DefaultBundleUploadInterval = 5e3,
			t.HeartbeatInitial = 4e3,
			t.HeartbeatMax = 256e3,
			t.PageInactivityTimeout = 18e5,
			t.BackoffMax = 3e5,
			t.ScrollSampleInterval = t.MutationProcessingInterval / 5,
			t.InactivityThreshold = 4e3,
			t.MaxPayloadLength = 16384,
			t.SwanSongLocalStorageKey = "_fs_swan_song",
			t.UidLocalStorageKey = "_fs_uid"
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(3)
			, i = n(26)
			, o = n(38)
			, s = "(redacted)"
			, a = {};
		var u = new RegExp(".*","i");
		function c(e, t) {
			return e.split("?").map(function(e) {
				return function(e, t) {
					return e.replace("?", "").split("&").map(function(e) {
						return e.split("=")
					}).map(function(e) {
						var n = e[0]
							, r = e[1]
							, i = e.slice(2);
						return t.test(n) && void 0 !== r ? [n, s].concat(i) : [n, r].concat(i)
					}).map(function(e) {
						var t = e[0]
							, n = e[1]
							, r = e.slice(2);
						return void 0 === n ? t : [t, n].concat(r).join("=")
					}).join("&")
				}(e, t)
			}).join("?")
		}
		var h = new (function() {
			function e() {
				var e = i.theDummyDoc()
					, t = e.getElementById("urlresolver-base");
				t || ((t = e.createElement("base")).id = "urlresolver-base",
					e.head.appendChild(t));
				var n = e.getElementById("urlresolver-parser");
				n || ((n = e.createElement("a")).id = "urlresolver-parser",
					e.head.appendChild(n)),
					this.base = t,
					this.parser = n
			}
			return e.prototype.parseUrl = function(e, t) {
				this.base.setAttribute("href", e),
					this.parser.setAttribute("href", t);
				var n = document.createElement("a");
				return n.href = this.parser.href,
					n
			}
				,
				e.prototype.resolveUrl = function(e, t) {
					return this.parseUrl(e, t).href
				}
				,
				e.prototype.resolveToDocument = function(e, t) {
					var n = f(e);
					return null == n ? t : this.resolveUrl(n, t)
				}
				,
				e.prototype.scrubUrl = function(e, t, n) {
					var r = this.parseUrl("", e);
					return r.hash.indexOf("access_token") >= 0 && (r.hash = "#" + s),
					"AGQFM" == t && r.pathname.indexOf("reset_password") >= 0 && (r.pathname = r.pathname.replace(/(\/reset_password\/).*$/i, "$1" + s)),
					r.search.length > 0 && (r.search = c(r.search, n)),
						r.href
				}
				,
				e
		}());
		function d(e, t) {
			return h.scrubUrl(e, t, function(e) {
				if (!(e in a)) {
					var t = ["password", "token", "^jwt$"];
					switch ("4K3FQ" !== e && t.push("^code$"),
						e) {
						case "1HWDJ":
							t.push("email_id", "invite", "join");
							break;
						case "J82WF":
							t = [".*"];
					}
					a[e] = new RegExp(t.join("|"),"i")
				}
				return a[e]
			}(t))
		}
		function l(e, t) {
			return h.scrubUrl(e, t, u)
		}
		function f(e) {
			var t = e.document
				, n = e.location.href;
			if ("string" == typeof t.baseURI)
				n = t.baseURI;
			else {
				var r = t.getElementsByTagName("base")[0];
				r && r.href && (n = r.href)
			}
			return "about:blank" == n && e.parent != e ? f(e.parent) : n
		}
		t.parseUrl = function(e, t) {
			return h.parseUrl(e, t)
		}
			,
			t.resolveUrl = function(e, t) {
				return h.resolveUrl(e, t)
			}
			,
			t.resolveUrlToDocument = function(e, t) {
				return h.resolveToDocument(e, t)
			}
			,
			t.scrubUrl = function(e, t, n) {
				switch (n.source) {
					case "dom":
						switch (i = n.type) {
							case "frame":
							case "iframe":
								return l(e, t);
							default:
								return d(e, t);
						}
					case "event":
						switch (i = n.type) {
							case r.EVENT_AJAX_REQUEST:
							case r.EVENT_NAVIGATE:
								return d(e, t);
							case r.EVENT_SET_FRAME_BASE:
								return l(e, t);
							default:
								return o.assertExhaustive(i);
						}
					case "log":
						return l(e, t);
					case "page":
						var i;
						switch (i = n.type) {
							case "base":
								return l(e, t);
							case "referrer":
							case "url":
								return d(e, t);
							default:
								return o.assertExhaustive(i);
						}
					case "perfEntry":
						switch (n.type) {
							case "frame":
							case "iframe":
							case "navigation":
								return l(e, t);
							default:
								return d(e, t);
						}
					default:
						return o.assertExhaustive(n);
				}
			}
			,
			t.baseUri = f
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(14)
			, i = n(23);
		function o(e) {
			return e._fs_ext_host || e._fs_host
		}
		function s(e) {
			if (!e)
				return e;
			if (i.isLocalhost(i.domainFromHost(e)))
				return e;
			return 0 == e.indexOf("www.") ? "rs." + e.slice(4) : 0 == e.indexOf("app.") ? "rs." + e.slice(4) : "rs." + e
		}
		function a(e) {
			return e ? i.isLocalhost(i.domainFromHost(e)) ? e : 0 == e.indexOf("www.") ? "app." + e.slice(4) : "app." + e : e
		}
		function u(e) {
			return e ? e + "/s/fs.js" : void 0
		}
		t._fs_debug = function(e) {
			return !!e._fs_ext_debug || !!e._fs_debug
		}
			,
			t._fs_script = function(e) {
				return e._fs_script || u(o(e))
			}
			,
			t._fs_rec_host = function(e) {
				return e._fs_rec_host || s(o(e))
			}
			,
			t._fs_app_host = function(e) {
				return e._fs_app_host || a(o(e))
			}
			,
			t._fs_org = function(e) {
				return e._fs_ext_org || e._fs_org
			}
			,
			t._fs_csp = function(e) {
				return e._fs_csp
			}
			,
			t._fs_cookie_domain = function(e) {
				return e._fs_cookie_domain
			}
			,
			t._fs_ready = function(e) {
				return e._fs_ready
			}
			,
			t._fs_run_in_iframe = function(e) {
				return !!e._fs_run_in_iframe
			}
			,
			t._fs_is_outer_script = function(e) {
				return !!e._fs_is_outer_script
			}
			,
			t._fs_replay_flags = function(e) {
				return e._fs_replay_flags
			}
			,
			t._fs_transport = function(e) {
				return e._fs_transport
			}
			,
			t.set_fs_shutdown = function(e, t) {
				e._fs_shutdown = t
			}
			,
			t._fs_use_socket = function(e) {
				return !!e._fs_use_socket
			}
			,
			t.FS_q_drain = function(e) {
				var t = e[r.Namespace(e)];
				if (t && "q"in t) {
					var n = t.q;
					return delete t.q,
						n
				}
				return []
			}
			,
			t.FS_q_push = function(e, t) {
				var n = e[r.Namespace(e)];
				"q"in n || (n.q = []),
					n.q.push(t)
			}
			,
			t.defaultGceHost = s,
			t.defaultAppHost = a,
			t.defaultScript = u
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(17)
			, i = n(37)
			, o = n(0)
			, s = n(11)
			, a = n(12)
			, u = n(13)
			, c = n(2)
			, h = n(8);
		function d(e) {
			var t = l(e);
			return !!t && t.watchKind == r.WatchKind.Exclude
		}
		function l(e) {
			return e ? t._mirrors[e._fs] : null
		}
		function f(e) {
			try {
				return e && e._fs || 0
			} catch (e) {
				return 0
			}
		}
		function p(e, n) {
			e.parent && (n.unobserveSubtree(e.node),
			e.parent.child == e && (e.parent.child = e.next),
			e.parent.lastChild == e && (e.parent.lastChild = e.prev),
			e.prev && (e.prev.next = e.next),
			e.next && (e.next.prev = e.prev),
				e.parent = e.prev = e.next = null,
				delete t._mirrors[e.id],
			e.node._fs == e.id && (e.node._fs = 0),
				e.id = 0,
			e.child && _(e.child))
		}
		function _(e) {
			for (var n = [e]; n.length > 0 && n.length < 1e4; ) {
				var r = n.pop();
				delete t._mirrors[r.id],
				r.node._fs == r.id && (r.node._fs = 0),
					r.id = 0,
				r.next && n.push(r.next),
				r.child && n.push(r.child)
			}
			c.assert(n.length < 1e4, "clearIds is fast")
		}
		function g(e, t, n, r) {
			switch (e) {
				case "frame":
				case "iframe":
					switch (t) {
						case "src":
							return h.scrubUrl(n, r, {
								source: "dom",
								type: e
							});
						case "srcdoc":
							return null;
						default:
							return n;
					}
				default:
					return n;
			}
		}
		t.MaxTextSizeBytes = 16e6,
			t.setMaxTextSizeBytes = function(e) {
				t.MaxTextSizeBytes = e
			}
			,
			t.isWatched = function(e) {
				var t = l(e);
				return !!t && void 0 !== t.watchKind
			}
			,
			t.isExcluded = d,
			t.watchKind = function(e) {
				var t = l(e);
				return t ? t.watchKind : void 0
			}
			,
			t._mirrors = {},
			t.setMirrors = function(e) {
				t._mirrors = e
			}
			,
			t.mirrorFor = l,
			t.fsid = f,
			t.fsidIfNotExcluded = function(e) {
				return d(e) ? 0 : f(e)
			}
			,
			t.removeMirror = p,
			t.clearIds = _,
			t.scrubAttrValue = g;
		var v = function() {
			function e(e, t) {
				this._watcher = e,
					this._orgId = t,
					this._curId = 1
			}
			return e.prototype.curId = function() {
				return this._curId
			}
				,
				e.prototype.tokenizeNode = function(e, t, n, r, i, o) {
					var s = this._curId;
					try {
						var a = l(e)
							, u = l(t)
							, c = [];
						return this.tokeNode(a, u, n, c, r, i, o),
							c
					} catch (e) {
						return this._curId = s,
							[]
					}
				}
				,
				e.prototype.tokeNode = function(e, n, h, d, l, f, _) {
					var v = this;
					if ("script" == u.tagName(h) || h.nodeType == a.Node_COMMENT_NODE)
						return null;
					var m = function(e) {
						return e.constructor === window.ShadowRoot
					}(h)
						, b = {
						id: this._curId++,
						node: h
					};
					if (t._mirrors[b.id] = b,
						h._fs = b.id,
					e && (m ? e.shadow = b : function(e, t, n, r) {
						p(t, r),
							t.parent = e,
							t.next = n,
						n && (t.prev = n.prev,
							n.prev = t),
							null == t.next ? (t.prev = e.lastChild,
								e.lastChild = t) : t.next.prev = t,
							null == t.prev ? e.child = t : t.prev.next = t
					}(e, b, n, l)),
					h.nodeType == a.Node_DOCUMENT_TYPE_NODE) {
						var T = h;
						return d.push("<!DOCTYPE", ":name", T.name, ":publicId", T.publicId || "", ":systemId", T.systemId || ""),
							b
					}
					try {
						var I = function(e, t) {
							(e || t) && (d.push("["),
							e && v.tokeNode(b, null, e, d, l, f, _),
								o.forEachNextSibling(h.firstChild, function(e) {
									v.tokeNode(b, null, e, d, l, f, _)
								}),
								d.push("]"))
						};
						switch (h.nodeType) {
							default:
								d.push("<" + h.nodeName),
									y(h, f);
								break;
							case a.Node_DOCUMENT_FRAGMENT_NODE:
							case a.Node_DOCUMENT_NODE:
								d.push("<" + (m ? "#shadow" : h.nodeName)),
									I(null, h.firstChild);
								break;
							case a.Node_TEXT_NODE:
								d.push("<" + h.nodeName),
									y(h, f),
									d.push(S(h));
								break;
							case a.Node_ELEMENT_NODE:
								var N = h
									, O = N.nodeName;
								"http://www.w3.org/2000/svg" == N.namespaceURI && (O = "svg:" + O),
									d.push("<" + O);
								var R = this._watcher.isWatched(N);
								if (null !== R)
									switch (b.watchKind = R,
										R) {
										case r.WatchKind.Watch:
											l.observe(N);
											break;
										case r.WatchKind.Exclude:
											l.observe(N),
												d.push(":" + i.AttrExcluded, "true");
											break;
										case r.WatchKind.Block:
										case r.WatchKind.Record:
									}
								b.watchKind != r.WatchKind.Exclude && y(h, f),
									function(e, t, n) {
										var r = u.tagName(t);
										if (!s.uaIsEdge || "output" !== r) {
											var i = t;
											if (i.attributes && i.attributes.length > 0)
												for (var o = 0; o < i.attributes.length; o++) {
													var a = i.attributes[o];
													if (null != a) {
														var c = w(a.name)
															, h = g(r, c, a.value, e);
														null !== h && n(c, h)
													}
												}
										}
									}(this._orgId, N, function(e, t) {
										if (b.watchKind == r.WatchKind.Exclude) {
											var n = E(h, e, t);
											if (null == n)
												return;
											t = n
										}
										if (d.push(":" + e),
											d.push(t),
											_)
											try {
												_(N, e, t)
											} catch (e) {
												c.FsBugSnag.sendToBugsnag(e, "error")
											}
									}),
								b.watchKind != r.WatchKind.Exclude && I(N.shadowRoot, N.firstChild);
						}
					} catch (e) {
						c.FsBugSnag.sendToBugsnag(e, "error")
					}
					return b
				}
				,
				e
		}();
		function y(e, t) {
			if (t)
				try {
					t(e)
				} catch (e) {
					c.FsBugSnag.sendToBugsnag(e, "error")
				}
		}
		function E(e, t, n) {
			switch (t) {
				case "alt":
				case "checked":
				case "data":
				case "placeholder":
				case "src":
				case "srcset":
				case "title":
				case "value":
					return null;
			}
			return n
		}
		t.NodeEncoder = v,
			t.rewriteExcludedAttribute = E;
		var m = {
			ATTRIBUTENAME: "attributeName",
			ATTRIBUTETYPE: "attributeType",
			BASEFREQUENCY: "baseFrequency",
			BASEPROFILE: "baseProfile",
			CALCMODE: "calcMode",
			CLIPPATHUNITS: "clipPathUnits",
			CONTENTSCRIPTTYPE: "contentScriptType",
			CONTENTSTYLETYPE: "contentStyleType",
			DIFFUSECONSTANT: "diffuseConstant",
			EDGEMODE: "edgeMode",
			EXTERNALRESOURCESREQUIRED: "externalResourcesRequired",
			FILTERRES: "filterRes",
			FILTERUNITS: "filterUnits",
			GLYPHREF: "glyphRef",
			GRADIENTTRANSFORM: "gradientTransform",
			GRADIENTUNITS: "gradientUnits",
			KERNELMATRIX: "kernelMatrix",
			KERNELUNITLENGTH: "kernelUnitLength",
			KEYPOINTS: "keyPoints",
			KEYSPLINES: "keySplines",
			KEYTIMES: "keyTimes",
			LENGTHADJUST: "lengthAdjust",
			LIMITINGCONEANGLE: "limitingConeAngle",
			MARKERHEIGHT: "markerHeight",
			MARKERUNITS: "markerUnits",
			MARKERWIDTH: "markerWidth",
			MASKCONTENTUNITS: "maskContentUnits",
			MASKUNITS: "maskUnits",
			NUMOCTAVES: "numOctaves",
			PATHLENGTH: "pathLength",
			PATTERNCONTENTUNITS: "patternContentUnits",
			PATTERNTRANSFORM: "patternTransform",
			PATTERNUNITS: "patternUnits",
			POINTSATX: "pointsAtX",
			POINTSATY: "pointsAtY",
			POINTSATZ: "pointsAtZ",
			PRESERVEALPHA: "preserveAlpha",
			PRESERVEASPECTRATIO: "preserveAspectRatio",
			PRIMITIVEUNITS: "primitiveUnits",
			REFX: "refX",
			REFY: "refY",
			REPEATCOUNT: "repeatCount",
			REPEATDUR: "repeatDur",
			REQUIREDEXTENSIONS: "requiredExtensions",
			REQUIREDFEATURES: "requiredFeatures",
			SPECULARCONSTANT: "specularConstant",
			SPECULAREXPONENT: "specularExponent",
			SPREADMETHOD: "spreadMethod",
			STARTOFFSET: "startOffset",
			STDDEVIATION: "stdDeviation",
			STITCHTILES: "stitchTiles",
			SURFACESCALE: "surfaceScale",
			SYSTEMLANGUAGE: "systemLanguage",
			TABLEVALUES: "tableValues",
			TARGETX: "targetX",
			TARGETY: "targetY",
			TEXTLENGTH: "textLength",
			VIEWBOX: "viewBox",
			VIEWTARGET: "viewTarget",
			XCHANNELSELECTOR: "xChannelSelector",
			YCHANNELSELECTOR: "yChannelSelector",
			ZOOMANDPAN: "zoomAndPan"
		};
		function w(e) {
			return /[a-z]/.test(e) ? e : m[e] || e.toLowerCase()
		}
		function S(e) {
			var n = e.textContent;
			if (!n)
				return "";
			var r = n.length;
			return r > t.MaxTextSizeBytes ? (c.FsBugSnag.sendToBugsnag("Ignoring huge text node with length [" + r + "]", "warning"),
				"") : n
		}
		t.fixAttrName = w,
			t.safeTextContent = S
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = navigator.userAgent;
		t.uaIsIE = r.indexOf("MSIE ") > -1 || r.indexOf("Trident/") > -1,
			t.uaIsIE11 = t.uaIsIE && r.indexOf("rv:11") > -1,
			t.uaIsEdge = r.indexOf("Edge/") > -1,
			t.uaIsSafari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent),
			t.uaPrefixedPropety = function(e, t) {
				for (var n = 0 === t.indexOf("on") ? function(e) {
						return "on" + e + t.slice(2)
					}
					: function(e) {
						return "" + e + t.charAt(0).toUpperCase() + t.slice(1)
					}
						 , r = 0, i = [function() {
						return t
					}
						, function() {
							return n("webkit")
						}
						, function() {
							return n("moz")
						}
						, function() {
							return n("ms")
						}
					]; r < i.length; r++) {
					var o = (0,
						i[r])();
					if (o in e)
						return o
				}
				return t
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.Node_ELEMENT_NODE = 1,
			t.Node_ATTRIBUTE_NODE = 2,
			t.Node_TEXT_NODE = 3,
			t.Node_CDATA_SECTION_NODE = 4,
			t.Node_ENTITY_REFERENCE_NODE = 5,
			t.Node_ENTITY_NODE = 6,
			t.Node_PROCESSING_INSTRUCTION_NODE = 7,
			t.Node_COMMENT_NODE = 8,
			t.Node_DOCUMENT_NODE = 9,
			t.Node_DOCUMENT_TYPE_NODE = 10,
			t.Node_DOCUMENT_FRAGMENT_NODE = 11,
			t.Node_NOTATION_NODE = 12,
			t.XHR_UNSENT = 0,
			t.XHR_OPENED = 1,
			t.XHR_HEADERS_RECEIVED = 2,
			t.XHR_LOADING = 3,
			t.XHR_DONE = 4,
			t.XHR_STATUS_ABORTED = 0
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.tagName = function(e) {
				var t = e;
				return t.tagName ? "object" == typeof t.tagName ? "form" : t.tagName.toLowerCase() : null
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, i = "FS", o = "_fs_loaded", s = "_fs_namespace";
		function a(e) {
			return e[o]
		}
		t.Namespace = function(e) {
			if (!r) {
				var t = a(e);
				r = t || (e[s] ? e[s] : i)
			}
			return r
		}
			,
			t.isLoaded = a,
			t.setLoaded = function(e, t) {
				e[o] = t,
				t in e || (e[t] = {})
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.guard = function(e, t) {
				return function() {
					try {
						return e.apply(this, arguments)
					} catch (e) {
						try {
							t && t(e)
						} catch (e) {}
					}
				}
			}
			,
			t.doNothing = function() {}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(7)
			, i = n(10)
			, o = n(0)
			, s = n(40)
			, a = n(1)
			, u = n(14)
			, c = n(41)
			, h = n(9)
			, d = n(29)
			, l = n(54)
			, f = n(17)
			, p = n(5)
			, _ = n(2)
			, g = n(56)
			, v = n(18)
			, y = n(8)
			, E = n(6)
			, m = n(4);
		function w(e, t) {
			var n = i.fsid(e) + " ";
			return e.id && (n += "#" + e.id),
				n += "[src=" + y.scrubUrl(e.src, t, {
					source: "log",
					type: "debug"
				}) + "]"
		}
		t.FS_REQUEST_FRAME_ID = "RequestFrameId",
			t.FS_GREET_CHILD_FRAME = "GreetFrame",
			t.FS_SET_FRAME_ID_CMD = "SetFrameId",
			t.FS_IFRAME_EVENTS = "EvtBundle",
			t.FS_SHUTDOWN_FRAME = "ShutdownFrame",
			t.FS_RESTART_FRAME = "RestartFrame",
			t.FS_SET_CONSENT = "SetConsent",
			t.FS_INIT_MOBILE_CMD = "InitFrameMobile",
			t.defaultInjector = function(e) {
				var t = e.transport
					, n = e.frame
					, r = e.orgId
					, i = e.scheme
					, o = e.script
					, s = e.recHost
					, c = e.appHost
					, h = w(n, r);
				a.logIfDebug("Injecting into Frame " + h);
				try {
					if (function(e) {
						return e.id == e.name && b.test(e.id)
					}(n))
						return void a.logIfDebug("Blacklisted iframe: " + h);
					if (function(e) {
						if (!e.contentDocument || !e.contentWindow || !e.contentWindow.location)
							return !0;
						return function(e) {
							return !!e.src && "about:blank" != e.src && e.src.indexOf("javascript:") < 0
						}(e) && e.src != e.contentWindow.location.href && "loading" == e.contentDocument.readyState
					}(n))
						return void a.logIfDebug("Frame not yet loaded: " + h);
					var d = n.contentWindow
						, l = n.contentDocument;
					if (!d || !l)
						return void a.logIfDebug("Missing contentWindow or contentDocument: " + h);
					if (!l.head)
						return void a.logIfDebug("Missing contentDocument.head: " + h);
					if (d[u.Namespace(d)])
						return void a.logIfDebug("FS already defined in Frame contentWindow: " + h + ". Ignoring.");
					d._fs_org = r,
						d._fs_script = o,
						d._fs_rec_host = s,
						d._fs_app_host = c,
						d._fs_debug = a.isDebug(),
						d._fs_run_in_iframe = !0,
					t && (d._fs_transport = t);
					var f = l.createElement("script");
					f.async = !0,
						f.crossOrigin = "anonymous",
						f.src = i + "//" + o,
					"testdrive" == r && (f.src += "?allowMoo=true"),
						l.head.appendChild(f)
				} catch (e) {
					a.logIfDebug("iFrame no injecty. Probably not same origin.")
				}
			}
		;
		var S, b = /^fb\d{18}$/;
		!function(e) {
			e[e.NoInfoYet = 1] = "NoInfoYet",
				e[e.Enabled = 2] = "Enabled",
				e[e.Disabled = 3] = "Disabled"
		}(S = t.GetCurrentSessionEnabledState || (t.GetCurrentSessionEnabledState = {}));
		var T = function() {
			function e(e, t, n, i) {
				var o = this;
				this._ctx = e,
					this._transport = n,
					this._injector = i,
					this._bundleUploadInterval = r.DefaultBundleUploadInterval,
					this._iFrames = [],
					this._pendingChildFrameIdInits = [],
					this._listeners = new s.DomListeners,
					this._getCurrentSessionEnabled = S.NoInfoYet,
					this._resourceUploadingEnabled = !1,
					this._tickerTasks = [],
					this._watcher = new f.Watcher,
					this._queue = new l.EventQueue(e,this._transport,function(e) {
							for (var t = o._eventWatcher.bundleEvents(e), n = void 0; n = o._tickerTasks.pop(); )
								n();
							return t
						}
						,t),
					this._eventWatcher = new c.EventWatcher(e,this._queue,this._watcher,this._listeners,function(e) {
							o.onFrameCreated(e)
						}
						,function(e) {
							o.beforeFrameRemoved(e)
						}
						,new g.ResourceUploader(e,this._queue,new v.HttpResourceProtocol(e))),
					this._consoleWatcher = new d.ConsoleWatcher(e,this._queue,this._listeners),
					this._scheme = e.options.scheme,
					this._script = e.options.script,
					this._recHost = e.options.recHost,
					this._appHost = e.options.appHost,
					this._orgId = e.options.orgId,
					this._wnd = e.window
			}
			return Object.defineProperty(e.prototype, "bundleUploadInterval", {
				get: function() {
					return this._bundleUploadInterval
				},
				enumerable: !0,
				configurable: !0
			}),
				e.prototype.start = function(e, t) {
					var n = this;
					this._onFullyStarted = t,
						"onpagehide"in this._wnd ? this._listeners.add(this._wnd, "pagehide", !1, function(e) {
							n.onUnload("pagehide")
						}) : this._listeners.add(this._wnd, "unload", !1, function(e) {
							n.onUnload("unload")
						}),
						this._listeners.add(this._wnd, "message", !1, function(e) {
							if ("string" == typeof e.data) {
								var t = e.source;
								n.postMessageReceived(t, N(e.data))
							}
						});
					var r = this._wnd.Document ? this._wnd.Document.prototype : this._wnd.document;
					this._docCloseHook = o.activateHook(r, "close"),
					this._docCloseHook && this._docCloseHook.afterAsync(function() {
						n._listeners.refresh()
					})
				}
				,
				e.prototype.queue = function() {
					return this._queue
				}
				,
				e.prototype.eventWatcher = function() {
					return this._eventWatcher
				}
				,
				e.prototype.console = function() {
					return this._consoleWatcher
				}
				,
				e.prototype.onDomLoad = function() {
					this._eventWatcher.onDomLoad()
				}
				,
				e.prototype.onLoad = function() {
					this._eventWatcher.onLoad()
				}
				,
				e.prototype.shutdown = function(e) {
					this._eventWatcher.shutdown(e),
						this._consoleWatcher.disable(),
						this._listeners.clear(),
					this._docCloseHook && this._docCloseHook.disable(),
						this.tellAllFramesTo([t.FS_SHUTDOWN_FRAME])
				}
				,
				e.prototype.tellAllFramesTo = function(e) {
					for (var t = 0; t < this._iFrames.length; t++) {
						var n = this._iFrames[t];
						n.contentWindow && I(n.contentWindow, e)
					}
				}
				,
				e.prototype.getCurrentSessionURL = function(e) {
					var t = this._getCurrentSessionEnabled;
					if (t == S.NoInfoYet)
						return null;
					if (t == S.Disabled)
						return this._scheme + "//" + this._appHost + "/opt/upgrade";
					var n = this.getCurrentSession();
					return n ? (e && (n += ":" + this._ctx.time.wallTime()),
					this._scheme + "//" + this._appHost + "/ui/" + this._ctx.options.orgId + "/session/" + encodeURIComponent(n)) : null
				}
				,
				e.prototype.getCurrentSession = function() {
					var e = this._getCurrentSessionEnabled;
					return e == S.NoInfoYet || e == S.Disabled ? null : this._userId ? this._userId + ":" + this._sessionId : null
				}
				,
				e.prototype.setConsent = function(e) {
					this._watcher.setConsent(e),
						this.tellAllFramesTo([t.FS_SET_CONSENT, e])
				}
				,
				e.prototype.pageSignature = function() {
					return this._userId + ":" + this._sessionId + ":" + this._pageId
				}
				,
				e.prototype.fireFsReady = function(e) {
					void 0 === e && (e = !1);
					var t = h._fs_ready(this._wnd);
					if (t)
						try {
							e ? t(!0) : t()
						} catch (e) {
							a.logIfDebug("exception in _fs_ready(): " + e)
						}
				}
				,
				e.prototype.onUnload = function(e) {
					this._queue.addUnload(e),
						p.Scheduler.stopAll()
				}
				,
				e.prototype.handleResponse = function(e) {
					this._pageRsp = e,
						this._userId = e.UserIntId,
						this._sessionId = e.SessionIntId,
						this._pageId = e.PageIntId,
						this._serverPageStart = e.PageStart,
						this._getCurrentSessionEnabled = e.GetCurrentSessionEnabled ? S.Enabled : S.Disabled,
					"number" == typeof e.BundleUploadInterval && (this._bundleUploadInterval = e.BundleUploadInterval),
					e.ResourceUploadingEnabled && this.enableResourceUploading(),
					e.AjaxWatcherEnabled && this.enableAjaxWatcher(),
					e.ConsoleWatcherEnabled && this.enableConsoleWatcher(),
					e.AjaxWatcherEnabled && e.AjaxWatches && this._eventWatcher.ajaxWatcher().setWatches(e.AjaxWatches),
						this.addAllWatchRules(e.ElementBlocks, e.ElementWatches),
						this._watcher.setConsent(!!e.Consented)
				}
				,
				e.prototype.addAllWatchRules = function(e, t) {
					for (var n = 0, r = ["object:not([type^=\"image/\"])", "embed:not([type^=\"image/\"])", "canvas", "noscript"]; n < r.length; n++) {
						var i = r[n];
						this._watcher.addRule(f.WatchKind.Exclude, !1, i)
					}
					if (this._watcher.addRule(f.WatchKind.Exclude, !1, ".fs-hide"),
						this._watcher.addRule(f.WatchKind.Exclude, !1, ".fs-excluded"),
						this._watcher.addRule(f.WatchKind.Exclude, !0, ".fs-excluded-without-consent"),
						this._watcher.addRule(f.WatchKind.Exclude, !1, ".fs-block"),
						this._watcher.addRule(f.WatchKind.Exclude, !0, ".fs-record-with-consent"),
						e)
						for (var o = 0; o < e.length; ++o)
							this._watcher.addElementBlock(e[o]);
					if (t)
						for (o = 0; o < t.length; ++o)
							this._watcher.addRule(f.WatchKind.Watch, !1, t[o].Selector)
				}
				,
				e.prototype.fullyStarted = function() {
					this._onFullyStarted()
				}
				,
				e.prototype.enableResourceUploading = function() {
					this._resourceUploadingEnabled = !0,
						this._eventWatcher.initResourceUploading()
				}
				,
				e.prototype.enableAjaxWatcher = function() {
					this.eventWatcher().ajaxWatcher().enable()
				}
				,
				e.prototype.enableConsoleWatcher = function() {
					this.console().enable()
				}
				,
				e.prototype.flushPendingChildFrameInits = function() {
					if (this._pendingChildFrameIdInits.length > 0) {
						for (var e = 0; e < this._pendingChildFrameIdInits.length; e++)
							this._pendingChildFrameIdInits[e]();
						this._pendingChildFrameIdInits = []
					}
				}
				,
				e.prototype.inject = function(e) {
					var t = this
						, n = {
						send: function(n, r, i) {
							E.FSPromise.resolve().then(_.FsBugSnag.wrap(function() {
								t.postMessageReceived(e.contentWindow, [n, m.windex.jsonParse(r), i])
							}))
						}
					};
					this._injector({
						frame: e,
						transport: n,
						orgId: this._orgId,
						scheme: this._scheme,
						script: this._script,
						recHost: this._recHost,
						appHost: this._appHost
					})
				}
				,
				e.prototype.onFrameCreated = function(e) {
					var n = this;
					if (i.fsid(e)) {
						this._iFrames.push(e);
						var r = function(e) {
							var t = e.src
								, n = location.protocol + "//" + location.host;
							return !t || "about:blank" == t || o.hasPrefix(t, "javascript:") || o.hasPrefix(t, n)
						}(e)
							, s = !1;
						if (e.contentWindow)
							try {
								s = !!e.contentWindow[u.Namespace(e.contentWindow)]
							} catch (e) {
								s = !0
							}
						(!r || s) && e.contentWindow && e.contentWindow.postMessage ? (a.logIfDebug("Cross-origin iframe " + w(e, this._orgId)),
							I(e.contentWindow, [t.FS_GREET_CHILD_FRAME])) : r ? (a.logIfDebug("Attempting to setup Frame " + w(e, this._orgId)),
							this.inject(e),
							e.addEventListener("load", _.FsBugSnag.wrap(function(t) {
								try {
									n._tickerTasks.push(function() {
										a.logIfDebug("onload for frame " + w(e, n._orgId)),
											n.inject(e)
									})
								} catch (t) {
									_.FsBugSnag.sendToBugsnag(t, "error")
								}
							}))) : a.logIfDebug("Frame Doesn't need injecting. Probably cross domain " + w(e, this._orgId))
					} else
						a.logIfDebug("fsid missing or invalid for iFrame " + w(e, this._orgId))
				}
				,
				e.prototype.beforeFrameRemoved = function(e) {
					for (var t = 0; t < this._iFrames.length; t++) {
						if (e == this._iFrames[t])
							return void this._iFrames.splice(t, 1)
					}
				}
				,
				e.prototype.postMessageReceived = function(e, n) {
					if (!e || e.parent == this._wnd)
						switch (n[0]) {
							case t.FS_IFRAME_EVENTS:
								var r = n[1]
									, i = this.pageSignature()
									, o = n[2];
								if (i != o)
									return _.FsBugSnag.sendToBugsnag("Page signature mismatch: " + i + " != " + o, "warning"),
										void (e && I(e, [t.FS_SHUTDOWN_FRAME]));
								r.length > 0 && this._transport.enqueueEvents(i, r);
								break;
							case t.FS_REQUEST_FRAME_ID:
								if (!e)
									return void a.logIfDebug("No MessageEvent.source, iframe may have unloaded.");
								var s = this.iFrameWndToFsId(e);
								s ? (a.logIfDebug("Responding to FID request for frame " + s),
									this.sendFrameIdToInnerFrame(e, s)) : a.logIfDebug("No FrameId found. Hoping to send one later.");
						}
				}
				,
				e.prototype.sendFrameIdToInnerFrame = function(e, n) {
					var r = this
						, i = function() {
						var i = [];
						0 != r._frameId && (i = r._parentIds ? r._parentIds.concat(r._frameId) : [r._frameId]);
						var o = r._ctx.time.startTime();
						I(e, [t.FS_SET_FRAME_ID_CMD, n, i, o, r._scheme, r._script, r._appHost, r._orgId, r._pageRsp])
					};
					null == this._frameId ? this._pendingChildFrameIdInits.push(i) : i()
				}
				,
				e.prototype.iFrameWndToFsId = function(e) {
					for (var t = 0; t < this._iFrames.length; t++)
						if (this._iFrames[t].contentWindow == e)
							return i.fsid(this._iFrames[t]);
					return a.logIfDebug("Unable to locate frame for window"),
						NaN
				}
				,
				e
		}();
		function I(e, t) {
			e && e.postMessage && e.postMessage(o.stringify({
				__fs: t
			}), "*")
		}
		function N(e) {
			try {
				var t = o.parseJson(e);
				if ("__fs"in t)
					return t.__fs
			} catch (e) {}
			return []
		}
		t.AbstractRecorder = T,
			t.parsePostMessageData = N
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, i = n(0), o = n(25), s = n(2), a = n(3);
		!function(e) {
			e[e.Exclude = 1] = "Exclude",
				e[e.Block = 2] = "Block",
				e[e.Record = 3] = "Record",
				e[e.Watch = 4] = "Watch"
		}(r = t.WatchKind || (t.WatchKind = {}));
		var u = {
			1: "exclude",
			2: "block",
			3: "record",
			4: "watch"
		}
			, c = function() {
			function e() {
				this._consent = !1,
					this._hasWatched = !1,
					this._rules = Object.create ? Object.create(null) : {},
					this._rules[r.Exclude] = [],
					this._rules[r.Block] = [],
					this._rules[r.Record] = [],
					this._rules[r.Watch] = [],
					this._consentRules = Object.create ? Object.create(null) : {},
					this._consentRules[r.Exclude] = [],
					this._consentRules[r.Block] = [],
					this._consentRules[r.Record] = [],
					this._consentRules[r.Watch] = []
			}
			return e.prototype.isWatched = function(e) {
				this._hasWatched = !0;
				for (var t = [r.Exclude, r.Block, r.Record, r.Watch], n = 0, o = t; n < o.length; n++)
					for (var s = o[n], a = 0, u = this._rules[s]; a < u.length; a++) {
						var c = u[a];
						if (i.matchesSelector(e, c))
							return s
					}
				if (this._consent)
					for (var h = 0, d = t; h < d.length; h++) {
						s = d[h];
						for (var l = 0, f = this._consentRules[s]; l < f.length; l++) {
							c = f[l];
							if (i.matchesSelector(e, c))
								return s
						}
					}
				return null
			}
				,
				e.prototype.addElementBlock = function(e) {
					var t = r.Exclude;
					switch (e.Type) {
						case a.BlockUnset:
						case a.BlockExclude:
							t = r.Exclude;
							break;
						case a.BlockBlock:
							t = r.Block;
							break;
						case a.BlockRecord:
							t = r.Record;
					}
					return this.addRule(t, e.Consent, e.Selector)
				}
				,
				e.prototype.addRule = function(e, t, n) {
					if (this.tryToAddRule(e, t, n))
						return !0;
					switch (e) {
						case r.Watch:
						case r.Record:
							break;
						case r.Block:
						case r.Exclude:
						default:
							this._rules[e] = ["*"];
					}
					return !1
				}
				,
				e.prototype.tryToAddRule = function(e, t, n) {
					try {
						return !(!n.match(o.WATCH_RULE_COMMENT) && "" != i.trim(n)) || this.mergeRule(e, t, n)
					} catch (e) {
						return s.FsBugSnag.sendToBugsnag("Error adding block rule '" + n + "': " + e, "error"),
							!1
					}
				}
				,
				e.prototype.getConsent = function() {
					return this._consent
				}
				,
				e.prototype.setConsent = function(e) {
					this._consent !== e && (this._consent = e,
					this._hasWatched && this.onConsentChange && this.onConsentChange())
				}
				,
				e.prototype.mergeRule = function(e, t, n) {
					var o = t ? this._consentRules : this._rules
						, a = document.documentElement || document.createElement("div");
					try {
						i.matchesSelector(a, n)
					} catch (t) {
						return s.FsBugSnag.sendToBugsnag("Browser rejected '" + u[e] + "' rule '" + n + "': " + t.toString(), "error"),
							!1
					}
					switch (e) {
						case r.Exclude:
						case r.Block:
						case r.Record:
						case r.Watch:
							break;
						default:
							e = r.Exclude;
					}
					if (0 == o[e].length)
						return o[e].push(n),
							!0;
					var c = o[e].length - 1
						, h = o[e][c].concat(", ", n);
					try {
						i.matchesSelector(a, h)
					} catch (t) {
						return o[e].push(n),
							s.FsBugSnag.sendToBugsnag("Browser rejected merged '" + u[e] + "' rule when adding '" + n + "': " + t.toString(), "warning"),
							!0
					}
					return o[e][c] = h,
						!0
				}
				,
				e.prototype.allConsentSensitiveElements = function(e) {
					if (0 == this._consentRules[r.Exclude].length)
						return [];
					if (1 == this._consentRules[r.Exclude].length)
						return e.querySelectorAll(this._consentRules[r.Exclude][0]);
					for (var t = [], n = 0, i = this._consentRules[r.Exclude]; n < i.length; n++)
						for (var o = i[n], s = e.querySelectorAll(o), a = 0; a < s.length; a++)
							t.push(s[a]);
					return t
				}
				,
				e
		}();
		t.Watcher = c
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0)
			, i = n(1)
			, o = n(2)
			, s = n(6)
			, a = n(12)
			, u = n(7)
			, c = function() {
			function e(e) {
				this._byteCount = 0,
					this._scheme = e.options.scheme,
					this._recHost = e.options.recHost
			}
			return e.prototype.page = function(e, t, n) {
				this.post("/rec/page", r.stringify(e), function(e) {
					try {
						t(r.parseJson(e))
					} catch (e) {
						n(0)
					}
				}, n)
			}
				,
				e.prototype.bundle = function(e, t, n, s, a, u, c, h, l, f) {
					var p = r.stringify(e);
					this._byteCount += p.length,
						i.logIfDebug("total bytes written: " + this._byteCount);
					var _ = d(t, n, s, a, e.Seq, u, c, h);
					return this.post(_, p, function(e) {
						try {
							l(r.parseJson(e))
						} catch (t) {
							o.FsBugSnag.sendToBugsnag("Failed to JSON parse /rec/bundle response: " + e + ": " + t, "error"),
								f(0)
						}
					}, f),
						this._byteCount
				}
				,
				e.prototype.bundleBeacon = function(e, t, n, r, i, o, s, a) {
					return f(this._scheme, this._recHost, e, t, n, r, i, o, s, a)
				}
				,
				e.prototype.exponentialBackoffMs = function(e, t) {
					var n = Math.min(u.BackoffMax, 5e3 * Math.pow(2, e));
					return t ? n + .25 * Math.random() * n : n
				}
				,
				e.prototype.post = function(e, t, n, r) {
					l(this._scheme, this._recHost, e, t, n, r)
				}
				,
				e
		}();
		t.HttpProtocol = c;
		var h = function() {
			function e(e) {
				this._scheme = e.options.scheme,
					this._recHost = e.options.recHost
			}
			return e.prototype.newResources = function(e, t) {
				var n = this;
				return new s.FSPromise(function(i, o) {
						l(n._scheme, n._recHost, "/rec/newResources?OrgId=" + e, r.stringify(t), i, o)
					}
				)
			}
				,
				e.prototype.uploadResource = function(e) {
					var t = this;
					return new s.FSPromise(function(n, r) {
							l(t._scheme, t._recHost, "/rec/uploadResource", e, n, r)
						}
					)
				}
				,
				e
		}();
		function d(e, t, n, r, i, o, s, a) {
			var u = "/rec/bundle?OrgId=" + e + "&UserId=" + t + "&SessionId=" + n + "&PageId=" + r + "&Seq=" + i;
			return null != o && (u += "&PageStart=" + o),
			null != s && (u += "&PrevBundleTime=" + s),
			null != a && (u += "&DeltaT=" + a),
				u
		}
		function l(e, t, n, r, i, s) {
			var u = "//" + t + n
				, c = !1
				, h = new XMLHttpRequest;
			if ("withCredentials"in h)
				h.onreadystatechange = function() {
					if (h.readyState == a.XHR_DONE) {
						if (c)
							return;
						c = !0;
						try {
							200 == h.status ? i(h.responseText) : s && s(h.status)
						} catch (e) {
							o.FsBugSnag.sendToBugsnag(e, "error")
						}
					}
				}
					,
					h.open("POST", e + u, !0),
					h.withCredentials = !0,
				"function" != typeof r.append && h.setRequestHeader("Content-Type", "text/plain"),
					h.send(r);
			else {
				var d = new XDomainRequest;
				d.onload = function() {
					i(d.responseText)
				}
					,
					d.onerror = function() {
						s && s("Not Found" == d.responseText ? 404 : 500)
					}
					,
					d.onprogress = function() {}
					,
					d.open("POST", u),
					d.send(r)
			}
		}
		function f(e, t, n, i, o, s, a, u, c, h) {
			var l = e + "//" + t + d(i, o, s, a, n.Seq, u, c, h) + "&SkipResponseBody=true";
			return "function" == typeof navigator.sendBeacon && (navigator.sendBeacon(l, r.stringify(n)),
				!0)
		}
		t.HttpResourceProtocol = h,
			t.bundleUrl = d,
			t.bundleBeacon = f
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1);
		t.BAD_APP_IDS = ["", "0", "1", "-1", "true", "false", "n/a", "nan", "undefined", "null", "nil", "the_id_that_you_use_in_your_app_for_this_user"];
		var i = ["811c9dc5", "350ca8af", "340ca71c", "14cd0a2b", "4db211e5", "0b069958", "3613e041", "2f8f13ba", "9b61ad43", "77074ba4", "0da3f8ec", "1c750511"];
		t.parseIdentityCookie = function(e) {
			var n = ""
				, o = ""
				, s = ""
				, a = ""
				, u = "";
			if (e) {
				var c = e.split("`");
				c.length < 3 ? n = e : (s = c[0],
					a = c[1],
					n = c[2],
				c.length >= 5 && (u = decodeURIComponent(c[3]),
				(t.BAD_APP_IDS.indexOf(u) >= 0 || i.indexOf(u) >= 0) && (r.logIfDebug("ignoring invalid app key \"" + u + "\" from cookie."),
					u = "")))
			}
			var h = n.indexOf(":");
			return -1 != h && (o = n.slice(h + 1),
				n = n.slice(0, h)),
				{
					Host: s,
					OrgId: a,
					UserId: n,
					SessionId: o,
					AppKeyHash: u
				}
		}
			,
			t.getCookies = function(e) {
				for (var t = {}, n = e.cookie.split(";"), r = 0; r < n.length; r++) {
					var i = n[r].replace(/^\s+|\s+$/g, "").split("=");
					t[i[0]] || (t[i[0]] = i[1])
				}
				return t
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.CompiledTimestamp = 1562943893,
			t.CompiledVersion = "UNSET"
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(4);
		function i(e) {
			return e && e.body && e.documentElement ? "BackCompat" == e.compatMode ? [e.body.clientWidth, e.body.clientHeight] : [e.documentElement.clientWidth, e.documentElement.clientHeight] : [0, 0]
		}
		t.getDocumentClientArea = i;
		var o = function() {
			function e(e, t) {
				var n, r;
				this.hasKnownPosition = !1,
					this.pageLeft = 0,
					this.pageTop = 0,
					this.width = 0,
					this.height = 0,
					this.clientWidth = 0,
					this.clientHeight = 0;
				var o = e.document;
				if (o && o.documentElement && o.body) {
					if ("visualViewport"in e) {
						var s = o.documentElement.getBoundingClientRect();
						this.hasKnownPosition = !0,
							this.pageLeft = 0 == s.left ? 0 : -s.left,
							this.pageTop = 0 == s.top ? 0 : -s.top
					}
					if (n = i(o),
						this.clientWidth = n[0],
						this.clientHeight = n[1],
					void 0 !== t && this.clientWidth == t.clientWidth && this.clientHeight == t.clientHeight && t.width > 0 && t.height > 0)
						return this.width = t.width,
							void (this.height = t.height);
					r = this.computeLayoutViewportSizeFromMediaQueries(e),
						this.width = r[0],
						this.height = r[1]
				}
			}
			return e.prototype.computeLayoutViewportSizeFromMediaQueries = function(e) {
				var t = this.findMediaValue(e, "width", this.clientWidth, this.clientWidth + 128);
				void 0 === t && (t = this.tryToGet(e, "innerWidth")),
				void 0 === t && (t = this.clientWidth);
				var n = this.findMediaValue(e, "height", this.clientHeight, this.clientHeight + 128);
				return void 0 === n && (n = this.tryToGet(e, "innerHeight")),
				void 0 === n && (n = this.clientHeight),
					[t, n]
			}
				,
				e.prototype.findMediaValue = function(e, t, n, i) {
					if (r.windex.matchMedia) {
						var o = r.windex.matchMedia(e, "(min-" + t + ": " + n + "px)");
						if (null != o) {
							if (o.matches && r.windex.matchMedia(e, "(max-" + t + ": " + n + "px)").matches)
								return n;
							for (; n <= i; ) {
								var s = Math.floor((n + i) / 2);
								if (r.windex.matchMedia(e, "(min-" + t + ": " + s + "px)").matches) {
									if (r.windex.matchMedia(e, "(max-" + t + ": " + s + "px)").matches)
										return s;
									n = s + 1
								} else
									i = s - 1
							}
						}
					}
				}
				,
				e.prototype.tryToGet = function(e, t) {
					try {
						return e[t]
					} catch (e) {
						return
					}
				}
				,
				e
		}();
		function s(e, t) {
			return new o(e,t)
		}
		t.getLayoutViewport = s;
		var a = function() {
			return function(e, t) {
				this.offsetLeft = 0,
					this.offsetTop = 0,
					this.pageLeft = 0,
					this.pageTop = 0,
					this.width = 0,
					this.height = 0,
					this.scale = 0;
				var n = e.document;
				if (n.body) {
					var r = "BackCompat" == n.compatMode;
					"pageXOffset"in e ? (this.pageLeft = e.pageXOffset,
						this.pageTop = e.pageYOffset) : n.scrollingElement ? (this.pageLeft = n.scrollingElement.scrollLeft,
						this.pageTop = n.scrollingElement.scrollTop) : r ? (this.pageLeft = n.body.scrollLeft,
						this.pageTop = n.body.scrollTop) : n.documentElement && (n.documentElement.scrollLeft > 0 || n.documentElement.scrollTop > 0) ? (this.pageLeft = n.documentElement.scrollLeft,
						this.pageTop = n.documentElement.scrollTop) : (this.pageLeft = n.body.scrollLeft || 0,
						this.pageTop = n.body.scrollTop || 0),
						this.offsetLeft = this.pageLeft - t.pageLeft,
						this.offsetTop = this.pageTop - t.pageTop;
					try {
						var i = e.innerWidth
							, o = e.innerHeight
					} catch (e) {
						return
					}
					if (0 != i && 0 != o) {
						this.scale = t.width / i,
						this.scale < 1 && (this.scale = 1);
						var s = t.width - t.clientWidth
							, a = t.height - t.clientHeight;
						this.width = i - s / this.scale,
							this.height = o - a / this.scale
					}
				}
			}
		}();
		t.getVisualViewport = function(e, t) {
			return "visualViewport"in e ? e.visualViewport : (void 0 === t && (t = s(e)),
				new a(e,t))
		}
	}
	, function(e, t, n) {
		"use strict";
		var r, i = this && this.__extends || (r = function(e, t) {
				return (r = Object.setPrototypeOf || {
							__proto__: []
						}instanceof Array && function(e, t) {
							e.__proto__ = t
						}
						|| function(e, t) {
							for (var n in t)
								t.hasOwnProperty(n) && (e[n] = t[n])
						}
				)(e, t)
			}
				,
				function(e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
							new n)
				}
		);
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = function() {
			function e(e) {
				void 0 === e && (e = 4),
					this.hashCount = e,
					this.idx = 0,
					this.hashMask = e - 1,
					this.reset()
			}
			return e.prototype.reset = function() {
				this.idx = 0,
					this.hash = [];
				for (var e = 0; e < this.hashCount; ++e)
					this.hash.push(2166136261)
			}
				,
				e.prototype.write = function(e) {
					for (var t = this.hashMask, n = this.idx, r = 0; r < e.length; r++)
						this.hash[n] = this.hash[n] ^ e[r],
							this.hash[n] += (this.hash[n] << 1) + (this.hash[n] << 4) + (this.hash[n] << 7) + (this.hash[n] << 8) + (this.hash[n] << 24),
							n = n + 1 & t;
					this.idx = n
				}
				,
				e.prototype.writeAscii = function(e) {
					for (var t = this.hashMask, n = this.idx, r = 0; r < e.length; r++)
						this.hash[n] = this.hash[n] ^ e.charCodeAt(r),
							this.hash[n] += (this.hash[n] << 1) + (this.hash[n] << 4) + (this.hash[n] << 7) + (this.hash[n] << 8) + (this.hash[n] << 24),
							n = n + 1 & t;
					this.idx = n
				}
				,
				e.prototype.sum = function() {
					var e, t = this.sumAsHex();
					return (e = t,
						u(String.fromCharCode.apply(null, e.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")))).replace(/\+/g, "-").replace(/\//g, "_")
				}
				,
				e.prototype.sumAsHex = function() {
					for (var e = "", t = 0; t < this.hashCount; ++t)
						e += ("00000000" + (this.hash[t] >>> 0).toString(16)).slice(-8);
					return e
				}
				,
				e
		}();
		t._FSNV = o,
			t.hashString32Blocking = function(e) {
				var t = new o(1);
				return t.writeAscii(e),
					t.sumAsHex()
			}
		;
		var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
			, a = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return i(t, e),
				t
		}(Error)
			, u = window.btoa || c;
		function c(e) {
			for (var t, n, r = String(e), i = 0, o = s, u = []; r.charAt(0 | i) || (o = "=",
			i % 1); u.push(o.charAt(63 & t >> 8 - i % 1 * 8))) {
				if ((n = r.charCodeAt(i += .75)) > 255)
					throw new a("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
				t = t << 8 | n
			}
			return u.join("")
		}
		t._jsbtoa = c
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.domainFromHost = function(e) {
				var t = e
					, n = t.indexOf(":");
				return n >= 0 && (t = t.slice(0, n)),
					t
			}
			,
			t.isLocalhost = function(e) {
				return "localhost" == e || "127.0.0.1" == e
			}
			,
			t.isIP = function(e) {
				return !!e.match(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/g)
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.urlValueDelims = [["url\\(\\s*\"", "\"\\s*\\)"], ["url\\(\\s*'", "'\\s*\\)"], ["url\\(\\s*", "\\s*\\)"]];
		var r = [["@import\\s+\"", "\""], ["@import\\s+'", "'"]].concat(t.urlValueDelims)
			, i = /(?:[^\\](?:\\\\)*)/.source;
		t.urlPattern = ".*?" + i,
			t.CSS_URL = new RegExp(r.map(function(e) {
				var n = e[0]
					, r = e[1];
				return "(" + n + ")(" + t.urlPattern + ")(" + r + ")"
			}).join("|"),"g"),
			t.replaceCssUrls = function(e, n) {
				return e.replace(t.CSS_URL, function(e) {
					for (var t = [], r = 1; r < arguments.length; r++)
						t[r - 1] = arguments[r];
					var i = t[0] || t[3] || t[6] || t[9] || t[12]
						, o = t[1] || t[4] || t[7] || t[10] || t[13]
						, s = t[2] || t[5] || t[8] || t[11] || t[14]
						, a = t[15];
					return n(i, o, s, a)
				})
			}
			,
			t.SIMPLE_CSS_URL = /url\(["']?(.+?)["']?\)/g,
			t.QUOTES = /\"|'/g,
			t.HOVER = /\:hover/g,
			t.FOCUS = /\:focus/g,
			t.FOCUS_WITHIN = /\:focus-within/g,
			t.MEDIA_QUERY = /(@media.*?{)/g,
			t.DOMAIN = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/,
			t.DOMAIN_PART = /^[a-zA-Z0-9-:]{1,61}$/,
			t.IPv4_PART = /^[0-9]{1,3}$/,
			t.IPv6_PART = /^[0-9a-f]{0,4}$/,
			t.PLAYBACK_URL_PARAMS = /.*\?Base=(.*)&Url=(.*)/,
			t.EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			t.IMAGE_FILENAME = /\.(jpe?g|png|svg|gif|bmp)$/,
			t.WATCH_RULE_COMMENT = /^\s*\/\//,
			t.DATA_URI = /^data:([^;,]*)[;,]/i,
			t.SKETCHY_CONTENT_TYPES = /(application|script|text\/js|text\/html)/i,
			t.WHITELISTED_CONTENT_TYPES = /(^application\/octet-stream)|(^font\/)|(^application\/[a-z_.-]*font)/i,
			t.SKETCHY_URI_SCHEMES = /javascript:|file:/i
	}
	, function(e, t, n) {
		"use strict";
		var r;
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.theDummyDoc = function() {
				return r || (r = function() {
					var e = document.implementation.createHTMLDocument("");
					return e.head || e.documentElement.appendChild(e.createElement("head")),
					e.body || e.documentElement.appendChild(e.createElement("body")),
						e
				}()),
					r
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.parseFieldPatterns = function(e) {
				var t = 0
					, n = {
					id: t++,
					edges: {}
				};
				return e.split("\n").forEach(function(e) {
					if ("" != (e = e.trim())) {
						if (0 == e.indexOf("/") || e.lastIndexOf("/") == e.length - 1)
							throw new Error("Leading and trailing slashes are not supported");
						var r = n
							, i = e.split("/");
						i.forEach(function(e, n) {
							if ("" === (e = e.trim()))
								throw new Error("Empty elements are not allowed");
							if ("**" != e && "*" != e && -1 != e.indexOf("*"))
								throw new Error("Embedded wildcards are not supported");
							var o = null;
							"**" == e ? (r.loop = !0,
								o = r) : e in r.edges && (o = r.edges[e]),
							o || (o = {
								id: t++,
								edges: {}
							},
								r.edges[e] = o),
							n == i.length - 1 && (o.term = !0),
								r = o
						})
					}
				}),
					n
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = 2
			, i = 19;
		t.elemSheet = function(e) {
			return e ? e.sheet : void 0
		}
			,
			t.sheetRules = function(e) {
				try {
					return e ? e.cssRules || e.rules : void 0
				} catch (e) {
					return
				}
			}
			,
			t.getCssPropertyValue = function(e, t) {
				if ("function" == typeof e.getPropertyCSSValue) {
					var n = e.getPropertyCSSValue(t);
					if (null != n) {
						var o = n.cssValueType == r ? n[0] : n
							, s = o.cssText;
						if (o.primitiveType == i && 0 != s.indexOf("\""))
							return "\"" + s + "\""
					}
				}
				return e.getPropertyValue(t)
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(3)
			, i = n(0)
			, o = n(53)
			, s = n(10)
			, a = n(13)
			, u = n(11)
			, c = n(4)
			, h = function() {
			function e(e, t, n) {
				this._queue = t,
					this._enabled = !1,
					this._overflow = !1,
					this._total = 0,
					this._hooks = [],
					this._wnd = e.window,
					this._listeners = n.createChild(),
					this.maxLogsPerPage = "P2C" == e.options.orgId || "ESHFX" == e.options.orgId ? 3e3 : r.MAX_LOGS_PER_PAGE
			}
			return e.prototype._overflowMsg = function() {
				return "\"[received more than " + this.maxLogsPerPage + " messages]\""
			}
				,
				e.prototype.enable = function() {
					var e = this;
					if (this._listeners.add(this._wnd, "error", !0, function(t) {
						return e.addError(t)
					}),
						this._listeners.add(this._wnd, "unhandledrejection", !0, function(t) {
							e.addLog("error", ["Uncaught (in promise)", t.reason])
						}, !0),
						!this._enabled)
						if (this._enabled = !0,
							this._queue.enqueue(r.EVENT_REC_FEAT_SUPPORTED, [r.RecFeatureConsole, !0]),
							this._wnd.console)
							for (var t = function(t) {
								var r = i.activateHook(n._wnd.console, t);
								if (!r)
									return "continue";
								r.before(function(n) {
									var r = n.args;
									return e.addLog(t, r)
								}),
									n._hooks.push(r)
							}, n = this, o = 0, s = ["log", "info", "warn", "error"]; o < s.length; o++) {
								t(s[o])
							}
						else
							this.addLog("log", ["NOTE: Log messages cannot be captured on IE9"])
				}
				,
				e.prototype.isEnabled = function() {
					return this._enabled
				}
				,
				e.prototype.disable = function() {
					var e;
					if (this._listeners.clear(),
						this._enabled)
						for (this._enabled = !1; e = this._hooks.pop(); )
							e.disable()
				}
				,
				e.prototype.addLog = function(e, t) {
					if (this.checkOverflow()) {
						for (var n = [e], i = 0; i < t.length; ++i)
							n.push(d(t[i], 1e3));
						this._queue.enqueue(r.EVENT_LOG, n)
					}
				}
				,
				e.prototype.addError = function(e) {
					if (this.checkOverflow()) {
						var t = e.message
							, n = e.filename
							, i = e.lineno;
						if (t || n || i) {
							"object" == typeof t && (t = d(t, 1e3)),
							"object" == typeof n && (n = d(n, 100)),
							"object" == typeof i && (i = -1);
							var s = [t, n, i];
							s = s.concat(o.stackTraceFromError(e.error)),
								this._queue.enqueue(r.EVENT_ERROR, s)
						}
					}
				}
				,
				e.prototype.checkOverflow = function() {
					return !this._overflow && (this._total == r.MAX_LOGS_PER_PAGE ? (this._queue.enqueue(r.EVENT_LOG, ["warn", this._overflowMsg()]),
						this._overflow = !0,
						!1) : (this._total++,
						!0))
				}
				,
				e
		}();
		function d(e, t) {
			try {
				var n = {
					tokens: [],
					opath: [],
					cyclic: function(e, t) {
						var n = 0;
						try {
							c.windex.jsonStringify(e, function(e, r) {
								if (n++ > t)
									throw "break";
								if ("object" == typeof r)
									return r
							})
						} catch (e) {
							return "break" != e
						}
						return !1
					}(e, t / 4)
				};
				return function e(t, n, r, o) {
					if (n < 1)
						return 0;
					var h = t && t.constructor == Date ? l(t) : function(e) {
						return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && e.nodeType > 0 && "string" == typeof e.nodeName
					}(t) ? function(e) {
						if (!s.fsidIfNotExcluded(e))
							return e.toString();
						if (e.tagName) {
							var t = a.tagName(e)
								, n = u.uaIsEdge && "output" == t ? {} : e.attributes;
							return "<" + t + (n && n.type ? " type=\"" + n.type.value + "\"" : "") + (e.id ? " id=\"" + e.id + "\"" : "") + (e.className ? " class=\"" + e.className + "\"" : "") + ">" + (e.firstChild ? "..." : "") + "</" + t + ">"
						}
						var r = "";
						return e.data && e.data.substring && (r = " " + e.data.substring(0, 50) + (e.data.length > 50 ? "..." : "")),
						e.nodeName + r
					}(t) : void 0 === t ? "undefined" : "object" != typeof t || null == t ? t : t instanceof Error ? t.stack || t.name + ": " + t.message : void 0;
					if (void 0 !== h)
						return void 0 === (h = c.windex.jsonStringify(h)) ? 0 : ("\"" == h[0] && (h = f(h, n, "...\"")),
							h.length <= n ? (o.tokens.push(h),
								h.length) : 0);
					if (o.cyclic) {
						o.opath.splice(r);
						var d = o.opath.lastIndexOf(t);
						if (d > -1) {
							var p = "<Cycle to ancestor #" + (r - d - 1) + ">";
							return p = "\"" + f(p, n - 2) + "\"",
								o.tokens.push(p),
								p.length
						}
						o.opath.push(t)
					}
					var _ = n;
					var g = function(e) {
						return _ >= e.length && (_ -= e.length,
							o.tokens.push(e),
							!0)
					};
					var v = function(e) {
						var t = o.tokens[o.tokens.length - 1];
						"," == t ? o.tokens[o.tokens.length - 1] = e : g(e)
					};
					if (_ < 2)
						return 0;
					if (i.isArray(t)) {
						g("[");
						for (var y = 0; y < t.length && _ > 0; y++) {
							var E = e(t[y], _ - 1, r + 1, o);
							if (_ -= E,
							0 == E && !g("null"))
								break;
							g(",")
						}
						v("]")
					} else {
						g("{");
						for (var m = i.keys(t), y = 0; y < m.length && _ > 0; y++) {
							var w = m[y]
								, S = t[w];
							if (!g("\"" + w + "\":"))
								break;
							var E = e(S, _ - 1, r + 1, o);
							if (0 == E) {
								o.tokens.pop();
								break
							}
							_ -= E,
								g(",")
						}
						v("}")
					}
					return n == 1 / 0 ? 1 : n - _
				}(e, t, 0, n),
					n.tokens.join("")
			} catch (e) {
				return i.jsonErrorString(e)
			}
		}
		t.ConsoleWatcher = h,
			t.stringifyLogMessage = d;
		var l = function(e) {
			return isNaN(e) ? "Invalid Date" : e.toUTCString()
		}
			, f = function(e, t, n) {
			return void 0 === n && (n = "..."),
				e.length <= t ? e : e.length <= n.length || t <= n.length ? e.substring(0, t) : e.substring(0, t - n.length) + n
		}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(6)
			, i = n(4)
			, o = n(15);
		t.wait = function(e) {
			return new r.FSPromise(function(t) {
					i.windex.setWindowTimeout(window, o.guard(t), e)
				}
			)
		}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.isErrorFatal = function(e) {
				return e >= 400 || 202 == e || 206 == e
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(23)
			, i = n(19)
			, o = n(9)
			, s = n(7)
			, a = n(22);
		t.HighlightTypeFsId = "fsidentity",
			t.HighlightTypeNewUid = "newuid",
			t.UID_COOKIE = "fs_uid";
		var u = function() {
			function e(e) {
				void 0 === e && (e = document),
					this._doc = e,
					this._cookies = {}
			}
			return e.prototype.initFromCookies = function(e, n) {
				this._cookies = i.getCookies(this._doc);
				var r = this._cookies[t.UID_COOKIE];
				if (!r)
					try {
						r = localStorage[s.UidLocalStorageKey]
					} catch (e) {}
				this._cookie = i.parseIdentityCookie(r),
				this._cookie.Host.replace(/^www\./, "") == e.replace(/^www\./, "") && this._cookie.OrgId == n || (this._cookie = {
					Host: e,
					OrgId: n,
					UserId: "",
					SessionId: "",
					AppKeyHash: ""
				})
			}
				,
				e.prototype.initFromParsedCookie = function(e) {
					this._cookie = e
				}
				,
				e.prototype.clear = function() {
					var e = this.host()
						, t = this.orgId();
					this._cookie = {
						Host: e,
						OrgId: t,
						UserId: "",
						SessionId: "",
						AppKeyHash: ""
					},
						this.write()
				}
				,
				e.prototype.host = function() {
					return this._cookie.Host
				}
				,
				e.prototype.orgId = function() {
					return this._cookie.OrgId
				}
				,
				e.prototype.userId = function() {
					return this._cookie.UserId
				}
				,
				e.prototype.sessionId = function() {
					return this._cookie.SessionId
				}
				,
				e.prototype.appKeyHash = function() {
					return this._cookie.AppKeyHash
				}
				,
				e.prototype.cookieData = function() {
					return this._cookie
				}
				,
				e.prototype.cookies = function() {
					return this._cookies
				}
				,
				e.prototype.setCookie = function(e, t) {
					var n = e + "=" + t;
					this._domain ? n += "; domain=." + encodeURIComponent(this._domain) : n += "; domain=",
						n += "; Max-Age=31536000; path=/",
						this._doc.cookie = n
				}
				,
				e.prototype.setIds = function(e, t, n, i) {
					(r.isLocalhost(t) || r.isIP(t)) && (t = "");
					var s = o._fs_cookie_domain(e);
					"string" == typeof s && (t = s),
						this._domain = t,
						this._cookie.UserId = n,
						this._cookie.SessionId = i,
						this.write()
				}
				,
				e.prototype.clearAppId = function() {
					return !!this._cookie.AppKeyHash && (this._cookie.AppKeyHash = "",
						this.write(),
						!0)
				}
				,
				e.prototype.setAppId = function(e) {
					this._cookie.AppKeyHash = a.hashString32Blocking(e),
						this.write()
				}
				,
				e.prototype.encode = function() {
					var e = this._cookie.Host + "`" + this._cookie.OrgId + "`" + this._cookie.UserId + ":" + this._cookie.SessionId;
					return this._cookie.AppKeyHash && (e += "`" + encodeURIComponent(this._cookie.AppKeyHash) + "`"),
						e
				}
				,
				e.prototype.write = function() {
					if (null != this._domain) {
						var e = this.encode();
						this.setCookie(t.UID_COOKIE, e);
						try {
							localStorage[s.UidLocalStorageKey] = e
						} catch (e) {}
					}
				}
				,
				e
		}();
		t.Identity = u
	}
	, function(e, t, n) {
		e.exports = n(34)
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			n(35);
		var r = n(36)
			, i = n(2)
			, o = n(9);
		try {
			new r.Conductor().init()
		} catch (e) {
			i.FsBugSnag.sendToBugsnag(e, "error"),
			o._fs_debug(window) && window.console && console.log && console.log("Failed to initialize FullStory.")
		}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}
	, function(e, t, n) {
		"use strict";
		var r = this && this.__awaiter || function(e, t, n, r) {
				return new (n || (n = Promise))(function(i, o) {
						function s(e) {
							try {
								u(r.next(e))
							} catch (e) {
								o(e)
							}
						}
						function a(e) {
							try {
								u(r["throw"](e))
							} catch (e) {
								o(e)
							}
						}
						function u(e) {
							e.done ? i(e.value) : new n(function(t) {
									t(e.value)
								}
							).then(s, a)
						}
						u((r = r.apply(e, t || [])).next())
					}
				)
			}
			, i = this && this.__generator || function(e, t) {
				var n, r, i, o, s = {
					label: 0,
					sent: function() {
						if (1 & i[0])
							throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return o = {
					next: a(0),
					"throw": a(1),
					"return": a(2)
				},
				"function" == typeof Symbol && (o[Symbol.iterator] = function() {
						return this
					}
				),
					o;
				function a(o) {
					return function(a) {
						return function(o) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; s; )
								try {
									if (n = 1,
									r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r),
										0) : r.next) && !(i = i.call(r, o[1])).done)
										return i;
									switch (r = 0,
									i && (o = [2 & o[0], i.value]),
										o[0]) {
										case 0:
										case 1:
											i = o;
											break;
										case 4:
											return s.label++,
												{
													value: o[1],
													done: !1
												};
										case 5:
											s.label++,
												r = o[1],
												o = [0];
											continue;
										case 7:
											o = s.ops.pop(),
												s.trys.pop();
											continue;
										default:
											if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
												s = 0;
												continue
											}
											if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
												s.label = o[1];
												break
											}
											if (6 === o[0] && s.label < i[1]) {
												s.label = i[1],
													i = o;
												break
											}
											if (i && s.label < i[2]) {
												s.label = i[2],
													s.ops.push(o);
												break
											}
											i[2] && s.ops.pop(),
												s.trys.pop();
											continue;
									}
									o = t.call(e, s)
								} catch (e) {
									o = [6, e],
										r = 0
								} finally {
									n = i = 0
								}
							if (5 & o[0])
								throw o[1];
							return {
								value: o[0] ? o[1] : void 0,
								done: !0
							}
						}([o, a])
					}
				}
			}
		;
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = n(2)
			, s = n(16)
			, a = n(59)
			, u = n(62)
			, c = n(32)
			, h = n(64)
			, d = n(14)
			, l = n(4)
			, f = n(0)
			, p = n(1)
			, _ = n(9)
			, g = n(20)
			, v = n(5)
			, y = n(21)
			, E = n(8)
			, m = n(6)
			, w = n(30)
			, S = n(18)
			, b = n(65)
			, T = function() {
			function e() {}
			return e.prototype.createTopRecorder = function(e) {
				var t = _._fs_use_socket(e.window) && b.SockProtocol.isSupported() ? new b.SockProtocol(e) : new S.HttpProtocol(e);
				return new a.TopRecorder(e,t)
			}
				,
				e.prototype.createInnerRecorder = function(e) {
					return new u.InnerRecorder(e)
				}
				,
				e
		}();
		t.DefaultRecorderMaker = T;
		var I = function() {
			function e(e, t) {
				void 0 === e && (e = window),
				void 0 === t && (t = new T),
					this.wnd = e,
					this.recMaker = t,
					this.scheme = "https:",
					this.domDoneLoaded = !1,
					this.waitingOnStart = !1,
					this.reidentifyCount = 0
			}
			return e.prototype.init = function() {
				d.isLoaded(this.wnd) || (d.setLoaded(this.wnd, d.Namespace(this.wnd)),
					l.initWindex(this.wnd),
					this.initApi(),
					this.start())
			}
				,
				e.prototype.getCurrentSessionURL = function(e) {
					return this.recorder ? this.recorder.getCurrentSessionURL(e) : null
				}
				,
				e.prototype.getCurrentSession = function() {
					return this.recorder ? this.recorder.getCurrentSession() : null
				}
				,
				e.prototype.enableConsole = function() {
					this.recorder && this.recorder.console().enable()
				}
				,
				e.prototype.disableConsole = function() {
					this.recorder && this.recorder.console().disable()
				}
				,
				e.prototype.log = function(e) {
					for (var t = [], n = 1; n < arguments.length; n++)
						t[n - 1] = arguments[n];
					this.recorder && ("log" !== e && "info" !== e && "warn" !== e && "error" !== e && "debug" !== e && (t.unshift(e),
						e = "log"),
						this.recorder.console().addLog(e, t))
				}
				,
				e.prototype.shutdownApi = function() {
					this.shutdown("FS.shutdown()")
				}
				,
				e.prototype.shutdown = function(e) {
					this.recorder && !this.deferredStart ? (this.recorder.shutdown(e),
						this.recorder = null) : p.logIfDebug("Recording already shut down.")
				}
				,
				e.prototype.restart = function() {
					if (this.deferredStart)
						return this.deferredStart(),
							void (this.deferredStart = null);
					this.recorder ? p.logIfDebug("Recording already started.") : this.recorder = this.createRecorder(!0)
				}
				,
				e.prototype.splitPage = function(e, t) {
					return r(this, void 0, m.FSPromise, function() {
						return i(this, function(n) {
							switch (n.label) {
								case 0:
									return t && null == this.identity ? (p.logIfDebug("Can't re-identify from an iframe"),
										[2]) : this.waitingOnStart ? (this.splitPending = [e, t],
										[2]) : (this.shutdown(e),
										[4, w.wait(0)]);
								case 1:
									return n.sent(),
										[4, w.wait(0)];
								case 2:
									return n.sent(),
									t && this.identity && this.identity.clear(),
										this.restart(),
										[2];
							}
						})
					})
				}
				,
				e.prototype._api = function(e, t, n) {
					if (this.inFrame())
						p.logIfDebug("API calls may only be made from the top-most frame");
					else if (this.recorder) {
						var r = this.vars.api(e, t, n)
							, i = r.events
							, o = r.reidentify
							, s = r.consent;
						if (o) {
							if (this.reidentifyCount < 8)
								return this.reidentifyCount++,
									_.FS_q_push(this.wnd, [e, t]),
									void this.splitPage("reidentify", !0);
							p.logIfDebug("reidentified too many times; giving up")
						}
						void 0 !== s && this.recorder.setConsent(s);
						for (var a = 0; a < i.length; a++)
							this.recorder.queue().enqueue(i[a].Kind, i[a].Args)
					} else
						_.FS_q_push(this.wnd, [e, t])
				}
				,
				e.prototype._cookies = function() {
					return this.identity ? this.identity.cookies() : (p.logIfDebug("Error in FS integration: Can't get cookies from inside an iframe"),
						null)
				}
				,
				e.prototype._setCookie = function(e, t) {
					this.identity ? this.identity.setCookie(e, t) : p.logIfDebug("Error in FS integration: Can't set cookies from inside an iframe")
				}
				,
				e.prototype._withEventQueue = function(e, t) {
					if (this.recorder) {
						var n = this.recorder.queue()
							, r = this.recorder.pageSignature();
						null != n && null != r ? e === r ? t(n) : o.FsBugSnag.sendToBugsnag("Error in _withEventQueue: Page Signature mismatch expected \"" + r + "\" actual \"" + e + "\"", "error") : p.logIfDebug("Error getting event queue or page signature: Recorder not initialized")
					} else
						p.logIfDebug("Error in FS integration: Recorder not initialized")
				}
				,
				e.prototype.initApi = function() {
					var e = this.wnd[d.Namespace(this.wnd)];
					e.getCurrentSessionURL = f.$entry(this.getCurrentSessionURL, this),
						e.getCurrentSession = f.$entry(this.getCurrentSession, this),
						e.enableConsole = f.$entry(this.enableConsole, this),
						e.disableConsole = f.$entry(this.disableConsole, this),
						e.log = f.$entry(this.log, this),
						e.shutdown = f.$entry(this.shutdownApi, this),
						e.restart = f.$entry(this.restart, this),
						e._api = f.$entry(this._api, this),
						e._cookies = f.$entry(this._cookies, this),
						e._setCookie = f.$entry(this._setCookie, this),
						e._withEventQueue = f.$entry(this._withEventQueue, this)
				}
				,
				e.prototype.start = function() {
					var e = this;
					p.initDebug(_._fs_debug(this.wnd)),
						p.logIfDebug("script version " + g.CompiledVersion + " (compiled at " + g.CompiledTimestamp + ")"),
						this.orgId = _._fs_org(this.wnd),
						this.script = _._fs_script(this.wnd),
						this.recHost = _._fs_rec_host(this.wnd),
						this.appHost = _._fs_app_host(this.wnd),
						this.recHost ? this.orgId ? (p.logIfDebug("script: " + this.script),
							p.logIfDebug("recording host: " + this.recHost),
							p.logIfDebug("orgid: " + this.orgId),
						"localhost:8080" == this.recHost && (this.scheme = "http:"),
						this.inFrame() || (this.identity = new c.Identity(this.wnd.document),
							this.vars = new h.Vars(this.identity),
							this.identity.initFromCookies(this.recHost, this.orgId)),
							this.canRecord(this.orgId) ? (this.recorder = this.createRecorder(),
								this.recorder.eventWatcher().watchEvents(),
								this.hookLoadEvents(),
								this.wnd.addEventListener("message", o.FsBugSnag.wrap(function(t) {
									if ("string" == typeof t.data && (t.source == e.wnd.parent || t.source == e.wnd))
										switch (s.parsePostMessageData(t.data)[0]) {
											case s.FS_SHUTDOWN_FRAME:
												e.shutdown("ShutdownFrame message");
												break;
											case s.FS_RESTART_FRAME:
												e.restart();
										}
								}))) : this.hailMary()) : p.logIfDebug("Missing global _fs_org. Recording disabled.") : p.logIfDebug("Missing global _fs_host or _fs_rec_host. Recording disabled.")
				}
				,
				e.prototype._context = function(e) {
					var t = this;
					return {
						window: this.wnd,
						time: new v.Timekeeper,
						options: {
							orgId: this.orgId,
							scheme: this.scheme,
							script: this.script,
							recHost: this.recHost,
							appHost: this.appHost
						},
						recording: {
							get bundleUploadInterval() {
								return e().bundleUploadInterval
							},
							inFrame: this.inFrame(),
							vars: this.vars,
							identity: this.identity,
							splitPage: function(e, n) {
								return t.splitPage(e, n)
							},
							pageSignature: function() {
								return e().pageSignature()
							}
						}
					}
				}
				,
				e.prototype.createRecorder = function(e) {
					var t, n = this, r = this._context(function() {
						return t
					});
					if (this.inFrame())
						t = this.recMaker.createInnerRecorder(r);
					else {
						t = this.recMaker.createTopRecorder(r);
						for (var i = this.drainApiQueue(_.FS_q_drain(this.wnd)), o = i.events, a = i.reidentify, u = i.appId, c = i.defer, h = i.consent, d = 0, l = o; d < l.length; d++) {
							var f = l[d];
							t.queue().enqueue(f.Kind, f.Args)
						}
						void 0 !== h && t.setConsent(h)
					}
					this.waitingOnStart = !0;
					var p = function() {
						t.start(!!a, function() {
							n.waitingOnStart = !1,
							e && t.tellAllFramesTo([s.FS_RESTART_FRAME]),
							n.splitPending && (n.splitPage(n.splitPending[0], n.splitPending[1]),
								n.splitPending = null)
						}, u),
						e && t.eventWatcher().watchEvents()
					};
					return c ? this.deferredStart = p : p(),
						t
				}
				,
				e.prototype.drainApiQueue = function(e) {
					if (!e)
						return {
							events: []
						};
					for (var t, n, r, i, o = [], s = 0, a = e; s < a.length; s++) {
						var u = a[s]
							, c = u.length > 2 ? u[2] : null;
						"user" == u[0] && u[1] && u[1].uid && (t = h.transformValidateAppId(u[1].uid)[0]);
						var d = this.vars.api(u[0], u[1], c)
							, l = d.events
							, f = d.reidentify
							, p = d.recStatus
							, _ = d.consent;
						p && (i = "shutdown" === p),
						f && (o = [],
							n = !0),
						void 0 !== _ && (r = _),
							o.push.apply(o, l)
					}
					return {
						events: o,
						reidentify: n,
						consent: r,
						appId: t,
						defer: i
					}
				}
				,
				e.prototype.inFrame = function() {
					if ("boolean" == typeof this._inFrame)
						return this._inFrame;
					var e = _._fs_transport(this.wnd);
					return _._fs_is_outer_script(this.wnd) ? this._inFrame = !1 : this.wnd != top ? this._inFrame = !0 : e ? e.init && e.init(this.orgId) && (this._inFrame = !0) : this._inFrame = !1,
						this._inFrame
				}
				,
				e.prototype.canRecord = function(e) {
					return (this.wnd.MutationObserver || this.wnd.MutationEvent) && this.wnd.postMessage && f._native_matchesSelector ? !!function e(t) {
						if (t == top || _._fs_is_outer_script(t) || _._fs_run_in_iframe(t) || _._fs_transport(t))
							return !0;
						try {
							return t.parent.document,
								e(t.parent)
						} catch (e) {
							return !1
						}
					}(this.wnd) || (p.logIfDebug("FullStory recording for this page is NOT allowed within an iFrame."),
						!1) : (p.logIfDebug("missing required browser features"),
						!1)
				}
				,
				e.prototype.hailMary = function() {
					var e = this;
					if (this.identity) {
						var t = _._fs_replay_flags(this.wnd);
						p.logIfDebug("Unable to record playback stream.");
						var n = document.createElement("script");
						this.wnd.__fs_startResponse = function(t) {
							t && e.identity.setIds(e.wnd, t.CookieDomain, t.UserIntId, t.SessionIntId),
							document.head && document.head.removeChild(n)
						}
						;
						var r = y.getDocumentClientArea(this.wnd.document)
							, i = r[0]
							, o = r[1]
							, s = f.tryGetScreenDims(this.wnd)
							, a = s[0]
							, u = s[1]
							, c = E.scrubUrl(E.baseUri(this.wnd), this.orgId, {
							source: "page",
							type: "base"
						})
							, h = E.scrubUrl(document.referrer, this.orgId, {
							source: "page",
							type: "referrer"
						})
							, d = E.scrubUrl(this.wnd.location.href, this.orgId, {
							source: "page",
							type: "url"
						});
						n.src = "//" + this.recHost + "/rec/page?OrgId=" + this.orgId + "&UserId=" + this.identity.userId() + "&Url=" + encodeURIComponent(d) + "&Base=" + encodeURIComponent(c) + "&Width=" + i + "&Height=" + o + "&ScreenWidth=" + a + "&ScreenHeight=" + u + "&Referrer=" + encodeURIComponent(h) + "&Doctype=" + encodeURIComponent(f.doctypeString(document)) + "&CompiledTimestamp=" + g.CompiledTimestamp + "&Fallback=true" + (t ? "&ReplayFlags=" + t : ""),
						document.head && document.head.appendChild(n)
					}
				}
				,
				e.prototype.hookLoadEvents = function() {
					var e = this
						, t = function() {
						e.domDoneLoaded || (e.domDoneLoaded = !0,
						e.recorder && e.recorder.onDomLoad())
					}
						, n = !1
						, r = function() {
						n || (n = !0,
						e.recorder && e.recorder.onLoad())
					};
					switch (document.readyState) {
						case "interactive":
							document.attachEvent || t();
							break;
						case "complete":
							t(),
								r();
					}
					this.domDoneLoaded || document.addEventListener("DOMContentLoaded", o.FsBugSnag.wrap(t)),
					n || this.wnd.addEventListener("load", o.FsBugSnag.wrap(function(e) {
						t(),
							r()
					}))
				}
				,
				e
		}();
		t.Conductor = I
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.AttrExcluded = "_fs_excluded"
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(39);
		t.Object = r.ExtendedObject,
			t.isNonEmpty = function(e) {
				return e.length > 0
			}
			,
			t.assertExhaustive = function(e, t) {
				throw void 0 === t && (t = "Reached unexpected case in exhaustive switch"),
					new Error(t)
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.ExtendedObject = Object
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1)
			, i = n(2)
			, o = n(15);
		function s(e, t, n, i) {
			void 0 !== n && ("function" == typeof e.addEventListener ? e.addEventListener(t, n, i) : "function" == typeof e.addListener ? e.addListener(n) : r.logIfDebug("Target of " + t + " doesn't seem to support listeners"))
		}
		function a(e, t, n, i) {
			void 0 !== n && ("function" == typeof e.removeEventListener ? e.removeEventListener(t, n, i) : "function" == typeof e.removeListener ? e.removeListener(n) : r.logIfDebug("Target of " + t + " doesn't seem to support listeners"))
		}
		t._trustEventOverride = "_fs_trust_event";
		var u = function() {
			function e() {
				var e = this;
				this._listeners = [],
					this._children = [],
					this._yesCapture = !0,
					this._noCapture = !1;
				try {
					var t = Object.defineProperty({}, "passive", {
						get: function() {
							e._yesCapture = {
								capture: !0,
								passive: !0
							},
								e._noCapture = {
									capture: !1,
									passive: !0
								}
						}
					});
					window.addEventListener("test", o.doNothing, t)
				} catch (e) {}
			}
			return e.prototype.add = function(e, t, n, r, i) {
				return void 0 === i && (i = !1),
					this.addCustom(e, t, n, r, i)
			}
				,
				e.prototype.addCustom = function(e, n, r, o, a) {
					void 0 === a && (a = !1);
					var u = {
						target: e,
						type: n,
						fn: i.FsBugSnag.wrap(function(e) {
							(a || !1 !== e.isTrusted || "message" == n || e[t._trustEventOverride]) && o(e)
						}),
						options: r ? this._yesCapture : this._noCapture,
						index: this._listeners.length
					};
					return this._listeners.push(u),
						s(e, n, u.fn, u.options),
						u
				}
				,
				e.prototype.remove = function(e) {
					e.target && (a(e.target, e.type, e.fn, e.options),
						e.target = null,
						e.fn = void 0)
				}
				,
				e.prototype.clear = function() {
					for (var e = 0; e < this._listeners.length; e++)
						this._listeners[e].target && this.remove(this._listeners[e]);
					this._listeners = []
				}
				,
				e.prototype.createChild = function() {
					var t = new e;
					return this._children.push(t),
						t
				}
				,
				e.prototype.refresh = function() {
					for (var e = 0, t = this._listeners; e < t.length; e++) {
						var n = t[e];
						n.target && (a(n.target, n.type, n.fn, n.options),
							s(n.target, n.type, n.fn, n.options))
					}
					for (var r = 0, i = this._children; r < i.length; r++) {
						i[r].refresh()
					}
				}
				,
				e
		}();
		t.DomListeners = u
	}
	, function(e, t, n) {
		"use strict";
		var r = this && this.__importDefault || function(e) {
				return e && e.__esModule ? e : {
					"default": e
				}
			}
		;
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = n(42)
			, o = n(25)
			, s = n(21)
			, a = n(43)
			, u = n(44)
			, c = n(47)
			, h = n(48)
			, d = n(50)
			, l = r(n(52))
			, f = n(0)
			, p = n(10)
			, _ = n(3)
			, g = n(5)
			, v = n(7)
			, y = n(13)
			, E = n(11)
			, m = n(4)
			, w = n(8)
			, S = n(12)
			, b = function() {
			function e(e, t, n, r, i, o, s) {
				var f = this;
				this._ctx = e,
					this._queue = t,
					this._onFrameCreated = i,
					this._beforeFrameRemoved = o,
					this._resourceUploader = s,
					this._curSelection = [],
					this._scrollTimeouts = {},
					this._quirks = !1,
					this._uploadResources = !1,
					this._initialized = !1,
					this._wnd = e.window,
					this._doc = this._wnd.document,
					this._loc = this._wnd.location,
					this._hst = this._wnd.history,
					this._listeners = r.createChild(),
					this._quirks = "BackCompat" == this._doc.compatMode,
					this._currentUrl = this._loc.href,
					this._inputWatcher = new a.InputWatcher(function(e) {
							f.addChangeElem(e)
						}
						,function(e) {
							return !!p.fsid(e)
						}
					),
					this._ajaxWatcher = new h.AjaxWatcher(e,t),
					this._perfWatcher = new c.PerfWatcher(e,t,this._listeners),
					this._styleSheetWatcher = new d.StyleSheetWatcher(e,t),
					this._fullscreenWatcher = new l["default"](e,t,this._listeners),
					this._mutWatcher = new u.MutationWatcher(e,n,!0,function(e, t, n) {
							f.visitNode(e, t, n)
						}
						,function(e) {
							var t = e.node;
							if ("iframe" == y.tagName(e.node))
								f._beforeFrameRemoved(e.node);
							else if ("function" == typeof t.getElementsByTagName)
								for (var n = t.getElementsByTagName("iframe"), r = 0; r < n.length; r++) {
									var i = n[r];
									f._beforeFrameRemoved(i)
								}
						}
						,function(e, t, n) {
							if (!p.isExcluded(e) && f._uploadResources)
								for (var r = 0, i = N(e, t, n); r < i.length; r++) {
									var o = i[r];
									f._resourceUploader.uploadIfNeeded(f._wnd, o)
								}
						}
					)
			}
			return Object.defineProperty(e.prototype, "perfWatcher", {
				get: function() {
					return this._perfWatcher
				},
				enumerable: !0,
				configurable: !0
			}),
				e.prototype.watchEvents = function() {
					var e = this;
					this._mutWatcher.hookMutations(),
						this._inputWatcher.hookEvents(),
						this._styleSheetWatcher.start(),
						this._perfWatcher.start(this._resourceUploader),
						this._fullscreenWatcher.start(),
						this._listeners.add(this._wnd, "mousemove", !0, function(t) {
							e.addMouseMove(t)
						}),
						this._listeners.add(this._wnd, "mousedown", !0, function(t) {
							e.addMouseDown(t)
						}),
						this._listeners.add(this._wnd, "mouseup", !0, function(t) {
							e.addMouseUp(t)
						}),
						this._listeners.add(this._wnd, "keydown", !0, function(t) {
							e.addKeyDown(t)
						}),
						this._listeners.add(this._wnd, "keyup", !0, function(t) {
							e.addKeyUp(t)
						}),
						this._listeners.add(this._wnd, "click", !0, function(t) {
							e.addClick(t)
						}),
						this._listeners.add(this._wnd, "dblclick", !0, function(t) {
							e.addDblClick(t)
						}),
						this._listeners.add(this._wnd, "focus", !0, function(t) {
							e.addFocus(t)
						}),
						this._listeners.add(this._wnd, "blur", !0, function(t) {
							e.addBlur(t)
						}),
						this._listeners.add(this._wnd, "change", !0, function(t) {
							e.addChange(t)
						}, !0),
						this._listeners.add(this._wnd, "touchstart", !0, function(t) {
							e.addTouchEvent(t, _.EVENT_TOUCHSTART),
								e.addWindowScrollOrResize()
						}),
						this._listeners.add(this._wnd, "touchend", !0, function(t) {
							e.addTouchEvent(t, _.EVENT_TOUCHEND),
								e.addWindowScrollOrResize()
						}),
						this._listeners.add(this._wnd, "touchmove", !0, function(t) {
							e.addTouchEvent(t, _.EVENT_TOUCHMOVE),
								e.addWindowScrollOrResize()
						}),
						this._listeners.add(this._wnd, "touchcancel", !0, function(t) {
							e.addTouchEvent(t, _.EVENT_TOUCHCANCEL)
						}),
						this._listeners.add(this._wnd, "play", !0, function(t) {
							e.addPlayPauseEvent(t, _.EVENT_PLAY)
						}),
						this._listeners.add(this._wnd, "pause", !0, function(t) {
							e.addPlayPauseEvent(t, _.EVENT_PAUSE)
						}),
						this._listeners.add(this._wnd, "scroll", !1, function(t) {
							e.addWindowScrollOrResize()
						}),
						this._listeners.add(this._wnd, "resize", !1, function(t) {
							e.addWindowScrollOrResize()
						}),
						this._listeners.add(this._wnd, "submit", !1, function(t) {
							e.addFormSubmit(t)
						}),
						this._listeners.add(this._wnd, "focus", !1, function(t) {
							e.addWindowFocus(t)
						}),
						this._listeners.add(this._wnd, "blur", !1, function(t) {
							e.addWindowBlur(t)
						}),
						this._listeners.add(this._wnd, "popstate", !1, function() {
							e.addNavigate()
						}),
						this._listeners.add(this._wnd, "selectstart", !0, function(t) {
							e.addSelection()
						}),
						this._listeners.add(this._doc, "selectionchange", !0, function(t) {
							e.addSelection()
						});
					var t = this._wnd.visualViewport;
					if (t ? (this._listeners.add(t, "scroll", !0, function() {
						return e.addWindowScrollOrResize()
					}),
						this._listeners.add(t, "resize", !0, function() {
							return e.addWindowScrollOrResize()
						})) : this._listeners.add(this._wnd, "mousewheel", !0, function() {
						e.addWindowScrollOrResize()
					}),
						this._pushHook = f.activateHook(this._hst, "pushState"),
					this._pushHook && this._pushHook.afterSync(function() {
						return e.addNavigate()
					}),
						this._replaceHook = f.activateHook(this._hst, "replaceState"),
					this._replaceHook && this._replaceHook.afterSync(function() {
						return e.addNavigate()
					}),
					"function" == typeof this._wnd.document.hasFocus && this._queue.enqueue(this._wnd.document.hasFocus() ? _.EVENT_WINDOW_FOCUS : _.EVENT_WINDOW_BLUR, []),
						m.windex.matchMedia)
						for (var n = function(t, n, i) {
							var o = m.windex.matchMedia(r._wnd, i);
							if (!o)
								return "continue";
							var s = function() {
								o.matches && e._queue.enqueue(_.EVENT_MEDIA_QUERY_CHANGE, [t, n])
							};
							r._listeners.add(o, "change", !0, s),
								s()
						}, r = this, i = 0, o = [["any-pointer", "coarse", "not screen and (any-pointer: fine)"], ["any-pointer", "fine", "only screen and (any-pointer: fine)"], ["any-hover", "none", "not screen and (any-hover: hover)"], ["any-hover", "hover", "only screen and (any-hover: hover)"]]; i < o.length; i++) {
							var s = o[i];
							n(s[0], s[1], s[2])
						}
					this._initialized = !0
				}
				,
				e.prototype.initResourceUploading = function() {
					this._resourceUploader.init(),
						this._uploadResources = !0
				}
				,
				e.prototype.onDomLoad = function() {
					this.addDomLoaded(),
						this.addViewportChange(),
						this._mutWatcher._checkForMissingInsertions(E.uaIsIE)
				}
				,
				e.prototype.onLoad = function() {
					var e = this;
					setTimeout(function() {
						e._perfWatcher.onLoad(),
							e.addLoad(),
							e.addViewportChange()
					}, 0)
				}
				,
				e.prototype.ajaxWatcher = function() {
					return this._ajaxWatcher
				}
				,
				e.prototype.bundleEvents = function(e) {
					return this._inputWatcher.tick(),
						this._perfWatcher.tick(e),
						this._ajaxWatcher.tick(e),
						this.addViewportChange(),
						this._mutWatcher.processMutations()
				}
				,
				e.prototype.shutdown = function(e) {
					this._initialized && (this._initialized = !1,
						this._listeners.clear(),
					this._pushHook && this._pushHook.disable(),
					this._replaceHook && this._replaceHook.disable(),
						this._perfWatcher.onLoad(),
						this._inputWatcher.shutdown(),
						this._mutWatcher.shutdown(),
						this._ajaxWatcher.disable(),
						this._perfWatcher.shutdown(),
						this._styleSheetWatcher.stop(),
						this._fullscreenWatcher.stop(),
						this._queue.shutdown(e))
				}
				,
				e.prototype.recordingIsDetached = function() {
					return this._mutWatcher.recordingIsDetached()
				}
				,
				e.prototype.visitNode = function(e, t, n) {
					var r = this;
					switch (t.nodeName) {
						case "HTML":
							this._docElScrollListener && this._listeners.remove(this._docElScrollListener),
								this._docElScrollListener = this._listeners.add(t, "scroll", !0, function(e) {
									r.addScroll(R(e))
								});
							break;
						case "BODY":
							this.addViewportChange(),
								n.push(function() {
									r.addSelection()
								});
							break;
						case "INPUT":
						case "TEXTAREA":
						case "SELECT":
							this._inputWatcher.addInput(t);
							break;
						case "FRAME":
						case "IFRAME":
							this._onFrameCreated(t);
							break;
						case "VIDEO":
						case "AUDIO":
							t.paused || this.addPlayPauseEventById(p.fsid(t), _.EVENT_PLAY);
							break;
						case "LINK":
							if (!(i = t.sheet))
								break;
							!0 === i.disabled && this._styleSheetWatcher.onDisableSheet(i, !0);
							break;
						case "STYLE":
							var i, o = t;
							if (!(i = o.sheet))
								break;
							!0 === i.disabled && this._styleSheetWatcher.onDisableSheet(i, !0);
							try {
								i.rules || i.cssRules
							} catch (e) {
								break
							}
							var s = d.getDynamicRuleTail(o);
							void 0 !== s && n.push(function() {
								r._styleSheetWatcher.snapshot(o, s)
							});
					}
					var a = t;
					"number" != typeof a.scrollLeft || 0 == a.scrollLeft && 0 == a.scrollTop || this.addScroll(a)
				}
				,
				e.prototype.addMouseMove = function(e) {
					var t = p.fsid(R(e)) ? [e.clientX, e.clientY, p.fsid(R(e))] : [e.clientX, e.clientY];
					this._queue.enqueue(_.EVENT_MOUSEMOVE, t)
				}
				,
				e.prototype.addMouseDown = function(e) {
					this._queue.enqueue(_.EVENT_MOUSEDOWN, [e.clientX, e.clientY])
				}
				,
				e.prototype.addMouseUp = function(e) {
					this._queue.enqueue(_.EVENT_MOUSEUP, [e.clientX, e.clientY])
				}
				,
				e.prototype.addTouchEvent = function(e, t) {
					if (void 0 !== e.changedTouches)
						for (var n = 0; n < e.changedTouches.length; ++n) {
							var r = e.changedTouches[n];
							isNaN(parseInt(r.identifier)) && (r.identifier = 0),
								this._queue.enqueue(t, [r.identifier, r.clientX, r.clientY])
						}
				}
				,
				e.prototype.addPlayPauseEvent = function(e, t) {
					var n = R(e)
						, r = p.fsid(n);
					r && this.addPlayPauseEventById(r, t)
				}
				,
				e.prototype.addPlayPauseEventById = function(e, t) {
					this._queue.enqueue(t, [e])
				}
				,
				e.prototype.addWindowFocus = function(e) {
					this._queue.enqueue(_.EVENT_WINDOW_FOCUS, [])
				}
				,
				e.prototype.addWindowBlur = function(e) {
					this._queue.enqueue(_.EVENT_WINDOW_BLUR, [])
				}
				,
				e.prototype.maybeAddValueChange = function() {
					var e = O(this._doc);
					e && this._inputWatcher.onChange(e)
				}
				,
				e.prototype.addKeyDown = function(e) {
					var t = O(this._doc);
					t && !p.fsidIfNotExcluded(t) || (this.maybeAddValueChange(),
						this._queue.enqueue(_.EVENT_KEYDOWN, []))
				}
				,
				e.prototype.addKeyUp = function(e) {
					var t = O(this._doc);
					t && !p.fsidIfNotExcluded(t) || (this.maybeAddValueChange(),
						this._queue.enqueue(_.EVENT_KEYUP, []))
				}
				,
				e.prototype.addViewportChange = function() {
					var e = p.fsid(this.getWindowScrollingElement());
					if (e) {
						var t = s.getLayoutViewport(this._wnd, this._curLayoutViewport)
							, n = s.getVisualViewport(this._wnd, t);
						t.hasKnownPosition ? (i.sameViewportPos(t, this._curLayoutViewport) || this._queue.enqueue(_.EVENT_SCROLL_LAYOUT, [e, t.pageLeft, t.pageTop]),
						i.sameVisualViewportOffset(n, this._curVisualViewport) || this._queue.enqueue(_.EVENT_SCROLL_VISUAL_OFFSET, [e, n.offsetLeft, n.offsetTop])) : i.sameViewportPos(n, this._curVisualViewport) || this._queue.enqueue(_.EVENT_SCROLL_LAYOUT, [e, n.pageLeft, n.pageTop]),
						i.sameLayoutViewportSize(t, this._curLayoutViewport) || (t.width == t.clientWidth && t.height == t.clientHeight ? this._queue.enqueue(_.EVENT_RESIZE_LAYOUT, [t.clientWidth, t.clientHeight]) : this._queue.enqueue(_.EVENT_RESIZE_LAYOUT, [t.clientWidth, t.clientHeight, t.width, t.height])),
						i.sameViewportSize(n, this._curVisualViewport) || this._queue.enqueue(_.EVENT_RESIZE_VISUAL, [n.width, n.height]),
							this._curLayoutViewport = i.createLayoutViewportLike(t),
							this._curVisualViewport = i.createVisualViewportLike(n)
					}
				}
				,
				e.prototype.doWorkInScrollTimeout = function(e, t) {
					var n = this;
					e in this._scrollTimeouts || (this._scrollTimeouts[e] = t,
						new g.RealTimeout(function() {
								if (e in n._scrollTimeouts) {
									var t = n._scrollTimeouts[e];
									delete n._scrollTimeouts[e],
										t()
								}
							}
							,v.ScrollSampleInterval).start())
				}
				,
				e.prototype._fireScrollTimeouts = function() {
					for (var e in this._scrollTimeouts)
						this._scrollTimeouts[e](),
							delete this._scrollTimeouts[e];
					this._scrollTimeouts = []
				}
				,
				e.prototype.getWindowScrollingElement = function() {
					return this._doc.scrollingElement || this._doc.body || this._doc.documentElement
				}
				,
				e.prototype.addWindowScrollOrResize = function() {
					var e = this
						, t = p.fsid(this.getWindowScrollingElement());
					t && this.doWorkInScrollTimeout(t, function() {
						return e.addViewportChange()
					})
				}
				,
				e.prototype.addScroll = function(e) {
					var t = this
						, n = p.fsid(e)
						, r = e;
					n && "number" == typeof r.scrollLeft && this.doWorkInScrollTimeout(n, function() {
						t._queue.enqueue(_.EVENT_SCROLL_LAYOUT, [n, r.scrollLeft, r.scrollTop])
					})
				}
				,
				e.prototype.addDomLoaded = function() {
					this._queue.enqueue(_.EVENT_DOMLOADED, [])
				}
				,
				e.prototype.addLoad = function() {
					this._queue.enqueue(_.EVENT_LOAD, [])
				}
				,
				e.prototype.addNavigate = function() {
					var e = this._loc.href;
					this._currentUrl != e && (this._currentUrl = e,
						this._queue.enqueue(_.EVENT_NAVIGATE, [w.scrubUrl(this._loc.href, this._ctx.options.orgId, {
							source: "event",
							type: _.EVENT_NAVIGATE
						}), this._doc.title]))
				}
				,
				e.prototype.addClick = function(e) {
					var t = R(e)
						, n = p.fsid(t);
					if (n) {
						var r = 0
							, i = 0
							, o = 0
							, s = 0;
						if (t && t.getBoundingClientRect) {
							var a = t.getBoundingClientRect();
							r = a.left,
								i = a.top,
								o = a.width,
								s = a.height
						}
						this._queue.enqueue(_.EVENT_CLICK, [n, e.clientX, e.clientY, r, i, o, s])
					}
				}
				,
				e.prototype.addDblClick = function(e) {
					var t = R(e)
						, n = p.fsid(t);
					n && this._queue.enqueue(_.EVENT_DBL_CLICK, [n])
				}
				,
				e.prototype.addFormSubmit = function(e) {
					var t = R(e)
						, n = p.fsid(t);
					n && this._queue.enqueue(_.EVENT_FORM_SUBMIT, [n])
				}
				,
				e.prototype.addFocus = function(e) {
					var t = R(e)
						, n = p.fsid(t);
					n && this._queue.enqueue(_.EVENT_FOCUS, [n])
				}
				,
				e.prototype.addBlur = function(e) {
					var t = R(e)
						, n = p.fsid(t);
					n && this._queue.enqueue(_.EVENT_BLUR, [n])
				}
				,
				e.prototype.addChange = function(e) {
					this._inputWatcher.onChange(R(e))
				}
				,
				e.prototype.addChangeElem = function(e) {
					var t = p.fsidIfNotExcluded(e);
					t && this._queue.enqueue(_.EVENT_VALUECHANGE, [t, a.valueOfInputishElem(e)])
				}
				,
				e.prototype.addSelection = function() {
					try {
						var e = this.selectionArgs()
					} catch (e) {
						return
					}
					for (var t = !1, n = 0; n < 4; n++)
						if (this._curSelection[n] !== e[n]) {
							t = !0;
							break
						}
					t && (this._curSelection = e,
						this._queue.enqueue(_.EVENT_SELECT, e))
				}
				,
				e.prototype.selectionArgs = function() {
					if (!this._wnd.getSelection)
						return [];
					var e = this._wnd.getSelection();
					if (!e)
						return [];
					if ("None" == e.type)
						return [];
					if ("Caret" == e.type) {
						var t = p.fsid(e.anchorNode);
						return t ? [t, e.anchorOffset] : []
					}
					if (!e.anchorNode || !e.focusNode)
						return [];
					var n = T(e.anchorNode, e.anchorOffset)
						, r = n[0]
						, i = n[1]
						, o = T(e.focusNode, e.focusOffset)
						, s = o[0]
						, a = o[1]
						, u = Boolean(r.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING)
						, c = u ? [r, s] : [s, r]
						, h = c[0]
						, d = c[1]
						, l = u ? [i, a] : [a, i]
						, _ = l[0]
						, g = l[1];
					for (p.fsid(h) || (_ = 0); h && !p.fsid(h) && h != d; )
						h = f.nextSibling(h) || h.parentNode;
					for (p.fsid(d) || (g = 0); d && !p.fsid(d) && d != h; )
						d = f.previousSibling(d) || d.parentNode;
					if (h == d && _ == g)
						return [];
					var v = p.fsid(h)
						, y = p.fsid(d);
					return h && d && v && y ? [v, _, y, g, u] : []
				}
				,
				e
		}();
		function T(e, t) {
			if (!e.firstChild)
				return [e, t];
			e = e.firstChild;
			for (var n = 0; n < t - 1; n++) {
				var r = f.nextSibling(e);
				if (!r)
					return [e, 0];
				e = r
			}
			return [e, 0]
		}
		t.EventWatcher = b;
		var I = {
			src: {
				img: !0,
				embed: !0
			},
			href: {
				use: !0,
				image: !0
			},
			data: {
				object: !0
			}
		};
		function N(e, t, n) {
			var r, i = y.tagName(e);
			if (I[t] && I[t][i])
				return [n];
			if ("link" == i && "href" == t && (r = e.getAttribute("rel")) && r.indexOf("stylesheet") > -1)
				return [n];
			if ("srcset" == t && ("img" == i || "source" == i))
				return null != n.match(/^\s*$/) ? [] : f.map(n.split(","), function(e) {
					return f.trim(e).split(/\s+/)[0]
				});
			var s = e;
			if ("style" == t && s.style) {
				var a = s.style.backgroundImage;
				if (!a)
					return [];
				if (a.length > 300)
					return [];
				var u = []
					, c = void 0;
				for (o.SIMPLE_CSS_URL.lastIndex = 0; c = o.SIMPLE_CSS_URL.exec(a); ) {
					var h = c[1];
					h && u.push(h.trim())
				}
				return u
			}
			return []
		}
		function O(e) {
			for (var t = e.activeElement; t && t.shadowRoot; ) {
				var n = t.shadowRoot.activeElement;
				if (!n)
					return t;
				t = n
			}
			return t
		}
		function R(e) {
			if (e.composed && e.target) {
				var t = e.target;
				if (t.nodeType == S.Node_ELEMENT_NODE && t.shadowRoot) {
					var n = e.composedPath();
					if (n.length > 0)
						return n[0]
				}
			}
			return e.target
		}
		t.getResourceUrls = N
	}
	, function(e, t, n) {
		"use strict";
		function r(e) {
			return {
				pageLeft: e.pageLeft,
				pageTop: e.pageTop,
				width: e.width,
				height: e.height
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.sameViewportPos = function(e, t) {
				return t && e.pageLeft == t.pageLeft && e.pageTop == t.pageTop
			}
			,
			t.sameVisualViewportOffset = function(e, t) {
				return t && e.offsetLeft == t.offsetLeft && e.offsetTop == t.offsetTop
			}
			,
			t.sameViewportSize = function(e, t) {
				return t && e.width == t.width && e.height == t.height
			}
			,
			t.sameLayoutViewportSize = function(e, t) {
				return t && e.width == t.width && e.height == t.height && e.clientWidth == t.clientWidth && e.clientHeight == t.clientHeight
			}
			,
			t.createVisualViewportLike = function(e) {
				var t = r(e);
				return t.offsetLeft = e.offsetLeft,
					t.offsetTop = e.offsetTop,
					t
			}
			,
			t.createLayoutViewportLike = function(e) {
				var t = r(e);
				return t.clientWidth = e.clientWidth,
					t.clientHeight = e.clientHeight,
					t
			}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(10)
			, i = n(5)
			, o = n(0)
			, s = n(13)
			, a = function() {
			function e(e, n) {
				this._onchange = e,
					this._checkElem = n,
					this._fallback = !1,
					this._elems = {},
					this.values = {},
					this.radios = {},
					t._globalInputWatcher = this
			}
			return e.prototype.hookEvents = function() {
				(function() {
						var e = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
						if (!e || !e.set)
							return !1;
						u || (o.shimProp(HTMLInputElement, "value", f),
							o.shimProp(HTMLInputElement, "checked", f),
							o.shimProp(HTMLSelectElement, "value", f),
							o.shimProp(HTMLTextAreaElement, "value", f),
							o.shimProp(HTMLSelectElement, "selectedIndex", f),
							o.shimProp(HTMLOptionElement, "selected", f),
							u = !0);
						return !0
					}
				)() || (this._fallback = !0)
			}
				,
				e.prototype.addInput = function(e) {
					var t = r.fsid(e);
					if (this._elems[t] = e,
						_(e)) {
						var n = l(e);
						e.checked && (this.radios[n] = t)
					} else
						this.values[t] = p(e);
					(function(e) {
							switch (e.type) {
								case "checkbox":
								case "radio":
									return e.checked != e.hasAttribute("checked");
								default:
									var t = e.value || "";
									return t != function(e) {
										if ("select" != s.tagName(e))
											return e.getAttribute("value") || "";
										var t = e
											, n = t.querySelector("option[selected]") || t.querySelector("option");
										if (!n)
											return "";
										return n.value || ""
									}(e);
							}
						}
					)(e) && this._onchange(e)
				}
				,
				e.prototype.diffValue = function(e, t) {
					var n = r.fsid(e);
					if (_(e)) {
						var i = l(e);
						return this.radios[i] == n != ("true" == t)
					}
					return this.values[n] != t
				}
				,
				e.prototype.onChange = function(e, t) {
					void 0 === t && (t = p(e));
					var n = r.fsid(e);
					if ((e = this._elems[n]) && this.diffValue(e, t))
						if (this._onchange(e),
							_(e)) {
							var i = l(e);
							"false" == t && this.radios[i] == n ? delete this.radios[i] : this.radios[i] = n
						} else
							this.values[n] = t
				}
				,
				e.prototype.tick = function() {
					for (var e in this._elems) {
						var t = this._elems[e];
						if (this._checkElem(t)) {
							if (this._fallback) {
								var n = p(t);
								if (t && this.diffValue(t, n))
									if (this._onchange(t),
										_(t)) {
										var r = l(t);
										this.radios[r] = +e
									} else
										this.values[e] = n
							}
						} else
							delete this._elems[e],
								delete this.values[e],
							_(t) && delete this.radios[l(t)]
					}
				}
				,
				e.prototype.shutdown = function() {
					t._globalInputWatcher = null
				}
				,
				e.prototype._usingFallback = function() {
					return this._fallback
				}
				,
				e.prototype._trackingElem = function(e) {
					return !!this._elems[e]
				}
				,
				e
		}();
		t.InputWatcher = a;
		var u = !1;
		var c, h = {};
		function d() {
			try {
				if (t._globalInputWatcher)
					for (var e in h) {
						var n = h[e]
							, r = n[0]
							, i = n[1];
						t._globalInputWatcher.onChange(r, i)
					}
			} finally {
				c = null,
					h = {}
			}
		}
		function l(e) {
			if (!e)
				return "";
			for (var t = e; t && "form" != s.tagName(t); )
				t = t.parentElement;
			return (t && "form" == s.tagName(t) ? r.fsid(t) : 0) + ":" + e.name
		}
		function f(e, n) {
			var o = function e(t, n) {
				if (void 0 === n && (n = 2),
				n <= 0)
					return t;
				var r = s.tagName(t);
				return "option" != r && "optgroup" != r || !t.parentElement ? t : e(t.parentElement, n - 1)
			}(e)
				, a = r.fsid(o);
			a && t._globalInputWatcher && t._globalInputWatcher.diffValue(o, "" + n) && (h[a] = [o, "" + n],
			c || (c = new i.RealTimeout(d)).start())
		}
		function p(e) {
			switch (e.type) {
				case "checkbox":
				case "radio":
					return "" + e.checked;
				default:
					var t = e.value;
					return t || (t = ""),
					"" + t;
			}
		}
		function _(e) {
			return e && "radio" == e.type
		}
		t.valueOfInputishElem = p
	}
	, function(e, t, n) {
		"use strict";
		var r = this && this.__assign || function() {
				return (r = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var i in t = arguments[n])
								Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e
					}
				).apply(this, arguments)
			}
		;
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = n(10)
			, o = n(45)
			, s = n(0)
			, a = n(1)
			, u = n(5)
			, c = n(17)
			, h = n(13)
			, d = n(11)
			, l = n(3)
			, f = n(2)
			, p = n(46)
			, _ = n(12)
			, g = function() {
			function e(e, t, n, r, o, s) {
				var a = this;
				void 0 === n && (n = !0),
				void 0 === r && (r = function() {}
				),
				void 0 === o && (o = function() {}
				),
				void 0 === s && (s = function() {}
				),
					this._ctx = e,
					this._watcher = t,
					this._compress = n,
					this._nodeVisitor = r,
					this._beforeRemove = o,
					this._attrVisitor = s,
					this._sentDomSnapshot = !1,
					this._newShadowContainers = [],
					this._toRefresh = [],
					this._records = [],
					this._setPropertyWasThrottled = !1,
					this._wnd = e.window,
					this._encoder = new i.NodeEncoder(t,e.options.orgId),
					this._resizer = p.ResizeWatcher.create(e),
					f.assert(!this._watcher.onConsentChange, "This is the only consent change listener."),
					this._watcher.onConsentChange = function() {
						return a.updateConsent()
					}
			}
			return e.prototype.hookMutations = function(e) {
				var t = this;
				void 0 === e && (e = this._wnd.document),
					this._root = e,
					this._sentDomSnapshot = !1,
				this._compress && (this._lz = new o.LZJGWEncoder);
				var n = !0;
				if (d.uaIsIE)
					try {
						this.setUpIEWorkarounds()
					} catch (e) {
						a.logIfDebug("Error setting up IE workarounds for mutation watcher: " + e),
							n = !1
					}
				n && (this._observer = new MutationObserver(function(e) {
						for (var n = 0, r = e; n < r.length; n++) {
							var i = r[n];
							t._records.push(i)
						}
					}
				))
			}
				,
				e.prototype._observerOff = function() {
					this._observer && this._observer.disconnect()
				}
				,
				Object.defineProperty(e.prototype, "resizer", {
					get: function() {
						return this._resizer
					},
					enumerable: !0,
					configurable: !0
				}),
				e.prototype.shutdown = function() {
					this._observer && this._observer.disconnect();
					var e = i.mirrorFor(this._root);
					e && i.clearIds(e),
						this._records = [],
					d.uaIsIE && this.tearDownIEWorkarounds(),
						this._watcher.onConsentChange = null,
					this._attachShadowHook && (this._attachShadowHook.disable(),
						this._attachShadowHook = null)
				}
				,
				e.prototype.processMutations = function() {
					if (!this._root)
						return [];
					var e = this._ctx.time.now()
						, t = [];
					if (this.maybeGetInitialSnapshot(e, t),
					this._setPropertyWasThrottled && (t.push({
						Kind: l.EVENT_FAIL_THROTTLED,
						When: e,
						Args: [l.ThrottledSetPropertyHooks]
					}),
						this._setPropertyWasThrottled = !1),
					this._records.length > 0 || this._toRefresh.length > 0) {
						var n = {}
							, r = {};
						for (var o in this.processRecords(e, t, r, n),
							r) {
							var s = o.split("\t");
							t.push({
								Kind: l.EVENT_MUT_ATTR,
								When: e,
								Args: [parseInt(s[0]), s[1], r[o]]
							})
						}
						for (var o in n)
							t.push({
								Kind: l.EVENT_MUT_TEXT,
								When: e,
								Args: [parseInt(o), n[o]]
							})
					}
					var a = this._newShadowContainers;
					this._newShadowContainers = [];
					for (var u = 0; u < a.length; u++) {
						var c = a[u].shadowRoot;
						c && 0 != i.fsid(a[u]) && 0 == i.fsid(c) && (this.observe(c),
							this.genShadow(e, t, a[u], c))
					}
					return t.push.apply(t, this._resizer.collect(e)),
						this._records = [],
						t
				}
				,
				e.prototype.recordingIsDetached = function() {
					return this._root && this._root != this._wnd.document
				}
				,
				e.prototype.maybeGetInitialSnapshot = function(e, t) {
					this._sentDomSnapshot || (this.genInsert(e, t, null, this._root, null),
						this._resizer.nodeChanged(this._root),
					this._observer && this.observe(this._root),
						this._sentDomSnapshot = !0,
						this.hookAttachShadow())
				}
				,
				e.prototype.hookAttachShadow = function() {
					var e = this;
					this._attachShadowHook = s.activateHook(HTMLElement.prototype, "attachShadow"),
					this._attachShadowHook && this._attachShadowHook.before(function(t) {
						t.that.shadowRoot || e._newShadowContainers.push(t.that)
					})
				}
				,
				e.prototype.observe = function(e) {
					this._observer.observe(e, {
						childList: !0,
						attributes: !0,
						characterData: !0,
						subtree: !0,
						attributeOldValue: !0,
						characterDataOldValue: !0
					})
				}
				,
				e.prototype.processRecords = function(e, t, n, r) {
					for (var o = this, s = {}, a = {}, u = function(n) {
						if (i.mirrorFor(n)) {
							o.genRemove(e, t, i.mirrorFor(n));
							var r = i.mirrorFor(n.parentNode);
							r && (a[r.id] = r.node)
						}
					}, h = 0; h < this._records.length; ++h)
						try {
							var d = this._records[h]
								, l = i.fsid(d.target);
							if (!l)
								continue;
							switch (s[l] = d.target,
								d.type) {
								case "childList":
									if (d.removedNodes.length > 0)
										for (var p = 0; p < d.removedNodes.length; ++p) {
											var _ = i.mirrorFor(d.removedNodes[p]);
											_ && _.id && this.genRemove(e, t, _)
										}
									d.addedNodes.length > 0 && (a[l] = d.target);
									break;
								case "characterData":
									var g = i.safeTextContent(d.target);
									d.oldValue != g && (i.isExcluded(d.target) || (r[l] = g));
									break;
								case "attributes":
									var y = d.target
										, E = this._watcher.isWatched(y);
									if (E && E != c.WatchKind.Watch && !i.isExcluded(y)) {
										u(y);
										break
									}
									var m = v(d.attributeNamespace) + (d.attributeName || "")
										, w = i.fixAttrName(m);
									if (y.hasAttribute(m)) {
										var S = d.target.getAttribute(m);
										d.oldValue != S && (S = this.rewriteAttr(d.target, w, S || ""),
											this._attrVisitor(d.target, w, S || ""),
										null !== S && (n[l + "\t" + w] = S))
									} else
										n[l + "\t" + w] = null;
							}
						} catch (e) {}
					for (var b = 0, T = this._toRefresh; b < T.length; b++) {
						var I = T[b];
						try {
							u(I)
						} catch (e) {
							f.FsBugSnag.sendToBugsnag(e, "error")
						}
					}
					for (var N in this._toRefresh = [],
						a) {
						var O = a[N]
							, R = i.mirrorFor(O);
						R && R.id && this.diff(e, t, O, R.child, O.firstChild)
					}
					for (var N in s) {
						O = s[N];
						this._resizer.nodeChanged(O)
					}
				}
				,
				e.prototype._checkForMissingInsertions = function(e) {
					if (!this._sentDomSnapshot || !e)
						return [];
					return this.walkAddRecords(this._root),
						[]
				}
				,
				e.prototype.walkAddRecords = function(e) {
					var t = this;
					i.fsid(e) ? s.forEachNextSibling(e.firstChild, function(e) {
						t.walkAddRecords(e)
					}) : this._records.push({
						addedNodes: [e],
						attributeName: null,
						attributeNamespace: null,
						nextSibling: e.nextSibling,
						oldValue: null,
						previousSibling: e.previousSibling,
						removedNodes: [],
						target: e.parentNode,
						type: "childList"
					})
				}
				,
				e.prototype.diff = function(e, t, n, r, o) {
					for (var a = [], u = r, c = o; u && c; ) {
						var h = i.mirrorFor(c);
						i.fsid(c) ? h && u.id == h.id ? (u = u.next,
							c = s.nextSibling(c)) : (a.push({
							remove: u
						}),
							u = u.next) : (a.push({
							insert: [n, c, u.node]
						}),
							c = s.nextSibling(c))
					}
					for (; u; u = u.next)
						a.push({
							remove: u
						});
					s.forEachNextSibling(c, function(e) {
						a.push({
							insert: [n, e, null]
						})
					});
					for (var d = !1, l = 0; l < a.length; l++) {
						var p = a[l];
						p.insert ? this.genInsert(e, t, p.insert[0], p.insert[1], p.insert[2]) : p.remove && (d = !0,
							this.genRemove(e, t, p.remove))
					}
					f.assert(!d, "All remove events should have been generated earlier, in MutationWatcher.processMutations")
				}
				,
				e.prototype.genShadow = function(e, t, n, r) {
					var o = i.fsid(n)
						, s = this.genDocStream(e, n, r, null);
					s.length > 0 && t.push({
						When: e,
						Kind: l.EVENT_MUT_SHADOW,
						Args: [o, this._compress ? this._lz.encode(s) : s]
					})
				}
				,
				e.prototype.genInsert = function(e, t, n, r, o) {
					var s = i.fsid(n) || -1
						, a = i.fsid(o) || -1
						, u = this.genDocStream(e, n, r, o);
					u.length > 0 && t.push({
						When: e,
						Kind: l.EVENT_MUT_INSERT,
						Args: [s, a, this._compress ? this._lz.encode(u) : u]
					})
				}
				,
				e.prototype.genDocStream = function(e, t, n, r) {
					var o = this;
					if (t && i.isExcluded(t))
						return [];
					for (var s = [], a = this._encoder.tokenizeNode(t, r, n, this._resizer, function(t) {
						if (t.nodeType == _.Node_ELEMENT_NODE) {
							var n = t;
							n.shadowRoot && o.observe(n.shadowRoot)
						}
						o._nodeVisitor(e, t, s)
					}, function(e, t, n) {
						o._attrVisitor(e, t, n)
					}), u = 0, c = s; u < c.length; u++) {
						(0,
							c[u])()
					}
					return a
				}
				,
				e.prototype.genRemove = function(e, t, n) {
					var r = n.id;
					if (this._beforeRemove(n),
						i.removeMirror(n, this._resizer),
					t.length > 0) {
						var o = t[t.length - 1];
						if (o.Kind == l.EVENT_MUT_REMOVE)
							return void o.Args.push(r)
					}
					t.push({
						When: e,
						Kind: l.EVENT_MUT_REMOVE,
						Args: [r]
					})
				}
				,
				e.prototype.rewriteAttr = function(e, t, n) {
					var r = i.scrubAttrValue(h.tagName(e), t, n, this._ctx.options.orgId);
					return null === r ? r : i.isExcluded(e) ? i.rewriteExcludedAttribute(e, t, r) : r
				}
				,
				e.prototype.setUpIEWorkarounds = function() {
					var t = this;
					if (d.uaIsIE11) {
						var n = Object.getOwnPropertyDescriptor(Node.prototype, "textContent")
							, i = n && n.set;
						if (!n || !i)
							throw new Error("Missing textContent setter -- not safe to record mutations.");
						Object.defineProperty(Element.prototype, "textContent", r({}, n, {
							set: function(e) {
								try {
									for (var t = void 0; t = this.firstChild; )
										this.removeChild(t);
									if (null === e || "" == e)
										return;
									var n = (this.ownerDocument || document).createTextNode(e);
									this.appendChild(n)
								} catch (e) {
									i && i.apply(this, arguments)
								}
							}
						}))
					}
					this._setPropertyThrottle = new u.Throttle(e.ThrottleMax,e.ThrottleInterval,function() {
							return new u.RealTimeout(function() {
									t._setPropertyWasThrottled = !0,
										t.tearDownIEWorkarounds()
								}
							).start()
						}
					);
					var o = this._setPropertyThrottle.guard(function(e) {
						e.cssText = e.cssText
					});
					this._setPropertyThrottle.open(),
						this._setPropertyHook = s.activateHook(CSSStyleDeclaration.prototype, "setProperty"),
					this._setPropertyHook && this._setPropertyHook.afterSync(function(e) {
						o(e.that)
					}),
						this._removePropertyHook = s.activateHook(CSSStyleDeclaration.prototype, "removeProperty"),
					this._removePropertyHook && this._removePropertyHook.afterSync(function(e) {
						o(e.that)
					})
				}
				,
				e.prototype.tearDownIEWorkarounds = function() {
					this._setPropertyThrottle && this._setPropertyThrottle.close(),
					this._setPropertyHook && this._setPropertyHook.disable(),
					this._removePropertyHook && this._removePropertyHook.disable()
				}
				,
				e.prototype.updateConsent = function() {
					for (var e = this._watcher.allConsentSensitiveElements(this._root), t = 0; t < e.length; t++)
						i.fsid(e[t]) && this._toRefresh.push(e[t])
				}
				,
				e.ThrottleMax = 1024,
				e.ThrottleInterval = 1e4,
				e
		}();
		function v(e) {
			return void 0 === e && (e = ""),
				null === e ? "" : {
					"http://www.w3.org/1999/xlink": "xlink:",
					"http://www.w3.org/XML/1998/namespace": "xml:",
					"http://www.w3.org/2000/xmlns/": "xmlns:"
				}[e] || ""
		}
		t.MutationWatcher = g
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			function e() {
				this.dict = {
					idx: -1,
					map: {}
				},
					this.nodeCount = 1,
					this.startIdx = 0
			}
			return e.prototype.encode = function(t) {
				if (0 == t.length)
					return [];
				var n, r, i = t[0], o = Object.prototype.hasOwnProperty.call(this.dict.map, i) ? this.dict.map[i] : null, s = [], a = 1;
				function u() {
					o ? a > 1 ? s.push([o.idx, a]) : s.push(o.idx) : s.push(i)
				}
				for (n = 1; n < t.length; n++)
					if (r = t[n],
					o && Object.prototype.hasOwnProperty.call(o.map, r))
						a++,
							i = r,
							o = o.map[r];
					else {
						u();
						var c = this.startIdx + n - a;
						null == o && this.nodeCount < e.MAX_NODES && (o = {
							idx: c,
							map: {}
						},
							this.dict.map[i] = o,
							this.nodeCount++),
						o && this.nodeCount < e.MAX_NODES && (o.map[r] = {
							idx: c,
							map: {}
						},
							this.nodeCount++),
							a = 1,
							i = r,
							o = Object.prototype.hasOwnProperty.call(this.dict.map, r) ? this.dict.map[r] : null
					}
				return u(),
					this.startIdx += t.length,
					s
			}
				,
				e.MAX_NODES = 1e4,
				e
		}();
		t.LZJGWEncoder = r;
		var i = function() {
			function e() {
				this._seq = []
			}
			return e.prototype.sequence = function() {
				return this._seq
			}
				,
				e.prototype.decode = function(e) {
					for (var t = this._seq.length, n = 0; n < e.length; ++n) {
						var r = e[n];
						switch (typeof r) {
							case "string":
								this._seq.push(r);
								break;
							case "number":
								this._seq.push(this._seq[r]);
								break;
							case "object":
								if (null == r) {
									this._seq.push("");
									break
								}
								for (var i = 0; i < r[1]; i++)
									this._seq.push(this._seq[r[0] + i]);
						}
					}
					return t
				}
				,
				e
		}();
		t.LZJGWDecoder = i
	}
	, function(e, t, n) {
		"use strict";
		var r, i = this && this.__extends || (r = function(e, t) {
				return (r = Object.setPrototypeOf || {
							__proto__: []
						}instanceof Array && function(e, t) {
							e.__proto__ = t
						}
						|| function(e, t) {
							for (var n in t)
								t.hasOwnProperty(n) && (e[n] = t[n])
						}
				)(e, t)
			}
				,
				function(e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
							new n)
				}
		);
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = n(3)
			, s = n(10)
			, a = n(17)
			, u = n(0)
			, c = n(12)
			, h = function() {
			function e() {
				this._watchedDims = {},
					this._nodes = {}
			}
			return e.create = function(e) {
				return d.isSupported(e.window) ? new d : new l
			}
				,
				e.prototype.collect = function(e) {
					var t = [];
					for (var n in this._nodes)
						this.addPlaceholderResize(e, t, this._nodes[n]);
					return this._nodes = {},
						t
				}
				,
				e.prototype.addNode = function(e) {
					if (e) {
						var t = s.fsid(e);
						t && (this._nodes[t] = e)
					}
				}
				,
				e.prototype.addPlaceholderResize = function(e, t, n) {
					try {
						if (n.nodeType != c.Node_ELEMENT_NODE)
							return;
						var r = n
							, i = s.watchKind(r)
							, u = r.getBoundingClientRect()
							, h = Math.round(u.width)
							, d = Math.round(u.height)
							, l = s.fsid(r)
							, f = this._watchedDims[l];
						if (f && f.w == h && f.h == d)
							return;
						if (i == a.WatchKind.Watch) {
							var p = !!f && 0 != f.w && 0 != f.h
								, _ = 0 != h && 0 != d;
							p != _ && t.push({
								When: e,
								Kind: o.EVENT_WATCHED_ELEM,
								Args: [l, _]
							})
						} else
							t.push({
								When: e,
								Kind: o.EVENT_PLACEHOLDER_SIZE,
								Args: [l, h, d]
							});
						this._watchedDims[l] = {
							w: h,
							h: d
						}
					} catch (e) {}
				}
				,
				e
		}();
		t.ResizeWatcher = h;
		var d = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t._obs = new ResizeObserver(function(e) {
						for (var n = 0, r = e; n < r.length; n++) {
							var i = r[n];
							t.addNode(i.target)
						}
					}
				),
					t
			}
			return i(t, e),
				t.isSupported = function(e) {
					return "ResizeObserver"in e
				}
				,
				t.prototype.observe = function(e) {
					this._obs.observe(e),
						this.addNode(e)
				}
				,
				t.prototype.unobserveSubtree = function(e) {}
				,
				t.prototype.nodeChanged = function(e) {}
				,
				t
		}(h)
			, l = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return i(t, e),
				t.prototype.observe = function(e) {
					this.growWatchedIndex(s.mirrorFor(e))
				}
				,
				t.prototype.unobserveSubtree = function(e) {
					var t = s.mirrorFor(e);
					t && this.clearWatchedIndex(t)
				}
				,
				t.prototype.nodeChanged = function(e) {
					for (var t = 0, n = this.relatedWatched(e); t < n.length; t++) {
						var r = n[t];
						this.addNode(r)
					}
				}
				,
				t.prototype.watchedChildren = function(e) {
					return e.watchedChildren
				}
				,
				t.prototype.growWatchedIndex = function(e) {
					if (e && s.isWatched(e.node))
						for (var t = e, n = e.parent; n; n = n.parent) {
							if (this.watchedChildren(n) || (n.watchedChildren = {}),
								this.watchedChildren(t))
								for (var r in this.watchedChildren(t))
									delete this.watchedChildren(n)[r];
							if (this.watchedChildren(n)[t.id] = t,
								u.hasNKeys(this.watchedChildren(n), 2))
								t = n;
							else if (u.hasMoreThanNKeys(this.watchedChildren(n), 2))
								break
						}
				}
				,
				t.prototype.relatedWatched = function(e) {
					var t = []
						, n = s.mirrorFor(e);
					if (n)
						for (var r = [n], i = 0; r.length && ++i < 1e3; ) {
							var o = r.pop();
							s.isWatched(o.node) && t.push(o.node),
							this.watchedChildren(o) && u.forIn(this.watchedChildren(o), function(e) {
								r.push(e)
							})
						}
					else {
						for (var a = e; a && !s.fsid(a); )
							a = a.parentNode;
						a && s.isWatched(a) && t.push(a)
					}
					return t
				}
				,
				t.prototype.clearWatchedIndex = function(e) {
					if (u.hasMoreThanNKeys(this.watchedChildren(e), 0) || s.isWatched(e.node))
						for (var t = this.watchedChildren(e) && u.hasMoreThanNKeys(this.watchedChildren(e), 1) || s.isWatched(e.node) ? e.id : u.firstKey(this.watchedChildren(e)), n = t ? e.parent : null; n && this.watchedChildren(n) && this.watchedChildren(n)[t]; ) {
							if (delete this.watchedChildren(n)[t],
								u.hasNKeys(this.watchedChildren(n), 1)) {
								var r = n.id
									, i = u.firstValue(this.watchedChildren(n));
								for (n = n.parent; n && this.watchedChildren(n) && this.watchedChildren(n)[r]; )
									delete this.watchedChildren(n)[r],
										this.watchedChildren(n)[i.id] = i,
										n = n.parent;
								break
							}
							n = n.parent
						}
				}
				,
				t
		}(h);
		t.GraphResizeWatcher = l
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			n(24);
		var r = n(3)
			, i = n(8)
			, o = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"]
			, s = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "unloadEventStart", "unloadEventEnd", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "type", "redirectCount", "decodedBodySize", "encodedBodySize", "transferSize"]
			, a = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "decodedBodySize", "encodedBodySize", "transferSize"]
			, u = ["name", "startTime", "duration"]
			, c = ["jsHeapSizeLimit", "totalJSHeapSize", "usedJSHeapSize"]
			, h = function() {
			function e(e, t, n) {
				this._ctx = e,
					this._queue = t,
					this._perfSupported = !1,
					this._timingSupported = !1,
					this._getEntriesSupported = !1,
					this._memorySupported = !1,
					this._lastUsedJSHeapSize = 0,
					this._gotLoad = !1,
					this._observer = null,
					this._observedBatches = [];
				var r = window.performance;
				r && (this._perfSupported = !0,
				r.timing && (this._timingSupported = !0),
				r.memory && (this._memorySupported = !0),
				"function" == typeof r.getEntries && (this._getEntriesSupported = !0),
					this._listeners = n.createChild())
			}
			return e.prototype.start = function(e) {
				var t = this;
				this._resourceUploader = e;
				var n = window.performance;
				n && (this._ctx.recording.inFrame || this._queue.enqueue(r.EVENT_REC_FEAT_SUPPORTED, [r.RecFeaturePerformance, this._timingSupported, r.RecFeaturePerformanceEntries, this._getEntriesSupported, r.RecFeaturePerformanceMemory, this._memorySupported, r.RecFeaturePerformanceObserver, !!window.PerformanceObserver]),
					this.observe(),
				!this._observer && n.addEventListener && n.removeEventListener && this._listeners.add(n, "resourcetimingbufferfull", !0, function() {
					t._queue.enqueue(r.EVENT_RESOURCE_TIMING_BUFFER_FULL, [])
				}),
					this.checkMemory())
			}
				,
				e.prototype.onLoad = function() {
					this._gotLoad || (this._gotLoad = !0,
					this._timingSupported && (this.recordTiming(performance.timing),
						this.checkForNewEntries()))
				}
				,
				e.prototype.tick = function(e) {
					this.checkMemory(),
					e && this.checkForNewEntries()
				}
				,
				e.prototype.shutdown = function() {
					this._listeners.clear(),
						this._resourceUploader = void 0;
					var e = [];
					this._observer ? (this._observer.takeRecords && (e = this._observer.takeRecords()),
						this._observer.disconnect()) : window.performance && window.performance.getEntries && (e = window.performance.getEntries()),
					e.length > 300 && (e = e.slice(0, 300),
						this._queue.enqueue(r.EVENT_RESOURCE_TIMING_BUFFER_FULL, [])),
						this._observedBatches.push(e),
						this.tick(!0)
				}
				,
				e.prototype.observe = function() {
					var e = this;
					if (!this._observer && this._getEntriesSupported && window.PerformanceObserver) {
						this._observedBatches.push(performance.getEntries()),
							this._observer = new window.PerformanceObserver(function(t) {
									var n = t.getEntries();
									e._observedBatches.push(n)
								}
							);
						var t = ["navigation", "resource", "measure", "mark"];
						window.PerformancePaintTiming && t.push("paint"),
							this._observer.observe({
								entryTypes: t
							})
					}
				}
				,
				e.prototype.checkMemory = function() {
					var e = performance.memory;
					if (this._memorySupported && e && !this._ctx.recording.inFrame) {
						var t = e.usedJSHeapSize - this._lastUsedJSHeapSize;
						(0 == this._lastUsedJSHeapSize || Math.abs(t / this._lastUsedJSHeapSize) > .2) && (this.addPerfEvent(r.PerfEntryMemory, e, c),
							this._lastUsedJSHeapSize = e.usedJSHeapSize)
					}
				}
				,
				e.prototype.recordEntry = function(e) {
					switch (e.entryType) {
						case "navigation":
							this.recordNavigation(e);
							break;
						case "resource":
							this.recordResource(e);
							break;
						case "paint":
							this.recordPaint(e);
							break;
						case "measure":
							this.recordMeasure(e);
							break;
						case "mark":
							this.recordMark(e);
					}
				}
				,
				e.prototype.checkForNewEntries = function() {
					if (this._perfSupported && this._getEntriesSupported) {
						var e = this._observedBatches;
						this._observedBatches = [];
						for (var t = 0, n = e; t < n.length; t++)
							for (var r = 0, i = n[t]; r < i.length; r++) {
								var o = i[r];
								this.recordEntry(o)
							}
					}
				}
				,
				e.prototype.recordTiming = function(e) {
					this.addPerfEvent(r.PerfEntryTiming, e, o)
				}
				,
				e.prototype.recordNavigation = function(e) {
					this.addPerfEvent(r.PerfEntryNavigation, e, s, {
						name: "navigation"
					})
				}
				,
				e.prototype.recordResource = function(e) {
					"3E938" != this._ctx.options.orgId && this.addPerfEvent(r.PerfEntryResource, e, a, {
						name: e.initiatorType
					})
				}
				,
				e.prototype.recordPaint = function(e) {
					this.addPerfEvent(r.PerfEntryPaint, e, u)
				}
				,
				e.prototype.recordMark = function(e) {
					this.addPerfEvent(r.PerfEntryMark, e, u)
				}
				,
				e.prototype.recordMeasure = function(e) {
					this.addPerfEvent(r.PerfEntryMeasure, e, u)
				}
				,
				e.prototype.addPerfEvent = function(e, t, n, o) {
					void 0 === o && (o = {});
					for (var s = [e], a = 0, u = n; a < u.length; a++) {
						var c = u[a]
							, h = t[c];
						if (void 0 === h && (h = -1),
						c in o) {
							var d = i.scrubUrl(h, this._ctx.options.orgId, {
								source: "perfEntry",
								type: o[c]
							});
							h === d && this.maybeUploadResource(e, t, d),
								h = d
						}
						s.push(h)
					}
					this._queue.enqueue(r.EVENT_PERF_ENTRY, s)
				}
				,
				e.prototype.maybeUploadResource = function(e, t, n) {
					this._resourceUploader && e === r.PerfEntryResource && "css" === t.initiatorType && this._resourceUploader.uploadIfNeeded(this._ctx.window, n)
				}
				,
				e
		}();
		t.PerfWatcher = h
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0)
			, i = n(1)
			, o = n(27)
			, s = n(8)
			, a = n(3)
			, u = n(49)
			, c = n(7)
			, h = n(4)
			, d = n(2)
			, l = "\r\n"
			, f = ["a-im", "accept", "accept-charset", "accept-encoding", "accept-language", "accept-datetime", "access-control-request-method,", "access-control-request-headers", "cache-control", "connection", "content-length", "content-md5", "content-type", "date", "expect", "forwarded", "from", "host", "if-match", "if-modified-since", "if-none-match", "if-range", "if-unmodified-since", "max-forwards", "origin", "pragma", "range", "referer", "te", "user-agent", "upgrade", "via", "warning"]
			, p = ["access-control-allow-origin", "access-control-allow-credentials", "access-control-expose-headers", "access-control-max-age", "access-control-allow-methods", "access-control-allow-headers", "accept-patch", "accept-ranges", "age", "allow", "alt-svc", "cache-control", "connection", "content-disposition", "content-encoding", "content-language", "content-length", "content-location", "content-md5", "content-range", "content-type", "date", "delta-base", "etag", "expires", "im", "last-modified", "link", "location", "permanent", "p3p", "pragma", "proxy-authenticate", "public-key-pins", "retry-after", "permanent", "server", "status", "strict-transport-security", "trailer", "transfer-encoding", "tk", "upgrade", "vary", "via", "warning", "www-authenticate", "x-frame-options"]
			, _ = {
			BM7A6: ["x-b3-traceid"]
		}
			, g = {
			"thefullstory.com": ["x-cloud-trace-context"],
			TN1: ["x-cloud-trace-context"]
		}
			, v = function() {
			function e(e, t) {
				this._ctx = e,
					this._queue = t,
					this._enabled = !1,
					this._reqHeaderWhitelist = {},
					this._rspHeaderWhitelist = {},
					this._pendingReqs = {},
					this._events = [],
					this._curId = 1,
					this.addHeaderWhitelist(f, p),
					this.addHeaderWhitelist(_[e.options.orgId], g[e.options.orgId])
			}
			return e.prototype.isEnabled = function() {
				return this._enabled
			}
				,
				e.prototype.enable = function() {
					this._enabled || (this._enabled = !0,
						this._queue.enqueue(a.EVENT_REC_FEAT_SUPPORTED, [a.RecFeatureAjax, !0]),
						this.maybeShimXHR(this._ctx.window))
				}
				,
				e.prototype.disable = function() {
					this._enabled && (this._enabled = !1,
					this._xhrOpenHook && (this._xhrOpenHook.disable(),
						this._xhrOpenHook = null),
					this._xhrSetHeaderHook && (this._xhrSetHeaderHook.disable(),
						this._xhrSetHeaderHook = null))
				}
				,
				e.prototype.setWatches = function(e) {
					var t = this
						, n = [];
					this._reqWhitelist = [],
						this._rspWhitelist = [],
						e.forEach(function(e) {
							n.push(e.URLRegex),
								t._reqWhitelist.push(k(e.RecordReq, e.ReqWhitelist)),
								t._rspWhitelist.push(k(e.RecordRsp, e.RspWhitelist))
						}),
						this._reqBodyRegex = new RegExp("(" + n.join(")|(") + ")")
				}
				,
				e.prototype.addHeaderWhitelist = function(e, t) {
					var n = this;
					e && e.forEach(function(e) {
						return n._reqHeaderWhitelist[e] = !0
					}),
					t && t.forEach(function(e) {
						return n._rspHeaderWhitelist[e] = !0
					})
				}
				,
				e.prototype.tick = function(e) {
					if (e) {
						for (var t = 0; t < this._events.length; t++)
							this._queue.enqueue(a.EVENT_AJAX_REQUEST, this._events[t]);
						this._events = []
					}
				}
				,
				e.prototype.maybeShimXHR = function(e) {
					var t = this
						, n = e.XMLHttpRequest;
					if (n) {
						var i = n.prototype;
						this._xhrOpenHook = r.activateHook(i, "open"),
						this._xhrOpenHook && this._xhrOpenHook.before(function(e) {
							var n = e.args[0]
								, r = e.args[1];
							t.addPendingReq(e.that, n, r),
								e.that.addEventListener("load", d.FsBugSnag.wrap(function(n) {
									t.onComplete(e.that)
								})),
								e.that.addEventListener("error", d.FsBugSnag.wrap(function(n) {
									t.onComplete(e.that)
								}))
						}),
							this._xhrSendHook = r.activateHook(i, "send"),
						this._xhrSendHook && this._xhrSendHook.before(function(e) {
							var n = e.args[0];
							t.maybeRecordReqBody(e.that, n)
						}),
							this._xhrSetHeaderHook = r.activateHook(i, "setRequestHeader"),
						this._xhrSetHeaderHook && this._xhrSetHeaderHook.before(function(e) {
							var n = e.args[0]
								, r = e.args[1];
							t.addHeader(e.that, n, r)
						})
					}
				}
				,
				e.prototype.pendingReq = function(e) {
					var t = R(e);
					return t ? this._pendingReqs[t] : (i.logIfDebug("missing xhr req id"),
						null)
				}
				,
				e.prototype.deletePending = function(e) {
					var t = R(e);
					t && delete this._pendingReqs[t]
				}
				,
				e.prototype.maybeRecordReqBody = function(e, t) {
					var n, r = this.pendingReq(e);
					r && (n = this.requestBody(r.url, t),
						r.reqSize = n[0],
						r.reqBody = n[1])
				}
				,
				e.prototype.addPendingReq = function(e, t, n) {
					this.deletePending(e);
					var r = this._curId++;
					n = s.resolveUrlToDocument(this._ctx.window, n),
						this._pendingReqs[r] = {
							id: r,
							xhr: e,
							method: t,
							url: n,
							startTime: Date.now(),
							headers: [],
							reqSize: 0,
							reqBody: void 0
						},
						function(e, t) {
							e._fs = t
						}(e, r)
				}
				,
				e.prototype.addHeader = function(e, t, n) {
					var r = this.pendingReq(e);
					r && r.headers.push([t, n])
				}
				,
				e.prototype.onComplete = function(e) {
					var t = this
						, n = this.pendingReq(e);
					if (n) {
						this.deletePending(e);
						var r = Date.now() - n.startTime
							, i = P(n.headers, function(e) {
							return e[0]in t._reqHeaderWhitelist
						})
							, o = P(A(e.getAllResponseHeaders()), function(e) {
							return e[0]in t._rspHeaderWhitelist
						})
							, u = this.responseBody(n.url, e)
							, c = u[0]
							, h = u[1]
							, d = [n.method, s.scrubUrl(n.url, this._ctx.options.orgId, {
							source: "event",
							type: a.EVENT_AJAX_REQUEST
						}), r, e.status, i, o, n.startTime, n.reqSize, c, n.reqBody ? n.reqBody : null, h || null];
						this._events.push(d)
					}
				}
				,
				e.prototype.findWhitelistIndexFor = function(e) {
					if (this._reqBodyRegex) {
						var t = this._reqBodyRegex.exec(e);
						if (t)
							for (var n = 1; n < t.length; n++)
								if (void 0 !== t[n])
									return n - 1
					}
					return -1
				}
				,
				e.prototype.requestBody = function(e, t) {
					if (null == t)
						return [0, void 0];
					var n = this.findWhitelistIndexFor(e)
						, r = n >= 0 && this._reqWhitelist[n]
						, i = typeof t;
					if ("string" == i)
						return y(t, r);
					if ("object" == i) {
						var o = i.constructor;
						switch (o) {
							case String:
							case Object:
							default:
								return E(t, r);
							case Blob:
								return w(t, r);
							case ArrayBuffer:
								return m(t, r);
							case Document:
							case FormData:
							case URLSearchParams:
							case ReadableStream:
								return [-1, r ? "" + o.name : void 0];
						}
					}
					return [-1, r ? "[unknown]" : void 0]
				}
				,
				e.prototype.responseBody = function(e, t) {
					var n = this.findWhitelistIndexFor(e)
						, r = n >= 0 && this._rspWhitelist[n];
					if (t.responseType) {
						var o = t.response;
						switch (o || i.logIfDebug("Maybe response type was different that expected."),
							t.responseType) {
							case "text":
								return S(t.responseText, r);
							case "json":
								return b(o, r);
							case "arraybuffer":
								return I(o, r);
							case "blob":
								return N(o, r);
							case "document":
								return T(o, r);
						}
					}
					return S(t.responseText, r)
				}
				,
				e
		}();
		function y(e, t) {
			return [e.length, C(e, t)]
		}
		function E(e, t) {
			var n = void 0;
			return !1 !== t && (n = u.whitelistedJson(e, c.MaxPayloadLength, t)),
				[O(e), n]
		}
		function m(e, t) {
			var n = void 0;
			return t && (n = "[ArrayBuffer]"),
				[e.byteLength, n]
		}
		function w(e, t) {
			var n = void 0;
			return t && (n = "[Blob]"),
				[e.size, n]
		}
		function S(e, t) {
			return e ? [e.length, C(e, t)] : [-1, void 0]
		}
		function b(e, t) {
			return e ? [O(e), u.whitelistedJson(e, c.MaxPayloadLength, t)] : [-1, void 0]
		}
		function T(e, t) {
			return [-1, t ? "[Document]" : void 0]
		}
		function I(e, t) {
			return [e ? e.byteLength : -1, t ? "[ArrayBuffer]" : void 0]
		}
		function N(e, t) {
			return [e ? e.size : -1, t ? "[Blob]" : void 0]
		}
		function O(e) {
			try {
				return h.windex.jsonStringify(e).length
			} catch (e) {}
			return 0
		}
		function R(e) {
			return e._fs
		}
		function C(e, t) {
			if (0 != t)
				try {
					return u.whitelistedJson(h.windex.jsonParse(e), c.MaxPayloadLength, t)
				} catch (n) {
					return 1 == t ? e.slice(0, c.MaxPayloadLength) : void 0
				}
		}
		function k(e, t) {
			switch (e) {
				default:
				case a.AjaxBodyElide:
					return !1;
				case a.AjaxBodyRecord:
					return !0;
				case a.AjaxBodyWhitelist:
					try {
						return o.parseFieldPatterns(t)
					} catch (e) {
						return i.logIfDebug("error parsing field whitelist (" + t + ": " + e),
							!1
					}
			}
		}
		function A(e) {
			var t = [];
			return e.split(l).forEach(function(e) {
				var n = e.indexOf(":");
				-1 != n ? t.push([e.slice(0, n).trim(), e.slice(n + 1, e.length).trim()]) : t.push([e.trim(), null])
			}),
				t
		}
		function P(e, t) {
			var n = "";
			return e.forEach(function(e) {
				e[0] = e[0].toLowerCase();
				var r = t(e);
				n += e[0] + (r ? ": " + e[1] : "") + l
			}),
				n
		}
		t.AjaxWatcher = v,
			t._reqBodyString = y,
			t._reqBodyObject = E,
			t._reqBodyArrayBuffer = m,
			t._reqBodyBlob = w,
			t._rspBodyText = S,
			t._rspBodyObject = b,
			t._rspBodyDocument = T,
			t._rspBodyArrayBuffer = I,
			t._rspBodyBlob = N,
			t.parseHeaders = A
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(27)
			, i = n(4)
			, o = r.parseFieldPatterns("**");
		t.whitelistedJson = function(e, t, n) {
			var r;
			if (n) {
				r = 1 == n ? o : n;
				try {
					var s = 0
						, a = [1]
						, u = []
						, c = {};
					return c[r.id] = r,
						u.push(c),
						i.windex.jsonStringify(e, function(e, n) {
							var r = n && "object" == typeof n;
							if ("" == e && 1 == a.length)
								return a[0]--,
								r && a.push(i.windex.objectKeys(n).length),
									n;
							var o = {}
								, c = u[u.length - 1]
								, h = !0
								, d = !1
								, l = function(e) {
								o[e.id] = e,
									h = !1,
								e.term && (d = !0)
							};
							for (var f in c) {
								var p = c[f];
								e in p.edges && l(p.edges[e]),
								"*"in p.edges && l(p.edges["*"]),
								p.loop && l(p)
							}
							for ((h || !r && !d) && (n = null),
									 s += e.length + 2,
								 (s += r ? 2 : null === n ? 4 : n.toString().length) >= t && (n = void 0),
									 a[a.length - 1]--,
								 n && r && (a.push(i.windex.objectKeys(n).length),
									 u.push(o)); a[a.length - 1] <= 0; )
								a.pop(),
									u.pop();
							return n
						})
				} catch (e) {}
				return "[error serializing " + e.constructor.name + "]"
			}
		}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, i = n(0), o = n(1), s = n(5), a = n(3), u = n(10), c = n(26), h = n(28), d = n(11), l = n(2), f = n(51), p = n(28), _ = function() {
			function e(t, n) {
				var r = this;
				this.ctx = t,
					this.queue = n,
					this.hooks = [],
					this.removeDisabledPropShim = function() {}
				;
				var i = e;
				this.throttle = new s.Throttle(i.ThrottleMax,i.ThrottleInterval,function() {
						return setTimeout(function() {
							r.queue.enqueue(a.EVENT_FAIL_THROTTLED, [a.ThrottledStyleSheetHooks]),
								r.stop()
						})
					}
				),
					this.addInsert = this.throttle.guard(this.addInsert),
					this.addDelete = this.throttle.guard(this.addDelete)
			}
			return e.prototype.start = function() {
				var e = this;
				this.throttle.open();
				var t = this.ctx.window;
				if (t.CSSStyleSheet && t.StyleSheet) {
					var n, r = t.CSSStyleSheet.prototype;
					(n = i.activateHook(r, "insertRule")) && (n.afterSync(function(t) {
						e.addInsert(t.that, t.args[0], t.args[1])
					}),
						this.hooks.push(n)),
					(n = i.activateHook(r, "deleteRule")) && (n.afterSync(function(t) {
						e.addDelete(t.that, t.args[0])
					}),
						this.hooks.push(n)),
						this.removeDisabledPropShim = i.shimProp(t.StyleSheet, "disabled", function(t, n) {
							return e.onDisableSheet(t, n)
						})
				}
			}
				,
				e.prototype.snapshot = function(e, t) {
					void 0 === t && (t = 0);
					var n = u.fsid(e);
					if (n) {
						var i = h.elemSheet(e);
						if (i) {
							var o = h.sheetRules(i);
							if (o)
								for (var s = function(e) {
									var t;
									try {
										t = r(o[e])
									} catch (e) {
										t = "html {}"
									}
									f.withEventQueueFor(c.ctx, i.ownerNode, function(r) {
										return r.enqueue(a.EVENT_CSSRULE_INSERT, [n, t, e])
									})
								}, c = this, d = t; d < o.length; d++)
									s(d)
						}
					}
				}
				,
				e.prototype.addInsert = function(t, n, r) {
					var i = u.fsid(t.ownerNode);
					if (i && "string" == typeof n) {
						n.length > e.MaxRuleBytes && (o.logIfDebug("CSSRule too large, inserting dummy instead: " + n.length),
							n = "dummy {}");
						var s = [i, n];
						"number" == typeof r && s.push(r),
							f.withEventQueueFor(this.ctx, t.ownerNode, function(e) {
								return e.enqueue(a.EVENT_CSSRULE_INSERT, s)
							})
					}
				}
				,
				e.prototype.addDelete = function(e, t) {
					var n = u.fsid(e.ownerNode);
					n && "number" == typeof t && f.withEventQueueFor(this.ctx, e.ownerNode, function(e) {
						return e.enqueue(a.EVENT_CSSRULE_DELETE, [n, t])
					})
				}
				,
				e.prototype.onDisableSheet = function(e, t) {
					var n = u.fsid(e.ownerNode);
					n && f.withEventQueueFor(this.ctx, e.ownerNode, function(e) {
						return e.enqueue(a.EVENT_DISABLE_STYLESHEET, [n, !!t])
					})
				}
				,
				e.prototype.stop = function() {
					this.throttle.close();
					for (var e = 0, t = this.hooks; e < t.length; e++) {
						t[e].disable()
					}
					this.hooks = [],
						this.removeDisabledPropShim()
				}
				,
				e.ThrottleMax = 1e4,
				e.ThrottleInterval = 1e4,
				e.MaxRuleBytes = 16384,
				e
		}();
		t.StyleSheetWatcher = _;
		var g = document.createElement("div");
		function v(e, t) {
			if (void 0 === t && (t = 0),
				!l.assert(t <= 20, "No deep recursion for CSS rules"))
				return "html { /* Depth limit exceeded! */ }";
			var n = function(e) {
				switch (e.type) {
					case CSSRule.PAGE_RULE:
						var t = e.selectorText || "";
						return t && i.hasPrefix(t, "@page") ? t : "@page " + t;
					case CSSRule.KEYFRAME_RULE:
						return e.keyText;
					case CSSRule.STYLE_RULE:
						return e.selectorText;
					case CSSRule.MEDIA_RULE:
						return "@media " + e.media.mediaText;
					case CSSRule.KEYFRAMES_RULE:
						return "@keyframes " + e.name;
					case CSSRule.SUPPORTS_RULE:
						return "@supports " + e.conditionText;
					default:
						return null;
				}
			}(e);
			if (null == n)
				return e.cssText;
			var r = function(e, t) {
				var n = e
					, r = n.style;
				if (r) {
					for (var i = "", o = 0; o < r.length; o++) {
						var s = r[o]
							, a = p.getCssPropertyValue(r, s);
						i += s + ": " + a,
						"important" === r.getPropertyPriority(s) && (i += " !important"),
							i += "; "
					}
					return i
				}
				var u = n.cssRules;
				if (!u)
					return null;
				for (var c = "", o = 0; o < u.length; o++)
					c += v(u[o], t + 1);
				return c
			}(e, t);
			return null == r ? e.cssText : n + " { " + r + "} "
		}
		g.style.width = "initial",
			r = "" != g.style.cssText ? function(e) {
					return e.cssText
				}
				: v,
			t._jsCssText = v;
		var y = /^\s*$/;
		t.getDynamicRuleTail = function(e) {
			var t = e.textContent || "";
			if (!(t.length > 5e5)) {
				var n = h.sheetRules(h.elemSheet(e));
				if (n) {
					if (n.length > 0 && y.test(t))
						return 0;
					var r, i = c.theDummyDoc();
					d.uaIsIE ? (r = i.createElement("style")).textContent = e.textContent : r = i.importNode(e, !0),
						i.head.appendChild(r);
					var o = h.sheetRules(h.elemSheet(r));
					if (i.head.removeChild(r),
						o)
						return n.length > o.length ? o.length : void 0
				}
			}
		}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(14)
			, i = n(2)
			, o = "EventQueue not defined for 'withEventQueueFor', likely caused by holding ref to callback";
		t.withEventQueueFor = function(e, t, n) {
			var a = s(t) || e.window
				, u = a[r.Namespace(a)];
			u && "function" == typeof u._withEventQueue && u._withEventQueue(e.recording.pageSignature(), function(e) {
				n({
					enqueue: function(t, n) {
						i.assert(null != e, o) && e.enqueue(t, n)
					},
					enqueueFirst: function(t, n) {
						i.assert(null != e, o) && e.enqueueFirst(t, n)
					}
				}),
					e = null
			})
		}
		;
		var s = function(e) {
			var t = e.ownerDocument;
			return t && t.defaultView
		}
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(10)
			, i = n(3)
			, o = n(2)
			, s = n(11)
			, a = function() {
			function e(e, t, n) {
				this._ctx = e,
					this._q = t,
					this._listeners = n.createChild()
			}
			return e.prototype.start = function() {
				var e = this
					, t = this._ctx.window.document;
				this._listeners.addCustom(t, this.getFullscreenChangeEvent(), !0, function(t) {
					e.onFullscreenChange(t)
				}),
					this._listeners.addCustom(t, this.getFullscreenErrorEvent(), !0, function(t) {
						e.onFullscreenError(t)
					})
			}
				,
				e.prototype.stop = function() {
					this._listeners.clear()
				}
				,
				e.prototype.onFullscreenChange = function(e) {
					var t = this.getFullscreenElement();
					if (t) {
						var n = r.fsid(t);
						o.assert(null == this._previousFullscreenFSID, "Error: Received fullscreen signal but we think we are already in fullscreen?"),
							this._q.enqueue(i.EVENT_FULLSCREEN, [n, !0]),
							this._previousFullscreenFSID = n
					} else
						o.assert(null != this._previousFullscreenFSID, "Error: Received fullscreen exit signal but have no previous fullscreen event?"),
							this._q.enqueue(i.EVENT_FULLSCREEN, [this._previousFullscreenFSID, !1]),
							this._previousFullscreenFSID = void 0
				}
				,
				e.prototype.onFullscreenError = function(e) {
					this._q.enqueue(i.EVENT_FULLSCREEN_ERROR, [])
				}
				,
				e.prototype.getFullscreenElement = function() {
					var e = this._ctx.window.document;
					return e[s.uaPrefixedPropety(e, "fullscreenElement")]
				}
				,
				e.prototype.getFullscreenChangeEvent = function() {
					var e = this._ctx.window.document;
					return s.uaPrefixedPropety(e, "onfullscreenchange").slice(2)
				}
				,
				e.prototype.getFullscreenErrorEvent = function() {
					var e = this._ctx.window.document;
					return s.uaPrefixedPropety(e, "onfullscreenerror").slice(2)
				}
				,
				e
		}();
		t["default"] = a
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = /^\s*at .*(\S+\:\d+|native|(<anonymous>))/m
			, i = /^(eval@)?(\[native code\])?$/;
		function o(e) {
			if (!e || "string" != typeof e.stack)
				return [];
			var t = e;
			return t.stack.match(r) ? t.stack.split("\n").filter(function(e) {
				return !!e.match(r)
			}).map(function(e) {
				e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
				var t = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/\(native code\)/, "").split(/\s+/).slice(1)
					, n = a(t.pop())
					, r = t.join(" ")
					, i = ["eval", "<anonymous>"].indexOf(n[0]) > -1 ? "" : n[0];
				return s(r, i, n[1], n[2])
			}) : function(e) {
				return e.split("\n").filter(function(e) {
					return !e.match(i)
				}).map(function(e) {
					if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")),
					-1 === e.indexOf("@") && -1 === e.indexOf(":"))
						return [e, "", -1, -1];
					var t = e.split("@")
						, n = a(t.pop())
						, r = t.join("@");
					return s(r, n[0], n[1], n[2])
				})
			}(t.stack)
		}
		function s(e, t, n, r) {
			return [e || "", t || "", parseInt(n || "-1"), parseInt(r || "-1")]
		}
		function a(e) {
			if (!e || -1 === e.indexOf(":"))
				return ["", "", ""];
			var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
			return t ? [t[1] || "", t[2] || "", t[3] || ""] : ["", "", ""]
		}
		t.genStackTrace = function() {
			try {
				throw new Error
			} catch (e) {
				return o(e).slice(1)
			}
		}
			,
			t.stackTraceFromError = o
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(55)
			, i = n(3)
			, o = n(5)
			, s = n(7)
			, a = function() {
			function e(e, t, n, i) {
				void 0 === n && (n = function() {
						return []
					}
				),
				void 0 === i && (i = o.RealTicker),
					this._ctx = e,
					this._transport = t,
					this._gatherExternalEvents = n,
					this._tickerFactory = i,
					this._recordingDisabled = !1,
					this._lastWhen = -1,
					this._gotUnload = !1,
					this._eventQueue = [],
					this._sampleCurvesTicker = new this._tickerFactory(s.CurveSamplingInterval),
					this._processMutationsTicker = new this._tickerFactory(s.MutationProcessingInterval),
					this._processor = new r.EventProcessor(e)
			}
			return e.prototype.startPipeline = function(e, t, n, r) {
				var i = this;
				void 0 === n && (n = 0),
				void 0 === r && (r = []),
				this._recordingDisabled || this._pipelineStarted || (this._pipelineStarted = !0,
					this._frameId = n,
					this._parentIds = r,
					this.processEvents(),
					this._processMutationsTicker.start(function() {
						i.processEvents()
					}),
					this._sampleCurvesTicker.start(function() {
						i.processEvents(!0)
					}),
					this._transport.startPipeline(e, t))
			}
				,
				e.prototype.enqueue = function(e, t) {
					this.enqueueAt(this._ctx.time.now(), e, t),
						o.Scheduler.checkForBrokenSchedulers()
				}
				,
				e.prototype.enqueueAt = function(e, t, n) {
					this._recordingDisabled || (e <= this._lastWhen && (e = this._lastWhen + 1),
						this._lastWhen = e,
						this._eventQueue.push({
							When: e,
							Kind: t,
							Args: n
						}))
				}
				,
				e.prototype.enqueueFirst = function(e, t) {
					this._eventQueue.length > 0 ? this._eventQueue.unshift({
						When: this._eventQueue[0].When,
						Kind: e,
						Args: t
					}) : this.enqueue(e, t)
				}
				,
				e.prototype.addUnload = function(e) {
					this._gotUnload || (this._gotUnload = !0,
						this.enqueue(i.EVENT_UNLOAD, [e]),
						this.singSwanSong())
				}
				,
				e.prototype.shutdown = function(e) {
					this._flush(),
						this.addUnload(e),
						this._flush(),
						this._recordingDisabled = !0,
						this.stopPipeline()
				}
				,
				e.prototype._flush = function() {
					this.processEvents(),
						this._transport.flush()
				}
				,
				e.prototype.singSwanSong = function() {
					this._recordingDisabled || (this.processEvents(),
						this._transport.singSwanSong())
				}
				,
				e.prototype.rebaseIframe = function(e) {
					for (var t = 0, n = this._eventQueue.length; t < n; t++) {
						var r = this._eventQueue[t]
							, i = r.When + this._ctx.time.startTime() - e;
						i < 0 && (i = 0),
							r.When = i
					}
				}
				,
				e.prototype.processEvents = function(e) {
					if (this._pipelineStarted) {
						var t = this._eventQueue;
						this._eventQueue = [];
						var n = this._processor.processQueue(t);
						e || (n = n.concat(this._gatherExternalEvents(0 != n.length))),
							this.ensureFrameIds(n),
						0 != n.length && this._transport.enqueueEvents(this._ctx.recording.pageSignature(), n)
					}
				}
				,
				e.prototype.ensureFrameIds = function(e) {
					if (this._frameId)
						for (var t = this._parentIds, n = t && t.length > 0, r = 0; r < e.length; ++r) {
							var i = e[r];
							i.FId || (i.FId = this._frameId),
							n && !i.PIds && (i.PIds = t)
						}
				}
				,
				e.prototype.stopPipeline = function() {
					this._pipelineStarted && (this._sampleCurvesTicker.stop(),
						this._processMutationsTicker.stop(),
						this._eventQueue = [],
						this._transport.stopPipeline())
				}
				,
				e
		}();
		t.EventQueue = a
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(3)
			, i = function() {
			function e(e, t) {
				this._q = e,
					this._valueIndices = t,
					this._evts = []
			}
			return e.prototype.add = function(e) {
				0 == this._evts.length && this._q.push(e),
					this._evts.push(e)
			}
				,
				e.prototype.finish = function(e, t) {
					var n = this._evts.length;
					if (n <= 1)
						return !1;
					for (var r = this._evts[0].When, i = this._evts[n - 1].When, o = 0; o < this._valueIndices.length; ++o) {
						var s = this._valueIndices[o]
							, a = this._evts[0].Args[s]
							, u = (this._evts[1].When - r) / (i - r)
							, c = (this._evts[1].Args[s] - a) / u
							, h = this._evts[n - 1].Args[s]
							, d = (u = (i - this._evts[n - 2].When) / (i - r),
						(h - this._evts[n - 2].Args[s]) / u);
						t.push(a, h, c, d)
					}
					return this._evts[0].Kind = e,
						this._evts[0].Args = t,
						!0
				}
				,
				e.prototype.evts = function() {
					return this._evts
				}
				,
				e
		}()
			, o = function() {
			function e(e) {
				this._ctx = e
			}
			return e.prototype.processQueue = function(e) {
				if (0 == e.length)
					return e;
				for (var t, n = this._ctx.time.now(), o = [], s = new i(o,[0, 1]), a = {}, u = {}, c = {}, h = 0; h < e.length; ++h) {
					var d = e[h];
					switch (d.Kind) {
						case r.EVENT_MOUSEMOVE:
							s.add(d);
							break;
						case r.EVENT_TOUCHMOVE:
							(l = d.Args[0])in a || (a[l] = new i(o,[1, 2])),
								a[l].add(d);
							break;
						case r.EVENT_SCROLL_LAYOUT:
							(l = d.Args[0])in u || (u[l] = new i(o,[1, 2])),
								u[l].add(d);
							break;
						case r.EVENT_SCROLL_VISUAL_OFFSET:
							var l;
							(l = d.Args[0])in c || (c[l] = new i(o,[1, 2])),
								c[l].add(d);
							break;
						case r.EVENT_RESIZE_VISUAL:
							t || (t = new i(o,[0, 1])),
								t.add(d);
							break;
						default:
							o.push(d);
					}
				}
				if (s.finish(r.EVENT_MOUSEMOVE_CURVE, [n])) {
					var f = s.evts()
						, p = f[f.length - 1].Args;
					p.length > 2 && p[2] && f[0].Args.push(p[2])
				}
				for (l in u) {
					u[_ = parseInt(l)].finish(r.EVENT_SCROLL_LAYOUT_CURVE, [n, _])
				}
				for (l in c) {
					c[_ = parseInt(l)].finish(r.EVENT_SCROLL_VISUAL_OFFSET_CURVE, [n, _])
				}
				for (l in a) {
					var _;
					a[_ = parseInt(l)].finish(r.EVENT_TOUCHMOVE_CURVE, [n, _])
				}
				return t && t.finish(r.EVENT_RESIZE_VISUAL_CURVE, [n]),
					o
			}
				,
				e
		}();
		t.EventProcessor = o
	}
	, function(e, t, n) {
		"use strict";
		var r = this && this.__awaiter || function(e, t, n, r) {
				return new (n || (n = Promise))(function(i, o) {
						function s(e) {
							try {
								u(r.next(e))
							} catch (e) {
								o(e)
							}
						}
						function a(e) {
							try {
								u(r["throw"](e))
							} catch (e) {
								o(e)
							}
						}
						function u(e) {
							e.done ? i(e.value) : new n(function(t) {
									t(e.value)
								}
							).then(s, a)
						}
						u((r = r.apply(e, t || [])).next())
					}
				)
			}
			, i = this && this.__generator || function(e, t) {
				var n, r, i, o, s = {
					label: 0,
					sent: function() {
						if (1 & i[0])
							throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return o = {
					next: a(0),
					"throw": a(1),
					"return": a(2)
				},
				"function" == typeof Symbol && (o[Symbol.iterator] = function() {
						return this
					}
				),
					o;
				function a(o) {
					return function(a) {
						return function(o) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; s; )
								try {
									if (n = 1,
									r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r),
										0) : r.next) && !(i = i.call(r, o[1])).done)
										return i;
									switch (r = 0,
									i && (o = [2 & o[0], i.value]),
										o[0]) {
										case 0:
										case 1:
											i = o;
											break;
										case 4:
											return s.label++,
												{
													value: o[1],
													done: !1
												};
										case 5:
											s.label++,
												r = o[1],
												o = [0];
											continue;
										case 7:
											o = s.ops.pop(),
												s.trys.pop();
											continue;
										default:
											if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
												s = 0;
												continue
											}
											if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
												s.label = o[1];
												break
											}
											if (6 === o[0] && s.label < i[1]) {
												s.label = i[1],
													i = o;
												break
											}
											if (i && s.label < i[2]) {
												s.label = i[2],
													s.ops.push(o);
												break
											}
											i[2] && s.ops.pop(),
												s.trys.pop();
											continue;
									}
									o = t.call(e, s)
								} catch (e) {
									o = [6, e],
										r = 0
								} finally {
									n = i = 0
								}
							if (5 & o[0])
								throw o[1];
							return {
								value: o[0] ? o[1] : void 0,
								done: !0
							}
						}([o, a])
					}
				}
			}
		;
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = n(5)
			, s = n(8)
			, a = n(0)
			, u = n(57)
			, c = n(1)
			, h = n(2)
			, d = n(3)
			, l = n(6)
			, f = n(58)
			, p = 6e6
			, _ = function() {
			function e(e, t, n, r, i) {
				void 0 === r && (r = window.FormData),
				void 0 === i && (i = o.RealTimeout),
					this.ctx = e,
					this.queue = t,
					this.protocol = n,
					this.FormDataCtr = r,
					this.Timeout = i,
					this.started = {},
					this.byUrl = {},
					this.batchReady = !1,
					this.existsBatch = []
			}
			return e.prototype.init = function() {
				this.FormDataCtr && this.main()["catch"](function(e) {
					h.FsBugSnag.sendToBugsnag(e, "error")
				})
			}
				,
				e.prototype.main = function() {
					return r(this, void 0, l.FSPromise, function() {
						var e, t, n, o, s, u, d, f, p, _, g = this;
						return i(this, function(v) {
							switch (v.label) {
								case 0:
									return [4, this.getBatch()];
								case 1:
									for (e = v.sent(),
											 t = {
												 fsnv: a.map(e, function(e) {
													 return e.hash
												 })
											 },
											 n = {},
											 o = 0,
											 s = e; o < s.length; o++)
										u = s[o],
											n[u.hash] = u;
									d = this.ctx.options.orgId,
										v.label = 2;
								case 2:
									return v.trys.push([2, 4, , 5]),
										[4, this.protocol.newResources(d, t)];
								case 3:
									return f = v.sent(),
										[3, 5];
								case 4:
									return p = v.sent(),
										c.logIfDebug("/rec/newResources failed with status " + p),
										[3, 0];
								case 5:
									try {
										_ = JSON.parse(f)
									} catch (e) {
										return h.FsBugSnag.sendToBugsnag("Error parsing /rec/newResources response", "error"),
											[3, 0]
									}
									return [4, a.forInAsync(_, function(e, t) {
										return r(g, void 0, l.FSPromise, function() {
											var r, o, s, a, u, l, f, p, _;
											return i(this, function(i) {
												switch (i.label) {
													case 0:
														if ("fsnv" != t)
															return [2];
														r = 0,
															o = e,
															i.label = 1;
													case 1:
														if (!(r < o.length))
															return [3, 6];
														if (s = o[r],
														null == (a = n[s]))
															return h.FsBugSnag.sendToBugsnag("Server told us to upload a hash we don't have", "error"),
																[3, 5];
														if (u = a.url,
															l = a.contentType,
															!(f = a.blob || a.stringData))
															return h.FsBugSnag.sendToBugsnag("Missing resource contents", "error"),
																[3, 5];
														if (p = a.blob || new Blob([f],{
															type: l
														}),
														null == f)
															return h.FsBugSnag.sendToBugsnag("Tried to re-upload a resource", "error"),
																[3, 5];
														(_ = new this.FormDataCtr).append("orgId", d),
															_.append("baseUrl", u),
															_.append("fsnvHash", s),
															_.append("contents", p, "blob"),
															a.blob = a.stringData = null,
															i.label = 2;
													case 2:
														return i.trys.push([2, 4, , 5]),
															[4, this.protocol.uploadResource(_)];
													case 3:
														return i.sent(),
															[3, 5];
													case 4:
														return i.sent(),
															c.logIfDebug("Server error uploading resource"),
															[3, 5];
													case 5:
														return r++,
															[3, 1];
													case 6:
														return [2];
												}
											})
										})
									})];
								case 6:
									return v.sent(),
										[3, 0];
								case 7:
									return [2];
							}
						})
					})
				}
				,
				e.prototype.getBatch = function() {
					var e = this
						, t = u.createFSPromise()
						, n = t.resolve
						, r = t.promise
						, i = function() {
						e.popBatch = null,
							e.batchReady = !1;
						var t = e.existsBatch;
						e.existsBatch = [],
							n(t)
					};
					return this.batchReady ? i() : this.popBatch = i,
						r
				}
				,
				e.prototype.uploadIfNeeded = function(e, t) {
					return r(this, void 0, l.FSPromise, function() {
						var n, r, o = this;
						return i(this, function(i) {
							switch (i.label) {
								case 0:
									return this.FormDataCtr ? this.started[t] ? [2] : g(e, t) ? (this.started[t] = !0,
										[4, this.processResource(t)]) : [2] : [2];
								case 1:
									return (n = i.sent()) ? (r = 0 == this.existsBatch.length,
										this.existsBatch.push(n),
									r && new this.Timeout(function() {
											o.batchReady = !0,
											o.popBatch && o.popBatch()
										}
										,50).start(),
										[2]) : [2];
							}
						})
					})
				}
				,
				e.prototype.processResource = function(e) {
					return r(this, void 0, l.FSPromise, function() {
						var t, n, r;
						return i(this, function(i) {
							switch (i.label) {
								case 0:
									return this.byUrl[e] ? [2, this.byUrl[e]] : [4, function(e, t) {
										var n = u.createFSPromise()
											, r = n.resolve
											, i = n.promise
											, o = new XMLHttpRequest;
										if ("string" != typeof o.responseType)
											return r(null),
												i;
										return o.open("GET", e),
											o.responseType = "blob",
											o.onerror = function() {
												r(null)
											}
											,
											o.onload = function() {
												if (200 != o.status)
													return c.logIfDebug("Error loading blob resource " + s.scrubUrl(e, t, {
														source: "log",
														type: "debug"
													})),
														void r(null);
												var n = o.response;
												if ((n.size || n.length) > p)
													return h.FsBugSnag.sendToBugsnag("Size of blob resource " + s.scrubUrl(e, t, {
														source: "log",
														type: "bugsnag"
													}) + " exceeds limit of " + p, "warning"),
														void r(null);
												(function(e) {
														var t = u.createFSPromise()
															, n = t.resolve
															, r = t.promise
															, i = new FileReader;
														return i.readAsArrayBuffer(e),
															i.onload = function() {
																n(i.result)
															}
															,
															i.onerror = function(e) {
																h.FsBugSnag.sendToBugsnag(e, "error"),
																	n(null)
															}
															,
															r
													}
												)(n).then(function(e) {
													r(e ? {
														buffer: e,
														blob: n,
														contentType: n.type
													} : null)
												})
											}
											,
											o.send(),
											i
									}(e, this.ctx.options.orgId)];
								case 1:
									return (t = i.sent()) ? [4, f.hash128NonBlocking(this.ctx.time, t.buffer)] : [2, null];
								case 2:
									return n = i.sent().hash,
										r = {
											hash: n,
											url: e,
											blob: t.blob,
											contentType: t.contentType
										},
										this.byUrl[r.url] = r,
										this.queue.enqueue(d.EVENT_SYS_RESOURCEHASH, ["url", e, r.hash]),
										[2, r];
							}
						})
					})
				}
				,
				e
		}();
		function g(e, t) {
			var n = s.parseUrl(s.baseUri(e), t);
			switch (n.protocol) {
				case "blob:":
					return !0;
				case "http:":
				case "https:":
					switch (n.hostname) {
						case "localhost":
						case "127.0.0.1":
						case "[::1]":
							return e.location.protocol === n.protocol && e.location.host === n.host;
						default:
							return !1;
					}
				default:
					return !1;
			}
		}
		t.ResourceUploader = _,
			t.shouldUpload = g
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(6);
		t.createFSPromise = function() {
			var e, t;
			return {
				promise: new r.FSPromise(function(n, r) {
						e = n,
							t = r
					}
				),
				resolve: e,
				reject: t
			}
		}
	}
	, function(e, t, n) {
		"use strict";
		var r = this && this.__awaiter || function(e, t, n, r) {
				return new (n || (n = Promise))(function(i, o) {
						function s(e) {
							try {
								u(r.next(e))
							} catch (e) {
								o(e)
							}
						}
						function a(e) {
							try {
								u(r["throw"](e))
							} catch (e) {
								o(e)
							}
						}
						function u(e) {
							e.done ? i(e.value) : new n(function(t) {
									t(e.value)
								}
							).then(s, a)
						}
						u((r = r.apply(e, t || [])).next())
					}
				)
			}
			, i = this && this.__generator || function(e, t) {
				var n, r, i, o, s = {
					label: 0,
					sent: function() {
						if (1 & i[0])
							throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return o = {
					next: a(0),
					"throw": a(1),
					"return": a(2)
				},
				"function" == typeof Symbol && (o[Symbol.iterator] = function() {
						return this
					}
				),
					o;
				function a(o) {
					return function(a) {
						return function(o) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; s; )
								try {
									if (n = 1,
									r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r),
										0) : r.next) && !(i = i.call(r, o[1])).done)
										return i;
									switch (r = 0,
									i && (o = [2 & o[0], i.value]),
										o[0]) {
										case 0:
										case 1:
											i = o;
											break;
										case 4:
											return s.label++,
												{
													value: o[1],
													done: !1
												};
										case 5:
											s.label++,
												r = o[1],
												o = [0];
											continue;
										case 7:
											o = s.ops.pop(),
												s.trys.pop();
											continue;
										default:
											if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
												s = 0;
												continue
											}
											if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
												s.label = o[1];
												break
											}
											if (6 === o[0] && s.label < i[1]) {
												s.label = i[1],
													i = o;
												break
											}
											if (i && s.label < i[2]) {
												s.label = i[2],
													s.ops.push(o);
												break
											}
											i[2] && s.ops.pop(),
												s.trys.pop();
											continue;
									}
									o = t.call(e, s)
								} catch (e) {
									o = [6, e],
										r = 0
								} finally {
									n = i = 0
								}
							if (5 & o[0])
								throw o[1];
							return {
								value: o[0] ? o[1] : void 0,
								done: !0
							}
						}([o, a])
					}
				}
			}
		;
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = n(22)
			, s = n(6)
			, a = n(30)
			, u = 1e4
			, c = 25
			, h = 100;
		t.hash128NonBlocking = function(e, t, n) {
			return void 0 === n && (n = new o._FSNV),
				r(this, void 0, s.FSPromise, function() {
					var r, o, s, d;
					return i(this, function(i) {
						switch (i.label) {
							case 0:
								r = e.now(),
									o = t.byteLength,
									s = 0,
									i.label = 1;
							case 1:
								return s < o ? e.now() - r > c ? [4, a.wait(h)] : [3, 3] : [3, 5];
							case 2:
								i.sent(),
									r = e.now(),
									i.label = 3;
							case 3:
								d = new Uint8Array(t,s,Math.min(o - s, u)),
									n.write(d),
									i.label = 4;
							case 4:
								return s += u,
									[3, 1];
							case 5:
								return [2, {
									hash: n.sum(),
									hasher: n
								}];
						}
					})
				})
		}
	}
	, function(e, t, n) {
		"use strict";
		var r, i = this && this.__extends || (r = function(e, t) {
				return (r = Object.setPrototypeOf || {
							__proto__: []
						}instanceof Array && function(e, t) {
							e.__proto__ = t
						}
						|| function(e, t) {
							for (var n in t)
								t.hasOwnProperty(n) && (e[n] = t[n])
						}
				)(e, t)
			}
				,
				function(e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
							new n)
				}
		);
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = n(16)
			, s = n(5)
			, a = n(9)
			, u = n(21)
			, c = n(0)
			, h = n(1)
			, d = n(3)
			, l = n(8)
			, f = n(20)
			, p = n(60)
			, _ = function(e) {
			function t(t, n, r, i, u) {
				void 0 === r && (r = new p.NetworkEventTransport(t,n)),
				void 0 === i && (i = s.RealTicker),
				void 0 === u && (u = o.defaultInjector);
				var c = e.call(this, t, i, r, u) || this;
				return c._protocol = n,
					c._domLoaded = !1,
					c._recordingDisabled = !1,
					c._integrationScriptFetched = !1,
					r.onShutdown(function() {
						return c.shutdown("transport")
					}),
					c._doc = c._wnd.document,
					c._frameId = 0,
					c._identity = t.recording.identity,
					c._getCurrentSessionEnabled = o.GetCurrentSessionEnabledState.NoInfoYet,
					a.set_fs_shutdown(c._wnd, function(e) {
						if (c._eventWatcher.shutdown("_fs_shutdown"),
							e) {
							var t = c._doc.getElementById(e);
							t && t.setAttribute("_fs_embed_token", c._embedToken)
						}
					}),
					c
			}
			return i(t, e),
				t.prototype.onDomLoad = function() {
					var t = this;
					e.prototype.onDomLoad.call(this),
						this._domLoaded = !0,
						this.injectIntegrationScript(function() {
							t.fireFsReady(t._recordingDisabled)
						})
				}
				,
				t.prototype.start = function(t, n, r) {
					var i = this;
					e.prototype.start.call(this, t, n);
					var o = a._fs_replay_flags(this._wnd)
						, s = u.getDocumentClientArea(this._doc)
						, h = s[0]
						, p = s[1]
						, _ = c.tryGetScreenDims(this._wnd)
						, g = _[0]
						, v = _[1]
						, y = "";
					t || (y = this._identity.userId());
					var E = l.scrubUrl(l.baseUri(this._wnd), this._orgId, {
						source: "page",
						type: "base"
					})
						, m = l.scrubUrl(this._doc.referrer, this._orgId, {
						source: "page",
						type: "referrer"
					})
						, w = l.scrubUrl(this._wnd.location.href, this._orgId, {
						source: "page",
						type: "url"
					})
						, S = {
						OrgId: this._orgId,
						UserId: y,
						Url: w,
						Base: E,
						Width: h,
						Height: p,
						ScreenWidth: g,
						ScreenHeight: v,
						Referrer: m,
						Doctype: c.doctypeString(this._doc),
						CompiledTimestamp: f.CompiledTimestamp
					};
					r && (S.AppId = r),
					o && (S.ReplayFlags = o),
						this._protocol.page(S, function(e) {
							i.handleResponse(e),
								i.handleIdentity(e.CookieDomain, e.UserIntId, e.SessionIntId, e.PageIntId, e.EmbedToken),
								i.handleIntegrationScript(e.IntegrationScript),
								i._queue.enqueueFirst(d.EVENT_SET_FRAME_BASE, [l.scrubUrl(l.baseUri(i._wnd), i._orgId, {
									source: "event",
									type: d.EVENT_SET_FRAME_BASE
								}), c.doctypeString(i._doc)]),
								i._queue.startPipeline(e.PageIntId, e.PageStart),
								i.fullyStarted()
						}, function(e) {
							i.disableBecauseRecPageSaidSo()
						})
				}
				,
				t.prototype.handleIntegrationScript = function(e) {
					var t = this;
					this._integrationScriptFetched = !0,
						this._integrationScript = e,
						this.injectIntegrationScript(function() {
							t.fireFsReady(t._recordingDisabled)
						})
				}
				,
				t.prototype.handleIdentity = function(e, t, n, r, i) {
					var o = this._identity;
					o.setIds(this._wnd, e, t, n),
						this._embedToken = i,
						h.logIfDebug("/User," + o.userId() + "/Session," + o.sessionId() + "/Page," + r)
				}
				,
				t.prototype.injectIntegrationScript = function(e) {
					if (this._domLoaded && this._integrationScriptFetched)
						if (this._integrationScript) {
							var t = this._doc.createElement("script");
							a._fs_csp(this._wnd) ? (t.addEventListener("load", e),
								t.addEventListener("error", e),
								t.async = !0,
								t.src = this._scheme + "//" + this._recHost + "/rec/integrations?OrgId=" + this._orgId,
								this._doc.head.appendChild(t)) : (t.text = this._integrationScript,
								this._doc.head.appendChild(t),
								e())
						} else
							e()
				}
				,
				t.prototype.disableBecauseRecPageSaidSo = function() {
					this.shutdown("because /rec/page said so"),
						h.logIfDebug("Disabling FS."),
						this._recordingDisabled = !0,
						this.fireFsReady(this._recordingDisabled)
				}
				,
				t
		}(o.AbstractRecorder);
		t.TopRecorder = _
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(3)
			, i = n(61)
			, o = n(5)
			, s = n(31)
			, a = n(18)
			, u = n(7)
			, c = n(2)
			, h = n(1)
			, d = function() {
			function e(e, t, n, s) {
				var c = this;
				void 0 === t && (t = new a.HttpProtocol(e)),
				void 0 === n && (n = o.RealTicker),
				void 0 === s && (s = o.RealTimeout),
					this._ctx = e,
					this._protocol = t,
					this._tickerFactory = n,
					this._backoffRetries = 0,
					this._backoffTime = 0,
					this._bundleSeq = 1,
					this._lastPostTime = 0,
					this._serverBundleTime = 0,
					this._largePageSize = 16e6,
					this._outgoingEventQueue = [],
					this._bundleQueue = [],
					this._hibernating = !1,
					this._heartbeatInterval = 0,
					this._lastUserEvent = 0,
					this._finished = !1,
					this._scheme = e.options.scheme,
					this._identity = e.recording.identity,
					this._lastBundleTime = e.time.wallTime(),
					this._swanSong = new i.SwanSong(e,this._protocol,this._identity,s),
					this._heartbeatTimeout = new s(function() {
							c._outgoingEventQueue.push({
								Kind: r.EVENT_HEARTBEAT,
								When: c._ctx.time.now(),
								Args: []
							}),
								c._heartbeatInterval *= 2,
							c._heartbeatInterval > u.HeartbeatMax && (c._heartbeatInterval = u.HeartbeatMax),
								c._heartbeatTimeout.start(c._heartbeatInterval)
						}
					),
					this._hibernationTimeout = new s(function() {
							c._ctx.time.now() - c._lastUserEvent <= 2 * u.PageInactivityTimeout && (c._outgoingEventQueue.push({
								Kind: r.EVENT_UNLOAD,
								When: c._ctx.time.now(),
								Args: ["hibernation"]
							}),
								c.singSwanSong()),
								c.stopPipeline(),
								c._hibernating = !0
						}
						,u.PageInactivityTimeout)
			}
			return e.prototype.onShutdown = function(e) {
				this._onShutdown = e
			}
				,
				e.prototype.scheme = function() {
					return this._scheme
				}
				,
				e.prototype.enqueueEvents = function(e, t) {
					if (this._hibernating) {
						if (this._finished)
							return;
						for (var n = 0, i = t; n < i.length; n++) {
							var o = i[n];
							if (r.isUserActionEvent(o.Kind)) {
								this._ctx.recording.splitPage("post-hibernation"),
									this._finished = !0;
								break
							}
						}
					} else {
						for (var s = 0, a = t; s < a.length; s++) {
							o = a[s];
							if (r.isUserActionEvent(o.Kind)) {
								this._hibernationTimeout.start(),
									this._heartbeatInterval = u.HeartbeatInitial,
									this._heartbeatTimeout.start(this._heartbeatInterval),
									this._lastUserEvent = this._ctx.time.now();
								break
							}
						}
						for (var c = 0, h = t; c < h.length; c++) {
							o = h[c];
							this._outgoingEventQueue.push(o)
						}
					}
				}
				,
				e.prototype.initUploadTicker = function() {
					this._uploadTicker = new this._tickerFactory(this._ctx.recording.bundleUploadInterval)
				}
				,
				e.prototype.startPipeline = function(e, t) {
					var n = this;
					this._pageId = e,
						this._serverPageStart = t,
						this.enqueueAndSendBundle(),
					this._uploadTicker || this.initUploadTicker(),
						this._uploadTicker.start(function() {
							n.enqueueAndSendBundle()
						}),
						this._heartbeatInterval = u.HeartbeatInitial,
						this._heartbeatTimeout.start(this._heartbeatInterval),
						this._hibernationTimeout.start()
				}
				,
				e.prototype.stopPipeline = function() {
					this._uploadTicker && this._uploadTicker.stop(),
						this._outgoingEventQueue = [],
						this._bundleQueue = [],
						this._hibernationTimeout.stop(),
						this._heartbeatTimeout.stop()
				}
				,
				e.prototype.flush = function() {
					this.maybeSendNextBundle()
				}
				,
				e.prototype.singSwanSong = function() {
					if (!this._hibernating && (this._outgoingEventQueue.length > 0 && this.enqueueNextBundle(!0),
					this._bundleQueue.length > 0 || this._pendingBundle)) {
						var e = this._bundleQueue.concat();
						this._pendingBundle && e.unshift(this._pendingBundle),
							this._swanSong.sing(this._pageId, e, this._lastBundleTime, this._serverPageStart, this._serverBundleTime)
					}
				}
				,
				e.prototype.enqueueAndSendBundle = function() {
					this._pendingBundle ? this._pendingBundleFailed && this._sendPendingBundle() : 0 != this._outgoingEventQueue.length ? this.enqueueNextBundle() : this.maybeSendNextBundle()
				}
				,
				e.prototype.enqueueNextBundle = function(e) {
					void 0 === e && (e = !1);
					var t = {
						When: this._outgoingEventQueue[0].When,
						Seq: this._bundleSeq++,
						Evts: this._outgoingEventQueue
					};
					this._outgoingEventQueue = [],
						this._bundleQueue.push(t),
						e ? this._protocol.bundleBeacon(t, this._identity.orgId(), this._identity.userId(), this._identity.sessionId(), this._pageId, this._serverPageStart, this._serverBundleTime, null) : this.maybeSendNextBundle()
				}
				,
				e.prototype.maybeSendNextBundle = function() {
					this._pageId && this._serverPageStart && !this._pendingBundle && 0 != this._bundleQueue.length && (this._pendingBundle = this._bundleQueue.shift(),
						this._sendPendingBundle())
				}
				,
				e.prototype._sendPendingBundle = function() {
					var e = this
						, t = this._ctx.time.wallTime();
					if (!(t < this._backoffTime)) {
						var n = this._pendingBundle;
						n && (this._pendingBundleFailed = !1,
							this._lastPostTime = this._lastBundleTime = t,
							this.sendBundle(n, function(t) {
								h.logIfDebug("Sent bundle " + n.Seq + " with " + n.Evts.length + " events"),
									e._serverBundleTime = t.BundleTime,
									e._pendingBundle = null,
									e._backoffTime = 0,
									e._backoffRetries = 0,
								e._ctx.time.wallTime() - e._lastPostTime > e._ctx.recording.bundleUploadInterval && e.maybeSendNextBundle()
							}, function(t) {
								if (h.logIfDebug("Failed to send events."),
									s.isErrorFatal(t))
									return 206 == t && c.FsBugSnag.sendToBugsnag("Failed to send bundle, probably because of its large size", "error"),
										void (e._onShutdown && e._onShutdown());
								e._pendingBundleFailed = !0,
									e._backoffTime = e._lastPostTime + e._protocol.exponentialBackoffMs(e._backoffRetries++, !1)
							}))
					}
				}
				,
				e.prototype.sendBundle = function(e, t, n) {
					var r = this._protocol.bundle(e, this._identity.orgId(), this._identity.userId(), this._identity.sessionId(), this._pageId, this._serverPageStart, this._serverBundleTime, null, t, n);
					if (r > this._largePageSize && this._bundleSeq > 16) {
						var i = "splitting large page of size: " + r;
						h.logIfDebug(i),
							c.FsBugSnag.sendToBugsnag(new Error(i), "info"),
							this._ctx.recording.splitPage("size")
					}
				}
				,
				e
		}();
		t.NetworkEventTransport = d
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(7)
			, i = n(5)
			, o = n(0)
			, s = n(31)
			, a = n(1)
			, u = function() {
			function e(e, t, n, r) {
				void 0 === r && (r = i.RealTimeout),
					this._ctx = e,
					this._protocol = t,
					this._identity = n,
					this._timeoutFactory = r,
					this._recover()
			}
			return e.prototype.sing = function(e, t, n, i, s) {
				a.logIfDebug("Saving " + t.length + " bundles in swan-song.");
				var u = {
					OrgId: this._identity.orgId(),
					UserId: this._identity.userId(),
					SessionId: this._identity.sessionId(),
					PageId: e,
					Bundles: t,
					PageStartTime: this._ctx.time.startTime(),
					LastBundleTime: n,
					ServerPageStart: i,
					ServerBundleTime: s
				}
					, c = o.stringify(u);
				if (!(c.length > 2e6))
					try {
						localStorage[r.SwanSongLocalStorageKey] = c
					} catch (e) {}
			}
				,
				e.prototype._recover = function() {
					try {
						if (r.SwanSongLocalStorageKey in localStorage) {
							var e = localStorage[r.SwanSongLocalStorageKey] || localStorage.singSwanSong;
							delete localStorage[r.SwanSongLocalStorageKey],
								delete localStorage.singSwanSong;
							var t = o.parseJson(e);
							if (!(t.Bundles && t.UserId && t.SessionId && t.PageId))
								return void a.logIfDebug("Malformed swan song found. Ignoring it.");
							t.OrgId || (t.OrgId = this._identity.orgId()),
							t.Bundles.length > 0 && (a.logIfDebug("Sending " + t.Bundles.length + " bundles as prior page swan song"),
								this.sendSwanSongBundles(t.OrgId, t.UserId, t.SessionId, t.PageId, t.Bundles, t.ServerPageStart, t.ServerBundleTime, t.LastBundleTime))
						}
					} catch (e) {
						a.logIfDebug("Error recovering swan-song: " + e)
					}
				}
				,
				e.prototype.sendSwanSongBundles = function(e, t, n, r, i, u, c, h, d) {
					var l = this;
					void 0 === d && (d = 0);
					var f = null;
					o.isArray(i) && 0 !== i.length && void 0 !== i[0] && (1 == i.length && (f = this._ctx.time.wallTime() - (h || 0)),
						this._protocol.bundle(i[0], e, t, n, r, u, c, f, function(o) {
							a.logIfDebug("Sent " + i[0].Evts.length + " trailing events from last session as Seq " + i[0].Seq),
								i.shift(),
								i.length > 0 ? l.sendSwanSongBundles(e, t, n, r, i, u, o.BundleTime, h) : a.logIfDebug("Done with prior page swan song")
						}, function(o) {
							s.isErrorFatal(o) ? a.logIfDebug("Fatal error while sending events, giving up") : (a.logIfDebug("Failed to send events from last session, will retry while on this page"),
								l._lastSwanSongRetryTimeout = new l._timeoutFactory(l.sendSwanSongBundles,l._protocol.exponentialBackoffMs(d, !0),l,e,t,n,r,i,u,c,h,d + 1).start())
						}))
				}
				,
				e
		}();
		t.SwanSong = u
	}
	, function(e, t, n) {
		"use strict";
		var r, i = this && this.__extends || (r = function(e, t) {
				return (r = Object.setPrototypeOf || {
							__proto__: []
						}instanceof Array && function(e, t) {
							e.__proto__ = t
						}
						|| function(e, t) {
							for (var n in t)
								t.hasOwnProperty(n) && (e[n] = t[n])
						}
				)(e, t)
			}
				,
				function(e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
							new n)
				}
		);
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = n(16)
			, s = n(5)
			, a = n(0)
			, u = n(1)
			, c = n(3)
			, h = n(8)
			, d = n(63)
			, l = n(9)
			, f = function(e) {
			function t(t, n, r, i, a) {
				void 0 === n && (n = new d.PostMessagePoster(t.window)),
				void 0 === r && (r = new d.PostMessageEventTransport(t.window)),
				void 0 === i && (i = s.RealTicker),
				void 0 === a && (a = o.defaultInjector);
				var u = e.call(this, t, i, r, a) || this;
				return u._messagePoster = n,
					u
			}
			return i(t, e),
				t.prototype.start = function(t, n) {
					var r = this;
					e.prototype.start.call(this, t, n),
						this.sendRequestForFrameId(),
						this._listeners.add(this._wnd, "load", !1, function() {
							r._eventWatcher.recordingIsDetached() && (u.logIfDebug("Recording wrong document. Restarting recording in iframe."),
								r._ctx.recording.splitPage("detached iframe"))
						})
				}
				,
				t.prototype.postMessageReceived = function(t, n) {
					if (e.prototype.postMessageReceived.call(this, t, n),
					t == this._wnd.parent || t == this._wnd)
						switch (n[0]) {
							case o.FS_GREET_CHILD_FRAME:
								this.sendRequestForFrameId();
								break;
							case o.FS_SET_FRAME_ID_CMD:
								try {
									var r = n[1]
										, i = n[2]
										, s = n[3]
										, c = n[4]
										, h = n[5]
										, d = n[6]
										, f = n[7]
										, p = n[8];
									this.setFrameIdFromOutside(r, i, s, c, h, d, f, p)
								} catch (e) {
									u.logIfDebug("Failed to parse frameId from message: " + a.stringify(n))
								}
								break;
							case o.FS_SET_CONSENT:
								var _ = n[1];
								this.setConsent(_);
								break;
							case o.FS_INIT_MOBILE_CMD:
								try {
									var g = JSON.parse(n[1])
										, v = g.StartTime;
									if (n.length > 2) {
										var y = n[2];
										if (y.hasOwnProperty("ProtocolVersion"))
											y.ProtocolVersion >= 20180723 && y.hasOwnProperty("OuterStartTime") && (v = y.OuterStartTime)
									}
									var E = g.Host;
									this.setFrameIdFromOutside(-1, [], v, "https", l.defaultScript(E), l.defaultAppHost(E), g.OrgId, g.PageResponse)
								} catch (e) {
									u.logIfDebug("Failed to initialize mobile web recording from message: " + a.stringify(n))
								}
						}
				}
				,
				t.prototype.sendRequestForFrameId = function() {
					this._frameId || (0 != this._frameId ? this._wnd.parent ? (u.logIfDebug("Asking for a frame ID."),
						this._messagePoster.postMessage(this._wnd.parent, o.FS_REQUEST_FRAME_ID, [])) : u.logIfDebug("Orphaned window.") : u.logIfDebug("For some reason the outer window attempted to request a frameId"))
				}
				,
				t.prototype.setFrameIdFromOutside = function(e, t, n, r, i, o, s, d) {
					e ? this._frameId ? this._frameId != e ? (u.logIfDebug("Updating frame id from " + this._frameId + " to " + e),
						this._ctx.recording.splitPage("stale iframe")) : u.logIfDebug("frame Id is already set to " + this._frameId) : (u.logIfDebug("FrameId received within frame " + h.scrubUrl(location.href, s, {
						source: "log",
						type: "debug"
					}) + ": " + e),
						this._scheme = r,
						this._script = i,
						this._appHost = o,
						this._orgId = s,
						this._frameId = e,
						this._parentIds = t,
						this.handleResponse(d),
						this.fireFsReady(),
						this._queue.enqueueFirst(c.EVENT_SET_FRAME_BASE, [h.scrubUrl(h.baseUri(this._wnd), s, {
							source: "event",
							type: c.EVENT_SET_FRAME_BASE
						}), a.doctypeString(this._wnd.document)]),
						this._queue.rebaseIframe(n),
						this._ctx.time.setStartTime(n),
						this._queue.startPipeline(this._pageId, d.PageStart, e, t),
						this.flushPendingChildFrameInits(),
						this.fullyStarted()) : u.logIfDebug("Outer page gave us a bogus frame Id! Iframe: " + h.scrubUrl(location.href, s, {
						source: "log",
						type: "debug"
					}))
				}
				,
				t
		}(o.AbstractRecorder);
		t.InnerRecorder = f
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(16)
			, i = n(9)
			, o = n(0)
			, s = function() {
			function e(e, t) {
				void 0 === t && (t = new a(e)),
					this._wnd = e,
					this._messagePoster = t
			}
			return e.prototype.enqueueEvents = function(e, t) {
				this._messagePoster.postMessage(this._wnd.parent, r.FS_IFRAME_EVENTS, t, e)
			}
				,
				e.prototype.startPipeline = function(e, t) {}
				,
				e.prototype.stopPipeline = function() {}
				,
				e.prototype.flush = function() {}
				,
				e.prototype.singSwanSong = function() {}
				,
				e.prototype.onShutdown = function(e) {}
				,
				e
		}();
		t.PostMessageEventTransport = s;
		var a = function() {
			function e(e) {
				this.wnd = e
			}
			return e.prototype.postMessage = function(e, t, n, r) {
				var s = i._fs_transport(this.wnd);
				if (s)
					try {
						s.send(t, o.stringify(n), r)
					} catch (e) {
						s.send(t, o.stringify(n))
					}
				else
					e.postMessage(u(t, n, r), "*")
			}
				,
				e
		}();
		function u(e, t, n) {
			var r = [e, t];
			return n && r.push(n),
				o.stringify({
					__fs: r
				})
		}
		t.PostMessagePoster = a,
			t.formatPostMessageData = u
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, i, o = n(3), s = n(32), a = n(0), u = n(19), c = n(1), h = n(4), d = n(29), l = n(22);
		!function(e) {
			e.rec = "rec",
				e.user = "user",
				e.account = "account",
				e.consent = "consent",
				e.customEvent = "event",
				e.log = "log"
		}(r = t.ApiType || (t.ApiType = {})),
			function(e) {
				e.user = "user",
					e.account = "acct",
					e.event = "evt"
			}(i = t.VarScope || (t.VarScope = {}));
		var f = {
			acctId: "str",
			displayName: "str",
			website: "str"
		}
			, p = {
			uid: "str",
			displayName: "str",
			email: "str"
		}
			, _ = {
			str: g,
			bool: v,
			real: y,
			"int": E,
			date: m,
			strs: w(g),
			bools: w(v),
			reals: w(y),
			ints: w(E),
			dates: w(m),
			objs: w(S),
			obj: S
		};
		function g(e) {
			return "string" == typeof e
		}
		function v(e) {
			return "boolean" == typeof e
		}
		function y(e) {
			return "number" == typeof e
		}
		function E(e) {
			return "number" == typeof e && e - Math.floor(e) == 0
		}
		function m(e) {
			return !!e && (e.constructor === Date ? !isNaN(e) : ("number" == typeof e || "string" == typeof e) && !isNaN(new Date(e)))
		}
		function w(e) {
			return function(t) {
				if (!(t instanceof Array))
					return !1;
				for (var n = 0; n < t.length; n++)
					if (!e(t[n]))
						return !1;
				return !0
			}
		}
		function S(e) {
			return !!e && "object" == typeof e
		}
		var b = /^[a-zA-Z][a-zA-Z0-9_]*$/
			, T = function() {
			function e(e) {
				this._identity = e
			}
			return e.prototype.identity = function() {
				return this._identity
			}
				,
				e.prototype.api = function(e, t, n) {
					var u = !1
						, h = [];
					try {
						switch (e) {
							case r.rec:
								return {
									events: [],
									recStatus: t ? "restart" : "shutdown"
								};
							case r.log:
								if (!Array.isArray(t)) {
									var l = typeof t;
									c.logIfDebug("Expected array-like args instead got: \"" + l + "\", value: \"" + t + "\"");
									break
								}
								return t[0]in ["log", "info", "warn", "error", "debug"] == !1 && t.unshift("log"),
									{
										events: [{
											When: 0,
											Kind: o.EVENT_LOG,
											Args: t.map(function(e) {
												return d.stringifyLogMessage(e, 1e3)
											})
										}]
									};
							case r.consent:
								var _ = typeof t;
								if ("boolean" != typeof t) {
									c.logIfDebug("Expected consent status of type 'boolean' instead got type: \"" + _ + "\", value: \"" + t + "\"");
									break
								}
								return {
									events: [{
										When: 0,
										Kind: o.EVENT_SYS_SETCONSENT,
										Args: [t]
									}],
									consent: t
								};
							case r.account:
								h.push.apply(h, this.rawEventsFromApi(i.account, f, t, n));
								break;
							case r.user:
								if ("object" != typeof t)
									c.logIfDebug("Expected argument of type 'object' instead got type: '" + typeof t + "', value: " + a.stringify(t));
								else if ("uid"in t) {
									var g = t.uid;
									if (!1 === g)
										this._identity.clearAppId() && (u = !0),
											delete t.uid;
									else {
										var v = N(g, this._identity)
											, y = v[0]
											, E = v[1];
										if (!y) {
											switch (E) {
												case s.HighlightTypeFsId:
													h.push({
														When: 0,
														Kind: o.EVENT_SYS_HIGHLIGHT,
														Args: [s.HighlightTypeFsId, t.uid + ""]
													});
													break;
												case void 0:
													break;
												default:
													c.logIfDebug("unexpected failReason returned from setAppId: " + E);
											}
											return {
												events: h
											}
										}
										t.uid = y,
											this._identity.setAppId(t.uid),
										E == s.HighlightTypeNewUid && (u = !0)
									}
								}
								h.push.apply(h, this.rawEventsFromApi(i.user, p, t, n));
								break;
							case r.customEvent:
								var m = t.n
									, w = t.p;
								h.push.apply(h, this.rawEventsFromApi(i.event, {}, w, n, m));
								break;
							default:
								c.logIfDebug("invalid operation \"" + e + "\"; only \"rec\", \"account\", and \"user\" are supported at present");
						}
					} catch (t) {
						c.logIfDebug("unexpected exception handling " + e + " API call: " + t.message)
					}
					return {
						events: h,
						reidentify: u
					}
				}
				,
				e.prototype.rawEventsFromApi = function(e, t, n, r, s) {
					var u = function e(t, n, r) {
						var o = {
							PayloadToSend: {},
							ValidationErrors: []
						};
						var s = function(r) {
							var i = e(t, n, r);
							return o.ValidationErrors = o.ValidationErrors.concat(i.ValidationErrors),
								i.PayloadToSend
						};
						a.forIn(r, function(e, r) {
							var u = function(e, t, n, r) {
								var i = t
									, o = typeof n;
								if ("undefined" === o)
									return c.logIfDebug("Cannot infer type of " + o + " " + n),
										r.push({
											Type: "vartype",
											FieldName: t,
											ValueType: o + " (unsupported)"
										}),
										null;
								if (h.windex.objectHasOwnProp(e, t))
									return {
										name: t,
										type: e[t]
									};
								var s = t.lastIndexOf("_");
								if (-1 == s || !O(t.substring(s + 1))) {
									var u = function(e) {
										for (var t in _)
											if (_[t](e))
												return t;
										return null
									}(n);
									if (null == u)
										return c.logIfDebug("Cannot infer type of " + o + " " + n),
											n ? r.push({
												Type: "vartype",
												FieldName: t
											}) : r.push({
												Type: "vartype",
												FieldName: t,
												ValueType: "null (unsupported)"
											}),
											null;
									s = t.length,
										c.logIfDebug("Warning: Inferring user variable \"" + t + "\" to be of type \"" + u + "\""),
										t = t + "_" + u
								}
								var d = [t.substring(0, s), t.substring(s + 1)]
									, l = d[0]
									, f = d[1];
								if ("object" === o && !n)
									return c.logIfDebug("null is not a valid object type"),
										r.push({
											Type: "vartype",
											FieldName: i,
											ValueType: "null (unsupported)"
										}),
										null;
								if (!b.test(l)) {
									l = l.replace(/[^a-zA-Z0-9_]/g, "").replace(/^[0-9]+/, ""),
									/[0-9]/.test(l[0]) && (l = l.substring(1)),
										r.push({
											Type: "varname",
											FieldName: i
										});
									var p = l + "_" + f;
									if (c.logIfDebug("Warning: variable \"" + i + "\" has invalid characters. It should match /" + b.source + "/. Converted name to \"" + p + "\"."),
									"" == l)
										return null;
									t = p
								}
								if (!O(f))
									return c.logIfDebug("Variable \"" + i + "\" has invalid type \"" + f + "\""),
										r.push({
											Type: "varname",
											FieldName: i
										}),
										null;
								if (!function(e, t) {
									return _[e](t)
								}(f, n))
									return c.logIfDebug("illegal value " + a.stringify(n) + " for type " + f),
										"number" === o ? o = n % 1 == 0 ? "integer" : "real" : "object" == o && null != n && n.constructor == Date && (o = isNaN(n) ? "invalid date" : "date"),
										r.push({
											Type: "vartype",
											FieldName: i,
											ValueType: o
										}),
										null;
								return {
									name: t,
									type: f
								}
							}(n, r, e, o.ValidationErrors);
							if (u) {
								var d = u.name
									, l = u.type;
								if ("obj" != l) {
									if ("objs" != l)
										o.PayloadToSend[d] = I(l, e);
									else {
										t != i.event && o.ValidationErrors.push({
											Type: "vartype",
											FieldName: d,
											ValueType: "Array<Object> (unsupported)"
										});
										for (var f = e, p = [], g = 0; g < f.length; g++) {
											var v = s(f[g]);
											v && p.push(v)
										}
										p.length > 0 && (o.PayloadToSend[d] = p)
									}
								} else {
									var v = s(e)
										, y = a.hasSuffix(r, "_obj") ? d : d.substring(0, d.length - "_obj".length);
									o.PayloadToSend[y] = v
								}
							} else
								o.PayloadToSend[r] = I("", e)
						});
						return o
					}(e, t, n)
						, d = this.eventsForValidationErrors(e, u.ValidationErrors)
						, l = e == i.event
						, f = [e, a.stringify(u.PayloadToSend)]
						, p = o.EVENT_SYS_SETVAR;
					return l && (p = o.EVENT_SYS_CUSTOM,
						f[0] = s),
					r && "fs" != r && f.push(r),
						d.push({
							When: 0,
							Kind: p,
							Args: f
						}),
						d
				}
				,
				e.prototype.eventsForValidationErrors = function(e, t) {
					if (e == i.event)
						return [];
					for (var n = [], r = 0, s = t; r < s.length; r++) {
						var a = s[r]
							, u = [a.Type, e + ":" + a.FieldName];
						a.ValueType && u.push(a.ValueType),
							n.push({
								When: 0,
								Kind: o.EVENT_SYS_HIGHLIGHT,
								Args: u
							})
					}
					return n
				}
				,
				e
		}();
		function I(e, t) {
			return "str" == e && null != t && (t = t.trim()),
			null == t || "date" != e && t.constructor != Date || (t = function(e) {
				var t, n = e.constructor === Date ? e : new Date(e);
				try {
					t = n.toISOString()
				} catch (e) {
					t = null
				}
				return t
			}(t)),
				t
		}
		function N(e, t) {
			if ("number" == typeof e && Math.floor(e) == e && (c.logIfDebug("Expected appId of type 'string' instead got value: " + e + " of type: " + typeof e),
				e = "" + e),
			"string" != typeof e)
				return c.logIfDebug("blocking FS.identify API call; uid value (" + e + ") must be a string"),
					[void 0, s.HighlightTypeFsId];
			var n = e.trim();
			if (u.BAD_APP_IDS.indexOf(n.toLowerCase()) >= 0)
				return c.logIfDebug("blocking FS.identify API call; uid value (" + n + ") is illegal"),
					[void 0, s.HighlightTypeFsId];
			var r = l.hashString32Blocking(n)
				, i = void 0;
			return t && t._cookie.AppKeyHash && t._cookie.AppKeyHash !== r && t._cookie.AppKeyHash !== n && (c.logIfDebug("user re-identified; existing uid hash (" + t._cookie.AppKeyHash + ") does not match provided uid (" + n + ")"),
				i = s.HighlightTypeNewUid),
				[n, i]
		}
		function O(e) {
			return !!_[e]
		}
		t.Vars = T,
			t.transformValidateAppId = N
	}
	, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(7)
			, i = n(0)
			, o = n(18)
			, s = n(4)
			, a = n(1)
			, u = n(2);
		t.cmdReqPage = 1,
			t.cmdReqBundle = 2,
			t.cmdRspError = 3,
			t.cmdRspPage = 4,
			t.cmdRspBundle = 5;
		var c = function() {
			function e(e, t) {
				void 0 === t && (t = function(e) {
						return new WebSocket(e)
					}
				),
					this._newSock = t,
					this._connecting = !1,
					this._connected = !1,
					this._queue = {},
					this._seq = 1,
					this._wnd = e.window,
					this._scheme = e.options.scheme,
					this._host = e.options.recHost
			}
			return e.isSupported = function() {
				return "WebSocket"in window
			}
				,
				e.prototype.page = function(e, n, r) {
					this.request({
						Cmd: t.cmdReqPage,
						Page: e
					}, function(e) {
						return n(e.Page)
					}, r)
				}
				,
				e.prototype.bundle = function(e, n, r, i, o, s, a, u, c, h) {
					return this.request({
						Cmd: t.cmdReqBundle,
						Bundle: {
							OrgId: n,
							UserId: r,
							SessionId: i,
							PageId: o,
							Seq: e.Seq,
							DeltaT: null === u ? void 0 : u,
							PageStart: null == s ? void 0 : s,
							PrevBundleTime: null == a ? void 0 : a,
							Bundle: e
						}
					}, function(e) {
						return c(e.Bundle)
					}, h)
				}
				,
				e.prototype.bundleBeacon = function(e, t, n, r, i, s, a, u) {
					return o.bundleBeacon(this._scheme, this._host, e, t, n, r, i, s, a, u)
				}
				,
				e.prototype.exponentialBackoffMs = function(e, t) {
					var n = Math.min(r.BackoffMax, 5e3 * Math.pow(2, e));
					return t ? n + .25 * Math.random() * n : n
				}
				,
				e.prototype.request = function(e, t, n) {
					e.Seq = this._seq++;
					var r = i.stringify(e);
					return this._queue[e.Seq] = {
						payload: r,
						win: t,
						lose: n
					},
						this.maybeConnect(),
						r.length
				}
				,
				e.prototype.handleMessage = function(e) {
					var n;
					try {
						n = i.parseJson(e)
					} catch (e) {
						return void a.logIfDebug("socket: error parsing frame: " + e.toString())
					}
					var r = this._queue[n.Seq];
					delete this._queue[n.Seq],
						r ? n.Cmd == t.cmdRspError ? (a.logIfDebug(n.Fail.Error),
							r.lose(n.Fail.Status)) : r.win(n) : a.logIfDebug("socket: mismatched request seq " + n.Seq + "; ignoring")
				}
				,
				e.prototype.drainQueue = function() {
					if (this._connected)
						for (var e in this._queue) {
							var t = this._queue[e];
							t.sent || (this._sock.send(t.payload),
								t.sent = !0)
						}
					else
						a.logIfDebug("socket: attempt to drain queue when disconnected.")
				}
				,
				e.prototype.reconnect = function() {
					var e = this;
					if (!this._connected) {
						for (var t in this._queue)
							this._queue[t].sent = !1;
						var n = 0;
						s.windex.setWindowTimeout(this._wnd, u.FsBugSnag.wrap(function() {
							return e.maybeConnect()
						}), this.exponentialBackoffMs(n++, !0))
					}
				}
				,
				e.prototype.maybeConnect = function() {
					var e = this;
					if (this._connected)
						this.drainQueue();
					else if (!this._connecting) {
						this._connecting = !0;
						var t = ("https:" == this._scheme ? "wss:" : "ws:") + "//" + this._host + "/rec/sock";
						this._sock = this._newSock(t),
							this._sock.onopen = function(t) {
								e._connecting = !1,
									e._connected = !0,
									e.drainQueue()
							}
							,
							this._sock.onmessage = function(t) {
								e.handleMessage(t.data),
									e.drainQueue()
							}
							,
							this._sock.onclose = function(t) {
								a.logIfDebug("socket: closed; reconnecting"),
									e._connecting = e._connected = !1,
									e.reconnect()
							}
							,
							this._sock.onerror = function(t) {
								a.logIfDebug("socket: error; reconnecting"),
									e._connecting = e._connected = !1,
									e.reconnect()
							}
					}
				}
				,
				e
		}();
		t.SockProtocol = c
	}
]);
