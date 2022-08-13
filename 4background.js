const images = ["img1.png", "img2.png", "img3.jpg", "img4.png", "img5.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "cover";
