import React, { useState } from 'react';

function Test({ data }) {

 return (
  <>
    <div className='w-[940px] h-[420px] bg-secondBackground'>
      <div className='w-full flex'>
        <p className='text-secondFontColor w-full text-left'>
          PRIZE POOL
        </p>
        <p className='w-full text-right'>
          Multiple Entities
        </p>
      </div>
      <div className='w-full flex bg-black'>
        <p className='text-white'>
          $50000
        </p>
        <p className='text-white'>
          $50000
        </p>
        <div className='w-full text-right'>
          <p className='bg-green text-center w-10 float-right rounded-full'>
            $20
          </p>
        </div>
      </div>
      <div className="mt-6 mb-6 h-[2px] w-full bg-neutral-200 dark:bg-neutral-600 rounded-full">
        <div className="h-[2px] bg-green-500 animate-fade-in-left overflow-hidden rounded-full" 
          style={{
            width: '76%',
            background: 'linear-gradient(90deg, #25cb3c 0%, rgba(207, 204, 12, 0.9839286056) 50%, #ff0404 100%)'
        }} />
      </div>
      <div className="w-full flex">
      <p className='text-secondFontColor w-full text-left'>
          PRIZE POOL
        </p>
        <p className='w-full text-green text-right'>
          Multiple Entities
        </p>
      </div>
    </div>
  </>
 );
}

export default Test;