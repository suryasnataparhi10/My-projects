import { useEffect, useState } from "react"
import { Background } from "./Components/Background"
import { Navbar } from "./Navbar/Navbar";
import { Hero } from "./Hero/Hero";

export const App = () => {
  let heroData = [
    {text1:"Dive Into" , text2:"What You Love"},
    {text1:"Indulge" , text2:"Your Passions"},
    {text1:"Give Into" , text2:"Your Passions"},
  ]

  const [heroCount, setHeroCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {return count===11 ? 0 : count+1})
    } , 3000);
  } , [])
  return (
    <div>
        <Background heroCount={heroCount}/>
        <Navbar/>
        <Hero setHeroCount = {setHeroCount}
              heroCount = {heroCount[heroCount]}
              heroData = {heroData}
        />
    </div>
  )
}
