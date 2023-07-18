import SingleEvent from '@/src/components/events/singleEvent'
import React from 'react'

function EventPage({ data }) {
  return <SingleEvent data={data} />
}

export default EventPage

export async function getStaticPaths() {
  const data = await import('/data/data.json')
  const allEvents = data.allEvents
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        category: path.city,
        id: path.id,
      },
    }
  })
  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const { allEvents } = await import('/data/data.json')
  const eventData = allEvents.find((event) => event.id === id)
  return {
    props: { data: eventData },
  }
}
