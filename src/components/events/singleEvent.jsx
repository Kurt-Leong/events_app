import React from 'react'
import Image from 'next/image'

function SingleEvent({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <Image alt={data.title} src={data.image} width={800} height={400} />
      <p>{data.description}</p>
      <input type="email" /> <button>Submit</button>
    </div>
  )
}

export default SingleEvent
