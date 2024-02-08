"use client"
import React, { useState } from 'react';



const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }])

    settitle('');
    setdesc('');
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>No Task Available !</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (

        <li key={index} className='min-w-[90vw] py-1'>
          <div className='flex w-full justify-between items-center ' >
            <h5 className=' font-extrabold text-xl'>Task no. {index + 1}: <span>{task.title}</span></h5>
            <h6 className='font-medium text-lg '>Desc: <span> {task.desc}</span></h6>
            <button onClick={() => { deleteHandler() }} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3.5 py-2 text-center me-2 mb-2">Delete</button>
          </div>
        </li>
      )
    })
  }



  return (
    <>
      <div className='font-black  tracking-tighter text-5xl text-primary w-full p-6 text-center flex items-center justify-center '>
        <h1>To Do List</h1>
      </div>


      <form className='flex flex-col m-auto min-w-64 w-1/2' onSubmit={submitHandler} >
        <input className='text-md rounded-sm border-2 border-zinc-500 m-5 px-4 py-2' type="text" placeholder='Your Task Here...' value={title} onChange={(event) => { settitle(event.target.value); }} />

        <input className='text-md rounded-sm border-2 border-zinc-500 m-5 px-4 py-2' type="text" placeholder="Task's Description Here..." value={desc} onChange={(event) => { setdesc(event.target.value) }} />

        <button className='bg-primary text-dimWhite w-44 px-4 py-2 text-center text-xl font-bold rounded-md cursor-pointer m-5'>Add Task</button>
      </form>

      <hr />

      <div className='min-w-[100vw] my-4 py-4 min-h-40 flex items-center justify-center opacity-90 bg-orange-200 '>
        <ul>{renderTask}</ul>
      </div>



    </>

  )
}

export default page