gameData={
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

onclick=setInterval(energyClock, 100)
function energyClock(){
    gameData.OneDimeEnergy+=10*gameData.OneDimeGodAura+((gameData.OneDimeAtom1*100)*gameData.OneDimeGodAura)
    document.getElementById("EC").innerHTML="Energy Count: "+gameData.OneDimeEnergy+". You gain "+(10*10*gameData.OneDimeGodAura+((gameData.OneDimeAtom1*100)*gameData.OneDimeGodAura)).toFixed(1)+"E/s"
    document.getElementById("PercentTill2D").innerHTML="You are currently "+((Math.log10(gameData.OneDimeParticle+1)/Math.log10(1.7e308))*100).toFixed(3)+"% until you can access the second dimension!"
}



function gainOneDimeMatter(){
    if(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost){
        if(gameData.OneDimeParticle<gameData.OneDimeLength){
    gameData.OneDimeParticle+=gameData.OneDimeParticleGain*gameData.OneDimeGodPower
    gameData.OneDimeEnergy-=gameData.OneDimeParticleCost
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle
    document.getElementById("EC").innerHTML="Energy Count: "+gameData.OneDimeEnergy+". You gain "+((gameData.OneDimeGodAura*10*10)+gameData.OneDimeAtom1*100*gameData.OneDimeGodAura).toFixed(1)+"E/s"
        }
        
        else if(gameData.OneDimeParticle>=gameData.OneDimeLength){
            alert("You need to make the universe longer for you to produce more matter")
        }
    }
    if(gameData.OneDimeEnergy<gameData.OneDimeParticleCost){
        alert("You need more enegy to make matter")
    }
}

function gainOneDimeMatter10(){
    if(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost*10){
        if(gameData.OneDimeParticle<gameData.OneDimeLength){
    gameData.OneDimeParticle+=gameData.OneDimeParticleGain*10*gameData.OneDimeGodPower
    gameData.OneDimeEnergy-=gameData.OneDimeParticleCost*10
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle
    document.getElementById("EC").innerHTML="Energy Count: "+gameData.OneDimeEnergy+". You gain "+((gameData.OneDimeGodAura*10*10)+gameData.OneDimeAtom1*100*gameData.OneDimeGodAura).toFixed(1)+"E/s"
        }
        
        else if(gameData.OneDimeParticle>=gameData.OneDimeLength){
            alert("You need to make the universe longer for you to produce more matter")
        }
    }
    if(gameData.OneDimeEnergy<gameData.OneDimeParticleCost){
        alert("You need more enegy to make matter")
    }
}

function gainOneDimeMatter100(){
    if(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost*100){
        if(gameData.OneDimeParticle<gameData.OneDimeLength){
    gameData.OneDimeParticle+=gameData.OneDimeParticleGain*100*gameData.OneDimeGodPower
    gameData.OneDimeEnergy-=gameData.OneDimeParticleCost*100
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle
    document.getElementById("EC").innerHTML="Energy Count: "+gameData.OneDimeEnergy+". You gain "+((gameData.OneDimeGodAura*10*10)+gameData.OneDimeAtom1*100*gameData.OneDimeGodAura).toFixed(1)+"E/s"
        }
        
        else if(gameData.OneDimeParticle>=gameData.OneDimeLength){
            alert("You need to make the universe longer for you to produce more matter")
        }
    }
    if(gameData.OneDimeEnergy<gameData.OneDimeParticleCost){
        alert("You need more enegy to make matter")
    }
}

onclick=setInterval(function(){if(gameData.OneDimeDM>1){
    gameData.OneDimeLength+=gameData.OneDimeDM
    document.getElementById("LoTU").innerHTML="Length of the Universe: "+gameData.OneDimeLength.toFixed(1) +" Meters. You gain "+(gameData.OneDimeDM).toFixed(1)+"M/s"
    }
},1000)

function gainOneDimeDMatter(){
    if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost){
        gameData.OneDimeDM+=gameData.OneDimeDMGain*gameData.OneDimeGodPower
        gameData.OneDimeEnergy-=gameData.OneDimeDMCost
    }
    else if(gameData.OneDimeEnergy<gameData.OneDimeDMCost){
        alert("You need more energy to make dark matter")
    }
    document.getElementById("dmtxt").innerHTML="Dark Matter, its what makes your universe expand. But there isn't enough. How about you make some!<br>Total Dark Matter: "+gameData.OneDimeDM.toFixed(1)
}

