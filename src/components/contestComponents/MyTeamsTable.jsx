import data from '../../utils/json/member.json'
import MyTeamListItem from '../TablesItem/MyTeamListItem'
function MyTeamsTable () {
  const myteams = data.myteam
  return(
    <>
      <div className='w-full bg-black overflow-hidden'>
        {myteams.map((myteam, index) => (
          <div key={index} className='relative' >
            <MyTeamListItem myteam={myteam}/>
          </div>
         ))}
      </div>
    </>
  )
}

export default MyTeamsTable