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
    item: 'Blusa Negra Lauren Conrad',
    description: 'Se acomoda a talla S y M ',
    price: '$58.500',
    brand: 'Lauren Conrad',
    size: 'XS',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Chaqueta Baccini',
    description: 'Color Beige Claro',
    price: '$83.500',
    brand: 'BACCINI',
    size: 'M',
    numberImages: 6,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Blusa Amarilla en Algodón',
    description: 'Detalle de amarre a los lados en algodón licrado',
    price: '$22.500',
    brand: '',
    size: 'L',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Conjunto Animal Print',
    description: 'Blusa café oscura talla S con leggings talla única',
    price: '$28.500',
    brand: 'Animal Print',
    size: 'S, Única',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Conjunto Pavo Real',
    description:
      'Pantalón Pavo Real talla única con camiseta verde militar talla M que se acomoda a S',
    price: '$53.500',
    brand: '',
    size: 'Única, M (S)',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Conjunto Pantalón Blusa',
    description:
      'Pantalón bota ancha de flores talla única con blusa manga ancha color crema talla XL pero se acomoda a M y L',
    price: '$58.500',
    brand: '',
    size: 'Única, XL (M, L)',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Conjunto Flores Azul',
    description:
      'Pantalón de flores talla única con camiseta azul claro talla L que se acomoda a M y S. Es semiajustada y larga.',
    price: '$53.500',
    brand: '',
    size: 'Única, L (M, S)',
    numberImages: 4,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Conjunto Flores Blancas',
    description:
      'Pantalón de flores blancas elaborado en tela Chalis talla M con camiseta blanca en algodón licrado talla S.',
    price: '$53.500',
    brand: '',
    size: 'M, S',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Vestido Cat & Jack',
    description:
      'Vestido Cat & Jack de cuadros rojo y blanco de Estados Unidos',
    price: '$53.500',
    brand: 'Cat & Jack',
    size: '18',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Vestido Ralph Lauren',
    description: 'Vestido a cuadros rojo y negro',
    price: '$58.500',
    brand: 'Ralph Lauren',
    size: '18',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'yes',
    item: 'Conjunto 2x1 Ela Ralph Lauren',
    description:
      'Jeans talla 4 más dos esqueletos blancos con piedritas plateadas talla M que se acomoda a S y una café talla grande pero se acomoda a todas las tallas',
    price: '$78.500',
    brand: 'Ela',
    size: 'XS (4), M (S)',
    numberImages: 5,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Vestido de Baño Tipo Hilo Verde',
    description:
      'Vestido de baño verde tipo hilo con forro sin copa ideal para tomar el sol',
    price: '$20.000',
    brand: '',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Vestido de Baño Tipo Hilo Fucsia',
    description:
      'Vestido de baño fucsia tipo hilo con forro sin copa ideal para tomar el sol',
    price: '$20.000',
    brand: '',
    size: 'Única',
    numberImages: 2,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Vestido de Baño Tipo Hilo Morado',
    description:
      'Vestido de baño morado tipo hilo con forro sin copa ideal para bronceo',
    price: '$20.000',
    brand: '',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Camisa Palo de Rosa',
    description: 'Camisa palo de rosa tipo bluson ',
    price: '$22.500',
    brand: '',
    size: 'Única (S y M)',
    numberImages: 4,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Blusa de Caricatura Mujer',
    description:
      'Lleva tres blusas de este estilo por $50.000 de algodón licrado',
    price: '$22.000',
    brand: '',
    size: 'Única (S y M)',
    numberImages: 2,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Blusa de Mujer con Gafas',
    description: 'Incluye una balaca amarilla',
    price: '$20.000',
    brand: '',
    size: 'S y M',
    numberImages: 2,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Blusa Tono Azul',
    description:
      'Lleva 2 blusas de este estilo por $40.000 en algodón licrado. Incluye una balaca azul',
    price: '$24.000',
    brand: '',
    size: 'Única (S y M)',
    numberImages: 4,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Blusa Pantera Rosa',
    description:
      'Lleva 2 blusas de este estilo por $40.000 en algodón licrado. Incluye pulseras variadas',
    price: '$24.500',
    brand: '',
    size: 'Única (S y M)',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'yes',
    item: 'Blusas Estampadas 2x1',
    description:
      'Blusas en algodón licrado. Incluye una balaca azul y pulseras variadas',
    price: '$40.000',
    brand: '',
    size: 'Única (S y M)',
    numberImages: 5,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Enterizo Short Animal Print',
    description: 'Enterizo short estampado de leopardo',
    price: '$26.000',
    brand: '',
    size: 'Única',
    numberImages: 4,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Camisa Rayas Azul',
    description: 'Camisa manga larga de rayas azules con botones',
    price: '$28.000',
    brand: 'Smile',
    size: 'Única (S y M)',
    numberImages: 4,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Camisa Gato Negro',
    description: 'Camisa gris manga larga de rayas con botones',
    price: '$25.000',
    brand: '',
    size: 'Única (S y M)',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Vestido Deportivo Rosado',
    description:
      'Vestido deportivo rosado corto de capota con rayas. Talla L pero se acomoda a M',
    price: '$25.000',
    brand: '',
    size: 'L (M)',
    numberImages: 4,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Vestido de Baño Enterizo',
    description:
      'Vestido de baño azul y blanco enterizo tipo estraple con copa. Medidas: 33cm pecho, 50cm largo, copa 13cm',
    price: '$30.000',
    brand: 'Body Glove',
    size: 'M',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Sudadera Verde Marino',
    description:
      'Conjunto sudadera chaqueta: 63cm de largo, 48cm contorno, 62cm de manga. Pantalon: 95cm largo, 36 cintura sin estirar el resorte. Talla XXL pero se acomoda a talla M',
    price: '$75.000',
    brand: 'Adidas',
    size: 'M',
    numberImages: 2,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Falda Negra con Resorte',
    description:
      'Falda negra con resorte muy estirado. Talla L pero se acomoda a talla M',
    price: '$30.000',
    brand: 'Final Touch',
    size: 'L (M)',
    numberImages: 5,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Chaqueta de Pana',
    description: 'Chaqueta de pana café con visos grises',
    price: '$52.000',
    brand: 'Abercrombie&Fitch',
    size: 'M',
    numberImages: 6,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Vestido de Flores',
    description:
      'Vestido de flores RK licrado y dobladillo con hilo. Cinturón un poco despegado en un lado. Talla M se acomoda a talla S',
    price: '$28.000',
    brand: 'RK',
    size: 'M (S)',
    numberImages: 5,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Sueter Cereza y Dorado',
    description: 'Sueter color naranja cereza con detalles en dorado',
    price: '$25.000',
    brand: '',
    size: 'Única',
    numberImages: 5,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Sueter Naranja Salmón',
    description: 'Sueter color naranja salmón en lana',
    price: '$21.000',
    brand: '',
    size: 'Única',
    numberImages: 4,
  },
  {
    category: 'ropaNueva',
    offer: 'yes',
    item: 'Sueteres 2x1',
    description:
      'Sueter color naranja salmón en lana y sueter color naranja cereza con detalles en dorado',
    price: '$35.000',
    brand: '',
    size: 'Única',
    numberImages: 8,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Vestido Dorado',
    description: 'Vestido semicorto dorado',
    price: '$38.500',
    brand: 'Koaj',
    size: 'M',
    numberImages: 5,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Camiseta Deportiva Puma',
    description: 'Camiseta deportiva manga sisa',
    price: '$38.500',
    brand: 'Puma',
    size: 'M',
    numberImages: 5,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Blusa Gris Ajuste Cintura',
    description:
      'Blusa gris claro con tira para amarrar en la parte de la cintura',
    price: '$20.000',
    brand: '',
    size: 'L',
    numberImages: 4,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Vestido de Baño Fucsia',
    description:
      'Vestido de baño fucsia 30 cm de cintura 20cm de alto en la copa y 21cm de largo en la base de la copa. Es de amarrar',
    price: '$22.500',
    brand: '',
    size: '36',
    numberImages: 3,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Pantalón Playero',
    description:
      'Pantalón playero tipo salida de baño ideal para llevar con vestido de baño',
    price: '$25.000',
    brand: '',
    size: 'Única',
    numberImages: 2,
  },
  {
    category: 'ropaNueva',
    offer: 'yes',
    item: 'Salida de Baño 2x1',
    description:
      'Blusa verde con morado tipo salida de baño y top estraple exterior en dacron. Top: 37cm de largo, 36cm de ancho por la parte de busto sin estirar el caucho',
    price: '$30.000',
    brand: '',
    size: 'Única',
    numberImages: 6,
  },
  {
    category: 'ropaNueva',
    offer: 'no',
    item: 'Jeans con Apliques',
    description:
      'Jeans con apliques: 93cm de largo, 36cm de cintura. Semiestrecho bota tubo: 13cm',
    price: '$30.000',
    brand: 'Eva Castillo',
    size: '6',
    numberImages: 4,
  },
];

