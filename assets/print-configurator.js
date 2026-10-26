var vl = Object.defineProperty;
var bl = (e, t, n) => t in e ? vl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Wt = (e, t, n) => bl(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Lr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Se = {}, dn = [], vt = () => {
}, Ta = () => !1, Ei = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Oi = (e) => e.startsWith("onUpdate:"), Ae = Object.assign, qr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, _l = Object.prototype.hasOwnProperty, he = (e, t) => _l.call(e, t), te = Array.isArray, fn = (e) => Yn(e) === "[object Map]", Aa = (e) => Yn(e) === "[object Set]", Ss = (e) => Yn(e) === "[object Date]", ne = (e) => typeof e == "function", Ce = (e) => typeof e == "string", st = (e) => typeof e == "symbol", be = (e) => e !== null && typeof e == "object", $a = (e) => (be(e) || ne(e)) && ne(e.then) && ne(e.catch), Ia = Object.prototype.toString, Yn = (e) => Ia.call(e), xl = (e) => Yn(e).slice(8, -1), Pi = (e) => Yn(e) === "[object Object]", zr = (e) => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mn = /* @__PURE__ */ Lr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, wl = /-\w/g, Pe = Mi(
  (e) => e.replace(wl, (t) => t.slice(1).toUpperCase())
), kl = /\B([A-Z])/g, Qe = Mi(
  (e) => e.replace(kl, "-$1").toLowerCase()
), Ri = Mi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ki = Mi(
  (e) => e ? `on${Ri(e)}` : ""
), gt = (e, t) => !Object.is(e, t), Gi = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Na = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Sl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Cs = (e) => {
  const t = Ce(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ts;
const Fi = () => Ts || (Ts = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Jn(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = Ce(i) ? $l(i) : Jn(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Ce(e) || be(e))
    return e;
}
const Cl = /;(?![^(]*\))/g, Tl = /:([^]+)/, Al = /\/\*[^]*?\*\//g;
function $l(e) {
  const t = {};
  return e.replace(Al, "").split(Cl).forEach((n) => {
    if (n) {
      const i = n.split(Tl);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ke(e) {
  let t = "";
  if (Ce(e))
    t = e;
  else if (te(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ke(e[n]);
      i && (t += i + " ");
    }
  else if (be(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Il = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Nl = /* @__PURE__ */ Lr(Il);
function Ea(e) {
  return !!e || e === "";
}
function El(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Ur(e[i], t[i]);
  return n;
}
function Ur(e, t) {
  if (e === t) return !0;
  let n = Ss(e), i = Ss(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = st(e), i = st(t), n || i)
    return e === t;
  if (n = te(e), i = te(t), n || i)
    return n && i ? El(e, t) : !1;
  if (n = be(e), i = be(t), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !Ur(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Oa = (e) => !!(e && e.__v_isRef === !0), z = (e) => Ce(e) ? e : e == null ? "" : te(e) || be(e) && (e.toString === Ia || !ne(e.toString)) ? Oa(e) ? z(e.value) : JSON.stringify(e, Pa, 2) : String(e), Pa = (e, t) => Oa(t) ? Pa(e, t.value) : fn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[Qi(i, s) + " =>"] = r, n),
    {}
  )
} : Aa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Qi(n))
} : st(t) ? Qi(t) : be(t) && !te(t) && !Pi(t) ? String(t) : t, Qi = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    st(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fe;
class Ol {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Fe && (Fe.active ? (this.parent = Fe, this.index = (Fe.scopes || (Fe.scopes = [])).push(
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
      const n = Fe;
      try {
        return Fe = this, t();
      } finally {
        Fe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Fe, Fe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Fe === this)
        Fe = this.prevScope;
      else {
        let t = Fe;
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
function Pl() {
  return Fe;
}
let ke;
const Yi = /* @__PURE__ */ new WeakSet();
class Ma {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fe && (Fe.active ? Fe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Yi.has(this) && (Yi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fa(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, As(this), ja(this);
    const t = ke, n = rt;
    ke = this, rt = !0;
    try {
      return this.fn();
    } finally {
      Da(this), ke = t, rt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Zr(t);
      this.deps = this.depsTail = void 0, As(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Yi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    cr(this) && this.run();
  }
  get dirty() {
    return cr(this);
  }
}
let Ra = 0, Rn, Fn;
function Fa(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Fn, Fn = e;
    return;
  }
  e.next = Rn, Rn = e;
}
function Vr() {
  Ra++;
}
function Br() {
  if (--Ra > 0)
    return;
  if (Fn) {
    let t = Fn;
    for (Fn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Rn; ) {
    let t = Rn;
    for (Rn = void 0; t; ) {
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
function ja(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Da(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const r = i.prevDep;
    i.version === -1 ? (i === n && (n = r), Zr(i), Ml(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r;
  }
  e.deps = t, e.depsTail = n;
}
function cr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (La(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function La(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qn) || (e.globalVersion = qn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !cr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ke, i = rt;
  ke = e, rt = !0;
  try {
    ja(e);
    const r = e.fn(e._value);
    (t.version === 0 || gt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ke = n, rt = i, Da(e), e.flags &= -3;
  }
}
function Zr(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: r } = e;
  if (i && (i.nextSub = r, e.prevSub = void 0), r && (r.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Zr(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ml(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let rt = !0;
const qa = [];
function Nt() {
  qa.push(rt), rt = !1;
}
function Et() {
  const e = qa.pop();
  rt = e === void 0 ? !0 : e;
}
function As(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ke;
    ke = void 0;
    try {
      t();
    } finally {
      ke = n;
    }
  }
}
let qn = 0;
class Rl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Hr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ke || !rt || ke === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ke)
      n = this.activeLink = new Rl(ke, this), ke.deps ? (n.prevDep = ke.depsTail, ke.depsTail.nextDep = n, ke.depsTail = n) : ke.deps = ke.depsTail = n, za(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ke.depsTail, n.nextDep = void 0, ke.depsTail.nextDep = n, ke.depsTail = n, ke.deps === n && (ke.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, qn++, this.notify(t);
  }
  notify(t) {
    Vr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Br();
    }
  }
}
function za(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        za(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ur = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ Symbol(
  ""
), dr = /* @__PURE__ */ Symbol(
  ""
), zn = /* @__PURE__ */ Symbol(
  ""
);
function je(e, t, n) {
  if (rt && ke) {
    let i = ur.get(e);
    i || ur.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || (i.set(n, r = new Hr()), r.map = i, r.key = n), r.track();
  }
}
function Tt(e, t, n, i, r, s) {
  const a = ur.get(e);
  if (!a) {
    qn++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Vr(), t === "clear")
    a.forEach(o);
  else {
    const l = te(e), c = l && zr(n);
    if (l && n === "length") {
      const u = Number(i);
      a.forEach((d, f) => {
        (f === "length" || f === zn || !st(f) && f >= u) && o(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), c && o(a.get(zn)), t) {
        case "add":
          l ? c && o(a.get("length")) : (o(a.get(Xt)), fn(e) && o(a.get(dr)));
          break;
        case "delete":
          l || (o(a.get(Xt)), fn(e) && o(a.get(dr)));
          break;
        case "set":
          fn(e) && o(a.get(Xt));
          break;
      }
  }
  Br();
}
function an(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (je(t, "iterate", zn), /* @__PURE__ */ Je(e) ? t : t.map(at));
}
function ji(e) {
  return je(e = /* @__PURE__ */ pe(e), "iterate", zn), e;
}
function mt(e, t) {
  return /* @__PURE__ */ Ot(e) ? gn(/* @__PURE__ */ en(e) ? at(t) : t) : at(t);
}
const Fl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ji(this, Symbol.iterator, (e) => mt(this, e));
  },
  concat(...e) {
    return an(this).concat(
      ...e.map((t) => te(t) ? an(t) : t)
    );
  },
  entries() {
    return Ji(this, "entries", (e) => (e[1] = mt(this, e[1]), e));
  },
  every(e, t) {
    return wt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return wt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => mt(this, i)),
      arguments
    );
  },
  find(e, t) {
    return wt(
      this,
      "find",
      e,
      t,
      (n) => mt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return wt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return wt(
      this,
      "findLast",
      e,
      t,
      (n) => mt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return wt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return wt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xi(this, "includes", e);
  },
  indexOf(...e) {
    return Xi(this, "indexOf", e);
  },
  join(e) {
    return an(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Xi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return wt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Sn(this, "pop");
  },
  push(...e) {
    return Sn(this, "push", e);
  },
  reduce(e, ...t) {
    return $s(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return $s(this, "reduceRight", e, t);
  },
  shift() {
    return Sn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return wt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Sn(this, "splice", e);
  },
  toReversed() {
    return an(this).toReversed();
  },
  toSorted(e) {
    return an(this).toSorted(e);
  },
  toSpliced(...e) {
    return an(this).toSpliced(...e);
  },
  unshift(...e) {
    return Sn(this, "unshift", e);
  },
  values() {
    return Ji(this, "values", (e) => mt(this, e));
  }
};
function Ji(e, t, n) {
  const i = ji(e), r = i[t]();
  return i !== e && !/* @__PURE__ */ Je(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const jl = Array.prototype;
function wt(e, t, n, i, r, s) {
  const a = ji(e), o = a !== e && !/* @__PURE__ */ Je(e), l = a[t];
  if (l !== jl[t]) {
    const d = l.apply(e, s);
    return o ? at(d) : d;
  }
  let c = n;
  a !== e && (o ? c = function(d, f) {
    return n.call(this, mt(e, d), f, e);
  } : n.length > 2 && (c = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const u = l.call(a, c, i);
  return o && r ? r(u) : u;
}
function $s(e, t, n, i) {
  const r = ji(e), s = r !== e && !/* @__PURE__ */ Je(e);
  let a = n, o = !1;
  r !== e && (s ? (o = i.length === 0, a = function(c, u, d) {
    return o && (o = !1, c = mt(e, c)), n.call(this, c, mt(e, u), d, e);
  }) : n.length > 3 && (a = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const l = r[t](a, ...i);
  return o ? mt(e, l) : l;
}
function Xi(e, t, n) {
  const i = /* @__PURE__ */ pe(e);
  je(i, "iterate", zn);
  const r = i[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Gr(n[0]) ? (n[0] = /* @__PURE__ */ pe(n[0]), i[t](...n)) : r;
}
function Sn(e, t, n = []) {
  Nt(), Vr();
  const i = (/* @__PURE__ */ pe(e))[t].apply(e, n);
  return Br(), Et(), i;
}
const Dl = /* @__PURE__ */ Lr("__proto__,__v_isRef,__isVue"), Ua = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(st)
);
function Ll(e) {
  st(e) || (e = String(e));
  const t = /* @__PURE__ */ pe(this);
  return je(t, "has", e), t.hasOwnProperty(e);
}
class Va {
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
      return i === (r ? s ? Gl : Wa : s ? Ha : Za).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const a = te(t);
    if (!r) {
      let l;
      if (a && (l = Fl[n]))
        return l;
      if (n === "hasOwnProperty")
        return Ll;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Le(t) ? t : i
    );
    if ((st(n) ? Ua.has(n) : Dl(n)) || (r || je(t, "get", n), s))
      return o;
    if (/* @__PURE__ */ Le(o)) {
      const l = a && zr(n) ? o : o.value;
      return r && be(l) ? /* @__PURE__ */ pr(l) : l;
    }
    return be(o) ? r ? /* @__PURE__ */ pr(o) : /* @__PURE__ */ Bt(o) : o;
  }
}
class Ba extends Va {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    const a = te(t) && zr(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ot(s);
      if (!/* @__PURE__ */ Je(i) && !/* @__PURE__ */ Ot(i) && (s = /* @__PURE__ */ pe(s), i = /* @__PURE__ */ pe(i)), !a && /* @__PURE__ */ Le(s) && !/* @__PURE__ */ Le(i))
        return c || (s.value = i), !0;
    }
    const o = a ? Number(n) < t.length : he(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Le(t) ? t : r
    );
    return t === /* @__PURE__ */ pe(r) && (o ? gt(i, s) && Tt(t, "set", n, i) : Tt(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = he(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && i && Tt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!st(n) || !Ua.has(n)) && je(t, "has", n), i;
  }
  ownKeys(t) {
    return je(
      t,
      "iterate",
      te(t) ? "length" : Xt
    ), Reflect.ownKeys(t);
  }
}
class ql extends Va {
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
const zl = /* @__PURE__ */ new Ba(), Ul = /* @__PURE__ */ new ql(), Vl = /* @__PURE__ */ new Ba(!0);
const fr = (e) => e, si = (e) => Reflect.getPrototypeOf(e);
function Bl(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = /* @__PURE__ */ pe(r), a = fn(s), o = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = r[e](...i), u = n ? fr : t ? gn : at;
    return !t && je(
      s,
      "iterate",
      l ? dr : Xt
    ), Ae(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: f } = c.next();
          return f ? { value: d, done: f } : {
            value: o ? [u(d[0]), u(d[1])] : u(d),
            done: f
          };
        }
      }
    );
  };
}
function ai(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Zl(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ pe(s), o = /* @__PURE__ */ pe(r);
      e || (gt(r, o) && je(a, "get", r), je(a, "get", o));
      const { has: l } = si(a), c = t ? fr : e ? gn : at;
      if (l.call(a, r))
        return c(s.get(r));
      if (l.call(a, o))
        return c(s.get(o));
      s !== a && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && je(/* @__PURE__ */ pe(r), "iterate", Xt), r.size;
    },
    has(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ pe(s), o = /* @__PURE__ */ pe(r);
      return e || (gt(r, o) && je(a, "has", r), je(a, "has", o)), r === o ? s.has(r) : s.has(r) || s.has(o);
    },
    forEach(r, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ pe(o), c = t ? fr : e ? gn : at;
      return !e && je(l, "iterate", Xt), o.forEach((u, d) => r.call(s, c(u), c(d), a));
    }
  };
  return Ae(
    n,
    e ? {
      add: ai("add"),
      set: ai("set"),
      delete: ai("delete"),
      clear: ai("clear")
    } : {
      add(r) {
        const s = /* @__PURE__ */ pe(this), a = si(s), o = /* @__PURE__ */ pe(r), l = !t && !/* @__PURE__ */ Je(r) && !/* @__PURE__ */ Ot(r) ? o : r;
        return a.has.call(s, l) || gt(r, l) && a.has.call(s, r) || gt(o, l) && a.has.call(s, o) || (s.add(l), Tt(s, "add", l, l)), this;
      },
      set(r, s) {
        !t && !/* @__PURE__ */ Je(s) && !/* @__PURE__ */ Ot(s) && (s = /* @__PURE__ */ pe(s));
        const a = /* @__PURE__ */ pe(this), { has: o, get: l } = si(a);
        let c = o.call(a, r);
        c || (r = /* @__PURE__ */ pe(r), c = o.call(a, r));
        const u = l.call(a, r);
        return a.set(r, s), c ? gt(s, u) && Tt(a, "set", r, s) : Tt(a, "add", r, s), this;
      },
      delete(r) {
        const s = /* @__PURE__ */ pe(this), { has: a, get: o } = si(s);
        let l = a.call(s, r);
        l || (r = /* @__PURE__ */ pe(r), l = a.call(s, r)), o && o.call(s, r);
        const c = s.delete(r);
        return l && Tt(s, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ pe(this), s = r.size !== 0, a = r.clear();
        return s && Tt(
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
    n[r] = Bl(r, e, t);
  }), n;
}
function Wr(e, t) {
  const n = Zl(e, t);
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    he(n, r) && r in i ? n : i,
    r,
    s
  );
}
const Hl = {
  get: /* @__PURE__ */ Wr(!1, !1)
}, Wl = {
  get: /* @__PURE__ */ Wr(!1, !0)
}, Kl = {
  get: /* @__PURE__ */ Wr(!0, !1)
};
const Za = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakMap(), Gl = /* @__PURE__ */ new WeakMap();
function Ql(e) {
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
function Bt(e) {
  return /* @__PURE__ */ Ot(e) ? e : Kr(
    e,
    !1,
    zl,
    Hl,
    Za
  );
}
// @__NO_SIDE_EFFECTS__
function Yl(e) {
  return Kr(
    e,
    !1,
    Vl,
    Wl,
    Ha
  );
}
// @__NO_SIDE_EFFECTS__
function pr(e) {
  return Kr(
    e,
    !0,
    Ul,
    Kl,
    Wa
  );
}
function Kr(e, t, n, i, r) {
  if (!be(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = Ql(xl(e));
  if (a === 0)
    return e;
  const o = new Proxy(
    e,
    a === 2 ? i : n
  );
  return r.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return /* @__PURE__ */ Ot(e) ? /* @__PURE__ */ en(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ pe(t) : e;
}
function Jl(e) {
  return !he(e, "__v_skip") && Object.isExtensible(e) && Na(e, "__v_skip", !0), e;
}
const at = (e) => be(e) ? /* @__PURE__ */ Bt(e) : e, gn = (e) => be(e) ? /* @__PURE__ */ pr(e) : e;
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return Xl(e, !1);
}
function Xl(e, t) {
  return /* @__PURE__ */ Le(e) ? e : new ec(e, t);
}
class ec {
  constructor(t, n) {
    this.dep = new Hr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ pe(t), this._value = n ? t : at(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ Ot(t);
    t = i ? t : /* @__PURE__ */ pe(t), gt(t, n) && (this._rawValue = t, this._value = i ? t : at(t), this.dep.trigger());
  }
}
function N(e) {
  return /* @__PURE__ */ Le(e) ? e.value : e;
}
const tc = {
  get: (e, t, n) => t === "__v_raw" ? e : N(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return /* @__PURE__ */ Le(r) && !/* @__PURE__ */ Le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Ka(e) {
  return /* @__PURE__ */ en(e) ? e : new Proxy(e, tc);
}
class nc {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Hr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ke !== this)
      return Fa(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return La(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ic(e, t, n = !1) {
  let i, r;
  return ne(e) ? i = e : (i = e.get, r = e.set), new nc(i, r, n);
}
const oi = {}, di = /* @__PURE__ */ new WeakMap();
let Qt;
function rc(e, t = !1, n = Qt) {
  if (n) {
    let i = di.get(n);
    i || di.set(n, i = []), i.push(e);
  }
}
function sc(e, t, n = Se) {
  const { immediate: i, deep: r, once: s, scheduler: a, augmentJob: o, call: l } = n, c = (V) => r ? V : /* @__PURE__ */ Je(V) || r === !1 || r === 0 ? qt(V, 1) : qt(V);
  let u, d, f, m, y = !1, g = !1;
  if (/* @__PURE__ */ Le(e) ? (d = () => e.value, y = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ en(e) ? (d = () => c(e), y = !0) : te(e) ? (g = !0, y = e.some((V) => /* @__PURE__ */ en(V) || /* @__PURE__ */ Je(V)), d = () => e.map((V) => {
    if (/* @__PURE__ */ Le(V))
      return V.value;
    if (/* @__PURE__ */ en(V))
      return c(V);
    if (ne(V))
      return l ? l(V, 2) : V();
  })) : ne(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (f) {
      Nt();
      try {
        f();
      } finally {
        Et();
      }
    }
    const V = Qt;
    Qt = u;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      Qt = V;
    }
  } : d = vt, t && r) {
    const V = d, F = r === !0 ? 1 / 0 : r;
    d = () => qt(V(), F);
  }
  const _ = Pl(), E = () => {
    u.stop(), _ && _.active && qr(_.effects, u);
  };
  if (s && t) {
    const V = t;
    t = (...F) => {
      V(...F), E();
    };
  }
  let x = g ? new Array(e.length).fill(oi) : oi;
  const W = (V) => {
    if (!(!(u.flags & 1) || !u.dirty && !V))
      if (t) {
        const F = u.run();
        if (r || y || (g ? F.some((I, A) => gt(I, x[A])) : gt(F, x))) {
          f && f();
          const I = Qt;
          Qt = u;
          try {
            const A = [
              F,
              // pass undefined as the old value when it's changed for the first time
              x === oi ? void 0 : g && x[0] === oi ? [] : x,
              m
            ];
            x = F, l ? l(t, 3, A) : (
              // @ts-expect-error
              t(...A)
            );
          } finally {
            Qt = I;
          }
        }
      } else
        u.run();
  };
  return o && o(W), u = new Ma(d), u.scheduler = a ? () => a(W, !1) : W, m = (V) => rc(V, !1, u), f = u.onStop = () => {
    const V = di.get(u);
    if (V) {
      if (l)
        l(V, 4);
      else
        for (const F of V) F();
      di.delete(u);
    }
  }, t ? i ? W(!0) : x = u.run() : a ? a(W.bind(null, !0), !0) : u.run(), E.pause = u.pause.bind(u), E.resume = u.resume.bind(u), E.stop = E, E;
}
function qt(e, t = 1 / 0, n) {
  if (t <= 0 || !be(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Le(e))
    qt(e.value, t, n);
  else if (te(e))
    for (let i = 0; i < e.length; i++)
      qt(e[i], t, n);
  else if (Aa(e) || fn(e))
    e.forEach((i) => {
      qt(i, t, n);
    });
  else if (Pi(e)) {
    for (const i in e)
      qt(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && qt(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xn(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (r) {
    Di(r, t, n);
  }
}
function ot(e, t, n, i) {
  if (ne(e)) {
    const r = Xn(e, t, n, i);
    return r && $a(r) && r.catch((s) => {
      Di(s, t, n);
    }), r;
  }
  if (te(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(ot(e[s], t, n, i));
    return r;
  }
}
function Di(e, t, n, i = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Se;
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
      Nt(), Xn(s, null, 10, [
        e,
        l,
        c
      ]), Et();
      return;
    }
  }
  ac(e, n, r, i, a);
}
function ac(e, t, n, i = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Ue = [];
let ht = -1;
const pn = [];
let Dt = null, cn = 0;
const Ga = /* @__PURE__ */ Promise.resolve();
let fi = null;
function Li(e) {
  const t = fi || Ga;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function oc(e) {
  let t = ht + 1, n = Ue.length;
  for (; t < n; ) {
    const i = t + n >>> 1, r = Ue[i], s = Un(r);
    s < e || s === e && r.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Qr(e) {
  if (!(e.flags & 1)) {
    const t = Un(e), n = Ue[Ue.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Un(n) ? Ue.push(e) : Ue.splice(oc(t), 0, e), e.flags |= 1, Qa();
  }
}
function Qa() {
  fi || (fi = Ga.then(Ja));
}
function lc(e) {
  te(e) ? pn.push(...e) : Dt && e.id === -1 ? Dt.splice(cn + 1, 0, e) : e.flags & 1 || (pn.push(e), e.flags |= 1), Qa();
}
function Is(e, t, n = ht + 1) {
  for (; n < Ue.length; n++) {
    const i = Ue[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Ue.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Ya(e) {
  if (pn.length) {
    const t = [...new Set(pn)].sort(
      (n, i) => Un(n) - Un(i)
    );
    if (pn.length = 0, Dt) {
      Dt.push(...t);
      return;
    }
    for (Dt = t, cn = 0; cn < Dt.length; cn++) {
      const n = Dt[cn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Dt = null, cn = 0;
  }
}
const Un = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ja(e) {
  try {
    for (ht = 0; ht < Ue.length; ht++) {
      const t = Ue[ht];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Xn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ht < Ue.length; ht++) {
      const t = Ue[ht];
      t && (t.flags &= -2);
    }
    ht = -1, Ue.length = 0, Ya(), fi = null, (Ue.length || pn.length) && Ja();
  }
}
let Be = null, Xa = null;
function pi(e) {
  const t = Be;
  return Be = e, Xa = e && e.type.__scopeId || null, t;
}
function eo(e, t = Be, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && zs(-1);
    const s = pi(t);
    let a;
    try {
      a = e(...r);
    } finally {
      pi(s), i._d && zs(1);
    }
    return a;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Kt(e, t, n, i) {
  const r = e.dirs, s = t && t.dirs;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[i];
    l && (Nt(), ot(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), Et());
  }
}
function hr(e, t) {
  if (De) {
    let n = De.provides;
    const i = De.parent && De.parent.provides;
    i === n && (n = De.provides = Object.create(i)), n[e] = t;
  }
}
function Ut(e, t, n = !1) {
  const i = No();
  if (i || mn) {
    let r = mn ? mn._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(i && i.proxy) : t;
  }
}
const cc = /* @__PURE__ */ Symbol.for("v-scx"), uc = () => Ut(cc);
function bt(e, t, n) {
  return to(e, t, n);
}
function to(e, t, n = Se) {
  const { immediate: i, deep: r, flush: s, once: a } = n, o = Ae({}, n), l = t && i || !t && s !== "post";
  let c;
  if (Bn) {
    if (s === "sync") {
      const m = uc();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = vt, m.resume = vt, m.pause = vt, m;
    }
  }
  const u = De;
  o.call = (m, y, g) => ot(m, u, y, g);
  let d = !1;
  s === "post" ? o.scheduler = (m) => {
    He(m, u && u.suspense);
  } : s !== "sync" && (d = !0, o.scheduler = (m, y) => {
    y ? m() : Qr(m);
  }), o.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const f = sc(e, t, o);
  return Bn && (c ? c.push(f) : l && f()), f;
}
function dc(e, t, n) {
  const i = this.proxy, r = Ce(e) ? e.includes(".") ? no(i, e) : () => i[e] : e.bind(i, i);
  let s;
  ne(t) ? s = t : (s = t.handler, n = t);
  const a = ei(this), o = to(r, s.bind(i), n);
  return a(), o;
}
function no(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
const fc = /* @__PURE__ */ Symbol("_vte"), pc = (e) => e.__isTeleport, er = /* @__PURE__ */ Symbol("_leaveCb");
function Yr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Yr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function io(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ns(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const hi = /* @__PURE__ */ new WeakMap();
function jn(e, t, n, i, r = !1) {
  if (te(e)) {
    e.forEach(
      (g, _) => jn(
        g,
        t && (te(t) ? t[_] : t),
        n,
        i,
        r
      )
    );
    return;
  }
  if (hn(i) && !r) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && jn(e, t, n, i.component.subTree);
    return;
  }
  const s = i.shapeFlag & 4 ? rs(i.component) : i.el, a = r ? null : s, { i: o, r: l } = e, c = t && t.r, u = o.refs === Se ? o.refs = {} : o.refs, d = o.setupState, f = /* @__PURE__ */ pe(d), m = d === Se ? Ta : (g) => Ns(u, g) ? !1 : he(f, g), y = (g, _) => !(_ && Ns(u, _));
  if (c != null && c !== l) {
    if (Es(t), Ce(c))
      u[c] = null, m(c) && (d[c] = null);
    else if (/* @__PURE__ */ Le(c)) {
      const g = t;
      y(c, g.k) && (c.value = null), g.k && (u[g.k] = null);
    }
  }
  if (ne(l))
    Xn(l, o, 12, [a, u]);
  else {
    const g = Ce(l), _ = /* @__PURE__ */ Le(l);
    if (g || _) {
      const E = () => {
        if (e.f) {
          const x = g ? m(l) ? d[l] : u[l] : y() || !e.k ? l.value : u[e.k];
          if (r)
            te(x) && qr(x, s);
          else if (te(x))
            x.includes(s) || x.push(s);
          else if (g)
            u[l] = [s], m(l) && (d[l] = u[l]);
          else {
            const W = [s];
            y(l, e.k) && (l.value = W), e.k && (u[e.k] = W);
          }
        } else g ? (u[l] = a, m(l) && (d[l] = a)) : _ && (y(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const x = () => {
          E(), hi.delete(e);
        };
        x.id = -1, hi.set(e, x), He(x, n);
      } else
        Es(e), E();
    }
  }
}
function Es(e) {
  const t = hi.get(e);
  t && (t.flags |= 8, hi.delete(e));
}
Fi().requestIdleCallback;
Fi().cancelIdleCallback;
const hn = (e) => !!e.type.__asyncLoader, ro = (e) => e.type.__isKeepAlive;
function hc(e, t) {
  so(e, "a", t);
}
function mc(e, t) {
  so(e, "da", t);
}
function so(e, t, n = De) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (qi(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ro(r.parent.vnode) && yc(i, t, n, r), r = r.parent;
  }
}
function yc(e, t, n, i) {
  const r = qi(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  oo(() => {
    qr(i[t], r);
  }, n);
}
function qi(e, t, n = De, i = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      Nt();
      const o = ei(n), l = ot(t, n, e, a);
      return o(), Et(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const Rt = (e) => (t, n = De) => {
  (!Bn || e === "sp") && qi(e, (...i) => t(...i), n);
}, gc = Rt("bm"), Jr = Rt("m"), vc = Rt(
  "bu"
), bc = Rt("u"), ao = Rt(
  "bum"
), oo = Rt("um"), _c = Rt(
  "sp"
), xc = Rt("rtg"), wc = Rt("rtc");
function kc(e, t = De) {
  qi("ec", e, t);
}
const Sc = "components", lo = /* @__PURE__ */ Symbol.for("v-ndc");
function Cc(e) {
  return Ce(e) ? Tc(Sc, e, !1) || e : e || lo;
}
function Tc(e, t, n = !0, i = !1) {
  const r = Be || De;
  if (r) {
    const s = r.type;
    {
      const o = du(
        s,
        !1
      );
      if (o && (o === t || o === Pe(t) || o === Ri(Pe(t))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Os(r[e] || s[e], t) || // global registration
      Os(r.appContext[e], t)
    );
    return !a && i ? s : a;
  }
}
function Os(e, t) {
  return e && (e[t] || e[Pe(t)] || e[Ri(Pe(t))]);
}
function Me(e, t, n, i) {
  let r;
  const s = n, a = te(e);
  if (a || Ce(e)) {
    const o = a && /* @__PURE__ */ en(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ Je(e), c = /* @__PURE__ */ Ot(e), e = ji(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        l ? c ? gn(at(e[u])) : at(e[u]) : e[u],
        u,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, s);
  } else if (be(e))
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
function Ac(e, t, n = {}, i, r) {
  if (Be.ce || Be.parent && hn(Be.parent) && Be.parent.ce) {
    const c = Object.keys(n).length > 0;
    return b(), Oe(
      oe,
      null,
      [Xe("slot", n, i)],
      c ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), b();
  const a = s && co(s(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = Oe(
    oe,
    {
      key: (o && !st(o) ? o : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && i ? "_fb" : "")
    },
    a || [],
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function co(e) {
  return e.some((t) => ts(t) ? !(t.type === Pt || t.type === oe && !co(t.children)) : !0) ? e : null;
}
const mr = (e) => e ? Eo(e) ? rs(e) : mr(e.parent) : null, Dn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => mr(e.parent),
    $root: (e) => mr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => fo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Li.bind(e.proxy)),
    $watch: (e) => dc.bind(e)
  })
), tr = (e, t) => e !== Se && !e.__isScriptSetup && he(e, t), $c = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: r, props: s, accessCache: a, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const f = a[t];
      if (f !== void 0)
        switch (f) {
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
        if (tr(i, t))
          return a[t] = 1, i[t];
        if (r !== Se && he(r, t))
          return a[t] = 2, r[t];
        if (he(s, t))
          return a[t] = 3, s[t];
        if (n !== Se && he(n, t))
          return a[t] = 4, n[t];
        yr && (a[t] = 0);
      }
    }
    const c = Dn[t];
    let u, d;
    if (c)
      return t === "$attrs" && je(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Se && he(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, he(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: r, ctx: s } = e;
    return tr(r, t) ? (r[t] = n, !0) : i !== Se && he(i, t) ? (i[t] = n, !0) : he(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, props: s, type: a }
  }, o) {
    let l;
    return !!(n[o] || e !== Se && o[0] !== "$" && he(e, o) || tr(t, o) || he(s, o) || he(i, o) || he(Dn, o) || he(r.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : he(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ps(e) {
  return te(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let yr = !0;
function Ic(e) {
  const t = fo(e), n = e.proxy, i = e.ctx;
  yr = !1, t.beforeCreate && Ms(t.beforeCreate, e, "bc");
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
    mounted: f,
    beforeUpdate: m,
    updated: y,
    activated: g,
    deactivated: _,
    beforeDestroy: E,
    beforeUnmount: x,
    destroyed: W,
    unmounted: V,
    render: F,
    renderTracked: I,
    renderTriggered: A,
    errorCaptured: D,
    serverPrefetch: ce,
    // public API
    expose: fe,
    inheritAttrs: O,
    // assets
    components: j,
    directives: re,
    filters: ye
  } = t;
  if (c && Nc(c, i, null), a)
    for (const we in a) {
      const ge = a[we];
      ne(ge) && (i[we] = ge.bind(n));
    }
  if (r) {
    const we = r.call(n, n);
    be(we) && (e.data = /* @__PURE__ */ Bt(we));
  }
  if (yr = !0, s)
    for (const we in s) {
      const ge = s[we], Zt = ne(ge) ? ge.bind(n, n) : ne(ge.get) ? ge.get.bind(n, n) : vt, ii = !ne(ge) && ne(ge.set) ? ge.set.bind(n) : vt, Ht = Q({
        get: Zt,
        set: ii
      });
      Object.defineProperty(i, we, {
        enumerable: !0,
        configurable: !0,
        get: () => Ht.value,
        set: (ct) => Ht.value = ct
      });
    }
  if (o)
    for (const we in o)
      uo(o[we], i, n, we);
  if (l) {
    const we = ne(l) ? l.call(n) : l;
    Reflect.ownKeys(we).forEach((ge) => {
      hr(ge, we[ge]);
    });
  }
  u && Ms(u, e, "c");
  function Ne(we, ge) {
    te(ge) ? ge.forEach((Zt) => we(Zt.bind(n))) : ge && we(ge.bind(n));
  }
  if (Ne(gc, d), Ne(Jr, f), Ne(vc, m), Ne(bc, y), Ne(hc, g), Ne(mc, _), Ne(kc, D), Ne(wc, I), Ne(xc, A), Ne(ao, x), Ne(oo, V), Ne(_c, ce), te(fe))
    if (fe.length) {
      const we = e.exposed || (e.exposed = {});
      fe.forEach((ge) => {
        Object.defineProperty(we, ge, {
          get: () => n[ge],
          set: (Zt) => n[ge] = Zt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === vt && (e.render = F), O != null && (e.inheritAttrs = O), j && (e.components = j), re && (e.directives = re), ce && io(e);
}
function Nc(e, t, n = vt) {
  te(e) && (e = gr(e));
  for (const i in e) {
    const r = e[i];
    let s;
    be(r) ? "default" in r ? s = Ut(
      r.from || i,
      r.default,
      !0
    ) : s = Ut(r.from || i) : s = Ut(r), /* @__PURE__ */ Le(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[i] = s;
  }
}
function Ms(e, t, n) {
  ot(
    te(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function uo(e, t, n, i) {
  let r = i.includes(".") ? no(n, i) : () => n[i];
  if (Ce(e)) {
    const s = t[e];
    ne(s) && bt(r, s);
  } else if (ne(e))
    bt(r, e.bind(n));
  else if (be(e))
    if (te(e))
      e.forEach((s) => uo(s, t, n, i));
    else {
      const s = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(s) && bt(r, s, e);
    }
}
function fo(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, o = s.get(t);
  let l;
  return o ? l = o : !r.length && !n && !i ? l = t : (l = {}, r.length && r.forEach(
    (c) => mi(l, c, a, !0)
  ), mi(l, t, a)), be(t) && s.set(t, l), l;
}
function mi(e, t, n, i = !1) {
  const { mixins: r, extends: s } = t;
  s && mi(e, s, n, !0), r && r.forEach(
    (a) => mi(e, a, n, !0)
  );
  for (const a in t)
    if (!(i && a === "expose")) {
      const o = Ec[a] || n && n[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const Ec = {
  data: Rs,
  props: Fs,
  emits: Fs,
  // objects
  methods: In,
  computed: In,
  // lifecycle
  beforeCreate: ze,
  created: ze,
  beforeMount: ze,
  mounted: ze,
  beforeUpdate: ze,
  updated: ze,
  beforeDestroy: ze,
  beforeUnmount: ze,
  destroyed: ze,
  unmounted: ze,
  activated: ze,
  deactivated: ze,
  errorCaptured: ze,
  serverPrefetch: ze,
  // assets
  components: In,
  directives: In,
  // watch
  watch: Pc,
  // provide / inject
  provide: Rs,
  inject: Oc
};
function Rs(e, t) {
  return t ? e ? function() {
    return Ae(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Oc(e, t) {
  return In(gr(e), gr(t));
}
function gr(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ze(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function In(e, t) {
  return e ? Ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fs(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ae(
    /* @__PURE__ */ Object.create(null),
    Ps(e),
    Ps(t ?? {})
  ) : t;
}
function Pc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ae(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = ze(e[i], t[i]);
  return n;
}
function po() {
  return {
    app: null,
    config: {
      isNativeTag: Ta,
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
let Mc = 0;
function Rc(e, t) {
  return function(i, r = null) {
    ne(i) || (i = Ae({}, i)), r != null && !be(r) && (r = null);
    const s = po(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = s.app = {
      _uid: Mc++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: pu,
      get config() {
        return s.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return a.has(u) || (u && ne(u.install) ? (a.add(u), u.install(c, ...d)) : ne(u) && (a.add(u), u(c, ...d))), c;
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
      mount(u, d, f) {
        if (!l) {
          const m = c._ceVNode || Xe(i, r);
          return m.appContext = s, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, u, f), l = !0, c._container = u, u.__vue_app__ = c, rs(m.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (ot(
          o,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return s.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = mn;
        mn = c;
        try {
          return u();
        } finally {
          mn = d;
        }
      }
    };
    return c;
  };
}
let mn = null;
const Fc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pe(t)}Modifiers`] || e[`${Qe(t)}Modifiers`];
function jc(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Se;
  let r = n;
  const s = t.startsWith("update:"), a = s && Fc(i, t.slice(7));
  a && (a.trim && (r = n.map((u) => Ce(u) ? u.trim() : u)), a.number && (r = n.map(Sl)));
  let o, l = i[o = Ki(t)] || // also try camelCase event handler (#2249)
  i[o = Ki(Pe(t))];
  !l && s && (l = i[o = Ki(Qe(t))]), l && ot(
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
    e.emitted[o] = !0, ot(
      c,
      e,
      6,
      r
    );
  }
}
const Dc = /* @__PURE__ */ new WeakMap();
function ho(e, t, n = !1) {
  const i = n ? Dc : t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let a = {}, o = !1;
  if (!ne(e)) {
    const l = (c) => {
      const u = ho(c, t, !0);
      u && (o = !0, Ae(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !o ? (be(e) && i.set(e, null), null) : (te(s) ? s.forEach((l) => a[l] = null) : Ae(a, s), be(e) && i.set(e, a), a);
}
function zi(e, t) {
  return !e || !Ei(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), he(e, t[0].toLowerCase() + t.slice(1)) || he(e, Qe(t)) || he(e, t));
}
function js(e) {
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
    data: f,
    setupState: m,
    ctx: y,
    inheritAttrs: g
  } = e, _ = pi(e);
  let E, x;
  try {
    if (n.shapeFlag & 4) {
      const V = r || i, F = V;
      E = yt(
        c.call(
          F,
          V,
          u,
          d,
          m,
          f,
          y
        )
      ), x = o;
    } else {
      const V = t;
      E = yt(
        V.length > 1 ? V(
          d,
          { attrs: o, slots: a, emit: l }
        ) : V(
          d,
          null
        )
      ), x = t.props ? o : Lc(o);
    }
  } catch (V) {
    Ln.length = 0, Di(V, e, 1), E = Xe(Pt);
  }
  let W = E;
  if (x && g !== !1) {
    const V = Object.keys(x), { shapeFlag: F } = W;
    V.length && F & 7 && (s && V.some(Oi) && (x = qc(
      x,
      s
    )), W = vn(W, x, !1, !0));
  }
  return n.dirs && (W = vn(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && Yr(W, n.transition), E = W, pi(_), E;
}
const Lc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ei(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, qc = (e, t) => {
  const n = {};
  for (const i in e)
    (!Oi(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function zc(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: a, children: o, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Ds(i, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (mo(a, i, f) && !zi(c, f))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : i === a ? !1 : i ? a ? Ds(i, a, c) : !0 : !!a;
  return !1;
}
function Ds(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (mo(t, e, s) && !zi(n, s))
      return !0;
  }
  return !1;
}
function mo(e, t, n) {
  const i = e[n], r = t[n];
  return n === "style" && be(i) && be(r) ? !Ur(i, r) : i !== r;
}
function Uc({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = i, e = r), r === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const yo = {}, go = () => Object.create(yo), vo = (e) => Object.getPrototypeOf(e) === yo;
function Vc(e, t, n, i = !1) {
  const r = {}, s = go();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), bo(e, t, r, s);
  for (const a in e.propsOptions[0])
    a in r || (r[a] = void 0);
  n ? e.props = i ? r : /* @__PURE__ */ Yl(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Bc(e, t, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, o = /* @__PURE__ */ pe(r), [l] = e.propsOptions;
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
        let f = u[d];
        if (zi(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (he(s, f))
            m !== s[f] && (s[f] = m, c = !0);
          else {
            const y = Pe(f);
            r[y] = vr(
              l,
              o,
              y,
              m,
              e,
              !1
            );
          }
        else
          m !== s[f] && (s[f] = m, c = !0);
      }
    }
  } else {
    bo(e, t, r, s) && (c = !0);
    let u;
    for (const d in o)
      (!t || // for camelCase
      !he(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Qe(d)) === d || !he(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = vr(
        l,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (s !== o)
      for (const d in s)
        (!t || !he(t, d)) && (delete s[d], c = !0);
  }
  c && Tt(e.attrs, "set", "");
}
function bo(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let a = !1, o;
  if (t)
    for (let l in t) {
      if (Mn(l))
        continue;
      const c = t[l];
      let u;
      r && he(r, u = Pe(l)) ? !s || !s.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : zi(e.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ pe(n), c = o || Se;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = vr(
        r,
        l,
        d,
        c[d],
        e,
        !he(c, d)
      );
    }
  }
  return a;
}
function vr(e, t, n, i, r, s) {
  const a = e[n];
  if (a != null) {
    const o = he(a, "default");
    if (o && i === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ne(l)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const u = ei(r);
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
    ] && (i === "" || i === Qe(n)) && (i = !0));
  }
  return i;
}
const Zc = /* @__PURE__ */ new WeakMap();
function _o(e, t, n = !1) {
  const i = n ? Zc : t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, a = {}, o = [];
  let l = !1;
  if (!ne(e)) {
    const u = (d) => {
      l = !0;
      const [f, m] = _o(d, t, !0);
      Ae(a, f), m && o.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return be(e) && i.set(e, dn), dn;
  if (te(s))
    for (let u = 0; u < s.length; u++) {
      const d = Pe(s[u]);
      Ls(d) && (a[d] = Se);
    }
  else if (s)
    for (const u in s) {
      const d = Pe(u);
      if (Ls(d)) {
        const f = s[u], m = a[d] = te(f) || ne(f) ? { type: f } : Ae({}, f), y = m.type;
        let g = !1, _ = !0;
        if (te(y))
          for (let E = 0; E < y.length; ++E) {
            const x = y[E], W = ne(x) && x.name;
            if (W === "Boolean") {
              g = !0;
              break;
            } else W === "String" && (_ = !1);
          }
        else
          g = ne(y) && y.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = g, m[
          1
          /* shouldCastTrue */
        ] = _, (g || he(m, "default")) && o.push(d);
      }
    }
  const c = [a, o];
  return be(e) && i.set(e, c), c;
}
function Ls(e) {
  return e[0] !== "$" && !Mn(e);
}
const Xr = (e) => e === "_" || e === "_ctx" || e === "$stable", es = (e) => te(e) ? e.map(yt) : [yt(e)], Hc = (e, t, n) => {
  if (t._n)
    return t;
  const i = eo((...r) => es(t(...r)), n);
  return i._c = !1, i;
}, xo = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if (Xr(r)) continue;
    const s = e[r];
    if (ne(s))
      t[r] = Hc(r, s, i);
    else if (s != null) {
      const a = es(s);
      t[r] = () => a;
    }
  }
}, wo = (e, t) => {
  const n = es(t);
  e.slots.default = () => n;
}, ko = (e, t, n) => {
  for (const i in t)
    (n || !Xr(i)) && (e[i] = t[i]);
}, Wc = (e, t, n) => {
  const i = e.slots = go();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (ko(i, t, n), n && Na(i, "_", r, !0)) : xo(t, i);
  } else t && wo(e, t);
}, Kc = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, a = Se;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? s = !1 : ko(r, t, n) : (s = !t.$stable, xo(t, r)), a = t;
  } else t && (wo(e, t), a = { default: 1 });
  if (s)
    for (const o in r)
      !Xr(o) && a[o] == null && delete r[o];
}, He = Xc;
function Gc(e) {
  return Qc(e);
}
function Qc(e, t) {
  const n = Fi();
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
    nextSibling: f,
    setScopeId: m = vt,
    insertStaticContent: y
  } = e, g = (p, h, v, T = null, S = null, k = null, L = void 0, R = null, P = !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !Cn(p, h) && (T = ri(p), ct(p, S, k, !0), p = null), h.patchFlag === -2 && (P = !1, h.dynamicChildren = null);
    const { type: C, ref: Y, shapeFlag: U } = h;
    switch (C) {
      case Ui:
        _(p, h, v, T);
        break;
      case Pt:
        E(p, h, v, T);
        break;
      case ir:
        p == null && x(h, v, T, L);
        break;
      case oe:
        j(
          p,
          h,
          v,
          T,
          S,
          k,
          L,
          R,
          P
        );
        break;
      default:
        U & 1 ? F(
          p,
          h,
          v,
          T,
          S,
          k,
          L,
          R,
          P
        ) : U & 6 ? re(
          p,
          h,
          v,
          T,
          S,
          k,
          L,
          R,
          P
        ) : (U & 64 || U & 128) && C.process(
          p,
          h,
          v,
          T,
          S,
          k,
          L,
          R,
          P,
          wn
        );
    }
    Y != null && S ? jn(Y, p && p.ref, k, h || p, !h) : Y == null && p && p.ref != null && jn(p.ref, null, k, p, !0);
  }, _ = (p, h, v, T) => {
    if (p == null)
      i(
        h.el = o(h.children),
        v,
        T
      );
    else {
      const S = h.el = p.el;
      h.children !== p.children && c(S, h.children);
    }
  }, E = (p, h, v, T) => {
    p == null ? i(
      h.el = l(h.children || ""),
      v,
      T
    ) : h.el = p.el;
  }, x = (p, h, v, T) => {
    [p.el, p.anchor] = y(
      p.children,
      h,
      v,
      T,
      p.el,
      p.anchor
    );
  }, W = ({ el: p, anchor: h }, v, T) => {
    let S;
    for (; p && p !== h; )
      S = f(p), i(p, v, T), p = S;
    i(h, v, T);
  }, V = ({ el: p, anchor: h }) => {
    let v;
    for (; p && p !== h; )
      v = f(p), r(p), p = v;
    r(h);
  }, F = (p, h, v, T, S, k, L, R, P) => {
    if (h.type === "svg" ? L = "svg" : h.type === "math" && (L = "mathml"), p == null)
      I(
        h,
        v,
        T,
        S,
        k,
        L,
        R,
        P
      );
    else {
      const C = p.el && p.el._isVueCE ? p.el : null;
      try {
        C && C._beginPatch(), ce(
          p,
          h,
          S,
          k,
          L,
          R,
          P
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, I = (p, h, v, T, S, k, L, R) => {
    let P, C;
    const { props: Y, shapeFlag: U, transition: G, dirs: ee } = p;
    if (P = p.el = a(
      p.type,
      k,
      Y && Y.is,
      Y
    ), U & 8 ? u(P, p.children) : U & 16 && D(
      p.children,
      P,
      null,
      T,
      S,
      nr(p, k),
      L,
      R
    ), ee && Kt(p, null, T, "created"), A(P, p, p.scopeId, L, T), Y) {
      for (const xe in Y)
        xe !== "value" && !Mn(xe) && s(P, xe, null, Y[xe], k, T);
      "value" in Y && s(P, "value", null, Y.value, k), (C = Y.onVnodeBeforeMount) && pt(C, T, p);
    }
    ee && Kt(p, null, T, "beforeMount");
    const ue = Yc(S, G);
    ue && G.beforeEnter(P), i(P, h, v), ((C = Y && Y.onVnodeMounted) || ue || ee) && He(() => {
      try {
        C && pt(C, T, p), ue && G.enter(P), ee && Kt(p, null, T, "mounted");
      } finally {
      }
    }, S);
  }, A = (p, h, v, T, S) => {
    if (v && m(p, v), T)
      for (let k = 0; k < T.length; k++)
        m(p, T[k]);
    if (S) {
      let k = S.subTree;
      if (h === k || Ao(k.type) && (k.ssContent === h || k.ssFallback === h)) {
        const L = S.vnode;
        A(
          p,
          L,
          L.scopeId,
          L.slotScopeIds,
          S.parent
        );
      }
    }
  }, D = (p, h, v, T, S, k, L, R, P = 0) => {
    for (let C = P; C < p.length; C++) {
      const Y = p[C] = R ? Ct(p[C]) : yt(p[C]);
      g(
        null,
        Y,
        h,
        v,
        T,
        S,
        k,
        L,
        R
      );
    }
  }, ce = (p, h, v, T, S, k, L) => {
    const R = h.el = p.el;
    let { patchFlag: P, dynamicChildren: C, dirs: Y } = h;
    P |= p.patchFlag & 16;
    const U = p.props || Se, G = h.props || Se;
    let ee;
    if (v && Gt(v, !1), (ee = G.onVnodeBeforeUpdate) && pt(ee, v, h, p), Y && Kt(h, p, v, "beforeUpdate"), v && Gt(v, !0), (U.innerHTML && G.innerHTML == null || U.textContent && G.textContent == null) && u(R, ""), C ? fe(
      p.dynamicChildren,
      C,
      R,
      v,
      T,
      nr(h, S),
      k
    ) : L || ge(
      p,
      h,
      R,
      null,
      v,
      T,
      nr(h, S),
      k,
      !1
    ), P > 0) {
      if (P & 16)
        O(R, U, G, v, S);
      else if (P & 2 && U.class !== G.class && s(R, "class", null, G.class, S), P & 4 && s(R, "style", U.style, G.style, S), P & 8) {
        const ue = h.dynamicProps;
        for (let xe = 0; xe < ue.length; xe++) {
          const ve = ue[xe], $e = U[ve], Re = G[ve];
          (Re !== $e || ve === "value") && s(R, ve, $e, Re, S, v);
        }
      }
      P & 1 && p.children !== h.children && u(R, h.children);
    } else !L && C == null && O(R, U, G, v, S);
    ((ee = G.onVnodeUpdated) || Y) && He(() => {
      ee && pt(ee, v, h, p), Y && Kt(h, p, v, "updated");
    }, T);
  }, fe = (p, h, v, T, S, k, L) => {
    for (let R = 0; R < h.length; R++) {
      const P = p[R], C = h[R], Y = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Cn(P, C) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? d(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      g(
        P,
        C,
        Y,
        null,
        T,
        S,
        k,
        L,
        !0
      );
    }
  }, O = (p, h, v, T, S) => {
    if (h !== v) {
      if (h !== Se)
        for (const k in h)
          !Mn(k) && !(k in v) && s(
            p,
            k,
            h[k],
            null,
            S,
            T
          );
      for (const k in v) {
        if (Mn(k)) continue;
        const L = v[k], R = h[k];
        L !== R && k !== "value" && s(p, k, R, L, S, T);
      }
      "value" in v && s(p, "value", h.value, v.value, S);
    }
  }, j = (p, h, v, T, S, k, L, R, P) => {
    const C = h.el = p ? p.el : o(""), Y = h.anchor = p ? p.anchor : o("");
    let { patchFlag: U, dynamicChildren: G, slotScopeIds: ee } = h;
    ee && (R = R ? R.concat(ee) : ee), p == null ? (i(C, v, T), i(Y, v, T), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      v,
      Y,
      S,
      k,
      L,
      R,
      P
    )) : U > 0 && U & 64 && G && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === G.length ? (fe(
      p.dynamicChildren,
      G,
      v,
      S,
      k,
      L,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || S && h === S.subTree) && So(
      p,
      h,
      !0
      /* shallow */
    )) : ge(
      p,
      h,
      v,
      Y,
      S,
      k,
      L,
      R,
      P
    );
  }, re = (p, h, v, T, S, k, L, R, P) => {
    h.slotScopeIds = R, p == null ? h.shapeFlag & 512 ? S.ctx.activate(
      h,
      v,
      T,
      L,
      P
    ) : ye(
      h,
      v,
      T,
      S,
      k,
      L,
      P
    ) : qe(p, h, P);
  }, ye = (p, h, v, T, S, k, L) => {
    const R = p.component = au(
      p,
      T,
      S
    );
    if (ro(p) && (R.ctx.renderer = wn), ou(R, !1, L), R.asyncDep) {
      if (S && S.registerDep(R, Ne, L), !p.el) {
        const P = R.subTree = Xe(Pt);
        E(null, P, h, v), p.placeholder = P.el;
      }
    } else
      Ne(
        R,
        p,
        h,
        v,
        S,
        k,
        L
      );
  }, qe = (p, h, v) => {
    const T = h.component = p.component;
    if (zc(p, h, v))
      if (T.asyncDep && !T.asyncResolved) {
        we(T, h, v);
        return;
      } else
        T.next = h, T.update();
    else
      h.el = p.el, T.vnode = h;
  }, Ne = (p, h, v, T, S, k, L) => {
    const R = () => {
      if (p.isMounted) {
        let { next: U, bu: G, u: ee, parent: ue, vnode: xe } = p;
        {
          const dt = Co(p);
          if (dt) {
            U && (U.el = xe.el, we(p, U, L)), dt.asyncDep.then(() => {
              He(() => {
                p.isUnmounted || C();
              }, S);
            });
            return;
          }
        }
        let ve = U, $e;
        Gt(p, !1), U ? (U.el = xe.el, we(p, U, L)) : U = xe, G && Gi(G), ($e = U.props && U.props.onVnodeBeforeUpdate) && pt($e, ue, U, xe), Gt(p, !0);
        const Re = js(p), ut = p.subTree;
        p.subTree = Re, g(
          ut,
          Re,
          // parent may have changed if it's in a teleport
          d(ut.el),
          // anchor may have changed if it's in a fragment
          ri(ut),
          p,
          S,
          k
        ), U.el = Re.el, ve === null && Uc(p, Re.el), ee && He(ee, S), ($e = U.props && U.props.onVnodeUpdated) && He(
          () => pt($e, ue, U, xe),
          S
        );
      } else {
        let U;
        const { el: G, props: ee } = h, { bm: ue, m: xe, parent: ve, root: $e, type: Re } = p, ut = hn(h);
        Gt(p, !1), ue && Gi(ue), !ut && (U = ee && ee.onVnodeBeforeMount) && pt(U, ve, h), Gt(p, !0);
        {
          $e.ce && $e.ce._hasShadowRoot() && $e.ce._injectChildStyle(
            Re,
            p.parent ? p.parent.type : void 0
          );
          const dt = p.subTree = js(p);
          g(
            null,
            dt,
            v,
            T,
            p,
            S,
            k
          ), h.el = dt.el;
        }
        if (xe && He(xe, S), !ut && (U = ee && ee.onVnodeMounted)) {
          const dt = h;
          He(
            () => pt(U, ve, dt),
            S
          );
        }
        (h.shapeFlag & 256 || ve && hn(ve.vnode) && ve.vnode.shapeFlag & 256) && p.a && He(p.a, S), p.isMounted = !0, h = v = T = null;
      }
    };
    p.scope.on();
    const P = p.effect = new Ma(R);
    p.scope.off();
    const C = p.update = P.run.bind(P), Y = p.job = P.runIfDirty.bind(P);
    Y.i = p, Y.id = p.uid, P.scheduler = () => Qr(Y), Gt(p, !0), C();
  }, we = (p, h, v) => {
    h.component = p;
    const T = p.vnode.props;
    p.vnode = h, p.next = null, Bc(p, h.props, T, v), Kc(p, h.children, v), Nt(), Is(p), Et();
  }, ge = (p, h, v, T, S, k, L, R, P = !1) => {
    const C = p && p.children, Y = p ? p.shapeFlag : 0, U = h.children, { patchFlag: G, shapeFlag: ee } = h;
    if (G > 0) {
      if (G & 128) {
        ii(
          C,
          U,
          v,
          T,
          S,
          k,
          L,
          R,
          P
        );
        return;
      } else if (G & 256) {
        Zt(
          C,
          U,
          v,
          T,
          S,
          k,
          L,
          R,
          P
        );
        return;
      }
    }
    ee & 8 ? (Y & 16 && xn(C, S, k), U !== C && u(v, U)) : Y & 16 ? ee & 16 ? ii(
      C,
      U,
      v,
      T,
      S,
      k,
      L,
      R,
      P
    ) : xn(C, S, k, !0) : (Y & 8 && u(v, ""), ee & 16 && D(
      U,
      v,
      T,
      S,
      k,
      L,
      R,
      P
    ));
  }, Zt = (p, h, v, T, S, k, L, R, P) => {
    p = p || dn, h = h || dn;
    const C = p.length, Y = h.length, U = Math.min(C, Y);
    let G;
    for (G = 0; G < U; G++) {
      const ee = h[G] = P ? Ct(h[G]) : yt(h[G]);
      g(
        p[G],
        ee,
        v,
        null,
        S,
        k,
        L,
        R,
        P
      );
    }
    C > Y ? xn(
      p,
      S,
      k,
      !0,
      !1,
      U
    ) : D(
      h,
      v,
      T,
      S,
      k,
      L,
      R,
      P,
      U
    );
  }, ii = (p, h, v, T, S, k, L, R, P) => {
    let C = 0;
    const Y = h.length;
    let U = p.length - 1, G = Y - 1;
    for (; C <= U && C <= G; ) {
      const ee = p[C], ue = h[C] = P ? Ct(h[C]) : yt(h[C]);
      if (Cn(ee, ue))
        g(
          ee,
          ue,
          v,
          null,
          S,
          k,
          L,
          R,
          P
        );
      else
        break;
      C++;
    }
    for (; C <= U && C <= G; ) {
      const ee = p[U], ue = h[G] = P ? Ct(h[G]) : yt(h[G]);
      if (Cn(ee, ue))
        g(
          ee,
          ue,
          v,
          null,
          S,
          k,
          L,
          R,
          P
        );
      else
        break;
      U--, G--;
    }
    if (C > U) {
      if (C <= G) {
        const ee = G + 1, ue = ee < Y ? h[ee].el : T;
        for (; C <= G; )
          g(
            null,
            h[C] = P ? Ct(h[C]) : yt(h[C]),
            v,
            ue,
            S,
            k,
            L,
            R,
            P
          ), C++;
      }
    } else if (C > G)
      for (; C <= U; )
        ct(p[C], S, k, !0), C++;
    else {
      const ee = C, ue = C, xe = /* @__PURE__ */ new Map();
      for (C = ue; C <= G; C++) {
        const Ge = h[C] = P ? Ct(h[C]) : yt(h[C]);
        Ge.key != null && xe.set(Ge.key, C);
      }
      let ve, $e = 0;
      const Re = G - ue + 1;
      let ut = !1, dt = 0;
      const kn = new Array(Re);
      for (C = 0; C < Re; C++) kn[C] = 0;
      for (C = ee; C <= U; C++) {
        const Ge = p[C];
        if ($e >= Re) {
          ct(Ge, S, k, !0);
          continue;
        }
        let ft;
        if (Ge.key != null)
          ft = xe.get(Ge.key);
        else
          for (ve = ue; ve <= G; ve++)
            if (kn[ve - ue] === 0 && Cn(Ge, h[ve])) {
              ft = ve;
              break;
            }
        ft === void 0 ? ct(Ge, S, k, !0) : (kn[ft - ue] = C + 1, ft >= dt ? dt = ft : ut = !0, g(
          Ge,
          h[ft],
          v,
          null,
          S,
          k,
          L,
          R,
          P
        ), $e++);
      }
      const xs = ut ? Jc(kn) : dn;
      for (ve = xs.length - 1, C = Re - 1; C >= 0; C--) {
        const Ge = ue + C, ft = h[Ge], ws = h[Ge + 1], ks = Ge + 1 < Y ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ws.el || To(ws)
        ) : T;
        kn[C] === 0 ? g(
          null,
          ft,
          v,
          ks,
          S,
          k,
          L,
          R,
          P
        ) : ut && (ve < 0 || C !== xs[ve] ? Ht(ft, v, ks, 2) : ve--);
      }
    }
  }, Ht = (p, h, v, T, S = null) => {
    const { el: k, type: L, transition: R, children: P, shapeFlag: C } = p;
    if (C & 6) {
      Ht(p.component.subTree, h, v, T);
      return;
    }
    if (C & 128) {
      p.suspense.move(h, v, T);
      return;
    }
    if (C & 64) {
      L.move(p, h, v, wn);
      return;
    }
    if (L === oe) {
      i(k, h, v);
      for (let U = 0; U < P.length; U++)
        Ht(P[U], h, v, T);
      i(p.anchor, h, v);
      return;
    }
    if (L === ir) {
      W(p, h, v);
      return;
    }
    if (T !== 2 && C & 1 && R)
      if (T === 0)
        R.persisted && !k[er] ? i(k, h, v) : (R.beforeEnter(k), i(k, h, v), He(() => R.enter(k), S));
      else {
        const { leave: U, delayLeave: G, afterLeave: ee } = R, ue = () => {
          p.ctx.isUnmounted ? r(k) : i(k, h, v);
        }, xe = () => {
          const ve = k._isLeaving || !!k[er];
          k._isLeaving && k[er](
            !0
            /* cancelled */
          ), R.persisted && !ve ? ue() : U(k, () => {
            ue(), ee && ee();
          });
        };
        G ? G(k, ue, xe) : xe();
      }
    else
      i(k, h, v);
  }, ct = (p, h, v, T = !1, S = !1) => {
    const {
      type: k,
      props: L,
      ref: R,
      children: P,
      dynamicChildren: C,
      shapeFlag: Y,
      patchFlag: U,
      dirs: G,
      cacheIndex: ee,
      memo: ue
    } = p;
    if (U === -2 && (S = !1), R != null && (Nt(), jn(R, null, v, p, !0), Et()), ee != null && (h.renderCache[ee] = void 0), Y & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const xe = Y & 1 && G, ve = !hn(p);
    let $e;
    if (ve && ($e = L && L.onVnodeBeforeUnmount) && pt($e, h, p), Y & 6)
      gl(p.component, v, T);
    else {
      if (Y & 128) {
        p.suspense.unmount(v, T);
        return;
      }
      xe && Kt(p, null, h, "beforeUnmount"), Y & 64 ? p.type.remove(
        p,
        h,
        v,
        wn,
        T
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== oe || U > 0 && U & 64) ? xn(
        C,
        h,
        v,
        !1,
        !0
      ) : (k === oe && U & 384 || !S && Y & 16) && xn(P, h, v), T && bs(p);
    }
    const Re = ue != null && ee == null;
    (ve && ($e = L && L.onVnodeUnmounted) || xe || Re) && He(() => {
      $e && pt($e, h, p), xe && Kt(p, null, h, "unmounted"), Re && (p.el = null);
    }, v);
  }, bs = (p) => {
    const { type: h, el: v, anchor: T, transition: S } = p;
    if (h === oe) {
      yl(v, T);
      return;
    }
    if (h === ir) {
      V(p);
      return;
    }
    const k = () => {
      r(v), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (p.shapeFlag & 1 && S && !S.persisted) {
      const { leave: L, delayLeave: R } = S, P = () => L(v, k);
      R ? R(p.el, k, P) : P();
    } else
      k();
  }, yl = (p, h) => {
    let v;
    for (; p !== h; )
      v = f(p), r(p), p = v;
    r(h);
  }, gl = (p, h, v) => {
    const { bum: T, scope: S, job: k, subTree: L, um: R, m: P, a: C } = p;
    qs(P), qs(C), T && Gi(T), S.stop(), k && (k.flags |= 8, ct(L, p, h, v)), R && He(R, h), He(() => {
      p.isUnmounted = !0;
    }, h);
  }, xn = (p, h, v, T = !1, S = !1, k = 0) => {
    for (let L = k; L < p.length; L++)
      ct(p[L], h, v, T, S);
  }, ri = (p) => {
    if (p.shapeFlag & 6)
      return ri(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const h = f(p.anchor || p.el), v = h && h[fc];
    return v ? f(v) : h;
  };
  let Wi = !1;
  const _s = (p, h, v) => {
    let T;
    p == null ? h._vnode && (ct(h._vnode, null, null, !0), T = h._vnode.component) : g(
      h._vnode || null,
      p,
      h,
      null,
      null,
      null,
      v
    ), h._vnode = p, Wi || (Wi = !0, Is(T), Ya(), Wi = !1);
  }, wn = {
    p: g,
    um: ct,
    m: Ht,
    r: bs,
    mt: ye,
    mc: D,
    pc: ge,
    pbc: fe,
    n: ri,
    o: e
  };
  return {
    render: _s,
    hydrate: void 0,
    createApp: Rc(_s)
  };
}
function nr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Gt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function So(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (te(i) && te(r))
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      let o = r[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[s] = Ct(r[s]), o.el = a.el), !n && o.patchFlag !== -2 && So(a, o)), o.type === Ui && (o.patchFlag === -1 && (o = r[s] = Ct(o)), o.el = a.el), o.type === Pt && !o.el && (o.el = a.el);
    }
}
function Jc(e) {
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
function Co(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Co(t);
}
function qs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function To(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? To(t.subTree) : null;
}
const Ao = (e) => e.__isSuspense;
function Xc(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : lc(e);
}
const oe = /* @__PURE__ */ Symbol.for("v-fgt"), Ui = /* @__PURE__ */ Symbol.for("v-txt"), Pt = /* @__PURE__ */ Symbol.for("v-cmt"), ir = /* @__PURE__ */ Symbol.for("v-stc"), Ln = [];
let Ye = null;
function b(e = !1) {
  Ln.push(Ye = e ? null : []);
}
function eu() {
  Ln.pop(), Ye = Ln[Ln.length - 1] || null;
}
let Vn = 1;
function zs(e, t = !1) {
  Vn += e, e < 0 && Ye && t && (Ye.hasOnce = !0);
}
function $o(e) {
  return e.dynamicChildren = Vn > 0 ? Ye || dn : null, eu(), Vn > 0 && Ye && Ye.push(e), e;
}
function w(e, t, n, i, r, s) {
  return $o(
    M(
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
function Oe(e, t, n, i, r) {
  return $o(
    Xe(
      e,
      t,
      n,
      i,
      r,
      !0
    )
  );
}
function ts(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Cn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Io = ({ key: e }) => e ?? null, ci = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ce(e) || /* @__PURE__ */ Le(e) || ne(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function M(e, t = null, n = null, i = 0, r = null, s = e === oe ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Io(t),
    ref: t && ci(t),
    scopeId: Xa,
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
    ctx: Be
  };
  return o ? (is(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ce(n) ? 8 : 16), Vn > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ye.push(l), l;
}
const Xe = tu;
function tu(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === lo) && (e = Pt), ts(e)) {
    const o = vn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && is(o, n), Vn > 0 && !s && Ye && (o.shapeFlag & 6 ? Ye[Ye.indexOf(e)] = o : Ye.push(o)), o.patchFlag = -2, o;
  }
  if (fu(e) && (e = e.__vccOpts), t) {
    t = nu(t);
    let { class: o, style: l } = t;
    o && !Ce(o) && (t.class = Ke(o)), be(l) && (/* @__PURE__ */ Gr(l) && !te(l) && (l = Ae({}, l)), t.style = Jn(l));
  }
  const a = Ce(e) ? 1 : Ao(e) ? 128 : pc(e) ? 64 : be(e) ? 4 : ne(e) ? 2 : 0;
  return M(
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
function nu(e) {
  return e ? /* @__PURE__ */ Gr(e) || vo(e) ? Ae({}, e) : e : null;
}
function vn(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: a, children: o, transition: l } = e, c = t ? iu(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Io(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? te(s) ? s.concat(ci(t)) : [s, ci(t)] : ci(t)
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
    patchFlag: t && e.type !== oe ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && vn(e.ssContent),
    ssFallback: e.ssFallback && vn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Yr(
    u,
    l.clone(u)
  ), u;
}
function ns(e = " ", t = 0) {
  return Xe(Ui, null, e, t);
}
function ae(e = "", t = !1) {
  return t ? (b(), Oe(Pt, null, e)) : Xe(Pt, null, e);
}
function yt(e) {
  return e == null || typeof e == "boolean" ? Xe(Pt) : te(e) ? Xe(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ts(e) ? Ct(e) : Xe(Ui, null, String(e));
}
function Ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : vn(e);
}
function is(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (te(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), is(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !vo(t) ? t._ctx = Be : r === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: Be }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [ns(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function iu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = Ke([t.class, i.class]));
      else if (r === "style")
        t.style = Jn([t.style, i.style]);
      else if (Ei(r)) {
        const s = t[r], a = i[r];
        a && s !== a && !(te(s) && s.includes(a)) ? t[r] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Oi(r) && (t[r] = a);
      } else r !== "" && (t[r] = i[r]);
  }
  return t;
}
function pt(e, t, n, i = null) {
  ot(e, t, 7, [
    n,
    i
  ]);
}
const ru = po();
let su = 0;
function au(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || ru, s = {
    uid: su++,
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
    scope: new Ol(
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
    propsOptions: _o(i, r),
    emitsOptions: ho(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Se,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Se,
    data: Se,
    props: Se,
    attrs: Se,
    slots: Se,
    refs: Se,
    setupState: Se,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = jc.bind(null, s), e.ce && e.ce(s), s;
}
let De = null;
const No = () => De || Be;
let yi, br;
{
  const e = Fi(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((a) => a(s)) : r[0](s);
    };
  };
  yi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => De = n
  ), br = t(
    "__VUE_SSR_SETTERS__",
    (n) => Bn = n
  );
}
const ei = (e) => {
  const t = De;
  return yi(e), e.scope.on(), () => {
    e.scope.off(), yi(t);
  };
}, Us = () => {
  De && De.scope.off(), yi(null);
};
function Eo(e) {
  return e.vnode.shapeFlag & 4;
}
let Bn = !1;
function ou(e, t = !1, n = !1) {
  t && br(t);
  const { props: i, children: r } = e.vnode, s = Eo(e);
  Vc(e, i, s, t), Wc(e, r, n || t);
  const a = s ? lu(e, t) : void 0;
  return t && br(!1), a;
}
function lu(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $c);
  const { setup: i } = n;
  if (i) {
    Nt();
    const r = e.setupContext = i.length > 1 ? uu(e) : null, s = ei(e), a = Xn(
      i,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = $a(a);
    if (Et(), s(), (o || e.sp) && !hn(e) && io(e), o) {
      if (a.then(Us, Us), t)
        return a.then((l) => {
          Vs(e, l);
        }).catch((l) => {
          Di(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Vs(e, a);
  } else
    Oo(e);
}
function Vs(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : be(t) && (e.setupState = Ka(t)), Oo(e);
}
function Oo(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || vt);
  {
    const r = ei(e);
    Nt();
    try {
      Ic(e);
    } finally {
      Et(), r();
    }
  }
}
const cu = {
  get(e, t) {
    return je(e, "get", ""), e[t];
  }
};
function uu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, cu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function rs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ka(Jl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Dn)
        return Dn[n](e);
    },
    has(t, n) {
      return n in t || n in Dn;
    }
  })) : e.proxy;
}
function du(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function fu(e) {
  return ne(e) && "__vccOpts" in e;
}
const Q = (e, t) => /* @__PURE__ */ ic(e, t, Bn), pu = "3.5.35";
/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _r;
const Bs = typeof window < "u" && window.trustedTypes;
if (Bs)
  try {
    _r = /* @__PURE__ */ Bs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Po = _r ? (e) => _r.createHTML(e) : (e) => e, hu = "http://www.w3.org/2000/svg", mu = "http://www.w3.org/1998/Math/MathML", St = typeof document < "u" ? document : null, Zs = St && /* @__PURE__ */ St.createElement("template"), yu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? St.createElementNS(hu, e) : t === "mathml" ? St.createElementNS(mu, e) : n ? St.createElement(e, { is: n }) : St.createElement(e);
    return e === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (e) => St.createTextNode(e),
  createComment: (e) => St.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => St.querySelector(e),
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
      Zs.innerHTML = Po(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Zs.content;
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
}, gu = /* @__PURE__ */ Symbol("_vtc");
function vu(e, t, n) {
  const i = e[gu];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Hs = /* @__PURE__ */ Symbol("_vod"), bu = /* @__PURE__ */ Symbol("_vsh"), _u = /* @__PURE__ */ Symbol(""), xu = /(?:^|;)\s*display\s*:/;
function wu(e, t, n) {
  const i = e.style, r = Ce(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (Ce(t))
        for (const a of t.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && Nn(i, o, "");
        }
      else
        for (const a in t)
          n[a] == null && Nn(i, a, "");
    for (const a in n) {
      a === "display" && (s = !0);
      const o = n[a];
      o != null ? Su(
        e,
        a,
        !Ce(t) && t ? t[a] : void 0,
        o
      ) || Nn(i, a, o) : Nn(i, a, "");
    }
  } else if (r) {
    if (t !== n) {
      const a = i[_u];
      a && (n += ";" + a), i.cssText = n, s = xu.test(n);
    }
  } else t && e.removeAttribute("style");
  Hs in e && (e[Hs] = s ? i.display : "", e[bu] && (i.display = "none"));
}
const Ws = /\s*!important$/;
function Nn(e, t, n) {
  if (te(n))
    n.forEach((i) => Nn(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = ku(e, t);
    Ws.test(n) ? e.setProperty(
      Qe(i),
      n.replace(Ws, ""),
      "important"
    ) : e[i] = n;
  }
}
const Ks = ["Webkit", "Moz", "ms"], rr = {};
function ku(e, t) {
  const n = rr[t];
  if (n)
    return n;
  let i = Pe(t);
  if (i !== "filter" && i in e)
    return rr[t] = i;
  i = Ri(i);
  for (let r = 0; r < Ks.length; r++) {
    const s = Ks[r] + i;
    if (s in e)
      return rr[t] = s;
  }
  return t;
}
function Su(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ce(i) && n === i;
}
const Gs = "http://www.w3.org/1999/xlink";
function Qs(e, t, n, i, r, s = Nl(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Gs, t.slice(6, t.length)) : e.setAttributeNS(Gs, t, n) : n == null || s && !Ea(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : st(n) ? String(n) : n
  );
}
function Ys(e, t, n, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Po(n) : n);
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
    o === "boolean" ? n = Ea(n) : n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(r || t);
}
function Cu(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Tu(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Js = /* @__PURE__ */ Symbol("_vei");
function Au(e, t, n, i, r = null) {
  const s = e[Js] || (e[Js] = {}), a = s[t];
  if (i && a)
    a.value = i;
  else {
    const [o, l] = $u(t);
    if (i) {
      const c = s[t] = Eu(
        i,
        r
      );
      Cu(e, o, c, l);
    } else a && (Tu(e, o, a, l), s[t] = void 0);
  }
}
const Xs = /(?:Once|Passive|Capture)$/;
function $u(e) {
  let t;
  if (Xs.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Xs); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Qe(e.slice(2)), t];
}
let sr = 0;
const Iu = /* @__PURE__ */ Promise.resolve(), Nu = () => sr || (Iu.then(() => sr = 0), sr = Date.now());
function Eu(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const r = n.value;
    if (te(r)) {
      const s = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        s.call(i), i._stopped = !0;
      };
      const a = r.slice(), o = [i];
      for (let l = 0; l < a.length && !i._stopped; l++) {
        const c = a[l];
        c && ot(
          c,
          t,
          5,
          o
        );
      }
    } else
      ot(
        r,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Nu(), n;
}
const ea = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ou = (e, t, n, i, r, s) => {
  const a = r === "svg";
  t === "class" ? vu(e, i, a) : t === "style" ? wu(e, n, i) : Ei(t) ? Oi(t) || Au(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Pu(e, t, i, a)) ? (Ys(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qs(e, t, i, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Mu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ce(i))) ? Ys(e, Pe(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Qs(e, t, i, a));
};
function Pu(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ea(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ea(t) && Ce(n) ? !1 : t in e;
}
function Mu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Pe(t);
  return Array.isArray(n) ? n.some((r) => Pe(r) === i) : Object.keys(n).some((r) => Pe(r) === i);
}
const ta = {};
// @__NO_SIDE_EFFECTS__
function Ru(e, t, n) {
  let i = /* @__PURE__ */ Te(e, t);
  Pi(i) && (i = Ae({}, i, t));
  class r extends ss {
    constructor(a) {
      super(i, a, n);
    }
  }
  return r.def = i, r;
}
const Fu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class ss extends Fu {
  constructor(t, n = {}, i = ia) {
    super(), this._def = t, this._props = n, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && i !== ia ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      Ae({}, t.shadowRootOptions, {
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
      if (t instanceof ss) {
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
    this._connected = !1, Li(() => {
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
      if (s && !te(s))
        for (const l in s) {
          const c = s[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Cs(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[Pe(l)] = !0);
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
        he(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => N(n[i])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, i = te(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && i.includes(r) && this._setProp(r, this[r]);
    for (const r of i.map(Pe))
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
    let i = n ? this.getAttribute(t) : ta;
    const r = Pe(t);
    n && this._numberProps && this._numberProps[r] && (i = Cs(i)), this._setProp(r, i, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === ta ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), i)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(Qe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Qe(t), n + "") : n || this.removeAttribute(Qe(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Uu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Xe(this._def, Ae(t, this._props));
    return this._instance || (n.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const r = (s, a) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            Pi(a[0]) ? Ae({ detail: a }, a[0]) : { detail: a }
          )
        );
      };
      i.emit = (s, ...a) => {
        r(s, a), Qe(s) !== s && r(Qe(s), a);
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
function ju(e) {
  const t = No(), n = t && t.ce;
  return n || null;
}
const Du = ["ctrl", "shift", "alt", "meta"], Lu = {
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
  exact: (e, t) => Du.some((n) => e[`${n}Key`] && !t.includes(n))
}, Zn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const o = Lu[t[a]];
      if (o && o(r, t)) return;
    }
    return e(r, ...s);
  });
}, qu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, xr = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (r) => {
    if (!("key" in r))
      return;
    const s = Qe(r.key);
    if (t.some(
      (a) => a === s || qu[a] === s
    ))
      return e(r);
  });
}, zu = /* @__PURE__ */ Ae({ patchProp: Ou }, yu);
let na;
function Mo() {
  return na || (na = Gc(zu));
}
const Uu = (...e) => {
  Mo().render(...e);
}, ia = (...e) => {
  const t = Mo().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const r = Bu(i);
    if (!r) return;
    const s = t._component;
    !ne(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const a = n(r, !1, Vu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
};
function Vu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Bu(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
var de;
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
})(de || (de = {}));
var ra;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(ra || (ra = {}));
const Z = de.arrayToEnum([
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
]), Lt = (e) => {
  switch (typeof e) {
    case "undefined":
      return Z.undefined;
    case "string":
      return Z.string;
    case "number":
      return Number.isNaN(e) ? Z.nan : Z.number;
    case "boolean":
      return Z.boolean;
    case "function":
      return Z.function;
    case "bigint":
      return Z.bigint;
    case "symbol":
      return Z.symbol;
    case "object":
      return Array.isArray(e) ? Z.array : e === null ? Z.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? Z.promise : typeof Map < "u" && e instanceof Map ? Z.map : typeof Set < "u" && e instanceof Set ? Z.set : typeof Date < "u" && e instanceof Date ? Z.date : Z.object;
    default:
      return Z.unknown;
  }
}, $ = de.arrayToEnum([
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
class Mt extends Error {
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
    if (!(t instanceof Mt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, de.jsonStringifyReplacer, 2);
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
Mt.create = (e) => new Mt(e);
const wr = (e, t) => {
  let n;
  switch (e.code) {
    case $.invalid_type:
      e.received === Z.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case $.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, de.jsonStringifyReplacer)}`;
      break;
    case $.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${de.joinValues(e.keys, ", ")}`;
      break;
    case $.invalid_union:
      n = "Invalid input";
      break;
    case $.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${de.joinValues(e.options)}`;
      break;
    case $.invalid_enum_value:
      n = `Invalid enum value. Expected ${de.joinValues(e.options)}, received '${e.received}'`;
      break;
    case $.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case $.invalid_return_type:
      n = "Invalid function return type";
      break;
    case $.invalid_date:
      n = "Invalid date";
      break;
    case $.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : de.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case $.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case $.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case $.custom:
      n = "Invalid input";
      break;
    case $.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case $.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case $.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, de.assertNever(e);
  }
  return { message: n };
};
let Zu = wr;
function Hu() {
  return Zu;
}
const Wu = (e) => {
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
function q(e, t) {
  const n = Hu(), i = Wu({
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
      n === wr ? void 0 : wr
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(i);
}
class Ze {
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
        return J;
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
    return Ze.mergeObjectSync(t, i);
  }
  static mergeObjectSync(t, n) {
    const i = {};
    for (const r of n) {
      const { key: s, value: a } = r;
      if (s.status === "aborted" || a.status === "aborted")
        return J;
      s.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || r.alwaysSet) && (i[s.value] = a.value);
    }
    return { status: t.value, value: i };
  }
}
const J = Object.freeze({
  status: "aborted"
}), En = (e) => ({ status: "dirty", value: e }), et = (e) => ({ status: "valid", value: e }), sa = (e) => e.status === "aborted", aa = (e) => e.status === "dirty", bn = (e) => e.status === "valid", gi = (e) => typeof Promise < "u" && e instanceof Promise;
var K;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(K || (K = {}));
class xt {
  constructor(t, n, i, r) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = i, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const oa = (e, t) => {
  if (bn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Mt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function ie(e) {
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
class le {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Lt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Lt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Ze(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Lt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (gi(n))
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
      parsedType: Lt(t)
    }, r = this._parseSync({ data: t, path: i.path, parent: i });
    return oa(i, r);
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
      parsedType: Lt(t)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: t, path: [], parent: n });
        return bn(s) ? {
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
    return this._parseAsync({ data: t, path: [], parent: n }).then((s) => bn(s) ? {
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
      parsedType: Lt(t)
    }, r = this._parse({ data: t, path: i.path, parent: i }), s = await (gi(r) ? r : Promise.resolve(r));
    return oa(i, s);
  }
  refine(t, n) {
    const i = (r) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(r) : n;
    return this._refinement((r, s) => {
      const a = t(r), o = () => s.addIssue({
        code: $.custom,
        ...i(r)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((i, r) => t(i) ? !0 : (r.addIssue(typeof n == "function" ? n(i, r) : n), !1));
  }
  _refinement(t) {
    return new rn({
      schema: this,
      typeName: X.ZodEffects,
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
    return $t.create(this, this._def);
  }
  nullable() {
    return sn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return _t.create(this);
  }
  promise() {
    return Si.create(this, this._def);
  }
  or(t) {
    return bi.create([this, t], this._def);
  }
  and(t) {
    return _i.create(this, t, this._def);
  }
  transform(t) {
    return new rn({
      ...ie(this._def),
      schema: this,
      typeName: X.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ci({
      ...ie(this._def),
      innerType: this,
      defaultValue: n,
      typeName: X.ZodDefault
    });
  }
  brand() {
    return new Do({
      typeName: X.ZodBranded,
      type: this,
      ...ie(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ti({
      ...ie(this._def),
      innerType: this,
      catchValue: n,
      typeName: X.ZodCatch
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
    return os.create(this, t);
  }
  readonly() {
    return Ai.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Ku = /^c[^\s-]{8,}$/i, Gu = /^[0-9a-z]+$/, Qu = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Yu = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Ju = /^[a-z0-9_-]{21}$/i, Xu = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, ed = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, td = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, nd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ar;
const id = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, rd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, sd = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ad = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, od = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ld = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ro = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", cd = new RegExp(`^${Ro}$`);
function Fo(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function ud(e) {
  return new RegExp(`^${Fo(e)}$`);
}
function dd(e) {
  let t = `${Ro}T${Fo(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function fd(e, t) {
  return !!((t === "v4" || !t) && id.test(e) || (t === "v6" || !t) && sd.test(e));
}
function pd(e, t) {
  if (!Xu.test(e))
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
function hd(e, t) {
  return !!((t === "v4" || !t) && rd.test(e) || (t === "v6" || !t) && ad.test(e));
}
class At extends le {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== Z.string) {
      const s = this._getOrReturnCtx(t);
      return q(s, {
        code: $.invalid_type,
        expected: Z.string,
        received: s.parsedType
      }), J;
    }
    const i = new Ze();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (r = this._getOrReturnCtx(t, r), q(r, {
          code: $.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (r = this._getOrReturnCtx(t, r), q(r, {
          code: $.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "length") {
        const a = t.data.length > s.value, o = t.data.length < s.value;
        (a || o) && (r = this._getOrReturnCtx(t, r), a ? q(r, {
          code: $.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && q(r, {
          code: $.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), i.dirty());
      } else if (s.kind === "email")
        td.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "email",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "emoji")
        ar || (ar = new RegExp(nd, "u")), ar.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "emoji",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "uuid")
        Yu.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "uuid",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "nanoid")
        Ju.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "nanoid",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid")
        Ku.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "cuid",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid2")
        Gu.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "cuid2",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "ulid")
        Qu.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "ulid",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), q(r, {
            validation: "url",
            code: $.invalid_string,
            message: s.message
          }), i.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "regex",
        code: $.invalid_string,
        message: s.message
      }), i.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: $.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), i.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: $.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: $.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "datetime" ? dd(s).test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: $.invalid_string,
        validation: "datetime",
        message: s.message
      }), i.dirty()) : s.kind === "date" ? cd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: $.invalid_string,
        validation: "date",
        message: s.message
      }), i.dirty()) : s.kind === "time" ? ud(s).test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: $.invalid_string,
        validation: "time",
        message: s.message
      }), i.dirty()) : s.kind === "duration" ? ed.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "duration",
        code: $.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "ip" ? fd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "ip",
        code: $.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "jwt" ? pd(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "jwt",
        code: $.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "cidr" ? hd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "cidr",
        code: $.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64" ? od.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "base64",
        code: $.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64url" ? ld.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "base64url",
        code: $.invalid_string,
        message: s.message
      }), i.dirty()) : de.assertNever(s);
    return { status: i.value, value: t.data };
  }
  _regex(t, n, i) {
    return this.refinement((r) => t.test(r), {
      validation: n,
      code: $.invalid_string,
      ...K.errToObj(i)
    });
  }
  _addCheck(t) {
    return new At({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...K.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...K.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...K.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...K.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...K.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...K.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...K.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...K.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...K.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...K.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...K.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...K.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...K.errToObj(t) });
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
      ...K.errToObj(t == null ? void 0 : t.message)
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
      ...K.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...K.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...K.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...K.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...K.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...K.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...K.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...K.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...K.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, K.errToObj(t));
  }
  trim() {
    return new At({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new At({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new At({
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
At.create = (e) => new At({
  checks: [],
  typeName: X.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ie(e)
});
function md(e, t) {
  const n = (e.toString().split(".")[1] || "").length, i = (t.toString().split(".")[1] || "").length, r = n > i ? n : i, s = Number.parseInt(e.toFixed(r).replace(".", "")), a = Number.parseInt(t.toFixed(r).replace(".", ""));
  return s % a / 10 ** r;
}
class _n extends le {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== Z.number) {
      const s = this._getOrReturnCtx(t);
      return q(s, {
        code: $.invalid_type,
        expected: Z.number,
        received: s.parsedType
      }), J;
    }
    let i;
    const r = new Ze();
    for (const s of this._def.checks)
      s.kind === "int" ? de.isInteger(t.data) || (i = this._getOrReturnCtx(t, i), q(i, {
        code: $.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), q(i, {
        code: $.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), q(i, {
        code: $.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? md(t.data, s.value) !== 0 && (i = this._getOrReturnCtx(t, i), q(i, {
        code: $.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (i = this._getOrReturnCtx(t, i), q(i, {
        code: $.not_finite,
        message: s.message
      }), r.dirty()) : de.assertNever(s);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, K.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, K.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, K.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, K.toString(n));
  }
  setLimit(t, n, i, r) {
    return new _n({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: K.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new _n({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: K.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: K.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: K.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: K.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: K.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: K.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: K.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: K.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: K.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && de.isInteger(t.value));
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
_n.create = (e) => new _n({
  checks: [],
  typeName: X.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ie(e)
});
class Hn extends le {
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
    if (this._getType(t) !== Z.bigint)
      return this._getInvalidInput(t);
    let i;
    const r = new Ze();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), q(i, {
        code: $.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), q(i, {
        code: $.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (i = this._getOrReturnCtx(t, i), q(i, {
        code: $.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : de.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return q(n, {
      code: $.invalid_type,
      expected: Z.bigint,
      received: n.parsedType
    }), J;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, K.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, K.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, K.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, K.toString(n));
  }
  setLimit(t, n, i, r) {
    return new Hn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: K.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Hn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: K.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: K.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: K.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: K.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: K.toString(n)
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
Hn.create = (e) => new Hn({
  checks: [],
  typeName: X.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ie(e)
});
class kr extends le {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Z.boolean) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: $.invalid_type,
        expected: Z.boolean,
        received: i.parsedType
      }), J;
    }
    return et(t.data);
  }
}
kr.create = (e) => new kr({
  typeName: X.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ie(e)
});
class vi extends le {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== Z.date) {
      const s = this._getOrReturnCtx(t);
      return q(s, {
        code: $.invalid_type,
        expected: Z.date,
        received: s.parsedType
      }), J;
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return q(s, {
        code: $.invalid_date
      }), J;
    }
    const i = new Ze();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), q(r, {
        code: $.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), i.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), q(r, {
        code: $.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), i.dirty()) : de.assertNever(s);
    return {
      status: i.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new vi({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: K.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: K.toString(n)
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
vi.create = (e) => new vi({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: X.ZodDate,
  ...ie(e)
});
class la extends le {
  _parse(t) {
    if (this._getType(t) !== Z.symbol) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: $.invalid_type,
        expected: Z.symbol,
        received: i.parsedType
      }), J;
    }
    return et(t.data);
  }
}
la.create = (e) => new la({
  typeName: X.ZodSymbol,
  ...ie(e)
});
class Sr extends le {
  _parse(t) {
    if (this._getType(t) !== Z.undefined) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: $.invalid_type,
        expected: Z.undefined,
        received: i.parsedType
      }), J;
    }
    return et(t.data);
  }
}
Sr.create = (e) => new Sr({
  typeName: X.ZodUndefined,
  ...ie(e)
});
class Cr extends le {
  _parse(t) {
    if (this._getType(t) !== Z.null) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: $.invalid_type,
        expected: Z.null,
        received: i.parsedType
      }), J;
    }
    return et(t.data);
  }
}
Cr.create = (e) => new Cr({
  typeName: X.ZodNull,
  ...ie(e)
});
class ca extends le {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return et(t.data);
  }
}
ca.create = (e) => new ca({
  typeName: X.ZodAny,
  ...ie(e)
});
class Tr extends le {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return et(t.data);
  }
}
Tr.create = (e) => new Tr({
  typeName: X.ZodUnknown,
  ...ie(e)
});
class Vt extends le {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return q(n, {
      code: $.invalid_type,
      expected: Z.never,
      received: n.parsedType
    }), J;
  }
}
Vt.create = (e) => new Vt({
  typeName: X.ZodNever,
  ...ie(e)
});
class ua extends le {
  _parse(t) {
    if (this._getType(t) !== Z.undefined) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: $.invalid_type,
        expected: Z.void,
        received: i.parsedType
      }), J;
    }
    return et(t.data);
  }
}
ua.create = (e) => new ua({
  typeName: X.ZodVoid,
  ...ie(e)
});
class _t extends le {
  _parse(t) {
    const { ctx: n, status: i } = this._processInputParams(t), r = this._def;
    if (n.parsedType !== Z.array)
      return q(n, {
        code: $.invalid_type,
        expected: Z.array,
        received: n.parsedType
      }), J;
    if (r.exactLength !== null) {
      const a = n.data.length > r.exactLength.value, o = n.data.length < r.exactLength.value;
      (a || o) && (q(n, {
        code: a ? $.too_big : $.too_small,
        minimum: o ? r.exactLength.value : void 0,
        maximum: a ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), i.dirty());
    }
    if (r.minLength !== null && n.data.length < r.minLength.value && (q(n, {
      code: $.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), i.dirty()), r.maxLength !== null && n.data.length > r.maxLength.value && (q(n, {
      code: $.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), i.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, o) => r.type._parseAsync(new xt(n, a, n.path, o)))).then((a) => Ze.mergeArray(i, a));
    const s = [...n.data].map((a, o) => r.type._parseSync(new xt(n, a, n.path, o)));
    return Ze.mergeArray(i, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new _t({
      ...this._def,
      minLength: { value: t, message: K.toString(n) }
    });
  }
  max(t, n) {
    return new _t({
      ...this._def,
      maxLength: { value: t, message: K.toString(n) }
    });
  }
  length(t, n) {
    return new _t({
      ...this._def,
      exactLength: { value: t, message: K.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
_t.create = (e, t) => new _t({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: X.ZodArray,
  ...ie(t)
});
function un(e) {
  if (e instanceof Ie) {
    const t = {};
    for (const n in e.shape) {
      const i = e.shape[n];
      t[n] = $t.create(un(i));
    }
    return new Ie({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof _t ? new _t({
    ...e._def,
    type: un(e.element)
  }) : e instanceof $t ? $t.create(un(e.unwrap())) : e instanceof sn ? sn.create(un(e.unwrap())) : e instanceof tn ? tn.create(e.items.map((t) => un(t))) : e;
}
class Ie extends le {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = de.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== Z.object) {
      const c = this._getOrReturnCtx(t);
      return q(c, {
        code: $.invalid_type,
        expected: Z.object,
        received: c.parsedType
      }), J;
    }
    const { status: i, ctx: r } = this._processInputParams(t), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Vt && this._def.unknownKeys === "strip"))
      for (const c in r.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const u = s[c], d = r.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new xt(r, d, r.path, c)),
        alwaysSet: c in r.data
      });
    }
    if (this._def.catchall instanceof Vt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: r.data[u] }
          });
      else if (c === "strict")
        o.length > 0 && (q(r, {
          code: $.unrecognized_keys,
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
            new xt(r, d, r.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const d = await u.key, f = await u.value;
        c.push({
          key: d,
          value: f,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => Ze.mergeObjectSync(i, c)) : Ze.mergeObjectSync(i, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return K.errToObj, new Ie({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, i) => {
          var s, a;
          const r = ((a = (s = this._def).errorMap) == null ? void 0 : a.call(s, n, i).message) ?? i.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: K.errToObj(t).message ?? r
          } : {
            message: r
          };
        }
      } : {}
    });
  }
  strip() {
    return new Ie({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ie({
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
    return new Ie({
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
    return new Ie({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: X.ZodObject
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
    return new Ie({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const i of de.objectKeys(t))
      t[i] && this.shape[i] && (n[i] = this.shape[i]);
    return new Ie({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const i of de.objectKeys(this.shape))
      t[i] || (n[i] = this.shape[i]);
    return new Ie({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return un(this);
  }
  partial(t) {
    const n = {};
    for (const i of de.objectKeys(this.shape)) {
      const r = this.shape[i];
      t && !t[i] ? n[i] = r : n[i] = r.optional();
    }
    return new Ie({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const i of de.objectKeys(this.shape))
      if (t && !t[i])
        n[i] = this.shape[i];
      else {
        let s = this.shape[i];
        for (; s instanceof $t; )
          s = s._def.innerType;
        n[i] = s;
      }
    return new Ie({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return jo(de.objectKeys(this.shape));
  }
}
Ie.create = (e, t) => new Ie({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Vt.create(),
  typeName: X.ZodObject,
  ...ie(t)
});
Ie.strictCreate = (e, t) => new Ie({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Vt.create(),
  typeName: X.ZodObject,
  ...ie(t)
});
Ie.lazycreate = (e, t) => new Ie({
  shape: e,
  unknownKeys: "strip",
  catchall: Vt.create(),
  typeName: X.ZodObject,
  ...ie(t)
});
class bi extends le {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), i = this._def.options;
    function r(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new Mt(o.ctx.common.issues));
      return q(n, {
        code: $.invalid_union,
        unionErrors: a
      }), J;
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
      const o = a.map((l) => new Mt(l));
      return q(n, {
        code: $.invalid_union,
        unionErrors: o
      }), J;
    }
  }
  get options() {
    return this._def.options;
  }
}
bi.create = (e, t) => new bi({
  options: e,
  typeName: X.ZodUnion,
  ...ie(t)
});
const kt = (e) => e instanceof wi ? kt(e.schema) : e instanceof rn ? kt(e.innerType()) : e instanceof ki ? [e.value] : e instanceof nn ? e.options : e instanceof $r ? de.objectValues(e.enum) : e instanceof Ci ? kt(e._def.innerType) : e instanceof Sr ? [void 0] : e instanceof Cr ? [null] : e instanceof $t ? [void 0, ...kt(e.unwrap())] : e instanceof sn ? [null, ...kt(e.unwrap())] : e instanceof Do || e instanceof Ai ? kt(e.unwrap()) : e instanceof Ti ? kt(e._def.innerType) : [];
class as extends le {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Z.object)
      return q(n, {
        code: $.invalid_type,
        expected: Z.object,
        received: n.parsedType
      }), J;
    const i = this.discriminator, r = n.data[i], s = this.optionsMap.get(r);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (q(n, {
      code: $.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [i]
    }), J);
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
      const a = kt(s.shape[t]);
      if (!a.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (r.has(o))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        r.set(o, s);
      }
    }
    return new as({
      typeName: X.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: r,
      ...ie(i)
    });
  }
}
function Ar(e, t) {
  const n = Lt(e), i = Lt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === Z.object && i === Z.object) {
    const r = de.objectKeys(t), s = de.objectKeys(e).filter((o) => r.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of s) {
      const l = Ar(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (n === Z.array && i === Z.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s], o = t[s], l = Ar(a, o);
      if (!l.valid)
        return { valid: !1 };
      r.push(l.data);
    }
    return { valid: !0, data: r };
  } else return n === Z.date && i === Z.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class _i extends le {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = (s, a) => {
      if (sa(s) || sa(a))
        return J;
      const o = Ar(s.value, a.value);
      return o.valid ? ((aa(s) || aa(a)) && n.dirty(), { status: n.value, value: o.data }) : (q(i, {
        code: $.invalid_intersection_types
      }), J);
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
_i.create = (e, t, n) => new _i({
  left: e,
  right: t,
  typeName: X.ZodIntersection,
  ...ie(n)
});
class tn extends le {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Z.array)
      return q(i, {
        code: $.invalid_type,
        expected: Z.array,
        received: i.parsedType
      }), J;
    if (i.data.length < this._def.items.length)
      return q(i, {
        code: $.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), J;
    !this._def.rest && i.data.length > this._def.items.length && (q(i, {
      code: $.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...i.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new xt(i, a, i.path, o)) : null;
    }).filter((a) => !!a);
    return i.common.async ? Promise.all(s).then((a) => Ze.mergeArray(n, a)) : Ze.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new tn({
      ...this._def,
      rest: t
    });
  }
}
tn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new tn({
    items: e,
    typeName: X.ZodTuple,
    rest: null,
    ...ie(t)
  });
};
class xi extends le {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Z.object)
      return q(i, {
        code: $.invalid_type,
        expected: Z.object,
        received: i.parsedType
      }), J;
    const r = [], s = this._def.keyType, a = this._def.valueType;
    for (const o in i.data)
      r.push({
        key: s._parse(new xt(i, o, i.path, o)),
        value: a._parse(new xt(i, i.data[o], i.path, o)),
        alwaysSet: o in i.data
      });
    return i.common.async ? Ze.mergeObjectAsync(n, r) : Ze.mergeObjectSync(n, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, i) {
    return n instanceof le ? new xi({
      keyType: t,
      valueType: n,
      typeName: X.ZodRecord,
      ...ie(i)
    }) : new xi({
      keyType: At.create(),
      valueType: t,
      typeName: X.ZodRecord,
      ...ie(n)
    });
  }
}
class da extends le {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Z.map)
      return q(i, {
        code: $.invalid_type,
        expected: Z.map,
        received: i.parsedType
      }), J;
    const r = this._def.keyType, s = this._def.valueType, a = [...i.data.entries()].map(([o, l], c) => ({
      key: r._parse(new xt(i, o, i.path, [c, "key"])),
      value: s._parse(new xt(i, l, i.path, [c, "value"]))
    }));
    if (i.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return J;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return J;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
da.create = (e, t, n) => new da({
  valueType: t,
  keyType: e,
  typeName: X.ZodMap,
  ...ie(n)
});
class Wn extends le {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Z.set)
      return q(i, {
        code: $.invalid_type,
        expected: Z.set,
        received: i.parsedType
      }), J;
    const r = this._def;
    r.minSize !== null && i.data.size < r.minSize.value && (q(i, {
      code: $.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), n.dirty()), r.maxSize !== null && i.data.size > r.maxSize.value && (q(i, {
      code: $.too_big,
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
          return J;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const o = [...i.data.values()].map((l, c) => s._parse(new xt(i, l, i.path, c)));
    return i.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(t, n) {
    return new Wn({
      ...this._def,
      minSize: { value: t, message: K.toString(n) }
    });
  }
  max(t, n) {
    return new Wn({
      ...this._def,
      maxSize: { value: t, message: K.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Wn.create = (e, t) => new Wn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: X.ZodSet,
  ...ie(t)
});
class wi extends le {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
wi.create = (e, t) => new wi({
  getter: e,
  typeName: X.ZodLazy,
  ...ie(t)
});
class ki extends le {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return q(n, {
        received: n.data,
        code: $.invalid_literal,
        expected: this._def.value
      }), J;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ki.create = (e, t) => new ki({
  value: e,
  typeName: X.ZodLiteral,
  ...ie(t)
});
function jo(e, t) {
  return new nn({
    values: e,
    typeName: X.ZodEnum,
    ...ie(t)
  });
}
class nn extends le {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return q(n, {
        expected: de.joinValues(i),
        received: n.parsedType,
        code: $.invalid_type
      }), J;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return q(n, {
        received: n.data,
        code: $.invalid_enum_value,
        options: i
      }), J;
    }
    return et(t.data);
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
    return nn.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return nn.create(this.options.filter((i) => !t.includes(i)), {
      ...this._def,
      ...n
    });
  }
}
nn.create = jo;
class $r extends le {
  _parse(t) {
    const n = de.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(t);
    if (i.parsedType !== Z.string && i.parsedType !== Z.number) {
      const r = de.objectValues(n);
      return q(i, {
        expected: de.joinValues(r),
        received: i.parsedType,
        code: $.invalid_type
      }), J;
    }
    if (this._cache || (this._cache = new Set(de.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = de.objectValues(n);
      return q(i, {
        received: i.data,
        code: $.invalid_enum_value,
        options: r
      }), J;
    }
    return et(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
$r.create = (e, t) => new $r({
  values: e,
  typeName: X.ZodNativeEnum,
  ...ie(t)
});
class Si extends le {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Z.promise && n.common.async === !1)
      return q(n, {
        code: $.invalid_type,
        expected: Z.promise,
        received: n.parsedType
      }), J;
    const i = n.parsedType === Z.promise ? n.data : Promise.resolve(n.data);
    return et(i.then((r) => this._def.type.parseAsync(r, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Si.create = (e, t) => new Si({
  type: e,
  typeName: X.ZodPromise,
  ...ie(t)
});
class rn extends le {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === X.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = this._def.effect || null, s = {
      addIssue: (a) => {
        q(i, a), a.fatal ? n.abort() : n.dirty();
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
            return J;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: i.path,
            parent: i
          });
          return l.status === "aborted" ? J : l.status === "dirty" || n.value === "dirty" ? En(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return J;
        const o = this._def.schema._parseSync({
          data: a,
          path: i.path,
          parent: i
        });
        return o.status === "aborted" ? J : o.status === "dirty" || n.value === "dirty" ? En(o.value) : o;
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
        return o.status === "aborted" ? J : (o.status === "dirty" && n.dirty(), a(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((o) => o.status === "aborted" ? J : (o.status === "dirty" && n.dirty(), a(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (r.type === "transform")
      if (i.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        if (!bn(a))
          return J;
        const o = r.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((a) => bn(a) ? Promise.resolve(r.transform(a.value, s)).then((o) => ({
          status: n.value,
          value: o
        })) : J);
    de.assertNever(r);
  }
}
rn.create = (e, t, n) => new rn({
  schema: e,
  typeName: X.ZodEffects,
  effect: t,
  ...ie(n)
});
rn.createWithPreprocess = (e, t, n) => new rn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: X.ZodEffects,
  ...ie(n)
});
class $t extends le {
  _parse(t) {
    return this._getType(t) === Z.undefined ? et(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
$t.create = (e, t) => new $t({
  innerType: e,
  typeName: X.ZodOptional,
  ...ie(t)
});
class sn extends le {
  _parse(t) {
    return this._getType(t) === Z.null ? et(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
sn.create = (e, t) => new sn({
  innerType: e,
  typeName: X.ZodNullable,
  ...ie(t)
});
class Ci extends le {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let i = n.data;
    return n.parsedType === Z.undefined && (i = this._def.defaultValue()), this._def.innerType._parse({
      data: i,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ci.create = (e, t) => new Ci({
  innerType: e,
  typeName: X.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ie(t)
});
class Ti extends le {
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
    return gi(r) ? r.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Mt(i.common.issues);
        },
        input: i.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new Mt(i.common.issues);
        },
        input: i.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ti.create = (e, t) => new Ti({
  innerType: e,
  typeName: X.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ie(t)
});
class fa extends le {
  _parse(t) {
    if (this._getType(t) !== Z.nan) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: $.invalid_type,
        expected: Z.nan,
        received: i.parsedType
      }), J;
    }
    return { status: "valid", value: t.data };
  }
}
fa.create = (e) => new fa({
  typeName: X.ZodNaN,
  ...ie(e)
});
class Do extends le {
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
class os extends le {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return s.status === "aborted" ? J : s.status === "dirty" ? (n.dirty(), En(s.value)) : this._def.out._parseAsync({
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
      return r.status === "aborted" ? J : r.status === "dirty" ? (n.dirty(), {
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
    return new os({
      in: t,
      out: n,
      typeName: X.ZodPipeline
    });
  }
}
class Ai extends le {
  _parse(t) {
    const n = this._def.innerType._parse(t), i = (r) => (bn(r) && (r.value = Object.freeze(r.value)), r);
    return gi(n) ? n.then((r) => i(r)) : i(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ai.create = (e, t) => new Ai({
  innerType: e,
  typeName: X.ZodReadonly,
  ...ie(t)
});
var X;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(X || (X = {}));
const B = At.create, H = _n.create, Ve = kr.create, Lo = Tr.create;
Vt.create;
const me = _t.create, se = Ie.create, Kn = bi.create, yd = as.create;
_i.create;
tn.create;
const ls = xi.create, gd = wi.create, tt = ki.create, _e = nn.create;
Si.create;
$t.create;
sn.create;
const vd = _e([
  "eq",
  "neq",
  "in",
  "gt",
  "gte",
  "lt",
  "lte",
  "isSet",
  "notSet"
]), pa = se({
  ref: B().min(1),
  op: vd,
  value: Kn([B(), H(), me(B()), me(H())]).optional()
}), Ir = gd(() => se({
  all: me(Kn([pa, Ir])).optional(),
  any: me(Kn([pa, Ir])).optional()
}));
function cs(e) {
  return "op" in e;
}
const bd = [
  "file.pages",
  "file.colorPages",
  "file.monoPages",
  "file.status"
], qo = "quantity", _d = _e(["quantity", "pages", "area", "length"]), xd = se({
  /**
   * Inclusive upper bound on the basis value. MUST be omitted on the last
   * row (open-ended) and present on every other row — validate.ts enforces
   * strictly-increasing order, which makes overlap impossible by construction.
   */
  upTo: H().positive().optional(),
  amount: H()
}), zo = se({
  basis: _d.default("quantity"),
  /**
   * flat:      the entire basis value is priced at the matched row's amount.
   * graduated: each band is priced at its own amount and summed
   *            (progressive-tax style).
   */
  mode: _e(["flat", "graduated"]).default("flat"),
  rows: me(xd).min(1)
}), wd = _e(["sqm", "sqft", "sqin"]), kd = _e(["m", "ft", "in", "cm"]), Sd = _e([
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
  "setup",
  //        once per order, AFTER percent/multiplier (stage D)
  "formula"
  //       the rule's whole contribution, from `formula` (stage A)
]), Cd = se({
  name: B(),
  expression: B()
}), Td = se({
  /** Evaluated in order; each step may use the ones before it. */
  steps: me(Cd).default([]),
  /**
   * The rule's contribution to the order total. NOT multiplied by the
   * quantity — the formula reads `qty` itself.
   */
  expression: B()
}), Uo = se({
  type: Sd,
  /** Ignored on a formula rule (written as 0). */
  amount: H(),
  /**
   * perArea: the unit `amount` is priced in.
   * formula: the unit of `area`. Default "sqm" (engine-side).
   */
  areaUnit: wd.optional(),
  /**
   * perLength: the unit `amount` is priced in.
   * formula: the unit of `w` and `h`. Default "m" (engine-side).
   */
  lengthUnit: kd.optional(),
  /**
   * perLength only: which axis of the source W×H is the billable
   * length. Default "h" (a roll's fixed width is w; the consumed
   * length is h). "max" prices the longest side.
   */
  lengthAxis: _e(["h", "w", "max"]).optional(),
  /**
   * perArea/perLength/formula only: id of a `dimensions` field to read
   * W×H from. Fallback when omitted: FileMetadata.canvas.
   */
  dimensionsField: B().optional(),
  /**
   * Volume/size breaks. For basis "area" the basis value is in
   * `areaUnit`; for basis "length", in `lengthUnit`.
   */
  tiers: zo.optional(),
  /** formula only: the steps and the price (formula.ts has the language). */
  formula: Td.optional()
}), Ad = se({
  amount: H().nonnegative().default(0),
  /** "order": added once (v1 behavior). "unit": × quantity (t-shirts, cards). */
  per: _e(["order", "unit"]).default("order"),
  /**
   * Quantity breaks on the base. basis must be "quantity"; mode "graduated"
   * requires per === "unit" (validate.ts).
   */
  tiers: zo.optional()
}), $d = se({
  currency: B().regex(/^[A-Z]{3}$/, "ISO 4217 currency code").default("USD"),
  basePrice: Ad.default({}),
  /** Flat fee added once, after percent/multiplier (stage D). */
  setupFee: H().nonnegative().optional(),
  /** Floor applied to the final total (stage E). */
  minimumPrice: H().nonnegative().optional(),
  /**
   * How a configured job sits in the cart.
   *
   * "job" (the default when absent): one line of quantity 1 whose price is
   * the job total; the count lives in the title and properties.
   *
   * "units": the line carries the REAL copy count at a per-unit price, so
   * the platform's own quantity column, shipping weight and stock use the
   * true number. Guarded — applied only when the verified total splits
   * EXACTLY across the copies in the currency's minor units (and, on
   * Shopify, the buyer is charged in the shop currency and the job is at
   * most 2000 copies, the platform's cap for a bundle component). Any job
   * that fails a guard is carried as "job" instead, at the same verified
   * total — the customer never pays a different amount either way.
   *
   * Opt-in because it changes what an order looks like: line quantity,
   * stock decrement and weight all follow the copies.
   */
  lineQuantity: _e(["job", "units"]).optional()
}), $i = "2.0", Id = se({
  artworkSize: se({
    width_mm: H().positive().optional(),
    height_mm: H().positive().optional()
  }).optional(),
  pageCount: se({
    min: H().int().positive().optional(),
    max: H().int().positive().optional()
  }).optional(),
  fileCount: se({
    min: H().int().positive().optional(),
    max: H().int().positive().optional()
  }).optional(),
  bleed: se({ required_mm: H().nonnegative().optional() }).optional(),
  safety: se({ min_mm: H().nonnegative().optional() }).optional()
}).strict(), Nd = se({
  context: Id.optional()
}), us = se({
  id: B().min(1),
  label: B(),
  description: B().optional(),
  /** http(s) URL or data: URI (builder can embed small images). */
  image: B().optional(),
  /** Hex color for swatch display. */
  color: B().optional(),
  /** Default selection for the parent field. */
  default: Ve().optional(),
  /** Merchant SKU fragment for this choice (used by resolveSku / adapters). */
  sku: B().optional(),
  /** Manually mark a choice unavailable without deleting it. */
  disabled: Ve().optional(),
  /** Price changes applied when this choice is selected. */
  priceModifiers: me(Uo).default([]),
  /** What selecting this choice tells the Filecheck intake (if any). */
  filecheck: Nd.optional()
}), Ft = se({
  id: B().min(1),
  label: B().optional(),
  helpText: B().optional(),
  required: Ve().default(!1),
  visibleWhen: Ir.optional(),
  /** Price changes applied just for having this field visible. */
  priceModifiers: me(Uo).default([]),
  /**
   * Semantic role for the Page API (docs/page-api-v1.md): lets on-page
   * integrations find "the size field" regardless of the merchant's own
   * ids/labels. v1 vocabulary: "size" | "pages" | "material" |
   * "orientation" — deliberately an OPEN string (a role is a label, never
   * behavior; unknown roles pass through). At most one field per role per
   * document (validate.ts). Field types quantity/dimensions/file need no
   * role — they are semantic by themselves.
   */
  role: B().optional()
}), Ed = Ft.extend({
  type: tt("select-one"),
  display: _e(["cards", "grid", "swatches", "pills", "dropdown", "list"]).default("pills"),
  options: me(us).min(1)
}), Od = Ft.extend({
  type: tt("select-many"),
  display: _e(["cards", "grid", "swatches", "pills", "list"]).default("list"),
  options: me(us).min(1),
  minSelect: H().int().nonnegative().default(0),
  maxSelect: H().int().positive().optional()
}), Pd = Ft.extend({
  type: tt("quantity"),
  display: _e(["stepper", "pills", "dropdown", "input"]).default("stepper"),
  min: H().int().positive().default(1),
  max: H().int().positive().optional(),
  step: H().int().positive().default(1),
  defaultValue: H().int().positive().default(1),
  /** Preset quantities for pills/dropdown display (e.g. 100/250/500/1000). */
  presets: me(H().int().positive()).optional(),
  /**
   * Word shown after the number wherever the answer is recapped — the cart
   * line, the order, the widget's summary: "5 banners". Storefront themes
   * differ in whether they print a property's label, and a bare "5" beside
   * a cart quantity of 1 does not say what it counts.
   */
  unit: B().max(40).optional(),
  /**
   * Show "Add 15 more to get 15% off" under the total when another
   * quantity break is in reach. Display only.
   */
  nextBreakHint: Ve().optional()
}), Md = Ft.extend({
  type: tt("quantities"),
  /** grid: a card per option with its own stepper. list: one row per option. */
  display: _e(["grid", "list"]).default("grid"),
  options: me(us).min(1),
  /** Per option: 0, or min, min+step, … up to max (the `quantity` grid rule). */
  min: H().int().positive().default(1),
  max: H().int().positive().optional(),
  step: H().int().positive().default(1),
  /** The whole job — what quantity pricing, tiers and the cart see. */
  minTotal: H().int().positive().default(1),
  maxTotal: H().int().positive().optional(),
  /** Word after the total in the widget: "10 shirts". */
  unit: B().max(40).optional(),
  /** See QuantityField.nextBreakHint. */
  nextBreakHint: Ve().optional()
}), Rd = Ft.extend({
  type: tt("number"),
  display: _e(["stepper", "slider", "input"]).default("input"),
  min: H().optional(),
  max: H().optional(),
  step: H().positive().optional(),
  defaultValue: H().optional()
}), Fd = Ft.extend({
  type: tt("text"),
  display: _e(["input", "textarea"]).default("input"),
  placeholder: B().optional(),
  maxLength: H().int().positive().optional()
}), Nr = _e(["mm", "cm", "in"]), jd = Ft.extend({
  type: tt("dimensions"),
  display: _e(["inputs"]).default("inputs"),
  /** Units the customer may pick between. */
  units: me(Nr).min(1).default(["mm"]),
  defaultUnit: Nr.default("mm"),
  /** Constraints, expressed in defaultUnit. */
  minW: H().positive().optional(),
  maxW: H().positive().optional(),
  minH: H().positive().optional(),
  maxH: H().positive().optional(),
  defaultValue: se({ w: H().positive(), h: H().positive() }).optional()
}), Dd = se({
  /** Saved Filecheck workflow that validates uploads for this field. */
  workflowId: B().min(1).optional(),
  /**
   * Inline (transient) workflow object, passed verbatim to the Filecheck
   * element. Preview-tagged server-side: unmetered, webhook-silent —
   * which is what lets demo blueprints run against any tenant with
   * nothing configured in the Filecheck admin. Wins over `workflowId`
   * when both are present. Rules only — a blueprint is public data and
   * must never carry keys or secrets.
   */
  workflow: ls(Lo()).optional()
}).refine((e) => !!e.workflowId || !!e.workflow, {
  message: "filecheck needs a workflowId or an inline workflow"
}), Ld = Ft.extend({
  type: tt("file"),
  /**
   * dropzone: the built-in upload, with any registered producers (Print.App
   * designer, template picker) offered around it. producer: NO direct
   * upload - only the registered producers render; the merchant is
   * showcasing the designer, not file drops.
   */
  display: _e(["dropzone", "producer"]).default("dropzone"),
  accept: me(B()).default(["application/pdf"]),
  /** Which data-feed provider enriches the FileMetadata. */
  providerId: B().optional(),
  /**
   * Filecheck-backed upload: replaces the dropzone with the Filecheck
   * intake element when the storefront supplies an element-mode provider
   * config (publishable key lives there — NEVER in this blueprint).
   */
  filecheck: Dd.optional()
}), qd = Ft.extend({
  type: tt("info"),
  /** summary: live selection recap. note: static text block. */
  display: _e(["summary", "note"]).default("note"),
  body: B().optional()
}), zd = yd("type", [
  Ed,
  Od,
  Pd,
  Md,
  Rd,
  Fd,
  jd,
  Ld,
  qd
]);
function ti(e) {
  return e.type === "select-one" || e.type === "select-many";
}
function jt(e) {
  return ti(e) || e.type === "quantities";
}
function Vi(e) {
  return e.type === "quantity" || e.type === "quantities";
}
const Ud = se({
  id: B().min(1),
  title: B(),
  fields: me(zd)
}), Vd = se({
  /** axisFieldId -> choiceId, exactly one entry per axis (validate.ts). */
  select: ls(B()),
  sku: B().optional(),
  /** Absolute replacement for pricing.basePrice.amount while selected. */
  price: H().nonnegative().optional(),
  available: Ve().default(!0),
  /** Platform hook (e.g. Shopify variant GID) for adapters that map to real variants. */
  platformVariantId: B().optional()
}), Bd = se({
  /** Field ids of select-one fields forming the matrix (e.g. ["size","color"]). */
  axes: me(B().min(1)).min(1),
  combinations: me(Vd)
}), ds = se({
  version: tt($i).default($i),
  productId: B().min(1),
  title: B(),
  /** stacked: all sections at once. wizard: one section per step. */
  layout: _e(["stacked", "wizard"]).default("stacked"),
  pricing: $d.default({}),
  variants: Bd.optional(),
  sections: me(Ud)
});
se({
  w: H().positive(),
  h: H().positive(),
  unit: Nr
});
function it(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && typeof e.w == "number" && typeof e.h == "number";
}
function Zd(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.values(e).every((t) => typeof t == "number");
}
const ui = ["qty", "w", "h", "area", "pages"], Er = {
  min: [2, void 0],
  max: [2, void 0],
  round: [1, 2],
  ceil: [1, 1],
  floor: [1, 1],
  abs: [1, 1],
  sqrt: [1, 1],
  band: [4, void 0]
}, Vo = Object.keys(Er), or = 500, ha = 10, Hd = 64, Wd = /^[A-Za-z][A-Za-z0-9_]{0,31}$/, Kd = /^[A-Za-z0-9_.,+\-*/^()\s]$/;
class Bo extends Error {
  constructor(n) {
    super(n.message);
    Wt(this, "detail");
    this.detail = n;
  }
}
function Ee(e, t, n) {
  throw new Bo({ code: e, message: t, at: n });
}
function Gd(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const i = e[n];
    if (Kd.test(i) || Ee("formula-character", `"${i}" can't be used in a formula. Use + - * / ^, brackets, numbers and names.`, n), /\s/.test(i)) {
      n += 1;
      continue;
    }
    const r = /^(\d+(\.\d+)?|\.\d+)/.exec(e.slice(n));
    if (r) {
      const a = r[0];
      e[n + a.length] === "." && Ee("formula-syntax", `"${a}." is not a number.`, n), t.push({ type: "number", value: Number(a), text: a, at: n }), n += a.length;
      continue;
    }
    const s = /^[A-Za-z_][A-Za-z0-9_]*/.exec(e.slice(n));
    if (s) {
      t.push({ type: "name", text: s[0], at: n }), n += s[0].length;
      continue;
    }
    i === "." && Ee("formula-syntax", 'A "." must be part of a number, like 0.25.', n), t.push({ type: "op", text: i, at: n }), n += 1;
  }
  return t.push({ type: "end", text: "", at: e.length }), t;
}
class Qd {
  constructor(t) {
    Wt(this, "tokens");
    Wt(this, "index", 0);
    Wt(this, "depth", 0);
    Wt(this, "names", []);
    this.tokens = t;
  }
  peek() {
    return this.tokens[this.index];
  }
  previous() {
    return this.tokens[this.index - 1];
  }
  next() {
    const t = this.peek();
    return this.index += 1, t;
  }
  isOp(t) {
    const n = this.peek();
    return n.type === "op" && n.text === t;
  }
  parse() {
    this.peek().type === "end" && Ee("formula-syntax", "Enter a formula.", 0);
    const t = this.expression(), n = this.peek();
    return n.type !== "end" && this.unexpected(n), t;
  }
  expression() {
    this.depth += 1, this.depth > Hd && Ee("formula-too-long", "This formula is nested too deeply.", this.peek().at);
    let t = this.term();
    for (; this.isOp("+") || this.isOp("-"); )
      t = { kind: "binary", op: this.next().text, left: t, right: this.term() };
    return this.depth -= 1, t;
  }
  term() {
    let t = this.unary();
    for (; this.isOp("*") || this.isOp("/"); )
      t = { kind: "binary", op: this.next().text, left: t, right: this.unary() };
    return t;
  }
  unary() {
    if (this.isOp("-")) {
      const t = this.next(), n = this.unary();
      return n.kind === "binary" && n.op === "^" && Ee("formula-ambiguous-power", "Add brackets: -(2^2) or (-2)^2.", t.at), { kind: "negate", operand: n };
    }
    return this.power();
  }
  power() {
    const t = this.primary();
    return this.isOp("^") ? (this.next(), { kind: "binary", op: "^", left: t, right: this.unary() }) : t;
  }
  primary() {
    const t = this.next();
    if (t.type === "number")
      return this.noImplicitProduct(t.text), { kind: "number", value: t.value };
    if (t.type === "name") {
      const n = t.text.toLowerCase();
      return this.isOp("(") ? this.call(t, n) : (n in Er && Ee("formula-syntax", `${t.text} needs brackets, like ${n}(a, b).`, t.at), this.names.push({ name: n, written: t.text, at: t.at }), this.noImplicitProduct(t.text), { kind: "name", name: n, written: t.text, at: t.at });
    }
    if (t.type === "op" && t.text === "(") {
      const n = this.expression();
      return this.expect(")", t.at), this.noImplicitProduct(")"), { kind: "group", inner: n };
    }
    return this.index -= 1, this.unexpected(t);
  }
  call(t, n) {
    const i = Er[n];
    i || Ee("formula-unknown-name", `There is no function "${t.text}". You can use: ${Vo.join(", ")}.`, t.at);
    const r = this.next(), s = [];
    if (!this.isOp(")"))
      for (s.push(this.expression()); this.isOp(","); )
        this.next(), s.push(this.expression());
    this.expect(")", r.at);
    const [a, o] = i;
    if ((s.length < a || o !== void 0 && s.length > o) && Ee("formula-arity", Zo(n), t.at), n === "band" && Yd(s, t.at), n === "round" && s[1] !== void 0) {
      const l = Ii(s[1]);
      l !== void 0 && !(Number.isInteger(l) && l >= 0 && l <= 4) && Ee("formula-arity", "round(x, d) rounds to 0 to 4 decimals.", t.at);
    }
    return this.noImplicitProduct(")"), { kind: "call", fn: n, args: s };
  }
  expect(t, n) {
    const i = this.peek();
    if (i.type === "op" && i.text === t) {
      this.next();
      return;
    }
    i.type === "end" && Ee("formula-syntax", "A bracket opened here is never closed.", n), this.unexpected(i);
  }
  /** "2area" or "2(…)": say what is missing instead of a bare "unexpected". */
  noImplicitProduct(t) {
    const n = this.peek();
    if (n.type === "number" || n.type === "name" || n.type === "op" && n.text === "(") {
      const i = n.type === "op" ? "(" : n.text;
      Ee("formula-syntax", `Missing an operator between ${t} and ${i}: write ${t} * ${i}.`, n.at);
    }
  }
  unexpected(t) {
    if (t.type === "end" && Ee("formula-syntax", "The formula ends too early.", t.at), t.text === ",") {
      const n = this.previous(), i = this.tokens[this.index + 1];
      (n == null ? void 0 : n.type) === "number" && (i == null ? void 0 : i.type) === "number" && Ee("formula-syntax", `Use a dot for decimals: ${n.text}.${i.text}.`, t.at), Ee("formula-syntax", 'A "," only separates the values of a function.', t.at);
    }
    t.text === ")" && Ee("formula-syntax", 'This ")" has no matching "(".', t.at), Ee("formula-syntax", `"${t.text}" is not expected here.`, t.at);
  }
}
function Zo(e) {
  switch (e) {
    case "min":
    case "max":
      return `${e}() needs at least two values, like ${e}(a, b).`;
    case "round":
      return "round() takes a value and, optionally, decimals: round(x) or round(x, 2).";
    case "band":
      return "band() takes a value, then pairs of limit and price, then a last price: band(area, 2, 30, 6, 26, 22).";
    default:
      return `${e}() takes exactly one value.`;
  }
}
function Ii(e) {
  if (e.kind === "number")
    return e.value;
  if (e.kind === "group")
    return Ii(e.inner);
  if (e.kind === "negate") {
    const t = Ii(e.operand);
    return t === void 0 ? void 0 : -t;
  }
}
function Yd(e, t) {
  (e.length - 1) % 2 === 0 && Ee("formula-arity", Zo("band"), t);
  let n;
  for (let i = 1; i < e.length - 1; i += 2) {
    const r = Ii(e[i]);
    r !== void 0 && (n !== void 0 && r <= n && Ee("formula-arity", `The limits in band() must increase (${r} after ${n}).`, t), n = r);
  }
}
function fs(e) {
  if (e.length > or)
    return {
      ok: !1,
      error: {
        code: "formula-too-long",
        message: `A formula can be at most ${or} characters — split it into steps.`,
        at: or
      }
    };
  try {
    const t = new Qd(Gd(e));
    return { ok: !0, ast: t.parse(), names: t.names };
  } catch (t) {
    if (t instanceof Bo)
      return { ok: !1, error: t.detail };
    throw t;
  }
}
function Jd(e) {
  const t = [], n = e.steps ?? [];
  n.length > ha && t.push({
    path: ["steps"],
    code: "formula-too-long",
    message: `A formula can have at most ${ha} steps.`
  });
  const i = /* @__PURE__ */ new Set([...ui, ...Vo]), r = /* @__PURE__ */ new Map();
  n.forEach((a, o) => {
    const l = a.name.toLowerCase();
    Wd.test(a.name) ? i.has(l) ? t.push({
      path: ["steps", o, "name"],
      code: "formula-step-name",
      message: `"${a.name}" is already taken by the formula itself — choose another name.`
    }) : r.has(l) && t.push({
      path: ["steps", o, "name"],
      code: "formula-step-name",
      message: `Another step is already called "${a.name}".`
    }) : t.push({
      path: ["steps", o, "name"],
      code: "formula-step-name",
      message: a.name === "" ? "Give this step a name." : `"${a.name}" can't be a name: start with a letter, then letters, digits or "_" (up to 32).`
    }), r.has(l) || r.set(l, o);
  });
  const s = (a, o, l) => {
    const c = fs(a);
    if (!c.ok) {
      t.push({ path: o, code: c.error.code, message: c.error.message });
      return;
    }
    for (const { name: u, written: d } of c.names) {
      if (ui.includes(u))
        continue;
      const f = r.get(u);
      if (!(f !== void 0 && f < l)) {
        if (f === l)
          t.push({
            path: o,
            code: "formula-step-name",
            message: `"${d}" can't use itself.`
          });
        else if (f !== void 0)
          t.push({
            path: o,
            code: "formula-step-name",
            message: `"${d}" is worked out in a later step — move that step up.`
          });
        else {
          const m = [
            ...ui,
            ...n.slice(0, l).map((y) => y.name)
          ];
          t.push({
            path: o,
            code: "formula-unknown-name",
            message: `Unknown name "${d}". You can use: ${m.join(", ")}.`
          });
        }
        return;
      }
    }
  };
  return n.forEach((a, o) => s(a.expression, ["steps", o, "expression"], o)), s(e.expression, ["expression"], n.length), t;
}
function ps(e) {
  const t = /* @__PURE__ */ new Set(), n = [...(e.steps ?? []).map((i) => i.expression), e.expression];
  for (const i of n) {
    const r = fs(i);
    if (r.ok)
      for (const { name: s } of r.names)
        ui.includes(s) && t.add(s);
  }
  return t;
}
const Ho = /* @__PURE__ */ new Set([
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
]), Wo = /* @__PURE__ */ new Set(["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"]);
function Ko(e) {
  const t = e.toUpperCase();
  return Ho.has(t) ? 0 : Wo.has(t) ? 3 : 2;
}
function Xd(e) {
  return /^[A-Z]{3}$/.test(e) && (Ho.has(e) || Wo.has(e) || ef.has(e));
}
const ef = /* @__PURE__ */ new Set([
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
class on extends Error {
}
const yn = (e) => typeof e == "object" && e !== null && !Array.isArray(e);
function tf(e) {
  let t = [[]];
  for (const n of e) {
    const i = [];
    for (const r of t)
      for (const s of n)
        i.push([...r, s]);
    t = i;
  }
  return t;
}
function nf(e) {
  const t = /* @__PURE__ */ new Map(), n = Array.isArray(e.sections) ? e.sections : [];
  for (const i of n) {
    const r = yn(i) && Array.isArray(i.fields) ? i.fields : [];
    for (const s of r)
      yn(s) && typeof s.id == "string" && Array.isArray(s.options) && t.set(s.id, new Set(s.options.flatMap((a) => yn(a) && typeof a.id == "string" ? [a.id] : [])));
  }
  return t;
}
function rf(e, t, n) {
  if (!yn(t))
    throw new on("The matrix table must be an object.");
  const { choices: i, prices: r, off: s = [], skus: a = [] } = t;
  if (!Array.isArray(i) || i.length !== e.length || !i.every((f) => Array.isArray(f) && f.every((m) => typeof m == "string")))
    throw new on("The matrix table needs one list of choice ids per axis.");
  const o = tf(i);
  if (!Array.isArray(r) || r.length !== o.length)
    throw new on(`The matrix table has ${Array.isArray(r) ? r.length : 0} prices for ${o.length} combinations.`);
  if (!r.every((f) => f === null || typeof f == "number" && Number.isFinite(f) && f >= 0))
    throw new on("Matrix prices must be numbers of zero or more, or null.");
  const l = (f) => Number.isInteger(f) && f >= 0 && f < o.length;
  if (!Array.isArray(s) || !s.every(l))
    throw new on("Matrix unavailable positions are out of range.");
  if (!Array.isArray(a) || !a.every((f) => Array.isArray(f) && f.length === 2 && l(f[0]) && typeof f[1] == "string"))
    throw new on("Matrix SKUs must be [position, sku] pairs.");
  const c = new Set(s), u = new Map(a.map(([f, m]) => [f, m])), d = [];
  return o.forEach((f, m) => {
    const y = r[m], g = u.get(m);
    if (y === null && !c.has(m) && g === void 0 || f.some((E, x) => n.has(e[x]) && !n.get(e[x]).has(E)))
      return;
    const _ = {
      select: Object.fromEntries(e.map((E, x) => [E, f[x]])),
      available: !c.has(m)
    };
    y !== null && (_.price = y), g !== void 0 && (_.sku = g), d.push(_);
  }), d;
}
function sf(e) {
  if (!yn(e) || !yn(e.variants) || e.variants.table === void 0)
    return e;
  const { table: t, ...n } = e.variants, i = Array.isArray(n.axes) ? n.axes.filter((r) => typeof r == "string") : [];
  return {
    ...e,
    variants: { ...n, axes: i, combinations: rf(i, t, nf(e)) }
  };
}
function Go(e) {
  let t;
  try {
    t = sf(e);
  } catch (r) {
    return {
      ok: !1,
      issues: [
        {
          path: ["variants", "table"],
          code: "variant-table-invalid",
          message: r instanceof Error ? r.message : String(r),
          severity: "error"
        }
      ]
    };
  }
  const n = ds.safeParse(t);
  if (!n.success)
    return {
      ok: !1,
      issues: n.error.issues.map((r) => ({
        path: r.path,
        code: `schema/${r.code}`,
        message: r.message,
        severity: "error"
      }))
    };
  const i = Qo(n.data);
  return {
    ok: !i.some((r) => r.severity === "error"),
    value: n.data,
    issues: i
  };
}
ds.superRefine((e, t) => {
  for (const n of Qo(e))
    n.severity === "error" && t.addIssue({
      code: $.custom,
      path: n.path,
      message: `${n.code}: ${n.message}`
    });
});
function Qo(e) {
  const t = [], n = (c, u, d, f = "error") => t.push({ path: c, code: u, message: d, severity: f }), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  let a = 0, o, l = !1;
  e.sections.forEach((c, u) => {
    r.has(c.id) && n(["sections", u, "id"], "duplicate-section-id", `Duplicate section id "${c.id}".`), r.add(c.id), c.fields.forEach((d, f) => {
      const m = ["sections", u, "fields", f];
      if (i.has(d.id) ? n([...m, "id"], "duplicate-field-id", `Duplicate field id "${d.id}".`) : i.set(d.id, { field: d, path: m }), (d.id === qo || d.id.startsWith("file.")) && n([...m, "id"], "reserved-field-id", `Field id "${d.id}" is reserved for condition refs.`), Vi(d) && (o ?? (o = m), uf(d.visibleWhen) || (a += 1, a > 1 && n(m, "multiple-quantity-fields", "Only one quantity field can show unconditionally. Give the others a visibility rule so a single quantity field is shown at a time."))), d.role) {
        const y = s.get(d.role);
        y ? n([...m, "role"], "duplicate-role", `Role "${d.role}" is already used by field "${y}" — only one field per role.`) : s.set(d.role, d.id);
      }
      d.type === "file" && (l = !0);
    });
  });
  for (const { field: c, path: u } of i.values()) {
    lf(c, u, n), cf(c, u, n), df(c, u, i, n);
    const d = [
      { mods: c.priceModifiers, base: [...u, "priceModifiers"] }
    ];
    jt(c) && c.options.forEach((f, m) => {
      d.push({
        mods: f.priceModifiers,
        base: [...u, "options", m, "priceModifiers"]
      });
    });
    for (const { mods: f, base: m } of d)
      f.forEach((y, g) => {
        yf(y, [...m, g], i, l, n);
      });
    c.type === "quantities" && mf(c, u, n);
  }
  return vf(e.pricing.basePrice, ["pricing", "basePrice"], n), e.variants && bf(e, i, n), o && !of(e) && n(o, "quantity-has-no-effect", "Changing the quantity does not change the price: every amount in this product is added once per order. If customers can buy more than one, set the base price to per unit, or price the options per unit instead of fixed.", "warning"), Xd(e.pricing.currency) || n(["pricing", "currency"], "unknown-currency", `Currency "${e.pricing.currency}" is not in the known list; totals will round to 2 decimals.`, "warning"), t;
}
const af = /* @__PURE__ */ new Set([
  "perUnit",
  "perPage",
  "perColorPage",
  "perMonoPage",
  "perArea",
  "perLength"
]);
function of(e) {
  var i;
  const t = e.pricing.basePrice;
  if (t.per === "unit" || t.tiers)
    return !0;
  const n = (r) => {
    var s;
    return af.has(r.type) || (((s = r.tiers) == null ? void 0 : s.basis) ?? "quantity") === "quantity" && r.tiers !== void 0 || r.type === "formula" && r.formula !== void 0 && ps(r.formula).has("qty");
  };
  for (const r of e.sections)
    for (const s of r.fields)
      if ((i = s.priceModifiers) != null && i.some(n) || jt(s) && s.options.some((a) => {
        var o;
        return (o = a.priceModifiers) == null ? void 0 : o.some(n);
      }))
        return !0;
  return !1;
}
function lf(e, t, n) {
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
  e.type === "quantities" && (e.max !== void 0 && e.min > e.max && n([...t, "min"], "min-gt-max", `min (${e.min}) exceeds max (${e.max}).`), e.maxTotal !== void 0 && e.minTotal > e.maxTotal && n([...t, "minTotal"], "min-gt-max", `minTotal (${e.minTotal}) exceeds maxTotal (${e.maxTotal}).`)), e.type === "select-many" && e.maxSelect !== void 0 && e.minSelect > e.maxSelect && n([...t, "minSelect"], "min-gt-max", `minSelect (${e.minSelect}) exceeds maxSelect (${e.maxSelect}).`), e.type === "dimensions" && (e.minW !== void 0 && e.maxW !== void 0 && e.minW > e.maxW && n([...t, "minW"], "min-gt-max", `minW (${e.minW}) exceeds maxW (${e.maxW}).`), e.minH !== void 0 && e.maxH !== void 0 && e.minH > e.maxH && n([...t, "minH"], "min-gt-max", `minH (${e.minH}) exceeds maxH (${e.maxH}).`)), e.type === "file" && (e.providerId === "filecheck" && !((i = e.filecheck) != null && i.workflowId) && !((r = e.filecheck) != null && r.workflow) && n([...t, "filecheck"], "filecheck-missing-workflow", "Filecheck provider selected but no workflow (id or inline) set; the default uploader will be used.", "warning"), e.filecheck && e.providerId !== "filecheck" && n([...t, "providerId"], "filecheck-missing-workflow", 'Filecheck settings are present but providerId is not "filecheck"; they will be ignored.', "warning"));
}
function cf(e, t, n) {
  if (!jt(e))
    return;
  const i = /* @__PURE__ */ new Set();
  let r = 0;
  e.options.forEach((s, a) => {
    i.has(s.id) && n([...t, "options", a, "id"], "duplicate-choice-id", `Duplicate choice id "${s.id}" in field "${e.id}".`), i.add(s.id), s.default && (r += 1);
  }), e.type === "select-one" && r > 1 && n([...t, "options"], "too-many-defaults", `select-one field "${e.id}" has ${r} default choices.`), e.type === "select-many" && e.maxSelect !== void 0 && r > e.maxSelect && n([...t, "options"], "too-many-defaults", `Default choices (${r}) exceed maxSelect (${e.maxSelect}).`);
}
function uf(e) {
  var t, n;
  return e ? (((t = e.all) == null ? void 0 : t.length) ?? 0) > 0 || (((n = e.any) == null ? void 0 : n.length) ?? 0) > 0 : !1;
}
function df(e, t, n, i) {
  if (!e.visibleWhen)
    return;
  const r = [...t, "visibleWhen"], s = (a, o) => {
    if (cs(a)) {
      const l = bd.includes(a.ref), c = a.ref === qo, u = n.get(a.ref);
      if (!l && !c && !u) {
        i(o, "dangling-condition-ref", `Condition references unknown field "${a.ref}".`);
        return;
      }
      if (a.ref === e.id && i(o, "self-condition-ref", `Field "${e.id}" references itself.`), c && Vi(e) && i(o, "quantity-ref-on-quantity-field", `Quantity field "${e.id}" cannot be shown or hidden by the quantity.`), u && jt(u.field) && (a.op === "eq" || a.op === "neq" || a.op === "in")) {
        const d = new Set(u.field.options.map((m) => m.id)), f = Array.isArray(a.value) ? a.value : a.value !== void 0 ? [a.value] : [];
        for (const m of f)
          typeof m == "string" && !d.has(m) && i(o, "unknown-condition-choice", `"${m}" is not a choice of field "${a.ref}".`, "warning");
      }
      return;
    }
    (a.all ?? []).forEach((l, c) => s(l, [...o, "all", c])), (a.any ?? []).forEach((l, c) => s(l, [...o, "any", c]));
  };
  s(e.visibleWhen, r);
}
function Yo(e, t, n) {
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
const ff = /* @__PURE__ */ new Set(["fixed", "percent", "multiplier", "setup"]), pf = /* @__PURE__ */ new Set(["percent", "multiplier", "formula"]), hf = /^[A-Za-z0-9_-]+$/;
function mf(e, t, n) {
  e.options.forEach((i, r) => {
    const s = [...t, "options", r];
    hf.test(i.id) || n([...s, "id"], "quantities-choice-id", `Option id "${i.id}" may only use letters, digits, "-" and "_".`), i.priceModifiers.forEach((a, o) => {
      var c;
      const l = [...s, "priceModifiers", o];
      a.type === "formula" ? n([...l, "type"], "quantities-choice-modifier", "A formula can't price one option of a quantity per option — put it on the field.") : pf.has(a.type) ? n([...l, "type"], "quantities-choice-modifier", `A "${a.type}" price on one option would change the whole order — price this option per unit, or put the rule on the field.`) : ((c = a.tiers) == null ? void 0 : c.mode) === "graduated" && a.tiers.basis === "quantity" && n([...l, "tiers", "mode"], "quantities-choice-modifier", "Graduated quantity breaks cannot be shared out between options — use flat breaks.");
    });
  });
}
function yf(e, t, n, i, r) {
  if (e.type === "formula" || e.formula !== void 0) {
    gf(e, t, n, i, r);
    return;
  }
  if (e.tiers && (Yo(e.tiers, [...t, "tiers"], r), e.tiers.mode === "graduated" && ff.has(e.type) && r([...t, "tiers", "mode"], "tier-basis-invalid", `Graduated tiers are meaningless on a "${e.type}" modifier.`), e.tiers.basis === "pages" && !i && r([...t, "tiers", "basis"], "pages-basis-without-file", "Pages-based tiers need a file field to supply page counts.", "warning")), (e.type === "perPage" || e.type === "perColorPage" || e.type === "perMonoPage") && !i && r([...t, "type"], "pages-basis-without-file", `"${e.type}" pricing needs a file field to supply page counts.`, "warning"), e.type === "perArea" || e.type === "perLength") {
    const s = e.type.toLowerCase();
    if (e.dimensionsField !== void 0) {
      const a = n.get(e.dimensionsField);
      (!a || a.field.type !== "dimensions") && r([...t, "dimensionsField"], `${s}-dangling-dims`, `"${e.dimensionsField}" is not a dimensions field.`);
    } else i || r([...t, "type"], `${s}-missing-source`, `${e.type} pricing has no dimensions field and no file field to read a canvas from.`, "warning");
  }
}
function gf(e, t, n, i, r) {
  if (e.type !== "formula") {
    r([...t, "formula"], "formula-missing", `Only a formula rule can carry a formula, not a "${e.type}" rule.`);
    return;
  }
  const s = e.formula;
  if (!s) {
    r([...t, "formula"], "formula-missing", "This formula rule has no formula.");
    return;
  }
  for (const l of Jd(s))
    r([...t, "formula", ...l.path], l.code, l.message);
  e.tiers && r([...t, "tiers"], "formula-tiers", "A formula rule can't have volume breaks — put the breaks in the formula, e.g. with band().");
  const a = ps(s), o = a.has("w") || a.has("h") || a.has("area");
  if (e.dimensionsField !== void 0) {
    const l = n.get(e.dimensionsField);
    (!l || l.field.type !== "dimensions") && r([...t, "dimensionsField"], "formula-dangling-dims", `"${e.dimensionsField}" is not a dimensions field.`);
  } else o && !i && r([...t, "dimensionsField"], "formula-no-size", "This formula uses the size (w, h or area), but there is no size field and no file upload to read it from, so the size is always 0.", "warning");
  a.has("pages") && !i && r([...t, "formula"], "pages-basis-without-file", "This formula uses pages, but there is no file field to supply page counts.", "warning");
}
function vf(e, t, n) {
  e.tiers && (Yo(e.tiers, [...t, "tiers"], n), e.tiers.basis !== "quantity" && n([...t, "tiers", "basis"], "tier-basis-invalid", "Base price tiers must use the quantity basis."), e.tiers.mode === "graduated" && e.per === "order" && n([...t, "tiers", "mode"], "tier-basis-invalid", 'Graduated base tiers require per: "unit".'));
}
function bf(e, t, n) {
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
    if (new Set(c).size !== a.size || c.some((f) => !a.has(f))) {
      n(["variants", "combinations", l, "select"], "variant-combo-invalid", "Combination keys must exactly match the variant axes.");
      return;
    }
    for (const [f, m] of Object.entries(o.select)) {
      const y = r.get(f);
      y && !y.has(m) && n(["variants", "combinations", l, "select", f], "variant-combo-invalid", `"${m}" is not a choice of axis "${f}".`);
    }
    const d = i.axes.map((f) => o.select[f]).join("\0");
    s.has(d) && n(["variants", "combinations", l], "variant-combo-duplicate", "Duplicate variant combination."), s.add(d), o.price !== void 0 && e.pricing.basePrice.tiers && n(["variants", "combinations", l, "price"], "variant-price-with-base-tiers", "Combination price overrides only the untiered base amount; base tiers still apply.", "warning");
  });
}
const Or = "1.0", _f = se({
  /** Minimum quantity required to trigger this tier (inclusive). */
  minQty: H().nonnegative(),
  /** Maximum quantity for this tier (inclusive). If omitted, tier spans to infinity. */
  maxQty: H().nonnegative().optional(),
  /** Price/amount applied for this tier. */
  amount: H()
}), Jo = se({
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
  tiers: me(_f).optional()
}), xf = se({
  /** The field id whose value gates visibility. */
  field: B(),
  /** Show when the field's selected value equals one of these. */
  equals: Kn([B(), me(B())]).optional(),
  /** Show only when a value is present (any non-empty selection). */
  isSet: Ve().optional()
}), wf = se({
  id: B().min(1),
  label: B(),
  description: B().optional(),
  image: B().url().optional(),
  color: B().optional(),
  default: Ve().optional(),
  priceModifiers: me(Jo).default([]),
  /** Dead in v1 runtime; dropped by migration. */
  reveals: me(B()).default([])
}), kf = _e([
  "card-select",
  "image-grid",
  "swatch",
  "pill-toggle",
  "dropdown",
  "number-stepper",
  "file-upload",
  "summary"
]), Sf = se({
  id: B().min(1),
  type: kf,
  label: B().optional(),
  helpText: B().optional(),
  required: Ve().default(!1),
  options: me(wf).default([]),
  min: H().optional(),
  max: H().optional(),
  step: H().optional(),
  defaultValue: Kn([B(), H()]).optional(),
  accept: me(B()).optional(),
  providerId: B().optional(),
  visibleWhen: xf.optional(),
  priceModifiers: me(Jo).default([])
}), Cf = se({
  id: B().min(1),
  title: B(),
  layout: _e(["stacked", "tabs"]).default("stacked"),
  fields: me(Sf)
}), Tf = se({
  version: tt(Or).default(Or),
  productId: B().min(1),
  title: B(),
  currency: B().default("USD"),
  basePrice: H().nonnegative().default(0),
  sections: me(Cf)
});
class Ni extends Error {
  constructor(n) {
    const i = n.map((r) => `${r.code} at ${r.path.join(".") || "<root>"}: ${r.message}`).join("; ");
    super(`Invalid product options: ${i}`);
    Wt(this, "issues");
    this.name = "ProductOptionsError", this.issues = n;
  }
}
function Af(e) {
  const t = Tf.safeParse(e);
  if (!t.success)
    throw new Ni(t.error.issues.map((c) => ({
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
    version: $i,
    productId: n.productId,
    title: n.title,
    layout: s ? "wizard" : "stacked",
    pricing: {
      currency: Rf(n.currency, i),
      basePrice: { amount: n.basePrice, per: "order" }
    },
    sections: n.sections.map((c) => ({
      id: c.id,
      title: c.title,
      fields: c.fields.map((u) => {
        const d = Nf(u, r, i);
        return d.type === "quantity" && (r = !0), d;
      })
    }))
  }, o = ds.parse(a), l = Go(o);
  if (!l.ok)
    throw new Ni(l.issues.filter((c) => c.severity === "error"));
  return { doc: o, warnings: i };
}
function $f(e) {
  const t = typeof e == "object" && e !== null ? e.version : void 0;
  if (t === void 0 || t === $i) {
    const n = Go(e);
    if (!n.ok || !n.value)
      throw new Ni(n.issues.filter((i) => i.severity === "error"));
    return { doc: n.value, warnings: [] };
  }
  if (t === Or)
    return Af(e);
  throw new Ni([
    {
      path: ["version"],
      code: "unknown-version",
      message: `Unsupported schema version "${String(t)}".`,
      severity: "error"
    }
  ]);
}
function ma(e, t) {
  const { doc: n, warnings: i } = $f(e);
  return n;
}
const If = {
  "card-select": "cards",
  "image-grid": "grid",
  swatch: "swatches",
  "pill-toggle": "pills",
  dropdown: "dropdown"
};
function Nf(e, t, n) {
  const i = {
    id: e.id,
    label: e.label,
    helpText: e.helpText,
    required: e.required,
    visibleWhen: Of(e.visibleWhen),
    priceModifiers: e.priceModifiers.map((r) => Xo(r, n))
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
        display: If[e.type],
        options: e.options.map((r) => Ef(r, n))
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
        min: Tn(e.min) ?? 1,
        max: Tn(e.max),
        step: Tn(e.step) ?? 1,
        defaultValue: Tn(typeof e.defaultValue == "number" ? e.defaultValue : void 0) ?? Tn(e.min) ?? 1
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
function Ef(e, t) {
  return {
    id: e.id,
    label: e.label,
    description: e.description,
    image: e.image,
    color: e.color,
    default: e.default,
    priceModifiers: e.priceModifiers.map((n) => Xo(n, t))
  };
}
function Of(e) {
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
function Tn(e) {
  if (e === void 0)
    return;
  const t = Math.round(e);
  return t >= 1 ? t : void 0;
}
function Xo(e, t) {
  return !e.tiers || e.tiers.length === 0 ? { type: e.type, amount: e.amount } : {
    type: e.type,
    amount: e.amount,
    tiers: {
      basis: "quantity",
      mode: "flat",
      rows: Pf(e.tiers, e.amount, t)
    }
  };
}
function Pf(e, t, n) {
  Mf(e) && n.push("Overlapping v1 tiers detected; earlier tiers win in the overlap (v1 behavior preserved).");
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
function Mf(e) {
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
function Rf(e, t) {
  const n = e.toUpperCase();
  return /^[A-Z]{3}$/.test(n) ? n : (t.push(`Currency "${e}" is not an ISO 4217 code; defaulting to USD.`), "USD");
}
const ya = "1.0", el = _e(["mm", "cm", "in", "pt", "px"]), Ff = _e(["pending", "ready", "failed"]), jf = _e(["info", "warning", "error"]), Df = se({
  /** 1-based page index. */
  page: H().int().positive(),
  w: H().nonnegative(),
  h: H().nonnegative(),
  unit: el.default("mm")
}), Lf = se({
  w: H().nonnegative(),
  h: H().nonnegative(),
  /** Bleed applied around the trim box, in `unit`. */
  bleed: H().nonnegative().default(0),
  unit: el.default("mm")
}), qf = se({
  /** Dominant color model detected in the file. */
  model: _e(["RGB", "CMYK", "Gray", "Mixed", "Unknown"]).default("Unknown"),
  /** Named spot colors (e.g. Pantone) found in the file. */
  spot: me(B()).default([])
}), zf = se({
  /** Machine-readable code, e.g. "low-dpi", "not-embedded-font", "out-of-gamut". */
  code: B(),
  severity: jf.default("warning"),
  message: B().optional(),
  /** 1-based page index the issue applies to, if page-specific. */
  page: H().int().positive().optional()
}), hs = se({
  /** Contract version, for forward/backward compatibility. */
  version: tt(ya).default(ya),
  /** Stable id assigned by the basic uploader; correlates feeds to a file. */
  fileId: B().min(1),
  /** Who produced this metadata. Free-form, but reserve known sources. */
  source: B().default("custom"),
  status: Ff.default("pending"),
  /** Original file name and MIME type, if known. */
  fileName: B().optional(),
  mimeType: B().optional(),
  fileSizeBytes: H().int().nonnegative().optional(),
  /** Total page count. Absent means "unknown" — pricing must fall back. */
  pages: H().int().nonnegative().optional(),
  colorPages: H().int().nonnegative().optional(),
  monoPages: H().int().nonnegative().optional(),
  pageSizes: me(Df).optional(),
  canvas: Lf.optional(),
  colors: qf.optional(),
  issues: me(zf).default([]),
  /** Provider-specific extras that don't fit the core contract. */
  raw: ls(Lo()).optional()
}), Uf = se({
  pages: Ve().default(!1),
  colorDetection: Ve().default(!1),
  pageSizes: Ve().default(!1),
  canvas: Ve().default(!1),
  preflightIssues: Ve().default(!1)
}), Vf = se({
  id: B().min(1),
  name: B(),
  /**
   * "push" = provider POSTs metadata to us; "pull" = we fetch from `endpoint`;
   * "element" = provider renders its own embedded uploader (e.g. the
   * Filecheck intake element) in place of the basic dropzone.
   */
  mode: _e(["push", "pull", "element"]).default("push"),
  endpoint: B().url().optional(),
  capabilities: Uf.default({}),
  /** element mode: publishable key (pk_live_/pk_test_ — browser-safe, store-level). */
  publishableKey: B().optional(),
  /** element mode: optional sub-tenant scope. */
  agentId: B().optional(),
  /** element mode: override the provider SDK script URL (staging/local dev). */
  scriptUrl: B().url().optional(),
  /** element mode: override the provider iframe URL (local dev). */
  iframeSrc: B().url().optional(),
  /** element mode: create preview sessions (unmetered, webhook-suppressed). */
  preview: Ve().optional()
}), tl = {
  mm: 1e-3,
  cm: 0.01,
  in: 0.0254,
  pt: 0.0254 / 72,
  px: void 0
}, Bf = {
  sqm: 1,
  sqft: 0.3048 * 0.3048,
  sqin: 0.0254 * 0.0254
};
function nl(e, t, n, i) {
  const r = tl[n];
  return r === void 0 || e <= 0 || t <= 0 ? 0 : e * r * (t * r) / Bf[i];
}
function ms(e, t) {
  var n;
  if (e.dimensionsField !== void 0) {
    const i = t.selections[e.dimensionsField];
    return it(i) ? i : void 0;
  }
  return (n = t.file) == null ? void 0 : n.canvas;
}
function il(e, t) {
  const n = ms(e, t);
  return n ? nl(n.w, n.h, n.unit, e.areaUnit ?? "sqm") : 0;
}
function Zf(e, t) {
  if (e === "quantity")
    return t.quantity;
  const n = Hf(e, t);
  return Zd(n) ? Object.keys(n).filter((i) => (n[i] ?? 0) > 0) : n;
}
function Hf(e, t) {
  var n, i, r, s;
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
function ga(e) {
  return e !== void 0 && e !== "" && !(Array.isArray(e) && e.length === 0);
}
function Wf(e, t) {
  const n = Zf(e.ref, t);
  if (e.op === "isSet")
    return ga(n);
  if (e.op === "notSet")
    return !ga(n);
  if (n === void 0)
    return !1;
  switch (e.op) {
    case "eq":
      return va(n, e.value);
    case "neq":
      return !va(n, e.value);
    case "in": {
      const i = Array.isArray(e.value) ? e.value.map(String) : e.value !== void 0 ? [String(e.value)] : [];
      return Array.isArray(n) ? n.some((r) => i.includes(String(r))) : it(n) ? !1 : i.includes(String(n));
    }
    case "gt":
    case "gte":
    case "lt":
    case "lte": {
      if (Array.isArray(n) || it(n))
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
function va(e, t) {
  if (Array.isArray(e)) {
    if (Array.isArray(t)) {
      const n = t.map(String);
      return e.some((i) => n.includes(String(i)));
    }
    return t !== void 0 && e.map(String).includes(String(t));
  }
  return it(e) ? !1 : Array.isArray(t) ? t.map(String).includes(String(e)) : t !== void 0 && String(e) === String(t);
}
function rl(e, t) {
  if (!e)
    return !0;
  const n = (s) => cs(s) ? Wf(s, t) : rl(s, t), i = e.all === void 0 || e.all.every(n), r = e.any === void 0 || e.any.length === 0 || e.any.some(n);
  return i && r;
}
function ys(e, t) {
  return rl(e.visibleWhen, t);
}
const Kf = {
  m: 1,
  ft: 0.3048,
  in: 0.0254,
  cm: 0.01
};
function Pr(e, t, n) {
  const i = tl[t];
  return i === void 0 || e <= 0 ? 0 : e * i / Kf[n];
}
function Gf(e, t, n) {
  return n === "w" ? e : n === "max" ? Math.max(e, t) : t;
}
function sl(e, t) {
  const n = ms(e, t);
  return n ? Pr(Gf(n.w, n.h, e.lengthAxis), n.unit, e.lengthUnit ?? "m") : 0;
}
const Qf = 256, li = /* @__PURE__ */ new Map();
function ba(e) {
  const t = li.get(e);
  if (t !== void 0)
    return t;
  const n = fs(e), i = n.ok ? n.ast : null;
  return li.size >= Qf && li.clear(), li.set(e, i), i;
}
function Yf(e, t) {
  const n = new Map(Object.entries(t));
  for (const s of e.steps ?? []) {
    const a = ba(s.expression);
    if (!a)
      return Number.NaN;
    n.set(s.name.toLowerCase(), Jt(a, n));
  }
  const i = ba(e.expression);
  if (!i)
    return Number.NaN;
  const r = Jt(i, n);
  return Number.isFinite(r) ? r : Number.NaN;
}
function Jt(e, t) {
  switch (e.kind) {
    case "number":
      return e.value;
    case "name":
      return t.get(e.name) ?? Number.NaN;
    case "group":
      return Jt(e.inner, t);
    case "negate":
      return -Jt(e.operand, t);
    case "binary": {
      const n = Jt(e.left, t), i = Jt(e.right, t);
      switch (e.op) {
        case "+":
          return n + i;
        case "-":
          return n - i;
        case "*":
          return n * i;
        case "/":
          return n / i;
        case "^":
          return Jf(n, i);
      }
      break;
    }
    case "call":
      return Xf(e.fn, e.args.map((n) => Jt(n, t)));
  }
  return Number.NaN;
}
function Jf(e, t) {
  if (!Number.isInteger(t))
    return Math.pow(e, t);
  let n = Math.abs(t), i = 1, r = e;
  for (; n > 0; )
    n % 2 === 1 && (i *= r), r *= r, n = Math.floor(n / 2);
  return t < 0 ? 1 / i : i;
}
function Xf(e, t) {
  const [n = Number.NaN] = t;
  switch (e) {
    case "min":
      return Math.min(...t);
    case "max":
      return Math.max(...t);
    case "round": {
      const r = 10 ** Math.min(Math.max(Math.trunc(t[1] ?? 0), 0), 4);
      return Math.round((n + Number.EPSILON) * r) / r;
    }
    case "ceil":
      return Math.ceil(n);
    case "floor":
      return Math.floor(n);
    case "abs":
      return Math.abs(n);
    case "sqrt":
      return Math.sqrt(n);
    case "band": {
      if (Number.isNaN(n))
        return Number.NaN;
      for (let i = 1; i < t.length - 1; i += 2)
        if (n <= t[i])
          return t[i + 1];
      return t[t.length - 1];
    }
  }
  return Number.NaN;
}
function ep(e, t) {
  var r;
  const n = ms(e, t), i = e.lengthUnit ?? "m";
  return {
    qty: t.quantity,
    w: n ? lr(Pr(n.w, n.unit, i)) : 0,
    h: n ? lr(Pr(n.h, n.unit, i)) : 0,
    area: n ? lr(nl(n.w, n.h, n.unit, e.areaUnit ?? "sqm")) : 0,
    pages: ((r = t.file) == null ? void 0 : r.pages) ?? 0
  };
}
function lr(e) {
  return e === 0 ? 0 : Number(e.toPrecision(12));
}
function tp(e, t) {
  return e.formula ? Yf(e.formula, ep(e, t)) : Number.NaN;
}
function nt(e, t) {
  const i = 10 ** Ko(t);
  return Math.round((e + Number.EPSILON) * i) / i;
}
function np(e) {
  const t = [];
  for (const n of e.sections)
    for (const i of n.fields)
      Vi(i) && t.push(i);
  return t;
}
function ni(e, t, n) {
  const i = np(e);
  if (i.length <= 1)
    return i[0];
  const r = { selections: t, file: n, quantity: 1 };
  return i.find((s) => ys(s, r)) ?? i.find((s) => !s.visibleWhen) ?? i[0];
}
function al(e, t, n) {
  const i = ni(e, t, n);
  return i ? i.type === "quantities" ? gs(It(i, t[i.id])) : Gn(i, t[i.id]) : 1;
}
function Gn(e, t) {
  const n = typeof t == "number" ? t : typeof t == "string" && t.trim() !== "" ? Number(t) : e.defaultValue;
  return Number.isNaN(n) ? Mr(e, e.defaultValue) : Mr(e, n);
}
function It(e, t) {
  const n = {};
  if (typeof t != "object" || t === null || Array.isArray(t))
    return n;
  const i = t;
  for (const r of e.options) {
    const s = i[r.id], a = typeof s == "number" ? s : typeof s == "string" && s.trim() !== "" ? Number(s) : Number.NaN;
    !Number.isFinite(a) || Math.round(a) <= 0 || (n[r.id] = Mr(e, a));
  }
  return n;
}
function gs(e) {
  let t = 0;
  for (const n of Object.values(e))
    t += n;
  return t;
}
function Mr(e, t) {
  const n = e.step;
  let i = Math.round(t);
  return i = e.min + Math.round((i - e.min) / n) * n, i < e.min && (i = e.min), e.max !== void 0 && i > e.max && (i = e.min + Math.floor((e.max - e.min) / n) * n), i;
}
function Qn(e, t) {
  for (const n of e)
    if (n.upTo === void 0 || t <= n.upTo)
      return n;
  return e[e.length - 1];
}
function On(e, t) {
  let n = 0, i = 0;
  for (const r of t) {
    const a = (r.upTo === void 0 ? e : Math.min(r.upTo, e)) - i;
    if (a > 0 && (n += a * r.amount), r.upTo === void 0 || e <= r.upTo)
      break;
    i = r.upTo;
  }
  return n;
}
function Bi(e, t) {
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
function ip(e, t) {
  const n = Bi(e, t);
  if (n != null && n.sku)
    return n.sku;
  const i = [];
  for (const r of e.sections)
    for (const s of r.fields) {
      if (!ti(s))
        continue;
      const a = t[s.id], o = Array.isArray(a) ? a : typeof a == "string" ? [a] : [];
      for (const l of s.options)
        o.includes(l.id) && l.sku && i.push(l.sku);
    }
  return i.length > 0 ? i.join("-") : void 0;
}
function rp(e, t, n, i) {
  for (const a of e.sections)
    for (const o of a.fields) {
      if (o.id !== n || !jt(o))
        continue;
      const l = o.options.find((c) => c.id === i);
      if (!l || l.disabled)
        return !1;
    }
  const r = e.variants;
  if (!r || !r.axes.includes(n))
    return !0;
  const s = Bi(e, { ...t, [n]: i });
  return s ? s.available : !0;
}
function sp(e, t) {
  const n = Bi(e, t);
  if (n && !n.available)
    return !0;
  for (const i of e.sections)
    for (const r of i.fields) {
      if (!jt(r))
        continue;
      const s = t[r.id], a = r.type === "quantities" ? Object.keys(It(r, s)) : Array.isArray(s) ? s : typeof s == "string" ? [s] : [];
      for (const o of r.options)
        if (a.includes(o.id) && o.disabled)
          return !0;
    }
  return !1;
}
function Rr(e, t) {
  const n = al(e, t.selections, t.file), i = t.quantity ?? n, r = ni(e, t.selections, t.file), s = (r == null ? void 0 : r.type) === "quantities" ? { fieldId: r.id, scale: n > 0 ? i / n : 0 } : void 0, a = {
    selections: t.selections,
    file: t.file,
    quantity: i
  }, o = e.pricing.currency, l = [], c = Bi(e, t.selections), u = sp(e, t.selections);
  let d = !1;
  const f = ip(e, t.selections), m = ap(e.pricing.basePrice, c == null ? void 0 : c.price, i);
  l.push({
    sourceId: "base",
    label: "Base price",
    stage: "base",
    type: "base",
    amount: nt(m, o)
  });
  let y = m;
  const g = ol(e, a, s);
  for (const { sourceId: V, label: F, modifier: I, units: A } of g) {
    const D = lp(I, a, A);
    if (D !== void 0) {
      if (Number.isNaN(D)) {
        d = !0;
        continue;
      }
      y += D, l.push({
        sourceId: V,
        label: F,
        stage: "additive",
        type: I.type,
        amount: nt(D, o)
      });
    }
  }
  const _ = y;
  for (const { sourceId: V, label: F, modifier: I } of g) {
    if (I.type !== "percent")
      continue;
    const A = zt(I, a), D = y * (A / 100);
    y += D, l.push({
      sourceId: V,
      label: F,
      stage: "percent",
      type: "percent",
      amount: nt(D, o)
    });
  }
  for (const { sourceId: V, label: F, modifier: I } of g) {
    if (I.type !== "multiplier")
      continue;
    const A = zt(I, a), D = y * A - y;
    y += D, l.push({
      sourceId: V,
      label: F,
      stage: "multiplier",
      type: "multiplier",
      amount: nt(D, o)
    });
  }
  e.pricing.setupFee !== void 0 && e.pricing.setupFee > 0 && (y += e.pricing.setupFee, l.push({
    sourceId: "setup-fee",
    label: "Setup fee",
    stage: "setup",
    type: "setup",
    amount: nt(e.pricing.setupFee, o)
  }));
  for (const { sourceId: V, label: F, modifier: I } of g) {
    if (I.type !== "setup")
      continue;
    const A = zt(I, a);
    y += A, l.push({
      sourceId: V,
      label: F,
      stage: "setup",
      type: "setup",
      amount: nt(A, o)
    });
  }
  const E = Math.max(e.pricing.minimumPrice ?? 0, 0);
  if (y < E) {
    const V = E - y;
    y = E, l.push({
      sourceId: "adjustment:minimum",
      label: "Minimum order adjustment",
      stage: "adjustment",
      type: "minimum",
      amount: nt(V, o)
    });
  }
  const x = nt(y, o), W = u ? "combination" : d ? "formula" : void 0;
  return {
    currency: o,
    quantity: i,
    unavailable: W !== void 0,
    ...W ? { unavailableReason: W } : {},
    sku: f,
    base: nt(m, o),
    subtotal: nt(_, o),
    total: x,
    unitPrice: nt(y / Math.max(i, 1), o),
    lines: l
  };
}
function ap(e, t, n) {
  const i = t ?? e.amount, r = e.tiers;
  return e.per === "order" ? r ? Qn(r.rows, n).amount : i : r ? r.mode === "graduated" ? On(n, r.rows) : Qn(r.rows, n).amount * n : i * n;
}
function ol(e, t, n) {
  const i = [];
  for (const r of e.sections)
    for (const s of r.fields) {
      if (!ys(s, t))
        continue;
      for (const o of s.priceModifiers)
        i.push({
          sourceId: s.id,
          label: s.label ?? s.id,
          modifier: o
        });
      if (s.type === "quantities") {
        const o = It(s, t.selections[s.id]), l = (n == null ? void 0 : n.fieldId) === s.id ? n.scale : 1;
        for (const c of s.options) {
          const u = o[c.id];
          if (u !== void 0)
            for (const d of c.priceModifiers)
              i.push({
                sourceId: `${s.id}:${c.id}`,
                label: `${c.label} × ${u}`,
                modifier: d,
                units: u * l
              });
        }
        continue;
      }
      if (!ti(s))
        continue;
      const a = op(s.id, t.selections);
      for (const o of s.options)
        if (a.includes(o.id))
          for (const l of o.priceModifiers)
            i.push({
              sourceId: `${s.id}:${o.id}`,
              label: o.label,
              modifier: l
            });
    }
  return i;
}
function op(e, t) {
  const n = t[e];
  return n === void 0 ? [] : Array.isArray(n) ? n : typeof n == "object" ? [] : [String(n)];
}
function Pn(e, t) {
  var n, i;
  switch (((n = e.tiers) == null ? void 0 : n.basis) ?? "quantity") {
    case "quantity":
      return t.quantity;
    case "pages":
      return ((i = t.file) == null ? void 0 : i.pages) ?? 0;
    case "area":
      return il(e, t);
    case "length":
      return sl(e, t);
  }
}
function zt(e, t) {
  return e.tiers ? Qn(e.tiers.rows, Pn(e, t)).amount : e.amount;
}
function lp(e, t, n = t.quantity) {
  var r, s, a, o, l, c, u;
  const i = n;
  switch (e.type) {
    case "percent":
    case "multiplier":
    case "setup":
      return;
    case "fixed":
      return zt(e, t);
    case "perUnit":
      return ((r = e.tiers) == null ? void 0 : r.mode) === "graduated" ? On(Pn(e, t), e.tiers.rows) : zt(e, t) * i;
    case "perPage":
    case "perColorPage":
    case "perMonoPage": {
      const d = e.type === "perPage" ? ((s = t.file) == null ? void 0 : s.pages) ?? 0 : e.type === "perColorPage" ? ((a = t.file) == null ? void 0 : a.colorPages) ?? 0 : ((o = t.file) == null ? void 0 : o.monoPages) ?? 0;
      return ((l = e.tiers) == null ? void 0 : l.mode) === "graduated" ? On(Pn(e, t), e.tiers.rows) * i : zt(e, t) * d * i;
    }
    case "perArea": {
      const d = il(e, t);
      return ((c = e.tiers) == null ? void 0 : c.mode) === "graduated" ? On(Pn(e, t), e.tiers.rows) * i : zt(e, t) * d * i;
    }
    case "formula":
      return tp(e, t);
    case "perLength": {
      const d = sl(e, t);
      return ((u = e.tiers) == null ? void 0 : u.mode) === "graduated" ? On(Pn(e, t), e.tiers.rows) * i : zt(e, t) * d * i;
    }
  }
}
const cp = 5;
function up(e, t) {
  const n = ni(e, t.selections, t.file);
  if (!n)
    return;
  const i = Rr(e, t), r = i.quantity;
  if (r <= 0 || i.unavailable)
    return;
  const s = { selections: t.selections, file: t.file, quantity: r }, a = ol(e, s).map(({ modifier: u }) => u), o = dp(e, a), l = /* @__PURE__ */ new Set();
  for (const { table: u } of o)
    for (const d of u.rows) {
      if (d.upTo === void 0)
        continue;
      const f = fp(n, r, Math.floor(d.upTo) + 1);
      f !== void 0 && f > r && l.add(f);
    }
  const c = [...l].sort((u, d) => u - d).slice(0, cp);
  for (const u of c) {
    const d = Rr(e, { ...t, quantity: u });
    if (!(d.unavailable || d.unitPrice >= i.unitPrice))
      return {
        add: u - r,
        quantity: u,
        unitPrice: d.unitPrice,
        percentOff: pp(o, r, u)
      };
  }
}
function dp(e, t) {
  const n = [], i = e.pricing.basePrice.tiers;
  i && i.basis === "quantity" && n.push({ table: i, percent: !1 });
  for (const r of t)
    r.tiers && r.tiers.basis === "quantity" && n.push({ table: r.tiers, percent: r.type === "percent" });
  return n;
}
function fp(e, t, n) {
  if (e.type === "quantities") {
    const s = Math.ceil((n - t) / e.step), a = t + Math.max(s, 0) * e.step;
    return e.maxTotal !== void 0 && a > e.maxTotal ? void 0 : a;
  }
  const i = Math.ceil((n - e.min) / e.step), r = e.min + Math.max(i, 0) * e.step;
  return e.max !== void 0 && r > e.max ? void 0 : r;
}
function pp(e, t, n) {
  let i = 1, r = 1;
  for (const { table: s, percent: a } of e) {
    const o = Qn(s.rows, t), l = Qn(s.rows, n);
    if (!a) {
      if (o !== l)
        return;
      continue;
    }
    i *= 1 + o.amount / 100, r *= 1 + l.amount / 100;
  }
  if (!(r >= i || r >= 1))
    return Math.round((1 - r) * 1e4) / 100;
}
const hp = /* @__PURE__ */ new Set([
  "perPage",
  "perColorPage",
  "perMonoPage"
]), mp = /* @__PURE__ */ new Set([
  "file.pages",
  "file.colorPages",
  "file.monoPages"
]);
function ll(e) {
  return e ? [...e.all ?? [], ...e.any ?? []].some((n) => cs(n) ? mp.has(n.ref) : ll(n)) : !1;
}
function yp(e) {
  const t = (n) => {
    var i;
    return hp.has(n.type) || ((i = n.tiers) == null ? void 0 : i.basis) === "pages" || n.formula !== void 0 && ps(n.formula).has("pages");
  };
  for (const n of e.sections)
    for (const i of n.fields)
      if (ll(i.visibleWhen) || i.priceModifiers.some(t) || jt(i) && i.options.some((r) => r.priceModifiers.some(t)))
        return !0;
  return !1;
}
function cl(e, t, n, i = {}) {
  var s, a;
  const r = [];
  for (const { section: o, fields: l } of e) {
    const u = o.fields.filter((d) => d.type !== "info").length === 1 && ((s = o.title) == null ? void 0 : s.trim()) || void 0;
    for (const d of l) {
      if (d.type === "info")
        continue;
      const f = t[d.id];
      let m;
      if (ti(d)) {
        const g = Array.isArray(f) ? f : typeof f == "string" ? [f] : [], _ = d.options.filter((E) => g.includes(E.id)).map((E) => E.label);
        m = _.length ? _.join(", ") : void 0;
      } else if (d.type === "quantities") {
        const g = It(d, f), _ = d.options.filter((E) => g[E.id] !== void 0).map((E) => `${E.label} × ${g[E.id]}`);
        m = _.length ? _.join(", ") : void 0;
      } else if (d.type === "file")
        m = (n == null ? void 0 : n.fileName) ?? (n == null ? void 0 : n.fileId);
      else if (it(f))
        m = `${f.w} × ${f.h} ${f.unit}`;
      else if (d.type === "quantity" && f !== void 0 && f !== "") {
        const g = Gn(d, f), _ = (a = d.unit) == null ? void 0 : a.trim();
        m = _ ? `${g} ${_}` : String(g);
      } else f !== void 0 && f !== "" && (m = String(f));
      m !== void 0 && r.push({
        fieldId: d.id,
        /* An unlabeled quantity is common (the stepper explains
           itself on the page) — never show its internal id. */
        label: d.label || u || (Vi(d) ? i.quantityLabel ?? "Quantity" : d.id),
        value: m
      });
      const y = d.type === "file" ? gp(n) : void 0;
      y && i.fileLinkLabel && m !== void 0 && r.push({ fieldId: d.id, label: i.fileLinkLabel, value: y });
    }
  }
  return r;
}
function gp(e) {
  var n;
  const t = (n = e == null ? void 0 : e.raw) == null ? void 0 : n.downloadUrl;
  return typeof t == "string" && t.startsWith("https://") ? t : void 0;
}
async function vp(e, t, n) {
  const i = n ? await bp(n) : void 0, r = await fetch(e, {
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
    const d = await r.text();
    throw new Error(`Upload authorization failed: ${d || r.status}`);
  }
  const { url: s, fields: a, fileId: o, downloadUrl: l } = await r.json(), c = new FormData();
  for (const [d, f] of Object.entries(a))
    c.append(d, f);
  c.append("file", t);
  const u = await fetch(s, {
    method: "POST",
    body: c
  });
  if (!u.ok) {
    const d = await u.text();
    throw new Error(`Storage upload failed: ${d || u.status}`);
  }
  return {
    fileId: o ?? crypto.randomUUID(),
    fileName: t.name,
    fileSizeBytes: t.size,
    // Only a real web link: it ends up as a clickable link on the order.
    ...typeof l == "string" && /^https:\/\//.test(l) ? { downloadUrl: l } : {}
  };
}
function bp(e) {
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
async function _p(e, t) {
  if (!e.endpoint)
    throw new Error(`Provider "${e.id}" has no endpoint for pull mode.`);
  const n = `${e.endpoint.replace(/\/$/, "")}/${encodeURIComponent(t)}`, i = await fetch(n);
  if (!i.ok)
    throw new Error(`Metadata fetch failed: ${i.status}`);
  return hs.parse(await i.json());
}
async function xp(e, t, n = {}) {
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
      if (s = await _p(e, t), s.status === "ready" || s.status === "failed")
        return s;
    } catch {
    }
    await wp(i);
  }
  return s;
}
function wp(e) {
  return new Promise((t) => setTimeout(t, e));
}
function kp(e) {
  const t = { ...e }, n = /* @__PURE__ */ We(null), i = /* @__PURE__ */ We(!1), r = /* @__PURE__ */ We(null), s = /* @__PURE__ */ We(!1), a = /* @__PURE__ */ Bt({}), o = /* @__PURE__ */ We(void 0), l = /* @__PURE__ */ We(!1), c = Q(
    () => n.value ? al(n.value, a, o.value) : 1
  ), u = Q(() => ({
    selections: a,
    file: o.value,
    quantity: c.value
  }));
  async function d() {
    i.value = !0, r.value = null, s.value = !1;
    try {
      if (t.inlineConfig)
        n.value = ma(t.inlineConfig);
      else if (t.configUrl) {
        const I = await fetch(t.configUrl);
        if (I.status === 404 || I.status === 403) {
          s.value = !0;
          return;
        }
        if (!I.ok)
          throw new Error(`Config load failed: ${I.status}`);
        n.value = ma(await I.json());
      } else
        throw new Error("No config-url or inline config provided.");
      Sp(n.value, a);
    } catch (I) {
      r.value = I instanceof Error ? I.message : String(I);
    } finally {
      i.value = !1;
    }
  }
  async function f(I) {
    Object.assign(t, I);
    for (const A of Object.keys(a))
      delete a[A];
    o.value = void 0, await d();
  }
  const m = Q(() => n.value ? n.value.sections.map((I) => ({
    section: I,
    fields: I.fields.filter(
      (A) => ys(A, u.value)
    )
  })).filter((I) => I.fields.length > 0) : []), y = Q(
    () => m.value.flatMap((I) => I.fields)
  ), g = Q(() => n.value ? Rr(n.value, {
    selections: a,
    file: o.value
  }) : null), _ = Q(() => {
    if (!n.value)
      return;
    const I = ni(n.value, a, o.value);
    if (I != null && I.nextBreakHint)
      return up(n.value, { selections: a, file: o.value });
  });
  function E(I, A) {
    var ce;
    const D = (ce = n.value) == null ? void 0 : ce.sections.flatMap((fe) => fe.fields).find((fe) => fe.id === I);
    (D == null ? void 0 : D.type) === "quantity" && typeof A == "number" ? a[I] = Gn(D, A) : (D == null ? void 0 : D.type) === "quantities" ? a[I] = It(D, A) : a[I] = A;
  }
  function x(I, A) {
    if (I.type !== "select-many") {
      E(I.id, A);
      return;
    }
    const D = a[I.id], ce = Array.isArray(D) ? [...D] : [], fe = ce.indexOf(A);
    if (fe >= 0)
      ce.splice(fe, 1);
    else {
      if (I.maxSelect !== void 0 && ce.length >= I.maxSelect)
        return;
      ce.push(A);
    }
    a[I.id] = ce;
  }
  async function W(I, A) {
    if (!t.uploadEndpoint) {
      r.value = "No upload endpoint configured.";
      return;
    }
    l.value = !0;
    try {
      const D = await vp(t.uploadEndpoint, A, t.turnstileUrl);
      o.value = {
        version: "1.0",
        fileId: D.fileId,
        source: "uploader",
        status: "ready",
        fileName: D.fileName,
        fileSizeBytes: D.fileSizeBytes,
        issues: [],
        ...D.downloadUrl ? { raw: { downloadUrl: D.downloadUrl } } : {}
      }, a[I.id] = D.fileId;
      const ce = t.provider;
      if (ce && ce.mode === "pull") {
        const fe = await xp(ce, D.fileId);
        o.value = fe;
      }
    } catch (D) {
      r.value = D instanceof Error ? D.message : String(D);
    } finally {
      l.value = !1;
    }
  }
  function V(I) {
    (!o.value || o.value.fileId === I.fileId) && (o.value = I);
  }
  function F(I) {
    o.value = I;
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
    visibleSections: m,
    visibleFields: y,
    price: g,
    nextBreak: _,
    /** The connected data-feed provider config, if any. */
    get provider() {
      return t.provider;
    },
    load: d,
    reload: f,
    select: E,
    toggle: x,
    handleFile: W,
    feedMetadata: V,
    setFile: F
  };
}
function Sp(e, t) {
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
          case "quantities":
            t[i.id] = {};
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
function Cp() {
  const e = /* @__PURE__ */ Bt(/* @__PURE__ */ new Map()), t = Q(
    () => Array.from(e, ([s, a]) => ({ key: s, message: a.message }))
  ), n = Q(() => e.size > 0);
  function i(s, a) {
    const o = e.get(s);
    o && o.message === a || e.set(s, { message: a });
  }
  function r(s) {
    e.delete(s);
  }
  return { list: t, held: n, add: i, release: r };
}
const Fr = 1, An = "[print-configurator]";
function Tp(e) {
  const { host: t, cfg: n, validation: i, holds: r, producers: s } = e;
  function a(O) {
    return O === void 0 ? O : JSON.parse(JSON.stringify(O));
  }
  const o = Q(() => !n.schema.value || !n.price.value ? null : {
    apiVersion: Fr,
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
  function u(O, j) {
    if (!O)
      return ["selections", "quantity", "price", "file", "holds", "valid"];
    const re = [], ye = /* @__PURE__ */ new Set([
      ...Object.keys(O.selections),
      ...Object.keys(j.selections)
    ]);
    for (const qe of ye)
      Yt(O.selections[qe], j.selections[qe]) || re.push(`selections.${qe}`);
    return O.quantity !== j.quantity && re.push("quantity"), Yt(O.price, j.price) || re.push("price"), Yt(O.file, j.file) || re.push("file"), Yt(O.holds, j.holds) || re.push("holds"), O.valid !== j.valid && re.push("valid"), re;
  }
  let d = null;
  function f(O) {
    d = (O == null ? void 0 : O.source) ?? "api";
  }
  function m() {
    Li(() => {
      d = null;
    });
  }
  bt(o, (O) => {
    if (!c || !O)
      return;
    const j = u(l, O), re = d ?? "user";
    l = O, j.length !== 0 && y("change", { ...O, source: re, changed: j });
  });
  function y(O, j) {
    t == null || t.dispatchEvent(
      new CustomEvent(O, { detail: j, bubbles: !0, composed: !0 })
    );
  }
  function g() {
    l = o.value, c = !0, l && y("ready", {
      ...l,
      source: "user"
    });
  }
  function _(O) {
    return O.sections.flatMap((j) => j.fields);
  }
  function E(O) {
    const j = n.schema.value;
    if (!j)
      return null;
    const re = _(j);
    return re.find((ye) => ye.id === O) ?? re.find((ye) => ye.role === O) ?? /* Several quantity fields may exist (one per paper group, say);
    "the quantity field" is the one currently in play. */
    (O === "quantity" ? ni(j, n.selections, n.file.value) : void 0) ?? re.find(
      (ye) => (O === "quantity" || O === "dimensions" || O === "file") && ye.type === O
    ) ?? null;
  }
  function x(O, j) {
    switch (O.type) {
      case "select-one":
        return typeof j == "string" && O.options.some((re) => re.id === j);
      case "select-many":
        return Array.isArray(j) && j.every(
          (re) => typeof re == "string" && O.options.some((ye) => ye.id === re)
        );
      case "quantity":
      case "number":
        return typeof j == "number" && Number.isFinite(j);
      case "quantities":
        return typeof j == "object" && j !== null && !Array.isArray(j) && Object.entries(j).every(
          ([re, ye]) => O.options.some((qe) => qe.id === re) && typeof ye == "number" && Number.isFinite(ye) && ye >= 0
        );
      case "text":
        return typeof j == "string";
      case "dimensions":
        return typeof j == "object" && j !== null && !Array.isArray(j) && Number.isFinite(j.w) && Number.isFinite(j.h);
      default:
        return !1;
    }
  }
  function W(O, j) {
    const re = n.schema.value, ye = re ? _(re).find((qe) => qe.id === O) : null;
    return ye ? x(ye, j) ? Yt(n.selections[O], j) ? !1 : (n.select(O, j), i.touch(O), !0) : (console.warn(
      `${An} setSelection: invalid value for "${O}" (${ye.type})`,
      j
    ), !1) : (console.warn(`${An} setSelection: unknown field "${O}"`), !1);
  }
  function V(O, j, re) {
    f(re), W(O, j), m();
  }
  function F(O, j) {
    if (typeof O != "object" || O === null) {
      console.warn(`${An} setSelections: expected an object map`);
      return;
    }
    f(j);
    for (const [re, ye] of Object.entries(O))
      W(re, ye);
    m();
  }
  function I() {
    const O = n.schema.value;
    return O ? _(O).find((j) => j.type === "file") ?? null : null;
  }
  function A(O) {
    const j = I();
    !j || n.selections[j.id] === O || (n.select(j.id, O), i.touch(j.id));
  }
  function D(O, j) {
    if (O === null) {
      const we = I(), ge = we ? !Ap(n.selections[we.id]) : !1;
      if (n.file.value === void 0 && !ge)
        return;
      f(j), n.setFile(void 0), A(""), m();
      return;
    }
    const re = hs.safeParse({
      version: "1.0",
      source: "custom",
      status: "ready",
      issues: [],
      ...O
    });
    if (!re.success) {
      console.warn(`${An} setFile: invalid file record`, re.error.issues);
      return;
    }
    const ye = I(), qe = Yt(n.file.value, re.data), Ne = !ye || n.selections[ye.id] === re.data.fileId;
    qe && Ne || (f(j), qe || n.setFile(re.data), A(re.data.fileId), m());
  }
  function ce(O, j) {
    if (typeof O != "string" || O === "") {
      console.warn(`${An} addHold: a non-empty string key is required`);
      return;
    }
    f(j), r.add(O, j == null ? void 0 : j.message), m();
  }
  function fe(O, j) {
    f(j), r.release(O), m();
  }
  return {
    notifyReady: g,
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
      field(O) {
        const j = E(O);
        return j ? a(j) : null;
      },
      setSelection: V,
      setSelections: F,
      setFile: D,
      addHold: ce,
      releaseHold: fe,
      /* Producer registry (docs/printapp-integration-v1.md). Not part
         of `state`: a producer is an offer available on the page, not
         an answer the customer has given, and nothing about the
         configuration changes when one appears. */
      registerProducer(O, j) {
        s.register(O, j);
      },
      unregisterProducer(O) {
        s.unregister(O);
      },
      /** Push-mode provider feed (pre-Page-API method, kept). */
      feedMetadata(O) {
        n.feedMetadata(O);
      },
      apiVersion: Fr
    }
  };
}
function Ap(e) {
  return e === void 0 || e === "";
}
function Yt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != "object" || typeof t != "object" || e === null || t === null || Array.isArray(e) !== Array.isArray(t))
    return !1;
  const n = Object.keys(e), i = Object.keys(t);
  return n.length !== i.length ? !1 : n.every(
    (r) => Yt(
      e[r],
      t[r]
    )
  );
}
const _a = "[print-configurator]", jr = 10;
function $p(e) {
  const t = /* @__PURE__ */ Bt(/* @__PURE__ */ new Map()), n = Q(
    () => Array.from(t.values()).sort((o, l) => o.order - l.order)
  );
  function i(o, l) {
    if (typeof o != "string" || o === "") {
      console.warn(`${_a} registerProducer: a non-empty string id is required`);
      return;
    }
    const c = l == null ? void 0 : l.label;
    if (typeof c != "string" || c === "") {
      console.warn(`${_a} registerProducer: "${o}" needs a label`);
      return;
    }
    t.set(o, {
      id: o,
      label: c,
      description: l.description,
      /* Default behind the built-in upload: the merchant's own file is
         the expected answer, an alternative producer is the offer. */
      order: Number.isFinite(l.order) ? Number(l.order) : jr + 10,
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
          apiVersion: Fr,
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
const Dr = "__artwork", ul = "__artwork-section";
function Ip(e) {
  return { id: ul, title: e, fields: [{
    id: Dr,
    type: "file",
    display: "producer",
    accept: [],
    required: !1,
    priceModifiers: []
  }] };
}
function Np(e, t) {
  bt(
    [() => e.schema.value, () => t.list.value],
    ([n, i]) => {
      if (!n)
        return;
      const r = n.sections.some(
        (o) => o.fields.some(
          (l) => l.type === "file" && l.id !== Dr
        )
      ), s = n.sections.findIndex(
        (o) => o.id === ul
      ), a = i.length > 0 && !r;
      a && s === -1 ? n.sections.push(Ip(i[0].label)) : !a && s !== -1 && (n.sections.splice(s, 1), e.select(Dr, ""));
    },
    { immediate: !0, deep: !0 }
  );
}
const dl = {
  "state.loading": "Loading options…",
  "summary.title": "Summary",
  "summary.basePrice": "Base price",
  "summary.setupFee": "Setup fee",
  "summary.minimumAdjustment": "Minimum order adjustment",
  "summary.total": "Total",
  "summary.unitPrice": "{quantity} × {unitPrice}",
  "summary.unavailable": "This combination is currently unavailable.",
  /** A formula price rule has no price for this size or quantity. */
  "summary.unpriceable": "This size can't be priced online. Please contact us.",
  /** The next quantity break, under the total (opt-in per quantity field). */
  "summary.nextBreakPercent": "Add {count} more to get {percent}% off",
  "summary.nextBreakPrice": "Add {count} more for {unitPrice} each",
  "summary.issues": "{count} options need attention",
  "summary.addToCart": "Add to cart",
  /*
   * Tax breakdown (display only — see src/tax.ts). `{tax}` is the store's
   * tax name or "tax.name"; `{rate}` is the rate in the page locale's
   * number format. Translations may drop `{tax}` where the language has a
   * fixed term ("Total HT" / "Total TTC").
   */
  "summary.totalNet": "Total excl. {tax}",
  "summary.tax": "{tax} ({rate}%)",
  "summary.totalGross": "Total incl. {tax}",
  "summary.taxIncluded": "Includes {tax} ({rate}%): {amount}",
  /** Default tax name when the store gives none. */
  "tax.name": "VAT",
  "recap.empty": "Your choices will appear here.",
  "wizard.back": "Back",
  "wizard.continue": "Continue",
  "choice.placeholder": "Choose {label}…",
  "choice.placeholderBare": "Choose…",
  "quantity.label": "Quantity",
  "stepper.decrease": "Decrease {label}",
  "stepper.increase": "Increase {label}",
  /** Under a count-per-option grid; {count} may carry the unit: "10 shirts". */
  "quantities.total": "Total: {count}",
  "dimensions.width": "Width",
  "dimensions.height": "Height",
  "dimensions.unit": "Unit",
  "upload.drop": "Drop your file here or click to browse",
  "upload.replace": "Click or drop to replace",
  "upload.analyzing": "Analyzing…",
  "upload.secureLoading": "Loading secure upload…",
  "upload.unavailable": "Upload is unavailable",
  "upload.retry": "Retry",
  /** Label of the file's download link on the cart line and order. */
  "upload.downloadLink": "Download file",
  "artwork.or": "or",
  "artwork.change": "Change",
  "artwork.remove": "Remove",
  /** Shown for a producer-made design that carries no name of its own. */
  "artwork.designName": "Your design",
  "artwork.pageCount": "{count} pages",
  "artwork.pageCountOne": "1 page",
  "validation.design": "Please create your design.",
  "validation.file": "Please upload a file.",
  "validation.text": "Please fill this in.",
  "validation.size": "Please enter a size.",
  "validation.number": "Please enter a value.",
  "validation.choice": "Please make a selection.",
  "validation.minSelect": "Choose at least {min}.",
  "validation.maxSelect": "Choose at most {max}.",
  "validation.width": "Width must be between {min} and {max} {unit}.",
  "validation.height": "Height must be between {min} and {max} {unit}.",
  "validation.range": "Enter a value between {min} and {max}.",
  "validation.minTotal": "Choose at least {min} in total.",
  "validation.maxTotal": "Choose at most {max} in total."
}, Ep = {
  base: "summary.basePrice",
  "setup-fee": "summary.setupFee",
  "adjustment:minimum": "summary.minimumAdjustment"
};
function Op(e, t) {
  const n = Ep[t.sourceId];
  return n ? e(n) : t.label;
}
function Pp(e, t) {
  return t ? e.replace(
    /\{(\w+)\}/g,
    (n, i) => i in t ? String(t[i]) : n
  ) : e;
}
function fl(e) {
  const t = () => typeof e == "function" ? e() : e;
  return {
    t(n, i) {
      var a;
      const r = (a = t()) == null ? void 0 : a[n], s = typeof r == "string" && r !== "" ? r : dl[n];
      return Pp(s, i);
    }
  };
}
function Mp(e) {
  if (!e)
    return;
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      return;
    }
  if (!t || typeof t != "object" || Array.isArray(t))
    return;
  const n = {};
  for (const [i, r] of Object.entries(t))
    i in dl && typeof r == "string" && (n[i] = r);
  return n;
}
const vs = fl(), pl = Symbol("print-configurator-strings");
function lt() {
  return Ut(pl, vs);
}
function Rp(e, t, n, i = vs.t) {
  const r = /* @__PURE__ */ Bt(/* @__PURE__ */ new Set()), s = { value: !1 }, a = Q(() => {
    const f = [];
    for (const m of e.value) {
      const y = Fp(m, t, i);
      y && f.push({ fieldId: m.id, message: y });
    }
    return f;
  }), o = Q(
    () => {
      var f;
      return a.value.length === 0 && !(((f = n.value) == null ? void 0 : f.unavailable) ?? !1);
    }
  );
  function l(f) {
    var m;
    if (!(!r.has(f) && !s.value))
      return (m = a.value.find((y) => y.fieldId === f)) == null ? void 0 : m.message;
  }
  function c(f) {
    r.add(f);
  }
  function u() {
    s.value = !0;
    for (const f of e.value)
      r.add(f.id);
    return a.value;
  }
  function d() {
    r.clear(), s.value = !1;
  }
  return { issues: a, valid: o, errorFor: l, touch: c, touchAll: u, reset: d };
}
function Fp(e, t, n = vs.t) {
  const i = t[e.id];
  if (e.type === "quantities") {
    const s = gs(It(e, i));
    return s < e.minTotal ? n("validation.minTotal", { min: e.minTotal }) : e.maxTotal !== void 0 && s > e.maxTotal ? n("validation.maxTotal", { max: e.maxTotal }) : void 0;
  }
  const r = i === void 0 || i === "" || Array.isArray(i) && i.length === 0;
  if (e.required && e.type !== "info" && r)
    switch (e.type) {
      case "file":
        return e.display === "producer" ? n("validation.design") : n("validation.file");
      case "text":
        return n("validation.text");
      case "dimensions":
        return n("validation.size");
      case "number":
      case "quantity":
        return n("validation.number");
      default:
        return n("validation.choice");
    }
  if (e.type === "select-many" && Array.isArray(i)) {
    if (i.length < e.minSelect)
      return n("validation.minSelect", { min: e.minSelect });
    if (e.maxSelect !== void 0 && i.length > e.maxSelect)
      return n("validation.maxSelect", { max: e.maxSelect });
  }
  if (e.type === "dimensions" && it(i)) {
    const s = xa(i.unit) / xa(e.defaultUnit), a = i.w * s, o = i.h * s;
    if (e.minW !== void 0 && a < e.minW || e.maxW !== void 0 && a > e.maxW)
      return n("validation.width", {
        min: e.minW ?? 0,
        max: e.maxW ?? "∞",
        unit: e.defaultUnit
      });
    if (e.minH !== void 0 && o < e.minH || e.maxH !== void 0 && o > e.maxH)
      return n("validation.height", {
        min: e.minH ?? 0,
        max: e.maxH ?? "∞",
        unit: e.defaultUnit
      });
  }
  if (e.type === "number" && typeof i == "number" && (e.min !== void 0 && i < e.min || e.max !== void 0 && i > e.max))
    return n("validation.range", { min: e.min ?? "−∞", max: e.max ?? "∞" });
}
function xa(e) {
  switch (e) {
    case "mm":
      return 1;
    case "cm":
      return 10;
    case "in":
      return 25.4;
  }
}
const jp = /* @__PURE__ */ new Set([
  "left",
  "right",
  "left_space",
  "right_space"
]);
function Dp(e) {
  if (!e)
    return;
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      return;
    }
  if (!t || typeof t != "object" || Array.isArray(t))
    return;
  const n = t;
  if (typeof n.symbol != "string")
    return;
  const i = { symbol: n.symbol };
  return typeof n.position == "string" && jp.has(n.position) && (i.position = n.position), typeof n.decimals == "number" && Number.isInteger(n.decimals) && n.decimals >= 0 && n.decimals <= 8 && (i.decimals = n.decimals), typeof n.thousandSeparator == "string" && (i.thousandSeparator = n.thousandSeparator), typeof n.decimalSeparator == "string" && (i.decimalSeparator = n.decimalSeparator), i;
}
function hl(e) {
  if (!e)
    return;
  const t = e.trim().replace(/_/g, "-");
  if (t !== "")
    try {
      return Intl.getCanonicalLocales(t)[0];
    } catch {
      return;
    }
}
function Lp(e, t, n, i) {
  if (i)
    return qp(e, i);
  try {
    return new Intl.NumberFormat(hl(n) ?? "en", {
      style: "currency",
      currency: t
    }).format(e);
  } catch {
    return `${t} ${e.toFixed(2)}`;
  }
}
function qp(e, t) {
  const n = t.decimals ?? 2, i = e < 0, r = Math.abs(e).toFixed(n), [s = "0", a] = r.split("."), o = s.replace(/\B(?=(\d{3})+(?!\d))/g, t.thousandSeparator ?? ","), l = a !== void 0 ? `${o}${t.decimalSeparator ?? "."}${a}` : o, c = i ? "-" : "";
  switch (t.position ?? "left") {
    case "right":
      return `${c}${l}${t.symbol}`;
    case "left_space":
      return `${c}${t.symbol} ${l}`;
    case "right_space":
      return `${c}${l} ${t.symbol}`;
    default:
      return `${c}${t.symbol}${l}`;
  }
}
function zp(e, t, n) {
  if (e !== "exclusive" && e !== "inclusive")
    return;
  const r = (typeof t == "number" ? String(t) : typeof t == "string" ? t : "").trim().replace(/\s*%$/, "").replace(",", ".");
  if (!/^\d+(\.\d+)?$/.test(r))
    return;
  const s = Number(r);
  if (!(s > 0 && s < 100))
    return;
  const a = typeof n == "string" ? n.trim() : "";
  return { mode: e, rate: s, ...a ? { name: a } : {} };
}
function ln(e, t) {
  const n = 10 ** t;
  return Math.round((e + Math.sign(e) * Number.EPSILON * Math.abs(e)) * n) / n;
}
function Up(e, t, n) {
  const i = Ko(t), r = n.rate / 100;
  if (n.mode === "exclusive") {
    const o = ln(e, i), l = ln(o * r, i);
    return { net: o, tax: l, gross: ln(o + l, i) };
  }
  const s = ln(e, i), a = ln(s - s / (1 + r), i);
  return { net: ln(s - a, i), tax: a, gross: s };
}
function wa(e, t) {
  try {
    return new Intl.NumberFormat(hl(t) ?? "en", {
      maximumFractionDigits: 3
    }).format(e);
  } catch {
    return String(e);
  }
}
function Zi(e, t) {
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
const Vp = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Bp = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], Zp = {
  key: 0,
  class: "check",
  "aria-hidden": "true"
}, Hp = ["src"], Wp = { class: "card-label" }, Kp = {
  key: 2,
  class: "card-description"
}, ka = /* @__PURE__ */ Te({
  __name: "ChoiceCards",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Zi(
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
    return (c, u) => (b(), w("div", {
      class: Ke(["grid", e.field.display]),
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (b(!0), w(oe, null, Me(e.field.options, (d, f) => (b(), w("button", {
        key: d.id,
        type: "button",
        class: Ke(["card", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice card choice-selected" : "choice card",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-label": d.label,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : N(s).tabindexFor(d, f),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, f)
      }, [
        a(d.id) ? (b(), w("span", Zp, "✓")) : ae("", !0),
        d.image ? (b(), w("img", {
          key: 1,
          src: d.image,
          alt: ""
        }, null, 8, Hp)) : ae("", !0),
        M("span", Wp, z(d.label), 1),
        d.description ? (b(), w("span", Kp, z(d.description), 1)) : ae("", !0)
      ], 42, Bp))), 128))
    ], 10, Vp));
  }
}), Gp = ["id", "value", "aria-labelledby", "aria-describedby", "aria-invalid"], Qp = {
  key: 0,
  value: "",
  disabled: ""
}, Yp = ["value", "disabled"], Jp = /* @__PURE__ */ Te({
  __name: "ChoiceDropdown",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = lt();
    function s(a) {
      i("pick", a.target.value);
    }
    return (a, o) => (b(), w("select", {
      id: `pc-control-${e.field.id}`,
      class: "dropdown",
      part: "dropdown",
      value: e.selectedIds[0] ?? "",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onChange: s
    }, [
      e.selectedIds.length ? ae("", !0) : (b(), w("option", Qp, z(e.field.label ? N(r)("choice.placeholder", { label: e.field.label.toLowerCase() }) : N(r)("choice.placeholderBare")), 1)),
      (b(!0), w(oe, null, Me(e.field.options, (l) => (b(), w("option", {
        key: l.id,
        value: l.id,
        disabled: n.unavailableIds.includes(l.id)
      }, z(l.label), 9, Yp))), 128))
    ], 40, Gp));
  }
}), Xp = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], eh = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], th = { key: 0 }, nh = { class: "choice-body" }, ih = { class: "choice-title" }, rh = {
  key: 0,
  class: "choice-description"
}, sh = /* @__PURE__ */ Te({
  __name: "ChoiceList",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Zi(
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
    return (c, u) => (b(), w("div", {
      class: "choice-list",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (b(!0), w(oe, null, Me(e.field.options, (d, f) => (b(), w("button", {
        key: d.id,
        type: "button",
        class: Ke(["choice-row", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice choice-selected" : "choice",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : N(s).tabindexFor(d, f),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, f)
      }, [
        M("span", {
          class: Ke(["choice-indicator", { multi: r }]),
          "aria-hidden": "true"
        }, [
          a(d.id) ? (b(), w("span", th, "✓")) : ae("", !0)
        ], 2),
        M("span", nh, [
          M("span", ih, z(d.label), 1),
          d.description ? (b(), w("span", rh, z(d.description), 1)) : ae("", !0)
        ])
      ], 42, eh))), 128))
    ], 8, Xp));
  }
}), ah = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], oh = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], lh = {
  key: 0,
  "aria-hidden": "true"
}, ch = /* @__PURE__ */ Te({
  __name: "ChoicePills",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Zi(
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
    return (c, u) => (b(), w("div", {
      class: "pills",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (b(!0), w(oe, null, Me(e.field.options, (d, f) => (b(), w("button", {
        key: d.id,
        type: "button",
        class: Ke(["pill", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice pill choice-selected" : "choice pill",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : N(s).tabindexFor(d, f),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, f)
      }, [
        ns(z(d.label) + " ", 1),
        a(d.id) ? (b(), w("span", lh, "✓")) : ae("", !0)
      ], 42, oh))), 128))
    ], 8, ah));
  }
}), uh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], dh = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], fh = {
  key: 0,
  class: "swatch-check",
  "aria-hidden": "true"
}, ph = {
  key: 0,
  class: "swatch-selected-label",
  "aria-hidden": "true"
}, hh = /* @__PURE__ */ Te({
  __name: "ChoiceSwatches",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Zi(
      () => n.field.options,
      () => n.selectedIds
    );
    function a(u) {
      return n.selectedIds.includes(u);
    }
    function o(u) {
      return n.unavailableIds.includes(u);
    }
    const l = Q(
      () => n.field.options.filter((u) => n.selectedIds.includes(u.id)).map((u) => u.label).join(", ")
    );
    function c(u, d) {
      if (r)
        return;
      const f = s.onKeydown(u, d);
      f && !o(f) && i("pick", f);
    }
    return (u, d) => (b(), w("div", null, [
      M("div", {
        class: "swatches",
        role: r ? "group" : "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0
      }, [
        (b(!0), w(oe, null, Me(e.field.options, (f, m) => (b(), w("button", {
          key: f.id,
          type: "button",
          class: Ke(["swatch", { active: a(f.id), unavailable: o(f.id) }]),
          part: a(f.id) ? "choice swatch choice-selected" : "choice swatch",
          style: Jn({ background: f.color }),
          role: r ? void 0 : "radio",
          "aria-checked": r ? void 0 : a(f.id),
          "aria-pressed": r ? a(f.id) : void 0,
          "aria-label": f.label,
          "aria-disabled": o(f.id) || void 0,
          tabindex: r ? 0 : N(s).tabindexFor(f, m),
          onClick: (y) => !o(f.id) && i("pick", f.id),
          onKeydown: (y) => c(y, m)
        }, [
          a(f.id) ? (b(), w("span", fh, "✓")) : ae("", !0)
        ], 46, dh))), 128))
      ], 8, uh),
      l.value ? (b(), w("p", ph, z(l.value), 1)) : ae("", !0)
    ]));
  }
}), Sa = {
  cards: ka,
  grid: ka,
  swatches: hh,
  pills: ch,
  dropdown: Jp,
  list: sh
}, Hi = Symbol("print-configurator"), mh = ["data-field-id", "data-type"], yh = ["id"], gh = {
  key: 0,
  class: "req",
  "aria-hidden": "true"
}, vh = {
  key: 1,
  class: "help",
  part: "field-help"
}, bh = ["id"], _h = /* @__PURE__ */ Te({
  __name: "FieldShell",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e, { expose: t }) {
    return t({ fieldId: e.field.id }), (i, r) => (b(), w("div", {
      class: "field",
      part: "field",
      "data-field-id": e.field.id,
      "data-type": e.field.type
    }, [
      e.field.label ? (b(), w("span", {
        key: 0,
        id: `pc-label-${e.field.id}`,
        class: "field-label",
        part: "field-label"
      }, [
        ns(z(e.field.label) + " ", 1),
        e.field.required ? (b(), w("span", gh, "*")) : ae("", !0)
      ], 8, yh)) : ae("", !0),
      e.field.helpText ? (b(), w("p", vh, z(e.field.helpText), 1)) : ae("", !0),
      Ac(i.$slots, "default"),
      e.error ? (b(), w("p", {
        key: 2,
        id: `pc-error-${e.field.id}`,
        class: "field-error",
        part: "field-error",
        role: "status"
      }, z(e.error), 9, bh)) : ae("", !0)
    ], 8, mh));
  }
}), xh = ["aria-labelledby"], wh = ["part", "aria-checked", "onClick"], kh = ["value", "aria-label"], Sh = ["value"], Ch = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Th = {
  key: 3,
  class: "stepper",
  part: "stepper"
}, Ah = ["aria-label", "disabled"], $h = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Ih = ["aria-label", "disabled"], Nh = /* @__PURE__ */ Te({
  __name: "QuantityInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = Q(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue
    ), { t: s } = lt(), a = Q(() => n.field.label ?? s("quantity.label"));
    function o(f) {
      i("select", Gn(n.field, f)), i("touch");
    }
    function l(f) {
      o(r.value + f * n.field.step);
    }
    function c(f) {
      const m = f.target.value;
      if (m === "")
        return;
      const y = Number(m);
      Gn(n.field, y) === y && o(y);
    }
    function u(f) {
      const m = f.target;
      o(m.value === "" ? n.field.defaultValue : Number(m.value)), m.value = String(r.value);
    }
    function d(f) {
      u(f);
    }
    return (f, m) => {
      var y, g;
      return e.field.display === "pills" && ((y = e.field.presets) != null && y.length) ? (b(), w("div", {
        key: 0,
        class: "pills",
        role: "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0
      }, [
        (b(!0), w(oe, null, Me(e.field.presets, (_) => (b(), w("button", {
          key: _,
          type: "button",
          class: Ke(["pill", { active: r.value === _ }]),
          part: r.value === _ ? "choice pill choice-selected" : "choice pill",
          role: "radio",
          "aria-checked": r.value === _,
          onClick: (E) => o(_)
        }, z(_), 11, wh))), 128))
      ], 8, xh)) : e.field.display === "dropdown" && ((g = e.field.presets) != null && g.length) ? (b(), w("select", {
        key: 1,
        class: "dropdown",
        part: "dropdown",
        value: String(r.value),
        "aria-label": a.value,
        onChange: m[0] || (m[0] = (_) => o(Number(_.target.value)))
      }, [
        (b(!0), w(oe, null, Me(e.field.presets, (_) => (b(), w("option", {
          key: _,
          value: String(_)
        }, z(_), 9, Sh))), 128))
      ], 40, kh)) : e.field.display === "input" ? (b(), w("input", {
        key: 2,
        class: "number-input",
        part: "stepper-input",
        type: "number",
        inputmode: "numeric",
        value: r.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": a.value,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        onInput: c,
        onBlur: u,
        onKeydown: xr(Zn(d, ["prevent"]), ["enter"])
      }, null, 40, Ch)) : (b(), w("div", Th, [
        M("button", {
          type: "button",
          part: "stepper-decrement",
          "aria-label": N(s)("stepper.decrease", { label: a.value.toLowerCase() }),
          disabled: r.value <= e.field.min,
          onClick: m[1] || (m[1] = (_) => l(-1))
        }, " − ", 8, Ah),
        M("input", {
          class: "stepper-value",
          part: "stepper-input",
          type: "number",
          inputmode: "numeric",
          value: r.value,
          min: e.field.min,
          max: e.field.max,
          step: e.field.step,
          "aria-label": a.value,
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          onInput: c,
          onBlur: u,
          onKeydown: xr(Zn(d, ["prevent"]), ["enter"])
        }, null, 40, $h),
        M("button", {
          type: "button",
          part: "stepper-increment",
          "aria-label": N(s)("stepper.increase", { label: a.value.toLowerCase() }),
          disabled: e.field.max !== void 0 && r.value >= e.field.max,
          onClick: m[2] || (m[2] = (_) => l(1))
        }, " + ", 8, Ih)
      ]));
    };
  }
}), Eh = ["aria-labelledby", "aria-describedby"], Oh = ["part"], Ph = { class: "quantities-name" }, Mh = ["src"], Rh = {
  class: "quantities-label",
  part: "quantities-label"
}, Fh = {
  class: "stepper",
  part: "stepper"
}, jh = ["aria-label", "disabled", "onClick"], Dh = ["value", "max", "step", "disabled", "aria-label", "onInput", "onBlur", "onKeydown"], Lh = ["aria-label", "disabled", "onClick"], qh = {
  class: "quantities-total",
  part: "quantities-total",
  "aria-live": "polite"
}, zh = /* @__PURE__ */ Te({
  __name: "QuantitiesInput",
  props: {
    field: { type: null },
    value: { type: null },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = lt(), s = Q(() => It(n.field, n.value)), a = Q(() => gs(s.value)), o = Q(() => {
      var E;
      const _ = (E = n.field.unit) == null ? void 0 : E.trim();
      return _ ? `${a.value} ${_}` : String(a.value);
    });
    function l(_) {
      return s.value[_] ?? 0;
    }
    function c(_) {
      return n.unavailableIds.includes(_);
    }
    function u(_) {
      const E = l(_);
      return E === 0 ? n.field.min : E + n.field.step;
    }
    function d(_) {
      if (c(_))
        return !1;
      const E = u(_), { max: x, maxTotal: W } = n.field;
      return x !== void 0 && E > x ? !1 : W === void 0 || a.value - l(_) + E <= W;
    }
    function f(_, E) {
      const x = { ...s.value, [_]: E };
      i("select", It(n.field, x)), i("touch");
    }
    function m(_, E) {
      if (E === 1) {
        f(_, u(_));
        return;
      }
      const x = l(_) - n.field.step;
      f(_, x < n.field.min ? 0 : x);
    }
    function y(_, E) {
      const x = E.target.value;
      if (x === "")
        return;
      const W = Number(x);
      (It(n.field, { [_]: W })[_] ?? 0) === W && f(_, W);
    }
    function g(_, E) {
      const x = E.target;
      f(_, x.value === "" ? 0 : Number(x.value)), x.value = String(l(_));
    }
    return (_, E) => (b(), w(oe, null, [
      M("div", {
        class: Ke(["quantities", e.field.display === "list" ? "quantities-list" : "quantities-grid"]),
        part: "quantities",
        role: "group",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0
      }, [
        (b(!0), w(oe, null, Me(e.field.options, (x) => (b(), w("div", {
          key: x.id,
          class: Ke(["quantities-item", { active: l(x.id) > 0, off: c(x.id) }]),
          part: l(x.id) > 0 ? "quantities-item quantities-item-active" : "quantities-item"
        }, [
          M("span", Ph, [
            x.color ? (b(), w("span", {
              key: 0,
              class: "quantities-swatch",
              style: Jn({ background: x.color }),
              "aria-hidden": "true"
            }, null, 4)) : x.image ? (b(), w("img", {
              key: 1,
              class: "quantities-image",
              src: x.image,
              alt: ""
            }, null, 8, Mh)) : ae("", !0),
            M("span", Rh, z(x.label), 1)
          ]),
          M("div", Fh, [
            M("button", {
              type: "button",
              part: "stepper-decrement",
              "aria-label": N(r)("stepper.decrease", { label: x.label }),
              disabled: l(x.id) === 0,
              onClick: (W) => m(x.id, -1)
            }, " − ", 8, jh),
            M("input", {
              class: "stepper-value",
              part: "stepper-input",
              type: "number",
              inputmode: "numeric",
              value: l(x.id),
              min: "0",
              max: e.field.max,
              step: e.field.step,
              disabled: c(x.id) && l(x.id) === 0,
              "aria-label": x.label,
              onInput: (W) => y(x.id, W),
              onBlur: (W) => g(x.id, W),
              onKeydown: xr(Zn((W) => g(x.id, W), ["prevent"]), ["enter"])
            }, null, 40, Dh),
            M("button", {
              type: "button",
              part: "stepper-increment",
              "aria-label": N(r)("stepper.increase", { label: x.label }),
              disabled: !d(x.id),
              onClick: (W) => m(x.id, 1)
            }, " + ", 8, Lh)
          ])
        ], 10, Oh))), 128))
      ], 10, Eh),
      M("p", qh, z(N(r)("quantities.total", { count: o.value })), 1)
    ], 64));
  }
}), Uh = {
  key: 0,
  class: "slider-row"
}, Vh = ["value", "min", "max", "step", "aria-label"], Bh = {
  class: "slider-value",
  "aria-hidden": "true"
}, Zh = {
  key: 1,
  class: "stepper",
  part: "stepper"
}, Hh = ["aria-label", "disabled"], Wh = ["value", "min", "max", "step", "aria-label"], Kh = ["aria-label", "disabled"], Gh = ["value", "min", "max", "step", "aria-label", "aria-describedby", "aria-invalid"], Qh = /* @__PURE__ */ Te({
  __name: "NumberInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = Q(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue ?? 0
    ), { t: s } = lt(), a = Q(() => n.field.label ?? n.field.id);
    function o(l) {
      Number.isNaN(l) || (i("select", l), i("touch"));
    }
    return (l, c) => e.field.display === "slider" ? (b(), w("div", Uh, [
      M("input", {
        type: "range",
        class: "slider",
        part: "stepper-input",
        value: r.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": a.value,
        onInput: c[0] || (c[0] = (u) => o(Number(u.target.value)))
      }, null, 40, Vh),
      M("span", Bh, z(r.value), 1)
    ])) : e.field.display === "stepper" ? (b(), w("div", Zh, [
      M("button", {
        type: "button",
        part: "stepper-decrement",
        "aria-label": N(s)("stepper.decrease", { label: a.value.toLowerCase() }),
        disabled: e.field.min !== void 0 && r.value <= e.field.min,
        onClick: c[1] || (c[1] = (u) => o(r.value - (e.field.step ?? 1)))
      }, " − ", 8, Hh),
      M("input", {
        class: "stepper-value",
        part: "stepper-input",
        type: "number",
        value: r.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": a.value,
        onInput: c[2] || (c[2] = (u) => o(Number(u.target.value))),
        onBlur: c[3] || (c[3] = (u) => i("touch"))
      }, null, 40, Wh),
      M("button", {
        type: "button",
        part: "stepper-increment",
        "aria-label": N(s)("stepper.increase", { label: a.value.toLowerCase() }),
        disabled: e.field.max !== void 0 && r.value >= e.field.max,
        onClick: c[4] || (c[4] = (u) => o(r.value + (e.field.step ?? 1)))
      }, " + ", 8, Kh)
    ])) : (b(), w("input", {
      key: 2,
      class: "number-input",
      part: "stepper-input",
      type: "number",
      value: typeof e.value == "number" ? e.value : e.field.defaultValue,
      min: e.field.min,
      max: e.field.max,
      step: e.field.step,
      "aria-label": a.value,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: c[5] || (c[5] = (u) => o(Number(u.target.value))),
      onBlur: c[6] || (c[6] = (u) => i("touch"))
    }, null, 40, Gh));
  }
}), Yh = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], Jh = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], Xh = /* @__PURE__ */ Te({
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
    return (a, o) => e.field.display === "textarea" ? (b(), w("textarea", {
      key: 0,
      class: "text-input textarea",
      part: "text-input",
      value: typeof e.value == "string" ? e.value : N(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      rows: "3",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[0] || (o[0] = (l) => i("touch"))
    }, null, 40, Yh)) : (b(), w("input", {
      key: 1,
      class: "text-input",
      part: "text-input",
      type: "text",
      value: typeof e.value == "string" ? e.value : N(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[1] || (o[1] = (l) => i("touch"))
    }, null, 40, Jh));
  }
}), em = {
  class: "dimensions",
  part: "dimensions"
}, tm = { class: "dim-input" }, nm = { class: "dim-label" }, im = ["value", "aria-describedby", "aria-invalid"], rm = { class: "dim-input" }, sm = { class: "dim-label" }, am = ["value", "aria-describedby", "aria-invalid"], om = ["value", "aria-label"], lm = ["value"], cm = {
  key: 1,
  class: "dim-unit-static"
}, um = /* @__PURE__ */ Te({
  __name: "DimensionsInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = lt(), s = /* @__PURE__ */ Bt({
      w: it(n.value) ? n.value.w : NaN,
      h: it(n.value) ? n.value.h : NaN,
      unit: it(n.value) ? n.value.unit : n.field.defaultUnit
    });
    bt(
      () => n.value,
      (c) => {
        it(c) ? (s.w = c.w, s.h = c.h, s.unit = c.unit) : (c === void 0 || c === "") && (s.w = NaN, s.h = NaN);
      }
    );
    const a = s;
    function o(c) {
      Object.assign(s, c), i("touch"), s.w > 0 && s.h > 0 && i("select", { w: s.w, h: s.h, unit: s.unit });
    }
    function l(c) {
      return Number(c.target.value);
    }
    return (c, u) => (b(), w("div", em, [
      M("label", tm, [
        M("span", nm, z(N(r)("dimensions.width")), 1),
        M("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(N(a).w) ? "" : N(a).w,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[0] || (u[0] = (d) => o({ w: l(d) }))
        }, null, 40, im)
      ]),
      u[3] || (u[3] = M("span", {
        class: "dim-times",
        "aria-hidden": "true"
      }, "×", -1)),
      M("label", rm, [
        M("span", sm, z(N(r)("dimensions.height")), 1),
        M("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(N(a).h) ? "" : N(a).h,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[1] || (u[1] = (d) => o({ h: l(d) }))
        }, null, 40, am)
      ]),
      e.field.units.length > 1 ? (b(), w("select", {
        key: 0,
        class: "dropdown dim-unit",
        part: "dropdown",
        value: N(a).unit,
        "aria-label": N(r)("dimensions.unit"),
        onChange: u[2] || (u[2] = (d) => o({ unit: d.target.value }))
      }, [
        (b(!0), w(oe, null, Me(e.field.units, (d) => (b(), w("option", {
          key: d,
          value: d
        }, z(d), 9, lm))), 128))
      ], 40, om)) : (b(), w("span", cm, z(e.field.defaultUnit), 1))
    ]));
  }
});
function dm(e) {
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
  return hs.parse(s);
}
const fm = ["aria-busy"], pm = ["id", "accept", "aria-labelledby", "aria-describedby", "aria-invalid"], hm = ["for"], mm = {
  key: 0,
  class: "upload-status"
}, ym = { class: "upload-filename" }, gm = { class: "upload-hint" }, vm = { class: "upload-title" }, bm = { class: "upload-hint" }, _m = /* @__PURE__ */ Te({
  __name: "FileUpload",
  props: {
    field: { type: null },
    file: { type: null },
    analyzing: { type: Boolean },
    error: { type: String }
  },
  emits: ["file", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = lt(), s = /* @__PURE__ */ We(!1), a = Q(() => n.field.accept.join(","));
    function o(c) {
      var f;
      const d = (f = c.target.files) == null ? void 0 : f[0];
      d && i("file", n.field, d), i("touch");
    }
    function l(c) {
      var d, f;
      s.value = !1;
      const u = (f = (d = c.dataTransfer) == null ? void 0 : d.files) == null ? void 0 : f[0];
      u && i("file", n.field, u), i("touch");
    }
    return (c, u) => (b(), w("div", {
      class: Ke(["upload", { dragging: s.value, done: !!e.file }]),
      part: "upload",
      "aria-busy": e.analyzing || void 0,
      onDragover: u[0] || (u[0] = Zn((d) => s.value = !0, ["prevent"])),
      onDragleave: u[1] || (u[1] = (d) => s.value = !1),
      onDrop: Zn(l, ["prevent"])
    }, [
      M("input", {
        id: `pc-control-${e.field.id}`,
        class: "upload-input",
        part: "upload-input",
        type: "file",
        accept: a.value,
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0,
        onChange: o
      }, null, 40, pm),
      M("label", {
        class: "upload-zone",
        for: `pc-control-${e.field.id}`
      }, [
        e.analyzing ? (b(), w("span", mm, z(N(r)("upload.analyzing")), 1)) : e.file ? (b(), w(oe, { key: 1 }, [
          M("span", ym, z(e.file.fileName ?? e.file.fileId), 1),
          M("span", gm, z(N(r)("upload.replace")), 1)
        ], 64)) : (b(), w(oe, { key: 2 }, [
          M("span", vm, z(N(r)("upload.drop")), 1),
          M("span", bm, z(a.value), 1)
        ], 64))
      ], 8, hm)
    ], 42, fm));
  }
}), xm = "https://cdn.filecheck.io/element/v1/filecheck.js", wm = 1e4;
let $n = null;
function km(e = xm) {
  return typeof window < "u" && window.Filecheck ? Promise.resolve(window.Filecheck) : $n || ($n = new Promise((t, n) => {
    const i = (a) => {
      $n = null, r.remove(), n(new Error(a));
    }, r = document.createElement("script");
    r.src = e, r.async = !0;
    const s = setTimeout(
      () => i("Filecheck SDK load timed out."),
      wm
    );
    r.addEventListener("load", () => {
      clearTimeout(s), window.Filecheck ? t(window.Filecheck) : i("Filecheck SDK loaded but window.Filecheck is missing.");
    }), r.addEventListener("error", () => {
      clearTimeout(s), i("Filecheck SDK failed to load.");
    }), document.head.appendChild(r);
  }), $n);
}
const Sm = { mm: 1, cm: 10, in: 25.4 }, Cm = [
  "artworkSize",
  "pageCount",
  "fileCount",
  "bleed",
  "safety"
];
function Tm(e, t) {
  var r, s;
  const n = [];
  for (const a of e) {
    const o = t[a.id];
    if (!(o === void 0 || o === "")) {
      if (a.type === "dimensions" && it(o)) {
        const l = Sm[o.unit] ?? 1;
        n.push({
          artworkSize: {
            width_mm: Ca(o.w * l),
            height_mm: Ca(o.h * l)
          }
        });
        continue;
      }
      if (a.role === "pages") {
        const l = typeof o == "number" ? o : Number(o);
        Number.isFinite(l) && l > 0 && n.push({ pageCount: { min: l, max: l } });
      }
      if (ti(a)) {
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
    for (const o of Cm) {
      const l = a[o];
      l && (i[o] = { ...i[o] ?? {}, ...l });
    }
  return i;
}
function Ca(e) {
  return Math.round(e * 10) / 10;
}
const Am = {
  class: "fc-upload",
  part: "upload"
}, $m = {
  key: 0,
  class: "fc-panel fc-unconfigured"
}, Im = {
  key: 1,
  class: "fc-panel fc-error",
  role: "alert"
}, Nm = { class: "fc-panel-title" }, Em = { class: "fc-panel-hint" }, Om = {
  key: 0,
  class: "fc-loading"
}, Pm = {
  key: 1,
  class: "field-error",
  role: "status"
}, Mm = /* @__PURE__ */ Te({
  __name: "FilecheckUpload",
  props: {
    field: { type: null },
    provider: { type: null }
  },
  emits: ["metadata", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = lt(), s = /* @__PURE__ */ We(null), a = /* @__PURE__ */ We(
      n.provider.publishableKey ? "loading" : "unconfigured"
    ), o = /* @__PURE__ */ We("");
    let l = null, c = null;
    const u = Ut(Hi, null), d = Q(() => {
      var _;
      if (!u)
        return null;
      const g = ((_ = u.cfg.visibleFields) == null ? void 0 : _.value) ?? [];
      return Tm(g, u.cfg.selections);
    });
    bt(d, (g) => {
      var _;
      (_ = l == null ? void 0 : l.setContext) == null || _.call(l, g ?? null);
    });
    async function f() {
      var x, W, V;
      const g = n.provider.publishableKey, _ = (x = n.field.filecheck) == null ? void 0 : x.workflowId, E = (W = n.field.filecheck) != null && W.workflow ? /* @__PURE__ */ pe(n.field.filecheck.workflow) : void 0;
      if (!g || !_ && !E) {
        a.value = "unconfigured";
        return;
      }
      a.value = "loading", o.value = "";
      try {
        const F = await km(n.provider.scriptUrl);
        if (!s.value)
          return;
        l = F(g, {
          agentId: n.provider.agentId,
          iframeSrc: n.provider.iframeSrc
        }).elements.create("intake", {
          // An inline workflow wins: it is the blueprint author's exact
          // intent, and demo blueprints rely on it to run against any
          // tenant with nothing saved in the Filecheck admin.
          ...E ? { workflow: E } : { workflowId: _ },
          preview: n.provider.preview ?? !1
        }), c = l.on("status", (D) => {
          i("metadata", D), i("touch");
        }), l.on("error", (D) => {
          const ce = D;
          o.value = (ce == null ? void 0 : ce.message) ?? "Filecheck reported an error.";
        });
        const A = d.value;
        A && ((V = l.setContext) == null || V.call(l, A)), l.mount(s.value), a.value = "active";
      } catch (F) {
        a.value = "error", o.value = F instanceof Error ? F.message : "Filecheck failed to load.";
      }
    }
    function m() {
      c == null || c(), c = null;
      try {
        l == null || l.unmount();
      } catch {
      }
      l = null;
    }
    function y() {
      m(), f();
    }
    return Jr(() => {
      f();
    }), bt(
      () => {
        var g, _;
        return [
          n.provider.publishableKey,
          n.provider.scriptUrl,
          n.provider.iframeSrc,
          n.provider.agentId,
          (g = n.field.filecheck) == null ? void 0 : g.workflowId,
          (_ = n.field.filecheck) == null ? void 0 : _.workflow
        ];
      },
      () => {
        m(), f();
      }
    ), ao(m), (g, _) => (b(), w("div", Am, [
      a.value === "unconfigured" ? (b(), w("div", $m, [..._[0] || (_[0] = [
        M("span", { class: "fc-panel-title" }, "Filecheck upload", -1),
        M("span", { class: "fc-panel-hint" }, " Add your Filecheck publishable key in the store settings (or preview settings) to activate validated uploads for this field. ", -1)
      ])])) : a.value === "error" ? (b(), w("div", Im, [
        M("span", Nm, z(N(r)("upload.unavailable")), 1),
        M("span", Em, z(o.value), 1),
        M("button", {
          type: "button",
          class: "fc-retry",
          onClick: y
        }, z(N(r)("upload.retry")), 1)
      ])) : (b(), w(oe, { key: 2 }, [
        a.value === "loading" ? (b(), w("p", Om, z(N(r)("upload.secureLoading")), 1)) : ae("", !0),
        M("div", {
          ref_key: "slot",
          ref: s,
          class: "fc-slot"
        }, null, 512),
        o.value ? (b(), w("p", Pm, z(o.value), 1)) : ae("", !0)
      ], 64))
    ]));
  }
}), Rm = {
  key: 0,
  class: "artwork",
  part: "artwork"
}, Fm = { class: "artwork-body" }, jm = {
  class: "artwork-name",
  part: "artwork-name"
}, Dm = {
  key: 0,
  class: "artwork-meta",
  part: "artwork-meta"
}, Lm = { class: "artwork-actions" }, qm = {
  key: 1,
  class: "producers"
}, zm = {
  key: 0,
  class: "producer-or",
  "aria-hidden": "true"
}, Um = ["onClick"], Vm = { class: "producer-label" }, Bm = {
  key: 0,
  class: "producer-description"
}, Zm = {
  key: 1,
  class: "producer-or",
  "aria-hidden": "true"
}, Hm = {
  class: "producer-or",
  "aria-hidden": "true"
}, Wm = ["onClick"], Km = { class: "producer-label" }, Gm = {
  key: 0,
  class: "producer-description"
}, Qm = /* @__PURE__ */ Te({
  __name: "ArtworkField",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e) {
    const t = e, n = Ut(Hi);
    if (!n)
      throw new Error("ArtworkField must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r, producers: s } = n, { t: a } = lt(), o = Q(
      () => {
        var F, I, A;
        return t.field.providerId === "filecheck" && !!((F = t.field.filecheck) != null && F.workflowId || (I = t.field.filecheck) != null && I.workflow) && ((A = i.provider) == null ? void 0 : A.mode) === "element";
      }
    ), l = Q(() => {
      const F = i.schema.value;
      if (!F)
        return !1;
      for (const I of F.sections)
        for (const A of I.fields)
          if (A.type === "file")
            return A.id === t.field.id;
      return !1;
    }), c = Q(
      () => s.forField(t.field.id, l.value)
    ), u = Q(() => {
      const F = i.selections[t.field.id];
      return typeof F == "string" && F !== "";
    }), d = Q(() => {
      var I;
      const F = (I = i.file.value) == null ? void 0 : I.source;
      return F ? c.value.find((A) => A.id === F) ?? null : null;
    }), f = Q(() => u.value && !d.value), m = Q(() => t.field.display === "producer"), y = Q(
      () => m.value ? c.value : c.value.filter((F) => F.order < jr)
    ), g = Q(
      () => m.value ? [] : c.value.filter((F) => F.order >= jr)
    ), _ = Q(() => {
      const F = i.file.value;
      return F ? F.fileName ? F.fileName : d.value ? a("artwork.designName") : F.fileId : "";
    }), E = Q(() => {
      const F = i.file.value;
      if (!F)
        return "";
      const I = [], A = i.schema.value;
      return F.pages !== void 0 && A && yp(A) && I.push(
        F.pages === 1 ? a("artwork.pageCountOne") : a("artwork.pageCount", { count: F.pages })
      ), F.canvas && I.push(`${F.canvas.w} × ${F.canvas.h} ${F.canvas.unit}`), I.join(" · ");
    });
    function x(F) {
      i.setFile(dm(F)), F.canProceed && F.jobId ? i.select(t.field.id, F.jobId) : i.select(t.field.id, "");
    }
    function W(F) {
      s.activate(F, t.field.id), r.touch(t.field.id);
    }
    function V() {
      i.setFile(void 0), i.select(t.field.id, ""), r.touch(t.field.id);
    }
    return (F, I) => d.value ? (b(), w("div", Rm, [
      M("div", Fm, [
        M("span", jm, z(_.value), 1),
        E.value ? (b(), w("span", Dm, z(E.value), 1)) : ae("", !0)
      ]),
      M("div", Lm, [
        M("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-change",
          onClick: I[0] || (I[0] = (A) => W(d.value.id))
        }, z(N(a)("artwork.change")), 1),
        M("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-remove",
          onClick: V
        }, z(N(a)("artwork.remove")), 1)
      ])
    ])) : (b(), w("div", qm, [
      f.value ? ae("", !0) : (b(!0), w(oe, { key: 0 }, Me(y.value, (A, D) => (b(), w(oe, {
        key: A.id
      }, [
        m.value && D > 0 ? (b(), w("p", zm, [
          M("span", null, z(N(a)("artwork.or")), 1)
        ])) : ae("", !0),
        M("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (ce) => W(A.id)
        }, [
          M("span", Vm, z(A.label), 1),
          A.description ? (b(), w("span", Bm, z(A.description), 1)) : ae("", !0)
        ], 8, Um),
        m.value ? ae("", !0) : (b(), w("p", Zm, [
          M("span", null, z(N(a)("artwork.or")), 1)
        ]))
      ], 64))), 128)),
      !m.value && o.value && N(i).provider ? (b(), Oe(Mm, {
        key: 1,
        field: e.field,
        provider: N(i).provider,
        onMetadata: x,
        onTouch: I[1] || (I[1] = (A) => N(r).touch(e.field.id))
      }, null, 8, ["field", "provider"])) : m.value ? ae("", !0) : (b(), Oe(_m, {
        key: 2,
        field: e.field,
        file: N(i).file.value,
        analyzing: N(i).fileAnalyzing.value,
        error: e.error,
        onFile: I[2] || (I[2] = (A, D) => N(i).handleFile(A, D)),
        onTouch: I[3] || (I[3] = (A) => N(r).touch(e.field.id))
      }, null, 8, ["field", "file", "analyzing", "error"])),
      f.value ? ae("", !0) : (b(!0), w(oe, { key: 3 }, Me(g.value, (A) => (b(), w(oe, {
        key: A.id
      }, [
        M("p", Hm, [
          M("span", null, z(N(a)("artwork.or")), 1)
        ]),
        M("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (D) => W(A.id)
        }, [
          M("span", Km, z(A.label), 1),
          A.description ? (b(), w("span", Gm, z(A.description), 1)) : ae("", !0)
        ], 8, Wm)
      ], 64))), 128))
    ]));
  }
}), Ym = {
  key: 0,
  class: "recap",
  part: "summary-recap"
}, Jm = { part: "recap-label" }, Xm = { part: "recap-value" }, ey = {
  key: 1,
  class: "recap-empty"
}, ty = /* @__PURE__ */ Te({
  __name: "SummaryPanel",
  props: {
    sections: { type: Array },
    selections: { type: Object },
    file: { type: null }
  },
  setup(e) {
    const t = e, { t: n } = lt(), i = Q(
      () => cl(t.sections, t.selections, t.file, {
        quantityLabel: n("quantity.label")
      })
    );
    return (r, s) => i.value.length ? (b(), w("dl", Ym, [
      (b(!0), w(oe, null, Me(i.value, (a) => (b(), w("div", {
        key: a.fieldId,
        class: "recap-row",
        part: "recap-row"
      }, [
        M("dt", Jm, z(a.label), 1),
        M("dd", Xm, z(a.value), 1)
      ]))), 128))
    ])) : (b(), w("p", ey, z(N(n)("recap.empty")), 1));
  }
}), ny = {
  key: 0,
  class: "info-note",
  part: "field-help"
}, iy = /* @__PURE__ */ Te({
  __name: "InfoBlock",
  props: {
    field: { type: null }
  },
  setup(e) {
    return (t, n) => e.field.body ? (b(), w("p", ny, z(e.field.body), 1)) : ae("", !0);
  }
}), ml = /* @__PURE__ */ Te({
  __name: "FieldHost",
  props: {
    field: { type: null }
  },
  setup(e) {
    const t = e, n = Ut(Hi);
    if (!n)
      throw new Error("FieldHost must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r } = n, s = Q(() => i.selections[t.field.id]), a = Q(() => r.errorFor(t.field.id)), o = Q(() => {
      const u = s.value;
      return Array.isArray(u) ? u : typeof u == "string" && u !== "" ? [u] : [];
    }), l = Q(() => {
      if (!jt(t.field) || !i.schema.value)
        return [];
      const u = i.schema.value;
      return t.field.options.filter(
        (d) => !rp(u, i.selections, t.field.id, d.id)
      ).map((d) => d.id);
    });
    function c(u) {
      t.field.type === "select-many" ? i.toggle(t.field, u) : i.select(t.field.id, u), r.touch(t.field.id);
    }
    return (u, d) => (b(), Oe(_h, {
      field: e.field,
      error: a.value
    }, {
      default: eo(() => [
        e.field.type === "select-one" || e.field.type === "select-many" ? (b(), Oe(Cc(N(Sa)[e.field.display] ?? N(Sa).pills), {
          key: 0,
          field: e.field,
          "selected-ids": o.value,
          "unavailable-ids": l.value,
          error: a.value,
          onPick: c
        }, null, 40, ["field", "selected-ids", "unavailable-ids", "error"])) : e.field.type === "quantity" ? (b(), Oe(Nh, {
          key: 1,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[0] || (d[0] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[1] || (d[1] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "quantities" ? (b(), Oe(zh, {
          key: 2,
          field: e.field,
          value: s.value,
          "unavailable-ids": l.value,
          error: a.value,
          onSelect: d[2] || (d[2] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[3] || (d[3] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "unavailable-ids", "error"])) : e.field.type === "number" ? (b(), Oe(Qh, {
          key: 3,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[4] || (d[4] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[5] || (d[5] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "text" ? (b(), Oe(Xh, {
          key: 4,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[6] || (d[6] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[7] || (d[7] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "dimensions" ? (b(), Oe(um, {
          key: 5,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[8] || (d[8] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[9] || (d[9] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "file" ? (b(), Oe(Qm, {
          key: 6,
          field: e.field,
          error: a.value
        }, null, 8, ["field", "error"])) : e.field.type === "info" && e.field.display === "summary" ? (b(), Oe(ty, {
          key: 7,
          sections: N(i).visibleSections.value,
          selections: N(i).selections,
          file: N(i).file.value
        }, null, 8, ["sections", "selections", "file"])) : e.field.type === "info" ? (b(), Oe(iy, {
          key: 8,
          field: e.field
        }, null, 8, ["field"])) : ae("", !0)
      ]),
      _: 1
    }, 8, ["field", "error"]));
  }
}), ry = {
  class: "section-title",
  part: "section-title"
}, sy = /* @__PURE__ */ Te({
  __name: "SectionStack",
  props: {
    sections: { type: Array }
  },
  setup(e) {
    return (t, n) => (b(!0), w(oe, null, Me(e.sections, (i) => (b(), w("section", {
      key: i.section.id,
      class: "section",
      part: "section"
    }, [
      M("h3", ry, z(i.section.title), 1),
      (b(!0), w(oe, null, Me(i.fields, (r) => (b(), Oe(ml, {
        key: r.id,
        field: r
      }, null, 8, ["field"]))), 128))
    ]))), 128));
  }
}), ay = { class: "wizard" }, oy = {
  class: "wizard-nav",
  part: "wizard-nav"
}, ly = ["part", "aria-current"], cy = ["onClick"], uy = {
  class: "wizard-step-index",
  "aria-hidden": "true"
}, dy = { class: "wizard-step-title" }, fy = {
  key: 0,
  class: "section",
  part: "section"
}, py = { class: "wizard-actions" }, hy = /* @__PURE__ */ Te({
  __name: "SectionWizard",
  props: {
    sections: { type: Array },
    issues: { type: Array }
  },
  emits: ["blocked"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n, { t: s } = lt(), a = /* @__PURE__ */ We(0), o = /* @__PURE__ */ We(null);
    bt(
      () => i.sections.length,
      (g) => {
        a.value > g - 1 && (a.value = Math.max(0, g - 1));
      }
    );
    const l = Q(() => i.sections[a.value]), c = Q(() => a.value >= i.sections.length - 1);
    function u(g) {
      const _ = i.sections[g];
      if (!_)
        return [];
      const E = new Set(_.fields.map((x) => x.id));
      return i.issues.filter((x) => E.has(x.fieldId));
    }
    function d(g) {
      return g === a.value ? "active" : g < a.value && u(g).length === 0 ? "done" : "todo";
    }
    async function f(g) {
      var _;
      a.value = Math.max(0, Math.min(g, i.sections.length - 1)), await Li(), (_ = o.value) == null || _.focus();
    }
    function m() {
      const g = u(a.value);
      if (g.length > 0) {
        r("blocked", g);
        return;
      }
      f(a.value + 1);
    }
    function y() {
      f(a.value - 1);
    }
    return t({ goTo: f, current: a }), (g, _) => (b(), w("div", ay, [
      M("ol", oy, [
        (b(!0), w(oe, null, Me(e.sections, (E, x) => (b(), w("li", {
          key: E.section.id,
          class: Ke(["wizard-step", d(x)]),
          part: `wizard-step wizard-step-${d(x)}`,
          "aria-current": x === a.value ? "step" : void 0
        }, [
          M("button", {
            type: "button",
            class: "wizard-step-button",
            onClick: (W) => f(x)
          }, [
            M("span", uy, z(d(x) === "done" ? "✓" : x + 1), 1),
            M("span", dy, z(E.section.title), 1)
          ], 8, cy)
        ], 10, ly))), 128))
      ]),
      l.value ? (b(), w("section", fy, [
        M("h3", {
          ref_key: "heading",
          ref: o,
          class: "section-title",
          part: "section-title",
          tabindex: "-1"
        }, z(l.value.section.title), 513),
        (b(!0), w(oe, null, Me(l.value.fields, (E) => (b(), Oe(ml, {
          key: E.id,
          field: E
        }, null, 8, ["field"]))), 128))
      ])) : ae("", !0),
      M("div", py, [
        a.value > 0 ? (b(), w("button", {
          key: 0,
          type: "button",
          class: "wizard-back",
          part: "wizard-back",
          onClick: y
        }, z(N(s)("wizard.back")), 1)) : ae("", !0),
        c.value ? ae("", !0) : (b(), w("button", {
          key: 1,
          type: "button",
          class: "wizard-next",
          part: "wizard-next",
          onClick: m
        }, z(N(s)("wizard.continue")), 1))
      ])
    ]));
  }
}), my = {
  class: "summary",
  part: "summary"
}, yy = { part: "summary-title" }, gy = { class: "lines" }, vy = { part: "summary-line-label" }, by = { part: "summary-line-value" }, _y = {
  class: "subtotal",
  part: "summary-net"
}, xy = { part: "summary-net-label" }, wy = { part: "summary-net-value" }, ky = {
  class: "tax-line",
  part: "summary-tax"
}, Sy = { part: "summary-tax-label" }, Cy = { part: "summary-tax-value" }, Ty = {
  class: "total",
  part: "summary-total",
  "aria-live": "polite",
  "aria-atomic": "true"
}, Ay = { part: "summary-total-label" }, $y = { part: "price" }, Iy = {
  key: 1,
  class: "tax-included",
  part: "summary-tax-included"
}, Ny = {
  key: 2,
  class: "unit-price",
  part: "summary-unit"
}, Ey = {
  key: 3,
  class: "next-break",
  part: "summary-hint"
}, Oy = {
  key: 4,
  class: "price-note",
  part: "summary-note"
}, Py = {
  key: 5,
  class: "unavailable",
  role: "status"
}, My = ["disabled"], Ry = {
  class: "visually-hidden",
  role: "status"
}, Fy = /* @__PURE__ */ Te({
  __name: "PriceSummary",
  props: {
    price: { type: [Object, null] },
    locale: { type: String },
    priceFormat: { type: Object },
    priceNote: { type: String },
    tax: { type: Object },
    nextBreak: { type: Object },
    holds: { type: Array },
    issueCount: { type: Number }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = lt();
    function s(y) {
      var g;
      return Lp(
        y,
        ((g = n.price) == null ? void 0 : g.currency) ?? "USD",
        n.locale,
        n.priceFormat
      );
    }
    const a = Q(
      () => {
        var y;
        return (((y = n.price) == null ? void 0 : y.lines) ?? []).filter(
          (g) => !(g.amount === 0 && (g.stage === "base" || g.stage === "percent" || g.stage === "multiplier"))
        );
      }
    ), o = Q(() => {
      var g;
      const y = n.nextBreak;
      if (!(!y || (g = n.price) != null && g.unavailable))
        return y.percentOff !== void 0 ? r("summary.nextBreakPercent", {
          count: y.add,
          percent: wa(y.percentOff, n.locale)
        }) : r("summary.nextBreakPrice", { count: y.add, unitPrice: s(y.unitPrice) });
    }), l = Q(
      () => {
        var y, g;
        return (((y = n.price) == null ? void 0 : y.quantity) ?? 1) > 1 && !((g = n.price) != null && g.unavailable);
      }
    ), c = Q(() => {
      const y = n.price;
      if (!(!n.tax || !y || y.unavailable))
        return Up(y.total, y.currency, n.tax);
    }), u = Q(() => {
      var y, g;
      return {
        tax: ((y = n.tax) == null ? void 0 : y.name) ?? r("tax.name"),
        rate: wa(((g = n.tax) == null ? void 0 : g.rate) ?? 0, n.locale)
      };
    }), d = Q(() => {
      var y;
      return c.value !== void 0 && ((y = n.tax) == null ? void 0 : y.mode) === "exclusive";
    }), f = Q(
      () => {
        var y, g;
        return d.value ? ((y = c.value) == null ? void 0 : y.gross) ?? 0 : ((g = n.price) == null ? void 0 : g.total) ?? 0;
      }
    ), m = Q(() => {
      const y = n.price;
      return y ? d.value && y.quantity > 0 ? f.value / y.quantity : y.unitPrice : 0;
    });
    return (y, g) => {
      var _, E;
      return b(), w("aside", my, [
        M("h3", yy, z(N(r)("summary.title")), 1),
        M("ul", gy, [
          (b(!0), w(oe, null, Me(a.value, (x, W) => (b(), w("li", {
            key: W,
            part: "summary-line"
          }, [
            M("span", vy, z(N(Op)(N(r), x)), 1),
            M("span", by, z(s(x.amount)), 1)
          ]))), 128))
        ]),
        d.value && c.value ? (b(), w(oe, { key: 0 }, [
          M("div", _y, [
            M("span", xy, z(N(r)("summary.totalNet", u.value)), 1),
            M("span", wy, z(s(c.value.net)), 1)
          ]),
          M("div", ky, [
            M("span", Sy, z(N(r)("summary.tax", u.value)), 1),
            M("span", Cy, z(s(c.value.tax)), 1)
          ])
        ], 64)) : ae("", !0),
        M("div", Ty, [
          M("span", Ay, z(d.value ? N(r)("summary.totalGross", u.value) : N(r)("summary.total")), 1),
          M("strong", $y, z(s(f.value)), 1)
        ]),
        c.value && !d.value ? (b(), w("p", Iy, z(N(r)("summary.taxIncluded", { ...u.value, amount: s(c.value.tax) })), 1)) : ae("", !0),
        l.value ? (b(), w("p", Ny, z(N(r)("summary.unitPrice", {
          quantity: ((_ = e.price) == null ? void 0 : _.quantity) ?? 0,
          unitPrice: s(m.value)
        })), 1)) : ae("", !0),
        o.value ? (b(), w("p", Ey, z(o.value), 1)) : ae("", !0),
        e.priceNote ? (b(), w("p", Oy, z(e.priceNote), 1)) : ae("", !0),
        (E = e.price) != null && E.unavailable ? (b(), w("p", Py, z(N(r)(
          e.price.unavailableReason === "formula" ? "summary.unpriceable" : "summary.unavailable"
        )), 1)) : ae("", !0),
        (b(!0), w(oe, null, Me(e.holds.filter((x) => x.message), (x) => (b(), w("p", {
          key: x.key,
          class: "hold-message",
          part: "hold-message",
          role: "status"
        }, z(x.message), 1))), 128)),
        M("button", {
          type: "button",
          class: "cta",
          part: "cta",
          disabled: e.holds.length > 0,
          onClick: g[0] || (g[0] = (x) => i("submit"))
        }, z(N(r)("summary.addToCart")), 9, My),
        M("span", Ry, z(e.issueCount > 0 ? N(r)("summary.issues", { count: e.issueCount }) : ""), 1)
      ]);
    };
  }
}), jy = {
  key: 0,
  class: "state"
}, Dy = {
  key: 1,
  class: "state error",
  role: "alert"
}, Ly = {
  key: 2,
  class: "layout"
}, qy = { class: "main" }, zy = /* @__PURE__ */ Te({
  __name: "PrintConfigurator.ce",
  props: {
    productId: { type: String },
    configUrl: { type: String },
    uploadEndpoint: { type: String },
    turnstileUrl: { type: String },
    currency: { type: String },
    locale: { type: String },
    priceFormat: { type: [String, Object] },
    priceNote: { type: String },
    taxMode: { type: String },
    taxRate: { type: [String, Number] },
    taxName: { type: String },
    strings: { type: [String, Object] },
    provider: { type: null },
    config: { type: null }
  },
  emits: ["submit", "invalid", "unconfigured"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n;
    function s(A) {
      if (A)
        try {
          const D = typeof A == "string" ? JSON.parse(A) : A;
          return Vf.parse(D);
        } catch {
          return;
        }
    }
    const a = kp({
      configUrl: i.configUrl,
      uploadEndpoint: i.uploadEndpoint,
      turnstileUrl: i.turnstileUrl,
      provider: s(i.provider),
      inlineConfig: i.config
    }), o = Q(() => Mp(i.strings)), l = fl(() => o.value);
    hr(pl, l);
    const c = Q(() => Dp(i.priceFormat)), u = Q(() => zp(i.taxMode, i.taxRate, i.taxName)), d = Rp(
      a.visibleFields,
      a.selections,
      a.price,
      l.t
    ), f = ju(), m = Cp(), y = $p({ host: f });
    hr(Hi, { cfg: a, validation: d, producers: y });
    const g = Tp({ host: f, cfg: a, validation: d, holds: m, producers: y });
    Np(a, y);
    const _ = /* @__PURE__ */ We(null), E = /* @__PURE__ */ We(null);
    Jr(() => {
      (i.config || i.configUrl) && a.load().then(() => {
        a.unconfigured.value ? r("unconfigured", { productId: i.productId }) : a.schema.value && g.notifyReady();
      });
    }), bt(
      () => i.config,
      (A, D) => {
        A && A !== D && (d.reset(), a.reload({
          inlineConfig: A,
          provider: s(i.provider)
        }).then(() => {
          a.schema.value && g.notifyReady();
        }));
      }
    );
    const x = Q(() => {
      const A = {}, D = a.schema.value;
      if (!D)
        return A;
      for (const ce of D.sections)
        for (const fe of ce.fields)
          if (A[fe.id] = fe.label ?? fe.id, jt(fe))
            for (const O of fe.options)
              A[`${fe.id}:${O.id}`] = O.label;
      return A;
    });
    function W() {
      return !a.schema.value || !a.price.value ? null : {
        productId: a.schema.value.productId,
        selections: { ...a.selections },
        quantity: a.price.value.quantity,
        file: a.file.value,
        price: a.price.value,
        sku: a.price.value.sku,
        labels: x.value,
        display: cl(
          a.visibleSections.value,
          a.selections,
          a.file.value,
          {
            quantityLabel: l.t("quantity.label"),
            fileLinkLabel: l.t("upload.downloadLink")
          }
        )
      };
    }
    function V(A) {
      var ce, fe;
      const D = (ce = _.value) == null ? void 0 : ce.querySelector(`[data-field-id="${A}"]`);
      D && (D.scrollIntoView({ behavior: "smooth", block: "center" }), (fe = D.querySelector(
        "button, input, select, textarea, [tabindex]"
      )) == null || fe.focus({ preventScroll: !0 }));
    }
    function F() {
      var ce, fe, O;
      const A = W();
      if (!A)
        return;
      if (m.held.value) {
        r("invalid", {
          productId: A.productId,
          issues: [],
          holds: m.list.value
        });
        return;
      }
      const D = d.touchAll();
      if (D.length > 0 || (ce = a.price.value) != null && ce.unavailable) {
        const j = D[0];
        if (j) {
          const ye = a.visibleSections.value.findIndex(
            (qe) => qe.fields.some((Ne) => Ne.id === j.fieldId)
          );
          ((fe = a.schema.value) == null ? void 0 : fe.layout) === "wizard" && ye >= 0 && ((O = E.value) == null || O.goTo(ye)), V(j.fieldId);
        }
        r("invalid", {
          productId: A.productId,
          issues: D
        });
        return;
      }
      r("submit", { ...A, valid: !0 });
    }
    function I(A) {
      for (const ce of A)
        d.touch(ce.fieldId);
      const D = A[0];
      D && V(D.fieldId);
    }
    return t(g.exposed), (A, D) => N(a).unconfigured.value ? ae("", !0) : (b(), w("div", {
      key: 0,
      ref_key: "root",
      ref: _,
      class: "configurator",
      part: "base"
    }, [
      N(a).loading.value ? (b(), w("p", jy, z(N(l).t("state.loading")), 1)) : N(a).error.value ? (b(), w("p", Dy, z(N(a).error.value), 1)) : N(a).schema.value ? (b(), w("div", Ly, [
        M("div", qy, [
          N(a).schema.value.layout === "wizard" ? (b(), Oe(hy, {
            key: 0,
            ref_key: "wizard",
            ref: E,
            sections: N(a).visibleSections.value,
            issues: N(d).issues.value,
            onBlocked: I
          }, null, 8, ["sections", "issues"])) : (b(), Oe(sy, {
            key: 1,
            sections: N(a).visibleSections.value
          }, null, 8, ["sections"]))
        ]),
        Xe(Fy, {
          price: N(a).price.value,
          locale: i.locale,
          "price-format": c.value,
          "price-note": i.priceNote,
          tax: u.value,
          "next-break": N(a).nextBreak.value,
          holds: N(m).list.value,
          "issue-count": N(d).issues.value.length,
          onSubmit: F
        }, null, 8, ["price", "locale", "price-format", "price-note", "tax", "next-break", "holds", "issue-count"])
      ])) : ae("", !0)
    ], 512));
  }
}), Uy = ":host{--pc-color-accent: #1a1a1a;--pc-color-accent-contrast: #ffffff;--pc-color-accent-soft: #f6f6f4;--pc-color-surface: #ffffff;--pc-color-surface-alt: #fafafa;--pc-color-border: #e0e0dc;--pc-color-text: #1a1a1a;--pc-color-text-muted: #6b7280;--pc-color-danger: #c0392b;--pc-color-focus: var(--pc-color-accent);--pc-font-family: inherit;--pc-font-size: 1em;--pc-label-weight: 600;--pc-radius-control: 8px;--pc-radius-card: 12px;--pc-space: 4px;--pc-shadow-card: none;--pc-cta-bg: var(--pc-color-accent);--pc-cta-color: var(--pc-color-accent-contrast);--pc-swatch-size: 44px;--pc-card-image-height: 90px;display:block;container:pc-root / inline-size;font-family:var(--pc-font-family);font-size:var(--pc-font-size);color:var(--pc-color-text)}", Vy = '*{box-sizing:border-box}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.state{padding:calc(var(--pc-space) * 8);text-align:center;color:var(--pc-color-text-muted)}.state.error{color:var(--pc-color-danger)}.layout{display:grid;grid-template-columns:1fr 300px;gap:calc(var(--pc-space) * 6);align-items:start}.section{margin-bottom:calc(var(--pc-space) * 6);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);box-shadow:var(--pc-shadow-card)}.section-title{margin:0 0 calc(var(--pc-space) * 4);text-transform:uppercase;letter-spacing:.04em;font-size:.95em;color:var(--pc-color-text);outline:none}.field{margin-bottom:calc(var(--pc-space) * 5)}.field:last-child{margin-bottom:0}.field-label{display:block;font-weight:var(--pc-label-weight);margin-bottom:calc(var(--pc-space) * 2)}.req{color:var(--pc-color-danger)}.help{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.field-error{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--pc-color-focus);outline-offset:2px}.grid{display:grid;gap:calc(var(--pc-space) * 3);grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.grid.cards{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.card{position:relative;display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;transition:border-color .15s ease}.card:hover{border-color:var(--pc-color-accent-soft)}.card.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.card img{max-width:100%;height:var(--pc-card-image-height);object-fit:contain}.card-label{font-size:.9em}.card-description{font-size:.8em;color:var(--pc-color-text-muted)}.check{position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);display:grid;place-items:center;font-size:.8em}.swatches{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.swatch{width:var(--pc-swatch-size);height:var(--pc-swatch-size);border-radius:50%;border:3px solid transparent;cursor:pointer;display:grid;place-items:center}.swatch.active{border-color:var(--pc-color-accent);box-shadow:0 0 0 2px var(--pc-color-surface) inset}.swatch-check{color:#fff;text-shadow:0 0 3px rgb(0 0 0 / .8);font-size:.9em}.swatch-selected-label{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.pills{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.pill{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);cursor:pointer}.pill.active{background:var(--pc-color-accent);border-color:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.choice-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.choice-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);padding:calc(var(--pc-space) * 3);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;text-align:left;cursor:pointer}.choice-row.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.choice-indicator{flex:none;width:20px;height:20px;border:2px solid var(--pc-color-border);border-radius:50%;display:grid;place-items:center;font-size:.7em;color:var(--pc-color-accent-contrast)}.choice-indicator.multi{border-radius:4px}.choice-row.active .choice-indicator{background:var(--pc-color-accent);border-color:var(--pc-color-accent)}.choice-body{display:flex;flex-direction:column}.choice-title{font-weight:var(--pc-label-weight)}.choice-description{font-size:.85em;color:var(--pc-color-text-muted)}.card.unavailable,.pill.unavailable,.swatch.unavailable,.choice-row.unavailable{opacity:.4;cursor:not-allowed;text-decoration:line-through}.dropdown{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.quantities-grid{display:grid;gap:calc(var(--pc-space) * 2);grid-template-columns:repeat(auto-fill,minmax(118px,1fr))}.quantities-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.quantities-item{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 3) calc(var(--pc-space) * 2);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface)}.quantities-list .quantities-item{flex-direction:row;justify-content:space-between;padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3)}.quantities-item.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.quantities-item.off .quantities-label{text-decoration:line-through;color:var(--pc-color-text-muted)}.quantities-name{display:inline-flex;align-items:center;gap:calc(var(--pc-space) * 2);font-weight:var(--pc-label-weight)}.quantities-swatch{width:1.1em;height:1.1em;border-radius:50%;border:1px solid var(--pc-color-border)}.quantities-image{height:2em;width:auto;object-fit:contain}.quantities-item .stepper button{width:32px}.quantities-item .stepper-value{width:3em}.quantities-total{margin:calc(var(--pc-space) * 2) 0 0;text-align:right;font-size:.9em;color:var(--pc-color-text-muted)}.stepper{display:inline-flex;align-items:stretch;border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);overflow:hidden}.stepper button{width:40px;border:none;background:var(--pc-color-surface-alt);color:var(--pc-color-text);font-size:1.2em;cursor:pointer}.stepper button:disabled{opacity:.4;cursor:not-allowed}.stepper-value{width:4.5em;border:none;text-align:center;font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);background:var(--pc-color-surface);-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.stepper-value::-webkit-outer-spin-button,.stepper-value::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.number-input,.text-input{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.textarea{width:100%;resize:vertical}.slider-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3)}.slider{flex:1;accent-color:var(--pc-color-accent)}.slider-value{min-width:3em;text-align:right;font-weight:var(--pc-label-weight)}.dimensions{display:flex;align-items:flex-end;gap:calc(var(--pc-space) * 2);flex-wrap:wrap}.dim-input{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1)}.dim-label{font-size:.8em;color:var(--pc-color-text-muted)}.dim-input input{width:6em;padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);font:inherit;color:var(--pc-color-text);background:var(--pc-color-surface)}.dim-times{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.dim-unit{min-width:5em}.dim-unit-static{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.upload-input{position:absolute;width:1px;height:1px;opacity:0;overflow:hidden}.upload-zone{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 6);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);cursor:pointer;text-align:center}.upload.dragging .upload-zone{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.upload.done .upload-zone{border-style:solid;border-color:var(--pc-color-accent)}.upload-title{font-weight:var(--pc-label-weight)}.upload-hint{font-size:.8em;color:var(--pc-color-text-muted)}.upload-filename{font-weight:var(--pc-label-weight);color:var(--pc-color-accent);word-break:break-all}.upload-status{color:var(--pc-color-accent);font-weight:var(--pc-label-weight)}.producers{display:flex;flex-direction:column}.producer{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;text-align:center;transition:border-color .15s ease}.producer:hover{border-color:var(--pc-color-accent)}.producer-label{font-weight:var(--pc-label-weight)}.producer-description{font-size:.8em;color:var(--pc-color-text-muted)}.producer-or{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);margin:calc(var(--pc-space) * 3) 0;font-size:.8em;text-transform:uppercase;letter-spacing:.06em;color:var(--pc-color-text-muted)}.producer-or:before,.producer-or:after{content:"";flex:1;height:1px;background:var(--pc-color-border)}.artwork{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 4);flex-wrap:wrap;padding:calc(var(--pc-space) * 4) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-accent-soft)}.artwork-body{display:flex;flex-direction:column;min-width:0}.artwork-name{font-weight:var(--pc-label-weight);word-break:break-all}.artwork-meta{font-size:.85em;color:var(--pc-color-text-muted)}.artwork-actions{display:flex;gap:calc(var(--pc-space) * 2)}.artwork-action{padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-size:.9em;cursor:pointer}.artwork-action:hover{border-color:var(--pc-color-accent)}.fc-slot{min-height:40px}.fc-loading{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.fc-panel{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);text-align:center;align-items:center}.fc-panel.fc-error{border-color:var(--pc-color-danger)}.fc-panel-title{font-weight:var(--pc-label-weight)}.fc-panel-hint{font-size:.85em;color:var(--pc-color-text-muted)}.fc-retry{margin-top:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.recap{margin:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.recap-row{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 4);font-size:.9em}.recap-row dt{color:var(--pc-color-text-muted)}.recap-row dd{margin:0;text-align:right}.recap-empty,.info-note{margin:0;font-size:.9em;color:var(--pc-color-text-muted)}.summary{position:sticky;top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt)}.summary h3{margin:0 0 calc(var(--pc-space) * 4)}.lines{list-style:none;margin:0 0 calc(var(--pc-space) * 4);padding:0}.lines li{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0;color:var(--pc-color-text-muted)}.total{display:flex;justify-content:space-between;padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border);font-size:1.1em}.subtotal,.tax-line{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0}.subtotal{padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border)}.tax-line{margin-bottom:calc(var(--pc-space) * 2);color:var(--pc-color-text-muted)}.tax-included,.unit-price{margin:calc(var(--pc-space) * 1) 0 0;text-align:right;font-size:.85em;color:var(--pc-color-text-muted)}.next-break{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;font-weight:var(--pc-label-weight);color:var(--pc-color-accent)}.price-note{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.unavailable{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.hold-message{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.cta{width:100%;margin-top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 3.5);border:none;border-radius:var(--pc-radius-control);background:var(--pc-cta-bg);color:var(--pc-cta-color);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.cta:disabled{opacity:.5;cursor:not-allowed}.wizard-nav{list-style:none;display:flex;gap:calc(var(--pc-space) * 2);margin:0 0 calc(var(--pc-space) * 5);padding:0;flex-wrap:wrap}.wizard-step-button{display:flex;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:none;border-radius:var(--pc-radius-control);background:transparent;font:inherit;color:var(--pc-color-text-muted);cursor:pointer}.wizard-step.active .wizard-step-button{background:var(--pc-color-accent-soft);color:var(--pc-color-text);font-weight:var(--pc-label-weight)}.wizard-step-index{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--pc-color-border);color:var(--pc-color-text);font-size:.75em}.wizard-step.active .wizard-step-index,.wizard-step.done .wizard-step-index{background:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.wizard-actions{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 3)}.wizard-back,.wizard-next{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 6);border-radius:var(--pc-radius-control);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.wizard-back{border:2px solid var(--pc-color-border);background:var(--pc-color-surface);color:var(--pc-color-text)}.wizard-next{border:none;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);margin-left:auto}@container pc-root (max-width: 640px){.layout{grid-template-columns:1fr}.summary{position:static}}', By = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, Zy = /* @__PURE__ */ By(zy, [["styles", [Uy, Vy]]]), Hy = /* @__PURE__ */ Ru(Zy);
function Wy(e = "print-configurator") {
  typeof customElements < "u" && !customElements.get(e) && customElements.define(e, Hy);
}
Wy();
export {
  dl as DEFAULT_STRINGS,
  Fr as PAGE_API_VERSION,
  Hy as PrintConfiguratorElement,
  Wy as registerPrintConfigurator
};
