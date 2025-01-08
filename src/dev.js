const item = document.getElementById('item_hover');
const imgHover = document.querySelector('.content_img_title img');
let images = [
    './img/education.jpg',
    './img/image.jpg',
    './img/image01.jpg',
    './img/image02.jpg'
];
console.log(item);
let currentIndex = 0; 
let intervalId;

item.addEventListener('mouseover', () => {
    item.style.objectFit = 'cover';  
    imgHover.style.width = '100%';   
    imgHover.style.height = '100%';  

    intervalId = setInterval(() => {
        imgHover.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }, 500);
});

item.addEventListener('mouseout', () => {
    clearInterval(intervalId);  // Stop the image change when mouse leaves
    currentIndex = 0; 
});
