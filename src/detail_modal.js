
//객체를 생성을 하고 -> 해당 객체를 하나 씩 접근 하면 될 거 같은데 
// 그리고 해당 객체에 있을때는 해당 버튼을 클릭을 하면 보여주는 식으로 
const projectImgsFirst = document.querySelectorAll('.detail-project img');
const projectBtns = document.querySelectorAll(".project-btns span");

// 모든 이미지 숨기기
function hideAllProjects() {
    projectImgsFirst.forEach(img => img.style.opacity = '0');
    projectBtns.forEach(btn => btn.style.opacity = '0.5'); // 비활성화 표시
}

// 특정 이미지 표시
function showProject(index) {
    hideAllProjects(); // 모든 이미지를 숨긴 후

    if (projectImgsFirst[index]) {
        projectImgsFirst[index].style.opacity = '1'; // 선택된 이미지 표시
    }
    if (projectBtns[index]) {
        projectBtns[index].style.opacity = '1';
        projectBtns[index].style.background = "gray"; // 선택된 버튼 강조
    }
}

// 버튼 클릭 이벤트 추가
projectBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => showProject(index));
});

// 초기 상태: 첫 번째 이미지 표시
showProject(0);



const modalBoxBtn = document.querySelector(".project-detail");
const detailBox = document.querySelector(".detail-box01");
const cancleBtn = document.querySelector('.cancle-btn');
const showDetail = () => {
    if (detailBox) {
        detailBox.classList.add("active"); // .을 빼고 추가
    }
};

const DeleteDetail = () => {
    detailBox.classList.remove("active");
}

function detailImgs () {
    
}


// 페이지를 생성을 해야하는거지.. 
// 그래서 createElement를 하면 되는건가...?



modalBoxBtn.addEventListener("click", showDetail);
cancleBtn.addEventListener("click", DeleteDetail );


console.log(modalBoxBtn);
console.log(showDetail);
