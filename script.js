// ACTIVITIES DATA
const activities = [
    {
        id: 1,
        name: 'Beach Snorkeling at Yellow Leaf Bay',
        emoji: '🤿',
        category: 'beach',
        tags: ['beach', 'family', 'romantic'],
        price: 45,
        duration: '3 hours',
        rating: '★★★★★ (234 reviews)',
        location: 'Taniti City',
        description: 'Explore vibrant coral reefs with experienced guides. Perfect for all skill levels. See colorful tropical fish and marine life up close.',
        included: 'Equipment rental, certified guide, snacks, and refreshments',
        requirements: 'Ages 5+, Beginner-Intermediate fitness level',
        priceCategory: 'budget'
    },
    {
        id: 2,
        name: 'Rainforest Hiking & Waterfall Tour',
        emoji: '🥾',
        category: 'adventure',
        tags: ['adventure', 'family'],
        price: 35,
        duration: '4 hours',
        rating: '★★★★☆ (189 reviews)',
        location: 'Rainforest Area',
        description: 'Guided hike through lush tropical rainforest. Discover hidden waterfalls, exotic plants, and wildlife. Great photo opportunities!',
        included: 'Guided hike, water bottle, light snack, rain jacket',
        requirements: 'Ages 8+, Moderate fitness level required',
        priceCategory: 'budget'
    },
    {
        id: 3,
        name: 'Volcano Adventure Tour',
        emoji: '🌋',
        category: 'adventure',
        tags: ['adventure'],
        price: 60,
        duration: '5 hours',
        rating: '★★★★★ (312 reviews)',
        location: 'Volcanic Mountain',
        description: 'Visit Taniti\'s active volcano. Experience the power of nature as you hike to the crater rim. Includes expert geological commentary.',
        included: 'Transportation, guided tour, safety equipment, lunch',
        requirements: 'Ages 10+, Good fitness level required',
        priceCategory: 'mid'
    },
    {
        id: 4,
        name: 'Helicopter Island Tour',
        emoji: '🚁',
        category: 'adventure',
        tags: ['adventure', 'romantic'],
        price: 150,
        duration: '1.5 hours',
        rating: '★★★★★ (156 reviews)',
        location: 'Taniti Airport',
        description: 'Spectacular aerial views of Taniti\'s beaches, rainforest, and volcano. Perfect for photography and romantic moments.',
        included: 'Helicopter ride, headsets, photography permission',
        requirements: 'All ages and fitness levels welcome',
        priceCategory: 'premium'
    },
    {
        id: 5,
        name: 'Sunset Dinner Cruise',
        emoji: '🚢',
        category: 'dining',
        tags: ['dining', 'romantic'],
        price: 85,
        duration: '2.5 hours',
        rating: '★★★★★ (267 reviews)',
        location: 'Yellow Leaf Bay',
        description: 'Romantic dinner cruise with fresh seafood while watching the sunset. Live local music and dancing.',
        included: 'Dinner, drinks, live entertainment',
        requirements: 'Ages 18+, Dress code: smart casual',
        priceCategory: 'mid'
    },
    {
        id: 6,
        name: 'Local Fish & Rice Experience',
        emoji: '🍚',
        category: 'dining',
        tags: ['dining', 'family'],
        price: 25,
        duration: '1.5 hours',
        rating: '★★★★☆ (198 reviews)',
        location: 'Taniti City',
        description: 'Dine at an authentic local restaurant serving traditional Tanitian fish and rice. Learn about local cuisine and culture.',
        included: 'Three-course meal with local beverages',
        requirements: 'All ages welcome',
        priceCategory: 'budget'
    },
    {
        id: 7,
        name: 'Pan-Asian Fusion Restaurant Tour',
        emoji: '🍜',
        category: 'dining',
        tags: ['dining', 'romantic'],
        price: 65,
        duration: '2 hours',
        rating: '★★★★★ (241 reviews)',
        location: 'Merriton Landing',
        description: 'Upscale Pan-Asian dining experience with creative fusion dishes. Perfect for special occasions.',
        included: 'Multi-course meal with wine pairings',
        requirements: 'Ages 18+, Dress code: formal',
        priceCategory: 'mid'
    },
    {
        id: 8,
        name: 'Local History Museum & Walking Tour',
        emoji: '🏛️',
        category: 'cultural',
        tags: ['cultural', 'family'],
        price: 20,
        duration: '2 hours',
        rating: '★★★★☆ (145 reviews)',
        location: 'Taniti City',
        description: 'Explore Taniti\'s rich cultural heritage. Museum exhibits showcase indigenous art, fishing traditions, and island history.',
        included: 'Museum entry, guided walking tour',
        requirements: 'All ages welcome',
        priceCategory: 'budget'
    },
    {
        id: 9,
        name: 'Zip-Lining Through the Rainforest',
        emoji: '🪂',
        category: 'adventure',
        tags: ['adventure'],
        price: 55,
        duration: '2 hours',
        rating: '★★★★★ (178 reviews)',
        location: 'Rainforest Area',
        description: 'Thrilling zip-line course through canopy. See the rainforest from a unique perspective!',
        included: 'Equipment, safety briefing, guides',
        requirements: 'Ages 12+, Moderate fitness required',
        priceCategory: 'mid'
    },
    {
        id: 10,
        name: 'Chartered Fishing Expedition',
        emoji: '🎣',
        category: 'adventure',
        tags: ['adventure'],
        price: 95,
        duration: '4 hours',
        rating: '★★★★☆ (112 reviews)',
        location: 'Yellow Leaf Bay',
        description: 'Deep sea fishing with experienced crew. Keep your catch! Includes fishing instruction for beginners.',
        included: 'Boat, equipment, guide, catch cleaning service',
        requirements: 'Ages 8+, Sea sickness tolerance recommended',
        priceCategory: 'mid'
    },
    {
        id: 11,
        name: 'Couples Massage & Spa Package',
        emoji: '💆',
        category: 'romantic',
        tags: ['romantic'],
        price: 120,
        duration: '2 hours',
        rating: '★★★★★ (289 reviews)',
        location: 'Merriton Landing',
        description: 'Couples spa retreat with massage and relaxation treatments. Perfect for honeymooners.',
        included: 'Massage, facial, refreshments, robes',
        requirements: 'All ages, Bring swimsuits',
        priceCategory: 'mid'
    },
    {
        id: 12,
        name: 'Romantic Sunset Beach Walk & Picnic',
        emoji: '🌅',
        category: 'romantic',
        tags: ['romantic', 'beach'],
        price: 50,
        duration: '2.5 hours',
        rating: '★★★★★ (301 reviews)',
        location: 'Taniti City Beaches',
        description: 'Private sunset walk on pristine white sand with champagne and gourmet picnic. Unforgettable memories guaranteed.',
        included: 'Champagne, gourmet picnic, beach setup',
        requirements: 'Adults only, Book in advance for best experience',
        priceCategory: 'mid'
    }
    
];

