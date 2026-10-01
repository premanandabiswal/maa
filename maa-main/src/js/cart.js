 const footerHTML = `
      <footer class="relative bg-[#818D7F] text-white mt-24 pt-24 pb-8 overflow-visible">
        <div class="absolute -top-14 left-6 md:left-20">
          <img src="../assets/Group 63.png" alt="Logo" class="h-20 md:h-28 w-auto drop-shadow-lg" onerror="this.style.display='none'" />
        </div>
        <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h2 class="text-xl md:text-2xl font-bold mb-5 underline decoration-yellow-200 underline-offset-8">Quick Links</h2>
            <ul class="grid grid-cols-2 gap-y-3 text-sm md:text-base">
              <li><a href="index.html" class="hover:text-yellow-200 transition">Home</a></li>
              <li><a href="collection.html" class="hover:text-yellow-200 transition">Collection</a></li>
              <li><a href="services.html" class="hover:text-yellow-200 transition">Services</a></li>
              <li><a href="occasion.html" class="hover:text-yellow-200 transition">Occasion</a></li>
              <li><a href="contact.html" class="hover:text-yellow-200 transition">Contact</a></li>
              <li><a href="cart.html" class="hover:text-yellow-200 transition">Cart 🛒</a></li>
            </ul>
          </div>
          <div>
            <h2 class="text-xl md:text-2xl font-bold mb-5 underline decoration-yellow-200 underline-offset-8">Contact Us</h2>
            <ul class="space-y-4 text-sm md:text-base">
              <li class="flex gap-3"><span>📍</span><span>Main Market, Bhiwadi<br />Rajasthan, 301019</span></li>
              <li class="flex gap-3"><span>📞</span><span>+91 98765 43210</span></li>
              <li class="flex gap-3"><span>✉️</span><span>info@maadurgaflorals.com</span></li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h2 class="text-xl md:text-2xl font-bold mb-5 underline decoration-yellow-200 underline-offset-8">Our Location</h2>
            <div class="w-full h-[200px] rounded-xl overflow-hidden shadow-lg border-2 border-white/20 relative group">
              <div class="absolute inset-0 bg-transparent z-10 hidden md:block group-hover:hidden"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112349.56637373357!2d76.76211110461877!3d28.204561845110998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d47b01b636035%3A0x6e902b48d88eab94!2sBhiwadi%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1707000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="grayscale-[30%] hover:grayscale-0 transition-all duration-500">
              </iframe>
            </div>
          </div>
        </div>
        <div class="mt-12 pt-4 border-t border-white/20 text-center text-sm text-white/80">
          © 2026 Maa Durga Florals. All rights reserved. | <span class="text-black font-semibold cursor-pointer hover:text-yellow-200 transition-colors duration-300">Nityasundaram Production</span>
        </div>
      </footer>
      `;
      const footerContainer = document.getElementById("footer");
      if (footerContainer) footerContainer.innerHTML = footerHTML;
 function loadCart() {
          const cart = JSON.parse(localStorage.getItem('cart')) || [];
          const emptyView = document.getElementById('emptyCartView');
          const filledView = document.getElementById('filledCartView');
          
          if (cart.length === 0) {
              emptyView.classList.remove('hidden');
              emptyView.classList.add('flex');
              filledView.classList.add('hidden');
              filledView.classList.remove('flex');
          } else {
              emptyView.classList.add('hidden');
              emptyView.classList.remove('flex');
              filledView.classList.remove('hidden');
              filledView.classList.add('flex');
              
              renderCartItems(cart);
          }
      }

      function updateItemQty(index, change) {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          if (cart[index]) {
              cart[index].qty += change;
              if (cart[index].qty <= 0) {
                  cart.splice(index, 1); // Remove item if quantity goes to 0
              }
              localStorage.setItem('cart', JSON.stringify(cart));
              loadCart();
          }
      }

      function renderCartItems(cart) {
          const container = document.getElementById('cartItemsContainer');
          container.innerHTML = '';
          
          let totalItems = 0;
          let productTotal = 0;
          
          cart.forEach((item, index) => {
              totalItems += item.qty;
              productTotal += item.price * item.qty;
              const itemTotal = item.price * item.qty;
              
              const itemEl = document.createElement('div');
              itemEl.className = "flex items-center gap-4 bg-transparent";
              itemEl.innerHTML = `
                  <img src="${item.image}" alt="${item.name}" class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl shadow-sm border border-gray-200">
                  
                  <div class="flex-1 min-w-0">
                      <h4 class="font-medium text-lg md:text-xl text-gray-800 truncate">${item.name}</h4>
                      <p class="text-[10px] md:text-xs text-gray-500 italic mb-1 truncate">${item.subtext || 'Premium selection'}</p>
                      <p class="font-bold text-gray-900 text-sm md:text-base">₹ ${item.price}</p>
                  </div>
                  
                  <div class="flex items-center gap-3 md:gap-6">
                      <!-- Quantity Control -->
                      <div class="flex items-center bg-white rounded-full border border-gray-400 shadow-sm overflow-hidden h-8">
                          <button onclick="updateItemQty(${index}, -1)" class="px-3 text-gray-600 hover:bg-gray-100 h-full flex items-center justify-center focus:outline-none"><i class="fa-solid fa-minus text-[10px]"></i></button>
                          <span class="px-3 font-bold text-gray-800 border-x border-gray-400 text-xs md:text-sm w-10 text-center h-full flex items-center justify-center">${item.qty}</span>
                          <button onclick="updateItemQty(${index}, 1)" class="px-3 text-gray-600 hover:bg-gray-100 h-full flex items-center justify-center focus:outline-none"><i class="fa-solid fa-plus text-[10px]"></i></button>
                      </div>
                      
                      <!-- Item Total -->
                      <div class="font-bold text-base md:text-lg text-gray-900 w-12 md:w-16 text-right">
                          ₹${itemTotal}
                      </div>
                  </div>
              `;
              container.appendChild(itemEl);
          });
          
          // Update Summary Section
          document.getElementById('priceDetailsTitle').textContent = `Price Details(${totalItems} item${totalItems > 1 ? 's' : ''} added)`;
          document.getElementById('productTotal').textContent = productTotal;
          
          // Simple mock discount: flat 5 if cart total is over 50
          const discount = productTotal >= 50 ? 5 : 0; 
          document.getElementById('discountTotal').textContent = discount;
          
          const orderTotal = productTotal - discount;
          document.getElementById('orderTotal').textContent = orderTotal;
      }

      function checkout() {
          alert('Proceeding to checkout...');
          // Implement checkout logic here, e.g. window.location.href = 'checkout.html';
      }

      // Initialize on load
      document.addEventListener('DOMContentLoaded', loadCart);
            
    