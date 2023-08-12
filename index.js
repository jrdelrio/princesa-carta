document.querySelectorAll(".folder-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".folder-tab")
      .forEach((innerTab) => innerTab.classList.remove("active"));

    document
      .querySelectorAll(".folder-content")
      .forEach((content) => content.classList.remove("active"));

    tab.classList.add("active");
    document
      .getElementById(tab.getAttribute("data-target"))
      .classList.add("active");
  });
});

// Set the initial active content
document.getElementById("folder-content-tapas").classList.add("active");

// jsons

const tapas = [
  {
    name: "Patatas Bravas",
    price: "5.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Buñelos de Bacalao",
    price: "5.00",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Bomba Tapería",
    price: "2.85",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Croqueta de Jamón",
    price: "1.80",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Boquerones Fritos",
    price: "6.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Calamares Fritos",
    price: "8.25",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Rabas de Pollo",
    price: "6.95",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Boquerones en Vinagre",
    price: "4.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Mejillones al Vapor",
    price: "5.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Sardinas a la plancha",
    price: "5.75",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Gambas al Ajillo",
    price: "8.95",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Pulpo a la gallega",
    price: "13.95",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Choricitos a la Cerveza",
    price: "4.95",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Lacon con Patatas Cocidas",
    price: "4.75",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Morcilla de Burgos",
    price: "4.55",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Pollo al Ajillo",
    price: "6.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Butifarra con Patatas",
    price: "7.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Tortilla de Patatas",
    price: "4.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Pimientos de Padrón",
    price: "5.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Champiñones al Jerez",
    price: "5.85",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Surtido de Verduras Salteadas",
    price: "7.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Gazpacho Andalús",
    price: "7.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Gyozas de Verduras",
    price: "6.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Gyozas de Pollo (5pcs)",
    price: "6.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Jamon Ibérico",
    price: "12.95",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Queso Curado",
    price: "5.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Pan con Tomate",
    price: "2.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Pan",
    price: "1.50",
    image: "./images/generic-tapa.jpg",
  },

  {
    name: "Olivas",
    price: "2.20",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Olivas Rellenas",
    price: "2.50",
    image: "./images/generic-tapa.jpg",
  },
];

const paellas = [
  {
    name: "Paella de Mariscos",
    price: "27.00",
    image: "./images/generic-paella.jpg",
  },
  {
    name: "Paella de Pollo",
    price: "27.00",
    image: "./images/generic-paella.jpg",
  },
  {
    name: "Paella de Verduras",
    price: "22.00",
    image: "./images/generic-paella.jpg",
  },
  {
    name: "Arroz Negro",
    price: "27.00",
    image: "./images/generic-paella.jpg",
  },
];

const drinks = [
  {
    name: "Agua",
    price: "2.50",
    image: "images/agua.png",
  },
  {
    name: "Agua con Gas",
    price: "2.50",
    image: "./images/perrier.png",
  },
  {
    name: "Coca Cola",
    price: "3.50",
    image: "./images/coca-cola-classic.png",
  },
  {
    name: "Coca Cola Zero",
    price: "3.50",
    image: "./images/coca-cola-zero.png",
  },
  {
    name: "Fanta",
    price: "",
    image: "./images/fanta-classic.png",
  },
  {
    name: "Fanta Limón",
    price: "",
    image: "./images/fanta-lemon.png",
  },
  {
    name: "Sprite",
    price: "",
    image: "./images/sprite-classic.png",
  },
  {
    name: "7Up",
    price: "",
    image: "",
  },
  {
    name: "Nestea",
    price: "",
    image: "images/nestea.png",
  },
  {
    name: "Agua Tónica",
    price: "2.50",
    image: "",
  },
  {
    name: "Zumos",
    price: "2.50",
    image: "",
  },
  {
    name: "Ginger Ale",
    price: "2.50",
    image: "",
  },
  {
    name: "Red Bull",
    price: "3.00",
    image: "images/red-bull.png",
  },
];

