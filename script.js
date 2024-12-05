// Using IIFE (Immediatley invoked function expression)
const currentProductIndex = 0;

(async function () {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    const product = data[currentProductIndex];
    document.getElementById("title").innerText = product.title;
    document.getElementById("img").src = product.image;
    document.getElementById("price").innerText = product.price;
    document.getElementById("description").innerText = product.description;

    const rating = product.rating;

})();