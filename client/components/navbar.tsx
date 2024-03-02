
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Navbar = () => {

  return (
    <nav className='shadow-md flex justify-evenly items-center h-16 w-full backdrop-filter backdrop-blur-2xl'>
      <p className='text-white text-2xl font-bold tracking-widest'>Blinkr <span className='text-2xl font-bold text-red-500'>.</span></p>
      <Link href='/' className='text-white font-semibold'>Analytics</Link>
      <Link href='/' className='text-white font-semibold'>My links</Link>
      <UserButton/>
    </nav>
  )
}

export default Navbar