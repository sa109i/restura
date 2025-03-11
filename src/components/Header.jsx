import { FaBars } from "react-icons/fa6"
import {LINKS} from "../constants/index"
import logo from "../assets/logo.png" 
import { useState } from "react"

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const navList = LINKS.map((link, index) => {
        return(
            <li key={index}>
                <a href={link.targetId} className="uppercase">{link.text}</a>
            </li>
        )
    })

    function navListHandler() {
        setNavOpen(prevNavOpen => !prevNavOpen)
        console.log("clicked!");
    }

    return (
        <nav className="bg-[] fixed w-full backdrop-blur-md flex flex-col md:flex-row gap-4 p-4">
            <div className="flex items-center justify-between">
                <img src={logo} alt="restaura" width={100} height='auto' />

                <button className="cursor-pointer" onClick={() => navListHandler}>
                    <FaBars />
                </button>
            </div>

           {navOpen && 
            <ul className="flex flex-col gap-3">
                {navList}
            </ul>}
        </nav>
    )
}