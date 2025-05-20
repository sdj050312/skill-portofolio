var dragItems = document.querySelectorAll(".folder");
var container = document.querySelector(".folder-board");

dragItems.forEach((dragItem) => {
  let active = false;
  let currentX = 0;
  let currentY = 0;
  let initialX = 0;
  let initialY = 0;
  let xOffset = 0;
  let yOffset = 0;

  function dragStart(e) {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
      active = true;
    }
  }

  function dragEnd() {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(e) {
    if (active) {
      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }

  dragItem.addEventListener("touchstart", dragStart, false);
  dragItem.addEventListener("touchend", dragEnd, false);
  dragItem.addEventListener("touchmove", drag, false);

  dragItem.addEventListener("mousedown", dragStart, false);
  dragItem.addEventListener("mouseup", dragEnd, false);
  dragItem.addEventListener("mousemove", drag, false);
});

// 카드를 다가져와서 잡으면 놓을 수 있겠끔 만들어 봅시다 .
document.addEventListener("DOMContentLoaded", () => {
  const dragBox = document.querySelector(".effort .effort-board");

  let offsetX, offsetY;
  let isDragging = false;

  dragBox.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - dragBox.offsetLeft;
    offsetY = e.clientY - dragBox.offsetTop;
    dragBox.style.cursor = "grabbing";
    console.log("마우스잡힘");
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
    dragBox.style.cursor = "grab";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    dragBox.style.left = `${e.clientX - offsetX}px`;
    dragBox.style.top = `${e.clientY - offsetY}px`;
  });
});
