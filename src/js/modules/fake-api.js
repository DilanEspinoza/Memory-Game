let max = 2;

async function getImages() {
	let response = await fetch("./src/data.json");
	let data = await response.json();
	console.log(data);
	return data;
}

export default getImages;
