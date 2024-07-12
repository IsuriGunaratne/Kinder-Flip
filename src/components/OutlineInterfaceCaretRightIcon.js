import PropTypes from "prop-types";

const OutlineInterfaceCaretRightIcon = ({
  className = "",
  outlineInterfaceCaretRigh,
}) => {
  return (
    
    <img
      className={`h-[68px] w-[68px] relative z-[2] ${className}`}
      loading="lazy"
      alt=""
      src={outlineInterfaceCaretRigh}
    />
  );
};

OutlineInterfaceCaretRightIcon.propTypes = {
  className: PropTypes.string,
  outlineInterfaceCaretRigh: PropTypes.string,
};

export default OutlineInterfaceCaretRightIcon;
