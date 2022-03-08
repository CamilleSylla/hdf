import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useContext, useEffect, useRef, useState } from 'react'
import { NavContext } from '../../context/NavContext'
import style from './nav.module.scss'

export default function Nav () {

    const [nav, setNav] = useContext(NavContext)
    const [menu, setMenu] = useState(false)
    const menuRef = useRef()
    const navRef = useRef()

    useEffect(() => {
        if (nav.services ) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.from(navRef.current, {
                background : "transparent",
                color : "#F2F2F2",
                borderBottom: "4px solid transparent",
                scrollTrigger : {
                    trigger : nav.services.current,
                    start : "bottom bottom",
                    end : "bottom+=10% bottom",
                    scrub : 1
                }
            })
        }

        if (window.matchMedia("(max-width: 991.98px)").matches) {
            if (menu === true) {
                menuRef.current.style.opacity = 1
            } else {
                menuRef.current.style.opacity = 0
            }
        }
    }, [nav, menu])

    const ScrollTo = (section) => {
        nav[section].current.scrollIntoView()
    }

    return (
        <nav ref={navRef} className={style.nav}>
            <div className={style.container}>
                <img src='/assets/logo/Logo.svg'/>
                <div onClick={() => setMenu(!menu)} className={style.hamburger}>
                   {menu === false ? <img className={style.ham_img} src="/assets/icons/hamburger.svg"/> : <img className={style.cross_img} src="/assets/icons/cross.svg"/>} 
                </div>
                <ul ref={menuRef}>
                    <li onClick={() => ScrollTo("services")} >Services</li>
                    <li onClick={() => ScrollTo("whyus")} >Pourquoi HDF ?</li>
                    <li onClick={() => ScrollTo("about")}>A propos</li>
                    <li onClick={() => ScrollTo("contact")}>Contact</li>
                </ul>
            </div>

        </nav>
    )
}