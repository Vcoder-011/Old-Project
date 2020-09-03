var gameData={
OneDimeParticle:0,
OneDimeParticleGain:1,
OneDimeParticleCost:100,
OneDimeEnergy:0,
OneDimeDM:1,
OneDimeDMCost:100,
OneDimeDMGain:0.1,
OneDimeLength:100,
OneDimeGodPower:1,
OneDimeGodAura:1,
OneDimeAtom1:0,
OneDimeAtom1Cost:100,
OneDimeAtom2:0,
OneDimeAtom2Cost:1e12,
bMM:1,
bMDM:1,
bMA:1,
bMA2:1,
htv:0,
countUp:true
}

function tab(tab) {
    document.getElementById("mainMenu").style.display = "none"
    document.getElementById("atomMenu").style.display = "none"
    document.getElementById("godParticleMenu").style.display="none"
    document.getElementById(tab).style.display = "inline-block"
  }
  tab("mainMenu")

  onclick=setInterval(tabClock, 100)
  function tabClock(){
    document.getElementById("hGP").style.visibility="hidden"
    if ((gameData.OneDimeParticle+1+(gameData.OneDimeAtom1*100)+(gameData.OneDimeAtom2*1e12))>1e50)
    document.getElementById("hGP").style.visibility="visible"
  }

  onclick=setInterval(backgroundClock, 100)

  function backgroundClock(){
    if (gameData.countUp){
      gameData.htv+=0.1
      if (gameData.htv>= 40)
        gameData.countUp = false;}
    else{
      gameData.htv-=0.1
      if (gameData.htv <= 0)
        gameData.countUp = true;}
  
  var ht=50+gameData.htv
  document.getElementById("myBody").style.background= "linear-gradient(to bottom, #3c3f41 "+ht+"%, #750000 100%)";
  }

