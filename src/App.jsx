import { Route, Routes } from 'react-router-dom'
import HomePage from './assets/pages/HomePage'
import SignupPage from './assets/pages/SignupPage'
import LoginPage from './assets/pages/LoginPage'
import ProfilePage from './assets/pages/ProfilePage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/main' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile-page' element={<ProfilePage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
