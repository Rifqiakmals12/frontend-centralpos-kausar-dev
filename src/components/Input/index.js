import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default function Input(props) {
  return (
    <div className="d-flex flex-column">
      <label
        htmlFor={props.label}
        className={
          props.isLabelOn ? "labelInput mb-2" : "labelInput mb-2 d-none"
        }
      >
        {props.label}
      </label>
      <input
        type={props.type}
        className="costumeInput py-2 px-3"
        placeholder={props.placeholder}
      />
    </div>
  );
}

Input.propTypes={
    label: PropTypes.string,
    isLabelOn: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired
}
