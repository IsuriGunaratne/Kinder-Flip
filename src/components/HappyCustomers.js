import React, { useState } from "react";
import PropTypes from "prop-types";


const testimonials = [
  {
    name: 'Sarah J',
    text: "I couldn't be happier with the KinderFlip potty! It has truly transformed the potty training experience for my little one. Thank you, KinderFlip!",
  },
  {
    name: 'John D',
    text: "This product is amazing! It has made potty training so much easier.",
  },
  {
    name: 'Emily R',
    text: "KinderFlip potty is a lifesaver. My child loves it and it works perfectly.",
  },
  // Add more testimonials here as needed
];

const HappyCustomers = ({ className = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-[25px] pl-5 box-border max-w-full shrink-0 text-center text-13xl text-download-black font-nuckle ${className}`}
    >
      <div className="w-[1024px] flex flex-col items-end justify-start gap-[97px] max-w-full mq1125:gap-[48px] mq800:gap-[24px]">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[248px] flex-1 relative rounded-6xl max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-9717@2x.png"
          />
          <button className="cursor-pointer [border:none] pt-[7px] px-3.5 pb-1 bg-download-nero w-[120px] !m-[0] absolute bottom-[22px] left-[58px] rounded-mini flex flex-row items-start justify-start box-border z-[1] hover:bg-gainsboro-100">
            <div className="h-8 w-[120px] relative rounded-mini bg-download-nero hidden" />
            <div className="w-[82px] relative text-mini leading-[21px] font-nuckle text-download-black text-center flex items-center justify-center shrink-0 z-[2]">
              Explore
            </div>
          </button>
        </div>
        <div className="w-[1000px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[718px] flex flex-col items-start justify-start gap-[21.7px] max-w-full">
            <div className="w-[789px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[412px] flex flex-col items-start justify-start gap-[15px] max-w-full">
                <h1 className="m-0 self-stretch h-[29px] relative text-inherit leading-[150.5%] font-semibold font-inherit inline-block shrink-0 z-[7] mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[39px]">
                  Happy Little Customers
                </h1>
                <h3 className="m-0 self-stretch relative text-xl leading-[150.5%] font-light font-inherit z-[7] mq450:text-base mq450:leading-[24px]">
                  Made for Magic
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="flex flex-row items-start justify-start gap-[6.6px] z-[7]">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    className="h-[26.8px] w-[26.8px] relative min-h-[27px]"
                    loading="lazy"
                   
                    src="/outlinestatusstar.svg"  
                  />
                ))}
              </div>
            </div>

            <div className="self-stretch h-[108px] relative text-black inline-block shrink-0 z-[7] text-lg">
              <div className="text-center">
                <p className="m-0 leading-[150.5%] font-light mb-4">
                  {testimonials[currentSlide].text}
                </p>
                <p className="m-0 font-nuckle text-[28px] font-[470] leading-[45.15px] text-center">
                  <b className="leading-[27.5%]">{testimonials[currentSlide].name}</b>
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[30px] pl-5">
              <div className="relative flex justify-center gap-[0.93rem] ">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`rounded-[50%] cursor-pointer w-[0.625rem] h-[0.625rem] z-[7] ${
                      currentSlide === index ? "bg-download-black" : "bg-gainsboro-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HappyCustomers.propTypes = {
  className: PropTypes.string,
};

export default HappyCustomers;
