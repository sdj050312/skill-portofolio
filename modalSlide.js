// 슬라이드 아이템과 박스 아이템을  가져온다음에
const slideItem = document.querySelectorAll(".slide-wrap .slide-item");
const slideItemLength = document.querySelectorAll(".slide-item").length - 1; // 현재 3
const slideWrap = document.querySelector(".slide-wrap");
const boxItem = document.querySelectorAll(".boxs .box-item");
const boxItemLength = document.querySelectorAll(".box-item").length - 1; // 현재 3
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;
function NextSlide() {
  if (current !== slideItemLength) {
    // 0, 0, 1, 1, 2, 2
    slideWrap.style.transform = `translateX(${(current + 1) * -200}px)`;
    current++;
  } else {
    current = 0; // 초기값으로 돌아옴
    slideWrap.style.transform = `translateX(0px)`;
  }
}
function PrevSlide() {
  if (current !== 0) {
    0;
    current--;
    slideWrap.style.transform = `translateX(${current * -200}px)`;
  } else {
    current = 0;
    slideWrap.style.transform = `translateX(200px)`;
  }
}
console.log(prevBtn);
prevBtn.addEventListener("click", PrevSlide);
nextBtn.addEventListener("click", NextSlide);

boxItem.forEach((box, index) => {
  box.style.opacity = index === 0 ? "1" : "0";
});

slideItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    // 모든 박스의 투명도를 초기화

    boxItem.forEach((box) => {
      box.style.opacity = "0";
    });

    // 클릭한 슬라이드에 해당하는 박스만 표시
    if (boxItem[index]) {
      boxItem[index].style.opacity = "1";
    }
  });
});

// 슬라이드 아이템 index가 1이면, 박스 아이템 의 index1을 가져오는 방법을
// 사용하면 될 거 같습니다.
// 그 다음에 slide-item을 클릭을 하면 해당 인덱스를 가져오는 식으로 하면 되겠다.
