import { faqItems } from '../../data/siteData'
import './FAQ.css'

function FAQ() {
  return (
    <section className="faq section section--alt">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Perguntas frequentes</span>
          <h2>Dúvidas comuns antes de contratar</h2>
        </div>

        <div className="faq__list">
          {faqItems.map((item) => (
            <article className="faq__item" key={item.id}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