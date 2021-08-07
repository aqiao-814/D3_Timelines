function toggle(draw) {
  if (draw === 'select'){
    d3.select("svg").remove();
  }
  else if (draw === 'BTC'){
    d3.select("svg").remove();
    return drawBTC();
  }
  else if (draw === 'DOGE'){
    d3.select("svg").remove();
    return drawDOGE();
  }
  else if (draw === 'GME'){
    d3.select("svg").remove();
    return drawGME();
  }
  else if (draw === 'TSLA'){
    d3.select("svg").remove();
    return drawTSLA();
  }
}