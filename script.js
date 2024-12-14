// Exemple de liste de produits avec images
const products = [
    { id: 1, name: "Produit A", price: "10€", description: "Description du produit A", image: "assets/img/nano.jpg" },
    { id: 2, name: "Produit B", price: "20€", description: "Description du produit B", image: "assets/img/mega.jpeg" },
    { id: 3, name: "Produit C", price: "15€", description: "Description du produit C", image: "assets/img/mega.jpeg" },
];

let favoriteProducts = [];
let totalPrice = 0;

// Afficher les produits avec leurs images
function displayProducts(productsToDisplay) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    productsToDisplay.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button onclick="toggleFavorite(${product.id})">Favori</button>
            </div>
        `;
    });
}

// Ajouter aux favoris
function toggleFavorite(productId) {
    const product = products.find(p => p.id === productId);
    if (favoriteProducts.includes(product)) {
        favoriteProducts = favoriteProducts.filter(p => p.id !== productId);
    } else {
        favoriteProducts.push(product);
    }
    calculateTotalPrice();
}

// Calcul du prix total
function calculateTotalPrice() {
    totalPrice = favoriteProducts.reduce((sum, product) => {
        return sum + parseFloat(product.price.replace('€', ''));
    }, 0);
    document.getElementById("totalPrice").textContent = `Prix total des favoris : ${totalPrice}€`;
}

// Afficher les favoris filtrés
function viewFavorites() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    if (favoriteProducts.length === 0) {
        productList.innerHTML = "<p>Aucun produit favori sélectionné.</p>";
    } else {
        favoriteProducts.forEach(product => {
            productList.innerHTML += `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>${product.price}</p>
                    <button onclick="toggleFavorite(${product.id})">Retirer du favori</button>
                </div>
            `;
        });
    }
    document.getElementById("totalPrice").textContent = `Prix total des favoris : ${totalPrice}€`;
}

// Fonction de filtrage des produits
function filterProducts() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm) || 
               product.description.toLowerCase().includes(searchTerm);
    });

    displayProducts(filteredProducts);
}

// Ouvrir la page de commande
function openOrderPage() {
    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
    localStorage.setItem('totalPrice', totalPrice);
    window.location.href = 'order.html';
}

// Charger les favoris sur la page de commande
function loadOrderPage() {
    const orderList = document.getElementById("orderList");
    const savedProducts = JSON.parse(localStorage.getItem('favoriteProducts'));
    const savedTotalPrice = localStorage.getItem('totalPrice');
    if (savedProducts && orderList) {
        orderList.innerHTML = '';
        savedProducts.forEach(product => {
            orderList.innerHTML += `<li><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;"> ${product.name} - ${product.price}</li>`;
        });
        document.getElementById("orderTotalPrice").textContent = `Prix total : ${savedTotalPrice}€`;
    }
}

// Envoyer la commande via WhatsApp
function sendWhatsAppOrder() {
    const savedProducts = JSON.parse(localStorage.getItem('favoriteProducts'));
    const savedTotalPrice = localStorage.getItem('totalPrice');
    let message = "Bonjour, je souhaite commander les produits suivants :\n\n";
    savedProducts.forEach(product => {
        message += `- ${product.name} : ${product.price}\n`;
    });
    message += `\nPrix total : ${savedTotalPrice}€`;
    const phoneNumber = "+212717707677"; // Numéro de l'administrateur
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

// Retour au catalogue
function goBack() {
    window.location.href = 'index.html';
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("index.html")) {
        displayProducts(products);
    }
    if (window.location.pathname.includes("order.html")) {
        loadOrderPage();
    }
});
