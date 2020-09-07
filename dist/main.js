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

// Showcase Draggable Slider
// =======================================

// Reload window when resizing
window.onresize = function () {
  location.reload();
};

const sliderItems = document.querySelector('.slider__items'),
  prev = document.querySelector('.prev'),
  next = document.querySelector('.next');

slide(sliderItems, prev, next);

function slide(items, prev, next) {
  let posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.getElementsByClassName('slide'),
    slidesLength = slides.length,
    slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;

  // Copy first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);

  // Mouse and Touch events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);

  // Click events
  prev.addEventListener('click', function () {
    shiftSlide(-1);
  });
  next.addEventListener('click', function () {
    shiftSlide(1);
  });

  // Transition events
  items.addEventListener('transitionend', checkIndex);

  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();

    posInitial = items.offsetLeft;

    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }

    items.style.left = items.offsetLeft - posX2 + 'px';
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;

    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = posInitial + 'px';
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function shiftSlide(dir, action) {
    items.classList.add('shifting');

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir == 1) {
        items.style.left = posInitial - slideSize + 'px';
        index++;
      } else if (dir == -1) {
        items.style.left = posInitial + slideSize + 'px';
        index--;
      }
    }

    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove('shifting');

    // Add class to slide with image background
    if (index === 1) {
      slides[2].classList.add('slide__animation');
    } else {
      slides[2].classList.remove('slide__animation');
    }

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + 'px';
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + 'px';
      index = 0;
    }

    allowShift = true;
  }
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
    item: 'Vestido Salida Playera',
    price: '$30.000',
    brand: 'Varias Marcas',
    size: 'M',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    item: 'Blusa Azul Marino',
    price: '$20.000',
    brand: 'Forever 21',
    size: 'M',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    item: 'Top Pantera Rosa',
    price: '$15.000',
    brand: 'People',
    size: 'S',
    numberImages: 3,
  },
];

const ropaSegundaArray = [
  {
    category: 'ropaSegunda',
    item: 'Blusa Estraple',
    price: '$22.500',
    brand: 'Varias Marcas',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    item: 'Blusa Pantera',
    price: '$25.000',
    brand: 'People',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    item: 'Enterizo Pantalón ',
    price: '$50.000',
    brand: 'Varias Marcas',
    size: 'L',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    item: 'Leggings Terciopelo',
    price: '$25.000',
    brand: 'Varias Marcas',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    item: 'Vestido Dorado',
    price: '$40.000',
    brand: 'Varias Marcas',
    size: 'M',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    item: 'Vestido Velo',
    price: '$38.500',
    brand: 'Varias Marcas',
    size: 'L',
    numberImages: 3,
  },
];

const zapatosArray = [
  {
    category: 'zapatos',
    item: 'Tacones Negros',
    price: '$25.000',
    brand: 'Varias Marcas',
    size: '34',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    item: 'Tacones Rosados',
    price: '$35.000',
    brand: 'People',
    size: '32',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    item: 'Tenis Rosa',
    price: '$60.000',
    brand: 'Nike',
    size: '30',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    item: 'Botas Negras',
    price: '$75.000',
    brand: 'Varias Marcas',
    size: '28',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    item: 'Tacones Dorados',
    price: '$49.000',
    brand: 'Varias Marcas',
    size: '32',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    item: 'Zapatos Multicolor',
    price: '$70.000',
    brand: 'Adidas',
    size: '30',
    numberImages: 3,
  },
];

const accessoriosArray = [
  {
    category: 'accessorios',
    item: 'Mochila Negra Mickey',
    price: '$45.000',
    brand: 'Disney',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'accessorios',
    item: 'Mochila Amarilla Caterpillar',
    price: '$35.000',
    brand: 'Caterpillar',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'accessorios',
    item: 'Mochila Negra Mickey',
    price: '$60.000',
    brand: 'Disney',
    size: 'Única',
    numberImages: 3,
  },
];

const productsArrays = [
  ropaArray,
  ropaSegundaArray,
  zapatosArray,
  accessoriosArray,
];

