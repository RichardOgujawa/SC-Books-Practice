function moveDown(){
var allDiv = document.getElementById('allDivs');

if (allDiv.style.transform == "translateY(0%)") 
{
    allDiv.style.transform = "translateY(-11.52%)"
}
else  {
    allDiv.style.transform = "translateY(0%)";
}
}