

const TickList = ({ list }) => {
  const TickIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
  return (
    <div className="flex flex-col pl-2">
      { 
        list.map((entry, idx) => {
          return (
            <div key={idx} className="flex flex-row items-center justify-start">
              <div className="text-primary pr-2"><TickIcon /></div>
              <div className="font-lato p-2.5 text-lg">{ entry }</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TickList