import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-5xl text-gray-400 font-roboto-serif ${className}`}
    >
      <header className="self-stretch rounded-t-6xl rounded-b-none bg-download-black overflow-hidden flex flex-row items-start justify-center py-[11px] pr-5 pl-[27px] box-border gap-[276px] top-[0] z-[99] sticky max-w-full text-center text-mini text-gray-700 font-nuckle mq450:gap-[34px] mq800:hidden mq800:gap-[69px] mq1300:gap-[138px]">
        <div className="w-[145px] flex flex-col items-start justify-start ">
          <b className="relative leading-[120%] inline-block min-w-[95px] whitespace-nowrap">
            Love the Flip
          </b>
        </div>
        <b className="h-[18px] w-[395px] relative leading-[120%] capitalize inline-block whitespace-nowrap max-w-full">
          Get a 10% discount now: Sign up for the newsletter
        </b>
        <b className="w-[155px] relative leading-[120%] capitalize inline-block whitespace-nowrap">
          Delivery information
        </b>
      </header>
      <div className="ml-[-1px] self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-download-nero overflow-hidden flex flex-row flex-wrap items-start justify-center pt-[34px] pb-72 pr-11 pl-[55px] box-border relative gap-[4px] max-w-full mq800:pt-[22px] mq800:pb-[187px] mq800:pr-[22px] mq800:pl-[27px] mq800:box-border">
        <div className="h-[89px] w-[467px] relative shadow-[0px_4px_56px_rgba(0,_0,_0,_0.25)] rounded-t-none rounded-b-41xl bg-download-nero box-border hidden max-w-full z-[2] border-[3px] border-solid border-lightgray" />
        <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center z-[1] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            alt=""
            src="/group-1@2x.png"
          />
        </div>

               
        <div className="flex-1 flex flex-row items-start justify-center py-0 pr-[284px] pl-0 box-border gap-[42px] min-w-[778px] max-w-full text-61xl font-nuckle mq450:pr-5 mq450:box-border mq1125:flex-wrap mq1125:min-w-full mq800:gap-[21px] mq800:pr-[71px] mq800:box-border mq1300:pr-[142px] mq1300:box-border">
          <div className="flex flex-col items-start justify-start gap-[112px] min-w-[375px] max-w-full mq450:gap-[56px] mq1125:flex-1 mq1125:min-w-full">
            
            <img
              className="w-[197px] h-[45px] relative object-contain z-[2] transition-transform duration-300 hover:scale-y-[-1]"
              loading="lazy"
              alt=""
              src="/kinder-flip-light-blue-2@2x.png"
            />
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.562rem]">
        <div className="h-[13.688rem] w-[23.875rem] relative capitalize inline-block z-[1] mq450:text-[1.5rem] mq800:text-[2.5rem] group">
          <p className="m-0 leading-[120%] font-medium text-white">Made for</p>
          <p className="m-0 text-[6.875rem] text-white relative">
            <b className="leading-[108%] magic-text">Magic</b>
            <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Sparkle Animations */}
                <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-sparkle" style={{ top: '10%', left: '20%' }}></div>
                <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-sparkle" style={{ top: '30%', left: '50%' }}></div>
                <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-sparkle" style={{ top: '50%', left: '70%' }}></div>
                <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-sparkle" style={{ top: '70%', left: '40%' }}></div>
                <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-sparkle" style={{ top: '90%', left: '60%' }}></div>
                <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-sparkle" style={{ top: '15%', left: '80%' }}></div>
                <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-sparkle" style={{ top: '25%', left: '30%' }}></div>
                <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-sparkle" style={{ top: '55%', left: '90%' }}></div>
                <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-sparkle" style={{ top: '65%', left: '50%' }}></div>
                <div className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-sparkle" style={{ top: '85%', left: '70%' }}></div>
              </div>
            </span>
          </p>
        </div>
      </div>
            {/* <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.562rem]">
              <div className="h-[13.688rem] w-[23.875rem] relative capitalize inline-block z-[1] mq450:text-[1.5rem] mq800:text-[2.5rem]">
                <p className="m-0 leading-[120%] font-medium  text-white">Made for</p>
                <p className="m-0 text-[6.875rem] text-white">
                  <b className="leading-[108%]">Magic</b>
                </p>
              </div>
            </div> */}
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[322px] max-w-full text-mini text-download-black">
            <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq800:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border min-w-[142px] max-w-[144px]">
                <button className="cursor-pointer pt-1.5 px-[26px] pb-0.5 bg-download-black self-stretch shadow-[0px_22px_75px_rgba(33,_32,_32,_0.2)] rounded-81xl flex flex-row items-start justify-start shrink-0 z-[1] border-[6px] border-solid border-download-nero hover:bg-darkslategray-200 hover:box-border hover:border-[6px] hover:border-solid hover:border-gainsboro-100">
                  <div className="h-[41.1px] w-[138.5px] relative shadow-[0px_22px_75px_rgba(33,_32,_32,_0.2)] rounded-81xl bg-download-black box-border hidden border-[6px] border-solid border-download-nero" />
                  <a className="[text-decoration:none] w-[64.8px] relative text-mini font-bold font-nuckle text-download-nero text-left inline-block shrink-0 z-[3]">
                    Home
                  </a>
                </button>
                
              </div>
               <button className="cursor-pointer pt-2.5 px-[26px] pb-1.5 bg-download-black self-stretch shadow-[0px_22px_25px_rgba(93,_92,_92,_0.1)] rounded-81xl [background:linear-gradient(180deg,_#fff,_#fdfdfd)] min-w-[136px] max-w-[138px] box-border flex flex-row items-start justify-start shrink-0 z-[2] ml-[-52.2px] border-[2px] border-solid border-download-black hover:scale-110 hover:opacity-90 transition-transform duration-300 mq450:flex-1">
                <a href="#" className="[text-decoration:none] w-[48.2px] relative text-mini font-nuckle text-download-black text-left inline-block shrink-0 z-[3]">
                  About
                </a>
              </button>
            
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border min-w-[142px] max-w-[144px] ml-[-52.2px] ">
                <button className="cursor-pointer pt-2.5 px-[21px] pb-[7px] bg-[transparent] self-stretch shadow-[-11px_22px_30px_rgba(93,_92,_92,_0.1)] rounded-81xl [background:linear-gradient(180deg,_#fff,_#fdfdfd)] 
                flex flex-row items-start justify-start gap-[6.3px] shrink-0 z-[3] border-[2px] border-solid border-download-black hover:scale-110 hover:opacity-90 transition-transform duration-300 mq450:flex-1">
                  <img
                    className="h-[16.3px] w-[16.3px] relative z-[4]"
                    alt=""
                    src="/outlinegeneralshoppingbag.svg"
                  />
                  <a href="#" className="[text-decoration:none] w-[48.2px] relative text-mini font-nuckle text-download-black text-left inline-block shrink-0 z-[4]">
                    Shop
                  </a>
                </button>
              </div>
              <button className="cursor-pointer pt-2.5 px-[30px] pb-1.5 bg-[transparent] flex-[0.5581] shadow-[-6px_22px_25px_rgba(93,_92,_92,_0.1)] rounded-81xl [background:linear-gradient(180deg,_#fff,_#fdfdfd)] 
                box-border flex flex-row items-start justify-start min-w-[136px] max-w-[138px] shrink-0 z-[4] ml-[-52.2px] border-[2px] border-solid border-download-black
                mq450:flex-1 hover:scale-110 hover:opacity-90 transition-transform duration-300">
                <a href="#" className="[text-decoration:none] w-[55.5px] relative text-mini font-nuckle text-download-black text-left inline-block shrink-0 z-[5]">
                  Blog
                </a>
              </button>
              <button className="cursor-pointer pt-2.5 pb-[7px] pr-1.5 pl-[25px] bg-[transparent] flex-[0.7753] shadow-[-6px_22px_25px_rgba(93,_92,_92,_0.1)] rounded-81xl [background:linear-gradient(180deg,_#fff,_#fdfdfd)] box-border flex flex-row items-start justify-start min-w-[136px] max-w-[138px] shrink-0 whitespace-nowrap z-[5] ml-[-52.2px] border-[2px] border-solid border-download-black
                 mq450:flex-1 hover:scale-110 hover:opacity-90 transition-transform duration-300">
                <a href="#" className="[text-decoration:none] w-[103px] relative text-mini font-nuckle text-download-black text-left inline-block shrink-0 z-[6] ">
                  Contact us
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-4 pb-0 pr-2.5 pl-0">
        <a href="#">
          <img
            className="icon w-[25px] h-[26px] relative z-[1] hover:scale-110 hover:opacity-80 transition-transform  duration-300"
            loading="lazy"
            alt=""
            src="/outlineinterfacesearch.svg"
          />
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[15px] pb-0 pr-2.5 pl-0">
        <a href="#">
          <img
            className="icon w-[27px] h-[27px] relative z-[1] hover:scale-110 hover:opacity-80 transition-transform duration-300"
            loading="lazy"
            alt=""
            src="/outlinecommunicationuser.svg"
          />
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
        <a href="#">
          <img
            className="icon w-6 h-[25px] relative overflow-hidden shrink-0 z-[1] hover:scale-110 hover:opacity-80 transition-transform  duration-300"
            loading="lazy"
            alt=""
            src="/heart-1.svg"
          />
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
        <a href="#">
          <img
            className="icon w-8 h-[33px] relative overflow-hidden shrink-0 z-[1] hover:scale-110 hover:opacity-80 transition-transform duration-300"
            loading="lazy"
            alt=""
            src="/shoppingbag-1.svg"
          />
        </a>
      </div>
       
        <div className="h-[571px] w-[967px] relative rounded-t-31xl rounded-b-none bg-download-nero hidden max-w-full z-[5]" />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
