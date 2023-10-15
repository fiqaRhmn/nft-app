'use client'
import { signOut } from "next-auth/react";
import Image from "next/image"  
import { useRouter } from "next/navigation"

function Header() {
const route = useRouter();
   
  return (
    <div className="sticky bg-white top-0 z-50 flex flex-row justify-between items-center p-2 border-b-2 shadow-md ">
      <div>
        <Image 
          className="hover:cursor-pointer"
          src='/mintable-logo.png'
          alt='mintable logo'
          width={80}
          height={80}
          onClick={() => {route.push("/")}}
        />
      </div>

      <div className="text-4xl font-bold text-purple-700 ">Mintable Lite</div>
      <div className="flex flex-row items-center justify-center">

        
        <button className='font-bold text-lg border-2 border-none px-5 py-3 m-3 
        rounded-full  outline-black bg-purple-700 text-white cursor-pointer 
        shadow-md hover:scale-105 hover:shadow-lg 
        transition-transform transition-200' 
        onClick={() => signOut()}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header
