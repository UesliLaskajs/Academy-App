import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserCreate from './components/userCreate'
import UserList from './components/userList'
import UserById from './components/userById'
import UserIdUpdate from './components/userIdUpdate'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/users'  element={<UserList/>}/>
          <Route path='/users/new' element={<UserCreate />} />
          <Route path='/users/:id' element={<UserById/>}/>
          <Route path='users/edit/:id' element={<UserIdUpdate/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
