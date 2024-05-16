import { useNavigate, useLocation } from 'react-router-dom'
import Tabs from '../../components/tabs/Tabs';
import User from './../../assets/images/users/user3.png'
function Account () {
  const navigate = useNavigate();
  const location = useLocation();
  const { CurrentPage } = location.state;
  const onClickPoints = () => {
    navigate('/my-point');
  }
  const onClick = (to) => ()  => {
    navigate(to)
  } 
  return(
    <>
      <div>
        <div className="page justify-between bg-black">
          <div className="header ">
            <div className="flex">
              <div className="rounded-full min-w-[50px] mt-[10px] ml-0 pl-[24px] pt-4 pb-[14px] bg-transparent hover:outline-none focus:bg-none focus:outline-none">
                <p className=" focus:border-none text-white text-md font-semibold"> Account</p>
              </div>
            </div>
            <div className="page-title">
            <div className="w-full">
              <div>                  
                <div className="mt-3 flex w-full align-middle pt-2] cursor-pointer" onClick={onClick('/profile')}>
                  <img src={User} className='rounded-full h-[75px] w-[75px]'/>
                  <div className='algin-middle h-full my-auto'>
                    <p className='ml-3 my-auto text-white text-lg pb-0 font-normal'>&nbsp;&nbsp;Samanthateam123</p>
                    <p className=" pl-3 float-left block text-ellipsis pt-1 text-[#53606b] text-md overflow-hidden box-border">&nbsp;&nbsp;View Profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div>
            <div className="absolute left-0 bottom-0 w-screen back_content h-[calc(100vh-182px)] bg-[#151d24] rounded-t-2xl">
              <div className='w-full p-6 flex justify-start cursor-pointer' onClick={onClickPoints}>
                <p className='zmdi zmdi-fire text-yellow-500 mr-6 pl-2 text-lg'></p>
                <div className="flex flex-col items-start h-full my-auto w-full content-start">
                  <div className='w-full flex justify-between'>
                    <p className="py-3 p-0 float-left block pt-1 text-white text-sm overflow-hidden box-border">Level 89</p>
                    <p className="py-3 p-0 float-right block pt-1 text-white text-sm overflow-hidden box-border">8,871 Points</p>
                  </div>
                  <div className=" h-[6px] w-full bg-neutral-200 dark:bg-neutral-600 mb-0 rounded-full">
                      <div className="h-[6px] bg-green-500 animate-fade-in-left overflow-hidden rounded-full" style={{width: '76%'}}></div>
                  </div>
                  <p className=" p-0 float-left block text-ellipsis pt-1 text-[#53606b] text-xs overflow-hidden box-border">Earn 129 points to reach level 90</p>
                  </div>  
              </div>
            </div>
            <div  className="absolute left-0 bottom-0 pt-3 w-screen back_content h-[calc(100vh-282px)] bg-black rounded-t-2xl overflow-y-auto" data-wow-duration=".8s">
              <div  className='w-full h-[88px] px-6 py-2 flex cursor-pointer' onClick={onClick('/leaderboard')}>
                <p className='zmdi zmdi-account-box text-blue-500 mr-6 pl-2 text-lg'></p>
                <div className="flex flex-col items-start h-full my-auto w-full content-start">
                  <p className="py-1 p-0 float-left block pt-1 text-white text-sm overflow-hidden box-border">Leaderboard</p>
                  <p className="pt-1 p-0 float-left block text-ellipsis text-[#53606b] text-xs overflow-hidden box-border">Know where you stand in competition</p>
                </div>  
              </div>
              <div className='w-full h-[88px] px-6 py-2 flex cursor-pointer' onClick={onClick('/about-us')}>
                <p className='zmdi zmdi-assignment-alert text-green-500 mr-6 pl-2 text-lg'></p>
                <div className="flex flex-col items-start h-full my-auto w-full content-start">
                  <p className="py-1 p-0 float-left block pt-1 text-white text-sm overflow-hidden box-border">About us</p>
                  <p className="pt-1 p-0 float-left block text-ellipsis text-[#53606b] text-xs overflow-hidden box-border">Who we are & How we started</p>
                </div>  
              </div>

              <div className='w-full h-[88px] px-6 py-2 flex cursor-pointer' onClick={onClick('/support')}>
                <p className='zmdi zmdi-email text-red-500 mr-6 pl-2 text-lg'></p>
                <div className="flex flex-col items-start h-full my-auto w-full content-start">
                  <p className="py-1 p-0 float-left block pt-1 text-white text-sm overflow-hidden box-border">Support</p>
                  <p className="pt-1 p-0 float-left block text-ellipsis text-[#53606b] text-xs overflow-hidden box-border">Connect us for issue&</p>
                </div>  
              </div>

              <div className='w-full h-[88px] px-6 py-2 flex cursor-pointer'  onClick={onClick('/privacy-policy')}>
                <p className='zmdi zmdi-file-text text-yellow-500 mr-6 pl-2 text-lg'></p>
                <div className="flex flex-col items-start h-full my-auto w-full content-start">
                  <p className="py-1 p-0 float-left block pt-1 text-white text-sm overflow-hidden box-border">Privacy Policy</p>
                  <p className="pt-1 p-0 float-left block text-ellipsis text-[#53606b] text-xs overflow-hidden box-border">Know Our Policy Polices</p>
                </div>  
              </div>

              <div className='w-full h-[88px] px-6 py-2 flex cursor-pointer' onClick={onClick('/changelanguage')}>
                <p className='zmdi zmdi-fire text-yellow-500 mr-6 pl-2 text-lg'></p>
                <div className="flex flex-col items-start h-full my-auto w-full content-start">
                  <p className="py-1 p-0 float-left block pt-1 text-white text-sm overflow-hidden box-border">Change Language</p>
                  <p className="pt-1 p-0 float-left block text-ellipsis text-[#53606b] text-xs overflow-hidden box-border">Set your preferred language</p>
                </div>  
              </div>

              <div className='w-full h-[88px] px-6 py-2 flex cursor-pointer' onClick={onClick('/faqs')}>
                <p className='zmdi zmdi-comment-text text-purple-500 mr-6 pl-2 text-lg'></p>
                <div className="flex flex-col items-start h-full my-auto w-full content-start">
                  <p className="py-1 p-0 float-left block pt-1 text-white text-sm overflow-hidden box-border">FAQs</p>
                  <p className="pt-1 p-0 float-left block text-ellipsis text-[#53606b] text-xs overflow-hidden box-border">Get your questions answered</p>
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

export default Account;