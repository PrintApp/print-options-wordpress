var Bl = Object.defineProperty;
var Hl = (e, t, n) => t in e ? Bl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Jt = (e, t, n) => Hl(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function as(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ee = {}, bn = [], $t = () => {
}, Ja = () => !1, Qi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ji = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, os = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zl = Object.prototype.hasOwnProperty, _e = (e, t) => Zl.call(e, t), ie = Array.isArray, xn = (e) => ci(e) === "[object Map]", Xa = (e) => ci(e) === "[object Set]", Hs = (e) => ci(e) === "[object Date]", ue = (e) => typeof e == "function", Oe = (e) => typeof e == "string", st = (e) => typeof e == "symbol", $e = (e) => e !== null && typeof e == "object", eo = (e) => ($e(e) || ue(e)) && ue(e.then) && ue(e.catch), to = Object.prototype.toString, ci = (e) => to.call(e), Wl = (e) => ci(e).slice(8, -1), Xi = (e) => ci(e) === "[object Object]", er = (e) => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Hn = /* @__PURE__ */ as(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), tr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Kl = /-\w/g, Ue = tr(
  (e) => e.replace(Kl, (t) => t.slice(1).toUpperCase())
), Gl = /\B([A-Z])/g, nt = tr(
  (e) => e.replace(Gl, "-$1").toLowerCase()
), nr = tr((e) => e.charAt(0).toUpperCase() + e.slice(1)), mr = tr(
  (e) => e ? `on${nr(e)}` : ""
), St = (e, t) => !Object.is(e, t), vr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, no = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Yl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Zs = (e) => {
  const t = Oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ws;
const ir = () => Ws || (Ws = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function an(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = Oe(i) ? ec(i) : an(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Oe(e) || $e(e))
    return e;
}
const Ql = /;(?![^(]*\))/g, Jl = /:([^]+)/, Xl = /\/\*[^]*?\*\//g;
function ec(e) {
  const t = {};
  return e.replace(Xl, "").split(Ql).forEach((n) => {
    if (n) {
      const i = n.split(Jl);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function De(e) {
  let t = "";
  if (Oe(e))
    t = e;
  else if (ie(e))
    for (let n = 0; n < e.length; n++) {
      const i = De(e[n]);
      i && (t += i + " ");
    }
  else if ($e(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const tc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nc = /* @__PURE__ */ as(tc);
function io(e) {
  return !!e || e === "";
}
function ic(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = ls(e[i], t[i]);
  return n;
}
function ls(e, t) {
  if (e === t) return !0;
  let n = Hs(e), i = Hs(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = st(e), i = st(t), n || i)
    return e === t;
  if (n = ie(e), i = ie(t), n || i)
    return n && i ? ic(e, t) : !1;
  if (n = $e(e), i = $e(t), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !ls(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ro = (e) => !!(e && e.__v_isRef === !0), D = (e) => Oe(e) ? e : e == null ? "" : ie(e) || $e(e) && (e.toString === to || !ue(e.toString)) ? ro(e) ? D(e.value) : JSON.stringify(e, so, 2) : String(e), so = (e, t) => ro(t) ? so(e, t.value) : xn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[gr(i, s) + " =>"] = r, n),
    {}
  )
} : Xa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => gr(n))
} : st(t) ? gr(t) : $e(t) && !ie(t) && !Xi(t) ? String(t) : t, gr = (e, t = "") => {
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
let Be;
class rc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Be && (Be.active ? (this.parent = Be, this.index = (Be.scopes || (Be.scopes = [])).push(
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
      const n = Be;
      try {
        return Be = this, t();
      } finally {
        Be = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Be, Be = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Be === this)
        Be = this.prevScope;
      else {
        let t = Be;
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
function sc() {
  return Be;
}
let Ie;
const yr = /* @__PURE__ */ new WeakSet();
class ao {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Be && (Be.active ? Be.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, yr.has(this) && (yr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ks(this), co(this);
    const t = Ie, n = ht;
    Ie = this, ht = !0;
    try {
      return this.fn();
    } finally {
      uo(this), Ie = t, ht = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ds(t);
      this.deps = this.depsTail = void 0, Ks(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? yr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Nr(this) && this.run();
  }
  get dirty() {
    return Nr(this);
  }
}
let oo = 0, Zn, Wn;
function lo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wn, Wn = e;
    return;
  }
  e.next = Zn, Zn = e;
}
function cs() {
  oo++;
}
function us() {
  if (--oo > 0)
    return;
  if (Wn) {
    let t = Wn;
    for (Wn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Zn; ) {
    let t = Zn;
    for (Zn = void 0; t; ) {
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
function co(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function uo(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const r = i.prevDep;
    i.version === -1 ? (i === n && (n = r), ds(i), ac(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r;
  }
  e.deps = t, e.depsTail = n;
}
function Nr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (fo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function fo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Jn) || (e.globalVersion = Jn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Nr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ie, i = ht;
  Ie = e, ht = !0;
  try {
    co(e);
    const r = e.fn(e._value);
    (t.version === 0 || St(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Ie = n, ht = i, uo(e), e.flags &= -3;
  }
}
function ds(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: r } = e;
  if (i && (i.nextSub = r, e.prevSub = void 0), r && (r.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      ds(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ac(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ht = !0;
const po = [];
function jt() {
  po.push(ht), ht = !1;
}
function qt() {
  const e = po.pop();
  ht = e === void 0 ? !0 : e;
}
function Ks(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ie;
    Ie = void 0;
    try {
      t();
    } finally {
      Ie = n;
    }
  }
}
let Jn = 0;
class oc {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class fs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ie || !ht || Ie === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ie)
      n = this.activeLink = new oc(Ie, this), Ie.deps ? (n.prevDep = Ie.depsTail, Ie.depsTail.nextDep = n, Ie.depsTail = n) : Ie.deps = Ie.depsTail = n, ho(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Ie.depsTail, n.nextDep = void 0, Ie.depsTail.nextDep = n, Ie.depsTail = n, Ie.deps === n && (Ie.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Jn++, this.notify(t);
  }
  notify(t) {
    cs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      us();
    }
  }
}
function ho(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        ho(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ki = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ Symbol(
  ""
), Or = /* @__PURE__ */ Symbol(
  ""
), Xn = /* @__PURE__ */ Symbol(
  ""
);
function Ke(e, t, n) {
  if (ht && Ie) {
    let i = ki.get(e);
    i || ki.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || (i.set(n, r = new fs()), r.map = i, r.key = n), r.track();
  }
}
function Pt(e, t, n, i, r, s) {
  const a = ki.get(e);
  if (!a) {
    Jn++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (cs(), t === "clear")
    a.forEach(o);
  else {
    const l = ie(e), c = l && er(n);
    if (l && n === "length") {
      const u = Number(i);
      a.forEach((f, d) => {
        (d === "length" || d === Xn || !st(d) && d >= u) && o(f);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), c && o(a.get(Xn)), t) {
        case "add":
          l ? c && o(a.get("length")) : (o(a.get(rn)), xn(e) && o(a.get(Or)));
          break;
        case "delete":
          l || (o(a.get(rn)), xn(e) && o(a.get(Or)));
          break;
        case "set":
          xn(e) && o(a.get(rn));
          break;
      }
  }
  us();
}
function lc(e, t) {
  const n = ki.get(e);
  return n && n.get(t);
}
function hn(e) {
  const t = /* @__PURE__ */ be(e);
  return t === e ? t : (Ke(t, "iterate", Xn), /* @__PURE__ */ rt(e) ? t : t.map(mt));
}
function rr(e) {
  return Ke(e = /* @__PURE__ */ be(e), "iterate", Xn), e;
}
function _t(e, t) {
  return /* @__PURE__ */ Lt(e) ? $n(/* @__PURE__ */ sn(e) ? mt(t) : t) : mt(t);
}
const cc = {
  __proto__: null,
  [Symbol.iterator]() {
    return br(this, Symbol.iterator, (e) => _t(this, e));
  },
  concat(...e) {
    return hn(this).concat(
      ...e.map((t) => ie(t) ? hn(t) : t)
    );
  },
  entries() {
    return br(this, "entries", (e) => (e[1] = _t(this, e[1]), e));
  },
  every(e, t) {
    return It(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return It(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => _t(this, i)),
      arguments
    );
  },
  find(e, t) {
    return It(
      this,
      "find",
      e,
      t,
      (n) => _t(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return It(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return It(
      this,
      "findLast",
      e,
      t,
      (n) => _t(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return It(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return It(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return xr(this, "includes", e);
  },
  indexOf(...e) {
    return xr(this, "indexOf", e);
  },
  join(e) {
    return hn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return xr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return It(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Rn(this, "pop");
  },
  push(...e) {
    return Rn(this, "push", e);
  },
  reduce(e, ...t) {
    return Gs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Gs(this, "reduceRight", e, t);
  },
  shift() {
    return Rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return It(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Rn(this, "splice", e);
  },
  toReversed() {
    return hn(this).toReversed();
  },
  toSorted(e) {
    return hn(this).toSorted(e);
  },
  toSpliced(...e) {
    return hn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Rn(this, "unshift", e);
  },
  values() {
    return br(this, "values", (e) => _t(this, e));
  }
};
function br(e, t, n) {
  const i = rr(e), r = i[t]();
  return i !== e && !/* @__PURE__ */ rt(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const uc = Array.prototype;
function It(e, t, n, i, r, s) {
  const a = rr(e), o = a !== e && !/* @__PURE__ */ rt(e), l = a[t];
  if (l !== uc[t]) {
    const f = l.apply(e, s);
    return o ? mt(f) : f;
  }
  let c = n;
  a !== e && (o ? c = function(f, d) {
    return n.call(this, _t(e, f), d, e);
  } : n.length > 2 && (c = function(f, d) {
    return n.call(this, f, d, e);
  }));
  const u = l.call(a, c, i);
  return o && r ? r(u) : u;
}
function Gs(e, t, n, i) {
  const r = rr(e), s = r !== e && !/* @__PURE__ */ rt(e);
  let a = n, o = !1;
  r !== e && (s ? (o = i.length === 0, a = function(c, u, f) {
    return o && (o = !1, c = _t(e, c)), n.call(this, c, _t(e, u), f, e);
  }) : n.length > 3 && (a = function(c, u, f) {
    return n.call(this, c, u, f, e);
  }));
  const l = r[t](a, ...i);
  return o ? _t(e, l) : l;
}
function xr(e, t, n) {
  const i = /* @__PURE__ */ be(e);
  Ke(i, "iterate", Xn);
  const r = i[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ sr(n[0]) ? (n[0] = /* @__PURE__ */ be(n[0]), i[t](...n)) : r;
}
function Rn(e, t, n = []) {
  jt(), cs();
  const i = (/* @__PURE__ */ be(e))[t].apply(e, n);
  return us(), qt(), i;
}
const dc = /* @__PURE__ */ as("__proto__,__v_isRef,__isVue"), mo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(st)
);
function fc(e) {
  st(e) || (e = String(e));
  const t = /* @__PURE__ */ be(this);
  return Ke(t, "has", e), t.hasOwnProperty(e);
}
class vo {
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
      return i === (r ? s ? _c : xo : s ? bo : yo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const a = ie(t);
    if (!r) {
      let l;
      if (a && (l = cc[n]))
        return l;
      if (n === "hasOwnProperty")
        return fc;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ze(t) ? t : i
    );
    if ((st(n) ? mo.has(n) : dc(n)) || (r || Ke(t, "get", n), s))
      return o;
    if (/* @__PURE__ */ ze(o)) {
      const l = a && er(n) ? o : o.value;
      return r && $e(l) ? /* @__PURE__ */ Mr(l) : l;
    }
    return $e(o) ? r ? /* @__PURE__ */ Mr(o) : /* @__PURE__ */ lt(o) : o;
  }
}
class go extends vo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    const a = ie(t) && er(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Lt(s);
      if (!/* @__PURE__ */ rt(i) && !/* @__PURE__ */ Lt(i) && (s = /* @__PURE__ */ be(s), i = /* @__PURE__ */ be(i)), !a && /* @__PURE__ */ ze(s) && !/* @__PURE__ */ ze(i))
        return c || (s.value = i), !0;
    }
    const o = a ? Number(n) < t.length : _e(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ ze(t) ? t : r
    );
    return t === /* @__PURE__ */ be(r) && (o ? St(i, s) && Pt(t, "set", n, i) : Pt(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = _e(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && i && Pt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!st(n) || !mo.has(n)) && Ke(t, "has", n), i;
  }
  ownKeys(t) {
    return Ke(
      t,
      "iterate",
      ie(t) ? "length" : rn
    ), Reflect.ownKeys(t);
  }
}
class pc extends vo {
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
const hc = /* @__PURE__ */ new go(), mc = /* @__PURE__ */ new pc(), vc = /* @__PURE__ */ new go(!0);
const Pr = (e) => e, mi = (e) => Reflect.getPrototypeOf(e);
function gc(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = /* @__PURE__ */ be(r), a = xn(s), o = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = r[e](...i), u = n ? Pr : t ? $n : mt;
    return !t && Ke(
      s,
      "iterate",
      l ? Or : rn
    ), Fe(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: f, done: d } = c.next();
          return d ? { value: f, done: d } : {
            value: o ? [u(f[0]), u(f[1])] : u(f),
            done: d
          };
        }
      }
    );
  };
}
function vi(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function yc(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ be(s), o = /* @__PURE__ */ be(r);
      e || (St(r, o) && Ke(a, "get", r), Ke(a, "get", o));
      const { has: l } = mi(a), c = t ? Pr : e ? $n : mt;
      if (l.call(a, r))
        return c(s.get(r));
      if (l.call(a, o))
        return c(s.get(o));
      s !== a && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ke(/* @__PURE__ */ be(r), "iterate", rn), r.size;
    },
    has(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ be(s), o = /* @__PURE__ */ be(r);
      return e || (St(r, o) && Ke(a, "has", r), Ke(a, "has", o)), r === o ? s.has(r) : s.has(r) || s.has(o);
    },
    forEach(r, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ be(o), c = t ? Pr : e ? $n : mt;
      return !e && Ke(l, "iterate", rn), o.forEach((u, f) => r.call(s, c(u), c(f), a));
    }
  };
  return Fe(
    n,
    e ? {
      add: vi("add"),
      set: vi("set"),
      delete: vi("delete"),
      clear: vi("clear")
    } : {
      add(r) {
        const s = /* @__PURE__ */ be(this), a = mi(s), o = /* @__PURE__ */ be(r), l = !t && !/* @__PURE__ */ rt(r) && !/* @__PURE__ */ Lt(r) ? o : r;
        return a.has.call(s, l) || St(r, l) && a.has.call(s, r) || St(o, l) && a.has.call(s, o) || (s.add(l), Pt(s, "add", l, l)), this;
      },
      set(r, s) {
        !t && !/* @__PURE__ */ rt(s) && !/* @__PURE__ */ Lt(s) && (s = /* @__PURE__ */ be(s));
        const a = /* @__PURE__ */ be(this), { has: o, get: l } = mi(a);
        let c = o.call(a, r);
        c || (r = /* @__PURE__ */ be(r), c = o.call(a, r));
        const u = l.call(a, r);
        return a.set(r, s), c ? St(s, u) && Pt(a, "set", r, s) : Pt(a, "add", r, s), this;
      },
      delete(r) {
        const s = /* @__PURE__ */ be(this), { has: a, get: o } = mi(s);
        let l = a.call(s, r);
        l || (r = /* @__PURE__ */ be(r), l = a.call(s, r)), o && o.call(s, r);
        const c = s.delete(r);
        return l && Pt(s, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ be(this), s = r.size !== 0, a = r.clear();
        return s && Pt(
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
    n[r] = gc(r, e, t);
  }), n;
}
function ps(e, t) {
  const n = yc(e, t);
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    _e(n, r) && r in i ? n : i,
    r,
    s
  );
}
const bc = {
  get: /* @__PURE__ */ ps(!1, !1)
}, xc = {
  get: /* @__PURE__ */ ps(!1, !0)
}, wc = {
  get: /* @__PURE__ */ ps(!0, !1)
};
const yo = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap(), _c = /* @__PURE__ */ new WeakMap();
function kc(e) {
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
function lt(e) {
  return /* @__PURE__ */ Lt(e) ? e : hs(
    e,
    !1,
    hc,
    bc,
    yo
  );
}
// @__NO_SIDE_EFFECTS__
function Sc(e) {
  return hs(
    e,
    !1,
    vc,
    xc,
    bo
  );
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  return hs(
    e,
    !0,
    mc,
    wc,
    xo
  );
}
function hs(e, t, n, i, r) {
  if (!$e(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = kc(Wl(e));
  if (a === 0)
    return e;
  const o = new Proxy(
    e,
    a === 2 ? i : n
  );
  return r.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
  return /* @__PURE__ */ Lt(e) ? /* @__PURE__ */ sn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ be(t) : e;
}
function $c(e) {
  return !_e(e, "__v_skip") && Object.isExtensible(e) && no(e, "__v_skip", !0), e;
}
const mt = (e) => $e(e) ? /* @__PURE__ */ lt(e) : e, $n = (e) => $e(e) ? /* @__PURE__ */ Mr(e) : e;
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return Tc(e, !1);
}
function Tc(e, t) {
  return /* @__PURE__ */ ze(e) ? e : new Cc(e, t);
}
class Cc {
  constructor(t, n) {
    this.dep = new fs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ be(t), this._value = n ? t : mt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ rt(t) || /* @__PURE__ */ Lt(t);
    t = i ? t : /* @__PURE__ */ be(t), St(t, n) && (this._rawValue = t, this._value = i ? t : mt(t), this.dep.trigger());
  }
}
function _(e) {
  return /* @__PURE__ */ ze(e) ? e.value : e;
}
const Ac = {
  get: (e, t, n) => t === "__v_raw" ? e : _(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return /* @__PURE__ */ ze(r) && !/* @__PURE__ */ ze(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function wo(e) {
  return /* @__PURE__ */ sn(e) ? e : new Proxy(e, Ac);
}
class Ic {
  constructor(t, n, i) {
    this._object = t, this._defaultValue = i, this.__v_isRef = !0, this._value = void 0, this._key = st(n) ? n : String(n), this._raw = /* @__PURE__ */ be(t);
    let r = !0, s = t;
    if (!ie(t) || st(this._key) || !er(this._key))
      do
        r = !/* @__PURE__ */ sr(s) || /* @__PURE__ */ rt(s);
      while (r && (s = s.__v_raw));
    this._shallow = r;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = _(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ ze(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ ze(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return lc(this._raw, this._key);
  }
}
class Ec {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function Nc(e, t, n) {
  return /* @__PURE__ */ ze(e) ? e : ue(e) ? new Ec(e) : $e(e) && arguments.length > 1 ? Oc(e, t, n) : /* @__PURE__ */ Re(e);
}
function Oc(e, t, n) {
  return new Ic(e, t, n);
}
class Pc {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new fs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Jn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ie !== this)
      return lo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return fo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Mc(e, t, n = !1) {
  let i, r;
  return ue(e) ? i = e : (i = e.get, r = e.set), new Pc(i, r, n);
}
const gi = {}, Si = /* @__PURE__ */ new WeakMap();
let tn;
function Rc(e, t = !1, n = tn) {
  if (n) {
    let i = Si.get(n);
    i || Si.set(n, i = []), i.push(e);
  }
}
function Fc(e, t, n = Ee) {
  const { immediate: i, deep: r, once: s, scheduler: a, augmentJob: o, call: l } = n, c = (j) => r ? j : /* @__PURE__ */ rt(j) || r === !1 || r === 0 ? Kt(j, 1) : Kt(j);
  let u, f, d, h, m = !1, x = !1;
  if (/* @__PURE__ */ ze(e) ? (f = () => e.value, m = /* @__PURE__ */ rt(e)) : /* @__PURE__ */ sn(e) ? (f = () => c(e), m = !0) : ie(e) ? (x = !0, m = e.some((j) => /* @__PURE__ */ sn(j) || /* @__PURE__ */ rt(j)), f = () => e.map((j) => {
    if (/* @__PURE__ */ ze(j))
      return j.value;
    if (/* @__PURE__ */ sn(j))
      return c(j);
    if (ue(j))
      return l ? l(j, 2) : j();
  })) : ue(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (d) {
      jt();
      try {
        d();
      } finally {
        qt();
      }
    }
    const j = tn;
    tn = u;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      tn = j;
    }
  } : f = $t, t && r) {
    const j = f, F = r === !0 ? 1 / 0 : r;
    f = () => Kt(j(), F);
  }
  const $ = sc(), E = () => {
    u.stop(), $ && $.active && os($.effects, u);
  };
  if (s && t) {
    const j = t;
    t = (...F) => {
      j(...F), E();
    };
  }
  let O = x ? new Array(e.length).fill(gi) : gi;
  const K = (j) => {
    if (!(!(u.flags & 1) || !u.dirty && !j))
      if (t) {
        const F = u.run();
        if (r || m || (x ? F.some((b, g) => St(b, O[g])) : St(F, O))) {
          d && d();
          const b = tn;
          tn = u;
          try {
            const g = [
              F,
              // pass undefined as the old value when it's changed for the first time
              O === gi ? void 0 : x && O[0] === gi ? [] : O,
              h
            ];
            O = F, l ? l(t, 3, g) : (
              // @ts-expect-error
              t(...g)
            );
          } finally {
            tn = b;
          }
        }
      } else
        u.run();
  };
  return o && o(K), u = new ao(f), u.scheduler = a ? () => a(K, !1) : K, h = (j) => Rc(j, !1, u), d = u.onStop = () => {
    const j = Si.get(u);
    if (j) {
      if (l)
        l(j, 4);
      else
        for (const F of j) F();
      Si.delete(u);
    }
  }, t ? i ? K(!0) : O = u.run() : a ? a(K.bind(null, !0), !0) : u.run(), E.pause = u.pause.bind(u), E.resume = u.resume.bind(u), E.stop = E, E;
}
function Kt(e, t = 1 / 0, n) {
  if (t <= 0 || !$e(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ze(e))
    Kt(e.value, t, n);
  else if (ie(e))
    for (let i = 0; i < e.length; i++)
      Kt(e[i], t, n);
  else if (Xa(e) || xn(e))
    e.forEach((i) => {
      Kt(i, t, n);
    });
  else if (Xi(e)) {
    for (const i in e)
      Kt(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Kt(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ui(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (r) {
    ar(r, t, n);
  }
}
function vt(e, t, n, i) {
  if (ue(e)) {
    const r = ui(e, t, n, i);
    return r && eo(r) && r.catch((s) => {
      ar(s, t, n);
    }), r;
  }
  if (ie(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(vt(e[s], t, n, i));
    return r;
  }
}
function ar(e, t, n, i = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Ee;
  if (t) {
    let o = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, l, c) === !1)
            return;
      }
      o = o.parent;
    }
    if (s) {
      jt(), ui(s, null, 10, [
        e,
        l,
        c
      ]), qt();
      return;
    }
  }
  jc(e, n, r, i, a);
}
function jc(e, t, n, i = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Qe = [];
let wt = -1;
const wn = [];
let Zt = null, gn = 0;
const _o = /* @__PURE__ */ Promise.resolve();
let $i = null;
function Nn(e) {
  const t = $i || _o;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function qc(e) {
  let t = wt + 1, n = Qe.length;
  for (; t < n; ) {
    const i = t + n >>> 1, r = Qe[i], s = ei(r);
    s < e || s === e && r.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function ms(e) {
  if (!(e.flags & 1)) {
    const t = ei(e), n = Qe[Qe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ei(n) ? Qe.push(e) : Qe.splice(qc(t), 0, e), e.flags |= 1, ko();
  }
}
function ko() {
  $i || ($i = _o.then($o));
}
function Lc(e) {
  ie(e) ? wn.push(...e) : Zt && e.id === -1 ? Zt.splice(gn + 1, 0, e) : e.flags & 1 || (wn.push(e), e.flags |= 1), ko();
}
function Ys(e, t, n = wt + 1) {
  for (; n < Qe.length; n++) {
    const i = Qe[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Qe.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function So(e) {
  if (wn.length) {
    const t = [...new Set(wn)].sort(
      (n, i) => ei(n) - ei(i)
    );
    if (wn.length = 0, Zt) {
      Zt.push(...t);
      return;
    }
    for (Zt = t, gn = 0; gn < Zt.length; gn++) {
      const n = Zt[gn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Zt = null, gn = 0;
  }
}
const ei = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $o(e) {
  try {
    for (wt = 0; wt < Qe.length; wt++) {
      const t = Qe[wt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ui(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; wt < Qe.length; wt++) {
      const t = Qe[wt];
      t && (t.flags &= -2);
    }
    wt = -1, Qe.length = 0, So(), $i = null, (Qe.length || wn.length) && $o();
  }
}
let Je = null, To = null;
function Ti(e) {
  const t = Je;
  return Je = e, To = e && e.type.__scopeId || null, t;
}
function Co(e, t = Je, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && Ii(-1);
    const s = Ti(t);
    let a;
    try {
      a = e(...r);
    } finally {
      Ti(s), i._d && Ii(1);
    }
    return a;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Xt(e, t, n, i) {
  const r = e.dirs, s = t && t.dirs;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[i];
    l && (jt(), vt(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), qt());
  }
}
function Rr(e, t) {
  if (Ge) {
    let n = Ge.provides;
    const i = Ge.parent && Ge.parent.provides;
    i === n && (n = Ge.provides = Object.create(i)), n[e] = t;
  }
}
function Yt(e, t, n = !1) {
  const i = tl();
  if (i || kn) {
    let r = kn ? kn._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ue(t) ? t.call(i && i.proxy) : t;
  }
}
const zc = /* @__PURE__ */ Symbol.for("v-scx"), Dc = () => Yt(zc);
function ct(e, t, n) {
  return Ao(e, t, n);
}
function Ao(e, t, n = Ee) {
  const { immediate: i, deep: r, flush: s, once: a } = n, o = Fe({}, n), l = t && i || !t && s !== "post";
  let c;
  if (ii) {
    if (s === "sync") {
      const h = Dc();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = $t, h.resume = $t, h.pause = $t, h;
    }
  }
  const u = Ge;
  o.call = (h, m, x) => vt(h, u, m, x);
  let f = !1;
  s === "post" ? o.scheduler = (h) => {
    et(h, u && u.suspense);
  } : s !== "sync" && (f = !0, o.scheduler = (h, m) => {
    m ? h() : ms(h);
  }), o.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const d = Fc(e, t, o);
  return ii && (c ? c.push(d) : l && d()), d;
}
function Uc(e, t, n) {
  const i = this.proxy, r = Oe(e) ? e.includes(".") ? Io(i, e) : () => i[e] : e.bind(i, i);
  let s;
  ue(t) ? s = t : (s = t.handler, n = t);
  const a = di(this), o = Ao(r, s.bind(i), n);
  return a(), o;
}
function Io(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
const Vc = /* @__PURE__ */ Symbol("_vte"), Bc = (e) => e.__isTeleport, wr = /* @__PURE__ */ Symbol("_leaveCb");
function vs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, vs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  return ue(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Eo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Qs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ci = /* @__PURE__ */ new WeakMap();
function Kn(e, t, n, i, r = !1) {
  if (ie(e)) {
    e.forEach(
      (x, $) => Kn(
        x,
        t && (ie(t) ? t[$] : t),
        n,
        i,
        r
      )
    );
    return;
  }
  if (_n(i) && !r) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Kn(e, t, n, i.component.subTree);
    return;
  }
  const s = i.shapeFlag & 4 ? ks(i.component) : i.el, a = r ? null : s, { i: o, r: l } = e, c = t && t.r, u = o.refs === Ee ? o.refs = {} : o.refs, f = o.setupState, d = /* @__PURE__ */ be(f), h = f === Ee ? Ja : (x) => Qs(u, x) ? !1 : _e(d, x), m = (x, $) => !($ && Qs(u, $));
  if (c != null && c !== l) {
    if (Js(t), Oe(c))
      u[c] = null, h(c) && (f[c] = null);
    else if (/* @__PURE__ */ ze(c)) {
      const x = t;
      m(c, x.k) && (c.value = null), x.k && (u[x.k] = null);
    }
  }
  if (ue(l))
    ui(l, o, 12, [a, u]);
  else {
    const x = Oe(l), $ = /* @__PURE__ */ ze(l);
    if (x || $) {
      const E = () => {
        if (e.f) {
          const O = x ? h(l) ? f[l] : u[l] : m() || !e.k ? l.value : u[e.k];
          if (r)
            ie(O) && os(O, s);
          else if (ie(O))
            O.includes(s) || O.push(s);
          else if (x)
            u[l] = [s], h(l) && (f[l] = u[l]);
          else {
            const K = [s];
            m(l, e.k) && (l.value = K), e.k && (u[e.k] = K);
          }
        } else x ? (u[l] = a, h(l) && (f[l] = a)) : $ && (m(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const O = () => {
          E(), Ci.delete(e);
        };
        O.id = -1, Ci.set(e, O), et(O, n);
      } else
        Js(e), E();
    }
  }
}
function Js(e) {
  const t = Ci.get(e);
  t && (t.flags |= 8, Ci.delete(e));
}
ir().requestIdleCallback;
ir().cancelIdleCallback;
const _n = (e) => !!e.type.__asyncLoader, No = (e) => e.type.__isKeepAlive;
function Hc(e, t) {
  Oo(e, "a", t);
}
function Zc(e, t) {
  Oo(e, "da", t);
}
function Oo(e, t, n = Ge) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (or(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      No(r.parent.vnode) && Wc(i, t, n, r), r = r.parent;
  }
}
function Wc(e, t, n, i) {
  const r = or(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Po(() => {
    os(i[t], r);
  }, n);
}
function or(e, t, n = Ge, i = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      jt();
      const o = di(n), l = vt(t, n, e, a);
      return o(), qt(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const Ut = (e) => (t, n = Ge) => {
  (!ii || e === "sp") && or(e, (...i) => t(...i), n);
}, Kc = Ut("bm"), gs = Ut("m"), Gc = Ut(
  "bu"
), Yc = Ut("u"), ys = Ut(
  "bum"
), Po = Ut("um"), Qc = Ut(
  "sp"
), Jc = Ut("rtg"), Xc = Ut("rtc");
function eu(e, t = Ge) {
  or("ec", e, t);
}
const tu = "components", Mo = /* @__PURE__ */ Symbol.for("v-ndc");
function nu(e) {
  return Oe(e) ? iu(tu, e, !1) || e : e || Mo;
}
function iu(e, t, n = !0, i = !1) {
  const r = Je || Ge;
  if (r) {
    const s = r.type;
    {
      const o = Uu(
        s,
        !1
      );
      if (o && (o === t || o === Ue(t) || o === nr(Ue(t))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Xs(r[e] || s[e], t) || // global registration
      Xs(r.appContext[e], t)
    );
    return !a && i ? s : a;
  }
}
function Xs(e, t) {
  return e && (e[t] || e[Ue(t)] || e[nr(Ue(t))]);
}
function Me(e, t, n, i) {
  let r;
  const s = n, a = ie(e);
  if (a || Oe(e)) {
    const o = a && /* @__PURE__ */ sn(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ rt(e), c = /* @__PURE__ */ Lt(e), e = rr(e)), r = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      r[u] = t(
        l ? c ? $n(mt(e[u])) : mt(e[u]) : e[u],
        u,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, s);
  } else if ($e(e))
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
function ru(e, t, n = {}, i, r) {
  if (Je.ce || Je.parent && _n(Je.parent) && Je.parent.ce) {
    const c = Object.keys(n).length > 0;
    return y(), xe(
      le,
      null,
      [Ze("slot", n, i)],
      c ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), y();
  const a = s && Ro(s(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = xe(
    le,
    {
      key: (o && !st(o) ? o : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && i ? "_fb" : "")
    },
    a || [],
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Ro(e) {
  return e.some((t) => ni(t) ? !(t.type === zt || t.type === le && !Ro(t.children)) : !0) ? e : null;
}
const Fr = (e) => e ? nl(e) ? ks(e) : Fr(e.parent) : null, Gn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Fr(e.parent),
    $root: (e) => Fr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => jo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ms(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Nn.bind(e.proxy)),
    $watch: (e) => Uc.bind(e)
  })
), _r = (e, t) => e !== Ee && !e.__isScriptSetup && _e(e, t), su = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: r, props: s, accessCache: a, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const d = a[t];
      if (d !== void 0)
        switch (d) {
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
        if (_r(i, t))
          return a[t] = 1, i[t];
        if (r !== Ee && _e(r, t))
          return a[t] = 2, r[t];
        if (_e(s, t))
          return a[t] = 3, s[t];
        if (n !== Ee && _e(n, t))
          return a[t] = 4, n[t];
        jr && (a[t] = 0);
      }
    }
    const c = Gn[t];
    let u, f;
    if (c)
      return t === "$attrs" && Ke(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ee && _e(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, _e(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: r, ctx: s } = e;
    return _r(r, t) ? (r[t] = n, !0) : i !== Ee && _e(i, t) ? (i[t] = n, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, props: s, type: a }
  }, o) {
    let l;
    return !!(n[o] || e !== Ee && o[0] !== "$" && _e(e, o) || _r(t, o) || _e(s, o) || _e(i, o) || _e(Gn, o) || _e(r.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ea(e) {
  return ie(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let jr = !0;
function au(e) {
  const t = jo(e), n = e.proxy, i = e.ctx;
  jr = !1, t.beforeCreate && ta(t.beforeCreate, e, "bc");
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
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: m,
    activated: x,
    deactivated: $,
    beforeDestroy: E,
    beforeUnmount: O,
    destroyed: K,
    unmounted: j,
    render: F,
    renderTracked: b,
    renderTriggered: g,
    errorCaptured: q,
    serverPrefetch: J,
    // public API
    expose: ce,
    inheritAttrs: we,
    // assets
    components: T,
    directives: M,
    filters: X
  } = t;
  if (c && ou(c, i, null), a)
    for (const ye in a) {
      const S = a[ye];
      ue(S) && (i[ye] = S.bind(n));
    }
  if (r) {
    const ye = r.call(n, n);
    $e(ye) && (e.data = /* @__PURE__ */ lt(ye));
  }
  if (jr = !0, s)
    for (const ye in s) {
      const S = s[ye], G = ue(S) ? S.bind(n, n) : ue(S.get) ? S.get.bind(n, n) : $t, pe = !ue(S) && ue(S.set) ? S.set.bind(n) : $t, Se = Z({
        get: G,
        set: pe
      });
      Object.defineProperty(i, ye, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (Ne) => Se.value = Ne
      });
    }
  if (o)
    for (const ye in o)
      Fo(o[ye], i, n, ye);
  if (l) {
    const ye = ue(l) ? l.call(n) : l;
    Reflect.ownKeys(ye).forEach((S) => {
      Rr(S, ye[S]);
    });
  }
  u && ta(u, e, "c");
  function me(ye, S) {
    ie(S) ? S.forEach((G) => ye(G.bind(n))) : S && ye(S.bind(n));
  }
  if (me(Kc, f), me(gs, d), me(Gc, h), me(Yc, m), me(Hc, x), me(Zc, $), me(eu, q), me(Xc, b), me(Jc, g), me(ys, O), me(Po, j), me(Qc, J), ie(ce))
    if (ce.length) {
      const ye = e.exposed || (e.exposed = {});
      ce.forEach((S) => {
        Object.defineProperty(ye, S, {
          get: () => n[S],
          set: (G) => n[S] = G,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === $t && (e.render = F), we != null && (e.inheritAttrs = we), T && (e.components = T), M && (e.directives = M), J && Eo(e);
}
function ou(e, t, n = $t) {
  ie(e) && (e = qr(e));
  for (const i in e) {
    const r = e[i];
    let s;
    $e(r) ? "default" in r ? s = Yt(
      r.from || i,
      r.default,
      !0
    ) : s = Yt(r.from || i) : s = Yt(r), /* @__PURE__ */ ze(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[i] = s;
  }
}
function ta(e, t, n) {
  vt(
    ie(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Fo(e, t, n, i) {
  let r = i.includes(".") ? Io(n, i) : () => n[i];
  if (Oe(e)) {
    const s = t[e];
    ue(s) && ct(r, s);
  } else if (ue(e))
    ct(r, e.bind(n));
  else if ($e(e))
    if (ie(e))
      e.forEach((s) => Fo(s, t, n, i));
    else {
      const s = ue(e.handler) ? e.handler.bind(n) : t[e.handler];
      ue(s) && ct(r, s, e);
    }
}
function jo(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, o = s.get(t);
  let l;
  return o ? l = o : !r.length && !n && !i ? l = t : (l = {}, r.length && r.forEach(
    (c) => Ai(l, c, a, !0)
  ), Ai(l, t, a)), $e(t) && s.set(t, l), l;
}
function Ai(e, t, n, i = !1) {
  const { mixins: r, extends: s } = t;
  s && Ai(e, s, n, !0), r && r.forEach(
    (a) => Ai(e, a, n, !0)
  );
  for (const a in t)
    if (!(i && a === "expose")) {
      const o = lu[a] || n && n[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const lu = {
  data: na,
  props: ia,
  emits: ia,
  // objects
  methods: zn,
  computed: zn,
  // lifecycle
  beforeCreate: Ye,
  created: Ye,
  beforeMount: Ye,
  mounted: Ye,
  beforeUpdate: Ye,
  updated: Ye,
  beforeDestroy: Ye,
  beforeUnmount: Ye,
  destroyed: Ye,
  unmounted: Ye,
  activated: Ye,
  deactivated: Ye,
  errorCaptured: Ye,
  serverPrefetch: Ye,
  // assets
  components: zn,
  directives: zn,
  // watch
  watch: uu,
  // provide / inject
  provide: na,
  inject: cu
};
function na(e, t) {
  return t ? e ? function() {
    return Fe(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cu(e, t) {
  return zn(qr(e), qr(t));
}
function qr(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zn(e, t) {
  return e ? Fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ia(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Fe(
    /* @__PURE__ */ Object.create(null),
    ea(e),
    ea(t ?? {})
  ) : t;
}
function uu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Fe(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Ye(e[i], t[i]);
  return n;
}
function qo() {
  return {
    app: null,
    config: {
      isNativeTag: Ja,
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
let du = 0;
function fu(e, t) {
  return function(i, r = null) {
    ue(i) || (i = Fe({}, i)), r != null && !$e(r) && (r = null);
    const s = qo(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = s.app = {
      _uid: du++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Bu,
      get config() {
        return s.config;
      },
      set config(u) {
      },
      use(u, ...f) {
        return a.has(u) || (u && ue(u.install) ? (a.add(u), u.install(c, ...f)) : ue(u) && (a.add(u), u(c, ...f))), c;
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), c;
      },
      component(u, f) {
        return f ? (s.components[u] = f, c) : s.components[u];
      },
      directive(u, f) {
        return f ? (s.directives[u] = f, c) : s.directives[u];
      },
      mount(u, f, d) {
        if (!l) {
          const h = c._ceVNode || Ze(i, r);
          return h.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), e(h, u, d), l = !0, c._container = u, u.__vue_app__ = c, ks(h.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (vt(
          o,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, f) {
        return s.provides[u] = f, c;
      },
      runWithContext(u) {
        const f = kn;
        kn = c;
        try {
          return u();
        } finally {
          kn = f;
        }
      }
    };
    return c;
  };
}
let kn = null;
const pu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ue(t)}Modifiers`] || e[`${nt(t)}Modifiers`];
function hu(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ee;
  let r = n;
  const s = t.startsWith("update:"), a = s && pu(i, t.slice(7));
  a && (a.trim && (r = n.map((u) => Oe(u) ? u.trim() : u)), a.number && (r = n.map(Yl)));
  let o, l = i[o = mr(t)] || // also try camelCase event handler (#2249)
  i[o = mr(Ue(t))];
  !l && s && (l = i[o = mr(nt(t))]), l && vt(
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
    e.emitted[o] = !0, vt(
      c,
      e,
      6,
      r
    );
  }
}
const mu = /* @__PURE__ */ new WeakMap();
function Lo(e, t, n = !1) {
  const i = n ? mu : t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let a = {}, o = !1;
  if (!ue(e)) {
    const l = (c) => {
      const u = Lo(c, t, !0);
      u && (o = !0, Fe(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !o ? ($e(e) && i.set(e, null), null) : (ie(s) ? s.forEach((l) => a[l] = null) : Fe(a, s), $e(e) && i.set(e, a), a);
}
function lr(e, t) {
  return !e || !Qi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, nt(t)) || _e(e, t));
}
function ra(e) {
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
    props: f,
    data: d,
    setupState: h,
    ctx: m,
    inheritAttrs: x
  } = e, $ = Ti(e);
  let E, O;
  try {
    if (n.shapeFlag & 4) {
      const j = r || i, F = j;
      E = kt(
        c.call(
          F,
          j,
          u,
          f,
          h,
          d,
          m
        )
      ), O = o;
    } else {
      const j = t;
      E = kt(
        j.length > 1 ? j(
          f,
          { attrs: o, slots: a, emit: l }
        ) : j(
          f,
          null
        )
      ), O = t.props ? o : vu(o);
    }
  } catch (j) {
    Yn.length = 0, ar(j, e, 1), E = Ze(zt);
  }
  let K = E;
  if (O && x !== !1) {
    const j = Object.keys(O), { shapeFlag: F } = K;
    j.length && F & 7 && (s && j.some(Ji) && (O = gu(
      O,
      s
    )), K = Tn(K, O, !1, !0));
  }
  return n.dirs && (K = Tn(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition && vs(K, n.transition), E = K, Ti($), E;
}
const vu = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gu = (e, t) => {
  const n = {};
  for (const i in e)
    (!Ji(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function yu(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: a, children: o, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? sa(i, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (zo(a, i, d) && !lr(c, d))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : i === a ? !1 : i ? a ? sa(i, a, c) : !0 : !!a;
  return !1;
}
function sa(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (zo(t, e, s) && !lr(n, s))
      return !0;
  }
  return !1;
}
function zo(e, t, n) {
  const i = e[n], r = t[n];
  return n === "style" && $e(i) && $e(r) ? !ls(i, r) : i !== r;
}
function bu({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = i, e = r), r === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Do = {}, Uo = () => Object.create(Do), Vo = (e) => Object.getPrototypeOf(e) === Do;
function xu(e, t, n, i = !1) {
  const r = {}, s = Uo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Bo(e, t, r, s);
  for (const a in e.propsOptions[0])
    a in r || (r[a] = void 0);
  n ? e.props = i ? r : /* @__PURE__ */ Sc(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function wu(e, t, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, o = /* @__PURE__ */ be(r), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (lr(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (l)
          if (_e(s, d))
            h !== s[d] && (s[d] = h, c = !0);
          else {
            const m = Ue(d);
            r[m] = Lr(
              l,
              o,
              m,
              h,
              e,
              !1
            );
          }
        else
          h !== s[d] && (s[d] = h, c = !0);
      }
    }
  } else {
    Bo(e, t, r, s) && (c = !0);
    let u;
    for (const f in o)
      (!t || // for camelCase
      !_e(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = nt(f)) === f || !_e(t, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[f] = Lr(
        l,
        o,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (s !== o)
      for (const f in s)
        (!t || !_e(t, f)) && (delete s[f], c = !0);
  }
  c && Pt(e.attrs, "set", "");
}
function Bo(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let a = !1, o;
  if (t)
    for (let l in t) {
      if (Hn(l))
        continue;
      const c = t[l];
      let u;
      r && _e(r, u = Ue(l)) ? !s || !s.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : lr(e.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ be(n), c = o || Ee;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = Lr(
        r,
        l,
        f,
        c[f],
        e,
        !_e(c, f)
      );
    }
  }
  return a;
}
function Lr(e, t, n, i, r, s) {
  const a = e[n];
  if (a != null) {
    const o = _e(a, "default");
    if (o && i === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ue(l)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const u = di(r);
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
    ] && (i === "" || i === nt(n)) && (i = !0));
  }
  return i;
}
const _u = /* @__PURE__ */ new WeakMap();
function Ho(e, t, n = !1) {
  const i = n ? _u : t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, a = {}, o = [];
  let l = !1;
  if (!ue(e)) {
    const u = (f) => {
      l = !0;
      const [d, h] = Ho(f, t, !0);
      Fe(a, d), h && o.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return $e(e) && i.set(e, bn), bn;
  if (ie(s))
    for (let u = 0; u < s.length; u++) {
      const f = Ue(s[u]);
      aa(f) && (a[f] = Ee);
    }
  else if (s)
    for (const u in s) {
      const f = Ue(u);
      if (aa(f)) {
        const d = s[u], h = a[f] = ie(d) || ue(d) ? { type: d } : Fe({}, d), m = h.type;
        let x = !1, $ = !0;
        if (ie(m))
          for (let E = 0; E < m.length; ++E) {
            const O = m[E], K = ue(O) && O.name;
            if (K === "Boolean") {
              x = !0;
              break;
            } else K === "String" && ($ = !1);
          }
        else
          x = ue(m) && m.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = x, h[
          1
          /* shouldCastTrue */
        ] = $, (x || _e(h, "default")) && o.push(f);
      }
    }
  const c = [a, o];
  return $e(e) && i.set(e, c), c;
}
function aa(e) {
  return e[0] !== "$" && !Hn(e);
}
const bs = (e) => e === "_" || e === "_ctx" || e === "$stable", xs = (e) => ie(e) ? e.map(kt) : [kt(e)], ku = (e, t, n) => {
  if (t._n)
    return t;
  const i = Co((...r) => xs(t(...r)), n);
  return i._c = !1, i;
}, Zo = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if (bs(r)) continue;
    const s = e[r];
    if (ue(s))
      t[r] = ku(r, s, i);
    else if (s != null) {
      const a = xs(s);
      t[r] = () => a;
    }
  }
}, Wo = (e, t) => {
  const n = xs(t);
  e.slots.default = () => n;
}, Ko = (e, t, n) => {
  for (const i in t)
    (n || !bs(i)) && (e[i] = t[i]);
}, Su = (e, t, n) => {
  const i = e.slots = Uo();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ko(i, t, n), n && no(i, "_", r, !0)) : Zo(t, i);
  } else t && Wo(e, t);
}, $u = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, a = Ee;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? s = !1 : Ko(r, t, n) : (s = !t.$stable, Zo(t, r)), a = t;
  } else t && (Wo(e, t), a = { default: 1 });
  if (s)
    for (const o in r)
      !bs(o) && a[o] == null && delete r[o];
}, et = Eu;
function Tu(e) {
  return Cu(e);
}
function Cu(e, t) {
  const n = ir();
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
    parentNode: f,
    nextSibling: d,
    setScopeId: h = $t,
    insertStaticContent: m
  } = e, x = (p, v, w, P = null, I = null, C = null, U = void 0, z = null, L = !!v.dynamicChildren) => {
    if (p === v)
      return;
    p && !Fn(p, v) && (P = pn(p), Ne(p, I, C, !0), p = null), v.patchFlag === -2 && (L = !1, v.dynamicChildren = null);
    const { type: N, ref: ne, shapeFlag: H } = v;
    switch (N) {
      case cr:
        $(p, v, w, P);
        break;
      case zt:
        E(p, v, w, P);
        break;
      case Sr:
        p == null && O(v, w, P, U);
        break;
      case le:
        T(
          p,
          v,
          w,
          P,
          I,
          C,
          U,
          z,
          L
        );
        break;
      default:
        H & 1 ? F(
          p,
          v,
          w,
          P,
          I,
          C,
          U,
          z,
          L
        ) : H & 6 ? M(
          p,
          v,
          w,
          P,
          I,
          C,
          U,
          z,
          L
        ) : (H & 64 || H & 128) && N.process(
          p,
          v,
          w,
          P,
          I,
          C,
          U,
          z,
          L,
          Pn
        );
    }
    ne != null && I ? Kn(ne, p && p.ref, C, v || p, !v) : ne == null && p && p.ref != null && Kn(p.ref, null, C, p, !0);
  }, $ = (p, v, w, P) => {
    if (p == null)
      i(
        v.el = o(v.children),
        w,
        P
      );
    else {
      const I = v.el = p.el;
      v.children !== p.children && c(I, v.children);
    }
  }, E = (p, v, w, P) => {
    p == null ? i(
      v.el = l(v.children || ""),
      w,
      P
    ) : v.el = p.el;
  }, O = (p, v, w, P) => {
    [p.el, p.anchor] = m(
      p.children,
      v,
      w,
      P,
      p.el,
      p.anchor
    );
  }, K = ({ el: p, anchor: v }, w, P) => {
    let I;
    for (; p && p !== v; )
      I = d(p), i(p, w, P), p = I;
    i(v, w, P);
  }, j = ({ el: p, anchor: v }) => {
    let w;
    for (; p && p !== v; )
      w = d(p), r(p), p = w;
    r(v);
  }, F = (p, v, w, P, I, C, U, z, L) => {
    if (v.type === "svg" ? U = "svg" : v.type === "math" && (U = "mathml"), p == null)
      b(
        v,
        w,
        P,
        I,
        C,
        U,
        z,
        L
      );
    else {
      const N = p.el && p.el._isVueCE ? p.el : null;
      try {
        N && N._beginPatch(), J(
          p,
          v,
          I,
          C,
          U,
          z,
          L
        );
      } finally {
        N && N._endPatch();
      }
    }
  }, b = (p, v, w, P, I, C, U, z) => {
    let L, N;
    const { props: ne, shapeFlag: H, transition: ee, dirs: ae } = p;
    if (L = p.el = a(
      p.type,
      C,
      ne && ne.is,
      ne
    ), H & 8 ? u(L, p.children) : H & 16 && q(
      p.children,
      L,
      null,
      P,
      I,
      kr(p, C),
      U,
      z
    ), ae && Xt(p, null, P, "created"), g(L, p, p.scopeId, U, P), ne) {
      for (const Ae in ne)
        Ae !== "value" && !Hn(Ae) && s(L, Ae, null, ne[Ae], C, P);
      "value" in ne && s(L, "value", null, ne.value, C), (N = ne.onVnodeBeforeMount) && xt(N, P, p);
    }
    ae && Xt(p, null, P, "beforeMount");
    const ve = Au(I, ee);
    ve && ee.beforeEnter(L), i(L, v, w), ((N = ne && ne.onVnodeMounted) || ve || ae) && et(() => {
      try {
        N && xt(N, P, p), ve && ee.enter(L), ae && Xt(p, null, P, "mounted");
      } finally {
      }
    }, I);
  }, g = (p, v, w, P, I) => {
    if (w && h(p, w), P)
      for (let C = 0; C < P.length; C++)
        h(p, P[C]);
    if (I) {
      let C = I.subTree;
      if (v === C || Jo(C.type) && (C.ssContent === v || C.ssFallback === v)) {
        const U = I.vnode;
        g(
          p,
          U,
          U.scopeId,
          U.slotScopeIds,
          I.parent
        );
      }
    }
  }, q = (p, v, w, P, I, C, U, z, L = 0) => {
    for (let N = L; N < p.length; N++) {
      const ne = p[N] = z ? Ot(p[N]) : kt(p[N]);
      x(
        null,
        ne,
        v,
        w,
        P,
        I,
        C,
        U,
        z
      );
    }
  }, J = (p, v, w, P, I, C, U) => {
    const z = v.el = p.el;
    let { patchFlag: L, dynamicChildren: N, dirs: ne } = v;
    L |= p.patchFlag & 16;
    const H = p.props || Ee, ee = v.props || Ee;
    let ae;
    if (w && en(w, !1), (ae = ee.onVnodeBeforeUpdate) && xt(ae, w, v, p), ne && Xt(v, p, w, "beforeUpdate"), w && en(w, !0), (H.innerHTML && ee.innerHTML == null || H.textContent && ee.textContent == null) && u(z, ""), N ? ce(
      p.dynamicChildren,
      N,
      z,
      w,
      P,
      kr(v, I),
      C
    ) : U || S(
      p,
      v,
      z,
      null,
      w,
      P,
      kr(v, I),
      C,
      !1
    ), L > 0) {
      if (L & 16)
        we(z, H, ee, w, I);
      else if (L & 2 && H.class !== ee.class && s(z, "class", null, ee.class, I), L & 4 && s(z, "style", H.style, ee.style, I), L & 8) {
        const ve = v.dynamicProps;
        for (let Ae = 0; Ae < ve.length; Ae++) {
          const Te = ve[Ae], je = H[Te], Ve = ee[Te];
          (Ve !== je || Te === "value") && s(z, Te, je, Ve, I, w);
        }
      }
      L & 1 && p.children !== v.children && u(z, v.children);
    } else !U && N == null && we(z, H, ee, w, I);
    ((ae = ee.onVnodeUpdated) || ne) && et(() => {
      ae && xt(ae, w, v, p), ne && Xt(v, p, w, "updated");
    }, P);
  }, ce = (p, v, w, P, I, C, U) => {
    for (let z = 0; z < v.length; z++) {
      const L = p[z], N = v[z], ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Fn(L, N) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? f(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      x(
        L,
        N,
        ne,
        null,
        P,
        I,
        C,
        U,
        !0
      );
    }
  }, we = (p, v, w, P, I) => {
    if (v !== w) {
      if (v !== Ee)
        for (const C in v)
          !Hn(C) && !(C in w) && s(
            p,
            C,
            v[C],
            null,
            I,
            P
          );
      for (const C in w) {
        if (Hn(C)) continue;
        const U = w[C], z = v[C];
        U !== z && C !== "value" && s(p, C, z, U, I, P);
      }
      "value" in w && s(p, "value", v.value, w.value, I);
    }
  }, T = (p, v, w, P, I, C, U, z, L) => {
    const N = v.el = p ? p.el : o(""), ne = v.anchor = p ? p.anchor : o("");
    let { patchFlag: H, dynamicChildren: ee, slotScopeIds: ae } = v;
    ae && (z = z ? z.concat(ae) : ae), p == null ? (i(N, w, P), i(ne, w, P), q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      w,
      ne,
      I,
      C,
      U,
      z,
      L
    )) : H > 0 && H & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === ee.length ? (ce(
      p.dynamicChildren,
      ee,
      w,
      I,
      C,
      U,
      z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (v.key != null || I && v === I.subTree) && Go(
      p,
      v,
      !0
      /* shallow */
    )) : S(
      p,
      v,
      w,
      ne,
      I,
      C,
      U,
      z,
      L
    );
  }, M = (p, v, w, P, I, C, U, z, L) => {
    v.slotScopeIds = z, p == null ? v.shapeFlag & 512 ? I.ctx.activate(
      v,
      w,
      P,
      U,
      L
    ) : X(
      v,
      w,
      P,
      I,
      C,
      U,
      L
    ) : oe(p, v, L);
  }, X = (p, v, w, P, I, C, U) => {
    const z = p.component = ju(
      p,
      P,
      I
    );
    if (No(p) && (z.ctx.renderer = Pn), qu(z, !1, U), z.asyncDep) {
      if (I && I.registerDep(z, me, U), !p.el) {
        const L = z.subTree = Ze(zt);
        E(null, L, v, w), p.placeholder = L.el;
      }
    } else
      me(
        z,
        p,
        v,
        w,
        I,
        C,
        U
      );
  }, oe = (p, v, w) => {
    const P = v.component = p.component;
    if (yu(p, v, w))
      if (P.asyncDep && !P.asyncResolved) {
        ye(P, v, w);
        return;
      } else
        P.next = v, P.update();
    else
      v.el = p.el, P.vnode = v;
  }, me = (p, v, w, P, I, C, U) => {
    const z = () => {
      if (p.isMounted) {
        let { next: H, bu: ee, u: ae, parent: ve, vnode: Ae } = p;
        {
          const yt = Yo(p);
          if (yt) {
            H && (H.el = Ae.el, ye(p, H, U)), yt.asyncDep.then(() => {
              et(() => {
                p.isUnmounted || N();
              }, I);
            });
            return;
          }
        }
        let Te = H, je;
        en(p, !1), H ? (H.el = Ae.el, ye(p, H, U)) : H = Ae, ee && vr(ee), (je = H.props && H.props.onVnodeBeforeUpdate) && xt(je, ve, H, Ae), en(p, !0);
        const Ve = ra(p), gt = p.subTree;
        p.subTree = Ve, x(
          gt,
          Ve,
          // parent may have changed if it's in a teleport
          f(gt.el),
          // anchor may have changed if it's in a fragment
          pn(gt),
          p,
          I,
          C
        ), H.el = Ve.el, Te === null && bu(p, Ve.el), ae && et(ae, I), (je = H.props && H.props.onVnodeUpdated) && et(
          () => xt(je, ve, H, Ae),
          I
        );
      } else {
        let H;
        const { el: ee, props: ae } = v, { bm: ve, m: Ae, parent: Te, root: je, type: Ve } = p, gt = _n(v);
        en(p, !1), ve && vr(ve), !gt && (H = ae && ae.onVnodeBeforeMount) && xt(H, Te, v), en(p, !0);
        {
          je.ce && je.ce._hasShadowRoot() && je.ce._injectChildStyle(
            Ve,
            p.parent ? p.parent.type : void 0
          );
          const yt = p.subTree = ra(p);
          x(
            null,
            yt,
            w,
            P,
            p,
            I,
            C
          ), v.el = yt.el;
        }
        if (Ae && et(Ae, I), !gt && (H = ae && ae.onVnodeMounted)) {
          const yt = v;
          et(
            () => xt(H, Te, yt),
            I
          );
        }
        (v.shapeFlag & 256 || Te && _n(Te.vnode) && Te.vnode.shapeFlag & 256) && p.a && et(p.a, I), p.isMounted = !0, v = w = P = null;
      }
    };
    p.scope.on();
    const L = p.effect = new ao(z);
    p.scope.off();
    const N = p.update = L.run.bind(L), ne = p.job = L.runIfDirty.bind(L);
    ne.i = p, ne.id = p.uid, L.scheduler = () => ms(ne), en(p, !0), N();
  }, ye = (p, v, w) => {
    v.component = p;
    const P = p.vnode.props;
    p.vnode = v, p.next = null, wu(p, v.props, P, w), $u(p, v.children, w), jt(), Ys(p), qt();
  }, S = (p, v, w, P, I, C, U, z, L = !1) => {
    const N = p && p.children, ne = p ? p.shapeFlag : 0, H = v.children, { patchFlag: ee, shapeFlag: ae } = v;
    if (ee > 0) {
      if (ee & 128) {
        pe(
          N,
          H,
          w,
          P,
          I,
          C,
          U,
          z,
          L
        );
        return;
      } else if (ee & 256) {
        G(
          N,
          H,
          w,
          P,
          I,
          C,
          U,
          z,
          L
        );
        return;
      }
    }
    ae & 8 ? (ne & 16 && We(N, I, C), H !== N && u(w, H)) : ne & 16 ? ae & 16 ? pe(
      N,
      H,
      w,
      P,
      I,
      C,
      U,
      z,
      L
    ) : We(N, I, C, !0) : (ne & 8 && u(w, ""), ae & 16 && q(
      H,
      w,
      P,
      I,
      C,
      U,
      z,
      L
    ));
  }, G = (p, v, w, P, I, C, U, z, L) => {
    p = p || bn, v = v || bn;
    const N = p.length, ne = v.length, H = Math.min(N, ne);
    let ee;
    for (ee = 0; ee < H; ee++) {
      const ae = v[ee] = L ? Ot(v[ee]) : kt(v[ee]);
      x(
        p[ee],
        ae,
        w,
        null,
        I,
        C,
        U,
        z,
        L
      );
    }
    N > ne ? We(
      p,
      I,
      C,
      !0,
      !1,
      H
    ) : q(
      v,
      w,
      P,
      I,
      C,
      U,
      z,
      L,
      H
    );
  }, pe = (p, v, w, P, I, C, U, z, L) => {
    let N = 0;
    const ne = v.length;
    let H = p.length - 1, ee = ne - 1;
    for (; N <= H && N <= ee; ) {
      const ae = p[N], ve = v[N] = L ? Ot(v[N]) : kt(v[N]);
      if (Fn(ae, ve))
        x(
          ae,
          ve,
          w,
          null,
          I,
          C,
          U,
          z,
          L
        );
      else
        break;
      N++;
    }
    for (; N <= H && N <= ee; ) {
      const ae = p[H], ve = v[ee] = L ? Ot(v[ee]) : kt(v[ee]);
      if (Fn(ae, ve))
        x(
          ae,
          ve,
          w,
          null,
          I,
          C,
          U,
          z,
          L
        );
      else
        break;
      H--, ee--;
    }
    if (N > H) {
      if (N <= ee) {
        const ae = ee + 1, ve = ae < ne ? v[ae].el : P;
        for (; N <= ee; )
          x(
            null,
            v[N] = L ? Ot(v[N]) : kt(v[N]),
            w,
            ve,
            I,
            C,
            U,
            z,
            L
          ), N++;
      }
    } else if (N > ee)
      for (; N <= H; )
        Ne(p[N], I, C, !0), N++;
    else {
      const ae = N, ve = N, Ae = /* @__PURE__ */ new Map();
      for (N = ve; N <= ee; N++) {
        const tt = v[N] = L ? Ot(v[N]) : kt(v[N]);
        tt.key != null && Ae.set(tt.key, N);
      }
      let Te, je = 0;
      const Ve = ee - ve + 1;
      let gt = !1, yt = 0;
      const Mn = new Array(Ve);
      for (N = 0; N < Ve; N++) Mn[N] = 0;
      for (N = ae; N <= H; N++) {
        const tt = p[N];
        if (je >= Ve) {
          Ne(tt, I, C, !0);
          continue;
        }
        let bt;
        if (tt.key != null)
          bt = Ae.get(tt.key);
        else
          for (Te = ve; Te <= ee; Te++)
            if (Mn[Te - ve] === 0 && Fn(tt, v[Te])) {
              bt = Te;
              break;
            }
        bt === void 0 ? Ne(tt, I, C, !0) : (Mn[bt - ve] = N + 1, bt >= yt ? yt = bt : gt = !0, x(
          tt,
          v[bt],
          w,
          null,
          I,
          C,
          U,
          z,
          L
        ), je++);
      }
      const Us = gt ? Iu(Mn) : bn;
      for (Te = Us.length - 1, N = Ve - 1; N >= 0; N--) {
        const tt = ve + N, bt = v[tt], Vs = v[tt + 1], Bs = tt + 1 < ne ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Vs.el || Qo(Vs)
        ) : P;
        Mn[N] === 0 ? x(
          null,
          bt,
          w,
          Bs,
          I,
          C,
          U,
          z,
          L
        ) : gt && (Te < 0 || N !== Us[Te] ? Se(bt, w, Bs, 2) : Te--);
      }
    }
  }, Se = (p, v, w, P, I = null) => {
    const { el: C, type: U, transition: z, children: L, shapeFlag: N } = p;
    if (N & 6) {
      Se(p.component.subTree, v, w, P);
      return;
    }
    if (N & 128) {
      p.suspense.move(v, w, P);
      return;
    }
    if (N & 64) {
      U.move(p, v, w, Pn);
      return;
    }
    if (U === le) {
      i(C, v, w);
      for (let H = 0; H < L.length; H++)
        Se(L[H], v, w, P);
      i(p.anchor, v, w);
      return;
    }
    if (U === Sr) {
      K(p, v, w);
      return;
    }
    if (P !== 2 && N & 1 && z)
      if (P === 0)
        z.persisted && !C[wr] ? i(C, v, w) : (z.beforeEnter(C), i(C, v, w), et(() => z.enter(C), I));
      else {
        const { leave: H, delayLeave: ee, afterLeave: ae } = z, ve = () => {
          p.ctx.isUnmounted ? r(C) : i(C, v, w);
        }, Ae = () => {
          const Te = C._isLeaving || !!C[wr];
          C._isLeaving && C[wr](
            !0
            /* cancelled */
          ), z.persisted && !Te ? ve() : H(C, () => {
            ve(), ae && ae();
          });
        };
        ee ? ee(C, ve, Ae) : Ae();
      }
    else
      i(C, v, w);
  }, Ne = (p, v, w, P = !1, I = !1) => {
    const {
      type: C,
      props: U,
      ref: z,
      children: L,
      dynamicChildren: N,
      shapeFlag: ne,
      patchFlag: H,
      dirs: ee,
      cacheIndex: ae,
      memo: ve
    } = p;
    if (H === -2 && (I = !1), z != null && (jt(), Kn(z, null, w, p, !0), qt()), ae != null && (v.renderCache[ae] = void 0), ne & 256) {
      v.ctx.deactivate(p);
      return;
    }
    const Ae = ne & 1 && ee, Te = !_n(p);
    let je;
    if (Te && (je = U && U.onVnodeBeforeUnmount) && xt(je, v, p), ne & 6)
      On(p.component, w, P);
    else {
      if (ne & 128) {
        p.suspense.unmount(w, P);
        return;
      }
      Ae && Xt(p, null, v, "beforeUnmount"), ne & 64 ? p.type.remove(
        p,
        v,
        w,
        Pn,
        P
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== le || H > 0 && H & 64) ? We(
        N,
        v,
        w,
        !1,
        !0
      ) : (C === le && H & 384 || !I && ne & 16) && We(L, v, w), P && ot(p);
    }
    const Ve = ve != null && ae == null;
    (Te && (je = U && U.onVnodeUnmounted) || Ae || Ve) && et(() => {
      je && xt(je, v, p), Ae && Xt(p, null, v, "unmounted"), Ve && (p.el = null);
    }, w);
  }, ot = (p) => {
    const { type: v, el: w, anchor: P, transition: I } = p;
    if (v === le) {
      fn(w, P);
      return;
    }
    if (v === Sr) {
      j(p);
      return;
    }
    const C = () => {
      r(w), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (p.shapeFlag & 1 && I && !I.persisted) {
      const { leave: U, delayLeave: z } = I, L = () => U(w, C);
      z ? z(p.el, C, L) : L();
    } else
      C();
  }, fn = (p, v) => {
    let w;
    for (; p !== v; )
      w = d(p), r(p), p = w;
    r(v);
  }, On = (p, v, w) => {
    const { bum: P, scope: I, job: C, subTree: U, um: z, m: L, a: N } = p;
    oa(L), oa(N), P && vr(P), I.stop(), C && (C.flags |= 8, Ne(U, p, v, w)), z && et(z, v), et(() => {
      p.isUnmounted = !0;
    }, v);
  }, We = (p, v, w, P = !1, I = !1, C = 0) => {
    for (let U = C; U < p.length; U++)
      Ne(p[U], v, w, P, I);
  }, pn = (p) => {
    if (p.shapeFlag & 6)
      return pn(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const v = d(p.anchor || p.el), w = v && v[Vc];
    return w ? d(w) : v;
  };
  let hr = !1;
  const Ds = (p, v, w) => {
    let P;
    p == null ? v._vnode && (Ne(v._vnode, null, null, !0), P = v._vnode.component) : x(
      v._vnode || null,
      p,
      v,
      null,
      null,
      null,
      w
    ), v._vnode = p, hr || (hr = !0, Ys(P), So(), hr = !1);
  }, Pn = {
    p: x,
    um: Ne,
    m: Se,
    r: ot,
    mt: X,
    mc: q,
    pc: S,
    pbc: ce,
    n: pn,
    o: e
  };
  return {
    render: Ds,
    hydrate: void 0,
    createApp: fu(Ds)
  };
}
function kr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function en({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Au(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Go(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (ie(i) && ie(r))
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      let o = r[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[s] = Ot(r[s]), o.el = a.el), !n && o.patchFlag !== -2 && Go(a, o)), o.type === cr && (o.patchFlag === -1 && (o = r[s] = Ot(o)), o.el = a.el), o.type === zt && !o.el && (o.el = a.el);
    }
}
function Iu(e) {
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
function Yo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Yo(t);
}
function oa(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Qo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Qo(t.subTree) : null;
}
const Jo = (e) => e.__isSuspense;
function Eu(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : Lc(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), cr = /* @__PURE__ */ Symbol.for("v-txt"), zt = /* @__PURE__ */ Symbol.for("v-cmt"), Sr = /* @__PURE__ */ Symbol.for("v-stc"), Yn = [];
let it = null;
function y(e = !1) {
  Yn.push(it = e ? null : []);
}
function Nu() {
  Yn.pop(), it = Yn[Yn.length - 1] || null;
}
let ti = 1;
function Ii(e, t = !1) {
  ti += e, e < 0 && it && t && (it.hasOnce = !0);
}
function Xo(e) {
  return e.dynamicChildren = ti > 0 ? it || bn : null, Nu(), ti > 0 && it && it.push(e), e;
}
function k(e, t, n, i, r, s) {
  return Xo(
    A(
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
function xe(e, t, n, i, r) {
  return Xo(
    Ze(
      e,
      t,
      n,
      i,
      r,
      !0
    )
  );
}
function ni(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Fn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const el = ({ key: e }) => e ?? null, xi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Oe(e) || /* @__PURE__ */ ze(e) || ue(e) ? { i: Je, r: e, k: t, f: !!n } : e : null);
function A(e, t = null, n = null, i = 0, r = null, s = e === le ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && el(t),
    ref: t && xi(t),
    scopeId: To,
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
    ctx: Je
  };
  return o ? (_s(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Oe(n) ? 8 : 16), ti > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  it && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && it.push(l), l;
}
const Ze = Ou;
function Ou(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === Mo) && (e = zt), ni(e)) {
    const o = Tn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _s(o, n), ti > 0 && !s && it && (o.shapeFlag & 6 ? it[it.indexOf(e)] = o : it.push(o)), o.patchFlag = -2, o;
  }
  if (Vu(e) && (e = e.__vccOpts), t) {
    t = Pu(t);
    let { class: o, style: l } = t;
    o && !Oe(o) && (t.class = De(o)), $e(l) && (/* @__PURE__ */ sr(l) && !ie(l) && (l = Fe({}, l)), t.style = an(l));
  }
  const a = Oe(e) ? 1 : Jo(e) ? 128 : Bc(e) ? 64 : $e(e) ? 4 : ue(e) ? 2 : 0;
  return A(
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
function Pu(e) {
  return e ? /* @__PURE__ */ sr(e) || Vo(e) ? Fe({}, e) : e : null;
}
function Tn(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: a, children: o, transition: l } = e, c = t ? Mu(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && el(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? ie(s) ? s.concat(xi(t)) : [s, xi(t)] : xi(t)
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
    patchFlag: t && e.type !== le ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && Tn(e.ssContent),
    ssFallback: e.ssFallback && Tn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && vs(
    u,
    l.clone(u)
  ), u;
}
function ws(e = " ", t = 0) {
  return Ze(cr, null, e, t);
}
function te(e = "", t = !1) {
  return t ? (y(), xe(zt, null, e)) : Ze(zt, null, e);
}
function kt(e) {
  return e == null || typeof e == "boolean" ? Ze(zt) : ie(e) ? Ze(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ni(e) ? Ot(e) : Ze(cr, null, String(e));
}
function Ot(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Tn(e);
}
function _s(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (ie(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), _s(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Vo(t) ? t._ctx = Je : r === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ue(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [ws(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Mu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = De([t.class, i.class]));
      else if (r === "style")
        t.style = an([t.style, i.style]);
      else if (Qi(r)) {
        const s = t[r], a = i[r];
        a && s !== a && !(ie(s) && s.includes(a)) ? t[r] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ji(r) && (t[r] = a);
      } else r !== "" && (t[r] = i[r]);
  }
  return t;
}
function xt(e, t, n, i = null) {
  vt(e, t, 7, [
    n,
    i
  ]);
}
const Ru = qo();
let Fu = 0;
function ju(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || Ru, s = {
    uid: Fu++,
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
    scope: new rc(
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
    propsOptions: Ho(i, r),
    emitsOptions: Lo(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ee,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ee,
    data: Ee,
    props: Ee,
    attrs: Ee,
    slots: Ee,
    refs: Ee,
    setupState: Ee,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = hu.bind(null, s), e.ce && e.ce(s), s;
}
let Ge = null;
const tl = () => Ge || Je;
let Ei, zr;
{
  const e = ir(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((a) => a(s)) : r[0](s);
    };
  };
  Ei = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ge = n
  ), zr = t(
    "__VUE_SSR_SETTERS__",
    (n) => ii = n
  );
}
const di = (e) => {
  const t = Ge;
  return Ei(e), e.scope.on(), () => {
    e.scope.off(), Ei(t);
  };
}, la = () => {
  Ge && Ge.scope.off(), Ei(null);
};
function nl(e) {
  return e.vnode.shapeFlag & 4;
}
let ii = !1;
function qu(e, t = !1, n = !1) {
  t && zr(t);
  const { props: i, children: r } = e.vnode, s = nl(e);
  xu(e, i, s, t), Su(e, r, n || t);
  const a = s ? Lu(e, t) : void 0;
  return t && zr(!1), a;
}
function Lu(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, su);
  const { setup: i } = n;
  if (i) {
    jt();
    const r = e.setupContext = i.length > 1 ? Du(e) : null, s = di(e), a = ui(
      i,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = eo(a);
    if (qt(), s(), (o || e.sp) && !_n(e) && Eo(e), o) {
      if (a.then(la, la), t)
        return a.then((l) => {
          ca(e, l);
        }).catch((l) => {
          ar(l, e, 0);
        });
      e.asyncDep = a;
    } else
      ca(e, a);
  } else
    il(e);
}
function ca(e, t, n) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $e(t) && (e.setupState = wo(t)), il(e);
}
function il(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || $t);
  {
    const r = di(e);
    jt();
    try {
      au(e);
    } finally {
      qt(), r();
    }
  }
}
const zu = {
  get(e, t) {
    return Ke(e, "get", ""), e[t];
  }
};
function Du(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, zu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ks(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wo($c(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Gn)
        return Gn[n](e);
    },
    has(t, n) {
      return n in t || n in Gn;
    }
  })) : e.proxy;
}
function Uu(e, t = !0) {
  return ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Vu(e) {
  return ue(e) && "__vccOpts" in e;
}
const Z = (e, t) => /* @__PURE__ */ Mc(e, t, ii);
function Ni(e, t, n) {
  try {
    Ii(-1);
    const i = arguments.length;
    return i === 2 ? $e(t) && !ie(t) ? ni(t) ? Ze(e, null, [t]) : Ze(e, t) : Ze(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && ni(n) && (n = [n]), Ze(e, t, n));
  } finally {
    Ii(1);
  }
}
const Bu = "3.5.35";
/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dr;
const ua = typeof window < "u" && window.trustedTypes;
if (ua)
  try {
    Dr = /* @__PURE__ */ ua.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const rl = Dr ? (e) => Dr.createHTML(e) : (e) => e, Hu = "http://www.w3.org/2000/svg", Zu = "http://www.w3.org/1998/Math/MathML", Nt = typeof document < "u" ? document : null, da = Nt && /* @__PURE__ */ Nt.createElement("template"), Wu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? Nt.createElementNS(Hu, e) : t === "mathml" ? Nt.createElementNS(Zu, e) : n ? Nt.createElement(e, { is: n }) : Nt.createElement(e);
    return e === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (e) => Nt.createTextNode(e),
  createComment: (e) => Nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Nt.querySelector(e),
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
      da.innerHTML = rl(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = da.content;
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
}, Ku = /* @__PURE__ */ Symbol("_vtc");
function Gu(e, t, n) {
  const i = e[Ku];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const fa = /* @__PURE__ */ Symbol("_vod"), Yu = /* @__PURE__ */ Symbol("_vsh"), Qu = /* @__PURE__ */ Symbol(""), Ju = /(?:^|;)\s*display\s*:/;
function Xu(e, t, n) {
  const i = e.style, r = Oe(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (Oe(t))
        for (const a of t.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && Dn(i, o, "");
        }
      else
        for (const a in t)
          n[a] == null && Dn(i, a, "");
    for (const a in n) {
      a === "display" && (s = !0);
      const o = n[a];
      o != null ? td(
        e,
        a,
        !Oe(t) && t ? t[a] : void 0,
        o
      ) || Dn(i, a, o) : Dn(i, a, "");
    }
  } else if (r) {
    if (t !== n) {
      const a = i[Qu];
      a && (n += ";" + a), i.cssText = n, s = Ju.test(n);
    }
  } else t && e.removeAttribute("style");
  fa in e && (e[fa] = s ? i.display : "", e[Yu] && (i.display = "none"));
}
const pa = /\s*!important$/;
function Dn(e, t, n) {
  if (ie(n))
    n.forEach((i) => Dn(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = ed(e, t);
    pa.test(n) ? e.setProperty(
      nt(i),
      n.replace(pa, ""),
      "important"
    ) : e[i] = n;
  }
}
const ha = ["Webkit", "Moz", "ms"], $r = {};
function ed(e, t) {
  const n = $r[t];
  if (n)
    return n;
  let i = Ue(t);
  if (i !== "filter" && i in e)
    return $r[t] = i;
  i = nr(i);
  for (let r = 0; r < ha.length; r++) {
    const s = ha[r] + i;
    if (s in e)
      return $r[t] = s;
  }
  return t;
}
function td(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Oe(i) && n === i;
}
const ma = "http://www.w3.org/1999/xlink";
function va(e, t, n, i, r, s = nc(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ma, t.slice(6, t.length)) : e.setAttributeNS(ma, t, n) : n == null || s && !io(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : st(n) ? String(n) : n
  );
}
function ga(e, t, n, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? rl(n) : n);
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
    o === "boolean" ? n = io(n) : n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(r || t);
}
function nd(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function id(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const ya = /* @__PURE__ */ Symbol("_vei");
function rd(e, t, n, i, r = null) {
  const s = e[ya] || (e[ya] = {}), a = s[t];
  if (i && a)
    a.value = i;
  else {
    const [o, l] = sd(t);
    if (i) {
      const c = s[t] = ld(
        i,
        r
      );
      nd(e, o, c, l);
    } else a && (id(e, o, a, l), s[t] = void 0);
  }
}
const ba = /(?:Once|Passive|Capture)$/;
function sd(e) {
  let t;
  if (ba.test(e)) {
    t = {};
    let i;
    for (; i = e.match(ba); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t];
}
let Tr = 0;
const ad = /* @__PURE__ */ Promise.resolve(), od = () => Tr || (ad.then(() => Tr = 0), Tr = Date.now());
function ld(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const r = n.value;
    if (ie(r)) {
      const s = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        s.call(i), i._stopped = !0;
      };
      const a = r.slice(), o = [i];
      for (let l = 0; l < a.length && !i._stopped; l++) {
        const c = a[l];
        c && vt(
          c,
          t,
          5,
          o
        );
      }
    } else
      vt(
        r,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = od(), n;
}
const xa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cd = (e, t, n, i, r, s) => {
  const a = r === "svg";
  t === "class" ? Gu(e, i, a) : t === "style" ? Xu(e, n, i) : Qi(t) ? Ji(t) || rd(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ud(e, t, i, a)) ? (ga(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && va(e, t, i, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (dd(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Oe(i))) ? ga(e, Ue(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), va(e, t, i, a));
};
function ud(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && xa(t) && ue(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return xa(t) && Oe(n) ? !1 : t in e;
}
function dd(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ue(t);
  return Array.isArray(n) ? n.some((r) => Ue(r) === i) : Object.keys(n).some((r) => Ue(r) === i);
}
const wa = {};
// @__NO_SIDE_EFFECTS__
function fd(e, t, n) {
  let i = /* @__PURE__ */ Pe(e, t);
  Xi(i) && (i = Fe({}, i, t));
  class r extends Ss {
    constructor(a) {
      super(i, a, n);
    }
  }
  return r.def = i, r;
}
const pd = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ss extends pd {
  constructor(t, n = {}, i = ka) {
    super(), this._def = t, this._props = n, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && i !== ka ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      Fe({}, t.shadowRootOptions, {
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
      if (t instanceof Ss) {
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
    this._connected = !1, Nn(() => {
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
      if (s && !ie(s))
        for (const l in s) {
          const c = s[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Zs(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[Ue(l)] = !0);
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
        _e(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => _(n[i])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, i = ie(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && i.includes(r) && this._setProp(r, this[r]);
    for (const r of i.map(Ue))
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
    let i = n ? this.getAttribute(t) : wa;
    const r = Ue(t);
    n && this._numberProps && this._numberProps[r] && (i = Zs(i)), this._setProp(r, i, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === wa ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), i)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(nt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(nt(t), n + "") : n || this.removeAttribute(nt(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), bd(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Ze(this._def, Fe(t, this._props));
    return this._instance || (n.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const r = (s, a) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            Xi(a[0]) ? Fe({ detail: a }, a[0]) : { detail: a }
          )
        );
      };
      i.emit = (s, ...a) => {
        r(s, a), nt(s) !== s && r(nt(s), a);
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
            let f;
            for (; f = u.nextNode(); )
              f.setAttribute(c, "");
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
function hd(e) {
  const t = tl(), n = t && t.ce;
  return n || null;
}
const md = ["ctrl", "shift", "alt", "meta"], vd = {
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
  exact: (e, t) => md.some((n) => e[`${n}Key`] && !t.includes(n))
}, Cn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const o = vd[t[a]];
      if (o && o(r, t)) return;
    }
    return e(r, ...s);
  });
}, gd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Oi = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (r) => {
    if (!("key" in r))
      return;
    const s = nt(r.key);
    if (t.some(
      (a) => a === s || gd[a] === s
    ))
      return e(r);
  });
}, yd = /* @__PURE__ */ Fe({ patchProp: cd }, Wu);
let _a;
function sl() {
  return _a || (_a = Tu(yd));
}
const bd = (...e) => {
  sl().render(...e);
}, ka = (...e) => {
  const t = sl().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const r = wd(i);
    if (!r) return;
    const s = t._component;
    !ue(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const a = n(r, !1, xd(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
};
function xd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wd(e) {
  return Oe(e) ? document.querySelector(e) : e;
}
var ge;
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
})(ge || (ge = {}));
var Sa;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Sa || (Sa = {}));
const W = ge.arrayToEnum([
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
]), Wt = (e) => {
  switch (typeof e) {
    case "undefined":
      return W.undefined;
    case "string":
      return W.string;
    case "number":
      return Number.isNaN(e) ? W.nan : W.number;
    case "boolean":
      return W.boolean;
    case "function":
      return W.function;
    case "bigint":
      return W.bigint;
    case "symbol":
      return W.symbol;
    case "object":
      return Array.isArray(e) ? W.array : e === null ? W.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? W.promise : typeof Map < "u" && e instanceof Map ? W.map : typeof Set < "u" && e instanceof Set ? W.set : typeof Date < "u" && e instanceof Date ? W.date : W.object;
    default:
      return W.unknown;
  }
}, R = ge.arrayToEnum([
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
class Dt extends Error {
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
    if (!(t instanceof Dt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ge.jsonStringifyReplacer, 2);
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
Dt.create = (e) => new Dt(e);
const Ur = (e, t) => {
  let n;
  switch (e.code) {
    case R.invalid_type:
      e.received === W.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case R.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, ge.jsonStringifyReplacer)}`;
      break;
    case R.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ge.joinValues(e.keys, ", ")}`;
      break;
    case R.invalid_union:
      n = "Invalid input";
      break;
    case R.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ge.joinValues(e.options)}`;
      break;
    case R.invalid_enum_value:
      n = `Invalid enum value. Expected ${ge.joinValues(e.options)}, received '${e.received}'`;
      break;
    case R.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case R.invalid_return_type:
      n = "Invalid function return type";
      break;
    case R.invalid_date:
      n = "Invalid date";
      break;
    case R.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : ge.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case R.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case R.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case R.custom:
      n = "Invalid input";
      break;
    case R.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case R.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case R.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, ge.assertNever(e);
  }
  return { message: n };
};
let _d = Ur;
function kd() {
  return _d;
}
const Sd = (e) => {
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
function V(e, t) {
  const n = kd(), i = Sd({
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
      n === Ur ? void 0 : Ur
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(i);
}
class Xe {
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
        return re;
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
    return Xe.mergeObjectSync(t, i);
  }
  static mergeObjectSync(t, n) {
    const i = {};
    for (const r of n) {
      const { key: s, value: a } = r;
      if (s.status === "aborted" || a.status === "aborted")
        return re;
      s.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || r.alwaysSet) && (i[s.value] = a.value);
    }
    return { status: t.value, value: i };
  }
}
const re = Object.freeze({
  status: "aborted"
}), Un = (e) => ({ status: "dirty", value: e }), ut = (e) => ({ status: "valid", value: e }), $a = (e) => e.status === "aborted", Ta = (e) => e.status === "dirty", An = (e) => e.status === "valid", Pi = (e) => typeof Promise < "u" && e instanceof Promise;
var Q;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Q || (Q = {}));
class At {
  constructor(t, n, i, r) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = i, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ca = (e, t) => {
  if (An(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Dt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function de(e) {
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
class he {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Wt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Wt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Xe(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Wt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Pi(n))
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
      parsedType: Wt(t)
    }, r = this._parseSync({ data: t, path: i.path, parent: i });
    return Ca(i, r);
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
      parsedType: Wt(t)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: t, path: [], parent: n });
        return An(s) ? {
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
    return this._parseAsync({ data: t, path: [], parent: n }).then((s) => An(s) ? {
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
      parsedType: Wt(t)
    }, r = this._parse({ data: t, path: i.path, parent: i }), s = await (Pi(r) ? r : Promise.resolve(r));
    return Ca(i, s);
  }
  refine(t, n) {
    const i = (r) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(r) : n;
    return this._refinement((r, s) => {
      const a = t(r), o = () => s.addIssue({
        code: R.custom,
        ...i(r)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((i, r) => t(i) ? !0 : (r.addIssue(typeof n == "function" ? n(i, r) : n), !1));
  }
  _refinement(t) {
    return new cn({
      schema: this,
      typeName: se.ZodEffects,
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
    return Rt.create(this, this._def);
  }
  nullable() {
    return un.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Tt.create(this);
  }
  promise() {
    return zi.create(this, this._def);
  }
  or(t) {
    return Ri.create([this, t], this._def);
  }
  and(t) {
    return Fi.create(this, t, this._def);
  }
  transform(t) {
    return new cn({
      ...de(this._def),
      schema: this,
      typeName: se.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Di({
      ...de(this._def),
      innerType: this,
      defaultValue: n,
      typeName: se.ZodDefault
    });
  }
  brand() {
    return new cl({
      typeName: se.ZodBranded,
      type: this,
      ...de(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ui({
      ...de(this._def),
      innerType: this,
      catchValue: n,
      typeName: se.ZodCatch
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
    return Ts.create(this, t);
  }
  readonly() {
    return Vi.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const $d = /^c[^\s-]{8,}$/i, Td = /^[0-9a-z]+$/, Cd = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Ad = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Id = /^[a-z0-9_-]{21}$/i, Ed = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Nd = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Od = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Pd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Cr;
const Md = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Rd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Fd = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, jd = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, qd = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Ld = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, al = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", zd = new RegExp(`^${al}$`);
function ol(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function Dd(e) {
  return new RegExp(`^${ol(e)}$`);
}
function Ud(e) {
  let t = `${al}T${ol(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Vd(e, t) {
  return !!((t === "v4" || !t) && Md.test(e) || (t === "v6" || !t) && Fd.test(e));
}
function Bd(e, t) {
  if (!Ed.test(e))
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
function Hd(e, t) {
  return !!((t === "v4" || !t) && Rd.test(e) || (t === "v6" || !t) && jd.test(e));
}
class Mt extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== W.string) {
      const s = this._getOrReturnCtx(t);
      return V(s, {
        code: R.invalid_type,
        expected: W.string,
        received: s.parsedType
      }), re;
    }
    const i = new Xe();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (r = this._getOrReturnCtx(t, r), V(r, {
          code: R.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (r = this._getOrReturnCtx(t, r), V(r, {
          code: R.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "length") {
        const a = t.data.length > s.value, o = t.data.length < s.value;
        (a || o) && (r = this._getOrReturnCtx(t, r), a ? V(r, {
          code: R.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && V(r, {
          code: R.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), i.dirty());
      } else if (s.kind === "email")
        Od.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
          validation: "email",
          code: R.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "emoji")
        Cr || (Cr = new RegExp(Pd, "u")), Cr.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
          validation: "emoji",
          code: R.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "uuid")
        Ad.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
          validation: "uuid",
          code: R.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "nanoid")
        Id.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
          validation: "nanoid",
          code: R.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid")
        $d.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
          validation: "cuid",
          code: R.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid2")
        Td.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
          validation: "cuid2",
          code: R.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "ulid")
        Cd.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
          validation: "ulid",
          code: R.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), V(r, {
            validation: "url",
            code: R.invalid_string,
            message: s.message
          }), i.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
        validation: "regex",
        code: R.invalid_string,
        message: s.message
      }), i.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), V(r, {
        code: R.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), i.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), V(r, {
        code: R.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), V(r, {
        code: R.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "datetime" ? Ud(s).test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
        code: R.invalid_string,
        validation: "datetime",
        message: s.message
      }), i.dirty()) : s.kind === "date" ? zd.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
        code: R.invalid_string,
        validation: "date",
        message: s.message
      }), i.dirty()) : s.kind === "time" ? Dd(s).test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
        code: R.invalid_string,
        validation: "time",
        message: s.message
      }), i.dirty()) : s.kind === "duration" ? Nd.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
        validation: "duration",
        code: R.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "ip" ? Vd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), V(r, {
        validation: "ip",
        code: R.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "jwt" ? Bd(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), V(r, {
        validation: "jwt",
        code: R.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "cidr" ? Hd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), V(r, {
        validation: "cidr",
        code: R.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64" ? qd.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
        validation: "base64",
        code: R.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64url" ? Ld.test(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
        validation: "base64url",
        code: R.invalid_string,
        message: s.message
      }), i.dirty()) : ge.assertNever(s);
    return { status: i.value, value: t.data };
  }
  _regex(t, n, i) {
    return this.refinement((r) => t.test(r), {
      validation: n,
      code: R.invalid_string,
      ...Q.errToObj(i)
    });
  }
  _addCheck(t) {
    return new Mt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Q.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Q.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Q.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Q.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...Q.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Q.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Q.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Q.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...Q.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...Q.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...Q.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Q.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...Q.errToObj(t) });
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
      ...Q.errToObj(t == null ? void 0 : t.message)
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
      ...Q.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...Q.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Q.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...Q.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Q.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Q.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Q.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Q.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Q.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, Q.errToObj(t));
  }
  trim() {
    return new Mt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Mt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Mt({
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
Mt.create = (e) => new Mt({
  checks: [],
  typeName: se.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...de(e)
});
function Zd(e, t) {
  const n = (e.toString().split(".")[1] || "").length, i = (t.toString().split(".")[1] || "").length, r = n > i ? n : i, s = Number.parseInt(e.toFixed(r).replace(".", "")), a = Number.parseInt(t.toFixed(r).replace(".", ""));
  return s % a / 10 ** r;
}
class In extends he {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== W.number) {
      const s = this._getOrReturnCtx(t);
      return V(s, {
        code: R.invalid_type,
        expected: W.number,
        received: s.parsedType
      }), re;
    }
    let i;
    const r = new Xe();
    for (const s of this._def.checks)
      s.kind === "int" ? ge.isInteger(t.data) || (i = this._getOrReturnCtx(t, i), V(i, {
        code: R.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), V(i, {
        code: R.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), V(i, {
        code: R.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? Zd(t.data, s.value) !== 0 && (i = this._getOrReturnCtx(t, i), V(i, {
        code: R.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (i = this._getOrReturnCtx(t, i), V(i, {
        code: R.not_finite,
        message: s.message
      }), r.dirty()) : ge.assertNever(s);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Q.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Q.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Q.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Q.toString(n));
  }
  setLimit(t, n, i, r) {
    return new In({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: Q.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new In({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Q.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Q.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Q.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Q.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Q.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Q.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Q.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Q.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Q.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && ge.isInteger(t.value));
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
In.create = (e) => new In({
  checks: [],
  typeName: se.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...de(e)
});
class ri extends he {
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
    if (this._getType(t) !== W.bigint)
      return this._getInvalidInput(t);
    let i;
    const r = new Xe();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), V(i, {
        code: R.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), V(i, {
        code: R.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (i = this._getOrReturnCtx(t, i), V(i, {
        code: R.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : ge.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return V(n, {
      code: R.invalid_type,
      expected: W.bigint,
      received: n.parsedType
    }), re;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Q.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Q.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Q.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Q.toString(n));
  }
  setLimit(t, n, i, r) {
    return new ri({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: Q.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new ri({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Q.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Q.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Q.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Q.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Q.toString(n)
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
ri.create = (e) => new ri({
  checks: [],
  typeName: se.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...de(e)
});
class Vr extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== W.boolean) {
      const i = this._getOrReturnCtx(t);
      return V(i, {
        code: R.invalid_type,
        expected: W.boolean,
        received: i.parsedType
      }), re;
    }
    return ut(t.data);
  }
}
Vr.create = (e) => new Vr({
  typeName: se.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...de(e)
});
class Mi extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== W.date) {
      const s = this._getOrReturnCtx(t);
      return V(s, {
        code: R.invalid_type,
        expected: W.date,
        received: s.parsedType
      }), re;
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return V(s, {
        code: R.invalid_date
      }), re;
    }
    const i = new Xe();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), V(r, {
        code: R.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), i.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), V(r, {
        code: R.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), i.dirty()) : ge.assertNever(s);
    return {
      status: i.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Mi({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Q.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Q.toString(n)
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
Mi.create = (e) => new Mi({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: se.ZodDate,
  ...de(e)
});
class Aa extends he {
  _parse(t) {
    if (this._getType(t) !== W.symbol) {
      const i = this._getOrReturnCtx(t);
      return V(i, {
        code: R.invalid_type,
        expected: W.symbol,
        received: i.parsedType
      }), re;
    }
    return ut(t.data);
  }
}
Aa.create = (e) => new Aa({
  typeName: se.ZodSymbol,
  ...de(e)
});
class Br extends he {
  _parse(t) {
    if (this._getType(t) !== W.undefined) {
      const i = this._getOrReturnCtx(t);
      return V(i, {
        code: R.invalid_type,
        expected: W.undefined,
        received: i.parsedType
      }), re;
    }
    return ut(t.data);
  }
}
Br.create = (e) => new Br({
  typeName: se.ZodUndefined,
  ...de(e)
});
class Hr extends he {
  _parse(t) {
    if (this._getType(t) !== W.null) {
      const i = this._getOrReturnCtx(t);
      return V(i, {
        code: R.invalid_type,
        expected: W.null,
        received: i.parsedType
      }), re;
    }
    return ut(t.data);
  }
}
Hr.create = (e) => new Hr({
  typeName: se.ZodNull,
  ...de(e)
});
class Ia extends he {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return ut(t.data);
  }
}
Ia.create = (e) => new Ia({
  typeName: se.ZodAny,
  ...de(e)
});
class Zr extends he {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return ut(t.data);
  }
}
Zr.create = (e) => new Zr({
  typeName: se.ZodUnknown,
  ...de(e)
});
class Qt extends he {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return V(n, {
      code: R.invalid_type,
      expected: W.never,
      received: n.parsedType
    }), re;
  }
}
Qt.create = (e) => new Qt({
  typeName: se.ZodNever,
  ...de(e)
});
class Ea extends he {
  _parse(t) {
    if (this._getType(t) !== W.undefined) {
      const i = this._getOrReturnCtx(t);
      return V(i, {
        code: R.invalid_type,
        expected: W.void,
        received: i.parsedType
      }), re;
    }
    return ut(t.data);
  }
}
Ea.create = (e) => new Ea({
  typeName: se.ZodVoid,
  ...de(e)
});
class Tt extends he {
  _parse(t) {
    const { ctx: n, status: i } = this._processInputParams(t), r = this._def;
    if (n.parsedType !== W.array)
      return V(n, {
        code: R.invalid_type,
        expected: W.array,
        received: n.parsedType
      }), re;
    if (r.exactLength !== null) {
      const a = n.data.length > r.exactLength.value, o = n.data.length < r.exactLength.value;
      (a || o) && (V(n, {
        code: a ? R.too_big : R.too_small,
        minimum: o ? r.exactLength.value : void 0,
        maximum: a ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), i.dirty());
    }
    if (r.minLength !== null && n.data.length < r.minLength.value && (V(n, {
      code: R.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), i.dirty()), r.maxLength !== null && n.data.length > r.maxLength.value && (V(n, {
      code: R.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), i.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, o) => r.type._parseAsync(new At(n, a, n.path, o)))).then((a) => Xe.mergeArray(i, a));
    const s = [...n.data].map((a, o) => r.type._parseSync(new At(n, a, n.path, o)));
    return Xe.mergeArray(i, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Tt({
      ...this._def,
      minLength: { value: t, message: Q.toString(n) }
    });
  }
  max(t, n) {
    return new Tt({
      ...this._def,
      maxLength: { value: t, message: Q.toString(n) }
    });
  }
  length(t, n) {
    return new Tt({
      ...this._def,
      exactLength: { value: t, message: Q.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Tt.create = (e, t) => new Tt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: se.ZodArray,
  ...de(t)
});
function yn(e) {
  if (e instanceof qe) {
    const t = {};
    for (const n in e.shape) {
      const i = e.shape[n];
      t[n] = Rt.create(yn(i));
    }
    return new qe({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Tt ? new Tt({
    ...e._def,
    type: yn(e.element)
  }) : e instanceof Rt ? Rt.create(yn(e.unwrap())) : e instanceof un ? un.create(yn(e.unwrap())) : e instanceof on ? on.create(e.items.map((t) => yn(t))) : e;
}
class qe extends he {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = ge.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== W.object) {
      const c = this._getOrReturnCtx(t);
      return V(c, {
        code: R.invalid_type,
        expected: W.object,
        received: c.parsedType
      }), re;
    }
    const { status: i, ctx: r } = this._processInputParams(t), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Qt && this._def.unknownKeys === "strip"))
      for (const c in r.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const u = s[c], f = r.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new At(r, f, r.path, c)),
        alwaysSet: c in r.data
      });
    }
    if (this._def.catchall instanceof Qt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: r.data[u] }
          });
      else if (c === "strict")
        o.length > 0 && (V(r, {
          code: R.unrecognized_keys,
          keys: o
        }), i.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of o) {
        const f = r.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new At(r, f, r.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const f = await u.key, d = await u.value;
        c.push({
          key: f,
          value: d,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => Xe.mergeObjectSync(i, c)) : Xe.mergeObjectSync(i, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Q.errToObj, new qe({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, i) => {
          var s, a;
          const r = ((a = (s = this._def).errorMap) == null ? void 0 : a.call(s, n, i).message) ?? i.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: Q.errToObj(t).message ?? r
          } : {
            message: r
          };
        }
      } : {}
    });
  }
  strip() {
    return new qe({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new qe({
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
    return new qe({
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
    return new qe({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: se.ZodObject
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
    return new qe({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const i of ge.objectKeys(t))
      t[i] && this.shape[i] && (n[i] = this.shape[i]);
    return new qe({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const i of ge.objectKeys(this.shape))
      t[i] || (n[i] = this.shape[i]);
    return new qe({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return yn(this);
  }
  partial(t) {
    const n = {};
    for (const i of ge.objectKeys(this.shape)) {
      const r = this.shape[i];
      t && !t[i] ? n[i] = r : n[i] = r.optional();
    }
    return new qe({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const i of ge.objectKeys(this.shape))
      if (t && !t[i])
        n[i] = this.shape[i];
      else {
        let s = this.shape[i];
        for (; s instanceof Rt; )
          s = s._def.innerType;
        n[i] = s;
      }
    return new qe({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return ll(ge.objectKeys(this.shape));
  }
}
qe.create = (e, t) => new qe({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Qt.create(),
  typeName: se.ZodObject,
  ...de(t)
});
qe.strictCreate = (e, t) => new qe({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Qt.create(),
  typeName: se.ZodObject,
  ...de(t)
});
qe.lazycreate = (e, t) => new qe({
  shape: e,
  unknownKeys: "strip",
  catchall: Qt.create(),
  typeName: se.ZodObject,
  ...de(t)
});
class Ri extends he {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), i = this._def.options;
    function r(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new Dt(o.ctx.common.issues));
      return V(n, {
        code: R.invalid_union,
        unionErrors: a
      }), re;
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
      const o = a.map((l) => new Dt(l));
      return V(n, {
        code: R.invalid_union,
        unionErrors: o
      }), re;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ri.create = (e, t) => new Ri({
  options: e,
  typeName: se.ZodUnion,
  ...de(t)
});
const Et = (e) => e instanceof qi ? Et(e.schema) : e instanceof cn ? Et(e.innerType()) : e instanceof Li ? [e.value] : e instanceof ln ? e.options : e instanceof Kr ? ge.objectValues(e.enum) : e instanceof Di ? Et(e._def.innerType) : e instanceof Br ? [void 0] : e instanceof Hr ? [null] : e instanceof Rt ? [void 0, ...Et(e.unwrap())] : e instanceof un ? [null, ...Et(e.unwrap())] : e instanceof cl || e instanceof Vi ? Et(e.unwrap()) : e instanceof Ui ? Et(e._def.innerType) : [];
class $s extends he {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== W.object)
      return V(n, {
        code: R.invalid_type,
        expected: W.object,
        received: n.parsedType
      }), re;
    const i = this.discriminator, r = n.data[i], s = this.optionsMap.get(r);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (V(n, {
      code: R.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [i]
    }), re);
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
      const a = Et(s.shape[t]);
      if (!a.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (r.has(o))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        r.set(o, s);
      }
    }
    return new $s({
      typeName: se.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: r,
      ...de(i)
    });
  }
}
function Wr(e, t) {
  const n = Wt(e), i = Wt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === W.object && i === W.object) {
    const r = ge.objectKeys(t), s = ge.objectKeys(e).filter((o) => r.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of s) {
      const l = Wr(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (n === W.array && i === W.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s], o = t[s], l = Wr(a, o);
      if (!l.valid)
        return { valid: !1 };
      r.push(l.data);
    }
    return { valid: !0, data: r };
  } else return n === W.date && i === W.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Fi extends he {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = (s, a) => {
      if ($a(s) || $a(a))
        return re;
      const o = Wr(s.value, a.value);
      return o.valid ? ((Ta(s) || Ta(a)) && n.dirty(), { status: n.value, value: o.data }) : (V(i, {
        code: R.invalid_intersection_types
      }), re);
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
Fi.create = (e, t, n) => new Fi({
  left: e,
  right: t,
  typeName: se.ZodIntersection,
  ...de(n)
});
class on extends he {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== W.array)
      return V(i, {
        code: R.invalid_type,
        expected: W.array,
        received: i.parsedType
      }), re;
    if (i.data.length < this._def.items.length)
      return V(i, {
        code: R.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), re;
    !this._def.rest && i.data.length > this._def.items.length && (V(i, {
      code: R.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...i.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new At(i, a, i.path, o)) : null;
    }).filter((a) => !!a);
    return i.common.async ? Promise.all(s).then((a) => Xe.mergeArray(n, a)) : Xe.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new on({
      ...this._def,
      rest: t
    });
  }
}
on.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new on({
    items: e,
    typeName: se.ZodTuple,
    rest: null,
    ...de(t)
  });
};
class ji extends he {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== W.object)
      return V(i, {
        code: R.invalid_type,
        expected: W.object,
        received: i.parsedType
      }), re;
    const r = [], s = this._def.keyType, a = this._def.valueType;
    for (const o in i.data)
      r.push({
        key: s._parse(new At(i, o, i.path, o)),
        value: a._parse(new At(i, i.data[o], i.path, o)),
        alwaysSet: o in i.data
      });
    return i.common.async ? Xe.mergeObjectAsync(n, r) : Xe.mergeObjectSync(n, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, i) {
    return n instanceof he ? new ji({
      keyType: t,
      valueType: n,
      typeName: se.ZodRecord,
      ...de(i)
    }) : new ji({
      keyType: Mt.create(),
      valueType: t,
      typeName: se.ZodRecord,
      ...de(n)
    });
  }
}
class Na extends he {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== W.map)
      return V(i, {
        code: R.invalid_type,
        expected: W.map,
        received: i.parsedType
      }), re;
    const r = this._def.keyType, s = this._def.valueType, a = [...i.data.entries()].map(([o, l], c) => ({
      key: r._parse(new At(i, o, i.path, [c, "key"])),
      value: s._parse(new At(i, l, i.path, [c, "value"]))
    }));
    if (i.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return re;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return re;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
Na.create = (e, t, n) => new Na({
  valueType: t,
  keyType: e,
  typeName: se.ZodMap,
  ...de(n)
});
class si extends he {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== W.set)
      return V(i, {
        code: R.invalid_type,
        expected: W.set,
        received: i.parsedType
      }), re;
    const r = this._def;
    r.minSize !== null && i.data.size < r.minSize.value && (V(i, {
      code: R.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), n.dirty()), r.maxSize !== null && i.data.size > r.maxSize.value && (V(i, {
      code: R.too_big,
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
          return re;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const o = [...i.data.values()].map((l, c) => s._parse(new At(i, l, i.path, c)));
    return i.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(t, n) {
    return new si({
      ...this._def,
      minSize: { value: t, message: Q.toString(n) }
    });
  }
  max(t, n) {
    return new si({
      ...this._def,
      maxSize: { value: t, message: Q.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
si.create = (e, t) => new si({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: se.ZodSet,
  ...de(t)
});
class qi extends he {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
qi.create = (e, t) => new qi({
  getter: e,
  typeName: se.ZodLazy,
  ...de(t)
});
class Li extends he {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return V(n, {
        received: n.data,
        code: R.invalid_literal,
        expected: this._def.value
      }), re;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Li.create = (e, t) => new Li({
  value: e,
  typeName: se.ZodLiteral,
  ...de(t)
});
function ll(e, t) {
  return new ln({
    values: e,
    typeName: se.ZodEnum,
    ...de(t)
  });
}
class ln extends he {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return V(n, {
        expected: ge.joinValues(i),
        received: n.parsedType,
        code: R.invalid_type
      }), re;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return V(n, {
        received: n.data,
        code: R.invalid_enum_value,
        options: i
      }), re;
    }
    return ut(t.data);
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
    return ln.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return ln.create(this.options.filter((i) => !t.includes(i)), {
      ...this._def,
      ...n
    });
  }
}
ln.create = ll;
class Kr extends he {
  _parse(t) {
    const n = ge.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(t);
    if (i.parsedType !== W.string && i.parsedType !== W.number) {
      const r = ge.objectValues(n);
      return V(i, {
        expected: ge.joinValues(r),
        received: i.parsedType,
        code: R.invalid_type
      }), re;
    }
    if (this._cache || (this._cache = new Set(ge.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = ge.objectValues(n);
      return V(i, {
        received: i.data,
        code: R.invalid_enum_value,
        options: r
      }), re;
    }
    return ut(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Kr.create = (e, t) => new Kr({
  values: e,
  typeName: se.ZodNativeEnum,
  ...de(t)
});
class zi extends he {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== W.promise && n.common.async === !1)
      return V(n, {
        code: R.invalid_type,
        expected: W.promise,
        received: n.parsedType
      }), re;
    const i = n.parsedType === W.promise ? n.data : Promise.resolve(n.data);
    return ut(i.then((r) => this._def.type.parseAsync(r, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
zi.create = (e, t) => new zi({
  type: e,
  typeName: se.ZodPromise,
  ...de(t)
});
class cn extends he {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === se.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = this._def.effect || null, s = {
      addIssue: (a) => {
        V(i, a), a.fatal ? n.abort() : n.dirty();
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
            return re;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: i.path,
            parent: i
          });
          return l.status === "aborted" ? re : l.status === "dirty" || n.value === "dirty" ? Un(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return re;
        const o = this._def.schema._parseSync({
          data: a,
          path: i.path,
          parent: i
        });
        return o.status === "aborted" ? re : o.status === "dirty" || n.value === "dirty" ? Un(o.value) : o;
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
        return o.status === "aborted" ? re : (o.status === "dirty" && n.dirty(), a(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((o) => o.status === "aborted" ? re : (o.status === "dirty" && n.dirty(), a(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (r.type === "transform")
      if (i.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        if (!An(a))
          return re;
        const o = r.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((a) => An(a) ? Promise.resolve(r.transform(a.value, s)).then((o) => ({
          status: n.value,
          value: o
        })) : re);
    ge.assertNever(r);
  }
}
cn.create = (e, t, n) => new cn({
  schema: e,
  typeName: se.ZodEffects,
  effect: t,
  ...de(n)
});
cn.createWithPreprocess = (e, t, n) => new cn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: se.ZodEffects,
  ...de(n)
});
class Rt extends he {
  _parse(t) {
    return this._getType(t) === W.undefined ? ut(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Rt.create = (e, t) => new Rt({
  innerType: e,
  typeName: se.ZodOptional,
  ...de(t)
});
class un extends he {
  _parse(t) {
    return this._getType(t) === W.null ? ut(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
un.create = (e, t) => new un({
  innerType: e,
  typeName: se.ZodNullable,
  ...de(t)
});
class Di extends he {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let i = n.data;
    return n.parsedType === W.undefined && (i = this._def.defaultValue()), this._def.innerType._parse({
      data: i,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Di.create = (e, t) => new Di({
  innerType: e,
  typeName: se.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...de(t)
});
class Ui extends he {
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
    return Pi(r) ? r.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Dt(i.common.issues);
        },
        input: i.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new Dt(i.common.issues);
        },
        input: i.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ui.create = (e, t) => new Ui({
  innerType: e,
  typeName: se.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...de(t)
});
class Oa extends he {
  _parse(t) {
    if (this._getType(t) !== W.nan) {
      const i = this._getOrReturnCtx(t);
      return V(i, {
        code: R.invalid_type,
        expected: W.nan,
        received: i.parsedType
      }), re;
    }
    return { status: "valid", value: t.data };
  }
}
Oa.create = (e) => new Oa({
  typeName: se.ZodNaN,
  ...de(e)
});
class cl extends he {
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
class Ts extends he {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return s.status === "aborted" ? re : s.status === "dirty" ? (n.dirty(), Un(s.value)) : this._def.out._parseAsync({
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
      return r.status === "aborted" ? re : r.status === "dirty" ? (n.dirty(), {
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
    return new Ts({
      in: t,
      out: n,
      typeName: se.ZodPipeline
    });
  }
}
class Vi extends he {
  _parse(t) {
    const n = this._def.innerType._parse(t), i = (r) => (An(r) && (r.value = Object.freeze(r.value)), r);
    return Pi(n) ? n.then((r) => i(r)) : i(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Vi.create = (e, t) => new Vi({
  innerType: e,
  typeName: se.ZodReadonly,
  ...de(t)
});
var se;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(se || (se = {}));
const B = Mt.create, Y = In.create, He = Vr.create, ul = Zr.create;
Qt.create;
const ke = Tt.create, fe = qe.create, ai = Ri.create, Wd = $s.create;
Fi.create;
on.create;
const Cs = ji.create, Kd = qi.create, dt = Li.create, Ce = ln.create;
zi.create;
Rt.create;
un.create;
const Gd = Ce([
  "eq",
  "neq",
  "in",
  "gt",
  "gte",
  "lt",
  "lte",
  "isSet",
  "notSet"
]), Pa = fe({
  ref: B().min(1),
  op: Gd,
  value: ai([B(), Y(), ke(B()), ke(Y())]).optional()
}), Gr = Kd(() => fe({
  all: ke(ai([Pa, Gr])).optional(),
  any: ke(ai([Pa, Gr])).optional()
}));
function As(e) {
  return "op" in e;
}
function Yr(e) {
  var t, n;
  return e ? (((t = e.all) == null ? void 0 : t.length) ?? 0) > 0 || (((n = e.any) == null ? void 0 : n.length) ?? 0) > 0 : !1;
}
const Yd = [
  "file.pages",
  "file.colorPages",
  "file.monoPages",
  "file.status"
], dl = "quantity", Qd = Ce(["quantity", "pages", "area", "length"]), Jd = fe({
  /**
   * Inclusive upper bound on the basis value. MUST be omitted on the last
   * row (open-ended) and present on every other row — validate.ts enforces
   * strictly-increasing order, which makes overlap impossible by construction.
   */
  upTo: Y().positive().optional(),
  amount: Y()
}), fl = fe({
  basis: Qd.default("quantity"),
  /**
   * flat:      the entire basis value is priced at the matched row's amount.
   * graduated: each band is priced at its own amount and summed
   *            (progressive-tax style).
   */
  mode: Ce(["flat", "graduated"]).default("flat"),
  rows: ke(Jd).min(1)
}), Xd = Ce(["sqm", "sqft", "sqin"]), ef = Ce(["m", "ft", "in", "cm"]), tf = Ce([
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
]), nf = fe({
  name: B(),
  expression: B()
}), rf = fe({
  /** Evaluated in order; each step may use the ones before it. */
  steps: ke(nf).default([]),
  /**
   * The rule's contribution to the order total. NOT multiplied by the
   * quantity — the formula reads `qty` itself.
   */
  expression: B()
}), pl = fe({
  type: tf,
  /** Ignored on a formula rule (written as 0). */
  amount: Y(),
  /**
   * perArea: the unit `amount` is priced in.
   * formula: the unit of `area`. Default "sqm" (engine-side).
   */
  areaUnit: Xd.optional(),
  /**
   * perLength: the unit `amount` is priced in.
   * formula: the unit of `w` and `h`. Default "m" (engine-side).
   */
  lengthUnit: ef.optional(),
  /**
   * perLength only: which axis of the source W×H is the billable
   * length. Default "h" (a roll's fixed width is w; the consumed
   * length is h). "max" prices the longest side.
   */
  lengthAxis: Ce(["h", "w", "max"]).optional(),
  /**
   * perArea/perLength/formula only: id of a `dimensions` field to read
   * W×H from. Fallback when omitted: FileMetadata.canvas.
   */
  dimensionsField: B().optional(),
  /**
   * Volume/size breaks. For basis "area" the basis value is in
   * `areaUnit`; for basis "length", in `lengthUnit`.
   */
  tiers: fl.optional(),
  /** formula only: the steps and the price (formula.ts has the language). */
  formula: rf.optional()
}), sf = fe({
  amount: Y().nonnegative().default(0),
  /** "order": added once (v1 behavior). "unit": × quantity (t-shirts, cards). */
  per: Ce(["order", "unit"]).default("order"),
  /**
   * Quantity breaks on the base. basis must be "quantity"; mode "graduated"
   * requires per === "unit" (validate.ts).
   */
  tiers: fl.optional()
}), af = fe({
  currency: B().regex(/^[A-Z]{3}$/, "ISO 4217 currency code").default("USD"),
  basePrice: sf.default({}),
  /** Flat fee added once, after percent/multiplier (stage D). */
  setupFee: Y().nonnegative().optional(),
  /** Floor applied to the final total (stage E). */
  minimumPrice: Y().nonnegative().optional(),
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
  lineQuantity: Ce(["job", "units"]).optional()
}), Bi = "2.0", of = fe({
  artworkSize: fe({
    width_mm: Y().positive().optional(),
    height_mm: Y().positive().optional()
  }).optional(),
  pageCount: fe({
    min: Y().int().positive().optional(),
    max: Y().int().positive().optional()
  }).optional(),
  fileCount: fe({
    min: Y().int().positive().optional(),
    max: Y().int().positive().optional()
  }).optional(),
  bleed: fe({ required_mm: Y().nonnegative().optional() }).optional(),
  safety: fe({ min_mm: Y().nonnegative().optional() }).optional()
}).strict(), lf = fe({
  context: of.optional()
}), Hi = fe({
  id: B().min(1),
  label: B(),
  /** Shown under the label on cards and list rows. Simple formatting (see formatted-text). */
  description: B().optional(),
  /**
   * Short explanation behind an ⓘ next to the choice's label, shown on
   * hover, tap or keyboard focus. Same simple formatting as description.
   */
  tooltip: B().optional(),
  /** http(s) URL or data: URI (builder can embed small images). */
  image: B().optional(),
  /** Hex color for swatch display. */
  color: B().optional(),
  /** Default selection for the parent field. */
  default: He().optional(),
  /** Merchant SKU fragment for this choice (used by resolveSku / adapters). */
  sku: B().optional(),
  /** Manually mark a choice unavailable without deleting it. */
  disabled: He().optional(),
  /** Price changes applied when this choice is selected. */
  priceModifiers: ke(pl).default([]),
  /** What selecting this choice tells the Filecheck intake (if any). */
  filecheck: lf.optional()
}), Vt = fe({
  id: B().min(1),
  label: B().optional(),
  /** Under the label, always visible. Simple formatting: **bold**, *italic*, line breaks. */
  helpText: B().optional(),
  /** Behind an ⓘ next to the field label (hover / tap / focus). Same formatting. */
  tooltip: B().optional(),
  required: He().default(!1),
  visibleWhen: Gr.optional(),
  /** Price changes applied just for having this field visible. */
  priceModifiers: ke(pl).default([]),
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
}), cf = Vt.extend({
  type: dt("select-one"),
  display: Ce(["cards", "grid", "swatches", "pills", "dropdown", "list"]).default("pills"),
  options: ke(Hi).min(1),
  /**
   * Name of the store's own product option that answers this field, e.g.
   * Shopify's "Produktart". The product page passes the selected variant's
   * options to the widget (`variantOptions`), which picks the choice whose
   * label (or id) equals that option's value and hides the field: the
   * customer chose it once, in the theme's variant picker. A page that
   * passes no such option (builder preview, a platform without the bridge)
   * shows the field as usual.
   */
  variantOption: B().trim().min(1).optional()
}), uf = Vt.extend({
  type: dt("select-many"),
  display: Ce(["cards", "grid", "swatches", "pills", "list"]).default("list"),
  options: ke(Hi).min(1),
  minSelect: Y().int().nonnegative().default(0),
  maxSelect: Y().int().positive().optional()
}), df = Vt.extend({
  type: dt("quantity"),
  display: Ce(["stepper", "pills", "dropdown", "input"]).default("stepper"),
  min: Y().int().positive().default(1),
  max: Y().int().positive().optional(),
  step: Y().int().positive().default(1),
  defaultValue: Y().int().positive().default(1),
  /** Preset quantities for pills/dropdown display (e.g. 100/250/500/1000). */
  presets: ke(Y().int().positive()).optional(),
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
  nextBreakHint: He().optional()
}), ff = Vt.extend({
  type: dt("quantities"),
  /**
   * grid: a card per option with its own stepper. list: one row per
   * option. A field with `rows` always shows as a table.
   */
  display: Ce(["grid", "list"]).default("grid"),
  options: ke(Hi).min(1),
  /** The table's rows (colours); `options` are then its columns (sizes). */
  rows: ke(Hi).min(1).optional(),
  /** Heading over the row labels: "Colour". */
  rowsLabel: B().max(80).optional(),
  /** Per option (per cell in a table): 0, or min, min+step, … up to max (the `quantity` grid rule). */
  min: Y().int().positive().default(1),
  max: Y().int().positive().optional(),
  step: Y().int().positive().default(1),
  /** The whole job — what quantity pricing, tiers and the cart see. */
  minTotal: Y().int().positive().default(1),
  maxTotal: Y().int().positive().optional(),
  /** Word after the total in the widget: "10 shirts". */
  unit: B().max(40).optional(),
  /** See QuantityField.nextBreakHint. */
  nextBreakHint: He().optional()
}), hl = ".";
function Zi(e, t) {
  return t === void 0 ? e : `${t}${hl}${e}`;
}
function Is(e) {
  var t;
  return (t = e.rows) != null && t.length ? e.rows.flatMap((n) => e.options.map((i) => ({ key: Zi(i.id, n.id), option: i, row: n }))) : e.options.map((n) => ({ key: n.id, option: n }));
}
function dn(e) {
  var t;
  return e.type === "quantities" && ((t = e.rows) != null && t.length) ? [...e.rows, ...e.options] : e.options;
}
const pf = Vt.extend({
  type: dt("number"),
  display: Ce(["stepper", "slider", "input"]).default("input"),
  min: Y().optional(),
  max: Y().optional(),
  step: Y().positive().optional(),
  defaultValue: Y().optional()
}), hf = Vt.extend({
  type: dt("text"),
  display: Ce(["input", "textarea"]).default("input"),
  placeholder: B().optional(),
  maxLength: Y().int().positive().optional()
}), Qr = Ce(["mm", "cm", "in"]), mf = Vt.extend({
  type: dt("dimensions"),
  display: Ce(["inputs"]).default("inputs"),
  /** Units the customer may pick between. */
  units: ke(Qr).min(1).default(["mm"]),
  defaultUnit: Qr.default("mm"),
  /** Constraints, expressed in defaultUnit. */
  minW: Y().positive().optional(),
  maxW: Y().positive().optional(),
  minH: Y().positive().optional(),
  maxH: Y().positive().optional(),
  defaultValue: fe({ w: Y().positive(), h: Y().positive() }).optional()
}), vf = fe({
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
  workflow: Cs(ul()).optional()
}).refine((e) => !!e.workflowId || !!e.workflow, {
  message: "filecheck needs a workflowId or an inline workflow"
}), gf = Vt.extend({
  type: dt("file"),
  /**
   * dropzone: the built-in upload, with any registered producers (Print.App
   * designer, template picker) offered around it. producer: NO direct
   * upload - only the registered producers render; the merchant is
   * showcasing the designer, not file drops.
   */
  display: Ce(["dropzone", "producer"]).default("dropzone"),
  accept: ke(B()).default(["application/pdf"]),
  /** Which data-feed provider enriches the FileMetadata. */
  providerId: B().optional(),
  /**
   * Filecheck-backed upload: replaces the dropzone with the Filecheck
   * intake element when the storefront supplies an element-mode provider
   * config (publishable key lives there — NEVER in this blueprint).
   */
  filecheck: vf.optional(),
  /**
   * Let the customer attach several files here (artwork plus fonts, a set
   * of photos, a mailing list). Attachments only: the price never depends
   * on them. Direct uploads only - a Filecheck intake or a designer fills
   * the field with ONE artwork, so `multiple` is ignored there.
   */
  multiple: He().optional(),
  /** With `multiple`: how many files at most (2-10, default 5). */
  maxFiles: Y().int().min(2).max(10).optional(),
  /**
   * This field's file sets the price: its page counts and size feed per-page
   * and per-area pricing and `file.*` conditions, and it is the file the
   * signed price names. Mark it when a product takes two files (a thesis PDF
   * and a designed cover); unmarked, the price follows whichever file the
   * customer added last.
   */
  pricing: He().optional()
}), yf = 10, bf = 5;
function Jr(e) {
  return !e.multiple || e.display === "producer" || e.providerId === "filecheck" ? 1 : Math.min(yf, Math.max(2, e.maxFiles ?? bf));
}
function ml(e) {
  return e.sections.flatMap((t) => t.fields.filter((n) => n.type === "file"));
}
function xf(e) {
  return ml(e).find((t) => t.pricing === !0);
}
function vl(e) {
  const t = ml(e);
  return t.find((n) => n.display === "producer") ?? t[0];
}
const wf = Vt.extend({
  type: dt("info"),
  /** summary: live selection recap. note: static text block. */
  display: Ce(["summary", "note"]).default("note"),
  body: B().optional()
}), _f = Wd("type", [
  cf,
  uf,
  df,
  ff,
  pf,
  hf,
  mf,
  gf,
  wf
]);
function fi(e) {
  return e.type === "select-one" || e.type === "select-many";
}
function Bt(e) {
  return fi(e) || e.type === "quantities";
}
function En(e) {
  return e.type === "quantity" || e.type === "quantities";
}
function kf(e) {
  return e.type === "select-one" && typeof e.variantOption == "string" && e.variantOption.trim() !== "";
}
function Qn(e) {
  return e.normalize("NFC").trim().replace(/\s+/g, " ").toLocaleLowerCase();
}
function Sf(e, t) {
  if (!t || !kf(e))
    return;
  const n = Qn(e.variantOption);
  for (const [i, r] of Object.entries(t))
    if (typeof r == "string" && Qn(i) === n)
      return r;
}
function $f(e, t) {
  var r;
  const n = Sf(e, t);
  if (n === void 0 || e.type !== "select-one")
    return;
  const i = Qn(n);
  return (r = e.options.find((s) => Qn(s.label) === i) ?? e.options.find((s) => Qn(s.id) === i)) == null ? void 0 : r.id;
}
const Tf = fe({
  id: B().min(1),
  title: B(),
  fields: ke(_f)
}), Cf = fe({
  /** axisFieldId -> choiceId, exactly one entry per axis (validate.ts). */
  select: Cs(B()),
  sku: B().optional(),
  /** Absolute replacement for pricing.basePrice.amount while selected. */
  price: Y().nonnegative().optional(),
  available: He().default(!0),
  /** Platform hook (e.g. Shopify variant GID) for adapters that map to real variants. */
  platformVariantId: B().optional()
}), Af = fe({
  /** Field ids of select-one fields forming the matrix (e.g. ["size","color"]). */
  axes: ke(B().min(1)).min(1),
  combinations: ke(Cf)
}), Es = fe({
  version: dt(Bi).default(Bi),
  productId: B().min(1),
  title: B(),
  /** stacked: all sections at once. wizard: one section per step. */
  layout: Ce(["stacked", "wizard"]).default("stacked"),
  pricing: af.default({}),
  variants: Af.optional(),
  sections: ke(Tf)
});
fe({
  w: Y().positive(),
  h: Y().positive(),
  unit: Qr
});
function pt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && typeof e.w == "number" && typeof e.h == "number";
}
function If(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.values(e).every((t) => typeof t == "number");
}
const wi = ["qty", "w", "h", "area", "pages"], Xr = {
  min: [2, void 0],
  max: [2, void 0],
  round: [1, 2],
  ceil: [1, 1],
  floor: [1, 1],
  abs: [1, 1],
  sqrt: [1, 1],
  band: [4, void 0]
}, gl = Object.keys(Xr), Ar = 500, Ma = 10, Ef = 64, Nf = /^[A-Za-z][A-Za-z0-9_]{0,31}$/, Of = /^[A-Za-z0-9_.,+\-*/^()\s]$/;
class yl extends Error {
  constructor(n) {
    super(n.message);
    Jt(this, "detail");
    this.detail = n;
  }
}
function Le(e, t, n) {
  throw new yl({ code: e, message: t, at: n });
}
function Pf(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const i = e[n];
    if (Of.test(i) || Le("formula-character", `"${i}" can't be used in a formula. Use + - * / ^, brackets, numbers and names.`, n), /\s/.test(i)) {
      n += 1;
      continue;
    }
    const r = /^(\d+(\.\d+)?|\.\d+)/.exec(e.slice(n));
    if (r) {
      const a = r[0];
      e[n + a.length] === "." && Le("formula-syntax", `"${a}." is not a number.`, n), t.push({ type: "number", value: Number(a), text: a, at: n }), n += a.length;
      continue;
    }
    const s = /^[A-Za-z_][A-Za-z0-9_]*/.exec(e.slice(n));
    if (s) {
      t.push({ type: "name", text: s[0], at: n }), n += s[0].length;
      continue;
    }
    i === "." && Le("formula-syntax", 'A "." must be part of a number, like 0.25.', n), t.push({ type: "op", text: i, at: n }), n += 1;
  }
  return t.push({ type: "end", text: "", at: e.length }), t;
}
class Mf {
  constructor(t) {
    Jt(this, "tokens");
    Jt(this, "index", 0);
    Jt(this, "depth", 0);
    Jt(this, "names", []);
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
    this.peek().type === "end" && Le("formula-syntax", "Enter a formula.", 0);
    const t = this.expression(), n = this.peek();
    return n.type !== "end" && this.unexpected(n), t;
  }
  expression() {
    this.depth += 1, this.depth > Ef && Le("formula-too-long", "This formula is nested too deeply.", this.peek().at);
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
      return n.kind === "binary" && n.op === "^" && Le("formula-ambiguous-power", "Add brackets: -(2^2) or (-2)^2.", t.at), { kind: "negate", operand: n };
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
      return this.isOp("(") ? this.call(t, n) : (n in Xr && Le("formula-syntax", `${t.text} needs brackets, like ${n}(a, b).`, t.at), this.names.push({ name: n, written: t.text, at: t.at }), this.noImplicitProduct(t.text), { kind: "name", name: n, written: t.text, at: t.at });
    }
    if (t.type === "op" && t.text === "(") {
      const n = this.expression();
      return this.expect(")", t.at), this.noImplicitProduct(")"), { kind: "group", inner: n };
    }
    return this.index -= 1, this.unexpected(t);
  }
  call(t, n) {
    const i = Xr[n];
    i || Le("formula-unknown-name", `There is no function "${t.text}". You can use: ${gl.join(", ")}.`, t.at);
    const r = this.next(), s = [];
    if (!this.isOp(")"))
      for (s.push(this.expression()); this.isOp(","); )
        this.next(), s.push(this.expression());
    this.expect(")", r.at);
    const [a, o] = i;
    if ((s.length < a || o !== void 0 && s.length > o) && Le("formula-arity", bl(n), t.at), n === "band" && Rf(s, t.at), n === "round" && s[1] !== void 0) {
      const l = Wi(s[1]);
      l !== void 0 && !(Number.isInteger(l) && l >= 0 && l <= 4) && Le("formula-arity", "round(x, d) rounds to 0 to 4 decimals.", t.at);
    }
    return this.noImplicitProduct(")"), { kind: "call", fn: n, args: s };
  }
  expect(t, n) {
    const i = this.peek();
    if (i.type === "op" && i.text === t) {
      this.next();
      return;
    }
    i.type === "end" && Le("formula-syntax", "A bracket opened here is never closed.", n), this.unexpected(i);
  }
  /** "2area" or "2(…)": say what is missing instead of a bare "unexpected". */
  noImplicitProduct(t) {
    const n = this.peek();
    if (n.type === "number" || n.type === "name" || n.type === "op" && n.text === "(") {
      const i = n.type === "op" ? "(" : n.text;
      Le("formula-syntax", `Missing an operator between ${t} and ${i}: write ${t} * ${i}.`, n.at);
    }
  }
  unexpected(t) {
    if (t.type === "end" && Le("formula-syntax", "The formula ends too early.", t.at), t.text === ",") {
      const n = this.previous(), i = this.tokens[this.index + 1];
      (n == null ? void 0 : n.type) === "number" && (i == null ? void 0 : i.type) === "number" && Le("formula-syntax", `Use a dot for decimals: ${n.text}.${i.text}.`, t.at), Le("formula-syntax", 'A "," only separates the values of a function.', t.at);
    }
    t.text === ")" && Le("formula-syntax", 'This ")" has no matching "(".', t.at), Le("formula-syntax", `"${t.text}" is not expected here.`, t.at);
  }
}
function bl(e) {
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
function Wi(e) {
  if (e.kind === "number")
    return e.value;
  if (e.kind === "group")
    return Wi(e.inner);
  if (e.kind === "negate") {
    const t = Wi(e.operand);
    return t === void 0 ? void 0 : -t;
  }
}
function Rf(e, t) {
  (e.length - 1) % 2 === 0 && Le("formula-arity", bl("band"), t);
  let n;
  for (let i = 1; i < e.length - 1; i += 2) {
    const r = Wi(e[i]);
    r !== void 0 && (n !== void 0 && r <= n && Le("formula-arity", `The limits in band() must increase (${r} after ${n}).`, t), n = r);
  }
}
function Ns(e) {
  if (e.length > Ar)
    return {
      ok: !1,
      error: {
        code: "formula-too-long",
        message: `A formula can be at most ${Ar} characters — split it into steps.`,
        at: Ar
      }
    };
  try {
    const t = new Mf(Pf(e));
    return { ok: !0, ast: t.parse(), names: t.names };
  } catch (t) {
    if (t instanceof yl)
      return { ok: !1, error: t.detail };
    throw t;
  }
}
function Ff(e) {
  const t = [], n = e.steps ?? [];
  n.length > Ma && t.push({
    path: ["steps"],
    code: "formula-too-long",
    message: `A formula can have at most ${Ma} steps.`
  });
  const i = /* @__PURE__ */ new Set([...wi, ...gl]), r = /* @__PURE__ */ new Map();
  n.forEach((a, o) => {
    const l = a.name.toLowerCase();
    Nf.test(a.name) ? i.has(l) ? t.push({
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
    const c = Ns(a);
    if (!c.ok) {
      t.push({ path: o, code: c.error.code, message: c.error.message });
      return;
    }
    for (const { name: u, written: f } of c.names) {
      if (wi.includes(u))
        continue;
      const d = r.get(u);
      if (!(d !== void 0 && d < l)) {
        if (d === l)
          t.push({
            path: o,
            code: "formula-step-name",
            message: `"${f}" can't use itself.`
          });
        else if (d !== void 0)
          t.push({
            path: o,
            code: "formula-step-name",
            message: `"${f}" is worked out in a later step — move that step up.`
          });
        else {
          const h = [
            ...wi,
            ...n.slice(0, l).map((m) => m.name)
          ];
          t.push({
            path: o,
            code: "formula-unknown-name",
            message: `Unknown name "${f}". You can use: ${h.join(", ")}.`
          });
        }
        return;
      }
    }
  };
  return n.forEach((a, o) => s(a.expression, ["steps", o, "expression"], o)), s(e.expression, ["expression"], n.length), t;
}
function Os(e) {
  const t = /* @__PURE__ */ new Set(), n = [...(e.steps ?? []).map((i) => i.expression), e.expression];
  for (const i of n) {
    const r = Ns(i);
    if (r.ok)
      for (const { name: s } of r.names)
        wi.includes(s) && t.add(s);
  }
  return t;
}
const xl = /* @__PURE__ */ new Set([
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
]), wl = /* @__PURE__ */ new Set(["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"]);
function _l(e) {
  const t = e.toUpperCase();
  return xl.has(t) ? 0 : wl.has(t) ? 3 : 2;
}
function jf(e) {
  return /^[A-Z]{3}$/.test(e) && (xl.has(e) || wl.has(e) || qf.has(e));
}
const qf = /* @__PURE__ */ new Set([
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
class mn extends Error {
}
const Sn = (e) => typeof e == "object" && e !== null && !Array.isArray(e);
function Lf(e) {
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
function zf(e) {
  const t = /* @__PURE__ */ new Map(), n = Array.isArray(e.sections) ? e.sections : [];
  for (const i of n) {
    const r = Sn(i) && Array.isArray(i.fields) ? i.fields : [];
    for (const s of r)
      Sn(s) && typeof s.id == "string" && Array.isArray(s.options) && t.set(s.id, new Set(s.options.flatMap((a) => Sn(a) && typeof a.id == "string" ? [a.id] : [])));
  }
  return t;
}
function Df(e, t, n) {
  if (!Sn(t))
    throw new mn("The matrix table must be an object.");
  const { choices: i, prices: r, off: s = [], skus: a = [] } = t;
  if (!Array.isArray(i) || i.length !== e.length || !i.every((d) => Array.isArray(d) && d.every((h) => typeof h == "string")))
    throw new mn("The matrix table needs one list of choice ids per axis.");
  const o = Lf(i);
  if (!Array.isArray(r) || r.length !== o.length)
    throw new mn(`The matrix table has ${Array.isArray(r) ? r.length : 0} prices for ${o.length} combinations.`);
  if (!r.every((d) => d === null || typeof d == "number" && Number.isFinite(d) && d >= 0))
    throw new mn("Matrix prices must be numbers of zero or more, or null.");
  const l = (d) => Number.isInteger(d) && d >= 0 && d < o.length;
  if (!Array.isArray(s) || !s.every(l))
    throw new mn("Matrix unavailable positions are out of range.");
  if (!Array.isArray(a) || !a.every((d) => Array.isArray(d) && d.length === 2 && l(d[0]) && typeof d[1] == "string"))
    throw new mn("Matrix SKUs must be [position, sku] pairs.");
  const c = new Set(s), u = new Map(a.map(([d, h]) => [d, h])), f = [];
  return o.forEach((d, h) => {
    const m = r[h], x = u.get(h);
    if (m === null && !c.has(h) && x === void 0 || d.some((E, O) => n.has(e[O]) && !n.get(e[O]).has(E)))
      return;
    const $ = {
      select: Object.fromEntries(e.map((E, O) => [E, d[O]])),
      available: !c.has(h)
    };
    m !== null && ($.price = m), x !== void 0 && ($.sku = x), f.push($);
  }), f;
}
function Uf(e) {
  if (!Sn(e) || !Sn(e.variants) || e.variants.table === void 0)
    return e;
  const { table: t, ...n } = e.variants, i = Array.isArray(n.axes) ? n.axes.filter((r) => typeof r == "string") : [];
  return {
    ...e,
    variants: { ...n, axes: i, combinations: Df(i, t, zf(e)) }
  };
}
function kl(e) {
  let t;
  try {
    t = Uf(e);
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
  const n = Es.safeParse(t);
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
  const i = Sl(n.data);
  return {
    ok: !i.some((r) => r.severity === "error"),
    value: n.data,
    issues: i
  };
}
Es.superRefine((e, t) => {
  for (const n of Sl(e))
    n.severity === "error" && t.addIssue({
      code: R.custom,
      path: n.path,
      message: `${n.code}: ${n.message}`
    });
});
function Sl(e) {
  var c;
  const t = [], n = (u, f, d, h = "error") => t.push({ path: u, code: f, message: d, severity: h }), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  let a = 0, o, l = !1;
  e.sections.forEach((u, f) => {
    r.has(u.id) && n(["sections", f, "id"], "duplicate-section-id", `Duplicate section id "${u.id}".`), r.add(u.id), u.fields.forEach((d, h) => {
      const m = ["sections", f, "fields", h];
      if (i.has(d.id) ? n([...m, "id"], "duplicate-field-id", `Duplicate field id "${d.id}".`) : i.set(d.id, { field: d, path: m }), (d.id === dl || d.id.startsWith("file.")) && n([...m, "id"], "reserved-field-id", `Field id "${d.id}" is reserved for condition refs.`), En(d) && (o ?? (o = m), Yr(d.visibleWhen) || (a += 1, a > 1 && n(m, "multiple-quantity-fields", "Only one quantity field can show unconditionally. Give the others a visibility rule so a single quantity field is shown at a time."))), d.role) {
        const x = s.get(d.role);
        x ? n([...m, "role"], "duplicate-role", `Role "${d.role}" is already used by field "${x}" — only one field per role.`) : s.set(d.role, d.id);
      }
      d.type === "file" && (l = !0);
    });
  }), Vf([...i.values()], n);
  for (const { field: u, path: f } of i.values()) {
    Zf(u, f, n), Wf(u, f, n), Kf(u, f, i, n);
    const d = [
      { mods: u.priceModifiers, base: [...f, "priceModifiers"] }
    ];
    Bt(u) && u.options.forEach((h, m) => {
      d.push({
        mods: h.priceModifiers,
        base: [...f, "options", m, "priceModifiers"]
      });
    }), u.type === "quantities" && ((c = u.rows) == null || c.forEach((h, m) => {
      d.push({
        mods: h.priceModifiers,
        base: [...f, "rows", m, "priceModifiers"]
      });
    }));
    for (const { mods: h, base: m } of d)
      h.forEach((x, $) => {
        ep(x, [...m, $], i, l, n);
      });
    u.type === "quantities" && Jf(u, f, n);
  }
  return np(e.pricing.basePrice, ["pricing", "basePrice"], n), e.variants && ip(e, i, n), o && !Hf(e) && n(o, "quantity-has-no-effect", "Changing the quantity does not change the price: every amount in this product is added once per order. If customers can buy more than one, set the base price to per unit, or price the options per unit instead of fixed.", "warning"), jf(e.pricing.currency) || n(["pricing", "currency"], "unknown-currency", `Currency "${e.pricing.currency}" is not in the known list; totals will round to 2 decimals.`, "warning"), t;
}
function Vf(e, t) {
  const n = e.filter(({ field: a }) => a.type === "file"), i = n.filter(({ field: a }) => a.type === "file" && a.pricing === !0);
  i.slice(1).forEach(({ path: a }) => {
    t([...a, "pricing"], "multiple-pricing-files", "Only one file field can set the price; the first one marked does.", "warning");
  });
  const r = n.some(({ field: a }) => a.type === "file" && (a.display === "producer" || a.providerId === "filecheck")), s = n[0];
  i.length === 0 && n.length > 1 && r && s && t([...s.path, "pricing"], "pricing-file-unmarked", "This product takes more than one file. Turn on Sets the price on the one whose pages and size are priced, or the price follows whichever file the customer added last.", "warning");
}
const Bf = /* @__PURE__ */ new Set([
  "perUnit",
  "perPage",
  "perColorPage",
  "perMonoPage",
  "perArea",
  "perLength"
]);
function Hf(e) {
  var i;
  const t = e.pricing.basePrice;
  if (t.per === "unit" || t.tiers)
    return !0;
  const n = (r) => {
    var s;
    return Bf.has(r.type) || (((s = r.tiers) == null ? void 0 : s.basis) ?? "quantity") === "quantity" && r.tiers !== void 0 || r.type === "formula" && r.formula !== void 0 && Os(r.formula).has("qty");
  };
  for (const r of e.sections)
    for (const s of r.fields)
      if ((i = s.priceModifiers) != null && i.some(n) || Bt(s) && dn(s).some((a) => {
        var o;
        return (o = a.priceModifiers) == null ? void 0 : o.some(n);
      }))
        return !0;
  return !1;
}
function Zf(e, t, n) {
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
  if (e.type === "quantities" && (e.max !== void 0 && e.min > e.max && n([...t, "min"], "min-gt-max", `min (${e.min}) exceeds max (${e.max}).`), e.maxTotal !== void 0 && e.minTotal > e.maxTotal && n([...t, "minTotal"], "min-gt-max", `minTotal (${e.minTotal}) exceeds maxTotal (${e.maxTotal}).`)), e.type === "select-many" && e.maxSelect !== void 0 && e.minSelect > e.maxSelect && n([...t, "minSelect"], "min-gt-max", `minSelect (${e.minSelect}) exceeds maxSelect (${e.maxSelect}).`), e.type === "dimensions") {
    e.minW !== void 0 && e.maxW !== void 0 && e.minW > e.maxW && n([...t, "minW"], "min-gt-max", `minW (${e.minW}) exceeds maxW (${e.maxW}).`), e.minH !== void 0 && e.maxH !== void 0 && e.minH > e.maxH && n([...t, "minH"], "min-gt-max", `minH (${e.minH}) exceeds maxH (${e.maxH}).`);
    const s = e.defaultValue;
    s && (e.minW !== void 0 && s.w < e.minW || e.maxW !== void 0 && s.w > e.maxW || e.minH !== void 0 && s.h < e.minH || e.maxH !== void 0 && s.h > e.maxH) && n(
      [...t, "defaultValue"],
      "default-out-of-range",
      `The preset size (${s.w} × ${s.h} ${e.defaultUnit}) is outside the min/max width or height.`,
      // A warning, never an error: parsing refuses a document with
      // errors, and live sets made from templates already carry
      // presets their changed limits exclude.
      "warning"
    );
  }
  e.type === "file" && (e.providerId === "filecheck" && !((i = e.filecheck) != null && i.workflowId) && !((r = e.filecheck) != null && r.workflow) && n([...t, "filecheck"], "filecheck-missing-workflow", "Filecheck provider selected but no workflow (id or inline) set; the default uploader will be used.", "warning"), e.multiple && e.display === "producer" ? n([...t, "multiple"], "multiple-files-ignored", "Multiple files apply to direct uploads only; a designer field produces one artwork.", "warning") : e.multiple && e.providerId === "filecheck" && n([...t, "multiple"], "multiple-files-ignored", "Allow multiple files has no effect on a Filecheck field. Set how many files to collect, or named slots like Front and Back, in the upload rule of the Filecheck workflow.", "warning"), e.filecheck && e.providerId !== "filecheck" && n([...t, "providerId"], "filecheck-missing-workflow", 'Filecheck settings are present but providerId is not "filecheck"; they will be ignored.', "warning"));
}
function Wf(e, t, n) {
  var s, a;
  if (!Bt(e))
    return;
  const i = /* @__PURE__ */ new Set();
  let r = 0;
  if (e.options.forEach((o, l) => {
    i.has(o.id) && n([...t, "options", l, "id"], "duplicate-choice-id", `Duplicate choice id "${o.id}" in field "${e.id}".`), i.add(o.id), o.default && (r += 1);
  }), e.type === "quantities") {
    (s = e.rows) == null || s.forEach((l, c) => {
      i.has(l.id) && n([...t, "rows", c, "id"], "duplicate-choice-id", `Duplicate choice id "${l.id}" in field "${e.id}" (rows and options share ids).`), i.add(l.id);
    });
    const o = (((a = e.rows) == null ? void 0 : a.length) ?? 1) * e.options.length;
    o > Ra && n([...t, "rows"], "quantities-table-too-large", `This table has ${o} cells; at most ${Ra} fit on one order line.`);
  }
  e.type === "select-one" && r > 1 && n([...t, "options"], "too-many-defaults", `select-one field "${e.id}" has ${r} default choices.`), e.type === "select-many" && e.maxSelect !== void 0 && r > e.maxSelect && n([...t, "options"], "too-many-defaults", `Default choices (${r}) exceed maxSelect (${e.maxSelect}).`);
}
function Kf(e, t, n, i) {
  if (!e.visibleWhen)
    return;
  const r = [...t, "visibleWhen"], s = (a, o) => {
    if (As(a)) {
      const l = Yd.includes(a.ref), c = a.ref === dl, u = n.get(a.ref);
      if (!l && !c && !u) {
        i(o, "dangling-condition-ref", `Condition references unknown field "${a.ref}".`);
        return;
      }
      if (a.ref === e.id && i(o, "self-condition-ref", `Field "${e.id}" references itself.`), c && En(e) && i(o, "quantity-ref-on-quantity-field", `Quantity field "${e.id}" cannot be shown or hidden by the quantity.`), u && Bt(u.field) && (a.op === "eq" || a.op === "neq" || a.op === "in")) {
        const f = new Set(dn(u.field).map((h) => h.id)), d = Array.isArray(a.value) ? a.value : a.value !== void 0 ? [a.value] : [];
        for (const h of d)
          typeof h == "string" && !f.has(h) && i(o, "unknown-condition-choice", `"${h}" is not a choice of field "${a.ref}".`, "warning");
      }
      return;
    }
    (a.all ?? []).forEach((l, c) => s(l, [...o, "all", c])), (a.any ?? []).forEach((l, c) => s(l, [...o, "any", c]));
  };
  s(e.visibleWhen, r);
}
function $l(e, t, n) {
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
const Gf = /* @__PURE__ */ new Set(["fixed", "percent", "multiplier", "setup"]), Yf = /* @__PURE__ */ new Set(["percent", "multiplier", "formula"]), Qf = /^[A-Za-z0-9_-]+$/, Ra = 400;
function Jf(e, t, n) {
  const i = [[e.options, "options"]];
  e.rows && i.push([e.rows, "rows"]);
  for (const [r, s] of i)
    Xf(r, [...t, s], n);
}
function Xf(e, t, n) {
  e.forEach((i, r) => {
    const s = [...t, r];
    Qf.test(i.id) || n([...s, "id"], "quantities-choice-id", `Option id "${i.id}" may only use letters, digits, "-" and "_".`), i.priceModifiers.forEach((a, o) => {
      var c;
      const l = [...s, "priceModifiers", o];
      a.type === "formula" ? n([...l, "type"], "quantities-choice-modifier", "A formula can't price one option of a quantity per option — put it on the field.") : Yf.has(a.type) ? n([...l, "type"], "quantities-choice-modifier", `A "${a.type}" price on one option would change the whole order — price this option per unit, or put the rule on the field.`) : ((c = a.tiers) == null ? void 0 : c.mode) === "graduated" && a.tiers.basis === "quantity" && n([...l, "tiers", "mode"], "quantities-choice-modifier", "Graduated quantity breaks cannot be shared out between options — use flat breaks.");
    });
  });
}
function ep(e, t, n, i, r) {
  if (e.type === "formula" || e.formula !== void 0) {
    tp(e, t, n, i, r);
    return;
  }
  if (e.tiers && ($l(e.tiers, [...t, "tiers"], r), e.tiers.mode === "graduated" && Gf.has(e.type) && r([...t, "tiers", "mode"], "tier-basis-invalid", `Graduated tiers are meaningless on a "${e.type}" modifier.`), e.tiers.basis === "pages" && !i && r([...t, "tiers", "basis"], "pages-basis-without-file", "Pages-based tiers need a file field to supply page counts.", "warning")), (e.type === "perPage" || e.type === "perColorPage" || e.type === "perMonoPage") && !i && r([...t, "type"], "pages-basis-without-file", `"${e.type}" pricing needs a file field to supply page counts.`, "warning"), e.type === "perArea" || e.type === "perLength") {
    const s = e.type.toLowerCase();
    if (e.dimensionsField !== void 0) {
      const a = n.get(e.dimensionsField);
      (!a || a.field.type !== "dimensions") && r([...t, "dimensionsField"], `${s}-dangling-dims`, `"${e.dimensionsField}" is not a dimensions field.`);
    } else i || r([...t, "type"], `${s}-missing-source`, `${e.type} pricing has no dimensions field and no file field to read a canvas from.`, "warning");
  }
}
function tp(e, t, n, i, r) {
  if (e.type !== "formula") {
    r([...t, "formula"], "formula-missing", `Only a formula rule can carry a formula, not a "${e.type}" rule.`);
    return;
  }
  const s = e.formula;
  if (!s) {
    r([...t, "formula"], "formula-missing", "This formula rule has no formula.");
    return;
  }
  for (const l of Ff(s))
    r([...t, "formula", ...l.path], l.code, l.message);
  e.tiers && r([...t, "tiers"], "formula-tiers", "A formula rule can't have volume breaks — put the breaks in the formula, e.g. with band().");
  const a = Os(s), o = a.has("w") || a.has("h") || a.has("area");
  if (e.dimensionsField !== void 0) {
    const l = n.get(e.dimensionsField);
    (!l || l.field.type !== "dimensions") && r([...t, "dimensionsField"], "formula-dangling-dims", `"${e.dimensionsField}" is not a dimensions field.`);
  } else o && !i && r([...t, "dimensionsField"], "formula-no-size", "This formula uses the size (w, h or area), but there is no size field and no file upload to read it from, so the size is always 0.", "warning");
  a.has("pages") && !i && r([...t, "formula"], "pages-basis-without-file", "This formula uses pages, but there is no file field to supply page counts.", "warning");
}
function np(e, t, n) {
  e.tiers && ($l(e.tiers, [...t, "tiers"], n), e.tiers.basis !== "quantity" && n([...t, "tiers", "basis"], "tier-basis-invalid", "Base price tiers must use the quantity basis."), e.tiers.mode === "graduated" && e.per === "order" && n([...t, "tiers", "mode"], "tier-basis-invalid", 'Graduated base tiers require per: "unit".'));
}
function ip(e, t, n) {
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
    if (new Set(c).size !== a.size || c.some((d) => !a.has(d))) {
      n(["variants", "combinations", l, "select"], "variant-combo-invalid", "Combination keys must exactly match the variant axes.");
      return;
    }
    for (const [d, h] of Object.entries(o.select)) {
      const m = r.get(d);
      m && !m.has(h) && n(["variants", "combinations", l, "select", d], "variant-combo-invalid", `"${h}" is not a choice of axis "${d}".`);
    }
    const f = i.axes.map((d) => o.select[d]).join("\0");
    s.has(f) && n(["variants", "combinations", l], "variant-combo-duplicate", "Duplicate variant combination."), s.add(f), o.price !== void 0 && e.pricing.basePrice.tiers && n(["variants", "combinations", l, "price"], "variant-price-with-base-tiers", "Combination price overrides only the untiered base amount; base tiers still apply.", "warning");
  });
}
const es = "1.0", rp = fe({
  /** Minimum quantity required to trigger this tier (inclusive). */
  minQty: Y().nonnegative(),
  /** Maximum quantity for this tier (inclusive). If omitted, tier spans to infinity. */
  maxQty: Y().nonnegative().optional(),
  /** Price/amount applied for this tier. */
  amount: Y()
}), Tl = fe({
  type: Ce([
    "fixed",
    "perUnit",
    "perPage",
    "perColorPage",
    "perMonoPage",
    "percent",
    "multiplier"
  ]),
  amount: Y(),
  tiers: ke(rp).optional()
}), sp = fe({
  /** The field id whose value gates visibility. */
  field: B(),
  /** Show when the field's selected value equals one of these. */
  equals: ai([B(), ke(B())]).optional(),
  /** Show only when a value is present (any non-empty selection). */
  isSet: He().optional()
}), ap = fe({
  id: B().min(1),
  label: B(),
  description: B().optional(),
  image: B().url().optional(),
  color: B().optional(),
  default: He().optional(),
  priceModifiers: ke(Tl).default([]),
  /** Dead in v1 runtime; dropped by migration. */
  reveals: ke(B()).default([])
}), op = Ce([
  "card-select",
  "image-grid",
  "swatch",
  "pill-toggle",
  "dropdown",
  "number-stepper",
  "file-upload",
  "summary"
]), lp = fe({
  id: B().min(1),
  type: op,
  label: B().optional(),
  helpText: B().optional(),
  required: He().default(!1),
  options: ke(ap).default([]),
  min: Y().optional(),
  max: Y().optional(),
  step: Y().optional(),
  defaultValue: ai([B(), Y()]).optional(),
  accept: ke(B()).optional(),
  providerId: B().optional(),
  visibleWhen: sp.optional(),
  priceModifiers: ke(Tl).default([])
}), cp = fe({
  id: B().min(1),
  title: B(),
  layout: Ce(["stacked", "tabs"]).default("stacked"),
  fields: ke(lp)
}), up = fe({
  version: dt(es).default(es),
  productId: B().min(1),
  title: B(),
  currency: B().default("USD"),
  basePrice: Y().nonnegative().default(0),
  sections: ke(cp)
});
class Ki extends Error {
  constructor(n) {
    const i = n.map((r) => `${r.code} at ${r.path.join(".") || "<root>"}: ${r.message}`).join("; ");
    super(`Invalid product options: ${i}`);
    Jt(this, "issues");
    this.name = "ProductOptionsError", this.issues = n;
  }
}
function dp(e) {
  const t = up.safeParse(e);
  if (!t.success)
    throw new Ki(t.error.issues.map((c) => ({
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
    version: Bi,
    productId: n.productId,
    title: n.title,
    layout: s ? "wizard" : "stacked",
    pricing: {
      currency: bp(n.currency, i),
      basePrice: { amount: n.basePrice, per: "order" }
    },
    sections: n.sections.map((c) => ({
      id: c.id,
      title: c.title,
      fields: c.fields.map((u) => {
        const f = hp(u, r, i);
        return f.type === "quantity" && (r = !0), f;
      })
    }))
  }, o = Es.parse(a), l = kl(o);
  if (!l.ok)
    throw new Ki(l.issues.filter((c) => c.severity === "error"));
  return { doc: o, warnings: i };
}
function fp(e) {
  const t = typeof e == "object" && e !== null ? e.version : void 0;
  if (t === void 0 || t === Bi) {
    const n = kl(e);
    if (!n.ok || !n.value)
      throw new Ki(n.issues.filter((i) => i.severity === "error"));
    return { doc: n.value, warnings: [] };
  }
  if (t === es)
    return dp(e);
  throw new Ki([
    {
      path: ["version"],
      code: "unknown-version",
      message: `Unsupported schema version "${String(t)}".`,
      severity: "error"
    }
  ]);
}
function Fa(e, t) {
  const { doc: n, warnings: i } = fp(e);
  return n;
}
const pp = {
  "card-select": "cards",
  "image-grid": "grid",
  swatch: "swatches",
  "pill-toggle": "pills",
  dropdown: "dropdown"
};
function hp(e, t, n) {
  const i = {
    id: e.id,
    label: e.label,
    helpText: e.helpText,
    required: e.required,
    visibleWhen: vp(e.visibleWhen),
    priceModifiers: e.priceModifiers.map((r) => Cl(r, n))
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
        display: pp[e.type],
        options: e.options.map((r) => mp(r, n))
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
        min: jn(e.min) ?? 1,
        max: jn(e.max),
        step: jn(e.step) ?? 1,
        defaultValue: jn(typeof e.defaultValue == "number" ? e.defaultValue : void 0) ?? jn(e.min) ?? 1
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
function mp(e, t) {
  return {
    id: e.id,
    label: e.label,
    description: e.description,
    image: e.image,
    color: e.color,
    default: e.default,
    priceModifiers: e.priceModifiers.map((n) => Cl(n, t))
  };
}
function vp(e) {
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
function jn(e) {
  if (e === void 0)
    return;
  const t = Math.round(e);
  return t >= 1 ? t : void 0;
}
function Cl(e, t) {
  return !e.tiers || e.tiers.length === 0 ? { type: e.type, amount: e.amount } : {
    type: e.type,
    amount: e.amount,
    tiers: {
      basis: "quantity",
      mode: "flat",
      rows: gp(e.tiers, e.amount, t)
    }
  };
}
function gp(e, t, n) {
  yp(e) && n.push("Overlapping v1 tiers detected; earlier tiers win in the overlap (v1 behavior preserved).");
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
function yp(e) {
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
function bp(e, t) {
  const n = e.toUpperCase();
  return /^[A-Z]{3}$/.test(n) ? n : (t.push(`Currency "${e}" is not an ISO 4217 code; defaulting to USD.`), "USD");
}
const ja = "1.0", Al = Ce(["mm", "cm", "in", "pt", "px"]), xp = Ce(["pending", "ready", "failed"]), wp = Ce(["info", "warning", "error"]), _p = fe({
  /** 1-based page index. */
  page: Y().int().positive(),
  w: Y().nonnegative(),
  h: Y().nonnegative(),
  unit: Al.default("mm")
}), kp = fe({
  w: Y().nonnegative(),
  h: Y().nonnegative(),
  /** Bleed applied around the trim box, in `unit`. */
  bleed: Y().nonnegative().default(0),
  unit: Al.default("mm")
}), Sp = fe({
  /** Dominant color model detected in the file. */
  model: Ce(["RGB", "CMYK", "Gray", "Mixed", "Unknown"]).default("Unknown"),
  /** Named spot colors (e.g. Pantone) found in the file. */
  spot: ke(B()).default([])
}), $p = fe({
  /** Machine-readable code, e.g. "low-dpi", "not-embedded-font", "out-of-gamut". */
  code: B(),
  severity: wp.default("warning"),
  message: B().optional(),
  /** 1-based page index the issue applies to, if page-specific. */
  page: Y().int().positive().optional()
}), Ps = fe({
  /** Contract version, for forward/backward compatibility. */
  version: dt(ja).default(ja),
  /** Stable id assigned by the basic uploader; correlates feeds to a file. */
  fileId: B().min(1),
  /** Who produced this metadata. Free-form, but reserve known sources. */
  source: B().default("custom"),
  status: xp.default("pending"),
  /** Original file name and MIME type, if known. */
  fileName: B().optional(),
  mimeType: B().optional(),
  fileSizeBytes: Y().int().nonnegative().optional(),
  /** Total page count. Absent means "unknown" — pricing must fall back. */
  pages: Y().int().nonnegative().optional(),
  colorPages: Y().int().nonnegative().optional(),
  monoPages: Y().int().nonnegative().optional(),
  pageSizes: ke(_p).optional(),
  canvas: kp.optional(),
  colors: Sp.optional(),
  issues: ke($p).default([]),
  /** Provider-specific extras that don't fit the core contract. */
  raw: Cs(ul()).optional()
}), Tp = fe({
  pages: He().default(!1),
  colorDetection: He().default(!1),
  pageSizes: He().default(!1),
  canvas: He().default(!1),
  preflightIssues: He().default(!1)
}), Cp = fe({
  id: B().min(1),
  name: B(),
  /**
   * "push" = provider POSTs metadata to us; "pull" = we fetch from `endpoint`;
   * "element" = provider renders its own embedded uploader (e.g. the
   * Filecheck intake element) in place of the basic dropzone.
   */
  mode: Ce(["push", "pull", "element"]).default("push"),
  endpoint: B().url().optional(),
  capabilities: Tp.default({}),
  /** element mode: publishable key (pk_live_/pk_test_ — browser-safe, store-level). */
  publishableKey: B().optional(),
  /** element mode: optional sub-tenant scope. */
  agentId: B().optional(),
  /** element mode: override the provider SDK script URL (staging/local dev). */
  scriptUrl: B().url().optional(),
  /** element mode: override the provider iframe URL (local dev). */
  iframeSrc: B().url().optional(),
  /** element mode: create preview sessions (unmetered, webhook-suppressed). */
  preview: He().optional()
}), Gi = [
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
], Ap = {
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
};
function Ip(e) {
  const t = /\.([A-Za-z0-9]{1,16})$/.exec(e.trim());
  return t ? t[1].toLowerCase() : "";
}
function Ep(e) {
  const t = e.replace(/^\./, "").toLowerCase();
  return Gi.find((n) => n.extensions.includes(t));
}
function Ms(e) {
  const t = /* @__PURE__ */ new Set(), n = (i) => i.extensions.forEach((r) => t.add(r));
  for (const i of e) {
    const r = i.trim().toLowerCase();
    if (!r)
      continue;
    if (r.includes("/")) {
      for (const o of Gi) {
        const l = o.mime === r || Ap[o.extensions[0]] === r, c = r !== "application/pdf" && o.mimeTypes.includes(r);
        (l || c) && n(o);
      }
      continue;
    }
    const s = Ep(r);
    if (s) {
      n(s);
      continue;
    }
    const a = r.split(/[^a-z0-9]+/).filter(Boolean);
    for (const o of Gi)
      a.some((l) => o.words.includes(l)) && n(o);
  }
  return [...t];
}
function Np(e) {
  return Ms(e).map((t) => `.${t}`).join(",");
}
function Op(e, t) {
  const n = Ms(e);
  return n.length === 0 || n.includes(Ip(t));
}
function Pp(e) {
  const t = Ms(e);
  return Gi.filter((n) => n.extensions.some((i) => t.includes(i))).map((n) => n.label).join(", ");
}
const Il = {
  mm: 1e-3,
  cm: 0.01,
  in: 0.0254,
  pt: 0.0254 / 72,
  px: void 0
}, Mp = {
  sqm: 1,
  sqft: 0.3048 * 0.3048,
  sqin: 0.0254 * 0.0254
};
function El(e, t, n, i) {
  const r = Il[n];
  return r === void 0 || e <= 0 || t <= 0 ? 0 : e * r * (t * r) / Mp[i];
}
function Rs(e, t) {
  var n;
  if (e.dimensionsField !== void 0) {
    const i = t.selections[e.dimensionsField];
    return pt(i) ? i : void 0;
  }
  return (n = t.file) == null ? void 0 : n.canvas;
}
function Nl(e, t) {
  const n = Rs(e, t);
  return n ? El(n.w, n.h, n.unit, e.areaUnit ?? "sqm") : 0;
}
function Rp(e, t) {
  if (e === "quantity")
    return t.quantity;
  const n = Fp(e, t);
  if (If(n)) {
    const i = /* @__PURE__ */ new Set();
    for (const [r, s] of Object.entries(n))
      if (s > 0)
        for (const a of r.split(hl))
          i.add(a);
    return [...i];
  }
  return n;
}
function Fp(e, t) {
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
function qa(e) {
  return e !== void 0 && e !== "" && !(Array.isArray(e) && e.length === 0);
}
function jp(e, t) {
  const n = Rp(e.ref, t);
  if (e.op === "isSet")
    return qa(n);
  if (e.op === "notSet")
    return !qa(n);
  if (n === void 0)
    return !1;
  switch (e.op) {
    case "eq":
      return La(n, e.value);
    case "neq":
      return !La(n, e.value);
    case "in": {
      const i = Array.isArray(e.value) ? e.value.map(String) : e.value !== void 0 ? [String(e.value)] : [];
      return Array.isArray(n) ? n.some((r) => i.includes(String(r))) : pt(n) ? !1 : i.includes(String(n));
    }
    case "gt":
    case "gte":
    case "lt":
    case "lte": {
      if (Array.isArray(n) || pt(n))
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
function La(e, t) {
  if (Array.isArray(e)) {
    if (Array.isArray(t)) {
      const n = t.map(String);
      return e.some((i) => n.includes(String(i)));
    }
    return t !== void 0 && e.map(String).includes(String(t));
  }
  return pt(e) ? !1 : Array.isArray(t) ? t.map(String).includes(String(e)) : t !== void 0 && String(e) === String(t);
}
function Ol(e, t) {
  if (!e)
    return !0;
  const n = (s) => As(s) ? jp(s, t) : Ol(s, t), i = e.all === void 0 || e.all.every(n), r = e.any === void 0 || e.any.length === 0 || e.any.some(n);
  return i && r;
}
function za(e, t) {
  return Ol(e.visibleWhen, t);
}
function Fs(e, t, n) {
  return za(t, n) ? !En(t) || Yr(t.visibleWhen) ? !0 : !e.sections.some((i) => i.fields.some((r) => En(r) && Yr(r.visibleWhen) && za(r, n))) : !1;
}
const qp = {
  m: 1,
  ft: 0.3048,
  in: 0.0254,
  cm: 0.01
};
function ts(e, t, n) {
  const i = Il[t];
  return i === void 0 || e <= 0 ? 0 : e * i / qp[n];
}
function Lp(e, t, n) {
  return n === "w" ? e : n === "max" ? Math.max(e, t) : t;
}
function Pl(e, t) {
  const n = Rs(e, t);
  return n ? ts(Lp(n.w, n.h, e.lengthAxis), n.unit, e.lengthUnit ?? "m") : 0;
}
const zp = 256, yi = /* @__PURE__ */ new Map();
function Da(e) {
  const t = yi.get(e);
  if (t !== void 0)
    return t;
  const n = Ns(e), i = n.ok ? n.ast : null;
  return yi.size >= zp && yi.clear(), yi.set(e, i), i;
}
function Dp(e, t) {
  const n = new Map(Object.entries(t));
  for (const s of e.steps ?? []) {
    const a = Da(s.expression);
    if (!a)
      return Number.NaN;
    n.set(s.name.toLowerCase(), nn(a, n));
  }
  const i = Da(e.expression);
  if (!i)
    return Number.NaN;
  const r = nn(i, n);
  return Number.isFinite(r) ? r : Number.NaN;
}
function nn(e, t) {
  switch (e.kind) {
    case "number":
      return e.value;
    case "name":
      return t.get(e.name) ?? Number.NaN;
    case "group":
      return nn(e.inner, t);
    case "negate":
      return -nn(e.operand, t);
    case "binary": {
      const n = nn(e.left, t), i = nn(e.right, t);
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
          return Up(n, i);
      }
      break;
    }
    case "call":
      return Vp(e.fn, e.args.map((n) => nn(n, t)));
  }
  return Number.NaN;
}
function Up(e, t) {
  if (!Number.isInteger(t))
    return Math.pow(e, t);
  let n = Math.abs(t), i = 1, r = e;
  for (; n > 0; )
    n % 2 === 1 && (i *= r), r *= r, n = Math.floor(n / 2);
  return t < 0 ? 1 / i : i;
}
function Vp(e, t) {
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
function Bp(e, t) {
  var r;
  const n = Rs(e, t), i = e.lengthUnit ?? "m";
  return {
    qty: t.quantity,
    w: n ? Ir(ts(n.w, n.unit, i)) : 0,
    h: n ? Ir(ts(n.h, n.unit, i)) : 0,
    area: n ? Ir(El(n.w, n.h, n.unit, e.areaUnit ?? "sqm")) : 0,
    pages: ((r = t.file) == null ? void 0 : r.pages) ?? 0
  };
}
function Ir(e) {
  return e === 0 ? 0 : Number(e.toPrecision(12));
}
function Hp(e, t) {
  return e.formula ? Dp(e.formula, Bp(e, t)) : Number.NaN;
}
function ft(e, t) {
  const i = 10 ** _l(t);
  return Math.round((e + Number.EPSILON) * i) / i;
}
function Zp(e) {
  const t = [];
  for (const n of e.sections)
    for (const i of n.fields)
      En(i) && t.push(i);
  return t;
}
function pi(e, t, n) {
  const i = Zp(e);
  if (i.length <= 1)
    return i[0];
  const r = { selections: t, file: n, quantity: 1 };
  return i.find((s) => Fs(e, s, r)) ?? i[0];
}
function Ml(e, t, n) {
  const i = pi(e, t, n);
  return i ? i.type === "quantities" ? js(Ct(i, t[i.id])) : oi(i, t[i.id]) : 1;
}
function oi(e, t) {
  const n = typeof t == "number" ? t : typeof t == "string" && t.trim() !== "" ? Number(t) : e.defaultValue;
  return Number.isNaN(n) ? ns(e, e.defaultValue) : ns(e, n);
}
function Ct(e, t) {
  const n = {};
  if (typeof t != "object" || t === null || Array.isArray(t))
    return n;
  const i = t;
  for (const { key: r } of Is(e)) {
    const s = i[r], a = typeof s == "number" ? s : typeof s == "string" && s.trim() !== "" ? Number(s) : Number.NaN;
    !Number.isFinite(a) || Math.round(a) <= 0 || (n[r] = ns(e, a));
  }
  return n;
}
function Rl(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const i of dn(e))
    n.set(i.id, 0);
  for (const { key: i, option: r, row: s } of Is(e)) {
    const a = t[i];
    a === void 0 || a <= 0 || (n.set(r.id, (n.get(r.id) ?? 0) + a), s && n.set(s.id, (n.get(s.id) ?? 0) + a));
  }
  for (const [i, r] of n)
    r <= 0 && n.delete(i);
  return n;
}
function js(e) {
  let t = 0;
  for (const n of Object.values(e))
    t += n;
  return t;
}
function ns(e, t) {
  const n = e.step;
  let i = Math.round(t);
  return i = e.min + Math.round((i - e.min) / n) * n, i < e.min && (i = e.min), e.max !== void 0 && i > e.max && (i = e.min + Math.floor((e.max - e.min) / n) * n), i;
}
function li(e, t) {
  for (const n of e)
    if (n.upTo === void 0 || t <= n.upTo)
      return n;
  return e[e.length - 1];
}
function Vn(e, t) {
  let n = 0, i = 0;
  for (const r of t) {
    const a = (r.upTo === void 0 ? e : Math.min(r.upTo, e)) - i;
    if (a > 0 && (n += a * r.amount), r.upTo === void 0 || e <= r.upTo)
      break;
    i = r.upTo;
  }
  return n;
}
function ur(e, t) {
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
function Wp(e, t) {
  const n = ur(e, t);
  if (n != null && n.sku)
    return n.sku;
  const i = [];
  for (const r of e.sections)
    for (const s of r.fields) {
      if (!fi(s))
        continue;
      const a = t[s.id], o = Array.isArray(a) ? a : typeof a == "string" ? [a] : [];
      for (const l of s.options)
        o.includes(l.id) && l.sku && i.push(l.sku);
    }
  return i.length > 0 ? i.join("-") : void 0;
}
function Kp(e, t, n, i) {
  for (const a of e.sections)
    for (const o of a.fields) {
      if (o.id !== n || !Bt(o))
        continue;
      const l = dn(o).find((c) => c.id === i);
      if (!l || l.disabled)
        return !1;
    }
  const r = e.variants;
  if (!r || !r.axes.includes(n))
    return !0;
  const s = ur(e, { ...t, [n]: i });
  return s ? s.available : !0;
}
function Gp(e, t) {
  const n = ur(e, t);
  if (n && !n.available)
    return !0;
  for (const i of e.sections)
    for (const r of i.fields) {
      if (!Bt(r))
        continue;
      const s = t[r.id], a = r.type === "quantities" ? [...Rl(r, Ct(r, s)).keys()] : Array.isArray(s) ? s : typeof s == "string" ? [s] : [];
      for (const o of dn(r))
        if (a.includes(o.id) && o.disabled)
          return !0;
    }
  return !1;
}
function is(e, t) {
  const n = Ml(e, t.selections, t.file), i = t.quantity ?? n, r = pi(e, t.selections, t.file), s = (r == null ? void 0 : r.type) === "quantities" ? { fieldId: r.id, scale: n > 0 ? i / n : 0 } : void 0, a = {
    selections: t.selections,
    file: t.file,
    quantity: i
  }, o = e.pricing.currency, l = [], c = ur(e, t.selections), u = Gp(e, t.selections);
  let f = !1;
  const d = Wp(e, t.selections), h = Yp(e.pricing.basePrice, c == null ? void 0 : c.price, i);
  l.push({
    sourceId: "base",
    label: "Base price",
    stage: "base",
    type: "base",
    amount: ft(h, o)
  });
  let m = h;
  const x = Fl(e, a, s);
  for (const { sourceId: j, label: F, modifier: b, units: g } of x) {
    const q = Jp(b, a, g);
    if (q !== void 0) {
      if (Number.isNaN(q)) {
        f = !0;
        continue;
      }
      m += q, l.push({
        sourceId: j,
        label: F,
        stage: "additive",
        type: b.type,
        amount: ft(q, o)
      });
    }
  }
  const $ = m;
  for (const { sourceId: j, label: F, modifier: b } of x) {
    if (b.type !== "percent")
      continue;
    const g = Gt(b, a), q = m * (g / 100);
    m += q, l.push({
      sourceId: j,
      label: F,
      stage: "percent",
      type: "percent",
      amount: ft(q, o)
    });
  }
  for (const { sourceId: j, label: F, modifier: b } of x) {
    if (b.type !== "multiplier")
      continue;
    const g = Gt(b, a), q = m * g - m;
    m += q, l.push({
      sourceId: j,
      label: F,
      stage: "multiplier",
      type: "multiplier",
      amount: ft(q, o)
    });
  }
  e.pricing.setupFee !== void 0 && e.pricing.setupFee > 0 && (m += e.pricing.setupFee, l.push({
    sourceId: "setup-fee",
    label: "Setup fee",
    stage: "setup",
    type: "setup",
    amount: ft(e.pricing.setupFee, o)
  }));
  for (const { sourceId: j, label: F, modifier: b } of x) {
    if (b.type !== "setup")
      continue;
    const g = Gt(b, a);
    m += g, l.push({
      sourceId: j,
      label: F,
      stage: "setup",
      type: "setup",
      amount: ft(g, o)
    });
  }
  const E = Math.max(e.pricing.minimumPrice ?? 0, 0);
  if (m < E) {
    const j = E - m;
    m = E, l.push({
      sourceId: "adjustment:minimum",
      label: "Minimum order adjustment",
      stage: "adjustment",
      type: "minimum",
      amount: ft(j, o)
    });
  }
  const O = ft(m, o), K = u ? "combination" : f ? "formula" : void 0;
  return {
    currency: o,
    quantity: i,
    unavailable: K !== void 0,
    ...K ? { unavailableReason: K } : {},
    sku: d,
    base: ft(h, o),
    subtotal: ft($, o),
    total: O,
    unitPrice: ft(m / Math.max(i, 1), o),
    lines: l
  };
}
function Yp(e, t, n) {
  const i = t ?? e.amount, r = e.tiers;
  return e.per === "order" ? r ? li(r.rows, n).amount : i : r ? r.mode === "graduated" ? Vn(n, r.rows) : li(r.rows, n).amount * n : i * n;
}
function Fl(e, t, n) {
  const i = [];
  for (const r of e.sections)
    for (const s of r.fields) {
      if (!Fs(e, s, t))
        continue;
      for (const o of s.priceModifiers)
        i.push({
          sourceId: s.id,
          label: s.label ?? s.id,
          modifier: o
        });
      if (s.type === "quantities") {
        const o = Rl(s, Ct(s, t.selections[s.id])), l = (n == null ? void 0 : n.fieldId) === s.id ? n.scale : 1;
        for (const c of dn(s)) {
          const u = o.get(c.id);
          if (u !== void 0)
            for (const f of c.priceModifiers)
              i.push({
                sourceId: `${s.id}:${c.id}`,
                label: `${c.label} × ${u}`,
                modifier: f,
                units: u * l
              });
        }
        continue;
      }
      if (!fi(s))
        continue;
      const a = Qp(s.id, t.selections);
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
function Qp(e, t) {
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
      return Nl(e, t);
    case "length":
      return Pl(e, t);
  }
}
function Gt(e, t) {
  return e.tiers ? li(e.tiers.rows, Bn(e, t)).amount : e.amount;
}
function Jp(e, t, n = t.quantity) {
  var r, s, a, o, l, c, u;
  const i = n;
  switch (e.type) {
    case "percent":
    case "multiplier":
    case "setup":
      return;
    case "fixed":
      return Gt(e, t);
    case "perUnit":
      return ((r = e.tiers) == null ? void 0 : r.mode) === "graduated" ? Vn(Bn(e, t), e.tiers.rows) : Gt(e, t) * i;
    case "perPage":
    case "perColorPage":
    case "perMonoPage": {
      const f = e.type === "perPage" ? ((s = t.file) == null ? void 0 : s.pages) ?? 0 : e.type === "perColorPage" ? ((a = t.file) == null ? void 0 : a.colorPages) ?? 0 : ((o = t.file) == null ? void 0 : o.monoPages) ?? 0;
      return ((l = e.tiers) == null ? void 0 : l.mode) === "graduated" ? Vn(Bn(e, t), e.tiers.rows) * i : Gt(e, t) * f * i;
    }
    case "perArea": {
      const f = Nl(e, t);
      return ((c = e.tiers) == null ? void 0 : c.mode) === "graduated" ? Vn(Bn(e, t), e.tiers.rows) * i : Gt(e, t) * f * i;
    }
    case "formula":
      return Hp(e, t);
    case "perLength": {
      const f = Pl(e, t);
      return ((u = e.tiers) == null ? void 0 : u.mode) === "graduated" ? Vn(Bn(e, t), e.tiers.rows) * i : Gt(e, t) * f * i;
    }
  }
}
const Xp = 5;
function eh(e, t) {
  const n = pi(e, t.selections, t.file);
  if (!n)
    return;
  const i = is(e, t), r = i.quantity;
  if (r <= 0 || i.unavailable)
    return;
  const s = { selections: t.selections, file: t.file, quantity: r }, a = Fl(e, s).map(({ modifier: u }) => u), o = th(e, a), l = /* @__PURE__ */ new Set();
  for (const { table: u } of o)
    for (const f of u.rows) {
      if (f.upTo === void 0)
        continue;
      const d = nh(n, r, Math.floor(f.upTo) + 1);
      d !== void 0 && d > r && l.add(d);
    }
  const c = [...l].sort((u, f) => u - f).slice(0, Xp);
  for (const u of c) {
    const f = is(e, { ...t, quantity: u });
    if (!(f.unavailable || f.unitPrice >= i.unitPrice))
      return {
        add: u - r,
        quantity: u,
        unitPrice: f.unitPrice,
        percentOff: ih(o, r, u)
      };
  }
}
function th(e, t) {
  const n = [], i = e.pricing.basePrice.tiers;
  i && i.basis === "quantity" && n.push({ table: i, percent: !1 });
  for (const r of t)
    r.tiers && r.tiers.basis === "quantity" && n.push({ table: r.tiers, percent: r.type === "percent" });
  return n;
}
function nh(e, t, n) {
  if (e.type === "quantities") {
    const s = Math.ceil((n - t) / e.step), a = t + Math.max(s, 0) * e.step;
    return e.maxTotal !== void 0 && a > e.maxTotal ? void 0 : a;
  }
  const i = Math.ceil((n - e.min) / e.step), r = e.min + Math.max(i, 0) * e.step;
  return e.max !== void 0 && r > e.max ? void 0 : r;
}
function ih(e, t, n) {
  let i = 1, r = 1;
  for (const { table: s, percent: a } of e) {
    const o = li(s.rows, t), l = li(s.rows, n);
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
const rh = /* @__PURE__ */ new Set([
  "perPage",
  "perColorPage",
  "perMonoPage"
]), sh = /* @__PURE__ */ new Set([
  "file.pages",
  "file.colorPages",
  "file.monoPages"
]);
function jl(e) {
  return e ? [...e.all ?? [], ...e.any ?? []].some((n) => As(n) ? sh.has(n.ref) : jl(n)) : !1;
}
function ah(e) {
  const t = (n) => {
    var i;
    return rh.has(n.type) || ((i = n.tiers) == null ? void 0 : i.basis) === "pages" || n.formula !== void 0 && Os(n.formula).has("pages");
  };
  for (const n of e.sections)
    for (const i of n.fields)
      if (jl(i.visibleWhen) || i.priceModifiers.some(t) || Bt(i) && i.options.some((r) => r.priceModifiers.some(t)))
        return !0;
  return !1;
}
const Yi = "__artwork", ql = "__artwork-section";
function oh(e) {
  return { id: ql, title: e, fields: [{
    id: Yi,
    type: "file",
    display: "producer",
    accept: [],
    required: !1,
    priceModifiers: []
  }] };
}
function lh(e, t) {
  ct(
    [() => e.schema.value, () => t.list.value],
    ([n, i]) => {
      if (!n)
        return;
      const r = n.sections.some(
        (o) => o.fields.some(
          (l) => l.type === "file" && l.id !== Yi
        )
      ), s = n.sections.findIndex(
        (o) => o.id === ql
      ), a = i.length > 0 && !r;
      a && s === -1 ? n.sections.push(oh(i[0].label)) : !a && s !== -1 && (n.sections.splice(s, 1), e.select(Yi, ""));
    },
    { immediate: !0, deep: !0 }
  );
}
function Ll(e, t, n, i = {}) {
  var a, o, l;
  const r = [], s = e.flatMap(({ fields: c }) => c).filter((c) => c.type === "file").reduce((c, u) => c + Er(u.id, t[u.id], n, i).length, 0);
  for (const { section: c, fields: u } of e) {
    const d = c.fields.filter((h) => h.type !== "info").length === 1 && ((a = c.title) == null ? void 0 : a.trim()) || void 0;
    for (const h of u) {
      if (h.type === "info")
        continue;
      const m = t[h.id];
      let x;
      if (fi(h)) {
        const $ = Array.isArray(m) ? m : typeof m == "string" ? [m] : [], E = h.options.filter((O) => $.includes(O.id)).map((O) => O.label);
        x = E.length ? E.join(", ") : void 0;
      } else if (h.type === "quantities" && ((o = h.rows) != null && o.length)) {
        const $ = Ct(h, m);
        for (const E of h.rows) {
          const O = h.options.filter((K) => $[Zi(K.id, E.id)] !== void 0).map(
            (K) => `${K.label} × ${$[Zi(K.id, E.id)]}`
          );
          O.length && r.push({ fieldId: h.id, label: E.label, value: O.join(", ") });
        }
        continue;
      } else if (h.type === "quantities") {
        const $ = Ct(h, m), E = h.options.filter((O) => $[O.id] !== void 0).map((O) => `${O.label} × ${$[O.id]}`);
        x = E.length ? E.join(", ") : void 0;
      } else if (h.type === "file") {
        const $ = Er(h.id, m, n, i).map(
          (E) => E.fileName ?? i.designName ?? E.fileId
        );
        x = $.length ? $.join(", ") : void 0;
      } else if (pt(m))
        x = `${m.w} × ${m.h} ${m.unit}`;
      else if (h.type === "quantity" && m !== void 0 && m !== "") {
        const $ = oi(h, m), E = (l = h.unit) == null ? void 0 : l.trim();
        x = E ? `${$} ${E}` : String($);
      } else m !== void 0 && m !== "" && (x = String(m));
      if (x !== void 0 && r.push({
        fieldId: h.id,
        /* An unlabeled quantity is common (the stepper explains
           itself on the page) — never show its internal id. */
        label: h.label || /* The designer's own slot is titled with its button
        ("Design fortsetzen" once saved) — no cart label. */
        (h.id === Yi ? i.artworkLabel ?? "Design" : void 0) || d || (En(h) ? i.quantityLabel ?? "Quantity" : h.id),
        value: x
      }), h.type === "file" && i.fileLinkLabel && x !== void 0) {
        const $ = Er(h.id, m, n, i);
        for (const E of $) {
          const O = uh(E);
          O && r.push({
            fieldId: h.id,
            label: s > 1 ? `${i.fileLinkLabel} (${E.fileName ?? E.fileId})` : i.fileLinkLabel,
            value: O
          });
        }
      }
    }
  }
  return ch(r);
}
function Er(e, t, n, i) {
  var o, l;
  const r = (o = i.uploads) == null ? void 0 : o[e];
  if (r != null && r.length)
    return r;
  const s = Array.isArray(t) ? t : typeof t == "string" && t ? [t] : [], a = (l = i.records) == null ? void 0 : l[e];
  return a && s.includes(a.fileId) ? [a] : n && s.includes(n.fileId) ? [n] : [];
}
function ch(e) {
  const t = /* @__PURE__ */ new Map();
  return e.map((n) => {
    const i = (t.get(n.label) ?? 0) + 1;
    return t.set(n.label, i), i === 1 ? n : { ...n, label: `${n.label} (${i})` };
  });
}
function uh(e) {
  var n;
  const t = (n = e == null ? void 0 : e.raw) == null ? void 0 : n.downloadUrl;
  return typeof t == "string" && t.startsWith("https://") ? t : void 0;
}
async function dh(e) {
  const t = await e.text().catch(() => "");
  let n = "";
  try {
    const i = JSON.parse(t);
    n = typeof i.error == "string" ? i.error.trim() : "";
  } catch {
    n = "";
  }
  return n ? /[.!?]$/.test(n) ? n : `${n}.` : (console.warn("[print-configurator] upload refused:", e.status, t), "");
}
async function fh(e, t, n) {
  const i = n ? await ph(n) : void 0, r = await fetch(e, {
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
  if (!r.ok)
    throw new Error(await dh(r));
  const { url: s, fields: a, fileId: o, downloadUrl: l } = await r.json(), c = new FormData();
  for (const [f, d] of Object.entries(a))
    c.append(f, d);
  c.append("file", t);
  const u = await fetch(s, {
    method: "POST",
    body: c
  });
  if (!u.ok)
    throw console.warn("[print-configurator] storage refused the upload:", u.status, await u.text().catch(() => "")), new Error("");
  return {
    fileId: o ?? crypto.randomUUID(),
    fileName: t.name,
    fileSizeBytes: t.size,
    // Only a real web link: it ends up as a clickable link on the order.
    ...typeof l == "string" && /^https:\/\//.test(l) ? { downloadUrl: l } : {}
  };
}
function ph(e) {
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
async function hh(e, t) {
  if (!e.endpoint)
    throw new Error(`Provider "${e.id}" has no endpoint for pull mode.`);
  const n = `${e.endpoint.replace(/\/$/, "")}/${encodeURIComponent(t)}`, i = await fetch(n);
  if (!i.ok)
    throw new Error(`Metadata fetch failed: ${i.status}`);
  return Ps.parse(await i.json());
}
async function mh(e, t, n = {}) {
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
      if (s = await hh(e, t), s.status === "ready" || s.status === "failed")
        return s;
    } catch {
    }
    await vh(i);
  }
  return s;
}
function vh(e) {
  return new Promise((t) => setTimeout(t, e));
}
function gh(e) {
  const t = { ...e }, n = /* @__PURE__ */ Re(null), i = /* @__PURE__ */ Re(!1), r = /* @__PURE__ */ Re(null), s = /* @__PURE__ */ Re(!1), a = /* @__PURE__ */ lt({}), o = /* @__PURE__ */ Re(!1), l = /* @__PURE__ */ lt({}), c = /* @__PURE__ */ lt({}), u = /* @__PURE__ */ Re(void 0), f = /* @__PURE__ */ lt({}), d = /* @__PURE__ */ lt({}), h = /* @__PURE__ */ new Map();
  let m = 0;
  function x(S) {
    const G = l[S];
    return c[S] ?? (G != null && G.length ? G[G.length - 1] : void 0);
  }
  const $ = Z({
    get: () => {
      const S = n.value ? xf(n.value) : void 0;
      return S ? x(S.id) : u.value;
    },
    set: (S) => {
      u.value = S;
    }
  });
  function E() {
    const S = [...Object.values(l).flat(), ...Object.values(c)];
    return S[S.length - 1];
  }
  function O(S, G) {
    const pe = l[S];
    pe != null && pe.some((Se) => Se.fileId === G.fileId) && (l[S] = pe.map((Se) => Se.fileId === G.fileId ? G : Se));
  }
  const K = Z(
    () => n.value ? Ml(n.value, a, $.value) : 1
  ), j = Z(() => ({
    selections: a,
    file: $.value,
    quantity: K.value
  }));
  async function F() {
    i.value = !0, r.value = null, s.value = !1;
    try {
      if (t.inlineConfig)
        n.value = Fa(t.inlineConfig);
      else if (t.configUrl) {
        const S = await fetch(t.configUrl);
        if (S.status === 404 || S.status === 403) {
          s.value = !0;
          return;
        }
        if (!S.ok)
          throw new Error(`Config load failed: ${S.status}`);
        n.value = Fa(await S.json());
      } else
        throw new Error("No config-url or inline config provided.");
      yh(n.value, a);
    } catch (S) {
      r.value = S instanceof Error ? S.message : String(S);
    } finally {
      i.value = !1;
    }
  }
  async function b(S) {
    Object.assign(t, S);
    for (const G of Object.keys(a))
      delete a[G];
    for (const G of Object.keys(l))
      delete l[G];
    for (const G of Object.keys(c))
      delete c[G];
    u.value = void 0, await F();
  }
  const g = Z(() => {
    const S = n.value;
    return S ? S.sections.map((G) => ({
      section: G,
      fields: G.fields.filter(
        (pe) => Fs(S, pe, j.value)
      )
    })).filter((G) => G.fields.length > 0) : [];
  }), q = Z(
    () => g.value.flatMap((S) => S.fields)
  ), J = Z(() => n.value ? is(n.value, {
    selections: a,
    file: $.value
  }) : null), ce = Z(() => {
    if (!n.value)
      return;
    const S = pi(n.value, a, $.value);
    if (S != null && S.nextBreakHint)
      return eh(n.value, { selections: a, file: $.value });
  });
  function we(S, G) {
    var Se;
    const pe = (Se = n.value) == null ? void 0 : Se.sections.flatMap((Ne) => Ne.fields).find((Ne) => Ne.id === S);
    (pe == null ? void 0 : pe.type) === "quantity" && typeof G == "number" ? a[S] = oi(pe, G) : (pe == null ? void 0 : pe.type) === "quantities" ? a[S] = Ct(pe, G) : a[S] = G;
  }
  function T(S, G) {
    if (S.type !== "select-many") {
      we(S.id, G);
      return;
    }
    const pe = a[S.id], Se = Array.isArray(pe) ? [...pe] : [], Ne = Se.indexOf(G);
    if (Ne >= 0)
      Se.splice(Ne, 1);
    else {
      if (S.maxSelect !== void 0 && Se.length >= S.maxSelect)
        return;
      Se.push(G);
    }
    a[S.id] = Se;
  }
  function M(S) {
    var Se;
    const G = l[S.id] ?? [], pe = S.type === "file" ? Jr(S) : 1;
    a[S.id] = pe > 1 ? G.map((Ne) => Ne.fileId) : ((Se = G[0]) == null ? void 0 : Se.fileId) ?? "";
  }
  async function X(S, G) {
    var Ne;
    if (delete d[S.id], !t.uploadEndpoint) {
      d[S.id] = "No upload endpoint configured.";
      return;
    }
    const pe = S.type === "file" ? Jr(S) : 1;
    if (pe > 1 && (((Ne = l[S.id]) == null ? void 0 : Ne.length) ?? 0) + (f[S.id] ?? 0) >= pe)
      return;
    o.value = !0, f[S.id] = (f[S.id] ?? 0) + 1;
    const Se = ++m;
    try {
      let ot;
      try {
        ot = await fh(t.uploadEndpoint, G, t.turnstileUrl);
      } catch (We) {
        d[S.id] = We instanceof Error && !(We instanceof TypeError) ? We.message : "";
        return;
      }
      const fn = {
        version: "1.0",
        fileId: ot.fileId,
        source: "uploader",
        status: "ready",
        fileName: ot.fileName,
        fileSizeBytes: ot.fileSizeBytes,
        issues: [],
        ...ot.downloadUrl ? { raw: { downloadUrl: ot.downloadUrl } } : {}
      };
      h.set(fn.fileId, Se), l[S.id] = pe > 1 ? [...l[S.id] ?? [], fn].sort(
        (We, pn) => (h.get(We.fileId) ?? 0) - (h.get(pn.fileId) ?? 0)
      ) : [fn], u.value = fn, M(S);
      const On = t.provider;
      if (On && On.mode === "pull")
        try {
          const We = await mh(On, ot.fileId);
          O(S.id, We), u.value = We;
        } catch (We) {
          console.warn("[print-configurator] file analysis failed:", We);
        }
    } finally {
      f[S.id] = Math.max(0, (f[S.id] ?? 1) - 1), o.value = Object.values(f).some((ot) => ot > 0);
    }
  }
  function oe(S, G) {
    var Se;
    delete d[S.id];
    const pe = l[S.id] ?? [];
    l[S.id] = pe.filter((Ne) => Ne.fileId !== G), M(S), ((Se = u.value) == null ? void 0 : Se.fileId) === G && (u.value = E());
  }
  function me(S) {
    for (const G of Object.keys(l))
      O(G, S);
    for (const [G, pe] of Object.entries(c))
      pe.fileId === S.fileId && (c[G] = S);
    (!u.value || u.value.fileId === S.fileId) && (u.value = S);
  }
  function ye(S, G) {
    if (G === void 0) {
      u.value = S;
      return;
    }
    const pe = c[G];
    if (S) {
      c[G] = S, u.value = S;
      return;
    }
    delete c[G], (!u.value || pe && u.value.fileId === pe.fileId) && (u.value = E());
  }
  return {
    schema: n,
    loading: i,
    error: r,
    unconfigured: s,
    selections: a,
    quantity: K,
    file: $,
    fileAnalyzing: o,
    uploads: l,
    records: c,
    uploading: f,
    uploadErrors: d,
    evalCtx: j,
    visibleSections: g,
    visibleFields: q,
    price: J,
    nextBreak: ce,
    /** The connected data-feed provider config, if any. */
    get provider() {
      return t.provider;
    },
    load: F,
    reload: b,
    select: we,
    toggle: T,
    handleFile: X,
    removeUpload: oe,
    feedMetadata: me,
    setFile: ye,
    fieldFile: x
  };
}
function yh(e, t) {
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
function bh() {
  const e = /* @__PURE__ */ lt(/* @__PURE__ */ new Map()), t = Z(
    () => Array.from(e, ([s, a]) => ({ key: s, message: a.message }))
  ), n = Z(() => e.size > 0);
  function i(s, a) {
    const o = e.get(s);
    o && o.message === a || e.set(s, { message: a });
  }
  function r(s) {
    e.delete(s);
  }
  return { list: t, held: n, add: i, release: r };
}
const rs = 1, qn = "[print-configurator]";
function xh(e) {
  const { host: t, cfg: n, validation: i, holds: r, producers: s } = e;
  function a(T) {
    return T === void 0 ? T : JSON.parse(JSON.stringify(T));
  }
  const o = Z(() => !n.schema.value || !n.price.value ? null : {
    apiVersion: rs,
    selections: a({ ...n.selections }),
    quantity: n.quantity.value,
    price: a(n.price.value),
    file: n.file.value ? a(n.file.value) : null,
    files: l(),
    holds: r.list.value,
    /* "Would submit() pass right now?" — holds block submit, so they
       factor in even though they do not mark any field invalid. */
    valid: i.valid.value && !r.held.value
  });
  function l() {
    const T = {}, M = n.schema.value;
    if (!M)
      return T;
    for (const X of E(M)) {
      const oe = X.type === "file" ? n.fieldFile(X.id) : void 0;
      oe && (T[X.id] = a(oe));
    }
    return T;
  }
  let c = null, u = !1;
  function f(T, M) {
    if (!T)
      return ["selections", "quantity", "price", "file", "files", "holds", "valid"];
    const X = [], oe = /* @__PURE__ */ new Set([
      ...Object.keys(T.selections),
      ...Object.keys(M.selections)
    ]);
    for (const me of oe)
      Ht(T.selections[me], M.selections[me]) || X.push(`selections.${me}`);
    return T.quantity !== M.quantity && X.push("quantity"), Ht(T.price, M.price) || X.push("price"), Ht(T.file, M.file) || X.push("file"), Ht(T.files, M.files) || X.push("files"), Ht(T.holds, M.holds) || X.push("holds"), T.valid !== M.valid && X.push("valid"), X;
  }
  let d = null;
  function h(T) {
    d = (T == null ? void 0 : T.source) ?? "api";
  }
  function m() {
    Nn(() => {
      d = null;
    });
  }
  ct(o, (T) => {
    if (!u || !T)
      return;
    const M = f(c, T), X = d ?? "user";
    c = T, M.length !== 0 && x("change", { ...T, source: X, changed: M });
  });
  function x(T, M) {
    t == null || t.dispatchEvent(
      new CustomEvent(T, { detail: M, bubbles: !0, composed: !0 })
    );
  }
  function $() {
    c = o.value, u = !0, c && x("ready", {
      ...c,
      source: "user"
    });
  }
  function E(T) {
    return T.sections.flatMap((M) => M.fields);
  }
  function O(T) {
    const M = n.schema.value;
    if (!M)
      return null;
    const X = E(M);
    return X.find((oe) => oe.id === T) ?? X.find((oe) => oe.role === T) ?? /* Several quantity fields may exist (one per paper group, say);
    "the quantity field" is the one currently in play. */
    (T === "quantity" ? pi(M, n.selections, n.file.value) : void 0) ?? X.find(
      (oe) => (T === "quantity" || T === "dimensions" || T === "file") && oe.type === T
    ) ?? null;
  }
  function K(T, M) {
    switch (T.type) {
      case "select-one":
        return typeof M == "string" && T.options.some((X) => X.id === M);
      case "select-many":
        return Array.isArray(M) && M.every(
          (X) => typeof X == "string" && T.options.some((oe) => oe.id === X)
        );
      case "quantity":
      case "number":
        return typeof M == "number" && Number.isFinite(M);
      case "quantities": {
        const X = new Set(Is(T).map((oe) => oe.key));
        return typeof M == "object" && M !== null && !Array.isArray(M) && Object.entries(M).every(
          ([oe, me]) => X.has(oe) && typeof me == "number" && Number.isFinite(me) && me >= 0
        );
      }
      case "text":
        return typeof M == "string";
      case "dimensions":
        return typeof M == "object" && M !== null && !Array.isArray(M) && Number.isFinite(M.w) && Number.isFinite(M.h);
      default:
        return !1;
    }
  }
  function j(T, M) {
    const X = n.schema.value, oe = X ? E(X).find((me) => me.id === T) : null;
    return oe ? K(oe, M) ? Ht(n.selections[T], M) ? !1 : (n.select(T, M), i.touch(T), !0) : (console.warn(
      `${qn} setSelection: invalid value for "${T}" (${oe.type})`,
      M
    ), !1) : (console.warn(`${qn} setSelection: unknown field "${T}"`), !1);
  }
  function F(T, M, X) {
    h(X), j(T, M), m();
  }
  function b(T, M) {
    if (typeof T != "object" || T === null) {
      console.warn(`${qn} setSelections: expected an object map`);
      return;
    }
    h(M);
    for (const [X, oe] of Object.entries(T))
      j(X, oe);
    m();
  }
  function g(T) {
    const M = n.schema.value;
    if (!M)
      return null;
    const X = E(M).filter((oe) => oe.type === "file");
    if (T && s.has(T)) {
      const oe = s.fieldOf(T);
      return (oe ? X.find((ye) => ye.id === oe) : void 0) ?? vl(M) ?? null;
    }
    return X.find((oe) => oe.type === "file" && oe.display !== "producer") ?? X[0] ?? null;
  }
  function q(T, M) {
    !T || n.selections[T.id] === M || (n.select(T.id, M), i.touch(T.id));
  }
  function J(T, M) {
    if (T === null) {
      const G = g(M == null ? void 0 : M.source), pe = G ? !wh(n.selections[G.id]) : !1;
      if ((G ? n.fieldFile(G.id) : n.file.value) === void 0 && !pe)
        return;
      h(M), n.setFile(void 0, G == null ? void 0 : G.id), q(G, ""), m();
      return;
    }
    const X = Ps.safeParse({
      version: "1.0",
      source: "custom",
      status: "ready",
      issues: [],
      ...T
    });
    if (!X.success) {
      console.warn(`${qn} setFile: invalid file record`, X.error.issues);
      return;
    }
    const oe = g(X.data.source), me = oe ? n.fieldFile(oe.id) : n.file.value, ye = Ht(me, X.data), S = !oe || n.selections[oe.id] === X.data.fileId;
    ye && S || (h(M), ye || n.setFile(X.data, oe == null ? void 0 : oe.id), q(oe, X.data.fileId), m());
  }
  function ce(T, M) {
    if (typeof T != "string" || T === "") {
      console.warn(`${qn} addHold: a non-empty string key is required`);
      return;
    }
    h(M), r.add(T, M == null ? void 0 : M.message), m();
  }
  function we(T, M) {
    h(M), r.release(T), m();
  }
  return {
    notifyReady: $,
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
      field(T) {
        const M = O(T);
        return M ? a(M) : null;
      },
      setSelection: F,
      setSelections: b,
      setFile: J,
      addHold: ce,
      releaseHold: we,
      /* Producer registry (docs/printapp-integration-v1.md). Not part
         of `state`: a producer is an offer available on the page, not
         an answer the customer has given, and nothing about the
         configuration changes when one appears. */
      registerProducer(T, M) {
        s.register(T, M);
      },
      unregisterProducer(T) {
        s.unregister(T);
      },
      /** Push-mode provider feed (pre-Page-API method, kept). */
      feedMetadata(T) {
        n.feedMetadata(T);
      },
      apiVersion: rs
    }
  };
}
function wh(e) {
  return e === void 0 || e === "";
}
function Ht(e, t) {
  if (e === t)
    return !0;
  if (typeof e != "object" || typeof t != "object" || e === null || t === null || Array.isArray(e) !== Array.isArray(t))
    return !1;
  const n = Object.keys(e), i = Object.keys(t);
  return n.length !== i.length ? !1 : n.every(
    (r) => Ht(
      e[r],
      t[r]
    )
  );
}
const Ua = "[print-configurator]", ss = 10;
function _h(e) {
  const t = /* @__PURE__ */ lt(/* @__PURE__ */ new Map()), n = Z(
    () => Array.from(t.values()).sort((c, u) => c.order - u.order)
  );
  function i(c, u) {
    if (typeof c != "string" || c === "") {
      console.warn(`${Ua} registerProducer: a non-empty string id is required`);
      return;
    }
    const f = u == null ? void 0 : u.label;
    if (typeof f != "string" || f === "") {
      console.warn(`${Ua} registerProducer: "${c}" needs a label`);
      return;
    }
    t.set(c, {
      id: c,
      label: f,
      description: u.description,
      /* Default behind the built-in upload: the merchant's own file is
         the expected answer, an alternative producer is the offer. */
      order: Number.isFinite(u.order) ? Number(u.order) : ss + 10,
      fieldId: u.fieldId
    });
  }
  function r(c) {
    t.delete(c);
  }
  function s(c) {
    return t.has(c);
  }
  function a(c) {
    var u;
    return (u = t.get(c)) == null ? void 0 : u.fieldId;
  }
  function o(c, u) {
    return n.value.filter(
      (f) => f.fieldId ? f.fieldId === c : u
    );
  }
  function l(c, u) {
    var f;
    t.has(c) && ((f = e.host) == null || f.dispatchEvent(
      new CustomEvent("producer", {
        detail: {
          apiVersion: rs,
          producer: c,
          fieldId: u,
          source: "user"
        },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  return { list: n, register: i, unregister: r, has: s, fieldOf: a, forField: o, activate: l };
}
function kh(e, t, n) {
  const i = Z(() => {
    const o = e.schema.value, l = t(), c = {};
    if (!o || !l)
      return c;
    for (const u of o.sections)
      for (const f of u.fields) {
        const d = $f(f, l);
        d !== void 0 && (c[f.id] = d);
      }
    return c;
  }), r = Z(() => new Set(Object.keys(i.value))), s = Z(() => {
    const o = r.value;
    return o.size === 0 ? e.visibleSections.value : e.visibleSections.value.map((l) => ({
      section: l.section,
      fields: l.fields.filter((c) => !o.has(c.id))
    })).filter((l) => l.fields.length > 0);
  });
  function a() {
    const o = {};
    for (const [l, c] of Object.entries(i.value))
      e.selections[l] !== c && (o[l] = c);
    Object.keys(o).length > 0 && n(o);
  }
  return ct(i, () => {
    e.schema.value && a();
  }), { boundIds: r, shownSections: s, apply: a };
}
function Sh(e) {
  let t = e;
  if (typeof t == "string") {
    if (t.trim() === "")
      return null;
    try {
      t = JSON.parse(t);
    } catch {
      return null;
    }
  }
  if (typeof t != "object" || t === null || Array.isArray(t))
    return null;
  const n = {};
  for (const [i, r] of Object.entries(t))
    typeof r == "string" && (n[i] = r);
  return Object.keys(n).length > 0 ? n : null;
}
const $h = /* @__PURE__ */ new Set([
  "left",
  "right",
  "left_space",
  "right_space"
]);
function Th(e) {
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
  return typeof n.position == "string" && $h.has(n.position) && (i.position = n.position), typeof n.decimals == "number" && Number.isInteger(n.decimals) && n.decimals >= 0 && n.decimals <= 8 && (i.decimals = n.decimals), typeof n.thousandSeparator == "string" && (i.thousandSeparator = n.thousandSeparator), typeof n.decimalSeparator == "string" && (i.decimalSeparator = n.decimalSeparator), i;
}
function qs(e) {
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
function Ch(e, t, n, i) {
  if (i)
    return Ah(e, i);
  try {
    return new Intl.NumberFormat(qs(n) ?? "en", {
      style: "currency",
      currency: t
    }).format(e);
  } catch {
    return `${t} ${e.toFixed(2)}`;
  }
}
function Ah(e, t) {
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
function Va(e) {
  var t, n;
  return ((n = (t = qs(e ?? void 0)) == null ? void 0 : t.split("-")[0]) == null ? void 0 : n.toLowerCase()) || void 0;
}
const zl = {
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
  /** Accessible name of an ⓘ tooltip button; {label} is the field or option. */
  "tip.label": "More about {label}",
  "tip.labelBare": "More information",
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
  /* A multi-file upload field: its limit under the dropzone, the zone's
     title once files are in, and what a drop past the limit hears. */
  "upload.limit": "Up to {max} files",
  "upload.addMore": "Drop more files or click to add",
  "upload.tooMany": "You can add up to {max} files.",
  /** The upload itself failed; {reason} is the server's sentence, or empty. */
  "upload.failed": "This file couldn't be uploaded. {reason}",
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
}, Ih = {
  base: "summary.basePrice",
  "setup-fee": "summary.setupFee",
  "adjustment:minimum": "summary.minimumAdjustment"
};
function Eh(e, t) {
  const n = Ih[t.sourceId];
  return n ? e(n) : t.label;
}
function Nh(e, t) {
  return t ? e.replace(
    /\{(\w+)\}/g,
    (n, i) => i in t ? String(t[i]) : n
  ) : e;
}
function Dl(e) {
  const t = () => typeof e == "function" ? e() : e;
  return {
    t(n, i) {
      var a;
      const r = (a = t()) == null ? void 0 : a[n], s = typeof r == "string" && r !== "" ? r : zl[n];
      return Nh(s, i);
    }
  };
}
function Oh(e) {
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
    i in zl && typeof r == "string" && (n[i] = r);
  return n;
}
const Ls = Dl(), Ul = Symbol("print-configurator-strings");
function at() {
  return Yt(Ul, Ls);
}
function Ph(e, t, n, i = Ls.t) {
  const r = /* @__PURE__ */ lt(/* @__PURE__ */ new Set()), s = { value: !1 }, a = Z(() => {
    const d = [];
    for (const h of e.value) {
      const m = Mh(h, t, i);
      m && d.push({ fieldId: h.id, message: m });
    }
    return d;
  }), o = Z(
    () => {
      var d;
      return a.value.length === 0 && !(((d = n.value) == null ? void 0 : d.unavailable) ?? !1);
    }
  );
  function l(d) {
    var h;
    if (!(!r.has(d) && !s.value))
      return (h = a.value.find((m) => m.fieldId === d)) == null ? void 0 : h.message;
  }
  function c(d) {
    r.add(d);
  }
  function u() {
    s.value = !0;
    for (const d of e.value)
      r.add(d.id);
    return a.value;
  }
  function f() {
    r.clear(), s.value = !1;
  }
  return { issues: a, valid: o, errorFor: l, touch: c, touchAll: u, reset: f };
}
function Mh(e, t, n = Ls.t) {
  const i = t[e.id];
  if (e.type === "quantities") {
    const s = js(Ct(e, i));
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
  if (e.type === "dimensions" && pt(i)) {
    const s = Ba(i.unit) / Ba(e.defaultUnit), a = i.w * s, o = i.h * s;
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
function Ba(e) {
  switch (e) {
    case "mm":
      return 1;
    case "cm":
      return 10;
    case "in":
      return 25.4;
  }
}
function Rh(e, t, n) {
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
function vn(e, t) {
  const n = 10 ** t;
  return Math.round((e + Math.sign(e) * Number.EPSILON * Math.abs(e)) * n) / n;
}
function Fh(e, t, n) {
  const i = _l(t), r = n.rate / 100;
  if (n.mode === "exclusive") {
    const o = vn(e, i), l = vn(o * r, i);
    return { net: o, tax: l, gross: vn(o + l, i) };
  }
  const s = vn(e, i), a = vn(s - s / (1 + r), i);
  return { net: vn(s - a, i), tax: a, gross: s };
}
function Ha(e, t) {
  try {
    return new Intl.NumberFormat(qs(t) ?? "en", {
      maximumFractionDigits: 3
    }).format(e);
  } catch {
    return String(e);
  }
}
function dr(e, t) {
  var i;
  const n = (i = e == null ? void 0 : e.closest) == null ? void 0 : i.call(e, '[role="radiogroup"], [role="group"]');
  n && Nn(() => {
    for (const r of n.querySelectorAll("[data-choice-id]"))
      if (r.dataset.choiceId === t) {
        r.focus();
        return;
      }
  });
}
function fr(e, t) {
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
function zs(e) {
  const t = /* @__PURE__ */ Re(null);
  return {
    tipId: (n) => `pc-tip-${e()}-${n}`,
    focused: t,
    onFocus(n, i) {
      const r = n.target;
      let s = !0;
      try {
        s = !!(r != null && r.matches(":focus-visible"));
      } catch {
      }
      t.value = s ? i : null;
    },
    onBlur(n) {
      t.value === n && (t.value = null);
    }
  };
}
const jh = /\*\*\*([^\s*](?:.*?[^\s*])?)\*\*\*|\*\*([^\s*](?:.*?[^\s*])?)\*\*|([*_])([^\s*_](?:.*?[^\s*_])?)\3/g, Za = /[\p{L}\p{N}_*]/u;
function qh(e, t, n) {
  const i = e.charAt(t - 1), r = e.charAt(n);
  return i !== "" && Za.test(i) || r !== "" && Za.test(r);
}
function Wa(e, t, n) {
  if (t === "")
    return;
  const i = e[e.length - 1];
  if (i && !!i.bold == !!n.bold && !!i.italic == !!n.italic) {
    i.text += t;
    return;
  }
  e.push({ text: t, ...n });
}
function _i(e, t, n) {
  const i = new RegExp(jh.source, "g");
  let r = 0, s;
  for (; (s = i.exec(e)) !== null; ) {
    const a = s.index, o = a + s[0].length;
    if (s[4] !== void 0 && qh(e, a, o)) {
      i.lastIndex = a + 1;
      continue;
    }
    Wa(n, e.slice(r, a), t), s[1] !== void 0 ? _i(s[1], { ...t, bold: !0, italic: !0 }, n) : s[2] !== void 0 ? _i(s[2], { ...t, bold: !0 }, n) : _i(s[4] ?? "", { ...t, italic: !0 }, n), r = o;
  }
  Wa(n, e.slice(r), t);
}
function Lh(e) {
  const t = {};
  return e.bold && (t.bold = !0), e.italic && (t.italic = !0), t;
}
function zh(e) {
  return e ? e.replace(/\r\n?/g, `
`).split(`
`).map((t) => {
    const n = [];
    return _i(t, {}, n), n.map((i) => ({ text: i.text, ...Lh(i) }));
  }) : [];
}
function Dh(e) {
  let t = e.text;
  return e.italic && (t = Ni("em", t)), e.bold && (t = Ni("strong", t)), t;
}
const hi = /* @__PURE__ */ Pe({
  name: "FormattedText",
  props: {
    text: { type: String, default: void 0 },
    tag: { type: String, default: "span" }
  },
  setup(e) {
    return () => {
      const t = [];
      return zh(e.text).forEach((n, i) => {
        i > 0 && t.push(Ni("br")), t.push(...n.map(Dh));
      }), Ni(e.tag, t);
    };
  }
}), Uh = {
  class: "tip",
  part: "tooltip"
}, Vh = ["tabindex", "aria-hidden", "aria-label", "aria-describedby"], Bh = ["id"], Ka = 8, bi = 8, Ft = /* @__PURE__ */ Pe({
  __name: "InfoTip",
  props: {
    text: { type: String },
    id: { type: String },
    label: { default: void 0, type: String },
    focusable: { type: Boolean, default: !1 },
    open: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Re(!1), i = /* @__PURE__ */ Re(null), r = /* @__PURE__ */ Re(null), s = /* @__PURE__ */ Re({
      top: 0,
      left: 0,
      below: !1
    });
    let a = "";
    const o = typeof HTMLElement < "u" && "showPopover" in HTMLElement.prototype;
    function l() {
      const b = i.value, g = r.value;
      if (!b || !g)
        return;
      const q = b.getBoundingClientRect(), J = g.offsetWidth, ce = g.offsetHeight, we = document.documentElement.clientWidth || window.innerWidth, T = Math.min(
        Math.max(bi, q.left + q.width / 2 - J / 2),
        Math.max(bi, we - J - bi)
      ), M = q.top - Ka - ce, X = M < bi;
      s.value = { top: X ? q.bottom + Ka : M, left: T, below: X };
    }
    function c(b) {
      const g = b.composedPath();
      i.value && g.includes(i.value) || r.value && g.includes(r.value) || h();
    }
    function u(b) {
      b.key === "Escape" && h();
    }
    function f(b) {
      const g = b ? "addEventListener" : "removeEventListener";
      document[g]("pointerdown", c, !0), document[g]("keydown", u, !0), window[g]("scroll", h, !0), window[g]("resize", h);
    }
    async function d() {
      if (n.value)
        return;
      n.value = !0, f(!0), await Nn();
      const b = r.value;
      if (o && b && !b.matches(":popover-open"))
        try {
          b.showPopover();
        } catch {
        }
      l();
    }
    function h() {
      if (!n.value)
        return;
      n.value = !1, f(!1);
      const b = r.value;
      if (o && (b != null && b.matches(":popover-open")))
        try {
          b.hidePopover();
        } catch {
        }
    }
    function m(b) {
      a = b.pointerType;
    }
    function x(b) {
      b.pointerType === "mouse" && d();
    }
    function $(b) {
      b.pointerType === "mouse" && !t.open && h();
    }
    function E(b) {
      b.stopPropagation(), a === "mouse" ? d() : n.value ? h() : d(), a = "";
    }
    function O(b) {
      const g = b.target;
      try {
        return !!(g != null && g.matches(":focus-visible"));
      } catch {
        return !0;
      }
    }
    function K(b) {
      t.focusable && O(b) && d();
    }
    function j() {
      t.focusable && h();
    }
    ct(
      () => t.open,
      (b) => b ? void d() : h()
    ), ys(() => {
      n.value && f(!1);
    });
    const F = Z(
      () => n.value ? { top: `${s.value.top}px`, left: `${s.value.left}px` } : void 0
    );
    return (b, g) => (y(), k("span", Uh, [
      A("button", {
        ref_key: "icon",
        ref: i,
        type: "button",
        class: "tip-icon",
        part: "tooltip-icon",
        tabindex: e.focusable ? 0 : -1,
        "aria-hidden": e.focusable ? void 0 : "true",
        "aria-label": e.focusable ? e.label : void 0,
        "aria-describedby": e.focusable ? e.id : void 0,
        onPointerdown: m,
        onPointerenter: x,
        onPointerleave: $,
        onClick: E,
        onFocus: K,
        onBlur: j
      }, [...g[0] || (g[0] = [
        A("svg", {
          viewBox: "0 0 16 16",
          width: "16",
          height: "16",
          "aria-hidden": "true",
          focusable: "false"
        }, [
          A("circle", {
            cx: "8",
            cy: "8",
            r: "7",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5"
          }),
          A("circle", {
            cx: "8",
            cy: "4.75",
            r: "1",
            fill: "currentColor"
          }),
          A("path", {
            d: "M8 7.25v4.75",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linecap": "round"
          })
        ], -1)
      ])], 40, Vh),
      A("span", {
        id: e.id,
        ref_key: "bubble",
        ref: r,
        role: "tooltip",
        class: De(["tip-bubble", { open: n.value, below: s.value.below }]),
        part: "tooltip-bubble",
        popover: "manual",
        style: an(F.value)
      }, [
        Ze(_(hi), { text: e.text }, null, 8, ["text"])
      ], 14, Bh)
    ]));
  }
}), Hh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Zh = ["part", "data-choice-id", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "aria-describedby", "tabindex", "onClick", "onKeydown", "onFocus", "onBlur"], Wh = {
  key: 0,
  class: "check",
  "aria-hidden": "true"
}, Kh = ["src"], Gh = { class: "card-label" }, Ga = /* @__PURE__ */ Pe({
  __name: "ChoiceCards",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = fr(
      () => n.field.options,
      () => n.selectedIds
    ), a = zs(() => n.field.id);
    function o(u) {
      return n.selectedIds.includes(u);
    }
    function l(u) {
      return n.unavailableIds.includes(u);
    }
    function c(u, f) {
      if (r)
        return;
      const d = s.onKeydown(u, f);
      d && !l(d) && (i("pick", d), dr(u.currentTarget, d));
    }
    return (u, f) => (y(), k("div", {
      class: De(["grid", e.field.display]),
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (y(!0), k(le, null, Me(e.field.options, (d, h) => (y(), k("span", {
        key: d.id,
        class: "choice-cell"
      }, [
        A("button", {
          type: "button",
          class: De(["card", {
            active: o(d.id),
            unavailable: l(d.id),
            "has-tip": !!d.tooltip
          }]),
          part: o(d.id) ? "choice card choice-selected" : "choice card",
          "data-choice-id": d.id,
          role: r ? void 0 : "radio",
          "aria-checked": r ? void 0 : o(d.id),
          "aria-pressed": r ? o(d.id) : void 0,
          "aria-label": d.label,
          "aria-disabled": l(d.id) || void 0,
          "aria-describedby": d.tooltip ? _(a).tipId(d.id) : void 0,
          tabindex: r ? 0 : _(s).tabindexFor(d, h),
          onClick: (m) => !l(d.id) && i("pick", d.id),
          onKeydown: (m) => c(m, h),
          onFocus: (m) => _(a).onFocus(m, d.id),
          onBlur: (m) => _(a).onBlur(d.id)
        }, [
          o(d.id) ? (y(), k("span", Wh, "✓")) : te("", !0),
          d.image ? (y(), k("img", {
            key: 1,
            src: d.image,
            alt: ""
          }, null, 8, Kh)) : te("", !0),
          A("span", Gh, D(d.label), 1),
          d.description ? (y(), xe(_(hi), {
            key: 2,
            class: "card-description",
            text: d.description
          }, null, 8, ["text"])) : te("", !0)
        ], 42, Zh),
        d.tooltip ? (y(), xe(Ft, {
          key: 0,
          id: _(a).tipId(d.id),
          text: d.tooltip,
          open: _(a).focused.value === d.id
        }, null, 8, ["id", "text", "open"])) : te("", !0)
      ]))), 128))
    ], 10, Hh));
  }
}), Yh = { class: "dropdown-row" }, Qh = ["id", "value", "aria-labelledby", "aria-describedby", "aria-invalid"], Jh = {
  key: 0,
  value: "",
  disabled: ""
}, Xh = ["value", "disabled"], em = /* @__PURE__ */ Pe({
  __name: "ChoiceDropdown",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = at(), s = Z(
      () => n.field.options.find((o) => o.id === n.selectedIds[0])
    );
    function a(o) {
      i("pick", o.target.value);
    }
    return (o, l) => {
      var c;
      return y(), k("div", Yh, [
        A("select", {
          id: `pc-control-${e.field.id}`,
          class: "dropdown",
          part: "dropdown",
          value: e.selectedIds[0] ?? "",
          "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: a
        }, [
          e.selectedIds.length ? te("", !0) : (y(), k("option", Jh, D(e.field.label ? _(r)("choice.placeholder", { label: e.field.label.toLowerCase() }) : _(r)("choice.placeholderBare")), 1)),
          (y(!0), k(le, null, Me(e.field.options, (u) => (y(), k("option", {
            key: u.id,
            value: u.id,
            disabled: n.unavailableIds.includes(u.id)
          }, D(u.label), 9, Xh))), 128))
        ], 40, Qh),
        (c = s.value) != null && c.tooltip ? (y(), xe(Ft, {
          key: 0,
          id: `pc-tip-${e.field.id}-${s.value.id}`,
          text: s.value.tooltip,
          label: _(r)("tip.label", { label: s.value.label }),
          focusable: ""
        }, null, 8, ["id", "text", "label"])) : te("", !0)
      ]);
    };
  }
}), tm = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], nm = ["part", "data-choice-id", "role", "aria-checked", "aria-pressed", "aria-disabled", "aria-describedby", "tabindex", "onClick", "onKeydown", "onFocus", "onBlur"], im = { key: 0 }, rm = { class: "choice-body" }, sm = { class: "choice-title" }, am = /* @__PURE__ */ Pe({
  __name: "ChoiceList",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = fr(
      () => n.field.options,
      () => n.selectedIds
    ), a = zs(() => n.field.id);
    function o(u) {
      return n.selectedIds.includes(u);
    }
    function l(u) {
      return n.unavailableIds.includes(u);
    }
    function c(u, f) {
      if (r)
        return;
      const d = s.onKeydown(u, f);
      d && !l(d) && (i("pick", d), dr(u.currentTarget, d));
    }
    return (u, f) => (y(), k("div", {
      class: "choice-list",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (y(!0), k(le, null, Me(e.field.options, (d, h) => (y(), k("span", {
        key: d.id,
        class: "choice-cell"
      }, [
        A("button", {
          type: "button",
          class: De(["choice-row", {
            active: o(d.id),
            unavailable: l(d.id),
            "has-tip": !!d.tooltip
          }]),
          part: o(d.id) ? "choice choice-selected" : "choice",
          "data-choice-id": d.id,
          role: r ? void 0 : "radio",
          "aria-checked": r ? void 0 : o(d.id),
          "aria-pressed": r ? o(d.id) : void 0,
          "aria-disabled": l(d.id) || void 0,
          "aria-describedby": d.tooltip ? _(a).tipId(d.id) : void 0,
          tabindex: r ? 0 : _(s).tabindexFor(d, h),
          onClick: (m) => !l(d.id) && i("pick", d.id),
          onKeydown: (m) => c(m, h),
          onFocus: (m) => _(a).onFocus(m, d.id),
          onBlur: (m) => _(a).onBlur(d.id)
        }, [
          A("span", {
            class: De(["choice-indicator", { multi: r }]),
            "aria-hidden": "true"
          }, [
            o(d.id) ? (y(), k("span", im, "✓")) : te("", !0)
          ], 2),
          A("span", rm, [
            A("span", sm, D(d.label), 1),
            d.description ? (y(), xe(_(hi), {
              key: 0,
              class: "choice-description",
              text: d.description
            }, null, 8, ["text"])) : te("", !0)
          ])
        ], 42, nm),
        d.tooltip ? (y(), xe(Ft, {
          key: 0,
          id: _(a).tipId(d.id),
          text: d.tooltip,
          open: _(a).focused.value === d.id
        }, null, 8, ["id", "text", "open"])) : te("", !0)
      ]))), 128))
    ], 8, tm));
  }
}), om = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], lm = ["part", "data-choice-id", "role", "aria-checked", "aria-pressed", "aria-disabled", "aria-describedby", "tabindex", "onClick", "onKeydown", "onFocus", "onBlur"], cm = {
  key: 0,
  "aria-hidden": "true"
}, um = /* @__PURE__ */ Pe({
  __name: "ChoicePills",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = fr(
      () => n.field.options,
      () => n.selectedIds
    ), a = zs(() => n.field.id);
    function o(u) {
      return n.selectedIds.includes(u);
    }
    function l(u) {
      return n.unavailableIds.includes(u);
    }
    function c(u, f) {
      if (r)
        return;
      const d = s.onKeydown(u, f);
      d && !l(d) && (i("pick", d), dr(u.currentTarget, d));
    }
    return (u, f) => (y(), k("div", {
      class: "pills",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (y(!0), k(le, null, Me(e.field.options, (d, h) => (y(), k("span", {
        key: d.id,
        class: "choice-cell"
      }, [
        A("button", {
          type: "button",
          class: De(["pill", {
            active: o(d.id),
            unavailable: l(d.id),
            "has-tip": !!d.tooltip
          }]),
          part: o(d.id) ? "choice pill choice-selected" : "choice pill",
          "data-choice-id": d.id,
          role: r ? void 0 : "radio",
          "aria-checked": r ? void 0 : o(d.id),
          "aria-pressed": r ? o(d.id) : void 0,
          "aria-disabled": l(d.id) || void 0,
          "aria-describedby": d.tooltip ? _(a).tipId(d.id) : void 0,
          tabindex: r ? 0 : _(s).tabindexFor(d, h),
          onClick: (m) => !l(d.id) && i("pick", d.id),
          onKeydown: (m) => c(m, h),
          onFocus: (m) => _(a).onFocus(m, d.id),
          onBlur: (m) => _(a).onBlur(d.id)
        }, [
          ws(D(d.label) + " ", 1),
          o(d.id) ? (y(), k("span", cm, "✓")) : te("", !0)
        ], 42, lm),
        d.tooltip ? (y(), xe(Ft, {
          key: 0,
          id: _(a).tipId(d.id),
          text: d.tooltip,
          open: _(a).focused.value === d.id
        }, null, 8, ["id", "text", "open"])) : te("", !0)
      ]))), 128))
    ], 8, om));
  }
}), dm = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], fm = ["part", "data-choice-id", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], pm = {
  key: 0,
  class: "swatch-check",
  "aria-hidden": "true"
}, hm = {
  key: 0,
  class: "swatch-selected-label"
}, mm = { "aria-hidden": "true" }, vm = /* @__PURE__ */ Pe({
  __name: "ChoiceSwatches",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = fr(
      () => n.field.options,
      () => n.selectedIds
    );
    function a(f) {
      return n.selectedIds.includes(f);
    }
    function o(f) {
      return n.unavailableIds.includes(f);
    }
    const { t: l } = at(), c = Z(
      () => n.field.options.filter((f) => n.selectedIds.includes(f.id))
    );
    function u(f, d) {
      if (r)
        return;
      const h = s.onKeydown(f, d);
      h && !o(h) && (i("pick", h), dr(f.currentTarget, h));
    }
    return (f, d) => (y(), k("div", null, [
      A("div", {
        class: "swatches",
        role: r ? "group" : "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0
      }, [
        (y(!0), k(le, null, Me(e.field.options, (h, m) => (y(), k("button", {
          key: h.id,
          type: "button",
          class: De(["swatch", { active: a(h.id), unavailable: o(h.id) }]),
          part: a(h.id) ? "choice swatch choice-selected" : "choice swatch",
          style: an({ background: h.color }),
          "data-choice-id": h.id,
          role: r ? void 0 : "radio",
          "aria-checked": r ? void 0 : a(h.id),
          "aria-pressed": r ? a(h.id) : void 0,
          "aria-label": h.label,
          "aria-disabled": o(h.id) || void 0,
          tabindex: r ? 0 : _(s).tabindexFor(h, m),
          onClick: (x) => !o(h.id) && i("pick", h.id),
          onKeydown: (x) => u(x, m)
        }, [
          a(h.id) ? (y(), k("span", pm, "✓")) : te("", !0)
        ], 46, fm))), 128))
      ], 8, dm),
      c.value.length ? (y(), k("p", hm, [
        (y(!0), k(le, null, Me(c.value, (h, m) => (y(), k(le, {
          key: h.id
        }, [
          A("span", mm, D(m > 0 ? ", " : "") + D(h.label), 1),
          h.tooltip ? (y(), xe(Ft, {
            key: 0,
            id: `pc-tip-${e.field.id}-${h.id}`,
            text: h.tooltip,
            label: _(l)("tip.label", { label: h.label }),
            focusable: ""
          }, null, 8, ["id", "text", "label"])) : te("", !0)
        ], 64))), 128))
      ])) : te("", !0)
    ]));
  }
}), Ya = {
  cards: Ga,
  grid: Ga,
  swatches: vm,
  pills: um,
  dropdown: em,
  list: am
}, pr = Symbol("print-configurator"), gm = ["data-field-id", "data-type"], ym = {
  key: 0,
  class: "field-head"
}, bm = ["id"], xm = {
  key: 0,
  class: "req",
  "aria-hidden": "true"
}, wm = ["id"], _m = /* @__PURE__ */ Pe({
  __name: "FieldShell",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e, { expose: t }) {
    const n = e, { t: i } = at();
    return t({ fieldId: n.field.id }), (r, s) => (y(), k("div", {
      class: "field",
      part: "field",
      "data-field-id": e.field.id,
      "data-type": e.field.type
    }, [
      e.field.label || e.field.tooltip ? (y(), k("div", ym, [
        e.field.label ? (y(), k("span", {
          key: 0,
          id: `pc-label-${e.field.id}`,
          class: "field-label",
          part: "field-label"
        }, [
          ws(D(e.field.label) + " ", 1),
          e.field.required ? (y(), k("span", xm, "*")) : te("", !0)
        ], 8, bm)) : te("", !0),
        e.field.tooltip ? (y(), xe(Ft, {
          key: 1,
          id: `pc-tip-${e.field.id}`,
          text: e.field.tooltip,
          label: e.field.label ? _(i)("tip.label", { label: e.field.label }) : _(i)("tip.labelBare"),
          focusable: ""
        }, null, 8, ["id", "text", "label"])) : te("", !0)
      ])) : te("", !0),
      e.field.helpText ? (y(), xe(_(hi), {
        key: 1,
        tag: "p",
        class: "help",
        part: "field-help",
        text: e.field.helpText
      }, null, 8, ["text"])) : te("", !0),
      ru(r.$slots, "default"),
      e.error ? (y(), k("p", {
        key: 2,
        id: `pc-error-${e.field.id}`,
        class: "field-error",
        part: "field-error",
        role: "status"
      }, D(e.error), 9, wm)) : te("", !0)
    ], 8, gm));
  }
}), km = ["aria-labelledby"], Sm = ["part", "aria-checked", "onClick"], $m = ["value", "aria-label"], Tm = ["value"], Cm = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Am = {
  key: 3,
  class: "stepper",
  part: "stepper"
}, Im = ["aria-label", "disabled"], Em = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Nm = ["aria-label", "disabled"], Om = /* @__PURE__ */ Pe({
  __name: "QuantityInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = Z(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue
    ), { t: s } = at(), a = Z(() => n.field.label ?? s("quantity.label"));
    function o(d) {
      i("select", oi(n.field, d)), i("touch");
    }
    function l(d) {
      o(r.value + d * n.field.step);
    }
    function c(d) {
      const h = d.target.value;
      if (h === "")
        return;
      const m = Number(h);
      oi(n.field, m) === m && o(m);
    }
    function u(d) {
      const h = d.target;
      o(h.value === "" ? n.field.defaultValue : Number(h.value)), h.value = String(r.value);
    }
    function f(d) {
      u(d);
    }
    return (d, h) => {
      var m, x;
      return e.field.display === "pills" && ((m = e.field.presets) != null && m.length) ? (y(), k("div", {
        key: 0,
        class: "pills",
        role: "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0
      }, [
        (y(!0), k(le, null, Me(e.field.presets, ($) => (y(), k("button", {
          key: $,
          type: "button",
          class: De(["pill", { active: r.value === $ }]),
          part: r.value === $ ? "choice pill choice-selected" : "choice pill",
          role: "radio",
          "aria-checked": r.value === $,
          onClick: (E) => o($)
        }, D($), 11, Sm))), 128))
      ], 8, km)) : e.field.display === "dropdown" && ((x = e.field.presets) != null && x.length) ? (y(), k("select", {
        key: 1,
        class: "dropdown",
        part: "dropdown",
        value: String(r.value),
        "aria-label": a.value,
        onChange: h[0] || (h[0] = ($) => o(Number($.target.value)))
      }, [
        (y(!0), k(le, null, Me(e.field.presets, ($) => (y(), k("option", {
          key: $,
          value: String($)
        }, D($), 9, Tm))), 128))
      ], 40, $m)) : e.field.display === "input" ? (y(), k("input", {
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
        onKeydown: Oi(Cn(f, ["prevent"]), ["enter"])
      }, null, 40, Cm)) : (y(), k("div", Am, [
        A("button", {
          type: "button",
          part: "stepper-decrement",
          "aria-label": _(s)("stepper.decrease", { label: a.value.toLowerCase() }),
          disabled: r.value <= e.field.min,
          onClick: h[1] || (h[1] = ($) => l(-1))
        }, " − ", 8, Im),
        A("input", {
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
          onKeydown: Oi(Cn(f, ["prevent"]), ["enter"])
        }, null, 40, Em),
        A("button", {
          type: "button",
          part: "stepper-increment",
          "aria-label": _(s)("stepper.increase", { label: a.value.toLowerCase() }),
          disabled: e.field.max !== void 0 && r.value >= e.field.max,
          onClick: h[2] || (h[2] = ($) => l(1))
        }, " + ", 8, Nm)
      ]));
    };
  }
}), Pm = ["aria-labelledby", "aria-describedby"], Mm = {
  class: "quantities-table",
  part: "quantities-table"
}, Rm = {
  scope: "col",
  class: "quantities-corner",
  part: "quantities-corner"
}, Fm = { class: "quantities-label" }, jm = {
  scope: "row",
  class: "quantities-rowhead"
}, qm = { class: "quantities-name" }, Lm = ["src"], zm = {
  class: "quantities-label",
  part: "quantities-label"
}, Dm = ["part", "value", "max", "step", "disabled", "aria-label", "onInput", "onBlur", "onKeydown"], Um = ["aria-labelledby", "aria-describedby"], Vm = ["part"], Bm = { class: "quantities-name" }, Hm = ["src"], Zm = {
  class: "quantities-label",
  part: "quantities-label"
}, Wm = {
  class: "stepper",
  part: "stepper"
}, Km = ["aria-label", "disabled", "onClick"], Gm = ["value", "max", "step", "disabled", "aria-label", "onInput", "onBlur", "onKeydown"], Ym = ["aria-label", "disabled", "onClick"], Qm = {
  class: "quantities-total",
  part: "quantities-total",
  "aria-live": "polite"
}, Jm = /* @__PURE__ */ Pe({
  __name: "QuantitiesInput",
  props: {
    field: { type: null },
    value: { type: null },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = at(), s = Z(() => Ct(n.field, n.value)), a = Z(() => js(s.value)), o = Z(() => {
      var b;
      const F = (b = n.field.unit) == null ? void 0 : b.trim();
      return F ? `${a.value} ${F}` : String(a.value);
    });
    function l(F) {
      return s.value[F] ?? 0;
    }
    function c(F) {
      return n.unavailableIds.includes(F);
    }
    const u = Z(() => n.field.rows ?? []);
    function f(F, b) {
      return c(F.id) || c(b.id);
    }
    function d(F, b) {
      return Zi(b.id, F.id);
    }
    function h(F, b) {
      const g = l(d(F, b));
      return g > 0 ? String(g) : "";
    }
    function m(F) {
      const b = l(F);
      return b === 0 ? n.field.min : b + n.field.step;
    }
    function x(F) {
      if (c(F))
        return !1;
      const b = m(F), { max: g, maxTotal: q } = n.field;
      return g !== void 0 && b > g ? !1 : q === void 0 || a.value - l(F) + b <= q;
    }
    function $(F, b) {
      const g = { ...s.value, [F]: b };
      i("select", Ct(n.field, g)), i("touch");
    }
    function E(F, b) {
      if (b === 1) {
        $(F, m(F));
        return;
      }
      const g = l(F) - n.field.step;
      $(F, g < n.field.min ? 0 : g);
    }
    function O(F, b) {
      const g = b.target.value;
      if (g === "")
        return;
      const q = Number(g);
      (Ct(n.field, { [F]: q })[F] ?? 0) === q && $(F, q);
    }
    function K(F, b) {
      const g = b.target;
      $(F, g.value === "" ? 0 : Number(g.value)), g.value = String(l(F));
    }
    function j(F, b) {
      const g = b.target;
      $(F, g.value === "" ? 0 : Number(g.value));
      const q = l(F);
      g.value = q > 0 ? String(q) : "";
    }
    return (F, b) => (y(), k(le, null, [
      u.value.length ? (y(), k("div", {
        key: 0,
        class: "quantities quantities-table-wrap",
        part: "quantities",
        role: "group",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0
      }, [
        A("table", Mm, [
          A("thead", null, [
            A("tr", null, [
              A("th", Rm, D(e.field.rowsLabel), 1),
              (y(!0), k(le, null, Me(e.field.options, (g) => (y(), k("th", {
                key: g.id,
                scope: "col",
                class: De(["quantities-col", { off: c(g.id) }]),
                part: "quantities-column"
              }, [
                A("span", Fm, D(g.label), 1),
                g.tooltip ? (y(), xe(Ft, {
                  key: 0,
                  id: `pc-tip-${e.field.id}-${g.id}`,
                  text: g.tooltip,
                  label: _(r)("tip.label", { label: g.label }),
                  focusable: ""
                }, null, 8, ["id", "text", "label"])) : te("", !0)
              ], 2))), 128))
            ])
          ]),
          A("tbody", null, [
            (y(!0), k(le, null, Me(u.value, (g) => (y(), k("tr", {
              key: g.id,
              class: De(["quantities-row", { off: c(g.id) }]),
              part: "quantities-row"
            }, [
              A("th", jm, [
                A("span", qm, [
                  g.color ? (y(), k("span", {
                    key: 0,
                    class: "quantities-swatch",
                    style: an({ background: g.color }),
                    "aria-hidden": "true"
                  }, null, 4)) : g.image ? (y(), k("img", {
                    key: 1,
                    class: "quantities-image",
                    src: g.image,
                    alt: ""
                  }, null, 8, Lm)) : te("", !0),
                  A("span", zm, D(g.label), 1),
                  g.tooltip ? (y(), xe(Ft, {
                    key: 2,
                    id: `pc-tip-${e.field.id}-${g.id}`,
                    text: g.tooltip,
                    label: _(r)("tip.label", { label: g.label }),
                    focusable: ""
                  }, null, 8, ["id", "text", "label"])) : te("", !0)
                ])
              ]),
              (y(!0), k(le, null, Me(e.field.options, (q) => (y(), k("td", {
                key: q.id
              }, [
                A("input", {
                  class: De(["quantities-cell", { active: l(d(g, q)) > 0 }]),
                  part: l(d(g, q)) > 0 ? "quantities-cell quantities-cell-active" : "quantities-cell",
                  type: "number",
                  inputmode: "numeric",
                  placeholder: "0",
                  value: h(g, q),
                  min: "0",
                  max: e.field.max,
                  step: e.field.step,
                  disabled: f(g, q) && l(d(g, q)) === 0,
                  "aria-label": `${g.label}, ${q.label}`,
                  onInput: (J) => O(d(g, q), J),
                  onBlur: (J) => j(d(g, q), J),
                  onKeydown: Oi(Cn((J) => j(d(g, q), J), ["prevent"]), ["enter"])
                }, null, 42, Dm)
              ]))), 128))
            ], 2))), 128))
          ])
        ])
      ], 8, Pm)) : (y(), k("div", {
        key: 1,
        class: De(["quantities", e.field.display === "list" ? "quantities-list" : "quantities-grid"]),
        part: "quantities",
        role: "group",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0
      }, [
        (y(!0), k(le, null, Me(e.field.options, (g) => (y(), k("div", {
          key: g.id,
          class: De(["quantities-item", { active: l(g.id) > 0, off: c(g.id) }]),
          part: l(g.id) > 0 ? "quantities-item quantities-item-active" : "quantities-item"
        }, [
          A("span", Bm, [
            g.color ? (y(), k("span", {
              key: 0,
              class: "quantities-swatch",
              style: an({ background: g.color }),
              "aria-hidden": "true"
            }, null, 4)) : g.image ? (y(), k("img", {
              key: 1,
              class: "quantities-image",
              src: g.image,
              alt: ""
            }, null, 8, Hm)) : te("", !0),
            A("span", Zm, D(g.label), 1),
            g.tooltip ? (y(), xe(Ft, {
              key: 2,
              id: `pc-tip-${e.field.id}-${g.id}`,
              text: g.tooltip,
              label: _(r)("tip.label", { label: g.label }),
              focusable: ""
            }, null, 8, ["id", "text", "label"])) : te("", !0)
          ]),
          A("div", Wm, [
            A("button", {
              type: "button",
              part: "stepper-decrement",
              "aria-label": _(r)("stepper.decrease", { label: g.label }),
              disabled: l(g.id) === 0,
              onClick: (q) => E(g.id, -1)
            }, " − ", 8, Km),
            A("input", {
              class: "stepper-value",
              part: "stepper-input",
              type: "number",
              inputmode: "numeric",
              value: l(g.id),
              min: "0",
              max: e.field.max,
              step: e.field.step,
              disabled: c(g.id) && l(g.id) === 0,
              "aria-label": g.label,
              onInput: (q) => O(g.id, q),
              onBlur: (q) => K(g.id, q),
              onKeydown: Oi(Cn((q) => K(g.id, q), ["prevent"]), ["enter"])
            }, null, 40, Gm),
            A("button", {
              type: "button",
              part: "stepper-increment",
              "aria-label": _(r)("stepper.increase", { label: g.label }),
              disabled: !x(g.id),
              onClick: (q) => E(g.id, 1)
            }, " + ", 8, Ym)
          ])
        ], 10, Vm))), 128))
      ], 10, Um)),
      A("p", Qm, D(_(r)("quantities.total", { count: o.value })), 1)
    ], 64));
  }
}), Xm = {
  key: 0,
  class: "slider-row"
}, ev = ["value", "min", "max", "step", "aria-label"], tv = {
  class: "slider-value",
  "aria-hidden": "true"
}, nv = {
  key: 1,
  class: "stepper",
  part: "stepper"
}, iv = ["aria-label", "disabled"], rv = ["value", "min", "max", "step", "aria-label"], sv = ["aria-label", "disabled"], av = ["value", "min", "max", "step", "aria-label", "aria-describedby", "aria-invalid"], ov = /* @__PURE__ */ Pe({
  __name: "NumberInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = Z(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue ?? 0
    ), { t: s } = at(), a = Z(() => n.field.label ?? n.field.id);
    function o(l) {
      Number.isNaN(l) || (i("select", l), i("touch"));
    }
    return (l, c) => e.field.display === "slider" ? (y(), k("div", Xm, [
      A("input", {
        type: "range",
        class: "slider",
        part: "stepper-input",
        value: r.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": a.value,
        onInput: c[0] || (c[0] = (u) => o(Number(u.target.value)))
      }, null, 40, ev),
      A("span", tv, D(r.value), 1)
    ])) : e.field.display === "stepper" ? (y(), k("div", nv, [
      A("button", {
        type: "button",
        part: "stepper-decrement",
        "aria-label": _(s)("stepper.decrease", { label: a.value.toLowerCase() }),
        disabled: e.field.min !== void 0 && r.value <= e.field.min,
        onClick: c[1] || (c[1] = (u) => o(r.value - (e.field.step ?? 1)))
      }, " − ", 8, iv),
      A("input", {
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
      }, null, 40, rv),
      A("button", {
        type: "button",
        part: "stepper-increment",
        "aria-label": _(s)("stepper.increase", { label: a.value.toLowerCase() }),
        disabled: e.field.max !== void 0 && r.value >= e.field.max,
        onClick: c[4] || (c[4] = (u) => o(r.value + (e.field.step ?? 1)))
      }, " + ", 8, sv)
    ])) : (y(), k("input", {
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
    }, null, 40, av));
  }
}), lv = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], cv = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], uv = /* @__PURE__ */ Pe({
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
    return (a, o) => e.field.display === "textarea" ? (y(), k("textarea", {
      key: 0,
      class: "text-input textarea",
      part: "text-input",
      value: typeof e.value == "string" ? e.value : _(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      rows: "3",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[0] || (o[0] = (l) => i("touch"))
    }, null, 40, lv)) : (y(), k("input", {
      key: 1,
      class: "text-input",
      part: "text-input",
      type: "text",
      value: typeof e.value == "string" ? e.value : _(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[1] || (o[1] = (l) => i("touch"))
    }, null, 40, cv));
  }
}), dv = {
  class: "dimensions",
  part: "dimensions"
}, fv = { class: "dim-input" }, pv = { class: "dim-label" }, hv = ["value", "aria-describedby", "aria-invalid"], mv = { class: "dim-input" }, vv = { class: "dim-label" }, gv = ["value", "aria-describedby", "aria-invalid"], yv = ["value", "aria-label"], bv = ["value"], xv = {
  key: 1,
  class: "dim-unit-static"
}, wv = /* @__PURE__ */ Pe({
  __name: "DimensionsInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = at(), s = /* @__PURE__ */ lt({
      w: pt(n.value) ? n.value.w : NaN,
      h: pt(n.value) ? n.value.h : NaN,
      unit: pt(n.value) ? n.value.unit : n.field.defaultUnit
    });
    ct(
      () => n.value,
      (c) => {
        pt(c) ? (s.w = c.w, s.h = c.h, s.unit = c.unit) : (c === void 0 || c === "") && (s.w = NaN, s.h = NaN);
      }
    );
    const a = s;
    function o(c) {
      Object.assign(s, c), i("touch"), s.w > 0 && s.h > 0 && i("select", { w: s.w, h: s.h, unit: s.unit });
    }
    function l(c) {
      return Number(c.target.value);
    }
    return (c, u) => (y(), k("div", dv, [
      A("label", fv, [
        A("span", pv, D(_(r)("dimensions.width")), 1),
        A("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(_(a).w) ? "" : _(a).w,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[0] || (u[0] = (f) => o({ w: l(f) }))
        }, null, 40, hv)
      ]),
      u[3] || (u[3] = A("span", {
        class: "dim-times",
        "aria-hidden": "true"
      }, "×", -1)),
      A("label", mv, [
        A("span", vv, D(_(r)("dimensions.height")), 1),
        A("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(_(a).h) ? "" : _(a).h,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[1] || (u[1] = (f) => o({ h: l(f) }))
        }, null, 40, gv)
      ]),
      e.field.units.length > 1 ? (y(), k("select", {
        key: 0,
        class: "dropdown dim-unit",
        part: "dropdown",
        value: _(a).unit,
        "aria-label": _(r)("dimensions.unit"),
        onChange: u[2] || (u[2] = (f) => o({ unit: f.target.value }))
      }, [
        (y(!0), k(le, null, Me(e.field.units, (f) => (y(), k("option", {
          key: f,
          value: f
        }, D(f), 9, bv))), 128))
      ], 40, yv)) : (y(), k("span", xv, D(e.field.defaultUnit), 1))
    ]));
  }
});
function _v(e) {
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
  return Ps.parse(s);
}
const kv = ["aria-busy"], Sv = {
  key: 0,
  class: "upload-files",
  part: "upload-files"
}, $v = { class: "upload-filename" }, Tv = ["onClick"], Cv = ["id", "accept", "multiple", "aria-labelledby", "aria-describedby", "aria-invalid"], Av = ["for"], Iv = {
  key: 0,
  class: "upload-status"
}, Ev = { class: "upload-filename" }, Nv = { class: "upload-hint" }, Ov = { class: "upload-title" }, Pv = { class: "upload-hint" }, Mv = {
  key: 2,
  class: "upload-wrong-type",
  part: "upload-wrong-type",
  role: "alert"
}, Rv = /* @__PURE__ */ Pe({
  __name: "FileUpload",
  props: {
    field: { type: null },
    files: { type: Array },
    analyzing: { type: Boolean },
    error: { type: String },
    failure: { type: String }
  },
  emits: ["file", "remove", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = at(), s = /* @__PURE__ */ Re(!1), a = Z(() => n.field.accept.join(", ")), o = Z(() => Np(n.field.accept) || void 0), l = Z(() => Jr(n.field)), c = Z(() => l.value > 1), u = Z(() => n.files ?? []), f = Z(() => c.value ? l.value - u.value.length : 1), d = Z(
      () => c.value ? [r("upload.limit", { max: l.value }), a.value].filter(Boolean).join(" · ") : a.value
    ), h = /* @__PURE__ */ Re(), m = Z(
      () => h.value ?? (n.failure === void 0 ? void 0 : r("upload.failed", { reason: n.failure }).trim())
    );
    function x(K) {
      if (K.length) {
        const j = K.filter((b) => Op(n.field.accept, b.name)), F = j.slice(0, Math.max(0, f.value));
        h.value = j.length < K.length ? r("upload.wrongType", { formats: Pp(n.field.accept) }) : F.length < j.length ? r("upload.tooMany", { max: l.value }) : void 0;
        for (const b of F)
          i("file", n.field, b);
      }
      i("touch");
    }
    function $(K) {
      const j = K.target;
      x(Array.from(j.files ?? [])), j.value = "";
    }
    function E(K) {
      var F;
      s.value = !1;
      const j = Array.from(((F = K.dataTransfer) == null ? void 0 : F.files) ?? []);
      x(c.value ? j : j.slice(0, 1));
    }
    function O(K) {
      h.value = void 0, i("remove", n.field, K.fileId), i("touch");
    }
    return (K, j) => (y(), k("div", {
      class: De(["upload", { dragging: s.value, done: !c.value && u.value.length > 0, multiple: c.value }]),
      part: "upload",
      "aria-busy": e.analyzing || void 0,
      onDragover: j[0] || (j[0] = Cn((F) => s.value = !0, ["prevent"])),
      onDragleave: j[1] || (j[1] = (F) => s.value = !1),
      onDrop: Cn(E, ["prevent"])
    }, [
      c.value && u.value.length ? (y(), k("ul", Sv, [
        (y(!0), k(le, null, Me(u.value, (F) => (y(), k("li", {
          key: F.fileId,
          class: "upload-file",
          part: "upload-file"
        }, [
          A("span", $v, D(F.fileName ?? F.fileId), 1),
          A("button", {
            type: "button",
            class: "upload-remove",
            part: "upload-remove",
            onClick: (b) => O(F)
          }, D(_(r)("artwork.remove")), 9, Tv)
        ]))), 128))
      ])) : te("", !0),
      f.value > 0 || e.analyzing ? (y(), k(le, { key: 1 }, [
        A("input", {
          id: `pc-control-${e.field.id}`,
          class: "upload-input",
          part: "upload-input",
          type: "file",
          accept: o.value,
          multiple: c.value || void 0,
          "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: $
        }, null, 40, Cv),
        A("label", {
          class: "upload-zone",
          for: `pc-control-${e.field.id}`
        }, [
          e.analyzing ? (y(), k("span", Iv, D(_(r)("upload.analyzing")), 1)) : !c.value && u.value[0] ? (y(), k(le, { key: 1 }, [
            A("span", Ev, D(u.value[0].fileName ?? u.value[0].fileId), 1),
            A("span", Nv, D(_(r)("upload.replace")), 1)
          ], 64)) : (y(), k(le, { key: 2 }, [
            A("span", Ov, D(c.value && u.value.length ? _(r)("upload.addMore") : _(r)("upload.drop")), 1),
            A("span", Pv, D(d.value), 1)
          ], 64))
        ], 8, Av)
      ], 64)) : te("", !0),
      m.value ? (y(), k("p", Mv, D(m.value), 1)) : te("", !0)
    ], 42, kv));
  }
}), Fv = "https://cdn.filecheck.io/element/v1/filecheck.js", jv = 1e4;
let Ln = null;
function qv(e = Fv) {
  return typeof window < "u" && window.Filecheck ? Promise.resolve(window.Filecheck) : Ln || (Ln = new Promise((t, n) => {
    const i = (a) => {
      Ln = null, r.remove(), n(new Error(a));
    }, r = document.createElement("script");
    r.src = e, r.async = !0;
    const s = setTimeout(
      () => i("Filecheck SDK load timed out."),
      jv
    );
    r.addEventListener("load", () => {
      clearTimeout(s), window.Filecheck ? t(window.Filecheck) : i("Filecheck SDK loaded but window.Filecheck is missing.");
    }), r.addEventListener("error", () => {
      clearTimeout(s), i("Filecheck SDK failed to load.");
    }), document.head.appendChild(r);
  }), Ln);
}
const Lv = { mm: 1, cm: 10, in: 25.4 }, zv = [
  "artworkSize",
  "pageCount",
  "fileCount",
  "bleed",
  "safety"
];
function Dv(e, t) {
  var r, s;
  const n = [];
  for (const a of e) {
    const o = t[a.id];
    if (!(o === void 0 || o === "")) {
      if (a.type === "dimensions" && pt(o)) {
        const l = Lv[o.unit] ?? 1;
        n.push({
          artworkSize: {
            width_mm: Qa(o.w * l),
            height_mm: Qa(o.h * l)
          }
        });
        continue;
      }
      if (a.role === "pages") {
        const l = typeof o == "number" ? o : Number(o);
        Number.isFinite(l) && l > 0 && n.push({ pageCount: { min: l, max: l } });
      }
      if (fi(a)) {
        const l = Array.isArray(o) ? o : [String(o)];
        for (const c of l) {
          const u = (s = (r = a.options.find((f) => f.id === c)) == null ? void 0 : r.filecheck) == null ? void 0 : s.context;
          u && n.push(u);
        }
      }
    }
  }
  if (n.length === 0)
    return null;
  const i = {};
  for (const a of n)
    for (const o of zv) {
      const l = a[o];
      l && (i[o] = { ...i[o] ?? {}, ...l });
    }
  return i;
}
function Qa(e) {
  return Math.round(e * 10) / 10;
}
const Uv = {
  class: "fc-upload",
  part: "upload"
}, Vv = {
  key: 0,
  class: "fc-panel fc-unconfigured"
}, Bv = {
  key: 1,
  class: "fc-panel fc-error",
  role: "alert"
}, Hv = { class: "fc-panel-title" }, Zv = { class: "fc-panel-hint" }, Wv = {
  key: 0,
  class: "fc-loading"
}, Kv = {
  key: 1,
  class: "field-error",
  role: "status"
}, Gv = /* @__PURE__ */ Pe({
  __name: "FilecheckUpload",
  props: {
    field: { type: null },
    provider: { type: null }
  },
  emits: ["metadata", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = at(), s = /* @__PURE__ */ Re(null), a = /* @__PURE__ */ Re(
      n.provider.publishableKey ? "loading" : "unconfigured"
    ), o = /* @__PURE__ */ Re("");
    let l = null, c = null;
    const u = Yt(pr, null), f = Z(() => {
      var E;
      if (!u)
        return null;
      const $ = ((E = u.cfg.visibleFields) == null ? void 0 : E.value) ?? [];
      return Dv($, u.cfg.selections);
    });
    ct(f, ($) => {
      var E;
      (E = l == null ? void 0 : l.setContext) == null || E.call(l, $ ?? null);
    });
    function d() {
      var $;
      return Va(($ = u == null ? void 0 : u.locale) == null ? void 0 : $.value) ?? (typeof document < "u" ? Va(document.documentElement.lang) : void 0);
    }
    async function h() {
      var K, j, F;
      const $ = n.provider.publishableKey, E = (K = n.field.filecheck) == null ? void 0 : K.workflowId, O = (j = n.field.filecheck) != null && j.workflow ? /* @__PURE__ */ be(n.field.filecheck.workflow) : void 0;
      if (!$ || !E && !O) {
        a.value = "unconfigured";
        return;
      }
      a.value = "loading", o.value = "";
      try {
        const b = await qv(n.provider.scriptUrl);
        if (!s.value)
          return;
        const g = b($, {
          agentId: n.provider.agentId,
          iframeSrc: n.provider.iframeSrc
        }), q = d();
        l = g.elements.create("intake", {
          // An inline workflow wins: it is the blueprint author's exact
          // intent, and demo blueprints rely on it to run against any
          // tenant with nothing saved in the Filecheck admin.
          ...O ? { workflow: O } : { workflowId: E },
          preview: n.provider.preview ?? !1,
          ...q ? { locale: q } : {}
        }), c = l.on("status", (ce) => {
          i("metadata", ce), i("touch");
        }), l.on("error", (ce) => {
          const we = ce;
          o.value = (we == null ? void 0 : we.message) ?? "Filecheck reported an error.";
        });
        const J = f.value;
        J && ((F = l.setContext) == null || F.call(l, J)), l.mount(s.value), a.value = "active";
      } catch (b) {
        a.value = "error", o.value = b instanceof Error ? b.message : "Filecheck failed to load.";
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
    function x() {
      m(), h();
    }
    return gs(() => {
      h();
    }), ct(
      () => {
        var $, E;
        return [
          n.provider.publishableKey,
          n.provider.scriptUrl,
          n.provider.iframeSrc,
          n.provider.agentId,
          ($ = n.field.filecheck) == null ? void 0 : $.workflowId,
          (E = n.field.filecheck) == null ? void 0 : E.workflow
        ];
      },
      () => {
        m(), h();
      }
    ), ys(m), ($, E) => (y(), k("div", Uv, [
      a.value === "unconfigured" ? (y(), k("div", Vv, [...E[0] || (E[0] = [
        A("span", { class: "fc-panel-title" }, "Filecheck upload", -1),
        A("span", { class: "fc-panel-hint" }, " Add your Filecheck publishable key in the store settings (or preview settings) to activate validated uploads for this field. ", -1)
      ])])) : a.value === "error" ? (y(), k("div", Bv, [
        A("span", Hv, D(_(r)("upload.unavailable")), 1),
        A("span", Zv, D(o.value), 1),
        A("button", {
          type: "button",
          class: "fc-retry",
          onClick: x
        }, D(_(r)("upload.retry")), 1)
      ])) : (y(), k(le, { key: 2 }, [
        a.value === "loading" ? (y(), k("p", Wv, D(_(r)("upload.secureLoading")), 1)) : te("", !0),
        A("div", {
          ref_key: "slot",
          ref: s,
          class: "fc-slot"
        }, null, 512),
        o.value ? (y(), k("p", Kv, D(o.value), 1)) : te("", !0)
      ], 64))
    ]));
  }
}), Yv = {
  key: 0,
  class: "artwork",
  part: "artwork"
}, Qv = { class: "artwork-body" }, Jv = {
  class: "artwork-name",
  part: "artwork-name"
}, Xv = {
  key: 0,
  class: "artwork-meta",
  part: "artwork-meta"
}, eg = { class: "artwork-actions" }, tg = {
  key: 1,
  class: "producers"
}, ng = {
  key: 0,
  class: "producer-or",
  "aria-hidden": "true"
}, ig = ["onClick"], rg = { class: "producer-label" }, sg = {
  key: 0,
  class: "producer-description"
}, ag = {
  key: 1,
  class: "producer-or",
  "aria-hidden": "true"
}, og = {
  class: "producer-or",
  "aria-hidden": "true"
}, lg = ["onClick"], cg = { class: "producer-label" }, ug = {
  key: 0,
  class: "producer-description"
}, dg = /* @__PURE__ */ Pe({
  __name: "ArtworkField",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e) {
    const t = e, n = Yt(pr);
    if (!n)
      throw new Error("ArtworkField must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r, producers: s } = n, { t: a } = at(), o = Z(
      () => {
        var b, g, q;
        return t.field.providerId === "filecheck" && !!((b = t.field.filecheck) != null && b.workflowId || (g = t.field.filecheck) != null && g.workflow) && ((q = i.provider) == null ? void 0 : q.mode) === "element";
      }
    ), l = Z(() => {
      var g;
      const b = i.schema.value;
      return !!b && ((g = vl(b)) == null ? void 0 : g.id) === t.field.id;
    }), c = Z(() => i.fieldFile(t.field.id)), u = Z(
      () => s.forField(t.field.id, l.value)
    ), f = Z(() => {
      const b = i.selections[t.field.id];
      return Array.isArray(b) ? b.length > 0 : typeof b == "string" && b !== "";
    }), d = Z(() => {
      var g;
      const b = (g = c.value) == null ? void 0 : g.source;
      return b ? u.value.find((q) => q.id === b) ?? null : null;
    }), h = Z(() => f.value && !d.value), m = Z(() => t.field.display === "producer"), x = Z(
      () => m.value ? u.value : u.value.filter((b) => b.order < ss)
    ), $ = Z(
      () => m.value ? [] : u.value.filter((b) => b.order >= ss)
    ), E = Z(() => {
      const b = c.value;
      return b ? b.fileName ? b.fileName : d.value ? a("artwork.designName") : b.fileId : "";
    }), O = Z(() => {
      var ce;
      const b = c.value;
      if (!b)
        return "";
      const g = [], q = i.schema.value, J = ((ce = i.file.value) == null ? void 0 : ce.fileId) === b.fileId;
      return b.pages !== void 0 && q && J && ah(q) && g.push(
        b.pages === 1 ? a("artwork.pageCountOne") : a("artwork.pageCount", { count: b.pages })
      ), b.canvas && g.push(`${b.canvas.w} × ${b.canvas.h} ${b.canvas.unit}`), g.join(" · ");
    });
    function K(b) {
      i.setFile(_v(b), t.field.id), b.canProceed && b.jobId ? i.select(t.field.id, b.jobId) : i.select(t.field.id, "");
    }
    function j(b) {
      s.activate(b, t.field.id), r.touch(t.field.id);
    }
    function F() {
      i.setFile(void 0, t.field.id), i.select(t.field.id, ""), r.touch(t.field.id);
    }
    return (b, g) => d.value ? (y(), k("div", Yv, [
      A("div", Qv, [
        A("span", Jv, D(E.value), 1),
        O.value ? (y(), k("span", Xv, D(O.value), 1)) : te("", !0)
      ]),
      A("div", eg, [
        A("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-change",
          onClick: g[0] || (g[0] = (q) => j(d.value.id))
        }, D(_(a)("artwork.change")), 1),
        A("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-remove",
          onClick: F
        }, D(_(a)("artwork.remove")), 1)
      ])
    ])) : (y(), k("div", tg, [
      h.value ? te("", !0) : (y(!0), k(le, { key: 0 }, Me(x.value, (q, J) => (y(), k(le, {
        key: q.id
      }, [
        m.value && J > 0 ? (y(), k("p", ng, [
          A("span", null, D(_(a)("artwork.or")), 1)
        ])) : te("", !0),
        A("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (ce) => j(q.id)
        }, [
          A("span", rg, D(q.label), 1),
          q.description ? (y(), k("span", sg, D(q.description), 1)) : te("", !0)
        ], 8, ig),
        m.value ? te("", !0) : (y(), k("p", ag, [
          A("span", null, D(_(a)("artwork.or")), 1)
        ]))
      ], 64))), 128)),
      !m.value && o.value && _(i).provider ? (y(), xe(Gv, {
        key: 1,
        field: e.field,
        provider: _(i).provider,
        onMetadata: K,
        onTouch: g[1] || (g[1] = (q) => _(r).touch(e.field.id))
      }, null, 8, ["field", "provider"])) : m.value ? te("", !0) : (y(), xe(Rv, {
        key: 2,
        field: e.field,
        files: _(i).uploads[e.field.id],
        analyzing: (_(i).uploading[e.field.id] ?? 0) > 0,
        error: e.error,
        failure: _(i).uploadErrors[e.field.id],
        onFile: g[2] || (g[2] = (q, J) => _(i).handleFile(q, J)),
        onRemove: g[3] || (g[3] = (q, J) => _(i).removeUpload(q, J)),
        onTouch: g[4] || (g[4] = (q) => _(r).touch(e.field.id))
      }, null, 8, ["field", "files", "analyzing", "error", "failure"])),
      h.value ? te("", !0) : (y(!0), k(le, { key: 3 }, Me($.value, (q) => (y(), k(le, {
        key: q.id
      }, [
        A("p", og, [
          A("span", null, D(_(a)("artwork.or")), 1)
        ]),
        A("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (J) => j(q.id)
        }, [
          A("span", cg, D(q.label), 1),
          q.description ? (y(), k("span", ug, D(q.description), 1)) : te("", !0)
        ], 8, lg)
      ], 64))), 128))
    ]));
  }
}), fg = {
  key: 0,
  class: "recap",
  part: "summary-recap"
}, pg = { part: "recap-label" }, hg = { part: "recap-value" }, mg = {
  key: 1,
  class: "recap-empty"
}, vg = /* @__PURE__ */ Pe({
  __name: "SummaryPanel",
  props: {
    sections: { type: Array },
    selections: { type: Object },
    file: { type: null },
    uploads: { type: Object },
    records: { type: Object }
  },
  setup(e) {
    const t = e, { t: n } = at(), i = Z(
      () => Ll(t.sections, t.selections, t.file, {
        quantityLabel: n("quantity.label"),
        artworkLabel: n("artwork.label"),
        designName: n("artwork.designName"),
        uploads: t.uploads,
        records: t.records
      })
    );
    return (r, s) => i.value.length ? (y(), k("dl", fg, [
      (y(!0), k(le, null, Me(i.value, (a) => (y(), k("div", {
        key: a.fieldId,
        class: "recap-row",
        part: "recap-row"
      }, [
        A("dt", pg, D(a.label), 1),
        A("dd", hg, D(a.value), 1)
      ]))), 128))
    ])) : (y(), k("p", mg, D(_(n)("recap.empty")), 1));
  }
}), gg = /* @__PURE__ */ Pe({
  __name: "InfoBlock",
  props: {
    field: { type: null }
  },
  setup(e) {
    return (t, n) => e.field.body ? (y(), xe(_(hi), {
      key: 0,
      tag: "p",
      class: "info-note",
      part: "field-help",
      text: e.field.body
    }, null, 8, ["text"])) : te("", !0);
  }
}), Vl = /* @__PURE__ */ Pe({
  __name: "FieldHost",
  props: {
    field: { type: null }
  },
  setup(e) {
    const t = e, n = Yt(pr);
    if (!n)
      throw new Error("FieldHost must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r } = n, s = Z(() => i.selections[t.field.id]), a = Z(() => r.errorFor(t.field.id)), o = Z(() => {
      const u = s.value;
      return Array.isArray(u) ? u : typeof u == "string" && u !== "" ? [u] : [];
    }), l = Z(() => {
      if (!Bt(t.field) || !i.schema.value)
        return [];
      const u = i.schema.value;
      return dn(t.field).filter(
        (f) => !Kp(u, i.selections, t.field.id, f.id)
      ).map((f) => f.id);
    });
    function c(u) {
      t.field.type === "select-many" ? i.toggle(t.field, u) : i.select(t.field.id, u), r.touch(t.field.id);
    }
    return (u, f) => (y(), xe(_m, {
      field: e.field,
      error: a.value
    }, {
      default: Co(() => [
        e.field.type === "select-one" || e.field.type === "select-many" ? (y(), xe(nu(_(Ya)[e.field.display] ?? _(Ya).pills), {
          key: 0,
          field: e.field,
          "selected-ids": o.value,
          "unavailable-ids": l.value,
          error: a.value,
          onPick: c
        }, null, 40, ["field", "selected-ids", "unavailable-ids", "error"])) : e.field.type === "quantity" ? (y(), xe(Om, {
          key: 1,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: f[0] || (f[0] = (d) => _(i).select(e.field.id, d)),
          onTouch: f[1] || (f[1] = (d) => _(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "quantities" ? (y(), xe(Jm, {
          key: 2,
          field: e.field,
          value: s.value,
          "unavailable-ids": l.value,
          error: a.value,
          onSelect: f[2] || (f[2] = (d) => _(i).select(e.field.id, d)),
          onTouch: f[3] || (f[3] = (d) => _(r).touch(e.field.id))
        }, null, 8, ["field", "value", "unavailable-ids", "error"])) : e.field.type === "number" ? (y(), xe(ov, {
          key: 3,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: f[4] || (f[4] = (d) => _(i).select(e.field.id, d)),
          onTouch: f[5] || (f[5] = (d) => _(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "text" ? (y(), xe(uv, {
          key: 4,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: f[6] || (f[6] = (d) => _(i).select(e.field.id, d)),
          onTouch: f[7] || (f[7] = (d) => _(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "dimensions" ? (y(), xe(wv, {
          key: 5,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: f[8] || (f[8] = (d) => _(i).select(e.field.id, d)),
          onTouch: f[9] || (f[9] = (d) => _(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "file" ? (y(), xe(dg, {
          key: 6,
          field: e.field,
          error: a.value
        }, null, 8, ["field", "error"])) : e.field.type === "info" && e.field.display === "summary" ? (y(), xe(vg, {
          key: 7,
          sections: _(i).visibleSections.value,
          selections: _(i).selections,
          file: _(i).file.value,
          uploads: _(i).uploads,
          records: _(i).records
        }, null, 8, ["sections", "selections", "file", "uploads", "records"])) : e.field.type === "info" ? (y(), xe(gg, {
          key: 8,
          field: e.field
        }, null, 8, ["field"])) : te("", !0)
      ]),
      _: 1
    }, 8, ["field", "error"]));
  }
}), yg = {
  class: "section-title",
  part: "section-title"
}, bg = /* @__PURE__ */ Pe({
  __name: "SectionStack",
  props: {
    sections: { type: Array }
  },
  setup(e) {
    return (t, n) => (y(!0), k(le, null, Me(e.sections, (i) => (y(), k("section", {
      key: i.section.id,
      class: "section",
      part: "section"
    }, [
      A("h3", yg, D(i.section.title), 1),
      (y(!0), k(le, null, Me(i.fields, (r) => (y(), xe(Vl, {
        key: r.id,
        field: r
      }, null, 8, ["field"]))), 128))
    ]))), 128));
  }
}), xg = { class: "wizard" }, wg = {
  class: "wizard-nav",
  part: "wizard-nav"
}, _g = ["part", "aria-current"], kg = ["onClick"], Sg = {
  class: "wizard-step-index",
  "aria-hidden": "true"
}, $g = { class: "wizard-step-title" }, Tg = {
  key: 0,
  class: "section",
  part: "section"
}, Cg = { class: "wizard-actions" }, Ag = /* @__PURE__ */ Pe({
  __name: "SectionWizard",
  props: {
    sections: { type: Array },
    issues: { type: Array }
  },
  emits: ["blocked"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n, { t: s } = at(), a = /* @__PURE__ */ Re(0), o = /* @__PURE__ */ Re(null);
    ct(
      () => i.sections.length,
      (x) => {
        a.value > x - 1 && (a.value = Math.max(0, x - 1));
      }
    );
    const l = Z(() => i.sections[a.value]), c = Z(() => a.value >= i.sections.length - 1);
    function u(x) {
      const $ = i.sections[x];
      if (!$)
        return [];
      const E = new Set($.fields.map((O) => O.id));
      return i.issues.filter((O) => E.has(O.fieldId));
    }
    function f(x) {
      return x === a.value ? "active" : x < a.value && u(x).length === 0 ? "done" : "todo";
    }
    async function d(x) {
      var $;
      a.value = Math.max(0, Math.min(x, i.sections.length - 1)), await Nn(), ($ = o.value) == null || $.focus();
    }
    function h() {
      const x = u(a.value);
      if (x.length > 0) {
        r("blocked", x);
        return;
      }
      d(a.value + 1);
    }
    function m() {
      d(a.value - 1);
    }
    return t({ goTo: d, current: a }), (x, $) => (y(), k("div", xg, [
      A("ol", wg, [
        (y(!0), k(le, null, Me(e.sections, (E, O) => (y(), k("li", {
          key: E.section.id,
          class: De(["wizard-step", f(O)]),
          part: `wizard-step wizard-step-${f(O)}`,
          "aria-current": O === a.value ? "step" : void 0
        }, [
          A("button", {
            type: "button",
            class: "wizard-step-button",
            onClick: (K) => d(O)
          }, [
            A("span", Sg, D(f(O) === "done" ? "✓" : O + 1), 1),
            A("span", $g, D(E.section.title), 1)
          ], 8, kg)
        ], 10, _g))), 128))
      ]),
      l.value ? (y(), k("section", Tg, [
        A("h3", {
          ref_key: "heading",
          ref: o,
          class: "section-title",
          part: "section-title",
          tabindex: "-1"
        }, D(l.value.section.title), 513),
        (y(!0), k(le, null, Me(l.value.fields, (E) => (y(), xe(Vl, {
          key: E.id,
          field: E
        }, null, 8, ["field"]))), 128))
      ])) : te("", !0),
      A("div", Cg, [
        a.value > 0 ? (y(), k("button", {
          key: 0,
          type: "button",
          class: "wizard-back",
          part: "wizard-back",
          onClick: m
        }, D(_(s)("wizard.back")), 1)) : te("", !0),
        c.value ? te("", !0) : (y(), k("button", {
          key: 1,
          type: "button",
          class: "wizard-next",
          part: "wizard-next",
          onClick: h
        }, D(_(s)("wizard.continue")), 1))
      ])
    ]));
  }
}), Ig = {
  class: "summary",
  part: "summary"
}, Eg = { part: "summary-title" }, Ng = { class: "lines" }, Og = { part: "summary-line-label" }, Pg = { part: "summary-line-value" }, Mg = {
  class: "subtotal",
  part: "summary-net"
}, Rg = { part: "summary-net-label" }, Fg = { part: "summary-net-value" }, jg = {
  class: "tax-line",
  part: "summary-tax"
}, qg = { part: "summary-tax-label" }, Lg = { part: "summary-tax-value" }, zg = {
  class: "total",
  part: "summary-total",
  "aria-live": "polite",
  "aria-atomic": "true"
}, Dg = { part: "summary-total-label" }, Ug = { part: "price" }, Vg = {
  key: 1,
  class: "tax-included",
  part: "summary-tax-included"
}, Bg = {
  key: 2,
  class: "unit-price",
  part: "summary-unit"
}, Hg = {
  key: 3,
  class: "next-break",
  part: "summary-hint"
}, Zg = {
  key: 4,
  class: "price-note",
  part: "summary-note"
}, Wg = {
  key: 5,
  class: "unavailable",
  role: "status"
}, Kg = ["disabled"], Gg = {
  class: "visually-hidden",
  role: "status"
}, Yg = /* @__PURE__ */ Pe({
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
    const n = e, i = t, { t: r } = at();
    function s(m) {
      var x;
      return Ch(
        m,
        ((x = n.price) == null ? void 0 : x.currency) ?? "USD",
        n.locale,
        n.priceFormat
      );
    }
    const a = Z(
      () => {
        var m;
        return (((m = n.price) == null ? void 0 : m.lines) ?? []).filter(
          (x) => !(x.amount === 0 && (x.stage === "base" || x.stage === "percent" || x.stage === "multiplier"))
        );
      }
    ), o = Z(() => {
      var x;
      const m = n.nextBreak;
      if (!(!m || (x = n.price) != null && x.unavailable))
        return m.percentOff !== void 0 ? r("summary.nextBreakPercent", {
          count: m.add,
          percent: Ha(m.percentOff, n.locale)
        }) : r("summary.nextBreakPrice", { count: m.add, unitPrice: s(m.unitPrice) });
    }), l = Z(
      () => {
        var m, x;
        return (((m = n.price) == null ? void 0 : m.quantity) ?? 1) > 1 && !((x = n.price) != null && x.unavailable);
      }
    ), c = Z(() => {
      const m = n.price;
      if (!(!n.tax || !m || m.unavailable))
        return Fh(m.total, m.currency, n.tax);
    }), u = Z(() => {
      var m, x;
      return {
        tax: ((m = n.tax) == null ? void 0 : m.name) ?? r("tax.name"),
        rate: Ha(((x = n.tax) == null ? void 0 : x.rate) ?? 0, n.locale)
      };
    }), f = Z(() => {
      var m;
      return c.value !== void 0 && ((m = n.tax) == null ? void 0 : m.mode) === "exclusive";
    }), d = Z(
      () => {
        var m, x;
        return f.value ? ((m = c.value) == null ? void 0 : m.gross) ?? 0 : ((x = n.price) == null ? void 0 : x.total) ?? 0;
      }
    ), h = Z(() => {
      const m = n.price;
      return m ? f.value && m.quantity > 0 ? d.value / m.quantity : m.unitPrice : 0;
    });
    return (m, x) => {
      var $, E;
      return y(), k("aside", Ig, [
        A("h3", Eg, D(_(r)("summary.title")), 1),
        A("ul", Ng, [
          (y(!0), k(le, null, Me(a.value, (O, K) => (y(), k("li", {
            key: K,
            part: "summary-line"
          }, [
            A("span", Og, D(_(Eh)(_(r), O)), 1),
            A("span", Pg, D(s(O.amount)), 1)
          ]))), 128))
        ]),
        f.value && c.value ? (y(), k(le, { key: 0 }, [
          A("div", Mg, [
            A("span", Rg, D(_(r)("summary.totalNet", u.value)), 1),
            A("span", Fg, D(s(c.value.net)), 1)
          ]),
          A("div", jg, [
            A("span", qg, D(_(r)("summary.tax", u.value)), 1),
            A("span", Lg, D(s(c.value.tax)), 1)
          ])
        ], 64)) : te("", !0),
        A("div", zg, [
          A("span", Dg, D(f.value ? _(r)("summary.totalGross", u.value) : _(r)("summary.total")), 1),
          A("strong", Ug, D(s(d.value)), 1)
        ]),
        c.value && !f.value ? (y(), k("p", Vg, D(_(r)("summary.taxIncluded", { ...u.value, amount: s(c.value.tax) })), 1)) : te("", !0),
        l.value ? (y(), k("p", Bg, D(_(r)("summary.unitPrice", {
          quantity: (($ = e.price) == null ? void 0 : $.quantity) ?? 0,
          unitPrice: s(h.value)
        })), 1)) : te("", !0),
        o.value ? (y(), k("p", Hg, D(o.value), 1)) : te("", !0),
        e.priceNote ? (y(), k("p", Zg, D(e.priceNote), 1)) : te("", !0),
        (E = e.price) != null && E.unavailable ? (y(), k("p", Wg, D(_(r)(
          e.price.unavailableReason === "formula" ? "summary.unpriceable" : "summary.unavailable"
        )), 1)) : te("", !0),
        (y(!0), k(le, null, Me(e.holds.filter((O) => O.message), (O) => (y(), k("p", {
          key: O.key,
          class: "hold-message",
          part: "hold-message",
          role: "status"
        }, D(O.message), 1))), 128)),
        A("button", {
          type: "button",
          class: "cta",
          part: "cta",
          disabled: e.holds.length > 0,
          onClick: x[0] || (x[0] = (O) => i("submit"))
        }, D(_(r)("summary.addToCart")), 9, Kg),
        A("span", Gg, D(e.issueCount > 0 ? _(r)("summary.issues", { count: e.issueCount }) : ""), 1)
      ]);
    };
  }
}), Qg = {
  key: 0,
  class: "state"
}, Jg = {
  key: 1,
  class: "state error",
  role: "alert"
}, Xg = {
  key: 2,
  class: "layout"
}, ey = { class: "main" }, ty = /* @__PURE__ */ Pe({
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
    config: { type: null },
    variantOptions: { type: [String, Object] }
  },
  emits: ["submit", "invalid", "unconfigured"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n;
    function s(J) {
      if (J)
        try {
          const ce = typeof J == "string" ? JSON.parse(J) : J;
          return Cp.parse(ce);
        } catch {
          return;
        }
    }
    const a = gh({
      configUrl: i.configUrl,
      uploadEndpoint: i.uploadEndpoint,
      turnstileUrl: i.turnstileUrl,
      provider: s(i.provider),
      inlineConfig: i.config
    }), o = Z(() => Oh(i.strings)), l = Dl(() => o.value);
    Rr(Ul, l);
    const c = Z(() => Th(i.priceFormat)), u = Z(() => Rh(i.taxMode, i.taxRate, i.taxName)), f = Ph(
      a.visibleFields,
      a.selections,
      a.price,
      l.t
    ), d = hd(), h = bh(), m = _h({ host: d });
    Rr(pr, { cfg: a, validation: f, producers: m, locale: /* @__PURE__ */ Nc(i, "locale") });
    const x = xh({ host: d, cfg: a, validation: f, holds: h, producers: m });
    lh(a, m);
    const $ = kh(
      a,
      () => Sh(i.variantOptions),
      (J) => x.exposed.setSelections(J, { source: "variant" })
    ), E = /* @__PURE__ */ Re(null), O = /* @__PURE__ */ Re(null);
    gs(() => {
      (i.config || i.configUrl) && a.load().then(() => {
        a.unconfigured.value ? r("unconfigured", { productId: i.productId }) : a.schema.value && ($.apply(), x.notifyReady());
      });
    }), ct(
      () => i.config,
      (J, ce) => {
        J && J !== ce && (f.reset(), a.reload({
          inlineConfig: J,
          provider: s(i.provider)
        }).then(() => {
          a.schema.value && ($.apply(), x.notifyReady());
        }));
      }
    );
    const K = Z(() => {
      const J = {}, ce = a.schema.value;
      if (!ce)
        return J;
      for (const we of ce.sections)
        for (const T of we.fields)
          if (J[T.id] = T.label ?? T.id, Bt(T))
            for (const M of T.options)
              J[`${T.id}:${M.id}`] = M.label;
      return J;
    });
    function j() {
      return !a.schema.value || !a.price.value ? null : {
        productId: a.schema.value.productId,
        selections: { ...a.selections },
        quantity: a.price.value.quantity,
        file: a.file.value,
        price: a.price.value,
        sku: a.price.value.sku,
        labels: K.value,
        /* The cart line already names the variant ("Klappkarte / Matt"):
           a field it answered would repeat it. */
        display: Ll(
          $.shownSections.value,
          a.selections,
          a.file.value,
          {
            quantityLabel: l.t("quantity.label"),
            artworkLabel: l.t("artwork.label"),
            designName: l.t("artwork.designName"),
            fileLinkLabel: l.t("upload.downloadLink"),
            uploads: a.uploads,
            records: a.records
          }
        ),
        files: F()
      };
    }
    function F() {
      return a.visibleSections.value.flatMap(
        ({ fields: J }) => J.flatMap(
          (ce) => (a.uploads[ce.id] ?? []).map((we) => {
            var M;
            const T = (M = we.raw) == null ? void 0 : M.downloadUrl;
            return {
              fieldId: ce.id,
              fileId: we.fileId,
              ...we.fileName ? { fileName: we.fileName } : {},
              ...typeof T == "string" && T.startsWith("https://") ? { downloadUrl: T } : {}
            };
          })
        )
      );
    }
    function b(J) {
      var we, T;
      const ce = (we = E.value) == null ? void 0 : we.querySelector(`[data-field-id="${J}"]`);
      ce && (ce.scrollIntoView({ behavior: "smooth", block: "center" }), (T = ce.querySelector(
        "button, input, select, textarea, [tabindex]"
      )) == null || T.focus({ preventScroll: !0 }));
    }
    function g() {
      var we, T, M;
      const J = j();
      if (!J)
        return;
      if (h.held.value) {
        r("invalid", {
          productId: J.productId,
          issues: [],
          holds: h.list.value
        });
        return;
      }
      const ce = f.touchAll();
      if (ce.length > 0 || (we = a.price.value) != null && we.unavailable) {
        const X = ce[0];
        if (X) {
          const me = $.shownSections.value.findIndex(
            (ye) => ye.fields.some((S) => S.id === X.fieldId)
          );
          ((T = a.schema.value) == null ? void 0 : T.layout) === "wizard" && me >= 0 && ((M = O.value) == null || M.goTo(me)), b(X.fieldId);
        }
        r("invalid", {
          productId: J.productId,
          issues: ce
        });
        return;
      }
      r("submit", { ...J, valid: !0 });
    }
    function q(J) {
      for (const we of J)
        f.touch(we.fieldId);
      const ce = J[0];
      ce && b(ce.fieldId);
    }
    return t(x.exposed), (J, ce) => _(a).unconfigured.value ? te("", !0) : (y(), k("div", {
      key: 0,
      ref_key: "root",
      ref: E,
      class: "configurator",
      part: "base"
    }, [
      _(a).loading.value ? (y(), k("p", Qg, D(_(l).t("state.loading")), 1)) : _(a).error.value ? (y(), k("p", Jg, D(_(a).error.value), 1)) : _(a).schema.value ? (y(), k("div", Xg, [
        A("div", ey, [
          _(a).schema.value.layout === "wizard" ? (y(), xe(Ag, {
            key: 0,
            ref_key: "wizard",
            ref: O,
            sections: _($).shownSections.value,
            issues: _(f).issues.value,
            onBlocked: q
          }, null, 8, ["sections", "issues"])) : (y(), xe(bg, {
            key: 1,
            sections: _($).shownSections.value
          }, null, 8, ["sections"]))
        ]),
        Ze(Yg, {
          price: _(a).price.value,
          locale: i.locale,
          "price-format": c.value,
          "price-note": i.priceNote,
          tax: u.value,
          "next-break": _(a).nextBreak.value,
          holds: _(h).list.value,
          "issue-count": _(f).issues.value.length,
          onSubmit: g
        }, null, 8, ["price", "locale", "price-format", "price-note", "tax", "next-break", "holds", "issue-count"])
      ])) : te("", !0)
    ], 512));
  }
}), ny = ":host{--pc-color-accent: #1a1a1a;--pc-color-accent-contrast: #ffffff;--pc-color-accent-soft: #f6f6f4;--pc-color-surface: #ffffff;--pc-color-surface-alt: #fafafa;--pc-color-border: #e0e0dc;--pc-color-text: #1a1a1a;--pc-color-text-muted: #6b7280;--pc-color-danger: #c0392b;--pc-color-focus: var(--pc-color-accent);--pc-font-family: inherit;--pc-font-size: 1em;--pc-label-weight: 600;--pc-radius-control: 8px;--pc-radius-card: 12px;--pc-space: 4px;--pc-shadow-card: none;--pc-cta-bg: var(--pc-color-accent);--pc-cta-color: var(--pc-color-accent-contrast);--pc-swatch-size: 44px;--pc-card-image-height: 90px;display:block;container:pc-root / inline-size;font-family:var(--pc-font-family);font-size:var(--pc-font-size);color:var(--pc-color-text)}", iy = '*{box-sizing:border-box}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.state{padding:calc(var(--pc-space) * 8);text-align:center;color:var(--pc-color-text-muted)}.state.error{color:var(--pc-color-danger)}.layout{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:calc(var(--pc-space) * 6);align-items:start}.section{margin-bottom:calc(var(--pc-space) * 6);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);box-shadow:var(--pc-shadow-card)}.section-title{margin:0 0 calc(var(--pc-space) * 4);text-transform:uppercase;letter-spacing:.04em;font-size:.95em;color:var(--pc-color-text);outline:none}.field{margin-bottom:calc(var(--pc-space) * 5)}.field:last-child{margin-bottom:0}.field-head{display:flex;align-items:center;gap:calc(var(--pc-space) * 1.5);margin-bottom:calc(var(--pc-space) * 2)}.field-label{display:block;font-weight:var(--pc-label-weight)}.req{color:var(--pc-color-danger)}.help{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.tip{display:inline-flex;vertical-align:middle}.tip-icon{display:inline-grid;place-items:center;width:24px;height:24px;margin:-4px;padding:0;border:0;border-radius:50%;background:none;color:var(--pc-color-text-muted);cursor:help;font:inherit;line-height:1}.tip-icon:hover{color:var(--pc-color-text)}.tip-bubble{display:none;position:fixed;inset:auto;z-index:2147483000;margin:0;max-width:min(280px,calc(100vw - 16px));padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:0;border-radius:var(--pc-radius-control);background:var(--pc-color-text);color:var(--pc-color-surface);box-shadow:0 4px 16px #0000002e;font-family:inherit;font-size:.85em;font-weight:400;font-style:normal;line-height:1.45;letter-spacing:normal;text-align:left;text-transform:none;text-decoration:none;white-space:normal;overflow-wrap:anywhere;overflow:visible;pointer-events:none}.tip-bubble.open{display:block}.tip-bubble strong{font-weight:700}.choice-cell{position:relative;display:flex;min-width:0}.choice-cell>.card,.choice-cell>.choice-row{flex:1;min-width:0}.choice-cell>.tip{position:absolute}.pill.has-tip{padding-right:calc(var(--pc-space) * 5 + 18px)}.pill+.tip{top:50%;right:calc(var(--pc-space) * 3);transform:translateY(-50%)}.pill.active+.tip .tip-icon{color:var(--pc-color-accent-contrast)}.card+.tip{top:calc(var(--pc-space) * 2);left:calc(var(--pc-space) * 2)}.choice-row.has-tip{padding-right:calc(var(--pc-space) * 3 + 28px)}.choice-row+.tip{top:50%;right:calc(var(--pc-space) * 3);transform:translateY(-50%)}.swatch-selected-label .tip,.quantities-name .tip{margin-left:calc(var(--pc-space) * 1.5)}.dropdown-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 2)}.field-error{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--pc-color-focus);outline-offset:2px}.grid{display:grid;gap:calc(var(--pc-space) * 3);grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.grid.cards{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.card{position:relative;display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;transition:border-color .15s ease}.card:hover{border-color:var(--pc-color-accent-soft)}.card.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.card img{max-width:100%;height:var(--pc-card-image-height);object-fit:contain}.card-label{font-size:.9em}.card-description{font-size:.8em;color:var(--pc-color-text-muted)}.check{position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);display:grid;place-items:center;font-size:.8em}.swatches{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.swatch{width:var(--pc-swatch-size);height:var(--pc-swatch-size);border-radius:50%;border:3px solid transparent;cursor:pointer;display:grid;place-items:center}.swatch.active{border-color:var(--pc-color-accent);box-shadow:0 0 0 2px var(--pc-color-surface) inset}.swatch-check{color:#fff;text-shadow:0 0 3px rgb(0 0 0 / .8);font-size:.9em}.swatch-selected-label{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.pills{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.pill{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);cursor:pointer}.pill.active{background:var(--pc-color-accent);border-color:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.choice-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.choice-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);padding:calc(var(--pc-space) * 3);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;text-align:left;cursor:pointer}.choice-row.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.choice-indicator{flex:none;width:20px;height:20px;border:2px solid var(--pc-color-border);border-radius:50%;display:grid;place-items:center;font-size:.7em;color:var(--pc-color-accent-contrast)}.choice-indicator.multi{border-radius:4px}.choice-row.active .choice-indicator{background:var(--pc-color-accent);border-color:var(--pc-color-accent)}.choice-body{display:flex;flex-direction:column}.choice-title{font-weight:var(--pc-label-weight)}.choice-description{font-size:.85em;color:var(--pc-color-text-muted)}.card.unavailable,.pill.unavailable,.swatch.unavailable,.choice-row.unavailable{opacity:.4;cursor:not-allowed;text-decoration:line-through}.dropdown{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.quantities-grid{display:grid;gap:calc(var(--pc-space) * 2);grid-template-columns:repeat(auto-fill,minmax(118px,1fr))}.quantities-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.quantities-item{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 3) calc(var(--pc-space) * 2);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface)}.quantities-list .quantities-item{flex-direction:row;justify-content:space-between;padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3)}.quantities-item.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.quantities-item.off .quantities-label{text-decoration:line-through;color:var(--pc-color-text-muted)}.quantities-name{display:inline-flex;align-items:center;gap:calc(var(--pc-space) * 2);font-weight:var(--pc-label-weight)}.quantities-swatch{width:1.1em;height:1.1em;border-radius:50%;border:1px solid var(--pc-color-border)}.quantities-image{height:2em;width:auto;object-fit:contain}.quantities-item .stepper button{width:32px}.quantities-item .stepper-value{width:3em}.quantities-table-wrap{overflow-x:auto}.quantities-table{width:100%;border-collapse:collapse}.quantities-table th,.quantities-table td{padding:calc(var(--pc-space) * .75)}.quantities-table th{font-weight:400;white-space:nowrap}.quantities-table thead th{font-size:.9em;color:var(--pc-color-text-muted);text-align:center}.quantities-table .quantities-corner{position:sticky;left:0;z-index:1;background:var(--pc-color-surface);text-align:left;padding-left:0}.quantities-table thead th.off .quantities-label,.quantities-row.off .quantities-label{text-decoration:line-through;color:var(--pc-color-text-muted)}.quantities-table .quantities-rowhead{position:sticky;left:0;z-index:1;padding-left:0;padding-right:calc(var(--pc-space) * 2);background:var(--pc-color-surface);text-align:left}.quantities-table .quantities-name{font-weight:400}.quantities-table .quantities-swatch{border-radius:4px}.quantities-cell{box-sizing:border-box;width:100%;min-width:3.5em;padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:999px;background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.quantities-cell::-webkit-outer-spin-button,.quantities-cell::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.quantities-cell.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.quantities-cell:disabled{opacity:.45;cursor:not-allowed}.quantities-total{margin:calc(var(--pc-space) * 2) 0 0;text-align:right;font-size:.9em;color:var(--pc-color-text-muted)}.stepper{display:inline-flex;align-items:stretch;border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);overflow:hidden}.stepper button{width:40px;border:none;background:var(--pc-color-surface-alt);color:var(--pc-color-text);font-size:1.2em;cursor:pointer}.stepper button:disabled{opacity:.4;cursor:not-allowed}.stepper-value{width:4.5em;border:none;text-align:center;font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);background:var(--pc-color-surface);-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.stepper-value::-webkit-outer-spin-button,.stepper-value::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.number-input,.text-input{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.textarea{width:100%;resize:vertical}.slider-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3)}.slider{flex:1;accent-color:var(--pc-color-accent)}.slider-value{min-width:3em;text-align:right;font-weight:var(--pc-label-weight)}.dimensions{display:flex;align-items:flex-end;gap:calc(var(--pc-space) * 2);flex-wrap:wrap}.dim-input{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1)}.dim-label{font-size:.8em;color:var(--pc-color-text-muted)}.dim-input input{width:6em;padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);font:inherit;color:var(--pc-color-text);background:var(--pc-color-surface)}.dim-times{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.dim-unit{min-width:5em}.dim-unit-static{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.upload-input{position:absolute;width:1px;height:1px;opacity:0;overflow:hidden}.upload-zone{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 6);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);cursor:pointer;text-align:center}.upload.dragging .upload-zone{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.upload.done .upload-zone{border-style:solid;border-color:var(--pc-color-accent)}.upload-title{font-weight:var(--pc-label-weight)}.upload-hint{font-size:.8em;color:var(--pc-color-text-muted)}.upload-wrong-type{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.upload-files{list-style:none;margin:0 0 calc(var(--pc-space) * 2);padding:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1.5)}.upload-file{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:1px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-surface)}.upload-remove{flex:none;border:none;background:none;padding:0;font:inherit;font-size:.85em;color:var(--pc-color-text-muted);text-decoration:underline;cursor:pointer}.upload-remove:hover{color:var(--pc-color-danger)}.upload-filename{font-weight:var(--pc-label-weight);color:var(--pc-color-accent);word-break:break-all}.upload-status{color:var(--pc-color-accent);font-weight:var(--pc-label-weight)}.producers{display:flex;flex-direction:column}.producer{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;text-align:center;transition:border-color .15s ease}.producer:hover{border-color:var(--pc-color-accent)}.producer-label{font-weight:var(--pc-label-weight)}.producer-description{font-size:.8em;color:var(--pc-color-text-muted)}.producer-or{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);margin:calc(var(--pc-space) * 3) 0;font-size:.8em;text-transform:uppercase;letter-spacing:.06em;color:var(--pc-color-text-muted)}.producer-or:before,.producer-or:after{content:"";flex:1;height:1px;background:var(--pc-color-border)}.artwork{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 4);flex-wrap:wrap;padding:calc(var(--pc-space) * 4) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-accent-soft)}.artwork-body{display:flex;flex-direction:column;min-width:0}.artwork-name{font-weight:var(--pc-label-weight);word-break:break-all}.artwork-meta{font-size:.85em;color:var(--pc-color-text-muted)}.artwork-actions{display:flex;gap:calc(var(--pc-space) * 2)}.artwork-action{padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-size:.9em;cursor:pointer}.artwork-action:hover{border-color:var(--pc-color-accent)}.fc-slot{min-height:40px}.fc-loading{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.fc-panel{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);text-align:center;align-items:center}.fc-panel.fc-error{border-color:var(--pc-color-danger)}.fc-panel-title{font-weight:var(--pc-label-weight)}.fc-panel-hint{font-size:.85em;color:var(--pc-color-text-muted)}.fc-retry{margin-top:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.recap{margin:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.recap-row{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 4);font-size:.9em}.recap-row dt{color:var(--pc-color-text-muted)}.recap-row dd{margin:0;text-align:right}.recap-empty,.info-note{margin:0;font-size:.9em;color:var(--pc-color-text-muted)}.summary{position:sticky;top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt)}.summary h3{margin:0 0 calc(var(--pc-space) * 4)}.lines{list-style:none;margin:0 0 calc(var(--pc-space) * 4);padding:0}.lines li{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0;color:var(--pc-color-text-muted)}.total{display:flex;justify-content:space-between;padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border);font-size:1.1em}.subtotal,.tax-line{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0}.subtotal{padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border)}.tax-line{margin-bottom:calc(var(--pc-space) * 2);color:var(--pc-color-text-muted)}.tax-included,.unit-price{margin:calc(var(--pc-space) * 1) 0 0;text-align:right;font-size:.85em;color:var(--pc-color-text-muted)}.next-break{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;font-weight:var(--pc-label-weight);color:var(--pc-color-accent)}.price-note{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.unavailable{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.hold-message{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.cta{width:100%;margin-top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 3.5);border:none;border-radius:var(--pc-radius-control);background:var(--pc-cta-bg);color:var(--pc-cta-color);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.cta:disabled{opacity:.5;cursor:not-allowed}.wizard-nav{list-style:none;display:flex;gap:calc(var(--pc-space) * 2);margin:0 0 calc(var(--pc-space) * 5);padding:0;flex-wrap:wrap}.wizard-step-button{display:flex;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:none;border-radius:var(--pc-radius-control);background:transparent;font:inherit;color:var(--pc-color-text-muted);cursor:pointer}.wizard-step.active .wizard-step-button{background:var(--pc-color-accent-soft);color:var(--pc-color-text);font-weight:var(--pc-label-weight)}.wizard-step-index{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--pc-color-border);color:var(--pc-color-text);font-size:.75em}.wizard-step.active .wizard-step-index,.wizard-step.done .wizard-step-index{background:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.wizard-actions{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 3)}.wizard-back,.wizard-next{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 6);border-radius:var(--pc-radius-control);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.wizard-back{border:2px solid var(--pc-color-border);background:var(--pc-color-surface);color:var(--pc-color-text)}.wizard-next{border:none;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);margin-left:auto}@container pc-root (max-width: 640px){.layout{grid-template-columns:minmax(0,1fr)}.summary{position:static}}', ry = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, sy = /* @__PURE__ */ ry(ty, [["styles", [ny, iy]]]), ay = /* @__PURE__ */ fd(sy);
function oy(e = "print-configurator") {
  typeof customElements < "u" && !customElements.get(e) && customElements.define(e, ay);
}
oy();
export {
  zl as DEFAULT_STRINGS,
  rs as PAGE_API_VERSION,
  ay as PrintConfiguratorElement,
  oy as registerPrintConfigurator
};
