
import { CalculatorNumber } from './components/CalculatorNumber'
import {Equals , Percent, Divide, X, Plus, Minus, PlusMinus } from 'phosphor-react'
import './global.css'
import { useState } from 'react'
import { removeDecimal } from './utils/removeDecimal'


export function App() {

  const [displayValue, setDisplayValue] = useState('')
  const [value, setValue] = useState('') 
  const [result, setResult] = useState('')
  const [isCommaActive, setIsCommaActive] = useState(true)

  function addExpression(symbolDisplay: string, symbolMath?: string){
    const symbol = symbolMath || symbolDisplay
    const notNumber = Number(displayValue[displayValue.length - 1])
    
    if(!displayValue) {
      return
    }

    if(Number.isNaN(notNumber)) {
      setDisplayValue(displayValue.slice(0, -1))
      setValue(value.slice(0, -1))
    }

    setDisplayValue(prev => prev + symbolDisplay)
    setValue(prev => prev + symbol)
    setIsCommaActive(true)
  }

  function handlePlus() {
    addExpression('+')
  }

  function handleMinus() {
    addExpression('-')
  }

  function handleMultiplication() {
    addExpression('x', '*')

  }
  function handleDivider() {
    addExpression('÷', '/')
  }

  function handleControlNumbers(numb: number) {
    const isZero = Number(displayValue[displayValue.length - 1])
    const beforeZero = Number(displayValue[displayValue.length - 2])
 
    if(displayValue.length > 20) {
      return 
    }
    if(Number.isNaN(beforeZero) && isZero === 0) {
      const displayValueLastNumber = displayValue[displayValue.length - 1]
      const lastNumberOfValue = value[value.length - 1]
      setDisplayValue(displayValue.replace(displayValueLastNumber, String(numb)))
      setValue((value.replace(lastNumberOfValue, String(numb))))
      return
    }

    setDisplayValue(prev => prev + numb)
    setValue(prev => prev + numb)

  }

  function handleAddComma() {

    if(isCommaActive) {
      setDisplayValue(prev => prev + ',')
      setValue(prev => prev + '.')
    }
    setIsCommaActive(false)

  }

  function handleResult() {
    const notNumber = Number(displayValue[displayValue.length - 1])
    if(Number.isNaN(notNumber)) {
      setDisplayValue(displayValue.slice(0, -1))
      setValue(value.slice(0, -1))
      return
    }
    
    const expression =  Number(eval(value))

    
    const resultValue = removeDecimal(eval(value))
    const result = new Intl.NumberFormat('pt-br').format(expression)

    setResult(String(result))
    setDisplayValue(String(result))
    setValue(String(resultValue))

    if(!String(result).includes(',')){
      setIsCommaActive(true)
    }

  }

  function handleCleanCalculator() {
    setResult('')
    setDisplayValue('')
    setValue('')
    setIsCommaActive(true)
  }

  function handleCleanLastValue() {
    setDisplayValue(prev => prev.slice(0,-1))
    setValue(prev => prev.slice(0,-1))
  }


  return (
    <div className=' font-rubik w-screen h-screen bg-backgroundApp text-zinc-50 flex items-center justify-center'>
      <div className='w-[356px] h-[566px] bg-calc rounded-[48px] shadow-calc p-8'>
        <div className='flex flex-col gap-2 pr-5 pl-4'>
          <span className='leading-tight  tracking-tighter self-end text-zinc-600 text-xl'>
            {displayValue || '0'}
          </span>

          <div className='flex items-center justify-between mt-4'>
            <Equals size={24} className="text-zinc-600"/>

            <span className='tracking-tighter text-4xl flex whitespace-nowrap overflow-x-auto overflow-y-hidden scrollbar-hide'>
              {result || '0'}
            </span>

          </div>
        </div>

        <div className='grid grid-cols-4 grid-rows-5 gap-3 mt-8'>
          <button 
            className='w-16 h-16 bg-linearButton rounded-full shadow-button'
            onClick={handleCleanCalculator}
          >
            <span className='text-2xl text-violet-500'>CE</span>
          </button>
          <button 
            className='w-16 h-16 bg-linearButton rounded-full shadow-button'
            onClick={handleCleanLastValue}
          >
            <span className='text-2xl'>C</span>
          </button>
          <button className='w-16 h-16 bg-linearButton rounded-full shadow-button flex items-center justify-center'>
            <Percent size={24}/>
          </button>
          <button 
            className='w-16 h-16 bg-linearButton rounded-full shadow-button flex items-center justify-center bg-violet'
            onClick={handleDivider}
          >
            <Divide size={24}/>
          </button>

          <CalculatorNumber onClick={() => handleControlNumbers(7)} value={7}/>
          <CalculatorNumber onClick={() => handleControlNumbers(8)} value={8}/>
          <CalculatorNumber onClick={() => handleControlNumbers(9)} value={9}/>

          <button 
            className='w-16 h-16 bg-linearButton rounded-full shadow-button flex items-center justify-center bg-violet'
            onClick={handleMultiplication}
          >
            <X size={24}/>
          </button>

          <CalculatorNumber onClick={() => handleControlNumbers(4)} value={4}/>
          <CalculatorNumber onClick={() => handleControlNumbers(5)} value={5}/>
          <CalculatorNumber onClick={() => handleControlNumbers(6)} value={6}/>

          <button 
            className='w-16 h-16 bg-linearButton rounded-full shadow-button flex items-center justify-center bg-violet'
            onClick={handleMinus}
          >
            <Minus size={24}/>
          </button>
          
          <CalculatorNumber onClick={() => handleControlNumbers(3)} value={3}/>
          <CalculatorNumber onClick={() => handleControlNumbers(2)} value={2}/>
          <CalculatorNumber onClick={() => handleControlNumbers(1)} value={1}/>

          <button 
            className='w-16 h-16 bg-linearButton rounded-full shadow-button flex items-center justify-center bg-violet'
            onClick={handlePlus}
          >
            <Plus  size={24}/>
          </button>

          <button className='w-16 h-16 bg-linearButton rounded-full shadow-button flex items-center justify-center'>
            <PlusMinus  size={24}/>
          </button>

          <CalculatorNumber onClick={() => handleControlNumbers(0)} value={0}/>

          <button 
            className='w-16 h-16 bg-linearButton rounded-full shadow-button flex items-center justify-center'
            onClick={handleAddComma}
          >
            <span className='text-2xl text-zinc-50'>,</span>
          </button>
          <button 
            className='w-16 h-16 bg-linearButton rounded-full shadow-button flex items-center justify-center bg-violet-300'
            onClick={handleResult}
          >
            <Equals size={24}/>
          </button>
        </div>

      </div>
    </div>
  )
}

