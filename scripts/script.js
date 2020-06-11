
//THE REASON WHY THIS ISN'T WORKING PROPERLY IS BECAUSE AT A CERTAIN POINT THE BOOK'S DIV COVERS THE MENU BUTTON ICON 
 
 w = document.documentElement.clientWidth 
//SCREEN SIZES// 

  //Phone
  var phoneMin = 375;
  var phoneMax = 500; 

  //Tablet
  var tabletMin = 768;
  var tabletMax = 1024; 
  
  //Laptop
  var laptopMin = 1025; 
  var laptopMax = 1824;

//VARIABLES
  var allDiv = document.getElementById('allDivs');

  //TABLET
function moveDown() {
    if (w >= phoneMin && w <= phoneMax) {
        if (allDiv.style.transform == "translateY(0%)") 
        {
            allDiv.style.transform = "translateY(-3.35%)"
        }
        else  {
            allDiv.style.transform = "translateY(0%)";
        }
    }
    else if (w >= tabletMin && w <= tabletMax) {
        if (allDiv.style.transform == "translateY(0%)") 
        {
            allDiv.style.transform = "translateY(-5.45%)"
        }
        else  {
            allDiv.style.transform = "translateY(0%)";
        }    
    }

}

        