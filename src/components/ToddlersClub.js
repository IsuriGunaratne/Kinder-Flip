import ClubIcons from "./ClubIcons";
import PropTypes from "prop-types";

const ToddlersClub = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[94px] pr-[25px] pl-5 box-border max-w-full shrink-0 text-center text-13xl text-download-nero font-nuckle mq800:pb-10 mq800:box-border mq1300:pb-[61px] mq1300:box-border ${className}`}
    >
      <div className="w-[1126.4px] flex flex-col items-end justify-start gap-[102.2px] max-w-full mq800:gap-[26px] mq1300:gap-[51px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[12.7px] max-w-full">
          <ClubIcons
            centre="/centre@2x.png"
            funky="Funky"
            plasters="Plasters"
          />
          <div className="h-[573.8px] flex-1 relative min-w-[260px] max-w-full">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[3]"
              alt=""
              src="/centre-1@2x.png"
            />
            <div className="absolute top-[426px] left-[98.8px] capitalize inline-block w-[206.9px] h-[78.7px] z-[4] mq450:text-lgi mq800:text-7xl">
              <p className="m-0 leading-[120%] font-light">Tod</p>
              <p className="m-0 text-21xl">
                <b className="leading-[100%]">{`Wet Wipes `}</b>
              </p>
            </div>
            <div className="absolute top-[490px] left-[105.2px] w-[190.8px] h-[55.1px] ">
              <div className="absolute top-[21px] left-[0px] w-[190.8px] h-[34.1px] z-[4] flex items-center justify-center">
                <img
                  className="w-full h-full z-[4] object-contain absolute left-[0px] top-[22px] [transform:scale(3.581)] "
                  loading="lazy"
                  alt=""
                  src="/explore-1.svg"
                  
                />
              </div>
              <a href="#" className="absolute top-[0px] left-[27px] capitalize font-semibold inline-block w-[140px] h-[41.1px] z-[5] no-underline text-white ">
                <p className="m-0 leading-[100%] ">&nbsp;</p>
                <p className="m-0 text-base leading-[100%]  hover:scale-110 hover:opacity-90 transition-transform duration-300">Buy Now</p>
              </a>
            </div>
          </div>
          <ClubIcons
            centre="/accesories@2x.png"
            funky="3D"
            plasters="Stickers "
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-7 box-border max-w-full text-41xl text-gray-200 font-lato">
          <div className="w-[862px] flex flex-col items-start justify-start gap-[17.5px] max-w-full">
            <div className="w-[838.3px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 w-[488.3px] relative text-inherit leading-[55.5px] capitalize inline-block shrink-0 max-w-full z-[7] font-inherit mq450:text-17xl mq50:leading-[43px] mq800:text-29xl mq800:leading-[58px]">
                <span className="font-medium">Join the Toddlers </span>
                <span className="font-semibold font-roboto-serif text-gray-400">{` `}</span>
                <b className="text-darkslategray-100">Club</b>
              </h1>
            </div>

          
            <div className="self-stretch flex flex-col items-start justify-start pt-[43px] pb-0 pr-[58px] pl-[59px] box-border gap-[282px] bg-[url('/public/kinderflip-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[7] text-6xl mq450:gap-[70px] mq1125:gap-[141px] mq1125:pl-[29px] mq1125:pr-[29px] mq1125:box-border mq800:pt-[250px] mq800:box-border">
              <h2 className="m-0 self-stretch relative text-inherit leading-[150.5%] font-normal font-inherit z-[8] mq450:text-xl mq450:leading-[30px]">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Become a KinderFlipCC member and get exclusive access
                </p>
                <p className="m-0"> to our premium portal</p>
              </h2>
              <div className="self-stretch  flex flex-row items-start justify-center py-0 pr-0.5 pl-0">
              <a href="#" className="block">
                <button className="cursor-pointer  hover:scale-105 hover:opacity-90 transition-transform duration-300 p-0 bg-darkslategray-100 h-[47px] w-[317.4px] relative shadow-[0px_10px_40px_rgba(106,_105,_104,_0.3)] rounded-81xl z-[8]">
                
                  <div className="absolute top-[11px] left-[48px] text-xl font-semibold font-lato text-download-nero text-left inline-block w-[210.3px] h-[25.4px] z-[1] mq450:text-base">
                    Become a Member now
                  </div>
                  <img
                    className="absolute top-[1.3px] left-[251.6px] w-[44.7px] h-[44.7px] z-[2]"
                    alt=""
                    src="/outlineinterfacearrow-right.svg"
                  />
                </button>
              </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ToddlersClub.propTypes = {
  className: PropTypes.string,
};

export default ToddlersClub;
