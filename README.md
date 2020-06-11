# What I learned
## HTML 

## CSS 
- Scroll on spacebar is a pretty standard action. If it's not working, try enabling scroll automatically. `overflow:scroll;`
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
- Responsive CSS Grid without Media Queries: 
Make the div a grid `display:grid;` and then give it some columns that will fit the space provided it responsively `grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));`
[Link to the video I got this from](https://www.youtube.com/watch?v=bam83Xv4VMA). 

- You can download fonts that a website uses in Firefox, as well as see what the font-weight, was that they used. Just go into the inspector tool, and then go to the 'Fonts' tab. 

To download it, click the copy/paste to clipboard icon beside the link under the font name, and paste it in a web search engine, and it should download instantly.

- How to re-arrange grid items in CSS Grid
1. Establish the grid: 

``` display: grid;
    grid-template-columns: 1fr 2fr 1fr; 
    grid-template-areas: "box2 box1 box3";
```

2. Give the grid items names and put them in however order you wish.
```
.griditem1 {
    grid-area: box1; 
}
.griditem2 {
    grid-area: box2; 
}
.griditem3 {
    grid-area: box3; 
}
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
 - Execute scripts based on screen size javascript
 ```
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


```