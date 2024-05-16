import { useState } from "react";
function EditMemberlist (props) {
  const member = props.member;
  const [active, setActive] = useState(member.active)
  const style= `${active? "linear-gradient(90deg, #151d24 46%, #25cb3c 156%) ": "linear-gradient(90deg, #151d24 46%, #25cb3c 156%)"}`
  const handleList=props.handleList
  const onclick= (e) => {
    setActive(!active)
  }
  return(
    
    <>
      <div className="w-full grid grid-cols-editTableBody h-[72px] z-10 relative">
        <div className="w-full flex" onClick={handleList}>
          <img src={`${member.img}`} className="w-[60px] h-[60px] rounded-full mt-[6px] mx-1"/>
          <div className="self-center ml-3">
            <p className="text-xs text-white text-left">
              {member.name}
            </p>
            <p className={"text-primaryFontColor text-[9.6px] text-left"}>{member.club} <span className="text-secondFontColor">{"Sell by "+member.sell}</span></p>
          </div>
        </div>
        <div className="w-full self-center" onClick={handleList}>
          <p className="text-xs text-secondFontColor">{member.price}</p>
        </div>
        <div className="w-full self-center" onClick={handleList}>
          <p className="text-xs text-white">{member.credit}</p>
        </div>
        <div className="w-full self-center">
          <p className={`${ active ? "zmdi zmdi-plus-circle-o text-green" : "zmdi zmdi-minus-circle-outline text-white"} text-3xl text-sans`} id="activeToggle" onClick={onclick}></p>
        </div>
      </div>
      <div className={`absolute h-[72px] left-0 right-0 top-0  z-0 ${active ? "animate__animated animate__slideInRight wow" : "animate__animated animate__fadeOutRight wow"}`} style={{ background: style }}>
      </div>
    </>
  )
}
export default EditMemberlist;