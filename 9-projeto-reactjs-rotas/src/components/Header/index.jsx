import { Link, NavLink } from 'react-router-dom'
import './styles.css'


export default function Header() {
    return (
        <header className="site-header">
           <Link className="brand" to='/' aria-label="Contabilidade Simples - início">
                <span className="brand-mark" aria-hidden="true">CS</span>
                <span className="brand-copy">
                    <strong>Contabilidade</strong>
                    <small>Simples</small>
                </span>
           </Link>

           <nav className="main-nav" aria-label="Navegação principal">
                <NavLink to='/servicos'>Serviços</NavLink>
                <NavLink to='/sobre-nos'>Sobre Nós</NavLink>
                <NavLink to='/endereco'>Endereço</NavLink>
                <NavLink to='/suporte'>Suporte ao Cliente</NavLink>
           </nav>
        </header>
    )
}