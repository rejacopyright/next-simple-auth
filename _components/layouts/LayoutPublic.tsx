import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

const Index: NextPage<any> = ({ children }) => {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <>
      {router?.pathname !== '/404' && (
        <nav className='bg-white fixed w-full z-50 py-2.5 border-b border-gray-200'>
          <div className='container w-screen flex flex-wrap justify-between items-center'>
            <Link href='/'>
              <a className='self-center'>
                <div className='leading-5 text-lg font-semibold whitespace-nowrap'>RJ App</div>
                <div className='text-xs text-indigo-500'>Change with your logo</div>
              </a>
            </Link>
            <div
              className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
            <div className={`w-full md:block md:w-auto ${!showMenu ? 'hidden' : ''}`}>
              <ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white'>
                <li>
                  <Link href='/'>
                    <a
                      className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-indigo-500 md:p-0'
                      aria-current='page'
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-500 md:p-0'>
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/admin'>
                    <a className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-500 md:p-0'>
                      Admin
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      <div className='container py-2.5'>{children}</div>
    </>
  )
}

export default Index
