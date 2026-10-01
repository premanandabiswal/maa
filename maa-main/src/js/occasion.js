       tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                    colors: {
                        brand: {
                            deepGreen: 'var(--brand-deep)',
                            primary: 'var(--brand-primary)',
                            light: 'var(--brand-light)',
                            price: '#f9bc60',
                            gold: '#C5A059',
                            espresso: '#1A120B',
                            obsidian: '#0A0B0A',
                            skin: '#b37a4c',
                            skinLight: '#d29b6f'
                        }
                    },
                    keyframes: {
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(40px) scale(0.9)' },
                            '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                        },
                        popIn: {
                            '0%': { opacity: '0', transform: 'scale(0.9)' },
                            '100%': { opacity: '1', transform: 'scale(1)' },
                        },
                        trackingExpand: {
                            '0%': { letterSpacing: '-0.1em', opacity: '0', filter: 'blur(10px)' },
                            '100%': { letterSpacing: '0.05em', opacity: '1', filter: 'blur(0)' }
                        },
                        shutterIn: {
                            '0%': { clipPath: 'circle(0% at 50% 50%)' },
                            '100%': { clipPath: 'circle(150% at 50% 50%)' }
                        }
                    },
                    animation: {
                        fadeInUp: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        popIn: 'popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
                        trackingExpand: 'trackingExpand 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
                        shutterIn: 'shutterIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                    }
                }
            }
        } 
        let currentViewDate = new Date();

        const occasions = [
            // JANUARY
            { name: "New Year's Day", date: "2026-01-01", status: "Festival" },
            { name: "Guru Gobind Singh Jayanti", date: "2026-01-06", status: "Festival" },
            { name: "Lohri", date: "2026-01-13", status: "Festival" },
            { name: "Makar Sankranti / Pongal", date: "2026-01-14", status: "Festival" },
            { name: "Republic Day", date: "2026-01-26", status: "National" },
            
            // FEBRUARY
            { name: "Vasant Panchami", date: "2026-02-01", status: "Festival" },
            { name: "Valentine's Day", date: "2026-02-14", status: "Global", gift: "bouquet" },
            { name: "Maha Shivratri", date: "2026-02-15", status: "Festival" },
            { name: "Guru Ravidas Jayanti", date: "2026-02-24", status: "Festival" },
            
            // MARCH
            { name: "Holi", date: "2026-03-03", status: "Festival" },
            { name: "International Women's Day", date: "2026-03-08", status: "Global", gift: "box" },
            { name: "Ugadi / Gudi Padwa", date: "2026-03-19", status: "Festival" },
            { name: "Ram Navami", date: "2026-03-27", status: "Festival" },
            { name: "Mahavir Jayanti", date: "2026-03-31", status: "Festival" },
            
            // APRIL
            { name: "Good Friday", date: "2026-04-03", status: "Festival" },
            { name: "Easter Sunday", date: "2026-04-05", status: "Festival" },
            { name: "Baisakhi / Vishu", date: "2026-04-14", status: "Festival" },
            { name: "Ambedkar Jayanti", date: "2026-04-14", status: "National" },
            { name: "Eid-ul-Fitr", date: "2026-04-20", status: "Festival" },
            
            // MAY
            { name: "Labour Day", date: "2026-05-01", status: "National" },
            { name: "Buddha Purnima", date: "2026-05-01", status: "Festival" },
            { name: "Mother's Day", date: "2026-05-10", status: "Global", gift: "bouquet" },
            
            // JUNE
            { name: "Father's Day", date: "2026-06-21", status: "Global", gift: "box" },
            { name: "Eid-ul-Adha (Bakrid)", date: "2026-06-27", status: "Festival" },
            
            // JULY
            { name: "Muharram", date: "2026-07-26", status: "Festival" },
            { name: "Guru Purnima", date: "2026-07-29", status: "Festival" },
            
            // AUGUST
            { name: "Independence Day", date: "2026-08-15", status: "National" },
            { name: "Raksha Bandhan", date: "2026-08-28", status: "Festival" },
            
            // SEPTEMBER
            { name: "Janmashtami", date: "2026-09-04", status: "Festival" },
            { name: "Teacher's Day", date: "2026-09-05", status: "National", gift: "bouquet" },
            { name: "Ganesh Chaturthi", date: "2026-09-14", status: "Festival" },
            { name: "Eid-e-Milad", date: "2026-09-25", status: "Festival" },
            
            // OCTOBER
            { name: "Gandhi Jayanti", date: "2026-10-02", status: "National" },
            { name: "Maha Navami", date: "2026-10-19", status: "Festival" },
            { name: "Dussehra", date: "2026-10-20", status: "Festival" },
            { name: "Karwa Chauth", date: "2026-10-30", status: "Festival" },
            
            // NOVEMBER
            { name: "Diwali", date: "2026-11-08", status: "Festival" },
            { name: "Govardhan Puja", date: "2026-11-09", status: "Festival" },
            { name: "Bhai Dooj", date: "2026-11-10", status: "Festival" },
            { name: "Guru Nanak Jayanti", date: "2026-11-24", status: "Festival" },
            
            // DECEMBER
            { name: "Christmas Eve", date: "2026-12-24", status: "Global" },
            { name: "Christmas", date: "2026-12-25", status: "Festival", gift: "box" },
            { name: "New Year's Eve", date: "2026-12-31", status: "Global" }
        ];

        const catalogData = {
            wedding: [
                {
                    id: 'stage-setup',
                    title: 'Premium Wedding Stage & Floral Setup',
                    price: '25,000',
                    originalPrice: '35,000',
                    discount: '28% off',
                    rating: '4.8',
                    reviews: '1,245 Ratings & 320 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.31 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Transform your special day into a magical experience with our Premium Wedding Stage and Floral Decoration setup. Featuring a stunning arrangement of imported orchids, fresh red roses, white lilies, and elegant jasmine garlands. The package includes stage backdrops, luxurious drapes, warm ambiance lighting, and front stage floral borders. Perfect for grand weddings, receptions, and engagements.',
                    highlights: [
                        'Fresh, premium quality flowers',
                        'Customizable color themes',
                        'Includes stage backdrop & lighting',
                        'Expert florists for on-time setup'
                    ],
                    offer: 'Setup and delivery free within Bhiwadi region.'
                },
                {
                    id: 'haldi-decor',
                    title: 'Haldi/Mehendi Marigold Decor',
                    price: '8,500',
                    originalPrice: '12,000',
                    discount: '29% off',
                    rating: '4.9',
                    reviews: '890 Ratings & 150 Reviews',
                    mainImage: '../assets/Wedding-Flower-Decoration.jpg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1605649487212-4dcb1b6b1836?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1583089892943-e02e52f17804?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1563806140502-fb211f4d93ee?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Brighten up your pre-wedding festivities with our authentic Marigold Decor setup. Featuring lush cascades of orange and yellow marigolds, traditional props, and comfortable seating arrangements perfect for Haldi and Mehendi ceremonies.',
                    highlights: [
                        '100% fresh Desi Marigolds',
                        'Includes traditional brass props & urlis',
                        'Photo-booth backdrop included',
                        'Quick 3-hour setup time'
                    ],
                    offer: 'Complimentary floral jewelry set for the bride.'
                },
                {
                    id: 'red-varmala',
                    title: 'Premium Red Rose Varmala',
                    price: '2,000',
                    originalPrice: '2,800',
                    discount: '28% off',
                    rating: '5.0',
                    reviews: '2,100 Ratings & 840 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.03 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1548690623-e18e388d1d8a?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1582791695736-22a00c735d46?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Exchange vows with elegance using our Premium Red Rose Varmala. Handcrafted using strictly selected, fully bloomed deep red roses, interwoven with delicate baby\'s breath and gold tissue ribbons. Lightweight and comfortable to wear.',
                    highlights: [
                        'Export-quality large red roses',
                        'Lightweight stringing technique',
                        'Does not stain clothing',
                        'Includes a pair (2 Varmalas)'
                    ],
                    offer: 'Free customized initials tag attached.'
                },
                {
                    id: 'car-decor',
                    title: 'Wedding Car Floral Decoration',
                    price: '3,500',
                    originalPrice: '5,000',
                    discount: '30% off',
                    rating: '4.7',
                    reviews: '640 Ratings & 112 Reviews',
                    mainImage: '../assets/car-decoration-with-flowers-service-250x250.webp',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Make a grand exit with our bespoke Wedding Car Floral Decoration. We use scratch-free suction technology to attach beautiful arrangements of roses, orchids, and ribbons to the bonnet, doors, and trunk of your getaway vehicle.',
                    highlights: [
                        'Safe for car paint (No tapes used)',
                        'Weather-resistant arrangement',
                        'Custom colors to match theme',
                        'On-location service available'
                    ],
                    offer: '10% off if booked with Stage Setup.'
                },
                {
                    id: 'jasmine-canopy',
                    title: 'Jasmine & Tube Rose Mandap Canopy',
                    price: '15,000',
                    originalPrice: '20,000',
                    discount: '25% off',
                    rating: '4.9',
                    reviews: '412 Ratings & 98 Reviews',
                    mainImage: '../assets/jasmin.jpg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Experience the divine fragrance of our Jasmine and Tube Rose Mandap Canopy. Thousands of hand-strung white fragrant flowers create a breathtaking roof and pillar wrap, providing an ethereal and purely traditional aesthetic for your pheras.',
                    highlights: [
                        'Intense natural fragrance',
                        'Dense floral roofing',
                        'Traditional brass hanging bells included',
                        'Cooling effect for outdoor daytime weddings'
                    ],
                    offer: 'Free Rose petal baskets for guests.'
                },
                {
                         id: 'stage-setup',
                    title: 'Premium Wedding Stage & Floral Setup',
                    price: '25,000',
                    originalPrice: '35,000',
                    discount: '28% off',
                    rating: '4.8',
                    reviews: '1,245 Ratings & 320 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.31 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Transform your special day into a magical experience with our Premium Wedding Stage and Floral Decoration setup. Featuring a stunning arrangement of imported orchids, fresh red roses, white lilies, and elegant jasmine garlands. The package includes stage backdrops, luxurious drapes, warm ambiance lighting, and front stage floral borders. Perfect for grand weddings, receptions, and engagements.',
                    highlights: [
                        'Fresh, premium quality flowers',
                        'Customizable color themes',
                        'Includes stage backdrop & lighting',
                        'Expert florists for on-time setup'
                    ],
                    offer: 'Setup and delivery free within Bhiwadi region.'
                }
            ],
            birthday: [
                {
                    id: 'bday-pastel',
                    title: 'Pastel Balloon & Floral Backdrop',
                    price: '8,500',
                    originalPrice: '12,000',
                    discount: '29% off',
                    rating: '4.9',
                    reviews: '850 Ratings & 120 Reviews',
                    mainImage: '../assets/1643629297_7-transformed.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1530103862676-de8892d2bc27?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'A beautiful blend of premium pastel balloons and fresh floral accents, perfect for birthdays. Includes a ring arch backdrop, cake table decor, and customized neon sign placement.',
                    highlights: [
                        'Imported metallic & pastel balloons',
                        'Fresh floral highlights (Roses/Lilies)',
                        'Includes "Happy Birthday" neon sign rental',
                        '2-hour quick setup'
                    ],
                    offer: 'Complimentary matching floral bouquet.'
                },
                {
                    id: 'bday-pastel',
                    title: 'Pastel Balloon & Floral Backdrop',
                    price: '8,500',
                    originalPrice: '12,000',
                    discount: '29% off',
                    rating: '4.9',
                    reviews: '850 Ratings & 120 Reviews',
                    mainImage: '../assets/61utwDrSbfL._AC_UF1000,1000_QL80_.jpg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1530103862676-de8892d2bc27?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'A beautiful blend of premium pastel balloons and fresh floral accents, perfect for birthdays. Includes a ring arch backdrop, cake table decor, and customized neon sign placement.',
                    highlights: [
                        'Imported metallic & pastel balloons',
                        'Fresh floral highlights (Roses/Lilies)',
                        'Includes "Happy Birthday" neon sign rental',
                        '2-hour quick setup'
                    ],
                    offer: 'Complimentary matching floral bouquet.'
                },
                {
                    id: 'bday-kids',
                    title: 'Kids Jungle Theme Setup',
                    price: '14,000',
                    originalPrice: '18,000',
                    discount: '22% off',
                    rating: '4.8',
                    reviews: '520 Ratings & 89 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.34 PM (2).jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Transform your space into an exciting jungle safari! Complete with animal cutouts, green and gold balloon garlands, artificial vines, and a rustic wooden cake table.',
                    highlights: [
                        'Large animal foil balloons',
                        'Themed photo-booth props',
                        'Customized name bunting',
                        'Safe, non-toxic materials'
                    ],
                    offer: 'Free 20 helium balloons for ceiling decor.'
                },
                {
                    id: 'bday-midnight',
                    title: 'Midnight Surprise Room Setup',
                    price: '6,500',
                    originalPrice: '8,500',
                    discount: '23% off',
                    rating: '4.9',
                    reviews: '310 Ratings & 45 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.33 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'A magical room makeover to surprise your loved ones exactly at midnight. Featuring helium balloons covering the ceiling, fairy lights, rose petals on the bed, and a custom photo string.',
                    highlights: [
                        '50 Helium-filled metallic balloons',
                        'Fresh rose petal bed decoration',
                        'Hanging polaroid photo strings',
                        'Setup completed before 11:30 PM'
                    ],
                    offer: 'Includes a complimentary 500g chocolate cake.'
                },
                {
                    id: 'bday-floral-arch',
                    title: 'Elegant Floral Ring Arch',
                    price: '11,000',
                    originalPrice: '14,500',
                    discount: '24% off',
                    rating: '4.8',
                    reviews: '420 Ratings & 88 Reviews',
                    mainImage: '../assets/711p2lhziIL._AC_UF1000,1000_QL80_.jpg',
                    thumbnails: [
                        '../assets/711p2lhziIL._AC_UF1000,1000_QL80_.jpg'
                    ],
                    description: 'A sophisticated and modern 7-foot circular arch, fully adorned with exotic seasonal flowers and green foliage. Ideal for 18th, 21st, or milestone birthday photoshoots.',
                    highlights: [
                        '7-foot golden metal ring structure',
                        'Exotic lilies, carnations, and orchids',
                        'Includes 2 elegant side floral pillars',
                        'Custom neon age sign (rental)'
                    ],
                    offer: 'Free floor petal scatter for photographs.'
                },
                  {
                    id: 'bday-floral-arch',
                    title: 'Elegant Floral Ring Arch',
                    price: '11,000',
                    originalPrice: '14,500',
                    discount: '24% off',
                    rating: '4.8',
                    reviews: '420 Ratings & 88 Reviews',
                    mainImage: '../assets/610gDqyH6IL._AC_UF1000,1000_QL80_.jpg',
                    thumbnails: [
                        '../assets/610gDqyH6IL._AC_UF1000,1000_QL80_.jpg'
                    ],
                    description: 'A sophisticated and modern 7-foot circular arch, fully adorned with exotic seasonal flowers and green foliage. Ideal for 18th, 21st, or milestone birthday photoshoots.',
                    highlights: [
                        '7-foot golden metal ring structure',
                        'Exotic lilies, carnations, and orchids',
                        'Includes 2 elegant side floral pillars',
                        'Custom neon age sign (rental)'
                    ],
                    offer: 'Free floor petal scatter for photographs.'
                }
            ],
            anniversary: [
                {
                    id: 'anni-romantic',
                    title: 'Romantic Room Floral Decor',
                    price: '5,500',
                    originalPrice: '7,500',
                    discount: '26% off',
                    rating: '5.0',
                    reviews: '1,100 Ratings & 430 Reviews',
                    mainImage: '../assets/20210306_090946.jpg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1583089892943-e02e52f17804?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Surprise your partner with a breathtaking romantic room setup. Features a bed covered in fresh red rose petals, LED fairy lights, balloon bouquets on the ceiling, and a flower path from the door.',
                    highlights: [
                        '1000+ Fresh red rose petals',
                        'Heart-shaped balloon arrangement',
                        'Includes 50 tea-light candles',
                        'Discreet and quick setup'
                    ],
                    offer: 'Free customized anniversary greeting card.'
                },
                {
                    id: 'anni-cabana',
                    title: 'Private Cabana Dinner Setup',
                    price: '14,500',
                    originalPrice: '18,000',
                    discount: '19% off',
                    rating: '4.9',
                    reviews: '280 Ratings & 65 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.36 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Transform your terrace or lawn into a romantic dining experience. We build a beautiful white sheer cabana draped with fairy lights, floral vines, and a candlelit dinner table setup for two.',
                    highlights: [
                        'White sheer fabric cabana',
                        'Jasmine and Rose floral strings',
                        'Premium candlelit table arrangement',
                        'Ideal for home terraces or gardens'
                    ],
                    offer: 'Complimentary bottle of sparkling fruit wine.'
                },
                {
                    id: 'anni-golden',
                    title: 'Golden Jubilee Banquet Decor',
                    price: '28,000',
                    originalPrice: '38,000',
                    discount: '26% off',
                    rating: '5.0',
                    reviews: '150 Ratings & 30 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.32 PM (1).jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Celebrate 50 years of togetherness in grand style. Our Golden Jubilee package features a premium stage backdrop with white and gold accents, vintage floral arrangements, and personalized signage.',
                    highlights: [
                        'Grand 12x8 ft stage setup',
                        'Premium white orchids & yellow roses',
                        'Golden vintage props & lighting',
                        'Custom "50 Years" floral board'
                    ],
                    offer: 'Free customized welcome entrance board.'
                },
                {
                    id: 'anni-car-boot',
                    title: 'Car Boot Surprise Decor',
                    price: '4,500',
                    originalPrice: '6,000',
                    discount: '25% off',
                    rating: '4.8',
                    reviews: '540 Ratings & 120 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.48 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'A trendy and exciting way to surprise your partner! We decorate the boot of your car with "Marry Me Again" or "Happy Anniversary" neon signs, surrounded by dense floral beds, balloons, and fairy lights.',
                    highlights: [
                        'Dense red rose & baby\'s breath bed',
                        'Battery-operated fairy lights',
                        '"Happy Anniversary" bunting',
                        'Setup done in 45 minutes anywhere'
                    ],
                    offer: 'Includes a small hidden gift box for a ring/jewelry.'
                },
                  {
                    id: 'anni-cabana',
                    title: 'Private Cabana Dinner Setup',
                    price: '14,500',
                    originalPrice: '18,000',
                    discount: '19% off',
                    rating: '4.9',
                    reviews: '280 Ratings & 65 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.34 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Transform your terrace or lawn into a romantic dining experience. We build a beautiful white sheer cabana draped with fairy lights, floral vines, and a candlelit dinner table setup for two.',
                    highlights: [
                        'White sheer fabric cabana',
                        'Jasmine and Rose floral strings',
                        'Premium candlelit table arrangement',
                        'Ideal for home terraces or gardens'
                    ],
                    offer: 'Complimentary bottle of sparkling fruit wine.'
                },
                  {
                    id: 'anni-cabana',
                    title: 'Private Cabana Dinner Setup',
                    price: '14,500',
                    originalPrice: '18,000',
                    discount: '19% off',
                    rating: '4.9',
                    reviews: '280 Ratings & 65 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.34 PM (1).jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Transform your terrace or lawn into a romantic dining experience. We build a beautiful white sheer cabana draped with fairy lights, floral vines, and a candlelit dinner table setup for two.',
                    highlights: [
                        'White sheer fabric cabana',
                        'Jasmine and Rose floral strings',
                        'Premium candlelit table arrangement',
                        'Ideal for home terraces or gardens'
                    ],
                    offer: 'Complimentary bottle of sparkling fruit wine.'
                }
            ],
            baby: [
                {
                    id: 'baby-shower',
                    title: 'Premium Baby Shower Pastel Setup',
                    price: '10,500',
                    originalPrice: '14,000',
                    discount: '25% off',
                    rating: '4.9',
                    reviews: '640 Ratings & 95 Reviews',
                    mainImage: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Celebrate the upcoming arrival with our elegant pastel baby shower setup. Includes a customized ring arch, "Oh Baby" neon sign, soft pastel balloons, and delicate floral highlights.',
                    highlights: [
                        'Customizable colors (Pink/Blue/Neutral)',
                        '"Oh Baby" neon sign rental included',
                        'Cake table decoration',
                        'Quick 2-hour setup'
                    ],
                    offer: 'Complimentary mom-to-be floral sash.'
                },
                {
                    id: 'baby-naamkaran',
                    title: 'Naamkaran Traditional Decor',
                    price: '12,000',
                    originalPrice: '16,000',
                    discount: '25% off',
                    rating: '4.8',
                    reviews: '210 Ratings & 40 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.08.48 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'A beautiful, purely traditional floral setup for your baby’s naming ceremony. Featuring a beautifully decorated swing (Palna) wrapped in marigolds and jasmine, along with a floral backdrop.',
                    highlights: [
                        'Decorated wooden baby swing (Palna)',
                        'Fragrant Jasmine and Marigold strings',
                        'Traditional brass props and urlis',
                        'Auspicious entrance Toran included'
                    ],
                    offer: 'Free fresh flower rangoli pattern.'
                },
                {
                    id: 'baby-welcome',
                    title: 'Welcome Home Baby Setup',
                    price: '6,500',
                    originalPrice: '8,500',
                    discount: '23% off',
                    rating: '5.0',
                    reviews: '480 Ratings & 110 Reviews',
                    mainImage: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'A warm and joyful welcome for the new mother and baby. We decorate the bedroom and entrance with soft blue or pink balloons, a "Welcome Home" foil banner, and a beautiful pathway of flower petals.',
                    highlights: [
                        'Soft, non-toxic premium balloons',
                        'Welcome Home banner & foil baby balloons',
                        'Flower petal pathway for the mother',
                        'Zero-noise, peaceful setup process'
                    ],
                    offer: 'Includes a complimentary bouquet for the new mother.'
                },
                {
                    id: 'baby-gender-reveal',
                    title: 'Gender Reveal Mystery Box Decor',
                    price: '8,500',
                    originalPrice: '11,000',
                    discount: '22% off',
                    rating: '4.7',
                    reviews: '190 Ratings & 35 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.08.50 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1530103862676-de8892f07b14?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Make the big reveal unforgettable! This package includes a half-pink, half-blue balloon garland backdrop, question mark props, and a giant customized mystery box filled with helium balloons.',
                    highlights: [
                        'Giant mystery box with helium balloons',
                        'Pink and Blue aesthetic split decor',
                        'Boy or Girl prop cutouts',
                        'Confetti poppers included'
                    ],
                    offer: 'Free custom "He or She" cake topper.'
                },
                {
                    id: 'baby-naamkaran',
                    title: 'Naamkaran Traditional Decor',
                    price: '12,000',
                    originalPrice: '16,000',
                    discount: '25% off',
                    rating: '4.8',
                    reviews: '210 Ratings & 40 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.45 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'A beautiful, purely traditional floral setup for your baby’s naming ceremony. Featuring a beautifully decorated swing (Palna) wrapped in marigolds and jasmine, along with a floral backdrop.',
                    highlights: [
                        'Decorated wooden baby swing (Palna)',
                        'Fragrant Jasmine and Marigold strings',
                        'Traditional brass props and urlis',
                        'Auspicious entrance Toran included'
                    ],
                    offer: 'Free fresh flower rangoli pattern.'
                },
                {
                    id: 'baby-naamkaran',
                    title: 'Naamkaran Traditional Decor',
                    price: '12,000',
                    originalPrice: '16,000',
                    discount: '25% off',
                    rating: '4.8',
                    reviews: '210 Ratings & 40 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.12.59 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'A beautiful, purely traditional floral setup for your baby’s naming ceremony. Featuring a beautifully decorated swing (Palna) wrapped in marigolds and jasmine, along with a floral backdrop.',
                    highlights: [
                        'Decorated wooden baby swing (Palna)',
                        'Fragrant Jasmine and Marigold strings',
                        'Traditional brass props and urlis',
                        'Auspicious entrance Toran included'
                    ],
                    offer: 'Free fresh flower rangoli pattern.'
                }
            ],
            festivals: [
                {
                    id: 'diwali-decor',
                    title: 'Festive Diwali Floral & Light Decor',
                    price: '12,000',
                    originalPrice: '16,000',
                    discount: '25% off',
                    rating: '5.0',
                    reviews: '1,200 Ratings & 450 Reviews',
                    mainImage:'../assets/WhatsApp Image 2026-09-29 at 6.13.00 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1511268559489-34b624eaf8c2?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Brighten your home for the festive season! This package features extensive marigold stringing for balconies and entrances, traditional brass urlis with floating candles, and LED fairy lights.',
                    highlights: [
                        '100% fresh Desi Marigolds',
                        'Balcony & Entrance decoration',
                        'Includes 100 LED fairy light strings',
                        'Safe, damage-free hanging'
                    ],
                    offer: 'Free floral rangoli at the main entrance.'
                },
                {
                    id: 'navratri-pandal',
                    title: 'Grand Navratri / Durga Puja Setup',
                    price: '22,000',
                    originalPrice: '30,000',
                    discount: '26% off',
                    rating: '5.0',
                    reviews: '890 Ratings & 210 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.49 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1542384701-c0e46e0eda04?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1605649487212-4dcb1b6b1836?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'A spectacular floral arrangement dedicated to Maa Durga. Features a grand backdrop of yellow and orange marigolds interwoven with fresh mango leaves, hanging temple bells, and a dedicated platform for the deity.',
                    highlights: [
                        'Premium export-quality marigolds',
                        'Includes traditional brass oil lamps',
                        'Customizable platform size for idol',
                        'Auspicious red & yellow drapery'
                    ],
                    offer: 'Complimentary floral garlands for 9 days.'
                },
                {
                    id: 'ganesh-mandap',
                    title: 'Ganesh Chaturthi Eco-Mandap',
                    price: '11,500',
                    originalPrice: '15,000',
                    discount: '23% off',
                    rating: '4.8',
                    reviews: '420 Ratings & 95 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.49 PM (1).jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'An eco-friendly, fully floral mandap designed specifically for bringing Bappa home. Crafted with banana leaves, orchids, red roses, and a beautiful suspended floral ceiling.',
                    highlights: [
                        '100% biodegradable materials',
                        'Includes Modak & fruit offering baskets',
                        'Vibrant red & green color theme',
                        'Sturdy bamboo framework'
                    ],
                    offer: 'Free home delivery and installation.'
                },
                {
                    id: 'holi-decor',
                    title: 'Holi Floral & Colors Party Setup',
                    price: '9,500',
                    originalPrice: '13,000',
                    discount: '26% off',
                    rating: '4.9',
                    reviews: '315 Ratings & 70 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.47 PM (1).jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1605649487212-4dcb1b6b1836?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Host the perfect Holi party with our Phoolon ki Holi setup! We create a vibrant outdoor space with yellow and orange marigold strings, colorful drapes, and large urlis filled with loose flower petals for playing.',
                    highlights: [
                        '20 kgs of loose assorted flower petals',
                        'Colorful fabric drapery for outdoors',
                        'Large brass/clay urlis for petals',
                        'Water-resistant prop setup'
                    ],
                    offer: 'Includes 5 packets of organic herbal Gulaal.'
                },
                   {
                    id: 'diwali-decor',
                    title: 'Festive Diwali Floral & Light Decor',
                    price: '12,000',
                    originalPrice: '16,000',
                    discount: '25% off',
                    rating: '5.0',
                    reviews: '1,200 Ratings & 450 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.46 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1511268559489-34b624eaf8c2?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Brighten your home for the festive season! This package features extensive marigold stringing for balconies and entrances, traditional brass urlis with floating candles, and LED fairy lights.',
                    highlights: [
                        '100% fresh Desi Marigolds',
                        'Balcony & Entrance decoration',
                        'Includes 100 LED fairy light strings',
                        'Safe, damage-free hanging'
                    ],
                    offer: 'Free floral rangoli at the main entrance.'
                },
                   {
                    id: 'diwali-decor',
                    title: 'Festive Diwali Floral & Light Decor',
                    price: '12,000',
                    originalPrice: '16,000',
                    discount: '25% off',
                    rating: '5.0',
                    reviews: '1,200 Ratings & 450 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.46 PM (2).jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1511268559489-34b624eaf8c2?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Brighten your home for the festive season! This package features extensive marigold stringing for balconies and entrances, traditional brass urlis with floating candles, and LED fairy lights.',
                    highlights: [
                        '100% fresh Desi Marigolds',
                        'Balcony & Entrance decoration',
                        'Includes 100 LED fairy light strings',
                        'Safe, damage-free hanging'
                    ],
                    offer: 'Free floral rangoli at the main entrance.'
                }
            ],
            'new home': [
                {
                    id: 'griha-pravesh',
                    title: 'Griha Pravesh Entrance Decor',
                    price: '6,500',
                    originalPrice: '8,500',
                    discount: '23% off',
                    rating: '4.8',
                    reviews: '340 Ratings & 85 Reviews',
                    mainImage: '../assets/81TEGaV8yqL._AC_UF350,350_QL80_.jpg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1552086745-6c61f233481d?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Welcome positivity into your new home with our traditional Griha Pravesh decoration. Features an auspicious mango leaf and marigold Toran for the main door, and floral embellishments for the home temple.',
                    highlights: [
                        'Traditional Mango leaf & Marigold Toran',
                        'Banana leaf arrangements',
                        'Home temple floral setup',
                        'Auspicious design elements'
                    ],
                    offer: 'Free floating flower Urli bowl setup.'
                },
                {
                    id: 'housewarming-premium',
                    title: 'Premium Housewarming Package',
                    price: '18,500',
                    originalPrice: '25,000',
                    discount: '26% off',
                    rating: '4.9',
                    reviews: '215 Ratings & 45 Reviews',
                    mainImage: '../assets/81FJpUmpUxL._AC_UF350,350_QL50_.jpg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=200',
                        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Make a lasting impression on your guests with our complete new home package. Includes a stunning main door floral arch, staircase railing wraps, elegant living room centerpieces, and a fragrant welcome path.',
                    highlights: [
                        'Full-house floral coverage',
                        'Elegant pastel & white theme',
                        'Includes 5 tabletop arrangements',
                        'Jasmine & Tuberose natural fragrance'
                    ],
                    offer: 'Complimentary silver-plated pooja thali.'
                },
                {
                    id: 'balcony-garden',
                    title: 'New Balcony Green Setup',
                    price: '8,000',
                    originalPrice: '11,000',
                    discount: '27% off',
                    rating: '4.7',
                    reviews: '180 Ratings & 32 Reviews',
                    mainImage: '../assets/51QcteSQEiL._AC_UF350,350_QL80_.jpg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1585320806297-9794b3e4ceae?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Start life in your new home with a breath of fresh air. We transform your empty balcony into a lush mini-garden with potted indoor and outdoor plants, hanging creepers, and subtle fairy lights.',
                    highlights: [
                        'Includes 10 assorted air-purifying plants',
                        'Ceramic and terracotta pots included',
                        'Vertical garden mesh setup',
                        'Low-maintenance plant selection'
                    ],
                    offer: 'First month free plant maintenance guide.'
                },
                {
                    id: 'vastu-pooja',
                    title: 'Vastu Shanti Pooja Setup',
                    price: '10,500',
                    originalPrice: '14,000',
                    discount: '25% off',
                    rating: '5.0',
                    reviews: '110 Ratings & 20 Reviews',
                    mainImage: '../assets/61qCgq2E6PL._AC_UF350,350_QL80_.jpg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Ensure cosmic balance with our dedicated Vastu Shanti Pooja floral arrangement. We prepare a pure, sattvic environment using lotus flowers, tulsi leaves, banana trees, and a traditional Hawan Kund floral border.',
                    highlights: [
                        'Sattvic flower selection (Lotus, Jasmine)',
                        'Hawan Kund floral bordering',
                        'Banana tree trunks for entrance',
                        'Pure and traditional materials'
                    ],
                    offer: 'Free Navagraha floral mandala creation.'
                },
                {
                    id: 'griha-pravesh',
                    title: 'Griha Pravesh Entrance Decor',
                    price: '6,500',
                    originalPrice: '8,500',
                    discount: '23% off',
                    rating: '4.8',
                    reviews: '340 Ratings & 85 Reviews',
                    mainImage: '../assets/81TEGaV8yqL._AC_UF350,350_QL80_.jpg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1552086745-6c61f233481d?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Welcome positivity into your new home with our traditional Griha Pravesh decoration. Features an auspicious mango leaf and marigold Toran for the main door, and floral embellishments for the home temple.',
                    highlights: [
                        'Traditional Mango leaf & Marigold Toran',
                        'Banana leaf arrangements',
                        'Home temple floral setup',
                        'Auspicious design elements'
                    ],
                    offer: 'Free floating flower Urli bowl setup.'
                },
                {
                    id: 'griha-pravesh',
                    title: 'Griha Pravesh Entrance Decor',
                    price: '6,500',
                    originalPrice: '8,500',
                    discount: '23% off',
                    rating: '4.8',
                    reviews: '340 Ratings & 85 Reviews',
                    mainImage: '../assets/81TEGaV8yqL._AC_UF350,350_QL80_.jpg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1552086745-6c61f233481d?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Welcome positivity into your new home with our traditional Griha Pravesh decoration. Features an auspicious mango leaf and marigold Toran for the main door, and floral embellishments for the home temple.',
                    highlights: [
                        'Traditional Mango leaf & Marigold Toran',
                        'Banana leaf arrangements',
                        'Home temple floral setup',
                        'Auspicious design elements'
                    ],
                    offer: 'Free floating flower Urli bowl setup.'
                }
            ],
            puja: [
                {
                    id: 'puja-backdrop',
                    title: 'Premium Puja Floral Backdrop',
                    price: '9,000',
                    originalPrice: '12,500',
                    discount: '28% off',
                    rating: '4.9',
                    reviews: '560 Ratings & 112 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.19 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Elevate your religious ceremonies with a divine floral backdrop. Ideal for Satyanarayan Katha, Ganesh Chaturthi, or Mata ki Chowki. Made with fresh carnations, tuberoses, and marigolds.',
                    highlights: [
                        'Intricate floral web design',
                        'Use of fragrant Tube Roses',
                        'Customizable idol placement area',
                        'Includes traditional brass lamps'
                    ],
                    offer: 'Complimentary fresh flower garland for the deity.'
                },
                {
                    id: 'mata-chowki',
                    title: 'Mata Ki Chowki Darbar Setup',
                    price: '16,500',
                    originalPrice: '22,000',
                    discount: '25% off',
                    rating: '5.0',
                    reviews: '340 Ratings & 85 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.21 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1542384701-c0e46e0eda04?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Create a magnificent "Darbar" for the Goddess. This premium package features a rich red and gold draped backdrop heavily adorned with red roses, orchids, and hanging bells for jagrans and chowkis.',
                    highlights: [
                        'Grand 10x10ft Darbar structure',
                        'Premium red roses and orchids',
                        'Golden royal seating for the deity',
                        'Vibrant lighting included'
                    ],
                    offer: 'Includes a heavy 5-layered rose garland for the Goddess.'
                },
                {
                    id: 'saraswati-puja',
                    title: 'Vasant Panchami Floral Mandap',
                    price: '8,500',
                    originalPrice: '11,500',
                    discount: '26% off',
                    rating: '4.8',
                    reviews: '210 Ratings & 45 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.13.01 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Honor Goddess Saraswati with a beautiful yellow and white themed floral setup. Designed specifically for Vasant Panchami, featuring yellow marigolds, white lilies, and elegant fabric drapes.',
                    highlights: [
                        'Strict yellow and white color code',
                        'Book and instrument decoration included',
                        'Beautiful swan motif floral art',
                        'Clean and pure aesthetic'
                    ],
                    offer: 'Free decorative floral pen/quill offering.'
                },
                {
                    id: 'satyanarayan',
                    title: 'Satyanarayan Katha Floral Setup',
                    price: '7,500',
                    originalPrice: '9,500',
                    discount: '21% off',
                    rating: '4.9',
                    reviews: '450 Ratings & 92 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.13.02 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1511268559489-34b624eaf8c2?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'A serene and simple setup dedicated to Lord Vishnu. Features a four-pillar banana stem mandap covered with fragrant jasmine strings, a small flower backdrop, and a beautifully adorned chowki.',
                    highlights: [
                        '4 Banana stem traditional pillars',
                        'Jasmine and Mango leaf ceiling',
                        'Decorated wooden chowki for the deity',
                        'Quick 1.5 hour setup'
                    ],
                    offer: 'Complimentary Tulsi leaves and loose petals basket.'
                },
                {
                    id: 'puja-backdrop',
                    title: 'Premium Puja Floral Backdrop',
                    price: '9,000',
                    originalPrice: '12,500',
                    discount: '28% off',
                    rating: '4.9',
                    reviews: '560 Ratings & 112 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.19 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Elevate your religious ceremonies with a divine floral backdrop. Ideal for Satyanarayan Katha, Ganesh Chaturthi, or Mata ki Chowki. Made with fresh carnations, tuberoses, and marigolds.',
                    highlights: [
                        'Intricate floral web design',
                        'Use of fragrant Tube Roses',
                        'Customizable idol placement area',
                        'Includes traditional brass lamps'
                    ],
                    offer: 'Complimentary fresh flower garland for the deity.'
                },
                {
                    id: 'puja-backdrop',
                    title: 'Premium Puja Floral Backdrop',
                    price: '9,000',
                    originalPrice: '12,500',
                    discount: '28% off',
                    rating: '4.9',
                    reviews: '560 Ratings & 112 Reviews',
                    mainImage: '../assets/WhatsApp Image 2026-09-29 at 6.09.19 PM.jpeg',
                    thumbnails: [
                        'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&q=80&w=200'
                    ],
                    description: 'Elevate your religious ceremonies with a divine floral backdrop. Ideal for Satyanarayan Katha, Ganesh Chaturthi, or Mata ki Chowki. Made with fresh carnations, tuberoses, and marigolds.',
                    highlights: [
                        'Intricate floral web design',
                        'Use of fragrant Tube Roses',
                        'Customizable idol placement area',
                        'Includes traditional brass lamps'
                    ],
                    offer: 'Complimentary fresh flower garland for the deity.'
                }
            ]
        };

        const categories = [
            { id: 'wedding', name: 'Wedding', icon: 'fa-ring', img: '../assets/wedding-flower-decor.webp', theme: { bg: '#fffaf5', primary: '#b37a4c', deep: '#5d3540' }, p: 'heart', o: 'fa-ring' },
            { id: 'birthday', name: 'Birthday', icon: 'fa-cake-candles', img: '../assets/1704889081_webp_large.webp', theme: { bg: '#f0f9ff', primary: '#3b82f6', deep: '#1e3a8a' }, p: 'star', o: 'fa-cake-candles' },
            { id: 'anniversary', name: 'Anniversary', icon: 'fa-heart', img: '../assets/Wedding-decorators-1.jpeg', theme: { bg: '#fff1f2', primary: '#e11d48', deep: '#881337' }, p: 'heart', o: 'fa-wine-glass' },
            { id: 'baby', name: 'Baby', icon: 'fa-baby-carriage', img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=1200', theme: { bg: '#fdf2f8', primary: '#ec4899', deep: '#831843' }, p: 'cloud', o: 'fa-baby-carriage' },
            { id: 'festivals', name: 'Festivals', icon: 'fa-fire', img: '../assets/8f023f81-e0ee-4e98-a5ef-19af39564e0e.jpg', theme: { bg: '#fffbeb', primary: '#f59e0b', deep: '#78350f' }, p: 'sun', o: 'fa-om' },
            { id: 'new home', name: 'New Home', icon: 'fa-house-chimney', img: '../assets/81FJpUmpUxL._AC_UF350,350_QL50_.jpg', theme: { bg: '#fefce8', primary: '#ca8a04', deep: '#422006' }, p: 'key', o: 'fa-house' },
            { id: 'puja', name: 'Puja', icon: 'fa-heart-pulse', img: '../assets/WhatsApp Image 2026-09-29 at 6.09.19 PM.jpeg', theme: { bg: '#fff1f2', primary: '#f43f5e', deep: '#4c0519' }, p: 'heart', o: 'fa-heart-pulse' }
        ];

        function renderCalendar() {
            const root = document.getElementById('calendar-root');
            if(!root) return;
            const year = currentViewDate.getFullYear(), month = currentViewDate.getMonth(), today = new Date();
            const first = new Date(year, month, 1).getDay(), days = new Date(year, month + 1, 0).getDate();
            
            // Monthly Events List logic
            const currentMonthStr = `${year}-${String(month+1).padStart(2, '0')}`;
            const monthEvents = occasions.filter(o => o.date.startsWith(currentMonthStr));

            let gridHTML = '';
            for(let i=0; i<first; i++) gridHTML += '<div></div>';
            for(let d=1; d<=days; d++) {
                const dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                const eventsForDay = occasions.filter(o => o.date === dateStr);
                const hasEvent = eventsForDay.length > 0;
                const isT = today.getDate()===d && today.getMonth()===month && today.getFullYear()===year;
                let cls = "py-3 md:py-6 text-xs md:text-3xl font-black rounded-xl md:rounded-[32px] relative transition-all cursor-pointer flex flex-col items-center justify-center ";
                cls += isT ? "bg-brand-primary text-white shadow-xl scale-105 z-10" : (hasEvent ? "text-brand-primary bg-brand-primary/10 border border-brand-primary/30" : "text-gray-800 hover:bg-white");

                let dot = '';
                if(hasEvent && !isT) {
                    dot = `<span class="absolute bottom-1 md:bottom-3 w-1.5 md:w-2.5 h-1.5 md:h-2.5 bg-brand-primary rounded-full animate-pulse" title="${eventsForDay.map(ev=>ev.name).join(', ')}"></span>`;
                }

                let badgeHTML = '';
                if(hasEvent) {
                    const firstEv = eventsForDay[0];
                    const statusLabel = firstEv.status ? `<span class="hidden md:inline-block px-2 py-0.5 rounded bg-brand-primary/20 text-[8px] md:text-xs font-black uppercase tracking-tighter">${firstEv.status}</span>` : '';
                    let giftIcon = '';
                    if(firstEv.gift && firstEv.gift !== 'none') {
                        const icon = firstEv.gift === 'bouquet' ? 'fa-seedling' : (firstEv.gift === 'box' ? 'fa-gift' : 'fa-ticket-simple');
                        giftIcon = `<i class="fa-solid ${icon} text-[8px] md:text-xs text-brand-primary md:mt-1"></i>`;
                    }
                    badgeHTML = `<div class="mt-1 flex flex-col items-center gap-1">${statusLabel}${giftIcon}</div>`;
                }

                gridHTML += `<div class="${cls}"><span>${d}</span>${dot}${badgeHTML}</div>`;
            }

            // Events List HTML
            let listHTML = '';
            if(monthEvents.length > 0) {
                listHTML = `
                    <div class="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
                        <h5 class="text-xs md:text-lg font-black uppercase tracking-[0.2em] text-gray-400 mb-4 md:mb-6 flex items-center gap-3">
                            Upcoming in ${currentViewDate.toLocaleDateString('en-GB', { month: 'long' })}
                            <div class="h-px bg-gray-200 flex-grow"></div>
                        </h5>
                        <div class="space-y-3 md:space-y-4">
                            ${monthEvents.sort((a,b) => new Date(a.date) - new Date(b.date)).map(ev => `
                                <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-6 bg-white/50 rounded-2xl md:rounded-3xl border border-white hover:shadow-xl transition-all group gap-4">
                                    <div class="flex items-center gap-3 md:gap-6">
                                        <div class="flex flex-col items-center justify-center bg-brand-primary text-white w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-2 rounded-xl md:rounded-2xl shadow-md shrink-0">
                                            <span class="text-[9px] md:text-xs font-black uppercase leading-tight">${new Date(ev.date).toLocaleDateString('en-GB', { month: 'short' })}</span>
                                            <span class="text-base md:text-2xl font-black leading-tight">${new Date(ev.date).getDate()}</span>
                                        </div>
                                        <div class="overflow-hidden">
                                            <h6 class="text-gray-900 font-bold text-sm md:text-xl truncate">${ev.name}</h6>
                                            <span class="text-[9px] md:text-xs font-black uppercase text-brand-primary/60 tracking-widest">${ev.status || 'Occasion'}</span>
                                        </div>
                                    </div>
                                    <button onclick="sendGiftAction('${ev.name.replace(/'/g, "\\'")}')" class="bg-brand-primary text-white w-full sm:w-auto px-4 py-2.5 md:px-8 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                                        <i class="fa-solid fa-gift"></i>
                                        Send Gift
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            } else {
                listHTML = `<div class="mt-6 md:mt-8 text-center text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-widest italic py-4">No events recorded for this month</div>`;
            }

            root.innerHTML = `
                <div class="flex justify-between items-center mb-6 md:mb-8 gap-4">
                    <h4 class="font-serif text-xl sm:text-2xl md:text-5xl font-black text-gray-950">${currentViewDate.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</h4>
                    <div class="flex gap-2">
                        <button onclick="prevMonth()" class="w-8 h-8 md:w-16 md:h-16 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white text-gray-600 transition-colors shadow-sm"><i class="fa-solid fa-chevron-left text-xs md:text-base"></i></button>
                        <button onclick="nextMonth()" class="w-8 h-8 md:w-16 md:h-16 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white text-gray-600 transition-colors shadow-sm"><i class="fa-solid fa-chevron-right text-xs md:text-base"></i></button>
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-1 md:gap-2 text-center text-[9px] md:text-[10px] font-black uppercase text-gray-400 mb-2 md:mb-4">
                    <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                </div>
                <div class="grid grid-cols-7 gap-1 md:gap-4 text-center mb-4">${gridHTML}</div>
                ${listHTML}
            `;
        }

        // Action when clicking "Send Gift"
        window.sendGiftAction = (name) => {
            const products = document.getElementById('products-grid');
            if(products) products.scrollIntoView({ behavior: 'smooth' });
        };

        window.addToCart = (name, img, price) => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                cart.push({ name: name, image: img, price: price, qty: 1, subtext: 'Premium quality selection' });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartBadge();
            showToast(`Added ${name} to cart!`);
        };

        window.updateCartBadge = () => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let count = cart.reduce((sum, item) => sum + item.qty, 0);
            
            document.querySelectorAll('.cart-badge-count').forEach(badge => {
                if (count > 0) {
                    badge.textContent = count > 99 ? '99+' : count;
                    badge.classList.remove('hidden');
                    badge.classList.add('flex');
                } else {
                    badge.classList.add('hidden');
                    badge.classList.remove('flex');
                }
            });
        };

        window.showToast = (msg) => {
            let toast = document.getElementById('toast-msg');
            if (!toast) {
                toast = document.createElement('div');
                toast.id = 'toast-msg';
                toast.className = 'fixed top-[15%] md:top-[12%] left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl z-[9999] transition-all duration-300 transform -translate-y-[150%] opacity-0 flex items-center gap-3 text-sm font-bold w-max max-w-[90vw]';
                document.body.appendChild(toast);
            }
            toast.innerHTML = `<i class="fa-solid fa-check-circle text-green-400"></i> ${msg}`;
            
            // Trigger animation
            requestAnimationFrame(() => {
                toast.classList.remove('-translate-y-[150%]', 'opacity-0');
                toast.classList.add('translate-y-0', 'opacity-100');
            });

            setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('-translate-y-[150%]', 'opacity-0');
            }, 2500);
        };

        function createProductCard(product, categoryId, delayIndex) {
            const numericPrice = parseInt(product.price.replace(/,/g, ''), 10);
            return `
                <div class="product-item opacity-0 animate-fadeInUp" style="animation-delay: ${delayIndex * 80}ms">
                    <div class="relative glass-card rounded-2xl md:rounded-[32px] p-2 md:p-3 shadow-md md:shadow-xl hover:shadow-2xl transition-all h-full flex flex-col bg-white/60 group border border-white/50 hover:border-brand-primary/50">
                        <div onclick="openProductModal('${product.id}', '${categoryId}')" class="aspect-[4/5] rounded-xl md:rounded-[24px] overflow-hidden bg-gray-100 relative cursor-pointer">
                            <img src="${product.mainImage}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" onerror="this.src='https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=400'">
                            <div class="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-0.5 md:px-2.5 md:py-1 rounded-md shadow-sm flex items-center gap-1">
                                <i class="fa-solid fa-star text-[#f9bc60] text-[8px] md:text-[10px]"></i>
                                <span class="text-[9px] md:text-xs font-bold text-gray-800">${product.rating}</span>
                            </div>
                        </div>
                        <div class="mt-2 md:mt-3 flex flex-col px-1 flex-grow">
                            <h5 onclick="openProductModal('${product.id}', '${categoryId}')" class="text-[11px] md:text-sm font-bold text-gray-800 line-clamp-2 mb-1.5 leading-tight cursor-pointer hover:text-brand-primary transition-colors">${product.title}</h5>
                            <div class="flex items-center gap-1.5 mb-2">
                                <span class="text-[9px] md:text-[11px] text-gray-400 line-through">₹${product.originalPrice}</span>
                                <span class="text-[9px] md:text-[11px] text-red-600 font-bold bg-red-50 border border-red-100 px-1 rounded">${product.discount}</span>
                            </div>
                            <div class="mt-auto flex justify-between items-center pt-2 border-t border-gray-200/50">
                                <span class="text-sm md:text-xl font-black text-brand-primary tracking-tight">₹${product.price}</span>
                                <button onclick="addToCart('${product.title.replace(/'/g, "\\'")}', '${product.mainImage}', ${numericPrice})" class="bg-brand-primary text-white w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl font-black shadow-md flex items-center justify-center active:scale-90 hover:scale-105 transition-all hover:bg-brand-deepGreen">
                                    <i class="fa-solid fa-plus text-[10px] md:text-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderProducts(categoryId = 'all') {
            const grid = document.getElementById('products-grid');
            grid.innerHTML = '';
            
            const normalizedId = categoryId.toLowerCase();

            if (normalizedId === 'all') {
                let delayCounter = 0;
                const categoryOrder = ['wedding', 'birthday', 'anniversary', 'baby', 'festivals', 'new home', 'puja'];
                
                categoryOrder.forEach(catKey => {
                    const productsToShow = catalogData[catKey] || [];
                    if (productsToShow.length > 0) {
                        const displayCatName = catKey === 'new home' ? 'New Home' : catKey.charAt(0).toUpperCase() + catKey.slice(1);
                        
                        // Add section header for the category
                        grid.insertAdjacentHTML('beforeend', `
                            <div class="col-span-full w-full mt-10 mb-4 flex items-center gap-4 animate-fadeInUp" style="animation-delay: ${delayCounter * 80}ms">
                                <h5 class="text-xl md:text-3xl font-serif font-black text-gray-900">${displayCatName} Packages</h5>
                                <div class="h-px bg-gray-300 flex-grow rounded-full"></div>
                            </div>
                        `);
                        
                        productsToShow.forEach((product) => {
                            grid.insertAdjacentHTML('beforeend', createProductCard(product, catKey, delayCounter));
                            delayCounter++;
                        });
                    }
                });
            } else {
                const productsToShow = catalogData[normalizedId] || [];

                if (productsToShow.length === 0) {
                    grid.innerHTML = '<div class="col-span-full text-center text-gray-500 py-12 font-medium w-full italic text-sm md:text-base">No premium packages available for this category currently.</div>';
                    return;
                }

                productsToShow.forEach((product, i) => {
                    grid.insertAdjacentHTML('beforeend', createProductCard(product, normalizedId, i));
                });
            }
        }

        function openProductModal(productId, categoryId) {
            const item = catalogData[categoryId].find(p => p.id === productId);
            if (!item) return;

            document.getElementById('modal-title').innerText = item.title;
            document.getElementById('modal-price').innerText = `₹${item.price}`;
            document.getElementById('modal-original-price').innerText = `₹${item.originalPrice}`;
            document.getElementById('modal-discount').innerText = item.discount;
            document.getElementById('modal-rating').innerText = item.rating;
            document.getElementById('modal-reviews').innerText = item.reviews;
            document.getElementById('modal-desc').innerText = item.description;
            document.getElementById('modal-offer').innerText = item.offer;
            
            const ul = document.getElementById('modal-highlights');
            ul.innerHTML = item.highlights.map(h => `
                <li class="flex items-start gap-2 text-sm text-gray-600">
                    <div class="mt-1 w-4 h-4 rounded-full bg-brand-light text-brand-deepGreen flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-check text-[8px]"></i>
                    </div>
                    <span>${h}</span>
                </li>
            `).join('');

            const mainImg = document.getElementById('modal-main-img');
            mainImg.src = item.mainImage;

            const thumbContainer = document.getElementById('modal-thumbnails');
            thumbContainer.innerHTML = item.thumbnails.map((img, index) => `
                <div onclick="changeModalImage('${img}', this)" class="w-16 md:w-full shrink-0 aspect-square rounded-xl overflow-hidden border-2 border-transparent cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 ${index === 0 ? 'thumbnail-active' : ''}">
                    <img src="${img}" class="w-full h-full object-cover">
                </div>
            `).join('');

            const numericPrice = parseInt(item.price.replace(/,/g, ''), 10);
            const actionContainer = document.getElementById('modal-action-container');
            actionContainer.innerHTML = `
                <button onclick="addToCart('${item.title.replace(/'/g, "\\'")}', '${item.mainImage}', ${numericPrice}); closeProductModal();" class="w-full bg-[#1a4331] hover:bg-brand-primary text-white text-base md:text-lg font-bold py-3 md:py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                    Add to Cart <i class="fa-solid fa-cart-plus"></i>
                </button>
            `;

            document.getElementById('product-modal').classList.remove('hidden');
        }

        function closeProductModal() {
            document.getElementById('product-modal').classList.add('hidden');
        }

        window.changeModalImage = function(src, element) {
            const mainImg = document.getElementById('modal-main-img');
            mainImg.style.opacity = '0.5';
            setTimeout(() => {
                mainImg.src = src;
                mainImg.style.opacity = '1';
            }, 150);
            document.querySelectorAll('#modal-thumbnails > div').forEach(el => el.classList.remove('thumbnail-active'));
            element.classList.add('thumbnail-active');
        }

        window.showAllCategories = function() {
            // Reset all filters visually
            document.querySelectorAll('.filter-btn').forEach(b => {
                const wrapper = b.querySelector('div.glass-card');
                const pill = b.querySelector('span.filter-pill');
                wrapper.classList.remove('border-brand-primary', 'scale-105', 'md:scale-110');
                wrapper.classList.add('border-transparent');
                pill.classList.remove('bg-brand-primary', 'text-white', 'shadow-md', 'scale-105', 'md:scale-110');
                pill.classList.add('bg-white/60', 'md:bg-white/40', 'text-brand-primary');
            });

            // Update Theme and Title to default
            document.documentElement.style.setProperty('--bg-main', '#f4f5f0');
            document.documentElement.style.setProperty('--brand-primary', '#788A75');
            document.body.style.backgroundColor = '#f4f5f0';
            document.getElementById('category-title').textContent = 'Complete Portfolio';

            // Render all products
            renderProducts('all');
        };

        function initUI() {
            const filterGrid = document.getElementById('category-grid');
            
            categories.forEach(cat => {
                filterGrid.insertAdjacentHTML('beforeend', `
                        <div class="filter-btn flex flex-col items-center group cursor-pointer flex-shrink-0 w-20 md:w-auto" data-filter="${cat.id}">
                            <div class="glass-card w-16 h-16 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-[32px] overflow-hidden shadow-md md:shadow-lg border-[2.5px] md:border-[3px] border-transparent theme-transition group-hover:border-brand-primary group-hover:scale-105">
                                <img src="${cat.img}" onerror="this.src='https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200'" class="w-full h-full object-cover" alt="${cat.name}">
                            </div>
                            <span class="filter-pill bg-white/60 md:bg-white/40 text-brand-primary text-[9px] md:text-xs px-3 md:px-2 py-1 md:py-1 rounded-full mt-2 md:-mt-3 relative z-10 font-bold md:font-black uppercase whitespace-nowrap theme-transition">${cat.name}</span>
                        </div>
                    `);
            });

            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.onclick = () => {
                    const id = btn.dataset.filter;
                    
                    // Reset all filters visually
                    document.querySelectorAll('.filter-btn').forEach(b => {
                        const wrapper = b.querySelector('div.glass-card');
                        const pill = b.querySelector('span.filter-pill');
                        wrapper.classList.remove('border-brand-primary', 'scale-105', 'md:scale-110');
                        wrapper.classList.add('border-transparent');
                        pill.classList.remove('bg-brand-primary', 'text-white', 'shadow-md', 'scale-105', 'md:scale-110');
                        pill.classList.add('bg-white/60', 'md:bg-white/40', 'text-brand-primary');
                    });

                    // Highlight clicked filter
                    const activeWrapper = btn.querySelector('div.glass-card');
                    const activePill = btn.querySelector('span.filter-pill');
                    activeWrapper.classList.remove('border-transparent');
                    activeWrapper.classList.add('border-brand-primary', 'scale-105', 'md:scale-110');
                    activePill.classList.remove('bg-white/60', 'md:bg-white/40', 'text-brand-primary');
                    activePill.classList.add('bg-brand-primary', 'text-white', 'shadow-md', 'scale-105', 'md:scale-110');
                    
                    // Update Theme and Title
                    const catData = categories.find(c => c.id === id);
                    if(catData && catData.theme) {
                        document.documentElement.style.setProperty('--bg-main', catData.theme.bg);
                        document.documentElement.style.setProperty('--brand-primary', catData.theme.primary);
                        document.body.style.backgroundColor = catData.theme.bg;
                        
                        document.getElementById('category-title').textContent = catData.name + ' Portfolio';
                    }

                    // Render updated products
                    renderProducts(id);
                }
            });
            
            renderCalendar(); 
            showAllCategories(); // Default to showing all categories initially
            updateCartBadge(); // Load actual cart count on initial load
        }

        window.prevMonth = () => { currentViewDate.setMonth(currentViewDate.getMonth() - 1); renderCalendar(); };
        window.nextMonth = () => { currentViewDate.setMonth(currentViewDate.getMonth() + 1); renderCalendar(); };
        window.toggleCalendar = () => { 
            const root = document.getElementById('calendar-root'); 
            root.classList.toggle('hidden');
            document.getElementById('calendar-chevron').style.transform = root.classList.contains('hidden') ? 'rotate(-90deg)' : 'rotate(0deg)';
        };
        window.openAddEventModal = () => document.getElementById('add-modal').classList.remove('hidden');
        window.closeAddEventModal = () => document.getElementById('add-modal').classList.add('hidden');
        window.saveEvent = (e) => {
            e.preventDefault();
            const inputDate = document.getElementById('ev-date').value;
            const inputName = document.getElementById('ev-name').value;
            const inputStatus = document.getElementById('ev-status') ? document.getElementById('ev-status').value : '';
            const inputGift = document.getElementById('ev-gift') ? document.getElementById('ev-gift').value : '';
            if(!inputDate || !inputName) return;
            occasions.push({ name: inputName, date: inputDate, status: inputStatus, gift: inputGift });
            renderCalendar();
            closeAddEventModal();
        };

        window.onload = initUI;
        
        // Ensure products and calendar render even if onload didn't fire
        (function(){
            if(typeof renderProducts === 'function') try{ renderProducts('wedding'); }catch(e){}
            if(typeof renderCalendar === 'function') try{ renderCalendar(); }catch(e){}
            if(typeof updateCartBadge === 'function') try{ updateCartBadge(); }catch(e){}
        })();
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