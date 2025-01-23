import React from 'react'

const AcceptTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-500 rounded-xl ml-2'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-yellow-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-md font-bold'>{data.dateAdded}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-8'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded-md'>Mark as Completed</button>
                <button className='bg-red-600 py-1 px-2 text-sm rounded-md'>Mark as failed</button>
            </div>
        </div>
    )
}

export default AcceptTask