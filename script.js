const books = [
  {
    id: 1,
    name: "Hotel WOW",
    price: 2500,
    rating: 4.5,
    image: "Hotel Wow.jpg",
    description:
      "The Hotel WOW, just a 10-minute walk from the National Center for the Performing Arts and Tian'anmen Square. Built in 1956 it has old school charm and many rooms still feature high, crown-molded ceilings. A 2012 renovation brought all rooms and services up to modern day scratch and guestrooms come equipped with free Wi-Fi and all the usual amenities required for a comfortable stay.",
    url:"https://builder.decentraland.org/view/pool/b1d8f1b4-f778-4651-a6f6-bd449d915e24?realm=localhost-stub"
  },
  {
    id: 2,
    name: "Sayaji Hotel",
    price: 3990,
    rating: 4.5,
    image: "Sayaji.jpg",
    description:
      "Sayaji Hotel offers ultimate comfort and luxury. This 4-storied hotel is a beautiful combination of traditional grandeur and modern facilities. The 255 exclusive guest rooms are furnished with a range of modern amenities such as television and internet access. International direct-dial phone and safe are also available in any of these rooms. Wake-up call facility is also available in these rooms. ",
  },
  {
    id: 3,
    name: "Noor-Us-Sabha",
    price: 1990,
    rating: 4.5,
    image: "Noor-Us-Sabha.jpg",
    description:
      "Hotel Noor-Us-Sabha is immersed in 45 hectares of primary and secondary forest, at the foot of the majestic Arravali Hills, which makes it a true oasis of peace, enriched by an exuberant vegetation and diverse fauna. Noor-Us-Sabha has become one of the most beautiful hotels in the area.. ",
  },
  {
    id: 4,
    name: "The Zomaverse",
    price: 1490,
    rating: 4.5,
    image: "zomato-office.jpg",
    description:
      "Only 20 minutes by tube from Delhi's bustling West End, Gurgaon puts you close to plenty of prominent nearby attractions including the Pioneer Square, and various IT Parks thriving high street and business district. Inviting, modern and cozy, with a comfortable ambience and a functional bathroom, everything you need for a pleasant stay.",
    url:"https://builder.decentraland.org/view/pool/b44f9998-ebea-4d53-b9bd-6e78a453ecbb?position=1%2C0&realm=localhost-stub"
  },
  {
    id: 5,
    name: "Hotel Inn",
    price: 2490,
    rating: 4.5,
    image: "hotel-inn.jpg",
    description:
      "The hotel Inn has easy access to many of the city’s top attractions, including the Casino, Banagaloreunderground city. Cozy guest rooms with panoramic views allow you to unwind, and an indoor pool and sauna ensure that your stay is filled with ease. Whether you’re on the go, or in town to check out all the charming sights and sounds, Sandman Longueuil is always an impressive treat.",
  },
  {
    id: 6,
    name: "Marriott",
    price: 1690,
    rating: 4.5,
    image: "marriott.jpg",
    description:
      "Marriott International Inc (Marriott) is a hospitality service provider that operates hotels and restaurants. It operates, franchises, and licenses hotels, residential and timeshare properties under several luxury, premium, and select brand names. Its brands include the Ritz-Carlton, JW Marriott, St.",
  },
];

const showContent = document.querySelector(".cards");

window.addEventListener("DOMContentLoaded", function () {
  var content = [];
  books.map((item) => {
    content.push(
      `<div class="card product">
        <div class="product-img">
            <img src="./${item.image}">
        </div>
        <div class="product-details-container">
            <div class="product-name">${item.name}</div>
            <div class="price-rating">
                <div class="product-price">
                    <i class="fa fa-rupee" style="margin-right: 0.5rem;"></i>
                    <p>${item.price} pn </p>
                </div>
                <div class="rating">
                    <p>Rating: ${item.rating}</p>
                    <i class="fa fa-star star"></i>
                </div>
            </div>
            <div class="product-desc">
                <p>${item.description}</p>
            </div>
        </div>
                    <div class="product-btn">
                        <button class="cart-btn" id="${id}">
                        <i class="fa-brands fa-meta"></i>
                            <a href="${item.url}" target="_blank">Enter Metaverse</a>
                            
                        </button>
                        <button class="cart-btn">
                        <i class="fa-solid fa-bolt-lightning"></i>
                            <a href="./booking.html">Book a Room</a>
                        </button>
                    </div>
        </div>`
    );
  });
  showContent.innerHTML = content.join("\n");
});