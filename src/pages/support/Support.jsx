import React from "react";
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import BackgroundImage from './../../assets/images/bg.png'

function Support (props){
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
              Support
            </div>
            <div className="animate__animated animate__fadeInUp wow w-full flex text-[20px] font-normal text-[#53606b] conetent-end" data-wow-duration="0.5s">
              Contact us
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-0 bottom-0 right-0 h-[calc(100vh-122.2px)] bg-tabBackground w-screen animate__animated animate__fadeInUp wow content" data-wow-duration=".8s">
            <div className="button_container w-full relative z-[1] rounded-t-lg bg-tabBackground min-h-[78px] bottom-0 m-0 overflow-hidden">
              <div className="w-full flex flex-between py-[18px]  animate__animated animate__fadeInUp wow" data-wow-duration=".8s">
                <div className="w-full mx-2  opacity-[1] hover:bg-[#53606b] hover:border-none hover:opacity-[1] rounded-none min-h-[45px]">
                  <div className=" text-white text-[1.4rem] z-50" onClick={onClick}>
                  <p className="zmdi zmdi-phone text-[18px] py-4" style={{ color: 'white' }}>&nbsp;&nbsp;Call us</p>
                  </div>
                </div>
                <div className="w-full mx-2  opacity-[1] hover:bg-[#53606b] hover:border-none hover:opacity-[1] rounded-none min-h-[45px]">
                  <div className=" text-white text-[1.4rem] z-50" onClick={onClick}>
                    <p className="zmdi zmdi-email text-[18px] py-4" style={{ color: 'white' }} >&nbsp;&nbsp;Mail us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative top-20 bottom-0 bg-black w-screen animate__animated animate__fadeInUp wow content" data-wow-duration=".8s">
            <div className="p-6">
              <div className="w-full py-2">
                <p className="w-full text-left text-white text-2xl font-sans py-2">Write us</p>
                <p className="w-full text-left text-secondFontColor text-md py-2">let us know your query</p>
              </div>
              <div>
                <p className=" float-left block text-var() font-var(--ion-font-family) text-[#53606b] text-ellipsis whitespace-nowrap overflow-hidden box-border">Phone Number/Email</p>
                <div className="flex w-full justify-between border-b-[1px] pb-[3px] mb-[40px]">
                  <h3 className="text-white text-lg pr-4">+1 </h3>
                  <div className="w-full">
                    <input type="text" placeholder="Add Contact Info" className="text-white text-lg appearance-none bg-transparent border-0 outline-none p-0 m-0 w-full max-w-full max-h-full flex-1 flex-shrink-0" />
                  </div>
                </div>
              </div>
              <div>
                <p className=" float-left block text-var() font-var(--ion-font-family) text-[#53606b] text-ellipsis whitespace-nowrap overflow-hidden box-border">Add your issue & feedback</p>
                <div className="flex w-full justify-between border-b-[1px] pb-[3px] mb-[40px]">
                  <h3 className="text-white text-lg pr-4">+1 </h3>
                  <div className="w-full">
                    <input type="number" placeholder="Enter your message" className="text-white text-lg appearance-none bg-transparent border-0 outline-none p-0 m-0 w-full max-w-full max-h-full flex-1 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          <div className="w-full absolute z-[1] rounded-t-lg min-h-[78px] bottom-0 m-0 overflow-hidden p-7">
              <button className="rounded-full bg-[#25cb3c] text-white m-0 text-xl w-full font-semibold uppercase h-[55px]" onClick={onClick}>
                Submit
              </button>
            </div>
        </div>
      </div>  
    </>
  )
}
export default Support;