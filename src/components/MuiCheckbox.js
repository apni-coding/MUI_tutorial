import React from 'react'
import {Checkbox, FormControlLabel} from '@mui/material'
import {Favorite, FavoriteBorder} from '@mui/icons-material'
function MuiCheckbox() {
    const handleCheckbox = (e)=>{
        console.log('value is', e.target.value)
        console.log('handle checkbox function call')
    }
  return (
    <>
      <h1>React Material UI ~ Checkbox </h1>
      {/* <Checkbox onChange={handleCheckbox}/>
      <Checkbox value={"1"} onChange={(e)=>handleCheckbox(e)}/> */}

      {/* <Checkbox color='secondary' /> 
      <FormControlLabel 
      control={<Checkbox />} 
      label="testing"
       /> */}
       {/* <Checkbox indeterminate={false}/> */}
       <Checkbox 
        color='secondary'
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
       />
    </>
  )
}

export default MuiCheckbox


/*
topic to cover:- 
1. How to use checkbox
2. Color of checkobx
3. Add label in checkbox
4. Inderminate property in checkbox
5. Handle onChange event
6. Custom icon in checkbox

*/