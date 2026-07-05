const sideMenu = document.querySelector("#sideMenu");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

// Scroll Bar
window.onscroll = function () {
  updateScrollProgress();
};

function updateScrollProgress() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  // Update the width of our progress bar
  document.getElementById("scroll-bar").style.width = scrolled + "%";
}

// Work cards
const cards = document.querySelectorAll(".card");
const carousel = document.querySelector("#carousel");
const dotsBox = document.querySelector("#dots");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentIndex = 2;

cards.forEach((card, index) => {
  const dot = document.createElement("button");
  dot.classList.add("dot");
  dotsBox.appendChild(dot);
  card.addEventListener("click", () => {
    showCard(index);
  });
  dot.addEventListener("click", () => {
    showCard(index);
  });
});

const dots = document.querySelectorAll(".dot");
function showCard(index) {
  currentIndex = index;
  cards.forEach((card) => {
    card.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  cards[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
  carousel.scrollTo({
    left: cards[currentIndex].offsetLeft - carousel.offsetLeft - 16,
    behavior: "smooth",
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }
  showCard(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }
  showCard(currentIndex);
});

showCard(currentIndex);
