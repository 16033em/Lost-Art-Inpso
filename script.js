/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

//////////////////////////Drawing Page////////////////////////////////////
function drawingPgehome(){
  document.getElementById("lndPge").style.display="block";
  document.getElementById("drwPge").style.display="none";
}

function drawingPgeChng1(){
  document.getElementById("drwPge").style.display="block";
  document.getElementById("lndPge").style.display="none"; 
}

///////////////////////////Painting Page///////////////////////////////////
function paintingPgeChng1(){
  document.getElementById("pntPge").style.display="block";
  document.getElementById("lndPge").style.display="none";  
}

function paintingPgeHome(){
  document.getElementById("lndPge").style.display="block";
  document.getElementById("pntPge").style.display="none"; 
}

////////////////////////Mixed Materials Page//////////////////////////////////////
function mixedMatsPgeChng1(){
  document.getElementById("mmPge").style.display="block";
  document.getElementById("lndPge").style.display="none";  
}

function mixedMatsHome(){
  document.getElementById("lndPge").style.display="block";
  document.getElementById("mmPge").style.display="none";
}

//////////////////////////Water Color Page//////////////////////////////////////
function waterColorPgeChng1(){
  document.getElementById("wcPge").style.display="block";
  document.getElementById("lndPge").style.display="none";
}

function waterColorHome(){
  document.getElementById("lndPge").style.display="block";
  document.getElementById("wcPge").style.display="none";
}

///////////////////////////Oil Pastels Page/////////////////////////////////////
function oilPastelPgeChng1(){
  document.getElementById("opPge").style.display="block";
  document.getElementById("lndPge").style.display="none";
}

function oilPastelHome(){
  document.getElementById("lndPge").style.display="block";
  document.getElementById("opPge").style.display="none";
}

//////////////////////////////Tips To Start Page////////////////////////////////////
function TTSPgeChng1(){
  document.getElementById("ttsPge").style.display="block";
  document.getElementById("lndPge").style.display="none";
}

function TTSHome(){
  document.getElementById("lndPge").style.display="block";
  document.getElementById("ttsPge").style.display="none";
}