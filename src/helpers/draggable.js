export const makeDraggable = (id) => {
  const elmnt = document.querySelector(id);
  let currentPosX = 0,
    currentPosY = 0,
    previousPosX = 0,
    previousPosY = 0;

  if (elmnt.querySelector(".soundPlayer-draggable-btn")) {
    elmnt.querySelector(".soundPlayer-draggable-btn").onmousedown =
      dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e.preventDefault();
    previousPosX = e.clientX;
    previousPosY = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    currentPosX = previousPosX - e.clientX;
    currentPosY = previousPosY - e.clientY;
    previousPosX = e.clientX;
    previousPosY = e.clientY;
    elmnt.style.top = elmnt.offsetTop - currentPosY + "px";
    elmnt.style.left = elmnt.offsetLeft - currentPosX + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
};
