// script.js

// Liste des produits
const products = [
    { id: 1, name: "Mega", price: "100€", description: "Description courte du produit A", image: "mega.jpeg" },
    { id: 2, name: "Nano", price: "150€", description: "Description courte du produit B", image: "nano.jpg" },
    { id: 3, name: "Uno", price: "200€", description: "Description courte du produit C", image: "uno.jpg" },
    { id: 4, name: "Uno1", price: "250€", description: "Description courte du produit D", image: "" },
    { id: 5, name: "Uno2", price: "300€", description: "Description courte du produit E", image: "" },
];

// Afficher tous les produits
function displayProducts(productArray) {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Réinitialiser la liste des produits
    if (productArray.length === 0) {
        productList.innerHTML = "<p class='no-results'>Aucun produit trouvé.</p>";
        return;
    }
    productArray.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image ? `assets/img/${product.image}` : 'assets/img/default.jpg'}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
            </div>
        `;
    });
}

// Filtrer les produits via la barre de recherche
function filterProducts() {
    const searchBar = document.getElementById("searchBar").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchBar) ||
        product.description.toLowerCase().includes(searchBar)
    );
    displayProducts(filteredProducts);
}

// Initialiser l'affichage des produits
document.addEventListener("DOMContentLoaded", () => displayProducts(products));
