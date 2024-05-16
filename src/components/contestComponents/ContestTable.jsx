import data from '../../utils/json/data.json'
import ContestInfoListItem from '../TablesItem/ContestInfoListItem'
function ContestTable () {
  const maxcontests = data.maxcontests
  const headContests = data.headContests
  return(
    <>
      <div className='w-full p-7  bg-black overflow-y-auto'>
        <p className='w-full text-left text-white'>Max Contests</p>
        {maxcontests.map((contest, index) => (
           <div key={index} className='relative my-3 bg-tabBackground rounded-xl py-4 px-3'>
             <ContestInfoListItem contest={contest}/>
           </div>
         ))}

        <p className='w-full text-left text-white'>Head to Head</p>
          {headContests.map((contest, index) => (
           <div key={index} className='relative my-3 bg-tabBackground rounded-xl py-4 px-3'>
             <ContestInfoListItem contest={contest}/>
           </div>
         ))}
      </div>
    </>
  )
}

export default ContestTable