import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-5 px-10 bg-yellow-400'>
            <h2 className='text-2xl font-semibold'>{data.taskNumber.active}</h2>
            <h3 className='text-xl font-medium'>{data.taskNumber.active > 1 ? 'Active Tasks' : 'Active Task'}</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-10 bg-blue-400'>
            <h2 className='text-2xl font-semibold'>{data.taskNumber.newTask}</h2>
            <h3 className='text-xl font-medium'>{data.taskNumber.newTask > 1 ? 'New Tasks' : 'New Task'}</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-10 bg-green-400'>
            <h2 className='text-2xl font-semibold'>{data.taskNumber.completed}</h2>
            <h3 className='text-xl font-medium'>{data.taskNumber.completed > 1 ? 'Completed Tasks' : 'Completed Task'}</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-10 bg-red-400'>
            <h2 className='text-2xl font-semibold'>{data.taskNumber.failed}</h2>
            <h3 className='text-xl font-medium'>{data.taskNumber.failed > 1 ? 'Failed Tasks' : 'Failed Task'}</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers