var Ro = Object.defineProperty;
var Mo = (e, t, n) => t in e ? Ro(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Br = (e, t, n) => Mo(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function hr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _e = {}, rn = [], gt = () => {
}, Ys = () => !1, hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), mi = (e) => e.startsWith("onUpdate:"), Se = Object.assign, mr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Fo = Object.prototype.hasOwnProperty, de = (e, t) => Fo.call(e, t), Y = Array.isArray, sn = (e) => zn(e) === "[object Map]", Qs = (e) => zn(e) === "[object Set]", qr = (e) => zn(e) === "[object Date]", J = (e) => typeof e == "function", we = (e) => typeof e == "string", nt = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", Js = (e) => (ge(e) || J(e)) && J(e.then) && J(e.catch), Xs = Object.prototype.toString, zn = (e) => Xs.call(e), jo = (e) => zn(e).slice(8, -1), gi = (e) => zn(e) === "[object Object]", gr = (e) => we(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tn = /* @__PURE__ */ hr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Do = /-\w/g, Ie = vi(
  (e) => e.replace(Do, (t) => t.slice(1).toUpperCase())
), Vo = /\B([A-Z])/g, Ke = vi(
  (e) => e.replace(Vo, "-$1").toLowerCase()
), yi = vi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Oi = vi(
  (e) => e ? `on${yi(e)}` : ""
), mt = (e, t) => !Object.is(e, t), Pi = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ea = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, zo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Wr = (e) => {
  const t = we(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Kr;
const bi = () => Kr || (Kr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _i(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = we(i) ? Ho(i) : _i(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (we(e) || ge(e))
    return e;
}
const Lo = /;(?![^(]*\))/g, Uo = /:([^]+)/, Zo = /\/\*[^]*?\*\//g;
function Ho(e) {
  const t = {};
  return e.replace(Zo, "").split(Lo).forEach((n) => {
    if (n) {
      const i = n.split(Uo);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Qe(e) {
  let t = "";
  if (we(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const i = Qe(e[n]);
      i && (t += i + " ");
    }
  else if (ge(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Bo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qo = /* @__PURE__ */ hr(Bo);
function ta(e) {
  return !!e || e === "";
}
function Wo(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = vr(e[i], t[i]);
  return n;
}
function vr(e, t) {
  if (e === t) return !0;
  let n = qr(e), i = qr(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = nt(e), i = nt(t), n || i)
    return e === t;
  if (n = Y(e), i = Y(t), n || i)
    return n && i ? Wo(e, t) : !1;
  if (n = ge(e), i = ge(t), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !vr(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const na = (e) => !!(e && e.__v_isRef === !0), Q = (e) => we(e) ? e : e == null ? "" : Y(e) || ge(e) && (e.toString === Xs || !J(e.toString)) ? na(e) ? Q(e.value) : JSON.stringify(e, ia, 2) : String(e), ia = (e, t) => na(t) ? ia(e, t.value) : sn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[Ni(i, s) + " =>"] = r, n),
    {}
  )
} : Qs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ni(n))
} : nt(t) ? Ni(t) : ge(t) && !Y(t) && !gi(t) ? String(t) : t, Ni = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Pe;
class Ko {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Pe && (Pe.active ? (this.parent = Pe, this.index = (Pe.scopes || (Pe.scopes = [])).push(
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
      const n = Pe;
      try {
        return Pe = this, t();
      } finally {
        Pe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Pe, Pe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Pe === this)
        Pe = this.prevScope;
      else {
        let t = Pe;
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Go() {
  return Pe;
}
let be;
const Ri = /* @__PURE__ */ new WeakSet();
class ra {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Pe && (Pe.active ? Pe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ri.has(this) && (Ri.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || aa(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Gr(this), oa(this);
    const t = be, n = tt;
    be = this, tt = !0;
    try {
      return this.fn();
    } finally {
      la(this), be = t, tt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        _r(t);
      this.deps = this.depsTail = void 0, Gr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ri.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Hi(this) && this.run();
  }
  get dirty() {
    return Hi(this);
  }
}
let sa = 0, An, $n;
function aa(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $n, $n = e;
    return;
  }
  e.next = An, An = e;
}
function yr() {
  sa++;
}
function br() {
  if (--sa > 0)
    return;
  if ($n) {
    let t = $n;
    for ($n = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; An; ) {
    let t = An;
    for (An = void 0; t; ) {
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
function oa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function la(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const r = i.prevDep;
    i.version === -1 ? (i === n && (n = r), _r(i), Yo(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r;
  }
  e.deps = t, e.depsTail = n;
}
function Hi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ca(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ca(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Pn) || (e.globalVersion = Pn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Hi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = be, i = tt;
  be = e, tt = !0;
  try {
    oa(e);
    const r = e.fn(e._value);
    (t.version === 0 || mt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    be = n, tt = i, la(e), e.flags &= -3;
  }
}
function _r(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: r } = e;
  if (i && (i.nextSub = r, e.prevSub = void 0), r && (r.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      _r(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Yo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let tt = !0;
const ua = [];
function Tt() {
  ua.push(tt), tt = !1;
}
function At() {
  const e = ua.pop();
  tt = e === void 0 ? !0 : e;
}
function Gr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = be;
    be = void 0;
    try {
      t();
    } finally {
      be = n;
    }
  }
}
let Pn = 0;
class Qo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class xr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!be || !tt || be === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== be)
      n = this.activeLink = new Qo(be, this), be.deps ? (n.prevDep = be.depsTail, be.depsTail.nextDep = n, be.depsTail = n) : be.deps = be.depsTail = n, da(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = be.depsTail, n.nextDep = void 0, be.depsTail.nextDep = n, be.depsTail = n, be.deps === n && (be.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Pn++, this.notify(t);
  }
  notify(t) {
    yr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      br();
    }
  }
}
function da(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        da(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Bi = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ Symbol(
  ""
), qi = /* @__PURE__ */ Symbol(
  ""
), Nn = /* @__PURE__ */ Symbol(
  ""
);
function Re(e, t, n) {
  if (tt && be) {
    let i = Bi.get(e);
    i || Bi.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || (i.set(n, r = new xr()), r.map = i, r.key = n), r.track();
  }
}
function kt(e, t, n, i, r, s) {
  const a = Bi.get(e);
  if (!a) {
    Pn++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (yr(), t === "clear")
    a.forEach(o);
  else {
    const l = Y(e), c = l && gr(n);
    if (l && n === "length") {
      const u = Number(i);
      a.forEach((d, h) => {
        (h === "length" || h === Nn || !nt(h) && h >= u) && o(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), c && o(a.get(Nn)), t) {
        case "add":
          l ? c && o(a.get("length")) : (o(a.get(qt)), sn(e) && o(a.get(qi)));
          break;
        case "delete":
          l || (o(a.get(qt)), sn(e) && o(a.get(qi)));
          break;
        case "set":
          sn(e) && o(a.get(qt));
          break;
      }
  }
  br();
}
function en(e) {
  const t = /* @__PURE__ */ ue(e);
  return t === e ? t : (Re(t, "iterate", Nn), /* @__PURE__ */ Ge(e) ? t : t.map(it));
}
function xi(e) {
  return Re(e = /* @__PURE__ */ ue(e), "iterate", Nn), e;
}
function pt(e, t) {
  return /* @__PURE__ */ $t(e) ? cn(/* @__PURE__ */ Wt(e) ? it(t) : t) : it(t);
}
const Jo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Mi(this, Symbol.iterator, (e) => pt(this, e));
  },
  concat(...e) {
    return en(this).concat(
      ...e.map((t) => Y(t) ? en(t) : t)
    );
  },
  entries() {
    return Mi(this, "entries", (e) => (e[1] = pt(this, e[1]), e));
  },
  every(e, t) {
    return bt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return bt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => pt(this, i)),
      arguments
    );
  },
  find(e, t) {
    return bt(
      this,
      "find",
      e,
      t,
      (n) => pt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return bt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return bt(
      this,
      "findLast",
      e,
      t,
      (n) => pt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return bt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return bt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Fi(this, "includes", e);
  },
  indexOf(...e) {
    return Fi(this, "indexOf", e);
  },
  join(e) {
    return en(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Fi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return bt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return gn(this, "pop");
  },
  push(...e) {
    return gn(this, "push", e);
  },
  reduce(e, ...t) {
    return Yr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Yr(this, "reduceRight", e, t);
  },
  shift() {
    return gn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return bt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return gn(this, "splice", e);
  },
  toReversed() {
    return en(this).toReversed();
  },
  toSorted(e) {
    return en(this).toSorted(e);
  },
  toSpliced(...e) {
    return en(this).toSpliced(...e);
  },
  unshift(...e) {
    return gn(this, "unshift", e);
  },
  values() {
    return Mi(this, "values", (e) => pt(this, e));
  }
};
function Mi(e, t, n) {
  const i = xi(e), r = i[t]();
  return i !== e && !/* @__PURE__ */ Ge(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const Xo = Array.prototype;
function bt(e, t, n, i, r, s) {
  const a = xi(e), o = a !== e && !/* @__PURE__ */ Ge(e), l = a[t];
  if (l !== Xo[t]) {
    const d = l.apply(e, s);
    return o ? it(d) : d;
  }
  let c = n;
  a !== e && (o ? c = function(d, h) {
    return n.call(this, pt(e, d), h, e);
  } : n.length > 2 && (c = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const u = l.call(a, c, i);
  return o && r ? r(u) : u;
}
function Yr(e, t, n, i) {
  const r = xi(e), s = r !== e && !/* @__PURE__ */ Ge(e);
  let a = n, o = !1;
  r !== e && (s ? (o = i.length === 0, a = function(c, u, d) {
    return o && (o = !1, c = pt(e, c)), n.call(this, c, pt(e, u), d, e);
  }) : n.length > 3 && (a = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const l = r[t](a, ...i);
  return o ? pt(e, l) : l;
}
function Fi(e, t, n) {
  const i = /* @__PURE__ */ ue(e);
  Re(i, "iterate", Nn);
  const r = i[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Sr(n[0]) ? (n[0] = /* @__PURE__ */ ue(n[0]), i[t](...n)) : r;
}
function gn(e, t, n = []) {
  Tt(), yr();
  const i = (/* @__PURE__ */ ue(e))[t].apply(e, n);
  return br(), At(), i;
}
const el = /* @__PURE__ */ hr("__proto__,__v_isRef,__isVue"), fa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nt)
);
function tl(e) {
  nt(e) || (e = String(e));
  const t = /* @__PURE__ */ ue(this);
  return Re(t, "has", e), t.hasOwnProperty(e);
}
class pa {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return i === (r ? s ? dl : va : s ? ga : ma).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const a = Y(t);
    if (!r) {
      let l;
      if (a && (l = Jo[n]))
        return l;
      if (n === "hasOwnProperty")
        return tl;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Fe(t) ? t : i
    );
    if ((nt(n) ? fa.has(n) : el(n)) || (r || Re(t, "get", n), s))
      return o;
    if (/* @__PURE__ */ Fe(o)) {
      const l = a && gr(n) ? o : o.value;
      return r && ge(l) ? /* @__PURE__ */ Ki(l) : l;
    }
    return ge(o) ? r ? /* @__PURE__ */ Ki(o) : /* @__PURE__ */ Xt(o) : o;
  }
}
class ha extends pa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    const a = Y(t) && gr(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ $t(s);
      if (!/* @__PURE__ */ Ge(i) && !/* @__PURE__ */ $t(i) && (s = /* @__PURE__ */ ue(s), i = /* @__PURE__ */ ue(i)), !a && /* @__PURE__ */ Fe(s) && !/* @__PURE__ */ Fe(i))
        return c || (s.value = i), !0;
    }
    const o = a ? Number(n) < t.length : de(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Fe(t) ? t : r
    );
    return t === /* @__PURE__ */ ue(r) && (o ? mt(i, s) && kt(t, "set", n, i) : kt(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = de(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && i && kt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!nt(n) || !fa.has(n)) && Re(t, "has", n), i;
  }
  ownKeys(t) {
    return Re(
      t,
      "iterate",
      Y(t) ? "length" : qt
    ), Reflect.ownKeys(t);
  }
}
class nl extends pa {
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
const il = /* @__PURE__ */ new ha(), rl = /* @__PURE__ */ new nl(), sl = /* @__PURE__ */ new ha(!0);
const Wi = (e) => e, Bn = (e) => Reflect.getPrototypeOf(e);
function al(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = /* @__PURE__ */ ue(r), a = sn(s), o = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = r[e](...i), u = n ? Wi : t ? cn : it;
    return !t && Re(
      s,
      "iterate",
      l ? qi : qt
    ), Se(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: h } = c.next();
          return h ? { value: d, done: h } : {
            value: o ? [u(d[0]), u(d[1])] : u(d),
            done: h
          };
        }
      }
    );
  };
}
function qn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ol(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ ue(s), o = /* @__PURE__ */ ue(r);
      e || (mt(r, o) && Re(a, "get", r), Re(a, "get", o));
      const { has: l } = Bn(a), c = t ? Wi : e ? cn : it;
      if (l.call(a, r))
        return c(s.get(r));
      if (l.call(a, o))
        return c(s.get(o));
      s !== a && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Re(/* @__PURE__ */ ue(r), "iterate", qt), r.size;
    },
    has(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ ue(s), o = /* @__PURE__ */ ue(r);
      return e || (mt(r, o) && Re(a, "has", r), Re(a, "has", o)), r === o ? s.has(r) : s.has(r) || s.has(o);
    },
    forEach(r, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ ue(o), c = t ? Wi : e ? cn : it;
      return !e && Re(l, "iterate", qt), o.forEach((u, d) => r.call(s, c(u), c(d), a));
    }
  };
  return Se(
    n,
    e ? {
      add: qn("add"),
      set: qn("set"),
      delete: qn("delete"),
      clear: qn("clear")
    } : {
      add(r) {
        const s = /* @__PURE__ */ ue(this), a = Bn(s), o = /* @__PURE__ */ ue(r), l = !t && !/* @__PURE__ */ Ge(r) && !/* @__PURE__ */ $t(r) ? o : r;
        return a.has.call(s, l) || mt(r, l) && a.has.call(s, r) || mt(o, l) && a.has.call(s, o) || (s.add(l), kt(s, "add", l, l)), this;
      },
      set(r, s) {
        !t && !/* @__PURE__ */ Ge(s) && !/* @__PURE__ */ $t(s) && (s = /* @__PURE__ */ ue(s));
        const a = /* @__PURE__ */ ue(this), { has: o, get: l } = Bn(a);
        let c = o.call(a, r);
        c || (r = /* @__PURE__ */ ue(r), c = o.call(a, r));
        const u = l.call(a, r);
        return a.set(r, s), c ? mt(s, u) && kt(a, "set", r, s) : kt(a, "add", r, s), this;
      },
      delete(r) {
        const s = /* @__PURE__ */ ue(this), { has: a, get: o } = Bn(s);
        let l = a.call(s, r);
        l || (r = /* @__PURE__ */ ue(r), l = a.call(s, r)), o && o.call(s, r);
        const c = s.delete(r);
        return l && kt(s, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ ue(this), s = r.size !== 0, a = r.clear();
        return s && kt(
          r,
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
  ].forEach((r) => {
    n[r] = al(r, e, t);
  }), n;
}
function wr(e, t) {
  const n = ol(e, t);
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    de(n, r) && r in i ? n : i,
    r,
    s
  );
}
const ll = {
  get: /* @__PURE__ */ wr(!1, !1)
}, cl = {
  get: /* @__PURE__ */ wr(!1, !0)
}, ul = {
  get: /* @__PURE__ */ wr(!0, !1)
};
const ma = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ new WeakMap(), dl = /* @__PURE__ */ new WeakMap();
function fl(e) {
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
function Xt(e) {
  return /* @__PURE__ */ $t(e) ? e : kr(
    e,
    !1,
    il,
    ll,
    ma
  );
}
// @__NO_SIDE_EFFECTS__
function pl(e) {
  return kr(
    e,
    !1,
    sl,
    cl,
    ga
  );
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return kr(
    e,
    !0,
    rl,
    ul,
    va
  );
}
function kr(e, t, n, i, r) {
  if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = fl(jo(e));
  if (a === 0)
    return e;
  const o = new Proxy(
    e,
    a === 2 ? i : n
  );
  return r.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return /* @__PURE__ */ $t(e) ? /* @__PURE__ */ Wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ue(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ue(t) : e;
}
function hl(e) {
  return !de(e, "__v_skip") && Object.isExtensible(e) && ea(e, "__v_skip", !0), e;
}
const it = (e) => ge(e) ? /* @__PURE__ */ Xt(e) : e, cn = (e) => ge(e) ? /* @__PURE__ */ Ki(e) : e;
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  return ml(e, !1);
}
function ml(e, t) {
  return /* @__PURE__ */ Fe(e) ? e : new gl(e, t);
}
class gl {
  constructor(t, n) {
    this.dep = new xr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ue(t), this._value = n ? t : it(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Ge(t) || /* @__PURE__ */ $t(t);
    t = i ? t : /* @__PURE__ */ ue(t), mt(t, n) && (this._rawValue = t, this._value = i ? t : it(t), this.dep.trigger());
  }
}
function te(e) {
  return /* @__PURE__ */ Fe(e) ? e.value : e;
}
const vl = {
  get: (e, t, n) => t === "__v_raw" ? e : te(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return /* @__PURE__ */ Fe(r) && !/* @__PURE__ */ Fe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function ya(e) {
  return /* @__PURE__ */ Wt(e) ? e : new Proxy(e, vl);
}
class yl {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new xr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Pn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    be !== this)
      return aa(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ca(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function bl(e, t, n = !1) {
  let i, r;
  return J(e) ? i = e : (i = e.get, r = e.set), new yl(i, r, n);
}
const Wn = {}, Gn = /* @__PURE__ */ new WeakMap();
let Ht;
function _l(e, t = !1, n = Ht) {
  if (n) {
    let i = Gn.get(n);
    i || Gn.set(n, i = []), i.push(e);
  }
}
function xl(e, t, n = _e) {
  const { immediate: i, deep: r, once: s, scheduler: a, augmentJob: o, call: l } = n, c = (v) => r ? v : /* @__PURE__ */ Ge(v) || r === !1 || r === 0 ? Mt(v, 1) : Mt(v);
  let u, d, h, g, E = !1, _ = !1;
  if (/* @__PURE__ */ Fe(e) ? (d = () => e.value, E = /* @__PURE__ */ Ge(e)) : /* @__PURE__ */ Wt(e) ? (d = () => c(e), E = !0) : Y(e) ? (_ = !0, E = e.some((v) => /* @__PURE__ */ Wt(v) || /* @__PURE__ */ Ge(v)), d = () => e.map((v) => {
    if (/* @__PURE__ */ Fe(v))
      return v.value;
    if (/* @__PURE__ */ Wt(v))
      return c(v);
    if (J(v))
      return l ? l(v, 2) : v();
  })) : J(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (h) {
      Tt();
      try {
        h();
      } finally {
        At();
      }
    }
    const v = Ht;
    Ht = u;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      Ht = v;
    }
  } : d = gt, t && r) {
    const v = d, S = r === !0 ? 1 / 0 : r;
    d = () => Mt(v(), S);
  }
  const H = Go(), L = () => {
    u.stop(), H && H.active && mr(H.effects, u);
  };
  if (s && t) {
    const v = t;
    t = (...S) => {
      v(...S), L();
    };
  }
  let U = _ ? new Array(e.length).fill(Wn) : Wn;
  const M = (v) => {
    if (!(!(u.flags & 1) || !u.dirty && !v))
      if (t) {
        const S = u.run();
        if (r || E || (_ ? S.some((D, X) => mt(D, U[X])) : mt(S, U))) {
          h && h();
          const D = Ht;
          Ht = u;
          try {
            const X = [
              S,
              // pass undefined as the old value when it's changed for the first time
              U === Wn ? void 0 : _ && U[0] === Wn ? [] : U,
              g
            ];
            U = S, l ? l(t, 3, X) : (
              // @ts-expect-error
              t(...X)
            );
          } finally {
            Ht = D;
          }
        }
      } else
        u.run();
  };
  return o && o(M), u = new ra(d), u.scheduler = a ? () => a(M, !1) : M, g = (v) => _l(v, !1, u), h = u.onStop = () => {
    const v = Gn.get(u);
    if (v) {
      if (l)
        l(v, 4);
      else
        for (const S of v) S();
      Gn.delete(u);
    }
  }, t ? i ? M(!0) : U = u.run() : a ? a(M.bind(null, !0), !0) : u.run(), L.pause = u.pause.bind(u), L.resume = u.resume.bind(u), L.stop = L, L;
}
function Mt(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Fe(e))
    Mt(e.value, t, n);
  else if (Y(e))
    for (let i = 0; i < e.length; i++)
      Mt(e[i], t, n);
  else if (Qs(e) || sn(e))
    e.forEach((i) => {
      Mt(i, t, n);
    });
  else if (gi(e)) {
    for (const i in e)
      Mt(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Mt(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ln(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (r) {
    wi(r, t, n);
  }
}
function rt(e, t, n, i) {
  if (J(e)) {
    const r = Ln(e, t, n, i);
    return r && Js(r) && r.catch((s) => {
      wi(s, t, n);
    }), r;
  }
  if (Y(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(rt(e[s], t, n, i));
    return r;
  }
}
function wi(e, t, n, i = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = t && t.appContext.config || _e;
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
    if (s) {
      Tt(), Ln(s, null, 10, [
        e,
        l,
        c
      ]), At();
      return;
    }
  }
  wl(e, n, r, i, a);
}
function wl(e, t, n, i = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const De = [];
let ft = -1;
const an = [];
let Nt = null, tn = 0;
const ba = /* @__PURE__ */ Promise.resolve();
let Yn = null;
function ki(e) {
  const t = Yn || ba;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kl(e) {
  let t = ft + 1, n = De.length;
  for (; t < n; ) {
    const i = t + n >>> 1, r = De[i], s = Rn(r);
    s < e || s === e && r.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Cr(e) {
  if (!(e.flags & 1)) {
    const t = Rn(e), n = De[De.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Rn(n) ? De.push(e) : De.splice(kl(t), 0, e), e.flags |= 1, _a();
  }
}
function _a() {
  Yn || (Yn = ba.then(wa));
}
function Sl(e) {
  Y(e) ? an.push(...e) : Nt && e.id === -1 ? Nt.splice(tn + 1, 0, e) : e.flags & 1 || (an.push(e), e.flags |= 1), _a();
}
function Qr(e, t, n = ft + 1) {
  for (; n < De.length; n++) {
    const i = De[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      De.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function xa(e) {
  if (an.length) {
    const t = [...new Set(an)].sort(
      (n, i) => Rn(n) - Rn(i)
    );
    if (an.length = 0, Nt) {
      Nt.push(...t);
      return;
    }
    for (Nt = t, tn = 0; tn < Nt.length; tn++) {
      const n = Nt[tn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Nt = null, tn = 0;
  }
}
const Rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wa(e) {
  try {
    for (ft = 0; ft < De.length; ft++) {
      const t = De[ft];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ln(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ft < De.length; ft++) {
      const t = De[ft];
      t && (t.flags &= -2);
    }
    ft = -1, De.length = 0, xa(), Yn = null, (De.length || an.length) && wa();
  }
}
let Ve = null, ka = null;
function Qn(e) {
  const t = Ve;
  return Ve = e, ka = e && e.type.__scopeId || null, t;
}
function Sa(e, t = Ve, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && cs(-1);
    const s = Qn(t);
    let a;
    try {
      a = e(...r);
    } finally {
      Qn(s), i._d && cs(1);
    }
    return a;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ut(e, t, n, i) {
  const r = e.dirs, s = t && t.dirs;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[i];
    l && (Tt(), rt(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), At());
  }
}
function Ca(e, t) {
  if (Me) {
    let n = Me.provides;
    const i = Me.parent && Me.parent.provides;
    i === n && (n = Me.provides = Object.create(i)), n[e] = t;
  }
}
function Kt(e, t, n = !1) {
  const i = eo();
  if (i || ln) {
    let r = ln ? ln._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && J(t) ? t.call(i && i.proxy) : t;
  }
}
const Cl = /* @__PURE__ */ Symbol.for("v-scx"), Tl = () => Kt(Cl);
function jt(e, t, n) {
  return Ta(e, t, n);
}
function Ta(e, t, n = _e) {
  const { immediate: i, deep: r, flush: s, once: a } = n, o = Se({}, n), l = t && i || !t && s !== "post";
  let c;
  if (Fn) {
    if (s === "sync") {
      const g = Tl();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {
      };
      return g.stop = gt, g.resume = gt, g.pause = gt, g;
    }
  }
  const u = Me;
  o.call = (g, E, _) => rt(g, u, E, _);
  let d = !1;
  s === "post" ? o.scheduler = (g) => {
    Le(g, u && u.suspense);
  } : s !== "sync" && (d = !0, o.scheduler = (g, E) => {
    E ? g() : Cr(g);
  }), o.augmentJob = (g) => {
    t && (g.flags |= 4), d && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const h = xl(e, t, o);
  return Fn && (c ? c.push(h) : l && h()), h;
}
function Al(e, t, n) {
  const i = this.proxy, r = we(e) ? e.includes(".") ? Aa(i, e) : () => i[e] : e.bind(i, i);
  let s;
  J(t) ? s = t : (s = t.handler, n = t);
  const a = Un(this), o = Ta(r, s.bind(i), n);
  return a(), o;
}
function Aa(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
const $l = /* @__PURE__ */ Symbol("_vte"), Il = (e) => e.__isTeleport, ji = /* @__PURE__ */ Symbol("_leaveCb");
function Tr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Tr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  return J(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Se({ name: e.name }, t, { setup: e })
  ) : e;
}
function $a(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Jr(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Jn = /* @__PURE__ */ new WeakMap();
function In(e, t, n, i, r = !1) {
  if (Y(e)) {
    e.forEach(
      (_, H) => In(
        _,
        t && (Y(t) ? t[H] : t),
        n,
        i,
        r
      )
    );
    return;
  }
  if (on(i) && !r) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && In(e, t, n, i.component.subTree);
    return;
  }
  const s = i.shapeFlag & 4 ? Nr(i.component) : i.el, a = r ? null : s, { i: o, r: l } = e, c = t && t.r, u = o.refs === _e ? o.refs = {} : o.refs, d = o.setupState, h = /* @__PURE__ */ ue(d), g = d === _e ? Ys : (_) => Jr(u, _) ? !1 : de(h, _), E = (_, H) => !(H && Jr(u, H));
  if (c != null && c !== l) {
    if (Xr(t), we(c))
      u[c] = null, g(c) && (d[c] = null);
    else if (/* @__PURE__ */ Fe(c)) {
      const _ = t;
      E(c, _.k) && (c.value = null), _.k && (u[_.k] = null);
    }
  }
  if (J(l))
    Ln(l, o, 12, [a, u]);
  else {
    const _ = we(l), H = /* @__PURE__ */ Fe(l);
    if (_ || H) {
      const L = () => {
        if (e.f) {
          const U = _ ? g(l) ? d[l] : u[l] : E() || !e.k ? l.value : u[e.k];
          if (r)
            Y(U) && mr(U, s);
          else if (Y(U))
            U.includes(s) || U.push(s);
          else if (_)
            u[l] = [s], g(l) && (d[l] = u[l]);
          else {
            const M = [s];
            E(l, e.k) && (l.value = M), e.k && (u[e.k] = M);
          }
        } else _ ? (u[l] = a, g(l) && (d[l] = a)) : H && (E(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const U = () => {
          L(), Jn.delete(e);
        };
        U.id = -1, Jn.set(e, U), Le(U, n);
      } else
        Xr(e), L();
    }
  }
}
function Xr(e) {
  const t = Jn.get(e);
  t && (t.flags |= 8, Jn.delete(e));
}
bi().requestIdleCallback;
bi().cancelIdleCallback;
const on = (e) => !!e.type.__asyncLoader, Ia = (e) => e.type.__isKeepAlive;
function El(e, t) {
  Ea(e, "a", t);
}
function Ol(e, t) {
  Ea(e, "da", t);
}
function Ea(e, t, n = Me) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Si(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Ia(r.parent.vnode) && Pl(i, t, n, r), r = r.parent;
  }
}
function Pl(e, t, n, i) {
  const r = Si(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Pa(() => {
    mr(i[t], r);
  }, n);
}
function Si(e, t, n = Me, i = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      Tt();
      const o = Un(n), l = rt(t, n, e, a);
      return o(), At(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const Pt = (e) => (t, n = Me) => {
  (!Fn || e === "sp") && Si(e, (...i) => t(...i), n);
}, Nl = Pt("bm"), Ar = Pt("m"), Rl = Pt(
  "bu"
), Ml = Pt("u"), Oa = Pt(
  "bum"
), Pa = Pt("um"), Fl = Pt(
  "sp"
), jl = Pt("rtg"), Dl = Pt("rtc");
function Vl(e, t = Me) {
  Si("ec", e, t);
}
const zl = "components", Na = /* @__PURE__ */ Symbol.for("v-ndc");
function Ll(e) {
  return we(e) ? Ul(zl, e, !1) || e : e || Na;
}
function Ul(e, t, n = !0, i = !1) {
  const r = Ve || Me;
  if (r) {
    const s = r.type;
    {
      const o = Ac(
        s,
        !1
      );
      if (o && (o === t || o === Ie(t) || o === yi(Ie(t))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      es(r[e] || s[e], t) || // global registration
      es(r.appContext[e], t)
    );
    return !a && i ? s : a;
  }
}
function es(e, t) {
  return e && (e[t] || e[Ie(t)] || e[yi(Ie(t))]);
}
function Ne(e, t, n, i) {
  let r;
  const s = n, a = Y(e);
  if (a || we(e)) {
    const o = a && /* @__PURE__ */ Wt(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ Ge(e), c = /* @__PURE__ */ $t(e), e = xi(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        l ? c ? cn(it(e[u])) : it(e[u]) : e[u],
        u,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, s);
  } else if (ge(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (o, l) => t(o, l, void 0, s)
      );
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let l = 0, c = o.length; l < c; l++) {
        const u = o[l];
        r[l] = t(e[u], u, l, s);
      }
    }
  else
    r = [];
  return r;
}
function Zl(e, t, n = {}, i, r) {
  if (Ve.ce || Ve.parent && on(Ve.parent) && Ve.parent.ce) {
    const c = Object.keys(n).length > 0;
    return y(), $e(
      ae,
      null,
      [Ye("slot", n, i)],
      c ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), y();
  const a = s && Ra(s(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = $e(
    ae,
    {
      key: (o && !nt(o) ? o : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && i ? "_fb" : "")
    },
    a || [],
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Ra(e) {
  return e.some((t) => Er(t) ? !(t.type === It || t.type === ae && !Ra(t.children)) : !0) ? e : null;
}
const Gi = (e) => e ? to(e) ? Nr(e) : Gi(e.parent) : null, En = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Gi(e.parent),
    $root: (e) => Gi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Cr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ki.bind(e.proxy)),
    $watch: (e) => Al.bind(e)
  })
), Di = (e, t) => e !== _e && !e.__isScriptSetup && de(e, t), Hl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: r, props: s, accessCache: a, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const h = a[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return i[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Di(i, t))
          return a[t] = 1, i[t];
        if (r !== _e && de(r, t))
          return a[t] = 2, r[t];
        if (de(s, t))
          return a[t] = 3, s[t];
        if (n !== _e && de(n, t))
          return a[t] = 4, n[t];
        Yi && (a[t] = 0);
      }
    }
    const c = En[t];
    let u, d;
    if (c)
      return t === "$attrs" && Re(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== _e && de(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, de(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: r, ctx: s } = e;
    return Di(r, t) ? (r[t] = n, !0) : i !== _e && de(i, t) ? (i[t] = n, !0) : de(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, props: s, type: a }
  }, o) {
    let l;
    return !!(n[o] || e !== _e && o[0] !== "$" && de(e, o) || Di(t, o) || de(s, o) || de(i, o) || de(En, o) || de(r.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : de(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ts(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Yi = !0;
function Bl(e) {
  const t = Fa(e), n = e.proxy, i = e.ctx;
  Yi = !1, t.beforeCreate && ns(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: a,
    watch: o,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: h,
    beforeUpdate: g,
    updated: E,
    activated: _,
    deactivated: H,
    beforeDestroy: L,
    beforeUnmount: U,
    destroyed: M,
    unmounted: v,
    render: S,
    renderTracked: D,
    renderTriggered: X,
    errorCaptured: fe,
    serverPrefetch: qe,
    // public API
    expose: We,
    inheritAttrs: $,
    // assets
    components: R,
    directives: ie,
    filters: ke
  } = t;
  if (c && ql(c, i, null), a)
    for (const ye in a) {
      const pe = a[ye];
      J(pe) && (i[ye] = pe.bind(n));
    }
  if (r) {
    const ye = r.call(n, n);
    ge(ye) && (e.data = /* @__PURE__ */ Xt(ye));
  }
  if (Yi = !0, s)
    for (const ye in s) {
      const pe = s[ye], zt = J(pe) ? pe.bind(n, n) : J(pe.get) ? pe.get.bind(n, n) : gt, Zn = !J(pe) && J(pe.set) ? pe.set.bind(n) : gt, Lt = ne({
        get: zt,
        set: Zn
      });
      Object.defineProperty(i, ye, {
        enumerable: !0,
        configurable: !0,
        get: () => Lt.value,
        set: (ot) => Lt.value = ot
      });
    }
  if (o)
    for (const ye in o)
      Ma(o[ye], i, n, ye);
  if (l) {
    const ye = J(l) ? l.call(n) : l;
    Reflect.ownKeys(ye).forEach((pe) => {
      Ca(pe, ye[pe]);
    });
  }
  u && ns(u, e, "c");
  function Ee(ye, pe) {
    Y(pe) ? pe.forEach((zt) => ye(zt.bind(n))) : pe && ye(pe.bind(n));
  }
  if (Ee(Nl, d), Ee(Ar, h), Ee(Rl, g), Ee(Ml, E), Ee(El, _), Ee(Ol, H), Ee(Vl, fe), Ee(Dl, D), Ee(jl, X), Ee(Oa, U), Ee(Pa, v), Ee(Fl, qe), Y(We))
    if (We.length) {
      const ye = e.exposed || (e.exposed = {});
      We.forEach((pe) => {
        Object.defineProperty(ye, pe, {
          get: () => n[pe],
          set: (zt) => n[pe] = zt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === gt && (e.render = S), $ != null && (e.inheritAttrs = $), R && (e.components = R), ie && (e.directives = ie), qe && $a(e);
}
function ql(e, t, n = gt) {
  Y(e) && (e = Qi(e));
  for (const i in e) {
    const r = e[i];
    let s;
    ge(r) ? "default" in r ? s = Kt(
      r.from || i,
      r.default,
      !0
    ) : s = Kt(r.from || i) : s = Kt(r), /* @__PURE__ */ Fe(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[i] = s;
  }
}
function ns(e, t, n) {
  rt(
    Y(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ma(e, t, n, i) {
  let r = i.includes(".") ? Aa(n, i) : () => n[i];
  if (we(e)) {
    const s = t[e];
    J(s) && jt(r, s);
  } else if (J(e))
    jt(r, e.bind(n));
  else if (ge(e))
    if (Y(e))
      e.forEach((s) => Ma(s, t, n, i));
    else {
      const s = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(s) && jt(r, s, e);
    }
}
function Fa(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, o = s.get(t);
  let l;
  return o ? l = o : !r.length && !n && !i ? l = t : (l = {}, r.length && r.forEach(
    (c) => Xn(l, c, a, !0)
  ), Xn(l, t, a)), ge(t) && s.set(t, l), l;
}
function Xn(e, t, n, i = !1) {
  const { mixins: r, extends: s } = t;
  s && Xn(e, s, n, !0), r && r.forEach(
    (a) => Xn(e, a, n, !0)
  );
  for (const a in t)
    if (!(i && a === "expose")) {
      const o = Wl[a] || n && n[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const Wl = {
  data: is,
  props: rs,
  emits: rs,
  // objects
  methods: xn,
  computed: xn,
  // lifecycle
  beforeCreate: je,
  created: je,
  beforeMount: je,
  mounted: je,
  beforeUpdate: je,
  updated: je,
  beforeDestroy: je,
  beforeUnmount: je,
  destroyed: je,
  unmounted: je,
  activated: je,
  deactivated: je,
  errorCaptured: je,
  serverPrefetch: je,
  // assets
  components: xn,
  directives: xn,
  // watch
  watch: Gl,
  // provide / inject
  provide: is,
  inject: Kl
};
function is(e, t) {
  return t ? e ? function() {
    return Se(
      J(e) ? e.call(this, this) : e,
      J(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Kl(e, t) {
  return xn(Qi(e), Qi(t));
}
function Qi(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function xn(e, t) {
  return e ? Se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function rs(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Se(
    /* @__PURE__ */ Object.create(null),
    ts(e),
    ts(t ?? {})
  ) : t;
}
function Gl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Se(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = je(e[i], t[i]);
  return n;
}
function ja() {
  return {
    app: null,
    config: {
      isNativeTag: Ys,
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
let Yl = 0;
function Ql(e, t) {
  return function(i, r = null) {
    J(i) || (i = Se({}, i)), r != null && !ge(r) && (r = null);
    const s = ja(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = s.app = {
      _uid: Yl++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Ic,
      get config() {
        return s.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return a.has(u) || (u && J(u.install) ? (a.add(u), u.install(c, ...d)) : J(u) && (a.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), c;
      },
      component(u, d) {
        return d ? (s.components[u] = d, c) : s.components[u];
      },
      directive(u, d) {
        return d ? (s.directives[u] = d, c) : s.directives[u];
      },
      mount(u, d, h) {
        if (!l) {
          const g = c._ceVNode || Ye(i, r);
          return g.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(g, u, h), l = !0, c._container = u, u.__vue_app__ = c, Nr(g.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (rt(
          o,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return s.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = ln;
        ln = c;
        try {
          return u();
        } finally {
          ln = d;
        }
      }
    };
    return c;
  };
}
let ln = null;
const Jl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ie(t)}Modifiers`] || e[`${Ke(t)}Modifiers`];
function Xl(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || _e;
  let r = n;
  const s = t.startsWith("update:"), a = s && Jl(i, t.slice(7));
  a && (a.trim && (r = n.map((u) => we(u) ? u.trim() : u)), a.number && (r = n.map(zo)));
  let o, l = i[o = Oi(t)] || // also try camelCase event handler (#2249)
  i[o = Oi(Ie(t))];
  !l && s && (l = i[o = Oi(Ke(t))]), l && rt(
    l,
    e,
    6,
    r
  );
  const c = i[o + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, rt(
      c,
      e,
      6,
      r
    );
  }
}
const ec = /* @__PURE__ */ new WeakMap();
function Da(e, t, n = !1) {
  const i = n ? ec : t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let a = {}, o = !1;
  if (!J(e)) {
    const l = (c) => {
      const u = Da(c, t, !0);
      u && (o = !0, Se(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !o ? (ge(e) && i.set(e, null), null) : (Y(s) ? s.forEach((l) => a[l] = null) : Se(a, s), ge(e) && i.set(e, a), a);
}
function Ci(e, t) {
  return !e || !hi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), de(e, t[0].toLowerCase() + t.slice(1)) || de(e, Ke(t)) || de(e, t));
}
function ss(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: r,
    propsOptions: [s],
    slots: a,
    attrs: o,
    emit: l,
    render: c,
    renderCache: u,
    props: d,
    data: h,
    setupState: g,
    ctx: E,
    inheritAttrs: _
  } = e, H = Qn(e);
  let L, U;
  try {
    if (n.shapeFlag & 4) {
      const v = r || i, S = v;
      L = ht(
        c.call(
          S,
          v,
          u,
          d,
          g,
          h,
          E
        )
      ), U = o;
    } else {
      const v = t;
      L = ht(
        v.length > 1 ? v(
          d,
          { attrs: o, slots: a, emit: l }
        ) : v(
          d,
          null
        )
      ), U = t.props ? o : tc(o);
    }
  } catch (v) {
    On.length = 0, wi(v, e, 1), L = Ye(It);
  }
  let M = L;
  if (U && _ !== !1) {
    const v = Object.keys(U), { shapeFlag: S } = M;
    v.length && S & 7 && (s && v.some(mi) && (U = nc(
      U,
      s
    )), M = un(M, U, !1, !0));
  }
  return n.dirs && (M = un(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition && Tr(M, n.transition), L = M, Qn(H), L;
}
const tc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || hi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, nc = (e, t) => {
  const n = {};
  for (const i in e)
    (!mi(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function ic(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: a, children: o, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? as(i, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (Va(a, i, h) && !Ci(c, h))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : i === a ? !1 : i ? a ? as(i, a, c) : !0 : !!a;
  return !1;
}
function as(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (Va(t, e, s) && !Ci(n, s))
      return !0;
  }
  return !1;
}
function Va(e, t, n) {
  const i = e[n], r = t[n];
  return n === "style" && ge(i) && ge(r) ? !vr(i, r) : i !== r;
}
function rc({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = i, e = r), r === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const za = {}, La = () => Object.create(za), Ua = (e) => Object.getPrototypeOf(e) === za;
function sc(e, t, n, i = !1) {
  const r = {}, s = La();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Za(e, t, r, s);
  for (const a in e.propsOptions[0])
    a in r || (r[a] = void 0);
  n ? e.props = i ? r : /* @__PURE__ */ pl(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function ac(e, t, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, o = /* @__PURE__ */ ue(r), [l] = e.propsOptions;
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
        let h = u[d];
        if (Ci(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (l)
          if (de(s, h))
            g !== s[h] && (s[h] = g, c = !0);
          else {
            const E = Ie(h);
            r[E] = Ji(
              l,
              o,
              E,
              g,
              e,
              !1
            );
          }
        else
          g !== s[h] && (s[h] = g, c = !0);
      }
    }
  } else {
    Za(e, t, r, s) && (c = !0);
    let u;
    for (const d in o)
      (!t || // for camelCase
      !de(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ke(d)) === d || !de(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = Ji(
        l,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (s !== o)
      for (const d in s)
        (!t || !de(t, d)) && (delete s[d], c = !0);
  }
  c && kt(e.attrs, "set", "");
}
function Za(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let a = !1, o;
  if (t)
    for (let l in t) {
      if (Tn(l))
        continue;
      const c = t[l];
      let u;
      r && de(r, u = Ie(l)) ? !s || !s.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : Ci(e.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ ue(n), c = o || _e;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = Ji(
        r,
        l,
        d,
        c[d],
        e,
        !de(c, d)
      );
    }
  }
  return a;
}
function Ji(e, t, n, i, r, s) {
  const a = e[n];
  if (a != null) {
    const o = de(a, "default");
    if (o && i === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && J(l)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const u = Un(r);
          i = c[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        i = l;
      r.ce && r.ce._setProp(n, i);
    }
    a[
      0
      /* shouldCast */
    ] && (s && !o ? i = !1 : a[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Ke(n)) && (i = !0));
  }
  return i;
}
const oc = /* @__PURE__ */ new WeakMap();
function Ha(e, t, n = !1) {
  const i = n ? oc : t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, a = {}, o = [];
  let l = !1;
  if (!J(e)) {
    const u = (d) => {
      l = !0;
      const [h, g] = Ha(d, t, !0);
      Se(a, h), g && o.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return ge(e) && i.set(e, rn), rn;
  if (Y(s))
    for (let u = 0; u < s.length; u++) {
      const d = Ie(s[u]);
      os(d) && (a[d] = _e);
    }
  else if (s)
    for (const u in s) {
      const d = Ie(u);
      if (os(d)) {
        const h = s[u], g = a[d] = Y(h) || J(h) ? { type: h } : Se({}, h), E = g.type;
        let _ = !1, H = !0;
        if (Y(E))
          for (let L = 0; L < E.length; ++L) {
            const U = E[L], M = J(U) && U.name;
            if (M === "Boolean") {
              _ = !0;
              break;
            } else M === "String" && (H = !1);
          }
        else
          _ = J(E) && E.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = _, g[
          1
          /* shouldCastTrue */
        ] = H, (_ || de(g, "default")) && o.push(d);
      }
    }
  const c = [a, o];
  return ge(e) && i.set(e, c), c;
}
function os(e) {
  return e[0] !== "$" && !Tn(e);
}
const $r = (e) => e === "_" || e === "_ctx" || e === "$stable", Ir = (e) => Y(e) ? e.map(ht) : [ht(e)], lc = (e, t, n) => {
  if (t._n)
    return t;
  const i = Sa((...r) => Ir(t(...r)), n);
  return i._c = !1, i;
}, Ba = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if ($r(r)) continue;
    const s = e[r];
    if (J(s))
      t[r] = lc(r, s, i);
    else if (s != null) {
      const a = Ir(s);
      t[r] = () => a;
    }
  }
}, qa = (e, t) => {
  const n = Ir(t);
  e.slots.default = () => n;
}, Wa = (e, t, n) => {
  for (const i in t)
    (n || !$r(i)) && (e[i] = t[i]);
}, cc = (e, t, n) => {
  const i = e.slots = La();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Wa(i, t, n), n && ea(i, "_", r, !0)) : Ba(t, i);
  } else t && qa(e, t);
}, uc = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, a = _e;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? s = !1 : Wa(r, t, n) : (s = !t.$stable, Ba(t, r)), a = t;
  } else t && (qa(e, t), a = { default: 1 });
  if (s)
    for (const o in r)
      !$r(o) && a[o] == null && delete r[o];
}, Le = mc;
function dc(e) {
  return fc(e);
}
function fc(e, t) {
  const n = bi();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: r,
    patchProp: s,
    createElement: a,
    createText: o,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: h,
    setScopeId: g = gt,
    insertStaticContent: E
  } = e, _ = (f, p, m, k = null, x = null, b = null, O = void 0, I = null, A = !!p.dynamicChildren) => {
    if (f === p)
      return;
    f && !vn(f, p) && (k = Hn(f), ot(f, x, b, !0), f = null), p.patchFlag === -2 && (A = !1, p.dynamicChildren = null);
    const { type: w, ref: q, shapeFlag: N } = p;
    switch (w) {
      case Ti:
        H(f, p, m, k);
        break;
      case It:
        L(f, p, m, k);
        break;
      case zi:
        f == null && U(p, m, k, O);
        break;
      case ae:
        R(
          f,
          p,
          m,
          k,
          x,
          b,
          O,
          I,
          A
        );
        break;
      default:
        N & 1 ? S(
          f,
          p,
          m,
          k,
          x,
          b,
          O,
          I,
          A
        ) : N & 6 ? ie(
          f,
          p,
          m,
          k,
          x,
          b,
          O,
          I,
          A
        ) : (N & 64 || N & 128) && w.process(
          f,
          p,
          m,
          k,
          x,
          b,
          O,
          I,
          A,
          hn
        );
    }
    q != null && x ? In(q, f && f.ref, b, p || f, !p) : q == null && f && f.ref != null && In(f.ref, null, b, f, !0);
  }, H = (f, p, m, k) => {
    if (f == null)
      i(
        p.el = o(p.children),
        m,
        k
      );
    else {
      const x = p.el = f.el;
      p.children !== f.children && c(x, p.children);
    }
  }, L = (f, p, m, k) => {
    f == null ? i(
      p.el = l(p.children || ""),
      m,
      k
    ) : p.el = f.el;
  }, U = (f, p, m, k) => {
    [f.el, f.anchor] = E(
      f.children,
      p,
      m,
      k,
      f.el,
      f.anchor
    );
  }, M = ({ el: f, anchor: p }, m, k) => {
    let x;
    for (; f && f !== p; )
      x = h(f), i(f, m, k), f = x;
    i(p, m, k);
  }, v = ({ el: f, anchor: p }) => {
    let m;
    for (; f && f !== p; )
      m = h(f), r(f), f = m;
    r(p);
  }, S = (f, p, m, k, x, b, O, I, A) => {
    if (p.type === "svg" ? O = "svg" : p.type === "math" && (O = "mathml"), f == null)
      D(
        p,
        m,
        k,
        x,
        b,
        O,
        I,
        A
      );
    else {
      const w = f.el && f.el._isVueCE ? f.el : null;
      try {
        w && w._beginPatch(), qe(
          f,
          p,
          x,
          b,
          O,
          I,
          A
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, D = (f, p, m, k, x, b, O, I) => {
    let A, w;
    const { props: q, shapeFlag: N, transition: B, dirs: G } = f;
    if (A = f.el = a(
      f.type,
      b,
      q && q.is,
      q
    ), N & 8 ? u(A, f.children) : N & 16 && fe(
      f.children,
      A,
      null,
      k,
      x,
      Vi(f, b),
      O,
      I
    ), G && Ut(f, null, k, "created"), X(A, f, f.scopeId, O, k), q) {
      for (const ve in q)
        ve !== "value" && !Tn(ve) && s(A, ve, null, q[ve], b, k);
      "value" in q && s(A, "value", null, q.value, b), (w = q.onVnodeBeforeMount) && dt(w, k, f);
    }
    G && Ut(f, null, k, "beforeMount");
    const oe = pc(x, B);
    oe && B.beforeEnter(A), i(A, p, m), ((w = q && q.onVnodeMounted) || oe || G) && Le(() => {
      try {
        w && dt(w, k, f), oe && B.enter(A), G && Ut(f, null, k, "mounted");
      } finally {
      }
    }, x);
  }, X = (f, p, m, k, x) => {
    if (m && g(f, m), k)
      for (let b = 0; b < k.length; b++)
        g(f, k[b]);
    if (x) {
      let b = x.subTree;
      if (p === b || Qa(b.type) && (b.ssContent === p || b.ssFallback === p)) {
        const O = x.vnode;
        X(
          f,
          O,
          O.scopeId,
          O.slotScopeIds,
          x.parent
        );
      }
    }
  }, fe = (f, p, m, k, x, b, O, I, A = 0) => {
    for (let w = A; w < f.length; w++) {
      const q = f[w] = I ? wt(f[w]) : ht(f[w]);
      _(
        null,
        q,
        p,
        m,
        k,
        x,
        b,
        O,
        I
      );
    }
  }, qe = (f, p, m, k, x, b, O) => {
    const I = p.el = f.el;
    let { patchFlag: A, dynamicChildren: w, dirs: q } = p;
    A |= f.patchFlag & 16;
    const N = f.props || _e, B = p.props || _e;
    let G;
    if (m && Zt(m, !1), (G = B.onVnodeBeforeUpdate) && dt(G, m, p, f), q && Ut(p, f, m, "beforeUpdate"), m && Zt(m, !0), (N.innerHTML && B.innerHTML == null || N.textContent && B.textContent == null) && u(I, ""), w ? We(
      f.dynamicChildren,
      w,
      I,
      m,
      k,
      Vi(p, x),
      b
    ) : O || pe(
      f,
      p,
      I,
      null,
      m,
      k,
      Vi(p, x),
      b,
      !1
    ), A > 0) {
      if (A & 16)
        $(I, N, B, m, x);
      else if (A & 2 && N.class !== B.class && s(I, "class", null, B.class, x), A & 4 && s(I, "style", N.style, B.style, x), A & 8) {
        const oe = p.dynamicProps;
        for (let ve = 0; ve < oe.length; ve++) {
          const he = oe[ve], Te = N[he], Oe = B[he];
          (Oe !== Te || he === "value") && s(I, he, Te, Oe, x, m);
        }
      }
      A & 1 && f.children !== p.children && u(I, p.children);
    } else !O && w == null && $(I, N, B, m, x);
    ((G = B.onVnodeUpdated) || q) && Le(() => {
      G && dt(G, m, p, f), q && Ut(p, f, m, "updated");
    }, k);
  }, We = (f, p, m, k, x, b, O) => {
    for (let I = 0; I < p.length; I++) {
      const A = f[I], w = p[I], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (A.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !vn(A, w) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 198) ? d(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      _(
        A,
        w,
        q,
        null,
        k,
        x,
        b,
        O,
        !0
      );
    }
  }, $ = (f, p, m, k, x) => {
    if (p !== m) {
      if (p !== _e)
        for (const b in p)
          !Tn(b) && !(b in m) && s(
            f,
            b,
            p[b],
            null,
            x,
            k
          );
      for (const b in m) {
        if (Tn(b)) continue;
        const O = m[b], I = p[b];
        O !== I && b !== "value" && s(f, b, I, O, x, k);
      }
      "value" in m && s(f, "value", p.value, m.value, x);
    }
  }, R = (f, p, m, k, x, b, O, I, A) => {
    const w = p.el = f ? f.el : o(""), q = p.anchor = f ? f.anchor : o("");
    let { patchFlag: N, dynamicChildren: B, slotScopeIds: G } = p;
    G && (I = I ? I.concat(G) : G), f == null ? (i(w, m, k), i(q, m, k), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      m,
      q,
      x,
      b,
      O,
      I,
      A
    )) : N > 0 && N & 64 && B && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === B.length ? (We(
      f.dynamicChildren,
      B,
      m,
      x,
      b,
      O,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || x && p === x.subTree) && Ka(
      f,
      p,
      !0
      /* shallow */
    )) : pe(
      f,
      p,
      m,
      q,
      x,
      b,
      O,
      I,
      A
    );
  }, ie = (f, p, m, k, x, b, O, I, A) => {
    p.slotScopeIds = I, f == null ? p.shapeFlag & 512 ? x.ctx.activate(
      p,
      m,
      k,
      O,
      A
    ) : ke(
      p,
      m,
      k,
      x,
      b,
      O,
      A
    ) : Xe(f, p, A);
  }, ke = (f, p, m, k, x, b, O) => {
    const I = f.component = wc(
      f,
      k,
      x
    );
    if (Ia(f) && (I.ctx.renderer = hn), kc(I, !1, O), I.asyncDep) {
      if (x && x.registerDep(I, Ee, O), !f.el) {
        const A = I.subTree = Ye(It);
        L(null, A, p, m), f.placeholder = A.el;
      }
    } else
      Ee(
        I,
        f,
        p,
        m,
        x,
        b,
        O
      );
  }, Xe = (f, p, m) => {
    const k = p.component = f.component;
    if (ic(f, p, m))
      if (k.asyncDep && !k.asyncResolved) {
        ye(k, p, m);
        return;
      } else
        k.next = p, k.update();
    else
      p.el = f.el, k.vnode = p;
  }, Ee = (f, p, m, k, x, b, O) => {
    const I = () => {
      if (f.isMounted) {
        let { next: N, bu: B, u: G, parent: oe, vnode: ve } = f;
        {
          const ct = Ga(f);
          if (ct) {
            N && (N.el = ve.el, ye(f, N, O)), ct.asyncDep.then(() => {
              Le(() => {
                f.isUnmounted || w();
              }, x);
            });
            return;
          }
        }
        let he = N, Te;
        Zt(f, !1), N ? (N.el = ve.el, ye(f, N, O)) : N = ve, B && Pi(B), (Te = N.props && N.props.onVnodeBeforeUpdate) && dt(Te, oe, N, ve), Zt(f, !0);
        const Oe = ss(f), lt = f.subTree;
        f.subTree = Oe, _(
          lt,
          Oe,
          // parent may have changed if it's in a teleport
          d(lt.el),
          // anchor may have changed if it's in a fragment
          Hn(lt),
          f,
          x,
          b
        ), N.el = Oe.el, he === null && rc(f, Oe.el), G && Le(G, x), (Te = N.props && N.props.onVnodeUpdated) && Le(
          () => dt(Te, oe, N, ve),
          x
        );
      } else {
        let N;
        const { el: B, props: G } = p, { bm: oe, m: ve, parent: he, root: Te, type: Oe } = f, lt = on(p);
        Zt(f, !1), oe && Pi(oe), !lt && (N = G && G.onVnodeBeforeMount) && dt(N, he, p), Zt(f, !0);
        {
          Te.ce && Te.ce._hasShadowRoot() && Te.ce._injectChildStyle(
            Oe,
            f.parent ? f.parent.type : void 0
          );
          const ct = f.subTree = ss(f);
          _(
            null,
            ct,
            m,
            k,
            f,
            x,
            b
          ), p.el = ct.el;
        }
        if (ve && Le(ve, x), !lt && (N = G && G.onVnodeMounted)) {
          const ct = p;
          Le(
            () => dt(N, he, ct),
            x
          );
        }
        (p.shapeFlag & 256 || he && on(he.vnode) && he.vnode.shapeFlag & 256) && f.a && Le(f.a, x), f.isMounted = !0, p = m = k = null;
      }
    };
    f.scope.on();
    const A = f.effect = new ra(I);
    f.scope.off();
    const w = f.update = A.run.bind(A), q = f.job = A.runIfDirty.bind(A);
    q.i = f, q.id = f.uid, A.scheduler = () => Cr(q), Zt(f, !0), w();
  }, ye = (f, p, m) => {
    p.component = f;
    const k = f.vnode.props;
    f.vnode = p, f.next = null, ac(f, p.props, k, m), uc(f, p.children, m), Tt(), Qr(f), At();
  }, pe = (f, p, m, k, x, b, O, I, A = !1) => {
    const w = f && f.children, q = f ? f.shapeFlag : 0, N = p.children, { patchFlag: B, shapeFlag: G } = p;
    if (B > 0) {
      if (B & 128) {
        Zn(
          w,
          N,
          m,
          k,
          x,
          b,
          O,
          I,
          A
        );
        return;
      } else if (B & 256) {
        zt(
          w,
          N,
          m,
          k,
          x,
          b,
          O,
          I,
          A
        );
        return;
      }
    }
    G & 8 ? (q & 16 && pn(w, x, b), N !== w && u(m, N)) : q & 16 ? G & 16 ? Zn(
      w,
      N,
      m,
      k,
      x,
      b,
      O,
      I,
      A
    ) : pn(w, x, b, !0) : (q & 8 && u(m, ""), G & 16 && fe(
      N,
      m,
      k,
      x,
      b,
      O,
      I,
      A
    ));
  }, zt = (f, p, m, k, x, b, O, I, A) => {
    f = f || rn, p = p || rn;
    const w = f.length, q = p.length, N = Math.min(w, q);
    let B;
    for (B = 0; B < N; B++) {
      const G = p[B] = A ? wt(p[B]) : ht(p[B]);
      _(
        f[B],
        G,
        m,
        null,
        x,
        b,
        O,
        I,
        A
      );
    }
    w > q ? pn(
      f,
      x,
      b,
      !0,
      !1,
      N
    ) : fe(
      p,
      m,
      k,
      x,
      b,
      O,
      I,
      A,
      N
    );
  }, Zn = (f, p, m, k, x, b, O, I, A) => {
    let w = 0;
    const q = p.length;
    let N = f.length - 1, B = q - 1;
    for (; w <= N && w <= B; ) {
      const G = f[w], oe = p[w] = A ? wt(p[w]) : ht(p[w]);
      if (vn(G, oe))
        _(
          G,
          oe,
          m,
          null,
          x,
          b,
          O,
          I,
          A
        );
      else
        break;
      w++;
    }
    for (; w <= N && w <= B; ) {
      const G = f[N], oe = p[B] = A ? wt(p[B]) : ht(p[B]);
      if (vn(G, oe))
        _(
          G,
          oe,
          m,
          null,
          x,
          b,
          O,
          I,
          A
        );
      else
        break;
      N--, B--;
    }
    if (w > N) {
      if (w <= B) {
        const G = B + 1, oe = G < q ? p[G].el : k;
        for (; w <= B; )
          _(
            null,
            p[w] = A ? wt(p[w]) : ht(p[w]),
            m,
            oe,
            x,
            b,
            O,
            I,
            A
          ), w++;
      }
    } else if (w > B)
      for (; w <= N; )
        ot(f[w], x, b, !0), w++;
    else {
      const G = w, oe = w, ve = /* @__PURE__ */ new Map();
      for (w = oe; w <= B; w++) {
        const Ze = p[w] = A ? wt(p[w]) : ht(p[w]);
        Ze.key != null && ve.set(Ze.key, w);
      }
      let he, Te = 0;
      const Oe = B - oe + 1;
      let lt = !1, ct = 0;
      const mn = new Array(Oe);
      for (w = 0; w < Oe; w++) mn[w] = 0;
      for (w = G; w <= N; w++) {
        const Ze = f[w];
        if (Te >= Oe) {
          ot(Ze, x, b, !0);
          continue;
        }
        let ut;
        if (Ze.key != null)
          ut = ve.get(Ze.key);
        else
          for (he = oe; he <= B; he++)
            if (mn[he - oe] === 0 && vn(Ze, p[he])) {
              ut = he;
              break;
            }
        ut === void 0 ? ot(Ze, x, b, !0) : (mn[ut - oe] = w + 1, ut >= ct ? ct = ut : lt = !0, _(
          Ze,
          p[ut],
          m,
          null,
          x,
          b,
          O,
          I,
          A
        ), Te++);
      }
      const Ur = lt ? hc(mn) : rn;
      for (he = Ur.length - 1, w = Oe - 1; w >= 0; w--) {
        const Ze = oe + w, ut = p[Ze], Zr = p[Ze + 1], Hr = Ze + 1 < q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Zr.el || Ya(Zr)
        ) : k;
        mn[w] === 0 ? _(
          null,
          ut,
          m,
          Hr,
          x,
          b,
          O,
          I,
          A
        ) : lt && (he < 0 || w !== Ur[he] ? Lt(ut, m, Hr, 2) : he--);
      }
    }
  }, Lt = (f, p, m, k, x = null) => {
    const { el: b, type: O, transition: I, children: A, shapeFlag: w } = f;
    if (w & 6) {
      Lt(f.component.subTree, p, m, k);
      return;
    }
    if (w & 128) {
      f.suspense.move(p, m, k);
      return;
    }
    if (w & 64) {
      O.move(f, p, m, hn);
      return;
    }
    if (O === ae) {
      i(b, p, m);
      for (let N = 0; N < A.length; N++)
        Lt(A[N], p, m, k);
      i(f.anchor, p, m);
      return;
    }
    if (O === zi) {
      M(f, p, m);
      return;
    }
    if (k !== 2 && w & 1 && I)
      if (k === 0)
        I.persisted && !b[ji] ? i(b, p, m) : (I.beforeEnter(b), i(b, p, m), Le(() => I.enter(b), x));
      else {
        const { leave: N, delayLeave: B, afterLeave: G } = I, oe = () => {
          f.ctx.isUnmounted ? r(b) : i(b, p, m);
        }, ve = () => {
          const he = b._isLeaving || !!b[ji];
          b._isLeaving && b[ji](
            !0
            /* cancelled */
          ), I.persisted && !he ? oe() : N(b, () => {
            oe(), G && G();
          });
        };
        B ? B(b, oe, ve) : ve();
      }
    else
      i(b, p, m);
  }, ot = (f, p, m, k = !1, x = !1) => {
    const {
      type: b,
      props: O,
      ref: I,
      children: A,
      dynamicChildren: w,
      shapeFlag: q,
      patchFlag: N,
      dirs: B,
      cacheIndex: G,
      memo: oe
    } = f;
    if (N === -2 && (x = !1), I != null && (Tt(), In(I, null, m, f, !0), At()), G != null && (p.renderCache[G] = void 0), q & 256) {
      p.ctx.deactivate(f);
      return;
    }
    const ve = q & 1 && B, he = !on(f);
    let Te;
    if (he && (Te = O && O.onVnodeBeforeUnmount) && dt(Te, p, f), q & 6)
      No(f.component, m, k);
    else {
      if (q & 128) {
        f.suspense.unmount(m, k);
        return;
      }
      ve && Ut(f, null, p, "beforeUnmount"), q & 64 ? f.type.remove(
        f,
        p,
        m,
        hn,
        k
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== ae || N > 0 && N & 64) ? pn(
        w,
        p,
        m,
        !1,
        !0
      ) : (b === ae && N & 384 || !x && q & 16) && pn(A, p, m), k && zr(f);
    }
    const Oe = oe != null && G == null;
    (he && (Te = O && O.onVnodeUnmounted) || ve || Oe) && Le(() => {
      Te && dt(Te, p, f), ve && Ut(f, null, p, "unmounted"), Oe && (f.el = null);
    }, m);
  }, zr = (f) => {
    const { type: p, el: m, anchor: k, transition: x } = f;
    if (p === ae) {
      Po(m, k);
      return;
    }
    if (p === zi) {
      v(f);
      return;
    }
    const b = () => {
      r(m), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (f.shapeFlag & 1 && x && !x.persisted) {
      const { leave: O, delayLeave: I } = x, A = () => O(m, b);
      I ? I(f.el, b, A) : A();
    } else
      b();
  }, Po = (f, p) => {
    let m;
    for (; f !== p; )
      m = h(f), r(f), f = m;
    r(p);
  }, No = (f, p, m) => {
    const { bum: k, scope: x, job: b, subTree: O, um: I, m: A, a: w } = f;
    ls(A), ls(w), k && Pi(k), x.stop(), b && (b.flags |= 8, ot(O, f, p, m)), I && Le(I, p), Le(() => {
      f.isUnmounted = !0;
    }, p);
  }, pn = (f, p, m, k = !1, x = !1, b = 0) => {
    for (let O = b; O < f.length; O++)
      ot(f[O], p, m, k, x);
  }, Hn = (f) => {
    if (f.shapeFlag & 6)
      return Hn(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const p = h(f.anchor || f.el), m = p && p[$l];
    return m ? h(m) : p;
  };
  let Ei = !1;
  const Lr = (f, p, m) => {
    let k;
    f == null ? p._vnode && (ot(p._vnode, null, null, !0), k = p._vnode.component) : _(
      p._vnode || null,
      f,
      p,
      null,
      null,
      null,
      m
    ), p._vnode = f, Ei || (Ei = !0, Qr(k), xa(), Ei = !1);
  }, hn = {
    p: _,
    um: ot,
    m: Lt,
    r: zr,
    mt: ke,
    mc: fe,
    pc: pe,
    pbc: We,
    n: Hn,
    o: e
  };
  return {
    render: Lr,
    hydrate: void 0,
    createApp: Ql(Lr)
  };
}
function Vi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Zt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function pc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ka(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (Y(i) && Y(r))
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      let o = r[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[s] = wt(r[s]), o.el = a.el), !n && o.patchFlag !== -2 && Ka(a, o)), o.type === Ti && (o.patchFlag === -1 && (o = r[s] = wt(o)), o.el = a.el), o.type === It && !o.el && (o.el = a.el);
    }
}
function hc(e) {
  const t = e.slice(), n = [0];
  let i, r, s, a, o;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const c = e[i];
    if (c !== 0) {
      if (r = n[n.length - 1], e[r] < c) {
        t[i] = r, n.push(i);
        continue;
      }
      for (s = 0, a = n.length - 1; s < a; )
        o = s + a >> 1, e[n[o]] < c ? s = o + 1 : a = o;
      c < e[n[s]] && (s > 0 && (t[i] = n[s - 1]), n[s] = i);
    }
  }
  for (s = n.length, a = n[s - 1]; s-- > 0; )
    n[s] = a, a = t[a];
  return n;
}
function Ga(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ga(t);
}
function ls(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ya(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ya(t.subTree) : null;
}
const Qa = (e) => e.__isSuspense;
function mc(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : Sl(e);
}
const ae = /* @__PURE__ */ Symbol.for("v-fgt"), Ti = /* @__PURE__ */ Symbol.for("v-txt"), It = /* @__PURE__ */ Symbol.for("v-cmt"), zi = /* @__PURE__ */ Symbol.for("v-stc"), On = [];
let Be = null;
function y(e = !1) {
  On.push(Be = e ? null : []);
}
function gc() {
  On.pop(), Be = On[On.length - 1] || null;
}
let Mn = 1;
function cs(e, t = !1) {
  Mn += e, e < 0 && Be && t && (Be.hasOnce = !0);
}
function Ja(e) {
  return e.dynamicChildren = Mn > 0 ? Be || rn : null, gc(), Mn > 0 && Be && Be.push(e), e;
}
function C(e, t, n, i, r, s) {
  return Ja(
    j(
      e,
      t,
      n,
      i,
      r,
      s,
      !0
    )
  );
}
function $e(e, t, n, i, r) {
  return Ja(
    Ye(
      e,
      t,
      n,
      i,
      r,
      !0
    )
  );
}
function Er(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function vn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Xa = ({ key: e }) => e ?? null, Kn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? we(e) || /* @__PURE__ */ Fe(e) || J(e) ? { i: Ve, r: e, k: t, f: !!n } : e : null);
function j(e, t = null, n = null, i = 0, r = null, s = e === ae ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Xa(t),
    ref: t && Kn(t),
    scopeId: ka,
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
    shapeFlag: s,
    patchFlag: i,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ve
  };
  return o ? (Pr(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= we(n) ? 8 : 16), Mn > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Be && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Be.push(l), l;
}
const Ye = vc;
function vc(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === Na) && (e = It), Er(e)) {
    const o = un(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Pr(o, n), Mn > 0 && !s && Be && (o.shapeFlag & 6 ? Be[Be.indexOf(e)] = o : Be.push(o)), o.patchFlag = -2, o;
  }
  if ($c(e) && (e = e.__vccOpts), t) {
    t = yc(t);
    let { class: o, style: l } = t;
    o && !we(o) && (t.class = Qe(o)), ge(l) && (/* @__PURE__ */ Sr(l) && !Y(l) && (l = Se({}, l)), t.style = _i(l));
  }
  const a = we(e) ? 1 : Qa(e) ? 128 : Il(e) ? 64 : ge(e) ? 4 : J(e) ? 2 : 0;
  return j(
    e,
    t,
    n,
    i,
    r,
    a,
    s,
    !0
  );
}
function yc(e) {
  return e ? /* @__PURE__ */ Sr(e) || Ua(e) ? Se({}, e) : e : null;
}
function un(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: a, children: o, transition: l } = e, c = t ? bc(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Xa(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Y(s) ? s.concat(Kn(t)) : [s, Kn(t)] : Kn(t)
    ) : s,
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
    ssContent: e.ssContent && un(e.ssContent),
    ssFallback: e.ssFallback && un(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Tr(
    u,
    l.clone(u)
  ), u;
}
function Or(e = " ", t = 0) {
  return Ye(Ti, null, e, t);
}
function ce(e = "", t = !1) {
  return t ? (y(), $e(It, null, e)) : Ye(It, null, e);
}
function ht(e) {
  return e == null || typeof e == "boolean" ? Ye(It) : Y(e) ? Ye(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Er(e) ? wt(e) : Ye(Ti, null, String(e));
}
function wt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : un(e);
}
function Pr(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Pr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ua(t) ? t._ctx = Ve : r === 3 && Ve && (Ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else J(t) ? (t = { default: t, _ctx: Ve }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Or(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function bc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = Qe([t.class, i.class]));
      else if (r === "style")
        t.style = _i([t.style, i.style]);
      else if (hi(r)) {
        const s = t[r], a = i[r];
        a && s !== a && !(Y(s) && s.includes(a)) ? t[r] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !mi(r) && (t[r] = a);
      } else r !== "" && (t[r] = i[r]);
  }
  return t;
}
function dt(e, t, n, i = null) {
  rt(e, t, 7, [
    n,
    i
  ]);
}
const _c = ja();
let xc = 0;
function wc(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || _c, s = {
    uid: xc++,
    vnode: e,
    type: i,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Ko(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ha(i, r),
    emitsOptions: Da(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _e,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: _e,
    data: _e,
    props: _e,
    attrs: _e,
    slots: _e,
    refs: _e,
    setupState: _e,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Xl.bind(null, s), e.ce && e.ce(s), s;
}
let Me = null;
const eo = () => Me || Ve;
let ei, Xi;
{
  const e = bi(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((a) => a(s)) : r[0](s);
    };
  };
  ei = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Me = n
  ), Xi = t(
    "__VUE_SSR_SETTERS__",
    (n) => Fn = n
  );
}
const Un = (e) => {
  const t = Me;
  return ei(e), e.scope.on(), () => {
    e.scope.off(), ei(t);
  };
}, us = () => {
  Me && Me.scope.off(), ei(null);
};
function to(e) {
  return e.vnode.shapeFlag & 4;
}
let Fn = !1;
function kc(e, t = !1, n = !1) {
  t && Xi(t);
  const { props: i, children: r } = e.vnode, s = to(e);
  sc(e, i, s, t), cc(e, r, n || t);
  const a = s ? Sc(e, t) : void 0;
  return t && Xi(!1), a;
}
function Sc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Hl);
  const { setup: i } = n;
  if (i) {
    Tt();
    const r = e.setupContext = i.length > 1 ? Tc(e) : null, s = Un(e), a = Ln(
      i,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = Js(a);
    if (At(), s(), (o || e.sp) && !on(e) && $a(e), o) {
      if (a.then(us, us), t)
        return a.then((l) => {
          ds(e, l);
        }).catch((l) => {
          wi(l, e, 0);
        });
      e.asyncDep = a;
    } else
      ds(e, a);
  } else
    no(e);
}
function ds(e, t, n) {
  J(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = ya(t)), no(e);
}
function no(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || gt);
  {
    const r = Un(e);
    Tt();
    try {
      Bl(e);
    } finally {
      At(), r();
    }
  }
}
const Cc = {
  get(e, t) {
    return Re(e, "get", ""), e[t];
  }
};
function Tc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Cc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Nr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ya(hl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in En)
        return En[n](e);
    },
    has(t, n) {
      return n in t || n in En;
    }
  })) : e.proxy;
}
function Ac(e, t = !0) {
  return J(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $c(e) {
  return J(e) && "__vccOpts" in e;
}
const ne = (e, t) => /* @__PURE__ */ bl(e, t, Fn), Ic = "3.5.35";
/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let er;
const fs = typeof window < "u" && window.trustedTypes;
if (fs)
  try {
    er = /* @__PURE__ */ fs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const io = er ? (e) => er.createHTML(e) : (e) => e, Ec = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", xt = typeof document < "u" ? document : null, ps = xt && /* @__PURE__ */ xt.createElement("template"), Pc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? xt.createElementNS(Ec, e) : t === "mathml" ? xt.createElementNS(Oc, e) : n ? xt.createElement(e, { is: n }) : xt.createElement(e);
    return e === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (e) => xt.createTextNode(e),
  createComment: (e) => xt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => xt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, r, s) {
    const a = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      ps.innerHTML = io(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = ps.content;
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
}, Nc = /* @__PURE__ */ Symbol("_vtc");
function Rc(e, t, n) {
  const i = e[Nc];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const hs = /* @__PURE__ */ Symbol("_vod"), Mc = /* @__PURE__ */ Symbol("_vsh"), Fc = /* @__PURE__ */ Symbol(""), jc = /(?:^|;)\s*display\s*:/;
function Dc(e, t, n) {
  const i = e.style, r = we(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (we(t))
        for (const a of t.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && wn(i, o, "");
        }
      else
        for (const a in t)
          n[a] == null && wn(i, a, "");
    for (const a in n) {
      a === "display" && (s = !0);
      const o = n[a];
      o != null ? zc(
        e,
        a,
        !we(t) && t ? t[a] : void 0,
        o
      ) || wn(i, a, o) : wn(i, a, "");
    }
  } else if (r) {
    if (t !== n) {
      const a = i[Fc];
      a && (n += ";" + a), i.cssText = n, s = jc.test(n);
    }
  } else t && e.removeAttribute("style");
  hs in e && (e[hs] = s ? i.display : "", e[Mc] && (i.display = "none"));
}
const ms = /\s*!important$/;
function wn(e, t, n) {
  if (Y(n))
    n.forEach((i) => wn(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Vc(e, t);
    ms.test(n) ? e.setProperty(
      Ke(i),
      n.replace(ms, ""),
      "important"
    ) : e[i] = n;
  }
}
const gs = ["Webkit", "Moz", "ms"], Li = {};
function Vc(e, t) {
  const n = Li[t];
  if (n)
    return n;
  let i = Ie(t);
  if (i !== "filter" && i in e)
    return Li[t] = i;
  i = yi(i);
  for (let r = 0; r < gs.length; r++) {
    const s = gs[r] + i;
    if (s in e)
      return Li[t] = s;
  }
  return t;
}
function zc(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && we(i) && n === i;
}
const vs = "http://www.w3.org/1999/xlink";
function ys(e, t, n, i, r, s = qo(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(vs, t.slice(6, t.length)) : e.setAttributeNS(vs, t, n) : n == null || s && !ta(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : nt(n) ? String(n) : n
  );
}
function bs(e, t, n, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? io(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const o = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
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
    o === "boolean" ? n = ta(n) : n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(r || t);
}
function Lc(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Uc(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const _s = /* @__PURE__ */ Symbol("_vei");
function Zc(e, t, n, i, r = null) {
  const s = e[_s] || (e[_s] = {}), a = s[t];
  if (i && a)
    a.value = i;
  else {
    const [o, l] = Hc(t);
    if (i) {
      const c = s[t] = Wc(
        i,
        r
      );
      Lc(e, o, c, l);
    } else a && (Uc(e, o, a, l), s[t] = void 0);
  }
}
const xs = /(?:Once|Passive|Capture)$/;
function Hc(e) {
  let t;
  if (xs.test(e)) {
    t = {};
    let i;
    for (; i = e.match(xs); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ke(e.slice(2)), t];
}
let Ui = 0;
const Bc = /* @__PURE__ */ Promise.resolve(), qc = () => Ui || (Bc.then(() => Ui = 0), Ui = Date.now());
function Wc(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const r = n.value;
    if (Y(r)) {
      const s = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        s.call(i), i._stopped = !0;
      };
      const a = r.slice(), o = [i];
      for (let l = 0; l < a.length && !i._stopped; l++) {
        const c = a[l];
        c && rt(
          c,
          t,
          5,
          o
        );
      }
    } else
      rt(
        r,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = qc(), n;
}
const ws = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kc = (e, t, n, i, r, s) => {
  const a = r === "svg";
  t === "class" ? Rc(e, i, a) : t === "style" ? Dc(e, n, i) : hi(t) ? mi(t) || Zc(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gc(e, t, i, a)) ? (bs(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ys(e, t, i, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !we(i))) ? bs(e, Ie(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ys(e, t, i, a));
};
function Gc(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ws(t) && J(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ws(t) && we(n) ? !1 : t in e;
}
function Yc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ie(t);
  return Array.isArray(n) ? n.some((r) => Ie(r) === i) : Object.keys(n).some((r) => Ie(r) === i);
}
const ks = {};
// @__NO_SIDE_EFFECTS__
function Qc(e, t, n) {
  let i = /* @__PURE__ */ Ce(e, t);
  gi(i) && (i = Se({}, i, t));
  class r extends Rr {
    constructor(a) {
      super(i, a, n);
    }
  }
  return r.def = i, r;
}
const Jc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Rr extends Jc {
  constructor(t, n = {}, i = Ts) {
    super(), this._def = t, this._props = n, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && i !== Ts ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      Se({}, t.shadowRootOptions, {
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
      if (t instanceof Rr) {
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
    this._connected = !1, ki(() => {
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
    const t = (i, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: s, styles: a } = i;
      let o;
      if (s && !Y(s))
        for (const l in s) {
          const c = s[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Wr(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[Ie(l)] = !0);
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
        de(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => te(n[i])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, i = Y(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && i.includes(r) && this._setProp(r, this[r]);
    for (const r of i.map(Ie))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(s) {
          this._setProp(r, s, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let i = n ? this.getAttribute(t) : ks;
    const r = Ie(t);
    n && this._numberProps && this._numberProps[r] && (i = Wr(i)), this._setProp(r, i, !1, !0);
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
  _setProp(t, n, i = !0, r = !1) {
    if (n !== this._props[t] && (this._dirty = !0, n === ks ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), i)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(Ke(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ke(t), n + "") : n || this.removeAttribute(Ke(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), iu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Ye(this._def, Se(t, this._props));
    return this._instance || (n.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const r = (s, a) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            gi(a[0]) ? Se({ detail: a }, a[0]) : { detail: a }
          )
        );
      };
      i.emit = (s, ...a) => {
        r(s, a), Ke(s) !== s && r(Ke(s), a);
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
    const r = this._nonce, s = this.shadowRoot, a = i ? this._getStyleAnchor(i) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(s);
    let o = null;
    for (let l = t.length - 1; l >= 0; l--) {
      const c = document.createElement("style");
      r && c.setAttribute("nonce", r), c.textContent = t[l], s.insertBefore(c, o || a), o = c, l === 0 && (i || this._styleAnchors.set(this._def, c), n && this._styleAnchors.set(n, c));
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
      const r = t[i], s = r.getAttribute("name") || "default", a = this._slots[s], o = r.parentNode;
      if (a)
        for (const l of a) {
          if (n && l.nodeType === 1) {
            const c = n + "-s", u = document.createTreeWalker(l, 1);
            l.setAttribute(c, "");
            let d;
            for (; d = u.nextNode(); )
              d.setAttribute(c, "");
          }
          o.insertBefore(l, r);
        }
      else
        for (; r.firstChild; ) o.insertBefore(r.firstChild, r);
      o.removeChild(r);
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
      const r = i.querySelectorAll("slot");
      for (let s = 0; s < r.length; s++)
        n.add(r[s]);
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
function Xc(e) {
  const t = eo(), n = t && t.ce;
  return n || null;
}
const eu = ["ctrl", "shift", "alt", "meta"], tu = {
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
  exact: (e, t) => eu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ss = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const o = tu[t[a]];
      if (o && o(r, t)) return;
    }
    return e(r, ...s);
  });
}, nu = /* @__PURE__ */ Se({ patchProp: Kc }, Pc);
let Cs;
function ro() {
  return Cs || (Cs = dc(nu));
}
const iu = (...e) => {
  ro().render(...e);
}, Ts = (...e) => {
  const t = ro().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const r = su(i);
    if (!r) return;
    const s = t._component;
    !J(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const a = n(r, !1, ru(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
};
function ru(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function su(e) {
  return we(e) ? document.querySelector(e) : e;
}
var le;
(function(e) {
  e.assertEqual = (r) => {
  };
  function t(r) {
  }
  e.assertIs = t;
  function n(r) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (r) => {
    const s = {};
    for (const a of r)
      s[a] = a;
    return s;
  }, e.getValidEnumValues = (r) => {
    const s = e.objectKeys(r).filter((o) => typeof r[r[o]] != "number"), a = {};
    for (const o of s)
      a[o] = r[o];
    return e.objectValues(a);
  }, e.objectValues = (r) => e.objectKeys(r).map(function(s) {
    return r[s];
  }), e.objectKeys = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    const s = [];
    for (const a in r)
      Object.prototype.hasOwnProperty.call(r, a) && s.push(a);
    return s;
  }, e.find = (r, s) => {
    for (const a of r)
      if (s(a))
        return a;
  }, e.isInteger = typeof Number.isInteger == "function" ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && Number.isFinite(r) && Math.floor(r) === r;
  function i(r, s = " | ") {
    return r.map((a) => typeof a == "string" ? `'${a}'` : a).join(s);
  }
  e.joinValues = i, e.jsonStringifyReplacer = (r, s) => typeof s == "bigint" ? s.toString() : s;
})(le || (le = {}));
var As;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(As || (As = {}));
const F = le.arrayToEnum([
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
]), Rt = (e) => {
  switch (typeof e) {
    case "undefined":
      return F.undefined;
    case "string":
      return F.string;
    case "number":
      return Number.isNaN(e) ? F.nan : F.number;
    case "boolean":
      return F.boolean;
    case "function":
      return F.function;
    case "bigint":
      return F.bigint;
    case "symbol":
      return F.symbol;
    case "object":
      return Array.isArray(e) ? F.array : e === null ? F.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? F.promise : typeof Map < "u" && e instanceof Map ? F.map : typeof Set < "u" && e instanceof Set ? F.set : typeof Date < "u" && e instanceof Date ? F.date : F.object;
    default:
      return F.unknown;
  }
}, T = le.arrayToEnum([
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
class Et extends Error {
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
    const n = t || function(s) {
      return s.message;
    }, i = { _errors: [] }, r = (s) => {
      for (const a of s.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(r);
        else if (a.code === "invalid_return_type")
          r(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          r(a.argumentsError);
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
    return r(this), i;
  }
  static assert(t) {
    if (!(t instanceof Et))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, le.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, i = [];
    for (const r of this.issues)
      if (r.path.length > 0) {
        const s = r.path[0];
        n[s] = n[s] || [], n[s].push(t(r));
      } else
        i.push(t(r));
    return { formErrors: i, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Et.create = (e) => new Et(e);
const tr = (e, t) => {
  let n;
  switch (e.code) {
    case T.invalid_type:
      e.received === F.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case T.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, le.jsonStringifyReplacer)}`;
      break;
    case T.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${le.joinValues(e.keys, ", ")}`;
      break;
    case T.invalid_union:
      n = "Invalid input";
      break;
    case T.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${le.joinValues(e.options)}`;
      break;
    case T.invalid_enum_value:
      n = `Invalid enum value. Expected ${le.joinValues(e.options)}, received '${e.received}'`;
      break;
    case T.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case T.invalid_return_type:
      n = "Invalid function return type";
      break;
    case T.invalid_date:
      n = "Invalid date";
      break;
    case T.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : le.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case T.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case T.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case T.custom:
      n = "Invalid input";
      break;
    case T.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case T.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case T.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, le.assertNever(e);
  }
  return { message: n };
};
let au = tr;
function ou() {
  return au;
}
const lu = (e) => {
  const { data: t, path: n, errorMaps: i, issueData: r } = e, s = [...n, ...r.path || []], a = {
    ...r,
    path: s
  };
  if (r.message !== void 0)
    return {
      ...r,
      path: s,
      message: r.message
    };
  let o = "";
  const l = i.filter((c) => !!c).slice().reverse();
  for (const c of l)
    o = c(a, { data: t, defaultError: o }).message;
  return {
    ...r,
    path: s,
    message: o
  };
};
function P(e, t) {
  const n = ou(), i = lu({
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
      n === tr ? void 0 : tr
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(i);
}
class ze {
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
    for (const r of n) {
      if (r.status === "aborted")
        return W;
      r.status === "dirty" && t.dirty(), i.push(r.value);
    }
    return { status: t.value, value: i };
  }
  static async mergeObjectAsync(t, n) {
    const i = [];
    for (const r of n) {
      const s = await r.key, a = await r.value;
      i.push({
        key: s,
        value: a
      });
    }
    return ze.mergeObjectSync(t, i);
  }
  static mergeObjectSync(t, n) {
    const i = {};
    for (const r of n) {
      const { key: s, value: a } = r;
      if (s.status === "aborted" || a.status === "aborted")
        return W;
      s.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || r.alwaysSet) && (i[s.value] = a.value);
    }
    return { status: t.value, value: i };
  }
}
const W = Object.freeze({
  status: "aborted"
}), kn = (e) => ({ status: "dirty", value: e }), Je = (e) => ({ status: "valid", value: e }), $s = (e) => e.status === "aborted", Is = (e) => e.status === "dirty", dn = (e) => e.status === "valid", ti = (e) => typeof Promise < "u" && e instanceof Promise;
var z;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(z || (z = {}));
class yt {
  constructor(t, n, i, r) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = i, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Es = (e, t) => {
  if (dn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Et(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function ee(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: i, description: r } = e;
  if (t && (n || i))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: r } : { errorMap: (a, o) => {
    const { message: l } = e;
    return a.code === "invalid_enum_value" ? { message: l ?? o.defaultError } : typeof o.data > "u" ? { message: l ?? i ?? o.defaultError } : a.code !== "invalid_type" ? { message: o.defaultError } : { message: l ?? n ?? o.defaultError };
  }, description: r };
}
class se {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Rt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Rt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new ze(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Rt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (ti(n))
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
      parsedType: Rt(t)
    }, r = this._parseSync({ data: t, path: i.path, parent: i });
    return Es(i, r);
  }
  "~validate"(t) {
    var i, r;
    const n = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Rt(t)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: t, path: [], parent: n });
        return dn(s) ? {
          value: s.value
        } : {
          issues: n.common.issues
        };
      } catch (s) {
        (r = (i = s == null ? void 0 : s.message) == null ? void 0 : i.toLowerCase()) != null && r.includes("encountered") && (this["~standard"].async = !0), n.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: n }).then((s) => dn(s) ? {
      value: s.value
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
      parsedType: Rt(t)
    }, r = this._parse({ data: t, path: i.path, parent: i }), s = await (ti(r) ? r : Promise.resolve(r));
    return Es(i, s);
  }
  refine(t, n) {
    const i = (r) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(r) : n;
    return this._refinement((r, s) => {
      const a = t(r), o = () => s.addIssue({
        code: T.custom,
        ...i(r)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((i, r) => t(i) ? !0 : (r.addIssue(typeof n == "function" ? n(i, r) : n), !1));
  }
  _refinement(t) {
    return new Qt({
      schema: this,
      typeName: K.ZodEffects,
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
    return Ct.create(this, this._def);
  }
  nullable() {
    return Jt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return vt.create(this);
  }
  promise() {
    return li.create(this, this._def);
  }
  or(t) {
    return ii.create([this, t], this._def);
  }
  and(t) {
    return ri.create(this, t, this._def);
  }
  transform(t) {
    return new Qt({
      ...ee(this._def),
      schema: this,
      typeName: K.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ci({
      ...ee(this._def),
      innerType: this,
      defaultValue: n,
      typeName: K.ZodDefault
    });
  }
  brand() {
    return new lo({
      typeName: K.ZodBranded,
      type: this,
      ...ee(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ui({
      ...ee(this._def),
      innerType: this,
      catchValue: n,
      typeName: K.ZodCatch
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
    return Fr.create(this, t);
  }
  readonly() {
    return di.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const cu = /^c[^\s-]{8,}$/i, uu = /^[0-9a-z]+$/, du = /^[0-9A-HJKMNP-TV-Z]{26}$/i, fu = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, pu = /^[a-z0-9_-]{21}$/i, hu = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, mu = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, gu = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, vu = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Zi;
const yu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, bu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, _u = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, xu = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, wu = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ku = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, so = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Su = new RegExp(`^${so}$`);
function ao(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function Cu(e) {
  return new RegExp(`^${ao(e)}$`);
}
function Tu(e) {
  let t = `${so}T${ao(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Au(e, t) {
  return !!((t === "v4" || !t) && yu.test(e) || (t === "v6" || !t) && _u.test(e));
}
function $u(e, t) {
  if (!hu.test(e))
    return !1;
  try {
    const [n] = e.split(".");
    if (!n)
      return !1;
    const i = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), r = JSON.parse(atob(i));
    return !(typeof r != "object" || r === null || "typ" in r && (r == null ? void 0 : r.typ) !== "JWT" || !r.alg || t && r.alg !== t);
  } catch {
    return !1;
  }
}
function Iu(e, t) {
  return !!((t === "v4" || !t) && bu.test(e) || (t === "v6" || !t) && xu.test(e));
}
class St extends se {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== F.string) {
      const s = this._getOrReturnCtx(t);
      return P(s, {
        code: T.invalid_type,
        expected: F.string,
        received: s.parsedType
      }), W;
    }
    const i = new ze();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (r = this._getOrReturnCtx(t, r), P(r, {
          code: T.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (r = this._getOrReturnCtx(t, r), P(r, {
          code: T.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "length") {
        const a = t.data.length > s.value, o = t.data.length < s.value;
        (a || o) && (r = this._getOrReturnCtx(t, r), a ? P(r, {
          code: T.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && P(r, {
          code: T.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), i.dirty());
      } else if (s.kind === "email")
        gu.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
          validation: "email",
          code: T.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "emoji")
        Zi || (Zi = new RegExp(vu, "u")), Zi.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
          validation: "emoji",
          code: T.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "uuid")
        fu.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
          validation: "uuid",
          code: T.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "nanoid")
        pu.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
          validation: "nanoid",
          code: T.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid")
        cu.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
          validation: "cuid",
          code: T.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid2")
        uu.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
          validation: "cuid2",
          code: T.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "ulid")
        du.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
          validation: "ulid",
          code: T.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), P(r, {
            validation: "url",
            code: T.invalid_string,
            message: s.message
          }), i.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
        validation: "regex",
        code: T.invalid_string,
        message: s.message
      }), i.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), P(r, {
        code: T.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), i.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), P(r, {
        code: T.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), P(r, {
        code: T.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "datetime" ? Tu(s).test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
        code: T.invalid_string,
        validation: "datetime",
        message: s.message
      }), i.dirty()) : s.kind === "date" ? Su.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
        code: T.invalid_string,
        validation: "date",
        message: s.message
      }), i.dirty()) : s.kind === "time" ? Cu(s).test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
        code: T.invalid_string,
        validation: "time",
        message: s.message
      }), i.dirty()) : s.kind === "duration" ? mu.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
        validation: "duration",
        code: T.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "ip" ? Au(t.data, s.version) || (r = this._getOrReturnCtx(t, r), P(r, {
        validation: "ip",
        code: T.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "jwt" ? $u(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), P(r, {
        validation: "jwt",
        code: T.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "cidr" ? Iu(t.data, s.version) || (r = this._getOrReturnCtx(t, r), P(r, {
        validation: "cidr",
        code: T.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64" ? wu.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
        validation: "base64",
        code: T.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64url" ? ku.test(t.data) || (r = this._getOrReturnCtx(t, r), P(r, {
        validation: "base64url",
        code: T.invalid_string,
        message: s.message
      }), i.dirty()) : le.assertNever(s);
    return { status: i.value, value: t.data };
  }
  _regex(t, n, i) {
    return this.refinement((r) => t.test(r), {
      validation: n,
      code: T.invalid_string,
      ...z.errToObj(i)
    });
  }
  _addCheck(t) {
    return new St({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...z.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...z.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...z.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...z.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...z.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...z.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...z.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...z.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...z.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...z.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...z.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...z.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...z.errToObj(t) });
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
      ...z.errToObj(t == null ? void 0 : t.message)
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
      ...z.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...z.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...z.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...z.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...z.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...z.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...z.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...z.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...z.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, z.errToObj(t));
  }
  trim() {
    return new St({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new St({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new St({
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
St.create = (e) => new St({
  checks: [],
  typeName: K.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ee(e)
});
function Eu(e, t) {
  const n = (e.toString().split(".")[1] || "").length, i = (t.toString().split(".")[1] || "").length, r = n > i ? n : i, s = Number.parseInt(e.toFixed(r).replace(".", "")), a = Number.parseInt(t.toFixed(r).replace(".", ""));
  return s % a / 10 ** r;
}
class fn extends se {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== F.number) {
      const s = this._getOrReturnCtx(t);
      return P(s, {
        code: T.invalid_type,
        expected: F.number,
        received: s.parsedType
      }), W;
    }
    let i;
    const r = new ze();
    for (const s of this._def.checks)
      s.kind === "int" ? le.isInteger(t.data) || (i = this._getOrReturnCtx(t, i), P(i, {
        code: T.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), P(i, {
        code: T.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), P(i, {
        code: T.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? Eu(t.data, s.value) !== 0 && (i = this._getOrReturnCtx(t, i), P(i, {
        code: T.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (i = this._getOrReturnCtx(t, i), P(i, {
        code: T.not_finite,
        message: s.message
      }), r.dirty()) : le.assertNever(s);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, z.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, z.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, z.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, z.toString(n));
  }
  setLimit(t, n, i, r) {
    return new fn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: z.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: z.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: z.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: z.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: z.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: z.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: z.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: z.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: z.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: z.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && le.isInteger(t.value));
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
fn.create = (e) => new fn({
  checks: [],
  typeName: K.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ee(e)
});
class jn extends se {
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
    if (this._getType(t) !== F.bigint)
      return this._getInvalidInput(t);
    let i;
    const r = new ze();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), P(i, {
        code: T.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), P(i, {
        code: T.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (i = this._getOrReturnCtx(t, i), P(i, {
        code: T.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : le.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return P(n, {
      code: T.invalid_type,
      expected: F.bigint,
      received: n.parsedType
    }), W;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, z.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, z.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, z.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, z.toString(n));
  }
  setLimit(t, n, i, r) {
    return new jn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: z.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new jn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: z.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: z.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: z.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: z.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: z.toString(n)
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
jn.create = (e) => new jn({
  checks: [],
  typeName: K.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ee(e)
});
class nr extends se {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== F.boolean) {
      const i = this._getOrReturnCtx(t);
      return P(i, {
        code: T.invalid_type,
        expected: F.boolean,
        received: i.parsedType
      }), W;
    }
    return Je(t.data);
  }
}
nr.create = (e) => new nr({
  typeName: K.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ee(e)
});
class ni extends se {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== F.date) {
      const s = this._getOrReturnCtx(t);
      return P(s, {
        code: T.invalid_type,
        expected: F.date,
        received: s.parsedType
      }), W;
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return P(s, {
        code: T.invalid_date
      }), W;
    }
    const i = new ze();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), P(r, {
        code: T.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), i.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), P(r, {
        code: T.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), i.dirty()) : le.assertNever(s);
    return {
      status: i.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new ni({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: z.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: z.toString(n)
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
ni.create = (e) => new ni({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: K.ZodDate,
  ...ee(e)
});
class Os extends se {
  _parse(t) {
    if (this._getType(t) !== F.symbol) {
      const i = this._getOrReturnCtx(t);
      return P(i, {
        code: T.invalid_type,
        expected: F.symbol,
        received: i.parsedType
      }), W;
    }
    return Je(t.data);
  }
}
Os.create = (e) => new Os({
  typeName: K.ZodSymbol,
  ...ee(e)
});
class ir extends se {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const i = this._getOrReturnCtx(t);
      return P(i, {
        code: T.invalid_type,
        expected: F.undefined,
        received: i.parsedType
      }), W;
    }
    return Je(t.data);
  }
}
ir.create = (e) => new ir({
  typeName: K.ZodUndefined,
  ...ee(e)
});
class rr extends se {
  _parse(t) {
    if (this._getType(t) !== F.null) {
      const i = this._getOrReturnCtx(t);
      return P(i, {
        code: T.invalid_type,
        expected: F.null,
        received: i.parsedType
      }), W;
    }
    return Je(t.data);
  }
}
rr.create = (e) => new rr({
  typeName: K.ZodNull,
  ...ee(e)
});
class Ps extends se {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Je(t.data);
  }
}
Ps.create = (e) => new Ps({
  typeName: K.ZodAny,
  ...ee(e)
});
class sr extends se {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Je(t.data);
  }
}
sr.create = (e) => new sr({
  typeName: K.ZodUnknown,
  ...ee(e)
});
class Dt extends se {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return P(n, {
      code: T.invalid_type,
      expected: F.never,
      received: n.parsedType
    }), W;
  }
}
Dt.create = (e) => new Dt({
  typeName: K.ZodNever,
  ...ee(e)
});
class Ns extends se {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const i = this._getOrReturnCtx(t);
      return P(i, {
        code: T.invalid_type,
        expected: F.void,
        received: i.parsedType
      }), W;
    }
    return Je(t.data);
  }
}
Ns.create = (e) => new Ns({
  typeName: K.ZodVoid,
  ...ee(e)
});
class vt extends se {
  _parse(t) {
    const { ctx: n, status: i } = this._processInputParams(t), r = this._def;
    if (n.parsedType !== F.array)
      return P(n, {
        code: T.invalid_type,
        expected: F.array,
        received: n.parsedType
      }), W;
    if (r.exactLength !== null) {
      const a = n.data.length > r.exactLength.value, o = n.data.length < r.exactLength.value;
      (a || o) && (P(n, {
        code: a ? T.too_big : T.too_small,
        minimum: o ? r.exactLength.value : void 0,
        maximum: a ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), i.dirty());
    }
    if (r.minLength !== null && n.data.length < r.minLength.value && (P(n, {
      code: T.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), i.dirty()), r.maxLength !== null && n.data.length > r.maxLength.value && (P(n, {
      code: T.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), i.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, o) => r.type._parseAsync(new yt(n, a, n.path, o)))).then((a) => ze.mergeArray(i, a));
    const s = [...n.data].map((a, o) => r.type._parseSync(new yt(n, a, n.path, o)));
    return ze.mergeArray(i, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new vt({
      ...this._def,
      minLength: { value: t, message: z.toString(n) }
    });
  }
  max(t, n) {
    return new vt({
      ...this._def,
      maxLength: { value: t, message: z.toString(n) }
    });
  }
  length(t, n) {
    return new vt({
      ...this._def,
      exactLength: { value: t, message: z.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
vt.create = (e, t) => new vt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: K.ZodArray,
  ...ee(t)
});
function nn(e) {
  if (e instanceof Ae) {
    const t = {};
    for (const n in e.shape) {
      const i = e.shape[n];
      t[n] = Ct.create(nn(i));
    }
    return new Ae({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof vt ? new vt({
    ...e._def,
    type: nn(e.element)
  }) : e instanceof Ct ? Ct.create(nn(e.unwrap())) : e instanceof Jt ? Jt.create(nn(e.unwrap())) : e instanceof Gt ? Gt.create(e.items.map((t) => nn(t))) : e;
}
class Ae extends se {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = le.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== F.object) {
      const c = this._getOrReturnCtx(t);
      return P(c, {
        code: T.invalid_type,
        expected: F.object,
        received: c.parsedType
      }), W;
    }
    const { status: i, ctx: r } = this._processInputParams(t), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Dt && this._def.unknownKeys === "strip"))
      for (const c in r.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const u = s[c], d = r.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new yt(r, d, r.path, c)),
        alwaysSet: c in r.data
      });
    }
    if (this._def.catchall instanceof Dt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: r.data[u] }
          });
      else if (c === "strict")
        o.length > 0 && (P(r, {
          code: T.unrecognized_keys,
          keys: o
        }), i.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of o) {
        const d = r.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new yt(r, d, r.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const d = await u.key, h = await u.value;
        c.push({
          key: d,
          value: h,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => ze.mergeObjectSync(i, c)) : ze.mergeObjectSync(i, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return z.errToObj, new Ae({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, i) => {
          var s, a;
          const r = ((a = (s = this._def).errorMap) == null ? void 0 : a.call(s, n, i).message) ?? i.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: z.errToObj(t).message ?? r
          } : {
            message: r
          };
        }
      } : {}
    });
  }
  strip() {
    return new Ae({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ae({
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
    return new Ae({
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
    return new Ae({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: K.ZodObject
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
    return new Ae({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const i of le.objectKeys(t))
      t[i] && this.shape[i] && (n[i] = this.shape[i]);
    return new Ae({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const i of le.objectKeys(this.shape))
      t[i] || (n[i] = this.shape[i]);
    return new Ae({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return nn(this);
  }
  partial(t) {
    const n = {};
    for (const i of le.objectKeys(this.shape)) {
      const r = this.shape[i];
      t && !t[i] ? n[i] = r : n[i] = r.optional();
    }
    return new Ae({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const i of le.objectKeys(this.shape))
      if (t && !t[i])
        n[i] = this.shape[i];
      else {
        let s = this.shape[i];
        for (; s instanceof Ct; )
          s = s._def.innerType;
        n[i] = s;
      }
    return new Ae({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return oo(le.objectKeys(this.shape));
  }
}
Ae.create = (e, t) => new Ae({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Dt.create(),
  typeName: K.ZodObject,
  ...ee(t)
});
Ae.strictCreate = (e, t) => new Ae({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Dt.create(),
  typeName: K.ZodObject,
  ...ee(t)
});
Ae.lazycreate = (e, t) => new Ae({
  shape: e,
  unknownKeys: "strip",
  catchall: Dt.create(),
  typeName: K.ZodObject,
  ...ee(t)
});
class ii extends se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), i = this._def.options;
    function r(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new Et(o.ctx.common.issues));
      return P(n, {
        code: T.invalid_union,
        unionErrors: a
      }), W;
    }
    if (n.common.async)
      return Promise.all(i.map(async (s) => {
        const a = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: n.data,
            path: n.path,
            parent: a
          }),
          ctx: a
        };
      })).then(r);
    {
      let s;
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
        u.status === "dirty" && !s && (s = { result: u, ctx: c }), c.common.issues.length && a.push(c.common.issues);
      }
      if (s)
        return n.common.issues.push(...s.ctx.common.issues), s.result;
      const o = a.map((l) => new Et(l));
      return P(n, {
        code: T.invalid_union,
        unionErrors: o
      }), W;
    }
  }
  get options() {
    return this._def.options;
  }
}
ii.create = (e, t) => new ii({
  options: e,
  typeName: K.ZodUnion,
  ...ee(t)
});
const _t = (e) => e instanceof ai ? _t(e.schema) : e instanceof Qt ? _t(e.innerType()) : e instanceof oi ? [e.value] : e instanceof Yt ? e.options : e instanceof or ? le.objectValues(e.enum) : e instanceof ci ? _t(e._def.innerType) : e instanceof ir ? [void 0] : e instanceof rr ? [null] : e instanceof Ct ? [void 0, ..._t(e.unwrap())] : e instanceof Jt ? [null, ..._t(e.unwrap())] : e instanceof lo || e instanceof di ? _t(e.unwrap()) : e instanceof ui ? _t(e._def.innerType) : [];
class Mr extends se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.object)
      return P(n, {
        code: T.invalid_type,
        expected: F.object,
        received: n.parsedType
      }), W;
    const i = this.discriminator, r = n.data[i], s = this.optionsMap.get(r);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (P(n, {
      code: T.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [i]
    }), W);
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
    const r = /* @__PURE__ */ new Map();
    for (const s of n) {
      const a = _t(s.shape[t]);
      if (!a.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (r.has(o))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        r.set(o, s);
      }
    }
    return new Mr({
      typeName: K.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: r,
      ...ee(i)
    });
  }
}
function ar(e, t) {
  const n = Rt(e), i = Rt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === F.object && i === F.object) {
    const r = le.objectKeys(t), s = le.objectKeys(e).filter((o) => r.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of s) {
      const l = ar(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (n === F.array && i === F.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s], o = t[s], l = ar(a, o);
      if (!l.valid)
        return { valid: !1 };
      r.push(l.data);
    }
    return { valid: !0, data: r };
  } else return n === F.date && i === F.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class ri extends se {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = (s, a) => {
      if ($s(s) || $s(a))
        return W;
      const o = ar(s.value, a.value);
      return o.valid ? ((Is(s) || Is(a)) && n.dirty(), { status: n.value, value: o.data }) : (P(i, {
        code: T.invalid_intersection_types
      }), W);
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
    ]).then(([s, a]) => r(s, a)) : r(this._def.left._parseSync({
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
ri.create = (e, t, n) => new ri({
  left: e,
  right: t,
  typeName: K.ZodIntersection,
  ...ee(n)
});
class Gt extends se {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== F.array)
      return P(i, {
        code: T.invalid_type,
        expected: F.array,
        received: i.parsedType
      }), W;
    if (i.data.length < this._def.items.length)
      return P(i, {
        code: T.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), W;
    !this._def.rest && i.data.length > this._def.items.length && (P(i, {
      code: T.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...i.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new yt(i, a, i.path, o)) : null;
    }).filter((a) => !!a);
    return i.common.async ? Promise.all(s).then((a) => ze.mergeArray(n, a)) : ze.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Gt({
      ...this._def,
      rest: t
    });
  }
}
Gt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Gt({
    items: e,
    typeName: K.ZodTuple,
    rest: null,
    ...ee(t)
  });
};
class si extends se {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== F.object)
      return P(i, {
        code: T.invalid_type,
        expected: F.object,
        received: i.parsedType
      }), W;
    const r = [], s = this._def.keyType, a = this._def.valueType;
    for (const o in i.data)
      r.push({
        key: s._parse(new yt(i, o, i.path, o)),
        value: a._parse(new yt(i, i.data[o], i.path, o)),
        alwaysSet: o in i.data
      });
    return i.common.async ? ze.mergeObjectAsync(n, r) : ze.mergeObjectSync(n, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, i) {
    return n instanceof se ? new si({
      keyType: t,
      valueType: n,
      typeName: K.ZodRecord,
      ...ee(i)
    }) : new si({
      keyType: St.create(),
      valueType: t,
      typeName: K.ZodRecord,
      ...ee(n)
    });
  }
}
class Rs extends se {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== F.map)
      return P(i, {
        code: T.invalid_type,
        expected: F.map,
        received: i.parsedType
      }), W;
    const r = this._def.keyType, s = this._def.valueType, a = [...i.data.entries()].map(([o, l], c) => ({
      key: r._parse(new yt(i, o, i.path, [c, "key"])),
      value: s._parse(new yt(i, l, i.path, [c, "value"]))
    }));
    if (i.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return W;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return W;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
Rs.create = (e, t, n) => new Rs({
  valueType: t,
  keyType: e,
  typeName: K.ZodMap,
  ...ee(n)
});
class Dn extends se {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== F.set)
      return P(i, {
        code: T.invalid_type,
        expected: F.set,
        received: i.parsedType
      }), W;
    const r = this._def;
    r.minSize !== null && i.data.size < r.minSize.value && (P(i, {
      code: T.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), n.dirty()), r.maxSize !== null && i.data.size > r.maxSize.value && (P(i, {
      code: T.too_big,
      maximum: r.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.maxSize.message
    }), n.dirty());
    const s = this._def.valueType;
    function a(l) {
      const c = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return W;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const o = [...i.data.values()].map((l, c) => s._parse(new yt(i, l, i.path, c)));
    return i.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(t, n) {
    return new Dn({
      ...this._def,
      minSize: { value: t, message: z.toString(n) }
    });
  }
  max(t, n) {
    return new Dn({
      ...this._def,
      maxSize: { value: t, message: z.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Dn.create = (e, t) => new Dn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: K.ZodSet,
  ...ee(t)
});
class ai extends se {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ai.create = (e, t) => new ai({
  getter: e,
  typeName: K.ZodLazy,
  ...ee(t)
});
class oi extends se {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return P(n, {
        received: n.data,
        code: T.invalid_literal,
        expected: this._def.value
      }), W;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
oi.create = (e, t) => new oi({
  value: e,
  typeName: K.ZodLiteral,
  ...ee(t)
});
function oo(e, t) {
  return new Yt({
    values: e,
    typeName: K.ZodEnum,
    ...ee(t)
  });
}
class Yt extends se {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return P(n, {
        expected: le.joinValues(i),
        received: n.parsedType,
        code: T.invalid_type
      }), W;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return P(n, {
        received: n.data,
        code: T.invalid_enum_value,
        options: i
      }), W;
    }
    return Je(t.data);
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
    return Yt.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Yt.create(this.options.filter((i) => !t.includes(i)), {
      ...this._def,
      ...n
    });
  }
}
Yt.create = oo;
class or extends se {
  _parse(t) {
    const n = le.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(t);
    if (i.parsedType !== F.string && i.parsedType !== F.number) {
      const r = le.objectValues(n);
      return P(i, {
        expected: le.joinValues(r),
        received: i.parsedType,
        code: T.invalid_type
      }), W;
    }
    if (this._cache || (this._cache = new Set(le.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = le.objectValues(n);
      return P(i, {
        received: i.data,
        code: T.invalid_enum_value,
        options: r
      }), W;
    }
    return Je(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
or.create = (e, t) => new or({
  values: e,
  typeName: K.ZodNativeEnum,
  ...ee(t)
});
class li extends se {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.promise && n.common.async === !1)
      return P(n, {
        code: T.invalid_type,
        expected: F.promise,
        received: n.parsedType
      }), W;
    const i = n.parsedType === F.promise ? n.data : Promise.resolve(n.data);
    return Je(i.then((r) => this._def.type.parseAsync(r, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
li.create = (e, t) => new li({
  type: e,
  typeName: K.ZodPromise,
  ...ee(t)
});
class Qt extends se {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === K.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = this._def.effect || null, s = {
      addIssue: (a) => {
        P(i, a), a.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return i.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), r.type === "preprocess") {
      const a = r.transform(i.data, s);
      if (i.common.async)
        return Promise.resolve(a).then(async (o) => {
          if (n.value === "aborted")
            return W;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: i.path,
            parent: i
          });
          return l.status === "aborted" ? W : l.status === "dirty" || n.value === "dirty" ? kn(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return W;
        const o = this._def.schema._parseSync({
          data: a,
          path: i.path,
          parent: i
        });
        return o.status === "aborted" ? W : o.status === "dirty" || n.value === "dirty" ? kn(o.value) : o;
      }
    }
    if (r.type === "refinement") {
      const a = (o) => {
        const l = r.refinement(o, s);
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
        return o.status === "aborted" ? W : (o.status === "dirty" && n.dirty(), a(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((o) => o.status === "aborted" ? W : (o.status === "dirty" && n.dirty(), a(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (r.type === "transform")
      if (i.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        if (!dn(a))
          return W;
        const o = r.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((a) => dn(a) ? Promise.resolve(r.transform(a.value, s)).then((o) => ({
          status: n.value,
          value: o
        })) : W);
    le.assertNever(r);
  }
}
Qt.create = (e, t, n) => new Qt({
  schema: e,
  typeName: K.ZodEffects,
  effect: t,
  ...ee(n)
});
Qt.createWithPreprocess = (e, t, n) => new Qt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: K.ZodEffects,
  ...ee(n)
});
class Ct extends se {
  _parse(t) {
    return this._getType(t) === F.undefined ? Je(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ct.create = (e, t) => new Ct({
  innerType: e,
  typeName: K.ZodOptional,
  ...ee(t)
});
class Jt extends se {
  _parse(t) {
    return this._getType(t) === F.null ? Je(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Jt.create = (e, t) => new Jt({
  innerType: e,
  typeName: K.ZodNullable,
  ...ee(t)
});
class ci extends se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let i = n.data;
    return n.parsedType === F.undefined && (i = this._def.defaultValue()), this._def.innerType._parse({
      data: i,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ci.create = (e, t) => new ci({
  innerType: e,
  typeName: K.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ee(t)
});
class ui extends se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), i = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, r = this._def.innerType._parse({
      data: i.data,
      path: i.path,
      parent: {
        ...i
      }
    });
    return ti(r) ? r.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Et(i.common.issues);
        },
        input: i.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new Et(i.common.issues);
        },
        input: i.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ui.create = (e, t) => new ui({
  innerType: e,
  typeName: K.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ee(t)
});
class Ms extends se {
  _parse(t) {
    if (this._getType(t) !== F.nan) {
      const i = this._getOrReturnCtx(t);
      return P(i, {
        code: T.invalid_type,
        expected: F.nan,
        received: i.parsedType
      }), W;
    }
    return { status: "valid", value: t.data };
  }
}
Ms.create = (e) => new Ms({
  typeName: K.ZodNaN,
  ...ee(e)
});
class lo extends se {
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
class Fr extends se {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return s.status === "aborted" ? W : s.status === "dirty" ? (n.dirty(), kn(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: i.path,
          parent: i
        });
      })();
    {
      const r = this._def.in._parseSync({
        data: i.data,
        path: i.path,
        parent: i
      });
      return r.status === "aborted" ? W : r.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: r.value
      }) : this._def.out._parseSync({
        data: r.value,
        path: i.path,
        parent: i
      });
    }
  }
  static create(t, n) {
    return new Fr({
      in: t,
      out: n,
      typeName: K.ZodPipeline
    });
  }
}
class di extends se {
  _parse(t) {
    const n = this._def.innerType._parse(t), i = (r) => (dn(r) && (r.value = Object.freeze(r.value)), r);
    return ti(n) ? n.then((r) => i(r)) : i(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
di.create = (e, t) => new di({
  innerType: e,
  typeName: K.ZodReadonly,
  ...ee(t)
});
var K;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(K || (K = {}));
const V = St.create, Z = fn.create, He = nr.create, co = sr.create;
Dt.create;
const me = vt.create, re = Ae.create, Vn = ii.create, Ou = Mr.create;
ri.create;
Gt.create;
const jr = si.create, Pu = ai.create, st = oi.create, xe = Yt.create;
li.create;
Ct.create;
Jt.create;
const Nu = xe([
  "eq",
  "neq",
  "in",
  "gt",
  "gte",
  "lt",
  "lte",
  "isSet",
  "notSet"
]), Fs = re({
  ref: V().min(1),
  op: Nu,
  value: Vn([V(), Z(), me(V()), me(Z())]).optional()
}), lr = Pu(() => re({
  all: me(Vn([Fs, lr])).optional(),
  any: me(Vn([Fs, lr])).optional()
}));
function uo(e) {
  return "op" in e;
}
const Ru = [
  "file.pages",
  "file.colorPages",
  "file.monoPages",
  "file.status"
], fo = "quantity", Mu = xe(["quantity", "pages", "area", "length"]), Fu = re({
  /**
   * Inclusive upper bound on the basis value. MUST be omitted on the last
   * row (open-ended) and present on every other row — validate.ts enforces
   * strictly-increasing order, which makes overlap impossible by construction.
   */
  upTo: Z().positive().optional(),
  amount: Z()
}), po = re({
  basis: Mu.default("quantity"),
  /**
   * flat:      the entire basis value is priced at the matched row's amount.
   * graduated: each band is priced at its own amount and summed
   *            (progressive-tax style).
   */
  mode: xe(["flat", "graduated"]).default("flat"),
  rows: me(Fu).min(1)
}), ju = xe(["sqm", "sqft", "sqin"]), Du = xe(["m", "ft", "in", "cm"]), Vu = xe([
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
  "perLength",
  //    × length × quantity
  "percent",
  //      % of running total (stage B)
  "multiplier",
  //   × running total (stage C)
  "setup"
  //         once per order, AFTER percent/multiplier (stage D)
]), ho = re({
  type: Vu,
  amount: Z(),
  /** perArea only: the unit `amount` is priced in. */
  areaUnit: ju.optional(),
  /** perLength only: the unit `amount` is priced in. Default "m" (engine-side). */
  lengthUnit: Du.optional(),
  /**
   * perLength only: which axis of the source W×H is the billable
   * length. Default "h" (a roll's fixed width is w; the consumed
   * length is h). "max" prices the longest side.
   */
  lengthAxis: xe(["h", "w", "max"]).optional(),
  /**
   * perArea/perLength only: id of a `dimensions` field to read W×H
   * from. Fallback when omitted: FileMetadata.canvas.
   */
  dimensionsField: V().optional(),
  /**
   * Volume/size breaks. For basis "area" the basis value is in
   * `areaUnit`; for basis "length", in `lengthUnit`.
   */
  tiers: po.optional()
}), zu = re({
  amount: Z().nonnegative().default(0),
  /** "order": added once (v1 behavior). "unit": × quantity (t-shirts, cards). */
  per: xe(["order", "unit"]).default("order"),
  /**
   * Quantity breaks on the base. basis must be "quantity"; mode "graduated"
   * requires per === "unit" (validate.ts).
   */
  tiers: po.optional()
}), Lu = re({
  currency: V().regex(/^[A-Z]{3}$/, "ISO 4217 currency code").default("USD"),
  basePrice: zu.default({}),
  /** Flat fee added once, after percent/multiplier (stage D). */
  setupFee: Z().nonnegative().optional(),
  /** Floor applied to the final total (stage E). */
  minimumPrice: Z().nonnegative().optional()
}), fi = "2.0", Uu = re({
  artworkSize: re({
    width_mm: Z().positive().optional(),
    height_mm: Z().positive().optional()
  }).optional(),
  pageCount: re({
    min: Z().int().positive().optional(),
    max: Z().int().positive().optional()
  }).optional(),
  fileCount: re({
    min: Z().int().positive().optional(),
    max: Z().int().positive().optional()
  }).optional(),
  bleed: re({ required_mm: Z().nonnegative().optional() }).optional(),
  safety: re({ min_mm: Z().nonnegative().optional() }).optional()
}).strict(), Zu = re({
  context: Uu.optional()
}), mo = re({
  id: V().min(1),
  label: V(),
  description: V().optional(),
  /** http(s) URL or data: URI (builder can embed small images). */
  image: V().optional(),
  /** Hex color for swatch display. */
  color: V().optional(),
  /** Default selection for the parent field. */
  default: He().optional(),
  /** Merchant SKU fragment for this choice (used by resolveSku / adapters). */
  sku: V().optional(),
  /** Manually mark a choice unavailable without deleting it. */
  disabled: He().optional(),
  /** Price changes applied when this choice is selected. */
  priceModifiers: me(ho).default([]),
  /** What selecting this choice tells the Filecheck intake (if any). */
  filecheck: Zu.optional()
}), Vt = re({
  id: V().min(1),
  label: V().optional(),
  helpText: V().optional(),
  required: He().default(!1),
  visibleWhen: lr.optional(),
  /** Price changes applied just for having this field visible. */
  priceModifiers: me(ho).default([]),
  /**
   * Semantic role for the Page API (docs/page-api-v1.md): lets on-page
   * integrations find "the size field" regardless of the merchant's own
   * ids/labels. v1 vocabulary: "size" | "pages" | "material" |
   * "orientation" — deliberately an OPEN string (a role is a label, never
   * behavior; unknown roles pass through). At most one field per role per
   * document (validate.ts). Field types quantity/dimensions/file need no
   * role — they are semantic by themselves.
   */
  role: V().optional()
}), Hu = Vt.extend({
  type: st("select-one"),
  display: xe(["cards", "grid", "swatches", "pills", "dropdown", "list"]).default("pills"),
  options: me(mo).min(1)
}), Bu = Vt.extend({
  type: st("select-many"),
  display: xe(["cards", "grid", "swatches", "pills", "list"]).default("list"),
  options: me(mo).min(1),
  minSelect: Z().int().nonnegative().default(0),
  maxSelect: Z().int().positive().optional()
}), qu = Vt.extend({
  type: st("quantity"),
  display: xe(["stepper", "pills", "dropdown", "input"]).default("stepper"),
  min: Z().int().positive().default(1),
  max: Z().int().positive().optional(),
  step: Z().int().positive().default(1),
  defaultValue: Z().int().positive().default(1),
  /** Preset quantities for pills/dropdown display (e.g. 100/250/500/1000). */
  presets: me(Z().int().positive()).optional()
}), Wu = Vt.extend({
  type: st("number"),
  display: xe(["stepper", "slider", "input"]).default("input"),
  min: Z().optional(),
  max: Z().optional(),
  step: Z().positive().optional(),
  defaultValue: Z().optional()
}), Ku = Vt.extend({
  type: st("text"),
  display: xe(["input", "textarea"]).default("input"),
  placeholder: V().optional(),
  maxLength: Z().int().positive().optional()
}), cr = xe(["mm", "cm", "in"]), Gu = Vt.extend({
  type: st("dimensions"),
  display: xe(["inputs"]).default("inputs"),
  /** Units the customer may pick between. */
  units: me(cr).min(1).default(["mm"]),
  defaultUnit: cr.default("mm"),
  /** Constraints, expressed in defaultUnit. */
  minW: Z().positive().optional(),
  maxW: Z().positive().optional(),
  minH: Z().positive().optional(),
  maxH: Z().positive().optional(),
  defaultValue: re({ w: Z().positive(), h: Z().positive() }).optional()
}), Yu = re({
  /** Saved Filecheck workflow that validates uploads for this field. */
  workflowId: V().min(1).optional(),
  /**
   * Inline (transient) workflow object, passed verbatim to the Filecheck
   * element. Preview-tagged server-side: unmetered, webhook-silent —
   * which is what lets demo blueprints run against any tenant with
   * nothing configured in the Filecheck admin. Wins over `workflowId`
   * when both are present. Rules only — a blueprint is public data and
   * must never carry keys or secrets.
   */
  workflow: jr(co()).optional()
}).refine((e) => !!e.workflowId || !!e.workflow, {
  message: "filecheck needs a workflowId or an inline workflow"
}), Qu = Vt.extend({
  type: st("file"),
  /**
   * dropzone: the built-in upload, with any registered producers (Print.App
   * designer, template picker) offered around it. producer: NO direct
   * upload - only the registered producers render; the merchant is
   * showcasing the designer, not file drops.
   */
  display: xe(["dropzone", "producer"]).default("dropzone"),
  accept: me(V()).default(["application/pdf"]),
  /** Which data-feed provider enriches the FileMetadata. */
  providerId: V().optional(),
  /**
   * Filecheck-backed upload: replaces the dropzone with the Filecheck
   * intake element when the storefront supplies an element-mode provider
   * config (publishable key lives there — NEVER in this blueprint).
   */
  filecheck: Yu.optional()
}), Ju = Vt.extend({
  type: st("info"),
  /** summary: live selection recap. note: static text block. */
  display: xe(["summary", "note"]).default("note"),
  body: V().optional()
}), Xu = Ou("type", [
  Hu,
  Bu,
  qu,
  Wu,
  Ku,
  Gu,
  Qu,
  Ju
]);
function at(e) {
  return e.type === "select-one" || e.type === "select-many";
}
const ed = re({
  id: V().min(1),
  title: V(),
  fields: me(Xu)
}), td = re({
  /** axisFieldId -> choiceId, exactly one entry per axis (validate.ts). */
  select: jr(V()),
  sku: V().optional(),
  /** Absolute replacement for pricing.basePrice.amount while selected. */
  price: Z().nonnegative().optional(),
  available: He().default(!0),
  /** Platform hook (e.g. Shopify variant GID) for adapters that map to real variants. */
  platformVariantId: V().optional()
}), nd = re({
  /** Field ids of select-one fields forming the matrix (e.g. ["size","color"]). */
  axes: me(V().min(1)).min(1),
  combinations: me(td)
}), Dr = re({
  version: st(fi).default(fi),
  productId: V().min(1),
  title: V(),
  /** stacked: all sections at once. wizard: one section per step. */
  layout: xe(["stacked", "wizard"]).default("stacked"),
  pricing: Lu.default({}),
  variants: nd.optional(),
  sections: me(ed)
});
re({
  w: Z().positive(),
  h: Z().positive(),
  unit: cr
});
function Ot(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && typeof e.w == "number" && typeof e.h == "number";
}
const go = /* @__PURE__ */ new Set([
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
]), vo = /* @__PURE__ */ new Set(["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"]);
function id(e) {
  const t = e.toUpperCase();
  return go.has(t) ? 0 : vo.has(t) ? 3 : 2;
}
function rd(e) {
  return /^[A-Z]{3}$/.test(e) && (go.has(e) || vo.has(e) || sd.has(e));
}
const sd = /* @__PURE__ */ new Set([
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
function yo(e) {
  const t = Dr.safeParse(e);
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
  const n = bo(t.data);
  return {
    ok: !n.some((i) => i.severity === "error"),
    value: t.data,
    issues: n
  };
}
Dr.superRefine((e, t) => {
  for (const n of bo(e))
    n.severity === "error" && t.addIssue({
      code: T.custom,
      path: n.path,
      message: `${n.code}: ${n.message}`
    });
});
function bo(e) {
  const t = [], n = (l, c, u, d = "error") => t.push({ path: l, code: c, message: u, severity: d }), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  let a = 0, o = !1;
  e.sections.forEach((l, c) => {
    r.has(l.id) && n(["sections", c, "id"], "duplicate-section-id", `Duplicate section id "${l.id}".`), r.add(l.id), l.fields.forEach((u, d) => {
      const h = ["sections", c, "fields", d];
      if (i.has(u.id) ? n([...h, "id"], "duplicate-field-id", `Duplicate field id "${u.id}".`) : i.set(u.id, { field: u, path: h }), (u.id === fo || u.id.startsWith("file.")) && n([...h, "id"], "reserved-field-id", `Field id "${u.id}" is reserved for condition refs.`), u.type === "quantity" && (a += 1, a > 1 && n(h, "multiple-quantity-fields", "Only one quantity field is allowed per product.")), u.role) {
        const g = s.get(u.role);
        g ? n([...h, "role"], "duplicate-role", `Role "${u.role}" is already used by field "${g}" — only one field per role.`) : s.set(u.role, u.id);
      }
      u.type === "file" && (o = !0);
    });
  });
  for (const { field: l, path: c } of i.values()) {
    ad(l, c, n), od(l, c, n), ld(l, c, i, n);
    const u = [
      { mods: l.priceModifiers, base: [...c, "priceModifiers"] }
    ];
    at(l) && l.options.forEach((d, h) => {
      u.push({
        mods: d.priceModifiers,
        base: [...c, "options", h, "priceModifiers"]
      });
    });
    for (const { mods: d, base: h } of u)
      d.forEach((g, E) => {
        ud(g, [...h, E], i, o, n);
      });
  }
  return dd(e.pricing.basePrice, ["pricing", "basePrice"], n), e.variants && fd(e, i, n), rd(e.pricing.currency) || n(["pricing", "currency"], "unknown-currency", `Currency "${e.pricing.currency}" is not in the known list; totals will round to 2 decimals.`, "warning"), t;
}
function ad(e, t, n) {
  var i, r;
  if (e.type === "quantity" || e.type === "number") {
    const { min: s, max: a, defaultValue: o } = e;
    if (s !== void 0 && a !== void 0 && s > a ? n([...t, "min"], "min-gt-max", `min (${s}) exceeds max (${a}).`) : o !== void 0 && (s !== void 0 && o < s || a !== void 0 && o > a) && n([...t, "defaultValue"], "default-out-of-range", `defaultValue (${o}) is outside [min, max].`), e.type === "quantity" && e.presets) {
      for (const l of e.presets)
        if (e.min !== void 0 && l < e.min || e.max !== void 0 && l > e.max) {
          n([...t, "presets"], "default-out-of-range", `Preset ${l} is outside [min, max].`);
          break;
        }
    }
  }
  e.type === "select-many" && e.maxSelect !== void 0 && e.minSelect > e.maxSelect && n([...t, "minSelect"], "min-gt-max", `minSelect (${e.minSelect}) exceeds maxSelect (${e.maxSelect}).`), e.type === "dimensions" && (e.minW !== void 0 && e.maxW !== void 0 && e.minW > e.maxW && n([...t, "minW"], "min-gt-max", `minW (${e.minW}) exceeds maxW (${e.maxW}).`), e.minH !== void 0 && e.maxH !== void 0 && e.minH > e.maxH && n([...t, "minH"], "min-gt-max", `minH (${e.minH}) exceeds maxH (${e.maxH}).`)), e.type === "file" && (e.providerId === "filecheck" && !((i = e.filecheck) != null && i.workflowId) && !((r = e.filecheck) != null && r.workflow) && n([...t, "filecheck"], "filecheck-missing-workflow", "Filecheck provider selected but no workflow (id or inline) set; the default uploader will be used.", "warning"), e.filecheck && e.providerId !== "filecheck" && n([...t, "providerId"], "filecheck-missing-workflow", 'Filecheck settings are present but providerId is not "filecheck"; they will be ignored.', "warning"));
}
function od(e, t, n) {
  if (!at(e))
    return;
  const i = /* @__PURE__ */ new Set();
  let r = 0;
  e.options.forEach((s, a) => {
    i.has(s.id) && n([...t, "options", a, "id"], "duplicate-choice-id", `Duplicate choice id "${s.id}" in field "${e.id}".`), i.add(s.id), s.default && (r += 1);
  }), e.type === "select-one" && r > 1 && n([...t, "options"], "too-many-defaults", `select-one field "${e.id}" has ${r} default choices.`), e.type === "select-many" && e.maxSelect !== void 0 && r > e.maxSelect && n([...t, "options"], "too-many-defaults", `Default choices (${r}) exceed maxSelect (${e.maxSelect}).`);
}
function ld(e, t, n, i) {
  if (!e.visibleWhen)
    return;
  const r = [...t, "visibleWhen"], s = (a, o) => {
    if (uo(a)) {
      const l = Ru.includes(a.ref), c = a.ref === fo, u = n.get(a.ref);
      if (!l && !c && !u) {
        i(o, "dangling-condition-ref", `Condition references unknown field "${a.ref}".`);
        return;
      }
      if (a.ref === e.id && i(o, "self-condition-ref", `Field "${e.id}" references itself.`), u && at(u.field) && (a.op === "eq" || a.op === "neq" || a.op === "in")) {
        const d = new Set(u.field.options.map((g) => g.id)), h = Array.isArray(a.value) ? a.value : a.value !== void 0 ? [a.value] : [];
        for (const g of h)
          typeof g == "string" && !d.has(g) && i(o, "unknown-condition-choice", `"${g}" is not a choice of field "${a.ref}".`, "warning");
      }
      return;
    }
    (a.all ?? []).forEach((l, c) => s(l, [...o, "all", c])), (a.any ?? []).forEach((l, c) => s(l, [...o, "any", c]));
  };
  s(e.visibleWhen, r);
}
function _o(e, t, n) {
  let i = 0;
  e.rows.forEach((r, s) => {
    if (s === e.rows.length - 1) {
      r.upTo !== void 0 && n([...t, "rows", s, "upTo"], "tier-row-order", "The last tier row must be open-ended (omit upTo).");
      return;
    }
    if (r.upTo === void 0) {
      n([...t, "rows", s, "upTo"], "tier-row-order", "Only the last tier row may omit upTo.");
      return;
    }
    r.upTo <= i && n([...t, "rows", s, "upTo"], "tier-row-order", `Tier upTo values must strictly increase (${r.upTo} after ${i}).`), i = r.upTo;
  });
}
const cd = /* @__PURE__ */ new Set(["fixed", "percent", "multiplier", "setup"]);
function ud(e, t, n, i, r) {
  if (e.tiers && (_o(e.tiers, [...t, "tiers"], r), e.tiers.mode === "graduated" && cd.has(e.type) && r([...t, "tiers", "mode"], "tier-basis-invalid", `Graduated tiers are meaningless on a "${e.type}" modifier.`), e.tiers.basis === "pages" && !i && r([...t, "tiers", "basis"], "pages-basis-without-file", "Pages-based tiers need a file field to supply page counts.", "warning")), (e.type === "perPage" || e.type === "perColorPage" || e.type === "perMonoPage") && !i && r([...t, "type"], "pages-basis-without-file", `"${e.type}" pricing needs a file field to supply page counts.`, "warning"), e.type === "perArea" || e.type === "perLength") {
    const s = e.type.toLowerCase();
    if (e.dimensionsField !== void 0) {
      const a = n.get(e.dimensionsField);
      (!a || a.field.type !== "dimensions") && r([...t, "dimensionsField"], `${s}-dangling-dims`, `"${e.dimensionsField}" is not a dimensions field.`);
    } else i || r([...t, "type"], `${s}-missing-source`, `${e.type} pricing has no dimensions field and no file field to read a canvas from.`, "warning");
  }
}
function dd(e, t, n) {
  e.tiers && (_o(e.tiers, [...t, "tiers"], n), e.tiers.basis !== "quantity" && n([...t, "tiers", "basis"], "tier-basis-invalid", "Base price tiers must use the quantity basis."), e.tiers.mode === "graduated" && e.per === "order" && n([...t, "tiers", "mode"], "tier-basis-invalid", 'Graduated base tiers require per: "unit".'));
}
function fd(e, t, n) {
  const i = e.variants;
  if (!i)
    return;
  const r = /* @__PURE__ */ new Map();
  i.axes.forEach((o, l) => {
    const c = t.get(o);
    if (!c || c.field.type !== "select-one") {
      n(["variants", "axes", l], "variant-axis-invalid", `Variant axis "${o}" must reference a select-one field.`);
      return;
    }
    r.set(o, new Set(c.field.options.map((u) => u.id)));
  });
  const s = /* @__PURE__ */ new Set(), a = new Set(i.axes);
  i.combinations.forEach((o, l) => {
    const c = Object.keys(o.select);
    if (new Set(c).size !== a.size || c.some((h) => !a.has(h))) {
      n(["variants", "combinations", l, "select"], "variant-combo-invalid", "Combination keys must exactly match the variant axes.");
      return;
    }
    for (const [h, g] of Object.entries(o.select)) {
      const E = r.get(h);
      E && !E.has(g) && n(["variants", "combinations", l, "select", h], "variant-combo-invalid", `"${g}" is not a choice of axis "${h}".`);
    }
    const d = i.axes.map((h) => o.select[h]).join("\0");
    s.has(d) && n(["variants", "combinations", l], "variant-combo-duplicate", "Duplicate variant combination."), s.add(d), o.price !== void 0 && e.pricing.basePrice.tiers && n(["variants", "combinations", l, "price"], "variant-price-with-base-tiers", "Combination price overrides only the untiered base amount; base tiers still apply.", "warning");
  });
}
const ur = "1.0", pd = re({
  /** Minimum quantity required to trigger this tier (inclusive). */
  minQty: Z().nonnegative(),
  /** Maximum quantity for this tier (inclusive). If omitted, tier spans to infinity. */
  maxQty: Z().nonnegative().optional(),
  /** Price/amount applied for this tier. */
  amount: Z()
}), xo = re({
  type: xe([
    "fixed",
    "perUnit",
    "perPage",
    "perColorPage",
    "perMonoPage",
    "percent",
    "multiplier"
  ]),
  amount: Z(),
  tiers: me(pd).optional()
}), hd = re({
  /** The field id whose value gates visibility. */
  field: V(),
  /** Show when the field's selected value equals one of these. */
  equals: Vn([V(), me(V())]).optional(),
  /** Show only when a value is present (any non-empty selection). */
  isSet: He().optional()
}), md = re({
  id: V().min(1),
  label: V(),
  description: V().optional(),
  image: V().url().optional(),
  color: V().optional(),
  default: He().optional(),
  priceModifiers: me(xo).default([]),
  /** Dead in v1 runtime; dropped by migration. */
  reveals: me(V()).default([])
}), gd = xe([
  "card-select",
  "image-grid",
  "swatch",
  "pill-toggle",
  "dropdown",
  "number-stepper",
  "file-upload",
  "summary"
]), vd = re({
  id: V().min(1),
  type: gd,
  label: V().optional(),
  helpText: V().optional(),
  required: He().default(!1),
  options: me(md).default([]),
  min: Z().optional(),
  max: Z().optional(),
  step: Z().optional(),
  defaultValue: Vn([V(), Z()]).optional(),
  accept: me(V()).optional(),
  providerId: V().optional(),
  visibleWhen: hd.optional(),
  priceModifiers: me(xo).default([])
}), yd = re({
  id: V().min(1),
  title: V(),
  layout: xe(["stacked", "tabs"]).default("stacked"),
  fields: me(vd)
}), bd = re({
  version: st(ur).default(ur),
  productId: V().min(1),
  title: V(),
  currency: V().default("USD"),
  basePrice: Z().nonnegative().default(0),
  sections: me(yd)
});
class pi extends Error {
  constructor(n) {
    const i = n.map((r) => `${r.code} at ${r.path.join(".") || "<root>"}: ${r.message}`).join("; ");
    super(`Invalid product options: ${i}`);
    Br(this, "issues");
    this.name = "ProductOptionsError", this.issues = n;
  }
}
function _d(e) {
  const t = bd.safeParse(e);
  if (!t.success)
    throw new pi(t.error.issues.map((c) => ({
      path: c.path,
      code: `schema-v1/${c.code}`,
      message: c.message,
      severity: "error"
    })));
  const n = t.data, i = [];
  let r = !1;
  const s = n.sections.some((c) => c.layout === "tabs");
  s && i.push('Section layout "tabs" promotes the whole document to the wizard layout.');
  const a = {
    version: fi,
    productId: n.productId,
    title: n.title,
    layout: s ? "wizard" : "stacked",
    pricing: {
      currency: $d(n.currency, i),
      basePrice: { amount: n.basePrice, per: "order" }
    },
    sections: n.sections.map((c) => ({
      id: c.id,
      title: c.title,
      fields: c.fields.map((u) => {
        const d = kd(u, r, i);
        return d.type === "quantity" && (r = !0), d;
      })
    }))
  }, o = Dr.parse(a), l = yo(o);
  if (!l.ok)
    throw new pi(l.issues.filter((c) => c.severity === "error"));
  return { doc: o, warnings: i };
}
function xd(e) {
  const t = typeof e == "object" && e !== null ? e.version : void 0;
  if (t === void 0 || t === fi) {
    const n = yo(e);
    if (!n.ok || !n.value)
      throw new pi(n.issues.filter((i) => i.severity === "error"));
    return { doc: n.value, warnings: [] };
  }
  if (t === ur)
    return _d(e);
  throw new pi([
    {
      path: ["version"],
      code: "unknown-version",
      message: `Unsupported schema version "${String(t)}".`,
      severity: "error"
    }
  ]);
}
function js(e, t) {
  const { doc: n, warnings: i } = xd(e);
  return n;
}
const wd = {
  "card-select": "cards",
  "image-grid": "grid",
  swatch: "swatches",
  "pill-toggle": "pills",
  dropdown: "dropdown"
};
function kd(e, t, n) {
  const i = {
    id: e.id,
    label: e.label,
    helpText: e.helpText,
    required: e.required,
    visibleWhen: Cd(e.visibleWhen),
    priceModifiers: e.priceModifiers.map((r) => wo(r, n))
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
        display: wd[e.type],
        options: e.options.map((r) => Sd(r, n))
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
        min: yn(e.min) ?? 1,
        max: yn(e.max),
        step: yn(e.step) ?? 1,
        defaultValue: yn(typeof e.defaultValue == "number" ? e.defaultValue : void 0) ?? yn(e.min) ?? 1
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
function Sd(e, t) {
  return {
    id: e.id,
    label: e.label,
    description: e.description,
    image: e.image,
    color: e.color,
    default: e.default,
    priceModifiers: e.priceModifiers.map((n) => wo(n, t))
  };
}
function Cd(e) {
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
function yn(e) {
  if (e === void 0)
    return;
  const t = Math.round(e);
  return t >= 1 ? t : void 0;
}
function wo(e, t) {
  return !e.tiers || e.tiers.length === 0 ? { type: e.type, amount: e.amount } : {
    type: e.type,
    amount: e.amount,
    tiers: {
      basis: "quantity",
      mode: "flat",
      rows: Td(e.tiers, e.amount, t)
    }
  };
}
function Td(e, t, n) {
  Ad(e) && n.push("Overlapping v1 tiers detected; earlier tiers win in the overlap (v1 behavior preserved).");
  const i = /* @__PURE__ */ new Set([1]);
  for (const o of e)
    i.add(Math.max(1, Math.ceil(o.minQty))), o.maxQty !== void 0 && i.add(Math.floor(o.maxQty) + 1);
  const r = [...i].sort((o, l) => o - l), s = (o) => {
    const l = e.find((c) => o >= c.minQty && (c.maxQty === void 0 || o <= c.maxQty));
    return l ? l.amount : t;
  }, a = [];
  for (const o of r) {
    const l = s(o), c = a[a.length - 1];
    (!c || c.amount !== l) && a.push({ start: o, amount: l });
  }
  return a.map((o, l) => {
    const c = a[l + 1];
    return c ? { upTo: c.start - 1, amount: o.amount } : { amount: o.amount };
  });
}
function Ad(e) {
  for (let t = 0; t < e.length; t++)
    for (let n = t + 1; n < e.length; n++) {
      const i = e[t], r = e[n];
      if (!i || !r)
        continue;
      const s = i.maxQty ?? 1 / 0, a = r.maxQty ?? 1 / 0;
      if (i.minQty <= a && r.minQty <= s)
        return !0;
    }
  return !1;
}
function $d(e, t) {
  const n = e.toUpperCase();
  return /^[A-Z]{3}$/.test(n) ? n : (t.push(`Currency "${e}" is not an ISO 4217 code; defaulting to USD.`), "USD");
}
const Ds = "1.0", ko = xe(["mm", "cm", "in", "pt", "px"]), Id = xe(["pending", "ready", "failed"]), Ed = xe(["info", "warning", "error"]), Od = re({
  /** 1-based page index. */
  page: Z().int().positive(),
  w: Z().nonnegative(),
  h: Z().nonnegative(),
  unit: ko.default("mm")
}), Pd = re({
  w: Z().nonnegative(),
  h: Z().nonnegative(),
  /** Bleed applied around the trim box, in `unit`. */
  bleed: Z().nonnegative().default(0),
  unit: ko.default("mm")
}), Nd = re({
  /** Dominant color model detected in the file. */
  model: xe(["RGB", "CMYK", "Gray", "Mixed", "Unknown"]).default("Unknown"),
  /** Named spot colors (e.g. Pantone) found in the file. */
  spot: me(V()).default([])
}), Rd = re({
  /** Machine-readable code, e.g. "low-dpi", "not-embedded-font", "out-of-gamut". */
  code: V(),
  severity: Ed.default("warning"),
  message: V().optional(),
  /** 1-based page index the issue applies to, if page-specific. */
  page: Z().int().positive().optional()
}), Vr = re({
  /** Contract version, for forward/backward compatibility. */
  version: st(Ds).default(Ds),
  /** Stable id assigned by the basic uploader; correlates feeds to a file. */
  fileId: V().min(1),
  /** Who produced this metadata. Free-form, but reserve known sources. */
  source: V().default("custom"),
  status: Id.default("pending"),
  /** Original file name and MIME type, if known. */
  fileName: V().optional(),
  mimeType: V().optional(),
  fileSizeBytes: Z().int().nonnegative().optional(),
  /** Total page count. Absent means "unknown" — pricing must fall back. */
  pages: Z().int().nonnegative().optional(),
  colorPages: Z().int().nonnegative().optional(),
  monoPages: Z().int().nonnegative().optional(),
  pageSizes: me(Od).optional(),
  canvas: Pd.optional(),
  colors: Nd.optional(),
  issues: me(Rd).default([]),
  /** Provider-specific extras that don't fit the core contract. */
  raw: jr(co()).optional()
}), Md = re({
  pages: He().default(!1),
  colorDetection: He().default(!1),
  pageSizes: He().default(!1),
  canvas: He().default(!1),
  preflightIssues: He().default(!1)
}), Fd = re({
  id: V().min(1),
  name: V(),
  /**
   * "push" = provider POSTs metadata to us; "pull" = we fetch from `endpoint`;
   * "element" = provider renders its own embedded uploader (e.g. the
   * Filecheck intake element) in place of the basic dropzone.
   */
  mode: xe(["push", "pull", "element"]).default("push"),
  endpoint: V().url().optional(),
  capabilities: Md.default({}),
  /** element mode: publishable key (pk_live_/pk_test_ — browser-safe, store-level). */
  publishableKey: V().optional(),
  /** element mode: optional sub-tenant scope. */
  agentId: V().optional(),
  /** element mode: override the provider SDK script URL (staging/local dev). */
  scriptUrl: V().url().optional(),
  /** element mode: override the provider iframe URL (local dev). */
  iframeSrc: V().url().optional(),
  /** element mode: create preview sessions (unmetered, webhook-suppressed). */
  preview: He().optional()
});
function So(e, t, n) {
  const i = [];
  for (const { fields: r } of e)
    for (const s of r) {
      if (s.type === "info")
        continue;
      const a = t[s.id];
      let o;
      if (at(s)) {
        const l = Array.isArray(a) ? a : typeof a == "string" ? [a] : [], c = s.options.filter((u) => l.includes(u.id)).map((u) => u.label);
        o = c.length ? c.join(", ") : void 0;
      } else s.type === "file" ? o = (n == null ? void 0 : n.fileName) ?? (n == null ? void 0 : n.fileId) : Ot(a) ? o = `${a.w} × ${a.h} ${a.unit}` : a !== void 0 && a !== "" && (o = String(a));
      o !== void 0 && i.push({
        fieldId: s.id,
        label: s.label ?? s.id,
        value: o
      });
    }
  return i;
}
const Co = {
  mm: 1e-3,
  cm: 0.01,
  in: 0.0254,
  pt: 0.0254 / 72,
  px: void 0
}, jd = {
  sqm: 1,
  sqft: 0.3048 * 0.3048,
  sqin: 0.0254 * 0.0254
};
function Vs(e, t, n, i) {
  const r = Co[n];
  return r === void 0 || e <= 0 || t <= 0 ? 0 : e * r * (t * r) / jd[i];
}
function To(e, t) {
  var r;
  const n = e.areaUnit ?? "sqm";
  if (e.dimensionsField !== void 0) {
    const s = t.selections[e.dimensionsField];
    return Ot(s) ? Vs(s.w, s.h, s.unit, n) : 0;
  }
  const i = (r = t.file) == null ? void 0 : r.canvas;
  return i ? Vs(i.w, i.h, i.unit, n) : 0;
}
function Dd(e, t) {
  var n, i, r, s;
  if (e === "quantity")
    return t.quantity;
  if (e.startsWith("file."))
    switch (e) {
      case "file.pages":
        return (n = t.file) == null ? void 0 : n.pages;
      case "file.colorPages":
        return (i = t.file) == null ? void 0 : i.colorPages;
      case "file.monoPages":
        return (r = t.file) == null ? void 0 : r.monoPages;
      case "file.status":
        return (s = t.file) == null ? void 0 : s.status;
      default:
        return;
    }
  return t.selections[e];
}
function zs(e) {
  return e !== void 0 && e !== "" && !(Array.isArray(e) && e.length === 0);
}
function Vd(e, t) {
  const n = Dd(e.ref, t);
  if (e.op === "isSet")
    return zs(n);
  if (e.op === "notSet")
    return !zs(n);
  if (n === void 0)
    return !1;
  switch (e.op) {
    case "eq":
      return Ls(n, e.value);
    case "neq":
      return !Ls(n, e.value);
    case "in": {
      const i = Array.isArray(e.value) ? e.value.map(String) : e.value !== void 0 ? [String(e.value)] : [];
      return Array.isArray(n) ? n.some((r) => i.includes(String(r))) : Ot(n) ? !1 : i.includes(String(n));
    }
    case "gt":
    case "gte":
    case "lt":
    case "lte": {
      if (Array.isArray(n) || Ot(n))
        return !1;
      const i = Number(n), r = Number(e.value);
      if (Number.isNaN(i) || Number.isNaN(r))
        return !1;
      switch (e.op) {
        case "gt":
          return i > r;
        case "gte":
          return i >= r;
        case "lt":
          return i < r;
        case "lte":
          return i <= r;
      }
    }
  }
}
function Ls(e, t) {
  if (Array.isArray(e)) {
    if (Array.isArray(t)) {
      const n = t.map(String);
      return e.some((i) => n.includes(String(i)));
    }
    return t !== void 0 && e.map(String).includes(String(t));
  }
  return Ot(e) ? !1 : Array.isArray(t) ? t.map(String).includes(String(e)) : t !== void 0 && String(e) === String(t);
}
function Ao(e, t) {
  if (!e)
    return !0;
  const n = (s) => uo(s) ? Vd(s, t) : Ao(s, t), i = e.all === void 0 || e.all.every(n), r = e.any === void 0 || e.any.length === 0 || e.any.some(n);
  return i && r;
}
function $o(e, t) {
  return Ao(e.visibleWhen, t);
}
function et(e, t) {
  const i = 10 ** id(t);
  return Math.round((e + Number.EPSILON) * i) / i;
}
function zd(e) {
  for (const t of e.sections)
    for (const n of t.fields)
      if (n.type === "quantity")
        return n;
}
function Io(e, t) {
  const n = zd(e);
  if (!n)
    return 1;
  const i = t[n.id], r = typeof i == "number" ? i : typeof i == "string" && i.trim() !== "" ? Number(i) : n.defaultValue;
  return Number.isNaN(r) ? Us(n, n.defaultValue) : Us(n, r);
}
function Us(e, t) {
  const n = e.step;
  let i = Math.round(t);
  return i = e.min + Math.round((i - e.min) / n) * n, i < e.min && (i = e.min), e.max !== void 0 && i > e.max && (i = e.min + Math.floor((e.max - e.min) / n) * n), i;
}
const Ld = {
  m: 1,
  ft: 0.3048,
  in: 0.0254,
  cm: 0.01
};
function Zs(e, t, n) {
  const i = Co[t];
  return i === void 0 || e <= 0 ? 0 : e * i / Ld[n];
}
function Hs(e, t, n) {
  return n === "w" ? e : n === "max" ? Math.max(e, t) : t;
}
function Eo(e, t) {
  var r;
  const n = e.lengthUnit ?? "m";
  if (e.dimensionsField !== void 0) {
    const s = t.selections[e.dimensionsField];
    return Ot(s) ? Zs(Hs(s.w, s.h, e.lengthAxis), s.unit, n) : 0;
  }
  const i = (r = t.file) == null ? void 0 : r.canvas;
  return i ? Zs(Hs(i.w, i.h, e.lengthAxis), i.unit, n) : 0;
}
function dr(e, t) {
  for (const n of e)
    if (n.upTo === void 0 || t <= n.upTo)
      return n;
  return e[e.length - 1];
}
function Sn(e, t) {
  let n = 0, i = 0;
  for (const r of t) {
    const a = (r.upTo === void 0 ? e : Math.min(r.upTo, e)) - i;
    if (a > 0 && (n += a * r.amount), r.upTo === void 0 || e <= r.upTo)
      break;
    i = r.upTo;
  }
  return n;
}
function Ai(e, t) {
  const n = e.variants;
  if (!n)
    return;
  const i = {};
  for (const r of n.axes) {
    const s = t[r];
    if (typeof s != "string" || s === "")
      return;
    i[r] = s;
  }
  return n.combinations.find((r) => n.axes.every((s) => r.select[s] === i[s]));
}
function Ud(e, t) {
  const n = Ai(e, t);
  if (n != null && n.sku)
    return n.sku;
  const i = [];
  for (const r of e.sections)
    for (const s of r.fields) {
      if (!at(s))
        continue;
      const a = t[s.id], o = Array.isArray(a) ? a : typeof a == "string" ? [a] : [];
      for (const l of s.options)
        o.includes(l.id) && l.sku && i.push(l.sku);
    }
  return i.length > 0 ? i.join("-") : void 0;
}
function Zd(e, t, n, i) {
  for (const a of e.sections)
    for (const o of a.fields) {
      if (o.id !== n || !at(o))
        continue;
      const l = o.options.find((c) => c.id === i);
      if (!l || l.disabled)
        return !1;
    }
  const r = e.variants;
  if (!r || !r.axes.includes(n))
    return !0;
  const s = Ai(e, { ...t, [n]: i });
  return s ? s.available : !0;
}
function Hd(e, t) {
  const n = Ai(e, t);
  if (n && !n.available)
    return !0;
  for (const i of e.sections)
    for (const r of i.fields) {
      if (!at(r))
        continue;
      const s = t[r.id], a = Array.isArray(s) ? s : typeof s == "string" ? [s] : [];
      for (const o of r.options)
        if (a.includes(o.id) && o.disabled)
          return !0;
    }
  return !1;
}
function Bd(e, t) {
  const n = t.quantity ?? Io(e, t.selections), i = {
    selections: t.selections,
    file: t.file,
    quantity: n
  }, r = e.pricing.currency, s = [], a = Ai(e, t.selections), o = Hd(e, t.selections), l = Ud(e, t.selections), c = qd(e.pricing.basePrice, a == null ? void 0 : a.price, n);
  s.push({
    sourceId: "base",
    label: "Base price",
    stage: "base",
    type: "base",
    amount: et(c, r)
  });
  let u = c;
  const d = Wd(e, i);
  for (const { sourceId: _, label: H, modifier: L } of d) {
    const U = Gd(L, i);
    U !== void 0 && (u += U, s.push({
      sourceId: _,
      label: H,
      stage: "additive",
      type: L.type,
      amount: et(U, r)
    }));
  }
  const h = u;
  for (const { sourceId: _, label: H, modifier: L } of d) {
    if (L.type !== "percent")
      continue;
    const U = Ft(L, i), M = u * (U / 100);
    u += M, s.push({
      sourceId: _,
      label: H,
      stage: "percent",
      type: "percent",
      amount: et(M, r)
    });
  }
  for (const { sourceId: _, label: H, modifier: L } of d) {
    if (L.type !== "multiplier")
      continue;
    const U = Ft(L, i), M = u * U - u;
    u += M, s.push({
      sourceId: _,
      label: H,
      stage: "multiplier",
      type: "multiplier",
      amount: et(M, r)
    });
  }
  e.pricing.setupFee !== void 0 && e.pricing.setupFee > 0 && (u += e.pricing.setupFee, s.push({
    sourceId: "setup-fee",
    label: "Setup fee",
    stage: "setup",
    type: "setup",
    amount: et(e.pricing.setupFee, r)
  }));
  for (const { sourceId: _, label: H, modifier: L } of d) {
    if (L.type !== "setup")
      continue;
    const U = Ft(L, i);
    u += U, s.push({
      sourceId: _,
      label: H,
      stage: "setup",
      type: "setup",
      amount: et(U, r)
    });
  }
  const g = Math.max(e.pricing.minimumPrice ?? 0, 0);
  if (u < g) {
    const _ = g - u;
    u = g, s.push({
      sourceId: "adjustment:minimum",
      label: "Minimum order adjustment",
      stage: "adjustment",
      type: "minimum",
      amount: et(_, r)
    });
  }
  const E = et(u, r);
  return {
    currency: r,
    quantity: n,
    unavailable: o,
    sku: l,
    base: et(c, r),
    subtotal: et(h, r),
    total: E,
    unitPrice: et(u / Math.max(n, 1), r),
    lines: s
  };
}
function qd(e, t, n) {
  const i = t ?? e.amount, r = e.tiers;
  return e.per === "order" ? r ? dr(r.rows, n).amount : i : r ? r.mode === "graduated" ? Sn(n, r.rows) : dr(r.rows, n).amount * n : i * n;
}
function Wd(e, t) {
  const n = [];
  for (const i of e.sections)
    for (const r of i.fields) {
      if (!$o(r, t))
        continue;
      for (const a of r.priceModifiers)
        n.push({
          sourceId: r.id,
          label: r.label ?? r.id,
          modifier: a
        });
      if (!at(r))
        continue;
      const s = Kd(r.id, t.selections);
      for (const a of r.options)
        if (s.includes(a.id))
          for (const o of a.priceModifiers)
            n.push({
              sourceId: `${r.id}:${a.id}`,
              label: a.label,
              modifier: o
            });
    }
  return n;
}
function Kd(e, t) {
  const n = t[e];
  return n === void 0 ? [] : Array.isArray(n) ? n : typeof n == "object" ? [] : [String(n)];
}
function Cn(e, t) {
  var n, i;
  switch (((n = e.tiers) == null ? void 0 : n.basis) ?? "quantity") {
    case "quantity":
      return t.quantity;
    case "pages":
      return ((i = t.file) == null ? void 0 : i.pages) ?? 0;
    case "area":
      return To(e, t);
    case "length":
      return Eo(e, t);
  }
}
function Ft(e, t) {
  return e.tiers ? dr(e.tiers.rows, Cn(e, t)).amount : e.amount;
}
function Gd(e, t) {
  var i, r, s, a, o, l, c;
  const n = t.quantity;
  switch (e.type) {
    case "percent":
    case "multiplier":
    case "setup":
      return;
    case "fixed":
      return Ft(e, t);
    case "perUnit":
      return ((i = e.tiers) == null ? void 0 : i.mode) === "graduated" ? Sn(Cn(e, t), e.tiers.rows) : Ft(e, t) * n;
    case "perPage":
    case "perColorPage":
    case "perMonoPage": {
      const u = e.type === "perPage" ? ((r = t.file) == null ? void 0 : r.pages) ?? 0 : e.type === "perColorPage" ? ((s = t.file) == null ? void 0 : s.colorPages) ?? 0 : ((a = t.file) == null ? void 0 : a.monoPages) ?? 0;
      return ((o = e.tiers) == null ? void 0 : o.mode) === "graduated" ? Sn(Cn(e, t), e.tiers.rows) * n : Ft(e, t) * u * n;
    }
    case "perArea": {
      const u = To(e, t);
      return ((l = e.tiers) == null ? void 0 : l.mode) === "graduated" ? Sn(Cn(e, t), e.tiers.rows) * n : Ft(e, t) * u * n;
    }
    case "perLength": {
      const u = Eo(e, t);
      return ((c = e.tiers) == null ? void 0 : c.mode) === "graduated" ? Sn(Cn(e, t), e.tiers.rows) * n : Ft(e, t) * u * n;
    }
  }
}
async function Yd(e, t, n) {
  const i = n ? await Qd(n) : void 0, r = await fetch(e, {
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
  if (!r.ok) {
    const u = await r.text();
    throw new Error(`Upload authorization failed: ${u || r.status}`);
  }
  const { url: s, fields: a, fileId: o } = await r.json(), l = new FormData();
  for (const [u, d] of Object.entries(a))
    l.append(u, d);
  l.append("file", t);
  const c = await fetch(s, {
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
function Qd(e) {
  return new Promise((t, n) => {
    const i = new URL(e, window.location.href).origin;
    let r = document.getElementById("turnstile-challenge-iframe"), s = !1;
    r ? r.dataset.ready === "true" && (s = !0) : (r = document.createElement("iframe"), r.id = "turnstile-challenge-iframe", r.src = e, r.style.position = "fixed", r.style.top = "50%", r.style.left = "50%", r.style.transform = "translate(-50%, -50%)", r.style.width = "300px", r.style.height = "100px", r.style.border = "none", r.style.opacity = "0", r.style.zIndex = "-9999", r.style.pointerEvents = "none", document.body.appendChild(r));
    const a = (u) => {
      u.origin !== i || u.source !== (r == null ? void 0 : r.contentWindow) || u.data && typeof u.data == "object" && (u.data.type === "challenge-ready" ? (s = !0, r && (r.dataset.ready = "true"), c()) : u.data.type === "challenge-success" ? (l(), t(u.data.token)) : u.data.type === "challenge-error" && (l(), n(new Error(u.data.error || "Turnstile challenge failed"))));
    }, o = setTimeout(() => {
      l(), n(new Error("Turnstile challenge timed out"));
    }, 6e4);
    function l() {
      window.removeEventListener("message", a), clearTimeout(o), r && (r.style.opacity = "0", r.style.zIndex = "-9999", r.style.pointerEvents = "none");
    }
    window.addEventListener("message", a);
    const c = () => {
      var u;
      r && (r.style.opacity = "1", r.style.zIndex = "999999", r.style.pointerEvents = "auto"), (u = r.contentWindow) == null || u.postMessage({ type: "execute-challenge" }, i);
    };
    s && c();
  });
}
async function Jd(e, t) {
  if (!e.endpoint)
    throw new Error(`Provider "${e.id}" has no endpoint for pull mode.`);
  const n = `${e.endpoint.replace(/\/$/, "")}/${encodeURIComponent(t)}`, i = await fetch(n);
  if (!i.ok)
    throw new Error(`Metadata fetch failed: ${i.status}`);
  return Vr.parse(await i.json());
}
async function Xd(e, t, n = {}) {
  const i = n.intervalMs ?? 1500, r = n.maxAttempts ?? 20;
  let s = {
    version: "1.0",
    fileId: t,
    source: e.id,
    status: "pending",
    issues: []
  };
  for (let a = 0; a < r; a++) {
    try {
      if (s = await Jd(e, t), s.status === "ready" || s.status === "failed")
        return s;
    } catch {
    }
    await ef(i);
  }
  return s;
}
function ef(e) {
  return new Promise((t) => setTimeout(t, e));
}
function tf(e) {
  const t = { ...e }, n = /* @__PURE__ */ Ue(null), i = /* @__PURE__ */ Ue(!1), r = /* @__PURE__ */ Ue(null), s = /* @__PURE__ */ Ue(!1), a = /* @__PURE__ */ Xt({}), o = /* @__PURE__ */ Ue(void 0), l = /* @__PURE__ */ Ue(!1), c = ne(
    () => n.value ? Io(n.value, a) : 1
  ), u = ne(() => ({
    selections: a,
    file: o.value,
    quantity: c.value
  }));
  async function d() {
    i.value = !0, r.value = null, s.value = !1;
    try {
      if (t.inlineConfig)
        n.value = js(t.inlineConfig);
      else if (t.configUrl) {
        const S = await fetch(t.configUrl);
        if (S.status === 404 || S.status === 403) {
          s.value = !0;
          return;
        }
        if (!S.ok)
          throw new Error(`Config load failed: ${S.status}`);
        n.value = js(await S.json());
      } else
        throw new Error("No config-url or inline config provided.");
      nf(n.value, a);
    } catch (S) {
      r.value = S instanceof Error ? S.message : String(S);
    } finally {
      i.value = !1;
    }
  }
  async function h(S) {
    Object.assign(t, S);
    for (const D of Object.keys(a))
      delete a[D];
    o.value = void 0, await d();
  }
  const g = ne(() => n.value ? n.value.sections.map((S) => ({
    section: S,
    fields: S.fields.filter(
      (D) => $o(D, u.value)
    )
  })).filter((S) => S.fields.length > 0) : []), E = ne(
    () => g.value.flatMap((S) => S.fields)
  ), _ = ne(() => n.value ? Bd(n.value, {
    selections: a,
    file: o.value
  }) : null);
  function H(S, D) {
    a[S] = D;
  }
  function L(S, D) {
    if (S.type !== "select-many") {
      H(S.id, D);
      return;
    }
    const X = a[S.id], fe = Array.isArray(X) ? [...X] : [], qe = fe.indexOf(D);
    if (qe >= 0)
      fe.splice(qe, 1);
    else {
      if (S.maxSelect !== void 0 && fe.length >= S.maxSelect)
        return;
      fe.push(D);
    }
    a[S.id] = fe;
  }
  async function U(S, D) {
    if (!t.uploadEndpoint) {
      r.value = "No upload endpoint configured.";
      return;
    }
    l.value = !0;
    try {
      const X = await Yd(t.uploadEndpoint, D, t.turnstileUrl);
      o.value = {
        version: "1.0",
        fileId: X.fileId,
        source: "uploader",
        status: "ready",
        fileName: X.fileName,
        fileSizeBytes: X.fileSizeBytes,
        issues: []
      }, a[S.id] = X.fileId;
      const fe = t.provider;
      if (fe && fe.mode === "pull") {
        const qe = await Xd(fe, X.fileId);
        o.value = qe;
      }
    } catch (X) {
      r.value = X instanceof Error ? X.message : String(X);
    } finally {
      l.value = !1;
    }
  }
  function M(S) {
    (!o.value || o.value.fileId === S.fileId) && (o.value = S);
  }
  function v(S) {
    o.value = S;
  }
  return {
    schema: n,
    loading: i,
    error: r,
    unconfigured: s,
    selections: a,
    quantity: c,
    file: o,
    fileAnalyzing: l,
    evalCtx: u,
    visibleSections: g,
    visibleFields: E,
    price: _,
    /** The connected data-feed provider config, if any. */
    get provider() {
      return t.provider;
    },
    load: d,
    reload: h,
    select: H,
    toggle: L,
    handleFile: U,
    feedMetadata: M,
    setFile: v
  };
}
function nf(e, t) {
  for (const n of e.sections)
    for (const i of n.fields)
      if (t[i.id] === void 0)
        switch (i.type) {
          case "select-one": {
            const r = i.options.find((s) => s.default);
            r && (t[i.id] = r.id);
            break;
          }
          case "select-many": {
            const r = i.options.filter((s) => s.default).map((s) => s.id);
            r.length > 0 && (t[i.id] = r);
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
function rf() {
  const e = /* @__PURE__ */ Xt(/* @__PURE__ */ new Map()), t = ne(
    () => Array.from(e, ([s, a]) => ({ key: s, message: a.message }))
  ), n = ne(() => e.size > 0);
  function i(s, a) {
    const o = e.get(s);
    o && o.message === a || e.set(s, { message: a });
  }
  function r(s) {
    e.delete(s);
  }
  return { list: t, held: n, add: i, release: r };
}
const fr = 1, bn = "[print-configurator]";
function sf(e) {
  const { host: t, cfg: n, validation: i, holds: r, producers: s } = e;
  function a($) {
    return $ === void 0 ? $ : JSON.parse(JSON.stringify($));
  }
  const o = ne(() => !n.schema.value || !n.price.value ? null : {
    apiVersion: fr,
    selections: a({ ...n.selections }),
    quantity: n.quantity.value,
    price: a(n.price.value),
    file: n.file.value ? a(n.file.value) : null,
    holds: r.list.value,
    /* "Would submit() pass right now?" — holds block submit, so they
       factor in even though they do not mark any field invalid. */
    valid: i.valid.value && !r.held.value
  });
  let l = null, c = !1;
  function u($, R) {
    if (!$)
      return ["selections", "quantity", "price", "file", "holds", "valid"];
    const ie = [], ke = /* @__PURE__ */ new Set([
      ...Object.keys($.selections),
      ...Object.keys(R.selections)
    ]);
    for (const Xe of ke)
      Bt($.selections[Xe], R.selections[Xe]) || ie.push(`selections.${Xe}`);
    return $.quantity !== R.quantity && ie.push("quantity"), Bt($.price, R.price) || ie.push("price"), Bt($.file, R.file) || ie.push("file"), Bt($.holds, R.holds) || ie.push("holds"), $.valid !== R.valid && ie.push("valid"), ie;
  }
  let d = null;
  function h($) {
    d = ($ == null ? void 0 : $.source) ?? "api";
  }
  function g() {
    ki(() => {
      d = null;
    });
  }
  jt(o, ($) => {
    if (!c || !$)
      return;
    const R = u(l, $), ie = d ?? "user";
    l = $, R.length !== 0 && E("change", { ...$, source: ie, changed: R });
  });
  function E($, R) {
    t == null || t.dispatchEvent(
      new CustomEvent($, { detail: R, bubbles: !0, composed: !0 })
    );
  }
  function _() {
    l = o.value, c = !0, l && E("ready", {
      ...l,
      source: "user"
    });
  }
  function H($) {
    return $.sections.flatMap((R) => R.fields);
  }
  function L($) {
    const R = n.schema.value;
    if (!R)
      return null;
    const ie = H(R);
    return ie.find((ke) => ke.id === $) ?? ie.find((ke) => ke.role === $) ?? ie.find(
      (ke) => ($ === "quantity" || $ === "dimensions" || $ === "file") && ke.type === $
    ) ?? null;
  }
  function U($, R) {
    switch ($.type) {
      case "select-one":
        return typeof R == "string" && $.options.some((ie) => ie.id === R);
      case "select-many":
        return Array.isArray(R) && R.every(
          (ie) => typeof ie == "string" && $.options.some((ke) => ke.id === ie)
        );
      case "quantity":
      case "number":
        return typeof R == "number" && Number.isFinite(R);
      case "text":
        return typeof R == "string";
      case "dimensions":
        return typeof R == "object" && R !== null && !Array.isArray(R) && Number.isFinite(R.w) && Number.isFinite(R.h);
      default:
        return !1;
    }
  }
  function M($, R) {
    const ie = n.schema.value, ke = ie ? H(ie).find((Xe) => Xe.id === $) : null;
    return ke ? U(ke, R) ? Bt(n.selections[$], R) ? !1 : (n.select($, R), i.touch($), !0) : (console.warn(
      `${bn} setSelection: invalid value for "${$}" (${ke.type})`,
      R
    ), !1) : (console.warn(`${bn} setSelection: unknown field "${$}"`), !1);
  }
  function v($, R, ie) {
    h(ie), M($, R), g();
  }
  function S($, R) {
    if (typeof $ != "object" || $ === null) {
      console.warn(`${bn} setSelections: expected an object map`);
      return;
    }
    h(R);
    for (const [ie, ke] of Object.entries($))
      M(ie, ke);
    g();
  }
  function D() {
    const $ = n.schema.value;
    return $ ? H($).find((R) => R.type === "file") ?? null : null;
  }
  function X($) {
    const R = D();
    !R || n.selections[R.id] === $ || (n.select(R.id, $), i.touch(R.id));
  }
  function fe($, R) {
    if ($ === null) {
      const ye = D(), pe = ye ? !af(n.selections[ye.id]) : !1;
      if (n.file.value === void 0 && !pe)
        return;
      h(R), n.setFile(void 0), X(""), g();
      return;
    }
    const ie = Vr.safeParse({
      version: "1.0",
      source: "custom",
      status: "ready",
      issues: [],
      ...$
    });
    if (!ie.success) {
      console.warn(`${bn} setFile: invalid file record`, ie.error.issues);
      return;
    }
    const ke = D(), Xe = Bt(n.file.value, ie.data), Ee = !ke || n.selections[ke.id] === ie.data.fileId;
    Xe && Ee || (h(R), Xe || n.setFile(ie.data), X(ie.data.fileId), g());
  }
  function qe($, R) {
    if (typeof $ != "string" || $ === "") {
      console.warn(`${bn} addHold: a non-empty string key is required`);
      return;
    }
    h(R), r.add($, R == null ? void 0 : R.message), g();
  }
  function We($, R) {
    h(R), r.release($), g();
  }
  return {
    notifyReady: _,
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
        return o.value ? a(o.value) : null;
      },
      get schema() {
        return n.schema.value ? a(n.schema.value) : null;
      },
      field($) {
        const R = L($);
        return R ? a(R) : null;
      },
      setSelection: v,
      setSelections: S,
      setFile: fe,
      addHold: qe,
      releaseHold: We,
      /* Producer registry (docs/printapp-integration-v1.md). Not part
         of `state`: a producer is an offer available on the page, not
         an answer the customer has given, and nothing about the
         configuration changes when one appears. */
      registerProducer($, R) {
        s.register($, R);
      },
      unregisterProducer($) {
        s.unregister($);
      },
      /** Push-mode provider feed (pre-Page-API method, kept). */
      feedMetadata($) {
        n.feedMetadata($);
      },
      apiVersion: fr
    }
  };
}
function af(e) {
  return e === void 0 || e === "";
}
function Bt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != "object" || typeof t != "object" || e === null || t === null || Array.isArray(e) !== Array.isArray(t))
    return !1;
  const n = Object.keys(e), i = Object.keys(t);
  return n.length !== i.length ? !1 : n.every(
    (r) => Bt(
      e[r],
      t[r]
    )
  );
}
const Bs = "[print-configurator]", pr = 10;
function of(e) {
  const t = /* @__PURE__ */ Xt(/* @__PURE__ */ new Map()), n = ne(
    () => Array.from(t.values()).sort((o, l) => o.order - l.order)
  );
  function i(o, l) {
    if (typeof o != "string" || o === "") {
      console.warn(`${Bs} registerProducer: a non-empty string id is required`);
      return;
    }
    const c = l == null ? void 0 : l.label;
    if (typeof c != "string" || c === "") {
      console.warn(`${Bs} registerProducer: "${o}" needs a label`);
      return;
    }
    t.set(o, {
      id: o,
      label: c,
      description: l.description,
      /* Default behind the built-in upload: the merchant's own file is
         the expected answer, an alternative producer is the offer. */
      order: Number.isFinite(l.order) ? Number(l.order) : pr + 10,
      fieldId: l.fieldId
    });
  }
  function r(o) {
    t.delete(o);
  }
  function s(o, l) {
    return n.value.filter(
      (c) => c.fieldId ? c.fieldId === o : l
    );
  }
  function a(o, l) {
    var c;
    t.has(o) && ((c = e.host) == null || c.dispatchEvent(
      new CustomEvent("producer", {
        detail: {
          apiVersion: fr,
          producer: o,
          fieldId: l,
          source: "user"
        },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  return { list: n, register: i, unregister: r, forField: s, activate: a };
}
function lf(e, t, n) {
  const i = /* @__PURE__ */ Xt(/* @__PURE__ */ new Set()), r = { value: !1 }, s = ne(() => {
    const d = [];
    for (const h of e.value) {
      const g = cf(h, t);
      g && d.push({ fieldId: h.id, message: g });
    }
    return d;
  }), a = ne(
    () => {
      var d;
      return s.value.length === 0 && !(((d = n.value) == null ? void 0 : d.unavailable) ?? !1);
    }
  );
  function o(d) {
    var h;
    if (!(!i.has(d) && !r.value))
      return (h = s.value.find((g) => g.fieldId === d)) == null ? void 0 : h.message;
  }
  function l(d) {
    i.add(d);
  }
  function c() {
    r.value = !0;
    for (const d of e.value)
      i.add(d.id);
    return s.value;
  }
  function u() {
    i.clear(), r.value = !1;
  }
  return { issues: s, valid: a, errorFor: o, touch: l, touchAll: c, reset: u };
}
function cf(e, t) {
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
  if (e.type === "dimensions" && Ot(n)) {
    const r = qs(n.unit) / qs(e.defaultUnit), s = n.w * r, a = n.h * r;
    if (e.minW !== void 0 && s < e.minW || e.maxW !== void 0 && s > e.maxW)
      return `Width must be between ${e.minW ?? 0} and ${e.maxW ?? "∞"} ${e.defaultUnit}.`;
    if (e.minH !== void 0 && a < e.minH || e.maxH !== void 0 && a > e.maxH)
      return `Height must be between ${e.minH ?? 0} and ${e.maxH ?? "∞"} ${e.defaultUnit}.`;
  }
  if (e.type === "number" && typeof n == "number" && (e.min !== void 0 && n < e.min || e.max !== void 0 && n > e.max))
    return `Enter a value between ${e.min ?? "−∞"} and ${e.max ?? "∞"}.`;
}
function qs(e) {
  switch (e) {
    case "mm":
      return 1;
    case "cm":
      return 10;
    case "in":
      return 25.4;
  }
}
function $i(e, t) {
  function n() {
    const i = e(), r = t(), s = i.findIndex((a) => r.includes(a.id));
    return s >= 0 ? s : 0;
  }
  return {
    tabindexFor(i, r) {
      return r === n() ? 0 : -1;
    },
    onKeydown(i, r) {
      var o;
      const s = e();
      let a;
      switch (i.key) {
        case "ArrowRight":
        case "ArrowDown":
          a = (r + 1) % s.length;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          a = (r - 1 + s.length) % s.length;
          break;
        case "Home":
          a = 0;
          break;
        case "End":
          a = s.length - 1;
          break;
        default:
          return;
      }
      return i.preventDefault(), (o = s[a]) == null ? void 0 : o.id;
    }
  };
}
const uf = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], df = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], ff = {
  key: 0,
  class: "check",
  "aria-hidden": "true"
}, pf = ["src"], hf = { class: "card-label" }, mf = {
  key: 2,
  class: "card-description"
}, Ws = /* @__PURE__ */ Ce({
  __name: "ChoiceCards",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = $i(
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
      if (r)
        return;
      const d = s.onKeydown(c, u);
      d && !o(d) && i("pick", d);
    }
    return (c, u) => (y(), C("div", {
      class: Qe(["grid", e.field.display]),
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (y(!0), C(ae, null, Ne(e.field.options, (d, h) => (y(), C("button", {
        key: d.id,
        type: "button",
        class: Qe(["card", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice card choice-selected" : "choice card",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-label": d.label,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : te(s).tabindexFor(d, h),
        onClick: (g) => !o(d.id) && i("pick", d.id),
        onKeydown: (g) => l(g, h)
      }, [
        a(d.id) ? (y(), C("span", ff, "✓")) : ce("", !0),
        d.image ? (y(), C("img", {
          key: 1,
          src: d.image,
          alt: ""
        }, null, 8, pf)) : ce("", !0),
        j("span", hf, Q(d.label), 1),
        d.description ? (y(), C("span", mf, Q(d.description), 1)) : ce("", !0)
      ], 42, df))), 128))
    ], 10, uf));
  }
}), gf = ["id", "value", "aria-labelledby", "aria-describedby", "aria-invalid"], vf = {
  key: 0,
  value: "",
  disabled: ""
}, yf = ["value", "disabled"], bf = /* @__PURE__ */ Ce({
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
    function r(s) {
      i("pick", s.target.value);
    }
    return (s, a) => (y(), C("select", {
      id: `pc-control-${e.field.id}`,
      class: "dropdown",
      part: "dropdown",
      value: e.selectedIds[0] ?? "",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onChange: r
    }, [
      e.selectedIds.length ? ce("", !0) : (y(), C("option", vf, Q(e.field.label ? `Choose ${e.field.label.toLowerCase()}…` : "Choose…"), 1)),
      (y(!0), C(ae, null, Ne(e.field.options, (o) => (y(), C("option", {
        key: o.id,
        value: o.id,
        disabled: n.unavailableIds.includes(o.id)
      }, Q(o.label), 9, yf))), 128))
    ], 40, gf));
  }
}), _f = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], xf = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], wf = { key: 0 }, kf = { class: "choice-body" }, Sf = { class: "choice-title" }, Cf = {
  key: 0,
  class: "choice-description"
}, Tf = /* @__PURE__ */ Ce({
  __name: "ChoiceList",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = $i(
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
      if (r)
        return;
      const d = s.onKeydown(c, u);
      d && !o(d) && i("pick", d);
    }
    return (c, u) => (y(), C("div", {
      class: "choice-list",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (y(!0), C(ae, null, Ne(e.field.options, (d, h) => (y(), C("button", {
        key: d.id,
        type: "button",
        class: Qe(["choice-row", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice choice-selected" : "choice",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : te(s).tabindexFor(d, h),
        onClick: (g) => !o(d.id) && i("pick", d.id),
        onKeydown: (g) => l(g, h)
      }, [
        j("span", {
          class: Qe(["choice-indicator", { multi: r }]),
          "aria-hidden": "true"
        }, [
          a(d.id) ? (y(), C("span", wf, "✓")) : ce("", !0)
        ], 2),
        j("span", kf, [
          j("span", Sf, Q(d.label), 1),
          d.description ? (y(), C("span", Cf, Q(d.description), 1)) : ce("", !0)
        ])
      ], 42, xf))), 128))
    ], 8, _f));
  }
}), Af = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], $f = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], If = {
  key: 0,
  "aria-hidden": "true"
}, Ef = /* @__PURE__ */ Ce({
  __name: "ChoicePills",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = $i(
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
      if (r)
        return;
      const d = s.onKeydown(c, u);
      d && !o(d) && i("pick", d);
    }
    return (c, u) => (y(), C("div", {
      class: "pills",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (y(!0), C(ae, null, Ne(e.field.options, (d, h) => (y(), C("button", {
        key: d.id,
        type: "button",
        class: Qe(["pill", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice pill choice-selected" : "choice pill",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : te(s).tabindexFor(d, h),
        onClick: (g) => !o(d.id) && i("pick", d.id),
        onKeydown: (g) => l(g, h)
      }, [
        Or(Q(d.label) + " ", 1),
        a(d.id) ? (y(), C("span", If, "✓")) : ce("", !0)
      ], 42, $f))), 128))
    ], 8, Af));
  }
}), Of = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Pf = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], Nf = {
  key: 0,
  class: "swatch-check",
  "aria-hidden": "true"
}, Rf = {
  key: 0,
  class: "swatch-selected-label",
  "aria-hidden": "true"
}, Mf = /* @__PURE__ */ Ce({
  __name: "ChoiceSwatches",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = $i(
      () => n.field.options,
      () => n.selectedIds
    );
    function a(u) {
      return n.selectedIds.includes(u);
    }
    function o(u) {
      return n.unavailableIds.includes(u);
    }
    const l = ne(
      () => n.field.options.filter((u) => n.selectedIds.includes(u.id)).map((u) => u.label).join(", ")
    );
    function c(u, d) {
      if (r)
        return;
      const h = s.onKeydown(u, d);
      h && !o(h) && i("pick", h);
    }
    return (u, d) => (y(), C("div", null, [
      j("div", {
        class: "swatches",
        role: r ? "group" : "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0
      }, [
        (y(!0), C(ae, null, Ne(e.field.options, (h, g) => (y(), C("button", {
          key: h.id,
          type: "button",
          class: Qe(["swatch", { active: a(h.id), unavailable: o(h.id) }]),
          part: a(h.id) ? "choice swatch choice-selected" : "choice swatch",
          style: _i({ background: h.color }),
          role: r ? void 0 : "radio",
          "aria-checked": r ? void 0 : a(h.id),
          "aria-pressed": r ? a(h.id) : void 0,
          "aria-label": h.label,
          "aria-disabled": o(h.id) || void 0,
          tabindex: r ? 0 : te(s).tabindexFor(h, g),
          onClick: (E) => !o(h.id) && i("pick", h.id),
          onKeydown: (E) => c(E, g)
        }, [
          a(h.id) ? (y(), C("span", Nf, "✓")) : ce("", !0)
        ], 46, Pf))), 128))
      ], 8, Of),
      l.value ? (y(), C("p", Rf, Q(l.value), 1)) : ce("", !0)
    ]));
  }
}), Ks = {
  cards: Ws,
  grid: Ws,
  swatches: Mf,
  pills: Ef,
  dropdown: bf,
  list: Tf
}, Ii = Symbol("print-configurator"), Ff = ["data-field-id", "data-type"], jf = ["id"], Df = {
  key: 0,
  class: "req",
  "aria-hidden": "true"
}, Vf = {
  key: 1,
  class: "help",
  part: "field-help"
}, zf = ["id"], Lf = /* @__PURE__ */ Ce({
  __name: "FieldShell",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e, { expose: t }) {
    return t({ fieldId: e.field.id }), (i, r) => (y(), C("div", {
      class: "field",
      part: "field",
      "data-field-id": e.field.id,
      "data-type": e.field.type
    }, [
      e.field.label ? (y(), C("span", {
        key: 0,
        id: `pc-label-${e.field.id}`,
        class: "field-label",
        part: "field-label"
      }, [
        Or(Q(e.field.label) + " ", 1),
        e.field.required ? (y(), C("span", Df, "*")) : ce("", !0)
      ], 8, jf)) : ce("", !0),
      e.field.helpText ? (y(), C("p", Vf, Q(e.field.helpText), 1)) : ce("", !0),
      Zl(i.$slots, "default"),
      e.error ? (y(), C("p", {
        key: 2,
        id: `pc-error-${e.field.id}`,
        class: "field-error",
        part: "field-error",
        role: "status"
      }, Q(e.error), 9, zf)) : ce("", !0)
    ], 8, Ff));
  }
}), Uf = ["aria-labelledby"], Zf = ["part", "aria-checked", "onClick"], Hf = ["value", "aria-label"], Bf = ["value"], qf = ["value", "min", "max", "step", "aria-label", "aria-describedby"], Wf = {
  key: 3,
  class: "stepper",
  part: "stepper"
}, Kf = ["aria-label", "disabled"], Gf = ["value", "min", "max", "step", "aria-label", "aria-describedby"], Yf = ["aria-label", "disabled"], Qf = /* @__PURE__ */ Ce({
  __name: "QuantityInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = ne(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue
    ), s = ne(() => n.field.label ?? "Quantity");
    function a(d) {
      let h = Math.round(d);
      return Number.isNaN(h) && (h = n.field.defaultValue), h < n.field.min && (h = n.field.min), n.field.max !== void 0 && h > n.field.max && (h = n.field.max), h;
    }
    function o(d) {
      i("select", a(d)), i("touch");
    }
    function l(d) {
      o(r.value + d * n.field.step);
    }
    function c(d) {
      const h = d.target.value;
      h !== "" && o(Number(h));
    }
    function u(d) {
      const h = d.target;
      o(h.value === "" ? n.field.defaultValue : Number(h.value)), h.value = String(r.value);
    }
    return (d, h) => {
      var g, E;
      return e.field.display === "pills" && ((g = e.field.presets) != null && g.length) ? (y(), C("div", {
        key: 0,
        class: "pills",
        role: "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0
      }, [
        (y(!0), C(ae, null, Ne(e.field.presets, (_) => (y(), C("button", {
          key: _,
          type: "button",
          class: Qe(["pill", { active: r.value === _ }]),
          part: r.value === _ ? "choice pill choice-selected" : "choice pill",
          role: "radio",
          "aria-checked": r.value === _,
          onClick: (H) => o(_)
        }, Q(_), 11, Zf))), 128))
      ], 8, Uf)) : e.field.display === "dropdown" && ((E = e.field.presets) != null && E.length) ? (y(), C("select", {
        key: 1,
        class: "dropdown",
        part: "dropdown",
        value: String(r.value),
        "aria-label": s.value,
        onChange: h[0] || (h[0] = (_) => o(Number(_.target.value)))
      }, [
        (y(!0), C(ae, null, Ne(e.field.presets, (_) => (y(), C("option", {
          key: _,
          value: String(_)
        }, Q(_), 9, Bf))), 128))
      ], 40, Hf)) : e.field.display === "input" ? (y(), C("input", {
        key: 2,
        class: "number-input",
        part: "stepper-input",
        type: "number",
        inputmode: "numeric",
        value: r.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": s.value,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        onInput: c,
        onBlur: u
      }, null, 40, qf)) : (y(), C("div", Wf, [
        j("button", {
          type: "button",
          part: "stepper-decrement",
          "aria-label": `Decrease ${s.value.toLowerCase()}`,
          disabled: r.value <= e.field.min,
          onClick: h[1] || (h[1] = (_) => l(-1))
        }, " − ", 8, Kf),
        j("input", {
          class: "stepper-value",
          part: "stepper-input",
          type: "number",
          inputmode: "numeric",
          value: r.value,
          min: e.field.min,
          max: e.field.max,
          step: e.field.step,
          "aria-label": s.value,
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          onInput: c,
          onBlur: u
        }, null, 40, Gf),
        j("button", {
          type: "button",
          part: "stepper-increment",
          "aria-label": `Increase ${s.value.toLowerCase()}`,
          disabled: e.field.max !== void 0 && r.value >= e.field.max,
          onClick: h[2] || (h[2] = (_) => l(1))
        }, " + ", 8, Yf)
      ]));
    };
  }
}), Jf = {
  key: 0,
  class: "slider-row"
}, Xf = ["value", "min", "max", "step", "aria-label"], ep = {
  class: "slider-value",
  "aria-hidden": "true"
}, tp = {
  key: 1,
  class: "stepper",
  part: "stepper"
}, np = ["aria-label", "disabled"], ip = ["value", "min", "max", "step", "aria-label"], rp = ["aria-label", "disabled"], sp = ["value", "min", "max", "step", "aria-label", "aria-describedby", "aria-invalid"], ap = /* @__PURE__ */ Ce({
  __name: "NumberInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = ne(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue ?? 0
    ), s = ne(() => n.field.label ?? n.field.id);
    function a(o) {
      Number.isNaN(o) || (i("select", o), i("touch"));
    }
    return (o, l) => e.field.display === "slider" ? (y(), C("div", Jf, [
      j("input", {
        type: "range",
        class: "slider",
        part: "stepper-input",
        value: r.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": s.value,
        onInput: l[0] || (l[0] = (c) => a(Number(c.target.value)))
      }, null, 40, Xf),
      j("span", ep, Q(r.value), 1)
    ])) : e.field.display === "stepper" ? (y(), C("div", tp, [
      j("button", {
        type: "button",
        part: "stepper-decrement",
        "aria-label": `Decrease ${s.value.toLowerCase()}`,
        disabled: e.field.min !== void 0 && r.value <= e.field.min,
        onClick: l[1] || (l[1] = (c) => a(r.value - (e.field.step ?? 1)))
      }, " − ", 8, np),
      j("input", {
        class: "stepper-value",
        part: "stepper-input",
        type: "number",
        value: r.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": s.value,
        onInput: l[2] || (l[2] = (c) => a(Number(c.target.value))),
        onBlur: l[3] || (l[3] = (c) => i("touch"))
      }, null, 40, ip),
      j("button", {
        type: "button",
        part: "stepper-increment",
        "aria-label": `Increase ${s.value.toLowerCase()}`,
        disabled: e.field.max !== void 0 && r.value >= e.field.max,
        onClick: l[4] || (l[4] = (c) => a(r.value + (e.field.step ?? 1)))
      }, " + ", 8, rp)
    ])) : (y(), C("input", {
      key: 2,
      class: "number-input",
      part: "stepper-input",
      type: "number",
      value: typeof e.value == "number" ? e.value : e.field.defaultValue,
      min: e.field.min,
      max: e.field.max,
      step: e.field.step,
      "aria-label": s.value,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: l[5] || (l[5] = (c) => a(Number(c.target.value))),
      onBlur: l[6] || (l[6] = (c) => i("touch"))
    }, null, 40, sp));
  }
}), op = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], lp = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], cp = /* @__PURE__ */ Ce({
  __name: "TextInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t;
    function r(a) {
      i("select", a.target.value);
    }
    const s = typeof n.value == "string" ? n.value : "";
    return (a, o) => e.field.display === "textarea" ? (y(), C("textarea", {
      key: 0,
      class: "text-input textarea",
      part: "text-input",
      value: typeof e.value == "string" ? e.value : te(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      rows: "3",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[0] || (o[0] = (l) => i("touch"))
    }, null, 40, op)) : (y(), C("input", {
      key: 1,
      class: "text-input",
      part: "text-input",
      type: "text",
      value: typeof e.value == "string" ? e.value : te(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[1] || (o[1] = (l) => i("touch"))
    }, null, 40, lp));
  }
}), up = {
  class: "dimensions",
  part: "dimensions"
}, dp = { class: "dim-input" }, fp = ["value", "aria-describedby", "aria-invalid"], pp = { class: "dim-input" }, hp = ["value", "aria-describedby", "aria-invalid"], mp = ["value"], gp = ["value"], vp = {
  key: 1,
  class: "dim-unit-static"
}, yp = /* @__PURE__ */ Ce({
  __name: "DimensionsInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = ne(
      () => Ot(n.value) ? n.value : { w: NaN, h: NaN, unit: n.field.defaultUnit }
    );
    function s(o) {
      const l = { ...r.value, ...o };
      l.w > 0 && l.h > 0 && i("select", { w: l.w, h: l.h, unit: l.unit }), i("touch");
    }
    function a(o) {
      return Number(o.target.value);
    }
    return (o, l) => (y(), C("div", up, [
      j("label", dp, [
        l[3] || (l[3] = j("span", { class: "dim-label" }, "Width", -1)),
        j("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(r.value.w) ? "" : r.value.w,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: l[0] || (l[0] = (c) => s({ w: a(c) }))
        }, null, 40, fp)
      ]),
      l[5] || (l[5] = j("span", {
        class: "dim-times",
        "aria-hidden": "true"
      }, "×", -1)),
      j("label", pp, [
        l[4] || (l[4] = j("span", { class: "dim-label" }, "Height", -1)),
        j("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(r.value.h) ? "" : r.value.h,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: l[1] || (l[1] = (c) => s({ h: a(c) }))
        }, null, 40, hp)
      ]),
      e.field.units.length > 1 ? (y(), C("select", {
        key: 0,
        class: "dropdown dim-unit",
        part: "dropdown",
        value: r.value.unit,
        "aria-label": "Unit",
        onChange: l[2] || (l[2] = (c) => s({ unit: c.target.value }))
      }, [
        (y(!0), C(ae, null, Ne(e.field.units, (c) => (y(), C("option", {
          key: c,
          value: c
        }, Q(c), 9, gp))), 128))
      ], 40, mp)) : (y(), C("span", vp, Q(e.field.defaultUnit), 1))
    ]));
  }
});
function bp(e) {
  if (!e.jobId)
    return;
  const t = e.facts, n = t == null ? void 0 : t.aggregate, i = e.files[0], r = [];
  for (const a of e.files)
    a.outcome === "fail" ? r.push({
      code: "filecheck-rejected",
      severity: "error",
      message: a.name
    }) : a.outcome === "warn" && r.push({
      code: "filecheck-warning",
      severity: "warning",
      message: a.name
    });
  const s = {
    version: "1.0",
    fileId: e.jobId,
    source: "filecheck",
    status: e.canProceed ? "ready" : e.status === "rejected" ? "failed" : "pending",
    fileName: i == null ? void 0 : i.name,
    pages: (n == null ? void 0 : n.pageCount) || void 0,
    colorPages: (n == null ? void 0 : n.colorPageCount) ?? void 0,
    monoPages: (n == null ? void 0 : n.monoPageCount) ?? void 0,
    canvas: (n == null ? void 0 : n.width) != null && (n == null ? void 0 : n.height) != null ? { w: n.width, h: n.height, bleed: 0, unit: "mm" } : void 0,
    issues: r,
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
  return Vr.parse(s);
}
const _p = ["aria-busy"], xp = ["id", "accept", "aria-labelledby", "aria-describedby", "aria-invalid"], wp = ["for"], kp = {
  key: 0,
  class: "upload-status"
}, Sp = { class: "upload-filename" }, Cp = { class: "upload-hint" }, Tp = /* @__PURE__ */ Ce({
  __name: "FileUpload",
  props: {
    field: { type: null },
    file: { type: null },
    analyzing: { type: Boolean },
    error: { type: String }
  },
  emits: ["file", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = /* @__PURE__ */ Ue(!1), s = ne(() => n.field.accept.join(","));
    function a(l) {
      var d;
      const u = (d = l.target.files) == null ? void 0 : d[0];
      u && i("file", n.field, u), i("touch");
    }
    function o(l) {
      var u, d;
      r.value = !1;
      const c = (d = (u = l.dataTransfer) == null ? void 0 : u.files) == null ? void 0 : d[0];
      c && i("file", n.field, c), i("touch");
    }
    return (l, c) => (y(), C("div", {
      class: Qe(["upload", { dragging: r.value, done: !!e.file }]),
      part: "upload",
      "aria-busy": e.analyzing || void 0,
      onDragover: c[0] || (c[0] = Ss((u) => r.value = !0, ["prevent"])),
      onDragleave: c[1] || (c[1] = (u) => r.value = !1),
      onDrop: Ss(o, ["prevent"])
    }, [
      j("input", {
        id: `pc-control-${e.field.id}`,
        class: "upload-input",
        part: "upload-input",
        type: "file",
        accept: s.value,
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0,
        onChange: a
      }, null, 40, xp),
      j("label", {
        class: "upload-zone",
        for: `pc-control-${e.field.id}`
      }, [
        e.analyzing ? (y(), C("span", kp, "Analyzing…")) : e.file ? (y(), C(ae, { key: 1 }, [
          j("span", Sp, Q(e.file.fileName ?? e.file.fileId), 1),
          c[2] || (c[2] = j("span", { class: "upload-hint" }, "Click or drop to replace", -1))
        ], 64)) : (y(), C(ae, { key: 2 }, [
          c[3] || (c[3] = j("span", { class: "upload-title" }, "Drop your file here or click to browse", -1)),
          j("span", Cp, Q(s.value), 1)
        ], 64))
      ], 8, wp)
    ], 42, _p));
  }
}), Ap = "https://cdn.filecheck.io/element/v1/filecheck.js", $p = 1e4;
let _n = null;
function Ip(e = Ap) {
  return typeof window < "u" && window.Filecheck ? Promise.resolve(window.Filecheck) : _n || (_n = new Promise((t, n) => {
    const i = (a) => {
      _n = null, r.remove(), n(new Error(a));
    }, r = document.createElement("script");
    r.src = e, r.async = !0;
    const s = setTimeout(
      () => i("Filecheck SDK load timed out."),
      $p
    );
    r.addEventListener("load", () => {
      clearTimeout(s), window.Filecheck ? t(window.Filecheck) : i("Filecheck SDK loaded but window.Filecheck is missing.");
    }), r.addEventListener("error", () => {
      clearTimeout(s), i("Filecheck SDK failed to load.");
    }), document.head.appendChild(r);
  }), _n);
}
const Ep = { mm: 1, cm: 10, in: 25.4 }, Op = [
  "artworkSize",
  "pageCount",
  "fileCount",
  "bleed",
  "safety"
];
function Pp(e, t) {
  var r, s;
  const n = [];
  for (const a of e) {
    const o = t[a.id];
    if (!(o === void 0 || o === "")) {
      if (a.type === "dimensions" && Ot(o)) {
        const l = Ep[o.unit] ?? 1;
        n.push({
          artworkSize: {
            width_mm: Gs(o.w * l),
            height_mm: Gs(o.h * l)
          }
        });
        continue;
      }
      if (a.role === "pages") {
        const l = typeof o == "number" ? o : Number(o);
        Number.isFinite(l) && l > 0 && n.push({ pageCount: { min: l, max: l } });
      }
      if (at(a)) {
        const l = Array.isArray(o) ? o : [String(o)];
        for (const c of l) {
          const u = (s = (r = a.options.find((d) => d.id === c)) == null ? void 0 : r.filecheck) == null ? void 0 : s.context;
          u && n.push(u);
        }
      }
    }
  }
  if (n.length === 0)
    return null;
  const i = {};
  for (const a of n)
    for (const o of Op) {
      const l = a[o];
      l && (i[o] = { ...i[o] ?? {}, ...l });
    }
  return i;
}
function Gs(e) {
  return Math.round(e * 10) / 10;
}
const Np = {
  class: "fc-upload",
  part: "upload"
}, Rp = {
  key: 0,
  class: "fc-panel fc-unconfigured"
}, Mp = {
  key: 1,
  class: "fc-panel fc-error",
  role: "alert"
}, Fp = { class: "fc-panel-hint" }, jp = {
  key: 0,
  class: "fc-loading"
}, Dp = {
  key: 1,
  class: "field-error",
  role: "status"
}, Vp = /* @__PURE__ */ Ce({
  __name: "FilecheckUpload",
  props: {
    field: { type: null },
    provider: { type: null }
  },
  emits: ["metadata", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = /* @__PURE__ */ Ue(null), s = /* @__PURE__ */ Ue(
      n.provider.publishableKey ? "loading" : "unconfigured"
    ), a = /* @__PURE__ */ Ue("");
    let o = null, l = null;
    const c = Kt(Ii, null), u = ne(() => {
      var _;
      if (!c)
        return null;
      const E = ((_ = c.cfg.visibleFields) == null ? void 0 : _.value) ?? [];
      return Pp(E, c.cfg.selections);
    });
    jt(u, (E) => {
      var _;
      (_ = o == null ? void 0 : o.setContext) == null || _.call(o, E ?? null);
    });
    async function d() {
      var L, U, M;
      const E = n.provider.publishableKey, _ = (L = n.field.filecheck) == null ? void 0 : L.workflowId, H = (U = n.field.filecheck) != null && U.workflow ? /* @__PURE__ */ ue(n.field.filecheck.workflow) : void 0;
      if (!E || !_ && !H) {
        s.value = "unconfigured";
        return;
      }
      s.value = "loading", a.value = "";
      try {
        const v = await Ip(n.provider.scriptUrl);
        if (!r.value)
          return;
        o = v(E, {
          agentId: n.provider.agentId,
          iframeSrc: n.provider.iframeSrc
        }).elements.create("intake", {
          // An inline workflow wins: it is the blueprint author's exact
          // intent, and demo blueprints rely on it to run against any
          // tenant with nothing saved in the Filecheck admin.
          ...H ? { workflow: H } : { workflowId: _ },
          preview: n.provider.preview ?? !1
        }), l = o.on("status", (X) => {
          i("metadata", X), i("touch");
        }), o.on("error", (X) => {
          const fe = X;
          a.value = (fe == null ? void 0 : fe.message) ?? "Filecheck reported an error.";
        });
        const D = u.value;
        D && ((M = o.setContext) == null || M.call(o, D)), o.mount(r.value), s.value = "active";
      } catch (v) {
        s.value = "error", a.value = v instanceof Error ? v.message : "Filecheck failed to load.";
      }
    }
    function h() {
      l == null || l(), l = null;
      try {
        o == null || o.unmount();
      } catch {
      }
      o = null;
    }
    function g() {
      h(), d();
    }
    return Ar(() => {
      d();
    }), jt(
      () => {
        var E, _;
        return [
          n.provider.publishableKey,
          n.provider.scriptUrl,
          n.provider.iframeSrc,
          n.provider.agentId,
          (E = n.field.filecheck) == null ? void 0 : E.workflowId,
          (_ = n.field.filecheck) == null ? void 0 : _.workflow
        ];
      },
      () => {
        h(), d();
      }
    ), Oa(h), (E, _) => (y(), C("div", Np, [
      s.value === "unconfigured" ? (y(), C("div", Rp, [..._[0] || (_[0] = [
        j("span", { class: "fc-panel-title" }, "Filecheck upload", -1),
        j("span", { class: "fc-panel-hint" }, " Add your Filecheck publishable key in the store settings (or preview settings) to activate validated uploads for this field. ", -1)
      ])])) : s.value === "error" ? (y(), C("div", Mp, [
        _[1] || (_[1] = j("span", { class: "fc-panel-title" }, "Upload is unavailable", -1)),
        j("span", Fp, Q(a.value), 1),
        j("button", {
          type: "button",
          class: "fc-retry",
          onClick: g
        }, "Retry")
      ])) : (y(), C(ae, { key: 2 }, [
        s.value === "loading" ? (y(), C("p", jp, "Loading secure upload…")) : ce("", !0),
        j("div", {
          ref_key: "slot",
          ref: r,
          class: "fc-slot"
        }, null, 512),
        a.value ? (y(), C("p", Dp, Q(a.value), 1)) : ce("", !0)
      ], 64))
    ]));
  }
}), zp = {
  key: 0,
  class: "artwork",
  part: "artwork"
}, Lp = { class: "artwork-body" }, Up = {
  class: "artwork-name",
  part: "artwork-name"
}, Zp = {
  key: 0,
  class: "artwork-meta",
  part: "artwork-meta"
}, Hp = { class: "artwork-actions" }, Bp = {
  key: 1,
  class: "producers"
}, qp = {
  key: 0,
  class: "producer-or",
  "aria-hidden": "true"
}, Wp = ["onClick"], Kp = { class: "producer-label" }, Gp = {
  key: 0,
  class: "producer-description"
}, Yp = {
  key: 1,
  class: "producer-or",
  "aria-hidden": "true"
}, Qp = ["onClick"], Jp = { class: "producer-label" }, Xp = {
  key: 0,
  class: "producer-description"
}, eh = /* @__PURE__ */ Ce({
  __name: "ArtworkField",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e) {
    const t = e, n = Kt(Ii);
    if (!n)
      throw new Error("ArtworkField must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r, producers: s } = n, a = ne(
      () => {
        var v, S, D;
        return t.field.providerId === "filecheck" && !!((v = t.field.filecheck) != null && v.workflowId || (S = t.field.filecheck) != null && S.workflow) && ((D = i.provider) == null ? void 0 : D.mode) === "element";
      }
    ), o = ne(() => {
      const v = i.schema.value;
      if (!v)
        return !1;
      for (const S of v.sections)
        for (const D of S.fields)
          if (D.type === "file")
            return D.id === t.field.id;
      return !1;
    }), l = ne(
      () => s.forField(t.field.id, o.value)
    ), c = ne(() => {
      const v = i.selections[t.field.id];
      return typeof v == "string" && v !== "";
    }), u = ne(() => {
      var S;
      const v = (S = i.file.value) == null ? void 0 : S.source;
      return v ? l.value.find((D) => D.id === v) ?? null : null;
    }), d = ne(() => c.value && !u.value), h = ne(() => t.field.display === "producer"), g = ne(
      () => h.value ? l.value : l.value.filter((v) => v.order < pr)
    ), E = ne(
      () => h.value ? [] : l.value.filter((v) => v.order >= pr)
    ), _ = ne(() => {
      const v = i.file.value;
      return (v == null ? void 0 : v.fileName) ?? (v == null ? void 0 : v.fileId) ?? "";
    }), H = ne(() => {
      const v = i.file.value;
      if (!v)
        return "";
      const S = [];
      return v.pages !== void 0 && S.push(`${v.pages} page${v.pages === 1 ? "" : "s"}`), v.canvas && S.push(`${v.canvas.w} × ${v.canvas.h} ${v.canvas.unit}`), S.join(" · ");
    });
    function L(v) {
      i.setFile(bp(v)), v.canProceed && v.jobId ? i.select(t.field.id, v.jobId) : i.select(t.field.id, "");
    }
    function U(v) {
      s.activate(v, t.field.id), r.touch(t.field.id);
    }
    function M() {
      i.setFile(void 0), i.select(t.field.id, ""), r.touch(t.field.id);
    }
    return (v, S) => u.value ? (y(), C("div", zp, [
      j("div", Lp, [
        j("span", Up, Q(_.value), 1),
        H.value ? (y(), C("span", Zp, Q(H.value), 1)) : ce("", !0)
      ]),
      j("div", Hp, [
        j("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-change",
          onClick: S[0] || (S[0] = (D) => U(u.value.id))
        }, " Change "),
        j("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-remove",
          onClick: M
        }, " Remove ")
      ])
    ])) : (y(), C("div", Bp, [
      d.value ? ce("", !0) : (y(!0), C(ae, { key: 0 }, Ne(g.value, (D, X) => (y(), C(ae, {
        key: D.id
      }, [
        h.value && X > 0 ? (y(), C("p", qp, [...S[4] || (S[4] = [
          j("span", null, "or", -1)
        ])])) : ce("", !0),
        j("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (fe) => U(D.id)
        }, [
          j("span", Kp, Q(D.label), 1),
          D.description ? (y(), C("span", Gp, Q(D.description), 1)) : ce("", !0)
        ], 8, Wp),
        h.value ? ce("", !0) : (y(), C("p", Yp, [...S[5] || (S[5] = [
          j("span", null, "or", -1)
        ])]))
      ], 64))), 128)),
      !h.value && a.value && te(i).provider ? (y(), $e(Vp, {
        key: 1,
        field: e.field,
        provider: te(i).provider,
        onMetadata: L,
        onTouch: S[1] || (S[1] = (D) => te(r).touch(e.field.id))
      }, null, 8, ["field", "provider"])) : h.value ? ce("", !0) : (y(), $e(Tp, {
        key: 2,
        field: e.field,
        file: te(i).file.value,
        analyzing: te(i).fileAnalyzing.value,
        error: e.error,
        onFile: S[2] || (S[2] = (D, X) => te(i).handleFile(D, X)),
        onTouch: S[3] || (S[3] = (D) => te(r).touch(e.field.id))
      }, null, 8, ["field", "file", "analyzing", "error"])),
      d.value ? ce("", !0) : (y(!0), C(ae, { key: 3 }, Ne(E.value, (D) => (y(), C(ae, {
        key: D.id
      }, [
        S[6] || (S[6] = j("p", {
          class: "producer-or",
          "aria-hidden": "true"
        }, [
          j("span", null, "or")
        ], -1)),
        j("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (X) => U(D.id)
        }, [
          j("span", Jp, Q(D.label), 1),
          D.description ? (y(), C("span", Xp, Q(D.description), 1)) : ce("", !0)
        ], 8, Qp)
      ], 64))), 128))
    ]));
  }
}), th = {
  key: 0,
  class: "recap",
  part: "summary-recap"
}, nh = {
  key: 1,
  class: "recap-empty"
}, ih = /* @__PURE__ */ Ce({
  __name: "SummaryPanel",
  props: {
    sections: { type: Array },
    selections: { type: Object },
    file: { type: null }
  },
  setup(e) {
    const t = e, n = ne(
      () => So(t.sections, t.selections, t.file)
    );
    return (i, r) => n.value.length ? (y(), C("dl", th, [
      (y(!0), C(ae, null, Ne(n.value, (s) => (y(), C("div", {
        key: s.fieldId,
        class: "recap-row"
      }, [
        j("dt", null, Q(s.label), 1),
        j("dd", null, Q(s.value), 1)
      ]))), 128))
    ])) : (y(), C("p", nh, "Your choices will appear here."));
  }
}), rh = {
  key: 0,
  class: "info-note",
  part: "field-help"
}, sh = /* @__PURE__ */ Ce({
  __name: "InfoBlock",
  props: {
    field: { type: null }
  },
  setup(e) {
    return (t, n) => e.field.body ? (y(), C("p", rh, Q(e.field.body), 1)) : ce("", !0);
  }
}), Oo = /* @__PURE__ */ Ce({
  __name: "FieldHost",
  props: {
    field: { type: null }
  },
  setup(e) {
    const t = e, n = Kt(Ii);
    if (!n)
      throw new Error("FieldHost must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r } = n, s = ne(() => i.selections[t.field.id]), a = ne(() => r.errorFor(t.field.id)), o = ne(() => {
      const u = s.value;
      return Array.isArray(u) ? u : typeof u == "string" && u !== "" ? [u] : [];
    }), l = ne(() => {
      if (!at(t.field) || !i.schema.value)
        return [];
      const u = i.schema.value;
      return t.field.options.filter(
        (d) => !Zd(u, i.selections, t.field.id, d.id)
      ).map((d) => d.id);
    });
    function c(u) {
      t.field.type === "select-many" ? i.toggle(t.field, u) : i.select(t.field.id, u), r.touch(t.field.id);
    }
    return (u, d) => (y(), $e(Lf, {
      field: e.field,
      error: a.value
    }, {
      default: Sa(() => [
        e.field.type === "select-one" || e.field.type === "select-many" ? (y(), $e(Ll(te(Ks)[e.field.display] ?? te(Ks).pills), {
          key: 0,
          field: e.field,
          "selected-ids": o.value,
          "unavailable-ids": l.value,
          error: a.value,
          onPick: c
        }, null, 40, ["field", "selected-ids", "unavailable-ids", "error"])) : e.field.type === "quantity" ? (y(), $e(Qf, {
          key: 1,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[0] || (d[0] = (h) => te(i).select(e.field.id, h)),
          onTouch: d[1] || (d[1] = (h) => te(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "number" ? (y(), $e(ap, {
          key: 2,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[2] || (d[2] = (h) => te(i).select(e.field.id, h)),
          onTouch: d[3] || (d[3] = (h) => te(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "text" ? (y(), $e(cp, {
          key: 3,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[4] || (d[4] = (h) => te(i).select(e.field.id, h)),
          onTouch: d[5] || (d[5] = (h) => te(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "dimensions" ? (y(), $e(yp, {
          key: 4,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[6] || (d[6] = (h) => te(i).select(e.field.id, h)),
          onTouch: d[7] || (d[7] = (h) => te(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "file" ? (y(), $e(eh, {
          key: 5,
          field: e.field,
          error: a.value
        }, null, 8, ["field", "error"])) : e.field.type === "info" && e.field.display === "summary" ? (y(), $e(ih, {
          key: 6,
          sections: te(i).visibleSections.value,
          selections: te(i).selections,
          file: te(i).file.value
        }, null, 8, ["sections", "selections", "file"])) : e.field.type === "info" ? (y(), $e(sh, {
          key: 7,
          field: e.field
        }, null, 8, ["field"])) : ce("", !0)
      ]),
      _: 1
    }, 8, ["field", "error"]));
  }
}), ah = {
  class: "section-title",
  part: "section-title"
}, oh = /* @__PURE__ */ Ce({
  __name: "SectionStack",
  props: {
    sections: { type: Array }
  },
  setup(e) {
    return (t, n) => (y(!0), C(ae, null, Ne(e.sections, (i) => (y(), C("section", {
      key: i.section.id,
      class: "section",
      part: "section"
    }, [
      j("h3", ah, Q(i.section.title), 1),
      (y(!0), C(ae, null, Ne(i.fields, (r) => (y(), $e(Oo, {
        key: r.id,
        field: r
      }, null, 8, ["field"]))), 128))
    ]))), 128));
  }
}), lh = { class: "wizard" }, ch = {
  class: "wizard-nav",
  part: "wizard-nav"
}, uh = ["part", "aria-current"], dh = ["onClick"], fh = {
  class: "wizard-step-index",
  "aria-hidden": "true"
}, ph = { class: "wizard-step-title" }, hh = {
  key: 0,
  class: "section",
  part: "section"
}, mh = { class: "wizard-actions" }, gh = /* @__PURE__ */ Ce({
  __name: "SectionWizard",
  props: {
    sections: { type: Array },
    issues: { type: Array }
  },
  emits: ["blocked"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n, s = /* @__PURE__ */ Ue(0), a = /* @__PURE__ */ Ue(null);
    jt(
      () => i.sections.length,
      (E) => {
        s.value > E - 1 && (s.value = Math.max(0, E - 1));
      }
    );
    const o = ne(() => i.sections[s.value]), l = ne(() => s.value >= i.sections.length - 1);
    function c(E) {
      const _ = i.sections[E];
      if (!_)
        return [];
      const H = new Set(_.fields.map((L) => L.id));
      return i.issues.filter((L) => H.has(L.fieldId));
    }
    function u(E) {
      return E === s.value ? "active" : E < s.value && c(E).length === 0 ? "done" : "todo";
    }
    async function d(E) {
      var _;
      s.value = Math.max(0, Math.min(E, i.sections.length - 1)), await ki(), (_ = a.value) == null || _.focus();
    }
    function h() {
      const E = c(s.value);
      if (E.length > 0) {
        r("blocked", E);
        return;
      }
      d(s.value + 1);
    }
    function g() {
      d(s.value - 1);
    }
    return t({ goTo: d, current: s }), (E, _) => (y(), C("div", lh, [
      j("ol", ch, [
        (y(!0), C(ae, null, Ne(e.sections, (H, L) => (y(), C("li", {
          key: H.section.id,
          class: Qe(["wizard-step", u(L)]),
          part: `wizard-step wizard-step-${u(L)}`,
          "aria-current": L === s.value ? "step" : void 0
        }, [
          j("button", {
            type: "button",
            class: "wizard-step-button",
            onClick: (U) => d(L)
          }, [
            j("span", fh, Q(u(L) === "done" ? "✓" : L + 1), 1),
            j("span", ph, Q(H.section.title), 1)
          ], 8, dh)
        ], 10, uh))), 128))
      ]),
      o.value ? (y(), C("section", hh, [
        j("h3", {
          ref_key: "heading",
          ref: a,
          class: "section-title",
          part: "section-title",
          tabindex: "-1"
        }, Q(o.value.section.title), 513),
        (y(!0), C(ae, null, Ne(o.value.fields, (H) => (y(), $e(Oo, {
          key: H.id,
          field: H
        }, null, 8, ["field"]))), 128))
      ])) : ce("", !0),
      j("div", mh, [
        s.value > 0 ? (y(), C("button", {
          key: 0,
          type: "button",
          class: "wizard-back",
          part: "wizard-back",
          onClick: g
        }, " Back ")) : ce("", !0),
        l.value ? ce("", !0) : (y(), C("button", {
          key: 1,
          type: "button",
          class: "wizard-next",
          part: "wizard-next",
          onClick: h
        }, " Continue "))
      ])
    ]));
  }
}), vh = {
  class: "summary",
  part: "summary"
}, yh = { class: "lines" }, bh = {
  class: "total",
  part: "summary-total",
  "aria-live": "polite",
  "aria-atomic": "true"
}, _h = { part: "price" }, xh = {
  key: 0,
  class: "unit-price"
}, wh = {
  key: 1,
  class: "unavailable",
  role: "status"
}, kh = ["disabled"], Sh = {
  class: "visually-hidden",
  role: "status"
}, Ch = /* @__PURE__ */ Ce({
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
    function r(a) {
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
    const s = ne(
      () => {
        var a, o;
        return (((a = n.price) == null ? void 0 : a.quantity) ?? 1) > 1 && !((o = n.price) != null && o.unavailable);
      }
    );
    return (a, o) => {
      var l, c, u, d, h;
      return y(), C("aside", vh, [
        o[2] || (o[2] = j("h3", { part: "summary-title" }, "Summary", -1)),
        j("ul", yh, [
          (y(!0), C(ae, null, Ne(((l = e.price) == null ? void 0 : l.lines) ?? [], (g, E) => (y(), C("li", {
            key: E,
            part: "summary-line"
          }, [
            j("span", null, Q(g.label), 1),
            j("span", null, Q(r(g.amount)), 1)
          ]))), 128))
        ]),
        j("div", bh, [
          o[1] || (o[1] = j("span", null, "Total", -1)),
          j("strong", _h, Q(r(((c = e.price) == null ? void 0 : c.total) ?? 0)), 1)
        ]),
        s.value ? (y(), C("p", xh, Q((u = e.price) == null ? void 0 : u.quantity) + " × " + Q(r(((d = e.price) == null ? void 0 : d.unitPrice) ?? 0)), 1)) : ce("", !0),
        (h = e.price) != null && h.unavailable ? (y(), C("p", wh, " This combination is currently unavailable. ")) : ce("", !0),
        (y(!0), C(ae, null, Ne(e.holds.filter((g) => g.message), (g) => (y(), C("p", {
          key: g.key,
          class: "hold-message",
          part: "hold-message",
          role: "status"
        }, Q(g.message), 1))), 128)),
        j("button", {
          type: "button",
          class: "cta",
          part: "cta",
          disabled: e.holds.length > 0,
          onClick: o[0] || (o[0] = (g) => i("submit"))
        }, " Add to cart ", 8, kh),
        j("span", Sh, Q(e.issueCount > 0 ? `${e.issueCount} options need attention` : ""), 1)
      ]);
    };
  }
}), Th = {
  key: 0,
  class: "state"
}, Ah = {
  key: 1,
  class: "state error",
  role: "alert"
}, $h = {
  key: 2,
  class: "layout"
}, Ih = { class: "main" }, Eh = /* @__PURE__ */ Ce({
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
    const i = e, r = n;
    function s(M) {
      if (M)
        try {
          const v = typeof M == "string" ? JSON.parse(M) : M;
          return Fd.parse(v);
        } catch {
          return;
        }
    }
    const a = tf({
      configUrl: i.configUrl,
      uploadEndpoint: i.uploadEndpoint,
      turnstileUrl: i.turnstileUrl,
      provider: s(i.provider),
      inlineConfig: i.config
    }), o = lf(a.visibleFields, a.selections, a.price), l = Xc(), c = rf(), u = of({ host: l });
    Ca(Ii, { cfg: a, validation: o, producers: u });
    const d = sf({ host: l, cfg: a, validation: o, holds: c, producers: u }), h = /* @__PURE__ */ Ue(null), g = /* @__PURE__ */ Ue(null);
    Ar(() => {
      (i.config || i.configUrl) && a.load().then(() => {
        a.unconfigured.value ? r("unconfigured", { productId: i.productId }) : a.schema.value && d.notifyReady();
      });
    }), jt(
      () => i.config,
      (M, v) => {
        M && M !== v && (o.reset(), a.reload({
          inlineConfig: M,
          provider: s(i.provider)
        }).then(() => {
          a.schema.value && d.notifyReady();
        }));
      }
    );
    const E = ne(() => {
      const M = {}, v = a.schema.value;
      if (!v)
        return M;
      for (const S of v.sections)
        for (const D of S.fields)
          if (M[D.id] = D.label ?? D.id, at(D))
            for (const X of D.options)
              M[`${D.id}:${X.id}`] = X.label;
      return M;
    });
    function _() {
      return !a.schema.value || !a.price.value ? null : {
        productId: a.schema.value.productId,
        selections: { ...a.selections },
        quantity: a.price.value.quantity,
        file: a.file.value,
        price: a.price.value,
        sku: a.price.value.sku,
        labels: E.value,
        display: So(
          a.visibleSections.value,
          a.selections,
          a.file.value
        )
      };
    }
    function H(M) {
      var S, D;
      const v = (S = h.value) == null ? void 0 : S.querySelector(`[data-field-id="${M}"]`);
      v && (v.scrollIntoView({ behavior: "smooth", block: "center" }), (D = v.querySelector(
        "button, input, select, textarea, [tabindex]"
      )) == null || D.focus({ preventScroll: !0 }));
    }
    function L() {
      var S, D, X;
      const M = _();
      if (!M)
        return;
      if (c.held.value) {
        r("invalid", {
          productId: M.productId,
          issues: [],
          holds: c.list.value
        });
        return;
      }
      const v = o.touchAll();
      if (v.length > 0 || (S = a.price.value) != null && S.unavailable) {
        const fe = v[0];
        if (fe) {
          const We = a.visibleSections.value.findIndex(
            ($) => $.fields.some((R) => R.id === fe.fieldId)
          );
          ((D = a.schema.value) == null ? void 0 : D.layout) === "wizard" && We >= 0 && ((X = g.value) == null || X.goTo(We)), H(fe.fieldId);
        }
        r("invalid", {
          productId: M.productId,
          issues: v
        });
        return;
      }
      r("submit", { ...M, valid: !0 });
    }
    function U(M) {
      for (const S of M)
        o.touch(S.fieldId);
      const v = M[0];
      v && H(v.fieldId);
    }
    return t(d.exposed), (M, v) => te(a).unconfigured.value ? ce("", !0) : (y(), C("div", {
      key: 0,
      ref_key: "root",
      ref: h,
      class: "configurator",
      part: "base"
    }, [
      te(a).loading.value ? (y(), C("p", Th, "Loading options…")) : te(a).error.value ? (y(), C("p", Ah, Q(te(a).error.value), 1)) : te(a).schema.value ? (y(), C("div", $h, [
        j("div", Ih, [
          te(a).schema.value.layout === "wizard" ? (y(), $e(gh, {
            key: 0,
            ref_key: "wizard",
            ref: g,
            sections: te(a).visibleSections.value,
            issues: te(o).issues.value,
            onBlocked: U
          }, null, 8, ["sections", "issues"])) : (y(), $e(oh, {
            key: 1,
            sections: te(a).visibleSections.value
          }, null, 8, ["sections"]))
        ]),
        Ye(Ch, {
          price: te(a).price.value,
          locale: i.locale,
          holds: te(c).list.value,
          "issue-count": te(o).issues.value.length,
          onSubmit: L
        }, null, 8, ["price", "locale", "holds", "issue-count"])
      ])) : ce("", !0)
    ], 512));
  }
}), Oh = ":host{--pc-color-accent: #1a1a1a;--pc-color-accent-contrast: #ffffff;--pc-color-accent-soft: #f6f6f4;--pc-color-surface: #ffffff;--pc-color-surface-alt: #fafafa;--pc-color-border: #e0e0dc;--pc-color-text: #1a1a1a;--pc-color-text-muted: #6b7280;--pc-color-danger: #c0392b;--pc-color-focus: var(--pc-color-accent);--pc-font-family: inherit;--pc-font-size: 1em;--pc-label-weight: 600;--pc-radius-control: 8px;--pc-radius-card: 12px;--pc-space: 4px;--pc-shadow-card: none;--pc-cta-bg: var(--pc-color-accent);--pc-cta-color: var(--pc-color-accent-contrast);--pc-swatch-size: 44px;--pc-card-image-height: 90px;display:block;container:pc-root / inline-size;font-family:var(--pc-font-family);font-size:var(--pc-font-size);color:var(--pc-color-text)}", Ph = '*{box-sizing:border-box}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.state{padding:calc(var(--pc-space) * 8);text-align:center;color:var(--pc-color-text-muted)}.state.error{color:var(--pc-color-danger)}.layout{display:grid;grid-template-columns:1fr 300px;gap:calc(var(--pc-space) * 6);align-items:start}.section{margin-bottom:calc(var(--pc-space) * 6);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);box-shadow:var(--pc-shadow-card)}.section-title{margin:0 0 calc(var(--pc-space) * 4);text-transform:uppercase;letter-spacing:.04em;font-size:.95em;color:var(--pc-color-text);outline:none}.field{margin-bottom:calc(var(--pc-space) * 5)}.field:last-child{margin-bottom:0}.field-label{display:block;font-weight:var(--pc-label-weight);margin-bottom:calc(var(--pc-space) * 2)}.req{color:var(--pc-color-danger)}.help{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.field-error{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--pc-color-focus);outline-offset:2px}.grid{display:grid;gap:calc(var(--pc-space) * 3);grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.grid.cards{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.card{position:relative;display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;transition:border-color .15s ease}.card:hover{border-color:var(--pc-color-accent-soft)}.card.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.card img{max-width:100%;height:var(--pc-card-image-height);object-fit:contain}.card-label{font-size:.9em}.card-description{font-size:.8em;color:var(--pc-color-text-muted)}.check{position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);display:grid;place-items:center;font-size:.8em}.swatches{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.swatch{width:var(--pc-swatch-size);height:var(--pc-swatch-size);border-radius:50%;border:3px solid transparent;cursor:pointer;display:grid;place-items:center}.swatch.active{border-color:var(--pc-color-accent);box-shadow:0 0 0 2px var(--pc-color-surface) inset}.swatch-check{color:#fff;text-shadow:0 0 3px rgb(0 0 0 / .8);font-size:.9em}.swatch-selected-label{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.pills{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.pill{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);cursor:pointer}.pill.active{background:var(--pc-color-accent);border-color:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.choice-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.choice-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);padding:calc(var(--pc-space) * 3);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;text-align:left;cursor:pointer}.choice-row.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.choice-indicator{flex:none;width:20px;height:20px;border:2px solid var(--pc-color-border);border-radius:50%;display:grid;place-items:center;font-size:.7em;color:var(--pc-color-accent-contrast)}.choice-indicator.multi{border-radius:4px}.choice-row.active .choice-indicator{background:var(--pc-color-accent);border-color:var(--pc-color-accent)}.choice-body{display:flex;flex-direction:column}.choice-title{font-weight:var(--pc-label-weight)}.choice-description{font-size:.85em;color:var(--pc-color-text-muted)}.card.unavailable,.pill.unavailable,.swatch.unavailable,.choice-row.unavailable{opacity:.4;cursor:not-allowed;text-decoration:line-through}.dropdown{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.stepper{display:inline-flex;align-items:stretch;border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);overflow:hidden}.stepper button{width:40px;border:none;background:var(--pc-color-surface-alt);color:var(--pc-color-text);font-size:1.2em;cursor:pointer}.stepper button:disabled{opacity:.4;cursor:not-allowed}.stepper-value{width:4.5em;border:none;text-align:center;font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);background:var(--pc-color-surface);-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.stepper-value::-webkit-outer-spin-button,.stepper-value::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.number-input,.text-input{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.textarea{width:100%;resize:vertical}.slider-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3)}.slider{flex:1;accent-color:var(--pc-color-accent)}.slider-value{min-width:3em;text-align:right;font-weight:var(--pc-label-weight)}.dimensions{display:flex;align-items:flex-end;gap:calc(var(--pc-space) * 2);flex-wrap:wrap}.dim-input{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1)}.dim-label{font-size:.8em;color:var(--pc-color-text-muted)}.dim-input input{width:6em;padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);font:inherit;color:var(--pc-color-text);background:var(--pc-color-surface)}.dim-times{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.dim-unit{min-width:5em}.dim-unit-static{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.upload-input{position:absolute;width:1px;height:1px;opacity:0;overflow:hidden}.upload-zone{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 6);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);cursor:pointer;text-align:center}.upload.dragging .upload-zone{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.upload.done .upload-zone{border-style:solid;border-color:var(--pc-color-accent)}.upload-title{font-weight:var(--pc-label-weight)}.upload-hint{font-size:.8em;color:var(--pc-color-text-muted)}.upload-filename{font-weight:var(--pc-label-weight);color:var(--pc-color-accent);word-break:break-all}.upload-status{color:var(--pc-color-accent);font-weight:var(--pc-label-weight)}.producers{display:flex;flex-direction:column}.producer{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;text-align:center;transition:border-color .15s ease}.producer:hover{border-color:var(--pc-color-accent)}.producer-label{font-weight:var(--pc-label-weight)}.producer-description{font-size:.8em;color:var(--pc-color-text-muted)}.producer-or{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);margin:calc(var(--pc-space) * 3) 0;font-size:.8em;text-transform:uppercase;letter-spacing:.06em;color:var(--pc-color-text-muted)}.producer-or:before,.producer-or:after{content:"";flex:1;height:1px;background:var(--pc-color-border)}.artwork{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 4);flex-wrap:wrap;padding:calc(var(--pc-space) * 4) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-accent-soft)}.artwork-body{display:flex;flex-direction:column;min-width:0}.artwork-name{font-weight:var(--pc-label-weight);word-break:break-all}.artwork-meta{font-size:.85em;color:var(--pc-color-text-muted)}.artwork-actions{display:flex;gap:calc(var(--pc-space) * 2)}.artwork-action{padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-size:.9em;cursor:pointer}.artwork-action:hover{border-color:var(--pc-color-accent)}.fc-slot{min-height:40px}.fc-loading{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.fc-panel{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);text-align:center;align-items:center}.fc-panel.fc-error{border-color:var(--pc-color-danger)}.fc-panel-title{font-weight:var(--pc-label-weight)}.fc-panel-hint{font-size:.85em;color:var(--pc-color-text-muted)}.fc-retry{margin-top:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.recap{margin:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.recap-row{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 4);font-size:.9em}.recap-row dt{color:var(--pc-color-text-muted)}.recap-row dd{margin:0;text-align:right}.recap-empty,.info-note{margin:0;font-size:.9em;color:var(--pc-color-text-muted)}.summary{position:sticky;top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt)}.summary h3{margin:0 0 calc(var(--pc-space) * 4)}.lines{list-style:none;margin:0 0 calc(var(--pc-space) * 4);padding:0}.lines li{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0;color:var(--pc-color-text-muted)}.total{display:flex;justify-content:space-between;padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border);font-size:1.1em}.unit-price{margin:calc(var(--pc-space) * 1) 0 0;text-align:right;font-size:.85em;color:var(--pc-color-text-muted)}.unavailable{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.hold-message{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.cta{width:100%;margin-top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 3.5);border:none;border-radius:var(--pc-radius-control);background:var(--pc-cta-bg);color:var(--pc-cta-color);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.cta:disabled{opacity:.5;cursor:not-allowed}.wizard-nav{list-style:none;display:flex;gap:calc(var(--pc-space) * 2);margin:0 0 calc(var(--pc-space) * 5);padding:0;flex-wrap:wrap}.wizard-step-button{display:flex;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:none;border-radius:var(--pc-radius-control);background:transparent;font:inherit;color:var(--pc-color-text-muted);cursor:pointer}.wizard-step.active .wizard-step-button{background:var(--pc-color-accent-soft);color:var(--pc-color-text);font-weight:var(--pc-label-weight)}.wizard-step-index{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--pc-color-border);color:var(--pc-color-text);font-size:.75em}.wizard-step.active .wizard-step-index,.wizard-step.done .wizard-step-index{background:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.wizard-actions{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 3)}.wizard-back,.wizard-next{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 6);border-radius:var(--pc-radius-control);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.wizard-back{border:2px solid var(--pc-color-border);background:var(--pc-color-surface);color:var(--pc-color-text)}.wizard-next{border:none;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);margin-left:auto}@container pc-root (max-width: 640px){.layout{grid-template-columns:1fr}.summary{position:sticky;bottom:0;top:auto;z-index:2;border-radius:var(--pc-radius-card) var(--pc-radius-card) 0 0;box-shadow:0 -4px 12px #0000000f}}', Nh = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, Rh = /* @__PURE__ */ Nh(Eh, [["styles", [Oh, Ph]]]), Mh = /* @__PURE__ */ Qc(Rh);
function Fh(e = "print-configurator") {
  typeof customElements < "u" && !customElements.get(e) && customElements.define(e, Mh);
}
Fh();
export {
  fr as PAGE_API_VERSION,
  Mh as PrintConfiguratorElement,
  Fh as registerPrintConfigurator
};
