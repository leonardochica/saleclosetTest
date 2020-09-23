// Burger Menu Toggle
const navToggle = document.querySelector('.navbar-toggle');

const navbar = document.querySelector('.navbar');

const burgerMenu = document.querySelector('.burger-menu');

const overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('navbar--visible');
  burgerMenu.classList.toggle('fa-times');
  overlay.classList.toggle('overlay--visible');
});

overlay.addEventListener('click', () => {
  navbar.classList.toggle('navbar--visible');
  burgerMenu.classList.toggle('fa-times');
  overlay.classList.toggle('overlay--visible');
});

// Smooth Scrolling to Sections
// ======================================
const scrollingSections = document.querySelectorAll('.section__scrolling');

for (const section of scrollingSections) {
  section.addEventListener('click', smoothScrolling);
}

function smoothScrolling(e) {
  e.preventDefault();

  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop - 100,
    behavior: 'smooth',
  });
}

// Tabs for Ropa Section
// =======================================
const tabs = document.querySelectorAll('[data-tab-target]');

const tabsContent = document.querySelectorAll('.tab__content');

tabs.forEach((tab) =>
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    // Reset active class in tabs
    tabs.forEach((tabItem) => {
      tabItem.classList.remove('tab--active');
    });

    // Add active class to clicked tab
    tab.classList.add('tab--active');

    // Reset active class in tabs content
    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove('tab__content--active');
    });

    // Add active class to content of clicked tab
    target.classList.add('tab__content--active');
  })
);

const goFirstTab = document.querySelector('.button__goFirstTab');

const goSecondTab = document.querySelector('.button__goSecondTab');

goFirstTab.addEventListener('click', () => {
  tabs[0].click();
});

goSecondTab.addEventListener('click', () => {
  tabs[1].click();
});

// Load product Info
// ===============================

const ropaArray = [
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Vestido Salida Playera',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$30.000',
    brand: 'Varias Marcas',
    size: 'M',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Blusa Azul Marino',
    description: 'Color Azul Marino largo medio tonoss',
    price: '$20.000',
    brand: 'Forever 21',
    size: 'M',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Top Pantera Rosa',
    description: '',
    price: '$15.000',
    brand: 'People',
    size: 'S',
    numberImages: 3,
  },
];

const ropaSegundaArray = [
  {
    category: 'ropaSegunda',
    offer: 'yes',
    item: 'Blusa Estraple',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$22.500',
    brand: 'Varias Marcas',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Blusa Pantera',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto',
    price: '$25.000',
    brand: 'People',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Enterizo Pantalón ',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$50.000',
    brand: 'Varias Marcas',
    size: 'L',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'yes',
    item: 'Leggings Terciopelo',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$25.000',
    brand: 'Varias Marcas',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido Dorado',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$40.000',
    brand: 'Varias Marcas',
    size: 'M',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido Velo',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$38.500',
    brand: 'Varias Marcas',
    size: 'L',
    numberImages: 3,
  },
];

const zapatosArray = [
  {
    category: 'zapatos',
    offer: 'no',
    item: 'Tacones Negros',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$25.000',
    brand: 'Varias Marcas',
    size: '34',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    offer: 'no',
    item: 'Tacones Rosados',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$35.000',
    brand: 'People',
    size: '32',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    offer: 'no',
    item: 'Tenis Rosa',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$60.000',
    brand: 'Nike',
    size: '30',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    offer: 'yes',
    item: 'Botas Negras',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$75.000',
    brand: 'Varias Marcas',
    size: '28',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    offer: 'no',
    item: 'Tacones Dorados',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$49.000',
    brand: 'Varias Marcas',
    size: '32',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    offer: 'no',
    item: 'Zapatos Multicolor',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$70.000',
    brand: 'Adidas',
    size: '30',
    numberImages: 3,
  },
];

