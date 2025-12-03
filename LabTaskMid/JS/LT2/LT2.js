const mainImg = document.getElementById("mainImg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Array of image URLs
const images = [
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1016/800/400",
  "https://picsum.photos/id/1025/800/400",
  "https://picsum.photos/id/1036/800/400",
  "https://picsum.photos/id/1043/800/400",
];

let index = 0;
let slideTimer = null;

// show image at current index
function showImage() {
  mainImg.src = images[index];
}

// go to next image
function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

// go to previous image
function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

// reset automatic slideshow timer
function resetTimer() {
  if (slideTimer !== null) clearInterval(slideTimer);
  slideTimer = setInterval(nextImage, 3000);
}

// attach manual controls
prevBtn.addEventListener("click", function () {
  prevImage();
  resetTimer();
});

nextBtn.addEventListener("click", function () {
  nextImage();
  resetTimer();
});

// initialize
showImage();
resetTimer();
