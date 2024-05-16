import data from '../../utils/json/data.json'
import ContestInfoListItem from '../TablesItem/MyContestListItem'
function MyContestTable () {
  const maxcontests = data.MyContestData
  return(
    <>
      <div className='w-full p-7 bg-black'>
        {maxcontests.map((contest, index) => (
          <div key={index} className='relative'>
            <ContestInfoListItem contest={contest}/>
          </div>
         ))}
      </div>
    </>
  )
}

export default MyContestTable