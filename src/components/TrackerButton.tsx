
type ButtonProps = {
    handleClick: () => void,
    label: string
}

const TrackerButton = ({label, handleClick}: ButtonProps) => {

  return (
    <div>
          <button className='rounded-3xl h-16 w-24 bg-amber-600 cursor-pointer' onClick={handleClick} >{label} 1</button>
    </div>
  )
}

export default TrackerButton;