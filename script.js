
function moveDown(){
var allDiv = document.getElementById('allDivs');

if (allDiv.style.transform == "translateY(0%)") 
{
    allDiv.style.transform = "translateY(-3.7%)"
}
else  {
    allDiv.style.transform = "translateY(0%)";
}
}

