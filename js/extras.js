function toggle(draw) {
  if (draw == 'select'){
  }
  else if (draw === 'BTC'){
    return drawBTC();
  }
  else if (draw === 'DOGE'){
    return drawDOGE();
  }
  else if (draw === 'GME'){
    return drawGME();
  }
  else if (draw === 'TSLA'){
    return drawTSLA();
  }
}