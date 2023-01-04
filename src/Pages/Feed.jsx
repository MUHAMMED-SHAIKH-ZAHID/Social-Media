import React from 'react'
import Post from './Post'
import Stories from './Stories'

const Feed = () => {
  return (
    <div className=''>
        <section className='col-span-2'>
          <div className="sticky top-0">

            <Stories />
          </div>
            <Post />
        
        </section>
    </div>
  )
}

export default Feed