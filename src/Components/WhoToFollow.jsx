import React from 'react'


    const images=[
        {image:"https://picsum.photos/210", name:"shaikh zahid "},
        {image:"https://picsum.photos/229", name:"queshwashah "},
        {image:"https://picsum.photos/225", name:"Narendra Modu "},
        {image:"https://picsum.photos/226", name:"pinrraray"},
        {image:"https://picsum.photos/223", name:"Crozer daddy "},
        {image:"https://picsum.photos/224", name:"queshwashah "},
        {image:"https://picsum.photos/225", name:"Narendra Modu "},
        {image:"https://picsum.photos/226", name:"pinrraray"},
        {image:"https://picsum.photos/227", name:"Alem don "},
        {image:"https://picsum.photos/228", name:"Crozer daddy "},
        {image:"https://picsum.photos/227", name:"Alem don "},
        {image:"https://picsum.photos/228", name:"Crozer daddy "},
        {image:"https://picsum.photos/229", name:"queshwashah "},
        {image:"https://picsum.photos/210", name:"shaikh zahid "},
        {image:"https://picsum.photos/220", name:" zahid shaikh"},
       
]

const WhoToFollow = () => {
  return (
    <div className='dark:bg-zinc-600 bg-slate-200 rounded-xl m-3 p-4'>
       <h1 className='text-xl font-semibold '>Who to follow</h1>
       <div className=' max-h-56  overflow-y-auto scrollbar-thin'>
       {images.map((item)=>{
        return <div className='flex '> <img src={item.image} alt='' className='h-14 w-14 mt-2 rounded-full'></img>
        <div className=' m-3'>
       <p className='flex truncate'>{item.name}</p>
       <span className='text-xs text-gray-300'>@{item.name}</span>
         </div>
         <div className='ml-auto'>
            <button className='dark:text-black dark:bg-white  rounded-2xl m-2 px-2 mt-5 font-semibold'>follow</button>
         </div>
         
        </div>
       })}
    </div>
    </div>
  )
}

export default WhoToFollow