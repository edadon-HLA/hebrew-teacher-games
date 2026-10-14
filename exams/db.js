/* Data layer: Firebase (Google sign-in + Firestore) or a local demo store. */
window.DB = (function () {
  var cfg = window.FIREBASE_CONFIG || {};
  var demo = !cfg.apiKey;
  var api = { demo: demo, user: null, ready: null };
  var listeners = [];
  function emit() { listeners.forEach(function (f) { f(api.user); }); }
  api.onAuth = function (f) { listeners.push(f); if (api.ready) api.ready.then(function () { f(api.user); }); };

  if (demo) {
    var P = 'demo:';
    var rd = function (c) { try { return JSON.parse(localStorage.getItem(P + c) || '{}'); } catch (e) { return {}; } };
    var wr = function (c, o) { localStorage.setItem(P + c, JSON.stringify(o)); };
    try { api.user = JSON.parse(localStorage.getItem(P + 'user') || 'null'); } catch (e) {}
    api.ready = Promise.resolve();
    api.signIn = function () {
      var e = (prompt("DEMO MODE – type a teacher email (owner: " + window.OWNER_EMAIL + "):", window.OWNER_EMAIL) || '').trim().toLowerCase();
      if (!e) return Promise.resolve();
      api.user = { email: e, name: e.split('@')[0] };
      localStorage.setItem(P + 'user', JSON.stringify(api.user)); emit(); return Promise.resolve();
    };
    api.signOut = function () { api.user = null; localStorage.removeItem(P + 'user'); emit(); return Promise.resolve(); };
    api.get = function (c, id) { var v = rd(c)[id]; return Promise.resolve(v ? JSON.parse(JSON.stringify(v)) : null); };
    api.set = function (c, id, d) { var o = rd(c); o[id] = JSON.parse(JSON.stringify(d)); wr(c, o); return Promise.resolve(); };
    api.update = function (c, id, d) { var o = rd(c); o[id] = Object.assign(o[id] || {}, JSON.parse(JSON.stringify(d))); wr(c, o); return Promise.resolve(); };
    api.del = function (c, id) { var o = rd(c); delete o[id]; wr(c, o); return Promise.resolve(); };
    api.list = function (c, where) {
      var o = rd(c), out = [];
      Object.keys(o).forEach(function (k) { if (!where || o[k][where[0]] === where[1]) out.push(Object.assign({ _id: k }, o[k])); });
      return Promise.resolve(out);
    };
  } else {
    var fdb = null, fauth = null;
    var load = function (src) {
      return new Promise(function (ok, bad) { var s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = bad; document.head.appendChild(s); });
    };
    var base = 'https://www.gstatic.com/firebasejs/10.12.2/firebase-';
    api.ready = load(base + 'app-compat.js').then(function () { return load(base + 'auth-compat.js'); })
      .then(function () { return load(base + 'firestore-compat.js'); })
      .then(function () {
        firebase.initializeApp(cfg); fdb = firebase.firestore(); fauth = firebase.auth();
        return new Promise(function (ok) {
          fauth.onAuthStateChanged(function (u) {
            api.user = u && u.emailVerified ? { email: u.email.toLowerCase(), name: u.displayName || u.email } : null;
            emit(); ok();
          });
        });
      });
    api.signIn = function () { return api.ready.then(function () { return fauth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); }); };
    api.signOut = function () { return fauth.signOut(); };
    api.get = function (c, id) { return api.ready.then(function () { return fdb.collection(c).doc(id).get(); }).then(function (s) { return s.exists ? s.data() : null; }); };
    api.set = function (c, id, d) { return api.ready.then(function () { return fdb.collection(c).doc(id).set(JSON.parse(JSON.stringify(d))); }); };
    api.update = function (c, id, d) { return api.ready.then(function () { return fdb.collection(c).doc(id).set(JSON.parse(JSON.stringify(d)), { merge: true }); }); };
    api.del = function (c, id) { return api.ready.then(function () { return fdb.collection(c).doc(id).delete(); }); };
    api.list = function (c, where) {
      return api.ready.then(function () {
        var r = fdb.collection(c); if (where) r = r.where(where[0], '==', where[1]);
        return r.get();
      }).then(function (q) { return q.docs.map(function (d) { return Object.assign({ _id: d.id }, d.data()); }); });
    };
  }

  api.isOwner = function () { return !!api.user && api.user.email === window.OWNER_EMAIL.toLowerCase(); };
  api.teacherRole = function () {
    if (!api.user) return Promise.resolve(null);
    if (api.isOwner()) return Promise.resolve('owner');
    return api.get('teachers', api.user.email).then(function (t) { return t ? 'teacher' : null; }).catch(function () { return null; });
  };
  return api;
})();
