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
    price: 169,
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
                  !email
                    ? `<div class="de-flex-col">
                  <div class="menu_side_area">
                    <a href="login.html" class="btn-main btn-line">Login</a>
                    <span id="menu-btn"></span>
                  </div>
                </div>`
                    : `<div class="de-flex-col">
                                <div class="menu_side_area">          
                                    <span id="menu-btn"></span>
                                </div>
                            </div>`
                }
              </div>
            </div>
          </div>
        </div>
      </header>`;

const roomList = document.getElementById("roomList");

if (roomList) {
  let newHtml = "";

  for (const e of data) {
    newHtml =
      newHtml +
      `<div class="col-lg-4 col-sm-6">
                <div
                  class="hover relative text-light text-center wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <img src="${e.coverImage}" class="img-fluid" alt="" />
                  <div class="abs hover-op-1 z-4 hover-mt-40 abs-centered">
                    <div class="fs-14">From</div>
                    <h3 class="fs-40 lh-1 mb-4">$${e.price}</h3>
                    <a class="btn-line" href="room-single.html?id=${e.productIdOnBrandSite}">View Details</a>
                  </div>
                  <div
                    class="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"
                  ></div>
                  <div
                    class="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0"
                  >
                    <h3 class="mb-0">${e.name}</h3>
                    <div class="text-center fs-14">
                      <span class="mx-2"> 2 Guests </span>
                      <span class="mx-2"> 35 ft </span>
                    </div>
                  </div>
                  <div
                    class="gradient-trans-color-bottom abs w-100 h-40 bottom-0"
                  ></div>
                </div>
              </div>`;
  }

  roomList.innerHTML = newHtml;
}

const selectRoom = document.getElementById("selectRoom");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const apiKey = "rdwdkywgorzoop37cqghg";

if (selectRoom) {
  let newHtml = "";

  // product with productId should be first item
  const options = data.filter((e) => e.productIdOnBrandSite !== productId);
  const product = data.find((e) => e.productIdOnBrandSite === productId);

  const sortedData = [product, ...options];

  for (const e of sortedData) {
    newHtml =
      newHtml +
      `<option
                          value="${e.productIdOnBrandSite}"
                          data-src="${e.coverImage}"
                        >
                          ${e.name} | $${e.price}/night | 2 Guests
                        </option>`;
  }

  selectRoom.innerHTML = newHtml;
}

if (productId) {
  window.productId = productId;
  const productTitle = document.getElementById("productTitle");
  const productPrice = document.getElementById("productPrice");
  const productImage = document.getElementById("productImage");

  const product = data.find((e) => e.productIdOnBrandSite === productId);

  if (product && productTitle && productPrice && productImage) {
    productTitle.innerHTML = product.name;
    productPrice.innerHTML = product.price;
    productImage.src = product.coverImage;
  }
}

window.handleApplyCode = async () => {
  const product = data.find((e) => e.productIdOnBrandSite === productId);

  const promoCodeInput = document.getElementById("promoCode");
  const promoCode = promoCodeInput.value;
  const promoList = document.getElementById("promoList");
  const applyButton = document.getElementById("applyButton");

  const originalPrice = product.price;

  if (!productId) {
    alert("Product ID is missing from the URL.");
    return;
  }

  if (!promoCode) {
    alert("Please enter a promo code.");
    return;
  }

  applyButton.disabled = true;
  applyButton.textContent = "Applying...";

  const payload = {
    code: promoCode,
    idOnBrandSite: productId, // Use the extracted idOnBrandSite
  };

  try {
    const response = await fetch(
      "https://api.usemeprotocol.com/order/use-coupon/external",
      {
        method: "POST",
        headers: {
          accept: "*/*",
          "x-public-key": apiKey,
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to validate the promo code.");
    }

    const data = await response.json();
    const redemptionMethod = data?.data?.coupon?.order?.redemptionMethod;

    const discountAmount =
      redemptionMethod.type === "FIXED_AMOUNT_OFF"
        ? Number(redemptionMethod?.discountAmount)
        : redemptionMethod.type === "FIXED_PERCENTAGE_OFF"
        ? (Number(redemptionMethod?.discountPercentage) / 100) * originalPrice
        : 0;

    if (discountAmount > 0) {
      const finalPrice = Math.max(originalPrice - discountAmount, 0); // Ensure no negative prices

      // Apply styles to reflect the discount
      // originalPriceElement.style.textDecoration = "line-through";
      // discountedPriceElement.style.display = "inline";
      // discountedPriceElement.textContent = `$${finalPrice.toFixed(2)}`;
      // discountAmountElement.textContent = `$${discountAmount.toFixed(2)}`;
      // totalAmountElement.textContent = `$${finalPrice.toFixed(2)}`;

      promoCodeInput.value = "";
      const promoListItem = document.createElement("li");
      promoListItem.innerHTML = `<a href="#">${promoCode} - $${discountAmount.toFixed(
        2
      )} off</a>`;

      promoList.appendChild(promoListItem);

      alert("Promo code applied successfully!");
    } else {
      throw new Error("Invalid promo code or no discount available.");
    }
  } catch (error) {
    alert(
      error.message || "An error occurred while validating the promo code."
    );
  } finally {
    applyButton.disabled = false;
    applyButton.textContent = "Apply Code";
  }
};

const handleSubscribe = async (e) => {
  e.preventDefault();
  window.location.href = "success.html";
};
