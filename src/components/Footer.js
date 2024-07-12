import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`mr-[-1px] w-full self-stretch h-[443px] justify-center  relative bg-download-black overflow-hidden shrink-0 max-w-full mt-[-461px] text-left text-base text-gray-400 font-roboto-serif mq450:h-auto mq450:min-h-[443] ${className}`}
    >
      <div className="absolute top-[147px] left-[1000px] w-[508.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[23px] box-border max-w-[889.41px] z-[1] text-xl text-download-nero font-nuckle mq1125:max-w-full">
        <div className="w-full flex flex-col items-start justify-start pt-[26px] px-[21px] pb-[121.8px] box-border gap-[10px] max-w-[889.41px] mq1125:max-w-full">
          <div className="flex flex-col items-start justify-start left-[100px]">
            <div className="w-[187px] flex flex-col items-start justify-start pt-0 pb-5 pr-5 pl-[3px] box-border">
              <h3 className="m-0 relative text-inherit leading-[30px] font-medium font-inherit inline-block min-w-[125px] mq450:text-base mq450:leading-[24px]">
                Join the Fun
              </h3>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 pb-5 pr-[15px] pl-[5px] text-sm">
              <div className="relative leading-[21px] whitespace-nowrap">
                Sign up for our newsletter.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0 text-center text-xs">
            <div className="self-stretch rounded-full overflow-hidden flex flex-row items-center justify-between border-[1px] border-solid border-white bg-black">
              <div className="flex-1 flex items-center">
                <input
                    type="email"
                    placeholder="Enter your email address here"
                    className="bg-transparent text-white outline-none w-full py-3 px-5 rounded-full"
                />
              </div>
                <button className="cursor-pointer py-3 px-8 bg-white text-black rounded-full border-none hover:bg-gray-200">
                    Subscribe
                </button>
              </div>

            <div className="self-stretch flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border max-w-full text-left text-sm">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0 pl-[25px] box-border gap-[10px] max-w-full">
                <input className="m-0 h-5 w-[25px]" type="checkbox" />
                <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-5 pr-0 pl-[5px] box-border min-w-[264px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
                      <div className="w-[369px] h-[21px] relative leading-[21px] flex items-center max-w-full">
                        <span className="w-full">
                          {`By signing up, I agree to the `}
                          <a href="#" className="[text-decoration:underline] text-white">
                           privacy policy
                          </a>{" "}
                          of Veloretti.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[159.4px] flex flex-col items-end justify-start">
            <div className="self-stretch flex flex-row items-start justify-between pt-[8.5px] px-0 pb-0 gap-[20px]">
              <div className="flex space-x-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-start pt-[0.9px] px-0 pb-[7.9px]">
                  <div className="overflow-hidden flex flex-col items-start justify-start w-[13.1px] h-[13.1px]">
                    <img className="w-[13.1px] h-[13.1px] relative" alt="" src="/vector-63.svg" />
                  </div>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-start pt-0 px-0 pb-[7.9px]">
                  <div className="overflow-hidden flex flex-row items-start justify-start w-3.5 h-3.5">
                    <img className="h-3.5 w-3.5 relative" loading="lazy" alt="" src="/vector-64.svg" />
                </div>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-start pt-0 px-0 pb-[7.9px]">
                  <div className="overflow-hidden flex flex-row items-start justify-start w-3.5 h-3.5">
                    <img className="h-3.5 w-3.5 relative" loading="lazy" alt="" src="/vector-65.svg" />
                  </div>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-start pt-0 px-0 pb-[8.5px]">
                  <div className="overflow-hidden flex flex-row items-start justify-start w-[13.4px] h-[13.4px]">
                    <img className="h-[13.4px] w-[13.4px] relative" alt="" src="/vector-66.svg" />
                  </div>
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-start pt-0 px-0 pb-[7px]">
                  <div className="overflow-hidden flex flex-row items-start justify-start">
                    <img className="h-[14.9px] w-[12.9px] relative" loading="lazy" alt="" src="/vector-67.svg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[147px] left-[54px] w-[870px] h-[434.2px] flex flex-row items-start justify-start pt-[26px] pb-[100.4px] pr-[253px] pl-[42px] box-border max-w-[889.41px] z-[2] text-xl text-download-gallery font-nuckle mq1125:max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="w-[115px] flex flex-col items-start justify-between min-h-[212px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
              <h3 className="m-0 relative text-inherit leading-[30px] font-medium font-inherit inline-block min-w-[89px] mq450:text-base mq450:leading-[24px]">
                Explorer
              </h3>
              <div className="w-full flex flex-col items-start justify-start max-w-[115px] text-sm text-download-nero-60">
                <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-[17px] pl-0  text-download-nero-60 no-underline">
                  <div className="relative leading-[21px] inline-block min-w-[91px]">
                    Electric bikes
                  </div>
                </a>
                <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0  text-download-nero-60 no-underline">
                  <div className="relative leading-[21px] inline-block min-w-[71px]">
                    City bikes
                  </div>
                </a>
                <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0  text-download-nero-60 no-underline">
                  <div className="relative leading-[21px] inline-block min-w-[71px]">
                    Kids' bikes
                  </div>
                </a>
                <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0  text-download-nero-60 no-underline">
                  <div className="relative leading-[21px] inline-block min-w-[84px]">
                    Accessories
                  </div>
                </a>
                <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0  text-download-nero-60 no-underline">
                  <div className="relative leading-[21px] inline-block min-w-[45px]">
                    Outlet
                  </div>
                </a>
                <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0  text-download-nero-60 no-underline">
                  <a className="[text-decoration:none] relative leading-[21px] text-[inherit] inline-block min-w-[63px]">
                    Business
                  </a>
                </a>
                <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 px-0  text-download-nero-60 no-underline">
                  <div className="w-[124px] relative leading-[21px] flex items-center whitespace-nowrap">
                    Insurance Electric
                  </div>
                </a>
                <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0  text-download-nero-60 no-underline">
                  <div className="relative leading-[21px] inline-block min-w-[74px]">
                    Size guide
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-[215.6px] flex flex-col items-start justify-start">
          <div className="w-[67.3px] flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
              <a className="[text-decoration:none] relative leading-[30px] font-medium text-[inherit] inline-block min-w-[61px] mq450:text-base mq450:leading-[24px]">
                About
              </a>
              <div className="w-full flex flex-col items-start justify-start max-w-[115px] text-sm text-download-nero-60">
                <a href="#"  className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0  text-download-nero-60 no-underline">
                  <div className="relative leading-[21px] inline-block min-w-[63px]">
                    About us
                  </div>
                </a>
                <a href="#" className="flex flex-col items-start justify-start py-0 pr-3.5 pl-0  text-download-nero-60 no-underline">
                  <div className="relative leading-[21px]  inline-block min-w-[53px]">
                    Journal
                  </div>
                </a>
                <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-1.5 pl-0  text-download-nero-60 no-underline">
                  <div className="relative leading-[21px] inline-block min-w-[59px]">
                    Reviews
                  </div>
                </a>
                <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0  text-download-nero-60 no-underline">
                  <div className="relative leading-[21px] inline-block min-w-[39px]">
                    Press
                  </div>
                </a>
                <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0  text-download-nero-60 no-underline">
                  <div className="relative leading-[21px] inline-block min-w-[34px]">
                    Jobs
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-[115px] flex flex-col items-start justify-start z-[1]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
            <h3 className="m-0 w-[49px] relative text-inherit leading-[30px] font-medium font-inherit flex items-center mq450:text-base mq450:leading-[24px]">
              Help
            </h3>
            <div className="w-full flex flex-col items-start justify-start max-w-[115px] text-sm text-download-nero-60">
              <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0  text-download-nero-60 no-underline">
                <div className="relative leading-[21px] inline-block min-w-[56px]">
                  Contact
                </div>
              </a>
              <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0  text-download-nero-60 no-underline">
                <div className="relative leading-[21px] inline-block min-w-[31px]">
                  FAQ
                </div>
              </a>
              <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0  text-download-nero-60 no-underline">
                <div className="relative leading-[21px] inline-block min-w-[60px]">
                  Delivery
                </div>
              </a>
              <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 px-0  text-download-nero-60 no-underline">
                <div className="w-[142px] relative leading-[21px] flex items-center whitespace-nowrap">{`Assembly & manuals`}</div>
              </a>
              <a href="#" className="flex flex-col items-start justify-start py-0 px-0  text-download-nero-60 no-underline">
                <div className="relative leading-[21px] inline-block min-w-[117px] whitespace-nowrap">
                  Payment options
                </div>
              </a>
              <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 pr-[11px] pl-0  text-download-nero-60 no-underline">
                <div className="relative leading-[21px] inline-block min-w-[100px]">
                  Privacy policy
                </div>
              </a>
              <a href="#" className="self-stretch flex flex-col items-start justify-start py-0 px-0  text-download-nero-60 no-underline">
                <div className="[text-decoration:none] w-[133px] relative leading-[21px] text-[inherit] flex items-center whitespace-nowrap">{`Terms & conditions`}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
