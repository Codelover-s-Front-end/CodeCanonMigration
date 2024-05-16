import React from "react";
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import './Register.css'
import Logo from './../../assets/images/logo.png'
import BackgroundImage from './../../assets/images/bg.png'

function Register (){
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/verification')
  }
  const onClickPrev = () => {
    navigate('/')
  }
  return (
    <>  
      <div className="fixed top-0 left-0 w-full h-screen">
        <div className="flex overflow-hidden">
          <img src={BackgroundImage} className="absolute min-w-full min-h-full top-0 bottom-0 left-0 right-0 m-auto" />
        </div>
      </div>  
      <div className="page justify-between">
        <div className="header">
          <div className="flex">
            <button className="rounded-full min-w-[50px] mt-[10px] ml-0 p-[5px] bg-transparent hover:outline-none focus:bg-none focus:outline-none hover:bg-[#1d1d1d]" onClick={onClickPrev}><p className=" focus:border-none zmdi zmdi-chevron-left text-white text-4xl"></p></button>
          </div>
          <div className="page-title">
            <div className="animate__animated animate__fadeInUp wow w-full flex text-[24px] font-normal text-white conetent-end" data-wow-duration="0.5s">
              Register
            </div>
            <div className="animate__animated animate__fadeInUp wow w-full flex text-[20px] font-normal text-[#53606b] conetent-end" data-wow-duration="0.5s">
              In less that a minute
            </div>
          </div>
        </div>
        <div>
        <div className="absolute left-0 bottom-0 w-screen animate__animated animate__fadeInUp wow content" data-wow-duration=".8s">
          <div className="footer_container content border-0 left-0 absolute bottom-0 h-screen w-screen overflow-y-auto rounded-t-lg rounded-b-none backdrop-blur-xl">
            <div className="block overflow-hidden  mx-auto w-full h-full z-99 animate__animated animate__fadeInUp wow" data-wow-duration=".8s">
              <div className="specific m-0 p-0 pt-[26px]">
                <h2 className="animate__animated animate__fadeInUp wow  text-white text-[0.95rem]   text-base " data-wow-duration="0.5s">Let's play</h2>
              </div>
              <div className="animate__animated animate__fadeInUp wow px-[24px]" data-wow-duration=".8s">
                <div className="p-0 m-0">
                  <div>
                    <p className=" float-left block text-var() font-var(--ion-font-family) text-ellipsis text-[#53606b] whitespace-nowrap overflow-hidden box-border">Full Name</p>
                    <div className="flex w-full justify-between border-b-[1px] pb-[3px] mb-[40px]">
                        <input type="text" placeholder="Enter Full Name" className="text-white text-lg appearance-none bg-transparent border-0 outline-none p-0 m-0 w-full max-w-full max-h-full flex-1 flex-shrink-0" />
                    </div>
                  </div>
                  <div>
                    <p className=" float-left block text-var() font-var(--ion-font-family) text-ellipsis text-[#53606b] whitespace-nowrap overflow-hidden box-border">Email Address</p>
                    <div className="flex w-full justify-between border-b-[1px] pb-[3px] mb-[40px]">
                        <input type="email" placeholder="Enter Email Address" className="text-white text-lg appearance-none bg-transparent border-0 outline-none p-0 m-0 w-full max-w-full max-h-full flex-1 flex-shrink-0" />
                    </div>
                  </div>
                  <div>
                    <p className=" float-left block text-var() font-var(--ion-font-family) text-[#53606b] text-ellipsis whitespace-nowrap overflow-hidden box-border">Phone Number</p>
                    <div className="flex w-full justify-between border-b-[1px] pb-[3px] mb-[40px]">
                      <h3 className="text-white text-lg pr-4">+1 </h3>
                      <div className="w-full">
                        <input type="number" placeholder="Enter Phone Number" className="text-white text-lg appearance-none bg-transparent border-0 outline-none p-0 m-0 w-full max-w-full max-h-full flex-1 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className=" float-left block text-var() font-var(--ion-font-family) text-ellipsis text-[#53606b] whitespace-nowrap overflow-hidden box-border">Birth Date</p>
                    <div className="flex w-full justify-between border-b-[1px] pb-[3px] mb-[40px]">
                      <h3 className="text-white text-lg p-0"></h3>
                      <div className="w-full">
                        <input type="date" placeholder="Enter Phone Number" className="text-white text-lg appearance-none bg-transparent border-0 outline-none p-0 m-0 w-full max-w-full max-h-full flex-1 flex-shrink-0" />
                      </div>    
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full absolute z-[1] rounded-t-lg min-h-[78px] bottom-0 m-0 overflow-hidden p-7">
              <h3 className="py-[20px] text-[#53606b] animate__animated animate__fadeInUp wow" data-wow-duration=".8s"> Will Send Verification Code</h3>
              <button className="rounded-full bg-[#25cb3c] text-white m-0 text-xl w-full font-semibold uppercaseh-[55px]" onClick={onClick}>
                Continue
              </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      </div>  
    </>
  )
}
export default Register;