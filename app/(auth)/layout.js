import React from 'react'

const AuthenticationLayout = ({children}) => {
  return (
    <div className='min-h-dvh w-screen flex justify-center items-center'>
        {children}
    </div>
  )
}

export default AuthenticationLayout