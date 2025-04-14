import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-row items-center gap-2 justify-center">
        <span className="loading loading-spinner loading-xs"></span>
        Loading...
    </div>

  )
}

export default Loader