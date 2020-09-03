onclick=setInterval(greenboxes, 10)
function greenboxes(){
  //Matter \/ \/ \/
if((((gameData.OneDimeAtom2*1e12)+(gameData.OneDimeAtom1*100)+gameData.OneDimeParticle)+(1*gameData.bMM)<=gameData.OneDimeLength)&&(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost*(1*gameData.bMM))){
   var tag=document.getElementById("1DParticle")
   tag.style.background="green"
  }
else{
   var tag=document.getElementById("1DParticle")
   tag.style.background="red"
  }
if((((gameData.OneDimeAtom2*1e12)+(gameData.OneDimeAtom1*100)+gameData.OneDimeParticle)+(10*gameData.bMM)<=gameData.OneDimeLength)&&(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost*(10*gameData.bMM))){
    var tag=document.getElementById("1DParticle10")
    tag.style.background="green"
   }
else{
    var tag=document.getElementById("1DParticle10")
    tag.style.background="red"
   }
if((((gameData.OneDimeAtom2*1e12)+(gameData.OneDimeAtom1*100)+gameData.OneDimeParticle)+(100*gameData.bMM)<=gameData.OneDimeLength)&&(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost*(100*gameData.bMM))){
    var tag=document.getElementById("1DParticle100")
    tag.style.background="green"
   }
else{
    var tag=document.getElementById("1DParticle100")
    tag.style.background="red"
   }
//Dark Matter \/ \/ \/

if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost*(1*gameData.bMDM)){
  var tag=document.getElementById("1DDP")
  tag.style.background="green";
}
else{
  var tag=document.getElementById("1DDP")
  tag.style.background="red"
}
if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost*(10*gameData.bMDM)){
var tag=document.getElementById("1DDP10")
tag.style.background="green";
}
else{
var tag=document.getElementById("1DDP10")
tag.style.background="red"
}
if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost*(100*gameData.bMDM)){
var tag=document.getElementById("1DDP100")
tag.style.background="green";
}
else{
var tag=document.getElementById("1DDP100")
tag.style.background="red"
}

//Atom 1 \/ \/ \/
if(gameData.OneDimeParticle>=gameData.OneDimeAtom1Cost*(1*gameData.bMA)){
  var tag=document.getElementById("atom01")
  tag.style.background="green";
}
else{
  var tag=document.getElementById("atom01")
  tag.style.background="red"
}
if(gameData.OneDimeParticle>=gameData.OneDimeAtom1Cost*(10*gameData.bMA)){
var tag=document.getElementById("atom0110")
tag.style.background="green";
}
else{
var tag=document.getElementById("atom0110")
tag.style.background="red"
}
if(gameData.OneDimeParticle>=gameData.OneDimeAtom1Cost*(100*gameData.bMA)){
var tag=document.getElementById("atom01100")
tag.style.background="green";
}
else{
var tag=document.getElementById("atom01100")
tag.style.background="red"
}
//Atom 2 \/ \/ \/
if(gameData.OneDimeParticle>=gameData.OneDimeAtom2Cost*(1*gameData.bMA2)){
  var tag=document.getElementById("atom02")
  tag.style.background="green";
}
else{
  var tag=document.getElementById("atom02")
  tag.style.background="red"
}
if(gameData.OneDimeParticle>=gameData.OneDimeAtom2Cost*(10*gameData.bMA2)){
var tag=document.getElementById("atom0210")
tag.style.background="green";
}
else{
var tag=document.getElementById("atom0210")
tag.style.background="red"
}
if(gameData.OneDimeParticle>=gameData.OneDimeAtom2Cost*(100*gameData.bMA2)){
var tag=document.getElementById("atom02100")
tag.style.background="green";
}
else{
var tag=document.getElementById("atom02100")
tag.style.background="red"
}
}