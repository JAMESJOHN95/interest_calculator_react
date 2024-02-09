import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  // create state to hold the values

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [principleamountValid,setPrincipleAmountValid] = useState(true)
  const [RateAmountValid,setRateAmountValid] = useState(true)
  const [YearAmountValid,setYearAmountValid] = useState(true)

  const handleCalculate =()=> {
    if (principle && rate && year){
     setInterest( principle*rate*year/100)
    }
    else{
      alert("Please fill the form completely !!!!!")
    }
  }

  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearAmountValid(true)
  }
// validation -----------------------------------
  const handleValidation = (tag) => {
    const { value, name } = tag
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*\.?\d+$/)) {
      // valid
      if (name == "priciple") {
        setPrinciple(value)
        setPrincipleAmountValid(true)
      } else if(name == "rate")
      {
        setRate(value)
        setRateAmountValid(true)
      }
else {
      setYear(value)
      setYearAmountValid(true)
    }
  }
  // invalid
  else{
    if (name == "priciple") {
      setPrinciple(value)
      setPrincipleAmountValid(false)
    } else if(name == "rate")
    {
      setRate(value)
      setRateAmountValid(false)
    }
else {
    setYear(value)
    setYearAmountValid(false)
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
          <TextField className='w-100 ' id="outlined-basic-principle" label="Enter Your Principle Amount(₹)" variant="outlined" value={principle || ""} onChange={(e) => handleValidation(e.target)} name='priciple' />
        </div>
{   !principleamountValid  && <div className="text-danger mb-3">*Invalide Principle Amount</div>}
       <div className="mb-3">
          <TextField className='w-100 ' id="outlined-basic-interest" label="Enter The Interest(%)" variant="outlined" value={rate || ""} name='rate' onChange={(e) => handleValidation(e.target)} />
        </div>
        { !RateAmountValid && <div className="text-danger mb-3">*Invalide Rate</div>}

        <div className="mb-3">
          <TextField className='w-100 ' id="outlined-basic-time" label="Enter The Time Period(Year)" variant="outlined" value={year || ""} name='year' onChange={(e) => handleValidation(e.target)} />
        </div>
       { !YearAmountValid && <div className="text-danger mb-3">*Invalide Input</div>}

        <Stack direction="row" spacing={2}>
          <Button onClick={handleCalculate} disabled={!principleamountValid || !RateAmountValid || !YearAmountValid} className='w-50  ' variant="contained">Calculate</Button>
          <Button onClick={handleReset} className='w-50 text-bolder' variant="outlined">Reset</Button>
        </Stack>
      </form>
    </div>
  </div>
)
}

export default App
