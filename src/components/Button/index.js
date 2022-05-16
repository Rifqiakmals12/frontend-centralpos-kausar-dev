import React from 'react'
import PropTypes  from 'prop-types'
import cx from 'classnames'
import './index.css'
import { Link } from 'react-router-dom'

export default function Button(props) {
  const btnClasses = cx({
    'btn py-2 px-3 d-block':true,
  })
  return (
    <Link
      onClick={props.onClick}
      to={props.to}
      className={
        props.isPrimary
          ? `${btnClasses} border-0 buttonPrimary text-white`
          : `${btnClasses} buttonSecondary py-2 px-4`
      }
    >
      {props.label}
    </Link> 
  );
}


Button.propTypes = {
    label: PropTypes.string.isRequired,
    isPrimary: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
};
