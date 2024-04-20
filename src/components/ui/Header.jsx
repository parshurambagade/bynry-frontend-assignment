import React from 'react'
import { LiaSearchSolid } from "react-icons/lia";

const Header = () => {
  return (
    <div className='flex justify-between items-center mt-20 mb-4 px-20 black py-4'>
      <h3 className='font-bold text-3xl'>Profiles</h3>
      <div className=' flex items-center w-1/2 border text-base border-slate-300 rounded-lg px-4 py-2 gap-2'>
        <LiaSearchSolid className='text-xl text-slate-400' />
        <input type="text" name="search" placeholder='search user...' className=' w-full  outline-none'/>
      </div>
    </div>
  )
}

export default Header