import useStore from '../../store/useStore'
import { formatPrice } from '../../utils/formatters'
import { CATEGORY_NAMES } from '../../assets/products'

const CATEGORIES = ['megafon', 'rostelecom', 'beeline']

function AdminCategories() {
  const products = useStore(s => s.products)

  return (
    <div>
      <h2>Пакеты партнеров</h2>
      {CATEGORIES.map(cat => {
        const list = products.filter(p => p.category === cat)
        return (
          <section key={cat} style={{ marginBottom: '2rem' }}>
            <h3>{CATEGORY_NAMES[cat]} ({list.length} пакетов)</h3>
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr><th>ID</th><th>Название Пакета</th><th>Цена</th></tr>
                </thead>
                <tbody>
                  {list.map(p => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.name}</td>
                      <td>{formatPrice(p.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default AdminCategories
