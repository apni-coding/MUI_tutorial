import React, { useState } from 'react'
//named imports 
// import { Button } from '@mui/material'

//default imports
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';


export default function MuiButton() {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = ()=>{
        alert('custom function click')
    }
  return (
    <>
        <Button 
        color='error' // primary secondary error
        variant='contained' //outlined
        disabled={isLoading}
        // onClick={()=> alert('Button Clicked')}
        onClick={handleClick}
        size='large' //small  medium
        >Click Me</Button>


        <Button
        variant='outlined'
        color='secondary'
        startIcon = {<DeleteIcon />}
        >
            Icon Button
        </Button>


        <Button
        variant='outlined'
        color='secondary'
        endIcon = {<SendIcon />}
        >
            Icon Button
        </Button>

        <IconButton color='success'>
            <DeleteIcon />
        </IconButton>

        <LoadingButton 
        loading={isLoading} 
        loadingIndicator='Loading....'
        
        >
            Fetch Data
        </LoadingButton>
    </>
  )
}
