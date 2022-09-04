import type { NextPage } from 'next'
import Link from 'next/link'
import { useRef } from 'react'
import { setUser } from '@redux'

const Index: NextPage<any> = () => {
  const inputRef: any = useRef()
  const handleSubmit = () => {
    const {
      username: { value: username },
      password: { value: password },
    } = inputRef || {}
    if (username && password) {
      setUser({ id: 1, username, password, token: 'token123' })
    }
  }
  return (
    <div className='container'>
      <div className='flex flex-row items-center justify-center h-screen'>
        <div className='basis-full lg:basis-2/5 md:basis-2/3 sm:basis-3/4 bg-slate-50 px-7 py-5 rounded-lg'>
          <div className='font-bold text-2xl mb-5 pb-5 text-center border-b'>
            <div className='text-indigo-500 mb-1'>LOGIN</div>
            <div className='text-xs font-light'>Lorem ipsum dolor sit amet.</div>
          </div>
          <div className='mb-3'>
            <label className='block text-sm mb-1 required'>
              <span>Name / Username</span>
              <span className='text-rose-400 ml-1'>*</span>
            </label>
            <input
              ref={(ref) => (inputRef.username = ref)}
              type='text'
              name='username'
              className='rounded relative block w-full px-3 py-2 border border-indigo-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 text-sm'
              defaultValue='Reja Jamil'
            />
          </div>
          <div className='mb-3'>
            <label className='block text-sm mb-1 required'>
              <span>Password</span>
              <span className='text-rose-400 ml-1'>*</span>
            </label>
            <input
              ref={(ref) => (inputRef.password = ref)}
              type='password'
              name='password'
              className='rounded relative block w-full px-3 py-2 border border-indigo-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 text-sm'
              defaultValue='password'
            />
          </div>
          <div className='mt-5 mb-2'>
            <div
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer'
              onClick={handleSubmit}
            >
              LOGIN
            </div>
            <div className='text-center my-3 text-xs font-semibold'>OR</div>
            <div className='text-center'>
              <Link href='/'>
                <a className='py-2 px-3 bg-indigo-50 rounded text-indigo-500 font-semibold text-xs hover:bg-indigo-500 hover:text-white'>
                  Go To Homepage
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
