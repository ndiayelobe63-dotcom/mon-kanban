import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav
      style={{
        background: '#1A8C82',
        padding: '1rem',
        display: 'flex',
        gap: '1rem'
      }}
    >
      <Link to="/">Dashboard</Link>
      <Link to="/profile">Profil</Link>
    </nav>
  )
}