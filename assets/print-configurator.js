var Yo = Object.defineProperty;
var Qo = (e, t, n) => t in e ? Yo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ns = (e, t, n) => Qo(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function wr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const we = {}, on = [], vt = () => {
}, oa = () => !1, _i = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xi = (e) => e.startsWith("onUpdate:"), Ae = Object.assign, kr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Jo = Object.prototype.hasOwnProperty, fe = (e, t) => Jo.call(e, t), te = Array.isArray, ln = (e) => Hn(e) === "[object Map]", la = (e) => Hn(e) === "[object Set]", is = (e) => Hn(e) === "[object Date]", ne = (e) => typeof e == "function", Se = (e) => typeof e == "string", rt = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", ca = (e) => (ve(e) || ne(e)) && ne(e.then) && ne(e.catch), ua = Object.prototype.toString, Hn = (e) => ua.call(e), Xo = (e) => Hn(e).slice(8, -1), wi = (e) => Hn(e) === "[object Object]", Sr = (e) => Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, En = /* @__PURE__ */ wr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ki = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, el = /-\w/g, Pe = ki(
  (e) => e.replace(el, (t) => t.slice(1).toUpperCase())
), tl = /\B([A-Z])/g, We = ki(
  (e) => e.replace(tl, "-$1").toLowerCase()
), Si = ki((e) => e.charAt(0).toUpperCase() + e.slice(1)), ji = ki(
  (e) => e ? `on${Si(e)}` : ""
), gt = (e, t) => !Object.is(e, t), Di = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, da = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, nl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, rs = (e) => {
  const t = Se(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ss;
const Ci = () => ss || (ss = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ai(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = Se(i) ? al(i) : Ai(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Se(e) || ve(e))
    return e;
}
const il = /;(?![^(]*\))/g, rl = /:([^]+)/, sl = /\/\*[^]*?\*\//g;
function al(e) {
  const t = {};
  return e.replace(sl, "").split(il).forEach((n) => {
    if (n) {
      const i = n.split(rl);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function et(e) {
  let t = "";
  if (Se(e))
    t = e;
  else if (te(e))
    for (let n = 0; n < e.length; n++) {
      const i = et(e[n]);
      i && (t += i + " ");
    }
  else if (ve(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ol = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ll = /* @__PURE__ */ wr(ol);
function fa(e) {
  return !!e || e === "";
}
function cl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Cr(e[i], t[i]);
  return n;
}
function Cr(e, t) {
  if (e === t) return !0;
  let n = is(e), i = is(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = rt(e), i = rt(t), n || i)
    return e === t;
  if (n = te(e), i = te(t), n || i)
    return n && i ? cl(e, t) : !1;
  if (n = ve(e), i = ve(t), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !Cr(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const pa = (e) => !!(e && e.__v_isRef === !0), z = (e) => Se(e) ? e : e == null ? "" : te(e) || ve(e) && (e.toString === ua || !ne(e.toString)) ? pa(e) ? z(e.value) : JSON.stringify(e, ha, 2) : String(e), ha = (e, t) => pa(t) ? ha(e, t.value) : ln(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[Li(i, s) + " =>"] = r, n),
    {}
  )
} : la(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Li(n))
} : rt(t) ? Li(t) : ve(t) && !te(t) && !wi(t) ? String(t) : t, Li = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Re;
class ul {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Re && (Re.active ? (this.parent = Re, this.index = (Re.scopes || (Re.scopes = [])).push(
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
      const n = Re;
      try {
        return Re = this, t();
      } finally {
        Re = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Re, Re = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Re === this)
        Re = this.prevScope;
      else {
        let t = Re;
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
function dl() {
  return Re;
}
let xe;
const zi = /* @__PURE__ */ new WeakSet();
class ma {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && (Re.active ? Re.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, zi.has(this) && (zi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || va(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, as(this), ya(this);
    const t = xe, n = it;
    xe = this, it = !0;
    try {
      return this.fn();
    } finally {
      ba(this), xe = t, it = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $r(t);
      this.deps = this.depsTail = void 0, as(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? zi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Yi(this) && this.run();
  }
  get dirty() {
    return Yi(this);
  }
}
let ga = 0, On, Pn;
function va(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pn, Pn = e;
    return;
  }
  e.next = On, On = e;
}
function Ar() {
  ga++;
}
function Tr() {
  if (--ga > 0)
    return;
  if (Pn) {
    let t = Pn;
    for (Pn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; On; ) {
    let t = On;
    for (On = void 0; t; ) {
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
function ya(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ba(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const r = i.prevDep;
    i.version === -1 ? (i === n && (n = r), $r(i), fl(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r;
  }
  e.deps = t, e.depsTail = n;
}
function Yi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (_a(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function _a(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Fn) || (e.globalVersion = Fn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Yi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = xe, i = it;
  xe = e, it = !0;
  try {
    ya(e);
    const r = e.fn(e._value);
    (t.version === 0 || gt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    xe = n, it = i, ba(e), e.flags &= -3;
  }
}
function $r(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: r } = e;
  if (i && (i.nextSub = r, e.prevSub = void 0), r && (r.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      $r(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function fl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let it = !0;
const xa = [];
function It() {
  xa.push(it), it = !1;
}
function Et() {
  const e = xa.pop();
  it = e === void 0 ? !0 : e;
}
function as(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = xe;
    xe = void 0;
    try {
      t();
    } finally {
      xe = n;
    }
  }
}
let Fn = 0;
class pl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ir {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!xe || !it || xe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xe)
      n = this.activeLink = new pl(xe, this), xe.deps ? (n.prevDep = xe.depsTail, xe.depsTail.nextDep = n, xe.depsTail = n) : xe.deps = xe.depsTail = n, wa(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = xe.depsTail, n.nextDep = void 0, xe.depsTail.nextDep = n, xe.depsTail = n, xe.deps === n && (xe.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Fn++, this.notify(t);
  }
  notify(t) {
    Ar();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Tr();
    }
  }
}
function wa(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        wa(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Qi = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ Symbol(
  ""
), Ji = /* @__PURE__ */ Symbol(
  ""
), jn = /* @__PURE__ */ Symbol(
  ""
);
function Fe(e, t, n) {
  if (it && xe) {
    let i = Qi.get(e);
    i || Qi.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || (i.set(n, r = new Ir()), r.map = i, r.key = n), r.track();
  }
}
function At(e, t, n, i, r, s) {
  const a = Qi.get(e);
  if (!a) {
    Fn++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Ar(), t === "clear")
    a.forEach(o);
  else {
    const l = te(e), c = l && Sr(n);
    if (l && n === "length") {
      const u = Number(i);
      a.forEach((d, p) => {
        (p === "length" || p === jn || !rt(p) && p >= u) && o(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), c && o(a.get(jn)), t) {
        case "add":
          l ? c && o(a.get("length")) : (o(a.get(Gt)), ln(e) && o(a.get(Ji)));
          break;
        case "delete":
          l || (o(a.get(Gt)), ln(e) && o(a.get(Ji)));
          break;
        case "set":
          ln(e) && o(a.get(Gt));
          break;
      }
  }
  Tr();
}
function tn(e) {
  const t = /* @__PURE__ */ de(e);
  return t === e ? t : (Fe(t, "iterate", jn), /* @__PURE__ */ Je(e) ? t : t.map(st));
}
function Ti(e) {
  return Fe(e = /* @__PURE__ */ de(e), "iterate", jn), e;
}
function ht(e, t) {
  return /* @__PURE__ */ Ot(e) ? pn(/* @__PURE__ */ Yt(e) ? st(t) : t) : st(t);
}
const hl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Vi(this, Symbol.iterator, (e) => ht(this, e));
  },
  concat(...e) {
    return tn(this).concat(
      ...e.map((t) => te(t) ? tn(t) : t)
    );
  },
  entries() {
    return Vi(this, "entries", (e) => (e[1] = ht(this, e[1]), e));
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
      (n) => n.map((i) => ht(this, i)),
      arguments
    );
  },
  find(e, t) {
    return wt(
      this,
      "find",
      e,
      t,
      (n) => ht(this, n),
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
      (n) => ht(this, n),
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
    return Ui(this, "includes", e);
  },
  indexOf(...e) {
    return Ui(this, "indexOf", e);
  },
  join(e) {
    return tn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ui(this, "lastIndexOf", e);
  },
  map(e, t) {
    return wt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return _n(this, "pop");
  },
  push(...e) {
    return _n(this, "push", e);
  },
  reduce(e, ...t) {
    return os(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return os(this, "reduceRight", e, t);
  },
  shift() {
    return _n(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return wt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return _n(this, "splice", e);
  },
  toReversed() {
    return tn(this).toReversed();
  },
  toSorted(e) {
    return tn(this).toSorted(e);
  },
  toSpliced(...e) {
    return tn(this).toSpliced(...e);
  },
  unshift(...e) {
    return _n(this, "unshift", e);
  },
  values() {
    return Vi(this, "values", (e) => ht(this, e));
  }
};
function Vi(e, t, n) {
  const i = Ti(e), r = i[t]();
  return i !== e && !/* @__PURE__ */ Je(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const ml = Array.prototype;
function wt(e, t, n, i, r, s) {
  const a = Ti(e), o = a !== e && !/* @__PURE__ */ Je(e), l = a[t];
  if (l !== ml[t]) {
    const d = l.apply(e, s);
    return o ? st(d) : d;
  }
  let c = n;
  a !== e && (o ? c = function(d, p) {
    return n.call(this, ht(e, d), p, e);
  } : n.length > 2 && (c = function(d, p) {
    return n.call(this, d, p, e);
  }));
  const u = l.call(a, c, i);
  return o && r ? r(u) : u;
}
function os(e, t, n, i) {
  const r = Ti(e), s = r !== e && !/* @__PURE__ */ Je(e);
  let a = n, o = !1;
  r !== e && (s ? (o = i.length === 0, a = function(c, u, d) {
    return o && (o = !1, c = ht(e, c)), n.call(this, c, ht(e, u), d, e);
  }) : n.length > 3 && (a = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const l = r[t](a, ...i);
  return o ? ht(e, l) : l;
}
function Ui(e, t, n) {
  const i = /* @__PURE__ */ de(e);
  Fe(i, "iterate", jn);
  const r = i[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Pr(n[0]) ? (n[0] = /* @__PURE__ */ de(n[0]), i[t](...n)) : r;
}
function _n(e, t, n = []) {
  It(), Ar();
  const i = (/* @__PURE__ */ de(e))[t].apply(e, n);
  return Tr(), Et(), i;
}
const gl = /* @__PURE__ */ wr("__proto__,__v_isRef,__isVue"), ka = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rt)
);
function vl(e) {
  rt(e) || (e = String(e));
  const t = /* @__PURE__ */ de(this);
  return Fe(t, "has", e), t.hasOwnProperty(e);
}
class Sa {
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
      return i === (r ? s ? Tl : $a : s ? Ta : Aa).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const a = te(t);
    if (!r) {
      let l;
      if (a && (l = hl[n]))
        return l;
      if (n === "hasOwnProperty")
        return vl;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ De(t) ? t : i
    );
    if ((rt(n) ? ka.has(n) : gl(n)) || (r || Fe(t, "get", n), s))
      return o;
    if (/* @__PURE__ */ De(o)) {
      const l = a && Sr(n) ? o : o.value;
      return r && ve(l) ? /* @__PURE__ */ er(l) : l;
    }
    return ve(o) ? r ? /* @__PURE__ */ er(o) : /* @__PURE__ */ Vt(o) : o;
  }
}
class Ca extends Sa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    const a = te(t) && Sr(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ot(s);
      if (!/* @__PURE__ */ Je(i) && !/* @__PURE__ */ Ot(i) && (s = /* @__PURE__ */ de(s), i = /* @__PURE__ */ de(i)), !a && /* @__PURE__ */ De(s) && !/* @__PURE__ */ De(i))
        return c || (s.value = i), !0;
    }
    const o = a ? Number(n) < t.length : fe(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ De(t) ? t : r
    );
    return t === /* @__PURE__ */ de(r) && (o ? gt(i, s) && At(t, "set", n, i) : At(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = fe(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && i && At(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!rt(n) || !ka.has(n)) && Fe(t, "has", n), i;
  }
  ownKeys(t) {
    return Fe(
      t,
      "iterate",
      te(t) ? "length" : Gt
    ), Reflect.ownKeys(t);
  }
}
class yl extends Sa {
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
const bl = /* @__PURE__ */ new Ca(), _l = /* @__PURE__ */ new yl(), xl = /* @__PURE__ */ new Ca(!0);
const Xi = (e) => e, Yn = (e) => Reflect.getPrototypeOf(e);
function wl(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = /* @__PURE__ */ de(r), a = ln(s), o = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = r[e](...i), u = n ? Xi : t ? pn : st;
    return !t && Fe(
      s,
      "iterate",
      l ? Ji : Gt
    ), Ae(
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
function Qn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function kl(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ de(s), o = /* @__PURE__ */ de(r);
      e || (gt(r, o) && Fe(a, "get", r), Fe(a, "get", o));
      const { has: l } = Yn(a), c = t ? Xi : e ? pn : st;
      if (l.call(a, r))
        return c(s.get(r));
      if (l.call(a, o))
        return c(s.get(o));
      s !== a && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Fe(/* @__PURE__ */ de(r), "iterate", Gt), r.size;
    },
    has(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ de(s), o = /* @__PURE__ */ de(r);
      return e || (gt(r, o) && Fe(a, "has", r), Fe(a, "has", o)), r === o ? s.has(r) : s.has(r) || s.has(o);
    },
    forEach(r, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ de(o), c = t ? Xi : e ? pn : st;
      return !e && Fe(l, "iterate", Gt), o.forEach((u, d) => r.call(s, c(u), c(d), a));
    }
  };
  return Ae(
    n,
    e ? {
      add: Qn("add"),
      set: Qn("set"),
      delete: Qn("delete"),
      clear: Qn("clear")
    } : {
      add(r) {
        const s = /* @__PURE__ */ de(this), a = Yn(s), o = /* @__PURE__ */ de(r), l = !t && !/* @__PURE__ */ Je(r) && !/* @__PURE__ */ Ot(r) ? o : r;
        return a.has.call(s, l) || gt(r, l) && a.has.call(s, r) || gt(o, l) && a.has.call(s, o) || (s.add(l), At(s, "add", l, l)), this;
      },
      set(r, s) {
        !t && !/* @__PURE__ */ Je(s) && !/* @__PURE__ */ Ot(s) && (s = /* @__PURE__ */ de(s));
        const a = /* @__PURE__ */ de(this), { has: o, get: l } = Yn(a);
        let c = o.call(a, r);
        c || (r = /* @__PURE__ */ de(r), c = o.call(a, r));
        const u = l.call(a, r);
        return a.set(r, s), c ? gt(s, u) && At(a, "set", r, s) : At(a, "add", r, s), this;
      },
      delete(r) {
        const s = /* @__PURE__ */ de(this), { has: a, get: o } = Yn(s);
        let l = a.call(s, r);
        l || (r = /* @__PURE__ */ de(r), l = a.call(s, r)), o && o.call(s, r);
        const c = s.delete(r);
        return l && At(s, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ de(this), s = r.size !== 0, a = r.clear();
        return s && At(
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
    n[r] = wl(r, e, t);
  }), n;
}
function Er(e, t) {
  const n = kl(e, t);
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    fe(n, r) && r in i ? n : i,
    r,
    s
  );
}
const Sl = {
  get: /* @__PURE__ */ Er(!1, !1)
}, Cl = {
  get: /* @__PURE__ */ Er(!1, !0)
}, Al = {
  get: /* @__PURE__ */ Er(!0, !1)
};
const Aa = /* @__PURE__ */ new WeakMap(), Ta = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ new WeakMap();
function $l(e) {
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
function Vt(e) {
  return /* @__PURE__ */ Ot(e) ? e : Or(
    e,
    !1,
    bl,
    Sl,
    Aa
  );
}
// @__NO_SIDE_EFFECTS__
function Il(e) {
  return Or(
    e,
    !1,
    xl,
    Cl,
    Ta
  );
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return Or(
    e,
    !0,
    _l,
    Al,
    $a
  );
}
function Or(e, t, n, i, r) {
  if (!ve(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = $l(Xo(e));
  if (a === 0)
    return e;
  const o = new Proxy(
    e,
    a === 2 ? i : n
  );
  return r.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return /* @__PURE__ */ Ot(e) ? /* @__PURE__ */ Yt(e.__v_raw) : !!(e && e.__v_isReactive);
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
function Pr(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function de(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ de(t) : e;
}
function El(e) {
  return !fe(e, "__v_skip") && Object.isExtensible(e) && da(e, "__v_skip", !0), e;
}
const st = (e) => ve(e) ? /* @__PURE__ */ Vt(e) : e, pn = (e) => ve(e) ? /* @__PURE__ */ er(e) : e;
// @__NO_SIDE_EFFECTS__
function De(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return Ol(e, !1);
}
function Ol(e, t) {
  return /* @__PURE__ */ De(e) ? e : new Pl(e, t);
}
class Pl {
  constructor(t, n) {
    this.dep = new Ir(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ de(t), this._value = n ? t : st(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ Ot(t);
    t = i ? t : /* @__PURE__ */ de(t), gt(t, n) && (this._rawValue = t, this._value = i ? t : st(t), this.dep.trigger());
  }
}
function O(e) {
  return /* @__PURE__ */ De(e) ? e.value : e;
}
const Nl = {
  get: (e, t, n) => t === "__v_raw" ? e : O(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return /* @__PURE__ */ De(r) && !/* @__PURE__ */ De(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Ia(e) {
  return /* @__PURE__ */ Yt(e) ? e : new Proxy(e, Nl);
}
class Rl {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ir(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Fn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    xe !== this)
      return va(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return _a(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ml(e, t, n = !1) {
  let i, r;
  return ne(e) ? i = e : (i = e.get, r = e.set), new Rl(i, r, n);
}
const Jn = {}, ei = /* @__PURE__ */ new WeakMap();
let Wt;
function Fl(e, t = !1, n = Wt) {
  if (n) {
    let i = ei.get(n);
    i || ei.set(n, i = []), i.push(e);
  }
}
function jl(e, t, n = we) {
  const { immediate: i, deep: r, once: s, scheduler: a, augmentJob: o, call: l } = n, c = (Z) => r ? Z : /* @__PURE__ */ Je(Z) || r === !1 || r === 0 ? jt(Z, 1) : jt(Z);
  let u, d, p, m, A = !1, _ = !1;
  if (/* @__PURE__ */ De(e) ? (d = () => e.value, A = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ Yt(e) ? (d = () => c(e), A = !0) : te(e) ? (_ = !0, A = e.some((Z) => /* @__PURE__ */ Yt(Z) || /* @__PURE__ */ Je(Z)), d = () => e.map((Z) => {
    if (/* @__PURE__ */ De(Z))
      return Z.value;
    if (/* @__PURE__ */ Yt(Z))
      return c(Z);
    if (ne(Z))
      return l ? l(Z, 2) : Z();
  })) : ne(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (p) {
      It();
      try {
        p();
      } finally {
        Et();
      }
    }
    const Z = Wt;
    Wt = u;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      Wt = Z;
    }
  } : d = vt, t && r) {
    const Z = d, y = r === !0 ? 1 / 0 : r;
    d = () => jt(Z(), y);
  }
  const I = dl(), M = () => {
    u.stop(), I && I.active && kr(I.effects, u);
  };
  if (s && t) {
    const Z = t;
    t = (...y) => {
      Z(...y), M();
    };
  }
  let F = _ ? new Array(e.length).fill(Jn) : Jn;
  const X = (Z) => {
    if (!(!(u.flags & 1) || !u.dirty && !Z))
      if (t) {
        const y = u.run();
        if (r || A || (_ ? y.some((K, T) => gt(K, F[T])) : gt(y, F))) {
          p && p();
          const K = Wt;
          Wt = u;
          try {
            const T = [
              y,
              // pass undefined as the old value when it's changed for the first time
              F === Jn ? void 0 : _ && F[0] === Jn ? [] : F,
              m
            ];
            F = y, l ? l(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            Wt = K;
          }
        }
      } else
        u.run();
  };
  return o && o(X), u = new ma(d), u.scheduler = a ? () => a(X, !1) : X, m = (Z) => Fl(Z, !1, u), p = u.onStop = () => {
    const Z = ei.get(u);
    if (Z) {
      if (l)
        l(Z, 4);
      else
        for (const y of Z) y();
      ei.delete(u);
    }
  }, t ? i ? X(!0) : F = u.run() : a ? a(X.bind(null, !0), !0) : u.run(), M.pause = u.pause.bind(u), M.resume = u.resume.bind(u), M.stop = M, M;
}
function jt(e, t = 1 / 0, n) {
  if (t <= 0 || !ve(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ De(e))
    jt(e.value, t, n);
  else if (te(e))
    for (let i = 0; i < e.length; i++)
      jt(e[i], t, n);
  else if (la(e) || ln(e))
    e.forEach((i) => {
      jt(i, t, n);
    });
  else if (wi(e)) {
    for (const i in e)
      jt(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && jt(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Bn(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (r) {
    $i(r, t, n);
  }
}
function at(e, t, n, i) {
  if (ne(e)) {
    const r = Bn(e, t, n, i);
    return r && ca(r) && r.catch((s) => {
      $i(s, t, n);
    }), r;
  }
  if (te(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(at(e[s], t, n, i));
    return r;
  }
}
function $i(e, t, n, i = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = t && t.appContext.config || we;
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
      It(), Bn(s, null, 10, [
        e,
        l,
        c
      ]), Et();
      return;
    }
  }
  Dl(e, n, r, i, a);
}
function Dl(e, t, n, i = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ze = [];
let pt = -1;
const cn = [];
let Mt = null, sn = 0;
const Ea = /* @__PURE__ */ Promise.resolve();
let ti = null;
function Ii(e) {
  const t = ti || Ea;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ll(e) {
  let t = pt + 1, n = ze.length;
  for (; t < n; ) {
    const i = t + n >>> 1, r = ze[i], s = Dn(r);
    s < e || s === e && r.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Nr(e) {
  if (!(e.flags & 1)) {
    const t = Dn(e), n = ze[ze.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Dn(n) ? ze.push(e) : ze.splice(Ll(t), 0, e), e.flags |= 1, Oa();
  }
}
function Oa() {
  ti || (ti = Ea.then(Na));
}
function zl(e) {
  te(e) ? cn.push(...e) : Mt && e.id === -1 ? Mt.splice(sn + 1, 0, e) : e.flags & 1 || (cn.push(e), e.flags |= 1), Oa();
}
function ls(e, t, n = pt + 1) {
  for (; n < ze.length; n++) {
    const i = ze[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      ze.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Pa(e) {
  if (cn.length) {
    const t = [...new Set(cn)].sort(
      (n, i) => Dn(n) - Dn(i)
    );
    if (cn.length = 0, Mt) {
      Mt.push(...t);
      return;
    }
    for (Mt = t, sn = 0; sn < Mt.length; sn++) {
      const n = Mt[sn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Mt = null, sn = 0;
  }
}
const Dn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Na(e) {
  try {
    for (pt = 0; pt < ze.length; pt++) {
      const t = ze[pt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; pt < ze.length; pt++) {
      const t = ze[pt];
      t && (t.flags &= -2);
    }
    pt = -1, ze.length = 0, Pa(), ti = null, (ze.length || cn.length) && Na();
  }
}
let Ve = null, Ra = null;
function ni(e) {
  const t = Ve;
  return Ve = e, Ra = e && e.type.__scopeId || null, t;
}
function Ma(e, t = Ve, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && _s(-1);
    const s = ni(t);
    let a;
    try {
      a = e(...r);
    } finally {
      ni(s), i._d && _s(1);
    }
    return a;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ht(e, t, n, i) {
  const r = e.dirs, s = t && t.dirs;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[i];
    l && (It(), at(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), Et());
  }
}
function tr(e, t) {
  if (je) {
    let n = je.provides;
    const i = je.parent && je.parent.provides;
    i === n && (n = je.provides = Object.create(i)), n[e] = t;
  }
}
function Lt(e, t, n = !1) {
  const i = uo();
  if (i || dn) {
    let r = dn ? dn._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(i && i.proxy) : t;
  }
}
const Vl = /* @__PURE__ */ Symbol.for("v-scx"), Ul = () => Lt(Vl);
function yt(e, t, n) {
  return Fa(e, t, n);
}
function Fa(e, t, n = we) {
  const { immediate: i, deep: r, flush: s, once: a } = n, o = Ae({}, n), l = t && i || !t && s !== "post";
  let c;
  if (zn) {
    if (s === "sync") {
      const m = Ul();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = vt, m.resume = vt, m.pause = vt, m;
    }
  }
  const u = je;
  o.call = (m, A, _) => at(m, u, A, _);
  let d = !1;
  s === "post" ? o.scheduler = (m) => {
    qe(m, u && u.suspense);
  } : s !== "sync" && (d = !0, o.scheduler = (m, A) => {
    A ? m() : Nr(m);
  }), o.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const p = jl(e, t, o);
  return zn && (c ? c.push(p) : l && p()), p;
}
function ql(e, t, n) {
  const i = this.proxy, r = Se(e) ? e.includes(".") ? ja(i, e) : () => i[e] : e.bind(i, i);
  let s;
  ne(t) ? s = t : (s = t.handler, n = t);
  const a = Wn(this), o = Fa(r, s.bind(i), n);
  return a(), o;
}
function ja(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
const Zl = /* @__PURE__ */ Symbol("_vte"), Hl = (e) => e.__isTeleport, qi = /* @__PURE__ */ Symbol("_leaveCb");
function Rr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Rr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function Da(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function cs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ii = /* @__PURE__ */ new WeakMap();
function Nn(e, t, n, i, r = !1) {
  if (te(e)) {
    e.forEach(
      (_, I) => Nn(
        _,
        t && (te(t) ? t[I] : t),
        n,
        i,
        r
      )
    );
    return;
  }
  if (un(i) && !r) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Nn(e, t, n, i.component.subTree);
    return;
  }
  const s = i.shapeFlag & 4 ? Vr(i.component) : i.el, a = r ? null : s, { i: o, r: l } = e, c = t && t.r, u = o.refs === we ? o.refs = {} : o.refs, d = o.setupState, p = /* @__PURE__ */ de(d), m = d === we ? oa : (_) => cs(u, _) ? !1 : fe(p, _), A = (_, I) => !(I && cs(u, I));
  if (c != null && c !== l) {
    if (us(t), Se(c))
      u[c] = null, m(c) && (d[c] = null);
    else if (/* @__PURE__ */ De(c)) {
      const _ = t;
      A(c, _.k) && (c.value = null), _.k && (u[_.k] = null);
    }
  }
  if (ne(l))
    Bn(l, o, 12, [a, u]);
  else {
    const _ = Se(l), I = /* @__PURE__ */ De(l);
    if (_ || I) {
      const M = () => {
        if (e.f) {
          const F = _ ? m(l) ? d[l] : u[l] : A() || !e.k ? l.value : u[e.k];
          if (r)
            te(F) && kr(F, s);
          else if (te(F))
            F.includes(s) || F.push(s);
          else if (_)
            u[l] = [s], m(l) && (d[l] = u[l]);
          else {
            const X = [s];
            A(l, e.k) && (l.value = X), e.k && (u[e.k] = X);
          }
        } else _ ? (u[l] = a, m(l) && (d[l] = a)) : I && (A(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const F = () => {
          M(), ii.delete(e);
        };
        F.id = -1, ii.set(e, F), qe(F, n);
      } else
        us(e), M();
    }
  }
}
function us(e) {
  const t = ii.get(e);
  t && (t.flags |= 8, ii.delete(e));
}
Ci().requestIdleCallback;
Ci().cancelIdleCallback;
const un = (e) => !!e.type.__asyncLoader, La = (e) => e.type.__isKeepAlive;
function Bl(e, t) {
  za(e, "a", t);
}
function Wl(e, t) {
  za(e, "da", t);
}
function za(e, t, n = je) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Ei(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      La(r.parent.vnode) && Kl(i, t, n, r), r = r.parent;
  }
}
function Kl(e, t, n, i) {
  const r = Ei(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Ua(() => {
    kr(i[t], r);
  }, n);
}
function Ei(e, t, n = je, i = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      It();
      const o = Wn(n), l = at(t, n, e, a);
      return o(), Et(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const Rt = (e) => (t, n = je) => {
  (!zn || e === "sp") && Ei(e, (...i) => t(...i), n);
}, Gl = Rt("bm"), Mr = Rt("m"), Yl = Rt(
  "bu"
), Ql = Rt("u"), Va = Rt(
  "bum"
), Ua = Rt("um"), Jl = Rt(
  "sp"
), Xl = Rt("rtg"), ec = Rt("rtc");
function tc(e, t = je) {
  Ei("ec", e, t);
}
const nc = "components", qa = /* @__PURE__ */ Symbol.for("v-ndc");
function ic(e) {
  return Se(e) ? rc(nc, e, !1) || e : e || qa;
}
function rc(e, t, n = !0, i = !1) {
  const r = Ve || je;
  if (r) {
    const s = r.type;
    {
      const o = qc(
        s,
        !1
      );
      if (o && (o === t || o === Pe(t) || o === Si(Pe(t))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      ds(r[e] || s[e], t) || // global registration
      ds(r.appContext[e], t)
    );
    return !a && i ? s : a;
  }
}
function ds(e, t) {
  return e && (e[t] || e[Pe(t)] || e[Si(Pe(t))]);
}
function Me(e, t, n, i) {
  let r;
  const s = n, a = te(e);
  if (a || Se(e)) {
    const o = a && /* @__PURE__ */ Yt(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ Je(e), c = /* @__PURE__ */ Ot(e), e = Ti(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        l ? c ? pn(st(e[u])) : st(e[u]) : e[u],
        u,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, s);
  } else if (ve(e))
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
function sc(e, t, n = {}, i, r) {
  if (Ve.ce || Ve.parent && un(Ve.parent) && Ve.parent.ce) {
    const c = Object.keys(n).length > 0;
    return v(), Oe(
      le,
      null,
      [Xe("slot", n, i)],
      c ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), v();
  const a = s && Za(s(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = Oe(
    le,
    {
      key: (o && !rt(o) ? o : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && i ? "_fb" : "")
    },
    a || [],
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Za(e) {
  return e.some((t) => Dr(t) ? !(t.type === Pt || t.type === le && !Za(t.children)) : !0) ? e : null;
}
const nr = (e) => e ? fo(e) ? Vr(e) : nr(e.parent) : null, Rn = (
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
    $parent: (e) => nr(e.parent),
    $root: (e) => nr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ba(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Nr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ii.bind(e.proxy)),
    $watch: (e) => ql.bind(e)
  })
), Zi = (e, t) => e !== we && !e.__isScriptSetup && fe(e, t), ac = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: r, props: s, accessCache: a, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const p = a[t];
      if (p !== void 0)
        switch (p) {
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
        if (Zi(i, t))
          return a[t] = 1, i[t];
        if (r !== we && fe(r, t))
          return a[t] = 2, r[t];
        if (fe(s, t))
          return a[t] = 3, s[t];
        if (n !== we && fe(n, t))
          return a[t] = 4, n[t];
        ir && (a[t] = 0);
      }
    }
    const c = Rn[t];
    let u, d;
    if (c)
      return t === "$attrs" && Fe(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== we && fe(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, fe(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: r, ctx: s } = e;
    return Zi(r, t) ? (r[t] = n, !0) : i !== we && fe(i, t) ? (i[t] = n, !0) : fe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, props: s, type: a }
  }, o) {
    let l;
    return !!(n[o] || e !== we && o[0] !== "$" && fe(e, o) || Zi(t, o) || fe(s, o) || fe(i, o) || fe(Rn, o) || fe(r.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : fe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function fs(e) {
  return te(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ir = !0;
function oc(e) {
  const t = Ba(e), n = e.proxy, i = e.ctx;
  ir = !1, t.beforeCreate && ps(t.beforeCreate, e, "bc");
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
    mounted: p,
    beforeUpdate: m,
    updated: A,
    activated: _,
    deactivated: I,
    beforeDestroy: M,
    beforeUnmount: F,
    destroyed: X,
    unmounted: Z,
    render: y,
    renderTracked: K,
    renderTriggered: T,
    errorCaptured: W,
    serverPrefetch: pe,
    // public API
    expose: Ce,
    inheritAttrs: $,
    // assets
    components: D,
    directives: re,
    filters: ke
  } = t;
  if (c && lc(c, i, null), a)
    for (const _e in a) {
      const he = a[_e];
      ne(he) && (i[_e] = he.bind(n));
    }
  if (r) {
    const _e = r.call(n, n);
    ve(_e) && (e.data = /* @__PURE__ */ Vt(_e));
  }
  if (ir = !0, s)
    for (const _e in s) {
      const he = s[_e], qt = ne(he) ? he.bind(n, n) : ne(he.get) ? he.get.bind(n, n) : vt, Kn = !ne(he) && ne(he.set) ? he.set.bind(n) : vt, Zt = Y({
        get: qt,
        set: Kn
      });
      Object.defineProperty(i, _e, {
        enumerable: !0,
        configurable: !0,
        get: () => Zt.value,
        set: (lt) => Zt.value = lt
      });
    }
  if (o)
    for (const _e in o)
      Ha(o[_e], i, n, _e);
  if (l) {
    const _e = ne(l) ? l.call(n) : l;
    Reflect.ownKeys(_e).forEach((he) => {
      tr(he, _e[he]);
    });
  }
  u && ps(u, e, "c");
  function Ee(_e, he) {
    te(he) ? he.forEach((qt) => _e(qt.bind(n))) : he && _e(he.bind(n));
  }
  if (Ee(Gl, d), Ee(Mr, p), Ee(Yl, m), Ee(Ql, A), Ee(Bl, _), Ee(Wl, I), Ee(tc, W), Ee(ec, K), Ee(Xl, T), Ee(Va, F), Ee(Ua, Z), Ee(Jl, pe), te(Ce))
    if (Ce.length) {
      const _e = e.exposed || (e.exposed = {});
      Ce.forEach((he) => {
        Object.defineProperty(_e, he, {
          get: () => n[he],
          set: (qt) => n[he] = qt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === vt && (e.render = y), $ != null && (e.inheritAttrs = $), D && (e.components = D), re && (e.directives = re), pe && Da(e);
}
function lc(e, t, n = vt) {
  te(e) && (e = rr(e));
  for (const i in e) {
    const r = e[i];
    let s;
    ve(r) ? "default" in r ? s = Lt(
      r.from || i,
      r.default,
      !0
    ) : s = Lt(r.from || i) : s = Lt(r), /* @__PURE__ */ De(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[i] = s;
  }
}
function ps(e, t, n) {
  at(
    te(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ha(e, t, n, i) {
  let r = i.includes(".") ? ja(n, i) : () => n[i];
  if (Se(e)) {
    const s = t[e];
    ne(s) && yt(r, s);
  } else if (ne(e))
    yt(r, e.bind(n));
  else if (ve(e))
    if (te(e))
      e.forEach((s) => Ha(s, t, n, i));
    else {
      const s = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(s) && yt(r, s, e);
    }
}
function Ba(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, o = s.get(t);
  let l;
  return o ? l = o : !r.length && !n && !i ? l = t : (l = {}, r.length && r.forEach(
    (c) => ri(l, c, a, !0)
  ), ri(l, t, a)), ve(t) && s.set(t, l), l;
}
function ri(e, t, n, i = !1) {
  const { mixins: r, extends: s } = t;
  s && ri(e, s, n, !0), r && r.forEach(
    (a) => ri(e, a, n, !0)
  );
  for (const a in t)
    if (!(i && a === "expose")) {
      const o = cc[a] || n && n[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const cc = {
  data: hs,
  props: ms,
  emits: ms,
  // objects
  methods: Cn,
  computed: Cn,
  // lifecycle
  beforeCreate: Le,
  created: Le,
  beforeMount: Le,
  mounted: Le,
  beforeUpdate: Le,
  updated: Le,
  beforeDestroy: Le,
  beforeUnmount: Le,
  destroyed: Le,
  unmounted: Le,
  activated: Le,
  deactivated: Le,
  errorCaptured: Le,
  serverPrefetch: Le,
  // assets
  components: Cn,
  directives: Cn,
  // watch
  watch: dc,
  // provide / inject
  provide: hs,
  inject: uc
};
function hs(e, t) {
  return t ? e ? function() {
    return Ae(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function uc(e, t) {
  return Cn(rr(e), rr(t));
}
function rr(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Cn(e, t) {
  return e ? Ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ms(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ae(
    /* @__PURE__ */ Object.create(null),
    fs(e),
    fs(t ?? {})
  ) : t;
}
function dc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ae(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Le(e[i], t[i]);
  return n;
}
function Wa() {
  return {
    app: null,
    config: {
      isNativeTag: oa,
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
let fc = 0;
function pc(e, t) {
  return function(i, r = null) {
    ne(i) || (i = Ae({}, i)), r != null && !ve(r) && (r = null);
    const s = Wa(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = s.app = {
      _uid: fc++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Hc,
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
      mount(u, d, p) {
        if (!l) {
          const m = c._ceVNode || Xe(i, r);
          return m.appContext = s, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(m, u, p), l = !0, c._container = u, u.__vue_app__ = c, Vr(m.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (at(
          o,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return s.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = dn;
        dn = c;
        try {
          return u();
        } finally {
          dn = d;
        }
      }
    };
    return c;
  };
}
let dn = null;
const hc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pe(t)}Modifiers`] || e[`${We(t)}Modifiers`];
function mc(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || we;
  let r = n;
  const s = t.startsWith("update:"), a = s && hc(i, t.slice(7));
  a && (a.trim && (r = n.map((u) => Se(u) ? u.trim() : u)), a.number && (r = n.map(nl)));
  let o, l = i[o = ji(t)] || // also try camelCase event handler (#2249)
  i[o = ji(Pe(t))];
  !l && s && (l = i[o = ji(We(t))]), l && at(
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
    e.emitted[o] = !0, at(
      c,
      e,
      6,
      r
    );
  }
}
const gc = /* @__PURE__ */ new WeakMap();
function Ka(e, t, n = !1) {
  const i = n ? gc : t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let a = {}, o = !1;
  if (!ne(e)) {
    const l = (c) => {
      const u = Ka(c, t, !0);
      u && (o = !0, Ae(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !o ? (ve(e) && i.set(e, null), null) : (te(s) ? s.forEach((l) => a[l] = null) : Ae(a, s), ve(e) && i.set(e, a), a);
}
function Oi(e, t) {
  return !e || !_i(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), fe(e, t[0].toLowerCase() + t.slice(1)) || fe(e, We(t)) || fe(e, t));
}
function gs(e) {
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
    data: p,
    setupState: m,
    ctx: A,
    inheritAttrs: _
  } = e, I = ni(e);
  let M, F;
  try {
    if (n.shapeFlag & 4) {
      const Z = r || i, y = Z;
      M = mt(
        c.call(
          y,
          Z,
          u,
          d,
          m,
          p,
          A
        )
      ), F = o;
    } else {
      const Z = t;
      M = mt(
        Z.length > 1 ? Z(
          d,
          { attrs: o, slots: a, emit: l }
        ) : Z(
          d,
          null
        )
      ), F = t.props ? o : vc(o);
    }
  } catch (Z) {
    Mn.length = 0, $i(Z, e, 1), M = Xe(Pt);
  }
  let X = M;
  if (F && _ !== !1) {
    const Z = Object.keys(F), { shapeFlag: y } = X;
    Z.length && y & 7 && (s && Z.some(xi) && (F = yc(
      F,
      s
    )), X = hn(X, F, !1, !0));
  }
  return n.dirs && (X = hn(X, null, !1, !0), X.dirs = X.dirs ? X.dirs.concat(n.dirs) : n.dirs), n.transition && Rr(X, n.transition), M = X, ni(I), M;
}
const vc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || _i(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, yc = (e, t) => {
  const n = {};
  for (const i in e)
    (!xi(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function bc(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: a, children: o, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? vs(i, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (Ga(a, i, p) && !Oi(c, p))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : i === a ? !1 : i ? a ? vs(i, a, c) : !0 : !!a;
  return !1;
}
function vs(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (Ga(t, e, s) && !Oi(n, s))
      return !0;
  }
  return !1;
}
function Ga(e, t, n) {
  const i = e[n], r = t[n];
  return n === "style" && ve(i) && ve(r) ? !Cr(i, r) : i !== r;
}
function _c({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = i, e = r), r === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Ya = {}, Qa = () => Object.create(Ya), Ja = (e) => Object.getPrototypeOf(e) === Ya;
function xc(e, t, n, i = !1) {
  const r = {}, s = Qa();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Xa(e, t, r, s);
  for (const a in e.propsOptions[0])
    a in r || (r[a] = void 0);
  n ? e.props = i ? r : /* @__PURE__ */ Il(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function wc(e, t, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, o = /* @__PURE__ */ de(r), [l] = e.propsOptions;
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
        if (Oi(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (l)
          if (fe(s, p))
            m !== s[p] && (s[p] = m, c = !0);
          else {
            const A = Pe(p);
            r[A] = sr(
              l,
              o,
              A,
              m,
              e,
              !1
            );
          }
        else
          m !== s[p] && (s[p] = m, c = !0);
      }
    }
  } else {
    Xa(e, t, r, s) && (c = !0);
    let u;
    for (const d in o)
      (!t || // for camelCase
      !fe(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = We(d)) === d || !fe(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = sr(
        l,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (s !== o)
      for (const d in s)
        (!t || !fe(t, d)) && (delete s[d], c = !0);
  }
  c && At(e.attrs, "set", "");
}
function Xa(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let a = !1, o;
  if (t)
    for (let l in t) {
      if (En(l))
        continue;
      const c = t[l];
      let u;
      r && fe(r, u = Pe(l)) ? !s || !s.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : Oi(e.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ de(n), c = o || we;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = sr(
        r,
        l,
        d,
        c[d],
        e,
        !fe(c, d)
      );
    }
  }
  return a;
}
function sr(e, t, n, i, r, s) {
  const a = e[n];
  if (a != null) {
    const o = fe(a, "default");
    if (o && i === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ne(l)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const u = Wn(r);
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
    ] && (i === "" || i === We(n)) && (i = !0));
  }
  return i;
}
const kc = /* @__PURE__ */ new WeakMap();
function eo(e, t, n = !1) {
  const i = n ? kc : t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, a = {}, o = [];
  let l = !1;
  if (!ne(e)) {
    const u = (d) => {
      l = !0;
      const [p, m] = eo(d, t, !0);
      Ae(a, p), m && o.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return ve(e) && i.set(e, on), on;
  if (te(s))
    for (let u = 0; u < s.length; u++) {
      const d = Pe(s[u]);
      ys(d) && (a[d] = we);
    }
  else if (s)
    for (const u in s) {
      const d = Pe(u);
      if (ys(d)) {
        const p = s[u], m = a[d] = te(p) || ne(p) ? { type: p } : Ae({}, p), A = m.type;
        let _ = !1, I = !0;
        if (te(A))
          for (let M = 0; M < A.length; ++M) {
            const F = A[M], X = ne(F) && F.name;
            if (X === "Boolean") {
              _ = !0;
              break;
            } else X === "String" && (I = !1);
          }
        else
          _ = ne(A) && A.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = _, m[
          1
          /* shouldCastTrue */
        ] = I, (_ || fe(m, "default")) && o.push(d);
      }
    }
  const c = [a, o];
  return ve(e) && i.set(e, c), c;
}
function ys(e) {
  return e[0] !== "$" && !En(e);
}
const Fr = (e) => e === "_" || e === "_ctx" || e === "$stable", jr = (e) => te(e) ? e.map(mt) : [mt(e)], Sc = (e, t, n) => {
  if (t._n)
    return t;
  const i = Ma((...r) => jr(t(...r)), n);
  return i._c = !1, i;
}, to = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if (Fr(r)) continue;
    const s = e[r];
    if (ne(s))
      t[r] = Sc(r, s, i);
    else if (s != null) {
      const a = jr(s);
      t[r] = () => a;
    }
  }
}, no = (e, t) => {
  const n = jr(t);
  e.slots.default = () => n;
}, io = (e, t, n) => {
  for (const i in t)
    (n || !Fr(i)) && (e[i] = t[i]);
}, Cc = (e, t, n) => {
  const i = e.slots = Qa();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (io(i, t, n), n && da(i, "_", r, !0)) : to(t, i);
  } else t && no(e, t);
}, Ac = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, a = we;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? s = !1 : io(r, t, n) : (s = !t.$stable, to(t, r)), a = t;
  } else t && (no(e, t), a = { default: 1 });
  if (s)
    for (const o in r)
      !Fr(o) && a[o] == null && delete r[o];
}, qe = Oc;
function Tc(e) {
  return $c(e);
}
function $c(e, t) {
  const n = Ci();
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
    nextSibling: p,
    setScopeId: m = vt,
    insertStaticContent: A
  } = e, _ = (f, h, g, S = null, x = null, b = null, N = void 0, P = null, E = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !xn(f, h) && (S = Gn(f), lt(f, x, b, !0), f = null), h.patchFlag === -2 && (E = !1, h.dynamicChildren = null);
    const { type: w, ref: G, shapeFlag: L } = h;
    switch (w) {
      case Pi:
        I(f, h, g, S);
        break;
      case Pt:
        M(f, h, g, S);
        break;
      case Bi:
        f == null && F(h, g, S, N);
        break;
      case le:
        D(
          f,
          h,
          g,
          S,
          x,
          b,
          N,
          P,
          E
        );
        break;
      default:
        L & 1 ? y(
          f,
          h,
          g,
          S,
          x,
          b,
          N,
          P,
          E
        ) : L & 6 ? re(
          f,
          h,
          g,
          S,
          x,
          b,
          N,
          P,
          E
        ) : (L & 64 || L & 128) && w.process(
          f,
          h,
          g,
          S,
          x,
          b,
          N,
          P,
          E,
          yn
        );
    }
    G != null && x ? Nn(G, f && f.ref, b, h || f, !h) : G == null && f && f.ref != null && Nn(f.ref, null, b, f, !0);
  }, I = (f, h, g, S) => {
    if (f == null)
      i(
        h.el = o(h.children),
        g,
        S
      );
    else {
      const x = h.el = f.el;
      h.children !== f.children && c(x, h.children);
    }
  }, M = (f, h, g, S) => {
    f == null ? i(
      h.el = l(h.children || ""),
      g,
      S
    ) : h.el = f.el;
  }, F = (f, h, g, S) => {
    [f.el, f.anchor] = A(
      f.children,
      h,
      g,
      S,
      f.el,
      f.anchor
    );
  }, X = ({ el: f, anchor: h }, g, S) => {
    let x;
    for (; f && f !== h; )
      x = p(f), i(f, g, S), f = x;
    i(h, g, S);
  }, Z = ({ el: f, anchor: h }) => {
    let g;
    for (; f && f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, y = (f, h, g, S, x, b, N, P, E) => {
    if (h.type === "svg" ? N = "svg" : h.type === "math" && (N = "mathml"), f == null)
      K(
        h,
        g,
        S,
        x,
        b,
        N,
        P,
        E
      );
    else {
      const w = f.el && f.el._isVueCE ? f.el : null;
      try {
        w && w._beginPatch(), pe(
          f,
          h,
          x,
          b,
          N,
          P,
          E
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, K = (f, h, g, S, x, b, N, P) => {
    let E, w;
    const { props: G, shapeFlag: L, transition: B, dirs: ee } = f;
    if (E = f.el = a(
      f.type,
      b,
      G && G.is,
      G
    ), L & 8 ? u(E, f.children) : L & 16 && W(
      f.children,
      E,
      null,
      S,
      x,
      Hi(f, b),
      N,
      P
    ), ee && Ht(f, null, S, "created"), T(E, f, f.scopeId, N, S), G) {
      for (const ye in G)
        ye !== "value" && !En(ye) && s(E, ye, null, G[ye], b, S);
      "value" in G && s(E, "value", null, G.value, b), (w = G.onVnodeBeforeMount) && ft(w, S, f);
    }
    ee && Ht(f, null, S, "beforeMount");
    const ce = Ic(x, B);
    ce && B.beforeEnter(E), i(E, h, g), ((w = G && G.onVnodeMounted) || ce || ee) && qe(() => {
      try {
        w && ft(w, S, f), ce && B.enter(E), ee && Ht(f, null, S, "mounted");
      } finally {
      }
    }, x);
  }, T = (f, h, g, S, x) => {
    if (g && m(f, g), S)
      for (let b = 0; b < S.length; b++)
        m(f, S[b]);
    if (x) {
      let b = x.subTree;
      if (h === b || oo(b.type) && (b.ssContent === h || b.ssFallback === h)) {
        const N = x.vnode;
        T(
          f,
          N,
          N.scopeId,
          N.slotScopeIds,
          x.parent
        );
      }
    }
  }, W = (f, h, g, S, x, b, N, P, E = 0) => {
    for (let w = E; w < f.length; w++) {
      const G = f[w] = P ? Ct(f[w]) : mt(f[w]);
      _(
        null,
        G,
        h,
        g,
        S,
        x,
        b,
        N,
        P
      );
    }
  }, pe = (f, h, g, S, x, b, N) => {
    const P = h.el = f.el;
    let { patchFlag: E, dynamicChildren: w, dirs: G } = h;
    E |= f.patchFlag & 16;
    const L = f.props || we, B = h.props || we;
    let ee;
    if (g && Bt(g, !1), (ee = B.onVnodeBeforeUpdate) && ft(ee, g, h, f), G && Ht(h, f, g, "beforeUpdate"), g && Bt(g, !0), (L.innerHTML && B.innerHTML == null || L.textContent && B.textContent == null) && u(P, ""), w ? Ce(
      f.dynamicChildren,
      w,
      P,
      g,
      S,
      Hi(h, x),
      b
    ) : N || he(
      f,
      h,
      P,
      null,
      g,
      S,
      Hi(h, x),
      b,
      !1
    ), E > 0) {
      if (E & 16)
        $(P, L, B, g, x);
      else if (E & 2 && L.class !== B.class && s(P, "class", null, B.class, x), E & 4 && s(P, "style", L.style, B.style, x), E & 8) {
        const ce = h.dynamicProps;
        for (let ye = 0; ye < ce.length; ye++) {
          const me = ce[ye], $e = L[me], Ne = B[me];
          (Ne !== $e || me === "value") && s(P, me, $e, Ne, x, g);
        }
      }
      E & 1 && f.children !== h.children && u(P, h.children);
    } else !N && w == null && $(P, L, B, g, x);
    ((ee = B.onVnodeUpdated) || G) && qe(() => {
      ee && ft(ee, g, h, f), G && Ht(h, f, g, "updated");
    }, S);
  }, Ce = (f, h, g, S, x, b, N) => {
    for (let P = 0; P < h.length; P++) {
      const E = f[P], w = h[P], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(E, w) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? d(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      _(
        E,
        w,
        G,
        null,
        S,
        x,
        b,
        N,
        !0
      );
    }
  }, $ = (f, h, g, S, x) => {
    if (h !== g) {
      if (h !== we)
        for (const b in h)
          !En(b) && !(b in g) && s(
            f,
            b,
            h[b],
            null,
            x,
            S
          );
      for (const b in g) {
        if (En(b)) continue;
        const N = g[b], P = h[b];
        N !== P && b !== "value" && s(f, b, P, N, x, S);
      }
      "value" in g && s(f, "value", h.value, g.value, x);
    }
  }, D = (f, h, g, S, x, b, N, P, E) => {
    const w = h.el = f ? f.el : o(""), G = h.anchor = f ? f.anchor : o("");
    let { patchFlag: L, dynamicChildren: B, slotScopeIds: ee } = h;
    ee && (P = P ? P.concat(ee) : ee), f == null ? (i(w, g, S), i(G, g, S), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      g,
      G,
      x,
      b,
      N,
      P,
      E
    )) : L > 0 && L & 64 && B && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === B.length ? (Ce(
      f.dynamicChildren,
      B,
      g,
      x,
      b,
      N,
      P
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || x && h === x.subTree) && ro(
      f,
      h,
      !0
      /* shallow */
    )) : he(
      f,
      h,
      g,
      G,
      x,
      b,
      N,
      P,
      E
    );
  }, re = (f, h, g, S, x, b, N, P, E) => {
    h.slotScopeIds = P, f == null ? h.shapeFlag & 512 ? x.ctx.activate(
      h,
      g,
      S,
      N,
      E
    ) : ke(
      h,
      g,
      S,
      x,
      b,
      N,
      E
    ) : He(f, h, E);
  }, ke = (f, h, g, S, x, b, N) => {
    const P = f.component = Dc(
      f,
      S,
      x
    );
    if (La(f) && (P.ctx.renderer = yn), Lc(P, !1, N), P.asyncDep) {
      if (x && x.registerDep(P, Ee, N), !f.el) {
        const E = P.subTree = Xe(Pt);
        M(null, E, h, g), f.placeholder = E.el;
      }
    } else
      Ee(
        P,
        f,
        h,
        g,
        x,
        b,
        N
      );
  }, He = (f, h, g) => {
    const S = h.component = f.component;
    if (bc(f, h, g))
      if (S.asyncDep && !S.asyncResolved) {
        _e(S, h, g);
        return;
      } else
        S.next = h, S.update();
    else
      h.el = f.el, S.vnode = h;
  }, Ee = (f, h, g, S, x, b, N) => {
    const P = () => {
      if (f.isMounted) {
        let { next: L, bu: B, u: ee, parent: ce, vnode: ye } = f;
        {
          const ut = so(f);
          if (ut) {
            L && (L.el = ye.el, _e(f, L, N)), ut.asyncDep.then(() => {
              qe(() => {
                f.isUnmounted || w();
              }, x);
            });
            return;
          }
        }
        let me = L, $e;
        Bt(f, !1), L ? (L.el = ye.el, _e(f, L, N)) : L = ye, B && Di(B), ($e = L.props && L.props.onVnodeBeforeUpdate) && ft($e, ce, L, ye), Bt(f, !0);
        const Ne = gs(f), ct = f.subTree;
        f.subTree = Ne, _(
          ct,
          Ne,
          // parent may have changed if it's in a teleport
          d(ct.el),
          // anchor may have changed if it's in a fragment
          Gn(ct),
          f,
          x,
          b
        ), L.el = Ne.el, me === null && _c(f, Ne.el), ee && qe(ee, x), ($e = L.props && L.props.onVnodeUpdated) && qe(
          () => ft($e, ce, L, ye),
          x
        );
      } else {
        let L;
        const { el: B, props: ee } = h, { bm: ce, m: ye, parent: me, root: $e, type: Ne } = f, ct = un(h);
        Bt(f, !1), ce && Di(ce), !ct && (L = ee && ee.onVnodeBeforeMount) && ft(L, me, h), Bt(f, !0);
        {
          $e.ce && $e.ce._hasShadowRoot() && $e.ce._injectChildStyle(
            Ne,
            f.parent ? f.parent.type : void 0
          );
          const ut = f.subTree = gs(f);
          _(
            null,
            ut,
            g,
            S,
            f,
            x,
            b
          ), h.el = ut.el;
        }
        if (ye && qe(ye, x), !ct && (L = ee && ee.onVnodeMounted)) {
          const ut = h;
          qe(
            () => ft(L, me, ut),
            x
          );
        }
        (h.shapeFlag & 256 || me && un(me.vnode) && me.vnode.shapeFlag & 256) && f.a && qe(f.a, x), f.isMounted = !0, h = g = S = null;
      }
    };
    f.scope.on();
    const E = f.effect = new ma(P);
    f.scope.off();
    const w = f.update = E.run.bind(E), G = f.job = E.runIfDirty.bind(E);
    G.i = f, G.id = f.uid, E.scheduler = () => Nr(G), Bt(f, !0), w();
  }, _e = (f, h, g) => {
    h.component = f;
    const S = f.vnode.props;
    f.vnode = h, f.next = null, wc(f, h.props, S, g), Ac(f, h.children, g), It(), ls(f), Et();
  }, he = (f, h, g, S, x, b, N, P, E = !1) => {
    const w = f && f.children, G = f ? f.shapeFlag : 0, L = h.children, { patchFlag: B, shapeFlag: ee } = h;
    if (B > 0) {
      if (B & 128) {
        Kn(
          w,
          L,
          g,
          S,
          x,
          b,
          N,
          P,
          E
        );
        return;
      } else if (B & 256) {
        qt(
          w,
          L,
          g,
          S,
          x,
          b,
          N,
          P,
          E
        );
        return;
      }
    }
    ee & 8 ? (G & 16 && vn(w, x, b), L !== w && u(g, L)) : G & 16 ? ee & 16 ? Kn(
      w,
      L,
      g,
      S,
      x,
      b,
      N,
      P,
      E
    ) : vn(w, x, b, !0) : (G & 8 && u(g, ""), ee & 16 && W(
      L,
      g,
      S,
      x,
      b,
      N,
      P,
      E
    ));
  }, qt = (f, h, g, S, x, b, N, P, E) => {
    f = f || on, h = h || on;
    const w = f.length, G = h.length, L = Math.min(w, G);
    let B;
    for (B = 0; B < L; B++) {
      const ee = h[B] = E ? Ct(h[B]) : mt(h[B]);
      _(
        f[B],
        ee,
        g,
        null,
        x,
        b,
        N,
        P,
        E
      );
    }
    w > G ? vn(
      f,
      x,
      b,
      !0,
      !1,
      L
    ) : W(
      h,
      g,
      S,
      x,
      b,
      N,
      P,
      E,
      L
    );
  }, Kn = (f, h, g, S, x, b, N, P, E) => {
    let w = 0;
    const G = h.length;
    let L = f.length - 1, B = G - 1;
    for (; w <= L && w <= B; ) {
      const ee = f[w], ce = h[w] = E ? Ct(h[w]) : mt(h[w]);
      if (xn(ee, ce))
        _(
          ee,
          ce,
          g,
          null,
          x,
          b,
          N,
          P,
          E
        );
      else
        break;
      w++;
    }
    for (; w <= L && w <= B; ) {
      const ee = f[L], ce = h[B] = E ? Ct(h[B]) : mt(h[B]);
      if (xn(ee, ce))
        _(
          ee,
          ce,
          g,
          null,
          x,
          b,
          N,
          P,
          E
        );
      else
        break;
      L--, B--;
    }
    if (w > L) {
      if (w <= B) {
        const ee = B + 1, ce = ee < G ? h[ee].el : S;
        for (; w <= B; )
          _(
            null,
            h[w] = E ? Ct(h[w]) : mt(h[w]),
            g,
            ce,
            x,
            b,
            N,
            P,
            E
          ), w++;
      }
    } else if (w > B)
      for (; w <= L; )
        lt(f[w], x, b, !0), w++;
    else {
      const ee = w, ce = w, ye = /* @__PURE__ */ new Map();
      for (w = ce; w <= B; w++) {
        const Be = h[w] = E ? Ct(h[w]) : mt(h[w]);
        Be.key != null && ye.set(Be.key, w);
      }
      let me, $e = 0;
      const Ne = B - ce + 1;
      let ct = !1, ut = 0;
      const bn = new Array(Ne);
      for (w = 0; w < Ne; w++) bn[w] = 0;
      for (w = ee; w <= L; w++) {
        const Be = f[w];
        if ($e >= Ne) {
          lt(Be, x, b, !0);
          continue;
        }
        let dt;
        if (Be.key != null)
          dt = ye.get(Be.key);
        else
          for (me = ce; me <= B; me++)
            if (bn[me - ce] === 0 && xn(Be, h[me])) {
              dt = me;
              break;
            }
        dt === void 0 ? lt(Be, x, b, !0) : (bn[dt - ce] = w + 1, dt >= ut ? ut = dt : ct = !0, _(
          Be,
          h[dt],
          g,
          null,
          x,
          b,
          N,
          P,
          E
        ), $e++);
      }
      const Xr = ct ? Ec(bn) : on;
      for (me = Xr.length - 1, w = Ne - 1; w >= 0; w--) {
        const Be = ce + w, dt = h[Be], es = h[Be + 1], ts = Be + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          es.el || ao(es)
        ) : S;
        bn[w] === 0 ? _(
          null,
          dt,
          g,
          ts,
          x,
          b,
          N,
          P,
          E
        ) : ct && (me < 0 || w !== Xr[me] ? Zt(dt, g, ts, 2) : me--);
      }
    }
  }, Zt = (f, h, g, S, x = null) => {
    const { el: b, type: N, transition: P, children: E, shapeFlag: w } = f;
    if (w & 6) {
      Zt(f.component.subTree, h, g, S);
      return;
    }
    if (w & 128) {
      f.suspense.move(h, g, S);
      return;
    }
    if (w & 64) {
      N.move(f, h, g, yn);
      return;
    }
    if (N === le) {
      i(b, h, g);
      for (let L = 0; L < E.length; L++)
        Zt(E[L], h, g, S);
      i(f.anchor, h, g);
      return;
    }
    if (N === Bi) {
      X(f, h, g);
      return;
    }
    if (S !== 2 && w & 1 && P)
      if (S === 0)
        P.persisted && !b[qi] ? i(b, h, g) : (P.beforeEnter(b), i(b, h, g), qe(() => P.enter(b), x));
      else {
        const { leave: L, delayLeave: B, afterLeave: ee } = P, ce = () => {
          f.ctx.isUnmounted ? r(b) : i(b, h, g);
        }, ye = () => {
          const me = b._isLeaving || !!b[qi];
          b._isLeaving && b[qi](
            !0
            /* cancelled */
          ), P.persisted && !me ? ce() : L(b, () => {
            ce(), ee && ee();
          });
        };
        B ? B(b, ce, ye) : ye();
      }
    else
      i(b, h, g);
  }, lt = (f, h, g, S = !1, x = !1) => {
    const {
      type: b,
      props: N,
      ref: P,
      children: E,
      dynamicChildren: w,
      shapeFlag: G,
      patchFlag: L,
      dirs: B,
      cacheIndex: ee,
      memo: ce
    } = f;
    if (L === -2 && (x = !1), P != null && (It(), Nn(P, null, g, f, !0), Et()), ee != null && (h.renderCache[ee] = void 0), G & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const ye = G & 1 && B, me = !un(f);
    let $e;
    if (me && ($e = N && N.onVnodeBeforeUnmount) && ft($e, h, f), G & 6)
      Go(f.component, g, S);
    else {
      if (G & 128) {
        f.suspense.unmount(g, S);
        return;
      }
      ye && Ht(f, null, h, "beforeUnmount"), G & 64 ? f.type.remove(
        f,
        h,
        g,
        yn,
        S
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== le || L > 0 && L & 64) ? vn(
        w,
        h,
        g,
        !1,
        !0
      ) : (b === le && L & 384 || !x && G & 16) && vn(E, h, g), S && Qr(f);
    }
    const Ne = ce != null && ee == null;
    (me && ($e = N && N.onVnodeUnmounted) || ye || Ne) && qe(() => {
      $e && ft($e, h, f), ye && Ht(f, null, h, "unmounted"), Ne && (f.el = null);
    }, g);
  }, Qr = (f) => {
    const { type: h, el: g, anchor: S, transition: x } = f;
    if (h === le) {
      Ko(g, S);
      return;
    }
    if (h === Bi) {
      Z(f);
      return;
    }
    const b = () => {
      r(g), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (f.shapeFlag & 1 && x && !x.persisted) {
      const { leave: N, delayLeave: P } = x, E = () => N(g, b);
      P ? P(f.el, b, E) : E();
    } else
      b();
  }, Ko = (f, h) => {
    let g;
    for (; f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, Go = (f, h, g) => {
    const { bum: S, scope: x, job: b, subTree: N, um: P, m: E, a: w } = f;
    bs(E), bs(w), S && Di(S), x.stop(), b && (b.flags |= 8, lt(N, f, h, g)), P && qe(P, h), qe(() => {
      f.isUnmounted = !0;
    }, h);
  }, vn = (f, h, g, S = !1, x = !1, b = 0) => {
    for (let N = b; N < f.length; N++)
      lt(f[N], h, g, S, x);
  }, Gn = (f) => {
    if (f.shapeFlag & 6)
      return Gn(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = p(f.anchor || f.el), g = h && h[Zl];
    return g ? p(g) : h;
  };
  let Fi = !1;
  const Jr = (f, h, g) => {
    let S;
    f == null ? h._vnode && (lt(h._vnode, null, null, !0), S = h._vnode.component) : _(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      g
    ), h._vnode = f, Fi || (Fi = !0, ls(S), Pa(), Fi = !1);
  }, yn = {
    p: _,
    um: lt,
    m: Zt,
    r: Qr,
    mt: ke,
    mc: W,
    pc: he,
    pbc: Ce,
    n: Gn,
    o: e
  };
  return {
    render: Jr,
    hydrate: void 0,
    createApp: pc(Jr)
  };
}
function Hi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Bt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ic(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ro(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (te(i) && te(r))
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      let o = r[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[s] = Ct(r[s]), o.el = a.el), !n && o.patchFlag !== -2 && ro(a, o)), o.type === Pi && (o.patchFlag === -1 && (o = r[s] = Ct(o)), o.el = a.el), o.type === Pt && !o.el && (o.el = a.el);
    }
}
function Ec(e) {
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
function so(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : so(t);
}
function bs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ao(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ao(t.subTree) : null;
}
const oo = (e) => e.__isSuspense;
function Oc(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : zl(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), Pi = /* @__PURE__ */ Symbol.for("v-txt"), Pt = /* @__PURE__ */ Symbol.for("v-cmt"), Bi = /* @__PURE__ */ Symbol.for("v-stc"), Mn = [];
let Ge = null;
function v(e = !1) {
  Mn.push(Ge = e ? null : []);
}
function Pc() {
  Mn.pop(), Ge = Mn[Mn.length - 1] || null;
}
let Ln = 1;
function _s(e, t = !1) {
  Ln += e, e < 0 && Ge && t && (Ge.hasOnce = !0);
}
function lo(e) {
  return e.dynamicChildren = Ln > 0 ? Ge || on : null, Pc(), Ln > 0 && Ge && Ge.push(e), e;
}
function k(e, t, n, i, r, s) {
  return lo(
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
function Oe(e, t, n, i, r) {
  return lo(
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
function Dr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const co = ({ key: e }) => e ?? null, Xn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Se(e) || /* @__PURE__ */ De(e) || ne(e) ? { i: Ve, r: e, k: t, f: !!n } : e : null);
function j(e, t = null, n = null, i = 0, r = null, s = e === le ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && co(t),
    ref: t && Xn(t),
    scopeId: Ra,
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
  return o ? (zr(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Se(n) ? 8 : 16), Ln > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ge.push(l), l;
}
const Xe = Nc;
function Nc(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === qa) && (e = Pt), Dr(e)) {
    const o = hn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && zr(o, n), Ln > 0 && !s && Ge && (o.shapeFlag & 6 ? Ge[Ge.indexOf(e)] = o : Ge.push(o)), o.patchFlag = -2, o;
  }
  if (Zc(e) && (e = e.__vccOpts), t) {
    t = Rc(t);
    let { class: o, style: l } = t;
    o && !Se(o) && (t.class = et(o)), ve(l) && (/* @__PURE__ */ Pr(l) && !te(l) && (l = Ae({}, l)), t.style = Ai(l));
  }
  const a = Se(e) ? 1 : oo(e) ? 128 : Hl(e) ? 64 : ve(e) ? 4 : ne(e) ? 2 : 0;
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
function Rc(e) {
  return e ? /* @__PURE__ */ Pr(e) || Ja(e) ? Ae({}, e) : e : null;
}
function hn(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: a, children: o, transition: l } = e, c = t ? Mc(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && co(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? te(s) ? s.concat(Xn(t)) : [s, Xn(t)] : Xn(t)
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
    ssContent: e.ssContent && hn(e.ssContent),
    ssFallback: e.ssFallback && hn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Rr(
    u,
    l.clone(u)
  ), u;
}
function Lr(e = " ", t = 0) {
  return Xe(Pi, null, e, t);
}
function oe(e = "", t = !1) {
  return t ? (v(), Oe(Pt, null, e)) : Xe(Pt, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean" ? Xe(Pt) : te(e) ? Xe(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Dr(e) ? Ct(e) : Xe(Pi, null, String(e));
}
function Ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : hn(e);
}
function zr(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (te(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), zr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ja(t) ? t._ctx = Ve : r === 3 && Ve && (Ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: Ve }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Lr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Mc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = et([t.class, i.class]));
      else if (r === "style")
        t.style = Ai([t.style, i.style]);
      else if (_i(r)) {
        const s = t[r], a = i[r];
        a && s !== a && !(te(s) && s.includes(a)) ? t[r] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !xi(r) && (t[r] = a);
      } else r !== "" && (t[r] = i[r]);
  }
  return t;
}
function ft(e, t, n, i = null) {
  at(e, t, 7, [
    n,
    i
  ]);
}
const Fc = Wa();
let jc = 0;
function Dc(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || Fc, s = {
    uid: jc++,
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
    scope: new ul(
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
    propsOptions: eo(i, r),
    emitsOptions: Ka(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: we,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: we,
    data: we,
    props: we,
    attrs: we,
    slots: we,
    refs: we,
    setupState: we,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = mc.bind(null, s), e.ce && e.ce(s), s;
}
let je = null;
const uo = () => je || Ve;
let si, ar;
{
  const e = Ci(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((a) => a(s)) : r[0](s);
    };
  };
  si = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => je = n
  ), ar = t(
    "__VUE_SSR_SETTERS__",
    (n) => zn = n
  );
}
const Wn = (e) => {
  const t = je;
  return si(e), e.scope.on(), () => {
    e.scope.off(), si(t);
  };
}, xs = () => {
  je && je.scope.off(), si(null);
};
function fo(e) {
  return e.vnode.shapeFlag & 4;
}
let zn = !1;
function Lc(e, t = !1, n = !1) {
  t && ar(t);
  const { props: i, children: r } = e.vnode, s = fo(e);
  xc(e, i, s, t), Cc(e, r, n || t);
  const a = s ? zc(e, t) : void 0;
  return t && ar(!1), a;
}
function zc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ac);
  const { setup: i } = n;
  if (i) {
    It();
    const r = e.setupContext = i.length > 1 ? Uc(e) : null, s = Wn(e), a = Bn(
      i,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = ca(a);
    if (Et(), s(), (o || e.sp) && !un(e) && Da(e), o) {
      if (a.then(xs, xs), t)
        return a.then((l) => {
          ws(e, l);
        }).catch((l) => {
          $i(l, e, 0);
        });
      e.asyncDep = a;
    } else
      ws(e, a);
  } else
    po(e);
}
function ws(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ve(t) && (e.setupState = Ia(t)), po(e);
}
function po(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || vt);
  {
    const r = Wn(e);
    It();
    try {
      oc(e);
    } finally {
      Et(), r();
    }
  }
}
const Vc = {
  get(e, t) {
    return Fe(e, "get", ""), e[t];
  }
};
function Uc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Vc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Vr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ia(El(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Rn)
        return Rn[n](e);
    },
    has(t, n) {
      return n in t || n in Rn;
    }
  })) : e.proxy;
}
function qc(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Zc(e) {
  return ne(e) && "__vccOpts" in e;
}
const Y = (e, t) => /* @__PURE__ */ Ml(e, t, zn), Hc = "3.5.35";
/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let or;
const ks = typeof window < "u" && window.trustedTypes;
if (ks)
  try {
    or = /* @__PURE__ */ ks.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ho = or ? (e) => or.createHTML(e) : (e) => e, Bc = "http://www.w3.org/2000/svg", Wc = "http://www.w3.org/1998/Math/MathML", St = typeof document < "u" ? document : null, Ss = St && /* @__PURE__ */ St.createElement("template"), Kc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? St.createElementNS(Bc, e) : t === "mathml" ? St.createElementNS(Wc, e) : n ? St.createElement(e, { is: n }) : St.createElement(e);
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
      Ss.innerHTML = ho(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Ss.content;
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
}, Gc = /* @__PURE__ */ Symbol("_vtc");
function Yc(e, t, n) {
  const i = e[Gc];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Cs = /* @__PURE__ */ Symbol("_vod"), Qc = /* @__PURE__ */ Symbol("_vsh"), Jc = /* @__PURE__ */ Symbol(""), Xc = /(?:^|;)\s*display\s*:/;
function eu(e, t, n) {
  const i = e.style, r = Se(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (Se(t))
        for (const a of t.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && An(i, o, "");
        }
      else
        for (const a in t)
          n[a] == null && An(i, a, "");
    for (const a in n) {
      a === "display" && (s = !0);
      const o = n[a];
      o != null ? nu(
        e,
        a,
        !Se(t) && t ? t[a] : void 0,
        o
      ) || An(i, a, o) : An(i, a, "");
    }
  } else if (r) {
    if (t !== n) {
      const a = i[Jc];
      a && (n += ";" + a), i.cssText = n, s = Xc.test(n);
    }
  } else t && e.removeAttribute("style");
  Cs in e && (e[Cs] = s ? i.display : "", e[Qc] && (i.display = "none"));
}
const As = /\s*!important$/;
function An(e, t, n) {
  if (te(n))
    n.forEach((i) => An(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = tu(e, t);
    As.test(n) ? e.setProperty(
      We(i),
      n.replace(As, ""),
      "important"
    ) : e[i] = n;
  }
}
const Ts = ["Webkit", "Moz", "ms"], Wi = {};
function tu(e, t) {
  const n = Wi[t];
  if (n)
    return n;
  let i = Pe(t);
  if (i !== "filter" && i in e)
    return Wi[t] = i;
  i = Si(i);
  for (let r = 0; r < Ts.length; r++) {
    const s = Ts[r] + i;
    if (s in e)
      return Wi[t] = s;
  }
  return t;
}
function nu(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Se(i) && n === i;
}
const $s = "http://www.w3.org/1999/xlink";
function Is(e, t, n, i, r, s = ll(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS($s, t.slice(6, t.length)) : e.setAttributeNS($s, t, n) : n == null || s && !fa(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : rt(n) ? String(n) : n
  );
}
function Es(e, t, n, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ho(n) : n);
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
    o === "boolean" ? n = fa(n) : n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(r || t);
}
function iu(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function ru(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Os = /* @__PURE__ */ Symbol("_vei");
function su(e, t, n, i, r = null) {
  const s = e[Os] || (e[Os] = {}), a = s[t];
  if (i && a)
    a.value = i;
  else {
    const [o, l] = au(t);
    if (i) {
      const c = s[t] = cu(
        i,
        r
      );
      iu(e, o, c, l);
    } else a && (ru(e, o, a, l), s[t] = void 0);
  }
}
const Ps = /(?:Once|Passive|Capture)$/;
function au(e) {
  let t;
  if (Ps.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Ps); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : We(e.slice(2)), t];
}
let Ki = 0;
const ou = /* @__PURE__ */ Promise.resolve(), lu = () => Ki || (ou.then(() => Ki = 0), Ki = Date.now());
function cu(e, t) {
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
        c && at(
          c,
          t,
          5,
          o
        );
      }
    } else
      at(
        r,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = lu(), n;
}
const Ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uu = (e, t, n, i, r, s) => {
  const a = r === "svg";
  t === "class" ? Yc(e, i, a) : t === "style" ? eu(e, n, i) : _i(t) ? xi(t) || su(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : du(e, t, i, a)) ? (Es(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Is(e, t, i, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Se(i))) ? Es(e, Pe(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Is(e, t, i, a));
};
function du(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ns(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ns(t) && Se(n) ? !1 : t in e;
}
function fu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Pe(t);
  return Array.isArray(n) ? n.some((r) => Pe(r) === i) : Object.keys(n).some((r) => Pe(r) === i);
}
const Rs = {};
// @__NO_SIDE_EFFECTS__
function pu(e, t, n) {
  let i = /* @__PURE__ */ Te(e, t);
  wi(i) && (i = Ae({}, i, t));
  class r extends Ur {
    constructor(a) {
      super(i, a, n);
    }
  }
  return r.def = i, r;
}
const hu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ur extends hu {
  constructor(t, n = {}, i = js) {
    super(), this._def = t, this._props = n, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && i !== js ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
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
      if (t instanceof Ur) {
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
    this._connected = !1, Ii(() => {
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
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = rs(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[Pe(l)] = !0);
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
        fe(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => O(n[i])
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
    let i = n ? this.getAttribute(t) : Rs;
    const r = Pe(t);
    n && this._numberProps && this._numberProps[r] && (i = rs(i)), this._setProp(r, i, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === Rs ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), i)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(We(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(We(t), n + "") : n || this.removeAttribute(We(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), _u(t, this._root);
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
            wi(a[0]) ? Ae({ detail: a }, a[0]) : { detail: a }
          )
        );
      };
      i.emit = (s, ...a) => {
        r(s, a), We(s) !== s && r(We(s), a);
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
function mu(e) {
  const t = uo(), n = t && t.ce;
  return n || null;
}
const gu = ["ctrl", "shift", "alt", "meta"], vu = {
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
  exact: (e, t) => gu.some((n) => e[`${n}Key`] && !t.includes(n))
}, ai = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const o = vu[t[a]];
      if (o && o(r, t)) return;
    }
    return e(r, ...s);
  });
}, yu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ms = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (r) => {
    if (!("key" in r))
      return;
    const s = We(r.key);
    if (t.some(
      (a) => a === s || yu[a] === s
    ))
      return e(r);
  });
}, bu = /* @__PURE__ */ Ae({ patchProp: uu }, Kc);
let Fs;
function mo() {
  return Fs || (Fs = Tc(bu));
}
const _u = (...e) => {
  mo().render(...e);
}, js = (...e) => {
  const t = mo().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const r = wu(i);
    if (!r) return;
    const s = t._component;
    !ne(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const a = n(r, !1, xu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
};
function xu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wu(e) {
  return Se(e) ? document.querySelector(e) : e;
}
var ue;
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
})(ue || (ue = {}));
var Ds;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Ds || (Ds = {}));
const V = ue.arrayToEnum([
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
]), Ft = (e) => {
  switch (typeof e) {
    case "undefined":
      return V.undefined;
    case "string":
      return V.string;
    case "number":
      return Number.isNaN(e) ? V.nan : V.number;
    case "boolean":
      return V.boolean;
    case "function":
      return V.function;
    case "bigint":
      return V.bigint;
    case "symbol":
      return V.symbol;
    case "object":
      return Array.isArray(e) ? V.array : e === null ? V.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? V.promise : typeof Map < "u" && e instanceof Map ? V.map : typeof Set < "u" && e instanceof Set ? V.set : typeof Date < "u" && e instanceof Date ? V.date : V.object;
    default:
      return V.unknown;
  }
}, C = ue.arrayToEnum([
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
class Nt extends Error {
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
    if (!(t instanceof Nt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ue.jsonStringifyReplacer, 2);
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
Nt.create = (e) => new Nt(e);
const lr = (e, t) => {
  let n;
  switch (e.code) {
    case C.invalid_type:
      e.received === V.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case C.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, ue.jsonStringifyReplacer)}`;
      break;
    case C.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ue.joinValues(e.keys, ", ")}`;
      break;
    case C.invalid_union:
      n = "Invalid input";
      break;
    case C.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ue.joinValues(e.options)}`;
      break;
    case C.invalid_enum_value:
      n = `Invalid enum value. Expected ${ue.joinValues(e.options)}, received '${e.received}'`;
      break;
    case C.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case C.invalid_return_type:
      n = "Invalid function return type";
      break;
    case C.invalid_date:
      n = "Invalid date";
      break;
    case C.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : ue.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case C.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case C.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case C.custom:
      n = "Invalid input";
      break;
    case C.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case C.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case C.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, ue.assertNever(e);
  }
  return { message: n };
};
let ku = lr;
function Su() {
  return ku;
}
const Cu = (e) => {
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
function R(e, t) {
  const n = Su(), i = Cu({
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
      n === lr ? void 0 : lr
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(i);
}
class Ue {
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
        return Q;
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
    return Ue.mergeObjectSync(t, i);
  }
  static mergeObjectSync(t, n) {
    const i = {};
    for (const r of n) {
      const { key: s, value: a } = r;
      if (s.status === "aborted" || a.status === "aborted")
        return Q;
      s.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || r.alwaysSet) && (i[s.value] = a.value);
    }
    return { status: t.value, value: i };
  }
}
const Q = Object.freeze({
  status: "aborted"
}), Tn = (e) => ({ status: "dirty", value: e }), tt = (e) => ({ status: "valid", value: e }), Ls = (e) => e.status === "aborted", zs = (e) => e.status === "dirty", mn = (e) => e.status === "valid", oi = (e) => typeof Promise < "u" && e instanceof Promise;
var q;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(q || (q = {}));
class _t {
  constructor(t, n, i, r) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = i, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Vs = (e, t) => {
  if (mn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Nt(e.common.issues);
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
class ae {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Ft(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Ft(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Ue(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Ft(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (oi(n))
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
      parsedType: Ft(t)
    }, r = this._parseSync({ data: t, path: i.path, parent: i });
    return Vs(i, r);
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
      parsedType: Ft(t)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: t, path: [], parent: n });
        return mn(s) ? {
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
    return this._parseAsync({ data: t, path: [], parent: n }).then((s) => mn(s) ? {
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
      parsedType: Ft(t)
    }, r = this._parse({ data: t, path: i.path, parent: i }), s = await (oi(r) ? r : Promise.resolve(r));
    return Vs(i, s);
  }
  refine(t, n) {
    const i = (r) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(r) : n;
    return this._refinement((r, s) => {
      const a = t(r), o = () => s.addIssue({
        code: C.custom,
        ...i(r)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((i, r) => t(i) ? !0 : (r.addIssue(typeof n == "function" ? n(i, r) : n), !1));
  }
  _refinement(t) {
    return new Xt({
      schema: this,
      typeName: J.ZodEffects,
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
    return en.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return bt.create(this);
  }
  promise() {
    return hi.create(this, this._def);
  }
  or(t) {
    return ci.create([this, t], this._def);
  }
  and(t) {
    return ui.create(this, t, this._def);
  }
  transform(t) {
    return new Xt({
      ...ie(this._def),
      schema: this,
      typeName: J.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new mi({
      ...ie(this._def),
      innerType: this,
      defaultValue: n,
      typeName: J.ZodDefault
    });
  }
  brand() {
    return new bo({
      typeName: J.ZodBranded,
      type: this,
      ...ie(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new gi({
      ...ie(this._def),
      innerType: this,
      catchValue: n,
      typeName: J.ZodCatch
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
    return Zr.create(this, t);
  }
  readonly() {
    return vi.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Au = /^c[^\s-]{8,}$/i, Tu = /^[0-9a-z]+$/, $u = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Iu = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Eu = /^[a-z0-9_-]{21}$/i, Ou = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Pu = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Nu = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Ru = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Gi;
const Mu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Fu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ju = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Du = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Lu = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, zu = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, go = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Vu = new RegExp(`^${go}$`);
function vo(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function Uu(e) {
  return new RegExp(`^${vo(e)}$`);
}
function qu(e) {
  let t = `${go}T${vo(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Zu(e, t) {
  return !!((t === "v4" || !t) && Mu.test(e) || (t === "v6" || !t) && ju.test(e));
}
function Hu(e, t) {
  if (!Ou.test(e))
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
function Bu(e, t) {
  return !!((t === "v4" || !t) && Fu.test(e) || (t === "v6" || !t) && Du.test(e));
}
class Tt extends ae {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== V.string) {
      const s = this._getOrReturnCtx(t);
      return R(s, {
        code: C.invalid_type,
        expected: V.string,
        received: s.parsedType
      }), Q;
    }
    const i = new Ue();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (r = this._getOrReturnCtx(t, r), R(r, {
          code: C.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (r = this._getOrReturnCtx(t, r), R(r, {
          code: C.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "length") {
        const a = t.data.length > s.value, o = t.data.length < s.value;
        (a || o) && (r = this._getOrReturnCtx(t, r), a ? R(r, {
          code: C.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && R(r, {
          code: C.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), i.dirty());
      } else if (s.kind === "email")
        Nu.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
          validation: "email",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "emoji")
        Gi || (Gi = new RegExp(Ru, "u")), Gi.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
          validation: "emoji",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "uuid")
        Iu.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
          validation: "uuid",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "nanoid")
        Eu.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
          validation: "nanoid",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid")
        Au.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
          validation: "cuid",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid2")
        Tu.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
          validation: "cuid2",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "ulid")
        $u.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
          validation: "ulid",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), R(r, {
            validation: "url",
            code: C.invalid_string,
            message: s.message
          }), i.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
        validation: "regex",
        code: C.invalid_string,
        message: s.message
      }), i.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), R(r, {
        code: C.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), i.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), R(r, {
        code: C.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), R(r, {
        code: C.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "datetime" ? qu(s).test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
        code: C.invalid_string,
        validation: "datetime",
        message: s.message
      }), i.dirty()) : s.kind === "date" ? Vu.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
        code: C.invalid_string,
        validation: "date",
        message: s.message
      }), i.dirty()) : s.kind === "time" ? Uu(s).test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
        code: C.invalid_string,
        validation: "time",
        message: s.message
      }), i.dirty()) : s.kind === "duration" ? Pu.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
        validation: "duration",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "ip" ? Zu(t.data, s.version) || (r = this._getOrReturnCtx(t, r), R(r, {
        validation: "ip",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "jwt" ? Hu(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), R(r, {
        validation: "jwt",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "cidr" ? Bu(t.data, s.version) || (r = this._getOrReturnCtx(t, r), R(r, {
        validation: "cidr",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64" ? Lu.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
        validation: "base64",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64url" ? zu.test(t.data) || (r = this._getOrReturnCtx(t, r), R(r, {
        validation: "base64url",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : ue.assertNever(s);
    return { status: i.value, value: t.data };
  }
  _regex(t, n, i) {
    return this.refinement((r) => t.test(r), {
      validation: n,
      code: C.invalid_string,
      ...q.errToObj(i)
    });
  }
  _addCheck(t) {
    return new Tt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...q.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...q.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...q.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...q.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...q.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...q.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...q.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...q.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...q.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...q.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...q.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...q.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...q.errToObj(t) });
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
      ...q.errToObj(t == null ? void 0 : t.message)
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
      ...q.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...q.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...q.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...q.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...q.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...q.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...q.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...q.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...q.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, q.errToObj(t));
  }
  trim() {
    return new Tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Tt({
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
Tt.create = (e) => new Tt({
  checks: [],
  typeName: J.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ie(e)
});
function Wu(e, t) {
  const n = (e.toString().split(".")[1] || "").length, i = (t.toString().split(".")[1] || "").length, r = n > i ? n : i, s = Number.parseInt(e.toFixed(r).replace(".", "")), a = Number.parseInt(t.toFixed(r).replace(".", ""));
  return s % a / 10 ** r;
}
class gn extends ae {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== V.number) {
      const s = this._getOrReturnCtx(t);
      return R(s, {
        code: C.invalid_type,
        expected: V.number,
        received: s.parsedType
      }), Q;
    }
    let i;
    const r = new Ue();
    for (const s of this._def.checks)
      s.kind === "int" ? ue.isInteger(t.data) || (i = this._getOrReturnCtx(t, i), R(i, {
        code: C.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), R(i, {
        code: C.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), R(i, {
        code: C.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? Wu(t.data, s.value) !== 0 && (i = this._getOrReturnCtx(t, i), R(i, {
        code: C.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (i = this._getOrReturnCtx(t, i), R(i, {
        code: C.not_finite,
        message: s.message
      }), r.dirty()) : ue.assertNever(s);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, q.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, q.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, q.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, q.toString(n));
  }
  setLimit(t, n, i, r) {
    return new gn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: q.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new gn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: q.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: q.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: q.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: q.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: q.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: q.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: q.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: q.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: q.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && ue.isInteger(t.value));
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
gn.create = (e) => new gn({
  checks: [],
  typeName: J.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ie(e)
});
class Vn extends ae {
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
    if (this._getType(t) !== V.bigint)
      return this._getInvalidInput(t);
    let i;
    const r = new Ue();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), R(i, {
        code: C.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), R(i, {
        code: C.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (i = this._getOrReturnCtx(t, i), R(i, {
        code: C.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : ue.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return R(n, {
      code: C.invalid_type,
      expected: V.bigint,
      received: n.parsedType
    }), Q;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, q.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, q.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, q.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, q.toString(n));
  }
  setLimit(t, n, i, r) {
    return new Vn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: i,
          message: q.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Vn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: q.toString(n)
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
Vn.create = (e) => new Vn({
  checks: [],
  typeName: J.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ie(e)
});
class cr extends ae {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== V.boolean) {
      const i = this._getOrReturnCtx(t);
      return R(i, {
        code: C.invalid_type,
        expected: V.boolean,
        received: i.parsedType
      }), Q;
    }
    return tt(t.data);
  }
}
cr.create = (e) => new cr({
  typeName: J.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ie(e)
});
class li extends ae {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== V.date) {
      const s = this._getOrReturnCtx(t);
      return R(s, {
        code: C.invalid_type,
        expected: V.date,
        received: s.parsedType
      }), Q;
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return R(s, {
        code: C.invalid_date
      }), Q;
    }
    const i = new Ue();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), R(r, {
        code: C.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), i.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), R(r, {
        code: C.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), i.dirty()) : ue.assertNever(s);
    return {
      status: i.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new li({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: q.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: q.toString(n)
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
li.create = (e) => new li({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: J.ZodDate,
  ...ie(e)
});
class Us extends ae {
  _parse(t) {
    if (this._getType(t) !== V.symbol) {
      const i = this._getOrReturnCtx(t);
      return R(i, {
        code: C.invalid_type,
        expected: V.symbol,
        received: i.parsedType
      }), Q;
    }
    return tt(t.data);
  }
}
Us.create = (e) => new Us({
  typeName: J.ZodSymbol,
  ...ie(e)
});
class ur extends ae {
  _parse(t) {
    if (this._getType(t) !== V.undefined) {
      const i = this._getOrReturnCtx(t);
      return R(i, {
        code: C.invalid_type,
        expected: V.undefined,
        received: i.parsedType
      }), Q;
    }
    return tt(t.data);
  }
}
ur.create = (e) => new ur({
  typeName: J.ZodUndefined,
  ...ie(e)
});
class dr extends ae {
  _parse(t) {
    if (this._getType(t) !== V.null) {
      const i = this._getOrReturnCtx(t);
      return R(i, {
        code: C.invalid_type,
        expected: V.null,
        received: i.parsedType
      }), Q;
    }
    return tt(t.data);
  }
}
dr.create = (e) => new dr({
  typeName: J.ZodNull,
  ...ie(e)
});
class qs extends ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return tt(t.data);
  }
}
qs.create = (e) => new qs({
  typeName: J.ZodAny,
  ...ie(e)
});
class fr extends ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return tt(t.data);
  }
}
fr.create = (e) => new fr({
  typeName: J.ZodUnknown,
  ...ie(e)
});
class zt extends ae {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return R(n, {
      code: C.invalid_type,
      expected: V.never,
      received: n.parsedType
    }), Q;
  }
}
zt.create = (e) => new zt({
  typeName: J.ZodNever,
  ...ie(e)
});
class Zs extends ae {
  _parse(t) {
    if (this._getType(t) !== V.undefined) {
      const i = this._getOrReturnCtx(t);
      return R(i, {
        code: C.invalid_type,
        expected: V.void,
        received: i.parsedType
      }), Q;
    }
    return tt(t.data);
  }
}
Zs.create = (e) => new Zs({
  typeName: J.ZodVoid,
  ...ie(e)
});
class bt extends ae {
  _parse(t) {
    const { ctx: n, status: i } = this._processInputParams(t), r = this._def;
    if (n.parsedType !== V.array)
      return R(n, {
        code: C.invalid_type,
        expected: V.array,
        received: n.parsedType
      }), Q;
    if (r.exactLength !== null) {
      const a = n.data.length > r.exactLength.value, o = n.data.length < r.exactLength.value;
      (a || o) && (R(n, {
        code: a ? C.too_big : C.too_small,
        minimum: o ? r.exactLength.value : void 0,
        maximum: a ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), i.dirty());
    }
    if (r.minLength !== null && n.data.length < r.minLength.value && (R(n, {
      code: C.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), i.dirty()), r.maxLength !== null && n.data.length > r.maxLength.value && (R(n, {
      code: C.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), i.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, o) => r.type._parseAsync(new _t(n, a, n.path, o)))).then((a) => Ue.mergeArray(i, a));
    const s = [...n.data].map((a, o) => r.type._parseSync(new _t(n, a, n.path, o)));
    return Ue.mergeArray(i, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new bt({
      ...this._def,
      minLength: { value: t, message: q.toString(n) }
    });
  }
  max(t, n) {
    return new bt({
      ...this._def,
      maxLength: { value: t, message: q.toString(n) }
    });
  }
  length(t, n) {
    return new bt({
      ...this._def,
      exactLength: { value: t, message: q.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
bt.create = (e, t) => new bt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: J.ZodArray,
  ...ie(t)
});
function an(e) {
  if (e instanceof Ie) {
    const t = {};
    for (const n in e.shape) {
      const i = e.shape[n];
      t[n] = $t.create(an(i));
    }
    return new Ie({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof bt ? new bt({
    ...e._def,
    type: an(e.element)
  }) : e instanceof $t ? $t.create(an(e.unwrap())) : e instanceof en ? en.create(an(e.unwrap())) : e instanceof Qt ? Qt.create(e.items.map((t) => an(t))) : e;
}
class Ie extends ae {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = ue.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== V.object) {
      const c = this._getOrReturnCtx(t);
      return R(c, {
        code: C.invalid_type,
        expected: V.object,
        received: c.parsedType
      }), Q;
    }
    const { status: i, ctx: r } = this._processInputParams(t), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof zt && this._def.unknownKeys === "strip"))
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
    if (this._def.catchall instanceof zt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: r.data[u] }
          });
      else if (c === "strict")
        o.length > 0 && (R(r, {
          code: C.unrecognized_keys,
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
        const d = await u.key, p = await u.value;
        c.push({
          key: d,
          value: p,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => Ue.mergeObjectSync(i, c)) : Ue.mergeObjectSync(i, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return q.errToObj, new Ie({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, i) => {
          var s, a;
          const r = ((a = (s = this._def).errorMap) == null ? void 0 : a.call(s, n, i).message) ?? i.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: q.errToObj(t).message ?? r
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
      typeName: J.ZodObject
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
    for (const i of ue.objectKeys(t))
      t[i] && this.shape[i] && (n[i] = this.shape[i]);
    return new Ie({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const i of ue.objectKeys(this.shape))
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
    return an(this);
  }
  partial(t) {
    const n = {};
    for (const i of ue.objectKeys(this.shape)) {
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
    for (const i of ue.objectKeys(this.shape))
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
    return yo(ue.objectKeys(this.shape));
  }
}
Ie.create = (e, t) => new Ie({
  shape: () => e,
  unknownKeys: "strip",
  catchall: zt.create(),
  typeName: J.ZodObject,
  ...ie(t)
});
Ie.strictCreate = (e, t) => new Ie({
  shape: () => e,
  unknownKeys: "strict",
  catchall: zt.create(),
  typeName: J.ZodObject,
  ...ie(t)
});
Ie.lazycreate = (e, t) => new Ie({
  shape: e,
  unknownKeys: "strip",
  catchall: zt.create(),
  typeName: J.ZodObject,
  ...ie(t)
});
class ci extends ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), i = this._def.options;
    function r(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new Nt(o.ctx.common.issues));
      return R(n, {
        code: C.invalid_union,
        unionErrors: a
      }), Q;
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
      const o = a.map((l) => new Nt(l));
      return R(n, {
        code: C.invalid_union,
        unionErrors: o
      }), Q;
    }
  }
  get options() {
    return this._def.options;
  }
}
ci.create = (e, t) => new ci({
  options: e,
  typeName: J.ZodUnion,
  ...ie(t)
});
const kt = (e) => e instanceof fi ? kt(e.schema) : e instanceof Xt ? kt(e.innerType()) : e instanceof pi ? [e.value] : e instanceof Jt ? e.options : e instanceof hr ? ue.objectValues(e.enum) : e instanceof mi ? kt(e._def.innerType) : e instanceof ur ? [void 0] : e instanceof dr ? [null] : e instanceof $t ? [void 0, ...kt(e.unwrap())] : e instanceof en ? [null, ...kt(e.unwrap())] : e instanceof bo || e instanceof vi ? kt(e.unwrap()) : e instanceof gi ? kt(e._def.innerType) : [];
class qr extends ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== V.object)
      return R(n, {
        code: C.invalid_type,
        expected: V.object,
        received: n.parsedType
      }), Q;
    const i = this.discriminator, r = n.data[i], s = this.optionsMap.get(r);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (R(n, {
      code: C.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [i]
    }), Q);
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
    return new qr({
      typeName: J.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: r,
      ...ie(i)
    });
  }
}
function pr(e, t) {
  const n = Ft(e), i = Ft(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === V.object && i === V.object) {
    const r = ue.objectKeys(t), s = ue.objectKeys(e).filter((o) => r.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of s) {
      const l = pr(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (n === V.array && i === V.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s], o = t[s], l = pr(a, o);
      if (!l.valid)
        return { valid: !1 };
      r.push(l.data);
    }
    return { valid: !0, data: r };
  } else return n === V.date && i === V.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class ui extends ae {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = (s, a) => {
      if (Ls(s) || Ls(a))
        return Q;
      const o = pr(s.value, a.value);
      return o.valid ? ((zs(s) || zs(a)) && n.dirty(), { status: n.value, value: o.data }) : (R(i, {
        code: C.invalid_intersection_types
      }), Q);
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
ui.create = (e, t, n) => new ui({
  left: e,
  right: t,
  typeName: J.ZodIntersection,
  ...ie(n)
});
class Qt extends ae {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== V.array)
      return R(i, {
        code: C.invalid_type,
        expected: V.array,
        received: i.parsedType
      }), Q;
    if (i.data.length < this._def.items.length)
      return R(i, {
        code: C.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Q;
    !this._def.rest && i.data.length > this._def.items.length && (R(i, {
      code: C.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...i.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new _t(i, a, i.path, o)) : null;
    }).filter((a) => !!a);
    return i.common.async ? Promise.all(s).then((a) => Ue.mergeArray(n, a)) : Ue.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Qt({
      ...this._def,
      rest: t
    });
  }
}
Qt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Qt({
    items: e,
    typeName: J.ZodTuple,
    rest: null,
    ...ie(t)
  });
};
class di extends ae {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== V.object)
      return R(i, {
        code: C.invalid_type,
        expected: V.object,
        received: i.parsedType
      }), Q;
    const r = [], s = this._def.keyType, a = this._def.valueType;
    for (const o in i.data)
      r.push({
        key: s._parse(new _t(i, o, i.path, o)),
        value: a._parse(new _t(i, i.data[o], i.path, o)),
        alwaysSet: o in i.data
      });
    return i.common.async ? Ue.mergeObjectAsync(n, r) : Ue.mergeObjectSync(n, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, i) {
    return n instanceof ae ? new di({
      keyType: t,
      valueType: n,
      typeName: J.ZodRecord,
      ...ie(i)
    }) : new di({
      keyType: Tt.create(),
      valueType: t,
      typeName: J.ZodRecord,
      ...ie(n)
    });
  }
}
class Hs extends ae {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== V.map)
      return R(i, {
        code: C.invalid_type,
        expected: V.map,
        received: i.parsedType
      }), Q;
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
            return Q;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return Q;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
Hs.create = (e, t, n) => new Hs({
  valueType: t,
  keyType: e,
  typeName: J.ZodMap,
  ...ie(n)
});
class Un extends ae {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== V.set)
      return R(i, {
        code: C.invalid_type,
        expected: V.set,
        received: i.parsedType
      }), Q;
    const r = this._def;
    r.minSize !== null && i.data.size < r.minSize.value && (R(i, {
      code: C.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), n.dirty()), r.maxSize !== null && i.data.size > r.maxSize.value && (R(i, {
      code: C.too_big,
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
          return Q;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const o = [...i.data.values()].map((l, c) => s._parse(new _t(i, l, i.path, c)));
    return i.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(t, n) {
    return new Un({
      ...this._def,
      minSize: { value: t, message: q.toString(n) }
    });
  }
  max(t, n) {
    return new Un({
      ...this._def,
      maxSize: { value: t, message: q.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Un.create = (e, t) => new Un({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: J.ZodSet,
  ...ie(t)
});
class fi extends ae {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
fi.create = (e, t) => new fi({
  getter: e,
  typeName: J.ZodLazy,
  ...ie(t)
});
class pi extends ae {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return R(n, {
        received: n.data,
        code: C.invalid_literal,
        expected: this._def.value
      }), Q;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
pi.create = (e, t) => new pi({
  value: e,
  typeName: J.ZodLiteral,
  ...ie(t)
});
function yo(e, t) {
  return new Jt({
    values: e,
    typeName: J.ZodEnum,
    ...ie(t)
  });
}
class Jt extends ae {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return R(n, {
        expected: ue.joinValues(i),
        received: n.parsedType,
        code: C.invalid_type
      }), Q;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return R(n, {
        received: n.data,
        code: C.invalid_enum_value,
        options: i
      }), Q;
    }
    return tt(t.data);
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
    return Jt.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Jt.create(this.options.filter((i) => !t.includes(i)), {
      ...this._def,
      ...n
    });
  }
}
Jt.create = yo;
class hr extends ae {
  _parse(t) {
    const n = ue.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(t);
    if (i.parsedType !== V.string && i.parsedType !== V.number) {
      const r = ue.objectValues(n);
      return R(i, {
        expected: ue.joinValues(r),
        received: i.parsedType,
        code: C.invalid_type
      }), Q;
    }
    if (this._cache || (this._cache = new Set(ue.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = ue.objectValues(n);
      return R(i, {
        received: i.data,
        code: C.invalid_enum_value,
        options: r
      }), Q;
    }
    return tt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
hr.create = (e, t) => new hr({
  values: e,
  typeName: J.ZodNativeEnum,
  ...ie(t)
});
class hi extends ae {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== V.promise && n.common.async === !1)
      return R(n, {
        code: C.invalid_type,
        expected: V.promise,
        received: n.parsedType
      }), Q;
    const i = n.parsedType === V.promise ? n.data : Promise.resolve(n.data);
    return tt(i.then((r) => this._def.type.parseAsync(r, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
hi.create = (e, t) => new hi({
  type: e,
  typeName: J.ZodPromise,
  ...ie(t)
});
class Xt extends ae {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === J.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = this._def.effect || null, s = {
      addIssue: (a) => {
        R(i, a), a.fatal ? n.abort() : n.dirty();
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
            return Q;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: i.path,
            parent: i
          });
          return l.status === "aborted" ? Q : l.status === "dirty" || n.value === "dirty" ? Tn(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return Q;
        const o = this._def.schema._parseSync({
          data: a,
          path: i.path,
          parent: i
        });
        return o.status === "aborted" ? Q : o.status === "dirty" || n.value === "dirty" ? Tn(o.value) : o;
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
        return o.status === "aborted" ? Q : (o.status === "dirty" && n.dirty(), a(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((o) => o.status === "aborted" ? Q : (o.status === "dirty" && n.dirty(), a(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (r.type === "transform")
      if (i.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        if (!mn(a))
          return Q;
        const o = r.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((a) => mn(a) ? Promise.resolve(r.transform(a.value, s)).then((o) => ({
          status: n.value,
          value: o
        })) : Q);
    ue.assertNever(r);
  }
}
Xt.create = (e, t, n) => new Xt({
  schema: e,
  typeName: J.ZodEffects,
  effect: t,
  ...ie(n)
});
Xt.createWithPreprocess = (e, t, n) => new Xt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: J.ZodEffects,
  ...ie(n)
});
class $t extends ae {
  _parse(t) {
    return this._getType(t) === V.undefined ? tt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
$t.create = (e, t) => new $t({
  innerType: e,
  typeName: J.ZodOptional,
  ...ie(t)
});
class en extends ae {
  _parse(t) {
    return this._getType(t) === V.null ? tt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
en.create = (e, t) => new en({
  innerType: e,
  typeName: J.ZodNullable,
  ...ie(t)
});
class mi extends ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let i = n.data;
    return n.parsedType === V.undefined && (i = this._def.defaultValue()), this._def.innerType._parse({
      data: i,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
mi.create = (e, t) => new mi({
  innerType: e,
  typeName: J.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ie(t)
});
class gi extends ae {
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
    return oi(r) ? r.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Nt(i.common.issues);
        },
        input: i.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new Nt(i.common.issues);
        },
        input: i.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
gi.create = (e, t) => new gi({
  innerType: e,
  typeName: J.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ie(t)
});
class Bs extends ae {
  _parse(t) {
    if (this._getType(t) !== V.nan) {
      const i = this._getOrReturnCtx(t);
      return R(i, {
        code: C.invalid_type,
        expected: V.nan,
        received: i.parsedType
      }), Q;
    }
    return { status: "valid", value: t.data };
  }
}
Bs.create = (e) => new Bs({
  typeName: J.ZodNaN,
  ...ie(e)
});
class bo extends ae {
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
class Zr extends ae {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return s.status === "aborted" ? Q : s.status === "dirty" ? (n.dirty(), Tn(s.value)) : this._def.out._parseAsync({
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
      return r.status === "aborted" ? Q : r.status === "dirty" ? (n.dirty(), {
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
    return new Zr({
      in: t,
      out: n,
      typeName: J.ZodPipeline
    });
  }
}
class vi extends ae {
  _parse(t) {
    const n = this._def.innerType._parse(t), i = (r) => (mn(r) && (r.value = Object.freeze(r.value)), r);
    return oi(n) ? n.then((r) => i(r)) : i(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
vi.create = (e, t) => new vi({
  innerType: e,
  typeName: J.ZodReadonly,
  ...ie(t)
});
var J;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(J || (J = {}));
const U = Tt.create, H = gn.create, Ke = cr.create, _o = fr.create;
zt.create;
const ge = bt.create, se = Ie.create, qn = ci.create, Ku = qr.create;
ui.create;
Qt.create;
const Hr = di.create, Gu = fi.create, ot = pi.create, be = Jt.create;
hi.create;
$t.create;
en.create;
const Yu = be([
  "eq",
  "neq",
  "in",
  "gt",
  "gte",
  "lt",
  "lte",
  "isSet",
  "notSet"
]), Ws = se({
  ref: U().min(1),
  op: Yu,
  value: qn([U(), H(), ge(U()), ge(H())]).optional()
}), mr = Gu(() => se({
  all: ge(qn([Ws, mr])).optional(),
  any: ge(qn([Ws, mr])).optional()
}));
function Br(e) {
  return "op" in e;
}
const Qu = [
  "file.pages",
  "file.colorPages",
  "file.monoPages",
  "file.status"
], xo = "quantity", Ju = be(["quantity", "pages", "area", "length"]), Xu = se({
  /**
   * Inclusive upper bound on the basis value. MUST be omitted on the last
   * row (open-ended) and present on every other row — validate.ts enforces
   * strictly-increasing order, which makes overlap impossible by construction.
   */
  upTo: H().positive().optional(),
  amount: H()
}), wo = se({
  basis: Ju.default("quantity"),
  /**
   * flat:      the entire basis value is priced at the matched row's amount.
   * graduated: each band is priced at its own amount and summed
   *            (progressive-tax style).
   */
  mode: be(["flat", "graduated"]).default("flat"),
  rows: ge(Xu).min(1)
}), ed = be(["sqm", "sqft", "sqin"]), td = be(["m", "ft", "in", "cm"]), nd = be([
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
]), ko = se({
  type: nd,
  amount: H(),
  /** perArea only: the unit `amount` is priced in. */
  areaUnit: ed.optional(),
  /** perLength only: the unit `amount` is priced in. Default "m" (engine-side). */
  lengthUnit: td.optional(),
  /**
   * perLength only: which axis of the source W×H is the billable
   * length. Default "h" (a roll's fixed width is w; the consumed
   * length is h). "max" prices the longest side.
   */
  lengthAxis: be(["h", "w", "max"]).optional(),
  /**
   * perArea/perLength only: id of a `dimensions` field to read W×H
   * from. Fallback when omitted: FileMetadata.canvas.
   */
  dimensionsField: U().optional(),
  /**
   * Volume/size breaks. For basis "area" the basis value is in
   * `areaUnit`; for basis "length", in `lengthUnit`.
   */
  tiers: wo.optional()
}), id = se({
  amount: H().nonnegative().default(0),
  /** "order": added once (v1 behavior). "unit": × quantity (t-shirts, cards). */
  per: be(["order", "unit"]).default("order"),
  /**
   * Quantity breaks on the base. basis must be "quantity"; mode "graduated"
   * requires per === "unit" (validate.ts).
   */
  tiers: wo.optional()
}), rd = se({
  currency: U().regex(/^[A-Z]{3}$/, "ISO 4217 currency code").default("USD"),
  basePrice: id.default({}),
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
  lineQuantity: be(["job", "units"]).optional()
}), yi = "2.0", sd = se({
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
}).strict(), ad = se({
  context: sd.optional()
}), So = se({
  id: U().min(1),
  label: U(),
  description: U().optional(),
  /** http(s) URL or data: URI (builder can embed small images). */
  image: U().optional(),
  /** Hex color for swatch display. */
  color: U().optional(),
  /** Default selection for the parent field. */
  default: Ke().optional(),
  /** Merchant SKU fragment for this choice (used by resolveSku / adapters). */
  sku: U().optional(),
  /** Manually mark a choice unavailable without deleting it. */
  disabled: Ke().optional(),
  /** Price changes applied when this choice is selected. */
  priceModifiers: ge(ko).default([]),
  /** What selecting this choice tells the Filecheck intake (if any). */
  filecheck: ad.optional()
}), Ut = se({
  id: U().min(1),
  label: U().optional(),
  helpText: U().optional(),
  required: Ke().default(!1),
  visibleWhen: mr.optional(),
  /** Price changes applied just for having this field visible. */
  priceModifiers: ge(ko).default([]),
  /**
   * Semantic role for the Page API (docs/page-api-v1.md): lets on-page
   * integrations find "the size field" regardless of the merchant's own
   * ids/labels. v1 vocabulary: "size" | "pages" | "material" |
   * "orientation" — deliberately an OPEN string (a role is a label, never
   * behavior; unknown roles pass through). At most one field per role per
   * document (validate.ts). Field types quantity/dimensions/file need no
   * role — they are semantic by themselves.
   */
  role: U().optional()
}), od = Ut.extend({
  type: ot("select-one"),
  display: be(["cards", "grid", "swatches", "pills", "dropdown", "list"]).default("pills"),
  options: ge(So).min(1)
}), ld = Ut.extend({
  type: ot("select-many"),
  display: be(["cards", "grid", "swatches", "pills", "list"]).default("list"),
  options: ge(So).min(1),
  minSelect: H().int().nonnegative().default(0),
  maxSelect: H().int().positive().optional()
}), cd = Ut.extend({
  type: ot("quantity"),
  display: be(["stepper", "pills", "dropdown", "input"]).default("stepper"),
  min: H().int().positive().default(1),
  max: H().int().positive().optional(),
  step: H().int().positive().default(1),
  defaultValue: H().int().positive().default(1),
  /** Preset quantities for pills/dropdown display (e.g. 100/250/500/1000). */
  presets: ge(H().int().positive()).optional(),
  /**
   * Word shown after the number wherever the answer is recapped — the cart
   * line, the order, the widget's summary: "5 banners". Storefront themes
   * differ in whether they print a property's label, and a bare "5" beside
   * a cart quantity of 1 does not say what it counts.
   */
  unit: U().max(40).optional()
}), ud = Ut.extend({
  type: ot("number"),
  display: be(["stepper", "slider", "input"]).default("input"),
  min: H().optional(),
  max: H().optional(),
  step: H().positive().optional(),
  defaultValue: H().optional()
}), dd = Ut.extend({
  type: ot("text"),
  display: be(["input", "textarea"]).default("input"),
  placeholder: U().optional(),
  maxLength: H().int().positive().optional()
}), gr = be(["mm", "cm", "in"]), fd = Ut.extend({
  type: ot("dimensions"),
  display: be(["inputs"]).default("inputs"),
  /** Units the customer may pick between. */
  units: ge(gr).min(1).default(["mm"]),
  defaultUnit: gr.default("mm"),
  /** Constraints, expressed in defaultUnit. */
  minW: H().positive().optional(),
  maxW: H().positive().optional(),
  minH: H().positive().optional(),
  maxH: H().positive().optional(),
  defaultValue: se({ w: H().positive(), h: H().positive() }).optional()
}), pd = se({
  /** Saved Filecheck workflow that validates uploads for this field. */
  workflowId: U().min(1).optional(),
  /**
   * Inline (transient) workflow object, passed verbatim to the Filecheck
   * element. Preview-tagged server-side: unmetered, webhook-silent —
   * which is what lets demo blueprints run against any tenant with
   * nothing configured in the Filecheck admin. Wins over `workflowId`
   * when both are present. Rules only — a blueprint is public data and
   * must never carry keys or secrets.
   */
  workflow: Hr(_o()).optional()
}).refine((e) => !!e.workflowId || !!e.workflow, {
  message: "filecheck needs a workflowId or an inline workflow"
}), hd = Ut.extend({
  type: ot("file"),
  /**
   * dropzone: the built-in upload, with any registered producers (Print.App
   * designer, template picker) offered around it. producer: NO direct
   * upload - only the registered producers render; the merchant is
   * showcasing the designer, not file drops.
   */
  display: be(["dropzone", "producer"]).default("dropzone"),
  accept: ge(U()).default(["application/pdf"]),
  /** Which data-feed provider enriches the FileMetadata. */
  providerId: U().optional(),
  /**
   * Filecheck-backed upload: replaces the dropzone with the Filecheck
   * intake element when the storefront supplies an element-mode provider
   * config (publishable key lives there — NEVER in this blueprint).
   */
  filecheck: pd.optional()
}), md = Ut.extend({
  type: ot("info"),
  /** summary: live selection recap. note: static text block. */
  display: be(["summary", "note"]).default("note"),
  body: U().optional()
}), gd = Ku("type", [
  od,
  ld,
  cd,
  ud,
  dd,
  fd,
  hd,
  md
]);
function Ye(e) {
  return e.type === "select-one" || e.type === "select-many";
}
const vd = se({
  id: U().min(1),
  title: U(),
  fields: ge(gd)
}), yd = se({
  /** axisFieldId -> choiceId, exactly one entry per axis (validate.ts). */
  select: Hr(U()),
  sku: U().optional(),
  /** Absolute replacement for pricing.basePrice.amount while selected. */
  price: H().nonnegative().optional(),
  available: Ke().default(!0),
  /** Platform hook (e.g. Shopify variant GID) for adapters that map to real variants. */
  platformVariantId: U().optional()
}), bd = se({
  /** Field ids of select-one fields forming the matrix (e.g. ["size","color"]). */
  axes: ge(U().min(1)).min(1),
  combinations: ge(yd)
}), Wr = se({
  version: ot(yi).default(yi),
  productId: U().min(1),
  title: U(),
  /** stacked: all sections at once. wizard: one section per step. */
  layout: be(["stacked", "wizard"]).default("stacked"),
  pricing: rd.default({}),
  variants: bd.optional(),
  sections: ge(vd)
});
se({
  w: H().positive(),
  h: H().positive(),
  unit: gr
});
function Qe(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && typeof e.w == "number" && typeof e.h == "number";
}
const Co = /* @__PURE__ */ new Set([
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
]), Ao = /* @__PURE__ */ new Set(["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"]);
function To(e) {
  const t = e.toUpperCase();
  return Co.has(t) ? 0 : Ao.has(t) ? 3 : 2;
}
function _d(e) {
  return /^[A-Z]{3}$/.test(e) && (Co.has(e) || Ao.has(e) || xd.has(e));
}
const xd = /* @__PURE__ */ new Set([
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
class nn extends Error {
}
const fn = (e) => typeof e == "object" && e !== null && !Array.isArray(e);
function wd(e) {
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
function kd(e) {
  const t = /* @__PURE__ */ new Map(), n = Array.isArray(e.sections) ? e.sections : [];
  for (const i of n) {
    const r = fn(i) && Array.isArray(i.fields) ? i.fields : [];
    for (const s of r)
      fn(s) && typeof s.id == "string" && Array.isArray(s.options) && t.set(s.id, new Set(s.options.flatMap((a) => fn(a) && typeof a.id == "string" ? [a.id] : [])));
  }
  return t;
}
function Sd(e, t, n) {
  if (!fn(t))
    throw new nn("The matrix table must be an object.");
  const { choices: i, prices: r, off: s = [], skus: a = [] } = t;
  if (!Array.isArray(i) || i.length !== e.length || !i.every((p) => Array.isArray(p) && p.every((m) => typeof m == "string")))
    throw new nn("The matrix table needs one list of choice ids per axis.");
  const o = wd(i);
  if (!Array.isArray(r) || r.length !== o.length)
    throw new nn(`The matrix table has ${Array.isArray(r) ? r.length : 0} prices for ${o.length} combinations.`);
  if (!r.every((p) => p === null || typeof p == "number" && Number.isFinite(p) && p >= 0))
    throw new nn("Matrix prices must be numbers of zero or more, or null.");
  const l = (p) => Number.isInteger(p) && p >= 0 && p < o.length;
  if (!Array.isArray(s) || !s.every(l))
    throw new nn("Matrix unavailable positions are out of range.");
  if (!Array.isArray(a) || !a.every((p) => Array.isArray(p) && p.length === 2 && l(p[0]) && typeof p[1] == "string"))
    throw new nn("Matrix SKUs must be [position, sku] pairs.");
  const c = new Set(s), u = new Map(a.map(([p, m]) => [p, m])), d = [];
  return o.forEach((p, m) => {
    const A = r[m], _ = u.get(m);
    if (A === null && !c.has(m) && _ === void 0 || p.some((M, F) => n.has(e[F]) && !n.get(e[F]).has(M)))
      return;
    const I = {
      select: Object.fromEntries(e.map((M, F) => [M, p[F]])),
      available: !c.has(m)
    };
    A !== null && (I.price = A), _ !== void 0 && (I.sku = _), d.push(I);
  }), d;
}
function Cd(e) {
  if (!fn(e) || !fn(e.variants) || e.variants.table === void 0)
    return e;
  const { table: t, ...n } = e.variants, i = Array.isArray(n.axes) ? n.axes.filter((r) => typeof r == "string") : [];
  return {
    ...e,
    variants: { ...n, axes: i, combinations: Sd(i, t, kd(e)) }
  };
}
function $o(e) {
  let t;
  try {
    t = Cd(e);
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
  const n = Wr.safeParse(t);
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
  const i = Io(n.data);
  return {
    ok: !i.some((r) => r.severity === "error"),
    value: n.data,
    issues: i
  };
}
Wr.superRefine((e, t) => {
  for (const n of Io(e))
    n.severity === "error" && t.addIssue({
      code: C.custom,
      path: n.path,
      message: `${n.code}: ${n.message}`
    });
});
function Io(e) {
  const t = [], n = (c, u, d, p = "error") => t.push({ path: c, code: u, message: d, severity: p }), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  let a = 0, o, l = !1;
  e.sections.forEach((c, u) => {
    r.has(c.id) && n(["sections", u, "id"], "duplicate-section-id", `Duplicate section id "${c.id}".`), r.add(c.id), c.fields.forEach((d, p) => {
      const m = ["sections", u, "fields", p];
      if (i.has(d.id) ? n([...m, "id"], "duplicate-field-id", `Duplicate field id "${d.id}".`) : i.set(d.id, { field: d, path: m }), (d.id === xo || d.id.startsWith("file.")) && n([...m, "id"], "reserved-field-id", `Field id "${d.id}" is reserved for condition refs.`), d.type === "quantity" && (o ?? (o = m), Ed(d.visibleWhen) || (a += 1, a > 1 && n(m, "multiple-quantity-fields", "Only one quantity field can show unconditionally. Give the others a visibility rule so a single quantity field is shown at a time."))), d.role) {
        const A = s.get(d.role);
        A ? n([...m, "role"], "duplicate-role", `Role "${d.role}" is already used by field "${A}" — only one field per role.`) : s.set(d.role, d.id);
      }
      d.type === "file" && (l = !0);
    });
  });
  for (const { field: c, path: u } of i.values()) {
    $d(c, u, n), Id(c, u, n), Od(c, u, i, n);
    const d = [
      { mods: c.priceModifiers, base: [...u, "priceModifiers"] }
    ];
    Ye(c) && c.options.forEach((p, m) => {
      d.push({
        mods: p.priceModifiers,
        base: [...u, "options", m, "priceModifiers"]
      });
    });
    for (const { mods: p, base: m } of d)
      p.forEach((A, _) => {
        Nd(A, [...m, _], i, l, n);
      });
  }
  return Rd(e.pricing.basePrice, ["pricing", "basePrice"], n), e.variants && Md(e, i, n), o && !Td(e) && n(o, "quantity-has-no-effect", "Changing the quantity does not change the price: every amount in this product is added once per order. If customers can buy more than one, set the base price to per unit, or price the options per unit instead of fixed.", "warning"), _d(e.pricing.currency) || n(["pricing", "currency"], "unknown-currency", `Currency "${e.pricing.currency}" is not in the known list; totals will round to 2 decimals.`, "warning"), t;
}
const Ad = /* @__PURE__ */ new Set([
  "perUnit",
  "perPage",
  "perColorPage",
  "perMonoPage",
  "perArea",
  "perLength"
]);
function Td(e) {
  var i;
  const t = e.pricing.basePrice;
  if (t.per === "unit" || t.tiers)
    return !0;
  const n = (r) => {
    var s;
    return Ad.has(r.type) || (((s = r.tiers) == null ? void 0 : s.basis) ?? "quantity") === "quantity" && r.tiers !== void 0;
  };
  for (const r of e.sections)
    for (const s of r.fields)
      if ((i = s.priceModifiers) != null && i.some(n) || Ye(s) && s.options.some((a) => {
        var o;
        return (o = a.priceModifiers) == null ? void 0 : o.some(n);
      }))
        return !0;
  return !1;
}
function $d(e, t, n) {
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
function Id(e, t, n) {
  if (!Ye(e))
    return;
  const i = /* @__PURE__ */ new Set();
  let r = 0;
  e.options.forEach((s, a) => {
    i.has(s.id) && n([...t, "options", a, "id"], "duplicate-choice-id", `Duplicate choice id "${s.id}" in field "${e.id}".`), i.add(s.id), s.default && (r += 1);
  }), e.type === "select-one" && r > 1 && n([...t, "options"], "too-many-defaults", `select-one field "${e.id}" has ${r} default choices.`), e.type === "select-many" && e.maxSelect !== void 0 && r > e.maxSelect && n([...t, "options"], "too-many-defaults", `Default choices (${r}) exceed maxSelect (${e.maxSelect}).`);
}
function Ed(e) {
  var t, n;
  return e ? (((t = e.all) == null ? void 0 : t.length) ?? 0) > 0 || (((n = e.any) == null ? void 0 : n.length) ?? 0) > 0 : !1;
}
function Od(e, t, n, i) {
  if (!e.visibleWhen)
    return;
  const r = [...t, "visibleWhen"], s = (a, o) => {
    if (Br(a)) {
      const l = Qu.includes(a.ref), c = a.ref === xo, u = n.get(a.ref);
      if (!l && !c && !u) {
        i(o, "dangling-condition-ref", `Condition references unknown field "${a.ref}".`);
        return;
      }
      if (a.ref === e.id && i(o, "self-condition-ref", `Field "${e.id}" references itself.`), c && e.type === "quantity" && i(o, "quantity-ref-on-quantity-field", `Quantity field "${e.id}" cannot be shown or hidden by the quantity.`), u && Ye(u.field) && (a.op === "eq" || a.op === "neq" || a.op === "in")) {
        const d = new Set(u.field.options.map((m) => m.id)), p = Array.isArray(a.value) ? a.value : a.value !== void 0 ? [a.value] : [];
        for (const m of p)
          typeof m == "string" && !d.has(m) && i(o, "unknown-condition-choice", `"${m}" is not a choice of field "${a.ref}".`, "warning");
      }
      return;
    }
    (a.all ?? []).forEach((l, c) => s(l, [...o, "all", c])), (a.any ?? []).forEach((l, c) => s(l, [...o, "any", c]));
  };
  s(e.visibleWhen, r);
}
function Eo(e, t, n) {
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
const Pd = /* @__PURE__ */ new Set(["fixed", "percent", "multiplier", "setup"]);
function Nd(e, t, n, i, r) {
  if (e.tiers && (Eo(e.tiers, [...t, "tiers"], r), e.tiers.mode === "graduated" && Pd.has(e.type) && r([...t, "tiers", "mode"], "tier-basis-invalid", `Graduated tiers are meaningless on a "${e.type}" modifier.`), e.tiers.basis === "pages" && !i && r([...t, "tiers", "basis"], "pages-basis-without-file", "Pages-based tiers need a file field to supply page counts.", "warning")), (e.type === "perPage" || e.type === "perColorPage" || e.type === "perMonoPage") && !i && r([...t, "type"], "pages-basis-without-file", `"${e.type}" pricing needs a file field to supply page counts.`, "warning"), e.type === "perArea" || e.type === "perLength") {
    const s = e.type.toLowerCase();
    if (e.dimensionsField !== void 0) {
      const a = n.get(e.dimensionsField);
      (!a || a.field.type !== "dimensions") && r([...t, "dimensionsField"], `${s}-dangling-dims`, `"${e.dimensionsField}" is not a dimensions field.`);
    } else i || r([...t, "type"], `${s}-missing-source`, `${e.type} pricing has no dimensions field and no file field to read a canvas from.`, "warning");
  }
}
function Rd(e, t, n) {
  e.tiers && (Eo(e.tiers, [...t, "tiers"], n), e.tiers.basis !== "quantity" && n([...t, "tiers", "basis"], "tier-basis-invalid", "Base price tiers must use the quantity basis."), e.tiers.mode === "graduated" && e.per === "order" && n([...t, "tiers", "mode"], "tier-basis-invalid", 'Graduated base tiers require per: "unit".'));
}
function Md(e, t, n) {
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
    if (new Set(c).size !== a.size || c.some((p) => !a.has(p))) {
      n(["variants", "combinations", l, "select"], "variant-combo-invalid", "Combination keys must exactly match the variant axes.");
      return;
    }
    for (const [p, m] of Object.entries(o.select)) {
      const A = r.get(p);
      A && !A.has(m) && n(["variants", "combinations", l, "select", p], "variant-combo-invalid", `"${m}" is not a choice of axis "${p}".`);
    }
    const d = i.axes.map((p) => o.select[p]).join("\0");
    s.has(d) && n(["variants", "combinations", l], "variant-combo-duplicate", "Duplicate variant combination."), s.add(d), o.price !== void 0 && e.pricing.basePrice.tiers && n(["variants", "combinations", l, "price"], "variant-price-with-base-tiers", "Combination price overrides only the untiered base amount; base tiers still apply.", "warning");
  });
}
const vr = "1.0", Fd = se({
  /** Minimum quantity required to trigger this tier (inclusive). */
  minQty: H().nonnegative(),
  /** Maximum quantity for this tier (inclusive). If omitted, tier spans to infinity. */
  maxQty: H().nonnegative().optional(),
  /** Price/amount applied for this tier. */
  amount: H()
}), Oo = se({
  type: be([
    "fixed",
    "perUnit",
    "perPage",
    "perColorPage",
    "perMonoPage",
    "percent",
    "multiplier"
  ]),
  amount: H(),
  tiers: ge(Fd).optional()
}), jd = se({
  /** The field id whose value gates visibility. */
  field: U(),
  /** Show when the field's selected value equals one of these. */
  equals: qn([U(), ge(U())]).optional(),
  /** Show only when a value is present (any non-empty selection). */
  isSet: Ke().optional()
}), Dd = se({
  id: U().min(1),
  label: U(),
  description: U().optional(),
  image: U().url().optional(),
  color: U().optional(),
  default: Ke().optional(),
  priceModifiers: ge(Oo).default([]),
  /** Dead in v1 runtime; dropped by migration. */
  reveals: ge(U()).default([])
}), Ld = be([
  "card-select",
  "image-grid",
  "swatch",
  "pill-toggle",
  "dropdown",
  "number-stepper",
  "file-upload",
  "summary"
]), zd = se({
  id: U().min(1),
  type: Ld,
  label: U().optional(),
  helpText: U().optional(),
  required: Ke().default(!1),
  options: ge(Dd).default([]),
  min: H().optional(),
  max: H().optional(),
  step: H().optional(),
  defaultValue: qn([U(), H()]).optional(),
  accept: ge(U()).optional(),
  providerId: U().optional(),
  visibleWhen: jd.optional(),
  priceModifiers: ge(Oo).default([])
}), Vd = se({
  id: U().min(1),
  title: U(),
  layout: be(["stacked", "tabs"]).default("stacked"),
  fields: ge(zd)
}), Ud = se({
  version: ot(vr).default(vr),
  productId: U().min(1),
  title: U(),
  currency: U().default("USD"),
  basePrice: H().nonnegative().default(0),
  sections: ge(Vd)
});
class bi extends Error {
  constructor(n) {
    const i = n.map((r) => `${r.code} at ${r.path.join(".") || "<root>"}: ${r.message}`).join("; ");
    super(`Invalid product options: ${i}`);
    ns(this, "issues");
    this.name = "ProductOptionsError", this.issues = n;
  }
}
function qd(e) {
  const t = Ud.safeParse(e);
  if (!t.success)
    throw new bi(t.error.issues.map((c) => ({
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
    version: yi,
    productId: n.productId,
    title: n.title,
    layout: s ? "wizard" : "stacked",
    pricing: {
      currency: Qd(n.currency, i),
      basePrice: { amount: n.basePrice, per: "order" }
    },
    sections: n.sections.map((c) => ({
      id: c.id,
      title: c.title,
      fields: c.fields.map((u) => {
        const d = Bd(u, r, i);
        return d.type === "quantity" && (r = !0), d;
      })
    }))
  }, o = Wr.parse(a), l = $o(o);
  if (!l.ok)
    throw new bi(l.issues.filter((c) => c.severity === "error"));
  return { doc: o, warnings: i };
}
function Zd(e) {
  const t = typeof e == "object" && e !== null ? e.version : void 0;
  if (t === void 0 || t === yi) {
    const n = $o(e);
    if (!n.ok || !n.value)
      throw new bi(n.issues.filter((i) => i.severity === "error"));
    return { doc: n.value, warnings: [] };
  }
  if (t === vr)
    return qd(e);
  throw new bi([
    {
      path: ["version"],
      code: "unknown-version",
      message: `Unsupported schema version "${String(t)}".`,
      severity: "error"
    }
  ]);
}
function Ks(e, t) {
  const { doc: n, warnings: i } = Zd(e);
  return n;
}
const Hd = {
  "card-select": "cards",
  "image-grid": "grid",
  swatch: "swatches",
  "pill-toggle": "pills",
  dropdown: "dropdown"
};
function Bd(e, t, n) {
  const i = {
    id: e.id,
    label: e.label,
    helpText: e.helpText,
    required: e.required,
    visibleWhen: Kd(e.visibleWhen),
    priceModifiers: e.priceModifiers.map((r) => Po(r, n))
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
        display: Hd[e.type],
        options: e.options.map((r) => Wd(r, n))
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
        min: wn(e.min) ?? 1,
        max: wn(e.max),
        step: wn(e.step) ?? 1,
        defaultValue: wn(typeof e.defaultValue == "number" ? e.defaultValue : void 0) ?? wn(e.min) ?? 1
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
function Wd(e, t) {
  return {
    id: e.id,
    label: e.label,
    description: e.description,
    image: e.image,
    color: e.color,
    default: e.default,
    priceModifiers: e.priceModifiers.map((n) => Po(n, t))
  };
}
function Kd(e) {
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
function wn(e) {
  if (e === void 0)
    return;
  const t = Math.round(e);
  return t >= 1 ? t : void 0;
}
function Po(e, t) {
  return !e.tiers || e.tiers.length === 0 ? { type: e.type, amount: e.amount } : {
    type: e.type,
    amount: e.amount,
    tiers: {
      basis: "quantity",
      mode: "flat",
      rows: Gd(e.tiers, e.amount, t)
    }
  };
}
function Gd(e, t, n) {
  Yd(e) && n.push("Overlapping v1 tiers detected; earlier tiers win in the overlap (v1 behavior preserved).");
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
function Yd(e) {
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
function Qd(e, t) {
  const n = e.toUpperCase();
  return /^[A-Z]{3}$/.test(n) ? n : (t.push(`Currency "${e}" is not an ISO 4217 code; defaulting to USD.`), "USD");
}
const Gs = "1.0", No = be(["mm", "cm", "in", "pt", "px"]), Jd = be(["pending", "ready", "failed"]), Xd = be(["info", "warning", "error"]), ef = se({
  /** 1-based page index. */
  page: H().int().positive(),
  w: H().nonnegative(),
  h: H().nonnegative(),
  unit: No.default("mm")
}), tf = se({
  w: H().nonnegative(),
  h: H().nonnegative(),
  /** Bleed applied around the trim box, in `unit`. */
  bleed: H().nonnegative().default(0),
  unit: No.default("mm")
}), nf = se({
  /** Dominant color model detected in the file. */
  model: be(["RGB", "CMYK", "Gray", "Mixed", "Unknown"]).default("Unknown"),
  /** Named spot colors (e.g. Pantone) found in the file. */
  spot: ge(U()).default([])
}), rf = se({
  /** Machine-readable code, e.g. "low-dpi", "not-embedded-font", "out-of-gamut". */
  code: U(),
  severity: Xd.default("warning"),
  message: U().optional(),
  /** 1-based page index the issue applies to, if page-specific. */
  page: H().int().positive().optional()
}), Kr = se({
  /** Contract version, for forward/backward compatibility. */
  version: ot(Gs).default(Gs),
  /** Stable id assigned by the basic uploader; correlates feeds to a file. */
  fileId: U().min(1),
  /** Who produced this metadata. Free-form, but reserve known sources. */
  source: U().default("custom"),
  status: Jd.default("pending"),
  /** Original file name and MIME type, if known. */
  fileName: U().optional(),
  mimeType: U().optional(),
  fileSizeBytes: H().int().nonnegative().optional(),
  /** Total page count. Absent means "unknown" — pricing must fall back. */
  pages: H().int().nonnegative().optional(),
  colorPages: H().int().nonnegative().optional(),
  monoPages: H().int().nonnegative().optional(),
  pageSizes: ge(ef).optional(),
  canvas: tf.optional(),
  colors: nf.optional(),
  issues: ge(rf).default([]),
  /** Provider-specific extras that don't fit the core contract. */
  raw: Hr(_o()).optional()
}), sf = se({
  pages: Ke().default(!1),
  colorDetection: Ke().default(!1),
  pageSizes: Ke().default(!1),
  canvas: Ke().default(!1),
  preflightIssues: Ke().default(!1)
}), af = se({
  id: U().min(1),
  name: U(),
  /**
   * "push" = provider POSTs metadata to us; "pull" = we fetch from `endpoint`;
   * "element" = provider renders its own embedded uploader (e.g. the
   * Filecheck intake element) in place of the basic dropzone.
   */
  mode: be(["push", "pull", "element"]).default("push"),
  endpoint: U().url().optional(),
  capabilities: sf.default({}),
  /** element mode: publishable key (pk_live_/pk_test_ — browser-safe, store-level). */
  publishableKey: U().optional(),
  /** element mode: optional sub-tenant scope. */
  agentId: U().optional(),
  /** element mode: override the provider SDK script URL (staging/local dev). */
  scriptUrl: U().url().optional(),
  /** element mode: override the provider iframe URL (local dev). */
  iframeSrc: U().url().optional(),
  /** element mode: create preview sessions (unmetered, webhook-suppressed). */
  preview: Ke().optional()
}), Ro = {
  mm: 1e-3,
  cm: 0.01,
  in: 0.0254,
  pt: 0.0254 / 72,
  px: void 0
}, of = {
  sqm: 1,
  sqft: 0.3048 * 0.3048,
  sqin: 0.0254 * 0.0254
};
function Ys(e, t, n, i) {
  const r = Ro[n];
  return r === void 0 || e <= 0 || t <= 0 ? 0 : e * r * (t * r) / of[i];
}
function Mo(e, t) {
  var r;
  const n = e.areaUnit ?? "sqm";
  if (e.dimensionsField !== void 0) {
    const s = t.selections[e.dimensionsField];
    return Qe(s) ? Ys(s.w, s.h, s.unit, n) : 0;
  }
  const i = (r = t.file) == null ? void 0 : r.canvas;
  return i ? Ys(i.w, i.h, i.unit, n) : 0;
}
function lf(e, t) {
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
function Qs(e) {
  return e !== void 0 && e !== "" && !(Array.isArray(e) && e.length === 0);
}
function cf(e, t) {
  const n = lf(e.ref, t);
  if (e.op === "isSet")
    return Qs(n);
  if (e.op === "notSet")
    return !Qs(n);
  if (n === void 0)
    return !1;
  switch (e.op) {
    case "eq":
      return Js(n, e.value);
    case "neq":
      return !Js(n, e.value);
    case "in": {
      const i = Array.isArray(e.value) ? e.value.map(String) : e.value !== void 0 ? [String(e.value)] : [];
      return Array.isArray(n) ? n.some((r) => i.includes(String(r))) : Qe(n) ? !1 : i.includes(String(n));
    }
    case "gt":
    case "gte":
    case "lt":
    case "lte": {
      if (Array.isArray(n) || Qe(n))
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
function Js(e, t) {
  if (Array.isArray(e)) {
    if (Array.isArray(t)) {
      const n = t.map(String);
      return e.some((i) => n.includes(String(i)));
    }
    return t !== void 0 && e.map(String).includes(String(t));
  }
  return Qe(e) ? !1 : Array.isArray(t) ? t.map(String).includes(String(e)) : t !== void 0 && String(e) === String(t);
}
function Fo(e, t) {
  if (!e)
    return !0;
  const n = (s) => Br(s) ? cf(s, t) : Fo(s, t), i = e.all === void 0 || e.all.every(n), r = e.any === void 0 || e.any.length === 0 || e.any.some(n);
  return i && r;
}
function Gr(e, t) {
  return Fo(e.visibleWhen, t);
}
function nt(e, t) {
  const i = 10 ** To(t);
  return Math.round((e + Number.EPSILON) * i) / i;
}
function uf(e) {
  const t = [];
  for (const n of e.sections)
    for (const i of n.fields)
      i.type === "quantity" && t.push(i);
  return t;
}
function jo(e, t, n) {
  const i = uf(e);
  if (i.length <= 1)
    return i[0];
  const r = { selections: t, file: n, quantity: 1 };
  return i.find((s) => Gr(s, r)) ?? i.find((s) => !s.visibleWhen) ?? i[0];
}
function Do(e, t, n) {
  const i = jo(e, t, n);
  return i ? Zn(i, t[i.id]) : 1;
}
function Zn(e, t) {
  const n = typeof t == "number" ? t : typeof t == "string" && t.trim() !== "" ? Number(t) : e.defaultValue;
  return Number.isNaN(n) ? Xs(e, e.defaultValue) : Xs(e, n);
}
function Xs(e, t) {
  const n = e.step;
  let i = Math.round(t);
  return i = e.min + Math.round((i - e.min) / n) * n, i < e.min && (i = e.min), e.max !== void 0 && i > e.max && (i = e.min + Math.floor((e.max - e.min) / n) * n), i;
}
const df = {
  m: 1,
  ft: 0.3048,
  in: 0.0254,
  cm: 0.01
};
function ea(e, t, n) {
  const i = Ro[t];
  return i === void 0 || e <= 0 ? 0 : e * i / df[n];
}
function ta(e, t, n) {
  return n === "w" ? e : n === "max" ? Math.max(e, t) : t;
}
function Lo(e, t) {
  var r;
  const n = e.lengthUnit ?? "m";
  if (e.dimensionsField !== void 0) {
    const s = t.selections[e.dimensionsField];
    return Qe(s) ? ea(ta(s.w, s.h, e.lengthAxis), s.unit, n) : 0;
  }
  const i = (r = t.file) == null ? void 0 : r.canvas;
  return i ? ea(ta(i.w, i.h, e.lengthAxis), i.unit, n) : 0;
}
function yr(e, t) {
  for (const n of e)
    if (n.upTo === void 0 || t <= n.upTo)
      return n;
  return e[e.length - 1];
}
function $n(e, t) {
  let n = 0, i = 0;
  for (const r of t) {
    const a = (r.upTo === void 0 ? e : Math.min(r.upTo, e)) - i;
    if (a > 0 && (n += a * r.amount), r.upTo === void 0 || e <= r.upTo)
      break;
    i = r.upTo;
  }
  return n;
}
function Ni(e, t) {
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
function ff(e, t) {
  const n = Ni(e, t);
  if (n != null && n.sku)
    return n.sku;
  const i = [];
  for (const r of e.sections)
    for (const s of r.fields) {
      if (!Ye(s))
        continue;
      const a = t[s.id], o = Array.isArray(a) ? a : typeof a == "string" ? [a] : [];
      for (const l of s.options)
        o.includes(l.id) && l.sku && i.push(l.sku);
    }
  return i.length > 0 ? i.join("-") : void 0;
}
function pf(e, t, n, i) {
  for (const a of e.sections)
    for (const o of a.fields) {
      if (o.id !== n || !Ye(o))
        continue;
      const l = o.options.find((c) => c.id === i);
      if (!l || l.disabled)
        return !1;
    }
  const r = e.variants;
  if (!r || !r.axes.includes(n))
    return !0;
  const s = Ni(e, { ...t, [n]: i });
  return s ? s.available : !0;
}
function hf(e, t) {
  const n = Ni(e, t);
  if (n && !n.available)
    return !0;
  for (const i of e.sections)
    for (const r of i.fields) {
      if (!Ye(r))
        continue;
      const s = t[r.id], a = Array.isArray(s) ? s : typeof s == "string" ? [s] : [];
      for (const o of r.options)
        if (a.includes(o.id) && o.disabled)
          return !0;
    }
  return !1;
}
function mf(e, t) {
  const n = t.quantity ?? Do(e, t.selections, t.file), i = {
    selections: t.selections,
    file: t.file,
    quantity: n
  }, r = e.pricing.currency, s = [], a = Ni(e, t.selections), o = hf(e, t.selections), l = ff(e, t.selections), c = gf(e.pricing.basePrice, a == null ? void 0 : a.price, n);
  s.push({
    sourceId: "base",
    label: "Base price",
    stage: "base",
    type: "base",
    amount: nt(c, r)
  });
  let u = c;
  const d = vf(e, i);
  for (const { sourceId: _, label: I, modifier: M } of d) {
    const F = bf(M, i);
    F !== void 0 && (u += F, s.push({
      sourceId: _,
      label: I,
      stage: "additive",
      type: M.type,
      amount: nt(F, r)
    }));
  }
  const p = u;
  for (const { sourceId: _, label: I, modifier: M } of d) {
    if (M.type !== "percent")
      continue;
    const F = Dt(M, i), X = u * (F / 100);
    u += X, s.push({
      sourceId: _,
      label: I,
      stage: "percent",
      type: "percent",
      amount: nt(X, r)
    });
  }
  for (const { sourceId: _, label: I, modifier: M } of d) {
    if (M.type !== "multiplier")
      continue;
    const F = Dt(M, i), X = u * F - u;
    u += X, s.push({
      sourceId: _,
      label: I,
      stage: "multiplier",
      type: "multiplier",
      amount: nt(X, r)
    });
  }
  e.pricing.setupFee !== void 0 && e.pricing.setupFee > 0 && (u += e.pricing.setupFee, s.push({
    sourceId: "setup-fee",
    label: "Setup fee",
    stage: "setup",
    type: "setup",
    amount: nt(e.pricing.setupFee, r)
  }));
  for (const { sourceId: _, label: I, modifier: M } of d) {
    if (M.type !== "setup")
      continue;
    const F = Dt(M, i);
    u += F, s.push({
      sourceId: _,
      label: I,
      stage: "setup",
      type: "setup",
      amount: nt(F, r)
    });
  }
  const m = Math.max(e.pricing.minimumPrice ?? 0, 0);
  if (u < m) {
    const _ = m - u;
    u = m, s.push({
      sourceId: "adjustment:minimum",
      label: "Minimum order adjustment",
      stage: "adjustment",
      type: "minimum",
      amount: nt(_, r)
    });
  }
  const A = nt(u, r);
  return {
    currency: r,
    quantity: n,
    unavailable: o,
    sku: l,
    base: nt(c, r),
    subtotal: nt(p, r),
    total: A,
    unitPrice: nt(u / Math.max(n, 1), r),
    lines: s
  };
}
function gf(e, t, n) {
  const i = t ?? e.amount, r = e.tiers;
  return e.per === "order" ? r ? yr(r.rows, n).amount : i : r ? r.mode === "graduated" ? $n(n, r.rows) : yr(r.rows, n).amount * n : i * n;
}
function vf(e, t) {
  const n = [];
  for (const i of e.sections)
    for (const r of i.fields) {
      if (!Gr(r, t))
        continue;
      for (const a of r.priceModifiers)
        n.push({
          sourceId: r.id,
          label: r.label ?? r.id,
          modifier: a
        });
      if (!Ye(r))
        continue;
      const s = yf(r.id, t.selections);
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
function yf(e, t) {
  const n = t[e];
  return n === void 0 ? [] : Array.isArray(n) ? n : typeof n == "object" ? [] : [String(n)];
}
function In(e, t) {
  var n, i;
  switch (((n = e.tiers) == null ? void 0 : n.basis) ?? "quantity") {
    case "quantity":
      return t.quantity;
    case "pages":
      return ((i = t.file) == null ? void 0 : i.pages) ?? 0;
    case "area":
      return Mo(e, t);
    case "length":
      return Lo(e, t);
  }
}
function Dt(e, t) {
  return e.tiers ? yr(e.tiers.rows, In(e, t)).amount : e.amount;
}
function bf(e, t) {
  var i, r, s, a, o, l, c;
  const n = t.quantity;
  switch (e.type) {
    case "percent":
    case "multiplier":
    case "setup":
      return;
    case "fixed":
      return Dt(e, t);
    case "perUnit":
      return ((i = e.tiers) == null ? void 0 : i.mode) === "graduated" ? $n(In(e, t), e.tiers.rows) : Dt(e, t) * n;
    case "perPage":
    case "perColorPage":
    case "perMonoPage": {
      const u = e.type === "perPage" ? ((r = t.file) == null ? void 0 : r.pages) ?? 0 : e.type === "perColorPage" ? ((s = t.file) == null ? void 0 : s.colorPages) ?? 0 : ((a = t.file) == null ? void 0 : a.monoPages) ?? 0;
      return ((o = e.tiers) == null ? void 0 : o.mode) === "graduated" ? $n(In(e, t), e.tiers.rows) * n : Dt(e, t) * u * n;
    }
    case "perArea": {
      const u = Mo(e, t);
      return ((l = e.tiers) == null ? void 0 : l.mode) === "graduated" ? $n(In(e, t), e.tiers.rows) * n : Dt(e, t) * u * n;
    }
    case "perLength": {
      const u = Lo(e, t);
      return ((c = e.tiers) == null ? void 0 : c.mode) === "graduated" ? $n(In(e, t), e.tiers.rows) * n : Dt(e, t) * u * n;
    }
  }
}
const _f = /* @__PURE__ */ new Set([
  "perPage",
  "perColorPage",
  "perMonoPage"
]), xf = /* @__PURE__ */ new Set([
  "file.pages",
  "file.colorPages",
  "file.monoPages"
]);
function zo(e) {
  return e ? [...e.all ?? [], ...e.any ?? []].some((n) => Br(n) ? xf.has(n.ref) : zo(n)) : !1;
}
function wf(e) {
  const t = (n) => {
    var i;
    return _f.has(n.type) || ((i = n.tiers) == null ? void 0 : i.basis) === "pages";
  };
  for (const n of e.sections)
    for (const i of n.fields)
      if (zo(i.visibleWhen) || i.priceModifiers.some(t) || Ye(i) && i.options.some((r) => r.priceModifiers.some(t)))
        return !0;
  return !1;
}
function Vo(e, t, n, i = {}) {
  var s;
  const r = [];
  for (const { fields: a } of e)
    for (const o of a) {
      if (o.type === "info")
        continue;
      const l = t[o.id];
      let c;
      if (Ye(o)) {
        const d = Array.isArray(l) ? l : typeof l == "string" ? [l] : [], p = o.options.filter((m) => d.includes(m.id)).map((m) => m.label);
        c = p.length ? p.join(", ") : void 0;
      } else if (o.type === "file")
        c = (n == null ? void 0 : n.fileName) ?? (n == null ? void 0 : n.fileId);
      else if (Qe(l))
        c = `${l.w} × ${l.h} ${l.unit}`;
      else if (o.type === "quantity" && l !== void 0 && l !== "") {
        const d = Zn(o, l), p = (s = o.unit) == null ? void 0 : s.trim();
        c = p ? `${d} ${p}` : String(d);
      } else l !== void 0 && l !== "" && (c = String(l));
      c !== void 0 && r.push({
        fieldId: o.id,
        /* An unlabeled quantity is common (the stepper explains
           itself on the page) — never show its internal id. */
        label: o.label ?? (o.type === "quantity" ? i.quantityLabel ?? "Quantity" : o.id),
        value: c
      });
      const u = o.type === "file" ? kf(n) : void 0;
      u && i.fileLinkLabel && c !== void 0 && r.push({ fieldId: o.id, label: i.fileLinkLabel, value: u });
    }
  return r;
}
function kf(e) {
  var n;
  const t = (n = e == null ? void 0 : e.raw) == null ? void 0 : n.downloadUrl;
  return typeof t == "string" && t.startsWith("https://") ? t : void 0;
}
async function Sf(e, t, n) {
  const i = n ? await Cf(n) : void 0, r = await fetch(e, {
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
  for (const [d, p] of Object.entries(a))
    c.append(d, p);
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
function Cf(e) {
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
async function Af(e, t) {
  if (!e.endpoint)
    throw new Error(`Provider "${e.id}" has no endpoint for pull mode.`);
  const n = `${e.endpoint.replace(/\/$/, "")}/${encodeURIComponent(t)}`, i = await fetch(n);
  if (!i.ok)
    throw new Error(`Metadata fetch failed: ${i.status}`);
  return Kr.parse(await i.json());
}
async function Tf(e, t, n = {}) {
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
      if (s = await Af(e, t), s.status === "ready" || s.status === "failed")
        return s;
    } catch {
    }
    await $f(i);
  }
  return s;
}
function $f(e) {
  return new Promise((t) => setTimeout(t, e));
}
function If(e) {
  const t = { ...e }, n = /* @__PURE__ */ Ze(null), i = /* @__PURE__ */ Ze(!1), r = /* @__PURE__ */ Ze(null), s = /* @__PURE__ */ Ze(!1), a = /* @__PURE__ */ Vt({}), o = /* @__PURE__ */ Ze(void 0), l = /* @__PURE__ */ Ze(!1), c = Y(
    () => n.value ? Do(n.value, a, o.value) : 1
  ), u = Y(() => ({
    selections: a,
    file: o.value,
    quantity: c.value
  }));
  async function d() {
    i.value = !0, r.value = null, s.value = !1;
    try {
      if (t.inlineConfig)
        n.value = Ks(t.inlineConfig);
      else if (t.configUrl) {
        const y = await fetch(t.configUrl);
        if (y.status === 404 || y.status === 403) {
          s.value = !0;
          return;
        }
        if (!y.ok)
          throw new Error(`Config load failed: ${y.status}`);
        n.value = Ks(await y.json());
      } else
        throw new Error("No config-url or inline config provided.");
      Ef(n.value, a);
    } catch (y) {
      r.value = y instanceof Error ? y.message : String(y);
    } finally {
      i.value = !1;
    }
  }
  async function p(y) {
    Object.assign(t, y);
    for (const K of Object.keys(a))
      delete a[K];
    o.value = void 0, await d();
  }
  const m = Y(() => n.value ? n.value.sections.map((y) => ({
    section: y,
    fields: y.fields.filter(
      (K) => Gr(K, u.value)
    )
  })).filter((y) => y.fields.length > 0) : []), A = Y(
    () => m.value.flatMap((y) => y.fields)
  ), _ = Y(() => n.value ? mf(n.value, {
    selections: a,
    file: o.value
  }) : null);
  function I(y, K) {
    var W;
    const T = (W = n.value) == null ? void 0 : W.sections.flatMap((pe) => pe.fields).find((pe) => pe.id === y);
    a[y] = (T == null ? void 0 : T.type) === "quantity" && typeof K == "number" ? Zn(T, K) : K;
  }
  function M(y, K) {
    if (y.type !== "select-many") {
      I(y.id, K);
      return;
    }
    const T = a[y.id], W = Array.isArray(T) ? [...T] : [], pe = W.indexOf(K);
    if (pe >= 0)
      W.splice(pe, 1);
    else {
      if (y.maxSelect !== void 0 && W.length >= y.maxSelect)
        return;
      W.push(K);
    }
    a[y.id] = W;
  }
  async function F(y, K) {
    if (!t.uploadEndpoint) {
      r.value = "No upload endpoint configured.";
      return;
    }
    l.value = !0;
    try {
      const T = await Sf(t.uploadEndpoint, K, t.turnstileUrl);
      o.value = {
        version: "1.0",
        fileId: T.fileId,
        source: "uploader",
        status: "ready",
        fileName: T.fileName,
        fileSizeBytes: T.fileSizeBytes,
        issues: [],
        ...T.downloadUrl ? { raw: { downloadUrl: T.downloadUrl } } : {}
      }, a[y.id] = T.fileId;
      const W = t.provider;
      if (W && W.mode === "pull") {
        const pe = await Tf(W, T.fileId);
        o.value = pe;
      }
    } catch (T) {
      r.value = T instanceof Error ? T.message : String(T);
    } finally {
      l.value = !1;
    }
  }
  function X(y) {
    (!o.value || o.value.fileId === y.fileId) && (o.value = y);
  }
  function Z(y) {
    o.value = y;
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
    visibleFields: A,
    price: _,
    /** The connected data-feed provider config, if any. */
    get provider() {
      return t.provider;
    },
    load: d,
    reload: p,
    select: I,
    toggle: M,
    handleFile: F,
    feedMetadata: X,
    setFile: Z
  };
}
function Ef(e, t) {
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
function Of() {
  const e = /* @__PURE__ */ Vt(/* @__PURE__ */ new Map()), t = Y(
    () => Array.from(e, ([s, a]) => ({ key: s, message: a.message }))
  ), n = Y(() => e.size > 0);
  function i(s, a) {
    const o = e.get(s);
    o && o.message === a || e.set(s, { message: a });
  }
  function r(s) {
    e.delete(s);
  }
  return { list: t, held: n, add: i, release: r };
}
const br = 1, kn = "[print-configurator]";
function Pf(e) {
  const { host: t, cfg: n, validation: i, holds: r, producers: s } = e;
  function a($) {
    return $ === void 0 ? $ : JSON.parse(JSON.stringify($));
  }
  const o = Y(() => !n.schema.value || !n.price.value ? null : {
    apiVersion: br,
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
  function u($, D) {
    if (!$)
      return ["selections", "quantity", "price", "file", "holds", "valid"];
    const re = [], ke = /* @__PURE__ */ new Set([
      ...Object.keys($.selections),
      ...Object.keys(D.selections)
    ]);
    for (const He of ke)
      Kt($.selections[He], D.selections[He]) || re.push(`selections.${He}`);
    return $.quantity !== D.quantity && re.push("quantity"), Kt($.price, D.price) || re.push("price"), Kt($.file, D.file) || re.push("file"), Kt($.holds, D.holds) || re.push("holds"), $.valid !== D.valid && re.push("valid"), re;
  }
  let d = null;
  function p($) {
    d = ($ == null ? void 0 : $.source) ?? "api";
  }
  function m() {
    Ii(() => {
      d = null;
    });
  }
  yt(o, ($) => {
    if (!c || !$)
      return;
    const D = u(l, $), re = d ?? "user";
    l = $, D.length !== 0 && A("change", { ...$, source: re, changed: D });
  });
  function A($, D) {
    t == null || t.dispatchEvent(
      new CustomEvent($, { detail: D, bubbles: !0, composed: !0 })
    );
  }
  function _() {
    l = o.value, c = !0, l && A("ready", {
      ...l,
      source: "user"
    });
  }
  function I($) {
    return $.sections.flatMap((D) => D.fields);
  }
  function M($) {
    const D = n.schema.value;
    if (!D)
      return null;
    const re = I(D);
    return re.find((ke) => ke.id === $) ?? re.find((ke) => ke.role === $) ?? /* Several quantity fields may exist (one per paper group, say);
    "the quantity field" is the one currently in play. */
    ($ === "quantity" ? jo(D, n.selections, n.file.value) : void 0) ?? re.find(
      (ke) => ($ === "quantity" || $ === "dimensions" || $ === "file") && ke.type === $
    ) ?? null;
  }
  function F($, D) {
    switch ($.type) {
      case "select-one":
        return typeof D == "string" && $.options.some((re) => re.id === D);
      case "select-many":
        return Array.isArray(D) && D.every(
          (re) => typeof re == "string" && $.options.some((ke) => ke.id === re)
        );
      case "quantity":
      case "number":
        return typeof D == "number" && Number.isFinite(D);
      case "text":
        return typeof D == "string";
      case "dimensions":
        return typeof D == "object" && D !== null && !Array.isArray(D) && Number.isFinite(D.w) && Number.isFinite(D.h);
      default:
        return !1;
    }
  }
  function X($, D) {
    const re = n.schema.value, ke = re ? I(re).find((He) => He.id === $) : null;
    return ke ? F(ke, D) ? Kt(n.selections[$], D) ? !1 : (n.select($, D), i.touch($), !0) : (console.warn(
      `${kn} setSelection: invalid value for "${$}" (${ke.type})`,
      D
    ), !1) : (console.warn(`${kn} setSelection: unknown field "${$}"`), !1);
  }
  function Z($, D, re) {
    p(re), X($, D), m();
  }
  function y($, D) {
    if (typeof $ != "object" || $ === null) {
      console.warn(`${kn} setSelections: expected an object map`);
      return;
    }
    p(D);
    for (const [re, ke] of Object.entries($))
      X(re, ke);
    m();
  }
  function K() {
    const $ = n.schema.value;
    return $ ? I($).find((D) => D.type === "file") ?? null : null;
  }
  function T($) {
    const D = K();
    !D || n.selections[D.id] === $ || (n.select(D.id, $), i.touch(D.id));
  }
  function W($, D) {
    if ($ === null) {
      const _e = K(), he = _e ? !Nf(n.selections[_e.id]) : !1;
      if (n.file.value === void 0 && !he)
        return;
      p(D), n.setFile(void 0), T(""), m();
      return;
    }
    const re = Kr.safeParse({
      version: "1.0",
      source: "custom",
      status: "ready",
      issues: [],
      ...$
    });
    if (!re.success) {
      console.warn(`${kn} setFile: invalid file record`, re.error.issues);
      return;
    }
    const ke = K(), He = Kt(n.file.value, re.data), Ee = !ke || n.selections[ke.id] === re.data.fileId;
    He && Ee || (p(D), He || n.setFile(re.data), T(re.data.fileId), m());
  }
  function pe($, D) {
    if (typeof $ != "string" || $ === "") {
      console.warn(`${kn} addHold: a non-empty string key is required`);
      return;
    }
    p(D), r.add($, D == null ? void 0 : D.message), m();
  }
  function Ce($, D) {
    p(D), r.release($), m();
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
        const D = M($);
        return D ? a(D) : null;
      },
      setSelection: Z,
      setSelections: y,
      setFile: W,
      addHold: pe,
      releaseHold: Ce,
      /* Producer registry (docs/printapp-integration-v1.md). Not part
         of `state`: a producer is an offer available on the page, not
         an answer the customer has given, and nothing about the
         configuration changes when one appears. */
      registerProducer($, D) {
        s.register($, D);
      },
      unregisterProducer($) {
        s.unregister($);
      },
      /** Push-mode provider feed (pre-Page-API method, kept). */
      feedMetadata($) {
        n.feedMetadata($);
      },
      apiVersion: br
    }
  };
}
function Nf(e) {
  return e === void 0 || e === "";
}
function Kt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != "object" || typeof t != "object" || e === null || t === null || Array.isArray(e) !== Array.isArray(t))
    return !1;
  const n = Object.keys(e), i = Object.keys(t);
  return n.length !== i.length ? !1 : n.every(
    (r) => Kt(
      e[r],
      t[r]
    )
  );
}
const na = "[print-configurator]", _r = 10;
function Rf(e) {
  const t = /* @__PURE__ */ Vt(/* @__PURE__ */ new Map()), n = Y(
    () => Array.from(t.values()).sort((o, l) => o.order - l.order)
  );
  function i(o, l) {
    if (typeof o != "string" || o === "") {
      console.warn(`${na} registerProducer: a non-empty string id is required`);
      return;
    }
    const c = l == null ? void 0 : l.label;
    if (typeof c != "string" || c === "") {
      console.warn(`${na} registerProducer: "${o}" needs a label`);
      return;
    }
    t.set(o, {
      id: o,
      label: c,
      description: l.description,
      /* Default behind the built-in upload: the merchant's own file is
         the expected answer, an alternative producer is the offer. */
      order: Number.isFinite(l.order) ? Number(l.order) : _r + 10,
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
          apiVersion: br,
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
const xr = "__artwork", Uo = "__artwork-section";
function Mf(e) {
  return { id: Uo, title: e, fields: [{
    id: xr,
    type: "file",
    display: "producer",
    accept: [],
    required: !1,
    priceModifiers: []
  }] };
}
function Ff(e, t) {
  yt(
    [() => e.schema.value, () => t.list.value],
    ([n, i]) => {
      if (!n)
        return;
      const r = n.sections.some(
        (o) => o.fields.some(
          (l) => l.type === "file" && l.id !== xr
        )
      ), s = n.sections.findIndex(
        (o) => o.id === Uo
      ), a = i.length > 0 && !r;
      a && s === -1 ? n.sections.push(Mf(i[0].label)) : !a && s !== -1 && (n.sections.splice(s, 1), e.select(xr, ""));
    },
    { immediate: !0, deep: !0 }
  );
}
const qo = {
  "state.loading": "Loading options…",
  "summary.title": "Summary",
  "summary.basePrice": "Base price",
  "summary.setupFee": "Setup fee",
  "summary.minimumAdjustment": "Minimum order adjustment",
  "summary.total": "Total",
  "summary.unitPrice": "{quantity} × {unitPrice}",
  "summary.unavailable": "This combination is currently unavailable.",
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
  "validation.range": "Enter a value between {min} and {max}."
}, jf = {
  base: "summary.basePrice",
  "setup-fee": "summary.setupFee",
  "adjustment:minimum": "summary.minimumAdjustment"
};
function Df(e, t) {
  const n = jf[t.sourceId];
  return n ? e(n) : t.label;
}
function Lf(e, t) {
  return t ? e.replace(
    /\{(\w+)\}/g,
    (n, i) => i in t ? String(t[i]) : n
  ) : e;
}
function Zo(e) {
  const t = () => typeof e == "function" ? e() : e;
  return {
    t(n, i) {
      var a;
      const r = (a = t()) == null ? void 0 : a[n], s = typeof r == "string" && r !== "" ? r : qo[n];
      return Lf(s, i);
    }
  };
}
function zf(e) {
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
    i in qo && typeof r == "string" && (n[i] = r);
  return n;
}
const Yr = Zo(), Ho = Symbol("print-configurator-strings");
function xt() {
  return Lt(Ho, Yr);
}
function Vf(e, t, n, i = Yr.t) {
  const r = /* @__PURE__ */ Vt(/* @__PURE__ */ new Set()), s = { value: !1 }, a = Y(() => {
    const p = [];
    for (const m of e.value) {
      const A = Uf(m, t, i);
      A && p.push({ fieldId: m.id, message: A });
    }
    return p;
  }), o = Y(
    () => {
      var p;
      return a.value.length === 0 && !(((p = n.value) == null ? void 0 : p.unavailable) ?? !1);
    }
  );
  function l(p) {
    var m;
    if (!(!r.has(p) && !s.value))
      return (m = a.value.find((A) => A.fieldId === p)) == null ? void 0 : m.message;
  }
  function c(p) {
    r.add(p);
  }
  function u() {
    s.value = !0;
    for (const p of e.value)
      r.add(p.id);
    return a.value;
  }
  function d() {
    r.clear(), s.value = !1;
  }
  return { issues: a, valid: o, errorFor: l, touch: c, touchAll: u, reset: d };
}
function Uf(e, t, n = Yr.t) {
  const i = t[e.id], r = i === void 0 || i === "" || Array.isArray(i) && i.length === 0;
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
  if (e.type === "dimensions" && Qe(i)) {
    const s = ia(i.unit) / ia(e.defaultUnit), a = i.w * s, o = i.h * s;
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
function ia(e) {
  switch (e) {
    case "mm":
      return 1;
    case "cm":
      return 10;
    case "in":
      return 25.4;
  }
}
const qf = /* @__PURE__ */ new Set([
  "left",
  "right",
  "left_space",
  "right_space"
]);
function Zf(e) {
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
  return typeof n.position == "string" && qf.has(n.position) && (i.position = n.position), typeof n.decimals == "number" && Number.isInteger(n.decimals) && n.decimals >= 0 && n.decimals <= 8 && (i.decimals = n.decimals), typeof n.thousandSeparator == "string" && (i.thousandSeparator = n.thousandSeparator), typeof n.decimalSeparator == "string" && (i.decimalSeparator = n.decimalSeparator), i;
}
function Bo(e) {
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
function Hf(e, t, n, i) {
  if (i)
    return Bf(e, i);
  try {
    return new Intl.NumberFormat(Bo(n) ?? "en", {
      style: "currency",
      currency: t
    }).format(e);
  } catch {
    return `${t} ${e.toFixed(2)}`;
  }
}
function Bf(e, t) {
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
function Wf(e, t, n) {
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
function rn(e, t) {
  const n = 10 ** t;
  return Math.round((e + Math.sign(e) * Number.EPSILON * Math.abs(e)) * n) / n;
}
function Kf(e, t, n) {
  const i = To(t), r = n.rate / 100;
  if (n.mode === "exclusive") {
    const o = rn(e, i), l = rn(o * r, i);
    return { net: o, tax: l, gross: rn(o + l, i) };
  }
  const s = rn(e, i), a = rn(s - s / (1 + r), i);
  return { net: rn(s - a, i), tax: a, gross: s };
}
function Gf(e, t) {
  try {
    return new Intl.NumberFormat(Bo(t) ?? "en", {
      maximumFractionDigits: 3
    }).format(e);
  } catch {
    return String(e);
  }
}
function Ri(e, t) {
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
const Yf = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Qf = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], Jf = {
  key: 0,
  class: "check",
  "aria-hidden": "true"
}, Xf = ["src"], ep = { class: "card-label" }, tp = {
  key: 2,
  class: "card-description"
}, ra = /* @__PURE__ */ Te({
  __name: "ChoiceCards",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Ri(
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
      class: et(["grid", e.field.display]),
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (v(!0), k(le, null, Me(e.field.options, (d, p) => (v(), k("button", {
        key: d.id,
        type: "button",
        class: et(["card", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice card choice-selected" : "choice card",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-label": d.label,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : O(s).tabindexFor(d, p),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, p)
      }, [
        a(d.id) ? (v(), k("span", Jf, "✓")) : oe("", !0),
        d.image ? (v(), k("img", {
          key: 1,
          src: d.image,
          alt: ""
        }, null, 8, Xf)) : oe("", !0),
        j("span", ep, z(d.label), 1),
        d.description ? (v(), k("span", tp, z(d.description), 1)) : oe("", !0)
      ], 42, Qf))), 128))
    ], 10, Yf));
  }
}), np = ["id", "value", "aria-labelledby", "aria-describedby", "aria-invalid"], ip = {
  key: 0,
  value: "",
  disabled: ""
}, rp = ["value", "disabled"], sp = /* @__PURE__ */ Te({
  __name: "ChoiceDropdown",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = xt();
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
      e.selectedIds.length ? oe("", !0) : (v(), k("option", ip, z(e.field.label ? O(r)("choice.placeholder", { label: e.field.label.toLowerCase() }) : O(r)("choice.placeholderBare")), 1)),
      (v(!0), k(le, null, Me(e.field.options, (l) => (v(), k("option", {
        key: l.id,
        value: l.id,
        disabled: n.unavailableIds.includes(l.id)
      }, z(l.label), 9, rp))), 128))
    ], 40, np));
  }
}), ap = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], op = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], lp = { key: 0 }, cp = { class: "choice-body" }, up = { class: "choice-title" }, dp = {
  key: 0,
  class: "choice-description"
}, fp = /* @__PURE__ */ Te({
  __name: "ChoiceList",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Ri(
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
      (v(!0), k(le, null, Me(e.field.options, (d, p) => (v(), k("button", {
        key: d.id,
        type: "button",
        class: et(["choice-row", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice choice-selected" : "choice",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : O(s).tabindexFor(d, p),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, p)
      }, [
        j("span", {
          class: et(["choice-indicator", { multi: r }]),
          "aria-hidden": "true"
        }, [
          a(d.id) ? (v(), k("span", lp, "✓")) : oe("", !0)
        ], 2),
        j("span", cp, [
          j("span", up, z(d.label), 1),
          d.description ? (v(), k("span", dp, z(d.description), 1)) : oe("", !0)
        ])
      ], 42, op))), 128))
    ], 8, ap));
  }
}), pp = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], hp = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], mp = {
  key: 0,
  "aria-hidden": "true"
}, gp = /* @__PURE__ */ Te({
  __name: "ChoicePills",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Ri(
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
      (v(!0), k(le, null, Me(e.field.options, (d, p) => (v(), k("button", {
        key: d.id,
        type: "button",
        class: et(["pill", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice pill choice-selected" : "choice pill",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : O(s).tabindexFor(d, p),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, p)
      }, [
        Lr(z(d.label) + " ", 1),
        a(d.id) ? (v(), k("span", mp, "✓")) : oe("", !0)
      ], 42, hp))), 128))
    ], 8, pp));
  }
}), vp = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], yp = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], bp = {
  key: 0,
  class: "swatch-check",
  "aria-hidden": "true"
}, _p = {
  key: 0,
  class: "swatch-selected-label",
  "aria-hidden": "true"
}, xp = /* @__PURE__ */ Te({
  __name: "ChoiceSwatches",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Ri(
      () => n.field.options,
      () => n.selectedIds
    );
    function a(u) {
      return n.selectedIds.includes(u);
    }
    function o(u) {
      return n.unavailableIds.includes(u);
    }
    const l = Y(
      () => n.field.options.filter((u) => n.selectedIds.includes(u.id)).map((u) => u.label).join(", ")
    );
    function c(u, d) {
      if (r)
        return;
      const p = s.onKeydown(u, d);
      p && !o(p) && i("pick", p);
    }
    return (u, d) => (v(), k("div", null, [
      j("div", {
        class: "swatches",
        role: r ? "group" : "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0
      }, [
        (v(!0), k(le, null, Me(e.field.options, (p, m) => (v(), k("button", {
          key: p.id,
          type: "button",
          class: et(["swatch", { active: a(p.id), unavailable: o(p.id) }]),
          part: a(p.id) ? "choice swatch choice-selected" : "choice swatch",
          style: Ai({ background: p.color }),
          role: r ? void 0 : "radio",
          "aria-checked": r ? void 0 : a(p.id),
          "aria-pressed": r ? a(p.id) : void 0,
          "aria-label": p.label,
          "aria-disabled": o(p.id) || void 0,
          tabindex: r ? 0 : O(s).tabindexFor(p, m),
          onClick: (A) => !o(p.id) && i("pick", p.id),
          onKeydown: (A) => c(A, m)
        }, [
          a(p.id) ? (v(), k("span", bp, "✓")) : oe("", !0)
        ], 46, yp))), 128))
      ], 8, vp),
      l.value ? (v(), k("p", _p, z(l.value), 1)) : oe("", !0)
    ]));
  }
}), sa = {
  cards: ra,
  grid: ra,
  swatches: xp,
  pills: gp,
  dropdown: sp,
  list: fp
}, Mi = Symbol("print-configurator"), wp = ["data-field-id", "data-type"], kp = ["id"], Sp = {
  key: 0,
  class: "req",
  "aria-hidden": "true"
}, Cp = {
  key: 1,
  class: "help",
  part: "field-help"
}, Ap = ["id"], Tp = /* @__PURE__ */ Te({
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
        Lr(z(e.field.label) + " ", 1),
        e.field.required ? (v(), k("span", Sp, "*")) : oe("", !0)
      ], 8, kp)) : oe("", !0),
      e.field.helpText ? (v(), k("p", Cp, z(e.field.helpText), 1)) : oe("", !0),
      sc(i.$slots, "default"),
      e.error ? (v(), k("p", {
        key: 2,
        id: `pc-error-${e.field.id}`,
        class: "field-error",
        part: "field-error",
        role: "status"
      }, z(e.error), 9, Ap)) : oe("", !0)
    ], 8, wp));
  }
}), $p = ["aria-labelledby"], Ip = ["part", "aria-checked", "onClick"], Ep = ["value", "aria-label"], Op = ["value"], Pp = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Np = {
  key: 3,
  class: "stepper",
  part: "stepper"
}, Rp = ["aria-label", "disabled"], Mp = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Fp = ["aria-label", "disabled"], jp = /* @__PURE__ */ Te({
  __name: "QuantityInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = Y(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue
    ), { t: s } = xt(), a = Y(() => n.field.label ?? s("quantity.label"));
    function o(p) {
      i("select", Zn(n.field, p)), i("touch");
    }
    function l(p) {
      o(r.value + p * n.field.step);
    }
    function c(p) {
      const m = p.target.value;
      if (m === "")
        return;
      const A = Number(m);
      Zn(n.field, A) === A && o(A);
    }
    function u(p) {
      const m = p.target;
      o(m.value === "" ? n.field.defaultValue : Number(m.value)), m.value = String(r.value);
    }
    function d(p) {
      u(p);
    }
    return (p, m) => {
      var A, _;
      return e.field.display === "pills" && ((A = e.field.presets) != null && A.length) ? (v(), k("div", {
        key: 0,
        class: "pills",
        role: "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0
      }, [
        (v(!0), k(le, null, Me(e.field.presets, (I) => (v(), k("button", {
          key: I,
          type: "button",
          class: et(["pill", { active: r.value === I }]),
          part: r.value === I ? "choice pill choice-selected" : "choice pill",
          role: "radio",
          "aria-checked": r.value === I,
          onClick: (M) => o(I)
        }, z(I), 11, Ip))), 128))
      ], 8, $p)) : e.field.display === "dropdown" && ((_ = e.field.presets) != null && _.length) ? (v(), k("select", {
        key: 1,
        class: "dropdown",
        part: "dropdown",
        value: String(r.value),
        "aria-label": a.value,
        onChange: m[0] || (m[0] = (I) => o(Number(I.target.value)))
      }, [
        (v(!0), k(le, null, Me(e.field.presets, (I) => (v(), k("option", {
          key: I,
          value: String(I)
        }, z(I), 9, Op))), 128))
      ], 40, Ep)) : e.field.display === "input" ? (v(), k("input", {
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
        onKeydown: Ms(ai(d, ["prevent"]), ["enter"])
      }, null, 40, Pp)) : (v(), k("div", Np, [
        j("button", {
          type: "button",
          part: "stepper-decrement",
          "aria-label": O(s)("stepper.decrease", { label: a.value.toLowerCase() }),
          disabled: r.value <= e.field.min,
          onClick: m[1] || (m[1] = (I) => l(-1))
        }, " − ", 8, Rp),
        j("input", {
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
          onKeydown: Ms(ai(d, ["prevent"]), ["enter"])
        }, null, 40, Mp),
        j("button", {
          type: "button",
          part: "stepper-increment",
          "aria-label": O(s)("stepper.increase", { label: a.value.toLowerCase() }),
          disabled: e.field.max !== void 0 && r.value >= e.field.max,
          onClick: m[2] || (m[2] = (I) => l(1))
        }, " + ", 8, Fp)
      ]));
    };
  }
}), Dp = {
  key: 0,
  class: "slider-row"
}, Lp = ["value", "min", "max", "step", "aria-label"], zp = {
  class: "slider-value",
  "aria-hidden": "true"
}, Vp = {
  key: 1,
  class: "stepper",
  part: "stepper"
}, Up = ["aria-label", "disabled"], qp = ["value", "min", "max", "step", "aria-label"], Zp = ["aria-label", "disabled"], Hp = ["value", "min", "max", "step", "aria-label", "aria-describedby", "aria-invalid"], Bp = /* @__PURE__ */ Te({
  __name: "NumberInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = Y(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue ?? 0
    ), { t: s } = xt(), a = Y(() => n.field.label ?? n.field.id);
    function o(l) {
      Number.isNaN(l) || (i("select", l), i("touch"));
    }
    return (l, c) => e.field.display === "slider" ? (v(), k("div", Dp, [
      j("input", {
        type: "range",
        class: "slider",
        part: "stepper-input",
        value: r.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": a.value,
        onInput: c[0] || (c[0] = (u) => o(Number(u.target.value)))
      }, null, 40, Lp),
      j("span", zp, z(r.value), 1)
    ])) : e.field.display === "stepper" ? (v(), k("div", Vp, [
      j("button", {
        type: "button",
        part: "stepper-decrement",
        "aria-label": O(s)("stepper.decrease", { label: a.value.toLowerCase() }),
        disabled: e.field.min !== void 0 && r.value <= e.field.min,
        onClick: c[1] || (c[1] = (u) => o(r.value - (e.field.step ?? 1)))
      }, " − ", 8, Up),
      j("input", {
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
      }, null, 40, qp),
      j("button", {
        type: "button",
        part: "stepper-increment",
        "aria-label": O(s)("stepper.increase", { label: a.value.toLowerCase() }),
        disabled: e.field.max !== void 0 && r.value >= e.field.max,
        onClick: c[4] || (c[4] = (u) => o(r.value + (e.field.step ?? 1)))
      }, " + ", 8, Zp)
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
    }, null, 40, Hp));
  }
}), Wp = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], Kp = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], Gp = /* @__PURE__ */ Te({
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
      value: typeof e.value == "string" ? e.value : O(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      rows: "3",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[0] || (o[0] = (l) => i("touch"))
    }, null, 40, Wp)) : (v(), k("input", {
      key: 1,
      class: "text-input",
      part: "text-input",
      type: "text",
      value: typeof e.value == "string" ? e.value : O(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[1] || (o[1] = (l) => i("touch"))
    }, null, 40, Kp));
  }
}), Yp = {
  class: "dimensions",
  part: "dimensions"
}, Qp = { class: "dim-input" }, Jp = { class: "dim-label" }, Xp = ["value", "aria-describedby", "aria-invalid"], eh = { class: "dim-input" }, th = { class: "dim-label" }, nh = ["value", "aria-describedby", "aria-invalid"], ih = ["value", "aria-label"], rh = ["value"], sh = {
  key: 1,
  class: "dim-unit-static"
}, ah = /* @__PURE__ */ Te({
  __name: "DimensionsInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = xt(), s = /* @__PURE__ */ Vt({
      w: Qe(n.value) ? n.value.w : NaN,
      h: Qe(n.value) ? n.value.h : NaN,
      unit: Qe(n.value) ? n.value.unit : n.field.defaultUnit
    });
    yt(
      () => n.value,
      (c) => {
        Qe(c) ? (s.w = c.w, s.h = c.h, s.unit = c.unit) : (c === void 0 || c === "") && (s.w = NaN, s.h = NaN);
      }
    );
    const a = s;
    function o(c) {
      Object.assign(s, c), i("touch"), s.w > 0 && s.h > 0 && i("select", { w: s.w, h: s.h, unit: s.unit });
    }
    function l(c) {
      return Number(c.target.value);
    }
    return (c, u) => (v(), k("div", Yp, [
      j("label", Qp, [
        j("span", Jp, z(O(r)("dimensions.width")), 1),
        j("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(O(a).w) ? "" : O(a).w,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[0] || (u[0] = (d) => o({ w: l(d) }))
        }, null, 40, Xp)
      ]),
      u[3] || (u[3] = j("span", {
        class: "dim-times",
        "aria-hidden": "true"
      }, "×", -1)),
      j("label", eh, [
        j("span", th, z(O(r)("dimensions.height")), 1),
        j("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(O(a).h) ? "" : O(a).h,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[1] || (u[1] = (d) => o({ h: l(d) }))
        }, null, 40, nh)
      ]),
      e.field.units.length > 1 ? (v(), k("select", {
        key: 0,
        class: "dropdown dim-unit",
        part: "dropdown",
        value: O(a).unit,
        "aria-label": O(r)("dimensions.unit"),
        onChange: u[2] || (u[2] = (d) => o({ unit: d.target.value }))
      }, [
        (v(!0), k(le, null, Me(e.field.units, (d) => (v(), k("option", {
          key: d,
          value: d
        }, z(d), 9, rh))), 128))
      ], 40, ih)) : (v(), k("span", sh, z(e.field.defaultUnit), 1))
    ]));
  }
});
function oh(e) {
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
  return Kr.parse(s);
}
const lh = ["aria-busy"], ch = ["id", "accept", "aria-labelledby", "aria-describedby", "aria-invalid"], uh = ["for"], dh = {
  key: 0,
  class: "upload-status"
}, fh = { class: "upload-filename" }, ph = { class: "upload-hint" }, hh = { class: "upload-title" }, mh = { class: "upload-hint" }, gh = /* @__PURE__ */ Te({
  __name: "FileUpload",
  props: {
    field: { type: null },
    file: { type: null },
    analyzing: { type: Boolean },
    error: { type: String }
  },
  emits: ["file", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = xt(), s = /* @__PURE__ */ Ze(!1), a = Y(() => n.field.accept.join(","));
    function o(c) {
      var p;
      const d = (p = c.target.files) == null ? void 0 : p[0];
      d && i("file", n.field, d), i("touch");
    }
    function l(c) {
      var d, p;
      s.value = !1;
      const u = (p = (d = c.dataTransfer) == null ? void 0 : d.files) == null ? void 0 : p[0];
      u && i("file", n.field, u), i("touch");
    }
    return (c, u) => (v(), k("div", {
      class: et(["upload", { dragging: s.value, done: !!e.file }]),
      part: "upload",
      "aria-busy": e.analyzing || void 0,
      onDragover: u[0] || (u[0] = ai((d) => s.value = !0, ["prevent"])),
      onDragleave: u[1] || (u[1] = (d) => s.value = !1),
      onDrop: ai(l, ["prevent"])
    }, [
      j("input", {
        id: `pc-control-${e.field.id}`,
        class: "upload-input",
        part: "upload-input",
        type: "file",
        accept: a.value,
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0,
        onChange: o
      }, null, 40, ch),
      j("label", {
        class: "upload-zone",
        for: `pc-control-${e.field.id}`
      }, [
        e.analyzing ? (v(), k("span", dh, z(O(r)("upload.analyzing")), 1)) : e.file ? (v(), k(le, { key: 1 }, [
          j("span", fh, z(e.file.fileName ?? e.file.fileId), 1),
          j("span", ph, z(O(r)("upload.replace")), 1)
        ], 64)) : (v(), k(le, { key: 2 }, [
          j("span", hh, z(O(r)("upload.drop")), 1),
          j("span", mh, z(a.value), 1)
        ], 64))
      ], 8, uh)
    ], 42, lh));
  }
}), vh = "https://cdn.filecheck.io/element/v1/filecheck.js", yh = 1e4;
let Sn = null;
function bh(e = vh) {
  return typeof window < "u" && window.Filecheck ? Promise.resolve(window.Filecheck) : Sn || (Sn = new Promise((t, n) => {
    const i = (a) => {
      Sn = null, r.remove(), n(new Error(a));
    }, r = document.createElement("script");
    r.src = e, r.async = !0;
    const s = setTimeout(
      () => i("Filecheck SDK load timed out."),
      yh
    );
    r.addEventListener("load", () => {
      clearTimeout(s), window.Filecheck ? t(window.Filecheck) : i("Filecheck SDK loaded but window.Filecheck is missing.");
    }), r.addEventListener("error", () => {
      clearTimeout(s), i("Filecheck SDK failed to load.");
    }), document.head.appendChild(r);
  }), Sn);
}
const _h = { mm: 1, cm: 10, in: 25.4 }, xh = [
  "artworkSize",
  "pageCount",
  "fileCount",
  "bleed",
  "safety"
];
function wh(e, t) {
  var r, s;
  const n = [];
  for (const a of e) {
    const o = t[a.id];
    if (!(o === void 0 || o === "")) {
      if (a.type === "dimensions" && Qe(o)) {
        const l = _h[o.unit] ?? 1;
        n.push({
          artworkSize: {
            width_mm: aa(o.w * l),
            height_mm: aa(o.h * l)
          }
        });
        continue;
      }
      if (a.role === "pages") {
        const l = typeof o == "number" ? o : Number(o);
        Number.isFinite(l) && l > 0 && n.push({ pageCount: { min: l, max: l } });
      }
      if (Ye(a)) {
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
    for (const o of xh) {
      const l = a[o];
      l && (i[o] = { ...i[o] ?? {}, ...l });
    }
  return i;
}
function aa(e) {
  return Math.round(e * 10) / 10;
}
const kh = {
  class: "fc-upload",
  part: "upload"
}, Sh = {
  key: 0,
  class: "fc-panel fc-unconfigured"
}, Ch = {
  key: 1,
  class: "fc-panel fc-error",
  role: "alert"
}, Ah = { class: "fc-panel-title" }, Th = { class: "fc-panel-hint" }, $h = {
  key: 0,
  class: "fc-loading"
}, Ih = {
  key: 1,
  class: "field-error",
  role: "status"
}, Eh = /* @__PURE__ */ Te({
  __name: "FilecheckUpload",
  props: {
    field: { type: null },
    provider: { type: null }
  },
  emits: ["metadata", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = xt(), s = /* @__PURE__ */ Ze(null), a = /* @__PURE__ */ Ze(
      n.provider.publishableKey ? "loading" : "unconfigured"
    ), o = /* @__PURE__ */ Ze("");
    let l = null, c = null;
    const u = Lt(Mi, null), d = Y(() => {
      var I;
      if (!u)
        return null;
      const _ = ((I = u.cfg.visibleFields) == null ? void 0 : I.value) ?? [];
      return wh(_, u.cfg.selections);
    });
    yt(d, (_) => {
      var I;
      (I = l == null ? void 0 : l.setContext) == null || I.call(l, _ ?? null);
    });
    async function p() {
      var F, X, Z;
      const _ = n.provider.publishableKey, I = (F = n.field.filecheck) == null ? void 0 : F.workflowId, M = (X = n.field.filecheck) != null && X.workflow ? /* @__PURE__ */ de(n.field.filecheck.workflow) : void 0;
      if (!_ || !I && !M) {
        a.value = "unconfigured";
        return;
      }
      a.value = "loading", o.value = "";
      try {
        const y = await bh(n.provider.scriptUrl);
        if (!s.value)
          return;
        l = y(_, {
          agentId: n.provider.agentId,
          iframeSrc: n.provider.iframeSrc
        }).elements.create("intake", {
          // An inline workflow wins: it is the blueprint author's exact
          // intent, and demo blueprints rely on it to run against any
          // tenant with nothing saved in the Filecheck admin.
          ...M ? { workflow: M } : { workflowId: I },
          preview: n.provider.preview ?? !1
        }), c = l.on("status", (W) => {
          i("metadata", W), i("touch");
        }), l.on("error", (W) => {
          const pe = W;
          o.value = (pe == null ? void 0 : pe.message) ?? "Filecheck reported an error.";
        });
        const T = d.value;
        T && ((Z = l.setContext) == null || Z.call(l, T)), l.mount(s.value), a.value = "active";
      } catch (y) {
        a.value = "error", o.value = y instanceof Error ? y.message : "Filecheck failed to load.";
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
    function A() {
      m(), p();
    }
    return Mr(() => {
      p();
    }), yt(
      () => {
        var _, I;
        return [
          n.provider.publishableKey,
          n.provider.scriptUrl,
          n.provider.iframeSrc,
          n.provider.agentId,
          (_ = n.field.filecheck) == null ? void 0 : _.workflowId,
          (I = n.field.filecheck) == null ? void 0 : I.workflow
        ];
      },
      () => {
        m(), p();
      }
    ), Va(m), (_, I) => (v(), k("div", kh, [
      a.value === "unconfigured" ? (v(), k("div", Sh, [...I[0] || (I[0] = [
        j("span", { class: "fc-panel-title" }, "Filecheck upload", -1),
        j("span", { class: "fc-panel-hint" }, " Add your Filecheck publishable key in the store settings (or preview settings) to activate validated uploads for this field. ", -1)
      ])])) : a.value === "error" ? (v(), k("div", Ch, [
        j("span", Ah, z(O(r)("upload.unavailable")), 1),
        j("span", Th, z(o.value), 1),
        j("button", {
          type: "button",
          class: "fc-retry",
          onClick: A
        }, z(O(r)("upload.retry")), 1)
      ])) : (v(), k(le, { key: 2 }, [
        a.value === "loading" ? (v(), k("p", $h, z(O(r)("upload.secureLoading")), 1)) : oe("", !0),
        j("div", {
          ref_key: "slot",
          ref: s,
          class: "fc-slot"
        }, null, 512),
        o.value ? (v(), k("p", Ih, z(o.value), 1)) : oe("", !0)
      ], 64))
    ]));
  }
}), Oh = {
  key: 0,
  class: "artwork",
  part: "artwork"
}, Ph = { class: "artwork-body" }, Nh = {
  class: "artwork-name",
  part: "artwork-name"
}, Rh = {
  key: 0,
  class: "artwork-meta",
  part: "artwork-meta"
}, Mh = { class: "artwork-actions" }, Fh = {
  key: 1,
  class: "producers"
}, jh = {
  key: 0,
  class: "producer-or",
  "aria-hidden": "true"
}, Dh = ["onClick"], Lh = { class: "producer-label" }, zh = {
  key: 0,
  class: "producer-description"
}, Vh = {
  key: 1,
  class: "producer-or",
  "aria-hidden": "true"
}, Uh = {
  class: "producer-or",
  "aria-hidden": "true"
}, qh = ["onClick"], Zh = { class: "producer-label" }, Hh = {
  key: 0,
  class: "producer-description"
}, Bh = /* @__PURE__ */ Te({
  __name: "ArtworkField",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e) {
    const t = e, n = Lt(Mi);
    if (!n)
      throw new Error("ArtworkField must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r, producers: s } = n, { t: a } = xt(), o = Y(
      () => {
        var y, K, T;
        return t.field.providerId === "filecheck" && !!((y = t.field.filecheck) != null && y.workflowId || (K = t.field.filecheck) != null && K.workflow) && ((T = i.provider) == null ? void 0 : T.mode) === "element";
      }
    ), l = Y(() => {
      const y = i.schema.value;
      if (!y)
        return !1;
      for (const K of y.sections)
        for (const T of K.fields)
          if (T.type === "file")
            return T.id === t.field.id;
      return !1;
    }), c = Y(
      () => s.forField(t.field.id, l.value)
    ), u = Y(() => {
      const y = i.selections[t.field.id];
      return typeof y == "string" && y !== "";
    }), d = Y(() => {
      var K;
      const y = (K = i.file.value) == null ? void 0 : K.source;
      return y ? c.value.find((T) => T.id === y) ?? null : null;
    }), p = Y(() => u.value && !d.value), m = Y(() => t.field.display === "producer"), A = Y(
      () => m.value ? c.value : c.value.filter((y) => y.order < _r)
    ), _ = Y(
      () => m.value ? [] : c.value.filter((y) => y.order >= _r)
    ), I = Y(() => {
      const y = i.file.value;
      return y ? y.fileName ? y.fileName : d.value ? a("artwork.designName") : y.fileId : "";
    }), M = Y(() => {
      const y = i.file.value;
      if (!y)
        return "";
      const K = [], T = i.schema.value;
      return y.pages !== void 0 && T && wf(T) && K.push(
        y.pages === 1 ? a("artwork.pageCountOne") : a("artwork.pageCount", { count: y.pages })
      ), y.canvas && K.push(`${y.canvas.w} × ${y.canvas.h} ${y.canvas.unit}`), K.join(" · ");
    });
    function F(y) {
      i.setFile(oh(y)), y.canProceed && y.jobId ? i.select(t.field.id, y.jobId) : i.select(t.field.id, "");
    }
    function X(y) {
      s.activate(y, t.field.id), r.touch(t.field.id);
    }
    function Z() {
      i.setFile(void 0), i.select(t.field.id, ""), r.touch(t.field.id);
    }
    return (y, K) => d.value ? (v(), k("div", Oh, [
      j("div", Ph, [
        j("span", Nh, z(I.value), 1),
        M.value ? (v(), k("span", Rh, z(M.value), 1)) : oe("", !0)
      ]),
      j("div", Mh, [
        j("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-change",
          onClick: K[0] || (K[0] = (T) => X(d.value.id))
        }, z(O(a)("artwork.change")), 1),
        j("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-remove",
          onClick: Z
        }, z(O(a)("artwork.remove")), 1)
      ])
    ])) : (v(), k("div", Fh, [
      p.value ? oe("", !0) : (v(!0), k(le, { key: 0 }, Me(A.value, (T, W) => (v(), k(le, {
        key: T.id
      }, [
        m.value && W > 0 ? (v(), k("p", jh, [
          j("span", null, z(O(a)("artwork.or")), 1)
        ])) : oe("", !0),
        j("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (pe) => X(T.id)
        }, [
          j("span", Lh, z(T.label), 1),
          T.description ? (v(), k("span", zh, z(T.description), 1)) : oe("", !0)
        ], 8, Dh),
        m.value ? oe("", !0) : (v(), k("p", Vh, [
          j("span", null, z(O(a)("artwork.or")), 1)
        ]))
      ], 64))), 128)),
      !m.value && o.value && O(i).provider ? (v(), Oe(Eh, {
        key: 1,
        field: e.field,
        provider: O(i).provider,
        onMetadata: F,
        onTouch: K[1] || (K[1] = (T) => O(r).touch(e.field.id))
      }, null, 8, ["field", "provider"])) : m.value ? oe("", !0) : (v(), Oe(gh, {
        key: 2,
        field: e.field,
        file: O(i).file.value,
        analyzing: O(i).fileAnalyzing.value,
        error: e.error,
        onFile: K[2] || (K[2] = (T, W) => O(i).handleFile(T, W)),
        onTouch: K[3] || (K[3] = (T) => O(r).touch(e.field.id))
      }, null, 8, ["field", "file", "analyzing", "error"])),
      p.value ? oe("", !0) : (v(!0), k(le, { key: 3 }, Me(_.value, (T) => (v(), k(le, {
        key: T.id
      }, [
        j("p", Uh, [
          j("span", null, z(O(a)("artwork.or")), 1)
        ]),
        j("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (W) => X(T.id)
        }, [
          j("span", Zh, z(T.label), 1),
          T.description ? (v(), k("span", Hh, z(T.description), 1)) : oe("", !0)
        ], 8, qh)
      ], 64))), 128))
    ]));
  }
}), Wh = {
  key: 0,
  class: "recap",
  part: "summary-recap"
}, Kh = { part: "recap-label" }, Gh = { part: "recap-value" }, Yh = {
  key: 1,
  class: "recap-empty"
}, Qh = /* @__PURE__ */ Te({
  __name: "SummaryPanel",
  props: {
    sections: { type: Array },
    selections: { type: Object },
    file: { type: null }
  },
  setup(e) {
    const t = e, { t: n } = xt(), i = Y(
      () => Vo(t.sections, t.selections, t.file, {
        quantityLabel: n("quantity.label")
      })
    );
    return (r, s) => i.value.length ? (v(), k("dl", Wh, [
      (v(!0), k(le, null, Me(i.value, (a) => (v(), k("div", {
        key: a.fieldId,
        class: "recap-row",
        part: "recap-row"
      }, [
        j("dt", Kh, z(a.label), 1),
        j("dd", Gh, z(a.value), 1)
      ]))), 128))
    ])) : (v(), k("p", Yh, z(O(n)("recap.empty")), 1));
  }
}), Jh = {
  key: 0,
  class: "info-note",
  part: "field-help"
}, Xh = /* @__PURE__ */ Te({
  __name: "InfoBlock",
  props: {
    field: { type: null }
  },
  setup(e) {
    return (t, n) => e.field.body ? (v(), k("p", Jh, z(e.field.body), 1)) : oe("", !0);
  }
}), Wo = /* @__PURE__ */ Te({
  __name: "FieldHost",
  props: {
    field: { type: null }
  },
  setup(e) {
    const t = e, n = Lt(Mi);
    if (!n)
      throw new Error("FieldHost must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r } = n, s = Y(() => i.selections[t.field.id]), a = Y(() => r.errorFor(t.field.id)), o = Y(() => {
      const u = s.value;
      return Array.isArray(u) ? u : typeof u == "string" && u !== "" ? [u] : [];
    }), l = Y(() => {
      if (!Ye(t.field) || !i.schema.value)
        return [];
      const u = i.schema.value;
      return t.field.options.filter(
        (d) => !pf(u, i.selections, t.field.id, d.id)
      ).map((d) => d.id);
    });
    function c(u) {
      t.field.type === "select-many" ? i.toggle(t.field, u) : i.select(t.field.id, u), r.touch(t.field.id);
    }
    return (u, d) => (v(), Oe(Tp, {
      field: e.field,
      error: a.value
    }, {
      default: Ma(() => [
        e.field.type === "select-one" || e.field.type === "select-many" ? (v(), Oe(ic(O(sa)[e.field.display] ?? O(sa).pills), {
          key: 0,
          field: e.field,
          "selected-ids": o.value,
          "unavailable-ids": l.value,
          error: a.value,
          onPick: c
        }, null, 40, ["field", "selected-ids", "unavailable-ids", "error"])) : e.field.type === "quantity" ? (v(), Oe(jp, {
          key: 1,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[0] || (d[0] = (p) => O(i).select(e.field.id, p)),
          onTouch: d[1] || (d[1] = (p) => O(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "number" ? (v(), Oe(Bp, {
          key: 2,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[2] || (d[2] = (p) => O(i).select(e.field.id, p)),
          onTouch: d[3] || (d[3] = (p) => O(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "text" ? (v(), Oe(Gp, {
          key: 3,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[4] || (d[4] = (p) => O(i).select(e.field.id, p)),
          onTouch: d[5] || (d[5] = (p) => O(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "dimensions" ? (v(), Oe(ah, {
          key: 4,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[6] || (d[6] = (p) => O(i).select(e.field.id, p)),
          onTouch: d[7] || (d[7] = (p) => O(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "file" ? (v(), Oe(Bh, {
          key: 5,
          field: e.field,
          error: a.value
        }, null, 8, ["field", "error"])) : e.field.type === "info" && e.field.display === "summary" ? (v(), Oe(Qh, {
          key: 6,
          sections: O(i).visibleSections.value,
          selections: O(i).selections,
          file: O(i).file.value
        }, null, 8, ["sections", "selections", "file"])) : e.field.type === "info" ? (v(), Oe(Xh, {
          key: 7,
          field: e.field
        }, null, 8, ["field"])) : oe("", !0)
      ]),
      _: 1
    }, 8, ["field", "error"]));
  }
}), em = {
  class: "section-title",
  part: "section-title"
}, tm = /* @__PURE__ */ Te({
  __name: "SectionStack",
  props: {
    sections: { type: Array }
  },
  setup(e) {
    return (t, n) => (v(!0), k(le, null, Me(e.sections, (i) => (v(), k("section", {
      key: i.section.id,
      class: "section",
      part: "section"
    }, [
      j("h3", em, z(i.section.title), 1),
      (v(!0), k(le, null, Me(i.fields, (r) => (v(), Oe(Wo, {
        key: r.id,
        field: r
      }, null, 8, ["field"]))), 128))
    ]))), 128));
  }
}), nm = { class: "wizard" }, im = {
  class: "wizard-nav",
  part: "wizard-nav"
}, rm = ["part", "aria-current"], sm = ["onClick"], am = {
  class: "wizard-step-index",
  "aria-hidden": "true"
}, om = { class: "wizard-step-title" }, lm = {
  key: 0,
  class: "section",
  part: "section"
}, cm = { class: "wizard-actions" }, um = /* @__PURE__ */ Te({
  __name: "SectionWizard",
  props: {
    sections: { type: Array },
    issues: { type: Array }
  },
  emits: ["blocked"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n, { t: s } = xt(), a = /* @__PURE__ */ Ze(0), o = /* @__PURE__ */ Ze(null);
    yt(
      () => i.sections.length,
      (_) => {
        a.value > _ - 1 && (a.value = Math.max(0, _ - 1));
      }
    );
    const l = Y(() => i.sections[a.value]), c = Y(() => a.value >= i.sections.length - 1);
    function u(_) {
      const I = i.sections[_];
      if (!I)
        return [];
      const M = new Set(I.fields.map((F) => F.id));
      return i.issues.filter((F) => M.has(F.fieldId));
    }
    function d(_) {
      return _ === a.value ? "active" : _ < a.value && u(_).length === 0 ? "done" : "todo";
    }
    async function p(_) {
      var I;
      a.value = Math.max(0, Math.min(_, i.sections.length - 1)), await Ii(), (I = o.value) == null || I.focus();
    }
    function m() {
      const _ = u(a.value);
      if (_.length > 0) {
        r("blocked", _);
        return;
      }
      p(a.value + 1);
    }
    function A() {
      p(a.value - 1);
    }
    return t({ goTo: p, current: a }), (_, I) => (v(), k("div", nm, [
      j("ol", im, [
        (v(!0), k(le, null, Me(e.sections, (M, F) => (v(), k("li", {
          key: M.section.id,
          class: et(["wizard-step", d(F)]),
          part: `wizard-step wizard-step-${d(F)}`,
          "aria-current": F === a.value ? "step" : void 0
        }, [
          j("button", {
            type: "button",
            class: "wizard-step-button",
            onClick: (X) => p(F)
          }, [
            j("span", am, z(d(F) === "done" ? "✓" : F + 1), 1),
            j("span", om, z(M.section.title), 1)
          ], 8, sm)
        ], 10, rm))), 128))
      ]),
      l.value ? (v(), k("section", lm, [
        j("h3", {
          ref_key: "heading",
          ref: o,
          class: "section-title",
          part: "section-title",
          tabindex: "-1"
        }, z(l.value.section.title), 513),
        (v(!0), k(le, null, Me(l.value.fields, (M) => (v(), Oe(Wo, {
          key: M.id,
          field: M
        }, null, 8, ["field"]))), 128))
      ])) : oe("", !0),
      j("div", cm, [
        a.value > 0 ? (v(), k("button", {
          key: 0,
          type: "button",
          class: "wizard-back",
          part: "wizard-back",
          onClick: A
        }, z(O(s)("wizard.back")), 1)) : oe("", !0),
        c.value ? oe("", !0) : (v(), k("button", {
          key: 1,
          type: "button",
          class: "wizard-next",
          part: "wizard-next",
          onClick: m
        }, z(O(s)("wizard.continue")), 1))
      ])
    ]));
  }
}), dm = {
  class: "summary",
  part: "summary"
}, fm = { part: "summary-title" }, pm = { class: "lines" }, hm = { part: "summary-line-label" }, mm = { part: "summary-line-value" }, gm = {
  class: "subtotal",
  part: "summary-net"
}, vm = { part: "summary-net-label" }, ym = { part: "summary-net-value" }, bm = {
  class: "tax-line",
  part: "summary-tax"
}, _m = { part: "summary-tax-label" }, xm = { part: "summary-tax-value" }, wm = {
  class: "total",
  part: "summary-total",
  "aria-live": "polite",
  "aria-atomic": "true"
}, km = { part: "summary-total-label" }, Sm = { part: "price" }, Cm = {
  key: 1,
  class: "tax-included",
  part: "summary-tax-included"
}, Am = {
  key: 2,
  class: "unit-price",
  part: "summary-unit"
}, Tm = {
  key: 3,
  class: "price-note",
  part: "summary-note"
}, $m = {
  key: 4,
  class: "unavailable",
  role: "status"
}, Im = ["disabled"], Em = {
  class: "visually-hidden",
  role: "status"
}, Om = /* @__PURE__ */ Te({
  __name: "PriceSummary",
  props: {
    price: { type: [Object, null] },
    locale: { type: String },
    priceFormat: { type: Object },
    priceNote: { type: String },
    tax: { type: Object },
    holds: { type: Array },
    issueCount: { type: Number }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = xt();
    function s(m) {
      var A;
      return Hf(
        m,
        ((A = n.price) == null ? void 0 : A.currency) ?? "USD",
        n.locale,
        n.priceFormat
      );
    }
    const a = Y(
      () => {
        var m;
        return (((m = n.price) == null ? void 0 : m.lines) ?? []).filter(
          (A) => !(A.stage === "base" && A.amount === 0)
        );
      }
    ), o = Y(
      () => {
        var m, A;
        return (((m = n.price) == null ? void 0 : m.quantity) ?? 1) > 1 && !((A = n.price) != null && A.unavailable);
      }
    ), l = Y(() => {
      const m = n.price;
      if (!(!n.tax || !m || m.unavailable))
        return Kf(m.total, m.currency, n.tax);
    }), c = Y(() => {
      var m, A;
      return {
        tax: ((m = n.tax) == null ? void 0 : m.name) ?? r("tax.name"),
        rate: Gf(((A = n.tax) == null ? void 0 : A.rate) ?? 0, n.locale)
      };
    }), u = Y(() => {
      var m;
      return l.value !== void 0 && ((m = n.tax) == null ? void 0 : m.mode) === "exclusive";
    }), d = Y(
      () => {
        var m, A;
        return u.value ? ((m = l.value) == null ? void 0 : m.gross) ?? 0 : ((A = n.price) == null ? void 0 : A.total) ?? 0;
      }
    ), p = Y(() => {
      const m = n.price;
      return m ? u.value && m.quantity > 0 ? d.value / m.quantity : m.unitPrice : 0;
    });
    return (m, A) => {
      var _, I;
      return v(), k("aside", dm, [
        j("h3", fm, z(O(r)("summary.title")), 1),
        j("ul", pm, [
          (v(!0), k(le, null, Me(a.value, (M, F) => (v(), k("li", {
            key: F,
            part: "summary-line"
          }, [
            j("span", hm, z(O(Df)(O(r), M)), 1),
            j("span", mm, z(s(M.amount)), 1)
          ]))), 128))
        ]),
        u.value && l.value ? (v(), k(le, { key: 0 }, [
          j("div", gm, [
            j("span", vm, z(O(r)("summary.totalNet", c.value)), 1),
            j("span", ym, z(s(l.value.net)), 1)
          ]),
          j("div", bm, [
            j("span", _m, z(O(r)("summary.tax", c.value)), 1),
            j("span", xm, z(s(l.value.tax)), 1)
          ])
        ], 64)) : oe("", !0),
        j("div", wm, [
          j("span", km, z(u.value ? O(r)("summary.totalGross", c.value) : O(r)("summary.total")), 1),
          j("strong", Sm, z(s(d.value)), 1)
        ]),
        l.value && !u.value ? (v(), k("p", Cm, z(O(r)("summary.taxIncluded", { ...c.value, amount: s(l.value.tax) })), 1)) : oe("", !0),
        o.value ? (v(), k("p", Am, z(O(r)("summary.unitPrice", {
          quantity: ((_ = e.price) == null ? void 0 : _.quantity) ?? 0,
          unitPrice: s(p.value)
        })), 1)) : oe("", !0),
        e.priceNote ? (v(), k("p", Tm, z(e.priceNote), 1)) : oe("", !0),
        (I = e.price) != null && I.unavailable ? (v(), k("p", $m, z(O(r)("summary.unavailable")), 1)) : oe("", !0),
        (v(!0), k(le, null, Me(e.holds.filter((M) => M.message), (M) => (v(), k("p", {
          key: M.key,
          class: "hold-message",
          part: "hold-message",
          role: "status"
        }, z(M.message), 1))), 128)),
        j("button", {
          type: "button",
          class: "cta",
          part: "cta",
          disabled: e.holds.length > 0,
          onClick: A[0] || (A[0] = (M) => i("submit"))
        }, z(O(r)("summary.addToCart")), 9, Im),
        j("span", Em, z(e.issueCount > 0 ? O(r)("summary.issues", { count: e.issueCount }) : ""), 1)
      ]);
    };
  }
}), Pm = {
  key: 0,
  class: "state"
}, Nm = {
  key: 1,
  class: "state error",
  role: "alert"
}, Rm = {
  key: 2,
  class: "layout"
}, Mm = { class: "main" }, Fm = /* @__PURE__ */ Te({
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
    function s(T) {
      if (T)
        try {
          const W = typeof T == "string" ? JSON.parse(T) : T;
          return af.parse(W);
        } catch {
          return;
        }
    }
    const a = If({
      configUrl: i.configUrl,
      uploadEndpoint: i.uploadEndpoint,
      turnstileUrl: i.turnstileUrl,
      provider: s(i.provider),
      inlineConfig: i.config
    }), o = Y(() => zf(i.strings)), l = Zo(() => o.value);
    tr(Ho, l);
    const c = Y(() => Zf(i.priceFormat)), u = Y(() => Wf(i.taxMode, i.taxRate, i.taxName)), d = Vf(
      a.visibleFields,
      a.selections,
      a.price,
      l.t
    ), p = mu(), m = Of(), A = Rf({ host: p });
    tr(Mi, { cfg: a, validation: d, producers: A });
    const _ = Pf({ host: p, cfg: a, validation: d, holds: m, producers: A });
    Ff(a, A);
    const I = /* @__PURE__ */ Ze(null), M = /* @__PURE__ */ Ze(null);
    Mr(() => {
      (i.config || i.configUrl) && a.load().then(() => {
        a.unconfigured.value ? r("unconfigured", { productId: i.productId }) : a.schema.value && _.notifyReady();
      });
    }), yt(
      () => i.config,
      (T, W) => {
        T && T !== W && (d.reset(), a.reload({
          inlineConfig: T,
          provider: s(i.provider)
        }).then(() => {
          a.schema.value && _.notifyReady();
        }));
      }
    );
    const F = Y(() => {
      const T = {}, W = a.schema.value;
      if (!W)
        return T;
      for (const pe of W.sections)
        for (const Ce of pe.fields)
          if (T[Ce.id] = Ce.label ?? Ce.id, Ye(Ce))
            for (const $ of Ce.options)
              T[`${Ce.id}:${$.id}`] = $.label;
      return T;
    });
    function X() {
      return !a.schema.value || !a.price.value ? null : {
        productId: a.schema.value.productId,
        selections: { ...a.selections },
        quantity: a.price.value.quantity,
        file: a.file.value,
        price: a.price.value,
        sku: a.price.value.sku,
        labels: F.value,
        display: Vo(
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
    function Z(T) {
      var pe, Ce;
      const W = (pe = I.value) == null ? void 0 : pe.querySelector(`[data-field-id="${T}"]`);
      W && (W.scrollIntoView({ behavior: "smooth", block: "center" }), (Ce = W.querySelector(
        "button, input, select, textarea, [tabindex]"
      )) == null || Ce.focus({ preventScroll: !0 }));
    }
    function y() {
      var pe, Ce, $;
      const T = X();
      if (!T)
        return;
      if (m.held.value) {
        r("invalid", {
          productId: T.productId,
          issues: [],
          holds: m.list.value
        });
        return;
      }
      const W = d.touchAll();
      if (W.length > 0 || (pe = a.price.value) != null && pe.unavailable) {
        const D = W[0];
        if (D) {
          const ke = a.visibleSections.value.findIndex(
            (He) => He.fields.some((Ee) => Ee.id === D.fieldId)
          );
          ((Ce = a.schema.value) == null ? void 0 : Ce.layout) === "wizard" && ke >= 0 && (($ = M.value) == null || $.goTo(ke)), Z(D.fieldId);
        }
        r("invalid", {
          productId: T.productId,
          issues: W
        });
        return;
      }
      r("submit", { ...T, valid: !0 });
    }
    function K(T) {
      for (const pe of T)
        d.touch(pe.fieldId);
      const W = T[0];
      W && Z(W.fieldId);
    }
    return t(_.exposed), (T, W) => O(a).unconfigured.value ? oe("", !0) : (v(), k("div", {
      key: 0,
      ref_key: "root",
      ref: I,
      class: "configurator",
      part: "base"
    }, [
      O(a).loading.value ? (v(), k("p", Pm, z(O(l).t("state.loading")), 1)) : O(a).error.value ? (v(), k("p", Nm, z(O(a).error.value), 1)) : O(a).schema.value ? (v(), k("div", Rm, [
        j("div", Mm, [
          O(a).schema.value.layout === "wizard" ? (v(), Oe(um, {
            key: 0,
            ref_key: "wizard",
            ref: M,
            sections: O(a).visibleSections.value,
            issues: O(d).issues.value,
            onBlocked: K
          }, null, 8, ["sections", "issues"])) : (v(), Oe(tm, {
            key: 1,
            sections: O(a).visibleSections.value
          }, null, 8, ["sections"]))
        ]),
        Xe(Om, {
          price: O(a).price.value,
          locale: i.locale,
          "price-format": c.value,
          "price-note": i.priceNote,
          tax: u.value,
          holds: O(m).list.value,
          "issue-count": O(d).issues.value.length,
          onSubmit: y
        }, null, 8, ["price", "locale", "price-format", "price-note", "tax", "holds", "issue-count"])
      ])) : oe("", !0)
    ], 512));
  }
}), jm = ":host{--pc-color-accent: #1a1a1a;--pc-color-accent-contrast: #ffffff;--pc-color-accent-soft: #f6f6f4;--pc-color-surface: #ffffff;--pc-color-surface-alt: #fafafa;--pc-color-border: #e0e0dc;--pc-color-text: #1a1a1a;--pc-color-text-muted: #6b7280;--pc-color-danger: #c0392b;--pc-color-focus: var(--pc-color-accent);--pc-font-family: inherit;--pc-font-size: 1em;--pc-label-weight: 600;--pc-radius-control: 8px;--pc-radius-card: 12px;--pc-space: 4px;--pc-shadow-card: none;--pc-cta-bg: var(--pc-color-accent);--pc-cta-color: var(--pc-color-accent-contrast);--pc-swatch-size: 44px;--pc-card-image-height: 90px;display:block;container:pc-root / inline-size;font-family:var(--pc-font-family);font-size:var(--pc-font-size);color:var(--pc-color-text)}", Dm = '*{box-sizing:border-box}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.state{padding:calc(var(--pc-space) * 8);text-align:center;color:var(--pc-color-text-muted)}.state.error{color:var(--pc-color-danger)}.layout{display:grid;grid-template-columns:1fr 300px;gap:calc(var(--pc-space) * 6);align-items:start}.section{margin-bottom:calc(var(--pc-space) * 6);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);box-shadow:var(--pc-shadow-card)}.section-title{margin:0 0 calc(var(--pc-space) * 4);text-transform:uppercase;letter-spacing:.04em;font-size:.95em;color:var(--pc-color-text);outline:none}.field{margin-bottom:calc(var(--pc-space) * 5)}.field:last-child{margin-bottom:0}.field-label{display:block;font-weight:var(--pc-label-weight);margin-bottom:calc(var(--pc-space) * 2)}.req{color:var(--pc-color-danger)}.help{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.field-error{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--pc-color-focus);outline-offset:2px}.grid{display:grid;gap:calc(var(--pc-space) * 3);grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.grid.cards{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.card{position:relative;display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;transition:border-color .15s ease}.card:hover{border-color:var(--pc-color-accent-soft)}.card.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.card img{max-width:100%;height:var(--pc-card-image-height);object-fit:contain}.card-label{font-size:.9em}.card-description{font-size:.8em;color:var(--pc-color-text-muted)}.check{position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);display:grid;place-items:center;font-size:.8em}.swatches{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.swatch{width:var(--pc-swatch-size);height:var(--pc-swatch-size);border-radius:50%;border:3px solid transparent;cursor:pointer;display:grid;place-items:center}.swatch.active{border-color:var(--pc-color-accent);box-shadow:0 0 0 2px var(--pc-color-surface) inset}.swatch-check{color:#fff;text-shadow:0 0 3px rgb(0 0 0 / .8);font-size:.9em}.swatch-selected-label{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.pills{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.pill{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);cursor:pointer}.pill.active{background:var(--pc-color-accent);border-color:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.choice-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.choice-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);padding:calc(var(--pc-space) * 3);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;text-align:left;cursor:pointer}.choice-row.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.choice-indicator{flex:none;width:20px;height:20px;border:2px solid var(--pc-color-border);border-radius:50%;display:grid;place-items:center;font-size:.7em;color:var(--pc-color-accent-contrast)}.choice-indicator.multi{border-radius:4px}.choice-row.active .choice-indicator{background:var(--pc-color-accent);border-color:var(--pc-color-accent)}.choice-body{display:flex;flex-direction:column}.choice-title{font-weight:var(--pc-label-weight)}.choice-description{font-size:.85em;color:var(--pc-color-text-muted)}.card.unavailable,.pill.unavailable,.swatch.unavailable,.choice-row.unavailable{opacity:.4;cursor:not-allowed;text-decoration:line-through}.dropdown{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.stepper{display:inline-flex;align-items:stretch;border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);overflow:hidden}.stepper button{width:40px;border:none;background:var(--pc-color-surface-alt);color:var(--pc-color-text);font-size:1.2em;cursor:pointer}.stepper button:disabled{opacity:.4;cursor:not-allowed}.stepper-value{width:4.5em;border:none;text-align:center;font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);background:var(--pc-color-surface);-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.stepper-value::-webkit-outer-spin-button,.stepper-value::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.number-input,.text-input{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.textarea{width:100%;resize:vertical}.slider-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3)}.slider{flex:1;accent-color:var(--pc-color-accent)}.slider-value{min-width:3em;text-align:right;font-weight:var(--pc-label-weight)}.dimensions{display:flex;align-items:flex-end;gap:calc(var(--pc-space) * 2);flex-wrap:wrap}.dim-input{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1)}.dim-label{font-size:.8em;color:var(--pc-color-text-muted)}.dim-input input{width:6em;padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);font:inherit;color:var(--pc-color-text);background:var(--pc-color-surface)}.dim-times{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.dim-unit{min-width:5em}.dim-unit-static{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.upload-input{position:absolute;width:1px;height:1px;opacity:0;overflow:hidden}.upload-zone{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 6);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);cursor:pointer;text-align:center}.upload.dragging .upload-zone{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.upload.done .upload-zone{border-style:solid;border-color:var(--pc-color-accent)}.upload-title{font-weight:var(--pc-label-weight)}.upload-hint{font-size:.8em;color:var(--pc-color-text-muted)}.upload-filename{font-weight:var(--pc-label-weight);color:var(--pc-color-accent);word-break:break-all}.upload-status{color:var(--pc-color-accent);font-weight:var(--pc-label-weight)}.producers{display:flex;flex-direction:column}.producer{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;text-align:center;transition:border-color .15s ease}.producer:hover{border-color:var(--pc-color-accent)}.producer-label{font-weight:var(--pc-label-weight)}.producer-description{font-size:.8em;color:var(--pc-color-text-muted)}.producer-or{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);margin:calc(var(--pc-space) * 3) 0;font-size:.8em;text-transform:uppercase;letter-spacing:.06em;color:var(--pc-color-text-muted)}.producer-or:before,.producer-or:after{content:"";flex:1;height:1px;background:var(--pc-color-border)}.artwork{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 4);flex-wrap:wrap;padding:calc(var(--pc-space) * 4) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-accent-soft)}.artwork-body{display:flex;flex-direction:column;min-width:0}.artwork-name{font-weight:var(--pc-label-weight);word-break:break-all}.artwork-meta{font-size:.85em;color:var(--pc-color-text-muted)}.artwork-actions{display:flex;gap:calc(var(--pc-space) * 2)}.artwork-action{padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-size:.9em;cursor:pointer}.artwork-action:hover{border-color:var(--pc-color-accent)}.fc-slot{min-height:40px}.fc-loading{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.fc-panel{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);text-align:center;align-items:center}.fc-panel.fc-error{border-color:var(--pc-color-danger)}.fc-panel-title{font-weight:var(--pc-label-weight)}.fc-panel-hint{font-size:.85em;color:var(--pc-color-text-muted)}.fc-retry{margin-top:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.recap{margin:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.recap-row{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 4);font-size:.9em}.recap-row dt{color:var(--pc-color-text-muted)}.recap-row dd{margin:0;text-align:right}.recap-empty,.info-note{margin:0;font-size:.9em;color:var(--pc-color-text-muted)}.summary{position:sticky;top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt)}.summary h3{margin:0 0 calc(var(--pc-space) * 4)}.lines{list-style:none;margin:0 0 calc(var(--pc-space) * 4);padding:0}.lines li{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0;color:var(--pc-color-text-muted)}.total{display:flex;justify-content:space-between;padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border);font-size:1.1em}.subtotal,.tax-line{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0}.subtotal{padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border)}.tax-line{margin-bottom:calc(var(--pc-space) * 2);color:var(--pc-color-text-muted)}.tax-included,.unit-price{margin:calc(var(--pc-space) * 1) 0 0;text-align:right;font-size:.85em;color:var(--pc-color-text-muted)}.price-note{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.unavailable{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.hold-message{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.cta{width:100%;margin-top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 3.5);border:none;border-radius:var(--pc-radius-control);background:var(--pc-cta-bg);color:var(--pc-cta-color);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.cta:disabled{opacity:.5;cursor:not-allowed}.wizard-nav{list-style:none;display:flex;gap:calc(var(--pc-space) * 2);margin:0 0 calc(var(--pc-space) * 5);padding:0;flex-wrap:wrap}.wizard-step-button{display:flex;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:none;border-radius:var(--pc-radius-control);background:transparent;font:inherit;color:var(--pc-color-text-muted);cursor:pointer}.wizard-step.active .wizard-step-button{background:var(--pc-color-accent-soft);color:var(--pc-color-text);font-weight:var(--pc-label-weight)}.wizard-step-index{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--pc-color-border);color:var(--pc-color-text);font-size:.75em}.wizard-step.active .wizard-step-index,.wizard-step.done .wizard-step-index{background:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.wizard-actions{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 3)}.wizard-back,.wizard-next{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 6);border-radius:var(--pc-radius-control);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.wizard-back{border:2px solid var(--pc-color-border);background:var(--pc-color-surface);color:var(--pc-color-text)}.wizard-next{border:none;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);margin-left:auto}@container pc-root (max-width: 640px){.layout{grid-template-columns:1fr}.summary{position:static}}', Lm = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, zm = /* @__PURE__ */ Lm(Fm, [["styles", [jm, Dm]]]), Vm = /* @__PURE__ */ pu(zm);
function Um(e = "print-configurator") {
  typeof customElements < "u" && !customElements.get(e) && customElements.define(e, Vm);
}
Um();
export {
  qo as DEFAULT_STRINGS,
  br as PAGE_API_VERSION,
  Vm as PrintConfiguratorElement,
  Um as registerPrintConfigurator
};
