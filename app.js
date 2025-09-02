// CashMart - Luxury E-commerce Application with Games - FIXED VERSION
const CashMartApp = {
    // Application data from provided JSON
    data: {
        brand: {
            name: "CashMart",
            tagline: "Your Digital Wealth Forge"
        },
        
        // Games data from provided JSON - All 50 games
        games: [
            {"name": "colur pin", "image": "https://6jgggrkjibvs0.h5games.usercontent.goog/v/7qaps53r4bt10/marketing/title/colorpin_screen_1920x1080.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/6jgggrkjibvs0#sc=1756113068610587479-2259640"},
            {"name": "carrom clash", "image": "https://carromclash.h5games.usercontent.goog/v/4pmfd00515bbg/images/carromclash-horizontal-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/carromclash#goog_fullscreen_ad"},
            {"name": "4 in row mania", "image": "https://4vt1c4a3eda48.h5games.usercontent.goog/v/73p1lulj7oe3o/marketing/title/4inrowmania-html5_1920x1080.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/4vt1c4a3eda48#goog_fullscreen_ad"},
            {"name": "cannon boll 3d", "image": "https://cannonballs3d.h5games.usercontent.goog/v/004m7ejm69rs0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/cannonballs3d#goog_fullscreen_ad"},
            {"name": "full speed raceing", "image": "https://fullspeedracing.h5games.usercontent.goog/v/4kqu52vbp4da8/images/horizontal480.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/fullspeedracing#sc=1756113068631992177-2259640"},
            {"name": "ludo lagand", "image": "https://ludolegend.h5games.usercontent.goog/v/613uvcaa3eiqo/Marketing/title/ludolegend-html5_480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/ludolegend#goog_fullscreen_ad"},
            {"name": "jewel academy", "image": "https://jewelacademy.h5games.usercontent.goog/v/2krc7uv2m9998/gamesnacks_required_media/JA_horizontal_banner_480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/jewelacademy#goog_fullscreen_ad"},
            {"name": "classic solitire", "image": "https://6uj90l2koon6g.h5games.usercontent.goog/v/2a72i89u7qfe8/images/classic-solitaire-horizontal-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/6uj90l2koon6g#goog_fullscreen_ad"},
            {"name": "mahjong solitaire", "image": "https://4erks8385j9eo.h5games.usercontent.goog/v/1ff4p4m8ilme8/images/mahjong-solitaire-horizontal-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/4erks8385j9eo#goog_fullscreen_ad"},
            {"name": "medieval solitaire", "image": "https://7se96a0j4qu80.h5games.usercontent.goog/v/1iv1d4soimc78/images/ms-horizontal-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/7se96a0j4qu80"},
            {"name": "jewel lagand", "image": "https://jewellegend.h5games.usercontent.goog/v/36cb1hitjsa3o/marketing/title/jewellegend-html5_480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/jewellegend#goog_fullscreen_ad"},
            {"name": "gardan bloom", "image": "https://gardenbloom.h5games.usercontent.goog/v/03uqf2ceev9h8/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/gardenbloom#goog_fullscreen_ad"},
            {"name": "bubble tower", "image": "https://bubbletower.h5games.usercontent.goog/v/7ebcukaef3voo/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/bubbletower"},
            {"name": "fruit cube blast", "image": "https://5pj67mkaqugmo.h5games.usercontent.goog/v/151if1r687t30/image/FruitCubeBlast-med-res-banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/5pj67mkaqugmo#goog_fullscreen_ad"},
            {"name": "jewel blocks", "image": "https://jewelblocks.h5games.usercontent.goog/v/0puee6ie0j880/marketing/title/jewelblocks-html5_480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/jewelblocks#goog_fullscreen_ad"},
            {"name": "tripeaks solitaire", "image": "https://tripeakssolitaire.h5games.usercontent.goog/v/4v3d7g06n6rug/images/tripeaksfarm-horizontal-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/tripeakssolitaire"},
            {"name": "merge melons", "image": "https://mergemelons.h5games.usercontent.goog/v/7526h5to2d1v0/images/horizontalBanners_19201080.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/mergemelons"},
            {"name": "jewel magic", "image": "https://jewelmagic.h5games.usercontent.goog/v/55vd8l21hn1q8/marketing/title/jewelmagic-html5_480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/jewelmagic"},
            {"name": "ONET CONNECT CLASSIC", "image": "https://onetconnectclassic.h5games.usercontent.goog/v/0q8248mt11l3g/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/onetconnectclassic"},
            {"name": "GIN RUMMY", "image": "https://ginrummy.h5games.usercontent.goog/v/1sj72j2nsfin0/images/ginrummy-horizontal-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/ginrummy"},
            {"name": "play spider solitaire", "image": "https://spidersolitaire.h5games.usercontent.goog/v/42fd7cuq80rao/marketing/title/spidersolitaire-html5_480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/spidersolitaire"},
            {"name": "merge defenders", "image": "https://5c1j2nn9b0q4o.h5games.usercontent.goog/v/20drsjkant5s8/images/mergeinvaders-horizontal-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/5c1j2nn9b0q4o#goog_fullscreen_ad"},
            {"name": "element blocks", "image": "https://elementblocks.h5games.usercontent.goog/v/35up5t7ao24i8/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/elementblocks#goog_fullscreen_ad"},
            {"name": "merge heroes", "image": "https://mergeheroes.h5games.usercontent.goog/v/7i7m361ib4vr8/images/mergeheroes-horizontal-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/mergeheroes"},
            {"name": "blockdrop", "image": "https://51vi4vae20f8o.h5games.usercontent.goog/v/66bqinuuh36b8/src/assets/art/store/block-drop-h-480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/51vi4vae20f8o"},
            {"name": "daily sudoku", "image": "https://dailysudoku.h5games.usercontent.goog/v/03446732-f14b-4bcc-9e8b-68fc499a0cec/med_res_banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/dailysudoku#goog_fullscreen_ad"},
            {"name": "tile journey", "image": "https://0i1jh8boqif48.h5games.usercontent.goog/v/1643ot8on0v9g/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/0i1jh8boqif48"},
            {"name": "mahjong 3d", "image": "https://mahjong3d.h5games.usercontent.goog/v/eba0837e-4855-4bb2-b762-5dd6d8982cac/med_res_banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/mahjong3d"},
            {"name": "solitaire classic", "image": "https://solitaireclassic.h5games.usercontent.goog/v/7sbt28mppqim8/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/solitaireclassic"},
            {"name": "tower crash 3d", "image": "https://towercrash3d.h5games.usercontent.goog/v/7c54afc1-3ca4-4121-a52a-9ea74e30f0d7/med_res_banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/towercrash3d"},
            {"name": "candy bubbles", "image": "https://candybubbles.h5games.usercontent.goog/v/370v1t5h5266g/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/candybubbles"},
            {"name": "idle explorers", "image": "https://5ik68qrla8g6g.h5games.usercontent.goog/v/1vuib5ibuof0g/images/ie-horizontal-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/5ik68qrla8g6g"},
            {"name": "tile puzzle", "image": "https://5u9qhnk84v07g.h5games.usercontent.goog/v/2h3elehja73a8/image/tilepuzzle-med-res-banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/5u9qhnk84v07g"},
            {"name": "daily solitaire", "image": "https://dailysolitaire.h5games.usercontent.goog/v/0e4orvvorj2mo/images/daily-solitaire-horizontal-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/dailysolitaire"},
            {"name": "quest bingo", "image": "https://52nk212336l1g.h5games.usercontent.goog/v/0smbj5p2kjk78/assets/store/quest-bingo-h-1080x1920.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/52nk212336l1g"},
            {"name": "letter links", "image": "https://7u583tvdi3f00.h5games.usercontent.goog/v/424maigpuljoo/images/letter-links-horizontal-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/7u583tvdi3f00"},
            {"name": "domino battle", "image": "https://dominobattle.h5games.usercontent.goog/v/45fvkhcnai3s0/marketing/title/dominobattle-html5_480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/dominobattle"},
            {"name": "nature strikes back", "image": "https://79gloe1v4okkg.h5games.usercontent.goog/v/6qlhje6nn2bg0/images/1920_1080_Horizontalbanner.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/79gloe1v4okkg"},
            {"name": "puzzle pieces merge", "image": "https://5burcumauc5p0.h5games.usercontent.goog/v/4k8cb35sbe9fo/image/puzzlepieces-med-res-banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/5burcumauc5p0"},
            {"name": "om nom rum", "image": "https://omnomrun.h5games.usercontent.goog/v/5e921868-7442-48b7-8d4e-1433f4a900b5/med_res_banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/omnomrun"},
            {"name": "dice puzzle", "image": "https://0vfcifju4i900.h5games.usercontent.goog/v/2jg90liogd5f8/image/dicepuzzle-med-res-banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/0vfcifju4i900"},
            {"name": "tiles of egypt", "image": "https://tilesofegypt.h5games.usercontent.goog/v/dd964fa3-8999-4546-a4a0-d55a0cc72248/med_res_banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/tilesofegypt"},
            {"name": "endless siege", "image": "https://endlessseige.h5games.usercontent.goog/v/35nvlvatb9t8g/promo/hbanner-m.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/endlessseige"},
            {"name": "crazy caves", "image": "https://crazycaves.h5games.usercontent.goog/v/24bc2c61-c599-4c5a-9fde-fd3a14fd28a6/med_res_banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/crazycaves"},
            {"name": "jigsaw puzzles hexa", "image": "https://jigsawpuzzleshexa.h5games.usercontent.goog/v/5e9bm1tuf1me0/image/jigsawpuzzleshexa-med-res-banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/jigsawpuzzleshexa"},
            {"name": "mahjong classic", "image": "https://mahjongclassic.h5games.usercontent.goog/v/6tue6un26r7v0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/mahjongclassic"},
            {"name": "smarty bubbles", "image": "https://smartybubbles.h5games.usercontent.goog/v/09fhbor6rfpv0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/smartybubbles"},
            {"name": "giant attack", "image": "https://5699ri02mr840.h5games.usercontent.goog/v/0dov2qbpnafb0/html5games/assets/marketingAssets/banners/480x270.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/5699ri02mr840"},
            {"name": "train 2048", "image": "https://train2048.h5games.usercontent.goog/v/efebc769-0d8d-48f4-b437-af712b013132/med_res_banner.jpg=w256?v=1", "playUrl": "https://gamesnacks.com/games/train2048"},
            {"name": "idle restaurants", "image": "https://idlerestaurants.h5games.usercontent.goog/v/4ut41titp1kvg/images/idle-restaurants-wide-banner-2.png=w256?v=1", "playUrl": "https://gamesnacks.com/games/idlerestaurants"}
        ],

        // Razorpay configuration
        razorpay: {
            keyId: "rzp_test_RBAk5il5u27Agn",
            keySecret: "FLXl97CH5Y0lZvp20UlMDkuG"
        },

        // Product categories from provided data
        productCategories: [
            "YouTube Thumbnail Templates",
            "Adobe Training Courses", 
            "Unity Game Development",
            "Music & SFX Assets",
            "Fonts & Typography",
            "Video Assets",
            "CapCut Resources",
            "2D Animation Courses",
            "Design Templates",
            "Digital Tools"
        ]
    },

    // Global state
    state: {
        currentTheme: 'light',
        currentPage: 'home',
        currentProduct: null,
        cart: [],
        cartTotal: 0,
        introCompleted: false,
        products: [],
        featuredProducts: []
    },

    // Initialize the application
    async init() {
        console.log('🚀 Initializing CashMart Luxury Experience...');
        
        // Load cart from localStorage
        this.loadCart();
        
        this.initializeTheme();
        this.generateProducts();
        this.startCinematicIntro();
        this.setupEventListeners();
        
        // Show main app after intro
        setTimeout(() => this.showMainApp(), 6000);
    },

    // Load cart from localStorage
    loadCart() {
        try {
            const savedCart = localStorage.getItem('cashmart-cart');
            if (savedCart) {
                this.state.cart = JSON.parse(savedCart);
                console.log(`📦 Loaded ${this.state.cart.length} items from cart`);
            }
        } catch (error) {
            console.warn('Could not load cart from localStorage:', error);
            this.state.cart = [];
        }
    },

    // Generate 1000+ products based on categories
    generateProducts() {
        console.log('🏭 Generating 1000+ premium products...');
        
        const icons = ['📱', '🎨', '🎬', '🎵', '📄', '💻', '🎯', '⚡', '🔥', '💎', '🚀', '✨', '🎪', '🌟', '💫', '🎭', '🎨', '📸', '🎥', '🎤'];
        const adjectives = ['Premium', 'Pro', 'Ultimate', 'Advanced', 'Master', 'Elite', 'Luxury', 'Professional', 'Creative', 'Modern'];
        const productTypes = ['Bundle', 'Pack', 'Collection', 'Kit', 'Suite', 'Library', 'Templates', 'Assets', 'Tools', 'Course'];

        this.state.products = [];
        let productId = 1;

        this.data.productCategories.forEach((category, categoryIndex) => {
            const productsPerCategory = categoryIndex === 0 ? 500 : Math.floor(Math.random() * 100) + 50; // YouTube templates get 500+
            
            for (let i = 0; i < productsPerCategory; i++) {
                const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
                const productType = productTypes[Math.floor(Math.random() * productTypes.length)];
                const icon = icons[Math.floor(Math.random() * icons.length)];
                
                const basePrice = Math.floor(Math.random() * 2000) + 99;
                const discount = Math.floor(Math.random() * 70) + 30;
                const currentPrice = Math.floor(basePrice * (100 - discount) / 100);
                
                const product = {
                    id: `product-${productId++}`,
                    name: `${adjective} ${category.split(' ')[0]} ${productType} ${i + 1}`,
                    category: category,
                    icon: icon,
                    price: `₹${currentPrice}`,
                    originalPrice: `₹${basePrice}`,
                    discount: `${discount}%`,
                    priceNum: currentPrice,
                    originalPriceNum: basePrice,
                    downloads: `${Math.floor(Math.random() * 50000) + 1000}+`,
                    rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10,
                    reviews: Math.floor(Math.random() * 5000) + 100,
                    features: [
                        "Premium Quality Assets",
                        "Instant Download",
                        "Commercial License Included",
                        "24/7 Customer Support",
                        "Regular Updates",
                        "Source Files Included"
                    ],
                    description: `Professional ${category.toLowerCase()} designed for creators and businesses. This premium collection includes everything you need to create outstanding content that stands out from the competition.`
                };

                this.state.products.push(product);
            }
        });

        // Select featured products
        this.state.featuredProducts = this.state.products
            .sort(() => Math.random() - 0.5)
            .slice(0, 8);

        console.log(`✅ Generated ${this.state.products.length} products across ${this.data.productCategories.length} categories`);
    },

    // CINEMATIC INTRO ANIMATION
    startCinematicIntro() {
        console.log('🎬 Starting cinematic intro with particle explosion...');
        
        this.createParticleExplosion();
        this.createMorphingShapes();
        this.updateProgressBar();
    },

    createParticleExplosion() {
        const container = document.getElementById('particle-explosion');
        if (!container) return;

        // Create 200 particles for explosive effect
        for (let i = 0; i < 200; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position from center
            const angle = (Math.PI * 2 * i) / 200;
            const radius = Math.random() * 300 + 100;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.setProperty('--particle-x', x + 'px');
            particle.style.setProperty('--particle-y', y + 'px');
            particle.style.animationDelay = (i * 0.01) + 's';
            
            // Random colors
            const colors = ['#d4c29a', '#e6daba', '#b8860b', '#daa520'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            container.appendChild(particle);
        }
    },

    createMorphingShapes() {
        const container = document.getElementById('morphing-shapes');
        if (!container) return;

        // Create 8 morphing shapes
        for (let i = 0; i < 8; i++) {
            const shape = document.createElement('div');
            shape.className = 'morph-shape';
            
            const size = Math.random() * 100 + 50;
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            shape.style.left = Math.random() * 100 + '%';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.animationDelay = (i * 0.5) + 's';
            shape.style.animationDuration = (Math.random() * 3 + 3) + 's';
            
            container.appendChild(shape);
        }
    },

    updateProgressBar() {
        const progressBar = document.getElementById('progress-bar');
        if (!progressBar) return;

        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += 2;
            progressBar.style.width = progress + '%';
            
            if (progress >= 100) {
                clearInterval(progressInterval);
            }
        }, 100);
    },

    showMainApp() {
        const introScreen = document.getElementById('intro-screen');
        const mainApp = document.getElementById('main-app');
        
        if (introScreen && mainApp) {
            // Fade out intro with cinematic effect
            introScreen.style.transition = 'all 2s ease-out';
            introScreen.style.opacity = '0';
            introScreen.style.transform = 'scale(1.1) rotateX(30deg)';
            introScreen.style.filter = 'blur(10px)';
            
            setTimeout(() => {
                introScreen.classList.add('hidden');
                mainApp.classList.remove('hidden');
                mainApp.classList.add('show');
                this.state.introCompleted = true;
                
                // Initialize content after intro
                this.initializeContent();
                
                console.log('✅ CashMart loaded successfully!');
            }, 2000);
        }
    },

    // Initialize all content
    initializeContent() {
        this.createHeroParticles();
        this.populateFeaturedProducts();
        this.populateGamesPreview();
        this.updateCartDisplay();
    },

    // Create hero section particles
    createHeroParticles() {
        const container = document.getElementById('animated-particles');
        if (!container) return;

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'hero-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 12 + 's';
            particle.style.animationDuration = (Math.random() * 8 + 8) + 's';
            container.appendChild(particle);
        }
    },

    // Populate featured products
    populateFeaturedProducts() {
        const grid = document.getElementById('featured-grid');
        if (!grid) return;

        grid.innerHTML = '';
        
        this.state.featuredProducts.forEach((product, index) => {
            const card = this.createProductCard(product, index);
            grid.appendChild(card);
        });

        console.log(`✅ ${this.state.featuredProducts.length} featured products populated`);
    },

    // Populate games preview (first 8 games)
    populateGamesPreview() {
        const grid = document.getElementById('games-preview');
        if (!grid) return;

        grid.innerHTML = '';
        
        const previewGames = this.data.games.slice(0, 8);
        previewGames.forEach((game, index) => {
            const card = this.createGameCard(game, index);
            grid.appendChild(card);
        });

        console.log(`✅ ${previewGames.length} preview games populated`);
    },

    // Populate all games on games page
    populateAllGames() {
        const grid = document.getElementById('games-grid');
        if (!grid) return;

        grid.innerHTML = '';
        
        this.data.games.forEach((game, index) => {
            const card = this.createGameCard(game, index);
            grid.appendChild(card);
        });

        console.log(`✅ All ${this.data.games.length} games populated`);
    },

    // Populate all products on products page
    populateAllProducts() {
        const grid = document.getElementById('products-full-grid');
        if (!grid) return;

        grid.innerHTML = '';
        
        this.state.products.forEach((product, index) => {
            const card = this.createProductCard(product, index);
            card.setAttribute('data-category', product.category);
            grid.appendChild(card);
        });

        console.log(`✅ All ${this.state.products.length} products populated`);
    },

    // Create product card
    createProductCard(product, index) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = (index * 0.05) + 's';

        const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));

        card.innerHTML = `
            <div class="product-image">
                <span class="product-icon">${product.icon}</span>
            </div>
            <div class="product-content">
                <div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-rating" style="font-size: 12px; margin-bottom: 8px; color: #fbbf24;">
                        ${stars} ${product.rating} (${product.reviews})
                    </div>
                    <div class="product-price">
                        <span class="current-price">${product.price}</span>
                        <span class="original-price">${product.originalPrice}</span>
                        <span class="discount-badge">${product.discount}</span>
                    </div>
                </div>
                <button class="btn btn--primary btn--sm view-details-btn" data-product-id="${product.id}">View Details</button>
            </div>
        `;

        // FIXED: Add click event for the entire card
        card.addEventListener('click', (e) => {
            // If clicking on button, let it handle its own event
            if (e.target.classList.contains('view-details-btn')) {
                e.stopPropagation();
                this.openProductModal(product);
            } else {
                // Otherwise, click anywhere on card opens modal
                this.openProductModal(product);
            }
        });
        
        return card;
    },

    // Create game card
    createGameCard(game, index) {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.style.animationDelay = (index * 0.05) + 's';

        card.innerHTML = `
            <div class="game-image">
                <img src="${game.image}" alt="${game.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="display: none; align-items: center; justify-content: center; font-size: 3rem; width: 100%; height: 100%;">🎮</div>
            </div>
            <div class="game-content">
                <div>
                    <h3 class="game-title">${game.name}</h3>
                </div>
                <button class="play-btn" data-game-url="${game.playUrl}">Play Now</button>
            </div>
        `;

        // FIXED: Add proper click events for games
        const playBtn = card.querySelector('.play-btn');
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log(`🎮 Opening game: ${game.name}`);
            window.open(game.playUrl, '_blank');
        });

        // Also allow clicking anywhere on the card to play
        card.addEventListener('click', (e) => {
            e.preventDefault(); // Stop any default action
            console.log(`🎮 Game card clicked for: ${game.name}`);
            this.showGamePage(game); // NEW: Call our game page function
        });
    
        return card;
    },

