import { useState } from 'react'
import './App.css'
import FormBook from './common/ui/FormBook'
import { bookFormConfig } from './common/configs/bookForm'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <Home />
      <div>
        <h1>Book Form</h1>
      </div>
        <FormBook 
        id={'book-form'} 
        inputs={bookFormConfig.inputs} 
        submitBtn={bookFormConfig.submitBtn} 
        cancelBtn={bookFormConfig.cancelBtn} 
        resetBtn={bookFormConfig.resetBtn}
        />
    </>
  )
}

export default App
