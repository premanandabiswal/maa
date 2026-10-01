// Home link: index.html — helper note
// File contains contact page scripts and theme config
 tailwind.config = {
      theme: {
        extend: {
          colors: {
            pageBg: "var(--color-pageBg)",
            topbar: "var(--color-topbar)",
            iconBg: "var(--color-iconBg)",
            cardBg: "var(--color-cardBg)",
            footerBg: "var(--color-footerBg)",
            textMain: "var(--color-textMain)",
            textSub: "var(--color-textSub)",
            gold: "var(--color-gold)",
            'primary-brown': '#78350f',
            'soft-brown': '#fff7ed',
            'accent-brown': '#b45309',
            'boutique-gold': '#92400e',
            'marker-red': '#dc2626',
          },
          fontFamily: {
            serif: ["Playfair Display", "serif"],
            sans: ["Inter", "sans-serif"],
          },
        },
      },
    };
    // Main JavaScript file for Maa Durga Florals

document.addEventListener("DOMContentLoaded", () => {
  // Preloader removed: no GSAP preloader timeline

  // Elegant FAQ Category Switching Logic
  const categoryBtns = document.querySelectorAll(".faq-category-btn");
  const faqSections = document.querySelectorAll(".faq-category-content");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active state from all buttons
      categoryBtns.forEach((b) => {
        b.classList.remove(
          "bg-[#3a4437]",
          "text-white",
          "shadow-[0_8px_20px_rgba(58,68,55,0.3)]",
          "active",
        );
        b.classList.add("bg-white/80", "text-textSub");
        const icon = b.querySelector("i:first-child");
        if (icon) {
          icon.classList.remove("text-gold");
          icon.classList.add("text-gray-400");
        }
      });

      // Add active state to clicked button
      btn.classList.add(
        "bg-[#3a4437]",
        "text-white",
        "shadow-[0_8px_20px_rgba(58,68,55,0.3)]",
        "active",
      );
      btn.classList.remove("bg-white/80", "text-textSub");
      const activeIcon = btn.querySelector("i:first-child");
      if (activeIcon) {
        activeIcon.classList.remove("text-gray-400");
        activeIcon.classList.add("text-gold");
      }

      // Hide all sections cleanly
      faqSections.forEach((sec) => {
        sec.classList.add("hidden");
        sec.classList.remove("animate-fade-up");

        // Rest and close unviewed accordions perfectly
        sec.querySelectorAll(".faq-item.active").forEach((item) => {
          item.classList.remove("active");
          const content = item.querySelector(".faq-content");
          if (content) {
            content.style.maxHeight = "0px";
            content.style.opacity = "0";
          }
          const icon = item.querySelector(".faq-icon");
          if (icon) icon.style.transform = "rotate(0deg)";
        });
      });

      // Reveal Target precisely
      const targetId = btn.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove("hidden");
        // Force DOM reflow to beautifully trigger entrance animations
        void targetSection.offsetWidth;
        targetSection.classList.add("animate-fade-up");
      }
    });
  });

  // Elegant FAQ Accordion Animation Logic
  const faqButtons = document.querySelectorAll(".faq-toggle");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const faqItem = button.closest(".faq-item");
      const content = faqItem.querySelector(".faq-content");
      const icon = faqItem.querySelector(".faq-icon");
      const isActive = faqItem.classList.contains("active");

      // Clean accordion logic: close all other items for a premium feel
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem && item.classList.contains("active")) {
          item.classList.remove("active");
          const otherContent = item.querySelector(".faq-content");
          otherContent.style.maxHeight = "0px";
          otherContent.style.opacity = "0";
          otherContent.style.paddingTop = "0px";
          item.querySelector(".faq-icon").style.transform = "rotate(0deg)";
        }
      });

      // Toggle current section
      if (!isActive) {
        faqItem.classList.add("active");
        content.style.maxHeight = content.scrollHeight + 20 + "px"; // padding buffer
        content.style.opacity = "1";
        icon.style.transform = "rotate(180deg)";
      } else {
        faqItem.classList.remove("active");
        content.style.maxHeight = "0px";
        content.style.opacity = "0";
        icon.style.transform = "rotate(0deg)";
      }
    });
  });

  // Elegant Testimonials Slider Logic
  const track = document.getElementById("testimonialTrack");
  const slides = document.querySelectorAll(".test-slide");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");
  const dots = document.querySelectorAll(".testimo-dot");

  if (track && slides.length > 0) {
    let currentIndex = 0;

    const updateSlider = () => {
      // Indestructible pure CSS translation strictly scaling based on intrinsic track width
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Update semantic dots indicator state
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.replace("bg-[#bcc6b5]", "bg-gold");
          dot.classList.add("scale-125");
        } else {
          dot.classList.replace("bg-gold", "bg-[#bcc6b5]");
          dot.classList.remove("scale-125");
        }
      });
    };

    const goNext = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    };

    const goPrev = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    };

    if (nextBtn) nextBtn.addEventListener("click", goNext);
    if (prevBtn) prevBtn.addEventListener("click", goPrev);

    // Allow Clickable Semantic Dots Selection
    if (dots) {
      dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
          currentIndex = parseInt(e.target.getAttribute("data-index"));
          updateSlider();
        });
      });
    }

    // Core Resiliency: Recalculate precisely on Viewport Scaling / Device Orientation changes
    window.addEventListener("resize", updateSlider);

    // Auto-play interval configured for exactly 6000ms rotating cadence
    setInterval(goNext, 6000);
  }

  // Elegant Scroll Animation Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.getAttribute('data-animate');
        if (animationClass) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add(...animationClass.split(' '));
          // Optional: Stop observing once animated if you only want it to animate once
          // observer.unobserve(entry.target); 
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-animate]').forEach(el => {
    scrollObserver.observe(el);
  });

  // --- LEAFLET MAP LOGIC ---
  const mapElement = document.getElementById('map');
  if (mapElement && typeof L !== 'undefined') {
    const areas = [
      "BHIWADI (MAIN)", "Abhanpur", "Adeepur", "Ahamlaka", "Alapur Jatt", "Alapur Meo", 
      "Alawalpur", "Ameer Nagar", "Andhaka", "Arandka", "Asleempur", "Baghor", "Bahadari", 
      "Bai", "Baijalhera", "Baliyawas", "Baloj", "Baman Thedi", "Banban", "Banbeerpur", 
      "Bandapur", "Bandra", "Banjhra", "Barhera", "Basai", "Began Heri", "Berla", 
      "Bhalesar", "Bhamraka", "Bhatkol", "Bhindoosi", "Bhojawas", "Bhoodki", "Bhoodli", 
      "Bibipur", "Bichhala", "Bichpuri", "Bilaspur", "Binoliya", "Bub Ka Hera", "Burera", 
      "Chaupanki", "Chawandi Kalan", "Chawandi Khurd", "Chhapar", "Chooharpur", "Dabhera", 
      "Daganheri", "Daika", "Damdama", "Dhaki"
    ];

    const center = [28.2100, 76.8400];
    const boutiqueLoc = [28.2150, 76.8320];
    let map, markers = {};

    map = L.map('map', { zoomControl: false }).setView(center, 13);
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      attribution: '&copy; Google Maps'
    }).addTo(map);

    // 1. MAIN BOUTIQUE - Modified to Red Marker
    const shopIcon = L.divIcon({
      className: 'flower-marker',
      html: `<div class="bg-white rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 border-2 border-marker-red animate-pulse-red" style="width: 60px; height: 60px;">
                <svg viewBox="0 0 24 24" width="36" height="36" class="fill-marker-red">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                  <circle cx="12" cy="14" r="2" fill="white"/>
                </svg>
              </div>`,
      iconSize: [60, 60],
      iconAnchor: [30, 30]
    });
    L.marker(boutiqueLoc, { icon: shopIcon }).addTo(map).bindPopup(`
      <div class="text-center p-2">
          <p class="font-bold text-slate-800 text-sm italic">Premium Floral Boutique</p>
          <p class="text-[10px] text-slate-500 mb-2 font-serif">Flagship Location</p>
          <span class="bg-red-50 text-marker-red px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-tight">Main Boutique</span>
      </div>
    `);

    // 2. BROWN DELIVERY POINTERS
    areas.forEach((name, i) => {
      let coords;
      let isMain = name === "BHIWADI (MAIN)";
      
      if (isMain) {
        coords = center;
      } else {
        const radius = 0.07;
        const angle = (i / areas.length) * Math.PI * 2;
        coords = [
          center[0] + (Math.cos(angle) * (0.015 + Math.random() * radius)),
          center[1] + (Math.sin(angle) * (0.015 + Math.random() * radius))
        ];
      }

      const markerSize = isMain ? 54 : 34;
      const svgSize = isMain ? 32 : 20;

      const icon = L.divIcon({
        className: 'flower-marker',
        html: `<div class="bg-white rounded-tr-full rounded-tl-full rounded-br-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-125 hover:-translate-y-1 -rotate-45 border-2 ${isMain ? 'border-[#78350f] animate-pulse-brown' : 'border-amber-200'}" style="width: ${markerSize}px; height: ${markerSize}px;">
                  <svg viewBox="0 0 24 24" width="${svgSize}" height="${svgSize}" class="rotate-45 fill-[#b45309] ${isMain ? 'fill-[#78350f]' : ''}">
                    <path d="M12 2c-4 0-8 3-8 8 0 5 8 12 8 12s8-7 8-12c0-5-4-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>`,
        iconSize: [markerSize, markerSize],
        iconAnchor: [markerSize / 2, markerSize / 2]
      });

      const marker = L.marker(coords, { icon: icon }).addTo(map);
      marker.bindPopup(`
        <div class="p-1 font-serif">
            <p class="font-bold text-amber-900 m-0 text-sm">${name}</p>
            <p class="text-[10px] text-amber-600 m-0 font-bold uppercase tracking-wide">Delivery Zone</p>
            <button class="w-full mt-2 py-2 bg-[#78350f] text-white text-[10px] rounded-lg hover:bg-amber-900 font-bold uppercase transition-colors">Select for Delivery</button>
        </div>
      `);
      
      markers[name] = marker;
    });

    const searchInput = document.getElementById('locationSearch');
    const resultsBox = document.getElementById('searchResults');

    if (searchInput && resultsBox) {
      searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        if (term.length < 1) {
          resultsBox.classList.add('hidden');
          return;
        }

        const filtered = areas.filter(a => a.toLowerCase().includes(term));
        
        if (filtered.length > 0) {
          resultsBox.innerHTML = filtered.map(name => `
            <div onclick="window.focusArea('${name}')" class="p-3 hover:bg-amber-50 cursor-pointer border-b border-amber-50 last:border-0 text-sm font-medium text-slate-700 flex items-center gap-3 transition-colors">
              <span class="w-2 h-2 rounded-full bg-amber-400"></span>
              ${name}
            </div>
          `).join('');
          resultsBox.classList.remove('hidden');
        } else {
          resultsBox.classList.add('hidden');
        }
      });

      window.focusArea = function(name) {
        const marker = markers[name];
        if (marker) {
          map.flyTo(marker.getLatLng(), 15, { duration: 1.5 });
          marker.openPopup();
          resultsBox.classList.add('hidden');
          searchInput.value = name;
        }
      };

      document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
          resultsBox.classList.add('hidden');
        }
      });
    }
  }
});
  document.querySelectorAll('.faq-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');

        // Update active sidebar style
        document.querySelectorAll('.faq-nav-item').forEach(nav => {
          nav.classList.remove('bg-gold', 'text-white', 'active-tab');
          nav.classList.add('bg-cardBg', 'text-textSub');
          const icon = nav.querySelector('i:first-child');
          if (icon) icon.classList.replace('text-white', 'text-gray-400');
        });

        item.classList.add('bg-gold', 'text-white', 'active-tab');
        item.classList.remove('bg-cardBg', 'text-textSub');
        const activeIcon = item.querySelector('i:first-child');
        if (activeIcon) activeIcon.classList.replace('text-gray-400', 'text-white');

        // Toggle sections
        document.querySelectorAll('.faq-section').forEach(section => {
          section.classList.add('hidden');
        });
        document.getElementById(category).classList.remove('hidden');
      });
    });

    // Accordion logic
    document.querySelectorAll('.faq-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const item = toggle.parentElement;
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        const isOpen = !content.classList.contains('max-h-0');

        // Close all others in the same section
        item.parentElement.querySelectorAll('.faq-content').forEach(c => {
          c.classList.add('max-h-0', 'opacity-0');
          const otherIcon = c.previousElementSibling.querySelector('.faq-icon');
          if (otherIcon) {
            otherIcon.classList.remove('rotate-180');
            otherIcon.classList.replace('fa-minus', 'fa-plus'); // If using plus/minus
          }
        });

        if (!isOpen) {
          content.classList.remove('max-h-0', 'opacity-0');
          content.classList.add('max-h-[500px]', 'opacity-100');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    });
    document.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(Flip);

      const grid = document.querySelector("#dashboard-grid");
      const toggleBtn = document.querySelector("#layoutToggleBtn");
      const layoutIcon = document.querySelector("#layoutIcon");
      let isGrid = true;

      if (grid && toggleBtn) {
        toggleBtn.addEventListener("click", () => {
          // Get the current state of all children (the cards)
          const state = Flip.getState(grid.children);

          // Make DOM changes
          if (isGrid) {
            grid.classList.remove("md:grid-cols-2", "lg:grid-cols-3");
            grid.classList.add("md:grid-cols-1", "lg:grid-cols-1");
            layoutIcon.classList.replace("fa-table-cells-large", "fa-list");
          } else {
            grid.classList.remove("md:grid-cols-1", "lg:grid-cols-1");
            grid.classList.add("md:grid-cols-2", "lg:grid-cols-3");
            layoutIcon.classList.replace("fa-list", "fa-table-cells-large");
          }
          isGrid = !isGrid;

          // Animate from the previous state to the new state seamlessly
          Flip.from(state, {
            duration: 0.6,
            ease: "power2.inOut",
            stagger: 0.05,
            absolute: true // helps with layout shifts during animation
          });
        });
      }
    });
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