let savedActivities = [];
let currentFilter = 'all';

// INITIALIZE
document.addEventListener('DOMContentLoaded', function () {
    const today = new Date().toISOString().split('T')[0];

    document
        .getElementById('bookingDate')
        .setAttribute('min', today);

    loadSavedActivities();
    displayActivities(activities);
});

function displayActivities(activitiesToShow) {
    const grid = document.getElementById('activitiesGrid');
    grid.innerHTML = '';

    activitiesToShow.forEach(activity => {
        const isSaved = savedActivities.includes(activity.id);

        const card = document.createElement('div');
        card.className = 'activity-card';

        card.innerHTML = `
            <div class="activity-image">
                ${activity.emoji}

                <button
                    class="favorite-btn ${isSaved ? 'saved' : ''}"
                    onclick="toggleFavorite(event, ${activity.id})">
                    ${isSaved ? '❤️' : '🤍'}
                </button>
            </div>

            <div class="activity-content">
                <div class="activity-title">
                    ${activity.name}
                </div>

                <div class="activity-rating">
                    ${activity.rating}
                </div>

                <div class="activity-meta">
                    ${activity.tags
                        .map(tag => `<span class="meta-tag">${tag}</span>`)
                        .join('')}
                </div>

                <div class="price-location">
                    <span class="price">
                        $${activity.price}/person
                    </span>

                    <span class="location">
                        📍 ${activity.location}
                    </span>
                </div>

                <div class="activity-info">
                    <span>⏱️ ${activity.duration}</span>
                </div>

                <button
                    class="book-btn"
                    onclick="openActivityModal(${activity.id})">
                    Book Now
                </button>
            </div>
        `;

        grid.appendChild(card);
    });
}

function filterActivities() {
    const selects = document.querySelectorAll('.filters select');

    const typeSelect = selects[0].value;
    const durationSelect = selects[1].value;
    const priceSelect = selects[2].value;

    let filtered = activities;

    if (typeSelect) {
        filtered = filtered.filter(
            activity => activity.category === typeSelect
        );
    }

    if (priceSelect) {
        filtered = filtered.filter(
            activity => activity.priceCategory === priceSelect
        );
    }

    if (durationSelect === 'short') {
        filtered = filtered.filter(
            activity => parseFloat(activity.duration) < 2
        );
    } else if (durationSelect === 'medium') {
        filtered = filtered.filter(activity => {
            const hours = parseFloat(activity.duration);
            return hours >= 2 && hours <= 4;
        });
    } else if (durationSelect === 'long') {
        filtered = filtered.filter(
            activity => parseFloat(activity.duration) > 4
        );
    }

    displayActivities(filtered);
}

function filterByCategory(category) {
    if (category === 'all') {
        displayActivities(activities);
        return;
    }

    const filtered = activities.filter(
        activity => activity.tags.includes(category)
    );

    displayActivities(filtered);
}

function loadSavedActivities() {
    const saved = localStorage.getItem('savedActivities');

    if (saved) {
        savedActivities = JSON.parse(saved);
    }
}

function showSavedActivities() {
    const saved = activities.filter(
        activity => savedActivities.includes(activity.id)
    );

    if (saved.length === 0) {
        document.getElementById('activitiesGrid').innerHTML = `
            <div
                class="empty-message"
                style="grid-column: 1/-1;">
                No saved activities yet. Click the heart icon on any
                activity to save it!
            </div>
        `;
    } else {
        displayActivities(saved);
    }
}
