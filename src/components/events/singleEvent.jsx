import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function SingleEvent({ data }) {
  const inputEmail = useRef()
  console.log(inputEmail)

  const router = useRouter()
  console.log(router)

  const onSubmit = async (e) => {
    e.preventDefault()
    const emailValue = inputEmail.current.value
    console.log(emailValue)

    const eventId = router?.query.id
    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      })

      console.log('response is', response)
      if (!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json()
      console.log('POST', data)
      //POST fetch request
      // body emailValue and the eventID
    } catch (e) {
      console.log('ERROR ', e)
    }
  }
  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image alt={data.title} src={data.image} width={800} height={400} />
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered for this event</label>
        <input
          ref={inputEmail}
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
