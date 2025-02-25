function cmsFilter() {
    var se = Object.create;
    var st = Object.defineProperty,
        ie = Object.defineProperties,
        ne = Object.getOwnPropertyDescriptor,
        ae = Object.getOwnPropertyDescriptors,
        le = Object.getOwnPropertyNames,
        ht = Object.getOwnPropertySymbols,
        ce = Object.getPrototypeOf,
        Tt = Object.prototype.hasOwnProperty,
        me = Object.prototype.propertyIsEnumerable;
    var ot = (t, e, r) => (e in t ? st(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
        _ = (t, e) => {
            for (var r in e || (e = {})) Tt.call(e, r) && ot(t, r, e[r]);
            if (ht) for (var r of ht(e)) me.call(e, r) && ot(t, r, e[r]);
            return t;
        },
        $ = (t, e) => ie(t, ae(e));
    var ue = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
    var pe = (t, e, r, o) => {
        if ((e && typeof e == "object") || typeof e == "function") for (let s of le(e)) !Tt.call(t, s) && s !== r && st(t, s, { get: () => e[s], enumerable: !(o = ne(e, s)) || o.enumerable });
        return t;
    };
    var fe = (t, e, r) => ((r = t != null ? se(ce(t)) : {}), pe(e || !t || !t.__esModule ? st(r, "default", { value: t, enumerable: !0 }) : r, t));
    var bt = (t, e, r) => (ot(t, typeof e != "symbol" ? e + "" : e, r), r);
    var f = (t, e, r) =>
        new Promise((o, s) => {
            var i = (l) => {
                try {
                    a(r.next(l));
                } catch (c) {
                    s(c);
                }
            },
                n = (l) => {
                    try {
                        a(r.throw(l));
                    } catch (c) {
                        s(c);
                    }
                },
                a = (l) => (l.done ? o(l.value) : Promise.resolve(l.value).then(i, n));
            a((r = r.apply(t, e)).next());
        });
    var Ut = ue((zo, Pt) => {
        Pt.exports = rr;
        function rr(t, e, r, o) {
            var s, i, n;
            return function () {
                if (((n = this), (i = Array.prototype.slice.call(arguments)), s && (r || o))) return;
                if (!r) return c(), (s = setTimeout(l, e)), s;
                (s = setTimeout(c, e)), t.apply(n, i);
                function l() {
                    c(), t.apply(n, i);
                }
                function c() {
                    clearTimeout(s), (s = null);
                }
            };
        }
    });
    var v = class {
        static activateAlerts() {
            this.alertsActivated = !0;
        }
        static alert(e, r) {
            if ((this.alertsActivated && window.alert(e), r === "error")) throw new Error(e);
        }
    };
    bt(v, "alertsActivated", !1);
    var Ct = {
        wrapper: "w-dyn-list",
        list: "w-dyn-items",
        item: "w-dyn-item",
        paginationWrapper: "w-pagination-wrapper",
        paginationNext: "w-pagination-next",
        paginationPrevious: "w-pagination-previous",
        pageCount: "w-page-count",
        emptyState: "w-dyn-empty",
    },
        H = {
            formBlock: "w-form",
            checkboxField: "w-checkbox",
            checkboxInput: "w-checkbox-input",
            radioField: "w-radio",
            radioInput: "w-radio-input",
            checkboxOrRadioLabel: "w-form-label",
            checkboxOrRadioFocus: "w--redirected-focus",
            checkboxOrRadioChecked: "w--redirected-checked",
            successMessage: "w-form-done",
            errorMessage: "w-form-fail",
        };
    var O = (t, e) => (Array.isArray(e) || (e = [e]), e.map((o) => t.dispatchEvent(new Event(o, { bubbles: !0 }))).every((o) => o));
    var { radioInput: de, checkboxOrRadioFocus: ge, checkboxOrRadioChecked: ye } = H,
        it = (t, e = []) => {
            let { type: r } = t;
            if (t instanceof HTMLInputElement && ["checkbox", "radio"].includes(r)) {
                if (
                    !t.checked ||
                    ((t.checked = !1),
                        O(
                            t,
                            ["click", "input", "change"].filter((i) => !e.includes(i))
                        ),
                        r === "checkbox")
                )
                    return;
                let { parentElement: o } = t;
                if (!o) return;
                let s = o.querySelector(`.${de}`);
                if (!s) return;
                s.classList.remove(ge, ye);
                return;
            }
            (t.value = ""),
                O(
                    t,
                    ["input", "change"].filter((o) => !e.includes(o))
                );
        };
    var nt = (t, e = !0) => t.cloneNode(e);
    var M = (t, e) => !!t && e.includes(t);
    function V(t, e, r, o = !0) {
        let s = r ? [r] : [];
        if (!t) return s;
        let i = t.split(",").reduce((n, a) => {
            let l = a.trim();
            return (!o || l) && n.push(l), n;
        }, []);
        if (e) {
            let n = i.filter((a) => M(a, e));
            return n.length ? n : s;
        }
        return i;
    }
    var at = (t) => Object.entries(t);
    var z = (t) => !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    var B = (t, e) => t.every((r) => e.includes(r)) && e.every((r) => t.includes(r));
    var D = (t, e) => {
        let { type: r } = t,
            o = r === "radio";
        if (o || r === "checkbox") {
            if (!(t instanceof HTMLInputElement) || typeof e != "boolean" || e === t.checked || (o && e === !1)) return;
            t.checked = e;
        } else t.value !== e && (t.value = e.toString());
        O(t, ["click", "input", "change"]);
    };
    var G = (t) => t instanceof HTMLInputElement || t instanceof HTMLSelectElement || t instanceof HTMLTextAreaElement;
    var lt = (t) => t != null;
    var A = (t) => (e) => `${t}${e ? `-${e}` : ""}`,
        W = (t) => {
            let e = (o, s, i) => {
                let n = t[o],
                    { key: a, values: l } = n,
                    c;
                if (!s) return `[${a}]`;
                let m = l == null ? void 0 : l[s];
                if ((typeof m == "string" ? (c = m) : (c = m(i && "instanceIndex" in i ? i.instanceIndex : void 0)), !(i != null && i.operator))) return `[${a}="${c}"]`;
                switch (i.operator) {
                    case "prefixed":
                        return `[${a}^="${c}"]`;
                    case "suffixed":
                        return `[${a}$="${c}"]`;
                    case "contains":
                        return `[${a}*="${c}"]`;
                }
            };
            return [
                e,
                (o, s) => {
                    let i = e("element", o, s);
                    return ((s == null ? void 0 : s.scope) || document).querySelector(i);
                },
            ];
        };
    var Y = "fs-attributes",
        j = { preventLoad: { key: `${Y}-preventload` }, debugMode: { key: `${Y}-debug` }, src: { key: "src", values: { finsweet: "@finsweet/attributes" } }, dev: { key: `${Y}-dev` } },
        [ct, ho] = W(j);
    var Ft = () => {
        let { currentScript: t } = document,
            { preventLoad: e, debugMode: r } = j,
            o = typeof (t == null ? void 0 : t.getAttribute(e.key)) == "string";
        return typeof (t == null ? void 0 : t.getAttribute(r.key)) == "string" && v.activateAlerts(), { preventsLoad: o };
    };
    var Se = `${Y}-support`,
        Ee = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",
        xt = () =>
            f(void 0, null, function* () {
                let { fsAttributes: t, location: e } = window,
                    { host: r, searchParams: o } = new URL(e.href);
                if (!r.includes("webflow.io") || !o.has(Se)) return !1;
                if (t.supportImport) return t.supportImport;
                try {
                    t.supportImport = new Promise((s, i) => {
                        let n = document.createElement("script");
                        (n.src = Ee), (n.onload = () => s(!0)), (n.onerror = i), document.head.append(n);
                    });
                } catch (s) {
                    return !1;
                }
                return t.supportImport;
            });
    var wt = () => {
        if (window.fsAttributes && !Array.isArray(window.fsAttributes)) return;
        let t = {
            cms: {},
            push(...e) {
                var r, o;
                for (let [s, i] of e) (o = (r = this[s]) == null ? void 0 : r.loading) == null || o.then(i);
            },
        };
        he(t), Te(t), (window.fsAttributes = t), (window.FsAttributes = window.fsAttributes), xt();
    },
        he = (t) => {
            let e = ct("src", "finsweet", { operator: "contains" }),
                r = ct("dev"),
                s = [...document.querySelectorAll(`script${e}, script${r}`)].reduce((i, n) => {
                    var l;
                    let a = n.getAttribute(j.dev.key) || ((l = n.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : l[0]);
                    return a && !i.includes(a) && i.push(a), i;
                }, []);
            for (let i of s) {
                t[i] = {};
                let n = t[i];
                n.loading = new Promise((a) => {
                    n.resolve = (l) => {
                        a(l), delete n.resolve;
                    };
                });
            }
        },
        Te = (t) => {
            let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
            t.push(...e);
        };
    var be = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-animation@1/functions.js",
        P = () =>
            f(void 0, null, function* () {
                let { fsAttributes: t } = window;
                if (t.animationImport) return t.animationImport;
                try {
                    let e = import(be);
                    return (t.animationImport = e), e;
                } catch (e) {
                    v.alert(`${e}`, "error");
                    return;
                }
            });
    var Ce = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmscore@1/cmscore.js",
        X = () =>
            f(void 0, null, function* () {
                let { fsAttributes: t } = window;
                t.cms || (t.cms = {});
                let { cms: e } = t;
                if (e.coreImport) return e.coreImport;
                try {
                    let r = import(Ce);
                    return (
                        (e.coreImport = r),
                        r.then((o) => {
                            o && (e.coreVersion || (e.coreVersion = o.version));
                        }),
                        r
                    );
                } catch (r) {
                    v.alert(`${r}`, "error");
                    return;
                }
            });
    var At = "1.11.2";
    var U = "cmsfilter",
        b = `fs-${U}`,
        xe = "list",
        we = "filters",
        Ae = "empty",
        ve = "initial",
        Me = "results-count",
        Le = "filter-results-count",
        _e = "items-count",
        Ie = "tag-template",
        ke = "tag-text",
        De = "tag-remove",
        Re = "scroll-anchor",
        Ke = "reset",
        Ne = "field",
        $e = "reset",
        He = "match",
        vt = { any: "any", all: "all" },
        Oe = "range",
        Mt = { from: "from", to: "to" },
        Ve = "type",
        Pe = { date: "date" },
        Ue = "showquery",
        Be = { true: "true" },
        Ge = "hideempty",
        Ye = { true: "true" },
        je = "highlight",
        qe = { true: "true" },
        Qe = "highlightclass",
        ze = "active",
        We = "debounce",
        Xe = "tagformat",
        Je = { category: "category" },
        Ze = "tagcategory",
        tr = "easing",
        er = "duration",
        L = {
            element: {
                key: `${b}-element`,
                values: { list: A(xe), filters: A(we), empty: A(Ae), initial: A(ve), resultsCount: A(Me), filterResultsCount: A(Le), itemsCount: A(_e), tagTemplate: A(Ie), tagText: A(ke), tagRemove: A(De), scrollAnchor: A(Re), reset: Ke },
            },
            field: { key: `${b}-${Ne}` },
            reset: { key: `${b}-${$e}` },
            match: { key: `${b}-${He}`, values: vt },
            range: { key: `${b}-${Oe}`, values: Mt },
            type: { key: `${b}-${Ve}`, values: Pe },
            showQuery: { key: `${b}-${Ue}`, values: Be },
            hideEmpty: { key: `${b}-${Ge}`, values: Ye },
            highlight: { key: `${b}-${je}`, values: qe },
            highlightCSS: { key: `${b}-${Qe}` },
            activeCSS: { key: `${b}-${ze}` },
            debouncing: { key: `${b}-${We}` },
            tagFormat: { key: `${b}-${Xe}` },
            tagCategory: { key: `${b}-${Ze}` },
            easing: { key: `${b}-${tr}` },
            duration: { key: `${b}-${er}` },
        },
        [R, C] = W(L),
        Lt = Object.values(vt),
        _t = { range: Object.values(Mt) },
        J = Object.values(Je),
        It = "fs-cmsfilter_highlight",
        kt = "fs-cmsfilter_active",
        Dt = "50";
    var Z = ({ filtersData: t }) => {
        for (let { elements: e } of t)
            for (let r of e) {
                let { resultsCount: o, hidden: s, hideEmpty: i } = r;
                if (!i) continue;
                let n = o === 0;
                n !== s && ((r.hidden = n), (i.style.display = n ? "none" : ""));
            }
    };
    var Rt = ({ props: t }) => {
        for (let e in t) {
            let { elements: r, values: o, highlightData: s } = t[e];
            if (!!s)
                for (let i of o) {
                    let n = r.get(i);
                    if (!n) continue;
                    let { element: a, originalHTML: l } = n,
                        c = s.get(i);
                    if (!c) {
                        a.innerHTML = l;
                        continue;
                    }
                    let { filterValue: m, highlightCSSClass: u } = c,
                        p = new RegExp(m || i, "gi");
                    a.innerHTML = l.replace(p, `<span class="${u}">$&</span>`);
                }
        }
    },
        Kt = ({ props: t }) => {
            for (let e in t) t[e].highlightData = new Map();
        };
    var tt = ({ resultsElement: t }, { validItems: e }) => {
        !t || (t.textContent = `${e.length}`);
    },
        et = ({ filtersData: t }) => {
            for (let { elements: e } of t) for (let { resultsElement: r, resultsCount: o } of e) !r || (r.textContent = `${o}`);
        },
        rt = ({ filtersData: t }, { validItems: e }) => {
            var o, s;
            let r = {};
            for (let { elements: i, filterKeys: n } of t) {
                if (n.length > 1) continue;
                let [a] = n;
                r[a] || (r[a] = {});
                for (let l of i) (l.resultsCount = 0), (o = r[a])[(s = l.value)] || (o[s] = []), r[a][l.value].push(l);
            }
            for (let { props: i } of e)
                for (let n in i) {
                    let a = r[n];
                    if (!a) continue;
                    let { values: l } = i[n];
                    for (let c of l) {
                        let m = a[c];
                        if (!!m) for (let u of m) u.resultsCount += 1;
                    }
                }
        };
    var {
        field: { key: Nt },
        range: { key: $t },
        type: { key: Ht },
    } = L,
        Ot = (t, e) => {
            let { highlightResults: r, showFilterResults: o, hideEmptyFilters: s } = t;
            e.on("shouldcollectprops", (i) => {
                for (let n of i) n.collectProps({ fieldKey: Nt, rangeKey: $t, typeKey: Ht });
            }),
                e.on("shouldfilter", () =>
                    f(void 0, null, function* () {
                        return yield t.applyFilters(!0);
                    })
                ),
                e.on("renderitems", (i) => {
                    if ((tt(t, e), rt(t, e), s && Z(t), o && et(t), r)) for (let n of i) Rt(n);
                }),
                e.once("nestinitialitems").then((i) =>
                    f(void 0, null, function* () {
                        for (let n of i) n.collectProps({ fieldKey: Nt, rangeKey: $t, typeKey: Ht });
                        yield t.applyFilters(!0), yield e.renderItems(!0);
                    })
                );
        };
    var Vt = (o, s) =>
        f(void 0, [o, s], function* (t, { durationKey: e, easingKey: r }) {
            let i = yield P();
            if (!i) return;
            let {
                animations: { fade: n },
                easings: a,
            } = i,
                { listAnimation: l } = t,
                c = t.getAttribute(e),
                m = t.getAttribute(r);
            if (l && !c && !m) return;
            let u = M(m, a) ? m : void 0,
                p = c ? parseFloat(c) / 2e3 : 0.1;
            if (!l) {
                t.listAnimation = $(_({}, n), { options: { easing: u, duration: p } });
                return;
            }
            let { options: y } = l;
            if (!y) {
                l.options = { easing: u, duration: p };
                return;
            }
            y.easing || (y.easing = u), c && (y.duration = p);
        });
    var ft = fe(Ut(), 1);
    var mt = ({ elements: t, values: e }, r) => {
        let o;
        r ? (e.delete(r), (o = t.filter((s) => s.value === r))) : (e.clear(), (o = t));
        for (let { element: s } of o) it(s);
    };
    function q(t) {
        return t == null ? void 0 : t.trim().toLowerCase();
    }
    var ut = (t, e) => {
        !t.closest(`.${Ct.item}`) || (t.id = `${t.id}-${e}`);
    };
    var I = (t, e, r) => {
        var u, p;
        let { value: o } = t,
            { elements: s, values: i, mode: n } = e,
            { value: a, mode: l, type: c, activeCSSClass: m } = r;
        switch (c) {
            case "checkbox": {
                let { checked: y } = t;
                if (!a) break;
                (u = t.parentElement) == null || u.classList[y ? "add" : "remove"](m), i[y ? "add" : "delete"](a);
                break;
            }
            case "radio": {
                let { checked: y } = t;
                for (let { element: g, type: S } of s) {
                    if (S !== "radio") return !1;
                    let d = g.checked;
                    (p = g.parentElement) == null || p.classList[d ? "add" : "remove"](m);
                }
                if (!y || !a) break;
                i.clear(), i.add(a);
                break;
            }
            default: {
                if (((r.value = o), t.classList[o ? "add" : "remove"](m), n === "range")) {
                    let y = [...i];
                    (y[l === "from" ? 0 : 1] = o), y.some((g) => !!g) ? (e.values = new Set(y)) : i.clear();
                    break;
                }
                i.clear(), o && i.add(o);
                break;
            }
        }
        return !0;
    };
    var {
        field: { key: or },
        reset: { key: sr },
        range: { key: ir },
        match: { key: nr },
        tagFormat: { key: ar },
        tagCategory: { key: lr },
        hideEmpty: { key: cr, values: mr },
        highlight: { key: ur, values: pr },
        highlightCSS: { key: fr },
        activeCSS: { key: dr },
        debouncing: { key: gr },
    } = L,
        { checkboxField: yr, radioField: Sr } = H,
        Bt = (t) => {
            let e = t.querySelector("form"),
                r = t.querySelector('input[type="submit"]'),
                o = t.querySelectorAll(R("element", "reset", { operator: "prefixed" })),
                s = new Map();
            for (let i of o) {
                let n = i.getAttribute(sr),
                    a = n ? [...new Set(V(n))].map((l) => q(l)) : [];
                s.set(i, a);
            }
            return { form: e, submitButton: r, resetButtonsData: s };
        },
        Gt = (t, e, r, o, s) => {
            let i = [];
            return (
                t.querySelectorAll(R("field")).forEach((a, l) => {
                    let c = a.getAttribute(or);
                    if (!c) return;
                    let m = [...new Set(V(c))],
                        u = m.map((h) => q(h));
                    if (!u.length) return;
                    let p = Er(a, m, u, e, r, o, s);
                    if (!p) return;
                    let [y, g] = p,
                        S = i.find((h) => B(u, h.filterKeys)),
                        d = S || $(_({}, y), { elements: [] });
                    S || i.push(d);
                    let E = a.closest(`.${yr}, .${Sr}`);
                    if (E) {
                        let h = a instanceof HTMLInputElement,
                            T = h ? "true" : a.textContent || "",
                            w = h ? a : E.querySelector("input");
                        ut(w, l);
                        let Q = C("filterResultsCount", { operator: "prefixed", scope: E }),
                            N = a.getAttribute(cr) === mr.true ? E : void 0,
                            Et = $(_({}, g), { value: T, resultsElement: Q, hideEmpty: N, element: w, type: w.type });
                        d.elements.push(Et), I(w, d, Et);
                        return;
                    }
                    if (!G(a) || a.type === "submit") return;
                    let { type: F, value: x } = a;
                    ut(a, l);
                    let k = $(_({}, g), { element: a, type: F, value: x });
                    d.elements.push(k), F === "select-one" && I(a, d, k);
                }),
                i
            );
        },
        Er = (t, e, r, o, s, i, n) => {
            let [a, l, c, m, u, p] = [nr, ar, dr, gr, ur, fr].map((K) => t.getAttribute(K)),
                y = M(a, Lt) ? a : void 0,
                g = M(l, J) ? l : void 0,
                S = t.getAttribute(lr),
                d = c || o,
                E = m ? parseFloat(m) : s,
                F = i || u === pr.true,
                x = p || n,
                k = t.getAttribute(ir),
                h,
                T;
            for (let [K, N] of at(_t))
                if (M(k, N)) {
                    (h = K), (T = k);
                    break;
                }
            return [
                { match: y, filterKeys: r, originalFilterKeys: e, highlight: F, tagFormat: g, tagCategory: S, highlightCSSClass: x, mode: h, values: new Set() },
                { activeCSSClass: d, debouncing: E, resultsCount: 0, mode: T, hidden: !1 },
            ];
        };
    var hr = Intl.DateTimeFormat(),
        pt = (t) => {
            if (!!t) return new Date(hr.format(new Date(t)));
        };
    var Yt = (t) => {
        if (!!t) return parseFloat(t.replace(/[^0-9.-]+/g, ""));
    };
    var qt = (t, e, r, o) => (o && Kt(t), r ? !0 : e.every((s) => Tr(t, s))),
        Tr = (t, { filterKeys: e, values: r, match: o, mode: s, highlight: i, highlightCSSClass: n, elements: a }) => {
            let l = [...r];
            if (!l.length) return !0;
            let c = e.includes("*");
            c && (e = Object.keys(t.props));
            let m = e.filter((u) => {
                let p = t.props[u];
                if (!p) return !1;
                let { values: y, highlightData: g, type: S, range: d } = p,
                    E = [...y];
                if (!E.length) return !1;
                if (s === "range") {
                    let [x] = E,
                        [k, h] = l,
                        T = jt(x, k, h, S);
                    return T && i && (g == null || g.set(x, { highlightCSSClass: n })), T;
                }
                let F = l.filter((x) => {
                    if (d === "from" || d === "to") {
                        let [h, T] = E,
                            w = jt(x, h, T, S);
                        return w && i && (g == null || g.set(h, { highlightCSSClass: n }), g == null || g.set(T, { highlightCSSClass: n })), w;
                    }
                    return E.some((h) => {
                        let T;
                        if (S === "date" && !c) {
                            let [w, Q] = [x, h].map((K) => {
                                var N;
                                return (N = pt(K)) == null ? void 0 : N.getTime();
                            });
                            T = w === Q;
                        } else a.some(({ type: w }) => !["checkbox", "radio", "select-one"].includes(w)) || e.length > 1 ? (T = h.toLowerCase().includes(x.toLowerCase())) : (T = x.toLowerCase() === h.toLowerCase());
                        return T && i && (g == null || g.set(h, { highlightCSSClass: n, filterValue: x })), T;
                    });
                });
                return o === "all" ? F.length === l.length : F.length > 0;
            });
            return o === "all" ? m.length === e.length : m.length > 0;
        },
        jt = (t, e, r, o) => {
            let [s, i, n] = [t, e, r].map((a) => (o === "date" ? pt(a) : Yt(a)));
            return s ? (!e && typeof n != "undefined" ? s <= n : !r && typeof i != "undefined" ? s >= i : typeof n == "undefined" || typeof i == "undefined" ? !1 : s >= i && s <= n) : !1;
        };
    var { location: Qt, history: br } = window,
        zt = (t) => {
            let e = !1,
                { filtersData: r } = t,
                o = new URL(Qt.href),
                { searchParams: s } = o;
            for (let i of s) {
                let n = q(i[0]),
                    a = i[1],
                    l = r.find(({ filterKeys: p }) => p.length === 1 && p.includes(n));
                if (!l) continue;
                let c = V(a, void 0, void 0, !1);
                if (!c.length) continue;
                e = !0;
                let { elements: m, mode: u } = l;
                if (u === "range") {
                    let [p, y] = c,
                        g = m.filter(({ mode: d }) => d === "from"),
                        S = m.filter(({ mode: d }) => d === "to");
                    if (p && g.length)
                        for (let d of g) {
                            let { element: E, type: F } = d;
                            F === "checkbox" || F === "radio" ? D(E, !0) : D(E, p), I(E, l, d);
                        }
                    if (y && S)
                        for (let d of S) {
                            let { element: E, type: F } = d;
                            F === "checkbox" || F === "radio" ? D(E, !0) : D(E, y), I(E, l, d);
                        }
                    continue;
                }
                for (let p of c)
                    for (let y of m) {
                        let { element: g, value: S, type: d } = y;
                        if (S === p && (d === "checkbox" || d === "radio")) D(g, !0);
                        else if (!S && d !== "checkbox" && d !== "radio") D(g, p);
                        else continue;
                        I(g, l, y);
                    }
            }
            return e;
        },
        Wt = (t) => {
            let e = new URL(Qt.href),
                { searchParams: r } = e;
            for (let {
                filterKeys: [o],
                values: s,
            } of t) {
                if (!s.size) {
                    r.delete(o);
                    continue;
                }
                let i = [...s].join(",");
                r.set(o, i);
            }
            br.replaceState(null, "", e.toString());
        };
    var {
        field: { key: Cr },
        range: { key: Fr },
        type: { key: xr },
    } = L,
        dt = class {
            constructor(e, r, { resultsElement: o, showQueryParams: s, highlightAll: i, highlightCSSClass: n, activeCSSClass: a, debouncing: l }) {
                this.formBlock = e;
                this.listInstance = r;
                this.restartingFilters = !1;
                let { form: c, submitButton: m, resetButtonsData: u } = Bt(e);
                (this.form = c),
                    (this.submitButton = m),
                    (this.resetButtonsData = u),
                    (this.resultsElement = o),
                    (this.showQueryParams = s),
                    (this.activeCSSClass = a),
                    (this.debouncing = l),
                    (this.highlightAll = i),
                    (this.highlightCSSClass = n),
                    (this.submitButtonVisible = !!m && z(m)),
                    this.init();
            }
            init() {
                return f(this, null, function* () {
                    let { listInstance: e, hideEmptyFilters: r, showFilterResults: o } = this;
                    this.storeFiltersData();
                    for (let s of e.items) s.collectProps({ fieldKey: Cr, rangeKey: Fr, typeKey: xr });
                    tt(this, e), rt(this, e), r && Z(this), o && et(this), zt(this), yield P(), this.applyFilters(), this.listenEvents();
                });
            }
            listenEvents() {
                return f(this, null, function* () {
                    let { form: e, resetButtonsData: r, submitButton: o } = this;
                    e.addEventListener("submit", (s) => this.handleSubmit(s)), e.addEventListener("input", (s) => this.handleInputEvents(s));
                    for (let [s, i] of r) s == null || s.addEventListener("click", () => this.resetFilters(i));
                    o &&
                        window.addEventListener(
                            "resize",
                            (0, ft.default)(() => {
                                this.submitButtonVisible = z(o);
                            }, 50)
                        );
                });
            }
            handleInputEvents(r) {
                return f(this, arguments, function* ({ target: e }) {
                    let { submitButtonVisible: o, filtersData: s, restartingFilters: i } = this;
                    if (!G(e)) return;
                    let n,
                        a = s.find(({ elements: m }) => ((n = m.find((u) => u.element === e)), n));
                    if (!a || !n || !I(e, a, n) || i || o) return;
                    let { debouncing: c } = n;
                    this.debouncedApplyFilters || (this.debouncedApplyFilters = (0, ft.default)(this.applyFilters, c)), yield this.debouncedApplyFilters();
                });
            }
            handleSubmit(e) {
                return f(this, null, function* () {
                    e.preventDefault(), e.stopImmediatePropagation(), yield this.applyFilters();
                });
            }
            toggleFiltersState(e) {
                return f(this, null, function* () {
                    let { listInstance: r, filtersActive: o } = this,
                        s = !e;
                    o !== s && ((this.filtersActive = s), r.initialElement && (yield r.displayElement(s ? "initialElement" : "wrapper", !1, !1), yield r.displayElement(s ? "wrapper" : "initialElement", !0, o !== void 0)));
                });
            }
            applyFilters(e, r = !0) {
                return f(this, null, function* () {
                    this.debouncedApplyFilters = void 0;
                    let { listInstance: o, filtersData: s, filtersActive: i, highlightResults: n, tagsInstance: a, showQueryParams: l } = this,
                        { items: c, initialElement: m } = o,
                        u = s.every(({ values: p }) => !p.size);
                    if (u && !i) {
                        yield this.toggleFiltersState(u);
                        return;
                    }
                    for (let p of c) p.valid = qt(p, s, u, n);
                    e ||
                        (yield o.switchPage(1, !1),
                            o.scrollToAnchor(),
                            l && Wt(s),
                            yield Promise.all([
                                (() =>
                                    f(this, null, function* () {
                                        u ? (yield this.toggleFiltersState(u), yield o.renderItems(!1, !m)) : (yield o.renderItems(!1, !m), yield this.toggleFiltersState(u));
                                    }))(),
                                (() =>
                                    f(this, null, function* () {
                                        r && (yield a == null ? void 0 : a.syncTags());
                                    }))(),
                            ]));
                });
            }
            resetFilters(e, r) {
                return f(this, null, function* () {
                    this.restartingFilters = !0;
                    let { filtersData: o } = this;
                    if (!e || !e.length) for (let i of o) mt(i);
                    else {
                        let i = o.find((n) => B(n.filterKeys, e));
                        if (!i) return;
                        mt(i, r);
                    }
                    let s = !r;
                    yield this.applyFilters(!1, s), (this.restartingFilters = !1);
                });
            }
            addTagsInstance(e) {
                return f(this, null, function* () {
                    (this.tagsInstance = e), yield e.syncTags();
                });
            }
            storeFiltersData() {
                let { form: e, activeCSSClass: r, debouncing: o, highlightAll: s, highlightCSSClass: i } = this,
                    n = Gt(e, r, o, s, i);
                return (
                    (this.filtersData = n),
                    (this.showFilterResults = n.some(({ elements: a }) => a.some(({ resultsElement: l }) => l))),
                    (this.hideEmptyFilters = n.some(({ elements: a }) => a.some(({ hideEmpty: l }) => l))),
                    (this.highlightResults = n.some(({ highlight: a }) => a)),
                    n
                );
            }
        };
    var gt = ({ values: t, textNode: e, filterData: { originalFilterKeys: r, mode: o, tagFormat: s, tagCategory: i } }, n) => {
        let a = i || r.join(", "),
            l;
        o === "range" ? (l = `[${t.map((m) => m || "--").join(", ")}]`) : ([l] = t);
        let c;
        l === "true" ? (c = a) : (s || n) === "category" ? (c = `${a}: ${l}`) : (c = l), (e.textContent = c);
    },
        Xt = (t) => !!C("tagRemove", { operator: "prefixed", scope: t });
    var yt = class {
        constructor(e, r, o, s) {
            this.template = e;
            this.filtersInstance = r;
            this.listInstance = o;
            this.globalTagsFormat = s;
            this.tagsData = [];
            this.hasRemoveTrigger = !1;
            (this.wrapper = e.parentElement || v.alert("The tags have no parent wrapper.", "error")), this.init();
        }
        init() {
            let { template: e, wrapper: r } = this;
            e.remove(), (this.hasRemoveTrigger = Xt(e)), r.addEventListener("click", (o) => this.handleClick(o));
        }
        handleClick(e) {
            let { target: r } = e;
            if (!(r instanceof Element)) return;
            let { hasRemoveTrigger: o, tagsData: s, listInstance: i } = this,
                n = r.closest(R("element", "tagTemplate", { instanceIndex: i.getInstanceIndex(L.element.key) }));
            if (!n) return;
            let a = r.closest(R("element", "tagRemove", { operator: "prefixed" }));
            if (o && !a) return;
            let l = s.find(({ element: c }) => c === n);
            l && this.removeTag(l, !0);
        }
        addTag(e, r) {
            return f(this, null, function* () {
                let {
                    wrapper: o,
                    template: s,
                    tagsData: i,
                    globalTagsFormat: n,
                    listInstance: { listAnimation: a },
                } = this,
                    l = nt(s),
                    c = C("tagText", { operator: "prefixed", scope: l }) || l,
                    m = { element: l, values: r, textNode: c, filterData: e };
                if ((gt(m, n), i.push(m), a)) {
                    let { animateIn: u, options: p } = a;
                    yield u(l, _({ target: o }, p));
                } else (l.style.opacity = "1"), o.appendChild(l);
            });
        }
        updateTag(e, r) {
            return f(this, null, function* () {
                let { globalTagsFormat: o } = this;
                (e.values = r), gt(e, o);
            });
        }
        removeTag(e, r) {
            return f(this, null, function* () {
                let {
                    element: o,
                    values: s,
                    filterData: { filterKeys: i },
                } = e,
                    {
                        tagsData: n,
                        filtersInstance: a,
                        listInstance: { listAnimation: l },
                    } = this;
                (this.tagsData = n.filter((c) => c !== e)),
                    yield Promise.all([
                        Promise.all(
                            s.map((c) =>
                                f(this, null, function* () {
                                    if (r) return a.resetFilters(i, c);
                                })
                            )
                        ),
                        (() =>
                            f(this, null, function* () {
                                if (l) {
                                    let { animateOut: c, options: m } = l;
                                    yield c(o, _({ remove: !0 }, m));
                                } else o.remove();
                            }))(),
                    ]);
            });
        }
        syncTags() {
            return f(this, null, function* () {
                let {
                    tagsData: e,
                    filtersInstance: { filtersData: r },
                } = this;
                yield Promise.all(
                    r.map((o) => {
                        let { values: s, mode: i } = o,
                            n = [...s],
                            a = e.filter((m) => m.filterData === o);
                        if (a.length === 1 && (n.length === 1 || (i === "range" && n.length))) {
                            let [m] = a;
                            this.updateTag(m, n);
                            return;
                        }
                        let l = [...n].filter((m) => !a.some(({ values: u }) => u.includes(m))),
                            c = a.filter(({ values: m }) => m.every((u) => !n.includes(u)));
                        return Promise.all([
                            (() =>
                                f(this, null, function* () {
                                    return i === "range" && l.length ? this.addTag(o, l) : Promise.all(l.map((m) => this.addTag(o, [m])));
                                }))(),
                            Promise.all(c.map((m) => this.removeTag(m))),
                        ]);
                    })
                );
            });
        }
    };
    var {
        element: { key: Jt },
        duration: { key: wr },
        easing: { key: Ar },
        showQuery: { key: vr, values: Mr },
        tagFormat: { key: Lr },
        highlight: { key: _r, values: Ir },
        highlightCSS: { key: kr },
        activeCSS: { key: Dr },
        debouncing: { key: Rr },
    } = L,
        Zt = (t) => {
            var g, S;
            let e = t.getInstanceIndex(Jt),
                r = C("filters", { instanceIndex: e });
            if (!r) return;
            let o = r.closest(`.${H.formBlock}`);
            if (!o) return;
            let s = C("empty", { instanceIndex: e });
            s && t.addEmptyElement(s);
            let i = C("initial", { instanceIndex: e });
            if ((i && (t.initialElement = i), !t.scrollAnchor)) {
                let d = C("scrollAnchor", { instanceIndex: e });
                d && (t.scrollAnchor = d);
            }
            if (!t.itemsCount) {
                let d = C("itemsCount", { instanceIndex: e });
                d && t.addItemsCount(d);
            }
            let n = C("resultsCount", { instanceIndex: e }),
                a = t.getAttribute(vr) === Mr.true,
                l = t.getAttribute(_r) === Ir.true,
                c = t.getAttribute(kr) || It,
                m = t.getAttribute(Dr) || kt,
                u = parseFloat(t.getAttribute(Rr) || Dt),
                {
                    fsAttributes: { cms: p },
                } = window;
            if ((p.filtersInstances || (p.filtersInstances = []), p.filtersInstances[e || 0])) return;
            let y = new dt(o, t, { resultsElement: n, showQueryParams: a, highlightAll: l, highlightCSSClass: c, activeCSSClass: m, debouncing: u });
            return (g = p.filtersInstances)[(S = e || 0)] || (g[S] = y), Vt(t, { durationKey: wr, easingKey: Ar }), y;
        },
        te = (t, e) =>
            f(void 0, null, function* () {
                let r = t.getInstanceIndex(Jt),
                    o = C("tagTemplate", { instanceIndex: r });
                if (!o) return;
                let s = t.getAttribute(Lr),
                    i = M(s, J) ? s : void 0,
                    n = new yt(o, e, t, i);
                return yield e.addTagsInstance(n), n;
            });
    var St = () =>
        f(void 0, null, function* () {
            var o, s;
            let t = yield X();
            if (!t) return [];
            let e = t.createCMSListInstances([R("element", "list", { operator: "prefixed" })]),
                r = (yield Promise.all(e.map(Kr))).filter(lt);
            return (s = (o = window.fsAttributes[U]).resolve) == null || s.call(o, r), r;
        }),
        Kr = (t) =>
            f(void 0, null, function* () {
                let e = Zt(t);
                if (!!e) return Ot(e, t), yield te(t, e), e;
            });
    wt();
    X();
    P();
    var ee, re;
    (ee = window.fsAttributes)[(re = U)] || (ee[re] = {});
    var { preventsLoad: Nr } = Ft(),
        oe = window.fsAttributes[U];
    oe.version = At;
    Nr ? (oe.init = St) : (window.Webflow || (window.Webflow = []), window.Webflow.push(St));
}
