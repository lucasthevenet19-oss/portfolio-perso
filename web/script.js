/* ---------- CONFIG ---------- */

var CONFIG = {
  OPENWEATHER_API_KEY: "b6d40be140f46cfb4637d5ff5cb4deee",
  OPENWEATHER_BASE_URL: "https://api.openweathermap.org/data/2.5",
  OPENMETEO_BASE_URL: "https://api.open-meteo.com/v1",
  NOMINATIM_BASE_URL: "https://nominatim.openstreetmap.org",
  NOMINATIM_SEARCH_URL: "https://nominatim.openstreetmap.org/search"
};

/* ---------- FIREBASE CONFIG ---------- */

var FIREBASE_CONFIG = {
  apiKey: "AIzaSyB9E7Kxhr7WJWKCTw9nL_xe1zRFpBzBqEc",
  authDomain: "projet-etude-2026-256f3.firebaseapp.com",
  databaseURL: "https://projet-etude-2026-256f3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projet-etude-2026-256f3",
  storageBucket: "projet-etude-2026-256f3.firebasestorage.app",
  messagingSenderId: "733207661064",
  appId: "1:733207661064:web:d9256d9310d0b15e469fbd"
};

/* ---------- CROP_DATA ---------- */

var CROP_DATA = {
  Ble: { label:"Ble tendre", semis_debut:"10-01", semis_fin:"11-30", duree_cycle_jours:270, recolte_mois:"Juin - Juillet", besoins_eau_mm:{min:350,max:600}, irrigation_recommandee:"Faible a moderee (0 a 3 tours d'eau, 30-60 mm/tour)", besoin_azote_kg_ha:{min:150,max:250}, fractionnement_engrais:"3 apports : tallage (40 kg N), epi 1 cm (80 kg N), gonflement (60-80 kg N)", rendement_moyen_q_ha:{min:50,max:80}, sols_favorables:["Limoneux","Argilo-limoneux","Humifere"], sols_defavorables:["Sableux"], resistance_secheresse:"Faible", duree_vie_ans:1, rotation_minimum_ans:null, annee_premiere_production:null, notes_agronomiques:"Tres sensible au deficit hydrique a la levee et a la montaison. Fractionner l'azote en 3 apports obligatoires." },
  Mais: { label:"Mais", semis_debut:"04-15", semis_fin:"05-31", duree_cycle_jours:150, recolte_mois:"Septembre - Octobre", besoins_eau_mm:{min:600,max:800}, irrigation_recommandee:"Indispensable en Occitanie (6 a 10 tours d'eau)", besoin_azote_kg_ha:{min:200,max:300}, fractionnement_engrais:"2 apports : starter au semis, couverture au stade 8 feuilles", rendement_moyen_q_ha:{min:80,max:130}, sols_favorables:["Limoneux","Argilo-limoneux","Humifere"], sols_defavorables:["Sableux","Calcaire"], resistance_secheresse:"Tres faible", duree_vie_ans:1, rotation_minimum_ans:null, annee_premiere_production:null, notes_agronomiques:"Culture tres exigeante en eau. Sans irrigation, les pertes de rendement peuvent depasser 60%." },
  Tournesol: { label:"Tournesol", semis_debut:"04-01", semis_fin:"05-15", duree_cycle_jours:130, recolte_mois:"Aout - Septembre", besoins_eau_mm:{min:300,max:450}, irrigation_recommandee:"Optionnelle, bonne resistance a la secheresse", besoin_azote_kg_ha:{min:30,max:60}, fractionnement_engrais:"1 seul apport au semis ou en vegetation precoce", rendement_moyen_q_ha:{min:20,max:30}, sols_favorables:["Argileux","Limoneux","Calcaire","Mixte"], sols_defavorables:[], resistance_secheresse:"Bonne", duree_vie_ans:1, rotation_minimum_ans:4, annee_premiere_production:null, notes_agronomiques:"Culture rustique adaptee a l'Occitanie. Rotation minimum 4 ans pour eviter Sclerotinia." },
  Vigne: { label:"Vigne", semis_debut:"03-01", semis_fin:"04-30", duree_cycle_jours:210, recolte_mois:"Septembre - Octobre", besoins_eau_mm:{min:450,max:550}, irrigation_recommandee:"Moderee, contrainte hydrique controlee en maturation", besoin_azote_kg_ha:{min:30,max:60}, fractionnement_engrais:"Azote modere a la floraison. Phosphore et potassium en entretien.", rendement_moyen_q_ha:{min:40,max:80}, sols_favorables:["Calcaire","Argileux","Sableux","Mixte"], sols_defavorables:["Humifere"], resistance_secheresse:"Bonne a partir de 3 ans", duree_vie_ans:40, rotation_minimum_ans:null, annee_premiere_production:3, notes_agronomiques:"Plantation perenne sur 30 a 50 ans. Production a partir de la 3eme annee." },
  Lavande: { label:"Lavande / Lavandin", semis_debut:"03-15", semis_fin:"04-30", duree_cycle_jours:120, recolte_mois:"Juillet - Aout", besoins_eau_mm:{min:150,max:300}, irrigation_recommandee:"Non necessaire en conditions normales", besoin_azote_kg_ha:{min:20,max:50}, fractionnement_engrais:"Azote modere apres taille printaniere uniquement", rendement_moyen_q_ha:{min:15,max:180}, sols_favorables:["Calcaire","Sableux"], sols_defavorables:["Argilo-limoneux","Humifere"], resistance_secheresse:"Excellente", duree_vie_ans:10, rotation_minimum_ans:2, annee_premiere_production:2, notes_agronomiques:"Plantation perenne 10 ans. Sol calcaire et bien draine imperatif." },
  Colza: { label:"Colza", semis_debut:"08-20", semis_fin:"09-10", duree_cycle_jours:300, recolte_mois:"Juin - Juillet", besoins_eau_mm:{min:300,max:450}, irrigation_recommandee:"Faible (0 a 2 tours d'eau)", besoin_azote_kg_ha:{min:150,max:200}, fractionnement_engrais:"2 apports : sortie hiver et montaison. Sensible au soufre.", rendement_moyen_q_ha:{min:30,max:40}, sols_favorables:["Argilo-limoneux","Limoneux","Humifere"], sols_defavorables:["Sableux","Calcaire"], resistance_secheresse:"Faible a l'implantation", duree_vie_ans:1, rotation_minimum_ans:null, annee_premiere_production:null, notes_agronomiques:"Semis en periode seche d'aout-septembre : risque de mauvaise levee." },
  Sorgho: { label:"Sorgho", semis_debut:"05-01", semis_fin:"06-15", duree_cycle_jours:140, recolte_mois:"Septembre - Octobre", besoins_eau_mm:{min:250,max:400}, irrigation_recommandee:"Faible a moderee. Alternative au mais irrigue.", besoin_azote_kg_ha:{min:100,max:150}, fractionnement_engrais:"2 apports : semis et montaison", rendement_moyen_q_ha:{min:50,max:80}, sols_favorables:["Argileux","Limoneux","Calcaire","Mixte"], sols_defavorables:[], resistance_secheresse:"Tres bonne", duree_vie_ans:1, rotation_minimum_ans:null, annee_premiere_production:null, notes_agronomiques:"Excellente alternative au mais dans les zones sans irrigation." }
};

/* ---------- FALLBACKS ---------- */

var METEO_FALLBACK = {
  ville: "Paris",
  temp: 17,
  humidity: 65,
  description: "Partiellement nuageux",
  icone: "fa-cloud-sun",
  previsions: [
    { jour: "Lun", tempMax: 18, tempMin: 11, icone: "fa-sun" },
    { jour: "Mar", tempMax: 15, tempMin: 9,  icone: "fa-cloud-rain" },
    { jour: "Mer", tempMax: 20, tempMin: 12, icone: "fa-sun" },
    { jour: "Jeu", tempMax: 16, tempMin: 10, icone: "fa-cloud" },
    { jour: "Ven", tempMax: 19, tempMin: 13, icone: "fa-cloud-sun" }
  ]
};

var OPENMETEO_FALLBACK = {
  precipitations7j: [2.1, 0, 5.4, 0, 0, 1.2, 8.0],
  tempMax: [14, 16, 13, 17, 18, 15, 12],
  tempMin: [7, 8, 6, 9, 10, 7, 5]
};

/* ---------- UTILS ---------- */

function getIconeMeteo(main) {
  var map = {
    Clear: 'fa-sun', Clouds: 'fa-cloud', Rain: 'fa-cloud-rain',
    Drizzle: 'fa-cloud-drizzle', Thunderstorm: 'fa-cloud-bolt',
    Snow: 'fa-snowflake', Mist: 'fa-smog', Fog: 'fa-smog'
  };
  return map[main] || 'fa-cloud-sun';
}

function calculPrecipTotal(precipitations) {
  var total = 0;
  for (var i = 0; i < precipitations.length; i++) { total += precipitations[i]; }
  return Math.round(total * 10) / 10;
}

function calculMoyenne(tableau) {
  var somme = 0;
  for (var i = 0; i < tableau.length; i++) { somme += tableau[i]; }
  return Math.round((somme / tableau.length) * 10) / 10;
}

/* ---------- TOAST ---------- */

function showToast(message, type) {
  type = type || 'info';
  var container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = 'position:fixed;bottom:90px;right:16px;z-index:9999;display:flex;flex-direction:column;gap:8px;max-width:340px';
    document.body.appendChild(container);
  }

  var colors = { success: 'var(--success)', error: 'var(--danger)', info: '#5a8aa8', warning: 'var(--accent)' };
  var icons = { success: 'fa-circle-check', error: 'fa-circle-xmark', info: 'fa-circle-info', warning: 'fa-triangle-exclamation' };

  var toast = document.createElement('div');
  toast.style.cssText =
    'background:var(--surface);border-left:4px solid ' + (colors[type] || colors.info) + ';' +
    'border-radius:var(--radius);padding:14px 16px;box-shadow:var(--shadow-lg);' +
    'font-size:13px;color:var(--text);display:flex;align-items:flex-start;gap:10px;' +
    'animation: fade-up 0.3s var(--ease-spring);transition:opacity 0.25s,transform 0.25s;' +
    'font-family:Outfit,sans-serif;pointer-events:auto';

  toast.innerHTML = '<i class="fa-solid ' + (icons[type] || icons.info) + '" style="color:' + (colors[type] || colors.info) + ';font-size:16px;margin-top:1px;flex-shrink:0"></i>' +
    '<span style="flex:1;line-height:1.4">' + message + '</span>';

  container.appendChild(toast);

  setTimeout(function() {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    setTimeout(function() { if (toast.parentNode) toast.remove(); }, 250);
  }, 4000);
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

