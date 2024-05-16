import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Tabs from '../../components/tabs/Tabs';
import HeaderImage from './../../assets/images/img_header.png'
import Logo from './../../assets/images/logo_home.png'
import Ball from './../../assets/images/icons/ic_homeact.png'
import MatchComponent from '../../components/matchcomponent/MatchComponent';
import data from './../../utils/json/match.json'


function MyMatches () {
  const navigate = useNavigate();
  const location = useLocation();
  const { CurrentPage } = location.state;
  const [active, setActive] = useState('0')
  const [prev, setPrev] = useState('null')
  const [menu, setMenu] = useState(0);
  const [status, setStatus] = useState(false);
  const menuData = [
    {
      "id": 0,
      "name" : "Football",
      "icon" : "/images/icons/ball1.png"
    },
    {
      "id": 1,
      "name" : "Volleyball",
      "icon" : "/images/icons/ball2.png"
    },
    {
      "id": 2,
      "name" : "Baseball",
      "icon" : "/images/icons/ball3.png"
    },
    {
      "id": 3,
      "name" : "Rugby",
      "icon" : "/images/icons/ball4.png"
    },
  ]
  const onToggle = (e)  => {
    setStatus(!status);
  }
  const onSelect = (e) => () => {
    setMenu(e)
    setStatus(false);
  }
  const upcomingmatches = data.upcomingmatches
  const livematches = data.livematches
  const completedmatches = data.completedmatches

  const onClick = (e) => () => {
    setPrev(active)
    setActive(e)
  }
  onclick = (e) => () =>
  {
    navigate(e);
  }
  const render = (data, event) => {
    return (
       <>
         {data.map((matchData, index) => (
           <div key={index} className='relative my-3' onClick={onclick(event)}>
             <MatchComponent matchData={matchData}/>
           </div>
         ))}
       </>
    );
   }
  return(
    <> 
      <div className="page justify-between bg-black">
        <div className="header">
          <div className='content-none absolute left-0 top-0 w-screen rounded-b-[20px] h-[125px] bg-cover bg-center' style={{ backgroundImage: `url(${HeaderImage})`}}> 
          </div>
          <div className='absolute left-0 top-0 p-5 pt-[17px]  w-full'>
          <div className='bg-none rounded-xl mt-6 mx-0 absolute right-0 left-0 top-11 z-0 w-full'>
              <div className="w-full flex bg-none">
                <div className="absolute flex w-full">
                  <p 
                    className={`${active === '0' ? "invisible " : "text-white"}  text-xs text-center w-full mt-1 p-[16px]`} 
                    data-wow-duration=".4s">
                    UPCOMING<span className="text-secondFontColor text-xs">{" ("+upcomingmatches.length+")"}</span>
                  </p>
                  <p 
                    className={`${active === '1' ? "invisible " : "text-white"}  text-xs text-center w-full mt-1 p-[16px]`} 
                    data-wow-duration=".4s">
                    LIVE<span className="text-secondFontColor text-xs">{" ("+livematches.length+")"}</span>
                  </p>
                  <p 
                    className={`${active === '2' ? "invisible " : "text-white"}  text-xs text-center w-full mt-1 p-[16px]`} 
                    data-wow-duration=".4s">
                    COMPLETED<span className="text-secondFontColor text-xs">{" ("+completedmatches.length+")"}</span>
                  </p>
                </div>
                <div className="w-full h-[38px]">
                  <button 
                    className={`w-full h-[34px] ${active === '0' ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                    mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                    onClick={onClick('0')}
                    data-wow-duration=".6s"
                    >
                    <p className={`${active === '0' ? 'text-black' : 'text-white' }  -mt-1 text-xs text-center`}>
                      UPCOMING
                      <span className="text-secondFontColor text-xs">{" ("+completedmatches.length+")"}</span>
                      </p>
                  </button>
                </div>
                <div className="w-full h-[38px]">
                  <button 
                    className={`w-full h-[34px] ${active === '1' ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                    mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                    onClick={onClick('1')}
                    data-wow-duration=".6s"
                    >
                    <p className={`${active === '1' ? 'text-black' : 'text-white' }  -mt-1 text-xs text-center`}>
                      LIVE
                      <span className="text-secondFontColor text-xs">{" ("+completedmatches.length+")"}</span>
                    </p>
                  </button>
                </div>
                <div className="w-full h-[38px]">
                  <button 
                    className={`w-full h-[34px] ${active === '2' ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                    mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                    onClick={onClick('2')}
                    data-wow-duration=".6s"
                    >
                    <p className={`${active === '2' ? 'text-black' : 'text-white' }  -mt-1 text-xs text-center`}>
                      COMPLETED
                      <span className="text-secondFontColor text-xs">{" ("+completedmatches.length+")"}</span>
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className='flex justify-between w-full z-10'>
              <img src={Logo} className='h-[20px] mt-[5px]'/>
              <div className='content-center z-100 w-[160px]'>
                  <div className='flex content-center cursor-pointer bg-secondBackground px-1 rounded-xl' onMouseDown={onToggle}>
                    <img src={menuData[menu]["icon"]} className='h-[15px] mt-[6px] mx-1'/>
                    <p className='text-white text-[18px] mx-1 w-full text-left'>{menuData[menu]["name"]}</p>
                    <p className='text-white text-[25px] mx-1 mt-[2x] zmdi zmdi-chevron-down' />
                  </div>
                  <div className={`${status ? "" : "hidden"} w-[160px] bg-white opacity-90 rounded-xl cursor-pointer z-100`}>
                    {menuData.map((menu, index)=> (
                      <div key={index} className='flex content-center' onClick={onSelect(menu.id)}>
                        <img src={menu.icon} className='h-[15px] mt-[6px] mx-1'/>
                        <p className='text-black text-[18px] mx-1 w-full text-left'>{menu.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div>
        <div className="absolute h-[calc(100vh-160px)] w-screen left-0 right-0 bottom-0  bg-black animate__animated animate__fadeInUp wow overflow-y-auto " data-wow-duration=".8s">
          <div className="px-[24px]" >
            <div className="relative ">
              <div className={`pb-[60px] absolute w-full ${active === '0' ? (prev === '1' ? " animate__animated animate__slideInRight wow" : "animate__animated animate__slideInLeft ") : "invisible"} `} data-wow-duration=".4s">
                {render(upcomingmatches, "/upcomingmatchinfo")}
              </div>
              <div className={`pb-[60px] absolute w-full ${active === '1' ? (prev === '0' ? " animate__animated animate__slideInLeft wow" : "animate__animated animate__slideInRight ") : "invisible"}`} data-wow-duration=".4s">
                {render(livematches, "/livematchinfo")}
              </div>
              <div className={`pb-[60px] absolute w-full ${active === '2' ? (prev === '1' ? " animate__animated animate__slideInLeft wow" : "animate__animated animate__slideInRight ") : "invisible"}`} data-wow-duration=".4s">
                {render(completedmatches, "/completedmatchinfo")}
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

export default MyMatches;