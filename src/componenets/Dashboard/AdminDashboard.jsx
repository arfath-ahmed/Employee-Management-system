import React from 'react'
import Header from '../Others/Header'
import Createtask from '../Others/Createtask'
import AllTasks from '../Others/AllTasks'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={props.changeUser}/>

      <hr />
      <Createtask />
      <AllTasks />
    </div>
  )
}

export default AdminDashboard