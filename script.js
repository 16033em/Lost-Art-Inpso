/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

//////////////////////////Drawing Page////////////////////////////////////
//swaps from landing to Drawing
function drawingPgehome(){
  document.getElementById("lndPge").style.display="block";
  document.getElementById("drwPge").style.display="none";
}

//swaps from Drawing to Landing
function drawingPgeChng1(){
  document.getElementById("drwPge").style.display="block";
  document.getElementById("lndPge").style.display="none"; 
}

//swaps from Drawing to Painting
function drwToPnt(){
  document.getElementById("pntPge").style.display="block";
  document.getElementById("drwPge").style.display="none"; 
} 

//swaps from Drawing to Mixed Materials
function drwToMM(){
  document.getElementById("mmPge").style.display="block";
  document.getElementById("drwPge").style.display="none"; 
}

//swaps from Drawing to Water Color
function drwToWC(){
  document.getElementById("wcPge").style.display="block";
  document.getElementById("drwPge").style.display="none"; 
}

//swaps from Drawing to Oil Pastels
function drwToOP(){
  document.getElementById("opPge").style.display="block";
  document.getElementById("drwPge").style.display="none";  
}

//swaps from Drawing to Tips To Start
function drwToTTS(){
  document.getElementById("ttsPge").style.display="block";
  document.getElementById("drwPge").style.display="none"; 
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

//swaps from Painting to Drawing
function pntToDrw (){
  document.getElementById("drwPge").style.display="block";
  document.getElementById("pntPge").style.display="none"; 
}

//swaps from Painting to Mixed Materials
function pntToMM (){
  document.getElementById("mmPge").style.display="block";
  document.getElementById("pntPge").style.display="none"; 
}

//swaps from Painting to Water Colors
function pntToWC (){
  document.getElementById("wcPge").style.display="block";
  document.getElementById("pntPge").style.display="none"; 
}

//swaps from Painting to Oil Pastels
function pntToOP (){
  document.getElementById("opPge").style.display="block";
  document.getElementById("pntPge").style.display="none"; 
}

//swaps from Painting to Tips To Start
function pntToTTS (){
  document.getElementById("ttsPge").style.display="block";
  document.getElementById("pntPge").style.display="none"; 
}


////////////////////////Mixed Materials Page//////////////////////////////////////
//swaps from Landing to Mixed Materials
function mixedMatsPgeChng1(){
  document.getElementById("mmPge").style.display="block";
  document.getElementById("lndPge").style.display="none";  
}

//swaps from Mixed Materials to Landing
function mixedMatsHome(){
  document.getElementById("lndPge").style.display="block";
  document.getElementById("mmPge").style.display="none";
}

//swaps from Mixed Materials to Drawing
function mmToDrw (){
  document.getElementById("drwPge").style.display="block";
  document.getElementById("mmPge").style.display="none"; 
}

//swaps from Mixed Materials to Painting
function mmToPnt(){
  document.getElementById("pntPge").style.display="block";
  document.getElementById("mmPge").style.display="none"; 
}

//swaps from Mixed Materials to Water Color
function mmToWC(){
  document.getElementById("wcPge").style.display="block";
  document.getElementById("mmPge").style.display="none"; 
}

//swaps from Mixed Materials to Oil Pastels
function mmToOP(){
  document.getElementById("opPge").style.display="block";
  document.getElementById("mmPge").style.display="none"; 
}

//swaps from Mixed Materials to tips to start
function mmToTTS(){
  document.getElementById("ttsPge").style.display="block";
  document.getElementById("mmPge").style.display="none"; 
}

//////////////////////////Water Color Page//////////////////////////////////////
//swaps page from landing to Water Colors
function waterColorPgeChng1(){
  document.getElementById("wcPge").style.display="block";
  document.getElementById("lndPge").style.display="none";
}

//swaps page from Water Color to Landing
function waterColorHome(){
  document.getElementById("lndPge").style.display="block";
  document.getElementById("wcPge").style.display="none";
}

//swaps page from Water Color to Drawing 
function wcToDrw (){
   document.getElementById("drwPge").style.display="block";
  document.getElementById("wcPge").style.display="none";
}

//swaps page from Water Color to Painting 
function wcToPnt (){
  document.getElementById("pntPge").style.display="block";
  document.getElementById("wcPge").style.display="none";
}

//swaps page from Water Color to Mixed Materials 
function wcToMM (){
  document.getElementById("mmPge").style.display="block";
  document.getElementById("wcPge").style.display="none";
}

//swaps page from Water Color to Oil Pastels 
function wcToOP (){
  document.getElementById("opPge").style.display="block";
  document.getElementById("wcPge").style.display="none";
}

//swaps page from Water Color To Tips to start
function wcToTTS (){
  document.getElementById("ttsPge").style.display="block";
  document.getElementById("wcPge").style.display="none";
}

///////////////////////////Oil Pastels Page/////////////////////////////////////
//swaps page from landing to Oil Pastels
function oilPastelPgeChng1(){
  document.getElementById("opPge").style.display="block";
  document.getElementById("lndPge").style.display="none";
}

//swaps page from Oil Pastels to Landing 
function oilPastelHome(){
  document.getElementById("lndPge").style.display="block";
  document.getElementById("opPge").style.display="none";
}

//swaps page from Oil Pastels to Drawing
function opToDrw (){
  document.getElementById("drwPge").style.display="block";
  document.getElementById("opPge").style.display="none";
}

//swaps page from Oil Pastels to Painting
function opToPnt (){
  document.getElementById("pntPge").style.display="block";
  document.getElementById("opPge").style.display="none";
}

//swaps page from Oil Pastels to Mixed Materials
function opToMM (){
  document.getElementById("mmPge").style.display="block";
  document.getElementById("opPge").style.display="none";
}

//swaps page from Oil Pastels to Water Color
function opToWC (){
  document.getElementById("wcPge").style.display="block";
  document.getElementById("opPge").style.display="none";
}

//swaps page from Oil Pastels To Tips to start
function opToTTS (){
  document.getElementById("ttsPge").style.display="block";
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

//swaps page from Tips To Start To Drawing
function ttsToDrw (){
  document.getElementById("drwPge").style.display="block";
  document.getElementById("ttsPge").style.display="none";
}

//swaps page from Tips To Start To painting
function ttsToPnt (){
  document.getElementById("pntPge").style.display="block";
  document.getElementById("ttsPge").style.display="none";
}

//swaps page from Tips To Start To Mixed Materials
function ttsToMM (){
  document.getElementById("mmPge").style.display="block";
  document.getElementById("ttsPge").style.display="none";
}

//swaps page from Tips To Start To Water Color
function ttsToWC (){
  document.getElementById("wcPge").style.display="block";
  document.getElementById("ttsPge").style.display="none";
}

//swaps page from Tips To Start To Oil Pastels
function ttsToOP (){
  document.getElementById("opPge").style.display="block";
  document.getElementById("ttsPge").style.display="none";
}