import React from "react";

function MyContestListItem (props) {
  let contest = props.contest;

  return (
    <>
      <div className="my-3 bg-tabBackground rounded-t-xl py-4 px-3 mb-0">
        <div className='w-full flex text-[9.6px] mb-2'>
          <p className='text-secondFontColor w-full text-left uppercase'>
          {contest.name}
          </p>
          <p className='w-full text-right text-secondFontColor'>
          {contest.entity}
          </p>
        </div>
        <div className='w-full flex bg-tabBackground'>
          <p className='text-white'>
            {contest.budget}
          </p>
          <p className='text-secondFontColor p-[6px] w-full text-left text-[9.6px]'>
          {contest.status}
          </p>
          <div className='w-full text-right'>
            <p className='bg-green text-center text-white text-[12px] mt-1 w-12 float-right rounded-full'>
              {contest.entityBudget}
            </p>
          </div>
        </div>
        <div className="mt-2 mb-2 h-[2px] w-full bg-neutral-200 dark:bg-neutral-600 rounded-full">
          <div className="h-[2px] bg-green-500 animate-fade-in-left overflow-hidden rounded-full" 
          style={{
            width: `${contest.progress}%`,
            background: 'linear-gradient(90deg, #25cb3c 0%, rgba(207, 204, 12, 0.9839286056) 50%, #ff0404 100%)'
          }} />
        </div>
        <div className="w-full flex">
          <p className='text-secondFontColor text-[9.6px] w-full text-left'>
            {contest.totalSpots}
          </p>
          <p className='w-full text-green text-[9.6px] text-right'>
            {contest.leftSpots}
          </p>
        </div>
        
      </div>
      <div className="w-full bg-secondBackground flex justify-between mt-0 h-8 rounded-b-xl py-3 px-3">
        <div className="w-full ">
          <p className="text-[9.6px] text-secondFontColor text-left">{`JOINED WITH ${contest.joinedteams.length} TEAMS`}</p>
        </div>
        <div className="flex">

        </div>
          {contest.joinedteams.map((item, index)=> (
            <div key={index}>
              <p className="bg-secondBackground p-1 text-xs -my-2 mx-[2px] rounded-md text-white">
                {item.name}
              </p>
            </div>
          ))}
      </div>    
    </>
  )
}
export default MyContestListItem