import React from 'react'
import Image from 'next/image'

function SingleEvent({ data }) {
  const onSubmit = () => {}
  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image alt={data.title} src={data.image} width={800} height={400} />
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered for this event</label>
        <input
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit ">Submit</button>
      </form>
    </div>
  )
}

export default SingleEvent
