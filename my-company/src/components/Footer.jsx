import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#333',
      color: 'white',
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }}>
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  )
}

export default Footer