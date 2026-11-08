
const list = document.getElementById("products");

async function showProducts() {
    // get data from the JSON file
    const response = await fetch("data-pretty.json");
    const data = await response.json();
    const products = data.products;

    // go through the first 20 products
    for (let i = 0; i < 20; i++) {
        const product = products[i];

        // box for one product
        const card = document.createElement("article");
        card.className = "product";

        // thumbnail image
        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = product.title;
        img.onclick = function () {
            alert("Product ID: " + product.id);
        };

        // title and price
        const title = document.createElement("h2");
        title.className = "product-title";
        title.textContent = product.title;

        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = "$" + product.price;

        const text = document.createElement("div");
        text.appendChild(title);
        text.appendChild(price);

        // add to cart button
        const button = document.createElement("button");
        button.className = "add-btn";
        button.textContent = "+";
        button.onclick = function () {
            alert("Product ID: " + product.id + "\nTitle: " + product.title);
        };

        // row with text on the left and button on the right
        const info = document.createElement("div");
        info.className = "product-info";
        info.appendChild(text);
        info.appendChild(button);

        // put everything in the card, then the card on the page
        card.appendChild(img);
        card.appendChild(info);
        list.appendChild(card);
    }
}

showProducts();
