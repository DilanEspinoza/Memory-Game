import { createCard } from "./modules/createCard.js";
import getImages from "./modules/fake-api.js";
import { shuffle } from "./modules/shuffle.js";

async function showCards() {
	// traemos las carte simulando una api falsa
	let cards = await getImages();
	// Barajamos las cartas
	shuffle(cards);
	cards.forEach((e) => {
		// Creamos las cartas individualmente
		createCard(e);
	});
}

showCards();
