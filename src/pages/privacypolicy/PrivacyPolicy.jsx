import React from "react";
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import BackgroundImage from './../../assets/images/bg.png'

function PricacyPolicy (props){
  const navigate = useNavigate();
  const onClick = () => {
    navigate ('/home', {state:{
      CurrentPage: 0
    }})
  }
  
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
              Privacy & Policy
            </div>
            <div className="animate__animated animate__fadeInUp wow w-full flex text-[20px] font-normal text-[#53606b] conetent-end" data-wow-duration="0.5s">
              How we work
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-0 bottom-0 right-0 h-[calc(100vh-122.2px)] bg-tabBackground w-screen animate__animated animate__fadeInUp wow content" data-wow-duration=".8s">
          <div className="w-full p-6 pt-7">
              <p className="text-left text-white text-lg pb-4">
                Who we are?
              </p>
              <p className="text-left text-white text-md pb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-left text-white text-lg pb-4">
              How we started?
              </p>
              <p className="text-left text-white text-md pb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-left text-white text-lg pb-4">
              Who we are?
              </p>
              <p className="text-left text-white text-md pb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-left text-white text-lg pb-4">
              How we started?
              </p>
              <p className="text-left text-white text-md pb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>            
        </div>
      </div>  
    </>
  )
}
export default PricacyPolicy;