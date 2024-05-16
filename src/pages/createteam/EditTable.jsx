import { useState } from 'react';
import data from './../../utils/json/member.json'

function EditTeam (props) {
  const [members, setMembers] = useState(data.members)
  const handleList = props.handleList
  const sort = props.filter
  const sortByProperty = (a, b) => {
    if(sort){
       if(sort === "price"){
         return a.price - b.price;
       }
       else if(sort === "credit") {
         return a.credit - b.credit;
       }
       else if (sort === "name"){
         if (a.name < b.name) return -1;
         if (a.name > b.name) return 1;
         return 0;
       }
       else if(sort === "active"){
         return a.active === b.active ? 0 : a.active ? -1 : 1;
       }    
    }   
    return 0;
  }
  
  if(sort){
    members.sort(sortByProperty)
  }
  
  const onclick = (e, active) => () => {
    const updatedMembers = members.map((member, index) => {
       if (index === e) {
         return { ...member, active: !active };
       }
       return member;
    });
    setMembers(updatedMembers);
   };
  return(
    <>
      <div className='w-full py-7  bg-black overflow-y-auto'>
        {members.map((member, index) => (
           <div key={index} className='relative'>
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
                <p className={`${ member.active ? "zmdi zmdi-minus-circle-outline text-green" : "zmdi  zmdi-plus-circle-o text-white"} text-3xl text-sans`} id="activeToggle" onClick={onclick(index, member.active)}></p>
              </div>
            </div>
            <div className={`absolute h-[72px] left-0 right-0 top-0  z-0 ${member.active ? "animate__animated animate__slideInRight wow" : "animate__animated animate__fadeOutRight wow"}`} style={{ background: "linear-gradient(90deg, #151d24 46%, #25cb3c 156%) " }}>
            </div>
           </div>
         ))}
      </div>
    </>
  )
}

export default EditTeam