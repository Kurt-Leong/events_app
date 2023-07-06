import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <header>
        <nav>
          <Link legacyBehavior href="/" passHerf>
            <a>Home</a>
          </Link>
          <Link legacyBehavior href="/events" passHerf>
            <a>Events</a>
          </Link>
          <Link legacyBehavior href="/about-us" passHerf>
            <a>About Us</a>
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Header
