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
document.getElementById("folder-content-wines").classList.add("active");

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
    price: "2.50",
    image: "./images/coca-cola-zero.png",
  },
  {
    name: "Fanta",
    price: "2.50",
    image: "./images/fanta-classic.png",
  },
  {
    name: "Fanta Limón",
    price: "2.50",
    image: "./images/fanta-lemon.png",
  },
  {
    name: "Sprite",
    price: "2.50",
    image: "./images/sprite-classic.png",
  },
  {
    name: "7Up",
    price: "2.50",
    image: "images/7up.png",
  },
  {
    name: "Nestea",
    price: "2.50",
    image: "images/nestea.png",
  },
  {
    name: "Agua Tónica",
    price: "2.50",
    image: "images/tonic.png",
  },
  {
    name: "Zumos",
    price: "2.50",
    image: "images/orange-juice.png",
  },
  {
    name: "Ginger Ale",
    price: "2.50",
    image: "images/ginger-ale.png",
  },
  {
    name: "Red Bull",
    price: "3.00",
    image: "images/red-bull.png",
  },
  {
    name: "Limonada",
    price: "3.50",
    image: "images/lemonade.png",
  },
];

const beers = [
  {
    name: "Moritz 7 330cc",
    price: "2.95",
    image: "images/moritz7-330.png",
  },
  {
    name: "Moritz 7 650cc",
    price: "5.5",
    image: "images/moritz7-650.png",
  },
  {
    name: "Moritz Radler 330cc",
    price: "2.95",
    image: "",
  },
  {
    name: "Moritz Radler 650cc",
    price: "5.50",
    image: "",
  },
  {
    name: "Moritz Epidor",
    price: "3.00",
    image: "./images/epidor.png",
  },
  {
    name: "Ámbar (sin glúten)",
    price: "3.50",
    image: "images/ambar.png",
  },
  {
    name: "Red IPA",
    price: "3.50",
    image: "images/ipa.png",
  },
  {
    name: "Moritz 0.0 (sin alcohol)",
    price: "2.95",
    image: "images/0.0.png",
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
    image: "images/caipiroska.png",
  },
  {
    name: "Margarita",
    price: "7.50",
    image: "images/margarita.png",
  },
  {
    name: "Aperol Spritz",
    price: "6.00",
    image: "images/aperol-spritz.png",
  },
  {
    name: "Tequila Sunrise",
    price: "7.00",
    image: "images/tequila-sunrise.png",
  },
  {
    name: "Negroni",
    price: "8.00",
    image: "images/negroni.png",
  },
  {
    name: "Long Island Iced Tea",
    price: "8.00",
    image: "images/long-island-tea.png",
  },
  {
    name: "Moscow Mule",
    price: "8.00",
    image: "images/moscow-mule.png",
  },
  {
    name: "Espresso Martini",
    price: "8.00",
    image: "images/espresso-martini.png",
  },
];

