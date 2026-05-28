import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import TaskCard from './TaskCard'

function TaskList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function chargerTaches() {
      const { data, error } = await supabase
        .from('taches')
        .select('*')
      console.log(data)  

      if (error) {
        console.error(error)
      } else {
        setTasks(data)
      }
    }

    chargerTaches()
  }, [])

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList