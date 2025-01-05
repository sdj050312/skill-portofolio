const headTabMenu = document.querySelector('.menu-tabs');
const tabMenuBox = document.querySelector('.head-tab-menu label');
// 메뉴바를 클릭을 하면 보이고 그렇지 않으면 숨기기 toggle쓰면 되겠네 
function handleMenu () {
    headTabMenu.classList.toggle('active');
};

tabMenuBox.addEventListener('click', handleMenu);