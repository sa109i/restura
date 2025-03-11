import { MISSION } from "../constants"
import video from "../assets/mission.mp4"
import img from "../assets/mission.jpeg"

function Mission() {
  return (
    <section className="p-6">
        <h1 className="text-center text-2xl mb-6">Our Mission</h1>
        <div className="relative flex flex-col items-center h-[40vh]">
            <video src={video} autoPlay loop poster={img} className="h-full w-full object-cover"></video>
            <p className="absolute top-[35%] w-[80%] text-center text-lg">{MISSION}</p>

        </div>

    </section>
  )
}

export default Mission