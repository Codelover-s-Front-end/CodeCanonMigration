import React from "react";
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import Accordion from "../../components/accordion/Accordion";
import data from './../../utils/json/data.json'

function Faqs (props){
  const navigate = useNavigate();
  
  const onClickPrev = () => {
    navigate('/account', {state: {CurrentPage: 3}})
  }
  return (
    <>  
      <div className="page  bg-black">
        <div className="header">
          <div className="flex">
            <button className="rounded-full min-w-[50px] mt-[10px] ml-0 p-[5px] bg-transparent hover:outline-none focus:bg-none focus:outline-none hover:bg-[#1d1d1d]" onClick={onClickPrev}><p className=" focus:border-none zmdi zmdi-chevron-left text-white text-4xl"></p></button>
          </div>
          <div className="page-title">
            <div className="animate__animated animate__fadeInUp wow w-full flex text-[24px] font-normal text-white conetent-end" data-wow-duration="0.5s">
              FAQs
            </div>
            <div className="animate__animated animate__fadeInUp wow w-full flex text-[20px] font-normal text-[#53606b] conetent-end" data-wow-duration="0.5s">
              Get your answers
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-0 bottom-0 right-0 h-[calc(100vh-122.2px)] bg-tabBackground w-screen animate__animated animate__fadeInUp wow content" data-wow-duration=".8s">
            <div className="w-full p-6 pt-7">
              <div>
                <Accordion data={data.faqs}/>
              </div>
            </div>
          </div>            
        </div>
      </div>  
    </>
  )
}
export default Faqs;