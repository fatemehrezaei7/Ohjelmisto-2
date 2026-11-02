// Dom Events
function ChangeColor(obj) {
    obj.style.color = "peru";
}

document.getElementById("MyButton").onclick = ChangeBackgroundColor;

function ChangeBackgroundColor(){
    document.querySelector("body").style.background = "MediumOrchid"
}

function RemoveLetterFromH1() {
    var h1 = document.querySelector("h1");
    h1.textContent = h1.textContent.slice(0, -1);

}

function MouseOver(obj) {
    obj.innerHTML = "Get off mee!"
}

function MouseOut(obj) {
    obj.innerHTML = "Thank you! :)"
}