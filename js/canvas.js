
//Dibujo derecho
const canvasDerecho = document.getElementById("signature-canvas-derecho");
canvasDerecho.width = 273;
canvasDerecho.height = 125;

let ctx = canvasDerecho.getContext("2d");
ctx.fillStyle = "rgba(0,0,0,-0.1)";
ctx.fillRect(0,0, canvasDerecho.width, canvasDerecho.height)

let draw_color = "black";
let draw_width ="2";
let is_drawing = false;


canvasDerecho.addEventListener("touchstart", start, false);
canvasDerecho.addEventListener("touchmove", draw, false);
canvasDerecho.addEventListener("mousedown", start, false);
canvasDerecho.addEventListener("mousemove", draw, false);

canvasDerecho.addEventListener("touchend", stop, false);
canvasDerecho.addEventListener("mouseup", stop, false);
canvasDerecho.addEventListener("mouseout", stop, false);

function start(e){
    is_drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvasDerecho.offsetLeft, e.clientY - canvasDerecho.offsetTop);
    e.preventDefault();
}

function draw(e){
    if (is_drawing){
        ctx.lineTo(e.clientX - canvasDerecho.offsetLeft, e.clientY - canvasDerecho.offsetTop);
        ctx.strokeStyle = draw_color;
        ctx.lineWidth = draw_width;
        ctx.lineCap ="round";
        ctx.lineJoin = "round";
        ctx.stroke()
    }
    e.preventDefault();
}

