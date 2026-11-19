import './styles.css'

export default function SobreNos () {
    return (
        <section className="page-shell about-page">
            <div className="about-copy">
                <span className="eyebrow">Quem somos</span>
                <h1 className="page-title">Cuidado, clareza e compromisso.</h1>
                <p className="page-intro">
                    Somos uma equipe dedicada a tornar a contabilidade mais simples.
                    Atuamos ao lado dos empreendedores com atendimento próximo,
                    responsabilidade técnica e soluções feitas para cada realidade.
                </p>
            </div>

            <div className="values-grid">
                <article>
                    <span>01</span>
                    <h2>Excelência</h2>
                    <p>Cuidado em cada detalhe e responsabilidade com a sua empresa.</p>
                </article>
                <article>
                    <span>02</span>
                    <h2>Proximidade</h2>
                    <p>Comunicação clara, rápida e personalizada em todas as etapas.</p>
                </article>
                <article>
                    <span>03</span>
                    <h2>Confiança</h2>
                    <p>Informações organizadas e estratégias seguras para crescer.</p>
                </article>
            </div>
        </section>
    )
}