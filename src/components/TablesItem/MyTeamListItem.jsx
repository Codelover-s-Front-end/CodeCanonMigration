import React from 'react'
import MemberAvatar from './MemberAvatar'
import background from './../../assets/images/ground.png'
import { useNavigate } from 'react-router-dom'
function MyTeamListItem (props) {
  const navigate = useNavigate()
  const myteam = props.myteam
  const handleEvent = () => {
    navigate('/editteam')
  }
  return(
    <>
      <div className='w-full h-[133.5px] my-3 overflow-hidden' onClick={handleEvent}>
        <div className='w-full flex absolute left-0 right-0 top-0 rounded-t-xl py-3 px-2 h-[96px] bg-[url(../public/images/ground.png)]' >
          <div className='w-full'>
            <p className='text-white text-xs text-left'>
              {myteam.teamname+'('+myteam.shortname+')'}
            </p>
            <div className='flex pt-3'>
              <div className='pr-2'>
                <p className='text-white text-sm font-bold text-left'>
                  {myteam.wls}
                </p>
                <p className='text-white text-xs text-left uppercase'>
                  wls
                </p>
              </div>
              <div className='pr-2'>
                <p className='text-white text-sm font-bold text-left'>
                  {myteam.cbr}
                </p>
                <p className='text-white text-xs text-left uppercase'>
                  cbr
                </p>
              </div>
            </div>
          </div>
          <div className='w-full flex'>
            <div className='w-full'>
              <MemberAvatar 
                name={myteam.member1.name}
                url={myteam.member1.img}
                color={myteam.member1.color}
                role={myteam.member1.role}
              />
            </div>
            <div className='w-full'>
              <MemberAvatar 
                name={myteam.member2.name}
                url={myteam.member2.img}
                color={myteam.member2.color}
                role={myteam.member2.role}
              />
            </div>
          </div>
        </div>
        <div className='w-full flex absolute bottom-0 right-0 left-0 rounded-b-xl h-[37.5px] bg-tabBackground'>
          <p className='w-full text-white text-xs flex justify-center items-center text-center'>
            Gk<span className='text-xs text-secondFontColor '>{'('+myteam.gk+')'}</span>
          </p>
          <p className='w-full text-white text-xs flex justify-center items-center text-center'>
            DEF<span className='text-xs text-secondFontColor '>{'('+myteam.def+')'}</span>
          </p>
          <p className='w-full text-white text-xs flex justify-center items-center text-center'>
            MID<span className='text-xs text-secondFontColor '>{'('+myteam.mid+')'}</span>
          </p>
          <p className='w-full text-white text-xs flex justify-center items-center text-center'>
            ST<span className='text-xs text-secondFontColor '>{'('+myteam.st+')'}</span>
          </p>
        </div>
        
      </div>
    </>
  )
}
export default MyTeamListItem