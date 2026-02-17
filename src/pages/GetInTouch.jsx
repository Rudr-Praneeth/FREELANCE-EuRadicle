import React from 'react'
import Journey from "../sections/Journey"
import ContactSection from '../sections/ContactSection'

const GetInTouch = () => {
  const fields = [
    {
      name: "Name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name"
    },
    {
      name: "Email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email"
    },
    {
      name: "Message",
      label: "Message",
      type: "text",
      placeholder: "Enter your message"
    }
  ]
  return (
    <div>
      <Journey />
      <ContactSection  fields={fields}/>
    </div>
  )
}

export default GetInTouch