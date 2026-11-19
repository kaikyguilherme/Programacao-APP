import './styles.css'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <p className="footer-brand">Contabilidade <span>Simples</span></p>
                <p>&copy; {new Date().getFullYear()} — Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}