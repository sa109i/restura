import { useState } from "react";
import { DISHES } from "../constants";
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa6";

export default function Dishes() {
    const elementVarients = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                // duration: 3,
                staggerChildren: .2
            }
        }
    }

    const childVarients = {
        hidden: { y: 120 },
        visible: { y: 0 }
    }

    const dishElements = DISHES.map((dish, index) => {
        return(
            <motion.div 
                key={index} 
                // className="max-w-[250px]"
                variants={childVarients}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: false }}
            >
                <motion.img 
                    src={dish.image} 
                    alt={dish.title} 
                    whileHover={{ scale: 1.025 }}
                    transition={{ duration: .5 }}
                    className="rounded-md" 
                />
                <motion.h1 
                    className="font-medium"
                >
                        {dish.title}
                </motion.h1>
                <p className="text-neutral-300 text-sm">{dish.description}</p>
            </motion.div>
        )
    })

    return(
        <section className="py-16 px-3 container mx-auto" id="dishes">
            
            <h1 className="text-center mb-8 tracking-tighter text-xl md:text-2xl lg:text-3xl">OUR DISHES</h1>

            <motion.div 
                className="grid md:grid-cols-5 justify-center gap-8 "
                variants={elementVarients}
                initial="hidden"
                animate="visible"
            >
                {dishElements}
            </motion.div>
            
        </section>
    )
}