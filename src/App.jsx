import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/signIn/SignIn'
import Register from './pages/register/Register'
import Verification from './pages/verification/Verification'
import Home from './pages/home/Home'
import Account from './pages/account/Account'
import Wallet from './pages/wallet/Wallet'
import MyMatches from './pages/myMatches/MyMatches'
import Contests from './pages/contests/Contests'
import MyPoint from './pages/mypoint/myPoint'
import LeaderBoard from './pages/leaderboard/LeaderBoard'
import Aboutus from './pages/aboutus/Aboutus'
import Support from './pages/support/Support'
import PricacyPolicy from './pages/privacypolicy/PrivacyPolicy'
import Faqs from './pages/faqs/Faqs'
import ChangeLanguage from './pages/changelanguage/ChangeLanguage'
import UpComingMatchInfo from './pages/upcomingmatchinfo/UpComingMatchInfo'
import LiveMatchInfo from './pages/livematchinfo/LiveMatchInfo'
import CompletedMatchInfo from './pages/completedmatchinfo/CompletedMatchInfo'
import ChooseCaptain from './pages/choosecaptain/ChooseCaptain'
import CreateTeam from './pages/createteam/CreateTeam'
import EditTeam from './pages/editteam/EditTeam'
import Profile  from './pages/profile/Profile'
import Modal from './components/modal/Modal'

import './App.css'
import PreviewTeam from './pages/previewteam/PreviewTeam'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SignIn />} />
          <Route path='/register' exact element={<Register/>} />
          <Route path='/verification' exact element={<Verification/>} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/myMatches' exact element={<MyMatches />} />
          <Route path='/wallet' exact element={<Wallet />} />
          <Route path='/account' exact element={<Account />} />
          <Route path='/contests' exact element={<Contests />} />
          <Route path='/my-point' exact element={<MyPoint />} />
          <Route path='/leaderboard' exact element={<LeaderBoard />} />
          <Route path='/about-us' exact element={<Aboutus />} />
          <Route path='/support' exact element={<Support />} />
          <Route path='/privacy-policy' exact element={<PricacyPolicy />} />
          <Route path='/faqs' exact element={<Faqs />} />
          <Route path='/changelanguage' exact element={<ChangeLanguage/>} />
          <Route path='/upcomingmatchinfo' exact element={<UpComingMatchInfo/>}/>
          <Route path='/livematchinfo' exact element={<LiveMatchInfo />} />
          <Route path='/completedmatchinfo' exact element={<CompletedMatchInfo/>}/>
          <Route path='/choosecaptain' exact element={<ChooseCaptain/>}/>
          <Route path='/createteam' exact element={<CreateTeam />}/>
          <Route path='/editteam' exact element={<EditTeam />} />
          <Route path='/previewteam' exact element={<PreviewTeam />} />
          <Route path='/profile' exact element={<Profile />}/>
          <Route path='/modal' exact element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
