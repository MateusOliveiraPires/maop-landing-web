import { plans } from '../../data/siteData'
import PlanCard from './PlanCard'
import './Plans.css'

function Plans() {
  return (
    <section id="planos" className="plans section section--alt">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Planos</span>
          <h2>Escolha o plano ideal para o seu momento</h2>
          <p>
            Opções para quem está começando, crescendo ou quer uma estrutura
            mais robusta para gerar resultados online.
          </p>
        </div>

        <div className="plans__grid">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans