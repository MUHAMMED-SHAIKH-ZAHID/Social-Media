import React, { useEffect } from 'react'

const Stories = () => {
    const images=[
        {image:"https://picsum.photos/210",key:1, name:"shaikh zahid "},
        {image:"https://picsum.photos/220",key:2, name:" zahid shaikh"},
        {image:"https://picsum.photos/221",key:3, name:"Muhammed shaikh "},
        {image:"https://picsum.photos/222", key:4, name:"Alem don "},
        {image:"https://picsum.photos/223",key:5, name:"Crozer daddy "},
        {image:"https://picsum.photos/224",key:6, name:"queshwashah "},
        {image:"https://picsum.photos/225",key:7, name:"Narendra Modu "},
        {image:"https://picsum.photos/226",key:8, name:"pinrraray"},
        {image:"https://picsum.photos/227",key:9, name:"Alem don "},
        {image:"https://picsum.photos/228",key:10, name:"Crozer daddy "},
        {image:"https://picsum.photos/229",key:11, name:"queshwashah "},
        {image:"https://picsum.photos/210",key:12, name:"shaikh zahid "},
        {image:"https://picsum.photos/220",key:13, name:" zahid shaikh"},
      
       
]
    useEffect(()=>{
    
     console.log("suggestions");
    },[])
  return (
    <div  className='flex space-x-2 p-6 z-50  bg-white dark:bg-black dark:border-black
     dark:text-gray-200 border-gray-200   border rounded-md overflow-x-scroll scrollbar-thin mx-auto'>
       { images.map((item)=>{
          return(<div key={item.key}> <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition z-50  duration-200 ease-out' src={item.image} alt=""/> 
        <p className='text-xs w-14 truncate'>{item.name}</p> 
        </div>)
       })}
    </div>
  )
}

export default Stories