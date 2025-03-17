import posterImg from "../assets/hero.jpeg"
import video from "../assets/hero.mp4"
import logo from "../assets/logo.png"
import { motion } from "framer-motion"

export default function Hero() {
    return(
        <section className={`bg-red-400 h-[100vh]`} id="hero">
            <video 
                src={video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster={posterImg}
                >
            </video>
            <div className="absolute bottom-20 px-4 flex flex-col items-center w-full">
                <div className="w-[80%]">
                    <motion.img 
                        src={logo} 
                        alt="" 
                        className=""
                        initial={{ y: 400, opacity: 0 }}
                        animate={{ y: [0, -10, 0], opacity: 1 }}
                        transition={{ duration: 1 }}
                    />

                    <motion.h3
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: .2 }}
                    >Paris</motion.h3>
                </div>
            </div>
        </section>
    )
}