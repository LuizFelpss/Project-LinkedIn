import React from 'react'
import './styles.css'


 export const HeaderIcons = (Icon, title) => {
  return (
    <div className="header__icons">

      {Icon && <Icon className="header__box"/>}
    </div>
  )
}

export default HeaderIcons
