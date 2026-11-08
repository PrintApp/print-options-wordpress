var Al = Object.defineProperty;
var Cl = (e, t, n) => t in e ? Al(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Qt = (e, t, n) => Cl(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ie = {}, gn = [], St = () => {
}, Ma = () => !1, ji = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Li = (e) => e.startsWith("onUpdate:"), Pe = Object.assign, Wr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, $l = Object.prototype.hasOwnProperty, ve = (e, t) => $l.call(e, t), se = Array.isArray, yn = (e) => ii(e) === "[object Map]", Ra = (e) => ii(e) === "[object Set]", Es = (e) => ii(e) === "[object Date]", oe = (e) => typeof e == "function", Ee = (e) => typeof e == "string", ft = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", Fa = (e) => (Se(e) || oe(e)) && oe(e.then) && oe(e.catch), ja = Object.prototype.toString, ii = (e) => ja.call(e), Il = (e) => ii(e).slice(8, -1), Di = (e) => ii(e) === "[object Object]", Kr = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zn = /* @__PURE__ */ Hr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Nl = /-\w/g, De = zi(
  (e) => e.replace(Nl, (t) => t.slice(1).toUpperCase())
), El = /\B([A-Z])/g, tt = zi(
  (e) => e.replace(El, "-$1").toLowerCase()
), qi = zi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xi = zi(
  (e) => e ? `on${qi(e)}` : ""
), kt = (e, t) => !Object.is(e, t), er = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, La = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Ol = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Os = (e) => {
  const t = Ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ps;
const Ui = () => Ps || (Ps = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ri(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = Ee(i) ? Fl(i) : ri(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Ee(e) || Se(e))
    return e;
}
const Pl = /;(?![^(]*\))/g, Ml = /:([^]+)/, Rl = /\/\*[^]*?\*\//g;
function Fl(e) {
  const t = {};
  return e.replace(Rl, "").split(Pl).forEach((n) => {
    if (n) {
      const i = n.split(Ml);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Xe(e) {
  let t = "";
  if (Ee(e))
    t = e;
  else if (se(e))
    for (let n = 0; n < e.length; n++) {
      const i = Xe(e[n]);
      i && (t += i + " ");
    }
  else if (Se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const jl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ll = /* @__PURE__ */ Hr(jl);
function Da(e) {
  return !!e || e === "";
}
function Dl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Gr(e[i], t[i]);
  return n;
}
function Gr(e, t) {
  if (e === t) return !0;
  let n = Es(e), i = Es(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = ft(e), i = ft(t), n || i)
    return e === t;
  if (n = se(e), i = se(t), n || i)
    return n && i ? Dl(e, t) : !1;
  if (n = Se(e), i = Se(t), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !Gr(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const za = (e) => !!(e && e.__v_isRef === !0), L = (e) => Ee(e) ? e : e == null ? "" : se(e) || Se(e) && (e.toString === ja || !oe(e.toString)) ? za(e) ? L(e.value) : JSON.stringify(e, qa, 2) : String(e), qa = (e, t) => za(t) ? qa(e, t.value) : yn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[tr(i, s) + " =>"] = r, n),
    {}
  )
} : Ra(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => tr(n))
} : ft(t) ? tr(t) : Se(t) && !se(t) && !Di(t) ? String(t) : t, tr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qe;
class zl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && qe && (qe.active ? (this.parent = qe, this.index = (qe.scopes || (qe.scopes = [])).push(
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
      const n = qe;
      try {
        return qe = this, t();
      } finally {
        qe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = qe, qe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (qe === this)
        qe = this.prevScope;
      else {
        let t = qe;
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
function ql() {
  return qe;
}
let $e;
const nr = /* @__PURE__ */ new WeakSet();
class Ua {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, qe && (qe.active ? qe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, nr.has(this) && (nr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ba(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ms(this), Za(this);
    const t = $e, n = dt;
    $e = this, dt = !0;
    try {
      return this.fn();
    } finally {
      Ha(this), $e = t, dt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Jr(t);
      this.deps = this.depsTail = void 0, Ms(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? nr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    mr(this) && this.run();
  }
  get dirty() {
    return mr(this);
  }
}
let Va = 0, qn, Un;
function Ba(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Un, Un = e;
    return;
  }
  e.next = qn, qn = e;
}
function Yr() {
  Va++;
}
function Qr() {
  if (--Va > 0)
    return;
  if (Un) {
    let t = Un;
    for (Un = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; qn; ) {
    let t = qn;
    for (qn = void 0; t; ) {
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
function Za(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ha(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const r = i.prevDep;
    i.version === -1 ? (i === n && (n = r), Jr(i), Ul(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r;
  }
  e.deps = t, e.depsTail = n;
}
function mr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wa(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wa(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Hn) || (e.globalVersion = Hn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !mr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = $e, i = dt;
  $e = e, dt = !0;
  try {
    Za(e);
    const r = e.fn(e._value);
    (t.version === 0 || kt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    $e = n, dt = i, Ha(e), e.flags &= -3;
  }
}
function Jr(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: r } = e;
  if (i && (i.nextSub = r, e.prevSub = void 0), r && (r.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Jr(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ul(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let dt = !0;
const Ka = [];
function Ft() {
  Ka.push(dt), dt = !1;
}
function jt() {
  const e = Ka.pop();
  dt = e === void 0 ? !0 : e;
}
function Ms(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = $e;
    $e = void 0;
    try {
      t();
    } finally {
      $e = n;
    }
  }
}
let Hn = 0;
class Vl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!$e || !dt || $e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== $e)
      n = this.activeLink = new Vl($e, this), $e.deps ? (n.prevDep = $e.depsTail, $e.depsTail.nextDep = n, $e.depsTail = n) : $e.deps = $e.depsTail = n, Ga(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = $e.depsTail, n.nextDep = void 0, $e.depsTail.nextDep = n, $e.depsTail = n, $e.deps === n && ($e.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Hn++, this.notify(t);
  }
  notify(t) {
    Yr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Qr();
    }
  }
}
function Ga(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Ga(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const gr = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ Symbol(
  ""
), yr = /* @__PURE__ */ Symbol(
  ""
), Wn = /* @__PURE__ */ Symbol(
  ""
);
function Be(e, t, n) {
  if (dt && $e) {
    let i = gr.get(e);
    i || gr.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || (i.set(n, r = new Xr()), r.map = i, r.key = n), r.track();
  }
}
function Ot(e, t, n, i, r, s) {
  const a = gr.get(e);
  if (!a) {
    Hn++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Yr(), t === "clear")
    a.forEach(o);
  else {
    const l = se(e), c = l && Kr(n);
    if (l && n === "length") {
      const u = Number(i);
      a.forEach((d, f) => {
        (f === "length" || f === Wn || !ft(f) && f >= u) && o(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), c && o(a.get(Wn)), t) {
        case "add":
          l ? c && o(a.get("length")) : (o(a.get(nn)), yn(e) && o(a.get(yr)));
          break;
        case "delete":
          l || (o(a.get(nn)), yn(e) && o(a.get(yr)));
          break;
        case "set":
          yn(e) && o(a.get(nn));
          break;
      }
  }
  Qr();
}
function dn(e) {
  const t = /* @__PURE__ */ ye(e);
  return t === e ? t : (Be(t, "iterate", Wn), /* @__PURE__ */ st(e) ? t : t.map(pt));
}
function Vi(e) {
  return Be(e = /* @__PURE__ */ ye(e), "iterate", Wn), e;
}
function _t(e, t) {
  return /* @__PURE__ */ Lt(e) ? wn(/* @__PURE__ */ rn(e) ? pt(t) : t) : pt(t);
}
const Bl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ir(this, Symbol.iterator, (e) => _t(this, e));
  },
  concat(...e) {
    return dn(this).concat(
      ...e.map((t) => se(t) ? dn(t) : t)
    );
  },
  entries() {
    return ir(this, "entries", (e) => (e[1] = _t(this, e[1]), e));
  },
  every(e, t) {
    return $t(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return $t(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => _t(this, i)),
      arguments
    );
  },
  find(e, t) {
    return $t(
      this,
      "find",
      e,
      t,
      (n) => _t(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return $t(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return $t(
      this,
      "findLast",
      e,
      t,
      (n) => _t(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return $t(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return $t(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return rr(this, "includes", e);
  },
  indexOf(...e) {
    return rr(this, "indexOf", e);
  },
  join(e) {
    return dn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return rr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return $t(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Nn(this, "pop");
  },
  push(...e) {
    return Nn(this, "push", e);
  },
  reduce(e, ...t) {
    return Rs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Rs(this, "reduceRight", e, t);
  },
  shift() {
    return Nn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return $t(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Nn(this, "splice", e);
  },
  toReversed() {
    return dn(this).toReversed();
  },
  toSorted(e) {
    return dn(this).toSorted(e);
  },
  toSpliced(...e) {
    return dn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Nn(this, "unshift", e);
  },
  values() {
    return ir(this, "values", (e) => _t(this, e));
  }
};
function ir(e, t, n) {
  const i = Vi(e), r = i[t]();
  return i !== e && !/* @__PURE__ */ st(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const Zl = Array.prototype;
function $t(e, t, n, i, r, s) {
  const a = Vi(e), o = a !== e && !/* @__PURE__ */ st(e), l = a[t];
  if (l !== Zl[t]) {
    const d = l.apply(e, s);
    return o ? pt(d) : d;
  }
  let c = n;
  a !== e && (o ? c = function(d, f) {
    return n.call(this, _t(e, d), f, e);
  } : n.length > 2 && (c = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const u = l.call(a, c, i);
  return o && r ? r(u) : u;
}
function Rs(e, t, n, i) {
  const r = Vi(e), s = r !== e && !/* @__PURE__ */ st(e);
  let a = n, o = !1;
  r !== e && (s ? (o = i.length === 0, a = function(c, u, d) {
    return o && (o = !1, c = _t(e, c)), n.call(this, c, _t(e, u), d, e);
  }) : n.length > 3 && (a = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const l = r[t](a, ...i);
  return o ? _t(e, l) : l;
}
function rr(e, t, n) {
  const i = /* @__PURE__ */ ye(e);
  Be(i, "iterate", Wn);
  const r = i[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ ns(n[0]) ? (n[0] = /* @__PURE__ */ ye(n[0]), i[t](...n)) : r;
}
function Nn(e, t, n = []) {
  Ft(), Yr();
  const i = (/* @__PURE__ */ ye(e))[t].apply(e, n);
  return Qr(), jt(), i;
}
const Hl = /* @__PURE__ */ Hr("__proto__,__v_isRef,__isVue"), Ya = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ft)
);
function Wl(e) {
  ft(e) || (e = String(e));
  const t = /* @__PURE__ */ ye(this);
  return Be(t, "has", e), t.hasOwnProperty(e);
}
class Qa {
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
      return i === (r ? s ? ic : to : s ? eo : Xa).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const a = se(t);
    if (!r) {
      let l;
      if (a && (l = Bl[n]))
        return l;
      if (n === "hasOwnProperty")
        return Wl;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ He(t) ? t : i
    );
    if ((ft(n) ? Ya.has(n) : Hl(n)) || (r || Be(t, "get", n), s))
      return o;
    if (/* @__PURE__ */ He(o)) {
      const l = a && Kr(n) ? o : o.value;
      return r && Se(l) ? /* @__PURE__ */ br(l) : l;
    }
    return Se(o) ? r ? /* @__PURE__ */ br(o) : /* @__PURE__ */ rt(o) : o;
  }
}
class Ja extends Qa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    const a = se(t) && Kr(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Lt(s);
      if (!/* @__PURE__ */ st(i) && !/* @__PURE__ */ Lt(i) && (s = /* @__PURE__ */ ye(s), i = /* @__PURE__ */ ye(i)), !a && /* @__PURE__ */ He(s) && !/* @__PURE__ */ He(i))
        return c || (s.value = i), !0;
    }
    const o = a ? Number(n) < t.length : ve(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ He(t) ? t : r
    );
    return t === /* @__PURE__ */ ye(r) && (o ? kt(i, s) && Ot(t, "set", n, i) : Ot(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = ve(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && i && Ot(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!ft(n) || !Ya.has(n)) && Be(t, "has", n), i;
  }
  ownKeys(t) {
    return Be(
      t,
      "iterate",
      se(t) ? "length" : nn
    ), Reflect.ownKeys(t);
  }
}
class Kl extends Qa {
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
const Gl = /* @__PURE__ */ new Ja(), Yl = /* @__PURE__ */ new Kl(), Ql = /* @__PURE__ */ new Ja(!0);
const vr = (e) => e, ci = (e) => Reflect.getPrototypeOf(e);
function Jl(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = /* @__PURE__ */ ye(r), a = yn(s), o = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = r[e](...i), u = n ? vr : t ? wn : pt;
    return !t && Be(
      s,
      "iterate",
      l ? yr : nn
    ), Pe(
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
function ui(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xl(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ ye(s), o = /* @__PURE__ */ ye(r);
      e || (kt(r, o) && Be(a, "get", r), Be(a, "get", o));
      const { has: l } = ci(a), c = t ? vr : e ? wn : pt;
      if (l.call(a, r))
        return c(s.get(r));
      if (l.call(a, o))
        return c(s.get(o));
      s !== a && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Be(/* @__PURE__ */ ye(r), "iterate", nn), r.size;
    },
    has(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ ye(s), o = /* @__PURE__ */ ye(r);
      return e || (kt(r, o) && Be(a, "has", r), Be(a, "has", o)), r === o ? s.has(r) : s.has(r) || s.has(o);
    },
    forEach(r, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ ye(o), c = t ? vr : e ? wn : pt;
      return !e && Be(l, "iterate", nn), o.forEach((u, d) => r.call(s, c(u), c(d), a));
    }
  };
  return Pe(
    n,
    e ? {
      add: ui("add"),
      set: ui("set"),
      delete: ui("delete"),
      clear: ui("clear")
    } : {
      add(r) {
        const s = /* @__PURE__ */ ye(this), a = ci(s), o = /* @__PURE__ */ ye(r), l = !t && !/* @__PURE__ */ st(r) && !/* @__PURE__ */ Lt(r) ? o : r;
        return a.has.call(s, l) || kt(r, l) && a.has.call(s, r) || kt(o, l) && a.has.call(s, o) || (s.add(l), Ot(s, "add", l, l)), this;
      },
      set(r, s) {
        !t && !/* @__PURE__ */ st(s) && !/* @__PURE__ */ Lt(s) && (s = /* @__PURE__ */ ye(s));
        const a = /* @__PURE__ */ ye(this), { has: o, get: l } = ci(a);
        let c = o.call(a, r);
        c || (r = /* @__PURE__ */ ye(r), c = o.call(a, r));
        const u = l.call(a, r);
        return a.set(r, s), c ? kt(s, u) && Ot(a, "set", r, s) : Ot(a, "add", r, s), this;
      },
      delete(r) {
        const s = /* @__PURE__ */ ye(this), { has: a, get: o } = ci(s);
        let l = a.call(s, r);
        l || (r = /* @__PURE__ */ ye(r), l = a.call(s, r)), o && o.call(s, r);
        const c = s.delete(r);
        return l && Ot(s, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ ye(this), s = r.size !== 0, a = r.clear();
        return s && Ot(
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
    n[r] = Jl(r, e, t);
  }), n;
}
function es(e, t) {
  const n = Xl(e, t);
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    ve(n, r) && r in i ? n : i,
    r,
    s
  );
}
const ec = {
  get: /* @__PURE__ */ es(!1, !1)
}, tc = {
  get: /* @__PURE__ */ es(!1, !0)
}, nc = {
  get: /* @__PURE__ */ es(!0, !1)
};
const Xa = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap(), to = /* @__PURE__ */ new WeakMap(), ic = /* @__PURE__ */ new WeakMap();
function rc(e) {
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
function rt(e) {
  return /* @__PURE__ */ Lt(e) ? e : ts(
    e,
    !1,
    Gl,
    ec,
    Xa
  );
}
// @__NO_SIDE_EFFECTS__
function sc(e) {
  return ts(
    e,
    !1,
    Ql,
    tc,
    eo
  );
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  return ts(
    e,
    !0,
    Yl,
    nc,
    to
  );
}
function ts(e, t, n, i, r) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = rc(Il(e));
  if (a === 0)
    return e;
  const o = new Proxy(
    e,
    a === 2 ? i : n
  );
  return r.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
  return /* @__PURE__ */ Lt(e) ? /* @__PURE__ */ rn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ye(t) : e;
}
function ac(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && La(e, "__v_skip", !0), e;
}
const pt = (e) => Se(e) ? /* @__PURE__ */ rt(e) : e, wn = (e) => Se(e) ? /* @__PURE__ */ br(e) : e;
// @__NO_SIDE_EFFECTS__
function He(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return oc(e, !1);
}
function oc(e, t) {
  return /* @__PURE__ */ He(e) ? e : new lc(e, t);
}
class lc {
  constructor(t, n) {
    this.dep = new Xr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ye(t), this._value = n ? t : pt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ st(t) || /* @__PURE__ */ Lt(t);
    t = i ? t : /* @__PURE__ */ ye(t), kt(t, n) && (this._rawValue = t, this._value = i ? t : pt(t), this.dep.trigger());
  }
}
function N(e) {
  return /* @__PURE__ */ He(e) ? e.value : e;
}
const cc = {
  get: (e, t, n) => t === "__v_raw" ? e : N(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return /* @__PURE__ */ He(r) && !/* @__PURE__ */ He(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function no(e) {
  return /* @__PURE__ */ rn(e) ? e : new Proxy(e, cc);
}
class uc {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Xr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    $e !== this)
      return Ba(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Wa(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function dc(e, t, n = !1) {
  let i, r;
  return oe(e) ? i = e : (i = e.get, r = e.set), new uc(i, r, n);
}
const di = {}, mi = /* @__PURE__ */ new WeakMap();
let en;
function fc(e, t = !1, n = en) {
  if (n) {
    let i = mi.get(n);
    i || mi.set(n, i = []), i.push(e);
  }
}
function pc(e, t, n = Ie) {
  const { immediate: i, deep: r, once: s, scheduler: a, augmentJob: o, call: l } = n, c = (O) => r ? O : /* @__PURE__ */ st(O) || r === !1 || r === 0 ? Wt(O, 1) : Wt(O);
  let u, d, f, m, g = !1, y = !1;
  if (/* @__PURE__ */ He(e) ? (d = () => e.value, g = /* @__PURE__ */ st(e)) : /* @__PURE__ */ rn(e) ? (d = () => c(e), g = !0) : se(e) ? (y = !0, g = e.some((O) => /* @__PURE__ */ rn(O) || /* @__PURE__ */ st(O)), d = () => e.map((O) => {
    if (/* @__PURE__ */ He(O))
      return O.value;
    if (/* @__PURE__ */ rn(O))
      return c(O);
    if (oe(O))
      return l ? l(O, 2) : O();
  })) : oe(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (f) {
      Ft();
      try {
        f();
      } finally {
        jt();
      }
    }
    const O = en;
    en = u;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      en = O;
    }
  } : d = St, t && r) {
    const O = d, Y = r === !0 ? 1 / 0 : r;
    d = () => Wt(O(), Y);
  }
  const b = ql(), I = () => {
    u.stop(), b && b.active && Wr(b.effects, u);
  };
  if (s && t) {
    const O = t;
    t = (...Y) => {
      O(...Y), I();
    };
  }
  let w = y ? new Array(e.length).fill(di) : di;
  const U = (O) => {
    if (!(!(u.flags & 1) || !u.dirty && !O))
      if (t) {
        const Y = u.run();
        if (r || g || (y ? Y.some((D, Q) => kt(D, w[Q])) : kt(Y, w))) {
          f && f();
          const D = en;
          en = u;
          try {
            const Q = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              w === di ? void 0 : y && w[0] === di ? [] : w,
              m
            ];
            w = Y, l ? l(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            en = D;
          }
        }
      } else
        u.run();
  };
  return o && o(U), u = new Ua(d), u.scheduler = a ? () => a(U, !1) : U, m = (O) => fc(O, !1, u), f = u.onStop = () => {
    const O = mi.get(u);
    if (O) {
      if (l)
        l(O, 4);
      else
        for (const Y of O) Y();
      mi.delete(u);
    }
  }, t ? i ? U(!0) : w = u.run() : a ? a(U.bind(null, !0), !0) : u.run(), I.pause = u.pause.bind(u), I.resume = u.resume.bind(u), I.stop = I, I;
}
function Wt(e, t = 1 / 0, n) {
  if (t <= 0 || !Se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ He(e))
    Wt(e.value, t, n);
  else if (se(e))
    for (let i = 0; i < e.length; i++)
      Wt(e[i], t, n);
  else if (Ra(e) || yn(e))
    e.forEach((i) => {
      Wt(i, t, n);
    });
  else if (Di(e)) {
    for (const i in e)
      Wt(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Wt(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function si(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (r) {
    Bi(r, t, n);
  }
}
function ht(e, t, n, i) {
  if (oe(e)) {
    const r = si(e, t, n, i);
    return r && Fa(r) && r.catch((s) => {
      Bi(s, t, n);
    }), r;
  }
  if (se(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(ht(e[s], t, n, i));
    return r;
  }
}
function Bi(e, t, n, i = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Ie;
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
      Ft(), si(s, null, 10, [
        e,
        l,
        c
      ]), jt();
      return;
    }
  }
  hc(e, n, r, i, a);
}
function hc(e, t, n, i = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Ge = [];
let xt = -1;
const vn = [];
let Zt = null, hn = 0;
const io = /* @__PURE__ */ Promise.resolve();
let gi = null;
function Zi(e) {
  const t = gi || io;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function mc(e) {
  let t = xt + 1, n = Ge.length;
  for (; t < n; ) {
    const i = t + n >>> 1, r = Ge[i], s = Kn(r);
    s < e || s === e && r.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function is(e) {
  if (!(e.flags & 1)) {
    const t = Kn(e), n = Ge[Ge.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kn(n) ? Ge.push(e) : Ge.splice(mc(t), 0, e), e.flags |= 1, ro();
  }
}
function ro() {
  gi || (gi = io.then(ao));
}
function gc(e) {
  se(e) ? vn.push(...e) : Zt && e.id === -1 ? Zt.splice(hn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1), ro();
}
function Fs(e, t, n = xt + 1) {
  for (; n < Ge.length; n++) {
    const i = Ge[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Ge.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function so(e) {
  if (vn.length) {
    const t = [...new Set(vn)].sort(
      (n, i) => Kn(n) - Kn(i)
    );
    if (vn.length = 0, Zt) {
      Zt.push(...t);
      return;
    }
    for (Zt = t, hn = 0; hn < Zt.length; hn++) {
      const n = Zt[hn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Zt = null, hn = 0;
  }
}
const Kn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ao(e) {
  try {
    for (xt = 0; xt < Ge.length; xt++) {
      const t = Ge[xt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), si(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xt < Ge.length; xt++) {
      const t = Ge[xt];
      t && (t.flags &= -2);
    }
    xt = -1, Ge.length = 0, so(), gi = null, (Ge.length || vn.length) && ao();
  }
}
let Ye = null, oo = null;
function yi(e) {
  const t = Ye;
  return Ye = e, oo = e && e.type.__scopeId || null, t;
}
function lo(e, t = Ye, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && Ks(-1);
    const s = yi(t);
    let a;
    try {
      a = e(...r);
    } finally {
      yi(s), i._d && Ks(1);
    }
    return a;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Jt(e, t, n, i) {
  const r = e.dirs, s = t && t.dirs;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[i];
    l && (Ft(), ht(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), jt());
  }
}
function xr(e, t) {
  if (Ze) {
    let n = Ze.provides;
    const i = Ze.parent && Ze.parent.provides;
    i === n && (n = Ze.provides = Object.create(i)), n[e] = t;
  }
}
function Gt(e, t, n = !1) {
  const i = Lo();
  if (i || xn) {
    let r = xn ? xn._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(i && i.proxy) : t;
  }
}
const yc = /* @__PURE__ */ Symbol.for("v-scx"), vc = () => Gt(yc);
function Tt(e, t, n) {
  return co(e, t, n);
}
function co(e, t, n = Ie) {
  const { immediate: i, deep: r, flush: s, once: a } = n, o = Pe({}, n), l = t && i || !t && s !== "post";
  let c;
  if (Yn) {
    if (s === "sync") {
      const m = vc();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = St, m.resume = St, m.pause = St, m;
    }
  }
  const u = Ze;
  o.call = (m, g, y) => ht(m, u, g, y);
  let d = !1;
  s === "post" ? o.scheduler = (m) => {
    Je(m, u && u.suspense);
  } : s !== "sync" && (d = !0, o.scheduler = (m, g) => {
    g ? m() : is(m);
  }), o.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const f = pc(e, t, o);
  return Yn && (c ? c.push(f) : l && f()), f;
}
function bc(e, t, n) {
  const i = this.proxy, r = Ee(e) ? e.includes(".") ? uo(i, e) : () => i[e] : e.bind(i, i);
  let s;
  oe(t) ? s = t : (s = t.handler, n = t);
  const a = ai(this), o = co(r, s.bind(i), n);
  return a(), o;
}
function uo(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
const xc = /* @__PURE__ */ Symbol("_vte"), _c = (e) => e.__isTeleport, sr = /* @__PURE__ */ Symbol("_leaveCb");
function rs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, rs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Oe(e, t) {
  return oe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function fo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function js(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const vi = /* @__PURE__ */ new WeakMap();
function Vn(e, t, n, i, r = !1) {
  if (se(e)) {
    e.forEach(
      (y, b) => Vn(
        y,
        t && (se(t) ? t[b] : t),
        n,
        i,
        r
      )
    );
    return;
  }
  if (bn(i) && !r) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Vn(e, t, n, i.component.subTree);
    return;
  }
  const s = i.shapeFlag & 4 ? ds(i.component) : i.el, a = r ? null : s, { i: o, r: l } = e, c = t && t.r, u = o.refs === Ie ? o.refs = {} : o.refs, d = o.setupState, f = /* @__PURE__ */ ye(d), m = d === Ie ? Ma : (y) => js(u, y) ? !1 : ve(f, y), g = (y, b) => !(b && js(u, b));
  if (c != null && c !== l) {
    if (Ls(t), Ee(c))
      u[c] = null, m(c) && (d[c] = null);
    else if (/* @__PURE__ */ He(c)) {
      const y = t;
      g(c, y.k) && (c.value = null), y.k && (u[y.k] = null);
    }
  }
  if (oe(l))
    si(l, o, 12, [a, u]);
  else {
    const y = Ee(l), b = /* @__PURE__ */ He(l);
    if (y || b) {
      const I = () => {
        if (e.f) {
          const w = y ? m(l) ? d[l] : u[l] : g() || !e.k ? l.value : u[e.k];
          if (r)
            se(w) && Wr(w, s);
          else if (se(w))
            w.includes(s) || w.push(s);
          else if (y)
            u[l] = [s], m(l) && (d[l] = u[l]);
          else {
            const U = [s];
            g(l, e.k) && (l.value = U), e.k && (u[e.k] = U);
          }
        } else y ? (u[l] = a, m(l) && (d[l] = a)) : b && (g(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const w = () => {
          I(), vi.delete(e);
        };
        w.id = -1, vi.set(e, w), Je(w, n);
      } else
        Ls(e), I();
    }
  }
}
function Ls(e) {
  const t = vi.get(e);
  t && (t.flags |= 8, vi.delete(e));
}
Ui().requestIdleCallback;
Ui().cancelIdleCallback;
const bn = (e) => !!e.type.__asyncLoader, po = (e) => e.type.__isKeepAlive;
function wc(e, t) {
  ho(e, "a", t);
}
function kc(e, t) {
  ho(e, "da", t);
}
function ho(e, t, n = Ze) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Hi(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      po(r.parent.vnode) && Sc(i, t, n, r), r = r.parent;
  }
}
function Sc(e, t, n, i) {
  const r = Hi(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  go(() => {
    Wr(i[t], r);
  }, n);
}
function Hi(e, t, n = Ze, i = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      Ft();
      const o = ai(n), l = ht(t, n, e, a);
      return o(), jt(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const qt = (e) => (t, n = Ze) => {
  (!Yn || e === "sp") && Hi(e, (...i) => t(...i), n);
}, Tc = qt("bm"), ss = qt("m"), Ac = qt(
  "bu"
), Cc = qt("u"), mo = qt(
  "bum"
), go = qt("um"), $c = qt(
  "sp"
), Ic = qt("rtg"), Nc = qt("rtc");
function Ec(e, t = Ze) {
  Hi("ec", e, t);
}
const Oc = "components", yo = /* @__PURE__ */ Symbol.for("v-ndc");
function Pc(e) {
  return Ee(e) ? Mc(Oc, e, !1) || e : e || yo;
}
function Mc(e, t, n = !0, i = !1) {
  const r = Ye || Ze;
  if (r) {
    const s = r.type;
    {
      const o = bu(
        s,
        !1
      );
      if (o && (o === t || o === De(t) || o === qi(De(t))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ds(r[e] || s[e], t) || // global registration
      Ds(r.appContext[e], t)
    );
    return !a && i ? s : a;
  }
}
function Ds(e, t) {
  return e && (e[t] || e[De(t)] || e[qi(De(t))]);
}
function Le(e, t, n, i) {
  let r;
  const s = n, a = se(e);
  if (a || Ee(e)) {
    const o = a && /* @__PURE__ */ rn(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ st(e), c = /* @__PURE__ */ Lt(e), e = Vi(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        l ? c ? wn(pt(e[u])) : pt(e[u]) : e[u],
        u,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, s);
  } else if (Se(e))
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
function Rc(e, t, n = {}, i, r) {
  if (Ye.ce || Ye.parent && bn(Ye.parent) && Ye.parent.ce) {
    const c = Object.keys(n).length > 0;
    return v(), je(
      ue,
      null,
      [at("slot", n, i)],
      c ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), v();
  const a = s && vo(s(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = je(
    ue,
    {
      key: (o && !ft(o) ? o : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && i ? "_fb" : "")
    },
    a || [],
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function vo(e) {
  return e.some((t) => ls(t) ? !(t.type === Dt || t.type === ue && !vo(t.children)) : !0) ? e : null;
}
const _r = (e) => e ? Do(e) ? ds(e) : _r(e.parent) : null, Bn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Pe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _r(e.parent),
    $root: (e) => _r(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      is(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zi.bind(e.proxy)),
    $watch: (e) => bc.bind(e)
  })
), ar = (e, t) => e !== Ie && !e.__isScriptSetup && ve(e, t), Fc = {
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
        if (ar(i, t))
          return a[t] = 1, i[t];
        if (r !== Ie && ve(r, t))
          return a[t] = 2, r[t];
        if (ve(s, t))
          return a[t] = 3, s[t];
        if (n !== Ie && ve(n, t))
          return a[t] = 4, n[t];
        wr && (a[t] = 0);
      }
    }
    const c = Bn[t];
    let u, d;
    if (c)
      return t === "$attrs" && Be(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ie && ve(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, ve(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: r, ctx: s } = e;
    return ar(r, t) ? (r[t] = n, !0) : i !== Ie && ve(i, t) ? (i[t] = n, !0) : ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, props: s, type: a }
  }, o) {
    let l;
    return !!(n[o] || e !== Ie && o[0] !== "$" && ve(e, o) || ar(t, o) || ve(s, o) || ve(i, o) || ve(Bn, o) || ve(r.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function zs(e) {
  return se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let wr = !0;
function jc(e) {
  const t = xo(e), n = e.proxy, i = e.ctx;
  wr = !1, t.beforeCreate && qs(t.beforeCreate, e, "bc");
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
    deactivated: b,
    beforeDestroy: I,
    beforeUnmount: w,
    destroyed: U,
    unmounted: O,
    render: Y,
    renderTracked: D,
    renderTriggered: Q,
    errorCaptured: M,
    serverPrefetch: ae,
    // public API
    expose: be,
    inheritAttrs: Ae,
    // assets
    components: A,
    directives: P,
    filters: X
  } = t;
  if (c && Lc(c, i, null), a)
    for (const ge in a) {
      const _ = a[ge];
      oe(_) && (i[ge] = _.bind(n));
    }
  if (r) {
    const ge = r.call(n, n);
    Se(ge) && (e.data = /* @__PURE__ */ rt(ge));
  }
  if (wr = !0, s)
    for (const ge in s) {
      const _ = s[ge], H = oe(_) ? _.bind(n, n) : oe(_.get) ? _.get.bind(n, n) : St, fe = !oe(_) && oe(_.set) ? _.set.bind(n) : St, _e = K({
        get: H,
        set: fe
      });
      Object.defineProperty(i, ge, {
        enumerable: !0,
        configurable: !0,
        get: () => _e.value,
        set: (Ne) => _e.value = Ne
      });
    }
  if (o)
    for (const ge in o)
      bo(o[ge], i, n, ge);
  if (l) {
    const ge = oe(l) ? l.call(n) : l;
    Reflect.ownKeys(ge).forEach((_) => {
      xr(_, ge[_]);
    });
  }
  u && qs(u, e, "c");
  function xe(ge, _) {
    se(_) ? _.forEach((H) => ge(H.bind(n))) : _ && ge(_.bind(n));
  }
  if (xe(Tc, d), xe(ss, f), xe(Ac, m), xe(Cc, g), xe(wc, y), xe(kc, b), xe(Ec, M), xe(Nc, D), xe(Ic, Q), xe(mo, w), xe(go, O), xe($c, ae), se(be))
    if (be.length) {
      const ge = e.exposed || (e.exposed = {});
      be.forEach((_) => {
        Object.defineProperty(ge, _, {
          get: () => n[_],
          set: (H) => n[_] = H,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === St && (e.render = Y), Ae != null && (e.inheritAttrs = Ae), A && (e.components = A), P && (e.directives = P), ae && fo(e);
}
function Lc(e, t, n = St) {
  se(e) && (e = kr(e));
  for (const i in e) {
    const r = e[i];
    let s;
    Se(r) ? "default" in r ? s = Gt(
      r.from || i,
      r.default,
      !0
    ) : s = Gt(r.from || i) : s = Gt(r), /* @__PURE__ */ He(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[i] = s;
  }
}
function qs(e, t, n) {
  ht(
    se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function bo(e, t, n, i) {
  let r = i.includes(".") ? uo(n, i) : () => n[i];
  if (Ee(e)) {
    const s = t[e];
    oe(s) && Tt(r, s);
  } else if (oe(e))
    Tt(r, e.bind(n));
  else if (Se(e))
    if (se(e))
      e.forEach((s) => bo(s, t, n, i));
    else {
      const s = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(s) && Tt(r, s, e);
    }
}
function xo(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, o = s.get(t);
  let l;
  return o ? l = o : !r.length && !n && !i ? l = t : (l = {}, r.length && r.forEach(
    (c) => bi(l, c, a, !0)
  ), bi(l, t, a)), Se(t) && s.set(t, l), l;
}
function bi(e, t, n, i = !1) {
  const { mixins: r, extends: s } = t;
  s && bi(e, s, n, !0), r && r.forEach(
    (a) => bi(e, a, n, !0)
  );
  for (const a in t)
    if (!(i && a === "expose")) {
      const o = Dc[a] || n && n[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const Dc = {
  data: Us,
  props: Vs,
  emits: Vs,
  // objects
  methods: Rn,
  computed: Rn,
  // lifecycle
  beforeCreate: We,
  created: We,
  beforeMount: We,
  mounted: We,
  beforeUpdate: We,
  updated: We,
  beforeDestroy: We,
  beforeUnmount: We,
  destroyed: We,
  unmounted: We,
  activated: We,
  deactivated: We,
  errorCaptured: We,
  serverPrefetch: We,
  // assets
  components: Rn,
  directives: Rn,
  // watch
  watch: qc,
  // provide / inject
  provide: Us,
  inject: zc
};
function Us(e, t) {
  return t ? e ? function() {
    return Pe(
      oe(e) ? e.call(this, this) : e,
      oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function zc(e, t) {
  return Rn(kr(e), kr(t));
}
function kr(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function We(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rn(e, t) {
  return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Vs(e, t) {
  return e ? se(e) && se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pe(
    /* @__PURE__ */ Object.create(null),
    zs(e),
    zs(t ?? {})
  ) : t;
}
function qc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = We(e[i], t[i]);
  return n;
}
function _o() {
  return {
    app: null,
    config: {
      isNativeTag: Ma,
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
let Uc = 0;
function Vc(e, t) {
  return function(i, r = null) {
    oe(i) || (i = Pe({}, i)), r != null && !Se(r) && (r = null);
    const s = _o(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = s.app = {
      _uid: Uc++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: _u,
      get config() {
        return s.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return a.has(u) || (u && oe(u.install) ? (a.add(u), u.install(c, ...d)) : oe(u) && (a.add(u), u(c, ...d))), c;
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
          const m = c._ceVNode || at(i, r);
          return m.appContext = s, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, u, f), l = !0, c._container = u, u.__vue_app__ = c, ds(m.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (ht(
          o,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return s.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = xn;
        xn = c;
        try {
          return u();
        } finally {
          xn = d;
        }
      }
    };
    return c;
  };
}
let xn = null;
const Bc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${De(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function Zc(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ie;
  let r = n;
  const s = t.startsWith("update:"), a = s && Bc(i, t.slice(7));
  a && (a.trim && (r = n.map((u) => Ee(u) ? u.trim() : u)), a.number && (r = n.map(Ol)));
  let o, l = i[o = Xi(t)] || // also try camelCase event handler (#2249)
  i[o = Xi(De(t))];
  !l && s && (l = i[o = Xi(tt(t))]), l && ht(
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
    e.emitted[o] = !0, ht(
      c,
      e,
      6,
      r
    );
  }
}
const Hc = /* @__PURE__ */ new WeakMap();
function wo(e, t, n = !1) {
  const i = n ? Hc : t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let a = {}, o = !1;
  if (!oe(e)) {
    const l = (c) => {
      const u = wo(c, t, !0);
      u && (o = !0, Pe(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !o ? (Se(e) && i.set(e, null), null) : (se(s) ? s.forEach((l) => a[l] = null) : Pe(a, s), Se(e) && i.set(e, a), a);
}
function Wi(e, t) {
  return !e || !ji(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, tt(t)) || ve(e, t));
}
function Bs(e) {
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
  } = e, b = yi(e);
  let I, w;
  try {
    if (n.shapeFlag & 4) {
      const O = r || i, Y = O;
      I = wt(
        c.call(
          Y,
          O,
          u,
          d,
          m,
          f,
          g
        )
      ), w = o;
    } else {
      const O = t;
      I = wt(
        O.length > 1 ? O(
          d,
          { attrs: o, slots: a, emit: l }
        ) : O(
          d,
          null
        )
      ), w = t.props ? o : Wc(o);
    }
  } catch (O) {
    Zn.length = 0, Bi(O, e, 1), I = at(Dt);
  }
  let U = I;
  if (w && y !== !1) {
    const O = Object.keys(w), { shapeFlag: Y } = U;
    O.length && Y & 7 && (s && O.some(Li) && (w = Kc(
      w,
      s
    )), U = kn(U, w, !1, !0));
  }
  return n.dirs && (U = kn(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && rs(U, n.transition), I = U, yi(b), I;
}
const Wc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ji(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Kc = (e, t) => {
  const n = {};
  for (const i in e)
    (!Li(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Gc(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: a, children: o, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Zs(i, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (ko(a, i, f) && !Wi(c, f))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : i === a ? !1 : i ? a ? Zs(i, a, c) : !0 : !!a;
  return !1;
}
function Zs(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (ko(t, e, s) && !Wi(n, s))
      return !0;
  }
  return !1;
}
function ko(e, t, n) {
  const i = e[n], r = t[n];
  return n === "style" && Se(i) && Se(r) ? !Gr(i, r) : i !== r;
}
function Yc({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = i, e = r), r === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const So = {}, To = () => Object.create(So), Ao = (e) => Object.getPrototypeOf(e) === So;
function Qc(e, t, n, i = !1) {
  const r = {}, s = To();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Co(e, t, r, s);
  for (const a in e.propsOptions[0])
    a in r || (r[a] = void 0);
  n ? e.props = i ? r : /* @__PURE__ */ sc(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Jc(e, t, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, o = /* @__PURE__ */ ye(r), [l] = e.propsOptions;
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
        if (Wi(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (ve(s, f))
            m !== s[f] && (s[f] = m, c = !0);
          else {
            const g = De(f);
            r[g] = Sr(
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
    Co(e, t, r, s) && (c = !0);
    let u;
    for (const d in o)
      (!t || // for camelCase
      !ve(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = tt(d)) === d || !ve(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = Sr(
        l,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (s !== o)
      for (const d in s)
        (!t || !ve(t, d)) && (delete s[d], c = !0);
  }
  c && Ot(e.attrs, "set", "");
}
function Co(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let a = !1, o;
  if (t)
    for (let l in t) {
      if (zn(l))
        continue;
      const c = t[l];
      let u;
      r && ve(r, u = De(l)) ? !s || !s.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : Wi(e.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ ye(n), c = o || Ie;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = Sr(
        r,
        l,
        d,
        c[d],
        e,
        !ve(c, d)
      );
    }
  }
  return a;
}
function Sr(e, t, n, i, r, s) {
  const a = e[n];
  if (a != null) {
    const o = ve(a, "default");
    if (o && i === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && oe(l)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const u = ai(r);
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
    ] && (i === "" || i === tt(n)) && (i = !0));
  }
  return i;
}
const Xc = /* @__PURE__ */ new WeakMap();
function $o(e, t, n = !1) {
  const i = n ? Xc : t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, a = {}, o = [];
  let l = !1;
  if (!oe(e)) {
    const u = (d) => {
      l = !0;
      const [f, m] = $o(d, t, !0);
      Pe(a, f), m && o.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return Se(e) && i.set(e, gn), gn;
  if (se(s))
    for (let u = 0; u < s.length; u++) {
      const d = De(s[u]);
      Hs(d) && (a[d] = Ie);
    }
  else if (s)
    for (const u in s) {
      const d = De(u);
      if (Hs(d)) {
        const f = s[u], m = a[d] = se(f) || oe(f) ? { type: f } : Pe({}, f), g = m.type;
        let y = !1, b = !0;
        if (se(g))
          for (let I = 0; I < g.length; ++I) {
            const w = g[I], U = oe(w) && w.name;
            if (U === "Boolean") {
              y = !0;
              break;
            } else U === "String" && (b = !1);
          }
        else
          y = oe(g) && g.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = y, m[
          1
          /* shouldCastTrue */
        ] = b, (y || ve(m, "default")) && o.push(d);
      }
    }
  const c = [a, o];
  return Se(e) && i.set(e, c), c;
}
function Hs(e) {
  return e[0] !== "$" && !zn(e);
}
const as = (e) => e === "_" || e === "_ctx" || e === "$stable", os = (e) => se(e) ? e.map(wt) : [wt(e)], eu = (e, t, n) => {
  if (t._n)
    return t;
  const i = lo((...r) => os(t(...r)), n);
  return i._c = !1, i;
}, Io = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if (as(r)) continue;
    const s = e[r];
    if (oe(s))
      t[r] = eu(r, s, i);
    else if (s != null) {
      const a = os(s);
      t[r] = () => a;
    }
  }
}, No = (e, t) => {
  const n = os(t);
  e.slots.default = () => n;
}, Eo = (e, t, n) => {
  for (const i in t)
    (n || !as(i)) && (e[i] = t[i]);
}, tu = (e, t, n) => {
  const i = e.slots = To();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Eo(i, t, n), n && La(i, "_", r, !0)) : Io(t, i);
  } else t && No(e, t);
}, nu = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, a = Ie;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? s = !1 : Eo(r, t, n) : (s = !t.$stable, Io(t, r)), a = t;
  } else t && (No(e, t), a = { default: 1 });
  if (s)
    for (const o in r)
      !as(o) && a[o] == null && delete r[o];
}, Je = ou;
function iu(e) {
  return ru(e);
}
function ru(e, t) {
  const n = Ui();
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
    setScopeId: m = St,
    insertStaticContent: g
  } = e, y = (p, h, x, $ = null, T = null, S = null, z = void 0, j = null, F = !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !En(p, h) && ($ = un(p), Ne(p, T, S, !0), p = null), h.patchFlag === -2 && (F = !1, h.dynamicChildren = null);
    const { type: C, ref: ee, shapeFlag: V } = h;
    switch (C) {
      case Ki:
        b(p, h, x, $);
        break;
      case Dt:
        I(p, h, x, $);
        break;
      case lr:
        p == null && w(h, x, $, z);
        break;
      case ue:
        A(
          p,
          h,
          x,
          $,
          T,
          S,
          z,
          j,
          F
        );
        break;
      default:
        V & 1 ? Y(
          p,
          h,
          x,
          $,
          T,
          S,
          z,
          j,
          F
        ) : V & 6 ? P(
          p,
          h,
          x,
          $,
          T,
          S,
          z,
          j,
          F
        ) : (V & 64 || V & 128) && C.process(
          p,
          h,
          x,
          $,
          T,
          S,
          z,
          j,
          F,
          $n
        );
    }
    ee != null && T ? Vn(ee, p && p.ref, S, h || p, !h) : ee == null && p && p.ref != null && Vn(p.ref, null, S, p, !0);
  }, b = (p, h, x, $) => {
    if (p == null)
      i(
        h.el = o(h.children),
        x,
        $
      );
    else {
      const T = h.el = p.el;
      h.children !== p.children && c(T, h.children);
    }
  }, I = (p, h, x, $) => {
    p == null ? i(
      h.el = l(h.children || ""),
      x,
      $
    ) : h.el = p.el;
  }, w = (p, h, x, $) => {
    [p.el, p.anchor] = g(
      p.children,
      h,
      x,
      $,
      p.el,
      p.anchor
    );
  }, U = ({ el: p, anchor: h }, x, $) => {
    let T;
    for (; p && p !== h; )
      T = f(p), i(p, x, $), p = T;
    i(h, x, $);
  }, O = ({ el: p, anchor: h }) => {
    let x;
    for (; p && p !== h; )
      x = f(p), r(p), p = x;
    r(h);
  }, Y = (p, h, x, $, T, S, z, j, F) => {
    if (h.type === "svg" ? z = "svg" : h.type === "math" && (z = "mathml"), p == null)
      D(
        h,
        x,
        $,
        T,
        S,
        z,
        j,
        F
      );
    else {
      const C = p.el && p.el._isVueCE ? p.el : null;
      try {
        C && C._beginPatch(), ae(
          p,
          h,
          T,
          S,
          z,
          j,
          F
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, D = (p, h, x, $, T, S, z, j) => {
    let F, C;
    const { props: ee, shapeFlag: V, transition: J, dirs: re } = p;
    if (F = p.el = a(
      p.type,
      S,
      ee && ee.is,
      ee
    ), V & 8 ? u(F, p.children) : V & 16 && M(
      p.children,
      F,
      null,
      $,
      T,
      or(p, S),
      z,
      j
    ), re && Jt(p, null, $, "created"), Q(F, p, p.scopeId, z, $), ee) {
      for (const Ce in ee)
        Ce !== "value" && !zn(Ce) && s(F, Ce, null, ee[Ce], S, $);
      "value" in ee && s(F, "value", null, ee.value, S), (C = ee.onVnodeBeforeMount) && bt(C, $, p);
    }
    re && Jt(p, null, $, "beforeMount");
    const he = su(T, J);
    he && J.beforeEnter(F), i(F, h, x), ((C = ee && ee.onVnodeMounted) || he || re) && Je(() => {
      try {
        C && bt(C, $, p), he && J.enter(F), re && Jt(p, null, $, "mounted");
      } finally {
      }
    }, T);
  }, Q = (p, h, x, $, T) => {
    if (x && m(p, x), $)
      for (let S = 0; S < $.length; S++)
        m(p, $[S]);
    if (T) {
      let S = T.subTree;
      if (h === S || Ro(S.type) && (S.ssContent === h || S.ssFallback === h)) {
        const z = T.vnode;
        Q(
          p,
          z,
          z.scopeId,
          z.slotScopeIds,
          T.parent
        );
      }
    }
  }, M = (p, h, x, $, T, S, z, j, F = 0) => {
    for (let C = F; C < p.length; C++) {
      const ee = p[C] = j ? Et(p[C]) : wt(p[C]);
      y(
        null,
        ee,
        h,
        x,
        $,
        T,
        S,
        z,
        j
      );
    }
  }, ae = (p, h, x, $, T, S, z) => {
    const j = h.el = p.el;
    let { patchFlag: F, dynamicChildren: C, dirs: ee } = h;
    F |= p.patchFlag & 16;
    const V = p.props || Ie, J = h.props || Ie;
    let re;
    if (x && Xt(x, !1), (re = J.onVnodeBeforeUpdate) && bt(re, x, h, p), ee && Jt(h, p, x, "beforeUpdate"), x && Xt(x, !0), (V.innerHTML && J.innerHTML == null || V.textContent && J.textContent == null) && u(j, ""), C ? be(
      p.dynamicChildren,
      C,
      j,
      x,
      $,
      or(h, T),
      S
    ) : z || _(
      p,
      h,
      j,
      null,
      x,
      $,
      or(h, T),
      S,
      !1
    ), F > 0) {
      if (F & 16)
        Ae(j, V, J, x, T);
      else if (F & 2 && V.class !== J.class && s(j, "class", null, J.class, T), F & 4 && s(j, "style", V.style, J.style, T), F & 8) {
        const he = h.dynamicProps;
        for (let Ce = 0; Ce < he.length; Ce++) {
          const ke = he[Ce], Me = V[ke], ze = J[ke];
          (ze !== Me || ke === "value") && s(j, ke, Me, ze, T, x);
        }
      }
      F & 1 && p.children !== h.children && u(j, h.children);
    } else !z && C == null && Ae(j, V, J, x, T);
    ((re = J.onVnodeUpdated) || ee) && Je(() => {
      re && bt(re, x, h, p), ee && Jt(h, p, x, "updated");
    }, $);
  }, be = (p, h, x, $, T, S, z) => {
    for (let j = 0; j < h.length; j++) {
      const F = p[j], C = h[j], ee = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !En(F, C) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 198) ? d(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      y(
        F,
        C,
        ee,
        null,
        $,
        T,
        S,
        z,
        !0
      );
    }
  }, Ae = (p, h, x, $, T) => {
    if (h !== x) {
      if (h !== Ie)
        for (const S in h)
          !zn(S) && !(S in x) && s(
            p,
            S,
            h[S],
            null,
            T,
            $
          );
      for (const S in x) {
        if (zn(S)) continue;
        const z = x[S], j = h[S];
        z !== j && S !== "value" && s(p, S, j, z, T, $);
      }
      "value" in x && s(p, "value", h.value, x.value, T);
    }
  }, A = (p, h, x, $, T, S, z, j, F) => {
    const C = h.el = p ? p.el : o(""), ee = h.anchor = p ? p.anchor : o("");
    let { patchFlag: V, dynamicChildren: J, slotScopeIds: re } = h;
    re && (j = j ? j.concat(re) : re), p == null ? (i(C, x, $), i(ee, x, $), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      x,
      ee,
      T,
      S,
      z,
      j,
      F
    )) : V > 0 && V & 64 && J && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === J.length ? (be(
      p.dynamicChildren,
      J,
      x,
      T,
      S,
      z,
      j
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || T && h === T.subTree) && Oo(
      p,
      h,
      !0
      /* shallow */
    )) : _(
      p,
      h,
      x,
      ee,
      T,
      S,
      z,
      j,
      F
    );
  }, P = (p, h, x, $, T, S, z, j, F) => {
    h.slotScopeIds = j, p == null ? h.shapeFlag & 512 ? T.ctx.activate(
      h,
      x,
      $,
      z,
      F
    ) : X(
      h,
      x,
      $,
      T,
      S,
      z,
      F
    ) : te(p, h, F);
  }, X = (p, h, x, $, T, S, z) => {
    const j = p.component = hu(
      p,
      $,
      T
    );
    if (po(p) && (j.ctx.renderer = $n), mu(j, !1, z), j.asyncDep) {
      if (T && T.registerDep(j, xe, z), !p.el) {
        const F = j.subTree = at(Dt);
        I(null, F, h, x), p.placeholder = F.el;
      }
    } else
      xe(
        j,
        p,
        h,
        x,
        T,
        S,
        z
      );
  }, te = (p, h, x) => {
    const $ = h.component = p.component;
    if (Gc(p, h, x))
      if ($.asyncDep && !$.asyncResolved) {
        ge($, h, x);
        return;
      } else
        $.next = h, $.update();
    else
      h.el = p.el, $.vnode = h;
  }, xe = (p, h, x, $, T, S, z) => {
    const j = () => {
      if (p.isMounted) {
        let { next: V, bu: J, u: re, parent: he, vnode: Ce } = p;
        {
          const yt = Po(p);
          if (yt) {
            V && (V.el = Ce.el, ge(p, V, z)), yt.asyncDep.then(() => {
              Je(() => {
                p.isUnmounted || C();
              }, T);
            });
            return;
          }
        }
        let ke = V, Me;
        Xt(p, !1), V ? (V.el = Ce.el, ge(p, V, z)) : V = Ce, J && er(J), (Me = V.props && V.props.onVnodeBeforeUpdate) && bt(Me, he, V, Ce), Xt(p, !0);
        const ze = Bs(p), gt = p.subTree;
        p.subTree = ze, y(
          gt,
          ze,
          // parent may have changed if it's in a teleport
          d(gt.el),
          // anchor may have changed if it's in a fragment
          un(gt),
          p,
          T,
          S
        ), V.el = ze.el, ke === null && Yc(p, ze.el), re && Je(re, T), (Me = V.props && V.props.onVnodeUpdated) && Je(
          () => bt(Me, he, V, Ce),
          T
        );
      } else {
        let V;
        const { el: J, props: re } = h, { bm: he, m: Ce, parent: ke, root: Me, type: ze } = p, gt = bn(h);
        Xt(p, !1), he && er(he), !gt && (V = re && re.onVnodeBeforeMount) && bt(V, ke, h), Xt(p, !0);
        {
          Me.ce && Me.ce._hasShadowRoot() && Me.ce._injectChildStyle(
            ze,
            p.parent ? p.parent.type : void 0
          );
          const yt = p.subTree = Bs(p);
          y(
            null,
            yt,
            x,
            $,
            p,
            T,
            S
          ), h.el = yt.el;
        }
        if (Ce && Je(Ce, T), !gt && (V = re && re.onVnodeMounted)) {
          const yt = h;
          Je(
            () => bt(V, ke, yt),
            T
          );
        }
        (h.shapeFlag & 256 || ke && bn(ke.vnode) && ke.vnode.shapeFlag & 256) && p.a && Je(p.a, T), p.isMounted = !0, h = x = $ = null;
      }
    };
    p.scope.on();
    const F = p.effect = new Ua(j);
    p.scope.off();
    const C = p.update = F.run.bind(F), ee = p.job = F.runIfDirty.bind(F);
    ee.i = p, ee.id = p.uid, F.scheduler = () => is(ee), Xt(p, !0), C();
  }, ge = (p, h, x) => {
    h.component = p;
    const $ = p.vnode.props;
    p.vnode = h, p.next = null, Jc(p, h.props, $, x), nu(p, h.children, x), Ft(), Fs(p), jt();
  }, _ = (p, h, x, $, T, S, z, j, F = !1) => {
    const C = p && p.children, ee = p ? p.shapeFlag : 0, V = h.children, { patchFlag: J, shapeFlag: re } = h;
    if (J > 0) {
      if (J & 128) {
        fe(
          C,
          V,
          x,
          $,
          T,
          S,
          z,
          j,
          F
        );
        return;
      } else if (J & 256) {
        H(
          C,
          V,
          x,
          $,
          T,
          S,
          z,
          j,
          F
        );
        return;
      }
    }
    re & 8 ? (ee & 16 && Ve(C, T, S), V !== C && u(x, V)) : ee & 16 ? re & 16 ? fe(
      C,
      V,
      x,
      $,
      T,
      S,
      z,
      j,
      F
    ) : Ve(C, T, S, !0) : (ee & 8 && u(x, ""), re & 16 && M(
      V,
      x,
      $,
      T,
      S,
      z,
      j,
      F
    ));
  }, H = (p, h, x, $, T, S, z, j, F) => {
    p = p || gn, h = h || gn;
    const C = p.length, ee = h.length, V = Math.min(C, ee);
    let J;
    for (J = 0; J < V; J++) {
      const re = h[J] = F ? Et(h[J]) : wt(h[J]);
      y(
        p[J],
        re,
        x,
        null,
        T,
        S,
        z,
        j,
        F
      );
    }
    C > ee ? Ve(
      p,
      T,
      S,
      !0,
      !1,
      V
    ) : M(
      h,
      x,
      $,
      T,
      S,
      z,
      j,
      F,
      V
    );
  }, fe = (p, h, x, $, T, S, z, j, F) => {
    let C = 0;
    const ee = h.length;
    let V = p.length - 1, J = ee - 1;
    for (; C <= V && C <= J; ) {
      const re = p[C], he = h[C] = F ? Et(h[C]) : wt(h[C]);
      if (En(re, he))
        y(
          re,
          he,
          x,
          null,
          T,
          S,
          z,
          j,
          F
        );
      else
        break;
      C++;
    }
    for (; C <= V && C <= J; ) {
      const re = p[V], he = h[J] = F ? Et(h[J]) : wt(h[J]);
      if (En(re, he))
        y(
          re,
          he,
          x,
          null,
          T,
          S,
          z,
          j,
          F
        );
      else
        break;
      V--, J--;
    }
    if (C > V) {
      if (C <= J) {
        const re = J + 1, he = re < ee ? h[re].el : $;
        for (; C <= J; )
          y(
            null,
            h[C] = F ? Et(h[C]) : wt(h[C]),
            x,
            he,
            T,
            S,
            z,
            j,
            F
          ), C++;
      }
    } else if (C > J)
      for (; C <= V; )
        Ne(p[C], T, S, !0), C++;
    else {
      const re = C, he = C, Ce = /* @__PURE__ */ new Map();
      for (C = he; C <= J; C++) {
        const et = h[C] = F ? Et(h[C]) : wt(h[C]);
        et.key != null && Ce.set(et.key, C);
      }
      let ke, Me = 0;
      const ze = J - he + 1;
      let gt = !1, yt = 0;
      const In = new Array(ze);
      for (C = 0; C < ze; C++) In[C] = 0;
      for (C = re; C <= V; C++) {
        const et = p[C];
        if (Me >= ze) {
          Ne(et, T, S, !0);
          continue;
        }
        let vt;
        if (et.key != null)
          vt = Ce.get(et.key);
        else
          for (ke = he; ke <= J; ke++)
            if (In[ke - he] === 0 && En(et, h[ke])) {
              vt = ke;
              break;
            }
        vt === void 0 ? Ne(et, T, S, !0) : (In[vt - he] = C + 1, vt >= yt ? yt = vt : gt = !0, y(
          et,
          h[vt],
          x,
          null,
          T,
          S,
          z,
          j,
          F
        ), Me++);
      }
      const $s = gt ? au(In) : gn;
      for (ke = $s.length - 1, C = ze - 1; C >= 0; C--) {
        const et = he + C, vt = h[et], Is = h[et + 1], Ns = et + 1 < ee ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Is.el || Mo(Is)
        ) : $;
        In[C] === 0 ? y(
          null,
          vt,
          x,
          Ns,
          T,
          S,
          z,
          j,
          F
        ) : gt && (ke < 0 || C !== $s[ke] ? _e(vt, x, Ns, 2) : ke--);
      }
    }
  }, _e = (p, h, x, $, T = null) => {
    const { el: S, type: z, transition: j, children: F, shapeFlag: C } = p;
    if (C & 6) {
      _e(p.component.subTree, h, x, $);
      return;
    }
    if (C & 128) {
      p.suspense.move(h, x, $);
      return;
    }
    if (C & 64) {
      z.move(p, h, x, $n);
      return;
    }
    if (z === ue) {
      i(S, h, x);
      for (let V = 0; V < F.length; V++)
        _e(F[V], h, x, $);
      i(p.anchor, h, x);
      return;
    }
    if (z === lr) {
      U(p, h, x);
      return;
    }
    if ($ !== 2 && C & 1 && j)
      if ($ === 0)
        j.persisted && !S[sr] ? i(S, h, x) : (j.beforeEnter(S), i(S, h, x), Je(() => j.enter(S), T));
      else {
        const { leave: V, delayLeave: J, afterLeave: re } = j, he = () => {
          p.ctx.isUnmounted ? r(S) : i(S, h, x);
        }, Ce = () => {
          const ke = S._isLeaving || !!S[sr];
          S._isLeaving && S[sr](
            !0
            /* cancelled */
          ), j.persisted && !ke ? he() : V(S, () => {
            he(), re && re();
          });
        };
        J ? J(S, he, Ce) : Ce();
      }
    else
      i(S, h, x);
  }, Ne = (p, h, x, $ = !1, T = !1) => {
    const {
      type: S,
      props: z,
      ref: j,
      children: F,
      dynamicChildren: C,
      shapeFlag: ee,
      patchFlag: V,
      dirs: J,
      cacheIndex: re,
      memo: he
    } = p;
    if (V === -2 && (T = !1), j != null && (Ft(), Vn(j, null, x, p, !0), jt()), re != null && (h.renderCache[re] = void 0), ee & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const Ce = ee & 1 && J, ke = !bn(p);
    let Me;
    if (ke && (Me = z && z.onVnodeBeforeUnmount) && bt(Me, h, p), ee & 6)
      Cn(p.component, x, $);
    else {
      if (ee & 128) {
        p.suspense.unmount(x, $);
        return;
      }
      Ce && Jt(p, null, h, "beforeUnmount"), ee & 64 ? p.type.remove(
        p,
        h,
        x,
        $n,
        $
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (S !== ue || V > 0 && V & 64) ? Ve(
        C,
        h,
        x,
        !1,
        !0
      ) : (S === ue && V & 384 || !T && ee & 16) && Ve(F, h, x), $ && it(p);
    }
    const ze = he != null && re == null;
    (ke && (Me = z && z.onVnodeUnmounted) || Ce || ze) && Je(() => {
      Me && bt(Me, h, p), Ce && Jt(p, null, h, "unmounted"), ze && (p.el = null);
    }, x);
  }, it = (p) => {
    const { type: h, el: x, anchor: $, transition: T } = p;
    if (h === ue) {
      cn(x, $);
      return;
    }
    if (h === lr) {
      O(p);
      return;
    }
    const S = () => {
      r(x), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (p.shapeFlag & 1 && T && !T.persisted) {
      const { leave: z, delayLeave: j } = T, F = () => z(x, S);
      j ? j(p.el, S, F) : F();
    } else
      S();
  }, cn = (p, h) => {
    let x;
    for (; p !== h; )
      x = f(p), r(p), p = x;
    r(h);
  }, Cn = (p, h, x) => {
    const { bum: $, scope: T, job: S, subTree: z, um: j, m: F, a: C } = p;
    Ws(F), Ws(C), $ && er($), T.stop(), S && (S.flags |= 8, Ne(z, p, h, x)), j && Je(j, h), Je(() => {
      p.isUnmounted = !0;
    }, h);
  }, Ve = (p, h, x, $ = !1, T = !1, S = 0) => {
    for (let z = S; z < p.length; z++)
      Ne(p[z], h, x, $, T);
  }, un = (p) => {
    if (p.shapeFlag & 6)
      return un(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const h = f(p.anchor || p.el), x = h && h[xc];
    return x ? f(x) : h;
  };
  let Ji = !1;
  const Cs = (p, h, x) => {
    let $;
    p == null ? h._vnode && (Ne(h._vnode, null, null, !0), $ = h._vnode.component) : y(
      h._vnode || null,
      p,
      h,
      null,
      null,
      null,
      x
    ), h._vnode = p, Ji || (Ji = !0, Fs($), so(), Ji = !1);
  }, $n = {
    p: y,
    um: Ne,
    m: _e,
    r: it,
    mt: X,
    mc: M,
    pc: _,
    pbc: be,
    n: un,
    o: e
  };
  return {
    render: Cs,
    hydrate: void 0,
    createApp: Vc(Cs)
  };
}
function or({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Xt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function su(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Oo(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (se(i) && se(r))
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      let o = r[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[s] = Et(r[s]), o.el = a.el), !n && o.patchFlag !== -2 && Oo(a, o)), o.type === Ki && (o.patchFlag === -1 && (o = r[s] = Et(o)), o.el = a.el), o.type === Dt && !o.el && (o.el = a.el);
    }
}
function au(e) {
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
function Po(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Po(t);
}
function Ws(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Mo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Mo(t.subTree) : null;
}
const Ro = (e) => e.__isSuspense;
function ou(e, t) {
  t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : gc(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), Ki = /* @__PURE__ */ Symbol.for("v-txt"), Dt = /* @__PURE__ */ Symbol.for("v-cmt"), lr = /* @__PURE__ */ Symbol.for("v-stc"), Zn = [];
let nt = null;
function v(e = !1) {
  Zn.push(nt = e ? null : []);
}
function lu() {
  Zn.pop(), nt = Zn[Zn.length - 1] || null;
}
let Gn = 1;
function Ks(e, t = !1) {
  Gn += e, e < 0 && nt && t && (nt.hasOnce = !0);
}
function Fo(e) {
  return e.dynamicChildren = Gn > 0 ? nt || gn : null, lu(), Gn > 0 && nt && nt.push(e), e;
}
function k(e, t, n, i, r, s) {
  return Fo(
    R(
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
function je(e, t, n, i, r) {
  return Fo(
    at(
      e,
      t,
      n,
      i,
      r,
      !0
    )
  );
}
function ls(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function En(e, t) {
  return e.type === t.type && e.key === t.key;
}
const jo = ({ key: e }) => e ?? null, pi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ee(e) || /* @__PURE__ */ He(e) || oe(e) ? { i: Ye, r: e, k: t, f: !!n } : e : null);
function R(e, t = null, n = null, i = 0, r = null, s = e === ue ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && jo(t),
    ref: t && pi(t),
    scopeId: oo,
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
    ctx: Ye
  };
  return o ? (us(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ee(n) ? 8 : 16), Gn > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && nt.push(l), l;
}
const at = cu;
function cu(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === yo) && (e = Dt), ls(e)) {
    const o = kn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && us(o, n), Gn > 0 && !s && nt && (o.shapeFlag & 6 ? nt[nt.indexOf(e)] = o : nt.push(o)), o.patchFlag = -2, o;
  }
  if (xu(e) && (e = e.__vccOpts), t) {
    t = uu(t);
    let { class: o, style: l } = t;
    o && !Ee(o) && (t.class = Xe(o)), Se(l) && (/* @__PURE__ */ ns(l) && !se(l) && (l = Pe({}, l)), t.style = ri(l));
  }
  const a = Ee(e) ? 1 : Ro(e) ? 128 : _c(e) ? 64 : Se(e) ? 4 : oe(e) ? 2 : 0;
  return R(
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
function uu(e) {
  return e ? /* @__PURE__ */ ns(e) || Ao(e) ? Pe({}, e) : e : null;
}
function kn(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: a, children: o, transition: l } = e, c = t ? du(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && jo(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? se(s) ? s.concat(pi(t)) : [s, pi(t)] : pi(t)
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
    patchFlag: t && e.type !== ue ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && kn(e.ssContent),
    ssFallback: e.ssFallback && kn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && rs(
    u,
    l.clone(u)
  ), u;
}
function cs(e = " ", t = 0) {
  return at(Ki, null, e, t);
}
function ce(e = "", t = !1) {
  return t ? (v(), je(Dt, null, e)) : at(Dt, null, e);
}
function wt(e) {
  return e == null || typeof e == "boolean" ? at(Dt) : se(e) ? at(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ls(e) ? Et(e) : at(Ki, null, String(e));
}
function Et(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : kn(e);
}
function us(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (se(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), us(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ao(t) ? t._ctx = Ye : r === 3 && Ye && (Ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else oe(t) ? (t = { default: t, _ctx: Ye }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [cs(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function du(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = Xe([t.class, i.class]));
      else if (r === "style")
        t.style = ri([t.style, i.style]);
      else if (ji(r)) {
        const s = t[r], a = i[r];
        a && s !== a && !(se(s) && s.includes(a)) ? t[r] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Li(r) && (t[r] = a);
      } else r !== "" && (t[r] = i[r]);
  }
  return t;
}
function bt(e, t, n, i = null) {
  ht(e, t, 7, [
    n,
    i
  ]);
}
const fu = _o();
let pu = 0;
function hu(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || fu, s = {
    uid: pu++,
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
    scope: new zl(
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
    propsOptions: $o(i, r),
    emitsOptions: wo(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ie,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ie,
    data: Ie,
    props: Ie,
    attrs: Ie,
    slots: Ie,
    refs: Ie,
    setupState: Ie,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Zc.bind(null, s), e.ce && e.ce(s), s;
}
let Ze = null;
const Lo = () => Ze || Ye;
let xi, Tr;
{
  const e = Ui(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((a) => a(s)) : r[0](s);
    };
  };
  xi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ze = n
  ), Tr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yn = n
  );
}
const ai = (e) => {
  const t = Ze;
  return xi(e), e.scope.on(), () => {
    e.scope.off(), xi(t);
  };
}, Gs = () => {
  Ze && Ze.scope.off(), xi(null);
};
function Do(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
function mu(e, t = !1, n = !1) {
  t && Tr(t);
  const { props: i, children: r } = e.vnode, s = Do(e);
  Qc(e, i, s, t), tu(e, r, n || t);
  const a = s ? gu(e, t) : void 0;
  return t && Tr(!1), a;
}
function gu(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fc);
  const { setup: i } = n;
  if (i) {
    Ft();
    const r = e.setupContext = i.length > 1 ? vu(e) : null, s = ai(e), a = si(
      i,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = Fa(a);
    if (jt(), s(), (o || e.sp) && !bn(e) && fo(e), o) {
      if (a.then(Gs, Gs), t)
        return a.then((l) => {
          Ys(e, l);
        }).catch((l) => {
          Bi(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Ys(e, a);
  } else
    zo(e);
}
function Ys(e, t, n) {
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = no(t)), zo(e);
}
function zo(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || St);
  {
    const r = ai(e);
    Ft();
    try {
      jc(e);
    } finally {
      jt(), r();
    }
  }
}
const yu = {
  get(e, t) {
    return Be(e, "get", ""), e[t];
  }
};
function vu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, yu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ds(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(no(ac(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Bn)
        return Bn[n](e);
    },
    has(t, n) {
      return n in t || n in Bn;
    }
  })) : e.proxy;
}
function bu(e, t = !0) {
  return oe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function xu(e) {
  return oe(e) && "__vccOpts" in e;
}
const K = (e, t) => /* @__PURE__ */ dc(e, t, Yn), _u = "3.5.35";
/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ar;
const Qs = typeof window < "u" && window.trustedTypes;
if (Qs)
  try {
    Ar = /* @__PURE__ */ Qs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const qo = Ar ? (e) => Ar.createHTML(e) : (e) => e, wu = "http://www.w3.org/2000/svg", ku = "http://www.w3.org/1998/Math/MathML", Nt = typeof document < "u" ? document : null, Js = Nt && /* @__PURE__ */ Nt.createElement("template"), Su = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? Nt.createElementNS(wu, e) : t === "mathml" ? Nt.createElementNS(ku, e) : n ? Nt.createElement(e, { is: n }) : Nt.createElement(e);
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
      Js.innerHTML = qo(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Js.content;
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
}, Tu = /* @__PURE__ */ Symbol("_vtc");
function Au(e, t, n) {
  const i = e[Tu];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Xs = /* @__PURE__ */ Symbol("_vod"), Cu = /* @__PURE__ */ Symbol("_vsh"), $u = /* @__PURE__ */ Symbol(""), Iu = /(?:^|;)\s*display\s*:/;
function Nu(e, t, n) {
  const i = e.style, r = Ee(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (Ee(t))
        for (const a of t.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && Fn(i, o, "");
        }
      else
        for (const a in t)
          n[a] == null && Fn(i, a, "");
    for (const a in n) {
      a === "display" && (s = !0);
      const o = n[a];
      o != null ? Ou(
        e,
        a,
        !Ee(t) && t ? t[a] : void 0,
        o
      ) || Fn(i, a, o) : Fn(i, a, "");
    }
  } else if (r) {
    if (t !== n) {
      const a = i[$u];
      a && (n += ";" + a), i.cssText = n, s = Iu.test(n);
    }
  } else t && e.removeAttribute("style");
  Xs in e && (e[Xs] = s ? i.display : "", e[Cu] && (i.display = "none"));
}
const ea = /\s*!important$/;
function Fn(e, t, n) {
  if (se(n))
    n.forEach((i) => Fn(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Eu(e, t);
    ea.test(n) ? e.setProperty(
      tt(i),
      n.replace(ea, ""),
      "important"
    ) : e[i] = n;
  }
}
const ta = ["Webkit", "Moz", "ms"], cr = {};
function Eu(e, t) {
  const n = cr[t];
  if (n)
    return n;
  let i = De(t);
  if (i !== "filter" && i in e)
    return cr[t] = i;
  i = qi(i);
  for (let r = 0; r < ta.length; r++) {
    const s = ta[r] + i;
    if (s in e)
      return cr[t] = s;
  }
  return t;
}
function Ou(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ee(i) && n === i;
}
const na = "http://www.w3.org/1999/xlink";
function ia(e, t, n, i, r, s = Ll(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(na, t.slice(6, t.length)) : e.setAttributeNS(na, t, n) : n == null || s && !Da(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : ft(n) ? String(n) : n
  );
}
function ra(e, t, n, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? qo(n) : n);
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
    o === "boolean" ? n = Da(n) : n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(r || t);
}
function Pu(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Mu(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const sa = /* @__PURE__ */ Symbol("_vei");
function Ru(e, t, n, i, r = null) {
  const s = e[sa] || (e[sa] = {}), a = s[t];
  if (i && a)
    a.value = i;
  else {
    const [o, l] = Fu(t);
    if (i) {
      const c = s[t] = Du(
        i,
        r
      );
      Pu(e, o, c, l);
    } else a && (Mu(e, o, a, l), s[t] = void 0);
  }
}
const aa = /(?:Once|Passive|Capture)$/;
function Fu(e) {
  let t;
  if (aa.test(e)) {
    t = {};
    let i;
    for (; i = e.match(aa); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let ur = 0;
const ju = /* @__PURE__ */ Promise.resolve(), Lu = () => ur || (ju.then(() => ur = 0), ur = Date.now());
function Du(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const r = n.value;
    if (se(r)) {
      const s = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        s.call(i), i._stopped = !0;
      };
      const a = r.slice(), o = [i];
      for (let l = 0; l < a.length && !i._stopped; l++) {
        const c = a[l];
        c && ht(
          c,
          t,
          5,
          o
        );
      }
    } else
      ht(
        r,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Lu(), n;
}
const oa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, zu = (e, t, n, i, r, s) => {
  const a = r === "svg";
  t === "class" ? Au(e, i, a) : t === "style" ? Nu(e, n, i) : ji(t) ? Li(t) || Ru(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qu(e, t, i, a)) ? (ra(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ia(e, t, i, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Uu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ee(i))) ? ra(e, De(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ia(e, t, i, a));
};
function qu(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && oa(t) && oe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return oa(t) && Ee(n) ? !1 : t in e;
}
function Uu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = De(t);
  return Array.isArray(n) ? n.some((r) => De(r) === i) : Object.keys(n).some((r) => De(r) === i);
}
const la = {};
// @__NO_SIDE_EFFECTS__
function Vu(e, t, n) {
  let i = /* @__PURE__ */ Oe(e, t);
  Di(i) && (i = Pe({}, i, t));
  class r extends fs {
    constructor(a) {
      super(i, a, n);
    }
  }
  return r.def = i, r;
}
const Bu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class fs extends Bu {
  constructor(t, n = {}, i = ua) {
    super(), this._def = t, this._props = n, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && i !== ua ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      Pe({}, t.shadowRootOptions, {
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
      if (t instanceof fs) {
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
    this._connected = !1, Zi(() => {
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
      if (s && !se(s))
        for (const l in s) {
          const c = s[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Os(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[De(l)] = !0);
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
        ve(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => N(n[i])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, i = se(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && i.includes(r) && this._setProp(r, this[r]);
    for (const r of i.map(De))
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
    let i = n ? this.getAttribute(t) : la;
    const r = De(t);
    n && this._numberProps && this._numberProps[r] && (i = Os(i)), this._setProp(r, i, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === la ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), i)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(tt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(tt(t), n + "") : n || this.removeAttribute(tt(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Yu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = at(this._def, Pe(t, this._props));
    return this._instance || (n.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const r = (s, a) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            Di(a[0]) ? Pe({ detail: a }, a[0]) : { detail: a }
          )
        );
      };
      i.emit = (s, ...a) => {
        r(s, a), tt(s) !== s && r(tt(s), a);
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
function Zu(e) {
  const t = Lo(), n = t && t.ce;
  return n || null;
}
const Hu = ["ctrl", "shift", "alt", "meta"], Wu = {
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
  exact: (e, t) => Hu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Qn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const o = Wu[t[a]];
      if (o && o(r, t)) return;
    }
    return e(r, ...s);
  });
}, Ku = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Cr = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (r) => {
    if (!("key" in r))
      return;
    const s = tt(r.key);
    if (t.some(
      (a) => a === s || Ku[a] === s
    ))
      return e(r);
  });
}, Gu = /* @__PURE__ */ Pe({ patchProp: zu }, Su);
let ca;
function Uo() {
  return ca || (ca = iu(Gu));
}
const Yu = (...e) => {
  Uo().render(...e);
}, ua = (...e) => {
  const t = Uo().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const r = Ju(i);
    if (!r) return;
    const s = t._component;
    !oe(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const a = n(r, !1, Qu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
};
function Qu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ju(e) {
  return Ee(e) ? document.querySelector(e) : e;
}
var me;
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
})(me || (me = {}));
var da;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(da || (da = {}));
const Z = me.arrayToEnum([
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
]), Ht = (e) => {
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
}, E = me.arrayToEnum([
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
class zt extends Error {
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
    if (!(t instanceof zt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, me.jsonStringifyReplacer, 2);
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
zt.create = (e) => new zt(e);
const $r = (e, t) => {
  let n;
  switch (e.code) {
    case E.invalid_type:
      e.received === Z.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case E.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, me.jsonStringifyReplacer)}`;
      break;
    case E.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${me.joinValues(e.keys, ", ")}`;
      break;
    case E.invalid_union:
      n = "Invalid input";
      break;
    case E.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${me.joinValues(e.options)}`;
      break;
    case E.invalid_enum_value:
      n = `Invalid enum value. Expected ${me.joinValues(e.options)}, received '${e.received}'`;
      break;
    case E.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case E.invalid_return_type:
      n = "Invalid function return type";
      break;
    case E.invalid_date:
      n = "Invalid date";
      break;
    case E.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : me.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case E.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case E.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case E.custom:
      n = "Invalid input";
      break;
    case E.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case E.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case E.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, me.assertNever(e);
  }
  return { message: n };
};
let Xu = $r;
function ed() {
  return Xu;
}
const td = (e) => {
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
  const n = ed(), i = td({
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
      n === $r ? void 0 : $r
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(i);
}
class Qe {
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
        return ne;
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
    return Qe.mergeObjectSync(t, i);
  }
  static mergeObjectSync(t, n) {
    const i = {};
    for (const r of n) {
      const { key: s, value: a } = r;
      if (s.status === "aborted" || a.status === "aborted")
        return ne;
      s.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || r.alwaysSet) && (i[s.value] = a.value);
    }
    return { status: t.value, value: i };
  }
}
const ne = Object.freeze({
  status: "aborted"
}), jn = (e) => ({ status: "dirty", value: e }), ot = (e) => ({ status: "valid", value: e }), fa = (e) => e.status === "aborted", pa = (e) => e.status === "dirty", Sn = (e) => e.status === "valid", _i = (e) => typeof Promise < "u" && e instanceof Promise;
var G;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(G || (G = {}));
class Ct {
  constructor(t, n, i, r) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = i, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ha = (e, t) => {
  if (Sn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new zt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function le(e) {
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
class pe {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Ht(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Ht(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Qe(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Ht(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (_i(n))
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
      parsedType: Ht(t)
    }, r = this._parseSync({ data: t, path: i.path, parent: i });
    return ha(i, r);
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
      parsedType: Ht(t)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: t, path: [], parent: n });
        return Sn(s) ? {
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
    return this._parseAsync({ data: t, path: [], parent: n }).then((s) => Sn(s) ? {
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
      parsedType: Ht(t)
    }, r = this._parse({ data: t, path: i.path, parent: i }), s = await (_i(r) ? r : Promise.resolve(r));
    return ha(i, s);
  }
  refine(t, n) {
    const i = (r) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(r) : n;
    return this._refinement((r, s) => {
      const a = t(r), o = () => s.addIssue({
        code: E.custom,
        ...i(r)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((i, r) => t(i) ? !0 : (r.addIssue(typeof n == "function" ? n(i, r) : n), !1));
  }
  _refinement(t) {
    return new on({
      schema: this,
      typeName: ie.ZodEffects,
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
    return Mt.create(this, this._def);
  }
  nullable() {
    return ln.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return At.create(this);
  }
  promise() {
    return $i.create(this, this._def);
  }
  or(t) {
    return ki.create([this, t], this._def);
  }
  and(t) {
    return Si.create(this, t, this._def);
  }
  transform(t) {
    return new on({
      ...le(this._def),
      schema: this,
      typeName: ie.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ii({
      ...le(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ie.ZodDefault
    });
  }
  brand() {
    return new Ho({
      typeName: ie.ZodBranded,
      type: this,
      ...le(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ni({
      ...le(this._def),
      innerType: this,
      catchValue: n,
      typeName: ie.ZodCatch
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
    return hs.create(this, t);
  }
  readonly() {
    return Ei.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const nd = /^c[^\s-]{8,}$/i, id = /^[0-9a-z]+$/, rd = /^[0-9A-HJKMNP-TV-Z]{26}$/i, sd = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, ad = /^[a-z0-9_-]{21}$/i, od = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, ld = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, cd = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ud = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let dr;
const dd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, fd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, pd = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, hd = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, md = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, gd = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Vo = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", yd = new RegExp(`^${Vo}$`);
function Bo(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function vd(e) {
  return new RegExp(`^${Bo(e)}$`);
}
function bd(e) {
  let t = `${Vo}T${Bo(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function xd(e, t) {
  return !!((t === "v4" || !t) && dd.test(e) || (t === "v6" || !t) && pd.test(e));
}
function _d(e, t) {
  if (!od.test(e))
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
function wd(e, t) {
  return !!((t === "v4" || !t) && fd.test(e) || (t === "v6" || !t) && hd.test(e));
}
class Pt extends pe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== Z.string) {
      const s = this._getOrReturnCtx(t);
      return q(s, {
        code: E.invalid_type,
        expected: Z.string,
        received: s.parsedType
      }), ne;
    }
    const i = new Qe();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (r = this._getOrReturnCtx(t, r), q(r, {
          code: E.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (r = this._getOrReturnCtx(t, r), q(r, {
          code: E.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "length") {
        const a = t.data.length > s.value, o = t.data.length < s.value;
        (a || o) && (r = this._getOrReturnCtx(t, r), a ? q(r, {
          code: E.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && q(r, {
          code: E.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), i.dirty());
      } else if (s.kind === "email")
        cd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "email",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "emoji")
        dr || (dr = new RegExp(ud, "u")), dr.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "emoji",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "uuid")
        sd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "uuid",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "nanoid")
        ad.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "nanoid",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid")
        nd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "cuid",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid2")
        id.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "cuid2",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "ulid")
        rd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "ulid",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), q(r, {
            validation: "url",
            code: E.invalid_string,
            message: s.message
          }), i.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "regex",
        code: E.invalid_string,
        message: s.message
      }), i.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: E.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), i.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: E.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: E.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "datetime" ? bd(s).test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: E.invalid_string,
        validation: "datetime",
        message: s.message
      }), i.dirty()) : s.kind === "date" ? yd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: E.invalid_string,
        validation: "date",
        message: s.message
      }), i.dirty()) : s.kind === "time" ? vd(s).test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: E.invalid_string,
        validation: "time",
        message: s.message
      }), i.dirty()) : s.kind === "duration" ? ld.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "duration",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "ip" ? xd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "ip",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "jwt" ? _d(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "jwt",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "cidr" ? wd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "cidr",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64" ? md.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "base64",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64url" ? gd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "base64url",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : me.assertNever(s);
    return { status: i.value, value: t.data };
  }
  _regex(t, n, i) {
    return this.refinement((r) => t.test(r), {
      validation: n,
      code: E.invalid_string,
      ...G.errToObj(i)
    });
  }
  _addCheck(t) {
    return new Pt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...G.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...G.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...G.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...G.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...G.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...G.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...G.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...G.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...G.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...G.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...G.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...G.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...G.errToObj(t) });
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
      ...G.errToObj(t == null ? void 0 : t.message)
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
      ...G.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...G.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...G.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...G.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...G.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...G.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...G.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...G.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...G.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, G.errToObj(t));
  }
  trim() {
    return new Pt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Pt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Pt({
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
Pt.create = (e) => new Pt({
  checks: [],
  typeName: ie.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...le(e)
});
function kd(e, t) {
  const n = (e.toString().split(".")[1] || "").length, i = (t.toString().split(".")[1] || "").length, r = n > i ? n : i, s = Number.parseInt(e.toFixed(r).replace(".", "")), a = Number.parseInt(t.toFixed(r).replace(".", ""));
  return s % a / 10 ** r;
}
class Tn extends pe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== Z.number) {
      const s = this._getOrReturnCtx(t);
      return q(s, {
        code: E.invalid_type,
        expected: Z.number,
        received: s.parsedType
      }), ne;
    }
    let i;
    const r = new Qe();
    for (const s of this._def.checks)
      s.kind === "int" ? me.isInteger(t.data) || (i = this._getOrReturnCtx(t, i), q(i, {
        code: E.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), q(i, {
        code: E.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), q(i, {
        code: E.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? kd(t.data, s.value) !== 0 && (i = this._getOrReturnCtx(t, i), q(i, {
        code: E.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (i = this._getOrReturnCtx(t, i), q(i, {
        code: E.not_finite,
        message: s.message
      }), r.dirty()) : me.assertNever(s);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, G.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, G.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, G.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, G.toString(n));
  }
  setLimit(t, n, i, r) {
    return new Tn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: G.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Tn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: G.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: G.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: G.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: G.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: G.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: G.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: G.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: G.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: G.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && me.isInteger(t.value));
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
Tn.create = (e) => new Tn({
  checks: [],
  typeName: ie.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...le(e)
});
class Jn extends pe {
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
    const r = new Qe();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), q(i, {
        code: E.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), q(i, {
        code: E.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (i = this._getOrReturnCtx(t, i), q(i, {
        code: E.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : me.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return q(n, {
      code: E.invalid_type,
      expected: Z.bigint,
      received: n.parsedType
    }), ne;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, G.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, G.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, G.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, G.toString(n));
  }
  setLimit(t, n, i, r) {
    return new Jn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: G.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Jn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: G.toString(n)
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
Jn.create = (e) => new Jn({
  checks: [],
  typeName: ie.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...le(e)
});
class Ir extends pe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Z.boolean) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: E.invalid_type,
        expected: Z.boolean,
        received: i.parsedType
      }), ne;
    }
    return ot(t.data);
  }
}
Ir.create = (e) => new Ir({
  typeName: ie.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...le(e)
});
class wi extends pe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== Z.date) {
      const s = this._getOrReturnCtx(t);
      return q(s, {
        code: E.invalid_type,
        expected: Z.date,
        received: s.parsedType
      }), ne;
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return q(s, {
        code: E.invalid_date
      }), ne;
    }
    const i = new Qe();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), q(r, {
        code: E.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), i.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), q(r, {
        code: E.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), i.dirty()) : me.assertNever(s);
    return {
      status: i.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new wi({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: G.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: G.toString(n)
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
wi.create = (e) => new wi({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: ie.ZodDate,
  ...le(e)
});
class ma extends pe {
  _parse(t) {
    if (this._getType(t) !== Z.symbol) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: E.invalid_type,
        expected: Z.symbol,
        received: i.parsedType
      }), ne;
    }
    return ot(t.data);
  }
}
ma.create = (e) => new ma({
  typeName: ie.ZodSymbol,
  ...le(e)
});
class Nr extends pe {
  _parse(t) {
    if (this._getType(t) !== Z.undefined) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: E.invalid_type,
        expected: Z.undefined,
        received: i.parsedType
      }), ne;
    }
    return ot(t.data);
  }
}
Nr.create = (e) => new Nr({
  typeName: ie.ZodUndefined,
  ...le(e)
});
class Er extends pe {
  _parse(t) {
    if (this._getType(t) !== Z.null) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: E.invalid_type,
        expected: Z.null,
        received: i.parsedType
      }), ne;
    }
    return ot(t.data);
  }
}
Er.create = (e) => new Er({
  typeName: ie.ZodNull,
  ...le(e)
});
class ga extends pe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return ot(t.data);
  }
}
ga.create = (e) => new ga({
  typeName: ie.ZodAny,
  ...le(e)
});
class Or extends pe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return ot(t.data);
  }
}
Or.create = (e) => new Or({
  typeName: ie.ZodUnknown,
  ...le(e)
});
class Yt extends pe {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return q(n, {
      code: E.invalid_type,
      expected: Z.never,
      received: n.parsedType
    }), ne;
  }
}
Yt.create = (e) => new Yt({
  typeName: ie.ZodNever,
  ...le(e)
});
class ya extends pe {
  _parse(t) {
    if (this._getType(t) !== Z.undefined) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: E.invalid_type,
        expected: Z.void,
        received: i.parsedType
      }), ne;
    }
    return ot(t.data);
  }
}
ya.create = (e) => new ya({
  typeName: ie.ZodVoid,
  ...le(e)
});
class At extends pe {
  _parse(t) {
    const { ctx: n, status: i } = this._processInputParams(t), r = this._def;
    if (n.parsedType !== Z.array)
      return q(n, {
        code: E.invalid_type,
        expected: Z.array,
        received: n.parsedType
      }), ne;
    if (r.exactLength !== null) {
      const a = n.data.length > r.exactLength.value, o = n.data.length < r.exactLength.value;
      (a || o) && (q(n, {
        code: a ? E.too_big : E.too_small,
        minimum: o ? r.exactLength.value : void 0,
        maximum: a ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), i.dirty());
    }
    if (r.minLength !== null && n.data.length < r.minLength.value && (q(n, {
      code: E.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), i.dirty()), r.maxLength !== null && n.data.length > r.maxLength.value && (q(n, {
      code: E.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), i.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, o) => r.type._parseAsync(new Ct(n, a, n.path, o)))).then((a) => Qe.mergeArray(i, a));
    const s = [...n.data].map((a, o) => r.type._parseSync(new Ct(n, a, n.path, o)));
    return Qe.mergeArray(i, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new At({
      ...this._def,
      minLength: { value: t, message: G.toString(n) }
    });
  }
  max(t, n) {
    return new At({
      ...this._def,
      maxLength: { value: t, message: G.toString(n) }
    });
  }
  length(t, n) {
    return new At({
      ...this._def,
      exactLength: { value: t, message: G.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
At.create = (e, t) => new At({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ie.ZodArray,
  ...le(t)
});
function mn(e) {
  if (e instanceof Re) {
    const t = {};
    for (const n in e.shape) {
      const i = e.shape[n];
      t[n] = Mt.create(mn(i));
    }
    return new Re({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof At ? new At({
    ...e._def,
    type: mn(e.element)
  }) : e instanceof Mt ? Mt.create(mn(e.unwrap())) : e instanceof ln ? ln.create(mn(e.unwrap())) : e instanceof sn ? sn.create(e.items.map((t) => mn(t))) : e;
}
class Re extends pe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = me.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== Z.object) {
      const c = this._getOrReturnCtx(t);
      return q(c, {
        code: E.invalid_type,
        expected: Z.object,
        received: c.parsedType
      }), ne;
    }
    const { status: i, ctx: r } = this._processInputParams(t), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Yt && this._def.unknownKeys === "strip"))
      for (const c in r.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const u = s[c], d = r.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new Ct(r, d, r.path, c)),
        alwaysSet: c in r.data
      });
    }
    if (this._def.catchall instanceof Yt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: r.data[u] }
          });
      else if (c === "strict")
        o.length > 0 && (q(r, {
          code: E.unrecognized_keys,
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
            new Ct(r, d, r.path, u)
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
    }).then((c) => Qe.mergeObjectSync(i, c)) : Qe.mergeObjectSync(i, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return G.errToObj, new Re({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, i) => {
          var s, a;
          const r = ((a = (s = this._def).errorMap) == null ? void 0 : a.call(s, n, i).message) ?? i.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: G.errToObj(t).message ?? r
          } : {
            message: r
          };
        }
      } : {}
    });
  }
  strip() {
    return new Re({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Re({
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
    return new Re({
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
    return new Re({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: ie.ZodObject
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
    return new Re({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const i of me.objectKeys(t))
      t[i] && this.shape[i] && (n[i] = this.shape[i]);
    return new Re({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const i of me.objectKeys(this.shape))
      t[i] || (n[i] = this.shape[i]);
    return new Re({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return mn(this);
  }
  partial(t) {
    const n = {};
    for (const i of me.objectKeys(this.shape)) {
      const r = this.shape[i];
      t && !t[i] ? n[i] = r : n[i] = r.optional();
    }
    return new Re({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const i of me.objectKeys(this.shape))
      if (t && !t[i])
        n[i] = this.shape[i];
      else {
        let s = this.shape[i];
        for (; s instanceof Mt; )
          s = s._def.innerType;
        n[i] = s;
      }
    return new Re({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Zo(me.objectKeys(this.shape));
  }
}
Re.create = (e, t) => new Re({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Yt.create(),
  typeName: ie.ZodObject,
  ...le(t)
});
Re.strictCreate = (e, t) => new Re({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Yt.create(),
  typeName: ie.ZodObject,
  ...le(t)
});
Re.lazycreate = (e, t) => new Re({
  shape: e,
  unknownKeys: "strip",
  catchall: Yt.create(),
  typeName: ie.ZodObject,
  ...le(t)
});
class ki extends pe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), i = this._def.options;
    function r(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new zt(o.ctx.common.issues));
      return q(n, {
        code: E.invalid_union,
        unionErrors: a
      }), ne;
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
      const o = a.map((l) => new zt(l));
      return q(n, {
        code: E.invalid_union,
        unionErrors: o
      }), ne;
    }
  }
  get options() {
    return this._def.options;
  }
}
ki.create = (e, t) => new ki({
  options: e,
  typeName: ie.ZodUnion,
  ...le(t)
});
const It = (e) => e instanceof Ai ? It(e.schema) : e instanceof on ? It(e.innerType()) : e instanceof Ci ? [e.value] : e instanceof an ? e.options : e instanceof Mr ? me.objectValues(e.enum) : e instanceof Ii ? It(e._def.innerType) : e instanceof Nr ? [void 0] : e instanceof Er ? [null] : e instanceof Mt ? [void 0, ...It(e.unwrap())] : e instanceof ln ? [null, ...It(e.unwrap())] : e instanceof Ho || e instanceof Ei ? It(e.unwrap()) : e instanceof Ni ? It(e._def.innerType) : [];
class ps extends pe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Z.object)
      return q(n, {
        code: E.invalid_type,
        expected: Z.object,
        received: n.parsedType
      }), ne;
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
      code: E.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [i]
    }), ne);
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
      const a = It(s.shape[t]);
      if (!a.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (r.has(o))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        r.set(o, s);
      }
    }
    return new ps({
      typeName: ie.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: r,
      ...le(i)
    });
  }
}
function Pr(e, t) {
  const n = Ht(e), i = Ht(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === Z.object && i === Z.object) {
    const r = me.objectKeys(t), s = me.objectKeys(e).filter((o) => r.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of s) {
      const l = Pr(e[o], t[o]);
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
      const a = e[s], o = t[s], l = Pr(a, o);
      if (!l.valid)
        return { valid: !1 };
      r.push(l.data);
    }
    return { valid: !0, data: r };
  } else return n === Z.date && i === Z.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Si extends pe {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = (s, a) => {
      if (fa(s) || fa(a))
        return ne;
      const o = Pr(s.value, a.value);
      return o.valid ? ((pa(s) || pa(a)) && n.dirty(), { status: n.value, value: o.data }) : (q(i, {
        code: E.invalid_intersection_types
      }), ne);
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
Si.create = (e, t, n) => new Si({
  left: e,
  right: t,
  typeName: ie.ZodIntersection,
  ...le(n)
});
class sn extends pe {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Z.array)
      return q(i, {
        code: E.invalid_type,
        expected: Z.array,
        received: i.parsedType
      }), ne;
    if (i.data.length < this._def.items.length)
      return q(i, {
        code: E.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ne;
    !this._def.rest && i.data.length > this._def.items.length && (q(i, {
      code: E.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...i.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new Ct(i, a, i.path, o)) : null;
    }).filter((a) => !!a);
    return i.common.async ? Promise.all(s).then((a) => Qe.mergeArray(n, a)) : Qe.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new sn({
      ...this._def,
      rest: t
    });
  }
}
sn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new sn({
    items: e,
    typeName: ie.ZodTuple,
    rest: null,
    ...le(t)
  });
};
class Ti extends pe {
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
        code: E.invalid_type,
        expected: Z.object,
        received: i.parsedType
      }), ne;
    const r = [], s = this._def.keyType, a = this._def.valueType;
    for (const o in i.data)
      r.push({
        key: s._parse(new Ct(i, o, i.path, o)),
        value: a._parse(new Ct(i, i.data[o], i.path, o)),
        alwaysSet: o in i.data
      });
    return i.common.async ? Qe.mergeObjectAsync(n, r) : Qe.mergeObjectSync(n, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, i) {
    return n instanceof pe ? new Ti({
      keyType: t,
      valueType: n,
      typeName: ie.ZodRecord,
      ...le(i)
    }) : new Ti({
      keyType: Pt.create(),
      valueType: t,
      typeName: ie.ZodRecord,
      ...le(n)
    });
  }
}
class va extends pe {
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
        code: E.invalid_type,
        expected: Z.map,
        received: i.parsedType
      }), ne;
    const r = this._def.keyType, s = this._def.valueType, a = [...i.data.entries()].map(([o, l], c) => ({
      key: r._parse(new Ct(i, o, i.path, [c, "key"])),
      value: s._parse(new Ct(i, l, i.path, [c, "value"]))
    }));
    if (i.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return ne;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return ne;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
va.create = (e, t, n) => new va({
  valueType: t,
  keyType: e,
  typeName: ie.ZodMap,
  ...le(n)
});
class Xn extends pe {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== Z.set)
      return q(i, {
        code: E.invalid_type,
        expected: Z.set,
        received: i.parsedType
      }), ne;
    const r = this._def;
    r.minSize !== null && i.data.size < r.minSize.value && (q(i, {
      code: E.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), n.dirty()), r.maxSize !== null && i.data.size > r.maxSize.value && (q(i, {
      code: E.too_big,
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
          return ne;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const o = [...i.data.values()].map((l, c) => s._parse(new Ct(i, l, i.path, c)));
    return i.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(t, n) {
    return new Xn({
      ...this._def,
      minSize: { value: t, message: G.toString(n) }
    });
  }
  max(t, n) {
    return new Xn({
      ...this._def,
      maxSize: { value: t, message: G.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Xn.create = (e, t) => new Xn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ie.ZodSet,
  ...le(t)
});
class Ai extends pe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ai.create = (e, t) => new Ai({
  getter: e,
  typeName: ie.ZodLazy,
  ...le(t)
});
class Ci extends pe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return q(n, {
        received: n.data,
        code: E.invalid_literal,
        expected: this._def.value
      }), ne;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Ci.create = (e, t) => new Ci({
  value: e,
  typeName: ie.ZodLiteral,
  ...le(t)
});
function Zo(e, t) {
  return new an({
    values: e,
    typeName: ie.ZodEnum,
    ...le(t)
  });
}
class an extends pe {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return q(n, {
        expected: me.joinValues(i),
        received: n.parsedType,
        code: E.invalid_type
      }), ne;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return q(n, {
        received: n.data,
        code: E.invalid_enum_value,
        options: i
      }), ne;
    }
    return ot(t.data);
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
    return an.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return an.create(this.options.filter((i) => !t.includes(i)), {
      ...this._def,
      ...n
    });
  }
}
an.create = Zo;
class Mr extends pe {
  _parse(t) {
    const n = me.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(t);
    if (i.parsedType !== Z.string && i.parsedType !== Z.number) {
      const r = me.objectValues(n);
      return q(i, {
        expected: me.joinValues(r),
        received: i.parsedType,
        code: E.invalid_type
      }), ne;
    }
    if (this._cache || (this._cache = new Set(me.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = me.objectValues(n);
      return q(i, {
        received: i.data,
        code: E.invalid_enum_value,
        options: r
      }), ne;
    }
    return ot(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Mr.create = (e, t) => new Mr({
  values: e,
  typeName: ie.ZodNativeEnum,
  ...le(t)
});
class $i extends pe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Z.promise && n.common.async === !1)
      return q(n, {
        code: E.invalid_type,
        expected: Z.promise,
        received: n.parsedType
      }), ne;
    const i = n.parsedType === Z.promise ? n.data : Promise.resolve(n.data);
    return ot(i.then((r) => this._def.type.parseAsync(r, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
$i.create = (e, t) => new $i({
  type: e,
  typeName: ie.ZodPromise,
  ...le(t)
});
class on extends pe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ie.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
            return ne;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: i.path,
            parent: i
          });
          return l.status === "aborted" ? ne : l.status === "dirty" || n.value === "dirty" ? jn(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return ne;
        const o = this._def.schema._parseSync({
          data: a,
          path: i.path,
          parent: i
        });
        return o.status === "aborted" ? ne : o.status === "dirty" || n.value === "dirty" ? jn(o.value) : o;
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
        return o.status === "aborted" ? ne : (o.status === "dirty" && n.dirty(), a(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((o) => o.status === "aborted" ? ne : (o.status === "dirty" && n.dirty(), a(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (r.type === "transform")
      if (i.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        if (!Sn(a))
          return ne;
        const o = r.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((a) => Sn(a) ? Promise.resolve(r.transform(a.value, s)).then((o) => ({
          status: n.value,
          value: o
        })) : ne);
    me.assertNever(r);
  }
}
on.create = (e, t, n) => new on({
  schema: e,
  typeName: ie.ZodEffects,
  effect: t,
  ...le(n)
});
on.createWithPreprocess = (e, t, n) => new on({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: ie.ZodEffects,
  ...le(n)
});
class Mt extends pe {
  _parse(t) {
    return this._getType(t) === Z.undefined ? ot(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Mt.create = (e, t) => new Mt({
  innerType: e,
  typeName: ie.ZodOptional,
  ...le(t)
});
class ln extends pe {
  _parse(t) {
    return this._getType(t) === Z.null ? ot(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ln.create = (e, t) => new ln({
  innerType: e,
  typeName: ie.ZodNullable,
  ...le(t)
});
class Ii extends pe {
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
Ii.create = (e, t) => new Ii({
  innerType: e,
  typeName: ie.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...le(t)
});
class Ni extends pe {
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
    return _i(r) ? r.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new zt(i.common.issues);
        },
        input: i.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new zt(i.common.issues);
        },
        input: i.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ni.create = (e, t) => new Ni({
  innerType: e,
  typeName: ie.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...le(t)
});
class ba extends pe {
  _parse(t) {
    if (this._getType(t) !== Z.nan) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: E.invalid_type,
        expected: Z.nan,
        received: i.parsedType
      }), ne;
    }
    return { status: "valid", value: t.data };
  }
}
ba.create = (e) => new ba({
  typeName: ie.ZodNaN,
  ...le(e)
});
class Ho extends pe {
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
class hs extends pe {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return s.status === "aborted" ? ne : s.status === "dirty" ? (n.dirty(), jn(s.value)) : this._def.out._parseAsync({
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
      return r.status === "aborted" ? ne : r.status === "dirty" ? (n.dirty(), {
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
    return new hs({
      in: t,
      out: n,
      typeName: ie.ZodPipeline
    });
  }
}
class Ei extends pe {
  _parse(t) {
    const n = this._def.innerType._parse(t), i = (r) => (Sn(r) && (r.value = Object.freeze(r.value)), r);
    return _i(n) ? n.then((r) => i(r)) : i(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ei.create = (e, t) => new Ei({
  innerType: e,
  typeName: ie.ZodReadonly,
  ...le(t)
});
var ie;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(ie || (ie = {}));
const B = Pt.create, W = Tn.create, Ue = Ir.create, Wo = Or.create;
Yt.create;
const we = At.create, de = Re.create, ei = ki.create, Sd = ps.create;
Si.create;
sn.create;
const ms = Ti.create, Td = Ai.create, lt = Ci.create, Te = an.create;
$i.create;
Mt.create;
ln.create;
const Ad = Te([
  "eq",
  "neq",
  "in",
  "gt",
  "gte",
  "lt",
  "lte",
  "isSet",
  "notSet"
]), xa = de({
  ref: B().min(1),
  op: Ad,
  value: ei([B(), W(), we(B()), we(W())]).optional()
}), Rr = Td(() => de({
  all: we(ei([xa, Rr])).optional(),
  any: we(ei([xa, Rr])).optional()
}));
function gs(e) {
  return "op" in e;
}
function Fr(e) {
  var t, n;
  return e ? (((t = e.all) == null ? void 0 : t.length) ?? 0) > 0 || (((n = e.any) == null ? void 0 : n.length) ?? 0) > 0 : !1;
}
const Cd = [
  "file.pages",
  "file.colorPages",
  "file.monoPages",
  "file.status"
], Ko = "quantity", $d = Te(["quantity", "pages", "area", "length"]), Id = de({
  /**
   * Inclusive upper bound on the basis value. MUST be omitted on the last
   * row (open-ended) and present on every other row — validate.ts enforces
   * strictly-increasing order, which makes overlap impossible by construction.
   */
  upTo: W().positive().optional(),
  amount: W()
}), Go = de({
  basis: $d.default("quantity"),
  /**
   * flat:      the entire basis value is priced at the matched row's amount.
   * graduated: each band is priced at its own amount and summed
   *            (progressive-tax style).
   */
  mode: Te(["flat", "graduated"]).default("flat"),
  rows: we(Id).min(1)
}), Nd = Te(["sqm", "sqft", "sqin"]), Ed = Te(["m", "ft", "in", "cm"]), Od = Te([
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
]), Pd = de({
  name: B(),
  expression: B()
}), Md = de({
  /** Evaluated in order; each step may use the ones before it. */
  steps: we(Pd).default([]),
  /**
   * The rule's contribution to the order total. NOT multiplied by the
   * quantity — the formula reads `qty` itself.
   */
  expression: B()
}), Yo = de({
  type: Od,
  /** Ignored on a formula rule (written as 0). */
  amount: W(),
  /**
   * perArea: the unit `amount` is priced in.
   * formula: the unit of `area`. Default "sqm" (engine-side).
   */
  areaUnit: Nd.optional(),
  /**
   * perLength: the unit `amount` is priced in.
   * formula: the unit of `w` and `h`. Default "m" (engine-side).
   */
  lengthUnit: Ed.optional(),
  /**
   * perLength only: which axis of the source W×H is the billable
   * length. Default "h" (a roll's fixed width is w; the consumed
   * length is h). "max" prices the longest side.
   */
  lengthAxis: Te(["h", "w", "max"]).optional(),
  /**
   * perArea/perLength/formula only: id of a `dimensions` field to read
   * W×H from. Fallback when omitted: FileMetadata.canvas.
   */
  dimensionsField: B().optional(),
  /**
   * Volume/size breaks. For basis "area" the basis value is in
   * `areaUnit`; for basis "length", in `lengthUnit`.
   */
  tiers: Go.optional(),
  /** formula only: the steps and the price (formula.ts has the language). */
  formula: Md.optional()
}), Rd = de({
  amount: W().nonnegative().default(0),
  /** "order": added once (v1 behavior). "unit": × quantity (t-shirts, cards). */
  per: Te(["order", "unit"]).default("order"),
  /**
   * Quantity breaks on the base. basis must be "quantity"; mode "graduated"
   * requires per === "unit" (validate.ts).
   */
  tiers: Go.optional()
}), Fd = de({
  currency: B().regex(/^[A-Z]{3}$/, "ISO 4217 currency code").default("USD"),
  basePrice: Rd.default({}),
  /** Flat fee added once, after percent/multiplier (stage D). */
  setupFee: W().nonnegative().optional(),
  /** Floor applied to the final total (stage E). */
  minimumPrice: W().nonnegative().optional(),
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
  lineQuantity: Te(["job", "units"]).optional()
}), Oi = "2.0", jd = de({
  artworkSize: de({
    width_mm: W().positive().optional(),
    height_mm: W().positive().optional()
  }).optional(),
  pageCount: de({
    min: W().int().positive().optional(),
    max: W().int().positive().optional()
  }).optional(),
  fileCount: de({
    min: W().int().positive().optional(),
    max: W().int().positive().optional()
  }).optional(),
  bleed: de({ required_mm: W().nonnegative().optional() }).optional(),
  safety: de({ min_mm: W().nonnegative().optional() }).optional()
}).strict(), Ld = de({
  context: jd.optional()
}), ys = de({
  id: B().min(1),
  label: B(),
  description: B().optional(),
  /** http(s) URL or data: URI (builder can embed small images). */
  image: B().optional(),
  /** Hex color for swatch display. */
  color: B().optional(),
  /** Default selection for the parent field. */
  default: Ue().optional(),
  /** Merchant SKU fragment for this choice (used by resolveSku / adapters). */
  sku: B().optional(),
  /** Manually mark a choice unavailable without deleting it. */
  disabled: Ue().optional(),
  /** Price changes applied when this choice is selected. */
  priceModifiers: we(Yo).default([]),
  /** What selecting this choice tells the Filecheck intake (if any). */
  filecheck: Ld.optional()
}), Ut = de({
  id: B().min(1),
  label: B().optional(),
  helpText: B().optional(),
  required: Ue().default(!1),
  visibleWhen: Rr.optional(),
  /** Price changes applied just for having this field visible. */
  priceModifiers: we(Yo).default([]),
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
}), Dd = Ut.extend({
  type: lt("select-one"),
  display: Te(["cards", "grid", "swatches", "pills", "dropdown", "list"]).default("pills"),
  options: we(ys).min(1)
}), zd = Ut.extend({
  type: lt("select-many"),
  display: Te(["cards", "grid", "swatches", "pills", "list"]).default("list"),
  options: we(ys).min(1),
  minSelect: W().int().nonnegative().default(0),
  maxSelect: W().int().positive().optional()
}), qd = Ut.extend({
  type: lt("quantity"),
  display: Te(["stepper", "pills", "dropdown", "input"]).default("stepper"),
  min: W().int().positive().default(1),
  max: W().int().positive().optional(),
  step: W().int().positive().default(1),
  defaultValue: W().int().positive().default(1),
  /** Preset quantities for pills/dropdown display (e.g. 100/250/500/1000). */
  presets: we(W().int().positive()).optional(),
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
  nextBreakHint: Ue().optional()
}), Ud = Ut.extend({
  type: lt("quantities"),
  /** grid: a card per option with its own stepper. list: one row per option. */
  display: Te(["grid", "list"]).default("grid"),
  options: we(ys).min(1),
  /** Per option: 0, or min, min+step, … up to max (the `quantity` grid rule). */
  min: W().int().positive().default(1),
  max: W().int().positive().optional(),
  step: W().int().positive().default(1),
  /** The whole job — what quantity pricing, tiers and the cart see. */
  minTotal: W().int().positive().default(1),
  maxTotal: W().int().positive().optional(),
  /** Word after the total in the widget: "10 shirts". */
  unit: B().max(40).optional(),
  /** See QuantityField.nextBreakHint. */
  nextBreakHint: Ue().optional()
}), Vd = Ut.extend({
  type: lt("number"),
  display: Te(["stepper", "slider", "input"]).default("input"),
  min: W().optional(),
  max: W().optional(),
  step: W().positive().optional(),
  defaultValue: W().optional()
}), Bd = Ut.extend({
  type: lt("text"),
  display: Te(["input", "textarea"]).default("input"),
  placeholder: B().optional(),
  maxLength: W().int().positive().optional()
}), jr = Te(["mm", "cm", "in"]), Zd = Ut.extend({
  type: lt("dimensions"),
  display: Te(["inputs"]).default("inputs"),
  /** Units the customer may pick between. */
  units: we(jr).min(1).default(["mm"]),
  defaultUnit: jr.default("mm"),
  /** Constraints, expressed in defaultUnit. */
  minW: W().positive().optional(),
  maxW: W().positive().optional(),
  minH: W().positive().optional(),
  maxH: W().positive().optional(),
  defaultValue: de({ w: W().positive(), h: W().positive() }).optional()
}), Hd = de({
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
  workflow: ms(Wo()).optional()
}).refine((e) => !!e.workflowId || !!e.workflow, {
  message: "filecheck needs a workflowId or an inline workflow"
}), Wd = Ut.extend({
  type: lt("file"),
  /**
   * dropzone: the built-in upload, with any registered producers (Print.App
   * designer, template picker) offered around it. producer: NO direct
   * upload - only the registered producers render; the merchant is
   * showcasing the designer, not file drops.
   */
  display: Te(["dropzone", "producer"]).default("dropzone"),
  accept: we(B()).default(["application/pdf"]),
  /** Which data-feed provider enriches the FileMetadata. */
  providerId: B().optional(),
  /**
   * Filecheck-backed upload: replaces the dropzone with the Filecheck
   * intake element when the storefront supplies an element-mode provider
   * config (publishable key lives there — NEVER in this blueprint).
   */
  filecheck: Hd.optional(),
  /**
   * Let the customer attach several files here (artwork plus fonts, a set
   * of photos, a mailing list). Attachments only: the price never depends
   * on them. Direct uploads only - a Filecheck intake or a designer fills
   * the field with ONE artwork, so `multiple` is ignored there.
   */
  multiple: Ue().optional(),
  /** With `multiple`: how many files at most (2-10, default 5). */
  maxFiles: W().int().min(2).max(10).optional(),
  /**
   * This field's file sets the price: its page counts and size feed per-page
   * and per-area pricing and `file.*` conditions, and it is the file the
   * signed price names. Mark it when a product takes two files (a thesis PDF
   * and a designed cover); unmarked, the price follows whichever file the
   * customer added last.
   */
  pricing: Ue().optional()
}), Kd = 10, Gd = 5;
function Lr(e) {
  return !e.multiple || e.display === "producer" || e.providerId === "filecheck" ? 1 : Math.min(Kd, Math.max(2, e.maxFiles ?? Gd));
}
function Qo(e) {
  return e.sections.flatMap((t) => t.fields.filter((n) => n.type === "file"));
}
function Yd(e) {
  return Qo(e).find((t) => t.pricing === !0);
}
function Jo(e) {
  const t = Qo(e);
  return t.find((n) => n.display === "producer") ?? t[0];
}
const Qd = Ut.extend({
  type: lt("info"),
  /** summary: live selection recap. note: static text block. */
  display: Te(["summary", "note"]).default("note"),
  body: B().optional()
}), Jd = Sd("type", [
  Dd,
  zd,
  qd,
  Ud,
  Vd,
  Bd,
  Zd,
  Wd,
  Qd
]);
function oi(e) {
  return e.type === "select-one" || e.type === "select-many";
}
function Vt(e) {
  return oi(e) || e.type === "quantities";
}
function An(e) {
  return e.type === "quantity" || e.type === "quantities";
}
const Xd = de({
  id: B().min(1),
  title: B(),
  fields: we(Jd)
}), ef = de({
  /** axisFieldId -> choiceId, exactly one entry per axis (validate.ts). */
  select: ms(B()),
  sku: B().optional(),
  /** Absolute replacement for pricing.basePrice.amount while selected. */
  price: W().nonnegative().optional(),
  available: Ue().default(!0),
  /** Platform hook (e.g. Shopify variant GID) for adapters that map to real variants. */
  platformVariantId: B().optional()
}), tf = de({
  /** Field ids of select-one fields forming the matrix (e.g. ["size","color"]). */
  axes: we(B().min(1)).min(1),
  combinations: we(ef)
}), vs = de({
  version: lt(Oi).default(Oi),
  productId: B().min(1),
  title: B(),
  /** stacked: all sections at once. wizard: one section per step. */
  layout: Te(["stacked", "wizard"]).default("stacked"),
  pricing: Fd.default({}),
  variants: tf.optional(),
  sections: we(Xd)
});
de({
  w: W().positive(),
  h: W().positive(),
  unit: jr
});
function ut(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && typeof e.w == "number" && typeof e.h == "number";
}
function nf(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.values(e).every((t) => typeof t == "number");
}
const hi = ["qty", "w", "h", "area", "pages"], Dr = {
  min: [2, void 0],
  max: [2, void 0],
  round: [1, 2],
  ceil: [1, 1],
  floor: [1, 1],
  abs: [1, 1],
  sqrt: [1, 1],
  band: [4, void 0]
}, Xo = Object.keys(Dr), fr = 500, _a = 10, rf = 64, sf = /^[A-Za-z][A-Za-z0-9_]{0,31}$/, af = /^[A-Za-z0-9_.,+\-*/^()\s]$/;
class el extends Error {
  constructor(n) {
    super(n.message);
    Qt(this, "detail");
    this.detail = n;
  }
}
function Fe(e, t, n) {
  throw new el({ code: e, message: t, at: n });
}
function of(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const i = e[n];
    if (af.test(i) || Fe("formula-character", `"${i}" can't be used in a formula. Use + - * / ^, brackets, numbers and names.`, n), /\s/.test(i)) {
      n += 1;
      continue;
    }
    const r = /^(\d+(\.\d+)?|\.\d+)/.exec(e.slice(n));
    if (r) {
      const a = r[0];
      e[n + a.length] === "." && Fe("formula-syntax", `"${a}." is not a number.`, n), t.push({ type: "number", value: Number(a), text: a, at: n }), n += a.length;
      continue;
    }
    const s = /^[A-Za-z_][A-Za-z0-9_]*/.exec(e.slice(n));
    if (s) {
      t.push({ type: "name", text: s[0], at: n }), n += s[0].length;
      continue;
    }
    i === "." && Fe("formula-syntax", 'A "." must be part of a number, like 0.25.', n), t.push({ type: "op", text: i, at: n }), n += 1;
  }
  return t.push({ type: "end", text: "", at: e.length }), t;
}
class lf {
  constructor(t) {
    Qt(this, "tokens");
    Qt(this, "index", 0);
    Qt(this, "depth", 0);
    Qt(this, "names", []);
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
    this.peek().type === "end" && Fe("formula-syntax", "Enter a formula.", 0);
    const t = this.expression(), n = this.peek();
    return n.type !== "end" && this.unexpected(n), t;
  }
  expression() {
    this.depth += 1, this.depth > rf && Fe("formula-too-long", "This formula is nested too deeply.", this.peek().at);
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
      return n.kind === "binary" && n.op === "^" && Fe("formula-ambiguous-power", "Add brackets: -(2^2) or (-2)^2.", t.at), { kind: "negate", operand: n };
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
      return this.isOp("(") ? this.call(t, n) : (n in Dr && Fe("formula-syntax", `${t.text} needs brackets, like ${n}(a, b).`, t.at), this.names.push({ name: n, written: t.text, at: t.at }), this.noImplicitProduct(t.text), { kind: "name", name: n, written: t.text, at: t.at });
    }
    if (t.type === "op" && t.text === "(") {
      const n = this.expression();
      return this.expect(")", t.at), this.noImplicitProduct(")"), { kind: "group", inner: n };
    }
    return this.index -= 1, this.unexpected(t);
  }
  call(t, n) {
    const i = Dr[n];
    i || Fe("formula-unknown-name", `There is no function "${t.text}". You can use: ${Xo.join(", ")}.`, t.at);
    const r = this.next(), s = [];
    if (!this.isOp(")"))
      for (s.push(this.expression()); this.isOp(","); )
        this.next(), s.push(this.expression());
    this.expect(")", r.at);
    const [a, o] = i;
    if ((s.length < a || o !== void 0 && s.length > o) && Fe("formula-arity", tl(n), t.at), n === "band" && cf(s, t.at), n === "round" && s[1] !== void 0) {
      const l = Pi(s[1]);
      l !== void 0 && !(Number.isInteger(l) && l >= 0 && l <= 4) && Fe("formula-arity", "round(x, d) rounds to 0 to 4 decimals.", t.at);
    }
    return this.noImplicitProduct(")"), { kind: "call", fn: n, args: s };
  }
  expect(t, n) {
    const i = this.peek();
    if (i.type === "op" && i.text === t) {
      this.next();
      return;
    }
    i.type === "end" && Fe("formula-syntax", "A bracket opened here is never closed.", n), this.unexpected(i);
  }
  /** "2area" or "2(…)": say what is missing instead of a bare "unexpected". */
  noImplicitProduct(t) {
    const n = this.peek();
    if (n.type === "number" || n.type === "name" || n.type === "op" && n.text === "(") {
      const i = n.type === "op" ? "(" : n.text;
      Fe("formula-syntax", `Missing an operator between ${t} and ${i}: write ${t} * ${i}.`, n.at);
    }
  }
  unexpected(t) {
    if (t.type === "end" && Fe("formula-syntax", "The formula ends too early.", t.at), t.text === ",") {
      const n = this.previous(), i = this.tokens[this.index + 1];
      (n == null ? void 0 : n.type) === "number" && (i == null ? void 0 : i.type) === "number" && Fe("formula-syntax", `Use a dot for decimals: ${n.text}.${i.text}.`, t.at), Fe("formula-syntax", 'A "," only separates the values of a function.', t.at);
    }
    t.text === ")" && Fe("formula-syntax", 'This ")" has no matching "(".', t.at), Fe("formula-syntax", `"${t.text}" is not expected here.`, t.at);
  }
}
function tl(e) {
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
function Pi(e) {
  if (e.kind === "number")
    return e.value;
  if (e.kind === "group")
    return Pi(e.inner);
  if (e.kind === "negate") {
    const t = Pi(e.operand);
    return t === void 0 ? void 0 : -t;
  }
}
function cf(e, t) {
  (e.length - 1) % 2 === 0 && Fe("formula-arity", tl("band"), t);
  let n;
  for (let i = 1; i < e.length - 1; i += 2) {
    const r = Pi(e[i]);
    r !== void 0 && (n !== void 0 && r <= n && Fe("formula-arity", `The limits in band() must increase (${r} after ${n}).`, t), n = r);
  }
}
function bs(e) {
  if (e.length > fr)
    return {
      ok: !1,
      error: {
        code: "formula-too-long",
        message: `A formula can be at most ${fr} characters — split it into steps.`,
        at: fr
      }
    };
  try {
    const t = new lf(of(e));
    return { ok: !0, ast: t.parse(), names: t.names };
  } catch (t) {
    if (t instanceof el)
      return { ok: !1, error: t.detail };
    throw t;
  }
}
function uf(e) {
  const t = [], n = e.steps ?? [];
  n.length > _a && t.push({
    path: ["steps"],
    code: "formula-too-long",
    message: `A formula can have at most ${_a} steps.`
  });
  const i = /* @__PURE__ */ new Set([...hi, ...Xo]), r = /* @__PURE__ */ new Map();
  n.forEach((a, o) => {
    const l = a.name.toLowerCase();
    sf.test(a.name) ? i.has(l) ? t.push({
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
    const c = bs(a);
    if (!c.ok) {
      t.push({ path: o, code: c.error.code, message: c.error.message });
      return;
    }
    for (const { name: u, written: d } of c.names) {
      if (hi.includes(u))
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
            ...hi,
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
function xs(e) {
  const t = /* @__PURE__ */ new Set(), n = [...(e.steps ?? []).map((i) => i.expression), e.expression];
  for (const i of n) {
    const r = bs(i);
    if (r.ok)
      for (const { name: s } of r.names)
        hi.includes(s) && t.add(s);
  }
  return t;
}
const nl = /* @__PURE__ */ new Set([
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
]), il = /* @__PURE__ */ new Set(["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"]);
function rl(e) {
  const t = e.toUpperCase();
  return nl.has(t) ? 0 : il.has(t) ? 3 : 2;
}
function df(e) {
  return /^[A-Z]{3}$/.test(e) && (nl.has(e) || il.has(e) || ff.has(e));
}
const ff = /* @__PURE__ */ new Set([
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
class fn extends Error {
}
const _n = (e) => typeof e == "object" && e !== null && !Array.isArray(e);
function pf(e) {
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
function hf(e) {
  const t = /* @__PURE__ */ new Map(), n = Array.isArray(e.sections) ? e.sections : [];
  for (const i of n) {
    const r = _n(i) && Array.isArray(i.fields) ? i.fields : [];
    for (const s of r)
      _n(s) && typeof s.id == "string" && Array.isArray(s.options) && t.set(s.id, new Set(s.options.flatMap((a) => _n(a) && typeof a.id == "string" ? [a.id] : [])));
  }
  return t;
}
function mf(e, t, n) {
  if (!_n(t))
    throw new fn("The matrix table must be an object.");
  const { choices: i, prices: r, off: s = [], skus: a = [] } = t;
  if (!Array.isArray(i) || i.length !== e.length || !i.every((f) => Array.isArray(f) && f.every((m) => typeof m == "string")))
    throw new fn("The matrix table needs one list of choice ids per axis.");
  const o = pf(i);
  if (!Array.isArray(r) || r.length !== o.length)
    throw new fn(`The matrix table has ${Array.isArray(r) ? r.length : 0} prices for ${o.length} combinations.`);
  if (!r.every((f) => f === null || typeof f == "number" && Number.isFinite(f) && f >= 0))
    throw new fn("Matrix prices must be numbers of zero or more, or null.");
  const l = (f) => Number.isInteger(f) && f >= 0 && f < o.length;
  if (!Array.isArray(s) || !s.every(l))
    throw new fn("Matrix unavailable positions are out of range.");
  if (!Array.isArray(a) || !a.every((f) => Array.isArray(f) && f.length === 2 && l(f[0]) && typeof f[1] == "string"))
    throw new fn("Matrix SKUs must be [position, sku] pairs.");
  const c = new Set(s), u = new Map(a.map(([f, m]) => [f, m])), d = [];
  return o.forEach((f, m) => {
    const g = r[m], y = u.get(m);
    if (g === null && !c.has(m) && y === void 0 || f.some((I, w) => n.has(e[w]) && !n.get(e[w]).has(I)))
      return;
    const b = {
      select: Object.fromEntries(e.map((I, w) => [I, f[w]])),
      available: !c.has(m)
    };
    g !== null && (b.price = g), y !== void 0 && (b.sku = y), d.push(b);
  }), d;
}
function gf(e) {
  if (!_n(e) || !_n(e.variants) || e.variants.table === void 0)
    return e;
  const { table: t, ...n } = e.variants, i = Array.isArray(n.axes) ? n.axes.filter((r) => typeof r == "string") : [];
  return {
    ...e,
    variants: { ...n, axes: i, combinations: mf(i, t, hf(e)) }
  };
}
function sl(e) {
  let t;
  try {
    t = gf(e);
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
  const n = vs.safeParse(t);
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
  const i = al(n.data);
  return {
    ok: !i.some((r) => r.severity === "error"),
    value: n.data,
    issues: i
  };
}
vs.superRefine((e, t) => {
  for (const n of al(e))
    n.severity === "error" && t.addIssue({
      code: E.custom,
      path: n.path,
      message: `${n.code}: ${n.message}`
    });
});
function al(e) {
  const t = [], n = (c, u, d, f = "error") => t.push({ path: c, code: u, message: d, severity: f }), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  let a = 0, o, l = !1;
  e.sections.forEach((c, u) => {
    r.has(c.id) && n(["sections", u, "id"], "duplicate-section-id", `Duplicate section id "${c.id}".`), r.add(c.id), c.fields.forEach((d, f) => {
      const m = ["sections", u, "fields", f];
      if (i.has(d.id) ? n([...m, "id"], "duplicate-field-id", `Duplicate field id "${d.id}".`) : i.set(d.id, { field: d, path: m }), (d.id === Ko || d.id.startsWith("file.")) && n([...m, "id"], "reserved-field-id", `Field id "${d.id}" is reserved for condition refs.`), An(d) && (o ?? (o = m), Fr(d.visibleWhen) || (a += 1, a > 1 && n(m, "multiple-quantity-fields", "Only one quantity field can show unconditionally. Give the others a visibility rule so a single quantity field is shown at a time."))), d.role) {
        const g = s.get(d.role);
        g ? n([...m, "role"], "duplicate-role", `Role "${d.role}" is already used by field "${g}" — only one field per role.`) : s.set(d.role, d.id);
      }
      d.type === "file" && (l = !0);
    });
  }), yf([...i.values()], n);
  for (const { field: c, path: u } of i.values()) {
    xf(c, u, n), _f(c, u, n), wf(c, u, i, n);
    const d = [
      { mods: c.priceModifiers, base: [...u, "priceModifiers"] }
    ];
    Vt(c) && c.options.forEach((f, m) => {
      d.push({
        mods: f.priceModifiers,
        base: [...u, "options", m, "priceModifiers"]
      });
    });
    for (const { mods: f, base: m } of d)
      f.forEach((g, y) => {
        Cf(g, [...m, y], i, l, n);
      });
    c.type === "quantities" && Af(c, u, n);
  }
  return If(e.pricing.basePrice, ["pricing", "basePrice"], n), e.variants && Nf(e, i, n), o && !bf(e) && n(o, "quantity-has-no-effect", "Changing the quantity does not change the price: every amount in this product is added once per order. If customers can buy more than one, set the base price to per unit, or price the options per unit instead of fixed.", "warning"), df(e.pricing.currency) || n(["pricing", "currency"], "unknown-currency", `Currency "${e.pricing.currency}" is not in the known list; totals will round to 2 decimals.`, "warning"), t;
}
function yf(e, t) {
  const n = e.filter(({ field: a }) => a.type === "file"), i = n.filter(({ field: a }) => a.type === "file" && a.pricing === !0);
  i.slice(1).forEach(({ path: a }) => {
    t([...a, "pricing"], "multiple-pricing-files", "Only one file field can set the price; the first one marked does.", "warning");
  });
  const r = n.some(({ field: a }) => a.type === "file" && (a.display === "producer" || a.providerId === "filecheck")), s = n[0];
  i.length === 0 && n.length > 1 && r && s && t([...s.path, "pricing"], "pricing-file-unmarked", "This product takes more than one file. Turn on Sets the price on the one whose pages and size are priced, or the price follows whichever file the customer added last.", "warning");
}
const vf = /* @__PURE__ */ new Set([
  "perUnit",
  "perPage",
  "perColorPage",
  "perMonoPage",
  "perArea",
  "perLength"
]);
function bf(e) {
  var i;
  const t = e.pricing.basePrice;
  if (t.per === "unit" || t.tiers)
    return !0;
  const n = (r) => {
    var s;
    return vf.has(r.type) || (((s = r.tiers) == null ? void 0 : s.basis) ?? "quantity") === "quantity" && r.tiers !== void 0 || r.type === "formula" && r.formula !== void 0 && xs(r.formula).has("qty");
  };
  for (const r of e.sections)
    for (const s of r.fields)
      if ((i = s.priceModifiers) != null && i.some(n) || Vt(s) && s.options.some((a) => {
        var o;
        return (o = a.priceModifiers) == null ? void 0 : o.some(n);
      }))
        return !0;
  return !1;
}
function xf(e, t, n) {
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
  e.type === "quantities" && (e.max !== void 0 && e.min > e.max && n([...t, "min"], "min-gt-max", `min (${e.min}) exceeds max (${e.max}).`), e.maxTotal !== void 0 && e.minTotal > e.maxTotal && n([...t, "minTotal"], "min-gt-max", `minTotal (${e.minTotal}) exceeds maxTotal (${e.maxTotal}).`)), e.type === "select-many" && e.maxSelect !== void 0 && e.minSelect > e.maxSelect && n([...t, "minSelect"], "min-gt-max", `minSelect (${e.minSelect}) exceeds maxSelect (${e.maxSelect}).`), e.type === "dimensions" && (e.minW !== void 0 && e.maxW !== void 0 && e.minW > e.maxW && n([...t, "minW"], "min-gt-max", `minW (${e.minW}) exceeds maxW (${e.maxW}).`), e.minH !== void 0 && e.maxH !== void 0 && e.minH > e.maxH && n([...t, "minH"], "min-gt-max", `minH (${e.minH}) exceeds maxH (${e.maxH}).`)), e.type === "file" && (e.providerId === "filecheck" && !((i = e.filecheck) != null && i.workflowId) && !((r = e.filecheck) != null && r.workflow) && n([...t, "filecheck"], "filecheck-missing-workflow", "Filecheck provider selected but no workflow (id or inline) set; the default uploader will be used.", "warning"), e.multiple && e.display === "producer" ? n([...t, "multiple"], "multiple-files-ignored", "Multiple files apply to direct uploads only; a designer field produces one artwork.", "warning") : e.multiple && e.providerId === "filecheck" && n([...t, "multiple"], "multiple-files-ignored", "Allow multiple files has no effect on a Filecheck field. Set how many files to collect, or named slots like Front and Back, in the upload rule of the Filecheck workflow.", "warning"), e.filecheck && e.providerId !== "filecheck" && n([...t, "providerId"], "filecheck-missing-workflow", 'Filecheck settings are present but providerId is not "filecheck"; they will be ignored.', "warning"));
}
function _f(e, t, n) {
  if (!Vt(e))
    return;
  const i = /* @__PURE__ */ new Set();
  let r = 0;
  e.options.forEach((s, a) => {
    i.has(s.id) && n([...t, "options", a, "id"], "duplicate-choice-id", `Duplicate choice id "${s.id}" in field "${e.id}".`), i.add(s.id), s.default && (r += 1);
  }), e.type === "select-one" && r > 1 && n([...t, "options"], "too-many-defaults", `select-one field "${e.id}" has ${r} default choices.`), e.type === "select-many" && e.maxSelect !== void 0 && r > e.maxSelect && n([...t, "options"], "too-many-defaults", `Default choices (${r}) exceed maxSelect (${e.maxSelect}).`);
}
function wf(e, t, n, i) {
  if (!e.visibleWhen)
    return;
  const r = [...t, "visibleWhen"], s = (a, o) => {
    if (gs(a)) {
      const l = Cd.includes(a.ref), c = a.ref === Ko, u = n.get(a.ref);
      if (!l && !c && !u) {
        i(o, "dangling-condition-ref", `Condition references unknown field "${a.ref}".`);
        return;
      }
      if (a.ref === e.id && i(o, "self-condition-ref", `Field "${e.id}" references itself.`), c && An(e) && i(o, "quantity-ref-on-quantity-field", `Quantity field "${e.id}" cannot be shown or hidden by the quantity.`), u && Vt(u.field) && (a.op === "eq" || a.op === "neq" || a.op === "in")) {
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
function ol(e, t, n) {
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
const kf = /* @__PURE__ */ new Set(["fixed", "percent", "multiplier", "setup"]), Sf = /* @__PURE__ */ new Set(["percent", "multiplier", "formula"]), Tf = /^[A-Za-z0-9_-]+$/;
function Af(e, t, n) {
  e.options.forEach((i, r) => {
    const s = [...t, "options", r];
    Tf.test(i.id) || n([...s, "id"], "quantities-choice-id", `Option id "${i.id}" may only use letters, digits, "-" and "_".`), i.priceModifiers.forEach((a, o) => {
      var c;
      const l = [...s, "priceModifiers", o];
      a.type === "formula" ? n([...l, "type"], "quantities-choice-modifier", "A formula can't price one option of a quantity per option — put it on the field.") : Sf.has(a.type) ? n([...l, "type"], "quantities-choice-modifier", `A "${a.type}" price on one option would change the whole order — price this option per unit, or put the rule on the field.`) : ((c = a.tiers) == null ? void 0 : c.mode) === "graduated" && a.tiers.basis === "quantity" && n([...l, "tiers", "mode"], "quantities-choice-modifier", "Graduated quantity breaks cannot be shared out between options — use flat breaks.");
    });
  });
}
function Cf(e, t, n, i, r) {
  if (e.type === "formula" || e.formula !== void 0) {
    $f(e, t, n, i, r);
    return;
  }
  if (e.tiers && (ol(e.tiers, [...t, "tiers"], r), e.tiers.mode === "graduated" && kf.has(e.type) && r([...t, "tiers", "mode"], "tier-basis-invalid", `Graduated tiers are meaningless on a "${e.type}" modifier.`), e.tiers.basis === "pages" && !i && r([...t, "tiers", "basis"], "pages-basis-without-file", "Pages-based tiers need a file field to supply page counts.", "warning")), (e.type === "perPage" || e.type === "perColorPage" || e.type === "perMonoPage") && !i && r([...t, "type"], "pages-basis-without-file", `"${e.type}" pricing needs a file field to supply page counts.`, "warning"), e.type === "perArea" || e.type === "perLength") {
    const s = e.type.toLowerCase();
    if (e.dimensionsField !== void 0) {
      const a = n.get(e.dimensionsField);
      (!a || a.field.type !== "dimensions") && r([...t, "dimensionsField"], `${s}-dangling-dims`, `"${e.dimensionsField}" is not a dimensions field.`);
    } else i || r([...t, "type"], `${s}-missing-source`, `${e.type} pricing has no dimensions field and no file field to read a canvas from.`, "warning");
  }
}
function $f(e, t, n, i, r) {
  if (e.type !== "formula") {
    r([...t, "formula"], "formula-missing", `Only a formula rule can carry a formula, not a "${e.type}" rule.`);
    return;
  }
  const s = e.formula;
  if (!s) {
    r([...t, "formula"], "formula-missing", "This formula rule has no formula.");
    return;
  }
  for (const l of uf(s))
    r([...t, "formula", ...l.path], l.code, l.message);
  e.tiers && r([...t, "tiers"], "formula-tiers", "A formula rule can't have volume breaks — put the breaks in the formula, e.g. with band().");
  const a = xs(s), o = a.has("w") || a.has("h") || a.has("area");
  if (e.dimensionsField !== void 0) {
    const l = n.get(e.dimensionsField);
    (!l || l.field.type !== "dimensions") && r([...t, "dimensionsField"], "formula-dangling-dims", `"${e.dimensionsField}" is not a dimensions field.`);
  } else o && !i && r([...t, "dimensionsField"], "formula-no-size", "This formula uses the size (w, h or area), but there is no size field and no file upload to read it from, so the size is always 0.", "warning");
  a.has("pages") && !i && r([...t, "formula"], "pages-basis-without-file", "This formula uses pages, but there is no file field to supply page counts.", "warning");
}
function If(e, t, n) {
  e.tiers && (ol(e.tiers, [...t, "tiers"], n), e.tiers.basis !== "quantity" && n([...t, "tiers", "basis"], "tier-basis-invalid", "Base price tiers must use the quantity basis."), e.tiers.mode === "graduated" && e.per === "order" && n([...t, "tiers", "mode"], "tier-basis-invalid", 'Graduated base tiers require per: "unit".'));
}
function Nf(e, t, n) {
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
const zr = "1.0", Ef = de({
  /** Minimum quantity required to trigger this tier (inclusive). */
  minQty: W().nonnegative(),
  /** Maximum quantity for this tier (inclusive). If omitted, tier spans to infinity. */
  maxQty: W().nonnegative().optional(),
  /** Price/amount applied for this tier. */
  amount: W()
}), ll = de({
  type: Te([
    "fixed",
    "perUnit",
    "perPage",
    "perColorPage",
    "perMonoPage",
    "percent",
    "multiplier"
  ]),
  amount: W(),
  tiers: we(Ef).optional()
}), Of = de({
  /** The field id whose value gates visibility. */
  field: B(),
  /** Show when the field's selected value equals one of these. */
  equals: ei([B(), we(B())]).optional(),
  /** Show only when a value is present (any non-empty selection). */
  isSet: Ue().optional()
}), Pf = de({
  id: B().min(1),
  label: B(),
  description: B().optional(),
  image: B().url().optional(),
  color: B().optional(),
  default: Ue().optional(),
  priceModifiers: we(ll).default([]),
  /** Dead in v1 runtime; dropped by migration. */
  reveals: we(B()).default([])
}), Mf = Te([
  "card-select",
  "image-grid",
  "swatch",
  "pill-toggle",
  "dropdown",
  "number-stepper",
  "file-upload",
  "summary"
]), Rf = de({
  id: B().min(1),
  type: Mf,
  label: B().optional(),
  helpText: B().optional(),
  required: Ue().default(!1),
  options: we(Pf).default([]),
  min: W().optional(),
  max: W().optional(),
  step: W().optional(),
  defaultValue: ei([B(), W()]).optional(),
  accept: we(B()).optional(),
  providerId: B().optional(),
  visibleWhen: Of.optional(),
  priceModifiers: we(ll).default([])
}), Ff = de({
  id: B().min(1),
  title: B(),
  layout: Te(["stacked", "tabs"]).default("stacked"),
  fields: we(Rf)
}), jf = de({
  version: lt(zr).default(zr),
  productId: B().min(1),
  title: B(),
  currency: B().default("USD"),
  basePrice: W().nonnegative().default(0),
  sections: we(Ff)
});
class Mi extends Error {
  constructor(n) {
    const i = n.map((r) => `${r.code} at ${r.path.join(".") || "<root>"}: ${r.message}`).join("; ");
    super(`Invalid product options: ${i}`);
    Qt(this, "issues");
    this.name = "ProductOptionsError", this.issues = n;
  }
}
function Lf(e) {
  const t = jf.safeParse(e);
  if (!t.success)
    throw new Mi(t.error.issues.map((c) => ({
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
    version: Oi,
    productId: n.productId,
    title: n.title,
    layout: s ? "wizard" : "stacked",
    pricing: {
      currency: Hf(n.currency, i),
      basePrice: { amount: n.basePrice, per: "order" }
    },
    sections: n.sections.map((c) => ({
      id: c.id,
      title: c.title,
      fields: c.fields.map((u) => {
        const d = qf(u, r, i);
        return d.type === "quantity" && (r = !0), d;
      })
    }))
  }, o = vs.parse(a), l = sl(o);
  if (!l.ok)
    throw new Mi(l.issues.filter((c) => c.severity === "error"));
  return { doc: o, warnings: i };
}
function Df(e) {
  const t = typeof e == "object" && e !== null ? e.version : void 0;
  if (t === void 0 || t === Oi) {
    const n = sl(e);
    if (!n.ok || !n.value)
      throw new Mi(n.issues.filter((i) => i.severity === "error"));
    return { doc: n.value, warnings: [] };
  }
  if (t === zr)
    return Lf(e);
  throw new Mi([
    {
      path: ["version"],
      code: "unknown-version",
      message: `Unsupported schema version "${String(t)}".`,
      severity: "error"
    }
  ]);
}
function wa(e, t) {
  const { doc: n, warnings: i } = Df(e);
  return n;
}
const zf = {
  "card-select": "cards",
  "image-grid": "grid",
  swatch: "swatches",
  "pill-toggle": "pills",
  dropdown: "dropdown"
};
function qf(e, t, n) {
  const i = {
    id: e.id,
    label: e.label,
    helpText: e.helpText,
    required: e.required,
    visibleWhen: Vf(e.visibleWhen),
    priceModifiers: e.priceModifiers.map((r) => cl(r, n))
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
        display: zf[e.type],
        options: e.options.map((r) => Uf(r, n))
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
        min: On(e.min) ?? 1,
        max: On(e.max),
        step: On(e.step) ?? 1,
        defaultValue: On(typeof e.defaultValue == "number" ? e.defaultValue : void 0) ?? On(e.min) ?? 1
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
function Uf(e, t) {
  return {
    id: e.id,
    label: e.label,
    description: e.description,
    image: e.image,
    color: e.color,
    default: e.default,
    priceModifiers: e.priceModifiers.map((n) => cl(n, t))
  };
}
function Vf(e) {
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
function On(e) {
  if (e === void 0)
    return;
  const t = Math.round(e);
  return t >= 1 ? t : void 0;
}
function cl(e, t) {
  return !e.tiers || e.tiers.length === 0 ? { type: e.type, amount: e.amount } : {
    type: e.type,
    amount: e.amount,
    tiers: {
      basis: "quantity",
      mode: "flat",
      rows: Bf(e.tiers, e.amount, t)
    }
  };
}
function Bf(e, t, n) {
  Zf(e) && n.push("Overlapping v1 tiers detected; earlier tiers win in the overlap (v1 behavior preserved).");
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
function Zf(e) {
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
function Hf(e, t) {
  const n = e.toUpperCase();
  return /^[A-Z]{3}$/.test(n) ? n : (t.push(`Currency "${e}" is not an ISO 4217 code; defaulting to USD.`), "USD");
}
const ka = "1.0", ul = Te(["mm", "cm", "in", "pt", "px"]), Wf = Te(["pending", "ready", "failed"]), Kf = Te(["info", "warning", "error"]), Gf = de({
  /** 1-based page index. */
  page: W().int().positive(),
  w: W().nonnegative(),
  h: W().nonnegative(),
  unit: ul.default("mm")
}), Yf = de({
  w: W().nonnegative(),
  h: W().nonnegative(),
  /** Bleed applied around the trim box, in `unit`. */
  bleed: W().nonnegative().default(0),
  unit: ul.default("mm")
}), Qf = de({
  /** Dominant color model detected in the file. */
  model: Te(["RGB", "CMYK", "Gray", "Mixed", "Unknown"]).default("Unknown"),
  /** Named spot colors (e.g. Pantone) found in the file. */
  spot: we(B()).default([])
}), Jf = de({
  /** Machine-readable code, e.g. "low-dpi", "not-embedded-font", "out-of-gamut". */
  code: B(),
  severity: Kf.default("warning"),
  message: B().optional(),
  /** 1-based page index the issue applies to, if page-specific. */
  page: W().int().positive().optional()
}), _s = de({
  /** Contract version, for forward/backward compatibility. */
  version: lt(ka).default(ka),
  /** Stable id assigned by the basic uploader; correlates feeds to a file. */
  fileId: B().min(1),
  /** Who produced this metadata. Free-form, but reserve known sources. */
  source: B().default("custom"),
  status: Wf.default("pending"),
  /** Original file name and MIME type, if known. */
  fileName: B().optional(),
  mimeType: B().optional(),
  fileSizeBytes: W().int().nonnegative().optional(),
  /** Total page count. Absent means "unknown" — pricing must fall back. */
  pages: W().int().nonnegative().optional(),
  colorPages: W().int().nonnegative().optional(),
  monoPages: W().int().nonnegative().optional(),
  pageSizes: we(Gf).optional(),
  canvas: Yf.optional(),
  colors: Qf.optional(),
  issues: we(Jf).default([]),
  /** Provider-specific extras that don't fit the core contract. */
  raw: ms(Wo()).optional()
}), Xf = de({
  pages: Ue().default(!1),
  colorDetection: Ue().default(!1),
  pageSizes: Ue().default(!1),
  canvas: Ue().default(!1),
  preflightIssues: Ue().default(!1)
}), ep = de({
  id: B().min(1),
  name: B(),
  /**
   * "push" = provider POSTs metadata to us; "pull" = we fetch from `endpoint`;
   * "element" = provider renders its own embedded uploader (e.g. the
   * Filecheck intake element) in place of the basic dropzone.
   */
  mode: Te(["push", "pull", "element"]).default("push"),
  endpoint: B().url().optional(),
  capabilities: Xf.default({}),
  /** element mode: publishable key (pk_live_/pk_test_ — browser-safe, store-level). */
  publishableKey: B().optional(),
  /** element mode: optional sub-tenant scope. */
  agentId: B().optional(),
  /** element mode: override the provider SDK script URL (staging/local dev). */
  scriptUrl: B().url().optional(),
  /** element mode: override the provider iframe URL (local dev). */
  iframeSrc: B().url().optional(),
  /** element mode: create preview sessions (unmetered, webhook-suppressed). */
  preview: Ue().optional()
}), Ri = [
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
], tp = {
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
};
function np(e) {
  const t = /\.([A-Za-z0-9]{1,16})$/.exec(e.trim());
  return t ? t[1].toLowerCase() : "";
}
function ip(e) {
  const t = e.replace(/^\./, "").toLowerCase();
  return Ri.find((n) => n.extensions.includes(t));
}
function ws(e) {
  const t = /* @__PURE__ */ new Set(), n = (i) => i.extensions.forEach((r) => t.add(r));
  for (const i of e) {
    const r = i.trim().toLowerCase();
    if (!r)
      continue;
    if (r.includes("/")) {
      for (const o of Ri) {
        const l = o.mime === r || tp[o.extensions[0]] === r, c = r !== "application/pdf" && o.mimeTypes.includes(r);
        (l || c) && n(o);
      }
      continue;
    }
    const s = ip(r);
    if (s) {
      n(s);
      continue;
    }
    const a = r.split(/[^a-z0-9]+/).filter(Boolean);
    for (const o of Ri)
      a.some((l) => o.words.includes(l)) && n(o);
  }
  return [...t];
}
function rp(e) {
  return ws(e).map((t) => `.${t}`).join(",");
}
function sp(e, t) {
  const n = ws(e);
  return n.length === 0 || n.includes(np(t));
}
function ap(e) {
  const t = ws(e);
  return Ri.filter((n) => n.extensions.some((i) => t.includes(i))).map((n) => n.label).join(", ");
}
const dl = {
  mm: 1e-3,
  cm: 0.01,
  in: 0.0254,
  pt: 0.0254 / 72,
  px: void 0
}, op = {
  sqm: 1,
  sqft: 0.3048 * 0.3048,
  sqin: 0.0254 * 0.0254
};
function fl(e, t, n, i) {
  const r = dl[n];
  return r === void 0 || e <= 0 || t <= 0 ? 0 : e * r * (t * r) / op[i];
}
function ks(e, t) {
  var n;
  if (e.dimensionsField !== void 0) {
    const i = t.selections[e.dimensionsField];
    return ut(i) ? i : void 0;
  }
  return (n = t.file) == null ? void 0 : n.canvas;
}
function pl(e, t) {
  const n = ks(e, t);
  return n ? fl(n.w, n.h, n.unit, e.areaUnit ?? "sqm") : 0;
}
function lp(e, t) {
  if (e === "quantity")
    return t.quantity;
  const n = cp(e, t);
  return nf(n) ? Object.keys(n).filter((i) => (n[i] ?? 0) > 0) : n;
}
function cp(e, t) {
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
function Sa(e) {
  return e !== void 0 && e !== "" && !(Array.isArray(e) && e.length === 0);
}
function up(e, t) {
  const n = lp(e.ref, t);
  if (e.op === "isSet")
    return Sa(n);
  if (e.op === "notSet")
    return !Sa(n);
  if (n === void 0)
    return !1;
  switch (e.op) {
    case "eq":
      return Ta(n, e.value);
    case "neq":
      return !Ta(n, e.value);
    case "in": {
      const i = Array.isArray(e.value) ? e.value.map(String) : e.value !== void 0 ? [String(e.value)] : [];
      return Array.isArray(n) ? n.some((r) => i.includes(String(r))) : ut(n) ? !1 : i.includes(String(n));
    }
    case "gt":
    case "gte":
    case "lt":
    case "lte": {
      if (Array.isArray(n) || ut(n))
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
function Ta(e, t) {
  if (Array.isArray(e)) {
    if (Array.isArray(t)) {
      const n = t.map(String);
      return e.some((i) => n.includes(String(i)));
    }
    return t !== void 0 && e.map(String).includes(String(t));
  }
  return ut(e) ? !1 : Array.isArray(t) ? t.map(String).includes(String(e)) : t !== void 0 && String(e) === String(t);
}
function hl(e, t) {
  if (!e)
    return !0;
  const n = (s) => gs(s) ? up(s, t) : hl(s, t), i = e.all === void 0 || e.all.every(n), r = e.any === void 0 || e.any.length === 0 || e.any.some(n);
  return i && r;
}
function Aa(e, t) {
  return hl(e.visibleWhen, t);
}
function Ss(e, t, n) {
  return Aa(t, n) ? !An(t) || Fr(t.visibleWhen) ? !0 : !e.sections.some((i) => i.fields.some((r) => An(r) && Fr(r.visibleWhen) && Aa(r, n))) : !1;
}
const dp = {
  m: 1,
  ft: 0.3048,
  in: 0.0254,
  cm: 0.01
};
function qr(e, t, n) {
  const i = dl[t];
  return i === void 0 || e <= 0 ? 0 : e * i / dp[n];
}
function fp(e, t, n) {
  return n === "w" ? e : n === "max" ? Math.max(e, t) : t;
}
function ml(e, t) {
  const n = ks(e, t);
  return n ? qr(fp(n.w, n.h, e.lengthAxis), n.unit, e.lengthUnit ?? "m") : 0;
}
const pp = 256, fi = /* @__PURE__ */ new Map();
function Ca(e) {
  const t = fi.get(e);
  if (t !== void 0)
    return t;
  const n = bs(e), i = n.ok ? n.ast : null;
  return fi.size >= pp && fi.clear(), fi.set(e, i), i;
}
function hp(e, t) {
  const n = new Map(Object.entries(t));
  for (const s of e.steps ?? []) {
    const a = Ca(s.expression);
    if (!a)
      return Number.NaN;
    n.set(s.name.toLowerCase(), tn(a, n));
  }
  const i = Ca(e.expression);
  if (!i)
    return Number.NaN;
  const r = tn(i, n);
  return Number.isFinite(r) ? r : Number.NaN;
}
function tn(e, t) {
  switch (e.kind) {
    case "number":
      return e.value;
    case "name":
      return t.get(e.name) ?? Number.NaN;
    case "group":
      return tn(e.inner, t);
    case "negate":
      return -tn(e.operand, t);
    case "binary": {
      const n = tn(e.left, t), i = tn(e.right, t);
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
          return mp(n, i);
      }
      break;
    }
    case "call":
      return gp(e.fn, e.args.map((n) => tn(n, t)));
  }
  return Number.NaN;
}
function mp(e, t) {
  if (!Number.isInteger(t))
    return Math.pow(e, t);
  let n = Math.abs(t), i = 1, r = e;
  for (; n > 0; )
    n % 2 === 1 && (i *= r), r *= r, n = Math.floor(n / 2);
  return t < 0 ? 1 / i : i;
}
function gp(e, t) {
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
function yp(e, t) {
  var r;
  const n = ks(e, t), i = e.lengthUnit ?? "m";
  return {
    qty: t.quantity,
    w: n ? pr(qr(n.w, n.unit, i)) : 0,
    h: n ? pr(qr(n.h, n.unit, i)) : 0,
    area: n ? pr(fl(n.w, n.h, n.unit, e.areaUnit ?? "sqm")) : 0,
    pages: ((r = t.file) == null ? void 0 : r.pages) ?? 0
  };
}
function pr(e) {
  return e === 0 ? 0 : Number(e.toPrecision(12));
}
function vp(e, t) {
  return e.formula ? hp(e.formula, yp(e, t)) : Number.NaN;
}
function ct(e, t) {
  const i = 10 ** rl(t);
  return Math.round((e + Number.EPSILON) * i) / i;
}
function bp(e) {
  const t = [];
  for (const n of e.sections)
    for (const i of n.fields)
      An(i) && t.push(i);
  return t;
}
function li(e, t, n) {
  const i = bp(e);
  if (i.length <= 1)
    return i[0];
  const r = { selections: t, file: n, quantity: 1 };
  return i.find((s) => Ss(e, s, r)) ?? i[0];
}
function gl(e, t, n) {
  const i = li(e, t, n);
  return i ? i.type === "quantities" ? Ts(Rt(i, t[i.id])) : ti(i, t[i.id]) : 1;
}
function ti(e, t) {
  const n = typeof t == "number" ? t : typeof t == "string" && t.trim() !== "" ? Number(t) : e.defaultValue;
  return Number.isNaN(n) ? Ur(e, e.defaultValue) : Ur(e, n);
}
function Rt(e, t) {
  const n = {};
  if (typeof t != "object" || t === null || Array.isArray(t))
    return n;
  const i = t;
  for (const r of e.options) {
    const s = i[r.id], a = typeof s == "number" ? s : typeof s == "string" && s.trim() !== "" ? Number(s) : Number.NaN;
    !Number.isFinite(a) || Math.round(a) <= 0 || (n[r.id] = Ur(e, a));
  }
  return n;
}
function Ts(e) {
  let t = 0;
  for (const n of Object.values(e))
    t += n;
  return t;
}
function Ur(e, t) {
  const n = e.step;
  let i = Math.round(t);
  return i = e.min + Math.round((i - e.min) / n) * n, i < e.min && (i = e.min), e.max !== void 0 && i > e.max && (i = e.min + Math.floor((e.max - e.min) / n) * n), i;
}
function ni(e, t) {
  for (const n of e)
    if (n.upTo === void 0 || t <= n.upTo)
      return n;
  return e[e.length - 1];
}
function Ln(e, t) {
  let n = 0, i = 0;
  for (const r of t) {
    const a = (r.upTo === void 0 ? e : Math.min(r.upTo, e)) - i;
    if (a > 0 && (n += a * r.amount), r.upTo === void 0 || e <= r.upTo)
      break;
    i = r.upTo;
  }
  return n;
}
function Gi(e, t) {
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
function xp(e, t) {
  const n = Gi(e, t);
  if (n != null && n.sku)
    return n.sku;
  const i = [];
  for (const r of e.sections)
    for (const s of r.fields) {
      if (!oi(s))
        continue;
      const a = t[s.id], o = Array.isArray(a) ? a : typeof a == "string" ? [a] : [];
      for (const l of s.options)
        o.includes(l.id) && l.sku && i.push(l.sku);
    }
  return i.length > 0 ? i.join("-") : void 0;
}
function _p(e, t, n, i) {
  for (const a of e.sections)
    for (const o of a.fields) {
      if (o.id !== n || !Vt(o))
        continue;
      const l = o.options.find((c) => c.id === i);
      if (!l || l.disabled)
        return !1;
    }
  const r = e.variants;
  if (!r || !r.axes.includes(n))
    return !0;
  const s = Gi(e, { ...t, [n]: i });
  return s ? s.available : !0;
}
function wp(e, t) {
  const n = Gi(e, t);
  if (n && !n.available)
    return !0;
  for (const i of e.sections)
    for (const r of i.fields) {
      if (!Vt(r))
        continue;
      const s = t[r.id], a = r.type === "quantities" ? Object.keys(Rt(r, s)) : Array.isArray(s) ? s : typeof s == "string" ? [s] : [];
      for (const o of r.options)
        if (a.includes(o.id) && o.disabled)
          return !0;
    }
  return !1;
}
function Vr(e, t) {
  const n = gl(e, t.selections, t.file), i = t.quantity ?? n, r = li(e, t.selections, t.file), s = (r == null ? void 0 : r.type) === "quantities" ? { fieldId: r.id, scale: n > 0 ? i / n : 0 } : void 0, a = {
    selections: t.selections,
    file: t.file,
    quantity: i
  }, o = e.pricing.currency, l = [], c = Gi(e, t.selections), u = wp(e, t.selections);
  let d = !1;
  const f = xp(e, t.selections), m = kp(e.pricing.basePrice, c == null ? void 0 : c.price, i);
  l.push({
    sourceId: "base",
    label: "Base price",
    stage: "base",
    type: "base",
    amount: ct(m, o)
  });
  let g = m;
  const y = yl(e, a, s);
  for (const { sourceId: O, label: Y, modifier: D, units: Q } of y) {
    const M = Tp(D, a, Q);
    if (M !== void 0) {
      if (Number.isNaN(M)) {
        d = !0;
        continue;
      }
      g += M, l.push({
        sourceId: O,
        label: Y,
        stage: "additive",
        type: D.type,
        amount: ct(M, o)
      });
    }
  }
  const b = g;
  for (const { sourceId: O, label: Y, modifier: D } of y) {
    if (D.type !== "percent")
      continue;
    const Q = Kt(D, a), M = g * (Q / 100);
    g += M, l.push({
      sourceId: O,
      label: Y,
      stage: "percent",
      type: "percent",
      amount: ct(M, o)
    });
  }
  for (const { sourceId: O, label: Y, modifier: D } of y) {
    if (D.type !== "multiplier")
      continue;
    const Q = Kt(D, a), M = g * Q - g;
    g += M, l.push({
      sourceId: O,
      label: Y,
      stage: "multiplier",
      type: "multiplier",
      amount: ct(M, o)
    });
  }
  e.pricing.setupFee !== void 0 && e.pricing.setupFee > 0 && (g += e.pricing.setupFee, l.push({
    sourceId: "setup-fee",
    label: "Setup fee",
    stage: "setup",
    type: "setup",
    amount: ct(e.pricing.setupFee, o)
  }));
  for (const { sourceId: O, label: Y, modifier: D } of y) {
    if (D.type !== "setup")
      continue;
    const Q = Kt(D, a);
    g += Q, l.push({
      sourceId: O,
      label: Y,
      stage: "setup",
      type: "setup",
      amount: ct(Q, o)
    });
  }
  const I = Math.max(e.pricing.minimumPrice ?? 0, 0);
  if (g < I) {
    const O = I - g;
    g = I, l.push({
      sourceId: "adjustment:minimum",
      label: "Minimum order adjustment",
      stage: "adjustment",
      type: "minimum",
      amount: ct(O, o)
    });
  }
  const w = ct(g, o), U = u ? "combination" : d ? "formula" : void 0;
  return {
    currency: o,
    quantity: i,
    unavailable: U !== void 0,
    ...U ? { unavailableReason: U } : {},
    sku: f,
    base: ct(m, o),
    subtotal: ct(b, o),
    total: w,
    unitPrice: ct(g / Math.max(i, 1), o),
    lines: l
  };
}
function kp(e, t, n) {
  const i = t ?? e.amount, r = e.tiers;
  return e.per === "order" ? r ? ni(r.rows, n).amount : i : r ? r.mode === "graduated" ? Ln(n, r.rows) : ni(r.rows, n).amount * n : i * n;
}
function yl(e, t, n) {
  const i = [];
  for (const r of e.sections)
    for (const s of r.fields) {
      if (!Ss(e, s, t))
        continue;
      for (const o of s.priceModifiers)
        i.push({
          sourceId: s.id,
          label: s.label ?? s.id,
          modifier: o
        });
      if (s.type === "quantities") {
        const o = Rt(s, t.selections[s.id]), l = (n == null ? void 0 : n.fieldId) === s.id ? n.scale : 1;
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
      if (!oi(s))
        continue;
      const a = Sp(s.id, t.selections);
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
function Sp(e, t) {
  const n = t[e];
  return n === void 0 ? [] : Array.isArray(n) ? n : typeof n == "object" ? [] : [String(n)];
}
function Dn(e, t) {
  var n, i;
  switch (((n = e.tiers) == null ? void 0 : n.basis) ?? "quantity") {
    case "quantity":
      return t.quantity;
    case "pages":
      return ((i = t.file) == null ? void 0 : i.pages) ?? 0;
    case "area":
      return pl(e, t);
    case "length":
      return ml(e, t);
  }
}
function Kt(e, t) {
  return e.tiers ? ni(e.tiers.rows, Dn(e, t)).amount : e.amount;
}
function Tp(e, t, n = t.quantity) {
  var r, s, a, o, l, c, u;
  const i = n;
  switch (e.type) {
    case "percent":
    case "multiplier":
    case "setup":
      return;
    case "fixed":
      return Kt(e, t);
    case "perUnit":
      return ((r = e.tiers) == null ? void 0 : r.mode) === "graduated" ? Ln(Dn(e, t), e.tiers.rows) : Kt(e, t) * i;
    case "perPage":
    case "perColorPage":
    case "perMonoPage": {
      const d = e.type === "perPage" ? ((s = t.file) == null ? void 0 : s.pages) ?? 0 : e.type === "perColorPage" ? ((a = t.file) == null ? void 0 : a.colorPages) ?? 0 : ((o = t.file) == null ? void 0 : o.monoPages) ?? 0;
      return ((l = e.tiers) == null ? void 0 : l.mode) === "graduated" ? Ln(Dn(e, t), e.tiers.rows) * i : Kt(e, t) * d * i;
    }
    case "perArea": {
      const d = pl(e, t);
      return ((c = e.tiers) == null ? void 0 : c.mode) === "graduated" ? Ln(Dn(e, t), e.tiers.rows) * i : Kt(e, t) * d * i;
    }
    case "formula":
      return vp(e, t);
    case "perLength": {
      const d = ml(e, t);
      return ((u = e.tiers) == null ? void 0 : u.mode) === "graduated" ? Ln(Dn(e, t), e.tiers.rows) * i : Kt(e, t) * d * i;
    }
  }
}
const Ap = 5;
function Cp(e, t) {
  const n = li(e, t.selections, t.file);
  if (!n)
    return;
  const i = Vr(e, t), r = i.quantity;
  if (r <= 0 || i.unavailable)
    return;
  const s = { selections: t.selections, file: t.file, quantity: r }, a = yl(e, s).map(({ modifier: u }) => u), o = $p(e, a), l = /* @__PURE__ */ new Set();
  for (const { table: u } of o)
    for (const d of u.rows) {
      if (d.upTo === void 0)
        continue;
      const f = Ip(n, r, Math.floor(d.upTo) + 1);
      f !== void 0 && f > r && l.add(f);
    }
  const c = [...l].sort((u, d) => u - d).slice(0, Ap);
  for (const u of c) {
    const d = Vr(e, { ...t, quantity: u });
    if (!(d.unavailable || d.unitPrice >= i.unitPrice))
      return {
        add: u - r,
        quantity: u,
        unitPrice: d.unitPrice,
        percentOff: Np(o, r, u)
      };
  }
}
function $p(e, t) {
  const n = [], i = e.pricing.basePrice.tiers;
  i && i.basis === "quantity" && n.push({ table: i, percent: !1 });
  for (const r of t)
    r.tiers && r.tiers.basis === "quantity" && n.push({ table: r.tiers, percent: r.type === "percent" });
  return n;
}
function Ip(e, t, n) {
  if (e.type === "quantities") {
    const s = Math.ceil((n - t) / e.step), a = t + Math.max(s, 0) * e.step;
    return e.maxTotal !== void 0 && a > e.maxTotal ? void 0 : a;
  }
  const i = Math.ceil((n - e.min) / e.step), r = e.min + Math.max(i, 0) * e.step;
  return e.max !== void 0 && r > e.max ? void 0 : r;
}
function Np(e, t, n) {
  let i = 1, r = 1;
  for (const { table: s, percent: a } of e) {
    const o = ni(s.rows, t), l = ni(s.rows, n);
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
const Ep = /* @__PURE__ */ new Set([
  "perPage",
  "perColorPage",
  "perMonoPage"
]), Op = /* @__PURE__ */ new Set([
  "file.pages",
  "file.colorPages",
  "file.monoPages"
]);
function vl(e) {
  return e ? [...e.all ?? [], ...e.any ?? []].some((n) => gs(n) ? Op.has(n.ref) : vl(n)) : !1;
}
function Pp(e) {
  const t = (n) => {
    var i;
    return Ep.has(n.type) || ((i = n.tiers) == null ? void 0 : i.basis) === "pages" || n.formula !== void 0 && xs(n.formula).has("pages");
  };
  for (const n of e.sections)
    for (const i of n.fields)
      if (vl(i.visibleWhen) || i.priceModifiers.some(t) || Vt(i) && i.options.some((r) => r.priceModifiers.some(t)))
        return !0;
  return !1;
}
const Fi = "__artwork", bl = "__artwork-section";
function Mp(e) {
  return { id: bl, title: e, fields: [{
    id: Fi,
    type: "file",
    display: "producer",
    accept: [],
    required: !1,
    priceModifiers: []
  }] };
}
function Rp(e, t) {
  Tt(
    [() => e.schema.value, () => t.list.value],
    ([n, i]) => {
      if (!n)
        return;
      const r = n.sections.some(
        (o) => o.fields.some(
          (l) => l.type === "file" && l.id !== Fi
        )
      ), s = n.sections.findIndex(
        (o) => o.id === bl
      ), a = i.length > 0 && !r;
      a && s === -1 ? n.sections.push(Mp(i[0].label)) : !a && s !== -1 && (n.sections.splice(s, 1), e.select(Fi, ""));
    },
    { immediate: !0, deep: !0 }
  );
}
function xl(e, t, n, i = {}) {
  var a, o;
  const r = [], s = e.flatMap(({ fields: l }) => l).filter((l) => l.type === "file").reduce((l, c) => l + hr(c.id, t[c.id], n, i).length, 0);
  for (const { section: l, fields: c } of e) {
    const d = l.fields.filter((f) => f.type !== "info").length === 1 && ((a = l.title) == null ? void 0 : a.trim()) || void 0;
    for (const f of c) {
      if (f.type === "info")
        continue;
      const m = t[f.id];
      let g;
      if (oi(f)) {
        const y = Array.isArray(m) ? m : typeof m == "string" ? [m] : [], b = f.options.filter((I) => y.includes(I.id)).map((I) => I.label);
        g = b.length ? b.join(", ") : void 0;
      } else if (f.type === "quantities") {
        const y = Rt(f, m), b = f.options.filter((I) => y[I.id] !== void 0).map((I) => `${I.label} × ${y[I.id]}`);
        g = b.length ? b.join(", ") : void 0;
      } else if (f.type === "file") {
        const y = hr(f.id, m, n, i).map(
          (b) => b.fileName ?? i.designName ?? b.fileId
        );
        g = y.length ? y.join(", ") : void 0;
      } else if (ut(m))
        g = `${m.w} × ${m.h} ${m.unit}`;
      else if (f.type === "quantity" && m !== void 0 && m !== "") {
        const y = ti(f, m), b = (o = f.unit) == null ? void 0 : o.trim();
        g = b ? `${y} ${b}` : String(y);
      } else m !== void 0 && m !== "" && (g = String(m));
      if (g !== void 0 && r.push({
        fieldId: f.id,
        /* An unlabeled quantity is common (the stepper explains
           itself on the page) — never show its internal id. */
        label: f.label || /* The designer's own slot is titled with its button
        ("Design fortsetzen" once saved) — no cart label. */
        (f.id === Fi ? i.artworkLabel ?? "Design" : void 0) || d || (An(f) ? i.quantityLabel ?? "Quantity" : f.id),
        value: g
      }), f.type === "file" && i.fileLinkLabel && g !== void 0) {
        const y = hr(f.id, m, n, i);
        for (const b of y) {
          const I = jp(b);
          I && r.push({
            fieldId: f.id,
            label: s > 1 ? `${i.fileLinkLabel} (${b.fileName ?? b.fileId})` : i.fileLinkLabel,
            value: I
          });
        }
      }
    }
  }
  return Fp(r);
}
function hr(e, t, n, i) {
  var o, l;
  const r = (o = i.uploads) == null ? void 0 : o[e];
  if (r != null && r.length)
    return r;
  const s = Array.isArray(t) ? t : typeof t == "string" && t ? [t] : [], a = (l = i.records) == null ? void 0 : l[e];
  return a && s.includes(a.fileId) ? [a] : n && s.includes(n.fileId) ? [n] : [];
}
function Fp(e) {
  const t = /* @__PURE__ */ new Map();
  return e.map((n) => {
    const i = (t.get(n.label) ?? 0) + 1;
    return t.set(n.label, i), i === 1 ? n : { ...n, label: `${n.label} (${i})` };
  });
}
function jp(e) {
  var n;
  const t = (n = e == null ? void 0 : e.raw) == null ? void 0 : n.downloadUrl;
  return typeof t == "string" && t.startsWith("https://") ? t : void 0;
}
async function Lp(e) {
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
async function Dp(e, t, n) {
  const i = n ? await zp(n) : void 0, r = await fetch(e, {
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
    throw new Error(await Lp(r));
  const { url: s, fields: a, fileId: o, downloadUrl: l } = await r.json(), c = new FormData();
  for (const [d, f] of Object.entries(a))
    c.append(d, f);
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
function zp(e) {
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
async function qp(e, t) {
  if (!e.endpoint)
    throw new Error(`Provider "${e.id}" has no endpoint for pull mode.`);
  const n = `${e.endpoint.replace(/\/$/, "")}/${encodeURIComponent(t)}`, i = await fetch(n);
  if (!i.ok)
    throw new Error(`Metadata fetch failed: ${i.status}`);
  return _s.parse(await i.json());
}
async function Up(e, t, n = {}) {
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
      if (s = await qp(e, t), s.status === "ready" || s.status === "failed")
        return s;
    } catch {
    }
    await Vp(i);
  }
  return s;
}
function Vp(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Bp(e) {
  const t = { ...e }, n = /* @__PURE__ */ Ke(null), i = /* @__PURE__ */ Ke(!1), r = /* @__PURE__ */ Ke(null), s = /* @__PURE__ */ Ke(!1), a = /* @__PURE__ */ rt({}), o = /* @__PURE__ */ Ke(!1), l = /* @__PURE__ */ rt({}), c = /* @__PURE__ */ rt({}), u = /* @__PURE__ */ Ke(void 0), d = /* @__PURE__ */ rt({}), f = /* @__PURE__ */ rt({}), m = /* @__PURE__ */ new Map();
  let g = 0;
  function y(_) {
    const H = l[_];
    return c[_] ?? (H != null && H.length ? H[H.length - 1] : void 0);
  }
  const b = K({
    get: () => {
      const _ = n.value ? Yd(n.value) : void 0;
      return _ ? y(_.id) : u.value;
    },
    set: (_) => {
      u.value = _;
    }
  });
  function I() {
    const _ = [...Object.values(l).flat(), ...Object.values(c)];
    return _[_.length - 1];
  }
  function w(_, H) {
    const fe = l[_];
    fe != null && fe.some((_e) => _e.fileId === H.fileId) && (l[_] = fe.map((_e) => _e.fileId === H.fileId ? H : _e));
  }
  const U = K(
    () => n.value ? gl(n.value, a, b.value) : 1
  ), O = K(() => ({
    selections: a,
    file: b.value,
    quantity: U.value
  }));
  async function Y() {
    i.value = !0, r.value = null, s.value = !1;
    try {
      if (t.inlineConfig)
        n.value = wa(t.inlineConfig);
      else if (t.configUrl) {
        const _ = await fetch(t.configUrl);
        if (_.status === 404 || _.status === 403) {
          s.value = !0;
          return;
        }
        if (!_.ok)
          throw new Error(`Config load failed: ${_.status}`);
        n.value = wa(await _.json());
      } else
        throw new Error("No config-url or inline config provided.");
      Zp(n.value, a);
    } catch (_) {
      r.value = _ instanceof Error ? _.message : String(_);
    } finally {
      i.value = !1;
    }
  }
  async function D(_) {
    Object.assign(t, _);
    for (const H of Object.keys(a))
      delete a[H];
    for (const H of Object.keys(l))
      delete l[H];
    for (const H of Object.keys(c))
      delete c[H];
    u.value = void 0, await Y();
  }
  const Q = K(() => {
    const _ = n.value;
    return _ ? _.sections.map((H) => ({
      section: H,
      fields: H.fields.filter(
        (fe) => Ss(_, fe, O.value)
      )
    })).filter((H) => H.fields.length > 0) : [];
  }), M = K(
    () => Q.value.flatMap((_) => _.fields)
  ), ae = K(() => n.value ? Vr(n.value, {
    selections: a,
    file: b.value
  }) : null), be = K(() => {
    if (!n.value)
      return;
    const _ = li(n.value, a, b.value);
    if (_ != null && _.nextBreakHint)
      return Cp(n.value, { selections: a, file: b.value });
  });
  function Ae(_, H) {
    var _e;
    const fe = (_e = n.value) == null ? void 0 : _e.sections.flatMap((Ne) => Ne.fields).find((Ne) => Ne.id === _);
    (fe == null ? void 0 : fe.type) === "quantity" && typeof H == "number" ? a[_] = ti(fe, H) : (fe == null ? void 0 : fe.type) === "quantities" ? a[_] = Rt(fe, H) : a[_] = H;
  }
  function A(_, H) {
    if (_.type !== "select-many") {
      Ae(_.id, H);
      return;
    }
    const fe = a[_.id], _e = Array.isArray(fe) ? [...fe] : [], Ne = _e.indexOf(H);
    if (Ne >= 0)
      _e.splice(Ne, 1);
    else {
      if (_.maxSelect !== void 0 && _e.length >= _.maxSelect)
        return;
      _e.push(H);
    }
    a[_.id] = _e;
  }
  function P(_) {
    var _e;
    const H = l[_.id] ?? [], fe = _.type === "file" ? Lr(_) : 1;
    a[_.id] = fe > 1 ? H.map((Ne) => Ne.fileId) : ((_e = H[0]) == null ? void 0 : _e.fileId) ?? "";
  }
  async function X(_, H) {
    var Ne;
    if (delete f[_.id], !t.uploadEndpoint) {
      f[_.id] = "No upload endpoint configured.";
      return;
    }
    const fe = _.type === "file" ? Lr(_) : 1;
    if (fe > 1 && (((Ne = l[_.id]) == null ? void 0 : Ne.length) ?? 0) + (d[_.id] ?? 0) >= fe)
      return;
    o.value = !0, d[_.id] = (d[_.id] ?? 0) + 1;
    const _e = ++g;
    try {
      let it;
      try {
        it = await Dp(t.uploadEndpoint, H, t.turnstileUrl);
      } catch (Ve) {
        f[_.id] = Ve instanceof Error && !(Ve instanceof TypeError) ? Ve.message : "";
        return;
      }
      const cn = {
        version: "1.0",
        fileId: it.fileId,
        source: "uploader",
        status: "ready",
        fileName: it.fileName,
        fileSizeBytes: it.fileSizeBytes,
        issues: [],
        ...it.downloadUrl ? { raw: { downloadUrl: it.downloadUrl } } : {}
      };
      m.set(cn.fileId, _e), l[_.id] = fe > 1 ? [...l[_.id] ?? [], cn].sort(
        (Ve, un) => (m.get(Ve.fileId) ?? 0) - (m.get(un.fileId) ?? 0)
      ) : [cn], u.value = cn, P(_);
      const Cn = t.provider;
      if (Cn && Cn.mode === "pull")
        try {
          const Ve = await Up(Cn, it.fileId);
          w(_.id, Ve), u.value = Ve;
        } catch (Ve) {
          console.warn("[print-configurator] file analysis failed:", Ve);
        }
    } finally {
      d[_.id] = Math.max(0, (d[_.id] ?? 1) - 1), o.value = Object.values(d).some((it) => it > 0);
    }
  }
  function te(_, H) {
    var _e;
    delete f[_.id];
    const fe = l[_.id] ?? [];
    l[_.id] = fe.filter((Ne) => Ne.fileId !== H), P(_), ((_e = u.value) == null ? void 0 : _e.fileId) === H && (u.value = I());
  }
  function xe(_) {
    for (const H of Object.keys(l))
      w(H, _);
    for (const [H, fe] of Object.entries(c))
      fe.fileId === _.fileId && (c[H] = _);
    (!u.value || u.value.fileId === _.fileId) && (u.value = _);
  }
  function ge(_, H) {
    if (H === void 0) {
      u.value = _;
      return;
    }
    const fe = c[H];
    if (_) {
      c[H] = _, u.value = _;
      return;
    }
    delete c[H], (!u.value || fe && u.value.fileId === fe.fileId) && (u.value = I());
  }
  return {
    schema: n,
    loading: i,
    error: r,
    unconfigured: s,
    selections: a,
    quantity: U,
    file: b,
    fileAnalyzing: o,
    uploads: l,
    records: c,
    uploading: d,
    uploadErrors: f,
    evalCtx: O,
    visibleSections: Q,
    visibleFields: M,
    price: ae,
    nextBreak: be,
    /** The connected data-feed provider config, if any. */
    get provider() {
      return t.provider;
    },
    load: Y,
    reload: D,
    select: Ae,
    toggle: A,
    handleFile: X,
    removeUpload: te,
    feedMetadata: xe,
    setFile: ge,
    fieldFile: y
  };
}
function Zp(e, t) {
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
function Hp() {
  const e = /* @__PURE__ */ rt(/* @__PURE__ */ new Map()), t = K(
    () => Array.from(e, ([s, a]) => ({ key: s, message: a.message }))
  ), n = K(() => e.size > 0);
  function i(s, a) {
    const o = e.get(s);
    o && o.message === a || e.set(s, { message: a });
  }
  function r(s) {
    e.delete(s);
  }
  return { list: t, held: n, add: i, release: r };
}
const Br = 1, Pn = "[print-configurator]";
function Wp(e) {
  const { host: t, cfg: n, validation: i, holds: r, producers: s } = e;
  function a(A) {
    return A === void 0 ? A : JSON.parse(JSON.stringify(A));
  }
  const o = K(() => !n.schema.value || !n.price.value ? null : {
    apiVersion: Br,
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
    const A = {}, P = n.schema.value;
    if (!P)
      return A;
    for (const X of I(P)) {
      const te = X.type === "file" ? n.fieldFile(X.id) : void 0;
      te && (A[X.id] = a(te));
    }
    return A;
  }
  let c = null, u = !1;
  function d(A, P) {
    if (!A)
      return ["selections", "quantity", "price", "file", "files", "holds", "valid"];
    const X = [], te = /* @__PURE__ */ new Set([
      ...Object.keys(A.selections),
      ...Object.keys(P.selections)
    ]);
    for (const xe of te)
      Bt(A.selections[xe], P.selections[xe]) || X.push(`selections.${xe}`);
    return A.quantity !== P.quantity && X.push("quantity"), Bt(A.price, P.price) || X.push("price"), Bt(A.file, P.file) || X.push("file"), Bt(A.files, P.files) || X.push("files"), Bt(A.holds, P.holds) || X.push("holds"), A.valid !== P.valid && X.push("valid"), X;
  }
  let f = null;
  function m(A) {
    f = (A == null ? void 0 : A.source) ?? "api";
  }
  function g() {
    Zi(() => {
      f = null;
    });
  }
  Tt(o, (A) => {
    if (!u || !A)
      return;
    const P = d(c, A), X = f ?? "user";
    c = A, P.length !== 0 && y("change", { ...A, source: X, changed: P });
  });
  function y(A, P) {
    t == null || t.dispatchEvent(
      new CustomEvent(A, { detail: P, bubbles: !0, composed: !0 })
    );
  }
  function b() {
    c = o.value, u = !0, c && y("ready", {
      ...c,
      source: "user"
    });
  }
  function I(A) {
    return A.sections.flatMap((P) => P.fields);
  }
  function w(A) {
    const P = n.schema.value;
    if (!P)
      return null;
    const X = I(P);
    return X.find((te) => te.id === A) ?? X.find((te) => te.role === A) ?? /* Several quantity fields may exist (one per paper group, say);
    "the quantity field" is the one currently in play. */
    (A === "quantity" ? li(P, n.selections, n.file.value) : void 0) ?? X.find(
      (te) => (A === "quantity" || A === "dimensions" || A === "file") && te.type === A
    ) ?? null;
  }
  function U(A, P) {
    switch (A.type) {
      case "select-one":
        return typeof P == "string" && A.options.some((X) => X.id === P);
      case "select-many":
        return Array.isArray(P) && P.every(
          (X) => typeof X == "string" && A.options.some((te) => te.id === X)
        );
      case "quantity":
      case "number":
        return typeof P == "number" && Number.isFinite(P);
      case "quantities":
        return typeof P == "object" && P !== null && !Array.isArray(P) && Object.entries(P).every(
          ([X, te]) => A.options.some((xe) => xe.id === X) && typeof te == "number" && Number.isFinite(te) && te >= 0
        );
      case "text":
        return typeof P == "string";
      case "dimensions":
        return typeof P == "object" && P !== null && !Array.isArray(P) && Number.isFinite(P.w) && Number.isFinite(P.h);
      default:
        return !1;
    }
  }
  function O(A, P) {
    const X = n.schema.value, te = X ? I(X).find((xe) => xe.id === A) : null;
    return te ? U(te, P) ? Bt(n.selections[A], P) ? !1 : (n.select(A, P), i.touch(A), !0) : (console.warn(
      `${Pn} setSelection: invalid value for "${A}" (${te.type})`,
      P
    ), !1) : (console.warn(`${Pn} setSelection: unknown field "${A}"`), !1);
  }
  function Y(A, P, X) {
    m(X), O(A, P), g();
  }
  function D(A, P) {
    if (typeof A != "object" || A === null) {
      console.warn(`${Pn} setSelections: expected an object map`);
      return;
    }
    m(P);
    for (const [X, te] of Object.entries(A))
      O(X, te);
    g();
  }
  function Q(A) {
    const P = n.schema.value;
    if (!P)
      return null;
    const X = I(P).filter((te) => te.type === "file");
    if (A && s.has(A)) {
      const te = s.fieldOf(A);
      return (te ? X.find((ge) => ge.id === te) : void 0) ?? Jo(P) ?? null;
    }
    return X.find((te) => te.type === "file" && te.display !== "producer") ?? X[0] ?? null;
  }
  function M(A, P) {
    !A || n.selections[A.id] === P || (n.select(A.id, P), i.touch(A.id));
  }
  function ae(A, P) {
    if (A === null) {
      const H = Q(P == null ? void 0 : P.source), fe = H ? !Kp(n.selections[H.id]) : !1;
      if ((H ? n.fieldFile(H.id) : n.file.value) === void 0 && !fe)
        return;
      m(P), n.setFile(void 0, H == null ? void 0 : H.id), M(H, ""), g();
      return;
    }
    const X = _s.safeParse({
      version: "1.0",
      source: "custom",
      status: "ready",
      issues: [],
      ...A
    });
    if (!X.success) {
      console.warn(`${Pn} setFile: invalid file record`, X.error.issues);
      return;
    }
    const te = Q(X.data.source), xe = te ? n.fieldFile(te.id) : n.file.value, ge = Bt(xe, X.data), _ = !te || n.selections[te.id] === X.data.fileId;
    ge && _ || (m(P), ge || n.setFile(X.data, te == null ? void 0 : te.id), M(te, X.data.fileId), g());
  }
  function be(A, P) {
    if (typeof A != "string" || A === "") {
      console.warn(`${Pn} addHold: a non-empty string key is required`);
      return;
    }
    m(P), r.add(A, P == null ? void 0 : P.message), g();
  }
  function Ae(A, P) {
    m(P), r.release(A), g();
  }
  return {
    notifyReady: b,
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
      field(A) {
        const P = w(A);
        return P ? a(P) : null;
      },
      setSelection: Y,
      setSelections: D,
      setFile: ae,
      addHold: be,
      releaseHold: Ae,
      /* Producer registry (docs/printapp-integration-v1.md). Not part
         of `state`: a producer is an offer available on the page, not
         an answer the customer has given, and nothing about the
         configuration changes when one appears. */
      registerProducer(A, P) {
        s.register(A, P);
      },
      unregisterProducer(A) {
        s.unregister(A);
      },
      /** Push-mode provider feed (pre-Page-API method, kept). */
      feedMetadata(A) {
        n.feedMetadata(A);
      },
      apiVersion: Br
    }
  };
}
function Kp(e) {
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
const $a = "[print-configurator]", Zr = 10;
function Gp(e) {
  const t = /* @__PURE__ */ rt(/* @__PURE__ */ new Map()), n = K(
    () => Array.from(t.values()).sort((c, u) => c.order - u.order)
  );
  function i(c, u) {
    if (typeof c != "string" || c === "") {
      console.warn(`${$a} registerProducer: a non-empty string id is required`);
      return;
    }
    const d = u == null ? void 0 : u.label;
    if (typeof d != "string" || d === "") {
      console.warn(`${$a} registerProducer: "${c}" needs a label`);
      return;
    }
    t.set(c, {
      id: c,
      label: d,
      description: u.description,
      /* Default behind the built-in upload: the merchant's own file is
         the expected answer, an alternative producer is the offer. */
      order: Number.isFinite(u.order) ? Number(u.order) : Zr + 10,
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
      (d) => d.fieldId ? d.fieldId === c : u
    );
  }
  function l(c, u) {
    var d;
    t.has(c) && ((d = e.host) == null || d.dispatchEvent(
      new CustomEvent("producer", {
        detail: {
          apiVersion: Br,
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
const _l = {
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
}, Yp = {
  base: "summary.basePrice",
  "setup-fee": "summary.setupFee",
  "adjustment:minimum": "summary.minimumAdjustment"
};
function Qp(e, t) {
  const n = Yp[t.sourceId];
  return n ? e(n) : t.label;
}
function Jp(e, t) {
  return t ? e.replace(
    /\{(\w+)\}/g,
    (n, i) => i in t ? String(t[i]) : n
  ) : e;
}
function wl(e) {
  const t = () => typeof e == "function" ? e() : e;
  return {
    t(n, i) {
      var a;
      const r = (a = t()) == null ? void 0 : a[n], s = typeof r == "string" && r !== "" ? r : _l[n];
      return Jp(s, i);
    }
  };
}
function Xp(e) {
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
    i in _l && typeof r == "string" && (n[i] = r);
  return n;
}
const As = wl(), kl = Symbol("print-configurator-strings");
function mt() {
  return Gt(kl, As);
}
function eh(e, t, n, i = As.t) {
  const r = /* @__PURE__ */ rt(/* @__PURE__ */ new Set()), s = { value: !1 }, a = K(() => {
    const f = [];
    for (const m of e.value) {
      const g = th(m, t, i);
      g && f.push({ fieldId: m.id, message: g });
    }
    return f;
  }), o = K(
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
function th(e, t, n = As.t) {
  const i = t[e.id];
  if (e.type === "quantities") {
    const s = Ts(Rt(e, i));
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
  if (e.type === "dimensions" && ut(i)) {
    const s = Ia(i.unit) / Ia(e.defaultUnit), a = i.w * s, o = i.h * s;
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
function Ia(e) {
  switch (e) {
    case "mm":
      return 1;
    case "cm":
      return 10;
    case "in":
      return 25.4;
  }
}
const nh = /* @__PURE__ */ new Set([
  "left",
  "right",
  "left_space",
  "right_space"
]);
function ih(e) {
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
  return typeof n.position == "string" && nh.has(n.position) && (i.position = n.position), typeof n.decimals == "number" && Number.isInteger(n.decimals) && n.decimals >= 0 && n.decimals <= 8 && (i.decimals = n.decimals), typeof n.thousandSeparator == "string" && (i.thousandSeparator = n.thousandSeparator), typeof n.decimalSeparator == "string" && (i.decimalSeparator = n.decimalSeparator), i;
}
function Sl(e) {
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
function rh(e, t, n, i) {
  if (i)
    return sh(e, i);
  try {
    return new Intl.NumberFormat(Sl(n) ?? "en", {
      style: "currency",
      currency: t
    }).format(e);
  } catch {
    return `${t} ${e.toFixed(2)}`;
  }
}
function sh(e, t) {
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
function ah(e, t, n) {
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
function pn(e, t) {
  const n = 10 ** t;
  return Math.round((e + Math.sign(e) * Number.EPSILON * Math.abs(e)) * n) / n;
}
function oh(e, t, n) {
  const i = rl(t), r = n.rate / 100;
  if (n.mode === "exclusive") {
    const o = pn(e, i), l = pn(o * r, i);
    return { net: o, tax: l, gross: pn(o + l, i) };
  }
  const s = pn(e, i), a = pn(s - s / (1 + r), i);
  return { net: pn(s - a, i), tax: a, gross: s };
}
function Na(e, t) {
  try {
    return new Intl.NumberFormat(Sl(t) ?? "en", {
      maximumFractionDigits: 3
    }).format(e);
  } catch {
    return String(e);
  }
}
function Yi(e, t) {
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
const lh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], ch = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], uh = {
  key: 0,
  class: "check",
  "aria-hidden": "true"
}, dh = ["src"], fh = { class: "card-label" }, ph = {
  key: 2,
  class: "card-description"
}, Ea = /* @__PURE__ */ Oe({
  __name: "ChoiceCards",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Yi(
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
    return (c, u) => (v(), k("div", {
      class: Xe(["grid", e.field.display]),
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (v(!0), k(ue, null, Le(e.field.options, (d, f) => (v(), k("button", {
        key: d.id,
        type: "button",
        class: Xe(["card", { active: a(d.id), unavailable: o(d.id) }]),
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
        a(d.id) ? (v(), k("span", uh, "✓")) : ce("", !0),
        d.image ? (v(), k("img", {
          key: 1,
          src: d.image,
          alt: ""
        }, null, 8, dh)) : ce("", !0),
        R("span", fh, L(d.label), 1),
        d.description ? (v(), k("span", ph, L(d.description), 1)) : ce("", !0)
      ], 42, ch))), 128))
    ], 10, lh));
  }
}), hh = ["id", "value", "aria-labelledby", "aria-describedby", "aria-invalid"], mh = {
  key: 0,
  value: "",
  disabled: ""
}, gh = ["value", "disabled"], yh = /* @__PURE__ */ Oe({
  __name: "ChoiceDropdown",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = mt();
    function s(a) {
      i("pick", a.target.value);
    }
    return (a, o) => (v(), k("select", {
      id: `pc-control-${e.field.id}`,
      class: "dropdown",
      part: "dropdown",
      value: e.selectedIds[0] ?? "",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onChange: s
    }, [
      e.selectedIds.length ? ce("", !0) : (v(), k("option", mh, L(e.field.label ? N(r)("choice.placeholder", { label: e.field.label.toLowerCase() }) : N(r)("choice.placeholderBare")), 1)),
      (v(!0), k(ue, null, Le(e.field.options, (l) => (v(), k("option", {
        key: l.id,
        value: l.id,
        disabled: n.unavailableIds.includes(l.id)
      }, L(l.label), 9, gh))), 128))
    ], 40, hh));
  }
}), vh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], bh = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], xh = { key: 0 }, _h = { class: "choice-body" }, wh = { class: "choice-title" }, kh = {
  key: 0,
  class: "choice-description"
}, Sh = /* @__PURE__ */ Oe({
  __name: "ChoiceList",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Yi(
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
    return (c, u) => (v(), k("div", {
      class: "choice-list",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (v(!0), k(ue, null, Le(e.field.options, (d, f) => (v(), k("button", {
        key: d.id,
        type: "button",
        class: Xe(["choice-row", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice choice-selected" : "choice",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : N(s).tabindexFor(d, f),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, f)
      }, [
        R("span", {
          class: Xe(["choice-indicator", { multi: r }]),
          "aria-hidden": "true"
        }, [
          a(d.id) ? (v(), k("span", xh, "✓")) : ce("", !0)
        ], 2),
        R("span", _h, [
          R("span", wh, L(d.label), 1),
          d.description ? (v(), k("span", kh, L(d.description), 1)) : ce("", !0)
        ])
      ], 42, bh))), 128))
    ], 8, vh));
  }
}), Th = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Ah = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], Ch = {
  key: 0,
  "aria-hidden": "true"
}, $h = /* @__PURE__ */ Oe({
  __name: "ChoicePills",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Yi(
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
    return (c, u) => (v(), k("div", {
      class: "pills",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (v(!0), k(ue, null, Le(e.field.options, (d, f) => (v(), k("button", {
        key: d.id,
        type: "button",
        class: Xe(["pill", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice pill choice-selected" : "choice pill",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : N(s).tabindexFor(d, f),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, f)
      }, [
        cs(L(d.label) + " ", 1),
        a(d.id) ? (v(), k("span", Ch, "✓")) : ce("", !0)
      ], 42, Ah))), 128))
    ], 8, Th));
  }
}), Ih = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Nh = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], Eh = {
  key: 0,
  class: "swatch-check",
  "aria-hidden": "true"
}, Oh = {
  key: 0,
  class: "swatch-selected-label",
  "aria-hidden": "true"
}, Ph = /* @__PURE__ */ Oe({
  __name: "ChoiceSwatches",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Yi(
      () => n.field.options,
      () => n.selectedIds
    );
    function a(u) {
      return n.selectedIds.includes(u);
    }
    function o(u) {
      return n.unavailableIds.includes(u);
    }
    const l = K(
      () => n.field.options.filter((u) => n.selectedIds.includes(u.id)).map((u) => u.label).join(", ")
    );
    function c(u, d) {
      if (r)
        return;
      const f = s.onKeydown(u, d);
      f && !o(f) && i("pick", f);
    }
    return (u, d) => (v(), k("div", null, [
      R("div", {
        class: "swatches",
        role: r ? "group" : "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0
      }, [
        (v(!0), k(ue, null, Le(e.field.options, (f, m) => (v(), k("button", {
          key: f.id,
          type: "button",
          class: Xe(["swatch", { active: a(f.id), unavailable: o(f.id) }]),
          part: a(f.id) ? "choice swatch choice-selected" : "choice swatch",
          style: ri({ background: f.color }),
          role: r ? void 0 : "radio",
          "aria-checked": r ? void 0 : a(f.id),
          "aria-pressed": r ? a(f.id) : void 0,
          "aria-label": f.label,
          "aria-disabled": o(f.id) || void 0,
          tabindex: r ? 0 : N(s).tabindexFor(f, m),
          onClick: (g) => !o(f.id) && i("pick", f.id),
          onKeydown: (g) => c(g, m)
        }, [
          a(f.id) ? (v(), k("span", Eh, "✓")) : ce("", !0)
        ], 46, Nh))), 128))
      ], 8, Ih),
      l.value ? (v(), k("p", Oh, L(l.value), 1)) : ce("", !0)
    ]));
  }
}), Oa = {
  cards: Ea,
  grid: Ea,
  swatches: Ph,
  pills: $h,
  dropdown: yh,
  list: Sh
}, Qi = Symbol("print-configurator"), Mh = ["data-field-id", "data-type"], Rh = ["id"], Fh = {
  key: 0,
  class: "req",
  "aria-hidden": "true"
}, jh = {
  key: 1,
  class: "help",
  part: "field-help"
}, Lh = ["id"], Dh = /* @__PURE__ */ Oe({
  __name: "FieldShell",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e, { expose: t }) {
    return t({ fieldId: e.field.id }), (i, r) => (v(), k("div", {
      class: "field",
      part: "field",
      "data-field-id": e.field.id,
      "data-type": e.field.type
    }, [
      e.field.label ? (v(), k("span", {
        key: 0,
        id: `pc-label-${e.field.id}`,
        class: "field-label",
        part: "field-label"
      }, [
        cs(L(e.field.label) + " ", 1),
        e.field.required ? (v(), k("span", Fh, "*")) : ce("", !0)
      ], 8, Rh)) : ce("", !0),
      e.field.helpText ? (v(), k("p", jh, L(e.field.helpText), 1)) : ce("", !0),
      Rc(i.$slots, "default"),
      e.error ? (v(), k("p", {
        key: 2,
        id: `pc-error-${e.field.id}`,
        class: "field-error",
        part: "field-error",
        role: "status"
      }, L(e.error), 9, Lh)) : ce("", !0)
    ], 8, Mh));
  }
}), zh = ["aria-labelledby"], qh = ["part", "aria-checked", "onClick"], Uh = ["value", "aria-label"], Vh = ["value"], Bh = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Zh = {
  key: 3,
  class: "stepper",
  part: "stepper"
}, Hh = ["aria-label", "disabled"], Wh = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Kh = ["aria-label", "disabled"], Gh = /* @__PURE__ */ Oe({
  __name: "QuantityInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = K(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue
    ), { t: s } = mt(), a = K(() => n.field.label ?? s("quantity.label"));
    function o(f) {
      i("select", ti(n.field, f)), i("touch");
    }
    function l(f) {
      o(r.value + f * n.field.step);
    }
    function c(f) {
      const m = f.target.value;
      if (m === "")
        return;
      const g = Number(m);
      ti(n.field, g) === g && o(g);
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
      return e.field.display === "pills" && ((g = e.field.presets) != null && g.length) ? (v(), k("div", {
        key: 0,
        class: "pills",
        role: "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0
      }, [
        (v(!0), k(ue, null, Le(e.field.presets, (b) => (v(), k("button", {
          key: b,
          type: "button",
          class: Xe(["pill", { active: r.value === b }]),
          part: r.value === b ? "choice pill choice-selected" : "choice pill",
          role: "radio",
          "aria-checked": r.value === b,
          onClick: (I) => o(b)
        }, L(b), 11, qh))), 128))
      ], 8, zh)) : e.field.display === "dropdown" && ((y = e.field.presets) != null && y.length) ? (v(), k("select", {
        key: 1,
        class: "dropdown",
        part: "dropdown",
        value: String(r.value),
        "aria-label": a.value,
        onChange: m[0] || (m[0] = (b) => o(Number(b.target.value)))
      }, [
        (v(!0), k(ue, null, Le(e.field.presets, (b) => (v(), k("option", {
          key: b,
          value: String(b)
        }, L(b), 9, Vh))), 128))
      ], 40, Uh)) : e.field.display === "input" ? (v(), k("input", {
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
        onKeydown: Cr(Qn(d, ["prevent"]), ["enter"])
      }, null, 40, Bh)) : (v(), k("div", Zh, [
        R("button", {
          type: "button",
          part: "stepper-decrement",
          "aria-label": N(s)("stepper.decrease", { label: a.value.toLowerCase() }),
          disabled: r.value <= e.field.min,
          onClick: m[1] || (m[1] = (b) => l(-1))
        }, " − ", 8, Hh),
        R("input", {
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
          onKeydown: Cr(Qn(d, ["prevent"]), ["enter"])
        }, null, 40, Wh),
        R("button", {
          type: "button",
          part: "stepper-increment",
          "aria-label": N(s)("stepper.increase", { label: a.value.toLowerCase() }),
          disabled: e.field.max !== void 0 && r.value >= e.field.max,
          onClick: m[2] || (m[2] = (b) => l(1))
        }, " + ", 8, Kh)
      ]));
    };
  }
}), Yh = ["aria-labelledby", "aria-describedby"], Qh = ["part"], Jh = { class: "quantities-name" }, Xh = ["src"], em = {
  class: "quantities-label",
  part: "quantities-label"
}, tm = {
  class: "stepper",
  part: "stepper"
}, nm = ["aria-label", "disabled", "onClick"], im = ["value", "max", "step", "disabled", "aria-label", "onInput", "onBlur", "onKeydown"], rm = ["aria-label", "disabled", "onClick"], sm = {
  class: "quantities-total",
  part: "quantities-total",
  "aria-live": "polite"
}, am = /* @__PURE__ */ Oe({
  __name: "QuantitiesInput",
  props: {
    field: { type: null },
    value: { type: null },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = mt(), s = K(() => Rt(n.field, n.value)), a = K(() => Ts(s.value)), o = K(() => {
      var I;
      const b = (I = n.field.unit) == null ? void 0 : I.trim();
      return b ? `${a.value} ${b}` : String(a.value);
    });
    function l(b) {
      return s.value[b] ?? 0;
    }
    function c(b) {
      return n.unavailableIds.includes(b);
    }
    function u(b) {
      const I = l(b);
      return I === 0 ? n.field.min : I + n.field.step;
    }
    function d(b) {
      if (c(b))
        return !1;
      const I = u(b), { max: w, maxTotal: U } = n.field;
      return w !== void 0 && I > w ? !1 : U === void 0 || a.value - l(b) + I <= U;
    }
    function f(b, I) {
      const w = { ...s.value, [b]: I };
      i("select", Rt(n.field, w)), i("touch");
    }
    function m(b, I) {
      if (I === 1) {
        f(b, u(b));
        return;
      }
      const w = l(b) - n.field.step;
      f(b, w < n.field.min ? 0 : w);
    }
    function g(b, I) {
      const w = I.target.value;
      if (w === "")
        return;
      const U = Number(w);
      (Rt(n.field, { [b]: U })[b] ?? 0) === U && f(b, U);
    }
    function y(b, I) {
      const w = I.target;
      f(b, w.value === "" ? 0 : Number(w.value)), w.value = String(l(b));
    }
    return (b, I) => (v(), k(ue, null, [
      R("div", {
        class: Xe(["quantities", e.field.display === "list" ? "quantities-list" : "quantities-grid"]),
        part: "quantities",
        role: "group",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0
      }, [
        (v(!0), k(ue, null, Le(e.field.options, (w) => (v(), k("div", {
          key: w.id,
          class: Xe(["quantities-item", { active: l(w.id) > 0, off: c(w.id) }]),
          part: l(w.id) > 0 ? "quantities-item quantities-item-active" : "quantities-item"
        }, [
          R("span", Jh, [
            w.color ? (v(), k("span", {
              key: 0,
              class: "quantities-swatch",
              style: ri({ background: w.color }),
              "aria-hidden": "true"
            }, null, 4)) : w.image ? (v(), k("img", {
              key: 1,
              class: "quantities-image",
              src: w.image,
              alt: ""
            }, null, 8, Xh)) : ce("", !0),
            R("span", em, L(w.label), 1)
          ]),
          R("div", tm, [
            R("button", {
              type: "button",
              part: "stepper-decrement",
              "aria-label": N(r)("stepper.decrease", { label: w.label }),
              disabled: l(w.id) === 0,
              onClick: (U) => m(w.id, -1)
            }, " − ", 8, nm),
            R("input", {
              class: "stepper-value",
              part: "stepper-input",
              type: "number",
              inputmode: "numeric",
              value: l(w.id),
              min: "0",
              max: e.field.max,
              step: e.field.step,
              disabled: c(w.id) && l(w.id) === 0,
              "aria-label": w.label,
              onInput: (U) => g(w.id, U),
              onBlur: (U) => y(w.id, U),
              onKeydown: Cr(Qn((U) => y(w.id, U), ["prevent"]), ["enter"])
            }, null, 40, im),
            R("button", {
              type: "button",
              part: "stepper-increment",
              "aria-label": N(r)("stepper.increase", { label: w.label }),
              disabled: !d(w.id),
              onClick: (U) => m(w.id, 1)
            }, " + ", 8, rm)
          ])
        ], 10, Qh))), 128))
      ], 10, Yh),
      R("p", sm, L(N(r)("quantities.total", { count: o.value })), 1)
    ], 64));
  }
}), om = {
  key: 0,
  class: "slider-row"
}, lm = ["value", "min", "max", "step", "aria-label"], cm = {
  class: "slider-value",
  "aria-hidden": "true"
}, um = {
  key: 1,
  class: "stepper",
  part: "stepper"
}, dm = ["aria-label", "disabled"], fm = ["value", "min", "max", "step", "aria-label"], pm = ["aria-label", "disabled"], hm = ["value", "min", "max", "step", "aria-label", "aria-describedby", "aria-invalid"], mm = /* @__PURE__ */ Oe({
  __name: "NumberInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = K(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue ?? 0
    ), { t: s } = mt(), a = K(() => n.field.label ?? n.field.id);
    function o(l) {
      Number.isNaN(l) || (i("select", l), i("touch"));
    }
    return (l, c) => e.field.display === "slider" ? (v(), k("div", om, [
      R("input", {
        type: "range",
        class: "slider",
        part: "stepper-input",
        value: r.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": a.value,
        onInput: c[0] || (c[0] = (u) => o(Number(u.target.value)))
      }, null, 40, lm),
      R("span", cm, L(r.value), 1)
    ])) : e.field.display === "stepper" ? (v(), k("div", um, [
      R("button", {
        type: "button",
        part: "stepper-decrement",
        "aria-label": N(s)("stepper.decrease", { label: a.value.toLowerCase() }),
        disabled: e.field.min !== void 0 && r.value <= e.field.min,
        onClick: c[1] || (c[1] = (u) => o(r.value - (e.field.step ?? 1)))
      }, " − ", 8, dm),
      R("input", {
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
      }, null, 40, fm),
      R("button", {
        type: "button",
        part: "stepper-increment",
        "aria-label": N(s)("stepper.increase", { label: a.value.toLowerCase() }),
        disabled: e.field.max !== void 0 && r.value >= e.field.max,
        onClick: c[4] || (c[4] = (u) => o(r.value + (e.field.step ?? 1)))
      }, " + ", 8, pm)
    ])) : (v(), k("input", {
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
    }, null, 40, hm));
  }
}), gm = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], ym = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], vm = /* @__PURE__ */ Oe({
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
    return (a, o) => e.field.display === "textarea" ? (v(), k("textarea", {
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
    }, null, 40, gm)) : (v(), k("input", {
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
    }, null, 40, ym));
  }
}), bm = {
  class: "dimensions",
  part: "dimensions"
}, xm = { class: "dim-input" }, _m = { class: "dim-label" }, wm = ["value", "aria-describedby", "aria-invalid"], km = { class: "dim-input" }, Sm = { class: "dim-label" }, Tm = ["value", "aria-describedby", "aria-invalid"], Am = ["value", "aria-label"], Cm = ["value"], $m = {
  key: 1,
  class: "dim-unit-static"
}, Im = /* @__PURE__ */ Oe({
  __name: "DimensionsInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = mt(), s = /* @__PURE__ */ rt({
      w: ut(n.value) ? n.value.w : NaN,
      h: ut(n.value) ? n.value.h : NaN,
      unit: ut(n.value) ? n.value.unit : n.field.defaultUnit
    });
    Tt(
      () => n.value,
      (c) => {
        ut(c) ? (s.w = c.w, s.h = c.h, s.unit = c.unit) : (c === void 0 || c === "") && (s.w = NaN, s.h = NaN);
      }
    );
    const a = s;
    function o(c) {
      Object.assign(s, c), i("touch"), s.w > 0 && s.h > 0 && i("select", { w: s.w, h: s.h, unit: s.unit });
    }
    function l(c) {
      return Number(c.target.value);
    }
    return (c, u) => (v(), k("div", bm, [
      R("label", xm, [
        R("span", _m, L(N(r)("dimensions.width")), 1),
        R("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(N(a).w) ? "" : N(a).w,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[0] || (u[0] = (d) => o({ w: l(d) }))
        }, null, 40, wm)
      ]),
      u[3] || (u[3] = R("span", {
        class: "dim-times",
        "aria-hidden": "true"
      }, "×", -1)),
      R("label", km, [
        R("span", Sm, L(N(r)("dimensions.height")), 1),
        R("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(N(a).h) ? "" : N(a).h,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[1] || (u[1] = (d) => o({ h: l(d) }))
        }, null, 40, Tm)
      ]),
      e.field.units.length > 1 ? (v(), k("select", {
        key: 0,
        class: "dropdown dim-unit",
        part: "dropdown",
        value: N(a).unit,
        "aria-label": N(r)("dimensions.unit"),
        onChange: u[2] || (u[2] = (d) => o({ unit: d.target.value }))
      }, [
        (v(!0), k(ue, null, Le(e.field.units, (d) => (v(), k("option", {
          key: d,
          value: d
        }, L(d), 9, Cm))), 128))
      ], 40, Am)) : (v(), k("span", $m, L(e.field.defaultUnit), 1))
    ]));
  }
});
function Nm(e) {
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
  return _s.parse(s);
}
const Em = ["aria-busy"], Om = {
  key: 0,
  class: "upload-files",
  part: "upload-files"
}, Pm = { class: "upload-filename" }, Mm = ["onClick"], Rm = ["id", "accept", "multiple", "aria-labelledby", "aria-describedby", "aria-invalid"], Fm = ["for"], jm = {
  key: 0,
  class: "upload-status"
}, Lm = { class: "upload-filename" }, Dm = { class: "upload-hint" }, zm = { class: "upload-title" }, qm = { class: "upload-hint" }, Um = {
  key: 2,
  class: "upload-wrong-type",
  part: "upload-wrong-type",
  role: "alert"
}, Vm = /* @__PURE__ */ Oe({
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
    const n = e, i = t, { t: r } = mt(), s = /* @__PURE__ */ Ke(!1), a = K(() => n.field.accept.join(", ")), o = K(() => rp(n.field.accept) || void 0), l = K(() => Lr(n.field)), c = K(() => l.value > 1), u = K(() => n.files ?? []), d = K(() => c.value ? l.value - u.value.length : 1), f = K(
      () => c.value ? [r("upload.limit", { max: l.value }), a.value].filter(Boolean).join(" · ") : a.value
    ), m = /* @__PURE__ */ Ke(), g = K(
      () => m.value ?? (n.failure === void 0 ? void 0 : r("upload.failed", { reason: n.failure }).trim())
    );
    function y(U) {
      if (U.length) {
        const O = U.filter((D) => sp(n.field.accept, D.name)), Y = O.slice(0, Math.max(0, d.value));
        m.value = O.length < U.length ? r("upload.wrongType", { formats: ap(n.field.accept) }) : Y.length < O.length ? r("upload.tooMany", { max: l.value }) : void 0;
        for (const D of Y)
          i("file", n.field, D);
      }
      i("touch");
    }
    function b(U) {
      const O = U.target;
      y(Array.from(O.files ?? [])), O.value = "";
    }
    function I(U) {
      var Y;
      s.value = !1;
      const O = Array.from(((Y = U.dataTransfer) == null ? void 0 : Y.files) ?? []);
      y(c.value ? O : O.slice(0, 1));
    }
    function w(U) {
      m.value = void 0, i("remove", n.field, U.fileId), i("touch");
    }
    return (U, O) => (v(), k("div", {
      class: Xe(["upload", { dragging: s.value, done: !c.value && u.value.length > 0, multiple: c.value }]),
      part: "upload",
      "aria-busy": e.analyzing || void 0,
      onDragover: O[0] || (O[0] = Qn((Y) => s.value = !0, ["prevent"])),
      onDragleave: O[1] || (O[1] = (Y) => s.value = !1),
      onDrop: Qn(I, ["prevent"])
    }, [
      c.value && u.value.length ? (v(), k("ul", Om, [
        (v(!0), k(ue, null, Le(u.value, (Y) => (v(), k("li", {
          key: Y.fileId,
          class: "upload-file",
          part: "upload-file"
        }, [
          R("span", Pm, L(Y.fileName ?? Y.fileId), 1),
          R("button", {
            type: "button",
            class: "upload-remove",
            part: "upload-remove",
            onClick: (D) => w(Y)
          }, L(N(r)("artwork.remove")), 9, Mm)
        ]))), 128))
      ])) : ce("", !0),
      d.value > 0 || e.analyzing ? (v(), k(ue, { key: 1 }, [
        R("input", {
          id: `pc-control-${e.field.id}`,
          class: "upload-input",
          part: "upload-input",
          type: "file",
          accept: o.value,
          multiple: c.value || void 0,
          "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: b
        }, null, 40, Rm),
        R("label", {
          class: "upload-zone",
          for: `pc-control-${e.field.id}`
        }, [
          e.analyzing ? (v(), k("span", jm, L(N(r)("upload.analyzing")), 1)) : !c.value && u.value[0] ? (v(), k(ue, { key: 1 }, [
            R("span", Lm, L(u.value[0].fileName ?? u.value[0].fileId), 1),
            R("span", Dm, L(N(r)("upload.replace")), 1)
          ], 64)) : (v(), k(ue, { key: 2 }, [
            R("span", zm, L(c.value && u.value.length ? N(r)("upload.addMore") : N(r)("upload.drop")), 1),
            R("span", qm, L(f.value), 1)
          ], 64))
        ], 8, Fm)
      ], 64)) : ce("", !0),
      g.value ? (v(), k("p", Um, L(g.value), 1)) : ce("", !0)
    ], 42, Em));
  }
}), Bm = "https://cdn.filecheck.io/element/v1/filecheck.js", Zm = 1e4;
let Mn = null;
function Hm(e = Bm) {
  return typeof window < "u" && window.Filecheck ? Promise.resolve(window.Filecheck) : Mn || (Mn = new Promise((t, n) => {
    const i = (a) => {
      Mn = null, r.remove(), n(new Error(a));
    }, r = document.createElement("script");
    r.src = e, r.async = !0;
    const s = setTimeout(
      () => i("Filecheck SDK load timed out."),
      Zm
    );
    r.addEventListener("load", () => {
      clearTimeout(s), window.Filecheck ? t(window.Filecheck) : i("Filecheck SDK loaded but window.Filecheck is missing.");
    }), r.addEventListener("error", () => {
      clearTimeout(s), i("Filecheck SDK failed to load.");
    }), document.head.appendChild(r);
  }), Mn);
}
const Wm = { mm: 1, cm: 10, in: 25.4 }, Km = [
  "artworkSize",
  "pageCount",
  "fileCount",
  "bleed",
  "safety"
];
function Gm(e, t) {
  var r, s;
  const n = [];
  for (const a of e) {
    const o = t[a.id];
    if (!(o === void 0 || o === "")) {
      if (a.type === "dimensions" && ut(o)) {
        const l = Wm[o.unit] ?? 1;
        n.push({
          artworkSize: {
            width_mm: Pa(o.w * l),
            height_mm: Pa(o.h * l)
          }
        });
        continue;
      }
      if (a.role === "pages") {
        const l = typeof o == "number" ? o : Number(o);
        Number.isFinite(l) && l > 0 && n.push({ pageCount: { min: l, max: l } });
      }
      if (oi(a)) {
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
    for (const o of Km) {
      const l = a[o];
      l && (i[o] = { ...i[o] ?? {}, ...l });
    }
  return i;
}
function Pa(e) {
  return Math.round(e * 10) / 10;
}
const Ym = {
  class: "fc-upload",
  part: "upload"
}, Qm = {
  key: 0,
  class: "fc-panel fc-unconfigured"
}, Jm = {
  key: 1,
  class: "fc-panel fc-error",
  role: "alert"
}, Xm = { class: "fc-panel-title" }, eg = { class: "fc-panel-hint" }, tg = {
  key: 0,
  class: "fc-loading"
}, ng = {
  key: 1,
  class: "field-error",
  role: "status"
}, ig = /* @__PURE__ */ Oe({
  __name: "FilecheckUpload",
  props: {
    field: { type: null },
    provider: { type: null }
  },
  emits: ["metadata", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = mt(), s = /* @__PURE__ */ Ke(null), a = /* @__PURE__ */ Ke(
      n.provider.publishableKey ? "loading" : "unconfigured"
    ), o = /* @__PURE__ */ Ke("");
    let l = null, c = null;
    const u = Gt(Qi, null), d = K(() => {
      var b;
      if (!u)
        return null;
      const y = ((b = u.cfg.visibleFields) == null ? void 0 : b.value) ?? [];
      return Gm(y, u.cfg.selections);
    });
    Tt(d, (y) => {
      var b;
      (b = l == null ? void 0 : l.setContext) == null || b.call(l, y ?? null);
    });
    async function f() {
      var w, U, O;
      const y = n.provider.publishableKey, b = (w = n.field.filecheck) == null ? void 0 : w.workflowId, I = (U = n.field.filecheck) != null && U.workflow ? /* @__PURE__ */ ye(n.field.filecheck.workflow) : void 0;
      if (!y || !b && !I) {
        a.value = "unconfigured";
        return;
      }
      a.value = "loading", o.value = "";
      try {
        const Y = await Hm(n.provider.scriptUrl);
        if (!s.value)
          return;
        l = Y(y, {
          agentId: n.provider.agentId,
          iframeSrc: n.provider.iframeSrc
        }).elements.create("intake", {
          // An inline workflow wins: it is the blueprint author's exact
          // intent, and demo blueprints rely on it to run against any
          // tenant with nothing saved in the Filecheck admin.
          ...I ? { workflow: I } : { workflowId: b },
          preview: n.provider.preview ?? !1
        }), c = l.on("status", (M) => {
          i("metadata", M), i("touch");
        }), l.on("error", (M) => {
          const ae = M;
          o.value = (ae == null ? void 0 : ae.message) ?? "Filecheck reported an error.";
        });
        const Q = d.value;
        Q && ((O = l.setContext) == null || O.call(l, Q)), l.mount(s.value), a.value = "active";
      } catch (Y) {
        a.value = "error", o.value = Y instanceof Error ? Y.message : "Filecheck failed to load.";
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
    return ss(() => {
      f();
    }), Tt(
      () => {
        var y, b;
        return [
          n.provider.publishableKey,
          n.provider.scriptUrl,
          n.provider.iframeSrc,
          n.provider.agentId,
          (y = n.field.filecheck) == null ? void 0 : y.workflowId,
          (b = n.field.filecheck) == null ? void 0 : b.workflow
        ];
      },
      () => {
        m(), f();
      }
    ), mo(m), (y, b) => (v(), k("div", Ym, [
      a.value === "unconfigured" ? (v(), k("div", Qm, [...b[0] || (b[0] = [
        R("span", { class: "fc-panel-title" }, "Filecheck upload", -1),
        R("span", { class: "fc-panel-hint" }, " Add your Filecheck publishable key in the store settings (or preview settings) to activate validated uploads for this field. ", -1)
      ])])) : a.value === "error" ? (v(), k("div", Jm, [
        R("span", Xm, L(N(r)("upload.unavailable")), 1),
        R("span", eg, L(o.value), 1),
        R("button", {
          type: "button",
          class: "fc-retry",
          onClick: g
        }, L(N(r)("upload.retry")), 1)
      ])) : (v(), k(ue, { key: 2 }, [
        a.value === "loading" ? (v(), k("p", tg, L(N(r)("upload.secureLoading")), 1)) : ce("", !0),
        R("div", {
          ref_key: "slot",
          ref: s,
          class: "fc-slot"
        }, null, 512),
        o.value ? (v(), k("p", ng, L(o.value), 1)) : ce("", !0)
      ], 64))
    ]));
  }
}), rg = {
  key: 0,
  class: "artwork",
  part: "artwork"
}, sg = { class: "artwork-body" }, ag = {
  class: "artwork-name",
  part: "artwork-name"
}, og = {
  key: 0,
  class: "artwork-meta",
  part: "artwork-meta"
}, lg = { class: "artwork-actions" }, cg = {
  key: 1,
  class: "producers"
}, ug = {
  key: 0,
  class: "producer-or",
  "aria-hidden": "true"
}, dg = ["onClick"], fg = { class: "producer-label" }, pg = {
  key: 0,
  class: "producer-description"
}, hg = {
  key: 1,
  class: "producer-or",
  "aria-hidden": "true"
}, mg = {
  class: "producer-or",
  "aria-hidden": "true"
}, gg = ["onClick"], yg = { class: "producer-label" }, vg = {
  key: 0,
  class: "producer-description"
}, bg = /* @__PURE__ */ Oe({
  __name: "ArtworkField",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e) {
    const t = e, n = Gt(Qi);
    if (!n)
      throw new Error("ArtworkField must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r, producers: s } = n, { t: a } = mt(), o = K(
      () => {
        var D, Q, M;
        return t.field.providerId === "filecheck" && !!((D = t.field.filecheck) != null && D.workflowId || (Q = t.field.filecheck) != null && Q.workflow) && ((M = i.provider) == null ? void 0 : M.mode) === "element";
      }
    ), l = K(() => {
      var Q;
      const D = i.schema.value;
      return !!D && ((Q = Jo(D)) == null ? void 0 : Q.id) === t.field.id;
    }), c = K(() => i.fieldFile(t.field.id)), u = K(
      () => s.forField(t.field.id, l.value)
    ), d = K(() => {
      const D = i.selections[t.field.id];
      return Array.isArray(D) ? D.length > 0 : typeof D == "string" && D !== "";
    }), f = K(() => {
      var Q;
      const D = (Q = c.value) == null ? void 0 : Q.source;
      return D ? u.value.find((M) => M.id === D) ?? null : null;
    }), m = K(() => d.value && !f.value), g = K(() => t.field.display === "producer"), y = K(
      () => g.value ? u.value : u.value.filter((D) => D.order < Zr)
    ), b = K(
      () => g.value ? [] : u.value.filter((D) => D.order >= Zr)
    ), I = K(() => {
      const D = c.value;
      return D ? D.fileName ? D.fileName : f.value ? a("artwork.designName") : D.fileId : "";
    }), w = K(() => {
      var be;
      const D = c.value;
      if (!D)
        return "";
      const Q = [], M = i.schema.value, ae = ((be = i.file.value) == null ? void 0 : be.fileId) === D.fileId;
      return D.pages !== void 0 && M && ae && Pp(M) && Q.push(
        D.pages === 1 ? a("artwork.pageCountOne") : a("artwork.pageCount", { count: D.pages })
      ), D.canvas && Q.push(`${D.canvas.w} × ${D.canvas.h} ${D.canvas.unit}`), Q.join(" · ");
    });
    function U(D) {
      i.setFile(Nm(D), t.field.id), D.canProceed && D.jobId ? i.select(t.field.id, D.jobId) : i.select(t.field.id, "");
    }
    function O(D) {
      s.activate(D, t.field.id), r.touch(t.field.id);
    }
    function Y() {
      i.setFile(void 0, t.field.id), i.select(t.field.id, ""), r.touch(t.field.id);
    }
    return (D, Q) => f.value ? (v(), k("div", rg, [
      R("div", sg, [
        R("span", ag, L(I.value), 1),
        w.value ? (v(), k("span", og, L(w.value), 1)) : ce("", !0)
      ]),
      R("div", lg, [
        R("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-change",
          onClick: Q[0] || (Q[0] = (M) => O(f.value.id))
        }, L(N(a)("artwork.change")), 1),
        R("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-remove",
          onClick: Y
        }, L(N(a)("artwork.remove")), 1)
      ])
    ])) : (v(), k("div", cg, [
      m.value ? ce("", !0) : (v(!0), k(ue, { key: 0 }, Le(y.value, (M, ae) => (v(), k(ue, {
        key: M.id
      }, [
        g.value && ae > 0 ? (v(), k("p", ug, [
          R("span", null, L(N(a)("artwork.or")), 1)
        ])) : ce("", !0),
        R("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (be) => O(M.id)
        }, [
          R("span", fg, L(M.label), 1),
          M.description ? (v(), k("span", pg, L(M.description), 1)) : ce("", !0)
        ], 8, dg),
        g.value ? ce("", !0) : (v(), k("p", hg, [
          R("span", null, L(N(a)("artwork.or")), 1)
        ]))
      ], 64))), 128)),
      !g.value && o.value && N(i).provider ? (v(), je(ig, {
        key: 1,
        field: e.field,
        provider: N(i).provider,
        onMetadata: U,
        onTouch: Q[1] || (Q[1] = (M) => N(r).touch(e.field.id))
      }, null, 8, ["field", "provider"])) : g.value ? ce("", !0) : (v(), je(Vm, {
        key: 2,
        field: e.field,
        files: N(i).uploads[e.field.id],
        analyzing: (N(i).uploading[e.field.id] ?? 0) > 0,
        error: e.error,
        failure: N(i).uploadErrors[e.field.id],
        onFile: Q[2] || (Q[2] = (M, ae) => N(i).handleFile(M, ae)),
        onRemove: Q[3] || (Q[3] = (M, ae) => N(i).removeUpload(M, ae)),
        onTouch: Q[4] || (Q[4] = (M) => N(r).touch(e.field.id))
      }, null, 8, ["field", "files", "analyzing", "error", "failure"])),
      m.value ? ce("", !0) : (v(!0), k(ue, { key: 3 }, Le(b.value, (M) => (v(), k(ue, {
        key: M.id
      }, [
        R("p", mg, [
          R("span", null, L(N(a)("artwork.or")), 1)
        ]),
        R("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (ae) => O(M.id)
        }, [
          R("span", yg, L(M.label), 1),
          M.description ? (v(), k("span", vg, L(M.description), 1)) : ce("", !0)
        ], 8, gg)
      ], 64))), 128))
    ]));
  }
}), xg = {
  key: 0,
  class: "recap",
  part: "summary-recap"
}, _g = { part: "recap-label" }, wg = { part: "recap-value" }, kg = {
  key: 1,
  class: "recap-empty"
}, Sg = /* @__PURE__ */ Oe({
  __name: "SummaryPanel",
  props: {
    sections: { type: Array },
    selections: { type: Object },
    file: { type: null },
    uploads: { type: Object },
    records: { type: Object }
  },
  setup(e) {
    const t = e, { t: n } = mt(), i = K(
      () => xl(t.sections, t.selections, t.file, {
        quantityLabel: n("quantity.label"),
        artworkLabel: n("artwork.label"),
        designName: n("artwork.designName"),
        uploads: t.uploads,
        records: t.records
      })
    );
    return (r, s) => i.value.length ? (v(), k("dl", xg, [
      (v(!0), k(ue, null, Le(i.value, (a) => (v(), k("div", {
        key: a.fieldId,
        class: "recap-row",
        part: "recap-row"
      }, [
        R("dt", _g, L(a.label), 1),
        R("dd", wg, L(a.value), 1)
      ]))), 128))
    ])) : (v(), k("p", kg, L(N(n)("recap.empty")), 1));
  }
}), Tg = {
  key: 0,
  class: "info-note",
  part: "field-help"
}, Ag = /* @__PURE__ */ Oe({
  __name: "InfoBlock",
  props: {
    field: { type: null }
  },
  setup(e) {
    return (t, n) => e.field.body ? (v(), k("p", Tg, L(e.field.body), 1)) : ce("", !0);
  }
}), Tl = /* @__PURE__ */ Oe({
  __name: "FieldHost",
  props: {
    field: { type: null }
  },
  setup(e) {
    const t = e, n = Gt(Qi);
    if (!n)
      throw new Error("FieldHost must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r } = n, s = K(() => i.selections[t.field.id]), a = K(() => r.errorFor(t.field.id)), o = K(() => {
      const u = s.value;
      return Array.isArray(u) ? u : typeof u == "string" && u !== "" ? [u] : [];
    }), l = K(() => {
      if (!Vt(t.field) || !i.schema.value)
        return [];
      const u = i.schema.value;
      return t.field.options.filter(
        (d) => !_p(u, i.selections, t.field.id, d.id)
      ).map((d) => d.id);
    });
    function c(u) {
      t.field.type === "select-many" ? i.toggle(t.field, u) : i.select(t.field.id, u), r.touch(t.field.id);
    }
    return (u, d) => (v(), je(Dh, {
      field: e.field,
      error: a.value
    }, {
      default: lo(() => [
        e.field.type === "select-one" || e.field.type === "select-many" ? (v(), je(Pc(N(Oa)[e.field.display] ?? N(Oa).pills), {
          key: 0,
          field: e.field,
          "selected-ids": o.value,
          "unavailable-ids": l.value,
          error: a.value,
          onPick: c
        }, null, 40, ["field", "selected-ids", "unavailable-ids", "error"])) : e.field.type === "quantity" ? (v(), je(Gh, {
          key: 1,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[0] || (d[0] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[1] || (d[1] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "quantities" ? (v(), je(am, {
          key: 2,
          field: e.field,
          value: s.value,
          "unavailable-ids": l.value,
          error: a.value,
          onSelect: d[2] || (d[2] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[3] || (d[3] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "unavailable-ids", "error"])) : e.field.type === "number" ? (v(), je(mm, {
          key: 3,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[4] || (d[4] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[5] || (d[5] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "text" ? (v(), je(vm, {
          key: 4,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[6] || (d[6] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[7] || (d[7] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "dimensions" ? (v(), je(Im, {
          key: 5,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[8] || (d[8] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[9] || (d[9] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "file" ? (v(), je(bg, {
          key: 6,
          field: e.field,
          error: a.value
        }, null, 8, ["field", "error"])) : e.field.type === "info" && e.field.display === "summary" ? (v(), je(Sg, {
          key: 7,
          sections: N(i).visibleSections.value,
          selections: N(i).selections,
          file: N(i).file.value,
          uploads: N(i).uploads,
          records: N(i).records
        }, null, 8, ["sections", "selections", "file", "uploads", "records"])) : e.field.type === "info" ? (v(), je(Ag, {
          key: 8,
          field: e.field
        }, null, 8, ["field"])) : ce("", !0)
      ]),
      _: 1
    }, 8, ["field", "error"]));
  }
}), Cg = {
  class: "section-title",
  part: "section-title"
}, $g = /* @__PURE__ */ Oe({
  __name: "SectionStack",
  props: {
    sections: { type: Array }
  },
  setup(e) {
    return (t, n) => (v(!0), k(ue, null, Le(e.sections, (i) => (v(), k("section", {
      key: i.section.id,
      class: "section",
      part: "section"
    }, [
      R("h3", Cg, L(i.section.title), 1),
      (v(!0), k(ue, null, Le(i.fields, (r) => (v(), je(Tl, {
        key: r.id,
        field: r
      }, null, 8, ["field"]))), 128))
    ]))), 128));
  }
}), Ig = { class: "wizard" }, Ng = {
  class: "wizard-nav",
  part: "wizard-nav"
}, Eg = ["part", "aria-current"], Og = ["onClick"], Pg = {
  class: "wizard-step-index",
  "aria-hidden": "true"
}, Mg = { class: "wizard-step-title" }, Rg = {
  key: 0,
  class: "section",
  part: "section"
}, Fg = { class: "wizard-actions" }, jg = /* @__PURE__ */ Oe({
  __name: "SectionWizard",
  props: {
    sections: { type: Array },
    issues: { type: Array }
  },
  emits: ["blocked"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n, { t: s } = mt(), a = /* @__PURE__ */ Ke(0), o = /* @__PURE__ */ Ke(null);
    Tt(
      () => i.sections.length,
      (y) => {
        a.value > y - 1 && (a.value = Math.max(0, y - 1));
      }
    );
    const l = K(() => i.sections[a.value]), c = K(() => a.value >= i.sections.length - 1);
    function u(y) {
      const b = i.sections[y];
      if (!b)
        return [];
      const I = new Set(b.fields.map((w) => w.id));
      return i.issues.filter((w) => I.has(w.fieldId));
    }
    function d(y) {
      return y === a.value ? "active" : y < a.value && u(y).length === 0 ? "done" : "todo";
    }
    async function f(y) {
      var b;
      a.value = Math.max(0, Math.min(y, i.sections.length - 1)), await Zi(), (b = o.value) == null || b.focus();
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
    return t({ goTo: f, current: a }), (y, b) => (v(), k("div", Ig, [
      R("ol", Ng, [
        (v(!0), k(ue, null, Le(e.sections, (I, w) => (v(), k("li", {
          key: I.section.id,
          class: Xe(["wizard-step", d(w)]),
          part: `wizard-step wizard-step-${d(w)}`,
          "aria-current": w === a.value ? "step" : void 0
        }, [
          R("button", {
            type: "button",
            class: "wizard-step-button",
            onClick: (U) => f(w)
          }, [
            R("span", Pg, L(d(w) === "done" ? "✓" : w + 1), 1),
            R("span", Mg, L(I.section.title), 1)
          ], 8, Og)
        ], 10, Eg))), 128))
      ]),
      l.value ? (v(), k("section", Rg, [
        R("h3", {
          ref_key: "heading",
          ref: o,
          class: "section-title",
          part: "section-title",
          tabindex: "-1"
        }, L(l.value.section.title), 513),
        (v(!0), k(ue, null, Le(l.value.fields, (I) => (v(), je(Tl, {
          key: I.id,
          field: I
        }, null, 8, ["field"]))), 128))
      ])) : ce("", !0),
      R("div", Fg, [
        a.value > 0 ? (v(), k("button", {
          key: 0,
          type: "button",
          class: "wizard-back",
          part: "wizard-back",
          onClick: g
        }, L(N(s)("wizard.back")), 1)) : ce("", !0),
        c.value ? ce("", !0) : (v(), k("button", {
          key: 1,
          type: "button",
          class: "wizard-next",
          part: "wizard-next",
          onClick: m
        }, L(N(s)("wizard.continue")), 1))
      ])
    ]));
  }
}), Lg = {
  class: "summary",
  part: "summary"
}, Dg = { part: "summary-title" }, zg = { class: "lines" }, qg = { part: "summary-line-label" }, Ug = { part: "summary-line-value" }, Vg = {
  class: "subtotal",
  part: "summary-net"
}, Bg = { part: "summary-net-label" }, Zg = { part: "summary-net-value" }, Hg = {
  class: "tax-line",
  part: "summary-tax"
}, Wg = { part: "summary-tax-label" }, Kg = { part: "summary-tax-value" }, Gg = {
  class: "total",
  part: "summary-total",
  "aria-live": "polite",
  "aria-atomic": "true"
}, Yg = { part: "summary-total-label" }, Qg = { part: "price" }, Jg = {
  key: 1,
  class: "tax-included",
  part: "summary-tax-included"
}, Xg = {
  key: 2,
  class: "unit-price",
  part: "summary-unit"
}, ey = {
  key: 3,
  class: "next-break",
  part: "summary-hint"
}, ty = {
  key: 4,
  class: "price-note",
  part: "summary-note"
}, ny = {
  key: 5,
  class: "unavailable",
  role: "status"
}, iy = ["disabled"], ry = {
  class: "visually-hidden",
  role: "status"
}, sy = /* @__PURE__ */ Oe({
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
    const n = e, i = t, { t: r } = mt();
    function s(g) {
      var y;
      return rh(
        g,
        ((y = n.price) == null ? void 0 : y.currency) ?? "USD",
        n.locale,
        n.priceFormat
      );
    }
    const a = K(
      () => {
        var g;
        return (((g = n.price) == null ? void 0 : g.lines) ?? []).filter(
          (y) => !(y.amount === 0 && (y.stage === "base" || y.stage === "percent" || y.stage === "multiplier"))
        );
      }
    ), o = K(() => {
      var y;
      const g = n.nextBreak;
      if (!(!g || (y = n.price) != null && y.unavailable))
        return g.percentOff !== void 0 ? r("summary.nextBreakPercent", {
          count: g.add,
          percent: Na(g.percentOff, n.locale)
        }) : r("summary.nextBreakPrice", { count: g.add, unitPrice: s(g.unitPrice) });
    }), l = K(
      () => {
        var g, y;
        return (((g = n.price) == null ? void 0 : g.quantity) ?? 1) > 1 && !((y = n.price) != null && y.unavailable);
      }
    ), c = K(() => {
      const g = n.price;
      if (!(!n.tax || !g || g.unavailable))
        return oh(g.total, g.currency, n.tax);
    }), u = K(() => {
      var g, y;
      return {
        tax: ((g = n.tax) == null ? void 0 : g.name) ?? r("tax.name"),
        rate: Na(((y = n.tax) == null ? void 0 : y.rate) ?? 0, n.locale)
      };
    }), d = K(() => {
      var g;
      return c.value !== void 0 && ((g = n.tax) == null ? void 0 : g.mode) === "exclusive";
    }), f = K(
      () => {
        var g, y;
        return d.value ? ((g = c.value) == null ? void 0 : g.gross) ?? 0 : ((y = n.price) == null ? void 0 : y.total) ?? 0;
      }
    ), m = K(() => {
      const g = n.price;
      return g ? d.value && g.quantity > 0 ? f.value / g.quantity : g.unitPrice : 0;
    });
    return (g, y) => {
      var b, I;
      return v(), k("aside", Lg, [
        R("h3", Dg, L(N(r)("summary.title")), 1),
        R("ul", zg, [
          (v(!0), k(ue, null, Le(a.value, (w, U) => (v(), k("li", {
            key: U,
            part: "summary-line"
          }, [
            R("span", qg, L(N(Qp)(N(r), w)), 1),
            R("span", Ug, L(s(w.amount)), 1)
          ]))), 128))
        ]),
        d.value && c.value ? (v(), k(ue, { key: 0 }, [
          R("div", Vg, [
            R("span", Bg, L(N(r)("summary.totalNet", u.value)), 1),
            R("span", Zg, L(s(c.value.net)), 1)
          ]),
          R("div", Hg, [
            R("span", Wg, L(N(r)("summary.tax", u.value)), 1),
            R("span", Kg, L(s(c.value.tax)), 1)
          ])
        ], 64)) : ce("", !0),
        R("div", Gg, [
          R("span", Yg, L(d.value ? N(r)("summary.totalGross", u.value) : N(r)("summary.total")), 1),
          R("strong", Qg, L(s(f.value)), 1)
        ]),
        c.value && !d.value ? (v(), k("p", Jg, L(N(r)("summary.taxIncluded", { ...u.value, amount: s(c.value.tax) })), 1)) : ce("", !0),
        l.value ? (v(), k("p", Xg, L(N(r)("summary.unitPrice", {
          quantity: ((b = e.price) == null ? void 0 : b.quantity) ?? 0,
          unitPrice: s(m.value)
        })), 1)) : ce("", !0),
        o.value ? (v(), k("p", ey, L(o.value), 1)) : ce("", !0),
        e.priceNote ? (v(), k("p", ty, L(e.priceNote), 1)) : ce("", !0),
        (I = e.price) != null && I.unavailable ? (v(), k("p", ny, L(N(r)(
          e.price.unavailableReason === "formula" ? "summary.unpriceable" : "summary.unavailable"
        )), 1)) : ce("", !0),
        (v(!0), k(ue, null, Le(e.holds.filter((w) => w.message), (w) => (v(), k("p", {
          key: w.key,
          class: "hold-message",
          part: "hold-message",
          role: "status"
        }, L(w.message), 1))), 128)),
        R("button", {
          type: "button",
          class: "cta",
          part: "cta",
          disabled: e.holds.length > 0,
          onClick: y[0] || (y[0] = (w) => i("submit"))
        }, L(N(r)("summary.addToCart")), 9, iy),
        R("span", ry, L(e.issueCount > 0 ? N(r)("summary.issues", { count: e.issueCount }) : ""), 1)
      ]);
    };
  }
}), ay = {
  key: 0,
  class: "state"
}, oy = {
  key: 1,
  class: "state error",
  role: "alert"
}, ly = {
  key: 2,
  class: "layout"
}, cy = { class: "main" }, uy = /* @__PURE__ */ Oe({
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
    function s(M) {
      if (M)
        try {
          const ae = typeof M == "string" ? JSON.parse(M) : M;
          return ep.parse(ae);
        } catch {
          return;
        }
    }
    const a = Bp({
      configUrl: i.configUrl,
      uploadEndpoint: i.uploadEndpoint,
      turnstileUrl: i.turnstileUrl,
      provider: s(i.provider),
      inlineConfig: i.config
    }), o = K(() => Xp(i.strings)), l = wl(() => o.value);
    xr(kl, l);
    const c = K(() => ih(i.priceFormat)), u = K(() => ah(i.taxMode, i.taxRate, i.taxName)), d = eh(
      a.visibleFields,
      a.selections,
      a.price,
      l.t
    ), f = Zu(), m = Hp(), g = Gp({ host: f });
    xr(Qi, { cfg: a, validation: d, producers: g });
    const y = Wp({ host: f, cfg: a, validation: d, holds: m, producers: g });
    Rp(a, g);
    const b = /* @__PURE__ */ Ke(null), I = /* @__PURE__ */ Ke(null);
    ss(() => {
      (i.config || i.configUrl) && a.load().then(() => {
        a.unconfigured.value ? r("unconfigured", { productId: i.productId }) : a.schema.value && y.notifyReady();
      });
    }), Tt(
      () => i.config,
      (M, ae) => {
        M && M !== ae && (d.reset(), a.reload({
          inlineConfig: M,
          provider: s(i.provider)
        }).then(() => {
          a.schema.value && y.notifyReady();
        }));
      }
    );
    const w = K(() => {
      const M = {}, ae = a.schema.value;
      if (!ae)
        return M;
      for (const be of ae.sections)
        for (const Ae of be.fields)
          if (M[Ae.id] = Ae.label ?? Ae.id, Vt(Ae))
            for (const A of Ae.options)
              M[`${Ae.id}:${A.id}`] = A.label;
      return M;
    });
    function U() {
      return !a.schema.value || !a.price.value ? null : {
        productId: a.schema.value.productId,
        selections: { ...a.selections },
        quantity: a.price.value.quantity,
        file: a.file.value,
        price: a.price.value,
        sku: a.price.value.sku,
        labels: w.value,
        display: xl(
          a.visibleSections.value,
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
        files: O()
      };
    }
    function O() {
      return a.visibleSections.value.flatMap(
        ({ fields: M }) => M.flatMap(
          (ae) => (a.uploads[ae.id] ?? []).map((be) => {
            var A;
            const Ae = (A = be.raw) == null ? void 0 : A.downloadUrl;
            return {
              fieldId: ae.id,
              fileId: be.fileId,
              ...be.fileName ? { fileName: be.fileName } : {},
              ...typeof Ae == "string" && Ae.startsWith("https://") ? { downloadUrl: Ae } : {}
            };
          })
        )
      );
    }
    function Y(M) {
      var be, Ae;
      const ae = (be = b.value) == null ? void 0 : be.querySelector(`[data-field-id="${M}"]`);
      ae && (ae.scrollIntoView({ behavior: "smooth", block: "center" }), (Ae = ae.querySelector(
        "button, input, select, textarea, [tabindex]"
      )) == null || Ae.focus({ preventScroll: !0 }));
    }
    function D() {
      var be, Ae, A;
      const M = U();
      if (!M)
        return;
      if (m.held.value) {
        r("invalid", {
          productId: M.productId,
          issues: [],
          holds: m.list.value
        });
        return;
      }
      const ae = d.touchAll();
      if (ae.length > 0 || (be = a.price.value) != null && be.unavailable) {
        const P = ae[0];
        if (P) {
          const te = a.visibleSections.value.findIndex(
            (xe) => xe.fields.some((ge) => ge.id === P.fieldId)
          );
          ((Ae = a.schema.value) == null ? void 0 : Ae.layout) === "wizard" && te >= 0 && ((A = I.value) == null || A.goTo(te)), Y(P.fieldId);
        }
        r("invalid", {
          productId: M.productId,
          issues: ae
        });
        return;
      }
      r("submit", { ...M, valid: !0 });
    }
    function Q(M) {
      for (const be of M)
        d.touch(be.fieldId);
      const ae = M[0];
      ae && Y(ae.fieldId);
    }
    return t(y.exposed), (M, ae) => N(a).unconfigured.value ? ce("", !0) : (v(), k("div", {
      key: 0,
      ref_key: "root",
      ref: b,
      class: "configurator",
      part: "base"
    }, [
      N(a).loading.value ? (v(), k("p", ay, L(N(l).t("state.loading")), 1)) : N(a).error.value ? (v(), k("p", oy, L(N(a).error.value), 1)) : N(a).schema.value ? (v(), k("div", ly, [
        R("div", cy, [
          N(a).schema.value.layout === "wizard" ? (v(), je(jg, {
            key: 0,
            ref_key: "wizard",
            ref: I,
            sections: N(a).visibleSections.value,
            issues: N(d).issues.value,
            onBlocked: Q
          }, null, 8, ["sections", "issues"])) : (v(), je($g, {
            key: 1,
            sections: N(a).visibleSections.value
          }, null, 8, ["sections"]))
        ]),
        at(sy, {
          price: N(a).price.value,
          locale: i.locale,
          "price-format": c.value,
          "price-note": i.priceNote,
          tax: u.value,
          "next-break": N(a).nextBreak.value,
          holds: N(m).list.value,
          "issue-count": N(d).issues.value.length,
          onSubmit: D
        }, null, 8, ["price", "locale", "price-format", "price-note", "tax", "next-break", "holds", "issue-count"])
      ])) : ce("", !0)
    ], 512));
  }
}), dy = ":host{--pc-color-accent: #1a1a1a;--pc-color-accent-contrast: #ffffff;--pc-color-accent-soft: #f6f6f4;--pc-color-surface: #ffffff;--pc-color-surface-alt: #fafafa;--pc-color-border: #e0e0dc;--pc-color-text: #1a1a1a;--pc-color-text-muted: #6b7280;--pc-color-danger: #c0392b;--pc-color-focus: var(--pc-color-accent);--pc-font-family: inherit;--pc-font-size: 1em;--pc-label-weight: 600;--pc-radius-control: 8px;--pc-radius-card: 12px;--pc-space: 4px;--pc-shadow-card: none;--pc-cta-bg: var(--pc-color-accent);--pc-cta-color: var(--pc-color-accent-contrast);--pc-swatch-size: 44px;--pc-card-image-height: 90px;display:block;container:pc-root / inline-size;font-family:var(--pc-font-family);font-size:var(--pc-font-size);color:var(--pc-color-text)}", fy = '*{box-sizing:border-box}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.state{padding:calc(var(--pc-space) * 8);text-align:center;color:var(--pc-color-text-muted)}.state.error{color:var(--pc-color-danger)}.layout{display:grid;grid-template-columns:1fr 300px;gap:calc(var(--pc-space) * 6);align-items:start}.section{margin-bottom:calc(var(--pc-space) * 6);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);box-shadow:var(--pc-shadow-card)}.section-title{margin:0 0 calc(var(--pc-space) * 4);text-transform:uppercase;letter-spacing:.04em;font-size:.95em;color:var(--pc-color-text);outline:none}.field{margin-bottom:calc(var(--pc-space) * 5)}.field:last-child{margin-bottom:0}.field-label{display:block;font-weight:var(--pc-label-weight);margin-bottom:calc(var(--pc-space) * 2)}.req{color:var(--pc-color-danger)}.help{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.field-error{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--pc-color-focus);outline-offset:2px}.grid{display:grid;gap:calc(var(--pc-space) * 3);grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.grid.cards{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.card{position:relative;display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;transition:border-color .15s ease}.card:hover{border-color:var(--pc-color-accent-soft)}.card.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.card img{max-width:100%;height:var(--pc-card-image-height);object-fit:contain}.card-label{font-size:.9em}.card-description{font-size:.8em;color:var(--pc-color-text-muted)}.check{position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);display:grid;place-items:center;font-size:.8em}.swatches{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.swatch{width:var(--pc-swatch-size);height:var(--pc-swatch-size);border-radius:50%;border:3px solid transparent;cursor:pointer;display:grid;place-items:center}.swatch.active{border-color:var(--pc-color-accent);box-shadow:0 0 0 2px var(--pc-color-surface) inset}.swatch-check{color:#fff;text-shadow:0 0 3px rgb(0 0 0 / .8);font-size:.9em}.swatch-selected-label{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.pills{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.pill{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);cursor:pointer}.pill.active{background:var(--pc-color-accent);border-color:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.choice-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.choice-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);padding:calc(var(--pc-space) * 3);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;text-align:left;cursor:pointer}.choice-row.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.choice-indicator{flex:none;width:20px;height:20px;border:2px solid var(--pc-color-border);border-radius:50%;display:grid;place-items:center;font-size:.7em;color:var(--pc-color-accent-contrast)}.choice-indicator.multi{border-radius:4px}.choice-row.active .choice-indicator{background:var(--pc-color-accent);border-color:var(--pc-color-accent)}.choice-body{display:flex;flex-direction:column}.choice-title{font-weight:var(--pc-label-weight)}.choice-description{font-size:.85em;color:var(--pc-color-text-muted)}.card.unavailable,.pill.unavailable,.swatch.unavailable,.choice-row.unavailable{opacity:.4;cursor:not-allowed;text-decoration:line-through}.dropdown{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.quantities-grid{display:grid;gap:calc(var(--pc-space) * 2);grid-template-columns:repeat(auto-fill,minmax(118px,1fr))}.quantities-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.quantities-item{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 3) calc(var(--pc-space) * 2);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface)}.quantities-list .quantities-item{flex-direction:row;justify-content:space-between;padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3)}.quantities-item.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.quantities-item.off .quantities-label{text-decoration:line-through;color:var(--pc-color-text-muted)}.quantities-name{display:inline-flex;align-items:center;gap:calc(var(--pc-space) * 2);font-weight:var(--pc-label-weight)}.quantities-swatch{width:1.1em;height:1.1em;border-radius:50%;border:1px solid var(--pc-color-border)}.quantities-image{height:2em;width:auto;object-fit:contain}.quantities-item .stepper button{width:32px}.quantities-item .stepper-value{width:3em}.quantities-total{margin:calc(var(--pc-space) * 2) 0 0;text-align:right;font-size:.9em;color:var(--pc-color-text-muted)}.stepper{display:inline-flex;align-items:stretch;border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);overflow:hidden}.stepper button{width:40px;border:none;background:var(--pc-color-surface-alt);color:var(--pc-color-text);font-size:1.2em;cursor:pointer}.stepper button:disabled{opacity:.4;cursor:not-allowed}.stepper-value{width:4.5em;border:none;text-align:center;font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);background:var(--pc-color-surface);-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.stepper-value::-webkit-outer-spin-button,.stepper-value::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.number-input,.text-input{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.textarea{width:100%;resize:vertical}.slider-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3)}.slider{flex:1;accent-color:var(--pc-color-accent)}.slider-value{min-width:3em;text-align:right;font-weight:var(--pc-label-weight)}.dimensions{display:flex;align-items:flex-end;gap:calc(var(--pc-space) * 2);flex-wrap:wrap}.dim-input{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1)}.dim-label{font-size:.8em;color:var(--pc-color-text-muted)}.dim-input input{width:6em;padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);font:inherit;color:var(--pc-color-text);background:var(--pc-color-surface)}.dim-times{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.dim-unit{min-width:5em}.dim-unit-static{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.upload-input{position:absolute;width:1px;height:1px;opacity:0;overflow:hidden}.upload-zone{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 6);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);cursor:pointer;text-align:center}.upload.dragging .upload-zone{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.upload.done .upload-zone{border-style:solid;border-color:var(--pc-color-accent)}.upload-title{font-weight:var(--pc-label-weight)}.upload-hint{font-size:.8em;color:var(--pc-color-text-muted)}.upload-wrong-type{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.upload-files{list-style:none;margin:0 0 calc(var(--pc-space) * 2);padding:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1.5)}.upload-file{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:1px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-surface)}.upload-remove{flex:none;border:none;background:none;padding:0;font:inherit;font-size:.85em;color:var(--pc-color-text-muted);text-decoration:underline;cursor:pointer}.upload-remove:hover{color:var(--pc-color-danger)}.upload-filename{font-weight:var(--pc-label-weight);color:var(--pc-color-accent);word-break:break-all}.upload-status{color:var(--pc-color-accent);font-weight:var(--pc-label-weight)}.producers{display:flex;flex-direction:column}.producer{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;text-align:center;transition:border-color .15s ease}.producer:hover{border-color:var(--pc-color-accent)}.producer-label{font-weight:var(--pc-label-weight)}.producer-description{font-size:.8em;color:var(--pc-color-text-muted)}.producer-or{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);margin:calc(var(--pc-space) * 3) 0;font-size:.8em;text-transform:uppercase;letter-spacing:.06em;color:var(--pc-color-text-muted)}.producer-or:before,.producer-or:after{content:"";flex:1;height:1px;background:var(--pc-color-border)}.artwork{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 4);flex-wrap:wrap;padding:calc(var(--pc-space) * 4) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-accent-soft)}.artwork-body{display:flex;flex-direction:column;min-width:0}.artwork-name{font-weight:var(--pc-label-weight);word-break:break-all}.artwork-meta{font-size:.85em;color:var(--pc-color-text-muted)}.artwork-actions{display:flex;gap:calc(var(--pc-space) * 2)}.artwork-action{padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-size:.9em;cursor:pointer}.artwork-action:hover{border-color:var(--pc-color-accent)}.fc-slot{min-height:40px}.fc-loading{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.fc-panel{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);text-align:center;align-items:center}.fc-panel.fc-error{border-color:var(--pc-color-danger)}.fc-panel-title{font-weight:var(--pc-label-weight)}.fc-panel-hint{font-size:.85em;color:var(--pc-color-text-muted)}.fc-retry{margin-top:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.recap{margin:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.recap-row{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 4);font-size:.9em}.recap-row dt{color:var(--pc-color-text-muted)}.recap-row dd{margin:0;text-align:right}.recap-empty,.info-note{margin:0;font-size:.9em;color:var(--pc-color-text-muted)}.summary{position:sticky;top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt)}.summary h3{margin:0 0 calc(var(--pc-space) * 4)}.lines{list-style:none;margin:0 0 calc(var(--pc-space) * 4);padding:0}.lines li{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0;color:var(--pc-color-text-muted)}.total{display:flex;justify-content:space-between;padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border);font-size:1.1em}.subtotal,.tax-line{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0}.subtotal{padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border)}.tax-line{margin-bottom:calc(var(--pc-space) * 2);color:var(--pc-color-text-muted)}.tax-included,.unit-price{margin:calc(var(--pc-space) * 1) 0 0;text-align:right;font-size:.85em;color:var(--pc-color-text-muted)}.next-break{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;font-weight:var(--pc-label-weight);color:var(--pc-color-accent)}.price-note{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.unavailable{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.hold-message{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.cta{width:100%;margin-top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 3.5);border:none;border-radius:var(--pc-radius-control);background:var(--pc-cta-bg);color:var(--pc-cta-color);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.cta:disabled{opacity:.5;cursor:not-allowed}.wizard-nav{list-style:none;display:flex;gap:calc(var(--pc-space) * 2);margin:0 0 calc(var(--pc-space) * 5);padding:0;flex-wrap:wrap}.wizard-step-button{display:flex;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:none;border-radius:var(--pc-radius-control);background:transparent;font:inherit;color:var(--pc-color-text-muted);cursor:pointer}.wizard-step.active .wizard-step-button{background:var(--pc-color-accent-soft);color:var(--pc-color-text);font-weight:var(--pc-label-weight)}.wizard-step-index{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--pc-color-border);color:var(--pc-color-text);font-size:.75em}.wizard-step.active .wizard-step-index,.wizard-step.done .wizard-step-index{background:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.wizard-actions{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 3)}.wizard-back,.wizard-next{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 6);border-radius:var(--pc-radius-control);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.wizard-back{border:2px solid var(--pc-color-border);background:var(--pc-color-surface);color:var(--pc-color-text)}.wizard-next{border:none;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);margin-left:auto}@container pc-root (max-width: 640px){.layout{grid-template-columns:1fr}.summary{position:static}}', py = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, hy = /* @__PURE__ */ py(uy, [["styles", [dy, fy]]]), my = /* @__PURE__ */ Vu(hy);
function gy(e = "print-configurator") {
  typeof customElements < "u" && !customElements.get(e) && customElements.define(e, my);
}
gy();
export {
  _l as DEFAULT_STRINGS,
  Br as PAGE_API_VERSION,
  my as PrintConfiguratorElement,
  gy as registerPrintConfigurator
};
