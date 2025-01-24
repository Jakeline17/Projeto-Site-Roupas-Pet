import './styles.css';

import React from 'react'

export const Button = ({name,onClick }) => {
  return (
    <div className="btn_container" >
       <button type="button" id="buy_btn"  onClick={onClick}>
        {name}

       </button>
    </div>
  )
}

export default Button
