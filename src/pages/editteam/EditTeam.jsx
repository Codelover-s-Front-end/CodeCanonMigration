import {useNavigate} from 'react-router-dom'
import background from './../../assets/images/ground.png'
import data from '../../utils/json/member.json'
import MemberAvatar from '../../components/TablesItem/MemberAvatar';
import team_1 from './../../assets/images/team_logo/team_1.png'
import team_2 from './../../assets/images/team_logo/team_2.png'
function EditTeam(){
  const navigate = useNavigate();
  const onClickPrev = () => {
    navigate ('/contests')
  }
  const members = data.members
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
    },
    'points':'6'
  }
  let leftcolor = matchData.left_team.team_color.split(' ').join("")
  let rightcolor = matchData.right_team.team_color.split(' ').join("")
  let leftstyle = `linear-gradient(270deg, rgba(13, 14, 15, 0) 10%, ${leftcolor} 100%)`
  let rightstyle = `linear-gradient(90deg, rgba(13, 14, 15, 0) 10%, ${rightcolor} 100%)`
  return(
    <>
      <div className='absolute top-0 left-0 right-0 bottom-0 overflow-hidden'>
        <img src={background} className='w-full overflow-hidden h-[calc(100vh-176px)]'></img>
      </div>
      <div className='absolute top-0 left-0 right-0'>
        <div>
          <div className="flex justify-between ">
            <div className="float-left text-left">
              <button className="rounded-full min-w-[50px] py-1  bg-transparent hover:outline-none focus:bg-none focus:outline-none hover:bg-[#1d1d1d]" onClick={onClickPrev}><p className=" focus:border-none zmdi zmdi-chevron-left text-white text-4xl"></p></button>
            </div>
            <p className="w-full text-white text-md font-serif place-self-center">0h 9m left</p>
            <div className="w-9 flex text-right place-self-center mr-5">
              <p className="zmdi zmdi-close text-md text-white bg-[#e6e6e647] w-[30px] h-[30px] pr-[11px] pt-[8px] rounded-full" onClick={onClickPrev}></p>
            </div>
          </div>
          <div className='pt-[40px] px-[20px] grid grid-rows-4 grid-flow-col gap-4 h-[calc(100vh-240px)]'>
            <div className='w-full flex m-auto sm:mt-[60px] my-auto sm:my-4'>
              <div className='w-full pt-6'>
                <MemberAvatar 
                  name={members[1]['name']} 
                  role={members[1]['role']}
                  url={members[1]['img']}
                  color={members[1]['color']}
                  score={members[1]['score']}
                />
              </div>
              <div className='w-full'>
                <MemberAvatar 
                  name={members[2]['name']} 
                  role={members[2]['role']}
                  url={members[2]['img']}
                  color={members[2]['color']}
                  score={members[2]['score']}
                />
              </div>
              <div className='w-full pt-6'>
                <MemberAvatar 
                  name={members[3]['name']} 
                  role={members[3]['role']}
                  url={members[3]['img']}
                  color={members[3]['color']}
                  score={members[3]['score']}
                />
              </div>
            </div>
            <div className='w-full my-auto sm:my-6 flex pt-0 sm:pt-10'>
              <div className='w-full pt-4'>
                <MemberAvatar 
                  name={members[4]['name']} 
                  role={members[4]['role']}
                  url={members[4]['img']}
                  color={members[4]['color']}
                  score={members[4]['score']}
                />
              </div>
              <div className='w-full pt-4'>
                <MemberAvatar 
                  name={members[5]['name']} 
                  role={members[5]['role']}
                  url={members[5]['img']}
                  color={members[5]['color']}
                  score={members[5]['score']}
                />
              </div>
              <div className='w-full pt-4'>
                <MemberAvatar 
                  name={members[6]['name']} 
                  role={members[6]['role']}
                  url={members[6]['img']}
                  color={members[6]['color']}
                  score={members[6]['score']}
                />
              </div>
              <div className='w-full pt-4'>
                <MemberAvatar 
                  name={members[7]['name']} 
                  role={members[7]['role']}
                  url={members[7]['img']}
                  color={members[7]['color']}
                  score={members[7]['score']}
                />
              </div>
            </div>
            <div className='w-full flex my-auto sm:my-0 pt-0 sm:pt-6 pb-auto sm:pb-0'>
              <div className='w-full pt-4'>
                <MemberAvatar 
                  name={members[8]['name']} 
                  role={members[8]['role']}
                  url={members[8]['img']}
                  color={members[8]['color']}
                  score={members[8]['score']}
                />
              </div>
              <div className='w-full pt-4'>
                <MemberAvatar 
                  name={members[9]['name']} 
                  role={members[9]['role']}
                  url={members[9]['img']}
                  color={members[9]['color']}
                  score={members[9]['score']}
                />
              </div>
              <div className='w-full pt-4'>
                <MemberAvatar 
                  name={members[10]['name']} 
                  role={members[10]['role']}
                  url={members[10]['img']}
                  color={members[10]['color']}
                  score={members[10]['score']}
                />
              </div>
            </div>
            <div className='w-full my-auto'>
              <MemberAvatar 
                name={members[0]['name']} 
                role={members[0]['role']}
                url={members[0]['img']}
                color={members[0]['color']}
                score={members[0]['score']}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='absolute left-0 right-0 bottom-0 h-[184.5px] bg-black rounded-t-xl'>
        <div className="w-full flex bg-black rounded-t-xl overflow-hidden">
          <div className="w-full h-[136.03px]" style={{ background: leftstyle }}>
            <div>
              <div className="p-0 m-0">
                <p className="pt-3 pl-6 float-left block text-ellipsis text-white text-[10px] overflow-hidden box-border">{matchData.left_team.team_name}</p>
                <div className="pl-6 flex w-full align-middle">
                  <img src={matchData.left_team.team_logo} className='h-10 w-10'/>
                  <p className='ml-3 my-auto text-white text-xs font-normal'>{matchData.left_team.team_shortname}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute z-[99] top-3 left-0 right-0 w-fit h-fit m-auto text-xs text-white'>
            <p className='text-[9.6px] text-secondFontColor text-center'>
              Max 7 from a team
            </p>
            <p className='text-xs text-white text-center mt-[10px]'>
              7 : 6
            </p>
          </div>
          <div className='flex justify-between w-full mt-7 absolute top-16 px-6'>
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
                <p className="pt-3 pr-6 text-ellipsis text-white text-[10px] overflow-hidden box-border">{matchData.right_team.team_name}</p>
                <div className="flex-reverse float-right flex w-full justify-end pr-6">
                  <p className='my-auto text-white text-xs font-normal pr-2'>{matchData.right_team.team_shortname}</p>
                  <img src={matchData.right_team.team_logo} className='mr-0 h-10 w-10'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex'>
          <p className='text-white text-xs w-full text-center'>
            GK<span className='text-secondFontColor text-[9.6px]'>(1)</span>
          </p>
          <p className='text-white text-xs w-full text-center'>
            DEF<span className='text-secondFontColor text-[9.6px]'>(3)</span>
          </p>
          <p className='text-white text-xs w-full text-center'>
            GK<span className='text-secondFontColor text-[9.6px]'>(4)</span>
          </p>
          <p className='text-white text-xs w-full text-center'>
            DEF<span className='text-secondFontColor text-[9.6px]'>(3)</span>
          </p>
        </div>
      </div>
    </>
  )
}
export default EditTeam;