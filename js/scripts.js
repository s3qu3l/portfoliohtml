/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page

// Pobierz aktualny dzień tygodnia (0 dla niedzieli, 1 dla poniedziałku, itd.)
const currentDay = new Date().getDay();

// Ustaw klasę "today" dla elementu listy odpowiadającego aktualnemu dniu tygodnia
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const currentDayId = days[currentDay];
document.getElementById(currentDayId).classList.add("today");

// Pobierz bieżącą ścieżkę URL
const currentPath = window.location.pathname;

// Sprawdź, która strona jest otwarta i dodaj klasę aktywności do odpowiedniego elementu nawigacji
if (currentPath.includes("start.html")) {
    document.getElementById("nav-home").classList.add("active");
} else if (currentPath.includes("onas.html")) {
    document.getElementById("nav-about").classList.add("active");
} else if (currentPath.includes("kontakt.html")) {
    document.getElementById("nav-contact").classList.add("active");
} else if (currentPath.includes("uis.html")) {
    document.getElementById("nav-services").classList.add("active");
}
