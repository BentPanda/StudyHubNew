// Funkcja do zapisywania liczby odwiedzin w pliku cookie
function setVisitCount() {
  // Sprawdzamy, czy plik cookie "visits" już istnieje
  var visits = localStorage.getItem("visits");

  if (visits) {
    // Jeśli istnieje, zwiększamy wartość o 1
    visits = parseInt(visits) + 1;
  } else {
    // Jeśli nie istnieje, ustawiamy wartość na 1
    visits = 1;
  }

  // Zapisujemy wartość w pliku cookie
  localStorage.setItem("visits", visits);

  // Wyświetlamy liczbę odwiedzin na stronie
  document.getElementById("visitCount").innerHTML =
    "Stronę odwiedziło/ło: " + visits;
}

// Wywołujemy funkcję przy każdym załadowaniu strony
setVisitCount();
