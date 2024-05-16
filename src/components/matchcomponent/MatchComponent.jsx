import React from 'react'
import Cardhead from './../../assets/images/cardhead.png'
function rgbaToHex(rgba) {
  // Remove the rgba() and the whitespace, then split by comma
  const rgbaValues = rgba.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
  // Convert each RGB value to hexadecimal
  const hexValues = rgbaValues.slice(0, 3).map(value => {
      const hex = parseInt(value).toString(16);
      // Ensure each value is two characters long
      return hex.length === 1 ? '0' + hex : hex;
  });
  // Join the hexadecimal values together
  return '[#' + hexValues.join('') + ']';
}

function MatchComponent (props) {
  let matchData= props.matchData
  let leftcolor = matchData.left_team.team_color.split(' ').join("")
  let rightcolor = matchData.right_team.team_color.split(' ').join("")
  let leftstyle = `linear-gradient(270deg, rgba(13, 14, 15, 0) 10%, ${leftcolor} 100%)`
  let rightstyle = `linear-gradient(90deg, rgba(13, 14, 15, 0) 10%, ${rightcolor} 100%)`

  return (
    <>
      <div className='w-full content-center z-20'>
        <div className='content-center top-0 w-full flex overflow-hidden z-20 rounded-t-xl bg-tabBackground'>
          <p 
            className='absolute text-white text-[12px] left-0 right-0  top-[0px] m-auto w-full min-h-[30px]' 
            style={{ backgroundImage: `url(${Cardhead})`, backgroundPosition: "center",backgroundRepeat: "no-repeat", backgroundSize: "contain", }}
          >
            <p className='pt-[10px]'>
              {matchData.league}
            </p>
          </p>
          <div className="w-full h-[90px]" style={{ background: leftstyle }}>
            <div>
              <div className="p-0 m-0">
                <p className="pt-3 pl-3 float-left block text-ellipsis text-white text-[10px] overflow-hidden box-border">{matchData.left_team.team_name}</p>
                <div className="pl-3 flex w-full align-middle">
                  <img src={matchData.left_team.team_logo} className='h-10 w-10'/>
                  <p className='ml-3 my-auto text-white text-xs font-normal'>{matchData.left_team.team_shortname}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute z-[99] top-9 left-0 right-0 w-fit h-fit m-auto text-xs text-[#25cb3c]'>
            {matchData.title}
          </div>
          <div className="w-full flex justify-end h-[90px]" style={{ background: rightstyle }}>
            <div className="p-0 m-0 flex justify-end">
              <div>
                  <p className="pt-3 pr-3 text-ellipsis text-white text-[10px] overflow-hidden box-border">{matchData.right_team.team_name}</p>
                  <div className="flex-reverse float-right flex w-full justify-end pr-3">
                    <p className='my-auto text-white text-xs font-normal pr-2'>{matchData.right_team.team_shortname}</p>
                    <img src={matchData.right_team.team_logo} className='mr-0 h-10 w-10'/>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex rounded-b-xl bg-[#151d24]'>
          <p className='text-white text-xs pl-3 py-[2px]'>2 teams 3 contest</p>
        </div>
        
      </div>
    </>
  )
}
export default MatchComponent;