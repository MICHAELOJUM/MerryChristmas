function changeImage() {
  const images = ["Santa.png", "Santa2.png", "merry.jpg"];
  const random = images[Math.floor(Math.random() * images.length)];
  document.querySelector(".you").src = random;
}

changeImage();
setInterval(changeImage, 3000);