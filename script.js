const produits = [
    { id: 1, name: "20CM40 broches à femelle à femelle", price: "2€", description: "Broches de connexion femelle à femelle, 20CM40", image: "assets/img/broches_ff.jpg", isFavorite: false },
    { id: 2, name: "20CM40 broches mâle à femelle", price: "2€", description: "Broches de connexion mâle à femelle, 20CM40", image: "assets/img/broches_mf.jpg", isFavorite: false },
    { id: 3, name: "65 fils pour plaque d'essai", price: "3€", description: "Set de 65 fils pour tests sur plaque d'essai", image: "assets/img/fils_plaque.jpg", isFavorite: false },
    { id: 4, name: "Afficheur 8-100VDC", price: "5€", description: "Afficheur numérique de tension 8-100VDC", image: "assets/img/afficheur_8_100.jpg", isFavorite: false },
    { id: 5, name: "Afficheur tension 3-30V", price: "5€", description: "Afficheur numérique pour tensions de 3-30V", image: "assets/img/afficheur_3_30.jpg", isFavorite: false },
    { id: 6, name: "Afficheur tension 6-60V", price: "5€", description: "Afficheur numérique pour tensions de 6-60V", image: "assets/img/afficheur_6_60.jpg", isFavorite: false },
    { id: 7, name: "Afficheur VA 0-100VDC", price: "8€", description: "Afficheur courant et tension 0-100VDC", image: "assets/img/afficheur_va_100.jpg", isFavorite: false },
    { id: 8, name: "Afficheur VA 0-200VDC", price: "8€", description: "Afficheur courant et tension 0-200VDC", image: "assets/img/afficheur_va_200.jpg", isFavorite: false },
    { id: 9, name: "Afficheur 7 segments 0,56", price: "5€", description: "Afficheur à 7 segments de taille 0,56 pouce", image: "assets/img/7segments_056.jpeg", isFavorite: false },
    { id: 10, name: "Afficheur 7 segments 0,26", price: "4€", description: "Afficheur à 7 segments de taille 0,26 pouce", image: "assets/img/7segments_026.jpg", isFavorite: false },
    { id: 11, name: "Alarme électronique", price: "6€", description: "Alarme électronique intermittente", image: "assets/img/alarme.jpg", isFavorite: false },
    { id: 12, name: "Alimentation Plaque d'essai", price: "7€", description: "Module d'alimentation pour plaque d'essai", image: "assets/img/alimentation_plaque.jpg", isFavorite: false },
    { id: 13, name: "Amplificateur audio TDA2030A", price: "10€", description: "Amplificateur audio basé sur TDA2030A", image: "assets/img/amplificateur_tda2030a.jpg", isFavorite: false },
    { id: 14, name: "Ampoule LED IC SMD 1W blanc", price: "2€", description: "Ampoule LED blanche 1W IC SMD", image: "assets/img/led_ic_smd.jpg", isFavorite: false },
    { id: 15, name: "Arduino Nano", price: "15€", description: "Carte microcontrôleur Arduino Nano", image: "assets/img/arduino_nano.png", isFavorite: false },

    { id: 17, name: "Bande de connecteur mâle", price: "2€", description: "Bande de connecteur mâle pour circuits", image: "assets/img/connecteur_male.jpg", isFavorite: false },
    { id: 18, name: "Boîtier de batterie lithium 218650", price: "5€", description: "Boîtier pour batterie lithium 218650", image: "assets/img/boitier_batterie_218650.jpg", isFavorite: false },
    { id: 19, name: "Boîtier de batterie lithium 318650", price: "5€", description: "Boîtier pour batterie lithium 318650", image: "assets/img/boitier_batterie_318650.jpg", isFavorite: false },
    { id: 20, name: "Bouton poussoir avec chapeau", price: "2€", description: "Bouton poussoir équipé d'un capuchon", image: "assets/img/bouton_poussoir.jpg", isFavorite: false },
    { id: 21, name: "Capteur de couleur TCS230", price: "9€", description: "Capteur de couleur TCS230", image: "assets/img/capteur_couleur.jpg", isFavorite: false },
    { id: 22, name: "Capteur de gaz MQ-2", price: "8€", description: "Capteur pour gaz inflammables MQ-2", image: "assets/img/capteur_gaz_mq2.jpg", isFavorite: false },
    { id: 23, name: "Capteur d'humidité du sol", price: "6€", description: "Capteur d'humidité pour le sol avec relais", image: "assets/img/capteur_humidite.jpg", isFavorite: false },
    { id: 24, name: "Carte de protection batterie au lithium", price: "7€", description: "Carte de protection pour batterie au lithium", image: "assets/img/protection_batterie.jpg", isFavorite: false },
    { id: 25, name: "Clavier à bouton 44 touches", price: "7€", description: "Clavier matriciel de 44 boutons", image: "assets/img/clavier_44.jpg", isFavorite: false },
    { id: 26, name: "Capteur de niveau d'eau de pluie", price: "4€", description: "Capteur de détection d'eau", image: "assets/img/capteur_eau.jpg", isFavorite: false },
    { id: 27, name: "Kit Arduino complet", price: "50€", description: "Kit complet de composants pour Arduino", image: "assets/img/kit_arduino.png", isFavorite: false },
    { id: 28, name: "Kit de 37 capteurs", price: "30€", description: "Kit comprenant 37 capteurs pour projets", image: "assets/img/kit_37_capteurs.jpg", isFavorite: false }
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
  