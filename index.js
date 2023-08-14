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

// language selector

document.addEventListener("DOMContentLoaded", function () {
  let flags = document.querySelectorAll(".flag");

  flags.forEach((flag) => {
    flag.addEventListener("click", function () {
      // Remove active-flag class from all flags
      flags.forEach((innerFlag) => {
        innerFlag.classList.remove("active-flag");
      });

      // Add active-flag class to the clicked flag
      flag.classList.add("active-flag");
    });
  });
});

// Translation Dictionary
const translations = {
  ESP: {
    tapas: "Tapas (Spanish translation)", // Placeholder, you can replace with actual translations.
    paellas: "Paellas (Spanish translation)",
    // ... Add other translations here.
  },
  ENG: {
    tapas: "Tapas (English translation)", // Placeholder, you can replace with actual translations.
    paellas: "Paellas (English translation)",
    // ... Add other translations here.
  },
  FRA: {
    tapas: "Tapas (French translation)", // Placeholder, you can replace with actual translations.
    paellas: "Paellas (French translation)",
    // ... Add other translations here.
  },
};

// Function to update the language
function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  if (lang === "ENG") {
    paellas.forEach((paella) => {
      paella.name = paella.nameEnglish;
    });
  } else if (lang === "FRA") {
    paellas.forEach((paella) => {
      paella.name = paella.nameEnglish;
    });
  }
  // Refresh the paellas content if necessary.
  // This is a simple way, there are more efficient ways based on the size and complexity of your app.
  document.getElementById("folder-content-paellas").innerHTML = paellas
    .map(generatePaellaHtml)
    .join("");
}

// Modify flag event listener
document.addEventListener("DOMContentLoaded", function () {
  let flags = document.querySelectorAll(".flag");

  flags.forEach((flag) => {
    flag.addEventListener("click", function () {
      // Remove active-flag class from all flags
      flags.forEach((innerFlag) => {
        innerFlag.classList.remove("active-flag");
      });

      // Add active-flag class to the clicked flag
      flag.classList.add("active-flag");

      // Update the language based on the clicked flag's alt attribute
      if (flag.alt === "ENG") {
        updateLanguage("ENG");
      } else if (flag.alt === "FRA") {
        updateLanguage("FRA");
      } else {
        // Reset to default (you can define your default language logic here)
        updateLanguage("ESP"); // Assuming "ESP" is your default language identifier.
      }
    });
  });
});

// jsons

const tapas = [
  {
    name: "Patatas Bravas",
    nameEnglish: "Patatas Bravas",
    price: "5.50",
    image: "./images/patatas-bravas.png",
  },
  {
    name: "Buñelos de Bacalao",
    nameEnglish: "Cod Fritters",
    price: "5.00",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: 'Bomba "Tapería"',
    nameEnglish: '"Tapería" Bomb',
    price: "2.85",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Croqueta de Jamón",
    nameEnglish: "Ham Croquette",
    price: "1.80",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Boquerones Fritos",
    nameEnglish: "Fried Anchoovies",
    price: "6.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Calamares Fritos",
    nameEnglish: "Fried Calamari",
    price: "8.25",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Rabas de Pollo",
    nameEnglish: "Crispy Chicken Fingers",
    price: "6.95",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Boquerones en Vinagre",
    nameEnglish: "Vinegar Anchovies",
    price: "4.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Mejillones al Vapor",
    nameEnglish: "Steamed Mussels",
    price: "5.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Sardinas a la plancha",
    nameEnglish: "Grilled Sardines",
    price: "5.75",
    image: "./images/sardinas.png",
  },
  {
    name: "Gambas al Ajillo",
    nameEnglish: "Shrimps in Garlic Sauce",
    price: "8.95",
    image: "./images/gambas.png",
  },
  {
    name: "Pulpo a la gallega",
    nameEnglish: "Steamed Octopus",
    price: "13.95",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Choricitos a la Cerveza",
    nameEnglish: "Baby Chorizos",
    price: "4.95",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Lacon con Patatas Cocidas",
    nameEnglish: "Pork Shoulder",
    price: "4.75",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Morcilla de Burgos",
    nameEnglish: "Black Sausage from Burgos",
    price: "4.55",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Pollo al Ajillo",
    nameEnglish: "Chicken in Garlic Sauce",
    price: "6.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Butifarra con Patatas",
    nameEnglish: "Botifarra with Potatoes",
    price: "7.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Tortilla de Patatas",
    nameEnglish: "Spanish Omelette",
    price: "4.50",
    image: "./images/tortilla.png",
  },
  {
    name: "Pimientos de Padrón",
    nameEnglish: '"Padrón" Peppers',
    price: "5.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Champiñones al Jerez",
    nameEnglish: "Mushrooms in Sherry Sauce",
    price: "5.85",
    image: "./images/champinones.png",
  },
  {
    name: "Surtido de Verduras Salteadas",
    nameEnglish: "Sauteed Vegetables",
    price: "7.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Gazpacho Andalús",
    nameEnglish: "",
    price: "7.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Gyozas de Verduras",
    nameEnglish: "Vegetable Gyozas",
    price: "6.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Gyozas de Pollo (5pcs)",
    nameEnglish: "Chicken Gyosas",
    price: "6.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Jamon Ibérico",
    nameEnglish: "Iberian Smoked Ham",
    price: "12.95",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Queso Curado",
    nameEnglish: "Cured Chesse",
    price: "5.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Pan con Tomate",
    nameEnglish: "Bread with Tomato",
    price: "2.50",
    image: "./images/pan-tomate.png",
  },
  {
    name: "Pan",
    nameEnglish: "Bread",
    price: "1.50",
    image: "./images/generic-tapa.jpg",
  },

  {
    name: "Olivas",
    nameEnglish: "Olives",
    price: "2.20",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Olivas Rellenas",
    nameEnglish: "Stuffed Olives",
    price: "2.50",
    image: "./images/generic-tapa.jpg",
  },
];

