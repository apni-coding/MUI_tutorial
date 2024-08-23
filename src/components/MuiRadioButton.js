import React from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
function MuiRadioButton() {
  const handleChange =(e)=>{
    alert(e.target.value)
  }
  return (
    <>
      <FormControl>
        <FormLabel id='select-gender'>Select Gender</FormLabel>

        <RadioGroup
          row
          defaultValue={'male'}
          onChange={handleChange}
        >
          <FormControlLabel
            value={"female"}
            control={<Radio color='secondary' size='small'/>}
            label="Female"
          />

          <FormControlLabel
            value={"male"}
            control={<Radio />}
            label="Male"
            labelPlacement='top'
          />

          <FormControlLabel
            value={"other"}
            control={<Radio />}
            label="Other"
          />

        </RadioGroup>
      </FormControl>
    </>
  )
}

export default MuiRadioButton

/*
Topic to cover:- 
1. How to use Radio Button
2. Radio Button with label
3. Direction props
4. Handle onChange event
5. Size property
6. Color of Radio Button
7. Label placement
*/