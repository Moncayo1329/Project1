window.onresize = updateScreen;
window.onload = updateScreen;

function updateScreen() {
    var myWidth = window.innerWidth;
    document.getElementById("size").innerHTML = "Width: " + myWidth + "px";
}
