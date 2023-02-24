import React from 'react'

import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <div className='w-full'>
        <Topbar />
        <div className='flex justify-center m-10'>
            {children}
        </div>
    </div>
  )
}

export default Layout;