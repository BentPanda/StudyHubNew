// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID", // Opcjonalne
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userStatus = document.getElementById("userStatus");
const loginForm = document.getElementById("loginForm");
const logoutButton = document.getElementById("logoutButton");

// Obserwuj zmiany w stanie autoryzacji
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Użytkownik jest zalogowany
    userStatus.innerHTML = `Zalogowano jako: ${user.email}`;
    loginForm.style.display = "none";
    logoutButton.style.display = "block";
  } else {
    // Użytkownik jest wylogowany
    userStatus.innerHTML = "Nie jesteś zalogowany.";
    loginForm.style.display = "block";
    logoutButton.style.display = "none";
  }
});

// Funkcja logowania
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    // Logowanie zakończone sukcesem
    console.log(`Zalogowano jako: ${email}`);
  } catch (error) {
    // Obsługa błędów
    console.error(`Błąd logowania: ${error.message}`);
  }
}

// Funkcja wylogowywania
function logout() {
  signOut(auth)
    .then(() => {
      // Wylogowanie zakończone sukcesem
      console.log("Wylogowano pomyślnie.");
    })
    .catch((error) => {
      // Obsługa błędów wylogowywania
      console.error(`Błąd wylogowywania: ${error.message}`);
    });
}
