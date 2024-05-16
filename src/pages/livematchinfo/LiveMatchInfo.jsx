import { useState } from "react";
import ContestInfoListItem from "../../components/TablesItem/ContestInfoListItem";
import LeaderBoard from "../../components/myMatchesComponents/Leaderboard";
import Winnings from "../../components/myMatchesComponents/Winnings";

import { useNavigate } from 'react-router-dom'
import 'animate.css';
import BackgroundImage from './../../assets/images/ground.png'
import team_1 from './../../assets/images/team_logo/team_1.png'
import team_2 from './../../assets/images/team_logo/team_2.png'

function LiveMatchInfo (){
  const navigate = useNavigate();
  const [active, setActive] = useState('0')
  const [prev, setPrev] = useState('null')
  const onClick = (e) => () => {
    setPrev(active)
    setActive(e)
  }
  const onClickPrev = () => {
    navigate ('/mymatches', {state:{
      CurrentPage: 1
    }})
  }
  const contest = {
    "id":0,
    "name": "prize pool",
    "budget": "$500,000",
    "status":"60% Winners | 1st $50,000",
    "progress": 80,
    "entity": "Multiple Entity",
    "entityBudget": "$20",
    "totalSpots": "10,000Spots",
    "leftSpots": "3875Spots left"
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

  return (
    <>  
      <div className="page bg-cover" style={{ backgroundImage: `url(${BackgroundImage})`  }}>
        <div className="header">
          <div className="flex justify-between ">
            <div className="float-left text-left">
              <button className="rounded-full min-w-[50px] py-1  bg-transparent hover:outline-none focus:bg-none focus:outline-none hover:bg-[#1d1d1d]" onClick={onClickPrev}><p className=" focus:border-none zmdi zmdi-chevron-left text-white text-4xl"></p></button>
            </div>
            <p className="w-full text-white text-md font-sans place-self-center">Match Live</p>
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
            <div className='absolute z-[99] top-16 left-0 right-0 w-fit h-fit m-auto text-xs text-white'>
              <p className='text-[9.6px] text-secondFontColor text-center'>
                vs
              </p>
              <p className='text-xs text-white text-center mt-[10px]'>
                7 : 6
              </p>
              <p className='text-xs text-secondFontColor text-center mt-[10px]'>
                75 mins
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
              className={`${active === '0' ? "invisible " : "text-white"}  text-[9.6px] text-center w-full p-[14px]`} 
              data-wow-duration=".4s">
              WINNINGS
            </p>
            <p 
              className={`${active === '1' ? "invisible " : "text-white"}  text-[9.6px] text-center w-full p-[14px]`} 
              data-wow-duration=".4s">
              LEADERBOARD
            </p>
            </div>
            <div className="w-full h-[46px]">    
              <button 
                className={`w-120px h-[24px] ${active === '0' ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick('0')}
                data-wow-duration=".6s"
                 >
                <p className={`${active === '0' ? 'text-black' : 'text-white' }  -mt-[6px] text-[9.6px] text-center`}>WINNINGS</p>
              </button>
            </div>
            <div className="w-full h-[38px]">
              <button 
                className={`w-120px h-[24px] ${active === '1' ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick('1')}
                data-wow-duration=".6s"
                 >
                <p className={`${active === '1' ? 'text-black' : 'text-white' }  -mt-[6px] text-[9.6px] text-center`}>LEADERBOARD</p>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute h-[calc(100vh-200px)] w-screen left-0 right-0 bottom-0 bg-black overflow-y-auto overflow-x-hidden">
          <div className="relative">
            <div className={`absolute w-full ${active === '0' ? (prev === '1' ? " animate__animated animate__slideInRight wow" : "animate__animated animate__slideInLeft ") : "animate__animated animate__zoomOut wow"}`} data-wow-duration=".4s">
              <Winnings />
            </div>
            <div className={`absolute w-full ${active === '1' ? (prev === '0' ? " animate__animated animate__slideInLeft wow" : "animate__animated animate__slideInRight ") : "animate__animated animate__zoomOut wow"}`} data-wow-duration=".4s">
              <LeaderBoard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default LiveMatchInfo;