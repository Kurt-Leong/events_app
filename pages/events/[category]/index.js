import React from 'react'
import Image from 'next/image'

function EventCatPage({ data }) {
  return (
    <div>
      <h1>Events in London </h1>
      <div>
        {data.map((event) => (
          <a key={event.id} href={`/events/${event.city}/${event.id}`}>
            {event.title}

            <Image
              width={250}
              height={'200'}
              alt={event.title}
              src={event.image}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </a>
        ))}
      </div>
      {/* <a href="/events/event1">event1</a>
      <a href="/events/event2">event2</a>
      <a href="/events/event3">event3</a>
      <a href="/events/event4">event4</a>
      <a href="/events/event5">event5</a>
      <a href="/events/event6">event6</a> */}
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
  console.log('city', data)
  return { props: { data } }
}
