/*
 * ddpanorama - jQuery plugin version 1.41
 * Copyright (c) Tiny Studio (http://tinystudio.iptime.org/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Date: Mon Aug 26 19:09:41 KST 2013
 */
(function (e) {
    var t = {
        animations: [],
        timerId: -1,
        max_speed: 43e3,
        drag_constant: 1.6,
        cursorX: 0,
        cursorY: 0,
        currentTime: (new Date).getTime()
    };
    t.timerId = window.setInterval(function () {
        for (var e = 0; e < t.animations.length; ++e) {
            t.animations[e].update()
        }
    }, 1e3 / 30);
    t.mousedown = function (e, n) {
        t.cursorXOld = t.cursorX = e;
        t.cursorYOld = t.cursorY = n;
        t.speedX = 0
    };
    t.mousemove = function (e, n) {
        t.cursorXOld = t.cursorX;
        t.cursorYOld = t.cursorY;
        t.cursorX = e;
        t.cursorY = n;
        var r = (new Date).getTime();
        var i = (r - t.currentTime) / 1e3;
        t.currentTime = r;
        t.speedX = (t.cursorX - t.cursorXOld) / i;
        if (t.speedX > t.max_speed) t.speedX = t.max_speed;
        if (t.speedX < -t.max_speed) t.speedX = -t.max_speed
    };
    t.event_prefix = "dd";
    e(document).bind("mousemove", function (e) {
        t.mousemove(e.pageX, e.pageY)
    });
    e(document).bind("touchmove", function (e) {
        t.mousemove(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY)
    });
    e(document).bind("touchstart", function (e) {
        t.mousedown(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY)
    });
    e(document).bind("mousedown", function (e) {
        t.mousedown(e.pageX, e.pageY)
    });
    e.fn.ddpanorama = function (n) {
        n = e.extend(true, {}, e.fn.ddpanorama.defaults, n);
        var r = false;
        for (var i in n) {
            if (i == "width" || i == "height" || i == "ratio") {
                r = true;
                break
            }
        }
        return this.each(function () {
            if (e(this).data("ddpanorama") != null) {
                if (n != null) {
                    var i = e(this).data("ddpanorama");
                    if (r) {
                        if (i.params.hasOwnProperty("width")) {
                            delete i.params.width
                        }
                        if (i.params.hasOwnProperty("height")) {
                            delete i.params.height
                        }
                        if (i.params.hasOwnProperty("ratio")) {
                            delete i.params.ratio
                        }
                    }
                    for (var s in n) {
                        i.params[s] = n[s]
                    }
                    if (i.params.minSpeed != 0) {
                        i.add()
                    }
                    i.bindevent();
                    i.resize()
                }
                return
            }
            var o = e(this);
            var u = document.createElement("canvas");
            var i = {
                img: o,
                canvas: u,
                mousedown: false,
                draw_scale: 1
            };
            e(this).css("display", "none");
            i.params = n;
            if (i.params == null) i.params = {};
            i.notifyStartMove = function () {
                if (this.startmovecalled != true) {
                    this.startmovecalled = true;
                    var n = e(this.canvas).prop("scrollX");
                    e(this.img).trigger(jQuery.Event(t.event_prefix + "startmove", {
                        canvas: this.canvas,
                        scrollX: n
                    }))
                }
            };
            i.add = function () {
                e(u).prop("updateTime", (new Date).getTime());
                var n = t.animations.indexOf(this);
                if (n < 0) {
                    t.animations.push(this);
                    this.notifyStartMove()
                }
            };
            i.remove = function () {
                var n = t.animations.indexOf(this);
                if (n >= 0) {
                    var r = e(this.canvas).prop("scrollX");
                    e(this.img).trigger(jQuery.Event(t.event_prefix + "stopmove", {
                        canvas: this.canvas,
                        scrollX: r
                    }));
                    this.startmovecalled = false;
                    t.animations.splice(n, 1)
                }
            };
            i.setScrollX = function (t) {
                var n = e(this.img).get()[0].naturalWidth;
                if (isNaN(n) == false && n != 0) {
                    var r = t / this.draw_scale;
                    if (this.params.loop) {
                        while (r < -n) r += n;
                        while (r >= n) r -= n
                    } else {
                        if (r > this.bounceBorder) r = this.bounceBorder;
                        if (r < this.widthScaled - n - this.bounceBorder) r = this.widthScaled - n - this.bounceBorder
                    }
                    t = r * this.draw_scale;
                    e(this.canvas).prop("scrollX", t)
                }
                return t
            };
            i.scrollTo = function (t) {
                var n = e(this.canvas).prop("mousedownScrollX");
                if (n == null) return;
                var r = e(o).get()[0].naturalWidth;
                this.setScrollX(n + t - e(this.canvas).prop("mousedownPageX"))
            };
            i.update = function () {
                var n = (new Date).getTime();
                var r = e(this.canvas).prop("updateTime");
                if (r == null) r = n;
                e(this.canvas).prop("updateTime", n);
                var i = (n - r) / 1e3;
                var s = e(this.canvas).prop("scrollX");
                var o = e(this.canvas).prop("speedX");
                var u = this.canvas.getContext("2d");
                var a = e(this.img).get()[0].naturalWidth;
                s += i * o;
                s = this.setScrollX(s);
                var f = 0;
                if (this.params.loop == false) {
                    var l = s / this.draw_scale;
                    if (this.bounceActive) {
                        if (l > 0) {
                            if (o > 0) {
                                o = 0
                            }
                            f = -l * this.params.bounceSpringConst
                        } else if (l < this.widthScaled - a) {
                            if (o < 0) {
                                o = 0
                            }
                            f = (this.widthScaled - a - l) * this.params.bounceSpringConst
                        }
                    }
                }
                if (this.params.loop == false && this.params.bounce) {
                    var c = i * 2.5;
                    if (l >= 0) {
                        var h = l;
                        var p = h / this.bounceBorder;
                        if (h >= 0) {
                            if (o < 0) {
                                o *= p
                            }
                        }
                        o += f * c
                    } else if (this.widthScaled - a - l >= 0) {
                        var h = this.widthScaled - a - l;
                        var p = h / this.bounceBorder;
                        if (h >= 0) {
                            if (o > 0) {
                                o *= p
                            }
                        }
                        o += f * c
                    }
                }
                o += t.drag_constant * (this.params.minSpeed - o) * i;
                e(this.canvas).prop("speedX", o);
                this.redraw();
                if (Math.abs(o) < 1 && this.params.minSpeed == 0 && Math.abs(f) < 3) {
                    this.stop();
                    this.remove()
                }
            };
            i.stop = function () {
                e(this.canvas).prop("speedX", 0)
            };
            i.redraw = function () {
                var n = e(this.img).get()[0].naturalWidth;
                var r = this.canvas.getContext("2d");
                var i = e(this.canvas).prop("scrollX");
                var s = e(this.canvas).prop("speedX");
                i /= this.draw_scale;
                var o = false;
                if (isNaN(n) == false && n != 0) {
                    e(this.canvas).prop("forceX", 0);
                    var u = this.img.get()[0];
                    r.setTransform(this.draw_scale, 0, 0, this.draw_scale, 0, 0);
                    if (this.params.loop) {
                        r.drawImage(u, i, 0);
                        r.drawImage(u, i + n, 0);
                        r.drawImage(u, i - n, 0)
                    } else {
                        r.drawImage(u, i, 0);
                        r.fillStyle = this.params.bounceEdgeColor;
                        r.fillRect(0, 0, i, this.canvas.height / this.draw_scale);
                        r.fillRect(n + i, 0, this.bounceBorder, this.canvas.height / this.draw_scale)
                    }
                    o = true
                } else {
                    r.setTransform(1, 0, 0, 1, 0, 0);
                    r.fillStyle = "#000000";
                    r.fillRect(0, 0, this.canvas.width, this.canvas.height)
                }
                e(this.img).trigger(jQuery.Event(t.event_prefix + "redraw", {
                    scrollX: i,
                    canvas: this.canvas,
                    speed: e(this.canvas).prop("speedX") / t.max_speed,
                    loaded: o
                }))
            };
            i.onmousedown = function (n) {
                var r = this;
                var i = this.canvas;
                this.mousedown = true;
                var s = e(this.canvas).prop("scrollX");
                e(i).prop("speedX", 0);
                e(i).focus();
                this.remove();
                this.stop();
                e(i).prop("mousedownPageX", n);
                e(i).prop("mousedownScrollX", e(i).prop("scrollX"));
                e(i).prop("updateTime", (new Date).getTime());
                this.old_onselectstart = document.onselectstart;
                document.onselectstart = function () {
                    return false
                };
                var s = e(this.canvas).prop("scrollX");
                e(this.img).trigger(jQuery.Event(t.event_prefix + "mousedown", {
                    canvas: this.canvas,
                    scrollX: s
                }));
                this.notifyStartMove()
            };
            i.resize = function () {
                var n = this.img;
                var r = this.canvas;
                var i = n.get()[0].naturalWidth;
                var s = n.get()[0].naturalHeight;
                var o = i;
                var u = s;
                console.log("resize.naturalWidth:" + i);
                console.log("resize.naturalHeight:" + s);
                if (this.params.hasOwnProperty("height")) {
                    u = this.params.height
                }
                if (this.params.hasOwnProperty("ratio")) {
                    if (this.params.hasOwnProperty("width")) {
                        o = this.params.width;
                        u = o * this.params.ratio
                    } else {
                        o = u / this.params.ratio
                    }
                } else if (this.params.hasOwnProperty("width")) {
                    o = this.params.width
                }
                if (s != 0) this.draw_scale = u / s;
                else this.draw_scale = 1; if (this.params.hasOwnProperty("startPos")) {
                    this.setScrollX(i * -this.params.startPos * this.draw_scale + o)
                }
                e(r).attr("width", o);
                e(r).attr("height", u);
                this.widthScaled = this.canvas.width / this.draw_scale;
                this.bounceActive = this.params.bounce;
                if (this.params.bounce) {
                    var a = this.params.bounceEdge;
                    this.bounceBorder = this.canvas.width * a / this.draw_scale;
                    if (this.bounceBorder < 1) {
                        this.bounceActive = false
                    }
                } else {
                    this.bounceBorder = 0
                }
                e(n).trigger(jQuery.Event(t.event_prefix + "resize", {
                    canvas: r
                }));
                if (this.loaded) this.redraw()
            };
            e(this).data("ddpanorama", i);
            e(u).data("ddpanorama", i);
            e(u).prop("scrollX", 0);
            e(u).prop("speedX", 0);
            var a = function (n) {
                var r = e(this).data("ddpanorama");
                if (r.mousedown == false) return;
                r.mousedown = false;
                r.add();
                e(u).prop("updateTime", (new Date).getTime());
                e(u).prop("speedX", t.speedX);
                e(u).prop("mousedownScrollX", null);
                document.onselectstart = this.old_onselectstart;
                var i = e(u).prop("scrollX");
                e(r.img).trigger(jQuery.Event(t.event_prefix + "mouseup", {
                    canvas: u,
                    scrollX: i
                }))
            };
            i.bindevent = function () {
                var t = this;
                var n = this.canvas;
                e(n).unbind("mousedown");
                e(n).unbind("mouseup");
                e(n).unbind("mouseupoutside");
                e(n).unbind("mousemove");
                e(n).unbind("contextmenu");
                e(n).unbind("touchstart");
                e(n).unbind("touchmove");
                e(n).unbind("touchend");
                if (this.params.interactive) {
                    e(n).bind("mousedown", function (t) {
                        var n = e(this).data("ddpanorama");
                        n.onmousedown(t.pageX)
                    });
                    e(n).bind("mouseup", a);
                    e(n).bind("mouseupoutside", a);
                    e(n).bind("mousemove", function (t) {
                        var n = t.pageX;
                        var r = e(this).data("ddpanorama");
                        if (r.mousedown == false) return;
                        r.scrollTo(n);
                        r.redraw()
                    });
                    e(n).bind("contextmenu", function (e) {
                        e.preventDefault();
                        return false
                    });
                    e(n).bind("touchstart", function (t) {
                        var n = e(this).data("ddpanorama");
                        n.onmousedown(t.originalEvent.touches[0].pageX)
                    });
                    e(n).bind("touchmove", function (t) {
                        t.preventDefault();
                        var n = e(this).data("ddpanorama");
                        if (n.mousedown == false) return false;
                        var r = t.originalEvent.touches[0].pageX;
                        n.scrollTo(r);
                        n.redraw();
                        return true
                    });
                    e(n).bind("touchend", a)
                } else {
                    var r = function (e) {
                        if (t.mousedown == false) return;
                        t.mousedown = false;
                        document.onselectstart = this.old_onselectstart
                    };
                    e(n).bind("mousedown", function (e) {
                        this.old_onselectstart = document.onselectstart;
                        document.onselectstart = function () {
                            return false
                        };
                        t.mousedown = true
                    });
                    e(n).bind("mouseup", r);
                    e(n).bind("mouseupoutside", r)
                }
            };
            if (n.minSpeed != 0) {
                i.add()
            }
            i.bindevent();
            e(u).addClass("ddpanorama");
            i.loaded = false;
            e(this).load(function () {
                o.after(u);
                e(o).trigger(jQuery.Event(t.event_prefix + "init", {
                    canvas: u
                }));
                i.resize();
                i.redraw();
                i.loaded = true
            })
        })
    };
    e.fn.ddpanorama.defaults = {
        interactive: true,
        minSpeed: 0,
        loop: true,
        bounce: true,
        bounceEdge: .8,
        bounceEdgeColor: "#000000",
        bounceSpringConst: 15
    }
})(jQuery)