import React from 'react';

const Button = ({title,type})=>{
    return(
        <button
        className={
            type === 'action'
            ? 'btnContainer btnContainer--action'
            : 'btnContainer btnContainer--logout'
        }
        >
          {title}  
        </button>
    );
};

export default Button;