/* ---------- DATA PROVIDER ---------- */

var firebaseApp = null;
var firebaseDb = null;

function getFirebase() {
  if (firebaseDb) return firebaseDb;
  if (typeof firebase !== 'undefined' && firebase.apps) {
    try {
      if (!firebase.apps.length) firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
      else firebaseApp = firebase.apps[0];
      firebaseDb = firebase.database();
      return firebaseDb;
    } catch(e) { return null; }
  }
  return null;
}

function safeKey(key) { return key.replace(/[.#$\/\[\]]/g, '_'); }

async function dpLoad(key, fallback) {
  try { var local = JSON.parse(localStorage.getItem(key)); if (local) return local; } catch(e) {}
  var db = getFirebase();
  if (db) {
    try {
      var snap = await db.ref('agriaData/' + safeKey(key)).get();
      if (snap.exists()) { var parsed = snap.val(); localStorage.setItem(key, JSON.stringify(parsed)); return parsed; }
    } catch(e) {}
  }
  return fallback;
}

async function dpSave(key, value) {
  var json = JSON.stringify(value); localStorage.setItem(key, json);
  var db = getFirebase(); if (db) { var sk = safeKey(key); try { await db.ref('agriaData/' + sk).set(value); } catch(e) {} }
}

async function dpRemove(key) {
  localStorage.removeItem(key);
  var db = getFirebase(); if (db) { var sk = safeKey(key); try { await db.ref('agriaData/' + sk).remove(); } catch(e) {} }
}

async function dpLoadAll(prefix) {
  var db = getFirebase();
  if (db) {
    try {
      var snap = await db.ref('agriaData').get();
      if (snap.exists()) {
        var data = snap.val(); var results = []; var safePrefix = safeKey(prefix);
        for (var k in data) { if (k.indexOf(safePrefix) === 0 && data[k]) results.push(data[k]); }
        if (results.length > 0) return results;
      }
    } catch(e) {}
  }
  var results = [];
  for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && k.indexOf(prefix) === 0) { try { results.push(JSON.parse(localStorage.getItem(k))); } catch(e) {} } }
  return results;
}

function dpGetAllKeys(prefix) {
  var keys = [];
  for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && k.indexOf(prefix) === 0) keys.push(k); }
  return keys;
}

function getSession() { try { return JSON.parse(localStorage.getItem('agria_session')); } catch(e) { return null; } }

function getUserId() {
  var session = getSession();
  if (!session) { session = { userId: generateId(), email: localStorage.getItem('agria_user') || 'invite@agria.fr' }; localStorage.setItem('agria_session', JSON.stringify(session)); }
  return session.userId;
}

function getPrefsKey() { return 'agria_prefs_' + getUserId(); }
function getChampsKey() { return 'agria_champs_' + getUserId(); }
function getProfileKey() { return 'agria_user_profile_' + getUserId(); }
function getNotificationsKey() { return 'agria_notifications_' + getUserId(); }

function formatNotificationDate(ts) {
  var d = new Date(ts || Date.now());
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) + ' ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

async function loadNotifications() { return await dpLoad(getNotificationsKey(), []); }
async function saveNotifications(notifs) { await dpSave(getNotificationsKey(), notifs); }

async function addNotification(title, text, meta) {
  var notifs = await loadNotifications();
  var now = Date.now();
  var item = { id: generateId(), title: title, text: text, meta: meta || {}, read: false, createdAt: now, date: formatNotificationDate(now) };
  notifs.unshift(item);
  if (notifs.length > 30) notifs = notifs.slice(0, 30);
  await saveNotifications(notifs);
  return item;
}

async function markNotificationRead(id) {
  var notifs = await loadNotifications();
  var updated = notifs.map(function(n) { return n.id === id ? Object.assign({}, n, { read: true }) : n; });
  await saveNotifications(updated);
  return updated;
}

async function markAllNotificationsRead() {
  var notifs = await loadNotifications();
  var updated = notifs.map(function(n) { return Object.assign({}, n, { read: true }); });
  await saveNotifications(updated);
  return updated;
}

function getUnreadNotificationCount(notifs) {
  var count = 0;
  for (var i = 0; i < notifs.length; i++) if (!notifs[i].read) count++;
  return count;
}

function updateNotificationBadge() {
  var badge = document.getElementById('notifBadge');
  if (!badge) return;
  loadNotifications().then(function(notifs) {
    var count = getUnreadNotificationCount(notifs);
    if (count > 0) { badge.textContent = count > 99 ? '99+' : String(count); badge.classList.remove('d-none'); }
    else { badge.classList.add('d-none'); }
  });
}

/* ---------- EFFECTS ---------- */

function initScrollReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  var elements = document.querySelectorAll('.reveal');
  for (var i = 0; i < elements.length; i++) { observer.observe(elements[i]); }
  var cards = document.querySelectorAll('.card');
  for (var j = 0; j < cards.length; j++) { if (!cards[j].classList.contains('reveal')) { cards[j].classList.add('reveal'); observer.observe(cards[j]); } }
}

function typewriterEffect(element, text, speed, callback) {
  var i = 0; element.textContent = '';
  function type() { if (i < text.length) { element.textContent += text.charAt(i); i++; setTimeout(type, speed); } else { if (callback) callback(); } }
  type();
}

function scrambleEffect(element, finalText, duration, callback) {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  var steps = 12; var interval = duration / steps; var step = 0;
  function scramble() {
    var scrambled = '';
    for (var i = 0; i < finalText.length; i++) {
      if (finalText[i] === ' ') { scrambled += ' '; }
      else if (i < Math.floor((step / steps) * finalText.length)) { scrambled += finalText[i]; }
      else { scrambled += chars[Math.floor(Math.random() * chars.length)]; }
    }
    element.textContent = scrambled; step++;
    if (step <= steps) { setTimeout(scramble, interval); } else { element.textContent = finalText; if (callback) callback(); }
  }
  scramble();
}

function transitionPage(url) {
  document.documentElement.style.transition = 'filter 0.15s ease, opacity 0.15s ease';
  document.documentElement.style.filter = 'blur(3px)';
  document.documentElement.style.opacity = '0.6';
  setTimeout(function() { window.location.href = url; }, 150);
}

/* ---------- HEADER SCROLL ---------- */

function initHeaderScroll() {
  var header = document.getElementById('pageHeader');
  if (!header) return;
  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() { header.classList.toggle('scrolled', window.scrollY > 10); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
}

/* ---------- AUTH ---------- */

function initLogin() {
  var form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value.trim();
    if (!email) return;
    var userId = generateId();
    localStorage.setItem('agria_session', JSON.stringify({ userId: userId, email: email }));
    localStorage.setItem('agria_user', email);
    transitionPage('dashboard.html');
  });

  var btnRegister = document.getElementById('btnRegister');
  if (btnRegister) {
    btnRegister.addEventListener('click', function() {
      var email = document.getElementById('email').value.trim();
      if (!email) { showToast('Veuillez saisir une adresse email.', 'error'); return; }
      var userId = generateId();
      localStorage.setItem('agria_session', JSON.stringify({ userId: userId, email: email }));
      localStorage.setItem('agria_user', email);
      transitionPage('dashboard.html');
    });
  }

  var btnDev = document.getElementById('btnDevBypass');
  if (btnDev) {
    btnDev.addEventListener('click', function() {
      var userId = generateId();
      localStorage.setItem('agria_session', JSON.stringify({ userId: userId, email: 'dev@agria.fr' }));
      localStorage.setItem('agria_user', 'dev@agria.fr');
      transitionPage('dashboard.html');
    });
  }
}

function logout() {
  localStorage.removeItem('agria_session');
  localStorage.removeItem('agria_user');
  localStorage.removeItem('agria_ville');
  transitionPage('login.html');
}

/* ---------- METEO ---------- */

function getDefaultVille() { return localStorage.getItem('agria_ville') || 'Paris'; }
function setDefaultVille(ville) { localStorage.setItem('agria_ville', ville); }

function convertirIconeOpenWeather(iconCode) {
  var map = { '01d':'fa-sun','01n':'fa-moon','02d':'fa-cloud-sun','02n':'fa-cloud-moon','03d':'fa-cloud','03n':'fa-cloud','04d':'fa-cloud','04n':'fa-cloud','09d':'fa-cloud-drizzle','09n':'fa-cloud-drizzle','10d':'fa-cloud-rain','10n':'fa-cloud-rain','11d':'fa-cloud-bolt','11n':'fa-cloud-bolt','13d':'fa-snowflake','13n':'fa-snowflake','50d':'fa-smog','50n':'fa-smog' };
  return map[iconCode] || 'fa-cloud-sun';
}

function joursFrancais() { return ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']; }

/* City search */

var citySearchTimer = null;
var cityDropdownEl = null;

function initCitySearch(inputEl, onSelect) {
  if (!inputEl) return;
  inputEl.addEventListener('input', function() { var q = inputEl.value.trim(); if (q.length < 2) { hideCityDropdown(); return; } clearTimeout(citySearchTimer); citySearchTimer = setTimeout(function() { fetchCitySuggestions(q); }, 350); });
  inputEl.addEventListener('focus', function() { if (inputEl.value.trim().length >= 2) fetchCitySuggestions(inputEl.value.trim()); });
  inputEl.addEventListener('blur', function() { setTimeout(function() { hideCityDropdown(); }, 200); });
  inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); var q = inputEl.value.trim(); if (q) { hideCityDropdown(); var clean = q.replace(/\s+/g,' ').trim(); clean = clean.replace(/\b\w/g,function(c){return c.toUpperCase()}); clean = clean.replace(/\s-\s?/g,'-'); clean = clean.replace(/(\w)-(\w)/g,function(m,a,b){return a+'-'+b.toUpperCase()}); if (onSelect) onSelect(clean); } }
  });
  window._cityOnSelect = onSelect;
}

