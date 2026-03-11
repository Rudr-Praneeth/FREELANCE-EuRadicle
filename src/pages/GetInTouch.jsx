import React, { useState } from "react"
import Journey from "../sections/Journey"
import ContactSection from "../sections/ContactSection"

const GetInTouch = () => {

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: ""
  })

  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState({ type: "", message: "" })
  const [loading, setLoading] = useState(false)

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
      type: "textarea",
      placeholder: "Enter your message"
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (value) => {
    setPhone(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setStatus({ type: "", message: "" })

    const payload = {
      ...formData,
      PhoneNumber: phone
    }

    try {

      const res = await fetch(
        "https://backend.euradicle.com/wp-json/custom/v1/get-in-touch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      )

      const data = await res.json()

      if (res.ok && data.success) {

        setStatus({
          type: "success",
          message: "Message sent successfully"
        })

        setFormData({
          Name: "",
          Email: "",
          PhoneNumber: "",
          Message: ""
        })

        setPhone("")

      } else {

        setStatus({
          type: "error",
          message: data.message || "Submission failed"
        })

      }

    } catch {

      setStatus({
        type: "error",
        message: "Network error"
      })

    }

    setLoading(false)
  }

  return (
    <div>
      <Journey />
      <ContactSection
        imageUrl="/Home/Getintouch.jpg"
        fields={fields}
        show={true}
        formData={formData}
        phone={phone}
        setPhone={handlePhoneChange}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        status={status}
        loading={loading}
      />
    </div>
  )
}

export default GetInTouch