import FlowButton from "../components/FlowButton"
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

  return (
    <section className="w-full bg-[var(--color-bg-white)]">
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

          <form className="rounded-2xl bg-[var(--color-brand-400)]/10 p-8 space-y-2 w-[100%] order-2 md:order-1">
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
                            className="w-full rounded-lg border border-[var(--color-brand-400)] p-4 text-body bg-white focus:outline-none focus:border-[var(--color-primary-mauve)] transition"
                          />
                        ) : (
                          <input
                            id={field.name}
                            name={field.name}
                            type={field.type || "text"}
                            placeholder={field.placeholder}
                            className="w-full rounded-lg border border-[var(--color-brand-400)] p-3 text-body bg-white focus:outline-none focus:border-[var(--color-primary-mauve)] transition"
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
                        className="w-full rounded-lg border border-[var(--color-brand-400)] p-4 text-body bg-white focus:outline-none focus:border-[var(--color-primary-mauve)] transition"
                      />
                    ) : (
                      <input
                        id={fieldGroup.name}
                        name={fieldGroup.name}
                        type={fieldGroup.type || "text"}
                        placeholder={fieldGroup.placeholder}
                        className="w-full rounded-lg border border-[var(--color-brand-400)] p-3 text-body bg-white focus:outline-none focus:border-[var(--color-primary-mauve)] transition"
                      />
                    )}
                  </div>
                )
              }
            })}

            <FlowButton
              text="Submit"
              id="contact"
              centered
              className="w-[100%] mt-8 mx-auto"
            />
          </form>
        </div>

        <div className="mt-8 flex justify-center gap-2 md:grid md:grid-cols-4 px-4 md:px-12 w-full md:w-max mx-auto">
          {show &&
            socials.map((item) => (
              <div key={item.label} className="scale-75 md:scale-100">
                <FlowButton
                  icon={item.icon}
                  id="contact"
                  arrow={false}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
