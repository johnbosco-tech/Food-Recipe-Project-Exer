import React from 'react'

const Button = ({title, btnType, handleButton, isDisabled, containerStyle}) => {
  return (
    <button
     type={btnType || 'button'}
     disabled={isDisabled || false}
     onClick={handleButton}
     className={`custom-btn ${containerStyle}`}
    >
        {title}
    </button>
  )
}

export default Button