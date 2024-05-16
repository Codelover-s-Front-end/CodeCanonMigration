import { useState } from "react";
import LeaderBoard from "../../components/myMatchesComponents/Leaderboard";
import Winnings from "../../components/myMatchesComponents/Winnings";
import States from "../../components/myMatchesComponents/States";
import data from './../../utils/json/member.json'
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import BackgroundImage from './../../assets/images/ground.png'
import team_1 from './../../assets/images/team_logo/team_1.png'
import team_2 from './../../assets/images/team_logo/team_2.png'

function CompletedMatchInfo (){
  const navigate = useNavigate();
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState('null')
  const [isOpen, setIsOpen] = useState(false);
  const onClick = (e) => () => {
    setPrev(active)
    setActive(e)
  }
  const handleWinning = () => {
    setIsOpen(true);
  }
  const getTotalPoints = () =>{
    let total = 0
    for( let i = 0; i< member.events.length; i++){
      total += member.events[i]["points"]
    }
    return total
  }
  const onClickPrev = () => {
    navigate ('/mymatches', {state:{
      CurrentPage: 1
    }})
  }
  const matchData = {
    'league': "Premier League",
    'title': "LIVE",
    'left_team' : {
      'team_Id': 2,
      'team_logo': team_2,
      'team_name': "GREAT GORILLAS",
      'team_shortname' : 'GGS',
      'team_color' : "rgba(131, 23, 71, 1)"
    },
    'right_team': {
      'team_Id': 1,
      'team_logo': team_1,
      'team_name': "POWER PANDAS",
      'team_shortname' : 'PPD',
      'team_color' : "rgba(72,140,23,1)"
    }
  }
  
  let leftcolor = matchData.left_team.team_color.split(' ').join("")
  let rightcolor = matchData.right_team.team_color.split(' ').join("")
  let leftstyle = `linear-gradient(270deg, rgba(13, 14, 15, 0) 10%, ${leftcolor} 100%)`
  let rightstyle = `linear-gradient(90deg, rgba(13, 14, 15, 0) 10%, ${rightcolor} 100%)`
  const member = data.memberinfo
  return (
    <> 
    {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pb-4 px-4 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={() => setIsOpen(false)}>
              <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>
            <div className="absolute bottom-0 sm:bottom-40 left-0 right-0 m-auto bg-[#0d0e0f] w-[100%] sm:min-w-[640px] rounded-t-lg overflow-hidden sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-modalHeader  sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className='w-[120px]'>
                    <img src={member.img} className='h-24 rounded-full'/>
                  </div>
                  <div className='w-full pl-8'>
                    <div>
                      <p className='text-white text-md font-bold text-left'>
                        {member.name}
                      </p>
                      <div className='w-full flex space-x-3'>
                        <p className='text ont-bold  text-purple-900 text-sm uppercase'>{member.position}</p>
                        <p className='text-xs w-[4px]'>|</p>
                        <p className='text-left font-bold  text-secondFontColor text-sm' >{member.role}</p>
                      </div>
                    </div>
                    <div className='w-full flex py-2'>
                      <div className='w-full flex'>
                        <div className='w-full'>
                          <p className='text-secondFontColor text-left font-bold text-xs'>
                            POINT
                          </p>
                          <p className='text-white font-bold text-left text-sm'>
                            {member.sell}
                          </p>
                        </div>
                        <div className='w-full'>
                          <p className='text-secondFontColor text-left font-bold text-xs'>
                            CREDIT
                          </p>
                          <p className='text-white font-bold text-left text-sm'>
                            {member.credit}
                          </p>
                        </div>
                        <div className='w-full'>
                          <p className='text-secondFontColor text-left font-bold text-xs'>
                            SELL BY
                          </p>
                          <p className='text-white font-bold text-left text-sm'>
                            {member.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-memberInfo bg-black h-8 pt-2 px-2">
                <p className="text-left text-secondFontColor text-xs uppercase"> event</p>
                <p className="text-center text-secondFontColor text-xs uppercase"> actual</p>
                <p className="text-right text-secondFontColor text-xs uppercase"> point</p>
                </div>
              <div className="bg-[#121314] h-[80%] sm:h-[400px] overflow-y-auto">
                
                {member.events.map((event, index) => (
                  <div key={index} className='py-2 relative grid h-8 border-black bg-fourthBackground grid-cols-memberInfo px-2'>
                    <p className="text-left text-white text-xs uppercase">{event.event}</p>
                    <p className="text-center text-white text-xs uppercase"> {event.actual}</p>
                    <p className="text-right text-white text-xs uppercase"> {event.points}</p>
                  </div>
                ))}
                <div className="grid grid-cols-memberInfo bg-black h-8 pt-2 px-2">
                  <p className="text-left text-secondFontColor text-xs uppercase"> total</p>
                  <p className="text-center text-secondFontColor text-xs uppercase"> </p>
                  <p className="text-right text-secondFontColor text-xs uppercase">{getTotalPoints()}</p>
                  </div>
                <div className="bg-[#121314] h-[80%] sm:h-[400px] overflow-y-auto"></div>
              </div>
            </div>
          </div>
        </div>
      )}      
      <div className="page bg-cover" style={{ backgroundImage: `url(${BackgroundImage})`  }}>
        <div className="header">
          <div className="flex justify-between ">
            <div className="float-left text-left">
              <button className="rounded-full min-w-[50px] py-1  bg-transparent hover:outline-none focus:bg-none focus:outline-none hover:bg-[#1d1d1d]" onClick={onClickPrev}><p className=" focus:border-none zmdi zmdi-chevron-left text-white text-4xl"></p></button>
            </div>
            <p className="w-full text-white text-md font-sans place-self-center">Match Completed</p>
            <p className="min-w-[50px]" />
          </div>
          <div className="w-full flex bg-black rounded-t-xl overflow-hidden">
            <div className="w-full h-[104px]" style={{ background: leftstyle }}>
              <div>
                <div className="p-0 m-0">
                  <p className="pt-3 pl-3 float-left block text-ellipsis text-white text-[10px] overflow-hidden box-border">{matchData.left_team.team_name}</p>
                  <div className="pl-3 flex w-full align-middle">
                    <img src={matchData.left_team.team_logo} className='h-10 w-10'/>
                    <p className='ml-3 my-auto text-white text-xs font-normal'>{matchData.left_team.team_shortname}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute z-[99] top-20 left-0 right-0 w-fit h-fit m-auto text-xs text-white'>
              90 mins
              <p className='text-xs text-white text-center mt-[10px]'>
                7 : 6
              </p>
            </div>
            <div className="w-full flex justify-end h-[104px]" style={{ background: rightstyle }}>
              <div className="p-0 m-0 flex justify-end">
                <div>
                    <p className="pt-3 pr-3 text-ellipsis text-white text-[10px] overflow-hidden box-border">{matchData.right_team.team_name}</p>
                    <div className="flex-reverse float-right flex w-full justify-end pr-3">
                      <p className='my-auto text-white text-xs font-normal pr-2'>{matchData.right_team.team_shortname}</p>
                      <img src={matchData.right_team.team_logo} className='mr-0 h-10 w-10'/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex bg-fourthBackground">
            <div className="absolute flex w-full">
            <p 
              className={`${active === 0 ? "invisible " : "text-white"}  text-[9.6px] text-center w-full p-[14px]`} 
              data-wow-duration=".4s">
              WINNINGS
            </p>
            <p 
              className={`${active === 1 ? "invisible " : "text-white"}  text-[9.6px] text-center w-full p-[14px]`} 
              data-wow-duration=".4s">
              LEADERBOARD
            </p>
            
            <p 
              className={`${active === 2 ? "invisible " : "text-white"}  text-[9.6px] text-center w-full p-[14px]`} 
              data-wow-duration=".4s">
              STATES
            </p>
            </div>
            <div className="w-full h-[46px]">    
              <button 
                className={`w-120px h-[24px] ${active === 0 ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick(0)}
                data-wow-duration=".6s"
                 >
                <p className={`${active === 0 ? 'text-black' : 'text-white' }  -mt-[6px] text-[9.6px] text-center`}>WINNINGS</p>
              </button>
            </div>
            <div className="w-full h-[38px]">
              <button 
                className={`w-120px h-[24px] ${active === 1 ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick(1)}
                data-wow-duration=".6s"
                 >
                <p className={`${active === 1 ? 'text-black' : 'text-white' }  -mt-[6px] text-[9.6px] text-center`}>LEADERBOARD</p>
              </button>
            </div>
            <div className="w-full h-[38px]">
              <button 
                className={`w-120px h-[24px] ${active === 2 ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick(2)}
                data-wow-duration=".6s"
                 >
                <p className={`${active === 2 ? 'text-black' : 'text-white' }  -mt-[6px] text-[9.6px] text-center`}>STATES</p>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute h-[calc(100vh-200px)] w-screen left-0 right-0 bottom-0 bg-black overflow-y-auto overflow-x-hidden">
          <div className="relative">
            <div className={`absolute w-full ${active === 0 ? (prev > 0 ? " animate__animated animate__slideInRight wow" : "animate__animated animate__slideInLeft ") : "invisible"}`} data-wow-duration=".4s">
              <Winnings />
            </div>
            <div className={`absolute w-full ${active === 1 ? (prev < 1 ? " animate__animated animate__slideInLeft wow" : "animate__animated animate__slideInRight ") : "invisible"}`} data-wow-duration=".4s">
              <LeaderBoard />
            </div>
            <div className={`absolute w-full ${active === 2 ? (prev < 2 ? " animate__animated animate__slideInLeft wow" : "animate__animated animate__slideInRight ") : "invisible"}`} data-wow-duration=".4s">
              <States handleList = {handleWinning}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CompletedMatchInfo;