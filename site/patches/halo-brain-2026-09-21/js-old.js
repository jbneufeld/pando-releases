/* ---------- Second Brain builder (same geometry as the app) ---------- */
function buildSecondBrain(host, compact){
  var features = ['projects','knowledge','decisions','journal','raw/inbox'], counts = [3,5,3,2,1], total = 14;
  var operations = ['Branch','Merge','Condition','Sort','Branch','Merge','Condition','Sort'], opVals = [14,118,2,27];
  var pages = ['ledger-web','Invoice rounding','Roof quotes','Release 1.4','CSV export','Exports policy','Ledger routine','Vendor terms','Tax rates 2026','Client: Northbank','Sealine quote','Design system','Deploy checklist','Money helpers'];
  var claims = [5,4,4,3,3,3,2,2,2,1];
  var curve = function(x,y,tx,ty){ return 'M'+x+','+y+' C'+(x+(tx-x)*.48)+','+y+' '+(tx-(tx-x)*.48)+','+ty+' '+tx+','+ty; };
  var svg = '';
  for (var i = 0; i < 5; i++) for (var j = 0; j < 8; j++){ var d = curve(212, 58+i*76, 435+(j%2)*68, 35+j*48);
    svg += '<path class="sb-edge has-data" d="'+d+'"/>';
    if ((i+j)%2===0) svg += '<circle class="sb-particle" r="2"><animateMotion dur="'+(2+j*.17)+'s" begin="'+(-i-j*.24)+'s" repeatCount="indefinite" path="'+d+'"/></circle>'; }
  for (var p = 0; p < pages.length; p++) for (var k = 0; k < 4; k++){ var d2 = curve(620+(k%2)*35, 45+((p+k)%8)*48, 895+(p%2)*18, 25+p*29);
    svg += '<path class="sb-edge has-data" d="'+d2+'"/>';
    if ((p+k)%3===0) svg += '<circle class="sb-particle" r="1.8"><animateMotion dur="'+(2.5+k*.27)+'s" begin="'+(-p*.21)+'s" repeatCount="indefinite" path="'+d2+'"/></circle>'; }
  features.forEach(function(f,i){ var ratio = counts[i]/total; svg += '<g transform="translate(18 '+(30+i*76)+')" class="sb-feature"><rect width="194" height="59" rx="1"/><rect class="sb-fill" width="'+(194*ratio).toFixed(1)+'" height="7"/><text x="9" y="24">'+f.toUpperCase()+'</text><text x="9" y="43" class="sb-dim">versions</text><text x="182" y="43" text-anchor="end">'+counts[i]+' / '+ratio.toFixed(3)+'</text></g>'; });
  operations.forEach(function(op,i){ svg += '<g transform="translate('+(435+(i%2)*68)+' '+(20+i*48)+')" class="sb-op sb-op-'+(i%4)+'"><rect width="152" height="28"/><rect class="sb-op-bar" width="152" height="5"/><text x="8" y="19">'+op+' '+String(i+1).padStart(2,'0')+'</text><text x="144" y="19" text-anchor="end">'+opVals[i%4]+'</text></g>'; });
  pages.forEach(function(t,i){ svg += '<g transform="translate('+(895+(i%2)*18)+' '+(12+i*29)+')" class="sb-output"><rect width="185" height="23"/><rect class="sb-op-bar" width="185" height="4"/><text x="7" y="16">'+t+'</text></g>'; });
  var log = [['06:00:12','compiled journal/2026-09-11.md · 3 claims'],['06:00:14','linked Release 1.4 → ledger-web'],['09:41:03','compiled decisions/invoice-rounding.md · 4 claims'],['09:41:05','rival kept: totals round half-even vs half-up'],['11:12:40','compiled decisions/roof-quotes.md · 5 claims'],['11:12:41','wiki / v2 rebuilt · 14 versions']];
  var bars = pages.slice(0,10).map(function(t,i){ return '<div><span>'+t.slice(0,18)+'</span><i style="width:'+(claims[i]/5*65).toFixed(0)+'%"></i><b>'+claims[i]+'</b></div>'; }).join('');
  var pts = [2,3,5,6,8,9,11,12,13,14].map(function(v,i){ return (10+i*26)+','+(92-v*5.6); }).join(' ');
  host.innerHTML =
    '<section class="sb" aria-label="Second Brain">'+
    '<header class="sb-header"><div><h1>Second Brain</h1><small>COMPILED UNDERSTANDING / PANDO</small></div><div class="sb-status"><i></i>MEMORY ACTIVE</div><span class="sb-btn">Pause motion</span></header>'+
    '<div class="sb-toolbar"><nav><span class="selected">01 / Compiler</span><span>02 / Rival memory <b>2</b></span></nav><small>New and changed sources compile automatically while Pando is running</small></div>'+
    '<div class="sb-metrics">'+[['GRAPH','wiki / v2'],['NODES','41'],['EDGES','118'],['BUS READERS','3'],['DEPTH','3'],['T','0.0 s']].map(function(m){ return '<div><span>'+m[0]+'</span><strong>'+m[1]+'</strong></div>'; }).join('')+'</div>'+
    '<div class="sb-graph"><div class="sb-stage-label"><span>SOURCE FEATURES</span><span>COMPILATION BUS</span><span>LINKED WIKI / 14 VERSIONS</span></div>'+
    '<svg viewBox="0 0 1120 440" role="img" aria-label="14 compiled source versions flowing through Branch, Merge, Condition and Sort operations">'+svg+'</svg>'+
    '<div class="sb-stage-caption">14 source versions preserved. Waiting for a source change.</div></div>'+
    '<div class="sb-panels"><section><h3>RUN LOG <span>ACTIVE</span></h3><div class="sb-log">'+log.map(function(l){ return '<div><time>'+l[0]+'</time><span>'+l[1]+'</span></div>'; }).join('')+'</div></section>'+
    '<section><h3>GENERATOR <span>CLAIMS / SOURCE</span></h3><div class="sb-bars">'+bars+'</div></section>'+
    '<section><h3>GRAPH STAT <span>COMPILED VERSIONS</span></h3><svg viewBox="0 0 260 100" preserveAspectRatio="none" class="sb-chart" role="img" aria-label="Compiled source versions over time"><polyline class="sb-axis" points="10,92 250,92"/><polyline points="'+pts+'"/></svg></section></div>'+
    (compact ? '' : '<footer class="sb-footer"><div><strong>Second Brain</strong><small>the compiler doesn’t wait for you to ask. it’s already linking.</small></div><span>RAW PRESERVED · RIVALS RETAINED</span></footer>')+
    '</section>';
}
buildSecondBrain($('sbFilm'), true); buildSecondBrain($('sbSection'), false);