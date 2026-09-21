/* ---------- Second Brain builder: the Halo (same geometry rules as the app's haloWorld.ts) ---------- */
/* A made-up vault for the page, laid out the way the app lays out a real one: sections in canon order
   around the band, hubs first inside a section, chords pulled toward the centre and lifted alternately
   above and below the plane. Deterministic: same page, same halo. */
var HALO_SECTIONS = [['profile',3,'#ffd60a'],['decisions',9,'#ffbe6e'],['knowledge',12,'#7fd88f'],['projects',7,'#5ea3d4'],['journal',8,'#c792ea'],['inbox',3,'#ff8ab8']];
var HALO_NAMES = {profile:['identity','how-i-work','voice'], inbox:['Suggested: retainer rule','Suggested: CSV columns','Suggested: deploy hour'], projects:['ledger-web','Roof quotes','Release 1.4','Northbank fit-out','Sealine quote','Client: Northbank','Vendor terms'], decisions:['Invoice rounding','Exports policy','Tax rates 2026','Deploy checklist','Money helpers','CSV export','Design system','Ledger routine','Retainer terms']};
function haloWorld(){
  var seed = 7, rnd = function(){ seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
  var stars = [], rails = [], N = 0, i, k;
  HALO_SECTIONS.forEach(function(sec){ N += sec[1]; });
  var R = Math.max(340, Math.min(980, N * 3.8)), start = 0;
  HALO_SECTIONS.forEach(function(sec){
    var names = HALO_NAMES[sec[0]] || [];
    for (i = 0; i < sec[1]; i++){
      var a = ((start + i) / N) * Math.PI * 2 - Math.PI / 2;
      // hubs first inside a section, like the app: degree falls off along the arc
      stars.push({section:sec[0], color:sec[2], title:names[i] || (sec[0] + ' ' + (i + 1)), angle:a, pos:[Math.cos(a) * R, 0, Math.sin(a) * R], degree:Math.max(0, Math.round((sec[0] === 'projects' && !i ? 20 : 14) * Math.pow(0.55, i) + rnd() * 2 - 1)), pending:sec[0] === 'inbox'});
    }
    rails.push({color:sec[2], a0:(start / N) * Math.PI * 2 - Math.PI / 2, a1:((start + sec[1]) / N) * Math.PI * 2 - Math.PI / 2});
    start += sec[1];
  });
  var chords = [], seen = {};
  stars.forEach(function(s, si){
    for (k = 0; k < s.degree; k++){
      // links favour other sections, so the web crosses the middle rather than hugging the band
      var ti = Math.floor(rnd() * N); if (ti === si || stars[ti].section === s.section && rnd() < 0.7) continue;
      var key = Math.min(si, ti) + ':' + Math.max(si, ti); if (seen[key]) continue; seen[key] = 1;
      var a = s.pos, b = stars[ti].pos, dist = Math.hypot(a[0] - b[0], a[2] - b[2]);
      var lift = ((si + ti) % 2 ? 1 : -1) * (30 + dist * 0.1);
      chords.push({a:si, b:ti, mid:[(a[0] + b[0]) * 0.32, lift, (a[2] + b[2]) * 0.32]});
    }
  });
  var deg = stars.map(function(){ return 0; }); chords.forEach(function(c){ deg[c.a]++; deg[c.b]++; });
  stars.forEach(function(s, si){ s.degree = deg[si]; s.orphan = deg[si] === 0; });
  // one electrode per chord, staggered so they never move in step
  var electrodes = chords.map(function(c, ci){ return {chord:c, u:(ci * 0.618) % 1}; });
  return {stars:stars, rails:rails, chords:chords, electrodes:electrodes, R:R, N:N};
}
var HALO_TILT_Z = 0.42, HALO_TILT_Y = 0.85, HALO_CHORD = '#5ecf9f', HALO_PULSE = '#93e1c0';
/* `state.work` is the engine at work, 0..1: the hub note it is reading stays lit and every trail into it
   flares, which sends the electrodes on those trails dashing. The film scrubs it; the section pulses it. */
function buildHalo(host, compact){
  var world = haloWorld();
  var hub = 0; world.stars.forEach(function(s, i){ if (s.degree > world.stars[hub].degree) hub = i; });
  var hot = {}; hot[hub] = 1; world.chords.forEach(function(c){ if (c.a === hub || c.b === hub) c.hot = 1; });
  host.innerHTML = '<div class="halo" aria-label="Second Brain: the Halo" role="img"><canvas></canvas>' +
    '<div class="halo-top"><span class="halo-search">Search the halo\u2026</span><span class="halo-seg"><span class="on">Second Brain</span><span>Notes</span><span>Ledger</span><span>Engine</span></span><span class="halo-reset">Reset view</span></div>' +
    '<div class="halo-hint">drag to circle it \u00b7 scroll to zoom \u00b7 Reset view recentres the Brain</div>' +
    '<div class="halo-foot">' + HALO_SECTIONS.map(function(sec){ return '<span><i style="background:' + sec[2] + '"></i>' + sec[0] + '</span>'; }).join('') + '<b>3 awaiting you</b></div>' +
    '<div class="halo-label"></div></div>';
  var root = host.firstChild, canvas = root.querySelector('canvas'), g = canvas.getContext('2d'), label = root.querySelector('.halo-label');
  label.textContent = world.stars[hub].title;
  var state = {work:0, rot:0, last:performance.now()};
  function draw(now){
    var dt = Math.min(0.1, (now - state.last) / 1000); state.last = now;
    var w = root.clientWidth, h = root.clientHeight, dpr = Math.min(2, window.devicePixelRatio || 1);
    if (!w || !h) return;
    if (canvas.width !== w * dpr || canvas.height !== h * dpr){ canvas.width = w * dpr; canvas.height = h * dpr; }
    g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, w, h);
    if (!RM) state.rot += dt * 0.06;
    var cx = w / 2, cy = h * 0.55, R = world.R, rot = state.rot;
    var s = Math.min((w * 0.44) / R, (h * 0.4) / (R * HALO_TILT_Z));
    var project = function(x, y, z){ var rx = x * Math.cos(rot) - z * Math.sin(rot), rz = x * Math.sin(rot) + z * Math.cos(rot); return [cx + rx * s, cy + (rz * HALO_TILT_Z - y * HALO_TILT_Y) * s]; };
    var at = function(c, t){ var a = world.stars[c.a].pos, b = world.stars[c.b].pos, m = c.mid, mt = 1 - t; return [mt*mt*a[0] + 2*mt*t*m[0] + t*t*b[0], mt*mt*a[1] + 2*mt*t*m[1] + t*t*b[1], mt*mt*a[2] + 2*mt*t*m[2] + t*t*b[2]]; };
    // sky
    g.fillStyle = 'rgba(159,180,204,.45)';
    for (var i = 0; i < 90; i++){ var sx = (Math.sin(i * 13.13) * 43758.5453) % 1, sy = (Math.sin(i * 7.77) * 12345.678) % 1; g.fillRect(Math.abs(sx) * w, Math.abs(sy) * h, 1, 1); }
    // rails
    g.lineWidth = 1;
    world.rails.forEach(function(r){ g.strokeStyle = r.color; g.globalAlpha = 0.55; g.beginPath(); for (var k = 0; k <= 48; k++){ var a = r.a0 + (r.a1 - r.a0) * k / 48, p = project(Math.cos(a) * (R + 26), 0, Math.sin(a) * (R + 26)); if (k) g.lineTo(p[0], p[1]); else g.moveTo(p[0], p[1]); } g.stroke(); });
    // chords: faint mint; a hot one brightens with the work
    world.chords.forEach(function(c){
      var heat = c.hot ? state.work : 0;
      g.strokeStyle = heat > 0.02 ? HALO_PULSE : HALO_CHORD; g.globalAlpha = Math.min(0.85, 0.2 + heat * 0.5);
      g.beginPath(); for (var k = 0; k <= 10; k++){ var p3 = at(c, k / 10), p = project(p3[0], p3[1], p3[2]); if (k) g.lineTo(p[0], p[1]); else g.moveTo(p[0], p[1]); } g.stroke();
    });
    // electrodes: a crawl at rest, a dash on a hot trail; they fade in and out at the stars
    world.electrodes.forEach(function(e){
      var rush = e.chord.hot ? state.work : 0;
      if (!RM) e.u = (e.u + (0.07 + rush * 0.83) * dt) % 1;
      var p3 = at(e.chord, e.u), p = project(p3[0], p3[1], p3[2]), r = (compact ? 1.6 : 2.2) * (1 + rush * 0.7);
      g.globalAlpha = Math.sin(Math.PI * e.u) * (0.75 + rush * 0.25);
      var glow = g.createRadialGradient(p[0], p[1], 0, p[0], p[1], r * 3); glow.addColorStop(0, HALO_PULSE); glow.addColorStop(1, 'rgba(147,225,192,0)');
      g.fillStyle = glow; g.beginPath(); g.arc(p[0], p[1], r * 3, 0, 7); g.fill();
    });
    // the band: every note in its section's colour, hubs bigger, orphans faint, inbox breathing
    world.stars.forEach(function(st, si){
      var p = project(st.pos[0], st.pos[1], st.pos[2]), heat = hot[si] ? state.work : 0;
      var r = (compact ? 1.4 : 2) + Math.min(6, st.degree) * (compact ? 0.4 : 0.55) + heat * 2;
      var o = st.orphan ? 0.4 : 0.95; if (st.pending && !RM) o *= 0.7 + 0.3 * Math.sin(now / 600 + st.angle * 4);
      g.globalAlpha = o;
      var glow = g.createRadialGradient(p[0], p[1], 0, p[0], p[1], r * 3.2); glow.addColorStop(0, st.color); glow.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = glow; g.beginPath(); g.arc(p[0], p[1], r * 3.2, 0, 7); g.fill();
      g.fillStyle = st.color; g.beginPath(); g.arc(p[0], p[1], r, 0, 7); g.fill();
      if (si === hub){ label.style.left = p[0] + 'px'; label.style.top = (p[1] + 8) + 'px'; label.style.opacity = compact ? 0 : 0.92; }
    });
    g.globalAlpha = 1;
  }
  return {state:state, draw:draw};
}
var haloFilm = buildHalo($('sbFilm'), true), haloSection = buildHalo($('sbSection'), false);
window.__halo = {film:haloFilm, section:haloSection}; /* for the proof harness */
(function(){
  var shown = false; if ('IntersectionObserver' in window){ new IntersectionObserver(function(es){ shown = es[0].isIntersecting; }).observe($('sbSection')); } else shown = true;
  var t0 = performance.now();
  function frame(now){
    haloFilm.draw(now);
    // the section's halo shows the engine at work on its own: a slow pulse every eight seconds
    if (shown){ haloSection.state.work = RM ? 0 : Math.max(0, Math.sin(((now - t0) / 8000) * Math.PI * 2)); haloSection.draw(now); }
    if (!RM || now - t0 < 500) requestAnimationFrame(frame); else { haloFilm.draw(now); haloSection.draw(now); }
  }
  requestAnimationFrame(frame);
})();