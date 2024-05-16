import { useNavigate } from 'react-router-dom'
import 'animate.css';
import profile from './../../assets/images/users/user1.png'

function Profile (){
  const navigate = useNavigate();
  const onClick = () => {
    navigate ('/home', {state:{
      CurrentPage: 0
    }})
  }
  
  const onClickPrev = () => {
    navigate('/account', {state: {CurrentPage: 3}})
  }
  return (
    <>  
      <div className="page  bg-black">
        <div className="header">
          <div className="flex">
            <button className="rounded-full min-w-[50px] mt-[10px] ml-0 p-[5px] bg-transparent hover:outline-none focus:bg-none focus:outline-none hover:bg-[#1d1d1d]" onClick={onClickPrev}><p className=" focus:border-none zmdi zmdi-chevron-left text-white text-4xl"></p></button>
          </div>
          <div className="w-full flex p-5 justify-between">
            <div>
              <div className="animate__animated animate__fadeInUp wow w-full flex text-[24px] font-normal text-white conetent-end" data-wow-duration="0.5s">
                My Profile
              </div>
              <div className="animate__animated animate__fadeInUp wow w-full flex text-[18px] font-normal text-[#53606b] conetent-end" data-wow-duration="0.5s">
                Everything about you
              </div>
            </div>
            <div>
              <p className='top-[120px] zmdi zmdi-camera text-lg right-[90px] z-10 bg-green absolute text-white rounded-full w-7 h-7'></p>
              <img src={profile} className='absolute w-[90px] h-[90px] rounded-full top-[84px] right-3' />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-0 bottom-0 right-0 h-[calc(100vh-195px)] bg-tabBackground w-screen animate__animated animate__fadeInUp wow content" data-wow-duration=".8s">
            <div className='w-full p-6'>
              <p className='text-secondFontColor text-[17px] text-left'>Team Name</p>
              <p className='text-white text-[17px] text-left'>Team Name</p>
            </div>
            <div className='w-full p-6'>
              <p className='text-secondFontColor text-[17px] text-left'>Email Address</p>
              <p className='text-white text-[17px] text-left'>samantha@gmail.com</p>
            </div>
            <div className='w-full p-6'>
              <p className='text-secondFontColor text-[17px] text-left'>Phone Number</p>
              <p className='text-white text-[17px] text-left'>+1 234 567 8901</p>
            </div>
            <div className='w-full p-6'>
              <p className='text-secondFontColor text-[17px] text-left'>Birth Date</p>
              <p className='text-white text-[17px] text-left'>22 Jun 1990</p>
            </div>
            <div className=' px-6 pt-5 justify-start flex' onClick={navigate('/')}>
              <button className='text-green text-[17px] px-0 text-left bg-tabBackground hover:bg-tabBackground' >Logout</button>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}
export default Profile;