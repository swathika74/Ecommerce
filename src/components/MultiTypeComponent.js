import PropTypes from "prop-types";

export const MultiTypecomponent = (props) => {
  return (
    <div>
        <p>The vale is: {props.value}</p>
    </div>
  )
}
MultiTypeComponent.PropTypes = {
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.number,PropTypes.bool]).isRequired,
};
