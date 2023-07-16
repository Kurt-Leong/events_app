import React from 'react'
import Footer from '@/src/components/footer/Footer'
import Header from '@/src/components/header/Header'

function Mainlayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Mainlayout
