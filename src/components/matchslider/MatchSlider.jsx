import React from "react";

function MatchSlider () {
  let slider = document.querySelector('.slider');
  let isDragging = false;
  let startPos =  0;
  let currentTranslate =  0;
  let prevTranslate =  0;
  const onmousedown = () => {
    startPos = event.clientX;
    isDragging = true;
  }

  const onmouseleave = () => {
    isDragging = false;
  }
  const onmouseup = ()=>{
    isDragging = false;
  }
 

  const onmousemove = (event) => {
    if (!isDragging) return;
    const currentPosition = event.clientX;
    currentTranslate = prevTranslate + currentPosition - startPos;
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }
    

  return(
    <div>
      <div className="slider-container overflow-hidden relative w-full md:w-1/2">
        <div className="slider w-full flex" onMouseDown={onmousedown} onMouseLeave={onmouseleave} onMouseUp={onmouseup} onMouseMove={onmousemove}>
          <div className="slide w-full flex-shrink-0">Slide  1</div>
          <div className="slide w-full flex-shrink-0">Slide  2</div>
          <div className="slide w-full flex-shrink-0">Slide  3</div>
        </div>
      </div>
    </div>
  )
}
export default MatchSlider;