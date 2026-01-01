import { NavBar } from "@/components/NavBar"
import { Hero } from "@/components/Hero"
import { HeroTwo } from "@/components/HeroTwo"
import { HeroThree } from "@/components/HeroThree"
import { HeroFour } from "@/components/HeroFour"
import { Footer } from "@/components/Footer"

export default function Portfolio(){
    
    return (
        <div>
            <NavBar/>
            <Hero/>
            <HeroTwo/>
            <HeroThree/>
            <HeroFour/>
            <Footer/>
        </div>
    )
}