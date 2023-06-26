import Image from 'next/image'
import React from 'react'

function EventsPage({ data }) {
  return (
    <div>
      <h1>events page</h1>
      <div>
        {data.map((event) => (
          <a key={event.title} href={`/events/${event.id}`}>
            <Image
              width={200}
              height={'200'}
              alt={event.title}
              src={event.image}
            />
            <h2>{event.title}</h2>
          </a>
        ))}
      </div>
    </div>
  )
}

export default EventsPage

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')
  console.log('hahahha', events_categories)
  return {
    props: {
      data: events_categories,
    },
  }
}
