import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <div>
          <h2 className="header__logo">MAOP Digital Solutions</h2>
          <p className="header__subtitle">Landing pages e sites para gerar mais vendas</p>
        </div>

        <a href="#planos" className="btn btn--outline">
          Ver planos
        </a>
      </div>
    </header>
  )
}

export default Header