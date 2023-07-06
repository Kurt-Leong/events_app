import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HomePage({ data }) {
  return (
    <div>
      <main>
        {data.map((event) => (
          <Link key={event.id} href={`events/${event.id}`} passHref>
            <Image
              width={250}
              height={'200'}
              alt={event.title}
              src={event.image}
            />
            <h2>{event.title}</h2> <p>{event.description}</p>
          </Link>
        ))}
      </main>
    </div>
  )
}

export default HomePage
