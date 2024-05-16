import {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Tabs from '../../components/tabs/Tabs';
import HeaderImage from './../../assets/images/img_header.png'
import Logo from './../../assets/images/logo_home.png'
import Ball from './../../assets/images/icons/ic_homeact.png'
import MatchComponent from '../../components/matchcomponent/MatchComponent';
import HomeCarousel from '../../components/homeCarousel/HomeCarousel'
import data from './../../utils/json/match.json'

function Home (props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { CurrentPage } = location.state;
  const matchDatas = data.matchDatas
  const onclick = (e) => () =>
  {
    navigate(e);
  }
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState(false);
  const menuData = [
    {
      "id": 0,
      "name" : "Football",
      "icon" : "/images/icons/ball1.png"
    },
    {
      "id": 1,
      "name" : "Volleyball",
      "icon" : "/images/icons/ball2.png"
    },
    {
      "id": 2,
      "name" : "Baseball",
      "icon" : "/images/icons/ball3.png"
    },
    {
      "id": 3,
      "name" : "Rugby",
      "icon" : "/images/icons/ball4.png"
    },
  ]
  const onToggle = (e)  => {
    setStatus(!status);
  }
  const onSelect = (e) => () => {
    setActive(e)
    setStatus(false);
  }
  const render = () => {
    return (
       <>
         {matchDatas.map((matchData, index) => (
           <div key={index} className='relative my-3' onClick={onclick('/contests')}>
             <MatchComponent matchData={matchData}/>
           </div>
         ))}
       </>
    );
   }
  return(
    <> 
      <div className="page justify-between bg-black">
        <div className="header">
          <div className='content-none absolute left-0 top-0 w-screen rounded-b-[22px] h-[158px] bg-cover bg-center' style={{ backgroundImage: `url(${HeaderImage})`}}> 
          </div>
          <div className='absolute left-0 top-6 right-0 p-8 bg-none rounded-3xl m-1 mt-10  animate__animated animate__zoomInUp wow z-0'  data-wow-duration=".8s">
            <div onClick={() => {navigate('/livematchinfo')}}>
              <HomeCarousel />
            </div>
          </div>
          <div className='absolute left-0 top-0 p-5 pt-[17px] z-10 w-full'>
            <div className='flex justify-between w-full'>
              <img src={Logo} className='h-[20px] mt-[5px]'/>
              <div className='content-center z-100 w-[160px]'>
                <div className='flex content-center cursor-pointer bg-secondBackground px-1 rounded-xl' onMouseDown={onToggle}>
                  <img src={menuData[active]["icon"]} className='h-[15px] mt-[6px] mx-1'/>
                  <p className='text-white text-[18px] mx-1 w-full text-left'>{menuData[active]["name"]}</p>
                  <p className= {`text-white text-[25px] mx-1 mt-[2x] zmdi ${status ? "zmdi-chevron-up" : "zmdi-chevron-down"} `}/>
                </div>
                <div className={`${status ? "" : "hidden"} w-[160px] bg-white opacity-90 rounded-xl cursor-pointer`}>
                  {menuData.map((menu, index)=> (
                    <div key={index} className='flex content-center' onClick={onSelect(menu.id)}>
                      <img src={menu.icon} className='h-[15px] mt-[6px] mx-1'/>
                      <p className='text-black text-[18px] mx-1 w-full text-left'>{menu.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-0 bottom-0 mb-16 w-screen animate__animated animate__fadeInUp wow content" data-wow-duration=".8s">
            <div className="home_content border-0 left-0 absolute  h-screen w-screen overflow-y-auto rounded-t-lg rounded-b-none backdrop-blur-xl scrollable-content">
              <div className=" block  w-full h-full z-99 animate__animated animate__fadeInUp wow pt-4" data-wow-duration=".8s">
                <div className="animate__animated animate__fadeInUp wow px-[24px] " data-wow-duration=".8s">
                  <p className='text-white w-full text-left'>
                    UPCOMING MATCHES
                  </p>
                  {render()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div className='absolute left-0 bottom-0' >
        <Tabs
          CurrentPage= {CurrentPage}
        />
      </div>
    </>
  )
}

export default Home;