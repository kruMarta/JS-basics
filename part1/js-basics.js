function start(){
    checkLang();
    checkPosition();
}
function hideWithCSS(){
    let square = document.getElementById("task1-div");
    square.style.display = "none";
}

function deleteWithJS(){
    let square = document.getElementById("task1-div");
    square.remove();
}

function deleteJSandCSS(){
    let square = document.getElementById("task1-div");
    square.classList.add("hidden");
}

function ShowOrHide(){
    let square = document.getElementById("task1-div");
    if(square.style.display == "none"){
        square.style.display = "block";
        let button = document.getElementById("button4");
        button.innerText = "Hide";
    } else {
        square.style.display = "none"
        let button = document.getElementById("button4");
        button.innerHTML = "Show";
    }
}

function hideSquares(){
    let squares = document.querySelectorAll(".squares");
    squares.forEach(function(square) {
    if(square.style.display == "none"){
        square.style.display = "block";
        let button = document.getElementById("button5");
        button.innerText = "Hide squares";
    } else {
        square.style.display = "none"
        let button = document.getElementById("button5");
        button.innerHTML = "Show squares";
    }
});
}

function workWithSelectors(){
    let info = document.getElementById("input1").value;
    let elements = document.querySelectorAll(info);
    elements.forEach(function(element){
    if(element.style.display == "none"){
        element.style.display = "block";
    } else {
        element.style.display = "none"
    }
    });
}

let clickCount = 0;
function yellowSquare(){
    clickCount++;
    if (clickCount == 1){
        alert("Hello!");
    }
    else if(clickCount == 2){
        let square = document.getElementById("yellow-square");
        square.style.display = "none";
    }
}

function redSquare(){
    let square = document.getElementById("red-square");
    square.style.display = "block";
}

function redSquareNone(){
    let square = document.getElementById("red-square");
    square.style.display = "none";
}

const input = document.getElementById("input2");
const greenBox = document.getElementById("green-rect");

input.addEventListener("mouseover", () => {
    greenBox.style.display = "block";
});

input.addEventListener("input", () => {
    greenBox.style.display = "none";
});

function showImage(){
    let imgName = document.getElementById("input3").value;
    let image = new Image();
    image.src = imgName;
    let imageContainer = document.getElementById("image-div");
    imageContainer.appendChild(image);
}

function showImages(){
    let imgName = document.getElementById("textarea");
    let lines = imgName.value.split('\n');
    for (let i =0; i < lines.length; i++){
        let image = new Image();
        image.src = lines[i];
        let imageContainer = document.getElementById("image-div2");
        imageContainer.appendChild(image);
    }
}

function getPosition(event) {
    document.getElementById("x-coord").textContent = event.clientX;
    document.getElementById("y-coord").textContent = event.clientY;
}

function checkLang(){
    document.getElementById("language").textContent = navigator.language;
}

function checkPosition(){

    if (navigator.geolocation) {
        let postion = navigator.geolocation.getCurrentPosition(function(position){
        document.getElementById("latitude").textContent = position.coords.latitude ;
        document.getElementById("longitude").textContent =  position.coords.longitude;
        });
    } else { 
        document.getElementById("latitude").textContent = "Geolocation is not supported by this browser.";
        document.getElementById("longitude").textContent = "";
    }
}


// LockalStorage
document.addEventListener("DOMContentLoaded", function() {
var textarea1 = document.getElementById("textarea1");
var savedValue = localStorage.getItem("textarea1Value");
if (savedValue) {
    textarea1.value = savedValue;
}

textarea1.addEventListener("input", function() {
    var text = textarea1.value;
    localStorage.setItem("textarea1Value", text);
});
});


//Cookie
// Get the textarea element
var textarea = document.getElementById("textarea2");

// Load the saved value from the cookie
var savedValue = getCookie("textare2-value");

// Set the initial value of the textarea
if (savedValue) {
textarea.value = savedValue;
}

// Save the value to the cookie on input change
textarea.addEventListener("input", function() {
var text = textarea.value;
setCookie("textarea2-value", text, 365);
});

// Function to set a cookie
function setCookie(name, value, days) {
var expires = "";
if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
}
document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}


//SessionStorage
document.addEventListener("DOMContentLoaded", function() {
var textarea3 = document.getElementById("textarea3");
var savedValue = sessionStorage.getItem("textarea3Value");
if (savedValue) {
    textarea3.value = savedValue;
}

textarea3.addEventListener("input", function() {
    var text = textarea3.value;
    sessionStorage.setItem("textarea3Value", text);
});
});

window.onscroll = function(ev) {
    let button = document.querySelector('.up');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && window.scrollY != 0) {
        button.classList.add('animate');
    }
};

const greenDiv = document.getElementById("bigger");
const pinkDiv = document.getElementById("smaller");

greenDiv.addEventListener("click", () => {
      alert("Clicked bigger div");
});

pinkDiv.addEventListener("click", (event) =>{
    alert("Clicked smaller div")
    event.stopPropagation();
});

function moveUp(){
    var button = document.getElementById('up');
    button.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    });
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
    try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
    }));
    } catch(e) {}
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
function screenBlock(){
    let screen = document.getElementById("full-screen");
    screen.style.display = "block";
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    let screen = document.getElementById("full-screen");
    screen.style.display = "none";
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


var form = document.getElementById('myForm');
form.addEventListener('click', function(event) {
event.preventDefault();
});


var fileInput = document.getElementById('fileInput');
var fileLabel = document.querySelector('.file-label');
var fileUpload = document.querySelector('.file-upload');

fileInput.addEventListener('change', function() {
    console.log("change")
    var fileName = this.value.split('\\').pop();
    fileLabel.innerHTML = fileName;
});

fileUpload.addEventListener('dragover', function(e) {
    console.log("dragover")

    e.preventDefault();
    this.classList.add('dragover');
});

fileUpload.addEventListener('dragleave', function(e) {
    console.log("dragleave")

    e.preventDefault();
    this.classList.remove('dragover');
});

fileUpload.addEventListener('drop', function(e) {
    console.log("drop")
    
    e.preventDefault();
    this.classList.remove('dragover');
    fileInput.files = e.dataTransfer.files;
    var fileName = fileInput.value.split('\\').pop();
    fileLabel.innerHTML = fileName;
});