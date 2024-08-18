import React from 'react'
import {Fab} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
function MuiFloatingActionButton() {
    const handleClick =()=>{
        alert('FAB Clicked')
    }
  return (
    <div>
       <h1>React Material UI ~ Floating Action Button </h1>
       <Fab
       color='secondary'
       size='small' //medium large
       variant='extended'
       onClick={handleClick}
       >
        <EditIcon sx={{mr:2, p:1}}/> Edit
       </Fab>
    </div>
  )
}

export default MuiFloatingActionButton
/*
Topic to cover:-
1. How to use fab
2. Color of fab
3. Size of fab
4. Variant properties for tab
5. Fab with icon
6. Onclick event handling
*/
