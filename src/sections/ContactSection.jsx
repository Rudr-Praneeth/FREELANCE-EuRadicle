import { useState } from "react"
import FlowButton from "../components/FlowButton"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa"

export default function ContactSection({ imageUrl, fields = [], header, show }) {
  const socials = [
    { label: "LinkedIn", icon: <FaLinkedinIn /> },
    { label: "Facebook", icon: <FaFacebookF /> },
    { label: "Instagram", icon: <FaInstagram /> },
    { label: "YouTube", icon: <FaYoutube /> }
  ]

  const [phone, setPhone] = useState("")
  const [focused, setFocused] = useState(false)

  return (
    <section className="w-full bg-[var(--color-bg-white)]">
      <style>{`
        .react-tel-input .flag-dropdown { z-index: 9999 !important; }
        .react-tel-input .country-list { position: absolute !important; z-index: 9999 !important; max-height: 320px !important; overflow: auto !important; }
        .react-tel-input .country-list .country { padding: 10px 14px !important; }
        .react-tel-input .search-box { padding: 8px 10px !important; box-sizing: border-box !important; }
      `}</style>

      {header && header}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="w-full h-full overflow-hidden rounded-2xl group order-1 md:order-2">
            <img
              src={imageUrl}
              alt="contact"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          <form className="relative overflow-visible rounded-2xl bg-[var(--color-brand-400)]/10 p-8 space-y-6 w-full order-2 md:order-1">
            {fields.map((fieldGroup, index) => {
              if (Array.isArray(fieldGroup)) {
                return (
                  <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {fieldGroup.map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text-body-sm font-semibold text-[var(--color-primary-navy)] mb-2"
                        >
                          {field.label}
                        </label>

                        {field.type === "textarea" ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            rows={field.rows || 5}
                            placeholder={field.placeholder}
                            className="w-full rounded-lg border border-[var(--color-brand-400)] p-4 bg-white focus:outline-none focus:border-[var(--color-primary-mauve)] transition"
                          />
                        ) : field.type === "tel" ? (
                          <div className={`relative transition-all duration-300 ${focused ? "scale-[1.01]" : ""}`}>
                            <PhoneInput
                              country="in"
                              value={phone}
                              onChange={setPhone}
                              enableSearch
                              onFocus={() => setFocused(true)}
                              onBlur={() => setFocused(false)}
                              containerClass="!w-full !relative !overflow-visible"
                              dropdownClass="!absolute !z-[9999] !max-h-80 !overflow-auto !shadow-2xl !rounded-xl !bg-white"
                              inputClass={`!w-full !h-[50px] !bg-white !pl-14 !transition-all !duration-300`}
                              buttonClass=" !rounded-l-xl !bg-white !pointer-events-auto"
                              searchClass="!w-full !p-2"
                              inputProps={{ name: field.name, id: field.name, autoComplete: "tel" }}
                            />
                          </div>
                        ) : (
                          <input
                            id={field.name}
                            name={field.name}
                            type={field.type || "text"}
                            placeholder={field.placeholder}
                            className="w-full rounded-lg border border-[var(--color-brand-400)] p-3 bg-white focus:outline-none focus:border-[var(--color-primary-mauve)] transition"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )
              } else {
                return (
                  <div key={fieldGroup.name}>
                    <label
                      htmlFor={fieldGroup.name}
                      className="block text-body-sm font-semibold text-[var(--color-primary-navy)] mb-2"
                    >
                      {fieldGroup.label}
                    </label>

                    {fieldGroup.type === "textarea" ? (
                      <textarea
                        id={fieldGroup.name}
                        name={fieldGroup.name}
                        rows={fieldGroup.rows || 5}
                        placeholder={fieldGroup.placeholder}
                        className="w-full rounded-lg border border-[var(--color-brand-400)] p-4 bg-white focus:outline-none focus:border-[var(--color-primary-mauve)] transition"
                      />
                    ) : fieldGroup.type === "tel" ? (
                      <div className={`relative transition-all duration-300 ${focused ? "scale-[1.01]" : ""}`}>
                        <PhoneInput
                          country="in"
                          value={phone}
                          onChange={setPhone}
                          enableSearch
                          onFocus={() => setFocused(true)}
                          onBlur={() => setFocused(false)}
                          containerClass="!w-full !relative !overflow-visible"
                          dropdownClass="!absolute !z-[9999] !max-h-80 !overflow-auto !shadow-2xl !rounded-xl !bg-white"
                          inputClass={`!w-full !h-[50px] !rounded-xl !border !bg-white !pl-14 !transition-all !duration-300 ${focused ? "!border-[var(--color-primary-mauve)] !shadow-lg" : "!border-[var(--color-brand-400)]"}`}
                          buttonClass="!border !border-[var(--color-brand-400)] !rounded-l-xl !bg-white !pointer-events-auto"
                          searchClass="!w-full !border !rounded !p-2"
                          inputProps={{ name: fieldGroup.name, id: fieldGroup.name, autoComplete: "tel" }}
                        />
                      </div>
                    ) : (
                      <input
                        id={fieldGroup.name}
                        name={fieldGroup.name}
                        type={fieldGroup.type || "text"}
                        placeholder={fieldGroup.placeholder}
                        className="w-full rounded-lg border border-[var(--color-brand-400)] p-3 bg-white focus:outline-none focus:border-[var(--color-primary-mauve)] transition"
                      />
                    )}
                  </div>
                )
              }
            })}

            <div className="relative z-0">
              <FlowButton
                text="Submit"
                id="contact"
                centered
                className="w-full mt-6 mx-auto"
              />
            </div>
          </form>
        </div>

        <div className="mt-8 flex justify-center gap-2 md:grid md:grid-cols-4 px-4 md:px-12 w-full md:w-max mx-auto">
          {show &&
            socials.map((item) => (
              <div key={item.label} className="scale-75 md:scale-100">
                <FlowButton icon={item.icon} id="contact" arrow={false} />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}