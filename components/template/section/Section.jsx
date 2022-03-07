import style from './section.module.scss'

export default function Section ({height, children}) {

    return( 
        <section style={{height : `${height ? height : "100vh"}`}}className={style.wrapper}>
            {children}
        </section>
    )
}