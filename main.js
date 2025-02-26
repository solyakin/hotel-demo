const data = [
    {
      name: "Luxury with Ultra Family Room",
      description:
        "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
      productImages: [
        "images/room-1.jpg",
        "images/room-2.jpg",
        "images/room-3.jpg",
        "images/room-4.jpg",
        "images/room-5.jpg",
        "images/room-6.jpg",
      ],
      price: 19.0,
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
      coverImage: "images/room-1.jpg",
      productIdOnBrandSite: "ROOM0001",
    },
    {
      name: "Luxury with Ultra Family Room",
      description:
        "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
      productImages: [
        "images/room-2.jpg",
        "images/room-3.jpg",
        "images/room-4.jpg",
        "images/room-5.jpg",
        "images/room-6.jpg",
        "images/room-1.jpg",
      ],
      price: 19.0,
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
      coverImage: "images/room-2.jpg",
      productIdOnBrandSite: "ROOM0002",
    },
    {
      name: "Luxury with Ultra Family Room",
      description:
        "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
      productImages: [
        "images/room-3.jpg",
        "images/room-4.jpg",
        "images/room-5.jpg",
        "images/room-6.jpg",
        "images/room-1.jpg",
        "images/room-2.jpg",
      ],
      price: 19.0,
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
      coverImage: "images/room-3.jpg",
      productIdOnBrandSite: "ROOM0003",
    },
    {
      name: "Luxury with Ultra Family Room",
      description:
        "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
      productImages: [
        "images/room-4.jpg",
        "images/room-5.jpg",
        "images/room-6.jpg",
        "images/room-1.jpg",
        "images/room-2.jpg",
        "images/room-3.jpg",
      ],
      price: 19.0,
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
      coverImage: "images/room-4.jpg",
      productIdOnBrandSite: "ROOM0004",
    },
    {
      name: "Luxury with Ultra Family Room",
      description:
        "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
      productImages: [
        "images/room-5.jpg",
        "images/room-6.jpg",
        "images/room-1.jpg",
        "images/room-2.jpg",
        "images/room-3.jpg",
        "images/room-4.jpg",
      ],
      price: 19.0,
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
      coverImage: "images/room-5.jpg",
      productIdOnBrandSite: "ROOM0005",
    },
    {
      name: "Luxury with Ultra Family Room",
      description:
        "Nulla imperdiet ligula est, maximus est sodales Phasellus varius.",
      productImages: [
        "images/room-6.jpg",
        "images/room-1.jpg",
        "images/room-2.jpg",
        "images/room-3.jpg",
        "images/room-4.jpg",
        "images/room-5.jpg",
      ],
      price: 19.0,
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
      coverImage: "images/room-6.jpg",
      productIdOnBrandSite: "ROOM0006",
    },
  ];
  
  const roomList = document.querySelector(".room-list");
  
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