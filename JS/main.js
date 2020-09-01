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
bMA2:1
}

function tab(tab) {
    document.getElementById("mainMenu").style.display = "none"
    document.getElementById("atomMenu").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
  }
  tab("mainMenu")