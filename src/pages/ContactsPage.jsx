function ContactsPage() {
  return (
    <main className="container page-content">
      <div className="content-card">
        <div className="contacts-grid">
          <div>
            <h3>Наш адрес</h3>
            <p>г. Москва, ул. Примерная, д. 1</p>
            <p>Пн–Пт: 9:00 – 20:00</p>
            <p>Сб-Вс: 10:00 – 18:00</p>
          </div>
          <div>
            <h3>Связаться с нами</h3>
            <p className="contacts-data"><img src="tel_icon.svg" /> +7 (123) 456-78-90</p>
            <p className="contacts-data"><img src="mail_icon.svg" /> info@tv_signal.ru</p>
            <p className="contacts-data"><img src="tg_icon.svg" /> Telegram: @tv_signal</p>
          </div>
        </div>
        <h3 style={{ marginTop: '1.5rem' }}>Написать нам</h3>
        <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.') }}>
          <input className="input-field" type="text"  placeholder="Ваше имя"           required />
          <input className="input-field" type="email" placeholder="Email"               required />
          <textarea className="input-field" rows={4}  placeholder="Ваше сообщение…"    required />
          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
      </div>
    </main>
  )
}

export default ContactsPage
