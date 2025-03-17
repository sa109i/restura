import Dishes from "./components/Dishes"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Mission from "./components/Mission"
import Expertise from "./components/Expertise"
import Review from "./components/Review"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <main className="bg-black text-white">
      <Header />
        <Hero />
        <Dishes />
        <About />
        <Mission />
        <Expertise />
        <Review />
        <Contact />
      <Footer />
    </main>
  )
}

export default App
