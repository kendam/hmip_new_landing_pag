let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function showItem(index) {
  const transformValue = -100 * index + "%";
  document.querySelector(
    ".carousel-wrapper"
  ).style.transform = `translateX(${transformValue})`;
}

function nextItem() {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
}

// Set event listeners for next and previous buttons (you need to create these buttons in your HTML)
// document.getElementById("nextBtn").addEventListener("click", nextItem);
// document.getElementById("prevBtn").addEventListener("click", prevItem);

// Set an interval for auto-advancing the carousel (optional)
// Uncomment the following line to enable auto-advancing
// setInterval(nextItem, 3000); // Change the interval as needed

// this logic handles button click for checking housing data
// Select buttons directly by their class name
const buttons = document.querySelectorAll(".bgHousingDataButtonColor");

const lineContainer = document.querySelector(".lineContainer");
const barContainer = document.querySelector(".barContainer");
const graphContainer = document.querySelector(".graphContainer");

function hideAllContainers() {
  lineContainer.style.display = "none";
  barContainer.style.display = "none";
  graphContainer.style.display = "none";
}

function removeActiveClass() {
  buttons.forEach((button) =>
    button.classList.remove("bgHousingDataButtonColorActive")
  );
}

function initializeView() {
  hideAllContainers();
  removeActiveClass();

  // Set the default view here (e.g., Line container and Line button as active)
  lineContainer.style.display = "block";
  buttons[0].classList.add("bgHousingDataButtonColorActive");
}

// Run this function when the page loads to initialize the view
initializeView();

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log("click");

    buttons.forEach((btn) =>
      btn.classList.remove("bgHousingDataButtonColorActive")
    );

    button.classList.add("bgHousingDataButtonColorActive");
    hideAllContainers();

    const buttonText = button.textContent.trim().toLowerCase();

    if (buttonText === "line") {
      lineContainer.style.display = "block";
    } else if (buttonText === "bar") {
      barContainer.style.display = "block";
    } else if (buttonText === "map") {
      graphContainer.style.display = "block";
    }

    button.classList.add("bgHousingDataButtonColorActive");
  });
});
