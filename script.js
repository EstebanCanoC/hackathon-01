// Carrito list              --------------------------------------
document.getElementById("cart-icon").addEventListener("click", function (e) {
  e.preventDefault(); // Evita el comportamiento por defecto del enlace
  const cartDropdown = document.getElementById("cart-dropdown");
  cartDropdown.classList.toggle("visible");
  cartDropdown.classList.toggle("hidden");
});

// Slider                     -------------------------------------
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Función para iniciar el slider automático
function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
}

// Función para detener el slider automático
function stopSlideShow() {
  clearInterval(slideInterval);
}

// Iniciar el slider automático al cargar la página
window.onload = startSlideShow;

// Opción de detener el slider al pasar el mouse sobre él
const slidesContainer = document.querySelector(".slides");
slidesContainer.addEventListener("mouseenter", stopSlideShow);
slidesContainer.addEventListener("mouseleave", startSlideShow);

document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const itemCount = document.getElementById('item-count');
    const totalPrice = document.getElementById('total-price');
    const emptyCartButton = document.getElementById('empty-cart');

    let cartItems = [];

    // Agregar evento a los botones de agregar al carrito
    document.querySelectorAll('.add-cart').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento por defecto del enlace
            
            const productName = this.closest('.info-container').querySelector('h3').textContent;
            const productPrice = parseFloat(this.dataset.price);

            // Agregar el producto al carrito
            cartItems.push({ name: productName, price: productPrice });
            updateCart();
        });
    });

    // Función para actualizar el carrito
    function updateCart() {
        cartItemsContainer.innerHTML = ''; // Limpiar el contenedor
        let total = 0;

        cartItems.forEach((item, index) => {
            total += item.price;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                <button class="remove-item" data-index="${index}">Eliminar</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        itemCount.textContent = cartItems.length;
        totalPrice.textContent = $${total.toFixed(2)};

        // Mostrar el carrito
        cart.classList.add('show');

        // Agregar evento para eliminar artículo
        addRemoveItemEvent();
    }

    // Función para agregar eventos a los botones de eliminar
    function addRemoveItemEvent() {
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.dataset.index;
                cartItems.splice(index, 1); // Eliminar el artículo
                updateCart();
            });
        });
    }

    // Vaciar carrito
    emptyCartButton.addEventListener('click', () => {
        cartItems = [];
        updateCart();
    });
});

// Js para el footer

document
  .getElementById("subscribete-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Lógica para manejar la suscripción
    const email = this.querySelector('input[type="email"]').value;
    console.log("Email suscrito:", email);
    // Lógica para enviar el email al servidor
  });
