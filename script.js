const produits = [
    { id: 1, name: "Produit A", price: "10€", description: "Description du produit A", image: "assets/img/nano.jpg", isFavorite: false },
    { id: 2, name: "Produit B", price: "20€", description: "Description du produit B", image: "assets/img/mega.jpeg", isFavorite: false },
    { id: 3, name: "Produit C", price: "15€", description: "Description du produit C", image: "assets/img/mega.jpeg", isFavorite: false },
  ];
  
  let showFavoritesOnly = false;
  
  // Fonction pour afficher les produits
  const displayProducts = (products) => {
    const productList = document.getElementById("product-list");
    productList.innerHTML = products
      .map(
        (p) => `
        <div class="product">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.price}</p>
          <p>${p.description}</p>
          <span class="favorite" data-id="${p.id}">
            ${p.isFavorite ? "❤️" : "🤍"}
          </span>
        </div>
      `
      )
      .join("");
  };
  
  // Fonction pour gérer les favoris
  const toggleFavorite = (id) => {
    const product = produits.find((p) => p.id === id);
    if (product) {
      product.isFavorite = !product.isFavorite;
    }
  };
  
  // Gestion des événements
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const showFavoritesButton = document.getElementById("show-favorites");
    const sendOrderButton = document.getElementById("send-order");
  
    // Afficher tous les produits au chargement
    displayProducts(produits);
  
    // Filtrer les produits par recherche
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = produits.filter((p) =>
        p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
      );
      displayProducts(filtered);
    });
  
    // Afficher uniquement les favoris
    showFavoritesButton.addEventListener("click", () => {
      showFavoritesOnly = !showFavoritesOnly;
      const filtered = showFavoritesOnly
        ? produits.filter((p) => p.isFavorite)
        : produits;
      displayProducts(filtered);
    });
  
    // Envoyer la commande via WhatsApp
    sendOrderButton.addEventListener("click", () => {
      const favoriteProducts = produits.filter((p) => p.isFavorite);
      if (favoriteProducts.length === 0) {
        alert("Aucun produit favori sélectionné !");
        return;
      }
      const message = favoriteProducts
        .map((p) => `${p.name} - ${p.price}`)
        .join("\n");
      const whatsappURL = `https://wa.me/+212717707677?text=${encodeURIComponent(
        "Voici ma commande :\n" + message
      )}`;
      window.open(whatsappURL, "_blank");
    });
  
    // Gestion des favoris
    document.getElementById("product-list").addEventListener("click", (e) => {
      if (e.target.classList.contains("favorite")) {
        const id = parseInt(e.target.dataset.id);
        toggleFavorite(id);
        displayProducts(produits);
      }
    });
  });
  