const accessoriosArray = [
  {
    category: 'accessorios',
    offer: 'no',
    item: 'Mochila Negra Mickey',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$45.000',
    brand: 'Disney',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'accessorios',
    offer: 'no',
    item: 'Mochila Amarilla Caterpillar',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$35.000',
    brand: 'Caterpillar',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'accessorios',
    offer: 'no',
    item: 'Mochila Negra Mickey',
    description:
      'Color Rosado largo para salida a playa solo fue usado una vez. En perfecto estado',
    price: '$60.000',
    brand: 'Disney',
    size: 'Única',
    numberImages: 3,
  },
];

const offerArray = [];

const productsArrays = [
  ropaArray,
  ropaSegundaArray,
  zapatosArray,
  accessoriosArray,
];

productsArrays.forEach((productArray) => {
  productArray.forEach((productItem) => {
    let cloneItem = Object.assign({}, productItem);

    if (cloneItem.offer === 'yes') {
      offerArray.push(cloneItem);
    }
  });
});

offerArray.forEach((offerProduct) => {
  offerProduct.category = 'ofertas';
});

productsArrays.unshift(offerArray);

class Card {
  constructor(category, offer, item, description, price, brand, size, images) {
    this.category = category;
    this.offer = offer;
    this.item = item;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.size = size;
    this.images = images;
  }
}

class UI {
  // Add card
  addCardToSection(arrayIndex, card, index) {
    const cardContainer = document.querySelectorAll('.products-wrapper')[
      arrayIndex
    ];

    const cardElement = document.createElement('div');

    cardElement.className = 'card';

    // Card Images
    let listImages = '';

    for (let i = 1; i <= card.images; i++) {
      listImages += `<li class="splide__slide">
      <a
        href="images/productos/${card.category}/articulo${
        index + 1
      }/image${i}.jpg"
        data-lightbox="${card.category}:Articulo ${index + 1}"
      >
        <img
          src="images/productos/${card.category}/articulo${
        index + 1
      }/image${i}.jpg"
          alt="${card.item}, ${card.brand} (Foto ${i})"
          class="card__image" loading="lazy"
        />
      </a>
      </li>`;
    }

    // Card Description
    let cardDescription = '';
    if (card.description.length > 36) {
      cardDescription = `
      <p class="card__description__text">${card.description}</p>
      <a        
      class="card__description__link link--primary">[Leer más]</a>
      `;
    } else {
      cardDescription = `
      <p class="card__description__text">${card.description}</p>      
      `;
    }

    // Card Offer
    let cardOffer = '';
    if (card.offer === 'yes') {
      cardOffer = `
      <p class="card__offer">Oferta</p> 
      `;
    }

    cardElement.innerHTML = `
    <div class="card__top">
      <div class="splide">
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev">
            <i class="fas fa-arrow-left"></i>
          </button>
          <button class="splide__arrow splide__arrow--next">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
        <div class="splide__track">
          <ul class="splide__list">
            ${listImages}
          </ul>
        </div>
      </div>
    </div>
    <div class="card__bottom">   
    <h3 class="card__title">${card.item}</h3>
    <div class="card__description">
      ${cardDescription}
    </div>
    <p class="card__price">${card.price}</p>
    <div class="card__text">
      <p class="card__brand">${card.brand}</p>
      <p class="card__size">Talla: ${card.size}</p>
    </div>
    <div class="card__contact">      
      <a
        href="#"
        title="Email"
        target="_blank"
        class="card__contact__link button--email btn--primary"
      >
        <i class="card__contact__icon fas fa-envelope"></i>
      </a>
    </div>
    <div class="card__buttons">
      <a
        href="#"
        target="_blank"
        class="card__button button--whatsapp btn--primary"
        title="WhatsApp"
      >
        <i class="card__icon fab fa-whatsapp"></i>
        Comprar
      </a>
      <a
        href="https://m.me/111735730171780"
        target="_blank"
        class="card__button button--messenger btn--primary"
        title="Facebook Messenger"
      >
        <i class="card__icon fab fa-facebook-messenger"></i>
        Comprar
      </a>
      </div>
    </div>
    ${cardOffer}
    `;

    cardContainer.appendChild(cardElement);
  }

