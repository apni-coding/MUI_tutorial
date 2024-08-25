import React, { useState } from 'react'
import {Rating} from '@mui/material'
function MuiRating() {
    const [rating, setRating] = useState(3.5)
  return (
    <div>
    <p>User Rating</p>
      <Rating 
        value={rating}
        onChange={(event, newValue)=>{
            // alert(newValue)
            setRating(newValue)
        }}  
        // disabled
        // readOnly
        size='large'
        precision={0.5}
      />
    </div>
  )
}

export default MuiRating
