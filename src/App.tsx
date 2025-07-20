import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'

const App = () => {
  return (
    // <div className='text-2xl underline bg-gradient-to-r from-[#0f172a] to-[#1e293b] w-full h-screen'>App</div>
    <RouterProvider router={router}/>

  )
}

export default App