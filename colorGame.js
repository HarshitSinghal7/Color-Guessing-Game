var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var reset= document.getElementById("newColors");
var easyButton= document.getElementById("easyButton"); 
var hardButton= document.getElementById("hardButton");

colorDisplay.textContent = pickedColor;
applyColors();

easyButton.addEventListener("click", function()
   {
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    colors = generateRandomColor(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    document.querySelector("h1").style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }
        else
            squares[i].style.display ="none";
    }});

hardButton.addEventListener("click", function()
   {    messageDisplay.textContent = "";
      easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colors = generateRandomColor(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    applyColors();
    document.querySelector("h1").style.backgroundColor = "steelblue";
});


reset.addEventListener("click", function(){
    colors = generateRandomColor(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    applyColors();
    messageDisplay.textContent = "";
    this.textContent= "new colors";
    document.querySelector("h1").style.backgroundColor = "steelblue";
});

function applyColors(){
for(var i = 0; i < squares.length; i++)
{
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor)
        {
			messageDisplay.textContent = "Correct";
            changedColor(clickedColor);3
            document.querySelector("h1").style.backgroundColor = clickedColor;
            reset.textContent = "Play Again?";
		} else {
			this.style.backgroundColor= "#232323";
            messageDisplay.textContent = "Try again";
		}
	});
}
};

function changedColor(color)
{
    for( var i= 0; i<squares.length; i++)
        {
            squares[i].style.backgroundColor = color;
        }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
   
}

function generateRandomColor(num)
{   var arr=[];
    for(var i=0; i<num; i++)
        {
            arr.push(randomColor());
        }
 
    return arr;
}

function randomColor()
{
    var r= Math.floor(Math.random() *256);
    var g= Math.floor(Math.random() *256);
    var b= Math.floor(Math.random() *256);
    
    return "rgb(" + r + ", " + g + ", " + b +")";
}
