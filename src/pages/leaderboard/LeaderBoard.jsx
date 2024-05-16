import {useState} from "react";
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import data from './../../utils/json/data.json'

function LeaderBoard (){
  const navigate = useNavigate();
  const onClickPrev = () => {
    navigate('/account', {state: {CurrentPage: 3}})
  }
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState(false);
  const menuData = [
    {
      "id": 0,
      "name" : "Option1",
    },
    {
      "id": 1,
      "name" : "Option2",
    },
    {
      "id": 2,
      "name" : "Option3",
    },
    {
      "id": 3,
      "name" : "Option4",
    },
  ]
  
  const onToggle = (e)  => {
    setStatus(!status);
  }
  const onSelect = (e) => () => {
    setActive(e)
    setStatus(false);
  }
  const leaderboards = data.leaderboard
  return (
    <>  
      <div className="page justify-between bg-black">
        <div className="header">
          <div className="flex">
            <button className="rounded-full min-w-[50px] mt-[10px] ml-0 p-[5px] bg-transparent hover:outline-none focus:bg-none focus:outline-none hover:bg-[#1d1d1d]" onClick={onClickPrev}><p className=" focus:border-none zmdi zmdi-chevron-left text-white text-4xl"></p></button>
          </div>
          <div className="flex p-2 bg-[#151d24]">
            <div className='flex justify-between w-full px-4'>
              <p className='text-[#b3b3b3] text-[0.8rem] pt-1'>
                  Leaderboard
              </p>
            </div>
            <div className='content-center z-100 w-[90px] mt-1 right-4 absolute'>
              <div className='flex content-center cursor-pointer bg-secondBackground px-1 rounded-xl' onMouseDown={onToggle}>
                <p className='text-white text-[12px] mx-1 w-full text-left'>{menuData[active]["name"]}</p>
                <p className= {`text-white text-[13px] mx-1 pt-1 mt-[2x] zmdi ${status ? "zmdi-chevron-up" : "zmdi-chevron-down"} `}/>
              </div>
              <div className={`${status ? "" : "hidden"} w-[160px] bg-white opacity-90 rounded-xl cursor-pointer`}>
                {menuData.map((menu, index)=> (
                  <div key={index} className='flex content-center' onClick={onSelect(menu.id)}>
                    <p className='text-black text-[12px] mx-1 w-full text-left'>{menu.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 w-screen back_content h-[calc(100vh-125px)] bg-black overflow-y-auto scrollable-content z-0">
          <div className="grid grid-cols-[60%_20%_20%] gap-4 border-b-[1px] border-[#2d343a]">
            <div className="w-full">
              <p className="text-secondFontColor text-left py-3 p-6 text-xs pt-2 ">Leaderboard</p>
            </div>
            <div className="w-full"><p className="text-secondFontColor  py-3 p-6 text-xs">POINTS</p></div>
            <div className="w-full"><p className="text-secondFontColor  py-3 p-6 text-xs">#RANK</p></div>
          </div>
        </div>
        <div className=" w-full absolute left-0 right-0 top-[170px] ">
          {leaderboards.map((item, index) => (
            <div key={index} className="grid grid-cols-[60%_20%_20%] gap-4 border-b-[1px] border-[#2d343a]">
              <div className="w-full">
                <div className='w-full px-6 py-2 flex'>
                  <img src={item.img} className="rounded-full w-11 h-11 mr-2"/>
                  <div className="flex flex-col items-start h-full my-auto w-full content-start">
                    <p className="py-1 p-0 float-left block pt-1 text-white text-sm overflow-hidden box-border text-[10px] font-sans font-poppins">{item.name} <span className="text-secondFontColor text-xs">{"("+item.team+")"}</span></p>
                    <p className="pb-1 p-0 float-left block text-ellipsis text-[#53606b] text-xs overflow-hidden box-border">{item.status}</p>
                  </div>  
                </div>
              </div>
              <div className="w-full"><p className="text-white my-auto pt-6 p-6 text-xs">{item.point}</p></div>
              <div className="w-full"><p className="text-white  pt-6 p-6 text-xs">{item.rank}</p></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default LeaderBoard;