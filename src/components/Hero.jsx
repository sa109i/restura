import posterImg from "../assets/hero.jpeg"
import video from "../assets/hero.mp4"
import logo from "../assets/logo.png"

export default function Hero() {
    return(
        <section className={`bg-red-400 h-[100vh]`}>
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
                    <img src={logo} alt="" className=""/>
                    <h3>Paris</h3>
                </div>
            </div>
        </section>
    )
}