import style from '../styles/cabecalho.module.css'

function Cabecalho() {
    return(
        <header className={style.header}>
            <article>
                <h1>Despertador</h1>
                <p>Bons sonhos</p>
            </article>
        </header>
    );
}

export default Cabecalho;