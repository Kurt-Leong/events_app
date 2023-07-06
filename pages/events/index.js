import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function EventsPage({ data }) {
  return (
    <div>
      <h1>events page</h1>
      <div>
        {data.map((event) => (
          <Link
            legacyBehavior
            key={event.title}
            href={`/events/${event.id}`}
            passHref
          >
            <a>
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

export default EventsPage

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')

  return {
    props: {
      data: events_categories,
    },
  }
}
