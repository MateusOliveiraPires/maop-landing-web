import { benefits } from '../../data/siteData'
import './Benefits.css'

function Benefits() {
  return (
    <section className="benefits section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Diferenciais</span>
          <h2>Por que investir em uma landing page profissional?</h2>
          <p>
            Uma boa página ajuda sua empresa a comunicar valor, gerar confiança
            e converter melhor.
          </p>
        </div>

        <div className="benefits__grid">
          {benefits.map((item) => (
            <article className="benefits__card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits