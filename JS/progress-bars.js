//matter/length bar
onclick=setInterval(move, 10)
  function move(){
   var length=gameData.OneDimeLength
   var matter=gameData.OneDimeParticle+(gameData.OneDimeAtom1*100)+(gameData.OneDimeAtom2*1e12)
    if(matter/length<=1){
      var elem = document.getElementById("myBar");
         var width =((matter/length)*1000).toFixed(2)
         var widthbartext=(width/10).toFixed(2)
          elem.style.width = width + "px";
          elem.innerHTML = widthbartext + "%";
        }
    }

//matter/length/2nd dimension bar
onclick=window.setInterval(mova, 10)
  function mova(){
   var matter2=(((Math.log10(gameData.OneDimeParticle+1+(gameData.OneDimeAtom1*100)+(gameData.OneDimeAtom2*1e12))/Math.log10(1.7e308))*100).toFixed(3)) 
   var elem = document.getElementById("myBar2");
          var width =(matter2*10).toFixed(3)
         var widthbartext=(width/10).toFixed(3)
          elem.style.width = width + "px";
          elem.innerHTML = widthbartext + "%";
        }

        onclick=window.setInterval(movy, 10)
  function movy(){
   var length2=(((Math.log10(gameData.OneDimeLength)/Math.log10(1.7e308))*100).toFixed(3)) 
   var elem = document.getElementById("myProgress2");
          var width =(length2*10).toFixed(3)
          elem.style.width = width + "px"
        }