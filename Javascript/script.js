 const themeBtn = document.getElementById("themeBtn");


// ================================
// THEME BUTTON
// ================================

function updateThemeButton() {

    const isDarkMode =
        document.body.classList.contains("dark-mode");


    if (isDarkMode) {

        themeBtn.innerText = "☀️ Light Mode";

    } else {

        themeBtn.innerText = "🌙 Dark Mode";

    }

}


// ================================
// LOAD SAVED THEME
// ================================

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


// ================================
// THEME TOGGLE
// ================================

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    const isDarkMode =
        document.body.classList.contains("dark-mode");


    if (isDarkMode) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }


    updateThemeButton();

});


// ================================
// INITIAL BUTTON TEXT
// ================================

updateThemeButton();


// ===============================
// dynamic gallery
// ===============================

const gallery = document.querySelector(".gallery");

console.log(gallery);

const frames = [


    //  ==============================
    // special phtos
    // ===============================


{       id: 1,
        title: "Meet the Photographer",
        type: "people",
        category: "Finding Myself",
        image: "images/author.jpeg"
    },

    {
        id: 2,
        title: "Where Time Stands Still",
         type: "travel",
        category: "Agra • India",
        image: "images/taj01.jpeg"
    },

{      id: 3,
        title: "Peace Beyond Words",
        type: "travel",
        category: "Vrindavan • India",
        image: "images/Vrinda.jpeg"
    },

    {
        id: 4,
        title: "Endless Possibilities",
        type: "sky",
        category: "Looking Above ",
        image: "images/sky.jpeg"
    },

    {
        id: 5,
        title: " Every Ending Begins Again",
        type: "nature",
        category: "The sun sets, but tomorrow brings a new dawn.",
        image: "images/sunset.jpeg"
    },


    {
        id: 6,
        title: "Silence Speaks Loudest",
        type: "night",
        category: "In the stillness, we find our truest selves.",
        image: "images/Beautiful moon.jpeg"
    },


// =============================
// ============================

    {
        id: 7,
        title: "Quiet Beginnings",
         type: "Portrait",
        category: "Every journey starts with a single vision.",
        image: "images/Random01.jpeg"
    },

    {
        id: 8,
        title: " Nature Finds a Way",
        type: "Nature",
        category: "Life grows even through forgotten corners.",
        image: "images/Random02.jpeg"
    },

    {
        id: 9,
        title: " Hidden Home",
        type: "Nature",
        category: "Tiny stories hidden beneath our feet.",
        image: "images/Random03.jpeg"
    },

    {
        id: 10,
        title: "Childhood Smile",
         type: "Portrait",
        category: "Some memories never grow old.",
        image: "images/Random04.jpeg"
    },

    {
        id: 11,
        title: "Silent Power",
        type: "travel",
        category: "Strength wrapped in calm.",
        image: "images/Random05.jpeg"
    },

    {
        id: 12,
        title: "Timeless Heritage",
        type: "travel",
        category: "History standing proud through generations.",
        image: "images/Random06.jpeg"
    },

    {
        id: 13,
        title: "Evening Calm",
         type: "sky",
        category: "Moments of peace in a busy world.",
        image: "images/Random07.jpeg"
    },

    {
        id: 14,
        title: "Blooming Beauty",
        type: "nature",
        category: " Nature paints without a brush.",
        image: "images/Random08.jpeg"
    },

    {
        id: 15,
        title: " Everyday Streets",
        type: "Portrait",
        category: "Life's stories unfold in the most ordinary places.",
        image: "images/Random09.jpeg"
    },

    {
        id: 16,
        title: " Fresh Beginnings",
         type: "Portrait",
        category: "Growing a little every day.",
        image: "images/Random10.jpeg"
    },

    {
        id: 17,
        title: "Window View",
        type: "nature",
        category: " A glimpse into the world beyond our walls.",
        image: "images/Random11.jpg"
    },

    {
        id:18,
        title: "City After Dark",
        type: "night",
        category: " The city sleeps, but the lights never do.",
        image: "images/Random12.jpeg"
    },

    {
        id: 19,
        title: "City Lights",
         type: "night",
        category: "The city never sleeps, and neither do its stories.",
        image: "images/Random13.jpeg"
    },
    {
        id: 20,
        title: "Golden Bloom",
        type: "nature",
        category: "Spring captured forever",
        image: "images/Random14.jpeg"
    },
    {
        id: 21,
        title: "Little Wonders",
        type: "nature",
        category: " Even the smallest things can hold the greatest beauty.",
        image: "images/Random15.jpeg"
    },

    {
        id: 22,
        title: "Quiet Beginnings",
         type: "Portrait",
        category: "Every journey starts with a single vision.",
        image: "images/Random16.jpeg"
    },

    {
        id: 23,
        title: " Nature Finds a Way",
        type: "Nature",
        category: "Life grows even through forgotten corners.",
        image: "images/Random17.jpeg"
    },

    {
        id: 24,
        title: " Hidden Home",
        type: "Nature",
        category: "Tiny stories hidden beneath our feet.",
        image: "images/Random18.jpeg"
    },

    {
        id: 25,
        title: "Quiet Beginnings",
         type: "Portrait",
        category: "Every journey starts with a single vision.",
        image: "images/Random19.jpeg"
    },

    {
        id: 26,
        title: " Nature Finds a Way",
        type: "nature",
        category: "Life grows even through forgotten corners.",
        image: "images/Random20.jpeg"
    },

    {
        id: 27,
        title: " Hidden Home",
        type: "nature",
        category: "Tiny stories hidden beneath our feet.",
        image: "images/Random21.jpeg"
    },

    {
        id: 28,
        title: "Quiet Beginnings",
         type: "Portrait",
        category: "Every journey starts with a single vision.",
        image: "images/Random22.jpeg"
    },
    {
        id: 29,
        title: " Nature Finds a Way",
        type: "nature",
        category: "Life grows even through forgotten corners.",
        image: "images/Random23.jpeg"
    },
    {
        id: 30,
        title: " Hidden Home",
        type: "nature",
        category: "Tiny stories hidden beneath our feet.",
        image: "images/Random24.jpeg"
    },

    {
        id: 31,
        title: "Quiet Beginnings",
         type: "Portrait",
        category: "Every journey starts with a single vision.",
        image: "images/Random25.jpeg"
    },
    {
        id: 32,
        title: " Nature Finds a Way",
        type: "nature",
        category: "Life grows even through forgotten corners.",
        image: "images/Random26.jpeg"
    },


];

