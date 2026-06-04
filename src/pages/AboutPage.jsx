function AboutPage() {
  return (
    <main className="container page-content">
      <div className="content-card">
        <h2>Телеки не продаем, зато подключаем быстро.</h2>
        <p>Мы — компания, предоставляющая услуги кабельного телевидения. Наша задача — обеспечить клиентов качественным телевещанием, удобными тарифами и надежным сервисом.</p>
        <p>
          Мы подключаем новых абонентов, обслуживаем оборудование и постоянно совершенствуем линейку тарифов, 
          ориентируясь на пожелания пользователей. Благодаря современным технологиям и профессиональной 
          поддержке наши клиенты получают стабильный доступ к любимым телеканалам и дополнительным сервисам.
        </p>
        <h3>Наши преимущества:</h3>
        <ul>
          <li>— Индивидуальные пакеты каналов</li>
          <li>— Быстрое подключение</li>
          <li>— Стабильный сигнал</li>
          <li>— Техническая поддержка и обслуживание</li>
          <li>— Удобная онлайн-оплата</li>
        </ul>
        <div className="stats-grid" style={{ marginTop: '1.5rem' }}>
          <div className="stat-card"><span className="stat-value">60+</span><span className="stat-label">Пакетов</span></div>
          <div className="stat-card"><span className="stat-value">3</span><span className="stat-label">Партнеров</span></div>
          <div className="stat-card"><span className="stat-value">5.0</span><span className="stat-label">Рейтинг</span></div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
