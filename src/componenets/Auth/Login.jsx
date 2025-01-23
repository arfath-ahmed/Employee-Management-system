import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>
    {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
            <form onSubmit={(e)=>
                {
                    submitHandler(e)
                }
            } className='flex flex-col items-center justify-center'>
                <input value = {email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className='placeholder:text-grey-400 outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full' type="email" placeholder='Enter your email'/>
                <input value = {password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} required className='mt-5 placeholder:text-grey-400 outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full' type="password" placeholder='Enter your password'/>
                <button className='mt-5 text-white placeholder:text-white outline-none bg-emerald-600 py-3 px-5 text-xl rounded-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login