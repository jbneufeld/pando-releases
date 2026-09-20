    var cx = W / 2 - cam.x * 0.1, cy = H * 0.46, floorY = narrow() ? 200 : 380 - cam.y;
    /* horizontals: depth rows sliding toward the camera */
    var off = ((cam.z % GAP) + GAP) % GAP;
    ctx.lineWidth = 1;
    for (var n = 0; n < 34; n++){ var d = n * GAP + off, sc = P / (P + d), y = cy + floorY * sc; if (y > H + 2) continue;
      var a = 0.09 * Math.pow(1 - n / 34, 1.6); ctx.strokeStyle = 'rgba(236,236,236,' + a.toFixed(3) + ')'; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    /* verticals converging on the horizon */
    var xoff = ((cam.x % GAP) + GAP) % GAP, far = P / (P + 34 * GAP), yNear = cy + floorY, yFar = cy + floorY * far;
    for (var m = -14; m <= 14; m++){ var x = m * GAP - xoff, x0 = cx + x, x1 = cx + x * far; var a2 = 0.07 * (1 - Math.min(1, Math.abs(m) / 14));
      ctx.strokeStyle = 'rgba(236,236,236,' + a2.toFixed(3) + ')'; ctx.beginPath(); ctx.moveTo(x0, yNear + 40); ctx.lineTo(x1, yFar); ctx.stroke(); }
    /* horizon fade */
    var g = ctx.createLinearGradient(0, cy - 40, 0, cy + floorY * 0.35); g.addColorStop(0, 'rgba(10,10,10,1)'); g.addColorStop(1, 'rgba(10,10,10,0)');
