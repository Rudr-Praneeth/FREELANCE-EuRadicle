import FlowButton from "../components/FlowButton"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa"

export default function ContactSection({ imageUrl, fields = [], header }) {
  const socials = [
    { label: "LinkedIn", icon: <FaLinkedinIn /> },
    { label: "Facebook", icon: <FaFacebookF /> },
    { label: "Instagram", icon: <FaInstagram /> },
    { label: "YouTube", icon: <FaYoutube /> }
  ]

  return (
    <section className="w-full bg-[var(--color-bg-white)]">
      {header  && header}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <form className="rounded-2xl bg-[var(--color-brand-400)]/10 p-8 space-y-2 w-[100%]">
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

          <div className="w-full h-full overflow-hidden rounded-2xl group">
            <img
              src={imageUrl}
              alt="contact"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 px-12 w-max mx-auto">
          {socials.map((item) => (
            <FlowButton
              key={item.label}
              icon={item.icon}
              id="contact"
              arrow={false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
