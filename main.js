const data = [
  {
    name: "Standard Room",
    description:
      "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
    productImages: [
      "https://madebydesignesia.com/themes/almaris/images/room/1.webp",
    ],
    price: 129,
    inventory: 10,
    variants: [
      {
        name: "Standard",
        isCustom: false,
        price: 19.0,
        inventory: 5,
        description: "Standard configuration of the room.",
        imageUrl: ["images/room-1.jpg"],
        options: [
          {
            name: "View",
            value: "City View",
          },
        ],
        variantIdOnBrandSite: "ROOM12345",
      },
    ],
    minAge: 0,
    coverImage:
      "https://madebydesignesia.com/themes/almaris/images/room/1.webp",
    productIdOnBrandSite: "ROOM0001",
  },
  {
    name: "Deluxe Room",
    description:
      "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
    productImages: [
      "https://madebydesignesia.com/themes/almaris/images/room/2.webp",
    ],
    price: 129,
    inventory: 8,
    variants: [
      {
        name: "Deluxe",
        isCustom: false,
        price: 25.0,
        inventory: 3,
        description: "Upgraded version of the room.",
        imageUrl: ["images/room-2.jpg"],
        options: [
          {
            name: "Bed Type",
            value: "King",
          },
        ],
        variantIdOnBrandSite: "ROOM12346",
      },
    ],
    minAge: 0,
    coverImage:
      "https://madebydesignesia.com/themes/almaris/images/room/2.webp",
    productIdOnBrandSite: "ROOM0002",
  },
  {
    name: "Premier Room",
    description:
      "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
    productImages: [
      "https://madebydesignesia.com/themes/almaris/images/room/3.webp",
    ],
    price: 139,
    inventory: 12,
    variants: [
      {
        name: "Suite",
        isCustom: false,
        price: 30.0,
        inventory: 7,
        description: "Most spacious room option.",
        imageUrl: ["images/room-3.jpg"],
        options: [
          {
            name: "Amenities",
            value: "Balcony",
          },
        ],
        variantIdOnBrandSite: "ROOM12347",
      },
    ],
    minAge: 0,
    coverImage:
      "https://madebydesignesia.com/themes/almaris/images/room/3.webp",
    productIdOnBrandSite: "ROOM0003",
  },
  {
    name: "Family Suite",
    description:
      "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
    productImages: [
      "https://madebydesignesia.com/themes/almaris/images/room/4.webp",
    ],
    price: 149,
    inventory: 12,
    variants: [
      {
        name: "Suite",
        isCustom: false,
        price: 30.0,
        inventory: 7,
        description: "Most spacious room option.",
        imageUrl: ["images/room-4.jpg"],
        options: [
          {
            name: "Amenities",
            value: "Balcony",
          },
        ],
        variantIdOnBrandSite: "ROOM12347",
      },
    ],
    minAge: 0,
    coverImage:
      "https://madebydesignesia.com/themes/almaris/images/room/4.webp",
    productIdOnBrandSite: "ROOM0004",
  },
  {
    name: "Luxury Suite",
    description:
      "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
    productImages: [
      "https://madebydesignesia.com/themes/almaris/images/room/5.webp",
    ],
    price: 149,
    inventory: 12,
    variants: [
      {
        name: "Suite",
        isCustom: false,
        price: 30.0,
        inventory: 7,
        description: "Most spacious room option.",
        imageUrl: ["images/room-5.jpg"],
        options: [
          {
            name: "Amenities",
            value: "Balcony",
          },
        ],
        variantIdOnBrandSite: "ROOM12347",
      },
    ],
    minAge: 0,
    coverImage:
      "https://madebydesignesia.com/themes/almaris/images/room/5.webp",
    productIdOnBrandSite: "ROOM0005",
  },
  {
    name: "Presidential Suite",
    description:
      "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
    productImages: [
      "https://madebydesignesia.com/themes/almaris/images/room/6.webp",
    ],
    price: 199,
    inventory: 12,
    variants: [
      {
        name: "Suite",
        isCustom: false,
        price: 30.0,
        inventory: 7,
        description: "Most spacious room option.",
        imageUrl: ["images/room-6.jpg"],
        options: [
          {
            name: "Amenities",
            value: "Balcony",
          },
        ],
        variantIdOnBrandSite: "ROOM12347",
      },
    ],
    minAge: 0,
    coverImage:
      "https://madebydesignesia.com/themes/almaris/images/room/6.webp",
    productIdOnBrandSite: "ROOM0006",
  },
];

