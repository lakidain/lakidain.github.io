/*==================== RANDOM IMAGE ========================*/
$(document).ready(function() {
var astronaut_number = Math.floor(Math.random() * 6)

if(astronaut_number > 5){
    astronaut_number = 0;
}

$("#imageDesktop").attr("src", "images/Astronaut_" + astronaut_number + ".jpg");
$("#imageDesktop").removeAttr('hidden');
$("#imageMobile").attr("src", "images/Astronaut_" + astronaut_number + ".jpg");
$("#imageMobile").removeAttr('hidden');

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");

console.log(selectedTheme)
document.querySelector('#theme-button').checked = (selectedTheme === "dark")?true:false

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
    


// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
});
});
