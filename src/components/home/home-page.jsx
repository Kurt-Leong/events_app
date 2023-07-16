import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HomePage({ data }) {
  return (
    <div>
      <div className="home_body">
        {data.map((event) => (
          <Link
            className="card"
            key={event.id}
            href={`events/${event.id}`}
            passHref
          >
            <div className="image">
              <Image
                width={250}
                height={'200'}
                alt={event.title}
                src={event.image}
              />
            </div>
            <div className="content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage
