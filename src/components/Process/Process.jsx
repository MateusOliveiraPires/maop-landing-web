import { processSteps } from '../../data/siteData'
import './Process.css'

function Process() {
  return (
    <section className="process section">
      <div className="container process__box">
        <div className="process__intro">
          <span className="section__tag">Processo</span>
          <h2>Um processo simples para tirar sua página do papel</h2>
        </div>

        <div className="process__list">
          {processSteps.map((step, index) => (
            <div className="process__item" key={index}>
              <span className="process__number">{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process