import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function SingleEvent({ data }) {
  const inputEmail = useRef()
  const router = useRouter()
  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const emailValue = inputEmail.current.value

    const eventId = router?.query.id
    const validRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (!emailValue.match(validRegex)) {
      setMessage('Please introduce a correct email address')
    }
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

      setMessage(data.message)
      inputEmail.current.value = ''
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
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit ">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default SingleEvent
