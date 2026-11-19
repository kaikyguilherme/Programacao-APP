import './styles.css'

export default function Endereco () {
    return (
        <section className="page-shell support-page">
            <div className="support-heading">
                <span className="eyebrow">Suporte ao cliente</span>
                <h1 className="page-title">Vamos conversar sobre seu negócio.</h1>
                <p className="page-intro">
                    Tire suas dúvidas com nossa equipe. Estamos prontos para oferecer
                    a orientação que sua empresa precisa.
                </p>
            </div>

            <div className="contact-grid">
                <a href="tel:+5571999999999" className="contact-card">
                    <span className="contact-icon" aria-hidden="true">TEL</span>
                    <div>
                        <small>Telefone</small>
                        <strong>(71) 99999-9999</strong>
                    </div>
                </a>
                <a href="mailto:contabilidadeteste@gmail.com" className="contact-card">
                    <span className="contact-icon" aria-hidden="true">@</span>
                    <div>
                        <small>E-mail</small>
                        <strong>contabilidadeteste@gmail.com</strong>
                    </div>
                </a>
            </div>
        </section>
    )
}