function fetchCitySuggestions(query) {
  fetch(CONFIG.NOMINATIM_SEARCH_URL + '?q=' + encodeURIComponent(query) + ',France&format=json&limit=5', { headers: { 'User-Agent': 'Agria/2.0' } })
    .then(function(r) { return r.json(); }).then(function(data) { if (!Array.isArray(data) || data.length === 0) { hideCityDropdown(); return; } showCityDropdown(data); }).catch(function() { hideCityDropdown(); });
}

function showCityDropdown(results) {
  hideCityDropdown();
  var input = document.getElementById('meteoVilleInput'); if (!input) return;
  var inputRect = input.getBoundingClientRect();
  cityDropdownEl = document.createElement('div');
  cityDropdownEl.style.cssText = 'position:fixed;left:' + inputRect.left + 'px;top:' + (inputRect.bottom + 4) + 'px;width:' + inputRect.width + 'px;background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-lg);z-index:999;max-height:220px;overflow-y:auto';
  document.body.appendChild(cityDropdownEl);
  for (var i = 0; i < results.length; i++) {
    var item = document.createElement('div');
    var displayName = results[i].display_name.split(',')[0];
    item.style.cssText = 'padding:12px 14px;cursor:pointer;font-size:14px;color:var(--text);border-bottom:1px solid var(--border);transition:background 0.12s';
    item.textContent = displayName;
    (function(idx, el) {
      el.addEventListener('mousedown', function(e) { e.preventDefault(); input.value = results[idx].display_name.split(',')[0]; hideCityDropdown(); if (window._cityOnSelect) window._cityOnSelect(input.value); });
      el.addEventListener('mouseenter', function() { el.style.background = 'rgba(232,184,75,0.06)'; });
      el.addEventListener('mouseleave', function() { el.style.background = ''; });
    })(i, item);
    cityDropdownEl.appendChild(item);
  }
  function reposition() { hideCityDropdown(); }
  window.addEventListener('scroll', reposition, { once: true });
  window.addEventListener('resize', reposition, { once: true });
}

function hideCityDropdown() { if (cityDropdownEl) { cityDropdownEl.remove(); cityDropdownEl = null; } }

/* Fetch weather */

async function fetchMeteoActuelle(ville) {
  try {
    var url = CONFIG.OPENWEATHER_BASE_URL + '/weather?q=' + encodeURIComponent(ville) + '&appid=' + CONFIG.OPENWEATHER_API_KEY + '&units=metric&lang=fr';
    var reponse = await fetch(url); if (!reponse.ok) throw new Error('API erreur');
    var data = await reponse.json();
    return { ville: data.name, temp: Math.round(data.main.temp), humidity: data.main.humidity, description: data.weather[0].description, icone: convertirIconeOpenWeather(data.weather[0].icon), main: data.weather[0].main };
  } catch (err) { console.warn('Fallback meteo'); return METEO_FALLBACK; }
}

async function fetchPrevisions(ville) {
  try {
    var url = CONFIG.OPENWEATHER_BASE_URL + '/forecast?q=' + encodeURIComponent(ville) + '&appid=' + CONFIG.OPENWEATHER_API_KEY + '&units=metric&lang=fr';
    var reponse = await fetch(url); if (!reponse.ok) throw new Error('API erreur');
    var data = await reponse.json(); var jours = joursFrancais(); var jourMap = {};
    for (var i = 0; i < data.list.length; i++) {
      var item = data.list[i]; var d = new Date(item.dt_txt);
      var key = d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);
      if (!jourMap[key]) { jourMap[key] = { jour: jours[d.getDay()], tempMax: item.main.temp_max, tempMin: item.main.temp_min, icone: item.weather[0].icon, count: 1 }; }
      else { if (item.main.temp_max > jourMap[key].tempMax) jourMap[key].tempMax = item.main.temp_max; if (item.main.temp_min < jourMap[key].tempMin) jourMap[key].tempMin = item.main.temp_min; jourMap[key].count++; if (jourMap[key].count === 4) jourMap[key].icone = item.weather[0].icon; }
    }
    var result = []; var todayKey = new Date().getFullYear()+'-'+('0'+(new Date().getMonth()+1)).slice(-2)+'-'+('0'+new Date().getDate()).slice(-2);
    for (var k in jourMap) { if (k !== todayKey) result.push({ jour: jourMap[k].jour, tempMax: Math.round(jourMap[k].tempMax), tempMin: Math.round(jourMap[k].tempMin), icone: convertirIconeOpenWeather(jourMap[k].icone) }); }
    return result.slice(0, 7);
  } catch (err) { console.warn('Fallback previsions'); return METEO_FALLBACK.previsions; }
}

function renderMeteo(data) {
  var elVille = document.getElementById('meteoVille'); var elIcone = document.getElementById('meteoIcone');
  var elTemp = document.getElementById('meteoTemp'); var elDesc = document.getElementById('meteoDesc'); var elHumidite = document.getElementById('meteoHumidite');
  if (elVille) elVille.textContent = data.ville;
  if (elIcone) { elIcone.className = 'fa-solid ' + data.icone + ' meteo-icone updated'; setTimeout(function() { elIcone.classList.remove('updated'); }, 500); }
  if (elTemp) elTemp.innerHTML = data.temp + '<small>&deg;C</small>';
  if (elDesc) elDesc.textContent = data.description;
  if (elHumidite) elHumidite.textContent = data.humidity + '%';
}

function renderPrevisions(previsions) {
  var container = document.getElementById('previsionsContainer'); if (!container) return;
  container.innerHTML = '';
  for (var i = 0; i < previsions.length; i++) {
    var p = previsions[i];
    var card = document.createElement('div');
    card.className = 'card forecast-card reveal';
    card.style.animationDelay = (i * 0.08) + 's';
    card.innerHTML = '<span class="forecast-day">' + p.jour + '</span><div class="forecast-icon-wrap"><i class="fa-solid ' + p.icone + ' forecast-icon"></i></div><div class="forecast-temps"><span class="forecast-high">' + p.tempMax + '<small>&deg;</small></span><span class="forecast-low">' + p.tempMin + '<small>&deg;</small></span></div>';
    container.appendChild(card);
    setTimeout(function(c) { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; }, i * 80, card);
  }
}

function showWeatherSkeleton() {
  var existing = document.getElementById('weatherSkeleton'); if (existing) return;
  var card = document.querySelector('.meteo-card'); if (!card) return;
  var skel = document.createElement('div');
  skel.id = 'weatherSkeleton';
  skel.style.cssText = 'position:absolute;inset:0;z-index:5;background:var(--surface);border-radius:inherit;padding:24px;display:flex;flex-direction:column;gap:12px';
  skel.innerHTML = '<div class="skeleton skeleton-text" style="width:35%"></div><div class="skeleton skeleton-temp" style="margin-top:4px"></div><div class="skeleton skeleton-text-sm" style="margin-top:4px"></div><div class="skeleton skeleton-text" style="width:65%;margin-top:12px"></div>';
  card.style.position = card.style.position || 'relative'; card.appendChild(skel);
}

function hideWeatherSkeleton() {
  var skel = document.getElementById('weatherSkeleton');
  if (skel) { skel.style.opacity = '0'; skel.style.transition = 'opacity 0.2s ease'; setTimeout(function() { if (skel.parentNode) skel.remove(); }, 200); }
}

async function chargerMeteo(ville) {
  showWeatherSkeleton(); var meteo = await fetchMeteoActuelle(ville); hideWeatherSkeleton(); renderMeteo(meteo);
  var previsions = await fetchPrevisions(ville); renderPrevisions(previsions);
}

/* ---------- COORDINATES ---------- */

async function fetchCoordonnees(ville) {
  try {
    var url = CONFIG.NOMINATIM_BASE_URL + '/search?q=' + encodeURIComponent(ville) + ',France&format=json&limit=1';
    var reponse = await fetch(url, { headers: { 'User-Agent': 'Agria/2.0' } });
    if (!reponse.ok) throw new Error('API erreur');
    var data = await reponse.json(); if (data.length === 0) throw new Error('Ville introuvable');
    return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
  } catch (err) { return { lat: 48.8566, lon: 2.3522 }; }
}

/* ---------- CHAMPS ---------- */

async function loadChamps() { return await dpLoad(getChampsKey(), []); }
async function saveChamps(champs) { await dpSave(getChampsKey(), champs); }

async function addChamp(champ) {
  champ.id = champ.id || generateId(); var key = getChampsKey(); var champs = [];
  try { champs = JSON.parse(localStorage.getItem(key)) || []; } catch(e) {}
  champs.push(champ); localStorage.setItem(key, JSON.stringify(champs));
  try { await dpSave(key, champs); } catch(e) {}
  return champ;
}

async function updateChamp(id, data) {
  var key = getChampsKey(); var champs = [];
  try { champs = JSON.parse(localStorage.getItem(key)) || []; } catch(e) {}
  for (var i = 0; i < champs.length; i++) { if (champs[i].id === id) { champs[i] = data; break; } }
  localStorage.setItem(key, JSON.stringify(champs)); try { await dpSave(key, champs); } catch(e) {}
}

async function deleteChamp(id) {
  var key = getChampsKey(); var champs = [];
  try { champs = JSON.parse(localStorage.getItem(key)) || []; } catch(e) {}
  champs = champs.filter(function(c) { return c.id !== id; });
  localStorage.setItem(key, JSON.stringify(champs)); try { await dpSave(key, champs); } catch(e) {}
  return champs;
}

/* ---------- PREDICTIONS ---------- */

