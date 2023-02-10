import React from 'react'


    const images=[
        {image:"https://picsum.photos/210",key:1,  name:"shaikh zahid "},
        {image:"https://picsum.photos/229", key:2, name:"queshwashah "},
        {image:"https://picsum.photos/225", key:3, name:"Narendra Modu "},
        {image:"https://picsum.photos/226", key:4, name:"pinrraray"},
        {image:"https://picsum.photos/223", key:5, name:"Crozer daddy "},
        {image:"https://picsum.photos/224", key:6, name:"queshwashah "},
        {image:"https://picsum.photos/225", key:7, name:"Narendra Modu "},
        {image:"https://picsum.photos/226", key:8, name:"pinrraray"},
        {image:"https://picsum.photos/227", key:9, name:"Alem don "},
        {image:"https://picsum.photos/228", key:10, name:"Crozer daddy "},
        {image:"https://picsum.photos/227", key:11, name:"Alem don "},
        {image:"https://picsum.photos/228", key:12, name:"Crozer daddy "},
        {image:"https://picsum.photos/229", key:13, name:"queshwashah "},
        {image:"https://picsum.photos/210", key:14, name:"shaikh zahid "},
        {image:"https://picsum.photos/220", key:15, name:" zahid shaikh"},
       
]

const WhoToFollow = () => {
  return (
    <div className='dark:bg-zinc-800 bg-slate-200 rounded-xl m-3 p-4'>
       <h1 className='text-xl font-semibold '>Who to follow</h1>
       <div className=' max-h-96  overflow-y-auto scrollbar-thin'>
       {images.map((item)=>{
        return <div key={item.key} className='flex '> <img src={item.image} alt='' className='h-14 w-14 mt-2 rounded-full'></img>
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