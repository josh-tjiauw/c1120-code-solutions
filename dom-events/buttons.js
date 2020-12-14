function handleClick(event) {
  console.log("button clicked");
  console.log(event);
  console.log(event.target);
}
var clickButton = document.querySelector('button.click-button')
clickButton.addEventListener("click", handleClick, false);

function handleMouseOver(event) {
  console.log("button hovered");
  console.log(event);
  console.log(event.target);
}
var hoverButton = document.querySelector("button.hover-button");
hoverButton.addEventListener("mouseover", handleMouseOver, false);

function handleDoubleClick(event) {
  console.log("button double-clicked");
  console.log(event);
  console.log(event.target);
}
var doubleClick = document.querySelector("button.double-click-button");
doubleClick.addEventListener("dblclick", handleDoubleClick, false);
