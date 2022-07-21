var btn_rojo, btn_verde;
var r=0;
var g=0;
var b=0;
function setup(){
    createCanvas (400,400);
    btn_rojo=createButton("ROJO");
    btn_rojo.position(100,50);
    btn_rojo.mousePressed(rojo_bg);

    btn_verde=createButton("VERDE");
    btn_verde.position(200,50);
    btn_verde.mousePressed(verde_bg);

    btn_fuchsia=createButton("FUCHSIA");
    btn_fuchsia.position(100,100);
    btn_fuchsia.mousePressed(fuchsia_bg);

    btn_aqua=createButton("AQUA");
    btn_aqua.position(200,100);
    btn_aqua.mousePressed(aqua_bg);
}
function draw(){
    background(r,g,b);
}
function rojo_bg(){
    r=255;
    g=0;
    b=0;
}
function verde_bg(){
    r=0;
    g=255;
    b=0;
}
function fuchsia_bg(){
    r=255;
    g=0;
    b=255;
}
function aqua_bg(){
    r=0;
    g=255;
    b=255;
}