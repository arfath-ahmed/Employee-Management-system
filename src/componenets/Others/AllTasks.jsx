import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-60'>
            <div className='bg-emerald-700 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/6 text-lg font-medium flex justify-center'>Employee Name</h2>
                <h3 className='w-1/6 text-lg font-medium flex justify-center'>Employee ID</h3>
                <h3 className='w-1/6 text-lg font-medium flex justify-center'>New Tasks</h3>
                <h5 className='w-1/6 text-lg font-medium flex justify-center'>Active Tasks</h5>
                <h5 className='w-1/6 text-lg font-medium flex justify-center'>Completed</h5>
                <h5 className='w-1/6 text-lg font-medium flex justify-center'>Failed</h5>
            </div>
            <div className='h-[80%] overflow-auto'>
                {userData.map(function (elem, idx) {
                    return (
                        <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                            <h2 className='w-1/6 text-lg font-medium flex justify-center'>{elem.firstName}</h2>
                            <h3 className='w-1/6 text-lg font-medium flex justify-center'>{elem.id}</h3>
                            <h3 className='w-1/6 text-lg font-medium flex justify-center text-blue-600'>{elem.taskNumber.newTask}</h3>
                            <h5 className='w-1/6 text-lg font-medium flex justify-center text-yellow-400'>{elem.taskNumber.active}</h5>
                            <h5 className='w-1/6 text-lg font-medium flex justify-center text-white'>{elem.taskNumber.completed}</h5>
                            <h5 className='w-1/6 text-lg font-medium flex justify-center text-red-600'>{elem.taskNumber.failed}</h5>
                        </div>)
                })}
            </div>
        </div>
    );
};



export default AllTasks