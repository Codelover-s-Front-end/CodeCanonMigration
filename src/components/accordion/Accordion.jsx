import React, {useState} from "react";

function Accordion (props) {
  let accordiondata= props.data;
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
 };
  return(
    <>
      <div className="accordion">
        {accordiondata.map((item, index) => (
          <div key={index} className="accordion-item bg-tabBackground">
            <button 
              onClick={() => toggleAccordion(index)} 
              className="accordion-header bg-tabBackground p-4 w-full text-left focus:outline-none hover:outline-none"
            >
              <div className="w-full flex justify-between">
                <span className="accordion-title text-white text-left w-full">{item.title}</span>
                <i className={`zmdi ${activeIndex === index ? 'zmdi-chevron-up' : 'zmdi-chevron-down'} text-white`}></i>
              </div>
              
            </button>
            {activeIndex === index && (
              <div className="accordion-content bg-none p-4">
                <p className="text-white text-left">
                  {item.body}
                </p>
              </div>
            )}
          </div>
        ))}
    </div>
    </>
  )
}

export default Accordion;