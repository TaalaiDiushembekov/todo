/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Head from './head'
import Input from './input'
import Task from "./task";

const Home = () => {
  const [tasks, setTasks] = useState([])
  const [category, setCategories] = useState([])

  useEffect(() => {
    axios(`/api/v1/tasks/`).then(({ data }) => setCategories(data))
  }, [])

  const addTasks = (newTask) => {
    axios
      .post(`/api/v1/tasks/`, { title: newTask })
      .then(({ data }) => setTasks([...tasks, data.newTask]))
  }
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen flex-col ">
        <h1>TO DO:</h1>
       <Task category={category} />
        <Input addTasks={addTasks} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
