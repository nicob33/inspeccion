//CANVAS DERECHO
let penSizeDer = "2";
let isDrawingDer;
let xDer;
let yDer;

var canvasDerecho = document.getElementById("signature-canvas-derecho");
canvasDerecho.width = 273;
canvasDerecho.height = 125;
let ctxDer = canvasDerecho.getContext('2d');

canvasDerecho.addEventListener("mousedown", (e) => {
    isDrawingDer = true;
    ctxDer.beginPath();
    xDer = e.offsetX;
    yDer = e.offsetY;
    ctxDer.moveTo(xDer,yDer);
})

canvasDerecho.addEventListener("touchstart", (e) => {
    isDrawingDer = true;
    ctxDer.beginPath();
    xDer = Math.round(e.targetTouches[0].pageX - canvasDerecho.offsetLeft);
    yDer = Math.round(e.targetTouches[0].pageY - canvasDerecho.offsetTop);
    ctxDer.moveTo(xDer,yDer);
    e.preventDefault();
})


canvasDerecho.addEventListener("mouseup", () =>{
    isDrawingDer = false;
    xDer = undefined;
    yDer = undefined;
    ctxDer.stroke();
    ctxDer.closePath();

})

canvasDerecho.addEventListener("mouseout", () =>{
    isDrawingDer = false;
    xDer = undefined;
    yDer = undefined;
    ctxDer.closePath();

})

canvasDerecho.addEventListener("touchend", () =>{
    isDrawingDer = false;
    xDer = undefined;
    yDer = undefined;
    ctxDer.stroke();
    ctxDer.closePath();

})

canvasDerecho.addEventListener("mousemove", (e) =>{
    if(isDrawingDer){
    drawDer(e.offsetX, e.offsetY)
}
})

canvasDerecho.addEventListener("touchmove", (e) =>{
    xDer = Math.round(e.targetTouches[0].pageX - canvasDerecho.offsetLeft)
    yDer= Math.round(e.targetTouches[0].pageY - canvasDerecho.offsetTop)
    drawDer(xDer, yDer);
    console.log(xDer, yDer);

})

ctxDer.fillStyle = "black";

