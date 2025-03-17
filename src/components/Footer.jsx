import { SOCIAL_MEDIA_LINKS } from "../constants"

function Footer() {
    const socialMediaElements = SOCIAL_MEDIA_LINKS.map((link, index) => {
        return(
            <a key={index} href={link.href} target="_blank">{link.icon}</a>
        )
    })
    
  return (
    <footer className="flex flex-col items-center gap-4 p-6">
        <div className="flex gap-x-4 items-center">
            {socialMediaElements}
        </div>
        <span className="text-neutral-300 text-sm tracking-tighter">&copy; 2025 Restaura. All rights reserved</span>
    </footer>
  )
}

export default Footer