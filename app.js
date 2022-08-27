// *** variables ***

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

// *** cart ***

let cart = [];

class Products {
  async getProducts() {
    try {
      const result = await window.fetch("products.json");
      const data = await result.json();
      return data;
    } catch (error) {
      console.log("Error", error);
    }
  }
}

class UI {}

class Storage {}

document.addEventListener("DOMContentLoaded", (e) => {
  const products = new Products();
  products.getProducts().then((products) => console.log(products));
  const ui = new UI();
});
