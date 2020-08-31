function formAtom1(qty){
    if(gameData.OneDimeParticle>=gameData.OneDimeAtom1Cost*qty){
        gameData.OneDimeAtom1+=1*qty
        gameData.OneDimeParticle-=gameData.OneDimeAtom1Cost*qty
    }
    else{
        alert("You need more particles to make that atom")
    }
    document.getElementById("atomtotal").innerHTML="Total Atoms: "+gameData.OneDimeAtom1
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle.toFixed(0) +"("+((gameData.OneDimeAtom1*100)+gameData.OneDimeParticle).toFixed(0)+")"
    document.getElementById("CMC2").innerHTML="Particle Count: "+gameData.OneDimeParticle.toFixed(0) +"("+((gameData.OneDimeAtom1*100)+gameData.OneDimeParticle).toFixed(0)+")"
}

function Atom1Rename(){
var atomprompt1=prompt("What would you like to name your atom?")
document.getElementById("atom1").innerHTML=atomprompt1+" is a very small line of particles that is big enough to casue the formatiln of gravity. You can use this gravity and turn it into energy. Each atom produces 100E/s"
document.getElementById("atom01").innerHTML="Form 1 "+atomprompt1+" for 100 particles"
document.getElementById("atom0110").innerHTML="Form 10 "+atomprompt1+" for 1,000 particles"
document.getElementById("atom01100").innerHTML="Form 100 "+atomprompt1+" for 10,000 particles"
document.getElementById("atom001").innerHTML="Rename "+atomprompt1
}

