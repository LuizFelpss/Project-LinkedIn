import React from 'react'


const InputIcon = ({Icon, title, color}) => {
  return (
    <div className="inputIcon">
        <Icon style={{color:color}}/>
        <h3>{title}</h3>
    </div>
  )
}

export default InputIcon
