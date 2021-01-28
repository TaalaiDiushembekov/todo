import React, {useState} from 'react'

const Input = ({addTasks}) => {

    const [taskInput, setTaskInput] = useState('')
  return (
    <div className="border  font-bold  p-10 w-2/5 flex justify-between">
      <input
        type="text"
        onChange={(e) => setTaskInput(e.target.value)}
        className="w-2/4 border border-4"
      />
      <button type="button" onClick={() => addTasks(taskInput)} className="border">
        добавить
      </button>
      <p>
        <input type="checkbox" />
        по преоритету
      </p>
      <input list="tasks" className="border" />
      <datalist id="tasks">
        <option value="uytuy" />
        <option value="uytuy" />
        <option value="uytuy" />
      </datalist>
    </div>
  )
}

export default Input
