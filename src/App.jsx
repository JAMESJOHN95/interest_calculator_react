import { TextField, Stack, Button } from '@mui/material'
import './App.css'

function App() {

  return (
    <div className='main'>
      <div className='submain'>
        <h1>Simple Interest App</h1>
        <p>Calculate Your Simple Interest</p>
        <div className='result '>
          <h1>₹ 0</h1>
          <p>Total Simple Interest</p>
        </div>
        <form className='mt-4'>
          <div className="mb-3">
            <TextField className='w-100 ' id="outlined-basic-principle" label="Enter Your Principle Amount(₹)" variant="outlined" />
          </div>
          <div className="mb-3">
            <TextField className='w-100 ' id="outlined-basic-interest" label="Enter The Interest(%)" variant="outlined" />
          </div>
          <div className="mb-3">
            <TextField className='w-100 ' id="outlined-basic-time" label="Enter The Time Period(Year)" variant="outlined" />
          </div>
          <Stack direction="row" spacing={2}>
            <Button className='w-50  ' variant="contained">Calculate</Button>
            <Button className='w-50 text-bolder' variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