// Ropa de Segunda
const ropaSegundaArray = [
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Blusa Blanca con Flores',
    description:
      'Blusa blanca con flores púrpura. Puede acomodarse a talla L depende del estilo. Una sola postura',
    price: '$43.500',
    brand: '',
    size: 'XL',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Blazer Negro',
    description:
      'En perfecto estado. Blazer negro tipo blusa con fondo interno negro. Talla XL pero se acomoda a talla M y L segun el estilo',
    price: '$26.500',
    brand: 'JM Collection',
    size: 'XL (L y M)',
    numberImages: 5,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Pantalón Animal Print',
    description: 'Puesto una vez en perfecto estado. Color negro y beige',
    price: '$25.000',
    brand: '',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Blusa Minnie Disney',
    description:
      'En perfecto estado. Blusa Minnie Mouse talla XL pero se acomoda a talla L y M',
    price: '$20.000',
    brand: 'Disney',
    size: 'XL (M y L)',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Conjunto Rosado',
    description:
      'En perfecto estado. Licra  rosada talla S más blusa algodón licrado nueva M-S',
    price: '$22.500',
    brand: '',
    size: 'S y M-S',
    numberImages: 2,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Conjunto Azul',
    description:
      'En perfecto estado. Licra azul talla S más blusa algodón licrado nueva M-S',
    price: '$22.500',
    brand: '',
    size: 'S y M-S',
    numberImages: 2,
  },
  {
    category: 'ropaSegunda',
    offer: 'yes',
    item: 'Combo 5x1 Leggings-Blusas',
    description:
      'En perfecto estado. Dos leggings S más tres blusas algodón licrado nuevas talla M-S',
    price: '$53.500',
    brand: '',
    size: 'S y M-S',
    numberImages: 2,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Conjunto gef',
    description:
      'En perfecto estado. Short blanco marca gef talla 16 medidas: 36cm de cintura, 22cm de largo. Blusa de tiras talla única',
    price: '$28.000',
    brand: 'gef',
    size: '16 y Única',
    numberImages: 4,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Conjunto Short Blusa',
    description:
      'En perfecto estado. Conjunto short negro talla 8 gamuza muy cómodo más blusa licrada talla única M-S',
    price: '$20.000',
    brand: 'Koaj',
    size: '8  y M-S',
    numberImages: 4,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Enterizo Playero Largo',
    description:
      'En perfecto estado puesto una sola vez. Enterizo pantalón de flores escotado licrado talla L-XL pero se acomoda a M. Medidas: 139cm largo desde las tiras de arriba, cintura 31cm, 16cm copa a lo largo, 15cm ancho',
    price: '$48.500',
    brand: '',
    size: 'L-XL (M)',
    numberImages: 4,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido Corto Algodón Licrado',
    description:
      'En perfecto estado puesto una sola vez. Vestido corto gris claro en algodón licrado. Talla L-XL pero se acomoda más a S-M',
    price: '$25.500',
    brand: '',
    size: 'L-XL (S-M)',
    numberImages: 2,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Enterizo Animal Print',
    description:
      'En perfecto estado puesto una sola vez.Enterizo Animal Print leopardo',
    price: '$26.000',
    brand: 'Animal Print',
    size: 'Única',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'yes',
    item: 'Blusón + Leggings 2x1',
    description:
      'En perfecto estado puesto una sola vez. Blusón negro tipo buso con aplicación encaje en la parte de atrás y velo adelante. Leggings animal print. Talla única pero se acomoda más a S-M',
    price: '$39.000',
    brand: 'Animal Print',
    size: 'Única (S y M)',
    numberImages: 5,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Enterizo Blanco y Negro Rayado',
    description:
      'En perfecto estado puesto una sola vez. Enterizo tipo short negro. Talla S-M',
    price: '$28.500',
    brand: '',
    size: 'S y M',
    numberImages: 4,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Crop Top Negro',
    description:
      'En perfecto estado puesto una sola vez. Crop top negro talla M',
    price: '$30.000',
    brand: '',
    size: 'M',
    numberImages: 4,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido Velo Negro y Blanco',
    description:
      'En perfecto estado puesto una sola vez. Vestido casual marca Ela talla 12 que se acomoda a L y M depende de la contextura de la persona. Velo negro con blanco y tiene sombras marrón. Tiene aberturas en los lados de la cintura',
    price: '$43.500',
    brand: 'Ela',
    size: '12 (L-M)',
    numberImages: 2,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido al Cuerpo',
    description:
      'En perfecto estado puesto una sola vez. Vestido al cuerpo de algodón licrado una sola postura, escote en bandeja. Talla única pero se acomoda más a S-M',
    price: '$38.500',
    brand: '',
    size: 'Única (S y M)',
    numberImages: 2,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido Negro Estilo Globo',
    description:
      'En perfecto estado puesto una sola vez. Vestido negro estilo globo de fiesta y abertura a los lados. Estira un poco. Medidas: 78cm largo, 39cm pecho, 34cm cintura',
    price: '$113.500',
    brand: '',
    size: 'M',
    numberImages: 5,
  },
  {
    category: 'ropaSegunda',
    offer: 'yes',
    item: 'Chalecos 2x1',
    description:
      'En perfecto estado. Chalecos tejidos a mano blanco y café. Talla única por el tamaño se acomoda más a S-M, una sola postura',
    price: '$22.000',
    brand: '',
    size: 'Única (S y M)',
    numberImages: 5,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Chaqueta de Paño Negra',
    description:
      'En perfecto estado. Chaqueta de paño negra marca Casual Corner',
    price: '$53.500',
    brand: 'Casual Corner',
    size: 'M',
    numberImages: 5,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido Estraple Negro y Rojo',
    description:
      'En perfecto estado puesto una sola vez. Vestido estraple americano negro y rojo con encaje. Talla S pero se acomoda a M',
    price: '$30.000',
    brand: '',
    size: 'S (M)',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Estraple con Encaje',
    description:
      'En perfecto estado. Estraple negro con encaje talla S pero se acomoda a talla M',
    price: '$20.500',
    brand: 'Mitto',
    size: 'S (M)',
    numberImages: 4,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Combo Falda Blusa con Escote',
    description:
      'En perfecto estado. Mini falda verde con botones adelante y pliegues casual talla S más blusa body negra con escote talla única en algodón licrado',
    price: '$23.000',
    brand: 'Mossimo',
    size: 'S y Única',
    numberImages: 4,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Blusón Leñador',
    description:
      'En perfecto estado puesto una sola vez. Blusón leñador a cuadros verdes y blanco',
    price: '$23.000',
    brand: '',
    size: 'M',
    numberImages: 2,
  },
  {
    category: 'ropaSegunda',
    offer: 'yes',
    item: 'Blusa y Pantalón Capri 2x1',
    description:
      'En perfecto estado. Blusa Ela color crema: 40cm de contorno, 46cm de largo. Pantalón capri talla M Papaya: 65cm de largo, 34 cm de cintuta',
    price: '$41.500',
    brand: 'Ela y Papaya',
    size: 'M',
    numberImages: 5,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido Licrado Casual',
    description:
      'En perfecto estado. Vestido negro casual con estampado de cruz en algodón licrado dos posturas',
    price: '$20.000',
    brand: '',
    size: 'XS',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido Jeans',
    description:
      'En perfecto estado. Vestido de jeans: 45cm contorno  35cm cintura, 87cm de largo. Con bolsillos y tiene resorte. Sin talla pero se acomoda a M',
    price: '$20.000',
    brand: '',
    size: 'M',
    numberImages: 6,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Blusón Buhos',
    description: 'En perfecto estado. Blusón buhos tipo vestido dos posturas',
    price: '$25.000',
    brand: '',
    size: 'M',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Blusón Gris Rayado',
    description: 'En perfecto estado. Blusón gris a rayas blancas',
    price: '$22.000',
    brand: '',
    size: 'L',
    numberImages: 5,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Chaqueta Negra',
    description:
      'En perfecto estado. Chaqueta negra 55cm de largo 45cm de ancho',
    price: '$38.500',
    brand: '',
    size: 'XS',
    numberImages: 5,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido Gris con Velo Negro',
    description:
      'En perfecto estado. Vestido gris con encaje y velo negro en la cintura. 41cm en el busto, 38cm cintura, 83cm largo sin contar velo',
    price: '$30.000',
    brand: '',
    size: 'L',
    numberImages: 5,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Camisa Amarilla',
    description:
      'En perfecto estado puesto una sola vez. Camisa amarilla tipo velo casual una sola postura',
    price: '$23.500',
    brand: 'Soplus Cris',
    size: '8',
    numberImages: 4,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido Salmón con Pepas',
    description:
      'En perfecto estado puesto dos veces. Vestido salmón con pepas negras semi informal en material licrado: 84cm de largo, 45 cm busto',
    price: '$25.000',
    brand: '',
    size: 'Única',
    numberImages: 5,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido Negro Tipo Velo',
    description:
      'En perfecto estado puesto una vez. Vestido negro tipo velo en poliester 100%. Un poco transparente para vestir con licra corta o larga. Una sola postura',
    price: '$20.000',
    brand: '',
    size: 'Única',
    numberImages: 4,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Top Estraple Crema',
    description:
      'En perfecto estado. Top estraple color crema tejido: 47cm de largo, 35cm de busto',
    price: '$23.000',
    brand: '',
    size: 'M',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Minifalda con Encaje',
    description:
      'En perfecto estado puesto una vez. Minifalda blanca crema con encaje. Talla M pero se acomoda más a talla S: 34cm de largo, 29cm de cintura sin estirar el resorte',
    price: '$25.500',
    brand: 'Stoosh',
    size: 'M (S)',
    numberImages: 5,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Pantalón Crema de Rombos',
    description:
      'En perfecto estado puesto una vez. Pantalón crema de rombos color crema: 104cm de largo, 35cm de cintura semi estrecho, 13cm de bota',
    price: '$20.500',
    brand: '',
    size: '26',
    numberImages: 4,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Falda Blanca de Encaje',
    description:
      'En perfecto estado puesto una vez. Falda de encaje blanca con resorte en la cintuta: 35cm de cintuta sin estirar el caucho, 46cm de largo, 78cm en la copa con minipliegues',
    price: '$28.000',
    brand: 'Red Apple',
    size: 'L',
    numberImages: 3,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Vestido de Flores',
    description:
      'En perfecto estado puesto una vez. Vestido de flores casual licrado corrugado a los lados: 74cm de largo, 37cm de ancho (busto)',
    price: '$38.500',
    brand: '',
    size: 'S-M',
    numberImages: 4,
  },
  {
    category: 'ropaSegunda',
    offer: 'no',
    item: 'Minifalda Animal Print',
    description:
      'En perfecto estado. Minifalda animal print color marron con negro: 39cm de cintura, 31cm de largo',
    price: '$28.500',
    brand: 'Ela',
    size: '8',
    numberImages: 6,
  },
];

