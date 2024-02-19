import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className=" absolute top-0 flex justify-between items-center h-[60px]"> 
      <div className=" ml-6 p-4 bg-slate-900 rounded-xl "/>
      <div className="flex justify-between w-28 mr-6">
      <Link href='/'>Home </Link>
      <Link href='/posts'>Posts </Link>
      </div>
      </header>
  )
}

export default Header