import React, { useState } from "react";


const Upload = () => {
  const [images, setImages] = useState([]);
  const [imageToRemove, setImageToRemove] = useState(null);
  function handleRemoveImg(imgObj) {}
  function handleOpenWidget() {
    var myWidget =window.cloudinary.createUploadWidget(
      {
        cloudName: "dkdtednaq",
        uploadPreset: "tolewx81",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
    //open widget
    myWidget.open()
  }
  return (
    <div>
      <button onClick={handleOpenWidget}>Upload Pictures</button>
      <div></div>
    </div>
  );
};

export default Upload;
