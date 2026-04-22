import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="hero__badge">Soluções web para vender mais</span>
          <h1>
            Tenha uma landing page profissional para transformar visitantes em clientes
          </h1>
          <p>
            Desenvolvemos páginas modernas, responsivas e estratégicas para apresentar
            seus serviços, fortalecer sua autoridade e aumentar suas oportunidades de negócio.
          </p>

          <div className="hero__actions">
            <a href="#planos" className="btn btn--primary">Escolher plano</a>
            <a href="#contato" className="btn btn--secondary">Falar com especialista</a>
          </div>

          <div className="hero__tags">
            <span>Design responsivo</span>
            <span>Código limpo em React</span>
            <span>Foco em conversão</span>
          </div>
        </div>

        <div className="hero__cards">
          <div className="hero__card hero__card--large">
            <h3>Uma estrutura feita para destacar seus serviços</h3>
            <p>
              Clareza na oferta, chamadas para ação visíveis, seções organizadas
              e comunicação orientada para conversão.
            </p>
          </div>

          <div className="hero__cards-row">
            <div className="hero__card">
              <h4>+ Autoridade</h4>
              <p>Presença digital com aparência profissional e confiável.</p>
            </div>

            <div className="hero__card">
              <h4>+ Conversão</h4>
              <p>Elementos estratégicos para gerar contatos e oportunidades.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero