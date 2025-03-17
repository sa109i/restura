import { REVIEW } from "../constants"
import xaviour from "../assets/xaviour.jpeg"
import customerImg1 from "../assets/customer1.jpeg"
import customerImg2 from "../assets/customer2.jpeg"
import customerImg3 from "../assets/customer3.jpeg"
import customerImg4 from "../assets/customer4.jpeg"
import { motion } from "framer-motion"


function Review() {
    const containerVarient = {
        hidden: { },
        visible: {
            // opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: .2
            }
        }
    }

    const childrenVarient = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    }

    // const 

  return (
    <section className="p-6 lg:mx-[120px]" id="review">
        <div className="flex flex-col items-center gap-y-6">
            <p className="text-2xl font-light mb-10 tracking-tight">{REVIEW.content}</p>

            <div className="flex items-center gap-x-3">
                <img 
                    src={xaviour} 
                    alt={REVIEW.name}
                    className="rounded-full h-12 w-12 object-cover border-2"
                />

                <div>
                    <h1 className="font-medium">{REVIEW.name}</h1>
                    <span className="text-neutral-400 text-sm">{REVIEW.profession}</span>
                </div>
            </div>
            <motion.div 
                variants={containerVarient}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-14 flex flex-col gap-2 md:flex-row">
                {
                    [customerImg1, customerImg2, customerImg3, customerImg4].map((img, index) => {
                        return(
                            <motion.img 
                                variants={childrenVarient}
                                key={index} 
                                src={img} 
                                alt="customer" className="rounded-br-3xl rounded-tl-3xl w-[260px] h-[300px] md:w-[132px] md:h-[200px] object-cover" />
                        )
                    })
                }
            </motion.div>
        </div>
    </section>
  )
}

export default Review