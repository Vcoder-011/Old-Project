//Energy
onclick=setInterval(energyClock, 100)
function energyClock(){
    gameData.OneDimeEnergy+=10*gameData.OneDimeGodAura+((gameData.OneDimeAtom1*100)*gameData.OneDimeGodAura)
    document.getElementById("EC").innerHTML="Energy Count: "+gameData.OneDimeEnergy.toExponential(1)+". You gain "+(10*10*gameData.OneDimeGodAura+((gameData.OneDimeAtom1*100)*gameData.OneDimeGodAura)).toExponential(1)+"E/s"
    document.getElementById("PercentTill2D").innerHTML="You are currently "+((Math.log10(gameData.OneDimeParticle+1+(gameData.OneDimeAtom1*100)+(gameData.OneDimeAtom2*1e12))/Math.log10(1.7e308))*100).toFixed(3)+"% until you can access the second dimension!"
}
//matter
function gainOneDimeMatter(qty){
    if(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost*qty*gameData.bMM){
        if(((gameData.OneDimeAtom1*100)+qty*gameData.bMM+gameData.OneDimeParticle)<=gameData.OneDimeLength){
    gameData.OneDimeParticle+=gameData.OneDimeParticleGain*gameData.OneDimeGodPower*qty*gameData.bMM
    gameData.OneDimeEnergy-=gameData.OneDimeParticleCost*qty*gameData.bMM
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle.toExponential(1) +"("+((gameData.OneDimeAtom2*1e12)+(gameData.OneDimeAtom1*100)+gameData.OneDimeParticle).toExponential(1)+")"
    document.getElementById("CMC2").innerHTML="Particle Count: "+gameData.OneDimeParticle.toExponential(1) +"("+((gameData.OneDimeAtom2*1e12)+(gameData.OneDimeAtom1*100)+gameData.OneDimeParticle).toExponential(1)+")"
    document.getElementById("EC").innerHTML="Energy Count: "+gameData.OneDimeEnergy.toExponential(1)+". You gain "+((gameData.OneDimeGodAura*10*10)+gameData.OneDimeAtom1*100*gameData.OneDimeGodAura).toExponential(1)+"E/s"
        }
        else if(((gameData.OneDimeAtom1*100)+qty*gameData.bMM+gameData.OneDimeParticle)>=gameData.OneDimeLength){
            alert("You need to make the universe longer for you to produce more matter")
        }
    }
    else if(gameData.OneDimeEnergy<gameData.OneDimeParticleCost*qty*gameData.bMM){
        alert("You need more energy to make matter")
    }
}

function buyMultiOneDimeMatter(){
var a=prompt("Please enter a positive whole number.")
if(a*1>=1){
    gameData.bMM=(a*1).toFixed(0)
    document.getElementById("1DParticle").innerHTML= (1*gameData.bMM).toExponential(1)+" Particle for "+(100*gameData.bMM).toExponential(1)+" energy"
    document.getElementById("1DParticle10").innerHTML= (10*gameData.bMM).toExponential(1)+" Particle for "+(1000*gameData.bMM).toExponential(1)+" energy"
    document.getElementById("1DParticle100").innerHTML= (100*gameData.bMM).toExponential(1)+" Particle for "+(10000*gameData.bMM).toExponential(1)+" energy"
    document.getElementById("1DbuyMultiParticle").innerHTML= "Buy Multi, Current Multi: "+(1*gameData.bMM).toExponential(1)
}
else{
    alert("Please try again.")
}
}
//Dark Matter
onclick=setInterval(function(){if(gameData.OneDimeDM>1){
    gameData.OneDimeLength+=gameData.OneDimeDM
    document.getElementById("LoTU").innerHTML="Length of the Universe: "+gameData.OneDimeLength.toExponential(1) +" Meters. You gain "+(gameData.OneDimeDM).toExponential(1)+"M/s"
    }
},1000)

function gainOneDimeDMatter(qty){
    if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost*qty*gameData.bMDM){
        gameData.OneDimeDM+=gameData.OneDimeDMGain*gameData.OneDimeGodPower*qty*gameData.bMDM
        gameData.OneDimeEnergy-=gameData.OneDimeDMCost*qty*gameData.bMDM
    }
    else if(gameData.OneDimeEnergy<gameData.OneDimeDMCost*qty*gameData.bMDM){
        alert("You need more energy to make dark matter")
    }
    document.getElementById("dmtxt").innerHTML="Dark Matter, its what makes your universe expand. But there isn't enough. How about you make some!<br>Total Dark Matter: "+gameData.OneDimeDM.toExponential(1)
}

function buyMultiOneDimeDM(){
var a=prompt("Please enter a positive whole number.")
if(a*1>=1){
    gameData.bMDM=(a*1).toFixed(0)
    document.getElementById("1DDP").innerHTML= (0.1*gameData.bMDM).toExponential(1)+" Dark Matter for "+(100*gameData.bMDM).toExponential(1)+" energy"
    document.getElementById("1DDP10").innerHTML= (1*gameData.bMDM).toExponential(1)+" Dark Matter for "+(1000*gameData.bMDM).toExponential(1)+" energy"
    document.getElementById("1DDP100").innerHTML= (10*gameData.bMDM).toExponential(1)+" Dark Matter for "+(10000*gameData.bMDM).toExponential(1)+" energy"
    document.getElementById("1DbuyMultiDm").innerHTML= "Buy Multi, Current Multi: "+(1*gameData.bMDM).toExponential(1)
}
else{
    alert("Please try again.")
}
}