const paellas = [
  {
    name: "Paella de Mariscos",
    nameEnglish: "Seafood Paella",
    nameFrench: "Paella au Fruits de Mer",
    price: "27.00",
    image: "./images/generic-paella.jpg",
  },
  {
    name: "Paella de Pollo",
    nameEnglish: "Chicken Paella",
    nameFrench: "Paëlla au Poulet",
    price: "27.00",
    image: "./images/generic-paella.jpg",
  },
  {
    name: "Paella de Verduras",
    nameEnglish: "Vegetables Paella",
    nameFrench: "Paëlla Aux Légumes",
    price: "22.00",
    image: "./images/generic-paella.jpg",
  },
  {
    name: "Arroz Negro",
    nameEnglish: "Black Rise",
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
    image: "wine-images/solaguen.png",
  },
  {
    type: "red",
    name: "Ull de Molins Montsant Catalunya",
    glassPrice: "4.00",
    bottlePrice: "16.00",
    image: "wine-images/solaguen.png",
  },
  {
    type: "red",
    name: "Camins del Vents Pla de Bages",
    glassPrice: "4.50",
    bottlePrice: "20.00",
    image: "wine-images/solaguen.png",
  },
  {
    type: "red",
    name: "Ebano 6 Ribera/Cocecha",
    glassPrice: "4.00",
    bottlePrice: "16.00",
    image: "wine-images/solaguen.png",
  },
  {
    type: "red",
    name: "Solaguen Rioja/Crianza",
    glassPrice: "4.50",
    bottlePrice: "20.00",
    image: "wine-images/solaguen.png",
  },
  {
    type: "red",
    name: "Viña Salceda Rioja Reserva",
    glassPrice: null,
    bottlePrice: "22.00",
    image: "wine-images/solaguen.png",
  },
  {
    type: "white",
    name: "Vino de la Casa",
    glassPrice: "3.50",
    bottlePrice: "12.95",
    image: "wine-images/solaguen.png",
  },
  {
    type: "white",
    name: "Granfeudo Navarra/Chardonnay",
    glassPrice: "3.50",
    bottlePrice: "15.00",
    image: "wine-images/solaguen.png",
  },
  {
    type: "white",
    name: "Petit Baldoma",
    glassPrice: "3.50",
    bottlePrice: "15.00",
    image: "wine-images/solaguen.png",
  },
  {
    type: "white",
    name: "Baluarte Verdejo",
    glassPrice: "4.00",
    bottlePrice: "18.00",
    image: "wine-images/solaguen.png",
  },
  {
    type: "white",
    name: "Innurieta Sauvignon Blanc",
    glassPrice: "4.00",
    bottlePrice: "18.00",
    image: "wine-images/solaguen.png",
  },
  {
    type: "rose",
    name: "Vino de la Casa",
    glassPrice: "3.50",
    bottlePrice: "12.95",
    image: "wine-images/solaguen.png",
  },
  {
    type: "rose",
    name: "Corral Navarra",
    glassPrice: "3.50",
    bottlePrice: "15.00",
    image: "wine-images/solaguen.png",
  },
  {
    type: "cava",
    name: "Cava de Casa",
    glassPrice: "3.50",
    bottlePrice: "14.50",
    image: "wine-images/solaguen.png",
  },
  {
    type: "cava",
    name: "Cava Reserva",
    glassPrice: null,
    bottlePrice: "18.50",
    image: "wine-images/solaguen.png",
  },
];

