//matter/length bar
onclick=setInterval(move, 10)
  function move(){
   var length=gameData.OneDimeLength
   var matter=gameData.OneDimeParticle+(gameData.OneDimeAtom1*100)+(gameData.OneDimeAtom2*1e12)
    if(matter/length<=1){
      var elem = document.getElementById("myBar");
          width =((matter/length)*1000).toFixed(2)
          widthbartext=(width/10).toFixed(2)
          elem.style.width = width + "px";
          elem.innerHTML = widthbartext + "%";
        }
    }

//matter/length/2nd dimension bar
onclick=setInterval(movee, 10)
  function movee(){
   var matter2=(((Math.log10(gameData.OneDimeParticle+1+(gameData.OneDimeAtom1*100)+(gameData.OneDimeAtom2*1e12))/Math.log10(1.7e308))*100).toFixed(3))
      var elem = document.getElementById("myBar2");
          width =((matter2)*1000).toFixed(3)
          widthbartext=(width/10).toFixed(3)
          elem.style.width = width + "px";
          elem.innerHTML = widthbartext + "%";
        }

        onclick=setInterval(moveee, 10)
  function moveee(){
   var length2=(((Math.log10(gameData.OneDimeLength)/Math.log10(1.7e308))*100).toFixed(3))
      var elem = document.getElementById("myProgress2");
          width =((length2)*1000).toFixed(3)
          widthbartext=(width/10).toFixed(3)
          elem.style.width = width + "px";
          elem.innerHTML = widthbartext + "%";
        }