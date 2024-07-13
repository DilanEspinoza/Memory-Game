let $containerCards = document.querySelector(".container__cards");

async function traerImgCartas() {
	let res = await fetch("./data.json");
	let data = res.json();
	return data;
}

function crearCartas(carta) {
	let article = document.createElement("article");
	let image = document.createElement("img");

	image.setAttribute("src", `./images/${carta.cover}`);

	article.classList.add("container__card");
	article.dataset.state = "cover";
	article.appendChild(image);

	article.addEventListener("click", () => {
		if (article.dataset.state === "cover") {
			image.setAttribute("src", `./images/${carta.img}`);
			article.dataset.state = "img";
		} else {
			image.setAttribute("src", `./images/${carta.cover}`);
			article.dataset.state = "cover";
		}
	});

	$containerCards.appendChild(article);
}

async function Juego() {
	console.log("haz iniciado el juego");
	let cartas = await traerImgCartas();
	cartas.sort(cartasAleatorias);

	cartas.map((carta) => {
		console.log(carta);
		crearCartas(carta);
	});
}

function cartasAleatorias() {
	return Math.random() - 0.5;
}

/* Inicio del juego al hacer click  */
let $btnIniciarJuego = document.getElementById("btn__iniciar_juego");
$btnIniciarJuego.addEventListener("click", () => {
	$btnIniciarJuego.style.display = "none";
	Juego();
});

/* 
Hacer que el juego tenga dos columnas 
hacer que que cuando dos cartas sean iguales se quede la imagen de la fruta fija 
hacer que si las imagenes no considen la imagen se devuelva al cover
crear una seleccion de dificultad, y que el jugador juege deacuerdo a eso 
*/
