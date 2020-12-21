import React from 'react';
import './postmessage.css'

const PostMessage =({name,image})=> {

return(
        <div style={{       

          backgroundImage:`url(${image})`
        }}  >
          <div className='content'>
         
            <h1 className='title'>{name}</h1>
          </div>
          </div>
          
)
}
export default PostMessage;