// Add this new function in your app.js
showGamePage(game) {
    console.log(`🎮 Loading game page for: ${game.name}`);

    // Hide all other pages first
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show our new play-game page
    const targetPage = document.getElementById('page-play-game');
    if (targetPage) {
        targetPage.classList.add('active');

        // 1. Set the main game iframe and title
        document.getElementById('game-title-main').textContent = game.name;
        document.getElementById('game-iframe').src = game.playUrl;

        // 2. Populate the recommendation sidebar
        const recContainer = document.getElementById('game-recommendations');
        recContainer.innerHTML = '<h3 class="recommendation-title">More Games</h3>'; // Clear old ones

        const recommendedGames = this.data.games
            .filter(g => g.name !== game.name) // Don't recommend the same game
            .sort(() => 0.5 - Math.random()) // Shuffle
            .slice(0, 5); // Take first 5

        recommendedGames.forEach(recGame => {
            const recCard = document.createElement('div');
            recCard.className = 'rec-game-card';
            recCard.innerHTML = `
                <img src="${recGame.image}" alt="${recGame.name}" class="rec-game-image">
                <div class="rec-game-title">${recGame.name}</div>
            `;
            recCard.addEventListener('click', () => this.showGamePage(recGame));
            recContainer.appendChild(recCard);
        });

        // 3. Populate the "More Games" grid below
        const moreGamesContainer = document.getElementById('more-games-grid');
        moreGamesContainer.innerHTML = ''; // Clear old ones

        const moreGames = this.data.games
            .filter(g => g.name !== game.name) // Exclude current game
            .sort(() => 0.5 - Math.random()) // Shuffle
            .slice(0, 12); // Show 12 more games

        moreGames.forEach((moreGame, index) => {
            const card = this.createGameCard(moreGame, index); // Reuse our existing function!
            moreGamesContainer.appendChild(card);
        });
// 4. Populate and set up the new game controls bar
const gameControlTitle = document.getElementById('game-control-title');
const gameControlIcon = document.getElementById('game-control-icon');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const gameIframe = document.getElementById('game-iframe');

if (gameControlTitle && gameControlIcon && fullscreenBtn && gameIframe) {
    gameControlTitle.textContent = game.name;
    gameControlIcon.src = game.image; // Use game's image as icon

    // Fullscreen button functionality
    fullscreenBtn.onclick = () => {
        if (gameIframe.requestFullscreen) {
            gameIframe.requestFullscreen();
        } else if (gameIframe.mozRequestFullScreen) { /* Firefox */
            gameIframe.mozRequestFullScreen();
        } else if (gameIframe.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            gameIframe.webkitRequestFullscreen();
        } else if (gameIframe.msRequestFullscreen) { /* IE/Edge */
            gameIframe.msRequestFullscreen();
        }
    };
}
    } else {
        console.error('❌ Play Game page not found!');
    }

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
},
    
    // Theme management
    initializeTheme() {
        const savedTheme = localStorage.getItem('cashmart-theme') || 'light';
        this.state.currentTheme = savedTheme;
        document.documentElement.setAttribute('data-color-scheme', this.state.currentTheme);
        this.updateThemeToggle();
    },

    toggleTheme() {
        this.state.currentTheme = this.state.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-color-scheme', this.state.currentTheme);
        localStorage.setItem('cashmart-theme', this.state.currentTheme);
        
        // Smooth transition
        document.body.style.transition = 'all 0.8s ease';
        this.updateThemeToggle();
        
        setTimeout(() => {
            if (document.body) document.body.style.transition = '';
        }, 800);
        
        console.log(`🌙 Theme switched to: ${this.state.currentTheme}`);
    },

    updateThemeToggle() {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.textContent = this.state.currentTheme === 'light' ? '🌙' : '☀️';
        }
    },

    // FIXED EVENT LISTENERS - Complete rewrite for better functionality
    setupEventListeners() {
        console.log('🎯 Setting up event listeners...');

        // Use document-level event delegation for better reliability
        document.addEventListener('click', (e) => {
            this.handleDocumentClick(e);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));

        console.log('✅ All event listeners configured with delegation');
    },

    // FIXED: Comprehensive click handler with proper delegation
    handleDocumentClick(e) {
        const target = e.target;
        const closest = e.target.closest.bind(e.target);

        // Theme toggle - FIXED
        if (target.id === 'theme-toggle') {
            e.preventDefault();
            console.log('🌙 Theme toggle clicked');
            this.toggleTheme();
            return;
        }

        // Navigation links - FIXED
        if (target.classList.contains('nav-link') || target.hasAttribute('data-page')) {
            e.preventDefault();
            const page = target.getAttribute('data-page');
            if (page) {
                console.log(`🔗 Navigation clicked: ${page}`);
                this.showPage(page);
            }
            return;
        }

        // Hero buttons - FIXED
        if (target.classList.contains('explore-btn')) {
            e.preventDefault();
            console.log('🔍 Explore button clicked - navigating to products');
            this.showPage('products');
            return;
        }

        if (target.classList.contains('games-btn') || closest('[data-page="games"]')) {
            e.preventDefault();
            console.log('🎮 Games button clicked - navigating to games');
            this.showPage('games');
            return;
        }

        // Cart button - FIXED
        if (target.id === 'cart-btn' || closest('#cart-btn')) {
            e.preventDefault();
            console.log('🛒 Cart button clicked');
            this.toggleCart();
            return;
        }

        // Close cart - FIXED
        if (target.id === 'close-cart') {
            e.preventDefault();
            console.log('❌ Closing cart');
            this.closeCart();
            return;
        }

        // Modal close - FIXED
        if (target.id === 'close-product-modal') {
            e.preventDefault();
            console.log('❌ Closing product modal');
            this.closeAllModals();
            return;
        }

        // Click outside modal to close - FIXED
        if (target.classList.contains('product-modal')) {
            console.log('❌ Clicking outside modal to close');
            this.closeAllModals();
            return;
        }

        // Add to cart - FIXED
        if (target.id === 'add-to-cart-btn') {
            e.preventDefault();
            console.log('🛒 Add to cart clicked');
            if (this.state.currentProduct) {
                this.addToCart(this.state.currentProduct);
            }
            return;
        }

        // Buy now - FIXED
        if (target.id === 'buy-now-btn') {
            e.preventDefault();
            console.log('💳 Buy now clicked');
            if (this.state.currentProduct) {
                this.buyNow(this.state.currentProduct);
            }
            return;
        }

        // Filter buttons - FIXED
        if (target.classList.contains('filter-btn')) {
            e.preventDefault();
            const category = target.getAttribute('data-category');
            console.log(`🔍 Filter clicked: ${category}`);
            this.filterProducts(category);
            
            // Update active filter
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
            return;
        }

        // Newsletter signup - FIXED
        if (target.id === 'newsletter-btn') {
            e.preventDefault();
            console.log('📧 Newsletter button clicked');
            this.handleNewsletterSignup();
            return;
        }

        // Remove from cart - FIXED
        if (target.classList.contains('remove-item')) {
            e.preventDefault();
            const itemId = target.getAttribute('data-id');
            console.log(`🗑️ Remove item clicked: ${itemId}`);
            this.removeFromCart(itemId);
            return;
        }

        // Checkout - FIXED
        if (target.id === 'checkout-btn') {
            e.preventDefault();
            console.log('💳 Checkout button clicked');
            this.proceedToCheckout();
            return;
        }

        // Play game buttons - FIXED
        if (target.classList.contains('play-btn')) {
            e.preventDefault();
            const gameUrl = target.getAttribute('data-game-url');
            if (gameUrl) {
                console.log(`🎮 Play button clicked, opening: ${gameUrl}`);
                window.open(gameUrl, '_blank');
            }
            return;
        }

        // View details buttons - FIXED
        if (target.classList.contains('view-details-btn')) {
            e.preventDefault();
            const productId = target.getAttribute('data-product-id');
            const product = this.state.products.find(p => p.id === productId) || 
                           this.state.featuredProducts.find(p => p.id === productId);
            if (product) {
                console.log(`👁️ View details clicked for: ${product.name}`);
                this.openProductModal(product);
            }
            return;
        }

        // Footer links - FIXED
        if (target.closest('.footer') && target.hasAttribute('data-page')) {
            e.preventDefault();
            const page = target.getAttribute('data-page');
            if (page) {
                console.log(`🔗 Footer navigation clicked: ${page}`);
                this.showPage(page);
            }
            return;
        }
    },

    // FIXED: Page navigation with proper content loading
    showPage(pageName) {
        console.log(`📄 Navigating to page: ${pageName}`);
        
        // Update navigation active state - FIXED
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageName) {
                link.classList.add('active');
            }
        });

        // Hide all pages - FIXED
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show target page - FIXED
        const targetPage = document.getElementById(`page-${pageName}`);
        if (targetPage) {
            targetPage.classList.add('active');
            this.state.currentPage = pageName;
            
            // Populate page-specific content - FIXED
            setTimeout(() => {
                if (pageName === 'products') {
                    console.log('🏭 Loading products page...');
                    this.populateAllProducts();
                } else if (pageName === 'games') {
                    console.log('🎮 Loading games page...');
                    this.populateAllGames();
                }
            }, 100);
        } else {
            console.error(`❌ Page not found: page-${pageName}`);
        }

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log(`✅ Successfully navigated to: ${pageName}`);
    },

    // FIXED: Product filtering functionality
    filterProducts(category) {
        console.log(`🔍 Filtering products by category: ${category}`);
        
        const productCards = document.querySelectorAll('#products-full-grid .product-card');
        let visibleCount = 0;
        
        productCards.forEach((card, index) => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'flex';
                card.style.animation = `slideInUp 0.5s ease-out ${index * 0.02}s both`;
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        console.log(`✅ Showing ${visibleCount} products for category: ${category}`);

        // Add slide animation if not exists
        if (!document.getElementById('slide-animation')) {
            const style = document.createElement('style');
            style.id = 'slide-animation';
            style.textContent = `
                @keyframes slideInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }
    },

    // Product modal
    openProductModal(product) {
        console.log(`🛍️ Opening product modal for: ${product.name}`);
        
        this.state.currentProduct = product;
        const modal = document.getElementById('product-modal');
        
        if (!modal) {
            console.error('❌ Product modal not found');
            return;
        }

        // Populate product details
        document.getElementById('product-emoji').textContent = product.icon;
        document.getElementById('product-title').textContent = product.name;
        document.getElementById('current-price').textContent = product.price;
        document.getElementById('original-price').textContent = product.originalPrice;
        document.getElementById('discount-badge').textContent = `${product.discount} OFF`;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('download-stats').textContent = `Downloaded by ${product.downloads} users`;

        // Rating
        const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
        document.getElementById('product-rating').textContent = stars;
        document.getElementById('rating-text').textContent = `${product.rating} (${product.reviews?.toLocaleString() || '1,000+'} reviews)`;

        // Features
        const featuresContainer = document.getElementById('product-features');
        featuresContainer.innerHTML = `
            <h3 style="margin-bottom: 16px; color: var(--color-primary);">What's Included:</h3>
            <ul class="features-list" style="list-style: none; padding: 0;">
                ${product.features.map(feature => `
                    <li style="padding: 8px 0; color: var(--color-text-secondary);">✅ ${feature}</li>
                `).join('')}
            </ul>
        `;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        console.log('✅ Product modal opened successfully');
    },

    // FIXED: Cart functionality with proper feedback
    addToCart(product) {
        console.log(`🛒 Adding to cart: ${product.name}`);
        
        // Check if already in cart
        const existing = this.state.cart.find(item => item.id === product.id);
        
        if (existing) {
            existing.quantity += 1;
            console.log(`📈 Increased quantity for ${product.name} to ${existing.quantity}`);
        } else {
            this.state.cart.push({
                ...product,
                quantity: 1
            });
            console.log(`➕ Added new item ${product.name} to cart`);
        }

        this.saveCart();
        this.updateCartDisplay();
        this.showCartAnimation();
        
        // FIXED: Show success message with proper feedback
        this.showToast(`✅ ${product.name} added to cart!`);
        
        console.log(`🛒 Cart now has ${this.state.cart.length} unique items`);
    },

    removeFromCart(itemId) {
        console.log(`🗑️ Removing item from cart: ${itemId}`);
        const itemName = this.state.cart.find(item => item.id === itemId)?.name || 'Item';
        this.state.cart = this.state.cart.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartDisplay();
        this.showToast(`🗑️ ${itemName} removed from cart`);
    },

    saveCart() {
        try {
            localStorage.setItem('cashmart-cart', JSON.stringify(this.state.cart));
            console.log('💾 Cart saved to localStorage');
        } catch (error) {
            console.warn('Could not save cart to localStorage:', error);
        }
    },

    // FIXED: Cart display with proper badge and items
    updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        const cartItems = document.getElementById('cart-items');

        const totalItems = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = this.state.cart.reduce((sum, item) => sum + (item.priceNum * item.quantity), 0);

        // FIXED: Update cart count badge with proper show/hide
        if (cartCount) {
            cartCount.textContent = totalItems;
            if (totalItems > 0) {
                cartCount.classList.add('show');
            } else {
                cartCount.classList.remove('show');
            }
            console.log(`🛒 Cart badge updated: ${totalItems} items`);
        }

        // Update cart total
        if (cartTotal) {
            cartTotal.textContent = `Total: ₹${totalPrice.toLocaleString()}`;
        }

        // FIXED: Update cart items with proper layout
        if (cartItems) {
            if (totalItems === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart-message">
                        <div class="empty-cart-icon">🛒</div>
                        <p>Your cart is empty</p>
                        <p class="empty-cart-subtitle">Add some amazing products to get started!</p>
                    </div>
                `;
            } else {
                cartItems.innerHTML = this.state.cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-icon">${item.icon}</div>
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">${item.price} x ${item.quantity}</div>
                        </div>
                        <button class="btn btn--outline btn--sm remove-item" data-id="${item.id}">Remove</button>
                    </div>
                `).join('');
            }
        }

        this.state.cartTotal = totalPrice;
        console.log(`💰 Cart updated: ${totalItems} items, ₹${totalPrice.toLocaleString()}`);
    },

    // FIXED: Cart animation and visibility
    showCartAnimation() {
        const cartBtn = document.getElementById('cart-btn');
        if (cartBtn) {
            cartBtn.style.animation = 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            setTimeout(() => cartBtn.style.animation = '', 600);
        }
    },

    // FIXED: Cart sidebar toggle
    toggleCart() {
        console.log('🛒 Toggling cart sidebar');
        const cartSidebar = document.getElementById('cart-sidebar');
        if (cartSidebar) {
            const isVisible = cartSidebar.classList.contains('show');
            if (isVisible) {
                cartSidebar.classList.remove('show');
                console.log('🛒 Cart sidebar closed');
            } else {
                cartSidebar.classList.add('show');
                console.log('🛒 Cart sidebar opened');
            }
        }
    },

    closeCart() {
        console.log('🛒 Closing cart sidebar');
        const cartSidebar = document.getElementById('cart-sidebar');
        if (cartSidebar) {
            cartSidebar.classList.remove('show');
        }
    },

    // Razorpay integration
    buyNow(product) {
        this.proceedToCheckout([product]);
    },

    proceedToCheckout(items = null) {
        const checkoutItems = items || this.state.cart;
        
        if (checkoutItems.length === 0) {
            this.showToast('⚠️ Your cart is empty!');
            return;
        }

        const totalAmount = checkoutItems.reduce((sum, item) => sum + (item.priceNum * item.quantity), 0);
        
        console.log('💳 Initiating Razorpay checkout...');

        const options = {
            key: this.data.razorpay.keyId,
            amount: totalAmount * 100, // Razorpay expects amount in paise
            currency: 'INR',
            name: 'CashMart',
            description: `Purchase of ${checkoutItems.length} premium product${checkoutItems.length > 1 ? 's' : ''}`,
            image: '/favicon.ico',
            order_id: '', // Will be generated by server in real implementation
            handler: (response) => {
                console.log('✅ Payment successful:', response);
                this.handlePaymentSuccess(response, checkoutItems);
            },
            prefill: {
                name: 'Valued Customer',
                email: 'customer@example.com',
                contact: '9999999999'
            },
            notes: {
                address: 'CashMart Digital Store'
            },
            theme: {
                color: '#b8860b'
            },
            modal: {
                ondismiss: () => {
                    console.log('❌ Payment cancelled by user');
                    this.showToast('💭 Payment cancelled');
                }
            }
        };

        try {
            const rzp = new Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error('❌ Razorpay initialization failed:', error);
            this.showToast('❌ Unable to process payment. Please try again.');
        }
    },

    handlePaymentSuccess(response, items) {
        console.log('🎉 Processing successful payment...', response);
        
        // Clear cart if it was a cart checkout
        if (!Array.isArray(items) || items === this.state.cart) {
            this.state.cart = [];
            this.saveCart();
            this.updateCartDisplay();
            this.closeCart();
        }

        // Close modal if open
        this.closeAllModals();

        // Show success message
        this.showToast('🎉 Purchase successful! Download links sent to your email.', 5000);
        
        // Simulate order confirmation (in real app, this would be handled by server)
        setTimeout(() => {
            this.showOrderConfirmation(response, items);
        }, 2000);
    },

    showOrderConfirmation(paymentResponse, items) {
        const itemsText = items.map(item => `• ${item.name} (${item.quantity}x)`).join('\n');
        const total = items.reduce((sum, item) => sum + (item.priceNum * item.quantity), 0);
        
        const confirmationMessage = `
🎉 ORDER CONFIRMED!

Payment ID: ${paymentResponse.razorpay_payment_id}

Items purchased:
${itemsText}

Total: ₹${total.toLocaleString()}

✅ Download links have been sent to your email
✅ Access your products instantly
✅ 24/7 support available

Thank you for choosing CashMart!
        `;
        
        alert(confirmationMessage);
    },

    // Modal management
    closeAllModals() {
        console.log('❌ Closing all modals');
        const modals = ['product-modal'];
        modals.forEach(id => {
            const modal = document.getElementById(id);
            if (modal) {
                modal.classList.add('hidden');
                console.log(`❌ Closed modal: ${id}`);
            }
        });

        document.body.style.overflow = 'auto';
        this.state.currentProduct = null;
    },

    // Newsletter signup
    handleNewsletterSignup() {
        const input = document.getElementById('newsletter-email');
        const email = input?.value || '';
        if (email && email.includes('@')) {
            this.showToast(`🎉 Welcome to CashMart! Newsletter subscribed for ${email}`);
            if (input) input.value = '';
        } else {
            this.showToast('⚠️ Please enter a valid email address');
        }
    },

    // FIXED: Toast notifications with better styling
    showToast(message, duration = 3000) {
        console.log(`📢 Toast: ${message}`);
        
        // Remove existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--color-primary);
            color: var(--color-btn-primary-text);
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10002;
            animation: toastSlide 0.5s ease-out;
            font-weight: 600;
            max-width: 350px;
            word-wrap: break-word;
            line-height: 1.4;
            border: 1px solid rgba(255,255,255,0.2);
        `;

        document.body.appendChild(toast);

        // Add slide animation if not exists
        if (!document.getElementById('toast-animation')) {
            const style = document.createElement('style');
            style.id = 'toast-animation';
            style.textContent = `
                @keyframes toastSlide {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        setTimeout(() => {
            toast.style.transition = 'all 0.5s ease-out';
            toast.style.transform = 'translateX(100%)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, duration);
    },

    // Keyboard shortcuts
    handleKeyboardShortcuts(e) {
        if (e.key === 'Escape') {
            this.closeAllModals();
            this.closeCart();
        } else if (e.key === 't' && e.ctrlKey) {
            e.preventDefault();
            this.toggleTheme();
        } else if (e.key === '1' && e.ctrlKey) {
            e.preventDefault();
            this.showPage('home');
        } else if (e.key === '2' && e.ctrlKey) {
            e.preventDefault();
            this.showPage('products');
        } else if (e.key === '3' && e.ctrlKey) {
            e.preventDefault();
            this.showPage('games');
        } else if (e.key === '4' && e.ctrlKey) {
            e.preventDefault();
            this.showPage('about');
        }
    }
};

// Global functions for HTML handlers
window.showPage = (page) => CashMartApp.showPage(page);

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('🎬 DOM loaded, starting CashMart luxury experience...');
        CashMartApp.init();
    });
} else {
    console.log('🎬 DOM ready, initializing CashMart...');
    CashMartApp.init();
}

// Performance monitoring
window.addEventListener('load', () => {
    console.log(`⚡ CashMart loaded in ${Math.round(performance.now())}ms`);
});

console.log('🚀 CashMart - Luxury E-commerce with Games - FIXED VERSION - Script Loaded!');
