import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  // create state to hold the values

  const [interest, setInterest] = useState(0)
  const [priciple, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)


  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
  }

  const handleValidation = (tag) => {
    const { value, name } = tag
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      // valid
      if (name == "priciple") {
        setPrinciple(value)
      } else if(name == "rate")
      {
        setRate(value)
      }
else {
      setYear(value)
    }
  }
  // invalid
  else{
    if (name == "priciple") {
      setPrinciple(value)
    } else if(name == "rate")
    {
      setRate(value)
    }
else {
    setYear(value)
  }
  }
}

return (
  <div className='main'>
    <div className='submain'>
      <h1>Simple Interest App</h1>
      <p>Calculate Your Simple Interest</p>
      <div className='result '>
        <h1>₹ {interest}</h1>
        <p>Total Simple Interest</p>
      </div>
      <form className='mt-4'>
        <div className="mb-3">
          <TextField className='w-100 ' id="outlined-basic-principle" label="Enter Your Principle Amount(₹)" variant="outlined" value={priciple || ""} onChange={(e) => handleValidation(e.target)} name='priciple' />
        </div>
        <div className="text-danger mb-3">*Invalide Principle Amount</div>
        <div className="mb-3">
          <TextField className='w-100 ' id="outlined-basic-interest" label="Enter The Interest(%)" variant="outlined" value={rate || ""} name='rate' onChange={(e) => handleValidation(e.target)} />
        </div>
        <div className="text-danger mb-3">*Invalide Rate</div>

        <div className="mb-3">
          <TextField className='w-100 ' id="outlined-basic-time" label="Enter The Time Period(Year)" variant="outlined" value={year || ""} name='year' onChange={(e) => handleValidation(e.target)} />
        </div>
        <div className="text-danger mb-3">*Invalide Input</div>

        <Stack direction="row" spacing={2}>
          <Button className='w-50  ' variant="contained">Calculate</Button>
          <Button onClick={handleReset} className='w-50 text-bolder' variant="outlined">Reset</Button>
        </Stack>
      </form>
    </div>
  </div>
)
}

export default App
