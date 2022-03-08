import style from './section.module.scss'

export default function Section ({height, children}) {

    return( 
        <section className={style.wrapper}>
            {children}
        </section>
    )
}