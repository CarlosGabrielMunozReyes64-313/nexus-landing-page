import { VALOR_ITEMS } from '../data/siteData'

// Caja "Nuestro enfoque diferencial" de la página de inicio.
export default function ValorBox() {
  return (
    <div className="valor-box">
      <div className="valor-box-tag">Nuestro enfoque diferencial</div>
      {VALOR_ITEMS.map((item) => (
        <div className="valor-item" key={item.title}>
          <div className="valor-dot" />
          <div>
            <div className="valor-item-title">{item.title}</div>
            <div className="valor-item-text">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
