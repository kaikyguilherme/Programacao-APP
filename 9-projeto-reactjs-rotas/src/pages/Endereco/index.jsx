import './styles.css'

export default function Endereco () {
    return (
        <section className="page-shell location-page">
            <div className="location-copy">
                <span className="eyebrow">Nossa localização</span>
                <h1 className="page-title">Venha nos conhecer.</h1>
                <p className="page-intro">
                    Estamos prontos para ajudar sua empresa a seguir com segurança
                    e tranquilidade.
                </p>

                <address>
                    <span className="address-label">Endereço</span>
                    <strong>Rua Travessa do Meio</strong>
                    <span>Ao lado do Cemitério Deus é Fiel</span>
                    <span>CEP: 40477-990</span>
                </address>
            </div>

            <div className="map-card" aria-label="Ilustração do mapa">
                <div className="map-road road-one"></div>
                <div className="map-road road-two"></div>
                <div className="map-pin">
                    <span>CS</span>
                </div>
                <div className="map-caption">Contabilidade Simples</div>
            </div>
        </section>
    )
}