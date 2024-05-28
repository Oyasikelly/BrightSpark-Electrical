"use strict";
let i = 0;
let image = [
  "/Image/image1.webp",
  "/Image/image2.webp",
  "/Image/image3.webp",
  "/Image/image4.webp",
  "/Image/image5.webp",
];
const slide = document.querySelector(".slide");
function changeImages() {
  slide.src = image[i];
  if (i < image.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImages()", 3000);
}

window.onload = changeImages;
