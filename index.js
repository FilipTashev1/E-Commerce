function next() {
  img = document.getElementById("sneakers");
  img2 = document.getElementById("enlarged-img");
  if (img.src.match("./images/image-product-1.jpg") || img2.src.match("./images/image-product-1.jpg")) {
    img.src = "./images/image-product-2.jpg";
    img2.src = "./images/image-product-2.jpg";
  } else if (img.src.match("./images/image-product-2.jpg") || img2.src.match("./images/image-product-2.jpg")) {
    img.src = "./images/image-product-3.jpg";
    img2.src = "./images/image-product-3.jpg";
  } else if (img.src.match("./images/image-product-3.jpg") || img2.src.match("./images/image-product-3.jpg")) {
    img.src = "./images/image-product-4.jpg";
    img2.src = "./images/image-product-4.jpg";
  } else {
    img.src = "./images/image-product-1.jpg";
    img2.src = "./images/image-product-1.jpg";
  }
}

function prev() {
  img = document.getElementById("sneakers");
  img2 = document.getElementById("enlarged-img");
  if (img.src.match("./images/image-product-4.jpg") || img2.src.match("./images/image-product-4.jpg")) {
    img.src = "./images/image-product-3.jpg";
    img2.src = "./images/image-product-3.jpg";
  } else if (img.src.match("./images/image-product-3.jpg") || img2.src.match("./images/image-product-3.jpg")) {
    img.src = "./images/image-product-2.jpg";
    img2.src = "./images/image-product-2.jpg";
  } else if (img.src.match("./images/image-product-2.jpg") || img2.src.match("./images/image-product-2.jpg")) {
    img.src = "./images/image-product-1.jpg";
    img2.src = "./images/image-product-1.jpg";
  } else {
    img.src = "./images/image-product-4.jpg";
    img2.src = "./images/image-product-4.jpg";
  }
}

function minus() {
  ammount = document.getElementById("ammount");
  if (ammount.innerHTML > 0) {
    return (ammount.innerHTML = ammount.innerHTML - 1);
  } else {
    return ammount.innerHTML;
  }
}

function plus() {
  ammount = document.getElementById("ammount");
  if (ammount.innerHTML >= 0 && ammount.innerHTML < 999) {
    return (ammount.innerHTML = parseInt(ammount.innerHTML) + 1);
  } else {
    return ammount.innerHTML;
  }
}

function toggleMenu() {
  menu = document.getElementById("menu-button");
  gray = document.getElementById("gray");
  if (menu.classList.contains("inactive")) {
    menu.classList.remove("inactive");
    gray.classList.remove("inactive");
  } else {
    menu.classList.add("inactive");
    gray.classList.add("inactive");
  }
}

function toggleCart() {
  emptyCartContainer = document.getElementById("emptyCart");
  prev = document.getElementById("prev");
  next = document.getElementById("next");
  if (!emptyCartContainer.classList.contains("inactive")) {
    emptyCartContainer.classList.add("inactive");
    next.classList.remove("inactive");
    prev.classList.remove("inactive");
  } else {
    emptyCartContainer.classList.remove("inactive");
    next.classList.add("inactive");
    prev.classList.add("inactive");
  }
}