  expandDescription(target) {
    let itemDescription = target.parentElement.children[0];

    itemDescription.classList.add('card__description__expand');

    target.textContent = '[Leer menos]';
  }

  contractDescription(target) {
    let itemDescription = target.parentElement.children[0];

    itemDescription.classList.remove('card__description__expand');

    target.textContent = '[Leer más]';
  }

  sendToWhatsapp(target) {
    let itemTitle = target.parentElement.parentElement.children[0].textContent;

    let itemPrice = target.parentElement.parentElement.children[2].textContent;

    let itemSize =
      target.parentElement.parentElement.children[3].children[1].textContent;

    target.setAttribute(
      'href',
      `https://wa.me/573163190569/?text=Sale Closet estoy interesado(a) en: ${itemTitle} ${itemSize}, Precio: ${itemPrice}`
    );
  }

  sendToEmail(target) {
    let itemTitle = target.parentElement.parentElement.children[0].textContent;

    let itemPrice = target.parentElement.parentElement.children[2].textContent;

    let itemSize =
      target.parentElement.parentElement.children[3].children[1].textContent;

    target.setAttribute(
      'href',
      `mailto:saleclosetonline@gmail.com?subject=Sale Closet: ${itemTitle} ${itemSize}, ${itemPrice}&body=Cordial Saludo, %0D%0A%0D%0AEstoy interesado(a) en ${itemTitle} ${itemSize}, con un costo de ${itemPrice}. %0D%0A%0D%0AMuchas Gracias`
    );
  }
}

document.addEventListener('DOMContentLoaded', function (e) {
  productsArrays.forEach((productArray, arrayIndex) =>
    productArray.forEach((arrayItem, index) => {
      const card = new Card(
        arrayItem.category,
        arrayItem.offer,
        arrayItem.item,
        arrayItem.description,
        arrayItem.price,
        arrayItem.brand,
        arrayItem.size,
        arrayItem.numberImages
      );

      const ui = new UI();
      ui.addCardToSection(arrayIndex, card, index);
    })
  );
});

// Click Events in card
const productWrappers = document.querySelectorAll('.products-wrapper');

productWrappers.forEach((productWrapper) =>
  productWrapper.addEventListener('click', function (e) {
    const ui = new UI();

    // Expand description
    if (e.target.textContent === '[Leer más]') {
      ui.expandDescription(e.target);
    } else if (e.target.textContent === '[Leer menos]') {
      ui.contractDescription(e.target);
    }

    // Whatsapp
    if (e.target.className === 'card__button button--whatsapp btn--primary') {
      ui.sendToWhatsapp(e.target);
    }

    // Email
    if (
      e.target.className === 'card__contact__link button--email btn--primary'
    ) {
      ui.sendToEmail(e.target);
    }
  })
);

// Load slider for products
// ===================================

function sliderLoading() {
  let elms = document.getElementsByClassName('splide');

  for (let i = 0, len = elms.length; i < len; i++) {
    new Splide(elms[i]).mount();
  }
}

setTimeout(() => {
  sliderLoading();
}, 10);

// Contact Form Validation
const inputName = document.getElementById('input__name');

const errorMessageName = document.querySelector('.errorMessage--name');

const inputEmail = document.getElementById('input__email');

const errorMessageEmail = document.querySelector('.errorMessage--email');

const inputMessage = document.getElementById('input__message');

const errorMessageMessage = document.querySelector('.errorMessage--message');

const inputCheckbox = document.getElementById('input__checkbox');

const errorMessageCheckbox = document.querySelector('.errorMessage--checkbox');

const buttonForm = document.getElementById('form__button');

let validation = false;

