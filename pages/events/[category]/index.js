import React from 'react'

function EventCatPage() {
  return (
    <div>
      <h1>Events in London </h1>
      <a href="/events/event1">event1</a>
      <a href="/events/event2">event2</a>
      <a href="/events/event3">event3</a>
      <a href="/events/event4">event4</a>
      <a href="/events/event5">event5</a>
      <a href="/events/event6">event6</a>
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
  console.log('1111', allPaths)

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  console.log(context)
  return { props: {} }
}
