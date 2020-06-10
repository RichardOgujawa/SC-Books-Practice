# What I learned
## HTML 
- 
## CSS 
- To __centre align__ text just use: `text-align: center;`
For more information, check out [this article by Sara Cope](https://css-tricks.com/almanac/properties/t/text-align/).
- To **centre-align content** in the middle of a DIV use:
```
    //HOW TO POSITION IN THE VERTICAL MIDDLE OF DIV
    position: relative;
    top: 50%;
    transform: translateY(-50%);    
    //HOW TO POSITION IN THE HORIZONTAL MIDDLE OF DIV
    display: block; 
    margin:auto;

```
- Make sure you define the size or a dimension (height or width) of your element before using **float**, for example: 
```
height: 50%; 
float: right;
```

- To centre a link with text-align, you have to nest it in a paragraph tag, ex. : 

```
<p id="scholastic"> <a href="#"> Click here to check out Scholastic's Underland Chronicles website! </a> </p>
```

## JS
- When you're making trying to move something, use an if/else statement, and make sure the action you want to do when you first click the button is in the else statement, and the other action that would return it to it's initial state is in the if statement. 

For ex: 
###### CSS
`transform: translateY(-11.52%);`

###### JS
```
var allDiv = document.getElementById('allDivs');

if (allDiv.style.transform == "translateY(0%)") 
{
    allDiv.style.transform = "translateY(-11.52%)"
}
else  {
    allDiv.style.transform = "translateY(0%)";
}
```
