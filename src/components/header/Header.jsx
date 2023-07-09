import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div className="topNav">
        <Image alt={'logo'} src={'/logo/Logo-k.png'} width={50} height={50} />
        <nav>
          <ul>
            <li>
              <Link legacyBehavior href="/" passHerf>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/events" passHerf>
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about-us" passHerf>
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>
        Sed nulla sapien, ultricies sit amet posuere quis, commodo quis sapien.
      </h1>
    </header>
  )
}

export default Header
