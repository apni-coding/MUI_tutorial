import logo from './logo.svg';
import './App.css';
import {Button} from '@mui/material'
// import Button from '@mui/material/Button'

function App() {
  return (
  <>
    <h1>Installation of MUI</h1>
    <button>Submit me</button>
    <Button>MUI Button</Button>
    <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
  </>
  );
}

export default App;
