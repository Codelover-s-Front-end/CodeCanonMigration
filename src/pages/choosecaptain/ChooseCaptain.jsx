import { useState } from "react";
import ChooseCaptainTable from './ChooseCaptainTable'

import { useNavigate } from 'react-router-dom'
import 'animate.css';
import BackgroundImage from './../../assets/images/ground.png'
import team_1 from './../../assets/images/team_logo/team_1.png'
import team_2 from './../../assets/images/team_logo/team_2.png'

function ChooseCaptain (){
  const navigate = useNavigate();
  const onClickPrev = () => {
    navigate('/createteam');
  };
  const onPrevew = () => {
    navigate('/previewteam');
  };
 const onSubmitHandle = () => {
  navigate ('/home', {state:{
      CurrentPage: 0
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

  return (
    <>  
      <div className="page bg-cover bg-black">
        <div className="header">
          <div className="flex justify-between ">
            <div className="float-left text-left">
              <button className="rounded-full min-w-[50px] py-1  bg-transparent hover:outline-none focus:bg-none focus:outline-none hover:bg-[#1d1d1d]" onClick={onClickPrev}><p className=" focus:border-none zmdi zmdi-chevron-left text-white text-4xl"></p></button>
            </div>
            <p className="w-full text-white text-md font-serif place-self-center">0h 9m left</p>
            <div className="w-9 flex text-right place-self-center pr-6 mr-6">
              <p className="zmdi zmdi-eye text-white ml-3 bg-[#e6e6e647] p-2 rounded-full" onClick={onPrevew}></p>
            </div>
          </div>
          <div className="w-full flex bg-black rounded-t-xl overflow-hidden">
            <div className="w-full h-[102px]" style={{ background: leftstyle }}>
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
            <div className='absolute z-[99] top-24 left-0 right-0 w-fit h-fit m-auto text-xs text-white'>
              5:6
            </div>
            <div className="w-full flex justify-end h-[102px]" style={{ background: rightstyle }}>
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
          <div className="w-full mt-4">
            <p className="text-white text-md text-center font-sans">Choose Captain & Vice-Captain</p>
            <p className="text-secondFontColor text-[9px] text-center font-sans mt-3">C will get 2x points & VC will get 1.5x pionts</p>
          </div>
        </div>
        <div className="absolute h-[calc(100vh-220px)] w-screen left-0 right-0 bottom-0 bg-black overflow-y-auto">
          <div className="relative">
            <div className="w-full">
              <ChooseCaptainTable />
            </div>
          </div>
        </div>
        <div className="w-full absolute z-[1] rounded-t-lg min-h-[78px] bottom-0 m-0 overflow-hidden p-7">
          <button className="rounded-full bg-[#25cb3c] text-white m-0 text-sm w-160 font-semibold uppercase h-[40px] pt-2" onClick={onSubmitHandle}>
            Continue
          </button>
        </div>
      </div>
    </>
  )
}
export default ChooseCaptain;