// Zapatos
const zapatosArray = [
  {
    category: 'zapatos',
    offer: 'no',
    item: 'Sandalias Negras',
    description:
      'En perfecto estado. Sandalias negras de tacón corrido en tela de gamuza con tiras que ajustan: 23cm de largo, 8cm de tacón',
    price: '$39.000',
    brand: '',
    size: '36',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    offer: 'no',
    item: 'Zapatos Cafés de Cuero',
    description:
      'En buen estado. Zapatos cafés de cuero con tacón. Medidas: 24cm de largo, 7cm de tacón',
    price: '$42.000',
    brand: 'Goyeneche',
    size: '35',
    numberImages: 3,
  },
  {
    category: 'zapatos',
    offer: 'no',
    item: 'Sandalias Negras Tipo Tacón',
    description:
      'En buen estado. Sandalias negras tipo tacón de cuero: 10 cm de tacón, 32cm de largo',
    price: '$59.000',
    brand: '',
    size: '40',
    numberImages: 4,
  },
  {
    category: 'zapatos',
    offer: 'yes',
    item: 'Sandalias Doradas Tipo Tacón',
    description:
      'En buen estado. Sandalias doradas con un poco de desgaste en las correas pero no se nota. Medidas: 10cm de tacón, 28cm de largo',
    price: '$43.500',
    brand: 'Ibis',
    size: '38',
    numberImages: 4,
  },
  {
    category: 'zapatos',
    offer: 'no',
    item: 'Sandalias Tacón Corrido',
    description:
      'En perfecto estado. Sandalias tacón corrido de corcho y 100% cuero cómodas. Medidas: 23cm de largo, 10cm de alto. Por ser tacón corrido se mide desde el talón',
    price: '$52.000',
    brand: '',
    size: '35',
    numberImages: 4,
  },
  {
    category: 'zapatos',
    offer: 'no',
    item: 'Tenis Casuales',
    description: 'En buen estado. Tenis cómodos casuales y juveniles',
    price: '$25.000',
    brand: '',
    size: '35',
    numberImages: 2,
  },
];

const accessoriosArray = [
  {
    category: 'accessorios',
    offer: 'yes',
    item: 'Aretes Largos 4x1',
    description:
      'En perfecto estado. 4 pares de aretes grandes y largos por el precio de uno. Dos pares son de marca Ela',
    price: '$20.000',
    brand: 'Ela (2 pares)',
    size: 'Única',
    numberImages: 5,
  },
  {
    category: 'accessorios',
    offer: 'no',
    item: 'Bolso Tipo Sobre',
    description:
      'Bolso nuevo tipo sobre con cadena para colgar. El material es duro y tiene detalles con taches',
    price: '$20.000',
    brand: '',
    size: 'Única',
    numberImages: 4,
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

window.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    sliderLoading();
  }, 10);
});

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
