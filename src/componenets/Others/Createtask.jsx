import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Createtask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    if (confirm("Are you sure you want to create this task?")) {
      setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed:false})
      const data = userData

      data.forEach((ele) => {
        if(ele.firstName == asignTo)
        {
          ele.tasks.push(newTask)
          ele.taskNumber.newTask = ele.taskNumber.newTask + 1
        }
      })

      setUserData(data)

      setTaskTitle('')
      setTaskDescription('')
      setTaskDate('')
      setAsignTo('')
      setCategory('')

      confirmMessage()
    }
  }

  const confirmMessage = () => {
    alert("Task created successfully!")
  }

  return (
    <div className='p-5 bg-[#1C1C1C] mt-12 rounded-md'>
      <h1 className='text-[40px] mb-5'>Create Task</h1>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex flex-wrap w-full items-center justify-between'>
        <div className='w-1/2 '>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input value={taskTitle} onChange={(e) => {
              setTaskTitle(e.target.value)
            }
            } className='text-sm py-1 px-2 w-4/5 mb-3 rounded ouline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder="Eg: Make a UI design" />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input value={taskDate} onChange={(e) => {
              setTaskDate(e.target.value)
            }
            } className='text-sm py-1 px-2 w-4/5 mb-3 rounded ouline-none bg-transparent border-[1px] border-gray-400' type="date" />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
            <input value={asignTo} onChange={(e) => {
              setAsignTo(e.target.value)
            }
            } className='text-sm py-1 px-2 w-4/5 mb-3 rounded ouline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Employee Name' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input value={category} onChange={(e) => {
              setCategory(e.target.value)
            }
            } className='text-sm py-1 px-2 w-4/5 mb-3 rounded ouline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Design, Dev etc...' />
          </div>
        </div>
        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea value={taskDescription} onChange={(e) => {
            setTaskDescription(e.target.value)
          }
          } className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default Createtask