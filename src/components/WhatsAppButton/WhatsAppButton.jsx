import { companyInfo } from '../../data/siteData'
import './WhatsAppButton.css'

function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    companyInfo.whatsappMessage
  )}`

  return (
    <a
      href={whatsappLink}
      className="whatsapp-button"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <span className="whatsapp-button__icon">💬</span>
      <span className="whatsapp-button__text">WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton