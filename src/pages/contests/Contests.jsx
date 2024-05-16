import { useState } from "react";
import ContestTable from './../../components/contestComponents/ContestTable'
import MyContestTable from './../../components/contestComponents/MyContestTable'
import MyTeamsTable from './../../components/contestComponents/MyTeamsTable'
import Toggle from './../../components/toggle/Toggle'
import data from './../../utils/json/data.json'
import memberdata from './../../utils/json/member.json'
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import BackgroundImage from './../../assets/images/ground.png'
import team_1 from './../../assets/images/team_logo/team_1.png'
import team_2 from './../../assets/images/team_logo/team_2.png'

function Contests (){
  const navigate = useNavigate();
  const [active, setActive] = useState('0')
  const [prev, setPrev] = useState('null')
  const [isOpen, setIsOpen] = useState(false);
  const onClick = (e) => () => {
    setPrev(active)
    setActive(e)
  }
  const onClickPrev = () => {
    navigate ('/home', {state:{
      CurrentPage: 0
    }})
  }
  const navigateToCreateTeam = () => {
    navigate('/createteam');
 };
  const navigateTo = (e) => () =>{
    navigate(e , {state: {
      CurrentPage:2
    }});
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
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pb-4 px-4 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={() => setIsOpen(false)}>
              <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>
            <div className="absolute bottom-24 left-0 right-0 m-auto bg-[#0d0e0f] w-[80%] sm:min-w-[640px] rounded-t-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-modalHeader  sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-white zmdi zmdi-notifications-add" id="modal-title">
                      &nbsp;&nbsp;Calendar Modal
                    </h3>
                    <div className="mt-2">
                      <div id="datepickerId"></div> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#151d24] px-4 py-3 sm:px-6">
                <div className="w-full flex">
                  <div className="w-full pb-2">
                    <p className="w-full text-white text-xs text-left">
                      Match-WLS Vs CBR
                    </p>
                    <p className="w-full text-gray-400 text-[11px] ">
                      Will send reminders when the line up announced
                    </p>
                  </div>
                  <div>
                    <Toggle />
                  </div>
                </div>
                <div className="w-full flex py-2">
                  <div className="w-full">
                    <p className="w-full text-white text-xs text-left">
                      Tour-Football Premier League
                    </p>
                    <p className="w-full text-gray-400 text-[11px] ">
                      Will send reminders when line up announced in every match
                    </p>
                  </div>
                  <div>
                    <Toggle />
                  </div>
                </div>
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
            <p className="w-full text-white text-md font-serif place-self-center">0h 9m left</p>
            <div className="w-9 flex text-right place-self-center pr-6 mr-6">
              <p className="zmdi zmdi-notifications-add text-white p3-3" onClick={() => setIsOpen(true)}></p>
              <p className="zmdi zmdi-balance-wallet text-white ml-3" onClick={navigateTo('/wallet')}></p>
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
              vs
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
          <div className="w-full flex bg-black px-3">
            <div className="absolute flex w-full">
            <p 
              className={`${active === '0' ? "invisible " : "text-white"}  text-xs text-center w-full p-[13px]`} 
              data-wow-duration=".4s">
              {"CONTESTS ("+(data.maxcontests.length+data.headContests.length)+")"}
            </p>
            <p 
              className={`${active === '1' ? "invisible " : "text-white"}  text-xs text-center w-full p-[13px]`} 
              data-wow-duration=".4s">
              {'MY CONTESTS ('+data.MyContestData.length+')'}
            </p>
            <p 
              className={`${active === '2' ? "invisible " : "text-white"}  text-xs text-center w-full p-[13px]`} 
              data-wow-duration=".4s">
              {'MY TEAMS ('+memberdata.myteam.length+ ')'}
            </p>
            </div>
            <div className="w-full h-[38px]">
              
              <button 
                className={`w-full h-[24px] ${active === '0' ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick('0')}
                data-wow-duration=".6s"
                 >
                <p className={`${active === '0' ? 'text-black' : 'text-white' }  -mt-2 text-xs text-center`}>{"CONTESTS ("+(data.maxcontests.length+data.headContests.length)+")"}</p>
              </button>
            </div>
            <div className="w-full h-[38px]">
              <button 
                className={`w-full h-[24px] ${active === '1' ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick('1')}
                data-wow-duration=".6s"
                 >
                <p className={`${active === '1' ? 'text-black' : 'text-white' }  -mt-2 text-xs text-center`}>{'MY CONTESTS'+data.MyContestData.length + ')'}</p>
              </button>
            </div>
            <div className="w-full h-[38px]">
              <button 
                className={`w-full h-[24px] ${active === '2' ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick('2')}
                data-wow-duration=".6s"
                 >
                <p className={`${active === '2' ? 'text-black' : 'text-white' }  -mt-2 text-xs text-center`}>{'MY TEAMS'+memberdata.myteam.length+')'}</p>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute h-[calc(100vh-190px)] w-screen left-0 right-0 bottom-0 bg-black overflow-y-auto">
          <div className="relative">
            <div className={`slide-out-left absolute w-full ${active === '0' ? (prev === '1' ? " animate__animated animate__slideInRight wow" : "animate__animated animate__slideInLeft ") : "invisible"}`} data-wow-duration=".4s">
              <ContestTable />
            </div>
            <div className={`absolute w-full ${active === '1' ? (prev === '0' ? " animate__animated animate__slideInLeft wow" : "animate__animated animate__slideInRight ") : "invisible"}`} data-wow-duration=".4s">
              <MyContestTable />
            </div>
            <div className={`absolute w-full ${active === '2' ? (prev === '1' ? " animate__animated animate__slideInLeft wow" : "animate__animated animate__slideInRight ") : "invisible"}`} data-wow-duration=".4s">
              <MyTeamsTable/>
              <div className="absolute left-0 right-0 ">
                <button className="rounded-full bg-[#25cb3c] text-white m-0 text-sm w-[160px] font-semibold uppercase h-[40px]" onClick={navigateToCreateTeam}>
                  Create Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contests;