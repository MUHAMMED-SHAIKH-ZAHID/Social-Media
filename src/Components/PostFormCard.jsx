import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadPost } from "../Redux/features/PostSlice";


export default function PostFormCard() {
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
        cloudName: "dkdtednaq",
        uploadPreset: "tolewx81",
        multiple: false, // restrict upload to a single file
        clientAllowedFormats: ["images", "png", "webp", "jpeg"], // restrict uploading to image files only

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
          className="grow p-3 h-14"
          placeholder={`Whats on your mind, ${userName}?`}
        />
      </div>
      <div className="flex gap-5 items-center mt-2">
        <div>
          <button onClick={openWidget} type="button" className="flex gap-1">
            <img
              alt=""
              className="max-h-5 ml-3"
              src="https://www.svgrepo.com/show/76225/picture-frame.svg"
            />
          </button>
        </div>
        <div className="grow text-right mb-2">
          <input hidden type="file" accept="" />
          {!image && (
            <button
              type="button"
              onClick={submitPost}
              className="  text-blue-400 bg-black px-6 py-1 rounded-md"
            >
              Share
            </button>
          )}
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
            className="flex mx-auto  text-blue-400 bg-black m-2 px-6 py-1 rounded-md"
          >
            Share
          </button>
        </>
      )}
    </div>
  );
}