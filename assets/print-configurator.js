var xl = Object.defineProperty;
var _l = (e, t, n) => t in e ? xl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Wt = (e, t, n) => _l(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function zr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Se = {}, dn = [], vt = () => {
}, $a = () => !1, Pi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Mi = (e) => e.startsWith("onUpdate:"), Ae = Object.assign, qr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, wl = Object.prototype.hasOwnProperty, he = (e, t) => wl.call(e, t), te = Array.isArray, fn = (e) => Yn(e) === "[object Map]", Ia = (e) => Yn(e) === "[object Set]", Cs = (e) => Yn(e) === "[object Date]", ne = (e) => typeof e == "function", Te = (e) => typeof e == "string", st = (e) => typeof e == "symbol", be = (e) => e !== null && typeof e == "object", Na = (e) => (be(e) || ne(e)) && ne(e.then) && ne(e.catch), Ea = Object.prototype.toString, Yn = (e) => Ea.call(e), kl = (e) => Yn(e).slice(8, -1), Ri = (e) => Yn(e) === "[object Object]", Ur = (e) => Te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mn = /* @__PURE__ */ zr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Sl = /-\w/g, Pe = Fi(
  (e) => e.replace(Sl, (t) => t.slice(1).toUpperCase())
), Tl = /\B([A-Z])/g, Qe = Fi(
  (e) => e.replace(Tl, "-$1").toLowerCase()
), ji = Fi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qi = Fi(
  (e) => e ? `on${ji(e)}` : ""
), yt = (e, t) => !Object.is(e, t), Yi = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Oa = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Cl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, As = (e) => {
  const t = Te(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let $s;
const Di = () => $s || ($s = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Jn(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = Te(i) ? Nl(i) : Jn(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Te(e) || be(e))
    return e;
}
const Al = /;(?![^(]*\))/g, $l = /:([^]+)/, Il = /\/\*[^]*?\*\//g;
function Nl(e) {
  const t = {};
  return e.replace(Il, "").split(Al).forEach((n) => {
    if (n) {
      const i = n.split($l);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ke(e) {
  let t = "";
  if (Te(e))
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
const El = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ol = /* @__PURE__ */ zr(El);
function Pa(e) {
  return !!e || e === "";
}
function Pl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Vr(e[i], t[i]);
  return n;
}
function Vr(e, t) {
  if (e === t) return !0;
  let n = Cs(e), i = Cs(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = st(e), i = st(t), n || i)
    return e === t;
  if (n = te(e), i = te(t), n || i)
    return n && i ? Pl(e, t) : !1;
  if (n = be(e), i = be(t), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !Vr(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Ma = (e) => !!(e && e.__v_isRef === !0), q = (e) => Te(e) ? e : e == null ? "" : te(e) || be(e) && (e.toString === Ea || !ne(e.toString)) ? Ma(e) ? q(e.value) : JSON.stringify(e, Ra, 2) : String(e), Ra = (e, t) => Ma(t) ? Ra(e, t.value) : fn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[Ji(i, s) + " =>"] = r, n),
    {}
  )
} : Ia(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ji(n))
} : st(t) ? Ji(t) : be(t) && !te(t) && !Ri(t) ? String(t) : t, Ji = (e, t = "") => {
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
class Ml {
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
function Rl() {
  return Fe;
}
let ke;
const Xi = /* @__PURE__ */ new WeakSet();
class Fa {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fe && (Fe.active ? Fe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xi.has(this) && (Xi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Da(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Is(this), La(this);
    const t = ke, n = rt;
    ke = this, rt = !0;
    try {
      return this.fn();
    } finally {
      za(this), ke = t, rt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hr(t);
      this.deps = this.depsTail = void 0, Is(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    dr(this) && this.run();
  }
  get dirty() {
    return dr(this);
  }
}
let ja = 0, Rn, Fn;
function Da(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Fn, Fn = e;
    return;
  }
  e.next = Rn, Rn = e;
}
function Br() {
  ja++;
}
function Zr() {
  if (--ja > 0)
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
function La(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function za(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const r = i.prevDep;
    i.version === -1 ? (i === n && (n = r), Hr(i), Fl(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r;
  }
  e.deps = t, e.depsTail = n;
}
function dr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qa(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qa(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === zn) || (e.globalVersion = zn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !dr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ke, i = rt;
  ke = e, rt = !0;
  try {
    La(e);
    const r = e.fn(e._value);
    (t.version === 0 || yt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ke = n, rt = i, za(e), e.flags &= -3;
  }
}
function Hr(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: r } = e;
  if (i && (i.nextSub = r, e.prevSub = void 0), r && (r.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Hr(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Fl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let rt = !0;
const Ua = [];
function Nt() {
  Ua.push(rt), rt = !1;
}
function Et() {
  const e = Ua.pop();
  rt = e === void 0 ? !0 : e;
}
function Is(e) {
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
let zn = 0;
class jl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ke || !rt || ke === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ke)
      n = this.activeLink = new jl(ke, this), ke.deps ? (n.prevDep = ke.depsTail, ke.depsTail.nextDep = n, ke.depsTail = n) : ke.deps = ke.depsTail = n, Va(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ke.depsTail, n.nextDep = void 0, ke.depsTail.nextDep = n, ke.depsTail = n, ke.deps === n && (ke.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, zn++, this.notify(t);
  }
  notify(t) {
    Br();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Zr();
    }
  }
}
function Va(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Va(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const fr = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ Symbol(
  ""
), pr = /* @__PURE__ */ Symbol(
  ""
), qn = /* @__PURE__ */ Symbol(
  ""
);
function je(e, t, n) {
  if (rt && ke) {
    let i = fr.get(e);
    i || fr.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || (i.set(n, r = new Wr()), r.map = i, r.key = n), r.track();
  }
}
function Ct(e, t, n, i, r, s) {
  const a = fr.get(e);
  if (!a) {
    zn++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Br(), t === "clear")
    a.forEach(o);
  else {
    const l = te(e), c = l && Ur(n);
    if (l && n === "length") {
      const u = Number(i);
      a.forEach((d, f) => {
        (f === "length" || f === qn || !st(f) && f >= u) && o(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), c && o(a.get(qn)), t) {
        case "add":
          l ? c && o(a.get("length")) : (o(a.get(Xt)), fn(e) && o(a.get(pr)));
          break;
        case "delete":
          l || (o(a.get(Xt)), fn(e) && o(a.get(pr)));
          break;
        case "set":
          fn(e) && o(a.get(Xt));
          break;
      }
  }
  Zr();
}
function an(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (je(t, "iterate", qn), /* @__PURE__ */ Je(e) ? t : t.map(at));
}
function Li(e) {
  return je(e = /* @__PURE__ */ pe(e), "iterate", qn), e;
}
function mt(e, t) {
  return /* @__PURE__ */ Ot(e) ? yn(/* @__PURE__ */ en(e) ? at(t) : t) : at(t);
}
const Dl = {
  __proto__: null,
  [Symbol.iterator]() {
    return er(this, Symbol.iterator, (e) => mt(this, e));
  },
  concat(...e) {
    return an(this).concat(
      ...e.map((t) => te(t) ? an(t) : t)
    );
  },
  entries() {
    return er(this, "entries", (e) => (e[1] = mt(this, e[1]), e));
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
    return tr(this, "includes", e);
  },
  indexOf(...e) {
    return tr(this, "indexOf", e);
  },
  join(e) {
    return an(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return tr(this, "lastIndexOf", e);
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
    return Ns(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ns(this, "reduceRight", e, t);
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
    return er(this, "values", (e) => mt(this, e));
  }
};
function er(e, t, n) {
  const i = Li(e), r = i[t]();
  return i !== e && !/* @__PURE__ */ Je(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const Ll = Array.prototype;
function wt(e, t, n, i, r, s) {
  const a = Li(e), o = a !== e && !/* @__PURE__ */ Je(e), l = a[t];
  if (l !== Ll[t]) {
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
function Ns(e, t, n, i) {
  const r = Li(e), s = r !== e && !/* @__PURE__ */ Je(e);
  let a = n, o = !1;
  r !== e && (s ? (o = i.length === 0, a = function(c, u, d) {
    return o && (o = !1, c = mt(e, c)), n.call(this, c, mt(e, u), d, e);
  }) : n.length > 3 && (a = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const l = r[t](a, ...i);
  return o ? mt(e, l) : l;
}
function tr(e, t, n) {
  const i = /* @__PURE__ */ pe(e);
  je(i, "iterate", qn);
  const r = i[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Qr(n[0]) ? (n[0] = /* @__PURE__ */ pe(n[0]), i[t](...n)) : r;
}
function Sn(e, t, n = []) {
  Nt(), Br();
  const i = (/* @__PURE__ */ pe(e))[t].apply(e, n);
  return Zr(), Et(), i;
}
const zl = /* @__PURE__ */ zr("__proto__,__v_isRef,__isVue"), Ba = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(st)
);
function ql(e) {
  st(e) || (e = String(e));
  const t = /* @__PURE__ */ pe(this);
  return je(t, "has", e), t.hasOwnProperty(e);
}
class Za {
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
      return i === (r ? s ? Yl : Ga : s ? Ka : Wa).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const a = te(t);
    if (!r) {
      let l;
      if (a && (l = Dl[n]))
        return l;
      if (n === "hasOwnProperty")
        return ql;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Le(t) ? t : i
    );
    if ((st(n) ? Ba.has(n) : zl(n)) || (r || je(t, "get", n), s))
      return o;
    if (/* @__PURE__ */ Le(o)) {
      const l = a && Ur(n) ? o : o.value;
      return r && be(l) ? /* @__PURE__ */ mr(l) : l;
    }
    return be(o) ? r ? /* @__PURE__ */ mr(o) : /* @__PURE__ */ Bt(o) : o;
  }
}
class Ha extends Za {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    const a = te(t) && Ur(n);
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
    return t === /* @__PURE__ */ pe(r) && (o ? yt(i, s) && Ct(t, "set", n, i) : Ct(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = he(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && i && Ct(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!st(n) || !Ba.has(n)) && je(t, "has", n), i;
  }
  ownKeys(t) {
    return je(
      t,
      "iterate",
      te(t) ? "length" : Xt
    ), Reflect.ownKeys(t);
  }
}
class Ul extends Za {
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
const Vl = /* @__PURE__ */ new Ha(), Bl = /* @__PURE__ */ new Ul(), Zl = /* @__PURE__ */ new Ha(!0);
const hr = (e) => e, si = (e) => Reflect.getPrototypeOf(e);
function Hl(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = /* @__PURE__ */ pe(r), a = fn(s), o = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = r[e](...i), u = n ? hr : t ? yn : at;
    return !t && je(
      s,
      "iterate",
      l ? pr : Xt
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
function Wl(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ pe(s), o = /* @__PURE__ */ pe(r);
      e || (yt(r, o) && je(a, "get", r), je(a, "get", o));
      const { has: l } = si(a), c = t ? hr : e ? yn : at;
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
      return e || (yt(r, o) && je(a, "has", r), je(a, "has", o)), r === o ? s.has(r) : s.has(r) || s.has(o);
    },
    forEach(r, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ pe(o), c = t ? hr : e ? yn : at;
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
        return a.has.call(s, l) || yt(r, l) && a.has.call(s, r) || yt(o, l) && a.has.call(s, o) || (s.add(l), Ct(s, "add", l, l)), this;
      },
      set(r, s) {
        !t && !/* @__PURE__ */ Je(s) && !/* @__PURE__ */ Ot(s) && (s = /* @__PURE__ */ pe(s));
        const a = /* @__PURE__ */ pe(this), { has: o, get: l } = si(a);
        let c = o.call(a, r);
        c || (r = /* @__PURE__ */ pe(r), c = o.call(a, r));
        const u = l.call(a, r);
        return a.set(r, s), c ? yt(s, u) && Ct(a, "set", r, s) : Ct(a, "add", r, s), this;
      },
      delete(r) {
        const s = /* @__PURE__ */ pe(this), { has: a, get: o } = si(s);
        let l = a.call(s, r);
        l || (r = /* @__PURE__ */ pe(r), l = a.call(s, r)), o && o.call(s, r);
        const c = s.delete(r);
        return l && Ct(s, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ pe(this), s = r.size !== 0, a = r.clear();
        return s && Ct(
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
    n[r] = Hl(r, e, t);
  }), n;
}
function Kr(e, t) {
  const n = Wl(e, t);
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    he(n, r) && r in i ? n : i,
    r,
    s
  );
}
const Kl = {
  get: /* @__PURE__ */ Kr(!1, !1)
}, Gl = {
  get: /* @__PURE__ */ Kr(!1, !0)
}, Ql = {
  get: /* @__PURE__ */ Kr(!0, !1)
};
const Wa = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ new WeakMap(), Ga = /* @__PURE__ */ new WeakMap(), Yl = /* @__PURE__ */ new WeakMap();
function Jl(e) {
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
  return /* @__PURE__ */ Ot(e) ? e : Gr(
    e,
    !1,
    Vl,
    Kl,
    Wa
  );
}
// @__NO_SIDE_EFFECTS__
function Xl(e) {
  return Gr(
    e,
    !1,
    Zl,
    Gl,
    Ka
  );
}
// @__NO_SIDE_EFFECTS__
function mr(e) {
  return Gr(
    e,
    !0,
    Bl,
    Ql,
    Ga
  );
}
function Gr(e, t, n, i, r) {
  if (!be(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = Jl(kl(e));
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
function Qr(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ pe(t) : e;
}
function ec(e) {
  return !he(e, "__v_skip") && Object.isExtensible(e) && Oa(e, "__v_skip", !0), e;
}
const at = (e) => be(e) ? /* @__PURE__ */ Bt(e) : e, yn = (e) => be(e) ? /* @__PURE__ */ mr(e) : e;
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  return tc(e, !1);
}
function tc(e, t) {
  return /* @__PURE__ */ Le(e) ? e : new nc(e, t);
}
class nc {
  constructor(t, n) {
    this.dep = new Wr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ pe(t), this._value = n ? t : at(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ Ot(t);
    t = i ? t : /* @__PURE__ */ pe(t), yt(t, n) && (this._rawValue = t, this._value = i ? t : at(t), this.dep.trigger());
  }
}
function N(e) {
  return /* @__PURE__ */ Le(e) ? e.value : e;
}
const ic = {
  get: (e, t, n) => t === "__v_raw" ? e : N(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return /* @__PURE__ */ Le(r) && !/* @__PURE__ */ Le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Qa(e) {
  return /* @__PURE__ */ en(e) ? e : new Proxy(e, ic);
}
class rc {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Wr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = zn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ke !== this)
      return Da(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qa(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function sc(e, t, n = !1) {
  let i, r;
  return ne(e) ? i = e : (i = e.get, r = e.set), new rc(i, r, n);
}
const oi = {}, di = /* @__PURE__ */ new WeakMap();
let Qt;
function ac(e, t = !1, n = Qt) {
  if (n) {
    let i = di.get(n);
    i || di.set(n, i = []), i.push(e);
  }
}
function oc(e, t, n = Se) {
  const { immediate: i, deep: r, once: s, scheduler: a, augmentJob: o, call: l } = n, c = (V) => r ? V : /* @__PURE__ */ Je(V) || r === !1 || r === 0 ? zt(V, 1) : zt(V);
  let u, d, f, m, g = !1, y = !1;
  if (/* @__PURE__ */ Le(e) ? (d = () => e.value, g = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ en(e) ? (d = () => c(e), g = !0) : te(e) ? (y = !0, g = e.some((V) => /* @__PURE__ */ en(V) || /* @__PURE__ */ Je(V)), d = () => e.map((V) => {
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
    d = () => zt(V(), F);
  }
  const x = Rl(), E = () => {
    u.stop(), x && x.active && qr(x.effects, u);
  };
  if (s && t) {
    const V = t;
    t = (...F) => {
      V(...F), E();
    };
  }
  let _ = y ? new Array(e.length).fill(oi) : oi;
  const W = (V) => {
    if (!(!(u.flags & 1) || !u.dirty && !V))
      if (t) {
        const F = u.run();
        if (r || g || (y ? F.some((I, A) => yt(I, _[A])) : yt(F, _))) {
          f && f();
          const I = Qt;
          Qt = u;
          try {
            const A = [
              F,
              // pass undefined as the old value when it's changed for the first time
              _ === oi ? void 0 : y && _[0] === oi ? [] : _,
              m
            ];
            _ = F, l ? l(t, 3, A) : (
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
  return o && o(W), u = new Fa(d), u.scheduler = a ? () => a(W, !1) : W, m = (V) => ac(V, !1, u), f = u.onStop = () => {
    const V = di.get(u);
    if (V) {
      if (l)
        l(V, 4);
      else
        for (const F of V) F();
      di.delete(u);
    }
  }, t ? i ? W(!0) : _ = u.run() : a ? a(W.bind(null, !0), !0) : u.run(), E.pause = u.pause.bind(u), E.resume = u.resume.bind(u), E.stop = E, E;
}
function zt(e, t = 1 / 0, n) {
  if (t <= 0 || !be(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Le(e))
    zt(e.value, t, n);
  else if (te(e))
    for (let i = 0; i < e.length; i++)
      zt(e[i], t, n);
  else if (Ia(e) || fn(e))
    e.forEach((i) => {
      zt(i, t, n);
    });
  else if (Ri(e)) {
    for (const i in e)
      zt(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && zt(e[i], t, n);
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
    zi(r, t, n);
  }
}
function ot(e, t, n, i) {
  if (ne(e)) {
    const r = Xn(e, t, n, i);
    return r && Na(r) && r.catch((s) => {
      zi(s, t, n);
    }), r;
  }
  if (te(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(ot(e[s], t, n, i));
    return r;
  }
}
function zi(e, t, n, i = !0) {
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
  lc(e, n, r, i, a);
}
function lc(e, t, n, i = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Ve = [];
let ht = -1;
const pn = [];
let Dt = null, cn = 0;
const Ya = /* @__PURE__ */ Promise.resolve();
let fi = null;
function qi(e) {
  const t = fi || Ya;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cc(e) {
  let t = ht + 1, n = Ve.length;
  for (; t < n; ) {
    const i = t + n >>> 1, r = Ve[i], s = Un(r);
    s < e || s === e && r.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Yr(e) {
  if (!(e.flags & 1)) {
    const t = Un(e), n = Ve[Ve.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Un(n) ? Ve.push(e) : Ve.splice(cc(t), 0, e), e.flags |= 1, Ja();
  }
}
function Ja() {
  fi || (fi = Ya.then(eo));
}
function uc(e) {
  te(e) ? pn.push(...e) : Dt && e.id === -1 ? Dt.splice(cn + 1, 0, e) : e.flags & 1 || (pn.push(e), e.flags |= 1), Ja();
}
function Es(e, t, n = ht + 1) {
  for (; n < Ve.length; n++) {
    const i = Ve[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Ve.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Xa(e) {
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
function eo(e) {
  try {
    for (ht = 0; ht < Ve.length; ht++) {
      const t = Ve[ht];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Xn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ht < Ve.length; ht++) {
      const t = Ve[ht];
      t && (t.flags &= -2);
    }
    ht = -1, Ve.length = 0, Xa(), fi = null, (Ve.length || pn.length) && eo();
  }
}
let Ze = null, to = null;
function pi(e) {
  const t = Ze;
  return Ze = e, to = e && e.type.__scopeId || null, t;
}
function no(e, t = Ze, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && Vs(-1);
    const s = pi(t);
    let a;
    try {
      a = e(...r);
    } finally {
      pi(s), i._d && Vs(1);
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
function gr(e, t) {
  if (De) {
    let n = De.provides;
    const i = De.parent && De.parent.provides;
    i === n && (n = De.provides = Object.create(i)), n[e] = t;
  }
}
function Ut(e, t, n = !1) {
  const i = Oo();
  if (i || mn) {
    let r = mn ? mn._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(i && i.proxy) : t;
  }
}
const dc = /* @__PURE__ */ Symbol.for("v-scx"), fc = () => Ut(dc);
function bt(e, t, n) {
  return io(e, t, n);
}
function io(e, t, n = Se) {
  const { immediate: i, deep: r, flush: s, once: a } = n, o = Ae({}, n), l = t && i || !t && s !== "post";
  let c;
  if (Bn) {
    if (s === "sync") {
      const m = fc();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = vt, m.resume = vt, m.pause = vt, m;
    }
  }
  const u = De;
  o.call = (m, g, y) => ot(m, u, g, y);
  let d = !1;
  s === "post" ? o.scheduler = (m) => {
    We(m, u && u.suspense);
  } : s !== "sync" && (d = !0, o.scheduler = (m, g) => {
    g ? m() : Yr(m);
  }), o.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const f = oc(e, t, o);
  return Bn && (c ? c.push(f) : l && f()), f;
}
function pc(e, t, n) {
  const i = this.proxy, r = Te(e) ? e.includes(".") ? ro(i, e) : () => i[e] : e.bind(i, i);
  let s;
  ne(t) ? s = t : (s = t.handler, n = t);
  const a = ei(this), o = io(r, s.bind(i), n);
  return a(), o;
}
function ro(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
const hc = /* @__PURE__ */ Symbol("_vte"), mc = (e) => e.__isTeleport, nr = /* @__PURE__ */ Symbol("_leaveCb");
function Jr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Jr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function so(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Os(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const hi = /* @__PURE__ */ new WeakMap();
function jn(e, t, n, i, r = !1) {
  if (te(e)) {
    e.forEach(
      (y, x) => jn(
        y,
        t && (te(t) ? t[x] : t),
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
  const s = i.shapeFlag & 4 ? ss(i.component) : i.el, a = r ? null : s, { i: o, r: l } = e, c = t && t.r, u = o.refs === Se ? o.refs = {} : o.refs, d = o.setupState, f = /* @__PURE__ */ pe(d), m = d === Se ? $a : (y) => Os(u, y) ? !1 : he(f, y), g = (y, x) => !(x && Os(u, x));
  if (c != null && c !== l) {
    if (Ps(t), Te(c))
      u[c] = null, m(c) && (d[c] = null);
    else if (/* @__PURE__ */ Le(c)) {
      const y = t;
      g(c, y.k) && (c.value = null), y.k && (u[y.k] = null);
    }
  }
  if (ne(l))
    Xn(l, o, 12, [a, u]);
  else {
    const y = Te(l), x = /* @__PURE__ */ Le(l);
    if (y || x) {
      const E = () => {
        if (e.f) {
          const _ = y ? m(l) ? d[l] : u[l] : g() || !e.k ? l.value : u[e.k];
          if (r)
            te(_) && qr(_, s);
          else if (te(_))
            _.includes(s) || _.push(s);
          else if (y)
            u[l] = [s], m(l) && (d[l] = u[l]);
          else {
            const W = [s];
            g(l, e.k) && (l.value = W), e.k && (u[e.k] = W);
          }
        } else y ? (u[l] = a, m(l) && (d[l] = a)) : x && (g(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const _ = () => {
          E(), hi.delete(e);
        };
        _.id = -1, hi.set(e, _), We(_, n);
      } else
        Ps(e), E();
    }
  }
}
function Ps(e) {
  const t = hi.get(e);
  t && (t.flags |= 8, hi.delete(e));
}
Di().requestIdleCallback;
Di().cancelIdleCallback;
const hn = (e) => !!e.type.__asyncLoader, ao = (e) => e.type.__isKeepAlive;
function gc(e, t) {
  oo(e, "a", t);
}
function yc(e, t) {
  oo(e, "da", t);
}
function oo(e, t, n = De) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Ui(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ao(r.parent.vnode) && vc(i, t, n, r), r = r.parent;
  }
}
function vc(e, t, n, i) {
  const r = Ui(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  co(() => {
    qr(i[t], r);
  }, n);
}
function Ui(e, t, n = De, i = !1) {
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
  (!Bn || e === "sp") && Ui(e, (...i) => t(...i), n);
}, bc = Rt("bm"), Xr = Rt("m"), xc = Rt(
  "bu"
), _c = Rt("u"), lo = Rt(
  "bum"
), co = Rt("um"), wc = Rt(
  "sp"
), kc = Rt("rtg"), Sc = Rt("rtc");
function Tc(e, t = De) {
  Ui("ec", e, t);
}
const Cc = "components", uo = /* @__PURE__ */ Symbol.for("v-ndc");
function Ac(e) {
  return Te(e) ? $c(Cc, e, !1) || e : e || uo;
}
function $c(e, t, n = !0, i = !1) {
  const r = Ze || De;
  if (r) {
    const s = r.type;
    {
      const o = pu(
        s,
        !1
      );
      if (o && (o === t || o === Pe(t) || o === ji(Pe(t))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ms(r[e] || s[e], t) || // global registration
      Ms(r.appContext[e], t)
    );
    return !a && i ? s : a;
  }
}
function Ms(e, t) {
  return e && (e[t] || e[Pe(t)] || e[ji(Pe(t))]);
}
function Me(e, t, n, i) {
  let r;
  const s = n, a = te(e);
  if (a || Te(e)) {
    const o = a && /* @__PURE__ */ en(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ Je(e), c = /* @__PURE__ */ Ot(e), e = Li(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        l ? c ? yn(at(e[u])) : at(e[u]) : e[u],
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
function Ic(e, t, n = {}, i, r) {
  if (Ze.ce || Ze.parent && hn(Ze.parent) && Ze.parent.ce) {
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
  const a = s && fo(s(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
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
function fo(e) {
  return e.some((t) => ns(t) ? !(t.type === Pt || t.type === oe && !fo(t.children)) : !0) ? e : null;
}
const yr = (e) => e ? Po(e) ? ss(e) : yr(e.parent) : null, Dn = (
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
    $parent: (e) => yr(e.parent),
    $root: (e) => yr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ho(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Yr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qi.bind(e.proxy)),
    $watch: (e) => pc.bind(e)
  })
), ir = (e, t) => e !== Se && !e.__isScriptSetup && he(e, t), Nc = {
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
        if (ir(i, t))
          return a[t] = 1, i[t];
        if (r !== Se && he(r, t))
          return a[t] = 2, r[t];
        if (he(s, t))
          return a[t] = 3, s[t];
        if (n !== Se && he(n, t))
          return a[t] = 4, n[t];
        vr && (a[t] = 0);
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
    return ir(r, t) ? (r[t] = n, !0) : i !== Se && he(i, t) ? (i[t] = n, !0) : he(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, props: s, type: a }
  }, o) {
    let l;
    return !!(n[o] || e !== Se && o[0] !== "$" && he(e, o) || ir(t, o) || he(s, o) || he(i, o) || he(Dn, o) || he(r.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : he(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Rs(e) {
  return te(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let vr = !0;
function Ec(e) {
  const t = ho(e), n = e.proxy, i = e.ctx;
  vr = !1, t.beforeCreate && Fs(t.beforeCreate, e, "bc");
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
    updated: g,
    activated: y,
    deactivated: x,
    beforeDestroy: E,
    beforeUnmount: _,
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
    filters: ge
  } = t;
  if (c && Oc(c, i, null), a)
    for (const we in a) {
      const ye = a[we];
      ne(ye) && (i[we] = ye.bind(n));
    }
  if (r) {
    const we = r.call(n, n);
    be(we) && (e.data = /* @__PURE__ */ Bt(we));
  }
  if (vr = !0, s)
    for (const we in s) {
      const ye = s[we], Zt = ne(ye) ? ye.bind(n, n) : ne(ye.get) ? ye.get.bind(n, n) : vt, ii = !ne(ye) && ne(ye.set) ? ye.set.bind(n) : vt, Ht = G({
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
      po(o[we], i, n, we);
  if (l) {
    const we = ne(l) ? l.call(n) : l;
    Reflect.ownKeys(we).forEach((ye) => {
      gr(ye, we[ye]);
    });
  }
  u && Fs(u, e, "c");
  function Ne(we, ye) {
    te(ye) ? ye.forEach((Zt) => we(Zt.bind(n))) : ye && we(ye.bind(n));
  }
  if (Ne(bc, d), Ne(Xr, f), Ne(xc, m), Ne(_c, g), Ne(gc, y), Ne(yc, x), Ne(Tc, D), Ne(Sc, I), Ne(kc, A), Ne(lo, _), Ne(co, V), Ne(wc, ce), te(fe))
    if (fe.length) {
      const we = e.exposed || (e.exposed = {});
      fe.forEach((ye) => {
        Object.defineProperty(we, ye, {
          get: () => n[ye],
          set: (Zt) => n[ye] = Zt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === vt && (e.render = F), O != null && (e.inheritAttrs = O), j && (e.components = j), re && (e.directives = re), ce && so(e);
}
function Oc(e, t, n = vt) {
  te(e) && (e = br(e));
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
function Fs(e, t, n) {
  ot(
    te(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function po(e, t, n, i) {
  let r = i.includes(".") ? ro(n, i) : () => n[i];
  if (Te(e)) {
    const s = t[e];
    ne(s) && bt(r, s);
  } else if (ne(e))
    bt(r, e.bind(n));
  else if (be(e))
    if (te(e))
      e.forEach((s) => po(s, t, n, i));
    else {
      const s = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(s) && bt(r, s, e);
    }
}
function ho(e) {
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
      const o = Pc[a] || n && n[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const Pc = {
  data: js,
  props: Ds,
  emits: Ds,
  // objects
  methods: In,
  computed: In,
  // lifecycle
  beforeCreate: qe,
  created: qe,
  beforeMount: qe,
  mounted: qe,
  beforeUpdate: qe,
  updated: qe,
  beforeDestroy: qe,
  beforeUnmount: qe,
  destroyed: qe,
  unmounted: qe,
  activated: qe,
  deactivated: qe,
  errorCaptured: qe,
  serverPrefetch: qe,
  // assets
  components: In,
  directives: In,
  // watch
  watch: Rc,
  // provide / inject
  provide: js,
  inject: Mc
};
function js(e, t) {
  return t ? e ? function() {
    return Ae(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Mc(e, t) {
  return In(br(e), br(t));
}
function br(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function qe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function In(e, t) {
  return e ? Ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ds(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ae(
    /* @__PURE__ */ Object.create(null),
    Rs(e),
    Rs(t ?? {})
  ) : t;
}
function Rc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ae(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = qe(e[i], t[i]);
  return n;
}
function mo() {
  return {
    app: null,
    config: {
      isNativeTag: $a,
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
let Fc = 0;
function jc(e, t) {
  return function(i, r = null) {
    ne(i) || (i = Ae({}, i)), r != null && !be(r) && (r = null);
    const s = mo(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = s.app = {
      _uid: Fc++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: mu,
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
          return m.appContext = s, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, u, f), l = !0, c._container = u, u.__vue_app__ = c, ss(m.component);
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
const Dc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pe(t)}Modifiers`] || e[`${Qe(t)}Modifiers`];
function Lc(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Se;
  let r = n;
  const s = t.startsWith("update:"), a = s && Dc(i, t.slice(7));
  a && (a.trim && (r = n.map((u) => Te(u) ? u.trim() : u)), a.number && (r = n.map(Cl)));
  let o, l = i[o = Qi(t)] || // also try camelCase event handler (#2249)
  i[o = Qi(Pe(t))];
  !l && s && (l = i[o = Qi(Qe(t))]), l && ot(
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
const zc = /* @__PURE__ */ new WeakMap();
function go(e, t, n = !1) {
  const i = n ? zc : t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let a = {}, o = !1;
  if (!ne(e)) {
    const l = (c) => {
      const u = go(c, t, !0);
      u && (o = !0, Ae(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !o ? (be(e) && i.set(e, null), null) : (te(s) ? s.forEach((l) => a[l] = null) : Ae(a, s), be(e) && i.set(e, a), a);
}
function Vi(e, t) {
  return !e || !Pi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), he(e, t[0].toLowerCase() + t.slice(1)) || he(e, Qe(t)) || he(e, t));
}
function Ls(e) {
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
    ctx: g,
    inheritAttrs: y
  } = e, x = pi(e);
  let E, _;
  try {
    if (n.shapeFlag & 4) {
      const V = r || i, F = V;
      E = gt(
        c.call(
          F,
          V,
          u,
          d,
          m,
          f,
          g
        )
      ), _ = o;
    } else {
      const V = t;
      E = gt(
        V.length > 1 ? V(
          d,
          { attrs: o, slots: a, emit: l }
        ) : V(
          d,
          null
        )
      ), _ = t.props ? o : qc(o);
    }
  } catch (V) {
    Ln.length = 0, zi(V, e, 1), E = Xe(Pt);
  }
  let W = E;
  if (_ && y !== !1) {
    const V = Object.keys(_), { shapeFlag: F } = W;
    V.length && F & 7 && (s && V.some(Mi) && (_ = Uc(
      _,
      s
    )), W = vn(W, _, !1, !0));
  }
  return n.dirs && (W = vn(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && Jr(W, n.transition), E = W, pi(x), E;
}
const qc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Pi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Uc = (e, t) => {
  const n = {};
  for (const i in e)
    (!Mi(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Vc(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: a, children: o, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? zs(i, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (yo(a, i, f) && !Vi(c, f))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : i === a ? !1 : i ? a ? zs(i, a, c) : !0 : !!a;
  return !1;
}
function zs(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (yo(t, e, s) && !Vi(n, s))
      return !0;
  }
  return !1;
}
function yo(e, t, n) {
  const i = e[n], r = t[n];
  return n === "style" && be(i) && be(r) ? !Vr(i, r) : i !== r;
}
function Bc({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = i, e = r), r === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const vo = {}, bo = () => Object.create(vo), xo = (e) => Object.getPrototypeOf(e) === vo;
function Zc(e, t, n, i = !1) {
  const r = {}, s = bo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), _o(e, t, r, s);
  for (const a in e.propsOptions[0])
    a in r || (r[a] = void 0);
  n ? e.props = i ? r : /* @__PURE__ */ Xl(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Hc(e, t, n, i) {
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
        if (Vi(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (he(s, f))
            m !== s[f] && (s[f] = m, c = !0);
          else {
            const g = Pe(f);
            r[g] = xr(
              l,
              o,
              g,
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
    _o(e, t, r, s) && (c = !0);
    let u;
    for (const d in o)
      (!t || // for camelCase
      !he(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Qe(d)) === d || !he(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = xr(
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
  c && Ct(e.attrs, "set", "");
}
function _o(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let a = !1, o;
  if (t)
    for (let l in t) {
      if (Mn(l))
        continue;
      const c = t[l];
      let u;
      r && he(r, u = Pe(l)) ? !s || !s.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : Vi(e.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ pe(n), c = o || Se;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = xr(
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
function xr(e, t, n, i, r, s) {
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
const Wc = /* @__PURE__ */ new WeakMap();
function wo(e, t, n = !1) {
  const i = n ? Wc : t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, a = {}, o = [];
  let l = !1;
  if (!ne(e)) {
    const u = (d) => {
      l = !0;
      const [f, m] = wo(d, t, !0);
      Ae(a, f), m && o.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return be(e) && i.set(e, dn), dn;
  if (te(s))
    for (let u = 0; u < s.length; u++) {
      const d = Pe(s[u]);
      qs(d) && (a[d] = Se);
    }
  else if (s)
    for (const u in s) {
      const d = Pe(u);
      if (qs(d)) {
        const f = s[u], m = a[d] = te(f) || ne(f) ? { type: f } : Ae({}, f), g = m.type;
        let y = !1, x = !0;
        if (te(g))
          for (let E = 0; E < g.length; ++E) {
            const _ = g[E], W = ne(_) && _.name;
            if (W === "Boolean") {
              y = !0;
              break;
            } else W === "String" && (x = !1);
          }
        else
          y = ne(g) && g.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = y, m[
          1
          /* shouldCastTrue */
        ] = x, (y || he(m, "default")) && o.push(d);
      }
    }
  const c = [a, o];
  return be(e) && i.set(e, c), c;
}
function qs(e) {
  return e[0] !== "$" && !Mn(e);
}
const es = (e) => e === "_" || e === "_ctx" || e === "$stable", ts = (e) => te(e) ? e.map(gt) : [gt(e)], Kc = (e, t, n) => {
  if (t._n)
    return t;
  const i = no((...r) => ts(t(...r)), n);
  return i._c = !1, i;
}, ko = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if (es(r)) continue;
    const s = e[r];
    if (ne(s))
      t[r] = Kc(r, s, i);
    else if (s != null) {
      const a = ts(s);
      t[r] = () => a;
    }
  }
}, So = (e, t) => {
  const n = ts(t);
  e.slots.default = () => n;
}, To = (e, t, n) => {
  for (const i in t)
    (n || !es(i)) && (e[i] = t[i]);
}, Gc = (e, t, n) => {
  const i = e.slots = bo();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (To(i, t, n), n && Oa(i, "_", r, !0)) : ko(t, i);
  } else t && So(e, t);
}, Qc = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, a = Se;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? s = !1 : To(r, t, n) : (s = !t.$stable, ko(t, r)), a = t;
  } else t && (So(e, t), a = { default: 1 });
  if (s)
    for (const o in r)
      !es(o) && a[o] == null && delete r[o];
}, We = tu;
function Yc(e) {
  return Jc(e);
}
function Jc(e, t) {
  const n = Di();
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
    insertStaticContent: g
  } = e, y = (p, h, v, C = null, S = null, k = null, L = void 0, R = null, P = !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !Tn(p, h) && (C = ri(p), ct(p, S, k, !0), p = null), h.patchFlag === -2 && (P = !1, h.dynamicChildren = null);
    const { type: T, ref: Y, shapeFlag: U } = h;
    switch (T) {
      case Bi:
        x(p, h, v, C);
        break;
      case Pt:
        E(p, h, v, C);
        break;
      case sr:
        p == null && _(h, v, C, L);
        break;
      case oe:
        j(
          p,
          h,
          v,
          C,
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
          C,
          S,
          k,
          L,
          R,
          P
        ) : U & 6 ? re(
          p,
          h,
          v,
          C,
          S,
          k,
          L,
          R,
          P
        ) : (U & 64 || U & 128) && T.process(
          p,
          h,
          v,
          C,
          S,
          k,
          L,
          R,
          P,
          wn
        );
    }
    Y != null && S ? jn(Y, p && p.ref, k, h || p, !h) : Y == null && p && p.ref != null && jn(p.ref, null, k, p, !0);
  }, x = (p, h, v, C) => {
    if (p == null)
      i(
        h.el = o(h.children),
        v,
        C
      );
    else {
      const S = h.el = p.el;
      h.children !== p.children && c(S, h.children);
    }
  }, E = (p, h, v, C) => {
    p == null ? i(
      h.el = l(h.children || ""),
      v,
      C
    ) : h.el = p.el;
  }, _ = (p, h, v, C) => {
    [p.el, p.anchor] = g(
      p.children,
      h,
      v,
      C,
      p.el,
      p.anchor
    );
  }, W = ({ el: p, anchor: h }, v, C) => {
    let S;
    for (; p && p !== h; )
      S = f(p), i(p, v, C), p = S;
    i(h, v, C);
  }, V = ({ el: p, anchor: h }) => {
    let v;
    for (; p && p !== h; )
      v = f(p), r(p), p = v;
    r(h);
  }, F = (p, h, v, C, S, k, L, R, P) => {
    if (h.type === "svg" ? L = "svg" : h.type === "math" && (L = "mathml"), p == null)
      I(
        h,
        v,
        C,
        S,
        k,
        L,
        R,
        P
      );
    else {
      const T = p.el && p.el._isVueCE ? p.el : null;
      try {
        T && T._beginPatch(), ce(
          p,
          h,
          S,
          k,
          L,
          R,
          P
        );
      } finally {
        T && T._endPatch();
      }
    }
  }, I = (p, h, v, C, S, k, L, R) => {
    let P, T;
    const { props: Y, shapeFlag: U, transition: Q, dirs: ee } = p;
    if (P = p.el = a(
      p.type,
      k,
      Y && Y.is,
      Y
    ), U & 8 ? u(P, p.children) : U & 16 && D(
      p.children,
      P,
      null,
      C,
      S,
      rr(p, k),
      L,
      R
    ), ee && Kt(p, null, C, "created"), A(P, p, p.scopeId, L, C), Y) {
      for (const _e in Y)
        _e !== "value" && !Mn(_e) && s(P, _e, null, Y[_e], k, C);
      "value" in Y && s(P, "value", null, Y.value, k), (T = Y.onVnodeBeforeMount) && pt(T, C, p);
    }
    ee && Kt(p, null, C, "beforeMount");
    const ue = Xc(S, Q);
    ue && Q.beforeEnter(P), i(P, h, v), ((T = Y && Y.onVnodeMounted) || ue || ee) && We(() => {
      try {
        T && pt(T, C, p), ue && Q.enter(P), ee && Kt(p, null, C, "mounted");
      } finally {
      }
    }, S);
  }, A = (p, h, v, C, S) => {
    if (v && m(p, v), C)
      for (let k = 0; k < C.length; k++)
        m(p, C[k]);
    if (S) {
      let k = S.subTree;
      if (h === k || Io(k.type) && (k.ssContent === h || k.ssFallback === h)) {
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
  }, D = (p, h, v, C, S, k, L, R, P = 0) => {
    for (let T = P; T < p.length; T++) {
      const Y = p[T] = R ? Tt(p[T]) : gt(p[T]);
      y(
        null,
        Y,
        h,
        v,
        C,
        S,
        k,
        L,
        R
      );
    }
  }, ce = (p, h, v, C, S, k, L) => {
    const R = h.el = p.el;
    let { patchFlag: P, dynamicChildren: T, dirs: Y } = h;
    P |= p.patchFlag & 16;
    const U = p.props || Se, Q = h.props || Se;
    let ee;
    if (v && Gt(v, !1), (ee = Q.onVnodeBeforeUpdate) && pt(ee, v, h, p), Y && Kt(h, p, v, "beforeUpdate"), v && Gt(v, !0), (U.innerHTML && Q.innerHTML == null || U.textContent && Q.textContent == null) && u(R, ""), T ? fe(
      p.dynamicChildren,
      T,
      R,
      v,
      C,
      rr(h, S),
      k
    ) : L || ye(
      p,
      h,
      R,
      null,
      v,
      C,
      rr(h, S),
      k,
      !1
    ), P > 0) {
      if (P & 16)
        O(R, U, Q, v, S);
      else if (P & 2 && U.class !== Q.class && s(R, "class", null, Q.class, S), P & 4 && s(R, "style", U.style, Q.style, S), P & 8) {
        const ue = h.dynamicProps;
        for (let _e = 0; _e < ue.length; _e++) {
          const ve = ue[_e], $e = U[ve], Re = Q[ve];
          (Re !== $e || ve === "value") && s(R, ve, $e, Re, S, v);
        }
      }
      P & 1 && p.children !== h.children && u(R, h.children);
    } else !L && T == null && O(R, U, Q, v, S);
    ((ee = Q.onVnodeUpdated) || Y) && We(() => {
      ee && pt(ee, v, h, p), Y && Kt(h, p, v, "updated");
    }, C);
  }, fe = (p, h, v, C, S, k, L) => {
    for (let R = 0; R < h.length; R++) {
      const P = p[R], T = h[R], Y = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tn(P, T) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? d(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      y(
        P,
        T,
        Y,
        null,
        C,
        S,
        k,
        L,
        !0
      );
    }
  }, O = (p, h, v, C, S) => {
    if (h !== v) {
      if (h !== Se)
        for (const k in h)
          !Mn(k) && !(k in v) && s(
            p,
            k,
            h[k],
            null,
            S,
            C
          );
      for (const k in v) {
        if (Mn(k)) continue;
        const L = v[k], R = h[k];
        L !== R && k !== "value" && s(p, k, R, L, S, C);
      }
      "value" in v && s(p, "value", h.value, v.value, S);
    }
  }, j = (p, h, v, C, S, k, L, R, P) => {
    const T = h.el = p ? p.el : o(""), Y = h.anchor = p ? p.anchor : o("");
    let { patchFlag: U, dynamicChildren: Q, slotScopeIds: ee } = h;
    ee && (R = R ? R.concat(ee) : ee), p == null ? (i(T, v, C), i(Y, v, C), D(
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
    )) : U > 0 && U & 64 && Q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === Q.length ? (fe(
      p.dynamicChildren,
      Q,
      v,
      S,
      k,
      L,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || S && h === S.subTree) && Co(
      p,
      h,
      !0
      /* shallow */
    )) : ye(
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
  }, re = (p, h, v, C, S, k, L, R, P) => {
    h.slotScopeIds = R, p == null ? h.shapeFlag & 512 ? S.ctx.activate(
      h,
      v,
      C,
      L,
      P
    ) : ge(
      h,
      v,
      C,
      S,
      k,
      L,
      P
    ) : ze(p, h, P);
  }, ge = (p, h, v, C, S, k, L) => {
    const R = p.component = lu(
      p,
      C,
      S
    );
    if (ao(p) && (R.ctx.renderer = wn), cu(R, !1, L), R.asyncDep) {
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
  }, ze = (p, h, v) => {
    const C = h.component = p.component;
    if (Vc(p, h, v))
      if (C.asyncDep && !C.asyncResolved) {
        we(C, h, v);
        return;
      } else
        C.next = h, C.update();
    else
      h.el = p.el, C.vnode = h;
  }, Ne = (p, h, v, C, S, k, L) => {
    const R = () => {
      if (p.isMounted) {
        let { next: U, bu: Q, u: ee, parent: ue, vnode: _e } = p;
        {
          const dt = Ao(p);
          if (dt) {
            U && (U.el = _e.el, we(p, U, L)), dt.asyncDep.then(() => {
              We(() => {
                p.isUnmounted || T();
              }, S);
            });
            return;
          }
        }
        let ve = U, $e;
        Gt(p, !1), U ? (U.el = _e.el, we(p, U, L)) : U = _e, Q && Yi(Q), ($e = U.props && U.props.onVnodeBeforeUpdate) && pt($e, ue, U, _e), Gt(p, !0);
        const Re = Ls(p), ut = p.subTree;
        p.subTree = Re, y(
          ut,
          Re,
          // parent may have changed if it's in a teleport
          d(ut.el),
          // anchor may have changed if it's in a fragment
          ri(ut),
          p,
          S,
          k
        ), U.el = Re.el, ve === null && Bc(p, Re.el), ee && We(ee, S), ($e = U.props && U.props.onVnodeUpdated) && We(
          () => pt($e, ue, U, _e),
          S
        );
      } else {
        let U;
        const { el: Q, props: ee } = h, { bm: ue, m: _e, parent: ve, root: $e, type: Re } = p, ut = hn(h);
        Gt(p, !1), ue && Yi(ue), !ut && (U = ee && ee.onVnodeBeforeMount) && pt(U, ve, h), Gt(p, !0);
        {
          $e.ce && $e.ce._hasShadowRoot() && $e.ce._injectChildStyle(
            Re,
            p.parent ? p.parent.type : void 0
          );
          const dt = p.subTree = Ls(p);
          y(
            null,
            dt,
            v,
            C,
            p,
            S,
            k
          ), h.el = dt.el;
        }
        if (_e && We(_e, S), !ut && (U = ee && ee.onVnodeMounted)) {
          const dt = h;
          We(
            () => pt(U, ve, dt),
            S
          );
        }
        (h.shapeFlag & 256 || ve && hn(ve.vnode) && ve.vnode.shapeFlag & 256) && p.a && We(p.a, S), p.isMounted = !0, h = v = C = null;
      }
    };
    p.scope.on();
    const P = p.effect = new Fa(R);
    p.scope.off();
    const T = p.update = P.run.bind(P), Y = p.job = P.runIfDirty.bind(P);
    Y.i = p, Y.id = p.uid, P.scheduler = () => Yr(Y), Gt(p, !0), T();
  }, we = (p, h, v) => {
    h.component = p;
    const C = p.vnode.props;
    p.vnode = h, p.next = null, Hc(p, h.props, C, v), Qc(p, h.children, v), Nt(), Es(p), Et();
  }, ye = (p, h, v, C, S, k, L, R, P = !1) => {
    const T = p && p.children, Y = p ? p.shapeFlag : 0, U = h.children, { patchFlag: Q, shapeFlag: ee } = h;
    if (Q > 0) {
      if (Q & 128) {
        ii(
          T,
          U,
          v,
          C,
          S,
          k,
          L,
          R,
          P
        );
        return;
      } else if (Q & 256) {
        Zt(
          T,
          U,
          v,
          C,
          S,
          k,
          L,
          R,
          P
        );
        return;
      }
    }
    ee & 8 ? (Y & 16 && _n(T, S, k), U !== T && u(v, U)) : Y & 16 ? ee & 16 ? ii(
      T,
      U,
      v,
      C,
      S,
      k,
      L,
      R,
      P
    ) : _n(T, S, k, !0) : (Y & 8 && u(v, ""), ee & 16 && D(
      U,
      v,
      C,
      S,
      k,
      L,
      R,
      P
    ));
  }, Zt = (p, h, v, C, S, k, L, R, P) => {
    p = p || dn, h = h || dn;
    const T = p.length, Y = h.length, U = Math.min(T, Y);
    let Q;
    for (Q = 0; Q < U; Q++) {
      const ee = h[Q] = P ? Tt(h[Q]) : gt(h[Q]);
      y(
        p[Q],
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
    T > Y ? _n(
      p,
      S,
      k,
      !0,
      !1,
      U
    ) : D(
      h,
      v,
      C,
      S,
      k,
      L,
      R,
      P,
      U
    );
  }, ii = (p, h, v, C, S, k, L, R, P) => {
    let T = 0;
    const Y = h.length;
    let U = p.length - 1, Q = Y - 1;
    for (; T <= U && T <= Q; ) {
      const ee = p[T], ue = h[T] = P ? Tt(h[T]) : gt(h[T]);
      if (Tn(ee, ue))
        y(
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
      T++;
    }
    for (; T <= U && T <= Q; ) {
      const ee = p[U], ue = h[Q] = P ? Tt(h[Q]) : gt(h[Q]);
      if (Tn(ee, ue))
        y(
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
      U--, Q--;
    }
    if (T > U) {
      if (T <= Q) {
        const ee = Q + 1, ue = ee < Y ? h[ee].el : C;
        for (; T <= Q; )
          y(
            null,
            h[T] = P ? Tt(h[T]) : gt(h[T]),
            v,
            ue,
            S,
            k,
            L,
            R,
            P
          ), T++;
      }
    } else if (T > Q)
      for (; T <= U; )
        ct(p[T], S, k, !0), T++;
    else {
      const ee = T, ue = T, _e = /* @__PURE__ */ new Map();
      for (T = ue; T <= Q; T++) {
        const Ge = h[T] = P ? Tt(h[T]) : gt(h[T]);
        Ge.key != null && _e.set(Ge.key, T);
      }
      let ve, $e = 0;
      const Re = Q - ue + 1;
      let ut = !1, dt = 0;
      const kn = new Array(Re);
      for (T = 0; T < Re; T++) kn[T] = 0;
      for (T = ee; T <= U; T++) {
        const Ge = p[T];
        if ($e >= Re) {
          ct(Ge, S, k, !0);
          continue;
        }
        let ft;
        if (Ge.key != null)
          ft = _e.get(Ge.key);
        else
          for (ve = ue; ve <= Q; ve++)
            if (kn[ve - ue] === 0 && Tn(Ge, h[ve])) {
              ft = ve;
              break;
            }
        ft === void 0 ? ct(Ge, S, k, !0) : (kn[ft - ue] = T + 1, ft >= dt ? dt = ft : ut = !0, y(
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
      const ks = ut ? eu(kn) : dn;
      for (ve = ks.length - 1, T = Re - 1; T >= 0; T--) {
        const Ge = ue + T, ft = h[Ge], Ss = h[Ge + 1], Ts = Ge + 1 < Y ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ss.el || $o(Ss)
        ) : C;
        kn[T] === 0 ? y(
          null,
          ft,
          v,
          Ts,
          S,
          k,
          L,
          R,
          P
        ) : ut && (ve < 0 || T !== ks[ve] ? Ht(ft, v, Ts, 2) : ve--);
      }
    }
  }, Ht = (p, h, v, C, S = null) => {
    const { el: k, type: L, transition: R, children: P, shapeFlag: T } = p;
    if (T & 6) {
      Ht(p.component.subTree, h, v, C);
      return;
    }
    if (T & 128) {
      p.suspense.move(h, v, C);
      return;
    }
    if (T & 64) {
      L.move(p, h, v, wn);
      return;
    }
    if (L === oe) {
      i(k, h, v);
      for (let U = 0; U < P.length; U++)
        Ht(P[U], h, v, C);
      i(p.anchor, h, v);
      return;
    }
    if (L === sr) {
      W(p, h, v);
      return;
    }
    if (C !== 2 && T & 1 && R)
      if (C === 0)
        R.persisted && !k[nr] ? i(k, h, v) : (R.beforeEnter(k), i(k, h, v), We(() => R.enter(k), S));
      else {
        const { leave: U, delayLeave: Q, afterLeave: ee } = R, ue = () => {
          p.ctx.isUnmounted ? r(k) : i(k, h, v);
        }, _e = () => {
          const ve = k._isLeaving || !!k[nr];
          k._isLeaving && k[nr](
            !0
            /* cancelled */
          ), R.persisted && !ve ? ue() : U(k, () => {
            ue(), ee && ee();
          });
        };
        Q ? Q(k, ue, _e) : _e();
      }
    else
      i(k, h, v);
  }, ct = (p, h, v, C = !1, S = !1) => {
    const {
      type: k,
      props: L,
      ref: R,
      children: P,
      dynamicChildren: T,
      shapeFlag: Y,
      patchFlag: U,
      dirs: Q,
      cacheIndex: ee,
      memo: ue
    } = p;
    if (U === -2 && (S = !1), R != null && (Nt(), jn(R, null, v, p, !0), Et()), ee != null && (h.renderCache[ee] = void 0), Y & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const _e = Y & 1 && Q, ve = !hn(p);
    let $e;
    if (ve && ($e = L && L.onVnodeBeforeUnmount) && pt($e, h, p), Y & 6)
      bl(p.component, v, C);
    else {
      if (Y & 128) {
        p.suspense.unmount(v, C);
        return;
      }
      _e && Kt(p, null, h, "beforeUnmount"), Y & 64 ? p.type.remove(
        p,
        h,
        v,
        wn,
        C
      ) : T && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !T.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== oe || U > 0 && U & 64) ? _n(
        T,
        h,
        v,
        !1,
        !0
      ) : (k === oe && U & 384 || !S && Y & 16) && _n(P, h, v), C && _s(p);
    }
    const Re = ue != null && ee == null;
    (ve && ($e = L && L.onVnodeUnmounted) || _e || Re) && We(() => {
      $e && pt($e, h, p), _e && Kt(p, null, h, "unmounted"), Re && (p.el = null);
    }, v);
  }, _s = (p) => {
    const { type: h, el: v, anchor: C, transition: S } = p;
    if (h === oe) {
      vl(v, C);
      return;
    }
    if (h === sr) {
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
  }, vl = (p, h) => {
    let v;
    for (; p !== h; )
      v = f(p), r(p), p = v;
    r(h);
  }, bl = (p, h, v) => {
    const { bum: C, scope: S, job: k, subTree: L, um: R, m: P, a: T } = p;
    Us(P), Us(T), C && Yi(C), S.stop(), k && (k.flags |= 8, ct(L, p, h, v)), R && We(R, h), We(() => {
      p.isUnmounted = !0;
    }, h);
  }, _n = (p, h, v, C = !1, S = !1, k = 0) => {
    for (let L = k; L < p.length; L++)
      ct(p[L], h, v, C, S);
  }, ri = (p) => {
    if (p.shapeFlag & 6)
      return ri(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const h = f(p.anchor || p.el), v = h && h[hc];
    return v ? f(v) : h;
  };
  let Gi = !1;
  const ws = (p, h, v) => {
    let C;
    p == null ? h._vnode && (ct(h._vnode, null, null, !0), C = h._vnode.component) : y(
      h._vnode || null,
      p,
      h,
      null,
      null,
      null,
      v
    ), h._vnode = p, Gi || (Gi = !0, Es(C), Xa(), Gi = !1);
  }, wn = {
    p: y,
    um: ct,
    m: Ht,
    r: _s,
    mt: ge,
    mc: D,
    pc: ye,
    pbc: fe,
    n: ri,
    o: e
  };
  return {
    render: ws,
    hydrate: void 0,
    createApp: jc(ws)
  };
}
function rr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Gt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Co(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (te(i) && te(r))
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      let o = r[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[s] = Tt(r[s]), o.el = a.el), !n && o.patchFlag !== -2 && Co(a, o)), o.type === Bi && (o.patchFlag === -1 && (o = r[s] = Tt(o)), o.el = a.el), o.type === Pt && !o.el && (o.el = a.el);
    }
}
function eu(e) {
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
function Ao(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ao(t);
}
function Us(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function $o(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? $o(t.subTree) : null;
}
const Io = (e) => e.__isSuspense;
function tu(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : uc(e);
}
const oe = /* @__PURE__ */ Symbol.for("v-fgt"), Bi = /* @__PURE__ */ Symbol.for("v-txt"), Pt = /* @__PURE__ */ Symbol.for("v-cmt"), sr = /* @__PURE__ */ Symbol.for("v-stc"), Ln = [];
let Ye = null;
function b(e = !1) {
  Ln.push(Ye = e ? null : []);
}
function nu() {
  Ln.pop(), Ye = Ln[Ln.length - 1] || null;
}
let Vn = 1;
function Vs(e, t = !1) {
  Vn += e, e < 0 && Ye && t && (Ye.hasOnce = !0);
}
function No(e) {
  return e.dynamicChildren = Vn > 0 ? Ye || dn : null, nu(), Vn > 0 && Ye && Ye.push(e), e;
}
function w(e, t, n, i, r, s) {
  return No(
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
  return No(
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
function ns(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Eo = ({ key: e }) => e ?? null, ci = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Te(e) || /* @__PURE__ */ Le(e) || ne(e) ? { i: Ze, r: e, k: t, f: !!n } : e : null);
function M(e, t = null, n = null, i = 0, r = null, s = e === oe ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Eo(t),
    ref: t && ci(t),
    scopeId: to,
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
    ctx: Ze
  };
  return o ? (rs(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Te(n) ? 8 : 16), Vn > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ye.push(l), l;
}
const Xe = iu;
function iu(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === uo) && (e = Pt), ns(e)) {
    const o = vn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && rs(o, n), Vn > 0 && !s && Ye && (o.shapeFlag & 6 ? Ye[Ye.indexOf(e)] = o : Ye.push(o)), o.patchFlag = -2, o;
  }
  if (hu(e) && (e = e.__vccOpts), t) {
    t = ru(t);
    let { class: o, style: l } = t;
    o && !Te(o) && (t.class = Ke(o)), be(l) && (/* @__PURE__ */ Qr(l) && !te(l) && (l = Ae({}, l)), t.style = Jn(l));
  }
  const a = Te(e) ? 1 : Io(e) ? 128 : mc(e) ? 64 : be(e) ? 4 : ne(e) ? 2 : 0;
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
function ru(e) {
  return e ? /* @__PURE__ */ Qr(e) || xo(e) ? Ae({}, e) : e : null;
}
function vn(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: a, children: o, transition: l } = e, c = t ? su(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Eo(c),
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
  return l && i && Jr(
    u,
    l.clone(u)
  ), u;
}
function is(e = " ", t = 0) {
  return Xe(Bi, null, e, t);
}
function ae(e = "", t = !1) {
  return t ? (b(), Oe(Pt, null, e)) : Xe(Pt, null, e);
}
function gt(e) {
  return e == null || typeof e == "boolean" ? Xe(Pt) : te(e) ? Xe(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ns(e) ? Tt(e) : Xe(Bi, null, String(e));
}
function Tt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : vn(e);
}
function rs(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (te(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), rs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !xo(t) ? t._ctx = Ze : r === 3 && Ze && (Ze.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: Ze }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [is(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function su(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = Ke([t.class, i.class]));
      else if (r === "style")
        t.style = Jn([t.style, i.style]);
      else if (Pi(r)) {
        const s = t[r], a = i[r];
        a && s !== a && !(te(s) && s.includes(a)) ? t[r] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Mi(r) && (t[r] = a);
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
const au = mo();
let ou = 0;
function lu(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || au, s = {
    uid: ou++,
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
    scope: new Ml(
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
    propsOptions: wo(i, r),
    emitsOptions: go(i, r),
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Lc.bind(null, s), e.ce && e.ce(s), s;
}
let De = null;
const Oo = () => De || Ze;
let gi, _r;
{
  const e = Di(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((a) => a(s)) : r[0](s);
    };
  };
  gi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => De = n
  ), _r = t(
    "__VUE_SSR_SETTERS__",
    (n) => Bn = n
  );
}
const ei = (e) => {
  const t = De;
  return gi(e), e.scope.on(), () => {
    e.scope.off(), gi(t);
  };
}, Bs = () => {
  De && De.scope.off(), gi(null);
};
function Po(e) {
  return e.vnode.shapeFlag & 4;
}
let Bn = !1;
function cu(e, t = !1, n = !1) {
  t && _r(t);
  const { props: i, children: r } = e.vnode, s = Po(e);
  Zc(e, i, s, t), Gc(e, r, n || t);
  const a = s ? uu(e, t) : void 0;
  return t && _r(!1), a;
}
function uu(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Nc);
  const { setup: i } = n;
  if (i) {
    Nt();
    const r = e.setupContext = i.length > 1 ? fu(e) : null, s = ei(e), a = Xn(
      i,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = Na(a);
    if (Et(), s(), (o || e.sp) && !hn(e) && so(e), o) {
      if (a.then(Bs, Bs), t)
        return a.then((l) => {
          Zs(e, l);
        }).catch((l) => {
          zi(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Zs(e, a);
  } else
    Mo(e);
}
function Zs(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : be(t) && (e.setupState = Qa(t)), Mo(e);
}
function Mo(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || vt);
  {
    const r = ei(e);
    Nt();
    try {
      Ec(e);
    } finally {
      Et(), r();
    }
  }
}
const du = {
  get(e, t) {
    return je(e, "get", ""), e[t];
  }
};
function fu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, du),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ss(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Qa(ec(e.exposed)), {
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
function pu(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function hu(e) {
  return ne(e) && "__vccOpts" in e;
}
const G = (e, t) => /* @__PURE__ */ sc(e, t, Bn), mu = "3.5.35";
/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let wr;
const Hs = typeof window < "u" && window.trustedTypes;
if (Hs)
  try {
    wr = /* @__PURE__ */ Hs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ro = wr ? (e) => wr.createHTML(e) : (e) => e, gu = "http://www.w3.org/2000/svg", yu = "http://www.w3.org/1998/Math/MathML", St = typeof document < "u" ? document : null, Ws = St && /* @__PURE__ */ St.createElement("template"), vu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? St.createElementNS(gu, e) : t === "mathml" ? St.createElementNS(yu, e) : n ? St.createElement(e, { is: n }) : St.createElement(e);
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
      Ws.innerHTML = Ro(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Ws.content;
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
}, bu = /* @__PURE__ */ Symbol("_vtc");
function xu(e, t, n) {
  const i = e[bu];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ks = /* @__PURE__ */ Symbol("_vod"), _u = /* @__PURE__ */ Symbol("_vsh"), wu = /* @__PURE__ */ Symbol(""), ku = /(?:^|;)\s*display\s*:/;
function Su(e, t, n) {
  const i = e.style, r = Te(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (Te(t))
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
      o != null ? Cu(
        e,
        a,
        !Te(t) && t ? t[a] : void 0,
        o
      ) || Nn(i, a, o) : Nn(i, a, "");
    }
  } else if (r) {
    if (t !== n) {
      const a = i[wu];
      a && (n += ";" + a), i.cssText = n, s = ku.test(n);
    }
  } else t && e.removeAttribute("style");
  Ks in e && (e[Ks] = s ? i.display : "", e[_u] && (i.display = "none"));
}
const Gs = /\s*!important$/;
function Nn(e, t, n) {
  if (te(n))
    n.forEach((i) => Nn(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Tu(e, t);
    Gs.test(n) ? e.setProperty(
      Qe(i),
      n.replace(Gs, ""),
      "important"
    ) : e[i] = n;
  }
}
const Qs = ["Webkit", "Moz", "ms"], ar = {};
function Tu(e, t) {
  const n = ar[t];
  if (n)
    return n;
  let i = Pe(t);
  if (i !== "filter" && i in e)
    return ar[t] = i;
  i = ji(i);
  for (let r = 0; r < Qs.length; r++) {
    const s = Qs[r] + i;
    if (s in e)
      return ar[t] = s;
  }
  return t;
}
function Cu(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Te(i) && n === i;
}
const Ys = "http://www.w3.org/1999/xlink";
function Js(e, t, n, i, r, s = Ol(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ys, t.slice(6, t.length)) : e.setAttributeNS(Ys, t, n) : n == null || s && !Pa(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : st(n) ? String(n) : n
  );
}
function Xs(e, t, n, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ro(n) : n);
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
    o === "boolean" ? n = Pa(n) : n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(r || t);
}
function Au(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function $u(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const ea = /* @__PURE__ */ Symbol("_vei");
function Iu(e, t, n, i, r = null) {
  const s = e[ea] || (e[ea] = {}), a = s[t];
  if (i && a)
    a.value = i;
  else {
    const [o, l] = Nu(t);
    if (i) {
      const c = s[t] = Pu(
        i,
        r
      );
      Au(e, o, c, l);
    } else a && ($u(e, o, a, l), s[t] = void 0);
  }
}
const ta = /(?:Once|Passive|Capture)$/;
function Nu(e) {
  let t;
  if (ta.test(e)) {
    t = {};
    let i;
    for (; i = e.match(ta); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Qe(e.slice(2)), t];
}
let or = 0;
const Eu = /* @__PURE__ */ Promise.resolve(), Ou = () => or || (Eu.then(() => or = 0), or = Date.now());
function Pu(e, t) {
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
  return n.value = e, n.attached = Ou(), n;
}
const na = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Mu = (e, t, n, i, r, s) => {
  const a = r === "svg";
  t === "class" ? xu(e, i, a) : t === "style" ? Su(e, n, i) : Pi(t) ? Mi(t) || Iu(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ru(e, t, i, a)) ? (Xs(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Js(e, t, i, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Fu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Te(i))) ? Xs(e, Pe(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Js(e, t, i, a));
};
function Ru(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && na(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return na(t) && Te(n) ? !1 : t in e;
}
function Fu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Pe(t);
  return Array.isArray(n) ? n.some((r) => Pe(r) === i) : Object.keys(n).some((r) => Pe(r) === i);
}
const ia = {};
// @__NO_SIDE_EFFECTS__
function ju(e, t, n) {
  let i = /* @__PURE__ */ Ce(e, t);
  Ri(i) && (i = Ae({}, i, t));
  class r extends as {
    constructor(a) {
      super(i, a, n);
    }
  }
  return r.def = i, r;
}
const Du = typeof HTMLElement < "u" ? HTMLElement : class {
};
class as extends Du {
  constructor(t, n = {}, i = sa) {
    super(), this._def = t, this._props = n, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && i !== sa ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
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
      if (t instanceof as) {
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
    this._connected = !1, qi(() => {
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
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = As(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[Pe(l)] = !0);
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
    let i = n ? this.getAttribute(t) : ia;
    const r = Pe(t);
    n && this._numberProps && this._numberProps[r] && (i = As(i)), this._setProp(r, i, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === ia ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), i)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(Qe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Qe(t), n + "") : n || this.removeAttribute(Qe(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Bu(t, this._root);
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
            Ri(a[0]) ? Ae({ detail: a }, a[0]) : { detail: a }
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
function Lu(e) {
  const t = Oo(), n = t && t.ce;
  return n || null;
}
const zu = ["ctrl", "shift", "alt", "meta"], qu = {
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
  exact: (e, t) => zu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Zn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const o = qu[t[a]];
      if (o && o(r, t)) return;
    }
    return e(r, ...s);
  });
}, Uu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, kr = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (r) => {
    if (!("key" in r))
      return;
    const s = Qe(r.key);
    if (t.some(
      (a) => a === s || Uu[a] === s
    ))
      return e(r);
  });
}, Vu = /* @__PURE__ */ Ae({ patchProp: Mu }, vu);
let ra;
function Fo() {
  return ra || (ra = Yc(Vu));
}
const Bu = (...e) => {
  Fo().render(...e);
}, sa = (...e) => {
  const t = Fo().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const r = Hu(i);
    if (!r) return;
    const s = t._component;
    !ne(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const a = n(r, !1, Zu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
};
function Zu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Hu(e) {
  return Te(e) ? document.querySelector(e) : e;
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
var aa;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(aa || (aa = {}));
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
const Sr = (e, t) => {
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
let Wu = Sr;
function Ku() {
  return Wu;
}
const Gu = (e) => {
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
function z(e, t) {
  const n = Ku(), i = Gu({
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
      n === Sr ? void 0 : Sr
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(i);
}
class He {
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
    return He.mergeObjectSync(t, i);
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
}), En = (e) => ({ status: "dirty", value: e }), et = (e) => ({ status: "valid", value: e }), oa = (e) => e.status === "aborted", la = (e) => e.status === "dirty", bn = (e) => e.status === "valid", yi = (e) => typeof Promise < "u" && e instanceof Promise;
var K;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(K || (K = {}));
class _t {
  constructor(t, n, i, r) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = i, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ca = (e, t) => {
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
      status: new He(),
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
    if (yi(n))
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
    return ca(i, r);
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
    }, r = this._parse({ data: t, path: i.path, parent: i }), s = await (yi(r) ? r : Promise.resolve(r));
    return ca(i, s);
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
    return xt.create(this);
  }
  promise() {
    return Si.create(this, this._def);
  }
  or(t) {
    return bi.create([this, t], this._def);
  }
  and(t) {
    return xi.create(this, t, this._def);
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
    return new Ti({
      ...ie(this._def),
      innerType: this,
      defaultValue: n,
      typeName: X.ZodDefault
    });
  }
  brand() {
    return new zo({
      typeName: X.ZodBranded,
      type: this,
      ...ie(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ci({
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
    return ls.create(this, t);
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
const Qu = /^c[^\s-]{8,}$/i, Yu = /^[0-9a-z]+$/, Ju = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Xu = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, ed = /^[a-z0-9_-]{21}$/i, td = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, nd = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, id = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, rd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let lr;
const sd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ad = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, od = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ld = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, cd = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ud = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, jo = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", dd = new RegExp(`^${jo}$`);
function Do(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function fd(e) {
  return new RegExp(`^${Do(e)}$`);
}
function pd(e) {
  let t = `${jo}T${Do(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function hd(e, t) {
  return !!((t === "v4" || !t) && sd.test(e) || (t === "v6" || !t) && od.test(e));
}
function md(e, t) {
  if (!td.test(e))
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
function gd(e, t) {
  return !!((t === "v4" || !t) && ad.test(e) || (t === "v6" || !t) && ld.test(e));
}
class At extends le {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== Z.string) {
      const s = this._getOrReturnCtx(t);
      return z(s, {
        code: $.invalid_type,
        expected: Z.string,
        received: s.parsedType
      }), J;
    }
    const i = new He();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (r = this._getOrReturnCtx(t, r), z(r, {
          code: $.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (r = this._getOrReturnCtx(t, r), z(r, {
          code: $.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "length") {
        const a = t.data.length > s.value, o = t.data.length < s.value;
        (a || o) && (r = this._getOrReturnCtx(t, r), a ? z(r, {
          code: $.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && z(r, {
          code: $.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), i.dirty());
      } else if (s.kind === "email")
        id.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "email",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "emoji")
        lr || (lr = new RegExp(rd, "u")), lr.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "emoji",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "uuid")
        Xu.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "uuid",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "nanoid")
        ed.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "nanoid",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid")
        Qu.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "cuid",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid2")
        Yu.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "cuid2",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "ulid")
        Ju.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "ulid",
          code: $.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), z(r, {
            validation: "url",
            code: $.invalid_string,
            message: s.message
          }), i.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "regex",
        code: $.invalid_string,
        message: s.message
      }), i.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: $.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), i.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: $.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: $.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "datetime" ? pd(s).test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: $.invalid_string,
        validation: "datetime",
        message: s.message
      }), i.dirty()) : s.kind === "date" ? dd.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: $.invalid_string,
        validation: "date",
        message: s.message
      }), i.dirty()) : s.kind === "time" ? fd(s).test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: $.invalid_string,
        validation: "time",
        message: s.message
      }), i.dirty()) : s.kind === "duration" ? nd.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "duration",
        code: $.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "ip" ? hd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "ip",
        code: $.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "jwt" ? md(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "jwt",
        code: $.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "cidr" ? gd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "cidr",
        code: $.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64" ? cd.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "base64",
        code: $.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64url" ? ud.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
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
function yd(e, t) {
  const n = (e.toString().split(".")[1] || "").length, i = (t.toString().split(".")[1] || "").length, r = n > i ? n : i, s = Number.parseInt(e.toFixed(r).replace(".", "")), a = Number.parseInt(t.toFixed(r).replace(".", ""));
  return s % a / 10 ** r;
}
class xn extends le {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== Z.number) {
      const s = this._getOrReturnCtx(t);
      return z(s, {
        code: $.invalid_type,
        expected: Z.number,
        received: s.parsedType
      }), J;
    }
    let i;
    const r = new He();
    for (const s of this._def.checks)
      s.kind === "int" ? de.isInteger(t.data) || (i = this._getOrReturnCtx(t, i), z(i, {
        code: $.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), z(i, {
        code: $.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), z(i, {
        code: $.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? yd(t.data, s.value) !== 0 && (i = this._getOrReturnCtx(t, i), z(i, {
        code: $.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (i = this._getOrReturnCtx(t, i), z(i, {
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
    return new xn({
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
    return new xn({
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
xn.create = (e) => new xn({
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
    const r = new He();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), z(i, {
        code: $.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), z(i, {
        code: $.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (i = this._getOrReturnCtx(t, i), z(i, {
        code: $.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : de.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return z(n, {
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
class Tr extends le {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Z.boolean) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: $.invalid_type,
        expected: Z.boolean,
        received: i.parsedType
      }), J;
    }
    return et(t.data);
  }
}
Tr.create = (e) => new Tr({
  typeName: X.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ie(e)
});
class vi extends le {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== Z.date) {
      const s = this._getOrReturnCtx(t);
      return z(s, {
        code: $.invalid_type,
        expected: Z.date,
        received: s.parsedType
      }), J;
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return z(s, {
        code: $.invalid_date
      }), J;
    }
    const i = new He();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), z(r, {
        code: $.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), i.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), z(r, {
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
class ua extends le {
  _parse(t) {
    if (this._getType(t) !== Z.symbol) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: $.invalid_type,
        expected: Z.symbol,
        received: i.parsedType
      }), J;
    }
    return et(t.data);
  }
}
ua.create = (e) => new ua({
  typeName: X.ZodSymbol,
  ...ie(e)
});
class Cr extends le {
  _parse(t) {
    if (this._getType(t) !== Z.undefined) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: $.invalid_type,
        expected: Z.undefined,
        received: i.parsedType
      }), J;
    }
    return et(t.data);
  }
}
Cr.create = (e) => new Cr({
  typeName: X.ZodUndefined,
  ...ie(e)
});
class Ar extends le {
  _parse(t) {
    if (this._getType(t) !== Z.null) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: $.invalid_type,
        expected: Z.null,
        received: i.parsedType
      }), J;
    }
    return et(t.data);
  }
}
Ar.create = (e) => new Ar({
  typeName: X.ZodNull,
  ...ie(e)
});
class da extends le {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return et(t.data);
  }
}
da.create = (e) => new da({
  typeName: X.ZodAny,
  ...ie(e)
});
class $r extends le {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return et(t.data);
  }
}
$r.create = (e) => new $r({
  typeName: X.ZodUnknown,
  ...ie(e)
});
class Vt extends le {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return z(n, {
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
class fa extends le {
  _parse(t) {
    if (this._getType(t) !== Z.undefined) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: $.invalid_type,
        expected: Z.void,
        received: i.parsedType
      }), J;
    }
    return et(t.data);
  }
}
fa.create = (e) => new fa({
  typeName: X.ZodVoid,
  ...ie(e)
});
class xt extends le {
  _parse(t) {
    const { ctx: n, status: i } = this._processInputParams(t), r = this._def;
    if (n.parsedType !== Z.array)
      return z(n, {
        code: $.invalid_type,
        expected: Z.array,
        received: n.parsedType
      }), J;
    if (r.exactLength !== null) {
      const a = n.data.length > r.exactLength.value, o = n.data.length < r.exactLength.value;
      (a || o) && (z(n, {
        code: a ? $.too_big : $.too_small,
        minimum: o ? r.exactLength.value : void 0,
        maximum: a ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), i.dirty());
    }
    if (r.minLength !== null && n.data.length < r.minLength.value && (z(n, {
      code: $.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), i.dirty()), r.maxLength !== null && n.data.length > r.maxLength.value && (z(n, {
      code: $.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), i.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, o) => r.type._parseAsync(new _t(n, a, n.path, o)))).then((a) => He.mergeArray(i, a));
    const s = [...n.data].map((a, o) => r.type._parseSync(new _t(n, a, n.path, o)));
    return He.mergeArray(i, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new xt({
      ...this._def,
      minLength: { value: t, message: K.toString(n) }
    });
  }
  max(t, n) {
    return new xt({
      ...this._def,
      maxLength: { value: t, message: K.toString(n) }
    });
  }
  length(t, n) {
    return new xt({
      ...this._def,
      exactLength: { value: t, message: K.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
xt.create = (e, t) => new xt({
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
  } else return e instanceof xt ? new xt({
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
      return z(c, {
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
        value: u._parse(new _t(r, d, r.path, c)),
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
        o.length > 0 && (z(r, {
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
            new _t(r, d, r.path, u)
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
    }).then((c) => He.mergeObjectSync(i, c)) : He.mergeObjectSync(i, l);
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
    return Lo(de.objectKeys(this.shape));
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
      return z(n, {
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
      return z(n, {
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
const kt = (e) => e instanceof wi ? kt(e.schema) : e instanceof rn ? kt(e.innerType()) : e instanceof ki ? [e.value] : e instanceof nn ? e.options : e instanceof Nr ? de.objectValues(e.enum) : e instanceof Ti ? kt(e._def.innerType) : e instanceof Cr ? [void 0] : e instanceof Ar ? [null] : e instanceof $t ? [void 0, ...kt(e.unwrap())] : e instanceof sn ? [null, ...kt(e.unwrap())] : e instanceof zo || e instanceof Ai ? kt(e.unwrap()) : e instanceof Ci ? kt(e._def.innerType) : [];
class os extends le {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Z.object)
      return z(n, {
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
    }) : (z(n, {
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
    return new os({
      typeName: X.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: r,
      ...ie(i)
    });
  }
}
function Ir(e, t) {
  const n = Lt(e), i = Lt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === Z.object && i === Z.object) {
    const r = de.objectKeys(t), s = de.objectKeys(e).filter((o) => r.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of s) {
      const l = Ir(e[o], t[o]);
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
      const a = e[s], o = t[s], l = Ir(a, o);
      if (!l.valid)
        return { valid: !1 };
      r.push(l.data);
    }
    return { valid: !0, data: r };
  } else return n === Z.date && i === Z.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class xi extends le {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = (s, a) => {
      if (oa(s) || oa(a))
        return J;
      const o = Ir(s.value, a.value);
      return o.valid ? ((la(s) || la(a)) && n.dirty(), { status: n.value, value: o.data }) : (z(i, {
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
xi.create = (e, t, n) => new xi({
  left: e,
  right: t,
  typeName: X.ZodIntersection,
  ...ie(n)
});
class tn extends le {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Z.array)
      return z(i, {
        code: $.invalid_type,
        expected: Z.array,
        received: i.parsedType
      }), J;
    if (i.data.length < this._def.items.length)
      return z(i, {
        code: $.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), J;
    !this._def.rest && i.data.length > this._def.items.length && (z(i, {
      code: $.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...i.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new _t(i, a, i.path, o)) : null;
    }).filter((a) => !!a);
    return i.common.async ? Promise.all(s).then((a) => He.mergeArray(n, a)) : He.mergeArray(n, s);
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
class _i extends le {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Z.object)
      return z(i, {
        code: $.invalid_type,
        expected: Z.object,
        received: i.parsedType
      }), J;
    const r = [], s = this._def.keyType, a = this._def.valueType;
    for (const o in i.data)
      r.push({
        key: s._parse(new _t(i, o, i.path, o)),
        value: a._parse(new _t(i, i.data[o], i.path, o)),
        alwaysSet: o in i.data
      });
    return i.common.async ? He.mergeObjectAsync(n, r) : He.mergeObjectSync(n, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, i) {
    return n instanceof le ? new _i({
      keyType: t,
      valueType: n,
      typeName: X.ZodRecord,
      ...ie(i)
    }) : new _i({
      keyType: At.create(),
      valueType: t,
      typeName: X.ZodRecord,
      ...ie(n)
    });
  }
}
class pa extends le {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Z.map)
      return z(i, {
        code: $.invalid_type,
        expected: Z.map,
        received: i.parsedType
      }), J;
    const r = this._def.keyType, s = this._def.valueType, a = [...i.data.entries()].map(([o, l], c) => ({
      key: r._parse(new _t(i, o, i.path, [c, "key"])),
      value: s._parse(new _t(i, l, i.path, [c, "value"]))
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
pa.create = (e, t, n) => new pa({
  valueType: t,
  keyType: e,
  typeName: X.ZodMap,
  ...ie(n)
});
class Wn extends le {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Z.set)
      return z(i, {
        code: $.invalid_type,
        expected: Z.set,
        received: i.parsedType
      }), J;
    const r = this._def;
    r.minSize !== null && i.data.size < r.minSize.value && (z(i, {
      code: $.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), n.dirty()), r.maxSize !== null && i.data.size > r.maxSize.value && (z(i, {
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
    const o = [...i.data.values()].map((l, c) => s._parse(new _t(i, l, i.path, c)));
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
      return z(n, {
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
function Lo(e, t) {
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
      return z(n, {
        expected: de.joinValues(i),
        received: n.parsedType,
        code: $.invalid_type
      }), J;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return z(n, {
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
nn.create = Lo;
class Nr extends le {
  _parse(t) {
    const n = de.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(t);
    if (i.parsedType !== Z.string && i.parsedType !== Z.number) {
      const r = de.objectValues(n);
      return z(i, {
        expected: de.joinValues(r),
        received: i.parsedType,
        code: $.invalid_type
      }), J;
    }
    if (this._cache || (this._cache = new Set(de.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = de.objectValues(n);
      return z(i, {
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
Nr.create = (e, t) => new Nr({
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
      return z(n, {
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
        z(i, a), a.fatal ? n.abort() : n.dirty();
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
class Ti extends le {
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
Ti.create = (e, t) => new Ti({
  innerType: e,
  typeName: X.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ie(t)
});
class Ci extends le {
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
    return yi(r) ? r.then((s) => ({
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
Ci.create = (e, t) => new Ci({
  innerType: e,
  typeName: X.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ie(t)
});
class ha extends le {
  _parse(t) {
    if (this._getType(t) !== Z.nan) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: $.invalid_type,
        expected: Z.nan,
        received: i.parsedType
      }), J;
    }
    return { status: "valid", value: t.data };
  }
}
ha.create = (e) => new ha({
  typeName: X.ZodNaN,
  ...ie(e)
});
class zo extends le {
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
class ls extends le {
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
    return new ls({
      in: t,
      out: n,
      typeName: X.ZodPipeline
    });
  }
}
class Ai extends le {
  _parse(t) {
    const n = this._def.innerType._parse(t), i = (r) => (bn(r) && (r.value = Object.freeze(r.value)), r);
    return yi(n) ? n.then((r) => i(r)) : i(n);
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
const B = At.create, H = xn.create, Be = Tr.create, qo = $r.create;
Vt.create;
const me = xt.create, se = Ie.create, Kn = bi.create, vd = os.create;
xi.create;
tn.create;
const cs = _i.create, bd = wi.create, tt = ki.create, xe = nn.create;
Si.create;
$t.create;
sn.create;
const xd = xe([
  "eq",
  "neq",
  "in",
  "gt",
  "gte",
  "lt",
  "lte",
  "isSet",
  "notSet"
]), ma = se({
  ref: B().min(1),
  op: xd,
  value: Kn([B(), H(), me(B()), me(H())]).optional()
}), Er = bd(() => se({
  all: me(Kn([ma, Er])).optional(),
  any: me(Kn([ma, Er])).optional()
}));
function us(e) {
  return "op" in e;
}
const _d = [
  "file.pages",
  "file.colorPages",
  "file.monoPages",
  "file.status"
], Uo = "quantity", wd = xe(["quantity", "pages", "area", "length"]), kd = se({
  /**
   * Inclusive upper bound on the basis value. MUST be omitted on the last
   * row (open-ended) and present on every other row — validate.ts enforces
   * strictly-increasing order, which makes overlap impossible by construction.
   */
  upTo: H().positive().optional(),
  amount: H()
}), Vo = se({
  basis: wd.default("quantity"),
  /**
   * flat:      the entire basis value is priced at the matched row's amount.
   * graduated: each band is priced at its own amount and summed
   *            (progressive-tax style).
   */
  mode: xe(["flat", "graduated"]).default("flat"),
  rows: me(kd).min(1)
}), Sd = xe(["sqm", "sqft", "sqin"]), Td = xe(["m", "ft", "in", "cm"]), Cd = xe([
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
]), Ad = se({
  name: B(),
  expression: B()
}), $d = se({
  /** Evaluated in order; each step may use the ones before it. */
  steps: me(Ad).default([]),
  /**
   * The rule's contribution to the order total. NOT multiplied by the
   * quantity — the formula reads `qty` itself.
   */
  expression: B()
}), Bo = se({
  type: Cd,
  /** Ignored on a formula rule (written as 0). */
  amount: H(),
  /**
   * perArea: the unit `amount` is priced in.
   * formula: the unit of `area`. Default "sqm" (engine-side).
   */
  areaUnit: Sd.optional(),
  /**
   * perLength: the unit `amount` is priced in.
   * formula: the unit of `w` and `h`. Default "m" (engine-side).
   */
  lengthUnit: Td.optional(),
  /**
   * perLength only: which axis of the source W×H is the billable
   * length. Default "h" (a roll's fixed width is w; the consumed
   * length is h). "max" prices the longest side.
   */
  lengthAxis: xe(["h", "w", "max"]).optional(),
  /**
   * perArea/perLength/formula only: id of a `dimensions` field to read
   * W×H from. Fallback when omitted: FileMetadata.canvas.
   */
  dimensionsField: B().optional(),
  /**
   * Volume/size breaks. For basis "area" the basis value is in
   * `areaUnit`; for basis "length", in `lengthUnit`.
   */
  tiers: Vo.optional(),
  /** formula only: the steps and the price (formula.ts has the language). */
  formula: $d.optional()
}), Id = se({
  amount: H().nonnegative().default(0),
  /** "order": added once (v1 behavior). "unit": × quantity (t-shirts, cards). */
  per: xe(["order", "unit"]).default("order"),
  /**
   * Quantity breaks on the base. basis must be "quantity"; mode "graduated"
   * requires per === "unit" (validate.ts).
   */
  tiers: Vo.optional()
}), Nd = se({
  currency: B().regex(/^[A-Z]{3}$/, "ISO 4217 currency code").default("USD"),
  basePrice: Id.default({}),
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
  lineQuantity: xe(["job", "units"]).optional()
}), $i = "2.0", Ed = se({
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
}).strict(), Od = se({
  context: Ed.optional()
}), ds = se({
  id: B().min(1),
  label: B(),
  description: B().optional(),
  /** http(s) URL or data: URI (builder can embed small images). */
  image: B().optional(),
  /** Hex color for swatch display. */
  color: B().optional(),
  /** Default selection for the parent field. */
  default: Be().optional(),
  /** Merchant SKU fragment for this choice (used by resolveSku / adapters). */
  sku: B().optional(),
  /** Manually mark a choice unavailable without deleting it. */
  disabled: Be().optional(),
  /** Price changes applied when this choice is selected. */
  priceModifiers: me(Bo).default([]),
  /** What selecting this choice tells the Filecheck intake (if any). */
  filecheck: Od.optional()
}), Ft = se({
  id: B().min(1),
  label: B().optional(),
  helpText: B().optional(),
  required: Be().default(!1),
  visibleWhen: Er.optional(),
  /** Price changes applied just for having this field visible. */
  priceModifiers: me(Bo).default([]),
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
}), Pd = Ft.extend({
  type: tt("select-one"),
  display: xe(["cards", "grid", "swatches", "pills", "dropdown", "list"]).default("pills"),
  options: me(ds).min(1)
}), Md = Ft.extend({
  type: tt("select-many"),
  display: xe(["cards", "grid", "swatches", "pills", "list"]).default("list"),
  options: me(ds).min(1),
  minSelect: H().int().nonnegative().default(0),
  maxSelect: H().int().positive().optional()
}), Rd = Ft.extend({
  type: tt("quantity"),
  display: xe(["stepper", "pills", "dropdown", "input"]).default("stepper"),
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
  nextBreakHint: Be().optional()
}), Fd = Ft.extend({
  type: tt("quantities"),
  /** grid: a card per option with its own stepper. list: one row per option. */
  display: xe(["grid", "list"]).default("grid"),
  options: me(ds).min(1),
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
  nextBreakHint: Be().optional()
}), jd = Ft.extend({
  type: tt("number"),
  display: xe(["stepper", "slider", "input"]).default("input"),
  min: H().optional(),
  max: H().optional(),
  step: H().positive().optional(),
  defaultValue: H().optional()
}), Dd = Ft.extend({
  type: tt("text"),
  display: xe(["input", "textarea"]).default("input"),
  placeholder: B().optional(),
  maxLength: H().int().positive().optional()
}), Or = xe(["mm", "cm", "in"]), Ld = Ft.extend({
  type: tt("dimensions"),
  display: xe(["inputs"]).default("inputs"),
  /** Units the customer may pick between. */
  units: me(Or).min(1).default(["mm"]),
  defaultUnit: Or.default("mm"),
  /** Constraints, expressed in defaultUnit. */
  minW: H().positive().optional(),
  maxW: H().positive().optional(),
  minH: H().positive().optional(),
  maxH: H().positive().optional(),
  defaultValue: se({ w: H().positive(), h: H().positive() }).optional()
}), zd = se({
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
  workflow: cs(qo()).optional()
}).refine((e) => !!e.workflowId || !!e.workflow, {
  message: "filecheck needs a workflowId or an inline workflow"
}), qd = Ft.extend({
  type: tt("file"),
  /**
   * dropzone: the built-in upload, with any registered producers (Print.App
   * designer, template picker) offered around it. producer: NO direct
   * upload - only the registered producers render; the merchant is
   * showcasing the designer, not file drops.
   */
  display: xe(["dropzone", "producer"]).default("dropzone"),
  accept: me(B()).default(["application/pdf"]),
  /** Which data-feed provider enriches the FileMetadata. */
  providerId: B().optional(),
  /**
   * Filecheck-backed upload: replaces the dropzone with the Filecheck
   * intake element when the storefront supplies an element-mode provider
   * config (publishable key lives there — NEVER in this blueprint).
   */
  filecheck: zd.optional()
}), Ud = Ft.extend({
  type: tt("info"),
  /** summary: live selection recap. note: static text block. */
  display: xe(["summary", "note"]).default("note"),
  body: B().optional()
}), Vd = vd("type", [
  Pd,
  Md,
  Rd,
  Fd,
  jd,
  Dd,
  Ld,
  qd,
  Ud
]);
function ti(e) {
  return e.type === "select-one" || e.type === "select-many";
}
function jt(e) {
  return ti(e) || e.type === "quantities";
}
function Zi(e) {
  return e.type === "quantity" || e.type === "quantities";
}
const Bd = se({
  id: B().min(1),
  title: B(),
  fields: me(Vd)
}), Zd = se({
  /** axisFieldId -> choiceId, exactly one entry per axis (validate.ts). */
  select: cs(B()),
  sku: B().optional(),
  /** Absolute replacement for pricing.basePrice.amount while selected. */
  price: H().nonnegative().optional(),
  available: Be().default(!0),
  /** Platform hook (e.g. Shopify variant GID) for adapters that map to real variants. */
  platformVariantId: B().optional()
}), Hd = se({
  /** Field ids of select-one fields forming the matrix (e.g. ["size","color"]). */
  axes: me(B().min(1)).min(1),
  combinations: me(Zd)
}), fs = se({
  version: tt($i).default($i),
  productId: B().min(1),
  title: B(),
  /** stacked: all sections at once. wizard: one section per step. */
  layout: xe(["stacked", "wizard"]).default("stacked"),
  pricing: Nd.default({}),
  variants: Hd.optional(),
  sections: me(Bd)
});
se({
  w: H().positive(),
  h: H().positive(),
  unit: Or
});
function it(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && typeof e.w == "number" && typeof e.h == "number";
}
function Wd(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.values(e).every((t) => typeof t == "number");
}
const ui = ["qty", "w", "h", "area", "pages"], Pr = {
  min: [2, void 0],
  max: [2, void 0],
  round: [1, 2],
  ceil: [1, 1],
  floor: [1, 1],
  abs: [1, 1],
  sqrt: [1, 1],
  band: [4, void 0]
}, Zo = Object.keys(Pr), cr = 500, ga = 10, Kd = 64, Gd = /^[A-Za-z][A-Za-z0-9_]{0,31}$/, Qd = /^[A-Za-z0-9_.,+\-*/^()\s]$/;
class Ho extends Error {
  constructor(n) {
    super(n.message);
    Wt(this, "detail");
    this.detail = n;
  }
}
function Ee(e, t, n) {
  throw new Ho({ code: e, message: t, at: n });
}
function Yd(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const i = e[n];
    if (Qd.test(i) || Ee("formula-character", `"${i}" can't be used in a formula. Use + - * / ^, brackets, numbers and names.`, n), /\s/.test(i)) {
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
class Jd {
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
    this.depth += 1, this.depth > Kd && Ee("formula-too-long", "This formula is nested too deeply.", this.peek().at);
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
      return this.isOp("(") ? this.call(t, n) : (n in Pr && Ee("formula-syntax", `${t.text} needs brackets, like ${n}(a, b).`, t.at), this.names.push({ name: n, written: t.text, at: t.at }), this.noImplicitProduct(t.text), { kind: "name", name: n, written: t.text, at: t.at });
    }
    if (t.type === "op" && t.text === "(") {
      const n = this.expression();
      return this.expect(")", t.at), this.noImplicitProduct(")"), { kind: "group", inner: n };
    }
    return this.index -= 1, this.unexpected(t);
  }
  call(t, n) {
    const i = Pr[n];
    i || Ee("formula-unknown-name", `There is no function "${t.text}". You can use: ${Zo.join(", ")}.`, t.at);
    const r = this.next(), s = [];
    if (!this.isOp(")"))
      for (s.push(this.expression()); this.isOp(","); )
        this.next(), s.push(this.expression());
    this.expect(")", r.at);
    const [a, o] = i;
    if ((s.length < a || o !== void 0 && s.length > o) && Ee("formula-arity", Wo(n), t.at), n === "band" && Xd(s, t.at), n === "round" && s[1] !== void 0) {
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
function Wo(e) {
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
function Xd(e, t) {
  (e.length - 1) % 2 === 0 && Ee("formula-arity", Wo("band"), t);
  let n;
  for (let i = 1; i < e.length - 1; i += 2) {
    const r = Ii(e[i]);
    r !== void 0 && (n !== void 0 && r <= n && Ee("formula-arity", `The limits in band() must increase (${r} after ${n}).`, t), n = r);
  }
}
function ps(e) {
  if (e.length > cr)
    return {
      ok: !1,
      error: {
        code: "formula-too-long",
        message: `A formula can be at most ${cr} characters — split it into steps.`,
        at: cr
      }
    };
  try {
    const t = new Jd(Yd(e));
    return { ok: !0, ast: t.parse(), names: t.names };
  } catch (t) {
    if (t instanceof Ho)
      return { ok: !1, error: t.detail };
    throw t;
  }
}
function ef(e) {
  const t = [], n = e.steps ?? [];
  n.length > ga && t.push({
    path: ["steps"],
    code: "formula-too-long",
    message: `A formula can have at most ${ga} steps.`
  });
  const i = /* @__PURE__ */ new Set([...ui, ...Zo]), r = /* @__PURE__ */ new Map();
  n.forEach((a, o) => {
    const l = a.name.toLowerCase();
    Gd.test(a.name) ? i.has(l) ? t.push({
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
    const c = ps(a);
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
            ...n.slice(0, l).map((g) => g.name)
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
function hs(e) {
  const t = /* @__PURE__ */ new Set(), n = [...(e.steps ?? []).map((i) => i.expression), e.expression];
  for (const i of n) {
    const r = ps(i);
    if (r.ok)
      for (const { name: s } of r.names)
        ui.includes(s) && t.add(s);
  }
  return t;
}
const Ko = /* @__PURE__ */ new Set([
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
]), Go = /* @__PURE__ */ new Set(["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"]);
function Qo(e) {
  const t = e.toUpperCase();
  return Ko.has(t) ? 0 : Go.has(t) ? 3 : 2;
}
function tf(e) {
  return /^[A-Z]{3}$/.test(e) && (Ko.has(e) || Go.has(e) || nf.has(e));
}
const nf = /* @__PURE__ */ new Set([
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
const gn = (e) => typeof e == "object" && e !== null && !Array.isArray(e);
function rf(e) {
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
function sf(e) {
  const t = /* @__PURE__ */ new Map(), n = Array.isArray(e.sections) ? e.sections : [];
  for (const i of n) {
    const r = gn(i) && Array.isArray(i.fields) ? i.fields : [];
    for (const s of r)
      gn(s) && typeof s.id == "string" && Array.isArray(s.options) && t.set(s.id, new Set(s.options.flatMap((a) => gn(a) && typeof a.id == "string" ? [a.id] : [])));
  }
  return t;
}
function af(e, t, n) {
  if (!gn(t))
    throw new on("The matrix table must be an object.");
  const { choices: i, prices: r, off: s = [], skus: a = [] } = t;
  if (!Array.isArray(i) || i.length !== e.length || !i.every((f) => Array.isArray(f) && f.every((m) => typeof m == "string")))
    throw new on("The matrix table needs one list of choice ids per axis.");
  const o = rf(i);
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
    const g = r[m], y = u.get(m);
    if (g === null && !c.has(m) && y === void 0 || f.some((E, _) => n.has(e[_]) && !n.get(e[_]).has(E)))
      return;
    const x = {
      select: Object.fromEntries(e.map((E, _) => [E, f[_]])),
      available: !c.has(m)
    };
    g !== null && (x.price = g), y !== void 0 && (x.sku = y), d.push(x);
  }), d;
}
function of(e) {
  if (!gn(e) || !gn(e.variants) || e.variants.table === void 0)
    return e;
  const { table: t, ...n } = e.variants, i = Array.isArray(n.axes) ? n.axes.filter((r) => typeof r == "string") : [];
  return {
    ...e,
    variants: { ...n, axes: i, combinations: af(i, t, sf(e)) }
  };
}
function Yo(e) {
  let t;
  try {
    t = of(e);
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
  const n = fs.safeParse(t);
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
  const i = Jo(n.data);
  return {
    ok: !i.some((r) => r.severity === "error"),
    value: n.data,
    issues: i
  };
}
fs.superRefine((e, t) => {
  for (const n of Jo(e))
    n.severity === "error" && t.addIssue({
      code: $.custom,
      path: n.path,
      message: `${n.code}: ${n.message}`
    });
});
function Jo(e) {
  const t = [], n = (c, u, d, f = "error") => t.push({ path: c, code: u, message: d, severity: f }), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  let a = 0, o, l = !1;
  e.sections.forEach((c, u) => {
    r.has(c.id) && n(["sections", u, "id"], "duplicate-section-id", `Duplicate section id "${c.id}".`), r.add(c.id), c.fields.forEach((d, f) => {
      const m = ["sections", u, "fields", f];
      if (i.has(d.id) ? n([...m, "id"], "duplicate-field-id", `Duplicate field id "${d.id}".`) : i.set(d.id, { field: d, path: m }), (d.id === Uo || d.id.startsWith("file.")) && n([...m, "id"], "reserved-field-id", `Field id "${d.id}" is reserved for condition refs.`), Zi(d) && (o ?? (o = m), ff(d.visibleWhen) || (a += 1, a > 1 && n(m, "multiple-quantity-fields", "Only one quantity field can show unconditionally. Give the others a visibility rule so a single quantity field is shown at a time."))), d.role) {
        const g = s.get(d.role);
        g ? n([...m, "role"], "duplicate-role", `Role "${d.role}" is already used by field "${g}" — only one field per role.`) : s.set(d.role, d.id);
      }
      d.type === "file" && (l = !0);
    });
  });
  for (const { field: c, path: u } of i.values()) {
    uf(c, u, n), df(c, u, n), pf(c, u, i, n);
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
      f.forEach((g, y) => {
        vf(g, [...m, y], i, l, n);
      });
    c.type === "quantities" && yf(c, u, n);
  }
  return xf(e.pricing.basePrice, ["pricing", "basePrice"], n), e.variants && _f(e, i, n), o && !cf(e) && n(o, "quantity-has-no-effect", "Changing the quantity does not change the price: every amount in this product is added once per order. If customers can buy more than one, set the base price to per unit, or price the options per unit instead of fixed.", "warning"), tf(e.pricing.currency) || n(["pricing", "currency"], "unknown-currency", `Currency "${e.pricing.currency}" is not in the known list; totals will round to 2 decimals.`, "warning"), t;
}
const lf = /* @__PURE__ */ new Set([
  "perUnit",
  "perPage",
  "perColorPage",
  "perMonoPage",
  "perArea",
  "perLength"
]);
function cf(e) {
  var i;
  const t = e.pricing.basePrice;
  if (t.per === "unit" || t.tiers)
    return !0;
  const n = (r) => {
    var s;
    return lf.has(r.type) || (((s = r.tiers) == null ? void 0 : s.basis) ?? "quantity") === "quantity" && r.tiers !== void 0 || r.type === "formula" && r.formula !== void 0 && hs(r.formula).has("qty");
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
function uf(e, t, n) {
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
function df(e, t, n) {
  if (!jt(e))
    return;
  const i = /* @__PURE__ */ new Set();
  let r = 0;
  e.options.forEach((s, a) => {
    i.has(s.id) && n([...t, "options", a, "id"], "duplicate-choice-id", `Duplicate choice id "${s.id}" in field "${e.id}".`), i.add(s.id), s.default && (r += 1);
  }), e.type === "select-one" && r > 1 && n([...t, "options"], "too-many-defaults", `select-one field "${e.id}" has ${r} default choices.`), e.type === "select-many" && e.maxSelect !== void 0 && r > e.maxSelect && n([...t, "options"], "too-many-defaults", `Default choices (${r}) exceed maxSelect (${e.maxSelect}).`);
}
function ff(e) {
  var t, n;
  return e ? (((t = e.all) == null ? void 0 : t.length) ?? 0) > 0 || (((n = e.any) == null ? void 0 : n.length) ?? 0) > 0 : !1;
}
function pf(e, t, n, i) {
  if (!e.visibleWhen)
    return;
  const r = [...t, "visibleWhen"], s = (a, o) => {
    if (us(a)) {
      const l = _d.includes(a.ref), c = a.ref === Uo, u = n.get(a.ref);
      if (!l && !c && !u) {
        i(o, "dangling-condition-ref", `Condition references unknown field "${a.ref}".`);
        return;
      }
      if (a.ref === e.id && i(o, "self-condition-ref", `Field "${e.id}" references itself.`), c && Zi(e) && i(o, "quantity-ref-on-quantity-field", `Quantity field "${e.id}" cannot be shown or hidden by the quantity.`), u && jt(u.field) && (a.op === "eq" || a.op === "neq" || a.op === "in")) {
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
function Xo(e, t, n) {
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
const hf = /* @__PURE__ */ new Set(["fixed", "percent", "multiplier", "setup"]), mf = /* @__PURE__ */ new Set(["percent", "multiplier", "formula"]), gf = /^[A-Za-z0-9_-]+$/;
function yf(e, t, n) {
  e.options.forEach((i, r) => {
    const s = [...t, "options", r];
    gf.test(i.id) || n([...s, "id"], "quantities-choice-id", `Option id "${i.id}" may only use letters, digits, "-" and "_".`), i.priceModifiers.forEach((a, o) => {
      var c;
      const l = [...s, "priceModifiers", o];
      a.type === "formula" ? n([...l, "type"], "quantities-choice-modifier", "A formula can't price one option of a quantity per option — put it on the field.") : mf.has(a.type) ? n([...l, "type"], "quantities-choice-modifier", `A "${a.type}" price on one option would change the whole order — price this option per unit, or put the rule on the field.`) : ((c = a.tiers) == null ? void 0 : c.mode) === "graduated" && a.tiers.basis === "quantity" && n([...l, "tiers", "mode"], "quantities-choice-modifier", "Graduated quantity breaks cannot be shared out between options — use flat breaks.");
    });
  });
}
function vf(e, t, n, i, r) {
  if (e.type === "formula" || e.formula !== void 0) {
    bf(e, t, n, i, r);
    return;
  }
  if (e.tiers && (Xo(e.tiers, [...t, "tiers"], r), e.tiers.mode === "graduated" && hf.has(e.type) && r([...t, "tiers", "mode"], "tier-basis-invalid", `Graduated tiers are meaningless on a "${e.type}" modifier.`), e.tiers.basis === "pages" && !i && r([...t, "tiers", "basis"], "pages-basis-without-file", "Pages-based tiers need a file field to supply page counts.", "warning")), (e.type === "perPage" || e.type === "perColorPage" || e.type === "perMonoPage") && !i && r([...t, "type"], "pages-basis-without-file", `"${e.type}" pricing needs a file field to supply page counts.`, "warning"), e.type === "perArea" || e.type === "perLength") {
    const s = e.type.toLowerCase();
    if (e.dimensionsField !== void 0) {
      const a = n.get(e.dimensionsField);
      (!a || a.field.type !== "dimensions") && r([...t, "dimensionsField"], `${s}-dangling-dims`, `"${e.dimensionsField}" is not a dimensions field.`);
    } else i || r([...t, "type"], `${s}-missing-source`, `${e.type} pricing has no dimensions field and no file field to read a canvas from.`, "warning");
  }
}
function bf(e, t, n, i, r) {
  if (e.type !== "formula") {
    r([...t, "formula"], "formula-missing", `Only a formula rule can carry a formula, not a "${e.type}" rule.`);
    return;
  }
  const s = e.formula;
  if (!s) {
    r([...t, "formula"], "formula-missing", "This formula rule has no formula.");
    return;
  }
  for (const l of ef(s))
    r([...t, "formula", ...l.path], l.code, l.message);
  e.tiers && r([...t, "tiers"], "formula-tiers", "A formula rule can't have volume breaks — put the breaks in the formula, e.g. with band().");
  const a = hs(s), o = a.has("w") || a.has("h") || a.has("area");
  if (e.dimensionsField !== void 0) {
    const l = n.get(e.dimensionsField);
    (!l || l.field.type !== "dimensions") && r([...t, "dimensionsField"], "formula-dangling-dims", `"${e.dimensionsField}" is not a dimensions field.`);
  } else o && !i && r([...t, "dimensionsField"], "formula-no-size", "This formula uses the size (w, h or area), but there is no size field and no file upload to read it from, so the size is always 0.", "warning");
  a.has("pages") && !i && r([...t, "formula"], "pages-basis-without-file", "This formula uses pages, but there is no file field to supply page counts.", "warning");
}
function xf(e, t, n) {
  e.tiers && (Xo(e.tiers, [...t, "tiers"], n), e.tiers.basis !== "quantity" && n([...t, "tiers", "basis"], "tier-basis-invalid", "Base price tiers must use the quantity basis."), e.tiers.mode === "graduated" && e.per === "order" && n([...t, "tiers", "mode"], "tier-basis-invalid", 'Graduated base tiers require per: "unit".'));
}
function _f(e, t, n) {
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
      const g = r.get(f);
      g && !g.has(m) && n(["variants", "combinations", l, "select", f], "variant-combo-invalid", `"${m}" is not a choice of axis "${f}".`);
    }
    const d = i.axes.map((f) => o.select[f]).join("\0");
    s.has(d) && n(["variants", "combinations", l], "variant-combo-duplicate", "Duplicate variant combination."), s.add(d), o.price !== void 0 && e.pricing.basePrice.tiers && n(["variants", "combinations", l, "price"], "variant-price-with-base-tiers", "Combination price overrides only the untiered base amount; base tiers still apply.", "warning");
  });
}
const Mr = "1.0", wf = se({
  /** Minimum quantity required to trigger this tier (inclusive). */
  minQty: H().nonnegative(),
  /** Maximum quantity for this tier (inclusive). If omitted, tier spans to infinity. */
  maxQty: H().nonnegative().optional(),
  /** Price/amount applied for this tier. */
  amount: H()
}), el = se({
  type: xe([
    "fixed",
    "perUnit",
    "perPage",
    "perColorPage",
    "perMonoPage",
    "percent",
    "multiplier"
  ]),
  amount: H(),
  tiers: me(wf).optional()
}), kf = se({
  /** The field id whose value gates visibility. */
  field: B(),
  /** Show when the field's selected value equals one of these. */
  equals: Kn([B(), me(B())]).optional(),
  /** Show only when a value is present (any non-empty selection). */
  isSet: Be().optional()
}), Sf = se({
  id: B().min(1),
  label: B(),
  description: B().optional(),
  image: B().url().optional(),
  color: B().optional(),
  default: Be().optional(),
  priceModifiers: me(el).default([]),
  /** Dead in v1 runtime; dropped by migration. */
  reveals: me(B()).default([])
}), Tf = xe([
  "card-select",
  "image-grid",
  "swatch",
  "pill-toggle",
  "dropdown",
  "number-stepper",
  "file-upload",
  "summary"
]), Cf = se({
  id: B().min(1),
  type: Tf,
  label: B().optional(),
  helpText: B().optional(),
  required: Be().default(!1),
  options: me(Sf).default([]),
  min: H().optional(),
  max: H().optional(),
  step: H().optional(),
  defaultValue: Kn([B(), H()]).optional(),
  accept: me(B()).optional(),
  providerId: B().optional(),
  visibleWhen: kf.optional(),
  priceModifiers: me(el).default([])
}), Af = se({
  id: B().min(1),
  title: B(),
  layout: xe(["stacked", "tabs"]).default("stacked"),
  fields: me(Cf)
}), $f = se({
  version: tt(Mr).default(Mr),
  productId: B().min(1),
  title: B(),
  currency: B().default("USD"),
  basePrice: H().nonnegative().default(0),
  sections: me(Af)
});
class Ni extends Error {
  constructor(n) {
    const i = n.map((r) => `${r.code} at ${r.path.join(".") || "<root>"}: ${r.message}`).join("; ");
    super(`Invalid product options: ${i}`);
    Wt(this, "issues");
    this.name = "ProductOptionsError", this.issues = n;
  }
}
function If(e) {
  const t = $f.safeParse(e);
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
      currency: jf(n.currency, i),
      basePrice: { amount: n.basePrice, per: "order" }
    },
    sections: n.sections.map((c) => ({
      id: c.id,
      title: c.title,
      fields: c.fields.map((u) => {
        const d = Of(u, r, i);
        return d.type === "quantity" && (r = !0), d;
      })
    }))
  }, o = fs.parse(a), l = Yo(o);
  if (!l.ok)
    throw new Ni(l.issues.filter((c) => c.severity === "error"));
  return { doc: o, warnings: i };
}
function Nf(e) {
  const t = typeof e == "object" && e !== null ? e.version : void 0;
  if (t === void 0 || t === $i) {
    const n = Yo(e);
    if (!n.ok || !n.value)
      throw new Ni(n.issues.filter((i) => i.severity === "error"));
    return { doc: n.value, warnings: [] };
  }
  if (t === Mr)
    return If(e);
  throw new Ni([
    {
      path: ["version"],
      code: "unknown-version",
      message: `Unsupported schema version "${String(t)}".`,
      severity: "error"
    }
  ]);
}
function ya(e, t) {
  const { doc: n, warnings: i } = Nf(e);
  return n;
}
const Ef = {
  "card-select": "cards",
  "image-grid": "grid",
  swatch: "swatches",
  "pill-toggle": "pills",
  dropdown: "dropdown"
};
function Of(e, t, n) {
  const i = {
    id: e.id,
    label: e.label,
    helpText: e.helpText,
    required: e.required,
    visibleWhen: Mf(e.visibleWhen),
    priceModifiers: e.priceModifiers.map((r) => tl(r, n))
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
        display: Ef[e.type],
        options: e.options.map((r) => Pf(r, n))
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
        min: Cn(e.min) ?? 1,
        max: Cn(e.max),
        step: Cn(e.step) ?? 1,
        defaultValue: Cn(typeof e.defaultValue == "number" ? e.defaultValue : void 0) ?? Cn(e.min) ?? 1
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
function Pf(e, t) {
  return {
    id: e.id,
    label: e.label,
    description: e.description,
    image: e.image,
    color: e.color,
    default: e.default,
    priceModifiers: e.priceModifiers.map((n) => tl(n, t))
  };
}
function Mf(e) {
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
function Cn(e) {
  if (e === void 0)
    return;
  const t = Math.round(e);
  return t >= 1 ? t : void 0;
}
function tl(e, t) {
  return !e.tiers || e.tiers.length === 0 ? { type: e.type, amount: e.amount } : {
    type: e.type,
    amount: e.amount,
    tiers: {
      basis: "quantity",
      mode: "flat",
      rows: Rf(e.tiers, e.amount, t)
    }
  };
}
function Rf(e, t, n) {
  Ff(e) && n.push("Overlapping v1 tiers detected; earlier tiers win in the overlap (v1 behavior preserved).");
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
function Ff(e) {
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
function jf(e, t) {
  const n = e.toUpperCase();
  return /^[A-Z]{3}$/.test(n) ? n : (t.push(`Currency "${e}" is not an ISO 4217 code; defaulting to USD.`), "USD");
}
const va = "1.0", nl = xe(["mm", "cm", "in", "pt", "px"]), Df = xe(["pending", "ready", "failed"]), Lf = xe(["info", "warning", "error"]), zf = se({
  /** 1-based page index. */
  page: H().int().positive(),
  w: H().nonnegative(),
  h: H().nonnegative(),
  unit: nl.default("mm")
}), qf = se({
  w: H().nonnegative(),
  h: H().nonnegative(),
  /** Bleed applied around the trim box, in `unit`. */
  bleed: H().nonnegative().default(0),
  unit: nl.default("mm")
}), Uf = se({
  /** Dominant color model detected in the file. */
  model: xe(["RGB", "CMYK", "Gray", "Mixed", "Unknown"]).default("Unknown"),
  /** Named spot colors (e.g. Pantone) found in the file. */
  spot: me(B()).default([])
}), Vf = se({
  /** Machine-readable code, e.g. "low-dpi", "not-embedded-font", "out-of-gamut". */
  code: B(),
  severity: Lf.default("warning"),
  message: B().optional(),
  /** 1-based page index the issue applies to, if page-specific. */
  page: H().int().positive().optional()
}), ms = se({
  /** Contract version, for forward/backward compatibility. */
  version: tt(va).default(va),
  /** Stable id assigned by the basic uploader; correlates feeds to a file. */
  fileId: B().min(1),
  /** Who produced this metadata. Free-form, but reserve known sources. */
  source: B().default("custom"),
  status: Df.default("pending"),
  /** Original file name and MIME type, if known. */
  fileName: B().optional(),
  mimeType: B().optional(),
  fileSizeBytes: H().int().nonnegative().optional(),
  /** Total page count. Absent means "unknown" — pricing must fall back. */
  pages: H().int().nonnegative().optional(),
  colorPages: H().int().nonnegative().optional(),
  monoPages: H().int().nonnegative().optional(),
  pageSizes: me(zf).optional(),
  canvas: qf.optional(),
  colors: Uf.optional(),
  issues: me(Vf).default([]),
  /** Provider-specific extras that don't fit the core contract. */
  raw: cs(qo()).optional()
}), Bf = se({
  pages: Be().default(!1),
  colorDetection: Be().default(!1),
  pageSizes: Be().default(!1),
  canvas: Be().default(!1),
  preflightIssues: Be().default(!1)
}), Zf = se({
  id: B().min(1),
  name: B(),
  /**
   * "push" = provider POSTs metadata to us; "pull" = we fetch from `endpoint`;
   * "element" = provider renders its own embedded uploader (e.g. the
   * Filecheck intake element) in place of the basic dropzone.
   */
  mode: xe(["push", "pull", "element"]).default("push"),
  endpoint: B().url().optional(),
  capabilities: Bf.default({}),
  /** element mode: publishable key (pk_live_/pk_test_ — browser-safe, store-level). */
  publishableKey: B().optional(),
  /** element mode: optional sub-tenant scope. */
  agentId: B().optional(),
  /** element mode: override the provider SDK script URL (staging/local dev). */
  scriptUrl: B().url().optional(),
  /** element mode: override the provider iframe URL (local dev). */
  iframeSrc: B().url().optional(),
  /** element mode: create preview sessions (unmetered, webhook-suppressed). */
  preview: Be().optional()
}), Ei = [
  { label: "PDF", extensions: ["pdf"], mimeTypes: ["application/pdf"], mime: "application/pdf", words: ["pdf"] },
  {
    label: "JPEG",
    extensions: ["jpg", "jpeg"],
    mimeTypes: ["image/jpeg", "image/jpg", "image/pjpeg"],
    mime: "image/jpeg",
    words: ["jpg", "jpeg"]
  },
  { label: "PNG", extensions: ["png"], mimeTypes: ["image/png"], mime: "image/png", words: ["png"] },
  {
    label: "TIFF",
    extensions: ["tif", "tiff"],
    mimeTypes: ["image/tiff", "image/tif", "image/x-tiff"],
    mime: "image/tiff",
    words: ["tif", "tiff"]
  },
  { label: "SVG", extensions: ["svg"], mimeTypes: ["image/svg+xml"], mime: "image/svg+xml", words: ["svg"] },
  {
    label: "Illustrator",
    extensions: ["ai"],
    mimeTypes: ["application/illustrator", "application/postscript", "application/pdf"],
    mime: "application/illustrator",
    words: ["ai", "illustrator"]
  },
  {
    label: "EPS",
    extensions: ["eps"],
    mimeTypes: ["application/postscript", "application/eps", "application/x-eps", "image/eps", "image/x-eps"],
    mime: "application/postscript",
    words: ["eps", "postscript"]
  },
  {
    label: "Photoshop",
    extensions: ["psd"],
    mimeTypes: [
      "image/vnd.adobe.photoshop",
      "application/x-photoshop",
      "application/photoshop",
      "application/psd",
      "image/psd",
      "image/x-photoshop"
    ],
    mime: "image/vnd.adobe.photoshop",
    words: ["psd", "photoshop"]
  },
  {
    label: "ZIP",
    extensions: ["zip"],
    mimeTypes: ["application/zip", "application/x-zip-compressed", "application/x-zip", "multipart/x-zip"],
    mime: "application/zip",
    words: ["zip"]
  },
  {
    label: "Word",
    extensions: ["doc", "docx"],
    mimeTypes: [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ],
    mime: "",
    // per extension, see storedMime()
    words: ["doc", "docx", "word"]
  },
  {
    label: "Excel",
    extensions: ["xls", "xlsx"],
    mimeTypes: [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ],
    mime: "",
    words: ["xls", "xlsx", "excel"]
  },
  {
    label: "CSV",
    extensions: ["csv"],
    // Windows registers .csv to Excel, so Chrome there reports Excel's type.
    mimeTypes: ["text/csv", "application/csv", "text/plain", "application/vnd.ms-excel"],
    mime: "text/csv",
    words: ["csv"]
  }
], Hf = {
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
};
function Wf(e) {
  const t = /\.([A-Za-z0-9]{1,16})$/.exec(e.trim());
  return t ? t[1].toLowerCase() : "";
}
function Kf(e) {
  const t = e.replace(/^\./, "").toLowerCase();
  return Ei.find((n) => n.extensions.includes(t));
}
function gs(e) {
  const t = /* @__PURE__ */ new Set(), n = (i) => i.extensions.forEach((r) => t.add(r));
  for (const i of e) {
    const r = i.trim().toLowerCase();
    if (!r)
      continue;
    if (r.includes("/")) {
      for (const o of Ei) {
        const l = o.mime === r || Hf[o.extensions[0]] === r, c = r !== "application/pdf" && o.mimeTypes.includes(r);
        (l || c) && n(o);
      }
      continue;
    }
    const s = Kf(r);
    if (s) {
      n(s);
      continue;
    }
    const a = r.split(/[^a-z0-9]+/).filter(Boolean);
    for (const o of Ei)
      a.some((l) => o.words.includes(l)) && n(o);
  }
  return [...t];
}
function Gf(e) {
  return gs(e).map((t) => `.${t}`).join(",");
}
function Qf(e, t) {
  const n = gs(e);
  return n.length === 0 || n.includes(Wf(t));
}
function Yf(e) {
  const t = gs(e);
  return Ei.filter((n) => n.extensions.some((i) => t.includes(i))).map((n) => n.label).join(", ");
}
const il = {
  mm: 1e-3,
  cm: 0.01,
  in: 0.0254,
  pt: 0.0254 / 72,
  px: void 0
}, Jf = {
  sqm: 1,
  sqft: 0.3048 * 0.3048,
  sqin: 0.0254 * 0.0254
};
function rl(e, t, n, i) {
  const r = il[n];
  return r === void 0 || e <= 0 || t <= 0 ? 0 : e * r * (t * r) / Jf[i];
}
function ys(e, t) {
  var n;
  if (e.dimensionsField !== void 0) {
    const i = t.selections[e.dimensionsField];
    return it(i) ? i : void 0;
  }
  return (n = t.file) == null ? void 0 : n.canvas;
}
function sl(e, t) {
  const n = ys(e, t);
  return n ? rl(n.w, n.h, n.unit, e.areaUnit ?? "sqm") : 0;
}
function Xf(e, t) {
  if (e === "quantity")
    return t.quantity;
  const n = ep(e, t);
  return Wd(n) ? Object.keys(n).filter((i) => (n[i] ?? 0) > 0) : n;
}
function ep(e, t) {
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
function ba(e) {
  return e !== void 0 && e !== "" && !(Array.isArray(e) && e.length === 0);
}
function tp(e, t) {
  const n = Xf(e.ref, t);
  if (e.op === "isSet")
    return ba(n);
  if (e.op === "notSet")
    return !ba(n);
  if (n === void 0)
    return !1;
  switch (e.op) {
    case "eq":
      return xa(n, e.value);
    case "neq":
      return !xa(n, e.value);
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
function xa(e, t) {
  if (Array.isArray(e)) {
    if (Array.isArray(t)) {
      const n = t.map(String);
      return e.some((i) => n.includes(String(i)));
    }
    return t !== void 0 && e.map(String).includes(String(t));
  }
  return it(e) ? !1 : Array.isArray(t) ? t.map(String).includes(String(e)) : t !== void 0 && String(e) === String(t);
}
function al(e, t) {
  if (!e)
    return !0;
  const n = (s) => us(s) ? tp(s, t) : al(s, t), i = e.all === void 0 || e.all.every(n), r = e.any === void 0 || e.any.length === 0 || e.any.some(n);
  return i && r;
}
function vs(e, t) {
  return al(e.visibleWhen, t);
}
const np = {
  m: 1,
  ft: 0.3048,
  in: 0.0254,
  cm: 0.01
};
function Rr(e, t, n) {
  const i = il[t];
  return i === void 0 || e <= 0 ? 0 : e * i / np[n];
}
function ip(e, t, n) {
  return n === "w" ? e : n === "max" ? Math.max(e, t) : t;
}
function ol(e, t) {
  const n = ys(e, t);
  return n ? Rr(ip(n.w, n.h, e.lengthAxis), n.unit, e.lengthUnit ?? "m") : 0;
}
const rp = 256, li = /* @__PURE__ */ new Map();
function _a(e) {
  const t = li.get(e);
  if (t !== void 0)
    return t;
  const n = ps(e), i = n.ok ? n.ast : null;
  return li.size >= rp && li.clear(), li.set(e, i), i;
}
function sp(e, t) {
  const n = new Map(Object.entries(t));
  for (const s of e.steps ?? []) {
    const a = _a(s.expression);
    if (!a)
      return Number.NaN;
    n.set(s.name.toLowerCase(), Jt(a, n));
  }
  const i = _a(e.expression);
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
          return ap(n, i);
      }
      break;
    }
    case "call":
      return op(e.fn, e.args.map((n) => Jt(n, t)));
  }
  return Number.NaN;
}
function ap(e, t) {
  if (!Number.isInteger(t))
    return Math.pow(e, t);
  let n = Math.abs(t), i = 1, r = e;
  for (; n > 0; )
    n % 2 === 1 && (i *= r), r *= r, n = Math.floor(n / 2);
  return t < 0 ? 1 / i : i;
}
function op(e, t) {
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
function lp(e, t) {
  var r;
  const n = ys(e, t), i = e.lengthUnit ?? "m";
  return {
    qty: t.quantity,
    w: n ? ur(Rr(n.w, n.unit, i)) : 0,
    h: n ? ur(Rr(n.h, n.unit, i)) : 0,
    area: n ? ur(rl(n.w, n.h, n.unit, e.areaUnit ?? "sqm")) : 0,
    pages: ((r = t.file) == null ? void 0 : r.pages) ?? 0
  };
}
function ur(e) {
  return e === 0 ? 0 : Number(e.toPrecision(12));
}
function cp(e, t) {
  return e.formula ? sp(e.formula, lp(e, t)) : Number.NaN;
}
function nt(e, t) {
  const i = 10 ** Qo(t);
  return Math.round((e + Number.EPSILON) * i) / i;
}
function up(e) {
  const t = [];
  for (const n of e.sections)
    for (const i of n.fields)
      Zi(i) && t.push(i);
  return t;
}
function ni(e, t, n) {
  const i = up(e);
  if (i.length <= 1)
    return i[0];
  const r = { selections: t, file: n, quantity: 1 };
  return i.find((s) => vs(s, r)) ?? i.find((s) => !s.visibleWhen) ?? i[0];
}
function ll(e, t, n) {
  const i = ni(e, t, n);
  return i ? i.type === "quantities" ? bs(It(i, t[i.id])) : Gn(i, t[i.id]) : 1;
}
function Gn(e, t) {
  const n = typeof t == "number" ? t : typeof t == "string" && t.trim() !== "" ? Number(t) : e.defaultValue;
  return Number.isNaN(n) ? Fr(e, e.defaultValue) : Fr(e, n);
}
function It(e, t) {
  const n = {};
  if (typeof t != "object" || t === null || Array.isArray(t))
    return n;
  const i = t;
  for (const r of e.options) {
    const s = i[r.id], a = typeof s == "number" ? s : typeof s == "string" && s.trim() !== "" ? Number(s) : Number.NaN;
    !Number.isFinite(a) || Math.round(a) <= 0 || (n[r.id] = Fr(e, a));
  }
  return n;
}
function bs(e) {
  let t = 0;
  for (const n of Object.values(e))
    t += n;
  return t;
}
function Fr(e, t) {
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
function Hi(e, t) {
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
function dp(e, t) {
  const n = Hi(e, t);
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
function fp(e, t, n, i) {
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
  const s = Hi(e, { ...t, [n]: i });
  return s ? s.available : !0;
}
function pp(e, t) {
  const n = Hi(e, t);
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
function jr(e, t) {
  const n = ll(e, t.selections, t.file), i = t.quantity ?? n, r = ni(e, t.selections, t.file), s = (r == null ? void 0 : r.type) === "quantities" ? { fieldId: r.id, scale: n > 0 ? i / n : 0 } : void 0, a = {
    selections: t.selections,
    file: t.file,
    quantity: i
  }, o = e.pricing.currency, l = [], c = Hi(e, t.selections), u = pp(e, t.selections);
  let d = !1;
  const f = dp(e, t.selections), m = hp(e.pricing.basePrice, c == null ? void 0 : c.price, i);
  l.push({
    sourceId: "base",
    label: "Base price",
    stage: "base",
    type: "base",
    amount: nt(m, o)
  });
  let g = m;
  const y = cl(e, a, s);
  for (const { sourceId: V, label: F, modifier: I, units: A } of y) {
    const D = gp(I, a, A);
    if (D !== void 0) {
      if (Number.isNaN(D)) {
        d = !0;
        continue;
      }
      g += D, l.push({
        sourceId: V,
        label: F,
        stage: "additive",
        type: I.type,
        amount: nt(D, o)
      });
    }
  }
  const x = g;
  for (const { sourceId: V, label: F, modifier: I } of y) {
    if (I.type !== "percent")
      continue;
    const A = qt(I, a), D = g * (A / 100);
    g += D, l.push({
      sourceId: V,
      label: F,
      stage: "percent",
      type: "percent",
      amount: nt(D, o)
    });
  }
  for (const { sourceId: V, label: F, modifier: I } of y) {
    if (I.type !== "multiplier")
      continue;
    const A = qt(I, a), D = g * A - g;
    g += D, l.push({
      sourceId: V,
      label: F,
      stage: "multiplier",
      type: "multiplier",
      amount: nt(D, o)
    });
  }
  e.pricing.setupFee !== void 0 && e.pricing.setupFee > 0 && (g += e.pricing.setupFee, l.push({
    sourceId: "setup-fee",
    label: "Setup fee",
    stage: "setup",
    type: "setup",
    amount: nt(e.pricing.setupFee, o)
  }));
  for (const { sourceId: V, label: F, modifier: I } of y) {
    if (I.type !== "setup")
      continue;
    const A = qt(I, a);
    g += A, l.push({
      sourceId: V,
      label: F,
      stage: "setup",
      type: "setup",
      amount: nt(A, o)
    });
  }
  const E = Math.max(e.pricing.minimumPrice ?? 0, 0);
  if (g < E) {
    const V = E - g;
    g = E, l.push({
      sourceId: "adjustment:minimum",
      label: "Minimum order adjustment",
      stage: "adjustment",
      type: "minimum",
      amount: nt(V, o)
    });
  }
  const _ = nt(g, o), W = u ? "combination" : d ? "formula" : void 0;
  return {
    currency: o,
    quantity: i,
    unavailable: W !== void 0,
    ...W ? { unavailableReason: W } : {},
    sku: f,
    base: nt(m, o),
    subtotal: nt(x, o),
    total: _,
    unitPrice: nt(g / Math.max(i, 1), o),
    lines: l
  };
}
function hp(e, t, n) {
  const i = t ?? e.amount, r = e.tiers;
  return e.per === "order" ? r ? Qn(r.rows, n).amount : i : r ? r.mode === "graduated" ? On(n, r.rows) : Qn(r.rows, n).amount * n : i * n;
}
function cl(e, t, n) {
  const i = [];
  for (const r of e.sections)
    for (const s of r.fields) {
      if (!vs(s, t))
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
      const a = mp(s.id, t.selections);
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
function mp(e, t) {
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
      return sl(e, t);
    case "length":
      return ol(e, t);
  }
}
function qt(e, t) {
  return e.tiers ? Qn(e.tiers.rows, Pn(e, t)).amount : e.amount;
}
function gp(e, t, n = t.quantity) {
  var r, s, a, o, l, c, u;
  const i = n;
  switch (e.type) {
    case "percent":
    case "multiplier":
    case "setup":
      return;
    case "fixed":
      return qt(e, t);
    case "perUnit":
      return ((r = e.tiers) == null ? void 0 : r.mode) === "graduated" ? On(Pn(e, t), e.tiers.rows) : qt(e, t) * i;
    case "perPage":
    case "perColorPage":
    case "perMonoPage": {
      const d = e.type === "perPage" ? ((s = t.file) == null ? void 0 : s.pages) ?? 0 : e.type === "perColorPage" ? ((a = t.file) == null ? void 0 : a.colorPages) ?? 0 : ((o = t.file) == null ? void 0 : o.monoPages) ?? 0;
      return ((l = e.tiers) == null ? void 0 : l.mode) === "graduated" ? On(Pn(e, t), e.tiers.rows) * i : qt(e, t) * d * i;
    }
    case "perArea": {
      const d = sl(e, t);
      return ((c = e.tiers) == null ? void 0 : c.mode) === "graduated" ? On(Pn(e, t), e.tiers.rows) * i : qt(e, t) * d * i;
    }
    case "formula":
      return cp(e, t);
    case "perLength": {
      const d = ol(e, t);
      return ((u = e.tiers) == null ? void 0 : u.mode) === "graduated" ? On(Pn(e, t), e.tiers.rows) * i : qt(e, t) * d * i;
    }
  }
}
const yp = 5;
function vp(e, t) {
  const n = ni(e, t.selections, t.file);
  if (!n)
    return;
  const i = jr(e, t), r = i.quantity;
  if (r <= 0 || i.unavailable)
    return;
  const s = { selections: t.selections, file: t.file, quantity: r }, a = cl(e, s).map(({ modifier: u }) => u), o = bp(e, a), l = /* @__PURE__ */ new Set();
  for (const { table: u } of o)
    for (const d of u.rows) {
      if (d.upTo === void 0)
        continue;
      const f = xp(n, r, Math.floor(d.upTo) + 1);
      f !== void 0 && f > r && l.add(f);
    }
  const c = [...l].sort((u, d) => u - d).slice(0, yp);
  for (const u of c) {
    const d = jr(e, { ...t, quantity: u });
    if (!(d.unavailable || d.unitPrice >= i.unitPrice))
      return {
        add: u - r,
        quantity: u,
        unitPrice: d.unitPrice,
        percentOff: _p(o, r, u)
      };
  }
}
function bp(e, t) {
  const n = [], i = e.pricing.basePrice.tiers;
  i && i.basis === "quantity" && n.push({ table: i, percent: !1 });
  for (const r of t)
    r.tiers && r.tiers.basis === "quantity" && n.push({ table: r.tiers, percent: r.type === "percent" });
  return n;
}
function xp(e, t, n) {
  if (e.type === "quantities") {
    const s = Math.ceil((n - t) / e.step), a = t + Math.max(s, 0) * e.step;
    return e.maxTotal !== void 0 && a > e.maxTotal ? void 0 : a;
  }
  const i = Math.ceil((n - e.min) / e.step), r = e.min + Math.max(i, 0) * e.step;
  return e.max !== void 0 && r > e.max ? void 0 : r;
}
function _p(e, t, n) {
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
const wp = /* @__PURE__ */ new Set([
  "perPage",
  "perColorPage",
  "perMonoPage"
]), kp = /* @__PURE__ */ new Set([
  "file.pages",
  "file.colorPages",
  "file.monoPages"
]);
function ul(e) {
  return e ? [...e.all ?? [], ...e.any ?? []].some((n) => us(n) ? kp.has(n.ref) : ul(n)) : !1;
}
function Sp(e) {
  const t = (n) => {
    var i;
    return wp.has(n.type) || ((i = n.tiers) == null ? void 0 : i.basis) === "pages" || n.formula !== void 0 && hs(n.formula).has("pages");
  };
  for (const n of e.sections)
    for (const i of n.fields)
      if (ul(i.visibleWhen) || i.priceModifiers.some(t) || jt(i) && i.options.some((r) => r.priceModifiers.some(t)))
        return !0;
  return !1;
}
const Oi = "__artwork", dl = "__artwork-section";
function Tp(e) {
  return { id: dl, title: e, fields: [{
    id: Oi,
    type: "file",
    display: "producer",
    accept: [],
    required: !1,
    priceModifiers: []
  }] };
}
function Cp(e, t) {
  bt(
    [() => e.schema.value, () => t.list.value],
    ([n, i]) => {
      if (!n)
        return;
      const r = n.sections.some(
        (o) => o.fields.some(
          (l) => l.type === "file" && l.id !== Oi
        )
      ), s = n.sections.findIndex(
        (o) => o.id === dl
      ), a = i.length > 0 && !r;
      a && s === -1 ? n.sections.push(Tp(i[0].label)) : !a && s !== -1 && (n.sections.splice(s, 1), e.select(Oi, ""));
    },
    { immediate: !0, deep: !0 }
  );
}
function fl(e, t, n, i = {}) {
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
        const y = Array.isArray(f) ? f : typeof f == "string" ? [f] : [], x = d.options.filter((E) => y.includes(E.id)).map((E) => E.label);
        m = x.length ? x.join(", ") : void 0;
      } else if (d.type === "quantities") {
        const y = It(d, f), x = d.options.filter((E) => y[E.id] !== void 0).map((E) => `${E.label} × ${y[E.id]}`);
        m = x.length ? x.join(", ") : void 0;
      } else if (d.type === "file")
        m = n ? n.fileName ?? i.designName ?? n.fileId : void 0;
      else if (it(f))
        m = `${f.w} × ${f.h} ${f.unit}`;
      else if (d.type === "quantity" && f !== void 0 && f !== "") {
        const y = Gn(d, f), x = (a = d.unit) == null ? void 0 : a.trim();
        m = x ? `${y} ${x}` : String(y);
      } else f !== void 0 && f !== "" && (m = String(f));
      m !== void 0 && r.push({
        fieldId: d.id,
        /* An unlabeled quantity is common (the stepper explains
           itself on the page) — never show its internal id. */
        label: d.label || /* The designer's own slot is titled with its button
        ("Design fortsetzen" once saved) — no cart label. */
        (d.id === Oi ? i.artworkLabel ?? "Design" : void 0) || u || (Zi(d) ? i.quantityLabel ?? "Quantity" : d.id),
        value: m
      });
      const g = d.type === "file" ? Ap(n) : void 0;
      g && i.fileLinkLabel && m !== void 0 && r.push({ fieldId: d.id, label: i.fileLinkLabel, value: g });
    }
  }
  return r;
}
function Ap(e) {
  var n;
  const t = (n = e == null ? void 0 : e.raw) == null ? void 0 : n.downloadUrl;
  return typeof t == "string" && t.startsWith("https://") ? t : void 0;
}
async function $p(e, t, n) {
  const i = n ? await Ip(n) : void 0, r = await fetch(e, {
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
function Ip(e) {
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
async function Np(e, t) {
  if (!e.endpoint)
    throw new Error(`Provider "${e.id}" has no endpoint for pull mode.`);
  const n = `${e.endpoint.replace(/\/$/, "")}/${encodeURIComponent(t)}`, i = await fetch(n);
  if (!i.ok)
    throw new Error(`Metadata fetch failed: ${i.status}`);
  return ms.parse(await i.json());
}
async function Ep(e, t, n = {}) {
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
      if (s = await Np(e, t), s.status === "ready" || s.status === "failed")
        return s;
    } catch {
    }
    await Op(i);
  }
  return s;
}
function Op(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Pp(e) {
  const t = { ...e }, n = /* @__PURE__ */ Ue(null), i = /* @__PURE__ */ Ue(!1), r = /* @__PURE__ */ Ue(null), s = /* @__PURE__ */ Ue(!1), a = /* @__PURE__ */ Bt({}), o = /* @__PURE__ */ Ue(void 0), l = /* @__PURE__ */ Ue(!1), c = G(
    () => n.value ? ll(n.value, a, o.value) : 1
  ), u = G(() => ({
    selections: a,
    file: o.value,
    quantity: c.value
  }));
  async function d() {
    i.value = !0, r.value = null, s.value = !1;
    try {
      if (t.inlineConfig)
        n.value = ya(t.inlineConfig);
      else if (t.configUrl) {
        const I = await fetch(t.configUrl);
        if (I.status === 404 || I.status === 403) {
          s.value = !0;
          return;
        }
        if (!I.ok)
          throw new Error(`Config load failed: ${I.status}`);
        n.value = ya(await I.json());
      } else
        throw new Error("No config-url or inline config provided.");
      Mp(n.value, a);
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
  const m = G(() => n.value ? n.value.sections.map((I) => ({
    section: I,
    fields: I.fields.filter(
      (A) => vs(A, u.value)
    )
  })).filter((I) => I.fields.length > 0) : []), g = G(
    () => m.value.flatMap((I) => I.fields)
  ), y = G(() => n.value ? jr(n.value, {
    selections: a,
    file: o.value
  }) : null), x = G(() => {
    if (!n.value)
      return;
    const I = ni(n.value, a, o.value);
    if (I != null && I.nextBreakHint)
      return vp(n.value, { selections: a, file: o.value });
  });
  function E(I, A) {
    var ce;
    const D = (ce = n.value) == null ? void 0 : ce.sections.flatMap((fe) => fe.fields).find((fe) => fe.id === I);
    (D == null ? void 0 : D.type) === "quantity" && typeof A == "number" ? a[I] = Gn(D, A) : (D == null ? void 0 : D.type) === "quantities" ? a[I] = It(D, A) : a[I] = A;
  }
  function _(I, A) {
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
      const D = await $p(t.uploadEndpoint, A, t.turnstileUrl);
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
        const fe = await Ep(ce, D.fileId);
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
    visibleFields: g,
    price: y,
    nextBreak: x,
    /** The connected data-feed provider config, if any. */
    get provider() {
      return t.provider;
    },
    load: d,
    reload: f,
    select: E,
    toggle: _,
    handleFile: W,
    feedMetadata: V,
    setFile: F
  };
}
function Mp(e, t) {
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
function Rp() {
  const e = /* @__PURE__ */ Bt(/* @__PURE__ */ new Map()), t = G(
    () => Array.from(e, ([s, a]) => ({ key: s, message: a.message }))
  ), n = G(() => e.size > 0);
  function i(s, a) {
    const o = e.get(s);
    o && o.message === a || e.set(s, { message: a });
  }
  function r(s) {
    e.delete(s);
  }
  return { list: t, held: n, add: i, release: r };
}
const Dr = 1, An = "[print-configurator]";
function Fp(e) {
  const { host: t, cfg: n, validation: i, holds: r, producers: s } = e;
  function a(O) {
    return O === void 0 ? O : JSON.parse(JSON.stringify(O));
  }
  const o = G(() => !n.schema.value || !n.price.value ? null : {
    apiVersion: Dr,
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
    const re = [], ge = /* @__PURE__ */ new Set([
      ...Object.keys(O.selections),
      ...Object.keys(j.selections)
    ]);
    for (const ze of ge)
      Yt(O.selections[ze], j.selections[ze]) || re.push(`selections.${ze}`);
    return O.quantity !== j.quantity && re.push("quantity"), Yt(O.price, j.price) || re.push("price"), Yt(O.file, j.file) || re.push("file"), Yt(O.holds, j.holds) || re.push("holds"), O.valid !== j.valid && re.push("valid"), re;
  }
  let d = null;
  function f(O) {
    d = (O == null ? void 0 : O.source) ?? "api";
  }
  function m() {
    qi(() => {
      d = null;
    });
  }
  bt(o, (O) => {
    if (!c || !O)
      return;
    const j = u(l, O), re = d ?? "user";
    l = O, j.length !== 0 && g("change", { ...O, source: re, changed: j });
  });
  function g(O, j) {
    t == null || t.dispatchEvent(
      new CustomEvent(O, { detail: j, bubbles: !0, composed: !0 })
    );
  }
  function y() {
    l = o.value, c = !0, l && g("ready", {
      ...l,
      source: "user"
    });
  }
  function x(O) {
    return O.sections.flatMap((j) => j.fields);
  }
  function E(O) {
    const j = n.schema.value;
    if (!j)
      return null;
    const re = x(j);
    return re.find((ge) => ge.id === O) ?? re.find((ge) => ge.role === O) ?? /* Several quantity fields may exist (one per paper group, say);
    "the quantity field" is the one currently in play. */
    (O === "quantity" ? ni(j, n.selections, n.file.value) : void 0) ?? re.find(
      (ge) => (O === "quantity" || O === "dimensions" || O === "file") && ge.type === O
    ) ?? null;
  }
  function _(O, j) {
    switch (O.type) {
      case "select-one":
        return typeof j == "string" && O.options.some((re) => re.id === j);
      case "select-many":
        return Array.isArray(j) && j.every(
          (re) => typeof re == "string" && O.options.some((ge) => ge.id === re)
        );
      case "quantity":
      case "number":
        return typeof j == "number" && Number.isFinite(j);
      case "quantities":
        return typeof j == "object" && j !== null && !Array.isArray(j) && Object.entries(j).every(
          ([re, ge]) => O.options.some((ze) => ze.id === re) && typeof ge == "number" && Number.isFinite(ge) && ge >= 0
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
    const re = n.schema.value, ge = re ? x(re).find((ze) => ze.id === O) : null;
    return ge ? _(ge, j) ? Yt(n.selections[O], j) ? !1 : (n.select(O, j), i.touch(O), !0) : (console.warn(
      `${An} setSelection: invalid value for "${O}" (${ge.type})`,
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
    for (const [re, ge] of Object.entries(O))
      W(re, ge);
    m();
  }
  function I() {
    const O = n.schema.value;
    return O ? x(O).find((j) => j.type === "file") ?? null : null;
  }
  function A(O) {
    const j = I();
    !j || n.selections[j.id] === O || (n.select(j.id, O), i.touch(j.id));
  }
  function D(O, j) {
    if (O === null) {
      const we = I(), ye = we ? !jp(n.selections[we.id]) : !1;
      if (n.file.value === void 0 && !ye)
        return;
      f(j), n.setFile(void 0), A(""), m();
      return;
    }
    const re = ms.safeParse({
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
    const ge = I(), ze = Yt(n.file.value, re.data), Ne = !ge || n.selections[ge.id] === re.data.fileId;
    ze && Ne || (f(j), ze || n.setFile(re.data), A(re.data.fileId), m());
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
    notifyReady: y,
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
      apiVersion: Dr
    }
  };
}
function jp(e) {
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
const wa = "[print-configurator]", Lr = 10;
function Dp(e) {
  const t = /* @__PURE__ */ Bt(/* @__PURE__ */ new Map()), n = G(
    () => Array.from(t.values()).sort((o, l) => o.order - l.order)
  );
  function i(o, l) {
    if (typeof o != "string" || o === "") {
      console.warn(`${wa} registerProducer: a non-empty string id is required`);
      return;
    }
    const c = l == null ? void 0 : l.label;
    if (typeof c != "string" || c === "") {
      console.warn(`${wa} registerProducer: "${o}" needs a label`);
      return;
    }
    t.set(o, {
      id: o,
      label: c,
      description: l.description,
      /* Default behind the built-in upload: the merchant's own file is
         the expected answer, an alternative producer is the offer. */
      order: Number.isFinite(l.order) ? Number(l.order) : Lr + 10,
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
          apiVersion: Dr,
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
const pl = {
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
  /** A picked or dropped file the field's "Accepted types" rule out. */
  "upload.wrongType": "Accepted file types: {formats}",
  /** Label of the file's download link on the cart line and order. */
  "upload.downloadLink": "Download file",
  "artwork.or": "or",
  "artwork.change": "Change",
  "artwork.remove": "Remove",
  /** Shown for a producer-made design that carries no name of its own. */
  "artwork.designName": "Your design",
  "artwork.label": "Design",
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
}, Lp = {
  base: "summary.basePrice",
  "setup-fee": "summary.setupFee",
  "adjustment:minimum": "summary.minimumAdjustment"
};
function zp(e, t) {
  const n = Lp[t.sourceId];
  return n ? e(n) : t.label;
}
function qp(e, t) {
  return t ? e.replace(
    /\{(\w+)\}/g,
    (n, i) => i in t ? String(t[i]) : n
  ) : e;
}
function hl(e) {
  const t = () => typeof e == "function" ? e() : e;
  return {
    t(n, i) {
      var a;
      const r = (a = t()) == null ? void 0 : a[n], s = typeof r == "string" && r !== "" ? r : pl[n];
      return qp(s, i);
    }
  };
}
function Up(e) {
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
    i in pl && typeof r == "string" && (n[i] = r);
  return n;
}
const xs = hl(), ml = Symbol("print-configurator-strings");
function lt() {
  return Ut(ml, xs);
}
function Vp(e, t, n, i = xs.t) {
  const r = /* @__PURE__ */ Bt(/* @__PURE__ */ new Set()), s = { value: !1 }, a = G(() => {
    const f = [];
    for (const m of e.value) {
      const g = Bp(m, t, i);
      g && f.push({ fieldId: m.id, message: g });
    }
    return f;
  }), o = G(
    () => {
      var f;
      return a.value.length === 0 && !(((f = n.value) == null ? void 0 : f.unavailable) ?? !1);
    }
  );
  function l(f) {
    var m;
    if (!(!r.has(f) && !s.value))
      return (m = a.value.find((g) => g.fieldId === f)) == null ? void 0 : m.message;
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
function Bp(e, t, n = xs.t) {
  const i = t[e.id];
  if (e.type === "quantities") {
    const s = bs(It(e, i));
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
    const s = ka(i.unit) / ka(e.defaultUnit), a = i.w * s, o = i.h * s;
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
function ka(e) {
  switch (e) {
    case "mm":
      return 1;
    case "cm":
      return 10;
    case "in":
      return 25.4;
  }
}
const Zp = /* @__PURE__ */ new Set([
  "left",
  "right",
  "left_space",
  "right_space"
]);
function Hp(e) {
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
  return typeof n.position == "string" && Zp.has(n.position) && (i.position = n.position), typeof n.decimals == "number" && Number.isInteger(n.decimals) && n.decimals >= 0 && n.decimals <= 8 && (i.decimals = n.decimals), typeof n.thousandSeparator == "string" && (i.thousandSeparator = n.thousandSeparator), typeof n.decimalSeparator == "string" && (i.decimalSeparator = n.decimalSeparator), i;
}
function gl(e) {
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
function Wp(e, t, n, i) {
  if (i)
    return Kp(e, i);
  try {
    return new Intl.NumberFormat(gl(n) ?? "en", {
      style: "currency",
      currency: t
    }).format(e);
  } catch {
    return `${t} ${e.toFixed(2)}`;
  }
}
function Kp(e, t) {
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
function Gp(e, t, n) {
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
function Qp(e, t, n) {
  const i = Qo(t), r = n.rate / 100;
  if (n.mode === "exclusive") {
    const o = ln(e, i), l = ln(o * r, i);
    return { net: o, tax: l, gross: ln(o + l, i) };
  }
  const s = ln(e, i), a = ln(s - s / (1 + r), i);
  return { net: ln(s - a, i), tax: a, gross: s };
}
function Sa(e, t) {
  try {
    return new Intl.NumberFormat(gl(t) ?? "en", {
      maximumFractionDigits: 3
    }).format(e);
  } catch {
    return String(e);
  }
}
function Wi(e, t) {
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
const Yp = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Jp = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], Xp = {
  key: 0,
  class: "check",
  "aria-hidden": "true"
}, eh = ["src"], th = { class: "card-label" }, nh = {
  key: 2,
  class: "card-description"
}, Ta = /* @__PURE__ */ Ce({
  __name: "ChoiceCards",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Wi(
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
        a(d.id) ? (b(), w("span", Xp, "✓")) : ae("", !0),
        d.image ? (b(), w("img", {
          key: 1,
          src: d.image,
          alt: ""
        }, null, 8, eh)) : ae("", !0),
        M("span", th, q(d.label), 1),
        d.description ? (b(), w("span", nh, q(d.description), 1)) : ae("", !0)
      ], 42, Jp))), 128))
    ], 10, Yp));
  }
}), ih = ["id", "value", "aria-labelledby", "aria-describedby", "aria-invalid"], rh = {
  key: 0,
  value: "",
  disabled: ""
}, sh = ["value", "disabled"], ah = /* @__PURE__ */ Ce({
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
      e.selectedIds.length ? ae("", !0) : (b(), w("option", rh, q(e.field.label ? N(r)("choice.placeholder", { label: e.field.label.toLowerCase() }) : N(r)("choice.placeholderBare")), 1)),
      (b(!0), w(oe, null, Me(e.field.options, (l) => (b(), w("option", {
        key: l.id,
        value: l.id,
        disabled: n.unavailableIds.includes(l.id)
      }, q(l.label), 9, sh))), 128))
    ], 40, ih));
  }
}), oh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], lh = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], ch = { key: 0 }, uh = { class: "choice-body" }, dh = { class: "choice-title" }, fh = {
  key: 0,
  class: "choice-description"
}, ph = /* @__PURE__ */ Ce({
  __name: "ChoiceList",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Wi(
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
          a(d.id) ? (b(), w("span", ch, "✓")) : ae("", !0)
        ], 2),
        M("span", uh, [
          M("span", dh, q(d.label), 1),
          d.description ? (b(), w("span", fh, q(d.description), 1)) : ae("", !0)
        ])
      ], 42, lh))), 128))
    ], 8, oh));
  }
}), hh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], mh = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], gh = {
  key: 0,
  "aria-hidden": "true"
}, yh = /* @__PURE__ */ Ce({
  __name: "ChoicePills",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Wi(
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
        is(q(d.label) + " ", 1),
        a(d.id) ? (b(), w("span", gh, "✓")) : ae("", !0)
      ], 42, mh))), 128))
    ], 8, hh));
  }
}), vh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], bh = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], xh = {
  key: 0,
  class: "swatch-check",
  "aria-hidden": "true"
}, _h = {
  key: 0,
  class: "swatch-selected-label",
  "aria-hidden": "true"
}, wh = /* @__PURE__ */ Ce({
  __name: "ChoiceSwatches",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Wi(
      () => n.field.options,
      () => n.selectedIds
    );
    function a(u) {
      return n.selectedIds.includes(u);
    }
    function o(u) {
      return n.unavailableIds.includes(u);
    }
    const l = G(
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
          onClick: (g) => !o(f.id) && i("pick", f.id),
          onKeydown: (g) => c(g, m)
        }, [
          a(f.id) ? (b(), w("span", xh, "✓")) : ae("", !0)
        ], 46, bh))), 128))
      ], 8, vh),
      l.value ? (b(), w("p", _h, q(l.value), 1)) : ae("", !0)
    ]));
  }
}), Ca = {
  cards: Ta,
  grid: Ta,
  swatches: wh,
  pills: yh,
  dropdown: ah,
  list: ph
}, Ki = Symbol("print-configurator"), kh = ["data-field-id", "data-type"], Sh = ["id"], Th = {
  key: 0,
  class: "req",
  "aria-hidden": "true"
}, Ch = {
  key: 1,
  class: "help",
  part: "field-help"
}, Ah = ["id"], $h = /* @__PURE__ */ Ce({
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
        is(q(e.field.label) + " ", 1),
        e.field.required ? (b(), w("span", Th, "*")) : ae("", !0)
      ], 8, Sh)) : ae("", !0),
      e.field.helpText ? (b(), w("p", Ch, q(e.field.helpText), 1)) : ae("", !0),
      Ic(i.$slots, "default"),
      e.error ? (b(), w("p", {
        key: 2,
        id: `pc-error-${e.field.id}`,
        class: "field-error",
        part: "field-error",
        role: "status"
      }, q(e.error), 9, Ah)) : ae("", !0)
    ], 8, kh));
  }
}), Ih = ["aria-labelledby"], Nh = ["part", "aria-checked", "onClick"], Eh = ["value", "aria-label"], Oh = ["value"], Ph = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Mh = {
  key: 3,
  class: "stepper",
  part: "stepper"
}, Rh = ["aria-label", "disabled"], Fh = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], jh = ["aria-label", "disabled"], Dh = /* @__PURE__ */ Ce({
  __name: "QuantityInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = G(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue
    ), { t: s } = lt(), a = G(() => n.field.label ?? s("quantity.label"));
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
      const g = Number(m);
      Gn(n.field, g) === g && o(g);
    }
    function u(f) {
      const m = f.target;
      o(m.value === "" ? n.field.defaultValue : Number(m.value)), m.value = String(r.value);
    }
    function d(f) {
      u(f);
    }
    return (f, m) => {
      var g, y;
      return e.field.display === "pills" && ((g = e.field.presets) != null && g.length) ? (b(), w("div", {
        key: 0,
        class: "pills",
        role: "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0
      }, [
        (b(!0), w(oe, null, Me(e.field.presets, (x) => (b(), w("button", {
          key: x,
          type: "button",
          class: Ke(["pill", { active: r.value === x }]),
          part: r.value === x ? "choice pill choice-selected" : "choice pill",
          role: "radio",
          "aria-checked": r.value === x,
          onClick: (E) => o(x)
        }, q(x), 11, Nh))), 128))
      ], 8, Ih)) : e.field.display === "dropdown" && ((y = e.field.presets) != null && y.length) ? (b(), w("select", {
        key: 1,
        class: "dropdown",
        part: "dropdown",
        value: String(r.value),
        "aria-label": a.value,
        onChange: m[0] || (m[0] = (x) => o(Number(x.target.value)))
      }, [
        (b(!0), w(oe, null, Me(e.field.presets, (x) => (b(), w("option", {
          key: x,
          value: String(x)
        }, q(x), 9, Oh))), 128))
      ], 40, Eh)) : e.field.display === "input" ? (b(), w("input", {
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
        onKeydown: kr(Zn(d, ["prevent"]), ["enter"])
      }, null, 40, Ph)) : (b(), w("div", Mh, [
        M("button", {
          type: "button",
          part: "stepper-decrement",
          "aria-label": N(s)("stepper.decrease", { label: a.value.toLowerCase() }),
          disabled: r.value <= e.field.min,
          onClick: m[1] || (m[1] = (x) => l(-1))
        }, " − ", 8, Rh),
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
          onKeydown: kr(Zn(d, ["prevent"]), ["enter"])
        }, null, 40, Fh),
        M("button", {
          type: "button",
          part: "stepper-increment",
          "aria-label": N(s)("stepper.increase", { label: a.value.toLowerCase() }),
          disabled: e.field.max !== void 0 && r.value >= e.field.max,
          onClick: m[2] || (m[2] = (x) => l(1))
        }, " + ", 8, jh)
      ]));
    };
  }
}), Lh = ["aria-labelledby", "aria-describedby"], zh = ["part"], qh = { class: "quantities-name" }, Uh = ["src"], Vh = {
  class: "quantities-label",
  part: "quantities-label"
}, Bh = {
  class: "stepper",
  part: "stepper"
}, Zh = ["aria-label", "disabled", "onClick"], Hh = ["value", "max", "step", "disabled", "aria-label", "onInput", "onBlur", "onKeydown"], Wh = ["aria-label", "disabled", "onClick"], Kh = {
  class: "quantities-total",
  part: "quantities-total",
  "aria-live": "polite"
}, Gh = /* @__PURE__ */ Ce({
  __name: "QuantitiesInput",
  props: {
    field: { type: null },
    value: { type: null },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = lt(), s = G(() => It(n.field, n.value)), a = G(() => bs(s.value)), o = G(() => {
      var E;
      const x = (E = n.field.unit) == null ? void 0 : E.trim();
      return x ? `${a.value} ${x}` : String(a.value);
    });
    function l(x) {
      return s.value[x] ?? 0;
    }
    function c(x) {
      return n.unavailableIds.includes(x);
    }
    function u(x) {
      const E = l(x);
      return E === 0 ? n.field.min : E + n.field.step;
    }
    function d(x) {
      if (c(x))
        return !1;
      const E = u(x), { max: _, maxTotal: W } = n.field;
      return _ !== void 0 && E > _ ? !1 : W === void 0 || a.value - l(x) + E <= W;
    }
    function f(x, E) {
      const _ = { ...s.value, [x]: E };
      i("select", It(n.field, _)), i("touch");
    }
    function m(x, E) {
      if (E === 1) {
        f(x, u(x));
        return;
      }
      const _ = l(x) - n.field.step;
      f(x, _ < n.field.min ? 0 : _);
    }
    function g(x, E) {
      const _ = E.target.value;
      if (_ === "")
        return;
      const W = Number(_);
      (It(n.field, { [x]: W })[x] ?? 0) === W && f(x, W);
    }
    function y(x, E) {
      const _ = E.target;
      f(x, _.value === "" ? 0 : Number(_.value)), _.value = String(l(x));
    }
    return (x, E) => (b(), w(oe, null, [
      M("div", {
        class: Ke(["quantities", e.field.display === "list" ? "quantities-list" : "quantities-grid"]),
        part: "quantities",
        role: "group",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0
      }, [
        (b(!0), w(oe, null, Me(e.field.options, (_) => (b(), w("div", {
          key: _.id,
          class: Ke(["quantities-item", { active: l(_.id) > 0, off: c(_.id) }]),
          part: l(_.id) > 0 ? "quantities-item quantities-item-active" : "quantities-item"
        }, [
          M("span", qh, [
            _.color ? (b(), w("span", {
              key: 0,
              class: "quantities-swatch",
              style: Jn({ background: _.color }),
              "aria-hidden": "true"
            }, null, 4)) : _.image ? (b(), w("img", {
              key: 1,
              class: "quantities-image",
              src: _.image,
              alt: ""
            }, null, 8, Uh)) : ae("", !0),
            M("span", Vh, q(_.label), 1)
          ]),
          M("div", Bh, [
            M("button", {
              type: "button",
              part: "stepper-decrement",
              "aria-label": N(r)("stepper.decrease", { label: _.label }),
              disabled: l(_.id) === 0,
              onClick: (W) => m(_.id, -1)
            }, " − ", 8, Zh),
            M("input", {
              class: "stepper-value",
              part: "stepper-input",
              type: "number",
              inputmode: "numeric",
              value: l(_.id),
              min: "0",
              max: e.field.max,
              step: e.field.step,
              disabled: c(_.id) && l(_.id) === 0,
              "aria-label": _.label,
              onInput: (W) => g(_.id, W),
              onBlur: (W) => y(_.id, W),
              onKeydown: kr(Zn((W) => y(_.id, W), ["prevent"]), ["enter"])
            }, null, 40, Hh),
            M("button", {
              type: "button",
              part: "stepper-increment",
              "aria-label": N(r)("stepper.increase", { label: _.label }),
              disabled: !d(_.id),
              onClick: (W) => m(_.id, 1)
            }, " + ", 8, Wh)
          ])
        ], 10, zh))), 128))
      ], 10, Lh),
      M("p", Kh, q(N(r)("quantities.total", { count: o.value })), 1)
    ], 64));
  }
}), Qh = {
  key: 0,
  class: "slider-row"
}, Yh = ["value", "min", "max", "step", "aria-label"], Jh = {
  class: "slider-value",
  "aria-hidden": "true"
}, Xh = {
  key: 1,
  class: "stepper",
  part: "stepper"
}, em = ["aria-label", "disabled"], tm = ["value", "min", "max", "step", "aria-label"], nm = ["aria-label", "disabled"], im = ["value", "min", "max", "step", "aria-label", "aria-describedby", "aria-invalid"], rm = /* @__PURE__ */ Ce({
  __name: "NumberInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = G(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue ?? 0
    ), { t: s } = lt(), a = G(() => n.field.label ?? n.field.id);
    function o(l) {
      Number.isNaN(l) || (i("select", l), i("touch"));
    }
    return (l, c) => e.field.display === "slider" ? (b(), w("div", Qh, [
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
      }, null, 40, Yh),
      M("span", Jh, q(r.value), 1)
    ])) : e.field.display === "stepper" ? (b(), w("div", Xh, [
      M("button", {
        type: "button",
        part: "stepper-decrement",
        "aria-label": N(s)("stepper.decrease", { label: a.value.toLowerCase() }),
        disabled: e.field.min !== void 0 && r.value <= e.field.min,
        onClick: c[1] || (c[1] = (u) => o(r.value - (e.field.step ?? 1)))
      }, " − ", 8, em),
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
      }, null, 40, tm),
      M("button", {
        type: "button",
        part: "stepper-increment",
        "aria-label": N(s)("stepper.increase", { label: a.value.toLowerCase() }),
        disabled: e.field.max !== void 0 && r.value >= e.field.max,
        onClick: c[4] || (c[4] = (u) => o(r.value + (e.field.step ?? 1)))
      }, " + ", 8, nm)
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
    }, null, 40, im));
  }
}), sm = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], am = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], om = /* @__PURE__ */ Ce({
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
    }, null, 40, sm)) : (b(), w("input", {
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
    }, null, 40, am));
  }
}), lm = {
  class: "dimensions",
  part: "dimensions"
}, cm = { class: "dim-input" }, um = { class: "dim-label" }, dm = ["value", "aria-describedby", "aria-invalid"], fm = { class: "dim-input" }, pm = { class: "dim-label" }, hm = ["value", "aria-describedby", "aria-invalid"], mm = ["value", "aria-label"], gm = ["value"], ym = {
  key: 1,
  class: "dim-unit-static"
}, vm = /* @__PURE__ */ Ce({
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
    return (c, u) => (b(), w("div", lm, [
      M("label", cm, [
        M("span", um, q(N(r)("dimensions.width")), 1),
        M("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(N(a).w) ? "" : N(a).w,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[0] || (u[0] = (d) => o({ w: l(d) }))
        }, null, 40, dm)
      ]),
      u[3] || (u[3] = M("span", {
        class: "dim-times",
        "aria-hidden": "true"
      }, "×", -1)),
      M("label", fm, [
        M("span", pm, q(N(r)("dimensions.height")), 1),
        M("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(N(a).h) ? "" : N(a).h,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[1] || (u[1] = (d) => o({ h: l(d) }))
        }, null, 40, hm)
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
        }, q(d), 9, gm))), 128))
      ], 40, mm)) : (b(), w("span", ym, q(e.field.defaultUnit), 1))
    ]));
  }
});
function bm(e) {
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
  return ms.parse(s);
}
const xm = ["aria-busy"], _m = ["id", "accept", "aria-labelledby", "aria-describedby", "aria-invalid"], wm = ["for"], km = {
  key: 0,
  class: "upload-status"
}, Sm = { class: "upload-filename" }, Tm = { class: "upload-hint" }, Cm = { class: "upload-title" }, Am = { class: "upload-hint" }, $m = {
  key: 0,
  class: "upload-wrong-type",
  part: "upload-wrong-type",
  role: "alert"
}, Im = /* @__PURE__ */ Ce({
  __name: "FileUpload",
  props: {
    field: { type: null },
    file: { type: null },
    analyzing: { type: Boolean },
    error: { type: String }
  },
  emits: ["file", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = lt(), s = /* @__PURE__ */ Ue(!1), a = G(() => n.field.accept.join(", ")), o = G(() => Gf(n.field.accept) || void 0), l = /* @__PURE__ */ Ue();
    function c(f) {
      f && (Qf(n.field.accept, f.name) ? (l.value = void 0, i("file", n.field, f)) : l.value = r("upload.wrongType", {
        formats: Yf(n.field.accept)
      })), i("touch");
    }
    function u(f) {
      var g;
      const m = f.target;
      c((g = m.files) == null ? void 0 : g[0]), m.value = "";
    }
    function d(f) {
      var m, g;
      s.value = !1, c((g = (m = f.dataTransfer) == null ? void 0 : m.files) == null ? void 0 : g[0]);
    }
    return (f, m) => (b(), w("div", {
      class: Ke(["upload", { dragging: s.value, done: !!e.file }]),
      part: "upload",
      "aria-busy": e.analyzing || void 0,
      onDragover: m[0] || (m[0] = Zn((g) => s.value = !0, ["prevent"])),
      onDragleave: m[1] || (m[1] = (g) => s.value = !1),
      onDrop: Zn(d, ["prevent"])
    }, [
      M("input", {
        id: `pc-control-${e.field.id}`,
        class: "upload-input",
        part: "upload-input",
        type: "file",
        accept: o.value,
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0,
        onChange: u
      }, null, 40, _m),
      M("label", {
        class: "upload-zone",
        for: `pc-control-${e.field.id}`
      }, [
        e.analyzing ? (b(), w("span", km, q(N(r)("upload.analyzing")), 1)) : e.file ? (b(), w(oe, { key: 1 }, [
          M("span", Sm, q(e.file.fileName ?? e.file.fileId), 1),
          M("span", Tm, q(N(r)("upload.replace")), 1)
        ], 64)) : (b(), w(oe, { key: 2 }, [
          M("span", Cm, q(N(r)("upload.drop")), 1),
          M("span", Am, q(a.value), 1)
        ], 64))
      ], 8, wm),
      l.value ? (b(), w("p", $m, q(l.value), 1)) : ae("", !0)
    ], 42, xm));
  }
}), Nm = "https://cdn.filecheck.io/element/v1/filecheck.js", Em = 1e4;
let $n = null;
function Om(e = Nm) {
  return typeof window < "u" && window.Filecheck ? Promise.resolve(window.Filecheck) : $n || ($n = new Promise((t, n) => {
    const i = (a) => {
      $n = null, r.remove(), n(new Error(a));
    }, r = document.createElement("script");
    r.src = e, r.async = !0;
    const s = setTimeout(
      () => i("Filecheck SDK load timed out."),
      Em
    );
    r.addEventListener("load", () => {
      clearTimeout(s), window.Filecheck ? t(window.Filecheck) : i("Filecheck SDK loaded but window.Filecheck is missing.");
    }), r.addEventListener("error", () => {
      clearTimeout(s), i("Filecheck SDK failed to load.");
    }), document.head.appendChild(r);
  }), $n);
}
const Pm = { mm: 1, cm: 10, in: 25.4 }, Mm = [
  "artworkSize",
  "pageCount",
  "fileCount",
  "bleed",
  "safety"
];
function Rm(e, t) {
  var r, s;
  const n = [];
  for (const a of e) {
    const o = t[a.id];
    if (!(o === void 0 || o === "")) {
      if (a.type === "dimensions" && it(o)) {
        const l = Pm[o.unit] ?? 1;
        n.push({
          artworkSize: {
            width_mm: Aa(o.w * l),
            height_mm: Aa(o.h * l)
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
    for (const o of Mm) {
      const l = a[o];
      l && (i[o] = { ...i[o] ?? {}, ...l });
    }
  return i;
}
function Aa(e) {
  return Math.round(e * 10) / 10;
}
const Fm = {
  class: "fc-upload",
  part: "upload"
}, jm = {
  key: 0,
  class: "fc-panel fc-unconfigured"
}, Dm = {
  key: 1,
  class: "fc-panel fc-error",
  role: "alert"
}, Lm = { class: "fc-panel-title" }, zm = { class: "fc-panel-hint" }, qm = {
  key: 0,
  class: "fc-loading"
}, Um = {
  key: 1,
  class: "field-error",
  role: "status"
}, Vm = /* @__PURE__ */ Ce({
  __name: "FilecheckUpload",
  props: {
    field: { type: null },
    provider: { type: null }
  },
  emits: ["metadata", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = lt(), s = /* @__PURE__ */ Ue(null), a = /* @__PURE__ */ Ue(
      n.provider.publishableKey ? "loading" : "unconfigured"
    ), o = /* @__PURE__ */ Ue("");
    let l = null, c = null;
    const u = Ut(Ki, null), d = G(() => {
      var x;
      if (!u)
        return null;
      const y = ((x = u.cfg.visibleFields) == null ? void 0 : x.value) ?? [];
      return Rm(y, u.cfg.selections);
    });
    bt(d, (y) => {
      var x;
      (x = l == null ? void 0 : l.setContext) == null || x.call(l, y ?? null);
    });
    async function f() {
      var _, W, V;
      const y = n.provider.publishableKey, x = (_ = n.field.filecheck) == null ? void 0 : _.workflowId, E = (W = n.field.filecheck) != null && W.workflow ? /* @__PURE__ */ pe(n.field.filecheck.workflow) : void 0;
      if (!y || !x && !E) {
        a.value = "unconfigured";
        return;
      }
      a.value = "loading", o.value = "";
      try {
        const F = await Om(n.provider.scriptUrl);
        if (!s.value)
          return;
        l = F(y, {
          agentId: n.provider.agentId,
          iframeSrc: n.provider.iframeSrc
        }).elements.create("intake", {
          // An inline workflow wins: it is the blueprint author's exact
          // intent, and demo blueprints rely on it to run against any
          // tenant with nothing saved in the Filecheck admin.
          ...E ? { workflow: E } : { workflowId: x },
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
    function g() {
      m(), f();
    }
    return Xr(() => {
      f();
    }), bt(
      () => {
        var y, x;
        return [
          n.provider.publishableKey,
          n.provider.scriptUrl,
          n.provider.iframeSrc,
          n.provider.agentId,
          (y = n.field.filecheck) == null ? void 0 : y.workflowId,
          (x = n.field.filecheck) == null ? void 0 : x.workflow
        ];
      },
      () => {
        m(), f();
      }
    ), lo(m), (y, x) => (b(), w("div", Fm, [
      a.value === "unconfigured" ? (b(), w("div", jm, [...x[0] || (x[0] = [
        M("span", { class: "fc-panel-title" }, "Filecheck upload", -1),
        M("span", { class: "fc-panel-hint" }, " Add your Filecheck publishable key in the store settings (or preview settings) to activate validated uploads for this field. ", -1)
      ])])) : a.value === "error" ? (b(), w("div", Dm, [
        M("span", Lm, q(N(r)("upload.unavailable")), 1),
        M("span", zm, q(o.value), 1),
        M("button", {
          type: "button",
          class: "fc-retry",
          onClick: g
        }, q(N(r)("upload.retry")), 1)
      ])) : (b(), w(oe, { key: 2 }, [
        a.value === "loading" ? (b(), w("p", qm, q(N(r)("upload.secureLoading")), 1)) : ae("", !0),
        M("div", {
          ref_key: "slot",
          ref: s,
          class: "fc-slot"
        }, null, 512),
        o.value ? (b(), w("p", Um, q(o.value), 1)) : ae("", !0)
      ], 64))
    ]));
  }
}), Bm = {
  key: 0,
  class: "artwork",
  part: "artwork"
}, Zm = { class: "artwork-body" }, Hm = {
  class: "artwork-name",
  part: "artwork-name"
}, Wm = {
  key: 0,
  class: "artwork-meta",
  part: "artwork-meta"
}, Km = { class: "artwork-actions" }, Gm = {
  key: 1,
  class: "producers"
}, Qm = {
  key: 0,
  class: "producer-or",
  "aria-hidden": "true"
}, Ym = ["onClick"], Jm = { class: "producer-label" }, Xm = {
  key: 0,
  class: "producer-description"
}, eg = {
  key: 1,
  class: "producer-or",
  "aria-hidden": "true"
}, tg = {
  class: "producer-or",
  "aria-hidden": "true"
}, ng = ["onClick"], ig = { class: "producer-label" }, rg = {
  key: 0,
  class: "producer-description"
}, sg = /* @__PURE__ */ Ce({
  __name: "ArtworkField",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e) {
    const t = e, n = Ut(Ki);
    if (!n)
      throw new Error("ArtworkField must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r, producers: s } = n, { t: a } = lt(), o = G(
      () => {
        var F, I, A;
        return t.field.providerId === "filecheck" && !!((F = t.field.filecheck) != null && F.workflowId || (I = t.field.filecheck) != null && I.workflow) && ((A = i.provider) == null ? void 0 : A.mode) === "element";
      }
    ), l = G(() => {
      const F = i.schema.value;
      if (!F)
        return !1;
      for (const I of F.sections)
        for (const A of I.fields)
          if (A.type === "file")
            return A.id === t.field.id;
      return !1;
    }), c = G(
      () => s.forField(t.field.id, l.value)
    ), u = G(() => {
      const F = i.selections[t.field.id];
      return typeof F == "string" && F !== "";
    }), d = G(() => {
      var I;
      const F = (I = i.file.value) == null ? void 0 : I.source;
      return F ? c.value.find((A) => A.id === F) ?? null : null;
    }), f = G(() => u.value && !d.value), m = G(() => t.field.display === "producer"), g = G(
      () => m.value ? c.value : c.value.filter((F) => F.order < Lr)
    ), y = G(
      () => m.value ? [] : c.value.filter((F) => F.order >= Lr)
    ), x = G(() => {
      const F = i.file.value;
      return F ? F.fileName ? F.fileName : d.value ? a("artwork.designName") : F.fileId : "";
    }), E = G(() => {
      const F = i.file.value;
      if (!F)
        return "";
      const I = [], A = i.schema.value;
      return F.pages !== void 0 && A && Sp(A) && I.push(
        F.pages === 1 ? a("artwork.pageCountOne") : a("artwork.pageCount", { count: F.pages })
      ), F.canvas && I.push(`${F.canvas.w} × ${F.canvas.h} ${F.canvas.unit}`), I.join(" · ");
    });
    function _(F) {
      i.setFile(bm(F)), F.canProceed && F.jobId ? i.select(t.field.id, F.jobId) : i.select(t.field.id, "");
    }
    function W(F) {
      s.activate(F, t.field.id), r.touch(t.field.id);
    }
    function V() {
      i.setFile(void 0), i.select(t.field.id, ""), r.touch(t.field.id);
    }
    return (F, I) => d.value ? (b(), w("div", Bm, [
      M("div", Zm, [
        M("span", Hm, q(x.value), 1),
        E.value ? (b(), w("span", Wm, q(E.value), 1)) : ae("", !0)
      ]),
      M("div", Km, [
        M("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-change",
          onClick: I[0] || (I[0] = (A) => W(d.value.id))
        }, q(N(a)("artwork.change")), 1),
        M("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-remove",
          onClick: V
        }, q(N(a)("artwork.remove")), 1)
      ])
    ])) : (b(), w("div", Gm, [
      f.value ? ae("", !0) : (b(!0), w(oe, { key: 0 }, Me(g.value, (A, D) => (b(), w(oe, {
        key: A.id
      }, [
        m.value && D > 0 ? (b(), w("p", Qm, [
          M("span", null, q(N(a)("artwork.or")), 1)
        ])) : ae("", !0),
        M("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (ce) => W(A.id)
        }, [
          M("span", Jm, q(A.label), 1),
          A.description ? (b(), w("span", Xm, q(A.description), 1)) : ae("", !0)
        ], 8, Ym),
        m.value ? ae("", !0) : (b(), w("p", eg, [
          M("span", null, q(N(a)("artwork.or")), 1)
        ]))
      ], 64))), 128)),
      !m.value && o.value && N(i).provider ? (b(), Oe(Vm, {
        key: 1,
        field: e.field,
        provider: N(i).provider,
        onMetadata: _,
        onTouch: I[1] || (I[1] = (A) => N(r).touch(e.field.id))
      }, null, 8, ["field", "provider"])) : m.value ? ae("", !0) : (b(), Oe(Im, {
        key: 2,
        field: e.field,
        file: N(i).file.value,
        analyzing: N(i).fileAnalyzing.value,
        error: e.error,
        onFile: I[2] || (I[2] = (A, D) => N(i).handleFile(A, D)),
        onTouch: I[3] || (I[3] = (A) => N(r).touch(e.field.id))
      }, null, 8, ["field", "file", "analyzing", "error"])),
      f.value ? ae("", !0) : (b(!0), w(oe, { key: 3 }, Me(y.value, (A) => (b(), w(oe, {
        key: A.id
      }, [
        M("p", tg, [
          M("span", null, q(N(a)("artwork.or")), 1)
        ]),
        M("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (D) => W(A.id)
        }, [
          M("span", ig, q(A.label), 1),
          A.description ? (b(), w("span", rg, q(A.description), 1)) : ae("", !0)
        ], 8, ng)
      ], 64))), 128))
    ]));
  }
}), ag = {
  key: 0,
  class: "recap",
  part: "summary-recap"
}, og = { part: "recap-label" }, lg = { part: "recap-value" }, cg = {
  key: 1,
  class: "recap-empty"
}, ug = /* @__PURE__ */ Ce({
  __name: "SummaryPanel",
  props: {
    sections: { type: Array },
    selections: { type: Object },
    file: { type: null }
  },
  setup(e) {
    const t = e, { t: n } = lt(), i = G(
      () => fl(t.sections, t.selections, t.file, {
        quantityLabel: n("quantity.label"),
        artworkLabel: n("artwork.label"),
        designName: n("artwork.designName")
      })
    );
    return (r, s) => i.value.length ? (b(), w("dl", ag, [
      (b(!0), w(oe, null, Me(i.value, (a) => (b(), w("div", {
        key: a.fieldId,
        class: "recap-row",
        part: "recap-row"
      }, [
        M("dt", og, q(a.label), 1),
        M("dd", lg, q(a.value), 1)
      ]))), 128))
    ])) : (b(), w("p", cg, q(N(n)("recap.empty")), 1));
  }
}), dg = {
  key: 0,
  class: "info-note",
  part: "field-help"
}, fg = /* @__PURE__ */ Ce({
  __name: "InfoBlock",
  props: {
    field: { type: null }
  },
  setup(e) {
    return (t, n) => e.field.body ? (b(), w("p", dg, q(e.field.body), 1)) : ae("", !0);
  }
}), yl = /* @__PURE__ */ Ce({
  __name: "FieldHost",
  props: {
    field: { type: null }
  },
  setup(e) {
    const t = e, n = Ut(Ki);
    if (!n)
      throw new Error("FieldHost must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r } = n, s = G(() => i.selections[t.field.id]), a = G(() => r.errorFor(t.field.id)), o = G(() => {
      const u = s.value;
      return Array.isArray(u) ? u : typeof u == "string" && u !== "" ? [u] : [];
    }), l = G(() => {
      if (!jt(t.field) || !i.schema.value)
        return [];
      const u = i.schema.value;
      return t.field.options.filter(
        (d) => !fp(u, i.selections, t.field.id, d.id)
      ).map((d) => d.id);
    });
    function c(u) {
      t.field.type === "select-many" ? i.toggle(t.field, u) : i.select(t.field.id, u), r.touch(t.field.id);
    }
    return (u, d) => (b(), Oe($h, {
      field: e.field,
      error: a.value
    }, {
      default: no(() => [
        e.field.type === "select-one" || e.field.type === "select-many" ? (b(), Oe(Ac(N(Ca)[e.field.display] ?? N(Ca).pills), {
          key: 0,
          field: e.field,
          "selected-ids": o.value,
          "unavailable-ids": l.value,
          error: a.value,
          onPick: c
        }, null, 40, ["field", "selected-ids", "unavailable-ids", "error"])) : e.field.type === "quantity" ? (b(), Oe(Dh, {
          key: 1,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[0] || (d[0] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[1] || (d[1] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "quantities" ? (b(), Oe(Gh, {
          key: 2,
          field: e.field,
          value: s.value,
          "unavailable-ids": l.value,
          error: a.value,
          onSelect: d[2] || (d[2] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[3] || (d[3] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "unavailable-ids", "error"])) : e.field.type === "number" ? (b(), Oe(rm, {
          key: 3,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[4] || (d[4] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[5] || (d[5] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "text" ? (b(), Oe(om, {
          key: 4,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[6] || (d[6] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[7] || (d[7] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "dimensions" ? (b(), Oe(vm, {
          key: 5,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[8] || (d[8] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[9] || (d[9] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "file" ? (b(), Oe(sg, {
          key: 6,
          field: e.field,
          error: a.value
        }, null, 8, ["field", "error"])) : e.field.type === "info" && e.field.display === "summary" ? (b(), Oe(ug, {
          key: 7,
          sections: N(i).visibleSections.value,
          selections: N(i).selections,
          file: N(i).file.value
        }, null, 8, ["sections", "selections", "file"])) : e.field.type === "info" ? (b(), Oe(fg, {
          key: 8,
          field: e.field
        }, null, 8, ["field"])) : ae("", !0)
      ]),
      _: 1
    }, 8, ["field", "error"]));
  }
}), pg = {
  class: "section-title",
  part: "section-title"
}, hg = /* @__PURE__ */ Ce({
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
      M("h3", pg, q(i.section.title), 1),
      (b(!0), w(oe, null, Me(i.fields, (r) => (b(), Oe(yl, {
        key: r.id,
        field: r
      }, null, 8, ["field"]))), 128))
    ]))), 128));
  }
}), mg = { class: "wizard" }, gg = {
  class: "wizard-nav",
  part: "wizard-nav"
}, yg = ["part", "aria-current"], vg = ["onClick"], bg = {
  class: "wizard-step-index",
  "aria-hidden": "true"
}, xg = { class: "wizard-step-title" }, _g = {
  key: 0,
  class: "section",
  part: "section"
}, wg = { class: "wizard-actions" }, kg = /* @__PURE__ */ Ce({
  __name: "SectionWizard",
  props: {
    sections: { type: Array },
    issues: { type: Array }
  },
  emits: ["blocked"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n, { t: s } = lt(), a = /* @__PURE__ */ Ue(0), o = /* @__PURE__ */ Ue(null);
    bt(
      () => i.sections.length,
      (y) => {
        a.value > y - 1 && (a.value = Math.max(0, y - 1));
      }
    );
    const l = G(() => i.sections[a.value]), c = G(() => a.value >= i.sections.length - 1);
    function u(y) {
      const x = i.sections[y];
      if (!x)
        return [];
      const E = new Set(x.fields.map((_) => _.id));
      return i.issues.filter((_) => E.has(_.fieldId));
    }
    function d(y) {
      return y === a.value ? "active" : y < a.value && u(y).length === 0 ? "done" : "todo";
    }
    async function f(y) {
      var x;
      a.value = Math.max(0, Math.min(y, i.sections.length - 1)), await qi(), (x = o.value) == null || x.focus();
    }
    function m() {
      const y = u(a.value);
      if (y.length > 0) {
        r("blocked", y);
        return;
      }
      f(a.value + 1);
    }
    function g() {
      f(a.value - 1);
    }
    return t({ goTo: f, current: a }), (y, x) => (b(), w("div", mg, [
      M("ol", gg, [
        (b(!0), w(oe, null, Me(e.sections, (E, _) => (b(), w("li", {
          key: E.section.id,
          class: Ke(["wizard-step", d(_)]),
          part: `wizard-step wizard-step-${d(_)}`,
          "aria-current": _ === a.value ? "step" : void 0
        }, [
          M("button", {
            type: "button",
            class: "wizard-step-button",
            onClick: (W) => f(_)
          }, [
            M("span", bg, q(d(_) === "done" ? "✓" : _ + 1), 1),
            M("span", xg, q(E.section.title), 1)
          ], 8, vg)
        ], 10, yg))), 128))
      ]),
      l.value ? (b(), w("section", _g, [
        M("h3", {
          ref_key: "heading",
          ref: o,
          class: "section-title",
          part: "section-title",
          tabindex: "-1"
        }, q(l.value.section.title), 513),
        (b(!0), w(oe, null, Me(l.value.fields, (E) => (b(), Oe(yl, {
          key: E.id,
          field: E
        }, null, 8, ["field"]))), 128))
      ])) : ae("", !0),
      M("div", wg, [
        a.value > 0 ? (b(), w("button", {
          key: 0,
          type: "button",
          class: "wizard-back",
          part: "wizard-back",
          onClick: g
        }, q(N(s)("wizard.back")), 1)) : ae("", !0),
        c.value ? ae("", !0) : (b(), w("button", {
          key: 1,
          type: "button",
          class: "wizard-next",
          part: "wizard-next",
          onClick: m
        }, q(N(s)("wizard.continue")), 1))
      ])
    ]));
  }
}), Sg = {
  class: "summary",
  part: "summary"
}, Tg = { part: "summary-title" }, Cg = { class: "lines" }, Ag = { part: "summary-line-label" }, $g = { part: "summary-line-value" }, Ig = {
  class: "subtotal",
  part: "summary-net"
}, Ng = { part: "summary-net-label" }, Eg = { part: "summary-net-value" }, Og = {
  class: "tax-line",
  part: "summary-tax"
}, Pg = { part: "summary-tax-label" }, Mg = { part: "summary-tax-value" }, Rg = {
  class: "total",
  part: "summary-total",
  "aria-live": "polite",
  "aria-atomic": "true"
}, Fg = { part: "summary-total-label" }, jg = { part: "price" }, Dg = {
  key: 1,
  class: "tax-included",
  part: "summary-tax-included"
}, Lg = {
  key: 2,
  class: "unit-price",
  part: "summary-unit"
}, zg = {
  key: 3,
  class: "next-break",
  part: "summary-hint"
}, qg = {
  key: 4,
  class: "price-note",
  part: "summary-note"
}, Ug = {
  key: 5,
  class: "unavailable",
  role: "status"
}, Vg = ["disabled"], Bg = {
  class: "visually-hidden",
  role: "status"
}, Zg = /* @__PURE__ */ Ce({
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
    function s(g) {
      var y;
      return Wp(
        g,
        ((y = n.price) == null ? void 0 : y.currency) ?? "USD",
        n.locale,
        n.priceFormat
      );
    }
    const a = G(
      () => {
        var g;
        return (((g = n.price) == null ? void 0 : g.lines) ?? []).filter(
          (y) => !(y.amount === 0 && (y.stage === "base" || y.stage === "percent" || y.stage === "multiplier"))
        );
      }
    ), o = G(() => {
      var y;
      const g = n.nextBreak;
      if (!(!g || (y = n.price) != null && y.unavailable))
        return g.percentOff !== void 0 ? r("summary.nextBreakPercent", {
          count: g.add,
          percent: Sa(g.percentOff, n.locale)
        }) : r("summary.nextBreakPrice", { count: g.add, unitPrice: s(g.unitPrice) });
    }), l = G(
      () => {
        var g, y;
        return (((g = n.price) == null ? void 0 : g.quantity) ?? 1) > 1 && !((y = n.price) != null && y.unavailable);
      }
    ), c = G(() => {
      const g = n.price;
      if (!(!n.tax || !g || g.unavailable))
        return Qp(g.total, g.currency, n.tax);
    }), u = G(() => {
      var g, y;
      return {
        tax: ((g = n.tax) == null ? void 0 : g.name) ?? r("tax.name"),
        rate: Sa(((y = n.tax) == null ? void 0 : y.rate) ?? 0, n.locale)
      };
    }), d = G(() => {
      var g;
      return c.value !== void 0 && ((g = n.tax) == null ? void 0 : g.mode) === "exclusive";
    }), f = G(
      () => {
        var g, y;
        return d.value ? ((g = c.value) == null ? void 0 : g.gross) ?? 0 : ((y = n.price) == null ? void 0 : y.total) ?? 0;
      }
    ), m = G(() => {
      const g = n.price;
      return g ? d.value && g.quantity > 0 ? f.value / g.quantity : g.unitPrice : 0;
    });
    return (g, y) => {
      var x, E;
      return b(), w("aside", Sg, [
        M("h3", Tg, q(N(r)("summary.title")), 1),
        M("ul", Cg, [
          (b(!0), w(oe, null, Me(a.value, (_, W) => (b(), w("li", {
            key: W,
            part: "summary-line"
          }, [
            M("span", Ag, q(N(zp)(N(r), _)), 1),
            M("span", $g, q(s(_.amount)), 1)
          ]))), 128))
        ]),
        d.value && c.value ? (b(), w(oe, { key: 0 }, [
          M("div", Ig, [
            M("span", Ng, q(N(r)("summary.totalNet", u.value)), 1),
            M("span", Eg, q(s(c.value.net)), 1)
          ]),
          M("div", Og, [
            M("span", Pg, q(N(r)("summary.tax", u.value)), 1),
            M("span", Mg, q(s(c.value.tax)), 1)
          ])
        ], 64)) : ae("", !0),
        M("div", Rg, [
          M("span", Fg, q(d.value ? N(r)("summary.totalGross", u.value) : N(r)("summary.total")), 1),
          M("strong", jg, q(s(f.value)), 1)
        ]),
        c.value && !d.value ? (b(), w("p", Dg, q(N(r)("summary.taxIncluded", { ...u.value, amount: s(c.value.tax) })), 1)) : ae("", !0),
        l.value ? (b(), w("p", Lg, q(N(r)("summary.unitPrice", {
          quantity: ((x = e.price) == null ? void 0 : x.quantity) ?? 0,
          unitPrice: s(m.value)
        })), 1)) : ae("", !0),
        o.value ? (b(), w("p", zg, q(o.value), 1)) : ae("", !0),
        e.priceNote ? (b(), w("p", qg, q(e.priceNote), 1)) : ae("", !0),
        (E = e.price) != null && E.unavailable ? (b(), w("p", Ug, q(N(r)(
          e.price.unavailableReason === "formula" ? "summary.unpriceable" : "summary.unavailable"
        )), 1)) : ae("", !0),
        (b(!0), w(oe, null, Me(e.holds.filter((_) => _.message), (_) => (b(), w("p", {
          key: _.key,
          class: "hold-message",
          part: "hold-message",
          role: "status"
        }, q(_.message), 1))), 128)),
        M("button", {
          type: "button",
          class: "cta",
          part: "cta",
          disabled: e.holds.length > 0,
          onClick: y[0] || (y[0] = (_) => i("submit"))
        }, q(N(r)("summary.addToCart")), 9, Vg),
        M("span", Bg, q(e.issueCount > 0 ? N(r)("summary.issues", { count: e.issueCount }) : ""), 1)
      ]);
    };
  }
}), Hg = {
  key: 0,
  class: "state"
}, Wg = {
  key: 1,
  class: "state error",
  role: "alert"
}, Kg = {
  key: 2,
  class: "layout"
}, Gg = { class: "main" }, Qg = /* @__PURE__ */ Ce({
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
          return Zf.parse(D);
        } catch {
          return;
        }
    }
    const a = Pp({
      configUrl: i.configUrl,
      uploadEndpoint: i.uploadEndpoint,
      turnstileUrl: i.turnstileUrl,
      provider: s(i.provider),
      inlineConfig: i.config
    }), o = G(() => Up(i.strings)), l = hl(() => o.value);
    gr(ml, l);
    const c = G(() => Hp(i.priceFormat)), u = G(() => Gp(i.taxMode, i.taxRate, i.taxName)), d = Vp(
      a.visibleFields,
      a.selections,
      a.price,
      l.t
    ), f = Lu(), m = Rp(), g = Dp({ host: f });
    gr(Ki, { cfg: a, validation: d, producers: g });
    const y = Fp({ host: f, cfg: a, validation: d, holds: m, producers: g });
    Cp(a, g);
    const x = /* @__PURE__ */ Ue(null), E = /* @__PURE__ */ Ue(null);
    Xr(() => {
      (i.config || i.configUrl) && a.load().then(() => {
        a.unconfigured.value ? r("unconfigured", { productId: i.productId }) : a.schema.value && y.notifyReady();
      });
    }), bt(
      () => i.config,
      (A, D) => {
        A && A !== D && (d.reset(), a.reload({
          inlineConfig: A,
          provider: s(i.provider)
        }).then(() => {
          a.schema.value && y.notifyReady();
        }));
      }
    );
    const _ = G(() => {
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
        labels: _.value,
        display: fl(
          a.visibleSections.value,
          a.selections,
          a.file.value,
          {
            quantityLabel: l.t("quantity.label"),
            artworkLabel: l.t("artwork.label"),
            designName: l.t("artwork.designName"),
            fileLinkLabel: l.t("upload.downloadLink")
          }
        )
      };
    }
    function V(A) {
      var ce, fe;
      const D = (ce = x.value) == null ? void 0 : ce.querySelector(`[data-field-id="${A}"]`);
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
          const ge = a.visibleSections.value.findIndex(
            (ze) => ze.fields.some((Ne) => Ne.id === j.fieldId)
          );
          ((fe = a.schema.value) == null ? void 0 : fe.layout) === "wizard" && ge >= 0 && ((O = E.value) == null || O.goTo(ge)), V(j.fieldId);
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
    return t(y.exposed), (A, D) => N(a).unconfigured.value ? ae("", !0) : (b(), w("div", {
      key: 0,
      ref_key: "root",
      ref: x,
      class: "configurator",
      part: "base"
    }, [
      N(a).loading.value ? (b(), w("p", Hg, q(N(l).t("state.loading")), 1)) : N(a).error.value ? (b(), w("p", Wg, q(N(a).error.value), 1)) : N(a).schema.value ? (b(), w("div", Kg, [
        M("div", Gg, [
          N(a).schema.value.layout === "wizard" ? (b(), Oe(kg, {
            key: 0,
            ref_key: "wizard",
            ref: E,
            sections: N(a).visibleSections.value,
            issues: N(d).issues.value,
            onBlocked: I
          }, null, 8, ["sections", "issues"])) : (b(), Oe(hg, {
            key: 1,
            sections: N(a).visibleSections.value
          }, null, 8, ["sections"]))
        ]),
        Xe(Zg, {
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
}), Yg = ":host{--pc-color-accent: #1a1a1a;--pc-color-accent-contrast: #ffffff;--pc-color-accent-soft: #f6f6f4;--pc-color-surface: #ffffff;--pc-color-surface-alt: #fafafa;--pc-color-border: #e0e0dc;--pc-color-text: #1a1a1a;--pc-color-text-muted: #6b7280;--pc-color-danger: #c0392b;--pc-color-focus: var(--pc-color-accent);--pc-font-family: inherit;--pc-font-size: 1em;--pc-label-weight: 600;--pc-radius-control: 8px;--pc-radius-card: 12px;--pc-space: 4px;--pc-shadow-card: none;--pc-cta-bg: var(--pc-color-accent);--pc-cta-color: var(--pc-color-accent-contrast);--pc-swatch-size: 44px;--pc-card-image-height: 90px;display:block;container:pc-root / inline-size;font-family:var(--pc-font-family);font-size:var(--pc-font-size);color:var(--pc-color-text)}", Jg = '*{box-sizing:border-box}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.state{padding:calc(var(--pc-space) * 8);text-align:center;color:var(--pc-color-text-muted)}.state.error{color:var(--pc-color-danger)}.layout{display:grid;grid-template-columns:1fr 300px;gap:calc(var(--pc-space) * 6);align-items:start}.section{margin-bottom:calc(var(--pc-space) * 6);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);box-shadow:var(--pc-shadow-card)}.section-title{margin:0 0 calc(var(--pc-space) * 4);text-transform:uppercase;letter-spacing:.04em;font-size:.95em;color:var(--pc-color-text);outline:none}.field{margin-bottom:calc(var(--pc-space) * 5)}.field:last-child{margin-bottom:0}.field-label{display:block;font-weight:var(--pc-label-weight);margin-bottom:calc(var(--pc-space) * 2)}.req{color:var(--pc-color-danger)}.help{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.field-error{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--pc-color-focus);outline-offset:2px}.grid{display:grid;gap:calc(var(--pc-space) * 3);grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.grid.cards{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.card{position:relative;display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;transition:border-color .15s ease}.card:hover{border-color:var(--pc-color-accent-soft)}.card.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.card img{max-width:100%;height:var(--pc-card-image-height);object-fit:contain}.card-label{font-size:.9em}.card-description{font-size:.8em;color:var(--pc-color-text-muted)}.check{position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);display:grid;place-items:center;font-size:.8em}.swatches{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.swatch{width:var(--pc-swatch-size);height:var(--pc-swatch-size);border-radius:50%;border:3px solid transparent;cursor:pointer;display:grid;place-items:center}.swatch.active{border-color:var(--pc-color-accent);box-shadow:0 0 0 2px var(--pc-color-surface) inset}.swatch-check{color:#fff;text-shadow:0 0 3px rgb(0 0 0 / .8);font-size:.9em}.swatch-selected-label{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.pills{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.pill{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);cursor:pointer}.pill.active{background:var(--pc-color-accent);border-color:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.choice-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.choice-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);padding:calc(var(--pc-space) * 3);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;text-align:left;cursor:pointer}.choice-row.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.choice-indicator{flex:none;width:20px;height:20px;border:2px solid var(--pc-color-border);border-radius:50%;display:grid;place-items:center;font-size:.7em;color:var(--pc-color-accent-contrast)}.choice-indicator.multi{border-radius:4px}.choice-row.active .choice-indicator{background:var(--pc-color-accent);border-color:var(--pc-color-accent)}.choice-body{display:flex;flex-direction:column}.choice-title{font-weight:var(--pc-label-weight)}.choice-description{font-size:.85em;color:var(--pc-color-text-muted)}.card.unavailable,.pill.unavailable,.swatch.unavailable,.choice-row.unavailable{opacity:.4;cursor:not-allowed;text-decoration:line-through}.dropdown{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.quantities-grid{display:grid;gap:calc(var(--pc-space) * 2);grid-template-columns:repeat(auto-fill,minmax(118px,1fr))}.quantities-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.quantities-item{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 3) calc(var(--pc-space) * 2);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface)}.quantities-list .quantities-item{flex-direction:row;justify-content:space-between;padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3)}.quantities-item.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.quantities-item.off .quantities-label{text-decoration:line-through;color:var(--pc-color-text-muted)}.quantities-name{display:inline-flex;align-items:center;gap:calc(var(--pc-space) * 2);font-weight:var(--pc-label-weight)}.quantities-swatch{width:1.1em;height:1.1em;border-radius:50%;border:1px solid var(--pc-color-border)}.quantities-image{height:2em;width:auto;object-fit:contain}.quantities-item .stepper button{width:32px}.quantities-item .stepper-value{width:3em}.quantities-total{margin:calc(var(--pc-space) * 2) 0 0;text-align:right;font-size:.9em;color:var(--pc-color-text-muted)}.stepper{display:inline-flex;align-items:stretch;border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);overflow:hidden}.stepper button{width:40px;border:none;background:var(--pc-color-surface-alt);color:var(--pc-color-text);font-size:1.2em;cursor:pointer}.stepper button:disabled{opacity:.4;cursor:not-allowed}.stepper-value{width:4.5em;border:none;text-align:center;font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);background:var(--pc-color-surface);-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.stepper-value::-webkit-outer-spin-button,.stepper-value::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.number-input,.text-input{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.textarea{width:100%;resize:vertical}.slider-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3)}.slider{flex:1;accent-color:var(--pc-color-accent)}.slider-value{min-width:3em;text-align:right;font-weight:var(--pc-label-weight)}.dimensions{display:flex;align-items:flex-end;gap:calc(var(--pc-space) * 2);flex-wrap:wrap}.dim-input{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1)}.dim-label{font-size:.8em;color:var(--pc-color-text-muted)}.dim-input input{width:6em;padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);font:inherit;color:var(--pc-color-text);background:var(--pc-color-surface)}.dim-times{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.dim-unit{min-width:5em}.dim-unit-static{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.upload-input{position:absolute;width:1px;height:1px;opacity:0;overflow:hidden}.upload-zone{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 6);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);cursor:pointer;text-align:center}.upload.dragging .upload-zone{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.upload.done .upload-zone{border-style:solid;border-color:var(--pc-color-accent)}.upload-title{font-weight:var(--pc-label-weight)}.upload-hint{font-size:.8em;color:var(--pc-color-text-muted)}.upload-wrong-type{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.upload-filename{font-weight:var(--pc-label-weight);color:var(--pc-color-accent);word-break:break-all}.upload-status{color:var(--pc-color-accent);font-weight:var(--pc-label-weight)}.producers{display:flex;flex-direction:column}.producer{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;text-align:center;transition:border-color .15s ease}.producer:hover{border-color:var(--pc-color-accent)}.producer-label{font-weight:var(--pc-label-weight)}.producer-description{font-size:.8em;color:var(--pc-color-text-muted)}.producer-or{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);margin:calc(var(--pc-space) * 3) 0;font-size:.8em;text-transform:uppercase;letter-spacing:.06em;color:var(--pc-color-text-muted)}.producer-or:before,.producer-or:after{content:"";flex:1;height:1px;background:var(--pc-color-border)}.artwork{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 4);flex-wrap:wrap;padding:calc(var(--pc-space) * 4) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-accent-soft)}.artwork-body{display:flex;flex-direction:column;min-width:0}.artwork-name{font-weight:var(--pc-label-weight);word-break:break-all}.artwork-meta{font-size:.85em;color:var(--pc-color-text-muted)}.artwork-actions{display:flex;gap:calc(var(--pc-space) * 2)}.artwork-action{padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-size:.9em;cursor:pointer}.artwork-action:hover{border-color:var(--pc-color-accent)}.fc-slot{min-height:40px}.fc-loading{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.fc-panel{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);text-align:center;align-items:center}.fc-panel.fc-error{border-color:var(--pc-color-danger)}.fc-panel-title{font-weight:var(--pc-label-weight)}.fc-panel-hint{font-size:.85em;color:var(--pc-color-text-muted)}.fc-retry{margin-top:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.recap{margin:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.recap-row{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 4);font-size:.9em}.recap-row dt{color:var(--pc-color-text-muted)}.recap-row dd{margin:0;text-align:right}.recap-empty,.info-note{margin:0;font-size:.9em;color:var(--pc-color-text-muted)}.summary{position:sticky;top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt)}.summary h3{margin:0 0 calc(var(--pc-space) * 4)}.lines{list-style:none;margin:0 0 calc(var(--pc-space) * 4);padding:0}.lines li{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0;color:var(--pc-color-text-muted)}.total{display:flex;justify-content:space-between;padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border);font-size:1.1em}.subtotal,.tax-line{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0}.subtotal{padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border)}.tax-line{margin-bottom:calc(var(--pc-space) * 2);color:var(--pc-color-text-muted)}.tax-included,.unit-price{margin:calc(var(--pc-space) * 1) 0 0;text-align:right;font-size:.85em;color:var(--pc-color-text-muted)}.next-break{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;font-weight:var(--pc-label-weight);color:var(--pc-color-accent)}.price-note{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.unavailable{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.hold-message{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.cta{width:100%;margin-top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 3.5);border:none;border-radius:var(--pc-radius-control);background:var(--pc-cta-bg);color:var(--pc-cta-color);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.cta:disabled{opacity:.5;cursor:not-allowed}.wizard-nav{list-style:none;display:flex;gap:calc(var(--pc-space) * 2);margin:0 0 calc(var(--pc-space) * 5);padding:0;flex-wrap:wrap}.wizard-step-button{display:flex;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:none;border-radius:var(--pc-radius-control);background:transparent;font:inherit;color:var(--pc-color-text-muted);cursor:pointer}.wizard-step.active .wizard-step-button{background:var(--pc-color-accent-soft);color:var(--pc-color-text);font-weight:var(--pc-label-weight)}.wizard-step-index{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--pc-color-border);color:var(--pc-color-text);font-size:.75em}.wizard-step.active .wizard-step-index,.wizard-step.done .wizard-step-index{background:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.wizard-actions{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 3)}.wizard-back,.wizard-next{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 6);border-radius:var(--pc-radius-control);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.wizard-back{border:2px solid var(--pc-color-border);background:var(--pc-color-surface);color:var(--pc-color-text)}.wizard-next{border:none;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);margin-left:auto}@container pc-root (max-width: 640px){.layout{grid-template-columns:1fr}.summary{position:static}}', Xg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, ey = /* @__PURE__ */ Xg(Qg, [["styles", [Yg, Jg]]]), ty = /* @__PURE__ */ ju(ey);
function ny(e = "print-configurator") {
  typeof customElements < "u" && !customElements.get(e) && customElements.define(e, ty);
}
ny();
export {
  pl as DEFAULT_STRINGS,
  Dr as PAGE_API_VERSION,
  ty as PrintConfiguratorElement,
  ny as registerPrintConfigurator
};
