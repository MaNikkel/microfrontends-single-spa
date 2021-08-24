import React, { useState, useEffect } from "react";
import { listenEvent } from "@mn/mf-utils"

interface IAppProps {
  name: string
}

interface ITask {
  id: string
  describe: string
}

interface ITaskEvent extends Event {
  detail: ITask
}

export const App: React.FC<IAppProps> = ( { name } ) => {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    console.log(listenEvent)
    listenEvent({ 
      name: '@mn/mf-react-3/todo/add-todo', 
      cb: (event: ITaskEvent) => {
        console.log(event.detail);
        setTasks(oldTasks => [ ...oldTasks, event.detail ])
      } 
    })
  }, [])

  return (
    <>
      <div style={{ color: 'red' }}>{name}</div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}