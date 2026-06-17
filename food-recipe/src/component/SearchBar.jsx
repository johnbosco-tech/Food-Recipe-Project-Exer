import React from 'react'

const SearchBar = ({name, value, btnType, required, placeholder, handleInput, rightIcon, containerStyle}) => {
  return (
    <div className='w-full'>
        <div className='relative'>
            <input
                type={btnType || "text"}
                name={name}
                value={value}
                required={required || false}
                placeholder={placeholder}
                className={`custom-btn ${containerStyle}`}
                onChange={handleInput}
            />
            {
                rightIcon &&(
                    <div className='absolute inset-y-0 right-0 pr-5 flex items-center'>
                        {rightIcon}
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default SearchBar