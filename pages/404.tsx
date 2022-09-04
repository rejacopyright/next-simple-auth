import type { NextPage } from 'next'
import Link from 'next/link'

const ErrorPage: NextPage<any> = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='m-0 text-6xl font-bold'>404</h1>
        <p className='mb-5 text-gray-400 font-thin'>PAGE NOT FOUND</p>
        <Link href='/'>
          <a className='block bg-indigo-500 text-white font-bold text-sm p-3 hover:bg-indigo-400 cursor-pointer rounded-full'>
            Back To Home
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