class Card {
  constructor(category, item, price, brand, size, images) {
    this.category = category;
    this.item = item;
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
          alt=""
          class="card__image"
        />
      </a>
      </li>`;
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
    <p class="card__price">${card.price}</p>
    <div class="card__text">
      <p class="card__brand">${card.brand}</p>
      <p class="card__size">Talla: ${card.size}</p>
    </div>
    <div class="card__contact">
      <a
        href="tel:+573163190569"
        title="Teléfono"
        target="_blank"
        class="card__contact__link button--phone btn--primary"
      > 
        <i class="fas fa-phone"></i>
      </a>
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
        href="https://m.me/110310474126580"
        target="_blank"
        class="card__button button--messenger btn--primary"
        title="Facebook Messenger"
      >
        <i class="card__icon fab fa-facebook-messenger"></i>
        Comprar
      </a>
      </div>
    </div>
    `;

    cardContainer.appendChild(cardElement);
  }

  sendToWhatsapp(target) {
    let itemTitle = target.parentElement.parentElement.children[0].textContent;

    let itemPrice = target.parentElement.parentElement.children[1].textContent;

    let itemSize =
      target.parentElement.parentElement.children[2].children[1].textContent;

    target.setAttribute(
      'href',
      `https://wa.me/573163190569/?text=Sale Closet estoy interesado(a) en: ${itemTitle} ${itemSize}, Precio: ${itemPrice}`
    );
  }

  sendToEmail(target) {
    let itemTitle = target.parentElement.parentElement.children[0].textContent;

    let itemPrice = target.parentElement.parentElement.children[1].textContent;

    let itemSize =
      target.parentElement.parentElement.children[2].children[1].textContent;

    target.setAttribute(
      'href',
      `mailto:salecloseth@gmail.com?subject=Sale Closet: ${itemTitle} ${itemSize}, ${itemPrice}&body=Cordial Saludo, %0D%0A%0D%0AEstoy interesado(a) en ${itemTitle} ${itemSize}, con un costo de ${itemPrice}. %0D%0A%0D%0AMuchas Gracias`
    );
  }
}

document.addEventListener('DOMContentLoaded', function (e) {
  productsArrays.forEach((productArray, arrayIndex) =>
    productArray.forEach((arrayItem, index) => {
      const card = new Card(
        arrayItem.category,
        arrayItem.item,
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

// Whatsapp Button to Buy Item (Card)
const productWrappers = document.querySelectorAll('.products-wrapper');

productWrappers.forEach((productWrapper) =>
  productWrapper.addEventListener('click', function (e) {
    const ui = new UI();

    if (e.target.className === 'card__button button--whatsapp btn--primary') {
      ui.sendToWhatsapp(e.target);
    }

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
}, 100);

// Contact Form Validation
const inputName = document.getElementById('input__name');

const errorMessageName = document.querySelector('.errorMessage--name');

const inputEmail = document.getElementById('input__email');

const errorMessageEmail = document.querySelector('.errorMessage--email');

const inputMessage = document.getElementById('input__message');

const errorMessageMessage = document.querySelector('.errorMessage--message');

const buttonForm = document.getElementById('form__button');

inputName.addEventListener('input', validateName);
inputEmail.addEventListener('input', validateEmail);
inputMessage.addEventListener('input', validateMessage);

function validateName() {
  if (inputName.validity.valueMissing) {
    errorMessageName.textContent = '* Por favor completa el campo Nombre';
    inputName.classList.add('contact__input--error');
  } else {
    errorMessageName.textContent = '';
    inputName.classList.remove('contact__input--error');
  }
}

function validateEmail() {
  if (inputEmail.validity.valueMissing) {
    errorMessageEmail.textContent =
      '* Por favor completa el campo Correo Electrónico';
    inputEmail.classList.add('contact__input--error');
  } else if (!inputEmail.validity.valid) {
    errorMessageEmail.textContent =
      'Por favor ingresa un Correo Electrónico válido';
    inputEmail.classList.add('contact__input--error');
  } else {
    errorMessageEmail.textContent = '';
    inputEmail.classList.remove('contact__input--error');
  }
}

function validateMessage() {
  if (inputMessage.validity.valueMissing) {
    errorMessageMessage.textContent = '* Por favor completa el campo Mensaje';
    inputMessage.classList.add('contact__message--error');
  } else {
    errorMessageMessage.textContent = '';
    inputMessage.classList.remove('contact__message--error');
  }
}

function SubmitForm(e) {
  // e.preventDefault();
  validateName();
  validateEmail();
  validateMessage();
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
