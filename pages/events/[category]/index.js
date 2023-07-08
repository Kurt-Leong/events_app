import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function EventCatPage({ data, pageName }) {
  return (
    <div>
      <h1>Events in {pageName} </h1>
      <div>
        {data.map((event) => (
          <Link key={event.id} href={`/events/${event.city}/${event.id}`}>
            {event.title}

            <Image
              width={250}
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

export default EventCatPage

export async function getStaticPaths() {
  const { events_categories } = await import('data/data.json')
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        category: event.id.toString(),
      },
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.category

  const { allEvents } = await import('/data/data.json')
  const data = allEvents.filter((event) => event.city === id)

  return { props: { data, pageName: id } }
}
