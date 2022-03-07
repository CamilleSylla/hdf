import style from './sectionwidth.module.scss'

export default function SectionWidth ({children}) {

    return (
        <div className={style.wrapper}>
            {children}
        </div>
    )
}