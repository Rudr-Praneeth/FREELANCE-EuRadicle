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
      name: "PhoneNumber",
      label: "Mobile Number",
      type: "tel",
      placeholder: "Enter your Mobile Number"
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
      <ContactSection imageUrl="/Home/Getintouch.jpg"  fields={fields} show={true}/>
    </div>
  )
}

export default GetInTouch
