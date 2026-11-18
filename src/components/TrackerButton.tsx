
type ButtonProps = {
    handleClick: () => void,
    isDisabled?: boolean,
    label: string
}

const TrackerButton = ({label, handleClick, isDisabled}: ButtonProps) => {

  return (
    <div>
          <button className='rounded-3xl h-16 w-24 bg-amber-600 cursor-pointer' onClick={handleClick} disabled={isDisabled} >{label} 1</button>
    </div>
  )
}

export default TrackerButton;