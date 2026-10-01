const navItems = [
      { id: 'home', icon: 'fa-house', label: 'Home', href: '#' },
      { id: 'collection', icon: 'fa-list-ul', label: 'Collection', href: '#' },
      { id: 'services', icon: 'fa-handshake', label: 'Services', href: '#' },
      { id: 'occasion', icon: 'fa-spa', label: 'Occasion', href: '#' },
      { id: 'contact', icon: 'fa-phone', label: 'Contact', href: '#' },
      { id: 'cart', icon: 'fa-cart-shopping', label: 'Cart', href: '#', badge: 1 }
    ];

    const servicesData = [
      { 
        title: "Door-to-Door Delivery", 
        description: "Experience the ultimate convenience with our reliable doorstep delivery. We bring fresh, vibrant floral arrangements straight to your home, perfect for daily needs or surprising a loved one.",
        videoUrl: "../assets/WhatsApp Video 2026-05-10 at 10.16.49 AM.mp4",
        secondaryVideos: [
          "https://assets.mixkit.co/videos/preview/mixkit-pink-and-white-flowers-in-the-sun-1192-large.mp4",
          "https://assets.mixkit.co/videos/preview/mixkit-beautiful-white-flowers-in-a-glass-vase-1193-large.mp4"
        ]
      },
      { 
        title: "Marigold Wholesaling", 
        description: "Premium quality fresh marigolds available in bulk quantities. Ideal for large-scale wedding mandaps, vibrant festivals, and extensive spiritual ceremonies with guaranteed freshness at competitive wholesale prices.",
        videoUrl: "../assets/PixVerse_V6_Image_Text_360P_Marigold_Wholesali.mp4",
        secondaryVideos: [
          "https://assets.mixkit.co/videos/preview/mixkit-sunflower-in-the-wind-1188-large.mp4",
          "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-flowers-in-a-pot-1200-large.mp4"
        ]
      },
      { 
        title: "Event & Mandap Decor", 
        description: "Specializing in traditional Rajasthani and contemporary wedding decor. We design breathtaking mandaps and stage backdrops using premium local and imported flowers.",
        videoUrl: "../assets/WhatsApp Video 2026-05-10 at 10.22.44 AM.mp4",
        secondaryVideos: [
          "https://assets.mixkit.co/videos/preview/mixkit-red-roses-in-a-bouquet-1191-large.mp4",
          "https://assets.mixkit.co/videos/preview/mixkit-sunflower-in-the-wind-1188-large.mp4"
        ]
      },
      { 
        title: "Floral Gifting & Hampers", 
        description: "Elegant bespoke hampers for corporate milestones or personal celebrations. We combine fresh premium blooms with artisan treats, all presented in our signature sustainable packaging.",
        videoUrl: "../assets/Hailuo_Video_Floral Gifting & Hampers Elega_509756886523088904.mp4",
        secondaryVideos: [
          "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-flowers-in-a-pot-1200-large.mp4",
          "https://assets.mixkit.co/videos/preview/mixkit-pink-tulips-moving-slowly-in-the-wind-1185-large.mp4"
        ]
      },
      { 
        title: "Corporate Subscriptions", 
        description: "Enhance your office ambiance and brand perception with sophisticated floral arrangements. Perfect for reception desks, conference rooms, and hospitality lobbies.",
        videoUrl: "../assets/Hailuo_Video_Corporate Subscriptions Enhanc_509755857861607433.mp4",
        secondaryVideos: [
          "https://assets.mixkit.co/videos/preview/mixkit-bright-red-flowers-in-a-garden-1186-large.mp4",
          "https://assets.mixkit.co/videos/preview/mixkit-a-lot-of-flowers-in-a-pot-1198-large.mp4"
        ]
      },
      { 
        title: "Puja & Spiritual Decor", 
        description: "Dedicated floral styling for traditional spiritual spaces. From intricate flower rangolis to festive temple decorations, we bring divine beauty to your sacred rituals.",
        videoUrl: "../assets/WhatsApp Video 2026-05-10 at 10.28.12 AM.mp4",
        secondaryVideos: [
          "https://assets.mixkit.co/videos/preview/mixkit-yellow-flowers-in-a-garden-1189-large.mp4",
          "https://assets.mixkit.co/videos/preview/mixkit-small-pink-flowers-moving-in-the-wind-1184-large.mp4"
        ]
      }
    ];

    const subscriptionPlans = [
      {
        name: "Classic Bloom",
        tagline: "Essential Freshness",
        price: "₹1,499",
        period: "per month",
        features: ["4 Deliveries per month", "Standard Seasonal Mix", "Recycled Craft Wrapping", "Free Delivery in Bhiwadi", "Basic Vase Included"],
        popular: false,
        icon: "flower-2"
      },
      {
        name: "Premium Selection",
        tagline: "Floral Artistry",
        price: "₹2,999",
        period: "per month",
        features: ["8 Deliveries per month", "Premium Exotic Blooms", "Designer Glass Vases", "Custom Scent Profiles", "Priority Support", "Special Birthday Bouquet"],
        popular: true,
        icon: "sparkles"
      },
      {
        name: "Goddess Luxury",
        tagline: "Ultimate Elegance",
        price: "₹5,499",
        period: "per month",
        features: ["Daily/Bi-weekly Delivery", "Rare Imported Stems", "Hand-painted Ceramic Vases", "Floral Concierge Access", "Full Event Consultations", "Luxury Gift Box Add-ons"],
        popular: false,
        icon: "crown"
      }
    ];

    function renderNavigation() {
      const mobileItemsContainer = document.getElementById('mobile-nav-items');
      if (!mobileItemsContainer) return;
      const activeId = 'services';
      mobileItemsContainer.innerHTML = navItems.map(item => {
        const isActive = item.id === activeId;
        return `
          <a href="${item.href}" class="flex flex-col items-center flex-1 gap-1">
            <div class="nav-circle-btn ${isActive ? 'active' : ''}">
              <i class="fa-solid ${item.icon} text-sm"></i>
              ${item.badge ? `<span class="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">${item.badge}</span>` : ''}
            </div>
            <span class="text-[9px] font-bold text-gray-800">${item.label}</span>
          </a>`;
      }).join('');
    }

    function renderServices() {
      const container = document.getElementById('services-container');
      if(!container) return;
      container.innerHTML = servicesData.map((service, index) => {
        const isReversed = index % 2 !== 0;
        return `
          <div class="scroll-anim opacity-0 translate-y-12 flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 group">
            <div class="w-full md:w-1/2 flex flex-col gap-4 animate-float" style="animation-delay: ${index * 0.3}s">
              <!-- Main Video -->
              <div class="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100">
                <video autoplay loop muted playsinline class="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700">
                  <source src="${service.videoUrl}" type="video/mp4">
                </video>
              </div>
              <!-- Secondary Videos -->
              <div class="grid grid-cols-2 gap-4">
                ${service.secondaryVideos.map(vid => `
                  <div class="h-28 md:h-40 rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                    <video autoplay loop muted playsinline class="w-full h-full object-cover hover:scale-110 transition-transform duration-700">
                      <source src="${vid}" type="video/mp4">
                    </video>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="w-full md:w-1/2 text-center ${isReversed ? 'md:text-right' : 'md:text-left'} space-y-6">
              <span class="text-[#e870a3] font-bold text-xs tracking-widest uppercase bg-pink-50 px-4 py-1.5 rounded-full inline-block">Service 0${index+1}</span>
              <h3 class="text-3xl md:text-5xl font-serif font-bold text-gray-800 leading-tight">${service.title}</h3>
              <p class="text-gray-500 text-base md:text-lg leading-relaxed">${service.description}</p>
              <button class="font-bold text-[#818d7f] hover:text-[#e870a3] transition-colors flex items-center gap-2 mx-auto ${isReversed ? 'md:mr-0' : 'md:ml-0'}">
                Explore Detailed Portfolio <i data-lucide="chevron-right" class="w-5 h-5"></i>
              </button>
            </div>
          </div>`;
      }).join('');
    }

    function renderSubscriptions() {
      const container = document.getElementById('subscriptions-container');
      if(!container) return;
      
      container.innerHTML = subscriptionPlans.map((plan) => `
        <div class="plan-card bg-white rounded-[3rem] p-8 md:p-10 shadow-xl border-2 ${plan.popular ? 'border-[#818d7f] bg-gradient-to-b from-[#818d7f]/5 to-white relative md:scale-105 z-10' : 'border-transparent'} flex flex-col group h-full">
          ${plan.popular ? '<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#818d7f] text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">Most Popular</div>' : ''}
          
          <div class="mb-10">
            <div class="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#818d7f]/10 transition-colors">
              <i data-lucide="${plan.icon}" class="w-6 h-6 text-[#818d7f]"></i>
            </div>
            <h4 class="text-2xl font-serif font-bold mb-1 text-gray-900">${plan.name}</h4>
            <p class="text-xs font-bold text-[#e870a3] uppercase tracking-widest mb-6">${plan.tagline}</p>
            <div class="flex items-baseline gap-2">
              <span class="text-4xl font-bold text-gray-900">${plan.price}</span>
              <span class="text-gray-400 text-sm font-medium">${plan.period}</span>
            </div>
          </div>
          
          <ul class="space-y-4 mb-12 flex-grow">
            ${plan.features.map(f => `
              <li class="flex items-start gap-3 text-gray-600 text-sm font-medium">
                <div class="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <i data-lucide="check" class="w-3 h-3 text-green-600"></i>
                </div>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
          
          <button class="w-full py-4 rounded-2xl font-bold text-base transition-all transform active:scale-95 ${plan.popular ? 'bg-[#818d7f] text-white hover:bg-[#6b7766] shadow-lg shadow-[#818d7f]/20' : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-100'}">
            Join This Plan
          </button>
        </div>
      `).join('');
      
      if (window.lucide) lucide.createIcons();
    }

    function setupScrollObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.querySelectorAll('video').forEach(v => v.play().catch(() => {}));
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.scroll-anim').forEach(el => observer.observe(el));
    }

    document.addEventListener("DOMContentLoaded", () => {
      renderNavigation(); 
      renderServices(); 
      renderSubscriptions();
      setupScrollObserver();
      if (window.lucide) lucide.createIcons();
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