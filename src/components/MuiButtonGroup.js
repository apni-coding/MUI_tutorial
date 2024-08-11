import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

export default function MuiButtonGroup() {
  return (
    <>
      {/* <Button variant='contained'>Click Me</Button>
      <Button variant='contained'>Click Me Again</Button> */}
      <ButtonGroup  
      variant="contained" 
      color='secondary'
      size='small'
      orientation='vertical' // horizontal 
    //   disabled
      >
            <Button onClick={()=>alert('button1 clicked')} disabled>Button1</Button>
            <Button onClick={()=>alert('button2 clicked')}> Button2</Button>
      </ButtonGroup>

    </>
  )
}


/*
topic: 
1. use of ButtonGroup
2. Properties of ButtonGroup
3. Orientation of ButtonGroup
*/