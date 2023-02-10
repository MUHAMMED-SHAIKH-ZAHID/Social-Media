import React from 'react'
import NavTop from '../Components/NavTop'
import Post from './Post'
import Stories from './Stories'

const Feed = ({handleThemeSwitcher,theme}) => {
  return (
    <div className=''>
        <section className='col-span-2'>
        <div className=' lg:hidden absolute  top-0 z-[999] w-full '><NavTop handleThemeSwitcher={handleThemeSwitcher} theme={theme} /></div>
          <div className="xl:sticky relative xl:top-0 z-[900] mt-14 xl:mt-0 ">

            <Stories />
          </div>
            <Post />
        
        </section>
    </div>
  )
}

export default Feed