// Atom 1
function formAtom1(qty){
    if(gameData.OneDimeParticle>=gameData.OneDimeAtom1Cost*qty*bMA){
        gameData.OneDimeAtom1+=1*qty*bMA
        gameData.OneDimeParticle-=gameData.OneDimeAtom1Cost*qty*bMA
    }
    else{
        alert("You need more particles to make that atom")
    }
    document.getElementById("atomtotal").innerHTML="Total Atoms: "+gameData.OneDimeAtom1.toExponential(1)
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle.toExponential(1) +"("+((gameData.OneDimeAtom2*1e12)+(gameData.OneDimeAtom1*100)+gameData.OneDimeParticle).toExponential(1)+")"
    document.getElementById("CMC2").innerHTML="Particle Count: "+gameData.OneDimeParticle.toExponential(1) +"("+((gameData.OneDimeAtom2*1e12)+(gameData.OneDimeAtom1*100)+gameData.OneDimeParticle).toExponential(1)+")"
}

var bMA=1
function buyMultiOneAtom(){
var a=prompt("Please enter a positive whole number.")
if(a*1>=1){
    bMA=(a*1).toFixed(0)
    document.getElementById("atom01").innerHTML= "Form "+(1*bMA).toExponential(1)+" "+atomprompt1+" for "+(100*bMA).toExponential(1)+" particles"
    document.getElementById("atom0110").innerHTML= "Form "+(10*bMA).toExponential(1)+" "+atomprompt1+" for "+(1000*bMA).toExponential(1)+" particles"
    document.getElementById("atom01100").innerHTML= "Form "+(100*bMA).toExponential(1)+" "+atomprompt1+" for "+(10000*bMA).toExponential(1)+" particles"
    document.getElementById("bmatom").innerHTML= "Buy Multi, Current Multi: "+(1*bMA).toExponential(1)
}
else{
    alert("Please try again.")
}
}
var atomprompt1="Atom 1"
function Atom1Rename(){
atomprompt1=prompt("What would you like to name your atom?")
document.getElementById("atom1").innerHTML=atomprompt1+" is a very small line of particles that is big enough to casue the formatiln of gravity. You can use this gravity and turn it into energy. Each atom produces 100E/s"
document.getElementById("atom01").innerHTML="Form "+(1*bMA).toExponential(1)+" "+atomprompt1+" for "+(100*bMA).toExponential(1)+" particles"
document.getElementById("atom0110").innerHTML="Form "+(10*bMA).toExponential(1)+" "+atomprompt1+" for "+(1000*bMA).toExponential(1)+" particles"
document.getElementById("atom01100").innerHTML="Form "+(100*bMA).toExponential(1)+" "+atomprompt1+" for "+(10000*bMA).toExponential(1)+" particles"
document.getElementById("atom001").innerHTML="Rename "+atomprompt1
}
//Atom 2

onclick=setInterval(formingAtom1, 100)
function formingAtom1(){
    if(((gameData.OneDimeAtom2*1e12)+(gameData.OneDimeAtom1*100)+gameData.OneDimeParticle)<=gameData.OneDimeLength){
    gameData.OneDimeAtom1+=1e9*gameData.OneDimeAtom2
    document.getElementById("atomtotal").innerHTML="Total Atoms: "+gameData.OneDimeAtom1.toExponential(1)
    }
}

function formAtom2(qty){
    if(gameData.OneDimeParticle>=gameData.OneDimeAtom2Cost*qty*bMA2){
        gameData.OneDimeAtom2+=1*qty*bMA2
        gameData.OneDimeParticle-=gameData.OneDimeAtom2Cost*qty*bMA2
    }
    else{
        alert("You need more particles to make that atom")
    }
    document.getElementById("atomtotal2").innerHTML="Total Atoms: "+gameData.OneDimeAtom2.toExponential(1)
    document.getElementById("CMC").innerHTML="Particle Count: "+gameData.OneDimeParticle.toExponential(1) +"("+((gameData.OneDimeAtom2*1e12)+(gameData.OneDimeAtom1*100)+gameData.OneDimeParticle).toExponential(1)+")"
    document.getElementById("CMC2").innerHTML="Particle Count: "+gameData.OneDimeParticle.toExponential(1) +"("+((gameData.OneDimeAtom2*1e12)+(gameData.OneDimeAtom1*100)+gameData.OneDimeParticle).toExponential(1)+")"
}

var bMA2=1
function buyMultiOneAtom2(){
var a=prompt("Please enter a positive whole number.")
if(a*1>=1){
    bMA2=(a*1).toFixed(0)
    document.getElementById("atom02").innerHTML= "Form "+(1*bMA2).toExponential(1)+" "+atomprompt2+" for "+(1e12*bMA2).toExponential(1)+" particles"
    document.getElementById("atom0210").innerHTML= "Form "+(10*bMA2).toExponential(1)+" "+atomprompt2+" for "+(1e13*bMA2).toExponential(1)+" particles"
    document.getElementById("atom02100").innerHTML= "Form "+(100*bMA2).toExponential(1)+" "+atomprompt2+" for "+(1e14*bMA2).toExponential(1)+" particles"
    document.getElementById("bmatom2").innerHTML= "Buy Multi, Current Multi: "+(1*bMA2).toExponential(1)
}
else{
    alert("Please try again.")
}
}
var atomprompt2="Atom 2"
function Atom2Rename(){
atomprompt2=prompt("What would you like to name your atom?")
document.getElementById("atom2").innerHTML=atomprompt1+" is a very small line of particles that is big enough to casue the formatiln of gravity. You can use this gravity and turn it into energy. Each atom produces 100E/s"
document.getElementById("atom02").innerHTML="Form "+(1*bMA2).toExponential(1)+" "+atomprompt2+" for "+(1e12*bMA2).toExponential(1)+" particles"
document.getElementById("atom0210").innerHTML="Form "+(10*bMA2).toExponential(1)+" "+atomprompt2+" for "+(1e13*bMA2).toExponential(1)+" particles"
document.getElementById("atom02100").innerHTML="Form "+(100*bMA2).toExponential(1)+" "+atomprompt2+" for "+(1e14*bMA2).toExponential(1)+" particles"
document.getElementById("atom002").innerHTML="Rename "+atomprompt2
}
