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
      <ContactSection imageUrl={"https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"} fields={fields}/>
    </div>
  )
}

export default GetInTouch
