import { FiArrowRight } from "react-icons/fi"

export default function FlowButton({
  text,
  icon,
  className,
  id,
  centered = false
}) {
  return (
    <a
      onClick={(e) => {
        e.preventDefault()
        const target = document.getElementById(id)
        if (target) {
          const offset = window.innerHeight * 0.15
          const top =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            offset
          window.scrollTo({ top, behavior: "smooth" })
        }
      }}
      className={`${className ?? ""} ${
        centered ? "mx-auto block" : ""
      } cta-wrapper`}
    >
      <div className="cta-button">
        <div className="bg-circle" />

        <p className="text flex items-center gap-3">
          {icon && <span className="text-lg">{icon}</span>}
          {text}
        </p>

        <div className="arrow-wrapper">
          <FiArrowRight className="arrow-icon" />
        </div>
      </div>
    </a>
  )
}
