import React from "react";
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import './SignIn.css'
import Logo from './../../assets/images/logo.png'
import BackgroundImage from './../../assets/images/bg.png'
function onClick(e){
  
}
function SignIn (){
  const navigate = useNavigate();
  function onClick(e){
    navigate('/register')
  }
  return (
    <>
      <div className="absolute top-[19%] left-0 right-0 px-0 px-[20px] bg- mx-auto mb-[25px] w-[168px] h-auto z-[999]">
        <img src={Logo} className="block mx-auto  animate__animated animate__zoomIn wow" data-wow-duration="0.3s"/>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen ">
        <div className="flex overflow-hidden">
          <img src={BackgroundImage} className="absolute min-w-full min-h-full top-0 bottom-0 left-0 right-0 m-auto" />
        </div>
      </div> 
      <div>
        <div className="absolute left-0 bottom-0 w-screen">
          <div className="footer_container border-0 left-0 absolute bottom-0 w-screen overflow-y-auto rounded-t-lg rounded-b-none backdrop-blur-xl">
          <div className="block overflow-hidden relative mx-auto w-full z-99 animate__animated animate__fadeInUp wow" data-wow-duration=".8s">
              <div className="specific m-0 p-0 pt-[26px]">
                <h2 className="animate__animated animate__fadeInUp wow  text-white text-[0.95rem]   text-base " data-wow-duration="0.5s">Let's play</h2>
              </div>
              <div className="animate__animated animate__fadeInUp wow px-[24px]" data-wow-duration=".8s">
                <div className="p-0 m-0">
                  <div>
                    <p className=" float-left block text-var() font-var(--ion-font-family) text-ellipsis whitespace-nowrap overflow-hidden box-border">Phone Number</p>
                    <div className="flex w-full justify-between border-b-[1px] pb-[3px] mb-[40px]">
                      <h3 className="text-white text-lg pr-4">+1 </h3>
                      <div className="w-full">
                        <input type="number" placeholder="Enter Phone Number" maxLength={10} className="text-white text-lg appearance-none bg-transparent border-0 outline-none p-0 m-0 w-full max-w-full max-h-full flex-1 flex-shrink-0" />
                      </div>
                    </div>
                    <button className="rounded-full bg-[#25cb3c] text-white m-0 text-xl w-full font-semibold uppercase h-[55px]" onClick={onClick}>
                      Continue
                    </button>
                    <h3 className="py-[20px] text-white animate__animated animate__fadeInUp wow" data-wow-duration=".8s"> Or Continue With</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="button_container w-full relative z-[1] rounded-t-lg bg-[#88888882] min-h-[78px] bottom-0 m-0 overflow-hidden">
              <div className="w-full flex flex-between py-[18px]  animate__animated animate__fadeInUp wow" data-wow-duration=".8s">
                <div className="w-full mx-2 hover:bg-[#88888882] opacity-[1] hover:bg-[#53606b] hover:border-none hover:opacity-[1] rounded-none min-h-[45px]">
                  <div className=" text-white text-[1.4rem] z-50" onClick={onClick}>
                  <p className="zmdi zmdi-facebook text-[16px] py-4" style={{ color: 'white' }}>&nbsp;&nbsp;Facebook</p>
                  </div>
                </div>
                <div className="w-full mx-2 hover:bg-[#88888882] opacity-[1] hover:bg-[#53606b] hover:border-none hover:opacity-[1] rounded-none min-h-[45px]">
                  <div className=" text-white text-[1.4rem] z-50" onClick={onClick}>
                    <p className="zmdi zmdi-google text-sm py-4" style={{ color: 'white' }} >&nbsp;&nbsp;Google</p>
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
export default SignIn;