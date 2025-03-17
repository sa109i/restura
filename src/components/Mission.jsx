import { MISSION } from "../constants"
import video from "../assets/mission.mp4"
import img from "../assets/mission.jpeg"
import { motion } from "framer-motion"

function Mission() {
  return (
    <section className="p-6" id="mission">
        <h1 className="text-center text-2xl mb-6 font-light">Our Mission</h1>
        <div className="relative flex flex-col items-center h-[40vh]">
            <motion.video 
              src={video} 
              autoPlay 
              loop 
              poster={img} 
              className="h-full w-full object-cover"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .5 }}
              >

              </motion.video>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: .5 }}
              viewport={{ once: true }}
              className="absolute top-[35%] w-[80%] text-center">{MISSION}</motion.p>

        </div>

    </section>
  )
}

export default Mission