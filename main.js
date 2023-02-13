// JS file for ic-06


//Event handler for click
function buttonClicked(line)
{
	document.getElementbyId("line").style.color = "red"
}

// add event listener for line
document.getElementbyId("lineButton")
.addEventListener("click", buttonClicked);

// add mouseover and mouseout
function mouseOver()
{
	document.getElementbyId("circle").style.fill = "orange";
}

function mouseOut()
{
	document.getElementbyId("circle".style.fill = "limegreen")

}
// add event listener for circle
document.getElementbyId("circle").addEventListener("mouseover",mouseOver);
document.getElementbyId("circle").addEventListener("mouseout",mouseOut);