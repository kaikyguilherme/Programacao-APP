import './styles.css'

export default function Servico () {
    const services = [
        ['01', 'Abertura de empresas', 'Estruturamos seu negócio da escolha do regime até o registro oficial.'],
        ['02', 'Contabilidade mensal', 'Rotinas fiscais e contábeis organizadas, com entrega dentro dos prazos.'],
        ['03', 'Folha de pagamento', 'Gestão completa de salários, obrigações e benefícios dos colaboradores.'],
        ['04', 'Planejamento tributário', 'Análise estratégica para reduzir custos e manter sua empresa segura.'],
    ]

    return (
        <section className="page-shell services-page">
            <span className="eyebrow">O que fazemos</span>
            <h1 className="page-title">Contabilidade completa para sua empresa.</h1>
            <p className="page-intro">
                Soluções sob medida para manter sua gestão organizada, conforme a legislação
                e preparada para crescer com segurança.
            </p>
            <div className="service-grid">
                {services.map(([number, title, description]) => (
                    <article className="service-card" key={number}>
                        <span>{number}</span>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}