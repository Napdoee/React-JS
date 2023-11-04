import { useState } from 'react'

import Header from "@/sections/Header"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Portfolio from "@/sections/Portfolio"
import Contact from "@/sections/Contact"
import Footer from "@/sections/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Hero />

      <About />

      <Portfolio />

      <Contact />

      <Footer />

      <a href="#home"
        class="hidden h-14 w-14 bg-primary lg:block rounded-full fixed z-[50] bottom-4 right-4 p-4 justify-center items-center hover:animate-pulse"
        id="to-top">
        <span class="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
      </a>
    </>
  )
}

export default App
