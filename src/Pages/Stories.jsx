import React, { useEffect } from 'react'

const Stories = () => {
    const images=[
        {image:"https://picsum.photos/210", name:"shaikh zahid "},
        {image:"https://picsum.photos/220", name:" zahid shaikh"},
        {image:"https://picsum.photos/221", name:"Muhammed shaikh "},
        {image:"https://picsum.photos/222", name:"Alem don "},
        {image:"https://picsum.photos/223", name:"Crozer daddy "},
        {image:"https://picsum.photos/224", name:"queshwashah "},
        {image:"https://picsum.photos/225", name:"Narendra Modu "},
        {image:"https://picsum.photos/226", name:"pinrraray"},
        {image:"https://picsum.photos/227", name:"Alem don "},
        {image:"https://picsum.photos/228", name:"Crozer daddy "},
        {image:"https://picsum.photos/229", name:"queshwashah "},
        {image:"https://picsum.photos/210", name:"shaikh zahid "},
        {image:"https://picsum.photos/220", name:" zahid shaikh"},
        {image:"https://picsum.photos/225", name:"Narendra Modu "},
        {image:"https://picsum.photos/226", name:"pinrraray"},
        {image:"https://picsum.photos/227", name:"Alem don "},
        {image:"https://picsum.photos/228", name:"Crozer daddy "},
        {image:"https://picsum.photos/229", name:"queshwashah "},
        {image:"https://picsum.photos/210", name:"shaikh zahid "},
        {image:"https://picsum.photos/220", name:" zahid shaikh"},
       
]
    useEffect(()=>{
    
     console.log("suggestions");
    },[])
  return (
    <div className='flex space-x-2 p-6 bg-white dark:bg-black dark:border-black
     dark:text-gray-200 border-gray-200 mt-3 border rounded-md overflow-x-scroll scrollbar-thin mx-auto'>
       { images.map((item)=>{
          return(<div> <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition   duration-200 ease-out' src={item.image} alt=""/> 
        <p className='text-xs w-14 truncate'>{item.name}</p> 
        </div>)
       })}
    </div>
  )
}

export default Stories