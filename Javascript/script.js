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
