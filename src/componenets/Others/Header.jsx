import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data)
  // {
  //   setUsername('Admin')
  // }

  // else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    //window.location.reload()
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between m-3'>
        <h1 className='text-2xl font-medium max-[400px]: text-lg'>Hello <br /> <span className='text-3xl font-semibold max-[400px]: text-xl'>username 👋</span></h1>
        <button onClick={logOutUser} id='headerBtn' className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-lg max-[400px]: text-xs '>Log Out</button>
    </div>
  )
}

export default Header