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

// 페이지를 생성을 해야하는거지.. 
// 그래서 createElement를 하면 되는건가...?



modalBoxBtn.addEventListener("click", showDetail);
cancleBtn.addEventListener("click", DeleteDetail );


console.log(modalBoxBtn);
console.log(showDetail);
