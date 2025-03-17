import { CUSINES } from "../constants/index"
import { motion } from "framer-motion"

function Expertise() {
    const containerVarients = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 1
            }
        }
    }

    const childVarients = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, 
            transition: { duration: 1 }
        }
    }

    const expertiseElements = CUSINES.map((cusine, index) => {
        return(
            <motion.div 
                key={index} 
                className="flex gap-4 flex-row"
                variants={childVarients}
                >
                <span>{cusine.number}</span>
                <img 
                    src={cusine.image} 
                    alt={cusine.title}
                    className="rounded-lg w-[25%]"
                 />

                <div className="flex flex-col">
                    <h1 className="uppercase text-red-400 font-medium">{cusine.title}</h1>
                    <p>{cusine.description}</p>
                </div>
            </motion.div>
        )
    })

  return (
    <section className="py-16 container mx-auto" id="expertise">
        <h1 className="text-center mb-8 tracking-tighter text-xl md:text-2xl lg:text-3xl font-light">Our Expertise</h1>

        <motion.div 
            variants={containerVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="flex flex-col gap-8">
            {expertiseElements}
        </motion.div>

    </section>
  )
}

export default Expertise