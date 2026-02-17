import FlowButton from "../components/FlowButton"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa"

export default function ContactSection({ imageSrc, fields = [] }) {
  const socials = [
    { label: "LinkedIn", icon: <FaLinkedinIn /> },
    { label: "Facebook", icon: <FaFacebookF /> },
    { label: "Instagram", icon: <FaInstagram /> },
    { label: "YouTube", icon: <FaYoutube /> }
  ]

  return (
    <section className="w-full bg-[var(--color-bg-white)]">
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <form className="rounded-2xl bg-[var(--color-brand-400)]/10 p-8 space-y-6">
            {fields.map((field) => (
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
                    className="w-full rounded-lg border border-[var(--color-brand-400)] p-3 text-body bg-white focus:outline-none focus:border-[var(--color-primary-mauve)] transition"
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

            <FlowButton
              text="Submit"
              id="contact"
              centered
              className="w-full mt-6"
            />
          </form>

          <div className="w-full h-full overflow-hidden rounded-2xl group">
            <img
              src={imageSrc}
              alt="contact"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 px-12">
          {socials.map((item) => (
            <FlowButton
              key={item.label}
              text={item.label}
              icon={item.icon}
              id="contact"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
