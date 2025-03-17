import { CONTACT } from "../constants"


function Contact() {
    const contactElements = CONTACT.map(item => {
        return(
            <span 
                key={item.key}
                className="text-neutral-300 text-center"
            >{item.value}</span>
        )
    })

  return (
    <section className="p-6" id="contact">
        <h1 className="text-center text-2xl mb-5">Contact Us</h1>
        <div className="flex flex-col items-center gap-3">
            {contactElements}
        </div>
    </section>
  )
}

export default Contact