function gainOneDimeDMatter10(){
    if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost*10){
        gameData.OneDimeDM+=gameData.OneDimeDMGain*10*gameData.OneDimeGodPower
        gameData.OneDimeEnergy-=gameData.OneDimeDMCost*10
    }
    else if(gameData.OneDimeEnergy<gameData.OneDimeDMCost*10){
        alert("You need more energy to make dark matter")
    }
    document.getElementById("dmtxt").innerHTML="Dark Matter, its what makes your universe expand. But there isn't enough. How about you make some!<br>Total Dark Matter: "+gameData.OneDimeDM.toFixed(1)
}

function gainOneDimeDMatter100(){
    if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost*100){
        gameData.OneDimeDM+=gameData.OneDimeDMGain*100*gameData.OneDimeGodPower
        gameData.OneDimeEnergy-=gameData.OneDimeDMCost*100
    }
    else if(gameData.OneDimeEnergy<gameData.OneDimeDMCost*100){
        alert("You need more energy to make dark matter")
    }
    document.getElementById("dmtxt").innerHTML="Dark Matter, its what makes your universe expand. But there isn't enough. How about you make some!<br>Total Dark Matter: "+gameData.OneDimeDM.toFixed(1)
}

function formAtom1(){
    if(gameData.OneDimeParticle>=gameData.OneDimeAtom1Cost){
        gameData.OneDimeAtom1+=1
        gameData.OneDimeParticle-=gameData.OneDimeAtom1Cost
    }
    else if(gameData.OneDimeParticle<gameData.OneDimeDMCost){
        alert("You need more particals to make that atom")
    }
    document.getElementById("atomtotal").innerHTML="Total Atoms: "+gameData.OneDimeAtom1
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle
}

function formAtom110(){
    if(gameData.OneDimeParticle>=gameData.OneDimeAtom1Cost*10){
        gameData.OneDimeAtom1+=1*10
        gameData.OneDimeParticle-=gameData.OneDimeAtom1Cost*10
    }
    else if(gameData.OneDimeParticle<gameData.OneDimeDMCost*10){
        alert("You need more particals to make that atom")
    }
    document.getElementById("atomtotal").innerHTML="Total Atoms: "+gameData.OneDimeAtom1
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle
}

function formAtom1100(){
    if(gameData.OneDimeParticle>=gameData.OneDimeAtom1Cost*100){
        gameData.OneDimeAtom1+=1*100
        gameData.OneDimeParticle-=gameData.OneDimeAtom1Cost*100
    }
    else if(gameData.OneDimeParticle<gameData.OneDimeDMCost*100){
        alert("You need more particals to make that atom")
    }
    document.getElementById("atomtotal").innerHTML="Total Atoms: "+gameData.OneDimeAtom1
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle
}

function Atom1Rename(){
var atomprompt1=prompt("What would you like to name your atom?")
document.getElementById("atom1").innerHTML=atomprompt1+" is a very small line of particles that is big enough to casue the formatiln of gravity. You can use this gravity and turn it into energy. Each atom prduced 100E/s"
document.getElementById("atom01").innerHTML="Form 1 "+atomprompt1+" for 100 particles"
document.getElementById("atom0110").innerHTML="Form 10"+atomprompt1+" for 1,000 particles"
document.getElementById("atom01100").innerHTML="Form 100"+atomprompt1+" for 10,000 particles"
document.getElementById("atom001").innerHTML="Rename "+atomprompt1
}