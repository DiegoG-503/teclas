var teclas = {
	UP : 38,
	DOWN : 40,
	LEFT: 37,
	RIGHT : 39
};

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", dibujarTrue);
document.addEventListener("mouseup", dibujarFalse);
document.addEventListener("mousemove", dibujarMouse);

var cuadrito = document.getElementById("dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var mouse = false;

dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTrue() {
	mouse = true;
}

function dibujarFalse() {
	mouse = false;
}

function dibujarMouse() {
	var colorcito = "black";
	var movimiento = 10;
	if (mouse == true) {
		dibujarLinea(colorcito, x - 1, y - 1, x + 1, y + 1, papel);

	}
	else{
		mouse = false;
	}
}

function dibujarTeclado(evento) {
	var color = "blue";
	var movi = 10;
	switch(evento.keyCode){
		case teclas.UP:
			dibujarLinea(color, x, y, x, y - movi, papel);
			y = y - movi;
			break;
		case teclas.DOWN : 
			dibujarLinea(color, x, y, x, y + movi, papel);
			y = y + movi;
			break;
		case teclas.LEFT:
			dibujarLinea(color, x, y, x - movi, y, papel);
			x = x - movi;
			break;
		case teclas.RIGHT:
			dibujarLinea(color, x, y, x + movi, y, papel);
			x = x + movi;
			break;
		default:
			console.log("Otra tecla");
	}

}