const beers = [
  {
    name: "Moritz 7 300cc",
    price: "",
    image: "",
  },
  {
    name: "Moritz 7 500cc",
    price: "",
    image: "",
  },
  {
    name: "Moritz Radler 300cc",
    price: "",
    image: "",
  },
  {
    name: "Moritz Radler 500cc",
    price: "",
    image: "",
  },
  {
    name: "Moritz Epidor",
    price: "27.00",
    image: "./images/generic-paella.jpg",
  },
  {
    name: "Ámbar (sin glúten)",
    price: "",
    image: "",
  },
  {
    name: "Moritz 0.0 (sin alcohol)",
    price: "",
    image: "",
  },
];

const coctails = [
  {
    name: "Mojito",
    price: "7.00",
    image: "images/mojito.png",
  },
  {
    name: "Caipirinha",
    price: "7.00",
    image: "images/caipirinha.png",
  },
  {
    name: "Caipiroska",
    price: "7.00",
    image: null,
  },
  {
    name: "Margarita",
    price: "7.50",
    image: "images/margarita.png"
  },
  {
    name: "Aperol Spritz",
    price: "6.00",
    image: null,
  },
  {
    name: "Tequila Sunrise",
    price: "7.00",
    image: null,
  },
  {
    name: "Negroni",
    price: "8.00",
    image: null,
  },
  {
    name: "Long Island Iced Tea",
    price: "8.00",
    image: null,
  },
  {
    name: "Moscow Mule",
    price: "8.00",
    image: null,
  },
  {
    name: "Espresso Martini",
    price: "8.00",
    image: null,
  },
];

// generate html functions

function generateTapaHtml(tapa) {
  return `
        <div class="card card-tapa" style="width: 18rem;">
            <img src="${tapa.image}" class="card-img-top" alt="...">
            <div class="card-body card-body-top">
                <h5 class="card-name">${tapa.name}</h5>
                <p class="card-text">Precio: ${tapa.price}€</p>
            </div>
            <div class="card-body card-body-bottom">
                <i class="fa-solid fa-circle-plus"></i>
            </div>
        </div>
    `;
}

function generatePaellaHtml(paella) {
  return `
        <div class="card card-tapa" style="width: 18rem;">
            <img src="${paella.image}" class="card-img-top" alt="${paella.name}">
            <div class="card-body card-body-top">
                <h5 class="card-name">${paella.name}</h5>
                <p class="card-text">Precio: ${paella.price}€</p>
            </div>
            <div class="card-body card-body-bottom">
                <i class="fa-solid fa-circle-plus"></i>
            </div>
        </div>
    `;
}

function generateDrinkHtml(drink) {
  return `
    <div class="col">
    <div class="card drink-card">
        <img src="${drink.image}" class="card-img-top" alt="${drink.name}">
        <div class="card-body">
            <h5 class="card-title">${drink.name}</h5>
            <p class="card-text"><i class="fa-solid fa-wine-glass"></i> ${drink.price}€
        </div>
    </div>
</div>
      `;
}

function generateCoctailHtml(coctail) {
  return `
      <div class="col">
      <div class="card drink-card">
          <img src="${coctail.image}" class="card-img-top" alt="${coctail.name}">
          <div class="card-body">
              <h5 class="card-title">${coctail.name}</h5>
              <p class="card-text"><i class="fa-solid fa-wine-glass"></i> ${coctail.price}€
          </div>
      </div>
  </div>
        `;
}

// mapping and adding

const tapasHtml = tapas.map(generateTapaHtml).join("");

document
  .getElementById("folder-content-tapas")
  .insertAdjacentHTML("beforeend", tapasHtml);

const paellasHtml = paellas.map(generatePaellaHtml).join("");

document
  .getElementById("folder-content-paellas")
  .insertAdjacentHTML("beforeend", paellasHtml);

const drinksHtml = drinks.map(generateDrinkHtml).join("");

document
  .getElementById("folder-content-drinks-aux")
  .insertAdjacentHTML("beforeend", drinksHtml);

const coctailsHtml = coctails.map(generateCoctailHtml).join("");

document
  .getElementById("folder-content-coctails-aux")
  .insertAdjacentHTML("beforeend", coctailsHtml);