const wrapper = document.getElementById("wrapper");
const navWrapper = document.createElement("div");
wrapper.prepend(navWrapper);

const email = localStorage.getItem("email");

if (email) {
  window.customerEmail = email;
}

navWrapper.innerHTML = `<header class="transparent has-topbar">
        <div id="topbar">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="d-flex justify-content-between xs-hide">
                  <div class="header-widget d-flex">
                    <div class="topbar-widget">
                      <a href="#"
                        ><i class="icofont-location-pin"></i>742 Evergreen
                        Terrace Brooklyn, NY 11201</a
                      >
                    </div>
                    <div class="topbar-widget">
                      <a href="#"><i class="icofont-phone"></i>+929 333 9296</a>
                    </div>
                    <div class="topbar-widget">
                      <a href="#"
                        ><i class="icofont-envelope"></i>contact@almaris.com</a
                      >
                    </div>
                  </div>

                  <div class="social-icons">
                    <a href="#"><i class="fa-brands fa-facebook fa-lg"></i></a>
                    <a href="#"><i class="fa-brands fa-x-twitter fa-lg"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube fa-lg"></i></a>
                    <a href="#"><i class="fa-brands fa-pinterest fa-lg"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="de-flex sm-pt10">
                <div class="de-flex-col">
                  <!-- logo begin -->
                  <div id="logo">
                    <a href="index.html">
                      <img
                        class="logo-main"
                        src="images/logo-white.webp"
                        alt=""
                      />
                      <img
                        class="logo-scroll"
                        src="images/logo-black.webp"
                        alt=""
                      />
                      <img
                        class="logo-mobile"
                        src="images/logo-white.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <!-- logo close -->
                </div>
                <div class="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li><a class="menu-item" href="index.html">Home</a></li>
                    <li>
                      <a class="menu-item" href="rooms.html">Rooms</a>
                    </li>
                    <li><a class="menu-item" href="news.html">News</a></li>
                    <li>
                      <a class="menu-item" href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                ${
                  !email &&
                  `<div class="de-flex-col">
                  <div class="menu_side_area">
                    <a href="login.html" class="btn-main btn-line">Login</a>
                    <span id="menu-btn"></span>
                  </div>
                </div>`
                }
              </div>
            </div>
          </div>
        </div>
      </header>`;

const roomList = document.querySelector(".room-list");

if (roomList) {
  let newHtml = "";

  for (const e of data) {
    newHtml =
      newHtml +
      `<div class="col-lg-4 col-md-6">
                <div class="room-one-block">
                  <div class="room-one-like"><i class="far fa-heart"></i></div>
                  <div class="room-one-image img_hover_3">
                    <img alt="" src="${e.coverImage}" />
                  </div>
                  <div class="room-one-content style-two">
                    <div class="room-one-info">
                      ${e.variants[0].name}
                    </div>
                    <h4 class="room-one-title">
                      <a href="/html/room-details"
                        >
                        ${e.name}
                        </a
                      >
                    </h4>
                    <div class="room-one-desc">
                      ${e.description}
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <ul class="room-one-info">
                          <li>Status: <span>Avaialble</span></li>
                          <li>Deposit: <strong>10% OFF</strong></li>
                        </ul>
                      </div>
                      <div class="col-sm-6">
                        <ul class="room-one-info">
                          <li>Bads: <strong>03</strong></li>
                          <li>Parson: <strong>: 06 - 08</strong></li>
                        </ul>
                      </div>
                    </div>
                    <div class="room-one-link-btn">
                      <a class="btn-one s-four" href="/detail.html?id=${e.productIdOnBrandSite}"
                        >Book Now + <span></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>`;
  }

  roomList.innerHTML = newHtml;
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

if (productId) {
  window.productId = productId;
  const productTitle = document.getElementById("productTitle");
  const productPrice = document.getElementById("productPrice");
  const productImage = document.getElementById("productImage");

  const product = data.find((e) => e.productIdOnBrandSite === productId);

  if (product) {
    productTitle.innerHTML = product.name;
    productPrice.innerHTML = product.price;
    productImage.src = product.coverImage;
  }
}
