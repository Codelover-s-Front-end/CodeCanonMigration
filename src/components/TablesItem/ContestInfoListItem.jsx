import React from "react";

function ContestInfoListItem (props) {
  let contest = props.contest;

  return (
    <>
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
    </>
  )
}
export default ContestInfoListItem