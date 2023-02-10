import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts, uploadPost } from "../Redux/features/PostSlice";


export default function PostFormCard({setShowMyModal}) {
  const [image, setImage] = useState("");
  const captionRef = useRef("");
  const CloudinaryRef = useRef();
  const widgetRef = useRef();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {user} = useSelector((state)=>state)
  const userName =user.user
  const openWidget = () => {
    widgetRef.current.open();
  };
  useEffect(() => {
    CloudinaryRef.current = window.cloudinary;
    widgetRef.current = CloudinaryRef.current.createUploadWidget(
      {
        cloudName:"dkdtednaq",
        uploadPreset:"tolewx81",
        multiple: false, // restrict upload to a single file
        clientAllowedFormats: ["images", "png", "webp", "jpeg"], // rehstrict uploading to image files only

      },
      function (err, result) {
        if (!err && result && result.event === "success") {
          setImage(result.info.secure_url);
        }
      }
    );
  }, []);
  const submitPost = async (e) => {
    e.preventDefault();
    const post = {
      caption: captionRef.current.value,
      image,
    };
    if(captionRef.current.value === '' && image === ''){
      return undefined
    }
    const response = await  dispatch(uploadPost(post)).then(()=>{
      
      navigate('/');
      setImage("");
      setShowMyModal(false);
   })
   console.log(response)
    if (response.data.success) {
     return 
    }
    return undefined
  };
  return (
    <div className="border ">
      <div className="flex gap-2">
        <div>
          <image src="" className="blue" backgroundColor='#0D4C92' name={userName}/>
        </div>
        
        <input
          ref={captionRef}
          className="grow p-3 h-14 text-black"
          placeholder={`Add a Caption to the post, ${userName}?`}
        />
      </div>
      <div className="flex gap-5 items-center mt-2 ">
        <div>
          <button onClick={openWidget} type="button" className="flex gap-1">
            <img
              alt=""
              className="max-h-5 ml-3 btn"
              src="https://www.svgrepo.com/show/76225/picture-frame.svg"
            />
          </button>
        </div>
        <div className="grow text-right mb-2">
          <input hidden type="file" accept="" />
          {/* {!image && (
            <button
              type="button"
              onClick={submitPost}
              className="   mr-2 btn rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
</svg>

            </button>
          )} */}
        </div>
      </div>
      {image && (
        <>
          <div>
            <img alt="" className="w-full aspect-square" src={image} />
          </div>
          <button
            type="button"
            onClick={submitPost}
            className="flex  m-2 mx-auto btn rounded-md"
            > <span className="text-black">Share</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
</svg>
          </button>
        </>
      )}
    </div>
  );
}