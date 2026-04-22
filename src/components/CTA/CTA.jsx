import './CTA.css'

function CTA() {
  return (
    <section id="contato" className="cta section">
      <div className="container">
        <div className="cta__box">
          <span className="section__tag">Chamada para ação</span>
          <h2>
            Pronto para ter uma página que valoriza seu serviço e aumenta suas chances de venda?
          </h2>
          <p>
            Escolha o plano ideal e dê o próximo passo para construir uma presença
            digital mais profissional, estratégica e preparada para conversão.
          </p>

          <div className="cta__actions">
            <a href="https://wa.me/5531983347045" className="btn btn--primary">
              Solicitar atendimento
            </a>
            <a href="mailto:teuspires@gmail.com" className="btn btn--secondary">
              Enviar e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA