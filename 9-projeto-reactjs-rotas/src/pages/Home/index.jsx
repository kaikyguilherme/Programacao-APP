import './styles.css'

export default function Home () {
    return (
        <section className="home-page">
            <div className="home-content">
                <div className="home-copy">
                    <span className="eyebrow">Contabilidade descomplicada</span>
                    <h1>Seu negócio no caminho certo.</h1>
                    <p>
                        Cuidamos da contabilidade para você ganhar tempo, tomar melhores decisões
                        e focar no crescimento da sua empresa.
                    </p>
                    <div className="home-actions">
                        <a className="button-primary" href="/suporte">Fale conosco</a>
                        <a className="button-secondary" href="/servicos">Ver serviços</a>
                    </div>
                </div>

                <div className="accounting-card" aria-label="Resumo de serviços">
                    <div className="card-top">
                        <span>Visão da empresa</span>
                        <strong>+24%</strong>
                    </div>
                    <div className="chart" aria-hidden="true">
                        <span style={{ '--bar': '42%' }}></span>
                        <span style={{ '--bar': '58%' }}></span>
                        <span style={{ '--bar': '48%' }}></span>
                        <span style={{ '--bar': '72%' }}></span>
                        <span style={{ '--bar': '64%' }}></span>
                        <span style={{ '--bar': '88%' }}></span>
                    </div>
                    <div className="card-metrics">
                        <div><small>Documentos</small><strong>100%</strong></div>
                        <div><small>Conformidade</small><strong>Em dia</strong></div>
                    </div>
                </div>
            </div>

            <div className="home-benefits">
                <article><strong>+10 anos</strong><span>de experiência</span></article>
                <article><strong>500+</strong><span>empresas atendidas</span></article>
                <article><strong>100%</strong><span>atendimento digital</span></article>
            </div>
        </section>
    )
}