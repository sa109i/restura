import { FaBars, FaX } from "react-icons/fa6"
import {LINKS} from "../constants/index"
import logo from "../assets/logo.png" 
import { useState } from "react"

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)

    function handleScroll(e, targetId) {
        // console.log(e.target.offsetTop);
        e.preventDefault();
        const targetElement = document.getElementById(targetId)
        
        window.scrollTo(
            {
                top: (targetElement.offsetTop - 60),
                behavior: "smooth"
            }
        )

        setNavOpen(false)
    }

    const navList = LINKS.map((link, index) => {
        return(
            <li key={index} className="z-10">
                <a 
                    href={`#${link.targetId}`} 
                    className={`uppercase lg:capitalize ${index != 0 && `lg:border-l-2 border-neutral-300/20`} lg:pl-2 hover:opacity-50 tracking-tighter`}
                    onClick={(e) => {handleScroll(e, link.targetId)}}
                >
                    {link.text}
                </a>
            </li>
        )
    })

    function navListHandler() {
        setNavOpen(prevNavOpen => !prevNavOpen)
    }

    return (
        <nav className="fixed w-full lg:w-[50rem] mx-[50%] -translate-x-[50%] backdrop-blur-lg flex flex-col lg:flex-row gap-4 p-4 lg:rounded-full lg:top-4 justify-between z-10">
            <div className="flex items-center justify-between w-full">
                <a href="#hero" onClick={(e) => handleScroll(e, "hero")}>
                    <img src={logo} alt="restaura" width={100} height='auto' />
                </a>

                <button 
                    className="cursor-pointer lg:hidden" 
                    onClick={() => {navListHandler()}}
                    
                >
                    {navOpen ? <FaX /> : <FaBars />}
                </button>
 
                <ul className="lg:flex flex-col hidden gap-3 lg:flex-row">
                    {navList}
                </ul>
                
            </div>

            {(navOpen) && 
                <ul className="flex flex-col gap-3 lg:hidden">
                    {navList}
                </ul>
            }

           
        </nav>
    )
}