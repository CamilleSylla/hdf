import SectionWidth from '../../template/sectionWidth/SectionWidth'
import style from './service.module.scss'

export default function Services () {

    const Icons = ({imgSrc, title}) => {
        return (
            <article className={style.card}>
                <div className={style.icon}>
                    <img src={imgSrc}/>
                </div>
                <h1>{title}</h1>
            </article>
        )
    }

    return (
        <div className={style.wrapper}>
            <SectionWidth>
                <h1 style={{textAlign: 'center', padding: "0 0 5vh 0", color: 'var(--primary-color)'}}>Nos domaines d'intervention</h1>
                <div className={style.container}>
            <Icons imgSrc='/assets/icons/wall.svg' title="isolation"/>
            <Icons imgSrc='/assets/icons/chauf.svg' title="Chauffage"/>
            <Icons imgSrc='/assets/icons/panneau.svg' title="solaire"/>
            <Icons imgSrc='/assets/icons/wind.svg' title="ventilation"/>
                </div>
            </SectionWidth>
        </div>
    )
}