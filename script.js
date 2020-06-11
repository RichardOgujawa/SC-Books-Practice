
  w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
  //Phone
  var phoneMin = 375;
  var phoneMax = 767; 

  //Tablet
  var tabletMin = 768;
  var tabletMax = 1024; 
  
  //Laptop
  var laptopMin = 1025; 
  var laptopMax = 1824;

  //TABLET
function moveDown() {
    if (w >= phoneMin && w <= phoneMax) {
        console.log('Mobile: It worked');
    }
    else if (w >= tabletMin && w <= tabletMax) {
        console.log('Tablet: It worked');
    }
    else if (w >= laptopMin && w <= laptopMax) {
        console.log('Laptop: It worked');
    }
}

        // var allDiv = document.getElementById('allDivs');
        
        // if (allDiv.style.transform == "translateY(0%)") 
        // {
        //     allDiv.style.transform = "translateY(-3.35%)"
        // }
        // else  {
        //     allDiv.style.transform = "translateY(0%)";
        // }
        // }