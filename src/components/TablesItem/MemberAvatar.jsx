import React from 'react'

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}
function MemberAvatar(props){
  const url = props.url
  const name = props.name
  const memcolor = props.color
  const role = props.role
  const score=props.score
  const scoreRender = (text) => {
    if(text){
      return(
        <div>
          <p className='text-white text-center text-[9.6px]'>
            {text}
          </p>
        </div>
      )
    }
  }
  
  return (
    <>
      <div className='w-[60px] m-auto'>
        <p className='text-white text-center absolute w-4 h-4 rounded-xl ml-[] bg-black text-[9.6px] z-10'> {role}</p>
        <img src={`${url}`} className='mx-auto left-0 right-0 top-0 rounded-full border-2 border-black h-[55px] w-[55px] z-0'/>
        <p className='text-white truncate text-xs mt-1 rounded-lg' style={{ backgroundColor: memcolor }}>{truncateText(name, 7)}</p>
        {scoreRender(score)}
      </div>
    </>
  )
}
export default MemberAvatar