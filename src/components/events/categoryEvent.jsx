import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CategoryEvent({ data, pageName }) {
  return (
    <div className="cat_events">
      <h1>Events in {pageName} </h1>
      <div className="content">
        {data.map((event) => (
          <Link
            className="card"
            key={event.id}
            href={`/events/${event.city}/${event.id}`}
          >
            <Image
              width={390}
              height={'200'}
              alt={event.title}
              src={event.image}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryEvent
