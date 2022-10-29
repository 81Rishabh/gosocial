import React from 'react';

function Loading() {
  return (
    <div className="loader" style={{
        width: '20px',
        height : '20px',
        border : '3px solid lightgrey',
        borderRadius :   '50px',
        borderTop : '3px solid darkblue',
        margin: '2rem auto',
    }}></div>
  )
}

export default Loading;