function drawDer(x2,y2){
    if(isDrawingDer){
        ctxDer.lineTo(x2,y2);
        ctxDer.strokeStyle ="black";
        ctxDer.lineWidth = penSizeDer;
        ctxDer.lineCap ="round";
        ctxDer.lineJoin = "round";
        ctxDer.stroke();
    }
  

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CANVAS IZQUIERDO
let penSizeIzq = "2";
let isDrawingIzq;
let xIzq;
let yIzq;

var canvasIzquierdo = document.getElementById("signature-canvas-izquierdo");
canvasIzquierdo.width = 273;
canvasIzquierdo.height = 125;
let ctxIzq = canvasIzquierdo.getContext('2d');

canvasIzquierdo.addEventListener("mousedown", (e) => {
    isDrawingIzq = true;
    ctxIzq.beginPath();
    xIzq = e.offsetX;
    yIzq = e.offsetY;
    ctxIzq.moveTo(xIzq,yIzq);
})

canvasIzquierdo.addEventListener("touchstart", (event) => {
    isDrawingIzq = true;
    ctxIzq.beginPath();
    xIzq = Math.round(event.targetTouches[0].pageX - canvasIzquierdo.offsetLeft);
    yIzq = Math.round(event.targetTouches[0].pageY - canvasIzquierdo.offsetTop);
    ctxIzq.moveTo(xIzq,yIzq);
    event.preventDefault();
})


canvasIzquierdo.addEventListener("mouseup", () =>{
    isDrawingIzq = false;
    xIzq = undefined;
    yIzq = undefined;
    ctxIzq.stroke();
    ctxIzq.closePath();

})

canvasIzquierdo.addEventListener("mouseout", () =>{
    isDrawingIzq = false;
    xIzq = undefined;
    yIzq = undefined;
    ctxIzq.closePath();

})

canvasIzquierdo.addEventListener("touchend", () =>{
    isDrawingIzq = false;
    xIzq = undefined;
    yIzq = undefined;
    ctxIzq.stroke();
    ctxIzq.closePath();

})

canvasIzquierdo.addEventListener("mousemove", (e) =>{
    if(isDrawingIzq){
    drawIzq(e.offsetX, e.offsetY)
}
})

canvasIzquierdo.addEventListener("touchmove", (e) =>{
    xIzq = Math.round(e.targetTouches[0].pageX - canvasIzquierdo.offsetLeft)
    yIzq= Math.round(e.targetTouches[0].pageY - canvasIzquierdo.offsetTop)
    drawIzq(xIzq, yIzq);
    console.log(xIzq, yIzq);

})

ctxIzq.fillStyle = "black";

function drawIzq(x2,y2){
    if(isDrawingIzq){
        ctxIzq.lineTo(x2,y2);
        ctxIzq.strokeStyle ="black";
        ctxIzq.lineWidth = penSizeIzq;
        ctxIzq.lineCap ="round";
        ctxIzq.lineJoin = "round";
        ctxIzq.stroke();
    }
  

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CANVAS FRONTAL
let penSizeFront = "2";
let isDrawingFront;
let xFront;
let yFront;

var canvasFrontal = document.getElementById("signature-canvas-frontal");
canvasFrontal.width = 175;
canvasFrontal.height = 125;
let ctxFront = canvasFrontal.getContext('2d');

canvasFrontal.addEventListener("mousedown", (e) => {
    isDrawingFront = true;
    ctxFront.beginPath();
    xFront = e.offsetX;
    yFront = e.offsetY;
    ctxFront.moveTo(xFront,yFront);
})

canvasFrontal.addEventListener("touchstart", (event) => {
    isDrawingFront = true;
    ctxFront.beginPath();
    xFront = Math.round(event.targetTouches[0].pageX - canvasFrontal.offsetLeft);
    yFront = Math.round(event.targetTouches[0].pageY - canvasFrontal.offsetTop);
    ctxFront.moveTo(xFront,yFront);
    event.preventDefault();
})


canvasFrontal.addEventListener("mouseup", () =>{
    isDrawingFront = false;
    xFront = undefined;
    yFront = undefined;
    ctxFront.stroke();
    ctxFront.closePath();

})

canvasFrontal.addEventListener("mouseout", () =>{
    isDrawingFront = false;
    xFront = undefined;
    yFront = undefined;
    ctxFront.closePath();

})

canvasFrontal.addEventListener("touchend", () =>{
    isDrawingFront = false;
    xFront = undefined;
    yFront = undefined;
    ctxFront.stroke();
    ctxFront.closePath();

})

canvasFrontal.addEventListener("mousemove", (e) =>{
    if(isDrawingFront){
    drawFront(e.offsetX, e.offsetY)
}
})

canvasFrontal.addEventListener("touchmove", (e) =>{
    xFront = Math.round(e.targetTouches[0].pageX - canvasFrontal.offsetLeft)
    yFront= Math.round(e.targetTouches[0].pageY - canvasFrontal.offsetTop)
    drawFront(xFront, yFront);
    console.log(xFront, yFront);

})

ctxFront.fillStyle = "black";

function drawFront(x2,y2){
    if(isDrawingFront){
        ctxFront.lineTo(x2,y2);
        ctxFront.strokeStyle ="black";
        ctxFront.lineWidth = penSizeFront;
        ctxFront.lineCap ="round";
        ctxFront.lineJoin = "round";
        ctxFront.stroke();
    }
  

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CANVAS POSTERIOR

let penSizePost = "2";
let isDrawingPost;
let xPost;
let yPost;

var canvasPosterior = document.getElementById("signature-canvas-posterior");
canvasPosterior.width = 175;
canvasPosterior.height = 125;
let ctxPost = canvasPosterior.getContext('2d');

canvasPosterior.addEventListener("mousedown", (e) => {
    isDrawingPost = true;
    ctxPost.beginPath();
    xPost = e.offsetX;
    yPost = e.offsetY;
    ctxPost.moveTo(xPost,yPost);
})

canvasPosterior.addEventListener("touchstart", (event) => {
    isDrawingPost = true;
    ctxPost.beginPath();
    xPost = Math.round(event.targetTouches[0].pageX - canvasPosterior.offsetLeft);
    yPost = Math.round(event.targetTouches[0].pageY - canvasPosterior.offsetTop);
    ctxPost.moveTo(xPost,yPost);
    event.preventDefault();
})


canvasPosterior.addEventListener("mouseup", () =>{
    isDrawingPost = false;
    xPost = undefined;
    yPost = undefined;
    ctxPost.stroke();
    ctxPost.closePath();

})

canvasPosterior.addEventListener("mouseout", () =>{
    isDrawingPost = false;
    xPost = undefined;
    yPost = undefined;
    ctxPost.closePath();

})

canvasPosterior.addEventListener("touchend", () =>{
    isDrawingPost = false;
    xPost = undefined;
    yPost = undefined;
    ctxPost.stroke();
    ctxPost.closePath();

})

canvasPosterior.addEventListener("mousemove", (e) =>{
    if(isDrawingPost){
    drawPost(e.offsetX, e.offsetY)
}
})

canvasPosterior.addEventListener("touchmove", (e) =>{
    xPost = Math.round(e.targetTouches[0].pageX - canvasPosterior.offsetLeft)
    yPost= Math.round(e.targetTouches[0].pageY - canvasPosterior.offsetTop)
    drawPost(xPost, yPost);
    console.log(xPost, yPost);

})

ctxPost.fillStyle = "black";

function drawPost(x2,y2){
    if(isDrawingPost){
        ctxPost.lineTo(x2,y2);
        ctxPost.strokeStyle ="black";
        ctxPost.lineWidth = penSizePost;
        ctxPost.lineCap ="round";
        ctxPost.lineJoin = "round";
        ctxPost.stroke();
    }
  

}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CANVAS TECHO

let penSizeTecho = "2";
let isDrawingTecho;
let xTecho;
let yTecho;

var canvasTecho = document.getElementById("signature-canvas-techo");
canvasTecho.width = 131;
canvasTecho.height = 264;
let ctxTecho = canvasTecho.getContext('2d');

canvasTecho.addEventListener("mousedown", (e) => {
    isDrawingTecho = true;
    ctxTecho.beginPath();
    xTecho = e.offsetX;
    yTecho = e.offsetY;
    ctxTecho.moveTo(xTecho,yTecho);
})

canvasTecho.addEventListener("touchstart", (event) => {
    isDrawingTecho = true;
    ctxTecho.beginPath();
    xTecho = Math.round(event.targetTouches[0].pageX - canvasTecho.offsetLeft);
    yTecho = Math.round(event.targetTouches[0].pageY - canvasTecho.offsetTop);
    ctxTecho.moveTo(xTecho,yTecho);
    event.preventDefault();
})


canvasTecho.addEventListener("mouseup", () =>{
    isDrawingTecho = false;
    xTecho = undefined;
    yTecho = undefined;
    ctxTecho.stroke();
    ctxTecho.closePath();

})

canvasTecho.addEventListener("mouseout", () =>{
    isDrawingTecho = false;
    xTecho = undefined;
    yTecho = undefined;
    ctxTecho.closePath();

})

canvasTecho.addEventListener("touchend", () =>{
    isDrawingTecho = false;
    xTecho = undefined;
    yTecho = undefined;
    ctxTecho.stroke();
    ctxTecho.closePath();

})

canvasTecho.addEventListener("mousemove", (e) =>{
    if(isDrawingTecho){
    drawTecho(e.offsetX, e.offsetY)
}
})

canvasTecho.addEventListener("touchmove", (e) =>{
    xTecho = Math.round(e.targetTouches[0].pageX - canvasTecho.offsetLeft)
    yTecho= Math.round(e.targetTouches[0].pageY - canvasTecho.offsetTop)
    drawTecho(xTecho, yTecho);
    console.log(xTecho, yTecho);

})

ctxTecho.fillStyle = "black";

function drawTecho(x2,y2){
    if(isDrawingTecho){
        ctxTecho.lineTo(x2,y2);
        ctxTecho.strokeStyle ="black";
        ctxTecho.lineWidth = penSizeTecho;
        ctxTecho.lineCap ="round";
        ctxTecho.lineJoin = "round";
        ctxTecho.stroke();
    }
  

}

////////////////////////CANVAS PARABRISAS////////////////////////

let penSizePar = "2";
let isDrawingPar;
let xPar;
let yPar;

var canvasParabrisas = document.getElementById("signature-canvas-parabrisas");
canvasParabrisas.width = 500;
canvasParabrisas.height = 200;
let ctxPar = canvasParabrisas.getContext('2d');

canvasParabrisas.addEventListener("mousedown", (e) => {
    isDrawingPar = true;
    ctxPar.beginPath();
    xPar = e.offsetX;
    yPar = e.offsetY;
    ctxPar.moveTo(xPar,yPar);
})

canvasParabrisas.addEventListener("touchstart", (event) => {
    isDrawingPar = true;
    ctxPar.beginPath();
    xPar = Math.round(event.targetTouches[0].pageX - canvasParabrisas.offsetLeft);
    yPar = Math.round(event.targetTouches[0].pageY - canvasParabrisas.offsetTop);
    ctxPar.moveTo(xPar,yPar);
    event.preventDefault();
})


canvasParabrisas.addEventListener("mouseup", () =>{
    isDrawingPar = false;
    xPar = undefined;
    yPar = undefined;
    ctxPar.stroke();
    ctxPar.closePath();

})

canvasParabrisas.addEventListener("mouseout", () =>{
    isDrawingPar = false;
    xPar = undefined;
    yPar = undefined;
    ctxPar.closePath();

})

canvasParabrisas.addEventListener("touchend", () =>{
    isDrawingPar = false;
    xPar = undefined;
    yPar = undefined;
    ctxPar.stroke();
    ctxPar.closePath();

})

canvasParabrisas.addEventListener("mousemove", (e) =>{
    if(isDrawingPar){
    drawPar(e.offsetX, e.offsetY)
}
})

canvasParabrisas.addEventListener("touchmove", (e) =>{
    xPar = Math.round(e.targetTouches[0].pageX - canvasParabrisas.offsetLeft)
    yPar= Math.round(e.targetTouches[0].pageY - canvasParabrisas.offsetTop)
    drawPar(xPar, yPar);

})

ctxPar.fillStyle = "black";

function drawPar(x2,y2){
    if(isDrawingPar){
        ctxPar.lineTo(x2,y2);
        ctxPar.strokeStyle ="black";
        ctxPar.lineWidth = penSizePar;
        ctxPar.lineCap ="round";
        ctxPar.lineJoin = "round";
        ctxPar.stroke();
    }
  

}


////////////////////////CANVAS FIRMA////////////////////////

let penSizeFir = "2";
let isDrawingFir;
let xFir;
let yFir;

var canvasFirma = document.getElementById("signature-canvas-firma");
canvasFirma.width = 500;
canvasFirma.height = 200;
let ctxFir = canvasFirma.getContext('2d');

canvasFirma.addEventListener("mousedown", (e) => {
    isDrawingFir = true;
    ctxFir.beginPath();
    xFir = e.offsetX;
    yFir = e.offsetY;
    ctxFir.moveTo(xFir,yFir);
})

canvasFirma.addEventListener("touchstart", (event) => {
    isDrawingFir = true;
    ctxFir.beginPath();
    xFir = Math.round(event.targetTouches[0].pageX - canvasFirma.offsetLeft);
    yFir = Math.round(event.targetTouches[0].pageY - canvasFirma.offsetTop);
    ctxFir.moveTo(xFir,yFir);
    event.preventDefault();
})


canvasFirma.addEventListener("mouseup", () =>{
    isDrawingFir = false;
    xFir = undefined;
    yFir = undefined;
    ctxFir.stroke();
    ctxFir.closePath();

})

canvasFirma.addEventListener("mouseout", () =>{
    isDrawingFir = false;
    xFir = undefined;
    yFir = undefined;
    ctxFir.closePath();

})

canvasFirma.addEventListener("touchend", () =>{
    isDrawingFir = false;
    xFir = undefined;
    yFir = undefined;
    ctxFir.stroke();
    ctxFir.closePath();

})

canvasFirma.addEventListener("mousemove", (e) =>{
    if(isDrawingFir){
    drawFir(e.offsetX, e.offsetY)
}
})

canvasFirma.addEventListener("touchmove", (e) =>{
    xFir = Math.round(e.targetTouches[0].pageX - canvasFirma.offsetLeft)
    yFir= Math.round(e.targetTouches[0].pageY - canvasFirma.offsetTop)
    drawFir(xFir, yFir);

})

ctxFir.fillStyle = "black";

function drawFir(x2,y2){
    if(isDrawingFir){
        ctxFir.lineTo(x2,y2);
        ctxFir.strokeStyle ="black";
        ctxFir.lineWidth = penSizeFir;
        ctxFir.lineCap ="round";
        ctxFir.lineJoin = "round";
        ctxFir.stroke();
    }
  

}

//////////////////// CLEAR /////////////////

function clearDerecho(){
    ctxDer.fillStyle = "rgba(0,0,0,-0.1)";
    ctxDer.clearRect(0,0, canvasDerecho.width, canvasDerecho.height)
    ctxDer.fillRect(0,0, canvasDerecho.width, canvasDerecho.height)
}

function clearIzquierdo(){
    ctxIzq.fillStyle = "rgba(0,0,0,-0.1)";
    ctxIzq.clearRect(0,0, canvasIzquierdo.width, canvasIzquierdo.height)
    ctxIzq.fillRect(0,0, canvasIzquierdo.width, canvasIzquierdo.height)
}

function clearTecho(){
    ctxTecho.fillStyle = "rgba(0,0,0,-0.1)";
    ctxTecho.clearRect(0,0, canvasTecho.width, canvasTecho.height)
    ctxTecho.fillRect(0,0, canvasTecho.width, canvasTecho.height)
}

function clearPosterior(){
    ctxPost.fillStyle = "rgba(0,0,0,-0.1)";
    ctxPost.clearRect(0,0, canvasPosterior.width, canvasPosterior.height)
    ctxPost.fillRect(0,0, canvasPosterior.width, canvasPosterior.height)
}

function clearFrontal(){
    ctxFront.fillStyle = "rgba(0,0,0,-0.1)";
    ctxFront.clearRect(0,0, canvasFrontal.width, canvasFrontal.height)
    ctxFront.fillRect(0,0, canvasFrontal.width, canvasFrontal.height)
}

function clearParabrisas(){
    ctxPar.fillStyle = "rgba(0,0,0,-0.1)";
    ctxPar.clearRect(0,0, canvasParabrisas.width, canvasParabrisas.height)
    ctxPar.fillRect(0,0, canvasParabrisas.width, canvasParabrisas.height)
}

function clearFirma(){
    ctxFir.fillStyle = "rgba(0,0,0,-0.1)";
    ctxFir.clearRect(0,0, canvasFirma.width, canvasFirma.height)
    ctxFir.fillRect(0,0, canvasFirma.width, canvasFirma.height)
}



