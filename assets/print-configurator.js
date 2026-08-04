var To = Object.defineProperty;
var Ao = (e, t, n) => t in e ? To(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ls = (e, t, n) => Ao(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function us(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ve = {}, Jt = [], ft = () => {
}, Zr = () => !1, fi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), pi = (e) => e.startsWith("onUpdate:"), ke = Object.assign, ds = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, $o = Object.prototype.hasOwnProperty, se = (e, t) => $o.call(e, t), K = Array.isArray, Xt = (e) => Mn(e) === "[object Map]", Hr = (e) => Mn(e) === "[object Set]", Us = (e) => Mn(e) === "[object Date]", Y = (e) => typeof e == "function", be = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", pe = (e) => e !== null && typeof e == "object", qr = (e) => (pe(e) || Y(e)) && Y(e.then) && Y(e.catch), Br = Object.prototype.toString, Mn = (e) => Br.call(e), Io = (e) => Mn(e).slice(8, -1), hi = (e) => Mn(e) === "[object Object]", fs = (e) => be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _n = /* @__PURE__ */ us(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), mi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Eo = /-\w/g, Ae = mi(
  (e) => e.replace(Eo, (t) => t.slice(1).toUpperCase())
), Oo = /\B([A-Z])/g, qe = mi(
  (e) => e.replace(Oo, "-$1").toLowerCase()
), gi = mi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ii = mi(
  (e) => e ? `on${gi(e)}` : ""
), dt = (e, t) => !Object.is(e, t), Ei = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Wr = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Po = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Zs = (e) => {
  const t = be(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Hs;
const vi = () => Hs || (Hs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function yi(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = be(i) ? jo(i) : yi(i);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (be(e) || pe(e))
    return e;
}
const No = /;(?![^(]*\))/g, Ro = /:([^]+)/, Mo = /\/\*[^]*?\*\//g;
function jo(e) {
  const t = {};
  return e.replace(Mo, "").split(No).forEach((n) => {
    if (n) {
      const i = n.split(Ro);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ke(e) {
  let t = "";
  if (be(e))
    t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ke(e[n]);
      i && (t += i + " ");
    }
  else if (pe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Fo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Do = /* @__PURE__ */ us(Fo);
function Kr(e) {
  return !!e || e === "";
}
function Vo(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = ps(e[i], t[i]);
  return n;
}
function ps(e, t) {
  if (e === t) return !0;
  let n = Us(e), i = Us(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Je(e), i = Je(t), n || i)
    return e === t;
  if (n = K(e), i = K(t), n || i)
    return n && i ? Vo(e, t) : !1;
  if (n = pe(e), i = pe(t), n || i) {
    if (!n || !i)
      return !1;
    const s = Object.keys(e).length, r = Object.keys(t).length;
    if (s !== r)
      return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !ps(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Gr = (e) => !!(e && e.__v_isRef === !0), ee = (e) => be(e) ? e : e == null ? "" : K(e) || pe(e) && (e.toString === Br || !Y(e.toString)) ? Gr(e) ? ee(e.value) : JSON.stringify(e, Yr, 2) : String(e), Yr = (e, t) => Gr(t) ? Yr(e, t.value) : Xt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, s], r) => (n[Oi(i, r) + " =>"] = s, n),
    {}
  )
} : Hr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Oi(n))
} : Je(t) ? Oi(t) : pe(t) && !K(t) && !hi(t) ? String(t) : t, Oi = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ie;
class zo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ie && (Ie.active ? (this.parent = Ie, this.index = (Ie.scopes || (Ie.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ie;
      try {
        return Ie = this, t();
      } finally {
        Ie = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ie, Ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ie === this)
        Ie = this.prevScope;
      else {
        let t = Ie;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Lo() {
  return Ie;
}
let ge;
const Pi = /* @__PURE__ */ new WeakSet();
class Qr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && (Ie.active ? Ie.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Pi.has(this) && (Pi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Xr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, qs(this), ea(this);
    const t = ge, n = Qe;
    ge = this, Qe = !0;
    try {
      return this.fn();
    } finally {
      ta(this), ge = t, Qe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        gs(t);
      this.deps = this.depsTail = void 0, qs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Pi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ui(this) && this.run();
  }
  get dirty() {
    return Ui(this);
  }
}
let Jr = 0, xn, wn;
function Xr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = wn, wn = e;
    return;
  }
  e.next = xn, xn = e;
}
function hs() {
  Jr++;
}
function ms() {
  if (--Jr > 0)
    return;
  if (wn) {
    let t = wn;
    for (wn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; xn; ) {
    let t = xn;
    for (xn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ea(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ta(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const s = i.prevDep;
    i.version === -1 ? (i === n && (n = s), gs(i), Uo(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = s;
  }
  e.deps = t, e.depsTail = n;
}
function Ui(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (na(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function na(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === An) || (e.globalVersion = An, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ui(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ge, i = Qe;
  ge = e, Qe = !0;
  try {
    ea(e);
    const s = e.fn(e._value);
    (t.version === 0 || dt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ge = n, Qe = i, ta(e), e.flags &= -3;
  }
}
function gs(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: s } = e;
  if (i && (i.nextSub = s, e.prevSub = void 0), s && (s.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      gs(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Uo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Qe = !0;
const ia = [];
function kt() {
  ia.push(Qe), Qe = !1;
}
function St() {
  const e = ia.pop();
  Qe = e === void 0 ? !0 : e;
}
function qs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ge;
    ge = void 0;
    try {
      t();
    } finally {
      ge = n;
    }
  }
}
let An = 0;
class Zo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class vs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ge || !Qe || ge === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ge)
      n = this.activeLink = new Zo(ge, this), ge.deps ? (n.prevDep = ge.depsTail, ge.depsTail.nextDep = n, ge.depsTail = n) : ge.deps = ge.depsTail = n, sa(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ge.depsTail, n.nextDep = void 0, ge.depsTail.nextDep = n, ge.depsTail = n, ge.deps === n && (ge.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, An++, this.notify(t);
  }
  notify(t) {
    hs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ms();
    }
  }
}
function sa(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        sa(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Zi = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ Symbol(
  ""
), Hi = /* @__PURE__ */ Symbol(
  ""
), $n = /* @__PURE__ */ Symbol(
  ""
);
function Oe(e, t, n) {
  if (Qe && ge) {
    let i = Zi.get(e);
    i || Zi.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || (i.set(n, s = new vs()), s.map = i, s.key = n), s.track();
  }
}
function _t(e, t, n, i, s, r) {
  const a = Zi.get(e);
  if (!a) {
    An++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (hs(), t === "clear")
    a.forEach(o);
  else {
    const l = K(e), c = l && fs(n);
    if (l && n === "length") {
      const u = Number(i);
      a.forEach((d, p) => {
        (p === "length" || p === $n || !Je(p) && p >= u) && o(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), c && o(a.get($n)), t) {
        case "add":
          l ? c && o(a.get("length")) : (o(a.get(Lt)), Xt(e) && o(a.get(Hi)));
          break;
        case "delete":
          l || (o(a.get(Lt)), Xt(e) && o(a.get(Hi)));
          break;
        case "set":
          Xt(e) && o(a.get(Lt));
          break;
      }
  }
  ms();
}
function Gt(e) {
  const t = /* @__PURE__ */ re(e);
  return t === e ? t : (Oe(t, "iterate", $n), /* @__PURE__ */ Be(e) ? t : t.map(Xe));
}
function bi(e) {
  return Oe(e = /* @__PURE__ */ re(e), "iterate", $n), e;
}
function ct(e, t) {
  return /* @__PURE__ */ Ct(e) ? sn(/* @__PURE__ */ Ut(e) ? Xe(t) : t) : Xe(t);
}
const Ho = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ni(this, Symbol.iterator, (e) => ct(this, e));
  },
  concat(...e) {
    return Gt(this).concat(
      ...e.map((t) => K(t) ? Gt(t) : t)
    );
  },
  entries() {
    return Ni(this, "entries", (e) => (e[1] = ct(this, e[1]), e));
  },
  every(e, t) {
    return gt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return gt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => ct(this, i)),
      arguments
    );
  },
  find(e, t) {
    return gt(
      this,
      "find",
      e,
      t,
      (n) => ct(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return gt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return gt(
      this,
      "findLast",
      e,
      t,
      (n) => ct(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return gt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return gt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ri(this, "includes", e);
  },
  indexOf(...e) {
    return Ri(this, "indexOf", e);
  },
  join(e) {
    return Gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ri(this, "lastIndexOf", e);
  },
  map(e, t) {
    return gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return fn(this, "pop");
  },
  push(...e) {
    return fn(this, "push", e);
  },
  reduce(e, ...t) {
    return Bs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bs(this, "reduceRight", e, t);
  },
  shift() {
    return fn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return fn(this, "splice", e);
  },
  toReversed() {
    return Gt(this).toReversed();
  },
  toSorted(e) {
    return Gt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Gt(this).toSpliced(...e);
  },
  unshift(...e) {
    return fn(this, "unshift", e);
  },
  values() {
    return Ni(this, "values", (e) => ct(this, e));
  }
};
function Ni(e, t, n) {
  const i = bi(e), s = i[t]();
  return i !== e && !/* @__PURE__ */ Be(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = n(r.value)), r;
  }), s;
}
const qo = Array.prototype;
function gt(e, t, n, i, s, r) {
  const a = bi(e), o = a !== e && !/* @__PURE__ */ Be(e), l = a[t];
  if (l !== qo[t]) {
    const d = l.apply(e, r);
    return o ? Xe(d) : d;
  }
  let c = n;
  a !== e && (o ? c = function(d, p) {
    return n.call(this, ct(e, d), p, e);
  } : n.length > 2 && (c = function(d, p) {
    return n.call(this, d, p, e);
  }));
  const u = l.call(a, c, i);
  return o && s ? s(u) : u;
}
function Bs(e, t, n, i) {
  const s = bi(e), r = s !== e && !/* @__PURE__ */ Be(e);
  let a = n, o = !1;
  s !== e && (r ? (o = i.length === 0, a = function(c, u, d) {
    return o && (o = !1, c = ct(e, c)), n.call(this, c, ct(e, u), d, e);
  }) : n.length > 3 && (a = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const l = s[t](a, ...i);
  return o ? ct(e, l) : l;
}
function Ri(e, t, n) {
  const i = /* @__PURE__ */ re(e);
  Oe(i, "iterate", $n);
  const s = i[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ _s(n[0]) ? (n[0] = /* @__PURE__ */ re(n[0]), i[t](...n)) : s;
}
function fn(e, t, n = []) {
  kt(), hs();
  const i = (/* @__PURE__ */ re(e))[t].apply(e, n);
  return ms(), St(), i;
}
const Bo = /* @__PURE__ */ us("__proto__,__v_isRef,__isVue"), ra = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je)
);
function Wo(e) {
  Je(e) || (e = String(e));
  const t = /* @__PURE__ */ re(this);
  return Oe(t, "has", e), t.hasOwnProperty(e);
}
class aa {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return i === (s ? r ? il : ua : r ? ca : la).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const a = K(t);
    if (!s) {
      let l;
      if (a && (l = Ho[n]))
        return l;
      if (n === "hasOwnProperty")
        return Wo;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ne(t) ? t : i
    );
    if ((Je(n) ? ra.has(n) : Bo(n)) || (s || Oe(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ Ne(o)) {
      const l = a && fs(n) ? o : o.value;
      return s && pe(l) ? /* @__PURE__ */ Bi(l) : l;
    }
    return pe(o) ? s ? /* @__PURE__ */ Bi(o) : /* @__PURE__ */ ln(o) : o;
  }
}
class oa extends aa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n];
    const a = K(t) && fs(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ct(r);
      if (!/* @__PURE__ */ Be(i) && !/* @__PURE__ */ Ct(i) && (r = /* @__PURE__ */ re(r), i = /* @__PURE__ */ re(i)), !a && /* @__PURE__ */ Ne(r) && !/* @__PURE__ */ Ne(i))
        return c || (r.value = i), !0;
    }
    const o = a ? Number(n) < t.length : se(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Ne(t) ? t : s
    );
    return t === /* @__PURE__ */ re(s) && (o ? dt(i, r) && _t(t, "set", n, i) : _t(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = se(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && i && _t(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Je(n) || !ra.has(n)) && Oe(t, "has", n), i;
  }
  ownKeys(t) {
    return Oe(
      t,
      "iterate",
      K(t) ? "length" : Lt
    ), Reflect.ownKeys(t);
  }
}
class Ko extends aa {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Go = /* @__PURE__ */ new oa(), Yo = /* @__PURE__ */ new Ko(), Qo = /* @__PURE__ */ new oa(!0);
const qi = (e) => e, Ln = (e) => Reflect.getPrototypeOf(e);
function Jo(e, t, n) {
  return function(...i) {
    const s = this.__v_raw, r = /* @__PURE__ */ re(s), a = Xt(r), o = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = s[e](...i), u = n ? qi : t ? sn : Xe;
    return !t && Oe(
      r,
      "iterate",
      l ? Hi : Lt
    ), ke(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: p } = c.next();
          return p ? { value: d, done: p } : {
            value: o ? [u(d[0]), u(d[1])] : u(d),
            done: p
          };
        }
      }
    );
  };
}
function Un(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xo(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, a = /* @__PURE__ */ re(r), o = /* @__PURE__ */ re(s);
      e || (dt(s, o) && Oe(a, "get", s), Oe(a, "get", o));
      const { has: l } = Ln(a), c = t ? qi : e ? sn : Xe;
      if (l.call(a, s))
        return c(r.get(s));
      if (l.call(a, o))
        return c(r.get(o));
      r !== a && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Oe(/* @__PURE__ */ re(s), "iterate", Lt), s.size;
    },
    has(s) {
      const r = this.__v_raw, a = /* @__PURE__ */ re(r), o = /* @__PURE__ */ re(s);
      return e || (dt(s, o) && Oe(a, "has", s), Oe(a, "has", o)), s === o ? r.has(s) : r.has(s) || r.has(o);
    },
    forEach(s, r) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ re(o), c = t ? qi : e ? sn : Xe;
      return !e && Oe(l, "iterate", Lt), o.forEach((u, d) => s.call(r, c(u), c(d), a));
    }
  };
  return ke(
    n,
    e ? {
      add: Un("add"),
      set: Un("set"),
      delete: Un("delete"),
      clear: Un("clear")
    } : {
      add(s) {
        const r = /* @__PURE__ */ re(this), a = Ln(r), o = /* @__PURE__ */ re(s), l = !t && !/* @__PURE__ */ Be(s) && !/* @__PURE__ */ Ct(s) ? o : s;
        return a.has.call(r, l) || dt(s, l) && a.has.call(r, s) || dt(o, l) && a.has.call(r, o) || (r.add(l), _t(r, "add", l, l)), this;
      },
      set(s, r) {
        !t && !/* @__PURE__ */ Be(r) && !/* @__PURE__ */ Ct(r) && (r = /* @__PURE__ */ re(r));
        const a = /* @__PURE__ */ re(this), { has: o, get: l } = Ln(a);
        let c = o.call(a, s);
        c || (s = /* @__PURE__ */ re(s), c = o.call(a, s));
        const u = l.call(a, s);
        return a.set(s, r), c ? dt(r, u) && _t(a, "set", s, r) : _t(a, "add", s, r), this;
      },
      delete(s) {
        const r = /* @__PURE__ */ re(this), { has: a, get: o } = Ln(r);
        let l = a.call(r, s);
        l || (s = /* @__PURE__ */ re(s), l = a.call(r, s)), o && o.call(r, s);
        const c = r.delete(s);
        return l && _t(r, "delete", s, void 0), c;
      },
      clear() {
        const s = /* @__PURE__ */ re(this), r = s.size !== 0, a = s.clear();
        return r && _t(
          s,
          "clear",
          void 0,
          void 0
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = Jo(s, e, t);
  }), n;
}
function ys(e, t) {
  const n = Xo(e, t);
  return (i, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(
    se(n, s) && s in i ? n : i,
    s,
    r
  );
}
const el = {
  get: /* @__PURE__ */ ys(!1, !1)
}, tl = {
  get: /* @__PURE__ */ ys(!1, !0)
}, nl = {
  get: /* @__PURE__ */ ys(!0, !1)
};
const la = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), il = /* @__PURE__ */ new WeakMap();
function sl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
  return /* @__PURE__ */ Ct(e) ? e : bs(
    e,
    !1,
    Go,
    el,
    la
  );
}
// @__NO_SIDE_EFFECTS__
function rl(e) {
  return bs(
    e,
    !1,
    Qo,
    tl,
    ca
  );
}
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  return bs(
    e,
    !0,
    Yo,
    nl,
    ua
  );
}
function bs(e, t, n, i, s) {
  if (!pe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const a = sl(Io(e));
  if (a === 0)
    return e;
  const o = new Proxy(
    e,
    a === 2 ? i : n
  );
  return s.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return /* @__PURE__ */ Ct(e) ? /* @__PURE__ */ Ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function re(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ re(t) : e;
}
function al(e) {
  return !se(e, "__v_skip") && Object.isExtensible(e) && Wr(e, "__v_skip", !0), e;
}
const Xe = (e) => pe(e) ? /* @__PURE__ */ ln(e) : e, sn = (e) => pe(e) ? /* @__PURE__ */ Bi(e) : e;
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return ol(e, !1);
}
function ol(e, t) {
  return /* @__PURE__ */ Ne(e) ? e : new ll(e, t);
}
class ll {
  constructor(t, n) {
    this.dep = new vs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ re(t), this._value = n ? t : Xe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Be(t) || /* @__PURE__ */ Ct(t);
    t = i ? t : /* @__PURE__ */ re(t), dt(t, n) && (this._rawValue = t, this._value = i ? t : Xe(t), this.dep.trigger());
  }
}
function X(e) {
  return /* @__PURE__ */ Ne(e) ? e.value : e;
}
const cl = {
  get: (e, t, n) => t === "__v_raw" ? e : X(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return /* @__PURE__ */ Ne(s) && !/* @__PURE__ */ Ne(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function da(e) {
  return /* @__PURE__ */ Ut(e) ? e : new Proxy(e, cl);
}
class ul {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new vs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = An - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ge !== this)
      return Xr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return na(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function dl(e, t, n = !1) {
  let i, s;
  return Y(e) ? i = e : (i = e.get, s = e.set), new ul(i, s, n);
}
const Zn = {}, Wn = /* @__PURE__ */ new WeakMap();
let Dt;
function fl(e, t = !1, n = Dt) {
  if (n) {
    let i = Wn.get(n);
    i || Wn.set(n, i = []), i.push(e);
  }
}
function pl(e, t, n = ve) {
  const { immediate: i, deep: s, once: r, scheduler: a, augmentJob: o, call: l } = n, c = (D) => s ? D : /* @__PURE__ */ Be(D) || s === !1 || s === 0 ? Ot(D, 1) : Ot(D);
  let u, d, p, m, S = !1, k = !1;
  if (/* @__PURE__ */ Ne(e) ? (d = () => e.value, S = /* @__PURE__ */ Be(e)) : /* @__PURE__ */ Ut(e) ? (d = () => c(e), S = !0) : K(e) ? (k = !0, S = e.some((D) => /* @__PURE__ */ Ut(D) || /* @__PURE__ */ Be(D)), d = () => e.map((D) => {
    if (/* @__PURE__ */ Ne(D))
      return D.value;
    if (/* @__PURE__ */ Ut(D))
      return c(D);
    if (Y(D))
      return l ? l(D, 2) : D();
  })) : Y(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (p) {
      kt();
      try {
        p();
      } finally {
        St();
      }
    }
    const D = Dt;
    Dt = u;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      Dt = D;
    }
  } : d = ft, t && s) {
    const D = d, P = s === !0 ? 1 / 0 : s;
    d = () => Ot(D(), P);
  }
  const G = Lo(), V = () => {
    u.stop(), G && G.active && ds(G.effects, u);
  };
  if (r && t) {
    const D = t;
    t = (...P) => {
      D(...P), V();
    };
  }
  let I = k ? new Array(e.length).fill(Zn) : Zn;
  const z = (D) => {
    if (!(!(u.flags & 1) || !u.dirty && !D))
      if (t) {
        const P = u.run();
        if (s || S || (k ? P.some((ce, le) => dt(ce, I[le])) : dt(P, I))) {
          p && p();
          const ce = Dt;
          Dt = u;
          try {
            const le = [
              P,
              // pass undefined as the old value when it's changed for the first time
              I === Zn ? void 0 : k && I[0] === Zn ? [] : I,
              m
            ];
            I = P, l ? l(t, 3, le) : (
              // @ts-expect-error
              t(...le)
            );
          } finally {
            Dt = ce;
          }
        }
      } else
        u.run();
  };
  return o && o(z), u = new Qr(d), u.scheduler = a ? () => a(z, !1) : z, m = (D) => fl(D, !1, u), p = u.onStop = () => {
    const D = Wn.get(u);
    if (D) {
      if (l)
        l(D, 4);
      else
        for (const P of D) P();
      Wn.delete(u);
    }
  }, t ? i ? z(!0) : I = u.run() : a ? a(z.bind(null, !0), !0) : u.run(), V.pause = u.pause.bind(u), V.resume = u.resume.bind(u), V.stop = V, V;
}
function Ot(e, t = 1 / 0, n) {
  if (t <= 0 || !pe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ne(e))
    Ot(e.value, t, n);
  else if (K(e))
    for (let i = 0; i < e.length; i++)
      Ot(e[i], t, n);
  else if (Hr(e) || Xt(e))
    e.forEach((i) => {
      Ot(i, t, n);
    });
  else if (hi(e)) {
    for (const i in e)
      Ot(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Ot(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function jn(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    _i(s, t, n);
  }
}
function et(e, t, n, i) {
  if (Y(e)) {
    const s = jn(e, t, n, i);
    return s && qr(s) && s.catch((r) => {
      _i(r, t, n);
    }), s;
  }
  if (K(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(et(e[r], t, n, i));
    return s;
  }
}
function _i(e, t, n, i = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: a } = t && t.appContext.config || ve;
  if (t) {
    let o = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, l, c) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      kt(), jn(r, null, 10, [
        e,
        l,
        c
      ]), St();
      return;
    }
  }
  hl(e, n, s, i, a);
}
function hl(e, t, n, i = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const je = [];
let lt = -1;
const en = [];
let It = null, Yt = 0;
const fa = /* @__PURE__ */ Promise.resolve();
let Kn = null;
function xi(e) {
  const t = Kn || fa;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ml(e) {
  let t = lt + 1, n = je.length;
  for (; t < n; ) {
    const i = t + n >>> 1, s = je[i], r = In(s);
    r < e || r === e && s.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function xs(e) {
  if (!(e.flags & 1)) {
    const t = In(e), n = je[je.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= In(n) ? je.push(e) : je.splice(ml(t), 0, e), e.flags |= 1, pa();
  }
}
function pa() {
  Kn || (Kn = fa.then(ma));
}
function gl(e) {
  K(e) ? en.push(...e) : It && e.id === -1 ? It.splice(Yt + 1, 0, e) : e.flags & 1 || (en.push(e), e.flags |= 1), pa();
}
function Ws(e, t, n = lt + 1) {
  for (; n < je.length; n++) {
    const i = je[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      je.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function ha(e) {
  if (en.length) {
    const t = [...new Set(en)].sort(
      (n, i) => In(n) - In(i)
    );
    if (en.length = 0, It) {
      It.push(...t);
      return;
    }
    for (It = t, Yt = 0; Yt < It.length; Yt++) {
      const n = It[Yt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    It = null, Yt = 0;
  }
}
const In = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ma(e) {
  try {
    for (lt = 0; lt < je.length; lt++) {
      const t = je[lt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), jn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; lt < je.length; lt++) {
      const t = je[lt];
      t && (t.flags &= -2);
    }
    lt = -1, je.length = 0, ha(), Kn = null, (je.length || en.length) && ma();
  }
}
let Fe = null, ga = null;
function Gn(e) {
  const t = Fe;
  return Fe = e, ga = e && e.type.__scopeId || null, t;
}
function va(e, t = Fe, n) {
  if (!t || e._n)
    return e;
  const i = (...s) => {
    i._d && rr(-1);
    const r = Gn(t);
    let a;
    try {
      a = e(...s);
    } finally {
      Gn(r), i._d && rr(1);
    }
    return a;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function jt(e, t, n, i) {
  const s = e.dirs, r = t && t.dirs;
  for (let a = 0; a < s.length; a++) {
    const o = s[a];
    r && (o.oldValue = r[a].value);
    let l = o.dir[i];
    l && (kt(), et(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), St());
  }
}
function ya(e, t) {
  if (Pe) {
    let n = Pe.provides;
    const i = Pe.parent && Pe.parent.provides;
    i === n && (n = Pe.provides = Object.create(i)), n[e] = t;
  }
}
function kn(e, t, n = !1) {
  const i = Wa();
  if (i || nn) {
    let s = nn ? nn._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(i && i.proxy) : t;
  }
}
const vl = /* @__PURE__ */ Symbol.for("v-scx"), yl = () => kn(vl);
function Zt(e, t, n) {
  return ba(e, t, n);
}
function ba(e, t, n = ve) {
  const { immediate: i, deep: s, flush: r, once: a } = n, o = ke({}, n), l = t && i || !t && r !== "post";
  let c;
  if (On) {
    if (r === "sync") {
      const m = yl();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = ft, m.resume = ft, m.pause = ft, m;
    }
  }
  const u = Pe;
  o.call = (m, S, k) => et(m, u, S, k);
  let d = !1;
  r === "post" ? o.scheduler = (m) => {
    ze(m, u && u.suspense);
  } : r !== "sync" && (d = !0, o.scheduler = (m, S) => {
    S ? m() : xs(m);
  }), o.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const p = pl(e, t, o);
  return On && (c ? c.push(p) : l && p()), p;
}
function bl(e, t, n) {
  const i = this.proxy, s = be(e) ? e.includes(".") ? _a(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Y(t) ? r = t : (r = t.handler, n = t);
  const a = Fn(this), o = ba(s, r.bind(i), n);
  return a(), o;
}
function _a(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i;
  };
}
const _l = /* @__PURE__ */ Symbol("_vte"), xl = (e) => e.__isTeleport, Mi = /* @__PURE__ */ Symbol("_leaveCb");
function ws(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ws(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ke({ name: e.name }, t, { setup: e })
  ) : e;
}
function xa(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ks(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Yn = /* @__PURE__ */ new WeakMap();
function Sn(e, t, n, i, s = !1) {
  if (K(e)) {
    e.forEach(
      (k, G) => Sn(
        k,
        t && (K(t) ? t[G] : t),
        n,
        i,
        s
      )
    );
    return;
  }
  if (tn(i) && !s) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Sn(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Is(i.component) : i.el, a = s ? null : r, { i: o, r: l } = e, c = t && t.r, u = o.refs === ve ? o.refs = {} : o.refs, d = o.setupState, p = /* @__PURE__ */ re(d), m = d === ve ? Zr : (k) => Ks(u, k) ? !1 : se(p, k), S = (k, G) => !(G && Ks(u, G));
  if (c != null && c !== l) {
    if (Gs(t), be(c))
      u[c] = null, m(c) && (d[c] = null);
    else if (/* @__PURE__ */ Ne(c)) {
      const k = t;
      S(c, k.k) && (c.value = null), k.k && (u[k.k] = null);
    }
  }
  if (Y(l))
    jn(l, o, 12, [a, u]);
  else {
    const k = be(l), G = /* @__PURE__ */ Ne(l);
    if (k || G) {
      const V = () => {
        if (e.f) {
          const I = k ? m(l) ? d[l] : u[l] : S() || !e.k ? l.value : u[e.k];
          if (s)
            K(I) && ds(I, r);
          else if (K(I))
            I.includes(r) || I.push(r);
          else if (k)
            u[l] = [r], m(l) && (d[l] = u[l]);
          else {
            const z = [r];
            S(l, e.k) && (l.value = z), e.k && (u[e.k] = z);
          }
        } else k ? (u[l] = a, m(l) && (d[l] = a)) : G && (S(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const I = () => {
          V(), Yn.delete(e);
        };
        I.id = -1, Yn.set(e, I), ze(I, n);
      } else
        Gs(e), V();
    }
  }
}
function Gs(e) {
  const t = Yn.get(e);
  t && (t.flags |= 8, Yn.delete(e));
}
vi().requestIdleCallback;
vi().cancelIdleCallback;
const tn = (e) => !!e.type.__asyncLoader, wa = (e) => e.type.__isKeepAlive;
function wl(e, t) {
  ka(e, "a", t);
}
function kl(e, t) {
  ka(e, "da", t);
}
function ka(e, t, n = Pe) {
  const i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (wi(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      wa(s.parent.vnode) && Sl(i, t, n, s), s = s.parent;
  }
}
function Sl(e, t, n, i) {
  const s = wi(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Ca(() => {
    ds(i[t], s);
  }, n);
}
function wi(e, t, n = Pe, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...a) => {
      kt();
      const o = Fn(n), l = et(t, n, e, a);
      return o(), St(), l;
    });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
const $t = (e) => (t, n = Pe) => {
  (!On || e === "sp") && wi(e, (...i) => t(...i), n);
}, Cl = $t("bm"), ks = $t("m"), Tl = $t(
  "bu"
), Al = $t("u"), Sa = $t(
  "bum"
), Ca = $t("um"), $l = $t(
  "sp"
), Il = $t("rtg"), El = $t("rtc");
function Ol(e, t = Pe) {
  wi("ec", e, t);
}
const Pl = "components", Ta = /* @__PURE__ */ Symbol.for("v-ndc");
function Nl(e) {
  return be(e) ? Rl(Pl, e, !1) || e : e || Ta;
}
function Rl(e, t, n = !0, i = !1) {
  const s = Fe || Pe;
  if (s) {
    const r = s.type;
    {
      const o = bc(
        r,
        !1
      );
      if (o && (o === t || o === Ae(t) || o === gi(Ae(t))))
        return r;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ys(s[e] || r[e], t) || // global registration
      Ys(s.appContext[e], t)
    );
    return !a && i ? r : a;
  }
}
function Ys(e, t) {
  return e && (e[t] || e[Ae(t)] || e[gi(Ae(t))]);
}
function De(e, t, n, i) {
  let s;
  const r = n, a = K(e);
  if (a || be(e)) {
    const o = a && /* @__PURE__ */ Ut(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ Be(e), c = /* @__PURE__ */ Ct(e), e = bi(e)), s = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      s[u] = t(
        l ? c ? sn(Xe(e[u])) : Xe(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let o = 0; o < e; o++)
      s[o] = t(o + 1, o, void 0, r);
  } else if (pe(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (o, l) => t(o, l, void 0, r)
      );
    else {
      const o = Object.keys(e);
      s = new Array(o.length);
      for (let l = 0, c = o.length; l < c; l++) {
        const u = o[l];
        s[l] = t(e[u], u, l, r);
      }
    }
  else
    s = [];
  return s;
}
function Ml(e, t, n = {}, i, s) {
  if (Fe.ce || Fe.parent && tn(Fe.parent) && Fe.parent.ce) {
    const c = Object.keys(n).length > 0;
    return b(), Ee(
      ae,
      null,
      [We("slot", n, i)],
      c ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), b();
  const a = r && Aa(r(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = Ee(
    ae,
    {
      key: (o && !Je(o) ? o : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && i ? "_fb" : "")
    },
    a || [],
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function Aa(e) {
  return e.some((t) => Ts(t) ? !(t.type === Tt || t.type === ae && !Aa(t.children)) : !0) ? e : null;
}
const Wi = (e) => e ? Ka(e) ? Is(e) : Wi(e.parent) : null, Cn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ke(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Wi(e.parent),
    $root: (e) => Wi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ia(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      xs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xi.bind(e.proxy)),
    $watch: (e) => bl.bind(e)
  })
), ji = (e, t) => e !== ve && !e.__isScriptSetup && se(e, t), jl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: s, props: r, accessCache: a, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const p = a[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (ji(i, t))
          return a[t] = 1, i[t];
        if (s !== ve && se(s, t))
          return a[t] = 2, s[t];
        if (se(r, t))
          return a[t] = 3, r[t];
        if (n !== ve && se(n, t))
          return a[t] = 4, n[t];
        Ki && (a[t] = 0);
      }
    }
    const c = Cn[t];
    let u, d;
    if (c)
      return t === "$attrs" && Oe(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ve && se(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, se(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: s, ctx: r } = e;
    return ji(s, t) ? (s[t] = n, !0) : i !== ve && se(i, t) ? (i[t] = n, !0) : se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, props: r, type: a }
  }, o) {
    let l;
    return !!(n[o] || e !== ve && o[0] !== "$" && se(e, o) || ji(t, o) || se(r, o) || se(i, o) || se(Cn, o) || se(s.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Qs(e) {
  return K(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ki = !0;
function Fl(e) {
  const t = Ia(e), n = e.proxy, i = e.ctx;
  Ki = !1, t.beforeCreate && Js(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: a,
    watch: o,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: m,
    updated: S,
    activated: k,
    deactivated: G,
    beforeDestroy: V,
    beforeUnmount: I,
    destroyed: z,
    unmounted: D,
    render: P,
    renderTracked: ce,
    renderTriggered: le,
    errorCaptured: T,
    serverPrefetch: M,
    // public API
    expose: J,
    inheritAttrs: xe,
    // assets
    components: nt,
    directives: Dn,
    filters: Ai
  } = t;
  if (c && Dl(c, i, null), a)
    for (const we in a) {
      const me = a[we];
      Y(me) && (i[we] = me.bind(n));
    }
  if (s) {
    const we = s.call(n, n);
    pe(we) && (e.data = /* @__PURE__ */ ln(we));
  }
  if (Ki = !0, r)
    for (const we in r) {
      const me = r[we], Rt = Y(me) ? me.bind(n, n) : Y(me.get) ? me.get.bind(n, n) : ft, Vn = !Y(me) && Y(me.set) ? me.set.bind(n) : ft, Mt = de({
        get: Rt,
        set: Vn
      });
      Object.defineProperty(i, we, {
        enumerable: !0,
        configurable: !0,
        get: () => Mt.value,
        set: (it) => Mt.value = it
      });
    }
  if (o)
    for (const we in o)
      $a(o[we], i, n, we);
  if (l) {
    const we = Y(l) ? l.call(n) : l;
    Reflect.ownKeys(we).forEach((me) => {
      ya(me, we[me]);
    });
  }
  u && Js(u, e, "c");
  function Re(we, me) {
    K(me) ? me.forEach((Rt) => we(Rt.bind(n))) : me && we(me.bind(n));
  }
  if (Re(Cl, d), Re(ks, p), Re(Tl, m), Re(Al, S), Re(wl, k), Re(kl, G), Re(Ol, T), Re(El, ce), Re(Il, le), Re(Sa, I), Re(Ca, D), Re($l, M), K(J))
    if (J.length) {
      const we = e.exposed || (e.exposed = {});
      J.forEach((me) => {
        Object.defineProperty(we, me, {
          get: () => n[me],
          set: (Rt) => n[me] = Rt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === ft && (e.render = P), xe != null && (e.inheritAttrs = xe), nt && (e.components = nt), Dn && (e.directives = Dn), M && xa(e);
}
function Dl(e, t, n = ft) {
  K(e) && (e = Gi(e));
  for (const i in e) {
    const s = e[i];
    let r;
    pe(s) ? "default" in s ? r = kn(
      s.from || i,
      s.default,
      !0
    ) : r = kn(s.from || i) : r = kn(s), /* @__PURE__ */ Ne(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (a) => r.value = a
    }) : t[i] = r;
  }
}
function Js(e, t, n) {
  et(
    K(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function $a(e, t, n, i) {
  let s = i.includes(".") ? _a(n, i) : () => n[i];
  if (be(e)) {
    const r = t[e];
    Y(r) && Zt(s, r);
  } else if (Y(e))
    Zt(s, e.bind(n));
  else if (pe(e))
    if (K(e))
      e.forEach((r) => $a(r, t, n, i));
    else {
      const r = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(r) && Zt(s, r, e);
    }
}
function Ia(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: a }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !s.length && !n && !i ? l = t : (l = {}, s.length && s.forEach(
    (c) => Qn(l, c, a, !0)
  ), Qn(l, t, a)), pe(t) && r.set(t, l), l;
}
function Qn(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t;
  r && Qn(e, r, n, !0), s && s.forEach(
    (a) => Qn(e, a, n, !0)
  );
  for (const a in t)
    if (!(i && a === "expose")) {
      const o = Vl[a] || n && n[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const Vl = {
  data: Xs,
  props: er,
  emits: er,
  // objects
  methods: vn,
  computed: vn,
  // lifecycle
  beforeCreate: Me,
  created: Me,
  beforeMount: Me,
  mounted: Me,
  beforeUpdate: Me,
  updated: Me,
  beforeDestroy: Me,
  beforeUnmount: Me,
  destroyed: Me,
  unmounted: Me,
  activated: Me,
  deactivated: Me,
  errorCaptured: Me,
  serverPrefetch: Me,
  // assets
  components: vn,
  directives: vn,
  // watch
  watch: Ll,
  // provide / inject
  provide: Xs,
  inject: zl
};
function Xs(e, t) {
  return t ? e ? function() {
    return ke(
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function zl(e, t) {
  return vn(Gi(e), Gi(t));
}
function Gi(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function vn(e, t) {
  return e ? ke(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function er(e, t) {
  return e ? K(e) && K(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ke(
    /* @__PURE__ */ Object.create(null),
    Qs(e),
    Qs(t ?? {})
  ) : t;
}
function Ll(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ke(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Me(e[i], t[i]);
  return n;
}
function Ea() {
  return {
    app: null,
    config: {
      isNativeTag: Zr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ul = 0;
function Zl(e, t) {
  return function(i, s = null) {
    Y(i) || (i = ke({}, i)), s != null && !pe(s) && (s = null);
    const r = Ea(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = r.app = {
      _uid: Ul++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: xc,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return a.has(u) || (u && Y(u.install) ? (a.add(u), u.install(c, ...d)) : Y(u) && (a.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), c;
      },
      component(u, d) {
        return d ? (r.components[u] = d, c) : r.components[u];
      },
      directive(u, d) {
        return d ? (r.directives[u] = d, c) : r.directives[u];
      },
      mount(u, d, p) {
        if (!l) {
          const m = c._ceVNode || We(i, s);
          return m.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(m, u, p), l = !0, c._container = u, u.__vue_app__ = c, Is(m.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (et(
          o,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return r.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = nn;
        nn = c;
        try {
          return u();
        } finally {
          nn = d;
        }
      }
    };
    return c;
  };
}
let nn = null;
const Hl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ae(t)}Modifiers`] || e[`${qe(t)}Modifiers`];
function ql(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || ve;
  let s = n;
  const r = t.startsWith("update:"), a = r && Hl(i, t.slice(7));
  a && (a.trim && (s = n.map((u) => be(u) ? u.trim() : u)), a.number && (s = n.map(Po)));
  let o, l = i[o = Ii(t)] || // also try camelCase event handler (#2249)
  i[o = Ii(Ae(t))];
  !l && r && (l = i[o = Ii(qe(t))]), l && et(
    l,
    e,
    6,
    s
  );
  const c = i[o + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, et(
      c,
      e,
      6,
      s
    );
  }
}
const Bl = /* @__PURE__ */ new WeakMap();
function Oa(e, t, n = !1) {
  const i = n ? Bl : t.emitsCache, s = i.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let a = {}, o = !1;
  if (!Y(e)) {
    const l = (c) => {
      const u = Oa(c, t, !0);
      u && (o = !0, ke(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (pe(e) && i.set(e, null), null) : (K(r) ? r.forEach((l) => a[l] = null) : ke(a, r), pe(e) && i.set(e, a), a);
}
function ki(e, t) {
  return !e || !fi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, qe(t)) || se(e, t));
}
function tr(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    propsOptions: [r],
    slots: a,
    attrs: o,
    emit: l,
    render: c,
    renderCache: u,
    props: d,
    data: p,
    setupState: m,
    ctx: S,
    inheritAttrs: k
  } = e, G = Gn(e);
  let V, I;
  try {
    if (n.shapeFlag & 4) {
      const D = s || i, P = D;
      V = ut(
        c.call(
          P,
          D,
          u,
          d,
          m,
          p,
          S
        )
      ), I = o;
    } else {
      const D = t;
      V = ut(
        D.length > 1 ? D(
          d,
          { attrs: o, slots: a, emit: l }
        ) : D(
          d,
          null
        )
      ), I = t.props ? o : Wl(o);
    }
  } catch (D) {
    Tn.length = 0, _i(D, e, 1), V = We(Tt);
  }
  let z = V;
  if (I && k !== !1) {
    const D = Object.keys(I), { shapeFlag: P } = z;
    D.length && P & 7 && (r && D.some(pi) && (I = Kl(
      I,
      r
    )), z = rn(z, I, !1, !0));
  }
  return n.dirs && (z = rn(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition && ws(z, n.transition), V = z, Gn(G), V;
}
const Wl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || fi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Kl = (e, t) => {
  const n = {};
  for (const i in e)
    (!pi(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Gl(e, t, n) {
  const { props: i, children: s, component: r } = e, { props: a, children: o, patchFlag: l } = t, c = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? nr(i, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (Pa(a, i, p) && !ki(c, p))
          return !0;
      }
    }
  } else
    return (s || o) && (!o || !o.$stable) ? !0 : i === a ? !1 : i ? a ? nr(i, a, c) : !0 : !!a;
  return !1;
}
function nr(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (Pa(t, e, r) && !ki(n, r))
      return !0;
  }
  return !1;
}
function Pa(e, t, n) {
  const i = e[n], s = t[n];
  return n === "style" && pe(i) && pe(s) ? !ps(i, s) : i !== s;
}
function Yl({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = i, e = s), s === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Na = {}, Ra = () => Object.create(Na), Ma = (e) => Object.getPrototypeOf(e) === Na;
function Ql(e, t, n, i = !1) {
  const s = {}, r = Ra();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ja(e, t, s, r);
  for (const a in e.propsOptions[0])
    a in s || (s[a] = void 0);
  n ? e.props = i ? s : /* @__PURE__ */ rl(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function Jl(e, t, n, i) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: a }
  } = e, o = /* @__PURE__ */ re(s), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let p = u[d];
        if (ki(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (l)
          if (se(r, p))
            m !== r[p] && (r[p] = m, c = !0);
          else {
            const S = Ae(p);
            s[S] = Yi(
              l,
              o,
              S,
              m,
              e,
              !1
            );
          }
        else
          m !== r[p] && (r[p] = m, c = !0);
      }
    }
  } else {
    ja(e, t, s, r) && (c = !0);
    let u;
    for (const d in o)
      (!t || // for camelCase
      !se(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = qe(d)) === d || !se(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (s[d] = Yi(
        l,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete s[d]);
    if (r !== o)
      for (const d in r)
        (!t || !se(t, d)) && (delete r[d], c = !0);
  }
  c && _t(e.attrs, "set", "");
}
function ja(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let a = !1, o;
  if (t)
    for (let l in t) {
      if (_n(l))
        continue;
      const c = t[l];
      let u;
      s && se(s, u = Ae(l)) ? !r || !r.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : ki(e.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, a = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ re(n), c = o || ve;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Yi(
        s,
        l,
        d,
        c[d],
        e,
        !se(c, d)
      );
    }
  }
  return a;
}
function Yi(e, t, n, i, s, r) {
  const a = e[n];
  if (a != null) {
    const o = se(a, "default");
    if (o && i === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && Y(l)) {
        const { propsDefaults: c } = s;
        if (n in c)
          i = c[n];
        else {
          const u = Fn(s);
          i = c[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        i = l;
      s.ce && s.ce._setProp(n, i);
    }
    a[
      0
      /* shouldCast */
    ] && (r && !o ? i = !1 : a[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === qe(n)) && (i = !0));
  }
  return i;
}
const Xl = /* @__PURE__ */ new WeakMap();
function Fa(e, t, n = !1) {
  const i = n ? Xl : t.propsCache, s = i.get(e);
  if (s)
    return s;
  const r = e.props, a = {}, o = [];
  let l = !1;
  if (!Y(e)) {
    const u = (d) => {
      l = !0;
      const [p, m] = Fa(d, t, !0);
      ke(a, p), m && o.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return pe(e) && i.set(e, Jt), Jt;
  if (K(r))
    for (let u = 0; u < r.length; u++) {
      const d = Ae(r[u]);
      ir(d) && (a[d] = ve);
    }
  else if (r)
    for (const u in r) {
      const d = Ae(u);
      if (ir(d)) {
        const p = r[u], m = a[d] = K(p) || Y(p) ? { type: p } : ke({}, p), S = m.type;
        let k = !1, G = !0;
        if (K(S))
          for (let V = 0; V < S.length; ++V) {
            const I = S[V], z = Y(I) && I.name;
            if (z === "Boolean") {
              k = !0;
              break;
            } else z === "String" && (G = !1);
          }
        else
          k = Y(S) && S.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = k, m[
          1
          /* shouldCastTrue */
        ] = G, (k || se(m, "default")) && o.push(d);
      }
    }
  const c = [a, o];
  return pe(e) && i.set(e, c), c;
}
function ir(e) {
  return e[0] !== "$" && !_n(e);
}
const Ss = (e) => e === "_" || e === "_ctx" || e === "$stable", Cs = (e) => K(e) ? e.map(ut) : [ut(e)], ec = (e, t, n) => {
  if (t._n)
    return t;
  const i = va((...s) => Cs(t(...s)), n);
  return i._c = !1, i;
}, Da = (e, t, n) => {
  const i = e._ctx;
  for (const s in e) {
    if (Ss(s)) continue;
    const r = e[s];
    if (Y(r))
      t[s] = ec(s, r, i);
    else if (r != null) {
      const a = Cs(r);
      t[s] = () => a;
    }
  }
}, Va = (e, t) => {
  const n = Cs(t);
  e.slots.default = () => n;
}, za = (e, t, n) => {
  for (const i in t)
    (n || !Ss(i)) && (e[i] = t[i]);
}, tc = (e, t, n) => {
  const i = e.slots = Ra();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (za(i, t, n), n && Wr(i, "_", s, !0)) : Da(t, i);
  } else t && Va(e, t);
}, nc = (e, t, n) => {
  const { vnode: i, slots: s } = e;
  let r = !0, a = ve;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : za(s, t, n) : (r = !t.$stable, Da(t, s)), a = t;
  } else t && (Va(e, t), a = { default: 1 });
  if (r)
    for (const o in s)
      !Ss(o) && a[o] == null && delete s[o];
}, ze = oc;
function ic(e) {
  return sc(e);
}
function sc(e, t) {
  const n = vi();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: s,
    patchProp: r,
    createElement: a,
    createText: o,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: p,
    setScopeId: m = ft,
    insertStaticContent: S
  } = e, k = (f, h, g, x = null, y = null, v = null, E = void 0, $ = null, A = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !pn(f, h) && (x = zn(f), it(f, y, v, !0), f = null), h.patchFlag === -2 && (A = !1, h.dynamicChildren = null);
    const { type: _, ref: Z, shapeFlag: N } = h;
    switch (_) {
      case Si:
        G(f, h, g, x);
        break;
      case Tt:
        V(f, h, g, x);
        break;
      case Di:
        f == null && I(h, g, x, E);
        break;
      case ae:
        nt(
          f,
          h,
          g,
          x,
          y,
          v,
          E,
          $,
          A
        );
        break;
      default:
        N & 1 ? P(
          f,
          h,
          g,
          x,
          y,
          v,
          E,
          $,
          A
        ) : N & 6 ? Dn(
          f,
          h,
          g,
          x,
          y,
          v,
          E,
          $,
          A
        ) : (N & 64 || N & 128) && _.process(
          f,
          h,
          g,
          x,
          y,
          v,
          E,
          $,
          A,
          un
        );
    }
    Z != null && y ? Sn(Z, f && f.ref, v, h || f, !h) : Z == null && f && f.ref != null && Sn(f.ref, null, v, f, !0);
  }, G = (f, h, g, x) => {
    if (f == null)
      i(
        h.el = o(h.children),
        g,
        x
      );
    else {
      const y = h.el = f.el;
      h.children !== f.children && c(y, h.children);
    }
  }, V = (f, h, g, x) => {
    f == null ? i(
      h.el = l(h.children || ""),
      g,
      x
    ) : h.el = f.el;
  }, I = (f, h, g, x) => {
    [f.el, f.anchor] = S(
      f.children,
      h,
      g,
      x,
      f.el,
      f.anchor
    );
  }, z = ({ el: f, anchor: h }, g, x) => {
    let y;
    for (; f && f !== h; )
      y = p(f), i(f, g, x), f = y;
    i(h, g, x);
  }, D = ({ el: f, anchor: h }) => {
    let g;
    for (; f && f !== h; )
      g = p(f), s(f), f = g;
    s(h);
  }, P = (f, h, g, x, y, v, E, $, A) => {
    if (h.type === "svg" ? E = "svg" : h.type === "math" && (E = "mathml"), f == null)
      ce(
        h,
        g,
        x,
        y,
        v,
        E,
        $,
        A
      );
    else {
      const _ = f.el && f.el._isVueCE ? f.el : null;
      try {
        _ && _._beginPatch(), M(
          f,
          h,
          y,
          v,
          E,
          $,
          A
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, ce = (f, h, g, x, y, v, E, $) => {
    let A, _;
    const { props: Z, shapeFlag: N, transition: L, dirs: W } = f;
    if (A = f.el = a(
      f.type,
      v,
      Z && Z.is,
      Z
    ), N & 8 ? u(A, f.children) : N & 16 && T(
      f.children,
      A,
      null,
      x,
      y,
      Fi(f, v),
      E,
      $
    ), W && jt(f, null, x, "created"), le(A, f, f.scopeId, E, x), Z) {
      for (const he in Z)
        he !== "value" && !_n(he) && r(A, he, null, Z[he], v, x);
      "value" in Z && r(A, "value", null, Z.value, v), (_ = Z.onVnodeBeforeMount) && ot(_, x, f);
    }
    W && jt(f, null, x, "beforeMount");
    const ne = rc(y, L);
    ne && L.beforeEnter(A), i(A, h, g), ((_ = Z && Z.onVnodeMounted) || ne || W) && ze(() => {
      try {
        _ && ot(_, x, f), ne && L.enter(A), W && jt(f, null, x, "mounted");
      } finally {
      }
    }, y);
  }, le = (f, h, g, x, y) => {
    if (g && m(f, g), x)
      for (let v = 0; v < x.length; v++)
        m(f, x[v]);
    if (y) {
      let v = y.subTree;
      if (h === v || Ha(v.type) && (v.ssContent === h || v.ssFallback === h)) {
        const E = y.vnode;
        le(
          f,
          E,
          E.scopeId,
          E.slotScopeIds,
          y.parent
        );
      }
    }
  }, T = (f, h, g, x, y, v, E, $, A = 0) => {
    for (let _ = A; _ < f.length; _++) {
      const Z = f[_] = $ ? bt(f[_]) : ut(f[_]);
      k(
        null,
        Z,
        h,
        g,
        x,
        y,
        v,
        E,
        $
      );
    }
  }, M = (f, h, g, x, y, v, E) => {
    const $ = h.el = f.el;
    let { patchFlag: A, dynamicChildren: _, dirs: Z } = h;
    A |= f.patchFlag & 16;
    const N = f.props || ve, L = h.props || ve;
    let W;
    if (g && Ft(g, !1), (W = L.onVnodeBeforeUpdate) && ot(W, g, h, f), Z && jt(h, f, g, "beforeUpdate"), g && Ft(g, !0), (N.innerHTML && L.innerHTML == null || N.textContent && L.textContent == null) && u($, ""), _ ? J(
      f.dynamicChildren,
      _,
      $,
      g,
      x,
      Fi(h, y),
      v
    ) : E || me(
      f,
      h,
      $,
      null,
      g,
      x,
      Fi(h, y),
      v,
      !1
    ), A > 0) {
      if (A & 16)
        xe($, N, L, g, y);
      else if (A & 2 && N.class !== L.class && r($, "class", null, L.class, y), A & 4 && r($, "style", N.style, L.style, y), A & 8) {
        const ne = h.dynamicProps;
        for (let he = 0; he < ne.length; he++) {
          const ue = ne[he], Se = N[ue], $e = L[ue];
          ($e !== Se || ue === "value") && r($, ue, Se, $e, y, g);
        }
      }
      A & 1 && f.children !== h.children && u($, h.children);
    } else !E && _ == null && xe($, N, L, g, y);
    ((W = L.onVnodeUpdated) || Z) && ze(() => {
      W && ot(W, g, h, f), Z && jt(h, f, g, "updated");
    }, x);
  }, J = (f, h, g, x, y, v, E) => {
    for (let $ = 0; $ < h.length; $++) {
      const A = f[$], _ = h[$], Z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (A.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !pn(A, _) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 198) ? d(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      k(
        A,
        _,
        Z,
        null,
        x,
        y,
        v,
        E,
        !0
      );
    }
  }, xe = (f, h, g, x, y) => {
    if (h !== g) {
      if (h !== ve)
        for (const v in h)
          !_n(v) && !(v in g) && r(
            f,
            v,
            h[v],
            null,
            y,
            x
          );
      for (const v in g) {
        if (_n(v)) continue;
        const E = g[v], $ = h[v];
        E !== $ && v !== "value" && r(f, v, $, E, y, x);
      }
      "value" in g && r(f, "value", h.value, g.value, y);
    }
  }, nt = (f, h, g, x, y, v, E, $, A) => {
    const _ = h.el = f ? f.el : o(""), Z = h.anchor = f ? f.anchor : o("");
    let { patchFlag: N, dynamicChildren: L, slotScopeIds: W } = h;
    W && ($ = $ ? $.concat(W) : W), f == null ? (i(_, g, x), i(Z, g, x), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      g,
      Z,
      y,
      v,
      E,
      $,
      A
    )) : N > 0 && N & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === L.length ? (J(
      f.dynamicChildren,
      L,
      g,
      y,
      v,
      E,
      $
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || y && h === y.subTree) && La(
      f,
      h,
      !0
      /* shallow */
    )) : me(
      f,
      h,
      g,
      Z,
      y,
      v,
      E,
      $,
      A
    );
  }, Dn = (f, h, g, x, y, v, E, $, A) => {
    h.slotScopeIds = $, f == null ? h.shapeFlag & 512 ? y.ctx.activate(
      h,
      g,
      x,
      E,
      A
    ) : Ai(
      h,
      g,
      x,
      y,
      v,
      E,
      A
    ) : Ms(f, h, A);
  }, Ai = (f, h, g, x, y, v, E) => {
    const $ = f.component = hc(
      f,
      x,
      y
    );
    if (wa(f) && ($.ctx.renderer = un), mc($, !1, E), $.asyncDep) {
      if (y && y.registerDep($, Re, E), !f.el) {
        const A = $.subTree = We(Tt);
        V(null, A, h, g), f.placeholder = A.el;
      }
    } else
      Re(
        $,
        f,
        h,
        g,
        y,
        v,
        E
      );
  }, Ms = (f, h, g) => {
    const x = h.component = f.component;
    if (Gl(f, h, g))
      if (x.asyncDep && !x.asyncResolved) {
        we(x, h, g);
        return;
      } else
        x.next = h, x.update();
    else
      h.el = f.el, x.vnode = h;
  }, Re = (f, h, g, x, y, v, E) => {
    const $ = () => {
      if (f.isMounted) {
        let { next: N, bu: L, u: W, parent: ne, vnode: he } = f;
        {
          const rt = Ua(f);
          if (rt) {
            N && (N.el = he.el, we(f, N, E)), rt.asyncDep.then(() => {
              ze(() => {
                f.isUnmounted || _();
              }, y);
            });
            return;
          }
        }
        let ue = N, Se;
        Ft(f, !1), N ? (N.el = he.el, we(f, N, E)) : N = he, L && Ei(L), (Se = N.props && N.props.onVnodeBeforeUpdate) && ot(Se, ne, N, he), Ft(f, !0);
        const $e = tr(f), st = f.subTree;
        f.subTree = $e, k(
          st,
          $e,
          // parent may have changed if it's in a teleport
          d(st.el),
          // anchor may have changed if it's in a fragment
          zn(st),
          f,
          y,
          v
        ), N.el = $e.el, ue === null && Yl(f, $e.el), W && ze(W, y), (Se = N.props && N.props.onVnodeUpdated) && ze(
          () => ot(Se, ne, N, he),
          y
        );
      } else {
        let N;
        const { el: L, props: W } = h, { bm: ne, m: he, parent: ue, root: Se, type: $e } = f, st = tn(h);
        Ft(f, !1), ne && Ei(ne), !st && (N = W && W.onVnodeBeforeMount) && ot(N, ue, h), Ft(f, !0);
        {
          Se.ce && Se.ce._hasShadowRoot() && Se.ce._injectChildStyle(
            $e,
            f.parent ? f.parent.type : void 0
          );
          const rt = f.subTree = tr(f);
          k(
            null,
            rt,
            g,
            x,
            f,
            y,
            v
          ), h.el = rt.el;
        }
        if (he && ze(he, y), !st && (N = W && W.onVnodeMounted)) {
          const rt = h;
          ze(
            () => ot(N, ue, rt),
            y
          );
        }
        (h.shapeFlag & 256 || ue && tn(ue.vnode) && ue.vnode.shapeFlag & 256) && f.a && ze(f.a, y), f.isMounted = !0, h = g = x = null;
      }
    };
    f.scope.on();
    const A = f.effect = new Qr($);
    f.scope.off();
    const _ = f.update = A.run.bind(A), Z = f.job = A.runIfDirty.bind(A);
    Z.i = f, Z.id = f.uid, A.scheduler = () => xs(Z), Ft(f, !0), _();
  }, we = (f, h, g) => {
    h.component = f;
    const x = f.vnode.props;
    f.vnode = h, f.next = null, Jl(f, h.props, x, g), nc(f, h.children, g), kt(), Ws(f), St();
  }, me = (f, h, g, x, y, v, E, $, A = !1) => {
    const _ = f && f.children, Z = f ? f.shapeFlag : 0, N = h.children, { patchFlag: L, shapeFlag: W } = h;
    if (L > 0) {
      if (L & 128) {
        Vn(
          _,
          N,
          g,
          x,
          y,
          v,
          E,
          $,
          A
        );
        return;
      } else if (L & 256) {
        Rt(
          _,
          N,
          g,
          x,
          y,
          v,
          E,
          $,
          A
        );
        return;
      }
    }
    W & 8 ? (Z & 16 && cn(_, y, v), N !== _ && u(g, N)) : Z & 16 ? W & 16 ? Vn(
      _,
      N,
      g,
      x,
      y,
      v,
      E,
      $,
      A
    ) : cn(_, y, v, !0) : (Z & 8 && u(g, ""), W & 16 && T(
      N,
      g,
      x,
      y,
      v,
      E,
      $,
      A
    ));
  }, Rt = (f, h, g, x, y, v, E, $, A) => {
    f = f || Jt, h = h || Jt;
    const _ = f.length, Z = h.length, N = Math.min(_, Z);
    let L;
    for (L = 0; L < N; L++) {
      const W = h[L] = A ? bt(h[L]) : ut(h[L]);
      k(
        f[L],
        W,
        g,
        null,
        y,
        v,
        E,
        $,
        A
      );
    }
    _ > Z ? cn(
      f,
      y,
      v,
      !0,
      !1,
      N
    ) : T(
      h,
      g,
      x,
      y,
      v,
      E,
      $,
      A,
      N
    );
  }, Vn = (f, h, g, x, y, v, E, $, A) => {
    let _ = 0;
    const Z = h.length;
    let N = f.length - 1, L = Z - 1;
    for (; _ <= N && _ <= L; ) {
      const W = f[_], ne = h[_] = A ? bt(h[_]) : ut(h[_]);
      if (pn(W, ne))
        k(
          W,
          ne,
          g,
          null,
          y,
          v,
          E,
          $,
          A
        );
      else
        break;
      _++;
    }
    for (; _ <= N && _ <= L; ) {
      const W = f[N], ne = h[L] = A ? bt(h[L]) : ut(h[L]);
      if (pn(W, ne))
        k(
          W,
          ne,
          g,
          null,
          y,
          v,
          E,
          $,
          A
        );
      else
        break;
      N--, L--;
    }
    if (_ > N) {
      if (_ <= L) {
        const W = L + 1, ne = W < Z ? h[W].el : x;
        for (; _ <= L; )
          k(
            null,
            h[_] = A ? bt(h[_]) : ut(h[_]),
            g,
            ne,
            y,
            v,
            E,
            $,
            A
          ), _++;
      }
    } else if (_ > L)
      for (; _ <= N; )
        it(f[_], y, v, !0), _++;
    else {
      const W = _, ne = _, he = /* @__PURE__ */ new Map();
      for (_ = ne; _ <= L; _++) {
        const Ue = h[_] = A ? bt(h[_]) : ut(h[_]);
        Ue.key != null && he.set(Ue.key, _);
      }
      let ue, Se = 0;
      const $e = L - ne + 1;
      let st = !1, rt = 0;
      const dn = new Array($e);
      for (_ = 0; _ < $e; _++) dn[_] = 0;
      for (_ = W; _ <= N; _++) {
        const Ue = f[_];
        if (Se >= $e) {
          it(Ue, y, v, !0);
          continue;
        }
        let at;
        if (Ue.key != null)
          at = he.get(Ue.key);
        else
          for (ue = ne; ue <= L; ue++)
            if (dn[ue - ne] === 0 && pn(Ue, h[ue])) {
              at = ue;
              break;
            }
        at === void 0 ? it(Ue, y, v, !0) : (dn[at - ne] = _ + 1, at >= rt ? rt = at : st = !0, k(
          Ue,
          h[at],
          g,
          null,
          y,
          v,
          E,
          $,
          A
        ), Se++);
      }
      const Ds = st ? ac(dn) : Jt;
      for (ue = Ds.length - 1, _ = $e - 1; _ >= 0; _--) {
        const Ue = ne + _, at = h[Ue], Vs = h[Ue + 1], zs = Ue + 1 < Z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Vs.el || Za(Vs)
        ) : x;
        dn[_] === 0 ? k(
          null,
          at,
          g,
          zs,
          y,
          v,
          E,
          $,
          A
        ) : st && (ue < 0 || _ !== Ds[ue] ? Mt(at, g, zs, 2) : ue--);
      }
    }
  }, Mt = (f, h, g, x, y = null) => {
    const { el: v, type: E, transition: $, children: A, shapeFlag: _ } = f;
    if (_ & 6) {
      Mt(f.component.subTree, h, g, x);
      return;
    }
    if (_ & 128) {
      f.suspense.move(h, g, x);
      return;
    }
    if (_ & 64) {
      E.move(f, h, g, un);
      return;
    }
    if (E === ae) {
      i(v, h, g);
      for (let N = 0; N < A.length; N++)
        Mt(A[N], h, g, x);
      i(f.anchor, h, g);
      return;
    }
    if (E === Di) {
      z(f, h, g);
      return;
    }
    if (x !== 2 && _ & 1 && $)
      if (x === 0)
        $.persisted && !v[Mi] ? i(v, h, g) : ($.beforeEnter(v), i(v, h, g), ze(() => $.enter(v), y));
      else {
        const { leave: N, delayLeave: L, afterLeave: W } = $, ne = () => {
          f.ctx.isUnmounted ? s(v) : i(v, h, g);
        }, he = () => {
          const ue = v._isLeaving || !!v[Mi];
          v._isLeaving && v[Mi](
            !0
            /* cancelled */
          ), $.persisted && !ue ? ne() : N(v, () => {
            ne(), W && W();
          });
        };
        L ? L(v, ne, he) : he();
      }
    else
      i(v, h, g);
  }, it = (f, h, g, x = !1, y = !1) => {
    const {
      type: v,
      props: E,
      ref: $,
      children: A,
      dynamicChildren: _,
      shapeFlag: Z,
      patchFlag: N,
      dirs: L,
      cacheIndex: W,
      memo: ne
    } = f;
    if (N === -2 && (y = !1), $ != null && (kt(), Sn($, null, g, f, !0), St()), W != null && (h.renderCache[W] = void 0), Z & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const he = Z & 1 && L, ue = !tn(f);
    let Se;
    if (ue && (Se = E && E.onVnodeBeforeUnmount) && ot(Se, h, f), Z & 6)
      Co(f.component, g, x);
    else {
      if (Z & 128) {
        f.suspense.unmount(g, x);
        return;
      }
      he && jt(f, null, h, "beforeUnmount"), Z & 64 ? f.type.remove(
        f,
        h,
        g,
        un,
        x
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== ae || N > 0 && N & 64) ? cn(
        _,
        h,
        g,
        !1,
        !0
      ) : (v === ae && N & 384 || !y && Z & 16) && cn(A, h, g), x && js(f);
    }
    const $e = ne != null && W == null;
    (ue && (Se = E && E.onVnodeUnmounted) || he || $e) && ze(() => {
      Se && ot(Se, h, f), he && jt(f, null, h, "unmounted"), $e && (f.el = null);
    }, g);
  }, js = (f) => {
    const { type: h, el: g, anchor: x, transition: y } = f;
    if (h === ae) {
      So(g, x);
      return;
    }
    if (h === Di) {
      D(f);
      return;
    }
    const v = () => {
      s(g), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (f.shapeFlag & 1 && y && !y.persisted) {
      const { leave: E, delayLeave: $ } = y, A = () => E(g, v);
      $ ? $(f.el, v, A) : A();
    } else
      v();
  }, So = (f, h) => {
    let g;
    for (; f !== h; )
      g = p(f), s(f), f = g;
    s(h);
  }, Co = (f, h, g) => {
    const { bum: x, scope: y, job: v, subTree: E, um: $, m: A, a: _ } = f;
    sr(A), sr(_), x && Ei(x), y.stop(), v && (v.flags |= 8, it(E, f, h, g)), $ && ze($, h), ze(() => {
      f.isUnmounted = !0;
    }, h);
  }, cn = (f, h, g, x = !1, y = !1, v = 0) => {
    for (let E = v; E < f.length; E++)
      it(f[E], h, g, x, y);
  }, zn = (f) => {
    if (f.shapeFlag & 6)
      return zn(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = p(f.anchor || f.el), g = h && h[_l];
    return g ? p(g) : h;
  };
  let $i = !1;
  const Fs = (f, h, g) => {
    let x;
    f == null ? h._vnode && (it(h._vnode, null, null, !0), x = h._vnode.component) : k(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      g
    ), h._vnode = f, $i || ($i = !0, Ws(x), ha(), $i = !1);
  }, un = {
    p: k,
    um: it,
    m: Mt,
    r: js,
    mt: Ai,
    mc: T,
    pc: me,
    pbc: J,
    n: zn,
    o: e
  };
  return {
    render: Fs,
    hydrate: void 0,
    createApp: Zl(Fs)
  };
}
function Fi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ft({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function La(e, t, n = !1) {
  const i = e.children, s = t.children;
  if (K(i) && K(s))
    for (let r = 0; r < i.length; r++) {
      const a = i[r];
      let o = s[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = s[r] = bt(s[r]), o.el = a.el), !n && o.patchFlag !== -2 && La(a, o)), o.type === Si && (o.patchFlag === -1 && (o = s[r] = bt(o)), o.el = a.el), o.type === Tt && !o.el && (o.el = a.el);
    }
}
function ac(e) {
  const t = e.slice(), n = [0];
  let i, s, r, a, o;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const c = e[i];
    if (c !== 0) {
      if (s = n[n.length - 1], e[s] < c) {
        t[i] = s, n.push(i);
        continue;
      }
      for (r = 0, a = n.length - 1; r < a; )
        o = r + a >> 1, e[n[o]] < c ? r = o + 1 : a = o;
      c < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, a = n[r - 1]; r-- > 0; )
    n[r] = a, a = t[a];
  return n;
}
function Ua(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ua(t);
}
function sr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Za(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Za(t.subTree) : null;
}
const Ha = (e) => e.__isSuspense;
function oc(e, t) {
  t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : gl(e);
}
const ae = /* @__PURE__ */ Symbol.for("v-fgt"), Si = /* @__PURE__ */ Symbol.for("v-txt"), Tt = /* @__PURE__ */ Symbol.for("v-cmt"), Di = /* @__PURE__ */ Symbol.for("v-stc"), Tn = [];
let He = null;
function b(e = !1) {
  Tn.push(He = e ? null : []);
}
function lc() {
  Tn.pop(), He = Tn[Tn.length - 1] || null;
}
let En = 1;
function rr(e, t = !1) {
  En += e, e < 0 && He && t && (He.hasOnce = !0);
}
function qa(e) {
  return e.dynamicChildren = En > 0 ? He || Jt : null, lc(), En > 0 && He && He.push(e), e;
}
function C(e, t, n, i, s, r) {
  return qa(
    U(
      e,
      t,
      n,
      i,
      s,
      r,
      !0
    )
  );
}
function Ee(e, t, n, i, s) {
  return qa(
    We(
      e,
      t,
      n,
      i,
      s,
      !0
    )
  );
}
function Ts(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ba = ({ key: e }) => e ?? null, Hn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? be(e) || /* @__PURE__ */ Ne(e) || Y(e) ? { i: Fe, r: e, k: t, f: !!n } : e : null);
function U(e, t = null, n = null, i = 0, s = null, r = e === ae ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ba(t),
    ref: t && Hn(t),
    scopeId: ga,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Fe
  };
  return o ? ($s(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= be(n) ? 8 : 16), En > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  He && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && He.push(l), l;
}
const We = cc;
function cc(e, t = null, n = null, i = 0, s = null, r = !1) {
  if ((!e || e === Ta) && (e = Tt), Ts(e)) {
    const o = rn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $s(o, n), En > 0 && !r && He && (o.shapeFlag & 6 ? He[He.indexOf(e)] = o : He.push(o)), o.patchFlag = -2, o;
  }
  if (_c(e) && (e = e.__vccOpts), t) {
    t = uc(t);
    let { class: o, style: l } = t;
    o && !be(o) && (t.class = Ke(o)), pe(l) && (/* @__PURE__ */ _s(l) && !K(l) && (l = ke({}, l)), t.style = yi(l));
  }
  const a = be(e) ? 1 : Ha(e) ? 128 : xl(e) ? 64 : pe(e) ? 4 : Y(e) ? 2 : 0;
  return U(
    e,
    t,
    n,
    i,
    s,
    a,
    r,
    !0
  );
}
function uc(e) {
  return e ? /* @__PURE__ */ _s(e) || Ma(e) ? ke({}, e) : e : null;
}
function rn(e, t, n = !1, i = !1) {
  const { props: s, ref: r, patchFlag: a, children: o, transition: l } = e, c = t ? dc(s || {}, t) : s, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ba(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? K(r) ? r.concat(Hn(t)) : [r, Hn(t)] : Hn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ae ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && rn(e.ssContent),
    ssFallback: e.ssFallback && rn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && ws(
    u,
    l.clone(u)
  ), u;
}
function As(e = " ", t = 0) {
  return We(Si, null, e, t);
}
function ye(e = "", t = !1) {
  return t ? (b(), Ee(Tt, null, e)) : We(Tt, null, e);
}
function ut(e) {
  return e == null || typeof e == "boolean" ? We(Tt) : K(e) ? We(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ts(e) ? bt(e) : We(Si, null, String(e));
}
function bt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rn(e);
}
function $s(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (K(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), $s(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ma(t) ? t._ctx = Fe : s === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Y(t) ? (t = { default: t, _ctx: Fe }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [As(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function dc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = Ke([t.class, i.class]));
      else if (s === "style")
        t.style = yi([t.style, i.style]);
      else if (fi(s)) {
        const r = t[s], a = i[s];
        a && r !== a && !(K(r) && r.includes(a)) ? t[s] = r ? [].concat(r, a) : a : a == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !pi(s) && (t[s] = a);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function ot(e, t, n, i = null) {
  et(e, t, 7, [
    n,
    i
  ]);
}
const fc = Ea();
let pc = 0;
function hc(e, t, n) {
  const i = e.type, s = (t ? t.appContext : e.appContext) || fc, r = {
    uid: pc++,
    vnode: e,
    type: i,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new zo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Fa(i, s),
    emitsOptions: Oa(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ve,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: ve,
    data: ve,
    props: ve,
    attrs: ve,
    slots: ve,
    refs: ve,
    setupState: ve,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ql.bind(null, r), e.ce && e.ce(r), r;
}
let Pe = null;
const Wa = () => Pe || Fe;
let Jn, Qi;
{
  const e = vi(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((a) => a(r)) : s[0](r);
    };
  };
  Jn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Pe = n
  ), Qi = t(
    "__VUE_SSR_SETTERS__",
    (n) => On = n
  );
}
const Fn = (e) => {
  const t = Pe;
  return Jn(e), e.scope.on(), () => {
    e.scope.off(), Jn(t);
  };
}, ar = () => {
  Pe && Pe.scope.off(), Jn(null);
};
function Ka(e) {
  return e.vnode.shapeFlag & 4;
}
let On = !1;
function mc(e, t = !1, n = !1) {
  t && Qi(t);
  const { props: i, children: s } = e.vnode, r = Ka(e);
  Ql(e, i, r, t), tc(e, s, n || t);
  const a = r ? gc(e, t) : void 0;
  return t && Qi(!1), a;
}
function gc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, jl);
  const { setup: i } = n;
  if (i) {
    kt();
    const s = e.setupContext = i.length > 1 ? yc(e) : null, r = Fn(e), a = jn(
      i,
      e,
      0,
      [
        e.props,
        s
      ]
    ), o = qr(a);
    if (St(), r(), (o || e.sp) && !tn(e) && xa(e), o) {
      if (a.then(ar, ar), t)
        return a.then((l) => {
          or(e, l);
        }).catch((l) => {
          _i(l, e, 0);
        });
      e.asyncDep = a;
    } else
      or(e, a);
  } else
    Ga(e);
}
function or(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : pe(t) && (e.setupState = da(t)), Ga(e);
}
function Ga(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || ft);
  {
    const s = Fn(e);
    kt();
    try {
      Fl(e);
    } finally {
      St(), s();
    }
  }
}
const vc = {
  get(e, t) {
    return Oe(e, "get", ""), e[t];
  }
};
function yc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Is(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(da(al(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Cn)
        return Cn[n](e);
    },
    has(t, n) {
      return n in t || n in Cn;
    }
  })) : e.proxy;
}
function bc(e, t = !0) {
  return Y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _c(e) {
  return Y(e) && "__vccOpts" in e;
}
const de = (e, t) => /* @__PURE__ */ dl(e, t, On), xc = "3.5.35";
/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ji;
const lr = typeof window < "u" && window.trustedTypes;
if (lr)
  try {
    Ji = /* @__PURE__ */ lr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ya = Ji ? (e) => Ji.createHTML(e) : (e) => e, wc = "http://www.w3.org/2000/svg", kc = "http://www.w3.org/1998/Math/MathML", yt = typeof document < "u" ? document : null, cr = yt && /* @__PURE__ */ yt.createElement("template"), Sc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const s = t === "svg" ? yt.createElementNS(wc, e) : t === "mathml" ? yt.createElementNS(kc, e) : n ? yt.createElement(e, { is: n }) : yt.createElement(e);
    return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (e) => yt.createTextNode(e),
  createComment: (e) => yt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => yt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, s, r) {
    const a = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      cr.innerHTML = Ya(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = cr.content;
      if (i === "svg" || i === "mathml") {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Cc = /* @__PURE__ */ Symbol("_vtc");
function Tc(e, t, n) {
  const i = e[Cc];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ur = /* @__PURE__ */ Symbol("_vod"), Ac = /* @__PURE__ */ Symbol("_vsh"), $c = /* @__PURE__ */ Symbol(""), Ic = /(?:^|;)\s*display\s*:/;
function Ec(e, t, n) {
  const i = e.style, s = be(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (be(t))
        for (const a of t.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && yn(i, o, "");
        }
      else
        for (const a in t)
          n[a] == null && yn(i, a, "");
    for (const a in n) {
      a === "display" && (r = !0);
      const o = n[a];
      o != null ? Pc(
        e,
        a,
        !be(t) && t ? t[a] : void 0,
        o
      ) || yn(i, a, o) : yn(i, a, "");
    }
  } else if (s) {
    if (t !== n) {
      const a = i[$c];
      a && (n += ";" + a), i.cssText = n, r = Ic.test(n);
    }
  } else t && e.removeAttribute("style");
  ur in e && (e[ur] = r ? i.display : "", e[Ac] && (i.display = "none"));
}
const dr = /\s*!important$/;
function yn(e, t, n) {
  if (K(n))
    n.forEach((i) => yn(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Oc(e, t);
    dr.test(n) ? e.setProperty(
      qe(i),
      n.replace(dr, ""),
      "important"
    ) : e[i] = n;
  }
}
const fr = ["Webkit", "Moz", "ms"], Vi = {};
function Oc(e, t) {
  const n = Vi[t];
  if (n)
    return n;
  let i = Ae(t);
  if (i !== "filter" && i in e)
    return Vi[t] = i;
  i = gi(i);
  for (let s = 0; s < fr.length; s++) {
    const r = fr[s] + i;
    if (r in e)
      return Vi[t] = r;
  }
  return t;
}
function Pc(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && be(i) && n === i;
}
const pr = "http://www.w3.org/1999/xlink";
function hr(e, t, n, i, s, r = Do(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(pr, t.slice(6, t.length)) : e.setAttributeNS(pr, t, n) : n == null || r && !Kr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Je(n) ? String(n) : n
  );
}
function mr(e, t, n, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ya(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = Kr(n) : n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(s || t);
}
function Nc(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Rc(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const gr = /* @__PURE__ */ Symbol("_vei");
function Mc(e, t, n, i, s = null) {
  const r = e[gr] || (e[gr] = {}), a = r[t];
  if (i && a)
    a.value = i;
  else {
    const [o, l] = jc(t);
    if (i) {
      const c = r[t] = Vc(
        i,
        s
      );
      Nc(e, o, c, l);
    } else a && (Rc(e, o, a, l), r[t] = void 0);
  }
}
const vr = /(?:Once|Passive|Capture)$/;
function jc(e) {
  let t;
  if (vr.test(e)) {
    t = {};
    let i;
    for (; i = e.match(vr); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : qe(e.slice(2)), t];
}
let zi = 0;
const Fc = /* @__PURE__ */ Promise.resolve(), Dc = () => zi || (Fc.then(() => zi = 0), zi = Date.now());
function Vc(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const s = n.value;
    if (K(s)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const a = s.slice(), o = [i];
      for (let l = 0; l < a.length && !i._stopped; l++) {
        const c = a[l];
        c && et(
          c,
          t,
          5,
          o
        );
      }
    } else
      et(
        s,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Dc(), n;
}
const yr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, zc = (e, t, n, i, s, r) => {
  const a = s === "svg";
  t === "class" ? Tc(e, i, a) : t === "style" ? Ec(e, n, i) : fi(t) ? pi(t) || Mc(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Lc(e, t, i, a)) ? (mr(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && hr(e, t, i, a, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Uc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !be(i))) ? mr(e, Ae(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), hr(e, t, i, a));
};
function Lc(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yr(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return yr(t) && be(n) ? !1 : t in e;
}
function Uc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ae(t);
  return Array.isArray(n) ? n.some((s) => Ae(s) === i) : Object.keys(n).some((s) => Ae(s) === i);
}
const br = {};
// @__NO_SIDE_EFFECTS__
function Zc(e, t, n) {
  let i = /* @__PURE__ */ Te(e, t);
  hi(i) && (i = ke({}, i, t));
  class s extends Es {
    constructor(a) {
      super(i, a, n);
    }
  }
  return s.def = i, s;
}
const Hc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Es extends Hc {
  constructor(t, n = {}, i = wr) {
    super(), this._def = t, this._props = n, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && i !== wr ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      ke({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && // #12479 should check assignedSlot first to get correct parent
    (t.assignedSlot || t.parentNode || t.host); )
      if (t instanceof Es) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, xi(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (i, s = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: a } = i;
      let o;
      if (r && !K(r))
        for (const l in r) {
          const c = r[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Zs(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[Ae(l)] = !0);
        }
      this._numberProps = o, this._resolveProps(i), this.shadowRoot && this._applyStyles(a), this._mount(i);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((i) => {
      i.configureApp = this._def.configureApp, t(this._def = i, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const i in n)
        se(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => X(n[i])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, i = K(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && i.includes(s) && this._setProp(s, this[s]);
    for (const s of i.map(Ae))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(r) {
          this._setProp(s, r, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let i = n ? this.getAttribute(t) : br;
    const s = Ae(t);
    n && this._numberProps && this._numberProps[s] && (i = Zs(i)), this._setProp(s, i, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, i = !0, s = !1) {
    if (n !== this._props[t] && (this._dirty = !0, n === br ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), s && this._instance && this._update(), i)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), n === !0 ? this.setAttribute(qe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(qe(t), n + "") : n || this.removeAttribute(qe(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Gc(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = We(this._def, ke(t, this._props));
    return this._instance || (n.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const s = (r, a) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            hi(a[0]) ? ke({ detail: a }, a[0]) : { detail: a }
          )
        );
      };
      i.emit = (r, ...a) => {
        s(r, a), qe(r) !== r && s(qe(r), a);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n, i) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce, r = this.shadowRoot, a = i ? this._getStyleAnchor(i) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(r);
    let o = null;
    for (let l = t.length - 1; l >= 0; l--) {
      const c = document.createElement("style");
      s && c.setAttribute("nonce", s), c.textContent = t[l], r.insertBefore(c, o || a), o = c, l === 0 && (i || this._styleAnchors.set(this._def, c), n && this._styleAnchors.set(n, c));
    }
  }
  _getStyleAnchor(t) {
    if (!t)
      return null;
    const n = this._styleAnchors.get(t);
    return n && n.parentNode === this.shadowRoot ? n : (n && this._styleAnchors.delete(t), null);
  }
  _getRootStyleInsertionAnchor(t) {
    for (let n = 0; n < t.childNodes.length; n++) {
      const i = t.childNodes[n];
      if (!(i instanceof HTMLStyleElement))
        return i;
    }
    return null;
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const i = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[i] || (t[i] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let i = 0; i < t.length; i++) {
      const s = t[i], r = s.getAttribute("name") || "default", a = this._slots[r], o = s.parentNode;
      if (a)
        for (const l of a) {
          if (n && l.nodeType === 1) {
            const c = n + "-s", u = document.createTreeWalker(l, 1);
            l.setAttribute(c, "");
            let d;
            for (; d = u.nextNode(); )
              d.setAttribute(c, "");
          }
          o.insertBefore(l, s);
        }
      else
        for (; s.firstChild; ) o.insertBefore(s.firstChild, s);
      o.removeChild(s);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const n = /* @__PURE__ */ new Set();
    for (const i of t) {
      const s = i.querySelectorAll("slot");
      for (let r = 0; r < s.length; r++)
        n.add(s[r]);
    }
    return Array.from(n);
  }
  /**
   * @internal
   */
  _injectChildStyle(t, n) {
    this._applyStyles(t.styles, t, n);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _hasShadowRoot() {
    return this._def.shadowRoot !== !1;
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
function qc(e) {
  const t = Wa(), n = t && t.ce;
  return n || null;
}
const Bc = ["ctrl", "shift", "alt", "meta"], Wc = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Bc.some((n) => e[`${n}Key`] && !t.includes(n))
}, _r = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (s, ...r) => {
    for (let a = 0; a < t.length; a++) {
      const o = Wc[t[a]];
      if (o && o(s, t)) return;
    }
    return e(s, ...r);
  });
}, Kc = /* @__PURE__ */ ke({ patchProp: zc }, Sc);
let xr;
function Qa() {
  return xr || (xr = ic(Kc));
}
const Gc = (...e) => {
  Qa().render(...e);
}, wr = (...e) => {
  const t = Qa().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const s = Qc(i);
    if (!s) return;
    const r = t._component;
    !Y(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const a = n(s, !1, Yc(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), a;
  }, t;
};
function Yc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Qc(e) {
  return be(e) ? document.querySelector(e) : e;
}
var ie;
(function(e) {
  e.assertEqual = (s) => {
  };
  function t(s) {
  }
  e.assertIs = t;
  function n(s) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (s) => {
    const r = {};
    for (const a of s)
      r[a] = a;
    return r;
  }, e.getValidEnumValues = (s) => {
    const r = e.objectKeys(s).filter((o) => typeof s[s[o]] != "number"), a = {};
    for (const o of r)
      a[o] = s[o];
    return e.objectValues(a);
  }, e.objectValues = (s) => e.objectKeys(s).map(function(r) {
    return s[r];
  }), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const r = [];
    for (const a in s)
      Object.prototype.hasOwnProperty.call(s, a) && r.push(a);
    return r;
  }, e.find = (s, r) => {
    for (const a of s)
      if (r(a))
        return a;
  }, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
  function i(s, r = " | ") {
    return s.map((a) => typeof a == "string" ? `'${a}'` : a).join(r);
  }
  e.joinValues = i, e.jsonStringifyReplacer = (s, r) => typeof r == "bigint" ? r.toString() : r;
})(ie || (ie = {}));
var kr;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(kr || (kr = {}));
const R = ie.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Et = (e) => {
  switch (typeof e) {
    case "undefined":
      return R.undefined;
    case "string":
      return R.string;
    case "number":
      return Number.isNaN(e) ? R.nan : R.number;
    case "boolean":
      return R.boolean;
    case "function":
      return R.function;
    case "bigint":
      return R.bigint;
    case "symbol":
      return R.symbol;
    case "object":
      return Array.isArray(e) ? R.array : e === null ? R.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? R.promise : typeof Map < "u" && e instanceof Map ? R.map : typeof Set < "u" && e instanceof Set ? R.set : typeof Date < "u" && e instanceof Date ? R.date : R.object;
    default:
      return R.unknown;
  }
}, w = ie.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class At extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (i) => {
      this.issues = [...this.issues, i];
    }, this.addIssues = (i = []) => {
      this.issues = [...this.issues, ...i];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const n = t || function(r) {
      return r.message;
    }, i = { _errors: [] }, s = (r) => {
      for (const a of r.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(s);
        else if (a.code === "invalid_return_type")
          s(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          s(a.argumentsError);
        else if (a.path.length === 0)
          i._errors.push(n(a));
        else {
          let o = i, l = 0;
          for (; l < a.path.length; ) {
            const c = a.path[l];
            l === a.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(n(a))) : o[c] = o[c] || { _errors: [] }, o = o[c], l++;
          }
        }
    };
    return s(this), i;
  }
  static assert(t) {
    if (!(t instanceof At))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ie.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, i = [];
    for (const s of this.issues)
      if (s.path.length > 0) {
        const r = s.path[0];
        n[r] = n[r] || [], n[r].push(t(s));
      } else
        i.push(t(s));
    return { formErrors: i, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
At.create = (e) => new At(e);
const Xi = (e, t) => {
  let n;
  switch (e.code) {
    case w.invalid_type:
      e.received === R.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case w.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, ie.jsonStringifyReplacer)}`;
      break;
    case w.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ie.joinValues(e.keys, ", ")}`;
      break;
    case w.invalid_union:
      n = "Invalid input";
      break;
    case w.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ie.joinValues(e.options)}`;
      break;
    case w.invalid_enum_value:
      n = `Invalid enum value. Expected ${ie.joinValues(e.options)}, received '${e.received}'`;
      break;
    case w.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case w.invalid_return_type:
      n = "Invalid function return type";
      break;
    case w.invalid_date:
      n = "Invalid date";
      break;
    case w.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : ie.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case w.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case w.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case w.custom:
      n = "Invalid input";
      break;
    case w.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case w.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case w.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, ie.assertNever(e);
  }
  return { message: n };
};
let Jc = Xi;
function Xc() {
  return Jc;
}
const eu = (e) => {
  const { data: t, path: n, errorMaps: i, issueData: s } = e, r = [...n, ...s.path || []], a = {
    ...s,
    path: r
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: r,
      message: s.message
    };
  let o = "";
  const l = i.filter((c) => !!c).slice().reverse();
  for (const c of l)
    o = c(a, { data: t, defaultError: o }).message;
  return {
    ...s,
    path: r,
    message: o
  };
};
function O(e, t) {
  const n = Xc(), i = eu({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      // contextual error map is first priority
      e.schemaErrorMap,
      // then schema-bound map if available
      n,
      // then global override map
      n === Xi ? void 0 : Xi
      // then global default map
    ].filter((s) => !!s)
  });
  e.common.issues.push(i);
}
class Ve {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const i = [];
    for (const s of n) {
      if (s.status === "aborted")
        return q;
      s.status === "dirty" && t.dirty(), i.push(s.value);
    }
    return { status: t.value, value: i };
  }
  static async mergeObjectAsync(t, n) {
    const i = [];
    for (const s of n) {
      const r = await s.key, a = await s.value;
      i.push({
        key: r,
        value: a
      });
    }
    return Ve.mergeObjectSync(t, i);
  }
  static mergeObjectSync(t, n) {
    const i = {};
    for (const s of n) {
      const { key: r, value: a } = s;
      if (r.status === "aborted" || a.status === "aborted")
        return q;
      r.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), r.value !== "__proto__" && (typeof a.value < "u" || s.alwaysSet) && (i[r.value] = a.value);
    }
    return { status: t.value, value: i };
  }
}
const q = Object.freeze({
  status: "aborted"
}), bn = (e) => ({ status: "dirty", value: e }), Ge = (e) => ({ status: "valid", value: e }), Sr = (e) => e.status === "aborted", Cr = (e) => e.status === "dirty", an = (e) => e.status === "valid", Xn = (e) => typeof Promise < "u" && e instanceof Promise;
var F;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(F || (F = {}));
class ht {
  constructor(t, n, i, s) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = i, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Tr = (e, t) => {
  if (an(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new At(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Q(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: i, description: s } = e;
  if (t && (n || i))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (a, o) => {
    const { message: l } = e;
    return a.code === "invalid_enum_value" ? { message: l ?? o.defaultError } : typeof o.data > "u" ? { message: l ?? i ?? o.defaultError } : a.code !== "invalid_type" ? { message: o.defaultError } : { message: l ?? n ?? o.defaultError };
  }, description: s };
}
class te {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Et(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Et(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Ve(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Et(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Xn(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const i = this.safeParse(t, n);
    if (i.success)
      return i.data;
    throw i.error;
  }
  safeParse(t, n) {
    const i = {
      common: {
        issues: [],
        async: (n == null ? void 0 : n.async) ?? !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Et(t)
    }, s = this._parseSync({ data: t, path: i.path, parent: i });
    return Tr(i, s);
  }
  "~validate"(t) {
    var i, s;
    const n = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Et(t)
    };
    if (!this["~standard"].async)
      try {
        const r = this._parseSync({ data: t, path: [], parent: n });
        return an(r) ? {
          value: r.value
        } : {
          issues: n.common.issues
        };
      } catch (r) {
        (s = (i = r == null ? void 0 : r.message) == null ? void 0 : i.toLowerCase()) != null && s.includes("encountered") && (this["~standard"].async = !0), n.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: n }).then((r) => an(r) ? {
      value: r.value
    } : {
      issues: n.common.issues
    });
  }
  async parseAsync(t, n) {
    const i = await this.safeParseAsync(t, n);
    if (i.success)
      return i.data;
    throw i.error;
  }
  async safeParseAsync(t, n) {
    const i = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Et(t)
    }, s = this._parse({ data: t, path: i.path, parent: i }), r = await (Xn(s) ? s : Promise.resolve(s));
    return Tr(i, r);
  }
  refine(t, n) {
    const i = (s) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, r) => {
      const a = t(s), o = () => r.addIssue({
        code: w.custom,
        ...i(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((i, s) => t(i) ? !0 : (s.addIssue(typeof n == "function" ? n(i, s) : n), !1));
  }
  _refinement(t) {
    return new Bt({
      schema: this,
      typeName: B.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (n) => this["~validate"](n)
    };
  }
  optional() {
    return wt.create(this, this._def);
  }
  nullable() {
    return Wt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return pt.create(this);
  }
  promise() {
    return ai.create(this, this._def);
  }
  or(t) {
    return ti.create([this, t], this._def);
  }
  and(t) {
    return ni.create(this, t, this._def);
  }
  transform(t) {
    return new Bt({
      ...Q(this._def),
      schema: this,
      typeName: B.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new oi({
      ...Q(this._def),
      innerType: this,
      defaultValue: n,
      typeName: B.ZodDefault
    });
  }
  brand() {
    return new to({
      typeName: B.ZodBranded,
      type: this,
      ...Q(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new li({
      ...Q(this._def),
      innerType: this,
      catchValue: n,
      typeName: B.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return Ps.create(this, t);
  }
  readonly() {
    return ci.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const tu = /^c[^\s-]{8,}$/i, nu = /^[0-9a-z]+$/, iu = /^[0-9A-HJKMNP-TV-Z]{26}$/i, su = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, ru = /^[a-z0-9_-]{21}$/i, au = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, ou = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, lu = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, cu = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Li;
const uu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, du = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, fu = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, pu = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, hu = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, mu = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ja = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", gu = new RegExp(`^${Ja}$`);
function Xa(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function vu(e) {
  return new RegExp(`^${Xa(e)}$`);
}
function yu(e) {
  let t = `${Ja}T${Xa(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function bu(e, t) {
  return !!((t === "v4" || !t) && uu.test(e) || (t === "v6" || !t) && fu.test(e));
}
function _u(e, t) {
  if (!au.test(e))
    return !1;
  try {
    const [n] = e.split(".");
    if (!n)
      return !1;
    const i = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), s = JSON.parse(atob(i));
    return !(typeof s != "object" || s === null || "typ" in s && (s == null ? void 0 : s.typ) !== "JWT" || !s.alg || t && s.alg !== t);
  } catch {
    return !1;
  }
}
function xu(e, t) {
  return !!((t === "v4" || !t) && du.test(e) || (t === "v6" || !t) && pu.test(e));
}
class xt extends te {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== R.string) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: w.invalid_type,
        expected: R.string,
        received: r.parsedType
      }), q;
    }
    const i = new Ve();
    let s;
    for (const r of this._def.checks)
      if (r.kind === "min")
        t.data.length < r.value && (s = this._getOrReturnCtx(t, s), O(s, {
          code: w.too_small,
          minimum: r.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: r.message
        }), i.dirty());
      else if (r.kind === "max")
        t.data.length > r.value && (s = this._getOrReturnCtx(t, s), O(s, {
          code: w.too_big,
          maximum: r.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: r.message
        }), i.dirty());
      else if (r.kind === "length") {
        const a = t.data.length > r.value, o = t.data.length < r.value;
        (a || o) && (s = this._getOrReturnCtx(t, s), a ? O(s, {
          code: w.too_big,
          maximum: r.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: r.message
        }) : o && O(s, {
          code: w.too_small,
          minimum: r.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: r.message
        }), i.dirty());
      } else if (r.kind === "email")
        lu.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
          validation: "email",
          code: w.invalid_string,
          message: r.message
        }), i.dirty());
      else if (r.kind === "emoji")
        Li || (Li = new RegExp(cu, "u")), Li.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
          validation: "emoji",
          code: w.invalid_string,
          message: r.message
        }), i.dirty());
      else if (r.kind === "uuid")
        su.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
          validation: "uuid",
          code: w.invalid_string,
          message: r.message
        }), i.dirty());
      else if (r.kind === "nanoid")
        ru.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
          validation: "nanoid",
          code: w.invalid_string,
          message: r.message
        }), i.dirty());
      else if (r.kind === "cuid")
        tu.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
          validation: "cuid",
          code: w.invalid_string,
          message: r.message
        }), i.dirty());
      else if (r.kind === "cuid2")
        nu.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
          validation: "cuid2",
          code: w.invalid_string,
          message: r.message
        }), i.dirty());
      else if (r.kind === "ulid")
        iu.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
          validation: "ulid",
          code: w.invalid_string,
          message: r.message
        }), i.dirty());
      else if (r.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), O(s, {
            validation: "url",
            code: w.invalid_string,
            message: r.message
          }), i.dirty();
        }
      else r.kind === "regex" ? (r.regex.lastIndex = 0, r.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
        validation: "regex",
        code: w.invalid_string,
        message: r.message
      }), i.dirty())) : r.kind === "trim" ? t.data = t.data.trim() : r.kind === "includes" ? t.data.includes(r.value, r.position) || (s = this._getOrReturnCtx(t, s), O(s, {
        code: w.invalid_string,
        validation: { includes: r.value, position: r.position },
        message: r.message
      }), i.dirty()) : r.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : r.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : r.kind === "startsWith" ? t.data.startsWith(r.value) || (s = this._getOrReturnCtx(t, s), O(s, {
        code: w.invalid_string,
        validation: { startsWith: r.value },
        message: r.message
      }), i.dirty()) : r.kind === "endsWith" ? t.data.endsWith(r.value) || (s = this._getOrReturnCtx(t, s), O(s, {
        code: w.invalid_string,
        validation: { endsWith: r.value },
        message: r.message
      }), i.dirty()) : r.kind === "datetime" ? yu(r).test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
        code: w.invalid_string,
        validation: "datetime",
        message: r.message
      }), i.dirty()) : r.kind === "date" ? gu.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
        code: w.invalid_string,
        validation: "date",
        message: r.message
      }), i.dirty()) : r.kind === "time" ? vu(r).test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
        code: w.invalid_string,
        validation: "time",
        message: r.message
      }), i.dirty()) : r.kind === "duration" ? ou.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
        validation: "duration",
        code: w.invalid_string,
        message: r.message
      }), i.dirty()) : r.kind === "ip" ? bu(t.data, r.version) || (s = this._getOrReturnCtx(t, s), O(s, {
        validation: "ip",
        code: w.invalid_string,
        message: r.message
      }), i.dirty()) : r.kind === "jwt" ? _u(t.data, r.alg) || (s = this._getOrReturnCtx(t, s), O(s, {
        validation: "jwt",
        code: w.invalid_string,
        message: r.message
      }), i.dirty()) : r.kind === "cidr" ? xu(t.data, r.version) || (s = this._getOrReturnCtx(t, s), O(s, {
        validation: "cidr",
        code: w.invalid_string,
        message: r.message
      }), i.dirty()) : r.kind === "base64" ? hu.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
        validation: "base64",
        code: w.invalid_string,
        message: r.message
      }), i.dirty()) : r.kind === "base64url" ? mu.test(t.data) || (s = this._getOrReturnCtx(t, s), O(s, {
        validation: "base64url",
        code: w.invalid_string,
        message: r.message
      }), i.dirty()) : ie.assertNever(r);
    return { status: i.value, value: t.data };
  }
  _regex(t, n, i) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: w.invalid_string,
      ...F.errToObj(i)
    });
  }
  _addCheck(t) {
    return new xt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...F.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...F.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...F.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...F.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...F.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...F.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...F.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...F.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...F.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...F.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...F.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...F.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...F.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (t == null ? void 0 : t.offset) ?? !1,
      local: (t == null ? void 0 : t.local) ?? !1,
      ...F.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...F.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...F.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...F.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...F.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...F.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...F.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...F.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...F.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...F.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, F.errToObj(t));
  }
  trim() {
    return new xt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new xt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new xt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
xt.create = (e) => new xt({
  checks: [],
  typeName: B.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...Q(e)
});
function wu(e, t) {
  const n = (e.toString().split(".")[1] || "").length, i = (t.toString().split(".")[1] || "").length, s = n > i ? n : i, r = Number.parseInt(e.toFixed(s).replace(".", "")), a = Number.parseInt(t.toFixed(s).replace(".", ""));
  return r % a / 10 ** s;
}
class on extends te {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== R.number) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: w.invalid_type,
        expected: R.number,
        received: r.parsedType
      }), q;
    }
    let i;
    const s = new Ve();
    for (const r of this._def.checks)
      r.kind === "int" ? ie.isInteger(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
        code: w.invalid_type,
        expected: "integer",
        received: "float",
        message: r.message
      }), s.dirty()) : r.kind === "min" ? (r.inclusive ? t.data < r.value : t.data <= r.value) && (i = this._getOrReturnCtx(t, i), O(i, {
        code: w.too_small,
        minimum: r.value,
        type: "number",
        inclusive: r.inclusive,
        exact: !1,
        message: r.message
      }), s.dirty()) : r.kind === "max" ? (r.inclusive ? t.data > r.value : t.data >= r.value) && (i = this._getOrReturnCtx(t, i), O(i, {
        code: w.too_big,
        maximum: r.value,
        type: "number",
        inclusive: r.inclusive,
        exact: !1,
        message: r.message
      }), s.dirty()) : r.kind === "multipleOf" ? wu(t.data, r.value) !== 0 && (i = this._getOrReturnCtx(t, i), O(i, {
        code: w.not_multiple_of,
        multipleOf: r.value,
        message: r.message
      }), s.dirty()) : r.kind === "finite" ? Number.isFinite(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
        code: w.not_finite,
        message: r.message
      }), s.dirty()) : ie.assertNever(r);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, F.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, F.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, F.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, F.toString(n));
  }
  setLimit(t, n, i, s) {
    return new on({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: F.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new on({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: F.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: F.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: F.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: F.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: F.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: F.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: F.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: F.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: F.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && ie.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const i of this._def.checks) {
      if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
        return !0;
      i.kind === "min" ? (n === null || i.value > n) && (n = i.value) : i.kind === "max" && (t === null || i.value < t) && (t = i.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
on.create = (e) => new on({
  checks: [],
  typeName: B.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Q(e)
});
class Pn extends te {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== R.bigint)
      return this._getInvalidInput(t);
    let i;
    const s = new Ve();
    for (const r of this._def.checks)
      r.kind === "min" ? (r.inclusive ? t.data < r.value : t.data <= r.value) && (i = this._getOrReturnCtx(t, i), O(i, {
        code: w.too_small,
        type: "bigint",
        minimum: r.value,
        inclusive: r.inclusive,
        message: r.message
      }), s.dirty()) : r.kind === "max" ? (r.inclusive ? t.data > r.value : t.data >= r.value) && (i = this._getOrReturnCtx(t, i), O(i, {
        code: w.too_big,
        type: "bigint",
        maximum: r.value,
        inclusive: r.inclusive,
        message: r.message
      }), s.dirty()) : r.kind === "multipleOf" ? t.data % r.value !== BigInt(0) && (i = this._getOrReturnCtx(t, i), O(i, {
        code: w.not_multiple_of,
        multipleOf: r.value,
        message: r.message
      }), s.dirty()) : ie.assertNever(r);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return O(n, {
      code: w.invalid_type,
      expected: R.bigint,
      received: n.parsedType
    }), q;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, F.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, F.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, F.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, F.toString(n));
  }
  setLimit(t, n, i, s) {
    return new Pn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: F.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Pn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: F.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: F.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: F.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: F.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: F.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Pn.create = (e) => new Pn({
  checks: [],
  typeName: B.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...Q(e)
});
class es extends te {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== R.boolean) {
      const i = this._getOrReturnCtx(t);
      return O(i, {
        code: w.invalid_type,
        expected: R.boolean,
        received: i.parsedType
      }), q;
    }
    return Ge(t.data);
  }
}
es.create = (e) => new es({
  typeName: B.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Q(e)
});
class ei extends te {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== R.date) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: w.invalid_type,
        expected: R.date,
        received: r.parsedType
      }), q;
    }
    if (Number.isNaN(t.data.getTime())) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: w.invalid_date
      }), q;
    }
    const i = new Ve();
    let s;
    for (const r of this._def.checks)
      r.kind === "min" ? t.data.getTime() < r.value && (s = this._getOrReturnCtx(t, s), O(s, {
        code: w.too_small,
        message: r.message,
        inclusive: !0,
        exact: !1,
        minimum: r.value,
        type: "date"
      }), i.dirty()) : r.kind === "max" ? t.data.getTime() > r.value && (s = this._getOrReturnCtx(t, s), O(s, {
        code: w.too_big,
        message: r.message,
        inclusive: !0,
        exact: !1,
        maximum: r.value,
        type: "date"
      }), i.dirty()) : ie.assertNever(r);
    return {
      status: i.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new ei({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: F.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: F.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
ei.create = (e) => new ei({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: B.ZodDate,
  ...Q(e)
});
class Ar extends te {
  _parse(t) {
    if (this._getType(t) !== R.symbol) {
      const i = this._getOrReturnCtx(t);
      return O(i, {
        code: w.invalid_type,
        expected: R.symbol,
        received: i.parsedType
      }), q;
    }
    return Ge(t.data);
  }
}
Ar.create = (e) => new Ar({
  typeName: B.ZodSymbol,
  ...Q(e)
});
class ts extends te {
  _parse(t) {
    if (this._getType(t) !== R.undefined) {
      const i = this._getOrReturnCtx(t);
      return O(i, {
        code: w.invalid_type,
        expected: R.undefined,
        received: i.parsedType
      }), q;
    }
    return Ge(t.data);
  }
}
ts.create = (e) => new ts({
  typeName: B.ZodUndefined,
  ...Q(e)
});
class ns extends te {
  _parse(t) {
    if (this._getType(t) !== R.null) {
      const i = this._getOrReturnCtx(t);
      return O(i, {
        code: w.invalid_type,
        expected: R.null,
        received: i.parsedType
      }), q;
    }
    return Ge(t.data);
  }
}
ns.create = (e) => new ns({
  typeName: B.ZodNull,
  ...Q(e)
});
class $r extends te {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Ge(t.data);
  }
}
$r.create = (e) => new $r({
  typeName: B.ZodAny,
  ...Q(e)
});
class is extends te {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Ge(t.data);
  }
}
is.create = (e) => new is({
  typeName: B.ZodUnknown,
  ...Q(e)
});
class Pt extends te {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return O(n, {
      code: w.invalid_type,
      expected: R.never,
      received: n.parsedType
    }), q;
  }
}
Pt.create = (e) => new Pt({
  typeName: B.ZodNever,
  ...Q(e)
});
class Ir extends te {
  _parse(t) {
    if (this._getType(t) !== R.undefined) {
      const i = this._getOrReturnCtx(t);
      return O(i, {
        code: w.invalid_type,
        expected: R.void,
        received: i.parsedType
      }), q;
    }
    return Ge(t.data);
  }
}
Ir.create = (e) => new Ir({
  typeName: B.ZodVoid,
  ...Q(e)
});
class pt extends te {
  _parse(t) {
    const { ctx: n, status: i } = this._processInputParams(t), s = this._def;
    if (n.parsedType !== R.array)
      return O(n, {
        code: w.invalid_type,
        expected: R.array,
        received: n.parsedType
      }), q;
    if (s.exactLength !== null) {
      const a = n.data.length > s.exactLength.value, o = n.data.length < s.exactLength.value;
      (a || o) && (O(n, {
        code: a ? w.too_big : w.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), i.dirty());
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (O(n, {
      code: w.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), i.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (O(n, {
      code: w.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), i.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, o) => s.type._parseAsync(new ht(n, a, n.path, o)))).then((a) => Ve.mergeArray(i, a));
    const r = [...n.data].map((a, o) => s.type._parseSync(new ht(n, a, n.path, o)));
    return Ve.mergeArray(i, r);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new pt({
      ...this._def,
      minLength: { value: t, message: F.toString(n) }
    });
  }
  max(t, n) {
    return new pt({
      ...this._def,
      maxLength: { value: t, message: F.toString(n) }
    });
  }
  length(t, n) {
    return new pt({
      ...this._def,
      exactLength: { value: t, message: F.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
pt.create = (e, t) => new pt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: B.ZodArray,
  ...Q(t)
});
function Qt(e) {
  if (e instanceof Ce) {
    const t = {};
    for (const n in e.shape) {
      const i = e.shape[n];
      t[n] = wt.create(Qt(i));
    }
    return new Ce({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof pt ? new pt({
    ...e._def,
    type: Qt(e.element)
  }) : e instanceof wt ? wt.create(Qt(e.unwrap())) : e instanceof Wt ? Wt.create(Qt(e.unwrap())) : e instanceof Ht ? Ht.create(e.items.map((t) => Qt(t))) : e;
}
class Ce extends te {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = ie.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== R.object) {
      const c = this._getOrReturnCtx(t);
      return O(c, {
        code: w.invalid_type,
        expected: R.object,
        received: c.parsedType
      }), q;
    }
    const { status: i, ctx: s } = this._processInputParams(t), { shape: r, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Pt && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const u = r[c], d = s.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new ht(s, d, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof Pt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (c === "strict")
        o.length > 0 && (O(s, {
          code: w.unrecognized_keys,
          keys: o
        }), i.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of o) {
        const d = s.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new ht(s, d, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const d = await u.key, p = await u.value;
        c.push({
          key: d,
          value: p,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => Ve.mergeObjectSync(i, c)) : Ve.mergeObjectSync(i, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return F.errToObj, new Ce({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, i) => {
          var r, a;
          const s = ((a = (r = this._def).errorMap) == null ? void 0 : a.call(r, n, i).message) ?? i.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: F.errToObj(t).message ?? s
          } : {
            message: s
          };
        }
      } : {}
    });
  }
  strip() {
    return new Ce({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ce({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new Ce({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new Ce({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: B.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new Ce({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const i of ie.objectKeys(t))
      t[i] && this.shape[i] && (n[i] = this.shape[i]);
    return new Ce({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const i of ie.objectKeys(this.shape))
      t[i] || (n[i] = this.shape[i]);
    return new Ce({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Qt(this);
  }
  partial(t) {
    const n = {};
    for (const i of ie.objectKeys(this.shape)) {
      const s = this.shape[i];
      t && !t[i] ? n[i] = s : n[i] = s.optional();
    }
    return new Ce({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const i of ie.objectKeys(this.shape))
      if (t && !t[i])
        n[i] = this.shape[i];
      else {
        let r = this.shape[i];
        for (; r instanceof wt; )
          r = r._def.innerType;
        n[i] = r;
      }
    return new Ce({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return eo(ie.objectKeys(this.shape));
  }
}
Ce.create = (e, t) => new Ce({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Pt.create(),
  typeName: B.ZodObject,
  ...Q(t)
});
Ce.strictCreate = (e, t) => new Ce({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Pt.create(),
  typeName: B.ZodObject,
  ...Q(t)
});
Ce.lazycreate = (e, t) => new Ce({
  shape: e,
  unknownKeys: "strip",
  catchall: Pt.create(),
  typeName: B.ZodObject,
  ...Q(t)
});
class ti extends te {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), i = this._def.options;
    function s(r) {
      for (const o of r)
        if (o.result.status === "valid")
          return o.result;
      for (const o of r)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const a = r.map((o) => new At(o.ctx.common.issues));
      return O(n, {
        code: w.invalid_union,
        unionErrors: a
      }), q;
    }
    if (n.common.async)
      return Promise.all(i.map(async (r) => {
        const a = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await r._parseAsync({
            data: n.data,
            path: n.path,
            parent: a
          }),
          ctx: a
        };
      })).then(s);
    {
      let r;
      const a = [];
      for (const l of i) {
        const c = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: n.data,
          path: n.path,
          parent: c
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !r && (r = { result: u, ctx: c }), c.common.issues.length && a.push(c.common.issues);
      }
      if (r)
        return n.common.issues.push(...r.ctx.common.issues), r.result;
      const o = a.map((l) => new At(l));
      return O(n, {
        code: w.invalid_union,
        unionErrors: o
      }), q;
    }
  }
  get options() {
    return this._def.options;
  }
}
ti.create = (e, t) => new ti({
  options: e,
  typeName: B.ZodUnion,
  ...Q(t)
});
const vt = (e) => e instanceof si ? vt(e.schema) : e instanceof Bt ? vt(e.innerType()) : e instanceof ri ? [e.value] : e instanceof qt ? e.options : e instanceof rs ? ie.objectValues(e.enum) : e instanceof oi ? vt(e._def.innerType) : e instanceof ts ? [void 0] : e instanceof ns ? [null] : e instanceof wt ? [void 0, ...vt(e.unwrap())] : e instanceof Wt ? [null, ...vt(e.unwrap())] : e instanceof to || e instanceof ci ? vt(e.unwrap()) : e instanceof li ? vt(e._def.innerType) : [];
class Os extends te {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== R.object)
      return O(n, {
        code: w.invalid_type,
        expected: R.object,
        received: n.parsedType
      }), q;
    const i = this.discriminator, s = n.data[i], r = this.optionsMap.get(s);
    return r ? n.common.async ? r._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : r._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (O(n, {
      code: w.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [i]
    }), q);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, i) {
    const s = /* @__PURE__ */ new Map();
    for (const r of n) {
      const a = vt(r.shape[t]);
      if (!a.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (s.has(o))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        s.set(o, r);
      }
    }
    return new Os({
      typeName: B.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: s,
      ...Q(i)
    });
  }
}
function ss(e, t) {
  const n = Et(e), i = Et(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === R.object && i === R.object) {
    const s = ie.objectKeys(t), r = ie.objectKeys(e).filter((o) => s.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of r) {
      const l = ss(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (n === R.array && i === R.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let r = 0; r < e.length; r++) {
      const a = e[r], o = t[r], l = ss(a, o);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else return n === R.date && i === R.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class ni extends te {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), s = (r, a) => {
      if (Sr(r) || Sr(a))
        return q;
      const o = ss(r.value, a.value);
      return o.valid ? ((Cr(r) || Cr(a)) && n.dirty(), { status: n.value, value: o.data }) : (O(i, {
        code: w.invalid_intersection_types
      }), q);
    };
    return i.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: i.data,
        path: i.path,
        parent: i
      }),
      this._def.right._parseAsync({
        data: i.data,
        path: i.path,
        parent: i
      })
    ]).then(([r, a]) => s(r, a)) : s(this._def.left._parseSync({
      data: i.data,
      path: i.path,
      parent: i
    }), this._def.right._parseSync({
      data: i.data,
      path: i.path,
      parent: i
    }));
  }
}
ni.create = (e, t, n) => new ni({
  left: e,
  right: t,
  typeName: B.ZodIntersection,
  ...Q(n)
});
class Ht extends te {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== R.array)
      return O(i, {
        code: w.invalid_type,
        expected: R.array,
        received: i.parsedType
      }), q;
    if (i.data.length < this._def.items.length)
      return O(i, {
        code: w.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), q;
    !this._def.rest && i.data.length > this._def.items.length && (O(i, {
      code: w.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const r = [...i.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new ht(i, a, i.path, o)) : null;
    }).filter((a) => !!a);
    return i.common.async ? Promise.all(r).then((a) => Ve.mergeArray(n, a)) : Ve.mergeArray(n, r);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Ht({
      ...this._def,
      rest: t
    });
  }
}
Ht.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ht({
    items: e,
    typeName: B.ZodTuple,
    rest: null,
    ...Q(t)
  });
};
class ii extends te {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== R.object)
      return O(i, {
        code: w.invalid_type,
        expected: R.object,
        received: i.parsedType
      }), q;
    const s = [], r = this._def.keyType, a = this._def.valueType;
    for (const o in i.data)
      s.push({
        key: r._parse(new ht(i, o, i.path, o)),
        value: a._parse(new ht(i, i.data[o], i.path, o)),
        alwaysSet: o in i.data
      });
    return i.common.async ? Ve.mergeObjectAsync(n, s) : Ve.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, i) {
    return n instanceof te ? new ii({
      keyType: t,
      valueType: n,
      typeName: B.ZodRecord,
      ...Q(i)
    }) : new ii({
      keyType: xt.create(),
      valueType: t,
      typeName: B.ZodRecord,
      ...Q(n)
    });
  }
}
class Er extends te {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== R.map)
      return O(i, {
        code: w.invalid_type,
        expected: R.map,
        received: i.parsedType
      }), q;
    const s = this._def.keyType, r = this._def.valueType, a = [...i.data.entries()].map(([o, l], c) => ({
      key: s._parse(new ht(i, o, i.path, [c, "key"])),
      value: r._parse(new ht(i, l, i.path, [c, "value"]))
    }));
    if (i.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return q;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return q;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
Er.create = (e, t, n) => new Er({
  valueType: t,
  keyType: e,
  typeName: B.ZodMap,
  ...Q(n)
});
class Nn extends te {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== R.set)
      return O(i, {
        code: w.invalid_type,
        expected: R.set,
        received: i.parsedType
      }), q;
    const s = this._def;
    s.minSize !== null && i.data.size < s.minSize.value && (O(i, {
      code: w.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && i.data.size > s.maxSize.value && (O(i, {
      code: w.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), n.dirty());
    const r = this._def.valueType;
    function a(l) {
      const c = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return q;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const o = [...i.data.values()].map((l, c) => r._parse(new ht(i, l, i.path, c)));
    return i.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(t, n) {
    return new Nn({
      ...this._def,
      minSize: { value: t, message: F.toString(n) }
    });
  }
  max(t, n) {
    return new Nn({
      ...this._def,
      maxSize: { value: t, message: F.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Nn.create = (e, t) => new Nn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: B.ZodSet,
  ...Q(t)
});
class si extends te {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
si.create = (e, t) => new si({
  getter: e,
  typeName: B.ZodLazy,
  ...Q(t)
});
class ri extends te {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return O(n, {
        received: n.data,
        code: w.invalid_literal,
        expected: this._def.value
      }), q;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ri.create = (e, t) => new ri({
  value: e,
  typeName: B.ZodLiteral,
  ...Q(t)
});
function eo(e, t) {
  return new qt({
    values: e,
    typeName: B.ZodEnum,
    ...Q(t)
  });
}
class qt extends te {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return O(n, {
        expected: ie.joinValues(i),
        received: n.parsedType,
        code: w.invalid_type
      }), q;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return O(n, {
        received: n.data,
        code: w.invalid_enum_value,
        options: i
      }), q;
    }
    return Ge(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return qt.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return qt.create(this.options.filter((i) => !t.includes(i)), {
      ...this._def,
      ...n
    });
  }
}
qt.create = eo;
class rs extends te {
  _parse(t) {
    const n = ie.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(t);
    if (i.parsedType !== R.string && i.parsedType !== R.number) {
      const s = ie.objectValues(n);
      return O(i, {
        expected: ie.joinValues(s),
        received: i.parsedType,
        code: w.invalid_type
      }), q;
    }
    if (this._cache || (this._cache = new Set(ie.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const s = ie.objectValues(n);
      return O(i, {
        received: i.data,
        code: w.invalid_enum_value,
        options: s
      }), q;
    }
    return Ge(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
rs.create = (e, t) => new rs({
  values: e,
  typeName: B.ZodNativeEnum,
  ...Q(t)
});
class ai extends te {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== R.promise && n.common.async === !1)
      return O(n, {
        code: w.invalid_type,
        expected: R.promise,
        received: n.parsedType
      }), q;
    const i = n.parsedType === R.promise ? n.data : Promise.resolve(n.data);
    return Ge(i.then((s) => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
ai.create = (e, t) => new ai({
  type: e,
  typeName: B.ZodPromise,
  ...Q(t)
});
class Bt extends te {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === B.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), s = this._def.effect || null, r = {
      addIssue: (a) => {
        O(i, a), a.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return i.path;
      }
    };
    if (r.addIssue = r.addIssue.bind(r), s.type === "preprocess") {
      const a = s.transform(i.data, r);
      if (i.common.async)
        return Promise.resolve(a).then(async (o) => {
          if (n.value === "aborted")
            return q;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: i.path,
            parent: i
          });
          return l.status === "aborted" ? q : l.status === "dirty" || n.value === "dirty" ? bn(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return q;
        const o = this._def.schema._parseSync({
          data: a,
          path: i.path,
          parent: i
        });
        return o.status === "aborted" ? q : o.status === "dirty" || n.value === "dirty" ? bn(o.value) : o;
      }
    }
    if (s.type === "refinement") {
      const a = (o) => {
        const l = s.refinement(o, r);
        if (i.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (i.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return o.status === "aborted" ? q : (o.status === "dirty" && n.dirty(), a(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((o) => o.status === "aborted" ? q : (o.status === "dirty" && n.dirty(), a(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (i.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        if (!an(a))
          return q;
        const o = s.transform(a.value, r);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((a) => an(a) ? Promise.resolve(s.transform(a.value, r)).then((o) => ({
          status: n.value,
          value: o
        })) : q);
    ie.assertNever(s);
  }
}
Bt.create = (e, t, n) => new Bt({
  schema: e,
  typeName: B.ZodEffects,
  effect: t,
  ...Q(n)
});
Bt.createWithPreprocess = (e, t, n) => new Bt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: B.ZodEffects,
  ...Q(n)
});
class wt extends te {
  _parse(t) {
    return this._getType(t) === R.undefined ? Ge(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
wt.create = (e, t) => new wt({
  innerType: e,
  typeName: B.ZodOptional,
  ...Q(t)
});
class Wt extends te {
  _parse(t) {
    return this._getType(t) === R.null ? Ge(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Wt.create = (e, t) => new Wt({
  innerType: e,
  typeName: B.ZodNullable,
  ...Q(t)
});
class oi extends te {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let i = n.data;
    return n.parsedType === R.undefined && (i = this._def.defaultValue()), this._def.innerType._parse({
      data: i,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
oi.create = (e, t) => new oi({
  innerType: e,
  typeName: B.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Q(t)
});
class li extends te {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), i = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: i.data,
      path: i.path,
      parent: {
        ...i
      }
    });
    return Xn(s) ? s.then((r) => ({
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new At(i.common.issues);
        },
        input: i.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new At(i.common.issues);
        },
        input: i.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
li.create = (e, t) => new li({
  innerType: e,
  typeName: B.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Q(t)
});
class Or extends te {
  _parse(t) {
    if (this._getType(t) !== R.nan) {
      const i = this._getOrReturnCtx(t);
      return O(i, {
        code: w.invalid_type,
        expected: R.nan,
        received: i.parsedType
      }), q;
    }
    return { status: "valid", value: t.data };
  }
}
Or.create = (e) => new Or({
  typeName: B.ZodNaN,
  ...Q(e)
});
class to extends te {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), i = n.data;
    return this._def.type._parse({
      data: i,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ps extends te {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const r = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return r.status === "aborted" ? q : r.status === "dirty" ? (n.dirty(), bn(r.value)) : this._def.out._parseAsync({
          data: r.value,
          path: i.path,
          parent: i
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: i.data,
        path: i.path,
        parent: i
      });
      return s.status === "aborted" ? q : s.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: i.path,
        parent: i
      });
    }
  }
  static create(t, n) {
    return new Ps({
      in: t,
      out: n,
      typeName: B.ZodPipeline
    });
  }
}
class ci extends te {
  _parse(t) {
    const n = this._def.innerType._parse(t), i = (s) => (an(s) && (s.value = Object.freeze(s.value)), s);
    return Xn(n) ? n.then((s) => i(s)) : i(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ci.create = (e, t) => new ci({
  innerType: e,
  typeName: B.ZodReadonly,
  ...Q(t)
});
var B;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(B || (B = {}));
const j = xt.create, H = on.create, Ze = es.create, ku = is.create;
Pt.create;
const fe = pt.create, oe = Ce.create, Rn = ti.create, Su = Os.create;
ni.create;
Ht.create;
const no = ii.create, Cu = si.create, tt = ri.create, _e = qt.create;
ai.create;
wt.create;
Wt.create;
const Tu = _e([
  "eq",
  "neq",
  "in",
  "gt",
  "gte",
  "lt",
  "lte",
  "isSet",
  "notSet"
]), Pr = oe({
  ref: j().min(1),
  op: Tu,
  value: Rn([j(), H(), fe(j()), fe(H())]).optional()
}), as = Cu(() => oe({
  all: fe(Rn([Pr, as])).optional(),
  any: fe(Rn([Pr, as])).optional()
}));
function io(e) {
  return "op" in e;
}
const Au = [
  "file.pages",
  "file.colorPages",
  "file.monoPages",
  "file.status"
], so = "quantity", $u = _e(["quantity", "pages", "area"]), Iu = oe({
  /**
   * Inclusive upper bound on the basis value. MUST be omitted on the last
   * row (open-ended) and present on every other row — validate.ts enforces
   * strictly-increasing order, which makes overlap impossible by construction.
   */
  upTo: H().positive().optional(),
  amount: H()
}), ro = oe({
  basis: $u.default("quantity"),
  /**
   * flat:      the entire basis value is priced at the matched row's amount.
   * graduated: each band is priced at its own amount and summed
   *            (progressive-tax style).
   */
  mode: _e(["flat", "graduated"]).default("flat"),
  rows: fe(Iu).min(1)
}), Eu = _e(["sqm", "sqft", "sqin"]), Ou = _e([
  "fixed",
  //        once per order
  "perUnit",
  //      × quantity
  "perPage",
  //      × file.pages × quantity
  "perColorPage",
  // × file.colorPages × quantity
  "perMonoPage",
  //  × file.monoPages × quantity
  "perArea",
  //      × area × quantity
  "percent",
  //      % of running total (stage B)
  "multiplier",
  //   × running total (stage C)
  "setup"
  //         once per order, AFTER percent/multiplier (stage D)
]), ao = oe({
  type: Ou,
  amount: H(),
  /** perArea only: the unit `amount` is priced in. */
  areaUnit: Eu.optional(),
  /**
   * perArea only: id of a `dimensions` field to read W×H from.
   * Fallback when omitted: FileMetadata.canvas.
   */
  dimensionsField: j().optional(),
  /** Volume/size breaks. For basis "area" the basis value is in `areaUnit`. */
  tiers: ro.optional()
}), Pu = oe({
  amount: H().nonnegative().default(0),
  /** "order": added once (v1 behavior). "unit": × quantity (t-shirts, cards). */
  per: _e(["order", "unit"]).default("order"),
  /**
   * Quantity breaks on the base. basis must be "quantity"; mode "graduated"
   * requires per === "unit" (validate.ts).
   */
  tiers: ro.optional()
}), Nu = oe({
  currency: j().regex(/^[A-Z]{3}$/, "ISO 4217 currency code").default("USD"),
  basePrice: Pu.default({}),
  /** Flat fee added once, after percent/multiplier (stage D). */
  setupFee: H().nonnegative().optional(),
  /** Floor applied to the final total (stage E). */
  minimumPrice: H().nonnegative().optional()
}), ui = "2.0", oo = oe({
  id: j().min(1),
  label: j(),
  description: j().optional(),
  /** http(s) URL or data: URI (builder can embed small images). */
  image: j().optional(),
  /** Hex color for swatch display. */
  color: j().optional(),
  /** Default selection for the parent field. */
  default: Ze().optional(),
  /** Merchant SKU fragment for this choice (used by resolveSku / adapters). */
  sku: j().optional(),
  /** Manually mark a choice unavailable without deleting it. */
  disabled: Ze().optional(),
  /** Price changes applied when this choice is selected. */
  priceModifiers: fe(ao).default([])
}), Nt = oe({
  id: j().min(1),
  label: j().optional(),
  helpText: j().optional(),
  required: Ze().default(!1),
  visibleWhen: as.optional(),
  /** Price changes applied just for having this field visible. */
  priceModifiers: fe(ao).default([]),
  /**
   * Semantic role for the Page API (docs/page-api-v1.md): lets on-page
   * integrations find "the size field" regardless of the merchant's own
   * ids/labels. v1 vocabulary: "size" | "pages" | "material" |
   * "orientation" — deliberately an OPEN string (a role is a label, never
   * behavior; unknown roles pass through). At most one field per role per
   * document (validate.ts). Field types quantity/dimensions/file need no
   * role — they are semantic by themselves.
   */
  role: j().optional()
}), Ru = Nt.extend({
  type: tt("select-one"),
  display: _e(["cards", "grid", "swatches", "pills", "dropdown", "list"]).default("pills"),
  options: fe(oo).min(1)
}), Mu = Nt.extend({
  type: tt("select-many"),
  display: _e(["cards", "grid", "swatches", "pills", "list"]).default("list"),
  options: fe(oo).min(1),
  minSelect: H().int().nonnegative().default(0),
  maxSelect: H().int().positive().optional()
}), ju = Nt.extend({
  type: tt("quantity"),
  display: _e(["stepper", "pills", "dropdown", "input"]).default("stepper"),
  min: H().int().positive().default(1),
  max: H().int().positive().optional(),
  step: H().int().positive().default(1),
  defaultValue: H().int().positive().default(1),
  /** Preset quantities for pills/dropdown display (e.g. 100/250/500/1000). */
  presets: fe(H().int().positive()).optional()
}), Fu = Nt.extend({
  type: tt("number"),
  display: _e(["stepper", "slider", "input"]).default("input"),
  min: H().optional(),
  max: H().optional(),
  step: H().positive().optional(),
  defaultValue: H().optional()
}), Du = Nt.extend({
  type: tt("text"),
  display: _e(["input", "textarea"]).default("input"),
  placeholder: j().optional(),
  maxLength: H().int().positive().optional()
}), os = _e(["mm", "cm", "in"]), Vu = Nt.extend({
  type: tt("dimensions"),
  display: _e(["inputs"]).default("inputs"),
  /** Units the customer may pick between. */
  units: fe(os).min(1).default(["mm"]),
  defaultUnit: os.default("mm"),
  /** Constraints, expressed in defaultUnit. */
  minW: H().positive().optional(),
  maxW: H().positive().optional(),
  minH: H().positive().optional(),
  maxH: H().positive().optional(),
  defaultValue: oe({ w: H().positive(), h: H().positive() }).optional()
}), zu = oe({
  /** Filecheck workflow that validates uploads for this field. */
  workflowId: j().min(1)
}), Lu = Nt.extend({
  type: tt("file"),
  display: _e(["dropzone"]).default("dropzone"),
  accept: fe(j()).default(["application/pdf"]),
  /** Which data-feed provider enriches the FileMetadata. */
  providerId: j().optional(),
  /**
   * Filecheck-backed upload: replaces the dropzone with the Filecheck
   * intake element when the storefront supplies an element-mode provider
   * config (publishable key lives there — NEVER in this blueprint).
   */
  filecheck: zu.optional()
}), Uu = Nt.extend({
  type: tt("info"),
  /** summary: live selection recap. note: static text block. */
  display: _e(["summary", "note"]).default("note"),
  body: j().optional()
}), Zu = Su("type", [
  Ru,
  Mu,
  ju,
  Fu,
  Du,
  Vu,
  Lu,
  Uu
]);
function mt(e) {
  return e.type === "select-one" || e.type === "select-many";
}
const Hu = oe({
  id: j().min(1),
  title: j(),
  fields: fe(Zu)
}), qu = oe({
  /** axisFieldId -> choiceId, exactly one entry per axis (validate.ts). */
  select: no(j()),
  sku: j().optional(),
  /** Absolute replacement for pricing.basePrice.amount while selected. */
  price: H().nonnegative().optional(),
  available: Ze().default(!0),
  /** Platform hook (e.g. Shopify variant GID) for adapters that map to real variants. */
  platformVariantId: j().optional()
}), Bu = oe({
  /** Field ids of select-one fields forming the matrix (e.g. ["size","color"]). */
  axes: fe(j().min(1)).min(1),
  combinations: fe(qu)
}), Ns = oe({
  version: tt(ui).default(ui),
  productId: j().min(1),
  title: j(),
  /** stacked: all sections at once. wizard: one section per step. */
  layout: _e(["stacked", "wizard"]).default("stacked"),
  pricing: Nu.default({}),
  variants: Bu.optional(),
  sections: fe(Hu)
});
oe({
  w: H().positive(),
  h: H().positive(),
  unit: os
});
function Kt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && typeof e.w == "number" && typeof e.h == "number";
}
const lo = /* @__PURE__ */ new Set([
  "BIF",
  "CLP",
  "DJF",
  "GNF",
  "ISK",
  "JPY",
  "KMF",
  "KRW",
  "PYG",
  "RWF",
  "UGX",
  "UYI",
  "VND",
  "VUV",
  "XAF",
  "XOF",
  "XPF"
]), co = /* @__PURE__ */ new Set(["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"]);
function Wu(e) {
  const t = e.toUpperCase();
  return lo.has(t) ? 0 : co.has(t) ? 3 : 2;
}
function Ku(e) {
  return /^[A-Z]{3}$/.test(e) && (lo.has(e) || co.has(e) || Gu.has(e));
}
const Gu = /* @__PURE__ */ new Set([
  "AED",
  "ARS",
  "AUD",
  "BGN",
  "BRL",
  "CAD",
  "CHF",
  "CNY",
  "COP",
  "CZK",
  "DKK",
  "EGP",
  "EUR",
  "GBP",
  "GHS",
  "HKD",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "KES",
  "MAD",
  "MXN",
  "MYR",
  "NGN",
  "NOK",
  "NZD",
  "PEN",
  "PHP",
  "PKR",
  "PLN",
  "QAR",
  "RON",
  "SAR",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "TWD",
  "TZS",
  "USD",
  "UYU",
  "ZAR"
]);
function uo(e) {
  const t = Ns.safeParse(e);
  if (!t.success)
    return {
      ok: !1,
      issues: t.error.issues.map((i) => ({
        path: i.path,
        code: `schema/${i.code}`,
        message: i.message,
        severity: "error"
      }))
    };
  const n = fo(t.data);
  return {
    ok: !n.some((i) => i.severity === "error"),
    value: t.data,
    issues: n
  };
}
Ns.superRefine((e, t) => {
  for (const n of fo(e))
    n.severity === "error" && t.addIssue({
      code: w.custom,
      path: n.path,
      message: `${n.code}: ${n.message}`
    });
});
function fo(e) {
  const t = [], n = (l, c, u, d = "error") => t.push({ path: l, code: c, message: u, severity: d }), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
  let a = 0, o = !1;
  e.sections.forEach((l, c) => {
    s.has(l.id) && n(["sections", c, "id"], "duplicate-section-id", `Duplicate section id "${l.id}".`), s.add(l.id), l.fields.forEach((u, d) => {
      const p = ["sections", c, "fields", d];
      if (i.has(u.id) ? n([...p, "id"], "duplicate-field-id", `Duplicate field id "${u.id}".`) : i.set(u.id, { field: u, path: p }), (u.id === so || u.id.startsWith("file.")) && n([...p, "id"], "reserved-field-id", `Field id "${u.id}" is reserved for condition refs.`), u.type === "quantity" && (a += 1, a > 1 && n(p, "multiple-quantity-fields", "Only one quantity field is allowed per product.")), u.role) {
        const m = r.get(u.role);
        m ? n([...p, "role"], "duplicate-role", `Role "${u.role}" is already used by field "${m}" — only one field per role.`) : r.set(u.role, u.id);
      }
      u.type === "file" && (o = !0);
    });
  });
  for (const { field: l, path: c } of i.values()) {
    Yu(l, c, n), Qu(l, c, n), Ju(l, c, i, n);
    const u = [
      { mods: l.priceModifiers, base: [...c, "priceModifiers"] }
    ];
    mt(l) && l.options.forEach((d, p) => {
      u.push({
        mods: d.priceModifiers,
        base: [...c, "options", p, "priceModifiers"]
      });
    });
    for (const { mods: d, base: p } of u)
      d.forEach((m, S) => {
        ed(m, [...p, S], i, o, n);
      });
  }
  return td(e.pricing.basePrice, ["pricing", "basePrice"], n), e.variants && nd(e, i, n), Ku(e.pricing.currency) || n(["pricing", "currency"], "unknown-currency", `Currency "${e.pricing.currency}" is not in the known list; totals will round to 2 decimals.`, "warning"), t;
}
function Yu(e, t, n) {
  var i;
  if (e.type === "quantity" || e.type === "number") {
    const { min: s, max: r, defaultValue: a } = e;
    if (s !== void 0 && r !== void 0 && s > r ? n([...t, "min"], "min-gt-max", `min (${s}) exceeds max (${r}).`) : a !== void 0 && (s !== void 0 && a < s || r !== void 0 && a > r) && n([...t, "defaultValue"], "default-out-of-range", `defaultValue (${a}) is outside [min, max].`), e.type === "quantity" && e.presets) {
      for (const o of e.presets)
        if (e.min !== void 0 && o < e.min || e.max !== void 0 && o > e.max) {
          n([...t, "presets"], "default-out-of-range", `Preset ${o} is outside [min, max].`);
          break;
        }
    }
  }
  e.type === "select-many" && e.maxSelect !== void 0 && e.minSelect > e.maxSelect && n([...t, "minSelect"], "min-gt-max", `minSelect (${e.minSelect}) exceeds maxSelect (${e.maxSelect}).`), e.type === "dimensions" && (e.minW !== void 0 && e.maxW !== void 0 && e.minW > e.maxW && n([...t, "minW"], "min-gt-max", `minW (${e.minW}) exceeds maxW (${e.maxW}).`), e.minH !== void 0 && e.maxH !== void 0 && e.minH > e.maxH && n([...t, "minH"], "min-gt-max", `minH (${e.minH}) exceeds maxH (${e.maxH}).`)), e.type === "file" && (e.providerId === "filecheck" && !((i = e.filecheck) != null && i.workflowId) && n([...t, "filecheck"], "filecheck-missing-workflow", "Filecheck provider selected but no workflow ID set; the default uploader will be used.", "warning"), e.filecheck && e.providerId !== "filecheck" && n([...t, "providerId"], "filecheck-missing-workflow", 'Filecheck settings are present but providerId is not "filecheck"; they will be ignored.', "warning"));
}
function Qu(e, t, n) {
  if (!mt(e))
    return;
  const i = /* @__PURE__ */ new Set();
  let s = 0;
  e.options.forEach((r, a) => {
    i.has(r.id) && n([...t, "options", a, "id"], "duplicate-choice-id", `Duplicate choice id "${r.id}" in field "${e.id}".`), i.add(r.id), r.default && (s += 1);
  }), e.type === "select-one" && s > 1 && n([...t, "options"], "too-many-defaults", `select-one field "${e.id}" has ${s} default choices.`), e.type === "select-many" && e.maxSelect !== void 0 && s > e.maxSelect && n([...t, "options"], "too-many-defaults", `Default choices (${s}) exceed maxSelect (${e.maxSelect}).`);
}
function Ju(e, t, n, i) {
  if (!e.visibleWhen)
    return;
  const s = [...t, "visibleWhen"], r = (a, o) => {
    if (io(a)) {
      const l = Au.includes(a.ref), c = a.ref === so, u = n.get(a.ref);
      if (!l && !c && !u) {
        i(o, "dangling-condition-ref", `Condition references unknown field "${a.ref}".`);
        return;
      }
      if (a.ref === e.id && i(o, "self-condition-ref", `Field "${e.id}" references itself.`), u && mt(u.field) && (a.op === "eq" || a.op === "neq" || a.op === "in")) {
        const d = new Set(u.field.options.map((m) => m.id)), p = Array.isArray(a.value) ? a.value : a.value !== void 0 ? [a.value] : [];
        for (const m of p)
          typeof m == "string" && !d.has(m) && i(o, "unknown-condition-choice", `"${m}" is not a choice of field "${a.ref}".`, "warning");
      }
      return;
    }
    (a.all ?? []).forEach((l, c) => r(l, [...o, "all", c])), (a.any ?? []).forEach((l, c) => r(l, [...o, "any", c]));
  };
  r(e.visibleWhen, s);
}
function po(e, t, n) {
  let i = 0;
  e.rows.forEach((s, r) => {
    if (r === e.rows.length - 1) {
      s.upTo !== void 0 && n([...t, "rows", r, "upTo"], "tier-row-order", "The last tier row must be open-ended (omit upTo).");
      return;
    }
    if (s.upTo === void 0) {
      n([...t, "rows", r, "upTo"], "tier-row-order", "Only the last tier row may omit upTo.");
      return;
    }
    s.upTo <= i && n([...t, "rows", r, "upTo"], "tier-row-order", `Tier upTo values must strictly increase (${s.upTo} after ${i}).`), i = s.upTo;
  });
}
const Xu = /* @__PURE__ */ new Set(["fixed", "percent", "multiplier", "setup"]);
function ed(e, t, n, i, s) {
  if (e.tiers && (po(e.tiers, [...t, "tiers"], s), e.tiers.mode === "graduated" && Xu.has(e.type) && s([...t, "tiers", "mode"], "tier-basis-invalid", `Graduated tiers are meaningless on a "${e.type}" modifier.`), e.tiers.basis === "pages" && !i && s([...t, "tiers", "basis"], "pages-basis-without-file", "Pages-based tiers need a file field to supply page counts.", "warning")), (e.type === "perPage" || e.type === "perColorPage" || e.type === "perMonoPage") && !i && s([...t, "type"], "pages-basis-without-file", `"${e.type}" pricing needs a file field to supply page counts.`, "warning"), e.type === "perArea")
    if (e.dimensionsField !== void 0) {
      const r = n.get(e.dimensionsField);
      (!r || r.field.type !== "dimensions") && s([...t, "dimensionsField"], "perarea-dangling-dims", `"${e.dimensionsField}" is not a dimensions field.`);
    } else i || s([...t, "type"], "perarea-missing-source", "perArea pricing has no dimensions field and no file field to read a canvas from.", "warning");
}
function td(e, t, n) {
  e.tiers && (po(e.tiers, [...t, "tiers"], n), e.tiers.basis !== "quantity" && n([...t, "tiers", "basis"], "tier-basis-invalid", "Base price tiers must use the quantity basis."), e.tiers.mode === "graduated" && e.per === "order" && n([...t, "tiers", "mode"], "tier-basis-invalid", 'Graduated base tiers require per: "unit".'));
}
function nd(e, t, n) {
  const i = e.variants;
  if (!i)
    return;
  const s = /* @__PURE__ */ new Map();
  i.axes.forEach((o, l) => {
    const c = t.get(o);
    if (!c || c.field.type !== "select-one") {
      n(["variants", "axes", l], "variant-axis-invalid", `Variant axis "${o}" must reference a select-one field.`);
      return;
    }
    s.set(o, new Set(c.field.options.map((u) => u.id)));
  });
  const r = /* @__PURE__ */ new Set(), a = new Set(i.axes);
  i.combinations.forEach((o, l) => {
    const c = Object.keys(o.select);
    if (new Set(c).size !== a.size || c.some((p) => !a.has(p))) {
      n(["variants", "combinations", l, "select"], "variant-combo-invalid", "Combination keys must exactly match the variant axes.");
      return;
    }
    for (const [p, m] of Object.entries(o.select)) {
      const S = s.get(p);
      S && !S.has(m) && n(["variants", "combinations", l, "select", p], "variant-combo-invalid", `"${m}" is not a choice of axis "${p}".`);
    }
    const d = i.axes.map((p) => o.select[p]).join("\0");
    r.has(d) && n(["variants", "combinations", l], "variant-combo-duplicate", "Duplicate variant combination."), r.add(d), o.price !== void 0 && e.pricing.basePrice.tiers && n(["variants", "combinations", l, "price"], "variant-price-with-base-tiers", "Combination price overrides only the untiered base amount; base tiers still apply.", "warning");
  });
}
const ls = "1.0", id = oe({
  /** Minimum quantity required to trigger this tier (inclusive). */
  minQty: H().nonnegative(),
  /** Maximum quantity for this tier (inclusive). If omitted, tier spans to infinity. */
  maxQty: H().nonnegative().optional(),
  /** Price/amount applied for this tier. */
  amount: H()
}), ho = oe({
  type: _e([
    "fixed",
    "perUnit",
    "perPage",
    "perColorPage",
    "perMonoPage",
    "percent",
    "multiplier"
  ]),
  amount: H(),
  tiers: fe(id).optional()
}), sd = oe({
  /** The field id whose value gates visibility. */
  field: j(),
  /** Show when the field's selected value equals one of these. */
  equals: Rn([j(), fe(j())]).optional(),
  /** Show only when a value is present (any non-empty selection). */
  isSet: Ze().optional()
}), rd = oe({
  id: j().min(1),
  label: j(),
  description: j().optional(),
  image: j().url().optional(),
  color: j().optional(),
  default: Ze().optional(),
  priceModifiers: fe(ho).default([]),
  /** Dead in v1 runtime; dropped by migration. */
  reveals: fe(j()).default([])
}), ad = _e([
  "card-select",
  "image-grid",
  "swatch",
  "pill-toggle",
  "dropdown",
  "number-stepper",
  "file-upload",
  "summary"
]), od = oe({
  id: j().min(1),
  type: ad,
  label: j().optional(),
  helpText: j().optional(),
  required: Ze().default(!1),
  options: fe(rd).default([]),
  min: H().optional(),
  max: H().optional(),
  step: H().optional(),
  defaultValue: Rn([j(), H()]).optional(),
  accept: fe(j()).optional(),
  providerId: j().optional(),
  visibleWhen: sd.optional(),
  priceModifiers: fe(ho).default([])
}), ld = oe({
  id: j().min(1),
  title: j(),
  layout: _e(["stacked", "tabs"]).default("stacked"),
  fields: fe(od)
}), cd = oe({
  version: tt(ls).default(ls),
  productId: j().min(1),
  title: j(),
  currency: j().default("USD"),
  basePrice: H().nonnegative().default(0),
  sections: fe(ld)
});
class di extends Error {
  constructor(n) {
    const i = n.map((s) => `${s.code} at ${s.path.join(".") || "<root>"}: ${s.message}`).join("; ");
    super(`Invalid product options: ${i}`);
    Ls(this, "issues");
    this.name = "ProductOptionsError", this.issues = n;
  }
}
function ud(e) {
  const t = cd.safeParse(e);
  if (!t.success)
    throw new di(t.error.issues.map((c) => ({
      path: c.path,
      code: `schema-v1/${c.code}`,
      message: c.message,
      severity: "error"
    })));
  const n = t.data, i = [];
  let s = !1;
  const r = n.sections.some((c) => c.layout === "tabs");
  r && i.push('Section layout "tabs" promotes the whole document to the wizard layout.');
  const a = {
    version: ui,
    productId: n.productId,
    title: n.title,
    layout: r ? "wizard" : "stacked",
    pricing: {
      currency: yd(n.currency, i),
      basePrice: { amount: n.basePrice, per: "order" }
    },
    sections: n.sections.map((c) => ({
      id: c.id,
      title: c.title,
      fields: c.fields.map((u) => {
        const d = pd(u, s, i);
        return d.type === "quantity" && (s = !0), d;
      })
    }))
  }, o = Ns.parse(a), l = uo(o);
  if (!l.ok)
    throw new di(l.issues.filter((c) => c.severity === "error"));
  return { doc: o, warnings: i };
}
function dd(e) {
  const t = typeof e == "object" && e !== null ? e.version : void 0;
  if (t === void 0 || t === ui) {
    const n = uo(e);
    if (!n.ok || !n.value)
      throw new di(n.issues.filter((i) => i.severity === "error"));
    return { doc: n.value, warnings: [] };
  }
  if (t === ls)
    return ud(e);
  throw new di([
    {
      path: ["version"],
      code: "unknown-version",
      message: `Unsupported schema version "${String(t)}".`,
      severity: "error"
    }
  ]);
}
function Nr(e, t) {
  const { doc: n, warnings: i } = dd(e);
  return n;
}
const fd = {
  "card-select": "cards",
  "image-grid": "grid",
  swatch: "swatches",
  "pill-toggle": "pills",
  dropdown: "dropdown"
};
function pd(e, t, n) {
  const i = {
    id: e.id,
    label: e.label,
    helpText: e.helpText,
    required: e.required,
    visibleWhen: md(e.visibleWhen),
    priceModifiers: e.priceModifiers.map((s) => mo(s, n))
  };
  switch (e.type) {
    case "card-select":
    case "image-grid":
    case "swatch":
    case "pill-toggle":
    case "dropdown":
      return {
        ...i,
        type: "select-one",
        display: fd[e.type],
        options: e.options.map((s) => hd(s, n))
      };
    case "number-stepper":
      return t ? (n.push(`Field "${e.id}": only the first number-stepper becomes the quantity; this one migrated to a number field.`), {
        ...i,
        type: "number",
        display: "stepper",
        min: e.min,
        max: e.max,
        step: e.step,
        defaultValue: typeof e.defaultValue == "number" ? e.defaultValue : void 0
      }) : {
        ...i,
        type: "quantity",
        display: "stepper",
        min: hn(e.min) ?? 1,
        max: hn(e.max),
        step: hn(e.step) ?? 1,
        defaultValue: hn(typeof e.defaultValue == "number" ? e.defaultValue : void 0) ?? hn(e.min) ?? 1
      };
    case "file-upload":
      return {
        ...i,
        type: "file",
        display: "dropzone",
        accept: e.accept ?? ["application/pdf"],
        providerId: e.providerId
      };
    case "summary":
      return { ...i, type: "info", display: "summary" };
  }
}
function hd(e, t) {
  return {
    id: e.id,
    label: e.label,
    description: e.description,
    image: e.image,
    color: e.color,
    default: e.default,
    priceModifiers: e.priceModifiers.map((n) => mo(n, t))
  };
}
function md(e) {
  if (!e)
    return;
  let t;
  if (e.isSet !== void 0)
    t = { ref: e.field, op: e.isSet ? "isSet" : "notSet" };
  else if (e.equals !== void 0)
    t = Array.isArray(e.equals) ? { ref: e.field, op: "in", value: e.equals } : { ref: e.field, op: "eq", value: e.equals };
  else
    return;
  return { all: [t] };
}
function hn(e) {
  if (e === void 0)
    return;
  const t = Math.round(e);
  return t >= 1 ? t : void 0;
}
function mo(e, t) {
  return !e.tiers || e.tiers.length === 0 ? { type: e.type, amount: e.amount } : {
    type: e.type,
    amount: e.amount,
    tiers: {
      basis: "quantity",
      mode: "flat",
      rows: gd(e.tiers, e.amount, t)
    }
  };
}
function gd(e, t, n) {
  vd(e) && n.push("Overlapping v1 tiers detected; earlier tiers win in the overlap (v1 behavior preserved).");
  const i = /* @__PURE__ */ new Set([1]);
  for (const o of e)
    i.add(Math.max(1, Math.ceil(o.minQty))), o.maxQty !== void 0 && i.add(Math.floor(o.maxQty) + 1);
  const s = [...i].sort((o, l) => o - l), r = (o) => {
    const l = e.find((c) => o >= c.minQty && (c.maxQty === void 0 || o <= c.maxQty));
    return l ? l.amount : t;
  }, a = [];
  for (const o of s) {
    const l = r(o), c = a[a.length - 1];
    (!c || c.amount !== l) && a.push({ start: o, amount: l });
  }
  return a.map((o, l) => {
    const c = a[l + 1];
    return c ? { upTo: c.start - 1, amount: o.amount } : { amount: o.amount };
  });
}
function vd(e) {
  for (let t = 0; t < e.length; t++)
    for (let n = t + 1; n < e.length; n++) {
      const i = e[t], s = e[n];
      if (!i || !s)
        continue;
      const r = i.maxQty ?? 1 / 0, a = s.maxQty ?? 1 / 0;
      if (i.minQty <= a && s.minQty <= r)
        return !0;
    }
  return !1;
}
function yd(e, t) {
  const n = e.toUpperCase();
  return /^[A-Z]{3}$/.test(n) ? n : (t.push(`Currency "${e}" is not an ISO 4217 code; defaulting to USD.`), "USD");
}
const Rr = "1.0", go = _e(["mm", "cm", "in", "pt", "px"]), bd = _e(["pending", "ready", "failed"]), _d = _e(["info", "warning", "error"]), xd = oe({
  /** 1-based page index. */
  page: H().int().positive(),
  w: H().nonnegative(),
  h: H().nonnegative(),
  unit: go.default("mm")
}), wd = oe({
  w: H().nonnegative(),
  h: H().nonnegative(),
  /** Bleed applied around the trim box, in `unit`. */
  bleed: H().nonnegative().default(0),
  unit: go.default("mm")
}), kd = oe({
  /** Dominant color model detected in the file. */
  model: _e(["RGB", "CMYK", "Gray", "Mixed", "Unknown"]).default("Unknown"),
  /** Named spot colors (e.g. Pantone) found in the file. */
  spot: fe(j()).default([])
}), Sd = oe({
  /** Machine-readable code, e.g. "low-dpi", "not-embedded-font", "out-of-gamut". */
  code: j(),
  severity: _d.default("warning"),
  message: j().optional(),
  /** 1-based page index the issue applies to, if page-specific. */
  page: H().int().positive().optional()
}), Rs = oe({
  /** Contract version, for forward/backward compatibility. */
  version: tt(Rr).default(Rr),
  /** Stable id assigned by the basic uploader; correlates feeds to a file. */
  fileId: j().min(1),
  /** Who produced this metadata. Free-form, but reserve known sources. */
  source: j().default("custom"),
  status: bd.default("pending"),
  /** Original file name and MIME type, if known. */
  fileName: j().optional(),
  mimeType: j().optional(),
  fileSizeBytes: H().int().nonnegative().optional(),
  /** Total page count. Absent means "unknown" — pricing must fall back. */
  pages: H().int().nonnegative().optional(),
  colorPages: H().int().nonnegative().optional(),
  monoPages: H().int().nonnegative().optional(),
  pageSizes: fe(xd).optional(),
  canvas: wd.optional(),
  colors: kd.optional(),
  issues: fe(Sd).default([]),
  /** Provider-specific extras that don't fit the core contract. */
  raw: no(ku()).optional()
}), Cd = oe({
  pages: Ze().default(!1),
  colorDetection: Ze().default(!1),
  pageSizes: Ze().default(!1),
  canvas: Ze().default(!1),
  preflightIssues: Ze().default(!1)
}), Td = oe({
  id: j().min(1),
  name: j(),
  /**
   * "push" = provider POSTs metadata to us; "pull" = we fetch from `endpoint`;
   * "element" = provider renders its own embedded uploader (e.g. the
   * Filecheck intake element) in place of the basic dropzone.
   */
  mode: _e(["push", "pull", "element"]).default("push"),
  endpoint: j().url().optional(),
  capabilities: Cd.default({}),
  /** element mode: publishable key (pk_live_/pk_test_ — browser-safe, store-level). */
  publishableKey: j().optional(),
  /** element mode: optional sub-tenant scope. */
  agentId: j().optional(),
  /** element mode: override the provider SDK script URL (staging/local dev). */
  scriptUrl: j().url().optional(),
  /** element mode: override the provider iframe URL (local dev). */
  iframeSrc: j().url().optional(),
  /** element mode: create preview sessions (unmetered, webhook-suppressed). */
  preview: Ze().optional()
});
function vo(e, t, n) {
  const i = [];
  for (const { fields: s } of e)
    for (const r of s) {
      if (r.type === "info")
        continue;
      const a = t[r.id];
      let o;
      if (mt(r)) {
        const l = Array.isArray(a) ? a : typeof a == "string" ? [a] : [], c = r.options.filter((u) => l.includes(u.id)).map((u) => u.label);
        o = c.length ? c.join(", ") : void 0;
      } else r.type === "file" ? o = (n == null ? void 0 : n.fileName) ?? (n == null ? void 0 : n.fileId) : Kt(a) ? o = `${a.w} × ${a.h} ${a.unit}` : a !== void 0 && a !== "" && (o = String(a));
      o !== void 0 && i.push({
        fieldId: r.id,
        label: r.label ?? r.id,
        value: o
      });
    }
  return i;
}
const Ad = {
  mm: 1e-3,
  cm: 0.01,
  in: 0.0254,
  pt: 0.0254 / 72,
  px: void 0
}, $d = {
  sqm: 1,
  sqft: 0.3048 * 0.3048,
  sqin: 0.0254 * 0.0254
};
function Mr(e, t, n, i) {
  const s = Ad[n];
  return s === void 0 || e <= 0 || t <= 0 ? 0 : e * s * (t * s) / $d[i];
}
function yo(e, t) {
  var s;
  const n = e.areaUnit ?? "sqm";
  if (e.dimensionsField !== void 0) {
    const r = t.selections[e.dimensionsField];
    return Kt(r) ? Mr(r.w, r.h, r.unit, n) : 0;
  }
  const i = (s = t.file) == null ? void 0 : s.canvas;
  return i ? Mr(i.w, i.h, i.unit, n) : 0;
}
function Id(e, t) {
  var n, i, s, r;
  if (e === "quantity")
    return t.quantity;
  if (e.startsWith("file."))
    switch (e) {
      case "file.pages":
        return (n = t.file) == null ? void 0 : n.pages;
      case "file.colorPages":
        return (i = t.file) == null ? void 0 : i.colorPages;
      case "file.monoPages":
        return (s = t.file) == null ? void 0 : s.monoPages;
      case "file.status":
        return (r = t.file) == null ? void 0 : r.status;
      default:
        return;
    }
  return t.selections[e];
}
function jr(e) {
  return e !== void 0 && e !== "" && !(Array.isArray(e) && e.length === 0);
}
function Ed(e, t) {
  const n = Id(e.ref, t);
  if (e.op === "isSet")
    return jr(n);
  if (e.op === "notSet")
    return !jr(n);
  if (n === void 0)
    return !1;
  switch (e.op) {
    case "eq":
      return Fr(n, e.value);
    case "neq":
      return !Fr(n, e.value);
    case "in": {
      const i = Array.isArray(e.value) ? e.value.map(String) : e.value !== void 0 ? [String(e.value)] : [];
      return Array.isArray(n) ? n.some((s) => i.includes(String(s))) : Kt(n) ? !1 : i.includes(String(n));
    }
    case "gt":
    case "gte":
    case "lt":
    case "lte": {
      if (Array.isArray(n) || Kt(n))
        return !1;
      const i = Number(n), s = Number(e.value);
      if (Number.isNaN(i) || Number.isNaN(s))
        return !1;
      switch (e.op) {
        case "gt":
          return i > s;
        case "gte":
          return i >= s;
        case "lt":
          return i < s;
        case "lte":
          return i <= s;
      }
    }
  }
}
function Fr(e, t) {
  if (Array.isArray(e)) {
    if (Array.isArray(t)) {
      const n = t.map(String);
      return e.some((i) => n.includes(String(i)));
    }
    return t !== void 0 && e.map(String).includes(String(t));
  }
  return Kt(e) ? !1 : Array.isArray(t) ? t.map(String).includes(String(e)) : t !== void 0 && String(e) === String(t);
}
function bo(e, t) {
  if (!e)
    return !0;
  const n = (r) => io(r) ? Ed(r, t) : bo(r, t), i = e.all === void 0 || e.all.every(n), s = e.any === void 0 || e.any.length === 0 || e.any.some(n);
  return i && s;
}
function _o(e, t) {
  return bo(e.visibleWhen, t);
}
function Ye(e, t) {
  const i = 10 ** Wu(t);
  return Math.round((e + Number.EPSILON) * i) / i;
}
function Od(e) {
  for (const t of e.sections)
    for (const n of t.fields)
      if (n.type === "quantity")
        return n;
}
function xo(e, t) {
  const n = Od(e);
  if (!n)
    return 1;
  const i = t[n.id], s = typeof i == "number" ? i : typeof i == "string" && i.trim() !== "" ? Number(i) : n.defaultValue;
  return Number.isNaN(s) ? Dr(n, n.defaultValue) : Dr(n, s);
}
function Dr(e, t) {
  const n = e.step;
  let i = Math.round(t);
  return i = e.min + Math.round((i - e.min) / n) * n, i < e.min && (i = e.min), e.max !== void 0 && i > e.max && (i = e.min + Math.floor((e.max - e.min) / n) * n), i;
}
function cs(e, t) {
  for (const n of e)
    if (n.upTo === void 0 || t <= n.upTo)
      return n;
  return e[e.length - 1];
}
function qn(e, t) {
  let n = 0, i = 0;
  for (const s of t) {
    const a = (s.upTo === void 0 ? e : Math.min(s.upTo, e)) - i;
    if (a > 0 && (n += a * s.amount), s.upTo === void 0 || e <= s.upTo)
      break;
    i = s.upTo;
  }
  return n;
}
function Ci(e, t) {
  const n = e.variants;
  if (!n)
    return;
  const i = {};
  for (const s of n.axes) {
    const r = t[s];
    if (typeof r != "string" || r === "")
      return;
    i[s] = r;
  }
  return n.combinations.find((s) => n.axes.every((r) => s.select[r] === i[r]));
}
function Pd(e, t) {
  const n = Ci(e, t);
  if (n != null && n.sku)
    return n.sku;
  const i = [];
  for (const s of e.sections)
    for (const r of s.fields) {
      if (!mt(r))
        continue;
      const a = t[r.id], o = Array.isArray(a) ? a : typeof a == "string" ? [a] : [];
      for (const l of r.options)
        o.includes(l.id) && l.sku && i.push(l.sku);
    }
  return i.length > 0 ? i.join("-") : void 0;
}
function Nd(e, t, n, i) {
  for (const a of e.sections)
    for (const o of a.fields) {
      if (o.id !== n || !mt(o))
        continue;
      const l = o.options.find((c) => c.id === i);
      if (!l || l.disabled)
        return !1;
    }
  const s = e.variants;
  if (!s || !s.axes.includes(n))
    return !0;
  const r = Ci(e, { ...t, [n]: i });
  return r ? r.available : !0;
}
function Rd(e, t) {
  const n = Ci(e, t);
  if (n && !n.available)
    return !0;
  for (const i of e.sections)
    for (const s of i.fields) {
      if (!mt(s))
        continue;
      const r = t[s.id], a = Array.isArray(r) ? r : typeof r == "string" ? [r] : [];
      for (const o of s.options)
        if (a.includes(o.id) && o.disabled)
          return !0;
    }
  return !1;
}
function Md(e, t) {
  const n = t.quantity ?? xo(e, t.selections), i = {
    selections: t.selections,
    file: t.file,
    quantity: n
  }, s = e.pricing.currency, r = [], a = Ci(e, t.selections), o = Rd(e, t.selections), l = Pd(e, t.selections), c = jd(e.pricing.basePrice, a == null ? void 0 : a.price, n);
  r.push({
    sourceId: "base",
    label: "Base price",
    stage: "base",
    type: "base",
    amount: Ye(c, s)
  });
  let u = c;
  const d = Fd(e, i);
  for (const { sourceId: k, label: G, modifier: V } of d) {
    const I = Vd(V, i);
    I !== void 0 && (u += I, r.push({
      sourceId: k,
      label: G,
      stage: "additive",
      type: V.type,
      amount: Ye(I, s)
    }));
  }
  const p = u;
  for (const { sourceId: k, label: G, modifier: V } of d) {
    if (V.type !== "percent")
      continue;
    const I = zt(V, i), z = u * (I / 100);
    u += z, r.push({
      sourceId: k,
      label: G,
      stage: "percent",
      type: "percent",
      amount: Ye(z, s)
    });
  }
  for (const { sourceId: k, label: G, modifier: V } of d) {
    if (V.type !== "multiplier")
      continue;
    const I = zt(V, i), z = u * I - u;
    u += z, r.push({
      sourceId: k,
      label: G,
      stage: "multiplier",
      type: "multiplier",
      amount: Ye(z, s)
    });
  }
  e.pricing.setupFee !== void 0 && e.pricing.setupFee > 0 && (u += e.pricing.setupFee, r.push({
    sourceId: "setup-fee",
    label: "Setup fee",
    stage: "setup",
    type: "setup",
    amount: Ye(e.pricing.setupFee, s)
  }));
  for (const { sourceId: k, label: G, modifier: V } of d) {
    if (V.type !== "setup")
      continue;
    const I = zt(V, i);
    u += I, r.push({
      sourceId: k,
      label: G,
      stage: "setup",
      type: "setup",
      amount: Ye(I, s)
    });
  }
  const m = Math.max(e.pricing.minimumPrice ?? 0, 0);
  if (u < m) {
    const k = m - u;
    u = m, r.push({
      sourceId: "adjustment:minimum",
      label: "Minimum order adjustment",
      stage: "adjustment",
      type: "minimum",
      amount: Ye(k, s)
    });
  }
  const S = Ye(u, s);
  return {
    currency: s,
    quantity: n,
    unavailable: o,
    sku: l,
    base: Ye(c, s),
    subtotal: Ye(p, s),
    total: S,
    unitPrice: Ye(u / Math.max(n, 1), s),
    lines: r
  };
}
function jd(e, t, n) {
  const i = t ?? e.amount, s = e.tiers;
  return e.per === "order" ? s ? cs(s.rows, n).amount : i : s ? s.mode === "graduated" ? qn(n, s.rows) : cs(s.rows, n).amount * n : i * n;
}
function Fd(e, t) {
  const n = [];
  for (const i of e.sections)
    for (const s of i.fields) {
      if (!_o(s, t))
        continue;
      for (const a of s.priceModifiers)
        n.push({
          sourceId: s.id,
          label: s.label ?? s.id,
          modifier: a
        });
      if (!mt(s))
        continue;
      const r = Dd(s.id, t.selections);
      for (const a of s.options)
        if (r.includes(a.id))
          for (const o of a.priceModifiers)
            n.push({
              sourceId: `${s.id}:${a.id}`,
              label: a.label,
              modifier: o
            });
    }
  return n;
}
function Dd(e, t) {
  const n = t[e];
  return n === void 0 ? [] : Array.isArray(n) ? n : typeof n == "object" ? [] : [String(n)];
}
function Bn(e, t) {
  var n, i;
  switch (((n = e.tiers) == null ? void 0 : n.basis) ?? "quantity") {
    case "quantity":
      return t.quantity;
    case "pages":
      return ((i = t.file) == null ? void 0 : i.pages) ?? 0;
    case "area":
      return yo(e, t);
  }
}
function zt(e, t) {
  return e.tiers ? cs(e.tiers.rows, Bn(e, t)).amount : e.amount;
}
function Vd(e, t) {
  var i, s, r, a, o, l;
  const n = t.quantity;
  switch (e.type) {
    case "percent":
    case "multiplier":
    case "setup":
      return;
    case "fixed":
      return zt(e, t);
    case "perUnit":
      return ((i = e.tiers) == null ? void 0 : i.mode) === "graduated" ? qn(Bn(e, t), e.tiers.rows) : zt(e, t) * n;
    case "perPage":
    case "perColorPage":
    case "perMonoPage": {
      const c = e.type === "perPage" ? ((s = t.file) == null ? void 0 : s.pages) ?? 0 : e.type === "perColorPage" ? ((r = t.file) == null ? void 0 : r.colorPages) ?? 0 : ((a = t.file) == null ? void 0 : a.monoPages) ?? 0;
      return ((o = e.tiers) == null ? void 0 : o.mode) === "graduated" ? qn(Bn(e, t), e.tiers.rows) * n : zt(e, t) * c * n;
    }
    case "perArea": {
      const c = yo(e, t);
      return ((l = e.tiers) == null ? void 0 : l.mode) === "graduated" ? qn(Bn(e, t), e.tiers.rows) * n : zt(e, t) * c * n;
    }
  }
}
async function zd(e, t, n) {
  const i = n ? await Ld(n) : void 0, s = await fetch(e, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: i,
      fileName: t.name,
      fileSize: t.size,
      contentType: t.type
    })
  });
  if (!s.ok) {
    const u = await s.text();
    throw new Error(`Upload authorization failed: ${u || s.status}`);
  }
  const { url: r, fields: a, fileId: o } = await s.json(), l = new FormData();
  for (const [u, d] of Object.entries(a))
    l.append(u, d);
  l.append("file", t);
  const c = await fetch(r, {
    method: "POST",
    body: l
  });
  if (!c.ok) {
    const u = await c.text();
    throw new Error(`Storage upload failed: ${u || c.status}`);
  }
  return {
    fileId: o ?? crypto.randomUUID(),
    fileName: t.name,
    fileSizeBytes: t.size
  };
}
function Ld(e) {
  return new Promise((t, n) => {
    const i = new URL(e, window.location.href).origin;
    let s = document.getElementById("turnstile-challenge-iframe"), r = !1;
    s ? s.dataset.ready === "true" && (r = !0) : (s = document.createElement("iframe"), s.id = "turnstile-challenge-iframe", s.src = e, s.style.position = "fixed", s.style.top = "50%", s.style.left = "50%", s.style.transform = "translate(-50%, -50%)", s.style.width = "300px", s.style.height = "100px", s.style.border = "none", s.style.opacity = "0", s.style.zIndex = "-9999", s.style.pointerEvents = "none", document.body.appendChild(s));
    const a = (u) => {
      u.origin !== i || u.source !== (s == null ? void 0 : s.contentWindow) || u.data && typeof u.data == "object" && (u.data.type === "challenge-ready" ? (r = !0, s && (s.dataset.ready = "true"), c()) : u.data.type === "challenge-success" ? (l(), t(u.data.token)) : u.data.type === "challenge-error" && (l(), n(new Error(u.data.error || "Turnstile challenge failed"))));
    }, o = setTimeout(() => {
      l(), n(new Error("Turnstile challenge timed out"));
    }, 6e4);
    function l() {
      window.removeEventListener("message", a), clearTimeout(o), s && (s.style.opacity = "0", s.style.zIndex = "-9999", s.style.pointerEvents = "none");
    }
    window.addEventListener("message", a);
    const c = () => {
      var u;
      s && (s.style.opacity = "1", s.style.zIndex = "999999", s.style.pointerEvents = "auto"), (u = s.contentWindow) == null || u.postMessage({ type: "execute-challenge" }, i);
    };
    r && c();
  });
}
async function Ud(e, t) {
  if (!e.endpoint)
    throw new Error(`Provider "${e.id}" has no endpoint for pull mode.`);
  const n = `${e.endpoint.replace(/\/$/, "")}/${encodeURIComponent(t)}`, i = await fetch(n);
  if (!i.ok)
    throw new Error(`Metadata fetch failed: ${i.status}`);
  return Rs.parse(await i.json());
}
async function Zd(e, t, n = {}) {
  const i = n.intervalMs ?? 1500, s = n.maxAttempts ?? 20;
  let r = {
    version: "1.0",
    fileId: t,
    source: e.id,
    status: "pending",
    issues: []
  };
  for (let a = 0; a < s; a++) {
    try {
      if (r = await Ud(e, t), r.status === "ready" || r.status === "failed")
        return r;
    } catch {
    }
    await Hd(i);
  }
  return r;
}
function Hd(e) {
  return new Promise((t) => setTimeout(t, e));
}
function qd(e) {
  const t = { ...e }, n = /* @__PURE__ */ Le(null), i = /* @__PURE__ */ Le(!1), s = /* @__PURE__ */ Le(null), r = /* @__PURE__ */ Le(!1), a = /* @__PURE__ */ ln({}), o = /* @__PURE__ */ Le(void 0), l = /* @__PURE__ */ Le(!1), c = de(
    () => n.value ? xo(n.value, a) : 1
  ), u = de(() => ({
    selections: a,
    file: o.value,
    quantity: c.value
  }));
  async function d() {
    i.value = !0, s.value = null, r.value = !1;
    try {
      if (t.inlineConfig)
        n.value = Nr(t.inlineConfig);
      else if (t.configUrl) {
        const P = await fetch(t.configUrl);
        if (P.status === 404 || P.status === 403) {
          r.value = !0;
          return;
        }
        if (!P.ok)
          throw new Error(`Config load failed: ${P.status}`);
        n.value = Nr(await P.json());
      } else
        throw new Error("No config-url or inline config provided.");
      Bd(n.value, a);
    } catch (P) {
      s.value = P instanceof Error ? P.message : String(P);
    } finally {
      i.value = !1;
    }
  }
  async function p(P) {
    Object.assign(t, P);
    for (const ce of Object.keys(a))
      delete a[ce];
    o.value = void 0, await d();
  }
  const m = de(() => n.value ? n.value.sections.map((P) => ({
    section: P,
    fields: P.fields.filter(
      (ce) => _o(ce, u.value)
    )
  })).filter((P) => P.fields.length > 0) : []), S = de(
    () => m.value.flatMap((P) => P.fields)
  ), k = de(() => n.value ? Md(n.value, {
    selections: a,
    file: o.value
  }) : null);
  function G(P, ce) {
    a[P] = ce;
  }
  function V(P, ce) {
    if (P.type !== "select-many") {
      G(P.id, ce);
      return;
    }
    const le = a[P.id], T = Array.isArray(le) ? [...le] : [], M = T.indexOf(ce);
    if (M >= 0)
      T.splice(M, 1);
    else {
      if (P.maxSelect !== void 0 && T.length >= P.maxSelect)
        return;
      T.push(ce);
    }
    a[P.id] = T;
  }
  async function I(P, ce) {
    if (!t.uploadEndpoint) {
      s.value = "No upload endpoint configured.";
      return;
    }
    l.value = !0;
    try {
      const le = await zd(t.uploadEndpoint, ce, t.turnstileUrl);
      o.value = {
        version: "1.0",
        fileId: le.fileId,
        source: "uploader",
        status: "ready",
        fileName: le.fileName,
        fileSizeBytes: le.fileSizeBytes,
        issues: []
      }, a[P.id] = le.fileId;
      const T = t.provider;
      if (T && T.mode === "pull") {
        const M = await Zd(T, le.fileId);
        o.value = M;
      }
    } catch (le) {
      s.value = le instanceof Error ? le.message : String(le);
    } finally {
      l.value = !1;
    }
  }
  function z(P) {
    (!o.value || o.value.fileId === P.fileId) && (o.value = P);
  }
  function D(P) {
    o.value = P;
  }
  return {
    schema: n,
    loading: i,
    error: s,
    unconfigured: r,
    selections: a,
    quantity: c,
    file: o,
    fileAnalyzing: l,
    evalCtx: u,
    visibleSections: m,
    visibleFields: S,
    price: k,
    /** The connected data-feed provider config, if any. */
    get provider() {
      return t.provider;
    },
    load: d,
    reload: p,
    select: G,
    toggle: V,
    handleFile: I,
    feedMetadata: z,
    setFile: D
  };
}
function Bd(e, t) {
  for (const n of e.sections)
    for (const i of n.fields)
      if (t[i.id] === void 0)
        switch (i.type) {
          case "select-one": {
            const s = i.options.find((r) => r.default);
            s && (t[i.id] = s.id);
            break;
          }
          case "select-many": {
            const s = i.options.filter((r) => r.default).map((r) => r.id);
            s.length > 0 && (t[i.id] = s);
            break;
          }
          case "quantity":
            t[i.id] = i.defaultValue;
            break;
          case "number":
            i.defaultValue !== void 0 && (t[i.id] = i.defaultValue);
            break;
          case "dimensions":
            i.defaultValue && (t[i.id] = {
              ...i.defaultValue,
              unit: i.defaultUnit
            });
            break;
        }
}
function Wd() {
  const e = /* @__PURE__ */ ln(/* @__PURE__ */ new Map()), t = de(
    () => Array.from(e, ([r, a]) => ({ key: r, message: a.message }))
  ), n = de(() => e.size > 0);
  function i(r, a) {
    const o = e.get(r);
    o && o.message === a || e.set(r, { message: a });
  }
  function s(r) {
    e.delete(r);
  }
  return { list: t, held: n, add: i, release: s };
}
const Vr = 1, mn = "[print-configurator]";
function Kd(e) {
  const { host: t, cfg: n, validation: i, holds: s } = e;
  function r(T) {
    return T === void 0 ? T : JSON.parse(JSON.stringify(T));
  }
  const a = de(() => !n.schema.value || !n.price.value ? null : {
    apiVersion: Vr,
    selections: r({ ...n.selections }),
    quantity: n.quantity.value,
    price: r(n.price.value),
    file: n.file.value ? r(n.file.value) : null,
    holds: s.list.value,
    /* "Would submit() pass right now?" — holds block submit, so they
       factor in even though they do not mark any field invalid. */
    valid: i.valid.value && !s.held.value
  });
  let o = null, l = !1;
  function c(T, M) {
    if (!T)
      return ["selections", "quantity", "price", "file", "holds", "valid"];
    const J = [], xe = /* @__PURE__ */ new Set([
      ...Object.keys(T.selections),
      ...Object.keys(M.selections)
    ]);
    for (const nt of xe)
      Vt(T.selections[nt], M.selections[nt]) || J.push(`selections.${nt}`);
    return T.quantity !== M.quantity && J.push("quantity"), Vt(T.price, M.price) || J.push("price"), Vt(T.file, M.file) || J.push("file"), Vt(T.holds, M.holds) || J.push("holds"), T.valid !== M.valid && J.push("valid"), J;
  }
  let u = null;
  function d(T) {
    u = (T == null ? void 0 : T.source) ?? "api";
  }
  function p() {
    xi(() => {
      u = null;
    });
  }
  Zt(a, (T) => {
    if (!l || !T)
      return;
    const M = c(o, T), J = u ?? "user";
    o = T, M.length !== 0 && m("change", { ...T, source: J, changed: M });
  });
  function m(T, M) {
    t == null || t.dispatchEvent(
      new CustomEvent(T, { detail: M, bubbles: !0, composed: !0 })
    );
  }
  function S() {
    o = a.value, l = !0, o && m("ready", {
      ...o,
      source: "user"
    });
  }
  function k(T) {
    return T.sections.flatMap((M) => M.fields);
  }
  function G(T) {
    const M = n.schema.value;
    if (!M)
      return null;
    const J = k(M);
    return J.find((xe) => xe.id === T) ?? J.find((xe) => xe.role === T) ?? J.find(
      (xe) => (T === "quantity" || T === "dimensions" || T === "file") && xe.type === T
    ) ?? null;
  }
  function V(T, M) {
    switch (T.type) {
      case "select-one":
        return typeof M == "string" && T.options.some((J) => J.id === M);
      case "select-many":
        return Array.isArray(M) && M.every(
          (J) => typeof J == "string" && T.options.some((xe) => xe.id === J)
        );
      case "quantity":
      case "number":
        return typeof M == "number" && Number.isFinite(M);
      case "text":
        return typeof M == "string";
      case "dimensions":
        return typeof M == "object" && M !== null && !Array.isArray(M) && Number.isFinite(M.w) && Number.isFinite(M.h);
      default:
        return !1;
    }
  }
  function I(T, M) {
    const J = n.schema.value, xe = J ? k(J).find((nt) => nt.id === T) : null;
    return xe ? V(xe, M) ? Vt(n.selections[T], M) ? !1 : (n.select(T, M), i.touch(T), !0) : (console.warn(
      `${mn} setSelection: invalid value for "${T}" (${xe.type})`,
      M
    ), !1) : (console.warn(`${mn} setSelection: unknown field "${T}"`), !1);
  }
  function z(T, M, J) {
    d(J), I(T, M), p();
  }
  function D(T, M) {
    if (typeof T != "object" || T === null) {
      console.warn(`${mn} setSelections: expected an object map`);
      return;
    }
    d(M);
    for (const [J, xe] of Object.entries(T))
      I(J, xe);
    p();
  }
  function P(T, M) {
    if (T === null) {
      if (n.file.value === void 0)
        return;
      d(M), n.setFile(void 0), p();
      return;
    }
    const J = Rs.safeParse({
      version: "1.0",
      source: "custom",
      status: "ready",
      issues: [],
      ...T
    });
    if (!J.success) {
      console.warn(`${mn} setFile: invalid file record`, J.error.issues);
      return;
    }
    Vt(n.file.value, J.data) || (d(M), n.setFile(J.data), p());
  }
  function ce(T, M) {
    if (typeof T != "string" || T === "") {
      console.warn(`${mn} addHold: a non-empty string key is required`);
      return;
    }
    d(M), s.add(T, M == null ? void 0 : M.message), p();
  }
  function le(T, M) {
    d(M), s.release(T), p();
  }
  return {
    notifyReady: S,
    /* Accessor properties, NOT computed refs: the element wrapper reads
               exposed[key] per property access, so a getter hands out a FRESH
               clone every time — a partner script mutating its copy can never
               corrupt the widget or a later reader. (A computed would cache one
               clone and serve the mutated object back.)
    
               CONSUMERS MUST PASS THIS OBJECT THROUGH AS-IS: spreading it
               (`{...exposed}`) evaluates the getters ONCE at spread time and
               freezes state/schema at their pre-load nulls — which is exactly
               how the first defineExpose({...}) shipped broken. */
    exposed: {
      get state() {
        return a.value ? r(a.value) : null;
      },
      get schema() {
        return n.schema.value ? r(n.schema.value) : null;
      },
      field(T) {
        const M = G(T);
        return M ? r(M) : null;
      },
      setSelection: z,
      setSelections: D,
      setFile: P,
      addHold: ce,
      releaseHold: le,
      /** Push-mode provider feed (pre-Page-API method, kept). */
      feedMetadata(T) {
        n.feedMetadata(T);
      },
      apiVersion: Vr
    }
  };
}
function Vt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != "object" || typeof t != "object" || e === null || t === null || Array.isArray(e) !== Array.isArray(t))
    return !1;
  const n = Object.keys(e), i = Object.keys(t);
  return n.length !== i.length ? !1 : n.every(
    (s) => Vt(
      e[s],
      t[s]
    )
  );
}
function Gd(e, t, n) {
  const i = /* @__PURE__ */ ln(/* @__PURE__ */ new Set()), s = { value: !1 }, r = de(() => {
    const d = [];
    for (const p of e.value) {
      const m = Yd(p, t);
      m && d.push({ fieldId: p.id, message: m });
    }
    return d;
  }), a = de(
    () => {
      var d;
      return r.value.length === 0 && !(((d = n.value) == null ? void 0 : d.unavailable) ?? !1);
    }
  );
  function o(d) {
    var p;
    if (!(!i.has(d) && !s.value))
      return (p = r.value.find((m) => m.fieldId === d)) == null ? void 0 : p.message;
  }
  function l(d) {
    i.add(d);
  }
  function c() {
    s.value = !0;
    for (const d of e.value)
      i.add(d.id);
    return r.value;
  }
  function u() {
    i.clear(), s.value = !1;
  }
  return { issues: r, valid: a, errorFor: o, touch: l, touchAll: c, reset: u };
}
function Yd(e, t) {
  const n = t[e.id], i = n === void 0 || n === "" || Array.isArray(n) && n.length === 0;
  if (e.required && e.type !== "info" && i)
    switch (e.type) {
      case "file":
        return "Please upload a file.";
      case "text":
        return "Please fill this in.";
      case "dimensions":
        return "Please enter a size.";
      case "number":
      case "quantity":
        return "Please enter a value.";
      default:
        return "Please make a selection.";
    }
  if (e.type === "select-many" && Array.isArray(n)) {
    if (n.length < e.minSelect)
      return `Choose at least ${e.minSelect}.`;
    if (e.maxSelect !== void 0 && n.length > e.maxSelect)
      return `Choose at most ${e.maxSelect}.`;
  }
  if (e.type === "dimensions" && Kt(n)) {
    const s = zr(n.unit) / zr(e.defaultUnit), r = n.w * s, a = n.h * s;
    if (e.minW !== void 0 && r < e.minW || e.maxW !== void 0 && r > e.maxW)
      return `Width must be between ${e.minW ?? 0} and ${e.maxW ?? "∞"} ${e.defaultUnit}.`;
    if (e.minH !== void 0 && a < e.minH || e.maxH !== void 0 && a > e.maxH)
      return `Height must be between ${e.minH ?? 0} and ${e.maxH ?? "∞"} ${e.defaultUnit}.`;
  }
  if (e.type === "number" && typeof n == "number" && (e.min !== void 0 && n < e.min || e.max !== void 0 && n > e.max))
    return `Enter a value between ${e.min ?? "−∞"} and ${e.max ?? "∞"}.`;
}
function zr(e) {
  switch (e) {
    case "mm":
      return 1;
    case "cm":
      return 10;
    case "in":
      return 25.4;
  }
}
function Ti(e, t) {
  function n() {
    const i = e(), s = t(), r = i.findIndex((a) => s.includes(a.id));
    return r >= 0 ? r : 0;
  }
  return {
    tabindexFor(i, s) {
      return s === n() ? 0 : -1;
    },
    onKeydown(i, s) {
      var o;
      const r = e();
      let a;
      switch (i.key) {
        case "ArrowRight":
        case "ArrowDown":
          a = (s + 1) % r.length;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          a = (s - 1 + r.length) % r.length;
          break;
        case "Home":
          a = 0;
          break;
        case "End":
          a = r.length - 1;
          break;
        default:
          return;
      }
      return i.preventDefault(), (o = r[a]) == null ? void 0 : o.id;
    }
  };
}
const Qd = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Jd = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], Xd = {
  key: 0,
  class: "check",
  "aria-hidden": "true"
}, ef = ["src"], tf = { class: "card-label" }, nf = {
  key: 2,
  class: "card-description"
}, Lr = /* @__PURE__ */ Te({
  __name: "ChoiceCards",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, s = n.field.type === "select-many", r = Ti(
      () => n.field.options,
      () => n.selectedIds
    );
    function a(c) {
      return n.selectedIds.includes(c);
    }
    function o(c) {
      return n.unavailableIds.includes(c);
    }
    function l(c, u) {
      if (s)
        return;
      const d = r.onKeydown(c, u);
      d && !o(d) && i("pick", d);
    }
    return (c, u) => (b(), C("div", {
      class: Ke(["grid", e.field.display]),
      role: s ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (b(!0), C(ae, null, De(e.field.options, (d, p) => (b(), C("button", {
        key: d.id,
        type: "button",
        class: Ke(["card", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice card choice-selected" : "choice card",
        role: s ? void 0 : "radio",
        "aria-checked": s ? void 0 : a(d.id),
        "aria-pressed": s ? a(d.id) : void 0,
        "aria-label": d.label,
        "aria-disabled": o(d.id) || void 0,
        tabindex: s ? 0 : X(r).tabindexFor(d, p),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, p)
      }, [
        a(d.id) ? (b(), C("span", Xd, "✓")) : ye("", !0),
        d.image ? (b(), C("img", {
          key: 1,
          src: d.image,
          alt: ""
        }, null, 8, ef)) : ye("", !0),
        U("span", tf, ee(d.label), 1),
        d.description ? (b(), C("span", nf, ee(d.description), 1)) : ye("", !0)
      ], 42, Jd))), 128))
    ], 10, Qd));
  }
}), sf = ["id", "value", "aria-labelledby", "aria-describedby", "aria-invalid"], rf = {
  key: 0,
  value: "",
  disabled: ""
}, af = ["value", "disabled"], of = /* @__PURE__ */ Te({
  __name: "ChoiceDropdown",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t;
    function s(r) {
      i("pick", r.target.value);
    }
    return (r, a) => (b(), C("select", {
      id: `pc-control-${e.field.id}`,
      class: "dropdown",
      part: "dropdown",
      value: e.selectedIds[0] ?? "",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onChange: s
    }, [
      e.selectedIds.length ? ye("", !0) : (b(), C("option", rf, ee(e.field.label ? `Choose ${e.field.label.toLowerCase()}…` : "Choose…"), 1)),
      (b(!0), C(ae, null, De(e.field.options, (o) => (b(), C("option", {
        key: o.id,
        value: o.id,
        disabled: n.unavailableIds.includes(o.id)
      }, ee(o.label), 9, af))), 128))
    ], 40, sf));
  }
}), lf = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], cf = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], uf = { key: 0 }, df = { class: "choice-body" }, ff = { class: "choice-title" }, pf = {
  key: 0,
  class: "choice-description"
}, hf = /* @__PURE__ */ Te({
  __name: "ChoiceList",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, s = n.field.type === "select-many", r = Ti(
      () => n.field.options,
      () => n.selectedIds
    );
    function a(c) {
      return n.selectedIds.includes(c);
    }
    function o(c) {
      return n.unavailableIds.includes(c);
    }
    function l(c, u) {
      if (s)
        return;
      const d = r.onKeydown(c, u);
      d && !o(d) && i("pick", d);
    }
    return (c, u) => (b(), C("div", {
      class: "choice-list",
      role: s ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (b(!0), C(ae, null, De(e.field.options, (d, p) => (b(), C("button", {
        key: d.id,
        type: "button",
        class: Ke(["choice-row", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice choice-selected" : "choice",
        role: s ? void 0 : "radio",
        "aria-checked": s ? void 0 : a(d.id),
        "aria-pressed": s ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: s ? 0 : X(r).tabindexFor(d, p),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, p)
      }, [
        U("span", {
          class: Ke(["choice-indicator", { multi: s }]),
          "aria-hidden": "true"
        }, [
          a(d.id) ? (b(), C("span", uf, "✓")) : ye("", !0)
        ], 2),
        U("span", df, [
          U("span", ff, ee(d.label), 1),
          d.description ? (b(), C("span", pf, ee(d.description), 1)) : ye("", !0)
        ])
      ], 42, cf))), 128))
    ], 8, lf));
  }
}), mf = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], gf = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], vf = {
  key: 0,
  "aria-hidden": "true"
}, yf = /* @__PURE__ */ Te({
  __name: "ChoicePills",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, s = n.field.type === "select-many", r = Ti(
      () => n.field.options,
      () => n.selectedIds
    );
    function a(c) {
      return n.selectedIds.includes(c);
    }
    function o(c) {
      return n.unavailableIds.includes(c);
    }
    function l(c, u) {
      if (s)
        return;
      const d = r.onKeydown(c, u);
      d && !o(d) && i("pick", d);
    }
    return (c, u) => (b(), C("div", {
      class: "pills",
      role: s ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (b(!0), C(ae, null, De(e.field.options, (d, p) => (b(), C("button", {
        key: d.id,
        type: "button",
        class: Ke(["pill", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice pill choice-selected" : "choice pill",
        role: s ? void 0 : "radio",
        "aria-checked": s ? void 0 : a(d.id),
        "aria-pressed": s ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: s ? 0 : X(r).tabindexFor(d, p),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, p)
      }, [
        As(ee(d.label) + " ", 1),
        a(d.id) ? (b(), C("span", vf, "✓")) : ye("", !0)
      ], 42, gf))), 128))
    ], 8, mf));
  }
}), bf = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], _f = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], xf = {
  key: 0,
  class: "swatch-check",
  "aria-hidden": "true"
}, wf = {
  key: 0,
  class: "swatch-selected-label",
  "aria-hidden": "true"
}, kf = /* @__PURE__ */ Te({
  __name: "ChoiceSwatches",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, s = n.field.type === "select-many", r = Ti(
      () => n.field.options,
      () => n.selectedIds
    );
    function a(u) {
      return n.selectedIds.includes(u);
    }
    function o(u) {
      return n.unavailableIds.includes(u);
    }
    const l = de(
      () => n.field.options.filter((u) => n.selectedIds.includes(u.id)).map((u) => u.label).join(", ")
    );
    function c(u, d) {
      if (s)
        return;
      const p = r.onKeydown(u, d);
      p && !o(p) && i("pick", p);
    }
    return (u, d) => (b(), C("div", null, [
      U("div", {
        class: "swatches",
        role: s ? "group" : "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0
      }, [
        (b(!0), C(ae, null, De(e.field.options, (p, m) => (b(), C("button", {
          key: p.id,
          type: "button",
          class: Ke(["swatch", { active: a(p.id), unavailable: o(p.id) }]),
          part: a(p.id) ? "choice swatch choice-selected" : "choice swatch",
          style: yi({ background: p.color }),
          role: s ? void 0 : "radio",
          "aria-checked": s ? void 0 : a(p.id),
          "aria-pressed": s ? a(p.id) : void 0,
          "aria-label": p.label,
          "aria-disabled": o(p.id) || void 0,
          tabindex: s ? 0 : X(r).tabindexFor(p, m),
          onClick: (S) => !o(p.id) && i("pick", p.id),
          onKeydown: (S) => c(S, m)
        }, [
          a(p.id) ? (b(), C("span", xf, "✓")) : ye("", !0)
        ], 46, _f))), 128))
      ], 8, bf),
      l.value ? (b(), C("p", wf, ee(l.value), 1)) : ye("", !0)
    ]));
  }
}), Ur = {
  cards: Lr,
  grid: Lr,
  swatches: kf,
  pills: yf,
  dropdown: of,
  list: hf
}, wo = Symbol("print-configurator");
function Sf(e) {
  if (!e.jobId)
    return;
  const t = e.facts, n = t == null ? void 0 : t.aggregate, i = e.files[0], s = [];
  for (const a of e.files)
    a.outcome === "fail" ? s.push({
      code: "filecheck-rejected",
      severity: "error",
      message: a.name
    }) : a.outcome === "warn" && s.push({
      code: "filecheck-warning",
      severity: "warning",
      message: a.name
    });
  const r = {
    version: "1.0",
    fileId: e.jobId,
    source: "filecheck",
    status: e.canProceed ? "ready" : e.status === "rejected" ? "failed" : "pending",
    fileName: i == null ? void 0 : i.name,
    pages: (n == null ? void 0 : n.pageCount) || void 0,
    colorPages: (n == null ? void 0 : n.colorPageCount) ?? void 0,
    monoPages: (n == null ? void 0 : n.monoPageCount) ?? void 0,
    canvas: (n == null ? void 0 : n.width) != null && (n == null ? void 0 : n.height) != null ? { w: n.width, h: n.height, bleed: 0, unit: "mm" } : void 0,
    issues: s,
    raw: {
      filecheck: {
        jobId: e.jobId,
        workflowId: e.workflowId,
        status: e.status,
        canProceed: e.canProceed,
        files: e.files,
        facts: e.facts
      }
    }
  };
  return Rs.parse(r);
}
const Cf = ["data-field-id", "data-type"], Tf = ["id"], Af = {
  key: 0,
  class: "req",
  "aria-hidden": "true"
}, $f = {
  key: 1,
  class: "help",
  part: "field-help"
}, If = ["id"], Ef = /* @__PURE__ */ Te({
  __name: "FieldShell",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e, { expose: t }) {
    return t({ fieldId: e.field.id }), (i, s) => (b(), C("div", {
      class: "field",
      part: "field",
      "data-field-id": e.field.id,
      "data-type": e.field.type
    }, [
      e.field.label ? (b(), C("span", {
        key: 0,
        id: `pc-label-${e.field.id}`,
        class: "field-label",
        part: "field-label"
      }, [
        As(ee(e.field.label) + " ", 1),
        e.field.required ? (b(), C("span", Af, "*")) : ye("", !0)
      ], 8, Tf)) : ye("", !0),
      e.field.helpText ? (b(), C("p", $f, ee(e.field.helpText), 1)) : ye("", !0),
      Ml(i.$slots, "default"),
      e.error ? (b(), C("p", {
        key: 2,
        id: `pc-error-${e.field.id}`,
        class: "field-error",
        part: "field-error",
        role: "status"
      }, ee(e.error), 9, If)) : ye("", !0)
    ], 8, Cf));
  }
}), Of = ["aria-labelledby"], Pf = ["part", "aria-checked", "onClick"], Nf = ["value", "aria-label"], Rf = ["value"], Mf = ["value", "min", "max", "step", "aria-label", "aria-describedby"], jf = {
  key: 3,
  class: "stepper",
  part: "stepper"
}, Ff = ["aria-label", "disabled"], Df = ["value", "min", "max", "step", "aria-label", "aria-describedby"], Vf = ["aria-label", "disabled"], zf = /* @__PURE__ */ Te({
  __name: "QuantityInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, s = de(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue
    ), r = de(() => n.field.label ?? "Quantity");
    function a(d) {
      let p = Math.round(d);
      return Number.isNaN(p) && (p = n.field.defaultValue), p < n.field.min && (p = n.field.min), n.field.max !== void 0 && p > n.field.max && (p = n.field.max), p;
    }
    function o(d) {
      i("select", a(d)), i("touch");
    }
    function l(d) {
      o(s.value + d * n.field.step);
    }
    function c(d) {
      const p = d.target.value;
      p !== "" && o(Number(p));
    }
    function u(d) {
      const p = d.target;
      o(p.value === "" ? n.field.defaultValue : Number(p.value)), p.value = String(s.value);
    }
    return (d, p) => {
      var m, S;
      return e.field.display === "pills" && ((m = e.field.presets) != null && m.length) ? (b(), C("div", {
        key: 0,
        class: "pills",
        role: "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0
      }, [
        (b(!0), C(ae, null, De(e.field.presets, (k) => (b(), C("button", {
          key: k,
          type: "button",
          class: Ke(["pill", { active: s.value === k }]),
          part: s.value === k ? "choice pill choice-selected" : "choice pill",
          role: "radio",
          "aria-checked": s.value === k,
          onClick: (G) => o(k)
        }, ee(k), 11, Pf))), 128))
      ], 8, Of)) : e.field.display === "dropdown" && ((S = e.field.presets) != null && S.length) ? (b(), C("select", {
        key: 1,
        class: "dropdown",
        part: "dropdown",
        value: String(s.value),
        "aria-label": r.value,
        onChange: p[0] || (p[0] = (k) => o(Number(k.target.value)))
      }, [
        (b(!0), C(ae, null, De(e.field.presets, (k) => (b(), C("option", {
          key: k,
          value: String(k)
        }, ee(k), 9, Rf))), 128))
      ], 40, Nf)) : e.field.display === "input" ? (b(), C("input", {
        key: 2,
        class: "number-input",
        part: "stepper-input",
        type: "number",
        inputmode: "numeric",
        value: s.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": r.value,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        onInput: c,
        onBlur: u
      }, null, 40, Mf)) : (b(), C("div", jf, [
        U("button", {
          type: "button",
          part: "stepper-decrement",
          "aria-label": `Decrease ${r.value.toLowerCase()}`,
          disabled: s.value <= e.field.min,
          onClick: p[1] || (p[1] = (k) => l(-1))
        }, " − ", 8, Ff),
        U("input", {
          class: "stepper-value",
          part: "stepper-input",
          type: "number",
          inputmode: "numeric",
          value: s.value,
          min: e.field.min,
          max: e.field.max,
          step: e.field.step,
          "aria-label": r.value,
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          onInput: c,
          onBlur: u
        }, null, 40, Df),
        U("button", {
          type: "button",
          part: "stepper-increment",
          "aria-label": `Increase ${r.value.toLowerCase()}`,
          disabled: e.field.max !== void 0 && s.value >= e.field.max,
          onClick: p[2] || (p[2] = (k) => l(1))
        }, " + ", 8, Vf)
      ]));
    };
  }
}), Lf = {
  key: 0,
  class: "slider-row"
}, Uf = ["value", "min", "max", "step", "aria-label"], Zf = {
  class: "slider-value",
  "aria-hidden": "true"
}, Hf = {
  key: 1,
  class: "stepper",
  part: "stepper"
}, qf = ["aria-label", "disabled"], Bf = ["value", "min", "max", "step", "aria-label"], Wf = ["aria-label", "disabled"], Kf = ["value", "min", "max", "step", "aria-label", "aria-describedby", "aria-invalid"], Gf = /* @__PURE__ */ Te({
  __name: "NumberInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, s = de(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue ?? 0
    ), r = de(() => n.field.label ?? n.field.id);
    function a(o) {
      Number.isNaN(o) || (i("select", o), i("touch"));
    }
    return (o, l) => e.field.display === "slider" ? (b(), C("div", Lf, [
      U("input", {
        type: "range",
        class: "slider",
        part: "stepper-input",
        value: s.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": r.value,
        onInput: l[0] || (l[0] = (c) => a(Number(c.target.value)))
      }, null, 40, Uf),
      U("span", Zf, ee(s.value), 1)
    ])) : e.field.display === "stepper" ? (b(), C("div", Hf, [
      U("button", {
        type: "button",
        part: "stepper-decrement",
        "aria-label": `Decrease ${r.value.toLowerCase()}`,
        disabled: e.field.min !== void 0 && s.value <= e.field.min,
        onClick: l[1] || (l[1] = (c) => a(s.value - (e.field.step ?? 1)))
      }, " − ", 8, qf),
      U("input", {
        class: "stepper-value",
        part: "stepper-input",
        type: "number",
        value: s.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": r.value,
        onInput: l[2] || (l[2] = (c) => a(Number(c.target.value))),
        onBlur: l[3] || (l[3] = (c) => i("touch"))
      }, null, 40, Bf),
      U("button", {
        type: "button",
        part: "stepper-increment",
        "aria-label": `Increase ${r.value.toLowerCase()}`,
        disabled: e.field.max !== void 0 && s.value >= e.field.max,
        onClick: l[4] || (l[4] = (c) => a(s.value + (e.field.step ?? 1)))
      }, " + ", 8, Wf)
    ])) : (b(), C("input", {
      key: 2,
      class: "number-input",
      part: "stepper-input",
      type: "number",
      value: typeof e.value == "number" ? e.value : e.field.defaultValue,
      min: e.field.min,
      max: e.field.max,
      step: e.field.step,
      "aria-label": r.value,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: l[5] || (l[5] = (c) => a(Number(c.target.value))),
      onBlur: l[6] || (l[6] = (c) => i("touch"))
    }, null, 40, Kf));
  }
}), Yf = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], Qf = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], Jf = /* @__PURE__ */ Te({
  __name: "TextInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t;
    function s(a) {
      i("select", a.target.value);
    }
    const r = typeof n.value == "string" ? n.value : "";
    return (a, o) => e.field.display === "textarea" ? (b(), C("textarea", {
      key: 0,
      class: "text-input textarea",
      part: "text-input",
      value: typeof e.value == "string" ? e.value : X(r),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      rows: "3",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: s,
      onBlur: o[0] || (o[0] = (l) => i("touch"))
    }, null, 40, Yf)) : (b(), C("input", {
      key: 1,
      class: "text-input",
      part: "text-input",
      type: "text",
      value: typeof e.value == "string" ? e.value : X(r),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: s,
      onBlur: o[1] || (o[1] = (l) => i("touch"))
    }, null, 40, Qf));
  }
}), Xf = {
  class: "dimensions",
  part: "dimensions"
}, ep = { class: "dim-input" }, tp = ["value", "aria-describedby", "aria-invalid"], np = { class: "dim-input" }, ip = ["value", "aria-describedby", "aria-invalid"], sp = ["value"], rp = ["value"], ap = {
  key: 1,
  class: "dim-unit-static"
}, op = /* @__PURE__ */ Te({
  __name: "DimensionsInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, s = de(
      () => Kt(n.value) ? n.value : { w: NaN, h: NaN, unit: n.field.defaultUnit }
    );
    function r(o) {
      const l = { ...s.value, ...o };
      l.w > 0 && l.h > 0 && i("select", { w: l.w, h: l.h, unit: l.unit }), i("touch");
    }
    function a(o) {
      return Number(o.target.value);
    }
    return (o, l) => (b(), C("div", Xf, [
      U("label", ep, [
        l[3] || (l[3] = U("span", { class: "dim-label" }, "Width", -1)),
        U("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(s.value.w) ? "" : s.value.w,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: l[0] || (l[0] = (c) => r({ w: a(c) }))
        }, null, 40, tp)
      ]),
      l[5] || (l[5] = U("span", {
        class: "dim-times",
        "aria-hidden": "true"
      }, "×", -1)),
      U("label", np, [
        l[4] || (l[4] = U("span", { class: "dim-label" }, "Height", -1)),
        U("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(s.value.h) ? "" : s.value.h,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: l[1] || (l[1] = (c) => r({ h: a(c) }))
        }, null, 40, ip)
      ]),
      e.field.units.length > 1 ? (b(), C("select", {
        key: 0,
        class: "dropdown dim-unit",
        part: "dropdown",
        value: s.value.unit,
        "aria-label": "Unit",
        onChange: l[2] || (l[2] = (c) => r({ unit: c.target.value }))
      }, [
        (b(!0), C(ae, null, De(e.field.units, (c) => (b(), C("option", {
          key: c,
          value: c
        }, ee(c), 9, rp))), 128))
      ], 40, sp)) : (b(), C("span", ap, ee(e.field.defaultUnit), 1))
    ]));
  }
}), lp = ["aria-busy"], cp = ["id", "accept", "aria-labelledby", "aria-describedby", "aria-invalid"], up = ["for"], dp = {
  key: 0,
  class: "upload-status"
}, fp = { class: "upload-filename" }, pp = { class: "upload-hint" }, hp = /* @__PURE__ */ Te({
  __name: "FileUpload",
  props: {
    field: { type: null },
    file: { type: null },
    analyzing: { type: Boolean },
    error: { type: String }
  },
  emits: ["file", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, s = /* @__PURE__ */ Le(!1), r = de(() => n.field.accept.join(","));
    function a(l) {
      var d;
      const u = (d = l.target.files) == null ? void 0 : d[0];
      u && i("file", n.field, u), i("touch");
    }
    function o(l) {
      var u, d;
      s.value = !1;
      const c = (d = (u = l.dataTransfer) == null ? void 0 : u.files) == null ? void 0 : d[0];
      c && i("file", n.field, c), i("touch");
    }
    return (l, c) => (b(), C("div", {
      class: Ke(["upload", { dragging: s.value, done: !!e.file }]),
      part: "upload",
      "aria-busy": e.analyzing || void 0,
      onDragover: c[0] || (c[0] = _r((u) => s.value = !0, ["prevent"])),
      onDragleave: c[1] || (c[1] = (u) => s.value = !1),
      onDrop: _r(o, ["prevent"])
    }, [
      U("input", {
        id: `pc-control-${e.field.id}`,
        class: "upload-input",
        part: "upload-input",
        type: "file",
        accept: r.value,
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0,
        onChange: a
      }, null, 40, cp),
      U("label", {
        class: "upload-zone",
        for: `pc-control-${e.field.id}`
      }, [
        e.analyzing ? (b(), C("span", dp, "Analyzing…")) : e.file ? (b(), C(ae, { key: 1 }, [
          U("span", fp, ee(e.file.fileName ?? e.file.fileId), 1),
          c[2] || (c[2] = U("span", { class: "upload-hint" }, "Click or drop to replace", -1))
        ], 64)) : (b(), C(ae, { key: 2 }, [
          c[3] || (c[3] = U("span", { class: "upload-title" }, "Drop your file here or click to browse", -1)),
          U("span", pp, ee(r.value), 1)
        ], 64))
      ], 8, up)
    ], 42, lp));
  }
}), mp = "https://cdn.filecheck.io/element/v1/filecheck.js", gp = 1e4;
let gn = null;
function vp(e = mp) {
  return typeof window < "u" && window.Filecheck ? Promise.resolve(window.Filecheck) : gn || (gn = new Promise((t, n) => {
    const i = (a) => {
      gn = null, s.remove(), n(new Error(a));
    }, s = document.createElement("script");
    s.src = e, s.async = !0;
    const r = setTimeout(
      () => i("Filecheck SDK load timed out."),
      gp
    );
    s.addEventListener("load", () => {
      clearTimeout(r), window.Filecheck ? t(window.Filecheck) : i("Filecheck SDK loaded but window.Filecheck is missing.");
    }), s.addEventListener("error", () => {
      clearTimeout(r), i("Filecheck SDK failed to load.");
    }), document.head.appendChild(s);
  }), gn);
}
const yp = {
  class: "fc-upload",
  part: "upload"
}, bp = {
  key: 0,
  class: "fc-panel fc-unconfigured"
}, _p = {
  key: 1,
  class: "fc-panel fc-error",
  role: "alert"
}, xp = { class: "fc-panel-hint" }, wp = {
  key: 0,
  class: "fc-loading"
}, kp = {
  key: 1,
  class: "field-error",
  role: "status"
}, Sp = /* @__PURE__ */ Te({
  __name: "FilecheckUpload",
  props: {
    field: { type: null },
    provider: { type: null }
  },
  emits: ["metadata", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, s = /* @__PURE__ */ Le(null), r = /* @__PURE__ */ Le(
      n.provider.publishableKey ? "loading" : "unconfigured"
    ), a = /* @__PURE__ */ Le("");
    let o = null, l = null;
    async function c() {
      var S;
      const p = n.provider.publishableKey, m = (S = n.field.filecheck) == null ? void 0 : S.workflowId;
      if (!p || !m) {
        r.value = "unconfigured";
        return;
      }
      r.value = "loading", a.value = "";
      try {
        const k = await vp(n.provider.scriptUrl);
        if (!s.value)
          return;
        o = k(p, {
          agentId: n.provider.agentId,
          iframeSrc: n.provider.iframeSrc
        }).elements.create("intake", {
          workflowId: m,
          preview: n.provider.preview ?? !1
        }), l = o.on("status", (V) => {
          i("metadata", V), i("touch");
        }), o.on("error", (V) => {
          const I = V;
          a.value = (I == null ? void 0 : I.message) ?? "Filecheck reported an error.";
        }), o.mount(s.value), r.value = "active";
      } catch (k) {
        r.value = "error", a.value = k instanceof Error ? k.message : "Filecheck failed to load.";
      }
    }
    function u() {
      l == null || l(), l = null;
      try {
        o == null || o.unmount();
      } catch {
      }
      o = null;
    }
    function d() {
      u(), c();
    }
    return ks(() => {
      c();
    }), Zt(
      () => {
        var p;
        return [
          n.provider.publishableKey,
          n.provider.scriptUrl,
          n.provider.iframeSrc,
          n.provider.agentId,
          (p = n.field.filecheck) == null ? void 0 : p.workflowId
        ];
      },
      () => {
        u(), c();
      }
    ), Sa(u), (p, m) => (b(), C("div", yp, [
      r.value === "unconfigured" ? (b(), C("div", bp, [...m[0] || (m[0] = [
        U("span", { class: "fc-panel-title" }, "Filecheck upload", -1),
        U("span", { class: "fc-panel-hint" }, " Add your Filecheck publishable key in the store settings (or preview settings) to activate validated uploads for this field. ", -1)
      ])])) : r.value === "error" ? (b(), C("div", _p, [
        m[1] || (m[1] = U("span", { class: "fc-panel-title" }, "Upload is unavailable", -1)),
        U("span", xp, ee(a.value), 1),
        U("button", {
          type: "button",
          class: "fc-retry",
          onClick: d
        }, "Retry")
      ])) : (b(), C(ae, { key: 2 }, [
        r.value === "loading" ? (b(), C("p", wp, "Loading secure upload…")) : ye("", !0),
        U("div", {
          ref_key: "slot",
          ref: s,
          class: "fc-slot"
        }, null, 512),
        a.value ? (b(), C("p", kp, ee(a.value), 1)) : ye("", !0)
      ], 64))
    ]));
  }
}), Cp = {
  key: 0,
  class: "recap",
  part: "summary-recap"
}, Tp = {
  key: 1,
  class: "recap-empty"
}, Ap = /* @__PURE__ */ Te({
  __name: "SummaryPanel",
  props: {
    sections: { type: Array },
    selections: { type: Object },
    file: { type: null }
  },
  setup(e) {
    const t = e, n = de(
      () => vo(t.sections, t.selections, t.file)
    );
    return (i, s) => n.value.length ? (b(), C("dl", Cp, [
      (b(!0), C(ae, null, De(n.value, (r) => (b(), C("div", {
        key: r.fieldId,
        class: "recap-row"
      }, [
        U("dt", null, ee(r.label), 1),
        U("dd", null, ee(r.value), 1)
      ]))), 128))
    ])) : (b(), C("p", Tp, "Your choices will appear here."));
  }
}), $p = {
  key: 0,
  class: "info-note",
  part: "field-help"
}, Ip = /* @__PURE__ */ Te({
  __name: "InfoBlock",
  props: {
    field: { type: null }
  },
  setup(e) {
    return (t, n) => e.field.body ? (b(), C("p", $p, ee(e.field.body), 1)) : ye("", !0);
  }
}), ko = /* @__PURE__ */ Te({
  __name: "FieldHost",
  props: {
    field: { type: null }
  },
  setup(e) {
    const t = e, n = kn(wo);
    if (!n)
      throw new Error("FieldHost must be rendered inside <print-configurator>.");
    const { cfg: i, validation: s } = n, r = de(() => i.selections[t.field.id]), a = de(() => s.errorFor(t.field.id)), o = de(() => {
      const p = r.value;
      return Array.isArray(p) ? p : typeof p == "string" && p !== "" ? [p] : [];
    }), l = de(() => {
      if (!mt(t.field) || !i.schema.value)
        return [];
      const p = i.schema.value;
      return t.field.options.filter(
        (m) => !Nd(p, i.selections, t.field.id, m.id)
      ).map((m) => m.id);
    });
    function c(p) {
      t.field.type === "select-many" ? i.toggle(t.field, p) : i.select(t.field.id, p), s.touch(t.field.id);
    }
    const u = de(
      () => {
        var p, m;
        return t.field.type === "file" && t.field.providerId === "filecheck" && !!((p = t.field.filecheck) != null && p.workflowId) && ((m = i.provider) == null ? void 0 : m.mode) === "element";
      }
    );
    function d(p) {
      i.setFile(Sf(p)), p.canProceed && p.jobId ? i.select(t.field.id, p.jobId) : i.select(t.field.id, "");
    }
    return (p, m) => (b(), Ee(Ef, {
      field: e.field,
      error: a.value
    }, {
      default: va(() => [
        e.field.type === "select-one" || e.field.type === "select-many" ? (b(), Ee(Nl(X(Ur)[e.field.display] ?? X(Ur).pills), {
          key: 0,
          field: e.field,
          "selected-ids": o.value,
          "unavailable-ids": l.value,
          error: a.value,
          onPick: c
        }, null, 40, ["field", "selected-ids", "unavailable-ids", "error"])) : e.field.type === "quantity" ? (b(), Ee(zf, {
          key: 1,
          field: e.field,
          value: r.value,
          error: a.value,
          onSelect: m[0] || (m[0] = (S) => X(i).select(e.field.id, S)),
          onTouch: m[1] || (m[1] = (S) => X(s).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "number" ? (b(), Ee(Gf, {
          key: 2,
          field: e.field,
          value: r.value,
          error: a.value,
          onSelect: m[2] || (m[2] = (S) => X(i).select(e.field.id, S)),
          onTouch: m[3] || (m[3] = (S) => X(s).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "text" ? (b(), Ee(Jf, {
          key: 3,
          field: e.field,
          value: r.value,
          error: a.value,
          onSelect: m[4] || (m[4] = (S) => X(i).select(e.field.id, S)),
          onTouch: m[5] || (m[5] = (S) => X(s).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "dimensions" ? (b(), Ee(op, {
          key: 4,
          field: e.field,
          value: r.value,
          error: a.value,
          onSelect: m[6] || (m[6] = (S) => X(i).select(e.field.id, S)),
          onTouch: m[7] || (m[7] = (S) => X(s).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "file" && u.value && X(i).provider ? (b(), Ee(Sp, {
          key: 5,
          field: e.field,
          provider: X(i).provider,
          onMetadata: d,
          onTouch: m[8] || (m[8] = (S) => X(s).touch(e.field.id))
        }, null, 8, ["field", "provider"])) : e.field.type === "file" ? (b(), Ee(hp, {
          key: 6,
          field: e.field,
          file: X(i).file.value,
          analyzing: X(i).fileAnalyzing.value,
          error: a.value,
          onFile: m[9] || (m[9] = (S, k) => X(i).handleFile(S, k)),
          onTouch: m[10] || (m[10] = (S) => X(s).touch(e.field.id))
        }, null, 8, ["field", "file", "analyzing", "error"])) : e.field.type === "info" && e.field.display === "summary" ? (b(), Ee(Ap, {
          key: 7,
          sections: X(i).visibleSections.value,
          selections: X(i).selections,
          file: X(i).file.value
        }, null, 8, ["sections", "selections", "file"])) : e.field.type === "info" ? (b(), Ee(Ip, {
          key: 8,
          field: e.field
        }, null, 8, ["field"])) : ye("", !0)
      ]),
      _: 1
    }, 8, ["field", "error"]));
  }
}), Ep = {
  class: "section-title",
  part: "section-title"
}, Op = /* @__PURE__ */ Te({
  __name: "SectionStack",
  props: {
    sections: { type: Array }
  },
  setup(e) {
    return (t, n) => (b(!0), C(ae, null, De(e.sections, (i) => (b(), C("section", {
      key: i.section.id,
      class: "section",
      part: "section"
    }, [
      U("h3", Ep, ee(i.section.title), 1),
      (b(!0), C(ae, null, De(i.fields, (s) => (b(), Ee(ko, {
        key: s.id,
        field: s
      }, null, 8, ["field"]))), 128))
    ]))), 128));
  }
}), Pp = { class: "wizard" }, Np = {
  class: "wizard-nav",
  part: "wizard-nav"
}, Rp = ["part", "aria-current"], Mp = ["onClick"], jp = {
  class: "wizard-step-index",
  "aria-hidden": "true"
}, Fp = { class: "wizard-step-title" }, Dp = {
  key: 0,
  class: "section",
  part: "section"
}, Vp = { class: "wizard-actions" }, zp = /* @__PURE__ */ Te({
  __name: "SectionWizard",
  props: {
    sections: { type: Array },
    issues: { type: Array }
  },
  emits: ["blocked"],
  setup(e, { expose: t, emit: n }) {
    const i = e, s = n, r = /* @__PURE__ */ Le(0), a = /* @__PURE__ */ Le(null);
    Zt(
      () => i.sections.length,
      (S) => {
        r.value > S - 1 && (r.value = Math.max(0, S - 1));
      }
    );
    const o = de(() => i.sections[r.value]), l = de(() => r.value >= i.sections.length - 1);
    function c(S) {
      const k = i.sections[S];
      if (!k)
        return [];
      const G = new Set(k.fields.map((V) => V.id));
      return i.issues.filter((V) => G.has(V.fieldId));
    }
    function u(S) {
      return S === r.value ? "active" : S < r.value && c(S).length === 0 ? "done" : "todo";
    }
    async function d(S) {
      var k;
      r.value = Math.max(0, Math.min(S, i.sections.length - 1)), await xi(), (k = a.value) == null || k.focus();
    }
    function p() {
      const S = c(r.value);
      if (S.length > 0) {
        s("blocked", S);
        return;
      }
      d(r.value + 1);
    }
    function m() {
      d(r.value - 1);
    }
    return t({ goTo: d, current: r }), (S, k) => (b(), C("div", Pp, [
      U("ol", Np, [
        (b(!0), C(ae, null, De(e.sections, (G, V) => (b(), C("li", {
          key: G.section.id,
          class: Ke(["wizard-step", u(V)]),
          part: `wizard-step wizard-step-${u(V)}`,
          "aria-current": V === r.value ? "step" : void 0
        }, [
          U("button", {
            type: "button",
            class: "wizard-step-button",
            onClick: (I) => d(V)
          }, [
            U("span", jp, ee(u(V) === "done" ? "✓" : V + 1), 1),
            U("span", Fp, ee(G.section.title), 1)
          ], 8, Mp)
        ], 10, Rp))), 128))
      ]),
      o.value ? (b(), C("section", Dp, [
        U("h3", {
          ref_key: "heading",
          ref: a,
          class: "section-title",
          part: "section-title",
          tabindex: "-1"
        }, ee(o.value.section.title), 513),
        (b(!0), C(ae, null, De(o.value.fields, (G) => (b(), Ee(ko, {
          key: G.id,
          field: G
        }, null, 8, ["field"]))), 128))
      ])) : ye("", !0),
      U("div", Vp, [
        r.value > 0 ? (b(), C("button", {
          key: 0,
          type: "button",
          class: "wizard-back",
          part: "wizard-back",
          onClick: m
        }, " Back ")) : ye("", !0),
        l.value ? ye("", !0) : (b(), C("button", {
          key: 1,
          type: "button",
          class: "wizard-next",
          part: "wizard-next",
          onClick: p
        }, " Continue "))
      ])
    ]));
  }
}), Lp = {
  class: "summary",
  part: "summary"
}, Up = { class: "lines" }, Zp = {
  class: "total",
  part: "summary-total",
  "aria-live": "polite",
  "aria-atomic": "true"
}, Hp = { part: "price" }, qp = {
  key: 0,
  class: "unit-price"
}, Bp = {
  key: 1,
  class: "unavailable",
  role: "status"
}, Wp = ["disabled"], Kp = {
  class: "visually-hidden",
  role: "status"
}, Gp = /* @__PURE__ */ Te({
  __name: "PriceSummary",
  props: {
    price: { type: [Object, null] },
    locale: { type: String },
    holds: { type: Array },
    issueCount: { type: Number }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e, i = t;
    function s(a) {
      var l;
      const o = ((l = n.price) == null ? void 0 : l.currency) ?? "USD";
      try {
        return new Intl.NumberFormat(n.locale ?? "en", {
          style: "currency",
          currency: o
        }).format(a);
      } catch {
        return `${o} ${a.toFixed(2)}`;
      }
    }
    const r = de(
      () => {
        var a, o;
        return (((a = n.price) == null ? void 0 : a.quantity) ?? 1) > 1 && !((o = n.price) != null && o.unavailable);
      }
    );
    return (a, o) => {
      var l, c, u, d, p;
      return b(), C("aside", Lp, [
        o[2] || (o[2] = U("h3", { part: "summary-title" }, "Summary", -1)),
        U("ul", Up, [
          (b(!0), C(ae, null, De(((l = e.price) == null ? void 0 : l.lines) ?? [], (m, S) => (b(), C("li", {
            key: S,
            part: "summary-line"
          }, [
            U("span", null, ee(m.label), 1),
            U("span", null, ee(s(m.amount)), 1)
          ]))), 128))
        ]),
        U("div", Zp, [
          o[1] || (o[1] = U("span", null, "Total", -1)),
          U("strong", Hp, ee(s(((c = e.price) == null ? void 0 : c.total) ?? 0)), 1)
        ]),
        r.value ? (b(), C("p", qp, ee((u = e.price) == null ? void 0 : u.quantity) + " × " + ee(s(((d = e.price) == null ? void 0 : d.unitPrice) ?? 0)), 1)) : ye("", !0),
        (p = e.price) != null && p.unavailable ? (b(), C("p", Bp, " This combination is currently unavailable. ")) : ye("", !0),
        (b(!0), C(ae, null, De(e.holds.filter((m) => m.message), (m) => (b(), C("p", {
          key: m.key,
          class: "hold-message",
          part: "hold-message",
          role: "status"
        }, ee(m.message), 1))), 128)),
        U("button", {
          type: "button",
          class: "cta",
          part: "cta",
          disabled: e.holds.length > 0,
          onClick: o[0] || (o[0] = (m) => i("submit"))
        }, " Add to cart ", 8, Wp),
        U("span", Kp, ee(e.issueCount > 0 ? `${e.issueCount} options need attention` : ""), 1)
      ]);
    };
  }
}), Yp = {
  key: 0,
  class: "state"
}, Qp = {
  key: 1,
  class: "state error",
  role: "alert"
}, Jp = {
  key: 2,
  class: "layout"
}, Xp = { class: "main" }, eh = /* @__PURE__ */ Te({
  __name: "PrintConfigurator.ce",
  props: {
    productId: { type: String },
    configUrl: { type: String },
    uploadEndpoint: { type: String },
    turnstileUrl: { type: String },
    currency: { type: String },
    locale: { type: String },
    provider: { type: null },
    config: { type: null }
  },
  emits: ["submit", "invalid", "unconfigured"],
  setup(e, { expose: t, emit: n }) {
    const i = e, s = n;
    function r(I) {
      if (I)
        try {
          const z = typeof I == "string" ? JSON.parse(I) : I;
          return Td.parse(z);
        } catch {
          return;
        }
    }
    const a = qd({
      configUrl: i.configUrl,
      uploadEndpoint: i.uploadEndpoint,
      turnstileUrl: i.turnstileUrl,
      provider: r(i.provider),
      inlineConfig: i.config
    }), o = Gd(a.visibleFields, a.selections, a.price);
    ya(wo, { cfg: a, validation: o });
    const l = qc(), c = Wd(), u = Kd({ host: l, cfg: a, validation: o, holds: c }), d = /* @__PURE__ */ Le(null), p = /* @__PURE__ */ Le(null);
    ks(() => {
      (i.config || i.configUrl) && a.load().then(() => {
        a.unconfigured.value ? s("unconfigured", { productId: i.productId }) : a.schema.value && u.notifyReady();
      });
    }), Zt(
      () => i.config,
      (I, z) => {
        I && I !== z && (o.reset(), a.reload({
          inlineConfig: I,
          provider: r(i.provider)
        }).then(() => {
          a.schema.value && u.notifyReady();
        }));
      }
    );
    const m = de(() => {
      const I = {}, z = a.schema.value;
      if (!z)
        return I;
      for (const D of z.sections)
        for (const P of D.fields)
          if (I[P.id] = P.label ?? P.id, mt(P))
            for (const ce of P.options)
              I[`${P.id}:${ce.id}`] = ce.label;
      return I;
    });
    function S() {
      return !a.schema.value || !a.price.value ? null : {
        productId: a.schema.value.productId,
        selections: { ...a.selections },
        quantity: a.price.value.quantity,
        file: a.file.value,
        price: a.price.value,
        sku: a.price.value.sku,
        labels: m.value,
        display: vo(
          a.visibleSections.value,
          a.selections,
          a.file.value
        )
      };
    }
    function k(I) {
      var D, P;
      const z = (D = d.value) == null ? void 0 : D.querySelector(`[data-field-id="${I}"]`);
      z && (z.scrollIntoView({ behavior: "smooth", block: "center" }), (P = z.querySelector(
        "button, input, select, textarea, [tabindex]"
      )) == null || P.focus({ preventScroll: !0 }));
    }
    function G() {
      var D, P, ce;
      const I = S();
      if (!I)
        return;
      if (c.held.value) {
        s("invalid", {
          productId: I.productId,
          issues: [],
          holds: c.list.value
        });
        return;
      }
      const z = o.touchAll();
      if (z.length > 0 || (D = a.price.value) != null && D.unavailable) {
        const le = z[0];
        if (le) {
          const M = a.visibleSections.value.findIndex(
            (J) => J.fields.some((xe) => xe.id === le.fieldId)
          );
          ((P = a.schema.value) == null ? void 0 : P.layout) === "wizard" && M >= 0 && ((ce = p.value) == null || ce.goTo(M)), k(le.fieldId);
        }
        s("invalid", {
          productId: I.productId,
          issues: z
        });
        return;
      }
      s("submit", { ...I, valid: !0 });
    }
    function V(I) {
      for (const D of I)
        o.touch(D.fieldId);
      const z = I[0];
      z && k(z.fieldId);
    }
    return t(u.exposed), (I, z) => X(a).unconfigured.value ? ye("", !0) : (b(), C("div", {
      key: 0,
      ref_key: "root",
      ref: d,
      class: "configurator",
      part: "base"
    }, [
      X(a).loading.value ? (b(), C("p", Yp, "Loading options…")) : X(a).error.value ? (b(), C("p", Qp, ee(X(a).error.value), 1)) : X(a).schema.value ? (b(), C("div", Jp, [
        U("div", Xp, [
          X(a).schema.value.layout === "wizard" ? (b(), Ee(zp, {
            key: 0,
            ref_key: "wizard",
            ref: p,
            sections: X(a).visibleSections.value,
            issues: X(o).issues.value,
            onBlocked: V
          }, null, 8, ["sections", "issues"])) : (b(), Ee(Op, {
            key: 1,
            sections: X(a).visibleSections.value
          }, null, 8, ["sections"]))
        ]),
        We(Gp, {
          price: X(a).price.value,
          locale: i.locale,
          holds: X(c).list.value,
          "issue-count": X(o).issues.value.length,
          onSubmit: G
        }, null, 8, ["price", "locale", "holds", "issue-count"])
      ])) : ye("", !0)
    ], 512));
  }
}), th = ":host{--pc-color-accent: #1a1a1a;--pc-color-accent-contrast: #ffffff;--pc-color-accent-soft: #f6f6f4;--pc-color-surface: #ffffff;--pc-color-surface-alt: #fafafa;--pc-color-border: #e0e0dc;--pc-color-text: #1a1a1a;--pc-color-text-muted: #6b7280;--pc-color-danger: #c0392b;--pc-color-focus: var(--pc-color-accent);--pc-font-family: inherit;--pc-font-size: 1rem;--pc-label-weight: 600;--pc-radius-control: 8px;--pc-radius-card: 12px;--pc-space: 4px;--pc-shadow-card: none;--pc-cta-bg: var(--pc-color-accent);--pc-cta-color: var(--pc-color-accent-contrast);--pc-swatch-size: 44px;--pc-card-image-height: 90px;display:block;container:pc-root / inline-size;font-family:var(--pc-font-family);font-size:var(--pc-font-size);color:var(--pc-color-text)}", nh = "*{box-sizing:border-box}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.state{padding:calc(var(--pc-space) * 8);text-align:center;color:var(--pc-color-text-muted)}.state.error{color:var(--pc-color-danger)}.layout{display:grid;grid-template-columns:1fr 300px;gap:calc(var(--pc-space) * 6);align-items:start}.section{margin-bottom:calc(var(--pc-space) * 6);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);box-shadow:var(--pc-shadow-card)}.section-title{margin:0 0 calc(var(--pc-space) * 4);text-transform:uppercase;letter-spacing:.04em;font-size:.95em;color:var(--pc-color-text);outline:none}.field{margin-bottom:calc(var(--pc-space) * 5)}.field:last-child{margin-bottom:0}.field-label{display:block;font-weight:var(--pc-label-weight);margin-bottom:calc(var(--pc-space) * 2)}.req{color:var(--pc-color-danger)}.help{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.field-error{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--pc-color-focus);outline-offset:2px}.grid{display:grid;gap:calc(var(--pc-space) * 3);grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.grid.cards{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.card{position:relative;display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;transition:border-color .15s ease}.card:hover{border-color:var(--pc-color-accent-soft)}.card.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.card img{max-width:100%;height:var(--pc-card-image-height);object-fit:contain}.card-label{font-size:.9em}.card-description{font-size:.8em;color:var(--pc-color-text-muted)}.check{position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);display:grid;place-items:center;font-size:.8em}.swatches{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.swatch{width:var(--pc-swatch-size);height:var(--pc-swatch-size);border-radius:50%;border:3px solid transparent;cursor:pointer;display:grid;place-items:center}.swatch.active{border-color:var(--pc-color-accent);box-shadow:0 0 0 2px var(--pc-color-surface) inset}.swatch-check{color:#fff;text-shadow:0 0 3px rgb(0 0 0 / .8);font-size:.9em}.swatch-selected-label{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.pills{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.pill{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);cursor:pointer}.pill.active{background:var(--pc-color-accent);border-color:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.choice-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.choice-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);padding:calc(var(--pc-space) * 3);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;text-align:left;cursor:pointer}.choice-row.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.choice-indicator{flex:none;width:20px;height:20px;border:2px solid var(--pc-color-border);border-radius:50%;display:grid;place-items:center;font-size:.7em;color:var(--pc-color-accent-contrast)}.choice-indicator.multi{border-radius:4px}.choice-row.active .choice-indicator{background:var(--pc-color-accent);border-color:var(--pc-color-accent)}.choice-body{display:flex;flex-direction:column}.choice-title{font-weight:var(--pc-label-weight)}.choice-description{font-size:.85em;color:var(--pc-color-text-muted)}.card.unavailable,.pill.unavailable,.swatch.unavailable,.choice-row.unavailable{opacity:.4;cursor:not-allowed;text-decoration:line-through}.dropdown{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.stepper{display:inline-flex;align-items:stretch;border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);overflow:hidden}.stepper button{width:40px;border:none;background:var(--pc-color-surface-alt);color:var(--pc-color-text);font-size:1.2em;cursor:pointer}.stepper button:disabled{opacity:.4;cursor:not-allowed}.stepper-value{width:4.5rem;border:none;text-align:center;font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);background:var(--pc-color-surface);-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.stepper-value::-webkit-outer-spin-button,.stepper-value::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.number-input,.text-input{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.textarea{width:100%;resize:vertical}.slider-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3)}.slider{flex:1;accent-color:var(--pc-color-accent)}.slider-value{min-width:3rem;text-align:right;font-weight:var(--pc-label-weight)}.dimensions{display:flex;align-items:flex-end;gap:calc(var(--pc-space) * 2);flex-wrap:wrap}.dim-input{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1)}.dim-label{font-size:.8em;color:var(--pc-color-text-muted)}.dim-input input{width:6rem;padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);font:inherit;color:var(--pc-color-text);background:var(--pc-color-surface)}.dim-times{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.dim-unit{min-width:5rem}.dim-unit-static{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.upload-input{position:absolute;width:1px;height:1px;opacity:0;overflow:hidden}.upload-zone{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 6);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);cursor:pointer;text-align:center}.upload.dragging .upload-zone{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.upload.done .upload-zone{border-style:solid;border-color:var(--pc-color-accent)}.upload-title{font-weight:var(--pc-label-weight)}.upload-hint{font-size:.8em;color:var(--pc-color-text-muted)}.upload-filename{font-weight:var(--pc-label-weight);color:var(--pc-color-accent);word-break:break-all}.upload-status{color:var(--pc-color-accent);font-weight:var(--pc-label-weight)}.fc-slot{min-height:40px}.fc-loading{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.fc-panel{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);text-align:center;align-items:center}.fc-panel.fc-error{border-color:var(--pc-color-danger)}.fc-panel-title{font-weight:var(--pc-label-weight)}.fc-panel-hint{font-size:.85em;color:var(--pc-color-text-muted)}.fc-retry{margin-top:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.recap{margin:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.recap-row{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 4);font-size:.9em}.recap-row dt{color:var(--pc-color-text-muted)}.recap-row dd{margin:0;text-align:right}.recap-empty,.info-note{margin:0;font-size:.9em;color:var(--pc-color-text-muted)}.summary{position:sticky;top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt)}.summary h3{margin:0 0 calc(var(--pc-space) * 4)}.lines{list-style:none;margin:0 0 calc(var(--pc-space) * 4);padding:0}.lines li{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0;color:var(--pc-color-text-muted)}.total{display:flex;justify-content:space-between;padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border);font-size:1.1em}.unit-price{margin:calc(var(--pc-space) * 1) 0 0;text-align:right;font-size:.85em;color:var(--pc-color-text-muted)}.unavailable{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.hold-message{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.cta{width:100%;margin-top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 3.5);border:none;border-radius:var(--pc-radius-control);background:var(--pc-cta-bg);color:var(--pc-cta-color);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.cta:disabled{opacity:.5;cursor:not-allowed}.wizard-nav{list-style:none;display:flex;gap:calc(var(--pc-space) * 2);margin:0 0 calc(var(--pc-space) * 5);padding:0;flex-wrap:wrap}.wizard-step-button{display:flex;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:none;border-radius:var(--pc-radius-control);background:transparent;font:inherit;color:var(--pc-color-text-muted);cursor:pointer}.wizard-step.active .wizard-step-button{background:var(--pc-color-accent-soft);color:var(--pc-color-text);font-weight:var(--pc-label-weight)}.wizard-step-index{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--pc-color-border);color:var(--pc-color-text);font-size:.75em}.wizard-step.active .wizard-step-index,.wizard-step.done .wizard-step-index{background:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.wizard-actions{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 3)}.wizard-back,.wizard-next{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 6);border-radius:var(--pc-radius-control);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.wizard-back{border:2px solid var(--pc-color-border);background:var(--pc-color-surface);color:var(--pc-color-text)}.wizard-next{border:none;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);margin-left:auto}@container pc-root (max-width: 640px){.layout{grid-template-columns:1fr}.summary{position:sticky;bottom:0;top:auto;z-index:2;border-radius:var(--pc-radius-card) var(--pc-radius-card) 0 0;box-shadow:0 -4px 12px #0000000f}}", ih = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, sh = /* @__PURE__ */ ih(eh, [["styles", [th, nh]]]), rh = /* @__PURE__ */ Zc(sh);
function ah(e = "print-configurator") {
  typeof customElements < "u" && !customElements.get(e) && customElements.define(e, rh);
}
ah();
export {
  Vr as PAGE_API_VERSION,
  rh as PrintConfiguratorElement,
  ah as registerPrintConfigurator
};
