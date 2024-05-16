import {useState} from 'react'
import EditTeam from './EditTable';
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import BackgroundImage from './../../assets/images/ground.png'
import team_1 from './../../assets/images/team_logo/team_1.png'
import team_2 from './../../assets/images/team_logo/team_2.png'
import data from './../../utils/json/member.json'
function CreateTeam (){
  const navigate = useNavigate();
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState('null')
  const [isOpen, setIsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false)
  const [sort, setSort] = useState(null);
  const member = data.memberhistory
  const memberinfo = data.memberinfo
  const onClick = (e) => () => {
    setPrev(active)
    setActive(e)
  }
  const onClickPrev = () => {
    navigate ('/contests')
  };
  const onPrevew = () => {
    navigate('/previewteam');
  };
  const onClickHistory = () => {
    setInfoOpen(true)
    setIsOpen(false)
  }
  const handleWinning = () => {
    setIsOpen(true);
  }
  const onSubmitHandle = () =>{
    navigate('/choosecaptain')
  }
  const onSort = (e) => () => {
    setSort(e)
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
  
  const getTotalPoints = () =>{
    let total = 0
    for( let i = 0; i< memberinfo.events.length; i++){
      total += memberinfo.events[i]["points"]
    }
    return total
  }
  let leftcolor = matchData.left_team.team_color.split(' ').join("")
  let rightcolor = matchData.right_team.team_color.split(' ').join("")
  let leftstyle = `linear-gradient(270deg, rgba(13, 14, 15, 0) 10%, ${leftcolor} 100%)`
  let rightstyle = `linear-gradient(90deg, rgba(13, 14, 15, 0) 10%, ${rightcolor} 100%)`
  return (
    <>  

      {infoOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pb-4 px-4 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={() => setInfoOpen(false)}>
              <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>
            <div className="absolute bottom-0 sm:bottom-40 left-0 right-0 m-auto bg-[#0d0e0f] w-[100%] sm:min-w-[640px] rounded-t-lg overflow-hidden sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-modalHeader  sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className='w-[120px]'>
                    <img src={memberinfo.img} className='h-24 rounded-full'/>
                  </div>
                  <div className='w-full pl-8'>
                    <div>
                      <p className='text-white text-md font-bold text-left'>
                        {memberinfo.name}
                      </p>
                      <div className='w-full flex space-x-3'>
                        <p className='text ont-bold  text-purple-900 text-sm uppercase'>{memberinfo.position}</p>
                        <p className='text-xs w-[4px]'>|</p>
                        <p className='text-left font-bold  text-secondFontColor text-sm' >{memberinfo.role}</p>
                      </div>
                    </div>
                    <div className='w-full flex py-2'>
                      <div className='w-full flex'>
                        <div className='w-full'>
                          <p className='text-secondFontColor text-left font-bold text-xs'>
                            POINT
                          </p>
                          <p className='text-white font-bold text-left text-sm'>
                            {memberinfo.sell}
                          </p>
                        </div>
                        <div className='w-full'>
                          <p className='text-secondFontColor text-left font-bold text-xs'>
                            CREDIT
                          </p>
                          <p className='text-white font-bold text-left text-sm'>
                            {memberinfo.credit}
                          </p>
                        </div>
                        <div className='w-full'>
                          <p className='text-secondFontColor text-left font-bold text-xs'>
                            SELL BY
                          </p>
                          <p className='text-white font-bold text-left text-sm'>
                            {memberinfo.price}
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
                
                {memberinfo.events.map((event, index) => (
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
                      </div>
                      <div className='w-full'>
                        <p className='w-[80%] bg-thirdBackground text-white rounded-full h-[40px] pt-2'>
                          ADD
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#121314] h-[90%] sm:h-[450px] px-4 py-3 sm:px-6 overflow-y-auto" onClick={onClickHistory}>
                <p className='text-left text-lg text-white text-sans'>Recent match status</p>
                {member.club.map((club, index) => (
                  <div key={index} className='py-2 relative'>
                    <div className='w-full relative z-10'>
                      <div className='border-b-[2px] border-black w-full h-[30px] py-1 px-3'>
                        <p className='text-left text-secondFontColor text-sm b-2'>{club.date}</p>
                      </div>
                      <div className='grid grid-cols-editTableBody p-3'>
                        <div className='w-full'>
                          <p className='text-secondFontColor text-left font-bold text-xs'>
                            vs 
                          </p>
                          <p className='text-white font-bold text-left text-sm'>
                            {club.club}
                          </p>
                        </div>
                        <div className='w-full'>
                          <p className='text-secondFontColor text-left font-bold text-xs'>
                            SELL BY 
                          </p>
                          <p className='text-white font-bold text-left text-sm'>
                            {club.sell + "%"}
                          </p>
                        </div>
                        <div className='w-full'>
                          <p className='text-secondFontColor text-left font-bold text-xs'>
                            POINT 
                          </p>
                          <p className='text-white font-bold text-left text-sm'>
                            {club.price}
                          </p>
                        </div>
                        <div className='w-full'>
                          <p className='text-secondFontColor text-left font-bold text-xs'>
                            CREDIT 
                          </p>
                          <p className='text-white font-bold text-left text-sm'>
                            {club.credit}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`rounded-2xl absolute h-[100px] left-0 right-0 top-0 z-0`} style={{ background: `linear-gradient(270deg, #151d24 46%, ${club.clubcolor} 156%)` }}>
                    </div>
                  </div>
                ))}
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
              <p className="zmdi zmdi-eye text-white ml-3 bg-[#e6e6e647] p-2 rounded-full" onClick={onPrevew}></p>
            </div>
          </div>
          <div className="w-full flex bg-black rounded-t-xl overflow-hidden">
            <div className="w-full flex bg-black rounded-t-xl overflow-hidden">
              <div className="w-full h-[136.03px]" style={{ background: leftstyle }}>
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
                  Max 7 from a team
                </p>
                <p className='text-xs text-white text-center mt-[10px]'>
                  7 : 6
                </p>
              </div>
              <div className='flex justify-between w-full mt-7 absolute top-[100px] px-4'>
                <div>
                  <p className='text-xs text-white text-left'>
                    11/11
                  </p>
                  <p className='text-[9.6px] text-secondFontColor text-left'>
                    Selection
                  </p>
                </div>
                <div className='flex w-full space-x-1 '>
                  <p className='zmdi zmdi-circle text-green text-md'/>
                  <p className='zmdi zmdi-circle text-green text-md'/>
                  <p className='zmdi zmdi-circle text-green text-md'/>
                  <p className='zmdi zmdi-circle text-green text-md'/>
                  <p className='zmdi zmdi-circle text-green text-md'/>
                  <p className='zmdi zmdi-circle text-green text-md'/>
                  <p className='zmdi zmdi-circle text-green text-md'/>
                  <p className='zmdi zmdi-circle text-gray-600 text-md'/>
                  <p className='zmdi zmdi-circle text-gray-600 text-md'/>
                  <p className='zmdi zmdi-circle text-gray-600 text-md'/>
                  <p className='zmdi zmdi-circle text-gray-600 text-md'/>
                  <p className='zmdi zmdi-circle text-gray-600 text-md'/>
                </div>
                <div>
                  <p className='text-xs text-white text-left'>
                    85.5
                  </p>
                  <p className='text-[9.6px] text-secondFontColor text-left'>
                    Credit
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-end h-[136.03px]" style={{ background: rightstyle }}>
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
          </div>
          <div className="w-full flex bg-black px-3 pb-3">
            <div className="absolute flex w-full">
            <p 
              className={`${active === 0 ? "invisible " : "text-white"}  text-xs text-center w-full p-[13px]`} 
              data-wow-duration=".4s">
              GK<span className="text-secondFontColor text-[11px]">(1)</span>
            </p>
            <p 
              className={`${active === 1 ? "invisible " : "text-white"}  text-xs text-center w-full p-[13px]`} 
              data-wow-duration=".4s">
              DEF<span className="text-secondFontColor text-[11px]">(0)</span>
            </p>
            <p 
              className={`${active === 2 ? "invisible " : "text-white"}  text-xs text-center w-full p-[13px]`} 
              data-wow-duration=".4s">
              MID<span className="text-secondFontColor text-[11px]">(1)</span>
            </p>
            <p 
              className={`${active === 3 ? "invisible " : "text-white"}  text-xs text-center w-full p-[13px]`} 
              data-wow-duration=".4s">
              ST<span className="text-secondFontColor text-[11px]">(1)</span>
            </p>
            </div>
            <div className="w-full h-[38px]">
              <button 
                className={`w-full h-[24px] ${active === 0 ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick(0)}
                data-wow-duration=".6s"
                 >
                <p className={`${active === 0 ? 'text-black' : 'text-white' }  -mt-2 text-xs text-center`}>GK<span className="text-secondFontColor text-[11px]">(1)</span></p>
              </button>
            </div>
            <div className="w-full h-[38px]">
              <button 
                className={`w-full h-[24px] ${active === 1 ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick(1)}
                data-wow-duration=".6s"
                 >
                <p className={`${active === 1 ? 'text-black' : 'text-white' }  -mt-2 text-xs text-center`}>DEF<span className="text-secondFontColor text-[11px]">(1)</span></p>
              </button>
            </div>
            <div className="w-full h-[38px]">
              <button 
                className={`w-full h-[24px] ${active === 2 ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick(2)}
                data-wow-duration=".6s"
                 >
                <p className={`${active === 2 ? 'text-black' : 'text-white' }  -mt-2 text-xs text-center`}>MID<span className="text-secondFontColor text-[11px]">(1)</span></p>
              </button>
            </div>
            <div className="w-full h-[38px]">
              <button 
                className={`w-full h-[24px] ${active === 3 ? "bg-white animate__animated animate__zoomIn wow":"bg-black animate__animated animate__zoomOut wow"}
                mt-[12px] my-2 rounded-3xl border-none outline-none focus:outline-none focus:border-none focus:bg-white`} 
                onClick={onClick(3)}
                data-wow-duration=".6s"
                 >
                <p className={`${active === 3 ? 'text-black' : 'text-white' }  -mt-2 text-xs text-center`}>ST<span className="text-secondFontColor text-[11px]">(1)</span></p>
              </button>
            </div>
          </div>
          <div className='grid grid-cols-editTableBody p-2 bg-tabBackground'>
            <div className='pt-1'>
              <p className='text-white text-[9.6px] text-left' onClick={onSort('name')}> Select 3-5 defender</p>
            </div>
            <div className='pt-1'>
              <p className='text-secondFontColor text-[9.6px] text-center' onClick={onSort('price')}>POINT</p>
            </div>
            <div className='pt-1'>
              <p className='text-secondFontColor text-[9.6px] text-center' onClick={onSort('credit')}>CREDIT</p>
            </div>
            <div>
              <p className='text-white text-[14px] zmdi zmdi-filter-list text-center' onClick={onSort('active')}/>
            </div>
          </div>
        </div>
        <div className="absolute h-[calc(100vh-270px)] w-screen left-0 right-0 bottom-0 bg-black overflow-y-auto">
          <div className="relative">
            <div className={`slide-out-left absolute w-full ${active === 0 ? (prev > 0 ? " animate__animated animate__slideInRight wow" : "animate__animated animate__slideInLeft ") : "invisible"}`} data-wow-duration=".4s">
              <EditTeam handleList={handleWinning} filter = {sort} />
            </div>
            <div className={`absolute w-full ${active === 1 ? (prev < 1 ? " animate__animated animate__slideInLeft wow" : "animate__animated animate__slideInRight ") : "invisible"}`} data-wow-duration=".4s">
              <EditTeam handleList={handleWinning} filter = {sort} />
            </div>
            <div className={`absolute w-full ${active === 2 ? (prev < 2 ? " animate__animated animate__slideInLeft wow" : "animate__animated animate__slideInRight ") : "invisible"}`} data-wow-duration=".4s">
              <EditTeam handleList={handleWinning} filter = {sort} />
            </div>
            <div className={`absolute w-full ${active === 3 ? (prev < 3 ? " animate__animated animate__slideInLeft wow" : "animate__animated animate__slideInRight ") : "invisible"}`} data-wow-duration=".4s">
              <EditTeam handleList={handleWinning} filter = {sort} />
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
export default CreateTeam;