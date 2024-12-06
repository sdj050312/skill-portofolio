const item = document.getElementById('item_hover');
const imgHover = document.querySelector('.content_img_title img');
const images = [
    'education.jpg',
    'image.jpg',
    'image01.jpg',
    'image02.jpg'
];
console.log(item);
let currentIndex =0; 
let intervalId;
item.addEventListener('mouseover', ()=>{
    intervalId = setInterval(()=>{
        imgHover.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }, 500)
});
console.log(item)
item.addEventListener('mouseout', () => {
    clearInterval(intervalId); // 마우스가 떠나면 이미지 변경 중지
    currentIndex = 0; // 인덱스 초기화 (선택 사항)
});
