import { DISHES } from "../constants";

export default function Dishes() {
    const dishElements = DISHES.map(dish => {
        return(
            <div className="max-w-[250px]">
                <img src={dish.image} alt="" className="rounded-md" />
                <h1 className="font-medium">{dish.title}</h1>
                <p className="text-neutral-300 text-sm">{dish.description}</p>
            </div>
        )
    })
    return(
        <section className="py-6 px-3" id="dishes">
            <h1 className="text-center mb-4">OUR DISHES</h1>

            <div className="flex flex-col gap-8 md:flex-row flex-wrap justify-center items-center">
                {dishElements}
            </div>
            
        </section>
    )
}