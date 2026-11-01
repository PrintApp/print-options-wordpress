var Sl = Object.defineProperty;
var Tl = (e, t, n) => t in e ? Sl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Kt = (e, t, n) => Tl(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ce = {}, fn = [], bt = () => {
}, Oa = () => !1, Mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ri = (e) => e.startsWith("onUpdate:"), Ie = Object.assign, Br = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Cl = Object.prototype.hasOwnProperty, ye = (e, t) => Cl.call(e, t), ie = Array.isArray, pn = (e) => Xn(e) === "[object Map]", Pa = (e) => Xn(e) === "[object Set]", Is = (e) => Xn(e) === "[object Date]", re = (e) => typeof e == "function", Ae = (e) => typeof e == "string", at = (e) => typeof e == "symbol", _e = (e) => e !== null && typeof e == "object", Ma = (e) => (_e(e) || re(e)) && re(e.then) && re(e.catch), Ra = Object.prototype.toString, Xn = (e) => Ra.call(e), Al = (e) => Xn(e).slice(8, -1), Fi = (e) => Xn(e) === "[object Object]", Zr = (e) => Ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fn = /* @__PURE__ */ Vr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ji = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, $l = /-\w/g, Re = ji(
  (e) => e.replace($l, (t) => t.slice(1).toUpperCase())
), Il = /\B([A-Z])/g, Ye = ji(
  (e) => e.replace(Il, "-$1").toLowerCase()
), Li = ji((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yi = ji(
  (e) => e ? `on${Li(e)}` : ""
), yt = (e, t) => !Object.is(e, t), Qi = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Fa = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Nl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ns = (e) => {
  const t = Ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Es;
const Di = () => Es || (Es = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ei(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = Ae(i) ? Ml(i) : ei(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Ae(e) || _e(e))
    return e;
}
const El = /;(?![^(]*\))/g, Ol = /:([^]+)/, Pl = /\/\*[^]*?\*\//g;
function Ml(e) {
  const t = {};
  return e.replace(Pl, "").split(El).forEach((n) => {
    if (n) {
      const i = n.split(Ol);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ke(e) {
  let t = "";
  if (Ae(e))
    t = e;
  else if (ie(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ke(e[n]);
      i && (t += i + " ");
    }
  else if (_e(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Rl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fl = /* @__PURE__ */ Vr(Rl);
function ja(e) {
  return !!e || e === "";
}
function jl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Hr(e[i], t[i]);
  return n;
}
function Hr(e, t) {
  if (e === t) return !0;
  let n = Is(e), i = Is(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = at(e), i = at(t), n || i)
    return e === t;
  if (n = ie(e), i = ie(t), n || i)
    return n && i ? jl(e, t) : !1;
  if (n = _e(e), i = _e(t), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !Hr(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const La = (e) => !!(e && e.__v_isRef === !0), L = (e) => Ae(e) ? e : e == null ? "" : ie(e) || _e(e) && (e.toString === Ra || !re(e.toString)) ? La(e) ? L(e.value) : JSON.stringify(e, Da, 2) : String(e), Da = (e, t) => La(t) ? Da(e, t.value) : pn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[Ji(i, s) + " =>"] = r, n),
    {}
  )
} : Pa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ji(n))
} : at(t) ? Ji(t) : _e(t) && !ie(t) && !Fi(t) ? String(t) : t, Ji = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    at(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let je;
class Ll {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && je && (je.active ? (this.parent = je, this.index = (je.scopes || (je.scopes = [])).push(
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
      const n = je;
      try {
        return je = this, t();
      } finally {
        je = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = je, je = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (je === this)
        je = this.prevScope;
      else {
        let t = je;
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
function Dl() {
  return je;
}
let Te;
const Xi = /* @__PURE__ */ new WeakSet();
class za {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, je && (je.active ? je.effects.push(this) : this.flags &= -2);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ua(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Os(this), Va(this);
    const t = Te, n = st;
    Te = this, st = !0;
    try {
      return this.fn();
    } finally {
      Ba(this), Te = t, st = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Gr(t);
      this.deps = this.depsTail = void 0, Os(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    fr(this) && this.run();
  }
  get dirty() {
    return fr(this);
  }
}
let qa = 0, jn, Ln;
function Ua(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ln, Ln = e;
    return;
  }
  e.next = jn, jn = e;
}
function Wr() {
  qa++;
}
function Kr() {
  if (--qa > 0)
    return;
  if (Ln) {
    let t = Ln;
    for (Ln = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; jn; ) {
    let t = jn;
    for (jn = void 0; t; ) {
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
function Va(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ba(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const r = i.prevDep;
    i.version === -1 ? (i === n && (n = r), Gr(i), zl(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r;
  }
  e.deps = t, e.depsTail = n;
}
function fr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Za(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Za(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Un) || (e.globalVersion = Un, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !fr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Te, i = st;
  Te = e, st = !0;
  try {
    Va(e);
    const r = e.fn(e._value);
    (t.version === 0 || yt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Te = n, st = i, Ba(e), e.flags &= -3;
  }
}
function Gr(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: r } = e;
  if (i && (i.nextSub = r, e.prevSub = void 0), r && (r.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Gr(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function zl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let st = !0;
const Ha = [];
function Pt() {
  Ha.push(st), st = !1;
}
function Mt() {
  const e = Ha.pop();
  st = e === void 0 ? !0 : e;
}
function Os(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Te;
    Te = void 0;
    try {
      t();
    } finally {
      Te = n;
    }
  }
}
let Un = 0;
class ql {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Yr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Te || !st || Te === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Te)
      n = this.activeLink = new ql(Te, this), Te.deps ? (n.prevDep = Te.depsTail, Te.depsTail.nextDep = n, Te.depsTail = n) : Te.deps = Te.depsTail = n, Wa(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Te.depsTail, n.nextDep = void 0, Te.depsTail.nextDep = n, Te.depsTail = n, Te.deps === n && (Te.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Un++, this.notify(t);
  }
  notify(t) {
    Wr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Kr();
    }
  }
}
function Wa(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Wa(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const pr = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ Symbol(
  ""
), hr = /* @__PURE__ */ Symbol(
  ""
), Vn = /* @__PURE__ */ Symbol(
  ""
);
function Le(e, t, n) {
  if (st && Te) {
    let i = pr.get(e);
    i || pr.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || (i.set(n, r = new Yr()), r.map = i, r.key = n), r.track();
  }
}
function It(e, t, n, i, r, s) {
  const a = pr.get(e);
  if (!a) {
    Un++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Wr(), t === "clear")
    a.forEach(o);
  else {
    const l = ie(e), c = l && Zr(n);
    if (l && n === "length") {
      const u = Number(i);
      a.forEach((d, f) => {
        (f === "length" || f === Vn || !at(f) && f >= u) && o(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), c && o(a.get(Vn)), t) {
        case "add":
          l ? c && o(a.get("length")) : (o(a.get(en)), pn(e) && o(a.get(hr)));
          break;
        case "delete":
          l || (o(a.get(en)), pn(e) && o(a.get(hr)));
          break;
        case "set":
          pn(e) && o(a.get(en));
          break;
      }
  }
  Kr();
}
function on(e) {
  const t = /* @__PURE__ */ ve(e);
  return t === e ? t : (Le(t, "iterate", Vn), /* @__PURE__ */ Je(e) ? t : t.map(ot));
}
function zi(e) {
  return Le(e = /* @__PURE__ */ ve(e), "iterate", Vn), e;
}
function gt(e, t) {
  return /* @__PURE__ */ Rt(e) ? yn(/* @__PURE__ */ tn(e) ? ot(t) : t) : ot(t);
}
const Ul = {
  __proto__: null,
  [Symbol.iterator]() {
    return er(this, Symbol.iterator, (e) => gt(this, e));
  },
  concat(...e) {
    return on(this).concat(
      ...e.map((t) => ie(t) ? on(t) : t)
    );
  },
  entries() {
    return er(this, "entries", (e) => (e[1] = gt(this, e[1]), e));
  },
  every(e, t) {
    return Tt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Tt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => gt(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Tt(
      this,
      "find",
      e,
      t,
      (n) => gt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Tt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Tt(
      this,
      "findLast",
      e,
      t,
      (n) => gt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Tt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Tt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return tr(this, "includes", e);
  },
  indexOf(...e) {
    return tr(this, "indexOf", e);
  },
  join(e) {
    return on(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return tr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Tt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Cn(this, "pop");
  },
  push(...e) {
    return Cn(this, "push", e);
  },
  reduce(e, ...t) {
    return Ps(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ps(this, "reduceRight", e, t);
  },
  shift() {
    return Cn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Tt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Cn(this, "splice", e);
  },
  toReversed() {
    return on(this).toReversed();
  },
  toSorted(e) {
    return on(this).toSorted(e);
  },
  toSpliced(...e) {
    return on(this).toSpliced(...e);
  },
  unshift(...e) {
    return Cn(this, "unshift", e);
  },
  values() {
    return er(this, "values", (e) => gt(this, e));
  }
};
function er(e, t, n) {
  const i = zi(e), r = i[t]();
  return i !== e && !/* @__PURE__ */ Je(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const Vl = Array.prototype;
function Tt(e, t, n, i, r, s) {
  const a = zi(e), o = a !== e && !/* @__PURE__ */ Je(e), l = a[t];
  if (l !== Vl[t]) {
    const d = l.apply(e, s);
    return o ? ot(d) : d;
  }
  let c = n;
  a !== e && (o ? c = function(d, f) {
    return n.call(this, gt(e, d), f, e);
  } : n.length > 2 && (c = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const u = l.call(a, c, i);
  return o && r ? r(u) : u;
}
function Ps(e, t, n, i) {
  const r = zi(e), s = r !== e && !/* @__PURE__ */ Je(e);
  let a = n, o = !1;
  r !== e && (s ? (o = i.length === 0, a = function(c, u, d) {
    return o && (o = !1, c = gt(e, c)), n.call(this, c, gt(e, u), d, e);
  }) : n.length > 3 && (a = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const l = r[t](a, ...i);
  return o ? gt(e, l) : l;
}
function tr(e, t, n) {
  const i = /* @__PURE__ */ ve(e);
  Le(i, "iterate", Vn);
  const r = i[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Xr(n[0]) ? (n[0] = /* @__PURE__ */ ve(n[0]), i[t](...n)) : r;
}
function Cn(e, t, n = []) {
  Pt(), Wr();
  const i = (/* @__PURE__ */ ve(e))[t].apply(e, n);
  return Kr(), Mt(), i;
}
const Bl = /* @__PURE__ */ Vr("__proto__,__v_isRef,__isVue"), Ka = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(at)
);
function Zl(e) {
  at(e) || (e = String(e));
  const t = /* @__PURE__ */ ve(this);
  return Le(t, "has", e), t.hasOwnProperty(e);
}
class Ga {
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
      return i === (r ? s ? tc : Xa : s ? Ja : Qa).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const a = ie(t);
    if (!r) {
      let l;
      if (a && (l = Ul[n]))
        return l;
      if (n === "hasOwnProperty")
        return Zl;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ qe(t) ? t : i
    );
    if ((at(n) ? Ka.has(n) : Bl(n)) || (r || Le(t, "get", n), s))
      return o;
    if (/* @__PURE__ */ qe(o)) {
      const l = a && Zr(n) ? o : o.value;
      return r && _e(l) ? /* @__PURE__ */ gr(l) : l;
    }
    return _e(o) ? r ? /* @__PURE__ */ gr(o) : /* @__PURE__ */ xt(o) : o;
  }
}
class Ya extends Ga {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    const a = ie(t) && Zr(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Rt(s);
      if (!/* @__PURE__ */ Je(i) && !/* @__PURE__ */ Rt(i) && (s = /* @__PURE__ */ ve(s), i = /* @__PURE__ */ ve(i)), !a && /* @__PURE__ */ qe(s) && !/* @__PURE__ */ qe(i))
        return c || (s.value = i), !0;
    }
    const o = a ? Number(n) < t.length : ye(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ qe(t) ? t : r
    );
    return t === /* @__PURE__ */ ve(r) && (o ? yt(i, s) && It(t, "set", n, i) : It(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = ye(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && i && It(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!at(n) || !Ka.has(n)) && Le(t, "has", n), i;
  }
  ownKeys(t) {
    return Le(
      t,
      "iterate",
      ie(t) ? "length" : en
    ), Reflect.ownKeys(t);
  }
}
class Hl extends Ga {
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
const Wl = /* @__PURE__ */ new Ya(), Kl = /* @__PURE__ */ new Hl(), Gl = /* @__PURE__ */ new Ya(!0);
const mr = (e) => e, ai = (e) => Reflect.getPrototypeOf(e);
function Yl(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = /* @__PURE__ */ ve(r), a = pn(s), o = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = r[e](...i), u = n ? mr : t ? yn : ot;
    return !t && Le(
      s,
      "iterate",
      l ? hr : en
    ), Ie(
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
function oi(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ql(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ ve(s), o = /* @__PURE__ */ ve(r);
      e || (yt(r, o) && Le(a, "get", r), Le(a, "get", o));
      const { has: l } = ai(a), c = t ? mr : e ? yn : ot;
      if (l.call(a, r))
        return c(s.get(r));
      if (l.call(a, o))
        return c(s.get(o));
      s !== a && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Le(/* @__PURE__ */ ve(r), "iterate", en), r.size;
    },
    has(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ ve(s), o = /* @__PURE__ */ ve(r);
      return e || (yt(r, o) && Le(a, "has", r), Le(a, "has", o)), r === o ? s.has(r) : s.has(r) || s.has(o);
    },
    forEach(r, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ ve(o), c = t ? mr : e ? yn : ot;
      return !e && Le(l, "iterate", en), o.forEach((u, d) => r.call(s, c(u), c(d), a));
    }
  };
  return Ie(
    n,
    e ? {
      add: oi("add"),
      set: oi("set"),
      delete: oi("delete"),
      clear: oi("clear")
    } : {
      add(r) {
        const s = /* @__PURE__ */ ve(this), a = ai(s), o = /* @__PURE__ */ ve(r), l = !t && !/* @__PURE__ */ Je(r) && !/* @__PURE__ */ Rt(r) ? o : r;
        return a.has.call(s, l) || yt(r, l) && a.has.call(s, r) || yt(o, l) && a.has.call(s, o) || (s.add(l), It(s, "add", l, l)), this;
      },
      set(r, s) {
        !t && !/* @__PURE__ */ Je(s) && !/* @__PURE__ */ Rt(s) && (s = /* @__PURE__ */ ve(s));
        const a = /* @__PURE__ */ ve(this), { has: o, get: l } = ai(a);
        let c = o.call(a, r);
        c || (r = /* @__PURE__ */ ve(r), c = o.call(a, r));
        const u = l.call(a, r);
        return a.set(r, s), c ? yt(s, u) && It(a, "set", r, s) : It(a, "add", r, s), this;
      },
      delete(r) {
        const s = /* @__PURE__ */ ve(this), { has: a, get: o } = ai(s);
        let l = a.call(s, r);
        l || (r = /* @__PURE__ */ ve(r), l = a.call(s, r)), o && o.call(s, r);
        const c = s.delete(r);
        return l && It(s, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ ve(this), s = r.size !== 0, a = r.clear();
        return s && It(
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
    n[r] = Yl(r, e, t);
  }), n;
}
function Qr(e, t) {
  const n = Ql(e, t);
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    ye(n, r) && r in i ? n : i,
    r,
    s
  );
}
const Jl = {
  get: /* @__PURE__ */ Qr(!1, !1)
}, Xl = {
  get: /* @__PURE__ */ Qr(!1, !0)
}, ec = {
  get: /* @__PURE__ */ Qr(!0, !1)
};
const Qa = /* @__PURE__ */ new WeakMap(), Ja = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), tc = /* @__PURE__ */ new WeakMap();
function nc(e) {
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
function xt(e) {
  return /* @__PURE__ */ Rt(e) ? e : Jr(
    e,
    !1,
    Wl,
    Jl,
    Qa
  );
}
// @__NO_SIDE_EFFECTS__
function ic(e) {
  return Jr(
    e,
    !1,
    Gl,
    Xl,
    Ja
  );
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  return Jr(
    e,
    !0,
    Kl,
    ec,
    Xa
  );
}
function Jr(e, t, n, i, r) {
  if (!_e(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = nc(Al(e));
  if (a === 0)
    return e;
  const o = new Proxy(
    e,
    a === 2 ? i : n
  );
  return r.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
  return /* @__PURE__ */ Rt(e) ? /* @__PURE__ */ tn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ve(t) : e;
}
function rc(e) {
  return !ye(e, "__v_skip") && Object.isExtensible(e) && Fa(e, "__v_skip", !0), e;
}
const ot = (e) => _e(e) ? /* @__PURE__ */ xt(e) : e, yn = (e) => _e(e) ? /* @__PURE__ */ gr(e) : e;
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  return sc(e, !1);
}
function sc(e, t) {
  return /* @__PURE__ */ qe(e) ? e : new ac(e, t);
}
class ac {
  constructor(t, n) {
    this.dep = new Yr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ve(t), this._value = n ? t : ot(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ Rt(t);
    t = i ? t : /* @__PURE__ */ ve(t), yt(t, n) && (this._rawValue = t, this._value = i ? t : ot(t), this.dep.trigger());
  }
}
function E(e) {
  return /* @__PURE__ */ qe(e) ? e.value : e;
}
const oc = {
  get: (e, t, n) => t === "__v_raw" ? e : E(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return /* @__PURE__ */ qe(r) && !/* @__PURE__ */ qe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function eo(e) {
  return /* @__PURE__ */ tn(e) ? e : new Proxy(e, oc);
}
class lc {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Yr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Un - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Te !== this)
      return Ua(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Za(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function cc(e, t, n = !1) {
  let i, r;
  return re(e) ? i = e : (i = e.get, r = e.set), new lc(i, r, n);
}
const li = {}, fi = /* @__PURE__ */ new WeakMap();
let Qt;
function uc(e, t = !1, n = Qt) {
  if (n) {
    let i = fi.get(n);
    i || fi.set(n, i = []), i.push(e);
  }
}
function dc(e, t, n = Ce) {
  const { immediate: i, deep: r, once: s, scheduler: a, augmentJob: o, call: l } = n, c = (R) => r ? R : /* @__PURE__ */ Je(R) || r === !1 || r === 0 ? Bt(R, 1) : Bt(R);
  let u, d, f, m, v = !1, y = !1;
  if (/* @__PURE__ */ qe(e) ? (d = () => e.value, v = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ tn(e) ? (d = () => c(e), v = !0) : ie(e) ? (y = !0, v = e.some((R) => /* @__PURE__ */ tn(R) || /* @__PURE__ */ Je(R)), d = () => e.map((R) => {
    if (/* @__PURE__ */ qe(R))
      return R.value;
    if (/* @__PURE__ */ tn(R))
      return c(R);
    if (re(R))
      return l ? l(R, 2) : R();
  })) : re(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (f) {
      Pt();
      try {
        f();
      } finally {
        Mt();
      }
    }
    const R = Qt;
    Qt = u;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      Qt = R;
    }
  } : d = bt, t && r) {
    const R = d, O = r === !0 ? 1 / 0 : r;
    d = () => Bt(R(), O);
  }
  const _ = Dl(), N = () => {
    u.stop(), _ && _.active && Br(_.effects, u);
  };
  if (s && t) {
    const R = t;
    t = (...O) => {
      R(...O), N();
    };
  }
  let w = y ? new Array(e.length).fill(li) : li;
  const j = (R) => {
    if (!(!(u.flags & 1) || !u.dirty && !R))
      if (t) {
        const O = u.run();
        if (r || v || (y ? O.some((Q, W) => yt(Q, w[W])) : yt(O, w))) {
          f && f();
          const Q = Qt;
          Qt = u;
          try {
            const W = [
              O,
              // pass undefined as the old value when it's changed for the first time
              w === li ? void 0 : y && w[0] === li ? [] : w,
              m
            ];
            w = O, l ? l(t, 3, W) : (
              // @ts-expect-error
              t(...W)
            );
          } finally {
            Qt = Q;
          }
        }
      } else
        u.run();
  };
  return o && o(j), u = new za(d), u.scheduler = a ? () => a(j, !1) : j, m = (R) => uc(R, !1, u), f = u.onStop = () => {
    const R = fi.get(u);
    if (R) {
      if (l)
        l(R, 4);
      else
        for (const O of R) O();
      fi.delete(u);
    }
  }, t ? i ? j(!0) : w = u.run() : a ? a(j.bind(null, !0), !0) : u.run(), N.pause = u.pause.bind(u), N.resume = u.resume.bind(u), N.stop = N, N;
}
function Bt(e, t = 1 / 0, n) {
  if (t <= 0 || !_e(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ qe(e))
    Bt(e.value, t, n);
  else if (ie(e))
    for (let i = 0; i < e.length; i++)
      Bt(e[i], t, n);
  else if (Pa(e) || pn(e))
    e.forEach((i) => {
      Bt(i, t, n);
    });
  else if (Fi(e)) {
    for (const i in e)
      Bt(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Bt(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ti(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (r) {
    qi(r, t, n);
  }
}
function lt(e, t, n, i) {
  if (re(e)) {
    const r = ti(e, t, n, i);
    return r && Ma(r) && r.catch((s) => {
      qi(s, t, n);
    }), r;
  }
  if (ie(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(lt(e[s], t, n, i));
    return r;
  }
}
function qi(e, t, n, i = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Ce;
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
      Pt(), ti(s, null, 10, [
        e,
        l,
        c
      ]), Mt();
      return;
    }
  }
  fc(e, n, r, i, a);
}
function fc(e, t, n, i = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Be = [];
let mt = -1;
const hn = [];
let Ut = null, un = 0;
const to = /* @__PURE__ */ Promise.resolve();
let pi = null;
function Ui(e) {
  const t = pi || to;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pc(e) {
  let t = mt + 1, n = Be.length;
  for (; t < n; ) {
    const i = t + n >>> 1, r = Be[i], s = Bn(r);
    s < e || s === e && r.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function es(e) {
  if (!(e.flags & 1)) {
    const t = Bn(e), n = Be[Be.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Bn(n) ? Be.push(e) : Be.splice(pc(t), 0, e), e.flags |= 1, no();
  }
}
function no() {
  pi || (pi = to.then(ro));
}
function hc(e) {
  ie(e) ? hn.push(...e) : Ut && e.id === -1 ? Ut.splice(un + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1), no();
}
function Ms(e, t, n = mt + 1) {
  for (; n < Be.length; n++) {
    const i = Be[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Be.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function io(e) {
  if (hn.length) {
    const t = [...new Set(hn)].sort(
      (n, i) => Bn(n) - Bn(i)
    );
    if (hn.length = 0, Ut) {
      Ut.push(...t);
      return;
    }
    for (Ut = t, un = 0; un < Ut.length; un++) {
      const n = Ut[un];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ut = null, un = 0;
  }
}
const Bn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ro(e) {
  try {
    for (mt = 0; mt < Be.length; mt++) {
      const t = Be[mt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ti(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; mt < Be.length; mt++) {
      const t = Be[mt];
      t && (t.flags &= -2);
    }
    mt = -1, Be.length = 0, io(), pi = null, (Be.length || hn.length) && ro();
  }
}
let Ze = null, so = null;
function hi(e) {
  const t = Ze;
  return Ze = e, so = e && e.type.__scopeId || null, t;
}
function ao(e, t = Ze, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && Hs(-1);
    const s = hi(t);
    let a;
    try {
      a = e(...r);
    } finally {
      hi(s), i._d && Hs(1);
    }
    return a;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Gt(e, t, n, i) {
  const r = e.dirs, s = t && t.dirs;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[i];
    l && (Pt(), lt(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), Mt());
  }
}
function vr(e, t) {
  if (De) {
    let n = De.provides;
    const i = De.parent && De.parent.provides;
    i === n && (n = De.provides = Object.create(i)), n[e] = t;
  }
}
function Ht(e, t, n = !1) {
  const i = Fo();
  if (i || gn) {
    let r = gn ? gn._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && re(t) ? t.call(i && i.proxy) : t;
  }
}
const mc = /* @__PURE__ */ Symbol.for("v-scx"), gc = () => Ht(mc);
function _t(e, t, n) {
  return oo(e, t, n);
}
function oo(e, t, n = Ce) {
  const { immediate: i, deep: r, flush: s, once: a } = n, o = Ie({}, n), l = t && i || !t && s !== "post";
  let c;
  if (Hn) {
    if (s === "sync") {
      const m = gc();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = bt, m.resume = bt, m.pause = bt, m;
    }
  }
  const u = De;
  o.call = (m, v, y) => lt(m, u, v, y);
  let d = !1;
  s === "post" ? o.scheduler = (m) => {
    We(m, u && u.suspense);
  } : s !== "sync" && (d = !0, o.scheduler = (m, v) => {
    v ? m() : es(m);
  }), o.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const f = dc(e, t, o);
  return Hn && (c ? c.push(f) : l && f()), f;
}
function vc(e, t, n) {
  const i = this.proxy, r = Ae(e) ? e.includes(".") ? lo(i, e) : () => i[e] : e.bind(i, i);
  let s;
  re(t) ? s = t : (s = t.handler, n = t);
  const a = ni(this), o = oo(r, s.bind(i), n);
  return a(), o;
}
function lo(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
const yc = /* @__PURE__ */ Symbol("_vte"), bc = (e) => e.__isTeleport, nr = /* @__PURE__ */ Symbol("_leaveCb");
function ts(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ts(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function $e(e, t) {
  return re(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function co(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Rs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const mi = /* @__PURE__ */ new WeakMap();
function Dn(e, t, n, i, r = !1) {
  if (ie(e)) {
    e.forEach(
      (y, _) => Dn(
        y,
        t && (ie(t) ? t[_] : t),
        n,
        i,
        r
      )
    );
    return;
  }
  if (mn(i) && !r) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Dn(e, t, n, i.component.subTree);
    return;
  }
  const s = i.shapeFlag & 4 ? ls(i.component) : i.el, a = r ? null : s, { i: o, r: l } = e, c = t && t.r, u = o.refs === Ce ? o.refs = {} : o.refs, d = o.setupState, f = /* @__PURE__ */ ve(d), m = d === Ce ? Oa : (y) => Rs(u, y) ? !1 : ye(f, y), v = (y, _) => !(_ && Rs(u, _));
  if (c != null && c !== l) {
    if (Fs(t), Ae(c))
      u[c] = null, m(c) && (d[c] = null);
    else if (/* @__PURE__ */ qe(c)) {
      const y = t;
      v(c, y.k) && (c.value = null), y.k && (u[y.k] = null);
    }
  }
  if (re(l))
    ti(l, o, 12, [a, u]);
  else {
    const y = Ae(l), _ = /* @__PURE__ */ qe(l);
    if (y || _) {
      const N = () => {
        if (e.f) {
          const w = y ? m(l) ? d[l] : u[l] : v() || !e.k ? l.value : u[e.k];
          if (r)
            ie(w) && Br(w, s);
          else if (ie(w))
            w.includes(s) || w.push(s);
          else if (y)
            u[l] = [s], m(l) && (d[l] = u[l]);
          else {
            const j = [s];
            v(l, e.k) && (l.value = j), e.k && (u[e.k] = j);
          }
        } else y ? (u[l] = a, m(l) && (d[l] = a)) : _ && (v(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const w = () => {
          N(), mi.delete(e);
        };
        w.id = -1, mi.set(e, w), We(w, n);
      } else
        Fs(e), N();
    }
  }
}
function Fs(e) {
  const t = mi.get(e);
  t && (t.flags |= 8, mi.delete(e));
}
Di().requestIdleCallback;
Di().cancelIdleCallback;
const mn = (e) => !!e.type.__asyncLoader, uo = (e) => e.type.__isKeepAlive;
function xc(e, t) {
  fo(e, "a", t);
}
function _c(e, t) {
  fo(e, "da", t);
}
function fo(e, t, n = De) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Vi(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      uo(r.parent.vnode) && wc(i, t, n, r), r = r.parent;
  }
}
function wc(e, t, n, i) {
  const r = Vi(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  ho(() => {
    Br(i[t], r);
  }, n);
}
function Vi(e, t, n = De, i = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      Pt();
      const o = ni(n), l = lt(t, n, e, a);
      return o(), Mt(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const Lt = (e) => (t, n = De) => {
  (!Hn || e === "sp") && Vi(e, (...i) => t(...i), n);
}, kc = Lt("bm"), ns = Lt("m"), Sc = Lt(
  "bu"
), Tc = Lt("u"), po = Lt(
  "bum"
), ho = Lt("um"), Cc = Lt(
  "sp"
), Ac = Lt("rtg"), $c = Lt("rtc");
function Ic(e, t = De) {
  Vi("ec", e, t);
}
const Nc = "components", mo = /* @__PURE__ */ Symbol.for("v-ndc");
function Ec(e) {
  return Ae(e) ? Oc(Nc, e, !1) || e : e || mo;
}
function Oc(e, t, n = !0, i = !1) {
  const r = Ze || De;
  if (r) {
    const s = r.type;
    {
      const o = vu(
        s,
        !1
      );
      if (o && (o === t || o === Re(t) || o === Li(Re(t))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      js(r[e] || s[e], t) || // global registration
      js(r.appContext[e], t)
    );
    return !a && i ? s : a;
  }
}
function js(e, t) {
  return e && (e[t] || e[Re(t)] || e[Li(Re(t))]);
}
function Me(e, t, n, i) {
  let r;
  const s = n, a = ie(e);
  if (a || Ae(e)) {
    const o = a && /* @__PURE__ */ tn(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ Je(e), c = /* @__PURE__ */ Rt(e), e = zi(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        l ? c ? yn(ot(e[u])) : ot(e[u]) : e[u],
        u,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, s);
  } else if (_e(e))
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
function Pc(e, t, n = {}, i, r) {
  if (Ze.ce || Ze.parent && mn(Ze.parent) && Ze.parent.ce) {
    const c = Object.keys(n).length > 0;
    return b(), Pe(
      le,
      null,
      [Xe("slot", n, i)],
      c ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), b();
  const a = s && go(s(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = Pe(
    le,
    {
      key: (o && !at(o) ? o : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && i ? "_fb" : "")
    },
    a || [],
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function go(e) {
  return e.some((t) => ss(t) ? !(t.type === Ft || t.type === le && !go(t.children)) : !0) ? e : null;
}
const yr = (e) => e ? jo(e) ? ls(e) : yr(e.parent) : null, zn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ie(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => yo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      es(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ui.bind(e.proxy)),
    $watch: (e) => vc.bind(e)
  })
), ir = (e, t) => e !== Ce && !e.__isScriptSetup && ye(e, t), Mc = {
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
        if (r !== Ce && ye(r, t))
          return a[t] = 2, r[t];
        if (ye(s, t))
          return a[t] = 3, s[t];
        if (n !== Ce && ye(n, t))
          return a[t] = 4, n[t];
        br && (a[t] = 0);
      }
    }
    const c = zn[t];
    let u, d;
    if (c)
      return t === "$attrs" && Le(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ce && ye(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, ye(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: r, ctx: s } = e;
    return ir(r, t) ? (r[t] = n, !0) : i !== Ce && ye(i, t) ? (i[t] = n, !0) : ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, props: s, type: a }
  }, o) {
    let l;
    return !!(n[o] || e !== Ce && o[0] !== "$" && ye(e, o) || ir(t, o) || ye(s, o) || ye(i, o) || ye(zn, o) || ye(r.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ls(e) {
  return ie(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let br = !0;
function Rc(e) {
  const t = yo(e), n = e.proxy, i = e.ctx;
  br = !1, t.beforeCreate && Ds(t.beforeCreate, e, "bc");
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
    updated: v,
    activated: y,
    deactivated: _,
    beforeDestroy: N,
    beforeUnmount: w,
    destroyed: j,
    unmounted: R,
    render: O,
    renderTracked: Q,
    renderTriggered: W,
    errorCaptured: H,
    serverPrefetch: fe,
    // public API
    expose: Se,
    inheritAttrs: C,
    // assets
    components: g,
    directives: q,
    filters: X
  } = t;
  if (c && Fc(c, i, null), a)
    for (const se in a) {
      const he = a[se];
      re(he) && (i[se] = he.bind(n));
    }
  if (r) {
    const se = r.call(n, n);
    _e(se) && (e.data = /* @__PURE__ */ xt(se));
  }
  if (br = !0, s)
    for (const se in s) {
      const he = s[se], nt = re(he) ? he.bind(n, n) : re(he.get) ? he.get.bind(n, n) : bt, qt = !re(he) && re(he.set) ? he.set.bind(n) : bt, St = G({
        get: nt,
        set: qt
      });
      Object.defineProperty(i, se, {
        enumerable: !0,
        configurable: !0,
        get: () => St.value,
        set: (ut) => St.value = ut
      });
    }
  if (o)
    for (const se in o)
      vo(o[se], i, n, se);
  if (l) {
    const se = re(l) ? l.call(n) : l;
    Reflect.ownKeys(se).forEach((he) => {
      vr(he, se[he]);
    });
  }
  u && Ds(u, e, "c");
  function ue(se, he) {
    ie(he) ? he.forEach((nt) => se(nt.bind(n))) : he && se(he.bind(n));
  }
  if (ue(kc, d), ue(ns, f), ue(Sc, m), ue(Tc, v), ue(xc, y), ue(_c, _), ue(Ic, H), ue($c, Q), ue(Ac, W), ue(po, w), ue(ho, R), ue(Cc, fe), ie(Se))
    if (Se.length) {
      const se = e.exposed || (e.exposed = {});
      Se.forEach((he) => {
        Object.defineProperty(se, he, {
          get: () => n[he],
          set: (nt) => n[he] = nt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === bt && (e.render = O), C != null && (e.inheritAttrs = C), g && (e.components = g), q && (e.directives = q), fe && co(e);
}
function Fc(e, t, n = bt) {
  ie(e) && (e = xr(e));
  for (const i in e) {
    const r = e[i];
    let s;
    _e(r) ? "default" in r ? s = Ht(
      r.from || i,
      r.default,
      !0
    ) : s = Ht(r.from || i) : s = Ht(r), /* @__PURE__ */ qe(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[i] = s;
  }
}
function Ds(e, t, n) {
  lt(
    ie(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function vo(e, t, n, i) {
  let r = i.includes(".") ? lo(n, i) : () => n[i];
  if (Ae(e)) {
    const s = t[e];
    re(s) && _t(r, s);
  } else if (re(e))
    _t(r, e.bind(n));
  else if (_e(e))
    if (ie(e))
      e.forEach((s) => vo(s, t, n, i));
    else {
      const s = re(e.handler) ? e.handler.bind(n) : t[e.handler];
      re(s) && _t(r, s, e);
    }
}
function yo(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, o = s.get(t);
  let l;
  return o ? l = o : !r.length && !n && !i ? l = t : (l = {}, r.length && r.forEach(
    (c) => gi(l, c, a, !0)
  ), gi(l, t, a)), _e(t) && s.set(t, l), l;
}
function gi(e, t, n, i = !1) {
  const { mixins: r, extends: s } = t;
  s && gi(e, s, n, !0), r && r.forEach(
    (a) => gi(e, a, n, !0)
  );
  for (const a in t)
    if (!(i && a === "expose")) {
      const o = jc[a] || n && n[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const jc = {
  data: zs,
  props: qs,
  emits: qs,
  // objects
  methods: En,
  computed: En,
  // lifecycle
  beforeCreate: Ue,
  created: Ue,
  beforeMount: Ue,
  mounted: Ue,
  beforeUpdate: Ue,
  updated: Ue,
  beforeDestroy: Ue,
  beforeUnmount: Ue,
  destroyed: Ue,
  unmounted: Ue,
  activated: Ue,
  deactivated: Ue,
  errorCaptured: Ue,
  serverPrefetch: Ue,
  // assets
  components: En,
  directives: En,
  // watch
  watch: Dc,
  // provide / inject
  provide: zs,
  inject: Lc
};
function zs(e, t) {
  return t ? e ? function() {
    return Ie(
      re(e) ? e.call(this, this) : e,
      re(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Lc(e, t) {
  return En(xr(e), xr(t));
}
function xr(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function En(e, t) {
  return e ? Ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qs(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ie(
    /* @__PURE__ */ Object.create(null),
    Ls(e),
    Ls(t ?? {})
  ) : t;
}
function Dc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ie(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Ue(e[i], t[i]);
  return n;
}
function bo() {
  return {
    app: null,
    config: {
      isNativeTag: Oa,
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
let zc = 0;
function qc(e, t) {
  return function(i, r = null) {
    re(i) || (i = Ie({}, i)), r != null && !_e(r) && (r = null);
    const s = bo(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = s.app = {
      _uid: zc++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: bu,
      get config() {
        return s.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return a.has(u) || (u && re(u.install) ? (a.add(u), u.install(c, ...d)) : re(u) && (a.add(u), u(c, ...d))), c;
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
          return m.appContext = s, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, u, f), l = !0, c._container = u, u.__vue_app__ = c, ls(m.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (lt(
          o,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return s.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = gn;
        gn = c;
        try {
          return u();
        } finally {
          gn = d;
        }
      }
    };
    return c;
  };
}
let gn = null;
const Uc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Re(t)}Modifiers`] || e[`${Ye(t)}Modifiers`];
function Vc(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ce;
  let r = n;
  const s = t.startsWith("update:"), a = s && Uc(i, t.slice(7));
  a && (a.trim && (r = n.map((u) => Ae(u) ? u.trim() : u)), a.number && (r = n.map(Nl)));
  let o, l = i[o = Yi(t)] || // also try camelCase event handler (#2249)
  i[o = Yi(Re(t))];
  !l && s && (l = i[o = Yi(Ye(t))]), l && lt(
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
    e.emitted[o] = !0, lt(
      c,
      e,
      6,
      r
    );
  }
}
const Bc = /* @__PURE__ */ new WeakMap();
function xo(e, t, n = !1) {
  const i = n ? Bc : t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let a = {}, o = !1;
  if (!re(e)) {
    const l = (c) => {
      const u = xo(c, t, !0);
      u && (o = !0, Ie(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !o ? (_e(e) && i.set(e, null), null) : (ie(s) ? s.forEach((l) => a[l] = null) : Ie(a, s), _e(e) && i.set(e, a), a);
}
function Bi(e, t) {
  return !e || !Mi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ye(e, t[0].toLowerCase() + t.slice(1)) || ye(e, Ye(t)) || ye(e, t));
}
function Us(e) {
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
    ctx: v,
    inheritAttrs: y
  } = e, _ = hi(e);
  let N, w;
  try {
    if (n.shapeFlag & 4) {
      const R = r || i, O = R;
      N = vt(
        c.call(
          O,
          R,
          u,
          d,
          m,
          f,
          v
        )
      ), w = o;
    } else {
      const R = t;
      N = vt(
        R.length > 1 ? R(
          d,
          { attrs: o, slots: a, emit: l }
        ) : R(
          d,
          null
        )
      ), w = t.props ? o : Zc(o);
    }
  } catch (R) {
    qn.length = 0, qi(R, e, 1), N = Xe(Ft);
  }
  let j = N;
  if (w && y !== !1) {
    const R = Object.keys(w), { shapeFlag: O } = j;
    R.length && O & 7 && (s && R.some(Ri) && (w = Hc(
      w,
      s
    )), j = bn(j, w, !1, !0));
  }
  return n.dirs && (j = bn(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition && ts(j, n.transition), N = j, hi(_), N;
}
const Zc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Mi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Hc = (e, t) => {
  const n = {};
  for (const i in e)
    (!Ri(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Wc(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: a, children: o, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Vs(i, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (_o(a, i, f) && !Bi(c, f))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : i === a ? !1 : i ? a ? Vs(i, a, c) : !0 : !!a;
  return !1;
}
function Vs(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (_o(t, e, s) && !Bi(n, s))
      return !0;
  }
  return !1;
}
function _o(e, t, n) {
  const i = e[n], r = t[n];
  return n === "style" && _e(i) && _e(r) ? !Hr(i, r) : i !== r;
}
function Kc({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = i, e = r), r === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const wo = {}, ko = () => Object.create(wo), So = (e) => Object.getPrototypeOf(e) === wo;
function Gc(e, t, n, i = !1) {
  const r = {}, s = ko();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), To(e, t, r, s);
  for (const a in e.propsOptions[0])
    a in r || (r[a] = void 0);
  n ? e.props = i ? r : /* @__PURE__ */ ic(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Yc(e, t, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, o = /* @__PURE__ */ ve(r), [l] = e.propsOptions;
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
        if (Bi(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (ye(s, f))
            m !== s[f] && (s[f] = m, c = !0);
          else {
            const v = Re(f);
            r[v] = _r(
              l,
              o,
              v,
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
    To(e, t, r, s) && (c = !0);
    let u;
    for (const d in o)
      (!t || // for camelCase
      !ye(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ye(d)) === d || !ye(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = _r(
        l,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (s !== o)
      for (const d in s)
        (!t || !ye(t, d)) && (delete s[d], c = !0);
  }
  c && It(e.attrs, "set", "");
}
function To(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let a = !1, o;
  if (t)
    for (let l in t) {
      if (Fn(l))
        continue;
      const c = t[l];
      let u;
      r && ye(r, u = Re(l)) ? !s || !s.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : Bi(e.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ ve(n), c = o || Ce;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = _r(
        r,
        l,
        d,
        c[d],
        e,
        !ye(c, d)
      );
    }
  }
  return a;
}
function _r(e, t, n, i, r, s) {
  const a = e[n];
  if (a != null) {
    const o = ye(a, "default");
    if (o && i === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && re(l)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const u = ni(r);
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
    ] && (i === "" || i === Ye(n)) && (i = !0));
  }
  return i;
}
const Qc = /* @__PURE__ */ new WeakMap();
function Co(e, t, n = !1) {
  const i = n ? Qc : t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, a = {}, o = [];
  let l = !1;
  if (!re(e)) {
    const u = (d) => {
      l = !0;
      const [f, m] = Co(d, t, !0);
      Ie(a, f), m && o.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return _e(e) && i.set(e, fn), fn;
  if (ie(s))
    for (let u = 0; u < s.length; u++) {
      const d = Re(s[u]);
      Bs(d) && (a[d] = Ce);
    }
  else if (s)
    for (const u in s) {
      const d = Re(u);
      if (Bs(d)) {
        const f = s[u], m = a[d] = ie(f) || re(f) ? { type: f } : Ie({}, f), v = m.type;
        let y = !1, _ = !0;
        if (ie(v))
          for (let N = 0; N < v.length; ++N) {
            const w = v[N], j = re(w) && w.name;
            if (j === "Boolean") {
              y = !0;
              break;
            } else j === "String" && (_ = !1);
          }
        else
          y = re(v) && v.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = y, m[
          1
          /* shouldCastTrue */
        ] = _, (y || ye(m, "default")) && o.push(d);
      }
    }
  const c = [a, o];
  return _e(e) && i.set(e, c), c;
}
function Bs(e) {
  return e[0] !== "$" && !Fn(e);
}
const is = (e) => e === "_" || e === "_ctx" || e === "$stable", rs = (e) => ie(e) ? e.map(vt) : [vt(e)], Jc = (e, t, n) => {
  if (t._n)
    return t;
  const i = ao((...r) => rs(t(...r)), n);
  return i._c = !1, i;
}, Ao = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if (is(r)) continue;
    const s = e[r];
    if (re(s))
      t[r] = Jc(r, s, i);
    else if (s != null) {
      const a = rs(s);
      t[r] = () => a;
    }
  }
}, $o = (e, t) => {
  const n = rs(t);
  e.slots.default = () => n;
}, Io = (e, t, n) => {
  for (const i in t)
    (n || !is(i)) && (e[i] = t[i]);
}, Xc = (e, t, n) => {
  const i = e.slots = ko();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Io(i, t, n), n && Fa(i, "_", r, !0)) : Ao(t, i);
  } else t && $o(e, t);
}, eu = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, a = Ce;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? s = !1 : Io(r, t, n) : (s = !t.$stable, Ao(t, r)), a = t;
  } else t && ($o(e, t), a = { default: 1 });
  if (s)
    for (const o in r)
      !is(o) && a[o] == null && delete r[o];
}, We = su;
function tu(e) {
  return nu(e);
}
function nu(e, t) {
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
    setScopeId: m = bt,
    insertStaticContent: v
  } = e, y = (p, h, x, $ = null, T = null, S = null, D = void 0, F = null, M = !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !An(p, h) && ($ = si(p), ut(p, T, S, !0), p = null), h.patchFlag === -2 && (M = !1, h.dynamicChildren = null);
    const { type: A, ref: J, shapeFlag: U } = h;
    switch (A) {
      case Zi:
        _(p, h, x, $);
        break;
      case Ft:
        N(p, h, x, $);
        break;
      case sr:
        p == null && w(h, x, $, D);
        break;
      case le:
        g(
          p,
          h,
          x,
          $,
          T,
          S,
          D,
          F,
          M
        );
        break;
      default:
        U & 1 ? O(
          p,
          h,
          x,
          $,
          T,
          S,
          D,
          F,
          M
        ) : U & 6 ? q(
          p,
          h,
          x,
          $,
          T,
          S,
          D,
          F,
          M
        ) : (U & 64 || U & 128) && A.process(
          p,
          h,
          x,
          $,
          T,
          S,
          D,
          F,
          M,
          Sn
        );
    }
    J != null && T ? Dn(J, p && p.ref, S, h || p, !h) : J == null && p && p.ref != null && Dn(p.ref, null, S, p, !0);
  }, _ = (p, h, x, $) => {
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
  }, N = (p, h, x, $) => {
    p == null ? i(
      h.el = l(h.children || ""),
      x,
      $
    ) : h.el = p.el;
  }, w = (p, h, x, $) => {
    [p.el, p.anchor] = v(
      p.children,
      h,
      x,
      $,
      p.el,
      p.anchor
    );
  }, j = ({ el: p, anchor: h }, x, $) => {
    let T;
    for (; p && p !== h; )
      T = f(p), i(p, x, $), p = T;
    i(h, x, $);
  }, R = ({ el: p, anchor: h }) => {
    let x;
    for (; p && p !== h; )
      x = f(p), r(p), p = x;
    r(h);
  }, O = (p, h, x, $, T, S, D, F, M) => {
    if (h.type === "svg" ? D = "svg" : h.type === "math" && (D = "mathml"), p == null)
      Q(
        h,
        x,
        $,
        T,
        S,
        D,
        F,
        M
      );
    else {
      const A = p.el && p.el._isVueCE ? p.el : null;
      try {
        A && A._beginPatch(), fe(
          p,
          h,
          T,
          S,
          D,
          F,
          M
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, Q = (p, h, x, $, T, S, D, F) => {
    let M, A;
    const { props: J, shapeFlag: U, transition: Y, dirs: ne } = p;
    if (M = p.el = a(
      p.type,
      S,
      J && J.is,
      J
    ), U & 8 ? u(M, p.children) : U & 16 && H(
      p.children,
      M,
      null,
      $,
      T,
      rr(p, S),
      D,
      F
    ), ne && Gt(p, null, $, "created"), W(M, p, p.scopeId, D, $), J) {
      for (const ke in J)
        ke !== "value" && !Fn(ke) && s(M, ke, null, J[ke], S, $);
      "value" in J && s(M, "value", null, J.value, S), (A = J.onVnodeBeforeMount) && ht(A, $, p);
    }
    ne && Gt(p, null, $, "beforeMount");
    const me = iu(T, Y);
    me && Y.beforeEnter(M), i(M, h, x), ((A = J && J.onVnodeMounted) || me || ne) && We(() => {
      try {
        A && ht(A, $, p), me && Y.enter(M), ne && Gt(p, null, $, "mounted");
      } finally {
      }
    }, T);
  }, W = (p, h, x, $, T) => {
    if (x && m(p, x), $)
      for (let S = 0; S < $.length; S++)
        m(p, $[S]);
    if (T) {
      let S = T.subTree;
      if (h === S || Po(S.type) && (S.ssContent === h || S.ssFallback === h)) {
        const D = T.vnode;
        W(
          p,
          D,
          D.scopeId,
          D.slotScopeIds,
          T.parent
        );
      }
    }
  }, H = (p, h, x, $, T, S, D, F, M = 0) => {
    for (let A = M; A < p.length; A++) {
      const J = p[A] = F ? $t(p[A]) : vt(p[A]);
      y(
        null,
        J,
        h,
        x,
        $,
        T,
        S,
        D,
        F
      );
    }
  }, fe = (p, h, x, $, T, S, D) => {
    const F = h.el = p.el;
    let { patchFlag: M, dynamicChildren: A, dirs: J } = h;
    M |= p.patchFlag & 16;
    const U = p.props || Ce, Y = h.props || Ce;
    let ne;
    if (x && Yt(x, !1), (ne = Y.onVnodeBeforeUpdate) && ht(ne, x, h, p), J && Gt(h, p, x, "beforeUpdate"), x && Yt(x, !0), (U.innerHTML && Y.innerHTML == null || U.textContent && Y.textContent == null) && u(F, ""), A ? Se(
      p.dynamicChildren,
      A,
      F,
      x,
      $,
      rr(h, T),
      S
    ) : D || he(
      p,
      h,
      F,
      null,
      x,
      $,
      rr(h, T),
      S,
      !1
    ), M > 0) {
      if (M & 16)
        C(F, U, Y, x, T);
      else if (M & 2 && U.class !== Y.class && s(F, "class", null, Y.class, T), M & 4 && s(F, "style", U.style, Y.style, T), M & 8) {
        const me = h.dynamicProps;
        for (let ke = 0; ke < me.length; ke++) {
          const xe = me[ke], Ne = U[xe], Fe = Y[xe];
          (Fe !== Ne || xe === "value") && s(F, xe, Ne, Fe, T, x);
        }
      }
      M & 1 && p.children !== h.children && u(F, h.children);
    } else !D && A == null && C(F, U, Y, x, T);
    ((ne = Y.onVnodeUpdated) || J) && We(() => {
      ne && ht(ne, x, h, p), J && Gt(h, p, x, "updated");
    }, $);
  }, Se = (p, h, x, $, T, S, D) => {
    for (let F = 0; F < h.length; F++) {
      const M = p[F], A = h[F], J = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !An(M, A) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? d(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      y(
        M,
        A,
        J,
        null,
        $,
        T,
        S,
        D,
        !0
      );
    }
  }, C = (p, h, x, $, T) => {
    if (h !== x) {
      if (h !== Ce)
        for (const S in h)
          !Fn(S) && !(S in x) && s(
            p,
            S,
            h[S],
            null,
            T,
            $
          );
      for (const S in x) {
        if (Fn(S)) continue;
        const D = x[S], F = h[S];
        D !== F && S !== "value" && s(p, S, F, D, T, $);
      }
      "value" in x && s(p, "value", h.value, x.value, T);
    }
  }, g = (p, h, x, $, T, S, D, F, M) => {
    const A = h.el = p ? p.el : o(""), J = h.anchor = p ? p.anchor : o("");
    let { patchFlag: U, dynamicChildren: Y, slotScopeIds: ne } = h;
    ne && (F = F ? F.concat(ne) : ne), p == null ? (i(A, x, $), i(J, x, $), H(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      x,
      J,
      T,
      S,
      D,
      F,
      M
    )) : U > 0 && U & 64 && Y && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === Y.length ? (Se(
      p.dynamicChildren,
      Y,
      x,
      T,
      S,
      D,
      F
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || T && h === T.subTree) && No(
      p,
      h,
      !0
      /* shallow */
    )) : he(
      p,
      h,
      x,
      J,
      T,
      S,
      D,
      F,
      M
    );
  }, q = (p, h, x, $, T, S, D, F, M) => {
    h.slotScopeIds = F, p == null ? h.shapeFlag & 512 ? T.ctx.activate(
      h,
      x,
      $,
      D,
      M
    ) : X(
      h,
      x,
      $,
      T,
      S,
      D,
      M
    ) : pe(p, h, M);
  }, X = (p, h, x, $, T, S, D) => {
    const F = p.component = fu(
      p,
      $,
      T
    );
    if (uo(p) && (F.ctx.renderer = Sn), pu(F, !1, D), F.asyncDep) {
      if (T && T.registerDep(F, ue, D), !p.el) {
        const M = F.subTree = Xe(Ft);
        N(null, M, h, x), p.placeholder = M.el;
      }
    } else
      ue(
        F,
        p,
        h,
        x,
        T,
        S,
        D
      );
  }, pe = (p, h, x) => {
    const $ = h.component = p.component;
    if (Wc(p, h, x))
      if ($.asyncDep && !$.asyncResolved) {
        se($, h, x);
        return;
      } else
        $.next = h, $.update();
    else
      h.el = p.el, $.vnode = h;
  }, ue = (p, h, x, $, T, S, D) => {
    const F = () => {
      if (p.isMounted) {
        let { next: U, bu: Y, u: ne, parent: me, vnode: ke } = p;
        {
          const ft = Eo(p);
          if (ft) {
            U && (U.el = ke.el, se(p, U, D)), ft.asyncDep.then(() => {
              We(() => {
                p.isUnmounted || A();
              }, T);
            });
            return;
          }
        }
        let xe = U, Ne;
        Yt(p, !1), U ? (U.el = ke.el, se(p, U, D)) : U = ke, Y && Qi(Y), (Ne = U.props && U.props.onVnodeBeforeUpdate) && ht(Ne, me, U, ke), Yt(p, !0);
        const Fe = Us(p), dt = p.subTree;
        p.subTree = Fe, y(
          dt,
          Fe,
          // parent may have changed if it's in a teleport
          d(dt.el),
          // anchor may have changed if it's in a fragment
          si(dt),
          p,
          T,
          S
        ), U.el = Fe.el, xe === null && Kc(p, Fe.el), ne && We(ne, T), (Ne = U.props && U.props.onVnodeUpdated) && We(
          () => ht(Ne, me, U, ke),
          T
        );
      } else {
        let U;
        const { el: Y, props: ne } = h, { bm: me, m: ke, parent: xe, root: Ne, type: Fe } = p, dt = mn(h);
        Yt(p, !1), me && Qi(me), !dt && (U = ne && ne.onVnodeBeforeMount) && ht(U, xe, h), Yt(p, !0);
        {
          Ne.ce && Ne.ce._hasShadowRoot() && Ne.ce._injectChildStyle(
            Fe,
            p.parent ? p.parent.type : void 0
          );
          const ft = p.subTree = Us(p);
          y(
            null,
            ft,
            x,
            $,
            p,
            T,
            S
          ), h.el = ft.el;
        }
        if (ke && We(ke, T), !dt && (U = ne && ne.onVnodeMounted)) {
          const ft = h;
          We(
            () => ht(U, xe, ft),
            T
          );
        }
        (h.shapeFlag & 256 || xe && mn(xe.vnode) && xe.vnode.shapeFlag & 256) && p.a && We(p.a, T), p.isMounted = !0, h = x = $ = null;
      }
    };
    p.scope.on();
    const M = p.effect = new za(F);
    p.scope.off();
    const A = p.update = M.run.bind(M), J = p.job = M.runIfDirty.bind(M);
    J.i = p, J.id = p.uid, M.scheduler = () => es(J), Yt(p, !0), A();
  }, se = (p, h, x) => {
    h.component = p;
    const $ = p.vnode.props;
    p.vnode = h, p.next = null, Yc(p, h.props, $, x), eu(p, h.children, x), Pt(), Ms(p), Mt();
  }, he = (p, h, x, $, T, S, D, F, M = !1) => {
    const A = p && p.children, J = p ? p.shapeFlag : 0, U = h.children, { patchFlag: Y, shapeFlag: ne } = h;
    if (Y > 0) {
      if (Y & 128) {
        qt(
          A,
          U,
          x,
          $,
          T,
          S,
          D,
          F,
          M
        );
        return;
      } else if (Y & 256) {
        nt(
          A,
          U,
          x,
          $,
          T,
          S,
          D,
          F,
          M
        );
        return;
      }
    }
    ne & 8 ? (J & 16 && kn(A, T, S), U !== A && u(x, U)) : J & 16 ? ne & 16 ? qt(
      A,
      U,
      x,
      $,
      T,
      S,
      D,
      F,
      M
    ) : kn(A, T, S, !0) : (J & 8 && u(x, ""), ne & 16 && H(
      U,
      x,
      $,
      T,
      S,
      D,
      F,
      M
    ));
  }, nt = (p, h, x, $, T, S, D, F, M) => {
    p = p || fn, h = h || fn;
    const A = p.length, J = h.length, U = Math.min(A, J);
    let Y;
    for (Y = 0; Y < U; Y++) {
      const ne = h[Y] = M ? $t(h[Y]) : vt(h[Y]);
      y(
        p[Y],
        ne,
        x,
        null,
        T,
        S,
        D,
        F,
        M
      );
    }
    A > J ? kn(
      p,
      T,
      S,
      !0,
      !1,
      U
    ) : H(
      h,
      x,
      $,
      T,
      S,
      D,
      F,
      M,
      U
    );
  }, qt = (p, h, x, $, T, S, D, F, M) => {
    let A = 0;
    const J = h.length;
    let U = p.length - 1, Y = J - 1;
    for (; A <= U && A <= Y; ) {
      const ne = p[A], me = h[A] = M ? $t(h[A]) : vt(h[A]);
      if (An(ne, me))
        y(
          ne,
          me,
          x,
          null,
          T,
          S,
          D,
          F,
          M
        );
      else
        break;
      A++;
    }
    for (; A <= U && A <= Y; ) {
      const ne = p[U], me = h[Y] = M ? $t(h[Y]) : vt(h[Y]);
      if (An(ne, me))
        y(
          ne,
          me,
          x,
          null,
          T,
          S,
          D,
          F,
          M
        );
      else
        break;
      U--, Y--;
    }
    if (A > U) {
      if (A <= Y) {
        const ne = Y + 1, me = ne < J ? h[ne].el : $;
        for (; A <= Y; )
          y(
            null,
            h[A] = M ? $t(h[A]) : vt(h[A]),
            x,
            me,
            T,
            S,
            D,
            F,
            M
          ), A++;
      }
    } else if (A > Y)
      for (; A <= U; )
        ut(p[A], T, S, !0), A++;
    else {
      const ne = A, me = A, ke = /* @__PURE__ */ new Map();
      for (A = me; A <= Y; A++) {
        const Ge = h[A] = M ? $t(h[A]) : vt(h[A]);
        Ge.key != null && ke.set(Ge.key, A);
      }
      let xe, Ne = 0;
      const Fe = Y - me + 1;
      let dt = !1, ft = 0;
      const Tn = new Array(Fe);
      for (A = 0; A < Fe; A++) Tn[A] = 0;
      for (A = ne; A <= U; A++) {
        const Ge = p[A];
        if (Ne >= Fe) {
          ut(Ge, T, S, !0);
          continue;
        }
        let pt;
        if (Ge.key != null)
          pt = ke.get(Ge.key);
        else
          for (xe = me; xe <= Y; xe++)
            if (Tn[xe - me] === 0 && An(Ge, h[xe])) {
              pt = xe;
              break;
            }
        pt === void 0 ? ut(Ge, T, S, !0) : (Tn[pt - me] = A + 1, pt >= ft ? ft = pt : dt = !0, y(
          Ge,
          h[pt],
          x,
          null,
          T,
          S,
          D,
          F,
          M
        ), Ne++);
      }
      const Cs = dt ? ru(Tn) : fn;
      for (xe = Cs.length - 1, A = Fe - 1; A >= 0; A--) {
        const Ge = me + A, pt = h[Ge], As = h[Ge + 1], $s = Ge + 1 < J ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          As.el || Oo(As)
        ) : $;
        Tn[A] === 0 ? y(
          null,
          pt,
          x,
          $s,
          T,
          S,
          D,
          F,
          M
        ) : dt && (xe < 0 || A !== Cs[xe] ? St(pt, x, $s, 2) : xe--);
      }
    }
  }, St = (p, h, x, $, T = null) => {
    const { el: S, type: D, transition: F, children: M, shapeFlag: A } = p;
    if (A & 6) {
      St(p.component.subTree, h, x, $);
      return;
    }
    if (A & 128) {
      p.suspense.move(h, x, $);
      return;
    }
    if (A & 64) {
      D.move(p, h, x, Sn);
      return;
    }
    if (D === le) {
      i(S, h, x);
      for (let U = 0; U < M.length; U++)
        St(M[U], h, x, $);
      i(p.anchor, h, x);
      return;
    }
    if (D === sr) {
      j(p, h, x);
      return;
    }
    if ($ !== 2 && A & 1 && F)
      if ($ === 0)
        F.persisted && !S[nr] ? i(S, h, x) : (F.beforeEnter(S), i(S, h, x), We(() => F.enter(S), T));
      else {
        const { leave: U, delayLeave: Y, afterLeave: ne } = F, me = () => {
          p.ctx.isUnmounted ? r(S) : i(S, h, x);
        }, ke = () => {
          const xe = S._isLeaving || !!S[nr];
          S._isLeaving && S[nr](
            !0
            /* cancelled */
          ), F.persisted && !xe ? me() : U(S, () => {
            me(), ne && ne();
          });
        };
        Y ? Y(S, me, ke) : ke();
      }
    else
      i(S, h, x);
  }, ut = (p, h, x, $ = !1, T = !1) => {
    const {
      type: S,
      props: D,
      ref: F,
      children: M,
      dynamicChildren: A,
      shapeFlag: J,
      patchFlag: U,
      dirs: Y,
      cacheIndex: ne,
      memo: me
    } = p;
    if (U === -2 && (T = !1), F != null && (Pt(), Dn(F, null, x, p, !0), Mt()), ne != null && (h.renderCache[ne] = void 0), J & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const ke = J & 1 && Y, xe = !mn(p);
    let Ne;
    if (xe && (Ne = D && D.onVnodeBeforeUnmount) && ht(Ne, h, p), J & 6)
      kl(p.component, x, $);
    else {
      if (J & 128) {
        p.suspense.unmount(x, $);
        return;
      }
      ke && Gt(p, null, h, "beforeUnmount"), J & 64 ? p.type.remove(
        p,
        h,
        x,
        Sn,
        $
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (S !== le || U > 0 && U & 64) ? kn(
        A,
        h,
        x,
        !1,
        !0
      ) : (S === le && U & 384 || !T && J & 16) && kn(M, h, x), $ && Ss(p);
    }
    const Fe = me != null && ne == null;
    (xe && (Ne = D && D.onVnodeUnmounted) || ke || Fe) && We(() => {
      Ne && ht(Ne, h, p), ke && Gt(p, null, h, "unmounted"), Fe && (p.el = null);
    }, x);
  }, Ss = (p) => {
    const { type: h, el: x, anchor: $, transition: T } = p;
    if (h === le) {
      wl(x, $);
      return;
    }
    if (h === sr) {
      R(p);
      return;
    }
    const S = () => {
      r(x), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (p.shapeFlag & 1 && T && !T.persisted) {
      const { leave: D, delayLeave: F } = T, M = () => D(x, S);
      F ? F(p.el, S, M) : M();
    } else
      S();
  }, wl = (p, h) => {
    let x;
    for (; p !== h; )
      x = f(p), r(p), p = x;
    r(h);
  }, kl = (p, h, x) => {
    const { bum: $, scope: T, job: S, subTree: D, um: F, m: M, a: A } = p;
    Zs(M), Zs(A), $ && Qi($), T.stop(), S && (S.flags |= 8, ut(D, p, h, x)), F && We(F, h), We(() => {
      p.isUnmounted = !0;
    }, h);
  }, kn = (p, h, x, $ = !1, T = !1, S = 0) => {
    for (let D = S; D < p.length; D++)
      ut(p[D], h, x, $, T);
  }, si = (p) => {
    if (p.shapeFlag & 6)
      return si(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const h = f(p.anchor || p.el), x = h && h[yc];
    return x ? f(x) : h;
  };
  let Gi = !1;
  const Ts = (p, h, x) => {
    let $;
    p == null ? h._vnode && (ut(h._vnode, null, null, !0), $ = h._vnode.component) : y(
      h._vnode || null,
      p,
      h,
      null,
      null,
      null,
      x
    ), h._vnode = p, Gi || (Gi = !0, Ms($), io(), Gi = !1);
  }, Sn = {
    p: y,
    um: ut,
    m: St,
    r: Ss,
    mt: X,
    mc: H,
    pc: he,
    pbc: Se,
    n: si,
    o: e
  };
  return {
    render: Ts,
    hydrate: void 0,
    createApp: qc(Ts)
  };
}
function rr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Yt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function iu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function No(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (ie(i) && ie(r))
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      let o = r[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[s] = $t(r[s]), o.el = a.el), !n && o.patchFlag !== -2 && No(a, o)), o.type === Zi && (o.patchFlag === -1 && (o = r[s] = $t(o)), o.el = a.el), o.type === Ft && !o.el && (o.el = a.el);
    }
}
function ru(e) {
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
function Eo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Eo(t);
}
function Zs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Oo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Oo(t.subTree) : null;
}
const Po = (e) => e.__isSuspense;
function su(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : hc(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), Zi = /* @__PURE__ */ Symbol.for("v-txt"), Ft = /* @__PURE__ */ Symbol.for("v-cmt"), sr = /* @__PURE__ */ Symbol.for("v-stc"), qn = [];
let Qe = null;
function b(e = !1) {
  qn.push(Qe = e ? null : []);
}
function au() {
  qn.pop(), Qe = qn[qn.length - 1] || null;
}
let Zn = 1;
function Hs(e, t = !1) {
  Zn += e, e < 0 && Qe && t && (Qe.hasOnce = !0);
}
function Mo(e) {
  return e.dynamicChildren = Zn > 0 ? Qe || fn : null, au(), Zn > 0 && Qe && Qe.push(e), e;
}
function k(e, t, n, i, r, s) {
  return Mo(
    P(
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
function Pe(e, t, n, i, r) {
  return Mo(
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
function ss(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function An(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ro = ({ key: e }) => e ?? null, ui = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ae(e) || /* @__PURE__ */ qe(e) || re(e) ? { i: Ze, r: e, k: t, f: !!n } : e : null);
function P(e, t = null, n = null, i = 0, r = null, s = e === le ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ro(t),
    ref: t && ui(t),
    scopeId: so,
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
  return o ? (os(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ae(n) ? 8 : 16), Zn > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Qe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Qe.push(l), l;
}
const Xe = ou;
function ou(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === mo) && (e = Ft), ss(e)) {
    const o = bn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && os(o, n), Zn > 0 && !s && Qe && (o.shapeFlag & 6 ? Qe[Qe.indexOf(e)] = o : Qe.push(o)), o.patchFlag = -2, o;
  }
  if (yu(e) && (e = e.__vccOpts), t) {
    t = lu(t);
    let { class: o, style: l } = t;
    o && !Ae(o) && (t.class = Ke(o)), _e(l) && (/* @__PURE__ */ Xr(l) && !ie(l) && (l = Ie({}, l)), t.style = ei(l));
  }
  const a = Ae(e) ? 1 : Po(e) ? 128 : bc(e) ? 64 : _e(e) ? 4 : re(e) ? 2 : 0;
  return P(
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
function lu(e) {
  return e ? /* @__PURE__ */ Xr(e) || So(e) ? Ie({}, e) : e : null;
}
function bn(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: a, children: o, transition: l } = e, c = t ? cu(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ro(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? ie(s) ? s.concat(ui(t)) : [s, ui(t)] : ui(t)
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
    ssContent: e.ssContent && bn(e.ssContent),
    ssFallback: e.ssFallback && bn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && ts(
    u,
    l.clone(u)
  ), u;
}
function as(e = " ", t = 0) {
  return Xe(Zi, null, e, t);
}
function oe(e = "", t = !1) {
  return t ? (b(), Pe(Ft, null, e)) : Xe(Ft, null, e);
}
function vt(e) {
  return e == null || typeof e == "boolean" ? Xe(Ft) : ie(e) ? Xe(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ss(e) ? $t(e) : Xe(Zi, null, String(e));
}
function $t(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bn(e);
}
function os(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (ie(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), os(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !So(t) ? t._ctx = Ze : r === 3 && Ze && (Ze.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else re(t) ? (t = { default: t, _ctx: Ze }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [as(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function cu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = Ke([t.class, i.class]));
      else if (r === "style")
        t.style = ei([t.style, i.style]);
      else if (Mi(r)) {
        const s = t[r], a = i[r];
        a && s !== a && !(ie(s) && s.includes(a)) ? t[r] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ri(r) && (t[r] = a);
      } else r !== "" && (t[r] = i[r]);
  }
  return t;
}
function ht(e, t, n, i = null) {
  lt(e, t, 7, [
    n,
    i
  ]);
}
const uu = bo();
let du = 0;
function fu(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || uu, s = {
    uid: du++,
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
    scope: new Ll(
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
    propsOptions: Co(i, r),
    emitsOptions: xo(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ce,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ce,
    data: Ce,
    props: Ce,
    attrs: Ce,
    slots: Ce,
    refs: Ce,
    setupState: Ce,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Vc.bind(null, s), e.ce && e.ce(s), s;
}
let De = null;
const Fo = () => De || Ze;
let vi, wr;
{
  const e = Di(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((a) => a(s)) : r[0](s);
    };
  };
  vi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => De = n
  ), wr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Hn = n
  );
}
const ni = (e) => {
  const t = De;
  return vi(e), e.scope.on(), () => {
    e.scope.off(), vi(t);
  };
}, Ws = () => {
  De && De.scope.off(), vi(null);
};
function jo(e) {
  return e.vnode.shapeFlag & 4;
}
let Hn = !1;
function pu(e, t = !1, n = !1) {
  t && wr(t);
  const { props: i, children: r } = e.vnode, s = jo(e);
  Gc(e, i, s, t), Xc(e, r, n || t);
  const a = s ? hu(e, t) : void 0;
  return t && wr(!1), a;
}
function hu(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mc);
  const { setup: i } = n;
  if (i) {
    Pt();
    const r = e.setupContext = i.length > 1 ? gu(e) : null, s = ni(e), a = ti(
      i,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = Ma(a);
    if (Mt(), s(), (o || e.sp) && !mn(e) && co(e), o) {
      if (a.then(Ws, Ws), t)
        return a.then((l) => {
          Ks(e, l);
        }).catch((l) => {
          qi(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Ks(e, a);
  } else
    Lo(e);
}
function Ks(e, t, n) {
  re(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : _e(t) && (e.setupState = eo(t)), Lo(e);
}
function Lo(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || bt);
  {
    const r = ni(e);
    Pt();
    try {
      Rc(e);
    } finally {
      Mt(), r();
    }
  }
}
const mu = {
  get(e, t) {
    return Le(e, "get", ""), e[t];
  }
};
function gu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, mu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ls(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(eo(rc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in zn)
        return zn[n](e);
    },
    has(t, n) {
      return n in t || n in zn;
    }
  })) : e.proxy;
}
function vu(e, t = !0) {
  return re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function yu(e) {
  return re(e) && "__vccOpts" in e;
}
const G = (e, t) => /* @__PURE__ */ cc(e, t, Hn), bu = "3.5.35";
/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let kr;
const Gs = typeof window < "u" && window.trustedTypes;
if (Gs)
  try {
    kr = /* @__PURE__ */ Gs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Do = kr ? (e) => kr.createHTML(e) : (e) => e, xu = "http://www.w3.org/2000/svg", _u = "http://www.w3.org/1998/Math/MathML", At = typeof document < "u" ? document : null, Ys = At && /* @__PURE__ */ At.createElement("template"), wu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? At.createElementNS(xu, e) : t === "mathml" ? At.createElementNS(_u, e) : n ? At.createElement(e, { is: n }) : At.createElement(e);
    return e === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (e) => At.createTextNode(e),
  createComment: (e) => At.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => At.querySelector(e),
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
      Ys.innerHTML = Do(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Ys.content;
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
}, ku = /* @__PURE__ */ Symbol("_vtc");
function Su(e, t, n) {
  const i = e[ku];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Qs = /* @__PURE__ */ Symbol("_vod"), Tu = /* @__PURE__ */ Symbol("_vsh"), Cu = /* @__PURE__ */ Symbol(""), Au = /(?:^|;)\s*display\s*:/;
function $u(e, t, n) {
  const i = e.style, r = Ae(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (Ae(t))
        for (const a of t.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && On(i, o, "");
        }
      else
        for (const a in t)
          n[a] == null && On(i, a, "");
    for (const a in n) {
      a === "display" && (s = !0);
      const o = n[a];
      o != null ? Nu(
        e,
        a,
        !Ae(t) && t ? t[a] : void 0,
        o
      ) || On(i, a, o) : On(i, a, "");
    }
  } else if (r) {
    if (t !== n) {
      const a = i[Cu];
      a && (n += ";" + a), i.cssText = n, s = Au.test(n);
    }
  } else t && e.removeAttribute("style");
  Qs in e && (e[Qs] = s ? i.display : "", e[Tu] && (i.display = "none"));
}
const Js = /\s*!important$/;
function On(e, t, n) {
  if (ie(n))
    n.forEach((i) => On(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Iu(e, t);
    Js.test(n) ? e.setProperty(
      Ye(i),
      n.replace(Js, ""),
      "important"
    ) : e[i] = n;
  }
}
const Xs = ["Webkit", "Moz", "ms"], ar = {};
function Iu(e, t) {
  const n = ar[t];
  if (n)
    return n;
  let i = Re(t);
  if (i !== "filter" && i in e)
    return ar[t] = i;
  i = Li(i);
  for (let r = 0; r < Xs.length; r++) {
    const s = Xs[r] + i;
    if (s in e)
      return ar[t] = s;
  }
  return t;
}
function Nu(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ae(i) && n === i;
}
const ea = "http://www.w3.org/1999/xlink";
function ta(e, t, n, i, r, s = Fl(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ea, t.slice(6, t.length)) : e.setAttributeNS(ea, t, n) : n == null || s && !ja(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : at(n) ? String(n) : n
  );
}
function na(e, t, n, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Do(n) : n);
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
    o === "boolean" ? n = ja(n) : n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(r || t);
}
function Eu(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Ou(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const ia = /* @__PURE__ */ Symbol("_vei");
function Pu(e, t, n, i, r = null) {
  const s = e[ia] || (e[ia] = {}), a = s[t];
  if (i && a)
    a.value = i;
  else {
    const [o, l] = Mu(t);
    if (i) {
      const c = s[t] = ju(
        i,
        r
      );
      Eu(e, o, c, l);
    } else a && (Ou(e, o, a, l), s[t] = void 0);
  }
}
const ra = /(?:Once|Passive|Capture)$/;
function Mu(e) {
  let t;
  if (ra.test(e)) {
    t = {};
    let i;
    for (; i = e.match(ra); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ye(e.slice(2)), t];
}
let or = 0;
const Ru = /* @__PURE__ */ Promise.resolve(), Fu = () => or || (Ru.then(() => or = 0), or = Date.now());
function ju(e, t) {
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
        c && lt(
          c,
          t,
          5,
          o
        );
      }
    } else
      lt(
        r,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Fu(), n;
}
const sa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Lu = (e, t, n, i, r, s) => {
  const a = r === "svg";
  t === "class" ? Su(e, i, a) : t === "style" ? $u(e, n, i) : Mi(t) ? Ri(t) || Pu(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Du(e, t, i, a)) ? (na(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ta(e, t, i, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (zu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ae(i))) ? na(e, Re(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ta(e, t, i, a));
};
function Du(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && sa(t) && re(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return sa(t) && Ae(n) ? !1 : t in e;
}
function zu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Re(t);
  return Array.isArray(n) ? n.some((r) => Re(r) === i) : Object.keys(n).some((r) => Re(r) === i);
}
const aa = {};
// @__NO_SIDE_EFFECTS__
function qu(e, t, n) {
  let i = /* @__PURE__ */ $e(e, t);
  Fi(i) && (i = Ie({}, i, t));
  class r extends cs {
    constructor(a) {
      super(i, a, n);
    }
  }
  return r.def = i, r;
}
const Uu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class cs extends Uu {
  constructor(t, n = {}, i = la) {
    super(), this._def = t, this._props = n, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && i !== la ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      Ie({}, t.shadowRootOptions, {
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
      if (t instanceof cs) {
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
    this._connected = !1, Ui(() => {
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
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Ns(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[Re(l)] = !0);
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
        ye(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => E(n[i])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, i = ie(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && i.includes(r) && this._setProp(r, this[r]);
    for (const r of i.map(Re))
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
    let i = n ? this.getAttribute(t) : aa;
    const r = Re(t);
    n && this._numberProps && this._numberProps[r] && (i = Ns(i)), this._setProp(r, i, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === aa ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), i)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(Ye(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ye(t), n + "") : n || this.removeAttribute(Ye(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Ku(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Xe(this._def, Ie(t, this._props));
    return this._instance || (n.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const r = (s, a) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            Fi(a[0]) ? Ie({ detail: a }, a[0]) : { detail: a }
          )
        );
      };
      i.emit = (s, ...a) => {
        r(s, a), Ye(s) !== s && r(Ye(s), a);
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
function Vu(e) {
  const t = Fo(), n = t && t.ce;
  return n || null;
}
const Bu = ["ctrl", "shift", "alt", "meta"], Zu = {
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
  exact: (e, t) => Bu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Wn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const o = Zu[t[a]];
      if (o && o(r, t)) return;
    }
    return e(r, ...s);
  });
}, Hu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Sr = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (r) => {
    if (!("key" in r))
      return;
    const s = Ye(r.key);
    if (t.some(
      (a) => a === s || Hu[a] === s
    ))
      return e(r);
  });
}, Wu = /* @__PURE__ */ Ie({ patchProp: Lu }, wu);
let oa;
function zo() {
  return oa || (oa = tu(Wu));
}
const Ku = (...e) => {
  zo().render(...e);
}, la = (...e) => {
  const t = zo().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const r = Yu(i);
    if (!r) return;
    const s = t._component;
    !re(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const a = n(r, !1, Gu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
};
function Gu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Yu(e) {
  return Ae(e) ? document.querySelector(e) : e;
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
var ca;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(ca || (ca = {}));
const B = ge.arrayToEnum([
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
]), Vt = (e) => {
  switch (typeof e) {
    case "undefined":
      return B.undefined;
    case "string":
      return B.string;
    case "number":
      return Number.isNaN(e) ? B.nan : B.number;
    case "boolean":
      return B.boolean;
    case "function":
      return B.function;
    case "bigint":
      return B.bigint;
    case "symbol":
      return B.symbol;
    case "object":
      return Array.isArray(e) ? B.array : e === null ? B.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? B.promise : typeof Map < "u" && e instanceof Map ? B.map : typeof Set < "u" && e instanceof Set ? B.set : typeof Date < "u" && e instanceof Date ? B.date : B.object;
    default:
      return B.unknown;
  }
}, I = ge.arrayToEnum([
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
class jt extends Error {
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
    if (!(t instanceof jt))
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
jt.create = (e) => new jt(e);
const Tr = (e, t) => {
  let n;
  switch (e.code) {
    case I.invalid_type:
      e.received === B.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case I.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, ge.jsonStringifyReplacer)}`;
      break;
    case I.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ge.joinValues(e.keys, ", ")}`;
      break;
    case I.invalid_union:
      n = "Invalid input";
      break;
    case I.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ge.joinValues(e.options)}`;
      break;
    case I.invalid_enum_value:
      n = `Invalid enum value. Expected ${ge.joinValues(e.options)}, received '${e.received}'`;
      break;
    case I.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case I.invalid_return_type:
      n = "Invalid function return type";
      break;
    case I.invalid_date:
      n = "Invalid date";
      break;
    case I.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : ge.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case I.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case I.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case I.custom:
      n = "Invalid input";
      break;
    case I.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case I.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case I.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, ge.assertNever(e);
  }
  return { message: n };
};
let Qu = Tr;
function Ju() {
  return Qu;
}
const Xu = (e) => {
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
  const n = Ju(), i = Xu({
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
      n === Tr ? void 0 : Tr
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
        return ee;
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
        return ee;
      s.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || r.alwaysSet) && (i[s.value] = a.value);
    }
    return { status: t.value, value: i };
  }
}
const ee = Object.freeze({
  status: "aborted"
}), Pn = (e) => ({ status: "dirty", value: e }), et = (e) => ({ status: "valid", value: e }), ua = (e) => e.status === "aborted", da = (e) => e.status === "dirty", xn = (e) => e.status === "valid", yi = (e) => typeof Promise < "u" && e instanceof Promise;
var K;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(K || (K = {}));
class kt {
  constructor(t, n, i, r) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = i, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const fa = (e, t) => {
  if (xn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new jt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function ae(e) {
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
class de {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Vt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Vt(t.data),
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
        parsedType: Vt(t.data),
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
      parsedType: Vt(t)
    }, r = this._parseSync({ data: t, path: i.path, parent: i });
    return fa(i, r);
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
      parsedType: Vt(t)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: t, path: [], parent: n });
        return xn(s) ? {
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
    return this._parseAsync({ data: t, path: [], parent: n }).then((s) => xn(s) ? {
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
      parsedType: Vt(t)
    }, r = this._parse({ data: t, path: i.path, parent: i }), s = await (yi(r) ? r : Promise.resolve(r));
    return fa(i, s);
  }
  refine(t, n) {
    const i = (r) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(r) : n;
    return this._refinement((r, s) => {
      const a = t(r), o = () => s.addIssue({
        code: I.custom,
        ...i(r)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((i, r) => t(i) ? !0 : (r.addIssue(typeof n == "function" ? n(i, r) : n), !1));
  }
  _refinement(t) {
    return new sn({
      schema: this,
      typeName: te.ZodEffects,
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
    return Et.create(this, this._def);
  }
  nullable() {
    return an.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return wt.create(this);
  }
  promise() {
    return Ti.create(this, this._def);
  }
  or(t) {
    return xi.create([this, t], this._def);
  }
  and(t) {
    return _i.create(this, t, this._def);
  }
  transform(t) {
    return new sn({
      ...ae(this._def),
      schema: this,
      typeName: te.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ci({
      ...ae(this._def),
      innerType: this,
      defaultValue: n,
      typeName: te.ZodDefault
    });
  }
  brand() {
    return new Bo({
      typeName: te.ZodBranded,
      type: this,
      ...ae(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ai({
      ...ae(this._def),
      innerType: this,
      catchValue: n,
      typeName: te.ZodCatch
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
    return ds.create(this, t);
  }
  readonly() {
    return $i.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const ed = /^c[^\s-]{8,}$/i, td = /^[0-9a-z]+$/, nd = /^[0-9A-HJKMNP-TV-Z]{26}$/i, id = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, rd = /^[a-z0-9_-]{21}$/i, sd = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, ad = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, od = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ld = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let lr;
const cd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ud = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, dd = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, fd = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, pd = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, hd = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, qo = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", md = new RegExp(`^${qo}$`);
function Uo(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function gd(e) {
  return new RegExp(`^${Uo(e)}$`);
}
function vd(e) {
  let t = `${qo}T${Uo(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function yd(e, t) {
  return !!((t === "v4" || !t) && cd.test(e) || (t === "v6" || !t) && dd.test(e));
}
function bd(e, t) {
  if (!sd.test(e))
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
function xd(e, t) {
  return !!((t === "v4" || !t) && ud.test(e) || (t === "v6" || !t) && fd.test(e));
}
class Nt extends de {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== B.string) {
      const s = this._getOrReturnCtx(t);
      return z(s, {
        code: I.invalid_type,
        expected: B.string,
        received: s.parsedType
      }), ee;
    }
    const i = new He();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (r = this._getOrReturnCtx(t, r), z(r, {
          code: I.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (r = this._getOrReturnCtx(t, r), z(r, {
          code: I.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "length") {
        const a = t.data.length > s.value, o = t.data.length < s.value;
        (a || o) && (r = this._getOrReturnCtx(t, r), a ? z(r, {
          code: I.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && z(r, {
          code: I.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), i.dirty());
      } else if (s.kind === "email")
        od.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "email",
          code: I.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "emoji")
        lr || (lr = new RegExp(ld, "u")), lr.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "emoji",
          code: I.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "uuid")
        id.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "uuid",
          code: I.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "nanoid")
        rd.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "nanoid",
          code: I.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid")
        ed.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "cuid",
          code: I.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid2")
        td.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "cuid2",
          code: I.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "ulid")
        nd.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
          validation: "ulid",
          code: I.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), z(r, {
            validation: "url",
            code: I.invalid_string,
            message: s.message
          }), i.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "regex",
        code: I.invalid_string,
        message: s.message
      }), i.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: I.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), i.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: I.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: I.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "datetime" ? vd(s).test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: I.invalid_string,
        validation: "datetime",
        message: s.message
      }), i.dirty()) : s.kind === "date" ? md.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: I.invalid_string,
        validation: "date",
        message: s.message
      }), i.dirty()) : s.kind === "time" ? gd(s).test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        code: I.invalid_string,
        validation: "time",
        message: s.message
      }), i.dirty()) : s.kind === "duration" ? ad.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "duration",
        code: I.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "ip" ? yd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "ip",
        code: I.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "jwt" ? bd(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "jwt",
        code: I.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "cidr" ? xd(t.data, s.version) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "cidr",
        code: I.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64" ? pd.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "base64",
        code: I.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64url" ? hd.test(t.data) || (r = this._getOrReturnCtx(t, r), z(r, {
        validation: "base64url",
        code: I.invalid_string,
        message: s.message
      }), i.dirty()) : ge.assertNever(s);
    return { status: i.value, value: t.data };
  }
  _regex(t, n, i) {
    return this.refinement((r) => t.test(r), {
      validation: n,
      code: I.invalid_string,
      ...K.errToObj(i)
    });
  }
  _addCheck(t) {
    return new Nt({
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
    return new Nt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Nt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Nt({
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
Nt.create = (e) => new Nt({
  checks: [],
  typeName: te.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ae(e)
});
function _d(e, t) {
  const n = (e.toString().split(".")[1] || "").length, i = (t.toString().split(".")[1] || "").length, r = n > i ? n : i, s = Number.parseInt(e.toFixed(r).replace(".", "")), a = Number.parseInt(t.toFixed(r).replace(".", ""));
  return s % a / 10 ** r;
}
class _n extends de {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== B.number) {
      const s = this._getOrReturnCtx(t);
      return z(s, {
        code: I.invalid_type,
        expected: B.number,
        received: s.parsedType
      }), ee;
    }
    let i;
    const r = new He();
    for (const s of this._def.checks)
      s.kind === "int" ? ge.isInteger(t.data) || (i = this._getOrReturnCtx(t, i), z(i, {
        code: I.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), z(i, {
        code: I.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), z(i, {
        code: I.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? _d(t.data, s.value) !== 0 && (i = this._getOrReturnCtx(t, i), z(i, {
        code: I.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (i = this._getOrReturnCtx(t, i), z(i, {
        code: I.not_finite,
        message: s.message
      }), r.dirty()) : ge.assertNever(s);
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
_n.create = (e) => new _n({
  checks: [],
  typeName: te.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ae(e)
});
class Kn extends de {
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
    if (this._getType(t) !== B.bigint)
      return this._getInvalidInput(t);
    let i;
    const r = new He();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), z(i, {
        code: I.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), z(i, {
        code: I.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (i = this._getOrReturnCtx(t, i), z(i, {
        code: I.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : ge.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return z(n, {
      code: I.invalid_type,
      expected: B.bigint,
      received: n.parsedType
    }), ee;
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
    return new Kn({
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
    return new Kn({
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
Kn.create = (e) => new Kn({
  checks: [],
  typeName: te.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ae(e)
});
class Cr extends de {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== B.boolean) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: I.invalid_type,
        expected: B.boolean,
        received: i.parsedType
      }), ee;
    }
    return et(t.data);
  }
}
Cr.create = (e) => new Cr({
  typeName: te.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ae(e)
});
class bi extends de {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== B.date) {
      const s = this._getOrReturnCtx(t);
      return z(s, {
        code: I.invalid_type,
        expected: B.date,
        received: s.parsedType
      }), ee;
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return z(s, {
        code: I.invalid_date
      }), ee;
    }
    const i = new He();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), z(r, {
        code: I.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), i.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), z(r, {
        code: I.too_big,
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
    return new bi({
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
bi.create = (e) => new bi({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: te.ZodDate,
  ...ae(e)
});
class pa extends de {
  _parse(t) {
    if (this._getType(t) !== B.symbol) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: I.invalid_type,
        expected: B.symbol,
        received: i.parsedType
      }), ee;
    }
    return et(t.data);
  }
}
pa.create = (e) => new pa({
  typeName: te.ZodSymbol,
  ...ae(e)
});
class Ar extends de {
  _parse(t) {
    if (this._getType(t) !== B.undefined) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: I.invalid_type,
        expected: B.undefined,
        received: i.parsedType
      }), ee;
    }
    return et(t.data);
  }
}
Ar.create = (e) => new Ar({
  typeName: te.ZodUndefined,
  ...ae(e)
});
class $r extends de {
  _parse(t) {
    if (this._getType(t) !== B.null) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: I.invalid_type,
        expected: B.null,
        received: i.parsedType
      }), ee;
    }
    return et(t.data);
  }
}
$r.create = (e) => new $r({
  typeName: te.ZodNull,
  ...ae(e)
});
class ha extends de {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return et(t.data);
  }
}
ha.create = (e) => new ha({
  typeName: te.ZodAny,
  ...ae(e)
});
class Ir extends de {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return et(t.data);
  }
}
Ir.create = (e) => new Ir({
  typeName: te.ZodUnknown,
  ...ae(e)
});
class Wt extends de {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return z(n, {
      code: I.invalid_type,
      expected: B.never,
      received: n.parsedType
    }), ee;
  }
}
Wt.create = (e) => new Wt({
  typeName: te.ZodNever,
  ...ae(e)
});
class ma extends de {
  _parse(t) {
    if (this._getType(t) !== B.undefined) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: I.invalid_type,
        expected: B.void,
        received: i.parsedType
      }), ee;
    }
    return et(t.data);
  }
}
ma.create = (e) => new ma({
  typeName: te.ZodVoid,
  ...ae(e)
});
class wt extends de {
  _parse(t) {
    const { ctx: n, status: i } = this._processInputParams(t), r = this._def;
    if (n.parsedType !== B.array)
      return z(n, {
        code: I.invalid_type,
        expected: B.array,
        received: n.parsedType
      }), ee;
    if (r.exactLength !== null) {
      const a = n.data.length > r.exactLength.value, o = n.data.length < r.exactLength.value;
      (a || o) && (z(n, {
        code: a ? I.too_big : I.too_small,
        minimum: o ? r.exactLength.value : void 0,
        maximum: a ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), i.dirty());
    }
    if (r.minLength !== null && n.data.length < r.minLength.value && (z(n, {
      code: I.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), i.dirty()), r.maxLength !== null && n.data.length > r.maxLength.value && (z(n, {
      code: I.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), i.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, o) => r.type._parseAsync(new kt(n, a, n.path, o)))).then((a) => He.mergeArray(i, a));
    const s = [...n.data].map((a, o) => r.type._parseSync(new kt(n, a, n.path, o)));
    return He.mergeArray(i, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new wt({
      ...this._def,
      minLength: { value: t, message: K.toString(n) }
    });
  }
  max(t, n) {
    return new wt({
      ...this._def,
      maxLength: { value: t, message: K.toString(n) }
    });
  }
  length(t, n) {
    return new wt({
      ...this._def,
      exactLength: { value: t, message: K.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
wt.create = (e, t) => new wt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: te.ZodArray,
  ...ae(t)
});
function dn(e) {
  if (e instanceof Ee) {
    const t = {};
    for (const n in e.shape) {
      const i = e.shape[n];
      t[n] = Et.create(dn(i));
    }
    return new Ee({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof wt ? new wt({
    ...e._def,
    type: dn(e.element)
  }) : e instanceof Et ? Et.create(dn(e.unwrap())) : e instanceof an ? an.create(dn(e.unwrap())) : e instanceof nn ? nn.create(e.items.map((t) => dn(t))) : e;
}
class Ee extends de {
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
    if (this._getType(t) !== B.object) {
      const c = this._getOrReturnCtx(t);
      return z(c, {
        code: I.invalid_type,
        expected: B.object,
        received: c.parsedType
      }), ee;
    }
    const { status: i, ctx: r } = this._processInputParams(t), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Wt && this._def.unknownKeys === "strip"))
      for (const c in r.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const u = s[c], d = r.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new kt(r, d, r.path, c)),
        alwaysSet: c in r.data
      });
    }
    if (this._def.catchall instanceof Wt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: r.data[u] }
          });
      else if (c === "strict")
        o.length > 0 && (z(r, {
          code: I.unrecognized_keys,
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
            new kt(r, d, r.path, u)
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
    return K.errToObj, new Ee({
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
    return new Ee({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ee({
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
    return new Ee({
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
    return new Ee({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: te.ZodObject
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
    return new Ee({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const i of ge.objectKeys(t))
      t[i] && this.shape[i] && (n[i] = this.shape[i]);
    return new Ee({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const i of ge.objectKeys(this.shape))
      t[i] || (n[i] = this.shape[i]);
    return new Ee({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return dn(this);
  }
  partial(t) {
    const n = {};
    for (const i of ge.objectKeys(this.shape)) {
      const r = this.shape[i];
      t && !t[i] ? n[i] = r : n[i] = r.optional();
    }
    return new Ee({
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
        for (; s instanceof Et; )
          s = s._def.innerType;
        n[i] = s;
      }
    return new Ee({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Vo(ge.objectKeys(this.shape));
  }
}
Ee.create = (e, t) => new Ee({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Wt.create(),
  typeName: te.ZodObject,
  ...ae(t)
});
Ee.strictCreate = (e, t) => new Ee({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Wt.create(),
  typeName: te.ZodObject,
  ...ae(t)
});
Ee.lazycreate = (e, t) => new Ee({
  shape: e,
  unknownKeys: "strip",
  catchall: Wt.create(),
  typeName: te.ZodObject,
  ...ae(t)
});
class xi extends de {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), i = this._def.options;
    function r(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new jt(o.ctx.common.issues));
      return z(n, {
        code: I.invalid_union,
        unionErrors: a
      }), ee;
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
      const o = a.map((l) => new jt(l));
      return z(n, {
        code: I.invalid_union,
        unionErrors: o
      }), ee;
    }
  }
  get options() {
    return this._def.options;
  }
}
xi.create = (e, t) => new xi({
  options: e,
  typeName: te.ZodUnion,
  ...ae(t)
});
const Ct = (e) => e instanceof ki ? Ct(e.schema) : e instanceof sn ? Ct(e.innerType()) : e instanceof Si ? [e.value] : e instanceof rn ? e.options : e instanceof Er ? ge.objectValues(e.enum) : e instanceof Ci ? Ct(e._def.innerType) : e instanceof Ar ? [void 0] : e instanceof $r ? [null] : e instanceof Et ? [void 0, ...Ct(e.unwrap())] : e instanceof an ? [null, ...Ct(e.unwrap())] : e instanceof Bo || e instanceof $i ? Ct(e.unwrap()) : e instanceof Ai ? Ct(e._def.innerType) : [];
class us extends de {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== B.object)
      return z(n, {
        code: I.invalid_type,
        expected: B.object,
        received: n.parsedType
      }), ee;
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
      code: I.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [i]
    }), ee);
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
      const a = Ct(s.shape[t]);
      if (!a.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (r.has(o))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        r.set(o, s);
      }
    }
    return new us({
      typeName: te.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: r,
      ...ae(i)
    });
  }
}
function Nr(e, t) {
  const n = Vt(e), i = Vt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === B.object && i === B.object) {
    const r = ge.objectKeys(t), s = ge.objectKeys(e).filter((o) => r.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of s) {
      const l = Nr(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (n === B.array && i === B.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s], o = t[s], l = Nr(a, o);
      if (!l.valid)
        return { valid: !1 };
      r.push(l.data);
    }
    return { valid: !0, data: r };
  } else return n === B.date && i === B.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class _i extends de {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = (s, a) => {
      if (ua(s) || ua(a))
        return ee;
      const o = Nr(s.value, a.value);
      return o.valid ? ((da(s) || da(a)) && n.dirty(), { status: n.value, value: o.data }) : (z(i, {
        code: I.invalid_intersection_types
      }), ee);
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
  typeName: te.ZodIntersection,
  ...ae(n)
});
class nn extends de {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== B.array)
      return z(i, {
        code: I.invalid_type,
        expected: B.array,
        received: i.parsedType
      }), ee;
    if (i.data.length < this._def.items.length)
      return z(i, {
        code: I.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ee;
    !this._def.rest && i.data.length > this._def.items.length && (z(i, {
      code: I.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...i.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new kt(i, a, i.path, o)) : null;
    }).filter((a) => !!a);
    return i.common.async ? Promise.all(s).then((a) => He.mergeArray(n, a)) : He.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new nn({
      ...this._def,
      rest: t
    });
  }
}
nn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new nn({
    items: e,
    typeName: te.ZodTuple,
    rest: null,
    ...ae(t)
  });
};
class wi extends de {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== B.object)
      return z(i, {
        code: I.invalid_type,
        expected: B.object,
        received: i.parsedType
      }), ee;
    const r = [], s = this._def.keyType, a = this._def.valueType;
    for (const o in i.data)
      r.push({
        key: s._parse(new kt(i, o, i.path, o)),
        value: a._parse(new kt(i, i.data[o], i.path, o)),
        alwaysSet: o in i.data
      });
    return i.common.async ? He.mergeObjectAsync(n, r) : He.mergeObjectSync(n, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, i) {
    return n instanceof de ? new wi({
      keyType: t,
      valueType: n,
      typeName: te.ZodRecord,
      ...ae(i)
    }) : new wi({
      keyType: Nt.create(),
      valueType: t,
      typeName: te.ZodRecord,
      ...ae(n)
    });
  }
}
class ga extends de {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== B.map)
      return z(i, {
        code: I.invalid_type,
        expected: B.map,
        received: i.parsedType
      }), ee;
    const r = this._def.keyType, s = this._def.valueType, a = [...i.data.entries()].map(([o, l], c) => ({
      key: r._parse(new kt(i, o, i.path, [c, "key"])),
      value: s._parse(new kt(i, l, i.path, [c, "value"]))
    }));
    if (i.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return ee;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return ee;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
ga.create = (e, t, n) => new ga({
  valueType: t,
  keyType: e,
  typeName: te.ZodMap,
  ...ae(n)
});
class Gn extends de {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== B.set)
      return z(i, {
        code: I.invalid_type,
        expected: B.set,
        received: i.parsedType
      }), ee;
    const r = this._def;
    r.minSize !== null && i.data.size < r.minSize.value && (z(i, {
      code: I.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), n.dirty()), r.maxSize !== null && i.data.size > r.maxSize.value && (z(i, {
      code: I.too_big,
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
          return ee;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const o = [...i.data.values()].map((l, c) => s._parse(new kt(i, l, i.path, c)));
    return i.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(t, n) {
    return new Gn({
      ...this._def,
      minSize: { value: t, message: K.toString(n) }
    });
  }
  max(t, n) {
    return new Gn({
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
Gn.create = (e, t) => new Gn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: te.ZodSet,
  ...ae(t)
});
class ki extends de {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ki.create = (e, t) => new ki({
  getter: e,
  typeName: te.ZodLazy,
  ...ae(t)
});
class Si extends de {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        received: n.data,
        code: I.invalid_literal,
        expected: this._def.value
      }), ee;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Si.create = (e, t) => new Si({
  value: e,
  typeName: te.ZodLiteral,
  ...ae(t)
});
function Vo(e, t) {
  return new rn({
    values: e,
    typeName: te.ZodEnum,
    ...ae(t)
  });
}
class rn extends de {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return z(n, {
        expected: ge.joinValues(i),
        received: n.parsedType,
        code: I.invalid_type
      }), ee;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return z(n, {
        received: n.data,
        code: I.invalid_enum_value,
        options: i
      }), ee;
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
    return rn.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return rn.create(this.options.filter((i) => !t.includes(i)), {
      ...this._def,
      ...n
    });
  }
}
rn.create = Vo;
class Er extends de {
  _parse(t) {
    const n = ge.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(t);
    if (i.parsedType !== B.string && i.parsedType !== B.number) {
      const r = ge.objectValues(n);
      return z(i, {
        expected: ge.joinValues(r),
        received: i.parsedType,
        code: I.invalid_type
      }), ee;
    }
    if (this._cache || (this._cache = new Set(ge.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = ge.objectValues(n);
      return z(i, {
        received: i.data,
        code: I.invalid_enum_value,
        options: r
      }), ee;
    }
    return et(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Er.create = (e, t) => new Er({
  values: e,
  typeName: te.ZodNativeEnum,
  ...ae(t)
});
class Ti extends de {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== B.promise && n.common.async === !1)
      return z(n, {
        code: I.invalid_type,
        expected: B.promise,
        received: n.parsedType
      }), ee;
    const i = n.parsedType === B.promise ? n.data : Promise.resolve(n.data);
    return et(i.then((r) => this._def.type.parseAsync(r, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Ti.create = (e, t) => new Ti({
  type: e,
  typeName: te.ZodPromise,
  ...ae(t)
});
class sn extends de {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === te.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
            return ee;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: i.path,
            parent: i
          });
          return l.status === "aborted" ? ee : l.status === "dirty" || n.value === "dirty" ? Pn(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return ee;
        const o = this._def.schema._parseSync({
          data: a,
          path: i.path,
          parent: i
        });
        return o.status === "aborted" ? ee : o.status === "dirty" || n.value === "dirty" ? Pn(o.value) : o;
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
        return o.status === "aborted" ? ee : (o.status === "dirty" && n.dirty(), a(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((o) => o.status === "aborted" ? ee : (o.status === "dirty" && n.dirty(), a(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (r.type === "transform")
      if (i.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        if (!xn(a))
          return ee;
        const o = r.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((a) => xn(a) ? Promise.resolve(r.transform(a.value, s)).then((o) => ({
          status: n.value,
          value: o
        })) : ee);
    ge.assertNever(r);
  }
}
sn.create = (e, t, n) => new sn({
  schema: e,
  typeName: te.ZodEffects,
  effect: t,
  ...ae(n)
});
sn.createWithPreprocess = (e, t, n) => new sn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: te.ZodEffects,
  ...ae(n)
});
class Et extends de {
  _parse(t) {
    return this._getType(t) === B.undefined ? et(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Et.create = (e, t) => new Et({
  innerType: e,
  typeName: te.ZodOptional,
  ...ae(t)
});
class an extends de {
  _parse(t) {
    return this._getType(t) === B.null ? et(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
an.create = (e, t) => new an({
  innerType: e,
  typeName: te.ZodNullable,
  ...ae(t)
});
class Ci extends de {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let i = n.data;
    return n.parsedType === B.undefined && (i = this._def.defaultValue()), this._def.innerType._parse({
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
  typeName: te.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ae(t)
});
class Ai extends de {
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
          return new jt(i.common.issues);
        },
        input: i.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new jt(i.common.issues);
        },
        input: i.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ai.create = (e, t) => new Ai({
  innerType: e,
  typeName: te.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ae(t)
});
class va extends de {
  _parse(t) {
    if (this._getType(t) !== B.nan) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: I.invalid_type,
        expected: B.nan,
        received: i.parsedType
      }), ee;
    }
    return { status: "valid", value: t.data };
  }
}
va.create = (e) => new va({
  typeName: te.ZodNaN,
  ...ae(e)
});
class Bo extends de {
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
class ds extends de {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return s.status === "aborted" ? ee : s.status === "dirty" ? (n.dirty(), Pn(s.value)) : this._def.out._parseAsync({
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
      return r.status === "aborted" ? ee : r.status === "dirty" ? (n.dirty(), {
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
    return new ds({
      in: t,
      out: n,
      typeName: te.ZodPipeline
    });
  }
}
class $i extends de {
  _parse(t) {
    const n = this._def.innerType._parse(t), i = (r) => (xn(r) && (r.value = Object.freeze(r.value)), r);
    return yi(n) ? n.then((r) => i(r)) : i(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
$i.create = (e, t) => new $i({
  innerType: e,
  typeName: te.ZodReadonly,
  ...ae(t)
});
var te;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(te || (te = {}));
const V = Nt.create, Z = _n.create, ze = Cr.create, Zo = Ir.create;
Wt.create;
const be = wt.create, ce = Ee.create, Yn = xi.create, wd = us.create;
_i.create;
nn.create;
const fs = wi.create, kd = ki.create, tt = Si.create, we = rn.create;
Ti.create;
Et.create;
an.create;
const Sd = we([
  "eq",
  "neq",
  "in",
  "gt",
  "gte",
  "lt",
  "lte",
  "isSet",
  "notSet"
]), ya = ce({
  ref: V().min(1),
  op: Sd,
  value: Yn([V(), Z(), be(V()), be(Z())]).optional()
}), Or = kd(() => ce({
  all: be(Yn([ya, Or])).optional(),
  any: be(Yn([ya, Or])).optional()
}));
function ps(e) {
  return "op" in e;
}
function Pr(e) {
  var t, n;
  return e ? (((t = e.all) == null ? void 0 : t.length) ?? 0) > 0 || (((n = e.any) == null ? void 0 : n.length) ?? 0) > 0 : !1;
}
const Td = [
  "file.pages",
  "file.colorPages",
  "file.monoPages",
  "file.status"
], Ho = "quantity", Cd = we(["quantity", "pages", "area", "length"]), Ad = ce({
  /**
   * Inclusive upper bound on the basis value. MUST be omitted on the last
   * row (open-ended) and present on every other row — validate.ts enforces
   * strictly-increasing order, which makes overlap impossible by construction.
   */
  upTo: Z().positive().optional(),
  amount: Z()
}), Wo = ce({
  basis: Cd.default("quantity"),
  /**
   * flat:      the entire basis value is priced at the matched row's amount.
   * graduated: each band is priced at its own amount and summed
   *            (progressive-tax style).
   */
  mode: we(["flat", "graduated"]).default("flat"),
  rows: be(Ad).min(1)
}), $d = we(["sqm", "sqft", "sqin"]), Id = we(["m", "ft", "in", "cm"]), Nd = we([
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
]), Ed = ce({
  name: V(),
  expression: V()
}), Od = ce({
  /** Evaluated in order; each step may use the ones before it. */
  steps: be(Ed).default([]),
  /**
   * The rule's contribution to the order total. NOT multiplied by the
   * quantity — the formula reads `qty` itself.
   */
  expression: V()
}), Ko = ce({
  type: Nd,
  /** Ignored on a formula rule (written as 0). */
  amount: Z(),
  /**
   * perArea: the unit `amount` is priced in.
   * formula: the unit of `area`. Default "sqm" (engine-side).
   */
  areaUnit: $d.optional(),
  /**
   * perLength: the unit `amount` is priced in.
   * formula: the unit of `w` and `h`. Default "m" (engine-side).
   */
  lengthUnit: Id.optional(),
  /**
   * perLength only: which axis of the source W×H is the billable
   * length. Default "h" (a roll's fixed width is w; the consumed
   * length is h). "max" prices the longest side.
   */
  lengthAxis: we(["h", "w", "max"]).optional(),
  /**
   * perArea/perLength/formula only: id of a `dimensions` field to read
   * W×H from. Fallback when omitted: FileMetadata.canvas.
   */
  dimensionsField: V().optional(),
  /**
   * Volume/size breaks. For basis "area" the basis value is in
   * `areaUnit`; for basis "length", in `lengthUnit`.
   */
  tiers: Wo.optional(),
  /** formula only: the steps and the price (formula.ts has the language). */
  formula: Od.optional()
}), Pd = ce({
  amount: Z().nonnegative().default(0),
  /** "order": added once (v1 behavior). "unit": × quantity (t-shirts, cards). */
  per: we(["order", "unit"]).default("order"),
  /**
   * Quantity breaks on the base. basis must be "quantity"; mode "graduated"
   * requires per === "unit" (validate.ts).
   */
  tiers: Wo.optional()
}), Md = ce({
  currency: V().regex(/^[A-Z]{3}$/, "ISO 4217 currency code").default("USD"),
  basePrice: Pd.default({}),
  /** Flat fee added once, after percent/multiplier (stage D). */
  setupFee: Z().nonnegative().optional(),
  /** Floor applied to the final total (stage E). */
  minimumPrice: Z().nonnegative().optional(),
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
  lineQuantity: we(["job", "units"]).optional()
}), Ii = "2.0", Rd = ce({
  artworkSize: ce({
    width_mm: Z().positive().optional(),
    height_mm: Z().positive().optional()
  }).optional(),
  pageCount: ce({
    min: Z().int().positive().optional(),
    max: Z().int().positive().optional()
  }).optional(),
  fileCount: ce({
    min: Z().int().positive().optional(),
    max: Z().int().positive().optional()
  }).optional(),
  bleed: ce({ required_mm: Z().nonnegative().optional() }).optional(),
  safety: ce({ min_mm: Z().nonnegative().optional() }).optional()
}).strict(), Fd = ce({
  context: Rd.optional()
}), hs = ce({
  id: V().min(1),
  label: V(),
  description: V().optional(),
  /** http(s) URL or data: URI (builder can embed small images). */
  image: V().optional(),
  /** Hex color for swatch display. */
  color: V().optional(),
  /** Default selection for the parent field. */
  default: ze().optional(),
  /** Merchant SKU fragment for this choice (used by resolveSku / adapters). */
  sku: V().optional(),
  /** Manually mark a choice unavailable without deleting it. */
  disabled: ze().optional(),
  /** Price changes applied when this choice is selected. */
  priceModifiers: be(Ko).default([]),
  /** What selecting this choice tells the Filecheck intake (if any). */
  filecheck: Fd.optional()
}), Dt = ce({
  id: V().min(1),
  label: V().optional(),
  helpText: V().optional(),
  required: ze().default(!1),
  visibleWhen: Or.optional(),
  /** Price changes applied just for having this field visible. */
  priceModifiers: be(Ko).default([]),
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
}), jd = Dt.extend({
  type: tt("select-one"),
  display: we(["cards", "grid", "swatches", "pills", "dropdown", "list"]).default("pills"),
  options: be(hs).min(1)
}), Ld = Dt.extend({
  type: tt("select-many"),
  display: we(["cards", "grid", "swatches", "pills", "list"]).default("list"),
  options: be(hs).min(1),
  minSelect: Z().int().nonnegative().default(0),
  maxSelect: Z().int().positive().optional()
}), Dd = Dt.extend({
  type: tt("quantity"),
  display: we(["stepper", "pills", "dropdown", "input"]).default("stepper"),
  min: Z().int().positive().default(1),
  max: Z().int().positive().optional(),
  step: Z().int().positive().default(1),
  defaultValue: Z().int().positive().default(1),
  /** Preset quantities for pills/dropdown display (e.g. 100/250/500/1000). */
  presets: be(Z().int().positive()).optional(),
  /**
   * Word shown after the number wherever the answer is recapped — the cart
   * line, the order, the widget's summary: "5 banners". Storefront themes
   * differ in whether they print a property's label, and a bare "5" beside
   * a cart quantity of 1 does not say what it counts.
   */
  unit: V().max(40).optional(),
  /**
   * Show "Add 15 more to get 15% off" under the total when another
   * quantity break is in reach. Display only.
   */
  nextBreakHint: ze().optional()
}), zd = Dt.extend({
  type: tt("quantities"),
  /** grid: a card per option with its own stepper. list: one row per option. */
  display: we(["grid", "list"]).default("grid"),
  options: be(hs).min(1),
  /** Per option: 0, or min, min+step, … up to max (the `quantity` grid rule). */
  min: Z().int().positive().default(1),
  max: Z().int().positive().optional(),
  step: Z().int().positive().default(1),
  /** The whole job — what quantity pricing, tiers and the cart see. */
  minTotal: Z().int().positive().default(1),
  maxTotal: Z().int().positive().optional(),
  /** Word after the total in the widget: "10 shirts". */
  unit: V().max(40).optional(),
  /** See QuantityField.nextBreakHint. */
  nextBreakHint: ze().optional()
}), qd = Dt.extend({
  type: tt("number"),
  display: we(["stepper", "slider", "input"]).default("input"),
  min: Z().optional(),
  max: Z().optional(),
  step: Z().positive().optional(),
  defaultValue: Z().optional()
}), Ud = Dt.extend({
  type: tt("text"),
  display: we(["input", "textarea"]).default("input"),
  placeholder: V().optional(),
  maxLength: Z().int().positive().optional()
}), Mr = we(["mm", "cm", "in"]), Vd = Dt.extend({
  type: tt("dimensions"),
  display: we(["inputs"]).default("inputs"),
  /** Units the customer may pick between. */
  units: be(Mr).min(1).default(["mm"]),
  defaultUnit: Mr.default("mm"),
  /** Constraints, expressed in defaultUnit. */
  minW: Z().positive().optional(),
  maxW: Z().positive().optional(),
  minH: Z().positive().optional(),
  maxH: Z().positive().optional(),
  defaultValue: ce({ w: Z().positive(), h: Z().positive() }).optional()
}), Bd = ce({
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
  workflow: fs(Zo()).optional()
}).refine((e) => !!e.workflowId || !!e.workflow, {
  message: "filecheck needs a workflowId or an inline workflow"
}), Zd = Dt.extend({
  type: tt("file"),
  /**
   * dropzone: the built-in upload, with any registered producers (Print.App
   * designer, template picker) offered around it. producer: NO direct
   * upload - only the registered producers render; the merchant is
   * showcasing the designer, not file drops.
   */
  display: we(["dropzone", "producer"]).default("dropzone"),
  accept: be(V()).default(["application/pdf"]),
  /** Which data-feed provider enriches the FileMetadata. */
  providerId: V().optional(),
  /**
   * Filecheck-backed upload: replaces the dropzone with the Filecheck
   * intake element when the storefront supplies an element-mode provider
   * config (publishable key lives there — NEVER in this blueprint).
   */
  filecheck: Bd.optional(),
  /**
   * Let the customer attach several files here (artwork plus fonts, a set
   * of photos, a mailing list). Attachments only: the price never depends
   * on them. Direct uploads only - a Filecheck intake or a designer fills
   * the field with ONE artwork, so `multiple` is ignored there.
   */
  multiple: ze().optional(),
  /** With `multiple`: how many files at most (2-10, default 5). */
  maxFiles: Z().int().min(2).max(10).optional()
}), Hd = 10, Wd = 5;
function Rr(e) {
  return !e.multiple || e.display === "producer" || e.providerId === "filecheck" ? 1 : Math.min(Hd, Math.max(2, e.maxFiles ?? Wd));
}
const Kd = Dt.extend({
  type: tt("info"),
  /** summary: live selection recap. note: static text block. */
  display: we(["summary", "note"]).default("note"),
  body: V().optional()
}), Gd = wd("type", [
  jd,
  Ld,
  Dd,
  zd,
  qd,
  Ud,
  Vd,
  Zd,
  Kd
]);
function ii(e) {
  return e.type === "select-one" || e.type === "select-many";
}
function zt(e) {
  return ii(e) || e.type === "quantities";
}
function wn(e) {
  return e.type === "quantity" || e.type === "quantities";
}
const Yd = ce({
  id: V().min(1),
  title: V(),
  fields: be(Gd)
}), Qd = ce({
  /** axisFieldId -> choiceId, exactly one entry per axis (validate.ts). */
  select: fs(V()),
  sku: V().optional(),
  /** Absolute replacement for pricing.basePrice.amount while selected. */
  price: Z().nonnegative().optional(),
  available: ze().default(!0),
  /** Platform hook (e.g. Shopify variant GID) for adapters that map to real variants. */
  platformVariantId: V().optional()
}), Jd = ce({
  /** Field ids of select-one fields forming the matrix (e.g. ["size","color"]). */
  axes: be(V().min(1)).min(1),
  combinations: be(Qd)
}), ms = ce({
  version: tt(Ii).default(Ii),
  productId: V().min(1),
  title: V(),
  /** stacked: all sections at once. wizard: one section per step. */
  layout: we(["stacked", "wizard"]).default("stacked"),
  pricing: Md.default({}),
  variants: Jd.optional(),
  sections: be(Yd)
});
ce({
  w: Z().positive(),
  h: Z().positive(),
  unit: Mr
});
function rt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && typeof e.w == "number" && typeof e.h == "number";
}
function Xd(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.values(e).every((t) => typeof t == "number");
}
const di = ["qty", "w", "h", "area", "pages"], Fr = {
  min: [2, void 0],
  max: [2, void 0],
  round: [1, 2],
  ceil: [1, 1],
  floor: [1, 1],
  abs: [1, 1],
  sqrt: [1, 1],
  band: [4, void 0]
}, Go = Object.keys(Fr), cr = 500, ba = 10, ef = 64, tf = /^[A-Za-z][A-Za-z0-9_]{0,31}$/, nf = /^[A-Za-z0-9_.,+\-*/^()\s]$/;
class Yo extends Error {
  constructor(n) {
    super(n.message);
    Kt(this, "detail");
    this.detail = n;
  }
}
function Oe(e, t, n) {
  throw new Yo({ code: e, message: t, at: n });
}
function rf(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const i = e[n];
    if (nf.test(i) || Oe("formula-character", `"${i}" can't be used in a formula. Use + - * / ^, brackets, numbers and names.`, n), /\s/.test(i)) {
      n += 1;
      continue;
    }
    const r = /^(\d+(\.\d+)?|\.\d+)/.exec(e.slice(n));
    if (r) {
      const a = r[0];
      e[n + a.length] === "." && Oe("formula-syntax", `"${a}." is not a number.`, n), t.push({ type: "number", value: Number(a), text: a, at: n }), n += a.length;
      continue;
    }
    const s = /^[A-Za-z_][A-Za-z0-9_]*/.exec(e.slice(n));
    if (s) {
      t.push({ type: "name", text: s[0], at: n }), n += s[0].length;
      continue;
    }
    i === "." && Oe("formula-syntax", 'A "." must be part of a number, like 0.25.', n), t.push({ type: "op", text: i, at: n }), n += 1;
  }
  return t.push({ type: "end", text: "", at: e.length }), t;
}
class sf {
  constructor(t) {
    Kt(this, "tokens");
    Kt(this, "index", 0);
    Kt(this, "depth", 0);
    Kt(this, "names", []);
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
    this.peek().type === "end" && Oe("formula-syntax", "Enter a formula.", 0);
    const t = this.expression(), n = this.peek();
    return n.type !== "end" && this.unexpected(n), t;
  }
  expression() {
    this.depth += 1, this.depth > ef && Oe("formula-too-long", "This formula is nested too deeply.", this.peek().at);
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
      return n.kind === "binary" && n.op === "^" && Oe("formula-ambiguous-power", "Add brackets: -(2^2) or (-2)^2.", t.at), { kind: "negate", operand: n };
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
      return this.isOp("(") ? this.call(t, n) : (n in Fr && Oe("formula-syntax", `${t.text} needs brackets, like ${n}(a, b).`, t.at), this.names.push({ name: n, written: t.text, at: t.at }), this.noImplicitProduct(t.text), { kind: "name", name: n, written: t.text, at: t.at });
    }
    if (t.type === "op" && t.text === "(") {
      const n = this.expression();
      return this.expect(")", t.at), this.noImplicitProduct(")"), { kind: "group", inner: n };
    }
    return this.index -= 1, this.unexpected(t);
  }
  call(t, n) {
    const i = Fr[n];
    i || Oe("formula-unknown-name", `There is no function "${t.text}". You can use: ${Go.join(", ")}.`, t.at);
    const r = this.next(), s = [];
    if (!this.isOp(")"))
      for (s.push(this.expression()); this.isOp(","); )
        this.next(), s.push(this.expression());
    this.expect(")", r.at);
    const [a, o] = i;
    if ((s.length < a || o !== void 0 && s.length > o) && Oe("formula-arity", Qo(n), t.at), n === "band" && af(s, t.at), n === "round" && s[1] !== void 0) {
      const l = Ni(s[1]);
      l !== void 0 && !(Number.isInteger(l) && l >= 0 && l <= 4) && Oe("formula-arity", "round(x, d) rounds to 0 to 4 decimals.", t.at);
    }
    return this.noImplicitProduct(")"), { kind: "call", fn: n, args: s };
  }
  expect(t, n) {
    const i = this.peek();
    if (i.type === "op" && i.text === t) {
      this.next();
      return;
    }
    i.type === "end" && Oe("formula-syntax", "A bracket opened here is never closed.", n), this.unexpected(i);
  }
  /** "2area" or "2(…)": say what is missing instead of a bare "unexpected". */
  noImplicitProduct(t) {
    const n = this.peek();
    if (n.type === "number" || n.type === "name" || n.type === "op" && n.text === "(") {
      const i = n.type === "op" ? "(" : n.text;
      Oe("formula-syntax", `Missing an operator between ${t} and ${i}: write ${t} * ${i}.`, n.at);
    }
  }
  unexpected(t) {
    if (t.type === "end" && Oe("formula-syntax", "The formula ends too early.", t.at), t.text === ",") {
      const n = this.previous(), i = this.tokens[this.index + 1];
      (n == null ? void 0 : n.type) === "number" && (i == null ? void 0 : i.type) === "number" && Oe("formula-syntax", `Use a dot for decimals: ${n.text}.${i.text}.`, t.at), Oe("formula-syntax", 'A "," only separates the values of a function.', t.at);
    }
    t.text === ")" && Oe("formula-syntax", 'This ")" has no matching "(".', t.at), Oe("formula-syntax", `"${t.text}" is not expected here.`, t.at);
  }
}
function Qo(e) {
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
function Ni(e) {
  if (e.kind === "number")
    return e.value;
  if (e.kind === "group")
    return Ni(e.inner);
  if (e.kind === "negate") {
    const t = Ni(e.operand);
    return t === void 0 ? void 0 : -t;
  }
}
function af(e, t) {
  (e.length - 1) % 2 === 0 && Oe("formula-arity", Qo("band"), t);
  let n;
  for (let i = 1; i < e.length - 1; i += 2) {
    const r = Ni(e[i]);
    r !== void 0 && (n !== void 0 && r <= n && Oe("formula-arity", `The limits in band() must increase (${r} after ${n}).`, t), n = r);
  }
}
function gs(e) {
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
    const t = new sf(rf(e));
    return { ok: !0, ast: t.parse(), names: t.names };
  } catch (t) {
    if (t instanceof Yo)
      return { ok: !1, error: t.detail };
    throw t;
  }
}
function of(e) {
  const t = [], n = e.steps ?? [];
  n.length > ba && t.push({
    path: ["steps"],
    code: "formula-too-long",
    message: `A formula can have at most ${ba} steps.`
  });
  const i = /* @__PURE__ */ new Set([...di, ...Go]), r = /* @__PURE__ */ new Map();
  n.forEach((a, o) => {
    const l = a.name.toLowerCase();
    tf.test(a.name) ? i.has(l) ? t.push({
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
    const c = gs(a);
    if (!c.ok) {
      t.push({ path: o, code: c.error.code, message: c.error.message });
      return;
    }
    for (const { name: u, written: d } of c.names) {
      if (di.includes(u))
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
            ...di,
            ...n.slice(0, l).map((v) => v.name)
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
function vs(e) {
  const t = /* @__PURE__ */ new Set(), n = [...(e.steps ?? []).map((i) => i.expression), e.expression];
  for (const i of n) {
    const r = gs(i);
    if (r.ok)
      for (const { name: s } of r.names)
        di.includes(s) && t.add(s);
  }
  return t;
}
const Jo = /* @__PURE__ */ new Set([
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
]), Xo = /* @__PURE__ */ new Set(["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"]);
function el(e) {
  const t = e.toUpperCase();
  return Jo.has(t) ? 0 : Xo.has(t) ? 3 : 2;
}
function lf(e) {
  return /^[A-Z]{3}$/.test(e) && (Jo.has(e) || Xo.has(e) || cf.has(e));
}
const cf = /* @__PURE__ */ new Set([
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
class ln extends Error {
}
const vn = (e) => typeof e == "object" && e !== null && !Array.isArray(e);
function uf(e) {
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
function df(e) {
  const t = /* @__PURE__ */ new Map(), n = Array.isArray(e.sections) ? e.sections : [];
  for (const i of n) {
    const r = vn(i) && Array.isArray(i.fields) ? i.fields : [];
    for (const s of r)
      vn(s) && typeof s.id == "string" && Array.isArray(s.options) && t.set(s.id, new Set(s.options.flatMap((a) => vn(a) && typeof a.id == "string" ? [a.id] : [])));
  }
  return t;
}
function ff(e, t, n) {
  if (!vn(t))
    throw new ln("The matrix table must be an object.");
  const { choices: i, prices: r, off: s = [], skus: a = [] } = t;
  if (!Array.isArray(i) || i.length !== e.length || !i.every((f) => Array.isArray(f) && f.every((m) => typeof m == "string")))
    throw new ln("The matrix table needs one list of choice ids per axis.");
  const o = uf(i);
  if (!Array.isArray(r) || r.length !== o.length)
    throw new ln(`The matrix table has ${Array.isArray(r) ? r.length : 0} prices for ${o.length} combinations.`);
  if (!r.every((f) => f === null || typeof f == "number" && Number.isFinite(f) && f >= 0))
    throw new ln("Matrix prices must be numbers of zero or more, or null.");
  const l = (f) => Number.isInteger(f) && f >= 0 && f < o.length;
  if (!Array.isArray(s) || !s.every(l))
    throw new ln("Matrix unavailable positions are out of range.");
  if (!Array.isArray(a) || !a.every((f) => Array.isArray(f) && f.length === 2 && l(f[0]) && typeof f[1] == "string"))
    throw new ln("Matrix SKUs must be [position, sku] pairs.");
  const c = new Set(s), u = new Map(a.map(([f, m]) => [f, m])), d = [];
  return o.forEach((f, m) => {
    const v = r[m], y = u.get(m);
    if (v === null && !c.has(m) && y === void 0 || f.some((N, w) => n.has(e[w]) && !n.get(e[w]).has(N)))
      return;
    const _ = {
      select: Object.fromEntries(e.map((N, w) => [N, f[w]])),
      available: !c.has(m)
    };
    v !== null && (_.price = v), y !== void 0 && (_.sku = y), d.push(_);
  }), d;
}
function pf(e) {
  if (!vn(e) || !vn(e.variants) || e.variants.table === void 0)
    return e;
  const { table: t, ...n } = e.variants, i = Array.isArray(n.axes) ? n.axes.filter((r) => typeof r == "string") : [];
  return {
    ...e,
    variants: { ...n, axes: i, combinations: ff(i, t, df(e)) }
  };
}
function tl(e) {
  let t;
  try {
    t = pf(e);
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
  const n = ms.safeParse(t);
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
  const i = nl(n.data);
  return {
    ok: !i.some((r) => r.severity === "error"),
    value: n.data,
    issues: i
  };
}
ms.superRefine((e, t) => {
  for (const n of nl(e))
    n.severity === "error" && t.addIssue({
      code: I.custom,
      path: n.path,
      message: `${n.code}: ${n.message}`
    });
});
function nl(e) {
  const t = [], n = (c, u, d, f = "error") => t.push({ path: c, code: u, message: d, severity: f }), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  let a = 0, o, l = !1;
  e.sections.forEach((c, u) => {
    r.has(c.id) && n(["sections", u, "id"], "duplicate-section-id", `Duplicate section id "${c.id}".`), r.add(c.id), c.fields.forEach((d, f) => {
      const m = ["sections", u, "fields", f];
      if (i.has(d.id) ? n([...m, "id"], "duplicate-field-id", `Duplicate field id "${d.id}".`) : i.set(d.id, { field: d, path: m }), (d.id === Ho || d.id.startsWith("file.")) && n([...m, "id"], "reserved-field-id", `Field id "${d.id}" is reserved for condition refs.`), wn(d) && (o ?? (o = m), Pr(d.visibleWhen) || (a += 1, a > 1 && n(m, "multiple-quantity-fields", "Only one quantity field can show unconditionally. Give the others a visibility rule so a single quantity field is shown at a time."))), d.role) {
        const v = s.get(d.role);
        v ? n([...m, "role"], "duplicate-role", `Role "${d.role}" is already used by field "${v}" — only one field per role.`) : s.set(d.role, d.id);
      }
      d.type === "file" && (l = !0);
    });
  });
  for (const { field: c, path: u } of i.values()) {
    gf(c, u, n), vf(c, u, n), yf(c, u, i, n);
    const d = [
      { mods: c.priceModifiers, base: [...u, "priceModifiers"] }
    ];
    zt(c) && c.options.forEach((f, m) => {
      d.push({
        mods: f.priceModifiers,
        base: [...u, "options", m, "priceModifiers"]
      });
    });
    for (const { mods: f, base: m } of d)
      f.forEach((v, y) => {
        kf(v, [...m, y], i, l, n);
      });
    c.type === "quantities" && wf(c, u, n);
  }
  return Tf(e.pricing.basePrice, ["pricing", "basePrice"], n), e.variants && Cf(e, i, n), o && !mf(e) && n(o, "quantity-has-no-effect", "Changing the quantity does not change the price: every amount in this product is added once per order. If customers can buy more than one, set the base price to per unit, or price the options per unit instead of fixed.", "warning"), lf(e.pricing.currency) || n(["pricing", "currency"], "unknown-currency", `Currency "${e.pricing.currency}" is not in the known list; totals will round to 2 decimals.`, "warning"), t;
}
const hf = /* @__PURE__ */ new Set([
  "perUnit",
  "perPage",
  "perColorPage",
  "perMonoPage",
  "perArea",
  "perLength"
]);
function mf(e) {
  var i;
  const t = e.pricing.basePrice;
  if (t.per === "unit" || t.tiers)
    return !0;
  const n = (r) => {
    var s;
    return hf.has(r.type) || (((s = r.tiers) == null ? void 0 : s.basis) ?? "quantity") === "quantity" && r.tiers !== void 0 || r.type === "formula" && r.formula !== void 0 && vs(r.formula).has("qty");
  };
  for (const r of e.sections)
    for (const s of r.fields)
      if ((i = s.priceModifiers) != null && i.some(n) || zt(s) && s.options.some((a) => {
        var o;
        return (o = a.priceModifiers) == null ? void 0 : o.some(n);
      }))
        return !0;
  return !1;
}
function gf(e, t, n) {
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
  e.type === "quantities" && (e.max !== void 0 && e.min > e.max && n([...t, "min"], "min-gt-max", `min (${e.min}) exceeds max (${e.max}).`), e.maxTotal !== void 0 && e.minTotal > e.maxTotal && n([...t, "minTotal"], "min-gt-max", `minTotal (${e.minTotal}) exceeds maxTotal (${e.maxTotal}).`)), e.type === "select-many" && e.maxSelect !== void 0 && e.minSelect > e.maxSelect && n([...t, "minSelect"], "min-gt-max", `minSelect (${e.minSelect}) exceeds maxSelect (${e.maxSelect}).`), e.type === "dimensions" && (e.minW !== void 0 && e.maxW !== void 0 && e.minW > e.maxW && n([...t, "minW"], "min-gt-max", `minW (${e.minW}) exceeds maxW (${e.maxW}).`), e.minH !== void 0 && e.maxH !== void 0 && e.minH > e.maxH && n([...t, "minH"], "min-gt-max", `minH (${e.minH}) exceeds maxH (${e.maxH}).`)), e.type === "file" && (e.providerId === "filecheck" && !((i = e.filecheck) != null && i.workflowId) && !((r = e.filecheck) != null && r.workflow) && n([...t, "filecheck"], "filecheck-missing-workflow", "Filecheck provider selected but no workflow (id or inline) set; the default uploader will be used.", "warning"), e.multiple && (e.display === "producer" || e.providerId === "filecheck") && n([...t, "multiple"], "multiple-files-ignored", "Multiple files apply to direct uploads only; a designer or Filecheck field takes one artwork.", "warning"), e.filecheck && e.providerId !== "filecheck" && n([...t, "providerId"], "filecheck-missing-workflow", 'Filecheck settings are present but providerId is not "filecheck"; they will be ignored.', "warning"));
}
function vf(e, t, n) {
  if (!zt(e))
    return;
  const i = /* @__PURE__ */ new Set();
  let r = 0;
  e.options.forEach((s, a) => {
    i.has(s.id) && n([...t, "options", a, "id"], "duplicate-choice-id", `Duplicate choice id "${s.id}" in field "${e.id}".`), i.add(s.id), s.default && (r += 1);
  }), e.type === "select-one" && r > 1 && n([...t, "options"], "too-many-defaults", `select-one field "${e.id}" has ${r} default choices.`), e.type === "select-many" && e.maxSelect !== void 0 && r > e.maxSelect && n([...t, "options"], "too-many-defaults", `Default choices (${r}) exceed maxSelect (${e.maxSelect}).`);
}
function yf(e, t, n, i) {
  if (!e.visibleWhen)
    return;
  const r = [...t, "visibleWhen"], s = (a, o) => {
    if (ps(a)) {
      const l = Td.includes(a.ref), c = a.ref === Ho, u = n.get(a.ref);
      if (!l && !c && !u) {
        i(o, "dangling-condition-ref", `Condition references unknown field "${a.ref}".`);
        return;
      }
      if (a.ref === e.id && i(o, "self-condition-ref", `Field "${e.id}" references itself.`), c && wn(e) && i(o, "quantity-ref-on-quantity-field", `Quantity field "${e.id}" cannot be shown or hidden by the quantity.`), u && zt(u.field) && (a.op === "eq" || a.op === "neq" || a.op === "in")) {
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
function il(e, t, n) {
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
const bf = /* @__PURE__ */ new Set(["fixed", "percent", "multiplier", "setup"]), xf = /* @__PURE__ */ new Set(["percent", "multiplier", "formula"]), _f = /^[A-Za-z0-9_-]+$/;
function wf(e, t, n) {
  e.options.forEach((i, r) => {
    const s = [...t, "options", r];
    _f.test(i.id) || n([...s, "id"], "quantities-choice-id", `Option id "${i.id}" may only use letters, digits, "-" and "_".`), i.priceModifiers.forEach((a, o) => {
      var c;
      const l = [...s, "priceModifiers", o];
      a.type === "formula" ? n([...l, "type"], "quantities-choice-modifier", "A formula can't price one option of a quantity per option — put it on the field.") : xf.has(a.type) ? n([...l, "type"], "quantities-choice-modifier", `A "${a.type}" price on one option would change the whole order — price this option per unit, or put the rule on the field.`) : ((c = a.tiers) == null ? void 0 : c.mode) === "graduated" && a.tiers.basis === "quantity" && n([...l, "tiers", "mode"], "quantities-choice-modifier", "Graduated quantity breaks cannot be shared out between options — use flat breaks.");
    });
  });
}
function kf(e, t, n, i, r) {
  if (e.type === "formula" || e.formula !== void 0) {
    Sf(e, t, n, i, r);
    return;
  }
  if (e.tiers && (il(e.tiers, [...t, "tiers"], r), e.tiers.mode === "graduated" && bf.has(e.type) && r([...t, "tiers", "mode"], "tier-basis-invalid", `Graduated tiers are meaningless on a "${e.type}" modifier.`), e.tiers.basis === "pages" && !i && r([...t, "tiers", "basis"], "pages-basis-without-file", "Pages-based tiers need a file field to supply page counts.", "warning")), (e.type === "perPage" || e.type === "perColorPage" || e.type === "perMonoPage") && !i && r([...t, "type"], "pages-basis-without-file", `"${e.type}" pricing needs a file field to supply page counts.`, "warning"), e.type === "perArea" || e.type === "perLength") {
    const s = e.type.toLowerCase();
    if (e.dimensionsField !== void 0) {
      const a = n.get(e.dimensionsField);
      (!a || a.field.type !== "dimensions") && r([...t, "dimensionsField"], `${s}-dangling-dims`, `"${e.dimensionsField}" is not a dimensions field.`);
    } else i || r([...t, "type"], `${s}-missing-source`, `${e.type} pricing has no dimensions field and no file field to read a canvas from.`, "warning");
  }
}
function Sf(e, t, n, i, r) {
  if (e.type !== "formula") {
    r([...t, "formula"], "formula-missing", `Only a formula rule can carry a formula, not a "${e.type}" rule.`);
    return;
  }
  const s = e.formula;
  if (!s) {
    r([...t, "formula"], "formula-missing", "This formula rule has no formula.");
    return;
  }
  for (const l of of(s))
    r([...t, "formula", ...l.path], l.code, l.message);
  e.tiers && r([...t, "tiers"], "formula-tiers", "A formula rule can't have volume breaks — put the breaks in the formula, e.g. with band().");
  const a = vs(s), o = a.has("w") || a.has("h") || a.has("area");
  if (e.dimensionsField !== void 0) {
    const l = n.get(e.dimensionsField);
    (!l || l.field.type !== "dimensions") && r([...t, "dimensionsField"], "formula-dangling-dims", `"${e.dimensionsField}" is not a dimensions field.`);
  } else o && !i && r([...t, "dimensionsField"], "formula-no-size", "This formula uses the size (w, h or area), but there is no size field and no file upload to read it from, so the size is always 0.", "warning");
  a.has("pages") && !i && r([...t, "formula"], "pages-basis-without-file", "This formula uses pages, but there is no file field to supply page counts.", "warning");
}
function Tf(e, t, n) {
  e.tiers && (il(e.tiers, [...t, "tiers"], n), e.tiers.basis !== "quantity" && n([...t, "tiers", "basis"], "tier-basis-invalid", "Base price tiers must use the quantity basis."), e.tiers.mode === "graduated" && e.per === "order" && n([...t, "tiers", "mode"], "tier-basis-invalid", 'Graduated base tiers require per: "unit".'));
}
function Cf(e, t, n) {
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
      const v = r.get(f);
      v && !v.has(m) && n(["variants", "combinations", l, "select", f], "variant-combo-invalid", `"${m}" is not a choice of axis "${f}".`);
    }
    const d = i.axes.map((f) => o.select[f]).join("\0");
    s.has(d) && n(["variants", "combinations", l], "variant-combo-duplicate", "Duplicate variant combination."), s.add(d), o.price !== void 0 && e.pricing.basePrice.tiers && n(["variants", "combinations", l, "price"], "variant-price-with-base-tiers", "Combination price overrides only the untiered base amount; base tiers still apply.", "warning");
  });
}
const jr = "1.0", Af = ce({
  /** Minimum quantity required to trigger this tier (inclusive). */
  minQty: Z().nonnegative(),
  /** Maximum quantity for this tier (inclusive). If omitted, tier spans to infinity. */
  maxQty: Z().nonnegative().optional(),
  /** Price/amount applied for this tier. */
  amount: Z()
}), rl = ce({
  type: we([
    "fixed",
    "perUnit",
    "perPage",
    "perColorPage",
    "perMonoPage",
    "percent",
    "multiplier"
  ]),
  amount: Z(),
  tiers: be(Af).optional()
}), $f = ce({
  /** The field id whose value gates visibility. */
  field: V(),
  /** Show when the field's selected value equals one of these. */
  equals: Yn([V(), be(V())]).optional(),
  /** Show only when a value is present (any non-empty selection). */
  isSet: ze().optional()
}), If = ce({
  id: V().min(1),
  label: V(),
  description: V().optional(),
  image: V().url().optional(),
  color: V().optional(),
  default: ze().optional(),
  priceModifiers: be(rl).default([]),
  /** Dead in v1 runtime; dropped by migration. */
  reveals: be(V()).default([])
}), Nf = we([
  "card-select",
  "image-grid",
  "swatch",
  "pill-toggle",
  "dropdown",
  "number-stepper",
  "file-upload",
  "summary"
]), Ef = ce({
  id: V().min(1),
  type: Nf,
  label: V().optional(),
  helpText: V().optional(),
  required: ze().default(!1),
  options: be(If).default([]),
  min: Z().optional(),
  max: Z().optional(),
  step: Z().optional(),
  defaultValue: Yn([V(), Z()]).optional(),
  accept: be(V()).optional(),
  providerId: V().optional(),
  visibleWhen: $f.optional(),
  priceModifiers: be(rl).default([])
}), Of = ce({
  id: V().min(1),
  title: V(),
  layout: we(["stacked", "tabs"]).default("stacked"),
  fields: be(Ef)
}), Pf = ce({
  version: tt(jr).default(jr),
  productId: V().min(1),
  title: V(),
  currency: V().default("USD"),
  basePrice: Z().nonnegative().default(0),
  sections: be(Of)
});
class Ei extends Error {
  constructor(n) {
    const i = n.map((r) => `${r.code} at ${r.path.join(".") || "<root>"}: ${r.message}`).join("; ");
    super(`Invalid product options: ${i}`);
    Kt(this, "issues");
    this.name = "ProductOptionsError", this.issues = n;
  }
}
function Mf(e) {
  const t = Pf.safeParse(e);
  if (!t.success)
    throw new Ei(t.error.issues.map((c) => ({
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
    version: Ii,
    productId: n.productId,
    title: n.title,
    layout: s ? "wizard" : "stacked",
    pricing: {
      currency: Uf(n.currency, i),
      basePrice: { amount: n.basePrice, per: "order" }
    },
    sections: n.sections.map((c) => ({
      id: c.id,
      title: c.title,
      fields: c.fields.map((u) => {
        const d = jf(u, r, i);
        return d.type === "quantity" && (r = !0), d;
      })
    }))
  }, o = ms.parse(a), l = tl(o);
  if (!l.ok)
    throw new Ei(l.issues.filter((c) => c.severity === "error"));
  return { doc: o, warnings: i };
}
function Rf(e) {
  const t = typeof e == "object" && e !== null ? e.version : void 0;
  if (t === void 0 || t === Ii) {
    const n = tl(e);
    if (!n.ok || !n.value)
      throw new Ei(n.issues.filter((i) => i.severity === "error"));
    return { doc: n.value, warnings: [] };
  }
  if (t === jr)
    return Mf(e);
  throw new Ei([
    {
      path: ["version"],
      code: "unknown-version",
      message: `Unsupported schema version "${String(t)}".`,
      severity: "error"
    }
  ]);
}
function xa(e, t) {
  const { doc: n, warnings: i } = Rf(e);
  return n;
}
const Ff = {
  "card-select": "cards",
  "image-grid": "grid",
  swatch: "swatches",
  "pill-toggle": "pills",
  dropdown: "dropdown"
};
function jf(e, t, n) {
  const i = {
    id: e.id,
    label: e.label,
    helpText: e.helpText,
    required: e.required,
    visibleWhen: Df(e.visibleWhen),
    priceModifiers: e.priceModifiers.map((r) => sl(r, n))
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
        display: Ff[e.type],
        options: e.options.map((r) => Lf(r, n))
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
        min: $n(e.min) ?? 1,
        max: $n(e.max),
        step: $n(e.step) ?? 1,
        defaultValue: $n(typeof e.defaultValue == "number" ? e.defaultValue : void 0) ?? $n(e.min) ?? 1
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
function Lf(e, t) {
  return {
    id: e.id,
    label: e.label,
    description: e.description,
    image: e.image,
    color: e.color,
    default: e.default,
    priceModifiers: e.priceModifiers.map((n) => sl(n, t))
  };
}
function Df(e) {
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
function $n(e) {
  if (e === void 0)
    return;
  const t = Math.round(e);
  return t >= 1 ? t : void 0;
}
function sl(e, t) {
  return !e.tiers || e.tiers.length === 0 ? { type: e.type, amount: e.amount } : {
    type: e.type,
    amount: e.amount,
    tiers: {
      basis: "quantity",
      mode: "flat",
      rows: zf(e.tiers, e.amount, t)
    }
  };
}
function zf(e, t, n) {
  qf(e) && n.push("Overlapping v1 tiers detected; earlier tiers win in the overlap (v1 behavior preserved).");
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
function qf(e) {
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
function Uf(e, t) {
  const n = e.toUpperCase();
  return /^[A-Z]{3}$/.test(n) ? n : (t.push(`Currency "${e}" is not an ISO 4217 code; defaulting to USD.`), "USD");
}
const _a = "1.0", al = we(["mm", "cm", "in", "pt", "px"]), Vf = we(["pending", "ready", "failed"]), Bf = we(["info", "warning", "error"]), Zf = ce({
  /** 1-based page index. */
  page: Z().int().positive(),
  w: Z().nonnegative(),
  h: Z().nonnegative(),
  unit: al.default("mm")
}), Hf = ce({
  w: Z().nonnegative(),
  h: Z().nonnegative(),
  /** Bleed applied around the trim box, in `unit`. */
  bleed: Z().nonnegative().default(0),
  unit: al.default("mm")
}), Wf = ce({
  /** Dominant color model detected in the file. */
  model: we(["RGB", "CMYK", "Gray", "Mixed", "Unknown"]).default("Unknown"),
  /** Named spot colors (e.g. Pantone) found in the file. */
  spot: be(V()).default([])
}), Kf = ce({
  /** Machine-readable code, e.g. "low-dpi", "not-embedded-font", "out-of-gamut". */
  code: V(),
  severity: Bf.default("warning"),
  message: V().optional(),
  /** 1-based page index the issue applies to, if page-specific. */
  page: Z().int().positive().optional()
}), ys = ce({
  /** Contract version, for forward/backward compatibility. */
  version: tt(_a).default(_a),
  /** Stable id assigned by the basic uploader; correlates feeds to a file. */
  fileId: V().min(1),
  /** Who produced this metadata. Free-form, but reserve known sources. */
  source: V().default("custom"),
  status: Vf.default("pending"),
  /** Original file name and MIME type, if known. */
  fileName: V().optional(),
  mimeType: V().optional(),
  fileSizeBytes: Z().int().nonnegative().optional(),
  /** Total page count. Absent means "unknown" — pricing must fall back. */
  pages: Z().int().nonnegative().optional(),
  colorPages: Z().int().nonnegative().optional(),
  monoPages: Z().int().nonnegative().optional(),
  pageSizes: be(Zf).optional(),
  canvas: Hf.optional(),
  colors: Wf.optional(),
  issues: be(Kf).default([]),
  /** Provider-specific extras that don't fit the core contract. */
  raw: fs(Zo()).optional()
}), Gf = ce({
  pages: ze().default(!1),
  colorDetection: ze().default(!1),
  pageSizes: ze().default(!1),
  canvas: ze().default(!1),
  preflightIssues: ze().default(!1)
}), Yf = ce({
  id: V().min(1),
  name: V(),
  /**
   * "push" = provider POSTs metadata to us; "pull" = we fetch from `endpoint`;
   * "element" = provider renders its own embedded uploader (e.g. the
   * Filecheck intake element) in place of the basic dropzone.
   */
  mode: we(["push", "pull", "element"]).default("push"),
  endpoint: V().url().optional(),
  capabilities: Gf.default({}),
  /** element mode: publishable key (pk_live_/pk_test_ — browser-safe, store-level). */
  publishableKey: V().optional(),
  /** element mode: optional sub-tenant scope. */
  agentId: V().optional(),
  /** element mode: override the provider SDK script URL (staging/local dev). */
  scriptUrl: V().url().optional(),
  /** element mode: override the provider iframe URL (local dev). */
  iframeSrc: V().url().optional(),
  /** element mode: create preview sessions (unmetered, webhook-suppressed). */
  preview: ze().optional()
}), Oi = [
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
], Qf = {
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
};
function Jf(e) {
  const t = /\.([A-Za-z0-9]{1,16})$/.exec(e.trim());
  return t ? t[1].toLowerCase() : "";
}
function Xf(e) {
  const t = e.replace(/^\./, "").toLowerCase();
  return Oi.find((n) => n.extensions.includes(t));
}
function bs(e) {
  const t = /* @__PURE__ */ new Set(), n = (i) => i.extensions.forEach((r) => t.add(r));
  for (const i of e) {
    const r = i.trim().toLowerCase();
    if (!r)
      continue;
    if (r.includes("/")) {
      for (const o of Oi) {
        const l = o.mime === r || Qf[o.extensions[0]] === r, c = r !== "application/pdf" && o.mimeTypes.includes(r);
        (l || c) && n(o);
      }
      continue;
    }
    const s = Xf(r);
    if (s) {
      n(s);
      continue;
    }
    const a = r.split(/[^a-z0-9]+/).filter(Boolean);
    for (const o of Oi)
      a.some((l) => o.words.includes(l)) && n(o);
  }
  return [...t];
}
function ep(e) {
  return bs(e).map((t) => `.${t}`).join(",");
}
function tp(e, t) {
  const n = bs(e);
  return n.length === 0 || n.includes(Jf(t));
}
function np(e) {
  const t = bs(e);
  return Oi.filter((n) => n.extensions.some((i) => t.includes(i))).map((n) => n.label).join(", ");
}
const ol = {
  mm: 1e-3,
  cm: 0.01,
  in: 0.0254,
  pt: 0.0254 / 72,
  px: void 0
}, ip = {
  sqm: 1,
  sqft: 0.3048 * 0.3048,
  sqin: 0.0254 * 0.0254
};
function ll(e, t, n, i) {
  const r = ol[n];
  return r === void 0 || e <= 0 || t <= 0 ? 0 : e * r * (t * r) / ip[i];
}
function xs(e, t) {
  var n;
  if (e.dimensionsField !== void 0) {
    const i = t.selections[e.dimensionsField];
    return rt(i) ? i : void 0;
  }
  return (n = t.file) == null ? void 0 : n.canvas;
}
function cl(e, t) {
  const n = xs(e, t);
  return n ? ll(n.w, n.h, n.unit, e.areaUnit ?? "sqm") : 0;
}
function rp(e, t) {
  if (e === "quantity")
    return t.quantity;
  const n = sp(e, t);
  return Xd(n) ? Object.keys(n).filter((i) => (n[i] ?? 0) > 0) : n;
}
function sp(e, t) {
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
function wa(e) {
  return e !== void 0 && e !== "" && !(Array.isArray(e) && e.length === 0);
}
function ap(e, t) {
  const n = rp(e.ref, t);
  if (e.op === "isSet")
    return wa(n);
  if (e.op === "notSet")
    return !wa(n);
  if (n === void 0)
    return !1;
  switch (e.op) {
    case "eq":
      return ka(n, e.value);
    case "neq":
      return !ka(n, e.value);
    case "in": {
      const i = Array.isArray(e.value) ? e.value.map(String) : e.value !== void 0 ? [String(e.value)] : [];
      return Array.isArray(n) ? n.some((r) => i.includes(String(r))) : rt(n) ? !1 : i.includes(String(n));
    }
    case "gt":
    case "gte":
    case "lt":
    case "lte": {
      if (Array.isArray(n) || rt(n))
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
function ka(e, t) {
  if (Array.isArray(e)) {
    if (Array.isArray(t)) {
      const n = t.map(String);
      return e.some((i) => n.includes(String(i)));
    }
    return t !== void 0 && e.map(String).includes(String(t));
  }
  return rt(e) ? !1 : Array.isArray(t) ? t.map(String).includes(String(e)) : t !== void 0 && String(e) === String(t);
}
function ul(e, t) {
  if (!e)
    return !0;
  const n = (s) => ps(s) ? ap(s, t) : ul(s, t), i = e.all === void 0 || e.all.every(n), r = e.any === void 0 || e.any.length === 0 || e.any.some(n);
  return i && r;
}
function Sa(e, t) {
  return ul(e.visibleWhen, t);
}
function _s(e, t, n) {
  return Sa(t, n) ? !wn(t) || Pr(t.visibleWhen) ? !0 : !e.sections.some((i) => i.fields.some((r) => wn(r) && Pr(r.visibleWhen) && Sa(r, n))) : !1;
}
const op = {
  m: 1,
  ft: 0.3048,
  in: 0.0254,
  cm: 0.01
};
function Lr(e, t, n) {
  const i = ol[t];
  return i === void 0 || e <= 0 ? 0 : e * i / op[n];
}
function lp(e, t, n) {
  return n === "w" ? e : n === "max" ? Math.max(e, t) : t;
}
function dl(e, t) {
  const n = xs(e, t);
  return n ? Lr(lp(n.w, n.h, e.lengthAxis), n.unit, e.lengthUnit ?? "m") : 0;
}
const cp = 256, ci = /* @__PURE__ */ new Map();
function Ta(e) {
  const t = ci.get(e);
  if (t !== void 0)
    return t;
  const n = gs(e), i = n.ok ? n.ast : null;
  return ci.size >= cp && ci.clear(), ci.set(e, i), i;
}
function up(e, t) {
  const n = new Map(Object.entries(t));
  for (const s of e.steps ?? []) {
    const a = Ta(s.expression);
    if (!a)
      return Number.NaN;
    n.set(s.name.toLowerCase(), Xt(a, n));
  }
  const i = Ta(e.expression);
  if (!i)
    return Number.NaN;
  const r = Xt(i, n);
  return Number.isFinite(r) ? r : Number.NaN;
}
function Xt(e, t) {
  switch (e.kind) {
    case "number":
      return e.value;
    case "name":
      return t.get(e.name) ?? Number.NaN;
    case "group":
      return Xt(e.inner, t);
    case "negate":
      return -Xt(e.operand, t);
    case "binary": {
      const n = Xt(e.left, t), i = Xt(e.right, t);
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
          return dp(n, i);
      }
      break;
    }
    case "call":
      return fp(e.fn, e.args.map((n) => Xt(n, t)));
  }
  return Number.NaN;
}
function dp(e, t) {
  if (!Number.isInteger(t))
    return Math.pow(e, t);
  let n = Math.abs(t), i = 1, r = e;
  for (; n > 0; )
    n % 2 === 1 && (i *= r), r *= r, n = Math.floor(n / 2);
  return t < 0 ? 1 / i : i;
}
function fp(e, t) {
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
function pp(e, t) {
  var r;
  const n = xs(e, t), i = e.lengthUnit ?? "m";
  return {
    qty: t.quantity,
    w: n ? ur(Lr(n.w, n.unit, i)) : 0,
    h: n ? ur(Lr(n.h, n.unit, i)) : 0,
    area: n ? ur(ll(n.w, n.h, n.unit, e.areaUnit ?? "sqm")) : 0,
    pages: ((r = t.file) == null ? void 0 : r.pages) ?? 0
  };
}
function ur(e) {
  return e === 0 ? 0 : Number(e.toPrecision(12));
}
function hp(e, t) {
  return e.formula ? up(e.formula, pp(e, t)) : Number.NaN;
}
function it(e, t) {
  const i = 10 ** el(t);
  return Math.round((e + Number.EPSILON) * i) / i;
}
function mp(e) {
  const t = [];
  for (const n of e.sections)
    for (const i of n.fields)
      wn(i) && t.push(i);
  return t;
}
function ri(e, t, n) {
  const i = mp(e);
  if (i.length <= 1)
    return i[0];
  const r = { selections: t, file: n, quantity: 1 };
  return i.find((s) => _s(e, s, r)) ?? i[0];
}
function fl(e, t, n) {
  const i = ri(e, t, n);
  return i ? i.type === "quantities" ? ws(Ot(i, t[i.id])) : Qn(i, t[i.id]) : 1;
}
function Qn(e, t) {
  const n = typeof t == "number" ? t : typeof t == "string" && t.trim() !== "" ? Number(t) : e.defaultValue;
  return Number.isNaN(n) ? Dr(e, e.defaultValue) : Dr(e, n);
}
function Ot(e, t) {
  const n = {};
  if (typeof t != "object" || t === null || Array.isArray(t))
    return n;
  const i = t;
  for (const r of e.options) {
    const s = i[r.id], a = typeof s == "number" ? s : typeof s == "string" && s.trim() !== "" ? Number(s) : Number.NaN;
    !Number.isFinite(a) || Math.round(a) <= 0 || (n[r.id] = Dr(e, a));
  }
  return n;
}
function ws(e) {
  let t = 0;
  for (const n of Object.values(e))
    t += n;
  return t;
}
function Dr(e, t) {
  const n = e.step;
  let i = Math.round(t);
  return i = e.min + Math.round((i - e.min) / n) * n, i < e.min && (i = e.min), e.max !== void 0 && i > e.max && (i = e.min + Math.floor((e.max - e.min) / n) * n), i;
}
function Jn(e, t) {
  for (const n of e)
    if (n.upTo === void 0 || t <= n.upTo)
      return n;
  return e[e.length - 1];
}
function Mn(e, t) {
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
function gp(e, t) {
  const n = Hi(e, t);
  if (n != null && n.sku)
    return n.sku;
  const i = [];
  for (const r of e.sections)
    for (const s of r.fields) {
      if (!ii(s))
        continue;
      const a = t[s.id], o = Array.isArray(a) ? a : typeof a == "string" ? [a] : [];
      for (const l of s.options)
        o.includes(l.id) && l.sku && i.push(l.sku);
    }
  return i.length > 0 ? i.join("-") : void 0;
}
function vp(e, t, n, i) {
  for (const a of e.sections)
    for (const o of a.fields) {
      if (o.id !== n || !zt(o))
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
function yp(e, t) {
  const n = Hi(e, t);
  if (n && !n.available)
    return !0;
  for (const i of e.sections)
    for (const r of i.fields) {
      if (!zt(r))
        continue;
      const s = t[r.id], a = r.type === "quantities" ? Object.keys(Ot(r, s)) : Array.isArray(s) ? s : typeof s == "string" ? [s] : [];
      for (const o of r.options)
        if (a.includes(o.id) && o.disabled)
          return !0;
    }
  return !1;
}
function zr(e, t) {
  const n = fl(e, t.selections, t.file), i = t.quantity ?? n, r = ri(e, t.selections, t.file), s = (r == null ? void 0 : r.type) === "quantities" ? { fieldId: r.id, scale: n > 0 ? i / n : 0 } : void 0, a = {
    selections: t.selections,
    file: t.file,
    quantity: i
  }, o = e.pricing.currency, l = [], c = Hi(e, t.selections), u = yp(e, t.selections);
  let d = !1;
  const f = gp(e, t.selections), m = bp(e.pricing.basePrice, c == null ? void 0 : c.price, i);
  l.push({
    sourceId: "base",
    label: "Base price",
    stage: "base",
    type: "base",
    amount: it(m, o)
  });
  let v = m;
  const y = pl(e, a, s);
  for (const { sourceId: R, label: O, modifier: Q, units: W } of y) {
    const H = _p(Q, a, W);
    if (H !== void 0) {
      if (Number.isNaN(H)) {
        d = !0;
        continue;
      }
      v += H, l.push({
        sourceId: R,
        label: O,
        stage: "additive",
        type: Q.type,
        amount: it(H, o)
      });
    }
  }
  const _ = v;
  for (const { sourceId: R, label: O, modifier: Q } of y) {
    if (Q.type !== "percent")
      continue;
    const W = Zt(Q, a), H = v * (W / 100);
    v += H, l.push({
      sourceId: R,
      label: O,
      stage: "percent",
      type: "percent",
      amount: it(H, o)
    });
  }
  for (const { sourceId: R, label: O, modifier: Q } of y) {
    if (Q.type !== "multiplier")
      continue;
    const W = Zt(Q, a), H = v * W - v;
    v += H, l.push({
      sourceId: R,
      label: O,
      stage: "multiplier",
      type: "multiplier",
      amount: it(H, o)
    });
  }
  e.pricing.setupFee !== void 0 && e.pricing.setupFee > 0 && (v += e.pricing.setupFee, l.push({
    sourceId: "setup-fee",
    label: "Setup fee",
    stage: "setup",
    type: "setup",
    amount: it(e.pricing.setupFee, o)
  }));
  for (const { sourceId: R, label: O, modifier: Q } of y) {
    if (Q.type !== "setup")
      continue;
    const W = Zt(Q, a);
    v += W, l.push({
      sourceId: R,
      label: O,
      stage: "setup",
      type: "setup",
      amount: it(W, o)
    });
  }
  const N = Math.max(e.pricing.minimumPrice ?? 0, 0);
  if (v < N) {
    const R = N - v;
    v = N, l.push({
      sourceId: "adjustment:minimum",
      label: "Minimum order adjustment",
      stage: "adjustment",
      type: "minimum",
      amount: it(R, o)
    });
  }
  const w = it(v, o), j = u ? "combination" : d ? "formula" : void 0;
  return {
    currency: o,
    quantity: i,
    unavailable: j !== void 0,
    ...j ? { unavailableReason: j } : {},
    sku: f,
    base: it(m, o),
    subtotal: it(_, o),
    total: w,
    unitPrice: it(v / Math.max(i, 1), o),
    lines: l
  };
}
function bp(e, t, n) {
  const i = t ?? e.amount, r = e.tiers;
  return e.per === "order" ? r ? Jn(r.rows, n).amount : i : r ? r.mode === "graduated" ? Mn(n, r.rows) : Jn(r.rows, n).amount * n : i * n;
}
function pl(e, t, n) {
  const i = [];
  for (const r of e.sections)
    for (const s of r.fields) {
      if (!_s(e, s, t))
        continue;
      for (const o of s.priceModifiers)
        i.push({
          sourceId: s.id,
          label: s.label ?? s.id,
          modifier: o
        });
      if (s.type === "quantities") {
        const o = Ot(s, t.selections[s.id]), l = (n == null ? void 0 : n.fieldId) === s.id ? n.scale : 1;
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
      if (!ii(s))
        continue;
      const a = xp(s.id, t.selections);
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
function xp(e, t) {
  const n = t[e];
  return n === void 0 ? [] : Array.isArray(n) ? n : typeof n == "object" ? [] : [String(n)];
}
function Rn(e, t) {
  var n, i;
  switch (((n = e.tiers) == null ? void 0 : n.basis) ?? "quantity") {
    case "quantity":
      return t.quantity;
    case "pages":
      return ((i = t.file) == null ? void 0 : i.pages) ?? 0;
    case "area":
      return cl(e, t);
    case "length":
      return dl(e, t);
  }
}
function Zt(e, t) {
  return e.tiers ? Jn(e.tiers.rows, Rn(e, t)).amount : e.amount;
}
function _p(e, t, n = t.quantity) {
  var r, s, a, o, l, c, u;
  const i = n;
  switch (e.type) {
    case "percent":
    case "multiplier":
    case "setup":
      return;
    case "fixed":
      return Zt(e, t);
    case "perUnit":
      return ((r = e.tiers) == null ? void 0 : r.mode) === "graduated" ? Mn(Rn(e, t), e.tiers.rows) : Zt(e, t) * i;
    case "perPage":
    case "perColorPage":
    case "perMonoPage": {
      const d = e.type === "perPage" ? ((s = t.file) == null ? void 0 : s.pages) ?? 0 : e.type === "perColorPage" ? ((a = t.file) == null ? void 0 : a.colorPages) ?? 0 : ((o = t.file) == null ? void 0 : o.monoPages) ?? 0;
      return ((l = e.tiers) == null ? void 0 : l.mode) === "graduated" ? Mn(Rn(e, t), e.tiers.rows) * i : Zt(e, t) * d * i;
    }
    case "perArea": {
      const d = cl(e, t);
      return ((c = e.tiers) == null ? void 0 : c.mode) === "graduated" ? Mn(Rn(e, t), e.tiers.rows) * i : Zt(e, t) * d * i;
    }
    case "formula":
      return hp(e, t);
    case "perLength": {
      const d = dl(e, t);
      return ((u = e.tiers) == null ? void 0 : u.mode) === "graduated" ? Mn(Rn(e, t), e.tiers.rows) * i : Zt(e, t) * d * i;
    }
  }
}
const wp = 5;
function kp(e, t) {
  const n = ri(e, t.selections, t.file);
  if (!n)
    return;
  const i = zr(e, t), r = i.quantity;
  if (r <= 0 || i.unavailable)
    return;
  const s = { selections: t.selections, file: t.file, quantity: r }, a = pl(e, s).map(({ modifier: u }) => u), o = Sp(e, a), l = /* @__PURE__ */ new Set();
  for (const { table: u } of o)
    for (const d of u.rows) {
      if (d.upTo === void 0)
        continue;
      const f = Tp(n, r, Math.floor(d.upTo) + 1);
      f !== void 0 && f > r && l.add(f);
    }
  const c = [...l].sort((u, d) => u - d).slice(0, wp);
  for (const u of c) {
    const d = zr(e, { ...t, quantity: u });
    if (!(d.unavailable || d.unitPrice >= i.unitPrice))
      return {
        add: u - r,
        quantity: u,
        unitPrice: d.unitPrice,
        percentOff: Cp(o, r, u)
      };
  }
}
function Sp(e, t) {
  const n = [], i = e.pricing.basePrice.tiers;
  i && i.basis === "quantity" && n.push({ table: i, percent: !1 });
  for (const r of t)
    r.tiers && r.tiers.basis === "quantity" && n.push({ table: r.tiers, percent: r.type === "percent" });
  return n;
}
function Tp(e, t, n) {
  if (e.type === "quantities") {
    const s = Math.ceil((n - t) / e.step), a = t + Math.max(s, 0) * e.step;
    return e.maxTotal !== void 0 && a > e.maxTotal ? void 0 : a;
  }
  const i = Math.ceil((n - e.min) / e.step), r = e.min + Math.max(i, 0) * e.step;
  return e.max !== void 0 && r > e.max ? void 0 : r;
}
function Cp(e, t, n) {
  let i = 1, r = 1;
  for (const { table: s, percent: a } of e) {
    const o = Jn(s.rows, t), l = Jn(s.rows, n);
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
const Ap = /* @__PURE__ */ new Set([
  "perPage",
  "perColorPage",
  "perMonoPage"
]), $p = /* @__PURE__ */ new Set([
  "file.pages",
  "file.colorPages",
  "file.monoPages"
]);
function hl(e) {
  return e ? [...e.all ?? [], ...e.any ?? []].some((n) => ps(n) ? $p.has(n.ref) : hl(n)) : !1;
}
function Ip(e) {
  const t = (n) => {
    var i;
    return Ap.has(n.type) || ((i = n.tiers) == null ? void 0 : i.basis) === "pages" || n.formula !== void 0 && vs(n.formula).has("pages");
  };
  for (const n of e.sections)
    for (const i of n.fields)
      if (hl(i.visibleWhen) || i.priceModifiers.some(t) || zt(i) && i.options.some((r) => r.priceModifiers.some(t)))
        return !0;
  return !1;
}
const Pi = "__artwork", ml = "__artwork-section";
function Np(e) {
  return { id: ml, title: e, fields: [{
    id: Pi,
    type: "file",
    display: "producer",
    accept: [],
    required: !1,
    priceModifiers: []
  }] };
}
function Ep(e, t) {
  _t(
    [() => e.schema.value, () => t.list.value],
    ([n, i]) => {
      if (!n)
        return;
      const r = n.sections.some(
        (o) => o.fields.some(
          (l) => l.type === "file" && l.id !== Pi
        )
      ), s = n.sections.findIndex(
        (o) => o.id === ml
      ), a = i.length > 0 && !r;
      a && s === -1 ? n.sections.push(Np(i[0].label)) : !a && s !== -1 && (n.sections.splice(s, 1), e.select(Pi, ""));
    },
    { immediate: !0, deep: !0 }
  );
}
function gl(e, t, n, i = {}) {
  var a, o;
  const r = [], s = e.flatMap(({ fields: l }) => l).filter((l) => l.type === "file").reduce((l, c) => l + dr(c.id, t[c.id], n, i.uploads).length, 0);
  for (const { section: l, fields: c } of e) {
    const d = l.fields.filter((f) => f.type !== "info").length === 1 && ((a = l.title) == null ? void 0 : a.trim()) || void 0;
    for (const f of c) {
      if (f.type === "info")
        continue;
      const m = t[f.id];
      let v;
      if (ii(f)) {
        const y = Array.isArray(m) ? m : typeof m == "string" ? [m] : [], _ = f.options.filter((N) => y.includes(N.id)).map((N) => N.label);
        v = _.length ? _.join(", ") : void 0;
      } else if (f.type === "quantities") {
        const y = Ot(f, m), _ = f.options.filter((N) => y[N.id] !== void 0).map((N) => `${N.label} × ${y[N.id]}`);
        v = _.length ? _.join(", ") : void 0;
      } else if (f.type === "file") {
        const y = dr(f.id, m, n, i.uploads).map(
          (_) => _.fileName ?? i.designName ?? _.fileId
        );
        v = y.length ? y.join(", ") : void 0;
      } else if (rt(m))
        v = `${m.w} × ${m.h} ${m.unit}`;
      else if (f.type === "quantity" && m !== void 0 && m !== "") {
        const y = Qn(f, m), _ = (o = f.unit) == null ? void 0 : o.trim();
        v = _ ? `${y} ${_}` : String(y);
      } else m !== void 0 && m !== "" && (v = String(m));
      if (v !== void 0 && r.push({
        fieldId: f.id,
        /* An unlabeled quantity is common (the stepper explains
           itself on the page) — never show its internal id. */
        label: f.label || /* The designer's own slot is titled with its button
        ("Design fortsetzen" once saved) — no cart label. */
        (f.id === Pi ? i.artworkLabel ?? "Design" : void 0) || d || (wn(f) ? i.quantityLabel ?? "Quantity" : f.id),
        value: v
      }), f.type === "file" && i.fileLinkLabel && v !== void 0) {
        const y = dr(f.id, m, n, i.uploads);
        for (const _ of y) {
          const N = Pp(_);
          N && r.push({
            fieldId: f.id,
            label: s > 1 ? `${i.fileLinkLabel} (${_.fileName ?? _.fileId})` : i.fileLinkLabel,
            value: N
          });
        }
      }
    }
  }
  return Op(r);
}
function dr(e, t, n, i) {
  const r = i == null ? void 0 : i[e];
  if (r != null && r.length)
    return r;
  const s = Array.isArray(t) ? t : typeof t == "string" && t ? [t] : [];
  return n && s.includes(n.fileId) ? [n] : [];
}
function Op(e) {
  const t = /* @__PURE__ */ new Map();
  return e.map((n) => {
    const i = (t.get(n.label) ?? 0) + 1;
    return t.set(n.label, i), i === 1 ? n : { ...n, label: `${n.label} (${i})` };
  });
}
function Pp(e) {
  var n;
  const t = (n = e == null ? void 0 : e.raw) == null ? void 0 : n.downloadUrl;
  return typeof t == "string" && t.startsWith("https://") ? t : void 0;
}
async function Mp(e, t, n) {
  const i = n ? await Rp(n) : void 0, r = await fetch(e, {
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
function Rp(e) {
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
async function Fp(e, t) {
  if (!e.endpoint)
    throw new Error(`Provider "${e.id}" has no endpoint for pull mode.`);
  const n = `${e.endpoint.replace(/\/$/, "")}/${encodeURIComponent(t)}`, i = await fetch(n);
  if (!i.ok)
    throw new Error(`Metadata fetch failed: ${i.status}`);
  return ys.parse(await i.json());
}
async function jp(e, t, n = {}) {
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
      if (s = await Fp(e, t), s.status === "ready" || s.status === "failed")
        return s;
    } catch {
    }
    await Lp(i);
  }
  return s;
}
function Lp(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Dp(e) {
  const t = { ...e }, n = /* @__PURE__ */ Ve(null), i = /* @__PURE__ */ Ve(!1), r = /* @__PURE__ */ Ve(null), s = /* @__PURE__ */ Ve(!1), a = /* @__PURE__ */ xt({}), o = /* @__PURE__ */ Ve(void 0), l = /* @__PURE__ */ Ve(!1), c = /* @__PURE__ */ xt({}), u = /* @__PURE__ */ xt({}), d = /* @__PURE__ */ new Map();
  let f = 0;
  const m = G(
    () => n.value ? fl(n.value, a, o.value) : 1
  ), v = G(() => ({
    selections: a,
    file: o.value,
    quantity: m.value
  }));
  async function y() {
    i.value = !0, r.value = null, s.value = !1;
    try {
      if (t.inlineConfig)
        n.value = xa(t.inlineConfig);
      else if (t.configUrl) {
        const g = await fetch(t.configUrl);
        if (g.status === 404 || g.status === 403) {
          s.value = !0;
          return;
        }
        if (!g.ok)
          throw new Error(`Config load failed: ${g.status}`);
        n.value = xa(await g.json());
      } else
        throw new Error("No config-url or inline config provided.");
      zp(n.value, a);
    } catch (g) {
      r.value = g instanceof Error ? g.message : String(g);
    } finally {
      i.value = !1;
    }
  }
  async function _(g) {
    Object.assign(t, g);
    for (const q of Object.keys(a))
      delete a[q];
    for (const q of Object.keys(c))
      delete c[q];
    o.value = void 0, await y();
  }
  const N = G(() => {
    const g = n.value;
    return g ? g.sections.map((q) => ({
      section: q,
      fields: q.fields.filter(
        (X) => _s(g, X, v.value)
      )
    })).filter((q) => q.fields.length > 0) : [];
  }), w = G(
    () => N.value.flatMap((g) => g.fields)
  ), j = G(() => n.value ? zr(n.value, {
    selections: a,
    file: o.value
  }) : null), R = G(() => {
    if (!n.value)
      return;
    const g = ri(n.value, a, o.value);
    if (g != null && g.nextBreakHint)
      return kp(n.value, { selections: a, file: o.value });
  });
  function O(g, q) {
    var pe;
    const X = (pe = n.value) == null ? void 0 : pe.sections.flatMap((ue) => ue.fields).find((ue) => ue.id === g);
    (X == null ? void 0 : X.type) === "quantity" && typeof q == "number" ? a[g] = Qn(X, q) : (X == null ? void 0 : X.type) === "quantities" ? a[g] = Ot(X, q) : a[g] = q;
  }
  function Q(g, q) {
    if (g.type !== "select-many") {
      O(g.id, q);
      return;
    }
    const X = a[g.id], pe = Array.isArray(X) ? [...X] : [], ue = pe.indexOf(q);
    if (ue >= 0)
      pe.splice(ue, 1);
    else {
      if (g.maxSelect !== void 0 && pe.length >= g.maxSelect)
        return;
      pe.push(q);
    }
    a[g.id] = pe;
  }
  function W(g) {
    var pe;
    const q = c[g.id] ?? [], X = g.type === "file" ? Rr(g) : 1;
    a[g.id] = X > 1 ? q.map((ue) => ue.fileId) : ((pe = q[0]) == null ? void 0 : pe.fileId) ?? "";
  }
  async function H(g, q) {
    var ue;
    if (!t.uploadEndpoint) {
      r.value = "No upload endpoint configured.";
      return;
    }
    const X = g.type === "file" ? Rr(g) : 1;
    if (X > 1 && (((ue = c[g.id]) == null ? void 0 : ue.length) ?? 0) + (u[g.id] ?? 0) >= X)
      return;
    l.value = !0, u[g.id] = (u[g.id] ?? 0) + 1;
    const pe = ++f;
    try {
      const se = await Mp(t.uploadEndpoint, q, t.turnstileUrl), he = {
        version: "1.0",
        fileId: se.fileId,
        source: "uploader",
        status: "ready",
        fileName: se.fileName,
        fileSizeBytes: se.fileSizeBytes,
        issues: [],
        ...se.downloadUrl ? { raw: { downloadUrl: se.downloadUrl } } : {}
      };
      d.set(he.fileId, pe), c[g.id] = X > 1 ? [...c[g.id] ?? [], he].sort(
        (qt, St) => (d.get(qt.fileId) ?? 0) - (d.get(St.fileId) ?? 0)
      ) : [he], o.value = he, W(g);
      const nt = t.provider;
      if (nt && nt.mode === "pull") {
        const qt = await jp(nt, se.fileId);
        o.value = qt;
      }
    } catch (se) {
      r.value = se instanceof Error ? se.message : String(se);
    } finally {
      u[g.id] = Math.max(0, (u[g.id] ?? 1) - 1), l.value = Object.values(u).some((se) => se > 0);
    }
  }
  function fe(g, q) {
    var pe;
    const X = c[g.id] ?? [];
    if (c[g.id] = X.filter((ue) => ue.fileId !== q), W(g), ((pe = o.value) == null ? void 0 : pe.fileId) === q) {
      const ue = Object.values(c).flat();
      o.value = ue[ue.length - 1];
    }
  }
  function Se(g) {
    (!o.value || o.value.fileId === g.fileId) && (o.value = g);
  }
  function C(g) {
    o.value = g;
  }
  return {
    schema: n,
    loading: i,
    error: r,
    unconfigured: s,
    selections: a,
    quantity: m,
    file: o,
    fileAnalyzing: l,
    uploads: c,
    uploading: u,
    evalCtx: v,
    visibleSections: N,
    visibleFields: w,
    price: j,
    nextBreak: R,
    /** The connected data-feed provider config, if any. */
    get provider() {
      return t.provider;
    },
    load: y,
    reload: _,
    select: O,
    toggle: Q,
    handleFile: H,
    removeUpload: fe,
    feedMetadata: Se,
    setFile: C
  };
}
function zp(e, t) {
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
function qp() {
  const e = /* @__PURE__ */ xt(/* @__PURE__ */ new Map()), t = G(
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
const qr = 1, In = "[print-configurator]";
function Up(e) {
  const { host: t, cfg: n, validation: i, holds: r, producers: s } = e;
  function a(C) {
    return C === void 0 ? C : JSON.parse(JSON.stringify(C));
  }
  const o = G(() => !n.schema.value || !n.price.value ? null : {
    apiVersion: qr,
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
  function u(C, g) {
    if (!C)
      return ["selections", "quantity", "price", "file", "holds", "valid"];
    const q = [], X = /* @__PURE__ */ new Set([
      ...Object.keys(C.selections),
      ...Object.keys(g.selections)
    ]);
    for (const pe of X)
      Jt(C.selections[pe], g.selections[pe]) || q.push(`selections.${pe}`);
    return C.quantity !== g.quantity && q.push("quantity"), Jt(C.price, g.price) || q.push("price"), Jt(C.file, g.file) || q.push("file"), Jt(C.holds, g.holds) || q.push("holds"), C.valid !== g.valid && q.push("valid"), q;
  }
  let d = null;
  function f(C) {
    d = (C == null ? void 0 : C.source) ?? "api";
  }
  function m() {
    Ui(() => {
      d = null;
    });
  }
  _t(o, (C) => {
    if (!c || !C)
      return;
    const g = u(l, C), q = d ?? "user";
    l = C, g.length !== 0 && v("change", { ...C, source: q, changed: g });
  });
  function v(C, g) {
    t == null || t.dispatchEvent(
      new CustomEvent(C, { detail: g, bubbles: !0, composed: !0 })
    );
  }
  function y() {
    l = o.value, c = !0, l && v("ready", {
      ...l,
      source: "user"
    });
  }
  function _(C) {
    return C.sections.flatMap((g) => g.fields);
  }
  function N(C) {
    const g = n.schema.value;
    if (!g)
      return null;
    const q = _(g);
    return q.find((X) => X.id === C) ?? q.find((X) => X.role === C) ?? /* Several quantity fields may exist (one per paper group, say);
    "the quantity field" is the one currently in play. */
    (C === "quantity" ? ri(g, n.selections, n.file.value) : void 0) ?? q.find(
      (X) => (C === "quantity" || C === "dimensions" || C === "file") && X.type === C
    ) ?? null;
  }
  function w(C, g) {
    switch (C.type) {
      case "select-one":
        return typeof g == "string" && C.options.some((q) => q.id === g);
      case "select-many":
        return Array.isArray(g) && g.every(
          (q) => typeof q == "string" && C.options.some((X) => X.id === q)
        );
      case "quantity":
      case "number":
        return typeof g == "number" && Number.isFinite(g);
      case "quantities":
        return typeof g == "object" && g !== null && !Array.isArray(g) && Object.entries(g).every(
          ([q, X]) => C.options.some((pe) => pe.id === q) && typeof X == "number" && Number.isFinite(X) && X >= 0
        );
      case "text":
        return typeof g == "string";
      case "dimensions":
        return typeof g == "object" && g !== null && !Array.isArray(g) && Number.isFinite(g.w) && Number.isFinite(g.h);
      default:
        return !1;
    }
  }
  function j(C, g) {
    const q = n.schema.value, X = q ? _(q).find((pe) => pe.id === C) : null;
    return X ? w(X, g) ? Jt(n.selections[C], g) ? !1 : (n.select(C, g), i.touch(C), !0) : (console.warn(
      `${In} setSelection: invalid value for "${C}" (${X.type})`,
      g
    ), !1) : (console.warn(`${In} setSelection: unknown field "${C}"`), !1);
  }
  function R(C, g, q) {
    f(q), j(C, g), m();
  }
  function O(C, g) {
    if (typeof C != "object" || C === null) {
      console.warn(`${In} setSelections: expected an object map`);
      return;
    }
    f(g);
    for (const [q, X] of Object.entries(C))
      j(q, X);
    m();
  }
  function Q() {
    const C = n.schema.value;
    return C ? _(C).find((g) => g.type === "file") ?? null : null;
  }
  function W(C) {
    const g = Q();
    !g || n.selections[g.id] === C || (n.select(g.id, C), i.touch(g.id));
  }
  function H(C, g) {
    if (C === null) {
      const se = Q(), he = se ? !Vp(n.selections[se.id]) : !1;
      if (n.file.value === void 0 && !he)
        return;
      f(g), n.setFile(void 0), W(""), m();
      return;
    }
    const q = ys.safeParse({
      version: "1.0",
      source: "custom",
      status: "ready",
      issues: [],
      ...C
    });
    if (!q.success) {
      console.warn(`${In} setFile: invalid file record`, q.error.issues);
      return;
    }
    const X = Q(), pe = Jt(n.file.value, q.data), ue = !X || n.selections[X.id] === q.data.fileId;
    pe && ue || (f(g), pe || n.setFile(q.data), W(q.data.fileId), m());
  }
  function fe(C, g) {
    if (typeof C != "string" || C === "") {
      console.warn(`${In} addHold: a non-empty string key is required`);
      return;
    }
    f(g), r.add(C, g == null ? void 0 : g.message), m();
  }
  function Se(C, g) {
    f(g), r.release(C), m();
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
      field(C) {
        const g = N(C);
        return g ? a(g) : null;
      },
      setSelection: R,
      setSelections: O,
      setFile: H,
      addHold: fe,
      releaseHold: Se,
      /* Producer registry (docs/printapp-integration-v1.md). Not part
         of `state`: a producer is an offer available on the page, not
         an answer the customer has given, and nothing about the
         configuration changes when one appears. */
      registerProducer(C, g) {
        s.register(C, g);
      },
      unregisterProducer(C) {
        s.unregister(C);
      },
      /** Push-mode provider feed (pre-Page-API method, kept). */
      feedMetadata(C) {
        n.feedMetadata(C);
      },
      apiVersion: qr
    }
  };
}
function Vp(e) {
  return e === void 0 || e === "";
}
function Jt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != "object" || typeof t != "object" || e === null || t === null || Array.isArray(e) !== Array.isArray(t))
    return !1;
  const n = Object.keys(e), i = Object.keys(t);
  return n.length !== i.length ? !1 : n.every(
    (r) => Jt(
      e[r],
      t[r]
    )
  );
}
const Ca = "[print-configurator]", Ur = 10;
function Bp(e) {
  const t = /* @__PURE__ */ xt(/* @__PURE__ */ new Map()), n = G(
    () => Array.from(t.values()).sort((o, l) => o.order - l.order)
  );
  function i(o, l) {
    if (typeof o != "string" || o === "") {
      console.warn(`${Ca} registerProducer: a non-empty string id is required`);
      return;
    }
    const c = l == null ? void 0 : l.label;
    if (typeof c != "string" || c === "") {
      console.warn(`${Ca} registerProducer: "${o}" needs a label`);
      return;
    }
    t.set(o, {
      id: o,
      label: c,
      description: l.description,
      /* Default behind the built-in upload: the merchant's own file is
         the expected answer, an alternative producer is the offer. */
      order: Number.isFinite(l.order) ? Number(l.order) : Ur + 10,
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
          apiVersion: qr,
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
const vl = {
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
}, Zp = {
  base: "summary.basePrice",
  "setup-fee": "summary.setupFee",
  "adjustment:minimum": "summary.minimumAdjustment"
};
function Hp(e, t) {
  const n = Zp[t.sourceId];
  return n ? e(n) : t.label;
}
function Wp(e, t) {
  return t ? e.replace(
    /\{(\w+)\}/g,
    (n, i) => i in t ? String(t[i]) : n
  ) : e;
}
function yl(e) {
  const t = () => typeof e == "function" ? e() : e;
  return {
    t(n, i) {
      var a;
      const r = (a = t()) == null ? void 0 : a[n], s = typeof r == "string" && r !== "" ? r : vl[n];
      return Wp(s, i);
    }
  };
}
function Kp(e) {
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
    i in vl && typeof r == "string" && (n[i] = r);
  return n;
}
const ks = yl(), bl = Symbol("print-configurator-strings");
function ct() {
  return Ht(bl, ks);
}
function Gp(e, t, n, i = ks.t) {
  const r = /* @__PURE__ */ xt(/* @__PURE__ */ new Set()), s = { value: !1 }, a = G(() => {
    const f = [];
    for (const m of e.value) {
      const v = Yp(m, t, i);
      v && f.push({ fieldId: m.id, message: v });
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
      return (m = a.value.find((v) => v.fieldId === f)) == null ? void 0 : m.message;
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
function Yp(e, t, n = ks.t) {
  const i = t[e.id];
  if (e.type === "quantities") {
    const s = ws(Ot(e, i));
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
  if (e.type === "dimensions" && rt(i)) {
    const s = Aa(i.unit) / Aa(e.defaultUnit), a = i.w * s, o = i.h * s;
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
function Aa(e) {
  switch (e) {
    case "mm":
      return 1;
    case "cm":
      return 10;
    case "in":
      return 25.4;
  }
}
const Qp = /* @__PURE__ */ new Set([
  "left",
  "right",
  "left_space",
  "right_space"
]);
function Jp(e) {
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
  return typeof n.position == "string" && Qp.has(n.position) && (i.position = n.position), typeof n.decimals == "number" && Number.isInteger(n.decimals) && n.decimals >= 0 && n.decimals <= 8 && (i.decimals = n.decimals), typeof n.thousandSeparator == "string" && (i.thousandSeparator = n.thousandSeparator), typeof n.decimalSeparator == "string" && (i.decimalSeparator = n.decimalSeparator), i;
}
function xl(e) {
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
function Xp(e, t, n, i) {
  if (i)
    return eh(e, i);
  try {
    return new Intl.NumberFormat(xl(n) ?? "en", {
      style: "currency",
      currency: t
    }).format(e);
  } catch {
    return `${t} ${e.toFixed(2)}`;
  }
}
function eh(e, t) {
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
function th(e, t, n) {
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
function cn(e, t) {
  const n = 10 ** t;
  return Math.round((e + Math.sign(e) * Number.EPSILON * Math.abs(e)) * n) / n;
}
function nh(e, t, n) {
  const i = el(t), r = n.rate / 100;
  if (n.mode === "exclusive") {
    const o = cn(e, i), l = cn(o * r, i);
    return { net: o, tax: l, gross: cn(o + l, i) };
  }
  const s = cn(e, i), a = cn(s - s / (1 + r), i);
  return { net: cn(s - a, i), tax: a, gross: s };
}
function $a(e, t) {
  try {
    return new Intl.NumberFormat(xl(t) ?? "en", {
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
const ih = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], rh = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], sh = {
  key: 0,
  class: "check",
  "aria-hidden": "true"
}, ah = ["src"], oh = { class: "card-label" }, lh = {
  key: 2,
  class: "card-description"
}, Ia = /* @__PURE__ */ $e({
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
    return (c, u) => (b(), k("div", {
      class: Ke(["grid", e.field.display]),
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (b(!0), k(le, null, Me(e.field.options, (d, f) => (b(), k("button", {
        key: d.id,
        type: "button",
        class: Ke(["card", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice card choice-selected" : "choice card",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-label": d.label,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : E(s).tabindexFor(d, f),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, f)
      }, [
        a(d.id) ? (b(), k("span", sh, "✓")) : oe("", !0),
        d.image ? (b(), k("img", {
          key: 1,
          src: d.image,
          alt: ""
        }, null, 8, ah)) : oe("", !0),
        P("span", oh, L(d.label), 1),
        d.description ? (b(), k("span", lh, L(d.description), 1)) : oe("", !0)
      ], 42, rh))), 128))
    ], 10, ih));
  }
}), ch = ["id", "value", "aria-labelledby", "aria-describedby", "aria-invalid"], uh = {
  key: 0,
  value: "",
  disabled: ""
}, dh = ["value", "disabled"], fh = /* @__PURE__ */ $e({
  __name: "ChoiceDropdown",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = ct();
    function s(a) {
      i("pick", a.target.value);
    }
    return (a, o) => (b(), k("select", {
      id: `pc-control-${e.field.id}`,
      class: "dropdown",
      part: "dropdown",
      value: e.selectedIds[0] ?? "",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onChange: s
    }, [
      e.selectedIds.length ? oe("", !0) : (b(), k("option", uh, L(e.field.label ? E(r)("choice.placeholder", { label: e.field.label.toLowerCase() }) : E(r)("choice.placeholderBare")), 1)),
      (b(!0), k(le, null, Me(e.field.options, (l) => (b(), k("option", {
        key: l.id,
        value: l.id,
        disabled: n.unavailableIds.includes(l.id)
      }, L(l.label), 9, dh))), 128))
    ], 40, ch));
  }
}), ph = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], hh = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], mh = { key: 0 }, gh = { class: "choice-body" }, vh = { class: "choice-title" }, yh = {
  key: 0,
  class: "choice-description"
}, bh = /* @__PURE__ */ $e({
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
    return (c, u) => (b(), k("div", {
      class: "choice-list",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (b(!0), k(le, null, Me(e.field.options, (d, f) => (b(), k("button", {
        key: d.id,
        type: "button",
        class: Ke(["choice-row", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice choice-selected" : "choice",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : E(s).tabindexFor(d, f),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, f)
      }, [
        P("span", {
          class: Ke(["choice-indicator", { multi: r }]),
          "aria-hidden": "true"
        }, [
          a(d.id) ? (b(), k("span", mh, "✓")) : oe("", !0)
        ], 2),
        P("span", gh, [
          P("span", vh, L(d.label), 1),
          d.description ? (b(), k("span", yh, L(d.description), 1)) : oe("", !0)
        ])
      ], 42, hh))), 128))
    ], 8, ph));
  }
}), xh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], _h = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], wh = {
  key: 0,
  "aria-hidden": "true"
}, kh = /* @__PURE__ */ $e({
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
    return (c, u) => (b(), k("div", {
      class: "pills",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (b(!0), k(le, null, Me(e.field.options, (d, f) => (b(), k("button", {
        key: d.id,
        type: "button",
        class: Ke(["pill", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice pill choice-selected" : "choice pill",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : E(s).tabindexFor(d, f),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, f)
      }, [
        as(L(d.label) + " ", 1),
        a(d.id) ? (b(), k("span", wh, "✓")) : oe("", !0)
      ], 42, _h))), 128))
    ], 8, xh));
  }
}), Sh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Th = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], Ch = {
  key: 0,
  class: "swatch-check",
  "aria-hidden": "true"
}, Ah = {
  key: 0,
  class: "swatch-selected-label",
  "aria-hidden": "true"
}, $h = /* @__PURE__ */ $e({
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
    return (u, d) => (b(), k("div", null, [
      P("div", {
        class: "swatches",
        role: r ? "group" : "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0
      }, [
        (b(!0), k(le, null, Me(e.field.options, (f, m) => (b(), k("button", {
          key: f.id,
          type: "button",
          class: Ke(["swatch", { active: a(f.id), unavailable: o(f.id) }]),
          part: a(f.id) ? "choice swatch choice-selected" : "choice swatch",
          style: ei({ background: f.color }),
          role: r ? void 0 : "radio",
          "aria-checked": r ? void 0 : a(f.id),
          "aria-pressed": r ? a(f.id) : void 0,
          "aria-label": f.label,
          "aria-disabled": o(f.id) || void 0,
          tabindex: r ? 0 : E(s).tabindexFor(f, m),
          onClick: (v) => !o(f.id) && i("pick", f.id),
          onKeydown: (v) => c(v, m)
        }, [
          a(f.id) ? (b(), k("span", Ch, "✓")) : oe("", !0)
        ], 46, Th))), 128))
      ], 8, Sh),
      l.value ? (b(), k("p", Ah, L(l.value), 1)) : oe("", !0)
    ]));
  }
}), Na = {
  cards: Ia,
  grid: Ia,
  swatches: $h,
  pills: kh,
  dropdown: fh,
  list: bh
}, Ki = Symbol("print-configurator"), Ih = ["data-field-id", "data-type"], Nh = ["id"], Eh = {
  key: 0,
  class: "req",
  "aria-hidden": "true"
}, Oh = {
  key: 1,
  class: "help",
  part: "field-help"
}, Ph = ["id"], Mh = /* @__PURE__ */ $e({
  __name: "FieldShell",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e, { expose: t }) {
    return t({ fieldId: e.field.id }), (i, r) => (b(), k("div", {
      class: "field",
      part: "field",
      "data-field-id": e.field.id,
      "data-type": e.field.type
    }, [
      e.field.label ? (b(), k("span", {
        key: 0,
        id: `pc-label-${e.field.id}`,
        class: "field-label",
        part: "field-label"
      }, [
        as(L(e.field.label) + " ", 1),
        e.field.required ? (b(), k("span", Eh, "*")) : oe("", !0)
      ], 8, Nh)) : oe("", !0),
      e.field.helpText ? (b(), k("p", Oh, L(e.field.helpText), 1)) : oe("", !0),
      Pc(i.$slots, "default"),
      e.error ? (b(), k("p", {
        key: 2,
        id: `pc-error-${e.field.id}`,
        class: "field-error",
        part: "field-error",
        role: "status"
      }, L(e.error), 9, Ph)) : oe("", !0)
    ], 8, Ih));
  }
}), Rh = ["aria-labelledby"], Fh = ["part", "aria-checked", "onClick"], jh = ["value", "aria-label"], Lh = ["value"], Dh = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], zh = {
  key: 3,
  class: "stepper",
  part: "stepper"
}, qh = ["aria-label", "disabled"], Uh = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Vh = ["aria-label", "disabled"], Bh = /* @__PURE__ */ $e({
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
    ), { t: s } = ct(), a = G(() => n.field.label ?? s("quantity.label"));
    function o(f) {
      i("select", Qn(n.field, f)), i("touch");
    }
    function l(f) {
      o(r.value + f * n.field.step);
    }
    function c(f) {
      const m = f.target.value;
      if (m === "")
        return;
      const v = Number(m);
      Qn(n.field, v) === v && o(v);
    }
    function u(f) {
      const m = f.target;
      o(m.value === "" ? n.field.defaultValue : Number(m.value)), m.value = String(r.value);
    }
    function d(f) {
      u(f);
    }
    return (f, m) => {
      var v, y;
      return e.field.display === "pills" && ((v = e.field.presets) != null && v.length) ? (b(), k("div", {
        key: 0,
        class: "pills",
        role: "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0
      }, [
        (b(!0), k(le, null, Me(e.field.presets, (_) => (b(), k("button", {
          key: _,
          type: "button",
          class: Ke(["pill", { active: r.value === _ }]),
          part: r.value === _ ? "choice pill choice-selected" : "choice pill",
          role: "radio",
          "aria-checked": r.value === _,
          onClick: (N) => o(_)
        }, L(_), 11, Fh))), 128))
      ], 8, Rh)) : e.field.display === "dropdown" && ((y = e.field.presets) != null && y.length) ? (b(), k("select", {
        key: 1,
        class: "dropdown",
        part: "dropdown",
        value: String(r.value),
        "aria-label": a.value,
        onChange: m[0] || (m[0] = (_) => o(Number(_.target.value)))
      }, [
        (b(!0), k(le, null, Me(e.field.presets, (_) => (b(), k("option", {
          key: _,
          value: String(_)
        }, L(_), 9, Lh))), 128))
      ], 40, jh)) : e.field.display === "input" ? (b(), k("input", {
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
        onKeydown: Sr(Wn(d, ["prevent"]), ["enter"])
      }, null, 40, Dh)) : (b(), k("div", zh, [
        P("button", {
          type: "button",
          part: "stepper-decrement",
          "aria-label": E(s)("stepper.decrease", { label: a.value.toLowerCase() }),
          disabled: r.value <= e.field.min,
          onClick: m[1] || (m[1] = (_) => l(-1))
        }, " − ", 8, qh),
        P("input", {
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
          onKeydown: Sr(Wn(d, ["prevent"]), ["enter"])
        }, null, 40, Uh),
        P("button", {
          type: "button",
          part: "stepper-increment",
          "aria-label": E(s)("stepper.increase", { label: a.value.toLowerCase() }),
          disabled: e.field.max !== void 0 && r.value >= e.field.max,
          onClick: m[2] || (m[2] = (_) => l(1))
        }, " + ", 8, Vh)
      ]));
    };
  }
}), Zh = ["aria-labelledby", "aria-describedby"], Hh = ["part"], Wh = { class: "quantities-name" }, Kh = ["src"], Gh = {
  class: "quantities-label",
  part: "quantities-label"
}, Yh = {
  class: "stepper",
  part: "stepper"
}, Qh = ["aria-label", "disabled", "onClick"], Jh = ["value", "max", "step", "disabled", "aria-label", "onInput", "onBlur", "onKeydown"], Xh = ["aria-label", "disabled", "onClick"], em = {
  class: "quantities-total",
  part: "quantities-total",
  "aria-live": "polite"
}, tm = /* @__PURE__ */ $e({
  __name: "QuantitiesInput",
  props: {
    field: { type: null },
    value: { type: null },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = ct(), s = G(() => Ot(n.field, n.value)), a = G(() => ws(s.value)), o = G(() => {
      var N;
      const _ = (N = n.field.unit) == null ? void 0 : N.trim();
      return _ ? `${a.value} ${_}` : String(a.value);
    });
    function l(_) {
      return s.value[_] ?? 0;
    }
    function c(_) {
      return n.unavailableIds.includes(_);
    }
    function u(_) {
      const N = l(_);
      return N === 0 ? n.field.min : N + n.field.step;
    }
    function d(_) {
      if (c(_))
        return !1;
      const N = u(_), { max: w, maxTotal: j } = n.field;
      return w !== void 0 && N > w ? !1 : j === void 0 || a.value - l(_) + N <= j;
    }
    function f(_, N) {
      const w = { ...s.value, [_]: N };
      i("select", Ot(n.field, w)), i("touch");
    }
    function m(_, N) {
      if (N === 1) {
        f(_, u(_));
        return;
      }
      const w = l(_) - n.field.step;
      f(_, w < n.field.min ? 0 : w);
    }
    function v(_, N) {
      const w = N.target.value;
      if (w === "")
        return;
      const j = Number(w);
      (Ot(n.field, { [_]: j })[_] ?? 0) === j && f(_, j);
    }
    function y(_, N) {
      const w = N.target;
      f(_, w.value === "" ? 0 : Number(w.value)), w.value = String(l(_));
    }
    return (_, N) => (b(), k(le, null, [
      P("div", {
        class: Ke(["quantities", e.field.display === "list" ? "quantities-list" : "quantities-grid"]),
        part: "quantities",
        role: "group",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0
      }, [
        (b(!0), k(le, null, Me(e.field.options, (w) => (b(), k("div", {
          key: w.id,
          class: Ke(["quantities-item", { active: l(w.id) > 0, off: c(w.id) }]),
          part: l(w.id) > 0 ? "quantities-item quantities-item-active" : "quantities-item"
        }, [
          P("span", Wh, [
            w.color ? (b(), k("span", {
              key: 0,
              class: "quantities-swatch",
              style: ei({ background: w.color }),
              "aria-hidden": "true"
            }, null, 4)) : w.image ? (b(), k("img", {
              key: 1,
              class: "quantities-image",
              src: w.image,
              alt: ""
            }, null, 8, Kh)) : oe("", !0),
            P("span", Gh, L(w.label), 1)
          ]),
          P("div", Yh, [
            P("button", {
              type: "button",
              part: "stepper-decrement",
              "aria-label": E(r)("stepper.decrease", { label: w.label }),
              disabled: l(w.id) === 0,
              onClick: (j) => m(w.id, -1)
            }, " − ", 8, Qh),
            P("input", {
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
              onInput: (j) => v(w.id, j),
              onBlur: (j) => y(w.id, j),
              onKeydown: Sr(Wn((j) => y(w.id, j), ["prevent"]), ["enter"])
            }, null, 40, Jh),
            P("button", {
              type: "button",
              part: "stepper-increment",
              "aria-label": E(r)("stepper.increase", { label: w.label }),
              disabled: !d(w.id),
              onClick: (j) => m(w.id, 1)
            }, " + ", 8, Xh)
          ])
        ], 10, Hh))), 128))
      ], 10, Zh),
      P("p", em, L(E(r)("quantities.total", { count: o.value })), 1)
    ], 64));
  }
}), nm = {
  key: 0,
  class: "slider-row"
}, im = ["value", "min", "max", "step", "aria-label"], rm = {
  class: "slider-value",
  "aria-hidden": "true"
}, sm = {
  key: 1,
  class: "stepper",
  part: "stepper"
}, am = ["aria-label", "disabled"], om = ["value", "min", "max", "step", "aria-label"], lm = ["aria-label", "disabled"], cm = ["value", "min", "max", "step", "aria-label", "aria-describedby", "aria-invalid"], um = /* @__PURE__ */ $e({
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
    ), { t: s } = ct(), a = G(() => n.field.label ?? n.field.id);
    function o(l) {
      Number.isNaN(l) || (i("select", l), i("touch"));
    }
    return (l, c) => e.field.display === "slider" ? (b(), k("div", nm, [
      P("input", {
        type: "range",
        class: "slider",
        part: "stepper-input",
        value: r.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": a.value,
        onInput: c[0] || (c[0] = (u) => o(Number(u.target.value)))
      }, null, 40, im),
      P("span", rm, L(r.value), 1)
    ])) : e.field.display === "stepper" ? (b(), k("div", sm, [
      P("button", {
        type: "button",
        part: "stepper-decrement",
        "aria-label": E(s)("stepper.decrease", { label: a.value.toLowerCase() }),
        disabled: e.field.min !== void 0 && r.value <= e.field.min,
        onClick: c[1] || (c[1] = (u) => o(r.value - (e.field.step ?? 1)))
      }, " − ", 8, am),
      P("input", {
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
      }, null, 40, om),
      P("button", {
        type: "button",
        part: "stepper-increment",
        "aria-label": E(s)("stepper.increase", { label: a.value.toLowerCase() }),
        disabled: e.field.max !== void 0 && r.value >= e.field.max,
        onClick: c[4] || (c[4] = (u) => o(r.value + (e.field.step ?? 1)))
      }, " + ", 8, lm)
    ])) : (b(), k("input", {
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
    }, null, 40, cm));
  }
}), dm = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], fm = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], pm = /* @__PURE__ */ $e({
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
    return (a, o) => e.field.display === "textarea" ? (b(), k("textarea", {
      key: 0,
      class: "text-input textarea",
      part: "text-input",
      value: typeof e.value == "string" ? e.value : E(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      rows: "3",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[0] || (o[0] = (l) => i("touch"))
    }, null, 40, dm)) : (b(), k("input", {
      key: 1,
      class: "text-input",
      part: "text-input",
      type: "text",
      value: typeof e.value == "string" ? e.value : E(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[1] || (o[1] = (l) => i("touch"))
    }, null, 40, fm));
  }
}), hm = {
  class: "dimensions",
  part: "dimensions"
}, mm = { class: "dim-input" }, gm = { class: "dim-label" }, vm = ["value", "aria-describedby", "aria-invalid"], ym = { class: "dim-input" }, bm = { class: "dim-label" }, xm = ["value", "aria-describedby", "aria-invalid"], _m = ["value", "aria-label"], wm = ["value"], km = {
  key: 1,
  class: "dim-unit-static"
}, Sm = /* @__PURE__ */ $e({
  __name: "DimensionsInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = ct(), s = /* @__PURE__ */ xt({
      w: rt(n.value) ? n.value.w : NaN,
      h: rt(n.value) ? n.value.h : NaN,
      unit: rt(n.value) ? n.value.unit : n.field.defaultUnit
    });
    _t(
      () => n.value,
      (c) => {
        rt(c) ? (s.w = c.w, s.h = c.h, s.unit = c.unit) : (c === void 0 || c === "") && (s.w = NaN, s.h = NaN);
      }
    );
    const a = s;
    function o(c) {
      Object.assign(s, c), i("touch"), s.w > 0 && s.h > 0 && i("select", { w: s.w, h: s.h, unit: s.unit });
    }
    function l(c) {
      return Number(c.target.value);
    }
    return (c, u) => (b(), k("div", hm, [
      P("label", mm, [
        P("span", gm, L(E(r)("dimensions.width")), 1),
        P("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(E(a).w) ? "" : E(a).w,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[0] || (u[0] = (d) => o({ w: l(d) }))
        }, null, 40, vm)
      ]),
      u[3] || (u[3] = P("span", {
        class: "dim-times",
        "aria-hidden": "true"
      }, "×", -1)),
      P("label", ym, [
        P("span", bm, L(E(r)("dimensions.height")), 1),
        P("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(E(a).h) ? "" : E(a).h,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[1] || (u[1] = (d) => o({ h: l(d) }))
        }, null, 40, xm)
      ]),
      e.field.units.length > 1 ? (b(), k("select", {
        key: 0,
        class: "dropdown dim-unit",
        part: "dropdown",
        value: E(a).unit,
        "aria-label": E(r)("dimensions.unit"),
        onChange: u[2] || (u[2] = (d) => o({ unit: d.target.value }))
      }, [
        (b(!0), k(le, null, Me(e.field.units, (d) => (b(), k("option", {
          key: d,
          value: d
        }, L(d), 9, wm))), 128))
      ], 40, _m)) : (b(), k("span", km, L(e.field.defaultUnit), 1))
    ]));
  }
});
function Tm(e) {
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
  return ys.parse(s);
}
const Cm = ["aria-busy"], Am = {
  key: 0,
  class: "upload-files",
  part: "upload-files"
}, $m = { class: "upload-filename" }, Im = ["onClick"], Nm = ["id", "accept", "multiple", "aria-labelledby", "aria-describedby", "aria-invalid"], Em = ["for"], Om = {
  key: 0,
  class: "upload-status"
}, Pm = { class: "upload-filename" }, Mm = { class: "upload-hint" }, Rm = { class: "upload-title" }, Fm = { class: "upload-hint" }, jm = {
  key: 2,
  class: "upload-wrong-type",
  part: "upload-wrong-type",
  role: "alert"
}, Lm = /* @__PURE__ */ $e({
  __name: "FileUpload",
  props: {
    field: { type: null },
    files: { type: Array },
    analyzing: { type: Boolean },
    error: { type: String }
  },
  emits: ["file", "remove", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = ct(), s = /* @__PURE__ */ Ve(!1), a = G(() => n.field.accept.join(", ")), o = G(() => ep(n.field.accept) || void 0), l = G(() => Rr(n.field)), c = G(() => l.value > 1), u = G(() => n.files ?? []), d = G(() => c.value ? l.value - u.value.length : 1), f = G(
      () => c.value ? [r("upload.limit", { max: l.value }), a.value].filter(Boolean).join(" · ") : a.value
    ), m = /* @__PURE__ */ Ve();
    function v(w) {
      if (w.length) {
        const j = w.filter((O) => tp(n.field.accept, O.name)), R = j.slice(0, Math.max(0, d.value));
        m.value = j.length < w.length ? r("upload.wrongType", { formats: np(n.field.accept) }) : R.length < j.length ? r("upload.tooMany", { max: l.value }) : void 0;
        for (const O of R)
          i("file", n.field, O);
      }
      i("touch");
    }
    function y(w) {
      const j = w.target;
      v(Array.from(j.files ?? [])), j.value = "";
    }
    function _(w) {
      var R;
      s.value = !1;
      const j = Array.from(((R = w.dataTransfer) == null ? void 0 : R.files) ?? []);
      v(c.value ? j : j.slice(0, 1));
    }
    function N(w) {
      m.value = void 0, i("remove", n.field, w.fileId), i("touch");
    }
    return (w, j) => (b(), k("div", {
      class: Ke(["upload", { dragging: s.value, done: !c.value && u.value.length > 0, multiple: c.value }]),
      part: "upload",
      "aria-busy": e.analyzing || void 0,
      onDragover: j[0] || (j[0] = Wn((R) => s.value = !0, ["prevent"])),
      onDragleave: j[1] || (j[1] = (R) => s.value = !1),
      onDrop: Wn(_, ["prevent"])
    }, [
      c.value && u.value.length ? (b(), k("ul", Am, [
        (b(!0), k(le, null, Me(u.value, (R) => (b(), k("li", {
          key: R.fileId,
          class: "upload-file",
          part: "upload-file"
        }, [
          P("span", $m, L(R.fileName ?? R.fileId), 1),
          P("button", {
            type: "button",
            class: "upload-remove",
            part: "upload-remove",
            onClick: (O) => N(R)
          }, L(E(r)("artwork.remove")), 9, Im)
        ]))), 128))
      ])) : oe("", !0),
      d.value > 0 || e.analyzing ? (b(), k(le, { key: 1 }, [
        P("input", {
          id: `pc-control-${e.field.id}`,
          class: "upload-input",
          part: "upload-input",
          type: "file",
          accept: o.value,
          multiple: c.value || void 0,
          "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: y
        }, null, 40, Nm),
        P("label", {
          class: "upload-zone",
          for: `pc-control-${e.field.id}`
        }, [
          e.analyzing ? (b(), k("span", Om, L(E(r)("upload.analyzing")), 1)) : !c.value && u.value[0] ? (b(), k(le, { key: 1 }, [
            P("span", Pm, L(u.value[0].fileName ?? u.value[0].fileId), 1),
            P("span", Mm, L(E(r)("upload.replace")), 1)
          ], 64)) : (b(), k(le, { key: 2 }, [
            P("span", Rm, L(c.value && u.value.length ? E(r)("upload.addMore") : E(r)("upload.drop")), 1),
            P("span", Fm, L(f.value), 1)
          ], 64))
        ], 8, Em)
      ], 64)) : oe("", !0),
      m.value ? (b(), k("p", jm, L(m.value), 1)) : oe("", !0)
    ], 42, Cm));
  }
}), Dm = "https://cdn.filecheck.io/element/v1/filecheck.js", zm = 1e4;
let Nn = null;
function qm(e = Dm) {
  return typeof window < "u" && window.Filecheck ? Promise.resolve(window.Filecheck) : Nn || (Nn = new Promise((t, n) => {
    const i = (a) => {
      Nn = null, r.remove(), n(new Error(a));
    }, r = document.createElement("script");
    r.src = e, r.async = !0;
    const s = setTimeout(
      () => i("Filecheck SDK load timed out."),
      zm
    );
    r.addEventListener("load", () => {
      clearTimeout(s), window.Filecheck ? t(window.Filecheck) : i("Filecheck SDK loaded but window.Filecheck is missing.");
    }), r.addEventListener("error", () => {
      clearTimeout(s), i("Filecheck SDK failed to load.");
    }), document.head.appendChild(r);
  }), Nn);
}
const Um = { mm: 1, cm: 10, in: 25.4 }, Vm = [
  "artworkSize",
  "pageCount",
  "fileCount",
  "bleed",
  "safety"
];
function Bm(e, t) {
  var r, s;
  const n = [];
  for (const a of e) {
    const o = t[a.id];
    if (!(o === void 0 || o === "")) {
      if (a.type === "dimensions" && rt(o)) {
        const l = Um[o.unit] ?? 1;
        n.push({
          artworkSize: {
            width_mm: Ea(o.w * l),
            height_mm: Ea(o.h * l)
          }
        });
        continue;
      }
      if (a.role === "pages") {
        const l = typeof o == "number" ? o : Number(o);
        Number.isFinite(l) && l > 0 && n.push({ pageCount: { min: l, max: l } });
      }
      if (ii(a)) {
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
    for (const o of Vm) {
      const l = a[o];
      l && (i[o] = { ...i[o] ?? {}, ...l });
    }
  return i;
}
function Ea(e) {
  return Math.round(e * 10) / 10;
}
const Zm = {
  class: "fc-upload",
  part: "upload"
}, Hm = {
  key: 0,
  class: "fc-panel fc-unconfigured"
}, Wm = {
  key: 1,
  class: "fc-panel fc-error",
  role: "alert"
}, Km = { class: "fc-panel-title" }, Gm = { class: "fc-panel-hint" }, Ym = {
  key: 0,
  class: "fc-loading"
}, Qm = {
  key: 1,
  class: "field-error",
  role: "status"
}, Jm = /* @__PURE__ */ $e({
  __name: "FilecheckUpload",
  props: {
    field: { type: null },
    provider: { type: null }
  },
  emits: ["metadata", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = ct(), s = /* @__PURE__ */ Ve(null), a = /* @__PURE__ */ Ve(
      n.provider.publishableKey ? "loading" : "unconfigured"
    ), o = /* @__PURE__ */ Ve("");
    let l = null, c = null;
    const u = Ht(Ki, null), d = G(() => {
      var _;
      if (!u)
        return null;
      const y = ((_ = u.cfg.visibleFields) == null ? void 0 : _.value) ?? [];
      return Bm(y, u.cfg.selections);
    });
    _t(d, (y) => {
      var _;
      (_ = l == null ? void 0 : l.setContext) == null || _.call(l, y ?? null);
    });
    async function f() {
      var w, j, R;
      const y = n.provider.publishableKey, _ = (w = n.field.filecheck) == null ? void 0 : w.workflowId, N = (j = n.field.filecheck) != null && j.workflow ? /* @__PURE__ */ ve(n.field.filecheck.workflow) : void 0;
      if (!y || !_ && !N) {
        a.value = "unconfigured";
        return;
      }
      a.value = "loading", o.value = "";
      try {
        const O = await qm(n.provider.scriptUrl);
        if (!s.value)
          return;
        l = O(y, {
          agentId: n.provider.agentId,
          iframeSrc: n.provider.iframeSrc
        }).elements.create("intake", {
          // An inline workflow wins: it is the blueprint author's exact
          // intent, and demo blueprints rely on it to run against any
          // tenant with nothing saved in the Filecheck admin.
          ...N ? { workflow: N } : { workflowId: _ },
          preview: n.provider.preview ?? !1
        }), c = l.on("status", (H) => {
          i("metadata", H), i("touch");
        }), l.on("error", (H) => {
          const fe = H;
          o.value = (fe == null ? void 0 : fe.message) ?? "Filecheck reported an error.";
        });
        const W = d.value;
        W && ((R = l.setContext) == null || R.call(l, W)), l.mount(s.value), a.value = "active";
      } catch (O) {
        a.value = "error", o.value = O instanceof Error ? O.message : "Filecheck failed to load.";
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
    function v() {
      m(), f();
    }
    return ns(() => {
      f();
    }), _t(
      () => {
        var y, _;
        return [
          n.provider.publishableKey,
          n.provider.scriptUrl,
          n.provider.iframeSrc,
          n.provider.agentId,
          (y = n.field.filecheck) == null ? void 0 : y.workflowId,
          (_ = n.field.filecheck) == null ? void 0 : _.workflow
        ];
      },
      () => {
        m(), f();
      }
    ), po(m), (y, _) => (b(), k("div", Zm, [
      a.value === "unconfigured" ? (b(), k("div", Hm, [..._[0] || (_[0] = [
        P("span", { class: "fc-panel-title" }, "Filecheck upload", -1),
        P("span", { class: "fc-panel-hint" }, " Add your Filecheck publishable key in the store settings (or preview settings) to activate validated uploads for this field. ", -1)
      ])])) : a.value === "error" ? (b(), k("div", Wm, [
        P("span", Km, L(E(r)("upload.unavailable")), 1),
        P("span", Gm, L(o.value), 1),
        P("button", {
          type: "button",
          class: "fc-retry",
          onClick: v
        }, L(E(r)("upload.retry")), 1)
      ])) : (b(), k(le, { key: 2 }, [
        a.value === "loading" ? (b(), k("p", Ym, L(E(r)("upload.secureLoading")), 1)) : oe("", !0),
        P("div", {
          ref_key: "slot",
          ref: s,
          class: "fc-slot"
        }, null, 512),
        o.value ? (b(), k("p", Qm, L(o.value), 1)) : oe("", !0)
      ], 64))
    ]));
  }
}), Xm = {
  key: 0,
  class: "artwork",
  part: "artwork"
}, eg = { class: "artwork-body" }, tg = {
  class: "artwork-name",
  part: "artwork-name"
}, ng = {
  key: 0,
  class: "artwork-meta",
  part: "artwork-meta"
}, ig = { class: "artwork-actions" }, rg = {
  key: 1,
  class: "producers"
}, sg = {
  key: 0,
  class: "producer-or",
  "aria-hidden": "true"
}, ag = ["onClick"], og = { class: "producer-label" }, lg = {
  key: 0,
  class: "producer-description"
}, cg = {
  key: 1,
  class: "producer-or",
  "aria-hidden": "true"
}, ug = {
  class: "producer-or",
  "aria-hidden": "true"
}, dg = ["onClick"], fg = { class: "producer-label" }, pg = {
  key: 0,
  class: "producer-description"
}, hg = /* @__PURE__ */ $e({
  __name: "ArtworkField",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e) {
    const t = e, n = Ht(Ki);
    if (!n)
      throw new Error("ArtworkField must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r, producers: s } = n, { t: a } = ct(), o = G(
      () => {
        var O, Q, W;
        return t.field.providerId === "filecheck" && !!((O = t.field.filecheck) != null && O.workflowId || (Q = t.field.filecheck) != null && Q.workflow) && ((W = i.provider) == null ? void 0 : W.mode) === "element";
      }
    ), l = G(() => {
      const O = i.schema.value;
      if (!O)
        return !1;
      for (const Q of O.sections)
        for (const W of Q.fields)
          if (W.type === "file")
            return W.id === t.field.id;
      return !1;
    }), c = G(
      () => s.forField(t.field.id, l.value)
    ), u = G(() => {
      const O = i.selections[t.field.id];
      return Array.isArray(O) ? O.length > 0 : typeof O == "string" && O !== "";
    }), d = G(() => {
      var Q;
      const O = (Q = i.file.value) == null ? void 0 : Q.source;
      return O ? c.value.find((W) => W.id === O) ?? null : null;
    }), f = G(() => u.value && !d.value), m = G(() => t.field.display === "producer"), v = G(
      () => m.value ? c.value : c.value.filter((O) => O.order < Ur)
    ), y = G(
      () => m.value ? [] : c.value.filter((O) => O.order >= Ur)
    ), _ = G(() => {
      const O = i.file.value;
      return O ? O.fileName ? O.fileName : d.value ? a("artwork.designName") : O.fileId : "";
    }), N = G(() => {
      const O = i.file.value;
      if (!O)
        return "";
      const Q = [], W = i.schema.value;
      return O.pages !== void 0 && W && Ip(W) && Q.push(
        O.pages === 1 ? a("artwork.pageCountOne") : a("artwork.pageCount", { count: O.pages })
      ), O.canvas && Q.push(`${O.canvas.w} × ${O.canvas.h} ${O.canvas.unit}`), Q.join(" · ");
    });
    function w(O) {
      i.setFile(Tm(O)), O.canProceed && O.jobId ? i.select(t.field.id, O.jobId) : i.select(t.field.id, "");
    }
    function j(O) {
      s.activate(O, t.field.id), r.touch(t.field.id);
    }
    function R() {
      i.setFile(void 0), i.select(t.field.id, ""), r.touch(t.field.id);
    }
    return (O, Q) => d.value ? (b(), k("div", Xm, [
      P("div", eg, [
        P("span", tg, L(_.value), 1),
        N.value ? (b(), k("span", ng, L(N.value), 1)) : oe("", !0)
      ]),
      P("div", ig, [
        P("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-change",
          onClick: Q[0] || (Q[0] = (W) => j(d.value.id))
        }, L(E(a)("artwork.change")), 1),
        P("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-remove",
          onClick: R
        }, L(E(a)("artwork.remove")), 1)
      ])
    ])) : (b(), k("div", rg, [
      f.value ? oe("", !0) : (b(!0), k(le, { key: 0 }, Me(v.value, (W, H) => (b(), k(le, {
        key: W.id
      }, [
        m.value && H > 0 ? (b(), k("p", sg, [
          P("span", null, L(E(a)("artwork.or")), 1)
        ])) : oe("", !0),
        P("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (fe) => j(W.id)
        }, [
          P("span", og, L(W.label), 1),
          W.description ? (b(), k("span", lg, L(W.description), 1)) : oe("", !0)
        ], 8, ag),
        m.value ? oe("", !0) : (b(), k("p", cg, [
          P("span", null, L(E(a)("artwork.or")), 1)
        ]))
      ], 64))), 128)),
      !m.value && o.value && E(i).provider ? (b(), Pe(Jm, {
        key: 1,
        field: e.field,
        provider: E(i).provider,
        onMetadata: w,
        onTouch: Q[1] || (Q[1] = (W) => E(r).touch(e.field.id))
      }, null, 8, ["field", "provider"])) : m.value ? oe("", !0) : (b(), Pe(Lm, {
        key: 2,
        field: e.field,
        files: E(i).uploads[e.field.id],
        analyzing: (E(i).uploading[e.field.id] ?? 0) > 0,
        error: e.error,
        onFile: Q[2] || (Q[2] = (W, H) => E(i).handleFile(W, H)),
        onRemove: Q[3] || (Q[3] = (W, H) => E(i).removeUpload(W, H)),
        onTouch: Q[4] || (Q[4] = (W) => E(r).touch(e.field.id))
      }, null, 8, ["field", "files", "analyzing", "error"])),
      f.value ? oe("", !0) : (b(!0), k(le, { key: 3 }, Me(y.value, (W) => (b(), k(le, {
        key: W.id
      }, [
        P("p", ug, [
          P("span", null, L(E(a)("artwork.or")), 1)
        ]),
        P("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (H) => j(W.id)
        }, [
          P("span", fg, L(W.label), 1),
          W.description ? (b(), k("span", pg, L(W.description), 1)) : oe("", !0)
        ], 8, dg)
      ], 64))), 128))
    ]));
  }
}), mg = {
  key: 0,
  class: "recap",
  part: "summary-recap"
}, gg = { part: "recap-label" }, vg = { part: "recap-value" }, yg = {
  key: 1,
  class: "recap-empty"
}, bg = /* @__PURE__ */ $e({
  __name: "SummaryPanel",
  props: {
    sections: { type: Array },
    selections: { type: Object },
    file: { type: null },
    uploads: { type: Object }
  },
  setup(e) {
    const t = e, { t: n } = ct(), i = G(
      () => gl(t.sections, t.selections, t.file, {
        quantityLabel: n("quantity.label"),
        artworkLabel: n("artwork.label"),
        designName: n("artwork.designName"),
        uploads: t.uploads
      })
    );
    return (r, s) => i.value.length ? (b(), k("dl", mg, [
      (b(!0), k(le, null, Me(i.value, (a) => (b(), k("div", {
        key: a.fieldId,
        class: "recap-row",
        part: "recap-row"
      }, [
        P("dt", gg, L(a.label), 1),
        P("dd", vg, L(a.value), 1)
      ]))), 128))
    ])) : (b(), k("p", yg, L(E(n)("recap.empty")), 1));
  }
}), xg = {
  key: 0,
  class: "info-note",
  part: "field-help"
}, _g = /* @__PURE__ */ $e({
  __name: "InfoBlock",
  props: {
    field: { type: null }
  },
  setup(e) {
    return (t, n) => e.field.body ? (b(), k("p", xg, L(e.field.body), 1)) : oe("", !0);
  }
}), _l = /* @__PURE__ */ $e({
  __name: "FieldHost",
  props: {
    field: { type: null }
  },
  setup(e) {
    const t = e, n = Ht(Ki);
    if (!n)
      throw new Error("FieldHost must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r } = n, s = G(() => i.selections[t.field.id]), a = G(() => r.errorFor(t.field.id)), o = G(() => {
      const u = s.value;
      return Array.isArray(u) ? u : typeof u == "string" && u !== "" ? [u] : [];
    }), l = G(() => {
      if (!zt(t.field) || !i.schema.value)
        return [];
      const u = i.schema.value;
      return t.field.options.filter(
        (d) => !vp(u, i.selections, t.field.id, d.id)
      ).map((d) => d.id);
    });
    function c(u) {
      t.field.type === "select-many" ? i.toggle(t.field, u) : i.select(t.field.id, u), r.touch(t.field.id);
    }
    return (u, d) => (b(), Pe(Mh, {
      field: e.field,
      error: a.value
    }, {
      default: ao(() => [
        e.field.type === "select-one" || e.field.type === "select-many" ? (b(), Pe(Ec(E(Na)[e.field.display] ?? E(Na).pills), {
          key: 0,
          field: e.field,
          "selected-ids": o.value,
          "unavailable-ids": l.value,
          error: a.value,
          onPick: c
        }, null, 40, ["field", "selected-ids", "unavailable-ids", "error"])) : e.field.type === "quantity" ? (b(), Pe(Bh, {
          key: 1,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[0] || (d[0] = (f) => E(i).select(e.field.id, f)),
          onTouch: d[1] || (d[1] = (f) => E(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "quantities" ? (b(), Pe(tm, {
          key: 2,
          field: e.field,
          value: s.value,
          "unavailable-ids": l.value,
          error: a.value,
          onSelect: d[2] || (d[2] = (f) => E(i).select(e.field.id, f)),
          onTouch: d[3] || (d[3] = (f) => E(r).touch(e.field.id))
        }, null, 8, ["field", "value", "unavailable-ids", "error"])) : e.field.type === "number" ? (b(), Pe(um, {
          key: 3,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[4] || (d[4] = (f) => E(i).select(e.field.id, f)),
          onTouch: d[5] || (d[5] = (f) => E(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "text" ? (b(), Pe(pm, {
          key: 4,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[6] || (d[6] = (f) => E(i).select(e.field.id, f)),
          onTouch: d[7] || (d[7] = (f) => E(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "dimensions" ? (b(), Pe(Sm, {
          key: 5,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[8] || (d[8] = (f) => E(i).select(e.field.id, f)),
          onTouch: d[9] || (d[9] = (f) => E(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "file" ? (b(), Pe(hg, {
          key: 6,
          field: e.field,
          error: a.value
        }, null, 8, ["field", "error"])) : e.field.type === "info" && e.field.display === "summary" ? (b(), Pe(bg, {
          key: 7,
          sections: E(i).visibleSections.value,
          selections: E(i).selections,
          file: E(i).file.value,
          uploads: E(i).uploads
        }, null, 8, ["sections", "selections", "file", "uploads"])) : e.field.type === "info" ? (b(), Pe(_g, {
          key: 8,
          field: e.field
        }, null, 8, ["field"])) : oe("", !0)
      ]),
      _: 1
    }, 8, ["field", "error"]));
  }
}), wg = {
  class: "section-title",
  part: "section-title"
}, kg = /* @__PURE__ */ $e({
  __name: "SectionStack",
  props: {
    sections: { type: Array }
  },
  setup(e) {
    return (t, n) => (b(!0), k(le, null, Me(e.sections, (i) => (b(), k("section", {
      key: i.section.id,
      class: "section",
      part: "section"
    }, [
      P("h3", wg, L(i.section.title), 1),
      (b(!0), k(le, null, Me(i.fields, (r) => (b(), Pe(_l, {
        key: r.id,
        field: r
      }, null, 8, ["field"]))), 128))
    ]))), 128));
  }
}), Sg = { class: "wizard" }, Tg = {
  class: "wizard-nav",
  part: "wizard-nav"
}, Cg = ["part", "aria-current"], Ag = ["onClick"], $g = {
  class: "wizard-step-index",
  "aria-hidden": "true"
}, Ig = { class: "wizard-step-title" }, Ng = {
  key: 0,
  class: "section",
  part: "section"
}, Eg = { class: "wizard-actions" }, Og = /* @__PURE__ */ $e({
  __name: "SectionWizard",
  props: {
    sections: { type: Array },
    issues: { type: Array }
  },
  emits: ["blocked"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n, { t: s } = ct(), a = /* @__PURE__ */ Ve(0), o = /* @__PURE__ */ Ve(null);
    _t(
      () => i.sections.length,
      (y) => {
        a.value > y - 1 && (a.value = Math.max(0, y - 1));
      }
    );
    const l = G(() => i.sections[a.value]), c = G(() => a.value >= i.sections.length - 1);
    function u(y) {
      const _ = i.sections[y];
      if (!_)
        return [];
      const N = new Set(_.fields.map((w) => w.id));
      return i.issues.filter((w) => N.has(w.fieldId));
    }
    function d(y) {
      return y === a.value ? "active" : y < a.value && u(y).length === 0 ? "done" : "todo";
    }
    async function f(y) {
      var _;
      a.value = Math.max(0, Math.min(y, i.sections.length - 1)), await Ui(), (_ = o.value) == null || _.focus();
    }
    function m() {
      const y = u(a.value);
      if (y.length > 0) {
        r("blocked", y);
        return;
      }
      f(a.value + 1);
    }
    function v() {
      f(a.value - 1);
    }
    return t({ goTo: f, current: a }), (y, _) => (b(), k("div", Sg, [
      P("ol", Tg, [
        (b(!0), k(le, null, Me(e.sections, (N, w) => (b(), k("li", {
          key: N.section.id,
          class: Ke(["wizard-step", d(w)]),
          part: `wizard-step wizard-step-${d(w)}`,
          "aria-current": w === a.value ? "step" : void 0
        }, [
          P("button", {
            type: "button",
            class: "wizard-step-button",
            onClick: (j) => f(w)
          }, [
            P("span", $g, L(d(w) === "done" ? "✓" : w + 1), 1),
            P("span", Ig, L(N.section.title), 1)
          ], 8, Ag)
        ], 10, Cg))), 128))
      ]),
      l.value ? (b(), k("section", Ng, [
        P("h3", {
          ref_key: "heading",
          ref: o,
          class: "section-title",
          part: "section-title",
          tabindex: "-1"
        }, L(l.value.section.title), 513),
        (b(!0), k(le, null, Me(l.value.fields, (N) => (b(), Pe(_l, {
          key: N.id,
          field: N
        }, null, 8, ["field"]))), 128))
      ])) : oe("", !0),
      P("div", Eg, [
        a.value > 0 ? (b(), k("button", {
          key: 0,
          type: "button",
          class: "wizard-back",
          part: "wizard-back",
          onClick: v
        }, L(E(s)("wizard.back")), 1)) : oe("", !0),
        c.value ? oe("", !0) : (b(), k("button", {
          key: 1,
          type: "button",
          class: "wizard-next",
          part: "wizard-next",
          onClick: m
        }, L(E(s)("wizard.continue")), 1))
      ])
    ]));
  }
}), Pg = {
  class: "summary",
  part: "summary"
}, Mg = { part: "summary-title" }, Rg = { class: "lines" }, Fg = { part: "summary-line-label" }, jg = { part: "summary-line-value" }, Lg = {
  class: "subtotal",
  part: "summary-net"
}, Dg = { part: "summary-net-label" }, zg = { part: "summary-net-value" }, qg = {
  class: "tax-line",
  part: "summary-tax"
}, Ug = { part: "summary-tax-label" }, Vg = { part: "summary-tax-value" }, Bg = {
  class: "total",
  part: "summary-total",
  "aria-live": "polite",
  "aria-atomic": "true"
}, Zg = { part: "summary-total-label" }, Hg = { part: "price" }, Wg = {
  key: 1,
  class: "tax-included",
  part: "summary-tax-included"
}, Kg = {
  key: 2,
  class: "unit-price",
  part: "summary-unit"
}, Gg = {
  key: 3,
  class: "next-break",
  part: "summary-hint"
}, Yg = {
  key: 4,
  class: "price-note",
  part: "summary-note"
}, Qg = {
  key: 5,
  class: "unavailable",
  role: "status"
}, Jg = ["disabled"], Xg = {
  class: "visually-hidden",
  role: "status"
}, ev = /* @__PURE__ */ $e({
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
    const n = e, i = t, { t: r } = ct();
    function s(v) {
      var y;
      return Xp(
        v,
        ((y = n.price) == null ? void 0 : y.currency) ?? "USD",
        n.locale,
        n.priceFormat
      );
    }
    const a = G(
      () => {
        var v;
        return (((v = n.price) == null ? void 0 : v.lines) ?? []).filter(
          (y) => !(y.amount === 0 && (y.stage === "base" || y.stage === "percent" || y.stage === "multiplier"))
        );
      }
    ), o = G(() => {
      var y;
      const v = n.nextBreak;
      if (!(!v || (y = n.price) != null && y.unavailable))
        return v.percentOff !== void 0 ? r("summary.nextBreakPercent", {
          count: v.add,
          percent: $a(v.percentOff, n.locale)
        }) : r("summary.nextBreakPrice", { count: v.add, unitPrice: s(v.unitPrice) });
    }), l = G(
      () => {
        var v, y;
        return (((v = n.price) == null ? void 0 : v.quantity) ?? 1) > 1 && !((y = n.price) != null && y.unavailable);
      }
    ), c = G(() => {
      const v = n.price;
      if (!(!n.tax || !v || v.unavailable))
        return nh(v.total, v.currency, n.tax);
    }), u = G(() => {
      var v, y;
      return {
        tax: ((v = n.tax) == null ? void 0 : v.name) ?? r("tax.name"),
        rate: $a(((y = n.tax) == null ? void 0 : y.rate) ?? 0, n.locale)
      };
    }), d = G(() => {
      var v;
      return c.value !== void 0 && ((v = n.tax) == null ? void 0 : v.mode) === "exclusive";
    }), f = G(
      () => {
        var v, y;
        return d.value ? ((v = c.value) == null ? void 0 : v.gross) ?? 0 : ((y = n.price) == null ? void 0 : y.total) ?? 0;
      }
    ), m = G(() => {
      const v = n.price;
      return v ? d.value && v.quantity > 0 ? f.value / v.quantity : v.unitPrice : 0;
    });
    return (v, y) => {
      var _, N;
      return b(), k("aside", Pg, [
        P("h3", Mg, L(E(r)("summary.title")), 1),
        P("ul", Rg, [
          (b(!0), k(le, null, Me(a.value, (w, j) => (b(), k("li", {
            key: j,
            part: "summary-line"
          }, [
            P("span", Fg, L(E(Hp)(E(r), w)), 1),
            P("span", jg, L(s(w.amount)), 1)
          ]))), 128))
        ]),
        d.value && c.value ? (b(), k(le, { key: 0 }, [
          P("div", Lg, [
            P("span", Dg, L(E(r)("summary.totalNet", u.value)), 1),
            P("span", zg, L(s(c.value.net)), 1)
          ]),
          P("div", qg, [
            P("span", Ug, L(E(r)("summary.tax", u.value)), 1),
            P("span", Vg, L(s(c.value.tax)), 1)
          ])
        ], 64)) : oe("", !0),
        P("div", Bg, [
          P("span", Zg, L(d.value ? E(r)("summary.totalGross", u.value) : E(r)("summary.total")), 1),
          P("strong", Hg, L(s(f.value)), 1)
        ]),
        c.value && !d.value ? (b(), k("p", Wg, L(E(r)("summary.taxIncluded", { ...u.value, amount: s(c.value.tax) })), 1)) : oe("", !0),
        l.value ? (b(), k("p", Kg, L(E(r)("summary.unitPrice", {
          quantity: ((_ = e.price) == null ? void 0 : _.quantity) ?? 0,
          unitPrice: s(m.value)
        })), 1)) : oe("", !0),
        o.value ? (b(), k("p", Gg, L(o.value), 1)) : oe("", !0),
        e.priceNote ? (b(), k("p", Yg, L(e.priceNote), 1)) : oe("", !0),
        (N = e.price) != null && N.unavailable ? (b(), k("p", Qg, L(E(r)(
          e.price.unavailableReason === "formula" ? "summary.unpriceable" : "summary.unavailable"
        )), 1)) : oe("", !0),
        (b(!0), k(le, null, Me(e.holds.filter((w) => w.message), (w) => (b(), k("p", {
          key: w.key,
          class: "hold-message",
          part: "hold-message",
          role: "status"
        }, L(w.message), 1))), 128)),
        P("button", {
          type: "button",
          class: "cta",
          part: "cta",
          disabled: e.holds.length > 0,
          onClick: y[0] || (y[0] = (w) => i("submit"))
        }, L(E(r)("summary.addToCart")), 9, Jg),
        P("span", Xg, L(e.issueCount > 0 ? E(r)("summary.issues", { count: e.issueCount }) : ""), 1)
      ]);
    };
  }
}), tv = {
  key: 0,
  class: "state"
}, nv = {
  key: 1,
  class: "state error",
  role: "alert"
}, iv = {
  key: 2,
  class: "layout"
}, rv = { class: "main" }, sv = /* @__PURE__ */ $e({
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
    function s(H) {
      if (H)
        try {
          const fe = typeof H == "string" ? JSON.parse(H) : H;
          return Yf.parse(fe);
        } catch {
          return;
        }
    }
    const a = Dp({
      configUrl: i.configUrl,
      uploadEndpoint: i.uploadEndpoint,
      turnstileUrl: i.turnstileUrl,
      provider: s(i.provider),
      inlineConfig: i.config
    }), o = G(() => Kp(i.strings)), l = yl(() => o.value);
    vr(bl, l);
    const c = G(() => Jp(i.priceFormat)), u = G(() => th(i.taxMode, i.taxRate, i.taxName)), d = Gp(
      a.visibleFields,
      a.selections,
      a.price,
      l.t
    ), f = Vu(), m = qp(), v = Bp({ host: f });
    vr(Ki, { cfg: a, validation: d, producers: v });
    const y = Up({ host: f, cfg: a, validation: d, holds: m, producers: v });
    Ep(a, v);
    const _ = /* @__PURE__ */ Ve(null), N = /* @__PURE__ */ Ve(null);
    ns(() => {
      (i.config || i.configUrl) && a.load().then(() => {
        a.unconfigured.value ? r("unconfigured", { productId: i.productId }) : a.schema.value && y.notifyReady();
      });
    }), _t(
      () => i.config,
      (H, fe) => {
        H && H !== fe && (d.reset(), a.reload({
          inlineConfig: H,
          provider: s(i.provider)
        }).then(() => {
          a.schema.value && y.notifyReady();
        }));
      }
    );
    const w = G(() => {
      const H = {}, fe = a.schema.value;
      if (!fe)
        return H;
      for (const Se of fe.sections)
        for (const C of Se.fields)
          if (H[C.id] = C.label ?? C.id, zt(C))
            for (const g of C.options)
              H[`${C.id}:${g.id}`] = g.label;
      return H;
    });
    function j() {
      return !a.schema.value || !a.price.value ? null : {
        productId: a.schema.value.productId,
        selections: { ...a.selections },
        quantity: a.price.value.quantity,
        file: a.file.value,
        price: a.price.value,
        sku: a.price.value.sku,
        labels: w.value,
        display: gl(
          a.visibleSections.value,
          a.selections,
          a.file.value,
          {
            quantityLabel: l.t("quantity.label"),
            artworkLabel: l.t("artwork.label"),
            designName: l.t("artwork.designName"),
            fileLinkLabel: l.t("upload.downloadLink"),
            uploads: a.uploads
          }
        ),
        files: R()
      };
    }
    function R() {
      return a.visibleSections.value.flatMap(
        ({ fields: H }) => H.flatMap(
          (fe) => (a.uploads[fe.id] ?? []).map((Se) => {
            var g;
            const C = (g = Se.raw) == null ? void 0 : g.downloadUrl;
            return {
              fieldId: fe.id,
              fileId: Se.fileId,
              ...Se.fileName ? { fileName: Se.fileName } : {},
              ...typeof C == "string" && C.startsWith("https://") ? { downloadUrl: C } : {}
            };
          })
        )
      );
    }
    function O(H) {
      var Se, C;
      const fe = (Se = _.value) == null ? void 0 : Se.querySelector(`[data-field-id="${H}"]`);
      fe && (fe.scrollIntoView({ behavior: "smooth", block: "center" }), (C = fe.querySelector(
        "button, input, select, textarea, [tabindex]"
      )) == null || C.focus({ preventScroll: !0 }));
    }
    function Q() {
      var Se, C, g;
      const H = j();
      if (!H)
        return;
      if (m.held.value) {
        r("invalid", {
          productId: H.productId,
          issues: [],
          holds: m.list.value
        });
        return;
      }
      const fe = d.touchAll();
      if (fe.length > 0 || (Se = a.price.value) != null && Se.unavailable) {
        const q = fe[0];
        if (q) {
          const pe = a.visibleSections.value.findIndex(
            (ue) => ue.fields.some((se) => se.id === q.fieldId)
          );
          ((C = a.schema.value) == null ? void 0 : C.layout) === "wizard" && pe >= 0 && ((g = N.value) == null || g.goTo(pe)), O(q.fieldId);
        }
        r("invalid", {
          productId: H.productId,
          issues: fe
        });
        return;
      }
      r("submit", { ...H, valid: !0 });
    }
    function W(H) {
      for (const Se of H)
        d.touch(Se.fieldId);
      const fe = H[0];
      fe && O(fe.fieldId);
    }
    return t(y.exposed), (H, fe) => E(a).unconfigured.value ? oe("", !0) : (b(), k("div", {
      key: 0,
      ref_key: "root",
      ref: _,
      class: "configurator",
      part: "base"
    }, [
      E(a).loading.value ? (b(), k("p", tv, L(E(l).t("state.loading")), 1)) : E(a).error.value ? (b(), k("p", nv, L(E(a).error.value), 1)) : E(a).schema.value ? (b(), k("div", iv, [
        P("div", rv, [
          E(a).schema.value.layout === "wizard" ? (b(), Pe(Og, {
            key: 0,
            ref_key: "wizard",
            ref: N,
            sections: E(a).visibleSections.value,
            issues: E(d).issues.value,
            onBlocked: W
          }, null, 8, ["sections", "issues"])) : (b(), Pe(kg, {
            key: 1,
            sections: E(a).visibleSections.value
          }, null, 8, ["sections"]))
        ]),
        Xe(ev, {
          price: E(a).price.value,
          locale: i.locale,
          "price-format": c.value,
          "price-note": i.priceNote,
          tax: u.value,
          "next-break": E(a).nextBreak.value,
          holds: E(m).list.value,
          "issue-count": E(d).issues.value.length,
          onSubmit: Q
        }, null, 8, ["price", "locale", "price-format", "price-note", "tax", "next-break", "holds", "issue-count"])
      ])) : oe("", !0)
    ], 512));
  }
}), av = ":host{--pc-color-accent: #1a1a1a;--pc-color-accent-contrast: #ffffff;--pc-color-accent-soft: #f6f6f4;--pc-color-surface: #ffffff;--pc-color-surface-alt: #fafafa;--pc-color-border: #e0e0dc;--pc-color-text: #1a1a1a;--pc-color-text-muted: #6b7280;--pc-color-danger: #c0392b;--pc-color-focus: var(--pc-color-accent);--pc-font-family: inherit;--pc-font-size: 1em;--pc-label-weight: 600;--pc-radius-control: 8px;--pc-radius-card: 12px;--pc-space: 4px;--pc-shadow-card: none;--pc-cta-bg: var(--pc-color-accent);--pc-cta-color: var(--pc-color-accent-contrast);--pc-swatch-size: 44px;--pc-card-image-height: 90px;display:block;container:pc-root / inline-size;font-family:var(--pc-font-family);font-size:var(--pc-font-size);color:var(--pc-color-text)}", ov = '*{box-sizing:border-box}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.state{padding:calc(var(--pc-space) * 8);text-align:center;color:var(--pc-color-text-muted)}.state.error{color:var(--pc-color-danger)}.layout{display:grid;grid-template-columns:1fr 300px;gap:calc(var(--pc-space) * 6);align-items:start}.section{margin-bottom:calc(var(--pc-space) * 6);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);box-shadow:var(--pc-shadow-card)}.section-title{margin:0 0 calc(var(--pc-space) * 4);text-transform:uppercase;letter-spacing:.04em;font-size:.95em;color:var(--pc-color-text);outline:none}.field{margin-bottom:calc(var(--pc-space) * 5)}.field:last-child{margin-bottom:0}.field-label{display:block;font-weight:var(--pc-label-weight);margin-bottom:calc(var(--pc-space) * 2)}.req{color:var(--pc-color-danger)}.help{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.field-error{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--pc-color-focus);outline-offset:2px}.grid{display:grid;gap:calc(var(--pc-space) * 3);grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.grid.cards{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.card{position:relative;display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;transition:border-color .15s ease}.card:hover{border-color:var(--pc-color-accent-soft)}.card.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.card img{max-width:100%;height:var(--pc-card-image-height);object-fit:contain}.card-label{font-size:.9em}.card-description{font-size:.8em;color:var(--pc-color-text-muted)}.check{position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);display:grid;place-items:center;font-size:.8em}.swatches{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.swatch{width:var(--pc-swatch-size);height:var(--pc-swatch-size);border-radius:50%;border:3px solid transparent;cursor:pointer;display:grid;place-items:center}.swatch.active{border-color:var(--pc-color-accent);box-shadow:0 0 0 2px var(--pc-color-surface) inset}.swatch-check{color:#fff;text-shadow:0 0 3px rgb(0 0 0 / .8);font-size:.9em}.swatch-selected-label{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.pills{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.pill{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);cursor:pointer}.pill.active{background:var(--pc-color-accent);border-color:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.choice-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.choice-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);padding:calc(var(--pc-space) * 3);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;text-align:left;cursor:pointer}.choice-row.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.choice-indicator{flex:none;width:20px;height:20px;border:2px solid var(--pc-color-border);border-radius:50%;display:grid;place-items:center;font-size:.7em;color:var(--pc-color-accent-contrast)}.choice-indicator.multi{border-radius:4px}.choice-row.active .choice-indicator{background:var(--pc-color-accent);border-color:var(--pc-color-accent)}.choice-body{display:flex;flex-direction:column}.choice-title{font-weight:var(--pc-label-weight)}.choice-description{font-size:.85em;color:var(--pc-color-text-muted)}.card.unavailable,.pill.unavailable,.swatch.unavailable,.choice-row.unavailable{opacity:.4;cursor:not-allowed;text-decoration:line-through}.dropdown{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.quantities-grid{display:grid;gap:calc(var(--pc-space) * 2);grid-template-columns:repeat(auto-fill,minmax(118px,1fr))}.quantities-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.quantities-item{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 3) calc(var(--pc-space) * 2);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface)}.quantities-list .quantities-item{flex-direction:row;justify-content:space-between;padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3)}.quantities-item.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.quantities-item.off .quantities-label{text-decoration:line-through;color:var(--pc-color-text-muted)}.quantities-name{display:inline-flex;align-items:center;gap:calc(var(--pc-space) * 2);font-weight:var(--pc-label-weight)}.quantities-swatch{width:1.1em;height:1.1em;border-radius:50%;border:1px solid var(--pc-color-border)}.quantities-image{height:2em;width:auto;object-fit:contain}.quantities-item .stepper button{width:32px}.quantities-item .stepper-value{width:3em}.quantities-total{margin:calc(var(--pc-space) * 2) 0 0;text-align:right;font-size:.9em;color:var(--pc-color-text-muted)}.stepper{display:inline-flex;align-items:stretch;border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);overflow:hidden}.stepper button{width:40px;border:none;background:var(--pc-color-surface-alt);color:var(--pc-color-text);font-size:1.2em;cursor:pointer}.stepper button:disabled{opacity:.4;cursor:not-allowed}.stepper-value{width:4.5em;border:none;text-align:center;font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);background:var(--pc-color-surface);-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.stepper-value::-webkit-outer-spin-button,.stepper-value::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.number-input,.text-input{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.textarea{width:100%;resize:vertical}.slider-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3)}.slider{flex:1;accent-color:var(--pc-color-accent)}.slider-value{min-width:3em;text-align:right;font-weight:var(--pc-label-weight)}.dimensions{display:flex;align-items:flex-end;gap:calc(var(--pc-space) * 2);flex-wrap:wrap}.dim-input{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1)}.dim-label{font-size:.8em;color:var(--pc-color-text-muted)}.dim-input input{width:6em;padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);font:inherit;color:var(--pc-color-text);background:var(--pc-color-surface)}.dim-times{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.dim-unit{min-width:5em}.dim-unit-static{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.upload-input{position:absolute;width:1px;height:1px;opacity:0;overflow:hidden}.upload-zone{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 6);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);cursor:pointer;text-align:center}.upload.dragging .upload-zone{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.upload.done .upload-zone{border-style:solid;border-color:var(--pc-color-accent)}.upload-title{font-weight:var(--pc-label-weight)}.upload-hint{font-size:.8em;color:var(--pc-color-text-muted)}.upload-wrong-type{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.upload-files{list-style:none;margin:0 0 calc(var(--pc-space) * 2);padding:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1.5)}.upload-file{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:1px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-surface)}.upload-remove{flex:none;border:none;background:none;padding:0;font:inherit;font-size:.85em;color:var(--pc-color-text-muted);text-decoration:underline;cursor:pointer}.upload-remove:hover{color:var(--pc-color-danger)}.upload-filename{font-weight:var(--pc-label-weight);color:var(--pc-color-accent);word-break:break-all}.upload-status{color:var(--pc-color-accent);font-weight:var(--pc-label-weight)}.producers{display:flex;flex-direction:column}.producer{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;text-align:center;transition:border-color .15s ease}.producer:hover{border-color:var(--pc-color-accent)}.producer-label{font-weight:var(--pc-label-weight)}.producer-description{font-size:.8em;color:var(--pc-color-text-muted)}.producer-or{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);margin:calc(var(--pc-space) * 3) 0;font-size:.8em;text-transform:uppercase;letter-spacing:.06em;color:var(--pc-color-text-muted)}.producer-or:before,.producer-or:after{content:"";flex:1;height:1px;background:var(--pc-color-border)}.artwork{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 4);flex-wrap:wrap;padding:calc(var(--pc-space) * 4) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-accent-soft)}.artwork-body{display:flex;flex-direction:column;min-width:0}.artwork-name{font-weight:var(--pc-label-weight);word-break:break-all}.artwork-meta{font-size:.85em;color:var(--pc-color-text-muted)}.artwork-actions{display:flex;gap:calc(var(--pc-space) * 2)}.artwork-action{padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-size:.9em;cursor:pointer}.artwork-action:hover{border-color:var(--pc-color-accent)}.fc-slot{min-height:40px}.fc-loading{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.fc-panel{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);text-align:center;align-items:center}.fc-panel.fc-error{border-color:var(--pc-color-danger)}.fc-panel-title{font-weight:var(--pc-label-weight)}.fc-panel-hint{font-size:.85em;color:var(--pc-color-text-muted)}.fc-retry{margin-top:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.recap{margin:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.recap-row{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 4);font-size:.9em}.recap-row dt{color:var(--pc-color-text-muted)}.recap-row dd{margin:0;text-align:right}.recap-empty,.info-note{margin:0;font-size:.9em;color:var(--pc-color-text-muted)}.summary{position:sticky;top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt)}.summary h3{margin:0 0 calc(var(--pc-space) * 4)}.lines{list-style:none;margin:0 0 calc(var(--pc-space) * 4);padding:0}.lines li{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0;color:var(--pc-color-text-muted)}.total{display:flex;justify-content:space-between;padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border);font-size:1.1em}.subtotal,.tax-line{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0}.subtotal{padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border)}.tax-line{margin-bottom:calc(var(--pc-space) * 2);color:var(--pc-color-text-muted)}.tax-included,.unit-price{margin:calc(var(--pc-space) * 1) 0 0;text-align:right;font-size:.85em;color:var(--pc-color-text-muted)}.next-break{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;font-weight:var(--pc-label-weight);color:var(--pc-color-accent)}.price-note{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.unavailable{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.hold-message{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.cta{width:100%;margin-top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 3.5);border:none;border-radius:var(--pc-radius-control);background:var(--pc-cta-bg);color:var(--pc-cta-color);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.cta:disabled{opacity:.5;cursor:not-allowed}.wizard-nav{list-style:none;display:flex;gap:calc(var(--pc-space) * 2);margin:0 0 calc(var(--pc-space) * 5);padding:0;flex-wrap:wrap}.wizard-step-button{display:flex;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:none;border-radius:var(--pc-radius-control);background:transparent;font:inherit;color:var(--pc-color-text-muted);cursor:pointer}.wizard-step.active .wizard-step-button{background:var(--pc-color-accent-soft);color:var(--pc-color-text);font-weight:var(--pc-label-weight)}.wizard-step-index{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--pc-color-border);color:var(--pc-color-text);font-size:.75em}.wizard-step.active .wizard-step-index,.wizard-step.done .wizard-step-index{background:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.wizard-actions{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 3)}.wizard-back,.wizard-next{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 6);border-radius:var(--pc-radius-control);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.wizard-back{border:2px solid var(--pc-color-border);background:var(--pc-color-surface);color:var(--pc-color-text)}.wizard-next{border:none;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);margin-left:auto}@container pc-root (max-width: 640px){.layout{grid-template-columns:1fr}.summary{position:static}}', lv = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, cv = /* @__PURE__ */ lv(sv, [["styles", [av, ov]]]), uv = /* @__PURE__ */ qu(cv);
function dv(e = "print-configurator") {
  typeof customElements < "u" && !customElements.get(e) && customElements.define(e, uv);
}
dv();
export {
  vl as DEFAULT_STRINGS,
  qr as PAGE_API_VERSION,
  uv as PrintConfiguratorElement,
  dv as registerPrintConfigurator
};