function generatePredictions(field) {
  var crop = CROP_DATA[field.culture]; if (!crop) return { error: 'Culture inconnue' };
  var area = parseFloat(field.surface) || 1;
  var sowingDate = field.dateSemis ? new Date(field.dateSemis + 'T00:00:00') : null;

  var soilScore, soilText;
  if (crop.sols_favorables.indexOf(field.typeSol) !== -1) { soilScore = 5; soilText = 'Sol tres favorable pour cette culture.'; }
  else if (crop.sols_defavorables.indexOf(field.typeSol) !== -1) { soilScore = 1; soilText = 'Sol defavorable. Rendements reduits attendus.'; }
  else { soilScore = 3; soilText = 'Sol acceptable. Conditions neutres.'; }

  var waterNeedM3 = Math.round(((crop.besoins_eau_mm.min + crop.besoins_eau_mm.max) / 2) * 10 * area);
  var irrigationAlert = false; var irrigationMsg = '';
  if ((!field.irrigation || field.irrigation === 'Aucun') && (crop.resistance_secheresse === 'Faible' || crop.resistance_secheresse === 'Tres faible')) {
    irrigationAlert = true; irrigationMsg = '[Exemple] Attention : cette culture necessite une irrigation en Occitanie. Sans apport d\'eau, les pertes de rendement peuvent etre importantes.';
  }

  var azoteTotal = Math.round(((crop.besoin_azote_kg_ha.min + crop.besoin_azote_kg_ha.max) / 2) * area);
  var coutEngrais = Math.round(azoteTotal * 1.20);

  var rendMin = Math.round((crop.rendement_moyen_q_ha.min / 10) * area * 10) / 10;
  var rendMax = Math.round((crop.rendement_moyen_q_ha.max / 10) * area * 10) / 10;
  var uniteRend = (field.culture === 'Lavande') ? 'kg d\'huile essentielle' : (field.culture === 'Vigne' ? 'hl' : 'tonnes');

  var recolteEstimee = '';
  if (sowingDate && crop.duree_cycle_jours) {
    var recolte = new Date(sowingDate); recolte.setDate(recolte.getDate() + crop.duree_cycle_jours);
    recolteEstimee = ('0'+recolte.getDate()).slice(-2)+'/'+('0'+(recolte.getMonth()+1)).slice(-2)+'/'+recolte.getFullYear();
  } else { recolteEstimee = crop.recolte_mois || 'Non calcule'; }

  var globalRecommandation;
  if (soilScore >= 4 && !irrigationAlert) globalRecommandation = 'Conditions favorables pour cette culture sur ce champ.';
  else if (soilScore >= 3 && !irrigationAlert) globalRecommandation = 'Conditions acceptables. Surveiller l\'irrigation et la fertilisation.';
  else if (soilScore >= 2) globalRecommandation = 'Conditions defavorables. Rendements potentiellement reduits.';
  else globalRecommandation = 'Culture fortement deconseillee sur ce sol.';

  return { date_recolte_estimee: recolteEstimee, score_sol: { score: soilScore, texte: soilText }, besoins_eau_total_m3: waterNeedM3, alerte_irrigation: { active: irrigationAlert, message: irrigationMsg }, fertilisation: { azote_total_kg: azoteTotal, fractionnement: crop.fractionnement_engrais, cout_estime_euros: coutEngrais }, rendement_estime: { min: rendMin, max: rendMax, unite: uniteRend }, recommandation_globale: globalRecommandation, notes: crop.notes_agronomiques, resistance_secheresse: crop.resistance_secheresse, duree_vie_ans: crop.duree_vie_ans };
}

/* ---------- DIAGNOSTIC ---------- */

async function fetchOpenMeteo(lat, lon) {
  try {
    var url = CONFIG.OPENMETEO_BASE_URL + '/forecast?latitude=' + lat + '&longitude=' + lon + '&daily=precipitation_sum,temperature_2m_max,temperature_2m_min&timezone=Europe/Paris&past_days=7&forecast_days=1';
    var reponse = await fetch(url); if (!reponse.ok) throw new Error('API erreur');
    var data = await reponse.json();
    return { precipitations7j: data.daily.precipitation_sum.slice(0, 7), tempMax: data.daily.temperature_2m_max.slice(0, 7), tempMin: data.daily.temperature_2m_min.slice(0, 7) };
  } catch (err) { return OPENMETEO_FALLBACK; }
}

function genererDiagnostic(culture, symptomes, meteoData) {
  var baseDiagnostics = {
    ble: [{ nom:'Septoriose', gravite:'warning', symptomes:['taches','jaunissement'] },{ nom:'Rouille jaune', gravite:'danger', symptomes:['jaunissement','taches'] },{ nom:'Fusariose', gravite:'danger', symptomes:['fletrissement','pourriture'] }],
    mais: [{ nom:'Pyrale du mais', gravite:'warning', symptomes:['insectes','fletrissement'] },{ nom:'Charbon du mais', gravite:'danger', symptomes:['taches','pourriture'] },{ nom:'Helminthosporiose', gravite:'warning', symptomes:['taches','jaunissement'] }],
    tournesol: [{ nom:'Mildiou', gravite:'danger', symptomes:['jaunissement','fletrissement','croissance'] },{ nom:'Sclerotinia', gravite:'danger', symptomes:['fletrissement','pourriture'] },{ nom:'Phomopsis', gravite:'warning', symptomes:['taches','jaunissement'] }],
    colza: [{ nom:'Sclerotinia', gravite:'danger', symptomes:['fletrissement','pourriture'] },{ nom:'Phoma', gravite:'warning', symptomes:['taches','jaunissement'] },{ nom:'Altises', gravite:'info', symptomes:['insectes','croissance'] }],
    vigne: [{ nom:'Mildiou', gravite:'danger', symptomes:['taches','jaunissement','fletrissement'] },{ nom:'Oidium', gravite:'warning', symptomes:['taches','fletrissement'] },{ nom:'Botrytis', gravite:'danger', symptomes:['pourriture','taches'] }]
  };
  var diagnostics = baseDiagnostics[culture] || baseDiagnostics.ble;
  var meilleurScore = 0, meilleurDiag = diagnostics[0];
  for (var i = 0; i < diagnostics.length; i++) { var score = 0; for (var j = 0; j < symptomes.length; j++) { if (diagnostics[i].symptomes.indexOf(symptomes[j]) !== -1) score++; } if (score > meilleurScore) { meilleurScore = score; meilleurDiag = diagnostics[i]; } }
  var gravite = symptomes.length >= 4 ? 'danger' : meilleurDiag.gravite;
  var explications = {
    'Septoriose': 'Maladie fongique frequente du ble. Taches brunes sur les feuilles, peut reduire le rendement de 20 a 40%.',
    'Rouille jaune': 'Champignon formant des pustules jaune-orange en stries. Se propage rapidement par temps frais et humide.',
    'Fusariose': 'Maladie grave affectant les epis et les tiges.',
    'Pyrale du mais': 'Insecte ravageur dont les larves creusent des galeries dans les tiges et les epis.',
    'Charbon du mais': 'Provoque des tumeurs sur les epis et les tiges.',
    'Helminthosporiose': 'Lesions necrotiques sur les feuilles de mais.',
    'Mildiou': 'Champignon parasite provoquant des taches jaunes et un feutrage blanc sous les feuilles.',
    'Sclerotinia': 'Deperissement des tiges et des capitules.',
    'Phomopsis': 'Lesions brunes sur les tiges.',
    'Altises': 'Petits coleopteres qui perforent les feuilles.',
    'Oidium': 'Feutrage blanc poudreux sur les feuilles et les grappes.',
    'Botrytis': 'Pourriture grise affectant les grappes de raisin.'
  };
  return { nom: meilleurDiag.nom, gravite: gravite, explication: explications[meilleurDiag.nom] || 'Diagnostic etabli a partir des symptomes observes.', meteo: meteoData, recommandations: genererRecommandations(meilleurDiag.nom) };
}

function genererRecommandations(maladie) {
  var recos = {
    'Septoriose': ['Appliquer un fongicide a base de triazole au stade 2-3 noeuds.','Pratiquer la rotation des cultures.','Surveiller la meteo : intervenir avant une periode humide.'],
    'Rouille jaune': ['Utiliser des varietes resistantes.','Appliquer un fongicide des l\'apparition des premieres pustules.','Eviter les semis trop denses.'],
    'Fusariose': ['Appliquer un fongicide specifique a la floraison.','Detruire les residus de recolte infectes.','Respecter une rotation d\'au moins 2 ans sans cereales.'],
    'Pyrale du mais': ['Utiliser un insecticide biologique (Bacillus thuringiensis).','Broyer et enfouir les cannes apres recolte.','Installer des trichogrammes.'],
    'Charbon du mais': ['Retirer et detruire les parties infectees.','Eviter les blessures mecaniques.','Pratiquer une rotation longue (3-4 ans).'],
    'Helminthosporiose': ['Appliquer un traitement fongicide preventif.','Choisir des hybrides tolerants.','Assurer une fertilisation equilibree.'],
    'Mildiou': ['Appliquer un fongicide cuprique preventif.','Assurer un bon drainage.','Supprimer les feuilles atteintes.'],
    'Sclerotinia': ['Appliquer un fongicide a la floraison.','Eviter l\'irrigation excessive.','Labour profond pour enfouir les sclerotes.'],
    'Phomopsis': ['Appliquer un fongicide automne/printemps.','Utiliser des semences certifiees.','Rotation d\'au moins 3 ans.'],
    'Altises': ['Semis precoce pour eviter le pic d\'infestation.','Insecticide en cas d\'attaque severe.','Favoriser les auxiliaires naturels.'],
    'Oidium': ['Fongicide a base de soufre.','Effeuillage pour aerer les grappes.','Surveiller les premiers symptomes.'],
    'Botrytis': ['Bonne aeration du feuillage par la taille.','Fongicide anti-botrytis a la nouaison.','Limiter la fertilisation azotee.']
  };
  return recos[maladie] || ['Consulter un technicien agricole.','Mettre en place une surveillance renforcee.','Prevoir un traitement adapte.'];
}

function formatCultureLabel(culture) {
  var map = { ble: 'Blé', mais: 'Maïs', tournesol: 'Tournesol', colza: 'Colza', vigne: 'Vigne' };
  return map[culture] || culture || 'Culture';
}

function buildDiagnosticTitle(culture, nom) {
  var prefixes = ['Analyse', 'Diagnostic', 'Rapport', 'Observation'];
  var prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  return prefix + ' ' + formatCultureLabel(culture) + ' - ' + nom;
}

