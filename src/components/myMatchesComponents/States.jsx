import 'animate.css';
import data from './../../utils/json/member.json'

function States (props){
  const members = data.members
  const handleList = props.handleList
  return (
    <>  
      <div>
        <div className="w-full bg-black absolute top-3">
          <div className="grid grid-cols-[60%_20%_20%] gap-4 border-b-[1px] border-[#2d343a]">
            <div className="w-full">
              <p className="text-secondFontColor text-left py-3 p-6 text-xs pt-2 ">{"All teams ("+members.length+")"}</p>
            </div>
            <div className="w-full">
              <p className="text-secondFontColor py-3 p-6 text-xs pt-2 ">POINTS</p>
            </div>
            <div className="w-full">
              <p className="text-secondFontColor py-3 p-6 text-xs pt-2">SELL BY</p>
            </div>
          </div>
        </div>
        <div className=" w-full absolute left-0 right-0 top-[48px]" onClick={handleList}>
          {members.map((item, index) => (
            <div key={index} className='relative h-[72px]'>
              <div className='absolute h-[72px] left-0 right-0 top-0  z-0'  style={{ background: `${item.active ? "linear-gradient(90deg, #151d24 46%, #25cb3c 156%)" : ""}` }}>
              </div>
              <div className="absolute w-full mt-[3px] pb-[3px] grid grid-cols-[60%_20%_20%] gap-4 border-b-[1px] border-[#2d343a] z-20">
                <div className="w-full flex">
                  <img src={`${item.img}`} className="w-[60px] h-[60px] rounded-full mt-[6px] mx-1" />
                  <div className="self-center ml-3">
                    <p className="text-xs text-white text-left">
                      {item.name}
                    </p>
                    <p className={"text-primaryFontColor text-[9.6px] text-left"}>{item.club} <span className="text-secondFontColor">{"Sell by "+item.sell}</span></p>
                  </div>
                </div>
                <div className="w-full self-center">
                  <p className="text-xs text-secondFontColor">{item.price}</p>
                </div>
                <div className="w-full self-center">
                  <p className="text-xs text-white">{item.credit  + "%"}</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default States;