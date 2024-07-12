import PropTypes from "prop-types";

const PottyTraining = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full shrink-0 text-center text-21xl text-download-nero font-nuckle ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
        <div className="flex-1 bg-gray-800 flex flex-row items-start justify-start pt-[91px] px-[499px] pb-[89px] box-border max-w-full z-[8] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[124px] mq800:pr-[124px] mq800:box-border mq1300:pl-[249px] mq1300:pr-[249px] mq1300:box-border">
          
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-[94px] px-[84px] box-border relative gap-[40px] max-w-full mt-[-3px] text-left text-56xl mq1125:pl-[42px] mq1125:pr-[42px] mq1125:box-border mq800:gap-[20px] mq800:pt-[250px] mq800:px-[21px] mq800:pb-[61px] mq800:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/mask-group-3@2x.png"
        />
        
        <div className="w-[785px] flex flex-col items-start justify-start gap-[31px] max-w-full mq450:gap-[15px]">
          <div className="w-full flex flex-row items-start justify-start py-0 px-0 box-border max-w-[465.9px] z-[1] mq800:max-w-full">
            <h1 className="m-0 h-[50px] w-[521px] relative text-inherit leading-[50px] font-semibold font-inherit flex items-center shrink-0 max-w-[112%] mq450:text-26xl mq450:leading-[30px] mq800:text-41xl mq800:leading-[40px]">
              Potty Training
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px] text-6xl font-poppins">
            <h2 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-xl">
              <p className="m-0">
                Patience, consistency, and encouragement are key
              </p>
              <p className="m-0">{`when it comes to successful potty training, creating a positive `}</p>
              <p className="m-0">and supportive environment for your child.</p>
            </h2>
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[14.6px] px-[60px] pb-[14.4px] bg-download-nero rounded-41xl flex flex-row items-start justify-start box-border min-w-[200px] z-[2] hover:bg-gainsboro-100">
          <div className="relative text-xl leading-[21px]  font-nuckle text-black text-center inline-block min-w-[79px] max-h-[48px] mq450:text-base mq450:leading-[17px]">
            Explore
          </div>
        </button>
      </div>
    </div>
  );
};

PottyTraining.propTypes = {
  className: PropTypes.string,
};

export default PottyTraining;
