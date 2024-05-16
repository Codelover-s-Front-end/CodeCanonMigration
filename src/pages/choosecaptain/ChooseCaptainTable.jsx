import { useState } from "react";
import ContestTable from './../../components/contestComponents/ContestTable'
import MyContestTable from './../../components/contestComponents/MyContestTable'
import 'animate.css';
import data from './../../utils/json/member.json';

function ChooseCaptain (){
  const members = data.members
  const [cap, setCap] = useState(null);
  const [vcap, setVcap] = useState(null);
  const capHandle = (e) => () => {
    setCap(e)
  }

  const vcapHandle = (e) => () => {
    setVcap(e)
  }
  const getCap = (index) =>{
    if (cap === index )
      return "2x"
    else return "c"
  }
  const getvCap = (index) =>{
    if (vcap === index )
      return "1.5x"
    else return "vc"
  }
  return (
    <> 
      <div className='grid grid-cols-editTableBody p-2 bg-tabBackground absolute top-0 right-0 w-full'>
        <div className='pt-1'>
          <p className='text-white text-[9.6px] text-left'> Select 3-5 defender</p>
        </div>
        <div className='pt-1'> 
          <p className='text-secondFontColor text-[9.6px] text-center'>POINT</p>
        </div>
        <div className='pt-1'>
          <p className='text-secondFontColor text-[9.6px] text-center'>CAP</p>
        </div>
        <div className='pt-1'>
          <p className='text-secondFontColor text-[9.6px] text-center'>VCAP</p>
        </div>
      </div>
      <div className='w-full py-7  bg-black overflow-y-auto'>
        {members.map((member, index) => (
           <div key={index} className='relative grid grid-cols-editTableBody h-[66px] pt-[3px] my-1 bg-[#0d0e0f]'>
             <div className="w-full flex">
              <img src={`${member.img}`} className="w-[60px] h-[60px] rounded-full mt-[6px] mx-1" />
              <div className="self-center ml-3">
                <p className="text-xs text-white text-left">
                  {member.name}
                </p>
                <p className={"text-primaryFontColor text-[9.6px] text-left"}>{member.club} <span className="text-secondFontColor uppercase">{"| "+member.position}</span></p>
              </div>
            </div>
            <div className="w-full self-center">
              <p className="text-xs text-secondFontColor">{member.price}</p>
            </div>
            <div className="self-center w-full flex">
              <p 
                className={`text-xs transition-all cursor-pointer mx-auto ${cap == index ? "bg-white text-black":" text-white bg-[#8d8d8d47]" } rounded-full w-6 p-1`} 
                onClick={capHandle(index)}>
                  {getCap(index)}
                </p>
            </div>
            <div className="self-center w-full flex">
              <p 
                className={`text-xs transition-all cursor-pointer mx-auto ${vcap == index ? "bg-white text-black":" text-white bg-[#8d8d8d47]" } rounded-full w-6 py-1`} 
                onClick={vcapHandle(index)}>
                  {getvCap(index)}</p>
            </div>
           </div>
         ))}
      </div>
    </>
  )
}
export default ChooseCaptain;