function ProfilePage({ session }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Profil</h1>

      <p>
        Connecté avec :
        <strong> {session?.user?.email}</strong>
      </p>
    </div>
  )
}

export default ProfilePage