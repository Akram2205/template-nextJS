import Image from 'next/image'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Testimonial from './components/Testimonial'
import Writeups from './components/Writeups'
import Footer from './components/Footer'

export default function Home() {
  return (
   <>
    <Hero/>
    <Stats/>
    <Services/>
    <Solutions/>
    <Testimonial/>
    <Writeups/>
    <Footer/>
   </>
  )
}
