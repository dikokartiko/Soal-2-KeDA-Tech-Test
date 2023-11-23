import PropTypes from "prop-types";

function Button({ name, style, size, onClick }) {
  Button.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  return (
    <button
      className={`${
        style === "primary" ? "btn-primary" : "btn-secondary"
      } mulish-700 ${size === "sm" ? "btn-sm" : "btn-lg"}`}
      onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
