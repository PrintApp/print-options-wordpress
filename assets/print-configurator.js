var Ho = Object.defineProperty;
var Bo = (e, t, n) => t in e ? Ho(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Xr = (e, t, n) => Bo(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function br(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const we = {}, sn = [], vt = () => {
}, ra = () => !1, vi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), yi = (e) => e.startsWith("onUpdate:"), Ce = Object.assign, _r = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Wo = Object.prototype.hasOwnProperty, pe = (e, t) => Wo.call(e, t), X = Array.isArray, an = (e) => Un(e) === "[object Map]", sa = (e) => Un(e) === "[object Set]", es = (e) => Un(e) === "[object Date]", ne = (e) => typeof e == "function", Se = (e) => typeof e == "string", rt = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", aa = (e) => (ve(e) || ne(e)) && ne(e.then) && ne(e.catch), oa = Object.prototype.toString, Un = (e) => oa.call(e), Ko = (e) => Un(e).slice(8, -1), bi = (e) => Un(e) === "[object Object]", xr = (e) => Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, An = /* @__PURE__ */ br(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _i = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Go = /-\w/g, Ee = _i(
  (e) => e.replace(Go, (t) => t.slice(1).toUpperCase())
), Yo = /\B([A-Z])/g, We = _i(
  (e) => e.replace(Yo, "-$1").toLowerCase()
), xi = _i((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ri = _i(
  (e) => e ? `on${xi(e)}` : ""
), gt = (e, t) => !Object.is(e, t), Mi = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, la = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Qo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ts = (e) => {
  const t = Se(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ns;
const wi = () => ns || (ns = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ki(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = Se(i) ? tl(i) : ki(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Se(e) || ve(e))
    return e;
}
const Jo = /;(?![^(]*\))/g, Xo = /:([^]+)/, el = /\/\*[^]*?\*\//g;
function tl(e) {
  const t = {};
  return e.replace(el, "").split(Jo).forEach((n) => {
    if (n) {
      const i = n.split(Xo);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function et(e) {
  let t = "";
  if (Se(e))
    t = e;
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const i = et(e[n]);
      i && (t += i + " ");
    }
  else if (ve(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const nl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", il = /* @__PURE__ */ br(nl);
function ca(e) {
  return !!e || e === "";
}
function rl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = wr(e[i], t[i]);
  return n;
}
function wr(e, t) {
  if (e === t) return !0;
  let n = es(e), i = es(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = rt(e), i = rt(t), n || i)
    return e === t;
  if (n = X(e), i = X(t), n || i)
    return n && i ? rl(e, t) : !1;
  if (n = ve(e), i = ve(t), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !wr(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ua = (e) => !!(e && e.__v_isRef === !0), V = (e) => Se(e) ? e : e == null ? "" : X(e) || ve(e) && (e.toString === oa || !ne(e.toString)) ? ua(e) ? V(e.value) : JSON.stringify(e, da, 2) : String(e), da = (e, t) => ua(t) ? da(e, t.value) : an(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[Fi(i, s) + " =>"] = r, n),
    {}
  )
} : sa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fi(n))
} : rt(t) ? Fi(t) : ve(t) && !X(t) && !bi(t) ? String(t) : t, Fi = (e, t = "") => {
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
let Ne;
class sl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ne && (Ne.active ? (this.parent = Ne, this.index = (Ne.scopes || (Ne.scopes = [])).push(
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
      const n = Ne;
      try {
        return Ne = this, t();
      } finally {
        Ne = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ne, Ne = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ne === this)
        Ne = this.prevScope;
      else {
        let t = Ne;
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
function al() {
  return Ne;
}
let xe;
const ji = /* @__PURE__ */ new WeakSet();
class fa {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ne && (Ne.active ? Ne.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ji.has(this) && (ji.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ha(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, is(this), ma(this);
    const t = xe, n = it;
    xe = this, it = !0;
    try {
      return this.fn();
    } finally {
      ga(this), xe = t, it = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Cr(t);
      this.deps = this.depsTail = void 0, is(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ji.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Wi(this) && this.run();
  }
  get dirty() {
    return Wi(this);
  }
}
let pa = 0, $n, In;
function ha(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = In, In = e;
    return;
  }
  e.next = $n, $n = e;
}
function kr() {
  pa++;
}
function Sr() {
  if (--pa > 0)
    return;
  if (In) {
    let t = In;
    for (In = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; $n; ) {
    let t = $n;
    for ($n = void 0; t; ) {
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
function ma(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ga(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const r = i.prevDep;
    i.version === -1 ? (i === n && (n = r), Cr(i), ol(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r;
  }
  e.deps = t, e.depsTail = n;
}
function Wi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (va(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function va(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Nn) || (e.globalVersion = Nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = xe, i = it;
  xe = e, it = !0;
  try {
    ma(e);
    const r = e.fn(e._value);
    (t.version === 0 || gt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    xe = n, it = i, ga(e), e.flags &= -3;
  }
}
function Cr(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: r } = e;
  if (i && (i.nextSub = r, e.prevSub = void 0), r && (r.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Cr(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ol(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let it = !0;
const ya = [];
function It() {
  ya.push(it), it = !1;
}
function Et() {
  const e = ya.pop();
  it = e === void 0 ? !0 : e;
}
function is(e) {
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
let Nn = 0;
class ll {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Tr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!xe || !it || xe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xe)
      n = this.activeLink = new ll(xe, this), xe.deps ? (n.prevDep = xe.depsTail, xe.depsTail.nextDep = n, xe.depsTail = n) : xe.deps = xe.depsTail = n, ba(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = xe.depsTail, n.nextDep = void 0, xe.depsTail.nextDep = n, xe.depsTail = n, xe.deps === n && (xe.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Nn++, this.notify(t);
  }
  notify(t) {
    kr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Sr();
    }
  }
}
function ba(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        ba(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ki = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ Symbol(
  ""
), Gi = /* @__PURE__ */ Symbol(
  ""
), Rn = /* @__PURE__ */ Symbol(
  ""
);
function Me(e, t, n) {
  if (it && xe) {
    let i = Ki.get(e);
    i || Ki.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || (i.set(n, r = new Tr()), r.map = i, r.key = n), r.track();
  }
}
function Tt(e, t, n, i, r, s) {
  const a = Ki.get(e);
  if (!a) {
    Nn++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (kr(), t === "clear")
    a.forEach(o);
  else {
    const l = X(e), c = l && xr(n);
    if (l && n === "length") {
      const u = Number(i);
      a.forEach((d, p) => {
        (p === "length" || p === Rn || !rt(p) && p >= u) && o(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), c && o(a.get(Rn)), t) {
        case "add":
          l ? c && o(a.get("length")) : (o(a.get(Gt)), an(e) && o(a.get(Gi)));
          break;
        case "delete":
          l || (o(a.get(Gt)), an(e) && o(a.get(Gi)));
          break;
        case "set":
          an(e) && o(a.get(Gt));
          break;
      }
  }
  Sr();
}
function tn(e) {
  const t = /* @__PURE__ */ fe(e);
  return t === e ? t : (Me(t, "iterate", Rn), /* @__PURE__ */ Je(e) ? t : t.map(st));
}
function Si(e) {
  return Me(e = /* @__PURE__ */ fe(e), "iterate", Rn), e;
}
function ht(e, t) {
  return /* @__PURE__ */ Ot(e) ? un(/* @__PURE__ */ Yt(e) ? st(t) : t) : st(t);
}
const cl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Di(this, Symbol.iterator, (e) => ht(this, e));
  },
  concat(...e) {
    return tn(this).concat(
      ...e.map((t) => X(t) ? tn(t) : t)
    );
  },
  entries() {
    return Di(this, "entries", (e) => (e[1] = ht(this, e[1]), e));
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
    return Li(this, "includes", e);
  },
  indexOf(...e) {
    return Li(this, "indexOf", e);
  },
  join(e) {
    return tn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Li(this, "lastIndexOf", e);
  },
  map(e, t) {
    return wt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return vn(this, "pop");
  },
  push(...e) {
    return vn(this, "push", e);
  },
  reduce(e, ...t) {
    return rs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return rs(this, "reduceRight", e, t);
  },
  shift() {
    return vn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return wt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return vn(this, "splice", e);
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
    return vn(this, "unshift", e);
  },
  values() {
    return Di(this, "values", (e) => ht(this, e));
  }
};
function Di(e, t, n) {
  const i = Si(e), r = i[t]();
  return i !== e && !/* @__PURE__ */ Je(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const ul = Array.prototype;
function wt(e, t, n, i, r, s) {
  const a = Si(e), o = a !== e && !/* @__PURE__ */ Je(e), l = a[t];
  if (l !== ul[t]) {
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
function rs(e, t, n, i) {
  const r = Si(e), s = r !== e && !/* @__PURE__ */ Je(e);
  let a = n, o = !1;
  r !== e && (s ? (o = i.length === 0, a = function(c, u, d) {
    return o && (o = !1, c = ht(e, c)), n.call(this, c, ht(e, u), d, e);
  }) : n.length > 3 && (a = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const l = r[t](a, ...i);
  return o ? ht(e, l) : l;
}
function Li(e, t, n) {
  const i = /* @__PURE__ */ fe(e);
  Me(i, "iterate", Rn);
  const r = i[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Ir(n[0]) ? (n[0] = /* @__PURE__ */ fe(n[0]), i[t](...n)) : r;
}
function vn(e, t, n = []) {
  It(), kr();
  const i = (/* @__PURE__ */ fe(e))[t].apply(e, n);
  return Sr(), Et(), i;
}
const dl = /* @__PURE__ */ br("__proto__,__v_isRef,__isVue"), _a = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rt)
);
function fl(e) {
  rt(e) || (e = String(e));
  const t = /* @__PURE__ */ fe(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class xa {
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
      return i === (r ? s ? wl : Ca : s ? Sa : ka).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const a = X(t);
    if (!r) {
      let l;
      if (a && (l = cl[n]))
        return l;
      if (n === "hasOwnProperty")
        return fl;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ je(t) ? t : i
    );
    if ((rt(n) ? _a.has(n) : dl(n)) || (r || Me(t, "get", n), s))
      return o;
    if (/* @__PURE__ */ je(o)) {
      const l = a && xr(n) ? o : o.value;
      return r && ve(l) ? /* @__PURE__ */ Qi(l) : l;
    }
    return ve(o) ? r ? /* @__PURE__ */ Qi(o) : /* @__PURE__ */ Vt(o) : o;
  }
}
class wa extends xa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    const a = X(t) && xr(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ot(s);
      if (!/* @__PURE__ */ Je(i) && !/* @__PURE__ */ Ot(i) && (s = /* @__PURE__ */ fe(s), i = /* @__PURE__ */ fe(i)), !a && /* @__PURE__ */ je(s) && !/* @__PURE__ */ je(i))
        return c || (s.value = i), !0;
    }
    const o = a ? Number(n) < t.length : pe(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ je(t) ? t : r
    );
    return t === /* @__PURE__ */ fe(r) && (o ? gt(i, s) && Tt(t, "set", n, i) : Tt(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = pe(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && i && Tt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!rt(n) || !_a.has(n)) && Me(t, "has", n), i;
  }
  ownKeys(t) {
    return Me(
      t,
      "iterate",
      X(t) ? "length" : Gt
    ), Reflect.ownKeys(t);
  }
}
class pl extends xa {
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
const hl = /* @__PURE__ */ new wa(), ml = /* @__PURE__ */ new pl(), gl = /* @__PURE__ */ new wa(!0);
const Yi = (e) => e, Wn = (e) => Reflect.getPrototypeOf(e);
function vl(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = /* @__PURE__ */ fe(r), a = an(s), o = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = r[e](...i), u = n ? Yi : t ? un : st;
    return !t && Me(
      s,
      "iterate",
      l ? Gi : Gt
    ), Ce(
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
function Kn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function yl(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ fe(s), o = /* @__PURE__ */ fe(r);
      e || (gt(r, o) && Me(a, "get", r), Me(a, "get", o));
      const { has: l } = Wn(a), c = t ? Yi : e ? un : st;
      if (l.call(a, r))
        return c(s.get(r));
      if (l.call(a, o))
        return c(s.get(o));
      s !== a && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Me(/* @__PURE__ */ fe(r), "iterate", Gt), r.size;
    },
    has(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ fe(s), o = /* @__PURE__ */ fe(r);
      return e || (gt(r, o) && Me(a, "has", r), Me(a, "has", o)), r === o ? s.has(r) : s.has(r) || s.has(o);
    },
    forEach(r, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ fe(o), c = t ? Yi : e ? un : st;
      return !e && Me(l, "iterate", Gt), o.forEach((u, d) => r.call(s, c(u), c(d), a));
    }
  };
  return Ce(
    n,
    e ? {
      add: Kn("add"),
      set: Kn("set"),
      delete: Kn("delete"),
      clear: Kn("clear")
    } : {
      add(r) {
        const s = /* @__PURE__ */ fe(this), a = Wn(s), o = /* @__PURE__ */ fe(r), l = !t && !/* @__PURE__ */ Je(r) && !/* @__PURE__ */ Ot(r) ? o : r;
        return a.has.call(s, l) || gt(r, l) && a.has.call(s, r) || gt(o, l) && a.has.call(s, o) || (s.add(l), Tt(s, "add", l, l)), this;
      },
      set(r, s) {
        !t && !/* @__PURE__ */ Je(s) && !/* @__PURE__ */ Ot(s) && (s = /* @__PURE__ */ fe(s));
        const a = /* @__PURE__ */ fe(this), { has: o, get: l } = Wn(a);
        let c = o.call(a, r);
        c || (r = /* @__PURE__ */ fe(r), c = o.call(a, r));
        const u = l.call(a, r);
        return a.set(r, s), c ? gt(s, u) && Tt(a, "set", r, s) : Tt(a, "add", r, s), this;
      },
      delete(r) {
        const s = /* @__PURE__ */ fe(this), { has: a, get: o } = Wn(s);
        let l = a.call(s, r);
        l || (r = /* @__PURE__ */ fe(r), l = a.call(s, r)), o && o.call(s, r);
        const c = s.delete(r);
        return l && Tt(s, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ fe(this), s = r.size !== 0, a = r.clear();
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
    n[r] = vl(r, e, t);
  }), n;
}
function Ar(e, t) {
  const n = yl(e, t);
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    pe(n, r) && r in i ? n : i,
    r,
    s
  );
}
const bl = {
  get: /* @__PURE__ */ Ar(!1, !1)
}, _l = {
  get: /* @__PURE__ */ Ar(!1, !0)
}, xl = {
  get: /* @__PURE__ */ Ar(!0, !1)
};
const ka = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), wl = /* @__PURE__ */ new WeakMap();
function kl(e) {
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
  return /* @__PURE__ */ Ot(e) ? e : $r(
    e,
    !1,
    hl,
    bl,
    ka
  );
}
// @__NO_SIDE_EFFECTS__
function Sl(e) {
  return $r(
    e,
    !1,
    gl,
    _l,
    Sa
  );
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
  return $r(
    e,
    !0,
    ml,
    xl,
    Ca
  );
}
function $r(e, t, n, i, r) {
  if (!ve(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = kl(Ko(e));
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
function Ir(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function fe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ fe(t) : e;
}
function Cl(e) {
  return !pe(e, "__v_skip") && Object.isExtensible(e) && la(e, "__v_skip", !0), e;
}
const st = (e) => ve(e) ? /* @__PURE__ */ Vt(e) : e, un = (e) => ve(e) ? /* @__PURE__ */ Qi(e) : e;
// @__NO_SIDE_EFFECTS__
function je(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return Tl(e, !1);
}
function Tl(e, t) {
  return /* @__PURE__ */ je(e) ? e : new Al(e, t);
}
class Al {
  constructor(t, n) {
    this.dep = new Tr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ fe(t), this._value = n ? t : st(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ Ot(t);
    t = i ? t : /* @__PURE__ */ fe(t), gt(t, n) && (this._rawValue = t, this._value = i ? t : st(t), this.dep.trigger());
  }
}
function P(e) {
  return /* @__PURE__ */ je(e) ? e.value : e;
}
const $l = {
  get: (e, t, n) => t === "__v_raw" ? e : P(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return /* @__PURE__ */ je(r) && !/* @__PURE__ */ je(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Ta(e) {
  return /* @__PURE__ */ Yt(e) ? e : new Proxy(e, $l);
}
class Il {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Tr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    xe !== this)
      return ha(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return va(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function El(e, t, n = !1) {
  let i, r;
  return ne(e) ? i = e : (i = e.get, r = e.set), new Il(i, r, n);
}
const Gn = {}, Qn = /* @__PURE__ */ new WeakMap();
let Wt;
function Ol(e, t = !1, n = Wt) {
  if (n) {
    let i = Qn.get(n);
    i || Qn.set(n, i = []), i.push(e);
  }
}
function Pl(e, t, n = we) {
  const { immediate: i, deep: r, once: s, scheduler: a, augmentJob: o, call: l } = n, c = (B) => r ? B : /* @__PURE__ */ Je(B) || r === !1 || r === 0 ? jt(B, 1) : jt(B);
  let u, d, p, m, E = !1, w = !1;
  if (/* @__PURE__ */ je(e) ? (d = () => e.value, E = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ Yt(e) ? (d = () => c(e), E = !0) : X(e) ? (w = !0, E = e.some((B) => /* @__PURE__ */ Yt(B) || /* @__PURE__ */ Je(B)), d = () => e.map((B) => {
    if (/* @__PURE__ */ je(B))
      return B.value;
    if (/* @__PURE__ */ Yt(B))
      return c(B);
    if (ne(B))
      return l ? l(B, 2) : B();
  })) : ne(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (p) {
      It();
      try {
        p();
      } finally {
        Et();
      }
    }
    const B = Wt;
    Wt = u;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      Wt = B;
    }
  } : d = vt, t && r) {
    const B = d, y = r === !0 ? 1 / 0 : r;
    d = () => jt(B(), y);
  }
  const O = al(), Z = () => {
    u.stop(), O && O.active && _r(O.effects, u);
  };
  if (s && t) {
    const B = t;
    t = (...y) => {
      B(...y), Z();
    };
  }
  let z = w ? new Array(e.length).fill(Gn) : Gn;
  const G = (B) => {
    if (!(!(u.flags & 1) || !u.dirty && !B))
      if (t) {
        const y = u.run();
        if (r || E || (w ? y.some((N, A) => gt(N, z[A])) : gt(y, z))) {
          p && p();
          const N = Wt;
          Wt = u;
          try {
            const A = [
              y,
              // pass undefined as the old value when it's changed for the first time
              z === Gn ? void 0 : w && z[0] === Gn ? [] : z,
              m
            ];
            z = y, l ? l(t, 3, A) : (
              // @ts-expect-error
              t(...A)
            );
          } finally {
            Wt = N;
          }
        }
      } else
        u.run();
  };
  return o && o(G), u = new fa(d), u.scheduler = a ? () => a(G, !1) : G, m = (B) => Ol(B, !1, u), p = u.onStop = () => {
    const B = Qn.get(u);
    if (B) {
      if (l)
        l(B, 4);
      else
        for (const y of B) y();
      Qn.delete(u);
    }
  }, t ? i ? G(!0) : z = u.run() : a ? a(G.bind(null, !0), !0) : u.run(), Z.pause = u.pause.bind(u), Z.resume = u.resume.bind(u), Z.stop = Z, Z;
}
function jt(e, t = 1 / 0, n) {
  if (t <= 0 || !ve(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ je(e))
    jt(e.value, t, n);
  else if (X(e))
    for (let i = 0; i < e.length; i++)
      jt(e[i], t, n);
  else if (sa(e) || an(e))
    e.forEach((i) => {
      jt(i, t, n);
    });
  else if (bi(e)) {
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
function qn(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (r) {
    Ci(r, t, n);
  }
}
function at(e, t, n, i) {
  if (ne(e)) {
    const r = qn(e, t, n, i);
    return r && aa(r) && r.catch((s) => {
      Ci(s, t, n);
    }), r;
  }
  if (X(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(at(e[s], t, n, i));
    return r;
  }
}
function Ci(e, t, n, i = !0) {
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
      It(), qn(s, null, 10, [
        e,
        l,
        c
      ]), Et();
      return;
    }
  }
  Nl(e, n, r, i, a);
}
function Nl(e, t, n, i = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ze = [];
let pt = -1;
const on = [];
let Mt = null, nn = 0;
const Aa = /* @__PURE__ */ Promise.resolve();
let Jn = null;
function Ti(e) {
  const t = Jn || Aa;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rl(e) {
  let t = pt + 1, n = ze.length;
  for (; t < n; ) {
    const i = t + n >>> 1, r = ze[i], s = Mn(r);
    s < e || s === e && r.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Er(e) {
  if (!(e.flags & 1)) {
    const t = Mn(e), n = ze[ze.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Mn(n) ? ze.push(e) : ze.splice(Rl(t), 0, e), e.flags |= 1, $a();
  }
}
function $a() {
  Jn || (Jn = Aa.then(Ea));
}
function Ml(e) {
  X(e) ? on.push(...e) : Mt && e.id === -1 ? Mt.splice(nn + 1, 0, e) : e.flags & 1 || (on.push(e), e.flags |= 1), $a();
}
function ss(e, t, n = pt + 1) {
  for (; n < ze.length; n++) {
    const i = ze[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      ze.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Ia(e) {
  if (on.length) {
    const t = [...new Set(on)].sort(
      (n, i) => Mn(n) - Mn(i)
    );
    if (on.length = 0, Mt) {
      Mt.push(...t);
      return;
    }
    for (Mt = t, nn = 0; nn < Mt.length; nn++) {
      const n = Mt[nn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Mt = null, nn = 0;
  }
}
const Mn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ea(e) {
  try {
    for (pt = 0; pt < ze.length; pt++) {
      const t = ze[pt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), qn(
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
    pt = -1, ze.length = 0, Ia(), Jn = null, (ze.length || on.length) && Ea();
  }
}
let Ve = null, Oa = null;
function Xn(e) {
  const t = Ve;
  return Ve = e, Oa = e && e.type.__scopeId || null, t;
}
function Pa(e, t = Ve, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && vs(-1);
    const s = Xn(t);
    let a;
    try {
      a = e(...r);
    } finally {
      Xn(s), i._d && vs(1);
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
function Ji(e, t) {
  if (Fe) {
    let n = Fe.provides;
    const i = Fe.parent && Fe.parent.provides;
    i === n && (n = Fe.provides = Object.create(i)), n[e] = t;
  }
}
function Lt(e, t, n = !1) {
  const i = oo();
  if (i || cn) {
    let r = cn ? cn._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(i && i.proxy) : t;
  }
}
const Fl = /* @__PURE__ */ Symbol.for("v-scx"), jl = () => Lt(Fl);
function yt(e, t, n) {
  return Na(e, t, n);
}
function Na(e, t, n = we) {
  const { immediate: i, deep: r, flush: s, once: a } = n, o = Ce({}, n), l = t && i || !t && s !== "post";
  let c;
  if (jn) {
    if (s === "sync") {
      const m = jl();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = vt, m.resume = vt, m.pause = vt, m;
    }
  }
  const u = Fe;
  o.call = (m, E, w) => at(m, u, E, w);
  let d = !1;
  s === "post" ? o.scheduler = (m) => {
    qe(m, u && u.suspense);
  } : s !== "sync" && (d = !0, o.scheduler = (m, E) => {
    E ? m() : Er(m);
  }), o.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const p = Pl(e, t, o);
  return jn && (c ? c.push(p) : l && p()), p;
}
function Dl(e, t, n) {
  const i = this.proxy, r = Se(e) ? e.includes(".") ? Ra(i, e) : () => i[e] : e.bind(i, i);
  let s;
  ne(t) ? s = t : (s = t.handler, n = t);
  const a = Zn(this), o = Na(r, s.bind(i), n);
  return a(), o;
}
function Ra(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
const Ll = /* @__PURE__ */ Symbol("_vte"), zl = (e) => e.__isTeleport, zi = /* @__PURE__ */ Symbol("_leaveCb");
function Or(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Or(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ma(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function as(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ei = /* @__PURE__ */ new WeakMap();
function En(e, t, n, i, r = !1) {
  if (X(e)) {
    e.forEach(
      (w, O) => En(
        w,
        t && (X(t) ? t[O] : t),
        n,
        i,
        r
      )
    );
    return;
  }
  if (ln(i) && !r) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && En(e, t, n, i.component.subTree);
    return;
  }
  const s = i.shapeFlag & 4 ? Dr(i.component) : i.el, a = r ? null : s, { i: o, r: l } = e, c = t && t.r, u = o.refs === we ? o.refs = {} : o.refs, d = o.setupState, p = /* @__PURE__ */ fe(d), m = d === we ? ra : (w) => as(u, w) ? !1 : pe(p, w), E = (w, O) => !(O && as(u, O));
  if (c != null && c !== l) {
    if (os(t), Se(c))
      u[c] = null, m(c) && (d[c] = null);
    else if (/* @__PURE__ */ je(c)) {
      const w = t;
      E(c, w.k) && (c.value = null), w.k && (u[w.k] = null);
    }
  }
  if (ne(l))
    qn(l, o, 12, [a, u]);
  else {
    const w = Se(l), O = /* @__PURE__ */ je(l);
    if (w || O) {
      const Z = () => {
        if (e.f) {
          const z = w ? m(l) ? d[l] : u[l] : E() || !e.k ? l.value : u[e.k];
          if (r)
            X(z) && _r(z, s);
          else if (X(z))
            z.includes(s) || z.push(s);
          else if (w)
            u[l] = [s], m(l) && (d[l] = u[l]);
          else {
            const G = [s];
            E(l, e.k) && (l.value = G), e.k && (u[e.k] = G);
          }
        } else w ? (u[l] = a, m(l) && (d[l] = a)) : O && (E(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const z = () => {
          Z(), ei.delete(e);
        };
        z.id = -1, ei.set(e, z), qe(z, n);
      } else
        os(e), Z();
    }
  }
}
function os(e) {
  const t = ei.get(e);
  t && (t.flags |= 8, ei.delete(e));
}
wi().requestIdleCallback;
wi().cancelIdleCallback;
const ln = (e) => !!e.type.__asyncLoader, Fa = (e) => e.type.__isKeepAlive;
function Vl(e, t) {
  ja(e, "a", t);
}
function Ul(e, t) {
  ja(e, "da", t);
}
function ja(e, t, n = Fe) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Ai(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Fa(r.parent.vnode) && ql(i, t, n, r), r = r.parent;
  }
}
function ql(e, t, n, i) {
  const r = Ai(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  La(() => {
    _r(i[t], r);
  }, n);
}
function Ai(e, t, n = Fe, i = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      It();
      const o = Zn(n), l = at(t, n, e, a);
      return o(), Et(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const Rt = (e) => (t, n = Fe) => {
  (!jn || e === "sp") && Ai(e, (...i) => t(...i), n);
}, Zl = Rt("bm"), Pr = Rt("m"), Hl = Rt(
  "bu"
), Bl = Rt("u"), Da = Rt(
  "bum"
), La = Rt("um"), Wl = Rt(
  "sp"
), Kl = Rt("rtg"), Gl = Rt("rtc");
function Yl(e, t = Fe) {
  Ai("ec", e, t);
}
const Ql = "components", za = /* @__PURE__ */ Symbol.for("v-ndc");
function Jl(e) {
  return Se(e) ? Xl(Ql, e, !1) || e : e || za;
}
function Xl(e, t, n = !0, i = !1) {
  const r = Ve || Fe;
  if (r) {
    const s = r.type;
    {
      const o = Dc(
        s,
        !1
      );
      if (o && (o === t || o === Ee(t) || o === xi(Ee(t))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      ls(r[e] || s[e], t) || // global registration
      ls(r.appContext[e], t)
    );
    return !a && i ? s : a;
  }
}
function ls(e, t) {
  return e && (e[t] || e[Ee(t)] || e[xi(Ee(t))]);
}
function Re(e, t, n, i) {
  let r;
  const s = n, a = X(e);
  if (a || Se(e)) {
    const o = a && /* @__PURE__ */ Yt(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ Je(e), c = /* @__PURE__ */ Ot(e), e = Si(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        l ? c ? un(st(e[u])) : st(e[u]) : e[u],
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
function ec(e, t, n = {}, i, r) {
  if (Ve.ce || Ve.parent && ln(Ve.parent) && Ve.parent.ce) {
    const c = Object.keys(n).length > 0;
    return v(), Ie(
      oe,
      null,
      [Xe("slot", n, i)],
      c ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), v();
  const a = s && Va(s(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = Ie(
    oe,
    {
      key: (o && !rt(o) ? o : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && i ? "_fb" : "")
    },
    a || [],
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Va(e) {
  return e.some((t) => Mr(t) ? !(t.type === Pt || t.type === oe && !Va(t.children)) : !0) ? e : null;
}
const Xi = (e) => e ? lo(e) ? Dr(e) : Xi(e.parent) : null, On = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Xi(e.parent),
    $root: (e) => Xi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => qa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Er(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ti.bind(e.proxy)),
    $watch: (e) => Dl.bind(e)
  })
), Vi = (e, t) => e !== we && !e.__isScriptSetup && pe(e, t), tc = {
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
        if (Vi(i, t))
          return a[t] = 1, i[t];
        if (r !== we && pe(r, t))
          return a[t] = 2, r[t];
        if (pe(s, t))
          return a[t] = 3, s[t];
        if (n !== we && pe(n, t))
          return a[t] = 4, n[t];
        er && (a[t] = 0);
      }
    }
    const c = On[t];
    let u, d;
    if (c)
      return t === "$attrs" && Me(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== we && pe(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, pe(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: r, ctx: s } = e;
    return Vi(r, t) ? (r[t] = n, !0) : i !== we && pe(i, t) ? (i[t] = n, !0) : pe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, props: s, type: a }
  }, o) {
    let l;
    return !!(n[o] || e !== we && o[0] !== "$" && pe(e, o) || Vi(t, o) || pe(s, o) || pe(i, o) || pe(On, o) || pe(r.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : pe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function cs(e) {
  return X(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let er = !0;
function nc(e) {
  const t = qa(e), n = e.proxy, i = e.ctx;
  er = !1, t.beforeCreate && us(t.beforeCreate, e, "bc");
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
    updated: E,
    activated: w,
    deactivated: O,
    beforeDestroy: Z,
    beforeUnmount: z,
    destroyed: G,
    unmounted: B,
    render: y,
    renderTracked: N,
    renderTriggered: A,
    errorCaptured: ee,
    serverPrefetch: le,
    // public API
    expose: De,
    inheritAttrs: T,
    // assets
    components: j,
    directives: re,
    filters: ke
  } = t;
  if (c && ic(c, i, null), a)
    for (const _e in a) {
      const he = a[_e];
      ne(he) && (i[_e] = he.bind(n));
    }
  if (r) {
    const _e = r.call(n, n);
    ve(_e) && (e.data = /* @__PURE__ */ Vt(_e));
  }
  if (er = !0, s)
    for (const _e in s) {
      const he = s[_e], qt = ne(he) ? he.bind(n, n) : ne(he.get) ? he.get.bind(n, n) : vt, Hn = !ne(he) && ne(he.set) ? he.set.bind(n) : vt, Zt = te({
        get: qt,
        set: Hn
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
      Ua(o[_e], i, n, _e);
  if (l) {
    const _e = ne(l) ? l.call(n) : l;
    Reflect.ownKeys(_e).forEach((he) => {
      Ji(he, _e[he]);
    });
  }
  u && us(u, e, "c");
  function Oe(_e, he) {
    X(he) ? he.forEach((qt) => _e(qt.bind(n))) : he && _e(he.bind(n));
  }
  if (Oe(Zl, d), Oe(Pr, p), Oe(Hl, m), Oe(Bl, E), Oe(Vl, w), Oe(Ul, O), Oe(Yl, ee), Oe(Gl, N), Oe(Kl, A), Oe(Da, z), Oe(La, B), Oe(Wl, le), X(De))
    if (De.length) {
      const _e = e.exposed || (e.exposed = {});
      De.forEach((he) => {
        Object.defineProperty(_e, he, {
          get: () => n[he],
          set: (qt) => n[he] = qt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === vt && (e.render = y), T != null && (e.inheritAttrs = T), j && (e.components = j), re && (e.directives = re), le && Ma(e);
}
function ic(e, t, n = vt) {
  X(e) && (e = tr(e));
  for (const i in e) {
    const r = e[i];
    let s;
    ve(r) ? "default" in r ? s = Lt(
      r.from || i,
      r.default,
      !0
    ) : s = Lt(r.from || i) : s = Lt(r), /* @__PURE__ */ je(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[i] = s;
  }
}
function us(e, t, n) {
  at(
    X(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ua(e, t, n, i) {
  let r = i.includes(".") ? Ra(n, i) : () => n[i];
  if (Se(e)) {
    const s = t[e];
    ne(s) && yt(r, s);
  } else if (ne(e))
    yt(r, e.bind(n));
  else if (ve(e))
    if (X(e))
      e.forEach((s) => Ua(s, t, n, i));
    else {
      const s = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(s) && yt(r, s, e);
    }
}
function qa(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, o = s.get(t);
  let l;
  return o ? l = o : !r.length && !n && !i ? l = t : (l = {}, r.length && r.forEach(
    (c) => ti(l, c, a, !0)
  ), ti(l, t, a)), ve(t) && s.set(t, l), l;
}
function ti(e, t, n, i = !1) {
  const { mixins: r, extends: s } = t;
  s && ti(e, s, n, !0), r && r.forEach(
    (a) => ti(e, a, n, !0)
  );
  for (const a in t)
    if (!(i && a === "expose")) {
      const o = rc[a] || n && n[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const rc = {
  data: ds,
  props: fs,
  emits: fs,
  // objects
  methods: wn,
  computed: wn,
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
  components: wn,
  directives: wn,
  // watch
  watch: ac,
  // provide / inject
  provide: ds,
  inject: sc
};
function ds(e, t) {
  return t ? e ? function() {
    return Ce(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sc(e, t) {
  return wn(tr(e), tr(t));
}
function tr(e) {
  if (X(e)) {
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
function wn(e, t) {
  return e ? Ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fs(e, t) {
  return e ? X(e) && X(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ce(
    /* @__PURE__ */ Object.create(null),
    cs(e),
    cs(t ?? {})
  ) : t;
}
function ac(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ce(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Le(e[i], t[i]);
  return n;
}
function Za() {
  return {
    app: null,
    config: {
      isNativeTag: ra,
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
let oc = 0;
function lc(e, t) {
  return function(i, r = null) {
    ne(i) || (i = Ce({}, i)), r != null && !ve(r) && (r = null);
    const s = Za(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = s.app = {
      _uid: oc++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: zc,
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
          return m.appContext = s, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(m, u, p), l = !0, c._container = u, u.__vue_app__ = c, Dr(m.component);
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
        const d = cn;
        cn = c;
        try {
          return u();
        } finally {
          cn = d;
        }
      }
    };
    return c;
  };
}
let cn = null;
const cc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ee(t)}Modifiers`] || e[`${We(t)}Modifiers`];
function uc(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || we;
  let r = n;
  const s = t.startsWith("update:"), a = s && cc(i, t.slice(7));
  a && (a.trim && (r = n.map((u) => Se(u) ? u.trim() : u)), a.number && (r = n.map(Qo)));
  let o, l = i[o = Ri(t)] || // also try camelCase event handler (#2249)
  i[o = Ri(Ee(t))];
  !l && s && (l = i[o = Ri(We(t))]), l && at(
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
const dc = /* @__PURE__ */ new WeakMap();
function Ha(e, t, n = !1) {
  const i = n ? dc : t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let a = {}, o = !1;
  if (!ne(e)) {
    const l = (c) => {
      const u = Ha(c, t, !0);
      u && (o = !0, Ce(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !o ? (ve(e) && i.set(e, null), null) : (X(s) ? s.forEach((l) => a[l] = null) : Ce(a, s), ve(e) && i.set(e, a), a);
}
function $i(e, t) {
  return !e || !vi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), pe(e, t[0].toLowerCase() + t.slice(1)) || pe(e, We(t)) || pe(e, t));
}
function ps(e) {
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
    ctx: E,
    inheritAttrs: w
  } = e, O = Xn(e);
  let Z, z;
  try {
    if (n.shapeFlag & 4) {
      const B = r || i, y = B;
      Z = mt(
        c.call(
          y,
          B,
          u,
          d,
          m,
          p,
          E
        )
      ), z = o;
    } else {
      const B = t;
      Z = mt(
        B.length > 1 ? B(
          d,
          { attrs: o, slots: a, emit: l }
        ) : B(
          d,
          null
        )
      ), z = t.props ? o : fc(o);
    }
  } catch (B) {
    Pn.length = 0, Ci(B, e, 1), Z = Xe(Pt);
  }
  let G = Z;
  if (z && w !== !1) {
    const B = Object.keys(z), { shapeFlag: y } = G;
    B.length && y & 7 && (s && B.some(yi) && (z = pc(
      z,
      s
    )), G = dn(G, z, !1, !0));
  }
  return n.dirs && (G = dn(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition && Or(G, n.transition), Z = G, Xn(O), Z;
}
const fc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, pc = (e, t) => {
  const n = {};
  for (const i in e)
    (!yi(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function hc(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: a, children: o, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? hs(i, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (Ba(a, i, p) && !$i(c, p))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : i === a ? !1 : i ? a ? hs(i, a, c) : !0 : !!a;
  return !1;
}
function hs(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (Ba(t, e, s) && !$i(n, s))
      return !0;
  }
  return !1;
}
function Ba(e, t, n) {
  const i = e[n], r = t[n];
  return n === "style" && ve(i) && ve(r) ? !wr(i, r) : i !== r;
}
function mc({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = i, e = r), r === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Wa = {}, Ka = () => Object.create(Wa), Ga = (e) => Object.getPrototypeOf(e) === Wa;
function gc(e, t, n, i = !1) {
  const r = {}, s = Ka();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ya(e, t, r, s);
  for (const a in e.propsOptions[0])
    a in r || (r[a] = void 0);
  n ? e.props = i ? r : /* @__PURE__ */ Sl(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function vc(e, t, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, o = /* @__PURE__ */ fe(r), [l] = e.propsOptions;
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
        if ($i(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (l)
          if (pe(s, p))
            m !== s[p] && (s[p] = m, c = !0);
          else {
            const E = Ee(p);
            r[E] = nr(
              l,
              o,
              E,
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
    Ya(e, t, r, s) && (c = !0);
    let u;
    for (const d in o)
      (!t || // for camelCase
      !pe(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = We(d)) === d || !pe(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = nr(
        l,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (s !== o)
      for (const d in s)
        (!t || !pe(t, d)) && (delete s[d], c = !0);
  }
  c && Tt(e.attrs, "set", "");
}
function Ya(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let a = !1, o;
  if (t)
    for (let l in t) {
      if (An(l))
        continue;
      const c = t[l];
      let u;
      r && pe(r, u = Ee(l)) ? !s || !s.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : $i(e.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ fe(n), c = o || we;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = nr(
        r,
        l,
        d,
        c[d],
        e,
        !pe(c, d)
      );
    }
  }
  return a;
}
function nr(e, t, n, i, r, s) {
  const a = e[n];
  if (a != null) {
    const o = pe(a, "default");
    if (o && i === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ne(l)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const u = Zn(r);
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
const yc = /* @__PURE__ */ new WeakMap();
function Qa(e, t, n = !1) {
  const i = n ? yc : t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, a = {}, o = [];
  let l = !1;
  if (!ne(e)) {
    const u = (d) => {
      l = !0;
      const [p, m] = Qa(d, t, !0);
      Ce(a, p), m && o.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return ve(e) && i.set(e, sn), sn;
  if (X(s))
    for (let u = 0; u < s.length; u++) {
      const d = Ee(s[u]);
      ms(d) && (a[d] = we);
    }
  else if (s)
    for (const u in s) {
      const d = Ee(u);
      if (ms(d)) {
        const p = s[u], m = a[d] = X(p) || ne(p) ? { type: p } : Ce({}, p), E = m.type;
        let w = !1, O = !0;
        if (X(E))
          for (let Z = 0; Z < E.length; ++Z) {
            const z = E[Z], G = ne(z) && z.name;
            if (G === "Boolean") {
              w = !0;
              break;
            } else G === "String" && (O = !1);
          }
        else
          w = ne(E) && E.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = w, m[
          1
          /* shouldCastTrue */
        ] = O, (w || pe(m, "default")) && o.push(d);
      }
    }
  const c = [a, o];
  return ve(e) && i.set(e, c), c;
}
function ms(e) {
  return e[0] !== "$" && !An(e);
}
const Nr = (e) => e === "_" || e === "_ctx" || e === "$stable", Rr = (e) => X(e) ? e.map(mt) : [mt(e)], bc = (e, t, n) => {
  if (t._n)
    return t;
  const i = Pa((...r) => Rr(t(...r)), n);
  return i._c = !1, i;
}, Ja = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if (Nr(r)) continue;
    const s = e[r];
    if (ne(s))
      t[r] = bc(r, s, i);
    else if (s != null) {
      const a = Rr(s);
      t[r] = () => a;
    }
  }
}, Xa = (e, t) => {
  const n = Rr(t);
  e.slots.default = () => n;
}, eo = (e, t, n) => {
  for (const i in t)
    (n || !Nr(i)) && (e[i] = t[i]);
}, _c = (e, t, n) => {
  const i = e.slots = Ka();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (eo(i, t, n), n && la(i, "_", r, !0)) : Ja(t, i);
  } else t && Xa(e, t);
}, xc = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, a = we;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? s = !1 : eo(r, t, n) : (s = !t.$stable, Ja(t, r)), a = t;
  } else t && (Xa(e, t), a = { default: 1 });
  if (s)
    for (const o in r)
      !Nr(o) && a[o] == null && delete r[o];
}, qe = Tc;
function wc(e) {
  return kc(e);
}
function kc(e, t) {
  const n = wi();
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
    insertStaticContent: E
  } = e, w = (f, h, g, k = null, _ = null, b = null, R = void 0, I = null, $ = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !yn(f, h) && (k = Bn(f), lt(f, _, b, !0), f = null), h.patchFlag === -2 && ($ = !1, h.dynamicChildren = null);
    const { type: x, ref: K, shapeFlag: F } = h;
    switch (x) {
      case Ii:
        O(f, h, g, k);
        break;
      case Pt:
        Z(f, h, g, k);
        break;
      case qi:
        f == null && z(h, g, k, R);
        break;
      case oe:
        j(
          f,
          h,
          g,
          k,
          _,
          b,
          R,
          I,
          $
        );
        break;
      default:
        F & 1 ? y(
          f,
          h,
          g,
          k,
          _,
          b,
          R,
          I,
          $
        ) : F & 6 ? re(
          f,
          h,
          g,
          k,
          _,
          b,
          R,
          I,
          $
        ) : (F & 64 || F & 128) && x.process(
          f,
          h,
          g,
          k,
          _,
          b,
          R,
          I,
          $,
          mn
        );
    }
    K != null && _ ? En(K, f && f.ref, b, h || f, !h) : K == null && f && f.ref != null && En(f.ref, null, b, f, !0);
  }, O = (f, h, g, k) => {
    if (f == null)
      i(
        h.el = o(h.children),
        g,
        k
      );
    else {
      const _ = h.el = f.el;
      h.children !== f.children && c(_, h.children);
    }
  }, Z = (f, h, g, k) => {
    f == null ? i(
      h.el = l(h.children || ""),
      g,
      k
    ) : h.el = f.el;
  }, z = (f, h, g, k) => {
    [f.el, f.anchor] = E(
      f.children,
      h,
      g,
      k,
      f.el,
      f.anchor
    );
  }, G = ({ el: f, anchor: h }, g, k) => {
    let _;
    for (; f && f !== h; )
      _ = p(f), i(f, g, k), f = _;
    i(h, g, k);
  }, B = ({ el: f, anchor: h }) => {
    let g;
    for (; f && f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, y = (f, h, g, k, _, b, R, I, $) => {
    if (h.type === "svg" ? R = "svg" : h.type === "math" && (R = "mathml"), f == null)
      N(
        h,
        g,
        k,
        _,
        b,
        R,
        I,
        $
      );
    else {
      const x = f.el && f.el._isVueCE ? f.el : null;
      try {
        x && x._beginPatch(), le(
          f,
          h,
          _,
          b,
          R,
          I,
          $
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, N = (f, h, g, k, _, b, R, I) => {
    let $, x;
    const { props: K, shapeFlag: F, transition: W, dirs: J } = f;
    if ($ = f.el = a(
      f.type,
      b,
      K && K.is,
      K
    ), F & 8 ? u($, f.children) : F & 16 && ee(
      f.children,
      $,
      null,
      k,
      _,
      Ui(f, b),
      R,
      I
    ), J && Ht(f, null, k, "created"), A($, f, f.scopeId, R, k), K) {
      for (const ye in K)
        ye !== "value" && !An(ye) && s($, ye, null, K[ye], b, k);
      "value" in K && s($, "value", null, K.value, b), (x = K.onVnodeBeforeMount) && ft(x, k, f);
    }
    J && Ht(f, null, k, "beforeMount");
    const ce = Sc(_, W);
    ce && W.beforeEnter($), i($, h, g), ((x = K && K.onVnodeMounted) || ce || J) && qe(() => {
      try {
        x && ft(x, k, f), ce && W.enter($), J && Ht(f, null, k, "mounted");
      } finally {
      }
    }, _);
  }, A = (f, h, g, k, _) => {
    if (g && m(f, g), k)
      for (let b = 0; b < k.length; b++)
        m(f, k[b]);
    if (_) {
      let b = _.subTree;
      if (h === b || ro(b.type) && (b.ssContent === h || b.ssFallback === h)) {
        const R = _.vnode;
        A(
          f,
          R,
          R.scopeId,
          R.slotScopeIds,
          _.parent
        );
      }
    }
  }, ee = (f, h, g, k, _, b, R, I, $ = 0) => {
    for (let x = $; x < f.length; x++) {
      const K = f[x] = I ? Ct(f[x]) : mt(f[x]);
      w(
        null,
        K,
        h,
        g,
        k,
        _,
        b,
        R,
        I
      );
    }
  }, le = (f, h, g, k, _, b, R) => {
    const I = h.el = f.el;
    let { patchFlag: $, dynamicChildren: x, dirs: K } = h;
    $ |= f.patchFlag & 16;
    const F = f.props || we, W = h.props || we;
    let J;
    if (g && Bt(g, !1), (J = W.onVnodeBeforeUpdate) && ft(J, g, h, f), K && Ht(h, f, g, "beforeUpdate"), g && Bt(g, !0), (F.innerHTML && W.innerHTML == null || F.textContent && W.textContent == null) && u(I, ""), x ? De(
      f.dynamicChildren,
      x,
      I,
      g,
      k,
      Ui(h, _),
      b
    ) : R || he(
      f,
      h,
      I,
      null,
      g,
      k,
      Ui(h, _),
      b,
      !1
    ), $ > 0) {
      if ($ & 16)
        T(I, F, W, g, _);
      else if ($ & 2 && F.class !== W.class && s(I, "class", null, W.class, _), $ & 4 && s(I, "style", F.style, W.style, _), $ & 8) {
        const ce = h.dynamicProps;
        for (let ye = 0; ye < ce.length; ye++) {
          const me = ce[ye], Ae = F[me], Pe = W[me];
          (Pe !== Ae || me === "value") && s(I, me, Ae, Pe, _, g);
        }
      }
      $ & 1 && f.children !== h.children && u(I, h.children);
    } else !R && x == null && T(I, F, W, g, _);
    ((J = W.onVnodeUpdated) || K) && qe(() => {
      J && ft(J, g, h, f), K && Ht(h, f, g, "updated");
    }, k);
  }, De = (f, h, g, k, _, b, R) => {
    for (let I = 0; I < h.length; I++) {
      const $ = f[I], x = h[I], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        $.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        ($.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !yn($, x) || // - In the case of a component, it could contain anything.
        $.shapeFlag & 198) ? d($.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      w(
        $,
        x,
        K,
        null,
        k,
        _,
        b,
        R,
        !0
      );
    }
  }, T = (f, h, g, k, _) => {
    if (h !== g) {
      if (h !== we)
        for (const b in h)
          !An(b) && !(b in g) && s(
            f,
            b,
            h[b],
            null,
            _,
            k
          );
      for (const b in g) {
        if (An(b)) continue;
        const R = g[b], I = h[b];
        R !== I && b !== "value" && s(f, b, I, R, _, k);
      }
      "value" in g && s(f, "value", h.value, g.value, _);
    }
  }, j = (f, h, g, k, _, b, R, I, $) => {
    const x = h.el = f ? f.el : o(""), K = h.anchor = f ? f.anchor : o("");
    let { patchFlag: F, dynamicChildren: W, slotScopeIds: J } = h;
    J && (I = I ? I.concat(J) : J), f == null ? (i(x, g, k), i(K, g, k), ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      g,
      K,
      _,
      b,
      R,
      I,
      $
    )) : F > 0 && F & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === W.length ? (De(
      f.dynamicChildren,
      W,
      g,
      _,
      b,
      R,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || _ && h === _.subTree) && to(
      f,
      h,
      !0
      /* shallow */
    )) : he(
      f,
      h,
      g,
      K,
      _,
      b,
      R,
      I,
      $
    );
  }, re = (f, h, g, k, _, b, R, I, $) => {
    h.slotScopeIds = I, f == null ? h.shapeFlag & 512 ? _.ctx.activate(
      h,
      g,
      k,
      R,
      $
    ) : ke(
      h,
      g,
      k,
      _,
      b,
      R,
      $
    ) : He(f, h, $);
  }, ke = (f, h, g, k, _, b, R) => {
    const I = f.component = Nc(
      f,
      k,
      _
    );
    if (Fa(f) && (I.ctx.renderer = mn), Rc(I, !1, R), I.asyncDep) {
      if (_ && _.registerDep(I, Oe, R), !f.el) {
        const $ = I.subTree = Xe(Pt);
        Z(null, $, h, g), f.placeholder = $.el;
      }
    } else
      Oe(
        I,
        f,
        h,
        g,
        _,
        b,
        R
      );
  }, He = (f, h, g) => {
    const k = h.component = f.component;
    if (hc(f, h, g))
      if (k.asyncDep && !k.asyncResolved) {
        _e(k, h, g);
        return;
      } else
        k.next = h, k.update();
    else
      h.el = f.el, k.vnode = h;
  }, Oe = (f, h, g, k, _, b, R) => {
    const I = () => {
      if (f.isMounted) {
        let { next: F, bu: W, u: J, parent: ce, vnode: ye } = f;
        {
          const ut = no(f);
          if (ut) {
            F && (F.el = ye.el, _e(f, F, R)), ut.asyncDep.then(() => {
              qe(() => {
                f.isUnmounted || x();
              }, _);
            });
            return;
          }
        }
        let me = F, Ae;
        Bt(f, !1), F ? (F.el = ye.el, _e(f, F, R)) : F = ye, W && Mi(W), (Ae = F.props && F.props.onVnodeBeforeUpdate) && ft(Ae, ce, F, ye), Bt(f, !0);
        const Pe = ps(f), ct = f.subTree;
        f.subTree = Pe, w(
          ct,
          Pe,
          // parent may have changed if it's in a teleport
          d(ct.el),
          // anchor may have changed if it's in a fragment
          Bn(ct),
          f,
          _,
          b
        ), F.el = Pe.el, me === null && mc(f, Pe.el), J && qe(J, _), (Ae = F.props && F.props.onVnodeUpdated) && qe(
          () => ft(Ae, ce, F, ye),
          _
        );
      } else {
        let F;
        const { el: W, props: J } = h, { bm: ce, m: ye, parent: me, root: Ae, type: Pe } = f, ct = ln(h);
        Bt(f, !1), ce && Mi(ce), !ct && (F = J && J.onVnodeBeforeMount) && ft(F, me, h), Bt(f, !0);
        {
          Ae.ce && Ae.ce._hasShadowRoot() && Ae.ce._injectChildStyle(
            Pe,
            f.parent ? f.parent.type : void 0
          );
          const ut = f.subTree = ps(f);
          w(
            null,
            ut,
            g,
            k,
            f,
            _,
            b
          ), h.el = ut.el;
        }
        if (ye && qe(ye, _), !ct && (F = J && J.onVnodeMounted)) {
          const ut = h;
          qe(
            () => ft(F, me, ut),
            _
          );
        }
        (h.shapeFlag & 256 || me && ln(me.vnode) && me.vnode.shapeFlag & 256) && f.a && qe(f.a, _), f.isMounted = !0, h = g = k = null;
      }
    };
    f.scope.on();
    const $ = f.effect = new fa(I);
    f.scope.off();
    const x = f.update = $.run.bind($), K = f.job = $.runIfDirty.bind($);
    K.i = f, K.id = f.uid, $.scheduler = () => Er(K), Bt(f, !0), x();
  }, _e = (f, h, g) => {
    h.component = f;
    const k = f.vnode.props;
    f.vnode = h, f.next = null, vc(f, h.props, k, g), xc(f, h.children, g), It(), ss(f), Et();
  }, he = (f, h, g, k, _, b, R, I, $ = !1) => {
    const x = f && f.children, K = f ? f.shapeFlag : 0, F = h.children, { patchFlag: W, shapeFlag: J } = h;
    if (W > 0) {
      if (W & 128) {
        Hn(
          x,
          F,
          g,
          k,
          _,
          b,
          R,
          I,
          $
        );
        return;
      } else if (W & 256) {
        qt(
          x,
          F,
          g,
          k,
          _,
          b,
          R,
          I,
          $
        );
        return;
      }
    }
    J & 8 ? (K & 16 && hn(x, _, b), F !== x && u(g, F)) : K & 16 ? J & 16 ? Hn(
      x,
      F,
      g,
      k,
      _,
      b,
      R,
      I,
      $
    ) : hn(x, _, b, !0) : (K & 8 && u(g, ""), J & 16 && ee(
      F,
      g,
      k,
      _,
      b,
      R,
      I,
      $
    ));
  }, qt = (f, h, g, k, _, b, R, I, $) => {
    f = f || sn, h = h || sn;
    const x = f.length, K = h.length, F = Math.min(x, K);
    let W;
    for (W = 0; W < F; W++) {
      const J = h[W] = $ ? Ct(h[W]) : mt(h[W]);
      w(
        f[W],
        J,
        g,
        null,
        _,
        b,
        R,
        I,
        $
      );
    }
    x > K ? hn(
      f,
      _,
      b,
      !0,
      !1,
      F
    ) : ee(
      h,
      g,
      k,
      _,
      b,
      R,
      I,
      $,
      F
    );
  }, Hn = (f, h, g, k, _, b, R, I, $) => {
    let x = 0;
    const K = h.length;
    let F = f.length - 1, W = K - 1;
    for (; x <= F && x <= W; ) {
      const J = f[x], ce = h[x] = $ ? Ct(h[x]) : mt(h[x]);
      if (yn(J, ce))
        w(
          J,
          ce,
          g,
          null,
          _,
          b,
          R,
          I,
          $
        );
      else
        break;
      x++;
    }
    for (; x <= F && x <= W; ) {
      const J = f[F], ce = h[W] = $ ? Ct(h[W]) : mt(h[W]);
      if (yn(J, ce))
        w(
          J,
          ce,
          g,
          null,
          _,
          b,
          R,
          I,
          $
        );
      else
        break;
      F--, W--;
    }
    if (x > F) {
      if (x <= W) {
        const J = W + 1, ce = J < K ? h[J].el : k;
        for (; x <= W; )
          w(
            null,
            h[x] = $ ? Ct(h[x]) : mt(h[x]),
            g,
            ce,
            _,
            b,
            R,
            I,
            $
          ), x++;
      }
    } else if (x > W)
      for (; x <= F; )
        lt(f[x], _, b, !0), x++;
    else {
      const J = x, ce = x, ye = /* @__PURE__ */ new Map();
      for (x = ce; x <= W; x++) {
        const Be = h[x] = $ ? Ct(h[x]) : mt(h[x]);
        Be.key != null && ye.set(Be.key, x);
      }
      let me, Ae = 0;
      const Pe = W - ce + 1;
      let ct = !1, ut = 0;
      const gn = new Array(Pe);
      for (x = 0; x < Pe; x++) gn[x] = 0;
      for (x = J; x <= F; x++) {
        const Be = f[x];
        if (Ae >= Pe) {
          lt(Be, _, b, !0);
          continue;
        }
        let dt;
        if (Be.key != null)
          dt = ye.get(Be.key);
        else
          for (me = ce; me <= W; me++)
            if (gn[me - ce] === 0 && yn(Be, h[me])) {
              dt = me;
              break;
            }
        dt === void 0 ? lt(Be, _, b, !0) : (gn[dt - ce] = x + 1, dt >= ut ? ut = dt : ct = !0, w(
          Be,
          h[dt],
          g,
          null,
          _,
          b,
          R,
          I,
          $
        ), Ae++);
      }
      const Yr = ct ? Cc(gn) : sn;
      for (me = Yr.length - 1, x = Pe - 1; x >= 0; x--) {
        const Be = ce + x, dt = h[Be], Qr = h[Be + 1], Jr = Be + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Qr.el || io(Qr)
        ) : k;
        gn[x] === 0 ? w(
          null,
          dt,
          g,
          Jr,
          _,
          b,
          R,
          I,
          $
        ) : ct && (me < 0 || x !== Yr[me] ? Zt(dt, g, Jr, 2) : me--);
      }
    }
  }, Zt = (f, h, g, k, _ = null) => {
    const { el: b, type: R, transition: I, children: $, shapeFlag: x } = f;
    if (x & 6) {
      Zt(f.component.subTree, h, g, k);
      return;
    }
    if (x & 128) {
      f.suspense.move(h, g, k);
      return;
    }
    if (x & 64) {
      R.move(f, h, g, mn);
      return;
    }
    if (R === oe) {
      i(b, h, g);
      for (let F = 0; F < $.length; F++)
        Zt($[F], h, g, k);
      i(f.anchor, h, g);
      return;
    }
    if (R === qi) {
      G(f, h, g);
      return;
    }
    if (k !== 2 && x & 1 && I)
      if (k === 0)
        I.persisted && !b[zi] ? i(b, h, g) : (I.beforeEnter(b), i(b, h, g), qe(() => I.enter(b), _));
      else {
        const { leave: F, delayLeave: W, afterLeave: J } = I, ce = () => {
          f.ctx.isUnmounted ? r(b) : i(b, h, g);
        }, ye = () => {
          const me = b._isLeaving || !!b[zi];
          b._isLeaving && b[zi](
            !0
            /* cancelled */
          ), I.persisted && !me ? ce() : F(b, () => {
            ce(), J && J();
          });
        };
        W ? W(b, ce, ye) : ye();
      }
    else
      i(b, h, g);
  }, lt = (f, h, g, k = !1, _ = !1) => {
    const {
      type: b,
      props: R,
      ref: I,
      children: $,
      dynamicChildren: x,
      shapeFlag: K,
      patchFlag: F,
      dirs: W,
      cacheIndex: J,
      memo: ce
    } = f;
    if (F === -2 && (_ = !1), I != null && (It(), En(I, null, g, f, !0), Et()), J != null && (h.renderCache[J] = void 0), K & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const ye = K & 1 && W, me = !ln(f);
    let Ae;
    if (me && (Ae = R && R.onVnodeBeforeUnmount) && ft(Ae, h, f), K & 6)
      Zo(f.component, g, k);
    else {
      if (K & 128) {
        f.suspense.unmount(g, k);
        return;
      }
      ye && Ht(f, null, h, "beforeUnmount"), K & 64 ? f.type.remove(
        f,
        h,
        g,
        mn,
        k
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== oe || F > 0 && F & 64) ? hn(
        x,
        h,
        g,
        !1,
        !0
      ) : (b === oe && F & 384 || !_ && K & 16) && hn($, h, g), k && Kr(f);
    }
    const Pe = ce != null && J == null;
    (me && (Ae = R && R.onVnodeUnmounted) || ye || Pe) && qe(() => {
      Ae && ft(Ae, h, f), ye && Ht(f, null, h, "unmounted"), Pe && (f.el = null);
    }, g);
  }, Kr = (f) => {
    const { type: h, el: g, anchor: k, transition: _ } = f;
    if (h === oe) {
      qo(g, k);
      return;
    }
    if (h === qi) {
      B(f);
      return;
    }
    const b = () => {
      r(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (f.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: R, delayLeave: I } = _, $ = () => R(g, b);
      I ? I(f.el, b, $) : $();
    } else
      b();
  }, qo = (f, h) => {
    let g;
    for (; f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, Zo = (f, h, g) => {
    const { bum: k, scope: _, job: b, subTree: R, um: I, m: $, a: x } = f;
    gs($), gs(x), k && Mi(k), _.stop(), b && (b.flags |= 8, lt(R, f, h, g)), I && qe(I, h), qe(() => {
      f.isUnmounted = !0;
    }, h);
  }, hn = (f, h, g, k = !1, _ = !1, b = 0) => {
    for (let R = b; R < f.length; R++)
      lt(f[R], h, g, k, _);
  }, Bn = (f) => {
    if (f.shapeFlag & 6)
      return Bn(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = p(f.anchor || f.el), g = h && h[Ll];
    return g ? p(g) : h;
  };
  let Ni = !1;
  const Gr = (f, h, g) => {
    let k;
    f == null ? h._vnode && (lt(h._vnode, null, null, !0), k = h._vnode.component) : w(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      g
    ), h._vnode = f, Ni || (Ni = !0, ss(k), Ia(), Ni = !1);
  }, mn = {
    p: w,
    um: lt,
    m: Zt,
    r: Kr,
    mt: ke,
    mc: ee,
    pc: he,
    pbc: De,
    n: Bn,
    o: e
  };
  return {
    render: Gr,
    hydrate: void 0,
    createApp: lc(Gr)
  };
}
function Ui({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Bt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Sc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function to(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (X(i) && X(r))
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      let o = r[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[s] = Ct(r[s]), o.el = a.el), !n && o.patchFlag !== -2 && to(a, o)), o.type === Ii && (o.patchFlag === -1 && (o = r[s] = Ct(o)), o.el = a.el), o.type === Pt && !o.el && (o.el = a.el);
    }
}
function Cc(e) {
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
function no(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : no(t);
}
function gs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function io(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? io(t.subTree) : null;
}
const ro = (e) => e.__isSuspense;
function Tc(e, t) {
  t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : Ml(e);
}
const oe = /* @__PURE__ */ Symbol.for("v-fgt"), Ii = /* @__PURE__ */ Symbol.for("v-txt"), Pt = /* @__PURE__ */ Symbol.for("v-cmt"), qi = /* @__PURE__ */ Symbol.for("v-stc"), Pn = [];
let Ge = null;
function v(e = !1) {
  Pn.push(Ge = e ? null : []);
}
function Ac() {
  Pn.pop(), Ge = Pn[Pn.length - 1] || null;
}
let Fn = 1;
function vs(e, t = !1) {
  Fn += e, e < 0 && Ge && t && (Ge.hasOnce = !0);
}
function so(e) {
  return e.dynamicChildren = Fn > 0 ? Ge || sn : null, Ac(), Fn > 0 && Ge && Ge.push(e), e;
}
function S(e, t, n, i, r, s) {
  return so(
    L(
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
function Ie(e, t, n, i, r) {
  return so(
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
function Mr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ao = ({ key: e }) => e ?? null, Yn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Se(e) || /* @__PURE__ */ je(e) || ne(e) ? { i: Ve, r: e, k: t, f: !!n } : e : null);
function L(e, t = null, n = null, i = 0, r = null, s = e === oe ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ao(t),
    ref: t && Yn(t),
    scopeId: Oa,
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
  return o ? (jr(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Se(n) ? 8 : 16), Fn > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ge.push(l), l;
}
const Xe = $c;
function $c(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === za) && (e = Pt), Mr(e)) {
    const o = dn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && jr(o, n), Fn > 0 && !s && Ge && (o.shapeFlag & 6 ? Ge[Ge.indexOf(e)] = o : Ge.push(o)), o.patchFlag = -2, o;
  }
  if (Lc(e) && (e = e.__vccOpts), t) {
    t = Ic(t);
    let { class: o, style: l } = t;
    o && !Se(o) && (t.class = et(o)), ve(l) && (/* @__PURE__ */ Ir(l) && !X(l) && (l = Ce({}, l)), t.style = ki(l));
  }
  const a = Se(e) ? 1 : ro(e) ? 128 : zl(e) ? 64 : ve(e) ? 4 : ne(e) ? 2 : 0;
  return L(
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
function Ic(e) {
  return e ? /* @__PURE__ */ Ir(e) || Ga(e) ? Ce({}, e) : e : null;
}
function dn(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: a, children: o, transition: l } = e, c = t ? Ec(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ao(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? X(s) ? s.concat(Yn(t)) : [s, Yn(t)] : Yn(t)
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
    ssContent: e.ssContent && dn(e.ssContent),
    ssFallback: e.ssFallback && dn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Or(
    u,
    l.clone(u)
  ), u;
}
function Fr(e = " ", t = 0) {
  return Xe(Ii, null, e, t);
}
function ue(e = "", t = !1) {
  return t ? (v(), Ie(Pt, null, e)) : Xe(Pt, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean" ? Xe(Pt) : X(e) ? Xe(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Mr(e) ? Ct(e) : Xe(Ii, null, String(e));
}
function Ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : dn(e);
}
function jr(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (X(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), jr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ga(t) ? t._ctx = Ve : r === 3 && Ve && (Ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: Ve }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Fr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ec(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = et([t.class, i.class]));
      else if (r === "style")
        t.style = ki([t.style, i.style]);
      else if (vi(r)) {
        const s = t[r], a = i[r];
        a && s !== a && !(X(s) && s.includes(a)) ? t[r] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !yi(r) && (t[r] = a);
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
const Oc = Za();
let Pc = 0;
function Nc(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || Oc, s = {
    uid: Pc++,
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
    scope: new sl(
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
    propsOptions: Qa(i, r),
    emitsOptions: Ha(i, r),
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = uc.bind(null, s), e.ce && e.ce(s), s;
}
let Fe = null;
const oo = () => Fe || Ve;
let ni, ir;
{
  const e = wi(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((a) => a(s)) : r[0](s);
    };
  };
  ni = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Fe = n
  ), ir = t(
    "__VUE_SSR_SETTERS__",
    (n) => jn = n
  );
}
const Zn = (e) => {
  const t = Fe;
  return ni(e), e.scope.on(), () => {
    e.scope.off(), ni(t);
  };
}, ys = () => {
  Fe && Fe.scope.off(), ni(null);
};
function lo(e) {
  return e.vnode.shapeFlag & 4;
}
let jn = !1;
function Rc(e, t = !1, n = !1) {
  t && ir(t);
  const { props: i, children: r } = e.vnode, s = lo(e);
  gc(e, i, s, t), _c(e, r, n || t);
  const a = s ? Mc(e, t) : void 0;
  return t && ir(!1), a;
}
function Mc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, tc);
  const { setup: i } = n;
  if (i) {
    It();
    const r = e.setupContext = i.length > 1 ? jc(e) : null, s = Zn(e), a = qn(
      i,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = aa(a);
    if (Et(), s(), (o || e.sp) && !ln(e) && Ma(e), o) {
      if (a.then(ys, ys), t)
        return a.then((l) => {
          bs(e, l);
        }).catch((l) => {
          Ci(l, e, 0);
        });
      e.asyncDep = a;
    } else
      bs(e, a);
  } else
    co(e);
}
function bs(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ve(t) && (e.setupState = Ta(t)), co(e);
}
function co(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || vt);
  {
    const r = Zn(e);
    It();
    try {
      nc(e);
    } finally {
      Et(), r();
    }
  }
}
const Fc = {
  get(e, t) {
    return Me(e, "get", ""), e[t];
  }
};
function jc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Fc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Dr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ta(Cl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in On)
        return On[n](e);
    },
    has(t, n) {
      return n in t || n in On;
    }
  })) : e.proxy;
}
function Dc(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Lc(e) {
  return ne(e) && "__vccOpts" in e;
}
const te = (e, t) => /* @__PURE__ */ El(e, t, jn), zc = "3.5.35";
/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let rr;
const _s = typeof window < "u" && window.trustedTypes;
if (_s)
  try {
    rr = /* @__PURE__ */ _s.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const uo = rr ? (e) => rr.createHTML(e) : (e) => e, Vc = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", St = typeof document < "u" ? document : null, xs = St && /* @__PURE__ */ St.createElement("template"), qc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? St.createElementNS(Vc, e) : t === "mathml" ? St.createElementNS(Uc, e) : n ? St.createElement(e, { is: n }) : St.createElement(e);
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
      xs.innerHTML = uo(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = xs.content;
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
}, Zc = /* @__PURE__ */ Symbol("_vtc");
function Hc(e, t, n) {
  const i = e[Zc];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ws = /* @__PURE__ */ Symbol("_vod"), Bc = /* @__PURE__ */ Symbol("_vsh"), Wc = /* @__PURE__ */ Symbol(""), Kc = /(?:^|;)\s*display\s*:/;
function Gc(e, t, n) {
  const i = e.style, r = Se(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (Se(t))
        for (const a of t.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && kn(i, o, "");
        }
      else
        for (const a in t)
          n[a] == null && kn(i, a, "");
    for (const a in n) {
      a === "display" && (s = !0);
      const o = n[a];
      o != null ? Qc(
        e,
        a,
        !Se(t) && t ? t[a] : void 0,
        o
      ) || kn(i, a, o) : kn(i, a, "");
    }
  } else if (r) {
    if (t !== n) {
      const a = i[Wc];
      a && (n += ";" + a), i.cssText = n, s = Kc.test(n);
    }
  } else t && e.removeAttribute("style");
  ws in e && (e[ws] = s ? i.display : "", e[Bc] && (i.display = "none"));
}
const ks = /\s*!important$/;
function kn(e, t, n) {
  if (X(n))
    n.forEach((i) => kn(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Yc(e, t);
    ks.test(n) ? e.setProperty(
      We(i),
      n.replace(ks, ""),
      "important"
    ) : e[i] = n;
  }
}
const Ss = ["Webkit", "Moz", "ms"], Zi = {};
function Yc(e, t) {
  const n = Zi[t];
  if (n)
    return n;
  let i = Ee(t);
  if (i !== "filter" && i in e)
    return Zi[t] = i;
  i = xi(i);
  for (let r = 0; r < Ss.length; r++) {
    const s = Ss[r] + i;
    if (s in e)
      return Zi[t] = s;
  }
  return t;
}
function Qc(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Se(i) && n === i;
}
const Cs = "http://www.w3.org/1999/xlink";
function Ts(e, t, n, i, r, s = il(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Cs, t.slice(6, t.length)) : e.setAttributeNS(Cs, t, n) : n == null || s && !ca(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : rt(n) ? String(n) : n
  );
}
function As(e, t, n, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? uo(n) : n);
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
    o === "boolean" ? n = ca(n) : n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(r || t);
}
function Jc(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Xc(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const $s = /* @__PURE__ */ Symbol("_vei");
function eu(e, t, n, i, r = null) {
  const s = e[$s] || (e[$s] = {}), a = s[t];
  if (i && a)
    a.value = i;
  else {
    const [o, l] = tu(t);
    if (i) {
      const c = s[t] = ru(
        i,
        r
      );
      Jc(e, o, c, l);
    } else a && (Xc(e, o, a, l), s[t] = void 0);
  }
}
const Is = /(?:Once|Passive|Capture)$/;
function tu(e) {
  let t;
  if (Is.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Is); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : We(e.slice(2)), t];
}
let Hi = 0;
const nu = /* @__PURE__ */ Promise.resolve(), iu = () => Hi || (nu.then(() => Hi = 0), Hi = Date.now());
function ru(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const r = n.value;
    if (X(r)) {
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
  return n.value = e, n.attached = iu(), n;
}
const Es = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, su = (e, t, n, i, r, s) => {
  const a = r === "svg";
  t === "class" ? Hc(e, i, a) : t === "style" ? Gc(e, n, i) : vi(t) ? yi(t) || eu(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : au(e, t, i, a)) ? (As(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ts(e, t, i, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ou(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Se(i))) ? As(e, Ee(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Ts(e, t, i, a));
};
function au(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Es(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Es(t) && Se(n) ? !1 : t in e;
}
function ou(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ee(t);
  return Array.isArray(n) ? n.some((r) => Ee(r) === i) : Object.keys(n).some((r) => Ee(r) === i);
}
const Os = {};
// @__NO_SIDE_EFFECTS__
function lu(e, t, n) {
  let i = /* @__PURE__ */ Te(e, t);
  bi(i) && (i = Ce({}, i, t));
  class r extends Lr {
    constructor(a) {
      super(i, a, n);
    }
  }
  return r.def = i, r;
}
const cu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Lr extends cu {
  constructor(t, n = {}, i = Rs) {
    super(), this._def = t, this._props = n, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && i !== Rs ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      Ce({}, t.shadowRootOptions, {
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
      if (t instanceof Lr) {
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
    this._connected = !1, Ti(() => {
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
      if (s && !X(s))
        for (const l in s) {
          const c = s[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = ts(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[Ee(l)] = !0);
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
        pe(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => P(n[i])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, i = X(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && i.includes(r) && this._setProp(r, this[r]);
    for (const r of i.map(Ee))
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
    let i = n ? this.getAttribute(t) : Os;
    const r = Ee(t);
    n && this._numberProps && this._numberProps[r] && (i = ts(i)), this._setProp(r, i, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === Os ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), i)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(We(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(We(t), n + "") : n || this.removeAttribute(We(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), mu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Xe(this._def, Ce(t, this._props));
    return this._instance || (n.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const r = (s, a) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            bi(a[0]) ? Ce({ detail: a }, a[0]) : { detail: a }
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
function uu(e) {
  const t = oo(), n = t && t.ce;
  return n || null;
}
const du = ["ctrl", "shift", "alt", "meta"], fu = {
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
  exact: (e, t) => du.some((n) => e[`${n}Key`] && !t.includes(n))
}, ii = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const o = fu[t[a]];
      if (o && o(r, t)) return;
    }
    return e(r, ...s);
  });
}, pu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ps = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (r) => {
    if (!("key" in r))
      return;
    const s = We(r.key);
    if (t.some(
      (a) => a === s || pu[a] === s
    ))
      return e(r);
  });
}, hu = /* @__PURE__ */ Ce({ patchProp: su }, qc);
let Ns;
function fo() {
  return Ns || (Ns = wc(hu));
}
const mu = (...e) => {
  fo().render(...e);
}, Rs = (...e) => {
  const t = fo().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const r = vu(i);
    if (!r) return;
    const s = t._component;
    !ne(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const a = n(r, !1, gu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
};
function gu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function vu(e) {
  return Se(e) ? document.querySelector(e) : e;
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
var Ms;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Ms || (Ms = {}));
const D = de.arrayToEnum([
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
      return D.undefined;
    case "string":
      return D.string;
    case "number":
      return Number.isNaN(e) ? D.nan : D.number;
    case "boolean":
      return D.boolean;
    case "function":
      return D.function;
    case "bigint":
      return D.bigint;
    case "symbol":
      return D.symbol;
    case "object":
      return Array.isArray(e) ? D.array : e === null ? D.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? D.promise : typeof Map < "u" && e instanceof Map ? D.map : typeof Set < "u" && e instanceof Set ? D.set : typeof Date < "u" && e instanceof Date ? D.date : D.object;
    default:
      return D.unknown;
  }
}, C = de.arrayToEnum([
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
Nt.create = (e) => new Nt(e);
const sr = (e, t) => {
  let n;
  switch (e.code) {
    case C.invalid_type:
      e.received === D.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case C.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, de.jsonStringifyReplacer)}`;
      break;
    case C.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${de.joinValues(e.keys, ", ")}`;
      break;
    case C.invalid_union:
      n = "Invalid input";
      break;
    case C.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${de.joinValues(e.options)}`;
      break;
    case C.invalid_enum_value:
      n = `Invalid enum value. Expected ${de.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : de.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
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
      n = t.defaultError, de.assertNever(e);
  }
  return { message: n };
};
let yu = sr;
function bu() {
  return yu;
}
const _u = (e) => {
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
function M(e, t) {
  const n = bu(), i = _u({
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
      n === sr ? void 0 : sr
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
        return Y;
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
        return Y;
      s.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof a.value < "u" || r.alwaysSet) && (i[s.value] = a.value);
    }
    return { status: t.value, value: i };
  }
}
const Y = Object.freeze({
  status: "aborted"
}), Sn = (e) => ({ status: "dirty", value: e }), tt = (e) => ({ status: "valid", value: e }), Fs = (e) => e.status === "aborted", js = (e) => e.status === "dirty", fn = (e) => e.status === "valid", ri = (e) => typeof Promise < "u" && e instanceof Promise;
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
const Ds = (e, t) => {
  if (fn(t))
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
    if (ri(n))
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
    return Ds(i, r);
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
        return fn(s) ? {
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
    return this._parseAsync({ data: t, path: [], parent: n }).then((s) => fn(s) ? {
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
    }, r = this._parse({ data: t, path: i.path, parent: i }), s = await (ri(r) ? r : Promise.resolve(r));
    return Ds(i, s);
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
      typeName: Q.ZodEffects,
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
    return di.create(this, this._def);
  }
  or(t) {
    return ai.create([this, t], this._def);
  }
  and(t) {
    return oi.create(this, t, this._def);
  }
  transform(t) {
    return new Xt({
      ...ie(this._def),
      schema: this,
      typeName: Q.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new fi({
      ...ie(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Q.ZodDefault
    });
  }
  brand() {
    return new go({
      typeName: Q.ZodBranded,
      type: this,
      ...ie(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new pi({
      ...ie(this._def),
      innerType: this,
      catchValue: n,
      typeName: Q.ZodCatch
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
    return Vr.create(this, t);
  }
  readonly() {
    return hi.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const xu = /^c[^\s-]{8,}$/i, wu = /^[0-9a-z]+$/, ku = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Su = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Cu = /^[a-z0-9_-]{21}$/i, Tu = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Au = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, $u = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Iu = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Bi;
const Eu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ou = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Pu = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Nu = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ru = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Mu = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, po = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Fu = new RegExp(`^${po}$`);
function ho(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function ju(e) {
  return new RegExp(`^${ho(e)}$`);
}
function Du(e) {
  let t = `${po}T${ho(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Lu(e, t) {
  return !!((t === "v4" || !t) && Eu.test(e) || (t === "v6" || !t) && Pu.test(e));
}
function zu(e, t) {
  if (!Tu.test(e))
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
function Vu(e, t) {
  return !!((t === "v4" || !t) && Ou.test(e) || (t === "v6" || !t) && Nu.test(e));
}
class At extends ae {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== D.string) {
      const s = this._getOrReturnCtx(t);
      return M(s, {
        code: C.invalid_type,
        expected: D.string,
        received: s.parsedType
      }), Y;
    }
    const i = new Ue();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (r = this._getOrReturnCtx(t, r), M(r, {
          code: C.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (r = this._getOrReturnCtx(t, r), M(r, {
          code: C.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), i.dirty());
      else if (s.kind === "length") {
        const a = t.data.length > s.value, o = t.data.length < s.value;
        (a || o) && (r = this._getOrReturnCtx(t, r), a ? M(r, {
          code: C.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && M(r, {
          code: C.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), i.dirty());
      } else if (s.kind === "email")
        $u.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
          validation: "email",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "emoji")
        Bi || (Bi = new RegExp(Iu, "u")), Bi.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
          validation: "emoji",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "uuid")
        Su.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
          validation: "uuid",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "nanoid")
        Cu.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
          validation: "nanoid",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid")
        xu.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
          validation: "cuid",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid2")
        wu.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
          validation: "cuid2",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "ulid")
        ku.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
          validation: "ulid",
          code: C.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), M(r, {
            validation: "url",
            code: C.invalid_string,
            message: s.message
          }), i.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
        validation: "regex",
        code: C.invalid_string,
        message: s.message
      }), i.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), i.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), i.dirty()) : s.kind === "datetime" ? Du(s).test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.invalid_string,
        validation: "datetime",
        message: s.message
      }), i.dirty()) : s.kind === "date" ? Fu.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.invalid_string,
        validation: "date",
        message: s.message
      }), i.dirty()) : s.kind === "time" ? ju(s).test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.invalid_string,
        validation: "time",
        message: s.message
      }), i.dirty()) : s.kind === "duration" ? Au.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
        validation: "duration",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "ip" ? Lu(t.data, s.version) || (r = this._getOrReturnCtx(t, r), M(r, {
        validation: "ip",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "jwt" ? zu(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), M(r, {
        validation: "jwt",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "cidr" ? Vu(t.data, s.version) || (r = this._getOrReturnCtx(t, r), M(r, {
        validation: "cidr",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64" ? Ru.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
        validation: "base64",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64url" ? Mu.test(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
        validation: "base64url",
        code: C.invalid_string,
        message: s.message
      }), i.dirty()) : de.assertNever(s);
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
    return new At({
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
  typeName: Q.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ie(e)
});
function Uu(e, t) {
  const n = (e.toString().split(".")[1] || "").length, i = (t.toString().split(".")[1] || "").length, r = n > i ? n : i, s = Number.parseInt(e.toFixed(r).replace(".", "")), a = Number.parseInt(t.toFixed(r).replace(".", ""));
  return s % a / 10 ** r;
}
class pn extends ae {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== D.number) {
      const s = this._getOrReturnCtx(t);
      return M(s, {
        code: C.invalid_type,
        expected: D.number,
        received: s.parsedType
      }), Y;
    }
    let i;
    const r = new Ue();
    for (const s of this._def.checks)
      s.kind === "int" ? de.isInteger(t.data) || (i = this._getOrReturnCtx(t, i), M(i, {
        code: C.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), M(i, {
        code: C.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), M(i, {
        code: C.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? Uu(t.data, s.value) !== 0 && (i = this._getOrReturnCtx(t, i), M(i, {
        code: C.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (i = this._getOrReturnCtx(t, i), M(i, {
        code: C.not_finite,
        message: s.message
      }), r.dirty()) : de.assertNever(s);
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
    return new pn({
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
    return new pn({
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
pn.create = (e) => new pn({
  checks: [],
  typeName: Q.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ie(e)
});
class Dn extends ae {
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
    if (this._getType(t) !== D.bigint)
      return this._getInvalidInput(t);
    let i;
    const r = new Ue();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (i = this._getOrReturnCtx(t, i), M(i, {
        code: C.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (i = this._getOrReturnCtx(t, i), M(i, {
        code: C.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (i = this._getOrReturnCtx(t, i), M(i, {
        code: C.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : de.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return M(n, {
      code: C.invalid_type,
      expected: D.bigint,
      received: n.parsedType
    }), Y;
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
    return new Dn({
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
    return new Dn({
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
Dn.create = (e) => new Dn({
  checks: [],
  typeName: Q.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ie(e)
});
class ar extends ae {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== D.boolean) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: C.invalid_type,
        expected: D.boolean,
        received: i.parsedType
      }), Y;
    }
    return tt(t.data);
  }
}
ar.create = (e) => new ar({
  typeName: Q.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ie(e)
});
class si extends ae {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== D.date) {
      const s = this._getOrReturnCtx(t);
      return M(s, {
        code: C.invalid_type,
        expected: D.date,
        received: s.parsedType
      }), Y;
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return M(s, {
        code: C.invalid_date
      }), Y;
    }
    const i = new Ue();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), i.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.too_big,
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
    return new si({
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
si.create = (e) => new si({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Q.ZodDate,
  ...ie(e)
});
class Ls extends ae {
  _parse(t) {
    if (this._getType(t) !== D.symbol) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: C.invalid_type,
        expected: D.symbol,
        received: i.parsedType
      }), Y;
    }
    return tt(t.data);
  }
}
Ls.create = (e) => new Ls({
  typeName: Q.ZodSymbol,
  ...ie(e)
});
class or extends ae {
  _parse(t) {
    if (this._getType(t) !== D.undefined) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: C.invalid_type,
        expected: D.undefined,
        received: i.parsedType
      }), Y;
    }
    return tt(t.data);
  }
}
or.create = (e) => new or({
  typeName: Q.ZodUndefined,
  ...ie(e)
});
class lr extends ae {
  _parse(t) {
    if (this._getType(t) !== D.null) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: C.invalid_type,
        expected: D.null,
        received: i.parsedType
      }), Y;
    }
    return tt(t.data);
  }
}
lr.create = (e) => new lr({
  typeName: Q.ZodNull,
  ...ie(e)
});
class zs extends ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return tt(t.data);
  }
}
zs.create = (e) => new zs({
  typeName: Q.ZodAny,
  ...ie(e)
});
class cr extends ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return tt(t.data);
  }
}
cr.create = (e) => new cr({
  typeName: Q.ZodUnknown,
  ...ie(e)
});
class zt extends ae {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return M(n, {
      code: C.invalid_type,
      expected: D.never,
      received: n.parsedType
    }), Y;
  }
}
zt.create = (e) => new zt({
  typeName: Q.ZodNever,
  ...ie(e)
});
class Vs extends ae {
  _parse(t) {
    if (this._getType(t) !== D.undefined) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: C.invalid_type,
        expected: D.void,
        received: i.parsedType
      }), Y;
    }
    return tt(t.data);
  }
}
Vs.create = (e) => new Vs({
  typeName: Q.ZodVoid,
  ...ie(e)
});
class bt extends ae {
  _parse(t) {
    const { ctx: n, status: i } = this._processInputParams(t), r = this._def;
    if (n.parsedType !== D.array)
      return M(n, {
        code: C.invalid_type,
        expected: D.array,
        received: n.parsedType
      }), Y;
    if (r.exactLength !== null) {
      const a = n.data.length > r.exactLength.value, o = n.data.length < r.exactLength.value;
      (a || o) && (M(n, {
        code: a ? C.too_big : C.too_small,
        minimum: o ? r.exactLength.value : void 0,
        maximum: a ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), i.dirty());
    }
    if (r.minLength !== null && n.data.length < r.minLength.value && (M(n, {
      code: C.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), i.dirty()), r.maxLength !== null && n.data.length > r.maxLength.value && (M(n, {
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
  typeName: Q.ZodArray,
  ...ie(t)
});
function rn(e) {
  if (e instanceof $e) {
    const t = {};
    for (const n in e.shape) {
      const i = e.shape[n];
      t[n] = $t.create(rn(i));
    }
    return new $e({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof bt ? new bt({
    ...e._def,
    type: rn(e.element)
  }) : e instanceof $t ? $t.create(rn(e.unwrap())) : e instanceof en ? en.create(rn(e.unwrap())) : e instanceof Qt ? Qt.create(e.items.map((t) => rn(t))) : e;
}
class $e extends ae {
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
    if (this._getType(t) !== D.object) {
      const c = this._getOrReturnCtx(t);
      return M(c, {
        code: C.invalid_type,
        expected: D.object,
        received: c.parsedType
      }), Y;
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
        o.length > 0 && (M(r, {
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
    return q.errToObj, new $e({
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
    return new $e({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new $e({
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
    return new $e({
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
    return new $e({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Q.ZodObject
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
    return new $e({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const i of de.objectKeys(t))
      t[i] && this.shape[i] && (n[i] = this.shape[i]);
    return new $e({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const i of de.objectKeys(this.shape))
      t[i] || (n[i] = this.shape[i]);
    return new $e({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return rn(this);
  }
  partial(t) {
    const n = {};
    for (const i of de.objectKeys(this.shape)) {
      const r = this.shape[i];
      t && !t[i] ? n[i] = r : n[i] = r.optional();
    }
    return new $e({
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
    return new $e({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return mo(de.objectKeys(this.shape));
  }
}
$e.create = (e, t) => new $e({
  shape: () => e,
  unknownKeys: "strip",
  catchall: zt.create(),
  typeName: Q.ZodObject,
  ...ie(t)
});
$e.strictCreate = (e, t) => new $e({
  shape: () => e,
  unknownKeys: "strict",
  catchall: zt.create(),
  typeName: Q.ZodObject,
  ...ie(t)
});
$e.lazycreate = (e, t) => new $e({
  shape: e,
  unknownKeys: "strip",
  catchall: zt.create(),
  typeName: Q.ZodObject,
  ...ie(t)
});
class ai extends ae {
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
      return M(n, {
        code: C.invalid_union,
        unionErrors: a
      }), Y;
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
      return M(n, {
        code: C.invalid_union,
        unionErrors: o
      }), Y;
    }
  }
  get options() {
    return this._def.options;
  }
}
ai.create = (e, t) => new ai({
  options: e,
  typeName: Q.ZodUnion,
  ...ie(t)
});
const kt = (e) => e instanceof ci ? kt(e.schema) : e instanceof Xt ? kt(e.innerType()) : e instanceof ui ? [e.value] : e instanceof Jt ? e.options : e instanceof dr ? de.objectValues(e.enum) : e instanceof fi ? kt(e._def.innerType) : e instanceof or ? [void 0] : e instanceof lr ? [null] : e instanceof $t ? [void 0, ...kt(e.unwrap())] : e instanceof en ? [null, ...kt(e.unwrap())] : e instanceof go || e instanceof hi ? kt(e.unwrap()) : e instanceof pi ? kt(e._def.innerType) : [];
class zr extends ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== D.object)
      return M(n, {
        code: C.invalid_type,
        expected: D.object,
        received: n.parsedType
      }), Y;
    const i = this.discriminator, r = n.data[i], s = this.optionsMap.get(r);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (M(n, {
      code: C.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [i]
    }), Y);
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
    return new zr({
      typeName: Q.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: r,
      ...ie(i)
    });
  }
}
function ur(e, t) {
  const n = Ft(e), i = Ft(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === D.object && i === D.object) {
    const r = de.objectKeys(t), s = de.objectKeys(e).filter((o) => r.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of s) {
      const l = ur(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (n === D.array && i === D.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s], o = t[s], l = ur(a, o);
      if (!l.valid)
        return { valid: !1 };
      r.push(l.data);
    }
    return { valid: !0, data: r };
  } else return n === D.date && i === D.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class oi extends ae {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = (s, a) => {
      if (Fs(s) || Fs(a))
        return Y;
      const o = ur(s.value, a.value);
      return o.valid ? ((js(s) || js(a)) && n.dirty(), { status: n.value, value: o.data }) : (M(i, {
        code: C.invalid_intersection_types
      }), Y);
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
oi.create = (e, t, n) => new oi({
  left: e,
  right: t,
  typeName: Q.ZodIntersection,
  ...ie(n)
});
class Qt extends ae {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== D.array)
      return M(i, {
        code: C.invalid_type,
        expected: D.array,
        received: i.parsedType
      }), Y;
    if (i.data.length < this._def.items.length)
      return M(i, {
        code: C.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Y;
    !this._def.rest && i.data.length > this._def.items.length && (M(i, {
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
    typeName: Q.ZodTuple,
    rest: null,
    ...ie(t)
  });
};
class li extends ae {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== D.object)
      return M(i, {
        code: C.invalid_type,
        expected: D.object,
        received: i.parsedType
      }), Y;
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
    return n instanceof ae ? new li({
      keyType: t,
      valueType: n,
      typeName: Q.ZodRecord,
      ...ie(i)
    }) : new li({
      keyType: At.create(),
      valueType: t,
      typeName: Q.ZodRecord,
      ...ie(n)
    });
  }
}
class Us extends ae {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== D.map)
      return M(i, {
        code: C.invalid_type,
        expected: D.map,
        received: i.parsedType
      }), Y;
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
            return Y;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return Y;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(c.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
Us.create = (e, t, n) => new Us({
  valueType: t,
  keyType: e,
  typeName: Q.ZodMap,
  ...ie(n)
});
class Ln extends ae {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== D.set)
      return M(i, {
        code: C.invalid_type,
        expected: D.set,
        received: i.parsedType
      }), Y;
    const r = this._def;
    r.minSize !== null && i.data.size < r.minSize.value && (M(i, {
      code: C.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), n.dirty()), r.maxSize !== null && i.data.size > r.maxSize.value && (M(i, {
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
          return Y;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const o = [...i.data.values()].map((l, c) => s._parse(new _t(i, l, i.path, c)));
    return i.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(t, n) {
    return new Ln({
      ...this._def,
      minSize: { value: t, message: q.toString(n) }
    });
  }
  max(t, n) {
    return new Ln({
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
Ln.create = (e, t) => new Ln({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Q.ZodSet,
  ...ie(t)
});
class ci extends ae {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ci.create = (e, t) => new ci({
  getter: e,
  typeName: Q.ZodLazy,
  ...ie(t)
});
class ui extends ae {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return M(n, {
        received: n.data,
        code: C.invalid_literal,
        expected: this._def.value
      }), Y;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ui.create = (e, t) => new ui({
  value: e,
  typeName: Q.ZodLiteral,
  ...ie(t)
});
function mo(e, t) {
  return new Jt({
    values: e,
    typeName: Q.ZodEnum,
    ...ie(t)
  });
}
class Jt extends ae {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return M(n, {
        expected: de.joinValues(i),
        received: n.parsedType,
        code: C.invalid_type
      }), Y;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), i = this._def.values;
      return M(n, {
        received: n.data,
        code: C.invalid_enum_value,
        options: i
      }), Y;
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
Jt.create = mo;
class dr extends ae {
  _parse(t) {
    const n = de.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(t);
    if (i.parsedType !== D.string && i.parsedType !== D.number) {
      const r = de.objectValues(n);
      return M(i, {
        expected: de.joinValues(r),
        received: i.parsedType,
        code: C.invalid_type
      }), Y;
    }
    if (this._cache || (this._cache = new Set(de.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = de.objectValues(n);
      return M(i, {
        received: i.data,
        code: C.invalid_enum_value,
        options: r
      }), Y;
    }
    return tt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
dr.create = (e, t) => new dr({
  values: e,
  typeName: Q.ZodNativeEnum,
  ...ie(t)
});
class di extends ae {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== D.promise && n.common.async === !1)
      return M(n, {
        code: C.invalid_type,
        expected: D.promise,
        received: n.parsedType
      }), Y;
    const i = n.parsedType === D.promise ? n.data : Promise.resolve(n.data);
    return tt(i.then((r) => this._def.type.parseAsync(r, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
di.create = (e, t) => new di({
  type: e,
  typeName: Q.ZodPromise,
  ...ie(t)
});
class Xt extends ae {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Q.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = this._def.effect || null, s = {
      addIssue: (a) => {
        M(i, a), a.fatal ? n.abort() : n.dirty();
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
            return Y;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: i.path,
            parent: i
          });
          return l.status === "aborted" ? Y : l.status === "dirty" || n.value === "dirty" ? Sn(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return Y;
        const o = this._def.schema._parseSync({
          data: a,
          path: i.path,
          parent: i
        });
        return o.status === "aborted" ? Y : o.status === "dirty" || n.value === "dirty" ? Sn(o.value) : o;
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
        return o.status === "aborted" ? Y : (o.status === "dirty" && n.dirty(), a(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((o) => o.status === "aborted" ? Y : (o.status === "dirty" && n.dirty(), a(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (r.type === "transform")
      if (i.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        if (!fn(a))
          return Y;
        const o = r.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((a) => fn(a) ? Promise.resolve(r.transform(a.value, s)).then((o) => ({
          status: n.value,
          value: o
        })) : Y);
    de.assertNever(r);
  }
}
Xt.create = (e, t, n) => new Xt({
  schema: e,
  typeName: Q.ZodEffects,
  effect: t,
  ...ie(n)
});
Xt.createWithPreprocess = (e, t, n) => new Xt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Q.ZodEffects,
  ...ie(n)
});
class $t extends ae {
  _parse(t) {
    return this._getType(t) === D.undefined ? tt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
$t.create = (e, t) => new $t({
  innerType: e,
  typeName: Q.ZodOptional,
  ...ie(t)
});
class en extends ae {
  _parse(t) {
    return this._getType(t) === D.null ? tt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
en.create = (e, t) => new en({
  innerType: e,
  typeName: Q.ZodNullable,
  ...ie(t)
});
class fi extends ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let i = n.data;
    return n.parsedType === D.undefined && (i = this._def.defaultValue()), this._def.innerType._parse({
      data: i,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
fi.create = (e, t) => new fi({
  innerType: e,
  typeName: Q.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ie(t)
});
class pi extends ae {
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
    return ri(r) ? r.then((s) => ({
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
pi.create = (e, t) => new pi({
  innerType: e,
  typeName: Q.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ie(t)
});
class qs extends ae {
  _parse(t) {
    if (this._getType(t) !== D.nan) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: C.invalid_type,
        expected: D.nan,
        received: i.parsedType
      }), Y;
    }
    return { status: "valid", value: t.data };
  }
}
qs.create = (e) => new qs({
  typeName: Q.ZodNaN,
  ...ie(e)
});
class go extends ae {
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
class Vr extends ae {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return s.status === "aborted" ? Y : s.status === "dirty" ? (n.dirty(), Sn(s.value)) : this._def.out._parseAsync({
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
      return r.status === "aborted" ? Y : r.status === "dirty" ? (n.dirty(), {
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
    return new Vr({
      in: t,
      out: n,
      typeName: Q.ZodPipeline
    });
  }
}
class hi extends ae {
  _parse(t) {
    const n = this._def.innerType._parse(t), i = (r) => (fn(r) && (r.value = Object.freeze(r.value)), r);
    return ri(n) ? n.then((r) => i(r)) : i(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
hi.create = (e, t) => new hi({
  innerType: e,
  typeName: Q.ZodReadonly,
  ...ie(t)
});
var Q;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Q || (Q = {}));
const U = At.create, H = pn.create, Ke = ar.create, vo = cr.create;
zt.create;
const ge = bt.create, se = $e.create, zn = ai.create, qu = zr.create;
oi.create;
Qt.create;
const Ur = li.create, Zu = ci.create, ot = ui.create, be = Jt.create;
di.create;
$t.create;
en.create;
const Hu = be([
  "eq",
  "neq",
  "in",
  "gt",
  "gte",
  "lt",
  "lte",
  "isSet",
  "notSet"
]), Zs = se({
  ref: U().min(1),
  op: Hu,
  value: zn([U(), H(), ge(U()), ge(H())]).optional()
}), fr = Zu(() => se({
  all: ge(zn([Zs, fr])).optional(),
  any: ge(zn([Zs, fr])).optional()
}));
function qr(e) {
  return "op" in e;
}
const Bu = [
  "file.pages",
  "file.colorPages",
  "file.monoPages",
  "file.status"
], yo = "quantity", Wu = be(["quantity", "pages", "area", "length"]), Ku = se({
  /**
   * Inclusive upper bound on the basis value. MUST be omitted on the last
   * row (open-ended) and present on every other row — validate.ts enforces
   * strictly-increasing order, which makes overlap impossible by construction.
   */
  upTo: H().positive().optional(),
  amount: H()
}), bo = se({
  basis: Wu.default("quantity"),
  /**
   * flat:      the entire basis value is priced at the matched row's amount.
   * graduated: each band is priced at its own amount and summed
   *            (progressive-tax style).
   */
  mode: be(["flat", "graduated"]).default("flat"),
  rows: ge(Ku).min(1)
}), Gu = be(["sqm", "sqft", "sqin"]), Yu = be(["m", "ft", "in", "cm"]), Qu = be([
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
]), _o = se({
  type: Qu,
  amount: H(),
  /** perArea only: the unit `amount` is priced in. */
  areaUnit: Gu.optional(),
  /** perLength only: the unit `amount` is priced in. Default "m" (engine-side). */
  lengthUnit: Yu.optional(),
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
  tiers: bo.optional()
}), Ju = se({
  amount: H().nonnegative().default(0),
  /** "order": added once (v1 behavior). "unit": × quantity (t-shirts, cards). */
  per: be(["order", "unit"]).default("order"),
  /**
   * Quantity breaks on the base. basis must be "quantity"; mode "graduated"
   * requires per === "unit" (validate.ts).
   */
  tiers: bo.optional()
}), Xu = se({
  currency: U().regex(/^[A-Z]{3}$/, "ISO 4217 currency code").default("USD"),
  basePrice: Ju.default({}),
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
}), mi = "2.0", ed = se({
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
}).strict(), td = se({
  context: ed.optional()
}), xo = se({
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
  priceModifiers: ge(_o).default([]),
  /** What selecting this choice tells the Filecheck intake (if any). */
  filecheck: td.optional()
}), Ut = se({
  id: U().min(1),
  label: U().optional(),
  helpText: U().optional(),
  required: Ke().default(!1),
  visibleWhen: fr.optional(),
  /** Price changes applied just for having this field visible. */
  priceModifiers: ge(_o).default([]),
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
}), nd = Ut.extend({
  type: ot("select-one"),
  display: be(["cards", "grid", "swatches", "pills", "dropdown", "list"]).default("pills"),
  options: ge(xo).min(1)
}), id = Ut.extend({
  type: ot("select-many"),
  display: be(["cards", "grid", "swatches", "pills", "list"]).default("list"),
  options: ge(xo).min(1),
  minSelect: H().int().nonnegative().default(0),
  maxSelect: H().int().positive().optional()
}), rd = Ut.extend({
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
}), sd = Ut.extend({
  type: ot("number"),
  display: be(["stepper", "slider", "input"]).default("input"),
  min: H().optional(),
  max: H().optional(),
  step: H().positive().optional(),
  defaultValue: H().optional()
}), ad = Ut.extend({
  type: ot("text"),
  display: be(["input", "textarea"]).default("input"),
  placeholder: U().optional(),
  maxLength: H().int().positive().optional()
}), pr = be(["mm", "cm", "in"]), od = Ut.extend({
  type: ot("dimensions"),
  display: be(["inputs"]).default("inputs"),
  /** Units the customer may pick between. */
  units: ge(pr).min(1).default(["mm"]),
  defaultUnit: pr.default("mm"),
  /** Constraints, expressed in defaultUnit. */
  minW: H().positive().optional(),
  maxW: H().positive().optional(),
  minH: H().positive().optional(),
  maxH: H().positive().optional(),
  defaultValue: se({ w: H().positive(), h: H().positive() }).optional()
}), ld = se({
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
  workflow: Ur(vo()).optional()
}).refine((e) => !!e.workflowId || !!e.workflow, {
  message: "filecheck needs a workflowId or an inline workflow"
}), cd = Ut.extend({
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
  filecheck: ld.optional()
}), ud = Ut.extend({
  type: ot("info"),
  /** summary: live selection recap. note: static text block. */
  display: be(["summary", "note"]).default("note"),
  body: U().optional()
}), dd = qu("type", [
  nd,
  id,
  rd,
  sd,
  ad,
  od,
  cd,
  ud
]);
function Ye(e) {
  return e.type === "select-one" || e.type === "select-many";
}
const fd = se({
  id: U().min(1),
  title: U(),
  fields: ge(dd)
}), pd = se({
  /** axisFieldId -> choiceId, exactly one entry per axis (validate.ts). */
  select: Ur(U()),
  sku: U().optional(),
  /** Absolute replacement for pricing.basePrice.amount while selected. */
  price: H().nonnegative().optional(),
  available: Ke().default(!0),
  /** Platform hook (e.g. Shopify variant GID) for adapters that map to real variants. */
  platformVariantId: U().optional()
}), hd = se({
  /** Field ids of select-one fields forming the matrix (e.g. ["size","color"]). */
  axes: ge(U().min(1)).min(1),
  combinations: ge(pd)
}), Zr = se({
  version: ot(mi).default(mi),
  productId: U().min(1),
  title: U(),
  /** stacked: all sections at once. wizard: one section per step. */
  layout: be(["stacked", "wizard"]).default("stacked"),
  pricing: Xu.default({}),
  variants: hd.optional(),
  sections: ge(fd)
});
se({
  w: H().positive(),
  h: H().positive(),
  unit: pr
});
function Qe(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && typeof e.w == "number" && typeof e.h == "number";
}
const wo = /* @__PURE__ */ new Set([
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
]), ko = /* @__PURE__ */ new Set(["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"]);
function md(e) {
  const t = e.toUpperCase();
  return wo.has(t) ? 0 : ko.has(t) ? 3 : 2;
}
function gd(e) {
  return /^[A-Z]{3}$/.test(e) && (wo.has(e) || ko.has(e) || vd.has(e));
}
const vd = /* @__PURE__ */ new Set([
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
function So(e) {
  const t = Zr.safeParse(e);
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
  const n = Co(t.data);
  return {
    ok: !n.some((i) => i.severity === "error"),
    value: t.data,
    issues: n
  };
}
Zr.superRefine((e, t) => {
  for (const n of Co(e))
    n.severity === "error" && t.addIssue({
      code: C.custom,
      path: n.path,
      message: `${n.code}: ${n.message}`
    });
});
function Co(e) {
  const t = [], n = (c, u, d, p = "error") => t.push({ path: c, code: u, message: d, severity: p }), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  let a = 0, o, l = !1;
  e.sections.forEach((c, u) => {
    r.has(c.id) && n(["sections", u, "id"], "duplicate-section-id", `Duplicate section id "${c.id}".`), r.add(c.id), c.fields.forEach((d, p) => {
      const m = ["sections", u, "fields", p];
      if (i.has(d.id) ? n([...m, "id"], "duplicate-field-id", `Duplicate field id "${d.id}".`) : i.set(d.id, { field: d, path: m }), (d.id === yo || d.id.startsWith("file.")) && n([...m, "id"], "reserved-field-id", `Field id "${d.id}" is reserved for condition refs.`), d.type === "quantity" && (o ?? (o = m), wd(d.visibleWhen) || (a += 1, a > 1 && n(m, "multiple-quantity-fields", "Only one quantity field can show unconditionally. Give the others a visibility rule so a single quantity field is shown at a time."))), d.role) {
        const E = s.get(d.role);
        E ? n([...m, "role"], "duplicate-role", `Role "${d.role}" is already used by field "${E}" — only one field per role.`) : s.set(d.role, d.id);
      }
      d.type === "file" && (l = !0);
    });
  });
  for (const { field: c, path: u } of i.values()) {
    _d(c, u, n), xd(c, u, n), kd(c, u, i, n);
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
      p.forEach((E, w) => {
        Cd(E, [...m, w], i, l, n);
      });
  }
  return Td(e.pricing.basePrice, ["pricing", "basePrice"], n), e.variants && Ad(e, i, n), o && !bd(e) && n(o, "quantity-has-no-effect", "Changing the quantity does not change the price: every amount in this product is added once per order. If customers can buy more than one, set the base price to per unit, or price the options per unit instead of fixed.", "warning"), gd(e.pricing.currency) || n(["pricing", "currency"], "unknown-currency", `Currency "${e.pricing.currency}" is not in the known list; totals will round to 2 decimals.`, "warning"), t;
}
const yd = /* @__PURE__ */ new Set([
  "perUnit",
  "perPage",
  "perColorPage",
  "perMonoPage",
  "perArea",
  "perLength"
]);
function bd(e) {
  var i;
  const t = e.pricing.basePrice;
  if (t.per === "unit" || t.tiers)
    return !0;
  const n = (r) => {
    var s;
    return yd.has(r.type) || (((s = r.tiers) == null ? void 0 : s.basis) ?? "quantity") === "quantity" && r.tiers !== void 0;
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
function _d(e, t, n) {
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
function xd(e, t, n) {
  if (!Ye(e))
    return;
  const i = /* @__PURE__ */ new Set();
  let r = 0;
  e.options.forEach((s, a) => {
    i.has(s.id) && n([...t, "options", a, "id"], "duplicate-choice-id", `Duplicate choice id "${s.id}" in field "${e.id}".`), i.add(s.id), s.default && (r += 1);
  }), e.type === "select-one" && r > 1 && n([...t, "options"], "too-many-defaults", `select-one field "${e.id}" has ${r} default choices.`), e.type === "select-many" && e.maxSelect !== void 0 && r > e.maxSelect && n([...t, "options"], "too-many-defaults", `Default choices (${r}) exceed maxSelect (${e.maxSelect}).`);
}
function wd(e) {
  var t, n;
  return e ? (((t = e.all) == null ? void 0 : t.length) ?? 0) > 0 || (((n = e.any) == null ? void 0 : n.length) ?? 0) > 0 : !1;
}
function kd(e, t, n, i) {
  if (!e.visibleWhen)
    return;
  const r = [...t, "visibleWhen"], s = (a, o) => {
    if (qr(a)) {
      const l = Bu.includes(a.ref), c = a.ref === yo, u = n.get(a.ref);
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
function To(e, t, n) {
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
const Sd = /* @__PURE__ */ new Set(["fixed", "percent", "multiplier", "setup"]);
function Cd(e, t, n, i, r) {
  if (e.tiers && (To(e.tiers, [...t, "tiers"], r), e.tiers.mode === "graduated" && Sd.has(e.type) && r([...t, "tiers", "mode"], "tier-basis-invalid", `Graduated tiers are meaningless on a "${e.type}" modifier.`), e.tiers.basis === "pages" && !i && r([...t, "tiers", "basis"], "pages-basis-without-file", "Pages-based tiers need a file field to supply page counts.", "warning")), (e.type === "perPage" || e.type === "perColorPage" || e.type === "perMonoPage") && !i && r([...t, "type"], "pages-basis-without-file", `"${e.type}" pricing needs a file field to supply page counts.`, "warning"), e.type === "perArea" || e.type === "perLength") {
    const s = e.type.toLowerCase();
    if (e.dimensionsField !== void 0) {
      const a = n.get(e.dimensionsField);
      (!a || a.field.type !== "dimensions") && r([...t, "dimensionsField"], `${s}-dangling-dims`, `"${e.dimensionsField}" is not a dimensions field.`);
    } else i || r([...t, "type"], `${s}-missing-source`, `${e.type} pricing has no dimensions field and no file field to read a canvas from.`, "warning");
  }
}
function Td(e, t, n) {
  e.tiers && (To(e.tiers, [...t, "tiers"], n), e.tiers.basis !== "quantity" && n([...t, "tiers", "basis"], "tier-basis-invalid", "Base price tiers must use the quantity basis."), e.tiers.mode === "graduated" && e.per === "order" && n([...t, "tiers", "mode"], "tier-basis-invalid", 'Graduated base tiers require per: "unit".'));
}
function Ad(e, t, n) {
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
      const E = r.get(p);
      E && !E.has(m) && n(["variants", "combinations", l, "select", p], "variant-combo-invalid", `"${m}" is not a choice of axis "${p}".`);
    }
    const d = i.axes.map((p) => o.select[p]).join("\0");
    s.has(d) && n(["variants", "combinations", l], "variant-combo-duplicate", "Duplicate variant combination."), s.add(d), o.price !== void 0 && e.pricing.basePrice.tiers && n(["variants", "combinations", l, "price"], "variant-price-with-base-tiers", "Combination price overrides only the untiered base amount; base tiers still apply.", "warning");
  });
}
const hr = "1.0", $d = se({
  /** Minimum quantity required to trigger this tier (inclusive). */
  minQty: H().nonnegative(),
  /** Maximum quantity for this tier (inclusive). If omitted, tier spans to infinity. */
  maxQty: H().nonnegative().optional(),
  /** Price/amount applied for this tier. */
  amount: H()
}), Ao = se({
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
  tiers: ge($d).optional()
}), Id = se({
  /** The field id whose value gates visibility. */
  field: U(),
  /** Show when the field's selected value equals one of these. */
  equals: zn([U(), ge(U())]).optional(),
  /** Show only when a value is present (any non-empty selection). */
  isSet: Ke().optional()
}), Ed = se({
  id: U().min(1),
  label: U(),
  description: U().optional(),
  image: U().url().optional(),
  color: U().optional(),
  default: Ke().optional(),
  priceModifiers: ge(Ao).default([]),
  /** Dead in v1 runtime; dropped by migration. */
  reveals: ge(U()).default([])
}), Od = be([
  "card-select",
  "image-grid",
  "swatch",
  "pill-toggle",
  "dropdown",
  "number-stepper",
  "file-upload",
  "summary"
]), Pd = se({
  id: U().min(1),
  type: Od,
  label: U().optional(),
  helpText: U().optional(),
  required: Ke().default(!1),
  options: ge(Ed).default([]),
  min: H().optional(),
  max: H().optional(),
  step: H().optional(),
  defaultValue: zn([U(), H()]).optional(),
  accept: ge(U()).optional(),
  providerId: U().optional(),
  visibleWhen: Id.optional(),
  priceModifiers: ge(Ao).default([])
}), Nd = se({
  id: U().min(1),
  title: U(),
  layout: be(["stacked", "tabs"]).default("stacked"),
  fields: ge(Pd)
}), Rd = se({
  version: ot(hr).default(hr),
  productId: U().min(1),
  title: U(),
  currency: U().default("USD"),
  basePrice: H().nonnegative().default(0),
  sections: ge(Nd)
});
class gi extends Error {
  constructor(n) {
    const i = n.map((r) => `${r.code} at ${r.path.join(".") || "<root>"}: ${r.message}`).join("; ");
    super(`Invalid product options: ${i}`);
    Xr(this, "issues");
    this.name = "ProductOptionsError", this.issues = n;
  }
}
function Md(e) {
  const t = Rd.safeParse(e);
  if (!t.success)
    throw new gi(t.error.issues.map((c) => ({
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
    version: mi,
    productId: n.productId,
    title: n.title,
    layout: s ? "wizard" : "stacked",
    pricing: {
      currency: qd(n.currency, i),
      basePrice: { amount: n.basePrice, per: "order" }
    },
    sections: n.sections.map((c) => ({
      id: c.id,
      title: c.title,
      fields: c.fields.map((u) => {
        const d = Dd(u, r, i);
        return d.type === "quantity" && (r = !0), d;
      })
    }))
  }, o = Zr.parse(a), l = So(o);
  if (!l.ok)
    throw new gi(l.issues.filter((c) => c.severity === "error"));
  return { doc: o, warnings: i };
}
function Fd(e) {
  const t = typeof e == "object" && e !== null ? e.version : void 0;
  if (t === void 0 || t === mi) {
    const n = So(e);
    if (!n.ok || !n.value)
      throw new gi(n.issues.filter((i) => i.severity === "error"));
    return { doc: n.value, warnings: [] };
  }
  if (t === hr)
    return Md(e);
  throw new gi([
    {
      path: ["version"],
      code: "unknown-version",
      message: `Unsupported schema version "${String(t)}".`,
      severity: "error"
    }
  ]);
}
function Hs(e, t) {
  const { doc: n, warnings: i } = Fd(e);
  return n;
}
const jd = {
  "card-select": "cards",
  "image-grid": "grid",
  swatch: "swatches",
  "pill-toggle": "pills",
  dropdown: "dropdown"
};
function Dd(e, t, n) {
  const i = {
    id: e.id,
    label: e.label,
    helpText: e.helpText,
    required: e.required,
    visibleWhen: zd(e.visibleWhen),
    priceModifiers: e.priceModifiers.map((r) => $o(r, n))
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
        display: jd[e.type],
        options: e.options.map((r) => Ld(r, n))
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
        min: bn(e.min) ?? 1,
        max: bn(e.max),
        step: bn(e.step) ?? 1,
        defaultValue: bn(typeof e.defaultValue == "number" ? e.defaultValue : void 0) ?? bn(e.min) ?? 1
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
function Ld(e, t) {
  return {
    id: e.id,
    label: e.label,
    description: e.description,
    image: e.image,
    color: e.color,
    default: e.default,
    priceModifiers: e.priceModifiers.map((n) => $o(n, t))
  };
}
function zd(e) {
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
function bn(e) {
  if (e === void 0)
    return;
  const t = Math.round(e);
  return t >= 1 ? t : void 0;
}
function $o(e, t) {
  return !e.tiers || e.tiers.length === 0 ? { type: e.type, amount: e.amount } : {
    type: e.type,
    amount: e.amount,
    tiers: {
      basis: "quantity",
      mode: "flat",
      rows: Vd(e.tiers, e.amount, t)
    }
  };
}
function Vd(e, t, n) {
  Ud(e) && n.push("Overlapping v1 tiers detected; earlier tiers win in the overlap (v1 behavior preserved).");
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
function Ud(e) {
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
function qd(e, t) {
  const n = e.toUpperCase();
  return /^[A-Z]{3}$/.test(n) ? n : (t.push(`Currency "${e}" is not an ISO 4217 code; defaulting to USD.`), "USD");
}
const Bs = "1.0", Io = be(["mm", "cm", "in", "pt", "px"]), Zd = be(["pending", "ready", "failed"]), Hd = be(["info", "warning", "error"]), Bd = se({
  /** 1-based page index. */
  page: H().int().positive(),
  w: H().nonnegative(),
  h: H().nonnegative(),
  unit: Io.default("mm")
}), Wd = se({
  w: H().nonnegative(),
  h: H().nonnegative(),
  /** Bleed applied around the trim box, in `unit`. */
  bleed: H().nonnegative().default(0),
  unit: Io.default("mm")
}), Kd = se({
  /** Dominant color model detected in the file. */
  model: be(["RGB", "CMYK", "Gray", "Mixed", "Unknown"]).default("Unknown"),
  /** Named spot colors (e.g. Pantone) found in the file. */
  spot: ge(U()).default([])
}), Gd = se({
  /** Machine-readable code, e.g. "low-dpi", "not-embedded-font", "out-of-gamut". */
  code: U(),
  severity: Hd.default("warning"),
  message: U().optional(),
  /** 1-based page index the issue applies to, if page-specific. */
  page: H().int().positive().optional()
}), Hr = se({
  /** Contract version, for forward/backward compatibility. */
  version: ot(Bs).default(Bs),
  /** Stable id assigned by the basic uploader; correlates feeds to a file. */
  fileId: U().min(1),
  /** Who produced this metadata. Free-form, but reserve known sources. */
  source: U().default("custom"),
  status: Zd.default("pending"),
  /** Original file name and MIME type, if known. */
  fileName: U().optional(),
  mimeType: U().optional(),
  fileSizeBytes: H().int().nonnegative().optional(),
  /** Total page count. Absent means "unknown" — pricing must fall back. */
  pages: H().int().nonnegative().optional(),
  colorPages: H().int().nonnegative().optional(),
  monoPages: H().int().nonnegative().optional(),
  pageSizes: ge(Bd).optional(),
  canvas: Wd.optional(),
  colors: Kd.optional(),
  issues: ge(Gd).default([]),
  /** Provider-specific extras that don't fit the core contract. */
  raw: Ur(vo()).optional()
}), Yd = se({
  pages: Ke().default(!1),
  colorDetection: Ke().default(!1),
  pageSizes: Ke().default(!1),
  canvas: Ke().default(!1),
  preflightIssues: Ke().default(!1)
}), Qd = se({
  id: U().min(1),
  name: U(),
  /**
   * "push" = provider POSTs metadata to us; "pull" = we fetch from `endpoint`;
   * "element" = provider renders its own embedded uploader (e.g. the
   * Filecheck intake element) in place of the basic dropzone.
   */
  mode: be(["push", "pull", "element"]).default("push"),
  endpoint: U().url().optional(),
  capabilities: Yd.default({}),
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
}), Eo = {
  mm: 1e-3,
  cm: 0.01,
  in: 0.0254,
  pt: 0.0254 / 72,
  px: void 0
}, Jd = {
  sqm: 1,
  sqft: 0.3048 * 0.3048,
  sqin: 0.0254 * 0.0254
};
function Ws(e, t, n, i) {
  const r = Eo[n];
  return r === void 0 || e <= 0 || t <= 0 ? 0 : e * r * (t * r) / Jd[i];
}
function Oo(e, t) {
  var r;
  const n = e.areaUnit ?? "sqm";
  if (e.dimensionsField !== void 0) {
    const s = t.selections[e.dimensionsField];
    return Qe(s) ? Ws(s.w, s.h, s.unit, n) : 0;
  }
  const i = (r = t.file) == null ? void 0 : r.canvas;
  return i ? Ws(i.w, i.h, i.unit, n) : 0;
}
function Xd(e, t) {
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
function Ks(e) {
  return e !== void 0 && e !== "" && !(Array.isArray(e) && e.length === 0);
}
function ef(e, t) {
  const n = Xd(e.ref, t);
  if (e.op === "isSet")
    return Ks(n);
  if (e.op === "notSet")
    return !Ks(n);
  if (n === void 0)
    return !1;
  switch (e.op) {
    case "eq":
      return Gs(n, e.value);
    case "neq":
      return !Gs(n, e.value);
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
function Gs(e, t) {
  if (Array.isArray(e)) {
    if (Array.isArray(t)) {
      const n = t.map(String);
      return e.some((i) => n.includes(String(i)));
    }
    return t !== void 0 && e.map(String).includes(String(t));
  }
  return Qe(e) ? !1 : Array.isArray(t) ? t.map(String).includes(String(e)) : t !== void 0 && String(e) === String(t);
}
function Po(e, t) {
  if (!e)
    return !0;
  const n = (s) => qr(s) ? ef(s, t) : Po(s, t), i = e.all === void 0 || e.all.every(n), r = e.any === void 0 || e.any.length === 0 || e.any.some(n);
  return i && r;
}
function Br(e, t) {
  return Po(e.visibleWhen, t);
}
function nt(e, t) {
  const i = 10 ** md(t);
  return Math.round((e + Number.EPSILON) * i) / i;
}
function tf(e) {
  const t = [];
  for (const n of e.sections)
    for (const i of n.fields)
      i.type === "quantity" && t.push(i);
  return t;
}
function No(e, t, n) {
  const i = tf(e);
  if (i.length <= 1)
    return i[0];
  const r = { selections: t, file: n, quantity: 1 };
  return i.find((s) => Br(s, r)) ?? i.find((s) => !s.visibleWhen) ?? i[0];
}
function Ro(e, t, n) {
  const i = No(e, t, n);
  return i ? Vn(i, t[i.id]) : 1;
}
function Vn(e, t) {
  const n = typeof t == "number" ? t : typeof t == "string" && t.trim() !== "" ? Number(t) : e.defaultValue;
  return Number.isNaN(n) ? Ys(e, e.defaultValue) : Ys(e, n);
}
function Ys(e, t) {
  const n = e.step;
  let i = Math.round(t);
  return i = e.min + Math.round((i - e.min) / n) * n, i < e.min && (i = e.min), e.max !== void 0 && i > e.max && (i = e.min + Math.floor((e.max - e.min) / n) * n), i;
}
const nf = {
  m: 1,
  ft: 0.3048,
  in: 0.0254,
  cm: 0.01
};
function Qs(e, t, n) {
  const i = Eo[t];
  return i === void 0 || e <= 0 ? 0 : e * i / nf[n];
}
function Js(e, t, n) {
  return n === "w" ? e : n === "max" ? Math.max(e, t) : t;
}
function Mo(e, t) {
  var r;
  const n = e.lengthUnit ?? "m";
  if (e.dimensionsField !== void 0) {
    const s = t.selections[e.dimensionsField];
    return Qe(s) ? Qs(Js(s.w, s.h, e.lengthAxis), s.unit, n) : 0;
  }
  const i = (r = t.file) == null ? void 0 : r.canvas;
  return i ? Qs(Js(i.w, i.h, e.lengthAxis), i.unit, n) : 0;
}
function mr(e, t) {
  for (const n of e)
    if (n.upTo === void 0 || t <= n.upTo)
      return n;
  return e[e.length - 1];
}
function Cn(e, t) {
  let n = 0, i = 0;
  for (const r of t) {
    const a = (r.upTo === void 0 ? e : Math.min(r.upTo, e)) - i;
    if (a > 0 && (n += a * r.amount), r.upTo === void 0 || e <= r.upTo)
      break;
    i = r.upTo;
  }
  return n;
}
function Ei(e, t) {
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
function rf(e, t) {
  const n = Ei(e, t);
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
function sf(e, t, n, i) {
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
  const s = Ei(e, { ...t, [n]: i });
  return s ? s.available : !0;
}
function af(e, t) {
  const n = Ei(e, t);
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
function of(e, t) {
  const n = t.quantity ?? Ro(e, t.selections, t.file), i = {
    selections: t.selections,
    file: t.file,
    quantity: n
  }, r = e.pricing.currency, s = [], a = Ei(e, t.selections), o = af(e, t.selections), l = rf(e, t.selections), c = lf(e.pricing.basePrice, a == null ? void 0 : a.price, n);
  s.push({
    sourceId: "base",
    label: "Base price",
    stage: "base",
    type: "base",
    amount: nt(c, r)
  });
  let u = c;
  const d = cf(e, i);
  for (const { sourceId: w, label: O, modifier: Z } of d) {
    const z = df(Z, i);
    z !== void 0 && (u += z, s.push({
      sourceId: w,
      label: O,
      stage: "additive",
      type: Z.type,
      amount: nt(z, r)
    }));
  }
  const p = u;
  for (const { sourceId: w, label: O, modifier: Z } of d) {
    if (Z.type !== "percent")
      continue;
    const z = Dt(Z, i), G = u * (z / 100);
    u += G, s.push({
      sourceId: w,
      label: O,
      stage: "percent",
      type: "percent",
      amount: nt(G, r)
    });
  }
  for (const { sourceId: w, label: O, modifier: Z } of d) {
    if (Z.type !== "multiplier")
      continue;
    const z = Dt(Z, i), G = u * z - u;
    u += G, s.push({
      sourceId: w,
      label: O,
      stage: "multiplier",
      type: "multiplier",
      amount: nt(G, r)
    });
  }
  e.pricing.setupFee !== void 0 && e.pricing.setupFee > 0 && (u += e.pricing.setupFee, s.push({
    sourceId: "setup-fee",
    label: "Setup fee",
    stage: "setup",
    type: "setup",
    amount: nt(e.pricing.setupFee, r)
  }));
  for (const { sourceId: w, label: O, modifier: Z } of d) {
    if (Z.type !== "setup")
      continue;
    const z = Dt(Z, i);
    u += z, s.push({
      sourceId: w,
      label: O,
      stage: "setup",
      type: "setup",
      amount: nt(z, r)
    });
  }
  const m = Math.max(e.pricing.minimumPrice ?? 0, 0);
  if (u < m) {
    const w = m - u;
    u = m, s.push({
      sourceId: "adjustment:minimum",
      label: "Minimum order adjustment",
      stage: "adjustment",
      type: "minimum",
      amount: nt(w, r)
    });
  }
  const E = nt(u, r);
  return {
    currency: r,
    quantity: n,
    unavailable: o,
    sku: l,
    base: nt(c, r),
    subtotal: nt(p, r),
    total: E,
    unitPrice: nt(u / Math.max(n, 1), r),
    lines: s
  };
}
function lf(e, t, n) {
  const i = t ?? e.amount, r = e.tiers;
  return e.per === "order" ? r ? mr(r.rows, n).amount : i : r ? r.mode === "graduated" ? Cn(n, r.rows) : mr(r.rows, n).amount * n : i * n;
}
function cf(e, t) {
  const n = [];
  for (const i of e.sections)
    for (const r of i.fields) {
      if (!Br(r, t))
        continue;
      for (const a of r.priceModifiers)
        n.push({
          sourceId: r.id,
          label: r.label ?? r.id,
          modifier: a
        });
      if (!Ye(r))
        continue;
      const s = uf(r.id, t.selections);
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
function uf(e, t) {
  const n = t[e];
  return n === void 0 ? [] : Array.isArray(n) ? n : typeof n == "object" ? [] : [String(n)];
}
function Tn(e, t) {
  var n, i;
  switch (((n = e.tiers) == null ? void 0 : n.basis) ?? "quantity") {
    case "quantity":
      return t.quantity;
    case "pages":
      return ((i = t.file) == null ? void 0 : i.pages) ?? 0;
    case "area":
      return Oo(e, t);
    case "length":
      return Mo(e, t);
  }
}
function Dt(e, t) {
  return e.tiers ? mr(e.tiers.rows, Tn(e, t)).amount : e.amount;
}
function df(e, t) {
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
      return ((i = e.tiers) == null ? void 0 : i.mode) === "graduated" ? Cn(Tn(e, t), e.tiers.rows) : Dt(e, t) * n;
    case "perPage":
    case "perColorPage":
    case "perMonoPage": {
      const u = e.type === "perPage" ? ((r = t.file) == null ? void 0 : r.pages) ?? 0 : e.type === "perColorPage" ? ((s = t.file) == null ? void 0 : s.colorPages) ?? 0 : ((a = t.file) == null ? void 0 : a.monoPages) ?? 0;
      return ((o = e.tiers) == null ? void 0 : o.mode) === "graduated" ? Cn(Tn(e, t), e.tiers.rows) * n : Dt(e, t) * u * n;
    }
    case "perArea": {
      const u = Oo(e, t);
      return ((l = e.tiers) == null ? void 0 : l.mode) === "graduated" ? Cn(Tn(e, t), e.tiers.rows) * n : Dt(e, t) * u * n;
    }
    case "perLength": {
      const u = Mo(e, t);
      return ((c = e.tiers) == null ? void 0 : c.mode) === "graduated" ? Cn(Tn(e, t), e.tiers.rows) * n : Dt(e, t) * u * n;
    }
  }
}
const ff = /* @__PURE__ */ new Set([
  "perPage",
  "perColorPage",
  "perMonoPage"
]), pf = /* @__PURE__ */ new Set([
  "file.pages",
  "file.colorPages",
  "file.monoPages"
]);
function Fo(e) {
  return e ? [...e.all ?? [], ...e.any ?? []].some((n) => qr(n) ? pf.has(n.ref) : Fo(n)) : !1;
}
function hf(e) {
  const t = (n) => {
    var i;
    return ff.has(n.type) || ((i = n.tiers) == null ? void 0 : i.basis) === "pages";
  };
  for (const n of e.sections)
    for (const i of n.fields)
      if (Fo(i.visibleWhen) || i.priceModifiers.some(t) || Ye(i) && i.options.some((r) => r.priceModifiers.some(t)))
        return !0;
  return !1;
}
function jo(e, t, n, i = {}) {
  var s;
  const r = [];
  for (const { fields: a } of e)
    for (const o of a) {
      if (o.type === "info")
        continue;
      const l = t[o.id];
      let c;
      if (Ye(o)) {
        const u = Array.isArray(l) ? l : typeof l == "string" ? [l] : [], d = o.options.filter((p) => u.includes(p.id)).map((p) => p.label);
        c = d.length ? d.join(", ") : void 0;
      } else if (o.type === "file")
        c = (n == null ? void 0 : n.fileName) ?? (n == null ? void 0 : n.fileId);
      else if (Qe(l))
        c = `${l.w} × ${l.h} ${l.unit}`;
      else if (o.type === "quantity" && l !== void 0 && l !== "") {
        const u = Vn(o, l), d = (s = o.unit) == null ? void 0 : s.trim();
        c = d ? `${u} ${d}` : String(u);
      } else l !== void 0 && l !== "" && (c = String(l));
      c !== void 0 && r.push({
        fieldId: o.id,
        /* An unlabeled quantity is common (the stepper explains
           itself on the page) — never show its internal id. */
        label: o.label ?? (o.type === "quantity" ? i.quantityLabel ?? "Quantity" : o.id),
        value: c
      });
    }
  return r;
}
async function mf(e, t, n) {
  const i = n ? await gf(n) : void 0, r = await fetch(e, {
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
function gf(e) {
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
async function vf(e, t) {
  if (!e.endpoint)
    throw new Error(`Provider "${e.id}" has no endpoint for pull mode.`);
  const n = `${e.endpoint.replace(/\/$/, "")}/${encodeURIComponent(t)}`, i = await fetch(n);
  if (!i.ok)
    throw new Error(`Metadata fetch failed: ${i.status}`);
  return Hr.parse(await i.json());
}
async function yf(e, t, n = {}) {
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
      if (s = await vf(e, t), s.status === "ready" || s.status === "failed")
        return s;
    } catch {
    }
    await bf(i);
  }
  return s;
}
function bf(e) {
  return new Promise((t) => setTimeout(t, e));
}
function _f(e) {
  const t = { ...e }, n = /* @__PURE__ */ Ze(null), i = /* @__PURE__ */ Ze(!1), r = /* @__PURE__ */ Ze(null), s = /* @__PURE__ */ Ze(!1), a = /* @__PURE__ */ Vt({}), o = /* @__PURE__ */ Ze(void 0), l = /* @__PURE__ */ Ze(!1), c = te(
    () => n.value ? Ro(n.value, a, o.value) : 1
  ), u = te(() => ({
    selections: a,
    file: o.value,
    quantity: c.value
  }));
  async function d() {
    i.value = !0, r.value = null, s.value = !1;
    try {
      if (t.inlineConfig)
        n.value = Hs(t.inlineConfig);
      else if (t.configUrl) {
        const y = await fetch(t.configUrl);
        if (y.status === 404 || y.status === 403) {
          s.value = !0;
          return;
        }
        if (!y.ok)
          throw new Error(`Config load failed: ${y.status}`);
        n.value = Hs(await y.json());
      } else
        throw new Error("No config-url or inline config provided.");
      xf(n.value, a);
    } catch (y) {
      r.value = y instanceof Error ? y.message : String(y);
    } finally {
      i.value = !1;
    }
  }
  async function p(y) {
    Object.assign(t, y);
    for (const N of Object.keys(a))
      delete a[N];
    o.value = void 0, await d();
  }
  const m = te(() => n.value ? n.value.sections.map((y) => ({
    section: y,
    fields: y.fields.filter(
      (N) => Br(N, u.value)
    )
  })).filter((y) => y.fields.length > 0) : []), E = te(
    () => m.value.flatMap((y) => y.fields)
  ), w = te(() => n.value ? of(n.value, {
    selections: a,
    file: o.value
  }) : null);
  function O(y, N) {
    var ee;
    const A = (ee = n.value) == null ? void 0 : ee.sections.flatMap((le) => le.fields).find((le) => le.id === y);
    a[y] = (A == null ? void 0 : A.type) === "quantity" && typeof N == "number" ? Vn(A, N) : N;
  }
  function Z(y, N) {
    if (y.type !== "select-many") {
      O(y.id, N);
      return;
    }
    const A = a[y.id], ee = Array.isArray(A) ? [...A] : [], le = ee.indexOf(N);
    if (le >= 0)
      ee.splice(le, 1);
    else {
      if (y.maxSelect !== void 0 && ee.length >= y.maxSelect)
        return;
      ee.push(N);
    }
    a[y.id] = ee;
  }
  async function z(y, N) {
    if (!t.uploadEndpoint) {
      r.value = "No upload endpoint configured.";
      return;
    }
    l.value = !0;
    try {
      const A = await mf(t.uploadEndpoint, N, t.turnstileUrl);
      o.value = {
        version: "1.0",
        fileId: A.fileId,
        source: "uploader",
        status: "ready",
        fileName: A.fileName,
        fileSizeBytes: A.fileSizeBytes,
        issues: []
      }, a[y.id] = A.fileId;
      const ee = t.provider;
      if (ee && ee.mode === "pull") {
        const le = await yf(ee, A.fileId);
        o.value = le;
      }
    } catch (A) {
      r.value = A instanceof Error ? A.message : String(A);
    } finally {
      l.value = !1;
    }
  }
  function G(y) {
    (!o.value || o.value.fileId === y.fileId) && (o.value = y);
  }
  function B(y) {
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
    visibleFields: E,
    price: w,
    /** The connected data-feed provider config, if any. */
    get provider() {
      return t.provider;
    },
    load: d,
    reload: p,
    select: O,
    toggle: Z,
    handleFile: z,
    feedMetadata: G,
    setFile: B
  };
}
function xf(e, t) {
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
function wf() {
  const e = /* @__PURE__ */ Vt(/* @__PURE__ */ new Map()), t = te(
    () => Array.from(e, ([s, a]) => ({ key: s, message: a.message }))
  ), n = te(() => e.size > 0);
  function i(s, a) {
    const o = e.get(s);
    o && o.message === a || e.set(s, { message: a });
  }
  function r(s) {
    e.delete(s);
  }
  return { list: t, held: n, add: i, release: r };
}
const gr = 1, _n = "[print-configurator]";
function kf(e) {
  const { host: t, cfg: n, validation: i, holds: r, producers: s } = e;
  function a(T) {
    return T === void 0 ? T : JSON.parse(JSON.stringify(T));
  }
  const o = te(() => !n.schema.value || !n.price.value ? null : {
    apiVersion: gr,
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
  function u(T, j) {
    if (!T)
      return ["selections", "quantity", "price", "file", "holds", "valid"];
    const re = [], ke = /* @__PURE__ */ new Set([
      ...Object.keys(T.selections),
      ...Object.keys(j.selections)
    ]);
    for (const He of ke)
      Kt(T.selections[He], j.selections[He]) || re.push(`selections.${He}`);
    return T.quantity !== j.quantity && re.push("quantity"), Kt(T.price, j.price) || re.push("price"), Kt(T.file, j.file) || re.push("file"), Kt(T.holds, j.holds) || re.push("holds"), T.valid !== j.valid && re.push("valid"), re;
  }
  let d = null;
  function p(T) {
    d = (T == null ? void 0 : T.source) ?? "api";
  }
  function m() {
    Ti(() => {
      d = null;
    });
  }
  yt(o, (T) => {
    if (!c || !T)
      return;
    const j = u(l, T), re = d ?? "user";
    l = T, j.length !== 0 && E("change", { ...T, source: re, changed: j });
  });
  function E(T, j) {
    t == null || t.dispatchEvent(
      new CustomEvent(T, { detail: j, bubbles: !0, composed: !0 })
    );
  }
  function w() {
    l = o.value, c = !0, l && E("ready", {
      ...l,
      source: "user"
    });
  }
  function O(T) {
    return T.sections.flatMap((j) => j.fields);
  }
  function Z(T) {
    const j = n.schema.value;
    if (!j)
      return null;
    const re = O(j);
    return re.find((ke) => ke.id === T) ?? re.find((ke) => ke.role === T) ?? /* Several quantity fields may exist (one per paper group, say);
    "the quantity field" is the one currently in play. */
    (T === "quantity" ? No(j, n.selections, n.file.value) : void 0) ?? re.find(
      (ke) => (T === "quantity" || T === "dimensions" || T === "file") && ke.type === T
    ) ?? null;
  }
  function z(T, j) {
    switch (T.type) {
      case "select-one":
        return typeof j == "string" && T.options.some((re) => re.id === j);
      case "select-many":
        return Array.isArray(j) && j.every(
          (re) => typeof re == "string" && T.options.some((ke) => ke.id === re)
        );
      case "quantity":
      case "number":
        return typeof j == "number" && Number.isFinite(j);
      case "text":
        return typeof j == "string";
      case "dimensions":
        return typeof j == "object" && j !== null && !Array.isArray(j) && Number.isFinite(j.w) && Number.isFinite(j.h);
      default:
        return !1;
    }
  }
  function G(T, j) {
    const re = n.schema.value, ke = re ? O(re).find((He) => He.id === T) : null;
    return ke ? z(ke, j) ? Kt(n.selections[T], j) ? !1 : (n.select(T, j), i.touch(T), !0) : (console.warn(
      `${_n} setSelection: invalid value for "${T}" (${ke.type})`,
      j
    ), !1) : (console.warn(`${_n} setSelection: unknown field "${T}"`), !1);
  }
  function B(T, j, re) {
    p(re), G(T, j), m();
  }
  function y(T, j) {
    if (typeof T != "object" || T === null) {
      console.warn(`${_n} setSelections: expected an object map`);
      return;
    }
    p(j);
    for (const [re, ke] of Object.entries(T))
      G(re, ke);
    m();
  }
  function N() {
    const T = n.schema.value;
    return T ? O(T).find((j) => j.type === "file") ?? null : null;
  }
  function A(T) {
    const j = N();
    !j || n.selections[j.id] === T || (n.select(j.id, T), i.touch(j.id));
  }
  function ee(T, j) {
    if (T === null) {
      const _e = N(), he = _e ? !Sf(n.selections[_e.id]) : !1;
      if (n.file.value === void 0 && !he)
        return;
      p(j), n.setFile(void 0), A(""), m();
      return;
    }
    const re = Hr.safeParse({
      version: "1.0",
      source: "custom",
      status: "ready",
      issues: [],
      ...T
    });
    if (!re.success) {
      console.warn(`${_n} setFile: invalid file record`, re.error.issues);
      return;
    }
    const ke = N(), He = Kt(n.file.value, re.data), Oe = !ke || n.selections[ke.id] === re.data.fileId;
    He && Oe || (p(j), He || n.setFile(re.data), A(re.data.fileId), m());
  }
  function le(T, j) {
    if (typeof T != "string" || T === "") {
      console.warn(`${_n} addHold: a non-empty string key is required`);
      return;
    }
    p(j), r.add(T, j == null ? void 0 : j.message), m();
  }
  function De(T, j) {
    p(j), r.release(T), m();
  }
  return {
    notifyReady: w,
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
        const j = Z(T);
        return j ? a(j) : null;
      },
      setSelection: B,
      setSelections: y,
      setFile: ee,
      addHold: le,
      releaseHold: De,
      /* Producer registry (docs/printapp-integration-v1.md). Not part
         of `state`: a producer is an offer available on the page, not
         an answer the customer has given, and nothing about the
         configuration changes when one appears. */
      registerProducer(T, j) {
        s.register(T, j);
      },
      unregisterProducer(T) {
        s.unregister(T);
      },
      /** Push-mode provider feed (pre-Page-API method, kept). */
      feedMetadata(T) {
        n.feedMetadata(T);
      },
      apiVersion: gr
    }
  };
}
function Sf(e) {
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
const Xs = "[print-configurator]", vr = 10;
function Cf(e) {
  const t = /* @__PURE__ */ Vt(/* @__PURE__ */ new Map()), n = te(
    () => Array.from(t.values()).sort((o, l) => o.order - l.order)
  );
  function i(o, l) {
    if (typeof o != "string" || o === "") {
      console.warn(`${Xs} registerProducer: a non-empty string id is required`);
      return;
    }
    const c = l == null ? void 0 : l.label;
    if (typeof c != "string" || c === "") {
      console.warn(`${Xs} registerProducer: "${o}" needs a label`);
      return;
    }
    t.set(o, {
      id: o,
      label: c,
      description: l.description,
      /* Default behind the built-in upload: the merchant's own file is
         the expected answer, an alternative producer is the offer. */
      order: Number.isFinite(l.order) ? Number(l.order) : vr + 10,
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
          apiVersion: gr,
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
const yr = "__artwork", Do = "__artwork-section";
function Tf(e) {
  return { id: Do, title: e, fields: [{
    id: yr,
    type: "file",
    display: "producer",
    accept: [],
    required: !1,
    priceModifiers: []
  }] };
}
function Af(e, t) {
  yt(
    [() => e.schema.value, () => t.list.value],
    ([n, i]) => {
      if (!n)
        return;
      const r = n.sections.some(
        (o) => o.fields.some(
          (l) => l.type === "file" && l.id !== yr
        )
      ), s = n.sections.findIndex(
        (o) => o.id === Do
      ), a = i.length > 0 && !r;
      a && s === -1 ? n.sections.push(Tf(i[0].label)) : !a && s !== -1 && (n.sections.splice(s, 1), e.select(yr, ""));
    },
    { immediate: !0, deep: !0 }
  );
}
const Lo = {
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
}, $f = {
  base: "summary.basePrice",
  "setup-fee": "summary.setupFee",
  "adjustment:minimum": "summary.minimumAdjustment"
};
function If(e, t) {
  const n = $f[t.sourceId];
  return n ? e(n) : t.label;
}
function Ef(e, t) {
  return t ? e.replace(
    /\{(\w+)\}/g,
    (n, i) => i in t ? String(t[i]) : n
  ) : e;
}
function zo(e) {
  const t = () => typeof e == "function" ? e() : e;
  return {
    t(n, i) {
      var a;
      const r = (a = t()) == null ? void 0 : a[n], s = typeof r == "string" && r !== "" ? r : Lo[n];
      return Ef(s, i);
    }
  };
}
function Of(e) {
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
    i in Lo && typeof r == "string" && (n[i] = r);
  return n;
}
const Wr = zo(), Vo = Symbol("print-configurator-strings");
function xt() {
  return Lt(Vo, Wr);
}
function Pf(e, t, n, i = Wr.t) {
  const r = /* @__PURE__ */ Vt(/* @__PURE__ */ new Set()), s = { value: !1 }, a = te(() => {
    const p = [];
    for (const m of e.value) {
      const E = Nf(m, t, i);
      E && p.push({ fieldId: m.id, message: E });
    }
    return p;
  }), o = te(
    () => {
      var p;
      return a.value.length === 0 && !(((p = n.value) == null ? void 0 : p.unavailable) ?? !1);
    }
  );
  function l(p) {
    var m;
    if (!(!r.has(p) && !s.value))
      return (m = a.value.find((E) => E.fieldId === p)) == null ? void 0 : m.message;
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
function Nf(e, t, n = Wr.t) {
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
    const s = ea(i.unit) / ea(e.defaultUnit), a = i.w * s, o = i.h * s;
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
function ea(e) {
  switch (e) {
    case "mm":
      return 1;
    case "cm":
      return 10;
    case "in":
      return 25.4;
  }
}
const Rf = /* @__PURE__ */ new Set([
  "left",
  "right",
  "left_space",
  "right_space"
]);
function Mf(e) {
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
  return typeof n.position == "string" && Rf.has(n.position) && (i.position = n.position), typeof n.decimals == "number" && Number.isInteger(n.decimals) && n.decimals >= 0 && n.decimals <= 8 && (i.decimals = n.decimals), typeof n.thousandSeparator == "string" && (i.thousandSeparator = n.thousandSeparator), typeof n.decimalSeparator == "string" && (i.decimalSeparator = n.decimalSeparator), i;
}
function Ff(e) {
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
function jf(e, t, n, i) {
  if (i)
    return Df(e, i);
  try {
    return new Intl.NumberFormat(Ff(n) ?? "en", {
      style: "currency",
      currency: t
    }).format(e);
  } catch {
    return `${t} ${e.toFixed(2)}`;
  }
}
function Df(e, t) {
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
function Oi(e, t) {
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
const Lf = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], zf = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], Vf = {
  key: 0,
  class: "check",
  "aria-hidden": "true"
}, Uf = ["src"], qf = { class: "card-label" }, Zf = {
  key: 2,
  class: "card-description"
}, ta = /* @__PURE__ */ Te({
  __name: "ChoiceCards",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Oi(
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
    return (c, u) => (v(), S("div", {
      class: et(["grid", e.field.display]),
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (v(!0), S(oe, null, Re(e.field.options, (d, p) => (v(), S("button", {
        key: d.id,
        type: "button",
        class: et(["card", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice card choice-selected" : "choice card",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-label": d.label,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : P(s).tabindexFor(d, p),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, p)
      }, [
        a(d.id) ? (v(), S("span", Vf, "✓")) : ue("", !0),
        d.image ? (v(), S("img", {
          key: 1,
          src: d.image,
          alt: ""
        }, null, 8, Uf)) : ue("", !0),
        L("span", qf, V(d.label), 1),
        d.description ? (v(), S("span", Zf, V(d.description), 1)) : ue("", !0)
      ], 42, zf))), 128))
    ], 10, Lf));
  }
}), Hf = ["id", "value", "aria-labelledby", "aria-describedby", "aria-invalid"], Bf = {
  key: 0,
  value: "",
  disabled: ""
}, Wf = ["value", "disabled"], Kf = /* @__PURE__ */ Te({
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
    return (a, o) => (v(), S("select", {
      id: `pc-control-${e.field.id}`,
      class: "dropdown",
      part: "dropdown",
      value: e.selectedIds[0] ?? "",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onChange: s
    }, [
      e.selectedIds.length ? ue("", !0) : (v(), S("option", Bf, V(e.field.label ? P(r)("choice.placeholder", { label: e.field.label.toLowerCase() }) : P(r)("choice.placeholderBare")), 1)),
      (v(!0), S(oe, null, Re(e.field.options, (l) => (v(), S("option", {
        key: l.id,
        value: l.id,
        disabled: n.unavailableIds.includes(l.id)
      }, V(l.label), 9, Wf))), 128))
    ], 40, Hf));
  }
}), Gf = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Yf = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], Qf = { key: 0 }, Jf = { class: "choice-body" }, Xf = { class: "choice-title" }, ep = {
  key: 0,
  class: "choice-description"
}, tp = /* @__PURE__ */ Te({
  __name: "ChoiceList",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Oi(
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
    return (c, u) => (v(), S("div", {
      class: "choice-list",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (v(!0), S(oe, null, Re(e.field.options, (d, p) => (v(), S("button", {
        key: d.id,
        type: "button",
        class: et(["choice-row", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice choice-selected" : "choice",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : P(s).tabindexFor(d, p),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, p)
      }, [
        L("span", {
          class: et(["choice-indicator", { multi: r }]),
          "aria-hidden": "true"
        }, [
          a(d.id) ? (v(), S("span", Qf, "✓")) : ue("", !0)
        ], 2),
        L("span", Jf, [
          L("span", Xf, V(d.label), 1),
          d.description ? (v(), S("span", ep, V(d.description), 1)) : ue("", !0)
        ])
      ], 42, Yf))), 128))
    ], 8, Gf));
  }
}), np = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], ip = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], rp = {
  key: 0,
  "aria-hidden": "true"
}, sp = /* @__PURE__ */ Te({
  __name: "ChoicePills",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Oi(
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
    return (c, u) => (v(), S("div", {
      class: "pills",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (v(!0), S(oe, null, Re(e.field.options, (d, p) => (v(), S("button", {
        key: d.id,
        type: "button",
        class: et(["pill", { active: a(d.id), unavailable: o(d.id) }]),
        part: a(d.id) ? "choice pill choice-selected" : "choice pill",
        role: r ? void 0 : "radio",
        "aria-checked": r ? void 0 : a(d.id),
        "aria-pressed": r ? a(d.id) : void 0,
        "aria-disabled": o(d.id) || void 0,
        tabindex: r ? 0 : P(s).tabindexFor(d, p),
        onClick: (m) => !o(d.id) && i("pick", d.id),
        onKeydown: (m) => l(m, p)
      }, [
        Fr(V(d.label) + " ", 1),
        a(d.id) ? (v(), S("span", rp, "✓")) : ue("", !0)
      ], 42, ip))), 128))
    ], 8, np));
  }
}), ap = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], op = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], lp = {
  key: 0,
  class: "swatch-check",
  "aria-hidden": "true"
}, cp = {
  key: 0,
  class: "swatch-selected-label",
  "aria-hidden": "true"
}, up = /* @__PURE__ */ Te({
  __name: "ChoiceSwatches",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Oi(
      () => n.field.options,
      () => n.selectedIds
    );
    function a(u) {
      return n.selectedIds.includes(u);
    }
    function o(u) {
      return n.unavailableIds.includes(u);
    }
    const l = te(
      () => n.field.options.filter((u) => n.selectedIds.includes(u.id)).map((u) => u.label).join(", ")
    );
    function c(u, d) {
      if (r)
        return;
      const p = s.onKeydown(u, d);
      p && !o(p) && i("pick", p);
    }
    return (u, d) => (v(), S("div", null, [
      L("div", {
        class: "swatches",
        role: r ? "group" : "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0
      }, [
        (v(!0), S(oe, null, Re(e.field.options, (p, m) => (v(), S("button", {
          key: p.id,
          type: "button",
          class: et(["swatch", { active: a(p.id), unavailable: o(p.id) }]),
          part: a(p.id) ? "choice swatch choice-selected" : "choice swatch",
          style: ki({ background: p.color }),
          role: r ? void 0 : "radio",
          "aria-checked": r ? void 0 : a(p.id),
          "aria-pressed": r ? a(p.id) : void 0,
          "aria-label": p.label,
          "aria-disabled": o(p.id) || void 0,
          tabindex: r ? 0 : P(s).tabindexFor(p, m),
          onClick: (E) => !o(p.id) && i("pick", p.id),
          onKeydown: (E) => c(E, m)
        }, [
          a(p.id) ? (v(), S("span", lp, "✓")) : ue("", !0)
        ], 46, op))), 128))
      ], 8, ap),
      l.value ? (v(), S("p", cp, V(l.value), 1)) : ue("", !0)
    ]));
  }
}), na = {
  cards: ta,
  grid: ta,
  swatches: up,
  pills: sp,
  dropdown: Kf,
  list: tp
}, Pi = Symbol("print-configurator"), dp = ["data-field-id", "data-type"], fp = ["id"], pp = {
  key: 0,
  class: "req",
  "aria-hidden": "true"
}, hp = {
  key: 1,
  class: "help",
  part: "field-help"
}, mp = ["id"], gp = /* @__PURE__ */ Te({
  __name: "FieldShell",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e, { expose: t }) {
    return t({ fieldId: e.field.id }), (i, r) => (v(), S("div", {
      class: "field",
      part: "field",
      "data-field-id": e.field.id,
      "data-type": e.field.type
    }, [
      e.field.label ? (v(), S("span", {
        key: 0,
        id: `pc-label-${e.field.id}`,
        class: "field-label",
        part: "field-label"
      }, [
        Fr(V(e.field.label) + " ", 1),
        e.field.required ? (v(), S("span", pp, "*")) : ue("", !0)
      ], 8, fp)) : ue("", !0),
      e.field.helpText ? (v(), S("p", hp, V(e.field.helpText), 1)) : ue("", !0),
      ec(i.$slots, "default"),
      e.error ? (v(), S("p", {
        key: 2,
        id: `pc-error-${e.field.id}`,
        class: "field-error",
        part: "field-error",
        role: "status"
      }, V(e.error), 9, mp)) : ue("", !0)
    ], 8, dp));
  }
}), vp = ["aria-labelledby"], yp = ["part", "aria-checked", "onClick"], bp = ["value", "aria-label"], _p = ["value"], xp = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], wp = {
  key: 3,
  class: "stepper",
  part: "stepper"
}, kp = ["aria-label", "disabled"], Sp = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Cp = ["aria-label", "disabled"], Tp = /* @__PURE__ */ Te({
  __name: "QuantityInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = te(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue
    ), { t: s } = xt(), a = te(() => n.field.label ?? s("quantity.label"));
    function o(p) {
      i("select", Vn(n.field, p)), i("touch");
    }
    function l(p) {
      o(r.value + p * n.field.step);
    }
    function c(p) {
      const m = p.target.value;
      if (m === "")
        return;
      const E = Number(m);
      Vn(n.field, E) === E && o(E);
    }
    function u(p) {
      const m = p.target;
      o(m.value === "" ? n.field.defaultValue : Number(m.value)), m.value = String(r.value);
    }
    function d(p) {
      u(p);
    }
    return (p, m) => {
      var E, w;
      return e.field.display === "pills" && ((E = e.field.presets) != null && E.length) ? (v(), S("div", {
        key: 0,
        class: "pills",
        role: "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0
      }, [
        (v(!0), S(oe, null, Re(e.field.presets, (O) => (v(), S("button", {
          key: O,
          type: "button",
          class: et(["pill", { active: r.value === O }]),
          part: r.value === O ? "choice pill choice-selected" : "choice pill",
          role: "radio",
          "aria-checked": r.value === O,
          onClick: (Z) => o(O)
        }, V(O), 11, yp))), 128))
      ], 8, vp)) : e.field.display === "dropdown" && ((w = e.field.presets) != null && w.length) ? (v(), S("select", {
        key: 1,
        class: "dropdown",
        part: "dropdown",
        value: String(r.value),
        "aria-label": a.value,
        onChange: m[0] || (m[0] = (O) => o(Number(O.target.value)))
      }, [
        (v(!0), S(oe, null, Re(e.field.presets, (O) => (v(), S("option", {
          key: O,
          value: String(O)
        }, V(O), 9, _p))), 128))
      ], 40, bp)) : e.field.display === "input" ? (v(), S("input", {
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
        onKeydown: Ps(ii(d, ["prevent"]), ["enter"])
      }, null, 40, xp)) : (v(), S("div", wp, [
        L("button", {
          type: "button",
          part: "stepper-decrement",
          "aria-label": P(s)("stepper.decrease", { label: a.value.toLowerCase() }),
          disabled: r.value <= e.field.min,
          onClick: m[1] || (m[1] = (O) => l(-1))
        }, " − ", 8, kp),
        L("input", {
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
          onKeydown: Ps(ii(d, ["prevent"]), ["enter"])
        }, null, 40, Sp),
        L("button", {
          type: "button",
          part: "stepper-increment",
          "aria-label": P(s)("stepper.increase", { label: a.value.toLowerCase() }),
          disabled: e.field.max !== void 0 && r.value >= e.field.max,
          onClick: m[2] || (m[2] = (O) => l(1))
        }, " + ", 8, Cp)
      ]));
    };
  }
}), Ap = {
  key: 0,
  class: "slider-row"
}, $p = ["value", "min", "max", "step", "aria-label"], Ip = {
  class: "slider-value",
  "aria-hidden": "true"
}, Ep = {
  key: 1,
  class: "stepper",
  part: "stepper"
}, Op = ["aria-label", "disabled"], Pp = ["value", "min", "max", "step", "aria-label"], Np = ["aria-label", "disabled"], Rp = ["value", "min", "max", "step", "aria-label", "aria-describedby", "aria-invalid"], Mp = /* @__PURE__ */ Te({
  __name: "NumberInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = te(
      () => typeof n.value == "number" ? n.value : n.field.defaultValue ?? 0
    ), { t: s } = xt(), a = te(() => n.field.label ?? n.field.id);
    function o(l) {
      Number.isNaN(l) || (i("select", l), i("touch"));
    }
    return (l, c) => e.field.display === "slider" ? (v(), S("div", Ap, [
      L("input", {
        type: "range",
        class: "slider",
        part: "stepper-input",
        value: r.value,
        min: e.field.min,
        max: e.field.max,
        step: e.field.step,
        "aria-label": a.value,
        onInput: c[0] || (c[0] = (u) => o(Number(u.target.value)))
      }, null, 40, $p),
      L("span", Ip, V(r.value), 1)
    ])) : e.field.display === "stepper" ? (v(), S("div", Ep, [
      L("button", {
        type: "button",
        part: "stepper-decrement",
        "aria-label": P(s)("stepper.decrease", { label: a.value.toLowerCase() }),
        disabled: e.field.min !== void 0 && r.value <= e.field.min,
        onClick: c[1] || (c[1] = (u) => o(r.value - (e.field.step ?? 1)))
      }, " − ", 8, Op),
      L("input", {
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
      }, null, 40, Pp),
      L("button", {
        type: "button",
        part: "stepper-increment",
        "aria-label": P(s)("stepper.increase", { label: a.value.toLowerCase() }),
        disabled: e.field.max !== void 0 && r.value >= e.field.max,
        onClick: c[4] || (c[4] = (u) => o(r.value + (e.field.step ?? 1)))
      }, " + ", 8, Np)
    ])) : (v(), S("input", {
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
    }, null, 40, Rp));
  }
}), Fp = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], jp = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], Dp = /* @__PURE__ */ Te({
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
    return (a, o) => e.field.display === "textarea" ? (v(), S("textarea", {
      key: 0,
      class: "text-input textarea",
      part: "text-input",
      value: typeof e.value == "string" ? e.value : P(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      rows: "3",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[0] || (o[0] = (l) => i("touch"))
    }, null, 40, Fp)) : (v(), S("input", {
      key: 1,
      class: "text-input",
      part: "text-input",
      type: "text",
      value: typeof e.value == "string" ? e.value : P(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[1] || (o[1] = (l) => i("touch"))
    }, null, 40, jp));
  }
}), Lp = {
  class: "dimensions",
  part: "dimensions"
}, zp = { class: "dim-input" }, Vp = { class: "dim-label" }, Up = ["value", "aria-describedby", "aria-invalid"], qp = { class: "dim-input" }, Zp = { class: "dim-label" }, Hp = ["value", "aria-describedby", "aria-invalid"], Bp = ["value", "aria-label"], Wp = ["value"], Kp = {
  key: 1,
  class: "dim-unit-static"
}, Gp = /* @__PURE__ */ Te({
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
    return (c, u) => (v(), S("div", Lp, [
      L("label", zp, [
        L("span", Vp, V(P(r)("dimensions.width")), 1),
        L("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(P(a).w) ? "" : P(a).w,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[0] || (u[0] = (d) => o({ w: l(d) }))
        }, null, 40, Up)
      ]),
      u[3] || (u[3] = L("span", {
        class: "dim-times",
        "aria-hidden": "true"
      }, "×", -1)),
      L("label", qp, [
        L("span", Zp, V(P(r)("dimensions.height")), 1),
        L("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(P(a).h) ? "" : P(a).h,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[1] || (u[1] = (d) => o({ h: l(d) }))
        }, null, 40, Hp)
      ]),
      e.field.units.length > 1 ? (v(), S("select", {
        key: 0,
        class: "dropdown dim-unit",
        part: "dropdown",
        value: P(a).unit,
        "aria-label": P(r)("dimensions.unit"),
        onChange: u[2] || (u[2] = (d) => o({ unit: d.target.value }))
      }, [
        (v(!0), S(oe, null, Re(e.field.units, (d) => (v(), S("option", {
          key: d,
          value: d
        }, V(d), 9, Wp))), 128))
      ], 40, Bp)) : (v(), S("span", Kp, V(e.field.defaultUnit), 1))
    ]));
  }
});
function Yp(e) {
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
  return Hr.parse(s);
}
const Qp = ["aria-busy"], Jp = ["id", "accept", "aria-labelledby", "aria-describedby", "aria-invalid"], Xp = ["for"], eh = {
  key: 0,
  class: "upload-status"
}, th = { class: "upload-filename" }, nh = { class: "upload-hint" }, ih = { class: "upload-title" }, rh = { class: "upload-hint" }, sh = /* @__PURE__ */ Te({
  __name: "FileUpload",
  props: {
    field: { type: null },
    file: { type: null },
    analyzing: { type: Boolean },
    error: { type: String }
  },
  emits: ["file", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = xt(), s = /* @__PURE__ */ Ze(!1), a = te(() => n.field.accept.join(","));
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
    return (c, u) => (v(), S("div", {
      class: et(["upload", { dragging: s.value, done: !!e.file }]),
      part: "upload",
      "aria-busy": e.analyzing || void 0,
      onDragover: u[0] || (u[0] = ii((d) => s.value = !0, ["prevent"])),
      onDragleave: u[1] || (u[1] = (d) => s.value = !1),
      onDrop: ii(l, ["prevent"])
    }, [
      L("input", {
        id: `pc-control-${e.field.id}`,
        class: "upload-input",
        part: "upload-input",
        type: "file",
        accept: a.value,
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0,
        onChange: o
      }, null, 40, Jp),
      L("label", {
        class: "upload-zone",
        for: `pc-control-${e.field.id}`
      }, [
        e.analyzing ? (v(), S("span", eh, V(P(r)("upload.analyzing")), 1)) : e.file ? (v(), S(oe, { key: 1 }, [
          L("span", th, V(e.file.fileName ?? e.file.fileId), 1),
          L("span", nh, V(P(r)("upload.replace")), 1)
        ], 64)) : (v(), S(oe, { key: 2 }, [
          L("span", ih, V(P(r)("upload.drop")), 1),
          L("span", rh, V(a.value), 1)
        ], 64))
      ], 8, Xp)
    ], 42, Qp));
  }
}), ah = "https://cdn.filecheck.io/element/v1/filecheck.js", oh = 1e4;
let xn = null;
function lh(e = ah) {
  return typeof window < "u" && window.Filecheck ? Promise.resolve(window.Filecheck) : xn || (xn = new Promise((t, n) => {
    const i = (a) => {
      xn = null, r.remove(), n(new Error(a));
    }, r = document.createElement("script");
    r.src = e, r.async = !0;
    const s = setTimeout(
      () => i("Filecheck SDK load timed out."),
      oh
    );
    r.addEventListener("load", () => {
      clearTimeout(s), window.Filecheck ? t(window.Filecheck) : i("Filecheck SDK loaded but window.Filecheck is missing.");
    }), r.addEventListener("error", () => {
      clearTimeout(s), i("Filecheck SDK failed to load.");
    }), document.head.appendChild(r);
  }), xn);
}
const ch = { mm: 1, cm: 10, in: 25.4 }, uh = [
  "artworkSize",
  "pageCount",
  "fileCount",
  "bleed",
  "safety"
];
function dh(e, t) {
  var r, s;
  const n = [];
  for (const a of e) {
    const o = t[a.id];
    if (!(o === void 0 || o === "")) {
      if (a.type === "dimensions" && Qe(o)) {
        const l = ch[o.unit] ?? 1;
        n.push({
          artworkSize: {
            width_mm: ia(o.w * l),
            height_mm: ia(o.h * l)
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
    for (const o of uh) {
      const l = a[o];
      l && (i[o] = { ...i[o] ?? {}, ...l });
    }
  return i;
}
function ia(e) {
  return Math.round(e * 10) / 10;
}
const fh = {
  class: "fc-upload",
  part: "upload"
}, ph = {
  key: 0,
  class: "fc-panel fc-unconfigured"
}, hh = {
  key: 1,
  class: "fc-panel fc-error",
  role: "alert"
}, mh = { class: "fc-panel-title" }, gh = { class: "fc-panel-hint" }, vh = {
  key: 0,
  class: "fc-loading"
}, yh = {
  key: 1,
  class: "field-error",
  role: "status"
}, bh = /* @__PURE__ */ Te({
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
    const u = Lt(Pi, null), d = te(() => {
      var O;
      if (!u)
        return null;
      const w = ((O = u.cfg.visibleFields) == null ? void 0 : O.value) ?? [];
      return dh(w, u.cfg.selections);
    });
    yt(d, (w) => {
      var O;
      (O = l == null ? void 0 : l.setContext) == null || O.call(l, w ?? null);
    });
    async function p() {
      var z, G, B;
      const w = n.provider.publishableKey, O = (z = n.field.filecheck) == null ? void 0 : z.workflowId, Z = (G = n.field.filecheck) != null && G.workflow ? /* @__PURE__ */ fe(n.field.filecheck.workflow) : void 0;
      if (!w || !O && !Z) {
        a.value = "unconfigured";
        return;
      }
      a.value = "loading", o.value = "";
      try {
        const y = await lh(n.provider.scriptUrl);
        if (!s.value)
          return;
        l = y(w, {
          agentId: n.provider.agentId,
          iframeSrc: n.provider.iframeSrc
        }).elements.create("intake", {
          // An inline workflow wins: it is the blueprint author's exact
          // intent, and demo blueprints rely on it to run against any
          // tenant with nothing saved in the Filecheck admin.
          ...Z ? { workflow: Z } : { workflowId: O },
          preview: n.provider.preview ?? !1
        }), c = l.on("status", (ee) => {
          i("metadata", ee), i("touch");
        }), l.on("error", (ee) => {
          const le = ee;
          o.value = (le == null ? void 0 : le.message) ?? "Filecheck reported an error.";
        });
        const A = d.value;
        A && ((B = l.setContext) == null || B.call(l, A)), l.mount(s.value), a.value = "active";
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
    function E() {
      m(), p();
    }
    return Pr(() => {
      p();
    }), yt(
      () => {
        var w, O;
        return [
          n.provider.publishableKey,
          n.provider.scriptUrl,
          n.provider.iframeSrc,
          n.provider.agentId,
          (w = n.field.filecheck) == null ? void 0 : w.workflowId,
          (O = n.field.filecheck) == null ? void 0 : O.workflow
        ];
      },
      () => {
        m(), p();
      }
    ), Da(m), (w, O) => (v(), S("div", fh, [
      a.value === "unconfigured" ? (v(), S("div", ph, [...O[0] || (O[0] = [
        L("span", { class: "fc-panel-title" }, "Filecheck upload", -1),
        L("span", { class: "fc-panel-hint" }, " Add your Filecheck publishable key in the store settings (or preview settings) to activate validated uploads for this field. ", -1)
      ])])) : a.value === "error" ? (v(), S("div", hh, [
        L("span", mh, V(P(r)("upload.unavailable")), 1),
        L("span", gh, V(o.value), 1),
        L("button", {
          type: "button",
          class: "fc-retry",
          onClick: E
        }, V(P(r)("upload.retry")), 1)
      ])) : (v(), S(oe, { key: 2 }, [
        a.value === "loading" ? (v(), S("p", vh, V(P(r)("upload.secureLoading")), 1)) : ue("", !0),
        L("div", {
          ref_key: "slot",
          ref: s,
          class: "fc-slot"
        }, null, 512),
        o.value ? (v(), S("p", yh, V(o.value), 1)) : ue("", !0)
      ], 64))
    ]));
  }
}), _h = {
  key: 0,
  class: "artwork",
  part: "artwork"
}, xh = { class: "artwork-body" }, wh = {
  class: "artwork-name",
  part: "artwork-name"
}, kh = {
  key: 0,
  class: "artwork-meta",
  part: "artwork-meta"
}, Sh = { class: "artwork-actions" }, Ch = {
  key: 1,
  class: "producers"
}, Th = {
  key: 0,
  class: "producer-or",
  "aria-hidden": "true"
}, Ah = ["onClick"], $h = { class: "producer-label" }, Ih = {
  key: 0,
  class: "producer-description"
}, Eh = {
  key: 1,
  class: "producer-or",
  "aria-hidden": "true"
}, Oh = {
  class: "producer-or",
  "aria-hidden": "true"
}, Ph = ["onClick"], Nh = { class: "producer-label" }, Rh = {
  key: 0,
  class: "producer-description"
}, Mh = /* @__PURE__ */ Te({
  __name: "ArtworkField",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e) {
    const t = e, n = Lt(Pi);
    if (!n)
      throw new Error("ArtworkField must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r, producers: s } = n, { t: a } = xt(), o = te(
      () => {
        var y, N, A;
        return t.field.providerId === "filecheck" && !!((y = t.field.filecheck) != null && y.workflowId || (N = t.field.filecheck) != null && N.workflow) && ((A = i.provider) == null ? void 0 : A.mode) === "element";
      }
    ), l = te(() => {
      const y = i.schema.value;
      if (!y)
        return !1;
      for (const N of y.sections)
        for (const A of N.fields)
          if (A.type === "file")
            return A.id === t.field.id;
      return !1;
    }), c = te(
      () => s.forField(t.field.id, l.value)
    ), u = te(() => {
      const y = i.selections[t.field.id];
      return typeof y == "string" && y !== "";
    }), d = te(() => {
      var N;
      const y = (N = i.file.value) == null ? void 0 : N.source;
      return y ? c.value.find((A) => A.id === y) ?? null : null;
    }), p = te(() => u.value && !d.value), m = te(() => t.field.display === "producer"), E = te(
      () => m.value ? c.value : c.value.filter((y) => y.order < vr)
    ), w = te(
      () => m.value ? [] : c.value.filter((y) => y.order >= vr)
    ), O = te(() => {
      const y = i.file.value;
      return y ? y.fileName ? y.fileName : d.value ? a("artwork.designName") : y.fileId : "";
    }), Z = te(() => {
      const y = i.file.value;
      if (!y)
        return "";
      const N = [], A = i.schema.value;
      return y.pages !== void 0 && A && hf(A) && N.push(
        y.pages === 1 ? a("artwork.pageCountOne") : a("artwork.pageCount", { count: y.pages })
      ), y.canvas && N.push(`${y.canvas.w} × ${y.canvas.h} ${y.canvas.unit}`), N.join(" · ");
    });
    function z(y) {
      i.setFile(Yp(y)), y.canProceed && y.jobId ? i.select(t.field.id, y.jobId) : i.select(t.field.id, "");
    }
    function G(y) {
      s.activate(y, t.field.id), r.touch(t.field.id);
    }
    function B() {
      i.setFile(void 0), i.select(t.field.id, ""), r.touch(t.field.id);
    }
    return (y, N) => d.value ? (v(), S("div", _h, [
      L("div", xh, [
        L("span", wh, V(O.value), 1),
        Z.value ? (v(), S("span", kh, V(Z.value), 1)) : ue("", !0)
      ]),
      L("div", Sh, [
        L("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-change",
          onClick: N[0] || (N[0] = (A) => G(d.value.id))
        }, V(P(a)("artwork.change")), 1),
        L("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-remove",
          onClick: B
        }, V(P(a)("artwork.remove")), 1)
      ])
    ])) : (v(), S("div", Ch, [
      p.value ? ue("", !0) : (v(!0), S(oe, { key: 0 }, Re(E.value, (A, ee) => (v(), S(oe, {
        key: A.id
      }, [
        m.value && ee > 0 ? (v(), S("p", Th, [
          L("span", null, V(P(a)("artwork.or")), 1)
        ])) : ue("", !0),
        L("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (le) => G(A.id)
        }, [
          L("span", $h, V(A.label), 1),
          A.description ? (v(), S("span", Ih, V(A.description), 1)) : ue("", !0)
        ], 8, Ah),
        m.value ? ue("", !0) : (v(), S("p", Eh, [
          L("span", null, V(P(a)("artwork.or")), 1)
        ]))
      ], 64))), 128)),
      !m.value && o.value && P(i).provider ? (v(), Ie(bh, {
        key: 1,
        field: e.field,
        provider: P(i).provider,
        onMetadata: z,
        onTouch: N[1] || (N[1] = (A) => P(r).touch(e.field.id))
      }, null, 8, ["field", "provider"])) : m.value ? ue("", !0) : (v(), Ie(sh, {
        key: 2,
        field: e.field,
        file: P(i).file.value,
        analyzing: P(i).fileAnalyzing.value,
        error: e.error,
        onFile: N[2] || (N[2] = (A, ee) => P(i).handleFile(A, ee)),
        onTouch: N[3] || (N[3] = (A) => P(r).touch(e.field.id))
      }, null, 8, ["field", "file", "analyzing", "error"])),
      p.value ? ue("", !0) : (v(!0), S(oe, { key: 3 }, Re(w.value, (A) => (v(), S(oe, {
        key: A.id
      }, [
        L("p", Oh, [
          L("span", null, V(P(a)("artwork.or")), 1)
        ]),
        L("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (ee) => G(A.id)
        }, [
          L("span", Nh, V(A.label), 1),
          A.description ? (v(), S("span", Rh, V(A.description), 1)) : ue("", !0)
        ], 8, Ph)
      ], 64))), 128))
    ]));
  }
}), Fh = {
  key: 0,
  class: "recap",
  part: "summary-recap"
}, jh = { part: "recap-label" }, Dh = { part: "recap-value" }, Lh = {
  key: 1,
  class: "recap-empty"
}, zh = /* @__PURE__ */ Te({
  __name: "SummaryPanel",
  props: {
    sections: { type: Array },
    selections: { type: Object },
    file: { type: null }
  },
  setup(e) {
    const t = e, { t: n } = xt(), i = te(
      () => jo(t.sections, t.selections, t.file, {
        quantityLabel: n("quantity.label")
      })
    );
    return (r, s) => i.value.length ? (v(), S("dl", Fh, [
      (v(!0), S(oe, null, Re(i.value, (a) => (v(), S("div", {
        key: a.fieldId,
        class: "recap-row",
        part: "recap-row"
      }, [
        L("dt", jh, V(a.label), 1),
        L("dd", Dh, V(a.value), 1)
      ]))), 128))
    ])) : (v(), S("p", Lh, V(P(n)("recap.empty")), 1));
  }
}), Vh = {
  key: 0,
  class: "info-note",
  part: "field-help"
}, Uh = /* @__PURE__ */ Te({
  __name: "InfoBlock",
  props: {
    field: { type: null }
  },
  setup(e) {
    return (t, n) => e.field.body ? (v(), S("p", Vh, V(e.field.body), 1)) : ue("", !0);
  }
}), Uo = /* @__PURE__ */ Te({
  __name: "FieldHost",
  props: {
    field: { type: null }
  },
  setup(e) {
    const t = e, n = Lt(Pi);
    if (!n)
      throw new Error("FieldHost must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r } = n, s = te(() => i.selections[t.field.id]), a = te(() => r.errorFor(t.field.id)), o = te(() => {
      const u = s.value;
      return Array.isArray(u) ? u : typeof u == "string" && u !== "" ? [u] : [];
    }), l = te(() => {
      if (!Ye(t.field) || !i.schema.value)
        return [];
      const u = i.schema.value;
      return t.field.options.filter(
        (d) => !sf(u, i.selections, t.field.id, d.id)
      ).map((d) => d.id);
    });
    function c(u) {
      t.field.type === "select-many" ? i.toggle(t.field, u) : i.select(t.field.id, u), r.touch(t.field.id);
    }
    return (u, d) => (v(), Ie(gp, {
      field: e.field,
      error: a.value
    }, {
      default: Pa(() => [
        e.field.type === "select-one" || e.field.type === "select-many" ? (v(), Ie(Jl(P(na)[e.field.display] ?? P(na).pills), {
          key: 0,
          field: e.field,
          "selected-ids": o.value,
          "unavailable-ids": l.value,
          error: a.value,
          onPick: c
        }, null, 40, ["field", "selected-ids", "unavailable-ids", "error"])) : e.field.type === "quantity" ? (v(), Ie(Tp, {
          key: 1,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[0] || (d[0] = (p) => P(i).select(e.field.id, p)),
          onTouch: d[1] || (d[1] = (p) => P(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "number" ? (v(), Ie(Mp, {
          key: 2,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[2] || (d[2] = (p) => P(i).select(e.field.id, p)),
          onTouch: d[3] || (d[3] = (p) => P(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "text" ? (v(), Ie(Dp, {
          key: 3,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[4] || (d[4] = (p) => P(i).select(e.field.id, p)),
          onTouch: d[5] || (d[5] = (p) => P(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "dimensions" ? (v(), Ie(Gp, {
          key: 4,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[6] || (d[6] = (p) => P(i).select(e.field.id, p)),
          onTouch: d[7] || (d[7] = (p) => P(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "file" ? (v(), Ie(Mh, {
          key: 5,
          field: e.field,
          error: a.value
        }, null, 8, ["field", "error"])) : e.field.type === "info" && e.field.display === "summary" ? (v(), Ie(zh, {
          key: 6,
          sections: P(i).visibleSections.value,
          selections: P(i).selections,
          file: P(i).file.value
        }, null, 8, ["sections", "selections", "file"])) : e.field.type === "info" ? (v(), Ie(Uh, {
          key: 7,
          field: e.field
        }, null, 8, ["field"])) : ue("", !0)
      ]),
      _: 1
    }, 8, ["field", "error"]));
  }
}), qh = {
  class: "section-title",
  part: "section-title"
}, Zh = /* @__PURE__ */ Te({
  __name: "SectionStack",
  props: {
    sections: { type: Array }
  },
  setup(e) {
    return (t, n) => (v(!0), S(oe, null, Re(e.sections, (i) => (v(), S("section", {
      key: i.section.id,
      class: "section",
      part: "section"
    }, [
      L("h3", qh, V(i.section.title), 1),
      (v(!0), S(oe, null, Re(i.fields, (r) => (v(), Ie(Uo, {
        key: r.id,
        field: r
      }, null, 8, ["field"]))), 128))
    ]))), 128));
  }
}), Hh = { class: "wizard" }, Bh = {
  class: "wizard-nav",
  part: "wizard-nav"
}, Wh = ["part", "aria-current"], Kh = ["onClick"], Gh = {
  class: "wizard-step-index",
  "aria-hidden": "true"
}, Yh = { class: "wizard-step-title" }, Qh = {
  key: 0,
  class: "section",
  part: "section"
}, Jh = { class: "wizard-actions" }, Xh = /* @__PURE__ */ Te({
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
      (w) => {
        a.value > w - 1 && (a.value = Math.max(0, w - 1));
      }
    );
    const l = te(() => i.sections[a.value]), c = te(() => a.value >= i.sections.length - 1);
    function u(w) {
      const O = i.sections[w];
      if (!O)
        return [];
      const Z = new Set(O.fields.map((z) => z.id));
      return i.issues.filter((z) => Z.has(z.fieldId));
    }
    function d(w) {
      return w === a.value ? "active" : w < a.value && u(w).length === 0 ? "done" : "todo";
    }
    async function p(w) {
      var O;
      a.value = Math.max(0, Math.min(w, i.sections.length - 1)), await Ti(), (O = o.value) == null || O.focus();
    }
    function m() {
      const w = u(a.value);
      if (w.length > 0) {
        r("blocked", w);
        return;
      }
      p(a.value + 1);
    }
    function E() {
      p(a.value - 1);
    }
    return t({ goTo: p, current: a }), (w, O) => (v(), S("div", Hh, [
      L("ol", Bh, [
        (v(!0), S(oe, null, Re(e.sections, (Z, z) => (v(), S("li", {
          key: Z.section.id,
          class: et(["wizard-step", d(z)]),
          part: `wizard-step wizard-step-${d(z)}`,
          "aria-current": z === a.value ? "step" : void 0
        }, [
          L("button", {
            type: "button",
            class: "wizard-step-button",
            onClick: (G) => p(z)
          }, [
            L("span", Gh, V(d(z) === "done" ? "✓" : z + 1), 1),
            L("span", Yh, V(Z.section.title), 1)
          ], 8, Kh)
        ], 10, Wh))), 128))
      ]),
      l.value ? (v(), S("section", Qh, [
        L("h3", {
          ref_key: "heading",
          ref: o,
          class: "section-title",
          part: "section-title",
          tabindex: "-1"
        }, V(l.value.section.title), 513),
        (v(!0), S(oe, null, Re(l.value.fields, (Z) => (v(), Ie(Uo, {
          key: Z.id,
          field: Z
        }, null, 8, ["field"]))), 128))
      ])) : ue("", !0),
      L("div", Jh, [
        a.value > 0 ? (v(), S("button", {
          key: 0,
          type: "button",
          class: "wizard-back",
          part: "wizard-back",
          onClick: E
        }, V(P(s)("wizard.back")), 1)) : ue("", !0),
        c.value ? ue("", !0) : (v(), S("button", {
          key: 1,
          type: "button",
          class: "wizard-next",
          part: "wizard-next",
          onClick: m
        }, V(P(s)("wizard.continue")), 1))
      ])
    ]));
  }
}), em = {
  class: "summary",
  part: "summary"
}, tm = { part: "summary-title" }, nm = { class: "lines" }, im = { part: "summary-line-label" }, rm = { part: "summary-line-value" }, sm = {
  class: "total",
  part: "summary-total",
  "aria-live": "polite",
  "aria-atomic": "true"
}, am = { part: "summary-total-label" }, om = { part: "price" }, lm = {
  key: 0,
  class: "unit-price",
  part: "summary-unit"
}, cm = {
  key: 1,
  class: "price-note",
  part: "summary-note"
}, um = {
  key: 2,
  class: "unavailable",
  role: "status"
}, dm = ["disabled"], fm = {
  class: "visually-hidden",
  role: "status"
}, pm = /* @__PURE__ */ Te({
  __name: "PriceSummary",
  props: {
    price: { type: [Object, null] },
    locale: { type: String },
    priceFormat: { type: Object },
    priceNote: { type: String },
    holds: { type: Array },
    issueCount: { type: Number }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = xt();
    function s(l) {
      var c;
      return jf(
        l,
        ((c = n.price) == null ? void 0 : c.currency) ?? "USD",
        n.locale,
        n.priceFormat
      );
    }
    const a = te(
      () => {
        var l;
        return (((l = n.price) == null ? void 0 : l.lines) ?? []).filter(
          (c) => !(c.stage === "base" && c.amount === 0)
        );
      }
    ), o = te(
      () => {
        var l, c;
        return (((l = n.price) == null ? void 0 : l.quantity) ?? 1) > 1 && !((c = n.price) != null && c.unavailable);
      }
    );
    return (l, c) => {
      var u, d, p, m;
      return v(), S("aside", em, [
        L("h3", tm, V(P(r)("summary.title")), 1),
        L("ul", nm, [
          (v(!0), S(oe, null, Re(a.value, (E, w) => (v(), S("li", {
            key: w,
            part: "summary-line"
          }, [
            L("span", im, V(P(If)(P(r), E)), 1),
            L("span", rm, V(s(E.amount)), 1)
          ]))), 128))
        ]),
        L("div", sm, [
          L("span", am, V(P(r)("summary.total")), 1),
          L("strong", om, V(s(((u = e.price) == null ? void 0 : u.total) ?? 0)), 1)
        ]),
        o.value ? (v(), S("p", lm, V(P(r)("summary.unitPrice", {
          quantity: ((d = e.price) == null ? void 0 : d.quantity) ?? 0,
          unitPrice: s(((p = e.price) == null ? void 0 : p.unitPrice) ?? 0)
        })), 1)) : ue("", !0),
        e.priceNote ? (v(), S("p", cm, V(e.priceNote), 1)) : ue("", !0),
        (m = e.price) != null && m.unavailable ? (v(), S("p", um, V(P(r)("summary.unavailable")), 1)) : ue("", !0),
        (v(!0), S(oe, null, Re(e.holds.filter((E) => E.message), (E) => (v(), S("p", {
          key: E.key,
          class: "hold-message",
          part: "hold-message",
          role: "status"
        }, V(E.message), 1))), 128)),
        L("button", {
          type: "button",
          class: "cta",
          part: "cta",
          disabled: e.holds.length > 0,
          onClick: c[0] || (c[0] = (E) => i("submit"))
        }, V(P(r)("summary.addToCart")), 9, dm),
        L("span", fm, V(e.issueCount > 0 ? P(r)("summary.issues", { count: e.issueCount }) : ""), 1)
      ]);
    };
  }
}), hm = {
  key: 0,
  class: "state"
}, mm = {
  key: 1,
  class: "state error",
  role: "alert"
}, gm = {
  key: 2,
  class: "layout"
}, vm = { class: "main" }, ym = /* @__PURE__ */ Te({
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
    strings: { type: [String, Object] },
    provider: { type: null },
    config: { type: null }
  },
  emits: ["submit", "invalid", "unconfigured"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n;
    function s(N) {
      if (N)
        try {
          const A = typeof N == "string" ? JSON.parse(N) : N;
          return Qd.parse(A);
        } catch {
          return;
        }
    }
    const a = _f({
      configUrl: i.configUrl,
      uploadEndpoint: i.uploadEndpoint,
      turnstileUrl: i.turnstileUrl,
      provider: s(i.provider),
      inlineConfig: i.config
    }), o = te(() => Of(i.strings)), l = zo(() => o.value);
    Ji(Vo, l);
    const c = te(() => Mf(i.priceFormat)), u = Pf(
      a.visibleFields,
      a.selections,
      a.price,
      l.t
    ), d = uu(), p = wf(), m = Cf({ host: d });
    Ji(Pi, { cfg: a, validation: u, producers: m });
    const E = kf({ host: d, cfg: a, validation: u, holds: p, producers: m });
    Af(a, m);
    const w = /* @__PURE__ */ Ze(null), O = /* @__PURE__ */ Ze(null);
    Pr(() => {
      (i.config || i.configUrl) && a.load().then(() => {
        a.unconfigured.value ? r("unconfigured", { productId: i.productId }) : a.schema.value && E.notifyReady();
      });
    }), yt(
      () => i.config,
      (N, A) => {
        N && N !== A && (u.reset(), a.reload({
          inlineConfig: N,
          provider: s(i.provider)
        }).then(() => {
          a.schema.value && E.notifyReady();
        }));
      }
    );
    const Z = te(() => {
      const N = {}, A = a.schema.value;
      if (!A)
        return N;
      for (const ee of A.sections)
        for (const le of ee.fields)
          if (N[le.id] = le.label ?? le.id, Ye(le))
            for (const De of le.options)
              N[`${le.id}:${De.id}`] = De.label;
      return N;
    });
    function z() {
      return !a.schema.value || !a.price.value ? null : {
        productId: a.schema.value.productId,
        selections: { ...a.selections },
        quantity: a.price.value.quantity,
        file: a.file.value,
        price: a.price.value,
        sku: a.price.value.sku,
        labels: Z.value,
        display: jo(
          a.visibleSections.value,
          a.selections,
          a.file.value,
          { quantityLabel: l.t("quantity.label") }
        )
      };
    }
    function G(N) {
      var ee, le;
      const A = (ee = w.value) == null ? void 0 : ee.querySelector(`[data-field-id="${N}"]`);
      A && (A.scrollIntoView({ behavior: "smooth", block: "center" }), (le = A.querySelector(
        "button, input, select, textarea, [tabindex]"
      )) == null || le.focus({ preventScroll: !0 }));
    }
    function B() {
      var ee, le, De;
      const N = z();
      if (!N)
        return;
      if (p.held.value) {
        r("invalid", {
          productId: N.productId,
          issues: [],
          holds: p.list.value
        });
        return;
      }
      const A = u.touchAll();
      if (A.length > 0 || (ee = a.price.value) != null && ee.unavailable) {
        const T = A[0];
        if (T) {
          const re = a.visibleSections.value.findIndex(
            (ke) => ke.fields.some((He) => He.id === T.fieldId)
          );
          ((le = a.schema.value) == null ? void 0 : le.layout) === "wizard" && re >= 0 && ((De = O.value) == null || De.goTo(re)), G(T.fieldId);
        }
        r("invalid", {
          productId: N.productId,
          issues: A
        });
        return;
      }
      r("submit", { ...N, valid: !0 });
    }
    function y(N) {
      for (const ee of N)
        u.touch(ee.fieldId);
      const A = N[0];
      A && G(A.fieldId);
    }
    return t(E.exposed), (N, A) => P(a).unconfigured.value ? ue("", !0) : (v(), S("div", {
      key: 0,
      ref_key: "root",
      ref: w,
      class: "configurator",
      part: "base"
    }, [
      P(a).loading.value ? (v(), S("p", hm, V(P(l).t("state.loading")), 1)) : P(a).error.value ? (v(), S("p", mm, V(P(a).error.value), 1)) : P(a).schema.value ? (v(), S("div", gm, [
        L("div", vm, [
          P(a).schema.value.layout === "wizard" ? (v(), Ie(Xh, {
            key: 0,
            ref_key: "wizard",
            ref: O,
            sections: P(a).visibleSections.value,
            issues: P(u).issues.value,
            onBlocked: y
          }, null, 8, ["sections", "issues"])) : (v(), Ie(Zh, {
            key: 1,
            sections: P(a).visibleSections.value
          }, null, 8, ["sections"]))
        ]),
        Xe(pm, {
          price: P(a).price.value,
          locale: i.locale,
          "price-format": c.value,
          "price-note": i.priceNote,
          holds: P(p).list.value,
          "issue-count": P(u).issues.value.length,
          onSubmit: B
        }, null, 8, ["price", "locale", "price-format", "price-note", "holds", "issue-count"])
      ])) : ue("", !0)
    ], 512));
  }
}), bm = ":host{--pc-color-accent: #1a1a1a;--pc-color-accent-contrast: #ffffff;--pc-color-accent-soft: #f6f6f4;--pc-color-surface: #ffffff;--pc-color-surface-alt: #fafafa;--pc-color-border: #e0e0dc;--pc-color-text: #1a1a1a;--pc-color-text-muted: #6b7280;--pc-color-danger: #c0392b;--pc-color-focus: var(--pc-color-accent);--pc-font-family: inherit;--pc-font-size: 1em;--pc-label-weight: 600;--pc-radius-control: 8px;--pc-radius-card: 12px;--pc-space: 4px;--pc-shadow-card: none;--pc-cta-bg: var(--pc-color-accent);--pc-cta-color: var(--pc-color-accent-contrast);--pc-swatch-size: 44px;--pc-card-image-height: 90px;display:block;container:pc-root / inline-size;font-family:var(--pc-font-family);font-size:var(--pc-font-size);color:var(--pc-color-text)}", _m = '*{box-sizing:border-box}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.state{padding:calc(var(--pc-space) * 8);text-align:center;color:var(--pc-color-text-muted)}.state.error{color:var(--pc-color-danger)}.layout{display:grid;grid-template-columns:1fr 300px;gap:calc(var(--pc-space) * 6);align-items:start}.section{margin-bottom:calc(var(--pc-space) * 6);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);box-shadow:var(--pc-shadow-card)}.section-title{margin:0 0 calc(var(--pc-space) * 4);text-transform:uppercase;letter-spacing:.04em;font-size:.95em;color:var(--pc-color-text);outline:none}.field{margin-bottom:calc(var(--pc-space) * 5)}.field:last-child{margin-bottom:0}.field-label{display:block;font-weight:var(--pc-label-weight);margin-bottom:calc(var(--pc-space) * 2)}.req{color:var(--pc-color-danger)}.help{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.field-error{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--pc-color-focus);outline-offset:2px}.grid{display:grid;gap:calc(var(--pc-space) * 3);grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.grid.cards{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.card{position:relative;display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;transition:border-color .15s ease}.card:hover{border-color:var(--pc-color-accent-soft)}.card.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.card img{max-width:100%;height:var(--pc-card-image-height);object-fit:contain}.card-label{font-size:.9em}.card-description{font-size:.8em;color:var(--pc-color-text-muted)}.check{position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);display:grid;place-items:center;font-size:.8em}.swatches{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.swatch{width:var(--pc-swatch-size);height:var(--pc-swatch-size);border-radius:50%;border:3px solid transparent;cursor:pointer;display:grid;place-items:center}.swatch.active{border-color:var(--pc-color-accent);box-shadow:0 0 0 2px var(--pc-color-surface) inset}.swatch-check{color:#fff;text-shadow:0 0 3px rgb(0 0 0 / .8);font-size:.9em}.swatch-selected-label{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.pills{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.pill{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);cursor:pointer}.pill.active{background:var(--pc-color-accent);border-color:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.choice-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.choice-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);padding:calc(var(--pc-space) * 3);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;text-align:left;cursor:pointer}.choice-row.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.choice-indicator{flex:none;width:20px;height:20px;border:2px solid var(--pc-color-border);border-radius:50%;display:grid;place-items:center;font-size:.7em;color:var(--pc-color-accent-contrast)}.choice-indicator.multi{border-radius:4px}.choice-row.active .choice-indicator{background:var(--pc-color-accent);border-color:var(--pc-color-accent)}.choice-body{display:flex;flex-direction:column}.choice-title{font-weight:var(--pc-label-weight)}.choice-description{font-size:.85em;color:var(--pc-color-text-muted)}.card.unavailable,.pill.unavailable,.swatch.unavailable,.choice-row.unavailable{opacity:.4;cursor:not-allowed;text-decoration:line-through}.dropdown{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.stepper{display:inline-flex;align-items:stretch;border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);overflow:hidden}.stepper button{width:40px;border:none;background:var(--pc-color-surface-alt);color:var(--pc-color-text);font-size:1.2em;cursor:pointer}.stepper button:disabled{opacity:.4;cursor:not-allowed}.stepper-value{width:4.5em;border:none;text-align:center;font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);background:var(--pc-color-surface);-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.stepper-value::-webkit-outer-spin-button,.stepper-value::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.number-input,.text-input{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.textarea{width:100%;resize:vertical}.slider-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3)}.slider{flex:1;accent-color:var(--pc-color-accent)}.slider-value{min-width:3em;text-align:right;font-weight:var(--pc-label-weight)}.dimensions{display:flex;align-items:flex-end;gap:calc(var(--pc-space) * 2);flex-wrap:wrap}.dim-input{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1)}.dim-label{font-size:.8em;color:var(--pc-color-text-muted)}.dim-input input{width:6em;padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);font:inherit;color:var(--pc-color-text);background:var(--pc-color-surface)}.dim-times{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.dim-unit{min-width:5em}.dim-unit-static{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.upload-input{position:absolute;width:1px;height:1px;opacity:0;overflow:hidden}.upload-zone{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 6);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);cursor:pointer;text-align:center}.upload.dragging .upload-zone{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.upload.done .upload-zone{border-style:solid;border-color:var(--pc-color-accent)}.upload-title{font-weight:var(--pc-label-weight)}.upload-hint{font-size:.8em;color:var(--pc-color-text-muted)}.upload-filename{font-weight:var(--pc-label-weight);color:var(--pc-color-accent);word-break:break-all}.upload-status{color:var(--pc-color-accent);font-weight:var(--pc-label-weight)}.producers{display:flex;flex-direction:column}.producer{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;text-align:center;transition:border-color .15s ease}.producer:hover{border-color:var(--pc-color-accent)}.producer-label{font-weight:var(--pc-label-weight)}.producer-description{font-size:.8em;color:var(--pc-color-text-muted)}.producer-or{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);margin:calc(var(--pc-space) * 3) 0;font-size:.8em;text-transform:uppercase;letter-spacing:.06em;color:var(--pc-color-text-muted)}.producer-or:before,.producer-or:after{content:"";flex:1;height:1px;background:var(--pc-color-border)}.artwork{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 4);flex-wrap:wrap;padding:calc(var(--pc-space) * 4) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-accent-soft)}.artwork-body{display:flex;flex-direction:column;min-width:0}.artwork-name{font-weight:var(--pc-label-weight);word-break:break-all}.artwork-meta{font-size:.85em;color:var(--pc-color-text-muted)}.artwork-actions{display:flex;gap:calc(var(--pc-space) * 2)}.artwork-action{padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-size:.9em;cursor:pointer}.artwork-action:hover{border-color:var(--pc-color-accent)}.fc-slot{min-height:40px}.fc-loading{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.fc-panel{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);text-align:center;align-items:center}.fc-panel.fc-error{border-color:var(--pc-color-danger)}.fc-panel-title{font-weight:var(--pc-label-weight)}.fc-panel-hint{font-size:.85em;color:var(--pc-color-text-muted)}.fc-retry{margin-top:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.recap{margin:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.recap-row{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 4);font-size:.9em}.recap-row dt{color:var(--pc-color-text-muted)}.recap-row dd{margin:0;text-align:right}.recap-empty,.info-note{margin:0;font-size:.9em;color:var(--pc-color-text-muted)}.summary{position:sticky;top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt)}.summary h3{margin:0 0 calc(var(--pc-space) * 4)}.lines{list-style:none;margin:0 0 calc(var(--pc-space) * 4);padding:0}.lines li{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0;color:var(--pc-color-text-muted)}.total{display:flex;justify-content:space-between;padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border);font-size:1.1em}.unit-price{margin:calc(var(--pc-space) * 1) 0 0;text-align:right;font-size:.85em;color:var(--pc-color-text-muted)}.price-note{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.unavailable{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.hold-message{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.cta{width:100%;margin-top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 3.5);border:none;border-radius:var(--pc-radius-control);background:var(--pc-cta-bg);color:var(--pc-cta-color);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.cta:disabled{opacity:.5;cursor:not-allowed}.wizard-nav{list-style:none;display:flex;gap:calc(var(--pc-space) * 2);margin:0 0 calc(var(--pc-space) * 5);padding:0;flex-wrap:wrap}.wizard-step-button{display:flex;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:none;border-radius:var(--pc-radius-control);background:transparent;font:inherit;color:var(--pc-color-text-muted);cursor:pointer}.wizard-step.active .wizard-step-button{background:var(--pc-color-accent-soft);color:var(--pc-color-text);font-weight:var(--pc-label-weight)}.wizard-step-index{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--pc-color-border);color:var(--pc-color-text);font-size:.75em}.wizard-step.active .wizard-step-index,.wizard-step.done .wizard-step-index{background:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.wizard-actions{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 3)}.wizard-back,.wizard-next{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 6);border-radius:var(--pc-radius-control);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.wizard-back{border:2px solid var(--pc-color-border);background:var(--pc-color-surface);color:var(--pc-color-text)}.wizard-next{border:none;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);margin-left:auto}@container pc-root (max-width: 640px){.layout{grid-template-columns:1fr}.summary{position:sticky;bottom:0;top:auto;z-index:2;border-radius:var(--pc-radius-card) var(--pc-radius-card) 0 0;box-shadow:0 -4px 12px #0000000f}}', xm = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, wm = /* @__PURE__ */ xm(ym, [["styles", [bm, _m]]]), km = /* @__PURE__ */ lu(wm);
function Sm(e = "print-configurator") {
  typeof customElements < "u" && !customElements.get(e) && customElements.define(e, km);
}
Sm();
export {
  Lo as DEFAULT_STRINGS,
  gr as PAGE_API_VERSION,
  km as PrintConfiguratorElement,
  Sm as registerPrintConfigurator
};
