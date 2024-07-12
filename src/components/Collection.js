import OutlineInterfaceCaretRightIcon from "./OutlineInterfaceCaretRightIcon";
import PropTypes from "prop-types";
import React, { useState } from 'react';


const Collection = ({ className = "" }) => {
  const images = [
    "/3-1@2x.png",
    "/1-9@2x.png",
    "/2-3@2x.png"
  ];

  const [currentImages, setCurrentImages] = useState([0, 1, 2]);

  const handleLeftClick = () => {
    setCurrentImages([currentImages[1], currentImages[2], currentImages[0]]);
  };

  const handleRightClick = () => {
    setCurrentImages([currentImages[2], currentImages[0], currentImages[1]]);
  };


  return (
    <section
      className={`mr-[-1px] self-stretch h-[1299px]  bg-download-nero overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[107px] px-0 pb-[490px] box-border relative gap-[196px] max-w-full text-center text-41xl text-gray-200 font-nuckle mq450:h-auto mq450:gap-[49px] mq1125:pt-[45px] mq1125:pb-[212px] mq1125:box-border mq800:gap-[98px] mq800:pt-[29px] mq800:pb-[138px] mq800:box-border mq1300:pt-[70px] mq1300:pb-[326px] mq1300:box-border ${className}`}
    >
     <div className="w-full  h-[508px] self-stretch absolute !m-[0] top-[255px]  mq450:h-auto mq450:min-h-[508px] flex items-center justify-between">
      
      <div className="relative w-1/3 flex  justify-center items-center">
        <img
          className="w-[446px] h-[251px] object-contain"
          loading="lazy"
          alt=""
          src={images[currentImages[0]]}
        />
      </div>
      <div className="relative w-1/3 flex flex-col justify-center items-center">
        <div onClick={handleLeftClick} className="cursor-pointer mb-2 mt-2 absolute top-[0px] left-[-80px]  w-full flex flex-row items-start justify-between  py-[225px] pr-[0px] pl-[0px] min-h-[550px] gap-[70px] max-w-full mq450:flex-wrap">
          <OutlineInterfaceCaretRightIcon outlineInterfaceCaretRigh="/outlineinterfacecaret-right@2x.png" />
        </div>
        <img
          className="w-[800px] h-[485px] object-contain"
          loading="lazy"
          alt=""
          src={images[currentImages[1]]}
        />
        <div onClick={handleRightClick} className="cursor-pointer mt-2 absolute top-[0px] left-[434px] w-full flex flex-row items-start justify-between  py-[225px] pr-8 pl-[180px] min-h-[550px] gap-[70px] max-w-full mq450:flex-wrap">
          <OutlineInterfaceCaretRightIcon outlineInterfaceCaretRigh="/outlineinterfacecaret-right-1.svg" />
        </div>
      </div>
      <div className="relative w-1/3 flex justify-center items-center ">
        <img
          className="w-[490px] h-[284px] object-contain"
          loading="lazy"
          alt=""
          src={images[currentImages[2]]}
        />
      </div>
    </div>

    <div className=" h-[260px] relative bg-silver hidden z-[1] " />
    <div className="w-[1050px] flex flex-row items-center justify-center py-0 pr-0 pl-0 box-border relative max-w-full shrink-0 mx-auto">
        <div className="flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-[245px] box-border max-w-full mq450:pb-[159px] mq450:box-border">
          <div className="w-[987px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[17px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 h-[72px] w-full relative text-inherit leading-[120%] capitalize inline-block max-w-full font-inherit mq450:text-17xl mq450:leading-[43px] mq800:text-29xl mq800:leading-[58px]">
                <span className="font-normal">Say Goodbye to</span>
                <b className="text-darkslategray-100">
                  <span className="text-gray-400">{` `}</span>
                  <span>Diapers</span>
                </b>
              </h1>
            </div>
            <blockquote className="m-0 self-stretch relative text-xl leading-[150.5%] text-darkslategray-100 z-[2] mq450:text-base mq450:leading-[24px]">
              <span className="font-semibold">
                "Kinderflip is thrilled to unveil our latest addition:
              </span>
              <span>
                {" "}
                the Kids Travel Potty featuring the charming Wolfy character!
                Explore our delightful collection, perfect for gifting, loving,
                or becoming your child's new favorite travel companion."
              </span>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-10 pr-5 pl-[62px] box-border max-w-full text-left text-xl text-darkslategray-100 mq800:pl-[31px] mq800:box-border">
        <div className="w-[579.5px] flex flex-row flex-wrap items-end justify-start gap-[54px] max-w-full mq800:gap-[27px]">
          <div className="w-[230px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
            <div className="self-stretch h-[54px] relative ">
              
              <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] rounded-81xl max-h-full w-[14rem] z-[2] flex items-center justify-center" >
                <img
                  className="h-full w-full z-[2] object-contain absolute left-[0rem] top-[1.375rem] [transform:scale(2.63)] "
                  loading="lazy"
                  alt=""
                  src="/explore.svg"
                />
              </div>
              <a href="#" className="m-0 absolute top-[1rem] left-[3.25rem] text-inherit font-normal no-underline font-inherit  z-[3] mq450:text-[1rem] 
                bg-transparent hover:text-black hover:scale-110 transition-all duration-300 ease-in-out">
                Add to Cart
              </a>
            </div>
          </div>
         
          <button className="cursor-pointer pt-5 px-[59px] pb-[11px] bg-darkslategray-100 flex-1 shadow-[0px_22px_44px_rgba(106,_105,_104,_0.25)] rounded-81xl box-border flex flex-row items-start justify-end min-w-[157px] whitespace-nowrap z-[3] border-[0px] border-solid border-gray-100 mq450:pl-5 mq450:pr-5 mq450:box-border animate-pop">
            <a href="#">
              <b className="w-[157px] relative text-11xl inline-block font-nuckle text-download-nero text-left shrink-0 z-[4]">
                Buy Now
              </b>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

Collection.propTypes = {
  className: PropTypes.string,
};

export default Collection;

