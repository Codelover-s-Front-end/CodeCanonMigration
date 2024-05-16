import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import ic_home from "./../../assets/images/icons/ic_home.png";
import ic_wallet from "./../../assets/images/icons/ic_wallet.png";
import ic_matches from "./../../assets/images/icons/ic_matches.png";
import ic_account from "./../../assets/images/icons/ic_account.png";
import ic_homeact from "./../../assets/images/icons/ic_homeact.png";
import ic_walletact from "./../../assets/images/icons/ic_walletact.png";
import ic_matchesact from "./../../assets/images/icons/ic_matchesact.png";
import ic_accountact from "./../../assets/images/icons/ic_accountact.png";



function Tabs(CurrentPage) {
  const [current, setCurrent] = useState(CurrentPage.CurrentPage)
  const tabData = [
    {'No' : 0, text: 'Home' , 'icon': ic_home, 'iconact': ic_homeact, 'link': '/home'},
    {'No' : 1, text: 'My Matches' , 'icon':  ic_matches,'iconact': ic_matchesact, 'link': '/mymatches'},
    {'No' : 2, text: 'Wallet' , 'icon': ic_wallet , 'iconact': ic_walletact,'link': '/wallet'},
    {'No' : 3, text: 'Account' , 'icon': ic_account ,'iconact': ic_accountact, 'link': '/account'}
  ]
  const navigate = useNavigate();
  const onClick = (e) => {
      setCurrent(e.target.id)
      navigate(tabData[e.target.id]['link'],{state: {CurrentPage: e.target.id}})
  }
  // animate__animated animate__fadeInUp wow" data-wow-duration="0.4s"
  return(
      <>
        <div className="w-screen bg-[#151d24]">
          <div className="max-w-[690px] flex m-auto grid grid-cols-4 py-1">
            {tabData.map((item, index) => (
              <button key={index}  className="bg-[#151d24] border-none hover:border-none focus:outline-none" onClick={onClick}>
                <div  id={item.No} className={current==item.No ? "content-center animate__animated animate__fadeInDown wow" : "hidden"} data-wow-duration="0.4s" >
                  <img  id={item.No} src={item.iconact} className="conetent-center m-auto w-4 h-4"/>
                  <p  id={item.No} className="text-[10px] text-[#ffffff]">{item.text}</p>
                </div>
                <div  id={item.No} className={ item.No == current ? "hidden" : "" } data-wow-duration="0.4s" >
                  <img  id={item.No} src={item.icon} className="conetent-center m-auto w-4 h-4"/>
                  <p  id={item.No} className="text-[10px] text-[#536068]">{item.text}</p>
                </div>
              </button>
            ))}
          </div>
            
        </div>
      </>
  )
}
export default Tabs;