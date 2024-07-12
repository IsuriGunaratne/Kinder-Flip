import React from 'react';
import PropTypes from "prop-types";

const ClubIcons = ({ className = "", centre, funky, plasters }) => {
  return (
    <div
      className={`h-[511.2px] w-[350.4px] flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border max-w-full text-center text-13xl text-download-nero font-nuckle ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-end justify-start pt-[34px] px-16 pb-[34.5px] relative mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[2]"
          loading="lazy"
          alt=""
          src={centre}
        />
        <div className="h-[78.7px] w-[206.9px] relative capitalize inline-block shrink-0 z-[3] mq450:text-lgi mq800:text-7xl">
          <p className="m-0 leading-[120%] font-light">{funky}</p>
          <p className="m-0 text-21xl">
            <b className="leading-[100%]">{plasters}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

ClubIcons.propTypes = {
  className: PropTypes.string,
  centre: PropTypes.string,
  funky: PropTypes.string,
  plasters: PropTypes.string,
};

export default ClubIcons;
