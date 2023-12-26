let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    const transformValue = -100 * index + '%';
    document.querySelector('.carousel-wrapper').style.transform = `translateX(${transformValue})`;
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
document.getElementById('nextBtn').addEventListener('click', nextItem);
document.getElementById('prevBtn').addEventListener('click', prevItem);

// Set an interval for auto-advancing the carousel (optional)
// Uncomment the following line to enable auto-advancing
// setInterval(nextItem, 3000); // Change the interval as needed

