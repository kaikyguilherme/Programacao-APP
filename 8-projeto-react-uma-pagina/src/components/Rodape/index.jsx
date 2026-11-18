import './styles.css'

export default function Rodape () {
    return (
        <footer>
            <p>
                &copy; {new Date().getFullYear()} - todos os direitos reservados 
            </p>
            <p>SENAI - BA</p>
        </footer>
    )
}