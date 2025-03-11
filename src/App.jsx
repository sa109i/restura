import Dishes from "./components/Dishes"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Mission from "./components/Mission"

function App() {

  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <Dishes />
      <About />
      <Mission />
    </main>
  )
}

export default App
