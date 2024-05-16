import 'animate.css';
import data from './../../utils/json/data.json'

function LeaderBoard ({handleWinning}){
  const leaderboards = data.leaderboard
  const onClick = (index) => () => {
    handleWinning(index)
  }
  return (
    <>  
      <div>
        <div className="w-full bg-black absolute top-8">
          <div className="grid grid-cols-[60%_20%_20%] gap-4 border-b-[1px] border-[#2d343a]">
            <div className="w-full">
              <p className="text-secondFontColor text-left py-3 p-6 text-xs pt-2 ">{"All teams ("+leaderboards.length+")"}</p>
            </div>
            <div className="w-full">
              <p className="text-secondFontColor py-3 p-6 text-xs pt-2 ">POINTS</p>
            </div>
            <div className="w-full">
              <p className="text-secondFontColor py-3 p-6 text-xs pt-2">#RANK</p>
            </div>
          </div>
        </div>
        <div className=" w-full absolute left-0 right-0 top-[78px] ">
          {leaderboards.map((item, index) => (
            <div key={index} className="grid grid-cols-[60%_20%_20%] gap-4 border-b-[1px] border-[#2d343a]">
              <div className="w-full">
                <div className='w-full pl-2 py-2 flex'>
                  <img src={item.img} className="rounded-full w-11 h-11 mr-2"/>
                  <div className="flex flex-col items-start h-full my-auto w-full content-start">
                    <p className="py-1 p-0 float-left block pt-1 text-white text-sm overflow-hidden box-border text-[10px] font-sans font-poppins">{item.name} <span className="text-secondFontColor text-xs">{"("+item.team+")"}</span></p>
                    <p className="pb-1 p-0 float-left block text-ellipsis text-[#53606b] text-xs overflow-hidden box-border">{item.status}</p>
                  </div>  
                </div>
              </div>
              <div className="w-full"><p className="text-white my-auto pt-6 p-6 text-xs">{item.point}</p></div>
              <div className="w-full"><p className="text-white  pt-6 p-6 text-xs ">{item.rank}</p></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default LeaderBoard;