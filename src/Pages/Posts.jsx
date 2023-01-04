import React, { useState } from 'react'
import Post from './Post'

// const posts=[
//     {
//         id:'1',
//         username:"Sharukh khan",
//         userImg:"https://picsum.photos/227",
//         img:'https://media.gettyimages.com/id/1067406952/photo/india-arts-cinema-bollywood.jpg?s=1024x1024&w=gi&k=20&c=aCrbiUTSTVkB38TiPkZHw90zjZm7cYSrXEgzND66rvE=',
//         Caption:"Happiness in success ",

//     },
//     {
//         id:'2',
//         username:"Shradha Kapoor",
//         userImg:"https://picsum.photos/227",
//         img:'https://media.gettyimages.com/id/1169208239/photo/indian-actor-shraddha-kapoor-attends-the-media-interview-for-film-promotion-saaho-on-august.jpg?s=612x612&w=0&k=20&c=JkdQgruin6WfnWdCsgNRhCwrTn8KQ6GBgTcxRvLUdsU=',
//         Caption:"New Trend ",
        

//     },
// ];

const Posts = () => {
    const [posts,set]=useState(
        [
            {
                id:'1',
                username:"Sharukh khan",
                userImg:"https://picsum.photos/227",
                img:'https://media.gettyimages.com/id/1067406952/photo/india-arts-cinema-bollywood.jpg?s=1024x1024&w=gi&k=20&c=aCrbiUTSTVkB38TiPkZHw90zjZm7cYSrXEgzND66rvE=',
                Caption:"Happiness in success ",
        
            },
            {
                id:'2',
                username:"Shradha Kapoor",
                userImg:"https://picsum.photos/227",
                img:'https://media.gettyimages.com/id/1169208239/photo/indian-actor-shraddha-kapoor-attends-the-media-interview-for-film-promotion-saaho-on-august.jpg?s=612x612&w=0&k=20&c=JkdQgruin6WfnWdCsgNRhCwrTn8KQ6GBgTcxRvLUdsU=',
                Caption:"New Trend ",
                
        
            },
        ]
    )
    console.log(posts,"i am waiting for the answer for so much hours baby");
  return (
    <div>
        {
        posts.map((post) =>{ 

          return(  <Post
            data={ {
            id:post.id,
            username:post.username,
            UserImage:post.userImg,
            Image:post.img,
            caption:post.Caption}}
            
            />)}
        )}
    </div>
  )
}

export default Posts