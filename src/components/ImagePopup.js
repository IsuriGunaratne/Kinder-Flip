import React from 'react';

const ImagePopup = () => {
  return (

 <div className="relative  flex justify-center mt-[100px] left-[7px] space-x-6">
  <div className="w-[235px] h-[418.5px] flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
    <img
      className="w-[290px] h-[456.5px] object-cover mt-[-25px] right-[100px]"
      loading="lazy"
      alt="left"
      src="/left@2x.png"
    />
  </div>
  <div className="w-[285px] h-[418.5px] flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
    <img
      className="w-[285px] h-[418.5px] object-cover"
      loading="lazy"
      alt="left-middle"
      src="/left-middle@2x.png"
    />
  </div>
  <div className="w-[285px] h-[371px] flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
    <img
      className="w-[285px] h-[371px] object-cover"
      loading="lazy"
      alt="right-middle"
      src="/right-middle@2x.png"
    />
  </div>
  <div className="w-[285px] h-[371px] flex items-center justify-center transition-transform duration-300 transform hover:scale-110 rounded-lg">
    <img
      className="w-[285px] h-[371px] object-cover rounded-2xl"
      loading="lazy"
      alt="right"
      src="/right@2x.png"
    />
  </div>
</div> 


  
  );
};

export default ImagePopup;
