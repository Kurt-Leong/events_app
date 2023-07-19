import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function AllEvents({ data }) {
  return (
    <div>
      <h1>Events Page</h1>
      <div className="events_page">
        {data.map((event) => (
          <Link
            legacyBehavior
            key={event.title}
            href={`/events/${event.id}`}
            passHref
          >
            <a className="card">
              <Image
                width={200}
                height={'200'}
                alt={event.title}
                src={event.image}
              />
              <h2>{event.title}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllEvents
