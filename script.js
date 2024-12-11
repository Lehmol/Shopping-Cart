// Using IIFE (Immediatley invoked function expression)

(async function () {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    
    const clothesBtn = document.getElementById("clothes");

    function showClothes() {
        document.getElementById("productCard").innerHTML = "";

        for(let i = 0; i < data.length; i++){
            const product = data[i];
            const category = product.category;
            if(category.toLowerCase().includes("clothing")) {
                const productElem = `
                <div class="product">
                    <img class="productImg" src=${product.image}>
                    <p>${product.title}</p>
                    <p>${product.price} $</p>
                    <button class="buyBtn">Buy me</button>
                </div>`;
                document.getElementById("productCard").innerHTML += productElem;
            }
        }
        const buyBtns = document.querySelectorAll(".buyBtn");
        buyBtns.forEach(btn => {
            btn.addEventListener("click", addToCart);
        })

    }

    function addToCart() {
        console.log("Bought");
    }

    clothesBtn.addEventListener("click", showClothes);

    const jeweleryBtn = document.getElementById("jewelery");

    function showJewelery() {
        document.getElementById("productCard").innerHTML = "";

        for(let i = 0; i < data.length; i++) {
            const product = data[i];
            const category = product.category;
            if(category.toLowerCase().includes("jewelery")) {
                const productElem = `
                <div class="product">
                    <img class="productImg" src=${product.image}>
                    <p>${product.title}</p>
                    <p>${product.price} $</p>
                    <button>Buy me</button>
                </div>`;
                document.getElementById("productCard").innerHTML += productElem;
            }
        }
    }
    jeweleryBtn.addEventListener("click", showJewelery);

    const electronicsBtn = document.getElementById("electronics");

    function showElectronics() {
        document.getElementById("productCard").innerHTML = "";

        for(let i = 0; i < data.length; i++) {
            const product = data[i];
            const category = product.category;
            if(category.toLowerCase().includes("electronics")) {
                const productElem = `
                <div class="product">
                    <img class="productImg" src=${product.image}>
                    <p>${product.title}</p>
                    <p>${product.price} $</p>
                    <button>Buy me</button>
                </div>`;
                document.getElementById("productCard").innerHTML += productElem;
            }
        }
    }
    electronicsBtn.addEventListener("click", showElectronics);

})();