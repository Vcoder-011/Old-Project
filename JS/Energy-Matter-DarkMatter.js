'use strict';

onclick=setInterval(energyClock, 100)
function energyClock(){
    gameData.OneDimeEnergy+=10*gameData.OneDimeGodAura+((gameData.OneDimeAtom1*100)*gameData.OneDimeGodAura)
    document.getElementById("EC").innerHTML="Energy Count: "+gameData.OneDimeEnergy+". You gain "+(10*10*gameData.OneDimeGodAura+((gameData.OneDimeAtom1*100)*gameData.OneDimeGodAura)).toFixed(1)+"E/s"
    document.getElementById("PercentTill2D").innerHTML="You are currently "+((Math.log10(gameData.OneDimeParticle+1+(gameData.OneDimeAtom1*100))/Math.log10(1.7e308))*100).toFixed(3)+"% until you can access the second dimension!"
}

/*onclick=setInterval(move(), 10)
function move() {
    var a=gameData.OneDimeParticle
    var b=gameData.OneDimeLength
    if(a/b<=1)
      var elem = document.getElementById("myBar");
          width =((a/b)*1000)
          elem.style.width = width + "px";
          elem.innerHTML = width/10 + "%";
        }
        
        save this until i find and answer
*/
function gainOneDimeMatter(qty){
    if(gameData.OneDimeEnergy>=gameData.OneDimeParticleCost*qty){
        if(gameData.OneDimeParticle<gameData.OneDimeLength){
    gameData.OneDimeParticle+=gameData.OneDimeParticleGain*gameData.OneDimeGodPower*qty
    gameData.OneDimeEnergy-=gameData.OneDimeParticleCost*qty
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle
    document.getElementById("EC").innerHTML="Energy Count: "+gameData.OneDimeEnergy+". You gain "+((gameData.OneDimeGodAura*10*10)+gameData.OneDimeAtom1*100*gameData.OneDimeGodAura).toFixed(1)+"E/s"
        }
        
        else if(gameData.OneDimeParticle>=gameData.OneDimeLength){
            alert("You need to make the universe longer for you to produce more matter")
        }
    }
    else if(gameData.OneDimeEnergy<gameData.OneDimeParticleCost*qty){
        alert("You need more energy to make matter")
    }
}

onclick=setInterval(function(){if(gameData.OneDimeDM>1){
    gameData.OneDimeLength+=gameData.OneDimeDM
    document.getElementById("LoTU").innerHTML="Length of the Universe: "+gameData.OneDimeLength.toFixed(1) +" Meters. You gain "+(gameData.OneDimeDM).toFixed(1)+"M/s"
    }
},1000)

function gainOneDimeDMatter(qty){
    if(gameData.OneDimeEnergy>=gameData.OneDimeDMCost*qty){
        gameData.OneDimeDM+=gameData.OneDimeDMGain*gameData.OneDimeGodPower*qty
        gameData.OneDimeEnergy-=gameData.OneDimeDMCost*qty
    }
    else if(gameData.OneDimeEnergy<gameData.OneDimeDMCost*qty){
        alert("You need more energy to make dark matter")
    }
    document.getElementById("dmtxt").innerHTML="Dark Matter, its what makes your universe expand. But there isn't enough. How about you make some!<br>Total Dark Matter: "+gameData.OneDimeDM.toFixed(1)
}