function formatDateTime(ts) {
  var d = new Date(ts || Date.now());
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) + ' ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

/* ---------- DIAG HISTORY ---------- */

function getDiagKey() { return 'agria_diagnostics_' + getUserId(); }
async function loadDiagnostics() { return await dpLoad(getDiagKey(), []); }
async function saveDiagnostics(diags) { await dpSave(getDiagKey(), diags); }

async function addDiagnostic(diagData) {
  var diags = await loadDiagnostics(); diags.unshift(diagData); if (diags.length > 20) diags = diags.slice(0, 20); await saveDiagnostics(diags);
}

function renderDiagnosticHistory() {
  var container = document.getElementById('diagHistoryList'); if (!container) return;
  loadDiagnostics().then(function(diags) {
    container.innerHTML = '';
    if (diags.length === 0) { container.innerHTML = '<p class="diag-history-empty">Aucun diagnostic enregistre.</p>'; return; }
    for (var i = 0; i < diags.length; i++) {
      var d = diags[i];
      var badgeClass = d.gravite === 'danger' ? 'badge-danger' : d.gravite === 'warning' ? 'badge-warning' : 'badge-info';
      var item = document.createElement('div'); item.className = 'card diag-history-item reveal';
      item.innerHTML = '<div class="diag-history-header"><span class="badge ' + badgeClass + '">' + (d.titre || d.nom) + '</span><span class="diag-history-date">' + (d.createdAt ? formatDateTime(d.createdAt) : (d.date || '')) + '</span></div><div class="diag-history-meta">' + (d.culture || '?') + ' - ' + (d.ville || '?') + ' - ' + (d.symptomes ? d.symptomes.length + ' symptomes' : '') + '</div>';
      (function(diag) { item.addEventListener('click', function() { showDiagDetail(diag); }); })(d);
      container.appendChild(item);
    }
    var reveals = container.querySelectorAll('.reveal'); for (var r = 0; r < reveals.length; r++) reveals[r].classList.add('visible');
  });
}

function showDiagDetail(diag) {
  var html = '<h2 class="sheet-title">' + (diag.titre || diag.nom) + '</h2>' +
    '<div class="form-group"><span class="badge ' + (diag.gravite==='danger'?'badge-danger':diag.gravite==='warning'?'badge-warning':'badge-info') + '">' + (diag.gravite==='danger'?'Urgent':diag.gravite==='warning'?'Attention':'Info') + '</span></div>' +
    '<div class="form-group"><label class="form-label">Culture</label><p style="font-size:14px;color:var(--text)">' + (diag.culture||'?') + '</p></div>' +
    '<div class="form-group"><label class="form-label">Ville</label><p style="font-size:14px;color:var(--text)">' + (diag.ville||'?') + '</p></div>' +
    '<div class="form-group"><label class="form-label">Date</label><p style="font-size:14px;color:var(--text)">' + (diag.createdAt ? formatDateTime(diag.createdAt) : (diag.date||'?')) + '</p></div>' +
    '<div class="form-group"><label class="form-label">Symptomes</label><p style="font-size:14px;color:var(--text)">' + (diag.symptomes?diag.symptomes.join(', '):'?') + '</p></div>' +
    '<div class="form-group"><label class="form-label">Explication</label><p style="font-size:13px;color:var(--text-secondary);line-height:1.6">' + (diag.explication||'?') + '</p></div>' +
    '<div class="form-group"><label class="form-label">Recommandations</label><ul class="diag-reco-list">';
  if (diag.recommandations) { for (var i = 0; i < diag.recommandations.length; i++) html += '<li><i class="fa-solid fa-circle-check"></i>' + diag.recommandations[i] + '</li>'; }
  html += '</ul></div><button type="button" class="btn btn-secondary" onclick="closeSheet()">Fermer</button>';
  openSheet(html);
}

function renderResultat(diagnostic) {
  var badge = document.getElementById('diagBadge');
  if (badge) { var bc, bt; if (diagnostic.gravite==='danger'){bc='badge-danger';bt='Urgent';} else if(diagnostic.gravite==='warning'){bc='badge-warning';bt='Attention';} else{bc='badge-info';bt='Information';} badge.className='badge '+bc; badge.textContent=bt; }
  var titre = document.getElementById('diagTitre'); if (titre) scrambleEffect(titre, buildDiagnosticTitle(window.currentDiagnostic ? window.currentDiagnostic.culture : '', diagnostic.nom), 800);
  var explication = document.getElementById('diagExplication'); if (explication) typewriterEffect(explication, diagnostic.explication, 25);
  var meteoGrid = document.getElementById('diagMeteoGrid');
  if (meteoGrid) meteoGrid.innerHTML = '<div class="diag-meteo-item">Precip. 7 jours<strong>' + calculPrecipTotal(diagnostic.meteo.precipitations7j) + ' mm</strong></div><div class="diag-meteo-item">T max moy.<strong>' + calculMoyenne(diagnostic.meteo.tempMax) + ' C</strong></div><div class="diag-meteo-item">T min moy.<strong>' + calculMoyenne(diagnostic.meteo.tempMin) + ' C</strong></div>';
  var recos = document.getElementById('diagRecommandations'); if (recos) { recos.innerHTML = ''; for (var i = 0; i < diagnostic.recommandations.length; i++) { var li = document.createElement('li'); li.innerHTML = '<i class="fa-solid fa-circle-check"></i>' + diagnostic.recommandations[i]; recos.appendChild(li); } }
}

function renderWebNotificationDetail(notif) {
  var container = document.getElementById('notifDetailCard');
  if (!container) return;
  var title = notif ? (notif.title || 'Notification') : 'Notification';
  var text = notif ? (notif.text || '') : '';
  var date = notif ? (notif.date || formatNotificationDate(notif.createdAt)) : '';
  container.style.display = 'block';
  container.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:10px"><div><div class="badge badge-info" style="margin-bottom:8px">Rapport reçu</div><h2 class="section-title" style="margin-bottom:6px">' + title + '</h2><div class="diag-history-date">' + date + '</div></div><button type="button" class="btn btn-secondary" style="width:auto;min-height:40px;padding:0 14px" id="closeNotifDetailBtn">Fermer</button></div><div class="card" style="background:var(--bg);box-shadow:none"><p style="white-space:pre-wrap;color:var(--text-secondary);line-height:1.7;font-size:14px">' + text + '</p></div>';
  var closeBtn = document.getElementById('closeNotifDetailBtn');
  if (closeBtn) closeBtn.addEventListener('click', function() { container.style.display = 'none'; container.innerHTML = ''; });
}

/* ---------- MODAL ---------- */

function openSheet(contentHtml) {
  closeSheet();
  var overlay = document.createElement('div'); overlay.className = 'modal-overlay'; overlay.id = 'modalOverlay'; overlay.addEventListener('click', closeSheet);
  var sheet = document.createElement('div'); sheet.className = 'modal-sheet'; sheet.id = 'modalSheet';
  sheet.innerHTML = '<div class="sheet-handle"></div>' + contentHtml;
  sheet.addEventListener('click', function(e) { e.stopPropagation(); });
  document.body.appendChild(overlay); document.body.appendChild(sheet);
}

function closeSheet() {
  var overlay = document.getElementById('modalOverlay'), sheet = document.getElementById('modalSheet');
  if (sheet) { sheet.style.animation = 'slide-down 0.2s var(--ease-out) forwards'; if (overlay) overlay.style.animation = 'fade-out 0.15s var(--ease-smooth) forwards'; setTimeout(function() { if (overlay) overlay.remove(); if (sheet) sheet.remove(); }, 200); }
  else { if (overlay) overlay.remove(); }
}

/* ---------- PROFILE ---------- */

async function loadProfile() { return await dpLoad(getProfileKey(), {}); }
async function saveProfile(data) { await dpSave(getProfileKey(), data); }

async function renderProfileStats() {
  var champs = await loadChamps();
  var nb = document.getElementById('statNbChamps'), surface = document.getElementById('statSurface'), cultures = document.getElementById('statCultures');
  if (!nb) return;
  nb.textContent = champs.length;
  var totalHa = 0; for (var i = 0; i < champs.length; i++) totalHa += parseFloat(champs[i].surface) || 0;
  surface.textContent = totalHa.toFixed(1) + ' ha';
  // Ensure the stat numbers fit on one line by shrinking font-size if necessary
  autoFitNumber(nb);
  autoFitNumber(surface);
  autoFitNumber(cultures);
  var listeCultures = []; for (var j = 0; j < champs.length; j++) { if (champs[j].culture && listeCultures.indexOf(champs[j].culture) === -1) listeCultures.push(champs[j].culture); }
  cultures.textContent = listeCultures.length > 0 ? listeCultures.join(', ') : 'Aucune';
}

// Shrink-to-fit helper: reduce font-size until content fits within its container
function autoFitNumber(el) {
  if (!el) return;
  // start from computed font-size or 22
  var cs = window.getComputedStyle(el);
  var base = parseFloat(cs.fontSize) || 22;
  var min = 10;
  var fs = base;
  el.style.whiteSpace = 'nowrap';
  el.style.display = 'inline-block';
  el.style.fontSize = fs + 'px';
  // try to shrink until it fits
  while (el.scrollWidth > el.clientWidth && fs > min) {
    fs -= 1;
    el.style.fontSize = fs + 'px';
  }
}

function fitAllStatsDebounced() {
  if (window._fitStatsTimeout) clearTimeout(window._fitStatsTimeout);
  window._fitStatsTimeout = setTimeout(function() {
    var els = document.querySelectorAll('.stat-value'); els.forEach(autoFitNumber);
  }, 120);
}

window.addEventListener('resize', fitAllStatsDebounced);

