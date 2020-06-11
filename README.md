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
- Responsive CSS Grid without Media Queries: 
Make the div a grid `display:grid;` and then give it some columns that will fit the space provided it responsively `grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));`
[Link to the video I got this from](https://www.youtube.com/watch?v=bam83Xv4VMA). 

- You can download fonts that a website uses in Firefox, as well as see what the font-weight, was that they used. Just go into the inspector tool, and then go to the 'Fonts' tab. 

To download it, click the copy/paste to clipboard icon beside the link under the font name, and paste it in a web search engine, and it should download instantly.


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

```