inputName.addEventListener('input', validateName);
inputEmail.addEventListener('input', validateEmail);
inputMessage.addEventListener('input', validateMessage);
inputCheckbox.addEventListener('input', checkboxChecked);

function validateName() {
  if (inputName.validity.valueMissing) {
    errorMessageName.textContent = '* Por favor completa el campo Nombre';
    inputName.classList.add('contact__input--error');
    validation = false;
  } else {
    errorMessageName.textContent = '';
    inputName.classList.remove('contact__input--error');
    validation = true;
  }

  return validation;
}

function validateEmail() {
  if (inputEmail.validity.valueMissing) {
    errorMessageEmail.textContent =
      '* Por favor completa el campo Correo Electrónico';
    inputEmail.classList.add('contact__input--error');
    validation = false;
  } else if (!inputEmail.validity.valid) {
    errorMessageEmail.textContent =
      'Por favor ingresa un Correo Electrónico válido';
    inputEmail.classList.add('contact__input--error');
    validation = false;
  } else {
    errorMessageEmail.textContent = '';
    inputEmail.classList.remove('contact__input--error');
    validation = true;
  }

  return validation;
}

function validateMessage() {
  if (inputMessage.validity.valueMissing) {
    errorMessageMessage.textContent = '* Por favor completa el campo Mensaje';
    inputMessage.classList.add('contact__message--error');
    validation = false;
  } else {
    errorMessageMessage.textContent = '';
    inputMessage.classList.remove('contact__message--error');
    validation = true;
  }

  return validation;
}

function checkboxChecked() {
  if (inputCheckbox.validity.valueMissing) {
    errorMessageCheckbox.textContent =
      '* Por favor acepta la política de Protección de datos';
    validation = false;
  } else {
    errorMessageCheckbox.textContent = '';
    validation = true;
  }

  return validation;
}

function SubmitForm(e) {
  const valName = validateName();
  const valEmail = validateEmail();
  const valMessage = validateMessage();
  const valCheckbox = checkboxChecked();

  if (!valName || !valEmail || !valMessage || !valCheckbox) {
    e.preventDefault();
  }
}

// Scroll to Top
const scrollToTop = document.querySelector('.scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTop.classList.add('scrollToTop--visible');
  } else {
    scrollToTop.classList.remove('scrollToTop--visible');
  }
});

scrollToTop.addEventListener('click', () => {
  scroll({
    top: 0,
    behavior: 'smooth',
  });
});

// Filter products
const filter = document.getElementById('filter');

const filterButton = document.querySelector('.filter__button');

filter.addEventListener('keyup', filterProducts);
filterButton.addEventListener('click', filterProducts);

function filterProducts(e) {
  const text = filter.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(function (card) {
    if (card.parentElement.parentElement.matches('.tab__content')) {
      const item = card.children[1].children[0].textContent;

      if (item.toLowerCase().indexOf(text) != -1) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}

// Footer Scrolling to Ropa Section and Filter
const footerVestidos = document.querySelector('.footer__vestidos');

const footerBlusas = document.querySelector('.footer__blusas');

const footerChaquetas = document.querySelector('.footer__chaquetas');

const footerShorts = document.querySelector('.footer__shorts');

const footerPantalones = document.querySelector('.footer__pantalones');

const footerLeggings = document.querySelector('.footer__leggings');

function TabandFilter(item) {
  tabs[0].click();
  filter.value = item;
  filterButton.click();
}

footerVestidos.addEventListener('click', () => {
  TabandFilter('vestido');
});

footerBlusas.addEventListener('click', () => {
  TabandFilter('blusa');
});

footerChaquetas.addEventListener('click', () => {
  TabandFilter('chaqueta');
});

footerShorts.addEventListener('click', () => {
  TabandFilter('short');
});

footerPantalones.addEventListener('click', () => {
  TabandFilter('pantalón');
});

footerLeggings.addEventListener('click', () => {
  TabandFilter('leggings');
});
