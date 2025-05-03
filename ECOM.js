let btn = document.querySelector("#cart");
let cart = document.querySelector(".cart");

btn.onclick = function () {
    cart.classList.toggle("active");
};

const products = [
    {
        id: 0,
        name: "SweatShirt Orange",
        price: 29.99,
        instock: 10,
        imgSrc: "https://static.wixstatic.com/media/c837a6_75da094a008741649bacfcf85e678a40~mv2.jpg/v1/fill/w_401,h_535,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_75da094a008741649bacfcf85e678a40~mv2.jpg",
    },
    {
        id: 1,
        name: "T-Shirt Pink",
        price: 19.99,
        instock: 20,
        imgSrc: "https://static.wixstatic.com/media/c837a6_8f102a5a6d68454ea6b4414e504da355~mv2.jpg/v1/fill/w_401,h_535,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_8f102a5a6d68454ea6b4414e504da355~mv2.jpg",
    },
    {
        id: 2,
        name: "Beanie Orange",
        price: 9.99,
        instock: 5,
        imgSrc: "https://static.wixstatic.com/media/c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg/v1/fill/w_401,h_535,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg",
    },
    {
        id: 3,
        name: "Denim jeans",
        price: 49.99,
        instock: 30,
        imgSrc: "https://static.wixstatic.com/media/c837a6_af9d34b4f9634395ac6b0be99f0f317d~mv2.jpg/v1/fill/w_401,h_535,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_af9d34b4f9634395ac6b0be99f0f317d~mv2.jpg",
    },
    {
        id: 4,
        name: "Bucket Hat",
        price: 49.99,
        instock: 30,
        imgSrc: "https://static.wixstatic.com/media/c837a6_7ebf3d624d8a41dda519a4857fff24a9~mv2.jpg/v1/fill/w_401,h_535,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7ebf3d624d8a41dda519a4857fff24a9~mv2.jpg",
    },
];

let productsEl = document.querySelector(".products");
console.log("productsEl:", productsEl);
let cartItemsEl = document.querySelector(".cart-item");
let subTotalEl = document.querySelector(".subtotal");
const searchInput = document.querySelector(".search");
const searchBtn = document.querySelector(".searchBtn");
const allProductItems = document.querySelectorAll(".products .item");


function updateProductDisplay(searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase();

    allProductItems.forEach(item => {
        // Assuming each .item element has a data-name attribute with the product name
        const productName = item.querySelector(".desc h4:first-child").textContent.toLowerCase();

        if (productName.includes(lowerSearchTerm) || lowerSearchTerm === "") {
            item.style.display = ""; // Revert to default display
        } else {
            item.style.display = "none";
        }
    });
}

// Event listener for the search button click
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    updateProductDisplay(searchTerm);
});


function renderProducts() {
    productsEl.innerHTML = ''; // Clear existing content
    products.forEach((product) => {
        productsEl.innerHTML += `
            <div class="item">
                <div class="itemContainer">
                    <i class="bi bi-bag-plus" onclick="addToCart(${product.id}) "></i>
                    <div class="itemIMG">
                        <img src="${product.imgSrc}">
                    </div>
                    <div class="desc">
                        <h4>${product.name}</h4>
                        <h4><small>$</small>${product.price}</h4>
                    </div>
                </div>
            </div>
        `;
    });
}
renderProducts();

let Cart = [];

function addToCart(id) {
    if (Cart.some((item) => item.id === id)) {
        alert("Its already in the cart bruv");
    } else {
        const item = products.find((item) => item.id === id);
        Cart.push({
            ...item,
            numberOfUnit: 1,
        });
    }
    updateCart();
}

function updateCart() {
    renderCartItems();
    subTotal();
}
function subTotal() {
    let totalPrice = 0;
    let totalItem = 0;

    Cart.forEach((product) => {
        totalPrice += product.price * product.numberOfUnit;
        totalItem += product.numberOfUnit;
    });

    subTotalEl.innerHTML = `Subtotal (${totalItem} items): $${totalPrice}`;
}
function renderCartItems() {
    cartItemsEl.innerHTML = '';
    Cart.forEach((item) => {
        cartItemsEl.innerHTML += `
        <div class="cart-item" >
            <div class="item-info">
                <img src="${item.imgSrc}">
                <h4>${item.name}</h4>
                <div class="unit-price">
                    <small>$</small>${item.price}
                </div>
                <div class="units">
                    <div class="btnminus" onclick='changeNumber("minus", ${item.id})'>-</div>
                    <div class="number">${item.numberOfUnit}</div>
                    <div class="btnplus"  onclick='changeNumber("plus", ${item.id})'>+</div>
                    <button class='delete' onclick="removeItem(${item.id})"'>Delete</button>
                </div>
            </div>
        </div>
        `;
    });
}

function changeNumber(action, id) {
    for (let i = 0; i < Cart.length; i++) {
        if (Cart[i].id === id) {
            console.log("Found matching item:", Cart[i]);
            if (action === 'minus' && Cart[i].numberOfUnit > 1) {
                Cart[i].numberOfUnit--;
            } else if (action === 'plus' && Cart[i].numberOfUnit < Cart[i].instock) {
                Cart[i].numberOfUnit++;
            }
            break;
        }
    }
    updateCart();
}
function removeItem(id) {
    let newCart = [];

    for (let i = 0; i < Cart.length; i++) {
        if (Cart[i].id !== id) {
            newCart.push(Cart[i]);
        }
    }
    Cart = newCart;
    updateCart();
}

searchBtn.addEventListener('click', () => {
    console.log("Search button clicked!");
    const searchTerm = searchInput.value.toLowerCase();
    console.log("Search term:", searchTerm);
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    console.log("Filtered products:", filteredProducts);
    renderProducts(filteredProducts);
});