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
OneDimeAtom1Cost:100
}

function tab(tab) {
    document.getElementById("mainMenu").style.display = "none"
    document.getElementById("atomMenu").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
  }
  tab("mainMenu")