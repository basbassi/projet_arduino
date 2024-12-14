// script.js

// Liste des produits
const products = [
    { id: 1, name: "Mega", price: "100€", description: "Description courte du produit A", image: "mega.jpeg", favorite: false },
    { id: 2, name: "Nano", price: "150€", description: "Description courte du produit B", image: "nano.jpg", favorite: false },
    { id: 3, name: "Uno", price: "200€", description: "Description courte du produit C", image: "uno.jpg", favorite: false },
    { id: 4, name: "Uno1", price: "250€", description: "Description courte du produit D", image: "uno.jpg", favorite: false },
    { id: 5, name: "Uno2", price: "300€", description: "Description courte du produit E", image: "uno.jpg", favorite: false }
];

// Afficher tous les produits
function displayProducts(productArray) {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Réinitialiser la liste des produits
    productArray.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="assets/img/${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <span class="favorite-icon" onclick="toggleFavorite(${product.id})">
                    ${product.favorite ? "❤️" : "🤍"}
                </span>
            </div>
        `;
    });
    updateTotalPrice(); // Mettre à jour le prix total
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

// Basculer l'état de favori
function toggleFavorite(productId) {
    const product = products.find(p => p.id === productId);
    product.favorite = !product.favorite;
    saveFavorites();
    displayProducts(products);
}

// Afficher uniquement les favoris
function displayFavorites() {
    const favoriteProducts = products.filter(product => product.favorite);
    displayProducts(favoriteProducts);
}

// Mettre à jour le prix total des favoris
function updateTotalPrice() {
    const totalPriceElement = document.getElementById("totalPrice");
    const favoriteProducts = products.filter(product => product.favorite);
    const total = favoriteProducts.reduce((sum, product) => {
        const price = parseFloat(product.price.replace("€", ""));
        return sum + price;
    }, 0);
    totalPriceElement.textContent = `Total des favoris : ${total}€`;
}

// Enregistrer les favoris dans le stockage local
function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(products));
}

// Charger les favoris depuis le stockage local
function loadFavorites() {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites) {
        products.forEach((product, index) => {
            product.favorite = savedFavorites[index]?.favorite || false;
        });
    }
}

// Initialiser l'affichage des produits
document.addEventListener("DOMContentLoaded", () => {
    loadFavorites();
    displayProducts(products);
});