const wines = [
    {
      type: "red",
      name: "Vino de la Casa",
      glassPrice: "3.50",
      bottlePrice: "12.95",
      image: "wine-images/solaguen.png"
    },
    {
      type: "red",
      name: "Ull de Molins Montsant Catalunya",
      glassPrice: "4.00",
      bottlePrice: "16.00",
      image: "wine-images/solaguen.png"
    },
    {
      type: "red",
      name: "Camins del Vents Pla de Bages",
      glassPrice: "4.50",
      bottlePrice: "20.00",
      image: "wine-images/solaguen.png"
    },
    {
      type: "red",
      name: "Ebano 6 Ribera/Cocecha",
      glassPrice: "4.00",
      bottlePrice: "16.00",
      image: "wine-images/solaguen.png"
    },
    {
      type: "red",
      name: "Solaguen Rioja/Crianza",
      glassPrice: "4.50",
      bottlePrice: "20.00",
      image: "wine-images/solaguen.png"
    },
    {
      type: "red",
      name: "Viña Salceda Rioja Reserva",
      glassPrice: null,
      bottlePrice: "22.00",
      image: "wine-images/solaguen.png"
    },
    {
      type: "white",
      name: "Vino de la Casa",
      glassPrice: "3.50",
      bottlePrice: "12.95",
      image: "wine-images/solaguen.png"
    },
    {
      type: "white",
      name: "Granfeudo Navarra/Chardonnay",
      glassPrice: "3.50",
      bottlePrice: "15.00",
      image: "wine-images/solaguen.png"
    },
    {
      type: "white",
      name: "Petit Baldoma",
      glassPrice: "3.50",
      bottlePrice: "15.00",
      image: "wine-images/solaguen.png"
    },
    {
      type: "white",
      name: "Baluarte Verdejo",
      glassPrice: "4.00",
      bottlePrice: "18.00",
      image: "wine-images/solaguen.png"
    },
    {
      type: "white",
      name: "Innurieta Sauvignon Blanc",
      glassPrice: "4.00",
      bottlePrice: "18.00",
      image: "wine-images/solaguen.png"
    },
    {
      type: "rose",
      name: "Vino de la Casa",
      glassPrice: "3.50",
      bottlePrice: "12.95",
      image: "wine-images/solaguen.png"
    },
    {
      type: "rose",
      name: "Corral Navarra",
      glassPrice: "3.50",
      bottlePrice: "15.00",
      image: "wine-images/solaguen.png"
    },
    {
      type: "cava",
      name: "Cava de Casa",
      glassPrice: "3.50",
      bottlePrice: "14.50",
      image: "wine-images/solaguen.png"
    },
    {
      type: "cava",
      name: "Cava Reserva",
      glassPrice: null,
      bottlePrice: "18.50",
      image: "wine-images/solaguen.png"
    }
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

function generateBeerHtml(beer) {
  return `
        <div class="col">
        <div class="card drink-card">
            <img src="${beer.image}" class="card-img-top" alt="${beer.name}">
            <div class="card-body">
                <h5 class="card-title">${beer.name}</h5>
                <p class="card-text"><i class="fa-solid fa-wine-glass"></i> ${beer.price}€
            </div>
        </div>
    </div>
          `;
}

function generateWineHtml(wine) {
  const redWineColor = "#5c011f69";

  const whiteWineColor = "#d2f47c93";

  const roseWineColor = "#ffc1c1d7";

  const cavaWhineColor = "#FAE6C0";

  // css style
  // border: #FAE6C0 3px solid !important

  if (wine.type == "red") {
    return `
          <div class="col">
          <div class="card drink-card red-wine">
              <img src="${wine.image}" class="card-img-top" alt="${wine.name}">
              <div class="card-body">
                  <h5 class="card-title">${wine.name}</h5>
                  <p class="card-text"><i class="fa-solid fa-wine-glass"></i> ${wine.price}€
              </div>
          </div>
      </div>
            `;
  } else if (wine.type == "white") {
    return `
          <div class="col">
          <div class="card drink-card white-wine">
              <img src="${wine.image}" class="card-img-top" alt="${wine.name}">
              <div class="card-body">
                  <h5 class="card-title">${wine.name}</h5>
                  <p class="card-text"><i class="fa-solid fa-wine-glass"></i> ${wine.price}€
              </div>
          </div>
      </div>
            `;
  } else if (wine.type == "rose") {
    return `
          <div class="col">
          <div class="card drink-card rose-wine">
              <img src="${wine.image}" class="card-img-top" alt="${wine.name}">
              <div class="card-body">
                  <h5 class="card-title">${wine.name}</h5>
                  <p class="card-text"><i class="fa-solid fa-wine-glass"></i> ${wine.price}€
              </div>
          </div>
      </div>
            `;
  } else if (wine.type == "cava") {
    return `
          <div class="col">
          <div class="card drink-card cava-wine">
              <img src="${wine.image}" class="card-img-top" alt="${wine.name}">
              <div class="card-body">
                  <h5 class="card-title">${wine.name}</h5>
                  <p class="card-text"><i class="fa-solid fa-wine-glass"></i> ${wine.price}€
              </div>
          </div>
      </div>
            `;
  }
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

const beersHtml = beers.map(generateBeerHtml).join("");

document
  .getElementById("folder-content-beers-aux")
  .insertAdjacentHTML("beforeend", beersHtml);

const winesHtml = wines.map(generateWineHtml).join("");

document
  .getElementById("folder-content-wines-aux")
  .insertAdjacentHTML("beforeend", winesHtml);
