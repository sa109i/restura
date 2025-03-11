import { ABOUT } from "../constants"
import aboutImg from "../assets/about.jpeg"

function About() {
  return (
    <section className="py-6 px-6 flex flex-col gap-8 items-center">
        <h1 className="text-2xl">About Us</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <img src={aboutImg} alt="" className="rounded-lg max-w-[50%] -rotate-2" />
            <div className="">
                <h1 className="text-3xl text-center md:text-left">{ABOUT.header}</h1>
                <p className="text-neutral-400">{ABOUT.content}</p>
            </div>
        </div> 
    </section>
  )
}

export default About