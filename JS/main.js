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
OneDimeAtom2Cost:1e12
}

bMM=1
bMDM=1
bMA=1
bMA2=1

onclick=setInterval(greenboxes, 10)
function greenboxes(){
  //Matter \/ \/ \/
  if(gameData.OneDimeParticle+(gameData.OneDimeAtom1*100)+(1*bMM)<=gameData.OneDimeLength){
    if(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost*(1*bMM)){
    var tag=document.getElementById("1DParticle")
    tag.style.background="green"
  }
  else{
    var tag=document.getElementById("1DParticle")
    tag.style.background="red"
  }
}
if(gameData.OneDimeParticle+(gameData.OneDimeAtom1*100)+(10*bMM)<=gameData.OneDimeLength){
   if(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost*(10*bMM)){
   var tag=document.getElementById("1DParticle10")
   tag.style.background="green"
  }
  else{
   var tag=document.getElementById("1DParticle10")
   tag.style.background="red"
  }
}
if(((gameData.OneDimeAtom1*100)+100*bMM+gameData.OneDimeParticle)<=gameData.OneDimeLength){
  if(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost*(100*bMM)){
  var tag=document.getElementById("1DParticle100")
  tag.style.background="green"
}
else{
  var tag=document.getElementById("1DParticle100")
  tag.style.background="red"
}
}
//Dark Matter \/ \/ \/

if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost*(1*bMDM)){
  var tag=document.getElementById("1DDP")
  tag.style.background="green";
}
else{
  var tag=document.getElementById("1DDP")
  tag.style.background="red"
}
if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost*(10*bMDM)){
var tag=document.getElementById("1DDP10")
tag.style.background="green";
}
else{
var tag=document.getElementById("1DDP10")
tag.style.background="red"
}
if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost*(100*bMDM)){
var tag=document.getElementById("1DDP100")
tag.style.background="green";
}
else{
var tag=document.getElementById("1DDP100")
tag.style.background="red"
}

//Atom 1 \/ \/ \/
if(gameData.OneDimeParticle>=gameData.OneDimeAtom1Cost*(1*bMA)){
  var tag=document.getElementById("atom01")
  tag.style.background="green";
}
else{
  var tag=document.getElementById("atom01")
  tag.style.background="red"
}
if(gameData.OneDimeParticle>=gameData.OneDimeAtom1Cost*(10*bMA)){
var tag=document.getElementById("atom0110")
tag.style.background="green";
}
else{
var tag=document.getElementById("atom0110")
tag.style.background="red"
}
if(gameData.OneDimeParticle>=gameData.OneDimeAtom1Cost*(100*bMA)){
var tag=document.getElementById("atom01100")
tag.style.background="green";
}
else{
var tag=document.getElementById("atom01100")
tag.style.background="red"
}
//Atom 2 \/ \/ \/
if(gameData.OneDimeParticle>=gameData.OneDimeAtom2Cost*(1*bMA2)){
  var tag=document.getElementById("atom02")
  tag.style.background="green";
}
else{
  var tag=document.getElementById("atom02")
  tag.style.background="red"
}
if(gameData.OneDimeParticle>=gameData.OneDimeAtom2Cost*(10*bMA2)){
var tag=document.getElementById("atom0210")
tag.style.background="green";
}
else{
var tag=document.getElementById("atom0210")
tag.style.background="red"
}
if(gameData.OneDimeParticle>=gameData.OneDimeAtom2Cost*(100*bMA2)){
var tag=document.getElementById("atom02100")
tag.style.background="green";
}
else{
var tag=document.getElementById("atom02100")
tag.style.background="red"
}
}

function tab(tab) {
    document.getElementById("mainMenu").style.display = "none"
    document.getElementById("atomMenu").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
  }
  tab("mainMenu")