async function initProfil() {
  var profile = await loadProfile();
  var session = getSession();
  var emailUser = session ? session.email : (localStorage.getItem('agria_user') || '');

  var inputPrenom = document.getElementById('profilPrenom'), inputNom = document.getElementById('profilNom');
  var inputEmail = document.getElementById('profilEmail'), inputTel = document.getElementById('profilTel');
  if (inputPrenom) inputPrenom.value = profile.prenom || '';
  if (inputNom) inputNom.value = profile.nom || '';
  if (inputEmail) inputEmail.value = profile.email || emailUser || '';
  if (inputTel) inputTel.value = profile.telephone || '';

  var avatar = document.getElementById('profilAvatar');
  if (avatar) { var p = (profile.prenom || 'A')[0].toUpperCase(); var n = (profile.nom || 'A')[0].toUpperCase(); avatar.textContent = p + n; }

  var btnSaveId = document.getElementById('btnSaveIdentite');
  if (btnSaveId) { btnSaveId.addEventListener('click', async function() { profile.prenom = inputPrenom ? inputPrenom.value.trim() : ''; profile.nom = inputNom ? inputNom.value.trim() : ''; profile.telephone = inputTel ? inputTel.value.trim() : ''; profile.email = inputEmail ? inputEmail.value.trim() : (profile.email||''); await saveProfile(profile); if (avatar) { var pp = (profile.prenom||'A')[0].toUpperCase(); var nn = (profile.nom||'A')[0].toUpperCase(); avatar.textContent = pp + nn; } showToast('Profil sauvegarde.', 'success'); }); }

  var inputExpl = document.getElementById('profilExploitationNom'), inputSiret = document.getElementById('profilSiret'), selectType = document.getElementById('profilTypeAgri');
  if (inputExpl) inputExpl.value = profile.exploitation || '';
  if (inputSiret) inputSiret.value = profile.siret || '';
  if (selectType) selectType.value = profile.typeAgriculture || '';

  var regionInfo = document.getElementById('profilRegionInfo');
  if (regionInfo) { var prefs = JSON.parse(localStorage.getItem(getPrefsKey()) || '{}'); regionInfo.textContent = 'Derniere region consultee : ' + (prefs.region || 'Occitanie'); }

  var btnSaveExpl = document.getElementById('btnSaveExploitation');
  if (btnSaveExpl) { btnSaveExpl.addEventListener('click', async function() { profile.exploitation = inputExpl ? inputExpl.value.trim() : ''; profile.siret = inputSiret ? inputSiret.value.trim() : ''; profile.typeAgriculture = selectType ? selectType.value : ''; await saveProfile(profile); showToast('Exploitation sauvegardee.', 'success'); }); }

  await renderProfileStats();

  /* Preferences */
  var prefNotif = document.getElementById('prefNotifications'), prefUnite = document.getElementById('prefUniteHa'), prefVille = document.getElementById('prefVilleMeteo');
  var prefsObj = JSON.parse(localStorage.getItem(getPrefsKey()) || '{}');
  if (prefNotif) prefNotif.checked = prefsObj.notifications === true;
  if (prefUnite) prefUnite.checked = prefsObj.uniteHa !== false;
  if (prefVille) prefVille.value = prefsObj.villeMeteo || getDefaultVille();

  function savePrefsNow() {
    var p = JSON.parse(localStorage.getItem(getPrefsKey()) || '{}');
    p.notifications = prefNotif ? prefNotif.checked : false;
    p.uniteHa = prefUnite ? prefUnite.checked : true;
    p.villeMeteo = prefVille ? prefVille.value.trim() : 'Paris';
    localStorage.setItem(getPrefsKey(), JSON.stringify(p));
    if (prefVille) setDefaultVille(p.villeMeteo);
  }
  if (prefNotif) prefNotif.addEventListener('change', savePrefsNow);
  if (prefUnite) prefUnite.addEventListener('change', savePrefsNow);
  if (prefVille) prefVille.addEventListener('change', savePrefsNow);

  var btnLogout = document.getElementById('btnLogoutProfil'); if (btnLogout) btnLogout.addEventListener('click', logout);

  var btnDelete = document.getElementById('btnDeleteAccount'), deleteSteps = document.getElementById('deleteSteps');
  if (btnDelete && deleteSteps) { btnDelete.addEventListener('click', function() { deleteSteps.classList.toggle('d-none'); }); }

  var btnDeleteConfirm = document.getElementById('btnDeleteConfirm'), deleteInput = document.getElementById('deleteConfirmInput');
  if (btnDeleteConfirm && deleteInput) {
    btnDeleteConfirm.addEventListener('click', function() {
      if (deleteInput.value.trim() === 'SUPPRIMER') {
        var uid = getUserId(); var toRemove = [];
        for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && k.indexOf(uid) !== -1) toRemove.push(k); }
        for (var r = 0; r < toRemove.length; r++) localStorage.removeItem(toRemove[r]);
        localStorage.removeItem('agria_session'); localStorage.removeItem('agria_user');
        transitionPage('login.html');
      } else { showToast('Veuillez taper SUPPRIMER exactement.', 'error'); }
    });
  }

  var btnChangeMdp = document.getElementById('btnChangeMdp');
  if (btnChangeMdp) {
    btnChangeMdp.addEventListener('click', function() {
      openSheet('<h2 class="sheet-title">Changer le mot de passe</h2>' +
        '<div class="form-group"><label class="form-label">Mot de passe actuel</label><input type="password" class="input" id="mdpActuel"></div>' +
        '<div class="form-group"><label class="form-label">Nouveau mot de passe</label><input type="password" class="input" id="mdpNouveau"></div>' +
        '<div class="form-group"><label class="form-label">Confirmer</label><input type="password" class="input" id="mdpConfirmer"></div>' +
        '<button type="button" class="btn btn-primary" id="btnSaveMdp"><i class="fa-solid fa-check"></i> Changer le mot de passe</button>' +
        '<button type="button" class="btn btn-secondary" style="margin-top:12px" onclick="closeSheet()">Annuler</button>');
      setTimeout(function() {
        var btnSave = document.getElementById('btnSaveMdp');
        if (btnSave) { btnSave.addEventListener('click', async function() { var actuel = document.getElementById('mdpActuel').value; var nouveau = document.getElementById('mdpNouveau').value; var confirmer = document.getElementById('mdpConfirmer').value; if (nouveau.length < 8) { showToast('8 caracteres minimum.', 'error'); return; } if (nouveau !== confirmer) { showToast('Les mots de passe ne correspondent pas.', 'error'); return; } profile.passwordHash = btoa(nouveau); await saveProfile(profile); closeSheet(); showToast('Mot de passe modifie.', 'success'); }); }
      }, 100);
    });
  }
}

/* ---------- DASHBOARD CHAMPS ---------- */

async function renderChampsDashboard() {
  var container = document.getElementById('champsContainer'); if (!container) return;
  var champs = await loadChamps(); container.innerHTML = '';
  if (champs.length === 0) { container.innerHTML = '<div class="card field-empty"><p class="field-empty-text">Aucune parcelle. Rendez-vous sur la carte pour en creer une.</p><a href="carte.html" class="btn btn-secondary" style="display:inline-flex;width:auto;padding:0 24px"><i class="fa-solid fa-map"></i> Aller sur la carte</a></div>'; return; }

  for (var i = 0; i < champs.length; i++) {
    var c = champs[i]; var stadeBadge = '';
    if (c.stade === 'Semis' || c.stade === 'Levee') stadeBadge = 'badge-info';
    else if (c.stade === 'Croissance' || c.stade === 'Recolte') stadeBadge = 'badge-success';
    else if (c.stade === 'Floraison') stadeBadge = 'badge-warning';
    else stadeBadge = 'badge-info';

    var card = document.createElement('div'); card.className = 'card reveal'; card.setAttribute('data-champ-id', c.id);
    card.innerHTML =
      '<div class="field-card-header"><span class="field-card-name">' + c.nom + '</span><span class="badge ' + stadeBadge + '">' + (c.stade || 'Inconnu') + '</span></div>' +
      '<div class="field-card-details">' +
      '<div class="field-card-detail">Culture : <strong>' + (c.culture || 'Non definie') + '</strong></div>' +
      '<div class="field-card-detail">Sol : <strong>' + (c.typeSol || 'Non defini') + '</strong></div>' +
      '<div class="field-card-detail">Surface : <strong>' + (c.surface || '0') + ' ha</strong></div>' +
      '<div class="field-card-detail">Semis : <strong>' + (c.dateSemis || 'Non definie') + '</strong></div></div>' +
      '<div class="field-card-actions">' +
      '<button class="field-btn field-btn-see" data-action="voir" data-id="' + c.id + '"><i class="fa-solid fa-eye"></i> Voir</button>' +
      '<a class="field-btn field-btn-map" href="carte.html?parcel=' + encodeURIComponent(c.id) + '" title="Ouvrir sur la carte"><i class="fa-solid fa-map-location-dot"></i> Carte</a>' +
      '<button class="field-btn field-btn-more" data-action="more" data-id="' + c.id + '" aria-expanded="false" aria-label="Plus d\'actions"><i class="fa-solid fa-ellipsis"></i></button></div>' +
      '<div class="field-card-menu d-none" data-menu-id="' + c.id + '">' +
      '<button class="field-btn field-btn-edit" data-action="modifier" data-id="' + c.id + '"><i class="fa-solid fa-pen"></i> Modifier</button>' +
      '<button class="field-btn field-btn-delete" data-action="supprimer" data-id="' + c.id + '"><i class="fa-solid fa-trash"></i> Supprimer</button></div>' +
      '<div class="confirm-delete d-none" data-delete-id="' + c.id + '">Confirmer la suppression ? <span class="confirm-delete-btns"><button class="confirm-delete-yes" data-confirm="oui" data-id="' + c.id + '">Oui</button><button class="confirm-delete-no" data-confirm="non" data-id="' + c.id + '">Non</button></span></div>';
    container.appendChild(card);
  }
  var reveals = container.querySelectorAll('.reveal'); for (var r = 0; r < reveals.length; r++) reveals[r].classList.add('visible');
  initDashboardChampEvents();
}