const eggs = [
  {
    name: "con Jamón Ibérico",
    price: "9.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "con Choricitos",
    price: "8.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "con Butifarra Negra",
    price: "8.50",
    image: "./images/generic-tapa.jpg",
  },
];

const desserts = [
  {
    name: "Crema Catalana",
    price: "5.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Strudel de Manzana",
    price: "5.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Helado",
    price: "5.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Sorbet de Limón con Cava",
    price: "5.50",
    image: "./images/generic-tapa.jpg",
  },
];

const coffees = [
  {
    name: "Café solo",
    price: "2.00",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Café con Leche",
    price: "2.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Café Cortado",
    price: "2.25",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Café Americano",
    price: "2.50",
    image: "./images/generic-tapa.jpg",
  },
  {
    name: "Carajillo",
    price: "3.00",
    image: "./images/generic-tapa.jpg",
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
  const name = activeLanguage === "ENG" ? paella.nameEnglish : paella.name;
  return `
      <div class="card card-tapa" style="width: 18rem;">
          <img src="${paella.image}" class="card-img-top" alt="${name}">
          <div class="card-body card-body-top">
              <h5 class="card-name">${name}</h5>
              <p class="card-text">Precio: ${paella.price}€</p>
          </div>
          <div class="card-body card-body-bottom">
              <i class="fa-solid fa-circle-plus"></i>
          </div>
      </div>
    `;
}

function updatePaellaContent() {
  const paellasHtml = paellas.map(generatePaellaHtml).join("");
  document.getElementById("folder-content-paellas").innerHTML = paellasHtml;
}

// Function to update the language
function updateLanguage(lang) {
  activeLanguage = lang; // Update the active language

  // Translate UI texts
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update paellas based on the active language
  updatePaellaContent();
}

// Modify flag event listener
document.addEventListener("DOMContentLoaded", function () {
  let flags = document.querySelectorAll(".flag");

  flags.forEach((flag) => {
    flag.addEventListener("click", function () {
      // Remove active-flag class from all flags
      flags.forEach((innerFlag) => {
        innerFlag.classList.remove("active-flag");
      });

      // Add active-flag class to the clicked flag
      flag.classList.add("active-flag");

      // Update the language based on the clicked flag's alt attribute
      if (flag.alt === "ENG") {
        updateLanguage("ENG");
      } else if (flag.alt === "FRA") {
        updateLanguage("FRA");
      } else {
        updateLanguage("ESP");
      }
    });
  });
});

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

function generateEggHtml(egg) {
  return `
          <div class="card card-tapa" style="width: 18rem;">
              <img src="${egg.image}" class="card-img-top" alt="${egg.name}">
              <div class="card-body card-body-top">
                  <h5 class="card-name">${egg.name}</h5>
                  <p class="card-text">Precio: ${egg.price}€</p>
              </div>
              <div class="card-body card-body-bottom">
                  <i class="fa-solid fa-circle-plus"></i>
              </div>
          </div>
      `;
}

function generateDessertHtml(dessert) {
  return `
        <div class="col">
        <div class="card drink-card">
            <img src="${dessert.image}" class="card-img-top" alt="${dessert.name}">
            <div class="card-body">
                <h5 class="card-title">${dessert.name}</h5>
                <p class="card-text"><i class="fa-solid fa-wine-glass"></i> ${dessert.price}€
            </div>
        </div>
    </div>
          `;
}

function generateCoffeeHtml(coffee) {
  return `
          <div class="col">
          <div class="card drink-card">
              <img src="${coffee.image}" class="card-img-top" alt="${coffee.name}">
              <div class="card-body">
                  <h5 class="card-title">${coffee.name}</h5>
                  <p class="card-text"><i class="fa-solid fa-wine-glass"></i> ${coffee.price}€
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

const beersHtml = beers.map(generateBeerHtml).join("");

document
  .getElementById("folder-content-beers-aux")
  .insertAdjacentHTML("beforeend", beersHtml);

const winesHtml = wines.map(generateWineHtml).join("");

document
  .getElementById("folder-content-wines-aux")
  .insertAdjacentHTML("beforeend", winesHtml);

const eggsHtml = eggs.map(generateEggHtml).join("");

document
  .getElementById("folder-content-eggs")
  .insertAdjacentHTML("beforeend", eggsHtml);

const dessertsHtml = desserts.map(generateDessertHtml).join("");

document
  .getElementById("folder-content-desserts-aux")
  .insertAdjacentHTML("beforeend", dessertsHtml);

const coffeesHtml = coffees.map(generateCoffeeHtml).join("");

document
  .getElementById("folder-content-coffees-aux")
  .insertAdjacentHTML("beforeend", coffeesHtml);
