import React from "react";
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import medal1 from './../../assets/images/medal1.png'
import medal2 from './../../assets/images/medal2.png'
import './myPoint.css'

function MyPoint (props){
  const navigate = useNavigate();
  const onClickPrev = () => {
    navigate('/account', {state: {CurrentPage: 3}})
  }
  return (
    <>  
      <div className="page justify-between bg-black">
        <div className="header">
          <div className="flex">
            <button className="rounded-full min-w-[50px] mt-[10px] ml-0 p-[5px] bg-transparent hover:outline-none focus:bg-none focus:outline-none hover:bg-[#1d1d1d]" onClick={onClickPrev}><p className=" focus:border-none zmdi zmdi-chevron-left text-white text-4xl"></p></button>
          </div>
          <div className="page-title">
            <div className="animate__animated animate__fadeInUp wow w-full flex text-[24px] font-normal text-white conetent-end" data-wow-duration="0.5s">
              You're on Level 89
            </div>
            <div className="animate__animated animate__fadeInUp wow w-full flex text-[20px] font-normal text-green conetent-end" data-wow-duration="0.5s">
              8871 points
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-0 right-0 bottom-0 w-screen back_content h-[calc(100vh-172px)] bg-[#151d24] rounded-t-2xl">
            <div className="flex w-full justify-between">
              <div className="w-full relative content-center text-center">
                <div className="w-full animate__animated animate__zoomIn wow"  data-wow-duration="0.3s">
                  <img src={medal1}  className="mx-auto w-[60px]"/>
                  <p className="text-medalFont relative -top-12 font-semibold text-[1.5rem]">88</p>
                </div>
                <div className="bg-green h-1">
                  <p className="zmdi zmdi-check md hydrated bg-green rounded-full text-white p-[4px] px-[6px] border-[black] relative text-[0.8rem] font-bold -top-3"></p>
                </div>  
                <p className="text-secondFontColor text-xs top-4 mt-3">8800 points</p>
              </div>
              <div className="w-full relative content-center text-center">
                <div className="w-full animate__animated animate__zoomIn wow"  data-wow-duration="0.3s">
                  <img src={medal1}  className="mx-auto w-[60px]"/>
                  <p className="text-medalFont relative -top-12 font-semibold text-[1.5rem]">89</p>
                </div>
                <div className="bg-green h-1">
                  <p className="zmdi zmdi-check md hydrated bg-green rounded-full text-white p-[4px] border-[black] px-[6px] relative text-[0.8rem] font-bold -top-3"></p>
                </div>  
                <p className="text-secondFontColor text-xs top-4 mt-3">8900 points</p>
              </div>
              <div className="w-full relative content-center text-center">
                <div className="w-full animate__animated animate__zoomIn wow"  data-wow-duration="0.3s">
                  <img src={medal2}  className="mx-auto w-[60px] mt-[18px]"/>
                  <p className="text-medalFont relative -top-12 font-semibold text-[1.5rem]">90</p>
                </div>
                <div className="bg-secondFontColor h-1">
                  <p className="zmdi zmdi-check md hydrated bg-secondFontColor rounded-full text-secondFontColor px-[6px] p-[4px] border-[black] relative text-[0.8rem] font-bold -top-3"></p>
                </div>  
                <p className="text-secondFontColor text-xs top-4 mt-3">9000 points</p>
              </div>
            </div>
            <div className="realtive w-full mt-1 p-5">
              <div className="w-full bg-thirdBackground rounded-full">
                <p className="text-white text-[10px] py-1">
                  Earn 129 more points to reach level 90
                </p>
              </div>
            </div>
            <div className="realtive w-full mt-1 p-5 animate__animated animate__zoomIn" data-wow-duration="0.8s">
              <div className="w-full bg-secondBackground rounded-2xl p-5">
                <p className="text-white text-md font-sans text-left mb-5">
                  How it works?
                </p>
                <div className='w-full h-[60px] flex '>
                  <p className='zmdi zmdi-fire text-green mr-7 px-3 pt-1 rounded-full text-lg h-9 bg-iconBackground'></p>
                  <div className="flex flex-col items-start h-full my-auto w-full content-start">
                    <p className="py-1 p-0 float-left block pt-1 text-white text-xs overflow-hidden box-border">You'll get 10 points on every paid match you joined.</p>
                    <p className="pt-1 p-0 float-left block text-ellipsis pt-1 text-[#53606b] text-[11px] overflow-hidden box-border">i.e joinned 2 match = 20 points</p>
                  </div>
                </div>
                <div className='w-full h-[60px] flex '>
                  <p className='zmdi zmdi-thumb-up text-green mr-7 px-3 pt-1 rounded-full text-lg h-9 bg-iconBackground'></p>
                  <div className="flex flex-col items-start h-full my-auto w-full content-start">
                    <p className="py-1 p-0 float-left block pt-1 text-white text-xs overflow-hidden box-border">If you joined and won the contest you'll get 1.5x of points</p>
                    <p className="pt-1 p-0 float-left block text-ellipsis pt-1 text-[#53606b] text-[11px] overflow-hidden box-border">i.e Earned 300 points x1.5 = 450 points</p>
                  </div>
                </div>
                <div className='w-full h-[60px] flex '>
                  <p className='zmdi zmdi-thumb-down text-green mr-7 px-3 pt-1 rounded-full text-lg h-9 bg-iconBackground'></p>
                  <div className="flex flex-col items-start h-full my-auto w-full content-start">
                    <p className="py-1 p-0 float-left block pt-1 text-white text-xs overflow-hidden box-border">If you joined and won the contest you'll get 1.0x of points</p>
                    <p className="pt-1 p-0 float-left block text-ellipsis pt-1 text-[#53606b] text-[11px] overflow-hidden box-border">i.e Earned 300 points x1.0 = 300 points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}
export default MyPoint;