function initDashboardChampEvents() {
  var btns = document.querySelectorAll('.field-btn[data-action]');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
      e.stopPropagation(); var action = this.getAttribute('data-action'), id = this.getAttribute('data-id');
      if (action === 'more') {
        var menu = document.querySelector('.field-card-menu[data-menu-id="' + id + '"]');
        var expanded = this.getAttribute('aria-expanded') === 'true';
        var openMenus = document.querySelectorAll('.field-card-menu:not(.d-none)');
        for (var m = 0; m < openMenus.length; m++) openMenus[m].classList.add('d-none');
        var openButtons = document.querySelectorAll('.field-btn-more[aria-expanded="true"]');
        for (var b = 0; b < openButtons.length; b++) openButtons[b].setAttribute('aria-expanded', 'false');
        if (!expanded && menu) { menu.classList.remove('d-none'); this.setAttribute('aria-expanded', 'true'); }
        return;
      }
      if (action === 'supprimer') { var cd = document.querySelector('.confirm-delete[data-delete-id="' + id + '"]'); if (cd) cd.classList.toggle('d-none'); }
      if (action === 'voir') showChampDetail(id);
      if (action === 'modifier') showChampEdit(id);
    });
  }
  var cy = document.querySelectorAll('.confirm-delete-yes');
  for (var j = 0; j < cy.length; j++) { cy[j].addEventListener('click', function(e) { e.stopPropagation(); deleteChamp(this.getAttribute('data-id')).then(function() { return renderChampsDashboard(); }); }); }
  var cn = document.querySelectorAll('.confirm-delete-no');
  for (var k = 0; k < cn.length; k++) { cn[k].addEventListener('click', function(e) { e.stopPropagation(); var cd = document.querySelector('.confirm-delete[data-delete-id="' + this.getAttribute('data-id') + '"]'); if (cd) cd.classList.add('d-none'); }); }

  if (!window._fieldCardMenuCloseBound) {
    document.addEventListener('click', function() {
      var openMenus = document.querySelectorAll('.field-card-menu:not(.d-none)');
      for (var i = 0; i < openMenus.length; i++) openMenus[i].classList.add('d-none');
      var openButtons = document.querySelectorAll('.field-btn-more[aria-expanded="true"]');
      for (var j = 0; j < openButtons.length; j++) openButtons[j].setAttribute('aria-expanded', 'false');
    });
    window._fieldCardMenuCloseBound = true;
  }
}

async function showChampDetail(id) {
  var champs = await loadChamps(); var champ = null;
  for (var i = 0; i < champs.length; i++) { if (champs[i].id === id) { champ = champs[i]; break; } }
  if (!champ) return;

  var content = '<h2 class="sheet-title">' + champ.nom + '</h2>' +
    '<div class="form-group"><label class="form-label">Culture</label><p style="font-size:15px;color:var(--text)">' + (champ.culture||'Non definie') + '</p></div>' +
    '<div class="form-group"><label class="form-label">Type de sol</label><p style="font-size:15px;color:var(--text)">' + (champ.typeSol||'Non defini') + '</p></div>' +
    '<div class="form-group"><label class="form-label">Stade</label><p style="font-size:15px;color:var(--text)">' + (champ.stade||'Non defini') + '</p></div>' +
    '<div class="form-group"><label class="form-label">Surface</label><p style="font-size:15px;color:var(--text)">' + (champ.surface||'0') + ' ha</p></div>' +
    '<div class="form-group"><label class="form-label">Date de semis</label><p style="font-size:15px;color:var(--text)">' + (champ.dateSemis||'Non definie') + '</p></div>' +
    '<div class="form-group"><label class="form-label">Notes</label><p style="font-size:14px;color:var(--text-secondary)">' + (champ.notes||'Aucune') + '</p></div>' +
    (function() {
      var predictions = generatePredictions(champ); var predHtml = '';
      if (predictions && !predictions.error) {
        var scoreColor = predictions.score_sol.score >= 4 ? 'var(--success)' : predictions.score_sol.score >= 2 ? 'var(--accent)' : 'var(--danger)';
        predHtml = '<div style="background:var(--bg);border-radius:var(--radius);padding:14px;margin-top:14px"><h3 style="font-size:14px;font-weight:600;color:var(--primary);margin-bottom:10px"><i class="fa-solid fa-chart-line"></i> Predictions</h3>' +
          '<div class="pred-item"><span>Recolte estimee</span><strong>' + predictions.date_recolte_estimee + '</strong></div>' +
          '<div class="pred-item"><span>Score sol</span><strong style="color:' + scoreColor + '">' + predictions.score_sol.score + '/5</strong><small>' + predictions.score_sol.texte + '</small></div>' +
          '<div class="pred-item"><span>Besoins en eau</span><strong>' + predictions.besoins_eau_total_m3.toLocaleString() + ' m3</strong></div>' +
          (predictions.alerte_irrigation.active ? '<div class="pred-alert"><span>ALERTE</span><strong>Irrigation</strong><p>' + predictions.alerte_irrigation.message + '</p></div>' : '') +
          '<div class="pred-item"><span>Azote total</span><strong>' + predictions.fertilisation.azote_total_kg + ' kg</strong><small>Cout estime : ' + predictions.fertilisation.cout_estime_euros + ' EUR</small></div>' +
          '<div class="pred-item"><span>Rendement</span><strong>' + predictions.rendement_estime.min + ' - ' + predictions.rendement_estime.max + ' ' + predictions.rendement_estime.unite + '</strong></div>' +
          '<p style="font-size:13px;color:var(--text-secondary);margin-top:10px;padding:8px;background:var(--surface);border-radius:8px">' + predictions.recommandation_globale + '</p></div>';
      }
      return predHtml;
    })() + '<button type="button" class="btn btn-secondary" onclick="closeSheet()">Fermer</button>';
  openSheet(content);
}

async function showChampEdit(id) {
  var champs = await loadChamps(); var champ = null;
  for (var i = 0; i < champs.length; i++) { if (champs[i].id === id) { champ = champs[i]; break; } }
  if (!champ) return;

  var content = '<h2 class="sheet-title">Modifier</h2>' +
    '<div class="form-group"><label class="form-label">Nom</label><input type="text" class="input" id="editNom" value="' + (champ.nom||'') + '"></div>' +
    '<div class="form-group"><label class="form-label">Type de sol</label><select class="input" id="editTypeSol"><option '+(champ.typeSol==='Argileux'?'selected':'')+'>Argileux</option><option '+(champ.typeSol==='Limoneux'?'selected':'')+'>Limoneux</option><option '+(champ.typeSol==='Sableux'?'selected':'')+'>Sableux</option><option '+(champ.typeSol==='Calcaire'?'selected':'')+'>Calcaire</option><option '+(champ.typeSol==='Humifere'?'selected':'')+'>Humifere</option></select></div>' +
    '<div class="form-group"><label class="form-label">Culture</label><select class="input" id="editCulture"><option '+(champ.culture==='Ble'?'selected':'')+'>Ble</option><option '+(champ.culture==='Mais'?'selected':'')+'>Mais</option><option '+(champ.culture==='Tournesol'?'selected':'')+'>Tournesol</option><option '+(champ.culture==='Colza'?'selected':'')+'>Colza</option><option '+(champ.culture==='Vigne'?'selected':'')+'>Vigne</option><option '+(champ.culture==='Jachere'?'selected':'')+'>Jachere</option></select></div>' +
    '<div class="form-group"><label class="form-label">Stade</label><select class="input" id="editStade"><option '+(champ.stade==='Semis'?'selected':'')+'>Semis</option><option '+(champ.stade==='Levee'?'selected':'')+'>Levee</option><option '+(champ.stade==='Croissance'?'selected':'')+'>Croissance</option><option '+(champ.stade==='Floraison'?'selected':'')+'>Floraison</option><option '+(champ.stade==='Recolte'?'selected':'')+'>Recolte</option></select></div>' +
    '<div class="form-group"><label class="form-label">Surface (ha)</label><input type="number" step="0.1" class="input" id="editSurface" value="' + (champ.surface||'0') + '"></div>' +
    '<div class="form-group"><label class="form-label">Date de semis</label><input type="date" class="input" id="editDateSemis" value="' + (champ.dateSemis||'') + '"></div>' +
    '<div class="form-group"><label class="form-label">Notes</label><textarea class="input" id="editNotes" maxlength="300">' + (champ.notes||'') + '</textarea></div>' +
    '<button type="button" class="btn btn-primary" id="btnSaveEdit"><i class="fa-solid fa-check"></i> Enregistrer</button>' +
    '<button type="button" class="btn btn-secondary" style="margin-top:12px" onclick="closeSheet()">Annuler</button>';

  openSheet(content);
  setTimeout(function() {
    var btnSave = document.getElementById('btnSaveEdit');
    if (btnSave) { btnSave.addEventListener('click', async function() { champ.nom = document.getElementById('editNom').value.trim(); champ.typeSol = document.getElementById('editTypeSol').value; champ.culture = document.getElementById('editCulture').value; champ.stade = document.getElementById('editStade').value; champ.surface = document.getElementById('editSurface').value; champ.dateSemis = document.getElementById('editDateSemis').value; champ.notes = document.getElementById('editNotes').value; await updateChamp(id, champ); closeSheet(); await renderChampsDashboard(); }); }
  }, 100);
}

/* ---------- DASHBOARD STATS ---------- */

async function renderDashboardStats() {
  var champs = await loadChamps(); var totalHa = 0; var cultureCount = {};
  for (var i = 0; i < champs.length; i++) { totalHa += parseFloat(champs[i].surface) || 0; var c = champs[i].culture || 'Inconnu'; cultureCount[c] = (cultureCount[c] || 0) + 1; }

  var topCulture = '', topCount = 0;
  for (var k in cultureCount) { if (cultureCount[k] > topCount) { topCulture = k; topCount = cultureCount[k]; } }

  var html = '<div class="stats-grid">' +
    '<div class="stat-card"><span class="stat-value">' + champs.length + '</span><span class="stat-label">Champs</span></div>' +
    '<div class="stat-card"><span class="stat-value">' + totalHa.toFixed(1) + '</span><span class="stat-label">Hectares</span></div>' +
    '<div class="stat-card"><span class="stat-value">' + (topCulture || '-') + '</span><span class="stat-label">Culture n1</span></div>' +
    '</div>';

  var container = document.getElementById('dashboardStats'); if (container) container.innerHTML = html;
}

/* ---------- INIT ---------- */

