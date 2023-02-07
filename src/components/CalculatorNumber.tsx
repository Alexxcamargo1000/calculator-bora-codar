interface CalculatorNumberProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  value: number
}

export function CalculatorNumber({value , ...rest}: CalculatorNumberProps) {
  return (
    <button {...rest} className='w-16 h-16 bg-linearButton rounded-full shadow-button'>
      <span className='text-2xl text-zinc-50'>{value}</span>
    </button>
  )
}