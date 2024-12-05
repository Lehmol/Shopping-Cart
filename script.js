// Using IIFE (Immediatley invoked function expression)
const currentProductIndex = 0;

(async function () {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    const product = data[currentProductIndex];
    const imgUrl = data[currentProductIndex].image;

    const productElem = `
        <img src=${imgUrl}>
        <p>${product.title}</p>
        <p>${product.price}</p>
        <p>${product.description}</p>`;
        document.getElementById("productCard").innerHTML = productElem;

})();