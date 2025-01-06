const headTabMenu = document.querySelector('.menu-tabs');
const tabMenuBox = document.querySelector('.head-tab-menu label');
const skillBtn = document.querySelector('.skill-btn');
const modalTab = document.querySelector('.modal-overlay');
const deleteBtn = document.querySelector('.delete-modal');
function setFullScreenHeight() {
    const fullScreenElement = document.querySelector('.menu-tabs');  // 전체 화면을 채울 요소
    fullScreenElement.style.height = `${window.innerHeight}px`; // 브라우저 실제 화면 높이로 설정
}

// 페이지 로드 시와 창 크기 변경 시 실행

// Show the modal
function showModal() {
    modalTab.classList.add('show');
    console.log('Modal shown:', modalTab);
}


function hideModal() {
    modalTab.classList.remove('show');
}

function handleMenu() {
    headTabMenu.classList.toggle('active');
}


if (skillBtn) skillBtn.addEventListener('click', showModal);
if (deleteBtn) deleteBtn.addEventListener('click', hideModal);
if (tabMenuBox) tabMenuBox.addEventListener('click', handleMenu);
window.addEventListener('load', setFullScreenHeight);
window.addEventListener('resize', setFullScreenHeight);