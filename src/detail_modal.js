const projectImgsFirst = document.querySelectorAll('.detail-project img');
const projectBtns = document.querySelectorAll(".project-btns span");

// 모든 이미지 숨기기
function hideAllProjects() {
    projectImgsFirst.forEach(img => img.classList.remove('active'));
    projectBtns.forEach(btn => btn.style.opacity = '0.5'); // 비활성화 표시
}

// 특정 이미지 표시
function showProject(index) {
    hideAllProjects();
    
    if (projectImgsFirst[index]) {
        projectImgsFirst[index].classList.add('active'); // 선택된 이미지 표시
    }
    
    if (projectBtns[index]) {
        projectBtns[index].style.opacity = '1';
        projectBtns[index].style.background = "gray"; // 선택된 버튼 강조
    }
}

// 버튼 클릭 이벤트 추가
projectBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        showProject(index);
    });
});

// 모달 관련 코드
const modalBoxBtn = document.querySelectorAll(".project-detail");
const detailBox = document.querySelectorAll(".detail-box");
const cancleBtn = document.querySelectorAll('.cancle-btn');

// 모달 열기 함수
const showDetail = (index) => {
    detailBox.forEach((box, i) => {
        if (i === index) {
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    });

    // 모달이 열릴 때 첫 번째 이미지를 표시
  
};

// 모달 닫기 함수
const DeleteDetail = () => {
    detailBox.forEach(box => box.classList.remove("active"));
};

// 버튼 클릭 시 해당 모달 열기
modalBoxBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        showDetail(index);
        console.log(`모달 ${index}번이 열렸습니다.`);
    });
});

// 닫기 버튼 클릭 시 모든 모달 닫기
cancleBtn.forEach(btn => {
    btn.addEventListener("click", DeleteDetail);
});

console.log("모달 버튼:", modalBoxBtn);
console.log("모달 박스:", detailBox);
