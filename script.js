
  w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
  var phoneMin = 375;
  var phoneMax = 767; 

  var tabletMin = 768;
  var tabletMax = 1024; 
  
  var laptopMin = 1025; 
  var laptopMax = 1824;


  //TABLET
  function moveDown(){
  if ( w >= tabletMin && w <= tabletMax) {     
        console.log('It worked'); 
  }
  else {
    console.log('It did not work'); 
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