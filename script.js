// Using IIFE (Immediatley invoked function expression)

(async function () {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();



    for (let i = 0; i < data.length; i++) {
        const product = data[i]
        const imgUrl = product.image;

        const productElem = `
            <div class="product">
                <img class="productImg" src=${imgUrl}>
                <p>${product.title}</p>
                <p>${product.price} $</p>
            </div>`;

        document.getElementById("productCard").innerHTML += productElem;
    }

})();