import style from './nav.module.scss'

export default function Nav () {

    return (
        <nav className={style.nav}>
            <div className={style.container}>
                <img src='/assets/logo/Logo.svg'/>
                <ul>
                    <li>Accueil</li>
                    <li>Services</li>
                    <li>Pourquoi HDF ?</li>
                    <li>A propos</li>
                    <li>Contact</li>
                </ul>
            </div>

        </nav>
    )
}