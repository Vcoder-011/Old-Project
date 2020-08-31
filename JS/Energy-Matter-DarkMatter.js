onclick=setInterval(energyClock, 100)
function energyClock(){
    gameData.OneDimeEnergy+=10*gameData.OneDimeGodAura+((gameData.OneDimeAtom1*100)*gameData.OneDimeGodAura)
    document.getElementById("EC").innerHTML="Energy Count: "+gameData.OneDimeEnergy+". You gain "+(10*10*gameData.OneDimeGodAura+((gameData.OneDimeAtom1*100)*gameData.OneDimeGodAura)).toFixed(1)+"E/s"
    document.getElementById("PercentTill2D").innerHTML="You are currently "+((Math.log10(gameData.OneDimeParticle+1+(gameData.OneDimeAtom1*100))/Math.log10(1.7e308))*100).toFixed(3)+"% until you can access the second dimension!"
}

onclick=setInterval(move, 10)
  function move(){
   var length=gameData.OneDimeLength
   var matter=gameData.OneDimeParticle+(gameData.OneDimeAtom1*100)
    if(matter/length<=1){
      var elem = document.getElementById("myBar");
          width =((matter/length)*1000).toFixed(2)
          widthbartext=(width/10).toFixed(2)
          elem.style.width = width + "px";
          elem.innerHTML = widthbartext + "%";
        }
    }
function gainOneDimeMatter(qty){
    if(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost*qty*bMM){
        if(((gameData.OneDimeAtom1*100)+qty*bMM+gameData.OneDimeParticle)<=gameData.OneDimeLength){
    gameData.OneDimeParticle+=gameData.OneDimeParticleGain*gameData.OneDimeGodPower*qty*bMM
    gameData.OneDimeEnergy-=gameData.OneDimeParticleCost*qty*bMM
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle.toFixed(0) +"("+((gameData.OneDimeAtom1*100)+gameData.OneDimeParticle).toFixed(0)+")"
    document.getElementById("CMC2").innerHTML="Particle Count: "+gameData.OneDimeParticle.toFixed(0) +"("+((gameData.OneDimeAtom1*100)+gameData.OneDimeParticle).toFixed(0)+")"
    document.getElementById("EC").innerHTML="Energy Count: "+gameData.OneDimeEnergy+". You gain "+((gameData.OneDimeGodAura*10*10)+gameData.OneDimeAtom1*100*gameData.OneDimeGodAura).toFixed(1)+"E/s"
        }
        else if(((gameData.OneDimeAtom1*100)+qty*bMM+gameData.OneDimeParticle)>=gameData.OneDimeLength){
            alert("You need to make the universe longer for you to produce more matter")
        }
    }
    else if(gameData.OneDimeEnergy<gameData.OneDimeParticleCost*qty*bMM){
        alert("You need more energy to make matter")
    }
}

var bMM=1
function buyMultiOneDimeMatter(){
var a=prompt("Please enter a positive whole number.")
if(a*1>=1){
    bMM=(a*1).toFixed(0)
    document.getElementById("1DParticle").innerHTML= (1*bMM).toFixed(0)+" Particle for "+(100*bMM).toFixed(0)+" energy"
    document.getElementById("1DParticle10").innerHTML= (10*bMM).toFixed(0)+" Particle for "+(1000*bMM).toFixed(0)+" energy"
    document.getElementById("1DParticle100").innerHTML= (100*bMM).toFixed(0)+" Particle for "+(10000*bMM).toFixed(0)+" energy"
    document.getElementById("1DbuyMultiParticle").innerHTML= "Buy Multi, Current Multi: "+bMM
}
else{
    alert("Please try again.")
}
}

onclick=setInterval(function(){if(gameData.OneDimeDM>1){
    gameData.OneDimeLength+=gameData.OneDimeDM
    document.getElementById("LoTU").innerHTML="Length of the Universe: "+gameData.OneDimeLength.toFixed(1) +" Meters. You gain "+(gameData.OneDimeDM).toFixed(1)+"M/s"
    }
},1000)

function gainOneDimeDMatter(qty){
    if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost*qty*bMDM){
        gameData.OneDimeDM+=gameData.OneDimeDMGain*gameData.OneDimeGodPower*qty*bMDM
        gameData.OneDimeEnergy-=gameData.OneDimeDMCost*qty*bMDM
    }
    else if(gameData.OneDimeEnergy<gameData.OneDimeDMCost*qty*bMDM){
        alert("You need more energy to make dark matter")
    }
    document.getElementById("dmtxt").innerHTML="Dark Matter, its what makes your universe expand. But there isn't enough. How about you make some!<br>Total Dark Matter: "+gameData.OneDimeDM.toFixed(1)
}

var bMDM=1
function buyMultiOneDimeDM(){
var a=prompt("Please enter a positive whole number.")
if(a*1>=1){
    bMBM=(a*1).toFixed(0)
    document.getElementById("1DDP").innerHTML= (bMBM/10).toFixed(0)+" Dark Matter for "+(100*bMBM).toFixed(0)+" energy"
    document.getElementById("1DDP10").innerHTML= (1*bMBM).toFixed(0)+" Dark Matter for "+(1000*bMBM).toFixed(0)+" energy"
    document.getElementById("1DDP100").innerHTML= (10*bMBM).toFixed(0)+" Dark Matter for "+(10000*bMBM).toFixed(0)+" energy"
    document.getElementById("1DbuyMultiDm").innerHTML= "Buy Multi, Current Multi: "+bMBM
}
else{
    alert("Please try again.")
}
}