function addToCart() {
  ammount = document.getElementById("ammount");
  itemPrice = document.getElementById("item-price");
  buyAmmount = document.getElementById("buy-ammount");
  total = document.getElementById("total");
  price = document.getElementById("price");
  cartImage = document.getElementById("cart-image");
  empty = document.getElementById("empty");
  item1 = document.getElementById("item1");
  item2 = document.getElementById("item2");
  item3 = document.getElementById("item3");
  item4 = document.getElementById("item4");
  cart = document.getElementById("emptyCart");
  count = document.getElementById("cart-item-ammount");
  prev = document.getElementById("prev");
  next = document.getElementById("next");
  if (cartImage.classList.contains("inactive") && ammount.innerHTML > 0) {
    cartImage.classList.remove("inactive");
    empty.classList.add("inactive");
    cart.classList.remove("inactive");
    item1.classList.remove("inactive");
    item2.classList.remove("inactive");
    item3.classList.remove("inactive");
    item4.classList.remove("inactive");
    count.classList.remove("inactive");
    prev.classList.add("inactive");
    next.classList.add("inactive");
    itemPrice.innerHTML = price.innerHTML;
    buyAmmount.innerHTML = ammount.innerHTML;
    total.innerHTML = "$" + ammount.innerHTML * price.innerHTML;
  }
  if (ammount.innerHTML > 0) {
    itemPrice.innerHTML = price.innerHTML;
    buyAmmount.innerHTML = ammount.innerHTML;
    total.innerHTML = "$" + ammount.innerHTML * price.innerHTML;
    count.innerHTML = ammount.innerHTML;
  }
  ammount.innerHTML = 0;
  document.getElementById("cart-state").style.display = "grid";
  document.getElementById("cart-state").style.textAlign = "unset";
}

function emptyCart() {
  cartImage = document.getElementById("cart-image");
  empty = document.getElementById("empty");
  item1 = document.getElementById("item1");
  item2 = document.getElementById("item2");
  item3 = document.getElementById("item3");
  item4 = document.getElementById("item4");
  cart = document.getElementById("emptyCart");
  count = document.getElementById("cart-item-ammount");
  prev = document.getElementById("prev");
  next = document.getElementById("next");
  cartImage.classList.add("inactive");
  empty.classList.remove("inactive");
  item1.classList.add("inactive");
  item2.classList.add("inactive");
  item3.classList.add("inactive");
  item4.classList.add("inactive");
  count.classList.add("inactive");
  cart.classList.add("inactive");
  prev.classList.remove("inactive");
  next.classList.remove("inactive");
  document.getElementById("cart-state").style.display = "block";
  document.getElementById("cart-state").style.textAlign = "center";
}

function enlargeImage() {
  var width = window.innerWidth; 
  if (width >= 769) {
    gray = document.getElementById("graytwo");
    imgWrapper = document.getElementById("enlarged-imgs-wrapper");
    if(gray.classList.contains("inactive") && imgWrapper.classList.contains("inactive")) {
      gray.classList.remove("inactive")
      imgWrapper.style.display = "grid";
    };
  }
}

function closeEnlargedImg() { 
  imgWrapper = document.getElementById("enlarged-imgs-wrapper");
  gray = document.getElementById("graytwo");
  imgWrapper.style.display = "none";
  gray.classList.add("inactive")
}

function setImgOne() {
  img = document.getElementById("sneakers");
  img2 = document.getElementById("enlarged-img");
  if (!img.src.match("./images/image-product-1.jpg") || !img2.src.match("./images/image-product-1.jpg")) {
    img.src = "./images/image-product-1.jpg";
    img2.src = "./images/image-product-1.jpg";
  }
}

function setImgTwo() {
  img = document.getElementById("sneakers");
  img2 = document.getElementById("enlarged-img");
  if (!img.src.match("./images/image-product-2.jpg") || !img2.src.match("./images/image-product-2.jpg")) {
    img.src = "./images/image-product-2.jpg";
    img2.src = "./images/image-product-2.jpg";
  }
}

function setImgThree() {
  img = document.getElementById("sneakers");
  img2 = document.getElementById("enlarged-img");
  if (!img.src.match("./images/image-product-3.jpg") || !img2.src.match("./images/image-product-3.jpg")) {
    img.src = "./images/image-product-3.jpg";
    img2.src = "./images/image-product-3.jpg";
  }
}

function setImgFour() {
  img = document.getElementById("sneakers");
  img2 = document.getElementById("enlarged-img");
  if (!img.src.match("./images/image-product-4.jpg") || !img2.src.match("./images/image-product-4.jpg")) {
    img.src = "./images/image-product-4.jpg";
    img2.src = "./images/image-product-4.jpg";
  }
}

