const products = [
        { name: "Marigold", price: 20, image: "../assets/marigold.webp", btn: "Buy Now" },
        { name: "Jasmin", price: 20, image: "../assets/jasmin.jpg", btn: "Buy Now" },
        { name: "Roses", price: 20, image: "../assets/Rose.png", btn: "Buy Now" },
        { name: "Blue Water Lily", price: 20, image: "../assets/BlueWaterLily.webp", btn: "Buy Now" },
        { name: "Butterfly Pea", price: 20, image: "../assets/ButterflyPea.webp", btn: "Buy Now" },
        { name: "Champak", price: 20, image: "../assets/Champak.webp", btn: "Buy Now" },
        { name: "Datura", price: 20, image: "../assets/Datura.webp", btn: "Buy Now" },
        { name: "Flame of Forest", price: 20, image: "../assets/FlameofForest.webp", btn: "Buy Now" },
        { name: "Hibiscus", price: 20, image: "../assets/hibiscus.webp", btn: "Buy Now" },
        { name: "Lavender", price: 20, image: "../assets/lavender.webp", btn: "Buy Now" },
        { name: "Lily", price: 20, image: "../assets/lily.webp", btn: "Buy Now" },
        { name: "Lotus", price: 20, image: "../assets/lotus.webp", btn: "Buy Now" },
        { name: "Mongolian", price: 20, image: "../assets/mangolia.webp", btn: "Buy Now" },
        { name: "Night Jasmin", price: 20, image: "../assets/nightJasmin.webp", btn: "Buy Now" },
        { name: "Pin wheel", price: 20, image: "../assets/Pinwheel.webp", btn: "Buy Now" },
        { name: "Rangoon Creeper", price: 20, image: "../assets/RangoonCreeper.webp", btn: "Buy Now" },
        { name: "Sunflower", price: 20, image: "../assets/sunflower.webp", btn: "Buy Now" },
        { name: "Tuberose", price: 20, image: "../assets/tubeRose.webp", btn: "Buy Now" },
        { name: "Tulip", price: 20, image: "../assets/tulip.webp", btn: "Buy Now" },
        { name: "Zinnia", price: 20, image: "../assets/Zinnia.webp", btn: "Buy Now" },
      ];

      const bouquets = [
        { name: "Classic Red Rose Bouquet", price: 50, image: "../assets/daisy1.webp", btn: "Buy Now" },
        { name: "Mixed Pastel Blooms", price: 65, image: "../assets/Daisy.avif", btn: "Buy Now" },
        { name: "Elegant White Lilies", price: 70, image: "../assets/Silk Cotton.avif", btn: "Buy Now" },
        { name: "Sunshine Sunflower Mix", price: 45, image: "../assets/Sunflower1.avif", btn: "Buy Now" },
        { name: "Romantic Pink Peonies", price: 85, image: "../assets/cosmos.jpg", btn: "Buy Now" },
        { name: "Purple Orchid Elegance", price: 90, image: "../assets/lily1.jpeg", btn: "Buy Now" },
        { name: "Rustic Wildflower Bunch", price: 55, image: "../assets/aster.webp", btn: "Buy Now" },
        { name: "Premium Tulip Assortment", price: 75, image: "../assets/Bougainvillea.avif", btn: "Buy Now" },
      ];

      const malas = [
        { name: "Fresh Marigold Mala", price: 15, image: "../assets/711yIk9O7sL.jpg", btn: "Buy Now" },
        { name: "Rose & Jasmine Mala", price: 30, image: "../assets/rose.webp", btn: "Buy Now" },
        { name: "Premium Orchid Mala", price: 45, image: "../assets/71kroIHXpEL.jpg", btn: "Buy Now" },
        { name: "Traditional Lotus Mala", price: 50, image: "../assets/saafa.webp", btn: "Buy Now" },
        { name: "Tulsi & Marigold Mala", price: 20, image: "../assets/handmade rose.jpg", btn: "Buy Now" },
        { name: "Bridal Jasmine Mala", price: 60, image: "../assets/handmade.avif", btn: "Buy Now" },
        { name: "Mixed Floral Mala", price: 35, image: "../assets/images.jpeg", btn: "Buy Now" },
        { name: "Exotic Orchid Mala", price: 40, image: "../assets/floral.jpg", btn: "Buy Now" },
      ];

      const cardContainer = document.getElementById("cardContainer");
      const bouquetContainer = document.getElementById("bouquetContainer");
      const malaContainer = document.getElementById("malaContainer");

      // Setup Intersection Observer for reveal animations
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      const renderCards = (data, target) => {
        data.forEach((item, index) => {
          const wrapper = document.createElement("div");
          wrapper.className = "reveal";
          wrapper.style.transitionDelay = `${(index % 4) * 50}ms`;

          wrapper.innerHTML = `
            <div class="product-card group bg-white rounded-3xl p-3 sm:p-4 border border-gray-100 flex flex-col h-full overflow-hidden">
              <div class="overflow-hidden rounded-2xl bg-gray-50 aspect-square">
                <img src="${item.image}" alt="${item.name}" 
                  class="w-full h-full object-cover"
                  onerror="this.src='https://via.placeholder.com/400x400?text=${encodeURIComponent(item.name)}'">
              </div>
              <div class="flex flex-col mt-4 mb-4 gap-1">
                <h3 class="font-bold text-gray-800 text-xs sm:text-base leading-tight group-hover:text-[#818D7F] transition-colors">${item.name}</h3>
                <span class="font-black text-sm sm:text-lg text-[#818D7F]">$${item.price}</span>
              </div>
              <button 
                class="btn-shine mt-auto w-full bg-[#818D7F] text-white py-3 rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-md active:scale-95 transition-all">
                ${item.btn}
              </button>
            </div>
          `;
          target.appendChild(wrapper);
          revealObserver.observe(wrapper);
        });
      };

      // Initial Load
      renderCards(products, cardContainer);
      renderCards(bouquets, bouquetContainer);
      renderCards(malas, malaContainer);

      // Global Reveal Listeners
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));