function stop(e){
    if (is_drawing){
        ctx.stroke();
        ctx.closePath();
        is_drawing=false;
    }
    e.preventDefault();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Dibujo izquierdo
const canvasIzquierdo = document.getElementById("signature-canvas-izquierdo");
canvasIzquierdo.width = 273;
canvasIzquierdo.height = 125;

let ctxIzq = canvasIzquierdo.getContext("2d");
ctxIzq.fillStyle = "rgba(0,0,0,-0.1)";
ctxIzq.fillRect(0,0, canvasIzquierdo.width, canvasIzquierdo.height)

let draw_color2 = "black";
let draw_width_izq ="2";
let is_drawing_izq = false;


canvasIzquierdo.addEventListener("touchstart", startIzq, false);
canvasIzquierdo.addEventListener("touchmove", drawIzq, false);
canvasIzquierdo.addEventListener("mousedown", startIzq, false);
canvasIzquierdo.addEventListener("mousemove", drawIzq, false);

canvasIzquierdo.addEventListener("touchend", stopIzq, false);
canvasIzquierdo.addEventListener("mouseup", stopIzq, false);
canvasIzquierdo.addEventListener("mouseout", stopIzq, false);

function startIzq(e){
    is_drawing_izq = true;
    ctxIzq.beginPath();
    ctxIzq.moveTo(e.clientX - canvasIzquierdo.offsetLeft, e.clientY - canvasIzquierdo.offsetTop);
    e.preventDefault();
}

function drawIzq(e){
    if (is_drawing_izq){
        ctxIzq.lineTo(e.clientX - canvasIzquierdo.offsetLeft, e.clientY - canvasIzquierdo.offsetTop);
        ctxIzq.strokeStyle = draw_color2;
        ctxIzq.lineWidth = draw_width_izq;
        ctxIzq.lineCap ="round";
        ctxIzq.lineJoin = "round";
        ctxIzq.stroke()
    }
    e.preventDefault();
}

function stopIzq(e){
    if (is_drawing_izq){
        ctxIzq.stroke();
        ctxIzq.closePath();
        is_drawing_izq=false;
    }
    e.preventDefault();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Dibujo frontal
const canvasFrontal = document.getElementById("signature-canvas-frontal");
canvasFrontal.width = 175;
canvasFrontal.height = 125;

let ctxFront = canvasFrontal.getContext("2d");
ctxFront.fillStyle = "rgba(0,0,0,-0.1)";
ctxFront.fillRect(0,0, canvasFrontal.width, canvasFrontal.height)

let draw_color3 = "black";
let draw_width_front ="2";
let is_drawing_front = false;


canvasFrontal.addEventListener("touchstartFront", startFront, false);
canvasFrontal.addEventListener("touchmove", drawFront, false);
canvasFrontal.addEventListener("mousedown", startFront, false);
canvasFrontal.addEventListener("mousemove", drawFront, false);

canvasFrontal.addEventListener("touchend", stopFront, false);
canvasFrontal.addEventListener("mouseup", stopFront, false);
canvasFrontal.addEventListener("mouseout", stopFront, false);

function startFront(e){
    is_drawing_front = true;
    ctxFront.beginPath();
    ctxFront.moveTo(e.clientX - canvasFrontal.offsetLeft, e.clientY - canvasFrontal.offsetTop);
    e.preventDefault();
}

function drawFront(e){
    if (is_drawing_front){
        ctxFront.lineTo(e.clientX - canvasFrontal.offsetLeft, e.clientY - canvasFrontal.offsetTop);
        ctxFront.strokeStyle = draw_color3;
        ctxFront.lineWidth = draw_width_front;
        ctxFront.lineCap ="round";
        ctxFront.lineJoin = "round";
        ctxFront.stroke()
    }
    e.preventDefault();
}

function stopFront(e){
    if (is_drawing_front){
        ctxFront.stroke();
        ctxFront.closePath();
        is_drawing_front=false;
    }
    e.preventDefault();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Dibujo posterior
const canvasPosterior = document.getElementById("signature-canvas-posterior");
canvasPosterior.width = 175;
canvasPosterior.height = 125;

let ctxPost = canvasPosterior.getContext("2d");
ctxPost.fillStyle = "rgba(0,0,0,-0.1)";
ctxPost.fillRect(0,0, canvasPosterior.width, canvasPosterior.height)

let draw_color_post = "black";
let draw_width_post ="2";
let is_drawing_post = false;


canvasPosterior.addEventListener("touchstart", startPost, false);
canvasPosterior.addEventListener("touchmove", drawPost, false);
canvasPosterior.addEventListener("mousedown", startPost, false);
canvasPosterior.addEventListener("mousemove", drawPost, false);

canvasPosterior.addEventListener("touchend", stopPost, false);
canvasPosterior.addEventListener("mouseup", stopPost, false);
canvasPosterior.addEventListener("mouseout", stopPost, false);

function startPost(e){
    is_drawing_post = true;
    ctxPost.beginPath();
    ctxPost.moveTo(e.clientX - canvasPosterior.offsetLeft, e.clientY - canvasPosterior.offsetTop);
    e.preventDefault();
}

function drawPost(e){
    if (is_drawing_post){
        ctxPost.lineTo(e.clientX - canvasPosterior.offsetLeft, e.clientY - canvasPosterior.offsetTop);
        ctxPost.strokeStyle = draw_color_post;
        ctxPost.lineWidth = draw_width_post;
        ctxPost.lineCap ="round";
        ctxPost.lineJoin = "round";
        ctxPost.stroke()
    }
    e.preventDefault();
}

function stopPost(e){
    if (is_drawing_post){
        ctxPost.stroke();
        ctxPost.closePath();
        is_drawing_post=false;
    }
    e.preventDefault();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Dibujo techo
const canvasTecho = document.getElementById("signature-canvas-techo");
canvasTecho.width = 131;
canvasTecho.height = 264;

let ctxTecho = canvasTecho.getContext("2d");
ctxTecho.fillStyle = "rgba(0,0,0,-0.1)";
ctxTecho.fillRect(0,0, canvasTecho.width, canvasTecho.height)

let draw_color_techo = "black";
let draw_width_techo ="2";
let is_drawing_techo = false;


canvasTecho.addEventListener("touchstart", startTecho, false);
canvasTecho.addEventListener("touchmove", drawTecho, false);
canvasTecho.addEventListener("mousedown", startTecho, false);
canvasTecho.addEventListener("mousemove", drawTecho, false);

canvasTecho.addEventListener("touchend", stopTecho, false);
canvasTecho.addEventListener("mouseup", stopTecho, false);
canvasTecho.addEventListener("mouseout", stopTecho, false);

function startTecho(e){
    is_drawing_techo = true;
    ctxTecho.beginPath();
    ctxTecho.moveTo(e.clientX - canvasTecho.offsetLeft, e.clientY - canvasTecho.offsetTop);
    e.preventDefault();
}

function drawTecho(e){
    if (is_drawing_techo){
        ctxTecho.lineTo(e.clientX - canvasTecho.offsetLeft, e.clientY - canvasTecho.offsetTop);
        ctxTecho.strokeStyle = draw_color_techo;
        ctxTecho.lineWidth = draw_width_techo;
        ctxTecho.lineCap ="round";
        ctxTecho.lineJoin = "round";
        ctxTecho.stroke()
    }
    e.preventDefault();
}

function stopTecho(e){
    if (is_drawing_techo){
        ctxTecho.stroke();
        ctxTecho.closePath();
        is_drawing_techo=false;
    }
    e.preventDefault();
}


////////////////// CLEAR /////////////////

function clearDerecho(){
    ctx.fillStyle = "rgba(0,0,0,-0.1)";
    ctx.clearRect(0,0, canvasDerecho.width, canvasDerecho.height)
    ctx.fillRect(0,0, canvasDerecho.width, canvasDerecho.height)
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



