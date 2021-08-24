import React, { useState } from "react"
import Parcel from 'single-spa-react/parcel'
import { v4 } from 'uuid'

interface IAppProps {
  name: string
}

export const App: React.FC<IAppProps> = ({ name }) => {
  const [task, setTask] = useState('')

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setTask(event.currentTarget.value)
  }

  function handleSubmit(event: React.SyntheticEvent){
    event.preventDefault()
    console.log('ENVIANDO....')
    dispatchEvent(new CustomEvent(
      '@mn/mf-react-3/todo/add-todo',
      { detail: {
        id: v4(),
        describe: task
      } }
    ))
    setTask('')
  }

  return (
    <>
      <div>{name}</div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={task}/>
        <button type="submit">Enviar</button>
      </form>
      <Parcel 
        config={() => System.import("@mn/parcel-react-1")}
      />
    </>
  )
} 