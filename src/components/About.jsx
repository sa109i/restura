import { ABOUT } from "../constants"
import aboutImg from "../assets/about.jpeg"
import {motion} from "framer-motion"

function About() {
  return (
    <section className="py-6 flex flex-col gap-8 items-center container mx-auto" id="about">
        <motion.h1 
          className="text-2xl"
          >About Us</motion.h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <img src={aboutImg} alt="" className="rounded-lg max-w-[50%] -rotate-2" />
            <div className="">
                <motion.h1 
                  className="text-3xl text-center md:text-left" 
                  initial={{ y:20, opacity : 0 }}
                  whileInView={{ y: 0, opacity : 1 }}
                  viewport={{once:true}}
                  transition={{ duration: .6 }}
                  >{ABOUT.header}</motion.h1>
                <motion.div 
                  initial={{ y:20, opacity : 0 }}
                  whileInView={{ y: 0, opacity : 1 }}
                  viewport={{once:true}}
                  transition={{ duration: .6, delay: .5 }}
                  className="bg-red-400 w-20 h-1 my-1 -rotate-2">
                </motion.div>
                <motion.p 
                  initial={{ y:20, opacity : 0 }}
                  whileInView={{ y: 0, opacity : 1 }}
                  viewport={{once:true}}
                  transition={{ duration: .6, delay: 1 }}
                  className="text-neutral-400">{ABOUT.content}</motion.p>
            </div>
        </div> 
    </section>
  )
}

export default About