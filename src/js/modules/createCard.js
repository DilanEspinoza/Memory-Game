let $containerCards = document.querySelector(".container__cards");

export function createCard(card) {
	let article = document.createElement("article");
	let image = document.createElement("img");

	image.setAttribute("src", `./src/images/${card.cover}`);

	article.classList.add("container__card");
	article.appendChild(image);

	article.dataset.state = "";

	// Funcionalidad para que la carta se de la vuelta
	article.addEventListener("click", () => {
		if (article.dataset.state === "cover") {
			image.setAttribute("src", `./src/images/${card.img}`);
			article.dataset.state = "img";
		} else {
			image.setAttribute("src", `./src/images/${card.cover}`);
			article.dataset.state = "cover";
		}
	});

	$containerCards.appendChild(article);
}
