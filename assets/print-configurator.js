var Cl = Object.defineProperty;
var $l = (e, t, n) => t in e ? Cl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Qt = (e, t, n) => $l(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ie = {}, gn = [], St = () => {
}, Fa = () => !1, Li = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Di = (e) => e.startsWith("onUpdate:"), Pe = Object.assign, Gr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Il = Object.prototype.hasOwnProperty, xe = (e, t) => Il.call(e, t), re = Array.isArray, vn = (e) => ii(e) === "[object Map]", ja = (e) => ii(e) === "[object Set]", Os = (e) => ii(e) === "[object Date]", ae = (e) => typeof e == "function", Ee = (e) => typeof e == "string", rt = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", La = (e) => (Se(e) || ae(e)) && ae(e.then) && ae(e.catch), Da = Object.prototype.toString, ii = (e) => Da.call(e), Nl = (e) => ii(e).slice(8, -1), zi = (e) => ii(e) === "[object Object]", qi = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zn = /* @__PURE__ */ Kr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ui = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, El = /-\w/g, ze = Ui(
  (e) => e.replace(El, (t) => t.slice(1).toUpperCase())
), Ol = /\B([A-Z])/g, tt = Ui(
  (e) => e.replace(Ol, "-$1").toLowerCase()
), Vi = Ui((e) => e.charAt(0).toUpperCase() + e.slice(1)), nr = Ui(
  (e) => e ? `on${Vi(e)}` : ""
), kt = (e, t) => !Object.is(e, t), ir = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, za = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Pl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ps = (e) => {
  const t = Ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ms;
const Bi = () => Ms || (Ms = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ri(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = Ee(i) ? jl(i) : ri(i);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Ee(e) || Se(e))
    return e;
}
const Ml = /;(?![^(]*\))/g, Rl = /:([^]+)/, Fl = /\/\*[^]*?\*\//g;
function jl(e) {
  const t = {};
  return e.replace(Fl, "").split(Ml).forEach((n) => {
    if (n) {
      const i = n.split(Rl);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Xe(e) {
  let t = "";
  if (Ee(e))
    t = e;
  else if (re(e))
    for (let n = 0; n < e.length; n++) {
      const i = Xe(e[n]);
      i && (t += i + " ");
    }
  else if (Se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ll = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Dl = /* @__PURE__ */ Kr(Ll);
function qa(e) {
  return !!e || e === "";
}
function zl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Yr(e[i], t[i]);
  return n;
}
function Yr(e, t) {
  if (e === t) return !0;
  let n = Os(e), i = Os(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = rt(e), i = rt(t), n || i)
    return e === t;
  if (n = re(e), i = re(t), n || i)
    return n && i ? zl(e, t) : !1;
  if (n = Se(e), i = Se(t), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !Yr(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Ua = (e) => !!(e && e.__v_isRef === !0), D = (e) => Ee(e) ? e : e == null ? "" : re(e) || Se(e) && (e.toString === Da || !ae(e.toString)) ? Ua(e) ? D(e.value) : JSON.stringify(e, Va, 2) : String(e), Va = (e, t) => Ua(t) ? Va(e, t.value) : vn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, r], s) => (n[rr(i, s) + " =>"] = r, n),
    {}
  )
} : ja(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => rr(n))
} : rt(t) ? rr(t) : Se(t) && !re(t) && !zi(t) ? String(t) : t, rr = (e, t = "") => {
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
let Ue;
class ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ue && (Ue.active ? (this.parent = Ue, this.index = (Ue.scopes || (Ue.scopes = [])).push(
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
      const n = Ue;
      try {
        return Ue = this, t();
      } finally {
        Ue = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ue, Ue = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ue === this)
        Ue = this.prevScope;
      else {
        let t = Ue;
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
function Ul() {
  return Ue;
}
let $e;
const sr = /* @__PURE__ */ new WeakSet();
class Ba {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ue && (Ue.active ? Ue.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, sr.has(this) && (sr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ha(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Rs(this), Wa(this);
    const t = $e, n = ft;
    $e = this, ft = !0;
    try {
      return this.fn();
    } finally {
      Ka(this), $e = t, ft = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Xr(t);
      this.deps = this.depsTail = void 0, Rs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? sr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    yr(this) && this.run();
  }
  get dirty() {
    return yr(this);
  }
}
let Za = 0, qn, Un;
function Ha(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Un, Un = e;
    return;
  }
  e.next = qn, qn = e;
}
function Qr() {
  Za++;
}
function Jr() {
  if (--Za > 0)
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
function Wa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ka(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const r = i.prevDep;
    i.version === -1 ? (i === n && (n = r), Xr(i), Vl(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r;
  }
  e.deps = t, e.depsTail = n;
}
function yr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ga(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ga(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Hn) || (e.globalVersion = Hn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !yr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = $e, i = ft;
  $e = e, ft = !0;
  try {
    Wa(e);
    const r = e.fn(e._value);
    (t.version === 0 || kt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    $e = n, ft = i, Ka(e), e.flags &= -3;
  }
}
function Xr(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: r } = e;
  if (i && (i.nextSub = r, e.prevSub = void 0), r && (r.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Xr(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Vl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ft = !0;
const Ya = [];
function Ft() {
  Ya.push(ft), ft = !1;
}
function jt() {
  const e = Ya.pop();
  ft = e === void 0 ? !0 : e;
}
function Rs(e) {
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
class Bl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class es {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!$e || !ft || $e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== $e)
      n = this.activeLink = new Bl($e, this), $e.deps ? (n.prevDep = $e.depsTail, $e.depsTail.nextDep = n, $e.depsTail = n) : $e.deps = $e.depsTail = n, Qa(n);
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
    Qr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Jr();
    }
  }
}
function Qa(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Qa(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const mi = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ Symbol(
  ""
), br = /* @__PURE__ */ Symbol(
  ""
), Wn = /* @__PURE__ */ Symbol(
  ""
);
function Ze(e, t, n) {
  if (ft && $e) {
    let i = mi.get(e);
    i || mi.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || (i.set(n, r = new es()), r.map = i, r.key = n), r.track();
  }
}
function Ot(e, t, n, i, r, s) {
  const a = mi.get(e);
  if (!a) {
    Hn++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Qr(), t === "clear")
    a.forEach(o);
  else {
    const l = re(e), c = l && qi(n);
    if (l && n === "length") {
      const u = Number(i);
      a.forEach((d, f) => {
        (f === "length" || f === Wn || !rt(f) && f >= u) && o(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), c && o(a.get(Wn)), t) {
        case "add":
          l ? c && o(a.get("length")) : (o(a.get(nn)), vn(e) && o(a.get(br)));
          break;
        case "delete":
          l || (o(a.get(nn)), vn(e) && o(a.get(br)));
          break;
        case "set":
          vn(e) && o(a.get(nn));
          break;
      }
  }
  Jr();
}
function Zl(e, t) {
  const n = mi.get(e);
  return n && n.get(t);
}
function dn(e) {
  const t = /* @__PURE__ */ ye(e);
  return t === e ? t : (Ze(t, "iterate", Wn), /* @__PURE__ */ it(e) ? t : t.map(pt));
}
function Zi(e) {
  return Ze(e = /* @__PURE__ */ ye(e), "iterate", Wn), e;
}
function _t(e, t) {
  return /* @__PURE__ */ Lt(e) ? wn(/* @__PURE__ */ rn(e) ? pt(t) : t) : pt(t);
}
const Hl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ar(this, Symbol.iterator, (e) => _t(this, e));
  },
  concat(...e) {
    return dn(this).concat(
      ...e.map((t) => re(t) ? dn(t) : t)
    );
  },
  entries() {
    return ar(this, "entries", (e) => (e[1] = _t(this, e[1]), e));
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
    return or(this, "includes", e);
  },
  indexOf(...e) {
    return or(this, "indexOf", e);
  },
  join(e) {
    return dn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return or(this, "lastIndexOf", e);
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
    return Fs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Fs(this, "reduceRight", e, t);
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
    return ar(this, "values", (e) => _t(this, e));
  }
};
function ar(e, t, n) {
  const i = Zi(e), r = i[t]();
  return i !== e && !/* @__PURE__ */ it(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const Wl = Array.prototype;
function $t(e, t, n, i, r, s) {
  const a = Zi(e), o = a !== e && !/* @__PURE__ */ it(e), l = a[t];
  if (l !== Wl[t]) {
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
function Fs(e, t, n, i) {
  const r = Zi(e), s = r !== e && !/* @__PURE__ */ it(e);
  let a = n, o = !1;
  r !== e && (s ? (o = i.length === 0, a = function(c, u, d) {
    return o && (o = !1, c = _t(e, c)), n.call(this, c, _t(e, u), d, e);
  }) : n.length > 3 && (a = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const l = r[t](a, ...i);
  return o ? _t(e, l) : l;
}
function or(e, t, n) {
  const i = /* @__PURE__ */ ye(e);
  Ze(i, "iterate", Wn);
  const r = i[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Hi(n[0]) ? (n[0] = /* @__PURE__ */ ye(n[0]), i[t](...n)) : r;
}
function Nn(e, t, n = []) {
  Ft(), Qr();
  const i = (/* @__PURE__ */ ye(e))[t].apply(e, n);
  return Jr(), jt(), i;
}
const Kl = /* @__PURE__ */ Kr("__proto__,__v_isRef,__isVue"), Ja = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rt)
);
function Gl(e) {
  rt(e) || (e = String(e));
  const t = /* @__PURE__ */ ye(this);
  return Ze(t, "has", e), t.hasOwnProperty(e);
}
class Xa {
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
      return i === (r ? s ? sc : io : s ? no : to).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const a = re(t);
    if (!r) {
      let l;
      if (a && (l = Hl[n]))
        return l;
      if (n === "hasOwnProperty")
        return Gl;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Le(t) ? t : i
    );
    if ((rt(n) ? Ja.has(n) : Kl(n)) || (r || Ze(t, "get", n), s))
      return o;
    if (/* @__PURE__ */ Le(o)) {
      const l = a && qi(n) ? o : o.value;
      return r && Se(l) ? /* @__PURE__ */ _r(l) : l;
    }
    return Se(o) ? r ? /* @__PURE__ */ _r(o) : /* @__PURE__ */ at(o) : o;
  }
}
class eo extends Xa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, r) {
    let s = t[n];
    const a = re(t) && qi(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Lt(s);
      if (!/* @__PURE__ */ it(i) && !/* @__PURE__ */ Lt(i) && (s = /* @__PURE__ */ ye(s), i = /* @__PURE__ */ ye(i)), !a && /* @__PURE__ */ Le(s) && !/* @__PURE__ */ Le(i))
        return c || (s.value = i), !0;
    }
    const o = a ? Number(n) < t.length : xe(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Le(t) ? t : r
    );
    return t === /* @__PURE__ */ ye(r) && (o ? kt(i, s) && Ot(t, "set", n, i) : Ot(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = xe(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && i && Ot(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!rt(n) || !Ja.has(n)) && Ze(t, "has", n), i;
  }
  ownKeys(t) {
    return Ze(
      t,
      "iterate",
      re(t) ? "length" : nn
    ), Reflect.ownKeys(t);
  }
}
class Yl extends Xa {
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
const Ql = /* @__PURE__ */ new eo(), Jl = /* @__PURE__ */ new Yl(), Xl = /* @__PURE__ */ new eo(!0);
const xr = (e) => e, ci = (e) => Reflect.getPrototypeOf(e);
function ec(e, t, n) {
  return function(...i) {
    const r = this.__v_raw, s = /* @__PURE__ */ ye(r), a = vn(s), o = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = r[e](...i), u = n ? xr : t ? wn : pt;
    return !t && Ze(
      s,
      "iterate",
      l ? br : nn
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
function tc(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ ye(s), o = /* @__PURE__ */ ye(r);
      e || (kt(r, o) && Ze(a, "get", r), Ze(a, "get", o));
      const { has: l } = ci(a), c = t ? xr : e ? wn : pt;
      if (l.call(a, r))
        return c(s.get(r));
      if (l.call(a, o))
        return c(s.get(o));
      s !== a && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ze(/* @__PURE__ */ ye(r), "iterate", nn), r.size;
    },
    has(r) {
      const s = this.__v_raw, a = /* @__PURE__ */ ye(s), o = /* @__PURE__ */ ye(r);
      return e || (kt(r, o) && Ze(a, "has", r), Ze(a, "has", o)), r === o ? s.has(r) : s.has(r) || s.has(o);
    },
    forEach(r, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ ye(o), c = t ? xr : e ? wn : pt;
      return !e && Ze(l, "iterate", nn), o.forEach((u, d) => r.call(s, c(u), c(d), a));
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
        const s = /* @__PURE__ */ ye(this), a = ci(s), o = /* @__PURE__ */ ye(r), l = !t && !/* @__PURE__ */ it(r) && !/* @__PURE__ */ Lt(r) ? o : r;
        return a.has.call(s, l) || kt(r, l) && a.has.call(s, r) || kt(o, l) && a.has.call(s, o) || (s.add(l), Ot(s, "add", l, l)), this;
      },
      set(r, s) {
        !t && !/* @__PURE__ */ it(s) && !/* @__PURE__ */ Lt(s) && (s = /* @__PURE__ */ ye(s));
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
    n[r] = ec(r, e, t);
  }), n;
}
function ts(e, t) {
  const n = tc(e, t);
  return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(
    xe(n, r) && r in i ? n : i,
    r,
    s
  );
}
const nc = {
  get: /* @__PURE__ */ ts(!1, !1)
}, ic = {
  get: /* @__PURE__ */ ts(!1, !0)
}, rc = {
  get: /* @__PURE__ */ ts(!0, !1)
};
const to = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), sc = /* @__PURE__ */ new WeakMap();
function ac(e) {
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
function at(e) {
  return /* @__PURE__ */ Lt(e) ? e : ns(
    e,
    !1,
    Ql,
    nc,
    to
  );
}
// @__NO_SIDE_EFFECTS__
function oc(e) {
  return ns(
    e,
    !1,
    Xl,
    ic,
    no
  );
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  return ns(
    e,
    !0,
    Jl,
    rc,
    io
  );
}
function ns(e, t, n, i, r) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = ac(Nl(e));
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
function it(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Hi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ye(t) : e;
}
function lc(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && za(e, "__v_skip", !0), e;
}
const pt = (e) => Se(e) ? /* @__PURE__ */ at(e) : e, wn = (e) => Se(e) ? /* @__PURE__ */ _r(e) : e;
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return cc(e, !1);
}
function cc(e, t) {
  return /* @__PURE__ */ Le(e) ? e : new uc(e, t);
}
class uc {
  constructor(t, n) {
    this.dep = new es(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ye(t), this._value = n ? t : pt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ it(t) || /* @__PURE__ */ Lt(t);
    t = i ? t : /* @__PURE__ */ ye(t), kt(t, n) && (this._rawValue = t, this._value = i ? t : pt(t), this.dep.trigger());
  }
}
function N(e) {
  return /* @__PURE__ */ Le(e) ? e.value : e;
}
const dc = {
  get: (e, t, n) => t === "__v_raw" ? e : N(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const r = e[t];
    return /* @__PURE__ */ Le(r) && !/* @__PURE__ */ Le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function ro(e) {
  return /* @__PURE__ */ rn(e) ? e : new Proxy(e, dc);
}
class fc {
  constructor(t, n, i) {
    this._object = t, this._defaultValue = i, this.__v_isRef = !0, this._value = void 0, this._key = rt(n) ? n : String(n), this._raw = /* @__PURE__ */ ye(t);
    let r = !0, s = t;
    if (!re(t) || rt(this._key) || !qi(this._key))
      do
        r = !/* @__PURE__ */ Hi(s) || /* @__PURE__ */ it(s);
      while (r && (s = s.__v_raw));
    this._shallow = r;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = N(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Le(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ Le(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Zl(this._raw, this._key);
  }
}
class pc {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function hc(e, t, n) {
  return /* @__PURE__ */ Le(e) ? e : ae(e) ? new pc(e) : Se(e) && arguments.length > 1 ? mc(e, t, n) : /* @__PURE__ */ He(e);
}
function mc(e, t, n) {
  return new fc(e, t, n);
}
class gc {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new es(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    $e !== this)
      return Ha(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ga(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function vc(e, t, n = !1) {
  let i, r;
  return ae(e) ? i = e : (i = e.get, r = e.set), new gc(i, r, n);
}
const di = {}, gi = /* @__PURE__ */ new WeakMap();
let en;
function yc(e, t = !1, n = en) {
  if (n) {
    let i = gi.get(n);
    i || gi.set(n, i = []), i.push(e);
  }
}
function bc(e, t, n = Ie) {
  const { immediate: i, deep: r, once: s, scheduler: a, augmentJob: o, call: l } = n, c = (O) => r ? O : /* @__PURE__ */ it(O) || r === !1 || r === 0 ? Wt(O, 1) : Wt(O);
  let u, d, f, m, g = !1, v = !1;
  if (/* @__PURE__ */ Le(e) ? (d = () => e.value, g = /* @__PURE__ */ it(e)) : /* @__PURE__ */ rn(e) ? (d = () => c(e), g = !0) : re(e) ? (v = !0, g = e.some((O) => /* @__PURE__ */ rn(O) || /* @__PURE__ */ it(O)), d = () => e.map((O) => {
    if (/* @__PURE__ */ Le(O))
      return O.value;
    if (/* @__PURE__ */ rn(O))
      return c(O);
    if (ae(O))
      return l ? l(O, 2) : O();
  })) : ae(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
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
  const x = Ul(), S = () => {
    u.stop(), x && x.active && Gr(x.effects, u);
  };
  if (s && t) {
    const O = t;
    t = (...Y) => {
      O(...Y), S();
    };
  }
  let _ = v ? new Array(e.length).fill(di) : di;
  const U = (O) => {
    if (!(!(u.flags & 1) || !u.dirty && !O))
      if (t) {
        const Y = u.run();
        if (r || g || (v ? Y.some((L, Q) => kt(L, _[Q])) : kt(Y, _))) {
          f && f();
          const L = en;
          en = u;
          try {
            const Q = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              _ === di ? void 0 : v && _[0] === di ? [] : _,
              m
            ];
            _ = Y, l ? l(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            en = L;
          }
        }
      } else
        u.run();
  };
  return o && o(U), u = new Ba(d), u.scheduler = a ? () => a(U, !1) : U, m = (O) => yc(O, !1, u), f = u.onStop = () => {
    const O = gi.get(u);
    if (O) {
      if (l)
        l(O, 4);
      else
        for (const Y of O) Y();
      gi.delete(u);
    }
  }, t ? i ? U(!0) : _ = u.run() : a ? a(U.bind(null, !0), !0) : u.run(), S.pause = u.pause.bind(u), S.resume = u.resume.bind(u), S.stop = S, S;
}
function Wt(e, t = 1 / 0, n) {
  if (t <= 0 || !Se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Le(e))
    Wt(e.value, t, n);
  else if (re(e))
    for (let i = 0; i < e.length; i++)
      Wt(e[i], t, n);
  else if (ja(e) || vn(e))
    e.forEach((i) => {
      Wt(i, t, n);
    });
  else if (zi(e)) {
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
    Wi(r, t, n);
  }
}
function ht(e, t, n, i) {
  if (ae(e)) {
    const r = si(e, t, n, i);
    return r && La(r) && r.catch((s) => {
      Wi(s, t, n);
    }), r;
  }
  if (re(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(ht(e[s], t, n, i));
    return r;
  }
}
function Wi(e, t, n, i = !0) {
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
  xc(e, n, r, i, a);
}
function xc(e, t, n, i = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Ge = [];
let xt = -1;
const yn = [];
let Zt = null, hn = 0;
const so = /* @__PURE__ */ Promise.resolve();
let vi = null;
function Ki(e) {
  const t = vi || so;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _c(e) {
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
    !(e.flags & 2) && t >= Kn(n) ? Ge.push(e) : Ge.splice(_c(t), 0, e), e.flags |= 1, ao();
  }
}
function ao() {
  vi || (vi = so.then(lo));
}
function wc(e) {
  re(e) ? yn.push(...e) : Zt && e.id === -1 ? Zt.splice(hn + 1, 0, e) : e.flags & 1 || (yn.push(e), e.flags |= 1), ao();
}
function js(e, t, n = xt + 1) {
  for (; n < Ge.length; n++) {
    const i = Ge[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Ge.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function oo(e) {
  if (yn.length) {
    const t = [...new Set(yn)].sort(
      (n, i) => Kn(n) - Kn(i)
    );
    if (yn.length = 0, Zt) {
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
function lo(e) {
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
    xt = -1, Ge.length = 0, oo(), vi = null, (Ge.length || yn.length) && lo();
  }
}
let Ye = null, co = null;
function yi(e) {
  const t = Ye;
  return Ye = e, co = e && e.type.__scopeId || null, t;
}
function uo(e, t = Ye, n) {
  if (!t || e._n)
    return e;
  const i = (...r) => {
    i._d && Gs(-1);
    const s = yi(t);
    let a;
    try {
      a = e(...r);
    } finally {
      yi(s), i._d && Gs(1);
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
function wr(e, t) {
  if (We) {
    let n = We.provides;
    const i = We.parent && We.parent.provides;
    i === n && (n = We.provides = Object.create(i)), n[e] = t;
  }
}
function Gt(e, t, n = !1) {
  const i = zo();
  if (i || xn) {
    let r = xn ? xn._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ae(t) ? t.call(i && i.proxy) : t;
  }
}
const kc = /* @__PURE__ */ Symbol.for("v-scx"), Sc = () => Gt(kc);
function Tt(e, t, n) {
  return fo(e, t, n);
}
function fo(e, t, n = Ie) {
  const { immediate: i, deep: r, flush: s, once: a } = n, o = Pe({}, n), l = t && i || !t && s !== "post";
  let c;
  if (Yn) {
    if (s === "sync") {
      const m = Sc();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = St, m.resume = St, m.pause = St, m;
    }
  }
  const u = We;
  o.call = (m, g, v) => ht(m, u, g, v);
  let d = !1;
  s === "post" ? o.scheduler = (m) => {
    Je(m, u && u.suspense);
  } : s !== "sync" && (d = !0, o.scheduler = (m, g) => {
    g ? m() : is(m);
  }), o.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const f = bc(e, t, o);
  return Yn && (c ? c.push(f) : l && f()), f;
}
function Tc(e, t, n) {
  const i = this.proxy, r = Ee(e) ? e.includes(".") ? po(i, e) : () => i[e] : e.bind(i, i);
  let s;
  ae(t) ? s = t : (s = t.handler, n = t);
  const a = ai(this), o = fo(r, s.bind(i), n);
  return a(), o;
}
function po(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
const Ac = /* @__PURE__ */ Symbol("_vte"), Cc = (e) => e.__isTeleport, lr = /* @__PURE__ */ Symbol("_leaveCb");
function rs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, rs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Oe(e, t) {
  return ae(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function ho(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ls(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const bi = /* @__PURE__ */ new WeakMap();
function Vn(e, t, n, i, r = !1) {
  if (re(e)) {
    e.forEach(
      (v, x) => Vn(
        v,
        t && (re(t) ? t[x] : t),
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
  const s = i.shapeFlag & 4 ? ds(i.component) : i.el, a = r ? null : s, { i: o, r: l } = e, c = t && t.r, u = o.refs === Ie ? o.refs = {} : o.refs, d = o.setupState, f = /* @__PURE__ */ ye(d), m = d === Ie ? Fa : (v) => Ls(u, v) ? !1 : xe(f, v), g = (v, x) => !(x && Ls(u, x));
  if (c != null && c !== l) {
    if (Ds(t), Ee(c))
      u[c] = null, m(c) && (d[c] = null);
    else if (/* @__PURE__ */ Le(c)) {
      const v = t;
      g(c, v.k) && (c.value = null), v.k && (u[v.k] = null);
    }
  }
  if (ae(l))
    si(l, o, 12, [a, u]);
  else {
    const v = Ee(l), x = /* @__PURE__ */ Le(l);
    if (v || x) {
      const S = () => {
        if (e.f) {
          const _ = v ? m(l) ? d[l] : u[l] : g() || !e.k ? l.value : u[e.k];
          if (r)
            re(_) && Gr(_, s);
          else if (re(_))
            _.includes(s) || _.push(s);
          else if (v)
            u[l] = [s], m(l) && (d[l] = u[l]);
          else {
            const U = [s];
            g(l, e.k) && (l.value = U), e.k && (u[e.k] = U);
          }
        } else v ? (u[l] = a, m(l) && (d[l] = a)) : x && (g(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const _ = () => {
          S(), bi.delete(e);
        };
        _.id = -1, bi.set(e, _), Je(_, n);
      } else
        Ds(e), S();
    }
  }
}
function Ds(e) {
  const t = bi.get(e);
  t && (t.flags |= 8, bi.delete(e));
}
Bi().requestIdleCallback;
Bi().cancelIdleCallback;
const bn = (e) => !!e.type.__asyncLoader, mo = (e) => e.type.__isKeepAlive;
function $c(e, t) {
  go(e, "a", t);
}
function Ic(e, t) {
  go(e, "da", t);
}
function go(e, t, n = We) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Gi(t, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      mo(r.parent.vnode) && Nc(i, t, n, r), r = r.parent;
  }
}
function Nc(e, t, n, i) {
  const r = Gi(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  yo(() => {
    Gr(i[t], r);
  }, n);
}
function Gi(e, t, n = We, i = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...a) => {
      Ft();
      const o = ai(n), l = ht(t, n, e, a);
      return o(), jt(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const qt = (e) => (t, n = We) => {
  (!Yn || e === "sp") && Gi(e, (...i) => t(...i), n);
}, Ec = qt("bm"), ss = qt("m"), Oc = qt(
  "bu"
), Pc = qt("u"), vo = qt(
  "bum"
), yo = qt("um"), Mc = qt(
  "sp"
), Rc = qt("rtg"), Fc = qt("rtc");
function jc(e, t = We) {
  Gi("ec", e, t);
}
const Lc = "components", bo = /* @__PURE__ */ Symbol.for("v-ndc");
function Dc(e) {
  return Ee(e) ? zc(Lc, e, !1) || e : e || bo;
}
function zc(e, t, n = !0, i = !1) {
  const r = Ye || We;
  if (r) {
    const s = r.type;
    {
      const o = Tu(
        s,
        !1
      );
      if (o && (o === t || o === ze(t) || o === Vi(ze(t))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      zs(r[e] || s[e], t) || // global registration
      zs(r.appContext[e], t)
    );
    return !a && i ? s : a;
  }
}
function zs(e, t) {
  return e && (e[t] || e[ze(t)] || e[Vi(ze(t))]);
}
function De(e, t, n, i) {
  let r;
  const s = n, a = re(e);
  if (a || Ee(e)) {
    const o = a && /* @__PURE__ */ rn(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ it(e), c = /* @__PURE__ */ Lt(e), e = Zi(e)), r = new Array(e.length);
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
function qc(e, t, n = {}, i, r) {
  if (Ye.ce || Ye.parent && bn(Ye.parent) && Ye.parent.ce) {
    const c = Object.keys(n).length > 0;
    return y(), je(
      ue,
      null,
      [ot("slot", n, i)],
      c ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1), y();
  const a = s && xo(s(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = je(
    ue,
    {
      key: (o && !rt(o) ? o : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && i ? "_fb" : "")
    },
    a || [],
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function xo(e) {
  return e.some((t) => ls(t) ? !(t.type === Dt || t.type === ue && !xo(t.children)) : !0) ? e : null;
}
const kr = (e) => e ? qo(e) ? ds(e) : kr(e.parent) : null, Bn = (
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
    $parent: (e) => kr(e.parent),
    $root: (e) => kr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => wo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      is(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ki.bind(e.proxy)),
    $watch: (e) => Tc.bind(e)
  })
), cr = (e, t) => e !== Ie && !e.__isScriptSetup && xe(e, t), Uc = {
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
        if (cr(i, t))
          return a[t] = 1, i[t];
        if (r !== Ie && xe(r, t))
          return a[t] = 2, r[t];
        if (xe(s, t))
          return a[t] = 3, s[t];
        if (n !== Ie && xe(n, t))
          return a[t] = 4, n[t];
        Sr && (a[t] = 0);
      }
    }
    const c = Bn[t];
    let u, d;
    if (c)
      return t === "$attrs" && Ze(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ie && xe(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, xe(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: r, ctx: s } = e;
    return cr(r, t) ? (r[t] = n, !0) : i !== Ie && xe(i, t) ? (i[t] = n, !0) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, props: s, type: a }
  }, o) {
    let l;
    return !!(n[o] || e !== Ie && o[0] !== "$" && xe(e, o) || cr(t, o) || xe(s, o) || xe(i, o) || xe(Bn, o) || xe(r.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function qs(e) {
  return re(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Sr = !0;
function Vc(e) {
  const t = wo(e), n = e.proxy, i = e.ctx;
  Sr = !1, t.beforeCreate && Us(t.beforeCreate, e, "bc");
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
    activated: v,
    deactivated: x,
    beforeDestroy: S,
    beforeUnmount: _,
    destroyed: U,
    unmounted: O,
    render: Y,
    renderTracked: L,
    renderTriggered: Q,
    errorCaptured: R,
    serverPrefetch: oe,
    // public API
    expose: he,
    inheritAttrs: be,
    // assets
    components: C,
    directives: P,
    filters: X
  } = t;
  if (c && Bc(c, i, null), a)
    for (const ve in a) {
      const w = a[ve];
      ae(w) && (i[ve] = w.bind(n));
    }
  if (r) {
    const ve = r.call(n, n);
    Se(ve) && (e.data = /* @__PURE__ */ at(ve));
  }
  if (Sr = !0, s)
    for (const ve in s) {
      const w = s[ve], H = ae(w) ? w.bind(n, n) : ae(w.get) ? w.get.bind(n, n) : St, fe = !ae(w) && ae(w.set) ? w.set.bind(n) : St, we = K({
        get: H,
        set: fe
      });
      Object.defineProperty(i, ve, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (Ne) => we.value = Ne
      });
    }
  if (o)
    for (const ve in o)
      _o(o[ve], i, n, ve);
  if (l) {
    const ve = ae(l) ? l.call(n) : l;
    Reflect.ownKeys(ve).forEach((w) => {
      wr(w, ve[w]);
    });
  }
  u && Us(u, e, "c");
  function _e(ve, w) {
    re(w) ? w.forEach((H) => ve(H.bind(n))) : w && ve(w.bind(n));
  }
  if (_e(Ec, d), _e(ss, f), _e(Oc, m), _e(Pc, g), _e($c, v), _e(Ic, x), _e(jc, R), _e(Fc, L), _e(Rc, Q), _e(vo, _), _e(yo, O), _e(Mc, oe), re(he))
    if (he.length) {
      const ve = e.exposed || (e.exposed = {});
      he.forEach((w) => {
        Object.defineProperty(ve, w, {
          get: () => n[w],
          set: (H) => n[w] = H,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === St && (e.render = Y), be != null && (e.inheritAttrs = be), C && (e.components = C), P && (e.directives = P), oe && ho(e);
}
function Bc(e, t, n = St) {
  re(e) && (e = Tr(e));
  for (const i in e) {
    const r = e[i];
    let s;
    Se(r) ? "default" in r ? s = Gt(
      r.from || i,
      r.default,
      !0
    ) : s = Gt(r.from || i) : s = Gt(r), /* @__PURE__ */ Le(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[i] = s;
  }
}
function Us(e, t, n) {
  ht(
    re(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function _o(e, t, n, i) {
  let r = i.includes(".") ? po(n, i) : () => n[i];
  if (Ee(e)) {
    const s = t[e];
    ae(s) && Tt(r, s);
  } else if (ae(e))
    Tt(r, e.bind(n));
  else if (Se(e))
    if (re(e))
      e.forEach((s) => _o(s, t, n, i));
    else {
      const s = ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      ae(s) && Tt(r, s, e);
    }
}
function wo(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, o = s.get(t);
  let l;
  return o ? l = o : !r.length && !n && !i ? l = t : (l = {}, r.length && r.forEach(
    (c) => xi(l, c, a, !0)
  ), xi(l, t, a)), Se(t) && s.set(t, l), l;
}
function xi(e, t, n, i = !1) {
  const { mixins: r, extends: s } = t;
  s && xi(e, s, n, !0), r && r.forEach(
    (a) => xi(e, a, n, !0)
  );
  for (const a in t)
    if (!(i && a === "expose")) {
      const o = Zc[a] || n && n[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const Zc = {
  data: Vs,
  props: Bs,
  emits: Bs,
  // objects
  methods: Rn,
  computed: Rn,
  // lifecycle
  beforeCreate: Ke,
  created: Ke,
  beforeMount: Ke,
  mounted: Ke,
  beforeUpdate: Ke,
  updated: Ke,
  beforeDestroy: Ke,
  beforeUnmount: Ke,
  destroyed: Ke,
  unmounted: Ke,
  activated: Ke,
  deactivated: Ke,
  errorCaptured: Ke,
  serverPrefetch: Ke,
  // assets
  components: Rn,
  directives: Rn,
  // watch
  watch: Wc,
  // provide / inject
  provide: Vs,
  inject: Hc
};
function Vs(e, t) {
  return t ? e ? function() {
    return Pe(
      ae(e) ? e.call(this, this) : e,
      ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Hc(e, t) {
  return Rn(Tr(e), Tr(t));
}
function Tr(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ke(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rn(e, t) {
  return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Bs(e, t) {
  return e ? re(e) && re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pe(
    /* @__PURE__ */ Object.create(null),
    qs(e),
    qs(t ?? {})
  ) : t;
}
function Wc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Ke(e[i], t[i]);
  return n;
}
function ko() {
  return {
    app: null,
    config: {
      isNativeTag: Fa,
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
let Kc = 0;
function Gc(e, t) {
  return function(i, r = null) {
    ae(i) || (i = Pe({}, i)), r != null && !Se(r) && (r = null);
    const s = ko(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = s.app = {
      _uid: Kc++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Cu,
      get config() {
        return s.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return a.has(u) || (u && ae(u.install) ? (a.add(u), u.install(c, ...d)) : ae(u) && (a.add(u), u(c, ...d))), c;
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
          const m = c._ceVNode || ot(i, r);
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
const Yc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ze(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function Qc(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ie;
  let r = n;
  const s = t.startsWith("update:"), a = s && Yc(i, t.slice(7));
  a && (a.trim && (r = n.map((u) => Ee(u) ? u.trim() : u)), a.number && (r = n.map(Pl)));
  let o, l = i[o = nr(t)] || // also try camelCase event handler (#2249)
  i[o = nr(ze(t))];
  !l && s && (l = i[o = nr(tt(t))]), l && ht(
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
const Jc = /* @__PURE__ */ new WeakMap();
function So(e, t, n = !1) {
  const i = n ? Jc : t.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let a = {}, o = !1;
  if (!ae(e)) {
    const l = (c) => {
      const u = So(c, t, !0);
      u && (o = !0, Pe(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !o ? (Se(e) && i.set(e, null), null) : (re(s) ? s.forEach((l) => a[l] = null) : Pe(a, s), Se(e) && i.set(e, a), a);
}
function Yi(e, t) {
  return !e || !Li(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, tt(t)) || xe(e, t));
}
function Zs(e) {
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
    inheritAttrs: v
  } = e, x = yi(e);
  let S, _;
  try {
    if (n.shapeFlag & 4) {
      const O = r || i, Y = O;
      S = wt(
        c.call(
          Y,
          O,
          u,
          d,
          m,
          f,
          g
        )
      ), _ = o;
    } else {
      const O = t;
      S = wt(
        O.length > 1 ? O(
          d,
          { attrs: o, slots: a, emit: l }
        ) : O(
          d,
          null
        )
      ), _ = t.props ? o : Xc(o);
    }
  } catch (O) {
    Zn.length = 0, Wi(O, e, 1), S = ot(Dt);
  }
  let U = S;
  if (_ && v !== !1) {
    const O = Object.keys(_), { shapeFlag: Y } = U;
    O.length && Y & 7 && (s && O.some(Di) && (_ = eu(
      _,
      s
    )), U = kn(U, _, !1, !0));
  }
  return n.dirs && (U = kn(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && rs(U, n.transition), S = U, yi(x), S;
}
const Xc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Li(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, eu = (e, t) => {
  const n = {};
  for (const i in e)
    (!Di(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function tu(e, t, n) {
  const { props: i, children: r, component: s } = e, { props: a, children: o, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Hs(i, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (To(a, i, f) && !Yi(c, f))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : i === a ? !1 : i ? a ? Hs(i, a, c) : !0 : !!a;
  return !1;
}
function Hs(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (To(t, e, s) && !Yi(n, s))
      return !0;
  }
  return !1;
}
function To(e, t, n) {
  const i = e[n], r = t[n];
  return n === "style" && Se(i) && Se(r) ? !Yr(i, r) : i !== r;
}
function nu({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = i, e = r), r === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Ao = {}, Co = () => Object.create(Ao), $o = (e) => Object.getPrototypeOf(e) === Ao;
function iu(e, t, n, i = !1) {
  const r = {}, s = Co();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Io(e, t, r, s);
  for (const a in e.propsOptions[0])
    a in r || (r[a] = void 0);
  n ? e.props = i ? r : /* @__PURE__ */ oc(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function ru(e, t, n, i) {
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
        if (Yi(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (xe(s, f))
            m !== s[f] && (s[f] = m, c = !0);
          else {
            const g = ze(f);
            r[g] = Ar(
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
    Io(e, t, r, s) && (c = !0);
    let u;
    for (const d in o)
      (!t || // for camelCase
      !xe(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = tt(d)) === d || !xe(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = Ar(
        l,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (s !== o)
      for (const d in s)
        (!t || !xe(t, d)) && (delete s[d], c = !0);
  }
  c && Ot(e.attrs, "set", "");
}
function Io(e, t, n, i) {
  const [r, s] = e.propsOptions;
  let a = !1, o;
  if (t)
    for (let l in t) {
      if (zn(l))
        continue;
      const c = t[l];
      let u;
      r && xe(r, u = ze(l)) ? !s || !s.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : Yi(e.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ ye(n), c = o || Ie;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = Ar(
        r,
        l,
        d,
        c[d],
        e,
        !xe(c, d)
      );
    }
  }
  return a;
}
function Ar(e, t, n, i, r, s) {
  const a = e[n];
  if (a != null) {
    const o = xe(a, "default");
    if (o && i === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ae(l)) {
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
const su = /* @__PURE__ */ new WeakMap();
function No(e, t, n = !1) {
  const i = n ? su : t.propsCache, r = i.get(e);
  if (r)
    return r;
  const s = e.props, a = {}, o = [];
  let l = !1;
  if (!ae(e)) {
    const u = (d) => {
      l = !0;
      const [f, m] = No(d, t, !0);
      Pe(a, f), m && o.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return Se(e) && i.set(e, gn), gn;
  if (re(s))
    for (let u = 0; u < s.length; u++) {
      const d = ze(s[u]);
      Ws(d) && (a[d] = Ie);
    }
  else if (s)
    for (const u in s) {
      const d = ze(u);
      if (Ws(d)) {
        const f = s[u], m = a[d] = re(f) || ae(f) ? { type: f } : Pe({}, f), g = m.type;
        let v = !1, x = !0;
        if (re(g))
          for (let S = 0; S < g.length; ++S) {
            const _ = g[S], U = ae(_) && _.name;
            if (U === "Boolean") {
              v = !0;
              break;
            } else U === "String" && (x = !1);
          }
        else
          v = ae(g) && g.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = v, m[
          1
          /* shouldCastTrue */
        ] = x, (v || xe(m, "default")) && o.push(d);
      }
    }
  const c = [a, o];
  return Se(e) && i.set(e, c), c;
}
function Ws(e) {
  return e[0] !== "$" && !zn(e);
}
const as = (e) => e === "_" || e === "_ctx" || e === "$stable", os = (e) => re(e) ? e.map(wt) : [wt(e)], au = (e, t, n) => {
  if (t._n)
    return t;
  const i = uo((...r) => os(t(...r)), n);
  return i._c = !1, i;
}, Eo = (e, t, n) => {
  const i = e._ctx;
  for (const r in e) {
    if (as(r)) continue;
    const s = e[r];
    if (ae(s))
      t[r] = au(r, s, i);
    else if (s != null) {
      const a = os(s);
      t[r] = () => a;
    }
  }
}, Oo = (e, t) => {
  const n = os(t);
  e.slots.default = () => n;
}, Po = (e, t, n) => {
  for (const i in t)
    (n || !as(i)) && (e[i] = t[i]);
}, ou = (e, t, n) => {
  const i = e.slots = Co();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Po(i, t, n), n && za(i, "_", r, !0)) : Eo(t, i);
  } else t && Oo(e, t);
}, lu = (e, t, n) => {
  const { vnode: i, slots: r } = e;
  let s = !0, a = Ie;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? s = !1 : Po(r, t, n) : (s = !t.$stable, Eo(t, r)), a = t;
  } else t && (Oo(e, t), a = { default: 1 });
  if (s)
    for (const o in r)
      !as(o) && a[o] == null && delete r[o];
}, Je = pu;
function cu(e) {
  return uu(e);
}
function uu(e, t) {
  const n = Bi();
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
  } = e, v = (p, h, b, I = null, A = null, T = null, z = void 0, j = null, F = !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !En(p, h) && (I = un(p), Ne(p, A, T, !0), p = null), h.patchFlag === -2 && (F = !1, h.dynamicChildren = null);
    const { type: $, ref: ee, shapeFlag: V } = h;
    switch ($) {
      case Qi:
        x(p, h, b, I);
        break;
      case Dt:
        S(p, h, b, I);
        break;
      case dr:
        p == null && _(h, b, I, z);
        break;
      case ue:
        C(
          p,
          h,
          b,
          I,
          A,
          T,
          z,
          j,
          F
        );
        break;
      default:
        V & 1 ? Y(
          p,
          h,
          b,
          I,
          A,
          T,
          z,
          j,
          F
        ) : V & 6 ? P(
          p,
          h,
          b,
          I,
          A,
          T,
          z,
          j,
          F
        ) : (V & 64 || V & 128) && $.process(
          p,
          h,
          b,
          I,
          A,
          T,
          z,
          j,
          F,
          $n
        );
    }
    ee != null && A ? Vn(ee, p && p.ref, T, h || p, !h) : ee == null && p && p.ref != null && Vn(p.ref, null, T, p, !0);
  }, x = (p, h, b, I) => {
    if (p == null)
      i(
        h.el = o(h.children),
        b,
        I
      );
    else {
      const A = h.el = p.el;
      h.children !== p.children && c(A, h.children);
    }
  }, S = (p, h, b, I) => {
    p == null ? i(
      h.el = l(h.children || ""),
      b,
      I
    ) : h.el = p.el;
  }, _ = (p, h, b, I) => {
    [p.el, p.anchor] = g(
      p.children,
      h,
      b,
      I,
      p.el,
      p.anchor
    );
  }, U = ({ el: p, anchor: h }, b, I) => {
    let A;
    for (; p && p !== h; )
      A = f(p), i(p, b, I), p = A;
    i(h, b, I);
  }, O = ({ el: p, anchor: h }) => {
    let b;
    for (; p && p !== h; )
      b = f(p), r(p), p = b;
    r(h);
  }, Y = (p, h, b, I, A, T, z, j, F) => {
    if (h.type === "svg" ? z = "svg" : h.type === "math" && (z = "mathml"), p == null)
      L(
        h,
        b,
        I,
        A,
        T,
        z,
        j,
        F
      );
    else {
      const $ = p.el && p.el._isVueCE ? p.el : null;
      try {
        $ && $._beginPatch(), oe(
          p,
          h,
          A,
          T,
          z,
          j,
          F
        );
      } finally {
        $ && $._endPatch();
      }
    }
  }, L = (p, h, b, I, A, T, z, j) => {
    let F, $;
    const { props: ee, shapeFlag: V, transition: J, dirs: se } = p;
    if (F = p.el = a(
      p.type,
      T,
      ee && ee.is,
      ee
    ), V & 8 ? u(F, p.children) : V & 16 && R(
      p.children,
      F,
      null,
      I,
      A,
      ur(p, T),
      z,
      j
    ), se && Jt(p, null, I, "created"), Q(F, p, p.scopeId, z, I), ee) {
      for (const Ce in ee)
        Ce !== "value" && !zn(Ce) && s(F, Ce, null, ee[Ce], T, I);
      "value" in ee && s(F, "value", null, ee.value, T), ($ = ee.onVnodeBeforeMount) && bt($, I, p);
    }
    se && Jt(p, null, I, "beforeMount");
    const me = du(A, J);
    me && J.beforeEnter(F), i(F, h, b), (($ = ee && ee.onVnodeMounted) || me || se) && Je(() => {
      try {
        $ && bt($, I, p), me && J.enter(F), se && Jt(p, null, I, "mounted");
      } finally {
      }
    }, A);
  }, Q = (p, h, b, I, A) => {
    if (b && m(p, b), I)
      for (let T = 0; T < I.length; T++)
        m(p, I[T]);
    if (A) {
      let T = A.subTree;
      if (h === T || jo(T.type) && (T.ssContent === h || T.ssFallback === h)) {
        const z = A.vnode;
        Q(
          p,
          z,
          z.scopeId,
          z.slotScopeIds,
          A.parent
        );
      }
    }
  }, R = (p, h, b, I, A, T, z, j, F = 0) => {
    for (let $ = F; $ < p.length; $++) {
      const ee = p[$] = j ? Et(p[$]) : wt(p[$]);
      v(
        null,
        ee,
        h,
        b,
        I,
        A,
        T,
        z,
        j
      );
    }
  }, oe = (p, h, b, I, A, T, z) => {
    const j = h.el = p.el;
    let { patchFlag: F, dynamicChildren: $, dirs: ee } = h;
    F |= p.patchFlag & 16;
    const V = p.props || Ie, J = h.props || Ie;
    let se;
    if (b && Xt(b, !1), (se = J.onVnodeBeforeUpdate) && bt(se, b, h, p), ee && Jt(h, p, b, "beforeUpdate"), b && Xt(b, !0), (V.innerHTML && J.innerHTML == null || V.textContent && J.textContent == null) && u(j, ""), $ ? he(
      p.dynamicChildren,
      $,
      j,
      b,
      I,
      ur(h, A),
      T
    ) : z || w(
      p,
      h,
      j,
      null,
      b,
      I,
      ur(h, A),
      T,
      !1
    ), F > 0) {
      if (F & 16)
        be(j, V, J, b, A);
      else if (F & 2 && V.class !== J.class && s(j, "class", null, J.class, A), F & 4 && s(j, "style", V.style, J.style, A), F & 8) {
        const me = h.dynamicProps;
        for (let Ce = 0; Ce < me.length; Ce++) {
          const Te = me[Ce], Me = V[Te], qe = J[Te];
          (qe !== Me || Te === "value") && s(j, Te, Me, qe, A, b);
        }
      }
      F & 1 && p.children !== h.children && u(j, h.children);
    } else !z && $ == null && be(j, V, J, b, A);
    ((se = J.onVnodeUpdated) || ee) && Je(() => {
      se && bt(se, b, h, p), ee && Jt(h, p, b, "updated");
    }, I);
  }, he = (p, h, b, I, A, T, z) => {
    for (let j = 0; j < h.length; j++) {
      const F = p[j], $ = h[j], ee = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !En(F, $) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 198) ? d(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      v(
        F,
        $,
        ee,
        null,
        I,
        A,
        T,
        z,
        !0
      );
    }
  }, be = (p, h, b, I, A) => {
    if (h !== b) {
      if (h !== Ie)
        for (const T in h)
          !zn(T) && !(T in b) && s(
            p,
            T,
            h[T],
            null,
            A,
            I
          );
      for (const T in b) {
        if (zn(T)) continue;
        const z = b[T], j = h[T];
        z !== j && T !== "value" && s(p, T, j, z, A, I);
      }
      "value" in b && s(p, "value", h.value, b.value, A);
    }
  }, C = (p, h, b, I, A, T, z, j, F) => {
    const $ = h.el = p ? p.el : o(""), ee = h.anchor = p ? p.anchor : o("");
    let { patchFlag: V, dynamicChildren: J, slotScopeIds: se } = h;
    se && (j = j ? j.concat(se) : se), p == null ? (i($, b, I), i(ee, b, I), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      b,
      ee,
      A,
      T,
      z,
      j,
      F
    )) : V > 0 && V & 64 && J && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === J.length ? (he(
      p.dynamicChildren,
      J,
      b,
      A,
      T,
      z,
      j
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || A && h === A.subTree) && Mo(
      p,
      h,
      !0
      /* shallow */
    )) : w(
      p,
      h,
      b,
      ee,
      A,
      T,
      z,
      j,
      F
    );
  }, P = (p, h, b, I, A, T, z, j, F) => {
    h.slotScopeIds = j, p == null ? h.shapeFlag & 512 ? A.ctx.activate(
      h,
      b,
      I,
      z,
      F
    ) : X(
      h,
      b,
      I,
      A,
      T,
      z,
      F
    ) : te(p, h, F);
  }, X = (p, h, b, I, A, T, z) => {
    const j = p.component = xu(
      p,
      I,
      A
    );
    if (mo(p) && (j.ctx.renderer = $n), _u(j, !1, z), j.asyncDep) {
      if (A && A.registerDep(j, _e, z), !p.el) {
        const F = j.subTree = ot(Dt);
        S(null, F, h, b), p.placeholder = F.el;
      }
    } else
      _e(
        j,
        p,
        h,
        b,
        A,
        T,
        z
      );
  }, te = (p, h, b) => {
    const I = h.component = p.component;
    if (tu(p, h, b))
      if (I.asyncDep && !I.asyncResolved) {
        ve(I, h, b);
        return;
      } else
        I.next = h, I.update();
    else
      h.el = p.el, I.vnode = h;
  }, _e = (p, h, b, I, A, T, z) => {
    const j = () => {
      if (p.isMounted) {
        let { next: V, bu: J, u: se, parent: me, vnode: Ce } = p;
        {
          const vt = Ro(p);
          if (vt) {
            V && (V.el = Ce.el, ve(p, V, z)), vt.asyncDep.then(() => {
              Je(() => {
                p.isUnmounted || $();
              }, A);
            });
            return;
          }
        }
        let Te = V, Me;
        Xt(p, !1), V ? (V.el = Ce.el, ve(p, V, z)) : V = Ce, J && ir(J), (Me = V.props && V.props.onVnodeBeforeUpdate) && bt(Me, me, V, Ce), Xt(p, !0);
        const qe = Zs(p), gt = p.subTree;
        p.subTree = qe, v(
          gt,
          qe,
          // parent may have changed if it's in a teleport
          d(gt.el),
          // anchor may have changed if it's in a fragment
          un(gt),
          p,
          A,
          T
        ), V.el = qe.el, Te === null && nu(p, qe.el), se && Je(se, A), (Me = V.props && V.props.onVnodeUpdated) && Je(
          () => bt(Me, me, V, Ce),
          A
        );
      } else {
        let V;
        const { el: J, props: se } = h, { bm: me, m: Ce, parent: Te, root: Me, type: qe } = p, gt = bn(h);
        Xt(p, !1), me && ir(me), !gt && (V = se && se.onVnodeBeforeMount) && bt(V, Te, h), Xt(p, !0);
        {
          Me.ce && Me.ce._hasShadowRoot() && Me.ce._injectChildStyle(
            qe,
            p.parent ? p.parent.type : void 0
          );
          const vt = p.subTree = Zs(p);
          v(
            null,
            vt,
            b,
            I,
            p,
            A,
            T
          ), h.el = vt.el;
        }
        if (Ce && Je(Ce, A), !gt && (V = se && se.onVnodeMounted)) {
          const vt = h;
          Je(
            () => bt(V, Te, vt),
            A
          );
        }
        (h.shapeFlag & 256 || Te && bn(Te.vnode) && Te.vnode.shapeFlag & 256) && p.a && Je(p.a, A), p.isMounted = !0, h = b = I = null;
      }
    };
    p.scope.on();
    const F = p.effect = new Ba(j);
    p.scope.off();
    const $ = p.update = F.run.bind(F), ee = p.job = F.runIfDirty.bind(F);
    ee.i = p, ee.id = p.uid, F.scheduler = () => is(ee), Xt(p, !0), $();
  }, ve = (p, h, b) => {
    h.component = p;
    const I = p.vnode.props;
    p.vnode = h, p.next = null, ru(p, h.props, I, b), lu(p, h.children, b), Ft(), js(p), jt();
  }, w = (p, h, b, I, A, T, z, j, F = !1) => {
    const $ = p && p.children, ee = p ? p.shapeFlag : 0, V = h.children, { patchFlag: J, shapeFlag: se } = h;
    if (J > 0) {
      if (J & 128) {
        fe(
          $,
          V,
          b,
          I,
          A,
          T,
          z,
          j,
          F
        );
        return;
      } else if (J & 256) {
        H(
          $,
          V,
          b,
          I,
          A,
          T,
          z,
          j,
          F
        );
        return;
      }
    }
    se & 8 ? (ee & 16 && Be($, A, T), V !== $ && u(b, V)) : ee & 16 ? se & 16 ? fe(
      $,
      V,
      b,
      I,
      A,
      T,
      z,
      j,
      F
    ) : Be($, A, T, !0) : (ee & 8 && u(b, ""), se & 16 && R(
      V,
      b,
      I,
      A,
      T,
      z,
      j,
      F
    ));
  }, H = (p, h, b, I, A, T, z, j, F) => {
    p = p || gn, h = h || gn;
    const $ = p.length, ee = h.length, V = Math.min($, ee);
    let J;
    for (J = 0; J < V; J++) {
      const se = h[J] = F ? Et(h[J]) : wt(h[J]);
      v(
        p[J],
        se,
        b,
        null,
        A,
        T,
        z,
        j,
        F
      );
    }
    $ > ee ? Be(
      p,
      A,
      T,
      !0,
      !1,
      V
    ) : R(
      h,
      b,
      I,
      A,
      T,
      z,
      j,
      F,
      V
    );
  }, fe = (p, h, b, I, A, T, z, j, F) => {
    let $ = 0;
    const ee = h.length;
    let V = p.length - 1, J = ee - 1;
    for (; $ <= V && $ <= J; ) {
      const se = p[$], me = h[$] = F ? Et(h[$]) : wt(h[$]);
      if (En(se, me))
        v(
          se,
          me,
          b,
          null,
          A,
          T,
          z,
          j,
          F
        );
      else
        break;
      $++;
    }
    for (; $ <= V && $ <= J; ) {
      const se = p[V], me = h[J] = F ? Et(h[J]) : wt(h[J]);
      if (En(se, me))
        v(
          se,
          me,
          b,
          null,
          A,
          T,
          z,
          j,
          F
        );
      else
        break;
      V--, J--;
    }
    if ($ > V) {
      if ($ <= J) {
        const se = J + 1, me = se < ee ? h[se].el : I;
        for (; $ <= J; )
          v(
            null,
            h[$] = F ? Et(h[$]) : wt(h[$]),
            b,
            me,
            A,
            T,
            z,
            j,
            F
          ), $++;
      }
    } else if ($ > J)
      for (; $ <= V; )
        Ne(p[$], A, T, !0), $++;
    else {
      const se = $, me = $, Ce = /* @__PURE__ */ new Map();
      for ($ = me; $ <= J; $++) {
        const et = h[$] = F ? Et(h[$]) : wt(h[$]);
        et.key != null && Ce.set(et.key, $);
      }
      let Te, Me = 0;
      const qe = J - me + 1;
      let gt = !1, vt = 0;
      const In = new Array(qe);
      for ($ = 0; $ < qe; $++) In[$] = 0;
      for ($ = se; $ <= V; $++) {
        const et = p[$];
        if (Me >= qe) {
          Ne(et, A, T, !0);
          continue;
        }
        let yt;
        if (et.key != null)
          yt = Ce.get(et.key);
        else
          for (Te = me; Te <= J; Te++)
            if (In[Te - me] === 0 && En(et, h[Te])) {
              yt = Te;
              break;
            }
        yt === void 0 ? Ne(et, A, T, !0) : (In[yt - me] = $ + 1, yt >= vt ? vt = yt : gt = !0, v(
          et,
          h[yt],
          b,
          null,
          A,
          T,
          z,
          j,
          F
        ), Me++);
      }
      const Is = gt ? fu(In) : gn;
      for (Te = Is.length - 1, $ = qe - 1; $ >= 0; $--) {
        const et = me + $, yt = h[et], Ns = h[et + 1], Es = et + 1 < ee ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ns.el || Fo(Ns)
        ) : I;
        In[$] === 0 ? v(
          null,
          yt,
          b,
          Es,
          A,
          T,
          z,
          j,
          F
        ) : gt && (Te < 0 || $ !== Is[Te] ? we(yt, b, Es, 2) : Te--);
      }
    }
  }, we = (p, h, b, I, A = null) => {
    const { el: T, type: z, transition: j, children: F, shapeFlag: $ } = p;
    if ($ & 6) {
      we(p.component.subTree, h, b, I);
      return;
    }
    if ($ & 128) {
      p.suspense.move(h, b, I);
      return;
    }
    if ($ & 64) {
      z.move(p, h, b, $n);
      return;
    }
    if (z === ue) {
      i(T, h, b);
      for (let V = 0; V < F.length; V++)
        we(F[V], h, b, I);
      i(p.anchor, h, b);
      return;
    }
    if (z === dr) {
      U(p, h, b);
      return;
    }
    if (I !== 2 && $ & 1 && j)
      if (I === 0)
        j.persisted && !T[lr] ? i(T, h, b) : (j.beforeEnter(T), i(T, h, b), Je(() => j.enter(T), A));
      else {
        const { leave: V, delayLeave: J, afterLeave: se } = j, me = () => {
          p.ctx.isUnmounted ? r(T) : i(T, h, b);
        }, Ce = () => {
          const Te = T._isLeaving || !!T[lr];
          T._isLeaving && T[lr](
            !0
            /* cancelled */
          ), j.persisted && !Te ? me() : V(T, () => {
            me(), se && se();
          });
        };
        J ? J(T, me, Ce) : Ce();
      }
    else
      i(T, h, b);
  }, Ne = (p, h, b, I = !1, A = !1) => {
    const {
      type: T,
      props: z,
      ref: j,
      children: F,
      dynamicChildren: $,
      shapeFlag: ee,
      patchFlag: V,
      dirs: J,
      cacheIndex: se,
      memo: me
    } = p;
    if (V === -2 && (A = !1), j != null && (Ft(), Vn(j, null, b, p, !0), jt()), se != null && (h.renderCache[se] = void 0), ee & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const Ce = ee & 1 && J, Te = !bn(p);
    let Me;
    if (Te && (Me = z && z.onVnodeBeforeUnmount) && bt(Me, h, p), ee & 6)
      Cn(p.component, b, I);
    else {
      if (ee & 128) {
        p.suspense.unmount(b, I);
        return;
      }
      Ce && Jt(p, null, h, "beforeUnmount"), ee & 64 ? p.type.remove(
        p,
        h,
        b,
        $n,
        I
      ) : $ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !$.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== ue || V > 0 && V & 64) ? Be(
        $,
        h,
        b,
        !1,
        !0
      ) : (T === ue && V & 384 || !A && ee & 16) && Be(F, h, b), I && st(p);
    }
    const qe = me != null && se == null;
    (Te && (Me = z && z.onVnodeUnmounted) || Ce || qe) && Je(() => {
      Me && bt(Me, h, p), Ce && Jt(p, null, h, "unmounted"), qe && (p.el = null);
    }, b);
  }, st = (p) => {
    const { type: h, el: b, anchor: I, transition: A } = p;
    if (h === ue) {
      cn(b, I);
      return;
    }
    if (h === dr) {
      O(p);
      return;
    }
    const T = () => {
      r(b), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (p.shapeFlag & 1 && A && !A.persisted) {
      const { leave: z, delayLeave: j } = A, F = () => z(b, T);
      j ? j(p.el, T, F) : F();
    } else
      T();
  }, cn = (p, h) => {
    let b;
    for (; p !== h; )
      b = f(p), r(p), p = b;
    r(h);
  }, Cn = (p, h, b) => {
    const { bum: I, scope: A, job: T, subTree: z, um: j, m: F, a: $ } = p;
    Ks(F), Ks($), I && ir(I), A.stop(), T && (T.flags |= 8, Ne(z, p, h, b)), j && Je(j, h), Je(() => {
      p.isUnmounted = !0;
    }, h);
  }, Be = (p, h, b, I = !1, A = !1, T = 0) => {
    for (let z = T; z < p.length; z++)
      Ne(p[z], h, b, I, A);
  }, un = (p) => {
    if (p.shapeFlag & 6)
      return un(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const h = f(p.anchor || p.el), b = h && h[Ac];
    return b ? f(b) : h;
  };
  let tr = !1;
  const $s = (p, h, b) => {
    let I;
    p == null ? h._vnode && (Ne(h._vnode, null, null, !0), I = h._vnode.component) : v(
      h._vnode || null,
      p,
      h,
      null,
      null,
      null,
      b
    ), h._vnode = p, tr || (tr = !0, js(I), oo(), tr = !1);
  }, $n = {
    p: v,
    um: Ne,
    m: we,
    r: st,
    mt: X,
    mc: R,
    pc: w,
    pbc: he,
    n: un,
    o: e
  };
  return {
    render: $s,
    hydrate: void 0,
    createApp: Gc($s)
  };
}
function ur({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Xt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function du(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mo(e, t, n = !1) {
  const i = e.children, r = t.children;
  if (re(i) && re(r))
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      let o = r[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[s] = Et(r[s]), o.el = a.el), !n && o.patchFlag !== -2 && Mo(a, o)), o.type === Qi && (o.patchFlag === -1 && (o = r[s] = Et(o)), o.el = a.el), o.type === Dt && !o.el && (o.el = a.el);
    }
}
function fu(e) {
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
function Ro(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ro(t);
}
function Ks(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Fo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Fo(t.subTree) : null;
}
const jo = (e) => e.__isSuspense;
function pu(e, t) {
  t && t.pendingBranch ? re(e) ? t.effects.push(...e) : t.effects.push(e) : wc(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), Qi = /* @__PURE__ */ Symbol.for("v-txt"), Dt = /* @__PURE__ */ Symbol.for("v-cmt"), dr = /* @__PURE__ */ Symbol.for("v-stc"), Zn = [];
let nt = null;
function y(e = !1) {
  Zn.push(nt = e ? null : []);
}
function hu() {
  Zn.pop(), nt = Zn[Zn.length - 1] || null;
}
let Gn = 1;
function Gs(e, t = !1) {
  Gn += e, e < 0 && nt && t && (nt.hasOnce = !0);
}
function Lo(e) {
  return e.dynamicChildren = Gn > 0 ? nt || gn : null, hu(), Gn > 0 && nt && nt.push(e), e;
}
function k(e, t, n, i, r, s) {
  return Lo(
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
function je(e, t, n, i, r) {
  return Lo(
    ot(
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
const Do = ({ key: e }) => e ?? null, pi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ee(e) || /* @__PURE__ */ Le(e) || ae(e) ? { i: Ye, r: e, k: t, f: !!n } : e : null);
function M(e, t = null, n = null, i = 0, r = null, s = e === ue ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Do(t),
    ref: t && pi(t),
    scopeId: co,
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
const ot = mu;
function mu(e, t = null, n = null, i = 0, r = null, s = !1) {
  if ((!e || e === bo) && (e = Dt), ls(e)) {
    const o = kn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && us(o, n), Gn > 0 && !s && nt && (o.shapeFlag & 6 ? nt[nt.indexOf(e)] = o : nt.push(o)), o.patchFlag = -2, o;
  }
  if (Au(e) && (e = e.__vccOpts), t) {
    t = gu(t);
    let { class: o, style: l } = t;
    o && !Ee(o) && (t.class = Xe(o)), Se(l) && (/* @__PURE__ */ Hi(l) && !re(l) && (l = Pe({}, l)), t.style = ri(l));
  }
  const a = Ee(e) ? 1 : jo(e) ? 128 : Cc(e) ? 64 : Se(e) ? 4 : ae(e) ? 2 : 0;
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
function gu(e) {
  return e ? /* @__PURE__ */ Hi(e) || $o(e) ? Pe({}, e) : e : null;
}
function kn(e, t, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: a, children: o, transition: l } = e, c = t ? vu(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Do(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? re(s) ? s.concat(pi(t)) : [s, pi(t)] : pi(t)
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
  return ot(Qi, null, e, t);
}
function ce(e = "", t = !1) {
  return t ? (y(), je(Dt, null, e)) : ot(Dt, null, e);
}
function wt(e) {
  return e == null || typeof e == "boolean" ? ot(Dt) : re(e) ? ot(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ls(e) ? Et(e) : ot(Qi, null, String(e));
}
function Et(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : kn(e);
}
function us(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (re(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), us(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !$o(t) ? t._ctx = Ye : r === 3 && Ye && (Ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ae(t) ? (t = { default: t, _ctx: Ye }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [cs(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const r in i)
      if (r === "class")
        t.class !== i.class && (t.class = Xe([t.class, i.class]));
      else if (r === "style")
        t.style = ri([t.style, i.style]);
      else if (Li(r)) {
        const s = t[r], a = i[r];
        a && s !== a && !(re(s) && s.includes(a)) ? t[r] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Di(r) && (t[r] = a);
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
const yu = ko();
let bu = 0;
function xu(e, t, n) {
  const i = e.type, r = (t ? t.appContext : e.appContext) || yu, s = {
    uid: bu++,
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
    scope: new ql(
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
    propsOptions: No(i, r),
    emitsOptions: So(i, r),
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Qc.bind(null, s), e.ce && e.ce(s), s;
}
let We = null;
const zo = () => We || Ye;
let _i, Cr;
{
  const e = Bi(), t = (n, i) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((a) => a(s)) : r[0](s);
    };
  };
  _i = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => We = n
  ), Cr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yn = n
  );
}
const ai = (e) => {
  const t = We;
  return _i(e), e.scope.on(), () => {
    e.scope.off(), _i(t);
  };
}, Ys = () => {
  We && We.scope.off(), _i(null);
};
function qo(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
function _u(e, t = !1, n = !1) {
  t && Cr(t);
  const { props: i, children: r } = e.vnode, s = qo(e);
  iu(e, i, s, t), ou(e, r, n || t);
  const a = s ? wu(e, t) : void 0;
  return t && Cr(!1), a;
}
function wu(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Uc);
  const { setup: i } = n;
  if (i) {
    Ft();
    const r = e.setupContext = i.length > 1 ? Su(e) : null, s = ai(e), a = si(
      i,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = La(a);
    if (jt(), s(), (o || e.sp) && !bn(e) && ho(e), o) {
      if (a.then(Ys, Ys), t)
        return a.then((l) => {
          Qs(e, l);
        }).catch((l) => {
          Wi(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Qs(e, a);
  } else
    Uo(e);
}
function Qs(e, t, n) {
  ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = ro(t)), Uo(e);
}
function Uo(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || St);
  {
    const r = ai(e);
    Ft();
    try {
      Vc(e);
    } finally {
      jt(), r();
    }
  }
}
const ku = {
  get(e, t) {
    return Ze(e, "get", ""), e[t];
  }
};
function Su(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ku),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ds(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ro(lc(e.exposed)), {
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
function Tu(e, t = !0) {
  return ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Au(e) {
  return ae(e) && "__vccOpts" in e;
}
const K = (e, t) => /* @__PURE__ */ vc(e, t, Yn), Cu = "3.5.35";
/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $r;
const Js = typeof window < "u" && window.trustedTypes;
if (Js)
  try {
    $r = /* @__PURE__ */ Js.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Vo = $r ? (e) => $r.createHTML(e) : (e) => e, $u = "http://www.w3.org/2000/svg", Iu = "http://www.w3.org/1998/Math/MathML", Nt = typeof document < "u" ? document : null, Xs = Nt && /* @__PURE__ */ Nt.createElement("template"), Nu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const r = t === "svg" ? Nt.createElementNS($u, e) : t === "mathml" ? Nt.createElementNS(Iu, e) : n ? Nt.createElement(e, { is: n }) : Nt.createElement(e);
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
      Xs.innerHTML = Vo(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Xs.content;
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
}, Eu = /* @__PURE__ */ Symbol("_vtc");
function Ou(e, t, n) {
  const i = e[Eu];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ea = /* @__PURE__ */ Symbol("_vod"), Pu = /* @__PURE__ */ Symbol("_vsh"), Mu = /* @__PURE__ */ Symbol(""), Ru = /(?:^|;)\s*display\s*:/;
function Fu(e, t, n) {
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
      o != null ? Lu(
        e,
        a,
        !Ee(t) && t ? t[a] : void 0,
        o
      ) || Fn(i, a, o) : Fn(i, a, "");
    }
  } else if (r) {
    if (t !== n) {
      const a = i[Mu];
      a && (n += ";" + a), i.cssText = n, s = Ru.test(n);
    }
  } else t && e.removeAttribute("style");
  ea in e && (e[ea] = s ? i.display : "", e[Pu] && (i.display = "none"));
}
const ta = /\s*!important$/;
function Fn(e, t, n) {
  if (re(n))
    n.forEach((i) => Fn(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = ju(e, t);
    ta.test(n) ? e.setProperty(
      tt(i),
      n.replace(ta, ""),
      "important"
    ) : e[i] = n;
  }
}
const na = ["Webkit", "Moz", "ms"], fr = {};
function ju(e, t) {
  const n = fr[t];
  if (n)
    return n;
  let i = ze(t);
  if (i !== "filter" && i in e)
    return fr[t] = i;
  i = Vi(i);
  for (let r = 0; r < na.length; r++) {
    const s = na[r] + i;
    if (s in e)
      return fr[t] = s;
  }
  return t;
}
function Lu(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ee(i) && n === i;
}
const ia = "http://www.w3.org/1999/xlink";
function ra(e, t, n, i, r, s = Dl(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ia, t.slice(6, t.length)) : e.setAttributeNS(ia, t, n) : n == null || s && !qa(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : rt(n) ? String(n) : n
  );
}
function sa(e, t, n, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Vo(n) : n);
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
    o === "boolean" ? n = qa(n) : n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(r || t);
}
function Du(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function zu(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const aa = /* @__PURE__ */ Symbol("_vei");
function qu(e, t, n, i, r = null) {
  const s = e[aa] || (e[aa] = {}), a = s[t];
  if (i && a)
    a.value = i;
  else {
    const [o, l] = Uu(t);
    if (i) {
      const c = s[t] = Zu(
        i,
        r
      );
      Du(e, o, c, l);
    } else a && (zu(e, o, a, l), s[t] = void 0);
  }
}
const oa = /(?:Once|Passive|Capture)$/;
function Uu(e) {
  let t;
  if (oa.test(e)) {
    t = {};
    let i;
    for (; i = e.match(oa); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let pr = 0;
const Vu = /* @__PURE__ */ Promise.resolve(), Bu = () => pr || (Vu.then(() => pr = 0), pr = Date.now());
function Zu(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const r = n.value;
    if (re(r)) {
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
  return n.value = e, n.attached = Bu(), n;
}
const la = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Hu = (e, t, n, i, r, s) => {
  const a = r === "svg";
  t === "class" ? Ou(e, i, a) : t === "style" ? Fu(e, n, i) : Li(t) ? Di(t) || qu(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wu(e, t, i, a)) ? (sa(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ra(e, t, i, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ku(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ee(i))) ? sa(e, ze(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ra(e, t, i, a));
};
function Wu(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && la(t) && ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return la(t) && Ee(n) ? !1 : t in e;
}
function Ku(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = ze(t);
  return Array.isArray(n) ? n.some((r) => ze(r) === i) : Object.keys(n).some((r) => ze(r) === i);
}
const ca = {};
// @__NO_SIDE_EFFECTS__
function Gu(e, t, n) {
  let i = /* @__PURE__ */ Oe(e, t);
  zi(i) && (i = Pe({}, i, t));
  class r extends fs {
    constructor(a) {
      super(i, a, n);
    }
  }
  return r.def = i, r;
}
const Yu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class fs extends Yu {
  constructor(t, n = {}, i = da) {
    super(), this._def = t, this._props = n, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && i !== da ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
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
    this._connected = !1, Ki(() => {
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
      if (s && !re(s))
        for (const l in s) {
          const c = s[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = Ps(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[ze(l)] = !0);
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
        xe(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => N(n[i])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, i = re(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && i.includes(r) && this._setProp(r, this[r]);
    for (const r of i.map(ze))
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
    let i = n ? this.getAttribute(t) : ca;
    const r = ze(t);
    n && this._numberProps && this._numberProps[r] && (i = Ps(i)), this._setProp(r, i, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === ca ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), i)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(tt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(tt(t), n + "") : n || this.removeAttribute(tt(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), nd(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ot(this._def, Pe(t, this._props));
    return this._instance || (n.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const r = (s, a) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            zi(a[0]) ? Pe({ detail: a }, a[0]) : { detail: a }
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
function Qu(e) {
  const t = zo(), n = t && t.ce;
  return n || null;
}
const Ju = ["ctrl", "shift", "alt", "meta"], Xu = {
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
  exact: (e, t) => Ju.some((n) => e[`${n}Key`] && !t.includes(n))
}, Qn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const o = Xu[t[a]];
      if (o && o(r, t)) return;
    }
    return e(r, ...s);
  });
}, ed = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ir = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (r) => {
    if (!("key" in r))
      return;
    const s = tt(r.key);
    if (t.some(
      (a) => a === s || ed[a] === s
    ))
      return e(r);
  });
}, td = /* @__PURE__ */ Pe({ patchProp: Hu }, Nu);
let ua;
function Bo() {
  return ua || (ua = cu(td));
}
const nd = (...e) => {
  Bo().render(...e);
}, da = (...e) => {
  const t = Bo().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const r = rd(i);
    if (!r) return;
    const s = t._component;
    !ae(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const a = n(r, !1, id(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
};
function id(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function rd(e) {
  return Ee(e) ? document.querySelector(e) : e;
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
var fa;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(fa || (fa = {}));
const Z = ge.arrayToEnum([
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
}, E = ge.arrayToEnum([
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
zt.create = (e) => new zt(e);
const Nr = (e, t) => {
  let n;
  switch (e.code) {
    case E.invalid_type:
      e.received === Z.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case E.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, ge.jsonStringifyReplacer)}`;
      break;
    case E.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ge.joinValues(e.keys, ", ")}`;
      break;
    case E.invalid_union:
      n = "Invalid input";
      break;
    case E.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ge.joinValues(e.options)}`;
      break;
    case E.invalid_enum_value:
      n = `Invalid enum value. Expected ${ge.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : ge.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
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
      n = t.defaultError, ge.assertNever(e);
  }
  return { message: n };
};
let sd = Nr;
function ad() {
  return sd;
}
const od = (e) => {
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
  const n = ad(), i = od({
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
      n === Nr ? void 0 : Nr
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
}), jn = (e) => ({ status: "dirty", value: e }), lt = (e) => ({ status: "valid", value: e }), pa = (e) => e.status === "aborted", ha = (e) => e.status === "dirty", Sn = (e) => e.status === "valid", wi = (e) => typeof Promise < "u" && e instanceof Promise;
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
const ma = (e, t) => {
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
    if (wi(n))
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
    return ma(i, r);
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
    }, r = this._parse({ data: t, path: i.path, parent: i }), s = await (wi(r) ? r : Promise.resolve(r));
    return ma(i, s);
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
    return Ii.create(this, this._def);
  }
  or(t) {
    return Si.create([this, t], this._def);
  }
  and(t) {
    return Ti.create(this, t, this._def);
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
    return new Ni({
      ...le(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ie.ZodDefault
    });
  }
  brand() {
    return new Ko({
      typeName: ie.ZodBranded,
      type: this,
      ...le(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ei({
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
    return Oi.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const ld = /^c[^\s-]{8,}$/i, cd = /^[0-9a-z]+$/, ud = /^[0-9A-HJKMNP-TV-Z]{26}$/i, dd = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, fd = /^[a-z0-9_-]{21}$/i, pd = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, hd = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, md = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, gd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let hr;
const vd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, yd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, bd = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, xd = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, _d = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, wd = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Zo = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", kd = new RegExp(`^${Zo}$`);
function Ho(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function Sd(e) {
  return new RegExp(`^${Ho(e)}$`);
}
function Td(e) {
  let t = `${Zo}T${Ho(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Ad(e, t) {
  return !!((t === "v4" || !t) && vd.test(e) || (t === "v6" || !t) && bd.test(e));
}
function Cd(e, t) {
  if (!pd.test(e))
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
function $d(e, t) {
  return !!((t === "v4" || !t) && yd.test(e) || (t === "v6" || !t) && xd.test(e));
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
        md.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "email",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "emoji")
        hr || (hr = new RegExp(gd, "u")), hr.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "emoji",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "uuid")
        dd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "uuid",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "nanoid")
        fd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "nanoid",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid")
        ld.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "cuid",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "cuid2")
        cd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
          validation: "cuid2",
          code: E.invalid_string,
          message: s.message
        }), i.dirty());
      else if (s.kind === "ulid")
        ud.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
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
      }), i.dirty()) : s.kind === "datetime" ? Td(s).test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: E.invalid_string,
        validation: "datetime",
        message: s.message
      }), i.dirty()) : s.kind === "date" ? kd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: E.invalid_string,
        validation: "date",
        message: s.message
      }), i.dirty()) : s.kind === "time" ? Sd(s).test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        code: E.invalid_string,
        validation: "time",
        message: s.message
      }), i.dirty()) : s.kind === "duration" ? hd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "duration",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "ip" ? Ad(t.data, s.version) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "ip",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "jwt" ? Cd(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "jwt",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "cidr" ? $d(t.data, s.version) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "cidr",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64" ? _d.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "base64",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : s.kind === "base64url" ? wd.test(t.data) || (r = this._getOrReturnCtx(t, r), q(r, {
        validation: "base64url",
        code: E.invalid_string,
        message: s.message
      }), i.dirty()) : ge.assertNever(s);
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
function Id(e, t) {
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
      s.kind === "int" ? ge.isInteger(t.data) || (i = this._getOrReturnCtx(t, i), q(i, {
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
      }), r.dirty()) : s.kind === "multipleOf" ? Id(t.data, s.value) !== 0 && (i = this._getOrReturnCtx(t, i), q(i, {
        code: E.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (i = this._getOrReturnCtx(t, i), q(i, {
        code: E.not_finite,
        message: s.message
      }), r.dirty()) : ge.assertNever(s);
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
      }), r.dirty()) : ge.assertNever(s);
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
class Er extends pe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Z.boolean) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: E.invalid_type,
        expected: Z.boolean,
        received: i.parsedType
      }), ne;
    }
    return lt(t.data);
  }
}
Er.create = (e) => new Er({
  typeName: ie.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...le(e)
});
class ki extends pe {
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
      }), i.dirty()) : ge.assertNever(s);
    return {
      status: i.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new ki({
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
ki.create = (e) => new ki({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: ie.ZodDate,
  ...le(e)
});
class ga extends pe {
  _parse(t) {
    if (this._getType(t) !== Z.symbol) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: E.invalid_type,
        expected: Z.symbol,
        received: i.parsedType
      }), ne;
    }
    return lt(t.data);
  }
}
ga.create = (e) => new ga({
  typeName: ie.ZodSymbol,
  ...le(e)
});
class Or extends pe {
  _parse(t) {
    if (this._getType(t) !== Z.undefined) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: E.invalid_type,
        expected: Z.undefined,
        received: i.parsedType
      }), ne;
    }
    return lt(t.data);
  }
}
Or.create = (e) => new Or({
  typeName: ie.ZodUndefined,
  ...le(e)
});
class Pr extends pe {
  _parse(t) {
    if (this._getType(t) !== Z.null) {
      const i = this._getOrReturnCtx(t);
      return q(i, {
        code: E.invalid_type,
        expected: Z.null,
        received: i.parsedType
      }), ne;
    }
    return lt(t.data);
  }
}
Pr.create = (e) => new Pr({
  typeName: ie.ZodNull,
  ...le(e)
});
class va extends pe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return lt(t.data);
  }
}
va.create = (e) => new va({
  typeName: ie.ZodAny,
  ...le(e)
});
class Mr extends pe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return lt(t.data);
  }
}
Mr.create = (e) => new Mr({
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
    return lt(t.data);
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
    const t = this._def.shape(), n = ge.objectKeys(t);
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
    for (const i of ge.objectKeys(t))
      t[i] && this.shape[i] && (n[i] = this.shape[i]);
    return new Re({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const i of ge.objectKeys(this.shape))
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
    for (const i of ge.objectKeys(this.shape)) {
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
    for (const i of ge.objectKeys(this.shape))
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
    return Wo(ge.objectKeys(this.shape));
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
class Si extends pe {
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
Si.create = (e, t) => new Si({
  options: e,
  typeName: ie.ZodUnion,
  ...le(t)
});
const It = (e) => e instanceof Ci ? It(e.schema) : e instanceof on ? It(e.innerType()) : e instanceof $i ? [e.value] : e instanceof an ? e.options : e instanceof Fr ? ge.objectValues(e.enum) : e instanceof Ni ? It(e._def.innerType) : e instanceof Or ? [void 0] : e instanceof Pr ? [null] : e instanceof Mt ? [void 0, ...It(e.unwrap())] : e instanceof ln ? [null, ...It(e.unwrap())] : e instanceof Ko || e instanceof Oi ? It(e.unwrap()) : e instanceof Ei ? It(e._def.innerType) : [];
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
function Rr(e, t) {
  const n = Ht(e), i = Ht(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === Z.object && i === Z.object) {
    const r = ge.objectKeys(t), s = ge.objectKeys(e).filter((o) => r.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of s) {
      const l = Rr(e[o], t[o]);
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
      const a = e[s], o = t[s], l = Rr(a, o);
      if (!l.valid)
        return { valid: !1 };
      r.push(l.data);
    }
    return { valid: !0, data: r };
  } else return n === Z.date && i === Z.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Ti extends pe {
  _parse(t) {
    const { status: n, ctx: i } = this._processInputParams(t), r = (s, a) => {
      if (pa(s) || pa(a))
        return ne;
      const o = Rr(s.value, a.value);
      return o.valid ? ((ha(s) || ha(a)) && n.dirty(), { status: n.value, value: o.data }) : (q(i, {
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
Ti.create = (e, t, n) => new Ti({
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
class Ai extends pe {
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
    return n instanceof pe ? new Ai({
      keyType: t,
      valueType: n,
      typeName: ie.ZodRecord,
      ...le(i)
    }) : new Ai({
      keyType: Pt.create(),
      valueType: t,
      typeName: ie.ZodRecord,
      ...le(n)
    });
  }
}
class ba extends pe {
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
ba.create = (e, t, n) => new ba({
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
class Ci extends pe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ci.create = (e, t) => new Ci({
  getter: e,
  typeName: ie.ZodLazy,
  ...le(t)
});
class $i extends pe {
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
$i.create = (e, t) => new $i({
  value: e,
  typeName: ie.ZodLiteral,
  ...le(t)
});
function Wo(e, t) {
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
        expected: ge.joinValues(i),
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
    return lt(t.data);
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
an.create = Wo;
class Fr extends pe {
  _parse(t) {
    const n = ge.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(t);
    if (i.parsedType !== Z.string && i.parsedType !== Z.number) {
      const r = ge.objectValues(n);
      return q(i, {
        expected: ge.joinValues(r),
        received: i.parsedType,
        code: E.invalid_type
      }), ne;
    }
    if (this._cache || (this._cache = new Set(ge.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = ge.objectValues(n);
      return q(i, {
        received: i.data,
        code: E.invalid_enum_value,
        options: r
      }), ne;
    }
    return lt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Fr.create = (e, t) => new Fr({
  values: e,
  typeName: ie.ZodNativeEnum,
  ...le(t)
});
class Ii extends pe {
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
    return lt(i.then((r) => this._def.type.parseAsync(r, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Ii.create = (e, t) => new Ii({
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
    ge.assertNever(r);
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
    return this._getType(t) === Z.undefined ? lt(void 0) : this._def.innerType._parse(t);
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
    return this._getType(t) === Z.null ? lt(null) : this._def.innerType._parse(t);
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
class Ni extends pe {
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
Ni.create = (e, t) => new Ni({
  innerType: e,
  typeName: ie.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...le(t)
});
class Ei extends pe {
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
    return wi(r) ? r.then((s) => ({
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
Ei.create = (e, t) => new Ei({
  innerType: e,
  typeName: ie.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...le(t)
});
class xa extends pe {
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
xa.create = (e) => new xa({
  typeName: ie.ZodNaN,
  ...le(e)
});
class Ko extends pe {
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
class Oi extends pe {
  _parse(t) {
    const n = this._def.innerType._parse(t), i = (r) => (Sn(r) && (r.value = Object.freeze(r.value)), r);
    return wi(n) ? n.then((r) => i(r)) : i(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Oi.create = (e, t) => new Oi({
  innerType: e,
  typeName: ie.ZodReadonly,
  ...le(t)
});
var ie;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(ie || (ie = {}));
const B = Pt.create, W = Tn.create, Ve = Er.create, Go = Mr.create;
Yt.create;
const ke = At.create, de = Re.create, ei = Si.create, Nd = ps.create;
Ti.create;
sn.create;
const ms = Ai.create, Ed = Ci.create, ct = $i.create, Ae = an.create;
Ii.create;
Mt.create;
ln.create;
const Od = Ae([
  "eq",
  "neq",
  "in",
  "gt",
  "gte",
  "lt",
  "lte",
  "isSet",
  "notSet"
]), _a = de({
  ref: B().min(1),
  op: Od,
  value: ei([B(), W(), ke(B()), ke(W())]).optional()
}), jr = Ed(() => de({
  all: ke(ei([_a, jr])).optional(),
  any: ke(ei([_a, jr])).optional()
}));
function gs(e) {
  return "op" in e;
}
function Lr(e) {
  var t, n;
  return e ? (((t = e.all) == null ? void 0 : t.length) ?? 0) > 0 || (((n = e.any) == null ? void 0 : n.length) ?? 0) > 0 : !1;
}
const Pd = [
  "file.pages",
  "file.colorPages",
  "file.monoPages",
  "file.status"
], Yo = "quantity", Md = Ae(["quantity", "pages", "area", "length"]), Rd = de({
  /**
   * Inclusive upper bound on the basis value. MUST be omitted on the last
   * row (open-ended) and present on every other row — validate.ts enforces
   * strictly-increasing order, which makes overlap impossible by construction.
   */
  upTo: W().positive().optional(),
  amount: W()
}), Qo = de({
  basis: Md.default("quantity"),
  /**
   * flat:      the entire basis value is priced at the matched row's amount.
   * graduated: each band is priced at its own amount and summed
   *            (progressive-tax style).
   */
  mode: Ae(["flat", "graduated"]).default("flat"),
  rows: ke(Rd).min(1)
}), Fd = Ae(["sqm", "sqft", "sqin"]), jd = Ae(["m", "ft", "in", "cm"]), Ld = Ae([
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
]), Dd = de({
  name: B(),
  expression: B()
}), zd = de({
  /** Evaluated in order; each step may use the ones before it. */
  steps: ke(Dd).default([]),
  /**
   * The rule's contribution to the order total. NOT multiplied by the
   * quantity — the formula reads `qty` itself.
   */
  expression: B()
}), Jo = de({
  type: Ld,
  /** Ignored on a formula rule (written as 0). */
  amount: W(),
  /**
   * perArea: the unit `amount` is priced in.
   * formula: the unit of `area`. Default "sqm" (engine-side).
   */
  areaUnit: Fd.optional(),
  /**
   * perLength: the unit `amount` is priced in.
   * formula: the unit of `w` and `h`. Default "m" (engine-side).
   */
  lengthUnit: jd.optional(),
  /**
   * perLength only: which axis of the source W×H is the billable
   * length. Default "h" (a roll's fixed width is w; the consumed
   * length is h). "max" prices the longest side.
   */
  lengthAxis: Ae(["h", "w", "max"]).optional(),
  /**
   * perArea/perLength/formula only: id of a `dimensions` field to read
   * W×H from. Fallback when omitted: FileMetadata.canvas.
   */
  dimensionsField: B().optional(),
  /**
   * Volume/size breaks. For basis "area" the basis value is in
   * `areaUnit`; for basis "length", in `lengthUnit`.
   */
  tiers: Qo.optional(),
  /** formula only: the steps and the price (formula.ts has the language). */
  formula: zd.optional()
}), qd = de({
  amount: W().nonnegative().default(0),
  /** "order": added once (v1 behavior). "unit": × quantity (t-shirts, cards). */
  per: Ae(["order", "unit"]).default("order"),
  /**
   * Quantity breaks on the base. basis must be "quantity"; mode "graduated"
   * requires per === "unit" (validate.ts).
   */
  tiers: Qo.optional()
}), Ud = de({
  currency: B().regex(/^[A-Z]{3}$/, "ISO 4217 currency code").default("USD"),
  basePrice: qd.default({}),
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
  lineQuantity: Ae(["job", "units"]).optional()
}), Pi = "2.0", Vd = de({
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
}).strict(), Bd = de({
  context: Vd.optional()
}), vs = de({
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
  priceModifiers: ke(Jo).default([]),
  /** What selecting this choice tells the Filecheck intake (if any). */
  filecheck: Bd.optional()
}), Ut = de({
  id: B().min(1),
  label: B().optional(),
  helpText: B().optional(),
  required: Ve().default(!1),
  visibleWhen: jr.optional(),
  /** Price changes applied just for having this field visible. */
  priceModifiers: ke(Jo).default([]),
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
}), Zd = Ut.extend({
  type: ct("select-one"),
  display: Ae(["cards", "grid", "swatches", "pills", "dropdown", "list"]).default("pills"),
  options: ke(vs).min(1)
}), Hd = Ut.extend({
  type: ct("select-many"),
  display: Ae(["cards", "grid", "swatches", "pills", "list"]).default("list"),
  options: ke(vs).min(1),
  minSelect: W().int().nonnegative().default(0),
  maxSelect: W().int().positive().optional()
}), Wd = Ut.extend({
  type: ct("quantity"),
  display: Ae(["stepper", "pills", "dropdown", "input"]).default("stepper"),
  min: W().int().positive().default(1),
  max: W().int().positive().optional(),
  step: W().int().positive().default(1),
  defaultValue: W().int().positive().default(1),
  /** Preset quantities for pills/dropdown display (e.g. 100/250/500/1000). */
  presets: ke(W().int().positive()).optional(),
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
}), Kd = Ut.extend({
  type: ct("quantities"),
  /** grid: a card per option with its own stepper. list: one row per option. */
  display: Ae(["grid", "list"]).default("grid"),
  options: ke(vs).min(1),
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
  nextBreakHint: Ve().optional()
}), Gd = Ut.extend({
  type: ct("number"),
  display: Ae(["stepper", "slider", "input"]).default("input"),
  min: W().optional(),
  max: W().optional(),
  step: W().positive().optional(),
  defaultValue: W().optional()
}), Yd = Ut.extend({
  type: ct("text"),
  display: Ae(["input", "textarea"]).default("input"),
  placeholder: B().optional(),
  maxLength: W().int().positive().optional()
}), Dr = Ae(["mm", "cm", "in"]), Qd = Ut.extend({
  type: ct("dimensions"),
  display: Ae(["inputs"]).default("inputs"),
  /** Units the customer may pick between. */
  units: ke(Dr).min(1).default(["mm"]),
  defaultUnit: Dr.default("mm"),
  /** Constraints, expressed in defaultUnit. */
  minW: W().positive().optional(),
  maxW: W().positive().optional(),
  minH: W().positive().optional(),
  maxH: W().positive().optional(),
  defaultValue: de({ w: W().positive(), h: W().positive() }).optional()
}), Jd = de({
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
  workflow: ms(Go()).optional()
}).refine((e) => !!e.workflowId || !!e.workflow, {
  message: "filecheck needs a workflowId or an inline workflow"
}), Xd = Ut.extend({
  type: ct("file"),
  /**
   * dropzone: the built-in upload, with any registered producers (Print.App
   * designer, template picker) offered around it. producer: NO direct
   * upload - only the registered producers render; the merchant is
   * showcasing the designer, not file drops.
   */
  display: Ae(["dropzone", "producer"]).default("dropzone"),
  accept: ke(B()).default(["application/pdf"]),
  /** Which data-feed provider enriches the FileMetadata. */
  providerId: B().optional(),
  /**
   * Filecheck-backed upload: replaces the dropzone with the Filecheck
   * intake element when the storefront supplies an element-mode provider
   * config (publishable key lives there — NEVER in this blueprint).
   */
  filecheck: Jd.optional(),
  /**
   * Let the customer attach several files here (artwork plus fonts, a set
   * of photos, a mailing list). Attachments only: the price never depends
   * on them. Direct uploads only - a Filecheck intake or a designer fills
   * the field with ONE artwork, so `multiple` is ignored there.
   */
  multiple: Ve().optional(),
  /** With `multiple`: how many files at most (2-10, default 5). */
  maxFiles: W().int().min(2).max(10).optional(),
  /**
   * This field's file sets the price: its page counts and size feed per-page
   * and per-area pricing and `file.*` conditions, and it is the file the
   * signed price names. Mark it when a product takes two files (a thesis PDF
   * and a designed cover); unmarked, the price follows whichever file the
   * customer added last.
   */
  pricing: Ve().optional()
}), ef = 10, tf = 5;
function zr(e) {
  return !e.multiple || e.display === "producer" || e.providerId === "filecheck" ? 1 : Math.min(ef, Math.max(2, e.maxFiles ?? tf));
}
function Xo(e) {
  return e.sections.flatMap((t) => t.fields.filter((n) => n.type === "file"));
}
function nf(e) {
  return Xo(e).find((t) => t.pricing === !0);
}
function el(e) {
  const t = Xo(e);
  return t.find((n) => n.display === "producer") ?? t[0];
}
const rf = Ut.extend({
  type: ct("info"),
  /** summary: live selection recap. note: static text block. */
  display: Ae(["summary", "note"]).default("note"),
  body: B().optional()
}), sf = Nd("type", [
  Zd,
  Hd,
  Wd,
  Kd,
  Gd,
  Yd,
  Qd,
  Xd,
  rf
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
const af = de({
  id: B().min(1),
  title: B(),
  fields: ke(sf)
}), of = de({
  /** axisFieldId -> choiceId, exactly one entry per axis (validate.ts). */
  select: ms(B()),
  sku: B().optional(),
  /** Absolute replacement for pricing.basePrice.amount while selected. */
  price: W().nonnegative().optional(),
  available: Ve().default(!0),
  /** Platform hook (e.g. Shopify variant GID) for adapters that map to real variants. */
  platformVariantId: B().optional()
}), lf = de({
  /** Field ids of select-one fields forming the matrix (e.g. ["size","color"]). */
  axes: ke(B().min(1)).min(1),
  combinations: ke(of)
}), ys = de({
  version: ct(Pi).default(Pi),
  productId: B().min(1),
  title: B(),
  /** stacked: all sections at once. wizard: one section per step. */
  layout: Ae(["stacked", "wizard"]).default("stacked"),
  pricing: Ud.default({}),
  variants: lf.optional(),
  sections: ke(af)
});
de({
  w: W().positive(),
  h: W().positive(),
  unit: Dr
});
function dt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && typeof e.w == "number" && typeof e.h == "number";
}
function cf(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.values(e).every((t) => typeof t == "number");
}
const hi = ["qty", "w", "h", "area", "pages"], qr = {
  min: [2, void 0],
  max: [2, void 0],
  round: [1, 2],
  ceil: [1, 1],
  floor: [1, 1],
  abs: [1, 1],
  sqrt: [1, 1],
  band: [4, void 0]
}, tl = Object.keys(qr), mr = 500, wa = 10, uf = 64, df = /^[A-Za-z][A-Za-z0-9_]{0,31}$/, ff = /^[A-Za-z0-9_.,+\-*/^()\s]$/;
class nl extends Error {
  constructor(n) {
    super(n.message);
    Qt(this, "detail");
    this.detail = n;
  }
}
function Fe(e, t, n) {
  throw new nl({ code: e, message: t, at: n });
}
function pf(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const i = e[n];
    if (ff.test(i) || Fe("formula-character", `"${i}" can't be used in a formula. Use + - * / ^, brackets, numbers and names.`, n), /\s/.test(i)) {
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
class hf {
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
    this.depth += 1, this.depth > uf && Fe("formula-too-long", "This formula is nested too deeply.", this.peek().at);
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
      return this.isOp("(") ? this.call(t, n) : (n in qr && Fe("formula-syntax", `${t.text} needs brackets, like ${n}(a, b).`, t.at), this.names.push({ name: n, written: t.text, at: t.at }), this.noImplicitProduct(t.text), { kind: "name", name: n, written: t.text, at: t.at });
    }
    if (t.type === "op" && t.text === "(") {
      const n = this.expression();
      return this.expect(")", t.at), this.noImplicitProduct(")"), { kind: "group", inner: n };
    }
    return this.index -= 1, this.unexpected(t);
  }
  call(t, n) {
    const i = qr[n];
    i || Fe("formula-unknown-name", `There is no function "${t.text}". You can use: ${tl.join(", ")}.`, t.at);
    const r = this.next(), s = [];
    if (!this.isOp(")"))
      for (s.push(this.expression()); this.isOp(","); )
        this.next(), s.push(this.expression());
    this.expect(")", r.at);
    const [a, o] = i;
    if ((s.length < a || o !== void 0 && s.length > o) && Fe("formula-arity", il(n), t.at), n === "band" && mf(s, t.at), n === "round" && s[1] !== void 0) {
      const l = Mi(s[1]);
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
function il(e) {
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
function Mi(e) {
  if (e.kind === "number")
    return e.value;
  if (e.kind === "group")
    return Mi(e.inner);
  if (e.kind === "negate") {
    const t = Mi(e.operand);
    return t === void 0 ? void 0 : -t;
  }
}
function mf(e, t) {
  (e.length - 1) % 2 === 0 && Fe("formula-arity", il("band"), t);
  let n;
  for (let i = 1; i < e.length - 1; i += 2) {
    const r = Mi(e[i]);
    r !== void 0 && (n !== void 0 && r <= n && Fe("formula-arity", `The limits in band() must increase (${r} after ${n}).`, t), n = r);
  }
}
function bs(e) {
  if (e.length > mr)
    return {
      ok: !1,
      error: {
        code: "formula-too-long",
        message: `A formula can be at most ${mr} characters — split it into steps.`,
        at: mr
      }
    };
  try {
    const t = new hf(pf(e));
    return { ok: !0, ast: t.parse(), names: t.names };
  } catch (t) {
    if (t instanceof nl)
      return { ok: !1, error: t.detail };
    throw t;
  }
}
function gf(e) {
  const t = [], n = e.steps ?? [];
  n.length > wa && t.push({
    path: ["steps"],
    code: "formula-too-long",
    message: `A formula can have at most ${wa} steps.`
  });
  const i = /* @__PURE__ */ new Set([...hi, ...tl]), r = /* @__PURE__ */ new Map();
  n.forEach((a, o) => {
    const l = a.name.toLowerCase();
    df.test(a.name) ? i.has(l) ? t.push({
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
const rl = /* @__PURE__ */ new Set([
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
]), sl = /* @__PURE__ */ new Set(["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"]);
function al(e) {
  const t = e.toUpperCase();
  return rl.has(t) ? 0 : sl.has(t) ? 3 : 2;
}
function vf(e) {
  return /^[A-Z]{3}$/.test(e) && (rl.has(e) || sl.has(e) || yf.has(e));
}
const yf = /* @__PURE__ */ new Set([
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
function bf(e) {
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
function xf(e) {
  const t = /* @__PURE__ */ new Map(), n = Array.isArray(e.sections) ? e.sections : [];
  for (const i of n) {
    const r = _n(i) && Array.isArray(i.fields) ? i.fields : [];
    for (const s of r)
      _n(s) && typeof s.id == "string" && Array.isArray(s.options) && t.set(s.id, new Set(s.options.flatMap((a) => _n(a) && typeof a.id == "string" ? [a.id] : [])));
  }
  return t;
}
function _f(e, t, n) {
  if (!_n(t))
    throw new fn("The matrix table must be an object.");
  const { choices: i, prices: r, off: s = [], skus: a = [] } = t;
  if (!Array.isArray(i) || i.length !== e.length || !i.every((f) => Array.isArray(f) && f.every((m) => typeof m == "string")))
    throw new fn("The matrix table needs one list of choice ids per axis.");
  const o = bf(i);
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
    const g = r[m], v = u.get(m);
    if (g === null && !c.has(m) && v === void 0 || f.some((S, _) => n.has(e[_]) && !n.get(e[_]).has(S)))
      return;
    const x = {
      select: Object.fromEntries(e.map((S, _) => [S, f[_]])),
      available: !c.has(m)
    };
    g !== null && (x.price = g), v !== void 0 && (x.sku = v), d.push(x);
  }), d;
}
function wf(e) {
  if (!_n(e) || !_n(e.variants) || e.variants.table === void 0)
    return e;
  const { table: t, ...n } = e.variants, i = Array.isArray(n.axes) ? n.axes.filter((r) => typeof r == "string") : [];
  return {
    ...e,
    variants: { ...n, axes: i, combinations: _f(i, t, xf(e)) }
  };
}
function ol(e) {
  let t;
  try {
    t = wf(e);
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
  const n = ys.safeParse(t);
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
  const i = ll(n.data);
  return {
    ok: !i.some((r) => r.severity === "error"),
    value: n.data,
    issues: i
  };
}
ys.superRefine((e, t) => {
  for (const n of ll(e))
    n.severity === "error" && t.addIssue({
      code: E.custom,
      path: n.path,
      message: `${n.code}: ${n.message}`
    });
});
function ll(e) {
  const t = [], n = (c, u, d, f = "error") => t.push({ path: c, code: u, message: d, severity: f }), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  let a = 0, o, l = !1;
  e.sections.forEach((c, u) => {
    r.has(c.id) && n(["sections", u, "id"], "duplicate-section-id", `Duplicate section id "${c.id}".`), r.add(c.id), c.fields.forEach((d, f) => {
      const m = ["sections", u, "fields", f];
      if (i.has(d.id) ? n([...m, "id"], "duplicate-field-id", `Duplicate field id "${d.id}".`) : i.set(d.id, { field: d, path: m }), (d.id === Yo || d.id.startsWith("file.")) && n([...m, "id"], "reserved-field-id", `Field id "${d.id}" is reserved for condition refs.`), An(d) && (o ?? (o = m), Lr(d.visibleWhen) || (a += 1, a > 1 && n(m, "multiple-quantity-fields", "Only one quantity field can show unconditionally. Give the others a visibility rule so a single quantity field is shown at a time."))), d.role) {
        const g = s.get(d.role);
        g ? n([...m, "role"], "duplicate-role", `Role "${d.role}" is already used by field "${g}" — only one field per role.`) : s.set(d.role, d.id);
      }
      d.type === "file" && (l = !0);
    });
  }), kf([...i.values()], n);
  for (const { field: c, path: u } of i.values()) {
    Af(c, u, n), Cf(c, u, n), $f(c, u, i, n);
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
      f.forEach((g, v) => {
        Pf(g, [...m, v], i, l, n);
      });
    c.type === "quantities" && Of(c, u, n);
  }
  return Rf(e.pricing.basePrice, ["pricing", "basePrice"], n), e.variants && Ff(e, i, n), o && !Tf(e) && n(o, "quantity-has-no-effect", "Changing the quantity does not change the price: every amount in this product is added once per order. If customers can buy more than one, set the base price to per unit, or price the options per unit instead of fixed.", "warning"), vf(e.pricing.currency) || n(["pricing", "currency"], "unknown-currency", `Currency "${e.pricing.currency}" is not in the known list; totals will round to 2 decimals.`, "warning"), t;
}
function kf(e, t) {
  const n = e.filter(({ field: a }) => a.type === "file"), i = n.filter(({ field: a }) => a.type === "file" && a.pricing === !0);
  i.slice(1).forEach(({ path: a }) => {
    t([...a, "pricing"], "multiple-pricing-files", "Only one file field can set the price; the first one marked does.", "warning");
  });
  const r = n.some(({ field: a }) => a.type === "file" && (a.display === "producer" || a.providerId === "filecheck")), s = n[0];
  i.length === 0 && n.length > 1 && r && s && t([...s.path, "pricing"], "pricing-file-unmarked", "This product takes more than one file. Turn on Sets the price on the one whose pages and size are priced, or the price follows whichever file the customer added last.", "warning");
}
const Sf = /* @__PURE__ */ new Set([
  "perUnit",
  "perPage",
  "perColorPage",
  "perMonoPage",
  "perArea",
  "perLength"
]);
function Tf(e) {
  var i;
  const t = e.pricing.basePrice;
  if (t.per === "unit" || t.tiers)
    return !0;
  const n = (r) => {
    var s;
    return Sf.has(r.type) || (((s = r.tiers) == null ? void 0 : s.basis) ?? "quantity") === "quantity" && r.tiers !== void 0 || r.type === "formula" && r.formula !== void 0 && xs(r.formula).has("qty");
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
function Af(e, t, n) {
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
function Cf(e, t, n) {
  if (!Vt(e))
    return;
  const i = /* @__PURE__ */ new Set();
  let r = 0;
  e.options.forEach((s, a) => {
    i.has(s.id) && n([...t, "options", a, "id"], "duplicate-choice-id", `Duplicate choice id "${s.id}" in field "${e.id}".`), i.add(s.id), s.default && (r += 1);
  }), e.type === "select-one" && r > 1 && n([...t, "options"], "too-many-defaults", `select-one field "${e.id}" has ${r} default choices.`), e.type === "select-many" && e.maxSelect !== void 0 && r > e.maxSelect && n([...t, "options"], "too-many-defaults", `Default choices (${r}) exceed maxSelect (${e.maxSelect}).`);
}
function $f(e, t, n, i) {
  if (!e.visibleWhen)
    return;
  const r = [...t, "visibleWhen"], s = (a, o) => {
    if (gs(a)) {
      const l = Pd.includes(a.ref), c = a.ref === Yo, u = n.get(a.ref);
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
function cl(e, t, n) {
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
const If = /* @__PURE__ */ new Set(["fixed", "percent", "multiplier", "setup"]), Nf = /* @__PURE__ */ new Set(["percent", "multiplier", "formula"]), Ef = /^[A-Za-z0-9_-]+$/;
function Of(e, t, n) {
  e.options.forEach((i, r) => {
    const s = [...t, "options", r];
    Ef.test(i.id) || n([...s, "id"], "quantities-choice-id", `Option id "${i.id}" may only use letters, digits, "-" and "_".`), i.priceModifiers.forEach((a, o) => {
      var c;
      const l = [...s, "priceModifiers", o];
      a.type === "formula" ? n([...l, "type"], "quantities-choice-modifier", "A formula can't price one option of a quantity per option — put it on the field.") : Nf.has(a.type) ? n([...l, "type"], "quantities-choice-modifier", `A "${a.type}" price on one option would change the whole order — price this option per unit, or put the rule on the field.`) : ((c = a.tiers) == null ? void 0 : c.mode) === "graduated" && a.tiers.basis === "quantity" && n([...l, "tiers", "mode"], "quantities-choice-modifier", "Graduated quantity breaks cannot be shared out between options — use flat breaks.");
    });
  });
}
function Pf(e, t, n, i, r) {
  if (e.type === "formula" || e.formula !== void 0) {
    Mf(e, t, n, i, r);
    return;
  }
  if (e.tiers && (cl(e.tiers, [...t, "tiers"], r), e.tiers.mode === "graduated" && If.has(e.type) && r([...t, "tiers", "mode"], "tier-basis-invalid", `Graduated tiers are meaningless on a "${e.type}" modifier.`), e.tiers.basis === "pages" && !i && r([...t, "tiers", "basis"], "pages-basis-without-file", "Pages-based tiers need a file field to supply page counts.", "warning")), (e.type === "perPage" || e.type === "perColorPage" || e.type === "perMonoPage") && !i && r([...t, "type"], "pages-basis-without-file", `"${e.type}" pricing needs a file field to supply page counts.`, "warning"), e.type === "perArea" || e.type === "perLength") {
    const s = e.type.toLowerCase();
    if (e.dimensionsField !== void 0) {
      const a = n.get(e.dimensionsField);
      (!a || a.field.type !== "dimensions") && r([...t, "dimensionsField"], `${s}-dangling-dims`, `"${e.dimensionsField}" is not a dimensions field.`);
    } else i || r([...t, "type"], `${s}-missing-source`, `${e.type} pricing has no dimensions field and no file field to read a canvas from.`, "warning");
  }
}
function Mf(e, t, n, i, r) {
  if (e.type !== "formula") {
    r([...t, "formula"], "formula-missing", `Only a formula rule can carry a formula, not a "${e.type}" rule.`);
    return;
  }
  const s = e.formula;
  if (!s) {
    r([...t, "formula"], "formula-missing", "This formula rule has no formula.");
    return;
  }
  for (const l of gf(s))
    r([...t, "formula", ...l.path], l.code, l.message);
  e.tiers && r([...t, "tiers"], "formula-tiers", "A formula rule can't have volume breaks — put the breaks in the formula, e.g. with band().");
  const a = xs(s), o = a.has("w") || a.has("h") || a.has("area");
  if (e.dimensionsField !== void 0) {
    const l = n.get(e.dimensionsField);
    (!l || l.field.type !== "dimensions") && r([...t, "dimensionsField"], "formula-dangling-dims", `"${e.dimensionsField}" is not a dimensions field.`);
  } else o && !i && r([...t, "dimensionsField"], "formula-no-size", "This formula uses the size (w, h or area), but there is no size field and no file upload to read it from, so the size is always 0.", "warning");
  a.has("pages") && !i && r([...t, "formula"], "pages-basis-without-file", "This formula uses pages, but there is no file field to supply page counts.", "warning");
}
function Rf(e, t, n) {
  e.tiers && (cl(e.tiers, [...t, "tiers"], n), e.tiers.basis !== "quantity" && n([...t, "tiers", "basis"], "tier-basis-invalid", "Base price tiers must use the quantity basis."), e.tiers.mode === "graduated" && e.per === "order" && n([...t, "tiers", "mode"], "tier-basis-invalid", 'Graduated base tiers require per: "unit".'));
}
function Ff(e, t, n) {
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
const Ur = "1.0", jf = de({
  /** Minimum quantity required to trigger this tier (inclusive). */
  minQty: W().nonnegative(),
  /** Maximum quantity for this tier (inclusive). If omitted, tier spans to infinity. */
  maxQty: W().nonnegative().optional(),
  /** Price/amount applied for this tier. */
  amount: W()
}), ul = de({
  type: Ae([
    "fixed",
    "perUnit",
    "perPage",
    "perColorPage",
    "perMonoPage",
    "percent",
    "multiplier"
  ]),
  amount: W(),
  tiers: ke(jf).optional()
}), Lf = de({
  /** The field id whose value gates visibility. */
  field: B(),
  /** Show when the field's selected value equals one of these. */
  equals: ei([B(), ke(B())]).optional(),
  /** Show only when a value is present (any non-empty selection). */
  isSet: Ve().optional()
}), Df = de({
  id: B().min(1),
  label: B(),
  description: B().optional(),
  image: B().url().optional(),
  color: B().optional(),
  default: Ve().optional(),
  priceModifiers: ke(ul).default([]),
  /** Dead in v1 runtime; dropped by migration. */
  reveals: ke(B()).default([])
}), zf = Ae([
  "card-select",
  "image-grid",
  "swatch",
  "pill-toggle",
  "dropdown",
  "number-stepper",
  "file-upload",
  "summary"
]), qf = de({
  id: B().min(1),
  type: zf,
  label: B().optional(),
  helpText: B().optional(),
  required: Ve().default(!1),
  options: ke(Df).default([]),
  min: W().optional(),
  max: W().optional(),
  step: W().optional(),
  defaultValue: ei([B(), W()]).optional(),
  accept: ke(B()).optional(),
  providerId: B().optional(),
  visibleWhen: Lf.optional(),
  priceModifiers: ke(ul).default([])
}), Uf = de({
  id: B().min(1),
  title: B(),
  layout: Ae(["stacked", "tabs"]).default("stacked"),
  fields: ke(qf)
}), Vf = de({
  version: ct(Ur).default(Ur),
  productId: B().min(1),
  title: B(),
  currency: B().default("USD"),
  basePrice: W().nonnegative().default(0),
  sections: ke(Uf)
});
class Ri extends Error {
  constructor(n) {
    const i = n.map((r) => `${r.code} at ${r.path.join(".") || "<root>"}: ${r.message}`).join("; ");
    super(`Invalid product options: ${i}`);
    Qt(this, "issues");
    this.name = "ProductOptionsError", this.issues = n;
  }
}
function Bf(e) {
  const t = Vf.safeParse(e);
  if (!t.success)
    throw new Ri(t.error.issues.map((c) => ({
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
    version: Pi,
    productId: n.productId,
    title: n.title,
    layout: s ? "wizard" : "stacked",
    pricing: {
      currency: Jf(n.currency, i),
      basePrice: { amount: n.basePrice, per: "order" }
    },
    sections: n.sections.map((c) => ({
      id: c.id,
      title: c.title,
      fields: c.fields.map((u) => {
        const d = Wf(u, r, i);
        return d.type === "quantity" && (r = !0), d;
      })
    }))
  }, o = ys.parse(a), l = ol(o);
  if (!l.ok)
    throw new Ri(l.issues.filter((c) => c.severity === "error"));
  return { doc: o, warnings: i };
}
function Zf(e) {
  const t = typeof e == "object" && e !== null ? e.version : void 0;
  if (t === void 0 || t === Pi) {
    const n = ol(e);
    if (!n.ok || !n.value)
      throw new Ri(n.issues.filter((i) => i.severity === "error"));
    return { doc: n.value, warnings: [] };
  }
  if (t === Ur)
    return Bf(e);
  throw new Ri([
    {
      path: ["version"],
      code: "unknown-version",
      message: `Unsupported schema version "${String(t)}".`,
      severity: "error"
    }
  ]);
}
function ka(e, t) {
  const { doc: n, warnings: i } = Zf(e);
  return n;
}
const Hf = {
  "card-select": "cards",
  "image-grid": "grid",
  swatch: "swatches",
  "pill-toggle": "pills",
  dropdown: "dropdown"
};
function Wf(e, t, n) {
  const i = {
    id: e.id,
    label: e.label,
    helpText: e.helpText,
    required: e.required,
    visibleWhen: Gf(e.visibleWhen),
    priceModifiers: e.priceModifiers.map((r) => dl(r, n))
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
        display: Hf[e.type],
        options: e.options.map((r) => Kf(r, n))
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
function Kf(e, t) {
  return {
    id: e.id,
    label: e.label,
    description: e.description,
    image: e.image,
    color: e.color,
    default: e.default,
    priceModifiers: e.priceModifiers.map((n) => dl(n, t))
  };
}
function Gf(e) {
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
function dl(e, t) {
  return !e.tiers || e.tiers.length === 0 ? { type: e.type, amount: e.amount } : {
    type: e.type,
    amount: e.amount,
    tiers: {
      basis: "quantity",
      mode: "flat",
      rows: Yf(e.tiers, e.amount, t)
    }
  };
}
function Yf(e, t, n) {
  Qf(e) && n.push("Overlapping v1 tiers detected; earlier tiers win in the overlap (v1 behavior preserved).");
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
function Qf(e) {
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
function Jf(e, t) {
  const n = e.toUpperCase();
  return /^[A-Z]{3}$/.test(n) ? n : (t.push(`Currency "${e}" is not an ISO 4217 code; defaulting to USD.`), "USD");
}
const Sa = "1.0", fl = Ae(["mm", "cm", "in", "pt", "px"]), Xf = Ae(["pending", "ready", "failed"]), ep = Ae(["info", "warning", "error"]), tp = de({
  /** 1-based page index. */
  page: W().int().positive(),
  w: W().nonnegative(),
  h: W().nonnegative(),
  unit: fl.default("mm")
}), np = de({
  w: W().nonnegative(),
  h: W().nonnegative(),
  /** Bleed applied around the trim box, in `unit`. */
  bleed: W().nonnegative().default(0),
  unit: fl.default("mm")
}), ip = de({
  /** Dominant color model detected in the file. */
  model: Ae(["RGB", "CMYK", "Gray", "Mixed", "Unknown"]).default("Unknown"),
  /** Named spot colors (e.g. Pantone) found in the file. */
  spot: ke(B()).default([])
}), rp = de({
  /** Machine-readable code, e.g. "low-dpi", "not-embedded-font", "out-of-gamut". */
  code: B(),
  severity: ep.default("warning"),
  message: B().optional(),
  /** 1-based page index the issue applies to, if page-specific. */
  page: W().int().positive().optional()
}), _s = de({
  /** Contract version, for forward/backward compatibility. */
  version: ct(Sa).default(Sa),
  /** Stable id assigned by the basic uploader; correlates feeds to a file. */
  fileId: B().min(1),
  /** Who produced this metadata. Free-form, but reserve known sources. */
  source: B().default("custom"),
  status: Xf.default("pending"),
  /** Original file name and MIME type, if known. */
  fileName: B().optional(),
  mimeType: B().optional(),
  fileSizeBytes: W().int().nonnegative().optional(),
  /** Total page count. Absent means "unknown" — pricing must fall back. */
  pages: W().int().nonnegative().optional(),
  colorPages: W().int().nonnegative().optional(),
  monoPages: W().int().nonnegative().optional(),
  pageSizes: ke(tp).optional(),
  canvas: np.optional(),
  colors: ip.optional(),
  issues: ke(rp).default([]),
  /** Provider-specific extras that don't fit the core contract. */
  raw: ms(Go()).optional()
}), sp = de({
  pages: Ve().default(!1),
  colorDetection: Ve().default(!1),
  pageSizes: Ve().default(!1),
  canvas: Ve().default(!1),
  preflightIssues: Ve().default(!1)
}), ap = de({
  id: B().min(1),
  name: B(),
  /**
   * "push" = provider POSTs metadata to us; "pull" = we fetch from `endpoint`;
   * "element" = provider renders its own embedded uploader (e.g. the
   * Filecheck intake element) in place of the basic dropzone.
   */
  mode: Ae(["push", "pull", "element"]).default("push"),
  endpoint: B().url().optional(),
  capabilities: sp.default({}),
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
}), Fi = [
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
], op = {
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
};
function lp(e) {
  const t = /\.([A-Za-z0-9]{1,16})$/.exec(e.trim());
  return t ? t[1].toLowerCase() : "";
}
function cp(e) {
  const t = e.replace(/^\./, "").toLowerCase();
  return Fi.find((n) => n.extensions.includes(t));
}
function ws(e) {
  const t = /* @__PURE__ */ new Set(), n = (i) => i.extensions.forEach((r) => t.add(r));
  for (const i of e) {
    const r = i.trim().toLowerCase();
    if (!r)
      continue;
    if (r.includes("/")) {
      for (const o of Fi) {
        const l = o.mime === r || op[o.extensions[0]] === r, c = r !== "application/pdf" && o.mimeTypes.includes(r);
        (l || c) && n(o);
      }
      continue;
    }
    const s = cp(r);
    if (s) {
      n(s);
      continue;
    }
    const a = r.split(/[^a-z0-9]+/).filter(Boolean);
    for (const o of Fi)
      a.some((l) => o.words.includes(l)) && n(o);
  }
  return [...t];
}
function up(e) {
  return ws(e).map((t) => `.${t}`).join(",");
}
function dp(e, t) {
  const n = ws(e);
  return n.length === 0 || n.includes(lp(t));
}
function fp(e) {
  const t = ws(e);
  return Fi.filter((n) => n.extensions.some((i) => t.includes(i))).map((n) => n.label).join(", ");
}
const pl = {
  mm: 1e-3,
  cm: 0.01,
  in: 0.0254,
  pt: 0.0254 / 72,
  px: void 0
}, pp = {
  sqm: 1,
  sqft: 0.3048 * 0.3048,
  sqin: 0.0254 * 0.0254
};
function hl(e, t, n, i) {
  const r = pl[n];
  return r === void 0 || e <= 0 || t <= 0 ? 0 : e * r * (t * r) / pp[i];
}
function ks(e, t) {
  var n;
  if (e.dimensionsField !== void 0) {
    const i = t.selections[e.dimensionsField];
    return dt(i) ? i : void 0;
  }
  return (n = t.file) == null ? void 0 : n.canvas;
}
function ml(e, t) {
  const n = ks(e, t);
  return n ? hl(n.w, n.h, n.unit, e.areaUnit ?? "sqm") : 0;
}
function hp(e, t) {
  if (e === "quantity")
    return t.quantity;
  const n = mp(e, t);
  return cf(n) ? Object.keys(n).filter((i) => (n[i] ?? 0) > 0) : n;
}
function mp(e, t) {
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
function Ta(e) {
  return e !== void 0 && e !== "" && !(Array.isArray(e) && e.length === 0);
}
function gp(e, t) {
  const n = hp(e.ref, t);
  if (e.op === "isSet")
    return Ta(n);
  if (e.op === "notSet")
    return !Ta(n);
  if (n === void 0)
    return !1;
  switch (e.op) {
    case "eq":
      return Aa(n, e.value);
    case "neq":
      return !Aa(n, e.value);
    case "in": {
      const i = Array.isArray(e.value) ? e.value.map(String) : e.value !== void 0 ? [String(e.value)] : [];
      return Array.isArray(n) ? n.some((r) => i.includes(String(r))) : dt(n) ? !1 : i.includes(String(n));
    }
    case "gt":
    case "gte":
    case "lt":
    case "lte": {
      if (Array.isArray(n) || dt(n))
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
function Aa(e, t) {
  if (Array.isArray(e)) {
    if (Array.isArray(t)) {
      const n = t.map(String);
      return e.some((i) => n.includes(String(i)));
    }
    return t !== void 0 && e.map(String).includes(String(t));
  }
  return dt(e) ? !1 : Array.isArray(t) ? t.map(String).includes(String(e)) : t !== void 0 && String(e) === String(t);
}
function gl(e, t) {
  if (!e)
    return !0;
  const n = (s) => gs(s) ? gp(s, t) : gl(s, t), i = e.all === void 0 || e.all.every(n), r = e.any === void 0 || e.any.length === 0 || e.any.some(n);
  return i && r;
}
function Ca(e, t) {
  return gl(e.visibleWhen, t);
}
function Ss(e, t, n) {
  return Ca(t, n) ? !An(t) || Lr(t.visibleWhen) ? !0 : !e.sections.some((i) => i.fields.some((r) => An(r) && Lr(r.visibleWhen) && Ca(r, n))) : !1;
}
const vp = {
  m: 1,
  ft: 0.3048,
  in: 0.0254,
  cm: 0.01
};
function Vr(e, t, n) {
  const i = pl[t];
  return i === void 0 || e <= 0 ? 0 : e * i / vp[n];
}
function yp(e, t, n) {
  return n === "w" ? e : n === "max" ? Math.max(e, t) : t;
}
function vl(e, t) {
  const n = ks(e, t);
  return n ? Vr(yp(n.w, n.h, e.lengthAxis), n.unit, e.lengthUnit ?? "m") : 0;
}
const bp = 256, fi = /* @__PURE__ */ new Map();
function $a(e) {
  const t = fi.get(e);
  if (t !== void 0)
    return t;
  const n = bs(e), i = n.ok ? n.ast : null;
  return fi.size >= bp && fi.clear(), fi.set(e, i), i;
}
function xp(e, t) {
  const n = new Map(Object.entries(t));
  for (const s of e.steps ?? []) {
    const a = $a(s.expression);
    if (!a)
      return Number.NaN;
    n.set(s.name.toLowerCase(), tn(a, n));
  }
  const i = $a(e.expression);
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
          return _p(n, i);
      }
      break;
    }
    case "call":
      return wp(e.fn, e.args.map((n) => tn(n, t)));
  }
  return Number.NaN;
}
function _p(e, t) {
  if (!Number.isInteger(t))
    return Math.pow(e, t);
  let n = Math.abs(t), i = 1, r = e;
  for (; n > 0; )
    n % 2 === 1 && (i *= r), r *= r, n = Math.floor(n / 2);
  return t < 0 ? 1 / i : i;
}
function wp(e, t) {
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
function kp(e, t) {
  var r;
  const n = ks(e, t), i = e.lengthUnit ?? "m";
  return {
    qty: t.quantity,
    w: n ? gr(Vr(n.w, n.unit, i)) : 0,
    h: n ? gr(Vr(n.h, n.unit, i)) : 0,
    area: n ? gr(hl(n.w, n.h, n.unit, e.areaUnit ?? "sqm")) : 0,
    pages: ((r = t.file) == null ? void 0 : r.pages) ?? 0
  };
}
function gr(e) {
  return e === 0 ? 0 : Number(e.toPrecision(12));
}
function Sp(e, t) {
  return e.formula ? xp(e.formula, kp(e, t)) : Number.NaN;
}
function ut(e, t) {
  const i = 10 ** al(t);
  return Math.round((e + Number.EPSILON) * i) / i;
}
function Tp(e) {
  const t = [];
  for (const n of e.sections)
    for (const i of n.fields)
      An(i) && t.push(i);
  return t;
}
function li(e, t, n) {
  const i = Tp(e);
  if (i.length <= 1)
    return i[0];
  const r = { selections: t, file: n, quantity: 1 };
  return i.find((s) => Ss(e, s, r)) ?? i[0];
}
function yl(e, t, n) {
  const i = li(e, t, n);
  return i ? i.type === "quantities" ? Ts(Rt(i, t[i.id])) : ti(i, t[i.id]) : 1;
}
function ti(e, t) {
  const n = typeof t == "number" ? t : typeof t == "string" && t.trim() !== "" ? Number(t) : e.defaultValue;
  return Number.isNaN(n) ? Br(e, e.defaultValue) : Br(e, n);
}
function Rt(e, t) {
  const n = {};
  if (typeof t != "object" || t === null || Array.isArray(t))
    return n;
  const i = t;
  for (const r of e.options) {
    const s = i[r.id], a = typeof s == "number" ? s : typeof s == "string" && s.trim() !== "" ? Number(s) : Number.NaN;
    !Number.isFinite(a) || Math.round(a) <= 0 || (n[r.id] = Br(e, a));
  }
  return n;
}
function Ts(e) {
  let t = 0;
  for (const n of Object.values(e))
    t += n;
  return t;
}
function Br(e, t) {
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
function Ji(e, t) {
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
function Ap(e, t) {
  const n = Ji(e, t);
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
function Cp(e, t, n, i) {
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
  const s = Ji(e, { ...t, [n]: i });
  return s ? s.available : !0;
}
function $p(e, t) {
  const n = Ji(e, t);
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
function Zr(e, t) {
  const n = yl(e, t.selections, t.file), i = t.quantity ?? n, r = li(e, t.selections, t.file), s = (r == null ? void 0 : r.type) === "quantities" ? { fieldId: r.id, scale: n > 0 ? i / n : 0 } : void 0, a = {
    selections: t.selections,
    file: t.file,
    quantity: i
  }, o = e.pricing.currency, l = [], c = Ji(e, t.selections), u = $p(e, t.selections);
  let d = !1;
  const f = Ap(e, t.selections), m = Ip(e.pricing.basePrice, c == null ? void 0 : c.price, i);
  l.push({
    sourceId: "base",
    label: "Base price",
    stage: "base",
    type: "base",
    amount: ut(m, o)
  });
  let g = m;
  const v = bl(e, a, s);
  for (const { sourceId: O, label: Y, modifier: L, units: Q } of v) {
    const R = Ep(L, a, Q);
    if (R !== void 0) {
      if (Number.isNaN(R)) {
        d = !0;
        continue;
      }
      g += R, l.push({
        sourceId: O,
        label: Y,
        stage: "additive",
        type: L.type,
        amount: ut(R, o)
      });
    }
  }
  const x = g;
  for (const { sourceId: O, label: Y, modifier: L } of v) {
    if (L.type !== "percent")
      continue;
    const Q = Kt(L, a), R = g * (Q / 100);
    g += R, l.push({
      sourceId: O,
      label: Y,
      stage: "percent",
      type: "percent",
      amount: ut(R, o)
    });
  }
  for (const { sourceId: O, label: Y, modifier: L } of v) {
    if (L.type !== "multiplier")
      continue;
    const Q = Kt(L, a), R = g * Q - g;
    g += R, l.push({
      sourceId: O,
      label: Y,
      stage: "multiplier",
      type: "multiplier",
      amount: ut(R, o)
    });
  }
  e.pricing.setupFee !== void 0 && e.pricing.setupFee > 0 && (g += e.pricing.setupFee, l.push({
    sourceId: "setup-fee",
    label: "Setup fee",
    stage: "setup",
    type: "setup",
    amount: ut(e.pricing.setupFee, o)
  }));
  for (const { sourceId: O, label: Y, modifier: L } of v) {
    if (L.type !== "setup")
      continue;
    const Q = Kt(L, a);
    g += Q, l.push({
      sourceId: O,
      label: Y,
      stage: "setup",
      type: "setup",
      amount: ut(Q, o)
    });
  }
  const S = Math.max(e.pricing.minimumPrice ?? 0, 0);
  if (g < S) {
    const O = S - g;
    g = S, l.push({
      sourceId: "adjustment:minimum",
      label: "Minimum order adjustment",
      stage: "adjustment",
      type: "minimum",
      amount: ut(O, o)
    });
  }
  const _ = ut(g, o), U = u ? "combination" : d ? "formula" : void 0;
  return {
    currency: o,
    quantity: i,
    unavailable: U !== void 0,
    ...U ? { unavailableReason: U } : {},
    sku: f,
    base: ut(m, o),
    subtotal: ut(x, o),
    total: _,
    unitPrice: ut(g / Math.max(i, 1), o),
    lines: l
  };
}
function Ip(e, t, n) {
  const i = t ?? e.amount, r = e.tiers;
  return e.per === "order" ? r ? ni(r.rows, n).amount : i : r ? r.mode === "graduated" ? Ln(n, r.rows) : ni(r.rows, n).amount * n : i * n;
}
function bl(e, t, n) {
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
      const a = Np(s.id, t.selections);
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
function Np(e, t) {
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
      return ml(e, t);
    case "length":
      return vl(e, t);
  }
}
function Kt(e, t) {
  return e.tiers ? ni(e.tiers.rows, Dn(e, t)).amount : e.amount;
}
function Ep(e, t, n = t.quantity) {
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
      const d = ml(e, t);
      return ((c = e.tiers) == null ? void 0 : c.mode) === "graduated" ? Ln(Dn(e, t), e.tiers.rows) * i : Kt(e, t) * d * i;
    }
    case "formula":
      return Sp(e, t);
    case "perLength": {
      const d = vl(e, t);
      return ((u = e.tiers) == null ? void 0 : u.mode) === "graduated" ? Ln(Dn(e, t), e.tiers.rows) * i : Kt(e, t) * d * i;
    }
  }
}
const Op = 5;
function Pp(e, t) {
  const n = li(e, t.selections, t.file);
  if (!n)
    return;
  const i = Zr(e, t), r = i.quantity;
  if (r <= 0 || i.unavailable)
    return;
  const s = { selections: t.selections, file: t.file, quantity: r }, a = bl(e, s).map(({ modifier: u }) => u), o = Mp(e, a), l = /* @__PURE__ */ new Set();
  for (const { table: u } of o)
    for (const d of u.rows) {
      if (d.upTo === void 0)
        continue;
      const f = Rp(n, r, Math.floor(d.upTo) + 1);
      f !== void 0 && f > r && l.add(f);
    }
  const c = [...l].sort((u, d) => u - d).slice(0, Op);
  for (const u of c) {
    const d = Zr(e, { ...t, quantity: u });
    if (!(d.unavailable || d.unitPrice >= i.unitPrice))
      return {
        add: u - r,
        quantity: u,
        unitPrice: d.unitPrice,
        percentOff: Fp(o, r, u)
      };
  }
}
function Mp(e, t) {
  const n = [], i = e.pricing.basePrice.tiers;
  i && i.basis === "quantity" && n.push({ table: i, percent: !1 });
  for (const r of t)
    r.tiers && r.tiers.basis === "quantity" && n.push({ table: r.tiers, percent: r.type === "percent" });
  return n;
}
function Rp(e, t, n) {
  if (e.type === "quantities") {
    const s = Math.ceil((n - t) / e.step), a = t + Math.max(s, 0) * e.step;
    return e.maxTotal !== void 0 && a > e.maxTotal ? void 0 : a;
  }
  const i = Math.ceil((n - e.min) / e.step), r = e.min + Math.max(i, 0) * e.step;
  return e.max !== void 0 && r > e.max ? void 0 : r;
}
function Fp(e, t, n) {
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
const jp = /* @__PURE__ */ new Set([
  "perPage",
  "perColorPage",
  "perMonoPage"
]), Lp = /* @__PURE__ */ new Set([
  "file.pages",
  "file.colorPages",
  "file.monoPages"
]);
function xl(e) {
  return e ? [...e.all ?? [], ...e.any ?? []].some((n) => gs(n) ? Lp.has(n.ref) : xl(n)) : !1;
}
function Dp(e) {
  const t = (n) => {
    var i;
    return jp.has(n.type) || ((i = n.tiers) == null ? void 0 : i.basis) === "pages" || n.formula !== void 0 && xs(n.formula).has("pages");
  };
  for (const n of e.sections)
    for (const i of n.fields)
      if (xl(i.visibleWhen) || i.priceModifiers.some(t) || Vt(i) && i.options.some((r) => r.priceModifiers.some(t)))
        return !0;
  return !1;
}
const ji = "__artwork", _l = "__artwork-section";
function zp(e) {
  return { id: _l, title: e, fields: [{
    id: ji,
    type: "file",
    display: "producer",
    accept: [],
    required: !1,
    priceModifiers: []
  }] };
}
function qp(e, t) {
  Tt(
    [() => e.schema.value, () => t.list.value],
    ([n, i]) => {
      if (!n)
        return;
      const r = n.sections.some(
        (o) => o.fields.some(
          (l) => l.type === "file" && l.id !== ji
        )
      ), s = n.sections.findIndex(
        (o) => o.id === _l
      ), a = i.length > 0 && !r;
      a && s === -1 ? n.sections.push(zp(i[0].label)) : !a && s !== -1 && (n.sections.splice(s, 1), e.select(ji, ""));
    },
    { immediate: !0, deep: !0 }
  );
}
function wl(e, t, n, i = {}) {
  var a, o;
  const r = [], s = e.flatMap(({ fields: l }) => l).filter((l) => l.type === "file").reduce((l, c) => l + vr(c.id, t[c.id], n, i).length, 0);
  for (const { section: l, fields: c } of e) {
    const d = l.fields.filter((f) => f.type !== "info").length === 1 && ((a = l.title) == null ? void 0 : a.trim()) || void 0;
    for (const f of c) {
      if (f.type === "info")
        continue;
      const m = t[f.id];
      let g;
      if (oi(f)) {
        const v = Array.isArray(m) ? m : typeof m == "string" ? [m] : [], x = f.options.filter((S) => v.includes(S.id)).map((S) => S.label);
        g = x.length ? x.join(", ") : void 0;
      } else if (f.type === "quantities") {
        const v = Rt(f, m), x = f.options.filter((S) => v[S.id] !== void 0).map((S) => `${S.label} × ${v[S.id]}`);
        g = x.length ? x.join(", ") : void 0;
      } else if (f.type === "file") {
        const v = vr(f.id, m, n, i).map(
          (x) => x.fileName ?? i.designName ?? x.fileId
        );
        g = v.length ? v.join(", ") : void 0;
      } else if (dt(m))
        g = `${m.w} × ${m.h} ${m.unit}`;
      else if (f.type === "quantity" && m !== void 0 && m !== "") {
        const v = ti(f, m), x = (o = f.unit) == null ? void 0 : o.trim();
        g = x ? `${v} ${x}` : String(v);
      } else m !== void 0 && m !== "" && (g = String(m));
      if (g !== void 0 && r.push({
        fieldId: f.id,
        /* An unlabeled quantity is common (the stepper explains
           itself on the page) — never show its internal id. */
        label: f.label || /* The designer's own slot is titled with its button
        ("Design fortsetzen" once saved) — no cart label. */
        (f.id === ji ? i.artworkLabel ?? "Design" : void 0) || d || (An(f) ? i.quantityLabel ?? "Quantity" : f.id),
        value: g
      }), f.type === "file" && i.fileLinkLabel && g !== void 0) {
        const v = vr(f.id, m, n, i);
        for (const x of v) {
          const S = Vp(x);
          S && r.push({
            fieldId: f.id,
            label: s > 1 ? `${i.fileLinkLabel} (${x.fileName ?? x.fileId})` : i.fileLinkLabel,
            value: S
          });
        }
      }
    }
  }
  return Up(r);
}
function vr(e, t, n, i) {
  var o, l;
  const r = (o = i.uploads) == null ? void 0 : o[e];
  if (r != null && r.length)
    return r;
  const s = Array.isArray(t) ? t : typeof t == "string" && t ? [t] : [], a = (l = i.records) == null ? void 0 : l[e];
  return a && s.includes(a.fileId) ? [a] : n && s.includes(n.fileId) ? [n] : [];
}
function Up(e) {
  const t = /* @__PURE__ */ new Map();
  return e.map((n) => {
    const i = (t.get(n.label) ?? 0) + 1;
    return t.set(n.label, i), i === 1 ? n : { ...n, label: `${n.label} (${i})` };
  });
}
function Vp(e) {
  var n;
  const t = (n = e == null ? void 0 : e.raw) == null ? void 0 : n.downloadUrl;
  return typeof t == "string" && t.startsWith("https://") ? t : void 0;
}
async function Bp(e) {
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
async function Zp(e, t, n) {
  const i = n ? await Hp(n) : void 0, r = await fetch(e, {
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
    throw new Error(await Bp(r));
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
function Hp(e) {
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
async function Wp(e, t) {
  if (!e.endpoint)
    throw new Error(`Provider "${e.id}" has no endpoint for pull mode.`);
  const n = `${e.endpoint.replace(/\/$/, "")}/${encodeURIComponent(t)}`, i = await fetch(n);
  if (!i.ok)
    throw new Error(`Metadata fetch failed: ${i.status}`);
  return _s.parse(await i.json());
}
async function Kp(e, t, n = {}) {
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
      if (s = await Wp(e, t), s.status === "ready" || s.status === "failed")
        return s;
    } catch {
    }
    await Gp(i);
  }
  return s;
}
function Gp(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Yp(e) {
  const t = { ...e }, n = /* @__PURE__ */ He(null), i = /* @__PURE__ */ He(!1), r = /* @__PURE__ */ He(null), s = /* @__PURE__ */ He(!1), a = /* @__PURE__ */ at({}), o = /* @__PURE__ */ He(!1), l = /* @__PURE__ */ at({}), c = /* @__PURE__ */ at({}), u = /* @__PURE__ */ He(void 0), d = /* @__PURE__ */ at({}), f = /* @__PURE__ */ at({}), m = /* @__PURE__ */ new Map();
  let g = 0;
  function v(w) {
    const H = l[w];
    return c[w] ?? (H != null && H.length ? H[H.length - 1] : void 0);
  }
  const x = K({
    get: () => {
      const w = n.value ? nf(n.value) : void 0;
      return w ? v(w.id) : u.value;
    },
    set: (w) => {
      u.value = w;
    }
  });
  function S() {
    const w = [...Object.values(l).flat(), ...Object.values(c)];
    return w[w.length - 1];
  }
  function _(w, H) {
    const fe = l[w];
    fe != null && fe.some((we) => we.fileId === H.fileId) && (l[w] = fe.map((we) => we.fileId === H.fileId ? H : we));
  }
  const U = K(
    () => n.value ? yl(n.value, a, x.value) : 1
  ), O = K(() => ({
    selections: a,
    file: x.value,
    quantity: U.value
  }));
  async function Y() {
    i.value = !0, r.value = null, s.value = !1;
    try {
      if (t.inlineConfig)
        n.value = ka(t.inlineConfig);
      else if (t.configUrl) {
        const w = await fetch(t.configUrl);
        if (w.status === 404 || w.status === 403) {
          s.value = !0;
          return;
        }
        if (!w.ok)
          throw new Error(`Config load failed: ${w.status}`);
        n.value = ka(await w.json());
      } else
        throw new Error("No config-url or inline config provided.");
      Qp(n.value, a);
    } catch (w) {
      r.value = w instanceof Error ? w.message : String(w);
    } finally {
      i.value = !1;
    }
  }
  async function L(w) {
    Object.assign(t, w);
    for (const H of Object.keys(a))
      delete a[H];
    for (const H of Object.keys(l))
      delete l[H];
    for (const H of Object.keys(c))
      delete c[H];
    u.value = void 0, await Y();
  }
  const Q = K(() => {
    const w = n.value;
    return w ? w.sections.map((H) => ({
      section: H,
      fields: H.fields.filter(
        (fe) => Ss(w, fe, O.value)
      )
    })).filter((H) => H.fields.length > 0) : [];
  }), R = K(
    () => Q.value.flatMap((w) => w.fields)
  ), oe = K(() => n.value ? Zr(n.value, {
    selections: a,
    file: x.value
  }) : null), he = K(() => {
    if (!n.value)
      return;
    const w = li(n.value, a, x.value);
    if (w != null && w.nextBreakHint)
      return Pp(n.value, { selections: a, file: x.value });
  });
  function be(w, H) {
    var we;
    const fe = (we = n.value) == null ? void 0 : we.sections.flatMap((Ne) => Ne.fields).find((Ne) => Ne.id === w);
    (fe == null ? void 0 : fe.type) === "quantity" && typeof H == "number" ? a[w] = ti(fe, H) : (fe == null ? void 0 : fe.type) === "quantities" ? a[w] = Rt(fe, H) : a[w] = H;
  }
  function C(w, H) {
    if (w.type !== "select-many") {
      be(w.id, H);
      return;
    }
    const fe = a[w.id], we = Array.isArray(fe) ? [...fe] : [], Ne = we.indexOf(H);
    if (Ne >= 0)
      we.splice(Ne, 1);
    else {
      if (w.maxSelect !== void 0 && we.length >= w.maxSelect)
        return;
      we.push(H);
    }
    a[w.id] = we;
  }
  function P(w) {
    var we;
    const H = l[w.id] ?? [], fe = w.type === "file" ? zr(w) : 1;
    a[w.id] = fe > 1 ? H.map((Ne) => Ne.fileId) : ((we = H[0]) == null ? void 0 : we.fileId) ?? "";
  }
  async function X(w, H) {
    var Ne;
    if (delete f[w.id], !t.uploadEndpoint) {
      f[w.id] = "No upload endpoint configured.";
      return;
    }
    const fe = w.type === "file" ? zr(w) : 1;
    if (fe > 1 && (((Ne = l[w.id]) == null ? void 0 : Ne.length) ?? 0) + (d[w.id] ?? 0) >= fe)
      return;
    o.value = !0, d[w.id] = (d[w.id] ?? 0) + 1;
    const we = ++g;
    try {
      let st;
      try {
        st = await Zp(t.uploadEndpoint, H, t.turnstileUrl);
      } catch (Be) {
        f[w.id] = Be instanceof Error && !(Be instanceof TypeError) ? Be.message : "";
        return;
      }
      const cn = {
        version: "1.0",
        fileId: st.fileId,
        source: "uploader",
        status: "ready",
        fileName: st.fileName,
        fileSizeBytes: st.fileSizeBytes,
        issues: [],
        ...st.downloadUrl ? { raw: { downloadUrl: st.downloadUrl } } : {}
      };
      m.set(cn.fileId, we), l[w.id] = fe > 1 ? [...l[w.id] ?? [], cn].sort(
        (Be, un) => (m.get(Be.fileId) ?? 0) - (m.get(un.fileId) ?? 0)
      ) : [cn], u.value = cn, P(w);
      const Cn = t.provider;
      if (Cn && Cn.mode === "pull")
        try {
          const Be = await Kp(Cn, st.fileId);
          _(w.id, Be), u.value = Be;
        } catch (Be) {
          console.warn("[print-configurator] file analysis failed:", Be);
        }
    } finally {
      d[w.id] = Math.max(0, (d[w.id] ?? 1) - 1), o.value = Object.values(d).some((st) => st > 0);
    }
  }
  function te(w, H) {
    var we;
    delete f[w.id];
    const fe = l[w.id] ?? [];
    l[w.id] = fe.filter((Ne) => Ne.fileId !== H), P(w), ((we = u.value) == null ? void 0 : we.fileId) === H && (u.value = S());
  }
  function _e(w) {
    for (const H of Object.keys(l))
      _(H, w);
    for (const [H, fe] of Object.entries(c))
      fe.fileId === w.fileId && (c[H] = w);
    (!u.value || u.value.fileId === w.fileId) && (u.value = w);
  }
  function ve(w, H) {
    if (H === void 0) {
      u.value = w;
      return;
    }
    const fe = c[H];
    if (w) {
      c[H] = w, u.value = w;
      return;
    }
    delete c[H], (!u.value || fe && u.value.fileId === fe.fileId) && (u.value = S());
  }
  return {
    schema: n,
    loading: i,
    error: r,
    unconfigured: s,
    selections: a,
    quantity: U,
    file: x,
    fileAnalyzing: o,
    uploads: l,
    records: c,
    uploading: d,
    uploadErrors: f,
    evalCtx: O,
    visibleSections: Q,
    visibleFields: R,
    price: oe,
    nextBreak: he,
    /** The connected data-feed provider config, if any. */
    get provider() {
      return t.provider;
    },
    load: Y,
    reload: L,
    select: be,
    toggle: C,
    handleFile: X,
    removeUpload: te,
    feedMetadata: _e,
    setFile: ve,
    fieldFile: v
  };
}
function Qp(e, t) {
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
function Jp() {
  const e = /* @__PURE__ */ at(/* @__PURE__ */ new Map()), t = K(
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
const Hr = 1, Pn = "[print-configurator]";
function Xp(e) {
  const { host: t, cfg: n, validation: i, holds: r, producers: s } = e;
  function a(C) {
    return C === void 0 ? C : JSON.parse(JSON.stringify(C));
  }
  const o = K(() => !n.schema.value || !n.price.value ? null : {
    apiVersion: Hr,
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
    const C = {}, P = n.schema.value;
    if (!P)
      return C;
    for (const X of S(P)) {
      const te = X.type === "file" ? n.fieldFile(X.id) : void 0;
      te && (C[X.id] = a(te));
    }
    return C;
  }
  let c = null, u = !1;
  function d(C, P) {
    if (!C)
      return ["selections", "quantity", "price", "file", "files", "holds", "valid"];
    const X = [], te = /* @__PURE__ */ new Set([
      ...Object.keys(C.selections),
      ...Object.keys(P.selections)
    ]);
    for (const _e of te)
      Bt(C.selections[_e], P.selections[_e]) || X.push(`selections.${_e}`);
    return C.quantity !== P.quantity && X.push("quantity"), Bt(C.price, P.price) || X.push("price"), Bt(C.file, P.file) || X.push("file"), Bt(C.files, P.files) || X.push("files"), Bt(C.holds, P.holds) || X.push("holds"), C.valid !== P.valid && X.push("valid"), X;
  }
  let f = null;
  function m(C) {
    f = (C == null ? void 0 : C.source) ?? "api";
  }
  function g() {
    Ki(() => {
      f = null;
    });
  }
  Tt(o, (C) => {
    if (!u || !C)
      return;
    const P = d(c, C), X = f ?? "user";
    c = C, P.length !== 0 && v("change", { ...C, source: X, changed: P });
  });
  function v(C, P) {
    t == null || t.dispatchEvent(
      new CustomEvent(C, { detail: P, bubbles: !0, composed: !0 })
    );
  }
  function x() {
    c = o.value, u = !0, c && v("ready", {
      ...c,
      source: "user"
    });
  }
  function S(C) {
    return C.sections.flatMap((P) => P.fields);
  }
  function _(C) {
    const P = n.schema.value;
    if (!P)
      return null;
    const X = S(P);
    return X.find((te) => te.id === C) ?? X.find((te) => te.role === C) ?? /* Several quantity fields may exist (one per paper group, say);
    "the quantity field" is the one currently in play. */
    (C === "quantity" ? li(P, n.selections, n.file.value) : void 0) ?? X.find(
      (te) => (C === "quantity" || C === "dimensions" || C === "file") && te.type === C
    ) ?? null;
  }
  function U(C, P) {
    switch (C.type) {
      case "select-one":
        return typeof P == "string" && C.options.some((X) => X.id === P);
      case "select-many":
        return Array.isArray(P) && P.every(
          (X) => typeof X == "string" && C.options.some((te) => te.id === X)
        );
      case "quantity":
      case "number":
        return typeof P == "number" && Number.isFinite(P);
      case "quantities":
        return typeof P == "object" && P !== null && !Array.isArray(P) && Object.entries(P).every(
          ([X, te]) => C.options.some((_e) => _e.id === X) && typeof te == "number" && Number.isFinite(te) && te >= 0
        );
      case "text":
        return typeof P == "string";
      case "dimensions":
        return typeof P == "object" && P !== null && !Array.isArray(P) && Number.isFinite(P.w) && Number.isFinite(P.h);
      default:
        return !1;
    }
  }
  function O(C, P) {
    const X = n.schema.value, te = X ? S(X).find((_e) => _e.id === C) : null;
    return te ? U(te, P) ? Bt(n.selections[C], P) ? !1 : (n.select(C, P), i.touch(C), !0) : (console.warn(
      `${Pn} setSelection: invalid value for "${C}" (${te.type})`,
      P
    ), !1) : (console.warn(`${Pn} setSelection: unknown field "${C}"`), !1);
  }
  function Y(C, P, X) {
    m(X), O(C, P), g();
  }
  function L(C, P) {
    if (typeof C != "object" || C === null) {
      console.warn(`${Pn} setSelections: expected an object map`);
      return;
    }
    m(P);
    for (const [X, te] of Object.entries(C))
      O(X, te);
    g();
  }
  function Q(C) {
    const P = n.schema.value;
    if (!P)
      return null;
    const X = S(P).filter((te) => te.type === "file");
    if (C && s.has(C)) {
      const te = s.fieldOf(C);
      return (te ? X.find((ve) => ve.id === te) : void 0) ?? el(P) ?? null;
    }
    return X.find((te) => te.type === "file" && te.display !== "producer") ?? X[0] ?? null;
  }
  function R(C, P) {
    !C || n.selections[C.id] === P || (n.select(C.id, P), i.touch(C.id));
  }
  function oe(C, P) {
    if (C === null) {
      const H = Q(P == null ? void 0 : P.source), fe = H ? !eh(n.selections[H.id]) : !1;
      if ((H ? n.fieldFile(H.id) : n.file.value) === void 0 && !fe)
        return;
      m(P), n.setFile(void 0, H == null ? void 0 : H.id), R(H, ""), g();
      return;
    }
    const X = _s.safeParse({
      version: "1.0",
      source: "custom",
      status: "ready",
      issues: [],
      ...C
    });
    if (!X.success) {
      console.warn(`${Pn} setFile: invalid file record`, X.error.issues);
      return;
    }
    const te = Q(X.data.source), _e = te ? n.fieldFile(te.id) : n.file.value, ve = Bt(_e, X.data), w = !te || n.selections[te.id] === X.data.fileId;
    ve && w || (m(P), ve || n.setFile(X.data, te == null ? void 0 : te.id), R(te, X.data.fileId), g());
  }
  function he(C, P) {
    if (typeof C != "string" || C === "") {
      console.warn(`${Pn} addHold: a non-empty string key is required`);
      return;
    }
    m(P), r.add(C, P == null ? void 0 : P.message), g();
  }
  function be(C, P) {
    m(P), r.release(C), g();
  }
  return {
    notifyReady: x,
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
        const P = _(C);
        return P ? a(P) : null;
      },
      setSelection: Y,
      setSelections: L,
      setFile: oe,
      addHold: he,
      releaseHold: be,
      /* Producer registry (docs/printapp-integration-v1.md). Not part
         of `state`: a producer is an offer available on the page, not
         an answer the customer has given, and nothing about the
         configuration changes when one appears. */
      registerProducer(C, P) {
        s.register(C, P);
      },
      unregisterProducer(C) {
        s.unregister(C);
      },
      /** Push-mode provider feed (pre-Page-API method, kept). */
      feedMetadata(C) {
        n.feedMetadata(C);
      },
      apiVersion: Hr
    }
  };
}
function eh(e) {
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
const Ia = "[print-configurator]", Wr = 10;
function th(e) {
  const t = /* @__PURE__ */ at(/* @__PURE__ */ new Map()), n = K(
    () => Array.from(t.values()).sort((c, u) => c.order - u.order)
  );
  function i(c, u) {
    if (typeof c != "string" || c === "") {
      console.warn(`${Ia} registerProducer: a non-empty string id is required`);
      return;
    }
    const d = u == null ? void 0 : u.label;
    if (typeof d != "string" || d === "") {
      console.warn(`${Ia} registerProducer: "${c}" needs a label`);
      return;
    }
    t.set(c, {
      id: c,
      label: d,
      description: u.description,
      /* Default behind the built-in upload: the merchant's own file is
         the expected answer, an alternative producer is the offer. */
      order: Number.isFinite(u.order) ? Number(u.order) : Wr + 10,
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
          apiVersion: Hr,
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
function As(e) {
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
    return new Intl.NumberFormat(As(n) ?? "en", {
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
function Na(e) {
  var t, n;
  return ((n = (t = As(e ?? void 0)) == null ? void 0 : t.split("-")[0]) == null ? void 0 : n.toLowerCase()) || void 0;
}
const kl = {
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
}, ah = {
  base: "summary.basePrice",
  "setup-fee": "summary.setupFee",
  "adjustment:minimum": "summary.minimumAdjustment"
};
function oh(e, t) {
  const n = ah[t.sourceId];
  return n ? e(n) : t.label;
}
function lh(e, t) {
  return t ? e.replace(
    /\{(\w+)\}/g,
    (n, i) => i in t ? String(t[i]) : n
  ) : e;
}
function Sl(e) {
  const t = () => typeof e == "function" ? e() : e;
  return {
    t(n, i) {
      var a;
      const r = (a = t()) == null ? void 0 : a[n], s = typeof r == "string" && r !== "" ? r : kl[n];
      return lh(s, i);
    }
  };
}
function ch(e) {
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
    i in kl && typeof r == "string" && (n[i] = r);
  return n;
}
const Cs = Sl(), Tl = Symbol("print-configurator-strings");
function mt() {
  return Gt(Tl, Cs);
}
function uh(e, t, n, i = Cs.t) {
  const r = /* @__PURE__ */ at(/* @__PURE__ */ new Set()), s = { value: !1 }, a = K(() => {
    const f = [];
    for (const m of e.value) {
      const g = dh(m, t, i);
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
function dh(e, t, n = Cs.t) {
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
  if (e.type === "dimensions" && dt(i)) {
    const s = Ea(i.unit) / Ea(e.defaultUnit), a = i.w * s, o = i.h * s;
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
function Ea(e) {
  switch (e) {
    case "mm":
      return 1;
    case "cm":
      return 10;
    case "in":
      return 25.4;
  }
}
function fh(e, t, n) {
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
function ph(e, t, n) {
  const i = al(t), r = n.rate / 100;
  if (n.mode === "exclusive") {
    const o = pn(e, i), l = pn(o * r, i);
    return { net: o, tax: l, gross: pn(o + l, i) };
  }
  const s = pn(e, i), a = pn(s - s / (1 + r), i);
  return { net: pn(s - a, i), tax: a, gross: s };
}
function Oa(e, t) {
  try {
    return new Intl.NumberFormat(As(t) ?? "en", {
      maximumFractionDigits: 3
    }).format(e);
  } catch {
    return String(e);
  }
}
function Xi(e, t) {
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
const hh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], mh = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], gh = {
  key: 0,
  class: "check",
  "aria-hidden": "true"
}, vh = ["src"], yh = { class: "card-label" }, bh = {
  key: 2,
  class: "card-description"
}, Pa = /* @__PURE__ */ Oe({
  __name: "ChoiceCards",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Xi(
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
    return (c, u) => (y(), k("div", {
      class: Xe(["grid", e.field.display]),
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (y(!0), k(ue, null, De(e.field.options, (d, f) => (y(), k("button", {
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
        a(d.id) ? (y(), k("span", gh, "✓")) : ce("", !0),
        d.image ? (y(), k("img", {
          key: 1,
          src: d.image,
          alt: ""
        }, null, 8, vh)) : ce("", !0),
        M("span", yh, D(d.label), 1),
        d.description ? (y(), k("span", bh, D(d.description), 1)) : ce("", !0)
      ], 42, mh))), 128))
    ], 10, hh));
  }
}), xh = ["id", "value", "aria-labelledby", "aria-describedby", "aria-invalid"], _h = {
  key: 0,
  value: "",
  disabled: ""
}, wh = ["value", "disabled"], kh = /* @__PURE__ */ Oe({
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
    return (a, o) => (y(), k("select", {
      id: `pc-control-${e.field.id}`,
      class: "dropdown",
      part: "dropdown",
      value: e.selectedIds[0] ?? "",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onChange: s
    }, [
      e.selectedIds.length ? ce("", !0) : (y(), k("option", _h, D(e.field.label ? N(r)("choice.placeholder", { label: e.field.label.toLowerCase() }) : N(r)("choice.placeholderBare")), 1)),
      (y(!0), k(ue, null, De(e.field.options, (l) => (y(), k("option", {
        key: l.id,
        value: l.id,
        disabled: n.unavailableIds.includes(l.id)
      }, D(l.label), 9, wh))), 128))
    ], 40, xh));
  }
}), Sh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Th = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], Ah = { key: 0 }, Ch = { class: "choice-body" }, $h = { class: "choice-title" }, Ih = {
  key: 0,
  class: "choice-description"
}, Nh = /* @__PURE__ */ Oe({
  __name: "ChoiceList",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Xi(
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
    return (c, u) => (y(), k("div", {
      class: "choice-list",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (y(!0), k(ue, null, De(e.field.options, (d, f) => (y(), k("button", {
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
        M("span", {
          class: Xe(["choice-indicator", { multi: r }]),
          "aria-hidden": "true"
        }, [
          a(d.id) ? (y(), k("span", Ah, "✓")) : ce("", !0)
        ], 2),
        M("span", Ch, [
          M("span", $h, D(d.label), 1),
          d.description ? (y(), k("span", Ih, D(d.description), 1)) : ce("", !0)
        ])
      ], 42, Th))), 128))
    ], 8, Sh));
  }
}), Eh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Oh = ["part", "role", "aria-checked", "aria-pressed", "aria-disabled", "tabindex", "onClick", "onKeydown"], Ph = {
  key: 0,
  "aria-hidden": "true"
}, Mh = /* @__PURE__ */ Oe({
  __name: "ChoicePills",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Xi(
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
    return (c, u) => (y(), k("div", {
      class: "pills",
      role: r ? "group" : "radiogroup",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0
    }, [
      (y(!0), k(ue, null, De(e.field.options, (d, f) => (y(), k("button", {
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
        cs(D(d.label) + " ", 1),
        a(d.id) ? (y(), k("span", Ph, "✓")) : ce("", !0)
      ], 42, Oh))), 128))
    ], 8, Eh));
  }
}), Rh = ["role", "aria-labelledby", "aria-describedby", "aria-invalid"], Fh = ["part", "role", "aria-checked", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "onClick", "onKeydown"], jh = {
  key: 0,
  class: "swatch-check",
  "aria-hidden": "true"
}, Lh = {
  key: 0,
  class: "swatch-selected-label",
  "aria-hidden": "true"
}, Dh = /* @__PURE__ */ Oe({
  __name: "ChoiceSwatches",
  props: {
    field: { type: null },
    selectedIds: { type: Array },
    unavailableIds: { type: Array },
    error: { type: String }
  },
  emits: ["pick"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = n.field.type === "select-many", s = Xi(
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
    return (u, d) => (y(), k("div", null, [
      M("div", {
        class: "swatches",
        role: r ? "group" : "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
        "aria-invalid": e.error ? "true" : void 0
      }, [
        (y(!0), k(ue, null, De(e.field.options, (f, m) => (y(), k("button", {
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
          a(f.id) ? (y(), k("span", jh, "✓")) : ce("", !0)
        ], 46, Fh))), 128))
      ], 8, Rh),
      l.value ? (y(), k("p", Lh, D(l.value), 1)) : ce("", !0)
    ]));
  }
}), Ma = {
  cards: Pa,
  grid: Pa,
  swatches: Dh,
  pills: Mh,
  dropdown: kh,
  list: Nh
}, er = Symbol("print-configurator"), zh = ["data-field-id", "data-type"], qh = ["id"], Uh = {
  key: 0,
  class: "req",
  "aria-hidden": "true"
}, Vh = {
  key: 1,
  class: "help",
  part: "field-help"
}, Bh = ["id"], Zh = /* @__PURE__ */ Oe({
  __name: "FieldShell",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e, { expose: t }) {
    return t({ fieldId: e.field.id }), (i, r) => (y(), k("div", {
      class: "field",
      part: "field",
      "data-field-id": e.field.id,
      "data-type": e.field.type
    }, [
      e.field.label ? (y(), k("span", {
        key: 0,
        id: `pc-label-${e.field.id}`,
        class: "field-label",
        part: "field-label"
      }, [
        cs(D(e.field.label) + " ", 1),
        e.field.required ? (y(), k("span", Uh, "*")) : ce("", !0)
      ], 8, qh)) : ce("", !0),
      e.field.helpText ? (y(), k("p", Vh, D(e.field.helpText), 1)) : ce("", !0),
      qc(i.$slots, "default"),
      e.error ? (y(), k("p", {
        key: 2,
        id: `pc-error-${e.field.id}`,
        class: "field-error",
        part: "field-error",
        role: "status"
      }, D(e.error), 9, Bh)) : ce("", !0)
    ], 8, zh));
  }
}), Hh = ["aria-labelledby"], Wh = ["part", "aria-checked", "onClick"], Kh = ["value", "aria-label"], Gh = ["value"], Yh = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], Qh = {
  key: 3,
  class: "stepper",
  part: "stepper"
}, Jh = ["aria-label", "disabled"], Xh = ["value", "min", "max", "step", "aria-label", "aria-describedby", "onKeydown"], em = ["aria-label", "disabled"], tm = /* @__PURE__ */ Oe({
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
      var g, v;
      return e.field.display === "pills" && ((g = e.field.presets) != null && g.length) ? (y(), k("div", {
        key: 0,
        class: "pills",
        role: "radiogroup",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0
      }, [
        (y(!0), k(ue, null, De(e.field.presets, (x) => (y(), k("button", {
          key: x,
          type: "button",
          class: Xe(["pill", { active: r.value === x }]),
          part: r.value === x ? "choice pill choice-selected" : "choice pill",
          role: "radio",
          "aria-checked": r.value === x,
          onClick: (S) => o(x)
        }, D(x), 11, Wh))), 128))
      ], 8, Hh)) : e.field.display === "dropdown" && ((v = e.field.presets) != null && v.length) ? (y(), k("select", {
        key: 1,
        class: "dropdown",
        part: "dropdown",
        value: String(r.value),
        "aria-label": a.value,
        onChange: m[0] || (m[0] = (x) => o(Number(x.target.value)))
      }, [
        (y(!0), k(ue, null, De(e.field.presets, (x) => (y(), k("option", {
          key: x,
          value: String(x)
        }, D(x), 9, Gh))), 128))
      ], 40, Kh)) : e.field.display === "input" ? (y(), k("input", {
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
        onKeydown: Ir(Qn(d, ["prevent"]), ["enter"])
      }, null, 40, Yh)) : (y(), k("div", Qh, [
        M("button", {
          type: "button",
          part: "stepper-decrement",
          "aria-label": N(s)("stepper.decrease", { label: a.value.toLowerCase() }),
          disabled: r.value <= e.field.min,
          onClick: m[1] || (m[1] = (x) => l(-1))
        }, " − ", 8, Jh),
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
          onKeydown: Ir(Qn(d, ["prevent"]), ["enter"])
        }, null, 40, Xh),
        M("button", {
          type: "button",
          part: "stepper-increment",
          "aria-label": N(s)("stepper.increase", { label: a.value.toLowerCase() }),
          disabled: e.field.max !== void 0 && r.value >= e.field.max,
          onClick: m[2] || (m[2] = (x) => l(1))
        }, " + ", 8, em)
      ]));
    };
  }
}), nm = ["aria-labelledby", "aria-describedby"], im = ["part"], rm = { class: "quantities-name" }, sm = ["src"], am = {
  class: "quantities-label",
  part: "quantities-label"
}, om = {
  class: "stepper",
  part: "stepper"
}, lm = ["aria-label", "disabled", "onClick"], cm = ["value", "max", "step", "disabled", "aria-label", "onInput", "onBlur", "onKeydown"], um = ["aria-label", "disabled", "onClick"], dm = {
  class: "quantities-total",
  part: "quantities-total",
  "aria-live": "polite"
}, fm = /* @__PURE__ */ Oe({
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
      var S;
      const x = (S = n.field.unit) == null ? void 0 : S.trim();
      return x ? `${a.value} ${x}` : String(a.value);
    });
    function l(x) {
      return s.value[x] ?? 0;
    }
    function c(x) {
      return n.unavailableIds.includes(x);
    }
    function u(x) {
      const S = l(x);
      return S === 0 ? n.field.min : S + n.field.step;
    }
    function d(x) {
      if (c(x))
        return !1;
      const S = u(x), { max: _, maxTotal: U } = n.field;
      return _ !== void 0 && S > _ ? !1 : U === void 0 || a.value - l(x) + S <= U;
    }
    function f(x, S) {
      const _ = { ...s.value, [x]: S };
      i("select", Rt(n.field, _)), i("touch");
    }
    function m(x, S) {
      if (S === 1) {
        f(x, u(x));
        return;
      }
      const _ = l(x) - n.field.step;
      f(x, _ < n.field.min ? 0 : _);
    }
    function g(x, S) {
      const _ = S.target.value;
      if (_ === "")
        return;
      const U = Number(_);
      (Rt(n.field, { [x]: U })[x] ?? 0) === U && f(x, U);
    }
    function v(x, S) {
      const _ = S.target;
      f(x, _.value === "" ? 0 : Number(_.value)), _.value = String(l(x));
    }
    return (x, S) => (y(), k(ue, null, [
      M("div", {
        class: Xe(["quantities", e.field.display === "list" ? "quantities-list" : "quantities-grid"]),
        part: "quantities",
        role: "group",
        "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
        "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0
      }, [
        (y(!0), k(ue, null, De(e.field.options, (_) => (y(), k("div", {
          key: _.id,
          class: Xe(["quantities-item", { active: l(_.id) > 0, off: c(_.id) }]),
          part: l(_.id) > 0 ? "quantities-item quantities-item-active" : "quantities-item"
        }, [
          M("span", rm, [
            _.color ? (y(), k("span", {
              key: 0,
              class: "quantities-swatch",
              style: ri({ background: _.color }),
              "aria-hidden": "true"
            }, null, 4)) : _.image ? (y(), k("img", {
              key: 1,
              class: "quantities-image",
              src: _.image,
              alt: ""
            }, null, 8, sm)) : ce("", !0),
            M("span", am, D(_.label), 1)
          ]),
          M("div", om, [
            M("button", {
              type: "button",
              part: "stepper-decrement",
              "aria-label": N(r)("stepper.decrease", { label: _.label }),
              disabled: l(_.id) === 0,
              onClick: (U) => m(_.id, -1)
            }, " − ", 8, lm),
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
              onInput: (U) => g(_.id, U),
              onBlur: (U) => v(_.id, U),
              onKeydown: Ir(Qn((U) => v(_.id, U), ["prevent"]), ["enter"])
            }, null, 40, cm),
            M("button", {
              type: "button",
              part: "stepper-increment",
              "aria-label": N(r)("stepper.increase", { label: _.label }),
              disabled: !d(_.id),
              onClick: (U) => m(_.id, 1)
            }, " + ", 8, um)
          ])
        ], 10, im))), 128))
      ], 10, nm),
      M("p", dm, D(N(r)("quantities.total", { count: o.value })), 1)
    ], 64));
  }
}), pm = {
  key: 0,
  class: "slider-row"
}, hm = ["value", "min", "max", "step", "aria-label"], mm = {
  class: "slider-value",
  "aria-hidden": "true"
}, gm = {
  key: 1,
  class: "stepper",
  part: "stepper"
}, vm = ["aria-label", "disabled"], ym = ["value", "min", "max", "step", "aria-label"], bm = ["aria-label", "disabled"], xm = ["value", "min", "max", "step", "aria-label", "aria-describedby", "aria-invalid"], _m = /* @__PURE__ */ Oe({
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
    return (l, c) => e.field.display === "slider" ? (y(), k("div", pm, [
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
      }, null, 40, hm),
      M("span", mm, D(r.value), 1)
    ])) : e.field.display === "stepper" ? (y(), k("div", gm, [
      M("button", {
        type: "button",
        part: "stepper-decrement",
        "aria-label": N(s)("stepper.decrease", { label: a.value.toLowerCase() }),
        disabled: e.field.min !== void 0 && r.value <= e.field.min,
        onClick: c[1] || (c[1] = (u) => o(r.value - (e.field.step ?? 1)))
      }, " − ", 8, vm),
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
      }, null, 40, ym),
      M("button", {
        type: "button",
        part: "stepper-increment",
        "aria-label": N(s)("stepper.increase", { label: a.value.toLowerCase() }),
        disabled: e.field.max !== void 0 && r.value >= e.field.max,
        onClick: c[4] || (c[4] = (u) => o(r.value + (e.field.step ?? 1)))
      }, " + ", 8, bm)
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
    }, null, 40, xm));
  }
}), wm = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], km = ["value", "placeholder", "maxlength", "aria-labelledby", "aria-describedby", "aria-invalid"], Sm = /* @__PURE__ */ Oe({
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
      value: typeof e.value == "string" ? e.value : N(s),
      placeholder: e.field.placeholder,
      maxlength: e.field.maxLength,
      rows: "3",
      "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
      "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
      "aria-invalid": e.error ? "true" : void 0,
      onInput: r,
      onBlur: o[0] || (o[0] = (l) => i("touch"))
    }, null, 40, wm)) : (y(), k("input", {
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
    }, null, 40, km));
  }
}), Tm = {
  class: "dimensions",
  part: "dimensions"
}, Am = { class: "dim-input" }, Cm = { class: "dim-label" }, $m = ["value", "aria-describedby", "aria-invalid"], Im = { class: "dim-input" }, Nm = { class: "dim-label" }, Em = ["value", "aria-describedby", "aria-invalid"], Om = ["value", "aria-label"], Pm = ["value"], Mm = {
  key: 1,
  class: "dim-unit-static"
}, Rm = /* @__PURE__ */ Oe({
  __name: "DimensionsInput",
  props: {
    field: { type: null },
    value: { type: null },
    error: { type: String }
  },
  emits: ["select", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = mt(), s = /* @__PURE__ */ at({
      w: dt(n.value) ? n.value.w : NaN,
      h: dt(n.value) ? n.value.h : NaN,
      unit: dt(n.value) ? n.value.unit : n.field.defaultUnit
    });
    Tt(
      () => n.value,
      (c) => {
        dt(c) ? (s.w = c.w, s.h = c.h, s.unit = c.unit) : (c === void 0 || c === "") && (s.w = NaN, s.h = NaN);
      }
    );
    const a = s;
    function o(c) {
      Object.assign(s, c), i("touch"), s.w > 0 && s.h > 0 && i("select", { w: s.w, h: s.h, unit: s.unit });
    }
    function l(c) {
      return Number(c.target.value);
    }
    return (c, u) => (y(), k("div", Tm, [
      M("label", Am, [
        M("span", Cm, D(N(r)("dimensions.width")), 1),
        M("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(N(a).w) ? "" : N(a).w,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[0] || (u[0] = (d) => o({ w: l(d) }))
        }, null, 40, $m)
      ]),
      u[3] || (u[3] = M("span", {
        class: "dim-times",
        "aria-hidden": "true"
      }, "×", -1)),
      M("label", Im, [
        M("span", Nm, D(N(r)("dimensions.height")), 1),
        M("input", {
          type: "number",
          inputmode: "decimal",
          part: "stepper-input",
          value: Number.isNaN(N(a).h) ? "" : N(a).h,
          min: "0",
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: u[1] || (u[1] = (d) => o({ h: l(d) }))
        }, null, 40, Em)
      ]),
      e.field.units.length > 1 ? (y(), k("select", {
        key: 0,
        class: "dropdown dim-unit",
        part: "dropdown",
        value: N(a).unit,
        "aria-label": N(r)("dimensions.unit"),
        onChange: u[2] || (u[2] = (d) => o({ unit: d.target.value }))
      }, [
        (y(!0), k(ue, null, De(e.field.units, (d) => (y(), k("option", {
          key: d,
          value: d
        }, D(d), 9, Pm))), 128))
      ], 40, Om)) : (y(), k("span", Mm, D(e.field.defaultUnit), 1))
    ]));
  }
});
function Fm(e) {
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
const jm = ["aria-busy"], Lm = {
  key: 0,
  class: "upload-files",
  part: "upload-files"
}, Dm = { class: "upload-filename" }, zm = ["onClick"], qm = ["id", "accept", "multiple", "aria-labelledby", "aria-describedby", "aria-invalid"], Um = ["for"], Vm = {
  key: 0,
  class: "upload-status"
}, Bm = { class: "upload-filename" }, Zm = { class: "upload-hint" }, Hm = { class: "upload-title" }, Wm = { class: "upload-hint" }, Km = {
  key: 2,
  class: "upload-wrong-type",
  part: "upload-wrong-type",
  role: "alert"
}, Gm = /* @__PURE__ */ Oe({
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
    const n = e, i = t, { t: r } = mt(), s = /* @__PURE__ */ He(!1), a = K(() => n.field.accept.join(", ")), o = K(() => up(n.field.accept) || void 0), l = K(() => zr(n.field)), c = K(() => l.value > 1), u = K(() => n.files ?? []), d = K(() => c.value ? l.value - u.value.length : 1), f = K(
      () => c.value ? [r("upload.limit", { max: l.value }), a.value].filter(Boolean).join(" · ") : a.value
    ), m = /* @__PURE__ */ He(), g = K(
      () => m.value ?? (n.failure === void 0 ? void 0 : r("upload.failed", { reason: n.failure }).trim())
    );
    function v(U) {
      if (U.length) {
        const O = U.filter((L) => dp(n.field.accept, L.name)), Y = O.slice(0, Math.max(0, d.value));
        m.value = O.length < U.length ? r("upload.wrongType", { formats: fp(n.field.accept) }) : Y.length < O.length ? r("upload.tooMany", { max: l.value }) : void 0;
        for (const L of Y)
          i("file", n.field, L);
      }
      i("touch");
    }
    function x(U) {
      const O = U.target;
      v(Array.from(O.files ?? [])), O.value = "";
    }
    function S(U) {
      var Y;
      s.value = !1;
      const O = Array.from(((Y = U.dataTransfer) == null ? void 0 : Y.files) ?? []);
      v(c.value ? O : O.slice(0, 1));
    }
    function _(U) {
      m.value = void 0, i("remove", n.field, U.fileId), i("touch");
    }
    return (U, O) => (y(), k("div", {
      class: Xe(["upload", { dragging: s.value, done: !c.value && u.value.length > 0, multiple: c.value }]),
      part: "upload",
      "aria-busy": e.analyzing || void 0,
      onDragover: O[0] || (O[0] = Qn((Y) => s.value = !0, ["prevent"])),
      onDragleave: O[1] || (O[1] = (Y) => s.value = !1),
      onDrop: Qn(S, ["prevent"])
    }, [
      c.value && u.value.length ? (y(), k("ul", Lm, [
        (y(!0), k(ue, null, De(u.value, (Y) => (y(), k("li", {
          key: Y.fileId,
          class: "upload-file",
          part: "upload-file"
        }, [
          M("span", Dm, D(Y.fileName ?? Y.fileId), 1),
          M("button", {
            type: "button",
            class: "upload-remove",
            part: "upload-remove",
            onClick: (L) => _(Y)
          }, D(N(r)("artwork.remove")), 9, zm)
        ]))), 128))
      ])) : ce("", !0),
      d.value > 0 || e.analyzing ? (y(), k(ue, { key: 1 }, [
        M("input", {
          id: `pc-control-${e.field.id}`,
          class: "upload-input",
          part: "upload-input",
          type: "file",
          accept: o.value,
          multiple: c.value || void 0,
          "aria-labelledby": e.field.label ? `pc-label-${e.field.id}` : void 0,
          "aria-describedby": e.error ? `pc-error-${e.field.id}` : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          onChange: x
        }, null, 40, qm),
        M("label", {
          class: "upload-zone",
          for: `pc-control-${e.field.id}`
        }, [
          e.analyzing ? (y(), k("span", Vm, D(N(r)("upload.analyzing")), 1)) : !c.value && u.value[0] ? (y(), k(ue, { key: 1 }, [
            M("span", Bm, D(u.value[0].fileName ?? u.value[0].fileId), 1),
            M("span", Zm, D(N(r)("upload.replace")), 1)
          ], 64)) : (y(), k(ue, { key: 2 }, [
            M("span", Hm, D(c.value && u.value.length ? N(r)("upload.addMore") : N(r)("upload.drop")), 1),
            M("span", Wm, D(f.value), 1)
          ], 64))
        ], 8, Um)
      ], 64)) : ce("", !0),
      g.value ? (y(), k("p", Km, D(g.value), 1)) : ce("", !0)
    ], 42, jm));
  }
}), Ym = "https://cdn.filecheck.io/element/v1/filecheck.js", Qm = 1e4;
let Mn = null;
function Jm(e = Ym) {
  return typeof window < "u" && window.Filecheck ? Promise.resolve(window.Filecheck) : Mn || (Mn = new Promise((t, n) => {
    const i = (a) => {
      Mn = null, r.remove(), n(new Error(a));
    }, r = document.createElement("script");
    r.src = e, r.async = !0;
    const s = setTimeout(
      () => i("Filecheck SDK load timed out."),
      Qm
    );
    r.addEventListener("load", () => {
      clearTimeout(s), window.Filecheck ? t(window.Filecheck) : i("Filecheck SDK loaded but window.Filecheck is missing.");
    }), r.addEventListener("error", () => {
      clearTimeout(s), i("Filecheck SDK failed to load.");
    }), document.head.appendChild(r);
  }), Mn);
}
const Xm = { mm: 1, cm: 10, in: 25.4 }, eg = [
  "artworkSize",
  "pageCount",
  "fileCount",
  "bleed",
  "safety"
];
function tg(e, t) {
  var r, s;
  const n = [];
  for (const a of e) {
    const o = t[a.id];
    if (!(o === void 0 || o === "")) {
      if (a.type === "dimensions" && dt(o)) {
        const l = Xm[o.unit] ?? 1;
        n.push({
          artworkSize: {
            width_mm: Ra(o.w * l),
            height_mm: Ra(o.h * l)
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
    for (const o of eg) {
      const l = a[o];
      l && (i[o] = { ...i[o] ?? {}, ...l });
    }
  return i;
}
function Ra(e) {
  return Math.round(e * 10) / 10;
}
const ng = {
  class: "fc-upload",
  part: "upload"
}, ig = {
  key: 0,
  class: "fc-panel fc-unconfigured"
}, rg = {
  key: 1,
  class: "fc-panel fc-error",
  role: "alert"
}, sg = { class: "fc-panel-title" }, ag = { class: "fc-panel-hint" }, og = {
  key: 0,
  class: "fc-loading"
}, lg = {
  key: 1,
  class: "field-error",
  role: "status"
}, cg = /* @__PURE__ */ Oe({
  __name: "FilecheckUpload",
  props: {
    field: { type: null },
    provider: { type: null }
  },
  emits: ["metadata", "touch"],
  setup(e, { emit: t }) {
    const n = e, i = t, { t: r } = mt(), s = /* @__PURE__ */ He(null), a = /* @__PURE__ */ He(
      n.provider.publishableKey ? "loading" : "unconfigured"
    ), o = /* @__PURE__ */ He("");
    let l = null, c = null;
    const u = Gt(er, null), d = K(() => {
      var S;
      if (!u)
        return null;
      const x = ((S = u.cfg.visibleFields) == null ? void 0 : S.value) ?? [];
      return tg(x, u.cfg.selections);
    });
    Tt(d, (x) => {
      var S;
      (S = l == null ? void 0 : l.setContext) == null || S.call(l, x ?? null);
    });
    function f() {
      var x;
      return Na((x = u == null ? void 0 : u.locale) == null ? void 0 : x.value) ?? (typeof document < "u" ? Na(document.documentElement.lang) : void 0);
    }
    async function m() {
      var U, O, Y;
      const x = n.provider.publishableKey, S = (U = n.field.filecheck) == null ? void 0 : U.workflowId, _ = (O = n.field.filecheck) != null && O.workflow ? /* @__PURE__ */ ye(n.field.filecheck.workflow) : void 0;
      if (!x || !S && !_) {
        a.value = "unconfigured";
        return;
      }
      a.value = "loading", o.value = "";
      try {
        const L = await Jm(n.provider.scriptUrl);
        if (!s.value)
          return;
        const Q = L(x, {
          agentId: n.provider.agentId,
          iframeSrc: n.provider.iframeSrc
        }), R = f();
        l = Q.elements.create("intake", {
          // An inline workflow wins: it is the blueprint author's exact
          // intent, and demo blueprints rely on it to run against any
          // tenant with nothing saved in the Filecheck admin.
          ..._ ? { workflow: _ } : { workflowId: S },
          preview: n.provider.preview ?? !1,
          ...R ? { locale: R } : {}
        }), c = l.on("status", (he) => {
          i("metadata", he), i("touch");
        }), l.on("error", (he) => {
          const be = he;
          o.value = (be == null ? void 0 : be.message) ?? "Filecheck reported an error.";
        });
        const oe = d.value;
        oe && ((Y = l.setContext) == null || Y.call(l, oe)), l.mount(s.value), a.value = "active";
      } catch (L) {
        a.value = "error", o.value = L instanceof Error ? L.message : "Filecheck failed to load.";
      }
    }
    function g() {
      c == null || c(), c = null;
      try {
        l == null || l.unmount();
      } catch {
      }
      l = null;
    }
    function v() {
      g(), m();
    }
    return ss(() => {
      m();
    }), Tt(
      () => {
        var x, S;
        return [
          n.provider.publishableKey,
          n.provider.scriptUrl,
          n.provider.iframeSrc,
          n.provider.agentId,
          (x = n.field.filecheck) == null ? void 0 : x.workflowId,
          (S = n.field.filecheck) == null ? void 0 : S.workflow
        ];
      },
      () => {
        g(), m();
      }
    ), vo(g), (x, S) => (y(), k("div", ng, [
      a.value === "unconfigured" ? (y(), k("div", ig, [...S[0] || (S[0] = [
        M("span", { class: "fc-panel-title" }, "Filecheck upload", -1),
        M("span", { class: "fc-panel-hint" }, " Add your Filecheck publishable key in the store settings (or preview settings) to activate validated uploads for this field. ", -1)
      ])])) : a.value === "error" ? (y(), k("div", rg, [
        M("span", sg, D(N(r)("upload.unavailable")), 1),
        M("span", ag, D(o.value), 1),
        M("button", {
          type: "button",
          class: "fc-retry",
          onClick: v
        }, D(N(r)("upload.retry")), 1)
      ])) : (y(), k(ue, { key: 2 }, [
        a.value === "loading" ? (y(), k("p", og, D(N(r)("upload.secureLoading")), 1)) : ce("", !0),
        M("div", {
          ref_key: "slot",
          ref: s,
          class: "fc-slot"
        }, null, 512),
        o.value ? (y(), k("p", lg, D(o.value), 1)) : ce("", !0)
      ], 64))
    ]));
  }
}), ug = {
  key: 0,
  class: "artwork",
  part: "artwork"
}, dg = { class: "artwork-body" }, fg = {
  class: "artwork-name",
  part: "artwork-name"
}, pg = {
  key: 0,
  class: "artwork-meta",
  part: "artwork-meta"
}, hg = { class: "artwork-actions" }, mg = {
  key: 1,
  class: "producers"
}, gg = {
  key: 0,
  class: "producer-or",
  "aria-hidden": "true"
}, vg = ["onClick"], yg = { class: "producer-label" }, bg = {
  key: 0,
  class: "producer-description"
}, xg = {
  key: 1,
  class: "producer-or",
  "aria-hidden": "true"
}, _g = {
  class: "producer-or",
  "aria-hidden": "true"
}, wg = ["onClick"], kg = { class: "producer-label" }, Sg = {
  key: 0,
  class: "producer-description"
}, Tg = /* @__PURE__ */ Oe({
  __name: "ArtworkField",
  props: {
    field: { type: null },
    error: { type: String }
  },
  setup(e) {
    const t = e, n = Gt(er);
    if (!n)
      throw new Error("ArtworkField must be rendered inside <print-configurator>.");
    const { cfg: i, validation: r, producers: s } = n, { t: a } = mt(), o = K(
      () => {
        var L, Q, R;
        return t.field.providerId === "filecheck" && !!((L = t.field.filecheck) != null && L.workflowId || (Q = t.field.filecheck) != null && Q.workflow) && ((R = i.provider) == null ? void 0 : R.mode) === "element";
      }
    ), l = K(() => {
      var Q;
      const L = i.schema.value;
      return !!L && ((Q = el(L)) == null ? void 0 : Q.id) === t.field.id;
    }), c = K(() => i.fieldFile(t.field.id)), u = K(
      () => s.forField(t.field.id, l.value)
    ), d = K(() => {
      const L = i.selections[t.field.id];
      return Array.isArray(L) ? L.length > 0 : typeof L == "string" && L !== "";
    }), f = K(() => {
      var Q;
      const L = (Q = c.value) == null ? void 0 : Q.source;
      return L ? u.value.find((R) => R.id === L) ?? null : null;
    }), m = K(() => d.value && !f.value), g = K(() => t.field.display === "producer"), v = K(
      () => g.value ? u.value : u.value.filter((L) => L.order < Wr)
    ), x = K(
      () => g.value ? [] : u.value.filter((L) => L.order >= Wr)
    ), S = K(() => {
      const L = c.value;
      return L ? L.fileName ? L.fileName : f.value ? a("artwork.designName") : L.fileId : "";
    }), _ = K(() => {
      var he;
      const L = c.value;
      if (!L)
        return "";
      const Q = [], R = i.schema.value, oe = ((he = i.file.value) == null ? void 0 : he.fileId) === L.fileId;
      return L.pages !== void 0 && R && oe && Dp(R) && Q.push(
        L.pages === 1 ? a("artwork.pageCountOne") : a("artwork.pageCount", { count: L.pages })
      ), L.canvas && Q.push(`${L.canvas.w} × ${L.canvas.h} ${L.canvas.unit}`), Q.join(" · ");
    });
    function U(L) {
      i.setFile(Fm(L), t.field.id), L.canProceed && L.jobId ? i.select(t.field.id, L.jobId) : i.select(t.field.id, "");
    }
    function O(L) {
      s.activate(L, t.field.id), r.touch(t.field.id);
    }
    function Y() {
      i.setFile(void 0, t.field.id), i.select(t.field.id, ""), r.touch(t.field.id);
    }
    return (L, Q) => f.value ? (y(), k("div", ug, [
      M("div", dg, [
        M("span", fg, D(S.value), 1),
        _.value ? (y(), k("span", pg, D(_.value), 1)) : ce("", !0)
      ]),
      M("div", hg, [
        M("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-change",
          onClick: Q[0] || (Q[0] = (R) => O(f.value.id))
        }, D(N(a)("artwork.change")), 1),
        M("button", {
          type: "button",
          class: "artwork-action",
          part: "artwork-remove",
          onClick: Y
        }, D(N(a)("artwork.remove")), 1)
      ])
    ])) : (y(), k("div", mg, [
      m.value ? ce("", !0) : (y(!0), k(ue, { key: 0 }, De(v.value, (R, oe) => (y(), k(ue, {
        key: R.id
      }, [
        g.value && oe > 0 ? (y(), k("p", gg, [
          M("span", null, D(N(a)("artwork.or")), 1)
        ])) : ce("", !0),
        M("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (he) => O(R.id)
        }, [
          M("span", yg, D(R.label), 1),
          R.description ? (y(), k("span", bg, D(R.description), 1)) : ce("", !0)
        ], 8, vg),
        g.value ? ce("", !0) : (y(), k("p", xg, [
          M("span", null, D(N(a)("artwork.or")), 1)
        ]))
      ], 64))), 128)),
      !g.value && o.value && N(i).provider ? (y(), je(cg, {
        key: 1,
        field: e.field,
        provider: N(i).provider,
        onMetadata: U,
        onTouch: Q[1] || (Q[1] = (R) => N(r).touch(e.field.id))
      }, null, 8, ["field", "provider"])) : g.value ? ce("", !0) : (y(), je(Gm, {
        key: 2,
        field: e.field,
        files: N(i).uploads[e.field.id],
        analyzing: (N(i).uploading[e.field.id] ?? 0) > 0,
        error: e.error,
        failure: N(i).uploadErrors[e.field.id],
        onFile: Q[2] || (Q[2] = (R, oe) => N(i).handleFile(R, oe)),
        onRemove: Q[3] || (Q[3] = (R, oe) => N(i).removeUpload(R, oe)),
        onTouch: Q[4] || (Q[4] = (R) => N(r).touch(e.field.id))
      }, null, 8, ["field", "files", "analyzing", "error", "failure"])),
      m.value ? ce("", !0) : (y(!0), k(ue, { key: 3 }, De(x.value, (R) => (y(), k(ue, {
        key: R.id
      }, [
        M("p", _g, [
          M("span", null, D(N(a)("artwork.or")), 1)
        ]),
        M("button", {
          type: "button",
          class: "producer",
          part: "producer",
          onClick: (oe) => O(R.id)
        }, [
          M("span", kg, D(R.label), 1),
          R.description ? (y(), k("span", Sg, D(R.description), 1)) : ce("", !0)
        ], 8, wg)
      ], 64))), 128))
    ]));
  }
}), Ag = {
  key: 0,
  class: "recap",
  part: "summary-recap"
}, Cg = { part: "recap-label" }, $g = { part: "recap-value" }, Ig = {
  key: 1,
  class: "recap-empty"
}, Ng = /* @__PURE__ */ Oe({
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
      () => wl(t.sections, t.selections, t.file, {
        quantityLabel: n("quantity.label"),
        artworkLabel: n("artwork.label"),
        designName: n("artwork.designName"),
        uploads: t.uploads,
        records: t.records
      })
    );
    return (r, s) => i.value.length ? (y(), k("dl", Ag, [
      (y(!0), k(ue, null, De(i.value, (a) => (y(), k("div", {
        key: a.fieldId,
        class: "recap-row",
        part: "recap-row"
      }, [
        M("dt", Cg, D(a.label), 1),
        M("dd", $g, D(a.value), 1)
      ]))), 128))
    ])) : (y(), k("p", Ig, D(N(n)("recap.empty")), 1));
  }
}), Eg = {
  key: 0,
  class: "info-note",
  part: "field-help"
}, Og = /* @__PURE__ */ Oe({
  __name: "InfoBlock",
  props: {
    field: { type: null }
  },
  setup(e) {
    return (t, n) => e.field.body ? (y(), k("p", Eg, D(e.field.body), 1)) : ce("", !0);
  }
}), Al = /* @__PURE__ */ Oe({
  __name: "FieldHost",
  props: {
    field: { type: null }
  },
  setup(e) {
    const t = e, n = Gt(er);
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
        (d) => !Cp(u, i.selections, t.field.id, d.id)
      ).map((d) => d.id);
    });
    function c(u) {
      t.field.type === "select-many" ? i.toggle(t.field, u) : i.select(t.field.id, u), r.touch(t.field.id);
    }
    return (u, d) => (y(), je(Zh, {
      field: e.field,
      error: a.value
    }, {
      default: uo(() => [
        e.field.type === "select-one" || e.field.type === "select-many" ? (y(), je(Dc(N(Ma)[e.field.display] ?? N(Ma).pills), {
          key: 0,
          field: e.field,
          "selected-ids": o.value,
          "unavailable-ids": l.value,
          error: a.value,
          onPick: c
        }, null, 40, ["field", "selected-ids", "unavailable-ids", "error"])) : e.field.type === "quantity" ? (y(), je(tm, {
          key: 1,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[0] || (d[0] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[1] || (d[1] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "quantities" ? (y(), je(fm, {
          key: 2,
          field: e.field,
          value: s.value,
          "unavailable-ids": l.value,
          error: a.value,
          onSelect: d[2] || (d[2] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[3] || (d[3] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "unavailable-ids", "error"])) : e.field.type === "number" ? (y(), je(_m, {
          key: 3,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[4] || (d[4] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[5] || (d[5] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "text" ? (y(), je(Sm, {
          key: 4,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[6] || (d[6] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[7] || (d[7] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "dimensions" ? (y(), je(Rm, {
          key: 5,
          field: e.field,
          value: s.value,
          error: a.value,
          onSelect: d[8] || (d[8] = (f) => N(i).select(e.field.id, f)),
          onTouch: d[9] || (d[9] = (f) => N(r).touch(e.field.id))
        }, null, 8, ["field", "value", "error"])) : e.field.type === "file" ? (y(), je(Tg, {
          key: 6,
          field: e.field,
          error: a.value
        }, null, 8, ["field", "error"])) : e.field.type === "info" && e.field.display === "summary" ? (y(), je(Ng, {
          key: 7,
          sections: N(i).visibleSections.value,
          selections: N(i).selections,
          file: N(i).file.value,
          uploads: N(i).uploads,
          records: N(i).records
        }, null, 8, ["sections", "selections", "file", "uploads", "records"])) : e.field.type === "info" ? (y(), je(Og, {
          key: 8,
          field: e.field
        }, null, 8, ["field"])) : ce("", !0)
      ]),
      _: 1
    }, 8, ["field", "error"]));
  }
}), Pg = {
  class: "section-title",
  part: "section-title"
}, Mg = /* @__PURE__ */ Oe({
  __name: "SectionStack",
  props: {
    sections: { type: Array }
  },
  setup(e) {
    return (t, n) => (y(!0), k(ue, null, De(e.sections, (i) => (y(), k("section", {
      key: i.section.id,
      class: "section",
      part: "section"
    }, [
      M("h3", Pg, D(i.section.title), 1),
      (y(!0), k(ue, null, De(i.fields, (r) => (y(), je(Al, {
        key: r.id,
        field: r
      }, null, 8, ["field"]))), 128))
    ]))), 128));
  }
}), Rg = { class: "wizard" }, Fg = {
  class: "wizard-nav",
  part: "wizard-nav"
}, jg = ["part", "aria-current"], Lg = ["onClick"], Dg = {
  class: "wizard-step-index",
  "aria-hidden": "true"
}, zg = { class: "wizard-step-title" }, qg = {
  key: 0,
  class: "section",
  part: "section"
}, Ug = { class: "wizard-actions" }, Vg = /* @__PURE__ */ Oe({
  __name: "SectionWizard",
  props: {
    sections: { type: Array },
    issues: { type: Array }
  },
  emits: ["blocked"],
  setup(e, { expose: t, emit: n }) {
    const i = e, r = n, { t: s } = mt(), a = /* @__PURE__ */ He(0), o = /* @__PURE__ */ He(null);
    Tt(
      () => i.sections.length,
      (v) => {
        a.value > v - 1 && (a.value = Math.max(0, v - 1));
      }
    );
    const l = K(() => i.sections[a.value]), c = K(() => a.value >= i.sections.length - 1);
    function u(v) {
      const x = i.sections[v];
      if (!x)
        return [];
      const S = new Set(x.fields.map((_) => _.id));
      return i.issues.filter((_) => S.has(_.fieldId));
    }
    function d(v) {
      return v === a.value ? "active" : v < a.value && u(v).length === 0 ? "done" : "todo";
    }
    async function f(v) {
      var x;
      a.value = Math.max(0, Math.min(v, i.sections.length - 1)), await Ki(), (x = o.value) == null || x.focus();
    }
    function m() {
      const v = u(a.value);
      if (v.length > 0) {
        r("blocked", v);
        return;
      }
      f(a.value + 1);
    }
    function g() {
      f(a.value - 1);
    }
    return t({ goTo: f, current: a }), (v, x) => (y(), k("div", Rg, [
      M("ol", Fg, [
        (y(!0), k(ue, null, De(e.sections, (S, _) => (y(), k("li", {
          key: S.section.id,
          class: Xe(["wizard-step", d(_)]),
          part: `wizard-step wizard-step-${d(_)}`,
          "aria-current": _ === a.value ? "step" : void 0
        }, [
          M("button", {
            type: "button",
            class: "wizard-step-button",
            onClick: (U) => f(_)
          }, [
            M("span", Dg, D(d(_) === "done" ? "✓" : _ + 1), 1),
            M("span", zg, D(S.section.title), 1)
          ], 8, Lg)
        ], 10, jg))), 128))
      ]),
      l.value ? (y(), k("section", qg, [
        M("h3", {
          ref_key: "heading",
          ref: o,
          class: "section-title",
          part: "section-title",
          tabindex: "-1"
        }, D(l.value.section.title), 513),
        (y(!0), k(ue, null, De(l.value.fields, (S) => (y(), je(Al, {
          key: S.id,
          field: S
        }, null, 8, ["field"]))), 128))
      ])) : ce("", !0),
      M("div", Ug, [
        a.value > 0 ? (y(), k("button", {
          key: 0,
          type: "button",
          class: "wizard-back",
          part: "wizard-back",
          onClick: g
        }, D(N(s)("wizard.back")), 1)) : ce("", !0),
        c.value ? ce("", !0) : (y(), k("button", {
          key: 1,
          type: "button",
          class: "wizard-next",
          part: "wizard-next",
          onClick: m
        }, D(N(s)("wizard.continue")), 1))
      ])
    ]));
  }
}), Bg = {
  class: "summary",
  part: "summary"
}, Zg = { part: "summary-title" }, Hg = { class: "lines" }, Wg = { part: "summary-line-label" }, Kg = { part: "summary-line-value" }, Gg = {
  class: "subtotal",
  part: "summary-net"
}, Yg = { part: "summary-net-label" }, Qg = { part: "summary-net-value" }, Jg = {
  class: "tax-line",
  part: "summary-tax"
}, Xg = { part: "summary-tax-label" }, ev = { part: "summary-tax-value" }, tv = {
  class: "total",
  part: "summary-total",
  "aria-live": "polite",
  "aria-atomic": "true"
}, nv = { part: "summary-total-label" }, iv = { part: "price" }, rv = {
  key: 1,
  class: "tax-included",
  part: "summary-tax-included"
}, sv = {
  key: 2,
  class: "unit-price",
  part: "summary-unit"
}, av = {
  key: 3,
  class: "next-break",
  part: "summary-hint"
}, ov = {
  key: 4,
  class: "price-note",
  part: "summary-note"
}, lv = {
  key: 5,
  class: "unavailable",
  role: "status"
}, cv = ["disabled"], uv = {
  class: "visually-hidden",
  role: "status"
}, dv = /* @__PURE__ */ Oe({
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
      var v;
      return rh(
        g,
        ((v = n.price) == null ? void 0 : v.currency) ?? "USD",
        n.locale,
        n.priceFormat
      );
    }
    const a = K(
      () => {
        var g;
        return (((g = n.price) == null ? void 0 : g.lines) ?? []).filter(
          (v) => !(v.amount === 0 && (v.stage === "base" || v.stage === "percent" || v.stage === "multiplier"))
        );
      }
    ), o = K(() => {
      var v;
      const g = n.nextBreak;
      if (!(!g || (v = n.price) != null && v.unavailable))
        return g.percentOff !== void 0 ? r("summary.nextBreakPercent", {
          count: g.add,
          percent: Oa(g.percentOff, n.locale)
        }) : r("summary.nextBreakPrice", { count: g.add, unitPrice: s(g.unitPrice) });
    }), l = K(
      () => {
        var g, v;
        return (((g = n.price) == null ? void 0 : g.quantity) ?? 1) > 1 && !((v = n.price) != null && v.unavailable);
      }
    ), c = K(() => {
      const g = n.price;
      if (!(!n.tax || !g || g.unavailable))
        return ph(g.total, g.currency, n.tax);
    }), u = K(() => {
      var g, v;
      return {
        tax: ((g = n.tax) == null ? void 0 : g.name) ?? r("tax.name"),
        rate: Oa(((v = n.tax) == null ? void 0 : v.rate) ?? 0, n.locale)
      };
    }), d = K(() => {
      var g;
      return c.value !== void 0 && ((g = n.tax) == null ? void 0 : g.mode) === "exclusive";
    }), f = K(
      () => {
        var g, v;
        return d.value ? ((g = c.value) == null ? void 0 : g.gross) ?? 0 : ((v = n.price) == null ? void 0 : v.total) ?? 0;
      }
    ), m = K(() => {
      const g = n.price;
      return g ? d.value && g.quantity > 0 ? f.value / g.quantity : g.unitPrice : 0;
    });
    return (g, v) => {
      var x, S;
      return y(), k("aside", Bg, [
        M("h3", Zg, D(N(r)("summary.title")), 1),
        M("ul", Hg, [
          (y(!0), k(ue, null, De(a.value, (_, U) => (y(), k("li", {
            key: U,
            part: "summary-line"
          }, [
            M("span", Wg, D(N(oh)(N(r), _)), 1),
            M("span", Kg, D(s(_.amount)), 1)
          ]))), 128))
        ]),
        d.value && c.value ? (y(), k(ue, { key: 0 }, [
          M("div", Gg, [
            M("span", Yg, D(N(r)("summary.totalNet", u.value)), 1),
            M("span", Qg, D(s(c.value.net)), 1)
          ]),
          M("div", Jg, [
            M("span", Xg, D(N(r)("summary.tax", u.value)), 1),
            M("span", ev, D(s(c.value.tax)), 1)
          ])
        ], 64)) : ce("", !0),
        M("div", tv, [
          M("span", nv, D(d.value ? N(r)("summary.totalGross", u.value) : N(r)("summary.total")), 1),
          M("strong", iv, D(s(f.value)), 1)
        ]),
        c.value && !d.value ? (y(), k("p", rv, D(N(r)("summary.taxIncluded", { ...u.value, amount: s(c.value.tax) })), 1)) : ce("", !0),
        l.value ? (y(), k("p", sv, D(N(r)("summary.unitPrice", {
          quantity: ((x = e.price) == null ? void 0 : x.quantity) ?? 0,
          unitPrice: s(m.value)
        })), 1)) : ce("", !0),
        o.value ? (y(), k("p", av, D(o.value), 1)) : ce("", !0),
        e.priceNote ? (y(), k("p", ov, D(e.priceNote), 1)) : ce("", !0),
        (S = e.price) != null && S.unavailable ? (y(), k("p", lv, D(N(r)(
          e.price.unavailableReason === "formula" ? "summary.unpriceable" : "summary.unavailable"
        )), 1)) : ce("", !0),
        (y(!0), k(ue, null, De(e.holds.filter((_) => _.message), (_) => (y(), k("p", {
          key: _.key,
          class: "hold-message",
          part: "hold-message",
          role: "status"
        }, D(_.message), 1))), 128)),
        M("button", {
          type: "button",
          class: "cta",
          part: "cta",
          disabled: e.holds.length > 0,
          onClick: v[0] || (v[0] = (_) => i("submit"))
        }, D(N(r)("summary.addToCart")), 9, cv),
        M("span", uv, D(e.issueCount > 0 ? N(r)("summary.issues", { count: e.issueCount }) : ""), 1)
      ]);
    };
  }
}), fv = {
  key: 0,
  class: "state"
}, pv = {
  key: 1,
  class: "state error",
  role: "alert"
}, hv = {
  key: 2,
  class: "layout"
}, mv = { class: "main" }, gv = /* @__PURE__ */ Oe({
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
    function s(R) {
      if (R)
        try {
          const oe = typeof R == "string" ? JSON.parse(R) : R;
          return ap.parse(oe);
        } catch {
          return;
        }
    }
    const a = Yp({
      configUrl: i.configUrl,
      uploadEndpoint: i.uploadEndpoint,
      turnstileUrl: i.turnstileUrl,
      provider: s(i.provider),
      inlineConfig: i.config
    }), o = K(() => ch(i.strings)), l = Sl(() => o.value);
    wr(Tl, l);
    const c = K(() => ih(i.priceFormat)), u = K(() => fh(i.taxMode, i.taxRate, i.taxName)), d = uh(
      a.visibleFields,
      a.selections,
      a.price,
      l.t
    ), f = Qu(), m = Jp(), g = th({ host: f });
    wr(er, { cfg: a, validation: d, producers: g, locale: /* @__PURE__ */ hc(i, "locale") });
    const v = Xp({ host: f, cfg: a, validation: d, holds: m, producers: g });
    qp(a, g);
    const x = /* @__PURE__ */ He(null), S = /* @__PURE__ */ He(null);
    ss(() => {
      (i.config || i.configUrl) && a.load().then(() => {
        a.unconfigured.value ? r("unconfigured", { productId: i.productId }) : a.schema.value && v.notifyReady();
      });
    }), Tt(
      () => i.config,
      (R, oe) => {
        R && R !== oe && (d.reset(), a.reload({
          inlineConfig: R,
          provider: s(i.provider)
        }).then(() => {
          a.schema.value && v.notifyReady();
        }));
      }
    );
    const _ = K(() => {
      const R = {}, oe = a.schema.value;
      if (!oe)
        return R;
      for (const he of oe.sections)
        for (const be of he.fields)
          if (R[be.id] = be.label ?? be.id, Vt(be))
            for (const C of be.options)
              R[`${be.id}:${C.id}`] = C.label;
      return R;
    });
    function U() {
      return !a.schema.value || !a.price.value ? null : {
        productId: a.schema.value.productId,
        selections: { ...a.selections },
        quantity: a.price.value.quantity,
        file: a.file.value,
        price: a.price.value,
        sku: a.price.value.sku,
        labels: _.value,
        display: wl(
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
        ({ fields: R }) => R.flatMap(
          (oe) => (a.uploads[oe.id] ?? []).map((he) => {
            var C;
            const be = (C = he.raw) == null ? void 0 : C.downloadUrl;
            return {
              fieldId: oe.id,
              fileId: he.fileId,
              ...he.fileName ? { fileName: he.fileName } : {},
              ...typeof be == "string" && be.startsWith("https://") ? { downloadUrl: be } : {}
            };
          })
        )
      );
    }
    function Y(R) {
      var he, be;
      const oe = (he = x.value) == null ? void 0 : he.querySelector(`[data-field-id="${R}"]`);
      oe && (oe.scrollIntoView({ behavior: "smooth", block: "center" }), (be = oe.querySelector(
        "button, input, select, textarea, [tabindex]"
      )) == null || be.focus({ preventScroll: !0 }));
    }
    function L() {
      var he, be, C;
      const R = U();
      if (!R)
        return;
      if (m.held.value) {
        r("invalid", {
          productId: R.productId,
          issues: [],
          holds: m.list.value
        });
        return;
      }
      const oe = d.touchAll();
      if (oe.length > 0 || (he = a.price.value) != null && he.unavailable) {
        const P = oe[0];
        if (P) {
          const te = a.visibleSections.value.findIndex(
            (_e) => _e.fields.some((ve) => ve.id === P.fieldId)
          );
          ((be = a.schema.value) == null ? void 0 : be.layout) === "wizard" && te >= 0 && ((C = S.value) == null || C.goTo(te)), Y(P.fieldId);
        }
        r("invalid", {
          productId: R.productId,
          issues: oe
        });
        return;
      }
      r("submit", { ...R, valid: !0 });
    }
    function Q(R) {
      for (const he of R)
        d.touch(he.fieldId);
      const oe = R[0];
      oe && Y(oe.fieldId);
    }
    return t(v.exposed), (R, oe) => N(a).unconfigured.value ? ce("", !0) : (y(), k("div", {
      key: 0,
      ref_key: "root",
      ref: x,
      class: "configurator",
      part: "base"
    }, [
      N(a).loading.value ? (y(), k("p", fv, D(N(l).t("state.loading")), 1)) : N(a).error.value ? (y(), k("p", pv, D(N(a).error.value), 1)) : N(a).schema.value ? (y(), k("div", hv, [
        M("div", mv, [
          N(a).schema.value.layout === "wizard" ? (y(), je(Vg, {
            key: 0,
            ref_key: "wizard",
            ref: S,
            sections: N(a).visibleSections.value,
            issues: N(d).issues.value,
            onBlocked: Q
          }, null, 8, ["sections", "issues"])) : (y(), je(Mg, {
            key: 1,
            sections: N(a).visibleSections.value
          }, null, 8, ["sections"]))
        ]),
        ot(dv, {
          price: N(a).price.value,
          locale: i.locale,
          "price-format": c.value,
          "price-note": i.priceNote,
          tax: u.value,
          "next-break": N(a).nextBreak.value,
          holds: N(m).list.value,
          "issue-count": N(d).issues.value.length,
          onSubmit: L
        }, null, 8, ["price", "locale", "price-format", "price-note", "tax", "next-break", "holds", "issue-count"])
      ])) : ce("", !0)
    ], 512));
  }
}), vv = ":host{--pc-color-accent: #1a1a1a;--pc-color-accent-contrast: #ffffff;--pc-color-accent-soft: #f6f6f4;--pc-color-surface: #ffffff;--pc-color-surface-alt: #fafafa;--pc-color-border: #e0e0dc;--pc-color-text: #1a1a1a;--pc-color-text-muted: #6b7280;--pc-color-danger: #c0392b;--pc-color-focus: var(--pc-color-accent);--pc-font-family: inherit;--pc-font-size: 1em;--pc-label-weight: 600;--pc-radius-control: 8px;--pc-radius-card: 12px;--pc-space: 4px;--pc-shadow-card: none;--pc-cta-bg: var(--pc-color-accent);--pc-cta-color: var(--pc-color-accent-contrast);--pc-swatch-size: 44px;--pc-card-image-height: 90px;display:block;container:pc-root / inline-size;font-family:var(--pc-font-family);font-size:var(--pc-font-size);color:var(--pc-color-text)}", yv = '*{box-sizing:border-box}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.state{padding:calc(var(--pc-space) * 8);text-align:center;color:var(--pc-color-text-muted)}.state.error{color:var(--pc-color-danger)}.layout{display:grid;grid-template-columns:1fr 300px;gap:calc(var(--pc-space) * 6);align-items:start}.section{margin-bottom:calc(var(--pc-space) * 6);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);box-shadow:var(--pc-shadow-card)}.section-title{margin:0 0 calc(var(--pc-space) * 4);text-transform:uppercase;letter-spacing:.04em;font-size:.95em;color:var(--pc-color-text);outline:none}.field{margin-bottom:calc(var(--pc-space) * 5)}.field:last-child{margin-bottom:0}.field-label{display:block;font-weight:var(--pc-label-weight);margin-bottom:calc(var(--pc-space) * 2)}.req{color:var(--pc-color-danger)}.help{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.field-error{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid var(--pc-color-focus);outline-offset:2px}.grid{display:grid;gap:calc(var(--pc-space) * 3);grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.grid.cards{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.card{position:relative;display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;transition:border-color .15s ease}.card:hover{border-color:var(--pc-color-accent-soft)}.card.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.card img{max-width:100%;height:var(--pc-card-image-height);object-fit:contain}.card-label{font-size:.9em}.card-description{font-size:.8em;color:var(--pc-color-text-muted)}.check{position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);display:grid;place-items:center;font-size:.8em}.swatches{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.swatch{width:var(--pc-swatch-size);height:var(--pc-swatch-size);border-radius:50%;border:3px solid transparent;cursor:pointer;display:grid;place-items:center}.swatch.active{border-color:var(--pc-color-accent);box-shadow:0 0 0 2px var(--pc-color-surface) inset}.swatch-check{color:#fff;text-shadow:0 0 3px rgb(0 0 0 / .8);font-size:.9em}.swatch-selected-label{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.pills{display:flex;gap:calc(var(--pc-space) * 3);flex-wrap:wrap}.pill{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);cursor:pointer}.pill.active{background:var(--pc-color-accent);border-color:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.choice-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.choice-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);padding:calc(var(--pc-space) * 3);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;text-align:left;cursor:pointer}.choice-row.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.choice-indicator{flex:none;width:20px;height:20px;border:2px solid var(--pc-color-border);border-radius:50%;display:grid;place-items:center;font-size:.7em;color:var(--pc-color-accent-contrast)}.choice-indicator.multi{border-radius:4px}.choice-row.active .choice-indicator{background:var(--pc-color-accent);border-color:var(--pc-color-accent)}.choice-body{display:flex;flex-direction:column}.choice-title{font-weight:var(--pc-label-weight)}.choice-description{font-size:.85em;color:var(--pc-color-text-muted)}.card.unavailable,.pill.unavailable,.swatch.unavailable,.choice-row.unavailable{opacity:.4;cursor:not-allowed;text-decoration:line-through}.dropdown{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.quantities-grid{display:grid;gap:calc(var(--pc-space) * 2);grid-template-columns:repeat(auto-fill,minmax(118px,1fr))}.quantities-list{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.quantities-item{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 3) calc(var(--pc-space) * 2);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface)}.quantities-list .quantities-item{flex-direction:row;justify-content:space-between;padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3)}.quantities-item.active{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.quantities-item.off .quantities-label{text-decoration:line-through;color:var(--pc-color-text-muted)}.quantities-name{display:inline-flex;align-items:center;gap:calc(var(--pc-space) * 2);font-weight:var(--pc-label-weight)}.quantities-swatch{width:1.1em;height:1.1em;border-radius:50%;border:1px solid var(--pc-color-border)}.quantities-image{height:2em;width:auto;object-fit:contain}.quantities-item .stepper button{width:32px}.quantities-item .stepper-value{width:3em}.quantities-total{margin:calc(var(--pc-space) * 2) 0 0;text-align:right;font-size:.9em;color:var(--pc-color-text-muted)}.stepper{display:inline-flex;align-items:stretch;border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);overflow:hidden}.stepper button{width:40px;border:none;background:var(--pc-color-surface-alt);color:var(--pc-color-text);font-size:1.2em;cursor:pointer}.stepper button:disabled{opacity:.4;cursor:not-allowed}.stepper-value{width:4.5em;border:none;text-align:center;font:inherit;font-weight:var(--pc-label-weight);color:var(--pc-color-text);background:var(--pc-color-surface);-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}.stepper-value::-webkit-outer-spin-button,.stepper-value::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.number-input,.text-input{padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;min-width:200px}.textarea{width:100%;resize:vertical}.slider-row{display:flex;align-items:center;gap:calc(var(--pc-space) * 3)}.slider{flex:1;accent-color:var(--pc-color-accent)}.slider-value{min-width:3em;text-align:right;font-weight:var(--pc-label-weight)}.dimensions{display:flex;align-items:flex-end;gap:calc(var(--pc-space) * 2);flex-wrap:wrap}.dim-input{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1)}.dim-label{font-size:.8em;color:var(--pc-color-text-muted)}.dim-input input{width:6em;padding:calc(var(--pc-space) * 2.5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-control);font:inherit;color:var(--pc-color-text);background:var(--pc-color-surface)}.dim-times{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.dim-unit{min-width:5em}.dim-unit-static{padding-bottom:calc(var(--pc-space) * 2.5);color:var(--pc-color-text-muted)}.upload-input{position:absolute;width:1px;height:1px;opacity:0;overflow:hidden}.upload-zone{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 6);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);cursor:pointer;text-align:center}.upload.dragging .upload-zone{border-color:var(--pc-color-accent);background:var(--pc-color-accent-soft)}.upload.done .upload-zone{border-style:solid;border-color:var(--pc-color-accent)}.upload-title{font-weight:var(--pc-label-weight)}.upload-hint{font-size:.8em;color:var(--pc-color-text-muted)}.upload-wrong-type{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.upload-files{list-style:none;margin:0 0 calc(var(--pc-space) * 2);padding:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1.5)}.upload-file{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:1px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-surface)}.upload-remove{flex:none;border:none;background:none;padding:0;font:inherit;font-size:.85em;color:var(--pc-color-text-muted);text-decoration:underline;cursor:pointer}.upload-remove:hover{color:var(--pc-color-danger)}.upload-filename{font-weight:var(--pc-label-weight);color:var(--pc-color-accent);word-break:break-all}.upload-status{color:var(--pc-color-accent);font-weight:var(--pc-label-weight)}.producers{display:flex;flex-direction:column}.producer{display:flex;flex-direction:column;align-items:center;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;cursor:pointer;text-align:center;transition:border-color .15s ease}.producer:hover{border-color:var(--pc-color-accent)}.producer-label{font-weight:var(--pc-label-weight)}.producer-description{font-size:.8em;color:var(--pc-color-text-muted)}.producer-or{display:flex;align-items:center;gap:calc(var(--pc-space) * 3);margin:calc(var(--pc-space) * 3) 0;font-size:.8em;text-transform:uppercase;letter-spacing:.06em;color:var(--pc-color-text-muted)}.producer-or:before,.producer-or:after{content:"";flex:1;height:1px;background:var(--pc-color-border)}.artwork{display:flex;align-items:center;justify-content:space-between;gap:calc(var(--pc-space) * 4);flex-wrap:wrap;padding:calc(var(--pc-space) * 4) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-accent);border-radius:var(--pc-radius-card);background:var(--pc-color-accent-soft)}.artwork-body{display:flex;flex-direction:column;min-width:0}.artwork-name{font-weight:var(--pc-label-weight);word-break:break-all}.artwork-meta{font-size:.85em;color:var(--pc-color-text-muted)}.artwork-actions{display:flex;gap:calc(var(--pc-space) * 2)}.artwork-action{padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 4);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-size:.9em;cursor:pointer}.artwork-action:hover{border-color:var(--pc-color-accent)}.fc-slot{min-height:40px}.fc-loading{margin:0 0 calc(var(--pc-space) * 2);font-size:.85em;color:var(--pc-color-text-muted)}.fc-panel{display:flex;flex-direction:column;gap:calc(var(--pc-space) * 1);padding:calc(var(--pc-space) * 5);border:2px dashed var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt);text-align:center;align-items:center}.fc-panel.fc-error{border-color:var(--pc-color-danger)}.fc-panel-title{font-weight:var(--pc-label-weight)}.fc-panel-hint{font-size:.85em;color:var(--pc-color-text-muted)}.fc-retry{margin-top:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 5);border:2px solid var(--pc-color-border);border-radius:var(--pc-radius-control);background:var(--pc-color-surface);color:var(--pc-color-text);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.recap{margin:0;display:flex;flex-direction:column;gap:calc(var(--pc-space) * 2)}.recap-row{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 4);font-size:.9em}.recap-row dt{color:var(--pc-color-text-muted)}.recap-row dd{margin:0;text-align:right}.recap-empty,.info-note{margin:0;font-size:.9em;color:var(--pc-color-text-muted)}.summary{position:sticky;top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 5);border:1px solid var(--pc-color-border);border-radius:var(--pc-radius-card);background:var(--pc-color-surface-alt)}.summary h3{margin:0 0 calc(var(--pc-space) * 4)}.lines{list-style:none;margin:0 0 calc(var(--pc-space) * 4);padding:0}.lines li{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0;color:var(--pc-color-text-muted)}.total{display:flex;justify-content:space-between;padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border);font-size:1.1em}.subtotal,.tax-line{display:flex;justify-content:space-between;font-size:.9em;padding:calc(var(--pc-space) * 1) 0}.subtotal{padding-top:calc(var(--pc-space) * 3);border-top:1px solid var(--pc-color-border)}.tax-line{margin-bottom:calc(var(--pc-space) * 2);color:var(--pc-color-text-muted)}.tax-included,.unit-price{margin:calc(var(--pc-space) * 1) 0 0;text-align:right;font-size:.85em;color:var(--pc-color-text-muted)}.next-break{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;font-weight:var(--pc-label-weight);color:var(--pc-color-accent)}.price-note{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.unavailable{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-danger)}.hold-message{margin:calc(var(--pc-space) * 2) 0 0;font-size:.85em;color:var(--pc-color-text-muted)}.cta{width:100%;margin-top:calc(var(--pc-space) * 4);padding:calc(var(--pc-space) * 3.5);border:none;border-radius:var(--pc-radius-control);background:var(--pc-cta-bg);color:var(--pc-cta-color);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.cta:disabled{opacity:.5;cursor:not-allowed}.wizard-nav{list-style:none;display:flex;gap:calc(var(--pc-space) * 2);margin:0 0 calc(var(--pc-space) * 5);padding:0;flex-wrap:wrap}.wizard-step-button{display:flex;align-items:center;gap:calc(var(--pc-space) * 2);padding:calc(var(--pc-space) * 2) calc(var(--pc-space) * 3);border:none;border-radius:var(--pc-radius-control);background:transparent;font:inherit;color:var(--pc-color-text-muted);cursor:pointer}.wizard-step.active .wizard-step-button{background:var(--pc-color-accent-soft);color:var(--pc-color-text);font-weight:var(--pc-label-weight)}.wizard-step-index{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:var(--pc-color-border);color:var(--pc-color-text);font-size:.75em}.wizard-step.active .wizard-step-index,.wizard-step.done .wizard-step-index{background:var(--pc-color-accent);color:var(--pc-color-accent-contrast)}.wizard-actions{display:flex;justify-content:space-between;gap:calc(var(--pc-space) * 3)}.wizard-back,.wizard-next{padding:calc(var(--pc-space) * 2.5) calc(var(--pc-space) * 6);border-radius:var(--pc-radius-control);font:inherit;font-weight:var(--pc-label-weight);cursor:pointer}.wizard-back{border:2px solid var(--pc-color-border);background:var(--pc-color-surface);color:var(--pc-color-text)}.wizard-next{border:none;background:var(--pc-color-accent);color:var(--pc-color-accent-contrast);margin-left:auto}@container pc-root (max-width: 640px){.layout{grid-template-columns:1fr}.summary{position:static}}', bv = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, xv = /* @__PURE__ */ bv(gv, [["styles", [vv, yv]]]), _v = /* @__PURE__ */ Gu(xv);
function wv(e = "print-configurator") {
  typeof customElements < "u" && !customElements.get(e) && customElements.define(e, _v);
}
wv();
export {
  kl as DEFAULT_STRINGS,
  Hr as PAGE_API_VERSION,
  _v as PrintConfiguratorElement,
  wv as registerPrintConfigurator
};
