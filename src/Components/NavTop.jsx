import React, { useState } from 'react'
import Modal from '../Pages/Modal'
import PostFormCard from './PostFormCard'
import moon from '../Images/moon.jpg'
import earth from '../Images/earth.jpg'


const NavTop = ({handleThemeSwitcher,theme}) => {
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  return (
    <div className='mb-10 dark:bg-black bg-white w-[100%] pb-3 border-b-2 border-b-black-400'>
        <div className='flex justify-between '>
          <div className='flex'>
        <p className="delay-200 align-middle pl-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl font-bold bg-red-500 pt-2">
              Social Media
            </p>
            
          </div>
            <div className='flex  '>
              <div className="">
              <div onClick={handleThemeSwitcher} className="flex  mt-3 mr-3 transition-all duration-300 delay-500">
{theme === 'dark'&& <img  src={moon} style={{width:"20px" ,borderRadius:"50%"}}/>}
{theme === 'light'&& <img  src={earth} style={{width:"20px" ,borderRadius:"50%"}}/>}
        
              </div>
              </div>
            <div className='flex  '>
            <Modal
          onClose={handleOnClose}
          visible={showMyModal}
          id={"container"}
          content={<PostFormCard setShowMyModal={setShowMyModal} />}
        ></Modal>
        <div
          onClick={() => setShowMyModal(true)}
          className={``}
        >
        
            <div>
              {" "}
              {theme === 'light'&&<svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                className="mt-3 mr-4 dark:text-black text-black"
              >
                
                <path
                  fill="black "
                  d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-3h3.025q.425 0 .7-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11h-3V7.975q0-.425-.287-.7Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3H7.975q-.425 0-.7.287Q7 11.575 7 12t.287.712Q7.575 13 8 13h3v3.025q0 .425.288.7q.287.275.712.275Zm0 5q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                />
              </svg> }
              {theme === 'dark'&&<svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                className="mt-3 mr-4 dark:text-black text-black"
              >
                
                <path
                  fill="white "
                  d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-3h3.025q.425 0 .7-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11h-3V7.975q0-.425-.287-.7Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3H7.975q-.425 0-.7.287Q7 11.575 7 12t.287.712Q7.575 13 8 13h3v3.025q0 .425.288.7q.287.275.712.275Zm0 5q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                />
              </svg> }
            </div>
        </div>

              
            </div>

            </div>
        </div>
    </div>
  )
}

export default NavTop