/*
 Copyright (c) 2009-2013 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.2.1
 Updated: 2013-02-23

 Requires jQuery 1.5 or higher
*/
jQuery.reel || function (m, sb, aa, r) {
    function Tb(g) {
        return p.instances.push(g[0]) && g
    }

    function Ub(g) {
        return (p.instances = p.instances.not(Fa(g.attr(ia)))) && g
    }

    function ba(g) {
        return p.instances.first().data(g)
    }

    function Vb(g) {
        return "data:image/gif;base64,R0lGODlh" + g
    }

    function V(g) {
        return "<" + g + "/>"
    }

    function y(g) {
        return "." + (g || "")
    }

    function Ga(g) {
        return g.replace(qa, p.cdn)
    }

    function ra(g) {
        return "url('" + ab(g) + "')"
    }

    function tb(g, j) {
        return typeof j == bb ? j[g] : j
    }

    function sa(g, j, s) {
        return ub(g, Ha(j, s))
    }

    function cb(g, j) {
        return K(g) *
            (j ? -1 : 1)
    }

    function Ia(g) {
        return ja ? g.touch || g.originalEvent.touches[0] : g
    }

    function A(g) {
        return g === r ? 0 : typeof g == vb ? g : g + "px"
    }

    function Fa(g) {
        return "#" + g
    }

    function Wb(g, j, s) {
        for (; g.length < j;) g = s + g;
        return g
    }

    function ab(g) {
        return encodeURI(decodeURI(g))
    }

    function wb(g) {
        try {
            console.warn("Deprecation - Please consult https://github.com/pisi/Reel/wiki/Deprecations")
        } catch (j) {}
        return g
    }
    if (!(!m || +m().jquery.replace(".", R).substr(0, 2) < 15)) {
        var p = m.reel = {
            version: "1.2-devel",
            def: {
                frame: 1,
                frames: 36,
                loops: true,
                clickfree: false,
                draggable: true,
                scrollable: true,
                steppable: true,
                throwable: true,
                wheelable: true,
                cw: false,
                revolution: r,
                stitched: 0,
                directional: false,
                row: 1,
                rows: 0,
                orbital: 0,
                vertical: false,
                inversed: false,
                footage: 6,
                spacing: 0,
                horizontal: true,
                suffix: "-reel",
                image: r,
                images: "",
                path: "",
                preload: "fidelity",
                speed: 0,
                delay: 0,
                timeout: 2,
                rebound: 0.5,
                entry: r,
                opening: 0,
                brake: 0.23,
                velocity: 0,
                tempo: 36,
                laziness: 6,
                cursor: r,
                hint: "",
                indicator: 0,
                klass: "",
                preloader: 2,
                area: r,
                attr: {},
                annotations: r,
                graph: r,
                monitor: r,
                step: r,
                steps: r
            },
            fn: {
                reel: function () {
                    var g =
                        arguments,
                        j = m(this),
                        s = j.data(),
                        w = g[0] || {}, v = g[1];
                    if (typeof w == "object") {
                        var c = m.extend({}, p.def, w);
                        g = j.filter(db).unreel().filter(function () {
                            var i = m(this),
                                f = c.attr,
                                d = f.src || i.attr("src"),
                                H = f.width || i.width();
                            i = f.height || i.height();
                            if (d && H && i) return true
                        });
                        var W = [];
                        c.step && (c.frame = c.step);
                        c.steps && (c.frames = c.steps);
                        g.each(function () {
                            var i = m(this),
                                f = function (a, b) {
                                    return i.reel(a, b) && b
                                }, d = function (a) {
                                    return i.reel(a)
                                }, H = {
                                    setup: function () {
                                        if (!i.hasClass(C)) {
                                            f(Ja, c);
                                            var a = i.attr(c.attr).attr("src"),
                                                b = f(ia, i.attr(ia) || i.attr(ia, C + "-" + +new Date).attr(ia)),
                                                e = i.attr(ta),
                                                h = m.extend({}, i.data()),
                                                k = c.images,
                                                o = c.stitched,
                                                l = c.loops,
                                                n = c.orbital,
                                                t = c.revolution,
                                                B = c.rows,
                                                q = c.footage,
                                                D = p.re.sequence.exec(k);
                                            k = f(ca, D ? p.sequence(D, c, d) : k || []);
                                            D = {
                                                x: i.width(),
                                                y: i.height()
                                            };
                                            var u = f(L, n && q || B <= 1 && k.length || c.frames),
                                                da = B > 1 || n;
                                            f(Ka, tb("x", t) || o / 2 || D.x * 2);
                                            f(xb, !da ? 0 : tb("y", t) || (B > 3 ? D.y : D.y / (5 - B)));
                                            B = o ? 1 : ua(u / q);
                                            b = Fa(b + c.suffix);
                                            t = i[0].className || R;
                                            q = m(V(va), {
                                                id: b.substr(1),
                                                "class": t + E + Xb + E + yb + "0"
                                            });
                                            q = i.wrap(q.addClass(c.klass)).attr({
                                                "class": C
                                            });
                                            W.push(Tb(q)[0]);
                                            q = q.parent().bind(H.instance);
                                            f(eb, k.length ? R : c.image || a.replace(p.re.image, "$1" + c.suffix + ".$2"));
                                            f(zb, []);
                                            f(Ab, c.spacing);
                                            f(fb, B);
                                            f(J, D);
                                            f(La, 1 / (u - (l && !o ? 0 : 1)));
                                            f(Bb, o - (l ? 0 : D.x));
                                            f(gb, 0);
                                            f(Cb, b);
                                            f(N, f(wa, c.speed) < 0);
                                            f(ea, 0);
                                            f(ka, c.vertical);
                                            f(S, 0);
                                            f(la, cb(1, !c.cw && !o));
                                            f(Ma, {});
                                            f(xa, false);
                                            f(Na, f(hb, 0));
                                            f(Oa, f(Pa, 0));
                                            f(ya, false);
                                            f(ib, false);
                                            f(X, false);
                                            f(Db, c.brake);
                                            f(jb, !! n);
                                            f(fa, c.tempo / (p.lazy ? c.laziness : 1));
                                            f(ma, -1);
                                            f(Qa, c.annotations || q.unbind(y(Qa)) && {});
                                            f(Eb, {
                                                src: a,
                                                classes: t,
                                                style: e || R,
                                                data: h
                                            });
                                            c.steppable || q.unbind("up.steppable");
                                            c.indicator || q.unbind(".indicator");
                                            F(R, {
                                                width: D.x,
                                                height: D.y,
                                                overflow: kb,
                                                position: "relative"
                                            });
                                            F(ga + E + y(C), {
                                                display: Fb
                                            });
                                            T.bind(H.pool);
                                            i.trigger("setup")
                                        }
                                    },
                                    instance: {
                                        teardown: function () {
                                            var a = i.data(Eb);
                                            i.parent().unbind(H.instance);
                                            d(ta).remove();
                                            d(Ra).unbind(U);
                                            Ub(i.unbind(U).removeData().siblings().unbind(U).remove().end().attr({
                                                "class": a.classes,
                                                src: a.src,
                                                style: a.style
                                            }).data(a.data).unwrap());
                                            Sa();
                                            T.unbind(H.pool);
                                            Y.unbind(Z)
                                        },
                                        setup: function () {
                                            function a(n) {
                                                return i.trigger("down", [Ia(n).clientX, Ia(n).clientY, n]) && n.give
                                            }

                                            function b(n, t) {
                                                return !t || i.trigger("wheel", [t, n]) && n.give
                                            }
                                            var e = d(J);
                                            d(L);
                                            i.attr(ia);
                                            var h = c.rows,
                                                k = c.stitched,
                                                o = i.parent(),
                                                l = f(Ra, m(c.area || o));
                                            h = c.rows || 1;
                                            F(E + y(C), {
                                                MozUserSelect: za,
                                                WebkitUserSelect: za
                                            });
                                            if (ja) {
                                                F(E + y(C), {
                                                    WebkitBackgroundSize: d(ca).length ? !k ? r : A(k) + E + A(e.y) : k && A(k) + E + A((e.y + c.spacing) * h - c.spacing) || A(e.x * c.footage) + E + A(e.y * d(fb) * h * (c.directional ? 2 : 1))
                                                });
                                                l.bind(Yb, a)
                                            } else {
                                                k = c.cursor;
                                                e = k == Gb ? Zb : k || $b;
                                                k = k == Gb ? ac + E + "!important" : r;
                                                F(R, {
                                                    cursor: Ga(e)
                                                });
                                                F(y(lb), {
                                                    cursor: "wait"
                                                });
                                                F(y(Ta) + ga + y(Ta) + " *", {
                                                    cursor: Ga(k || e)
                                                }, true);
                                                l.bind(c.wheelable ? bc : null, b).bind(c.clickfree ? cc : dc, a).bind("dragstart", function () {
                                                    return false
                                                })
                                            }
                                            c.hint && l.attr("title", c.hint);
                                            c.indicator && o.append(Aa("x"));
                                            h > 1 && c.indicator && o.append(Aa("y"));
                                            c.monitor && o.append(Hb = m(V(va), {
                                                "class": Ib
                                            })) && F(E + y(Ib), {
                                                position: Ua,
                                                left: 0,
                                                top: 0
                                            });
                                            F(E + y(Jb), {
                                                display: za
                                            })
                                        },
                                        preload: function () {
                                            function a(u, da) {
                                                setTimeout(function () {
                                                    da.parent().length && da.attr({
                                                        src: ab(u)
                                                    })
                                                }, (B - t.length) * 2)
                                            }
                                            var b = d(J),
                                                e = i.parent(),
                                                h = d(ca),
                                                k = !h.length,
                                                o = d(L),
                                                l = c.footage,
                                                n = p.preload[c.preload] || p.preload[p.def.preload],
                                                t = k ? [d(eb)] : n(h.slice(0), c, d),
                                                B = t.length;
                                            f(S, k ? 0.5 : 0);
                                            h = [];
                                            e.addClass(lb).append(na());
                                            f(ta, m("<" + ta + ' type="text/css">' + F.rules.join("\n") + "</" + ta + ">").prependTo(mb));
                                            for (i.trigger("stop"); t.length;) {
                                                n = c.path + t.shift();
                                                var q = b.x * (!k ? 1 : l),
                                                    D = b.y * (!k ? 1 : o / l) * (!c.directional ? 1 : 2);
                                                q = m(V(db)).attr({
                                                    "class": Jb,
                                                    width: q,
                                                    height: D
                                                }).appendTo(e);
                                                q.bind("load error abort", function () {
                                                    return !!m(this).parent().length &&
                                                        i.trigger("preloaded") && false
                                                });
                                                a(n, q);
                                                h.push(n)
                                            }
                                            f(zb, h)
                                        },
                                        preloaded: function () {
                                            var a = d(ca).length || 1,
                                                b = f(S, Ha(d(S) + 1, a));
                                            if (b === a) {
                                                i.parent().removeClass(lb).unbind(S, H.instance.preloaded);
                                                i.trigger("loaded")
                                            }
                                            b === 1 && i.trigger("frameChange", [r, d($)])
                                        },
                                        loaded: function () {
                                            d(ca).length > 1 || i.css({
                                                backgroundImage: ra(c.path + d(eb))
                                            }).attr({
                                                src: Ga(Kb)
                                            });
                                            c.stitched && i.attr({
                                                src: Ga(Kb)
                                            });
                                            d(ib) || f(ea, c.velocity || 0)
                                        },
                                        opening: function () {
                                            if (!c.opening) return i.trigger("openingDone");
                                            f(X, true);
                                            f(nb, !d(wa));
                                            var a =
                                                c.entry || c.speed,
                                                b = d(z),
                                                e = c.opening;
                                            f(z, b - a * e);
                                            f(ma, ua(e * ba(fa)))
                                        },
                                        openingDone: function () {
                                            f(Va, false);
                                            f(X, false);
                                            var a = oa + y(X);
                                            T.unbind(a, H.pool[a]);
                                            if (c.delay > 0) O = setTimeout(function () {
                                                i.trigger("play")
                                            }, c.delay * 1E3);
                                            else i.trigger("play")
                                        },
                                        play: function (a, b) {
                                            b = f(wa, b || d(wa));
                                            f(N, b < 0);
                                            a = f(Va, !! b);
                                            f(nb, !a);
                                            ob()
                                        },
                                        pause: function () {
                                            I()
                                        },
                                        stop: function () {
                                            var a = f(nb, true);
                                            f(Va, !a)
                                        },
                                        down: function (a, b, e, h) {
                                            function k(l) {
                                                return i.trigger("pan", [Ia(l).clientX, Ia(l).clientY, l]) && l.give
                                            }

                                            function o(l) {
                                                return i.trigger("up", [l]) && l.give
                                            }
                                            if (!(h && h.button != ec && !c.clickfree))
                                                if (c.draggable) {
                                                    f(xa, d($));
                                                    a = c.clickfree;
                                                    f(ea, 0);
                                                    Wa = Xa(d(Ka), b, e);
                                                    ja || h && h.preventDefault();
                                                    I();
                                                    Sa();
                                                    P = false;
                                                    m(Lb, Y).addClass(Ta);
                                                    ja ? Y.bind(fc, k).bind(gc + E + hc, o) : (a ? d(Ra) : Y).bind(ic, k).bind(a ? jc : kc, o)
                                                }
                                        },
                                        up: function () {
                                            f(xa, false);
                                            f(ya, false);
                                            var a = c.throwable,
                                                b = K(Ba[0] + Ba[1]) / 60;
                                            Q = f(ea, !a ? 0 : a === true ? b : Ha(a, b)) ? 1 : 0;
                                            I();
                                            Sa();
                                            m(Lb, Y).removeClass(Ta);
                                            (c.clickfree ? d(Ra) : Y).unbind(Z)
                                        },
                                        pan: function (a, b, e, h) {
                                            if (c.draggable && pb) {
                                                pb = false;
                                                I();
                                                var k = c.rows,
                                                    o = c.orbital;
                                                a = ja && !d(ya) && k <= 1 && !o && c.scrollable;
                                                var l = {
                                                    x: b - Wa.x,
                                                    y: e - Wa.y
                                                };
                                                if (h && a && K(l.x) < K(l.y)) return h.give = true;
                                                if (K(l.x) > 0 || K(l.y) > 0) {
                                                    h && (h.give = false);
                                                    P = true;
                                                    Wa = {
                                                        x: b,
                                                        y: e
                                                    };
                                                    h = d(Ka);
                                                    a = d(Ma);
                                                    var n = d(ka),
                                                        t = f(z, Mb(n ? e - a.y : b - a.x, d(Na), h, d(Oa), d(Pa), d(la), n ? e - a.y : b - a.x));
                                                    f(ya, d(ya) || d($) != d(xa));
                                                    (l = Nb(n ? l.y : l.x || 0)) && f(N, l < 0);
                                                    if (o && d(jb)) {
                                                        f(ka, K(e - a.y) > K(b - a.x));
                                                        a = Xa(h, b, e)
                                                    }
                                                    if (k > 1) {
                                                        d(J);
                                                        k = d(xb);
                                                        o = d(hb);
                                                        l = -o * k;
                                                        f(Ca, p.math.envelope(e - a.y, o, k, l, l + k, -1))
                                                    }!(t % 1) && !c.loops && Xa(h, b, e)
                                                }
                                            }
                                        },
                                        wheel: function (a, b, e) {
                                            if (b) {
                                                x =
                                                    true;
                                                a = ua(ha.sqrt(K(b)) / 2);
                                                a = cb(a, b > 0);
                                                b = 0.0833 * d(Ka);
                                                Xa(b);
                                                a && f(N, a < 0);
                                                f(ea, 0);
                                                f(z, Mb(a, d(Na), b, d(Oa), d(Pa), d(la)));
                                                e && e.preventDefault();
                                                e && (e.give = false);
                                                I();
                                                i.trigger("up", [e])
                                            }
                                        },
                                        fractionChange: function (a, b, e) {
                                            if (b !== r) return wb(f(z, b));
                                            a = 1 + Ya(e / d(La));
                                            b = c.rows > 1;
                                            e = c.orbital;
                                            f(jb, !! e && (a <= e || a >= c.footage - e + 2));
                                            if (b) a += (d(Za) - 1) * d(L);
                                            f($, a)
                                        },
                                        tierChange: function (a, b, e) {
                                            if (b === r) {
                                                a = f(Za, M(Da(e, 1, c.rows)));
                                                b = d(L);
                                                e = d($) % b || b;
                                                f($, e + a * b - b)
                                            }
                                        },
                                        rowChange: function (a, b, e) {
                                            if (b !== r) return f(Za, b);
                                            f(Ca, 1 /
                                                (c.rows - 1) * (e - 1))
                                        },
                                        frameChange: function (a, b, e) {
                                            if (b !== r) return wb(f($, b));
                                            this.className = this.className.replace(p.re.frame_klass, yb + e);
                                            var h = d(L);
                                            b = c.rows;
                                            a = c.path;
                                            var k = e % h || h,
                                                o = !! d(S),
                                                l = ((e - k) / h + 1 - 1) / (b - 1),
                                                n = M(Da(l, 1, b)),
                                                t = d(Za);
                                            o && n === t ? d(Ca) : f(Ca, l);
                                            k = Ha((k - 1) / (h - 1), 0.9999);
                                            l = t * h - h;
                                            h = M(Da(k, l + 1, l + h));
                                            l = K((d(z) || 0) - k) < 1 / (d(L) - 1);
                                            o && h === e && l ? d(z) : f(z, k);
                                            var B = c.footage;
                                            if (c.orbital && d(ka)) {
                                                e = c.inversed ? B + 1 - e : e;
                                                e += B
                                            }
                                            l = c.horizontal;
                                            var q = c.stitched;
                                            h = d(ca);
                                            var D = !h.length || c.stitched;
                                            n = d(Ab);
                                            var u =
                                                d(J);
                                            if (D) {
                                                if (q) {
                                                    e = f(gb, M(Da(k, 0, d(Bb))) % q);
                                                    b = b <= 1 ? 0 : (u.y + n) * (b - t);
                                                    e = [A(-e), A(-b)];
                                                    (b = h.length > 1 && h[t - 1]) && i.css("backgroundImage").search(a + b) < 0 && i.css({
                                                        backgroundImage: ra(a + b)
                                                    })
                                                } else {
                                                    a = e % B - 1;
                                                    a = a < 0 ? B - 1 : a;
                                                    e = Ya((e - 0.1) / B);
                                                    e += b > 1 ? 0 : d(N) ? 0 : d(fb);
                                                    e = e * ((l ? u.y : u.x) + n);
                                                    a = a * ((l ? u.x : u.y) + n);
                                                    e = h.length ? [0, 0] : l ? [A(-a), A(-e)] : [A(-e), A(-a)]
                                                }
                                                i.css({
                                                    backgroundPosition: e.join(E)
                                                })
                                            } else {
                                                e = h[e - 1];
                                                o && i.attr({
                                                    src: ab(a + e)
                                                })
                                            }
                                        },
                                        "fractionChange.indicator": function (a, b, e) {
                                            if (b === r && c.indicator) {
                                                b = d(J);
                                                a = c.indicator;
                                                var h =
                                                    c.orbital;
                                                b = h && d(ka) ? b.y : b.x;
                                                h = h ? c.footage : c.images.length || d(L);
                                                h = ua(b / h);
                                                b -= h;
                                                e = M(Da(e, 0, b));
                                                e = !c.cw || c.stitched ? e : b - e;
                                                Aa.$x.css(d(ka) ? {
                                                    left: 0,
                                                    top: A(e),
                                                    bottom: Ob,
                                                    width: a,
                                                    height: h
                                                } : {
                                                    bottom: 0,
                                                    left: A(e),
                                                    top: Ob,
                                                    width: h,
                                                    height: a
                                                })
                                            }
                                        },
                                        "tierChange.indicator": function (a, b, e) {
                                            if (b === r && c.rows > 1 && c.indicator) {
                                                var h = d(J).y;
                                                a = c.indicator;
                                                b = ua(h / c.rows);
                                                h -= b;
                                                e = M(e * h);
                                                Aa.$y.css({
                                                    left: 0,
                                                    top: e,
                                                    width: a,
                                                    height: b
                                                })
                                            }
                                        },
                                        "setup.annotations": function () {
                                            d(J);
                                            var a = i.parent();
                                            m.each(d(Qa), function (b, e) {
                                                var h = typeof e.node ==
                                                    vb ? m(e.node) : e.node || {};
                                                h = h.jquery ? h : m(V(va), h);
                                                h = h.attr({
                                                    id: b
                                                }).addClass(lc);
                                                var k = e.image ? m(V(db), e.image) : m(),
                                                    o = e.link ? m(V("a"), e.link).click(function () {
                                                        return false
                                                    }) : m();
                                                F(Fa(b), {
                                                    display: za,
                                                    position: Ua
                                                }, true);
                                                e.image || e.link && h.append(o);
                                                e.link || e.image && h.append(k);
                                                e.link && e.image && h.append(o.append(k));
                                                h.appendTo(a)
                                            })
                                        },
                                        "frameChange.annotations": function (a, b, e) {
                                            var h = d(J),
                                                k = c.stitched,
                                                o = d(gb);
                                            d(S) && b === r && m.each(d(Qa), function (l, n) {
                                                l = m(Fa(l));
                                                var t = n.start || 1,
                                                    B = n.end,
                                                    q = e - 1,
                                                    D = n.at ? n.at[q] == "+" :
                                                        false;
                                                q = n.at ? q : q - t + 1;
                                                var u = typeof n.x != bb ? n.x : n.x[q],
                                                    da = typeof n.y != bb ? n.y : n.y[q];
                                                n = u !== r && da !== r && (n.at ? D : q >= 0 && (!B || q <= B - t));
                                                if (k) {
                                                    t = u > k - h.x && o >= 0 && o < h.x;
                                                    u = !(u < h.x && o > k - h.x) ? u : u + k;
                                                    u = !t ? u : u - k;
                                                    u -= o
                                                }
                                                u = {
                                                    display: n ? Fb : za,
                                                    left: A(u),
                                                    top: A(da)
                                                };
                                                l.css(u)
                                            })
                                        },
                                        "up.annotations": function (a, b) {
                                            if (!(P || x)) {
                                                a = m(b.target);
                                                b = a.is("a") ? a : a.parents("a");
                                                a = b.attr("href");
                                                b = b.attr("target") || "self";
                                                if (a) P = b == "_blank" ? !! sb.open(a) : !! (sb[b].location.href = a)
                                            }
                                        },
                                        "up.steppable": function () {
                                            P || x || i.trigger(d(Ma).x - i.offset().left >
                                                0.5 * d(J).x ? "stepRight" : "stepLeft")
                                        },
                                        "stepLeft stepRight": function () {
                                            I()
                                        },
                                        stepLeft: function () {
                                            f(N, false);
                                            f(z, d(z) - d(La) * d(la))
                                        },
                                        stepRight: function () {
                                            f(N, true);
                                            f(z, d(z) + d(La) * d(la))
                                        },
                                        "setup.fu": function () {
                                            f($, c.frame + (c.row - 1) * d(L));
                                            i.trigger("preload")
                                        },
                                        "wheel.fu": function () {
                                            x = false
                                        },
                                        "clean.fu": function () {
                                            i.trigger("teardown")
                                        },
                                        "loaded.fu": function () {
                                            i.trigger("opening")
                                        }
                                    },
                                    pool: {
                                        "tick.reel.preload": function () {
                                            var a = d(J),
                                                b = mc(na.$.css(nc)),
                                                e = d(ca).length || 1,
                                                h = M(1 / e * d(S) * a.x);
                                            na.$.css({
                                                width: b + (h - b) / 3 + 1
                                            });
                                            if (d(S) === e && b > a.x - 1) {
                                                na.$.fadeOut(300, function () {
                                                    na.$.remove()
                                                });
                                                T.unbind(oa + y(Pb), H.pool[oa + y(Pb)])
                                            }
                                        },
                                        "tick.reel": function (a) {
                                            var b = d(ea),
                                                e = ba(fa),
                                                h = c.monitor;
                                            if (Q) {
                                                b = b - d(Db) / e * Q;
                                                b = f(ea, b > 0.1 ? b : (Q = G = 0))
                                            }
                                            h && Hb.text(d(h));
                                            b && Q++;
                                            G && G++;
                                            Nb(0);
                                            pb = true;
                                            if (G && !b) return pa(a);
                                            if (d(xa)) return pa(a, I());
                                            if (!(d(ma) > 0)) {
                                                if (!c.loops && c.rebound) {
                                                    !G && !(d(z) % 1) ? qb++ : (qb = 0);
                                                    qb >= c.rebound * 1E3 / e && f(N, !d(N))
                                                }
                                                a = d(la) * cb(1, d(N));
                                                b = (!d(Va) ? b : K(d(wa)) + b) / ba(fa);
                                                f(z, d(z) - b * a)
                                            }
                                        },
                                        "tick.reel.opening": function () {
                                            if (d(X)) {
                                                var a =
                                                    (c.entry || c.speed) / ba(fa) * (c.cw ? -1 : 1),
                                                    b = f(ma, d(ma) - 1);
                                                f(z, d(z) + a);
                                                b || i.trigger("openingDone")
                                            }
                                        }
                                    }
                                }, pa = function (a, b) {
                                    return a.stopImmediatePropagation() || b
                                }, G, Q = 0,
                                ob = function () {
                                    return G = 0
                                }, I = function () {
                                    clearTimeout(O);
                                    T.unbind(oa + y(X), H.pool[oa + y(X)]);
                                    f(ma, 0);
                                    f(ib, true);
                                    return G = -c.timeout * ba(fa)
                                }, P = false,
                                x = false,
                                O, Hb = m(),
                                na = function () {
                                    var a = c.preloader;
                                    F(E + y(Qb), {
                                        position: Ua,
                                        left: 0,
                                        top: d(J).y - a,
                                        height: a,
                                        overflow: kb,
                                        backgroundColor: "#000"
                                    });
                                    return na.$ = m(V(va), {
                                        "class": Qb
                                    })
                                }, Aa = function (a) {
                                    F(E + y(Rb) +
                                        y(a), {
                                            position: Ua,
                                            width: 0,
                                            height: 0,
                                            overflow: kb,
                                            backgroundColor: "#000"
                                        });
                                    return Aa["$" + a] = m(V(va), {
                                        "class": Rb + E + a
                                    })
                                }, F = function (a, b, e) {
                                    function h(k) {
                                        var o = [];
                                        m.each(k, function (l, n) {
                                            o.push(l.replace(/([A-Z])/g, "-$1").toLowerCase() + ":" + A(n) + ";")
                                        });
                                        return "{" + o.join(R) + "}"
                                    }
                                    e = e ? R : d(Cb);
                                    a = a.replace(/^/, e).replace(ga, ga + e);
                                    return F.rules.push(a + h(b)) && b
                                }, qb = 0,
                                Wa = {
                                    x: 0,
                                    y: 0
                                }, Nb = function (a) {
                                    return Ba.push(a) && Ba.shift() && a
                                }, Sa = function () {
                                    return Ba = [0, 0]
                                }, Ba = Sa(),
                                Mb = c.graph || p.math[c.loops ? "hatch" : "envelope"],
                                Xa = function (a, b, e) {
                                    var h = f(Na, d(z));
                                    f(hb, d(Ca));
                                    var k = c.loops;
                                    f(Oa, k ? 0 : -h * a);
                                    f(Pa, k ? a : a - h * a);
                                    return b && f(Ma, {
                                        x: b,
                                        y: e
                                    }) || r
                                }, pb = true,
                                Y = T;
                            try {
                                if (T[0] != top.document) Y = T.add(top.document)
                            } catch (qc) {}
                            top === self ? m() : function (a) {
                                m("iframe", Y.last()).each(function () {
                                    try {
                                        if (m(this).contents().find(mb).html() == m(mb).html()) return (a = m(this)) && false
                                    } catch (b) {}
                                });
                                return a
                            }();
                            F.rules = [];
                            H.setup()
                        });
                        $a = $a || function i() {
                            var f = +new Date,
                                d = ba(fa);
                            if (!d) return $a = null;
                            T.trigger(oa);
                            p.cost = (+new Date + p.cost - f) / 2;
                            return $a =
                                setTimeout(i, ub(4, 1E3 / d - p.cost))
                        }();
                        return m(W)
                    } else if (typeof w == "string")
                        if (g.length == 1) {
                            v = s[w];
                            j.trigger("recall", [w, v]);
                            return v
                        } else {
                            if (v !== r) {
                                p.normal[w] && (v = p.normal[w](v, s));
                                if (s[w] !== v) j.trigger(w + "Change", [r, s[w] = v])
                            }
                            return j.trigger("store", [w, v])
                        }
                },
                unreel: function () {
                    return this.trigger("teardown")
                }
            },
            re: {
                image: /^(.*)\.(jpg|jpeg|png|gif)\??.*$/i,
                ua: [/(msie|opera|firefox|chrome|safari)[ \/:]([\d.]+)/i, /(webkit)\/([\d.]+)/i, /(mozilla)\/([\d.]+)/i],
                touchy_agent: /iphone|ipod|ipad|android|fennec|rim tablet/i,
                lazy_agent: /\(iphone|ipod|android|fennec|blackberry/i,
                frame_klass: /frame-\d+/,
                sequence: /(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/
            },
            cdn: "http://code.vostrel.cz/",
            math: {
                envelope: function (g, j, s, w, v, c) {
                    return j + sa(w, v, -g * c) / s
                },
                hatch: function (g, j, s, w, v, c) {
                    g = (g < w ? v : 0) + g % v;
                    g = j + -g * c / s;
                    return g - Ya(g)
                },
                interpolate: function (g, j, s) {
                    return j + g * (s - j)
                }
            },
            preload: {
                fidelity: function (g, j, s) {
                    function w(f, d, H) {
                        function pa(O) {
                            for (; !(O >= 1 && O <= I);) O += O < 1 ? +I : -I;
                            return i[H + O] || (i[H + O] = !! G.push(O))
                        }
                        if (!f.length) return [];
                        var G = [],
                            Q = 4 * d,
                            ob = j.frame,
                            I = f.length;
                        d = true;
                        for (var P = I / Q, x = 0; x < Q; x++) pa(ob + M(x * P));
                        for (; P > 1;) {
                            x = 0;
                            Q = G.length;
                            P /= 2;
                            for (d = !d; x < Q; x++) pa(G[x] + (d ? 1 : -1) * M(P))
                        }
                        for (x = 0; x <= I; x++) pa(x);
                        for (x = 0; x < G.length; x++) G[x] = f[G[x] - 1];
                        return G
                    }
                    var v = j.orbital,
                        c = v ? 2 : j.rows || 1,
                        W = v ? j.footage : s(L);
                    s = (j.row - 1) * W;
                    v = [].concat(g);
                    var i = new Array(g.length + 1);
                    g = c < 2 ? [] : v.slice(s, s + W);
                    return w(g, 1, s).concat(w(v, c, 0))
                },
                linear: function (g) {
                    return g
                }
            },
            normal: {
                fraction: function (g, j) {
                    return j[Ja].loops ? g - Ya(g) :
                        sa(0, 1, g)
                },
                tier: function (g) {
                    return sa(0, 1, g)
                },
                row: function (g, j) {
                    return M(sa(1, j[Ja].rows, g))
                },
                frame: function (g, j) {
                    var s = j[Ja];
                    j = j[L] * (s.orbital ? 2 : s.rows || 1);
                    g = M(s.loops ? g % j || j : sa(1, j, g));
                    return g < 0 ? g + j : g
                }
            },
            sequence: function (g, j) {
                if (g.length <= 1) return j.images;
                var s = [],
                    w = j.orbital,
                    v = g[1],
                    c = g[2],
                    W = +g[4] || 1,
                    i = w ? 2 : j.rows || 1;
                j = w ? j.footage : j.stitched ? 1 : j.frames;
                i = +(g[5] || i * j) - W;
                g = +g[7] || 1;
                for (j = 0; j <= i;) {
                    s.push(v.replace(c, Wb(W + j + R, c.length, "0")));
                    j += g
                }
                return s
            },
            instances: m(),
            leader: ba,
            cost: 0
        }, T = m(aa);
        aa =
            navigator.userAgent;
        var Ea = p.re.ua[0].exec(aa) || p.re.ua[1].exec(aa) || p.re.ua[2].exec(aa),
            Sb = +Ea[2].split(".").slice(0, 2).join(".");
        Ea = Ea[1] == "MSIE";
        var oc = !(Ea && Sb < 8),
            $a, C = "reel",
            Xb = C + "-overlay",
            Rb = C + "-indicator",
            Qb = C + "-preloader",
            Jb = C + "-cached",
            Ib = C + "-monitor",
            lc = C + "-annotation",
            Ta = C + "-panning",
            lb = C + "-loading",
            yb = "frame-",
            ha = Math,
            M = ha.round,
            Ya = ha.floor,
            ua = ha.ceil,
            Ha = ha.min,
            ub = ha.max,
            K = ha.abs,
            mc = parseInt,
            Da = p.math.interpolate,
            Qa = "annotations",
            Ra = "area",
            Ob = "auto",
            Eb = "backup",
            N = "backwards",
            La = "bit",
            Db = "brake",
            zb = "cached",
            jb = "center",
            xa = "clicked",
            Ma = "clicked_location",
            Na = "clicked_on",
            hb = "clicked_tier",
            la = "cwish",
            J = "dimensions",
            z = "fraction",
            $ = "frame",
            L = "frames",
            Pa = "hi",
            kb = "hidden",
            eb = "image",
            ca = "images",
            X = "opening",
            ma = X + "_ticks",
            Oa = "lo",
            Ja = "options",
            Va = "playing",
            S = "preloaded",
            ya = "reeling",
            ib = "reeled",
            Ka = "revolution",
            xb = "revolution_y",
            Za = "row",
            fb = "rows",
            Ab = "spacing",
            wa = "speed",
            Cb = "stage",
            gb = "stitched_shift",
            Bb = "stitched_travel",
            nb = "stopped",
            ta = "style",
            fa = "tempo",
            Ca = "tier",
            ea = "velocity",
            ka = "vertical",
            U = y(C),
            Z = y("pan") + U,
            dc = "mousedown" + U,
            cc = "mouseenter" + U,
            jc = "mouseleave" + Z,
            ic = "mousemove" + Z,
            kc = "mouseup" + Z,
            bc = "mousewheel" + U,
            oa = "tick" + U,
            hc = "touchcancel" + Z,
            gc = "touchend" + Z,
            Yb = "touchstart" + U,
            fc = "touchmove" + Z,
            R = "",
            E = " ",
            ga = ",",
            Ua = "absolute",
            Fb = "block",
            qa = "@CDN@",
            va = "div",
            Gb = "hand",
            mb = "head",
            Lb = "html",
            ia = "id",
            db = "img",
            rb = "jquery." + C,
            za = "none",
            bb = "object",
            Pb = "preload",
            vb = "string",
            nc = "width",
            Kb = oc ? Vb("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7") : qa + "blank.gif",
            $b = ra(qa + rb + ".cur") + ga + "move",
            Zb = ra(qa + rb + "-drag.cur") + ga + "move",
            ac = ra(qa + rb + "-drag-down.cur") + ga + "move",
            ja = p.touchy = p.re.touchy_agent.test(aa);
        p.lazy = p.re.lazy_agent.test(aa);
        var ec = ja ? r : Ea && Sb < 9 ? 1 : 0,
            pc = m.cleanData;
        m.cleanData = function (g) {
            pc(m(g).each(function () {
                m(this).triggerHandler("clean")
            }))
        };
        m.extend(m.fn, p.fn)
    }
}(jQuery, window, document);