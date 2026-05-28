function TaskCard({ task }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '1rem',
      margin: '1rem',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>{task.titre}</h3>

      <p>
        <strong>Statut :</strong> {task.statut}
      </p>
    </div>
  )
}

export default TaskCard