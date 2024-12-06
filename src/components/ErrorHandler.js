import React from 'react'

const ErrorHandler = ({error}) => {
    console.log(error)
  return (
    <div role='alert'>
      <p>An error occured:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default ErrorHandler
