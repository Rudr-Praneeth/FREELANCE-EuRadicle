import React from 'react'
import ContactSection from '../sections/ContactSection'

const Contact = () => {
  const fields = [
    [{
      name: "Name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name"
    },
    {
      name: "LastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your Last Name"
    }],
    {
      name: "Company",
      label: "Company",
      type: "text",
      placeholder: "Enter your Company"
    },
    {
      name: "Designation",
      label: "Designation",
      type: "text",
      placeholder: "Enter your Designation"
    },
    {
      name: "Email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email"
    },
  ]
  return (
    <div className='mt-24'>
        <ContactSection imageUrl={"https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"} fields={fields} header={<div className='text-h2 text-primary-navy text-center mb-4'>CONTACT <span className='text-primary-mauve'>US</span></div>}/>
    </div>
  )
}

export default Contact