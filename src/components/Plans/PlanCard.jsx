function PlanCard({ plan }) {
  return (
    <article className={`plan-card ${plan.featured ? 'plan-card--featured' : ''}`}>
      {plan.featured && <span className="plan-card__badge">Mais escolhido</span>}

      <h3>{plan.name}</h3>
      <p className="plan-card__description">{plan.description}</p>
      <strong className="plan-card__price">{plan.price}</strong>
      <span className="plan-card__payment">Pagamento único</span>

      <ul className="plan-card__list">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <a href="#contato" className={plan.featured ? 'btn btn--primary' : 'btn btn--secondary'}>
        {plan.buttonText}
      </a>
    </article>
  )
}

export default PlanCard