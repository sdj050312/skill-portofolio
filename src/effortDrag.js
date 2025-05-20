const dragBoxes = document.querySelectorAll(".effort #component-card");

dragBoxes.forEach((dragBox) => {
  let offsetX, offsetY;
  let isDragging = false;

  dragBox.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - dragBox.offsetLeft;
    offsetY = e.clientY - dragBox.offsetTop;
    dragBox.style.cursor = "grabbing";
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