console.log(frames);

// ===============================
// create a card for each frame
// ===============================

 

 function renderFrames(framesToRender) {

    currentFrames = framesToRender;

    gallery.innerHTML = "";

    framesToRender.forEach((frame) => {

        const card = document.createElement("article");

        card.classList.add("photo-card");

        card.innerHTML = `
            <img
                src="${frame.image}"
                alt="${frame.title}"
                loading="lazy"
            >

            <div class="caption">
                <h2>${frame.title}</h2>
                <p>${frame.category}</p>
            </div>
        `;


         card.addEventListener("click", () => {

    const index = currentFrames.indexOf(frame);

    openLightbox(index);

});

    lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
});


const lightboxPrev = document.querySelector("#lightboxPrev");
const lightboxNext = document.querySelector("#lightboxNext");

});


 
 

        gallery.appendChild(card);
}


renderFrames(frames);


 


// ===============================
    // search bar
// ===============================

const searchInput = document.querySelector("#gallerySearch");
 

searchInput.addEventListener("input", () => {

    const searchTerm = searchInput.value.toLowerCase().trim();

    const searchedFrames = frames.filter((frame) => {

        return (
            frame.title.toLowerCase().includes(searchTerm) ||
            frame.category.toLowerCase().includes(searchTerm) ||
            frame.type.toLowerCase().includes(searchTerm)
        );

    });

    renderFrames(searchedFrames);

});


// ===============================
// category filter
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filteredFrames =
            selectedFilter === "all"
                ? frames
                : frames.filter(
                    (frame) => frame.type === selectedFilter
                );

         renderFrames(filteredFrames);
    });

});


// ==============================
// light box functionality
// ==============================

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxCategory = document.querySelector("#lightboxCategory");
const lightboxClose = document.querySelector("#lightboxClose");


let currentIndex = 0;
let currentFrames = frames;

function openLightbox(index) {

    currentIndex = index;

    const frame = currentFrames[currentIndex];

    lightboxImage.src = frame.image;
    lightboxImage.alt = frame.title;

    lightboxTitle.textContent = frame.title;
    lightboxCategory.textContent = frame.category;

    lightbox.classList.add("active");
}