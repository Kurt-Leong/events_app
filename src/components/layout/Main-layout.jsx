import React from 'react'
import Footer from '@/src/components/footer/Footer'
import Header from '@/src/components/header/Header'

function Mainlayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Mainlayout
