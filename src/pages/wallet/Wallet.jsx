import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Tabs from '../../components/tabs/Tabs';
import './Wallet.css'

function Wallet (props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { CurrentPage } = location.state;
  
  return(
    <>
      <div>
        <div className="page justify-between bg-black">
          <div className="header ">
            <div className="flex">
              <div className="rounded-full min-w-[50px] mt-[10px] ml-0 p-[22px] pb-[14px] bg-transparent hover:outline-none focus:bg-none focus:outline-none">
                <p className=" focus:border-none text-white text-md font-semibold"> Wallet</p>
              </div>
            </div>
            <div className="page-title">
              <div className="animate__animated animate__fadeInUp wow w-full flex text-[24px] font-semibold text-white conetent-end" data-wow-duration="0.5s">
                $159.50
              </div>
              <div className="animate__animated animate__fadeInUp wow w-full flex text-[20px] font-normal text-[#53606b] conetent-end" data-wow-duration="0.5s">
                In less that a minute
              </div>
            </div>
          </div>
          <div>
            <div className="absolute left-0 bottom-0 w-screen animate__animated animate__fadeInUp wow back_content h-[calc(100vh-182px)] bg-[#151d24] rounded-t-2xl" data-wow-duration=".8s">
              <div className="button_container w-full relative z-[1] rounded-t-lg min-h-[78px] bottom-0 m-0 overflow-hidden">
                <div className="w-full flex flex-between py-[18px]  animate__animated animate__fadeInUp wow" data-wow-duration=".8s">
                  <div className="w-full mx-2 opacity-[1] hover:border-none hover:opacity-[1] rounded-none min-h-[45px]">
                    <div className=" text-white text-[1.4rem] z-50 float-left">
                    <p className="zmdi zmdi-long-arrow-down text-[20px] px-6 py-4 text-green-500 flex" >&nbsp;&nbsp;<p className="text-sm font-sans text-white">Add Money</p></p>
                    </div>
                  </div>
                  <div className="w-full mx-2opacity-[1] hover:border-none hover:opacity-[1] rounded-none min-h-[45px] ">
                    <div className=" text-white text-[1.4rem] z-50 float-right">
                      <p className="zmdi zmdi-long-arrow-up text-[20px] px-6 py-4 text-green-500 flex" >&nbsp;&nbsp;<p className="text-sm font-sans text-white">Sent to Bank</p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-0 bottom-0 w-screen animate__animated animate__fadeInUp wow back_content h-[calc(100vh-262px)] bg-black rounded-t-2xl pb-[60px] overflow-y-auto scrollable-content" data-wow-duration=".8s">
              <div>
                <div className='w-full p-4'>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-white text-sm font-serif'>Won a contest</p>
                    <p className='text-fontEarn text-sm'>$20</p>
                  </div>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-secondFontColor text-[10px] font-serif'>WLS vs GGS</p>
                    <p className='text-fontEarn text-[10px]'>26 May, 9:58 am</p>
                  </div>
                </div>
                <div className='w-full p-4'>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-white text-sm font-serif'>Add to Walle</p>
                    <p className='text-fontEarn text-sm'>$120</p>
                  </div>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-secondFontColor text-[10px] font-serif'>WLS vs GGS</p>
                    <p className='text-fontEarn text-[10px]'>26 May, 9:58 am</p>
                  </div>
                </div>
                <div className='w-full p-4'>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-white text-sm font-serif'>Joined a Contest</p>
                    <p className='text-fontLost text-sm'>$120</p>
                  </div>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-secondFontColor text-[10px] font-serif'>WLS vs GGS</p>
                    <p className='text-secondFontColor text-[10px]'>26 May, 9:58 am</p>
                  </div>
                </div>
                <div className='w-full p-4'>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-white text-sm font-serif'>Add to Walle</p>
                    <p className='text-fontEarn text-sm'>$80</p>
                  </div>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-secondFontColor text-[10px] font-serif'>WLS vs GGS</p>
                    <p className='text-fontEarn text-[10px]'>26 May, 9:58 am</p>
                  </div>
                </div>
                <div className='w-full p-4'>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-white text-sm font-serif'>Joined a Contest</p>
                    <p className='text-fontLost text-sm'>$60</p>
                  </div>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-secondFontColor text-[10px] font-serif'>WLS vs GGS</p>
                    <p className='text-secondFontColor text-[10px]'>26 May, 9:58 am</p>
                  </div>
                </div>
                <div className='w-full p-4'>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-white text-sm font-serif'>Add to Walle</p>
                    <p className='text-fontEarn text-sm'>$230</p>
                  </div>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-secondFontColor text-[10px] font-serif'>WLS vs GGS</p>
                    <p className='text-fontEarn text-[10px]'>26 May, 9:58 am</p>
                  </div>
                </div>
                <div className='w-full p-4'>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-white text-sm font-serif'>Joined a Contest</p>
                    <p className='text-fontLost text-sm'>$1120</p>
                  </div>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-secondFontColor text-[10px] font-serif'>WLS vs GGS</p>
                    <p className='text-secondFontColor text-[10px]'>26 May, 9:58 am</p>
                  </div>
                </div>
                <div className='w-full p-4'>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-white text-sm font-serif'>Won a contest</p>
                    <p className='text-fontEarn text-sm'>$220</p>
                  </div>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-secondFontColor text-[10px] font-serif'>WLS vs GGS</p>
                    <p className='text-fontEarn text-[10px]'>26 May, 9:58 am</p>
                  </div>
                </div>
                <div className='w-full p-4'>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-white text-sm font-serif'>Joined a Contest</p>
                    <p className='text-fontLost text-sm'>$1120</p>
                  </div>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-secondFontColor text-[10px] font-serif'>WLS vs GGS</p>
                    <p className='text-secondFontColor text-[10px]'>26 May, 9:58 am</p>
                  </div>
                </div>
                <div className='w-full p-4'>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-white text-sm font-serif'>Add to Wallet</p>
                    <p className='text-fontEarn text-sm'>$10</p>
                  </div>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-secondFontColor text-[10px] font-serif'>WLS vs GGS</p>
                    <p className='text-secondFontColor text-[10px]'>26 May, 9:58 am</p>
                  </div>
                </div>
                <div className='w-full p-4'>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-white text-sm font-serif'>Add to Wallet</p>
                    <p className='text-fontEarn text-sm'>$120</p>
                  </div>
                  <div className='h-[16px] flex w-full justify-between p-4'>
                    <p className='text-secondFontColor text-[10px] font-serif'>WLS vs GGS</p>
                    <p className='text-secondFontColor text-[10px]'>26 May, 9:58 am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div className='absolute left-0 bottom-0'>
        <Tabs
          CurrentPage= {CurrentPage}
        />
      </div>
    </>
  )
}

export default Wallet;