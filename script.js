// State: Array für Mittagessen
const lunches = [];

// DOM Elemente
const input = document.getElementById("lunchInput");
const menu = document.getElementById("menu");

// Menüanzeige aktualisieren
function updateMenu() {
  menu.textContent = lunches.length > 0 ? lunches.join(", ") : "The menu is empty.";
}

// Hilfsfunktion: Macht das erste Zeichen groß, den Rest klein
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Lunch hinzufügen (Ende)
function addLunchToEnd() {
  if (!input.value) return;
  const formattedLunch = capitalize(input.value);
  lunches.push(formattedLunch);
  input.value = "";
  updateMenu();
}

// Lunch hinzufügen (Start)
function addLunchToStart() {
  if (!input.value) return;
  const formattedLunch = capitalize(input.value);
  lunches.unshift(formattedLunch);
  input.value = "";
  updateMenu();
}

// Letztes Lunch entfernen (Guard Clause)
function removeLastLunch() {
  if (lunches.length === 0) {
    alert("No lunches to remove.");
    return;
  }
  const removed = lunches.pop();
  alert(`${removed} removed from the end.`);
  updateMenu();
}

// Erstes Lunch entfernen (Guard Clause)
function removeFirstLunch() {
  if (lunches.length === 0) {
    alert("No lunches to remove.");
    return;
  }
  const removed = lunches.shift();
  alert(`${removed} removed from the start.`);
  updateMenu();
}

// Zufälliges Lunch auswählen
function randomLunch() {
  if (lunches.length === 0) {
    alert("No lunches available.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * lunches.length);
  alert(`Randomly selected lunch: ${lunches[randomIndex]}`);
}

// Event Listeners
document.getElementById("addEnd").onclick = addLunchToEnd;
document.getElementById("addStart").onclick = addLunchToStart;
document.getElementById("removeLast").onclick = removeLastLunch;
document.getElementById("removeFirst").onclick = removeFirstLunch;
document.getElementById("random").onclick = randomLunch;

// Initiales Menü anzeigen
updateMenu();