import React from 'react'
import Image from 'next/image'

function EventPage({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <Image alt={data.title} src={data.image} width={800} height={400} />
      <p>{data.description}</p>
      <input type="email" /> <button>Submit</button>
    </div>
  )
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
