import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TaskList from './components/TaskList'
import ProfilePage from './pages/ProfilePage'

function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Kanban TD3</h1>
      <TaskList />
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App