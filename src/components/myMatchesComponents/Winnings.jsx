import 'animate.css';
import data from './../../utils/json/matchdata.json'

function Winnings (props){
  
  const winnings = data.winnings
  return (
    <>  
      <div>
        <div className="w-full bg-black absolute top-8">
          <div className="w-full border-b-[1px] border-[#2d343a]">
            <div className="w-full flex">
              <p className="text-secondFontColor text-left py-3 px-3 text-[9.6px] pt-2 w-full">RANKS</p>
              <p className="text-secondFontColor text-right py-3 px-3 text-[9.6px] pt-2 ">WINNINGS</p>
            </div>
          </div>
        </div>
        <div className="w-full absolute left-0 right-0 top-[78px] ">
          {winnings.map((item, index) => (
            <div key={index} className="w-full border-b-[1px] border-[#2d343a]">
              <div className="w-full flex py-3">
                <p className='text-left px-3 text-sm w-40 text-secondFontColor'>
                  #<span className='text-white text-sm'>{item.rank}</span>
                </p>
                <p className='w-full text-right px-3 text-sm text-white'>
                  {item.winnings}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Winnings;