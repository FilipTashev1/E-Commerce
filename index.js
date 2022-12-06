function next() {
    img = document.getElementById('sneakers');
    if (img.src.match("./images/image-product-1.jpg")) {
        img.src = "./images/image-product-2.jpg";
    } else if (img.src.match("./images/image-product-2.jpg")) {
        img.src = "./images/image-product-3.jpg"
    } else if (img.src.match("./images/image-product-3.jpg")) {
        img.src = "./images/image-product-4.jpg"
    } else {
        img.src = "./images/image-product-1.jpg"
    }
 }

function prev() {
    img = document.getElementById('sneakers');
    if (img.src.match("./images/image-product-4.jpg")) {
        img.src = "./images/image-product-3.jpg";
    } else if (img.src.match("./images/image-product-3.jpg")) {
        img.src = "./images/image-product-2.jpg"
    } else if (img.src.match("./images/image-product-2.jpg")) {
        img.src = "./images/image-product-1.jpg"
    } else {
        img.src = "./images/image-product-4.jpg"
    }
 }

function minus() {
    ammount = document.getElementById('ammount');
    if (ammount.innerHTML > 0) {
        return ammount.innerHTML = ammount.innerHTML - 1;
    } else {
        return ammount.innerHTML;
    }
 }

function plus() {
    ammount = document.getElementById('ammount');
    if (ammount.innerHTML >= 0 && ammount.innerHTML < 999) {
        return ammount.innerHTML = parseInt(ammount.innerHTML) + 1;
    } else {
        return ammount.innerHTML;
    }
 }

function toggleMenu() {
    menu = document.getElementById('menu-button');
    gray = document.getElementById('gray');
    if (menu.classList.contains('inactive')) {
        menu.classList.remove('inactive')
        gray.classList.remove('inactive')
    } else {
        menu.classList.add('inactive')
        gray.classList.add('inactive')   
    }
 }

function toggleCart() {
    cartContainer = document.getElementById('cart');
    if (!cartContainer.classList.contains('inactive')) {
        cartContainer.classList.add('inactive')
    } else {
        cartContainer.classList.remove('inactive')
    }
}