async function initDashboard() {
  var ville = getDefaultVille(); chargerMeteo(ville);
  updateNotificationBadge();
  var notifBtn = document.getElementById('headerNotifBtn');
  if (notifBtn) notifBtn.addEventListener('click', function() { transitionPage('notifications.html'); });
  var searchInput = document.getElementById('meteoVilleInput');
  if (searchInput) { searchInput.value = ''; searchInput.placeholder = 'Rechercher une ville...'; initCitySearch(searchInput, function(sel) { setDefaultVille(sel); chargerMeteo(sel); searchInput.value = sel; }); }
  var searchBtn = document.getElementById('meteoSearchBtn');
  if (searchBtn && searchInput) { searchBtn.addEventListener('click', function() { var v = searchInput.value.trim(); if (v) { setDefaultVille(v); chargerMeteo(v); hideCityDropdown(); } }); }
  await renderChampsDashboard(); await renderDashboardStats();
}



/* ---------- DIAGNOSTIC INIT ---------- */

function initDiagnostic() {
  var etapeCourante = 1, cultureChoisie = null, symptomesChoisis = [];
  changerEtape(1);

  var boutonsSuivant = document.querySelectorAll('.diagnostic-next');
  for (var i = 0; i < boutonsSuivant.length; i++) { boutonsSuivant[i].addEventListener('click', function() { var next = parseInt(this.getAttribute('data-next')); if (etapeCourante === 1) { var radio = document.querySelector('input[name="culture"]:checked'); if (!radio) { showToast('Selectionnez une culture.', 'warning'); return; } cultureChoisie = radio.value; localStorage.setItem('agria_last_culture', cultureChoisie); } if (etapeCourante === 2) { var cb = document.querySelectorAll('#etape2 input[type="checkbox"]:checked'); symptomesChoisis = []; for (var j = 0; j < cb.length; j++) symptomesChoisis.push(cb[j].value); } changerEtape(next); }); }
  var boutonsRetour = document.querySelectorAll('.diagnostic-prev');
  for (var k = 0; k < boutonsRetour.length; k++) { boutonsRetour[k].addEventListener('click', function() { changerEtape(parseInt(this.getAttribute('data-prev'))); }); }

  var btnAnalyser = document.getElementById('btnAnalyser');
  if (btnAnalyser) { btnAnalyser.addEventListener('click', async function() { var cb = document.querySelectorAll('#etape2 input[type="checkbox"]:checked'); symptomesChoisis = []; for (var m = 0; m < cb.length; m++) symptomesChoisis.push(cb[m].value); var vi = document.getElementById('diagnosticVille'); var ville = vi ? vi.value.trim() : 'Paris'; if (!ville) ville = 'Paris'; btnAnalyser.disabled = true; btnAnalyser.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Analyse...'; try { var coords = await fetchCoordonnees(ville); var meteoData = await fetchOpenMeteo(coords.lat, coords.lon); var diagnostic = genererDiagnostic(cultureChoisie, symptomesChoisis, meteoData); var createdAt = Date.now(); var diagToSave = { nom: diagnostic.nom, titre: buildDiagnosticTitle(cultureChoisie, diagnostic.nom), gravite: diagnostic.gravite, explication: diagnostic.explication, recommandations: diagnostic.recommandations, culture: cultureChoisie, symptomes: symptomesChoisis, ville: ville, meteo: meteoData, createdAt: createdAt, date: formatDateTime(createdAt) }; window.currentDiagnostic = diagToSave; addDiagnostic(diagToSave); renderDiagnosticHistory(); renderResultat(diagnostic); var form = document.getElementById('diagnosticForm'), resultat = document.getElementById('diagnosticResultat'), steps = document.getElementById('diagnosticSteps'); if (form) { form.style.opacity = '0'; form.style.transition = 'opacity 0.15s'; } if (resultat) { resultat.classList.remove('d-none'); resultat.style.opacity = '0'; resultat.style.transition = 'opacity 0.3s var(--ease-spring)'; } setTimeout(function() { if (form) form.classList.add('d-none'); if (resultat) resultat.style.opacity = '1'; }, 150); if (steps) steps.classList.add('d-none'); } catch (err) { showToast('Erreur : ' + err.message, 'error'); } btnAnalyser.disabled = false; btnAnalyser.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> Analyser'; }); }

  var btnNouveau = document.getElementById('btnNouveauDiagnostic');
  if (btnNouveau) { btnNouveau.addEventListener('click', function() { var form = document.getElementById('diagnosticForm'), resultat = document.getElementById('diagnosticResultat'), steps = document.getElementById('diagnosticSteps'); if (form) { form.classList.remove('d-none'); form.style.opacity = '0'; form.style.transition = 'opacity 0.3s var(--ease-spring)'; } if (resultat) { resultat.style.opacity = '0'; resultat.style.transition = 'opacity 0.15s'; } setTimeout(function() { if (resultat) resultat.classList.add('d-none'); if (form) form.style.opacity = '1'; }, 150); if (steps) steps.classList.remove('d-none'); var radios = document.querySelectorAll('input[name="culture"]'); for (var n = 0; n < radios.length; n++) radios[n].checked = false; var checks = document.querySelectorAll('#etape2 input[type="checkbox"]'); for (var q = 0; q < checks.length; q++) checks[q].checked = false; var vi = document.getElementById('diagnosticVille'); if (vi) vi.value = ''; cultureChoisie = null; symptomesChoisis = []; etapeCourante = 1; window.currentDiagnostic = null; changerEtape(1); }); }

  var btnDetailedDiag = document.getElementById('btnDetailedDiag');
  if (btnDetailedDiag) {
    btnDetailedDiag.addEventListener('click', async function() {
      if (!window.currentDiagnostic) return;
      
      var emailUser = prompt("A quelle adresse email souhaitez-vous envoyer l'analyse detaillee ?");
      if (!emailUser || emailUser.trim() === '') return;
      
      var webhookUrl = 'https://hook.eu1.make.com/g2jtmmdmogxptz1m0fuimyd82aslrv6c';
      var oldHtml = btnDetailedDiag.innerHTML;
      
      // On rajoute l'email dans l'objet envoye
      var payloadToMake = Object.assign({}, window.currentDiagnostic, { email: emailUser.trim() });
      
      try {
        btnDetailedDiag.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...';
        btnDetailedDiag.disabled = true;
        var response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payloadToMake)
        });
        var responseText = await response.text();
        var notifTitle = buildDiagnosticTitle(window.currentDiagnostic.culture, window.currentDiagnostic.nom);
        await addNotification(notifTitle, responseText, { source: 'make-webhook', culture: window.currentDiagnostic.culture, ville: window.currentDiagnostic.ville });
        updateNotificationBadge();
        showToast('Votre demande a bien ete envoyee a l\'IA via Make.', 'success');
      } catch (err) {
        console.error(err);
        showToast('Erreur lors de l\'envoi du diagnostic.', 'error');
      } finally {
        btnDetailedDiag.innerHTML = oldHtml;
        btnDetailedDiag.disabled = false;
      }
    });
  }

  updateNotificationBadge();

  function changerEtape(numero) { etapeCourante = numero; var etapes = document.querySelectorAll('.diag-etape'); for (var i = 0; i < etapes.length; i++) etapes[i].classList.remove('active'); var etapeActive = document.getElementById('etape'+numero); if (etapeActive) etapeActive.classList.add('active'); var steps = document.querySelectorAll('.diag-steps .step'); for (var j = 0; j < steps.length; j++) { var sn = parseInt(steps[j].getAttribute('data-step')); steps[j].classList.remove('active','completed'); if (sn === numero) steps[j].classList.add('active'); else if (sn < numero) steps[j].classList.add('completed'); } }

  var lastCulture = localStorage.getItem('agria_last_culture'); if (lastCulture) { var radio = document.querySelector('input[name="culture"][value="'+lastCulture+'"]'); if (radio) radio.checked = true; }
  renderDiagnosticHistory();
}

function initNotificationsPage() {
  var list = document.getElementById('notifList');
  var countBadge = document.getElementById('notifCountBadge');
  var backBtn = document.getElementById('notifBackBtn');
  var markAllBtn = document.getElementById('notifMarkAllBtn');
  var detailCard = document.getElementById('notifDetailCard');

  if (backBtn) backBtn.addEventListener('click', function() { transitionPage('dashboard.html'); });
  if (markAllBtn) markAllBtn.addEventListener('click', async function() { await markAllNotificationsRead(); renderNotificationsPage(); updateNotificationBadge(); });

  async function renderNotificationsPage() {
    if (!list) return;
    var notifs = await loadNotifications();
    if (countBadge) countBadge.textContent = String(getUnreadNotificationCount(notifs));
    list.innerHTML = '';

    if (notifs.length === 0) {
      list.innerHTML = '<p class="diag-history-empty">Aucune notification.</p>';
      if (detailCard) { detailCard.style.display = 'none'; detailCard.innerHTML = ''; }
      return;
    }

    for (var i = 0; i < notifs.length; i++) {
      (function(n) {
        var item = document.createElement('button');
        item.type = 'button';
        item.className = 'card';
        item.style.cssText = 'width:100%;text-align:left;margin-bottom:10px;display:block;background:' + (n.read ? 'var(--surface)' : '#FEF3F0') + ';border-color:' + (n.read ? 'var(--border)' : 'rgba(217, 83, 79, 0.2)') + ';';
        item.innerHTML = '<div class="diag-history-header"><span class="badge ' + (n.read ? 'badge-info' : 'badge-danger') + '">' + n.title + '</span><span class="diag-history-date">' + (n.date || formatNotificationDate(n.createdAt)) + '</span></div><div class="diag-history-meta" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + (n.text || '') + '</div>';
        item.addEventListener('click', async function() { await markNotificationRead(n.id); await renderNotificationsPage(); renderWebNotificationDetail(n); updateNotificationBadge(); });
        list.appendChild(item);
      })(notifs[i]);
    }
  }

  renderNotificationsPage();
}

/* ---------- BOOT ---------- */

document.addEventListener('DOMContentLoaded', function() {
  var page = document.body.dataset.page;
  initScrollReveal(); initHeaderScroll();
  if (page === 'login') initLogin();
  if (page === 'dashboard') initDashboard();
  if (page === 'diagnostic') initDiagnostic();
  if (page === 'profil') initProfil();
  if (page === 'notifications') initNotificationsPage();
});
